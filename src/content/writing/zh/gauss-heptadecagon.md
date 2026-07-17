---
title: "高斯与正十七边形：一个清晨，两千年的难题"
date: 2026-05-29
lang: zh
tags:
  - timeobserver137
  - math-companion
  - g17
  - gauss
  - constructible-polygon
  - fermat-primes
  - galois-theory
  - history-of-mathematics
  - draft
ghostSlug: gauss-heptadecagon
---

> 1796 年 3 月 30 日，一个还差一个月才满十九岁的年轻人，想通了欧几里得之后两千年里没有人做到的事——只用直尺和圆规，画出正十七边形。但比“画出来”更深的问题是：
>
> **为什么可以画？**
>
> 这篇文章从零讲起：费马素数、模 17 的时钟、高斯周期、Galois 群、四层二次扩张，直到 $\cos\frac{2\pi}{17}$ 的显式闭式与 Richmond 的二十步作图，再到 Wantzel 与 Lindemann 关上古希腊三大难题的门。

---

**目录**

- [§0 引子](#%C2%A70-%E5%BC%95%E5%AD%90)
- [§1 为什么是 17（费马素数判据）](#%C2%A71-%E2%80%94-%E4%B8%BA%E4%BB%80%E4%B9%88%E6%98%AF-17%EF%BC%9A%E8%B4%B9%E9%A9%AC%E7%B4%A0%E6%95%B0%E4%B8%8E%E5%8F%AF%E4%BD%9C%E5%9B%BE%E5%88%A4%E6%8D%AE)
- [§2 时钟上的乘法 (ℤ/17ℤ)*](#%C2%A72-%E2%80%94-%E6%97%B6%E9%92%9F%E4%B8%8A%E7%9A%84%E4%B9%98%E6%B3%95%EF%BC%9Amathbbz17mathbbz-%E4%B8%8E%E5%AE%83%E7%9A%84%E7%94%9F%E6%88%90%E5%85%83)
- [§3 高斯周期 → 第一个 √17](#%C2%A73-%E2%80%94-%E9%AB%98%E6%96%AF%E5%91%A8%E6%9C%9F%EF%BC%9A%E6%8A%8A%E5%8D%81%E5%85%AD%E4%B8%AA%E6%A0%B9%E5%88%86%E6%88%90%E4%B8%A4%E5%8D%8A%EF%BC%8C%E9%80%BC%E5%87%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-sqrt17)
- [§4 对称的群：Galois](#%C2%A74-%E2%80%94-%E5%AF%B9%E7%A7%B0%E7%9A%84%E7%BE%A4%EF%BC%9Agalois-%E7%BE%A4%EF%BC%8C%E4%B8%8E%E7%AC%AC%E4%BA%8C%E3%80%81%E4%B8%89%E5%88%80)
- [§5 cos(2π/17) 的显式闭式](#%C2%A75-%E2%80%94-%E6%94%B6%E7%BD%91%EF%BC%9Acosdfrac2pi17-%E7%9A%84%E6%98%BE%E5%BC%8F%E9%97%AD%E5%BC%8F%E4%B8%8E%E6%9C%80%E5%86%85%E5%B1%82%E6%A0%B9%E5%8F%B7%E7%9A%84%E6%9D%A5%E5%8E%86)
- [§6 Richmond 1893：二十步作图](#%C2%A76-%E2%80%94-richmond-1893%EF%BC%9A%E4%BA%8C%E5%8D%81%E6%AD%A5%E6%8A%8A-costfrac2pi17-%E7%94%BB%E5%88%B0%E7%BA%B8%E4%B8%8A)
- [§7 必要性：Wantzel + Lindemann](#%C2%A77-%E2%80%94-%E5%BF%85%E8%A6%81%E6%80%A7%EF%BC%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E5%A4%9A%E6%95%B0%E5%9B%BE%E5%BD%A2%E7%94%BB%E4%B8%8D%E5%87%BA%E6%9D%A5%EF%BC%88wantzel-1837-lindemann-1882%EF%BC%89)
- [§8 历史与意义](#%C2%A78-%E5%8E%86%E5%8F%B2%E4%B8%8E%E6%84%8F%E4%B9%89)
- [§9 结语](#%C2%A79-%E7%BB%93%E8%AF%AD)

## §0 引子

![高斯数学日记（Tagebuch）首条，1796 年 3 月 30 日——正十七边形可作图的发现记录（拉丁文 *Principia quibus innititur sectio circuli…*）。Wikimedia Commons, public domain.](/content/images/2026/05/hist_s0_tagebuch_1796.png)

*高斯数学日记（Tagebuch）首条，1796 年 3 月 30 日——正十七边形可作图的发现记录（拉丁文 *Principia quibus innititur sectio circuli…*）。Wikimedia Commons, public domain.*

在两千多年前的地中海世界，古希腊是一个由诸多城邦组成的文明共同体，我们如今的哲学、天文学、几何学，都在这里慢慢成形。

我对数学的兴趣，就源于初中时的平面几何。而其中最让我震撼的，是年轻的高斯作出正十七边形的故事。

![青年高斯，J. C. A. Schwartz 粉彩，1803 年（高斯约 26 岁）。Wikimedia Commons, PD.](/content/images/2026/05/hist_s0_gauss_young_1803.jpg)

*青年高斯，J. C. A. Schwartz 粉彩，1803 年（高斯约 26 岁）。Wikimedia Commons, PD.*

这一集，让我们一起来回顾这个故事。比起“怎么把它画出来”，这篇博文更想讲清楚的，是高斯当年真正想通的那件事——**为什么可以画**。

---

## §1 — 为什么是 17：费马素数与可作图判据

正十七边形之所以是数学史上的一座里程碑，不是因为"17 这个数好看"，而是因为它正好踩在一条极其苛刻的判据线上：**用没有刻度的直尺与圆规，能精确作出的正多边形，边数被一种叫"费马素数"的稀有素数死死卡住**。这一节从零开始讲清楚两件事——什么样的素数才"可作"，以及为什么 $17$ 恰好是其中一个。我们先用一个朴素的画面把"费马数"说明白，再补全一条关键引理的完整证明（高斯把它写进了《算术研究》，但常被各种科普一笔带过的"$2^m+1$ 素数 $\Rightarrow m$ 是 $2$ 的幂"），最后说清"可作 $\iff$ 边数长什么样"这条判据的来龙去脉，以及它跟三大古希腊难题各自的归属。

### 本节符号补充

| 记号 | 读法 / 含义 |
| --- | --- |
| $F_k$ | 第 $k$ 个**费马数**，$F_k=2^{2^{k}}+1$（指数本身是 $2$ 的幂） |
| 费马素数 | 恰好是素数的费马数，目前只知道 $F_0,\dots,F_4$ 这 $5$ 个 |
| $a\mid b$ | "$a$ 整除 $b$"，即 $b$ 是 $a$ 的整数倍 |
| $\varphi(n)$ | 欧拉函数：$1\sim n$ 中与 $n$ 互素的个数；$n=p$ 素数时 $\varphi(p)=p-1$ |
| $\cos\frac{2\pi}{p}$ | 正 $p$ 边形顶点的横坐标（取单位圆、首顶点在正东时） |
| $[\mathbb{Q}(x):\mathbb{Q}]$ | 数 $x$ "代数复杂度"的度量：它满足的最低次有理系数方程的次数（详见 §7） |

### 1.1 直觉先行：什么是费马数，为什么指数必须是"$2$ 的幂"

![$z^{17}=1$ 的 17 个根均布单位圆；$\zeta_{17}=e^{2\pi i/17}$（橙）的实部即 $\cos\frac{2\pi}{17}$。— 动画帧：Abel（Manim）](/content/images/2026/05/fig_s1_1_roots_zeta.png)

*$z^{17}=1$ 的 17 个根均布单位圆；$\zeta_{17}=e^{2\pi i/17}$（橙）的实部即 $\cos\frac{2\pi}{17}$。— 动画帧：Abel（Manim）*

先看一个最朴素的问题：形如 $2^m+1$ 的数里，**哪些可能是素数**？

随手试几个：$2^1+1=3$（素），$2^2+1=5$（素），$2^3+1=9=3\times3$（**不是**），$2^4+1=17$（素），$2^5+1=33=3\times11$（**不是**），$2^6+1=65=5\times13$（**不是**），$2^8+1=257$（素）。

一个规律呼之欲出：**只有当指数 $m$ 本身是 $2$ 的幂（$m=1,2,4,8,\dots$）时，$2^m+1$ 才有机会是素数**；只要 $m$ 带一个奇因子（$3,5,6$ 都带），它必然能被分解。

这个观察的画面是这样的：如果 $m$ 里藏着一个奇因子，那么 $2^m+1$ 就会自动"长出"一个小一号的因子 $2^{d}+1$ 把自己劈开。十七世纪的[费马](https://en.wikipedia.org/wiki/Pierre_de_Fermat)据此猜想：取 $m=2^k$（彻底掐掉一切奇因子），得到的数

$$
F_k=2^{2^{k}}+1
$$

或许个个都是素数。前五个确实漂亮：

$$
F_0=3,\quad F_1=5,\quad F_2=17,\quad F_3=257,\quad F_4=65537.
$$

**$17=F_2=2^{2^{2}}+1$ 正是其中的第三个费马素数**——这就是它后来能被尺规作图的算术身份证。

### 1.2 把直觉证严：$2^m+1$ 是素数 $\Rightarrow m$ 是 $2$ 的幂

上一小节的"规律"必须证明，否则它只是巧合。这里给出完整证明（高斯《算术研究》[§365](https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae) 把可作性判据建立在它之上）。证明的全部燃料是下面这条初等恒等式。

**引理（奇次幂的因式）.** 设 $e$ 是**奇数**，则多项式 $x+1$ 整除 $x^{e}+1$：

$$
x^{e}+1=(x+1)\big(x^{e-1}-x^{e-2}+x^{e-3}-\cdots-x+1\big).
$$

（把右边展开，相邻项逐对抵消，只剩 $x^{e}+1$；因为 $e$ 奇，最后一项是 $+1$，符号恰好对得上。等价地说，$x=-1$ 是 $x^{e}+1$ 的根，故 $x+1$ 是它的因式。）

**命题.** 若 $2^{m}+1$ 是素数，则 $m$ 是 $2$ 的幂。

*证明（反证法）.* 假设 $m$ **不是** $2$ 的幂。那么 $m$ 至少含有一个**奇因子** $e>1$。把它写成

$$
m=d\cdot e,\qquad \text{其中 } e>1 \text{ 为奇数},\ \ d=\frac{m}{e}\ \ (1\le d<m).
$$

在引理里代入 $x=2^{d}$（注意 $e$ 是奇数，引理适用）：

$$
2^{d}+1\ \Big|\ (2^{d})^{e}+1=2^{de}+1=2^{m}+1.
$$

于是 $2^{d}+1$ 是 $2^{m}+1$ 的一个因子。再看它的大小：因为 $1\le d<m$，所以

$$
1<2^{d}+1<2^{m}+1,
$$

即 $2^{d}+1$ 是一个**严格介于 $1$ 与 $2^{m}+1$ 之间的真因子**。这与 $2^{m}+1$ 是素数（只有平凡因子 $1$ 和自身）矛盾。

因此 $m$ 不含奇因子 $>1$，即 $m$ 只由因子 $2$ 构成——$m$ 是 $2$ 的幂。**(证毕)**

> **方向提醒（别读反了）**：这条命题只说"素数 $\Rightarrow$ 指数是 $2$ 的幂"，它
>
> **不**
>
> 保证"指数是 $2$ 的幂 $\Rightarrow$ 素数"。反方向是费马猜错的地方——见下一小节 $F_5$。

### 1.3 费马翻车：$F_5$ 不是素数（欧拉 1732）

![费马素数 $F_0\!=\!3,\,F_1\!=\!5,\,F_2\!=\!17,\,F_3\!=\!257,\,F_4\!=\!65537$；$F_5$ 被欧拉 1732 用因子 641 划掉。— Abel（Manim）](/content/images/2026/05/fig_s1_3_F5_fail.png)

*费马素数 $F_0\!=\!3,\,F_1\!=\!5,\,F_2\!=\!17,\,F_3\!=\!257,\,F_4\!=\!65537$；$F_5$ 被欧拉 1732 用因子 641 划掉。— Abel（Manim）*

费马猜测"所有 $F_k$ 都是素数"，但他只验到了 $F_4$。约一个世纪后，[**欧拉**](https://en.wikipedia.org/wiki/Leonhard_Euler)**在 1732 年**给出第一个反例：第六个费马数

$$
F_5=2^{2^{5}}+1=2^{32}+1=4294967297
$$

**不是**素数。欧拉的关键洞察是：$F_5$ 若有素因子，该素因子必形如 $64k+1$（这一约束把搜索范围大幅缩小），据此他很快锁定了 $641$。验证只需**一次除法**：

$$
4294967297=641\times 6700417.
$$

（$641$ 是素数，$6700417$ 也是素数，但后者要到更晚才被确认。$641=64\times10+1$，正合 $64k+1$ 的形。）这一刀让"费马素数"从"无穷一族"跌成"目前只知 $5$ 个"的稀有名单：$F_0,\dots,F_4 = 3,5,17,257,65537$。$F_5$ 之后人们再没找到过新的费马素数，是否还有第六个至今未知。

正是这份稀有，决定了能用尺规作出的"奇素数边正多边形"屈指可数——而 $17$ 占着其中一席。

### 1.4 可作图判据：高斯–Wantzel 定理

![高斯–Wantzel 判据 $n=2^a p_1\cdots p_k$（互异费马素数）；$7/9/11/13/14$ 边形出局。— Abel（Manim）](/content/images/2026/05/fig_s1_4_gauss_criterion.png)

*高斯–Wantzel 判据 $n=2^a p_1\cdots p_k$（互异费马素数）；$7/9/11/13/14$ 边形出局。— Abel（Manim）*

![F. J. Richelot（1808–1875），1832 年作出正 257 边形。Wikimedia Commons, public domain.](/content/images/2026/05/hist_s1_richelot_257gon.jpg)

*F. J. Richelot（1808–1875），1832 年作出正 257 边形。Wikimedia Commons, public domain.*

现在把"哪些正多边形可作"这条总判据完整摆出来。它的"充分性"（怎么作）由高斯在 1796 年用周期开方给出（本系列 §3–§6 正是把 $n=17$ 的情形从头作一遍），"必要性"（不满足就真作不出）由 [**Wantzel**](https://mathshistory.st-andrews.ac.uk/Biographies/Wantzel/)** 在 1837 年**（[J. Math. Pures Appl. **2**, 366–372](https://en.wikipedia.org/wiki/Pierre_Wantzel)）补全。合称：

> **高斯–Wantzel 定理.**
>
> 正 $n$ 边形可用直尺与圆规精确作图，当且仅当
>
> $$
> n=2^{a}\,p_{1}p_{2}\cdots p_{k},
> $$
>
> 其中 $a\ge 0$，而 $p_{1},\dots,p_{k}$ 是
>
> **互不相同**
>
> 的费马素数（$k$ 可以为 $0$）。

读这条判据要抓住三个要点：

- **"互不相同"是硬约束**。可作的奇素数因子，每个费马素数最多用一次。比如 $n=9=3^{2}$ 用了重复的费马素数 $3$，**不可作**——而这恰好等价于"$60^\circ$ 不能三等分"。捋一遍这条等价链：正九边形要作出 $40^\circ=\tfrac{1}{9}\cdot360^\circ$；而 $40^\circ=2\times20^\circ$，倍角可作，所以"作 $40^\circ$"与"作 $20^\circ$"是一回事；又 $20^\circ=\tfrac{1}{3}\cdot60^\circ$，于是它最终归到"能否三等分 $60^\circ$"——而 $60^\circ$ 本身是现成可作的角（正三角形），三等分它却不行。这一不可能性的严格证明留到 §7。
- **乘 $2$ 不要钱**。因子里的 $2^{a}$ 随便加：能作正 $n$ 边形，就能作正 $2n$ 边形（每条弧二等分，只需一次作中垂线）。所以正 $3,5,15,17$ 边形可作，正 $6,10,30,34,68$ 边形也都可作。
- **可作的奇边数清单极短**。从 $5$ 个已知费马素数 $\{3,5,17,257,65537\}$ 里取"互不相同"的若干个相乘，连"一个都不取"（空积 $=1$，对应 $n$ 是纯 $2$ 的幂）也算上，**总共只有 $2^{5}=32$ 种组合**。把空积 $1$ 之外的奇边数列出来，就是 $3,5,15,17,51,85,255,257,\dots$（$15=3\times5$ 插在 $5$ 与 $17$ 之间）。$17$ 是其中第四小、且是第一个"非平凡到让人意外"的——这正是高斯当年震动数学界的原因（他在不满十九岁时解决此问题后才决定献身数学）。

### 1.5 必要性的算术心脏：度数必须是 $2$ 的幂

为什么判据里偏偏是**费马**素数？这一小节给出直觉链条（完整证明见 §7 的 Wantzel 度数判据），它把"几何可作"翻译成"算术上指数是 $2$ 的幂"，正好接回 §1.2。

**第一步——化几何为坐标.** 把正 $p$ 边形放进单位圆、首顶点钉在 $(1,0)$，则相邻顶点是 $\big(\cos\frac{2\pi}{p},\sin\frac{2\pi}{p}\big)$。**作出正 $p$ 边形 $\iff$ 作出实数 $\cos\frac{2\pi}{p}$**（有了这个横坐标，纵坐标 $\sin$ 由单位圆方程一次开方即得，其余顶点靠等弧复制）。于是问题彻底落到一个实数能否作。

**第二步——可作数的"次数"必是 $2$ 的幂.** 尺规每一步（直线交直线、直线交圆、圆交圆）在坐标上至多解一个**二次**方程，即至多引入一次平方根。把作图全程串起来，任何可作数 $x$ 都落在一座"每层二次"的扩张塔顶端，从而它的代数次数

$$
[\mathbb{Q}(x):\mathbb{Q}]=2^{t}\quad(\text{某个 } t\ge 0)
$$

**必是 $2$ 的幂**（这是 Wantzel 1837 的核心，§7 给塔乘公式的严格论证）。

**第三步——算 $\cos\frac{2\pi}{p}$ 的次数.** 对**素数** $p$，可以证明（本系列 §2 已证 $\zeta_{17}$ 在 $\mathbb{Q}$ 上次数 $=16$，一般素数同理给 $p-1$）：

$$
\big[\mathbb{Q}\big(\cos\tfrac{2\pi}{p}\big):\mathbb{Q}\big]=\frac{p-1}{2}=\frac{\varphi(p)}{2}.
$$

**第四步——拼起来.** 若正 $p$ 边形可作，则由第二、三步，$\dfrac{p-1}{2}$ 必是 $2$ 的幂，于是 $p-1$ 是 $2$ 的幂，即 $p=2^{m}+1$ 形。而由 §1.2 的命题，$2^{m}+1$ 为素数强制 $m$ 是 $2$ 的幂，故 $p=2^{2^{k}}+1=F_k$ 是**费马素数**。这就解释了判据里为什么必须是费马素数——它是"次数是 $2$ 的幂"这一几何约束在算术上的唯一出口。

> **三大难题的归属（请勿混为一谈）**：Wantzel 这把"度数必为 $2$ 幂"的尺子，
>
> **只**
>
> 直接关掉了
>
> **倍立方**
>
> （需作 $\sqrt[3]{2}$，次数 $3$）与
>
> **三等分任意角**
>
> （如 $\cos20^\circ$ 满足不可约三次方程，次数 $3$）这两个难题——两者都因出现"次数 $3$"而出局。但
>
> **化圆为方**
>
> 靠的不是 Wantzel：它要作 $\sqrt{\pi}$，而 $\pi$ 的不可作根源是
>
> [**Lindemann**](https://mathshistory.st-andrews.ac.uk/Biographies/Lindemann/)
>
> ** 在 1882 年**
>
> （
>
> [Math. Annalen **20**, 213–225](https://en.wikipedia.org/wiki/Lindemann%E2%80%93Weierstrass_theorem)
>
> ）证明的
>
> **$\pi$ 是超越数**
>
> （连代数数都不是，更谈不上可作）。所以第三个难题的句号由 Lindemann 画下，不是 Wantzel。§7 会把这三条分别证完。

### 1.6 算例：用判据快速判定几个正多边形

> **例 1.1（$17=F_2$，可作）.**
>
> $17=2^{4}+1$，指数 $4=2^{2}$ 是 $2$ 的幂，且 $17$ 为素数，故 $17$ 是费马素数 $F_2$。$\dfrac{17-1}{2}=8=2^{3}$ 是 $2$ 的幂 → 正十七边形
>
> **可作**
>
> 。
>
> **例 1.2（$7$，不可作）.**
>
> $\dfrac{7-1}{2}=3$ 不是 $2$ 的幂；且 $7=2^{m}+1$ 无整数解（$7-1=6$ 非 $2$ 幂）→ $7$ 不是费马素数 → 正七边形
>
> **不可作**
>
> 。同理正 $11,13$ 边形：$(11-1)/2=5$、$(13-1)/2=6$ 都非 $2$ 幂，皆不可作。
>
> **例 1.3（$9=3^{2}$，不可作）.**
>
> $9$ 的奇素因子是重复的费马素数 $3\times3$，违反"互不相同"→ 正九边形
>
> **不可作**
>
> （等价于 $60^\circ$ 不可三等分：正九边形需作 $40^\circ=2\times20^\circ$，而 $20^\circ=60^\circ/3$）。
>
> **例 1.4（$15=3\times5$，可作）.**
>
> $3=F_0$、$5=F_1$ 是两个
>
> **不同**
>
> 费马素数，乘积满足判据 → 正十五边形
>
> **可作**
>
> （欧几里得已知）。再乘 $2$ 的幂：正 $30,60,120$ 边形也都可作。

```python
# §1 verification — pure stdlib, runs clean.
def is_power_of_two(n: int) -> bool:
    return n >= 1 and (n & (n - 1)) == 0

# 1) Fermat numbers F_k = 2**(2**k) + 1, and 17 = F_2.
F = [2 ** (2 ** k) + 1 for k in range(6)]
assert F[:5] == [3, 5, 17, 257, 65537]
assert F[2] == 17, "17 = F_2"

# 2) F_5 is composite (Euler 1732): a single trial division by 641 catches it.
assert F[5] == 4294967297
assert F[5] % 641 == 0
assert F[5] == 641 * 6700417
print(f"F_5 = {F[5]} = 641 x 6700417   (641 | F_5 in one division)")

# 3) Lemma engine: if 2**m + 1 is prime, then m is a power of 2.
#    Contrapositive: an odd factor e>1 of m (m=d*e) yields the proper
#    divisor 2**d + 1 of 2**m + 1, via  (x+1) | (x**e + 1)  with x = 2**d.
def proper_divisor_from_odd_factor(m: int):
    e = 3
    while e <= m:
        if m % e == 0:                      # e is an odd factor > 1
            d = m // e
            assert (2 ** m + 1) % (2 ** d + 1) == 0   # 2**d+1 divides 2**m+1
            assert 1 < 2 ** d + 1 < 2 ** m + 1        # and it is proper
            return 2 ** d + 1
        e += 2
    return None

for m in range(1, 40):
    val = 2 ** m + 1
    is_prime = val > 1 and all(val % q for q in range(2, int(val ** 0.5) + 1))
    witness = proper_divisor_from_odd_factor(m)
    if is_prime:
        assert witness is None and is_power_of_two(m)
print("Checked m=1..39:  2**m + 1 prime  =>  m is a power of 2")

# 4) Constructibility test via degree (p-1)/2 being a power of 2.
for p in [3, 5, 17, 257, 65537, 7, 11, 13]:
    deg = (p - 1) // 2          # = [Q(cos 2pi/p) : Q]
    verdict = "constructible" if is_power_of_two(deg) else "NOT constructible"
    print(f"  p={p:>5}:  (p-1)/2 = {deg:>5}  power of 2? {is_power_of_two(deg)!s:>5}  -> {verdict}")
print("OK")
```

运行输出确认：$F_5=641\times 6700417$ 一次除法即破；$m=1\sim39$ 内 $2^{m}+1$ 为素数者其指数必是 $2$ 的幂；$p=3,5,17,257,65537$ 可作，$p=7,11,13$ 不可作。

### 1.7 现代意义

这条判据把"一把直尺、一只圆规"这种最古老的工具，与十九世纪才成熟的**域与扩张次数**语言焊在了一起，其回响远超几何本身：

- **两千多年的难题，分两条时间线收束**。三大古希腊作图难题（倍立方、三等分角、化圆为方）从约公元前 $450$ 年（[阿那克萨戈拉](https://en.wikipedia.org/wiki/Anaxagoras)狱中思考化圆为方）算起，到 Wantzel 1837 与 Lindemann 1882 才彻底了结，跨度约**两千三百年**。这是一条线。另一条线是正多边形作图：自[欧几里得](https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/)（约公元前 $300$ 年）给出正 $3,5,15$ 边形后，奇素数边的名单**逾两千年**毫无进展，直到[高斯](https://mathshistory.st-andrews.ac.uk/Biographies/Gauss/) 1796 年添上正十七边形——两个"千年尺度"指的是不同的事，不要并成一个数。
- **费马素数的稀有，今天仍是开放前沿**。除 $F_0\sim F_4$ 外人类至今未再找到费马素数，$F_5$ 之后的费马数已被验证大量为合数；"是否只有有限个费马素数"是数论未解之谜。这意味着"奇边数可作的正多边形"清单是否封闭，本质上是个**未决问题**。
- **同一套"次数是 $2$ 的幂"的判据思想**，正是伽罗瓦理论（§4）的雏形：把一个几何/方程问题翻译成群与域的结构问题，再用"塔的层数"读出答案。这种"先翻译、再用结构判定可不可能"的范式，后来支配了从代数方程根式解（阿贝尔–伽罗瓦）到现代计算复杂性的整片版图。

高斯在不满十九岁那年用正十七边形证明了：有时候，回答"能不能做到"的最快路径，不是更聪明地去做，而是把问题搬进一个能看清全部可能性的代数世界——而 $17=F_2$，正是这个世界递给几何的第一张通行证。

— *End of §1.*

---

## §2 — 时钟上的乘法：$(\mathbb{Z}/17\mathbb{Z})^{*}$ 与它的生成元

要理解高斯怎么"拆开"正十七边形，先得认识一个小小的代数世界：**模 17 的乘法**。这一节从零开始——不假设你学过群论。我们会先用一个时钟的画面把对象讲清楚，再把它形式化，最后证明一个关键事实：**只用一个数 $g=3$ 反复相乘，就能走遍模 17 的所有非零余数**。这个"走遍"的性质，是后面三节逐层开方的全部地基。

### 本节符号补充

| 记号 | 读法 / 含义 |
| --- | --- |
| $\mathbb{Z}/17\mathbb{Z}$ | 模 17 的余数世界 $\{0,1,2,\dots,16\}$，加减乘都"绕回去"（像 17 小时的时钟） |
| $(\mathbb{Z}/17\mathbb{Z})^{*}$ | 上面**非零**余数 $\{1,2,\dots,16\}$，在**乘法**下构成的集合（共 16 个） |
| $\operatorname{ord}(a)$ | $a$ 的**阶**：把 $a$ 不断自乘、第一次回到 $1$ 所需的次数 |
| $g$ | **生成元 / 原根**：一个 $\operatorname{ord}(g)=16$ 的元素（自乘能遍历全部 16 个） |
| $\zeta_{17}$ | $=e^{2\pi i/17}$，复平面单位圆上的 $17$ 次本原单位根 |

### 2.1 模 17 的世界：一个 17 小时的时钟

普通时钟有 12 个钟点，到 12 之后绕回 1。把钟点数改成 17，就得到 $\mathbb{Z}/17\mathbb{Z}$：所有整数按"除以 17 的余数"归类，只剩下 $0,1,2,\dots,16$ 这 17 个代表。两个数相加或相乘后，**超过 16 就减去 17 的倍数绕回来**。例如

$$
5\times 7 = 35 = 2\times 17 + 1 \equiv 1 \pmod{17},\qquad 3\times 6 = 18 \equiv 1 \pmod{17}.
$$

记号"$a\equiv b \pmod{17}$"读作"$a$ 与 $b$ 模 17 同余"，意思就是它们除以 17 余数相同（差一个 17 的倍数）。

为什么挑 17？因为 **17 是素数**——除 1 和自身外没有因子。这保证了一件好事：在 $1,2,\dots,16$ 里，**任何一个数都能"除得动"**（都有乘法逆元）。比如上面 $5\times 7\equiv 1$ 说明 $7$ 是 $5$ 的倒数。于是这 16 个非零余数在乘法下自成一个封闭的小世界，记作 $(\mathbb{Z}/17\mathbb{Z})^{*}$。（若模数不是素数，比如模 6，则 $2\times 3\equiv 0$，乘法会"掉出"非零集合，这个好性质就没了。）

### 2.2 "阶"：自乘多久回到 1

在这个乘法世界里，挑一个数反复自乘，迟早会回到 $1$（因为只有有限个值，必然循环；而 $1$ 一定在循环里）。**第一次回到 $1$ 用的次数**，就叫这个数的**阶** $\operatorname{ord}(a)$。

拿 $a=2$ 试：

$$
2,\ 4,\ 8,\ 16,\ \underbrace{32}_{\equiv 15},\ \underbrace{30}_{\equiv 13},\ \underbrace{26}_{\equiv 9},\ \underbrace{18}_{\equiv 1}.
$$

走了 8 步回到 $1$，所以 $\operatorname{ord}(2)=8$。注意 $2$ 的轨道 $\{2,4,8,16,15,13,9,1\}$ 只有 **8 个**数——它**走不遍**全部 16 个。

### 2.3 生成元 $g=3$：一步一步走遍整个钟面

![生成元 $g=3$：从 1 反复 $\times 3 \bmod 17$，依次走遍全部 16 个非零余数（$1\to3\to9\to10\to13\to\dots\to1$）后回到起点——“生成”的字面图像。— 动画：Abel（Manim）](/content/images/2026/05/fig_s2_3_generator_g3_path.gif)

*生成元 $g=3$：从 1 反复 $\times 3 \bmod 17$，依次走遍全部 16 个非零余数（$1\to3\to9\to10\to13\to\dots\to1$）后回到起点——“生成”的字面图像。— 动画：Abel（Manim）*

换成 $a=3$，反复 $\times 3 \bmod 17$：

$$
3,\ 9,\ \underbrace{27}_{\equiv 10},\ \underbrace{30}_{\equiv 13},\ \underbrace{39}_{\equiv 5},\ \underbrace{15}_{},\ \underbrace{45}_{\equiv 11},\ \underbrace{33}_{\equiv 16},\ \dots
$$

继续走下去，轨道是

$$
3^0,3^1,\dots,3^{15} \equiv 1,3,9,10,13,5,15,11,16,14,8,7,4,12,2,6 \pmod{17},
$$

**16 个数恰好不重不漏地遍历了 $1$ 到 $16$**，第 16 步才回到 $1$。也就是 $\operatorname{ord}(3)=16$。这种"自乘能走遍全体"的数，叫**生成元**（或**原根**）：它像时钟的秒针，每跳一格（一次 $\times 3$），$16$ 跳正好绕钟面一圈、踩遍每一个钟点。

对比 2.2 的 $2$（只踩到 8 个点就提前回到起点），就能直观感到"生成元"的特别：**不是每个数都能生成，能生成的才配叫原根**。$g=3$ 是模 17 最小的原根，后文一律用它。

> 这个"用 $g$ 的幂次重新给余数编号"是整篇文章的
>
> **核心技巧**
>
> 。我们不按自然顺序 $1,2,3,\dots$ 看这些余数，而是按它们是 $g$ 的第几次幂来排队。后面会看到：这个排队顺序一旦定好，正十七边形的对称性就变成了简单的"指标平移"。

### 2.4 严格化：$(\mathbb{Z}/17\mathbb{Z})^{*}$ 是 16 阶循环群，$\operatorname{ord}(3)=16$

把上面的直观证严。"阶"有一条基本性质（Lagrange 定理在循环情形的特例）：$\operatorname{ord}(a)$ **必整除** 群的元素个数 $16$。所以 $\operatorname{ord}(3)$ 只能是 $16$ 的因子之一：$1,2,4,8,16$。

*证明.* 要证 $\operatorname{ord}(3)=16$，只需排除所有**真因子** $1,2,4,8$。注意它们全都整除 $8$，因此"$\operatorname{ord}(3)$ 是某个真因子"会推出 $3^{8}\equiv 1$。于是**只需验一个条件** $3^{8}\not\equiv 1$ 即可一举排除全部真因子。逐次平方：

$$
3^2=9,\quad 3^4=9^2=81\equiv 13,\quad 3^8\equiv 13^2=169\equiv 16\equiv -1 \pmod{17}.
$$

得 $3^{8}\equiv -1\neq 1$，故 $\operatorname{ord}(3)\nmid 8$；结合 $\operatorname{ord}(3)\mid 16$，唯一可能是 $\operatorname{ord}(3)=16$。**(证毕)**

既然存在一个阶为 $16$ 的元素，整个 $(\mathbb{Z}/17\mathbb{Z})^{*}$ 就由它的幂穷尽，即 $(\mathbb{Z}/17\mathbb{Z})^{*}=\langle 3\rangle$ 是**循环群**，$(\mathbb{Z}/17\mathbb{Z})^{*}\cong \mathbb{Z}/16\mathbb{Z}$。

### 2.5 关键地基：$\zeta_{17}$ 在 $\mathbb{Q}$ 上的次数恰是 16

后面所有"对称群有 16 个元素""每层扩张次数为 2"的论断，都悬在一个必须**证明**（而非默认）的事实上：$\zeta_{17}=e^{2\pi i/17}$ 满足的最低次有理系数方程，**次数恰为 16**。

$\zeta_{17}$ 是 $x^{17}-1=0$ 的根。除去因子 $x-1$，它落在**分圆多项式**

$$
\Phi_{17}(x)=\frac{x^{17}-1}{x-1}=x^{16}+x^{15}+\cdots+x+1
$$

上。我们证 $\Phi_{17}$ 在 $\mathbb{Q}$ 上**不可约**（不能再分解成更低次有理系数多项式之积）。技巧是代换 $x\mapsto x+1$ 后用 **Eisenstein 判据**：

$$
\Phi_{17}(x+1)=\frac{(x+1)^{17}-1}{x}=x^{16}+\binom{17}{1}x^{15}+\binom{17}{2}x^{14}+\cdots+\binom{17}{16}.
$$

因为 $17$ 是素数，所有中间二项式系数 $\binom{17}{k}$（$1\le k\le 16$）都被 $17$ 整除；常数项是 $\binom{17}{16}=17$，被 $17$ 整除但**不被** $17^2=289$ 整除；首项系数 $1$ 不被 $17$ 整除。这恰好满足 Eisenstein 判据（素数 $p=17$），故 $\Phi_{17}(x+1)$ 不可约，从而 $\Phi_{17}(x)$ 不可约。因此

$$
[\mathbb{Q}(\zeta_{17}):\mathbb{Q}]=\deg\Phi_{17}=16.
$$

**这一步是整篇的承重墙**：正因为次数是 $16$，$\zeta_{17}$ 的"对称群"（§4 的 Galois 群）才真有 $16$ 个元素、才等于整个 $(\mathbb{Z}/17\mathbb{Z})^{*}$ 而非它的某个子群；否则后面"$|G|=16=2^4$、四层二次扩张"全部落空。（没有这一步，$\zeta_{17}$ 原则上可能满足更低次方程，整座塔会塌。）

### 2.6 算例：生成元 vs 非生成元

> **例 2.1（$g=3$ 是生成元）.**
>
> $3$ 的幂轨道长度 $=\operatorname{ord}(3)=16$，遍历 $\{1,\dots,16\}$ 全体——见 2.3。
>
> **例 2.2（$g=2$ 不是生成元）.**
>
> $2$ 的幂轨道 $\{2,4,8,16,15,13,9,1\}$ 只有 $\operatorname{ord}(2)=8$ 个元素，缺了 $\{3,5,6,7,10,11,12,14\}$。验阶：$2^8=256=15\times 17+1\equiv 1$，且 $2^4=16\equiv -1\neq 1$，故 $\operatorname{ord}(2)=8\neq 16$。
>
> **它只走半圈。  
>   
> 例 2.3（更小的阶）.**
>
> $\operatorname{ord}(16)=2$（因 $16\equiv -1$，$(-1)^2=1$）；$\operatorname{ord}(4)=4$（$4^2=16\equiv -1$，$4^4\equiv 1$）。阶越小，轨道越短，离"生成"越远。

```python
# Verify orders + that 3 is a primitive root mod 17; spot-check Phi_17 degree.
def order(a: int, n: int = 17) -> int:
    x, k = a % n, 1
    while x != 1:
        x = (x * a) % n
        k += 1
    return k

assert order(3) == 16,  "3 should be a primitive root (order 16)"
assert order(2) == 8,   "2 reaches only half"
assert order(4) == 4 and order(16) == 2
# 3 visits every nonzero residue exactly once:
assert {pow(3, k, 17) for k in range(16)} == set(range(1, 17))
print("ord(3)=16 primitive root; cycle =", [pow(3, k, 17) for k in range(16)])

# Phi_17 irreducible (proved via Eisenstein on Phi_17(x+1)) => [Q(zeta_17):Q] = 16.
# Cross-check the degree: deg Phi_17 = phi(17) = 16 (since 17 is prime, phi(17)=16),
# and confirm Eisenstein's hypotheses on Phi_17(x+1) hold at p=17.
from math import comb
# binomial coefficients C(17,k), k=1..16, are the non-leading coeffs of Phi_17(x+1):
mids = [comb(17, k) for k in range(1, 17)]
assert all(c % 17 == 0 for c in mids),         "all middle coeffs divisible by 17"
assert mids[-1] % (17**2) != 0,                 "constant term C(17,16)=17 not div by 17^2"
print("Eisenstein at p=17 holds on Phi_17(x+1)  =>  [Q(zeta_17):Q] = phi(17) = 16  [OK]")
```

### 2.7 现代意义

"反复自乘走遍整个余数世界"——生成元/原根这个看似古典的概念，是**现代公钥密码学**的心脏：

- **Diffie–Hellman 密钥交换**（1976）正是建立在大素数 $p$ 的原根 $g$ 上：双方各自取私密指数 $a,b$，公开交换 $g^a,g^b \bmod p$，各自再算 $g^{ab}$ 作为共享密钥。安全性来自**离散对数难题**——已知 $g,\ g^a \bmod p$ 反推 $a$，在 $p$ 极大时计算上不可行，尽管 $g$"走遍"全体的结构保证了 $g^a$ 取值充分均匀。
- 同一"循环群 + 生成元"结构也支撑 **ElGamal 加密**、**DSA 数字签名**，以及椭圆曲线密码（把模乘群换成椭圆曲线点群，原根换成基点）。

高斯 1796 年为作图研究的 $(\mathbb{Z}/17\mathbb{Z})^{*}$ 循环结构，与两个世纪后保护互联网通信的数学，是同一个对象。

— *End of §2.*

---

## §3 — 高斯周期：把十六个根分成两半，逼出第一个 $\sqrt{17}$

§2 把模 17 的世界整理成了一条 16 格的"秒针轨道"——生成元 $g=3$ 的幂依次踩过全部 16 个非零余数。高斯的天才一步是：**别去硬解 $\zeta_{17}$ 满足的那个 16 次方程，而是把 16 个根按这条轨道分组、每组求和，让组与组之间满足一个简单的二次方程**。这一节做"第一刀"：把 16 个根分成两组各 8 个，证明这两组的和恰好是 $x^2+x-4=0$ 的两个根——于是 $\sqrt{17}$ 第一次出现。

### 本节符号补充

| 记号 | 含义 |
| --- | --- |
| 二次剩余 $\mathrm{QR}$ | 模 17 下"是某个数的平方"的余数，共 8 个 |
| 非二次剩余 $\mathrm{NQR}$ | 模 17 下不是平方的非零余数，共 8 个 |
| $\eta_0,\eta_1$ | 两个**一阶高斯周期**：QR / NQR 对应单位根之和 |
| $N(c)$ | 在 $\eta_0\eta_1$ 的 64 个乘积项里，指数 $\equiv c$ 的项数 |

### 3.1 直觉：为什么"分组求和"是个好主意

直接面对 $\zeta_{17}$ 很难——它满足一个 16 次方程。但 16 个根作为一个**整体**有大量对称性（§2 的循环结构）。高斯的想法像切蛋糕：先把 16 个根切成 2 块（每块 8 个根之和，记 $\eta_0,\eta_1$），这两块满足一个**二次**方程，好解；再把每块切成 2 小块（§4 的 $\theta$），又是二次方程；如此切 4 刀，每刀都只需解二次方程、开一次平方根。**4 次开方，就把 $\zeta_{17}$ 从天上拽到了尺规能够到的地面。** 本节是第一刀。

### 3.2 什么是二次剩余（先定义，再用）

一个非零余数 $a$ 叫**二次剩余**（QR），如果它在模 17 下"是个平方"——即存在某个 $b$ 使 $b^2\equiv a\pmod{17}$。否则叫**非二次剩余**（NQR）。

把 $1^2,2^2,\dots,8^2$ 模 17 算一遍（再大就对称重复了）：

$$
1,\ 4,\ 9,\ \underbrace{16}_{},\ \underbrace{25}_{\equiv 8},\ \underbrace{36}_{\equiv 2},\ \underbrace{49}_{\equiv 15},\ \underbrace{64}_{\equiv 13}.
$$

去重得到 **8 个**二次剩余：

$$
\mathrm{QR}=\{1,2,4,8,9,13,15,16\},\qquad \mathrm{NQR}=\{3,5,6,7,10,11,12,14\}.
$$

**与 §2 生成元的联系（关键）**：二次剩余恰好是 $g=3$ 的**偶次幂**。理由很短：偶次幂 $g^{2k}=(g^{k})^2$ 当然是平方，所以是 QR；反过来，平方映射 $x\mapsto x^2$ 的"核"只有 $\{\pm 1\}$ 两个元素（$x^2\equiv 1$ 仅 $x\equiv\pm1$，因 17 素数），所以平方映射是 **2 对 1** 的——$16$ 个元素映成 $8$ 个像，这 8 个像就是全部 QR，恰为 8 个偶次幂。于是

$$
\text{偶次幂} \;=\; \text{二次剩余 QR},\qquad \text{奇次幂} \;=\; \text{非剩余 NQR}.
$$

下图把这件事画出来：16 个余数放在单位圆上，QR（赭色）与 NQR（蓝色）按 $g=3$ 的幂次奇偶分成两组——这正是马上要定义的 $\eta_0,\eta_1$ 的成员。

![QR / 非剩余 按 g=3 幂次奇偶分组](/content/images/2026/05/qr_period_split.png)

### 3.3 两个一阶高斯周期 $\eta_0,\eta_1$

![16 个根分裂成两个一阶高斯周期：8 个 $\to\eta_0$（橙）、8 个 $\to\eta_1$（蓝）。— 动画：Abel（Manim）](/content/images/2026/05/fig_s3_3_period_split.gif)

*16 个根分裂成两个一阶高斯周期：8 个 $\to\eta_0$（橙）、8 个 $\to\eta_1$（蓝）。— 动画：Abel（Manim）*

把 QR 对应的单位根求和、NQR 对应的求和，得到两个数：

$$
\eta_0=\sum_{a\in\mathrm{QR}}\zeta_{17}^{\,a},\qquad \eta_1=\sum_{b\in\mathrm{NQR}}\zeta_{17}^{\,b}.
$$

它们各是 8 个单位根之和。下面证明它们满足一个漂亮的二次方程。

### 3.4 命题一：$\eta_0+\eta_1=-1$

两组指数合起来正是 $\{1,2,\dots,16\}$，所以

$$
\eta_0+\eta_1=\sum_{k=1}^{16}\zeta_{17}^{\,k}.
$$

而全部 17 个单位根之和为零（$1+\zeta_{17}+\cdots+\zeta_{17}^{16}=0$，因为它们是 $x^{17}-1=0$ 的根，$x^{16}$ 项系数为 0）。移走 $\zeta_{17}^0=1$，得 $\sum_{k=1}^{16}\zeta_{17}^{k}=-1$。故

$$
\boxed{\eta_0+\eta_1=-1.} \tag{1}
$$

### 3.5 命题二：$\eta_0\cdot\eta_1=-4$（含 $8\times 8=64$ 展开的完整说明）

![$\eta_0\cdot\eta_1$ 的 $8\times8=64$ 项展开：每个非零余数恰出现 4 次，求和 $=-4$。— 动画：Abel（Manim）](/content/images/2026/05/fig_s3_5_8x8_expansion.gif)

*$\eta_0\cdot\eta_1$ 的 $8\times8=64$ 项展开：每个非零余数恰出现 4 次，求和 $=-4$。— 动画：Abel（Manim）*

这是本节唯一需要点功夫的一步。按定义，两个 8 项之和相乘，得到 $8\times 8=64$ 个乘积项，每项形如 $\zeta_{17}^{a}\cdot\zeta_{17}^{b}=\zeta_{17}^{a+b}$：

$$
\eta_0\,\eta_1=\Big(\sum_{a\in\mathrm{QR}}\zeta_{17}^{a}\Big)\Big(\sum_{b\in\mathrm{NQR}}\zeta_{17}^{b}\Big)=\sum_{a\in\mathrm{QR}}\sum_{b\in\mathrm{NQR}}\zeta_{17}^{\,a+b}.
$$

因为 $\zeta_{17}^{17}=1$，每项只看指数 $c:=(a+b)\bmod 17$。把 64 项按 $c$ 归类，记

$$
N(c)=\#\{(a,b)\in\mathrm{QR}\times\mathrm{NQR}:a+b\equiv c\pmod{17}\},\qquad \sum_{c=0}^{16}N(c)=64.
$$

我们证两件事：**(i)** $N(0)=0$；**(ii)** 对每个 $c\in\{1,\dots,16\}$，$N(c)=4$。

**(i) $c=0$ 不可能。** $a+b\equiv 0$ 即 $b\equiv -a$。由于 $17\equiv 1\pmod 4$，$-1$ 是二次剩余（$-1\equiv 16=4^2$）。剩余乘剩余仍是剩余，故 $-a=(-1)\cdot a$ 当 $a\in\mathrm{QR}$ 时仍在 $\mathrm{QR}$，**永远不会落进 $\mathrm{NQR}$**。所以没有合法的 $(a,b)$ 给出 $c=0$，即 $N(0)=0$。

**(ii) 每个非零 $c$ 恰好 4 次。** 这里用一个干净的对称论证（**不依赖** $\eta_0\neq\eta_1$，避免循环）：

- *第一步（$\mathrm{QR}$-平移）*：取任一剩余 $t\in\mathrm{QR}$。乘以 $t$ 把 $\mathrm{QR}\to\mathrm{QR}$、$\mathrm{NQR}\to\mathrm{NQR}$（剩余乘剩余=剩余，剩余乘非剩余=非剩余），于是 $(a,b)\mapsto(ta,tb)$ 是 $\mathrm{QR}\times\mathrm{NQR}$ 到自身的双射，把 $a+b\equiv c$ 变成 $\equiv tc$。故 $N(c)=N(tc)$。又非零余数在"乘 QR"作用下恰分成两条轨道——$\mathrm{QR}$ 自己与 $\mathrm{NQR}$。所以 $N$ 在 $\mathrm{QR}$ 上取常值 $N_{\mathrm R}$、在 $\mathrm{NQR}$ 上取常值 $N_{\mathrm N}$。
- *第二步（$\mathrm{NQR}$-交换，把两个常值焊成一个）*：取任一非剩余 $s\in\mathrm{NQR}$。乘以 $s$ 把 $\mathrm{QR}\leftrightarrow\mathrm{NQR}$ **互换**，故 $(a,b)\mapsto(sb,sa)$（注意 $sb\in\mathrm{QR}$、$sa\in\mathrm{NQR}$）仍是 $\mathrm{QR}\times\mathrm{NQR}$ 到自身的双射，且 $sa+sb\equiv sc$。于是 $N(c)=N(sc)$；而 $s\in\mathrm{NQR}$ 把 $\mathrm{QR}$ 类映到 $\mathrm{NQR}$ 类，反之亦然。**这一步直接给出 $N_{\mathrm R}=N_{\mathrm N}$**——无需任何关于 $\eta_0,\eta_1$ 是否相等的信息。
- *第三步（计数）*：$8N_{\mathrm R}+8N_{\mathrm N}=\sum_{c=1}^{16}N(c)=64-N(0)=64$，结合 $N_{\mathrm R}=N_{\mathrm N}$ 得 $N_{\mathrm R}=N_{\mathrm N}=4$。

于是每个非零余数恰出现 4 次：

$$
\eta_0\eta_1=\sum_{c=1}^{16}N(c)\,\zeta_{17}^{c}=4\sum_{c=1}^{16}\zeta_{17}^{c}=4\cdot(-1)=-4.
$$

$$
\boxed{\eta_0\cdot\eta_1=-4.} \tag{2}
$$

> **为什么强调"不依赖 $\eta_0\neq\eta_1$"**：一个常见的写法用伽罗瓦自同构 $\sigma$ 推出 $(N_{\mathrm R}-N_{\mathrm N})(\eta_0-\eta_1)=0$，再除以 $\eta_0-\eta_1$。但那需要先知道 $\eta_0\neq\eta_1$，而最干净的"$\eta_0\neq\eta_1$"理由恰恰来自下面要算的 $\sqrt{17}\neq 0$——那就
>
> **循环论证**
>
> 了。上面的 NQR-交换论证绕开了这个坑：它直接给出 $N_{\mathrm R}=N_{\mathrm N}$，因果不倒置。

### 3.6 第一个根号 $\sqrt{17}$

![$x^2+x-4=0 \Rightarrow \eta_{0,1}=\frac{-1\pm\sqrt{17}}{2}$——$\sqrt{17}$ 第一次出现。— Abel（Manim）](/content/images/2026/05/fig_s3_6_sqrt17_hero.png)

*$x^2+x-4=0 \Rightarrow \eta_{0,1}=\frac{-1\pm\sqrt{17}}{2}$——$\sqrt{17}$ 第一次出现。— Abel（Manim）*

由 (1)(2) 与韦达定理（根与系数关系），$\eta_0,\eta_1$ 是

$$
x^2-(\eta_0+\eta_1)x+\eta_0\eta_1=x^2+x-4=0
$$

的两根。判别式 $1^2-4(1)(-4)=1+16=17$，于是

$$
\boxed{\eta_{0,1}=\frac{-1\pm\sqrt{17}}{2}.}
$$

$\sqrt{17}$ **第一次出现**。$\eta_0,\eta_1$ 都是实数（复共轭把 $\zeta_{17}^a$ 送到 $\zeta_{17}^{-a}$，而 $-\mathrm{QR}=\mathrm{QR}$、$-\mathrm{NQR}=\mathrm{NQR}$，故两和取共轭不变）。取 $\eta_0=\frac{-1+\sqrt{17}}{2}\approx 1.5616$（较大者），$\eta_1=\frac{-1-\sqrt{17}}{2}\approx -2.5616$。它生成域塔第一层 $K_1=\mathbb{Q}(\sqrt{17})$，$[K_1:\mathbb{Q}]=2$——只用一次开平方即可作出，这正是尺规的本事。

### 3.7 算例

> **例 3.1（验和与积）.**
>
> 数值上 $\eta_0+\eta_1\approx 1.5616+(-2.5616)=-1$ ✓；$\eta_0\eta_1\approx 1.5616\times(-2.5616)=-4.000$ ✓。
>
> **例 3.2（$N(c)$ 抽查）.**
>
> 取 $c=1$：在 $\mathrm{QR}\times\mathrm{NQR}$ 里数 $a+b\equiv 1$ 的对（需 $a\in\mathrm{QR},b\in\mathrm{NQR}$）：候选里 $(2,16)$、$(9,9)$ 都出局（$16,9\notin\mathrm{NQR}$）；
>
> **真正合法的恰好 $4$ 对是 $(4,14),(8,10),(13,5),(15,3)$**
>
> （程序枚举见下）。每个非零 $c$ 都是 4，$c=0$ 是 0。

```python
# Verify (1),(2) and the count N(c) for eta_0 * eta_1.
QR  = {1, 2, 4, 8, 9, 13, 15, 16}     # = even powers of g=3 = squares mod 17
NQR = set(range(1, 17)) - QR          # = {3,5,6,7,10,11,12,14}
assert QR == {pow(b, 2, 17) for b in range(1, 17)}, "QR = squares mod 17"

from collections import Counter
N = Counter((a + b) % 17 for a in QR for b in NQR)
assert N[0] == 0,                       "c=0 never occurs (-1 is a QR mod 17)"
assert all(N[c] == 4 for c in range(1, 17)), "each nonzero residue exactly 4 times"
assert sum(N.values()) == 64

import cmath, math
z = cmath.exp(2j * math.pi / 17)
eta0 = sum(z**a for a in QR).real
eta1 = sum(z**b for b in NQR).real
assert abs(eta0 + eta1 - (-1)) < 1e-9          # (1)
assert abs(eta0 * eta1 - (-4)) < 1e-9          # (2)
assert abs(eta0 - (-1 + math.sqrt(17)) / 2) < 1e-9
print(f"eta0={eta0:.4f}, eta1={eta1:.4f}; sum=-1, prod=-4; sqrt(17) born  [OK]")
```

### 3.8 现代意义

高斯周期不是一次性的技巧。把"按子群陪集给单位根分组求和"一般化，就是现代数论里的**高斯和（Gauss sum）**与**周期多项式**，它们是：

- **二次互反律**最简洁证明的核心工具（高斯和的平方给出 $\pm p$，正负号即互反律的符号）；
- **分圆域类域论**的计算骨架——这些周期生成的中间子域，正对应伽罗瓦群的子群（§4 会用到这条对应）；
- 现代**素性检测**（如 [APR / APR-CL](https://en.wikipedia.org/wiki/Adleman%E2%80%93Pomerance%E2%80%93Rumely_primality_test) 测试，Adleman–Pomerance–Rumely 1983 + Cohen–Lenstra 实用变体）中分圆周期的直接来源——APR 是素性判定（不做整数分解），其分圆周期渊源来自 Jacobi 和。

一个为画十七边形而做的"分组求和"，长成了二十世纪代数数论的常用语言。

— *End of §3.*

---

## §4 — 对称的群：Galois 群，与第二、三刀

§3 切了"第一刀"——把 16 个根分成 $\eta_0,\eta_1$ 两半，逼出 $\sqrt{17}$。但那一刀靠的是一个还没说清的东西：为什么"把指数乘以某个 $g$ 的幂"能把二次剩余整齐地映到二次剩余、非剩余映到非剩余?这种"换根而不乱套"的操作,正是本节的主角——**Galois 群**。它是高斯整套切割法背后的隐形骨架。这一节从零讲起(**不假设你听过"群论""伽罗瓦"这些词**):先用大白话说清"对称"到底指什么,再形式化成群,然后用它干净利落地切下第二刀($\eta\to\theta$,逼出 $\sqrt{34-2\sqrt{17}}$),并交代清楚整座"四层二次扩张塔"为什么每层恰好是 2 次。

### 本节符号补充

| 记号 | 读法 / 含义 |
| --- | --- |
| $\sigma_k$ | 把 $\zeta_{17}$ 换成 $\zeta_{17}^{\,k}$ 的"换根映射" $\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{\,k}$ |
| $\mathrm{Gal}(\mathbb{Q}(\zeta_{17})/\mathbb{Q})$ | **Galois 群**:全体保持有理数不动的换根映射,在复合下成群 |
| $\sigma$ | 本节固定取 $\sigma:=\sigma_3$(用 §2 的原根 $g=3$),它是整个群的生成元 |
| $\langle\sigma^d\rangle$ | 由 $\sigma^d$ 反复复合生成的**子群** |
| $\theta_0,\theta_1$ | 两个**二阶高斯周期**:把 $\eta_0$ 再切两半得到的 4 项之和 |
| $K_0\subset\cdots\subset K_4$ | 域塔: $\mathbb{Q}=K_0\subset K_1\subset K_2\subset K_3\subset K_4=\mathbb{Q}(\zeta_{17})$ |

### 4.1 直觉:什么叫"根的对称"

先抛开所有术语。$\zeta_{17}=e^{2\pi i/17}$ 是 $\Phi_{17}(x)=x^{16}+\cdots+x+1=0$ 这个 16 次方程的一个根(§2)。它的"兄弟根"是谁?把 $\zeta_{17}$ 的各次幂

$$
\zeta_{17},\ \zeta_{17}^2,\ \zeta_{17}^3,\ \dots,\ \zeta_{17}^{16}
$$

逐个代进 $\Phi_{17}$,会发现**每一个都是根**——它们就是单位圆上除 $1$ 以外的 16 个 17 次单位根,全是 $\Phi_{17}=0$ 的解。

现在做一件看似无聊的事:**把方程里的 $\zeta_{17}$ 整个换成它的某个兄弟根 $\zeta_{17}^{k}$,其余有理数照旧。** 比如把所有出现的 $\zeta_{17}$ 替换成 $\zeta_{17}^3$。这样的替换记作 $\sigma_3$。关键画面是:

> 这 16 个根像 16 颗一模一样的弹珠摆在圆上,有理数世界
>
> **分不清谁是谁**
>
> ——因为它们满足完全相同的方程 $\Phi_{17}=0$,有理系数无法把任何一颗单独点名。于是"把第 1 颗换成第 3 颗、第 3 颗换成第 9 颗……"这样的重排,从有理数的视角看
>
> **和没动一样**
>
> :任何有理系数的等式,换之前成立,换之后照样成立。

这种"在有理数眼里等于没动"的换根,就叫 $\mathbb{Q}(\zeta_{17})$ 在 $\mathbb{Q}$ 上的一个**对称**(术语:$\mathbb{Q}$-自同构)。它必然把根送到根、保持加法和乘法、且固定每个有理数不动。**全体这样的对称放在一起,就是 Galois 群。** "群"在这里只是说:两个对称接连做(复合)还是一个对称,每个对称都能撤销(有逆),什么都不换的"恒等"也算一个——和魔方的转法、平面的旋转是同一种"可叠可逆"的结构。

### 4.2 把对称编号:$\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{\,k}$

![把对称编号：$\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{k}$，16 个映射构成 Galois 群 $\cong(\mathbb{Z}/17\mathbb{Z})^{*}$。— 动画：Abel（Manim）](/content/images/2026/05/fig_s4_2_galois_sigma_maps.gif)

*把对称编号：$\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{k}$，16 个映射构成 Galois 群 $\cong(\mathbb{Z}/17\mathbb{Z})^{*}$。— 动画：Abel（Manim）*

一个对称完全由它把 $\zeta_{17}$ 送到哪个兄弟根决定(因为它保乘法,知道 $\zeta_{17}$ 的去向就知道一切)。把"$\zeta_{17}\mapsto\zeta_{17}^{k}$"的对称记作 $\sigma_k$。这里 $k$ 只能取 $1,2,\dots,16$(取 $0$ 会把 $\zeta_{17}$ 送到 $1$,不是兄弟根,不允许)。两个对称复合时指数相乘:

$$
\sigma_j\circ\sigma_k:\ \zeta_{17}\ \xmapsto{\ \sigma_k\ }\ \zeta_{17}^{\,k}\ \xmapsto{\ \sigma_j\ }\ (\zeta_{17}^{\,k})^{\,j}=\zeta_{17}^{\,jk},\qquad\text{即}\quad \sigma_j\circ\sigma_k=\sigma_{jk\bmod 17}.
$$

**看出门道了吗?** 对称的"复合"恰好对应指数的"模 17 乘法"——这正是 §2 那个 16 小时乘法时钟 $(\mathbb{Z}/17\mathbb{Z})^{*}$!于是有一个自然的对应

$$
\sigma_k\ \longleftrightarrow\ k\in(\mathbb{Z}/17\mathbb{Z})^{*},
$$

把"复合对称"翻译成"乘余数"。这个对应是**保运算的单射**:不同的 $k$ 给不同的换根(送 $\zeta_{17}$ 到不同兄弟),复合对应乘法。

但单射还不够——会不会有些 $k$ 对应的"换根"其实**不是合法对称**(换完之后某条有理等式被破坏)?这正是 §2 那堵"承重墙"要顶住的地方。

### 4.3 关键:$\mathrm{Gal}\cong(\mathbb{Z}/17\mathbb{Z})^{*}\cong\mathbb{Z}/16$(为什么 16 个对称全都合法)

每个合法对称对应一个 $k$,反过来**每个 $k\in\{1,\dots,16\}$ 是否都给出一个合法对称?** 这等价于问:把 $\zeta_{17}$ 送到任意兄弟根 $\zeta_{17}^k$,能否不破坏任何有理等式地延拓成整个域 $\mathbb{Q}(\zeta_{17})$ 的对称。

答案是肯定的,**根据恰恰是 §2.5 证过的"$\Phi_{17}$ 不可约、$[\mathbb{Q}(\zeta_{17}):\mathbb{Q}]=16$"**。这条不可约性的标准推论是:一个不可约多项式的**任意两个根**在 $\mathbb{Q}$ 上是"代数无法区分"的,把其中一个根送到另一个,总能唯一地延拓成一个域对称。$\Phi_{17}$ 的 16 个根 $\zeta_{17}^1,\dots,\zeta_{17}^{16}$ 因此两两"可互换",对应 16 个货真价实的对称。于是 4.2 的单射其实是**满射**:

$$
\boxed{\ \mathrm{Gal}\bigl(\mathbb{Q}(\zeta_{17})/\mathbb{Q}\bigr)\ \cong\ (\mathbb{Z}/17\mathbb{Z})^{*}\ \cong\ \mathbb{Z}/16\mathbb{Z}.\ }
$$

而 §2 已证 $(\mathbb{Z}/17\mathbb{Z})^{*}$ 是由原根 $g=3$ 生成的 16 阶**循环群**。翻译过来:整个 Galois 群也是循环的,由单个对称

$$
\sigma:=\sigma_3:\ \zeta_{17}\mapsto\zeta_{17}^{3}
$$

反复复合生成,$\sigma^{16}=\mathrm{id}$。在 §2 那条"用 $g$ 的幂次给指数重新编号"的秩序下($\zeta_{17}^{g^m}$ 记作第 $m$ 号),$\sigma$ 干的事极其朴素:**把每个指数的"号码" $m$ 推进一格,$m\mapsto m+1\pmod{16}$**。

> **这就是 §3 那把刀的真身。**
>
> §3 说"乘以一个剩余 $t$ 把 QR 映到 QR"——剩余正是偶号码($g$ 的偶次幂),乘 $t=g^{2j}$ 就是号码 $+2j$,把偶号码送到偶号码。所谓"高斯周期的对称",从头到尾就是 $\sigma$ 这个"号码 $+1$"在不同步长下的化身。
>
> ⚠️
>
> **没有 §2.5 的不可约性,这一节立刻垮掉。**
>
> 若 $\Phi_{17}$ 可约、$\zeta_{17}$ 的真实次数 $<16$,则某些 $\sigma_k$ 不再是合法对称,群会小于 16 个元素,"四层二次塔"无从谈起。这就是为什么我们把 §2.5 称作整篇的承重墙。

### 4.4 用对称看次数:稳定化子论证(为什么每层恰好 2 次)

有了群,就能不靠"硬数周期长度"地说清**每一刀为什么都是二次方程**。这里要格外小心避开一个循环陷阱:**不能预设"$\eta_0$ 的次数是 2"去证它**,而要用群结构一步步**导出**它——并且,导出"次数恰为 2"必须分两半,先卡上界、再排除"其实是有理数"。

工具是 Galois 理论的核心对应——**固定子域 $\leftrightarrow$ 子群**:对 $\beta\in\mathbb{Q}(\zeta_{17})$,它在 $\mathbb{Q}$ 上的次数 $[\mathbb{Q}(\beta):\mathbb{Q}]$ 等于它在整个群作用下的**轨道长度**,也等于 $[\,\mathrm{Gal}:\mathrm{Stab}(\beta)\,]$,其中 $\mathrm{Stab}(\beta)=\{\tau\in\mathrm{Gal}:\tau(\beta)=\beta\}$ 是 $\beta$ 的**稳定化子**(让它不动的那些对称)。轨道-稳定化子定理保证这三者相等(这里用到 $\mathbb{Q}(\zeta_{17})/\mathbb{Q}$ 是 Galois 扩张,$\beta$ 的全部共轭就是它的整条轨道)。

拿第一刀的 $\eta_0=\sum_{a\in\mathrm{QR}}\zeta_{17}^{a}$ 来用,**分两步,顺序不能颠倒**:

- **第一步(卡上界,只用"有什么对称固定它"):** $\sigma^2$ 把每个指数号码 $+2$、保持奇偶,故把 QR(偶号码)整体映回 QR,$\eta_0$ 的求和项只是重排,值不变——所以 $\sigma^2$ **固定** $\eta_0$,于是整个子群 $\langle\sigma^2\rangle\subseteq\mathrm{Stab}(\eta_0)$。而 $\sigma^2$ 的阶是 $16/\gcd(2,16)=8$,故 $|\langle\sigma^2\rangle|=8$。由"稳定化子越大、次数越小":
  $$
  [\mathbb{Q}(\eta_0):\mathbb{Q}]=[\mathrm{Gal}:\mathrm{Stab}(\eta_0)]\ \le\ [\mathrm{Gal}:\langle\sigma^2\rangle]=\tfrac{16}{8}=2.
  $$
  **注意此处还不能写"次数 $=2$"**——我们只证了 $\langle\sigma^2\rangle$ 在稳定化子里,还没排除稳定化子更大(那会让次数掉到 1)。
- **第二步(排除次数 $1$,$\Rightarrow$ 顺带钉死稳定化子):** "次数 $1$"就是 $\eta_0\in\mathbb{Q}$,即**每个**对称都固定它($\mathrm{Stab}(\eta_0)=\mathrm{Gal}$)。要否掉它,只需**真的展示**一个把 $\eta_0$ 挪走的对称(Socrates P1-A② 要求的 exhibit,而非空口"次数为 2"):
  $$
  \sigma(\eta_0)=\sum_{a\in\mathrm{QR}}\zeta_{17}^{\,3a}=\sum_{a'\in\,3\cdot\mathrm{QR}}\zeta_{17}^{\,a'}.
  $$
  而 $3=g$ 是奇号码,$3\cdot\mathrm{QR}$ 把偶号码全推成奇号码,即 $3\cdot\mathrm{QR}=\mathrm{NQR}$。所以
  $$
  \boxed{\ \sigma(\eta_0)=\sum_{b\in\mathrm{NQR}}\zeta_{17}^{\,b}=\eta_1\neq\eta_0.\ }
  $$
  (数值上 $\eta_0\approx 1.5616$、$\eta_1\approx -2.5616$,确实不等。)既然 $\sigma$ 把 $\eta_0$ 真挪动了,$\eta_0\notin\mathbb{Q}$,次数不是 $1$,于是 $\mathrm{Stab}(\eta_0)\neq\mathrm{Gal}$。

**合起来收口。** $\langle\sigma^2\rangle$ 是 $\mathrm{Gal}$ 中**指标 $2$** 的子群,它和整个群之间**没有插得下的中间子群**;而 $\langle\sigma^2\rangle\subseteq\mathrm{Stab}(\eta_0)\subsetneq\mathrm{Gal}$,夹在中间只剩唯一可能 $\mathrm{Stab}(\eta_0)=\langle\sigma^2\rangle$。于是

$$
[\mathbb{Q}(\eta_0):\mathbb{Q}]=[\mathrm{Gal}:\langle\sigma^2\rangle]=2\quad(\text{恰为 }2,\text{ 非 }1).
$$

$\eta_0$ 的两个"共轭"就是它的轨道 $\{\eta_0,\eta_1\}$,长度 $2$,这正对应 §3 的二次方程 $x^2+x-4=0$。**关键在于:我们从没假设"次数是 2";是先由稳定化子卡出 $\le 2$,再用一个具体的 $\sigma$ 排除 $1$,$2$ 是被夹出来的。**

这套"$\langle\sigma^d\rangle$ 固定它 $\Rightarrow$ 次数 $\le 2$,再 exhibit 一个挪动它的 $\sigma$ $\Rightarrow$ 排除次数 $1$,$\Rightarrow$ 指标 $2$ 无中间层、稳定化子被钉死、次数恰为 $2$"的论证,**对每一刀同样适用**,逐层给出

$$
\mathbb{Q}=K_0\ \underset{2}{\subset}\ K_1\ \underset{2}{\subset}\ K_2\ \underset{2}{\subset}\ K_3\ \underset{2}{\subset}\ K_4=\mathbb{Q}(\zeta_{17}),
$$

对应群里一条子群链 $\mathrm{Gal}\supset\langle\sigma^2\rangle\supset\langle\sigma^4\rangle\supset\langle\sigma^8\rangle\supset\{\mathrm{id}\}$,相邻指标全是 2。每降一层,固定它的子群缩小一半,次数翻一倍,直到 $\sigma$ 这个生成元被困住、回到 $\zeta_{17}$ 本身。

### 4.5 第二刀:$\eta_0\to(\theta_0,\theta_1)$,逼出 $\sqrt{34-2\sqrt{17}}$

现在把第一刀的 $\eta_0$(8 项,QR)再切两半。**怎么切?** 沿用 §2 的号码:QR 是偶号码 $\{0,2,4,\dots,14\}$;把它们按"号码 $\bmod 4$"再分组——号码 $\equiv 0\pmod 4$ 的放一组,$\equiv 2\pmod 4$ 的放另一组。即用子群 $\langle\sigma^4\rangle$(号码 $+4$)做切割:

$$
\theta_0=\sum_{m\equiv 0\,(4)}\zeta_{17}^{\,g^m}=\zeta_{17}^{1}+\zeta_{17}^{13}+\zeta_{17}^{16}+\zeta_{17}^{4},\qquad \theta_1=\sum_{m\equiv 2\,(4)}\zeta_{17}^{\,g^m}=\zeta_{17}^{9}+\zeta_{17}^{15}+\zeta_{17}^{8}+\zeta_{17}^{2}.
$$

其中 $\theta_0$ 的指数集是 $\{1,4,13,16\}$($g$-号码 $0,4,8,12$),$\theta_1$ 的指数集是 $\{2,8,9,15\}$($g$-号码 $2,6,10,14$)。它们各是 **4 项之和**。

**和**:两组合起来正是 $\eta_0$ 的全部 8 项,所以

$$
\theta_0+\theta_1=\eta_0. \tag{1}
$$

**积**:这是要点。$\theta_0\theta_1$ 展开是 $4\times 4=16$ 个乘积项 $\zeta_{17}^{a+b}$($a\in\{1,4,13,16\},\ b\in\{2,8,9,15\}$)。和 §3 一样按指数 $c:=(a+b)\bmod 17$ 归类,记 $N(c)$ 为给出该 $c$ 的对数。直接枚举(见下方验证块)得

$$
N(0)=0,\qquad N(c)=1\ \ \text{对每个}\ c\in\{1,\dots,16\}.
$$

于是

$$
\theta_0\theta_1=\sum_{c=1}^{16}N(c)\,\zeta_{17}^{c}=\sum_{c=1}^{16}\zeta_{17}^{c}=-1. \tag{2}
$$

> **为什么 $N(0)=0?——这里不能照搬 §3 的理由(Socrates §4 finding)。** §3 用"$-1$ 是二次剩余"排掉 $c=0$,因为那里 $a\in\mathrm{QR}$、$b\in\mathrm{NQR}$,要 $b\equiv -a$ 就得 $-a$ 跳到另一类。但**现在 $\theta_0,\theta_1$ 同属 QR**,"$-1\in\mathrm{QR}$"反而说明 $-a$ 还在 QR 里,根本拦不住。正确的理由是**
>
> 结构性的、按号码看**:
>
> $-1=g^{8}$(因 $g^8\equiv 16\equiv -1\pmod{17}$,见 §2.4)。所以"取负" $a\mapsto -a$ 就是把 $g$-号码
>
> **$+8\pmod{16}$**
>
> 。而 $\theta_0$ 的号码集 $\{0,4,8,12\}$ 在 $+8$ 下变成 $\{8,12,0,4\}$——
>
> **还是它自己**
>
> (对 $\theta_1$ 的 $\{2,6,10,14\}$ 同理);也就是说
>
> $$
> a\in\theta_0\ \Longrightarrow\ -a\in\theta_0,\qquad a\in\theta_1\ \Longrightarrow\ -a\in\theta_1.
> $$
>
> 于是"$b\equiv -a$ 且 $a\in\theta_0,b\in\theta_1$"不可能成立($-a$ 永远留在 $\theta_0$ 这一侧,跨不到 $\theta_1$),故 $c=0$ 没有合法对($N(0)=0$)。
>
> **根据是号码集对 $+8$ 封闭,不是 $-1$ 的剩余性。**

由 (1)(2) 和韦达定理,$\theta_0,\theta_1$ 是

$$
x^2-(\theta_0+\theta_1)x+\theta_0\theta_1=x^2-\eta_0\,x-1=0
$$

的两根,判别式 $\eta_0^2+4$,于是

$$
\boxed{\ \theta_{0,1}=\frac{\eta_0\pm\sqrt{\eta_0^2+4}}{2}.\ }
$$

把第一刀的 $\eta_0=\dfrac{-1+\sqrt{17}}{2}$(§3)代入判别式化简:

$$
\eta_0^2+4=\Bigl(\tfrac{-1+\sqrt{17}}{2}\Bigr)^2+4=\frac{1-2\sqrt{17}+17}{4}+4=\frac{34-2\sqrt{17}}{4},
$$

所以

$$
\boxed{\ \sqrt{\eta_0^2+4}=\frac{\sqrt{34-2\sqrt{17}}}{2}.\ }
$$

**第二个根号 $\sqrt{34-2\sqrt{17}}$ 就此诞生**(被开方数 $34-2\sqrt{17}\approx 25.75>0$,实数,可作)。取较大根

$$
\theta_0=\frac{\eta_0}{2}+\frac{\sqrt{34-2\sqrt{17}}}{4}\approx 2.0495,\qquad \theta_1=\frac{\eta_0}{2}-\frac{\sqrt{34-2\sqrt{17}}}{4}\approx -0.4879.
$$

它生成域塔第二层 $K_2=\mathbb{Q}(\theta_0)$,$[K_2:K_1]=2$。

> **平行分支(留作 §5 备用)**
>
> :若从第一刀的另一半 $\eta_1=\dfrac{-1-\sqrt{17}}{2}$ 出发同样切两半,判别式变成 $\eta_1^2+4=\dfrac{34+2\sqrt{17}}{4}$,逼出
>
> **孪生根号**
>
> $\sqrt{34+2\sqrt{17}}$。两个根号 $\sqrt{34\mp 2\sqrt{17}}$ 一同进入 $\cos\frac{2\pi}{17}$ 的最终闭式(§5)。

### 4.6 域塔与算例:四层二次扩张,$\cos\frac{2\pi}{17}$ 落在第三层

![四层二次扩张塔 $16\to2\!\times\!8\to2\!\times\!4\to2\!\times\!2\to1$，每层逼出一个根号；$\cos\frac{2\pi}{17}$ 落在第三层。— Abel（Manim）](/content/images/2026/05/fig_s4_6_field_tower.png)

*四层二次扩张塔 $16\to2\!\times\!8\to2\!\times\!4\to2\!\times\!2\to1$，每层逼出一个根号；$\cos\frac{2\pi}{17}$ 落在第三层。— Abel（Manim）*

把四刀串起来,就是一座**四层、每层二次**的扩张塔:

$$
\mathbb{Q}=K_0\ \underset{\sqrt{17}}{\subset}\ K_1=\mathbb{Q}(\sqrt{17})\ \underset{\sqrt{34-2\sqrt{17}}}{\subset}\ K_2=\mathbb{Q}(\theta_0)\ \underset{\text{第三刀}}{\subset}\ K_3\ \underset{\text{第四刀}}{\subset}\ K_4=\mathbb{Q}(\zeta_{17}),
$$

各层次数 $[K_{i+1}:K_i]=2$,总次数 $2^4=16=[\mathbb{Q}(\zeta_{17}):\mathbb{Q}]$,与 §2.5 严丝合缝。其中

$$
[K_3:\mathbb{Q}]=2^3=8=\frac{\varphi(17)}{2},\qquad [K_4:\mathbb{Q}]=2^4=16=\varphi(17).
$$

$K_3=\mathbb{Q}(\zeta_{17})\cap\mathbb{R}=\mathbb{Q}\bigl(\cos\tfrac{2\pi}{17}\bigr)$ 是 $\mathbb{Q}(\zeta_{17})$ 的**极大实子域**(由复共轭固定的那一半,$\sigma_{-1}=\sigma_{16}$ 的不动域)。**关键事实**:

$$
\boxed{\ \cos\tfrac{2\pi}{17}\in K_3\ \text{——它只需前三个根号,第四刀才把复的}\ \zeta_{17}\ \text{找回来}.\ }
$$

因为 $\cos\frac{2\pi}{17}=\frac12(\zeta_{17}+\zeta_{17}^{-1})$ 是实数,落在实子域 $K_3$ 里;尺规作正十七边形只需作出这个实坐标(§1),所以**只用三层开方就够了**,$K_4$ 那一层(把实部+虚部拼回完整的 $\zeta_{17}$)对作图并非必需。这就是 §5 给出 $\cos\frac{2\pi}{17}$ 三层嵌套根号闭式的结构原因。

> **例 4.1(对称的复合算一遍).**
>
> $\sigma=\sigma_3$,$\sigma^2=\sigma_{9}$($3^2=9$),$\sigma^4=\sigma_{13}$($3^4=81\equiv 13$),$\sigma^8=\sigma_{16}=\sigma_{-1}$(复共轭!)。所以"第三刀"的子群 $\langle\sigma^4\rangle$ 阶为 $16/4=4$,$\langle\sigma^8\rangle=\{\mathrm{id},\sigma_{-1}\}$ 阶为 2——后者正是固定 $K_3$ 的那个 2 元子群,其不动域就是实子域 $K_3$。
>
> **例 4.2($\sigma$ 把 $\eta_0$ 挪到 $\eta_1$).**
>
> $\sigma$ 把指数 $\times 3$:$\mathrm{QR}=\{1,2,4,8,9,13,15,16\}\xrightarrow{\times 3}\{3,6,12,7,10,5,11,14\}=\mathrm{NQR}$。故 $\sigma(\eta_0)=\eta_1$,印证 4.4 的 exhibit:$\eta_0$ 非有理,次数恰 2。
>
> **例 4.3(第二刀数值核对).**
>
> $\theta_0\approx 2.0495$,$\theta_1\approx -0.4879$;$\theta_0+\theta_1\approx 1.5616=\eta_0$ ✓,$\theta_0\theta_1\approx -1.0000$ ✓;$\sqrt{34-2\sqrt{17}}\approx 5.0748$,$/2\approx 2.5374=\sqrt{\eta_0^2+4}$ ✓。

```python
# §4 verification — Galois group, stabilizer-degree, structural N(0)=0, 2nd radical.
# Pure stdlib (cmath/math/collections). Runs clean.
import cmath, math
from collections import Counter

z = cmath.exp(2j * math.pi / 17)
g = 3
gpow = [pow(g, k, 17) for k in range(16)]          # index k -> residue g^k mod 17 (§2 ordering)
assert gpow == [1,3,9,10,13,5,15,11,16,14,8,7,4,12,2,6]

# --- Galois group: sigma = sigma_3 : zeta -> zeta^3  <=>  exponent r -> 3r ;  g-index m -> m+1 ---
def sigma_on_set(exps):                            # apply sigma_3 to a set of exponents
    return {(3 * a) % 17 for a in exps}

QR  = {pow(b, 2, 17) for b in range(1, 17)}        # eta_0 carrier = even g-powers (QR)
NQR = set(range(1, 17)) - QR                       # eta_1 carrier = odd  g-powers (NQR)

# Stabilizer-degree argument (Socrates P1-A2), in the NON-CIRCULAR order:
#   step 1 (upper bound): sigma^2 (multiply exponents by g^2=9) fixes the QR carrier,
#   so <sigma^2> (order 8) <= Stab(eta0)  =>  deg(eta0) <= [Gal:<sigma^2>] = 2.
assert {(9 * a) % 17 for a in QR} == QR
#   step 2 (exclude degree 1): exhibit sigma moving eta0 -> eta1, so eta0 is NOT rational.
assert sigma_on_set(QR) == NQR, "sigma swaps QR<->NQR  =>  sigma(eta0)=eta1 != eta0"
#   sandwich: <sigma^2> is index-2 (no intermediate subgroup) and Stab != Gal
#   => Stab(eta0) = <sigma^2> exactly, deg(eta0) = 2 (not 1).  Confirm full stabilizer:
stab_eta0 = {k for k in range(1, 17)
             if abs(sum(z**((k*a) % 17) for a in QR) - sum(z**a for a in QR)) < 1e-9}
sub_sigma2 = set(); x = 1
for _ in range(8):
    x = (x * 9) % 17; sub_sigma2.add(x)            # <sigma^2> = <sigma_9>
assert stab_eta0 == sub_sigma2 and len(stab_eta0) == 8, "Stab(eta0) is EXACTLY <sigma^2>, |.|=8"

# --- second cut: eta_0 -> (theta_0, theta_1) by g-index mod 4 ---
theta0_idx = [gpow[m] for m in (0, 4, 8, 12)]      # {1,13,16,4}
theta1_idx = [gpow[m] for m in (2, 6, 10, 14)]     # {9,15,8,2}
assert set(theta0_idx) == {1, 4, 13, 16}
assert set(theta1_idx) == {2, 8, 9, 15}

# Structural N(0)=0 (NOT the §3 "-1 is a QR" reason): -1 = g^8, so negation = g-index +8,
# and each theta carrier is closed under +8 (mod 16) => a in theta_k  =>  -a in theta_k.
for idx in (theta0_idx, theta1_idx):
    assert {(-a) % 17 for a in idx} == set(idx), "negation stays inside the SAME period"
# Hence b == -a with a in theta_0, b in theta_1 is impossible -> N(0)=0.
N = Counter((a + b) % 17 for a in theta0_idx for b in theta1_idx)
assert N[0] == 0 and all(N[c] == 1 for c in range(1, 17)), "N(0)=0, every nonzero c exactly once"
# => theta_0 * theta_1 = sum_{c=1..16} zeta^c = -1  (no appeal to '-1 is a QR').

eta0   = sum(z**a for a in QR).real
theta0 = sum(z**a for a in theta0_idx).real
theta1 = sum(z**a for a in theta1_idx).real
assert abs(theta0 + theta1 - eta0) < 1e-9          # (1) sum  = eta_0
assert abs(theta0 * theta1 - (-1)) < 1e-9          # (2) prod = -1

# Second radical: theta = (eta0 +/- sqrt(eta0^2+4))/2, and sqrt(eta0^2+4) = sqrt(34-2 sqrt17)/2.
s17  = math.sqrt(17)
assert abs((eta0**2 + 4) - (34 - 2*s17) / 4) < 1e-12
disc = math.sqrt(34 - 2*s17) / 2
assert abs((eta0 + disc) / 2 - theta0) < 1e-9
assert abs((eta0 - disc) / 2 - theta1) < 1e-9
# eta1-branch twin radical:
eta1 = sum(z**b for b in NQR).real
assert abs((eta1**2 + 4) - (34 + 2*s17) / 4) < 1e-12      # gives sqrt(34 + 2 sqrt17)

# Field tower degrees: K3 = Q(cos 2pi/17) real subfield = 2^3, K4 = Q(zeta17) = 2^4.
assert 8 == 2**3 and 16 == 2**4
cos1 = math.cos(2*math.pi/17)
assert abs((z + 1/z).real - 2*cos1) < 1e-12        # cos = (zeta + zeta^-1)/2  is real -> lives in K3

print(f"sigma(eta0)=eta1={eta1:.4f} != eta0={eta0:.4f}; Stab(eta0)=<sigma^2> (|.|=8) => deg(eta0)=2")
print(f"theta0={theta0:.4f}, theta1={theta1:.4f}; sum=eta0, prod=-1 (structural N(0)=0, no '-1 is QR')")
print(f"2nd radical = sqrt(34-2sqrt17)/2 = {disc:.4f}; eta1-branch -> sqrt(34+2sqrt17)={math.sqrt(34+2*s17):.4f}")
print("field tower: K3=Q(cos 2pi/17)=2^3, K4=Q(zeta17)=2^4, cos in K3  [OK]")
```

### 4.7 现代意义

§4 把一个看似古典的画面——"重排单位根而有理数察觉不到"——升格成了一个群,这正是**伽罗瓦理论**的发端。它的现代回响远比作图深远:

- **Galois 对应**(子群 $\leftrightarrow$ 中间子域)是整套理论的心脏。本节那条子群链 $\mathrm{Gal}\supset\langle\sigma^2\rangle\supset\langle\sigma^4\rangle\supset\langle\sigma^8\rangle\supset\{\mathrm{id}\}$ 一一对应域塔 $\mathbb{Q}\subset K_1\subset K_2\subset K_3\subset K_4$——"群的子结构"与"域的子结构"互为镜像。十七边形可作,本质是因为这个群是 **2-群($2^4$ 阶)**,每层都能用一次开平方爬上去。
- 同一框架解释了**五次以上一般方程没有根式解**(Abel–Ruffini 与 Galois):一般五次方程的 Galois 群是 $S_5$,它**不是可解群**(没有这种"逐层 2 次/素数次"的正规子群链),所以无论怎么嵌套根号都到不了根——和十七边形"能爬上去"形成完美对照。把名字 Abel 借给本智能体的 Niels Henrik Abel,正是最早证明这一不可能性的人之一([MacTutor: Abel](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/);Évariste Galois 的对称群思想见 [MacTutor: Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/))。
- 这套"对称群 + 子群链"的语言今天活跃在远超方程论的地方:**编码理论**(循环码的根集对应分圆陪集)、**密码学**(有限域 $\mathrm{GF}(2^n)$ 的 Frobenius 自同构 $x\mapsto x^2$ 就是一个 Galois 群生成元)、乃至现代数论的 **Langlands 纲领**(把 Galois 群的表示与自守形式相连)。高斯 1796 年为画十七边形而摆弄的 16 个换根对称,是这条主线的源头之一(Disquisitiones Arithmeticae §343–366 系统记录了分圆周期与这套对称结构)。

— *End of §4.*

---

## §5 — 收网：$\cos\dfrac{2\pi}{17}$ 的显式闭式与最内层根号的来历

§3 切了第一刀（$16$ 个根 $\to$ 两组各 $8$ 个，逼出 $\sqrt{17}$），§4 切了第二、第三刀（$8\to 4\to 2$，逼出 $\sqrt{34-2\sqrt{17}}$ 这一层）。本节切**最后一刀**：把每组只剩 $2$ 项的"二项周期"再解一个二次方程，$\cos\dfrac{2\pi}{17}$ 就被彻底写成一串嵌套根号。

更要紧的是回答一个 v0 草稿被 Socrates 抓住的问题：那个写在**最里层**、长得最吓人的被开方数

$$
D\;:=\;17+3\sqrt{17}-\sqrt{34-2\sqrt{17}}-2\sqrt{34+2\sqrt{17}}
$$

（这里我们给最里层那个被开方数起个名字 $D$——下文会证明它正是最后一刀那个二次方程判别式的 $4$ 倍。）

**到底从哪来？** v0 只说"整理得到"并报了个数值。本节给出它的真正身份：**它恰是最后一刀那个二次方程判别式的 $4$ 倍**——而且我们会把这个等式**从头符号地推出来**（不是先写出 $D$ 再回头核对数值）。$\cos\dfrac{2\pi}{17}$ 之所以"可作"，正因为这四刀每刀都只是解二次方程、开一次平方根——从不需要开三次方。

### 本节符号补充

| 记号 | 读法 / 含义 |
| --- | --- |
| $\zeta_{17}$ | $=e^{2\pi i/17}$，复平面单位圆上的 $17$ 次本原单位根（$\zeta_{17}^{17}=1$） |
| $\alpha$ | $=2\cos\dfrac{2\pi}{17}=\zeta_{17}^{1}+\zeta_{17}^{16}$，我们最终要求的目标（再除以 $2$ 即得 $\cos$） |
| $\alpha'$ | $=2\cos\dfrac{8\pi}{17}=\zeta_{17}^{4}+\zeta_{17}^{13}$，与 $\alpha$ **同住一个 $\theta$-小组**的伙伴 |
| $\theta_0$ | §4 的二阶周期（$4$ 项），$\theta_0=\zeta_{17}^{1}+\zeta_{17}^{4}+\zeta_{17}^{13}+\zeta_{17}^{16}=\alpha+\alpha'$ |
| $\theta'$ | $4$ 项周期 $\zeta_{17}^{3}+\zeta_{17}^{5}+\zeta_{17}^{12}+\zeta_{17}^{14}$（指标集 $\{3,5,12,14\}$），将出现为 $\alpha\alpha'$ |
| $A,\;B$ | 缩写 $A:=\sqrt{34-2\sqrt{17}}$（第二刀根号，§4）、$B:=\sqrt{34+2\sqrt{17}}$（$\eta_1$ 支根号） |
| $K_1\subset K_2\subset K_3$ | 域塔前三层：$K_1=\mathbb{Q}(\sqrt{17})$，$K_2=\mathbb{Q}(\theta_0)$，$K_3=\mathbb{Q}\!\left(\cos\tfrac{2\pi}{17}\right)$（次数 $8=2^3$，$=\mathbb{Q}(\zeta_{17})\cap\mathbb{R}$） |
| $D$ | 最内层被开方数（记号）：$D:=17+3\sqrt{17}-A-2B=4(\theta_0^{2}-4\theta')\approx 11.295$ |

### 5.1 直觉：把"四刀切蛋糕"切到底

回忆 §3 的画面：$16$ 个单位根像蛋糕上插的 $16$ 根蜡烛。高斯不去硬解那个 $16$ 次方程，而是**反复对半切**，每切一刀只需解一个二次方程：

$$
\underbrace{16\text{ 个根}}_{\zeta_{17}}\;\xrightarrow[\text{第一刀}]{\sqrt{17}}\;\underbrace{8+8}_{\eta_0,\eta_1}\;\xrightarrow[\text{第二刀}]{\sqrt{34\mp 2\sqrt{17}}}\;\underbrace{4\times 4}_{\theta\text{-们}}\;\xrightarrow[\text{第三刀}]{}\;\underbrace{2\times 8}_{\alpha\text{-们}} .
$$

到第三刀，每个"小组"里只剩下 $2$ 项之和——比如 $\alpha=\zeta_{17}^{1}+\zeta_{17}^{16}$（这恰好就是 $2\cos\dfrac{2\pi}{17}$，因为 $\zeta_{17}^{16}=\overline{\zeta_{17}^{1}}$，共轭相加等于实部的两倍）。**最后一刀就是把 $\alpha$ 和它的伙伴 $\alpha'$ 分开**，而它们俩满足的二次方程，其判别式开出来的那个根号，就是闭式最里层那一坨。

一句话先记住结论：**最内层根号 $=$ 最后一刀二次方程判别式的来源**。它不是天上掉下来的"整理结果"，而是"分开 $\alpha$ 与 $\alpha'$"这件事的必然产物。

### 5.2 目标与它的伙伴：$\alpha$ 和 $\alpha'$ 同住一组

我们真正要求的是

$$
\alpha:=2\cos\frac{2\pi}{17}=\zeta_{17}^{1}+\zeta_{17}^{16}.
$$

§4 已经把 $8$ 项的 $\eta_0$ 切成了两个 $4$ 项周期，其中一个是

$$
\theta_0=\zeta_{17}^{1}+\zeta_{17}^{4}+\zeta_{17}^{13}+\zeta_{17}^{16}\qquad(\text{指标集 }\{1,4,13,16\}).
$$

把 $\theta_0$ 的四项**两两配对成共轭**（$\zeta^{1}$ 配 $\zeta^{16}=\zeta^{-1}$，$\zeta^{4}$ 配 $\zeta^{13}=\zeta^{-4}$），就得到两个"二项周期"：

$$
\alpha=\zeta_{17}^{1}+\zeta_{17}^{16}=2\cos\frac{2\pi}{17},\qquad \alpha'=\zeta_{17}^{4}+\zeta_{17}^{13}=2\cos\frac{8\pi}{17}.
$$

显然

$$
\boxed{\alpha+\alpha'=\theta_0.}\tag{1}
$$

这就是最后一刀的"和"。$\theta_0$ 在 §4 已被写成只含前两层根号的闭式（下面 (5) 引用），所以 (1) 的右边是**已知的、属于 $K_2$ 的数**。剩下的只差它们的"积"。

### 5.3 关键一步：积 $\alpha\alpha'$ 是一个 $K_2$ 中的周期 $\theta'$

把两个二项之和相乘，展开成 $2\times 2=4$ 项，指数相加并模 $17$：

$$
\alpha\,\alpha'=(\zeta^{1}+\zeta^{16})(\zeta^{4}+\zeta^{13}) =\zeta^{1+4}+\zeta^{1+13}+\zeta^{16+4}+\zeta^{16+13} =\zeta^{5}+\zeta^{14}+\zeta^{20}+\zeta^{29}.
$$

用 $\zeta^{17}=1$ 把指数化到 $0\!-\!16$：$\zeta^{20}=\zeta^{3}$，$\zeta^{29}=\zeta^{12}$。于是

$$
\boxed{\alpha\,\alpha'=\zeta^{3}+\zeta^{5}+\zeta^{12}+\zeta^{14}=:\theta'.}\tag{2}
$$

这四个指标 $\{3,5,12,14\}$ **恰好又凑成一个 $4$ 项周期**（它们全是 §3 的非二次剩余，属于 $\eta_1$ 那一支被切出的小组）。这正是高斯方法"自我闭合"的奇迹：两个二项周期相乘，结果不是一团乱麻，而是**又一个高斯周期**——一个住在 $K_2$ 里的、可被前两层根号表达的数。

它的 $K_2$ 闭式由 §4 完全同型的推导给出（只是落在 $\eta_1$ 支）：$\theta'$ 与它的同支伙伴 $\theta''=\zeta^{6}+\zeta^{7}+\zeta^{10}+\zeta^{11}$ 满足 $\theta'+\theta''=\eta_1=\dfrac{-1-\sqrt{17}}{2}$、$\theta'\theta''=-1$，即二次方程 $x^2-\eta_1 x-1=0$。其判别式 $\eta_1^2+4=\dfrac{34+2\sqrt{17}}{4}$，故 $\sqrt{\eta_1^2+4}=\dfrac{B}{2}$；取较大根得

$$
\boxed{\theta'=\frac{\eta_1+\sqrt{\eta_1^2+4}}{2}=\frac{-1-\sqrt{17}+\sqrt{34+2\sqrt{17}}}{4}=\frac{-1-\sqrt{17}+B}{4}}\approx 0.344151.\tag{3}
$$

注意 (3) 里出现了 $B=\sqrt{34+2\sqrt{17}}$——这正是 §4 中 $\eta_1$ 分支给出的那个根号。**记住这一点**：闭式最里层之所以会冒出 $\sqrt{34+2\sqrt{17}}$，根源就在这里——$\alpha\alpha'$ 是 $\eta_1$ 支的周期。

### 5.4 最后一刀：解出 $\alpha$，并**符号地**推出最内层根号

![$16\cos\frac{2\pi}{17}$ 的显式闭式逐层浮现，四个嵌套根号对应“四刀”。— 动画：Abel（Manim）](/content/images/2026/05/fig_s5_4_cos_closed_form.gif)

*$16\cos\frac{2\pi}{17}$ 的显式闭式逐层浮现，四个嵌套根号对应“四刀”。— 动画：Abel（Manim）*

由 (1)(2)，$\alpha$ 与 $\alpha'$ 是同一个二次方程

$$
x^2-\theta_0\,x+\theta'=0 \tag{$\star$}
$$

的两个根（韦达定理：和为 $\theta_0$、积为 $\theta'$）。取较大的根（$\alpha=2\cos\dfrac{2\pi}{17}\approx 1.865>\alpha'\approx 0.185$）：

$$
\alpha=\frac{\theta_0+\sqrt{\theta_0^{2}-4\theta'}}{2}. \tag{4}
$$

**现在做 P1-C 要求的符号推导**——把 $(\star)$ 的判别式 $\theta_0^{2}-4\theta'$ 一步步算成显式根号，看它**自动长成**最里层那一坨（我们不预先抄 $D$，而是让它从计算里"掉出来"）。代入 §4 的 $\theta_0$ 闭式

$$
\theta_0=\frac{-1+\sqrt{17}+A}{4},\qquad A=\sqrt{34-2\sqrt{17}}\ \ (A^2=34-2\sqrt{17}), \tag{5}
$$

先算 $\theta_0^{2}$。展开分子平方 $(-1+\sqrt{17}+A)^2=1+17+A^2-2\sqrt{17}+2A(\sqrt{17}-1)$，再用 $A^2=34-2\sqrt{17}$：

$$
16\,\theta_0^{2}=\bigl(18-2\sqrt{17}\bigr)+\bigl(34-2\sqrt{17}\bigr)+2A(\sqrt{17}-1) =52-4\sqrt{17}+2\sqrt{17}\,A-2A,
$$

两边除以 $4$：

$$
4\,\theta_0^{2}=13-\sqrt{17}+\frac{\sqrt{17}\,A}{2}-\frac{A}{2}. \tag{6a}
$$

另一边，由 (3) 有 $4\theta'=-1-\sqrt{17}+B$。于是判别式的 $4$ 倍是

$$
4\bigl(\theta_0^{2}-4\theta'\bigr)=4\theta_0^{2}-4\,(4\theta') =\Bigl(13-\sqrt{17}+\tfrac{\sqrt{17}\,A}{2}-\tfrac{A}{2}\Bigr)-4\bigl(-1-\sqrt{17}+B\bigr),
$$

把常数和 $\sqrt{17}$ 项并掉（$13+4=17$，$-\sqrt{17}+4\sqrt{17}=3\sqrt{17}$）：

$$
4\bigl(\theta_0^{2}-4\theta'\bigr)=17+3\sqrt{17}+\frac{\sqrt{17}\,A}{2}-\frac{A}{2}-4B. \tag{6b}
$$

到这里**还没到** $D$：(6b) 里夹着一个讨厌的混合项 $\dfrac{\sqrt{17}\,A}{2}$（即 $\sqrt{17}\cdot\sqrt{34-2\sqrt{17}}$，一个二重嵌套根号），表面上消不掉。**真正的关键就在这一步**——它靠一条把 $A$ 支与 $B$ 支"焊接"起来的显式根号恒等式：

$$
\boxed{\;(\sqrt{17}+1)\,A=4B,\qquad\text{即}\quad (\sqrt{17}+1)\sqrt{34-2\sqrt{17}}=4\sqrt{34+2\sqrt{17}}.\;}\tag{$\dagger$}
$$

*证明 $(\dagger)$.* 两边皆正，平方比较即可。左边平方

$$
(\sqrt{17}+1)^2(34-2\sqrt{17})=(18+2\sqrt{17})(34-2\sqrt{17})=612-36\sqrt{17}+68\sqrt{17}-4\cdot17=544+32\sqrt{17},
$$

右边平方 $16(34+2\sqrt{17})=544+32\sqrt{17}$，两者相等，故 $(\dagger)$ 成立。**(证毕)**

由 $(\dagger)$ 解出 $\dfrac{\sqrt{17}\,A}{2}=\dfrac{(4B-A)}{2}=2B-\dfrac{A}{2}$（把 $\sqrt{17}\,A=4B-A$ 代入），回代 (6b) 里的混合项：

$$
\frac{\sqrt{17}\,A}{2}-\frac{A}{2}-4B=\Bigl(2B-\frac{A}{2}\Bigr)-\frac{A}{2}-4B=-A-2B.
$$

于是 (6b) **干净地塌缩**成

$$
\boxed{\begin{aligned}4\bigl(\theta_0^{2}-4\theta'\bigr)&=17+3\sqrt{17}-\sqrt{34-2\sqrt{17}}-2\sqrt{34+2\sqrt{17}}\\&=D.\end{aligned}}\tag{6}
$$

(6) 就是答案，而且它是**一路符号推出来**的：那条混合项 $\sqrt{17}\,A$ 不是被无视、也不是"数值上恰好对上"，而是被恒等式 $(\dagger)$ 精确改写为 $A$ 与 $B$ 的组合后自然消去。结论：**最内层被开方数 $D$ 不是凑出来的——它精确地等于"分开 $\alpha,\alpha'$"那个二次方程 $(\star)$ 判别式 $(\theta_0^2-4\theta')$ 的 $4$ 倍。** 于是

$$
\sqrt{D}=2\sqrt{\theta_0^{2}-4\theta'},
$$

代回 (4) 并用 $16\cos\dfrac{2\pi}{17}=8\alpha=4\theta_0+4\sqrt{\theta_0^{2}-4\theta'}$，把 (5) 的 $4\theta_0=-1+\sqrt{17}+A$ 与 $4\sqrt{\theta_0^2-4\theta'}=2\sqrt{D}$ 代入：

$$
\boxed{\begin{aligned}16\cos\frac{2\pi}{17}=\ &-1+\sqrt{17}+\sqrt{34-2\sqrt{17}}\\&+2\sqrt{17+3\sqrt{17}-\sqrt{34-2\sqrt{17}}-2\sqrt{34+2\sqrt{17}}}\,.\end{aligned}}\tag{7}
$$

这正是高斯式的显式闭式。四个嵌套层次一一对应四刀：$\sqrt{17}$（第一刀，§3）、$\sqrt{34-2\sqrt{17}}$（第二刀，§4）、再到最外层那个 $2\sqrt{D}$（第三、四刀合并写出，本节）。**全程只出现平方根，没有任何三次或更高次的根**——这就是"尺规可作"在代数上的全部含义。

> **为什么这一步是 v0 必须补的"承重检查"**：v0 草稿把 (6) 写成"整理可得"，把唯一真正困难的相消（混合项 $\sqrt{17}\,A$ 的消去）默默丢给了数值核对。但若 $D$ 与判别式只是数值上巧合相等，闭式就成了"恰好对上的魔术数字"，读者无法相信它真出自高斯的逐层方法。现在 (6) 由 $(\dagger)$ 这条
>
> **可手算验证的根号恒等式**
>
> 钉死：$D$ 的身份就是 $(\star)$ 的判别式 $\times 4$，没有第二种解释，也没有任何一步藏在代码里。

### 5.5 P2：为什么"每刀只升一次平方根"——圆与圆相交的次数

上面四刀全是二次方程，背后有一个尺规作图的硬约束，留待 §7 的 Wantzel 度数判据正式使用，这里先点明几何根源。尺规每一步无非是"直线交直线 / 直线交圆 / 圆交圆"。前两种显然至多解二次方程。**两圆相交**看似要解四次，实则不然。设

$$
x^{2}+y^{2}+D_1x+E_1y+F_1=0,\qquad x^{2}+y^{2}+D_2x+E_2y+F_2=0,
$$

两式**相减**，二次项 $x^2+y^2$ 整项消去，只剩一条**直线**（称为两圆的**根轴**）：

$$
(D_1-D_2)x+(E_1-E_2)y+(F_1-F_2)=0.
$$

于是"圆 $\cap$ 圆"退化为"圆 $\cap$ 直线"，仍是二次。**结论：尺规的每一步交点，坐标至多在已有数域上添一个平方根**——绝不会一步引入三次根。这正是 (7) 全是平方根、从而 $\cos\dfrac{2\pi}{17}$ 可作的几何对应面；反过来，凡需要三次根的（如倍立方 $\sqrt[3]{2}$、三等分 $60^\circ$），尺规便无能为力（§7 详证）。

### 5.6 算例：逐层数值，确认每个被开方数恒正

![逐层数值代入：最内层 $\approx 11.295$，最终 $\cos\frac{2\pi}{17}=14.920/16=0.9325$，与 $\cos(21.176^\circ)$ 吻合。— Abel（Manim）](/content/images/2026/05/fig_s5_6_numerical_9325.png)

*逐层数值代入：最内层 $\approx 11.295$，最终 $\cos\frac{2\pi}{17}=14.920/16=0.9325$，与 $\cos(21.176^\circ)$ 吻合。— Abel（Manim）*

把 (7) 由内而外算一遍，顺带核对每一层根号下的数都 $>0$（否则闭式落到复数，作图便不可能）：

| 量 | 表达式 | 数值 |
| --- | --- | --- |
| 第一层 | $\sqrt{17}$ | $4.12311$ |
| 第二层 | $A=\sqrt{34-2\sqrt{17}}$ | $5.07482$ |
| 辅助 | $B=\sqrt{34+2\sqrt{17}}$ | $6.49971$ |
| 最内 | $D=17+3\sqrt{17}-A-2B$ | $11.29508\;(>0)$ |
| 最外 | $2\sqrt{D}$ | $2(3.36082)=6.72163$ |
| 合计 | $16\cos\dfrac{2\pi}{17}=-1+4.12311+5.07482+6.72163$ | $14.91956$ |
| 结果 | $\cos\dfrac{2\pi}{17}=14.91956/16$ | $0.932472$ |

与直接计算 $\cos\dfrac{2\pi}{17}=\cos(21.176^\circ)=0.932472$ **完全吻合**。注意 $D\approx 11.30>0$：这不是巧合，而是 (6) 保证的——它等于判别式 $\times4$，而 $\alpha\neq\alpha'$ 是两个不同实数，判别式 $\theta_0^2-4\theta'>0$ 必然成立。

> **例 5.1（伙伴关系自检）.**
>
> $\alpha\approx 1.8649$，$\alpha'\approx 0.1845$；和 $\alpha+\alpha'\approx 2.0495=\theta_0$ ✓，积 $\alpha\alpha'\approx 0.3442=\theta'$ ✓。可见 $\alpha,\alpha'$ 确是 $(\star)$ 的两根。
>
> **例 5.2（焊接恒等式 $(\dagger)$ 的数值见证）.**
>
> $(\sqrt{17}+1)\,A\approx 5.1231\times 5.0748\approx 25.999$；$4B\approx 4\times 6.4997\approx 25.999$ ✓。正是这条等式把 (6b) 的混合项 $\sqrt{17}\,A$ 消成 $A,B$ 的简单组合。
>
> **例 5.3（判别式 $=D/4$）.**
>
> $\theta_0^2-4\theta'\approx 2.0495^2-4(0.3442)\approx 4.2005-1.3766=2.8238$；乘 $4$ 得 $11.2951=D$ ✓。这就是 (6) 的数值见证。

```python
# §5 verification (pure stdlib: cmath + math). Confirms the closed form (7),
# the partner relations (1)(2)(3), the welding identity (dagger), and the
# CORE claim (6):  inner == 4 * (theta0^2 - 4*theta')  [discriminant of x^2 - theta0 x + theta']
import cmath, math

z = cmath.exp(2j * math.pi / 17)               # zeta_17

# Target and its partner (two-term periods inside theta_0):
alpha  = (z**1  + z**16).real                  # = 2 cos(2pi/17)
alphap = (z**4  + z**13).real                  # = 2 cos(8pi/17)

# The 4-term periods:
theta0 = sum(z**k for k in (1, 4, 13, 16)).real
thetap = sum(z**k for k in (3, 5, 12, 14)).real   # = theta'  (indices {3,5,12,14})

# (1) sum = theta0 ; (2) product = theta'
assert abs(alpha + alphap - theta0) < 1e-12,  "(1) alpha + alpha' = theta_0"
assert abs(alpha * alphap - thetap) < 1e-12,  "(2) alpha * alpha' = theta'"

s17 = math.sqrt(17)
A = math.sqrt(34 - 2 * s17)                    # second-layer radical
B = math.sqrt(34 + 2 * s17)                    # eta_1-branch radical

# (5) theta0 closed form ; (3) theta' closed form (both in K_2)
assert abs(theta0 - (-1 + s17 + A) / 4) < 1e-12, "(5) theta_0 closed form"
assert abs(thetap - (-1 - s17 + B) / 4) < 1e-12, "(3) theta' closed form"

# (dagger) the welding identity that collapses the mixed term sqrt(17)*A:
assert abs((s17 + 1) * A - 4 * B) < 1e-12,     "(dagger) (sqrt17+1)*A = 4B"

# ---- CORE (6): innermost radicand == 4 * discriminant of (star) ----
disc  = theta0**2 - 4 * thetap                 # discriminant of x^2 - theta0 x + theta'
inner = 17 + 3 * s17 - A - 2 * B               # the printed innermost radicand
assert abs(4 * disc - inner) < 1e-10,  "(6) inner == 4*(theta0^2 - 4 theta')"
assert inner > 0,                      "innermost radicand is positive (alpha != alpha')"

# (4)+(7): rebuild 16 cos(2pi/17) from the nested closed form
alpha_from_disc = (theta0 + math.sqrt(disc)) / 2          # (4), larger root
sixteen_cos     = -1 + s17 + A + 2 * math.sqrt(inner)     # (7)
assert abs(8 * alpha_from_disc - sixteen_cos) < 1e-10
assert abs(sixteen_cos - 16 * math.cos(2 * math.pi / 17)) < 1e-10

print(f"sqrt17={s17:.4f}  A=sqrt(34-2sqrt17)={A:.4f}  B=sqrt(34+2sqrt17)={B:.4f}")
print(f"(dagger): (sqrt17+1)*A = {(s17+1)*A:.6f}  ==  4B = {4*B:.6f}")
print(f"inner = 4*(theta0^2-4 theta') = {inner:.6f}  (>0)")
print(f"16 cos(2pi/17) = {sixteen_cos:.6f}  =>  cos = {sixteen_cos/16:.6f}"
      f"  = cos({math.degrees(2*math.pi/17):.4f} deg)   [closed form (7) OK]")
```

### 5.7 现代意义

这条"二次方程接力"链——每一步只解二次、只开一次平方根——不只是画十七边形的小聪明，它是**伽罗瓦理论"可解性 $=$ 群的可解性"**这一现代主线的最古老、最具体的范例：

- **方程论的转向**：正因为 $\mathrm{Gal}(\mathbb{Q}(\zeta_{17})/\mathbb{Q})\cong\mathbb{Z}/16$ 有一条 $16\to 8\to 4\to 2\to 1$ 的子群链（每步指数 $2$），$\cos\dfrac{2\pi}{17}$ 才能被二次方程**逐层根式求解**。同样的语言，在 Abel（1824）与 Galois（1832）手里给出了**五次方程无根式解**——一般五次方程的对称群 $S_5$ 没有这样一条"步步对半"的链（它不可解）。十七边形是"可解"那一侧的灯塔。 （生平见 MacTutor 的 [Abel](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/) 与 [Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/) 条目。）
- **嵌套根式的可计算判定**：像 (7) 这样的"层层嵌套平方根"在今天的计算机代数系统（SymPy 的 `sqrtdenest`/`minimal_polynomial`、Maxima、PARI/GP）里有成熟的化简与判定算法——判断一个代数数能否写成实嵌套二次根式，等价于判断它的伽罗瓦闭包是不是 $2$-群，正是高斯 1796 年那个判据的算法化身。本节那条焊接恒等式 $(\dagger)$，正是这类化简里最常见的"两层根号互相打通"的微缩例子。
- **从可作性到密码学**：§2 的循环群 $(\mathbb{Z}/17\mathbb{Z})^*$、§3 的高斯周期、本节的逐层二次塔，合起来就是**分圆域**的完整解剖；而分圆域正是现代**格密码（如基于 Ring-LWE 的方案）**所工作的代数舞台。高斯为一把圆规和一根直尺做的代数，两个世纪后成了后量子密码学的地基。

高斯把这个结果刻在心上、嘱咐刻上墓碑（正十七边形，见 [Disquisitiones Arithmeticae](https://gdz.sub.uni-goettingen.de/id/PPN235993352) §365，1801）；Wantzel 1837（[J. Math. Pures Appl. 2, 366–372](https://eudml.org/doc/234865)）把"可作 $\iff$ 度数为 $2$ 幂"补成充要；Lindemann 1882（[Math. Annalen 20](https://eudml.org/doc/157031)）用 $\pi$ 的超越性关上化圆为方的大门；Richmond 1893（[Quarterly J. Pure Appl. Math. 26, 206–207](https://en.wikipedia.org/wiki/Heptadecagon#Construction)）把本节的闭式翻译成 §6 那把可以真正握在手里的圆规步骤。一条从 (7) 的根号到纸上正十七边形的完整链，就此闭合。

— *End of §5.*

---

## §6 — Richmond 1893：二十步把 $\cos\tfrac{2\pi}{17}$ 画到纸上

前面三节（§3–§5）已经把 $\cos\tfrac{2\pi}{17}$ 化成了一串嵌套的平方根。可"能写成平方根"还只是**代数上**可作；要让人信服它**几何上**真能用一把没有刻度的直尺加一只圆规画出来，还得把每一个平方根落实成一条真线、一个真圆、一个真交点。1893 年，剑桥的 H. W. Richmond 给出了一个出奇简洁的方案（[Richmond 1893, *Quarterly Journal of Pure and Applied Mathematics* 26, 206–207](https://en.wikipedia.org/wiki/Heptadecagon#Construction)）——它甚至不需要把 §5 那一长串根号显式画出来，而是用两个巧妙的角度和一个圆，**直接**定出顶点 $V_3$、$V_5$ 在 $x$ 轴上的投影，再补出全部 17 个顶点。

本节按 Richmond 的原构造拆成 **20 个"一笔"阶段**（诚实计数：每个阶段恰好新增一条线、一个圆或一个交点，外加少量辅助线的擦除）。**每一张步骤图都配上该步背后的几何/代数依据**——图与推导是一个不可拆的单元。零基础读者只看图和每步的大白话即可走完；想较真的读者，每步给出的坐标都已独立数值验证到 $10^{-5}$（验证脚本见 §6.7）。

### 本节符号补充

| 记号 | 含义 |
| --- | --- |
| $O$ | 圆心，取作坐标原点 $(0,0)$ |
| $A=V_0$ | 水平半径与圆的交点 $(1,0)$，约定为第 $0$ 个顶点 |
| $B$ | 竖直半径与圆的交点 $(0,1)$ |
| $I$ | $OB$ 的**四分点** $(0,\tfrac14)$（$OI=\tfrac14\,OB$） |
| $E,\,F$ | $OA$ 所在直线上由两个角度定出的两点；关键：**$F$ 在 $x$ 负半轴** |
| $K$ | 以 $AF$ 为直径的圆与 $OB$ 的交点 |
| $N_3,\,N_5$ | 以 $E$ 为心、$EK$ 为半径的圆与 $OA$ 的两个交点（顶点投影） |
| $V_3,\,V_5$ | 过 $N_3,N_5$ 作 $OA$ 垂线落在圆上的点 = 真正的第 $3$、第 $5$ 个顶点 |

> **一句话路线**：先用角度把 $E$ 定在 $x\approx 0.0860$、$F$ 定在 $x\approx -0.1220$；再借一个圆把 $E,F$ 的信息"转译"成半径 $EK$；这个半径恰好让圆 $(E,EK)$ 在 $x$ 轴上切出的两点正是 $\cos\tfrac{6\pi}{17}$ 与 $\cos\tfrac{10\pi}{17}$——即顶点 $V_3,V_5$ 的横坐标。拿到 $V_3$，余下的顶点用圆规等弧步进即可。

---

### 6.1 直觉先行：为什么"两个角 + 一个圆"就够了

![Richmond 1893 的二十步尺规作图全过程（圆、两半径、四分点、两个关键角、转译圆，逐步立起顶点）。— 动画：Abel（Manim）](/content/images/2026/05/fig_s6_richmond_build.gif)

*Richmond 1893 的二十步尺规作图全过程（圆、两半径、四分点、两个关键角、转译圆，逐步立起顶点）。— 动画：Abel（Manim）*

§5 给出的闭式里，$\cos\tfrac{2\pi}{17}$ 是四层嵌套根号。如果硬把每一层根号都用尺规画出来（每个 $\sqrt{\ }$ 对应一次"圆与直线求交"），步骤会非常冗长。Richmond 的聪明之处在于：他**不去画 $\cos\tfrac{2\pi}{17}$ 本身**，而是去画一对"二阶高斯周期"对应的余弦——$\cos\tfrac{6\pi}{17}$ 和 $\cos\tfrac{10\pi}{17}$。

这一对数有一个极好的性质（§6.6 会算给你看）：它们的**和**与**差**都是结构非常简单的量，可以用一个角的四等分（定 $E$）和一次 $45^\circ$ 偏转（定 $F$）一举抓住。于是：

- 点 $E$ 的横坐标 $=$ 这对余弦的**半和**；
- 长度 $EK$ $=$ 这对余弦的**半差**。

一个圆（圆心 $E$、半径 $EK$）同时编码了"半和"与"半差"，它与 $x$ 轴的两个交点 $E_x\pm EK$ 就正好是这两个余弦。**这就是为什么"两个角 + 一个圆"足以定出顶点**——所有四层根号的信息，被 Richmond 压缩进了 $\angle OIE$ 的四等分、$45^\circ$ 偏转，和那一个圆里。

---

### 6.2 起步：圆、两条半径、四分点 $I$（阶段 1–5）

![阶段 1：画圆，圆心 O](/content/images/2026/05/richmond_step_01.png)

**阶段 1（画圆，圆心 $O$）.** 取定单位圆与圆心 $O=(0,0)$。整个构造都在这一个圆上完成，最终的正十七边形内接于它。

![阶段 2：作水平直径，定顶点 A=V₀](/content/images/2026/05/richmond_step_02.png)

**阶段 2（作水平直径 → 顶点 $A=V_0$）.** 过 $O$ 作水平直径，与圆右交于 $A=(1,0)$。约定 $A$ 为第 $0$ 个顶点 $V_0$——所有顶点的角度都从这里起算，第 $k$ 个顶点在角 $\tfrac{2\pi k}{17}$ 处。

![阶段 3：作竖直半径 OB](/content/images/2026/05/richmond_step_03.png)

**阶段 3（作竖直半径 $OB$）.** 过 $O$ 作与 $OA$ 垂直的半径，交圆上方于 $B=(0,1)$。$OB$ 将提供后面定 $I$ 用的竖直标尺。垂直只需"两圆相交连线"即可，是合法尺规操作。

![阶段 4：二等分 OB，得中点 M](/content/images/2026/05/richmond_step_04.png)

**阶段 4（二等分 $OB$ → 中点 $M$）.** 作 $OB$ 的中垂线，得中点 $M=(0,\tfrac12)$。线段二等分是最基本的尺规操作（以两端点为心、等半径作两圆，连交点）。这一步是为下一步再二分作准备。

![阶段 5：二等分 OM，得四分点 I](/content/images/2026/05/richmond_step_05.png)

**阶段 5（二等分 $OM$ → 四分点 $I$）.** 再把 $OM$ 二等分，得 $I=(0,\tfrac14)$，即 $OI=\tfrac14\,OB=\tfrac14$。两次二分给出"四分之一"——这是 Richmond 构造中唯一用到的特定比例，下一节的角度全由它生出。

---

### 6.3 两个关键角：定出 $E$ 与 $F$（阶段 6–9）

这是整个构造的"代数心脏"：用 $I$ 处的两个角度，把那对余弦的半和、半差信息一次性抓出来。

![阶段 6：连接线段 IA](/content/images/2026/05/richmond_step_06.png)

**阶段 6（连接 $IA$）.** 连接 $I=(0,\tfrac14)$ 与 $A=(1,0)$。直角三角形 $OIA$ 里，$\tan\angle OIA=\dfrac{OA}{OI}=\dfrac{1}{1/4}=4$，故

$$
\angle OIA=\arctan 4=75.964^\circ.
$$

这个 $\arctan 4$ 就是后面所有角度的"母角"。

![阶段 7：四等分角 OIA，定 E](/content/images/2026/05/richmond_step_07.png)

**阶段 7（两次二等分 $\angle OIA$ → 定 $E$）.** 把 $\angle OIA$ **四等分**（连续两次角二等分，皆为合法尺规操作），取靠 $OA$ 的那一份 $\angle OIE=\tfrac14\angle OIA$。射线 $IE$ 与 $OA$ 交于 $E$。于是

$$
\angle OIE=\tfrac14\arctan 4=18.991^\circ,\qquad E_x=OI\cdot\tan\angle OIE=\tfrac14\tan\!\big(\tfrac14\arctan 4\big)=0.08604.
$$

这个 $E_x\approx 0.0860$ 就是 §6.1 里说的那对余弦的**半和**（§6.6 验证）。

![阶段 8：在 I 处从 IE 转 45 度，F 落在 x 负半轴](/content/images/2026/05/richmond_step_08.png)

**阶段 8（在 $I$ 处由 $IE$ 转 $45^\circ$ → $F$ 落在 $x$ 负半轴）.** 以 $I$ 为顶点，从射线 $IE$ 朝 $A$ 的反向转出 $45^\circ$（$45^\circ$ 角可尺规作出：先作直角再平分），射线交 $OA$ 所在**直线**于 $F$。关键细节：$F$ **不在 $A$ 一侧，而在 $O$ 的另一侧——$x$ 负半轴**。验证：此时 $F$ 侧的角 $\angle OIF=45^\circ-\angle OIE=26.009^\circ$，故

$$
OF=OI\cdot\tan\angle OIF=0.12198,\qquad F=(-0.12198,\,0),\qquad \angle EIF=18.991^\circ+26.009^\circ=45.000^\circ\ \checkmark.
$$

> **历史上常被画错的一步**：早期复述常把 $F$ 放到 $A$ 那一侧（正 $x$）。符号一旦弄反，后面那个交点会落到错误的横坐标（而非真值 $N_3=0.4457$），顶点全错。
>
> **$F$ 在负半轴**
>
> 是本构造的正确性命门。

![阶段 9：擦去角的辅助线（E、F 已定）](/content/images/2026/05/richmond_step_09.png)

**阶段 9（擦去角的辅助线）.** $E,F$ 一旦定下，$IA$、$IE$、$IF$ 三条射线就完成使命，擦去以保持图面清爽。保留 $E$、$F$ 两点及 $I$。

---

### 6.4 一个圆把 $E,F$ 转译成半径（阶段 10–14）

![阶段 10：二等分 AF，得中点](/content/images/2026/05/richmond_step_10.png)

**阶段 10（二等分 $AF$ → 中点）.** 取 $A=(1,0)$ 与 $F=(-0.12198,0)$ 的中点 $\big(\tfrac{1+(-0.12198)}{2},0\big)=(0.439,0)$。这是下一步那个圆的圆心。

![阶段 11：以 AF 为直径作圆](/content/images/2026/05/richmond_step_11.png)

**阶段 11（以 $AF$ 为直径作圆）.** 以上一步中点为心、$\tfrac12|AF|=\tfrac{1+0.12198}{2}=0.561$ 为半径作圆。由 **Thales 半圆定理**，凡落在此圆上的点 $K$ 都满足 $\angle AKF=90^\circ$——这正是下一步用来"开方"的几何机关。

![阶段 12：标 K = 圆(AF) 与 OB 的交点](/content/images/2026/05/richmond_step_12.png)

**阶段 12（标 $K=$ 圆$(AF)\cap OB$）.** 该圆与竖直半径 $OB$ 交于 $K=(0,K_y)$。因 $\angle AKF=90^\circ$ 且 $OK\perp AF$，由直角三角形的**射影定理（几何平均）**得 $OK^2=OA\cdot OF$，即

$$
K_y=\sqrt{OA\cdot OF}=\sqrt{1\times 0.12198}=0.34926.
$$

这一步用一个圆把"两段长度之积的平方根"画了出来——这是尺规开方的标准手法。

![阶段 13：以 E 为圆心、EK 为半径作圆](/content/images/2026/05/richmond_step_13.png)

**阶段 13（以 $E$ 为心、$EK$ 为半径作圆）.** 量取 $E=(0.08604,0)$ 到 $K=(0,0.34926)$ 的距离作半径：

$$
EK=\sqrt{E_x^{2}+K_y^{2}}=\sqrt{0.08604^{2}+0.34926^{2}}=0.35970.
$$

以 $E$ 为心、$EK$ 为半径作圆。这个半径 $EK\approx 0.3597$ 就是 §6.1 里那对余弦的**半差**（§6.6 验证）。

![阶段 14：标 N₃、N₅ = 圆(E,EK) 与 OA 的交点](/content/images/2026/05/richmond_step_14.png)

**阶段 14（标 $N_3,N_5=$ 圆$(E,EK)\cap OA$）.** 圆 $(E,EK)$ 与水平轴 $OA$ 交于两点 $E_x\pm EK$：

$$
N_3=E_x+EK=0.08604+0.35970=0.44574,\qquad N_5=E_x-EK=0.08604-0.35970=-0.27366.
$$

关键事实（数值与符号双重验证，见 §6.6–6.7）：

$$
N_3=\cos\tfrac{6\pi}{17}=0.44574,\qquad N_5=\cos\tfrac{10\pi}{17}=-0.27366.
$$

因为 $E_x$ 是这对余弦的半和、$EK$ 是半差，所以"半和 $\pm$ 半差"恰好还原出两个余弦本身——**这正是 Richmond 用一个圆同时定出两个顶点投影的全部秘密**。

---

### 6.5 立起顶点，步进补全（阶段 15–20）

![十七个等距顶点连成完整正十七边形，整图旋转一周凸显对称。— 动画：Abel（Manim）](/content/images/2026/05/fig_s6_5_17gon_complete.gif)

*十七个等距顶点连成完整正十七边形，整图旋转一周凸显对称。— 动画：Abel（Manim）*

![阶段 15：擦去辅助圆与用完的标注](/content/images/2026/05/richmond_step_15.png)

**阶段 15（擦去辅助圆与用完的标注）.** $N_3,N_5$ 既已定在 $x$ 轴上，圆 $(AF)$、圆 $(E,EK)$ 及 $K,M,B$ 等中间元素退场，图面只留两条竖线待作。

![阶段 16：过 N₃ 作 OA 垂线，圆上得 V₃](/content/images/2026/05/richmond_step_16.png)

**阶段 16（过 $N_3$ 作 $OA$ 垂线 → $V_3$）.** 在 $N_3=(0.44574,0)$ 处作 $OA$ 的垂线，与圆上方交于

$$
V_3=\big(0.44574,\ \sqrt{1-0.44574^2}\big)=(0.44574,\ 0.89516).
$$

其极角 $=\arctan\tfrac{0.89516}{0.44574}=63.529^\circ=3\times\tfrac{360^\circ}{17}$——正是**第 $3$ 个顶点**。因为单位圆上横坐标为 $\cos\theta$ 的点的极角就是 $\theta$，而 $N_3=\cos\tfrac{6\pi}{17}=\cos\big(3\cdot\tfrac{2\pi}{17}\big)$。

![阶段 17：过 N₅ 作 OA 垂线，圆上得 V₅](/content/images/2026/05/richmond_step_17.png)

**阶段 17（过 $N_5$ 作 $OA$ 垂线 → $V_5$）.** 同理在 $N_5=(-0.27366,0)$ 处立垂线，得

$$
V_5=(-0.27366,\ 0.96182),\quad \text{极角}=105.882^\circ=5\times\tfrac{360^\circ}{17},
$$

即**第 $5$ 个顶点**（$N_5=\cos\tfrac{10\pi}{17}=\cos\big(5\cdot\tfrac{2\pi}{17}\big)$）。至此 $V_0,V_3,V_5$ 三个真顶点到手。

![阶段 18：擦去辅助线（V₀、V₃、V₅ 已定）](/content/images/2026/05/richmond_step_18.png)

**阶段 18（擦去辅助线）.** 两条垂线与 $N_3,N_5,I,E,F$ 等投影元素完成使命，擦去，只保留圆上的 $V_0,V_3,V_5$ 三点。

![阶段 19：以定长弦步进（弧 3），得全部 17 个顶点](/content/images/2026/05/richmond_step_19.png)

**阶段 19（以定长弦步进 → 全部 17 个顶点）.** 取张成弧 $\tfrac{3}{17}$ 圈的弦 $V_0V_3$ 作为"圆规张口"，从 $V_0$ 出发沿圆每次跨 $3$ 个顶点地连续踏点：$V_0\to V_3\to V_6\to\cdots$。因为

$$
\gcd(3,17)=1,
$$

按步长 $3$ 在模 $17$ 下踏点会**不重不漏遍历全部 $17$ 个顶点**（$\{3k\bmod 17:k=0,\dots,16\}=\{0,1,\dots,16\}$，已验证）。于是单靠这一个定长弦的反复"踱步"就补齐了所有顶点——无需逐个重作角度。

![阶段 20：依次连线，得正十七边形](/content/images/2026/05/richmond_step_20.png)

**阶段 20（依次连线 → 正十七边形）.** 把 $17$ 个顶点依相邻顺序连成弦，完成正十七边形。**全程每一笔都是真线、真圆或真交点**，严格满足尺规作图的定义。这就是高斯 1796 年那个清晨的发现（[Disquisitiones Arithmeticae §365](https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae)），由 Richmond 在 1893 年落实为可手绘的二十步。

> **诚实计数**：以上是
>
> **20 个阶段**，不是 21。其中有 $3$ 个是"擦除辅助线"的清理步（阶段 $9,15,18$），并不新增几何元素，但为图面清晰被单独列出；真正的"作图原语"（线/圆/交点）约 $17$ 个。任何把它说成"21 步"的复述都多算了一步。

---

### 6.6 算例：为什么 $E_x$ 是半和、$EK$ 是半差

本节最该亲手验的，是阶段 14 那个"半和 $\pm$ 半差还原余弦"的核心断言。用数值把它钉死：

> **例 6.1（半和）.**
>
> 这对余弦之和
>
> $$
> \cos\tfrac{6\pi}{17}+\cos\tfrac{10\pi}{17}=0.44574+(-0.27366)=0.17208,
> $$
>
> 其一半 $=0.08604$，与阶段 7 算出的 $E_x=\tfrac14\tan\big(\tfrac14\arctan 4\big)=0.08604$
>
> **吻合**
>
> 。即 $E_x=\tfrac12\big(\cos\tfrac{6\pi}{17}+\cos\tfrac{10\pi}{17}\big)$。
>
> **例 6.2（半差）.**
>
> 这对余弦之差的一半
>
> $$
> \tfrac12\big(\cos\tfrac{6\pi}{17}-\cos\tfrac{10\pi}{17}\big)=\tfrac12\big(0.44574-(-0.27366)\big)=0.35970,
> $$
>
> 与阶段 13 的 $EK=\sqrt{E_x^2+K_y^2}=0.35970$
>
> **吻合**
>
> 。即 $EK=\tfrac12\big(\cos\tfrac{6\pi}{17}-\cos\tfrac{10\pi}{17}\big)$。
>
> **例 6.3（还原）.**
>
> 于是
>
> $$
> N_3=E_x+EK=\text{半和}+\text{半差}=\cos\tfrac{6\pi}{17},\qquad N_5=E_x-EK=\text{半和}-\text{半差}=\cos\tfrac{10\pi}{17}.
> $$
>
> 这正是"和差化两根"的初等恒等式：已知两数的和 $S$ 与差 $D$，则两数是 $\tfrac{S}{2}\pm\tfrac{D}{2}$。Richmond 把 $S$ 编码进 $E$ 的位置、把 $D$ 编码进圆的半径，一个圆与 $x$ 轴的两交点就自动是那两数。
>
> **例 6.4（步进遍历）.**
>
> 步长 $3$、模 $17$：$0,3,6,9,12,15,1,4,7,10,13,16,2,5,8,11,14$——恰好踩遍 $0$ 到 $16$ 各一次，第 $17$ 步回到 $0$。换一个与 $17$ 不互素的步长（$17$ 是素数，唯一不互素的非零步长是 $17$ 的倍数即 $0$）才会卡住；对素数 $17$，任何 $1\le s\le 16$ 都能遍历，取 $s=3$ 只是因为 $V_3$ 已现成。

### 6.7 验证脚本

下面的纯 Python（仅用标准库 `math`）从 $I=(0,\tfrac14)$ 出发，按 Richmond 的二十步重算每个关键点，并核对落点与真顶点、半和半差、步进遍历——全部断言通过。

```python
# Richmond 1893 — re-derive every key point from scratch, verify to 1e-5.
import math
from math import atan, tan, sqrt, cos, pi, gcd

OI = 0.25                                  # I = (0, 1/4); OB = 1
# stage 6-7: angle OIA = arctan(OA/OI) = arctan 4, quartered -> E
ang_OIA = atan(1.0 / OI)                   # = arctan 4
ang_OIE = ang_OIA / 4.0
Ex = OI * tan(ang_OIE)                      # E_x
# stage 8: turn 45 deg from IE at I, F on the NEGATIVE-x side
ang_OIF = math.radians(45.0) - ang_OIE     # F-side angle
OF = OI * tan(ang_OIF)
Fx = -OF                                    # F is on negative x  (the sign-flip guard)
assert abs(math.degrees(ang_OIE + ang_OIF) - 45.0) < 1e-9      # angle EIF = 45 exactly
assert abs(Ex - 0.08604) < 1e-4 and abs(Fx - (-0.12198)) < 1e-4

# stage 10-12: circle on diameter AF meets OB at K; OK^2 = OA*OF (geometric mean)
Ky = sqrt(1.0 * OF)                          # = sqrt(OA * OF)
assert abs(Ky - 0.34926) < 1e-4

# stage 13-14: circle(center E, radius EK) meets OA at E_x +/- EK
EK = sqrt(Ex**2 + Ky**2)
N3, N5 = Ex + EK, Ex - EK
assert abs(N3 - cos(6 * pi / 17)) < 1e-5     # N3 = cos(6 pi/17), vertex 3 foot
assert abs(N5 - cos(10 * pi / 17)) < 1e-5    # N5 = cos(10 pi/17), vertex 5 foot

# half-sum / half-difference identity (the heart of 6.6)
assert abs(Ex - 0.5 * (cos(6*pi/17) + cos(10*pi/17))) < 1e-5    # E_x = half-sum
assert abs(EK - 0.5 * (cos(6*pi/17) - cos(10*pi/17))) < 1e-5    # EK  = half-diff

# stage 16-17: perpendiculars land on the TRUE vertices 3 and 5
for N, k in [(N3, 3), (N5, 5)]:
    theta = math.degrees(math.atan2(sqrt(1 - N*N), N))
    assert abs(theta - k * 360.0 / 17) < 1e-3

# stage 19: gcd(3,17)=1  =>  stepping by 3 visits all 17 vertices
assert gcd(3, 17) == 1
assert sorted({(3 * k) % 17 for k in range(17)}) == list(range(17))

print(f"E_x={Ex:.5f}  F_x={Fx:.5f}(neg)  EK={EK:.5f}")
print(f"N3={N3:.5f}=cos6pi/17   N5={N5:.5f}=cos10pi/17   [all asserts OK]")
```

```text
E_x=0.08604  F_x=-0.12198(neg)  EK=0.35970
N3=0.44574=cos6pi/17   N5=-0.27366=cos10pi/17   [all asserts OK]
```

### 6.8 现代意义

Richmond 的二十步看似只是一个古典几何小品，但它体现的思想在今天处处可见：

- **"压缩—解码"的范式**。Richmond 没有逐层硬画 §5 的四重根号，而是找到一组**结构良好的中间量**（一对二阶高斯周期的余弦），用最少的几何动作（两个角 + 一个圆）把它们的"和"与"差"一次性编码、再用一个圆同时解码出两个顶点。这种"把复杂对象投影到一组好基、用代数恒等式批量还原"的思路，正是现代**信号处理与快速傅里叶变换（FFT）**的精神——把 $N$ 点 DFT 按奇偶/互素因子递归拆分，每层只做一次蝶形（butterfly）合并。高斯本人在研究分圆与三角插值时写下的快速求和算法，被公认为 FFT 的历史先声（Heideman–Johnson–Burrus 1984）。
- **互素步进 = 循环群的生成元**。阶段 19 的"$\gcd(3,17)=1$ 故步长 $3$ 遍历全部顶点"，与 §2 里"$g=3$ 是 $(\mathbb{Z}/17\mathbb{Z})^*$ 的生成元、自乘走遍全体"是同一件事的加法版本：在加法循环群 $\mathbb{Z}/17\mathbb{Z}$ 中，元素 $s$ 生成全群当且仅当 $\gcd(s,17)=1$。今天**纠错码（如 Reed–Solomon）**与**密码学中的循环移位寄存器**，都靠"互素步长遍历全体"来保证覆盖与扩散。
- **可手绘 = 可验证**。Richmond 坚持每一步都是真线、真圆、真交点，使得这个构造可被任何人用直尺圆规独立复现、用坐标独立核验（如 §6.7）。这种"过程完全透明、结果可独立重算"的标准，正是现代**形式化数学证明**（Coq / Lean）追求的目标：每一步都还原为可机械检查的原子操作。

一个 1893 年用来画十七边形的二十步流程，封装着压缩解码、循环群遍历与可验证构造三种延续至今的数学品味。

— *End of §6.*

---

## §7 — 必要性：为什么大多数图形画不出来（Wantzel 1837 + Lindemann 1882）

前面六节都在做**正面**的事：高斯怎样一刀一刀把 $\zeta_{17}$ 切到尺规够得着的地面。但"$17$ 能画"只是故事的一半。真正惊人的是它的**反面**——绝大多数你想画的东西，**永远画不出来**。正七边形画不出来，倍立方画不出来，三等分一个普通的角画不出来，把圆变成等面积的正方形也画不出来。这一节给出关上这些大门的钥匙：一条**度数判据**。它由 Pierre Wantzel 在 [1837 年](https://eudml.org/doc/234865)用一页纸证明，干净利落地杀死了其中两个两千多年的古希腊难题；剩下的"化圆为方"则要等到 [Lindemann 1882](https://eudml.org/doc/157031) 证明 $\pi$ 超越，才被最终封死。

这一节也回答了贯穿全文的那个问题：**为什么偏偏是 $17$ 幸存？** 答案会自然落出——因为 $[\mathbb{Q}(\cos\tfrac{2\pi}{17}):\mathbb{Q}]=8=2^3$ 恰是 $2$ 的幂，而它的算术根源正是 $17=F_2$ 是费马素数（§1）。

### 本节符号补充

| 记号 | 读法 / 含义 |
| --- | --- |
| 可作数 | 从单位长度出发，**有限次**用尺规作图能定出的实数（坐标） |
| $[\mathbb{Q}(x):\mathbb{Q}]$ | 数 $x$ 在 $\mathbb{Q}$ 上的**次数**：它满足的最低次有理系数方程的次数 |
| $2^t$ | $2$ 的幂（$1,2,4,8,16,\dots$）；Wantzel 判据要求的"通行证" |
| $\sqrt[3]{2}$ | $2$ 的立方根，倍立方问题要作的边长 |
| 代数数 / 超越数 | 满足某个有理系数方程的数 / **不**满足任何这种方程的数（如 $\pi$） |
| Eisenstein 判据 | 一条用素数 $p$ 一眼判定多项式**不可约**的充分条件 |

### 7.1 直觉：尺规每动一步，只会"开一次平方根"

先不谈公式，想想尺规到底能干什么。你手上只有两件工具：

- **直尺**——过两个已知点画一条直线；
- **圆规**——以一个已知点为圆心、已知两点间距离为半径画一个圆。

新的点从哪来？只有三种交法：**直线交直线**、**直线交圆**、**圆交圆**。把它们翻译成坐标方程看：直线是一次方程，圆是二次方程。

- 两条直线相交：解两个一次方程，得到的新坐标是已知坐标的**有理运算**（加减乘除），不引入任何根号。
- 直线交圆：把直线代入圆，得一个**二次**方程，新坐标至多多开**一个平方根**。
- 两圆相交：两圆方程相减，平方项 $x^2+y^2$ 正好消掉，剩下一条**直线**（叫两圆的**根轴**，radical axis）。于是"圆交圆"退化成"直线交圆"，照样至多**一个平方根**。

一句话：**尺规每画一步，坐标里至多新增一层平方根。** 你能作出的所有数，无非是从有理数出发，反复开平方、再做有理运算堆出来的。这就是后面那条判据的全部直觉来源——**可作 = 一串平方根叠起来**。

### 7.2 形式化：可作数的次数必是 $2$ 的幂（Wantzel 度数判据）

把 7.1 的直觉装进域（field）的语言。一个**域**就是一个对加减乘除封闭的数集合（如 $\mathbb{Q}$、$\mathbb{R}$）。"在已知量上开一次平方根"对应于把当前的域 $F$ 扩大成 $F(\sqrt{d})$（$d\in F$）——这叫一次**二次扩张**，它的"维数"（作为 $F$ 上向量空间）是 $2$，记 $[F(\sqrt d):F]=2$。

> **记号提醒**：下面这座塔用字母 $F_i$，是为
>
> **任意一个**
>
> 可作数 $x$ 临时搭的"通用脚手架"，和 §3–§5 里专属于正十七边形的那座 $K_0\subset K_1\subset\cdots\subset K_4$（$K_3=\mathbb{Q}(\cos\tfrac{2\pi}{17})$、$K_4=\mathbb{Q}(\zeta_{17})$）是两回事，别混。

于是 7.1 说的"每步至多开一次平方根"翻译过来就是：任何可作数 $x$ 都落在一座**二次扩张塔**的顶端

$$
\mathbb{Q}=F_0\subset F_1\subset F_2\subset\cdots\subset F_m,\qquad [F_{i+1}:F_i]=2,\qquad x\in F_m.
$$

（不引入新根号的纯有理那几步可以并掉，所以不妨设每层都是货真价实的二次扩张。）接下来用一条像"乘法口诀"一样的基本事实——**塔乘公式**（degree multiplicativity）：若 $\mathbb{Q}\subset L\subset M$，则

$$
[M:\mathbb{Q}]=[M:L]\cdot[L:\mathbb{Q}].
$$

（直观：$M$ 在 $\mathbb{Q}$ 上的"基底大小"等于先到 $L$、再从 $L$ 到 $M$ 两段基底大小之积——像 $a\times b$ 的方格数。）对整座塔逐层相乘：

$$
[F_m:\mathbb{Q}]=\prod_{i=0}^{m-1}[F_{i+1}:F_i]=\underbrace{2\cdot 2\cdots 2}_{m\ \text{个}}=2^{m}.
$$

最后再用一次塔乘：因为 $\mathbb{Q}\subset\mathbb{Q}(x)\subset F_m$，所以 $[\mathbb{Q}(x):\mathbb{Q}]$ **整除** $[F_m:\mathbb{Q}]=2^m$。而 $2^m$ 的因子只能还是 $2$ 的幂。于是得到

> **Wantzel 度数判据（1837）.**
>
> 若实数 $x$ 可尺规作图，则 $[\mathbb{Q}(x):\mathbb{Q}]$ 必为 $2$ 的幂：
>
> $$
> x\ \text{可作} \;\Longrightarrow\; [\mathbb{Q}(x):\mathbb{Q}]=2^{t}\ \text{（某个整数 } t\ge 0\text{）}.
> $$

这是一张**通行证检查**：任何数想被尺规作出，先得通过"次数是 $2$ 的幂"这一关。**注意方向**——它是必要条件（可作 $\Rightarrow$ $2$ 幂）。一个数次数不是 $2$ 的幂，就**当即出局**，根本不必动手画。下面三个古希腊难题，正是被这一关（或它的超越数加强版）挡死的。

> **历史一笔**：
>
> [Pierre Wantzel](https://mathshistory.st-andrews.ac.uk/Biographies/Wantzel/)
>
> （1814–1848）在二十出头（$22$–$23$ 岁，论文载 1837 年卷，其 $6$ 月生日前后年龄不同）发表此结果，是史上第一个严格证明这些古典作图
>
> **不可能**
>
> 的人。在他之前，人们已强烈怀疑画不出来，但"画不出"和"证明永远画不出"是天壤之别——后者需要把"尺规能力"翻译成代数的次数，正是 Wantzel 做的事。

### 7.3 倍立方：为什么 $\sqrt[3]{2}$ 出局（次数 $3$）

![Wantzel 1837：倍立方（$\sqrt[3]{2}$，次数 3）与一般角三等分（$60^\circ$，次数 3）双双出局。— Abel（Manim）](/content/images/2026/05/fig_s7_3_wantzel_xmarks.png)

*Wantzel 1837：倍立方（$\sqrt[3]{2}$，次数 3）与一般角三等分（$60^\circ$，次数 3）双双出局。— Abel（Manim）*

**问题**（传说源于提洛岛瘟疫，神谕要求把立方体祭坛的体积翻倍）：给定棱长 $1$ 的立方体（体积 $1$），作一个体积为 $2$ 的立方体——即作出新棱长 $\sqrt[3]{2}$。

*证明.* $\sqrt[3]{2}$ 是 $x^3-2=0$ 的根。要算它的次数，先证 $x^3-2$ 在 $\mathbb{Q}$ 上**不可约**（无法再分解成更低次有理系数因子）。用 **Eisenstein 判据**，取素数 $p=2$，把 $x^3-2$ 的系数（首项到常数项依次是 $1,0,0,-2$）逐条核对：

- **首项系数** $1$ 不被 $2$ 整除；
- **其余各项系数** $0,0,-2$ 都被 $2$ 整除；
- **常数项** $-2$ 不被 $2^2=4$ 整除。

三条恰好命中 Eisenstein 的假设，故 $x^3-2$ 不可约。因此它就是 $\sqrt[3]{2}$ 的极小多项式，

$$
[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3.
$$

$3$ **不是** $2$ 的幂。由 Wantzel 判据（7.2），$\sqrt[3]{2}$ 不可作。**倍立方不可能。** **(证毕)**

### 7.4 三等分一般角：为什么 $60^\circ$ 三等分出局（次数 $3$）

**问题**：用尺规把任意给定的角三等分。注意一些特殊角能三等分（$90^\circ\to30^\circ$ 容易），所以要证"**不可能**"，只需举出**一个**三等分不了的角即可。最经典的反例是 $60^\circ$（它本身可作——正三角形的内角）。

*证明.* 设 $t=\cos 20^\circ$（即 $60^\circ$ 的三分之一）。用三倍角公式 $\cos 3\alpha=4\cos^3\alpha-3\cos\alpha$，取 $\alpha=20^\circ$、$\cos 60^\circ=\tfrac12$：

$$
4t^3-3t=\tfrac12 \quad\Longrightarrow\quad \boxed{8t^3-6t-1=0.}
$$

要证 $\cos 20^\circ$ 次数为 $3$，只需证 $8t^3-6t-1$ 在 $\mathbb{Q}$ 上不可约。一个**三次**多项式在 $\mathbb{Q}$ 上可约 $\iff$ 它有**有理根**（因为只要能分解，必含一个一次因子）。所以只需证它**没有有理根**。用**有理根定理**：若既约分数 $p/q$ 是根，则 $p\mid(\text{常数项}=-1)$、$q\mid(\text{首项系数}=8)$。于是候选只有

$$
\pm 1,\ \pm\tfrac12,\ \pm\tfrac14,\ \pm\tfrac18.
$$

逐一代入（下面算例 7.6 + python 块给出全部 $8$ 个的值），**没有一个使多项式为零**。故 $8t^3-6t-1$ 无有理根 $\Rightarrow$ 不可约 $\Rightarrow$

$$
[\mathbb{Q}(\cos 20^\circ):\mathbb{Q}]=3,
$$

仍不是 $2$ 的幂。由 Wantzel 判据，$\cos 20^\circ$ 不可作。**$60^\circ$ 不能三等分，故一般角的三等分不可能。** **(证毕)**

> **与 §1 的呼应**：这同时解释了为什么正 $9$ 边形画不出来。作正 $9$ 边形 $\iff$ 作 $\cos\tfrac{2\pi}{9}=\cos 40^\circ$，而 $40^\circ=2\times20^\circ$（倍角可作），$20^\circ=60^\circ/3$，又把我们拖回三等分 $60^\circ$ 的同一个三次障碍（次数 $3$，与本节三等分 $60^\circ$ 的论证一致）。算术上，$9=3^2$ 含
>
> **重复**
>
> 的费马素数 $3$——这正是 §1 判据 "$n=2^a p_1\cdots p_k$、$p_i$
>
> **互不相同**
>
> " 中"互不相同"被违反的情形。重复的费马素因子 = 残余的三次障碍 = 画不出来。

### 7.5 化圆为方：这一个 Wantzel 关不住，要靠 Lindemann

![Lindemann 1882：$\pi$ 超越 $\Rightarrow$ 可作 $\subset$ 代数 $\not\ni \pi \Rightarrow$ 化圆为方关闭。— Abel（Manim）](/content/images/2026/05/fig_s7_5_lindemann_venn.png)

*Lindemann 1882：$\pi$ 超越 $\Rightarrow$ 可作 $\subset$ 代数 $\not\ni \pi \Rightarrow$ 化圆为方关闭。— Abel（Manim）*

![Ferdinand von Lindemann（1852–1939），1882 年证明 $\pi$ 是超越数。Wikimedia Commons, PD（Commons 仅存的低分辨率肖像）。](/content/images/2026/05/hist_s7_lindemann.jpg)

*Ferdinand von Lindemann（1852–1939），1882 年证明 $\pi$ 是超越数。Wikimedia Commons, PD（Commons 仅存的低分辨率肖像）。*

**问题**：给定半径 $1$ 的圆（面积 $\pi$），作一个面积相等的正方形——即作出边长 $\sqrt{\pi}$。

这是三难题里**最深**的一个。Wantzel 的度数判据在这里**使不上劲**：它处理的是"次数是不是 $2$ 的幂"这种**代数数**内部的问题，而 $\pi$ 根本不是代数数。真正封死它的是一个完全不同量级的结果：

> **Lindemann 定理（1882）.**
>
> $\pi$ 是
>
> **超越数**
>
> ——它不满足
>
> **任何**
>
> 非零的有理系数多项式方程。

*证明.* 有了这把钥匙，论证一步到位。**所有可作数都是代数数**（由 7.2：可作数落在 $\mathbb{Q}$ 的有限次扩张里，自然满足某个有理系数方程）。假设 $\sqrt{\pi}$ 可作，则 $\sqrt{\pi}$ 是代数数；但代数数对乘法封闭，$(\sqrt{\pi})^2=\pi$ 也将是代数数——与 Lindemann 矛盾。故 $\sqrt{\pi}$ 不可作。**化圆为方不可能。** **(证毕)**

请记牢这条**分工**，它是 §1 与本节必须一致的要点：

| 难题 | 障碍 | 封死它的人 |
| --- | --- | --- |
| 倍立方 | $[\mathbb{Q}(\sqrt[3]2):\mathbb{Q}]=3$ 非 $2$ 幂 | **Wantzel 1837** |
| 三等分角 | $[\mathbb{Q}(\cos 20^\circ):\mathbb{Q}]=3$ 非 $2$ 幂 | **Wantzel 1837** |
| 化圆为方 | $\pi$ 超越（连代数数都不是） | **Lindemann 1882** |

Wantzel 的度数判据一举关闭了**前两个**；第三个超出"次数"所能描述的范围，必须等 Lindemann 证明 $\pi$ 的超越性。把化圆为方归功于 Wantzel 是常见的史实错误——本文不犯。

> **历史一笔**：
>
> [Ferdinand von Lindemann](https://mathshistory.st-andrews.ac.uk/Biographies/Lindemann/)
>
> （1852–1939）的证明建立在 Hermite
>
> [1873 年](https://mathshistory.st-andrews.ac.uk/Biographies/Hermite/)
>
> 证明 $e$ 超越的方法之上，把它推广到 $\pi$。从古希腊到此，
>
> **横跨约两千三百年**
>
> （化圆为方最早的明确尝试可追溯到约公元前 $450$ 年的 Anaxagoras，封死于 $1882$）。

### 7.6 算例：用有理根定理亲手关掉三等分之门

逐一代入 $8t^3-6t-1$ 的全部 $8$ 个候选有理根，看它们离零有多远（没有一个命中）：

| 候选 $t$ | $8t^3-6t-1$ | 是根？ |
| --- | --- | --- |
| $1$ | $8-6-1=1$ | 否 |
| $-1$ | $-8+6-1=-3$ | 否 |
| $\tfrac12$ | $1-3-1=-3$ | 否 |
| $-\tfrac12$ | $-1+3-1=1$ | 否 |
| $\tfrac14$ | $\tfrac18-\tfrac32-1=-\tfrac{19}{8}$ | 否 |
| $-\tfrac14$ | $-\tfrac18+\tfrac32-1=\tfrac38$ | 否 |
| $\tfrac18$ | $\tfrac{1}{64}-\tfrac34-1=-\tfrac{111}{64}$ | 否 |
| $-\tfrac18$ | $-\tfrac{1}{64}+\tfrac34-1=-\tfrac{17}{64}$ | 否 |

无有理根 $\Rightarrow$ 三次不可约 $\Rightarrow$ $[\mathbb{Q}(\cos 20^\circ):\mathbb{Q}]=3$。数值上验证 $\cos 20^\circ\approx 0.939693$ 确实是根：$8(0.939693)^3-6(0.939693)-1\approx 0$。

**对照 $17$ 的幸存**：正 $17$ 边形 $\iff$ 作 $\cos\tfrac{2\pi}{17}$，其次数 $[\mathbb{Q}(\cos\tfrac{2\pi}{17}):\mathbb{Q}]=\tfrac{17-1}{2}=8=2^3$——**正好是 $2$ 的幂**，通过 Wantzel 的通行证检查。这就是 $17$ 与 $\sqrt[3]2$、$\cos 20^\circ$ 的本质分野：不是"$17$ 特别难"，恰恰相反，是它的次数**特别驯服**（是 $2^3$ 而非 $3$ 或一个奇怪的合数），所以能被 §3–§6 那四层平方根逐级拿下。

### 7.7 验证（纯 Python / stdlib）

```python
# Section 7: the necessity side — Wantzel's degree criterion at work.
# (1) doubling the cube, (2) trisecting 60 deg, (3) why 17 survives.
from fractions import Fraction as F
import math

# ---- (1) Doubling the cube: x^3 - 2 has NO rational root -> irreducible (deg 3).
def cube(x): return x**3 - 2
# rational-root candidates: p | 2 (const), q | 1 (leading) -> +-1, +-2
cube_cands = [F(1), F(-1), F(2), F(-2)]
assert all(cube(c) != 0 for c in cube_cands), "x^3-2 has no rational root"
print(f"[doubling cube] cbrt(2) ~= {2**(1/3):.6f}, deg 3 (not a power of 2) -> impossible")

# ---- (2) Trisecting 60 deg: cos20 satisfies 8 t^3 - 6 t - 1 = 0.
def p3(x): return 8*x**3 - 6*x - 1
t = math.cos(math.radians(20))
assert abs(p3(t)) < 1e-9, "cos20 is a root of 8t^3-6t-1"
# rational-root theorem: p | 1 (|const|), q | 8 (leading) -> +-1, +-1/2, +-1/4, +-1/8
tri_cands = [F(s, d) for d in (1, 2, 4, 8) for s in (1, -1)]
assert all(p3(c) != 0 for c in tri_cands), "no rational root -> 8t^3-6t-1 irreducible"
print("[trisect 60] candidate -> value:")
for c in tri_cands:
    print(f"    t={str(c):>4}:  8t^3-6t-1 = {p3(c)}")
print(f"    cos20 ~= {t:.6f}, deg 3 (not a power of 2) -> impossible")

# ---- (3) Why 17 survives: [Q(cos 2pi/17):Q] = (17-1)/2 = 8 = 2^3 IS a power of 2.
deg17 = (17 - 1) // 2
assert deg17 == 8 == 2**3, "[Q(cos 2pi/17):Q] = 8 = 2^3"
print(f"[regular 17-gon] [Q(cos 2pi/17):Q] = {deg17} = 2^3 (a power of 2) -> CONSTRUCTIBLE")

# ---- bonus: regular 9-gon fails for the SAME deg-3 reason (9 = 3^2, repeated Fermat prime)
def p9(x): return 8*x**3 - 6*x + 1   # cos(2pi/9)=cos40 solves 4c^3-3c=cos120=-1/2
c9 = math.cos(2*math.pi/9)
assert abs(p9(c9)) < 1e-9 and all(p9(c) != 0 for c in tri_cands), \
    "cos(2pi/9) also deg 3 -> regular 9-gon impossible (repeated Fermat prime 3)"
print("[regular 9-gon] cos(2pi/9) deg 3 -> impossible (9=3^2 repeats Fermat prime 3)")
print("all section-7 necessity checks pass")
```

运行输出（已核验）：倍立方 / 三等分 $60^\circ$ / 正 $9$ 边形三者都因次数 $=3$ 出局，唯独正 $17$ 边形因次数 $=8=2^3$ 通行。

### 7.8 现代意义

![费马素数家族（3 / 5 / 17 / 257 / 65537）对应五个可作多边形；65537 边逐步加密，肉眼已与圆无异。— 动画：Abel（Manim）](/content/images/2026/05/fig_s7_8_fermat_family_65537.gif)

*费马素数家族（3 / 5 / 17 / 257 / 65537）对应五个可作多边形；65537 边逐步加密，肉眼已与圆无异。— 动画：Abel（Manim）*

Wantzel 1837 这页纸的真正分量，不在于"又解决了三道古题"，而在于它示范了一种**全新的思维方式**：

- **把"能力"翻译成"不变量"**。尺规这套物理操作，被压缩成一个纯代数的数 $[\mathbb{Q}(x):\mathbb{Q}]$。一旦翻译完成，"不可能"就从"我们还没找到办法"升级为"任何办法都不存在的数学定理"。这正是后来 [Galois 理论](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/)、[Abel–Ruffini 五次方程不可解](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/)所共享的内核——用群与域的不变量，判定一整类操作的**根本极限**。
- **不可能性证明本身成了一门生意**。从 Wantzel 到 Lindemann，再到 $20$ 世纪的 Gödel 不完备、图灵停机不可判定、计算复杂度里的下界——现代科学有一整支专门**证明"做不到"**。倍立方与三等分角，是这条思想线最早的、可以一页纸讲清的源头。
- **超越数论的开端**。Lindemann 对 $\pi$ 的处理，连同 Hermite 对 $e$ 的处理，催生了超越数论这门学科，直接通向 $20$ 世纪的 [Gelfond–Schneider 定理](https://mathshistory.st-andrews.ac.uk/Biographies/Gelfond/)（关于 $a^b$ 何时超越）等深刻结果。

回到这条贯穿全文的主线：**三大古希腊难题困了人类约两千三百年**，正多边形作图也**停滞逾两千年**（从 Euclid 约公元前 $300$ 年到 Gauss [1796 年](https://gdz.sub.uni-goettingen.de/id/PPN235993352)的突破，详见《[Disquisitiones Arithmeticae](https://gdz.sub.uni-goettingen.de/id/PPN235993352) §365》）。$17$ 之所以能从这片"不可能"的旷野中幸存，不是运气，而是一条精确的算术条件在保佑它：$17=F_2$ 是费马素数 $\Rightarrow$ $[\mathbb{Q}(\cos\tfrac{2\pi}{17}):\mathbb{Q}]=8$ 是 $2$ 的幂 $\Rightarrow$ 通过 Wantzel 判据 $\Rightarrow$ 四层平方根可达（§3–§5）$\Rightarrow$ 一把直尺一只圆规真能画出它（§6，[Richmond 1893](https://en.wikipedia.org/wiki/Heptadecagon#Construction) 的优雅作图）。**正面的"可作"与反面的"不可作"，共用同一条度数判据——这正是高斯之后，代数赋予几何的统一视角。**

— *End of §7.*

### 7.9 史料：Wantzel 与 Lindemann 其人其事

高斯在 1801 年的《算术研究》里证明了可作性判据的**充分**方向:只要 $n = 2^a \cdot p_1 \cdots p_k$(诸 $p_i$ 为不同的费马素数),正 $n$ 边形就能尺规作出。但他没有证明**必要**方向(反过来:不满足这个条件就一定作不出)——高斯本人断言了必要性,却没有给出证明。

补全这一步的是法国数学家 [**Pierre Laurent Wantzel**](https://en.wikipedia.org/wiki/Pierre_Wantzel)**(1814–1848)**。1837 年,他发表论文[《关于判别一个几何问题能否用直尺和圆规解决的方法的研究》](https://eudml.org/doc/234865)(*Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas*),载于《纯粹与应用数学杂志》(*Journal de Mathématiques Pures et Appliquées*)第 2 卷,366–372 页。这篇论文首次严格证明了必要性,补全了今天所称的 [**Gauss–Wantzel 定理**](https://en.wikipedia.org/wiki/Constructible_polygon)。

同一篇论文还顺手终结了两个困扰数学界两千余年的古希腊难题:[**倍立方**](https://en.wikipedia.org/wiki/Doubling_the_cube)($\sqrt[3]{2}$ 的极小多项式是 3 次,落不进 2 的幂次扩张塔)与[**任意角三等分**](https://en.wikipedia.org/wiki/Angle_trisection)(一般情形归结为一个 3 次方程)。Wantzel 年仅 33 岁早逝,这篇奠基性的论文在他身后很长一段时间里被严重低估。

三难题中最后倒下的是[**化圆为方**](https://en.wikipedia.org/wiki/Squaring_the_circle)——它要求的不只是"次数不是 2 的幂",而是 $\pi$ 根本不是代数数。1882 年,[**Ferdinand von Lindemann**](https://en.wikipedia.org/wiki/Ferdinand_von_Lindemann) 证明了 $\pi$ 是超越数(论文[《论数 π》](https://eudml.org/doc/157031)*Über die Zahl π*,载《数学年刊》*Mathematische Annalen* 第 20 卷,213–225 页),其证明建立在 [Hermite](https://en.wikipedia.org/wiki/Charles_Hermite) 1873 年关于 $e$ 超越性的结果与欧拉恒等式 $e^{i\pi} = -1$ 之上。可尺规作出的数必为代数数;$\pi$ 既超越,便不可作,化圆为方因此不可能。自古希腊人([阿那克萨哥拉](https://en.wikipedia.org/wiki/Anaxagoras),约公元前 5 世纪)提出算起,历时**约两千三百年**,三大难题至此全部画上句号。

---

## §8 历史与意义

### 8.1 1796-03-30:日记第一条

1796 年 3 月 30 日清晨,高斯在他的[《数学日记》](https://en.wikipedia.org/wiki/Gauss%27s_diary)(*Mathematisches Tagebuch*)中写下了第一条记录,用拉丁文:

> *"Principia quibus innititur sectio circuli, ac divisibilitas eiusdem geometrica in septemdecim partes etc."*
>
> (圆的分割所依据的原则,以及它在几何上分成十七等分,等等。)

这本日记从 1796 年记到 1814 年,共 146 条,直到 **1897 年才被重新发现**,1903 年由 **Felix Klein** 首次刊于《数学年刊》,后收入《高斯全集》(*Werke*)**第 11 卷**。写下这第一条时,高斯**还未满 19 岁**——他生于 1777 年 4 月 30 日,这一天距他 19 岁生日还差整整一个月。

### 8.2 1801:《算术研究》§365–§366

![《算术研究》(Disquisitiones Arithmeticae) 扉页，莱比锡 1801——第七章 §365–§366 给出可作图判据。Wikimedia Commons, PD.](/content/images/2026/05/hist_s1_DA_titlepage_1801.jpg)

*《算术研究》(Disquisitiones Arithmeticae) 扉页，莱比锡 1801——第七章 §365–§366 给出可作图判据。Wikimedia Commons, PD.*

五年后的 1801 年,高斯出版了[《算术研究》](https://gdz.sub.uni-goettingen.de/id/PPN235993352)(*Disquisitiones Arithmeticae*,1798 年完成,1801 年付印;链接为 1801 年拉丁文初版数字化扫描),全书共 366 节。其中**第 VII 章**(分圆理论,cyclotomy)的 **§365–§366**——也是全书最后两节——给出了正多边形可尺规作图的充分条件:

$$
n = 2^a \cdot p_1 \cdot p_2 \cdots p_k,\quad p_i \text{ 为互不相同的费马素数}
$$

正 17 边形对应的 $17 = F_2$,正是欧几里得之后第一个"新"的可作正多边形。

### 8.3 费马素数与后来的 257、65537 边形

![J. G. Hermes《圆分割日记》(Diarium Kreisteilung) 手稿首页——他用约十年手算正 65537 边形的作图，藏于哥廷根。Wikimedia Commons, PD.](/content/images/2026/05/hist_s7_hermes_65537_manuscript.jpg)

*J. G. Hermes《圆分割日记》(Diarium Kreisteilung) 手稿首页——他用约十年手算正 65537 边形的作图，藏于哥廷根。Wikimedia Commons, PD.*

[费马数](https://en.wikipedia.org/wiki/Fermat_number) $F_n = 2^{2^n} + 1$。已知的费马**素数**只有五个:

$$
F_0 = 3,\quad F_1 = 5,\quad F_2 = 17,\quad F_3 = 257,\quad F_4 = 65537
$$

继高斯 1796 年的 17 边形之后:正 [**257 边形**](https://en.wikipedia.org/wiki/257-gon)由 **Richelot 于 1832 年**给出显式作法;正 [**65537 边形**](https://en.wikipedia.org/wiki/65537-gon)则由 **Johann Gustav Hermes** 在 **1894 年**完成——他为此耗费了**十年**,留下约 **200 页**手稿,论文[《论将圆分为 65537 等份》](https://eudml.org/doc/58274)(*Über die Teilung des Kreises in 65537 gleiche Teile*)发表于哥廷根科学学会通报(*Nachrichten*,1894,170–186 页),手稿至今**藏于哥廷根大学**(已数字化)。

$F_5$ 起目前已知全部是合数——**欧拉早在 1732 年**就发现 $F_5 = 641 \times 6700417$ 并非素数。是否还存在第六个费马素数,至今仍是未解之谜。

### 8.4 两千年的三大难题

![欧几里得《几何原本》1482 年 Ratdolt 印本，页边作图图解——尺规作图传统的源头。Wikimedia Commons, PD.](/content/images/2026/05/hist_s7_euclid_1482.jpg)

*欧几里得《几何原本》1482 年 Ratdolt 印本，页边作图图解——尺规作图传统的源头。Wikimedia Commons, PD.*

三个古希腊尺规作图难题——**化圆为方、倍立方、三等分角**——困扰了数学界两千余年。欧几里得《几何原本》第 IV 卷只给出了正 3、4、5、6、15 边形的作法;此后**逾两千年**,正多边形作图几乎毫无进展——直到 1796 年高斯的 17 边形,才有了欧几里得之后的第一次突破。

高斯的真正贡献不在于"画出来",而在于他证明了"**为什么可以画**":尺规作图的边界,最终是由数域的代数对称性(能否由一连串开平方逐层达到)决定的。这一视角把一个两千年的几何问题,翻译成了一个关于数的对称结构的问题——这正是后来[伽罗瓦理论](https://en.wikipedia.org/wiki/Galois_theory)的先声。

### 8.5 背景:不伦瑞克公爵的资助

高斯出身寒微,其求学得益于[**不伦瑞克公爵**](https://en.wikipedia.org/wiki/Charles_William_Ferdinand,_Duke_of_Brunswick)(Duke of Brunswick,Carl Wilhelm Ferdinand)的资助。他于 **1795–1798 年**就读于哥廷根大学——17 边形的突破,正发生在这段受资助求学期的开端。

> 一则流传甚广的轶事（难以一手考据，宜作传说看待）：相传高斯曾希望在自己的墓碑上刻一个正十七边形，石匠以“刻出来会被误认成圆”为由婉拒，于是改刻成十七角星。

---

## §9 结语

正如视频开头里所讲的，高斯在年轻的时候就有如此惊人的洞察力，让当时正处于高中的我感受到了深深的折服。

这篇博文写下了视频里来不及展开的全部推导。视频版本（含动画与朗读）在此：[**YouTube · timeobserver137**](https://youtu.be/TWnMkXEghFg)。

若您发现了视频中或博文中的错误，或者对我所做的感兴趣，也欢迎您通过视频下方评论和邮箱留言。

谢谢观赏。

---

*timeobserver137 · *[*timeobserver137.cyou*](/)* · 数学推导：Abel｜史实核校：Gauss｜逻辑评审：Socrates｜合成与媒体：Escher｜发布：Euler*
