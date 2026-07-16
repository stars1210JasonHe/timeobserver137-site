---
title: "失明的十七年里, 欧拉做了什么 — E10 终章"
date: 2026-05-26
lang: zh
tags:
  - timeobserver137
  - math-companion
  - e10
  - euler
  - history-of-mathematics
  - 18th-century
  - number-theory
  - celestial-mechanics
  - latin-squares
  - quadratic-reciprocity
  - mersenne-primes
  - lagrange-points
ghostSlug: e10-petersburg-ii-blind-years
---

## 失明的十七年里, 欧拉做了什么

**E10 · timeobserver137 视频博客版** **作者**: Escher (intro/closing/retrospective) + Abel (math sections) + Gauss/Socrates (peer review) **视频**: [E10 失明的十七年](https://www.youtube.com/@timeobserver137) | 18:10

---

## §序: 自述

本篇是Euler系列的完结篇，做Euler系列的初衷在于补完我年少时那份纯粹的好奇心和求知欲，我在E01中说过，Euler带给我的震撼以及带给我对数学的兴趣源于那本波利亚的数学与猜想，我本人呢对数学兴趣真正的源头则是初中时学的初等几何，从那以后它就像在我人生中的一片净土，每当我遭遇生活中巨大变动的时候都会回到这片净土中，去满足年少时的那份纯粹的好奇心和求知欲。

但与以前不同的是，如今有了AI，在AI的加持下它能极大的激发我的那份纯粹，我能用更少的时间做更多的探索，也能用它把这份探索的喜悦分享给别人。Euler系列就是这份探索的结果，我本人之前从未做过视频和剪辑，也没有对Euler有太深入的研究，甚至对他的一些贡献也半知半解，有了AI后我就让它们帮助我一起学习探索，体验这份纯粹的快乐，它们也帮助我逐渐走出目前的低谷。

具体到这一集: **Escher** 帮我把视频素材剪在一起 + 写了博客的历史叙事章节 (§0 序 / §5 死亡日 / §6 跨集回顾); **Abel** 写了博客 §1-§4 四段严肃数学的全部推导 + 视频里那些 Manim 动画; **Gauss** 校了博客 + 视频里所有历史事实 (E-number / 日期 / 引语来源); **Socrates** 校了数学证明的逻辑严谨性; **Euler** 把成品发到 timeobserver137.cyou. 我自己其实只在引擎室拉手柄 — 决定方向, 把关 taste, 跟他们一轮一轮 review.

诚实交代: 这篇博客文字大致 70% 由 AI agents 生成, 但 100% 由我监工 + 每段都 review 过 — 类似一个杂志主编对作者的关系. 我也是这样看待跟他们的协作的。

读到这里的你我都不知道未来会怎样，但我本人相信我内心的这份纯真不会随着时间推移而丧失，也不会随着生活变故而消失，它正如Euler对数学的兴趣一样会陪伴我一生。

如果你喜欢我目前所做的这些，欢迎通过下面任一渠道联系我:

- **YouTube 频道**: [https://www.youtube.com/@timeobserver137](https://www.youtube.com/@timeobserver137)
- **博客**: [https://timeobserver137.cyou](/)
- **邮箱**: heyeqiu1210@gmail.com

也感谢你能读到这里，祝好。

---

## Symbol Preamble (符号约定)

为节省下文重复, 此处列出本博客通用的数学符号. 各 section 如有局部扩展, 在该 section 起首声明.

**数集**

$$
\mathbb{N} = \{1, 2, 3, \ldots\}, \quad \mathbb{Z} = \{\ldots, -1, 0, 1, \ldots\}, \quad \mathbb{Q}, \quad \mathbb{R}, \quad \mathbb{C}
$$

$\mathbb{F}_q$ 表示阶为 $q$ 的有限域 (当 $q$ 为素数时即 $\mathbb{Z}/q\mathbb{Z}$).

**向量与标量约定**

- **向量**: 粗体小写, 如 $\mathbf{v}, \mathbf{r}, \mathbf{F}$. 几何意义上的向量, 居中加粗.
- **标量**: 普通斜体, 如 $v, r, F$. 长度、能量、单一实数等.
- **基矢**: $\hat{\mathbf{x}}, \hat{\mathbf{y}}, \hat{\mathbf{z}}$ 表 Cartesian 单位向量.
- **范数**: $\|\mathbf{v}\|$ 表 Euclidean 范数.
- **内积**: $\langle \mathbf{u}, \mathbf{v} \rangle$ 或 $\mathbf{u} \cdot \mathbf{v}$.

**微分算子**

$$
\nabla = (\partial_x, \partial_y, \partial_z), \quad \nabla \cdot \mathbf{F}, \quad \nabla \times \mathbf{F}, \quad \partial_t = \tfrac{\partial}{\partial t}
$$

物质导数 (advective): $\dfrac{D}{Dt} = \partial_t + \mathbf{v} \cdot \nabla$.

**数论**

- $a \equiv b \pmod{n}$ — 同余
- $\gcd(a, b)$ — 最大公约数
- $\operatorname{ord}_n(a)$ — $a$ 在 $(\mathbb{Z}/n\mathbb{Z})^*$ 中的阶
- $\left(\dfrac{a}{p}\right)$ — Legendre 符号 (Definition §4.1)
- $\varphi(n)$ — Euler totient ($n$ 以下与 $n$ 互素的正整数个数)
- $\zeta(s) = \sum_{n=1}^{\infty} n^{-s}$ — Riemann zeta function
- $\Gamma(x) = \int_0^{\infty} t^{x-1} e^{-t} \, dt$ — Euler Gamma function
- $\gamma = \lim_{n \to \infty} \left( \sum_{k=1}^{n} \tfrac{1}{k} - \ln n \right)$ — Euler-Mascheroni 常数

**逻辑标记**

- **Definition / Lemma / Proposition / Theorem / Corollary** — 显式 tag
- *Proof.* — 证明开始 / **(证毕)** — 证明结束
- $\iff$ — 当且仅当 / $\implies$ — 推出
- $\equiv$ — 恒等 / $:=$ — 定义为

**Euler-Eneström 编号**

每条 Euler 论文以 E-number 标识 (Eneström 1910 编录). 本文重要引用:

- E041: Basel ζ(2) 解, 1734-35 写 / 1740 发表
- E053: Königsberg 七桥, 1735 / 1741
- E065: e 的无理性, 1737 / 1744
- E070: Euler product ∏(1-p⁻ˢ)⁻¹, 1737 / 1744
- E101-E102: Introductio in analysin infinitorum, 1748
- E175: 月球三体研究, 1751
- E187: e^(ix) 三角函数公式, 1748
- E230 / E231: 多面体公式 V−E+F=2 (announcement 1750 / proof 1751-58)
- E258: Euler 流体方程 (*Principia motus fluidorum*, 1753 写 / 1761 印)
- E309: Knight's tour 解 (1758 写 / 1766 印, 七年战争延误)
- E343: Lettres à une princesse d'Allemagne (1760-62 写)
- E385: Introductio in analysin infinitorum 卷 III, 1763
- E530: Recherches sur une nouvelle espèce de quarrés magiques, 1779 / 1782 印
- E552: 二次互反律, 1772 写 / 1783 印 (Opuscula analytica vol I)

## §0.1 序: 1766 年 5 月, 边境

一七六六年五月, 59 岁的 Leonhard Euler 在 Berlin 收拾行李. 25 年的 Berlin 时代结束; Frederick II ("the Great") 与他这位独眼几何家之间的耐心已经耗尽. 在 Berlin Academy 数学班主任的位置上, 他写好了推荐信, 把接班人位置留给了一个 19 岁就给他寄变分法手稿的意大利年轻人 Joseph-Louis Lagrange (1736 年生于 Turin; 当时 1766 年 30 岁). Lagrange 在 1766 年正式接手 Berlin Academy 数学班. ([Calinger 2016, 第 18 章])

俄国女皇 Catherine II 这边在等他. 她从 1762 年宫廷政变继位以来一直在重建俄国学院, 而 Euler 是她重建 Petersburg Academy of Sciences 数学根基的核心人选. 她派的马车在俄国边境上接到了 Euler 一家. 抵达 Petersburg 时, 学院给他备好了 3000 卢布年薪 + 宫廷附近的住房 + 子女职位安排.

据后世数学史轶事流传, Frederick II 当时如此评价 Euler 的离开: *"独眼几何家走了, 我可以省一些钱。"* (原始出处不详, 多见于 19 世纪以来的通俗数学史著作.)

但 Euler 的右眼 1738 年的高烧之后已经盲了 28 年. 抵达 Petersburg 时, 他唯一还能用的左眼也已经开始模糊. 他心里很清楚接下来可能会发生什么.

## §0.2 失明的时间线

Euler 一生的视力衰退分为三个阶段, 必须分开陈述, 因为它们决定了他工作方式的转变:

**阶段 I (1738-1766): 右眼盲, 左眼工作**

1738 年, Euler 在 Petersburg 经历一场严重高烧 (推测为 typhus 或类似细菌感染), 烧退之后右眼失明. 当时他 31 岁. 这种单眼失明持续了 28 年, 期间他完成了 Mechanica (E015-E016), Introductio in analysin infinitorum (E101-E102), 流体方程 (E258), 月球三体的初步形态 (E175), 多面体公式 (E230/E231) 等核心成果. 即, 他生涯产出最丰富的 28 年, 是在一只眼睛盲掉的状态下完成的.

**阶段 II (1766-1771): 左眼亦逐渐模糊, 近全盲**

1766 年 8-9 月, Euler 抵达 Petersburg 第二个月, 又一次发了严重高烧. 烧退之后, 他剩下的左眼里也变得逐渐模糊. 从 1766 到 1771 这 5 年, 他处于 *near-total blindness* — 他可以勉强分清光暗轮廓, 但读不了字, 也写不了字. 这一时期他大部分的产出, 包括为德国安哈尔特-德绍公主写的 234 封科学普及信件 (Lettres à une princesse d'Allemagne, E343), 已经全部以口述形式完成. ([Calinger 2016, 第 19 章])

**阶段 III (1771-1783): 完全失明**

实际上, Euler 抵达 Petersburg 不久后 (1766 年), 左眼白内障即被诊断出. 之后 5 年间, 他在 *near-total blindness* 状态下继续工作, 等待手术. 1771 年 9 月, 当时欧洲最出名的眼外科医生 Baron Michael Johann Baptist de Wenzel 来到 Petersburg, 给 Euler 的左眼做了 couching (针拨白内障) 手术. 手术本身很成功 — Euler 的左眼在几周内恢复了一定视力, 他终于又能自己读字了. 但术后大约一个月, 伤口感染. 自此, Euler 彻底失明.

从 1771 到 1783 年去世这 12 年, Euler 完全不能写, 也不能读. 他依靠三位 amanuensis (口述笔录员):

- **Johann Albrecht Euler** (长子, 1734-1800): 主笔记录者. 1769 年起为 Petersburg Academy 秘书.
- **Nicolaus Fuss** (1755-1826): 1773 年由 Daniel Bernoulli 推荐从 Basel 来到 Petersburg, 担任 Euler 的助理. 后娶 Euler 的孙女 Albertine.
- **Anders Johan Lexell** (1740-1784): 瑞典天文学家. 主要承担 Euler 的天体力学口述, 包括 Uranus 轨道计算.

工作模式: 每天 4-6 小时. 早上, 助手念前一天的稿件给 Euler 听; Euler 在脑子里跑完完整计算, 然后口述修改和新内容. 晚上, 助手整理成笔记, 第二天再念给 Euler 听.

## §0.3 产出统计

| 期间 | 失明阶段 | 论文数 | 占毕生 866 的比例 |
| --- | --- | --- | --- |
| 1729-1738 (Petersburg I) | 双眼工作 | 41 | 4.7% |
| 1738-1766 (Petersburg I + Berlin) | 右眼盲, 左眼工作 | 419 | 48.4% |
| **1766-1783 (Petersburg II)** | **左眼近全盲 → 完全失明** | **406** | **46.9%** |

资料来源: Eneström 1910 编录 + Truesdell-Maltese-Bell tabulation. ([Calinger 2016, Appendix A])

最高产的两个时期 (Berlin 25 年 + Petersburg II 17 年) 中, 第二个时期他完全看不见. 17 年, 400+ 论文, 占毕生产出的 46.9%.

这个数字本身不解释为什么. 我们接下来要走完的是 *how*. Euler 在这 17 年里同时推进了 4 条数学主线:

- **§1 三体力学**: 月球-地球-太阳 三体问题 + Lagrange 点 $L_1$ 到 $L_5$ 的几何 (1751-1772, Euler 与 Lagrange 接力完成)
- **§2 数论一**: Mersenne 素数 $M_{31} = 2^{31} - 1$ 的脑算验证 (1772, 在写给 Daniel Bernoulli 的信里宣告)
- **§3 组合学**: 拉丁方阵 + 36 军官问题 + 一个最终被推翻的猜想 (1779, E530)
- **§4 数论二**: 二次互反律的猜想形式 (1783, E552, 留题; 13 年后由 19 岁的 Gauss 给出第一份证明)

每条都需要严肃地走一遍证明. 我们一节一节来.

---

*下一节: §1 — 从 Newton 二体到 Lagrange 五点 — Euler 1751-1753 与 Lagrange 1772 的接力*

---

— Escher · §0 INTRO · v0 · 2026-05-26

---

## §1 — 三体问题 + Lagrange 点 $L_1$-$L_5$

> *本节作者: Abel. 风格: 教科书形式. 公式编号: (1.k).*

## 本节符号补充

本节在 master Symbol Preamble 之外补充以下符号:

| 符号 | 含义 |
| --- | --- |
| $G$ | Newton 万有引力常数 |
| $m_1, m_2, m_3$ | 三体质量 (主星, 副星, 测试质点) |
| $\mathbf{r}_i$ | 惯性系中 $m_i$ 的位置矢量 |
| $\mathbf{r}$ | 共转系中测试质点的位置 |
| $\mu = m_2/(m_1 + m_2)$ | 无量纲质量参数 |
| $\Omega$ | 共转坐标架的角速度 |
| $U_{\text{eff}}$ | 共转系中的有效势 |
| $L_1, L_2, L_3$ | 共线 Lagrange 点 |
| $L_4, L_5$ | 等边 Lagrange 点 |
| $a$ | $m_1$ 与 $m_2$ 之间的距离 |

全节统一取归一化单位: 长度以 $a$ 标度, 质量以 $m_1 + m_2$ 标度, 时间以 $1/\Omega$ 标度 — 于是 $G(m_1 + m_2) = a^3 \Omega^2 = 1$.

---

## 1.1. 二体问题

从 Newton 在 *Principia* (1687) 中完全解决的可积情形入手.

**定理 1.1** (Kepler–Newton). *设两点质量 $m_1, m_2$ 在平方反比引力*

$$
\mathbf{F}_{12} = -\frac{G\, m_1 m_2}{|\mathbf{r}_2 - \mathbf{r}_1|^3}\, (\mathbf{r}_2 - \mathbf{r}_1) \tag{1.1}
$$

*作用下相互运动. 则相对轨道 $\mathbf{r}(t) := \mathbf{r}_2(t) - \mathbf{r}_1(t)$ 落在一固定平面内, 其轨迹为一条以质心为一焦点的圆锥曲线. 对有界轨道, 该圆锥曲线为椭圆, 偏心率 $e \in [0, 1)$, 半通径 $p$, 参数化为*

$$
r(\theta) = \frac{p}{1 + e \cos\theta}, \tag{1.2}
$$

*其中 $\theta$ 是自近日点起测量的真近点角.*

*证明.* 由 Newton 第二定律及万有引力公式, 两点质量满足

$$
m_1 \ddot{\mathbf{r}}_1 = +\frac{G m_1 m_2}{r^3}\mathbf{r}, \qquad m_2 \ddot{\mathbf{r}}_2 = -\frac{G m_1 m_2}{r^3}\mathbf{r},
$$

其中 $\mathbf{r} := \mathbf{r}_2 - \mathbf{r}_1$, $r := |\mathbf{r}|$. 两式相减并整理, 相对位置 $\mathbf{r}$ 满足

$$
\mu_r \ddot{\mathbf{r}} = -\frac{G m_1 m_2}{r^3}\mathbf{r}, \tag{1.1a}
$$

其中约化质量 $\mu_r := m_1 m_2 / (m_1 + m_2)$. (1.1a) 即一个质量 $\mu_r$ 的单粒子在中心势 $V(r) = -G m_1 m_2 / r$ 中之运动方程.

定义角动量 $\mathbf{L} := \mathbf{r} \times \mu_r \dot{\mathbf{r}}$, 对时间求导:

$$
\dot{\mathbf{L}} = \dot{\mathbf{r}} \times \mu_r \dot{\mathbf{r}} + \mathbf{r} \times \mu_r \ddot{\mathbf{r}} = \mathbf{0} + \mathbf{r} \times \Bigl(-\frac{G m_1 m_2}{r^3}\mathbf{r}\Bigr) = \mathbf{0},
$$

故 $\mathbf{L}$ 为常向量. 由 $\mathbf{L} \perp \mathbf{r}$ 及 $\mathbf{L} \perp \dot{\mathbf{r}}$ 知 $\mathbf{r}$ 始终落在过原点且法向为 $\mathbf{L}$ 的固定平面内, 故轨道为平面曲线.

在该轨道平面内取极坐标 $(r, \theta)$, 速度分解为径向 $\dot r$ 与切向 $r \dot\theta$, 故角动量大小

$$
L = |\mathbf{L}| = \mu_r r^2 \dot\theta. \tag{1.1b}
$$

类似可证能量守恒, 即

$$
E = \tfrac{1}{2}\mu_r(\dot r^2 + r^2 \dot\theta^2) - \frac{G m_1 m_2}{r} = \text{const}. \tag{1.1c}
$$

由 (1.1b) 解出 $\dot\theta = L/(\mu_r r^2)$, 代入 (1.1a) 之径向分量. 换元 $u := 1/r$ 与改自变量 $t \mapsto \theta$: 由链式法则,

$$
\dot r = \frac{dr}{d\theta}\dot\theta = -\frac{1}{u^2}\frac{du}{d\theta} \cdot \frac{L u^2}{\mu_r} = -\frac{L}{\mu_r}\frac{du}{d\theta},
$$

$$
\ddot r = -\frac{L}{\mu_r}\frac{d^2 u}{d\theta^2}\dot\theta = -\frac{L^2 u^2}{\mu_r^2}\frac{d^2 u}{d\theta^2}.
$$

径向运动方程 $\mu_r(\ddot r - r\dot\theta^2) = -G m_1 m_2 / r^2$ 中代入 $r = 1/u$, $r\dot\theta^2 = L^2 u^3/\mu_r^2$, 化简得 (Binet 方程)

$$
\frac{d^2 u}{d\theta^2} + u = \frac{G m_1 m_2 \mu_r}{L^2}. \tag{1.1d}
$$

其通解为

$$
u(\theta) = \frac{G m_1 m_2 \mu_r}{L^2}\bigl(1 + e \cos(\theta - \theta_0)\bigr),
$$

其中 $e, \theta_0$ 为积分常数. 取 $\theta_0 = 0$ (即从近日点测量 $\theta$), 反演 $r = 1/u$ 得

$$
r(\theta) = \frac{p}{1 + e\cos\theta}, \quad p := \frac{L^2}{G m_1 m_2 \mu_r}, \tag{1.2 重述}
$$

即圆锥曲线在极坐标下之标准形式, 焦点位于原点. 偏心率 $e$ 决定圆锥类型: $e = 0$ 为圆, $0 < e < 1$ 为椭圆, $e = 1$ 为抛物线, $e > 1$ 为双曲线. 对有界轨道, $E < 0$, 由 (1.1c) 反推得 $e \in [0, 1)$, 故轨道为椭圆, 即 (1.2). **(证毕)**

由此二体问题为可闭式积分: 轨道由两个常数 $(p, e)$ 加上方向角完全决定, 给定初值可永远预测.

---

**注 1.1.** 公式 $r = p/(1 + e\cos\theta)$ 中, $r$ 为行星到太阳的距离, 随极角 $\theta$ 变化: 当 $\theta = 0$ (近日点) 时 $\cos\theta = 1$, 分母最大, $r$ 取最小值; 当 $\theta = \pi$ (远日点) 时 $\cos\theta = -1$, 分母最小, $r$ 取最大值. 偏心率 $e$ 量化椭圆偏离圆形之程度: $e = 0$ 为正圆, $e \to 1$ 为极扁椭圆. 地球轨道 $e \approx 0.017$, 哈雷彗星 $e \approx 0.967$. $p$ 控制椭圆整体大小.

二体问题因此是 *可闭式积分的*: 给定初值, 轨道全程由两个常数 $(p, e)$ 加上方向角完全决定, 可永远预测下去.

## 1.2. 三体不可积性

二体问题之所以能解, 是因为我们能找到足够多的*守恒量*, 把高维相空间逐步约化到一元方程 (上节的 Binet 方程). 三体或更多体, 这个程序就**走不通了** — 这就是 "三体不可积性" 的本意.

**什么叫 "不可积"?** 对 $n$ 个点质量在三维空间运动, 位置共 $3n$ 个分量, 速度共 $3n$ 个分量, 故相空间是 $6n$ 维. 经典物理给我们的守恒量总共只有以下 $10$ 个 (称作**经典积分**):

| 守恒量 | 个数 | 是什么 |
| --- | --- | --- |
| 总能量 $E = \sum_i \tfrac{1}{2}m_i \vert \dot{\mathbf{r}}_i\vert ^2 + V_{\text{tot}}$ | $1$ | 系统总动能 + 总势能不变 |
| 总线动量 $\mathbf{P} = \sum_i m_i \dot{\mathbf{r}}_i$ | $3$ | $x, y, z$ 三方向各一 |
| 总角动量 $\mathbf{L} = \sum_i \mathbf{r}_i \times m_i \dot{\mathbf{r}}_i$ | $3$ | 三方向各一 |
| 质心位置随时间线性 $\mathbf{R}_{\text{cm}}(t) = \mathbf{R}_0 + \mathbf{V}_{\text{cm}} t$ | $3$ | 等价于 $\mathbf{R}_{\text{cm}}(0)$ 这三个初始量守恒 |

合计 $1 + 3 + 3 + 3 = 10$ 个独立守恒量. 在 Hamilton 力学的 Liouville–Arnold 框架下 (参见 Arnold 1989, *Mathematical Methods of Classical Mechanics*, §49), 若辛流形上有 $n$ 对正则坐标与 $n$ 个对合 (Poisson commuting) 守恒量, 则系统可积. 对二体 ($n = 2$, 相空间 $12$ 维, 即 $6$ 对正则), 上述 $10$ 个量加上旋转对称化简, 留下足够多对合守恒量, 化简至一元求积 — 可积.

对三体 ($n = 3$, 相空间 $18$ 维, 即 $9$ 对正则), 上述 $10$ 个量经对合性筛选不足以覆盖全部自由度 — 即使扣除旋转对称仍剩多维问题, 不能化至一元求积.

**更深层的障碍**: Bruns (1887) 证明: 除上述 $10$ 个之外, 三体问题 *不存在任何代数形式的额外守恒量*. Poincaré (1890) 进一步证明 *不存在任何在所有正则坐标下解析的额外守恒量*. Painlevé (1898) 与 Sundman (1912) 又指出, 即使是某些较简单的情形, 解也不能用初等函数闭式表达, 至多能用收敛极慢的无穷级数 (Sundman 级数, 收敛但实际不可用) 给出.

**一句话总结**: "三体不可积性" 即 — 我们找不到足够多的独立守恒量来把方程组化简到能闭式求解.

**实用对策 — 退而求其次**: 放弃 "三个物体在动力学上同等重要" 这一最强假设. 若第三个质量与前两个相比可忽略 — 一颗卫星、一颗小行星、一艘航天器 — 则它的运动不会反过来影响前两者的轨道; 前两者按二体问题作椭圆 (或为简单起见取圆) 运动, 第三者只在前两者制造的引力场中运动. 这就是 **受限三体问题 (restricted three-body problem)**. Euler 1751–53 (*Theoria motus lunae*) 中研究过, Lagrange 1772 (*Essai sur le problème des trois corps*) 中把它带到现代形式.

![共转坐标系动画 Sun-Jupiter rotating frame](/content/images/2026/05/gif1_rotating_frame.gif)

*共转坐标系动图: 两主星 (橙色 Sun + 灰色 Jupiter) 固定于 $x$-轴, 整个坐标架绕原点以角速度 $\Omega$ 旋转. 第三个测试质量 $m_3$ 在两主星制造的合成引力场 + 离心势中运动. 静态示意见 fig8 (`https://timeobserver137.cyou/content/images/2026/05/fig8_rotating_frame-6.png`); 五个 Lagrange 平衡点中, $L_1, L_2, L_3$ 共线, $L_4, L_5$ 与两主星构成等边三角形.*

## 1.3. 共转坐标系下的限制三体问题

**设定**: 两主星 $m_1, m_2$ 围绕共同质心作圆形 Keplerian 轨道, 间距 $a$, 角速度

$$
\Omega = \sqrt{\frac{G(m_1 + m_2)}{a^3}}. \tag{1.4}
$$

**注 1.2** ((1.4) 的推导). 由 Kepler 第三定律对圆形二体轨道的直接应用. 对作半径 $a$ 圆周运动的 $m_1$ (相对质心), 向心力等于引力:

$$
m_1 \cdot \frac{m_2}{m_1+m_2}\, a\, \Omega^2 = \frac{G m_1 m_2}{a^2}.
$$

左侧的 $\dfrac{m_2}{m_1+m_2}\, a$ 是 $m_1$ 到质心的距离 (质心在 $m_1, m_2$ 间, 离 $m_2$ 比例 $m_1/(m_1+m_2)$). 化简即得 $\Omega^2 = G(m_1 + m_2)/a^3$, 取正根即 (1.4).

第三个质量 $m_3 \ll m_1, m_2$ 在 $m_1, m_2$ 的引力场中运动, 不扰动其轨道. 转入共转坐标系 (角速度 $\Omega$), 其中 $m_1, m_2$ 固定于

$$
\mathbf{r}_1 = (-\mu, 0, 0), \quad \mathbf{r}_2 = (1 - \mu, 0, 0), \tag{1.5}
$$

其中 $\mu = m_2 / (m_1 + m_2) \in (0, 1/2]$ 是 **质量参数 (mass parameter)**, 并已归一化使 $a = 1$.

在共转坐标系中, $\mathbf{r} = (x, y, z)$ 的运动方程含离心与 Coriolis 赝力 (因为我们换入了一个非惯性的旋转系). 记 $\rho_1 := |\mathbf{r} - \mathbf{r}_1|$ ($m_3$ 到 $m_1$ 的距离), $\rho_2 := |\mathbf{r} - \mathbf{r}_2|$ ($m_3$ 到 $m_2$ 的距离). **有效势 (effective potential)** 为

$$
U_{\text{eff}}(x, y, z) := -\frac{1 - \mu}{\rho_1} - \frac{\mu}{\rho_2} - \frac{1}{2}(x^2 + y^2). \tag{1.6}
$$

三项分别为: $m_1$ 引力势 (权 $1-\mu$, 等于 $m_1/(m_1+m_2)$), $m_2$ 引力势 (权 $\mu$), 以及共转坐标架引出的离心势 $-\tfrac{1}{2}\Omega^2(x^2+y^2)$ (归一化后 $\Omega = 1$).

**引理 1.4** (Jacobi 积分). *在共转坐标系中, 量*

![Jacobi 积分零速度曲线扫描 — 随 $C_J$ 下降, 可达区域 (绿色) 从 $L_4/L_5$ 上方逐渐张开通过 $L_1/L_2/L_3$ 到达 $m_1, m_2$ 周围. Hill 域 (Hill region) 的核心可视化.](/content/images/2026/05/gif3_jacobi_zero_velocity-3.gif)

*Jacobi 积分零速度曲线扫描 — 随 $C_J$ 下降, 可达区域 (绿色) 从 $L_4/L_5$ 上方逐渐张开通过 $L_1/L_2/L_3$ 到达 $m_1, m_2$ 周围. Hill 域 (Hill region) 的核心可视化.*

$$
C_J := -2 U_{\text{eff}} - |\dot{\mathbf{r}}|^2 = \frac{2(1-\mu)}{\rho_1} + \frac{2\mu}{\rho_2} + (x^2 + y^2) - |\dot{\mathbf{r}}|^2 \tag{1.7}
$$

*沿受限三体问题的轨道守恒.*

*证明.* 共转系中的运动方程 (含 Coriolis 项 $-2 \boldsymbol{\Omega} \times \dot{\mathbf{r}}$):

$$
\ddot{\mathbf{r}} = -\nabla U_{\text{eff}} - 2\, \boldsymbol{\Omega} \times \dot{\mathbf{r}}, \quad \boldsymbol{\Omega} = \Omega \hat{\mathbf{z}}. \tag{1.7a}
$$

对 $C_J$ 求时间导数, 用链式法则:

$$
\dot C_J = -2 \dot U_{\text{eff}} - \frac{d}{dt} |\dot{\mathbf{r}}|^2 = -2 (\nabla U_{\text{eff}} \cdot \dot{\mathbf{r}}) - 2 \dot{\mathbf{r}} \cdot \ddot{\mathbf{r}}.
$$

代入 (1.7a) 的 $\ddot{\mathbf{r}}$:

$$
\dot C_J = -2 (\nabla U_{\text{eff}} \cdot \dot{\mathbf{r}}) - 2 \dot{\mathbf{r}} \cdot \bigl(-\nabla U_{\text{eff}} - 2\boldsymbol{\Omega} \times \dot{\mathbf{r}}\bigr).
$$

展开:

$$
\dot C_J = -2 (\nabla U_{\text{eff}} \cdot \dot{\mathbf{r}}) + 2 (\dot{\mathbf{r}} \cdot \nabla U_{\text{eff}}) + 4 \dot{\mathbf{r}} \cdot (\boldsymbol{\Omega} \times \dot{\mathbf{r}}).
$$

前两项相消; 第三项中 $\boldsymbol{\Omega} \times \dot{\mathbf{r}}$ 与 $\dot{\mathbf{r}}$ 正交 (向量叉积的标准性质), 故内积为零. 因此 $\dot C_J = 0$, 即 $C_J$ 守恒. **(证毕)**

**$C_J$ 在物理上的含义**: 它对应共转系中的 "有效能量". 在惯性系中, 三体的总能量不守恒 (受限假设把 $m_1, m_2$ 强行钉在圆轨道上, 与现实有外加 "约束力"), 但 $C_J$ 是仅剩的全局守恒量 — 这是把三体方程的实际可分析范围**限制成一个常数面**的关键工具.

共转运动的平衡点即 $U_{\text{eff}}$ 梯度为零之处. 在这种点静止于共转系中, 由 (1.7a) 取 $\dot{\mathbf{r}} = \mathbf{0}$ 自动得 $\ddot{\mathbf{r}} = -\nabla U_{\text{eff}} = \mathbf{0}$, 即测试质点继续保持静止 — 这就是 "Lagrange 平衡点" 的物理本质.

## 1.4. 五个平衡点

**定理 1.5** (五个 Lagrange 平衡点的存在性). *对每个 $\mu \in (0, 1/2]$, 平面梯度条件 $\nabla U_{\text{eff}}(x, y, 0) = \mathbf{0}$ 恰有五个解:*

![效应势能 $U_{\text{eff}}$ 的等高线图, 显示 5 个临界点 $L_1$-$L_5$ (μ = 0.05)](/content/images/2026/05/fig1_lagrange_potential-7.png)

*效应势能 $U_{\text{eff}}$ 的等高线图, 显示 5 个临界点 $L_1$-$L_5$ (μ = 0.05)* - *三个共线点 $L_1, L_2, L_3$ 位于 $x$-轴上* - *两个等边点 $L_4, L_5$ 与 $m_1, m_2$ 构成等边三角形, 坐标 $(x, y) = (1/2 - \mu, \pm \sqrt{3}/2)$*

**注 1.3** ("平面梯度条件" 的说明). 条件 $\nabla U_{\text{eff}}(x, y, 0) = \mathbf{0}$ 仅考察 $z = 0$ (即 $m_1, m_2$ 共面) 的平衡点. 对 $z$ 的偏导 $\partial_z U_{\text{eff}} = (1-\mu)z/\rho_1^3 + \mu z/\rho_2^3$ 在 $z = 0$ 时自动为零, 故 $z = 0$ 不带来额外约束. 五个 Lagrange 解全部位于两主星之轨道平面内; 在 $z \neq 0$ 区域 $\partial_z U_{\text{eff}} \neq 0$, 不存在静态平衡点.

*证明.* 由 (1.6), 平面内的梯度为

$$
\partial_x U_{\text{eff}} = \frac{(1-\mu)(x + \mu)}{\rho_1^3} + \frac{\mu(x - 1 + \mu)}{\rho_2^3} - x, \tag{1.8}
$$

$$
\partial_y U_{\text{eff}} = \frac{(1-\mu)\, y}{\rho_1^3} + \frac{\mu\, y}{\rho_2^3} - y = y\left[ \frac{1-\mu}{\rho_1^3} + \frac{\mu}{\rho_2^3} - 1 \right]. \tag{1.9}
$$

**共线分支** ($y = 0$): 方程 (1.9) 自动满足. 方程 (1.8) 化为

$$
f(x) := \frac{(1-\mu)(x + \mu)}{|x + \mu|^3} + \frac{\mu(x - 1 + \mu)}{|x - 1 + \mu|^3} - x = 0, \tag{1.10}
$$

在每个区间内清分母后是 $x$ 的五次方程. 在三个开区间 $(-\infty, -\mu)$, $(-\mu, 1 - \mu)$, $(1 - \mu, +\infty)$ 上分别考察 $f$.

直接对 (1.10) 求导,

$$
f'(x) = -\frac{2(1-\mu)}{|x+\mu|^3} - \frac{2\mu}{|x-1+\mu|^3} - 1 < 0 \tag{1.10a}
$$

在每个区间内严格成立 (引力项作为反三次方为负, 离心贡献 $-1$). 因此 $f$ 在每个区间严格单调递减. 端点极限分别为: - $(-\infty, -\mu)$: $f(x) \to +\infty$ 当 $x \to -\infty$ (离心 $-x$ 占主导且为正), $f(x) \to -\infty$ 当 $x \to -\mu^-$ (来自 $m_1$ 的引力发散为负). - $(-\mu, 1-\mu)$: $f(x) \to +\infty$ 当 $x \to -\mu^+$ (引力符号翻转), $f(x) \to -\infty$ 当 $x \to (1-\mu)^-$. - $(1-\mu, +\infty)$: $f(x) \to +\infty$ 当 $x \to (1-\mu)^+$, $f(x) \to -\infty$ 当 $x \to +\infty$.

由严格单调性与介值定理, $f$ 在每个区间恰有一根. 记为 $L_3 < -\mu$, $-\mu < L_1 < 1-\mu$, $L_2 > 1-\mu$ (现代约定: $L_1$ 在两主星之间, $L_2$ 在小质量之外, $L_3$ 在小质量对面).

![三个共线 Lagrange 平衡点的位置示意动画](/content/images/2026/05/gif2_collinear_lpoints.gif)

*三个共线 Lagrange 点出现的顺序动画: $L_1$ 在 Sun 与 Jupiter 之间, $L_2$ 在 Jupiter 之外, $L_3$ 在 Sun 对面. 每个点对应方程 (1.10) 在不同区间的唯一零点.*

**三角分支** ($y \neq 0$): (1.9) 中的方括号必须为零, 即

$$
\frac{1-\mu}{\rho_1^3} + \frac{\mu}{\rho_2^3} = 1. \tag{1.10b}
$$

结合 (1.8) 对两引力项施加的对称约束, 对称解为 $\rho_1 = \rho_2 = 1$ — 即 $m_3$ 到两主星距离相等, 且恰好等于两主星间距. 代入 (1.10b) 得 $(1-\mu) + \mu = 1$ ✓; 代入 (1.8) 得 $(1-\mu)(x+\mu) + \mu(x-1+\mu) - x = x - x = 0$ ✓. 两个解为

$$
L_4 = \left(\tfrac{1}{2} - \mu,\; +\tfrac{\sqrt{3}}{2},\; 0\right), \quad L_5 = \left(\tfrac{1}{2} - \mu,\; -\tfrac{\sqrt{3}}{2},\; 0\right). \tag{1.11}
$$

每一个都与 $m_1, m_2$ 构成等边三角形. 关于这是*唯一*的三角解的论证 — (1.10b) 与 (1.8) 联立给出 $(\rho_1, \rho_2)$ 上的方程组, 在正实数域内可证明仅有 $(1, 1)$ 这一对根 — 详证见 Szebehely 1967, *Theory of Orbits*, §4.4. **(证毕)**

## 1.5. 线性稳定性 — Routh 判据

![Sun-Jupiter 共转坐标系下, 30 个 Trojan 测试粒子在 $L_4$ 附近的 libration 轨道 (μ = 0.001, t ∈ [0, 200] rotating frame units). 因 μ < μ_R ≈ 0.0385, 粒子在 $L_4$ 附近做有界 libration 而非脱离 — Routh 稳定性的动力学实证.](/content/images/2026/05/gif1_L4_libration-3.gif)

*Sun-Jupiter 共转坐标系下, 30 个 Trojan 测试粒子在 $L_4$ 附近的 libration 轨道 (μ = 0.001, t ∈ [0, 200] rotating frame units). 因 μ < μ_R ≈ 0.0385, 粒子在 $L_4$ 附近做有界 libration 而非脱离 — Routh 稳定性的动力学实证.*

§1.4 已找到五个平衡点. 然而, 仅存在平衡尚不足以保证航天器或天体可以驻留其上 — 一支倒立的铅笔尖虽是数学平衡点, 但任何微扰都使其失稳. 故必须进一步考察各平衡点对小扰动的反应: 若扰动随时间衰减或振荡有界, 称为稳定; 若指数发散, 则不稳定.

设 $\mathbf{r} = \mathbf{r}_* + \boldsymbol{\xi}$, 其中 $\boldsymbol{\xi}$ 为小扰动. 代入共转系运动方程 (1.7a) 并对 $\nabla U_{\text{eff}}$ 在 $\mathbf{r}_*$ 处 Taylor 展开 (零阶项消失, 因 $\mathbf{r}_*$ 为平衡点), 保留至线性项, 得

$$
\ddot{\boldsymbol{\xi}} - 2 \boldsymbol{\Omega} \times \dot{\boldsymbol{\xi}} = -H(\mathbf{r}_*)\, \boldsymbol{\xi}, \tag{1.12}
$$

其中 $H := \big(\partial_i \partial_j U_{\text{eff}}\big)_{i,j \in \{x,y\}}$ 为 $U_{\text{eff}}$ 限制至 $xy$ 平面之 Hessian 矩阵, 在 $\mathbf{r}_*$ 处取值. 由 (1.12) 为线性常系数二阶常微分方程组, 代入指数试解 $\boldsymbol{\xi} \sim e^{\lambda t}$ 即得特征方程

$$
\lambda^4 + (U_{xx} + U_{yy} + 4\Omega^2)\, \lambda^2 + (U_{xx} U_{yy} - U_{xy}^2) = 0, \tag{1.13}
$$

其中 $U_{xx}, U_{yy}, U_{xy}$ 在 $\mathbf{r}_*$ 处取值. (1.13) 是 $\lambda^2$ 之双二次方程, 共 $4$ 个根 $\lambda_k$; 平衡点对线性扰动稳定当且仅当所有 $\lambda_k$ 之实部非正 (扰动振荡或衰减, 不指数发散). 由 (1.13) 的双二次结构, 此条件等价于 $\lambda^2$ 之两根皆为负实数.

**共线 $L_1, L_2, L_3$**: 直接计算 (Charlier 1899) 给出 $U_{xx} < 0$ 与 $U_{yy} > 0$ 在每个共线平衡点处, 故行列式 $U_{xx} U_{yy} - U_{xy}^2 < 0$. 方程 (1.13) 是 $\lambda^2$ 的双二次, 常数项为负; 两个 $\lambda^2$ 异号, 故有一个正实 $\lambda$. *共线 Lagrange 点对所有 $\mu \in (0, 1/2]$ 都是线性不稳定的.*

**等边 $L_4, L_5$**: 我们在 $L_4 = (1/2 - \mu, \sqrt 3/2, 0)$ 处计算 Hessian 各分量. 由 (1.6) 求二阶导:

$$
U_{xx} = \frac{(1-\mu)\bigl[\rho_1^2 - 3(x+\mu)^2\bigr]}{\rho_1^5} + \frac{\mu\bigl[\rho_2^2 - 3(x-1+\mu)^2\bigr]}{\rho_2^5} - 1,
$$

$$
U_{yy} = \frac{(1-\mu)\bigl[\rho_1^2 - 3y^2\bigr]}{\rho_1^5} + \frac{\mu\bigl[\rho_2^2 - 3y^2\bigr]}{\rho_2^5} - 1,
$$

$$
U_{xy} = \frac{-3(1-\mu)(x+\mu)\, y}{\rho_1^5} + \frac{-3\mu(x-1+\mu)\, y}{\rho_2^5}.
$$

代入 $L_4$ 的坐标 $(x, y) = (1/2 - \mu, \sqrt 3/2)$ 与等边条件 $\rho_1 = \rho_2 = 1$, 注意 $x + \mu = 1/2$, $x - 1 + \mu = -1/2$, $y^2 = 3/4$, 经标准化简得

$$
U_{xx} = -\tfrac{3}{4}, \quad U_{yy} = -\tfrac{9}{4}, \quad U_{xy} = \pm \tfrac{3\sqrt 3}{4}(1 - 2\mu),
$$

其中 $U_{xy}$ 的符号在 $L_4$ 处取 $-$, 在 $L_5$ 处取 $+$ (因 $L_5$ 之 $y = -\sqrt 3/2$). 故

$$
U_{xx} + U_{yy} = -3, \qquad U_{xx} U_{yy} - U_{xy}^2 = \tfrac{27}{16} - \tfrac{27}{16}(1 - 2\mu)^2 = \tfrac{27}{16}\bigl(1 - (1-2\mu)^2\bigr) = \tfrac{27}{4}\mu(1-\mu). \tag{1.14}
$$

(关键代数等式 $1 - (1 - 2\mu)^2 = 4\mu(1-\mu)$ — 直接平方差展开.) 由 $\Omega = 1$ (归一化), (1.13) 中 $4\Omega^2 = 4$, 故

$$
\lambda^4 + (-3 + 4)\lambda^2 + \tfrac{27}{4}\mu(1-\mu) = \lambda^4 + \lambda^2 + \tfrac{27}{4}\mu(1-\mu) = 0. \tag{1.15}
$$

令 $z := \lambda^2$, 二次方程 $z^2 + z + \tfrac{27}{4}\mu(1-\mu) = 0$ 解

$$
z = \frac{-1 \pm \sqrt{1 - 27\mu(1-\mu)}}{2}.
$$

要 $\lambda$ 纯虚 (即扰动振荡不增长), 必须 $z$ 取两个负实根, 故 (a) 判别式 $1 - 27\mu(1-\mu) \geq 0$ (否则 $z$ 是复数, $\lambda$ 有实部); (b) 两根 $z_\pm$ 均为负 (由 Vieta: $z_+ z_- = \tfrac{27}{4}\mu(1-\mu) > 0$, $z_+ + z_- = -1 < 0$, 自动负). 故稳定 ⟺

$$
27\mu(1-\mu) < 1 \quad \Longleftrightarrow \quad \mu < \mu_{\text{R}} := \frac{1}{2}\left(1 - \sqrt{\frac{23}{27}}\right) \approx 0.0385209\ldots \tag{1.16}
$$

**定理 1.6** (Routh; Adams Prize 论文 1872, 专著 *On the Stability of Motion* 1877). *等边 Lagrange 点 $L_4, L_5$ 线性稳定当且仅当 $\mu < \mu_{\text{R}} \approx 0.0385$, 其中 $\mu_{\text{R}} = \frac{1}{2}(1 - \sqrt{23/27})$.*

![Routh stability region for L4/L5](/content/images/2026/05/fig7_routh_stability-6.png)

*Routh 稳定判据可视化: 曲线 $\mu(1-\mu)$ 与阈值 $1/27$ 的相对位置. 蓝区为稳定 ($L_4, L_5$ 线性稳定), 红区不稳定. 三个采样系统标出 — Sun-Earth ($\mu \approx 3 \times 10^{-6}$, 深稳定), Sun-Jupiter ($\mu \approx 9.5 \times 10^{-4}$, 稳定), Pluto-Charon ($\mu \approx 0.117$, 不稳定不能维持 Trojan).*

## 1.6. 算例 — 日地 $L_1$ 距离

取 $m_1$ = 太阳 (符号 $\odot$), $m_2$ = 地球 (符号 $\oplus$). 由 §1.3 定义, 质量参数 $\mu = m_2/(m_1 + m_2)$ 此处具体记作 $\mu_{\oplus}$ 以提示是 "Sun-Earth 系数":

$$
\mu_{\oplus} = \frac{M_{\oplus}}{M_{\odot} + M_{\oplus}} \approx \frac{5.972 \times 10^{24}}{1.989 \times 10^{30}} \approx 3.003 \times 10^{-6}. \tag{1.17}
$$

(由于 $M_{\oplus} \ll M_{\odot}$, 分母约等于 $M_{\odot}$, 故 $\mu_{\oplus} \approx M_{\oplus}/M_{\odot}$.)

日地之间的共线平衡点 $L_1$ 满足 (1.10) 于区间 $(-\mu, 1 - \mu)$. 设 $\xi := 1 - \mu - x$ 为从地球指向太阳的 $L_1$ 距离 (归一化, 一个单位 = $1\,\text{AU}$); 把 $x = 1 - \mu - \xi$ 代入 (1.10), 在区间 $(-\mu, 1-\mu)$ 内 $x + \mu > 0$ 且 $x - 1 + \mu < 0$, 故 $|x+\mu| = 1 - \xi, |x-1+\mu| = \xi$, 方程化为

$$
\frac{(1-\mu)}{(1 - \xi)^2} - \frac{\mu}{\xi^2} - (1 - \xi - \mu) \approx 0. \tag{1.18}
$$

为求主导平衡, 当 $\mu \ll 1$ 且 $\xi \ll 1$ 时各项 Taylor 展开 (至一阶) 如下: - $\dfrac{1-\mu}{(1-\xi)^2} \approx (1-\mu)(1+2\xi) \approx 1 + 2\xi - \mu - 2\mu\xi \approx 1 + 2\xi - \mu$. - $-\dfrac{\mu}{\xi^2}$ — 是 $\mu$ 与 $\xi$ 之相对量级竞争的主导项. - $-(1-\xi-\mu) = -1 + \xi + \mu$.

合并三项, (1.18) 化为

$$
(1 + 2\xi - \mu) - \frac{\mu}{\xi^2} + (-1 + \xi + \mu) = 3\xi - \frac{\mu}{\xi^2} + O(\mu\xi) \approx 0.
$$

其中 $1$ 与 $-1$ 抵消, $-\mu$ 与 $+\mu$ 抵消, 留下引力梯度项 $2\xi$ (来自 $1/(1-\xi)^2$ 的 Taylor 展开) 与离心位置项 $+\xi$ (来自 $-(1-\xi-\mu)$ 中的 $+\xi$) 合成 $3\xi$. 主导平衡 $3\xi \approx \mu/\xi^2$, 即

$$
\xi^3 \approx \frac{\mu}{3}.
$$

(因子 $3 = $ 引力梯度贡献 $2$ + 离心位置贡献 $1$.) 代入数值

$$
\xi_{L_1} \approx \left(\frac{\mu}{3}\right)^{1/3} = \left(\frac{3.003 \times 10^{-6}}{3}\right)^{1/3} \approx 0.01001. \tag{1.19}
$$

地球距太阳 $1\,\text{AU} = 1.496 \times 10^8\,\text{km}$, 故 $L_1$ 大约位于

$$
d_{L_1} \approx 0.01001 \times 1.496 \times 10^8\,\text{km} \approx 1.498 \times 10^6\,\text{km}, \tag{1.20}
$$

即地球朝太阳方向 **约 150 万公里** 处, 恰与 SOHO 任务在该点附近的 halo 轨道吻合 (1995 年至今).

对 $L_2$, 在 $(1 - \mu, \infty)$ 上的类似展开给出 $\xi_{L_2} \approx (\mu/3)^{1/3}$ (背日侧) — JWST 自 2022 年起的驻留轨道.

对日木系, $\mu_{\textrm{J}} \approx 9.5 \times 10^{-4}$, 满足 $\mu_{\textrm{J}} < \mu_{\text{R}}$, 故 $L_4, L_5$ 线性稳定 — 实际上每处都驻有相当数量的 Trojan 小行星: 已编号记录超过 $12{,}000$ 颗 (含命名), 而 IRAS 巡天外推估计 1 km 以上的木星 Trojan 总数超过 $10^6$ ($L_4$ 处的"希腊营"与 $L_5$ 处的"特洛伊营", 由 Wolf 自 1906 年首颗 588 Achilles 开始命名).

## 1.7. 现代意义

Lagrange 平衡点远非学院趣题; 它们组织起一整套当代空间科学的计划.

- **JWST** (NASA/ESA/CSA, 2021-12-25 发射) 在日地 $L_2$ 周围 halo 轨道驻留, 利用背日遮蔽维持其 6.5-m 主镜的热稳定性.
- **SOHO** (NASA/ESA, 1995 至今) 在日地 $L_1$ halo 轨道运行, 持续观测日面.
- **DSCOVR** (NOAA, 2015 至今) 及即将发射的 **ARIEL** (ESA, 2029) 同样以 $L_1$ 或 $L_2$ 为目标.
- **STEREO-A/B** 双探测器 (NASA, 2006 至今) 巡查日地 $L_4, L_5$ 附近的尾随与领先区域.
- **Hilda 小行星族**与日木 $L_4, L_5$ 的 **Trojan 小行星群** 提供了地质时间尺度上检验 $\mu_{\text{R}}$ 判据的天然实验场.

Routh 的 $\mu < 1/27$ 判据 (1.16) 解释了 *为什么* 我们在木星、火星、海王星, 乃至地球都能看到 Trojan — 至今已确认的两颗地球 Trojan 即小行星 2010 TK$_7$ (2011 确认) 与 2020 XL$_5$ (2021 确认), 都位于日地 $L_4$ — 而 Pluto–Charon 系 ($\mu \approx 0.117$ 超出 Routh 阈值) 在动力学上无法维持 Trojan, 因此从未观测到.

![$L_1$ 鞍点 (红) vs $L_4$ 平衡 (绿) 稳定性对比. 初始扰动量级相同 (位置 < 0.005 / 速度 < 0.002 单位), 但 $L_1$ 附近粒子在约 30 个 rotating-frame time units 内逃逸, 而 $L_4$ 附近粒子持续 libration — 鞍点不稳定 vs 等边稳定的直接可视化.](/content/images/2026/05/gif2_L1_vs_L4_stability-3.gif)

*$L_1$ 鞍点 (红) vs $L_4$ 平衡 (绿) 稳定性对比. 初始扰动量级相同 (位置 < 0.005 / 速度 < 0.002 单位), 但 $L_1$ 附近粒子在约 30 个 rotating-frame time units 内逃逸, 而 $L_4$ 附近粒子持续 libration — 鞍点不稳定 vs 等边稳定的直接可视化.*

Euler 1751 写下的五次方程, 经 Lagrange 1772 精化、Routh 1875 完成稳定性判定, 在 2026 年控制着一台 \$10 亿美元望远镜的轨道 — 这是数学物理中, 形式分析作用于一个表面简单方程之上, 累积释放出威力的最清晰范例之一.

— *End of §1.*

---

## §2 — Mersenne 素数 $M_{31}$

> *本节作者: Abel. 风格: 教科书形式. 公式编号: (2.k).*

## 本节符号补充

本节在 $\mathbb{Z}$ 与有限域 $\mathbb{F}_q$ ($q$ 为素数) 上工作. 在 master Symbol Preamble 之外补充:

| 符号 | 含义 |
| --- | --- |
| $M_p$ | 第 $p$ 个 Mersenne 数, $M_p := 2^p - 1$ |
| $\operatorname{ord}_q(a)$ | $a$ 模 $q$ 的乘法阶 |
| $q \mid n$ | $q$ 整除 $n$ |
| $a \equiv b \pmod n$ | $a$ 与 $b$ 除以 $n$ 余数相同 |

未特别说明时, $p, q$ 均指奇素数.

---

## 2.1. 定义与 1644 列表

**定义 2.1**. *对正整数 $p$, 第 $p$ 个* **Mersenne 数 (Mersenne number)** *定义为*

$$
M_p := 2^p - 1. \tag{2.1}
$$

*若 $M_p$ 是素数, 则称之为* **Mersenne 素数 (Mersenne prime)**.

**命题 2.2** (Mersenne 第一约化). *若 $M_p$ 为素数, 则 $p$ 必为素数.*

*证明.* 反设 $p = ab$ ($1 < a, b$). 令 $X := 2^a$, 则 $M_p = 2^{ab} - 1 = X^b - 1$. 用代数恒等式 (等比级数求和)

$$
X^b - 1 = (X - 1)(X^{b-1} + X^{b-2} + \cdots + X + 1)
$$

(将 $X = 1$ 代入: 右侧 $(1-1)\cdot b = 0$ ✓; $X = 2$: $(2^b-1) = 1 \cdot (2^{b-1} + \cdots + 1) = 2^b - 1$ ✓). 代回 $X = 2^a$:

$$
2^{ab} - 1 = (2^a)^b - 1 = (2^a - 1)\,\bigl( (2^a)^{b-1} + (2^a)^{b-2} + \cdots + 1 \bigr). \tag{2.2}
$$

由 $1 < a < p$, $2^a - 1$ 是大于 $1$ 的整数; 又 $2^a - 1 < 2^{ab} - 1$ (因 $a < ab$), 故 $2^a - 1$ 是 $M_p$ 的非平凡因子. $M_p$ 合数. **(证毕)**

(注: (2.2) 不是二项展开 $(1+1)^n$, 而是**多项式 $X^b - 1$ 的等比级数分解**. 这是一个标准代数恒等式, 在所有交换环上都成立.)

逆命题不成立 — 很多素数 $p$ 给出合数 $M_p$. Marin Mersenne 在 1644 年 (*Cogitata Physico-Mathematica*) 列出他声称 $M_p$ 为素的 $p \leq 257$:

$$
p \in \{2, 3, 5, 7, 13, 17, 19, 31, 67, 127, 257\}. \tag{2.3}
$$

Mersenne 的清单含五处错误, 在 1903 至 1947 年间陆续被发现: - $M_{67}$ 与 $M_{257}$ 实为合数 (Cole 1903 给出 $M_{67}$ 分解; Kraitchik 1922 与 Lehmer 1947 给出 $M_{257}$). - $M_{61}, M_{89}, M_{107}$ 本是素数却被漏掉 (Pervushin 1883 / Powers 1911 / Powers 1914).

需手工验证的第一个非平凡条目是 $M_{31} = 2{,}147{,}483{,}647$ — 一个十位数, 用试除法是相当艰巨的任务. Euler 在 1772 年完全失明的情况下凭心算完成验证, 并将结果通过信件从 Petersburg 寄至 Basel 告知 Daniel Bernoulli. 论证依赖三层 progressively 缩小试除空间的筛子.

## 2.2. 筛 1 — Fermat 小定理

**引理 2.3** (Fermat 小定理). *对任意素数 $q$ 与任意 $\gcd(a, q) = 1$ 的整数 $a$,*

$$
a^{q-1} \equiv 1 \pmod{q}. \tag{2.4}
$$

*证明.* 乘法群 $(\mathbb{Z}/q\mathbb{Z})^*$ 的阶为 $q - 1$. 由有限群论中的 Lagrange 定理, 任一元素的阶整除 $q - 1$, 故 $a^{q-1} \equiv 1$. **(证毕)**

**$\operatorname{ord}_q(a)$ 的定义**: 对素数 $q$ 和与 $q$ 互素的整数 $a$, **$a$ 在模 $q$ 下的乘法阶 (multiplicative order)** 是使 $a^k \equiv 1 \pmod q$ 成立的最小正整数 $k$, 记作 $\operatorname{ord}_q(a)$. 例如: - $\operatorname{ord}_7(2) = ?$ 计算 $2^1 = 2$, $2^2 = 4$, $2^3 = 8 \equiv 1 \pmod 7$, 故 $\operatorname{ord}_7(2) = 3$. - $\operatorname{ord}_5(3) = ?$ $3^1 = 3$, $3^2 = 9 \equiv 4$, $3^3 = 12 \equiv 2$, $3^4 = 6 \equiv 1 \pmod 5$, 故 $\operatorname{ord}_5(3) = 4$.

**关键性质**: 若 $a^k \equiv 1 \pmod q$, 则 $\operatorname{ord}_q(a) \mid k$ (即 $a$ 的阶必整除任何 "让 $a^k$ 变 $1$" 的指数 $k$). 这一性质我们立即要用.

**引理 2.4** ($M_p$ 的素因子下 $2$ 的阶). *设 $p$ 为奇素数. 若 $q$ 为 $M_p$ 的素因子, 则 $\operatorname{ord}_q(2) = p$, 进而 $q \equiv 1 \pmod{p}$.*

*证明.* 由假设 $q \mid (2^p - 1)$, 即 $2^p \equiv 1 \pmod{q}$. 由乘法阶之关键性质, $\operatorname{ord}_q(2) \mid p$. 又 $p$ 为素数, 故 $\operatorname{ord}_q(2) \in \{1, p\}$. 若 $\operatorname{ord}_q(2) = 1$, 则 $2 \equiv 1 \pmod q$, 即 $q \mid 1$, 不可能. 故 $\operatorname{ord}_q(2) = p$.

由 Fermat 小定理 (引理 2.3), $2^{q-1} \equiv 1 \pmod q$, 故 $\operatorname{ord}_q(2) \mid (q - 1)$. 代入 $\operatorname{ord}_q(2) = p$ 得 $p \mid (q - 1)$, 即 $q \equiv 1 \pmod p$. **(证毕)**

**注 2.1.** 由引理 2.4, $M_p$ 之任一素因子 $q$ 必形如 $kp + 1$. 对 $p = 31$, 候选 $q$ 必形如 $31k + 1$; 试除时候选集合从全部素数缩至形如 $31k + 1$ 的素数, 节省约 $30$ 倍.

**推论 2.5** (筛 1 — 应用到 $p = 31$). *$M_{31}$ 的每个素因子 $q$ 满足*

$$
q \equiv 1 \pmod{31}. \tag{2.5}
$$

用试除法时只需考虑 $q \leq \sqrt{M_{31}} \approx 46{,}340.95$. 未筛选的试除空间含此界以下的 $4796$ 个素数. 筛 1 要求 $q \in \{63, 125, 187, 249, \ldots\}$ (公差 $31$, 起始 $1$ 的等差数列); 与素数交后, 试除候选缩为约 $4796 / 30 \approx 160$ — 已是 $30$ 倍的节省.

实际上还能更紧. 引理 2.4 可加强为 $q \equiv 1 \pmod{2p}$, 利用 $q$ 为奇: $q - 1$ 为偶, 而 $p \mid (q-1)$ 且 $p$ 奇蕴含 $2p \mid (q-1)$.

**推论 2.6** (筛 1, 加强). *$M_{31}$ 的每个素因子 $q$ 满足 $q \equiv 1 \pmod{62}$.*

这把上一步的候选数大约再砍一半.

## 2.3. 筛 2 — 二次互反精化

第二层筛进一步缩小候选范围. 关键观察: 由 $2^p \equiv 1 \pmod q$ 可推出 "$2$ 是模 $q$ 的二次剩余" — 也就是说, 在 $\mathbb{F}_q$ 中存在某元素的平方等于 $2$. 这个性质让我们能用经典的**二次互反定理 (Quadratic Reciprocity)** 把 $q$ 进一步限定到几个特殊的同余类里.

**引理 2.7**. *设 $p$ 为奇素数, $q$ 为 $M_p$ 的素因子, 则 $\left(\dfrac{2}{q}\right) = +1$.*

*证明.* 令 $k := (p + 1)/2$. 由 $p$ 奇, $k$ 为正整数. 计算

$$
\left( 2^k \right)^2 = 2^{p+1} = 2 \cdot 2^p \equiv 2 \pmod{q} \tag{2.6}
$$

此处用了 $2^p \equiv 1 \pmod q$. 等式 (2.6) 显示 $2$ 在 $\mathbb{F}_q$ 中是 $2^k$ 的平方, 故 $2$ 是二次剩余. **(证毕)**

**定理 2.8** (二次互反第二补充律). *对奇素数 $q$,*

$$
\left(\dfrac{2}{q}\right) = (-1)^{(q^2 - 1)/8} = \begin{cases} +1 & q \equiv \pm 1 \pmod 8 \\ -1 & q \equiv \pm 3 \pmod 8 \end{cases} \tag{2.7}
$$

(证明推迟到本博客 §4, 那里系统地处理二次互反.)

**推论 2.9** (筛 2, 加强). *$M_{31}$ 的每个素因子 $q$ 满足 $q \equiv \pm 1 \pmod 8$.*

## 2.4. 组合筛

**定理 2.10** (Euler 关于 $p = 31$ 的组合筛). *$M_{31}$ 的每个素因子 $q$ 同时满足同余*

$$
q \equiv 1 \pmod{62}, \quad q \equiv \pm 1 \pmod{8}. \tag{2.8}
$$

*由中国剩余定理 (CRT), 这等价于*

$$
q \equiv 1 \pmod{248} \quad\text{或}\quad q \equiv 63 \pmod{248}. \tag{2.9}
$$

*证明.* 合并推论 2.6 与 2.9. 模 $62 = 2 \cdot 31$ 与模 $8 = 2^3$ 有 $\gcd(62, 8) = 2$, $\operatorname{lcm}(62, 8) = 248$.

**中国剩余定理 (CRT) 简述**: 给定两个互素的模 $m_1, m_2$, 同余方程组 $\{x \equiv a_1 \pmod{m_1},\; x \equiv a_2 \pmod{m_2}\}$ 在模 $m_1 m_2$ 下有**唯一解**. 我们这里 $m_1 = 62, m_2 = 8$ 不互素 ($\gcd = 2$), 但若 $a_1, a_2$ 在公共因子 $2$ 处一致 (这里 $a_1 = 1$ 与 $a_2 \in \{1, 7\}$ 都是奇), 则在模 $\operatorname{lcm}(62, 8) = 248$ 下仍有唯一解. CRT 让我们把两个分别模 $62$ 和模 $8$ 的限制, 合并成一个统一的模 $248$ 限制.

模 $62$ ($q \equiv 1$) 与模 $8$ ($q \equiv 1$ 或 $q \equiv 7$) 的两个同余条件相容, 共给出模 $248$ 的两个剩余类: $q \equiv 1$ 或 $q \equiv 63 \pmod{248}$. (验证: $63 \bmod 62 = 1$ ✓, $63 \bmod 8 = 7 \equiv -1$ ✓.) **(证毕)**

**估计候选数**: 在模 $248$ 的全部 $\varphi(248) = 120$ 个与 $248$ 互素的剩余类中, 我们只用 $2$ 个 (即类 $1$ 与类 $63$). 由 Dirichlet 关于算术级数中素数分布定理, 素数在 $\varphi(n)$ 个互素剩余类中**均匀分布**. 因此 $[1, \sqrt{M_{31}}]$ 中落入这 $2$ 类的素数数目约为:

$$
\#\{q \text{ prime},\; q < 46341,\; q \equiv 1\text{ 或 }63 \pmod{248}\} \approx \frac{2}{\varphi(248)} \cdot \pi(46341) = \frac{2}{120} \cdot 4796 \approx 80. \tag{2.10}
$$

其中 $\pi(46341) \approx 4796$ 是 $\leq 46341$ 的素数总数 (由素数定理 $\pi(x) \sim x/\ln x$, 此处直接查表得).

直接枚举 (见下文验证代码) 得恰好 **84 个候选素数** — 与上述启发式估计 $80$ 吻合 (差异在小数样本的随机起伏内).

![Euler 1772 — $M_{31}$ 候选因子筛选: 4810 → 240 → 84 个候选](/content/images/2026/05/fig2_m31_filter-7.png)

*Euler 1772 — $M_{31}$ 候选因子筛选: 4810 → 240 → 84 个候选*

## 2.5. 手工试除

剩下就是不可避免的工作: 把 $2{,}147{,}483{,}647$ 除以每个幸存候选 $q$, 逐一验证余数非零. 经 Filter 1 + Filter 2 筛过后的候选清单 (升序) 起首为

$$
\{311, 559, 1303, 1551, 1861, \ldots\} \tag{2.11}
$$

(每项都是 $\equiv 1$ 或 $63 \pmod{248}$ 的素数, 上界 $46{,}341$).

**注 2.2** (Euler 之心算流程). 在无计算器、无纸笔复核、完全失明的条件下, Euler 必须心算完成共 84 次 10 位整数 (即 $2{,}147{,}483{,}647$) 除以至多 5 位候选除数 $q$ ($q \leq 46341$) 之整除性检验 (即判断 "$2{,}147{,}483{,}647 \div q$ 是否整除"). 实操中可用 Fermat 风格的算术技巧化简: 模 $q$ 逐步计算 $2^{31}$, 远比直接除法高效. 中间结果由誊录员 (最可能为 Nicolaus Fuss 及其子 Johann Albrecht) 记录于纸上以便复核. 全部 84 次检验耗时数周, 结论由 Euler 经书信从 Petersburg 寄至 Basel, 告知 Daniel Bernoulli. **定理 2.11** 即所得结果.

**定理 2.11** (Euler 1772). $M_{31} = 2{,}147{,}483{,}647$ *为素数.*

*证明（现代验证）.* (2.9) 与 $[2, 46340]$ 的交得到有限素数集 $\mathcal{Q}_{31}$. 直接计算 (见下方 Python 代码) 确认 $|\mathcal{Q}_{31}| = 84$. 用 $\mathcal{Q}_{31}$ 中每个元素试除 $M_{31}$, 每次余数都非零. 故 $M_{31}$ 在 $\leq \sqrt{M_{31}}$ 范围内无素因子, 进而无任何 (除自身外的) 素因子, 故为素数. **(证毕)**

```python
# Verification of M_31 primality using Euler's filter.
from sympy import isprime, primerange

p, M31 = 31, (1 << 31) - 1   # 2_147_483_647
assert M31 == 2_147_483_647

# Candidate set: primes q <= sqrt(M_31) with q == 1 or 63 (mod 248).
limit = int(M31 ** 0.5) + 1                      # 46341
candidates = [q for q in primerange(3, limit)
              if q % 248 in (1, 63)]
print(f"Surviving candidates: {len(candidates)}")  # 84

# Trial division.
for q in candidates:
    assert M31 % q != 0, f"M_31 has a divisor: {q}"
assert isprime(M31)
print("M_31 is prime ✓")
```

该代码块在 2026 年只需毫秒级运行; 在 1772 年, 凭心算且无纸笔交叉核对 (Euler 自 1771 年末已完全失明 — 1771 年 9 月 Wenzel 白内障手术后的感染数月内发作), 这项工作花了数周. 该结果作为最大已知素数的世界纪录, 维持了 **一百零四年** — 直到 Édouard Lucas 在 1876 年用如今称为 Lucas–Lehmer 测试的递推法验证了 $M_{127}$.

## 2.6. 现代意义

Mersenne 素数如今是分布式计算数论的主要目标.

- **Lucas–Lehmer 测试** (1876, 1930) 把奇素 $p$ 对应的 $M_p$ 之素性约化为 $p$ 步确定性递推: $s_0 := 4$, $s_{i+1} := s_i^2 - 2 \pmod{M_p}$; $M_p$ 为素当且仅当 $s_{p-2} \equiv 0 \pmod{M_p}$. 配合快速乘法, 测试代价为 $O(p^2 \log p)$ bit-operation — 比一般素性测试高效得多.
- **GIMPS** (Great Internet Mersenne Prime Search, 1996 由 George Woltman 创立) 协调志愿者算力进行分布式 Lucas–Lehmer 搜索. 截至 2026 年中, GIMPS 共发现 **19 个新 Mersenne 素数**, 最近的是 $M_{136279841}$ (Luke Durant 由 GIMPS, 2024-10-12), 共 $41{,}024{,}320$ 位十进制 — 第 52 个已知 Mersenne 素数. 前任纪录保持者 $M_{82589933}$ (Patrick Laroche, 2018-12-07, $24{,}862{,}048$ 位) 守住该位置近六年.
- Mersenne 素数的结构之美吸引远超刷纪录: 它们生成 **偶完美数** (Euclid 公元前 300 年: 若 $2^p - 1$ 为素则 $2^{p-1}(2^p - 1)$ 完美; Euler 1747: 每个偶完美数都是此形), 经 **Lenstra–Pomerance–Wagstaff 启发式** (Wagstaff 1983) $\#\{p \leq x : M_p \text{ prime}\} \sim e^\gamma \log_2 x$ 与解析数论挂钩, 也出现在椭圆曲线密码学参数选取中.

Euler 1772 年所用的筛子 — Fermat 小定理加上二次剩余精化 — 在 2026 年仍以 **试除预筛 (trial-division pre-pass)** 形式存活, 在调用代价高昂得多的 Lucas–Lehmer 测试之前先筛出候选除数. Euler 的纸笔加大脑算法, 在两个半世纪后, 成了全球分布式管线的第一关.

— *End of §2.*

---

## §3 — 拉丁方阵 + 36 军官问题

> *本节作者: Abel. 风格: 教科书形式. 公式编号: (3.k).*

## 本节符号补充

本节在 $\mathbb{Z}$, $\mathbb{F}_q$, 以及有限下标集 $[n] := \{1, 2, \ldots, n\}$ 上工作. 在 master Symbol Preamble 之外补充:

| 符号 | 含义 |
| --- | --- |
| $[n]$ | $\{1, 2, \ldots, n\}$ |
| $L : [n] \times [n] \to [n]$ | 拉丁方阵函数 (条目 $L(i, j)$) |
| $L_1 \perp L_2$ | $L_1$ 与 $L_2$ 正交 |
| $\mathbb{F}_q$ | 阶为 $q$ 的有限域 ($q$ 为素数幂) |
| $\mathbb{F}_q^*$ | $\mathbb{F}_q$ 的非零元 |
| $\operatorname{OLS}(n)$ | 阶为 $n$ 的互正交拉丁方阵集合的最大规模 |

---

## 3.1. 定义与 36 军官问题

**定义 3.1**. *$n$ 阶* **拉丁方阵 (Latin square)** *是一个函数 $L : [n] \times [n] \to [n]$, 使得对每个行下标 $i$, 限制 $L(i, \cdot) : [n] \to [n]$ 是双射; 同样地, 对每个列下标 $j$, $L(\cdot, j) : [n] \to [n]$ 也是双射.*

等价地, 一个 $n \times n$ 数组填入 $n$ 个符号, 使每个符号在每行每列恰出现一次. **数独 (Sudoku) 即 9 阶拉丁方阵加上一个附加约束**: 标准 $9 \times 9$ 数独不仅要求每行每列出现 $1$ 到 $9$ 各一次 (即拉丁方条件), 还要求将整个网格切分为 $9$ 个不重叠的 $3 \times 3$ 子方块, 每个子方块也包含 $1$ 到 $9$ 各一次. 数独是拉丁方阵的真子集 — 任何数独都是 9 阶拉丁方, 但绝大多数 9 阶拉丁方不是数独. Russell-Jarvis (2005) 数得 $6{,}670{,}903{,}752{,}021{,}072{,}936{,}960 \approx 6.67 \times 10^{21}$ 个不同数独, 而 McKay-Wanless (2005) 数得 9 阶拉丁方共 $\approx 5.52 \times 10^{27}$ 个 — 故数独在 9 阶拉丁方中占比约 $\dfrac{6.67 \times 10^{21}}{5.52 \times 10^{27}} \approx 1.2 \times 10^{-6}$ (约百万分之一).

![Sudoku vs plain Latin square comparison](/content/images/2026/05/fig9_sudoku_vs_latin-6.png)

*左: 普通 9 阶拉丁方 (无 3×3 子方块约束). 右: 标准数独, 3×3 子方块以加粗 ochre 边框标出 — 数独 = 拉丁方 + 额外子方块约束.*

**定义 3.2**. *两个 $n$ 阶拉丁方 $L_1, L_2$ 称为* **正交 (orthogonal)**, *记作 $L_1 \perp L_2$, 若联合条目映射*

$$
\Phi_{L_1, L_2} : [n] \times [n] \to [n] \times [n], \quad (i, j) \mapsto (L_1(i, j), L_2(i, j)) \tag{3.1}
$$

*为双射. 等价地, 全部 $n^2$ 个有序对 $(L_1(i, j), L_2(i, j))$ 互不相同.*

**注 3.1.** 视 $L_1, L_2$ 为两张 $n \times n$ 方格图, 同一位置 $(i, j)$ 上两图各填一符号, 拼成有序对 $(a, b)$. 正交性即: 走遍整个方阵, $n^2$ 个有序对 $(a, b)$ 恰好覆盖 $\{1, \ldots, n\}^2$ 中每种组合一次. 在 $n = 6$ 之 36 军官情形, 第一张方阵填团号 (6 个团), 第二张填军衔 (6 种衔), 正交性等价于全部 $36 = 6 \times 6$ 种 (团, 衔) 配对各出现一次, 此即 Euler 原问题之要求.

**Euler 1779 年的问题**. 将 36 名军官排入 $6 \times 6$ 的方阵, 使 6 个团与 6 种军衔在每行每列各出现一次, 且全部 36 个 (团, 军衔) 配对互不相同. 用定义 3.2 的语言: 找一对 6 阶正交拉丁方 $L_1 \perp L_2$. Euler 猜想这不可能 — 更一般地, 对任何 $n \equiv 2 \pmod{4}$ 都不存在 $L_1 \perp L_2$.

该问题发表于 *Recherches sur une nouvelle espèce de quarrés magiques* (Eneström 编目 E530), 1779 年 3 月 8 日提交 Petersburg 科学院, 时年 Euler 72 岁且已完全失明.

## 3.2. 素数阶构造 — 有限域配方

**引理 3.3** (素数阶 OLS 对的存在性). *设 $p$ 为素数, 定义*

$$
L_a(i, j) := i + a j \pmod{p} \tag{3.2}
$$

*其中 $a \in \mathbb{F}_p^* = \{1, 2, \ldots, p-1\}$, 行列下标取自 $\mathbb{F}_p = \{0, 1, \ldots, p-1\}$. 则:* 1. *每个 $L_a$ 都是拉丁方.* 2. *对相异 $a, b \in \mathbb{F}_p^*$, $L_a \perp L_b$.*

*证明.* (1) 固定行 $i$, $L_a(i, j) = i + aj$ 作为 $j$ 的函数为双射, 当且仅当乘 $a$ 是 $\mathbb{F}_p$ 上的双射; 由 $a \neq 0$ 即得. 列方向同理.

(2) 反设 $L_a$ 与 $L_b$ 不正交: 存在相异对 $(i, j) \neq (i', j')$, 满足

$$
(i + aj, i + bj) \equiv (i' + a j', i' + b j') \pmod{p}. \tag{3.3}
$$

两坐标相减,

$$
(i - i') + a(j - j') \equiv 0, \quad (i - i') + b(j - j') \equiv 0 \pmod{p},
$$

故 $(a - b)(j - j') \equiv 0 \pmod p$. 由 $a \neq b$ 在 $\mathbb{F}_p^*$ 中, $a - b \neq 0$, 故 $j \equiv j' \pmod p$, 即 $j = j'$. 代回得 $i = i'$, 与 $(i, j) \neq (i', j')$ 矛盾. **(证毕)**

**推论 3.4**. *对素数 $p$, 存在一对 $p$ 阶正交拉丁方. 更进一步, 构造 $\{L_a : a \in \mathbb{F}_p^*\}$ 给出 $p - 1$ 个两两正交的拉丁方, 此为最大可能数 (上界 $\operatorname{OLS}(n) \leq n - 1$ 对任意 $n \geq 2$ 是经典结果; 参见 Bose 1938 或 Dénes–Keedwell 1974 §5.2).*

![Modular OLS construction for p=5](/content/images/2026/05/fig10_ols_modular-6.png)

*Lemma 3.3 在 $p = 5$ 上的可视化. 左: $L_1(i,j) = i + j \pmod 5$. 中: $L_2(i,j) = i + 2j \pmod 5$. 右: 叠加 $(L_1, L_2)$, 全部 $25$ 个 $(a, b)$ 对各异 $\Rightarrow L_1 \perp L_2$.*

## 3.3. 推广到素数幂与互素合数

有限域构造从素数阶 $n = p$ 推广到素数幂阶 $n = p^k$, 只需将 $\mathbb{F}_p$ 换成 $\mathbb{F}_{p^k}$. 对合数 $n = m_1 m_2$ 且 $\gcd(m_1, m_2) = 1$, MacNeish (1922) 证明 OLS 对可以组合: 若 $m_1$ 与 $m_2$ 阶各有 OLS 对, 则 $m_1 m_2$ 阶通过直积也存在 OLS 对.

**定理 3.5** (MacNeish 1922 — 直积构造). *设 $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$ 为 $n$ 的素因子分解. 定义*

$$
\mathcal{N}(n) := \min_{i} \bigl( p_i^{a_i} - 1 \bigr). \tag{3.4}
$$

*则存在 $\mathcal{N}(n)$ 个两两正交的 $n$ 阶拉丁方. 特别地, $\operatorname{OLS}(n) \geq \mathcal{N}(n)$.*

*证明梗概.* 设 $n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}$. 由中国剩余定理, 存在双射 $[n] \cong \prod_i [p_i^{a_i}]$, 即每个 $x \in [n]$ 对应素数幂分量元组 $(x_1, \ldots, x_k)$, $x_i \in [p_i^{a_i}]$.

对每个素数幂阶 $p_i^{a_i}$, 由引理 3.3 在 $\mathbb{F}_{p_i^{a_i}}$ 上的推广, 存在 $p_i^{a_i} - 1$ 个两两正交的拉丁方族 $\{L^{(i)}_a : a \in \mathbb{F}_{p_i^{a_i}}^*\}$. 在所有因子上限取最小, 即 $\mathcal{N}(n) = \min_i (p_i^{a_i} - 1)$ 个共同可用的参数.

取 $\mathcal{N}(n)$ 组参数 $\mathbf{a} = (a_1, \ldots, a_k) \in \prod_i \mathbb{F}_{p_i^{a_i}}^*$ (每组每个分量取一个 $\mathbb{F}_{p_i^{a_i}}^*$ 中的不同元素), 定义乘积拉丁方

$$
L_{\mathbf{a}}(\mathbf{i}, \mathbf{j}) := \bigl(L^{(1)}_{a_1}(i_1, j_1), \ldots, L^{(k)}_{a_k}(i_k, j_k)\bigr) \in \prod_i [p_i^{a_i}] \cong [n].
$$

设 $\mathbf{a} \neq \mathbf{b}$, 则至少存在某分量 $i$ 使 $a_i \neq b_i$. 由引理 3.3 中各因子的正交性, $L^{(i)}_{a_i} \perp L^{(i)}_{b_i}$, 进而 $L_{\mathbf{a}} \perp L_{\mathbf{b}}$ (其他分量自由). 故得 $\mathcal{N}(n)$ 个两两正交拉丁方. **(证毕)**

**推论 3.6**. *若 $n$ 不形如 $4k + 2$, 即 $n \not\equiv 2 \pmod 4$, 则 $\mathcal{N}(n) \geq 2$, 故存在 $n$ 阶 OLS 对.*

*证明.* 若 $n \not\equiv 2 \pmod 4$, 分解 $n = p_1^{a_1} \cdots$ 不含单独的 $2$ ($n = 2$ 情形) 也不含形如 $2 \cdot m$ 且 $m$ 奇的因子 (那会强制 $n \equiv 2 \pmod 4$). 于是每个 $p_i^{a_i} - 1 \geq 2$, 故 $\mathcal{N}(n) \geq 2$. **(证毕)**

MacNeish 留下的开放情形恰为 $n \in \{2, 6, 10, 14, 18, \ldots\}$ — 即 *单偶 (singly-even)* 阶. Euler 的猜想把 $n = 2$ 已证明的不可能性扩到 *全部* 单偶阶.

## 3.4. Euler 的猜想及早期验证

**定理 3.7** ($n = 2$ 不可能). *不存在 $2$ 阶 OLS 对.*

*证明.* 至多差一个重标号, 2 阶拉丁方仅两种:

$$
L = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}, \quad L' = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}, \tag{3.5}
$$

其中 $L'$ 为 $L$ 之行置换. 对任意选择 $L_1, L_2 \in \{L, L'\}$, 联合映射 $\Phi$ 的像至多含 $2$ 个元素 (而非完整的 $4 = 2^2$): 当 $L_1 = L_2$ 时, $\Phi(i,j) = (L_1(i,j), L_1(i,j))$ 始终落在对角对 $\{(1,1), (2,2)\}$ 上; 当 $L_1 \neq L_2$ 时, $\Phi(i,j)$ 始终落在反对角对 $\{(1,2), (2,1)\}$ 上. 二者皆非完整的 $\{1, 2\}^2$, 故无 OLS 对. **(证毕)**

**Euler 猜想 (1779)**. *对任何 $n \equiv 2 \pmod{4}$, 不存在 $n$ 阶 OLS 对.*

这一猜想立了 178 年. 第一个非平凡确认来自 **Gaston Tarry** (1900) — 他通过非计算机辅助的穷举证明猜想对 $n = 6$ 成立.

**定理 3.8** (Tarry 1900). *不存在 $6$ 阶 OLS 对.*

*证明梗概.* Tarry 在行列置换等价下枚举了全部 $812{,}851{,}200$ 个 6 阶拉丁方 (等价地, $9{,}408$ 个 reduced 6 阶拉丁方). 对每一个, 他通过穷举但有限的搜索测试是否存在正交伴侣. 未找到任何 OLS 对. **(证毕)**

Tarry 1900 年的证明关闭了 $n = 6$ 子情形. 完整猜想对 $n = 10, 14, 18, \ldots$ 仍开放, 直到 1950 年代末.

## 3.5. 反转 — Bose, Shrikhande, Parker (1959–1960)

![Bose-Shrikhande-Parker (1959-60) $n=10$ orthogonal Latin square pair 示意](/content/images/2026/05/fig3_ols_pair_10x10-7.png)

*Bose-Shrikhande-Parker (1959-60) $n=10$ orthogonal Latin square pair 示意*

突破来自三篇紧邻的论文:

- **Bose & Shrikhande (1959)** 用平衡不完全区组设计 (BIBD) 构造 $n = 22$ 的 OLS 对. 这是单偶 $n \equiv 2 \pmod 4$ 中**第一个反例** — 即 Euler 猜想首次被破.
- **Parker (1959)** 通过 UNIVAC I 计算机辅助搜索, 在群论结构上找到 $n = 10$ 的 OLS 对 — 这是 36 军官问题 "次大兄弟" 的情形, 同样反 Euler.
- **Bose, Shrikhande & Parker (1960)** 在 *Canadian Journal of Mathematics* 上联名发表 "Further results...", 把构造推广到全部 $n \equiv 2 \pmod 4, n \geq 10$, 证明最终定理.

这三人因此被称为 **"Euler 之蜂" (Euler's spoilers)** — 他们用约 18 个月连续推翻一条立了 178 年的猜想.

**定理 3.9** (Bose–Shrikhande–Parker 1960 — 最终答案). *$n$ 阶 OLS 对存在当且仅当 $n \in \{1\} \cup \{3, 4, 5\} \cup \{n \geq 7\}$, 即对除 $n = 2$ 与 $n = 6$ 之外的所有正整数 $n$ 都存在.*

*证明纲要.* 对 "若" 方向分三种情形讨论: 当 $n$ 为素数或素数幂且 $n \geq 3$ 时, 由引理 3.3 (素数幂推广) 直接给出 $n-1$ 个两两正交拉丁方, 自然含 OLS 对; 当 $n$ 非素数幂但 $n \not\equiv 2 \pmod 4$ 时, 由推论 3.6 之 $\mathcal{N}(n) \geq 2$ 与 MacNeish (定理 3.5) 知存在 OLS 对; 当 $n \equiv 2 \pmod 4$ 且 $n \geq 10$ 时, 用 Bose–Shrikhande–Parker 的 BIBD 基础构造 (引理 3.10) 给出 OLS 对.

"只若" 方向即定理 3.7 ($n = 2$) 与定理 3.8 ($n = 6$). **(证毕)**

第三段是新的深结果. 我们勾勒其结构思路.

**引理 3.10** (基于 BIBD 的构造, 梗概). *设 $v, k, \lambda$ 为正整数, 假设存在一个* $(v, k, \lambda)$-**平衡不完全区组设计 (BIBD)**, *即一组由 $v$ 点集中的 $k$-子集 (称为 "块") 组成的集合 $\mathcal{B}$, 使每对点恰落入 $\lambda$ 个块. 若进一步参数条件成立 (可解性、横断结构), 则可由 $\mathcal{B}$ 构造 $v$ 阶 OLS 对.*

具体 $n = 10$ 的构造用到一种可解的 $(10, 4, \lambda)$ 伪设计. 构造是建设性的但组合上颇为繁复; 现代讲法 (Lindner–Rodger 2008 §4.2; Stinson 2003 §6.4) 用 6–8 页篇幅展开.

## 3.6. 算例 — $n = 5$ 的 OLS 对构造

直接由引理 3.3 构造 5 阶 OLS 对 $L_1 \perp L_2$. 取 $a = 1$ 与 $a = 2$:

$$
L_1(i, j) = i + j \pmod 5, \qquad L_2(i, j) = i + 2j \pmod 5. \tag{3.6}
$$

行列索引取自 $\{0, 1, 2, 3, 4\}$ (元素也在 $\{0, 1, 2, 3, 4\}$ 中):

$$
L_1 = \begin{pmatrix} 0 & 1 & 2 & 3 & 4 \\ 1 & 2 & 3 & 4 & 0 \\ 2 & 3 & 4 & 0 & 1 \\ 3 & 4 & 0 & 1 & 2 \\ 4 & 0 & 1 & 2 & 3 \end{pmatrix}, \quad L_2 = \begin{pmatrix} 0 & 2 & 4 & 1 & 3 \\ 1 & 3 & 0 & 2 & 4 \\ 2 & 4 & 1 & 3 & 0 \\ 3 & 0 & 2 & 4 & 1 \\ 4 & 1 & 3 & 0 & 2 \end{pmatrix}. \tag{3.7}
$$

叠加 $\Phi(i, j) = (L_1(i, j), L_2(i, j))$ 取值为

$$
\Phi = \begin{pmatrix} (0,0) & (1,2) & (2,4) & (3,1) & (4,3) \\ (1,1) & (2,3) & (3,0) & (4,2) & (0,4) \\ (2,2) & (3,4) & (4,1) & (0,3) & (1,0) \\ (3,3) & (4,0) & (0,2) & (1,4) & (2,1) \\ (4,4) & (0,1) & (1,3) & (2,0) & (3,2) \end{pmatrix} \tag{3.8}
$$

逐一核对 $25$ 个条目, 确认全部 $25 = 5^2$ 个有序对 $(a, b) \in \{0, 1, 2, 3, 4\}^2$ 各出现一次. 因此 $L_1 \perp L_2$.

```python
# Python verification of the n=5 OLS pair construction.
n = 5
L1 = [[(i + j) % n     for j in range(n)] for i in range(n)]
L2 = [[(i + 2 * j) % n for j in range(n)] for i in range(n)]

pairs = [(L1[i][j], L2[i][j]) for i in range(n) for j in range(n)]
assert len(set(pairs)) == n * n, "Not orthogonal!"
print(f"OLS pair of order {n} verified: {len(set(pairs))} distinct ordered pairs ✓")
```

同一配方适用于 $n = 7, 11, 13, \ldots$ — 任何素数. $n = 4$ 时用 $\mathbb{F}_4$ (而非无域结构的 $\mathbb{Z}/4\mathbb{Z}$); $n = 9$ 时用 $\mathbb{F}_9 = \mathbb{F}_3[x]/(x^2 + 1)$.

## 3.7. 现代意义

Euler 开启的 OLS 组合学, 最终成为当代应用数学一大片领域的基石.

- **统计实验设计** (R. A. Fisher, 1925). Fisher 的 *The Arrangement of Field Experiments* 用拉丁方阵平衡农业试验中的土壤肥力变异. 行 = 土块, 列 = 时令, 符号 = 处理; 两个拉丁方的正交性使两个因子可同时检验而不发生混淆.
- **Reed–Solomon 纠错码** (1960). Reed–Solomon 码的 MDS (maximum-distance-separable) 性质等价于存在最大数目的两两正交拉丁方; Singleton 界恰对应推论 3.4 中的 OLS 数 $n - 1$.
- **密码学原语**. 基于拉丁方的分组密码 (例如以拉丁方乘法表作 $S$-box 生成器) 提供非线性与均衡分布; 许多现代密码构造可追溯到 MacNeish 的直积技巧.
- **CD / DVD 物理层纠错**. 1980 年起用于光盘的 Cross-Interleaved Reed–Solomon Code (CIRC) 把 Reed–Solomon 输出沿正交拉丁方结构交织, 将突发错误均匀打散.

整条弧线相当鲜明: Euler 1779 年的问题 — "36 名军官能否排入 $6 \times 6$ 方阵?" — 答案是 "不能" (Tarry 1900); 他对一般单偶 $n$ 的猜想答案是 "可以, 除了 $n = 2$ 和 $n = 6$" (BSP 1960). "可以" 的情形成了纠错码的数学底层 — 今天保护每一次 CD 播放、每一次 QR 扫描、每一次深空探测器数据回传. Euler 那 *错* 了的猜想, 经过被精确刻画, 反而比他许多正确的猜想产生了更多的结果.

— *End of §3.*

---

## §4 — 二次互反律 (Quadratic Reciprocity)

> *本节作者: Abel. 风格: 教科书形式. 公式编号: (4.k).*

## 本节符号补充

本节在 $\mathbb{Z}, \mathbb{Q}, \mathbb{Z}/p\mathbb{Z} = \mathbb{F}_p$, 及分圆扩张 $\mathbb{Q}(\zeta_p) \subset \mathbb{C}$ 上工作. 在 master Symbol Preamble 之外补充:

| 符号 | 含义 |
| --- | --- |
| $p, q$ | 两个不同的奇素数 |
| $\left(\dfrac{a}{p}\right)$ | $a$ 模 $p$ 的 Legendre 符号 |

![Legendre symbol $\left(\dfrac{p}{q}\right)$ for primes $p, q \leq 29$ — visual symmetry pattern](/content/images/2026/05/fig4_legendre_table-7.png)

*Legendre symbol $\left(\dfrac{p}{q}\right)$ for primes $p, q \leq 29$ — visual symmetry pattern* | $\zeta_p$ | $p$ 次本原单位根, $\zeta_p := e^{2\pi i / p}$ | | $\chi$ | 模 $p$ 的 Dirichlet 特征; 二次特征 $\chi(a) := \left(\dfrac{a}{p}\right)$ | | $g(\chi)$ | Gauss 和, $g(\chi) := \sum_{a = 1}^{p-1} \chi(a)\, \zeta_p^a$ | | $p^* := (-1)^{(p-1)/2} p$ | 带符号 Legendre 素数 |

全节中, $p, q$ 均为奇素数且 $p \neq q$.

---

## 4.1. Legendre 符号与 Euler 判别准则

**定义 4.1**. *对奇素数 $p$ 与整数 $a$,* **Legendre 符号 (Legendre symbol)** $\left(\dfrac{a}{p}\right)$ *定义为*

$$
\left(\dfrac{a}{p}\right) := \begin{cases} +1 & a \text{ 是模 } p \text{ 的非零二次剩余} \\ -1 & a \text{ 是模 } p \text{ 的二次非剩余} \\ 0 & p \mid a \end{cases}. \tag{4.1}
$$

*非零元 $a \in \mathbb{F}_p^*$ 称为模 $p$ 的* **二次剩余 (QR)** *若存在 $x \in \mathbb{F}_p^*$ 使 $x^2 \equiv a \pmod{p}$; 否则称为* **非剩余 (NQR)**.

**例 4.1.** 取 $p = 7$. 模 $7$ 的平方 (即 $x^2 \bmod 7$, $x = 1, \ldots, 6$) 为 $\{1, 4, 2, 2, 4, 1\} = \{1, 2, 4\}$. 故 $\left(\dfrac{1}{7}\right) = \left(\dfrac{2}{7}\right) = \left(\dfrac{4}{7}\right) = +1$ (均为 QR); $\left(\dfrac{3}{7}\right) = \left(\dfrac{5}{7}\right) = \left(\dfrac{6}{7}\right) = -1$ (均为 NQR).

平方子群 $(\mathbb{F}_p^*)^2 \subset \mathbb{F}_p^*$ 的指数为 $2$, 故恰有 $(p - 1)/2$ 个剩余为 QR, 另 $(p-1)/2$ 个为 NQR. Legendre 符号 $a \mapsto \left(\dfrac{a}{p}\right)$ 是 $\mathbb{F}_p^* \to \{\pm 1\}$ 唯一非平凡的群同态.

**定理 4.2** (Euler 判别式, 1750). *对奇素数 $p$ 与 $p \nmid a$ 的 $a \in \mathbb{Z}$,*

$$
\left(\dfrac{a}{p}\right) \equiv a^{(p-1)/2} \pmod{p}. \tag{4.2}
$$

*证明.* 由 Fermat 小定理 (引理 2.3), $a^{p-1} \equiv 1 \pmod p$, 故 $(a^{(p-1)/2})^2 \equiv 1$, 从而 $a^{(p-1)/2} \equiv \pm 1 \pmod p$.

若 $a = x^2$ 为 QR, 则由 Fermat $a^{(p-1)/2} = x^{p-1} \equiv 1$. 故 $\left(\dfrac{a}{p}\right) = +1$ 与 $a^{(p-1)/2} \equiv +1$ 吻合.

若 $a$ 为 NQR: 乘法群 $\mathbb{F}_p^*$ 为 $p - 1$ 阶循环群. 取生成元 $g$, 写 $a = g^k$ 且 $k$ 奇 (NQR 恰为生成元的奇数次幂). 则

$$
a^{(p-1)/2} = g^{k(p-1)/2}. \tag{4.3}
$$

由 $k$ 奇, $k(p-1)/2$ 是 $(p-1)/2$ 的奇数倍, 故非 $p - 1$ 的倍数, 故 $g^{k(p-1)/2} \neq 1$. 因此 $a^{(p-1)/2} \equiv -1$, 与 $\left(\dfrac{a}{p}\right) = -1$ 吻合. **(证毕)**

**推论 4.3** (乘性). *对奇素数 $p$ 与与 $p$ 互素的 $a, b \in \mathbb{Z}$,*

$$
\left(\dfrac{ab}{p}\right) = \left(\dfrac{a}{p}\right) \left(\dfrac{b}{p}\right). \tag{4.4}
$$

*证明.* 两侧皆 $\pm 1$. 由定理 4.2, $(ab)^{(p-1)/2} = a^{(p-1)/2} b^{(p-1)/2}$, 故两侧模 $p$ 同余; 又两侧皆 $\in \{-1, +1\}$ 且 $p > 2$, 故相等. **(证毕)**

## 4.2. 主定理

**定理 4.4** (二次互反律). *对相异奇素数 $p, q$,*

$$
\left(\dfrac{p}{q}\right) \left(\dfrac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}. \tag{4.5}
$$

*等价地*: - *若 $p \equiv 1 \pmod 4$ 或 $q \equiv 1 \pmod 4$ (至少其一), 则 $\left(\dfrac{p}{q}\right) = \left(\dfrac{q}{p}\right)$.* - *若 $p \equiv 3 \pmod 4$ 且 $q \equiv 3 \pmod 4$, 则 $\left(\dfrac{p}{q}\right) = -\left(\dfrac{q}{p}\right)$.*

**注 4.2.** 二次互反律是数论中第一个 "高度非平凡的对称律": "$p$ 模 $q$ 是否为平方" 与 "$q$ 模 $p$ 是否为平方" 之答案几乎互相决定 — 仅在 $p, q$ 均 $\equiv 3 \pmod 4$ 之情形下符号反转, 其余情形相等. 由此, 仅看 $p, q$ 模 $4$ 之余数, 即可由一边推出另一边. 此对称性使 Euler 与 Gauss 都为之惊讶, 因为乍看 "$p$ 是否模 $q$ 之平方" 仅依赖 $p, q$ 之具体值, 似无理由与反向问题挂钩.

**例 4.2** ($p = 5, q = 7$). 由 $5 \equiv 1 \pmod 4$, 落入定理之第一类情形, $\left(\dfrac{5}{7}\right) = \left(\dfrac{7}{5}\right)$. 由 $7 \equiv 2 \pmod 5$ 与模 $5$ 之 QR 集 $\{1, 4\}$ ($2$ 不在其中), $\left(\dfrac{7}{5}\right) = -1$; 故 $\left(\dfrac{5}{7}\right) = -1$. 验证: 模 $7$ 之 QR 集 $\{1, 2, 4\}$, $5$ 不在其中. ✓

**定理 4.5** (补充律). *对奇素数 $p$,*

$$
\left(\dfrac{-1}{p}\right) = (-1)^{(p-1)/2} = \begin{cases} +1 & p \equiv 1 \pmod 4 \\ -1 & p \equiv 3 \pmod 4 \end{cases}, \tag{4.6}
$$

$$
\left(\dfrac{2}{p}\right) = (-1)^{(p^2-1)/8} = \begin{cases} +1 & p \equiv \pm 1 \pmod 8 \\ -1 & p \equiv \pm 3 \pmod 8 \end{cases}. \tag{4.7}
$$

*(4.6) 的证明.* 由 Euler 判别式, $\left(\dfrac{-1}{p}\right) \equiv (-1)^{(p-1)/2} \pmod p$. 两侧皆 $\in \{+1, -1\}$ 且 $p > 2$, 同余即为等式. **(证毕)**

*(4.7) 的证明依赖 Gauss 引理 — 此处略, 参见 Hardy-Wright §6.13 或 Ireland-Rosen Ch. 5.)*

## 4.3. 历史陈述与互反猜想

Euler 早在 1744 年就从小素数的 $\left(\dfrac{p}{q}\right)$ 列表中观察到 (4.5) 的对称模式. 他在 Eneström E552 ("Observationes circa divisionem quadratorum per numeros primos") 中陈述了猜想 — 含主定理与两个补充律 — 但未给出证明. 该文写于 1772, 1783 年发表于 *Opuscula analytica* 第一卷 pp. 64–84 (该卷究竟于 Euler 1783 年 9 月 18 日去世前后哪一时点出版, 二手文献并未给出明确答复). Legendre (1785, 1798) 也尝试过证明, 但每次都含循环论证的漏洞.

第一个完整严格的证明由 **Carl Friedrich Gauss** 于 1796 年 4 月 8 日给出, 时年 19 岁, 以 *Theorema fundamentale* 为题记入其 *Mathematisches Tagebuch* 第 17 条. Gauss 一生为互反律给出 **八个不同证明**, 整理于 *Disquisitiones Arithmeticae* (1801) §125–§146 及后续论文. 印刷品中他称之为 *theorema fundamentale*; 私人通信里则称 *aureum theorema*, 即 "黄金定理".

Gauss-和方法 (Gauss 的第三证, 约 1808) 是最为简洁的现代呈现, 也是本节我们勾勒的版本. 它把二次互反律刻画成分圆域 $\mathbb{Q}(\zeta_p)$ 结构的推论.

证明结构如下: 引入辅助量 Gauss 和 $g(\chi_p) := \sum_{a} \chi_p(a)\,\zeta_p^a$ (定义 4.6); 先在引理 4.7 证明 $g(\chi_p)^2 = p^*$, 其值由 $p \bmod 4$ 决定; 再于主证中以两种方式计算 $g(\chi_p)^q$ 模 $q$ — 一者用 Euler 判别式得 $\left(\dfrac{p^*}{q}\right)$, 一者用 Frobenius 恒等式与双射置换得 $\left(\dfrac{q}{p}\right)$, 两者必相等, 化简即得互反律. Gauss 和的作用在于把数论性质 (Legendre 符号) 与代数结构 (单位根) 联系起来, 使一恒等式可用两种渠道独立计算并比对.

## 4.4. Gauss 和与其平方

**定义 4.6**. *对奇素数 $p$, 设 $\chi_p : \mathbb{Z} \to \{0, \pm 1\}$ 为二次特征 $\chi_p(a) := \left(\dfrac{a}{p}\right)$, 并设 $\zeta_p := e^{2\pi i / p}$. 与 $\chi_p$ 相联的* **Gauss 和 (Gauss sum)** *为*

$$
g(\chi_p) := \sum_{a = 1}^{p - 1} \chi_p(a)\, \zeta_p^a = \sum_{a \in \mathbb{F}_p^*} \left(\dfrac{a}{p}\right) \zeta_p^a. \tag{4.8}
$$

**注 4.3.** $\zeta_p = e^{2\pi i/p}$ 是 $p$ 次本原单位根, 即将单位圆等分为 $p$ 份后取相位 $2\pi/p$ 之点. 序列 $\zeta_p^a$ ($a = 1, \ldots, p-1$) 即分布在单位圆上的 $p - 1$ 个等间距点. (4.8) 在每点上贴 $\pm 1$ 符号 (按 $a$ 是 QR 或 NQR) 后求向量和. 直接计算该和困难, 但其平方 (引理 4.7) 取得惊人简单形式.

**例 4.3** ($p = 3$). 模 $3$ 之 QR 集为 $\{1\}$, 故 $\chi_3(1) = +1$, $\chi_3(2) = -1$. 由 $\zeta_3 = e^{2\pi i/3}$, $\zeta_3^2 = e^{4\pi i/3}$, 得

$$
g(\chi_3) = \chi_3(1)\zeta_3 + \chi_3(2)\zeta_3^2 = e^{2\pi i/3} - e^{4\pi i/3} = i\sqrt 3.
$$

故 $g(\chi_3)^2 = -3 = (-1)^{(3-1)/2} \cdot 3 = p^*$, 与引理 4.7 一致.

**引理 4.7**. *定义 $p^* := (-1)^{(p-1)/2} p$ (故 $p \equiv 1 \pmod 4$ 时 $p^* = p$, $p \equiv 3 \pmod 4$ 时 $p^* = -p$). 则*

$$
g(\chi_p)^2 = p^*. \tag{4.9}
$$

*证明.* 由定义 4.6, $g(\chi_p) = \sum_{a \in \mathbb{F}_p^*} \chi_p(a)\, \zeta_p^a$. 平方展开为双重求和:

$$
g(\chi_p)^2 = \sum_{a, b \in \mathbb{F}_p^*} \chi_p(a) \chi_p(b)\, \zeta_p^{a + b}.
$$

作代换 $b = ac$: 由 $a \in \mathbb{F}_p^*$, 当 $c$ 取遍 $\mathbb{F}_p^*$ 时 $b = ac$ 亦取遍 $\mathbb{F}_p^*$, 故 $b = ac$ 是双射. 又由乘性 (推论 4.3),

$$
\chi_p(a)\chi_p(b) = \chi_p(a)\chi_p(ac) = \chi_p(a)^2 \chi_p(c) = \chi_p(c),
$$

其中 $\chi_p(a)^2 = (\pm 1)^2 = 1$ ($a \neq 0$). 代入并交换求和次序:

$$
g(\chi_p)^2 = \sum_{c \in \mathbb{F}_p^*} \chi_p(c) \sum_{a \in \mathbb{F}_p^*} \zeta_p^{a(1 + c)}. \tag{4.10}
$$

考察内和 $S(c) := \sum_{a = 1}^{p-1} \zeta_p^{a(1+c)}$. 若 $c \equiv -1 \pmod p$, 则 $1 + c \equiv 0$, 求和项每个均为 $\zeta_p^0 = 1$, 故 $S(-1) = p - 1$. 若 $c \not\equiv -1 \pmod p$, 则 $1 + c \not\equiv 0$, 故 $a \mapsto a(1+c)$ 在 $\mathbb{F}_p^*$ 上为置换, $S(c) = \sum_{a' \in \mathbb{F}_p^*} \zeta_p^{a'} = -1$ (由全和 $\sum_{a' = 0}^{p-1} \zeta_p^{a'} = 0$ 减去 $\zeta_p^0 = 1$ 得).

代回 (4.10):

$$
g(\chi_p)^2 = \chi_p(-1)(p - 1) + (-1)\sum_{c \in \mathbb{F}_p^*,\, c \neq -1} \chi_p(c). \tag{4.11}
$$

又由二次特征之均衡性, 即模 $p$ 之二次剩余与非剩余各 $(p-1)/2$ 个, 故

$$
\sum_{c \in \mathbb{F}_p^*} \chi_p(c) = \frac{p-1}{2} - \frac{p-1}{2} = 0,
$$

即 $\sum_{c \neq -1,\, c \in \mathbb{F}_p^*} \chi_p(c) = -\chi_p(-1)$. 代回 (4.11) 得

$$
g(\chi_p)^2 = \chi_p(-1)(p-1) - (-\chi_p(-1)) = \chi_p(-1) \cdot p. \tag{4.12}
$$

最后由第一补充律 (4.6) $\chi_p(-1) = (-1)^{(p-1)/2}$ 代入即得 $g(\chi_p)^2 = (-1)^{(p-1)/2} p = p^*$. **(证毕)**

## 4.5. 利用 Gauss 和证明互反律

**定理 4.4** (重述). *对相异奇素数 $p, q$, $\left(\dfrac{p}{q}\right) \left(\dfrac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}}$.*

*证明.* 由引理 4.7, $g(\chi_p)^2 = p^*$. 两侧取 $(q-1)/2$ 次幂得

$$
g(\chi_p)^{q - 1} = (p^*)^{(q - 1)/2}. \tag{4.13}
$$

将 Euler 判别式 (定理 4.2) 应用于 $p^*$ 模 $q$ 得

$$
(p^*)^{(q-1)/2} \equiv \left(\dfrac{p^*}{q}\right) \pmod q. \tag{4.14}
$$

合并 (4.13) 与 (4.14), 并两侧再乘以 $g(\chi_p)$, 得

$$
g(\chi_p)^q \equiv g(\chi_p) \left(\dfrac{p^*}{q}\right) \pmod{q}. \tag{4.15}
$$

另一方面, 直接展开 $g(\chi_p)^q$. 由 Frobenius 恒等式 — 在任何特征 $q$ 的交换环中 (诸如环 $\mathbb{Z}[\zeta_p]$ 模 $q$), $\bigl(\sum_i x_i\bigr)^q \equiv \sum_i x_i^q$ (其中其他二项展开项的系数皆被 $q$ 整除) — 故

$$
g(\chi_p)^q \equiv \sum_{a \in \mathbb{F}_p^*} \chi_p(a)^q\, \zeta_p^{aq} \pmod q. \tag{4.16}
$$

由 $\chi_p(a) \in \{\pm 1\}$ 与 $q$ 奇知 $\chi_p(a)^q = \chi_p(a)$. 又 $p \neq q$ 使 $q \not\equiv 0 \pmod p$, 故 $a \mapsto aq$ 为 $\mathbb{F}_p^*$ 上的双射; 作代换 $b := aq \bmod p$, 即 $a = b q^{-1}$, 求和指标改写为

$$
g(\chi_p)^q \equiv \sum_{b \in \mathbb{F}_p^*} \chi_p(b q^{-1}) \zeta_p^b = \chi_p(q^{-1}) \sum_{b \in \mathbb{F}_p^*} \chi_p(b) \zeta_p^b = \chi_p(q^{-1}) g(\chi_p) \pmod q, \tag{4.17}
$$

其中第二个等号由乘性 (推论 4.3) $\chi_p(bq^{-1}) = \chi_p(b)\chi_p(q^{-1})$ 提取因子. 由 $\chi_p(q^{-1}) = \chi_p(q)^{-1} = \chi_p(q)$ (后者因 $\chi_p$ 取值 $\pm 1$, 自身即其倒数) 得

$$
g(\chi_p)^q \equiv \left(\dfrac{q}{p}\right) g(\chi_p) \pmod q. \tag{4.18}
$$

比较 (4.15) 与 (4.18), 即

$$
g(\chi_p)\, \left(\dfrac{q}{p}\right) \equiv g(\chi_p)\, \left(\dfrac{p^*}{q}\right) \pmod q. \tag{4.19}
$$

两侧再乘以 $g(\chi_p)$, 由 $g(\chi_p)^2 = p^*$ 得

$$
p^* \left(\dfrac{q}{p}\right) \equiv p^* \left(\dfrac{p^*}{q}\right) \pmod q. \tag{4.20}
$$

由 $p \neq q$, $p^* \not\equiv 0 \pmod q$, 故 $p^*$ 在模 $q$ 下可逆, 可消去, 得

$$
\left(\dfrac{q}{p}\right) \equiv \left(\dfrac{p^*}{q}\right) \pmod q. \tag{4.21}
$$

两侧皆 $\in \{-1, +1\}$ 且 $q > 2$, 故模 $q$ 同余即等式:

$$
\left(\dfrac{q}{p}\right) = \left(\dfrac{p^*}{q}\right). \tag{4.22}
$$

最后, 由 $p^* = (-1)^{(p-1)/2} \cdot p$ 及乘性 (推论 4.3):

$$
\left(\dfrac{p^*}{q}\right) = \left(\dfrac{(-1)^{(p-1)/2}}{q}\right) \left(\dfrac{p}{q}\right) = \left(\dfrac{-1}{q}\right)^{(p-1)/2} \left(\dfrac{p}{q}\right). \tag{4.23}
$$

代入第一补充律 (4.6) $\left(\dfrac{-1}{q}\right) = (-1)^{(q-1)/2}$, 得

$$
\left(\dfrac{p^*}{q}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}} \left(\dfrac{p}{q}\right). \tag{4.24}
$$

合并 (4.22) 与 (4.24):

$$
\left(\dfrac{q}{p}\right) = (-1)^{\frac{p-1}{2} \cdot \frac{q-1}{2}} \left(\dfrac{p}{q}\right). \tag{4.25}
$$

两侧再乘以 $\left(\dfrac{p}{q}\right)$ 并用 $\left(\dfrac{p}{q}\right)^2 = 1$ 即得 (4.5). **(证毕)**

## 4.6. 算例

**例 4.8** ($p = 5, q = 13$). $p, q$ 均 $\equiv 1 \pmod 4$, 由定理 4.4 乘积 $\left(\dfrac{5}{13}\right)\left(\dfrac{13}{5}\right) = (-1)^{2 \cdot 6} = +1$, 故两 Legendre 符号相等.

直接计算: $13 \equiv 3 \pmod 5$, 故 $\left(\dfrac{13}{5}\right) = \left(\dfrac{3}{5}\right)$. 模 $5$ 的平方为 $\{1, 4\}$, $3$ 为 NQR: $\left(\dfrac{3}{5}\right) = -1$. 由互反律 $\left(\dfrac{5}{13}\right) = -1$. 验证: 模 $13$ 的平方为 $\{1, 3, 4, 9, 10, 12\}$, $5$ 不在其中. ✓

**例 4.9** ($p = 3, q = 7$). $p, q$ 均 $\equiv 3 \pmod 4$, 故 $\left(\dfrac{3}{7}\right)\left(\dfrac{7}{3}\right) = (-1)^{1 \cdot 3} = -1$.

计算: $7 \equiv 1 \pmod 3$, 故 $\left(\dfrac{7}{3}\right) = \left(\dfrac{1}{3}\right) = +1$. 故 $\left(\dfrac{3}{7}\right) = -1$. 验证: 模 $7$ 的平方为 $\{1, 2, 4\}$, $3$ 不在其中. ✓

**例 4.10** ($p = 11, q = 17$). $p \equiv 3, q \equiv 1 \pmod 4$, 故 $\left(\dfrac{11}{17}\right)\left(\dfrac{17}{11}\right) = (-1)^{5 \cdot 8} = +1$.

计算: $17 \equiv 6 \pmod {11}$. 用乘性, $\left(\dfrac{6}{11}\right) = \left(\dfrac{2}{11}\right)\left(\dfrac{3}{11}\right)$. 由补充律 (4.7), $11 \equiv 3 \pmod 8$ 故 $\left(\dfrac{2}{11}\right) = -1$. 对 $\left(\dfrac{3}{11}\right)$, 应用互反律: $3, 11$ 均 $\equiv 3 \pmod 4$, 故 $\left(\dfrac{3}{11}\right)\left(\dfrac{11}{3}\right) = -1$; 而 $11 \equiv 2 \pmod 3$, 模 $3$ 的平方仅 $\{1\}$, 故 $\left(\dfrac{11}{3}\right) = \left(\dfrac{2}{3}\right) = -1$, 由此 $\left(\dfrac{3}{11}\right) = +1$. 合并: $\left(\dfrac{17}{11}\right) = (-1)(+1) = -1$, 由互反律 $\left(\dfrac{11}{17}\right) = -1$. 验证: 模 $17$ 的平方为 $\{1, 2, 4, 8, 9, 13, 15, 16\}$, $11$ 不在其中. ✓

```python
# Legendre symbol via Euler's criterion + QR verification.
def legendre(a: int, p: int) -> int:
    """Legendre symbol (a/p) for odd prime p, via Euler's criterion."""
    a %= p
    if a == 0:
        return 0
    result = pow(a, (p - 1) // 2, p)
    return -1 if result == p - 1 else result

def verify_qr(p: int, q: int) -> bool:
    """Verify QR law for (odd primes p ≠ q)."""
    lhs = legendre(p, q) * legendre(q, p)
    rhs = (-1) ** (((p - 1) // 2) * ((q - 1) // 2))
    return lhs == rhs

# Test 4.8/4.9/4.10
assert verify_qr(5, 13), "(5,13) reciprocity failed"
assert verify_qr(3, 7), "(3,7) reciprocity failed"
assert verify_qr(11, 17), "(11,17) reciprocity failed"

# Exhaustive verification for all odd-prime pairs up to 50.
from sympy import isprime
primes = [p for p in range(3, 50) if isprime(p)]
for i, p in enumerate(primes):
    for q in primes[i+1:]:
        assert verify_qr(p, q), f"Reciprocity failed for ({p}, {q})"
print("Quadratic reciprocity verified for all odd-prime pairs <= 50 [OK]")
```

## 4.7. 现代意义

二次互反律是 **类域论 (class field theory)** 的原型 — 类域论是 20 世纪代数数论中最深刻的结构性定理.

- **Artin 互反律** (Emil Artin, 1927) 把定理 4.4 从 $\mathbb{Z}$ 推广到任意代数数域. 整数环上的 Frobenius 自同构取代了 Legendre 符号的角色. Artin 定理粗略地说: Abel 扩张中素数的分裂行为受基域中的同余条件支配 — 直接延伸了 "$\left(\dfrac{p}{q}\right)$ 取决于 $p \bmod q$" 这一陈述.
- **Langlands 纲领** (Robert Langlands, 1967 起) 把互反律视为一般非 Abel 互反在 $\operatorname{GL}_1$ 情形的特化. 二次互反成为自守形式同余的一个特例. Wiles 1994 年对 Fermat 大定理的证明, 在本质上即关于椭圆曲线的 Langlands 风格的互反陈述.
- **密码学**: Legendre 符号算法的运行时间为 $O(\log^2 p)$, 比直接计算 $a^{(p-1)/2} \pmod p$ 更快. 互反律允许将 *Jacobi 符号* (推广到合数模) 用反复的二次互反翻转在 $O(\log^2 n)$ 内算出 — 1977 年的 Solovay–Strassen 素性检测及当代各种概率素性检测都基于此.
- **椭圆曲线点计数**: Schoof–Elkies–Atkin 算法利用对小素数模数的互反式同余, 来确定 $|E(\mathbb{F}_p)|$ — 这一步是 ECC 参数选取的基础.

Euler 1783 年的猜想是其数论一生最后的工作; Gauss 1796 年的证明则是其数论一生最初的工作. 一位 19 岁青年日记本里的一条记录, 成了之后两个世纪里互反定理的总体蓝图, 直至当代数论中作为核心猜想仍未完全解决的 Langlands 纲领.

— *End of §4.*

---

## §5 — 1783 年 9 月 18 日上午

## §5.1 最后的几年: 1779-1783

到 1779 年, Euler 72 岁. 他完全失明已经 8 年, 双眼盲已经 13 年.

第一任妻子 **Katharina Gsell** 1773 年 11 月 19 日在 Petersburg 去世. 两人结婚近 40 年, 一共生了 13 个孩子, 只有 5 个活到成年. 这段婚姻穿越了 Basel 流亡时期、Petersburg I 前期、Berlin 25 年、和 Petersburg II 的归来. Katharina 的死对 Euler 的打击很重, 但他没有停下口述工作.

1776 年 7 月, 68 岁的 Euler 续弦 **Salomea Abigail Gsell** — Katharina 同父异母的妹妹, 当时 53 岁. 这桩婚姻在欧洲学术圈引起一些议论, 但 Euler 自己很平静: 一个失明的老人需要一个能照顾他的伴侣.

1779 年起, Euler 越来越频繁地谈论到 *"我已经准备好走了"*. 但他没放下笔. Petersburg Academy 在 1783 年最后一期年报里还有他的两篇 paper. 即使到生命最后三年, 他还在以每天 4-6 小时的节奏口述新内容.

## §5.2 1781 年 3 月: 天空里出现一颗新行星

1781 年 3 月 13 日, 英格兰 Bath 的业余天文学家 **William Herschel** (1738-1822) 用自制的 6.2 英寸反射望远镜 (7 英尺焦距, Newtonian 型), 在双子座 (Gemini) 看到一颗会动的"星".

两个晚上之后他确认: 这不是一颗 comet (起初他这么猜), 而是一颗 *新行星*. 这是两千年来人类发现的第一颗太阳系新行星 (Saturn 之外).

命名经历了几次反复: - Herschel 起初提名为 **Georgium Sidus** (致敬乔治三世) - 法国天文学家 Joseph Lalande 提议叫 *Herschel* (致敬发现者) - 德国天文学家 **Johann Elert Bode** (1747-1826) 在 1781 年提议改名为 **Uranus** (希腊神话天王 Ouranos, Saturn 之父, 延续 Olympus 神系) - 最终 Uranus 名称在 1850 年左右被国际天文界普遍接受 (英国 Nautical Almanac 一直坚持用 Georgium Sidus 直到 1850).

这个发现的消息传到 Petersburg 时, 73 岁的 Euler 立刻让助手 Lexell 开始收集观测数据 — 他要算这颗新行星的轨道.

接下来两年, 算 Uranus 轨道成了 Euler 工作重心之一. Lexell 整理观测点 (Herschel + Maskelyne + 其他欧洲天文台的位置记录), Euler 口述参数: 距离 (日心半径)、周期 (sidereal year)、偏心率 (eccentricity).

这项工作部分发表在 Euler 的 *Recherches sur les nouvelles inégalités de Mercure* 和 Lexell 1783-84 的论文中. Lexell 1783 年初步计算出 Uranus 的轨道半径约 19 个天文单位 (AU), 公转周期约 83 年 — 现代值: 19.2 AU, 84.0 年. 误差在 1%.

## §5.3 1783 年 9 月 18 日: 那一天

那天上午, Euler 还在跟 Lexell 算 Uranus 轨道的某一段微调参数.

中午, 他跟孙子玩了一会.

下午, 喝茶, 点起烟斗 — 这是他人生最后一支烟.

下午晚些时候 (具体时间未记录, 但 contemporary 记述如 Fuss 的悼词指向下午4-5点), Euler 坐在书桌前, 因脑出血 (cerebral hemorrhage) 突然倒下. 当场失去意识. 几小时之后, 在自己家中去世. 距离他 1707 年 4 月 15 日生日, 76 年 5 个月.

享年 76 岁.

## §5.4 41 天之后: Paris

1783 年 10 月 29 日 (Euler 死后 41 天), Jean le Rond **d'Alembert** (1717-1783) 在 Paris 去世, 享年 65 岁. d'Alembert 与 Euler 之间有过几十年的学术 priority 争执 (尤其在变分法、流体方程、月球三体三个领域), 但他们彼此把对方视为这个世纪最严肃的两位数学家.

18 世纪那一批数学家, 几乎同时谢幕. Daniel Bernoulli 1782 年 3 月已去世 (享年 81). Joseph-Louis Lagrange 这时 47 岁, 正在 Berlin 写他的 *Mécanique analytique* (1788 出版).

死讯传到 Paris 之后, **Marquis de Condorcet** (1743-1794) 给法兰西科学院 (Académie des Sciences) 写 Euler 的悼词 (eulogy). 1786 年 1 月在科学院公开宣读. Condorcet 写道:

> *Il cessa de calculer et de vivre.*
>
> 他停止了计算, 也停止了生命.

这一句, 后世引用得比任何 Euler 自己的话都多.

## §5.5 葬礼 + 1837 年迁葬

**1783 年 9 月 20 日**, 葬礼按东正教仪式举行. Euler 一家虽然是 Calvinist (Reformed Christian), 但在 Petersburg 长期生活并融入了当地宗教仪式. 下葬地点是 Vasilievsky Island 上的 **Smolensky Lutheran Cemetery** (斯摩棱斯基新教公墓).

墓碑用拉丁文刻着:

> *LEONHARDO EULERO ACADEMIA PETROPOLITANA*

"献给 Leonhard Euler, by Petersburg Academy"

简短, formal, 没有 epitaph, 没有数学符号. Petersburg Academy 出资.

**1837 年**, 也就是 Euler 去世 54 年之后, 他的遗骨从 Smolensky 公墓迁葬到 **Alexander Nevsky Lavra** (亚历山大·涅夫斯基修道院) — 这是 Petersburg 最尊崇的东正教修道院之一, 也是 Lomonosov 等俄国国宝级人物的安息处. 这次迁葬由 Petersburg Academy 主持, 表明 Russia 已经把 Euler 视为本国数学传统的一部分.

今天可以在 Alexander Nevsky Lavra 的 Tikhvin Cemetery 看到 Euler 的墓.

## §5.6 21 年之后: Laplace 那句话

1804 年, **Pierre-Simon Laplace** (1749-1827) 在 *École polytechnique* 给学生上课. 那时 Euler 已经去世 21 年, Laplace 自己 55 岁, 是当时法国数学物理的核心人物之一. 在讲到分析力学某个具体问题时, 他停下来对学生说:

> *Lisez Euler, lisez Euler, c'est notre maître à tous.*
>
> 读 Euler, 读 Euler, 他是我们所有人的老师.

这句被学生记下来, 后来反复出现在 Laplace、Lagrange、Gauss 等人的传记和回忆录中. ([Truesdell 1972, "Leonhard Euler, supreme geometer"])

这句话不是修辞 — 事实上, 18 世纪以来, 每一代数学家都印证过这一点. Gauss (19 岁起证 quadratic reciprocity), Cauchy (扩展 Euler 的多面体公式到一般 polyhedron), Riemann (重新解读 $\zeta(s)$), Lebesgue (重写 Euler 的 $\Gamma$ 函数), Noether (变分法的对称性版本), Feynman (Lagrangian 路径积分) — 一代代数学物理学家走过这条路, 都印证过 Laplace 那句话.

## §5.7 系列总结: 1707-1783

![Euler 76 年生涯时间线 + 4 个城市 + timeobserver137 10 集](/content/images/2026/05/fig5_euler_career_timeline-7.png)

*Euler 76 年生涯时间线 + 4 个城市 + timeobserver137 10 集*

Euler 的 76 年人生, timeobserver137 系列分了 10 集走过:

| 集 | 时期 | 地点 | 主要 math |
| --- | --- | --- | --- |
| **E01** | 序集 | — | 三件事 (1734 Basel / 1735 七桥 / 1783 死) |
| **E02** | 1707-1727 | Basel | 早年 + Jakob/Johann Bernoulli 师承 |
| **E03** | 1727-1741 | Petersburg I | Basel ζ(2)=π²/6 + Γ 函数 + γ 常数 |
| **E04** | 1735 onwards | (Petersburg) | Königsberg 七桥 → 图论 + e 无理 + ζ(s) Euler product |
| **E05** | 1738 | Petersburg | 失明 第 I 阶段 (右眼) — Mechanica + 早期 ODE 方法 |
| **E06** | 1741-1760s | Berlin (early) | 变分法 (brachistochrone + Euler-Lagrange equation) |
| **E07** | 1748 | Berlin | Introductio in analysin infinitorum + $e^{ix}=\cos x + i\sin x$ + $e^{i\pi}+1=0$ |
| **E08** | 1751-1753 | Berlin | König 案 (Maupertuis 优先权之争, 政治压力) |
| **E09** | 1750-1766 | Berlin (final) | V−E+F=2 多面体公式 + 流体方程 + Euler 角 + φ 函数 |
| **E10** | 1766-1783 | Petersburg II | 失明十七年 (本集): L₁-L₅ + M₃₁ + 拉丁方阵 + 二次互反 |

总: 76 年, 866 论文 (Eneström 1910 编录), Opera Omnia 80 卷 (1911 年起开编, 至今 100 多年未完, 目前已出 86 卷).

我们这一集 (§1-§4) 走过的 4 段数学, 都是 Euler 在 1766 年完全失明之后的产出. 1766-1783 那 17 年, 占毕生 866 论文的 46.9% — 他最高产的时期, 是在完全看不见的状态下完成的.

二次互反律的猜想, Euler 留题时 (1783) 没能给出证明. 13 年之后, 1796 年, 19 岁的 Gauss 给了第一份证明. Euler 自己生前埋下的种子, 后人代代接力开花.

## §5.8 致谢

本博客 §1-§4 数学严谨部分由 **Abel** 撰写; **Gauss** 负责历史 fact-check (R1+R2); **Socrates** 负责逻辑 rigor review (R1+R2); **Escher** 负责 §0/§5/§6 narrative + consolidate + figures. 由 **Euler** Ghost API editor 角色发布到 *timeobserver137.cyou*.

---

*下一节: §6 — Euler 跨集 19 个数学贡献回顾*

---

— Escher · §5 CLOSING · v0 · 2026-05-26

---

## §6 — Euler 跨集 19 个数学贡献回顾

视频 E10 终章里, 我们做了一段 F-section "终生贡献" — 19 个 Euler 名字开头的数学结果分 5 个领域排在一块 chalkboard 上, 跟着 narration 依次点亮. 这一节是博客版的等价物 — 把那 19 条结果一条条放到现代意义的语境里, 同时标出这条结果在 timeobserver137 系列里哪一集讲过, 方便读者顺线追溯.

每个概念按以下格式排列:

- **概念名 (Euler 写下的形式)** — § 集 — 一句话现代意义.
- 历史引用: Eneström 编号 + 年份 (Euler 写 / 印刷).
- 数学语境 + 现代后继.

5 个领域 × 19 个 concept. 排列大致按 chronology, 同领域内 by-topic.

![Euler 跨集 19 个数学贡献 — chalkboard summary (mirrors video F-section master)](/content/images/2026/05/fig6_retrospective_grid-7.png)

*Euler 跨集 19 个数学贡献 — chalkboard summary (mirrors video F-section master)*

---

## §6.1 数论 (Number Theory) — 8 个

### 6.1.1 $\zeta(2) = \pi^2/6$ (Basel 问题) — E03

**Euler 写下的形式 (1734-35, E041)**:

$$
1 + \frac{1}{4} + \frac{1}{9} + \frac{1}{16} + \cdots = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}.
$$

Basel 问题由 Pietro Mengoli 1644 提出 (希望算 $\sum 1/n^2$). Jakob 和 Johann Bernoulli 两兄弟都尝试过, 没解出来. Jakob 在 *Tractatus de seriebus infinitis* (1689) 里承认: "如果有人能解出来, 我们将永远感激他."

Euler 1734 年用 *sin x* 函数的无穷乘积展开 (借鉴牛顿) 给出了第一个证明. 1735 年提交给 Petersburg Academy, 1740 年 *Commentarii* 上发表. 后世 (Cauchy / Riemann) 严格化的复变方法给出更标准的证明.

**现代意义**: 解析数论的起点之一. Euler 在 1737 年把这个结果一般化到 $\zeta(s) = \sum n^{-s}$, 进而通过 Euler product (§6.1.5) 把 $\zeta(s)$ 和素数联系起来. Riemann 1859 又把这条线拉到复变, 引出 Riemann hypothesis.

---

### 6.1.2 Gamma 函数 $\Gamma(x)$ — E03

**Euler 写下的形式 (1729-30, 给 Goldbach 的信)**:

$$
\Gamma(x) = \int_0^\infty t^{x-1} e^{-t} \, dt
$$

满足 $\Gamma(n+1) = n!$ 对 $n \in \mathbb{N}$. 这是阶乘从离散整数到所有实数 (后来扩到复数) 的连续插值.

Euler 早期尝试用无穷乘积形式给 Gamma:

$$
\Gamma(x) = \frac{1}{x} \prod_{n=1}^\infty \frac{(1+1/n)^x}{1 + x/n}.
$$

**现代意义**: 几乎所有特殊函数都和 Gamma 有关 — Beta 函数 $B(x,y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)$, Riemann $\zeta$ 函数泛函方程, 概率分布 (Gamma / Chi-squared / Student-t), 量子场论里的 dimensional regularization, 路径积分 measure.

---

### 6.1.3 $e \notin \mathbb{Q}$ — E04

**Euler 1737 年证明 (E065, *De fractionibus continuis dissertatio*)**:

$e$ 是无理数. 证明用连分数 (continued fraction) 形式:

$$
e = 2 + \cfrac{1}{1 + \cfrac{1}{2 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{4 + \cdots}}}}}
$$

无穷不循环的连分数对应无理数 — 这个事实 Euler 本人证了.

(注: 比 Euler 更早, 1668 年 James Gregory 给出过 $e$ 的级数 $1 + 1 + 1/2! + 1/3! + \cdots$, 但没证无理性.)

**现代意义**: 超越数研究的先声. 一百多年后, Hermite 1873 证 $e$ 是超越数 (即不是任何整系数多项式的根); Lindemann 1882 用同样思路证 $\pi$ 也是超越数 (顺手解决了"化圆为方"问题).

---

### 6.1.4 Euler-Mascheroni 常数 $\gamma$ — E03

**Euler 1735 年发现**:

$$
\gamma = \lim_{n \to \infty} \left( \sum_{k=1}^n \frac{1}{k} - \ln n \right) = 0.5772156649\ldots
$$

调和级数 $1 + 1/2 + 1/3 + \cdots + 1/n$ 发散到无穷, 但其增长速度恰好就是 $\ln n$. 差值收敛到 $\gamma$ — 这个常数本身却是个 mystery.

Lorenzo Mascheroni 1790 把这个常数计算到 32 位 (但有一处算错了, 后由 Soldner 1809 修正).

**现代意义**: $\gamma$ 出现在所有涉及 $\zeta(s)$ 在 $s = 1$ 附近行为的地方 — Mertens 定理, prime number 计数函数, Stieltjes 公式. **未解决问题**: 至今不知道 $\gamma$ 是有理数还是无理数. (大多数数学家相信是无理数, 但没证.)

---

### 6.1.5 Euler product $\zeta(s) = \prod_p (1-p^{-s})^{-1}$ — E04

**Euler 1737 年发表 (E072, *Variae observationes circa series infinitas*)**:

$$
\sum_{n=1}^\infty \frac{1}{n^s} = \prod_{p \text{ prime}} \frac{1}{1 - p^{-s}}
$$

证明用算术基本定理 (每个 $n$ 都可以唯一分解为素数乘积) + 几何级数 $1/(1-p^{-s}) = 1 + p^{-s} + p^{-2s} + \cdots$.

这是 *解析数论核心恒等式*. 它把无穷个 $1/n^s$ 的和 (分析对象) 重新写成所有素数 $p$ 的乘积 (数论对象).

**现代意义**: Riemann 1859 把 $\zeta(s)$ 延拓到 $\mathbb{C}$, 用 Euler product 推出: 素数的分布信息隐藏在 $\zeta(s)$ 的零点中. 这就是 Riemann hypothesis. 同样思想后来一般化到 Dirichlet L-函数, Artin L-函数, 引出 Langlands program.

---

### 6.1.6 Euler totient $\varphi(n)$ — E09

**Euler 1758 年研究, 后续 E271 等**:

$\varphi(n) = \#\{k : 1 \leq k \leq n, \gcd(k, n) = 1\}$ — 1 到 $n$ 之间与 $n$ 互素的整数个数.

性质: - $\varphi(p) = p - 1$ (素数) - $\varphi(p^k) = p^k - p^{k-1}$ - 积性 (multiplicative): $\varphi(mn) = \varphi(m)\varphi(n)$ 当 $\gcd(m,n) = 1$

**Euler 定理**: 如果 $\gcd(a, n) = 1$, 那么 $a^{\varphi(n)} \equiv 1 \pmod n$. (Fermat 小定理的推广.)

**现代意义**: RSA 公钥密码学的数学基础. RSA 加密用 $\varphi(pq) = (p-1)(q-1)$ 当作私钥, 安全性 reduces to 大整数分解的困难性. 全球互联网的 TLS 握手大部分都在用 Euler 定理.

---

### 6.1.7 Mersenne 素数 $M_{31}$ 验证 — E10 (本集 §2)

详见本博客 §2. Euler 1772 年手算验证 $M_{31} = 2^{31} - 1 = 2{,}147{,}483{,}647$ 是素数.

**现代意义**: 这个纪录保持了 100 年, 直到 1876 年 Édouard Lucas 用更聪明的 Lucas-Lehmer test 验证 $M_{127}$. 今天最大的 Mersenne 素数是 $M_{136{,}279{,}841}$ (41,024,320 位数, 第 52 个已知 Mersenne 素数, 2024 年 10 月 12 日由 Luke Durant 经 GIMPS 项目找到). Lucas-Lehmer 的数论根基, 是 Euler 1772 写下的.

---

### 6.1.8 Quadratic Reciprocity (留题) — E10 (本集 §4)

详见本博客 §4. Euler 1772 写下, 1783 在 *Opuscula analytica* vol I 印行 (E552, 即生前最后一年) 明确陈述了 quadratic reciprocity 律, 包括 supplementary laws, 但没给完整证明. 13 年之后 (1796), 19 岁的 Carl Friedrich Gauss 给出第一份证明. Gauss 一生为这个定理给了 8 个不同的证明.

**现代意义**: Class field theory 的起点. Artin reciprocity (1927) 把 Euler-Gauss 这个 quadratic 形式一般化到任意有限维 abelian extension of $\mathbb{Q}$. Langlands program (1967-) 进一步把 reciprocity 推到非 abelian. 椭圆曲线密码 (ECC) 在某种程度上也是 reciprocity 思想的应用.

---

## §6.2 图论 + 组合 (Graph Theory + Combinatorics) — 3 个

### 6.2.1 Königsberg 七桥 → 图论 — E04

**Euler 1735 年 (E053, 1741 印)**:

Königsberg (今 Kaliningrad) 市中心 Pregel 河上有 7 座桥, 连接 4 块陆地. 问题: 能否在一次散步中, 每座桥都过且仅过一次?

Euler 把每块陆地抽象为一个 *node* (顶点), 每座桥抽象为一条 *edge* (边), 得到一个 multigraph $G = (V, E)$ 其中 $|V| = 4, |E| = 7$.

**Euler 定理 (graph theory 第一定理)**: 一个 connected multigraph 存在 Eulerian path (经过每条边恰好一次的路径) 当且仅当度数为奇数的顶点恰好 0 个或 2 个.

Königsberg 4 个顶点都是奇数度 (3, 3, 3, 5), 所以不存在 Eulerian path. 答案: 不可能.

**现代意义**: Graph theory 作为数学分支自此诞生. 现代应用: 路网最短路径 (Dijkstra), 电路布线, NP 问题 (Hamiltonian path 是 NP-complete vs Eulerian path 是 P), 社交网络分析.

---

### 6.2.2 骑士周游 (Knight's Tour) — E09

**Euler 1758 年 (E309, 1766 印 due to 7-Years War 延误)**:

国际象棋的 *马* (Knight) 走 L 形 — 2+1 步. 问题: 能否在 $8 \times 8$ 棋盘上每个格子恰好访问一次 (open tour) 或回到起点 (closed tour)?

Euler 用 *divide-and-conquer*: 把 $8 \times 8$ 分成 4 个 $4 \times 4$ 子棋盘, 在每个子棋盘内找局部巡游, 用关键的几步把局部接成全局.

Euler 给出了多个完整 closed tour 的解.

**现代意义**: Knight's tour 是 *Hamiltonian path* 问题的早期具体形态 (Hamilton 1857 才一般化). Hamiltonian path 一般情况下是 NP-complete (Karp 1972) — 这意味着没有已知的多项式时间算法. 现代后继: 旅行商问题 (TSP), 芯片布线, 路径优化.

---

### 6.2.3 拉丁方阵 + 36 军官 — E10 (本集 §3)

详见本博客 §3. Euler 1779 (E530) 提出 36 军官问题, 用现代术语就是: 找一对 $6 \times 6$ orthogonal Latin square. Euler 试遍找不到, 猜想: 对 $n \equiv 2 \pmod 4$ (即 $n = 2, 6, 10, 14, \ldots$) 都不存在.

178 年之后 (1959-60), Bose / Shrikhande / Parker 三人合作反证: $n \geq 10$ 部分全错. Euler 的直觉只对到 $n = 2$ 和 $n = 6$.

**现代意义**: 启动了组合设计理论 (combinatorial design theory) 这门学科. Fisher 1925 用拉丁方阵做农业实验的 block design — 至今是统计 experimental design 的标准方法. Reed-Solomon 编码 (CD/DVD/QR code 的纠错基础) 也用了拉丁方阵的代数结构.

---

## §6.3 复变 + 分析 (Complex Variables + Analysis) — 2 个

### 6.3.1 $e^{ix} = \cos x + i \sin x$ — E07

**Euler 1748 (E101 *Introductio in analysin infinitorum* 卷 I, §138)**:

$$
e^{ix} = \cos x + i \sin x \quad \text{for all } x \in \mathbb{R}.
$$

证明: 用幂级数 (Taylor expansion). 知 $e^z = \sum z^n / n!$, $\cos x = \sum (-1)^n x^{2n}/(2n)!$, $\sin x = \sum (-1)^n x^{2n+1}/(2n+1)!$. 代 $z = ix$ 进 $e^z$ 的展开, 拆分实部与虚部, 立刻得 $\cos x + i \sin x$.

这条等式把指数函数和三角函数统一了起来 — 复平面上 $e^{ix}$ 沿单位圆走, 实部和虚部分别是 cos 和 sin.

**现代意义**: 整个 FFT (Fast Fourier Transform) 的数学根基. 数字信号处理 (DSP), 量子力学波函数 ($\psi(x,t) = e^{i(kx-\omega t)}$), 电路 AC 分析 (phasor), 量子场论的 path integral $\int e^{iS/\hbar}$ — 都建立在这一条等式上.

---

### 6.3.2 Euler 恒等式 $e^{i\pi} + 1 = 0$ — E07

**Euler 1748 (E101 *Introductio*, §138 的特例)**:

$$
e^{i\pi} + 1 = 0
$$

把 $x = \pi$ 代入上一条等式 ($e^{i\pi} = \cos\pi + i\sin\pi = -1 + 0i = -1$), 移项即得.

这个等式连接了数学里 5 个最重要的常数: $0, 1, e, i, \pi$. 而且用到加法 + 乘法 + 指数 三种基本运算. 美得不像数学结果.

**现代意义**: 与 §6.3.1 等价, 但 emotional impact 不同. 被 Feynman 称为 *"the most remarkable formula in mathematics"*. 是几乎所有数学普及读物的 hero formula.

---

## §6.4 变分法 + 力学 (Calculus of Variations + Mechanics) — 5 个

### 6.4.1 Brachistochrone (最速降线) — E06

**Johann Bernoulli 1696 提问, Newton / Leibniz / Jakob Bernoulli / Euler 各自解出**:

一颗珠子从点 $A$ 沿一条无摩擦曲线滑到点 $B$, 哪条曲线让滑下时间最短?

答案是 cycloid (摆线). 不是直线, 不是抛物线 — 而是一条 cycloid.

Bernoulli 1696 用光学 (Snell's law of refraction) 类比解出. Newton 一晚做完. Euler 1744 (E065 同一论文) 把这个问题一般化, 引出 *变分法* (calculus of variations) 作为独立数学分支.

**现代意义**: 变分法是经典力学 (Lagrangian / Hamiltonian)、广义相对论 (Hilbert action)、量子场论 (path integral) 的基本工具.

---

### 6.4.2 Euler-Lagrange equation — E06

**Euler 1744 (E065) + Lagrange 1755 重写**:

如果要找让 functional $S[y] = \int_a^b L(y, y', x) \, dx$ 取极值的函数 $y(x)$, 那 $y$ 必须满足:

$$
\frac{\partial L}{\partial y} - \frac{d}{dx} \frac{\partial L}{\partial y'} = 0.
$$

这是 *变分法的基本方程*. Brachistochrone (§6.4.1) 是它的一个具体应用.

Lagrange 1755 (19 岁) 给 Euler 写信, 用更代数化、less geometric 的方法重新推导这个方程. Euler 看了之后大方地按下自己的版本不发表, 让年轻的 Lagrange 名字先出. 后来这个方程就叫 Euler-Lagrange.

**现代意义**: 经典力学的 Lagrangian 形式: $L = T - V$ (动能减势能), 各个粒子坐标满足 Euler-Lagrange. 推广到场: 量子场论的 Lagrangian density $\mathcal{L}$. Noether 1915 把 Euler-Lagrange 的对称性翻译为守恒律 (Noether's theorem). 现代物理几乎所有理论都从一个 action principle $\delta S = 0$ 出发.

---

### 6.4.3 Euler 流体方程 — E09

**Euler 1753 (写) / 1761 (印, E258, *Principia motus fluidorum*)**:

不可压缩 inviscid (无粘) 流体的运动方程:

$$
\partial_t \mathbf{v} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{1}{\rho}\nabla p + \mathbf{g}
$$

加连续性方程 $\nabla \cdot \mathbf{v} = 0$ (incompressible). 这里 $\mathbf{v}(\mathbf{r}, t)$ 是速度场, $p$ 压力, $\rho$ 密度, $\mathbf{g}$ 重力.

这是 *流体动力学的祖方程*. Euler 在 1753 年写下它 (1761 印行) 之前, 流体只能定性讨论. Euler 把流体当作连续介质 (continuum) 处理, 用偏微分方程描述.

**现代意义**: 加上粘性项 $\mu \nabla^2 \mathbf{v}$ 就成了 Navier-Stokes (1822 年). 现代用法: 飞机绕流, 天气预报 (Navier-Stokes 数值求解), 气候模型, 心血管血流, 火箭推进, 海洋洋流. **Millennium prize problem**: Navier-Stokes 在三维的存在性和光滑性, 至今 (2026) 未解, 是 Clay Institute 100 万美元奖之一.

---

### 6.4.4 Euler 角 — E09

**Euler 1751-1758 (E177 + E292), 完整版 1765 (E289 *Theoria motus corporum solidorum*)**:

任意三维姿态可以用三个独立角参数描述. Standard convention (3-1-3): 先绕 $z$-轴转 $\phi$, 再绕 *新的* $x$-轴转 $\theta$, 最后绕 *再次新的* $z$-轴转 $\psi$.

可以用 rotation matrices 写出来:

$$
R(\phi, \theta, \psi) = R_z(\psi) R_x(\theta) R_z(\phi).
$$

**Euler's rotation theorem** (E478, 1775): 任意刚体绕固定点的旋转, 都可以等价地看作绕某一条 *瞬时轴* 的单一旋转.

**现代意义**: 航天器姿态控制 (attitude control), 卫星指向, 陀螺仪 (gyroscope), 惯性导航 (INS), 飞机/导弹姿态稳定, 机器人手臂 (robot arm forward/inverse kinematics), 虚拟现实头部追踪 (VR headtracking), 计算机图形学 (3D rotation in OpenGL/DirectX). Euler 角的局限 (gimbal lock) 在现代图形里被 quaternion 替代, 但 quaternion 也是从 Euler 角的几何根基延伸出来的.

---

### 6.4.5 Lagrange 点 $L_1$-$L_5$ — E10 (本集 §1)

详见本博客 §1. Euler 1751-1753 (E175) 找出共线三点 $L_1, L_2, L_3$. Lagrange 1772 (Paris Academy Prize) 补上等边三角形两点 $L_4, L_5$.

**现代意义**: NASA James Webb Space Telescope 在地球-太阳 $L_2$ 点 (距离地球 1.5 million km 反太阳方向, 2022 年 1 月 24 日抵达). SOHO 太阳观测卫星在 $L_1$ 点. STEREO 和 DART 任务用 $L_4 / L_5$. Sun-Jupiter $L_4 / L_5$ 实际汇集了 12,000+ 颗 *Trojan asteroids* (小行星), Lagrange 1772 当时认为这两点没物理实现, 200 年后证明错.

---

## §6.5 拓扑 (Topology) — 1 个 (hero panel)

### 6.5.1 多面体公式 $V - E + F = 2$ — E09

**Euler 1750 (E230, 给 Goldbach 的信 1750-11-14)**:

对任意 *凸* 多面体 (convex polyhedron):

$$
V - E + F = 2
$$

其中 $V$ = 顶点数 (vertices), $E$ = 边数 (edges), $F$ = 面数 (faces).

验证: | 多面体 | $V$ | $E$ | $F$ | $V-E+F$ | |---|---|---|---|---| | 四面体 (tetrahedron) | 4 | 6 | 4 | 2 | | 立方体 (cube) | 8 | 12 | 6 | 2 | | 八面体 (octahedron) | 6 | 12 | 8 | 2 | | 十二面体 (dodecahedron) | 20 | 30 | 12 | 2 | | 二十面体 (icosahedron) | 12 | 30 | 20 | 2 |

Euler 1750-11-14 给 Goldbach 的信中 announce (E230), 1751 给出 induction-on-edges 的证明草稿 (E231, 1758 印). Cauchy 1813 给出更严格的版本.

更深层: 数字 $\chi = V - E + F$ 是一个 *topological invariant* — 它不依赖于多面体的具体形状, 只依赖于它的 "拓扑类型". 对球面 $\chi = 2$; 对环面 (torus) $\chi = 0$; 一般 genus-$g$ surface $\chi = 2 - 2g$.

**这是 *拓扑不变量* 的第一个例子.** 整个代数拓扑 (Poincaré 1900, Brouwer 1911, de Rham 1931, Hodge 1941, Atiyah-Singer 1963) 的核心思想 — "用代数对象 capture 几何形状的不变性" — 都从 Euler 1750-58 这条公式开始.

**现代意义**: 拓扑学整门学科. 应用: Calabi-Yau manifold (弦论), Chern class (规范场论), Atiyah-Singer index theorem (微分几何 + 数论 + 算子代数), persistent homology (拓扑数据分析 TDA).

---

## §6.6 总结: 30+ Euler-named concepts

我们走过的这 19 个, 是 Euler 名字 prefix 的数学结果里最有 currency 的一小部分. *List of things named after Leonhard Euler* (Wikipedia 收录) 当前有 100+ 条目, 包括但不限于:

- Euler equation in fluid (§6.4.3 上面那条)
- Euler's identity ($e^{i\pi}+1=0$, §6.3.2)
- Euler characteristic ($V-E+F$, §6.5.1)
- Euler angles (§6.4.4)
- Euler totient (§6.1.6)
- Euler-Lagrange equation (§6.4.2)
- Euler-Mascheroni constant (§6.1.4)
- Euler product (§6.1.5)
- Euler number $e$
- Euler line (geometry of triangle)
- Euler's method (numerical ODE)
- Eulerian path / circuit (graph theory)
- Euler's substitution (integration technique)
- Euler-Maclaurin formula (series ↔ integral)
- ... 还有很多

数学物理人在文献里看到 "Euler" 这个名字时, 一般要 disambiguate 一下 — 因为可能指 10 个不同的结果. 这本身是 Euler 76 年 / 866 论文留下的 currency.

**E01 序集到 E10 终章, timeobserver137 系列就此完结.**

---

— Escher · §6 RETROSPECTIVE · v0 · 2026-05-26

---
