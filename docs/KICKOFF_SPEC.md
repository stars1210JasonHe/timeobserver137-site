# R-62 Kickoff Spec — timeobserver137 双语作品集重构 (Astro 自建)

> **Supersedes-nothing / consolidates**: Neo 立项 spec `neo/outputs/2026-07-12-portfolio-site-astro-redesign-spec.md` (DESIGN LOCKED) 仍是母文档。本文 = kickoff 定案记录 + **live-Ghost verified 迁移清单**（Yeqiu 2026-07-16 指令「don't lose anything important from Ghost」的落实）。
> **Date**: 2026-07-16 · **Owner**: Euler (own/编排) + Neo (Win11 执行) + Yeqiu (PR 把关)
> **Status**: spec awaiting Yeqiu review → 通过后走 writing-plans

---

## 1. Kickoff 定案 (2026-07-16, Yeqiu via AskUserQuestion)

| §8 待决项 | 定案 | 备注 |
|---|---|---|
| 目标市场 | **澳洲 (AU)** | 复确认（spec §1 校正一致；`_AU` 简历 + Brisbane 签证） |
| Positioning lead angle | **AI/Agent 工程师** | 首选 Frontend 后经 tradeoff 讨论改回：hero = AI Systems Engineer，featured 以 OpenClaw fleet 领衔；**站的视觉/前端 craft 照样做到顶级**（craft ≠ positioning） |
| 部署平台 | **Netlify** | GitHub CI/CD + 每 PR 预览 URL + 公网 7×24 |
| GitHub 仓 | **Public** | 站源码即前端作品样本；站仓不含任何私密内容（OpenClaw 私库另算、只写脱敏案例） |
| 框架 | **Astro** | MDX + KaTeX + 可插 React island；默认项 |

其余全部继承 Neo spec 已锁定项：单一三柱门户 / 域名不变 / i18n EN-first + `/zh/` / content-in-git MDX / backup→build→cutover / repo 落 **E:**（`E:\timeobserver137-site`；2026-07-16 Yeqiu 改定，覆盖母 spec 的 F: 决策——owner call，GitHub origin + 高频 push 兜底 USB 风险）/ feature-branch→PR→Yeqiu 审。

## 2. Verified 内容清单（live Ghost Admin API 实拉，2026-07-16；全量 JSON = 本目录 `ghost_inventory.json`）

**Neo spec §2 说「只有 6 篇 EP，迁移成本低」——实测严重低估。** 实际：

- **19 published posts + 1 published page (/about/)**，约 ~200 张图、~49 处 GIF 引用、6 个 YouTube embed、KaTeX 重度（单篇最高 ~108 块）。
- 分类：
  - 对称与怪兽 EP1–EP6（各含 YT embed + GIF；**EP2–6 含 KaTeX**（EP1 无）；**EP4 xlink×2 / EP5 xlink×3 站内互链**）
  - Euler 系列 E09 / E10（E10: img 14 / GIF 5 / KaTeX ~108）
  - 高斯正十七边形（img 44 / GIF 8 / KaTeX ~101）· 四色定理（img 19 / GIF 6）
  - 《给 AI 装一套会遗忘的记忆》（8-agent 记忆架构长文 —— **AI positioning 直接可用素材**）
  - 7 篇 agent essays（我是 Euler / 不像 / 守夜人 / 两只手 / 我是 Gauss / 静默 daemon / 其实我也不知道要写什么）
- **不迁移**：3 drafts（2 个 KaTeX 内部测试 + untitled）→ 丢弃；`/coming-soon/` placeholder → 丢弃（cutover 后无意义）。
- 迁移接受度按「每篇 post = 清单一行、逐篇勾销」执行，见 §5 parity gates。
- 精确性勘误（Socrates R1 #8，对照 inventory）：**EP1 无 KaTeX 块**（含 KaTeX 的是 EP2–6）；EP5 有 5 张非 kg-image-card 的裸 `<img>`（转换器必须两种都处理）；qi-shi essay 含 1 个 **Spotify embed**（非 YT——gate 4 因此覆盖全部 embed 类型）。

### 2.5 迁移源裁定（source-of-truth policy；Socrates R1 #1）

母 spec §7.2 说「源用 Escher outputs/ 的 MD」，本文 §3 KaTeX 行又隐含从 Ghost HTML 反解——两者冲突且都不完全对：**live Ghost 上有大量 post-publish 热修**（blog-drafts 里 `ep01_swap_figs` / `fix_ep5_bourbaki_fact` / `fix_ep6_conway_timing` / `hotswap_memory_article_fig3` 等脚本即证据），workspace MD 落后于线上。**政策 = 逐篇裁定**：
1. 对每篇 post，diff「workspace MD 渲染」vs「live Ghost 渲染」（内容层面）；
2. **相同 → 用 MD 为源**（干净，无需 entity-decode 反解）；
3. **有分歧 → live Ghost 为 canon**（要么从 HTML 转换，要么把 delta 手工回灌 MD 后用 MD）；
4. 裁定结果记录在迁移清单里（每篇一行：source=MD / source=ghost-html / source=MD+delta）。

## 3. Ghost 能力继承清单 v2（母 spec §4.5 + 本次 live 实测新增）

| 能力 | 来源 | Astro 实现 | 优先级 |
|---|---|---|---|
| KaTeX 数学渲染 | §4.5 + head injection 实测 (katex@0.16.9 CDN) | `remark-math` + `rehype-katex`（**build-time 渲染，优于 CDN runtime**）。⚠️ **MDX 逃逸陷阱（Escher 7-16 confirm 附带）**：他的 `[RULE:ghost-katex-lt-gt-entity-encode]` workaround 是 Ghost-HTML-parser 专属，迁移时须**反解**；MDX 另有自己的敌对字符 `{ } <`（JSX-special，正撞 `\begin{pmatrix}`/`\tfrac{}{}` 重度公式）。MDX-hostile `{` 会 build 期 loud-fail（好于 Ghost 静默丢），前提是 gate 真渲染 | 必须 |
| MDX 内容管理 / tags / RSS / sitemap+SEO / 阅读排版 / 代码高亮 | §4.5 | content collections / frontmatter tags / `@astrojs/rss` / `@astrojs/sitemap` / 自建 layout / Shiki | 必须 |
| **图片点击放大 (lightbox)** | 🆕 实测 codeinjection_foot: `medium-zoom@1.1.0` on `.kg-image-card img` | 等价 lightbox（medium-zoom 或同类，作用于文章图） | 必须（数学长文核心阅读体验） |
| **动图 GIF 不被拍平** | 🆕 ~49 处 GIF（数学动画）；EP6 曾验 anim-ratio 0.96–1.00 | **static passthrough asset，绝不过 `<Image>`**（Escher 7-16：Astro sharp 管线会 freeze/破坏动图）；迁移验证含动画帧检查 | 必须 |
| **YouTube embed** | 🆕 6 篇 EP 各 1 个 `kg-embed-card` iframe | MDX 内嵌 iframe 组件（YouTube embed URL 保留） | 必须 |
| **站内互链不断** | 🆕 EP4/EP5 xlink 指向站内其他文章 | 迁移时改写为新站相对链接；parity gate 检查 0 死链 | 必须 |
| **站点身份套件** | 🆕 settings: 站名「时间观察者」/ icon / OG cover image / accent `#1977ff` | 品牌起点带走（accent 色随新视觉方向可调，identity 不丢） | 必须 |
| **OG 分享卡（含 timeobserver 封面）** | 🆕 Yeqiu 7-16 指令：分享链接后显示的 timeobserver 封面必须保留。实测 settings `cover_image` = `timeobserver-og-fixed.png` | Astro head 组件 per-page og:title/desc/image；**站级 og:image = 同一张 timeobserver 封面（资产随迁）**，per-post `feature_image` → 该页 og:image；分享预览行为 = 现状不降级 | 必须 |
| **订阅用户保留** | 🆕 Yeqiu 7-16 指令推翻母 spec「单会员」假设——实拉 members API：**2 名订阅者**（含真实外部读者 t―――9@gmail.com（已脱敏——完整值在 fleet 私库），2026-07-01 加入） | **验收下限（具体，Socrates R1 #7）**：① 新站订阅入口上线可用；② 现有 2 member 导入新机制；③ 发 1 封测试投递确认真能送达（现状 Ghost 无 Mailgun、订阅者收不到邮件——新方案有真投递即超越现状）。机制 writing-plans 定（Buttondown 免费档 / Listmonk / 表单）。迁移前导出全部 member 随备份存档；**freeze 窗口再导一次 delta**（§7.6）。**红线：member 邮箱 PII 绝不进 public 站仓**（本 spec 在私库，可留） | 必须 |
| **per-post codeinjection（5 篇）** | 🆕 Socrates R1 #4 → 已 dump 分类（`ghost_inventory_v2_delta.json`）：4 篇 = 旧版逐篇 KaTeX CDN 头注入（E09/E10/gauss-i-am-gauss/escher-drawing-hands）；1 篇 = 4CT 自定义图片 lightbox 脚本 | **全部 superseded、无需移植**：KaTeX 走 build-time（本表首行）、lightbox 走站级方案（上表 lightbox 行）。迁移时丢弃，parity gate 按对应站级能力验收 | 已消化 |
| 评论 / 付费会员 / Stripe | §4.5 | 不做（从未用） | 不需要 |

## 4. URL 保留策略（inbound links 不能断）

- **已发布 slug 全部保留**：EP1–6 (`/symmetry-monster-epN/`) 等被 **YouTube 视频简介硬链接**；`/wo-shi-euler/` 等被外部引用过。
- 新站路由把 writing 内容放 `/writing/<slug>` 的话，**旧顶级 slug 必须 301**（Netlify `_redirects`，一行一篇，从 §2 清单生成）；或直接保留顶级 slug。取舍在 writing-plans 定，**硬约束 = 每个旧 URL 200 或 301 到对应新页，0 断链**。
- **i18n × 全中文语料的碰撞（Socrates R1 #3——这是语言架构决策，不只是 slug 机械）**：现有 18 篇**全部是中文**，而新站 IA 是 EN-first + `/zh/` 树。旧 slug 要么 **301 进 `/zh/writing/<slug>`**（默认推荐：内容归中文树，配 hreflang，EN 侧写作索引给译名摘要卡），要么顶级 slug 永久保留为 EN-first 结构的中文特例。writing-plans 定终案；约束 = 访客点 YouTube 简介旧链后**直达正文**（不经语言选择页）。
- RSS：Ghost 默认 feed 在 `/rss/` → 新站同样提供 `/rss.xml` + `/rss/` 301；**feed 内容语言连续性**（订阅者现在收的是中文全文 feed，迁移后不变）。

## 5. 迁移 parity gates（每篇 post 过闸才算迁完；复用 EP6 发布验证纪律）

对 §2 清单逐篇，在 Netlify preview 上以**访客视角**核：
1. **KaTeX**：**逐式真渲染核验**（每一条公式渲染成功），非 span 计数——span-count ≠ render-success（Escher: EP4 教训）；`.katex-error` = 0，raw `$$` = 0，块数对基线 sanity check 兜底。**反解正确性（Socrates R1 #2）**：凡 Ghost 源里含 entity-encode 字符（`&lt;`/`&gt;` 等）的公式，渲染结果须与 live Ghost 渲染做**内容 diff**（渲染成功 ≠ 内容正确——错解出的公式可以渲染得很漂亮）
2. **图片**：`<img>` 数 = 基线；full-scroll 后 `naturalWidth>0` 全绿（破 lazy-load 假绿）
3. **GIF**：动画帧仍在（anim-ratio 抽查），未被 build 拍平
4. **Embed（全类型）**：全部 embed iframe 在且访客可见（**未登录视角**，EP6 private-embed 教训）——YT ×6 + **Spotify ×1**（qi-shi essay，Socrates R1 #8）
5. **链接**：站内互链 0 死链；旧 URL 200/301
6. **Slug/标题/日期/tags/custom_excerpt** = 基线（excerpt 3 篇有值，一并核；tag 基线以 §8 taxonomy 清理后的为准）
7. **OG 分享卡**：每页 og:image/title/desc 在场；**og:image = per-post feature_image（迁移清单内 4/18 有；5/19 里的第 5 张属弃置的 coming-soon）|| 站级 timeobserver 封面（其余 14 篇的现状 fallback 行为）**，资产 200（分享预览 = 现状不降级）
基线数据源 = `ghost_inventory.json` + `ghost_inventory_v2_delta.json`（feature_image URL / custom_excerpt 值 / codeinjection 全文，Socrates R1 #9 补拉），核验脚本迁移期写。

## 6. 三柱信息架构 / 内容模型 / 视觉方向

信息架构/内容模型不变，见母 spec §3/§4。补充两点：
- **《给 AI 装一套会遗忘的记忆》升格为 AI positioning 的 featured 写作**（hero 区可引）。
- **视觉 north star（Yeqiu 7-16 给定）= [gsap.com/showcase](https://gsap.com/showcase/)** —— 高端 motion/scroll-driven 动效水准。实现期动效库首选 **GSAP**（现已全免费含原付费插件；Astro 内以 script/island 集成，ScrollTrigger 等按需），配 frontend-design / design-shotgun 出方向。约束不变：快、有品味、**不要 AI 模板味**；动效不牺牲 LCP/阅读体验（写作页克制、portfolio 页可炫）。
- **美学方向（Yeqiu 7-16 补充定向）= 宇宙背景（cosmos）**。依据：博客偏数学、本人理论物理背景。实测确认（Euler 7-16 fetch）：showcase 本身 = 建筑/agency 类工艺标杆、无现成宇宙范本 → **showcase 定工艺下限，cosmos 定美学方向**，两者由 Gauss 研究轮衔接（exemplar 剖析 + 实现模式 + 性能预算）。品牌契合点：「时间观察者」＝观测者/天文台意象；「对称与怪兽」系列＝群论 → 星座/格点/轨道纹样；multi-agent fleet ↔ 星座连线网络。风险红线（**2026-07-16 Gauss 研究证伪后改写**——原「cheesy starfield」假想敌两轮独立搜索未见真实存在）：**真实失败模式 = 「宇宙」当名字用、从不当主题拍——别在没有真东西可拍的地方喊宇宙**（判别器 = 替换测试 + 从属/抢戏两轴，见 Gauss 报告 §2）；KaTeX 长文阅读面保持安静表面，cosmos 主要住 portal 页。**「宇宙的公式肯定要的」（Yeqiu 7-16 硬需求）**：物理/数学公式作为设计元素必须在（候选：Euler 恒等式 / 场方程 / 196883 维等品牌相关式），但公式当壁纸极易俗——tasteful vs kitsch 分界纳入 Gauss 研究轮。
- **审美关卡预决（Yeqiu 2026-07-16，Gauss v1 中场简报后）：方向 = A+B 合成——「虚空当场，他的数学当星」**。深空虚空的氛围 register（Fork B：大面积纯黑虚空/从属式真实感）作为舞台，earned 数学对象（Fork A：E10 拉格朗日等势线 / 17 单位根星座 / |M| 54 位等第一梯队策展）作为其中的「星」。Gauss v2 以该合成为主设计标的；Task 2.2 hero 按此出方案。
- **策展池扩域（Yeqiu 2026-07-16 审美关卡反馈，覆盖 Gauss 报告 §6.5 的语料限定）**：hero 方向「基本可以」通过；但公式/母题的指涉物 = **他本人的身份（数学 + 理论物理）**，不限于博客已发表语料。场方程等理论物理元素**重新入池**——「挣得」的判据从「发表过」放宽为「真实身份的一部分」。防俗护栏不变：策展制（少而亮）、排版一等公民、每个元素 deliberate、禁符号汤壁纸。具体公式典由 Yeqiu 亲选。
- **公式典定稿（Yeqiu 亲选 2026-07-16）**：物理侧 = **爱因斯坦场方程 · Noether 定理 · 路径积分/最小作用量 · Dirac 方程**（四件全选）；数学侧（研究已立）= |M| 54 位 · 196883=47·59·71 · 单位根 ζ₁₇ · L₁–L₅ · V−E+F=2。**部署纪律**：主页保持现状（hero L 点 + |M| 碑，已并 PR#7）；物理四件落 **About 页身份叙事**（每式一等排版 + 一句他的话），不上主页漂浮——防符号汤。
- **Polish 校准（Yeqiu 2026-07-16 看过 v1 预览后）：「太单调」** —— v1 的克制（零星星/一次描画/大留白）通过了方向关但**未达他要的能量级**。polish 阶段目标 = 在 A+B 合成骨架上显著提升视觉能量（更多 GSAP scroll 叙事/动效层次/portfolio 页可炫），向 showcase 工艺档拉齐；红线不变（性能预算/2.2.2/替换测试）。





## 7. 顺序（母 spec §7 + 本次细化）

1. **验证过的完整备份**（动手第一步，cutover 前提）：DB dump + `ghost-content` bind-mount ~251M（按 `docker inspect .Mounts` 真实来源，核 size 非空 —— 6-16 空 tar 教训）+ Ghost JSON 导出 + **members 导出（§3 订阅用户行）** → NAS `/volume1/OpenClaw/Backups/ghost-blog/`
2. E: 建 repo + Astro 脚手架 + Netlify 接 GitHub（Neo 执行）
3. 三柱骨架 + i18n + 设计系统（frontend-design / design-shotgun 实现期定）
4. 内容迁移（§2 清单 **18 posts + 1 page**（19 published 减去弃置的 coming-soon）→ MDX，按 §2.5 逐篇裁定源）+ §5 parity gates 逐篇过闸。**媒体政策（Socrates R1 #6）：referenced-only 抽取**——只迁 18+1 篇正文实际引用的资产（从 HTML 提 URL 清单 + byte 审计），**绝不整包拷 ghost-content 进 public 仓**（251M 里含未发布/草稿资产 = 红线；且撞 GitHub 文件上限/Netlify build 预算）
5. projects 柱内容（fleet 脱敏案例 / Meinrag / Meinmsc / 看板 / Kalman）+ about/resume (AU PDF)
   **⚠️ 关键路径解耦（Socrates R1 #5）**：步骤 4 与 5 可并行，且「18 篇全迁完」不应 block 求职价值上线——writing-plans 必须给**分段 cutover 方案**定价（例：portfolio/about/resume 先在新站上线 + 旧博客路径 Netlify proxy 回 Ghost 过渡），对比 big-bang，按求职时钟取舍
6. **cutover 前：重拉 Ghost inventory delta**（本清单基线 = 2026-07-16；EP7 等 mid-flight 内容仍在往 Ghost 发 → cutover 前新发/改动的 post 必须纳入迁移清单 + 过 §5 gates）**+ members delta 再导出（§3 订阅行）**；cutover 定日后设短暂 content freeze 窗口（**具体 cutover 日期/窗口 = writing-plans 定——此处是 chosen gap，非遗漏**）→ staging 全站验收 → cutover（DNS 指 Netlify）→ 旧 Ghost 容器停但保留可回滚 → 安全期后退役

## 8. 协调

- **Escher gate（母 spec §9.3）**：✅ **CONFIRMED 2026-07-16**（#agent-bus msg id `1527219343577055282`，no objection —— 对他反而更简单，少一层 Ghost 转换）。他的 exposure = YT cross-links，slug/301 策略已覆盖；EP7 线 mid-flight 继续走 Ghost 至 cutover；他的本地工具（bloglint/blogpreview）不受影响。附带 2 个 migration gotcha 已折入 §3/§5（MDX 逃逸 + GIF passthrough）。
- **Neo**：Win11 执行 + 备份/部署/PR-gate（母 spec §8 已定）。
- **红线**：OpenClaw 案例脱敏（母 spec §5 ⚠️）；站仓 public 但绝不含 secrets/私人内容/member PII。
- **治理项（Socrates R1 #10，writing-plans 期落）**：① **tag taxonomy 先清后冻**——EP3–6 现无 tag、2 篇已发布 post 挂着 `draft` tag，须在 gate 6 冻结基线前定好并清理；② **LICENSE 拆分**——public 仓代码（MIT 类）与内容版权（© 或 CC）分开声明，并核 EP 用的第三方档案图片可否随仓再分发（不行则图走站点资产不进仓 license 覆盖）；③ 本节 Escher confirm 已记全量 message id 供溯源。
