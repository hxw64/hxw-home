begin;

-- 管理员白名单：只有这里列出的 auth.uid() 才能执行管理员操作。
create table if not exists public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.site_admins enable row level security;
revoke all on public.site_admins from public, anon, authenticated;
insert into public.site_admins(user_id)
values ('6e63eed0-2700-40af-9a44-c585a4a19b8b')
on conflict (user_id) do nothing;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select exists (
    select 1 from public.site_admins where user_id = auth.uid()
  );
$$;
revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated, service_role;

-- 留言板标题文案：数据库再次校验所有长度；前端只能通过管理员 RPC 修改。
create table if not exists public.board_settings (
  id smallint primary key default 1,
  kicker_zh text not null default '',
  title_zh text not null default '留言板',
  intro_zh text not null default '',
  kicker_en text not null default '',
  title_en text not null default 'Message Board',
  intro_en text not null default '',
  updated_at timestamptz not null default now(),
  constraint board_settings_singleton check (id = 1),
  constraint board_settings_kicker_zh_len check (char_length(kicker_zh) <= 40),
  constraint board_settings_title_zh_len check (char_length(title_zh) <= 60),
  constraint board_settings_intro_zh_len check (char_length(intro_zh) <= 200),
  constraint board_settings_kicker_en_len check (char_length(kicker_en) <= 40),
  constraint board_settings_title_en_len check (char_length(title_en) <= 60),
  constraint board_settings_intro_en_len check (char_length(intro_en) <= 200)
);
insert into public.board_settings(id) values (1) on conflict (id) do nothing;
alter table public.board_settings enable row level security;
revoke all on public.board_settings from public, anon, authenticated;
grant select on public.board_settings to anon, authenticated;

drop policy if exists board_settings_public_read on public.board_settings;
create policy board_settings_public_read
on public.board_settings for select
to anon, authenticated
using (true);

-- 留言扩展：置顶顺序与点赞数。pin_order 仅允许管理员 RPC 修改。
alter table public.messages add column if not exists pin_order integer;
alter table public.messages add column if not exists like_count integer not null default 0;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'messages_pin_order_check') then
    alter table public.messages add constraint messages_pin_order_check
      check (pin_order is null or pin_order > 0);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'messages_like_count_check') then
    alter table public.messages add constraint messages_like_count_check
      check (like_count >= 0);
  end if;
end $$;

create unique index if not exists messages_pin_order_unique
  on public.messages(pin_order)
  where pin_order is not null;

update public.messages set sticker = 'paw' where sticker is null or sticker = 'none';
alter table public.messages alter column sticker set default 'paw';
alter table public.messages drop constraint if exists messages_sticker_check;
alter table public.messages add constraint messages_sticker_check
  check (sticker is null or sticker in ('flower', 'star', 'cloud', 'paw', 'coffee', 'rocket', 'code', 'orange', 'heart'));

-- 点赞记录只保存留言 ID 和 IP 哈希，不允许客户端直接读写。
create table if not exists public.message_likes (
  message_id uuid not null references public.messages(id) on delete cascade,
  subject_hash text not null check (subject_hash ~ '^[0-9a-f]{64}$'),
  created_at timestamptz not null default now(),
  primary key (message_id, subject_hash)
);
alter table public.message_likes enable row level security;
revoke all on public.message_likes from public, anon, authenticated;

-- 管理员 RPC：所有置顶操作使用同一事务锁，并在完成后重新编号。
create or replace function public.renumber_message_pins(p_ids uuid[])
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_i integer;
begin
  if coalesce(array_length(p_ids, 1), 0) = 0 then
    return;
  end if;
  update public.messages set pin_order = null where id = any(p_ids);
  for v_i in 1..array_length(p_ids, 1) loop
    update public.messages set pin_order = v_i where id = p_ids[v_i];
  end loop;
end;
$$;
revoke all on function public.renumber_message_pins(uuid[]) from public, anon, authenticated;

create or replace function public.admin_pin_message(p_message_id uuid)
returns table(message_id uuid, pin_order integer)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_ids uuid[];
  v_next integer;
begin
  if not public.is_admin() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  perform pg_advisory_xact_lock(hashtextextended('message-pins', 0));
  perform 1 from public.messages where messages.pin_order is not null for update;
  if not exists (select 1 from public.messages where messages.id = p_message_id and messages.is_visible = true) then
    raise exception 'message not found' using errcode = 'P0002';
  end if;
  select coalesce(max(messages.pin_order), 0) + 1 into v_next from public.messages;
  update public.messages as m
    set pin_order = v_next
    where m.id = p_message_id and m.pin_order is null;
  select array_agg(id order by messages.pin_order) into v_ids
    from public.messages where messages.pin_order is not null;
  perform public.renumber_message_pins(v_ids);
  return query select m.id, m.pin_order from public.messages m where m.id = p_message_id;
end;
$$;
revoke all on function public.admin_pin_message(uuid) from public, anon;
grant execute on function public.admin_pin_message(uuid) to authenticated;

create or replace function public.admin_unpin_message(p_message_id uuid)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_ids uuid[];
begin
  if not public.is_admin() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  perform pg_advisory_xact_lock(hashtextextended('message-pins', 0));
  perform 1 from public.messages where pin_order is not null for update;
  update public.messages set pin_order = null where id = p_message_id;
  select array_agg(id order by pin_order) into v_ids
    from public.messages where pin_order is not null;
  perform public.renumber_message_pins(v_ids);
end;
$$;
revoke all on function public.admin_unpin_message(uuid) from public, anon;
grant execute on function public.admin_unpin_message(uuid) to authenticated;

create or replace function public.admin_move_pinned_message(
  p_message_id uuid,
  p_direction integer
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_ids uuid[];
  v_new uuid[];
  v_i integer;
  v_index integer;
  v_target integer;
  v_len integer;
  v_swap uuid;
begin
  if not public.is_admin() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  if p_direction not in (-1, 1) then
    raise exception 'invalid direction' using errcode = '22023';
  end if;
  perform pg_advisory_xact_lock(hashtextextended('message-pins', 0));
  perform 1 from public.messages where pin_order is not null for update;
  select array_agg(id order by pin_order) into v_ids
    from public.messages where pin_order is not null;
  v_len := coalesce(array_length(v_ids, 1), 0);
  if v_len = 0 then
    return;
  end if;
  v_index := null;
  for v_i in 1..v_len loop
    if v_ids[v_i] = p_message_id then
      v_index := v_i;
      exit;
    end if;
  end loop;
  if v_index is null then
    raise exception 'pinned message not found' using errcode = 'P0002';
  end if;
  v_target := greatest(1, least(v_len, v_index + p_direction));
  if v_target = v_index then
    return;
  end if;
  v_new := v_ids;
  v_swap := v_new[v_index];
  v_new[v_index] := v_new[v_target];
  v_new[v_target] := v_swap;
  perform public.renumber_message_pins(v_new);
end;
$$;
revoke all on function public.admin_move_pinned_message(uuid, integer) from public, anon;
grant execute on function public.admin_move_pinned_message(uuid, integer) to authenticated;

create or replace function public.admin_update_board_settings(
  p_kicker_zh text,
  p_title_zh text,
  p_intro_zh text,
  p_kicker_en text,
  p_title_en text,
  p_intro_en text
)
returns setof public.board_settings
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_kicker_zh text := btrim(coalesce(p_kicker_zh, ''));
  v_title_zh text := btrim(coalesce(p_title_zh, ''));
  v_intro_zh text := btrim(coalesce(p_intro_zh, ''));
  v_kicker_en text := btrim(coalesce(p_kicker_en, ''));
  v_title_en text := btrim(coalesce(p_title_en, ''));
  v_intro_en text := btrim(coalesce(p_intro_en, ''));
begin
  if not public.is_admin() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  if char_length(v_kicker_zh) > 40 or char_length(v_title_zh) > 60 or char_length(v_intro_zh) > 200
    or char_length(v_kicker_en) > 40 or char_length(v_title_en) > 60 or char_length(v_intro_en) > 200 then
    raise exception 'board copy too long' using errcode = '22001';
  end if;
  update public.board_settings set
    kicker_zh = v_kicker_zh,
    title_zh = v_title_zh,
    intro_zh = v_intro_zh,
    kicker_en = v_kicker_en,
    title_en = v_title_en,
    intro_en = v_intro_en,
    updated_at = now()
  where id = 1;
  return query select * from public.board_settings where id = 1;
end;
$$;
revoke all on function public.admin_update_board_settings(text,text,text,text,text,text) from public, anon;
grant execute on function public.admin_update_board_settings(text,text,text,text,text,text) to authenticated;

-- 点赞：服务端哈希进入 RPC，行锁内同时切换点赞和计数。
create or replace function public.toggle_message_like(
  p_message_id uuid,
  p_subject_hash text
)
returns table(like_count integer, liked boolean)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_count integer;
  v_liked boolean;
begin
  if p_subject_hash !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid subject hash' using errcode = '22023';
  end if;
  select m.like_count into v_count
    from public.messages m
    where m.id = p_message_id and m.is_visible = true
    for update;
  if not found then
    raise exception 'message not found' using errcode = 'P0002';
  end if;
  select true into v_liked
    from public.message_likes
    where message_id = p_message_id and subject_hash = p_subject_hash
    for update;
  if found then
    delete from public.message_likes
      where message_id = p_message_id and subject_hash = p_subject_hash;
    update public.messages as m
      set like_count = greatest(0, m.like_count - 1)
      where m.id = p_message_id
      returning m.like_count into v_count;
    v_liked := false;
  else
    insert into public.message_likes(message_id, subject_hash)
      values (p_message_id, p_subject_hash)
      on conflict do nothing;
    if found then
      update public.messages as m
        set like_count = m.like_count + 1
        where m.id = p_message_id
        returning m.like_count into v_count;
    end if;
    v_liked := true;
  end if;
  return query select v_count, v_liked;
end;
$$;
revoke all on function public.toggle_message_like(uuid,text) from public, anon, authenticated;
grant execute on function public.toggle_message_like(uuid,text) to service_role;

create or replace function public.get_message_like_statuses(
  p_message_ids uuid[],
  p_subject_hash text
)
returns table(message_id uuid, liked boolean, like_count integer)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if p_subject_hash !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid subject hash' using errcode = '22023';
  end if;
  if coalesce(array_length(p_message_ids, 1), 0) > 50 then
    raise exception 'too many message ids' using errcode = '22023';
  end if;
  return query
    select m.id, (l.message_id is not null), m.like_count
    from public.messages m
    left join public.message_likes l
      on l.message_id = m.id and l.subject_hash = p_subject_hash
    where m.id = any(p_message_ids) and m.is_visible = true;
end;
$$;
revoke all on function public.get_message_like_statuses(uuid[],text) from public, anon, authenticated;
grant execute on function public.get_message_like_statuses(uuid[],text) to service_role;

-- 管理员策略统一绑定 is_admin()；普通访客不能直接改 pin_order/like_count。
drop policy if exists "messages admin update" on public.messages;
create policy "messages admin update" on public.messages for update
  to authenticated using (public.is_admin()) with check (public.is_admin());
drop policy if exists "messages admin delete" on public.messages;
create policy "messages admin delete" on public.messages for delete
  to authenticated using (public.is_admin());

revoke update on public.messages from authenticated;
grant update (is_visible) on public.messages to authenticated;

drop policy if exists projects_admin_insert on public.projects;
drop policy if exists projects_admin_update on public.projects;
drop policy if exists projects_admin_delete on public.projects;
create policy projects_admin_insert on public.projects for insert
  to authenticated with check (public.is_admin());
create policy projects_admin_update on public.projects for update
  to authenticated using (public.is_admin()) with check (public.is_admin());
create policy projects_admin_delete on public.projects for delete
  to authenticated using (public.is_admin());

drop policy if exists hobbies_admin_insert on public.hobbies;
drop policy if exists hobbies_admin_update on public.hobbies;
drop policy if exists hobbies_admin_delete on public.hobbies;
create policy hobbies_admin_insert on public.hobbies for insert
  to authenticated with check (public.is_admin());
create policy hobbies_admin_update on public.hobbies for update
  to authenticated using (public.is_admin()) with check (public.is_admin());
create policy hobbies_admin_delete on public.hobbies for delete
  to authenticated using (public.is_admin());

commit;
