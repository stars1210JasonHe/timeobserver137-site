# Publishing runbook — fully automatic

One article = one Markdown file. Everything downstream (build, RSS, sitemap,
tag archives, OG share card) is generated — there is no manual publish step
beyond the git push.

## Publish a new article

1. Drop the file at `src/content/writing/zh/<slug>.md`:

```markdown
---
title: "文章标题"
date: 2026-08-01
lang: zh
tags:
  - symmetry-monster        # English taxonomy only (2026-07-17 convention)
  - number-theory
excerpt: "一两句简介 — 会出现在列表卡、RSS 和分享卡描述里。"
cover: /content/images/2026/08/cover.png   # optional; omit to use the site share card
---

正文。KaTeX 数学用 $...$ / $$...$$，构建时渲染。
```

2. Images go under `public/content/images/<year>/<month>/`.
3. `git add` + `git commit` + `git push origin main`.

Netlify builds `main` automatically. The build regenerates:
- the article page `/zh/writing/<slug>/`
- writing index + homepage "最新写作" strip
- `/rss.xml` (subscribers' readers pick it up)
- `sitemap-index.xml`
- tag archive pages for every tag on the post
- OG/Twitter share card tags — `cover` if set, otherwise the site-level
  `public/og/timeobserver-og-fixed.png` (the timeobserver 封面; same fallback
  behavior as Ghost had)

## Conventions

- **Tags: English only**, kebab-case (`fleet-philosophy`, not `fleet 哲学`).
  Existing taxonomy: see the tag cloud on `/zh/writing/`. `draft` is reserved
  (Ghost-internal, hidden everywhere).
- `draft: true` in frontmatter = renders in dev, excluded from index/RSS/
  sitemap/tag pages.
- `ghostSlug` is for migrated legacy posts only — never set it on new posts.
- Anchor rule for headings inside the body: normal Markdown, no restrictions
  (the `[TYPE:id]` head norm is a fleet-memory convention, not a site one).

## Share-card check (optional, 30s)

After deploy: paste the URL into a Discord/Telegram message box — the preview
must show title + excerpt + cover (or the timeobserver card). Programmatic:
`curl -s <url> | grep 'og:image'`.

## Series (added 2026-07-17)

An episode of a series adds two frontmatter lines:

```yaml
series: symmetry-monster   # id from src/data/series.ts
seriesOrder: 7
```

That alone updates: the series page's episode list, the 系列 index card
count, the article's breadcrumb (第 N 篇 / 共 M 篇) and its 上一篇/下一篇
navigation. A NEW series = one entry in `src/data/series.ts` (id, title,
description, status) — nothing else.
