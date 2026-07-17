<?xml version="1.0" encoding="UTF-8"?>
<!-- Browser-facing face of /rss.xml: feed readers ignore this stylesheet and
     parse the XML; a human clicking the RSS link sees a readable page in the
     site's deep-blue look instead of raw markup. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8"/>
  <xsl:template match="/">
    <html lang="zh">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/> — RSS</title>
        <style>
          body { margin: 0; padding: 2.5rem 1.25rem; background: #0a1228; color: #d7e0f4;
                 font-family: ui-sans-serif, system-ui, "Segoe UI", "Noto Sans SC", sans-serif; }
          .wrap { max-width: 42rem; margin: 0 auto; }
          .badge { display: inline-block; border: 1px solid #24345f; border-radius: 999px;
                   padding: 0.2rem 0.7rem; font-size: 0.75rem; letter-spacing: 0.15em;
                   text-transform: uppercase; color: #8fa3cf; }
          h1 { margin: 0.9rem 0 0.3rem; font-size: 1.7rem; color: #f2f6ff; }
          .desc { color: #8fa3cf; margin: 0 0 1rem; }
          .how { border: 1px solid #24345f; background: rgba(16,28,58,0.6); border-radius: 0.5rem;
                 padding: 1rem 1.2rem; font-size: 0.9rem; line-height: 1.6; color: #b7c4e4; }
          .how code { background: #16254c; border-radius: 4px; padding: 0.1rem 0.4rem; }
          ul { list-style: none; padding: 0; margin: 1.6rem 0 0; }
          li { border-bottom: 1px solid rgba(36,52,95,0.6); padding: 0.85rem 0; }
          li a { color: #e8eeff; text-decoration: none; font-weight: 600; }
          li a:hover { color: #9db8ff; }
          .date { color: #66779f; font-size: 0.8rem; margin-top: 0.2rem; }
          .back { margin-top: 2rem; }
          .back a { color: #9db8ff; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <span class="badge">RSS 订阅源</span>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
          <div class="how">
            这是一个 RSS 订阅源 —— 给「阅读器」用的,不是给浏览器看的。把当前网址
            <code><xsl:value-of select="/rss/channel/link"/>rss.xml</code>
            粘贴到任意 RSS 阅读器(Feedly、Inoreader、NetNewsWire……),新文章会自动送达。
          </div>
          <ul>
            <xsl:for-each select="/rss/channel/item">
              <li>
                <a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  <xsl:value-of select="title"/></a>
                <div class="date"><xsl:value-of select="substring(pubDate, 1, 16)"/></div>
              </li>
            </xsl:for-each>
          </ul>
          <p class="back"><a><xsl:attribute name="href"><xsl:value-of select="/rss/channel/link"/></xsl:attribute>← 回到网站</a></p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
