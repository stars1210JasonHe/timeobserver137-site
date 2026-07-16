import { describe, it, expect } from 'vitest';
import { convertHtml, buildFrontmatter } from '../scripts/migrate/convert.mjs';

/**
 * Task 4.1 converter tests — fixtures mirror real Ghost HTML shapes found in
 * migration/input/posts.json (kg-cards, bare imgs, runtime-KaTeX $$ text,
 * entity-encoded math, internal links, tables).
 */

const SLUGS = new Set(['symmetry-monster-ep1', 'gauss-heptadecagon']);

function conv(html: string) {
  return convertHtml(html, { slug: 'test-post', migratedSlugs: SLUGS });
}

describe('images', () => {
  it('kg-image-card figure+figcaption -> md image + caption line', () => {
    const html =
      '<figure class="kg-card kg-image-card kg-card-hascaption">' +
      '<img src="https://timeobserver137.cyou/content/images/2026/06/fig1.png" class="kg-image" alt="单位根" loading="lazy" width="1200" srcset="/content/images/size/w600/2026/06/fig1.png 600w">' +
      '<figcaption><span style="white-space: pre-wrap;">图 1：17 个单位根</span></figcaption></figure>';
    const { md } = conv(html);
    expect(md).toContain('![单位根](/content/images/2026/06/fig1.png)');
    expect(md).toContain('*图 1：17 个单位根*');
    expect(md).not.toContain('srcset');
    expect(md).not.toContain('<figure');
  });

  it('bare <img> (EP5 has 5) -> md image', () => {
    const { md } = conv('<p>正文</p><img src="/content/images/2026/06/bare.png" alt="">');
    expect(md).toContain('![](/content/images/2026/06/bare.png)');
  });

  it('kg-gallery-card emits ALL images, not just the first (EP5 has 2 galleries)', () => {
    const html =
      '<figure class="kg-card kg-gallery-card kg-width-wide kg-card-hascaption">' +
      '<div class="kg-gallery-container"><div class="kg-gallery-row">' +
      '<div class="kg-gallery-image"><img src="/content/images/a.png" alt="甲"></div>' +
      '<div class="kg-gallery-image"><img src="/content/images/b.png" alt="乙"></div>' +
      '</div></div><figcaption>两位</figcaption></figure>';
    const { md } = conv(html);
    expect(md).toContain('![甲](/content/images/a.png)');
    expect(md).toContain('![乙](/content/images/b.png)');
    expect(md).toContain('*两位*');
  });

  it('animated gif src preserved verbatim, no transform', () => {
    const src = '/content/images/2026/07/fig_s6_richmond_build.gif';
    const { md } = conv(`<figure class="kg-card kg-image-card"><img src="${src}" alt="尺规作图"></figure>`);
    expect(md).toContain(`![尺规作图](${src})`);
  });
});

describe('embeds', () => {
  it('kg-embed-card YouTube iframe preserved as raw html', () => {
    const html =
      '<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/TewR3xBIRcA?feature=oembed" frameborder="0" allowfullscreen title="EP6"></iframe></figure>';
    const { md } = conv(html);
    expect(md).toContain('<iframe');
    expect(md).toContain('https://www.youtube.com/embed/TewR3xBIRcA');
    expect(md).not.toContain('kg-embed-card'); // wrapper gone, iframe kept
  });

  it('Spotify iframe preserved', () => {
    const html =
      '<figure class="kg-card kg-embed-card"><iframe src="https://open.spotify.com/embed/track/1k9EjYBsOV2G62X0UkNNDh?utm_source=oembed" width="100%" height="152"></iframe></figure>';
    const { md } = conv(html);
    expect(md).toContain('open.spotify.com/embed/track');
  });
});

describe('math + entity audit (Escher gotcha #1)', () => {
  it('$$ block with entity-encoded < > & gets decoded AND audited', () => {
    // Ghost export double-encodes Escher's workaround: literal "&lt;" in source
    // arrives as "&amp;lt;" in the html field.
    const html = '<p>$$ 0 &amp;lt; x &amp;lt; 1 $$</p>';
    const { md, entityAudit } = conv(html);
    expect(md).toContain('$$' + String.fromCharCode(10) + '0 < x < 1' + String.fromCharCode(10) + '$$');
    expect(entityAudit.length).toBe(1);
    expect(entityAudit[0].entities).toContain('&lt;');
  });

  it('normal math without encoded entities passes through, no audit entry', () => {
    const html = '<p>$$ \\begin{pmatrix} a &amp; b \\end{pmatrix} $$</p>';
    const { md, entityAudit } = conv(html);
    // single decode of &amp; -> & (normal HTML unescape, alignment char in matrix)
    expect(md).toContain('\\begin{pmatrix} a & b \\end{pmatrix}');
    expect(entityAudit.length).toBe(0);
  });

  it('inline $ math with entities is audited too', () => {
    const { md, entityAudit } = conv('<p>因为 $n &amp;gt; 2$ 时成立。</p>');
    expect(md).toContain('$n > 2$');
    expect(entityAudit.length).toBe(1);
  });
});

describe('display math extraction', () => {
  it('mid-paragraph $$..$$ becomes a standalone multi-line display block (\tag survives)', () => {
    const { md } = conv('<p><strong>引理</strong>. <em>连通平面图满足</em> $$V - E + F = 2. \\tag{3.1}$$ 证明见下。</p>');
    expect(md).toContain('$$\nV - E + F = 2. \\tag{3.1}\n$$');
    expect(md).toContain('**引理**. *连通平面图满足*');
    expect(md).toContain('证明见下。');
  });
});

describe('display math inside list items', () => {
  it('li with $$..$$ gets an indented display block (live renders display)', () => {
    const html = '<ul><li><strong>第一步:</strong> 由上界 $$ [K:F] \\le 2 $$ 但还不能写等号。</li></ul>';
    const { md } = conv(html);
    expect(md).toContain('- **第一步:** 由上界');
    expect(md).toContain('  $$\n  [K:F] \\le 2\n  $$');
    expect(md).toContain('  但还不能写等号。');
  });
});

describe('links', () => {
  it('internal post link -> /zh/writing/<slug>/', () => {
    const { md } = conv('<p>见 <a href="https://timeobserver137.cyou/symmetry-monster-ep1/">EP1</a>。</p>');
    expect(md).toContain('[EP1](/zh/writing/symmetry-monster-ep1/)');
  });

  it('internal link to non-migrated path kept as-is', () => {
    const { md } = conv('<a href="https://timeobserver137.cyou/content/images/x.png">图</a>');
    expect(md).toContain('(/content/images/x.png)');
  });

  it('external link untouched', () => {
    const { md } = conv('<a href="https://example.org/a">ext</a>');
    expect(md).toContain('[ext](https://example.org/a)');
  });
});

describe('structure', () => {
  it('headings, blockquote, hr, lists, bold/em', () => {
    const html =
      '<h2>第一章</h2><h3>小节</h3><blockquote><p>引言</p></blockquote><hr>' +
      '<ul><li>甲</li><li>乙</li></ul><ol><li>一</li><li>二</li></ol>' +
      '<p><strong>粗</strong>与<em>斜</em></p>';
    const { md } = conv(html);
    expect(md).toContain('## 第一章');
    expect(md).toContain('### 小节');
    expect(md).toContain('> 引言');
    expect(md).toContain('---');
    expect(md).toContain('- 甲');
    expect(md).toContain('1. 一');
    expect(md).toContain('**粗**');
    expect(md).toContain('*斜*');
  });

  it('pre/code -> fenced block, language hint kept', () => {
    const { md } = conv('<pre><code class="language-python">print("hi &amp; bye")</code></pre>');
    expect(md).toContain('```python');
    expect(md).toContain('print("hi & bye")');
    expect(md).toContain('```');
  });

  it('simple tables become markdown pipe tables (math in cells must reach remark-math)', () => {
    const html =
      '<table><thead><tr><th>符号</th><th>含义</th></tr></thead>' +
      '<tbody><tr><td>$V, E, F$</td><td>顶点数、边数、面数（绝对值 $|M|$ 含竖线）</td></tr></tbody></table>';
    const { md } = conv(html);
    expect(md).toContain('| 符号 | 含义 |');
    expect(md).toContain('| --- | --- |');
    expect(md).toContain('| $V, E, F$ |');
    // pipes INSIDE math become \vert (escaped \| would render as ‖);
    // pipes outside math are markdown-escaped
    expect(md).toContain('$\\vert M\\vert $');
    expect(md).not.toContain('$\\|M\\|$');
    expect(md).not.toContain('<table>');
  });

  it('complex tables (rowspan) stay raw html', () => {
    const html = '<table><tbody><tr><td rowspan="2">跨</td><td>a</td></tr><tr><td>b</td></tr></tbody></table>';
    const { md } = conv(html);
    expect(md).toContain('<table>');
  });
});

describe('frontmatter', () => {
  it('maps ghost fields, quotes title safely, rewrites cover to local path', () => {
    const fm = buildFrontmatter({
      slug: 'symmetry-monster-ep6',
      title: '对称与怪兽（六）·潘多拉的魔盒: "終章"',
      published_at: '2026-07-11T09:30:00.000Z',
      tags: ['数学', 'draft'],
      custom_excerpt: '魔盒打开了',
      feature_image: 'https://timeobserver137.cyou/content/images/2026/07/cover.png',
    });
    expect(fm).toContain('title: "对称与怪兽（六）·潘多拉的魔盒: \\"終章\\""');
    expect(fm).toContain('date: 2026-07-11');
    expect(fm).toContain('lang: zh');
    expect(fm).toContain('ghostSlug: symmetry-monster-ep6');
    expect(fm).toContain('excerpt: "魔盒打开了"');
    expect(fm).toContain('cover: /content/images/2026/07/cover.png');
    expect(fm).toContain('- 数学');
  });

  it('omits absent optional fields', () => {
    const fm = buildFrontmatter({
      slug: 's', title: 't', published_at: '2026-01-01T00:00:00.000Z', tags: [],
      custom_excerpt: null, feature_image: null,
    });
    expect(fm).not.toContain('excerpt:');
    expect(fm).not.toContain('cover:');
  });
});
