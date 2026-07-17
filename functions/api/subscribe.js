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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'invalid email' }), {
        status: 400, headers: { 'content-type': 'application/json' },
      });
    }
    if (!env.SUBSCRIBERS) {
      return new Response(JSON.stringify({ ok: false, error: 'storage not configured' }), {
        status: 503, headers: { 'content-type': 'application/json' },
      });
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
