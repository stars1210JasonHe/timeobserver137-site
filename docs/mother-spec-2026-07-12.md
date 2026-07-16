# 立项 Spec — timeobserver137 双语作品集重构(Astro,自建 / build our own)

> **框架(Yeqiu 2026-07-12 校正)**:这**不是"弃用 Ghost"**。Ghost 是好东西、有许多我们需要的能力;正因为它开源,我们能借鉴它、拿走需要的能力,**做自己的站**——拥有整个 stack、不被绑定。Astro 本身也开源,整套都是我们自己的。所以下文的技术决策 = "自建一个承载我们所需 Ghost 能力的站",而非"抛弃 Ghost"。

- **Status**: DESIGN LOCKED / 待下周继续(writing-plans + 实现)
- **Date**: 2026-07-12(brainstorming with Yeqiu,通宵场)
- **Owner**: Neo(brainstorming/立项)· 实现归属待定(见 §8)
- **Resume point**: §9 下周接续清单

---

## 1. 目标(为什么做)

把 `timeobserver137.cyou` 从"一个带 KaTeX 的 Ghost 科学史博客"重构成一个**炫酷的双语个人门户/作品集**,**主要用途 = 找工作**(Yeqiu,**目标就业市场 = 澳洲**)。

> **市场校正(Euler catch,Yeqiu 确认 2026-07-12)**:本 spec 初稿误写"德国"(从 Yeqiu 住 Stuttgart 推的)。实际求职目标是**澳洲**——佐证:Euler 做的简历是 `Yeqiu_He_Resume_AU`、Brisbane 签证在走。影响 positioning + 语言本地化 + `/resume` 用 AU 版。

一个站承载三根柱子:
1. **个人身份**(about / resume)
2. **作品集 / 项目展示**(找工作核心)
3. **科学史写作**(现有 timeobserver137 内容品牌,作为次要柱子保留)

## 2. 已锁定决策(含理由)

| 决策 | 选择 | 理由 |
|---|---|---|
| 合一 vs 分站 | **单一门户**(三柱合一) | Yeqiu 定 |
| 域名 | **继续用 `timeobserver137.cyou`** | 不买新域名;当作 handle-brand(类比 swyx.io) |
| 技术栈 | **Astro 静态站,自建**(不用 Ghost 引擎,但继承其所需能力) | 见下方"关键论证" |
| positioning | **暂缓**(结构做成可后调) | Yeqiu 未定;上线前需选一个 lead angle |
| 语言 | **中英双语**(i18n) | 作品集面向澳洲/国际→英文优先;科学史内容中文 |
| 代码托管 | **新建 GitHub 仓** | 立项要求;public/private 待定(见 §8) |
| 上线方式 | **先备份现状 → 新站独立开发 → 做完 cutover** | Yeqiu 定 |

### 关键论证:为什么自建 Astro,而不继续在 Ghost 上做

- **Ghost 的核心价值(会员/付费/newsletter)我们没用上**:`[INFRA:ghost-stack-rosat1-architecture]` — 单会员(Yeqiu 自己)、free tier、无 Stripe、无 Mailgun。我们实际只用到"带 KaTeX 的静态博客渲染"那一小块 → 与其被整个 Ghost 引擎绑定,不如自建一个只承载我们所需能力的站(见下方"Ghost 能力继承清单")。
- **找工作的前端作品集,站点本身就是作品**:招人会看源码。Ghost Handlebars 主题 = 一眼套模板;手写炫酷站 = 直接证明前端能力。
- **弃 Ghost 后 ops 更简单**:不用维护 docker + mysql;还甩掉 Ghost 5.130.6 的 Settings API 501 坑(`[KNOWLEDGE:ghost-5130-settings-api-workaround-and-utf8-trap]`)。
- **迁移成本低**:只有 6 篇 EP,且 Markdown 源在 Escher workspace `outputs/` 里就有,不用从 Ghost 抓。
- **丢掉的**:只有 Ghost 后台可视化编辑器 → 换成 markdown-in-git(Yeqiu + agent 本来就用 markdown)。

> 决策演进说明:brainstorming 中先选了 "A. Ghost 自定义主题",后因 Yeqiu 补充"炫酷 + 找工作 + 新作 + github"四个要求,重摆 tradeoff → 改为 "D. 全新 Astro 静态站"。原因是这四个目标把权重从"单系统 ops"换成"前端设计自由 + 作品信号",Ghost 主题在这个目标下反而是镣铐。

## 3. 信息架构(i18n 路由)

| URL | 内容 |
|---|---|
| `/` (EN) · `/zh/` | 门户首页:hero + 精选项目 + 精选写作 + 语言切换 |
| `/projects/` · `/zh/projects/` | 项目索引(breadth-first grid) |
| `/projects/<slug>` | 项目案例(问题 / 做了什么 / 技术栈 / live+GitHub / 截图) |
| `/writing/` · `/zh/writing/` | 写作索引(科学史 EP + 其他) |
| `/writing/<slug>` | 文章(MDX + KaTeX) |
| `/about/` · `/zh/about/` | 个人身份 / bio |
| `/resume/` | web 简历 + 链 Euler 做的 PDF |

- **i18n**:Astro 内置 i18n。英文优先(`/`),中文 `/zh/`。作品集/about 英文优先;只有中文的科学史文章保留中文并标注。

## 4. 内容模型(Astro content collections,全在 git)

- `src/content/projects/{en,zh}/*.mdx` — frontmatter: `title, tagline, stack[], role, links{live,github}, cover, featured, order`
- `src/content/writing/{en,zh}/*.mdx` — frontmatter: `title, date, tags[], katex, cover`
- KaTeX:`remark-math` + `rehype-katex`
- about/resume:page 或小 collection;resume 链到 Euler 的 PDF(`agents/euler/workspace/outputs/2026-06-24-yeqiu-resume-au/`)

## 4.5 Ghost 能力继承清单(自建必须带走的)

"做自己的"≠ 从零漏功能。以下是 Ghost 当前给我们的、Astro 站必须复刻的能力(build 时逐项对齐):

| Ghost 能力 | Astro 里怎么实现 | 优先级 |
|---|---|---|
| KaTeX 数学渲染 | `remark-math` + `rehype-katex` | 必须(科学史核心) |
| Markdown/富文本内容管理 | content collections(MDX) | 必须 |
| 干净的阅读排版 / 文章页 | 自建 post layout | 必须 |
| Tags / 集合分类 | frontmatter tags + collection 路由 | 必须 |
| RSS 订阅 | `@astrojs/rss`(每集合一个 feed) | 必须 |
| SEO / meta / sitemap | Astro `@astrojs/sitemap` + head meta | 必须 |
| 图片处理(含 kg-image-card 教训) | Astro `<Image>` / assets 优化 | 必须 |
| 代码高亮 | Astro Shiki(内置) | 应有 |
| 会员 / newsletter / 评论 | **不做**(Ghost 里也没用) | 不需要 |

## 5. 视觉方向(炫酷 —— 细化留到实现期)

- 起点继承 timeobserver137 品牌调(暗色 / 数学黑板感 / 视频气质),提升到专业作品集水准:干净、快、有品味动效,**不要 AI 模板味**。
- 配色/字体/动效在实现阶段用 `frontend-design`(必要时 `design-shotgun` 出几版对比)定。spec 只锁方向。
- **最强差异化项目 = OpenClaw 多-agent fleet 本身**(8 agent + 记忆架构 + Discord bus + dreaming cron + RAG),大多数候选人拿不出 → 建议重点展示。
  - ⚠️ **必须写脱敏案例,不能公开这个私库**(含个人自动化 / 简历 / 私人内容 / Chen Tian 私人内容)。

## 6. 项目候选池(positioning 定后再排序 featured)

| 项目 | 路径 | 卖点方向 |
|---|---|---|
| OpenClaw multi-agent fleet | `E:\OpenClaw_Supervisor`(脱敏写) | AI/agent 系统 —— 最强差异化 |
| MEINRAG | `E:\MEINRAG` / github.com/stars1210JasonHe/Meinrag | RAG pipeline / AI 工程 |
| Meinmsc | `E:\Meinmsc` | 前端 / 音乐可视化(已发布) |
| 看板游戏平台 | (LAN Gomoku/Chess/Xiangqi + AI) | 全栈 |
| Kalman Flying Shot | `E:\kalman-flying-shot` | 工程 / freelance(MATLAB) |

## 7. 备份 → 迁移 → 部署 → cutover

1. **先做验证过的完整备份**(动手第一步):
   - DB dump(~2.59M,核心)
   - `ghost-content` **bind-mount**(`/root/ghost-stack/ghost-content`,~251M 主题+图片)
   - ⚠️ **6-16 踩过的坑**:旧 `backup_ghost_blog.py` 只 tar 了空的 named volume(4K),漏了 251M bind-mount。**必须按 `docker inspect .Mounts` 的真实来源备份,核对 size 非空**。
   - Ghost 后台文章 JSON 导出
   - 存 NAS `/volume1/OpenClaw/Backups/ghost-blog/`
2. 迁移 6 篇 EP → MDX,转 KaTeX(源用 Escher `outputs/`)
3. **部署**(待定,见 §8):Netlify/Vercel(GitHub CI/CD + PR 预览)vs Rosat1 Caddy 静态
4. **cutover**:新站先上 staging 验证 → `timeobserver137.cyou` 指过去 → 旧 Ghost 容器停但保留 + 备份可回滚 → 安全期后停用旧 Ghost 实例(Ghost 软件不否定,只是不再跑这个实例)

## 8. 归属 · 开发 · 工作流 + 剩余待决策

### ✅ 已定(2026-07-12 brainstorming 续)
- **归属模型**:**Euler 拥有/编排**(职业交付物 = 他助理域;调他的 fleet — Escher 视觉 / Fermat eng-review)· **Neo 本地执行**(Win11 落地 build + 管备份/迁移/部署/PR-gate)· **Yeqiu PR 把关**。理由:域正归 Euler,但交互式前端必须在 Win11 而 fleet 都在 headless Pi → 执行归 Neo。
- **开发位置**:**本地 Win11**(Astro 热重载 + 浏览器实时预览 + frontend-design/design-shotgun 都要真桌面;Pi headless 干不了前端 loop)。
- **repo 落盘**:**F: 盘**(稳定 USB;C: 空间紧 + no-C-drive 规矩,E: 是 flaky USB、5-25/5-28 趴过窝弄死过 render)。独立 repo,不塞进 `OpenClaw_Supervisor` workspace。
- **工作流**:**feature branch → PR → Yeqiu 审进度 → merge**(复用已跑通的 Neo↔PC PR 流)。Ghost 是 live → 新站独立开发、cutover 前旧站在、可回滚。

### ⬜ 仍待定(下周开工前)
- [ ] **positioning lead angle**:AI/Agent 工程师 / 全栈 / 前端 / 通用?(影响 hero + featured 排序)
- [ ] **部署平台**:Netlify/Vercel(推荐,CI/CD + 预览 URL)vs Rosat1 Caddy 静态(不加新服务)。⚠️ 部署 = **公网**,不是本地 PC 自托管(找工作站必须 7×24,PC 一睡就挂)
- [ ] **GitHub 仓 public vs private**:public = 代码即作品样本(加分)vs private
- [ ] **Astro vs Next**:若专投 React/Next 岗可考虑 Next;否则 Astro(默认,可插 React island)

## 9. 下周接续清单(resume point)

1. **Yeqiu 向 Euler 交付 ownership**(Neo 不能命令 peer;归属指令须来自 Yeqiu)→ Euler 编排 Escher/Fermat
2. 定 §8 剩余 4 项待决策(positioning / 部署平台 / public·private / Astro·Next)
3. **拉 Escher 确认**(shared rule:弃用 Ghost 改他 EP 发布流,跨内容域改动先确认)
4. 走 `writing-plans` 出详细实现计划
5. 实现第一步 = §7.1 验证过的完整备份(在任何 cutover 前)
6. repo 建在 **F:** + 新 GitHub 仓 + Astro 脚手架(Neo 本地 Win11)

## 10. 协调 / 风险

- **归属交接**:owner = Euler,但 Neo 不能命令 peer → 项目正式交给 Euler 的指令须由 Yeqiu 下(kickoff 时)。之后 Euler 编排,Neo 本地执行、按 PR 交付给 Yeqiu 审。
- **Escher 内容域**:博客是 Escher 的域,EP 发布流目前打到 Ghost。弃用 Ghost 会改他工作流 → 定案后必须拉他确认。
- **"什么都做"的作品集弱于专精**:positioning 暂缓可以,但上线前要选 lead angle。结构已做成 featured+order 可后调,支持延后。
- **双语 = 文案工作量翻倍**:Yeqiu 已接受。
- **OpenClaw 公开需脱敏**:见 §5 ⚠️。
