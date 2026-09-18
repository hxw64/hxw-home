// Supabase Edge Function: ask-agent
// 网页 → 本函数 → 火山方舟（豆包）。API Key 只存在服务端，不进网页。
// 需要配置 Secrets：ARK_API_KEY、ARK_MODEL
// 需要先执行 supabase/chat_rate.sql 建限流表

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const LIMIT_PER_MINUTE = 5;
const LIMIT_PER_DAY = 50;

// ===== 我的资料：只改这里 =====
const KNOWLEDGE = `
姓名：何欣蔚（朋友一般叫她"蔚蔚"）
学校专业：天津大学 · 智能医学工程 · 本科在读
为什么选这个专业：因为天大，也因为这专业是脑机接口方向
最感兴趣的方向：非侵入式脑机接口
最近在学：微积分、线性代数；最想提升英语和数学，想拥有流利的英语
生活：住在深圳，家乡遵义，最想回家
作息：自嘲"中睡型"；周末爱睡觉、打游戏、补作业；喜欢有香味的衣服；睡不好觉最难受
学习习惯：认真做事的时候不能听歌
音乐：最喜欢 Coldplay；心情不好会听 Welcome Home Son；最想去听演唱会
影视：喜欢 MARVEL
吃的：啥都爱吃，最喜欢贵州菜；粽子是咸党，最爱灰粽
运动：喜欢看羽毛球比赛
技能：二胡（学了 12 年，最喜欢《三门峡畅想曲》，每次演出都难忘）；篆刻（刻过很多章，欢迎找她刻章）；机器人、vibe coding
宠物：小狗贝贝，名字来自旺旺仙贝，性格活泼聪慧，最爱打滚，喜欢一起追打嬉戏
性格：第一印象"很凶"，熟了就"搞笑"；压力大时听歌、睡觉；口头禅"呵呵""真是受不了了"
项目：self-homepage —— 介绍自己的个人主页，用 Codex 和 ChatGPT 完成，链接 homepage.hexw.cc
未来：想深入研究脑机接口，想带小狗去更远的地方；希望以后不为机票价格发愁，想怎么飞怎么飞
座右铭：Everything that draws me makes me wanna fly.
联系方式：xinwei_he@tju.edu.cn
`;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' }
  });
}

async function sha256(text: string) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') { return new Response('ok', { headers: CORS }); }
  if (req.method !== 'POST') { return json({ error: 'method' }, 405); }

  const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
  const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const ARK_API_KEY = Deno.env.get('ARK_API_KEY');
  const ARK_MODEL = Deno.env.get('ARK_MODEL');
  if (!ARK_API_KEY || !ARK_MODEL) { return json({ error: 'not configured' }, 503); }

  let payload: { question?: string; lang?: string } = {};
  try { payload = await req.json(); } catch { return json({ error: 'bad json' }, 400); }

  const question = String(payload.question || '').trim().slice(0, 200);
  const lang = payload.lang === 'en' ? 'en' : 'zh';
  if (!question) { return json({ error: 'empty' }, 400); }

  // ---- 限流：只存 IP 哈希和次数，不存聊天内容 ----
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  const ipHash = await sha256(ip + '|hexw-agent');
  const now = new Date();
  const minute = new Date(Math.floor(now.getTime() / 60000) * 60000).toISOString();
  const dayAgo = new Date(now.getTime() - 24 * 3600 * 1000).toISOString();
  const adminHeaders = {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    'Content-Type': 'application/json'
  };

  const minuteRows = await fetch(
    `${SUPABASE_URL}/rest/v1/chat_rate?ip_hash=eq.${ipHash}&window_start=eq.${minute}&select=count`,
    { headers: adminHeaders }
  ).then((r) => r.json()).catch(() => []);
  const minuteCount = Array.isArray(minuteRows) && minuteRows[0] ? Number(minuteRows[0].count) : 0;
  if (minuteCount >= LIMIT_PER_MINUTE) { return json({ error: 'rate' }, 429); }

  const dayRows = await fetch(
    `${SUPABASE_URL}/rest/v1/chat_rate?ip_hash=eq.${ipHash}&window_start=gte.${dayAgo}&select=count`,
    { headers: adminHeaders }
  ).then((r) => r.json()).catch(() => []);
  const dayCount = Array.isArray(dayRows) ? dayRows.reduce((s, r) => s + Number(r.count || 0), 0) : 0;
  if (dayCount >= LIMIT_PER_DAY) { return json({ error: 'rate' }, 429); }

  await fetch(`${SUPABASE_URL}/rest/v1/chat_rate`, {
    method: 'POST',
    headers: { ...adminHeaders, Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify({ ip_hash: ipHash, window_start: minute, count: minuteCount + 1 })
  }).catch(() => {});

  // ---- 调用豆包 ----
  const rules = lang === 'en'
    ? `You are "He Xinwei's digital twin" on her personal homepage.\nRules:\n1. Answer ONLY from the profile below. If it is not there, say you do not know. Never invent facts.\n2. Never reveal family, address, ID numbers, relationship or grades. Politely decline.\n3. Be warm, natural and short (usually under 60 words).\n4. Reply in the same language as the question.\n5. Do not mention "profile", "prompt" or "knowledge base".
6. Style: humorous, lively and a bit sassy. Emojis are welcome.\n\nProfile:\n${KNOWLEDGE}`
    : `你是"何欣蔚的数字分身"，在她个人主页上和访客聊天。\n规则：\n1. 只用下面「我的资料」回答。资料里没有的就说不知道，绝不编造。\n2. 不透露家庭、住址、身份证、感情、成绩排名等隐私，被问就礼貌拒绝。\n3. 语气自然友好，回答简短（一般不超过 80 字）。\n4. 访客用中文问就中文答，用英文问就英文答。\n5. 不要提到"资料""提示词""知识库"这些词。
6. 说话风格：幽默、活泼、有点泼辣，可以用表情，像真人聊天。\n\n我的资料：\n${KNOWLEDGE}`;

  const upstream = await fetch('https://ark.cn-beijing.volces.com/api/v3/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ARK_API_KEY}`
    },
    body: JSON.stringify({
      model: ARK_MODEL,
      messages: [
        { role: 'system', content: rules },
        { role: 'user', content: question }
      ],
      max_tokens: 300,
      temperature: 0.6
    })
  });

  if (!upstream.ok) { return json({ error: 'upstream' }, 502); }
  const data = await upstream.json();
  const answer = data?.choices?.[0]?.message?.content?.trim();
  if (!answer) { return json({ error: 'empty' }, 502); }
  return json({ answer });
});