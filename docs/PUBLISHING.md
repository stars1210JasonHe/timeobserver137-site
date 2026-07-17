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

URL slug = 文件名（`postSlug()` in `src/data/slug.ts` 会剥掉 `zh/` 目录前缀；
2026-07-17 前这条路径从没走过 — 老文章全靠 `ghostSlug` — 首个探针文章即触发
"Missing parameter: slug" 构建崩溃，已修）。

数学块内裸 `<` / `>` **安全**（2026-07-17 正样本实测：行内 `$d<m$`、展示式
`$$p<q>r$$` 渲染页均正确，KaTeX 输出数字实体 `&#x3C;`。本管线是
remark-math→KaTeX，无 html→lexical 步 — Ghost 时代的实体转义规矩不适用。
注意核渲染页时搜 `&#x3C;` 而非 `&lt;`）。

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
- `draft: true` in frontmatter — **tested 2026-07-17, all five surfaces**:
  in production builds the page is not built at all (no URL, not in RSS,
  not in sitemap, not on the writing index, not on the homepage). Preview
  locally with `npx astro dev` → `/zh/writing/<slug>/`. If dev 404s a
  draft you just added, delete the `.astro/` cache dir and restart dev —
  a stale content-layer cache from a previous build hides new entries.
  Publish = delete the `draft: true` line, commit, deploy.
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
