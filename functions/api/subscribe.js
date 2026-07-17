/**
 * POST /api/subscribe — Ghost-portal replacement (CF Pages Function).
 * Stores emails in the SUBSCRIBERS KV namespace. Parity note: the Ghost
 * newsletter never had a sending backend (no Mailgun, sender_email null) —
 * signup collection IS the migrated capability; delivery is a later feature.
 */
export async function onRequestPost({ request, env }) {
  try {
    const ct = request.headers.get('content-type') || '';
    let email = '';
    if (ct.includes('application/json')) {
      email = (await request.json()).email || '';
    } else {
      email = (await request.formData()).get('email') || '';
    }
    email = String(email).trim().toLowerCase();
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'invalid email' }), {
        status: 400, headers: { 'content-type': 'application/json' },
      });
    }
    if (!env.SUBSCRIBERS) {
      return new Response(JSON.stringify({ ok: false, error: 'storage not configured' }), {
        status: 503, headers: { 'content-type': 'application/json' },
      });
    }
    // per-IP daily cap: a signup spammer would otherwise fill the subscriber
    // list AND burn the shared KV write quota (which chat's limiter also uses).
    // Same accepted TOCTOU as chat.js: the read-then-write count is not atomic,
    // a concurrent burst can exceed 5 — bounded by KV's own daily write quota.
    try {
      const ip = request.headers.get('cf-connecting-ip') || 'unknown';
      const rlKey = `ratelimit:sub:${ip}:${new Date().toISOString().slice(0, 10)}`;
      const used = parseInt((await env.SUBSCRIBERS.get(rlKey)) || '0', 10);
      if (used >= 5) {
        return new Response(JSON.stringify({ ok: false, error: 'daily limit' }), {
          status: 429, headers: { 'content-type': 'application/json' },
        });
      }
      await env.SUBSCRIBERS.put(rlKey, String(used + 1), { expirationTtl: 86400 });
    } catch {
      // limiter unavailable (KV quota) — signup itself stays best-effort below
    }
    const existing = await env.SUBSCRIBERS.get(email);
    if (!existing) {
      await env.SUBSCRIBERS.put(email, JSON.stringify({ subscribed_at: new Date().toISOString(), source: 'site' }));
    }
    return new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'server error' }), {
      status: 500, headers: { 'content-type': 'application/json' },
    });
  }
}
