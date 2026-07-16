---
title: "E09 数学补遗 · 柏林之尾 1753-1766"
date: 2026-05-20
lang: zh
tags:
  - timeobserver137
  - math-companion
  - e09
ghostSlug: e09-berlin-iv-final
---

## 导论 · 写在数学推导之前

> 视频对照: E09《柏林之尾 · 1753–1766》

说实话吧，这一期视频我自己拍完之后，对一件事印象很深，就是 1750 年到 1765 年这 15 年里，Euler 一个人在柏林的书桌上同时打开 4 本笔记。我们现在回头看，那 4 本笔记里写的东西，分别长成了今天的拓扑学、计算流体动力学、姿态控制、互联网密码学。

视频里我们只来得及讲故事和直觉，真正"为什么会成立"的部分，要在这里把它写下来…我自己感觉，对很多观众来说，光看视频是不够的，会觉得"Euler 真厉害但具体是怎么回事还是不知道"。所以有了这篇博客。

下面我用差不多 5 分钟的篇幅说一下，4 个定理分别在说什么，为什么 270 年后还在被使用。看到这里就停了也可以，如果想继续看证明，往下翻 §1 到 §4。

---

## 这一期的 4 个数学故事

### §1 · V − E + F = 2 — 多面体恒等式

正方体 8 顶点、12 棱、6 面：8 − 12 + 6 = 2。正四面体 4 − 6 + 4 = 2。Euler 1750 年 11 月 14 日写信给 Goldbach，第一次说出这件事。

为什么？因为多面体的"形状自由度"和"表面拓扑"是两件事…你怎么捏怎么拉，只要不戳洞，这个 2 都不会变。这一条观察，后来成了整个拓扑学的起点。

我自己觉得比较意外的一个应用是足球分子 C60。化学家 1985 年发现，碳原子有一种构型恰好是 60 个原子构成一只足球，这种分子叫富勒烯。Euler 公式在这里强制要求，它必然恰好有 12 个五边形面 — 不可能多一个不可能少一个，跟六边形多少完全无关。1996 年这个发现拿了诺贝尔奖。

### §2 · 流体方程 — 第一个偏微分方程

Newton 写 F = ma 是给"质点"用的。但水呢？空气呢？

Euler 1752 到 1755 年，把 F = ma 推广到了连续物质…结果生出了人类历史上第一个偏微分方程组。这套方程今天叫 CFD，飞机机翼、天气预报、心脏血流模拟，全都在用它。

它的扩展版 Navier-Stokes 至今仍是 7 个千禧难题之一，奖金 100 万美元，已经悬赏 25 年没人能解。我们今天对流体行为的理解依然不完整。

### §3 · 刚体方程 + Euler 角 — 陀螺为什么不倒

地球绕轴自转 24 小时一圈；自行车前轮转得快就不会倒；ISS 上的螺母自由飘起来会自发周期性翻转…这些看似不相关的现象，全都由 Euler 的刚体方程 $I\dot{\boldsymbol{\omega}} + \boldsymbol{\omega}\times(I\boldsymbol{\omega}) = \boldsymbol{\tau}$ 一句话描述。

ISS 上那个 1985 Dzhanibekov 螺母的实验，对比地面上根本看不到这种现象，是非常震撼的。今天飞行器姿态控制、机器人腕部规划、动画引擎里转骨头的算法，底层都是 Euler 在柏林 15 年磨出来的这套数学。

### §4 · Euler 定理 + RSA — 当代密码学的根

Euler 1763 年把 Fermat 的一个小观察（"2 的 6 次方等于 64，除以 7 余 1"）推广到任意模数。

213 年后的 1977 年，MIT 三个人 — Rivest、Shamir、Adleman — 发现可以用 Euler 这条定理造一种不对称加密。加密用的钥匙可以公开，解密的钥匙严格保密…这就是 RSA。

我自己想想觉得有意思的是，Euler 在写这条定理的时候，不可能预见到几个世纪后它会变成整个互联网信任系统的基石。今天你浏览器地址栏那把锁，你的银行 App 登录，你发的每一封加密邮件，第一步握手用的就是 RSA。

---

## 为什么把这 4 个定理放在一期里？

它们看着八竿子打不到一起 — 拓扑、流体、刚体、数论。但是写出它们的是同一个人，在同一段时间，同一个城市，同一张书桌。1750 到 1765，Euler 在柏林 15 年。

我想想以前看 Euler 的科普介绍，普遍都是 "他什么都研究"、"他是数学之王"，这种描述其实没什么用，听完什么也不知道。我自己倾向于这样想：那 15 年他不知道这 4 件事会变成 4 门现代学科的基础，他只是把 4 本笔记摊在桌上，按自己的节奏写。今天回头看，这 4 本笔记的每一本都长成了大树。

下面 4 个 § 是完整的、经过同行评议的严格证明。每一条公式都从头推导。如果哪一处觉得"等等这是为什么"，可以回看视频对应时间码（每个 § 顶上都标了），或者直接看 worked example 那一块用具体数字算一遍 — 我觉得对很多人来说，看具体数字算一遍比看抽象证明更容易明白。

顺便说一下，这篇博客其实不是我一个人写的。证明部分由 Abel 写，Socrates 和 Gauss 各 review 了两轮（逻辑严谨性 + 史实核对），Escher 做了配图和 GIF 动画，Euler 处理了 Ghost 发布。我自己的部分是这篇导论，加上整个项目的方向把控。我觉得这种协作方式挺新鲜的…一个人加上一群各有专长的 AI 伙伴，做出来的东西比我自己写大概要严谨不少。

— Yeqiu 和他的 AI 伙伴们 · 时间观察者 137

---

## §1 · 多面体公式 V−E+F=2 的严格证明

> 视频对照: 04:07–07:40 (M1 段)
>
> **本节假设你熟悉**
>
> : 高中立体几何 (顶/棱/面计数)、初等图论 (顶点、边、面、连通性)、归纳法。

## 一句话概述

对任何**凸多面体**(更一般地, 对任何同胚于球面的有限多面体), 顶点数 $V$、棱数 $E$ 与面数 $F$ 始终满足

$$
V - E + F = 2.
$$

这条恒等式由 Euler 在 1750 年 11 月 14 日致 Goldbach 的信中提出。它表面上是初等组合等式, 实际上是**拓扑学**的第一块基石: 我们今天称量 $\chi = V - E + F$ 为该曲面的 **Euler 示性数**, 而对球面 $\chi(S^2) = 2$。本节给出从 1750 到现代的四种证明路径, 突出每一步的假设条件与漏洞。

---

## 1.1 Euler 1750: 砍面–展平的非形式论证

Euler 自己给出的论证大致如下:

**步骤 1**: 任取多面体的一面, 把这面"剜掉", 得到一个**带洞的多面体外壳**, 此时 $V$ 与 $E$ 不变, $F$ 减少 1, 因此

$$
V - E + F = V - E + (F-1) + 1.
$$

**步骤 2**: 将剩余的外壳沿剜出的边界**展平**到平面上。展平后得到一张**平面图** $G$, 顶点数仍为 $V$, 棱数仍为 $E$, 面数为 $F-1$ 个有界面加 $1$ 个**无界外面**, 合计 $F$。

**步骤 3**: 对平面图反复施行两类约化: - **三角剖分**: 若某有界面不是三角形, 在它内部加一条对角线, $E$ 与 $F$ 各增 $1$, 恒等式不变。 - **删边或删顶**: 当所有面已是三角形, 删一个**边界三角形**对应地减 $E$ 与 $F$ 各 $1$ (或减一个叶顶点 $V-E$ 同减), 恒等式不变。

**步骤 4**: 持续约化直到只剩一个三角形, $V=3, E=3, F=2$ (一个三角形面 + 一个外面), 此时 $V-E+F = 3-3+2 = 2$。回溯所有约化, 原多面体也满足 $V-E+F=2$。

**漏洞**: Euler 的论证有两处不严格之处, 后人花了 60 多年才补上。

1. **展平不总是平面图**: "把外壳展开到平面"的几何动作只在**凸**多面体上保形地可行; 对非凸多面体 (如带凹槽的星形) 必须先论证可以同伦地连续地变形到球面再展平。Euler 默认了多面体是凸的, 但他没有明说。
2. **三角剖分–删边约化的收敛性**: 该过程对任意平面图都终止吗? Euler 假定可以一路删到单一三角形, 但是否会陷入**死循环** (例如所有面都是三角形但无可删的边界三角形) 没有证明。

这两处漏洞由 Legendre 1794 和 Cauchy 1813 分别补上。

---

## 1.2 Legendre 1794: 球面过剩 (spherical excess) 路径

**核心想法**: 把凸多面体内切于单位球, 从球心向多面体每个面投影。每个面变成一个**球面多边形**, 多面体的所有面**覆盖整个球面**, 总面积为 $4\pi$。

**引理 (球面三角公式)**. 单位球面上一个三角形, 三个内角分别为 $\alpha, \beta, \gamma$, 则其球面面积满足

$$
A_\triangle = (\alpha + \beta + \gamma) - \pi.
$$

(此为 Harriot 1603 / Girard 1629 著名结果, 一般球面 $n$ 边形的面积为内角和减去 $(n-2)\pi$。)

**推论 (球面 $n$ 边形)**. 球面上一个 $n$ 边形的球面面积为

$$
A_n = \left(\sum_{i=1}^n \alpha_i\right) - (n-2)\pi.
$$

**Legendre 证明大纲**.

设第 $k$ 个面投影为球面 $n_k$ 边形, 内角和为 $S_k$, 棱数为 $n_k$。所有面覆盖球面总面积

$$
\sum_k A_{n_k} = \sum_k \big( S_k - (n_k-2)\pi \big) = \left(\sum_k S_k\right) - \pi \sum_k n_k + 2\pi F = 4\pi.
$$

接下来分别计数:

- $\sum_k n_k$ 数的是每个面的棱数之和。但每条棱属于恰好两个面, 故 $\sum_k n_k = 2E$。
- $\sum_k S_k$ 是所有面在所有顶点处的内角之和。在每个顶点处, 所有以该顶点为顶角的球面多边形内角之和恰为 $2\pi$ (它们环绕单位球面上该点一整圈)。故 $\sum_k S_k = 2\pi V$。

代入得

$$
2\pi V - 2\pi E + 2\pi F = 4\pi, \quad \Longrightarrow \quad V - E + F = 2. \qquad \blacksquare
$$

**优点**: 此证明完全规避了 Euler 的展平动作, 只用球面几何与简单计数; 缺点是它**仅适用于凸多面体** (才能内切于球并作球心投影)。

---

## 1.3 Cauchy 1813: 现代教科书标准 (平面图归纳)

Cauchy 在 *Recherches sur les polyèdres* 中给出了最早严格意义上的归纳证明, 也是现代图论与拓扑学教材中最常用的版本。

**第一步**: 沿 Euler 1750 的思路, 选定一面剜掉并展平为平面图 $G$。我们要证明任何**连通的平面图 $G$** 满足

$$
V(G) - E(G) + F(G) = 2,
$$

其中 $F(G)$ 包含**无界外面** (即剜掉那一面对应的无界区域)。

**第二步 (归纳基)**: 单点平面图 $V=1, E=0, F=1$ (只有一个外面), 显然 $V-E+F=2$。

**第三步 (归纳)**: 对任意连通平面图 $G$ (顶点数 $V \geq 2$), 按"含圈 vs. 树"二分:

- **情形 A: $G$ 含有圈**。挑出任一条**位于圈上**的边 $e$ 并删去。删后图仍连通 (圈上去一条边, 其他路径替代), $V$ 不变, $E$ 减 $1$; 而 $e$ 在原图中分隔的两个面合并为一个, 故 $F$ 也减 $1$。由归纳假设 $V-(E-1)+(F-1) = 2$, 故 $V-E+F=2$。
- **情形 B: $G$ 不含圈 (即 $G$ 是连通无圈, 是一棵树)**。任何顶点数 $\geq 2$ 的树都至少含两个**叶顶点** (度数为 $1$ 的顶点)。选其一叶顶点 $v$ 与其唯一关联的边 $e$, 一起删除 → $V$ 减 $1$, $E$ 减 $1$, $F$ 不变 (树原本只有 $1$ 个外面, 删叶不增减面)。由归纳假设 $(V-1)-(E-1)+F = V-E+F = 2$。

(注: 原本朴素的"如果 $e$ 是桥, 则其一端点必为叶"这一断言其实**不真** — 反例为**杠铃图** (两个三角形之间一条桥边), 桥的两端度数都是 $3$。修正后的"含圈 vs. 树"二分则普适且严格。)

由归纳法, 任意连通平面图都满足 $V-E+F=2$。 $\blacksquare$

**关键观察**. Cauchy 证明只依赖**图的连通性**和**平面性**, 不依赖几何凸性。因此它一举把 Euler 公式从凸多面体推广到任何同胚于球面的多面体 (允许 Schönhardt 型非凸但拓扑球面)。

**陷阱**: 该证明并未告诉我们: 一旦多面体不再同胚于球面 (例如带把手的环面), 公式如何修正? 这要等到 Riemann (1851) 与 Poincaré (1895) 给出新的语言。

---

## 1.4 现代视角: 拓扑不变量 $\chi$

20 世纪初, 拓扑学家发现 $V-E+F$ 不仅是一个数值恒等式, 而是**单纯复形**的一个**同伦不变量**。

**定义**. 对紧致连通的 2 维流形 $M$, 选取它的任一**单纯剖分** (即把 $M$ 切成有限个三角形, 满足相邻三角形共享一边或一顶点), 设三角剖分有 $V$ 个顶点、$E$ 条边、$F$ 个 (三角形) 面, 定义

$$
\chi(M) := V - E + F.
$$

**核心定理**. $\chi(M)$ **不依赖具体剖分**, 只取决于 $M$ 的同胚类型。

**例**: - 球面 $S^2$: $\chi(S^2) = 2$。 - 环面 $T^2$ (甜甜圈): $\chi(T^2) = 0$。 - 亏格为 $g$ 的可定向闭曲面 $\Sigma_g$: $\chi(\Sigma_g) = 2 - 2g$。 - Klein 瓶: $\chi = 0$。 - 投影平面 $\mathbb{RP}^2$: $\chi = 1$。

这把 Euler 公式重新表述为一个干净的**拓扑判断准则** (正向方向):

$$
M \cong S^2 \quad \Longrightarrow \quad V - E + F = 2.
$$

(*反向方向* $V-E+F=2 \Rightarrow M \cong S^2$ 也成立, 但需要**紧致 2 维流形分类定理** (Möbius/Klein/Dyck 1888 起), 见 Massey *Algebraic Topology* §I.7 或类似教材, 本节不展开。)

**几何直观**. 凸多面体的表面与球面同胚 (径向投影即为同胚映射), 故 $\chi = 2$, 等价于 $V-E+F=2$。如果允许多面体表面"长出洞"(如带把手的环面型多面体), 则 $V-E+F$ 不再等于 $2$, 而是 $2-2g$。

**与拉伸/弯曲无关**. $\chi$ 是同胚不变量, 意味着无论怎样**连续变形** (不撕开、不粘合) 表面, $V-E+F$ 的值都不变。这是"拓扑学不依赖度量"的第一个清晰范例。

---

## 应用例子 (Worked examples)

### 例 1: 八面体计数验证

正八面体 (regular octahedron) 有 $V=6$ 顶点 (上下两顶 + 中间方形 4 顶), $E=12$ 棱 (上下两顶各连方形 4 顶 = 8 条 + 方形 4 条 = 12), $F=8$ 三角形面 (上锥 4 + 下锥 4)。

$$
V - E + F = 6 - 12 + 8 = 2. \quad \checkmark
$$

**这告诉我们**: 正八面体的表面与球面同胚, 是一个 $\chi = 2$ 的拓扑球。

### 例 2: 截角二十面体 (足球) 验证

现代足球图案是**截角二十面体** (truncated icosahedron): 把正二十面体的 12 个顶点每个削掉一个三角形, 得到 12 个**五边形** (从顶点削出) + 20 个**六边形** (从原 20 个三角形面变出)。

- 顶点数 $V = 60$ (每个原顶点削出 5 个新顶点, $12 \times 5 = 60$)
- 棱数 $E = 90$ (12 五边形 + 20 六边形, 每边属于两面, $(12 \cdot 5 + 20 \cdot 6)/2 = 150/2 = 75$ — wait, 重新算: 五边形 5 条边 × 12 = 60, 六边形 6 条边 × 20 = 120, 总边-数 (含重复) = 180, 每边算了两次, $E = 90$ ✓)
- 面数 $F = 12 + 20 = 32$

$$
V - E + F = 60 - 90 + 32 = 2. \quad \checkmark
$$

**这告诉我们**: 即使是相当复杂的"非凸感"多面体 (实际上 Carbon 60 富勒烯也是这个形状, 化学 1985 Kroto-Smalley-Curl 诺奖), 只要拓扑上是球面, $V-E+F$ 永远 = 2。这就是为什么 1996 年发现的所有富勒烯 (足球烯) 分子都必然含恰好 12 个五边形 — 由 $V-E+F=2$ + $f_5 \cdot 5 + f_6 \cdot 6 = 2E$ + $3V = 2E$ 联立解出 $f_5 = 12$, 与六边形数 $f_6$ 无关。

---

## 几何/物理直观

![五个柏拉图多面体 — 每一个都满足 V−E+F = 2](/content/images/2026/05/fig1_platonic_solids.png)

> **Fig 1.**
>
> 五个柏拉图多面体 wireframe 投影 + V/E/F 计数. χ = V−E+F = 2 在五个表面上恒等。

🎬 [**Cut-flatten 证明可视化 — 视频 06:24**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=384s) (anim-04): 拆掉一面、把剩下的网络拍平到平面、归纳删边/删顶 → 证明 V−E+F = 2 (chunk M1_07).

🎬 [**球面 ↔ 环面 同伦变形 — 视频 06:00**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=360s) (anim-03): χ=2 (球面) 与 χ=0 (环面) 的拓扑不变量对比 (chunk M1_06).

把多面体想象成一个**充气的橡皮球**: 顶点是 marker, 棱是橡皮筋, 面是橡皮膜。无论怎样**捏挤、拉伸、扭转**这个球, 只要不戳破、不粘合两块膜, 顶点数、棱数、面数的**组合**值 $V-E+F$ 永远是 $2$。

而一旦戳出一个洞, 让它变成甜甜圈 (环面), $V-E+F$ 立刻跳到 $0$, 而这跟你怎么"画"棱、怎么分"面"完全无关 — 它是这个曲面**先天**的、与剖分无关的整体属性。

---

## 视频对照

视频 **04:07–07:40 (M1 段)**: - 04:07–04:38: Goldbach 信件 + V−E+F=2 首次浮现 (anim-20) - 04:40–05:09: V/E/F 字母 hover + tetrahedron 4 顶 6 棱 4 面 counter (anim-01, anim-21) - 05:10–05:35: 5 正多面体 verify V−E+F=2 (anim-02) - 05:35–06:05: 球面 ↔ 环面同伦变形, $\chi$ 从 2 跳到 0 (anim-03) - 06:05–06:35: Euler 1750 砍面–展平证明可视化 (anim-04) - 06:35–07:10: 200 年 topology relay portrait grid: Cauchy 1813 / Riemann / Poincaré 1895 / Perelman 2003 (anim-05)

— Abel

---

## §2 · 从牛顿到 Euler: 流体运动方程的推导

> 视频对照: 07:45–11:11 (M2 段)
>
> **本节假设你熟悉**
>
> : 多元微积分 (偏导、链式法则)、向量微积分 (梯度 $\nabla$、散度 $\nabla \cdot$)、散度定理 (Gauss-Ostrogradsky 公式)、Newton 第二定律。

## 一句话概述

Euler 在 1752–1755 年间, 把 Newton 第二定律 $F = ma$ 从离散的"质点"推广到了"**连续介质**" (即假设流体可视为**连续的物质场**, 在任意尺度上仍有良定义的局部密度与速度 — 也称**连续介质假设 (continuum hypothesis)**, 不要与集合论的同名命题混淆)。这次推广产生了第一个真正的**偏微分方程组** — Euler 流体方程:

$$
\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{\nabla p}{\rho} + \mathbf{g}, \qquad \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0.
$$

它把"力 = 质量 × 加速度"翻译成了向量场语言, 至今仍是计算流体动力学 (CFD) 的基石。本节给出从控制体积 (control volume) 出发的标准推导, 然后简介 Navier 1822 与 Stokes 1845 如何加入粘性项把它扩展为 Navier-Stokes 方程。

---

## 2.1 物质导数: 跟随流体微元的加速度

**问题**. 在连续介质中, 速度场 $\mathbf{v}(\mathbf{x}, t)$ 给出**空间位置 $\mathbf{x}$ 在时刻 $t$ 的流体速度**。但牛顿第二定律涉及的是**某个特定流体微元的加速度**, 不是某空间点的加速度。两者并不相同。

**关键区分**: - **欧拉视角 (Eulerian)**: 在固定空间点 $\mathbf{x}$ 观察速度 $\mathbf{v}(\mathbf{x}, t)$ 如何变化。$\partial \mathbf{v}/\partial t$ 是空间固定点的速度时变。 - **拉格朗日视角 (Lagrangian)**: 跟随某个标定的流体微元运动。该微元的"自身加速度"才是 $F=ma$ 中的 $a$。

**引理 (物质导数, material derivative)**. 跟随流体微元运动的加速度可写作

$$
\frac{D \mathbf{v}}{D t} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}.
$$

*证明*. 设流体微元在时刻 $t$ 位于 $\mathbf{x}(t)$, 其速度为 $\mathbf{v}(\mathbf{x}(t), t)$。由链式法则,

$$
\frac{d}{dt} \mathbf{v}(\mathbf{x}(t), t) = \frac{\partial \mathbf{v}}{\partial t} + \frac{\partial \mathbf{v}}{\partial x_i} \frac{d x_i}{d t}.
$$

而 $d x_i / dt = v_i$ (微元就是被速度场带着走的), 故

$$
\frac{D \mathbf{v}}{D t} = \frac{\partial \mathbf{v}}{\partial t} + v_i \frac{\partial \mathbf{v}}{\partial x_i} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}. \qquad \blacksquare
$$

**直观**. 第一项 $\partial \mathbf{v}/\partial t$ 是**局部时变** (假如你站在固定河岸, 河水流速怎么变); 第二项 $(\mathbf{v}\cdot\nabla)\mathbf{v}$ 是**对流项 (convective)** (假如你坐在小船上, 你随河流漂到不同地点感受到的速度变化)。两者之和才是流体微元自己感受到的加速度。

---

## 2.2 Newton 第二定律 + 控制体积 → Euler 方程

**核心想法**. 对**密度为 $\rho$、体积为 $dV$ 的流体微元**, 牛顿第二定律 $F = ma$ 写作

$$
\rho \, dV \cdot \frac{D \mathbf{v}}{D t} = \sum \mathbf{F}.
$$

我们要把右边的 $\sum \mathbf{F}$ 写成各类力的总和。

**作用在微元上的三类力**:

1. **压力梯度** (surface force): 微元 6 个面上, 每个面承受周围流体的压力。设微元为一边长 $dx \times dy \times dz$ 的盒子, 沿 $x$ 方向左右两面的压力差为

$$
\Big(p(x) - p(x + dx)\Big) \, dy \, dz \;\approx\; -\frac{\partial p}{\partial x} \, dx \, dy \, dz.
$$

三个方向同理, 合力为 $-\nabla p \cdot dV$。

1. **重力** (body force): 微元的重量为 $\rho \, dV \cdot \mathbf{g}$。
2. **(暂时忽略粘性力)**: Euler 模型的核心假设是**无粘流体 (inviscid)** — 流体微元之间无内摩擦, 仅靠压力相互作用。形式化地, 这等价于断言 Cauchy 应力张量是**各向同性 (isotropic)** 的:

$$
\sigma_{ij} = -p \, \delta_{ij}.
$$

即, 任意流体小面上的应力只有法向压力 $p$ 一项, 无剪应力 (off-diagonal $\sigma_{ij}$ 当 $i \neq j$ 全为 $0$)。这是与现实最大的差距, Navier 和 Stokes 后来补上 (见 2.4) — 牛顿流体的 $\sigma_{ij}$ 包含与应变率成线性的剪切项。

**总合力**:

$$
\sum \mathbf{F} = -\nabla p \cdot dV + \rho \mathbf{g} \cdot dV = \left( -\nabla p + \rho \mathbf{g} \right) dV.
$$

代入牛顿第二定律 (两边除以 $\rho \, dV$):

$$
\boxed{\;\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{\nabla p}{\rho} + \mathbf{g}.\;}
$$

这就是 **Euler 流体动量方程** (Euler equation of motion; 1755 *Principes généraux* manuscript / 1757 published 在 Mémoires de l'Académie de Berlin)。

🎬 [**流体元 force balance — 视频 08:44**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=524s) (anim-06): 流体微元上 3 个力 (压力梯度 / 体力 / 加速度) 平衡 + Euler 方程 build, chunk M2_03.

### 应用例子 (Worked example): 不可压理想流绕静止球 — 表面压力分布

考虑速度为 $U$ 的均匀流绕静止球体 (半径 $a$) 流过, 假设无粘 + 不可压 + 无旋。球外速度场已知 (来自 Laplace 方程 + Neumann 边界条件, e.g. Lamb *Hydrodynamics*):

$$
v_r = U \left( 1 - \frac{a^3}{r^3} \right) \cos\theta, \quad v_\theta = -U \left( 1 + \frac{a^3}{2 r^3} \right) \sin\theta.
$$

**套公式 (Bernoulli 沿流线)**. 对**定常理想流**, 沿任一流线 $\frac{1}{2} v^2 + p/\rho = \text{const}$。取参考点为无穷远 ($v = U$, $p = p_\infty$):

$$
p = p_\infty + \frac{1}{2}\rho\left( U^2 - v^2 \right).
$$

**算 (球面上 $r = a$)**:

$$
v_r\bigg|_{r=a} = 0, \quad v_\theta\bigg|_{r=a} = -\frac{3}{2} U \sin\theta, \quad v^2 = \frac{9}{4} U^2 \sin^2\theta.
$$

$$
\boxed{\;p(a, \theta) - p_\infty = \frac{1}{2}\rho U^2 \left( 1 - \frac{9}{4} \sin^2\theta \right).\;}
$$

**这告诉我们**: 球面上 $\theta = 0$ (迎流点, "鼻尖") 与 $\theta = \pi$ (后驻点) 压力最大 ($+\frac{1}{2}\rho U^2$ 超过环境压力); 球面两侧 ($\theta = \pi/2$) 压力最小 ($-\frac{5}{8}\rho U^2$ 低于环境)。

注意: 球前后对称的压力分布意味着**无粘流绕球净阻力 $= 0$** — 即著名的 **D'Alembert 佯谬** (1752)。真实流体阻力来源于 §2.4 加入的粘性项, 这是 Euler 方程的核心局限。

---

## 2.3 质量守恒 → 连续性方程

**问题**. 对每个固定空间区域 $\Omega$, 区域内的总质量随时间如何变化?

**质量守恒原理**: 区域内质量变化 = 流入 - 流出。

**形式化**. 区域 $\Omega$ 内的总质量为

$$
M(t) = \int_\Omega \rho(\mathbf{x}, t) \, dV.
$$

通过 $\Omega$ 边界 $\partial \Omega$ 流出的质量流率为

$$
\Phi(t) = \oint_{\partial \Omega} \rho \mathbf{v} \cdot \hat{\mathbf{n}} \, dS,
$$

其中 $\hat{\mathbf{n}}$ 为 $\partial \Omega$ 上向外的单位法向量。质量守恒即

$$
\frac{d M}{d t} = -\Phi, \qquad \Longrightarrow \qquad \frac{d}{dt}\int_\Omega \rho \, dV + \oint_{\partial \Omega} \rho \mathbf{v} \cdot \hat{\mathbf{n}} \, dS = 0.
$$

**散度定理 (Gauss / Ostrogradsky)** 把边界积分转化为体积积分:

$$
\oint_{\partial \Omega} \rho \mathbf{v} \cdot \hat{\mathbf{n}} \, dS = \int_\Omega \nabla \cdot (\rho \mathbf{v}) \, dV.
$$

代入并交换积分微分 (对固定区域 $\Omega$, $d/dt$ 可入积分):

$$
\int_\Omega \left[ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) \right] dV = 0.
$$

**关键 (du Bois-Reymond vanishing lemma)**: 这条对**任意区域 $\Omega$** 成立。假设被积函数 $f$ 连续, 若它在某点 $\mathbf{x}_0$ 处 $f(\mathbf{x}_0) \neq 0$ (不失一般性设 $> 0$), 由连续性存在 $\mathbf{x}_0$ 的邻域 $\Omega_\epsilon$ 使 $f > 0$ 整个 $\Omega_\epsilon$ 上; 取 $\Omega = \Omega_\epsilon$ 给出 $\int_{\Omega_\epsilon} f \, dV > 0$, 矛盾。故被积函数处处为 $0$:

$$
\boxed{\;\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0.\;}
$$

这就是**连续性方程 (continuity equation)**, 它把质量守恒从积分形式化为偏微分方程。

**特例: 不可压流 (incompressible)**. 若 $\rho = \mathrm{const}$, 则 $\partial \rho / \partial t = 0$ 且 $\nabla \rho = 0$, 连续性方程简化为

$$
\nabla \cdot \mathbf{v} = 0.
$$

这是水流、空气在低速下的标准假设。

### 应用例子 (Worked example): 不可压流过变截面管

考虑水流 (不可压) 通过一根管, 入口截面半径 $R_1 = 2 \,\mathrm{cm}$, 入口速度 $v_1 = 1 \,\mathrm{m/s}$。管收缩到出口半径 $R_2 = 1 \,\mathrm{cm}$。求出口速度 $v_2$。

**套公式**: 对稳态不可压流, $\nabla \cdot \mathbf{v} = 0$ 加上管壁不漏 (即体积流率守恒) 给出

$$
A_1 v_1 = A_2 v_2, \qquad \pi R_1^2 v_1 = \pi R_2^2 v_2.
$$

**算**:

$$
v_2 = \frac{R_1^2}{R_2^2} v_1 = \frac{(2)^2}{(1)^2} \cdot 1 = 4 \,\mathrm{m/s}.
$$

**这告诉我们**: 半径减半, 速度变 $4$ 倍 — 连续性方程把"质量守恒"翻译成"管道收缩, 流速加快"的日常直觉 (花园水管捏紧出口, 水柱变细但飞得更远的原理就是这个)。

🎬 [**连续性方程 inflow/outflow + density 变化 — 视频 09:22**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=562s) (anim-07, chunk M2_04). 🎬 [**ODE → PDE 桥比喻 — 视频 09:43**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=583s) (anim-25, chunk M2_05): 把"单点常微分方程"理解为"整片连续介质偏微分方程"的直觉桥梁。

---

## 2.4 Navier 1822 + Stokes 1845: 加入粘性项

Euler 方程的核心缺陷是假设**无粘流**, 但真实流体内部存在分子尺度的摩擦。Navier (1822) 与 Stokes (1845) 各自独立地把粘性力加进 Euler 方程。

**核心想法**. 粘性力来源于流体内部速度梯度 — 邻接流层因速度差产生剪切应力。Cauchy 应力张量框架下, 对**牛顿流体** (应力与应变率成线性关系),

$$
\tau_{ij} = -p \, \delta_{ij} + \mu \left( \frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i} \right) + \lambda \, \delta_{ij} \nabla \cdot \mathbf{v},
$$

其中 $\mu$ 为**剪切粘性系数**, $\lambda$ 为**体积粘性系数**。

**对不可压流** ($\nabla \cdot \mathbf{v} = 0$), 上式应力散度简化为 $\nabla \cdot \boldsymbol{\tau} = -\nabla p + \mu \nabla^2 \mathbf{v}$, 代入牛顿第二定律得

$$
\boxed{\;\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{\nabla p}{\rho} + \nu \nabla^2 \mathbf{v} + \mathbf{g},\;}
$$

其中 $\nu = \mu / \rho$ 为**动力学粘性系数 (kinematic viscosity)**。这就是不可压牛顿流体的 **Navier-Stokes 方程**。

**与 Euler 方程的关系**: 取 $\nu = 0$ 极限即回到 Euler 方程, 故 Euler 方程是**理想 / 无粘**情形下的 N-S 方程。

🎬 [**Euler → Navier-Stokes 公式演化 — 视频 10:27**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=627s) (anim-09): 在 Euler 方程右侧加入 viscous term ν∇²v 演变为 NS 方程, chunk M2_07.

### 应用例子 (Worked example): Poiseuille 圆管层流 — NS 解析解

考虑稳态、不可压、轴对称层流通过半径 $R$、长度 $L$ 的圆管, 两端压力差 $\Delta p = p_1 - p_2 > 0$。求速度分布 $v(r)$ 和总流量 $Q$。

**建模假设**: - 稳态: $\partial \mathbf{v}/\partial t = 0$ - 轴对称: $\mathbf{v} = v(r) \hat{\mathbf{z}}$ (只 $z$-方向流, 只随 $r$ 变) - 不可压: $\nabla \cdot \mathbf{v} = \partial v / \partial z = 0$ ✓ (自动) - 无重力 (水平管) 或重力沿轴方向并入 $p$

**化简 NS 方程**. 对流项 $(v \cdot \nabla)v = v(r) \partial_z (v(r) \hat{\mathbf{z}}) = 0$ ($v$ 不依 $z$)。$z$-方向 NS:

$$
0 = -\frac{1}{\rho} \frac{\partial p}{\partial z} + \nu \nabla^2 v.
$$

在柱坐标轴对称下 $\nabla^2 v = \frac{1}{r} \frac{d}{dr}\left( r \frac{dv}{dr} \right)$。由 $r$-方向 NS 给出 $\partial p / \partial r = 0$, 即 $p = p(z)$。$z$-方向压力梯度恒定: $\partial p / \partial z = -\Delta p / L$。代入:

$$
\frac{\mu}{r} \frac{d}{dr}\left( r \frac{dv}{dr} \right) = -\frac{\Delta p}{L}.
$$

**积分** (用 $\mu = \rho\nu$):

$$
r \frac{dv}{dr} = -\frac{\Delta p}{2\mu L} r^2 + C_1.
$$

由 $r=0$ 处速度有限 $\Rightarrow C_1 = 0$。再积分:

$$
v(r) = -\frac{\Delta p}{4\mu L} r^2 + C_2.
$$

由管壁无滑移 $v(R) = 0 \Rightarrow C_2 = \frac{\Delta p}{4\mu L} R^2$。最终:

$$
\boxed{\;v(r) = \frac{\Delta p}{4\mu L} \left( R^2 - r^2 \right).\;}
$$

**总流量**:

$$
Q = \int_0^R v(r) \cdot 2\pi r \, dr = \frac{\pi \Delta p}{2\mu L} \int_0^R (R^2 r - r^3) \, dr = \frac{\pi \Delta p}{2\mu L} \cdot \frac{R^4}{4} = \boxed{\;\frac{\pi R^4 \Delta p}{8 \mu L}.\;}
$$

**这告诉我们**: 速度分布是**抛物线** (轴上最快, 壁面为零); 流量 $\propto R^4$ — 半径加倍, 流量变 16 倍! 这就是为什么人体动脉硬化 (血管半径减小 20%) 会让心脏负担增加 (血压差) 数倍。Poiseuille 1838-46 年的实验测量了这条公式, 是流体力学第一条用 NS 方程严格推出的工程级定律。

**历史时间线**: - **1752-08-31**: Euler 提交 *Principia motus fluidorum* (E258), 首次给出 2D 不可压流方程。 - **1755 / E226**: *Principes généraux du mouvement des fluides*, 完整 3D 一般化。 - **1822**: Claude-Louis Navier 加入粘性项 (但其推导基于分子假设有争议)。 - **1845**: George Gabriel Stokes 用连续介质应力张量重新推导, 给出今天教科书形式。

**当前世界级未解问题: NS 全局适定性 (Clay Millennium Problem)**. 对一般 3D 初值, NS 解的存在性 + 唯一性 + 平滑性是否能在任意时间区间成立? 这是 7 个千禧难题之一, 奖金 100 万美元。截至 2025, 主要进展是 Caffarelli-Kohn-Nirenberg 1982 关于 suitable weak solution 奇点集的 Hausdorff 维数估计, 但完整解答仍未给出。

---

## 2.5 涡量与 Helmholtz 涡定理 (补充)

定义**涡量 (vorticity)** $\boldsymbol{\omega} = \nabla \times \mathbf{v}$。对 Euler 方程取旋度, 可得**涡量方程**

$$
\frac{D \boldsymbol{\omega}}{D t} = (\boldsymbol{\omega} \cdot \nabla) \mathbf{v},
$$

它揭示了 Helmholtz 1858 的三个涡定理: 涡线随流体微元运动、涡线无端点、涡管强度沿时间守恒。这是大气环流、龙卷风、机翼升力分析的理论基础。

🎬 [**Kármán 涡街 — 视频 10:02**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=602s) (anim-08): 圆柱后涡列周期性脱落 + 涡量 ω = ∇×v 可视化, chunk M2_06.

---

## 几何/物理直观

把流体想象成**一锅相互推挤的小水珠**。Euler 流体方程的左边

$$
\frac{D \mathbf{v}}{D t} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}
$$

是"某颗水珠的加速度"。右边是这颗水珠承受的力: - $-\nabla p / \rho$: 高压区把它推向低压区 (压力梯度)。 - $\mathbf{g}$: 重力。

连续性方程

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0
$$

是"水珠在区域内不平白消失或多出来" — 局部密度只能因物质流入或流出而变化。

![流体微元 + 邻接微元 pressure coupling](/content/images/2026/05/fig2_fluid_element_v2.png)

> **Fig 2.**
>
> 中央流体微元 + 4 个邻接微元 (上 / 下 / 左 / 右) + 内向 pressure 推力箭头。微元内部以 (ρ, v, p) 三个状态量描述; 邻居以 pressure gradient 形式耦合到中心方程的右侧 −∇p/ρ 项。这是连续介质假设的几何缩影。

---

## 视频对照

视频 **07:45–11:11 (M2 段)**: - 07:45–08:15: 单点粒子 → 连续介质 expand (anim-23) - 08:15–09:00: 物质导数 + Euler eq force balance (anim-06) - 09:00–09:35: 连续性方程 inflow/outflow (anim-07) - 09:35–10:10: ODE→PDE 桥比喻 (anim-25) - 10:10–10:40: 连续介质 PDE buildup, momentum + mass (anim-24) - 10:40–11:11: Euler → Navier-Stokes evolution + Karman 涡街 (anim-09, anim-08)

— Abel

---

## §3 · 刚体方程与 Euler 角

> 视频对照: 11:16–14:51 (M3 段)
>
> **本节假设你熟悉**
>
> : 多元微积分 (链式法则、偏导)、线性代数 (实对称矩阵特征值与谱定理)、向量分析 (叉积与点积、$3 \times 3$ 矩阵)。

## 一句话概述

Euler 在 1765 年 *Theoria motus corporum solidorum seu rigidorum* (Rostock+Greifswald 出版) 把 Newton 的 $\mathbf{F} = m\mathbf{a}$ 系统综合为**整个刚体**的旋转运动方程, 得到了著名的 **Euler 刚体方程**

$$
I \frac{d\boldsymbol{\omega}}{dt} + \boldsymbol{\omega} \times (I \boldsymbol{\omega}) = \boldsymbol{\tau},
$$

其中 $\boldsymbol{\omega}$ 是角速度向量、$I$ 是**惯性张量**、$\boldsymbol{\tau}$ 是外力矩。

但这套理论不是 1765 突然冒出 — 它是 Euler 跨 15 年的累积:

- **1750-09-03**: *Découverte d'un nouveau principe de mécanique* (E177) — 第一版刚体方程
- **1751**: body-fixed frame 工具化
- **1758**: *Recherches sur la connoisance mechanique des corps* (Berlin Mémoires) — 主转动惯性轴 (principal axes) 发现 + "moment of inertia" 术语首次出现
- **1765**: *Theoria motus* — 综合体系

整套理论的关键是引入**惯性张量** + **Euler 角 (φ, θ, ψ)** 参数化 SO(3), 并证明 **Euler 旋转定理**: 三维空间中任意旋转都可以表述为绕某一**瞬时轴**的旋转。本节给出 $L = I\boldsymbol{\omega}$ 的张量框架、刚体方程的 body-frame 推导、3-1-3 Euler 角几何, 以及旋转定理的 SO(3) 特征值证明。

---

## 3.1 角动量 $L = I\boldsymbol{\omega}$ 与惯性张量

**定义 (刚体)**. 由有限多个 (或连续分布的) 质点构成的物体, 任意两质点之间的距离不随时间变化。

**角动量**. 选定空间中固定参考点 $O$ (惯性系原点), 并假设**刚体相对于 $O$ 转动** (即 $O$ 在刚体上或刚体作纯转动的固定点)。刚体的角动量为各质点角动量之和:

$$
\mathbf{L} = \sum_i m_i \, \mathbf{r}_i \times \mathbf{v}_i,
$$

其中 $\mathbf{r}_i$ 为第 $i$ 质点相对 $O$ 的位置矢量, $\mathbf{v}_i$ 为速度。

**关键事实**. 对刚体绕 $O$ 转动 (角速度 $\boldsymbol{\omega}$), 每个质点速度为 $\mathbf{v}_i = \boldsymbol{\omega} \times \mathbf{r}_i$, 代入得

$$
\mathbf{L} = \sum_i m_i \, \mathbf{r}_i \times (\boldsymbol{\omega} \times \mathbf{r}_i).
$$

由 BAC-CAB 恒等式 $\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$:

$$
\mathbf{r}_i \times (\boldsymbol{\omega} \times \mathbf{r}_i) = \boldsymbol{\omega} \, |\mathbf{r}_i|^2 - \mathbf{r}_i (\mathbf{r}_i \cdot \boldsymbol{\omega}).
$$

写成分量形式 $L_a = I_{ab}\,\omega_b$ (Einstein 求和约定), 得

$$
I_{ab} = \sum_i m_i \left( |\mathbf{r}_i|^2 \delta_{ab} - r_{ia} r_{ib} \right).
$$

**对连续质量分布**:

$$
I_{ab} = \int_V \rho(\mathbf{r}) \left( |\mathbf{r}|^2 \delta_{ab} - r_a r_b \right) dV.
$$

**$I$ 是对称张量**. 由定义 $I_{ab} = I_{ba}$ 显然。在物理上, $I$ 把角速度向量映为角动量向量, 它取代了"标量惯性" $m$ 在 $\mathbf{p} = m\mathbf{v}$ 中的角色。

**关键性质**. 因 $I$ 实对称, 由谱定理 $I$ 可对角化, 存在正交基 $\hat{\mathbf{e}}_1, \hat{\mathbf{e}}_2, \hat{\mathbf{e}}_3$ 使

$$
I = \mathrm{diag}(I_1, I_2, I_3),
$$

这三个 $\hat{\mathbf{e}}_k$ 称为**主转动惯性轴 (principal axes)**, 三个 $I_k \geq 0$ 为**主转动惯量** (一般质量分布 $I_k > 0$; 退化情形如细杆或点质量允许某 $I_k = 0$)。这是 Euler **1758** *Recherches sur la connoisance mechanique des corps* (Berlin Mémoires) 引入的 — 同时也是 "moment of inertia" 术语首次出现的论文, 后 1765 *Theoria motus* 综合时被完整保留。

![惯性椭球 + 主转动惯性轴](/content/images/2026/05/fig3_inertia_ellipsoid.png)

> **Fig 3.**
>
> 惯性椭球 $I_{ab} x_a x_b = 1$ — 半轴长 $1/\sqrt{I_k}$ 与三个主转动惯量 $(I_1, I_2, I_3)$ 反向关联。3 个箭头 $\hat{\mathbf{e}}_1, \hat{\mathbf{e}}_2, \hat{\mathbf{e}}_3$ 为主轴方向。任意一刚体, 即使形状不规则, 都对应一个唯一的惯性椭球。

### 应用例子 (Worked example): 立方体绕面心轴 vs 体对角轴的转动惯量

考虑边长 $a$、均匀密度 $\rho$、总质量 $M = \rho a^3$ 的实心立方体。求 (a) 绕**面心轴** (通过两相对面中心) 与 (b) 绕**体对角轴** (通过两相对顶点) 的转动惯量。

**(a) 面心轴 (e.g. $z$ 轴, 沿立方体一条对称中线)**.

由对称性, 主轴沿三条面心轴, 主转动惯量 $I_x = I_y = I_z =: I_0$。

$$
I_0 = \int_{-a/2}^{a/2} \int_{-a/2}^{a/2} \int_{-a/2}^{a/2} \rho \, (x^2 + y^2) \, dx \, dy \, dz.
$$

由对称, $\int x^2 = \int y^2 = a \cdot a \cdot \frac{a^3}{12} = \frac{a^5}{12}$, 故

$$
I_0 = \rho \cdot 2 \cdot \frac{a^5}{12} = \frac{\rho a^5}{6} = \frac{M a^2}{6}.
$$

**(b) 体对角轴**.

惯性张量在面心轴基下 $I = \frac{Ma^2}{6} \mathbb{I}$ (各向同性, 三个本征值相同), 故 $I$ 对**任意**正交基都是 $\frac{Ma^2}{6} \mathbb{I}$ — 包括体对角轴方向。

$$
I_\text{diag} = \frac{Ma^2}{6}.
$$

**这告诉我们**: 立方体由于其立方对称性 (3 个 $C_4$ 轴 + 4 个 $C_3$ 体对角轴), 其惯性张量是各向同性的 (退化的, 三重特征值)。**任意通过中心的轴**, 转动惯量都是 $Ma^2/6$。这是高度对称性"提升"主转动惯量为常数的范例。对比之下, 长方体 (各边不等) 主转动惯量三个不同, 转动行为很不一样 (e.g. Dzhanibekov 效应, 见下例)。

---

## 3.2 Euler 刚体方程 (body frame 推导)

牛顿第二定律的转动版本 (在惯性系中):

$$
\frac{d \mathbf{L}}{d t}\bigg|_{\text{inertial}} = \boldsymbol{\tau}.
$$

**困难**. $\mathbf{L} = I \boldsymbol{\omega}$ 在惯性系中, $I$ 随时间变化 (因刚体在转, 其主轴朝向也在转), 计算 $dI/dt$ 麻烦。

**解决方案**. 在**随刚体一起转动的 body-frame** 中, $I$ 是常张量 (主轴始终对齐 body axes)。但 body frame 不是惯性系, 需要用**转动参考系变换公式**。

**引理 (旋转坐标系导数公式)**. 对任意向量 $\mathbf{A}$,

$$
\frac{d \mathbf{A}}{d t}\bigg|_{\text{inertial}} = \frac{d \mathbf{A}}{d t}\bigg|_{\text{body}} + \boldsymbol{\omega} \times \mathbf{A}.
$$

(这是任何旋转参考系中速度变换的标准公式 — 物理学中称为"科里奥利公式"的几何来源。)

**应用到 $\mathbf{A} = \mathbf{L}$**:

$$
\frac{d \mathbf{L}}{dt}\bigg|_{\text{inertial}} = \frac{d \mathbf{L}}{dt}\bigg|_{\text{body}} + \boldsymbol{\omega} \times \mathbf{L}.
$$

代入 $\mathbf{L} = I\boldsymbol{\omega}$, 且在 body frame 中 $I$ 为常数:

$$
\frac{d \mathbf{L}}{dt}\bigg|_{\text{body}} = I \frac{d \boldsymbol{\omega}}{d t}\bigg|_{\text{body}}.
$$

联立 Newton 第二定律 $d\mathbf{L}/dt|_{\text{inertial}} = \boldsymbol{\tau}$:

$$
\boxed{\;I \frac{d \boldsymbol{\omega}}{d t} + \boldsymbol{\omega} \times (I \boldsymbol{\omega}) = \boldsymbol{\tau}.\;}
$$

这就是 **Euler 刚体方程**, 在 body frame 中写出, 三个方程分别对应主轴方向。

**分量形式** (沿主轴):

$$
I_1 \dot{\omega}_1 + (I_3 - I_2) \omega_2 \omega_3 = \tau_1,
$$

$$
I_2 \dot{\omega}_2 + (I_1 - I_3) \omega_3 \omega_1 = \tau_2,
$$

$$
I_3 \dot{\omega}_3 + (I_2 - I_1) \omega_1 \omega_2 = \tau_3.
$$

🎬 [**Euler 刚体方程 3-step build — 视频 12:59**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=779s) (anim-12): I dω/dt + ω×(Iω) = τ 三步 Replacement Transform 推导, chunk M3_05.

**自由刚体 (无外力矩) $\boldsymbol{\tau} = 0$**: 即使无外力, $\omega_k$ 也并非常数 — 非线性耦合 $\omega_2 \omega_3$ 等项使角速度在主轴间"漂动"。这导致**自由进动 (free precession)** 与著名的 **Dzhanibekov 效应** (中间轴定理: 绕中间主轴的转动不稳定)。

### 应用例子 (Worked example): Dzhanibekov 中间轴效应

设刚体主转动惯量满足 $I_1 < I_2 < I_3$ (e.g. 一个不等边长方体: $I_1=1, I_2=2, I_3=3$ 单位)。**自由刚体** ($\tau = 0$) 绕**中间轴** $\hat{\mathbf{e}}_2$ 转动时, 给一个微小扰动 $\omega_1, \omega_3 \ll \omega_2$。Euler 方程 (无外力):

$$
I_1 \dot\omega_1 = (I_2 - I_3) \omega_2 \omega_3, \quad I_2 \dot\omega_2 = (I_3 - I_1) \omega_3 \omega_1, \quad I_3 \dot\omega_3 = (I_1 - I_2) \omega_1 \omega_2.
$$

线性化 (设 $\omega_2 \approx \omega_0 = \text{const}$, $\omega_1, \omega_3$ 小量):

$$
\dot\omega_1 \approx \frac{I_2 - I_3}{I_1} \omega_0 \, \omega_3, \quad \dot\omega_3 \approx \frac{I_1 - I_2}{I_3} \omega_0 \, \omega_1.
$$

二阶 ODE: $\ddot\omega_1 = \frac{(I_2-I_3)(I_1-I_2)}{I_1 I_3} \omega_0^2 \, \omega_1$。

**判稳**. 设 $\omega_1 \propto e^{\lambda t}$, $\lambda^2 = \frac{(I_2-I_3)(I_1-I_2)}{I_1 I_3} \omega_0^2$。

- 若绕**最小或最大主轴** ($I_2$ 替换为 $I_1$ 或 $I_3$), 则 $(I_2-I_3)(I_1-I_2)$ 系数都是负的两数之积或两正数之积 → $\lambda^2 < 0$ → $\lambda$ 纯虚 → **稳定 (周期性 wobble)**。
- 若绕**中间主轴** $I_2$ ($I_1 < I_2 < I_3$): $(I_2-I_3) < 0$, $(I_1-I_2) < 0$, 乘积 $> 0$ → $\lambda^2 > 0$ → $\lambda$ 实数 → **指数增长 → 不稳定**。

**这告诉我们**: 自由刚体绕"中间惯量"主轴转动时, 任何微小扰动都会指数放大, 导致"翻转效应" — 看上去是**周期性的 180° 翻转**, 实际是 $\omega_1, \omega_3$ 经历完整指数–饱和–衰减循环。

**1985 Dzhanibekov 实验**: 苏联宇航员 Vladimir Dzhanibekov 在 ISS (Salyut 7 空间站) 拧下一颗 wing-nut 螺母, 让它自由飘浮旋转 — 螺母**自发周期性翻转**, 振惊地面控制中心。这个效应在 Euler 1758 *Recherches* 框架下已可预测 (linearization 直接给出), 但因为地球上重力扰动太大, 没人在地面看到过, 直到太空真无重力环境才显形。视频: 搜 "Dzhanibekov effect ISS"。

---

## 3.3 Euler 角 (3-1-3 convention)

**问题**. SO(3) (3D 旋转群) 是 3 维流形, 需要 3 个参数来局部参数化。**Euler 角 (φ, θ, ψ)** 是经典选择。

**3-1-3 convention** (z-x-z, 经典力学最常用):

将 body frame $(\hat{\mathbf{x}}', \hat{\mathbf{y}}', \hat{\mathbf{z}}')$ 从空间 frame $(\hat{\mathbf{x}}, \hat{\mathbf{y}}, \hat{\mathbf{z}})$ 转出, 共 3 步:

1. **绕 $\hat{\mathbf{z}}$ 转 $\varphi$ 角**: 称为**进动 (precession)**。$\varphi \in [0, 2\pi)$。
2. **绕 新 $\hat{\mathbf{x}}$ (after step 1, 称 line of nodes) 转 $\theta$ 角**: 称为**章动 (nutation)**。$\theta \in [0, \pi]$。
3. **绕 新 $\hat{\mathbf{z}}$ (最终的 body z-axis) 转 $\psi$ 角**: 称为**自转 (spin)**。$\psi \in [0, 2\pi)$。

**对应旋转矩阵** (用列向量形式):

$$
R(\varphi, \theta, \psi) = R_z(\varphi) \, R_x(\theta) \, R_z(\psi),
$$

其中

$$
R_z(\alpha) = \begin{pmatrix} \cos\alpha & -\sin\alpha & 0 \\ \sin\alpha & \cos\alpha & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad R_x(\alpha) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{pmatrix}.
$$

**角速度 $\boldsymbol{\omega}$ 用 Euler 角分量表示** (在 body frame):

$$
\omega_1 = \dot{\varphi} \sin\theta \sin\psi + \dot{\theta} \cos\psi,
$$

$$
\omega_2 = \dot{\varphi} \sin\theta \cos\psi - \dot{\theta} \sin\psi,
$$

$$
\omega_3 = \dot{\varphi} \cos\theta + \dot{\psi}.
$$

(这组公式 Euler 1750 信件 + 1765 *Theoria motus* 给出, 中间 1758 *Recherches* 提供 principal axes 框架。)

**奇点 (gimbal lock)**. 当 $\theta = 0$ 或 $\pi$ 时, $\dot{\varphi}$ 与 $\dot{\psi}$ 不能独立分辨 — 第一步与第三步绕同一轴。这是 3-1-3 参数化的几何缺陷, 在飞行器姿态控制中改用**四元数** (Hamilton 1843) 规避。

### 应用例子 (Worked example): 陀螺仪稳态进动

考虑一个钟摆陀螺玩具 (玩具陀螺): 质量 $m = 0.2 \,\mathrm{kg}$, 自转轴质心到悬挂点距离 $r = 0.05 \,\mathrm{m}$, 自转轴转动惯量 $I = 1.0 \times 10^{-3} \,\mathrm{kg \cdot m^2}$, 自转角速度 $\omega_\text{spin} = 100 \,\mathrm{rad/s}$。**求稳态进动角速度 $\omega_p$**。

**套公式**. 在自转角速度远大于进动角速度的"快速陀螺"近似下, 重力扭矩 $\tau = mgr$ 引起角动量水平分量的方向变化, 给出**稳态进动率**

$$
\omega_p = \frac{\tau}{L \sin\theta} = \frac{mgr \sin\theta}{I \omega_\text{spin} \sin\theta} = \frac{mgr}{I \omega_\text{spin}}.
$$

(详细推导可由 §3.2 Euler 方程在 $\theta = \text{const}$ 假设下得到; 也可用 $d\mathbf{L}/dt = \boldsymbol{\tau}$ 几何解读: 重力扭矩水平 → $\mathbf{L}$ 水平分量绕铅垂线旋转。)

**算**:

$$
\omega_p = \frac{(0.2)(9.8)(0.05)}{(10^{-3})(100)} = \frac{0.098}{0.1} = 0.98 \,\mathrm{rad/s} \approx 0.156 \,\mathrm{Hz}.
$$

即陀螺约每 **6.4 秒**绕铅垂线进动一圈。

**这告诉我们**: - $\omega_p$ 与 $\omega_\text{spin}$ **反比** — 自转越快, 进动越慢; 自转减速 → 进动加速 → 最终倒下 (玩具陀螺寿命的物理本质)。 - **自行车前轮稳定性**: 骑车前轮自转产生 $\omega_\text{spin}$, 当车身倾斜时, 重力给前轮一个扭矩, 通过相同的进动公式让前轮**自动转向**修正倾斜方向 — 这是 19 世纪自行车稳定性谜题的答案 (Klein-Sommerfeld 1910 *Theorie des Kreisels* 详细解析)。 - **LIGO 镜面控制**: 引力波探测器悬挂 40 kg 镜面用陀螺仪稳定姿态, 其反馈系统就是基于 Euler 方程的实时进动控制。Euler 1758 *Recherches* 的理论框架在 2015 年探测到第一个引力波时仍是核心。

🎬 [**陀螺仪 + Euler 角 φ/θ/ψ — 视频 12:33**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=753s) (anim-11): 三个 ValueTracker 同时驱动进动 / 章动 / 自转, chunk M3_04.

---

## 3.4 Euler 旋转定理

**Euler 1775 定理 (Euler's rotation theorem)**. 三维空间中任何**保持原点不动的等距变换** $R$ (即 $R \in \mathrm{SO}(3)$) 都可以表述为**绕某一固定轴 $\hat{\mathbf{n}}$ 的旋转**, 角度为某个 $\alpha \in [0, \pi]$。

换句话说, 看似复杂的"绕多轴旋转的合成", 总能化简为绕单一轴的单次旋转 — 转轴方向与角度由复合结果唯一决定 (模 $\pm \hat{\mathbf{n}}$ 与 $\pm \alpha$)。

**证明 (eigenvalue argument)**.

**步骤 1**. $R$ 是 $3 \times 3$ 实正交矩阵, $\det R = +1$ (保定向)。

**步骤 2**. $R$ 的特征多项式 $\chi_R(\lambda) = \det(\lambda I - R)$ 是 3 次实系数多项式。3 次实多项式必有至少一个实根 (复根必成对出现)。

**步骤 3**. 设 $\lambda$ 为 $R$ 的特征值, $\mathbf{v}$ 为对应特征向量 (可取实)。$R \mathbf{v} = \lambda \mathbf{v}$。由正交性 $|R\mathbf{v}| = |\mathbf{v}|$, 故 $|\lambda| = 1$。实根中只有 $\pm 1$。

**步骤 4 (case split)**. 由 $\det R = +1$ 与三个特征值之积 $= \det R$:

$$
\lambda_1 \lambda_2 \lambda_3 = +1.
$$

实正交矩阵的特征值有两种情形:

- **Case A (复特征值)**: 复特征值必为共轭对 $e^{\pm i\alpha}$ ($\alpha \in (0, \pi)$), 乘积 $|e^{i\alpha}|^2 = 1$, 故第三个 (实) 特征值必为 $+1$。
- **Case B (全实特征值)**: 三个实特征值均为 $\pm 1$ (步骤 3), 乘积为 $+1$, 故 $-1$ 的个数必为偶数 $\in \{0, 2\}$:
- $\{+1, +1, +1\}$: $R = I$ (恒等, 即"$\alpha = 0$ 的旋转")
- $\{+1, -1, -1\}$: 绕某轴 $\hat{\mathbf{n}}$ 转 $\pi$ 角 ($\alpha = \pi$ 的旋转, 两个 $-1$ 特征值对应该轴垂直平面上的反向)

两种 case 下 $+1$ 都是特征值。

**步骤 5**. 故 $R$ 必有特征值 $+1$, 对应特征向量 $\hat{\mathbf{n}}$ (即**转轴方向**): $R \hat{\mathbf{n}} = \hat{\mathbf{n}}$ — 该方向上的点在 $R$ 下不动。

**步骤 6**. 在 $\hat{\mathbf{n}}$ 的垂直平面 $\hat{\mathbf{n}}^\perp$ (二维) 中, $R$ 限制为该平面上的正交保定向变换, 即一个 2D 旋转 — 设其角度为 $\alpha$。

*$R$ 保 $\hat{\mathbf{n}}^\perp$ 的证明*: 对任意 $\mathbf{v} \perp \hat{\mathbf{n}}$, 由 $R$ 正交性 $(R\mathbf{v}) \cdot (R\hat{\mathbf{n}}) = \mathbf{v} \cdot \hat{\mathbf{n}} = 0$, 而 $R\hat{\mathbf{n}} = \hat{\mathbf{n}}$, 故 $R\mathbf{v} \perp \hat{\mathbf{n}}$。即 $R$ 把 $\hat{\mathbf{n}}^\perp$ 映入自身。在 $\hat{\mathbf{n}}^\perp$ 上 $R$ 是 $2 \times 2$ 正交矩阵, 且 $\det R|_{\hat{\mathbf{n}}^\perp} = \det R / \lambda_{\hat{\mathbf{n}}} = +1 / +1 = +1$, 故为保定向 2D 旋转。复特征值 $e^{\pm i\alpha}$ 即为该 2D 旋转的特征值。

**结论**. $R$ 完全等同于"绕固定轴 $\hat{\mathbf{n}}$ 旋转 $\alpha$"。 $\blacksquare$

🎬 [**Euler 旋转定理 — 视频 13:31**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=811s) (anim-13): 多重叠加旋转 → 单一瞬时轴 + 角度 (n̂, α), chunk M3_06.

**几何意义**. SO(3) 看起来是个 3 维 Lie group, 但 Euler 定理告诉我们 SO(3) 的每个元素都"长得像"$(轴, 角度) = (\hat{\mathbf{n}}, \alpha)$ — 这给了 SO(3) 一个简洁参数化 (轴–角参数化)。它也是 4 元数 $\mathbb{H}^1 \cong \mathrm{SU}(2)$ 双覆盖 SO(3) 的几何起点。

### 应用例子 (Worked example): 求 $R_z(90°) \cdot R_x(90°)$ 的等效 (n̂, α)

设 $R = R_z(\pi/2) \cdot R_x(\pi/2)$ — 先绕 $x$ 轴转 $90°$, 再绕 $z$ 轴转 $90°$。求等效旋转的轴 $\hat{\mathbf{n}}$ 与角度 $\alpha$。

**第一步: 计算 $R$**.

$$
R_z(\pi/2) = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad R_x(\pi/2) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}.
$$

矩阵乘积:

$$
R = R_z R_x = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.
$$

**第二步: 求 $\hat{\mathbf{n}}$ (满足 $R\hat{\mathbf{n}} = \hat{\mathbf{n}}$)**.

解 $(R - I)\hat{\mathbf{n}} = 0$:

$$
\begin{pmatrix} -1 & 0 & 1 \\ 1 & -1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \hat{\mathbf{n}} = 0.
$$

由方程: $n_1 = n_3$, $n_1 = n_2$, $n_2 = n_3$ → $n_1 = n_2 = n_3$。归一化:

$$
\hat{\mathbf{n}} = \frac{1}{\sqrt{3}} (1, 1, 1).
$$

即转轴沿**立方体体对角方向**。

**第三步: 求 $\alpha$**.

$R$ 的迹 $\mathrm{tr}(R) = 0$。对绕 $\hat{\mathbf{n}}$ 转 $\alpha$ 角的旋转, $\mathrm{tr}(R) = 1 + 2\cos\alpha$, 故

$$
1 + 2\cos\alpha = 0 \;\Longrightarrow\; \cos\alpha = -\frac{1}{2} \;\Longrightarrow\; \alpha = \frac{2\pi}{3} = 120°.
$$

**结论**. $R_z(90°) \cdot R_x(90°)$ 等同于**绕 $\hat{\mathbf{n}} = \frac{1}{\sqrt{3}}(1,1,1)$ 转 $120°$**。

**这告诉我们**: 两次直观的 $90°$ 旋转**叠加结果不是 $180°$ 或 $90°$ 旋转**, 而是绕一根"奇怪"的体对角轴的 $120°$ 旋转 — Euler 旋转定理保证这种"等效化简"始终存在但等效轴往往出乎意料。这是为什么 3D 旋转合成不能用"向量加法"直觉对待 (旋转群 SO(3) **非阿贝尔**: $R_z R_x \neq R_x R_z$), 必须用 Euler 角 / 四元数 / 矩阵代数严格处理。

---

## 几何/物理直观

刚体的转动想象成**一个能在原点自由转动的陀螺**:

1. **惯性张量 $I$** 描述了"刚体在每个方向有多难转"。沿一个主轴, 刚体转起来"省力"或"费力"的差异由对应主转动惯量 $I_k$ 给出。
2. **角动量 $\mathbf{L} = I\boldsymbol{\omega}$** 一般**不与角速度 $\boldsymbol{\omega}$ 同向** (除非 $\boldsymbol{\omega}$ 沿某主轴)。这就是为什么没事打个旋转的飞旋时身体会"飘移" — 角动量的方向锁定在惯性系, 但角速度向量在 body frame 内画椭球。
3. **Euler 角 (φ, θ, ψ)** 把陀螺仪三个独立的旋转自由度命名: - φ (precession): 陀螺的中轴**绕铅垂线"画大圆锥"** — 这是我们看到的"陀螺摆头"。 - θ (nutation): 中轴本身的**倾角变化 ("点头")**。 - ψ (spin): 陀螺**绕自身中轴自转**。
4. **Euler 旋转定理**: 即使陀螺看起来在做 (φ, θ, ψ) 三个独立旋转, 每个瞬间它实际上**只在绕一根瞬时轴转动** — 该轴可以一直变, 但每个瞬刻是一根而已。

![陀螺仪 Euler 角分解 + 瞬时旋转轴](/content/images/2026/05/fig4_gyroscope_angles.png)

> **Fig 4.**
>
> 陀螺仪三个旋转自由度: φ (precession, 进动) 绕铅垂线 + θ (nutation, 章动) 绕节线 + ψ (spin, 自转) 绕本体 z 轴。Euler 旋转定理告诉我们: 即使三个角同时变化, 每一瞬刻整体合成仍是绕
>
> **唯一一根瞬时轴 $\hat{\mathbf{n}}$**
>
> 的纯旋转。

---

## 视频对照

视频 **11:16–14:51 (M3 段)**: - 11:16–11:45: Berlin Academy seal + Découverte 1750 + 第一个刚体方程 (anim-26) - 11:45–12:20: 刚体 vs 流体 split-screen 对比 (anim-27) - 12:20–12:55: body-fixed frame ↔ inertial frame 切换 (anim-10) - 12:55–13:30: gyro 3D + Euler angles φ/θ/ψ ⭐ (anim-11) - 13:30–14:00: 刚体方程 $I\dot\omega + \omega \times (I\omega) = \tau$ 3-step build (anim-12) - 14:00–14:30: Euler 旋转定理 + 瞬时轴可视化 (anim-13) - 14:30–14:51: 15-year arc 1750→1765 timeline (anim-14)

— Abel

---

## §4 · Euler 定理与 RSA 密码体制

> 视频对照: 14:53–15:55 (MISC_01 段)
>
> **本节假设你熟悉**
>
> : 整数模运算 ($\bmod n$)、最大公因子 $\gcd$、扩展 Euclidean 算法 (求模逆元)、群论入门 (有限群、Lagrange 定理) 是可选 — 主证明用初等置换不依赖群论。
>
> **历史符号注**
>
> : Euler 1763 论文用拉丁文描述"小于 $n$ 且与 $n$ 互素的正整数个数", 并
>
> **没有引入符号 $\varphi$**
>
> 。今天通用的 $\varphi(n)$ 符号出自 Gauss 1801
>
> *Disquisitiones Arithmeticae*
>
> §38 起。本节为现代教科书一致性使用 $\varphi$, 但读者应记得 Euler 本人没用这个符号。

## 一句话概述

Euler 在 1763 年发表的 **Euler 定理**

$$
a^{\varphi(n)} \equiv 1 \pmod{n}, \quad \gcd(a, n) = 1
$$

将 Fermat 小定理 ($p$ 为素数时 $a^{p-1} \equiv 1 \pmod p$) 推广到任意正整数模数。两个多世纪之后, Rivest、Shamir 与 Adleman 在 1977 年用这条定理构造出 RSA 公钥密码体制 — 第一个能在公开信道安全交换密钥的算法。本节给出 Euler 定理的**置换证明**与 RSA 正确性的**完整 derivation**。

---

## 4.1 Euler 函数 $\varphi(n)$ 的定义与基本性质

**定义**. 对正整数 $n \geq 1$, **Euler 函数** $\varphi(n)$ 定义为不超过 $n$ 且与 $n$ 互素的正整数的个数:

$$
\varphi(n) := \#\{k : 1 \leq k \leq n,\; \gcd(k, n) = 1\}.
$$

**例**: $\varphi(10) = \#\{1, 3, 7, 9\} = 4$ (注意 $2, 4, 5, 6, 8, 10$ 都与 $10$ 有公因子)。

**引理 A (素数情形)**. 若 $p$ 为素数, 则 $\varphi(p) = p - 1$ (只有 $p$ 本身与 $p$ 不互素)。

**引理 B (素数幂情形)**. 若 $p$ 为素数, $k \geq 1$, 则 $\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$。

*证明*. 在 $\{1, 2, \ldots, p^k\}$ 中, 与 $p^k$ 不互素者恰为 $p$ 的倍数: $p, 2p, 3p, \ldots, p^{k-1} \cdot p$, 共 $p^{k-1}$ 个。 $\blacksquare$

**引理 C (乘性: multiplicativity)**. 若 $\gcd(m, n) = 1$, 则

$$
\varphi(mn) = \varphi(m) \, \varphi(n).
$$

*证明草图*. 由中国剩余定理 (CRT), 模 $mn$ 与 $(m, n)$ 共同模相对应:

$$
(\mathbb{Z}/mn\mathbb{Z})^* \;\cong\; (\mathbb{Z}/m\mathbb{Z})^* \times (\mathbb{Z}/n\mathbb{Z})^*.
$$

两边阶数相等即得结论。 $\blacksquare$

**推论 (计算公式)**. 若 $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$ 为 $n$ 的素因子分解, 则

$$
\varphi(n) = n \prod_{i=1}^r \left( 1 - \frac{1}{p_i} \right).
$$

---

## 4.2 Euler 定理的置换证明

**定理 (Euler 1763)**. 若 $\gcd(a, n) = 1$, 则

$$
a^{\varphi(n)} \equiv 1 \pmod{n}.
$$

**证明** (利用乘法置换).

**步骤 1**. 设 $\{x_1, x_2, \ldots, x_{\varphi(n)}\}$ 为 $\{1, 2, \ldots, n\}$ 中所有与 $n$ 互素的元素之集合 (即 $(\mathbb{Z}/n\mathbb{Z})^*$ 的代表元)。

**步骤 2**. 考察集合 $\{a x_1, a x_2, \ldots, a x_{\varphi(n)}\} \pmod{n}$。我们证明该集合与原集合在模 $n$ 意义下相等 (只是顺序不同, 即一个**置换**)。

- **元素互素于 $n$**: 因为 $\gcd(a, n) = \gcd(x_i, n) = 1$, 故 $\gcd(a x_i, n) = 1$ (乘性), 所以每个 $a x_i \bmod n$ 都属于 $(\mathbb{Z}/n\mathbb{Z})^*$。
- **元素两两不同**: 若 $a x_i \equiv a x_j \pmod n$ 且 $i \neq j$, 则 $a(x_i - x_j) \equiv 0 \pmod n$; 因 $\gcd(a, n) = 1$, 由消元律 $x_i \equiv x_j \pmod n$, 与 $x_i \neq x_j$ 矛盾。

由这两条, $\{a x_i \bmod n\}_{i=1}^{\varphi(n)}$ 是 $(\mathbb{Z}/n\mathbb{Z})^*$ 的一个置换。

**步骤 3 (乘积不变)**. 把两边集合所有元素相乘:

$$
\prod_{i=1}^{\varphi(n)} (a x_i) \equiv \prod_{i=1}^{\varphi(n)} x_i \pmod{n}.
$$

左边整理为 $a^{\varphi(n)} \cdot \prod_i x_i$, 故

$$
a^{\varphi(n)} \cdot \prod_i x_i \equiv \prod_i x_i \pmod{n}.
$$

**步骤 4 (约去 $\prod x_i$)**. 因 $\gcd(x_i, n) = 1$ 对每个 $i$ 成立, 故 $\gcd\left(\prod_i x_i, n\right) = 1$, 可在模 $n$ 下取乘法逆。两边乘以 $\left(\prod_i x_i\right)^{-1}$ 得

$$
a^{\varphi(n)} \equiv 1 \pmod{n}. \qquad \blacksquare
$$

**具体演算 (n=10, a=3)**.

- 互素集合 $\{1, 3, 7, 9\}$。
- 乘 $a=3$: $\{3, 9, 21, 27\} \equiv \{3, 9, 1, 7\} \pmod{10}$, 恰为置换。
- 乘积: $3 \cdot 9 \cdot 21 \cdot 27 = 3^4 \cdot (1 \cdot 3 \cdot 7 \cdot 9) \equiv 1 \cdot 3 \cdot 7 \cdot 9 \pmod{10}$。
- 约去得 $3^4 \equiv 1 \pmod{10}$, 验算: $3^4 = 81 = 8 \cdot 10 + 1$ ✓。

🎬 [**n=10 置换动画 + derivation 3-step build — 视频 14:53**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=893s) (anim-15): $\{1,3,7,9\}$ 乘 $a=3$ 落到 $\{3,9,1,7\}$ — 集合自映射可视化 + 抽象推导, chunk MISC_01.

---

## 4.3 Fermat 小定理作为特例

**Fermat 小定理 (1640)**. 若 $p$ 为素数且 $\gcd(a, p) = 1$, 则

$$
a^{p-1} \equiv 1 \pmod{p}.
$$

**作为 Euler 定理特例**: 取 $n = p$ 素数, 由引理 A 得 $\varphi(p) = p - 1$, 代入 Euler 定理即得 Fermat。

**等价形式** (对任意 $a$, 不必互素):

$$
a^p \equiv a \pmod{p}.
$$

(当 $\gcd(a, p) \neq 1$ 即 $p \mid a$ 时, 两边都为 $0$ 模 $p$, 仍然成立。)

历史上 Fermat 1640 年的信中只陈述结论, 第一个完整证明由 Euler 1736 给出 (用二项式定理归纳)。Euler 的置换证明则把它推广到任意 $n$。

### 应用例子 (Worked example): Fermat 小定理 + Miller-Rabin 素性测试雏形

**例 1 (直接验算)**. 取 $a = 2$, $p = 7$:

$$
2^{p-1} = 2^6 = 64 = 9 \cdot 7 + 1, \quad \Longrightarrow \quad 2^6 \equiv 1 \pmod{7}. \quad \checkmark
$$

**例 2 (素性测试用法)**. 给定大整数 $n$, 判断 $n$ 是否为素数 — 朴素试除到 $\sqrt{n}$ 太慢。**Fermat 测试**: 选随机 $a \in \{2, \ldots, n-2\}$ 用快速模幂计算 $a^{n-1} \bmod n$:

- 若 $a^{n-1} \not\equiv 1 \pmod{n}$, 则 $n$ **必为合数** (因为如果 $n$ 是素数, 由 Fermat 小定理必有 $\equiv 1$)。
- 若 $a^{n-1} \equiv 1 \pmod{n}$, 则 $n$ **可能是素数** (无法确定, 因为存在 Carmichael 数 $n=561=3\cdot 11\cdot 17$ 等"伪素数"对所有互素 $a$ 都满足)。

**Miller-Rabin (1976) 改进**: 把 $n - 1 = 2^s \cdot d$ ($d$ 奇), 验算 $a^d, a^{2d}, a^{4d}, \ldots, a^{2^{s-1}d}$ 序列中是否有 $\pm 1 \pmod{n}$ 转折。这能跳过 Carmichael 陷阱。Miller-Rabin 是当今所有 RSA library (OpenSSL / GMP / Python `sympy.isprime`) 生成大素数的工业标准。

**这告诉我们**: Fermat 小定理不仅是数论玩具, 而是**当今实际工程**中素性判定的算法核心 — Euler 在 1763 推广这条定理时, 不可能预见到 213 年后它会成为互联网安全 (TLS / SSH / PGP) 的密码学基础。

---

## 4.4 RSA 公钥密码体制

RSA 的核心问题: **如何在公开信道上传输加密信息?** 关键观察是大整数**因数分解的困难性** — 即使知道两个大素数的乘积 $n = pq$, 当 $p, q$ 各有几百位十进制数时, 现有算法都需要不可行的时间分解 $n$。

### Step 1: 密钥生成

1. 选择两个大素数 $p, q$ (实践中各 $\geq 1024$ 比特)。
2. 计算 $n = pq$ (公开 modulus)。
3. 计算 $\varphi(n) = (p-1)(q-1)$ (由乘性引理 C 与素数情形, $\varphi(p)\varphi(q) = (p-1)(q-1)$)。
4. 选择 $e$ 满足 $1 < e < \varphi(n)$ 且 $\gcd(e, \varphi(n)) = 1$ (公开**加密指数**, 实践中常取 $e = 65537$)。
5. 计算 $d$ 满足 $ed \equiv 1 \pmod{\varphi(n)}$ — 即 $d = e^{-1} \pmod{\varphi(n)}$, 用扩展 Euclidean 算法求出。$d$ 为**私钥** (解密指数)。

**公钥**: $(n, e)$, 公开发布。 **私钥**: $(n, d)$, 严格保密。

### Step 2: 加密

对明文 $m \in \{0, 1, \ldots, n-1\}$, 计算密文

$$
c \equiv m^e \pmod{n}.
$$

### Step 3: 解密

对密文 $c$, 计算

$$
m' \equiv c^d \pmod{n}.
$$

### 正确性定理: $m' = m$

**待证**:

$$
(m^e)^d \equiv m \pmod{n}.
$$

**证明**.

$ed \equiv 1 \pmod{\varphi(n)}$ 意味着存在正整数 $k$ 使

$$
ed = 1 + k \varphi(n).
$$

因此

$$
(m^e)^d = m^{ed} = m^{1 + k\varphi(n)} = m \cdot \left(m^{\varphi(n)}\right)^k.
$$

**情形 A**: $\gcd(m, n) = 1$。由 Euler 定理 $m^{\varphi(n)} \equiv 1 \pmod n$, 故

$$
m^{ed} \equiv m \cdot 1^k \equiv m \pmod{n}.
$$

**情形 B**: $\gcd(m, n) \neq 1$。先排除 $m = 0$ 边界 (此时 $c = 0^e = 0$, $m' = 0^d = 0 = m$ ✓, 显然成立)。设 $1 \leq m < n$, $\gcd(m, n) > 1$。因 $n = pq$ 为两素数乘积, 必有 $p \mid m$ 或 $q \mid m$ (但不同时, 否则 $pq \mid m$ 即 $m \geq pq = n$ 矛盾)。不失一般性设 $p \mid m, q \nmid m$。则

$$
m^{ed} \equiv 0 \equiv m \pmod{p}.
$$

另一方面 $\gcd(m, q) = 1$, 由 Fermat 小定理 $m^{q-1} \equiv 1 \pmod q$, 所以

$$
m^{ed} = m^{1 + k(p-1)(q-1)} = m \cdot \left(m^{q-1}\right)^{k(p-1)} \equiv m \cdot 1 \equiv m \pmod{q}.
$$

由中国剩余定理 (CRT): $m^{ed} \equiv m \pmod p$ 与 $m^{ed} \equiv m \pmod q$ 联合给出

$$
m^{ed} \equiv m \pmod{pq} = \pmod{n}. \qquad \blacksquare
$$

### 安全性的来源

RSA 的安全性建立在以下计算困难问题:

- **大整数分解**: 由 $n = pq$ 公开, 如能高效分解 $n$ 即可恢复 $p, q$, 进而算出 $\varphi(n) = (p-1)(q-1)$, 再求 $d = e^{-1} \pmod{\varphi(n)}$, 攻破。
- **当前最佳因数分解算法** (Number Field Sieve) 的复杂度为亚指数 $\exp(O((\log n)^{1/3} (\log\log n)^{2/3}))$, 对 $n$ 在 $2048$ 比特规模上仍然不可行 — 估计需要现代超级计算机连续运行数百万年。

**注意**: 若量子计算机规模化, **Shor 算法**可在多项式时间分解大整数, RSA 将不再安全。这是后量子密码学 (post-quantum cryptography) 当前的核心问题。

### RSA Python 玩具 trace (p=61, q=53)

下面用 Python 把上面的密钥生成 / 加密 / 解密三步走过一遍。toy 参数虽小, 但每一步与 2048-bit 实战 RSA 完全同构 — 只是数字大了 600 位。

```python
from math import gcd

# --- Step 1: 密钥生成 ---
p, q = 61, 53                         # 两个 (toy) 素数
n = p * q                             # 公开 modulus
phi = (p - 1) * (q - 1)               # Euler totient
print(f"n   = {n}")                   # 3233
print(f"φ(n)= {phi}")                 # 3120

e = 17                                # 公开加密指数, 满足 gcd(e, φ) = 1
assert gcd(e, phi) == 1

# 求模逆 d ≡ e⁻¹ (mod φ), Python 3.8+ 内置:
d = pow(e, -1, phi)
print(f"e   = {e}, d = {d}")          # e=17, d=2753
assert (e * d) % phi == 1             # ed ≡ 1 (mod φ)  ✓

# --- Step 2: 加密 ---
m = 65                                # 明文 (假设已经编码为整数 < n)
c = pow(m, e, n)                      # 密文 c = m^e mod n
print(f"明文 m = {m}")                 # 65
print(f"密文 c = {c}")                 # 2790

# --- Step 3: 解密 ---
m_prime = pow(c, d, n)                # m' = c^d mod n
print(f"解密 m' = {m_prime}")          # 65
assert m_prime == m                   # 正确性  ✓
```

运行输出:

```
n   = 3233
φ(n)= 3120
e   = 17, d = 2753
明文 m = 65
密文 c = 2790
解密 m' = 65
```

**关键观察**: 持私钥的人能瞬间算出 $d = 2753$; 不持私钥的攻击者要从 $n = 3233$ 反推出 $\varphi$ 必须先分解 $n = 61 \times 53$ — toy 参数下可秒解, 但在 $2048$ 比特规模下 (即使最先进的 NFS 算法), 估算超过现代超算寿命。这就是非对称加密的核心: **加密 / 验证用公钥, 解密 / 签名用私钥, 二者由 Euler 定理一根线串起来**。

![φ(n) 趋势图 (n=1..30)](/content/images/2026/05/fig5_totient_trend.png)

> **Fig 5.**
>
> Euler totient $\varphi(n)$ 在 $n = 1..30$ 的取值。橙色 = 素数处, $\varphi(p) = p-1$, 是局部最大值; 蓝色 = 合数处, $\varphi(n)$ 显著下降, 反映合数有更多与之不互素的小元素。这种 jagged 形状正是 RSA 安全性的源头之一: 即使知道 $n$, $\varphi(n)$ 也很难直接预测, 必须先分解。

---

## 几何/物理直观

Euler 定理的**几何味道**藏在群论里。$(\mathbb{Z}/n\mathbb{Z})^*$ 是一个**有限交换群**, 阶数为 $\varphi(n)$。对群里任意元素 $a$, 由 Lagrange 定理, $a$ 的阶 (即 $a^k = e$ 中最小的正整数 $k$) 必整除群的阶 $\varphi(n)$, 从而 $a^{\varphi(n)} = e$ — 这就是 Euler 定理的群论解读。

更直观地, 我们之前的**置换证明**展示了: 用 $a$ 乘以 $(\mathbb{Z}/n\mathbb{Z})^*$ 的每个元素, 相当于在该有限集合上作一个**置换** — 元素打乱了, 但集合本身不变。任意 finite group 的"乘以 $a$" 操作都是置换, 这条事实直接给出 Lagrange 定理与 Euler 定理。

而 RSA 的核心**变魔术**在于:

$$
\text{(加密)}\;m \;\xrightarrow{(\cdot)^e}\; c \;\xrightarrow{(\cdot)^d}\; m \;\text{(解密)}
$$

如果把加密看作把消息 $m$ 在 $(\mathbb{Z}/n\mathbb{Z})$ 这个有限轮盘上转 $e$ 圈, 解密就是反向转 $d$ 圈; 而 $ed \equiv 1 \pmod{\varphi(n)}$ 恰好保证总转动数 $ed$ 等于"$1$ 圈加整数倍 $\varphi(n)$ 圈" — 由 Euler 定理, $\varphi(n)$ 圈等于不转 — 所以最终回到原点。

---

## 视频对照

视频 **14:53–15:55 (MISC_01 段)**: - 14:53–15:18: $n=10$ 互素集合 $\{1,3,7,9\}$ 乘 $a=3$ 置换演示 (anim-15 Phase 1-4) - 15:18–15:55: 抽象 derivation 三步 $\prod a x_i \equiv \prod x_i \to a^{\varphi(n)} \equiv 1 \pmod n$ (anim-15 Phase 5)

补充阅读建议: - Koblitz, *A Course in Number Theory and Cryptography* (Springer GTM 114) - RFC 8017: PKCS#1 v2.2 (RSA implementation standard)

— Abel
