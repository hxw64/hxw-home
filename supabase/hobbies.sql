-- 兴趣与特长：爱好内容、混合媒体与富文本
-- 在 Supabase SQL Editor 中执行本文件。公开访问只读已发布爱好，登录管理员可维护全部内容。

create extension if not exists pgcrypto;

create table if not exists public.hobbies (
  id uuid primary key default gen_random_uuid(),
  sort_order integer not null default 0,
  is_published boolean not null default true,
  title_zh text not null,
  title_en text not null default '',
  content_zh text not null default '',
  content_en text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint hobbies_title_zh_not_blank check (length(btrim(title_zh)) > 0),
  constraint hobbies_sort_order_nonnegative check (sort_order >= 0)
);

create table if not exists public.hobby_media (
  id uuid primary key default gen_random_uuid(),
  hobby_id uuid not null references public.hobbies(id) on delete cascade,
  media_type text not null check (media_type in ('image', 'video')),
  storage_path text not null unique,
  alt_zh text not null default '',
  alt_en text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  constraint hobby_media_sort_order_nonnegative check (sort_order >= 0)
);

create index if not exists hobbies_public_order_idx on public.hobbies (is_published, sort_order, created_at);
create index if not exists hobby_media_hobby_order_idx on public.hobby_media (hobby_id, sort_order, created_at);

create or replace function public.touch_hobby_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists hobbies_touch_updated_at on public.hobbies;
create trigger hobbies_touch_updated_at before update on public.hobbies
for each row execute function public.touch_hobby_updated_at();

create or replace function public.enforce_hobby_media_limit()
returns trigger language plpgsql as $$
declare
  image_count integer;
  video_count integer;
begin
  if new.media_type = 'image' then
    select count(*) into image_count
    from public.hobby_media
    where hobby_id = new.hobby_id and media_type = 'image';
    if image_count >= 20 then
      raise exception 'A hobby can contain at most 20 images';
    end if;
  else
    select count(*) into video_count
    from public.hobby_media
    where hobby_id = new.hobby_id and media_type = 'video';
    if video_count >= 3 then
      raise exception 'A hobby can contain at most 3 videos';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists hobby_media_limit on public.hobby_media;
create trigger hobby_media_limit before insert on public.hobby_media
for each row execute function public.enforce_hobby_media_limit();

grant select on public.hobbies, public.hobby_media to anon, authenticated;
grant insert, update, delete on public.hobbies, public.hobby_media to authenticated;
alter table public.hobbies enable row level security;
alter table public.hobby_media enable row level security;

drop policy if exists hobbies_public_read on public.hobbies;
create policy hobbies_public_read on public.hobbies
for select using (is_published or auth.role() = 'authenticated');

drop policy if exists hobbies_admin_insert on public.hobbies;
create policy hobbies_admin_insert on public.hobbies
for insert to authenticated with check (true);

drop policy if exists hobbies_admin_update on public.hobbies;
create policy hobbies_admin_update on public.hobbies
for update to authenticated using (true) with check (true);

drop policy if exists hobbies_admin_delete on public.hobbies;
create policy hobbies_admin_delete on public.hobbies
for delete to authenticated using (true);

drop policy if exists hobby_media_public_read on public.hobby_media;
create policy hobby_media_public_read on public.hobby_media
for select using (
  auth.role() = 'authenticated'
  or exists (
    select 1 from public.hobbies h
    where h.id = hobby_media.hobby_id and h.is_published
  )
);

drop policy if exists hobby_media_admin_insert on public.hobby_media;
create policy hobby_media_admin_insert on public.hobby_media
for insert to authenticated with check (true);

drop policy if exists hobby_media_admin_update on public.hobby_media;
create policy hobby_media_admin_update on public.hobby_media
for update to authenticated using (true) with check (true);

drop policy if exists hobby_media_admin_delete on public.hobby_media;
create policy hobby_media_admin_delete on public.hobby_media
for delete to authenticated using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'hobby-media',
  'hobby-media',
  true,
  52428800,
  array['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists hobby_media_storage_public_read on storage.objects;
create policy hobby_media_storage_public_read on storage.objects
for select using (bucket_id = 'hobby-media');

drop policy if exists hobby_media_storage_admin_insert on storage.objects;
create policy hobby_media_storage_admin_insert on storage.objects
for insert to authenticated with check (bucket_id = 'hobby-media');

drop policy if exists hobby_media_storage_admin_update on storage.objects;
create policy hobby_media_storage_admin_update on storage.objects
for update to authenticated using (bucket_id = 'hobby-media') with check (bucket_id = 'hobby-media');

drop policy if exists hobby_media_storage_admin_delete on storage.objects;
create policy hobby_media_storage_admin_delete on storage.objects
for delete to authenticated using (bucket_id = 'hobby-media');

insert into public.hobbies (id, sort_order, is_published, title_zh, title_en, content_zh, content_en)
values
  ('1f8d0d48-7f0b-4a5c-9a3d-000000000001'::uuid, 1, true, '二胡', 'Erhu', '', ''),
  ('1f8d0d48-7f0b-4a5c-9a3d-000000000002'::uuid, 2, true, '篆刻', 'Seal Carving', '', '')
on conflict (id) do nothing;