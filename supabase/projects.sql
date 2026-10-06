-- 学习与探索：项目内容与图片
-- 在 Supabase SQL Editor 中执行本文件。公开访问只读已发布项目，登录管理员可维护全部内容。

create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  sort_order integer not null default 0,
  is_published boolean not null default true,
  kicker_zh text not null default '',
  kicker_en text not null default '',
  title_zh text not null,
  title_en text not null default '',
  summary_zh text not null default '',
  summary_en text not null default '',
  highlights_zh jsonb not null default '[]'::jsonb,
  highlights_en jsonb not null default '[]'::jsonb,
  reflection_zh text not null default '',
  reflection_en text not null default '',
  tags text[] not null default '{}'::text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_title_zh_not_blank check (length(btrim(title_zh)) > 0),
  constraint projects_sort_order_nonnegative check (sort_order >= 0)
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  storage_path text not null unique,
  alt_zh text not null default '',
  alt_en text not null default '',
  sort_order integer not null default 0,
  is_cover boolean not null default false,
  created_at timestamptz not null default now(),
  constraint project_images_sort_order_nonnegative check (sort_order >= 0)
);

create index if not exists projects_public_order_idx on public.projects (is_published, sort_order, created_at);
create index if not exists project_images_project_order_idx on public.project_images (project_id, sort_order, created_at);
create unique index if not exists project_images_one_cover_idx on public.project_images (project_id) where is_cover;

create or replace function public.touch_project_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists projects_touch_updated_at on public.projects;
create trigger projects_touch_updated_at before update on public.projects
for each row execute function public.touch_project_updated_at();

create or replace function public.enforce_project_image_limit()
returns trigger language plpgsql as $$
begin
  if (select count(*) from public.project_images where project_id = new.project_id) >= 6 then
    raise exception 'A project can contain at most 6 images';
  end if;
  return new;
end;
$$;

drop trigger if exists project_images_limit on public.project_images;
create trigger project_images_limit before insert on public.project_images
for each row execute function public.enforce_project_image_limit();

grant select on public.projects, public.project_images to anon, authenticated;
grant insert, update, delete on public.projects, public.project_images to authenticated;
alter table public.projects enable row level security;
alter table public.project_images enable row level security;

drop policy if exists projects_public_read on public.projects;
create policy projects_public_read on public.projects
for select using (is_published or auth.role() = 'authenticated');

drop policy if exists projects_admin_insert on public.projects;
create policy projects_admin_insert on public.projects
for insert to authenticated with check (true);

drop policy if exists projects_admin_update on public.projects;
create policy projects_admin_update on public.projects
for update to authenticated using (true) with check (true);

drop policy if exists projects_admin_delete on public.projects;
create policy projects_admin_delete on public.projects
for delete to authenticated using (true);

drop policy if exists project_images_public_read on public.project_images;
create policy project_images_public_read on public.project_images
for select using (
  auth.role() = 'authenticated'
  or exists (
    select 1 from public.projects p
    where p.id = project_images.project_id and p.is_published
  )
);

drop policy if exists project_images_admin_insert on public.project_images;
create policy project_images_admin_insert on public.project_images
for insert to authenticated with check (true);

drop policy if exists project_images_admin_update on public.project_images;
create policy project_images_admin_update on public.project_images
for update to authenticated using (true) with check (true);

drop policy if exists project_images_admin_delete on public.project_images;
create policy project_images_admin_delete on public.project_images
for delete to authenticated using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('project-images', 'project-images', true, 8388608, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists project_images_storage_public_read on storage.objects;
create policy project_images_storage_public_read on storage.objects
for select using (bucket_id = 'project-images');

drop policy if exists project_images_storage_admin_insert on storage.objects;
create policy project_images_storage_admin_insert on storage.objects
for insert to authenticated with check (bucket_id = 'project-images');

drop policy if exists project_images_storage_admin_update on storage.objects;
create policy project_images_storage_admin_update on storage.objects
for update to authenticated using (bucket_id = 'project-images') with check (bucket_id = 'project-images');

drop policy if exists project_images_storage_admin_delete on storage.objects;
create policy project_images_storage_admin_delete on storage.objects
for delete to authenticated using (bucket_id = 'project-images');

insert into public.projects (
  id, sort_order, is_published,
  kicker_zh, kicker_en,
  title_zh, title_en,
  summary_zh, summary_en,
  highlights_zh, highlights_en,
  reflection_zh, reflection_en,
  tags
) values (
  '7d9f2f8d-37a8-4b8f-8d6f-5b6d8f6e8f01'::uuid,
  1,
  true,
  '基于 Vibe Coding 构建',
  'Built with Vibe Coding',
  '何欣蔚个人主页',
  'Xinwei He’s Personal Homepage',
  '一次通过 Vibe Coding（AI 辅助编程）独立完成的现代 Web 实践，从产品构思到工程落地均由我主导。',
  'A modern web practice independently completed through Vibe Coding (AI-assisted programming), from product concept to engineering delivery.',
  '[
    {"label":"产品设计","text":"构思包括“数字分身”对话、动态留言板和暗黑模式在内的整体产品逻辑。"},
    {"label":"Prompt 架构","text":"通过自然语言精准引导 AI 生成纯原生 HTML/CSS/JS 高质量代码，不依赖臃肿的前端框架。"},
    {"label":"工程把控","text":"审查并整合 AI 生成代码，确保语义化、无障碍访问（a11y）和响应式体验。"}
  ]'::jsonb,
  '[
    {"label":"Product Design","text":"Defined the overall product logic, including digital-twin conversations, a dynamic message board, and dark mode."},
    {"label":"Prompt Architecture","text":"Used precise natural-language prompts to guide AI in generating high-quality vanilla HTML/CSS/JS without bulky frameworks."},
    {"label":"Engineering Oversight","text":"Reviewed and integrated AI-generated code to ensure semantic markup, accessibility (a11y), and a responsive experience."}
  ]'::jsonb,
  '比起成为“写程序的人”，Vibe Coding 让我更像一个“产品经理 + 架构师”。这个主页是我向 AI 时代迈出的第一步；未来，我希望把这种能力应用到智能医学工程的专业领域。',
  'More than being someone who writes programs, Vibe Coding made me feel more like a product manager and architect. This homepage is my first step into the age of AI; I hope to apply this capability to intelligent medical engineering.',
  array['Vibe Coding', 'HTML / CSS / JS', '独立开发']
)
on conflict (id) do nothing;