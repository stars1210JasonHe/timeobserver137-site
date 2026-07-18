/**
 * POST /api/message — private message box (2026-07-18, Yeqiu).
 *
 * Readers write to Yeqiu; nothing is ever rendered publicly. Messages land in
 * the shared KV namespace under a `msg:` prefix.
 *
 * Delivery (2026-07-18, upgraded from 15-min polling after Yeqiu submitted a
 * test and had to wait): push to Telegram from the edge IMMEDIATELY, then flag
 * the stored record `pushed: true`. The Pi cron stays on as a backstop and only
 * notifies records missing that flag — instant in the normal case, still
 * delivered if the edge push fails, and never a duplicate.
 *
 * Anti-spam, in order of cheapness: honeypot field, length caps, per-IP daily
 * cap in KV. No Turnstile yet — add it (needs a dashboard-issued key) only if
 * real bot traffic shows up.
 */
export async function onRequestPost({ request, env }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

  try {
    const raw = await request.text();
    if (raw.length > 16_384) return json({ ok: false, error: 'too large' }, 413);

    let name = '';
    let email = '';
    let body = '';
    let trap = '';
    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      const d = JSON.parse(raw);
      ({ name = '', email = '', body = '', trap = '' } = d);
    } else {
      const f = new URLSearchParams(raw);
      name = f.get('name') || '';
      email = f.get('email') || '';
      body = f.get('body') || '';
      trap = f.get('website') || ''; // honeypot: real humans never see this field
    }

    // honeypot filled ⟹ bot. Answer 200 so it doesn't learn, but drop it.
    if (String(trap).trim()) return json({ ok: true });

    name = String(name).trim().slice(0, 60);
    email = String(email).trim().slice(0, 254);
    body = String(body).trim().slice(0, 4000);

    if (!name || !body) return json({ ok: false, error: 'name and body required' }, 400);
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'invalid email' }, 400);
    }
    if (!env.SUBSCRIBERS) return json({ ok: false, error: 'storage not configured' }, 503);

    // per-IP daily cap. Same accepted TOCTOU as the other endpoints (KV has no
    // atomic increment) — bounded by KV's own daily write quota, costs $0.
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const day = new Date().toISOString().slice(0, 10);
    try {
      const rlKey = `ratelimit:msg:${ip}:${day}`;
      const used = parseInt((await env.SUBSCRIBERS.get(rlKey)) || '0', 10);
      if (used >= 10) return json({ ok: false, error: 'daily limit' }, 429);
      await env.SUBSCRIBERS.put(rlKey, String(used + 1), { expirationTtl: 86400 });
    } catch {
      // limiter degraded — accept the message rather than lose it
    }

    const id = `${new Date().toISOString()}-${Math.random().toString(36).slice(2, 8)}`;
    const key = `msg:${id}`;
    const record = {
      name,
      email,
      body,
      at: new Date().toISOString(),
      country: request.headers.get('cf-ipcountry') || '',
    };
    // store FIRST — a message must survive even if the push below fails
    await env.SUBSCRIBERS.put(key, JSON.stringify(record));

    // instant push; on failure the record stays unflagged and the Pi cron
    // picks it up within 15 min, so nothing is ever lost
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      try {
        const text =
          `[网站留言] 来自 ${name} · ${email || '(未留邮箱)'} · ${record.country || '?'}\n` +
          `${'-'.repeat(24)}\n${body.slice(0, 1200)}\n${'-'.repeat(24)}\n(私密信箱,未公开显示)`;
        const r = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
        });
        const tgOk = r.ok && (await r.json()).ok === true;
        if (tgOk) await env.SUBSCRIBERS.put(key, JSON.stringify({ ...record, pushed: true }));
      } catch {
        // leave unflagged — the cron backstop will deliver it
      }
    }

    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, error: 'server error' }, 500);
  }
}
