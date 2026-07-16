/**
 * Ghost-HTML → Markdown converter (Task 4.1).
 *
 * Consumes migration/input/posts.json (+ adjudication.json for source routing)
 * and emits src/content/writing/zh/<slug>.md plus migration/entity_audit.json.
 *
 * Key behaviors (see docs/KICKOFF_SPEC.md §2.5/§3/§5):
 * - kg-image-card → md image + *caption*; bare <img> handled too; GIF paths untouched
 * - kg-embed-card iframes (YouTube/Spotify) kept as raw HTML
 * - math text: normal HTML entity decode everywhere; INSIDE math delimiters a
 *   residual second-level decode (&lt; → <) is applied and AUDITED — these are
 *   Escher's Ghost-era workarounds, and gate 1 content-diffs every audited formula
 * - internal post links → /zh/writing/<slug>/ ; tables kept as raw HTML
 */
import { parse } from 'node-html-parser';
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://timeobserver137.cyou';

// ---------- helpers ----------

const decodeOnce = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&'); // amp last

const localizeUrl = (u) => (u && u.startsWith(SITE) ? u.slice(SITE.length) : u);

/** rewrite an internal href: post slug → /zh/writing/<slug>/, everything else localized */
function rewriteHref(href, migratedSlugs) {
  const local = localizeUrl(href);
  if (!local || !local.startsWith('/')) return href; // external or anchor
  const m = local.match(/^\/([a-z0-9-]+)\/?(#.*)?$/);
  if (m && migratedSlugs.has(m[1])) return `/zh/writing/${m[1]}/${m[2] ?? ''}`;
  return local;
}

/**
 * Decode residual entity-encoding INSIDE math delimiters and audit it.
 * At this point text has been HTML-decoded once already; any surviving
 * &lt;/&gt;/&amp; inside $$...$$ or $...$ is Escher's Ghost workaround.
 */
function decodeMathResiduals(text, audit) {
  let idx = 0;
  const fix = (formula) => {
    idx += 1;
    const found = formula.match(/&(lt|gt|amp);/g);
    if (found) {
      audit.push({ index: idx, entities: [...new Set(found)].join(' '), raw: formula.slice(0, 120) });
      return decodeOnce(formula);
    }
    return formula;
  };
  // display math first ($$...$$), then inline single-$ (no $$ inside)
  let out = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, f) => `$$${fix(f)}$$`);
  out = out.replace(/\$([^$\n]+?)\$/g, (_, f) => `$${fix(f)}$`);
  return out;
}

// ---------- node → md ----------

function inlineMd(node, ctx) {
  if (node.nodeType === 3) return decodeOnce(node.rawText);
  const tag = node.rawTagName?.toLowerCase();
  const kids = () => node.childNodes.map((c) => inlineMd(c, ctx)).join('');
  switch (tag) {
    case 'strong':
    case 'b':
      return `**${kids()}**`;
    case 'em':
    case 'i':
      return `*${kids()}*`;
    case 'code':
      return `\`${decodeOnce(node.rawText)}\``;
    case 'br':
      return '  \n';
    case 'a': {
      const href = rewriteHref(node.getAttribute('href') ?? '', ctx.migratedSlugs);
      return `[${kids()}](${href})`;
    }
    case 'img':
      return imgMd(node);
    case 'span':
    default:
      return kids();
  }
}

function imgMd(node) {
  const src = localizeUrl(node.getAttribute('src') ?? '');
  const alt = decodeOnce(node.getAttribute('alt') ?? '');
  return `![${alt}](${src})`;
}

/** push text, extracting $$..$$ spans into standalone multi-line display blocks */
function pushWithMathBlocks(t, out) {
  const parts = t.split(/(\$\$[\s\S]+?\$\$)/);
  if (parts.length === 1) {
    out.push(t);
    return;
  }
  for (const part of parts) {
    const m = part.match(/^\$\$([\s\S]+?)\$\$$/);
    if (m) out.push('$$\n' + m[1].trim() + '\n$$');
    else if (part.trim()) out.push(part.trim());
  }
}

function blockMd(node, ctx, out) {
  if (node.nodeType === 3) {
    const t = decodeOnce(node.rawText).trim();
    if (t) pushWithMathBlocks(t, out);
    return;
  }
  const tag = node.rawTagName?.toLowerCase();
  const cls = node.getAttribute?.('class') ?? '';

  // kg-cards
  if (tag === 'figure') {
    if (cls.includes('kg-embed-card')) {
      const iframe = node.querySelector('iframe');
      if (iframe) {
        iframe.removeAttribute('class');
        out.push(iframe.toString());
      }
      return;
    }
    // image card (or any figure with an img)
    const img = node.querySelector('img');
    if (img) {
      out.push(imgMd(img));
      const cap = node.querySelector('figcaption');
      if (cap) {
        const capText = decodeOnce(cap.text).trim();
        if (capText) out.push(`*${capText}*`);
      }
      return;
    }
  }

  switch (tag) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5': {
      const level = Math.max(2, Number(tag[1])); // body headings start at ##
      out.push(`${'#'.repeat(level)} ${inlineMd(node, ctx).trim()}`);
      return;
    }
    case 'p': {
      const t = inlineMd(node, ctx).trim();
      if (!t) return;
      // display math must be its own multi-line block for remark-math
      // (mid-paragraph $$..$$ parses as inline; \tag only works in display)
      pushWithMathBlocks(t, out);
      return;
    }
    case 'blockquote': {
      const inner = [];
      node.childNodes.forEach((c) => blockMd(c, ctx, inner));
      out.push(inner.map((l) => l.split('\n').map((x) => `> ${x}`).join('\n')).join('\n>\n'));
      return;
    }
    case 'hr':
      out.push('---');
      return;
    case 'ul':
    case 'ol': {
      const ordered = tag === 'ol';
      const items = node.childNodes.filter((c) => c.rawTagName?.toLowerCase() === 'li');
      out.push(
        items
          .map((li, i) => {
            const marker = ordered ? `${i + 1}.` : '-';
            const parts = [];
            pushWithMathBlocks(inlineMd(li, ctx).trim(), parts);
            // first part carries the marker; the rest (display blocks / prose
            // after mid-item math) become indented continuation lines
            return parts
              .map((p, j) =>
                p
                  .split('\n')
                  .map((line, k) => (j === 0 && k === 0 ? `${marker} ${line}` : `  ${line}`))
                  .join('\n'),
              )
              .join('\n');
          })
          .join('\n'),
      );
      return;
    }
    case 'pre': {
      const code = node.querySelector('code');
      const lang = (code?.getAttribute('class') ?? '').match(/language-([\w-]+)/)?.[1] ?? '';
      const body = decodeOnce((code ?? node).rawText).replace(/\s+$/, '');
      out.push(`\`\`\`${lang}\n${body}\n\`\`\``);
      return;
    }
    case 'table': {
      // Simple tables become markdown pipe tables so remark-math processes
      // cell content ($V, E, F$ etc. — raw-HTML tables are invisible to the
      // math pipeline; gate 1 caught 9 unrendered formulas in 4CT's symbol table).
      const rows = node.querySelectorAll('tr');
      const complex = node.querySelector('[rowspan], [colspan], table table') || rows.length === 0;
      if (complex) {
        console.warn('  WARN complex table kept as raw html');
        out.push(node.toString());
        return;
      }
      // escape pipes for the table — but INSIDE math use \vert: an escaped
      // pipe within $..$ becomes KaTeX \| = ‖ (gate 1 caught |v| -> ‖v‖)
      const cellMd = (c) =>
        inlineMd(c, ctx)
          .trim()
          .replace(/\n+/g, ' ')
          .split(/(\$\$[\s\S]*?\$\$|\$[^$]*\$)/)
          .map((seg) =>
            seg.startsWith('$')
              ? seg.replace(/(?<!\\)\|/g, '\\vert ')
              : seg.replace(/\|/g, '\\|'),
          )
          .join('');
      const lines = [];
      rows.forEach((tr, ri) => {
        const cells = tr.querySelectorAll('th, td').map(cellMd);
        lines.push('| ' + cells.join(' | ') + ' |');
        if (ri === 0) lines.push('|' + cells.map(() => ' --- ').join('|') + '|');
      });
      out.push(lines.join('\n'));
      return;
    }
    case 'img':
      out.push(imgMd(node));
      return;
    case 'iframe':
      out.push(node.toString());
      return;
    case 'div':
    case 'section':
    case 'article':
      node.childNodes.forEach((c) => blockMd(c, ctx, out));
      return;
    default: {
      const t = inlineMd(node, ctx).trim();
      if (t) out.push(t);
    }
  }
}

// ---------- public API ----------

/**
 * Convert one Ghost html body to markdown.
 * @returns {{ md: string, entityAudit: Array<{index:number, entities:string, raw:string}> }}
 */
export function convertHtml(html, ctx) {
  const root = parse(html, { blockTextElements: { script: true, style: true } });
  const blocks = [];
  root.childNodes.forEach((c) => blockMd(c, ctx, blocks));
  const entityAudit = [];
  const md = decodeMathResiduals(blocks.join('\n\n'), entityAudit).trim() + '\n';
  return { md, entityAudit };
}

/** Build the .md frontmatter block from a posts.json entry. */
export function buildFrontmatter(entry) {
  const q = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  const lines = ['---'];
  lines.push(`title: ${q(entry.title)}`);
  lines.push(`date: ${entry.published_at.slice(0, 10)}`);
  lines.push('lang: zh');
  if (entry.tags?.length) {
    lines.push('tags:');
    entry.tags.forEach((t) => lines.push(`  - ${t}`));
  }
  if (entry.custom_excerpt) lines.push(`excerpt: ${q(entry.custom_excerpt)}`);
  if (entry.feature_image) lines.push(`cover: ${localizeUrl(entry.feature_image)}`);
  lines.push(`ghostSlug: ${entry.slug}`);
  lines.push('---');
  return lines.join('\n');
}

// ---------- CLI (batch use lands in Task 4.3) ----------

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
if (isMain) {
  const repo = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..', '..');
  const posts = JSON.parse(fs.readFileSync(path.join(repo, 'migration/input/posts.json'), 'utf8'));
  const only = process.argv.includes('--slug') ? process.argv[process.argv.indexOf('--slug') + 1] : null;
  const migratedSlugs = new Set(posts.map((p) => p.slug));
  const outDir = path.join(repo, 'src/content/writing/zh');
  fs.mkdirSync(outDir, { recursive: true });
  const auditFile = path.join(repo, 'migration/entity_audit.json');
  const audit = fs.existsSync(auditFile) ? JSON.parse(fs.readFileSync(auditFile, 'utf8')) : {};
  for (const p of posts) {
    if (only && p.slug !== only) continue;
    if (p.kind === 'page') continue; // about page handled separately in Task 4.3
    const { md, entityAudit } = convertHtml(p.html, { slug: p.slug, migratedSlugs });
    fs.writeFileSync(path.join(outDir, `${p.slug}.md`), `${buildFrontmatter(p)}\n\n${md}`, 'utf8');
    if (entityAudit.length) audit[p.slug] = entityAudit;
    console.log(`converted ${p.slug} (${md.length} chars, ${entityAudit.length} audited formulas)`);
  }
  fs.writeFileSync(auditFile, JSON.stringify(audit, null, 1), 'utf8');
}
