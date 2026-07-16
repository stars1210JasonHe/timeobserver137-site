# timeobserver137.cyou

Bilingual (EN / 中文) portfolio + writing portal of **Yeqiu He** — AI Systems Engineer.

Built with [Astro](https://astro.build), deployed on Netlify. Migrated from Ghost with a
parity-gated pipeline (KaTeX render diffing, animated-GIF preservation, URL continuity —
see `docs/` for the full spec and migration plan).

## Structure

- `/` — portal: featured projects + writing (English-first, `/zh/` 中文)
- `/projects/` — case studies (multi-agent systems, RAG pipelines, full-stack work)
- `/writing/` — science-history essays (对称与怪兽 series, Euler series, and more)
- `/about/` · `/resume/`

## Development

```bash
npm install
npm run dev      # local dev server
npm test         # unit tests (vitest)
npm run build    # production build
```

Content lives in `src/content/` (Astro content collections). Legacy posts are plain
Markdown with build-time KaTeX; animated GIFs are served verbatim from `public/`.

## License

Code is MIT-licensed. Site content (`src/content/`, `public/content/images/`) is
**not** covered by the MIT grant — see `LICENSE`.
