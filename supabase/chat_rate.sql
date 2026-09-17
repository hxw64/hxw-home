-- 数字分身限流表（只存 IP 哈希与次数，不存聊天内容）
create table if not exists public.chat_rate (
  ip_hash text not null,
  window_start timestamptz not null,
  count int not null default 0,
  primary key (ip_hash, window_start)
);

alter table public.chat_rate enable row level security;
-- 不给任何策略：只有云函数用的 service_role 能读写