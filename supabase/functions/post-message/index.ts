// Supabase Edge Function: post-message
// 留言板统一写入口：服务端校验 + 原子限流 + service_role 写库。
// 上线前需先执行 supabase/chat_rate.sql 和 supabase/messages_theme_sticker.sql，再部署本函数。

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const LIMIT_PER_MINUTE = 3;
const LIMIT_PER_DAY = 20;
const COLORS: Record<string, string> = {
  coral: 'coral',
  cream: 'cream',
  ivory: 'ivory',
  teal: 'teal',
  navy: 'navy',
  amber: 'cream',
  mint: 'ivory',
  sky: 'teal',
  lilac: 'navy',
  rose: 'coral'
};
const RELATIONS = new Set(['classmate', 'friend', 'family', 'teacher', 'other']);
const THEMES = new Set(['minimal', 'glow', 'letter', 'code']);
const STICKERS = new Set(['flower', 'star', 'cloud', 'paw', 'coffee', 'rocket', 'code', 'orange', 'heart']);

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, ...headers, 'Content-Type': 'application/json' }
  });
}

async function sha256(text: string) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function clientIp(req: Request) {
  const chain = (req.headers.get('x-forwarded-for') || '')
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
  return chain[0] || req.headers.get('x-real-ip') || 'unknown';
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') { return new Response('ok', { headers: CORS }); }
  if (req.method !== 'POST') { return json({ error: 'method' }, 405); }

  const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
  const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!SUPABASE_URL || !SERVICE_KEY) { return json({ error: 'not configured' }, 503); }

  const contentLength = Number(req.headers.get('content-length') || 0);
  if (contentLength > 4096) { return json({ error: 'payload too large' }, 413); }

  let payload: { nickname?: string; content?: string; color?: string; relation?: string; theme?: string; sticker?: string } = {};
  try { payload = await req.json(); } catch { return json({ error: 'bad json' }, 400); }

  const content = String(payload.content || '').trim();
  const nickname = String(payload.nickname || '').trim();
  if (!content) { return json({ error: 'empty' }, 400); }
  if (content.length > 500) { return json({ error: 'content too long' }, 400); }
  if (nickname.length > 20) { return json({ error: 'nickname too long' }, 400); }

  const color = COLORS[String(payload.color || '')] || 'ivory';
  const relation = RELATIONS.has(String(payload.relation || '')) ? String(payload.relation) : '';
  const theme = THEMES.has(String(payload.theme || '')) ? String(payload.theme) : 'minimal';
  const sticker = STICKERS.has(String(payload.sticker || '')) ? String(payload.sticker) : 'paw';

  const ip = clientIp(req);
  const rateSalt = Deno.env.get('RATE_LIMIT_SALT') || SERVICE_KEY;
  const ipHash = await sha256(`${ip}|post-message|${rateSalt}`);
  const adminHeaders = {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    'Content-Type': 'application/json'
  };

  const rateRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/consume_rate_limit`, {
    method: 'POST',
    headers: adminHeaders,
    body: JSON.stringify({
      p_scope: 'post-message',
      p_subject_hash: ipHash,
      p_short_seconds: 60,
      p_short_limit: LIMIT_PER_MINUTE,
      p_long_seconds: 86400,
      p_long_limit: LIMIT_PER_DAY
    })
  });
  if (!rateRes.ok) { return json({ error: 'rate service' }, 503); }
  const allowed = await rateRes.json().catch(() => false);
  if (allowed !== true) { return json({ error: 'rate' }, 429, { 'Retry-After': '60' }); }

  const writeMessage = (body: Record<string, string>) => fetch(`${SUPABASE_URL}/rest/v1/messages`, {
    method: 'POST',
    headers: { ...adminHeaders, Prefer: 'return=minimal' },
    body: JSON.stringify(body)
  });

  let inserted = await writeMessage({ nickname, content, color, relation, theme, sticker });
  if (!inserted.ok) {
    let errorText = await inserted.text();
    // 兼容尚未添加新字段的旧数据库：逐层降级
    if (errorText.includes('theme') || errorText.includes('sticker')) {
      inserted = await writeMessage({ nickname, content, color, relation });
      if (!inserted.ok) { errorText = await inserted.text(); }
    }
    if (errorText.includes('color') || errorText.includes('relation')) {
      inserted = await writeMessage({ nickname, content });
    }
  }
  if (!inserted.ok) { return json({ error: 'database' }, 502); }

  return json({ ok: true }, 201);
});
