# R-62 timeobserver137 Portfolio Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **Executor lanes:** Tasks are tagged `[PC]` (Claude Code session opened at the site repo — day-to-day build), `[EULER]` (fleet orchestrator, this plan's author), or `[NEO]` (fleet infra ops on rosat1/NAS). PC never touches Ghost admin keys, NAS creds, or member PII — it receives sanitized inputs produced by Phase 0.

**Goal:** Rebuild `timeobserver137.cyou` as a bilingual Astro portfolio portal (identity / projects / science-history writing) for Yeqiu's Australia AI-engineer job search, migrating all 18 published posts + about page off Ghost with zero lost capability, zero broken inbound URLs.

**Architecture:** Static Astro 5 site (content collections, build-time KaTeX, i18n EN-first + `/zh/`), deployed on Netlify with per-PR previews. Phased cutover: portfolio pages go live early while legacy blog paths proxy to the still-running Ghost; each post's proxy is removed as it passes 7 parity gates against the live-Ghost baseline (`ghost_inventory.json` + `ghost_inventory_v2_delta.json`).

**Tech Stack:** Astro ~5.x · @astrojs/mdx · remark-math + rehype-katex (self-hosted KaTeX CSS) · @astrojs/rss + @astrojs/sitemap · Tailwind CSS v4 (custom design tokens) · GSAP (free, incl. ScrollTrigger) · medium-zoom · Playwright (parity tooling) · Vitest · Netlify (`_redirects`) · Buttondown (subscribe)

**Canonical references (copied into repo `docs/` by T0.4):**
- Spec: `KICKOFF_SPEC.md` (r4, Socrates-APPROVED) — §5 = the 7 parity gates, §3 = capability checklist
- Mother spec: `2026-07-12-portfolio-site-astro-redesign-spec.md`
- Baselines: `ghost_inventory.json` (per-post counts) + `ghost_inventory_v2_delta.json` (feature_image / excerpt / codeinjection)

## Global Constraints

- **Public repo red-line**: no secrets, no member PII (emails), no Ghost admin keys, no NAS creds — ever. Sanitized inputs only.
- **GIF passthrough**: animated GIFs are served from `public/` verbatim; they NEVER pass through `astro:assets` `<Image>` or any sharp pipeline (they get frozen/broken).
- **Migrated writing content = `.md`** (never `.mdx`) — sidesteps MDX's JSX-special `{ } <` chars in KaTeX-heavy legacy posts. New original content (projects, about) may use `.mdx`.
- **URL hard constraint**: every published Ghost URL returns 200 or 301-to-equivalent on the new site. Old top-level slugs 301 → `/zh/writing/<slug>`. `/rss/` 301 → `/rss.xml`.
- **Media**: referenced-only extraction (assets actually cited by the 18+1 pages); migrated images keep their original `/content/images/...` paths under `public/`; NEVER bulk-copy `ghost-content` into the repo.
- **Verification is guest-view**: all parity checks run against public URLs (Netlify previews) with no auth, full-scroll to defeat lazy-load false-greens.
- **i18n**: `defaultLocale: 'en'`, locales `['en','zh']`, `prefixDefaultLocale: false`. All 18 legacy posts are `lang: zh`.
- **Design bar**: GSAP-showcase-level motion on portfolio pages; writing pages restrained; `prefers-reduced-motion` respected; motion never at LCP/readability cost; no AI-template look. Brand: dark math-blackboard, 「时间观察者」identity kit (icon, OG cover `timeobserver-og-fixed.png`, accent `#1977ff` as starting point).
- **Positioning**: hero = AI Systems Engineer; featured order leads with OpenClaw fleet (sanitized), then Meinrag, Meinmsc, board-game platform, Kalman.
- **Cutover safety**: verified full Ghost backup (Phase 0) precedes ANY DNS change; Ghost container survives (stopped) through a safety window; rollback = DNS revert.
- **Commit discipline (PC repo)**: feature branches → PR → Yeqiu review → merge; Netlify preview URL in every PR description.

## Decisions locked by this plan (were spec-deferred)

| Deferred item (spec ref) | Decision | Why |
|---|---|---|
| i18n × CN corpus (§4) | 301 old slugs → `/zh/writing/<slug>`; EN `/writing/` = summary cards linking into `/zh/` | Direct-to-content for YouTube clicks; honest language architecture; EN tree stays clean for recruiters |
| Subscriber mechanism (§3) | **Buttondown** free tier; fleet-side import of the 2 members; embed form on site | Zero ops, real email delivery (> Ghost's no-Mailgun status quo), free ≤100 subs |
| Cutover shape (§7.5) | **Phased**: early DNS cutover after Phase 2 with all legacy paths proxied to Ghost; per-post proxy removal as gates pass | ~1 day extra ops buys weeks-earlier portfolio launch on the job-search clock |
| Legacy content format | `.md` not `.mdx` | Kills the MDX `{ } <` escaping trap for 538+ formulas (Escher gotcha #1) |

## New-repo file structure (target state)

```
E:\timeobserver137-site\
├── astro.config.mjs            # i18n, markdown/KaTeX, sitemap, tailwind
├── src/
│   ├── content.config.ts       # writing + projects collections (zod schemas)
│   ├── content/
│   │   ├── writing/zh/*.md     # 18 migrated posts (+ future)
│   │   ├── writing/en/*.mdx    # future EN writing
│   │   └── projects/{en,zh}/*.mdx  # 5 case studies × 2 langs
│   ├── layouts/Base.astro      # head/meta/og component, nav, footer, theme
│   ├── layouts/Post.astro      # article layout: KaTeX CSS, lightbox, toc
│   ├── pages/                  # index, projects, writing, about, resume, rss.xml.js
│   │   └── zh/                 # mirrored zh tree
│   ├── components/             # Hero, ProjectCard, WritingCard, SubscribeForm, Embed
│   └── styles/tokens.css       # design tokens (Tailwind v4 @theme)
├── public/
│   ├── content/images/...      # migrated media, original Ghost paths, GIFs passthrough
│   └── favicon / og assets     # identity kit
├── scripts/
│   ├── migrate/convert.mjs     # ghost-html|MD → .md converter (+ entity audit)
│   ├── migrate/fetch_media.mjs # referenced-only media downloader (+ byte audit)
│   ├── parity/gate.mjs         # 7-gate playwright checker vs live Ghost
│   └── redirects/gen.mjs       # manifest → public/_redirects
├── migration/
│   ├── input/                  # sanitized exports from Phase 0 (posts.json, baselines)
│   └── manifest.json           # per-post: source adjudication + gate status
├── tests/                      # vitest unit tests for converter/redirects
├── docs/                       # spec, mother spec, this plan, inventories
├── CLAUDE.md                   # PC session conventions + red lines
├── LICENSE                     # MIT (code) — content/ and images excluded, rights notice
└── public/_redirects           # generated: 301s + shrinking Ghost proxy list
```

---

# Phase 0 — Fleet-side handoff package `[EULER/NEO]`

*Nothing in Phase 1+ starts until T0.1 (backup) is verified. T0.2–T0.4 produce every input PC needs, sanitized.*

### Task 0.1: Verified full Ghost backup `[NEO]`

**Files:** NAS `/volume1/OpenClaw/Backups/ghost-blog/2026-07-XX/` — `db.sql.gz`, `ghost-content.tar.gz`, `ghost-export.json`, `members.csv`

- [ ] **Step 1: Snapshot mount truth.** On rosat1: `docker inspect ghost-stack-ghost-1 --format '{{json .Mounts}}'` — record every source path. (6-16 lesson: the old script tarred an empty named volume and missed the 251M bind-mount.)
- [ ] **Step 2: DB dump.** `docker exec ghost-stack-mysql-1 sh -c 'mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" ghost' | gzip > db.sql.gz` — expect ≥2.5M compressed.
- [ ] **Step 3: Content tar from the REAL bind-mount source** recorded in Step 1 (`/root/ghost-stack/ghost-content`): `tar czf ghost-content.tar.gz -C /root/ghost-stack ghost-content` — expect ~251M; `tar tzf ... | head` shows `images/`, `themes/`.
- [ ] **Step 4: Admin JSON export** (Ghost Admin → Settings → Export, or `GET /ghost/api/admin/db/`) → `ghost-export.json`, non-empty, contains `"posts"`.
- [ ] **Step 5: Members export** `GET /ghost/api/admin/members/?limit=all` → `members.csv` (email, created_at, newsletters). Expect 2 rows.
- [ ] **Step 6: Verify + record.** All 4 artifacts on NAS, sizes sane (each > known floor), `verified <task> at <UTC>: <sizes>` EVENT line in Neo daily log. **Gate: Phase 1 may start only after this line exists.**

### Task 0.2: Sanitized content export for PC `[EULER]`

**Files:** Create `migration/input/posts.json`, `migration/input/media_manifest.txt` (later copied into repo by T0.4)

**Interfaces — Produces:** `posts.json` = array of `{slug, title, status, published_at, tags[], feature_image, custom_excerpt, html}` for the 18 published posts + about page (NO drafts, NO member data). `media_manifest.txt` = deduped list of every asset URL referenced by those pages' html (`src=`/`srcset=`/`href=` matching `/content/images/`), one per line.

- [ ] **Step 1:** Extend the existing inventory script (`ghost_inventory.py` pattern, Admin API, read-only) to dump full `html` per published post + the about page into `posts.json`. Excerpt of extraction core:

```python
data = get("posts/", {"limit":"all","formats":"html","filter":"status:published",
                      "include":"tags"})
posts = [{ "slug":p["slug"], "title":p["title"], "published_at":p["published_at"],
           "tags":[t["name"] for t in p.get("tags",[])],
           "feature_image":p.get("feature_image"), "custom_excerpt":p.get("custom_excerpt"),
           "html":p["html"] } for p in data["posts"] if p["slug"] != "coming-soon"]
page = get("pages/", {"limit":"all","formats":"html"})["pages"][0]  # /about/
```

- [ ] **Step 2:** Extract media manifest: `re.findall(r'(?:src|href|srcset)="([^"]*?/content/images/[^"\s]+)"', html)` over all pages, dedupe, absolutize → `media_manifest.txt`. Print count (expect ≈200+ incl. GIFs).
- [ ] **Step 3:** Assert sanitation: `"@"` not in file (no emails), no `codeinjection` fields, drafts absent. Commit both files fleet-side first (euler outputs) as provenance.

### Task 0.3: Source adjudication manifest `[EULER]`

**Files:** Create `migration/input/adjudication.json`

**Interfaces — Produces:** `{ "<slug>": {"source": "md"|"ghost-html", "md_path": "<fleet path or null>", "note": "<divergence summary>"} }` for all 18+1. Consumed by T3.1 converter.

- [ ] **Step 1:** Locate candidate workspace MD for each post (Escher `outputs/**` for EPs, euler `blog-drafts/`, gauss/escher workspaces for essays). Record path or null.
- [ ] **Step 2:** For each candidate: normalize both sides (strip tags → text, collapse whitespace) and diff MD-rendered text vs `posts.json` html text. Identical → `source: "md"`. Diverged or no MD → `source: "ghost-html"` (live is canon — post-publish hotfixes: `fix_ep5_bourbaki_fact.py` et al.).
- [ ] **Step 3:** Manifest reviewed by eye (Euler), committed. Expect: most EPs diverge (hotfixes) → ghost-html; essays likely md.

### Task 0.4: Repo bootstrap + handoff drop `[EULER]`

**Files:** Create `E:\timeobserver137-site\` — `docs/` (spec r4, mother spec, this plan, 2 inventory JSONs), `migration/input/` (T0.2/T0.3 outputs), `CLAUDE.md`, `README.md`; `git init`, first commit; create **public** GitHub repo `stars1210JasonHe/timeobserver137-site`, push.

- [ ] **Step 1:** Create dirs, copy the 7 handoff files listed above.
- [ ] **Step 2:** Write `CLAUDE.md` for PC — contents: project one-liner, the **Global Constraints section of this plan copied verbatim**, lane note ("you are PC; fleet ops are not yours; ask Euler via Yeqiu for anything needing Ghost/NAS access"), commit discipline (branch→PR→preview URL in description).
- [ ] **Step 3:** `git init && git add -A && git commit -m "chore: R-62 handoff package (spec r4 + baselines + sanitized exports)"`; create public GitHub repo; push. **Verify on github.com: no PII grep hits (`@gmail` etc), repo public.**
- [ ] **Step 4:** Hand to Yeqiu: "open Claude Code at `E:\timeobserver137-site` — that session is PC; its first task is T1.1."

---

# Phase 1 — Scaffold + CI `[PC]`

### Task 1.1: Astro scaffold, deps, config

**Files:** Create `astro.config.mjs`, `src/content.config.ts`, `package.json`, `src/styles/tokens.css`, `src/pages/index.astro` (placeholder), `tsconfig.json`

**Interfaces — Produces:** the `writing`/`projects` collection schemas below (all later tasks rely on these exact field names); i18n route shape `/` + `/zh/`.

- [ ] **Step 1:** `npm create astro@latest . -- --template minimal --typescript strict --no-git` then `npx astro add mdx sitemap tailwind` and `npm i remark-math rehype-katex katex gsap medium-zoom` `npm i -D vitest playwright @playwright/test`.
- [ ] **Step 2:** `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://timeobserver137.cyou',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false, throwOnError: false }]],
    shikiConfig: { theme: 'github-dark' },
  },
});
```

(KaTeX CSS is imported in `Post.astro` from the npm package — self-hosted, no CDN: `import 'katex/dist/katex.min.css';`)

- [ ] **Step 3:** `src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['zh', 'en']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    cover: z.string().optional(),        // maps Ghost feature_image (4 posts have one)
    ghostSlug: z.string().optional(),    // original slug — drives redirects + parity
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    lang: z.enum(['en', 'zh']),
    stack: z.array(z.string()),
    role: z.string(),
    links: z.object({ live: z.string().optional(), github: z.string().optional() }).default({}),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { writing, projects };
```

- [ ] **Step 4:** `npm run build` — green. `npm run dev` — `/` renders placeholder.
- [ ] **Step 5:** Commit `feat: astro scaffold with i18n + katex + collections`.

### Task 1.2: Netlify + CI + LICENSE

**Files:** Create `netlify.toml`, `LICENSE`, `.github/` (none needed — Netlify auto-builds), Modify `README.md`

- [ ] **Step 1:** `netlify.toml`: `[build] command = "npm run build" publish = "dist"`. Connect repo in Netlify UI (Yeqiu or PC via `netlify` CLI login), confirm deploy-preview-per-PR on.
- [ ] **Step 2:** Open a trivial PR (README edit) → verify preview URL appears and serves the placeholder. Merge.
- [ ] **Step 3:** `LICENSE`: MIT scoped to code; append rights notice: "Contents of `src/content/` and `public/content/images/` are © Yeqiu He / original authors, all rights reserved; third-party archive imagery appears under the same educational-use posture as the original publication. Not covered by the MIT grant." Commit.

---

# Phase 2 — Design system + portfolio core `[PC]`

*Visual-craft tasks: code skeletons below define structure; visual polish happens through the `frontend-design` skill + design-shotgun variants + Yeqiu PR taste-gate (spec §6 north star: gsap.com/showcase). A task is done when its acceptance list passes on the PR preview, Yeqiu approves the look, and reduced-motion + Lighthouse floors hold.*

### Task 2.1: Design tokens + Base layout + theme

**Files:** Create `src/styles/tokens.css`, `src/layouts/Base.astro`, `src/components/{Nav,Footer,LangSwitch,HeadMeta}.astro`

**Interfaces — Produces:** `Base.astro` props `{ title, description?, ogImage?, lang }`; `HeadMeta` emits per-page og/twitter tags with fallback chain `ogImage ?? site cover (/og/timeobserver-og-fixed.png)`. All pages use these.

- [ ] **Step 1:** Tokens (Tailwind v4 `@theme`): dark blackboard palette (`--color-bg: #0b0e14`-family), accent seeded `#1977ff` (adjustable in design pass), CJK-aware font stack (`Inter` + `Noto Sans SC` variable, self-hosted via `@fontsource`), spacing/type scale.
- [ ] **Step 2:** `Base.astro`: html `lang` attr from prop, `<HeadMeta>`, nav (Home/Projects/Writing/About/Resume + LangSwitch), footer (RSS link, GitHub, subscribe entry point placeholder). Copy identity kit into `public/og/` + favicon set (from T0.2 media or fresh export).
- [ ] **Step 3:** Acceptance: view-source shows correct `og:image` fallback on a page without cover; both `/` and `/zh/` render; Lighthouse (preview) ≥ 95 perf on the empty shell. Commit.

### Task 2.2: Home hero + motion baseline

**Files:** Create `src/pages/index.astro`, `src/pages/zh/index.astro`, `src/components/Hero.astro`, `src/scripts/motion.ts`

- [ ] **Step 1:** Hero: positioning copy — EN: "Yeqiu He — AI Systems Engineer. I build multi-agent systems that remember." (final copy = Yeqiu-gated in PR) + featured strip (fleet, Meinrag, Meinmsc). GSAP entrance + one scroll-driven section (ScrollTrigger), `matchMedia('(prefers-reduced-motion: reduce)')` disables all timelines.
- [ ] **Step 2:** `motion.ts`: single GSAP context helper `initMotion(scope: HTMLElement)` — all page animations register through it; tree-shaken import per page (no global bundle).
- [ ] **Step 3:** Acceptance: 60fps scroll on preview (DevTools perf), reduced-motion shows static layout, LCP < 2.0s on preview, Yeqiu approves direction on PR (design-shotgun 2-3 hero variants if he rejects v1). Commit per variant round.

### Task 2.3: Projects collection + case studies

**Files:** Create `src/pages/projects/index.astro`, `src/pages/projects/[slug].astro`, `src/pages/zh/projects/...` mirrors, `src/components/ProjectCard.astro`, `src/content/projects/en/*.mdx` ×5 + `zh/*.mdx` ×5

- [ ] **Step 1:** Grid page (featured-first, `order` asc) + case template (problem / what I built / stack / links / screenshots).
- [ ] **Step 2:** Author the 5 case studies from spec §6 pool — **OpenClaw fleet case is sanitized**: architecture diagrams + capability narrative, no real personal data, no private repo links, no agent-user identities beyond public info. Draft EN first, `zh` translations second. Each case = one PR (Yeqiu content-gates).
- [ ] **Step 3:** Acceptance: `featured: true` cases render on home strip; all links resolve; images through `<Image>` (these are fresh non-GIF assets — optimization OK here). Commit per case.

### Task 2.4: About + Resume

**Files:** Create `src/pages/{about,resume}.astro`, `src/pages/zh/about.astro`, `public/resume/Yeqiu_He_Resume_AU.pdf`

- [ ] **Step 1:** About: bio (from `/about/` Ghost page content via posts.json + portfolio-angle rewrite, Yeqiu-gated). Resume: web summary + PDF download (copy AU v2 PDF from fleet `outputs/2026-06-24-yeqiu-resume-au/`).
- [ ] **Step 2:** Acceptance: PDF serves (200, content-type pdf), `/zh/about/` parity. Commit.

### Task 2.5: Writing indexes (pre-migration shells)

**Files:** Create `src/pages/writing/index.astro`, `src/pages/zh/writing/index.astro`, `src/pages/zh/writing/[slug].astro`, `src/layouts/Post.astro`, `src/components/{WritingCard,Embed}.astro`, `src/scripts/lightbox.ts`

**Interfaces — Produces:** `Post.astro` renders a `writing` entry: imports `katex/dist/katex.min.css`, mounts `lightbox.ts` (`mediumZoom('article img:not(.no-zoom)')`), full-width figure styles, tags row, date. `[slug].astro` uses `getStaticPaths` over `writing` where `lang==='zh'`.

- [ ] **Step 1:** Build the three pages + Post layout with a hand-written sample `.md` post (containing: display+inline KaTeX with `\begin{pmatrix}`, an animated GIF from `public/`, a YouTube iframe, an internal link) — this sample doubles as the layout's regression fixture.
- [ ] **Step 2:** EN `/writing/` index: summary cards (EN title line + excerpt + 「中文」 badge) linking into `/zh/writing/<slug>`.
- [ ] **Step 3:** Acceptance: sample post renders formulas (no `.katex-error`), GIF animates, lightbox zooms images, iframe loads. Commit.

---

# Phase 3 — Early cutover (phased) `[NEO + PC]`

*Precondition: T0.1 backup verified + Phase 2 merged + Yeqiu approves go-live look.*

### Task 3.1: Ghost origin alias `[NEO]`

- [ ] **Step 1:** rosat1 Caddy: add site block `ghost-origin.timeobserver137.cyou` → `reverse_proxy ghost-stack-ghost-1:2368` (same upstream as current domain block). DNS A record for the alias → rosat1.
- [ ] **Step 2:** Verify: `curl -sI https://ghost-origin.timeobserver137.cyou/symmetry-monster-ep6/` → 200, body identical to live post.

### Task 3.2: Proxy redirects + DNS cutover `[PC writes, NEO flips DNS]`

**Files:** Create `scripts/redirects/gen.mjs`, `public/_redirects` (generated), Test `tests/redirects.test.ts`

**Interfaces — Produces:** `gen.mjs` reads `migration/manifest.json` (`{slug, migrated: bool}` per post) and emits `_redirects`: migrated → `301 /zh/writing/<slug>`; not-yet-migrated → `200 proxy https://ghost-origin.../<slug>/`; plus static lines (`/rss/ → /rss.xml 301` once T5.1 lands — until then `/rss/` proxies to Ghost; `/content/images/* → ghost-origin 200` until T4.2 media lands; `/about/ → /zh/about/ 301`).

- [ ] **Step 1 (test first):** `tests/redirects.test.ts` — given a manifest with 1 migrated + 1 pending post, output contains exactly `/pending-slug/ https://ghost-origin.timeobserver137.cyou/pending-slug/ 200` and `/done-slug/ /zh/writing/done-slug/ 301`. Run: fails (no gen.mjs).
- [ ] **Step 2:** Implement `gen.mjs` (~40 lines: read manifest, template lines, write `public/_redirects`). Test passes. Initial manifest: all 18 pending. Commit.
- [ ] **Step 3:** Deploy to production Netlify (not preview). Verify on the `*.netlify.app` domain with `Host` overridden or via Netlify's pre-DNS check: `/, /projects/, /resume/` serve Astro; `/symmetry-monster-ep6/` proxies Ghost content (200, article html).
- [ ] **Step 4 `[NEO]`:** DNS: `timeobserver137.cyou` → Netlify. **Immediately after propagation, run guest-view smoke: all 19 old URLs 200 (proxied), portfolio pages 200, share a link in a Discord/TG test → timeobserver cover card appears.** Rollback plan: revert DNS (Ghost untouched).
- [ ] **Step 5:** Record `verified R-62 early-cutover at <UTC>` in daily logs. **From here the portfolio is live for job applications while migration proceeds.**

---

# Phase 4 — Content migration + parity gates `[PC]`

### Task 4.1: Converter (TDD)

**Files:** Create `scripts/migrate/convert.mjs`, Test `tests/convert.test.ts`

**Interfaces — Consumes:** `migration/input/posts.json`, `adjudication.json`. **Produces:** `src/content/writing/zh/<slug>.md` with frontmatter `{title, date, lang: zh, tags, excerpt?, cover?, ghostSlug}`; entity-audit log `migration/entity_audit.json` (`{slug: [{formula_index, raw_entities}]}`) consumed by gate 1's content-diff.

- [ ] **Step 1 (tests first):** vitest cases with fixture html snippets — each asserts exact md output:
  - kg-image-card figure+figcaption → `![caption](/content/images/...)` + caption line
  - bare `<img>` (EP5 has 5) → same md image syntax
  - kg-embed-card YouTube iframe → raw `<iframe>` html block preserved verbatim
  - Spotify iframe → preserved verbatim
  - `$$...$$` block with `&lt;`/`&gt;`/`&amp;` inside → decoded to `<`/`>`/`&` AND logged to entity audit
  - internal link `https://timeobserver137.cyou/symmetry-monster-ep1/` → `/zh/writing/symmetry-monster-ep1/`
  - animated gif src → path preserved, no transform
  Run: all fail.
- [ ] **Step 2:** Implement converter core: `node-html-parser` walk; text nodes pass through; the 7 rules above; entity decode ONLY inside math delimiters (with audit log); everything else = conservative html→md (headings, lists, blockquote, pre/code, hr, strong/em). For `source: "md"` posts: read fleet MD (from `migration/input/md/`, staged by Euler on request), normalize frontmatter only.
- [ ] **Step 3:** Tests pass. Commit `feat: ghost→md converter with entity audit`.

### Task 4.2: Media fetcher (referenced-only)

**Files:** Create `scripts/migrate/fetch_media.mjs`, Test `tests/media.test.ts`

- [ ] **Step 1 (test first):** given a manifest of 2 URLs (1 png, 1 gif), downloads to `public/content/images/<original subpath>`, byte-length equals `content-length`, gif bytes start `GIF89a` and are written verbatim. Fails.
- [ ] **Step 2:** Implement: read `media_manifest.txt`, fetch each from live site (public URLs — no auth), preserve subpaths, skip-if-exists with size check, summary table (count, total MB, gif count ~49, failures). Run for real. Expect ≈200 files; investigate any 404 before proceeding.
- [ ] **Step 3:** Tests pass; spot-open 2 GIFs in browser — animated. Commit (this is the one large commit; if repo >100MB total, evaluate `git lfs` for `public/content/images/` BEFORE first push — decide with Yeqiu on the PR).

### Task 4.3: Batch convert + per-post gates

**Files:** Create `scripts/parity/gate.mjs`, `migration/manifest.json` (statuses), generated `src/content/writing/zh/*.md` ×18 + about content

**Interfaces — Produces:** `gate.mjs <slug> <previewBaseUrl>` exits 0 only if all 7 gates pass; writes result into `migration/manifest.json` (`gates: {katex: pass, ...}`, `migrated: true`).

- [ ] **Step 1:** Implement `gate.mjs` (Playwright, guest context): for `ghostSlug` load BOTH `https://ghost-origin.../<slug>/` and `<preview>/zh/writing/<slug>/`, full-scroll both, then assert per spec §5: (1) `.katex-error`=0, raw `$$`=0, KaTeX count parity ±0, AND for entity-audited formulas textContent-diff old vs new; (2) img count parity + `naturalWidth>0` all; (3) every gif URL: fetch bytes, frame count >1 (parse GIF blocks); (4) iframe srcs parity (YT+Spotify) visible; (5) internal links → 200 on preview, external sampled; (6) title/date/tags/excerpt vs baseline JSONs; (7) og:image/title/desc present, og:image = cover or site fallback, asset 200.
- [ ] **Step 2:** Convert + gate posts in batches of 3-4 per PR (essay batch first — simplest — then 4CT/heptadecagon, then E09/E10, then EP1–6 hardest). Per batch: run converter → `gen.mjs` regenerates `_redirects` (batch flips from proxy to 301) → PR with gate output pasted → merge on green + Yeqiu spot-check.
- [ ] **Step 3:** After final batch: manifest 18/18 + about `migrated: true`, `_redirects` contains zero proxy lines except `/content/images/*` (flip that to local now — parity gate 2 re-run on 3 image-heavy posts to confirm). Commit `feat: migration complete, ghost proxy drained`.
- [ ] **Step 4 (tag taxonomy, spec §8):** Before the last batch, present Yeqiu the tag map (current: EP3-6 untagged, 2 posts carry `draft` tag) → he picks final taxonomy → apply in frontmatter → gate 6 baseline = the approved map (documented in manifest).

---

# Phase 5 — RSS + subscribe + SEO close-out `[PC + EULER]`

### Task 5.1: RSS + sitemap + feed continuity

**Files:** Create `src/pages/rss.xml.js`, Modify `public/_redirects` static lines

- [ ] **Step 1:** `@astrojs/rss` feed over `writing` collection (zh full-content, matching Ghost's current CN feed), title 「时间观察者」. `/rss/` line flips from Ghost proxy to `301 /rss.xml`.
- [ ] **Step 2:** Verify in a feed reader (guest): items present, CJK intact, images resolve. Commit.

### Task 5.2: Buttondown subscribe

**Files:** Create `src/components/SubscribeForm.astro` (embed form, no API key in repo), Modify footer

- [ ] **Step 1 `[EULER]`:** Create Buttondown list under Yeqiu's account; import the 2 members from `members.csv` (fleet-side; emails never enter repo); send 1 test broadcast to heyeqiu1210 → confirm delivery (spec acceptance floor ③).
- [ ] **Step 2 `[PC]`:** Embed Buttondown's HTML form action (public form URL, no secret) in footer + writing pages. Test a subscription with a throwaway address → double-opt-in mail arrives.
- [ ] **Step 3:** Acceptance floor check: entry live ✓ / 2 imported ✓ / test delivery ✓. Commit.

---

# Phase 6 — Freeze, final verify, Ghost retirement `[EULER/NEO + PC]`

### Task 6.1: Delta re-pull + freeze

- [ ] **Step 1 `[EULER]`:** Re-run inventory vs 2026-07-16 baseline: any new/edited posts (EP7!) → add to `posts.json` + adjudication → PC migrates + gates them (same Task 4.3 loop). Members delta re-export → Buttondown import.
- [ ] **Step 2:** Announce content freeze on #agent-bus (Escher holds Ghost publishes; new EPs go to the site repo as `.md` PRs from now on — his `outputs/` MD is the source, one conversion layer less).

### Task 6.2: Full-site acceptance + retirement

- [ ] **Step 1:** Full gate sweep (all 19 pages) on production domain, guest view. Link-crawl (`npx linkinator https://timeobserver137.cyou --recurse`) → 0 broken internal.
- [ ] **Step 2:** Share-card live test: paste site + one post URL into Discord/TG → timeobserver cover renders.
- [ ] **Step 3 `[NEO]`:** Stop (don't remove) Ghost + mysql containers; keep `ghost-origin` DNS 30 days (proxy lines are gone; alias only aids rollback); calendar note at +30d: remove alias, archive containers. Backup from T0.1 retained permanently on NAS.
- [ ] **Step 4:** Close out: ROADMAP R-62 → shipped; daily-log EVENT; Neo/Escher [DONE] on bus; postmortem note if any gate caught real corruption (feeds the fold-straggler pattern watch).

---

## Self-review (done at write time)

- **Spec coverage:** §1 decisions → Global Constraints/Phase 2; §2 manifest → T0.2/T4.3; §2.5 → T0.3/T4.1; §3 rows → KaTeX T1.1/T4.1, lightbox T2.5, GIF T4.2/gate3, embeds T4.1/gate4, xlinks T4.1/gate5, identity T2.1, OG T2.1/gate7, subscribers T5.2, codeinjection (superseded — no task needed, capabilities covered by T1.1/T2.5); §4 → T3.2/T4.3/T5.1; §5 gates → T4.3; §6 → T2.2/T2.3 + GSAP baseline; §7 order → phase precedence lines; §7.5 phased → Phase 3; §8 governance → T1.2 LICENSE, T4.3 Step 4 tags, Escher flow T6.1.
- **Placeholder scan:** design-taste steps intentionally carry acceptance criteria + review gates instead of pixel values (defined process, not TBD); no "TODO/TBD/similar-to" remain.
- **Type consistency:** `ghostSlug`/`lang`/`cover` names match across T1.1 schema, T4.1 frontmatter, T3.2/T4.3 manifest and gate usage.
