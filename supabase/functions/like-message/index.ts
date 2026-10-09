// Supabase Edge Function: like-message
// 访客点赞入口：服务端生成 IP 哈希，数据库 RPC 在行锁事务中切换点赞与计数。

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const LIMIT_PER_MINUTE = 60;
const LIMIT_PER_DAY = 500;
const MAX_STATUS_IDS = 50;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

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

  let payload: { action?: string; message_id?: string; message_ids?: string[] } = {};
  try { payload = await req.json(); } catch { return json({ error: 'bad json' }, 400); }

  const action = String(payload.action || '');
  const serviceHeaders = {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    'Content-Type': 'application/json'
  };
  const rateSalt = Deno.env.get('RATE_LIMIT_SALT') || SERVICE_KEY;
  const subjectHash = await sha256(`${clientIp(req)}|like-message|${rateSalt}`);

  if (action === 'toggle') {
    const messageId = String(payload.message_id || '');
    if (!UUID_RE.test(messageId)) { return json({ error: 'bad message id' }, 400); }

    const rateRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/consume_rate_limit`, {
      method: 'POST',
      headers: serviceHeaders,
      body: JSON.stringify({
        p_scope: 'like-message',
        p_subject_hash: subjectHash,
        p_short_seconds: 60,
        p_short_limit: LIMIT_PER_MINUTE,
        p_long_seconds: 86400,
        p_long_limit: LIMIT_PER_DAY
      })
    });
    if (!rateRes.ok) { return json({ error: 'rate service' }, 503); }
    const allowed = await rateRes.json().catch(() => false);
    if (allowed !== true) { return json({ error: 'rate' }, 429, { 'Retry-After': '60' }); }

    const result = await fetch(`${SUPABASE_URL}/rest/v1/rpc/toggle_message_like`, {
      method: 'POST',
      headers: serviceHeaders,
      body: JSON.stringify({ p_message_id: messageId, p_subject_hash: subjectHash })
    });
    const data = await result.json().catch(() => null);
    if (!result.ok) {
      const detail = JSON.stringify(data || {});
      if (detail.includes('P0002')) { return json({ error: 'not found' }, 404); }
      return json({ error: 'database' }, 502);
    }
    const row = Array.isArray(data) ? data[0] : data;
    return json({
      ok: true,
      message_id: messageId,
      like_count: Number(row && row.like_count) || 0,
      liked: !!(row && row.liked)
    });
  }

  if (action === 'status') {
    const ids = Array.from(new Set((payload.message_ids || []).map((id) => String(id))));
    if (ids.length > MAX_STATUS_IDS) { return json({ error: 'too many ids' }, 400); }
    if (ids.some((id) => !UUID_RE.test(id))) { return json({ error: 'bad message id' }, 400); }
    if (ids.length === 0) { return json({ ok: true, statuses: [] }); }

    const result = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_message_like_statuses`, {
      method: 'POST',
      headers: serviceHeaders,
      body: JSON.stringify({ p_message_ids: ids, p_subject_hash: subjectHash })
    });
    const data = await result.json().catch(() => []);
    if (!result.ok) { return json({ error: 'database' }, 502); }
    return json({ ok: true, statuses: Array.isArray(data) ? data : [] });
  }

  return json({ error: 'bad action' }, 400);
});