---
title: "Symmetry and the Monster (4): The Mathematician Taken for a Spy, and the Dream He Dreamed After Galois"
date: 2026-06-29
lang: en
series: symmetry-monster
seriesOrder: 4
ghostSlug: symmetry-monster-ep4
---

> Mathematics, in the end, is a product of human thinking independent of experience — so how does it come to match the objects of the real world so fittingly? ——Albert Einstein, *Geometry and Experience* (Geometry and Experience, 1921)

## A word from the author

While making this series I also finished reading this book. For me, the biggest difference between reading in the AI era and before is that the answers to most of the questions in a book can be found with AI; if our curiosity is strong enough, we can get more out of a book than before. For example, most of the mathematical and physical derivations in this series actually came out of my process of asking AI one question after another. AI does not read a whole book in our place; it helps us discover more of what we want to know from a book, so "what we want to know" is what matters.

---

**🎬 The companion video for this episode is out (YouTube)**

<iframe width="200" height="113" src="https://www.youtube.com/embed/9djH9VEJacU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Symmetry and the Monster (4): The Mathematician Taken for a Spy, and the Dream He Dreamed After Galois"></iframe>

## Prologue · A question bigger than Galois's

In the summer of 1870, the Franco-Prussian War had just begun. A Norwegian was hiking alone across the French countryside, heading for Italy. When he reached Fontainebleau, he was arrested as a German spy — the mathematical manuscripts full of symbols in his rucksack were taken by the gendarmes for encrypted military telegrams. He was held in prison for about a month, until a French mathematician came with a letter from the Ministry of the Interior and got him out.

This man taken for a spy was called [Sophus Lie](https://mathshistory.st-andrews.ac.uk/Biographies/Lie/). And the "codes" in his manuscripts were a branch of mathematics that afterwards quietly rewrote the whole of physics.

![Figure 1](/content/images/2026/06/sophus_lie.jpg)

*Figure 1  Sophus Lie (1842–1899) — the man who was taken for a spy. Public domain.*

In [EP2](/writing/symmetry-monster-ep2/) and [EP3](/writing/symmetry-monster-ep3/), [Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/) (Évariste Galois) used groups to unlock **discrete** symmetry — the ways a finite number of roots can be arranged and permuted. But more of the symmetries in this world are **continuous**: turning a circle, turning a sphere, you can turn by any tiny amount, with no gaps in between. Lie asked a question bigger than Galois's: **does continuous symmetry also have the whole apparatus that Galois had?**

This episode follows this question in four steps: first, Lie the man and the question he set out to chase (history); next, continuous symmetry's own "periodic table" (mathematics); then how it built the periodic table of the elements of our universe (physics); and finally how to walk back from infinite continuous symmetry to the finite atoms of symmetry, and at the end to ask: have these atoms really all been found?

---

## Contents

- [§1 · The history line: the man who wanted to make a Galois theory for differential equations](#1--the-history-line-the-man-who-wanted-to-make-a-galois-theory-for-differential-equations)
- [§2 · The mathematics line: the "periodic table" of continuous symmetry](#2--the-mathematics-line-the-periodic-table-of-continuous-symmetry)
- [§3 · The physics line: where do those electron numbers in the periodic table actually come from](#3--the-physics-line-where-do-those-electron-numbers-in-the-periodic-table-actually-come-from)
- [§4 · Back to the question on the mathematics line: how do we get back to the "finite"?](#4--back-to-the-question-on-the-mathematics-line-how-do-we-get-back-to-the-finite)
- [Epilogue · Have they all been found?](#epilogue--have-they-all-been-found)
- [Appendix 1 · Foundations of representation theory: complete reducibility, characters, Schur orthogonality](#appendix-1--foundations-of-representation-theory-complete-reducibility-characters-schur-orthogonality)
- [Appendix 2 · The irreducible representations of $SO(3)$: spherical harmonics and $2\ell+1$ (odd dimensions)](#appendix-2--the-irreducible-representations-of-so3so3so3-spherical-harmonics-and-2ℓ12ell12ℓ1-odd-dimensions)
- [Appendix 3 · Deriving the electron's spin ½ from the Dirac equation](#appendix-3--deriving-the-electrons-spin--from-the-dirac-equation)
- [Appendix 4 · From spin ½ to fermions and Pauli exclusion](#appendix-4--from-spin--to-fermions-and-pauli-exclusion)
- [Appendix 5 · Burnside's $p^aq^b$ theorem: the order of a non-abelian simple group contains at least 3 primes](#appendix-5--burnsides-paqbpaqbpaqb-theorem-the-order-of-a-non-abelian-simple-group-contains-at-least-3-primes)
- [Sources](#sources)

---

## §1 · The history line: the man who wanted to make a Galois theory for differential equations

In 1842, Sophus Lie was born in Nordfjordeide on the west coast of Norway; his father was a Lutheran pastor. From childhood he was a fine athlete — especially good at gymnastics, and also a pioneer of early hiking in Norway: on ordinary days he thought nothing of walking thirty or forty kilometers, on good days he could walk seventy or eighty, and legend has it that once, to fetch a book he had left behind, he walked a round trip of more than a hundred kilometers.

![Figure 2](/content/images/2026/06/norway_sognefjord_dahl.jpg)

*Figure 2  Lie's homeland, the west coast of Norway. J. C. Dahl, "Winter at the Sognefjord", 1827. Public domain.*

But his life did not start smoothly. When he graduated from university in 1865, he had shown neither exceptional talent for what he had studied nor any great liking for it, and for several years after graduating he did not know what to do. According to his authoritative biographer Stubhaug, in those years he at one point sank into a low close to suicide — at the beginning of 1866 he wrote to a good friend that he had meant to end his life, but had not had the strength to do it. The turning point came around 1867–68: he read the geometry of Plücker and Poncelet, and borrowed from Sylow the lecture notes on Galois theory from years before, and only then did he really set out on the road of mathematics.

![Figure 3](/content/images/2026/06/galois_portrait_age15.jpg)

*Figure 3  Évariste Galois (1811–1832), portrait at age 15. Lie borrowed the lecture notes on his theory, and from then on resolved to make a Galois theory for differential equations as well. Public domain.*

His ambition, from the very beginning, continued Galois. Galois used groups to unlock **algebraic equations** (permutations of a finite number of roots); what Lie wanted to do was **make a Galois theory for differential equations as well** — in his biography, Freudenthal's words are: "Lie dreamed of a Galois theory of differential equations but did not really succeed". The difficulty is this: an algebraic equation has only finitely many solutions, whereas a differential equation (for example one describing a vibrating string) has **infinitely many solutions**, varying continuously with the initial conditions. Lie wanted to look at all the solutions together, and then see how one solution changes continuously into another — and this led him to **"continuous transformation groups"**: groups in which one operation can be deformed continuously, little by little, into another. Such groups are infinitely large (a continuous change has to pass through infinitely many intermediate states), and yet they later became exactly the key to finding all the **finite** atoms of symmetry. This is the line that runs from EP2 and EP3 into this episode: the Galois of the discrete world was carried by Lie into the continuous world.

![Figure 4](/content/images/2026/06/lie_preface_galois_lineage.jpg)

*Figure 4  The preface of Lie's "Theory of Transformation Groups", 1893 — here he publicly continues Galois, and also draws a line between himself and Klein. Public domain.*

After the spy affair of the prologue, he returned to Norway and soon finished his doctoral dissertation, and the Norwegian parliament created a chair especially for him. He carried on in Galois's direction, and he also lived long enough — he could promote his own methods in person and train students, which is where he differed from Galois, who died young. He used multidimensional geometry to treat differential equations (treating the parameters of the equations as coordinates — the apparatus of coordinate geometry was founded by Descartes in the first half of the 17th century, in 1637). In 1886 he left Norway to succeed Klein in teaching at Leipzig; in 1898 he returned to Norway (Christiania, today's Oslo, to a chair newly created especially for him), and in February 1899 he died of illness there.

The mathematics he founded has grown only more important since. The editors' introduction to Lie's *Collected Works* calls his theory "a work of art", "a production in every way comparable with that [...] of a Beethoven"; in 1974 the mathematician Dieudonné wrote that "the most unexpected theories, from arithmetic to quantum physics, all circle around this field, as around a giant axis."

### Those who took up the baton: spreading this theory out, completing it, and bringing it back to the finite

- [**Felix Klein**](https://www.britannica.com/biography/Felix-Klein)**(Felix Klein, 1849–1925)**: Lie's close friend and collaborator. The two met in Berlin in 1869 and in the spring of 1870 worked on transformation groups together in Paris — this was exactly the seed of Klein's 1872 "Erlangen program" (defining a geometry by a transformation group). But in 1892–93 the two fell out over the authorship/credit of the Erlangen program, and Lie, in the preface to his 1893 *Theory of Transformation Groups*, publicly drew a line between himself and Klein.
- [**Wilhelm Killing**](https://mathshistory.st-andrews.ac.uk/Biographies/Killing/)**(Wilhelm Killing, 1847–1923)**: **a Gymnasium teacher by profession, he independently** achieved the classification of the complex simple Lie algebras and discovered those few exceptional algebras (that is, the later Killing–Cartan classification; the "Killing form" is also named after him). The two were contemporaries only five years apart, each arriving at this theory independently; they first had contact through Klein only in 1884, and met only once, in 1886 (they did not get on); they were rivals, not master and disciple.
- [**Élie Cartan**](https://mathshistory.st-andrews.ac.uk/Biographies/Cartan/)**(Élie Cartan, 1869–1951)**: his doctoral dissertation of 1894 made Killing's classification rigorous and actually constructed those few exceptional simple Lie algebras — hence the name "Killing–Cartan classification". He was not a colleague of Lie himself (dissertation 1894, Lie died 1899); he was the direct heir who completed this structure theory.
- [**Leonard Dickson**](https://en.wikipedia.org/wiki/Leonard_Eugene_Dickson)**(Leonard Dickson, 1874–1954)**: an American, who carried the construction of continuous Lie groups **unchanged onto finite fields** and built finite simple groups (those of type G₂ are still called "Dickson groups" today). This was a key step on the road from continuous → finite (continued in §4).
- [**William Burnside**](https://en.wikipedia.org/wiki/William_Burnside)**(William Burnside, 1852–1927)**: an Englishman, on the finite-group side. In 1904 he proved the pᵃqᵇ theorem, with the corollary: **the order of a non-abelian finite simple group must be divisible by at least three distinct primes** — which neatly frames the 60 = 2²·3·5 (A₅) of EP3 that §4 will come back to.

![Figure 5](/content/images/2026/06/fig_lineage_5.png)

*Figure 5  Those who took up the baton: Klein, Killing, Cartan, Dickson, Burnside — spreading Lie's theory out, completing it, and bringing it back to the finite. For the sources of the portraits, see "Image sources" at the end.*

---

## §2 · The mathematics line: the "periodic table" of continuous symmetry

Lie took the baton from Galois and wanted to build a theory for **continuous** symmetry as well. But continuous symmetry is far more slippery than discrete symmetry — a circle can turn by any tiny amount, with no gaps in between. To build a "periodic table" for it, the first step is to understand the most basic thing: what does a "continuous symmetry group" actually look like, and how do we "weigh" its size?

### 1. What is a continuous transformation group (intuition)

How do we "weigh" the size of a continuous group? Counting how many elements it has does not work — the angles through which a circle can turn are infinitely many, and comparing any two continuous groups by "number of elements" is infinity against infinity, with no telling which is bigger. Ask a different question and it becomes clear: **in this symmetry, how many directions are there that can be adjusted continuously and independently of each other?** Think of each such direction as a "knob" that can be turned — turn it, and the symmetry changes continuously by a little, while the knobs do not affect one another. The number of knobs a continuous group has is a **finite** number, and it is what really captures the "size" and complexity of the group. We call this number the **dimension** (also called degrees of freedom) of the continuous group.

- **Turning a disk.** You can turn it by any angle $\theta$ — one continuous knob. There is only this one knob, so the rotational symmetry of the disk is **1-dimensional**. Draw all the ways of turning themselves: $\theta$ turns continuously from $0$ to $360^\circ$ and joins back up with the starting point — **these "ways of turning" themselves line up into a circle**. One of the simplest continuous groups, $SO(2)$, has the shape of a loop.
- **Letting a rigid body slide freely on a plane.** It can move left and right (1 knob), up and down (a 2nd), and also turn on the spot (a 3rd) — **3 independent kinds of motion, 3-dimensional**.
- **Throwing a tennis ball into three-dimensional space.** It can translate along $x,y,z$ (3), and can also tumble about three axes (3) — **6 degrees of freedom, 6-dimensional**.

"Dimension = the number of independent continuous kinds of motion" — this is all the intuition we need. Continuous groups can be 1-dimensional (the circle), 3-dimensional, 6-dimensional… even hundreds of dimensions.

**Holding it in your hand: a continuous group is a family of matrices.** The "ways of turning" above are not only a metaphor — each of them can be **written as a matrix**. Take the simplest, $SO(2)$: "turning by the angle $\theta$" acts on a vector $(x,y)$ in the plane and turns it counterclockwise by $\theta$; written down, this is

$$
R(\theta)=\begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix},\qquad R(\theta)\begin{pmatrix}x\\ y\end{pmatrix}=\begin{pmatrix}x\cos\theta-y\sin\theta\\ x\sin\theta+y\cos\theta\end{pmatrix}.
$$

The whole group $SO(2)$ is the set of **all** these matrices $R(\theta)$ ($\theta$ from $0$ to $2\pi$). Joining two rotations together — first turning by $\beta$, then by $\alpha$ — is multiplying the two matrices, and the product is exactly a turn by $\alpha+\beta$:

$$
R(\alpha)\,R(\beta)=\begin{pmatrix}\cos\alpha & -\sin\alpha\\ \sin\alpha & \cos\alpha\end{pmatrix}\begin{pmatrix}\cos\beta & -\sin\beta\\ \sin\beta & \cos\beta\end{pmatrix}=\begin{pmatrix}\cos(\alpha{+}\beta) & -\sin(\alpha{+}\beta)\\ \sin(\alpha{+}\beta) & \cos(\alpha{+}\beta)\end{pmatrix}=R(\alpha{+}\beta)
$$

(it can be checked with one use of the angle-addition formulas — "multiplying two operations in the group" here is genuine matrix multiplication). In three-dimensional space, "turning about an axis" is likewise a matrix, for example turning about the $z$ axis by $\theta$:

**A concrete number**: take $\theta=90°$; $R(90°)=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ sends $(1,0)$ to $(0,1)$; once more, and it is sent to $(-1,0)$ — two $90°$ put together are exactly $180°$, corresponding to $R(90°)\,R(90°)=R(180°)=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$. "Multiplying = adding angles" lands in this way on genuine numbers.

$$
R_z(\theta)=\begin{pmatrix}\cos\theta & -\sin\theta & 0\\ \sin\theta & \cos\theta & 0\\ 0 & 0 & 1\end{pmatrix}
$$

(turning about the $x$ and $y$ axes are two other similar $3\times3$ matrices); all such $3\times3$ rotation matrices together make up $SO(3)$. This is the core of this chapter: **a continuous group, put down on paper, is a family of matrices** — what is called a "Lie group" is, most of the time, a "continuous group made up of matrices". The classification table below classifies exactly these matrix groups.

![Figure 6](/content/images/2026/06/gif_so2_rotation.gif)

*Figure 6  The simplest continuous group SO(2): turn by any angle θ, each way of turning corresponds to a matrix R(θ), and multiplying two rotations is exactly adding the angles.*

### 2. Lie's goal: classifying continuous symmetry too

With "dimension" as a ruler, back to the real business of classification. When Galois sorted out **discrete** symmetry, what he did was not only "describe it with groups"; he also took finite symmetry apart all the way down to **atoms that cannot be broken apart** — the finite simple groups (the $A_5$ of EP3 is one). Lie wanted to do the same for **continuous** symmetry, and so the first question popped up at once: does continuous symmetry also have "atoms"?

It does. Some continuous groups can **be taken apart**: for example the "rigid motions of the plane" (3-dimensional) of §1 are in fact two blocks put together, "translations" and "rotations", and the translation block can be peeled off as a whole and stand on its own. But some continuous groups **cannot be peeled however you try** — you cannot find inside them a small block of continuous symmetry that can be lifted out on its own (in the language of EP3: there is no nontrivial continuous normal subgroup that can be quotiented out). A continuous group of this kind, which "can no longer be taken apart", is an **atom** of continuous symmetry, mathematically called a **simple Lie group**. $SO(3)$ (three-dimensional rotations) is one: you cannot take "turning about some direction" apart into two smaller, separately independent continuous symmetries.

**Example (can be taken apart vs cannot be broken apart)**: in the rigid motions of the plane $SE(2)$ (translations, 2 dimensions + turning, 1 dimension = 3 dimensions), the two dimensions of "translation" form a **continuous normal subgroup**, which can be quotiented out as a whole block and peeled off separately — so $SE(2)$ is **not** an atom; whereas in $SO(3)$ (turning about any axis) no such continuous normal subgroup that can be peeled off separately can be found — so it **is** an atom (a simple Lie group).

In this way, what Lie had to do was exactly the same as what Galois had done: **first list all these "atoms" completely**, and then every continuous symmetry in the world is nothing but something put together from them — just as chemists took all things apart onto one periodic table of the elements. On the day the table of atoms is complete, continuous symmetry will also have been thoroughly sorted out.

Lie did not get to finish this; those who carried on the relay were **Killing** (a schoolteacher, in the chain of people of §1) and **Élie Cartan** (the one who made the classification rigorous and actually constructed those few exceptions). They proved an astonishingly clean classification theorem — below is this **"periodic table" of continuous symmetry groups**.

> **First, let us be clear about one word.**
>
> Here the "periodic table" is borrowed as a metaphor, referring to the
>
> **classification table**
>
> that sorts the
>
> **continuous symmetry groups**
>
> (simple Lie groups) into categories like the chemical elements — it and the chemical
>
> **elements'**
>
> periodic table of §3
>
> **are not the same table**: the former is the periodic table of
>
> **groups**
>
> , the latter is the periodic table of
>
> **elements**
>
> . What is really wonderful is that
>
> **the same mathematics of continuous symmetry**
>
> — at one end lays out its own
>
> **classification table of groups**
>
> (this section), and at the other end, in §3, determines the structure of the
>
> **periodic table of the chemical elements**
>
> . The same mathematics wrote down a table on each of two levels.

![Figure 7](/content/images/2026/06/lie_transformationsgruppen_jacobi_1888.jpg)

*Figure 7  Lie's "Theory of Transformation Groups" (Theorie der Transformationsgruppen, written with Engel, 1888–93). Public domain.*

### 3. The Killing–Cartan periodic table: 4 great families + 5 exceptions

The table looks like this: all the atoms of continuous symmetry (simple Lie groups) fall **exactly** into **four infinitely extending families** — call them $A,B,C,D$ — plus **five exceptions that belong to no family**. First look at the four great families; in essence they are all some kind of "rotation".

**The $A_n$ family — the complex version of rotation.** Replace the real coordinates in ordinary rotation with **complex** coordinates (each "axis" becomes a complex plane), and the rotations that preserve length make up $A_n=SU(n{+}1)$. The smallest, $A_1=SU(2)$, we have already seen: it is a **double cover** of the three-dimensional rotations $SO(3)$ (the electron spin of §3 lives exactly on this level).

**The $B_n$ and $D_n$ families — honestly turning real space, split only by odd and even dimension.** These two families are just the most familiar "turning a $k$-dimensional real space", $SO(k)$: if the dimension is **odd** ($k{=}2n{+}1$) it belongs to $B_n$, if **even** ($k{=}2n$) to $D_n$. Why must odd and even part ways? Because in even dimensions rotation has an extra kind of symmetry, "pairing all the planes up two by two", which odd dimensions do not have — this structural difference gives the two families different "fingerprints", so they must be separated. $SO(3)$ is $B_1$, $SO(8)$ is $D_4$.

**The $C_n$ family — rotations of "phase space" (symplectic symmetry).** This one is the least intuitive, but it has a physical handle: in classical mechanics, describing a particle takes **position + momentum** in pairs, and the space held up by this "position–momentum pairing" is called **phase space**; the linear transformations that preserve this "position–momentum" pairing structure (mathematically called a **symplectic structure**) make up $C_n=Sp(2n)$ — it is exactly the linear version of what are called **canonical transformations** in classical mechanics: changing to a new set of position and momentum coordinates while leaving the form of Hamilton's equations exactly unchanged. (Incidentally, to clear up a common misunderstanding: this is **not** "spacetime symmetry" — however spacetime is turned, the laws of physics do not change; that is another group, called the Lorentz group, which will be touched on at the end of §4; the symplectic group $Sp$ is in charge of the "position–momentum" pairing in phase space, not of spacetime.) Remember these four families in one sentence: $A$ turns complex space, $B/D$ turn real space (odd/even dimensions), $C$ turns phase space.

**So what exactly is "rank"?** Do not stop at empty words like "≈ independent planes of rotation"; it has a very concrete meaning: **how many independent planes you can turn at the same time without interfering with one another.** In three-dimensional space, any two axes of rotation you pick will stir each other up, and at most one plane can be turned independently — so $SO(3)$ has **rank 1**. But once in four dimensions, "the $xy$ plane" and "the $zw$ plane" do not interfere with each other at all, and can **each turn its own way at the same time** — $SO(4)$ has **rank 2**. The higher the dimension, the more independent rotations can be twisted at the same time, and the larger the rank. Rank is the number of "**how many twists can be made at the same time**" in a continuous symmetry. (The rank of the $n$-th member of a family is exactly $n$; apart from the smallest one or two at the start of each family, these groups are all atoms of the kind "that cannot be broken apart" described in the previous section.)

**The four great families, written as matrices.** Back to the core of §1 — "a continuous group is a family of matrices" — these four families are in essence each the totality of "matrices that preserve some structure":

| Family | Group | Written as matrices | What it preserves |
| --- | --- | --- | --- |
| $A_n$ | $SU(n{+}1)$ | $(n{+}1)\times(n{+}1)$ complex matrices | length in complex space ($U^\dagger U=I,\ \det=1$) |
| $B_n,\,D_n$ | $SO(2n{+}1),\,SO(2n)$ | $k\times k$ real matrices | length in real space ($R^\mathsf{T}R=I,\ \det=1$) |
| $C_n$ | $Sp(2n)$ | $2n\times2n$ real matrices | the position–momentum pairing ($M^\mathsf{T}JM=J$) |

The three phrases "turning complex space / turning real space / turning phase space" mean precisely these three rows of matrix conditions — this is the solid ground under "they are all some kind of rotation". Take the **smallest** one of each family and actually write out the matrices:

$$
\underbrace{\begin{pmatrix}\alpha & -\bar\beta\\ \beta & \bar\alpha\end{pmatrix}}_{A_1=SU(2),\ |\alpha|^2+|\beta|^2=1}\qquad\quad \underbrace{\begin{pmatrix}\cos\theta & -\sin\theta & 0\\ \sin\theta & \cos\theta & 0\\ 0&0&1\end{pmatrix}}_{B_1=SO(3)}\qquad\quad \underbrace{\begin{pmatrix}a & b\\ c & d\end{pmatrix}}_{C_1=Sp(2,\mathbb{R}),\ ad-bc=1}
$$

The entries of $A$ are **complex numbers** ($\alpha,\beta$ complex, with the constraint $|\alpha|^2+|\beta|^2=1$ preserving complex length); those of $B/D$ are **real numbers** (preserving real length, exactly the rotation of §1); $C$ is real too, but what it preserves is not length but "area" — $Sp(2,\mathbb{R})$ is exactly the real matrices with determinant $1$ that are $2\times2$, that is, **the linear transformations that twist without changing the area of a parallelogram**, and this is the smallest "symplectic pairing".

**Example (what $SU(2)$ double-covering $SO(3)$ looks like)**: for turning about the $x$ axis by $\theta$, the $SU(2)$ element is $U(\theta)=\begin{pmatrix}\cos\tfrac{\theta}{2} & -i\sin\tfrac{\theta}{2}\\ -i\sin\tfrac{\theta}{2} & \cos\tfrac{\theta}{2}\end{pmatrix}$ ($\det=1$, unitary). Add a full turn to the angle, to $\theta+2\pi$: because $\cos\tfrac{\theta+2\pi}{2}=-\cos\tfrac{\theta}{2}$, we get $U\to -U$ — this is **the same $SO(3)$ rotation** (turning by $\theta$ and turning by $\theta{+}2\pi$ make no difference in space), yet it is **two different $SU(2)$ elements**, $U$ and $-U$. This "two to one" is the "double cover", and it is exactly the root of the electron's spin ½ in §3.

(An honest footnote: what was picked above is the **smallest** member of each family, only to show what the matrices of the three "flavors" look like; in fact at this smallest level (rank 1), $A_1,B_1,C_1$ are **exactly isomorphic** to one another, a well-known "low-rank coincidence". The four families only really part ways at rank $\ge 2$ — for example $B_2=SO(5)$ and $C_2=Sp(4)$ are two different groups.)

**Four infinite families — the story should have ended perfectly here.** A table that is both clean and regular: four columns, each column extending downward without end. If the world of continuous symmetry were that tidy, it would be far too easy.

**But when the classification is really pushed to the end, the result is not that regular.** Killing and Cartan carried the classification to its end and found that in a corner of the table there were **5 more** symmetries — they **do not fit the mold of any of the families $A,B,C,D$**, and popped up extra:

$$
G_2\ (14\text{ dimensions}),\quad F_4\ (52),\quad E_6\ (78),\quad E_7\ (133),\quad E_8\ (248).
$$

![Figure 8](/content/images/2026/06/gif_killing_cartan.gif)

*Figure 8  The "periodic table" of continuous symmetry: 4 infinitely extending families A/B/C/D, plus 5 exceptions that belong to no family, G₂, F₄, E₆, E₇, E₈.*

Three points about this result are worth noting: - **They follow no pattern.** Each of the four great families can be summed up in a sentence ("turning complex space", "turning real space"…), but these 5 cannot be put together into a common "what they turn" — each has its own strange structure. - **Neither more nor fewer, exactly 5.** Not 0 (that would be regular), and not infinitely many (that would count as a kind of pattern too), but precisely **5**, an inexplicable finite number. - **It stops abruptly at $E_8$.** When the rank climbs to **8** ($E_8$, 248 dimensions), that is the ceiling — if you want to attach one more, an "$E_9$", the whole structure **collapses into infinite dimensions** and is no longer a finite building block. Nobody could have foreseen this wall at rank 8.

![Figure 9](/content/images/2026/06/gif_e8_wall.gif)

*Figure 9  The five exceptions line up to E₈ (248 dimensions) and abruptly hit the ceiling — rank 8 is the ceiling; if you try to attach one more, the whole structure collapses into infinite dimensions.*

A classification table that should have been regular and infinite finally grew into "**four infinite families + 5 exceptions that abruptly hit a ceiling**".

> ⭐
>
> **This is the first time this series gets a taste of "exceptions"**
>
> — outside the four regular families, there really are a few other basic building blocks. But let us be clear: they are still
>
> **proper continuous symmetries, belonging to the regular classification of Lie groups**, only
>
> **they do not look like those four families**
>
> , that is all. Their individual origins, and what is hidden in those 248 dimensions of $E_8$,
>
> **this episode only touches on**
>
> (left for later episodes). But please remember this picture:
>
> **a classification table whose main body is a few regular infinite families, yet with a few members in the corner that do not play by the rules.**

Continuous symmetry, in this way, has its own "periodic table" — Killing–Cartan's **4 great families + 5 exceptions** (to stress it once more: this is the classification table of **groups**, not the chemists' periodic table of the elements). In the next section, we look at **what real things** this continuous symmetry built: with its own hands it will fix the chemistry of our universe — that **real periodic table of the elements**.

And the origins of those 5 exceptions themselves are left for later episodes. But here let us first bury a bigger suspense: however strange they are, **they are still on this classification table**; and the quarry this series is really chasing **may not be on the table at all**. (Foreshadowing → Epilogue.)

### 4. One step further: the "representations" of a group, and a ruler that takes a whole section to use

Up to here, the "a continuous group is a family of matrices" of §2 referred to what the group **itself** looks like — $SO(3)$ itself is those $3\times3$ rotation matrices. But the really useful step is to go one notch further: **the same group can also "act" on other things.**

The three-dimensional rotations $SO(3)$ do not only turn arrows in space; they also act on **the states of electrons** — turn an atom, and those "orbitals" of the electrons will be stirred along with it, exchanging places with one another. This action likewise assigns a matrix to **every** operation in the group (only these matrices act on the space of "electron states", and can be much larger than $3\times3$), and the assignment **fits multiplication seamlessly**: first turn by $g$, then by $h$, and the corresponding matrix is exactly the product of the two. Assigning a matrix in this way to each operation of a group — this thing itself (on the premise of the condition above, "agreeing with multiplication") — is mathematically called a **representation** of the group.

A representation can often be "block-diagonalized": choose the right coordinates, and that big pile of matrices will split simultaneously into a few small square blocks that do not interfere with one another, each block in charge of its own lot of states. The small blocks split down until **they can split no further** are called **irreducible representations**; their **dimension** (the side length of the small block) is a definite integer, one of the hardest fingerprints of the group.

**Example (a visible representation)**: $SO(3)$ acting on the three $p$ orbitals $(p_x,p_y,p_z)$ is a **3-dimensional representation**. A turn about the $z$ axis by $90°$ sends $p_x\!\to\!p_y$, $p_y\!\to\!-p_x$, and leaves $p_z$ unchanged; written as a matrix it is exactly $\begin{pmatrix}0&-1&0\\1&0&0\\0&0&1\end{pmatrix}=R_z(90°)$. This $3$-dimensional block can split no further — it is exactly the irreducible block of the next section that, for $\ell=1$, has $2\ell+1=3$.

Remember this ruler well: **group → representation → dimension**. The whole physics line of the next section uses it again and again — the same ruler measures the periodic table of the elements at one end and elementary particles at the other.

(For the rigorous proofs here of why "after choosing the right coordinates the matrices become block-diagonal simultaneously", "irreducible representations" and "characters" hold — complete reducibility, traces and characters, Schur's lemma and the orthogonality relations — see **Appendix 1** at the end.)

---

## §3 · The physics line: where do those electron numbers in the periodic table actually come from

At the end of the previous episode, that set of glowing orbital clouds — $s$ is a sphere, $p$ a dumbbell, $d$ four petals — were the "shapes" an electron can occupy in an atom. Chemistry class teaches you a set of rules for counting electrons: a **subshell** ($s,p,d,f$) contains a number of **orbitals**, each orbital holds at most 2 electrons, and so $s/p/d/f$ hold **2, 6, 10, 14** electrons respectively.

![Figure 10](/content/images/2026/06/atomic_orbitals_density.png)

*Figure 10  The shapes of electron orbitals: s a sphere, p a dumbbell, d four lobes. PoorLeno, "Hydrogen density plots", 2008. Public domain.*

You have probably memorized this set of rules. What this section has to supply is **the reasoning behind it** — and from start to finish it uses only one tool: the ruler of the previous section, **group → representation → dimension**. Below we will take it out three times: the first time to measure "how many orbitals a subshell has", the second time to measure "how many electrons an orbital has", and the last time, to extend the same ruler all the way to elementary particles. $2,6,10,14$ are not numbers fudged together; they are the result of measuring twice with this ruler and then multiplying.

### 1. First, sort out the three levels: orbital → subshell → shell

- **Orbital**: **one** spatial state an electron can occupy in an atom — a definite shape plus orientation (for example a lobe pointing in the $z$ direction, of $p$ type). This is the smallest unit.
- **Subshell**: orbitals of the same kind of shape, differing only in orientation, are grouped into a subshell, that is, $s,p,d,f$.
- **Shell**: the subshells with the same principal number $n$, taken together, are one electron shell (the K, L, M… shells of chemistry).

So it is the **orbitals** that come first; above them, subshells are put together, and then shells. To count "how many electrons a subshell, a shell can hold", we must first answer two most basic questions: **how many orbitals are there in a subshell? How many electrons stand in an orbital?**

### 2. Using the ruler the first time: the number of orbitals in a subshell = $SO(3)$'s representation block $2\ell+1$

Why does the $p$ subshell have precisely 3 orbitals, and $d$ 5? Take the ruler of the previous section and measure once, and it becomes clear. In the cleanest picture (a single electron, no external field), an atom **is the same however it is turned** — it carries the full symmetry of three-dimensional rotations, $SO(3)$ (the "symmetry of the sphere" of the previous episode).

$SO(3)$ acting on electron states is one of its **representations**: each rotation is assigned a matrix, after choosing the right coordinates these matrices are **block-diagonal**, and each **irreducible block** that can split no further corresponds exactly to one subshell. And there is an iron law for the sizes of the irreducible blocks of $SO(3)$ — **they can only be odd, $2\ell+1$**. Each orbital in a block carries an integer label $m$ (the **magnetic quantum number**, $m=-\ell,\dots,\ell$, corresponding to "how fast it turns about the axis"), and counting them gives exactly $2\ell+1$:

$$
2\ell+1:\quad \ell=0\to1\ (s),\quad \ell=1\to3\ (p),\quad \ell=2\to5\ (d),\quad \ell=3\to7\ (f).
$$

This is **the number of orbitals in a subshell** — one for $s$, three for $p$, five for $d$, seven for $f$. Their shapes are exactly that set of glowing clouds from the previous episode (mathematically, the spherical harmonics $Y_\ell^m$). The ruler's first measurement gives the string of integers $1,3,5,7$.

**Example (the $p$ subshell)**: $\ell=1$ gives $2\ell+1=3$ orbitals, with magnetic quantum numbers $m=-1,0,+1$ — corresponding to the three orientations $p_z$ ($m{=}0$) and $p_x,p_y$ (real combinations of $m{=}\pm1$). This is exactly the block whose states $R_z(90°)$ in the previous section turns into one another, the $3$-dimensional one.

> Why can the blocks of $SO(3)$
>
> **only**
>
> be odd-dimensional, $2\ell+1$? It has to be proved rigorously from the algebra of angular momentum + the $SU(2)$ double cover; for the complete derivation see
>
> **Appendix 2**
>
> later.

### 3. Using the ruler the second time: how many electrons in an orbital = the spinor representation of $SU(2)$ (spin ½)

An orbital holds at most **2** electrons, one with spin up and one with spin down. This "2" is measured by the same ruler the second time — only this time the group being measured is the double cover of $SO(3)$, $SU(2)$.

Remember that sentence in §2: $A_1=SU(2)$ **double-covers** $SO(3)$. The two are the same almost everywhere, yet they differ by a tiny bit: the representation blocks of $SO(3)$ can only be odd-dimensional (the string $1,3,5,7$ of the previous section), whereas its double cover $SU(2)$ has in addition **that whole batch of half-integer representations that $SO(3)$ cannot get** (dimensions $2,4,6,\dots$); the smallest nontrivial one among them is the **2-dimensional "spinor"**. These 2 dimensions correspond exactly to the two states "up and down" of electron spin: **spin ½ is nothing other than the spinor representation of $SU(2)$.** Two states, plus **Pauli exclusion** (two electrons cannot be in exactly the same state), and one orbital is exactly filled by 2.

**Example (helium, $Z=2$)**: both of helium's electrons go into this **one** orbital $1s$ — one with spin $\uparrow=\binom{1}{0}$ and one with $\downarrow=\binom{0}{1}$, exactly the two basis states of the $SU(2)$ spinor; Pauli exclusion forbids a third, so $1s$ stops here and helium's first shell is full.

So by what right does the electron land in this half-integer spinor representation of $SU(2)$, and not in those integer representations of $SO(3)$? The answer comes from **relativity**. In 1928 [Dirac](https://en.wikipedia.org/wiki/Paul_Dirac) set out to write an equation for the electron that both agreed with relativity and contained only first derivatives; once these two requirements are laid down, the electron's wave function **must have 4 components**, and the block among them that describes rotation turns out, when computed, to be exactly this $SU(2)$ spinor — spin ½. A clean and experimentally measurable mark: turn an electron through one full circle $2\pi$ in space, and it does **not** return to how it was, but changes sign to $-\psi$; it takes one more turn, $720^\circ$ in all, to be truly restored. "Restored only after two turns" is exactly the signature of the spinor representation — and exactly the true face of that "tiny bit" by which $SU(2)$ exceeds $SO(3)$.

![Figure 11](/content/images/2026/06/paul_dirac.jpg)

*Figure 11  Paul Dirac (1902–1984). His 1928 equation requires the electron's wave function to have 4 components, and the block among them that describes rotation is exactly the spinor of SU(2) — spin ½. © Nobel Foundation, 1933, public domain.*

> For why the spinor of $SU(2)$ is 2-dimensional and half-integer, and how it joins up with the integer representations of $SO(3)$, see
>
> **Appendix 2**; for the complete derivation of spin ½ from the Dirac equation see
>
> **Appendix 3**; for the proof of "spin ½ ⟹ fermion ⟹ Pauli exclusion" see
>
> **Appendix 4**
>
> .

### 4. Totting up the account: $2,6,10,14$ → $2,8,18,32$

The ruler has measured twice; multiply the two integers together, and that is the electron capacity of **one subshell**:

$$
\underbrace{(2\ell+1)}_{\text{number of orbitals in the subshell}}\times\underbrace{2}_{\text{number of electrons per orbital}}=\begin{cases}2 & s\\ 6 & p\\ 10 & d\\ 14 & f\end{cases}
$$

**2, 6, 10, 14** — these are the widths of the four blocks $s/p/d/f$ of the periodic table. Then add up the subshells within **one shell** (principal number $n$), and that is the total number of electrons this shell can hold:

![Figure 12](/content/images/2026/06/gif_electron_shells.gif)

*Figure 12  The same ruler measuring twice: the number of orbitals in each subshell (2ℓ+1) × 2 electrons per orbital = 2, 6, 10, 14 — exactly the widths of the four blocks s/p/d/f of the periodic table.*

$$
\text{shell }n\text{ holds}=2n^2:\quad \text{K}(n{=}1)=2,\quad \text{L}(n{=}2)=8,\quad \text{M}(n{=}3)=18,\quad \text{N}(n{=}4)=32.
$$

(A small reminder: a "**row**" in the periodic table and "an electron shell" do not completely coincide — electrons are filled in order of energy, and $4s$ gets in ahead of $3d$, so the lengths of the rows of the table are $2,8,8,18,18,32,32$. This is a detail of the filling order and does not change the total capacity of $2n^2$ per shell.)

To close in one sentence: the electron configurations memorized for years in chemistry class have their root in two integers measured by the same ruler — what $SO(3)$ gives, $2\ell+1$ (in charge of how many orbitals a subshell has), and what its double cover $SU(2)$ gives, $2$ (in charge of how many electrons an orbital has). One tool, measuring twice.

**Example (carbon, $Z=6$)**: the electron configuration of carbon is $1s^2\,2s^2\,2p^2$ — the $2p$ subshell could hold $(2\ell+1)\times2=3\times2=6$ (that is, in $2,6,10,14$, the "$6$"), and carbon fills only $2$. Carbon's $4$ valence electrons ($2s^2\,2p^2$) then, through **$sp^3$ hybridization**, form four equivalent bonds, which hold up the whole of organic chemistry.

### 5. The same ruler, extended all the way to elementary particles

By now the ruler has measured out the whole periodic table of the elements. But its range goes far beyond this — extend the same "group → representation → dimension" once more, and what it measures is **the carriers of the few fundamental forces deep inside matter**.

The first two times, the ruler measured "how the group acts on electron states" (how big the blocks of the representation are); this time we use it differently, measuring "**how big the group itself is**" — that is, the number of independent knobs of §2 (the dimension of the group itself). And the **three** forces, electromagnetic, weak and strong, each come with a symmetry group, and **however many knobs that group has, that is how many carrier particles the force has**:

$$
U(1)\to 1\ \text{photon},\qquad SU(2)\to 3\ \text{weak bosons},\qquad SU(3)\to 8\ \text{gluons}.
$$

(The dimension of $SU(n)$ $=n^2-1$: the symmetry group of the strong nuclear force, $SU(3)$, has $3^2-1=8$ knobs, and the corresponding gluons are exactly 8 kinds. As for the fourth force of nature — **gravity** — it is not in this framework: the graviton has spin $2$ and does not come from the dimension of any $SU(n)$; the gauge group of the Standard Model has only the three pieces $SU(3)\times SU(2)\times U(1)$.)

(To name them specifically: the $3$ carriers of the weak force are $W^+,W^-,Z^0$, and the $1$ of electromagnetism is the photon — the counts match the dimensions $3$ and $1$ of their respective groups directly.)

This is the real main line of this physics line: **the same ruler measures out the periodic table of the elements at one end, and the kinds of elementary particles at the other.** Lie's mathematics of "continuous symmetry" was never an abstract toy — when nature set the rules of chemistry and matter, it used exactly this same language.

Next, we leave physics and return to a deeper mathematical question: how do these "atoms" of continuous symmetry walk back into the **finite** world?

---

## §4 · Back to the question on the mathematics line: how do we get back to the "finite"?

In the first three sections we walked all the way into the **infinite**: Lie groups are continuous, a circle has infinitely many ways of turning, and turning a sphere has infinitely many poses. But the "atoms of symmetry" this series is chasing — the finite simple groups — are **finite**. The name Ronan gave this chapter is a rhetorical question: **"a way back to finiteness" — how do we walk back from infinite Lie groups to finite atoms?**

This section is that road back. It has three steps: first fold the "infinite" number line **back into the finite** (clock arithmetic, the one piece of hard material in this episode explained all the way to the bottom — **borrowing only Bézout from §4 of the previous episode**, with Euclid's lemma and the properties of "finite fields" all derived from it on the spot); then **move** the construction of Lie groups **onto this finite arithmetic** (Dickson); finally use a theorem to **frame** what shape the atoms built this way have (Burnside) — and that shape brings us back exactly to the $A_5$ of EP3.

### 1. Folding the infinite back into the finite: clock arithmetic

You in fact use a "finite arithmetic" every day — **reading the clock**. It is 10 o'clock now; what time is it 5 hours later? Not 15 o'clock, but **3 o'clock**: the clock face has only 12 numbers, and on reaching 12 it goes back to zero and starts over. Write this as a calculation: $10+5=15$, but $15$ and $3$ **are the same point** on the clock face (differing by one whole round of 12). We write

$$
15 \equiv 3 \pmod{12},
$$

read as "$15$ is congruent to $3$ modulo $12$" — **numbers that differ by a multiple of 12 count as the same on the clock face**. So only 12 numbers are left on the clock face, $\{0,1,2,\dots,11\}$, and this arithmetic of "wrapping around on reaching 12" is called **arithmetic modulo 12**, written $\mathbb{Z}/12$.

**Addition, subtraction and multiplication are all done as usual, then wrap around and take the remainder.** Example: $5+9=14\equiv 2$; $5\times 4 = 20 \equiv 8$. This is a **finite** number system — only 12 numbers, yet addition, subtraction and multiplication are all self-consistent. The infinite line of integers is folded by "going round in circles" into one finite circle.

![Figure 13](/content/images/2026/06/gif_clock_modp.gif)

*Figure 13  Clock arithmetic: 5 hours after 10 o'clock is 3 o'clock, because 15 ≡ 3 (mod 12). The infinite line of integers is folded by going round in circles into one finite circle.*

### But division goes wrong — zero divisors

Addition, subtraction and multiplication all go smoothly; only **division** overturns in $\mathbb{Z}/12$. Look at a strange phenomenon:

$$
3 \times 4 = 12 \equiv 0 \pmod{12}.
$$

Two numbers that are **both not 0**, multiplied together, **equal 0**. Such numbers are called **zero divisors**. In ordinary integers this would never happen ($3\times4=12\ne0$); but on the clock face $12$ is $0$, so $3$ and $4$ join forces to "multiply each other away".

Once zero divisors appear, division is ruined. "$a\div b$" ought to mean "solve $b\times x = a$". But in $\mathbb{Z}/12$ ask "$1\div 3=$?" — we must solve $3x\equiv 1$: $3$ times any number is a multiple of $3$, $\{0,3,6,9\}$, and can never make $1$. **$3$ has no reciprocal; dividing by $3$ has no solution.** The arithmetic of this clock face is a crippled number system "missing division".

### Choose a prime, and the crippling is repaired

Change to another clock face — **a 7-hour clock**, $\mathbb{Z}/7=\{0,1,2,3,4,5,6\}$. Try looking for zero divisors again: multiply all nonzero numbers in pairs and take them modulo 7, and you will find that **however you multiply, you cannot make 0**. Why? Because $7$ is a **prime**: if $a\times b\equiv 0\pmod 7$, that means $7\mid ab$, and primes satisfy **Euclid's lemma** — $7\mid ab\Rightarrow 7\mid a$ or $7\mid b$. This lemma does not have to be memorized as an "iron law"; **it can be derived on the spot** (borrowing only Bézout from §4 of the previous episode): suppose $7\nmid a$; then $\gcd(7,a)=1$ ($7$ is a prime, with only $1$ and $7$ as factors, and $7\nmid a$ rules out $7$); by Bézout there are integers $u,v$ with $ua+7v=1$; multiplying both sides by $b$ gives $uab+7vb=b$ — both terms on the left are divisible by $7$ ($7\mid ab$ is known, $7\mid 7vb$ is obvious), so $7\mid b$. So when $a\times b\equiv 0$, one of $a,b$ must already be $\equiv0$ — **there are no zero divisors.**

With no zero divisors, division comes alive. Look in $\mathbb{Z}/7$:

$$
3\times 4 = 12 \equiv 5,\qquad\text{so}\qquad 5 \div 3 = 4.
$$

("$5\div3$" means solving $3x\equiv5$; the line above says exactly $x=4$.) Check one by one: $3\times1{=}3,\ 3\times2{=}6,\ 3\times3{=}2,\ 3\times4{=}5,\ 3\times5{=}1,\ 3\times6{=}4$ — $3$ times $1\dots6$ **hits each of $1\dots6$ exactly once**, so any result you want has a unique $x$, and division **can always be done**. In particular $3\times5\equiv1$, so the reciprocal of $3$ is $5$.

**Conclusion (explained thoroughly).** For $\mathbb{Z}/n$: - $n$ **composite** ($n=a\cdot b$, $1<a,b<n$): then $a,b$ are nonzero yet $a\cdot b\equiv0$ — **there are zero divisors, and division is crippled**. - $n$ a **prime** $p$: **no zero divisors, and every nonzero element has a reciprocal** — addition, subtraction, multiplication and division all go through.

The second half, "every nonzero element has a reciprocal", can also be proved on the spot: $a\in\{1,\dots,p-1\}$ is coprime to $p$, so by Bézout there are integers $u,v$ with $ua+vp=1$; modulo $p$ this is $ua\equiv1$, and $u$ is the reciprocal of $a$. (Bézout is a standard fact already used in §4 of the previous episode.)

A number system in which **addition, subtraction, multiplication and division all go through, and which has only finitely many elements**, is mathematically called a **finite field**, written $\mathbb{F}_p$. We have just proved: **$\mathbb{Z}/p$ is a field $\iff p$ is a prime.** Primes are exactly the key that completes "going-round-in-circles arithmetic" into a whole number system.

> **Galois line ③ (the main line's third appearance).**
>
> These finite fields were invented by none other than
>
> **Galois**
>
> — around 1830 he built $\mathbb{F}_p$ and even $\mathbb{F}_{p^n}$ (to this day a "finite field" is also called a
>
> **Galois field**, written $\mathrm{GF}(p^n)$). And Galois did not stop at arithmetic: in his deathbed letter of 1832 he also studied a batch of groups — in today's terms, exactly $\mathrm{PSL}(2,p)$ (the version of the "$A_1$"-type Lie group over a finite field), which are also among the earliest non-abelian simple groups in history. The one who really moved whole families of Lie groups onto finite fields
>
> **systematically**
>
> , building finite groups of Lie type in batches, was
>
> **Dickson**, to be discussed below; but that batch of groups of Galois's, seen in hindsight, falls exactly at the starting point of the same line. This Galois→Lie→finite line surfaces here for the third, and also the last, time.

### 2. Dickson: moving Lie groups onto finite fields

With the finite field $\mathbb{F}_p$, the road back to the finite is open.

Lie groups (the four great families A/B/C/D of §2) live on the real or complex numbers — so they are **continuous and infinite**: the entries of the matrices can take any real values. **Dickson**'s insight of 1901 was simple and powerful: **replace all the "real numbers" in the same construction with "numbers of a finite field $\mathbb{F}_q$".** The matrices are still the same kind of matrices, the group is still defined the same way, only the entries are changed from the infinite real numbers to the finitely many numbers of a finite field — and so the whole group **all at once becomes finite**.

**What does it look like concretely?** Take the simplest, type $A_1$ — the family of $2\times2$ matrices. Over the real numbers, the matrix entries can take any real values, and there are infinitely many matrices. Change to $\mathbb{F}_5$ (the 5-hour clock), and each entry can only take $\{0,1,2,3,4\}$, for example

$$
\begin{pmatrix} 2 & 1\\ 3 & 2\end{pmatrix},\qquad \det = 2\cdot2-1\cdot3 = 1 \pmod 5,
$$

with addition, multiplication and the determinant all done by the clock arithmetic of the previous section (this is an element of $\mathrm{SL}(2,5)$, with determinant $\equiv1$). With only 5 numbers to fill the entries, there are only **finitely** many matrices — pick out those with determinant $\equiv1$, then reduce by the center according to the rules, and the finite group obtained is exactly $\mathrm{PSL}(2,5)$ ($60$ elements, $=A_5$). The infinite continuous turntable, by the move of "putting in a finite number system", is gathered into one finite atom of symmetry.

To put it vividly: take the same recipe for "making Lie groups", replace all the real numbers in it with numbers in a finite field $\mathbb{F}_q$, and the infinite continuous group **all at once shrinks into a finite segment**. One Lie type $\times$ one prime (power) $=$ one family of finite simple groups (these finite versions **are still simple groups** — this is the core conclusion proved in the Dickson/Chevalley construction, holding apart from a few exceptions with very small $q$; it is a detail of the construction, which this episode, as with Burnside, **takes and uses without unfolding**); there are infinitely many primes, so this machine **churns out in batches** a **great pile** of finite atoms of symmetry — the **finite simple groups of Lie type**.

> **Back to the two atoms of EP3.**
>
> Moving the simplest type $A_1$ onto $\mathbb{F}_p$ gives exactly Galois's family $\mathrm{PSL}(2,p)$: - $\mathrm{PSL}(2,5)$ is exactly
>
> **$A_5$**
>
> ($60$ elements) — EP3's "atom that cannot be broken apart" turns out to be a product of the Lie machine as well; - $\mathrm{PSL}(2,7)$ has
>
> **$168$**
>
> elements — in the "periodic table" of EP3's epilogue, the column of Lie type $\mathrm{PSL}(2,q)$ is headed by $168$, and that is exactly it. The same atom: EP3 ran into it along the road of "even permutations", and this episode meets it again along the road of "continuous symmetry gathered into the finite" — two roads in, the same atom.

(The "switch arithmetic" of the smallest finite field $\mathbb{F}_2=\{0,1\}$ is exactly the foundation of computers and error-correcting codes; going on into higher dimensions buries the foreshadowing for the "ultra-high-dimensional symmetries" later on, the Leech lattice and the Monster group — here only one sentence on it, left for EP6–8.)

### 3. Burnside: the shape of the atoms is framed

Dickson gave us a **great pile** of finite atoms. Do they have a common "look"? In 1904, **Burnside** gave an astonishing restriction:

> **Burnside's theorem (the $p^a q^b$ theorem, 1904).**
>
> A finite group whose order
>
> **is divisible by only one or two distinct primes**
>
> (that is, $|G|=p^a q^b$ in form) is always a
>
> **solvable group**
>
> .

Turn it **around** (take the contrapositive), and that is the law of shape we want: **for a non-abelian simple group (a "true atom" that cannot be broken apart and is not solvable), its order must be divisible by at least 3 distinct primes.**

— A true atom of symmetry takes at least "three flavors of prime" to be built. With two or fewer, it is necessarily solvable and necessarily can be taken apart, and cannot be an atom.

**Checking on the spot (back to EP3).** The two smallest non-abelian simple groups we wrestled with in EP3 sit exactly on this lower bound:

$$
60 = 2^2\cdot 3\cdot 5\quad(\text{three primes } 2,3,5)\ =\ A_5,
$$

$$
168 = 2^3\cdot 3\cdot 7\quad(\text{three primes } 2,3,7)\ =\ \mathrm{PSL}(2,7).
$$

Both have **exactly** three primes — not one fewer (Burnside does not allow fewer), and none extra. EP3's "periodic table of non-abelian simple groups below 2000", $\{60,168,360,504,660,1092\}$: factor each one, and the number of kinds of primes is $\ge 3$, without exception — Burnside's law of shape frames the whole table within it.

![Figure 14](/content/images/2026/06/fig_icosa_classes.png)

*Figure 14  Back to the A₅ of EP3: 60 = 2²·3·5, exactly three primes, standing on Burnside's lower bound. (The rotational symmetry group of the icosahedron is A₅.)*

> **For the complete proof see**
>
> Appendix 5
>
> **at the end.**
>
> Burnside's $p^aq^b$ theorem is proved in full from the general toolbox of character theory (orthogonality relations + algebraic integers) (integrality of central characters → Lemma A → Lemma B → the main theorem → the contrapositive gives "$\ge3$ primes", borrowing the toolbox without citing the conclusion itself from outside). Here in the main text we first use the conclusion: the shape it frames ($\ge 3$ primes, with $60$ and $168$ exactly on the line) can be seen and computed clearly.

Connect the three steps: **clock arithmetic** folds the infinite number line into the finite field $\mathbb{F}_p$ (primes are the key; invented by Galois); **Dickson** moves Lie groups onto this finite arithmetic and builds finite atoms of Lie type in batches ($A_1/\mathbb{F}_p=\mathrm{PSL}(2,p)$, including $A_5$ and $168$); **Burnside** then frames the common shape of every atom (the order contains $\ge3$ distinct primes). Continuous symmetry, going round a whole circle, comes back to the finite atoms — and comes back to the $A_5$ of EP3.

---

## Epilogue · Have they all been found?

This episode went in four steps: Sophus Lie took up Galois's question and pushed symmetry from the discrete to the continuous; continuous symmetry has a "periodic table" of its own — four infinitely extending families, plus five unreasonable exceptions in the corner; this continuous symmetry is no castle in the air: with its own hands it fixed the width of every block of the real periodic table of the elements, and also counted how many carriers each of the three forces, electromagnetic, weak and strong, has; finally, **moving it back to the finite**, we obtained a **great pile** of finite atoms of symmetry, and Burnside also framed their common shape.

Yet one question hangs there: **is this great pile of atoms that fell out of the Lie machine all of them?** Or, outside all the regular families, is there some atom still hidden — belonging to nobody's family, a lonely strange thing that is not in any periodic table?

![Figure 15](/content/images/2026/06/fig_end_hook.png)

*Figure 15  Have they all been found? — perhaps outside all the regular families there is still hidden a lonely strange thing that belongs to nobody's periodic table. (Foreshadowing → EP5)*

The line of continuous symmetry comes to a pause here. But the business of "finding all the atoms of symmetry" is only just about to become hard. In the next episode, we walk into the war that was fought for thirty years — **the classification of finite simple groups**: how humanity used a proof of tens of thousands of pages to list all the atoms of symmetry clearly, and what exactly was waiting at the end of that list.

(→ EP5: The Thirty Years' War · the classification of finite simple groups.)

---

---

## Appendix 1 · Foundations of representation theory: complete reducibility, characters, Schur orthogonality

In the main text we repeatedly used two things that "look as if they go without saying": first, that a representation can always "after choosing the right coordinates have all its matrices block-diagonalized simultaneously"; second, that one can use one number (the **character** $\chi$ — the sum of the diagonal of the matrix corresponding to a group element, $\operatorname{tr}\rho(g)$, given formally in Section 2) to recognize a representation and to judge irreducibility. This appendix proves these two things clearly from the beginning. Unless stated otherwise, $V$ is always a finite-dimensional complex vector space, and $\rho\colon G\to GL(V)$ is a **representation** — that is, it assigns to each group element $g$ an invertible matrix $\rho(g)$ ($GL(V)$ = the group made up of the invertible linear transformations on $V$), and preserves multiplication, $\rho(gh)=\rho(g)\rho(h)$ (this is a "group homomorphism").

---

### 1. Complete reducibility: breaking any representation into a direct sum of irreducibles

> **Theorem (Maschke / compact-group version).**
>
> Let $\rho\colon G\to GL(V)$ be a finite-dimensional complex representation satisfying either of the following conditions: -
>
> **(finite group)**
>
> $G$ is a finite group; or -
>
> **(compact group)**
>
> $G$ is a compact Lie group (for example the $SO(3)$ and $SU(2)$ used in this series), and $\rho$ is continuous. Then $V$ can be written as a direct sum of irreducible subrepresentations
>
> $$
> V \;=\; V_1\oplus V_2\oplus\cdots\oplus V_k,
> $$
>
> where each $V_i$ is $G$-invariant ($\rho(g)V_i\subseteq V_i,\ \forall g$) and irreducible.

(First, to make the terms in the theorem clear: $SO(3)$ = all rotations of three-dimensional space, that is, the orthogonal matrices with determinant $1$ that are $3\times3$; $SU(2)$ = the unitary matrices with determinant $1$ that are $2\times2$; a **Lie group** = a group whose elements can vary continuously and which is also a smooth manifold; **compact** means its parameter space is bounded and closed (for example the angle of rotation goes round once and comes back to where it started); a representation is **irreducible** if, apart from $0$ and itself, no subspace can be found that is invariant under all $\rho(g)$ — that is, no smaller subrepresentation can be split off.)

The proof has four steps. The core trick is **taking an average**: "symmetrizing" an arbitrary inner product into a $G$-invariant inner product.

**(a) Constructing a $G$-invariant inner product.** First, on $V$, take any Hermitian inner product $\langle\cdot,\cdot\rangle$ (take a basis and use the standard inner product). Define a new inner product:

$$
\langle v,w\rangle_G \;=\; \begin{cases} \dfrac{1}{\lvert G\rvert}\displaystyle\sum_{g\in G}\langle \rho(g)v,\ \rho(g)w\rangle, & G\ \text{finite},\\[2mm] \displaystyle\int_{G}\langle \rho(g)v,\ \rho(g)w\rangle\,\mathrm{d}g, & G\ \text{compact, }\mathrm{d}g\ \text{the normalized Haar measure}\ (\textstyle\int_G\mathrm{d}g=1). \end{cases}
$$

(The **Haar measure** here is the unique translation-invariant "uniform" measure on a compact group — generalizing the $\tfrac{1}{\lvert G\rvert}\sum_g$ of finite groups to continuous groups, normalized so that the total measure is $1$.)

It is still a Hermitian inner product: it is a (weighted) average of a family of Hermitian inner products, so **sesquilinearity (linear in one slot, conjugate-linear in the other) / conjugate symmetry** are preserved term by term; positive definiteness also holds —

$$
\langle v,v\rangle_G=\frac{1}{\lvert G\rvert}\sum_{g}\langle\rho(g)v,\rho(g)v\rangle\ge 0,
$$

and the term with $g=e$ in it is just $\langle v,v\rangle\ge 0$, which equals $0$ if and only if $v=0$; in the compact-group case the integrand is continuous and nonnegative, and at $g=e$ takes the positive value $\langle v,v\rangle>0$, while the normalized Haar measure assigns positive measure to every nonempty open set (full support), so the integral of a continuous, nonnegative function that is positive at some point must be $>0$. So $\langle\cdot,\cdot\rangle_G$ is positive definite.

The key is **$G$-invariance**: for any $h\in G$,

$$
\langle \rho(h)v,\rho(h)w\rangle_G =\frac{1}{\lvert G\rvert}\sum_{g}\langle \rho(g)\rho(h)v,\rho(g)\rho(h)w\rangle =\frac{1}{\lvert G\rvert}\sum_{g}\langle \rho(gh)v,\rho(gh)w\rangle.
$$

As $g$ runs through $G$, $gh$ also runs through $G$ (right multiplication is a bijection), so after renumbering, the sum equals $\langle v,w\rangle_G$. The compact-group case correspondingly uses the right-translation invariance of the Haar measure, $\int_G f(gh)\,\mathrm{d}g=\int_G f(g)\,\mathrm{d}g$ (a compact group is unimodular, the left and right Haar measures coincide, so right-translation invariance holds). Hence

$$
\boxed{\ \langle \rho(h)v,\rho(h)w\rangle_G=\langle v,w\rangle_G\quad(\forall h\in G).\ }
$$

**(b) Each $\rho(g)$ is unitary with respect to $\langle\cdot,\cdot\rangle_G$.** This is exactly the equation at the end of (a): $\rho(g)$ preserves the inner product $\langle\cdot,\cdot\rangle_G$, and by definition it is a unitary operator, so $\rho(g)^{*}=\rho(g)^{-1}=\rho(g^{-1})$ (the adjoint taken with respect to the new inner product).

**(c) The orthogonal complement of an invariant subspace is still invariant.** Let $W\subseteq V$ be a $G$-invariant subspace, and take its orthogonal complement $W^{\perp}$ (with respect to $\langle\cdot,\cdot\rangle_G$). Take any $u\in W^{\perp},\ g\in G$; we must show $\rho(g)u\in W^{\perp}$, that is, for all $w\in W$ we have $\langle \rho(g)u,w\rangle_G=0$. By the unitarity of (b),

$$
\langle \rho(g)u,\ w\rangle_G=\langle u,\ \rho(g)^{*}w\rangle_G=\langle u,\ \rho(g^{-1})w\rangle_G.
$$

Because $W$ is invariant and $g^{-1}\in G$, we have $\rho(g^{-1})w\in W$; and $u\perp W$, so the expression above $=0$. Hence $\rho(g)u\in W^{\perp}$, and $W^{\perp}$ is invariant. Therefore (in finite dimensions the orthogonal complement exists and complements fully)

$$
V=W\oplus W^{\perp},\qquad W,\,W^{\perp}\ \text{are both subrepresentations}.
$$

**(d) Induction on dimension.** If $V$ is irreducible, the proposition already holds ($V$ itself is its irreducible decomposition). Otherwise there is a proper nonzero invariant subspace $W$, and by (c) we get $V=W\oplus W^{\perp}$, with both pieces of dimension strictly less than $\dim V$. By induction on dimension, each is further decomposed into a direct sum of irreducibles, and putting them together gives the irreducible direct-sum decomposition of $V$. $\blacksquare$

**Why "after choosing the right coordinates the matrices are block-diagonalized simultaneously" holds.** Take the decomposition $V=V_1\oplus\cdots\oplus V_k$, in each $V_i$ take a $\langle\cdot,\cdot\rangle_G$-orthonormal basis, and put them together into an orthonormal basis of $V$. In this basis, because each $V_i$ is invariant under **all** $g$ simultaneously, the matrix $\rho(g)$ is block-diagonal for each $g$:

$$
\rho(g)=\begin{pmatrix}\rho_1(g)&&\\&\ddots&\\&&\rho_k(g)\end{pmatrix},
$$

and this block structure does not depend on $g$ (the same set of coordinates works for all group elements, because the decomposition itself does not depend on $g$). This is the rigorous basis for what the main text called "after choosing the right coordinates the matrices are simultaneously block-diagonal". This series mainly uses the compact-group version ($SO(3)$, $SU(2)$); the finite-group version (Maschke, whose key point is that the division by $\tfrac{1}{\lvert G\rvert}$ is always legitimate over the complex numbers) is the basis of the orthogonality relations of Section 3 and of **Appendix 5 (Burnside)**. (Compare Dummit–Foote, Fulton–Harris, and Hall, *Lie Groups, Lie Algebras, and Representations*.)

**Example (a real splitting: the plane rotations $SO(2)$ split into two lines over $\mathbb C$).** The 2-dimensional representation of the group of plane rotations $SO(2)$,

$$
R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}
$$

**cannot be split** over the **real** numbers — in the plane there is no line preserved by all rotations (a rotation turns every line away), so it is irreducible over $\mathbb R$. But the theorem is about **complex** representations. Put the same $R(\theta)$ on $\mathbb C^2$, and it immediately has eigenvectors:

$$
v_\pm=\begin{pmatrix}1\\\mp i\end{pmatrix},\qquad R(\theta)\,v_\pm=e^{\pm i\theta}\,v_\pm
$$

(check directly by substitution: $R(\theta)\left(\begin{smallmatrix}1\\-i\end{smallmatrix}\right)=\left(\begin{smallmatrix}\cos\theta+i\sin\theta\\\sin\theta-i\cos\theta\end{smallmatrix}\right)=e^{i\theta}\left(\begin{smallmatrix}1\\-i\end{smallmatrix}\right)$). So in the basis $\{v_+,v_-\}$

$$
R(\theta)\ \cong\ \begin{pmatrix}e^{i\theta}&0\\0&e^{-i\theta}\end{pmatrix},\qquad \mathbb C^2=\underbrace{\mathbb C v_+}_{\chi=e^{i\theta}}\ \oplus\ \underbrace{\mathbb C v_-}_{\chi=e^{-i\theta}}
$$

— **a direct sum of two one-dimensional irreducible representations**, which is exactly what the complete reducibility theorem looks like on one of the simplest nontrivial examples ($SO(2)$ is a compact Lie group, and falls under the **compact-group version** of the theorem): after complexification the rotation matrix is diagonalized, and the whole block splits into two independent one-dimensional subrepresentations. (Incidentally, $\chi(\theta)=e^{i\theta}+e^{-i\theta}=2\cos\theta=\operatorname{tr}R(\theta)$, and the trace does not depend on the basis — confirming Section 2 again.)

---

### 2. The trace and the character $\chi_\rho$

For a square matrix $A=(A_{ij})$, define the trace

$$
\operatorname{tr}(A)=\sum_i A_{ii}.
$$

**Lemma (cyclicity of the trace).** $\operatorname{tr}(AB)=\operatorname{tr}(BA)$.

Proof: expand directly,

$$
\operatorname{tr}(AB)=\sum_i (AB)_{ii}=\sum_i\sum_j A_{ij}B_{ji} =\sum_j\sum_i B_{ji}A_{ij}=\sum_j (BA)_{jj}=\operatorname{tr}(BA).\qquad\blacksquare
$$

**Corollary (basis independence / conjugation invariance).** If $A'=P^{-1}AP$, then

$$
\operatorname{tr}(A')=\operatorname{tr}\big(P^{-1}(AP)\big)=\operatorname{tr}\big((AP)P^{-1}\big)=\operatorname{tr}(A).
$$

So the trace depends only on the linear operator itself, not on the basis chosen.

From this we can define the **character** of the representation $\rho$,

$$
\chi_\rho(g)=\operatorname{tr}\rho(g),
$$

which is well defined (independent of the basis). It has several properties that can be used immediately:

- **A class function (constant on conjugacy classes).** For any $h,g$,
  $$
  \chi_\rho(hgh^{-1})=\operatorname{tr}\big(\rho(h)\rho(g)\rho(h)^{-1}\big)=\operatorname{tr}\rho(g)=\chi_\rho(g).
  $$
  So $\chi_\rho$ takes a constant value on each conjugacy class. (The **conjugacy class** of $g$ = the family of all elements of the form $hgh^{-1}$ ($h\in G$); group elements that are "the same kind of operation, just seen from a different viewpoint" are grouped into one class — for example "turning by the angle $\theta$", whatever the axis, is one class.)
- **The identity element gives the dimension.** $\chi_\rho(e)=\operatorname{tr}(I_{\dim V})=\dim V=\dim\rho$.
- **The character of a direct sum is additive.** If $\rho=\rho_1\oplus\rho_2$, then in block-diagonal form $\rho(g)=\mathrm{diag}\big(\rho_1(g),\rho_2(g)\big)$, so
  $$
  \chi_{\rho_1\oplus\rho_2}(g)=\chi_{\rho_1}(g)+\chi_{\rho_2}(g).
  $$

These three, together with the complete reducibility of Section 1, turn "recognizing a representation by one number" into something computable: the character of any representation is the sum of the characters of its irreducible components.

**A concrete one: the 3-dimensional representation of $SO(3)$.** Take the abstract properties above and look at them clearly in the 3-dimensional representation of §2.4, "$SO(3)$ acting on the three $p$ orbitals". Turning about the $z$ axis by $\theta$, in the $(x,y,z)$ basis:

$$
R_z(\theta)=\begin{pmatrix}\cos\theta & -\sin\theta & 0\\ \sin\theta & \cos\theta & 0\\ 0 & 0 & 1\end{pmatrix},\qquad \chi(\theta)=\operatorname{tr}R_z(\theta)=\cos\theta+\cos\theta+1=2\cos\theta+1.
$$

The three properties can be seen on the spot:

- **Basis independence**: change to the spherical-harmonic basis $|m\rangle\ (m=-1,0,1)$ ($|m\rangle$ is notation commonly used in physics; it is just a column vector/state vector, with $m$ a label attached to it; for these **spherical harmonic** functions $Y_\ell^m$ see Appendix 2), and the same rotation becomes the diagonal matrix $\operatorname{diag}\!\big(e^{-i\theta},\,1,\,e^{i\theta}\big)$ — the matrix looks completely different, yet the trace is still $e^{-i\theta}+1+e^{i\theta}=2\cos\theta+1$. **The trace does not change with the basis.**
- **Class function**: turning about the $x$ axis or about the $y$ axis by the same angle $\theta$ gives different matrices, yet both "turn by $\theta$" (the same conjugacy class), and their traces also both equal $2\cos\theta+1$. So $\chi$ recognizes only the angle of rotation, not the axis.
- **The identity element gives the dimension**: when $\theta=0$, $R_z(0)=I_3$, and $\chi(0)=\operatorname{tr}I_3=3=\dim$.

This is exactly what the general formula for the character of $SO(3)$'s $2\ell+1$-dimensional irreducible representation, $\chi_\ell(\theta)=\sum_{m=-\ell}^{\ell}e^{im\theta}$, looks like at $\ell=1$.

---

### 3. Schur's lemma and the first orthogonality relation

> **Schur's lemma.**
>
> Let $(\rho,V)$, $(\sigma,W)$ be irreducible representations, and $T\colon V\to W$ an
>
> **intertwining operator**
>
> (a $G$-equivariant linear map), that is, $T\rho(g)=\sigma(g)T$ holds for all $g$. Then:
>
> **(a)**
>
> either $T=0$, or $T$ is an isomorphism;
>
> **(b)**
>
> if $V=W$ and $\sigma=\rho$ (the same irreducible representation, with the algebraically closed $\mathbb{C}$ as the field of scalars), then there exists $\lambda\in\mathbb{C}$ such that $T=\lambda\,\mathrm{Id}$.

**Proof of (a).** $\ker T$ is an invariant subspace of $V$: if $v\in\ker T$, then $T\rho(g)v=\sigma(g)Tv=0$, so $\rho(g)v\in\ker T$. Since $V$ is irreducible, $\ker T=0$ or $V$. Likewise $\operatorname{im}T$ is an invariant subspace of $W$: $\sigma(g)(Tv)=T(\rho(g)v)\in\operatorname{im}T$, and since $W$ is irreducible, $\operatorname{im}T=0$ or $W$. If $T\neq0$, then $\ker T\neq V\Rightarrow\ker T=0$ (injective), and $\operatorname{im}T\neq0\Rightarrow\operatorname{im}T=W$ (surjective), so $T$ is an isomorphism.

**Proof of (b).** Over $\mathbb{C}$, $T$ must have an eigenvalue $\lambda$ (the characteristic polynomial has a root). The operator $T-\lambda\,\mathrm{Id}$ is still an intertwining operator ($\mathrm{Id}$ commutes with everything, and $T$ is intertwining), and $\ker(T-\lambda\,\mathrm{Id})\neq0$ (it contains an eigenvector). By (a), $T-\lambda\,\mathrm{Id}$ is either an isomorphism or $0$; it is not injective, so it must be $0$, that is, $T=\lambda\,\mathrm{Id}$. $\blacksquare$

**Example (Schur's lemma, on the $SU(2)$ spinor).** Take the 2-dimensional spinor representation (a **spinor** = the kind of representation state particular to $SU(2)$ that $SO(3)$ cannot hold, which changes sign under a full turn $2\pi$, $|\psi\rangle\to-|\psi\rangle$; see Appendix 2 §4 for details), and check the two parts by hand.

**(b) What commutes with the whole group can only be multiplication by a number.** Let $T=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ commute with every rotation. First require it to commute with the rotation about the $z$ axis, $R_z=\operatorname{diag}\!\big(e^{-i\theta/2},e^{i\theta/2}\big)$ (for all $\theta$): comparing the two sides of $TR_z=R_zT$ forces $b=c=0$, so $T$ can only be diagonal. Then require it to commute with the rotation about the $x$ axis, $R_x=\begin{pmatrix}\cos\frac{\theta}{2}&-i\sin\frac{\theta}{2}\\-i\sin\frac{\theta}{2}&\cos\frac{\theta}{2}\end{pmatrix}$, which forces $a=d$. So $T=a\,\mathrm{Id}=\lambda\,\mathrm{Id}$ — **what commutes with the whole of $SU(2)$ is only multiplication by a number**. This also amounts to proving once more that the spinor is irreducible (irreducible $\iff$ the intertwining algebra contains only multiplication by numbers).

**(a) Between different irreducibles there is only zero.** Between the spinor (2-dimensional) and the trivial representation (1-dimensional, each $g\mapsto 1$), an intertwining operator is a row vector $T=(p,q)$, which must satisfy $T R_z=1\cdot T$ for all $\theta$: substituting $R_z$ gives $\big(p\,e^{-i\theta/2},\ q\,e^{i\theta/2}\big)=(p,q)$, which forces $p=q=0$. **Between two non-isomorphic irreducibles, the only intertwining operator is $0$** — exactly (a).

**Constructing intertwining operators by averaging.** Let $(\rho_i,V_i)$, $(\rho_j,V_j)$ be irreducible representations, of dimensions $n_i,n_j$. For **any** linear map $\varphi\colon V_j\to V_i$, define

$$
T=\frac{1}{\lvert G\rvert}\sum_{g\in G}\rho_i(g)\,\varphi\,\rho_j(g)^{-1}.
$$

It is an intertwining operator: for any $h$,

$$
\rho_i(h)\,T\,\rho_j(h)^{-1} =\frac{1}{\lvert G\rvert}\sum_g \rho_i(hg)\,\varphi\,\rho_j(hg)^{-1}=T,
$$

that is, $\rho_i(h)T=T\rho_j(h)$. So by Schur:

- if $i\neq j$ (non-isomorphic irreducibles), then $T=0$;
- if $i=j$, then $T=\lambda\,\mathrm{Id}$, and taking the trace fixes $\lambda$:

$$
\operatorname{tr}T=\frac{1}{\lvert G\rvert}\sum_g\operatorname{tr}\big(\rho_i(g)\varphi\rho_i(g)^{-1}\big)=\frac{1}{\lvert G\rvert}\sum_g\operatorname{tr}\varphi=\operatorname{tr}\varphi, \qquad\lambda=\frac{\operatorname{tr}\varphi}{n_i}.
$$

**Orthogonality of matrix coefficients (the Schur orthogonality relations).** Take $\varphi=E_{bd}$ (the matrix unit that in position $(b,d)$ is $1$ and elsewhere $0$), and write out, of $T$, the $(a,c)$ entry:

$$
(T)_{ac}=\frac{1}{\lvert G\rvert}\sum_g \rho_i(g)_{ab}\,\big(\rho_j(g)^{-1}\big)_{dc}.
$$

Substituting the conclusions of the two cases above (when $i=j$, $T=\tfrac{\operatorname{tr}E_{bd}}{n_i}\mathrm{Id}=\tfrac{\delta_{bd}}{n_i}\mathrm{Id}$) gives

$$
\frac{1}{\lvert G\rvert}\sum_g \rho_i(g)_{ab}\,\big(\rho_j(g)^{-1}\big)_{dc} =\frac{1}{n_i}\,\delta_{ij}\,\delta_{ac}\,\delta_{bd}.
$$

By Section 1, each irreducible representation can be taken to be **unitary** (using a $\langle\cdot,\cdot\rangle_G$-orthonormal basis), so the second factor being substituted is $\big(\rho_j(g)^{-1}\big)_{dc}=\big(\rho_j(g)^{*}\big)_{dc}=\overline{\rho_j(g)_{cd}}$, giving the symmetric form

$$
\boxed{\ \frac{1}{\lvert G\rvert}\sum_{g}\rho_i(g)_{ab}\,\overline{\rho_j(g)_{cd}} =\frac{1}{n_i}\,\delta_{ij}\,\delta_{ac}\,\delta_{bd}.\ }
$$

**The first orthogonality relation (irreducible characters are orthogonal).** On the space of class functions define the inner product

$$
\langle\alpha,\beta\rangle=\frac{1}{\lvert G\rvert}\sum_{g\in G}\alpha(g)\,\overline{\beta(g)}.
$$

Using $\chi_i(g)=\sum_a\rho_i(g)_{aa}$, $\chi_j(g)=\sum_c\rho_j(g)_{cc}$ and the box above:

$$
\langle\chi_i,\chi_j\rangle =\frac{1}{\lvert G\rvert}\sum_g\Big(\sum_a\rho_i(g)_{aa}\Big)\overline{\Big(\sum_c\rho_j(g)_{cc}\Big)} =\sum_a\sum_c\underbrace{\frac{1}{\lvert G\rvert}\sum_g\rho_i(g)_{aa}\,\overline{\rho_j(g)_{cc}}}_{=\ \frac{1}{n_i}\delta_{ij}\delta_{ac}\delta_{ac}} =\frac{\delta_{ij}}{n_i}\sum_a\sum_c\delta_{ac}.
$$

And $\sum_a\sum_c\delta_{ac}=\sum_a 1=n_i$, so

$$
\boxed{\ \langle\chi_i,\chi_j\rangle=\frac{1}{\lvert G\rvert}\sum_{g}\chi_i(g)\,\overline{\chi_j(g)}=\delta_{ij}.\ }
$$

That is: **the characters of different irreducible representations are orthogonal to one another, and each has unit length**. So the irreducible characters form a set of orthonormal vectors in the space of class functions, and this turns "judging whether two irreducible representations are isomorphic" and "decomposing a general representation into irreducible components and counting the multiplicities" entirely into inner-product calculations (multiplicity $m_i=\langle\chi_\rho,\chi_i\rangle$).

**Example (checking the orthogonality relation on the spot on $S_3$).** Take the smallest non-abelian group $S_3$ ($|S_3|=6$, the permutations of three symbols). It has 3 conjugacy classes — $\{e\}$, the three transpositions $\{(12),(13),(23)\}$, the two three-cycles $\{(123),(132)\}$, of sizes $1,3,2$ respectively; and exactly 3 irreducible representations: the trivial $\chi_1$, the sign $\chi_{\mathrm{sgn}}$, and the 2-dimensional standard representation $\chi_{\mathrm{std}}$ (the same name as in Appendix 5). The character table (rows = irreducibles, columns = conjugacy classes):

| Character | $\{e\}$ (1 element) | transpositions (3) | three-cycles (2) |
| --- | --- | --- | --- |
| $\chi_1$ (trivial) | $1$ | $1$ | $1$ |
| $\chi_{\mathrm{sgn}}$ (sign) | $1$ | $-1$ | $1$ |
| $\chi_{\mathrm{std}}$ (standard 2-dimensional) | $2$ | $0$ | $-1$ |

Compute on the spot with $\langle\chi_i,\chi_j\rangle=\dfrac1{|G|}\sum_{\text{class}}|\text{class}|\,\chi_i\,\overline{\chi_j}$ (the characters are all real, so the conjugation can be omitted):

- **Each has unit length** ($\langle\chi,\chi\rangle=1$ is the criterion for irreducibility):
  $$
  \langle\chi_{\mathrm{std}},\chi_{\mathrm{std}}\rangle=\tfrac16\big(1\cdot2^2+3\cdot0^2+2\cdot(-1)^2\big)=\tfrac16(4+0+2)=1,\quad \langle\chi_1,\chi_1\rangle=\langle\chi_{\mathrm{sgn}},\chi_{\mathrm{sgn}}\rangle=\tfrac16(1+3+2)=1.
  $$
- **Pairwise orthogonal**:
  $$
  \langle\chi_1,\chi_{\mathrm{sgn}}\rangle=\tfrac16(1-3+2)=0,\quad \langle\chi_1,\chi_{\mathrm{std}}\rangle=\tfrac16(2+0-2)=0,\quad \langle\chi_{\mathrm{sgn}},\chi_{\mathrm{std}}\rangle=\tfrac16(2+0-2)=0.
  $$

The three characters really do form an orthonormal set, $\langle\chi_i,\chi_j\rangle=\delta_{ij}$ — this is the first orthogonality relation, something you can see and touch. **Demonstrating its use along the way**: expand the regular representation (the **regular representation** = the $|G|$-dimensional representation obtained by letting the group act on itself by left multiplication, with the group elements as basis; its character at the identity $e$ is $=|G|$, and elsewhere $=0$, so here $\chi_{\mathrm{reg}}=(6,0,0)$) in terms of them, and the multiplicities $m_i=\langle\chi_{\mathrm{reg}},\chi_i\rangle$ give $m_1=1,\ m_{\mathrm{sgn}}=1,\ m_{\mathrm{std}}=2$, exactly $6=1^2+1^2+2^2$ (each irreducible appears $\dim$ times) — "counting multiplicities = computing inner products", made good on the spot.

**The compact-group version and the dependence on the appendices.** For compact groups ($SO(3)$, $SU(2)$) one need only replace $\dfrac{1}{\lvert G\rvert}\sum_g$ by the normalized Haar integral $\displaystyle\int_G\cdots\,\mathrm{d}g$: Schur's lemma holds likewise for their finite-dimensional continuous irreducible representations, and the orthogonality relation becomes

$$
\int_G \chi_i(g)\,\overline{\chi_j(g)}\,\mathrm{d}g=\delta_{ij}
$$

(the Peter–Weyl theorem gives completeness). This compact-group orthogonality relation is the tool for **decomposing any representation of $SO(3)$ and counting the multiplicities** (Appendix 2 §5 confirms that each $\mathcal{H}_\ell$ is irreducible); whereas the **existence and exhaustiveness** of the $2\ell+1$-dimensional irreducible blocks themselves are given by the raising-and-lowering ladder of $\mathfrak{su}(2)$ in **Appendix 2** + the double cover $SU(2)\!\to\!SO(3)$ (the **double cover** = in $SU(2)$, every two elements $\pm g$ map to exactly the same rotation of $SO(3)$, $2$ to $1$; see Appendix 2 §4 for details), and do not rely on orthogonality. As for **Appendix 5 (Burnside's $p^a q^b$ theorem)**, it uses the finite-group version — its proof is built exactly on the first orthogonality relation above (and the column orthogonality relation and algebraic-integer arguments developed from it). (Compare Fulton–Harris, Hall.)

---

## Appendix 2 · The irreducible representations of $SO(3)$: spherical harmonics and $2\ell+1$ (odd dimensions)

**First, let us be clear about why we fix our eyes on this batch of functions.** The main text, §3.2, explained that how many orbitals a subshell can hold is determined by the "representation blocks" of the $SO(3)$ rotational symmetry acting on electron states, and that the "shape" of each orbital — the $s,p,d,f$ of chemistry class — is exactly a set of functions called **spherical harmonics** $Y_\ell^m$. So this batch of functions is not some special functions popping up out of nowhere: they are **the actual wave functions of the shapes an electron can occupy in an atom**, the **concrete carriers** of the $SO(3)$ rotational symmetry acting on electron states.

With this purpose in mind, the route of this appendix is: **first set out this batch of functions explicitly** (the $Y_\ell^m$ table + the shapes $s,p,d,f$), **then derive from the raising-and-lowering ladder of the angular momentum algebra** why they come in groups exactly, why the size of each group can only be the odd number $2\ell+1$, and why only the half of the groups with integer $j$ falls to $SO(3)$. Conventions: in spherical coordinates $\theta\in[0,\pi]$ is the polar angle and $\varphi\in[0,2\pi)$ the azimuthal angle; the normalization is $L^2$-orthonormal on the unit sphere, and the phase uses physics' standard Condon–Shortley $(-1)^m$ convention, so that $\int_{S^2} Y_\ell^m\,\overline{Y_{\ell'}^{m'}}\,\mathrm{d}\Omega=\delta_{\ell\ell'}\delta_{mm'}$ ($\mathrm{d}\Omega=\sin\theta\,\mathrm{d}\theta\,\mathrm{d}\varphi$). Take $\hbar=1$ (we only count dimensions).

---

### 1. The spherical harmonics $Y_\ell^m$: an explicit table

| $\ell$ | $m$ | $Y_\ell^m(\theta,\varphi)$ |
| --- | --- | --- |
| $0$ (s) | $0$ | $\displaystyle \tfrac12\sqrt{\tfrac{1}{\pi}}$ |
| $1$ (p) | $0$ | $\displaystyle \tfrac12\sqrt{\tfrac{3}{\pi}}\,\cos\theta$ |
|  | $\pm1$ | $\displaystyle \mp\,\tfrac12\sqrt{\tfrac{3}{2\pi}}\,\sin\theta\,e^{\pm i\varphi}$ |
| $2$ (d) | $0$ | $\displaystyle \tfrac14\sqrt{\tfrac{5}{\pi}}\,(3\cos^2\theta-1)$ |
|  | $\pm1$ | $\displaystyle \mp\,\tfrac12\sqrt{\tfrac{15}{2\pi}}\,\sin\theta\cos\theta\,e^{\pm i\varphi}$ |
|  | $\pm2$ | $\displaystyle \tfrac14\sqrt{\tfrac{15}{2\pi}}\,\sin^2\theta\,e^{\pm 2i\varphi}$ |
| $3$ (f) | $0$ | $\displaystyle \tfrac14\sqrt{\tfrac{7}{\pi}}\,(5\cos^3\theta-3\cos\theta)$ |
|  | $\pm1$ | $\displaystyle \mp\,\tfrac18\sqrt{\tfrac{21}{\pi}}\,\sin\theta\,(5\cos^2\theta-1)\,e^{\pm i\varphi}$ |
|  | $\pm2$ | $\displaystyle \tfrac14\sqrt{\tfrac{105}{2\pi}}\,\sin^2\theta\cos\theta\,e^{\pm 2i\varphi}$ |
|  | $\pm3$ | $\displaystyle \mp\,\tfrac18\sqrt{\tfrac{35}{\pi}}\,\sin^3\theta\,e^{\pm 3i\varphi}$ |

(In the rows of the table, taking the minus sign for $m=+1,+3$ and the plus sign for $m=-1,-3$ — the "$\mp/\pm$" — is the expression of the Condon–Shortley phase $(-1)^m$ in the general formula below.) The range of values of $m$ in each row is exactly $m=-\ell,\dots,\ell$, $2\ell+1$ in all: $\ell=0,1,2,3$ give $1,3,5,7$ functions respectively.

**The general closed form and the Legendre functions.** The table above was not pieced together term by term — it is generated by one general formula, with the Legendre functions substituted in.

**The general closed form of the spherical harmonics** ($m\ge 0$):

$$
Y_\ell^m(\theta,\varphi)=(-1)^m\sqrt{\frac{2\ell+1}{4\pi}\,\frac{(\ell-m)!}{(\ell+m)!}}\;P_\ell^m(\cos\theta)\;e^{im\varphi}.
$$

Negative $m$ is given by conjugation (this guarantees that positive and negative $m$ pair up properly when real combinations are taken):

$$
Y_\ell^{-m}=(-1)^m\,\overline{Y_\ell^{m}}\qquad(m>0).
$$

**The Legendre polynomials $P_\ell(x)$** (Rodrigues' formula — differentiate $(x^2-1)^\ell$ to order $\ell$ and then normalize):

$$
P_\ell(x)=\frac{1}{2^\ell\,\ell!}\,\frac{d^\ell}{dx^\ell}\big(x^2-1\big)^{\ell}, \qquad P_0=1,\ \ P_1=x,\ \ P_2=\tfrac12(3x^2-1),\ \ P_3=\tfrac12(5x^3-3x).
$$

**The associated Legendre functions $P_\ell^m(x)$** ($0\le m\le\ell$): differentiate $P_\ell$ to order $m$, then attach a factor $(1-x^2)^{m/2}$:

$$
P_\ell^m(x)=\big(1-x^2\big)^{m/2}\,\frac{d^m}{dx^m}\,P_\ell(x),\qquad P_\ell^0=P_\ell .
$$

> **Convention (do not count the phase twice).**
>
> The $P_\ell^m$ here
>
> **does not carry**
>
> the Condon–Shortley $(-1)^m$ phase — the phase has already been put into the $Y_\ell^m$ above. Putting $(-1)^m$ once on each side, in $P$ and in $Y$, would
>
> **double-count** it; this series consistently puts it on the $Y$ side (consistent with the table above).

**The table is generated by substitution.** Take $x=\cos\theta$ (so that $\sqrt{1-x^2}=\sin\theta$, since $\theta\in[0,\pi]$):

- $\ell=1,\ m=0$: $P_1(\cos\theta)=\cos\theta\ \Rightarrow\ Y_1^0=\sqrt{\tfrac{3}{4\pi}}\,\cos\theta=\tfrac12\sqrt{\tfrac{3}{\pi}}\,\cos\theta.$
- $\ell=2,\ m=0$: $P_2(\cos\theta)=\tfrac12(3\cos^2\theta-1)\ \Rightarrow\ Y_2^0=\sqrt{\tfrac{5}{4\pi}}\cdot\tfrac12(3\cos^2\theta-1)=\tfrac14\sqrt{\tfrac{5}{\pi}}\,(3\cos^2\theta-1).$
- $\ell=2,\ m=1$: $P_2^1(\cos\theta)=(1-\cos^2\theta)^{1/2}\cdot 3\cos\theta=3\sin\theta\cos\theta$, so
  $$
  Y_2^1=(-1)^1\sqrt{\tfrac{5}{4\pi}\tfrac{1!}{3!}}\cdot 3\sin\theta\cos\theta\,e^{i\varphi} =-\tfrac12\sqrt{\tfrac{15}{2\pi}}\,\sin\theta\cos\theta\,e^{i\varphi},
  $$
  where $\sqrt{\tfrac{5}{4\pi}\cdot\tfrac16}\cdot 3=\sqrt{\tfrac{45}{24\pi}}=\sqrt{\tfrac{15}{8\pi}}=\tfrac12\sqrt{\tfrac{15}{2\pi}}$.

Every entry for $\ell=0\sim3$ in the table above is generated in this way from $P_\ell^m$ by substituting $x=\cos\theta$, and agrees term by term with the values in the table. (Compare the appendix of Sakurai, *Modern Quantum Mechanics*, and Hall.)

---

### 2. Real combinations and orbital shapes: $s, p, d, f$

The complex spherical harmonics $Y_\ell^m$ are eigenfunctions of $J_z$ (carrying $e^{im\varphi}$). To see the shapes of the "real orbitals" familiar from chemistry, take real linear combinations (cosine type for $m>0$, sine type for $m<0$):

$$
Y_{\ell,m}^{\cos}=\frac{1}{\sqrt2}\big(Y_\ell^{-m}+(-1)^m Y_\ell^{m}\big),\qquad Y_{\ell,m}^{\sin}=\frac{i}{\sqrt2}\big(Y_\ell^{-m}-(-1)^m Y_\ell^{m}\big),\qquad Y_{\ell,0}=Y_\ell^0 .
$$

(From $\overline{Y_\ell^{m}}=(-1)^m Y_\ell^{-m}$ one checks directly that both combinations are **real** functions.)

- **$\ell=0$ (s orbital, $2\ell+1=1$).** There is only $Y_0^0=$ a constant, independent of $\theta,\varphi$ $\Rightarrow$ **a sphere**.
- **$\ell=1$ (p orbitals, $2\ell+1=3$).** The three functions, turned into real form, are proportional to $x/r,\ y/r,\ z/r$:
  $$
  p_z\propto Y_1^0\propto\cos\theta\propto \tfrac{z}{r},\quad p_x\propto\tfrac{1}{\sqrt2}(Y_1^{-1}-Y_1^{1})\propto\sin\theta\cos\varphi\propto\tfrac{x}{r},\quad p_y\propto\tfrac{i}{\sqrt2}(Y_1^{-1}+Y_1^{1})\propto\sin\theta\sin\varphi\propto\tfrac{y}{r}.
  $$
  That is, **three dumbbells** along the three axes $x,y,z$.
- **$\ell=2$ (d orbitals, $2\ell+1=5$).** The five real combinations are proportional respectively to
  $$
  d_{z^2}\propto 3z^2-r^2,\quad d_{xz}\propto xz,\quad d_{yz}\propto yz,\quad d_{x^2-y^2}\propto x^2-y^2,\quad d_{xy}\propto xy,
  $$
  that is, **four four-lobed petal shapes** ($d_{xy},d_{xz},d_{yz},d_{x^2-y^2}$) **plus one $d_{z^2}$** (two lobes along $z$ with a ring around them in the $xy$ plane). $5$ in all.
- **$\ell=3$ (f orbitals, $2\ell+1=7$).** In the same way, these give $7$ more complicated lobed orbitals.

So the s/p/d/f subshells in the periodic table of the chemical elements hold $1,3,5,7$ orbitals respectively, exactly the dimensions of $SO(3)$'s irreducible representations, $2\ell+1$ ($\ell=0,1,2,3$) — spatial rotational symmetry directly determines the degeneracy of the subshells. (Compare Sakurai, Hall.)

---

### 3. The raising-and-lowering ladder of the angular momentum algebra: the dimension of each irreducible block $=2j+1$

Staring directly at the continuous group $SO(3)$ gives us nothing to grab hold of (it has infinitely many elements). But the representations of a continuous group are completely controlled by its **infinitesimal generators** and their **commutation relations** — that is, by its **Lie algebra**. ("Commutation relations" are about **how much two operations differ when their order is exchanged**: write $[A,B]:=AB-BA$; it measures the difference between "first $A$, then $B$" and "first $B$, then $A$"; being equal to $0$ means it makes no difference which comes first. Rotations precisely **do not commute** — turning first about $x$ and then about $y$, and the other way round, do not give the same result — and this difference is exactly the content of the relation below.) The generators of $SO(3)$ are the three **angular momentum operators** $J_x,J_y,J_z$ (infinitesimal rotations about the three axes), and their commutation relations are

$$
[J_i,\,J_j]=i\,\epsilon_{ijk}J_k \qquad(\text{i.e. }[J_x,J_y]=iJ_z\text{ and the other two cyclic ones}).\tag{1}
$$

($\epsilon_{ijk}$ = the totally antisymmetric symbol: $(123)$ and its cyclic permutations take $+1$, changing sign when any two indices are exchanged, and $0$ when an index repeats — it packs the three commutation relations into one line.) This algebra is written $\mathfrak{so}(3)$; it is **isomorphic** to $\mathfrak{su}(2)$ (the same set of commutation relations) — **this point is crucial later in Section 4**: precisely because the two algebras are the same, $SU(2)$ and $SO(3)$ share the same batch of representations, and Section 4 can use $SU(2)$ to pick: $SU(2)$ takes in the representations of **all** $j$, while $SO(3)$ **wants only the integer-$j$ half** (odd dimensions). An "operation block" (irreducible representation) is a set of states that carries the action of $J_x,J_y,J_z$ simultaneously and **from which no smaller invariant subspace can be split off**. We ask: how big can such a block be?

**Raising and lowering operators.** Instead of $J_x,J_y$, use

$$
J_\pm := J_x\pm iJ_y,\qquad [J_z,J_\pm]=\pm J_\pm,\qquad [J_+,J_-]=2J_z. \tag{2}
$$

((2) is computed directly from (1); compare Sakurai eq. 3.157–3.158.) The first, $[J_z,J_\pm]=\pm J_\pm$, is the key: "$J_\pm$ raises/lowers the eigenvalue of $J_z$ by $1$" — if $J_z|m\rangle=m|m\rangle$, then

$$
J_z\,(J_\pm|m\rangle)=(J_\pm J_z\pm J_\pm)|m\rangle=(m\pm1)\,(J_\pm|m\rangle).\tag{3}
$$

So $J_\pm|m\rangle$ is either $0$, or a new state with eigenvalue $m\pm1$. $J_\pm$ are operators that climb up and down this "ladder" of eigenvalues of $J_z$.

**They can of course be written as matrices.** On a $2j+1$-dimensional block, $J_z,J_\pm$ are concrete $(2j+1)\times(2j+1)$ matrices. The smallest, $j=\tfrac12$ ($2$-dimensional), is the cleanest — write the up state $|{+}\tfrac12\rangle=\binom{1}{0}$ and the down state $|{-}\tfrac12\rangle=\binom{0}{1}$:

$$
J_z=\tfrac12\begin{pmatrix}1&0\\ 0&-1\end{pmatrix},\qquad J_+=\begin{pmatrix}0&1\\ 0&0\end{pmatrix},\qquad J_-=\begin{pmatrix}0&0\\ 1&0\end{pmatrix}.
$$

The abstract relations above can be checked at a glance: $J_+$ raises the down state to the up state, and raising again gives zero ($J_+^2=0$, exactly the "top of the ladder", $J_+|{+}\tfrac12\rangle=0$); $J_-$ does the reverse; and $[J_+,J_-]=\begin{pmatrix}1&0\\0&-1\end{pmatrix}=2J_z$, matching (2). Along the way, let us also write out the **Pauli matrices** in full (they are exactly the three generators of this $j=\tfrac12$ block, $J_i=\tfrac12\sigma_i$):

$$
\sigma_1=\begin{pmatrix}0&1\\ 1&0\end{pmatrix},\qquad \sigma_2=\begin{pmatrix}0&-i\\ i&0\end{pmatrix},\qquad \sigma_3=\begin{pmatrix}1&0\\ 0&-1\end{pmatrix};
$$

so $J_z=\tfrac12\sigma_3$ and $J_\pm=J_x\pm iJ_y=\tfrac12(\sigma_1\pm i\sigma_2)$ give exactly the two raising and lowering matrices above — the same batch of things as the gauge forces of §3.5 and the $\sigma$ that appeared in the short lesson earlier. (Higher $j$ work the same way, only the matrices are bigger; in an orthonormal basis each entry is given by the standard formula $\sqrt{j(j+1)-m(m\pm1)}$ — note that this differs from the coefficient in (7) for the **unnormalized** $u_k$ basis, $k(2j{-}k{+}1)$; the two coincide only at $j=\tfrac12$.)

**Algebraic classification: the dimension of each finite-dimensional irreducible block is exactly $2j+1$.**

Let $V$ be a **finite-dimensional** irreducible representation. $J_z$ has at least one eigenvector over $\mathbb{C}$; let its eigenvalue be some number. Climb upward repeatedly with $J_+$ ((3)), and we get a string of eigenvalues $m,m+1,m+2,\dots$, **pairwise distinct**. But $V$ is finite-dimensional and $J_z$ can have only finitely many eigenvalues — this string cannot go on rising forever, and must hit $0$:

$$
\exists\ |\,j\rangle\neq0:\quad J_+|\,j\rangle=0,\qquad J_z|\,j\rangle=j\,|\,j\rangle.\tag{4}
$$

Call this top, annihilated by $J_+$, the **highest-weight state**, and write the top eigenvalue as $j$ (compare the $b_{\max}$ of Sakurai eq. 3.169). Now generate downward from the top with $J_-$:

$$
u_k:=J_-^{\,k}|\,j\rangle\quad(k=0,1,2,\dots),\qquad J_z u_k=(j-k)\,u_k.\tag{5}
$$

The eigenvalues $j,j-1,j-2,\dots$ are again pairwise distinct, and again, because of finite dimension, **must terminate**: there exists $n\ge0$ such that

$$
u_n\neq0,\qquad u_{n+1}=J_-^{\,n+1}|\,j\rangle=0.\tag{6}
$$

**The key computation**: to $u_k$ apply $J_+$ repeatedly; from $J_+J_-=J_-J_++[J_+,J_-]=J_-J_++2J_z$ plus (4), induction gives

$$
J_+\,u_k=k\,(2j-k+1)\,u_{k-1}.\tag{7}
$$

**Example (raising and lowering coefficients, computed on the spot for $j=1$).** Take $j=1$ (three states $u_0,u_1,u_2$, with $J_z$ eigenvalues $1,0,-1$). Formula (7), $J_+u_k=k(2j-k+1)u_{k-1}$, gives:

$$
J_+u_1=1\cdot(2{\cdot}1-1+1)\,u_0=2\,u_0,\qquad J_+u_2=2\cdot(2{\cdot}1-2+1)\,u_1=2\,u_1.
$$

The coefficients are both $2$ (not $1$) — this shows that (7) gives **unnormalized** recursion coefficients; to change to the form of the physics books, $J_+|j,m\rangle=\sqrt{j(j+1)-m(m+1)}\,|j,m{+}1\rangle$ ($j{=}1,m{=}0{\to}1$ gives $\sqrt2$, different from $2$), just divide each $u_k$ by its own norm.

(Induction: $J_+u_k=J_+J_-u_{k-1}=J_-J_+u_{k-1}+2J_zu_{k-1}=[(k{-}1)(2j{-}k{+}2)+2(j{-}k{+}1)]u_{k-1}=k(2j{-}k{+}1)u_{k-1}$.) Now apply $J_+$ to the zero vector $u_{n+1}$ of (6):

$$
0=J_+u_{n+1}=(n+1)(2j-n)\,u_n.\tag{8}
$$

$u_n\neq0$ and $n+1\neq0$, so **necessarily** $2j-n=0$, that is,

$$
\boxed{\,j=\tfrac{n}{2},\quad n=0,1,2,\dots\ \Longrightarrow\ j\in\{0,\tfrac12,1,\tfrac32,2,\dots\}\,}\tag{9}
$$

This string of states $u_0,\dots,u_n$ has eigenvalues going all the way from $j$ to $j-n=-j$, $n+1=2j+1$ in all, mutually distinct and therefore **linearly independent**; the subspace they span is closed under $J_z,J_\pm$ (and hence the whole algebra). $V$ is irreducible $\Rightarrow$ this subspace is $V$. Hence

$$
\dim V=2j+1,\qquad J_z\text{ eigenvalues}=j,j-1,\dots,-j\ (\text{i.e. }m=-j,\dots,j).\tag{10}
$$

Incidentally: on the whole block $J^2:=J_x^2+J_y^2+J_z^2=j(j+1)\,\mathbb{1}$ (this $J^2$ is the invariant that commutes with all the $J_i$, called the **Casimir**; it takes a **single** eigenvalue on the whole block, which is exactly the mark of "a block that can no longer be taken apart"; **symbolic check** = we separately verified case by case with symbolic computation; this belongs to the internal verification process and is not a mathematical term — it has been verified here for each $j$ in turn).

**Completeness ("and this is all of them").** Conversely, for each $j\in\{0,\tfrac12,1,\dots\}$, the coefficients of (5)(7) **can exactly construct** a $2j+1$-dimensional representation, and **any two irreducible representations of the same dimension are isomorphic**, and **any finite-dimensional irreducible representation is isomorphic to one of them** — this is the content proved rigorously by **Hall Thm 4.32** (Sakurai only constructs, and does not prove completeness).

**Summary (Section 3)**: the finite-dimensional irreducible blocks of the algebra $\mathfrak{su}(2)\cong\mathfrak{so}(3)$ **have dimensions running exactly through $2j+1$, $j=0,\tfrac12,1,\tfrac32,\dots$** — that is, dimensions $1,2,3,4,5,\dots$ **all occur**. Note: **both odd and even dimensions appear**. The algebra alone cannot yet select "only odd dimensions".

---

### 4. The double cover: only integer $j$ (odd dimensions $2\ell+1$) descends to $SO(3)$

$\mathfrak{so}(3)\cong\mathfrak{su}(2)$ is **the same algebra**, yet they correspond to **two different groups**: $SU(2)$ and $SO(3)$. The relation between the two is a **2-to-1 double cover**

$$
SU(2)\ \xrightarrow{\ 2:1\ }\ SO(3),\qquad \ker=\{+\mathbb{1},-\mathbb{1}\},\qquad SO(3)=SU(2)/\{\pm\mathbb{1}\}.\tag{11}
$$

($\pm\mathbb{1}$, these two $SU(2)$ elements, map to **the same** rotation — the identity rotation.) A representation of the algebra can always be integrated into a representation of $SU(2)$ — **because $SU(2)$ is simply connected** (**simply connected** = any closed loop in the space can be shrunk continuously to a point, "there are no holes"; it is exactly what guarantees that every representation of the Lie algebra can be uniquely "integrated" back into a group representation): by the Lie group–Lie algebra correspondence (a privilege of simply connected groups, see Hall §5.7), every representation of $\mathfrak{su}(2)$ is uniquely "integrated" into a group representation of $SU(2)$ ($SO(3)$ is not simply connected and has no such guarantee, which is exactly the reason for the detour through $SU(2)$). This $SU(2)$ representation can in turn descend to a representation of $SO(3)$ **if and only if it is trivial on the covering kernel $\{\pm\mathbb1\}$**, that is,

$$
\pi_j(-\mathbb1)=\mathbb1.\tag{12}
$$

**Computing $\pi_j(-\mathbb1)$.** $-\mathbb1\in SU(2)$ is exactly the element "turn by $2\pi$" (one full turn about any axis: in $SO(3)$ it is the identity, in $SU(2)$ it is $-\mathbb1$). A turn about the $z$ axis by $2\pi$, on the spin-$j$ block, is $e^{-2\pi i J_z}$, and acting on $|m\rangle$ it gives $e^{-2\pi i m}$. By (10), $m$ takes $j,j-1,\dots,-j$, and **every $m$ differs from $j$ by an integer**, so $e^{-2\pi i m}=e^{-2\pi i j}=(-1)^{2j}$ is the same for all $m$:

$$
\boxed{\,\pi_j(-\mathbb1)=e^{-2\pi i J_z}=(-1)^{2j}\,\mathbb1\,}\tag{13}
$$

(The symbolic check has verified this one by one for $j=0,\tfrac12,1,\tfrac32,2$.) Substituting into (12):

$$
\pi_j\ \text{descends to}\ SO(3)\iff(-1)^{2j}=1\iff 2j\ \text{even}\iff j\ \text{an integer}\iff \dim=2j+1\ \textbf{odd}.\tag{14}
$$

So there are two classes, clean and neat: - **$j$ an integer** ($j=\ell=0,1,2,\dots$, dimension $2\ell+1=1,3,5,7,\dots$ **odd**): descends to $SO(3)$, and is a **genuine rotation representation** — these are the "operation blocks" under spherical symmetry of §3, corresponding to the spherical harmonics $Y_\ell^m$ and the orbitals $s,p,d,f$. - **$j$ a half-integer** (dimension $2,4,6,\dots$ **even**): $\pi_j(-\mathbb1)=-\mathbb1\neq\mathbb1$, it **does not descend to $SO(3)$**, and is a **spinor representation** exclusive to $SU(2)$ (a turn by $2\pi$ changes the state into its negative, $-|\psi\rangle$ — this is the famous spin-½ sign, experimentally measurable). The smallest, $j=\tfrac12$ (dimension $2$), is exactly the **electron spin**.

**Example (the odd/even selection, read off the exponent).** Take $\pi_j(-\mathbb1)=e^{-2\pi i J_z}$, with its value on $|m\rangle$ being $e^{-2\pi i m}$, and substitute for each $m$: - $j=\tfrac12$: $m=\pm\tfrac12$, $e^{-2\pi i(\pm1/2)}=e^{\mp i\pi}=-1$ $\Rightarrow$ $\pi_{1/2}(-\mathbb1)=-\mathbb1\ne\mathbb1$, it **does not descend to $SO(3)$** (the spin-½ spinor, exclusive to $SU(2)$); - $j=1$: $m=-1,0,1$, $e^{-2\pi i m}=1$ ($m$ an integer) $\Rightarrow$ $\pi_1(-\mathbb1)=\mathbb1$, it **descends to $SO(3)$** (the 3-dimensional $p$ block).

Half-integer $j$ gives $-1$, integer $j$ gives $+1$ — the odd/even classification is read directly off the exponent $e^{-2\pi im}$. (Symbolic check done.)

**This completes the proof** of the statement that §3 used without proving: the irreducible operation blocks of $SO(3)$ **are exactly all the odd dimensions $2\ell+1$ ($\ell=0,1,2,\dots$), and nothing else** — Section 3 gives "the dimension of a block can only be $2j+1$, and this is all of them", and Section 4 picks out among them integer $j$ = odd dimensions. $\blacksquare$

---

### 5. Another route: counting $\dim\mathcal H_\ell=2\ell+1$ directly from harmonic polynomials

Put the $Y_\ell^m$ on the sphere into correspondence with the **homogeneous harmonic polynomials** in three-dimensional space, and the dimension appears at once.

**The space of harmonic homogeneous polynomials.** Let

$$
\mathcal{H}_\ell=\{\,p(x,y,z)\ \text{homogeneous of degree }\ell\ \text{(polynomial)},\ \Delta p=0\,\}, \qquad \Delta=\partial_x^2+\partial_y^2+\partial_z^2.
$$

The space of homogeneous polynomials in three variables of degree $\ell$, $P_\ell$, has dimension $\binom{\ell+2}{2}=\tfrac{(\ell+1)(\ell+2)}{2}$ (the number of monomials $x^ay^bz^c$ with $a+b+c=\ell$, by stars and bars). The Laplace operator $\Delta$ maps homogeneous polynomials of degree $\ell$ to homogeneous polynomials of degree $\ell-2$, and this map $\Delta\colon P_\ell\to P_{\ell-2}$ is **surjective** — this is a key and nontrivial step, proved as follows: multiplying by $r^2=x^2+y^2+z^2$ gives an injection $r^2\!\cdot(-)\colon P_{\ell-2}\hookrightarrow P_\ell$; under the Fischer (apolar) inner product $\langle p,q\rangle=\big(p(\partial)\,\overline{q}\big)\big|_0$, the adjoint of "multiplying by $r^2$" is exactly $\Delta$ (up to a positive constant), and the adjoint of an injection must be surjective, so $\Delta$ is surjective. (Equivalently: the classical decomposition $P_\ell=\mathcal{H}_\ell\oplus r^2P_{\ell-2}$, see Stein–Weiss or Axler–Bourdon–Ramey, *Harmonic Function Theory*, Ch.5.) By surjectivity and the rank–nullity theorem,

$$
\dim\mathcal{H}_\ell=\dim P_\ell-\dim P_{\ell-2} =\frac{(\ell+1)(\ell+2)}{2}-\frac{(\ell-1)\ell}{2} =\frac{(\ell^2+3\ell+2)-(\ell^2-\ell)}{2}=\frac{4\ell+2}{2}=2\ell+1.
$$

(When $\ell=0,1$ the target $P_{\ell-2}=0$, $\Delta$ is trivially surjective, $\mathcal{H}_\ell=P_\ell$, giving $\dim=1,3$; the real content is at $\ell\ge2$.)

**Example (for $\ell=2$, counting out $5$ on the spot).** The homogeneous quadratic polynomials in three variables, $P_2$, have the 6 monomial basis elements $x^2,y^2,z^2,xy,xz,yz$, so $\dim P_2=\binom{4}{2}=6$. The Laplace operator $\Delta=\partial_x^2+\partial_y^2+\partial_z^2$ sends them into the space of constants $P_0$ ($\dim=1$):

$$
\Delta x^2=\Delta y^2=\Delta z^2=2,\qquad \Delta(xy)=\Delta(xz)=\Delta(yz)=0,
$$

and the image space is the constants ($\dim 1$). So the harmonic ($\Delta p=0$) part has $\dim\mathcal H_2=6-1=5$, and a basis is exactly

$$
xy,\quad xz,\quad yz,\quad x^2-y^2,\quad 3z^2-r^2\quad(r^2=x^2+y^2+z^2),
$$

(check: $\Delta(x^2-y^2)=2-2=0$; $\Delta(3z^2-r^2)=\Delta(2z^2-x^2-y^2)=4-2-2=0$, all harmonic) — **exactly 5, which are exactly, for $\ell=2$, the five $d$ orbitals**, $d_{xy},d_{xz},d_{yz},d_{x^2-y^2},d_{z^2}$ (matching one to one the real combinations of Appendix 2 §2). Here $2\ell+1=5$ is **counted out**.

**The action of $SO(3)$ on it.** $SO(3)$ acts on polynomials by $(R\cdot p)(\mathbf{x})=p(R^{-1}\mathbf{x})$. A rotation is a linear transformation and preserves degree; and because $\Delta$ is rotation-invariant ($R$ orthogonal, $\Delta(p\circ R^{-1})=(\Delta p)\circ R^{-1}$), it preserves harmonicity. So $\mathcal{H}_\ell$ is a representation of $SO(3)$, of dimension $2\ell+1$.

**The correspondence with the spherical harmonics.** Restrict the homogeneous polynomials to the unit sphere $S^2$. The restriction map $\mathcal{H}_\ell\to C(S^2)$ is injective: a homogeneous polynomial is completely determined by its values on the sphere ($p(\mathbf{x})=\lvert\mathbf{x}\rvert^{\ell}\,p(\mathbf{x}/\lvert\mathbf{x}\rvert)$). Its image is exactly the space spanned by the spherical harmonics of degree $\ell$, so

$$
\mathcal{H}_\ell\;\cong\;\operatorname{span}\{\,Y_\ell^{m}\ :\ m=-\ell,\dots,\ell\,\}, \qquad \dim=2\ell+1.
$$

**Irreducibility (continuing the raising-and-lowering ladder of Section 3 of this appendix).** The $Y_\ell^m$ are common eigenfunctions of the angular momentum operators. The angular momentum operators $J_z,J_\pm$ here are **the same set of generators acting on the integer-$j=\ell$ block in Section 3 of this appendix** (physics books often write them as $L$ in the context of orbital angular momentum, $J=L$):

$$
J^2 Y_\ell^m=\ell(\ell+1)Y_\ell^m,\quad J_z Y_\ell^m=m\,Y_\ell^m,\quad J_\pm Y_\ell^m\;\propto\;Y_\ell^{m\pm1}\quad(J_+Y_\ell^{\ell}=0,\ J_-Y_\ell^{-\ell}=0).
$$

Any $SO(3)$-invariant subspace $W\subseteq\mathcal{H}_\ell$ is preserved by the Lie algebra generators $J_z,J_\pm$. Because the eigenvalues of $J_z$, $m=-\ell,\dots,\ell$, are **pairwise distinct**, one can first use a polynomial in $J_z$ to project any nonzero vector in $W$ onto some single eigenfunction $Y_\ell^{m_0}$; then applying $J_\pm$ repeatedly reaches all of $Y_\ell^{-\ell},\dots,Y_\ell^{\ell}$. So there is no proper nonzero invariant subspace, and $\mathcal{H}_\ell$ is **irreducible**. This is the same thing as "the $\mathfrak{so}(3)$ raising-and-lowering ladder has only one rung-string, of length $2\ell+1$" in Section 3 of this appendix.

Conclusion: **$2\ell+1$ is the dimension of this irreducible representation of $SO(3)$, and $m=-\ell,\dots,\ell$ labels an orthonormal basis of it**.

---

### 6. The three smallest cases (bringing the abstract down to earth)

- **$j=0$ (dimension $1$)**: the trivial representation, $J_x=J_y=J_z=0$. A **scalar** that does not change however it is turned — the $s$ orbital (spherically symmetric).
- **$j=\tfrac12$ (dimension $2$)**: $J_i=\tfrac12\sigma_i$ (the Pauli matrices). $\pi(-\mathbb1)=-\mathbb1$, it **does not descend to $SO(3)$** — the **spinor** exclusive to $SU(2)$ = the electron spin. It is the origin of the $2$ in "each orbital ×2" of §3, and also where the thread buried in §2, "$SU(2)$ double-covers $SO(3)$", is made good.
- **$j=1$ (dimension $3$)**: $\pi(-\mathbb1)=+\mathbb1$, it descends to $SO(3)$ — this is the **first** genuine rotation block of $SO(3)$ beyond the scalars, the apparatus of "turning a vector" in ordinary three-dimensional space ($2\cdot1+1=3$), corresponding to the $p$ orbitals.

---

### 7. Back to §3: $2,6,10,14$ stand on a foundation

The subshell capacities counted out in the main text of §3,

$$
2(2\ell+1)=2,6,10,14\quad(\ell=0,1,2,3=s,p,d,f)
$$

now **both have rigorous sources** for their two factors: the odd dimension $2\ell+1$ = $SO(3)$'s integer-$j$ irreducible blocks [Sections 3 + 4 of this appendix]; the factor $2$ = $SU(2)$'s $j=\tfrac12$ spinor (the electron spin, the Pauli exclusion item of §3). "The orbitals that can hold $10$ electrons, the $d$ orbitals, exist because $SO(3)$ has a $5$-dimensional operation block" — this $5=2\cdot2+1$ is exactly the block selected by (14): for $\ell=2$, the integer-$j$ odd-dimensional block.

---

## Appendix 3 · Deriving the electron's spin ½ from the Dirac equation

> §3.3 used "the electron has spin ½" as a conclusion. Here we prove
>
> **why, physically,**
>
> the electron realizes it — relativity + a first-order wave equation
>
> **derive**
>
> a 4-component spinor field whose rotation generators are exactly $\tfrac12\Sigma$ (compare Peskin, *An Introduction to QFT*, §3.2 eq 3.22/3.23/3.25/3.27; the proof in the text is self-contained). The interface with
>
> **Appendix 2**
>
> : there (Appendix 2) we prove "spin ½ exists as a representation" (the $j{=}\tfrac12$ spinor, which does not descend to $SO(3)$); this appendix proves "the electron is exactly it" — the turn by $2\pi\to-1$ of §5 matches exactly (13) of Appendix 2, and the two foundations join up.

Take natural units $\hbar=c=1$, and the metric $g^{\mu\nu}=\mathrm{diag}(+,-,-,-)$.

### 1. Relativity + first order: the shape of the Dirac equation

The non-relativistic Schrödinger equation is **first order** in time and second order in space — time and space are not on an equal footing, and it does not satisfy relativity. The most direct relativistic equation is **Klein–Gordon**:

$$
(\partial^\mu\partial_\mu+m^2)\,\phi=0,\tag{1}
$$

(Notational conventions: the index $\mu$ runs over the four spacetime components $0,1,2,3$; $\partial_\mu$ is the partial derivative with respect to the $\mu$-th coordinate; an index repeated up and down in the same term is **summed** by default (the Einstein convention), for example $\partial^\mu\partial_\mu=\partial_t^2-\nabla^2$; upper and lower indices are exchanged using the metric $g^{\mu\nu}=\mathrm{diag}(+,-,-,-)$.) It comes from the relativistic energy–momentum relation $E^2=\mathbf p^2+m^2$. But it is **second order** in time, which historically brought the trouble of "the probability density is not positive definite". **Dirac's idea**: find a relativistic equation that is **first order** in time (and hence in all $\partial_\mu$). First order, linear in the components, and also Lorentz covariant (**Lorentz transformations** = the transformations of spacetime coordinates between different inertial frames in special relativity, including spatial rotations and velocity boosts; **covariant** means the equation keeps its form under these transformations) — the most general way of writing it is to introduce a set of **constant matrices** $\gamma^\mu$:

$$
(i\gamma^\mu\partial_\mu-m)\,\psi=0.\tag{2}
$$

Here we do not yet know how many components $\psi$ has, nor what size of matrix $\gamma^\mu$ is — below, these are **derived from self-consistency**.

### 2. Self-consistency derives the Clifford algebra

The hard constraint of relativity has not changed: **every component** of $\psi$ must still satisfy the energy–momentum relation, that is, satisfy Klein–Gordon (1). How do we derive (1) from (2)? Multiply (2) from the left by the operator $(i\gamma^\nu\partial_\nu+m)$:

$$
(i\gamma^\nu\partial_\nu+m)(i\gamma^\mu\partial_\mu-m)\psi=-\big(\gamma^\nu\gamma^\mu\partial_\nu\partial_\mu+m^2\big)\psi=0.\tag{3}
$$

$\partial_\nu\partial_\mu$ is symmetric in $\mu,\nu$, so only the **symmetric part** of $\gamma^\nu\gamma^\mu$ contributes: $\gamma^\nu\gamma^\mu\partial_\nu\partial_\mu=\tfrac12\{\gamma^\mu,\gamma^\nu\}\partial_\mu\partial_\nu$. For (3) to come back exactly to Klein–Gordon (1) (that is, $\partial^\mu\partial_\mu+m^2=g^{\mu\nu}\partial_\mu\partial_\nu+m^2$), we must have

$$
\boxed{\ \{\gamma^\mu,\gamma^\nu\}=\gamma^\mu\gamma^\nu+\gamma^\nu\gamma^\mu=2g^{\mu\nu}\,\mathbb1\ }\tag{4}
$$

This is the **Clifford algebra** (Peskin eq. 3.22). It is not an assumption; it is **derived** from the two requirements "first order + relativity": the $\gamma^\mu$ must pairwise **anticommute**, with $(\gamma^0)^2=+\mathbb1$ and $(\gamma^i)^2=-\mathbb1$.

### 3. The smallest solution is 4×4: so $\psi$ has 4 components

How big must $\gamma^\mu$ satisfying (4) be at least? We need four matrices that **pairwise anticommute**, one squaring to $+1$ and three squaring to $-1$. $1\times1$ (ordinary numbers) obviously will not do (numbers all commute). $2\times2$ is not enough either: among $2\times2$ matrices there are at most **three** that mutually anticommute (exactly the Pauli matrices $\sigma^1,\sigma^2,\sigma^3$), and **four** cannot be put together. The smallest matrices that can accommodate four are **$4\times4$**. A standard choice is the **Weyl (chiral) basis** (Peskin eq. 3.25, in $2\times2$ blocks):

$$
\gamma^0=\begin{pmatrix}0&\mathbb1\\\mathbb1&0\end{pmatrix},\qquad \gamma^i=\begin{pmatrix}0&\sigma^i\\-\sigma^i&0\end{pmatrix}.\tag{5}
$$

(Substitute into (4) and a check shows it holds — the symbolic check has verified all 16 $\{\gamma^\mu,\gamma^\nu\}$.) So the $\psi$ in (2) must be an object with **4 components** — it is not a scalar, nor an ordinary vector; it is a new kind of thing, called a **Dirac spinor**. "Why 4" now has an answer: $4$ is the smallest faithful dimension of the Clifford algebra in $3{+}1$ dimensions (**faithful** = different elements are assigned different matrices, that is, the representation is injective and does not squash information).

**Example (checking the Clifford algebra by hand).** Take a few pairs from the Weyl basis of (5), and in $2\times2$ blocks check directly $\{\gamma^\mu,\gamma^\nu\}=2g^{\mu\nu}\mathbb1$ (using $(\sigma^i)^2=\mathbb1$ and $\sigma^i\sigma^j+\sigma^j\sigma^i=2\delta^{ij}$):

- **$\{\gamma^0,\gamma^0\}$**: $(\gamma^0)^2=\left(\begin{smallmatrix}0&\mathbb1\\\mathbb1&0\end{smallmatrix}\right)^2=\left(\begin{smallmatrix}\mathbb1&0\\0&\mathbb1\end{smallmatrix}\right)=\mathbb1_4$, so $\{\gamma^0,\gamma^0\}=2\mathbb1_4=2g^{00}\mathbb1$ ($g^{00}{=}{+}1$) ✓
- **$\{\gamma^1,\gamma^1\}$**: $(\gamma^1)^2=\left(\begin{smallmatrix}0&\sigma^1\\-\sigma^1&0\end{smallmatrix}\right)^2=\left(\begin{smallmatrix}-(\sigma^1)^2&0\\0&-(\sigma^1)^2\end{smallmatrix}\right)=-\mathbb1_4$, so $=-2\mathbb1_4=2g^{11}\mathbb1$ ($g^{11}{=}{-}1$) ✓
- **$\{\gamma^0,\gamma^1\}$** (time–space mixed): $\gamma^0\gamma^1=\left(\begin{smallmatrix}-\sigma^1&0\\0&\sigma^1\end{smallmatrix}\right)$, $\gamma^1\gamma^0=\left(\begin{smallmatrix}\sigma^1&0\\0&-\sigma^1\end{smallmatrix}\right)$, sum $=0=2g^{01}\mathbb1$ ($g^{01}{=}0$) ✓
- **$\{\gamma^1,\gamma^2\}$** (space mixed): each block gives $-(\sigma^1\sigma^2+\sigma^2\sigma^1)=-\{\sigma^1,\sigma^2\}=0$ (Pauli anticommutation), so $=0=2g^{12}\mathbb1$ ✓

All four kinds (time–time, space–space, time–space, space–space) hit. All sixteen $\{\gamma^\mu,\gamma^\nu\}$ are computed this way one by one (the symbolic check has done all $16$); it is clear that the set of $\gamma$ in (5) really does satisfy the Clifford algebra of (4) — the two requirements "first order + relativity" force $\gamma$ into this anticommuting form.

### 4. Rotation generators = $\tfrac12\Sigma$: spin ½ drops out

How do the 4 components of $\psi$ change under Lorentz transformations (including rotations)? The $\gamma^\mu$ uniquely fix a set of generators (Peskin eq. 3.23):

$$
S^{\mu\nu}=\frac{i}{4}\,[\gamma^\mu,\gamma^\nu],\qquad \psi\to \exp\!\Big({-}\tfrac{i}{2}\omega_{\mu\nu}S^{\mu\nu}\Big)\psi.\tag{6}
$$

(In the formula, $\omega_{\mu\nu}$ are antisymmetric transformation parameters: the $6$ independent components are exactly $3$ rotation angles + $3$ boosts, analogous to, in $\exp(-i\theta J)$, the angle $\theta$.) We care only about the few for **spatial rotations**, that is, $S^{ij}$ ($i,j\in\{1,2,3\}$). Substitute (5) and compute directly (the symbolic check verified each one):

$$
\boxed{\ S^{ij}=\tfrac12\,\epsilon^{ijk}\,\Sigma^k,\qquad \Sigma^k=\begin{pmatrix}\sigma^k&0\\0&\sigma^k\end{pmatrix}\ }\tag{7}
$$

**Example (spin ½ really drops out: computing $S^{12}$).** Use the Weyl basis (5) to compute directly the spatial rotation generator $S^{12}=\tfrac{i}{4}[\gamma^1,\gamma^2]$. Here $\gamma^1\gamma^2=\mathrm{diag}(-\sigma^1\sigma^2,-\sigma^1\sigma^2)$ (that is, the block that appeared above when checking Clifford anticommutation) together with $\sigma^1\sigma^2=i\sigma^3$ (so $\gamma^2\gamma^1=\mathrm{diag}(i\sigma^3,i\sigma^3)$) gives

$$
[\gamma^1,\gamma^2]=\mathrm{diag}(-2i\sigma^3,\,-2i\sigma^3),\qquad S^{12}=\tfrac{i}{4}\,(-2i)\,\mathrm{diag}(\sigma^3,\sigma^3)=\tfrac12\begin{pmatrix}\sigma^3&0\\0&\sigma^3\end{pmatrix}=\tfrac12\Sigma^3.
$$

That is, the generator of rotation about the $z$ axis is $S_z=S^{12}=\tfrac12\Sigma^3=\tfrac12\,\mathrm{diag}(1,-1,1,-1)$, with eigenvalues $\pm\tfrac12$ (each twofold) — **spin ½ computed out on the spot**, each copy being exactly the $j=\tfrac12$ of Appendix 2 (Pauli $\sigma^3$). (Symbolic check done.)

(Peskin eq. 3.27.) That is to say, the generator of rotation about the $k$-th axis is exactly $\tfrac12\Sigma^k$. Recognizing it as angular momentum, the **spin operator** is

$$
S_k=\tfrac12\Sigma^k.\tag{8}
$$

Three things together nail it down as "spin ½": - **They satisfy the angular momentum algebra**: $[S_1,S_2]=iS_3$ (and cyclically) — so the $S_k$ really are a set of angular momenta (a representation of $\mathfrak{su}(2)$), not a name given at random. - **Casimir**: $S^2=S_1^2+S_2^2+S_3^2=\tfrac34\,\mathbb1=\tfrac12\big(\tfrac12+1\big)\mathbb1$ — corresponding to the spin quantum number $s=\tfrac12$. - **Eigenvalues of $S_z$**: $S_z=\tfrac12\Sigma^3=\tfrac12\,\mathrm{diag}(1,-1,1,-1)$, eigenvalues $\pm\tfrac12$ (each twofold). $\pm\tfrac12$ are the **two spin states** (up / down); the **twofold** multiplicity of each eigenvalue comes from the **two chiral copies, left- and right-handed**, $\psi_L,\psi_R$, into which the 4-component spinor splits under rotation (each copy being one $j{=}\tfrac12$, see §5). (Chirality $L/R$ and "particle / antiparticle" are **two different things** — the latter comes from the positive- and negative-frequency solutions in field quantization, see Peskin from §3.3 on; this appendix does not unfold it.)

**This completes the proof that "the electron has spin ½"**: as long as the electron is a field satisfying a relativistic, first-order wave equation, it is **necessarily** a 4-component Dirac spinor, whose rotation generators $=\tfrac12\Sigma$, that is, spin $\tfrac12$. Spin is not an assumption added from outside — it is a **compulsory product** of relativity + quantum mechanics. $\blacksquare$

### 5. Joining up with Appendix 2: the Dirac spinor is the physical realization of that $j=\tfrac12$ of Appendix 2

Under **pure rotations**, the $S^{ij}=\tfrac12\epsilon^{ijk}\Sigma^k$ of (7) is block-diagonal — the 4-component spinor splits into **two copies of 2 components each**, each copy transforming under rotation by $S_k=\tfrac12\sigma^k$, **exactly the $j=\tfrac12$ representation of $SU(2)$ in Appendix 2**. Test it with the cleanest mark — a full turn by $2\pi$:

$$
\exp\!\big(-i\,2\pi\,S_z\big)=\exp\!\big(-i\pi\Sigma^3\big)=-\,\mathbb1\quad\Longrightarrow\quad \psi\to-\psi.\tag{9}
$$

A turn by $2\pi$ changes the spinor into its **negative** — this is exactly what formula (13) of Appendix 2, $\pi_j(-\mathbb1)=(-1)^{2j}$, gives at $j=\tfrac12$: $-1$ (and exactly the line of §2, "$SU(2)$ double-covers $SO(3)$"). **The two foundations join up here**: Appendix 2 proves from symmetry that "this spin-½ representation exists and changes sign under a turn by $2\pi$", and this appendix proves from relativity that "the electron field is exactly it".

### 6. Back to §3.3

The electron, as a relativistic spin-½ particle, has exactly and only **two spin states**, $S_z=\pm\tfrac12$ — this is the origin of the factor $2$ in "each spatial orbital ×2" of §3.3 (foundation = this appendix). Both factors of the subshell capacity $2(2\ell+1)=2,6,10,14$ of §3 have now come down to earth: **the odd dimension $2\ell+1$** comes from Appendix 2 ($SO(3)$'s integer-$j$ representations), and **the factor $2$** comes from this appendix (the electron's spin ½ = $SU(2)$'s $j{=}\tfrac12$).

> **On to the next piece (Appendix 4)**: this appendix proved that the electron
>
> **is**
>
> spin ½, but "spin ½ ⟹ necessarily a fermion ⟹ Pauli exclusion (two electrons cannot occupy the same state, so each orbital is filled by at most this many)" is
>
> **another theorem**
>
> —
>
> **the spin–statistics theorem**, whose complete derivation is in
>
> **Appendix 4**
>
> (full proof for the electron + an honest outside citation for the general case).

---

## Appendix 4 · From spin ½ to fermions and Pauli exclusion

> §3.3 used "the electron is a spin-½
>
> **fermion**, obeying
>
> **Pauli exclusion**
>
> " as a conclusion. Appendix 3 has already proved "the electron
>
> **is**
>
> spin ½"; this appendix supplies "
>
> **spin ½ ⟹ fermion ⟹ Pauli**
>
> ".
>
> **Two levels of depth**:
>
> **the electron version (full proof)**
>
> — quantization of the spin-½ Dirac field
>
> **can only use anticommutators**
>
> (compare Peskin §3.5);
>
> **the general version (honest outside citation)**
>
> — any half-integer spin ⟹ fermion (the spin–statistics theorem; its complete proof belongs to axiomatic QFT, citing Streater–Wightman / Duck–Sudarshan, the same boundary as for Burnside / Artin / Kummer).

Take $\hbar=c=1$.

### 1. Quantizing the electron field

Appendix 3 gave the Dirac field $\psi$ (4 components, spin ½). Treat it as a quantum field and expand it in momentum modes (Peskin eq. 3.87, schematically):

$$
\psi(x)\sim\int\!\frac{d^3p}{(2\pi)^3}\frac1{\sqrt{2E_{\mathbf p}}}\sum_{s}\Big(a_{\mathbf p}^s\,u^s(p)\,e^{-ip\cdot x}+b_{\mathbf p}^{s\dagger}\,v^s(p)\,e^{+ip\cdot x}\Big),\tag{1}
$$

$a^\dagger$ creates **particles** (electrons), $b^\dagger$ creates **antiparticles** (positrons), $E_{\mathbf p}=\sqrt{\mathbf p^2+m^2}>0$. Only one question is left: should $a,b$ satisfy **commutation** relations (bosonic) or **anticommutation** relations (fermionic)? This is not a free choice — as we will see below, **only one choice is self-consistent**.

### 2. Using commutators: the energy has no lower bound (the vacuum collapses)

Substitute $\psi$ into the Hamiltonian (the **Hamiltonian** $H$ = the operator of the system's total energy, whose eigenvalues are the energies; below, saying it "has/has no lower bound" means whether the energy can fall without limit, whether there is a lowest-energy state (the vacuum)), and we get (the structure of Peskin eq. 3.90)

$$
H=\int\!\frac{d^3p}{(2\pi)^3}\,E_{\mathbf p}\sum_s\Big(a_{\mathbf p}^{s\dagger}a_{\mathbf p}^s\;-\;b_{\mathbf p}^s\,b_{\mathbf p}^{s\dagger}\Big).\tag{2}
$$

Note that in front of the antiparticle term there is a **minus sign**. Now **try the bosonic commutator** $[b,b^\dagger]=1$, that is, $b\,b^\dagger=b^\dagger b+1$, and substitute:

$$
H=\int E_{\mathbf p}\big(a^\dagger a-b^\dagger b\big)-(\text{const}).\tag{3}
$$

$b^\dagger b$ is the number of antiparticles, which can take $0,1,2,\dots$ **with no upper bound**; in front of it is a minus sign — **for every additional $b$ antiparticle put in, the energy drops by $E_{\mathbf p}$, and it can keep dropping to $-\infty$**. The Hamiltonian **has no lower bound**, there is no lowest-energy state (vacuum), and the whole theory is **not self-consistent**. Bosonic quantization, for a spin-½ field, **does not work**.

### 3. Switching to anticommutators: the energy has a lower bound (fermions)

Change to the **fermionic anticommutator** $\{b,b^\dagger\}=1$, that is, $b\,b^\dagger=1-b^\dagger b$, and substitute into (2):

$$
H=\int E_{\mathbf p}\big(a^\dagger a+b^\dagger b\big)-(\text{const}).\tag{4}
$$

The minus sign is **turned into a plus sign** by the anticommutator's $b b^\dagger=1-b^\dagger b$. Now $a^\dagger a,b^\dagger b\ge0$, $H$ **is bounded below and positive definite** above a constant, and a stable vacuum exists. **Self-consistent.** Conclusion: **the spin-½ Dirac field can only be quantized with anticommutators — it must be a fermion.** This is the electron version of the spin–statistics theorem: spin-½ $\Rightarrow$ anticommutation $\Rightarrow$ fermion. (For the same energy signs as (3)/(4), the symbolic check computed with a single mode: anticommutation gives $-E\,a a^\dagger=E\,N-E$, bounded below; commutation gives $-E(N{+}1)$, not bounded below.)

**Example (computing the sign flip of the energy with a single mode).** Take a single antiparticle mode $b$; its contribution to the Hamiltonian is $-E\,b\,b^\dagger$ (that minus sign of the antiparticle term of (2)), $E>0$: - **Bosonic** $[b,b^\dagger]=1$ ($bb^\dagger=b^\dagger b+1=N_b+1$): contribution $=-E(N_b+1)$, $N_b=0,1,2,\dots$ **with no upper bound** $\Rightarrow$ energies $-E,-2E,-3E,\dots$ dropping all the way to $-\infty$, **no lower bound** (the vacuum collapses). - **Fermionic** $\{b,b^\dagger\}=1$ ($bb^\dagger=1-b^\dagger b=1-N_b$): contribution $=-E(1-N_b)=E\,N_b-E$, $N_b\in\{0,1\}$ $\Rightarrow$ energies $\{-E,\,0\}$, **bounded below** — the minus sign is **turned into a plus sign** by the anticommutation's $bb^\dagger=1-N_b$.

The same minus sign: commutation gives $-\infty$, anticommutation gives something bounded — this is the arithmetic kernel of why a spin-½ field **can only anticommute**. (Symbolic check done.)

### 4. Anticommutation ⟹ Pauli exclusion

The fermionic anticommutator gives its sharpest consequence on a single mode. In the quantization of (4), take $\{a_{\mathbf p}^\dagger,a_{\mathbf p}^\dagger\}=0$, that is,

$$
\boxed{\ (a_{\mathbf p}^\dagger)^2=0\ }\tag{5}
$$

"Create an electron with momentum $\mathbf p$ and spin $s$" applied twice $=0$ — **into the same quantum state, a second electron cannot be squeezed**. Equivalently, the eigenvalues of each mode's occupation-number operator $N=a^\dagger a$ are **only $0$ or $1$** (verified by the symbolic check): a state is either empty or holds one electron, **there is no third possibility**. This is exactly the **Pauli exclusion principle**.

**Example (a $2\times2$ realization of a single-mode fermion + the two-electron Slater determinant).**

**(i) One mode can hold only $0$ or $1$.** The Fock space of a single mode has just two states $\{|0\rangle,|1\rangle\}$; take $|0\rangle=\left(\begin{smallmatrix}1\\0\end{smallmatrix}\right),|1\rangle=\left(\begin{smallmatrix}0\\1\end{smallmatrix}\right)$, and in this basis

$$
a=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad a^\dagger=\begin{pmatrix}0&0\\1&0\end{pmatrix}.
$$

Check three things directly: $\{a,a^\dagger\}=aa^\dagger+a^\dagger a=\left(\begin{smallmatrix}1&0\\0&0\end{smallmatrix}\right)+\left(\begin{smallmatrix}0&0\\0&1\end{smallmatrix}\right)=\mathbb1$ ✓; $(a^\dagger)^2=0$ ✓; occupation number $N=a^\dagger a=\operatorname{diag}(0,1)$ — the eigenvalues are **only $0,1$**; a state is either empty or holds one electron, there is no third possibility.

**(ii) The antisymmetry of two electrons = the Slater determinant.** Two electrons in the single-particle states $\phi,\chi$: the total wave function of identical fermions must be **antisymmetric** (it changes sign when the two electrons are exchanged), and it is written exactly as a **Slater determinant**:

$$
\Psi(1,2)=\frac1{\sqrt2}\begin{vmatrix}\phi(1)&\chi(1)\\\phi(2)&\chi(2)\end{vmatrix}=\frac1{\sqrt2}\big(\phi(1)\chi(2)-\phi(2)\chi(1)\big),\qquad \Psi(2,1)=-\Psi(1,2).
$$

**The key**: if the two electrons want to occupy **the same state**, $\phi=\chi$, the two columns of the determinant are the same $\Rightarrow\ \Psi=\frac1{\sqrt2}(\phi(1)\phi(2)-\phi(2)\phi(1))=0$ — the wave function is identically zero, and **this state does not exist at all**. This is the wave-function version of Pauli exclusion, and it and the $(a^\dagger)^2=0$ of (i) are two ways of saying the same thing.

Compare bosons, $[a,a^\dagger]=1$: the eigenvalues of $N=a^\dagger a$ are $0,1,2,\dots$ **with no upper bound** — any number of bosons can crowd into one state (photons can pile up without limit, which is how the laser comes about). **The fermions' "at most one per state" and the bosons' "unlimited per state" are divided exactly by anticommutation vs commutation**, and that in turn is decided by whether the spin is half-integer / integer.

### 5. The general version (honest outside citation)

The above is **the full proof for the electron (the spin-½ Dirac field)**. Generalizing it to **any spin** gives

> **The spin–statistics theorem.**
>
> In a quantum field theory satisfying relativistic invariance, microcausality (fields at spacelike separation commute/anticommute) and positive-definite energy:
>
> **fields of integer spin must commute (bosons), and fields of half-integer spin must anticommute (fermions).**

Its **complete rigorous proof** has to call on the whole machinery of axiomatic QFT — the Wightman axioms, the analytic continuation of Wightman functions, the PCT theorem — which is an entire graduate course, and **this appendix does not unfold it**. Following this series' established boundary of honesty, a precise statement + the source noted: **Streater–Wightman, *PCT, Spin and Statistics, and All That***; and the accessible yet rigorous monograph **Duck–Sudarshan, *Pauli and the Spin-Statistics Theorem***. (This is in the same tier as the treatment of Burnside in §3 and of Artin and Kummer in §4/§5: take the conclusion, give the source, do not reprove it in the main text.)

### 6. Closing §3.3

The three foundations together make the statement of §3.3, "the electron is a spin-½ fermion, obeying Pauli exclusion", come fully down to earth for **the electron**: - **Appendix 2**: the operation blocks of $SO(3)$ can only be odd-dimensional, $2\ell+1$ (the spherical harmonics $s,p,d,f$). - **Appendix 3**: relativity + a first-order equation (Dirac) derive that the electron is **spin ½** ($SU(2)$'s $j{=}\tfrac12$) — each spatial orbital carries $2$ spin states. - **Appendix 4 (this one)**: spin ½ ⟹ anticommutation ⟹ **fermion** ⟹ at most one electron per quantum state (**Pauli**).

So an $\ell$ subshell has $2\ell+1$ spatial orbitals, each orbital $2$ spin states, $2(2\ell+1)$ **mutually distinct** single-electron states in all; Pauli says at most one electron per state, so this shell, **filled**, holds exactly

$$
2(2\ell+1)=2,6,10,14\qquad(s,p,d,f).
$$

The widths of that periodic table of the elements of §3 now have **all three foundations firmly tamped down** — from the representation theory of the continuous rotation group $SO(3)$, to the spin of the relativistic electron, to the Pauli principle of spin–statistics, with not one gap left. $\blacksquare$

---

## Appendix 5 · Burnside's $p^aq^b$ theorem: the order of a non-abelian simple group contains at least 3 primes

> §4 used a law of shape:
>
> **the order of a non-abelian simple group must be divisible by at least 3 distinct primes**
>
> (so the two smallest atoms of EP3, $60(A_5)$ and $168(\mathrm{PSL}(2,7))$, stand exactly on the lower bound), and at the time treated it as an
>
> **honest outside citation**
>
> . Here we
>
> **prove it in full**
>
> — it is equivalent to
>
> **Burnside's $p^aq^b$ theorem**
>
> (a group whose order is divisible by only 1 or 2 primes is necessarily solvable).
>
> **Depth (full proof)**: of the same nature as §4 borrowing Bézout —
>
> **we borrow the general toolbox of character theory**
>
> (orthogonality relations + algebraic integers, citing D&F §15.3/§18.3 and Isaacs Ch2–3), but
>
> **prove Burnside itself in full**
>
> (compared formula by formula with D&F §19.2).

(**What follows is a purely group-theoretic foundation** — Appendices 2/3/4 are physics, this appendix is mathematics. First, the group-theory terms that recur in this appendix: a **simple group** = a group with no **normal subgroup** other than $\{1\}$ and itself ("cannot be broken apart"); a **normal subgroup** $N$ = a subgroup satisfying $gNg^{-1}=N$, equivalently the kernel of some group homomorphism; a **solvable group** = a group for which there is a normal series whose successive quotient groups are all abelian (intuitively, "it can be taken apart layer by layer into abelian blocks").)

### 0. The borrowed toolbox (cited, not reproved here)

The following are standard results of a chapter on character theory, which this appendix **takes and uses** (just as §4 takes and uses Bézout): 1. **Orthogonality relations**: row, $\sum_{g}\chi_i(g)\overline{\chi_j(g)}=|G|\delta_{ij}$; **column** (the second orthogonality relation): for $g,h$, $\sum_i\chi_i(g)\overline{\chi_i(h)}=|C_G(g)|$ if $g\sim h$, otherwise $0$. ($C_G(g)$ = the subgroup made up of all group elements that commute with $g$, called the **centralizer** of $g$; its index $[G:C_G(g)]$ — in general the index of a subgroup is $[G:H]:=|G|/|H|$, the number of cosets of $H$ — is exactly the size of the conjugacy class containing $g$.) 2. **Degrees divide the group order**: $n_i=\chi_i(1)$ divides $|G|$. 3. **Algebraic integers**: roots of some monic polynomial with integer coefficients. Properties — roots of unity are algebraic integers; the algebraic integers form a ring; **the algebraic integers in $\mathbb{Q}$ $=\mathbb{Z}$**; **Kronecker's theorem** — if all the Galois conjugates of an algebraic integer (the **Galois conjugates** of $\alpha$ = the other roots of the same minimal polynomial (monic, integer coefficients) as $\alpha$) have absolute value $\le 1$, then it is either $0$ or a root of unity. 4. **Character values are algebraic integers**: $\chi(g)$ is a sum of $\chi(1)$ roots of unity (the representation matrix $\varphi(g)$ has finite order, is diagonalizable, and its eigenvalues are roots of unity), so $|\chi(g)|\le\chi(1)$, and $\chi(g)$ is an algebraic integer.

### 1. The central characters $\omega_i(K)$ are algebraic integers (D&F Prop 4)

For a class $K_j$, take the class sum $\hat K_j=\sum_{g\in K_j}g$. It commutes with all $\varphi_i(x)$ (conjugation only permutes $K_j$), so by **Schur's lemma** $\varphi_i(\hat K_j)=\omega_i(K_j)\,\mathbb1$ is a scalar; taking the trace gives

$$
\omega_i(K_j)=\frac{|K_j|\,\chi_i(g)}{\chi_i(1)}\qquad(g\in K_j).\tag{1}
$$

Multiplying two class sums, $\hat K_i\hat K_j=\sum_s a_{ijs}\hat K_s$, with structure constants $a_{ijs}\in\mathbb{Z}_{\ge0}$ (counting "how many pairs of elements multiply to land in $K_s$"). Substituting the scalar relation gives $\omega_i(K_a)\omega_i(K_b)=\sum_s a_{abs}\omega_i(K_s)$ — this shows that the subring spanned by $\{\omega_i(K_j)\}$ is a finitely generated $\mathbb{Z}$-module, so each $\omega_i(K_j)$ is an **algebraic integer**. $\square$

### 2. Lemma A: on a coprime class, $\chi(g)=0$ or $g$ acts as a scalar

> **Lemma A.**
>
> Let $\chi\in\mathrm{Irr}(G)$, $n=\chi(1)$, and let the class $K$ satisfy $\gcd(|K|,n)=1$, $g\in K$. Then
>
> **either $\chi(g)=0$, or $|\chi(g)|=n$ (that is, $\varphi(g)$ is a scalar matrix)**
>
> .

*Proof.* By (1), $\omega:=\dfrac{|K|\chi(g)}{n}$ is an algebraic integer (§1); $\chi(g)$ is also an algebraic integer (§0.4). $\gcd(|K|,n)=1$, so by Bézout take integers $a,b$ with $a|K|+bn=1$; then

$$
\frac{\chi(g)}{n}=a\cdot\frac{|K|\chi(g)}{n}+b\,\chi(g)=a\,\omega+b\,\chi(g)
$$

is an integer combination of two algebraic integers, and **is still an algebraic integer**. Write $\alpha=\chi(g)/n$. $\chi(g)$ is a sum of $n$ roots of unity, so $|\alpha|\le 1$; each of its Galois conjugates likewise has the form "a sum of $n$ roots of unity $/n$", and is also $\le 1$. By **Kronecker**, $\alpha=0$ or $\alpha$ is a root of unity. In the former case $\chi(g)=0$; in the latter $|\chi(g)|=n$, that is, $\varphi(g)$'s $n$ root-of-unity eigenvalues are all equal, and $\varphi(g)=\alpha\,\mathbb1$ is a scalar. $\blacksquare$

**Example (seeing the integrality of central characters on $S_3$).** Take $S_3$'s 2-dimensional standard representation $\chi_{\mathrm{std}}$ (values $\chi_{\mathrm{std}}(e)=2$, transpositions $=0$, three-cycles $=-1$, that is, the $S_3$ character table in Appendix 1 Section 3). The central character $\omega(K)=\dfrac{|K|\,\chi(g)}{\chi(e)}$ ($g\in K$) on the two nontrivial classes:

$$
\omega(\text{transposition class})=\frac{3\cdot0}{2}=0,\qquad \omega(\text{three-cycle class})=\frac{2\cdot(-1)}{2}=-1.
$$

Both are **integers** (and hence algebraic integers) — exactly what "$\omega_i(K)$ is an algebraic integer" of §1 looks like. **By contrast**: taking $\chi(g)/\dim=\chi/2$ directly on the three-cycle class gives $-\tfrac12$, **not an integer**. So the quantity in Burnside's argument whose integrality can be guaranteed and which can be pressed into use is the one carrying the class-size factor $|K|$, namely $\omega(K)$, and **not** the bare $\chi/n$ — this one-step difference is exactly the fulcrum of the whole proof.

(Symbolic check: $S_3$'s two-dimensional standard representation $\chi_{\mathrm{std}}$, transposition class of size $3$, $\gcd(3,2)=1$ → $\chi_{\mathrm{std}}(\text{transposition})=0$; whereas the three-cycle class has size $2$, $\gcd(2,2)=2$ is not coprime, and $\chi_{\mathrm{std}}/2=-1/2$ is **not** an algebraic integer — showing that **coprimality is the key to Lemma A**.)

### 3. Lemma B: a nontrivial class of prime-power size exists ⟹ not a non-abelian simple group (D&F Lemma 7)

> **Lemma B.**
>
> If $G$ has a
>
> **non-identity**
>
> conjugacy class $K$ with $|K|=p^k$ ($p$ prime, $k\ge1$), then $G$ has a proper normal subgroup ($\ne1,G$),
>
> **and so is not a non-abelian simple group**
>
> .

*Proof.* Take $g\in K$ ($g\ne e$). The second orthogonality relation comparing column $g$ with column $e$ ($g\not\sim e$): $\sum_i n_i\,\chi_i(g)=0$. The trivial character contributes $1$, so

$$
1+\sum_{\chi_i\ \text{nontrivial}} n_i\,\chi_i(g)=0\ \Longrightarrow\ \sum_{\text{nontrivial}} n_i\,\chi_i(g)=-1.\tag{2}
$$

**Suppose, to the contrary**, that every nontrivial irreducible $\chi_i$ satisfies "$p\mid n_i$ **or** $\chi_i(g)=0$". Then every nonzero term on the left of (2) has $p\mid n_i$, that is, $\sum=p\cdot(\text{algebraic integer})$, so $-1/p$ is an algebraic integer; but $-1/p\in\mathbb{Q}\setminus\mathbb{Z}$, contradicting "the algebraic integers in $\mathbb{Q}$ $=\mathbb{Z}$".

So there **exists** a nontrivial $\chi=\chi_i$ with $\chi(g)\ne0$ and $p\nmid n=\chi(1)$. Then $\gcd(|K|=p^k,\,n)=1$, and by **Lemma A**, since $\chi(g)\ne0$, $\varphi(g)$ is a scalar. Then: - If $\varphi$ is **faithful** ($\ker\varphi=1$): $\varphi(g)$ scalar ⟹ $g$ commutes with everything in $G$ ⟹ $g\in Z(G)$ ⟹ the class $\{g\}$ has size $1$, contradicting $|K|=p^k>1$. - So $\varphi$ is **not faithful**: $\ker\varphi$ is a normal subgroup, $\ne1$ (not faithful), $\ne G$ ($\chi$ nontrivial).

Either way, $G$ has a proper normal subgroup and is not a non-abelian simple group. $\blacksquare$

(Symbolic check: $S_3(6{=}2\!\cdot\!3)$ has prime-power classes of sizes $2,3$ → cannot be simple ($A_3$ normal); $A_4(12{=}2^2\!\cdot\!3)$ has prime-power classes of sizes $3,4$ → cannot be simple ($V_4$ normal); the nontrivial classes of $A_5(60{=}2^2\!\cdot\!3\!\cdot\!5)$ have sizes $15,20,12,12$, **not one of which is a prime power** → Lemma B cannot touch it, and **$A_5$ gets to be a simple group** — and this string of sizes is exactly EP3's $1{+}15{+}20{+}12{+}12{=}60$.)

### 4. The main theorem: $|G|=p^aq^b\Rightarrow G$ solvable

> **Burnside's $p^aq^b$ theorem.**
>
> A finite group whose order is divisible by only one or two distinct primes is solvable.

*Proof (by induction on $|G|$).* When $|G|=1$ or a prime power: groups of prime-power order are nilpotent (a **nilpotent group** = a class of groups stronger than "solvable"; all groups of prime-power order ($p$-groups) are nilpotent, and nilpotent implies solvable; only this one implication is used here), nilpotent ⟹ solvable, and it holds. Let $|G|=p^aq^b$ ($a,b\ge1$, otherwise it is a prime power and we are done). Take a Sylow $p$-subgroup $P\ne1$ (a **Sylow $p$-subgroup** = a subgroup of order exactly $p^a$ (the highest power of $p$ in $|G|$), the subgroup stuffed fullest with "the $p$ part"); the center of a $p$-group is nontrivial, so take $g\in Z(P)$, $g\ne e$. Then $P\subseteq C_G(g)$, so the class size

$$
|K_g|=[G:C_G(g)]\ \big|\ [G:P]=q^b,
$$

is a power of $q$. Two cases: - $|K_g|=1$: then $g\in Z(G)$, and $Z(G)\ne1$ is a proper normal subgroup (when $G$ is non-abelian, $Z(G)\ne G$; if $G$ is abelian it is directly solvable). - $|K_g|=q^k>1$: by **Lemma B**, $G$ has a proper normal subgroup $N$.

Either way, $G$ has a proper normal subgroup $1\ne N\ne G$. $|N|$ and $|G/N|$ ($G/N$ = the **quotient group** obtained by treating the normal subgroup $N$ as a whole as the identity element, of order $=|G|/|N|$) both divide $p^aq^b$ (still $\le2$ primes), and by the induction hypothesis both are solvable; "subgroup and quotient solvable ⟹ group solvable" (a small fact used in §5), so $G$ is **solvable**. $\blacksquare$

**Example (the main theorem in the forward direction: $A_4$ is solvable).** The main theorem says $|G|=p^aq^b$ (at most two primes) $\Rightarrow G$ solvable. Take $A_4$ ($|A_4|=12=2^2\cdot3$, **two** primes): the theorem predicts it is solvable, and indeed there is a **normal series** whose successive quotients are all abelian:

$$
A_4\ \triangleright\ V_4\ \triangleright\ C_2\ \triangleright\ 1,\qquad A_4/V_4\cong C_3,\ \ V_4/C_2\cong C_2,\ \ C_2/1\cong C_2,
$$

where $V_4=\{e,(12)(34),(13)(24),(14)(23)\}$ is the Klein four-group, normal in $A_4$. The three quotients $C_3,C_2,C_2$ are all abelian $\Rightarrow A_4$ is **solvable** — exactly what the main theorem guarantees when $12=2^2\cdot3$ contains only two primes. (Compare the orders $60,168,\dots$ of those **non-abelian simple groups** of §4, which all contain $\ge3$ primes: simple and non-abelian $\Rightarrow$ not solvable $\Rightarrow$ by the contrapositive of the main theorem, the order cannot be $p^aq^b$. The two directions close up here.)

### 5. Closing: back to the "$\ge3$ primes" of §4

Take the **contrapositive**: a **non-abelian simple group** (not solvable, and cannot be broken apart) **cannot** be of the form $p^aq^b$, that is, its order **must be divisible by at least $3$ distinct primes**. So the two smallest non-abelian simple groups of EP3 sit exactly on the lower bound:

$$
60=2^2\cdot3\cdot5\ (A_5),\qquad 168=2^3\cdot3\cdot7\ (\mathrm{PSL}(2,7)),
$$

both with exactly $3$ primes, not one fewer. In EP3's "periodic table of non-abelian simple groups $<2000$", $\{60,168,360,504,660,1092\}$, each has $\ge3$ kinds of primes — Burnside's law of shape is now **proved in full from the toolbox**.

### 6. Boundary update

After Appendix 5, **the Burnside of §4 is upgraded from "honest outside citation" to "full proof"** (borrowing only the general toolbox of character theory, without citing the conclusion itself from outside). The honest outside citations remaining in the whole of §3/§4/§5 are then only three, of **pure field theory**: **Artin's theorem**, **the Kummer converse** [Lagrange resolvents], and **the normal closure of a radical extension is still radical**. The four physical/mathematical foundations (Appendix 2, representations of the rotation group · Appendix 3, Dirac spin ½ · Appendix 4, spin–statistics and Pauli · Appendix 5, Burnside) are now **all firmly tamped down**. $\blacksquare$

## Sources

- Ronan, *Symmetry and the Monster*, Ch5–7 (narrative skeleton)
- **Mathematics**: Dummit–Foote, *Abstract Algebra*, 3rd ed. (§3.2 cosets/Lagrange · §7–9 rings and fields · §14.3 finite fields · §19.2 Burnside p^aq^b); Carter, *Visual Group Theory* (SO(3)/intuition for representations)
- **Lie biography**: MacTutor [https://mathshistory.st-andrews.ac.uk/Biographies/Lie/](https://mathshistory.st-andrews.ac.uk/Biographies/Lie/) · Helgason "Sophus Lie, the mathematician" (MIT OCW 18.755) · review of the Stubhaug biography [https://plus.maths.org/content/mathematician-sophus-lie](https://plus.maths.org/content/mathematician-sophus-lie)
- **The spy affair / the Franco-Prussian War**: Quanta 2025-12 [https://www.quantamagazine.org/what-are-lie-groups-20251203/](https://www.quantamagazine.org/what-are-lie-groups-20251203/) · Franco-Prussian War [https://en.wikipedia.org/wiki/Franco-Prussian_War](https://en.wikipedia.org/wiki/Franco-Prussian_War)

### Image sources

- **Historical material · all public domain**: Sophus Lie · Galois (portrait at 15) · Lie 1888, *Theory of Transformation Groups* · Lie's 1893 preface · J. C. Dahl, *Winter at the Sognefjord* (1827) · hydrogen orbital density clouds (PoorLeno, 2008).
- **Portraits of the five who took up the baton**: Felix Klein (PD-1923) · Wilhelm Killing (photographed 1870, Atelier Aug. R. Rosenberg, Kunstbibliothek SMB) · Élie Cartan (PD-US) · Leonard Dickson (MacTutor History of Mathematics archive) · William Burnside (Copyrighted free use).
- **Paul Dirac**: © Nobel Foundation, 1933 (public domain).
- **Animations**: SO(2) rotation · Killing–Cartan periodic table · the E₈ wall · electron shells 2·6·10·14 · clock arithmetic — all original animations made for this film (Manim).
- **People**: Klein [https://www.britannica.com/biography/Felix-Klein](https://www.britannica.com/biography/Felix-Klein) · Killing [https://mathshistory.st-andrews.ac.uk/Biographies/Killing/](https://mathshistory.st-andrews.ac.uk/Biographies/Killing/) · Cartan [https://mathshistory.st-andrews.ac.uk/Biographies/Cartan/](https://mathshistory.st-andrews.ac.uk/Biographies/Cartan/) · Dickson [https://en.wikipedia.org/wiki/Leonard_Eugene_Dickson](https://en.wikipedia.org/wiki/Leonard_Eugene_Dickson) · Burnside [https://en.wikipedia.org/wiki/Burnside%27s_theorem](https://en.wikipedia.org/wiki/Burnside%27s_theorem)
- **Quotations**: Dieudonné 1974 (carried in both the Stubhaug biography pp.375-377 + Ronan's endnotes) · Brahmagupta (Colebrooke 1817 djvu) · Picard is actually Lie→Picard (Fritsche 1992 [https://www.heldermann-verlag.de/jlt/jlt02/FRITPL.PDF](https://www.heldermann-verlag.de/jlt/jlt02/FRITPL.PDF))
