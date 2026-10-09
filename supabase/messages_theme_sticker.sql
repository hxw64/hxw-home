-- 留言板：加主题与贴纸两列
alter table public.messages add column if not exists theme text default 'minimal';
alter table public.messages add column if not exists sticker text default 'none';

-- 可选：限制取值范围（已存在则忽略报错）
alter table public.messages drop constraint if exists messages_theme_check;
alter table public.messages add constraint messages_theme_check
  check (theme is null or theme in ('minimal', 'glow', 'letter', 'code'));

alter table public.messages drop constraint if exists messages_sticker_check;
alter table public.messages add constraint messages_sticker_check
  check (sticker is null or sticker in ('none', 'flower', 'star', 'cloud', 'paw', 'coffee', 'rocket', 'code', 'orange'));