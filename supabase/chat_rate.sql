-- 表单防刷：原子限流 + 阻止匿名用户绕过 post-message 直写 messages
-- 在 Supabase SQL Editor 中执行一次；更新函数后也可重复执行。
-- 表里只保存 IP 哈希、窗口和次数，不保存聊天或留言内容。

create table if not exists public.api_rate_limits (
  scope text not null,
  subject_hash text not null,
  window_start timestamptz not null,
  count integer not null default 0 check (count >= 0),
  primary key (scope, subject_hash, window_start)
);

alter table public.api_rate_limits enable row level security;
revoke all on table public.api_rate_limits from anon, authenticated;

-- 在同一个事务锁内同时检查短窗口和长窗口，超限时不会增加任何计数。
create or replace function public.consume_rate_limit(
  p_scope text,
  p_subject_hash text,
  p_short_seconds integer,
  p_short_limit integer,
  p_long_seconds integer,
  p_long_limit integer
)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_now double precision;
  v_short_start timestamptz;
  v_long_start timestamptz;
  v_short_count integer;
  v_long_count integer;
begin
  if p_scope is null or p_subject_hash is null
    or length(trim(p_scope)) = 0 or length(trim(p_subject_hash)) = 0
    or length(p_scope) > 64 or length(p_subject_hash) > 128
    or p_short_seconds < 1 or p_short_limit < 1
    or p_long_seconds < p_short_seconds or p_long_limit < 1 then
    return false;
  end if;

  perform pg_advisory_xact_lock(hashtextextended(p_scope || ':' || p_subject_hash, 0));

  v_now := extract(epoch from clock_timestamp());
  v_short_start := to_timestamp(floor(v_now / p_short_seconds) * p_short_seconds);
  v_long_start := to_timestamp(floor(v_now / p_long_seconds) * p_long_seconds);

  delete from public.api_rate_limits
  where scope = p_scope
    and subject_hash = p_subject_hash
    and window_start < to_timestamp(v_now - p_long_seconds * 2);

  select coalesce(max(count), 0) into v_short_count
  from public.api_rate_limits
  where scope = p_scope and subject_hash = p_subject_hash and window_start = v_short_start;

  select coalesce(max(count), 0) into v_long_count
  from public.api_rate_limits
  where scope = p_scope and subject_hash = p_subject_hash and window_start = v_long_start;

  if v_short_count >= p_short_limit or v_long_count >= p_long_limit then
    return false;
  end if;

  insert into public.api_rate_limits (scope, subject_hash, window_start, count)
  values (p_scope, p_subject_hash, v_short_start, 1)
  on conflict (scope, subject_hash, window_start)
  do update set count = public.api_rate_limits.count + 1;

  insert into public.api_rate_limits (scope, subject_hash, window_start, count)
  values (p_scope, p_subject_hash, v_long_start, 1)
  on conflict (scope, subject_hash, window_start)
  do update set count = public.api_rate_limits.count + 1;

  return true;
end;
$$;

revoke all on function public.consume_rate_limit(text, text, integer, integer, integer, integer) from public, anon, authenticated;
grant execute on function public.consume_rate_limit(text, text, integer, integer, integer, integer) to service_role;

-- 访客不能直接 INSERT messages；service_role（Edge Function）仍可写入。
create or replace function public.block_public_message_insert()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_role text;
begin
  v_role := coalesce(auth.role(), '');
  if v_role <> 'service_role'
    and not (v_role = '' and session_user in ('postgres', 'supabase_admin')) then
    raise exception 'messages must be submitted through post-message'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

revoke all on function public.block_public_message_insert() from public, anon, authenticated;

drop trigger if exists prevent_public_message_insert on public.messages;
create trigger prevent_public_message_insert
before insert on public.messages
for each row execute function public.block_public_message_insert();

-- 旧版 chat_rate 表不再使用；确认没有其他脚本依赖后可手动删除。