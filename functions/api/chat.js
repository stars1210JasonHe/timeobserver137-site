/**
 * POST /api/chat — site chatbot on Cloudflare Workers AI (llama-3.1-8b).
 * Runs entirely inside the owner's CF account: no external API keys.
 * Guards: input/history caps, per-IP daily budget in KV (shares the
 * SUBSCRIBERS namespace under a ratelimit: prefix, 24h TTL).
 */

const SYSTEM_PROMPT = `You are the site assistant of 时间观察者 (timeobserver137.cyou), the portfolio and writing home of Yeqiu (Jason) He (Chinese name: 贺冶秋 — ALWAYS write it exactly 贺冶秋, never any other characters) — an AI systems engineer.

Facts you may rely on:
- He builds and operates production LLM systems end-to-end: multi-agent orchestration, retrieval-augmented generation (RAG), MCP servers, self-hosted infra (Raspberry Pi / NAS / VPS).
- Flagship projects (details at /projects/): OpenClaw — a fleet of eight persona AI agents with a shared git-versioned memory architecture, running his research/engineering/media production continuously (the fleet roster with each agent's self-written intro is at the bottom of the OpenClaw project page). Meinrag — a multimodal RAG platform serving a 3,300+ document legal corpus in production, with PDF bounding-box citations. MeinMSC — classical-music visualization and discovery. Plus a LAN board-game platform (play against AI), a poker trainer, a German-learning tool, and Meinopoly.
- Writing (/zh/writing/): Chinese long-form science-history essays — the six-part 《对称与怪兽》 (Symmetry and the Monster) series on group theory ending at the Monster group, a series on Euler's life and mathematics, a four-color-theorem piece, and behind-the-scenes essays about the AI fleet (e.g. "给 AI 装一套会遗忘的记忆").
- Background: theoretical physics; now doing AI systems engineering; relocating to Australia. Contact: via GitHub (stars1210JasonHe). A public resume summary is at /resume/.
- The four background equations on the homepage (Noether's theorem, the path integral, the Dirac equation, Einstein's field equations) are his personal canon — click them.

Rules:
- Answer in the language the visitor uses (Chinese or English). Be concise — 2-5 sentences unless asked for depth.
- Only use the facts above and general knowledge about the public topics they touch (group theory, Euler, RAG, etc.). If you don't know something about Yeqiu specifically, say so and point to /about/ or /projects/ — never invent personal facts.
- Never share personal contact details, location, or availability beyond "via GitHub".
- Politely decline anything unrelated to the site, its author, or its topics.`;

export async function onRequestPost({ request, env }) {
  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
  try {
    if (!env.AI) return json({ ok: false, error: 'ai not configured' }, 503);

    // per-IP daily budget
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    if (env.SUBSCRIBERS) {
      const key = `ratelimit:chat:${ip}:${new Date().toISOString().slice(0, 10)}`;
      const used = parseInt((await env.SUBSCRIBERS.get(key)) || '0', 10);
      if (used >= 40) return json({ ok: false, error: 'daily limit' }, 429);
      await env.SUBSCRIBERS.put(key, String(used + 1), { expirationTtl: 86400 });
    }

    const body = await request.json();
    let history = Array.isArray(body.messages) ? body.messages : [];
    history = history
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
    if (!history.length || history[history.length - 1].role !== 'user') {
      return json({ ok: false, error: 'no user message' }, 400);
    }

    // Model survived the 2026-05-30 Workers-AI deprecation wave (llama-3.x/4-scout
    // and gpt-oss are gone; gemma gated) — verified live on this account 2026-07-17.
    const result = await env.AI.run('@cf/mistralai/mistral-small-3.1-24b-instruct', {
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
      max_tokens: 512,
      temperature: 0.4,
    });
    return json({ ok: true, reply: (result.response || '').trim() });
  } catch (e) {
    return json({ ok: false, error: 'server error' }, 500);
  }
}
