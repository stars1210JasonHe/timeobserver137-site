---
title: "Symmetry and the Monster (2): The Eve of the Duel — Galois and the Equations That Cannot Be Solved"
date: 2026-06-16
lang: en
tags:
  - symmetry-monster
series: symmetry-monster
seriesOrder: 2
ghostSlug: symmetry-monster-ep2
---

> In scholarship, what matters is a touch of irreverence, like a ragged, barefoot wild child — one comes here not to worship what is known, but to question it. —— Jacob Bronowski, *The Ascent of Man* (
>
> *The Ascent of Man*
>
> )

The previous episode discussed how to **count** symmetries: turn an icosahedron about an axis so that after the turn it looks the same as if it had not been turned; there are 60 such motions in all, and together they form a group — an "atom of symmetry" that can no longer be taken apart, written $A_5$. It is simple, hard, indecomposable, like one cell in the periodic table of the chemical elements.

In this episode, the same atom will appear again in a completely different form. This time it no longer appears in solid geometry, but in an equation problem that troubled mathematicians for nearly three hundred years, and also in a genius who died in a duel at the age of twenty.

---

**🎬 The companion video for this episode is out (YouTube)**

<iframe width="200" height="113" src="https://www.youtube.com/embed/wJA6CY7dbHw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Symmetry and the Monster (2): The last night at 20, and a question spanning a thousand years"></iframe>

---

## Contents

- [Prologue: the eve of May 30, 1832](#prologue-the-eve-of-may-30-1832)
- [§1 A history of solving equations: the ladder of solutions by radicals](#1-a-history-of-solving-equations-the-ladder-of-solutions-by-radicals)
- [§2 Galois's turn: not solving for the roots, but looking at the roots' "symmetry"](#2-galoiss-turn-not-solving-for-the-roots-but-looking-at-the-roots-symmetry)
- [§3 This is a group again](#3-this-is-a-group-again)
- [A short lesson in group theory: taking one group completely apart](#a-short-lesson-in-group-theory-taking-one-group-completely-apart)
- [§4 A small golden-ratio exercise: computing a Galois group by hand](#4-a-small-golden-ratio-exercise-computing-a-galois-group-by-hand)
- [§5 The roots must exist, but cannot be written down](#5-the-roots-must-exist-but-cannot-be-written-down)
- [§6 The key to the quintic: that A₅ which cannot be broken apart](#6-the-key-to-the-quintic-that-a-which-cannot-be-broken-apart)
- [Glossary card: putting the "group-theory words" you just learned into your pocket](#glossary-card-putting-the-group-theory-words-you-just-learned-into-your-pocket)
- [Epilogue](#epilogue)

## Prologue: the eve of May 30, 1832

Early on the morning of May 30, 1832, the twenty-year-old Évariste [Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/) fell on a patch of open ground outside Paris. A duel, whose cause is unclear to this day and which is believed to have involved a woman, left him shot and abandoned by his companions; he was found by a passing peasant, and died the next day in the Cochin hospital.

What really makes later generations sigh with regret is **the night before**. The most widely circulated account — that on that night he wrote down his whole life's mathematics in one go — is in fact exaggerated: his core ideas had long since taken shape. What he really did that night was **hurry to make fair copies of manuscripts he had already written, add notes to them, and write a long letter to his close friend Auguste Chevalier**, entrusting him with handing over these papers. In the margin of a manuscript there remains a note that was later quoted countless times:

> There is something still to be completed in this proof.
>
> **I do not have the time.**
>
> (Il y a quelque chose à compléter dans cette démonstration. Je n'ai pas le temps.)

That stack of manuscripts lies quietly today in the library of the Institut de France in Paris. What it set out to answer was a question that had had humanity stuck for nearly three hundred years — and the answer Galois gave completely rewrote the meaning of "solving an equation".

![Portrait of the young Galois](/content/images/2026/06/galois_portrait_age15.jpg)

*Figure 1  Évariste Galois (1811–1832), a portrait from his youth drawn from memory by his brother. He died in a duel at twenty; the papers he left were not edited and published by Liouville until 1846, and from then on they rewrote algebra. (Public domain)*

![Galois's papers from the eve of the duel — in the margin he writes again and again "Je n'ai pas le temps" (I do not have the time).](/content/images/2026/06/galois_letter.jpg)

*Figure 2  Galois's papers from the eve of the duel — in the margin he writes again and again "Je n'ai pas le temps" (I do not have the time).*

---

## §1 A history of solving equations: the ladder of solutions by radicals

First, let us make the core question of this episode clear. A **solution by radicals** (radical solution) means **writing the roots as a closed-form formula** using only the equation's **coefficients**, the four arithmetic operations $+-\times\div$, and **taking roots** ($\sqrt{\ },\sqrt[3]{\ },\dots$). Whether such a "master key" can be written down is the thread that runs through the whole episode.

**Quadratics, everyone knows by heart.**

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.
$$

One square root is enough — the Babylonians had a geometric version of it four thousand years ago.

![The Babylonian clay tablet Plimpton 322 (about 1800 BC): humanity's history of solving quadratic equations is older than algebraic notation itself.](/content/images/2026/06/plimpton322.jpg)

*Figure 3  The Babylonian clay tablet Plimpton 322 (about 1800 BC): humanity's history of solving quadratic equations is older than algebraic notation itself.*

**Cubics, by contrast, had humanity stuck for more than a thousand years.** Any cubic equation can be squeezed by a shift into $x^3+px+q=0$. The formula Cardano gave in 1545 in the [*Ars Magna*](https://www.quantamagazine.org/the-scandalous-history-of-the-cubic-formula-20220630/) has this form:

$$
x=\sqrt[3]{-\frac{q}{2}+\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}}\;+\;\sqrt[3]{-\frac{q}{2}-\sqrt{\frac{q^{2}}{4}+\frac{p^{3}}{27}}}.
$$

The radicals begin to **nest layer by layer** — a square root burrows into a cube root. This formula did not appear out of nowhere; behind it is a very beautiful "degree-lowering" trick, which can be understood in four steps:

1. **Substitution**: set $x=u+v$, splitting one unknown into two. Substituting and rearranging gives $x^3-3uv\,x-(u^3+v^3)=0$.
2. **Matching coefficients**: for it to agree with $x^3+px+q=0$, we only need $3uv=-p$ (that is, $u^3v^3=-\tfrac{p^3}{27}$) and $u^3+v^3=-q$.
3. **Lowering the degree**: now $u^3$ and $v^3$ are two numbers "**whose sum is known and whose product is known**" — and recovering two numbers from their sum and product is exactly the job of a **quadratic equation**. One quadratic equation solves for $u^3,v^3$.
4. **Finishing with cube roots**: take a cube root of each, add them, $x=u+v$, and that is the formula above.

To sum up: the magic of solving the cubic is that the step $x=u+v$ lowers **one cubic problem into "one quadratic problem plus taking a cube root"**. This is exactly the "**taking apart layer by layer**" that §3 and §6 will talk about again and again — appearing concretely for the first time in history. It can be taken apart, so there is a formula.

**Only when we actually compute one does the problem really appear.** The formula alone is not enough. Take $x^3-15x-4=0$ as an example and substitute (here $p=-15,\ q=-4$). First compute the part inside the discriminant:

$$
\frac{q^2}{4}+\frac{p^3}{27}=\frac{16}{4}+\frac{-3375}{27}=4-125=-121.
$$

It is a **negative number**. So the formula requires computing $\sqrt{-121}=11\mathrm{i}$ — and so an imaginary number appears:

$$
x=\sqrt[3]{\,2+11\mathrm{i}\,}+\sqrt[3]{\,2-11\mathrm{i}\,}.
$$

Next, in 1572, Bombelli proposed the key step. He boldly supposed that $\sqrt[3]{2+11\mathrm{i}}$ is still a number of the form $a+b\mathrm{i}$, and worked out $a=2,\ b=1$, verified as follows:

$$
(2+\mathrm{i})^3=8+12\mathrm{i}+6\mathrm{i}^2+\mathrm{i}^3=8+12\mathrm{i}-6-\mathrm{i}=2+11\mathrm{i}.\ \checkmark
$$

In the same way the other cube root is $2-\mathrm{i}$. Adding the two:

$$
x=(2+\mathrm{i})+(2-\mathrm{i})=4.
$$

The imaginary parts $+\mathrm{i}$ and $-\mathrm{i}$ **cancel each other**, giving a real root $x=4$ (substitute back: $4^3-60-4=0$, correct). And the other two roots of this equation, $-2\pm\sqrt3$, **are also real numbers** — although all three roots are real, Cardano's formula **must pass through the imaginary number $\mathrm{i}$ to compute them**.

This is the so-called **casus irreducibilis (the irreducible case)**: complex numbers were not called in to deal with equations like $x^2+1=0$ that "obviously have no real roots" — they are passers-by who **appear in the middle of the road and are then cancelled** on the way to finding **real roots**. If one refuses to admit $\sqrt{-1}$, then even a real root like $x=4$ cannot be obtained along this path. The necessity of complex numbers became clear here for the first time.

![Bombelli's "Algebra" (L'Algebra, 1572) — he was the first to take seriously](/content/images/2026/06/bombelli_1572_recto.jpg)

*Figure 4  Bombelli's "Algebra" (L'Algebra, 1572) — he was the first to take "square roots of negative numbers" seriously, letting imaginary numbers appear legitimately in the cubic root formula and cancel each other.*

**And the attribution of this formula involves a complicated scholarly dispute.** The first person to crack the cubic equation did not leave a name behind. Scipione del Ferro (del Ferro, 1465–1526) of the University of Bologna worked out a method of solution for one class of cubic equations, but **did not publish it** — in that era, a secret method of solution was a weapon in public mathematical contests, and keeping it secret was sometimes of more practical benefit than publishing. After his death, the method was hidden in his notes and passed on to his son-in-law.

At almost the same time, Tartaglia ("the Stammerer", about 1500–1557) independently solved the cubic equation and won a sweeping victory in a public contest in 1535. The famous physician and mathematician Cardano came to him for instruction, and Tartaglia revealed the method to him in an obscure poem, **on condition that he swear an oath of secrecy**. Cardano kept the oath for several years, until in 1543 he went with his student Ferrari to Bologna and personally examined del Ferro's papers — it turned out that del Ferro had solved the same thing twenty years earlier. From this he concluded that the first credit belonged to del Ferro, and that his oath to Tartaglia no longer counted. So in 1545 the *Ars Magna* appeared, making the method public and crediting both del Ferro and Tartaglia.

![Cardano (Gerolamo Cardano, 1501–1576).](/content/images/2026/06/cardano.jpg)

*Figure 5  Cardano (Gerolamo Cardano, 1501–1576).*

![Tartaglia (Niccolò Tartaglia, about 1500–1557) — the attribution of the cubic root formula is a dispute in §1.](/content/images/2026/06/tartaglia.jpg)

*Figure 6  Tartaglia (Niccolò Tartaglia, about 1500–1557) — the attribution of the cubic root formula is a dispute in §1.*

![Title page of the first edition of the Ars Magna, 1545](/content/images/2026/06/cardano_arsmagna_1545_titlepage.jpg)

*Figure 7  Title page of the first edition of Cardano's "Ars Magna" (Ars Magna), Nuremberg, 1545, with Cardano's portrait medallion in the center. This is where the solution of the cubic equation — and humanity's first face-to-face encounter with complex numbers — was set in type. (Public domain)*

**The breakthrough for the quartic equation followed soon after.** This history also includes Ferrari: he **reduced** the quartic equation to a cubic "resolvent", solved that, and finished by taking two square roots. The complete formula is extremely lengthy, and the basic structure did not change — still rational operations on the coefficients, plus radicals nested layer within layer. (In Milan in 1548, Ferrari defeated Tartaglia in a public contest, and only then did this dispute come to an end.)

With each step up, the radicals nest deeper and the expression grows more cumbersome, **but the essence is always the same kind of thing**: radicals. So an entirely natural expectation was — the quintic should also have its formula, only longer.

**But at the quintic it got stuck.** From 1545 on, for **nearly three hundred years**, nobody could write down a formula by radicals for the quintic equation. The question thus became sharp: is the technique not good enough, not yet found? Or does this formula **not exist at all**?

To answer this question, one had to understand equations in a new way. And that person was Galois.

![The "ladder" of solutions by radicals: the quadratic needs only one square root, the cubic puts a cube root on top of a square root, the quartic one layer deeper — with each step up, the radical nests one more layer. But at the fifth step, this ladder breaks: the general quintic equation has no formula by radicals (1545 → 1832).](/content/images/2026/06/fig_radical_ladder.gif)

*Figure 8  The "ladder" of solutions by radicals: the quadratic needs only one square root, the cubic puts a cube root on top of a square root, the quartic one layer deeper — with each step up, the radical nests one more layer. But at the fifth step, this ladder breaks: the general quintic equation has no formula by radicals (1545 → 1832).*

---

## §2 Galois's turn: not solving for the roots, but looking at the roots' "symmetry"

> For Thales, the primary question was not "what do we know", but "how do we know". —— Aristotle

For more than two hundred years, everyone had been doing the same thing: **solving** for the roots and writing them as a formula. Galois, barely past twenty, raised a question that had rarely been posed head-on before — he did not solve for the roots; instead he stepped back and fixed his eyes on **the relations among** these roots.

Suppose an equation has $n$ roots. Galois's question was: can they be **renumbered and swapped with one another** in such a way that everything the equation knows — its coefficients, every rational relation they satisfy — **cannot detect** the swap? A swap that can slip by unnoticed in this way is a **symmetry** of this set of roots.

This idea is abstract, but we can start from the smallest examples.

**A pair of roots that cannot be told apart.** The two roots of $x^2-2=0$ are $\sqrt2$ and $-\sqrt2$. In the world of rational numbers, they are a pair of objects that are indistinguishable within the rationals: there is no equation with rational coefficients that holds for only one of them. The reason is direct — the minimal equation of $\sqrt2$ is just $x^2-2=0$, any polynomial with rational coefficients that has $\sqrt2$ as a root is divisible by $x^2-2$, and so it **must also have $-\sqrt2$ as a root**. Swap these two roots throughout, and the rational numbers **can never tell the difference between them** — they form a genuine symmetry.

"Cannot be told apart" does not mean that $\sqrt2$ and $-\sqrt2$ are the same in value — of course one is positive and one negative. What it means here is: if we stand only in **the algebraic world of the rational numbers** and only allow polynomial relations with rational coefficients, then these two roots **cannot be identified separately**. Any polynomial with rational coefficients that has $\sqrt2$ as a root must also have $-\sqrt2$ as a root; so swapping $\sqrt2$ and $-\sqrt2$ does not break any rational algebraic relation. It is in this sense that they are a pair of roots that "cannot be told apart".

**A pair of roots that can be told apart.** Change to $x^2-4=0$: the two roots $+2$ and $-2$ are both rational numbers, so **each has its own name**: the equation $x=2$ recognizes only $+2$. If we try to swap them, the difference shows at once. This pair of roots has **no** nontrivial symmetry — the equation has long since told them clearly apart.

Equations of the same shape, yet one has roots that "cannot be told apart" and the other roots that "can be told apart". The difference is not that the formula is hard to write, but lies in **the symmetry structure of the roots**: roots that cannot be distinguished by rational relations have richer symmetry; roots that can each already be identified by rational relations have very little symmetry. **Galois's insight is exactly this sentence** — whether an equation is hard, whether a formula can be written for it, is rooted in how complex its "symmetry of the roots" is, and not in the root-finding technique itself. He translated the two-thousand-year-old problem of "solving equations" into an entirely new problem: **studying the symmetry of the roots**.

When these unnoticed swaps are gathered together, an astonishing structure emerges. The next section will give this structure its formal name.

![Symmetry of the roots: x²-2 vs x²-4](/content/images/2026/06/fig_perm_s2.png)

*Figure 9  Can the equation "detect" that we swapped its two roots? Top: for $x^2-2$, the rationals cannot tell $\sqrt2$ and $-\sqrt2$ apart — swap them and the equation does not notice at all; this is a symmetry (✓). Bottom: for $x^2-4$, $+2$ and $-2$ are both rational, and the equation $x=2$ recognizes only $+2$ — swap them and it is exposed at once; no symmetry (✗). (The video version will animate this swap.)*

---

## §3 This is a group again

Collect the "relation-preserving swaps" from §2 and look at what laws they satisfy among themselves — **the same as when we discussed the symmetries of solids in EP1**: symmetries are motions, and motions come together into a group.

Write the laws out clearly in symbols ($\circ$ denotes the composition "first do the right one, then the left one", and $e$ denotes "do nothing"):

- **Closure**: for any $g,h$, $g\circ h$ is still a legitimate swap. Doing two relation-preserving swaps one after the other still preserves the relations.
- **Associativity**: $(g\circ h)\circ k=g\circ(h\circ k)$. This is a basic property of function composition, so it holds automatically.
- **Identity element**: there exists $e$ such that for any $g$, $e\circ g=g\circ e=g$. That is "move nothing".
- **Inverse element**: every $g$ has a $g^{-1}$ such that $g\circ g^{-1}=g^{-1}\circ g=e$. Every step can be undone the way it came.

![The definition of a group: a set G with an operation ∘ satisfying closure, associativity, an identity element and inverse elements — just these four.](/content/images/2026/06/fig_group_axioms.png)

*Figure 10  The definition of a group: a set G with an operation ∘ satisfying closure, associativity, an identity element and inverse elements — just these four.*

**What exactly are $g,h$ here?** Do not be intimidated by the abstract symbols — $g,h$ are just two **concrete** legitimate operations. Take $x^2-2=0$ from §2: it has only two legitimate swaps, "exchange $\sqrt2\leftrightarrow-\sqrt2$" (call it $\sigma$) and "move nothing" ($e$). On them the axioms are visible — $\sigma\circ\sigma=e$ (swap twice and you are back where you started, so the inverse of $\sigma$ is itself), $\sigma\circ e=\sigma$ (follow it with a "move nothing" and it is still a legitimate swap: closure). It is the same with more elements: take a cube, $g=$ a turn of $90^\circ$ about the vertical axis, $h=$ another turn of $90^\circ$ about the same axis; then $g\circ h=$ a turn of $180^\circ$ (still a rotation: closure), and the inverse of $g$ is a turn of $-90^\circ$. **The axioms are not empty words; this is how they run on concrete motions** — the short lesson below will carry this through to the end on the equilateral triangle.

These four were not tailor-made for equations; they apply everywhere. The same set of axioms, three forms of expression:

| Group | Elements | Operation $\circ$ | Identity $e$ | Inverse $g^{-1}$ |
| --- | --- | --- | --- | --- |
| Integer addition $(\mathbb{Z},+)$ | all integers | addition | $0$ | $-g$ |
| Rotations of the cube (EP1) | $24$ rotations | turn one after another | no turn | turn back the other way |
| $\mathbb{Z}/2$ (used in §4) | $\{\text{stay},\ \text{swap}\}$ | do one after another | stay | itself |

Run the axioms once on each row, and the "forms of expression" are no longer an empty table:

- **Integer addition $(\mathbb{Z},+)$**: $3\circ5=3+5=8$ (closure: the sum is still an integer); $3\circ0=3$ (identity element $e=0$); $3\circ(-3)=0$ (inverse element $g^{-1}=-g$).
- **Rotations of the cube**: a turn of $90^\circ$ about the vertical axis followed by another $90^\circ$ $=$ a turn of $180^\circ$ (closure: still one of the $24$ rotations); "no turn" $=e$; the inverse of a turn of $90^\circ$ $=$ a turn of $-90^\circ$ (that is, $270^\circ$).
- **$\mathbb{Z}/2$** (think of it as a **switch**: only two states, "stay" and "flip once"): flip once $\circ$ flip once $=$ stay (flip twice in a row and it is back as it was, so "flip once" is its own inverse, and closure holds too); "stay" is the identity element $e$.

The objects in the three examples are worlds apart, yet the three rules "closure / identity / inverse" hold on each of them just the same — this is exactly what the next sentence means by "it grasps structure, not specific things".

Addition of numbers, rotations of solids, swaps of the roots of equations — the objects differ greatly, yet they share the same group structure. This is exactly the power of group theory: **what it grasps is structure, not specific things**.

So the group formed by "all the legitimate swaps of an equation's roots" is called the equation's **Galois group**.

**A key point: not every exchange of roots is legitimate.** Rearranging $n$ roots arbitrarily can be done in $n!$ ways, but the Galois group takes in only those that "preserve all rational relations" — it is a **subgroup** of the group of all rearrangements $S_n$, and often much smaller. For example, for $(x^2-2)(x^2-3)=0$ and its four roots $\pm\sqrt2,\pm\sqrt3$, you **cannot** exchange $\sqrt2$ for $\sqrt3$ ($\sqrt2$ satisfies $x^2=2$ and $\sqrt3$ satisfies $x^2=3$; exchanging them breaks a rational relation) — there are only $2\times2=4$ legitimate permutations, not $4!=24$. **The "symmetry" of an equation is exactly the subgroup carved out by the constraints of rational relations; how large it is and what structure it has is the measure of how hard the equation is.**

**Let us state the definition a little more precisely.** The phrase from §2, "swaps that preserve all rational relations among the roots", written out rigorously, is this: the roots of an equation all live in some **number field** ($\mathbb{Q}(\sqrt5)$ in the next section is one example); on this number field, the bijections that **fix every rational number and preserve $+-\times\div$** are called **field automorphisms**. The group these field automorphisms form under composition is the equation's Galois group — each of its elements carries "one set of roots" to "another set of roots that equally satisfies all the rational relations".

Galois's revolution, condensed into one sentence:

> **Whether an equation can be solved by radicals does not depend on formula technique, but on the "structure" of its Galois group — on whether this group can be "taken apart layer by layer".**

But up to this point, these are all still abstract definitions. Before really computing a Galois group, let us first get thoroughly familiar with the language of "groups" — in the short lesson below, we take a concrete group completely apart and see all the basic concepts clearly in one go. Once ready, we come back to compute equations.

---

## A short lesson in group theory: taking one group completely apart

The next section is fairly long, but it is the foundation of the whole series. No background in group theory is assumed here; instead a direct method is used: put a **smallest** group entirely on the table and dissect it item by item, so that every abstract concept is computed directly in this example, rather than only given an abstract definition. The object of dissection is the symmetry group of the equilateral triangle (it is also, later on, exactly the group of the cubic equation).

**Step one: what "motions" are in this group.** Put an equilateral triangle on the table and label its three vertices $1,2,3$. A "symmetry" is an operation that **after it is done looks the same as if it had not been done**. Enumerate them one by one: there are exactly $6$; below, for each motion, it is written out clearly "which vertex is sent where":

| Symbol | Motion | How the vertices move |
| --- | --- | --- |
| $e$ | stay | $1,2,3$ all unchanged |
| $r$ | turn $120^\circ$ counterclockwise | $1\to2,\ 2\to3,\ 3\to1$ |
| $r^2$ | turn $240^\circ$ counterclockwise | $1\to3,\ 2\to1,\ 3\to2$ |
| $a$ | flip about the axis "through vertex $1$" | $1$ stays, $2\leftrightarrow3$ |
| $b$ | flip about the axis "through vertex $2$" | $2$ stays, $1\leftrightarrow3$ |
| $c$ | flip about the axis "through vertex $3$" | $3$ stays, $1\leftrightarrow2$ |

This table will be used again and again below; remember it.

![The 6 symmetries of the equilateral triangle](/content/images/2026/06/fig_s3_triangle.png)

*Figure 11  The 6 symmetries drawn out. Left: the three axes of symmetry — $a$ through vertex $1$, $b$ through vertex $2$, $c$ through vertex $3$ (each flip fixes the vertex it passes through and swaps the other two) + the rotation $r$ (counterclockwise $120^\circ$). Right: for each symmetry in turn, a drawing of "which label is sent where" (red = a vertex whose position changed).*

**Step two: how two motions compose.** The group's operation is "do one, then do another". The method for computing a composition is simple: track, vertex by vertex, where each vertex goes under the two motions. For example, compute "first turn $r$, then flip $a$", written $a\circ r$ (**convention: the one on the right is done first**). Track vertex by vertex:

- Vertex $1$: first $r$ sends it to $2$; then $a$ sends $2$ to $3$. $1$ finally lands on **$3$**.
- Vertex $2$: first $r$ sends it to $3$; then $a$ sends $3$ to $2$. $2$ lands back on **$2$**.
- Vertex $3$: first $r$ sends it to $1$; then $a$ keeps $1$ where it is. $3$ lands on **$1$**.

The result is "$1\leftrightarrow3$, $2$ stays" — comparing with the table above, this is exactly the flip $b$. So

$$
a\circ r=b.
$$

**The order of the motions is crucial.** Compute the other way round, "first flip $a$, then turn $r$" ($r\circ a$), tracking in the same way: - Vertex $1$: $a$ keeps $1$, then $r$ sends $1$ to $2$ — it lands on $2$. - Vertex $2$: $a$ sends $2$ to $3$, $r$ sends $3$ to $1$ — it lands on $1$. - Vertex $3$: $a$ sends $3$ to $2$, $r$ sends $2$ to $3$ — it lands on $3$.

The result is "$1\leftrightarrow2$, $3$ stays" $=c$. So

$$
a\circ r=b,\qquad r\circ a=c,\qquad b\ne c.
$$

**Turning first and then flipping, versus flipping first and then turning, lands in different places** — this is "symmetry motions cannot have their order changed at will", exactly what the phone example in EP1 was about.

Now look at the composition of two rotations: $r\circ r$ (turning $120^\circ$ twice). Vertex $1\to2\to3$, $2\to3\to1$, $3\to1\to2$, that is, "$1\to3,2\to1,3\to2$", which is exactly $r^2$. So $r\circ r=r^2$ (two turns of $120^\circ$ are a turn of $240^\circ$, as intuition says). With this method of computation, we can go on to analyze this group.

**List all $6\times6=36$ compositions clearly at once.** Since we can compute the composition of any two motions, let us fill them into a **multiplication table** (Cayley table). Convention: row $X$, column $Y$ holds $X\circ Y$ (first do $Y$, then do $X$).

| $\circ$ | $e$ | $r$ | $r^2$ | $a$ | $b$ | $c$ |
| --- | --- | --- | --- | --- | --- | --- |
| **$e$** | $e$ | $r$ | $r^2$ | $a$ | $b$ | $c$ |
| **$r$** | $r$ | $r^2$ | $e$ | $c$ | $a$ | $b$ |
| **$r^2$** | $r^2$ | $e$ | $r$ | $b$ | $c$ | $a$ |
| **$a$** | $a$ | $b$ | $c$ | $e$ | $r$ | $r^2$ |
| **$b$** | $b$ | $c$ | $a$ | $r^2$ | $e$ | $r$ |
| **$c$** | $c$ | $a$ | $b$ | $r$ | $r^2$ | $e$ |

This one table holds **all the information** of the whole group in one place, and three things are visible at a glance: (1) **each element appears exactly once in every row and every column** (like sudoku, a Latin square) — this is a hard feature of a "group": every motion is invertible, so no two inputs can collide on the same output; (2) **the table is not symmetric about the main diagonal**: row $a$, column $r$ is $b$, but row $r$, column $a$ is $c$ ($a\circ r=b\ne c=r\circ a$) — this is "non-commutative", visible to the naked eye; (3) **the top-left $3\times3$ (the block of $e,r,r^2$) is closed in itself**: the results all fall within $\{e,r,r^2\}$ — this is exactly the subgroup $A_3$ to be discussed below. Each of items ② to ⑦ below can be read directly off this table.

![The S3 multiplication table, color-block version](/content/images/2026/06/fig_cayley_s3.png)

*Figure 12  The $S_3$ multiplication table after coloring: the rotations $e,r,r^2$ in a family of cool greens, the flips $a,b,c$ in a family of warm colors. The top-left $3\times3$ outlined in gold is the subgroup $A_3$ (the three rotations form a whole of their own); the two cells $a\circ r=b$ and $r\circ a=c$ fall in different colors (red boxes) — the table being "not symmetric" = the group being "non-commutative", visible at a glance.*

**① The order of an element — how many times a motion "is repeated before it returns to the start".** Because there are only finitely many motions and each one can be undone, any motion done over and over will sooner or later come back to $e$; that **smallest number of times** is its **order**. Compute it now:

- $r$: turn once, twice, three times, exactly $360^\circ$ and back as it was, $r\circ r\circ r=e$ — **order $3$** ($r^2$ likewise has order $3$).
- $a$: flip once, flip once more and it is flipped back ($a\circ a$: $a$ exchanges $2,3$, exchange them once more and they are exchanged back, $=e$) — **order $2$** (the same for $b,c$).
- $e$: it does not move to begin with — **order $1$**.

**② Subgroups — small cliques in a group that "themselves form a group".** Now ask: which subsets of $S_3$, taken out alone and with operations only inside them, are already a group by themselves (containing $e$, the composition of any two still falling inside, and the inverse of each also inside)? Try them one by one:

- $\{e,r,r^2\}$: composing two rotations is still a rotation (we just computed $r\circ r=r^2$; also, for example, $r\circ r^2=r^3=e$, which is inside too), and the inverse of each rotation is also a rotation (the inverse of $r$ is $r^2$, because $r\circ r^2=e$) — **it forms a group by itself**, written $A_3$.
- $\{e,a\}$: just two elements, $a\circ a=e$ is inside, the inverse of $a$ is itself — **also a group**; likewise $\{e,b\}$ and $\{e,c\}$ each count as one.
- Add to these the smallest, $\{e\}$, and the largest, the whole of $S_3$.

Counting up, $S_3$ has **$6$ subgroups** in all, of sizes $1,2,2,2,3,6$. (This kind of structure already appeared in EP1: the $24$ rotations of the cube are the subgroup of "turning only, no flipping" among all its $48$ symmetries.)

**③ Cyclic groups and generators — groups that can be "turned out of one motion".** Consider $A_3=\{e,r,r^2\}$: the whole of it is "turned out" by doing this **one element** $r$ over and over. **List out all** the powers of $r$:

$$
r^0=e,\quad r^1=r,\quad r^2=r^2,\quad r^3=r\circ r\circ r=e\ (\text{back to the start, a cycle}),\quad r^4=r,\ \dots
$$

One cycle every three steps, forever going round only inside $\{e,r,r^2\}$. A group of this kind, in which "a single motion multiplied by itself over and over turns out everything", is called a **cyclic group**, and that motion is called a **generator**. $A_3$ is a cyclic group, written $\mathbb{Z}/3$. Its own multiplication table (just the top-left block of the big table) is small and regular:

| $\circ$ | $e$ | $r$ | $r^2$ |
| --- | --- | --- | --- |
| **$e$** | $e$ | $r$ | $r^2$ |
| **$r$** | $r$ | $r^2$ | $e$ |
| **$r^2$** | $r^2$ | $e$ | $r$ |

An even smaller example is also at hand: the subgroup $\{e,a\}$ is also a cyclic group — generated by the single element, the flip $a$; its list of powers is all $a^0=e,\ a^1=a,\ a^2=a\circ a=e$ (do it twice and it is back at the start), and it is $\mathbb{Z}/2$:

| $\circ$ | $e$ | $a$ |
| --- | --- | --- |
| **$e$** | $e$ | $a$ |
| **$a$** | $a$ | $e$ |

Cyclic groups are the simplest class of groups, and they are always commutative ($g^i\circ g^j=g^{i+j}=g^j\circ g^i$). The $\{\mathrm{id},\sigma\}$ of §4, the $A_3$ in §6, and even the $\mathbb{Z}/12$ of a clock are all cyclic groups.

![Cyclic groups](/content/images/2026/06/fig_cyclic.png)

*Figure 13  Cyclic groups. Left: $\mathbb{Z}/3$ drawn as a ring of three nodes $e\to r\to r^2\to e$ (each step is $\circ r$); one generator $r$ goes round once. Middle: the products of $\mathbb{Z}/3$, all $9$ of them ($r\circ r^2=r^3=e$ wraps around). Right: the smallest cyclic group $\mathbb{Z}/2=\{e,\sigma\}$.*

**④ Cosets and Lagrange's theorem — why a subgroup always "divides" the big group.** Notice that the sizes of the subgroups above, $1,2,3,6$, are all divisors of $6$, and this is not a coincidence. Look at the subgroup $A_3$ ($3$ elements) and shift it as a whole to another coset — multiply each of its elements by $a$:

$$
a\circ A_3=\{\,a\circ e,\ \ a\circ r,\ \ a\circ r^2\,\}.
$$

Compute them one by one (all with the method of step two): - $a\circ e=a$; - $a\circ r=b$ (just tracked in step two); - $a\circ r^2$: vertex $1\to(r^2)\to3\to(a)\to2$, $2\to1\to1$, $3\to2\to3$, giving "$1\leftrightarrow2$, $3$ stays" $=c$.

So $a\circ A_3=\{a,b,c\}$. Now the whole of $S_3$ is cut into two blocks: $A_3=\{e,r,r^2\}$ (the three rotations) and $a\circ A_3=\{a,b,c\}$ (the three flips). These two blocks are called the **cosets** of $A_3$; each block is as large as $A_3$ ($3$ elements), and together they **fill the whole of $S_3$ with no overlap and nothing left out** ($3+3=6$). So the size of the big group $=$ the number of blocks $\times$ the size of the subgroup $=2\times3=6$. This is **Lagrange's theorem**: the size of any subgroup must divide the size of the whole group. (In EP1, the $24$ rotations dividing the $48$ full symmetries is the same thing.)

> **Summary.**
>
> By now we have three basic tools:
>
> **counting the order of a motion**
>
> (how many repetitions to return to the start),
>
> **finding all the subgroups of a group**, and using
>
> **Lagrange's theorem**
>
> to judge how large a subgroup can be. The next three steps will revolve around two questions — ⑤ which kind of subgroup can be "shrunk away as a whole block", and ⑥ what is left after the shrinking.

**⑤ Normal subgroups vs ordinary subgroups — whether it can be "shrunk away as a whole block".** There is one more key distinction among subgroups, and it is exactly the key to taking equations apart later. Back to $A_3$: just now, multiplying by $a$ from the **left** gave $a\circ A_3=\{a,b,c\}$. What about multiplying by $a$ from the **right**?

$$
A_3\circ a=\{\,e\circ a,\ \ r\circ a,\ \ r^2\circ a\,\}.
$$

Compute them one by one: - $e\circ a=a$; - $r\circ a=c$ (tracked in step two); - $r^2\circ a$: vertex $1\to(a)\to1\to(r^2)\to3$, $2\to3\to2$, $3\to2\to1$, giving "$1\leftrightarrow3$, $2$ stays" $=b$.

So $A_3\circ a=\{a,c,b\}=\{a,b,c\}$. **Multiplying on the left and on the right gives the same block!** It is so for every element of $S_3$ — a subgroup of this kind, "the same whether shifted from the left or the right", is called a **normal subgroup**, written $A_3\trianglelefteq S_3$.

But not every subgroup has this property. Look at $\{e,a\}$: - multiplying by $r$ on the left: $r\circ\{e,a\}=\{\,r\circ e,\ r\circ a\,\}=\{r,\ c\}$ (because $r\circ a=c$); - multiplying by $r$ on the right: $\{e,a\}\circ r=\{\,e\circ r,\ a\circ r\,\}=\{r,\ b\}$ (because $a\circ r=b$).

$\{r,c\}\ne\{r,b\}$ — **left and right are not the same!** (The root of it is that $r\circ a=c\ne b=a\circ r$ from step two.) So $\{e,a\}$ is **not** a normal subgroup. In one sentence: **"normal" means the kind of subgroup in which shifting from the left or the right shows no difference, and which can therefore be consistently compressed as a whole** — the next item will use this.

**⑥ Quotient groups — "treating a normal subgroup as a new unit".** Since $A_3$ is normal (the "same whether shifted from the left or the right" of ⑤ is exactly the pass needed here — only if left and right agree does shrinking it as a whole block into a point not contradict itself), let us simply regard that whole set $\{e,r,r^2\}$ as one new thing, called "even", and the other block $\{a,b,c\}$ as "odd". These two new objects can also be operated on, and the results are well defined (it does not matter which representative in a block is picked):

- even $\circ$ even $=$ even: composing two rotations is still a rotation (for example $r\circ r=r^2$, still in $A_3$).
- even $\circ$ odd $=$ odd: a rotation followed by a flip is still a flip (for example $r\circ a=c$, falling in $\{a,b,c\}$).
- odd $\circ$ odd $=$ even: flip twice and it has turned back again. Let us compute one to see — $a\circ b$: vertex $1\to(b)\to3\to(a)\to2$, $2\to2\to3$, $3\to1\to1$, giving "$1\to2,2\to3,3\to1$" $=r$, and indeed it falls back into the "even" block.

So the two new things "even / odd" form by themselves a two-element group, which is exactly $\mathbb{Z}/2$. This "group left after a normal subgroup is shrunk as a whole block into a point" is called a **quotient group**, written $S_3/A_3\cong\mathbb{Z}/2$, of size $=6/3=2$. **Remember this action of "shrinking away one layer as a whole block" — taking apart the quintic equation in §6 relies on exactly it.**

**⑦ Homomorphisms and isomorphisms — "carrying structure" between groups.** The "even/odd" above actually defines a map: attach a sign to each motion, $+1$ for rotations and $-1$ for flips (written $\operatorname{sgn}$). It has a beautiful property: the sign of the composition of two motions is exactly equal to the product of their signs —

$$
\text{even}\circ\text{even}=\text{even}\ \leftrightarrow\ (+1)(+1)=+1,\quad \text{odd}\circ\text{odd}=\text{even}\ \leftrightarrow\ (-1)(-1)=+1,\quad \text{even}\circ\text{odd}=\text{odd}\ \leftrightarrow\ (+1)(-1)=-1.
$$

These relations agree completely. A map of this kind that "preserves the operation" is called a **homomorphism**. If a homomorphism is also a one-to-one correspondence and does not squash two things into one, it is called an **isomorphism** (symbol $\cong$): apart from different names, the two groups have exactly the same skeleton, like the same person in a different set of clothes. (In §6 we will see that the rotation group of the icosahedron and $A_5$ are in exactly this relation.)

**Finally, a generalization.** First, one more name: the "motions" spoken of above have the formal name **permutation** — putting several things into a new order; the simplest permutation is called a **transposition** (swap), which exchanges only two things and leaves the rest unmoved (the triangle's flip $a$ is the transposition of vertices $2,3$). With this pair of words, everything we felt out above on $S_3$, this group of $3$ vertices, holds equally when generalized to $n$ objects: the group formed by **all rearrangements** of $n$ things is called the **symmetric group $S_n$**, of size $|S_n|=n!$ (the first thing has $n$ places to go, the second $n-1$… multiplied together); among them the "even permutations" — those that, like the rotations, are put together from an **even** number of "pairwise swaps" — form the [**alternating group**](https://en.wikipedia.org/wiki/Alternating_group)** $A_n$**, which takes up exactly half, $|A_n|=n!/2$, and is always normal.

(A question may arise here: the same rearrangement can be broken into "pairwise swaps" in more than one way; could its parity be undetermined? No. Form for the $n$ roots a **discriminant polynomial** $\Delta=\prod_{i<j}(x_i-x_j)$, multiplying together all the differences "who minus whom". **Any single pairwise swap changes the sign of $\Delta$ exactly once** (the difference of the swapped pair changes sign, and the rest cancel in pairs). So however it is broken up, whether it ends as $+\Delta$ or $-\Delta$ is uniquely determined — parity is therefore a label that cannot be changed: $+\Delta$ even, $-\Delta$ odd. Incidentally, this $\Delta$ is the very same thing as the discriminant of the cubic equation in §1 (discriminant $=\Delta^2$) — the Cardano discriminant of §1 and the parity here are two faces of the same discriminant polynomial.)

$S_3$ is the small sample with $n=3$; the protagonists of §6 are, with $n=5$, $S_5$ and the $A_5$ hidden inside it.

---

## §4 A small golden-ratio exercise: computing a Galois group by hand

Below, the abstract definition is brought down to an equation that can be checked directly: $x^2-x-1=0$.

**Finding the roots.** Applying the root formula, the two roots are

$$
\varphi=\frac{1+\sqrt5}{2}\approx1.618,\qquad \psi=\frac{1-\sqrt5}{2}\approx-0.618.
$$

The $\varphi$ here is exactly the [**golden ratio**](https://plus.maths.org/content/golden-ratio) — the number that appeared again and again in the icosahedron's vertex coordinates $(0,\pm1,\pm\varphi)$ in EP1. Within the series, the two connect here.

**The rational relations the two roots satisfy** (can be checked directly):

$$
\varphi+\psi=1,\qquad \varphi\cdot\psi=-1,\qquad \psi=1-\varphi=-\tfrac1\varphi,\qquad \varphi^2=\varphi+1.
$$

The **sum** and the **product** of the two roots are both rational numbers — this is not a coincidence; they are exactly the coefficients of $x^2-x-1$ (Vieta's formulas).

**Can they be distinguished by the rational numbers?** The difference of the two roots is $\varphi-\psi=\sqrt5$, an **irrational number**. The only handle for distinguishing them is the sign of $\sqrt5$. And "replacing $\sqrt5$ with $-\sqrt5$" swaps $\varphi$ and $\psi$ exactly.

**First, look clearly at the background structure: what is the number field $\mathbb{Q}(\sqrt5)$?** Put all the rational numbers together with one new number $\sqrt5$, and require **closure** under the four arithmetic operations (the results of addition, subtraction, multiplication and division are not allowed to escape); the **smallest** set of numbers that can be obtained is

$$
\mathbb{Q}(\sqrt5)=\{\,a+b\sqrt5 \mid a,b\in\mathbb{Q}\,\}.
$$

It is indeed closed: adding obviously still gives this shape; in multiplying, $\sqrt5\cdot\sqrt5=5$ comes back to a rational number, and the result is still $a'+b'\sqrt5$; division, after rationalizing the denominator, cannot escape either. $\varphi$ and $\psi$ both live in this number field — it is the smallest number field "just big enough to hold the roots of this equation".

**What is a field automorphism?** A bijection that maps a number field to **itself**, **fixes every rational number**, and **preserves $+-\times\div$**. In plain words: on the condition that **not a single rational number moves and all the relations of addition, subtraction, multiplication and division hold exactly as before**, it neatly carries certain **irrational numbers** over to other numbers — the $\sigma$ to be verified below is just like this: it carries $\sqrt5$ to $-\sqrt5$ (while every rational number stays perfectly still). Precisely because it keeps all rational relations intact in one stroke, every "fact that can be written with rational coefficients" remains true before and after it acts. The one we want to verify,

$$
\sigma(a+b\sqrt5)=a-b\sqrt5
$$

is just such a pair of glasses: it only swaps the plus and minus signboards of $\sqrt5$, and not one rational number moves. Verify item by item that it is a field automorphism:

1. **It fixes the rational numbers**: when $b=0$, $\sigma(a)=a$; rational coefficients are left untouched.
2. **It preserves addition**: $\sigma\big((a+b\sqrt5)+(c+d\sqrt5)\big)=(a+c)-(b+d)\sqrt5$, which is exactly $\sigma(a+b\sqrt5)+\sigma(c+d\sqrt5)$.
3. **It preserves multiplication**: $(a+b\sqrt5)(c+d\sqrt5)=(ac+5bd)+(ad+bc)\sqrt5$; applying $\sigma$ gives $(ac+5bd)-(ad+bc)\sqrt5$; on the other side, expanding $(a-b\sqrt5)(c-d\sqrt5)$ is **exactly equal**.

Since $\sigma$ fixes all the rational numbers and preserves addition, subtraction, multiplication and division, it **preserves all rational relations**; and it sends $\varphi$ to $\psi$ and $\psi$ back to $\varphi$. This is exactly the "legitimate swap" spoken of in §2.

**Now count clearly.** The roots of this equation have only two legitimate states: **stay** (the identity $\mathrm{id}$), and **swap $\varphi\leftrightarrow\psi$** (which is $\sigma$). And $\sigma$ done twice returns to the original position ($\sigma^2=\mathrm{id}$). Two elements, and the nontrivial element restores everything when applied twice — this group is $\mathbb{Z}/2$.

**Why only these two?** Any field automorphism $\tau$ that fixes the rational numbers must send $\sqrt5$ to a number that "satisfies the same rational equation as $\sqrt5$". $\sqrt5$ satisfies $x^2=5$; applying $\tau$ to both sides of the equation gives $\tau(\sqrt5)^2=5$, so $\tau(\sqrt5)$ **can only be $\sqrt5$ or $-\sqrt5$** — there is no third possibility. And every number in $\mathbb{Q}(\sqrt5)$ is $a+b\sqrt5$; once the destination of $\sqrt5$ is fixed, the whole of $\tau$ is uniquely determined. So there are exactly two legitimate automorphisms — "only $\mathbb{Z}/2$" is not a coincidence that came out of counting; it is forced by "an automorphism can only send a root to its conjugate roots".

Incidentally: all the symmetry of the equation $x^2-x-1$ is just this one two-element symmetry $\mathbb{Z}/2$ (we saw it in the short lesson above: the smallest cyclic group).

**So we have accomplished one thing: computing a Galois group from beginning to end.** Look back at the process of this section — first mark out the number field $\mathbb{Q}(\sqrt5)$ in which the roots lie, then **find all** its field automorphisms (only two, $\mathrm{id}$ and $\sigma$), verify that they really preserve all rational relations, and finally count that they form $\mathbb{Z}/2$. Written in the standard notation of Galois theory, this is

$$
\operatorname{Gal}\!\big(\mathbb{Q}(\sqrt5)/\mathbb{Q}\big)=\mathbb{Z}/2.
$$

This is the **first landing** of the abstract definition of §3: the Galois group is no longer a noun, but a **concrete group with only two elements that we computed by our own hands**. For an equation as simple as $x^2-x-1$, its symmetry is only this one pair — **this "small-scale" example is worth remembering**. Because for the quintic equation of §6, the symmetries will be so many and so hard that they can no longer be computed out or taken apart.

> (Incidentally: one often hears that Leonardo da Vinci and the Parthenon "deliberately used the golden ratio" — this is mostly a later attribution, lacking first-hand evidence, and the popular-science writer Livio systematically debunked it in 2002. Here we use only the hardest identity of $\varphi$: it is the positive root of $x^2-x-1=0$.)

![The Galois group of the golden ratio: the only nontrivial symmetry is σ (flipping √5 to −√5, that is, φ↔ψ). It preserves addition and multiplication, so {e, σ} forms a group, which is exactly ℤ/2 — this is the Galois group of φ.](/content/images/2026/06/fig_galois_phi.gif)

*Figure 14  The Galois group of the golden ratio: the only nontrivial symmetry is σ (flipping √5 to −√5, that is, φ↔ψ). It preserves addition and multiplication, so {e, σ} forms a group, which is exactly ℤ/2 — this is the Galois group of φ.*

---

## §5 The roots must exist, but cannot be written down

The most important distinction in this episode has to be explained with the [**fundamental theorem of algebra**](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra) (Fundamental Theorem of Algebra):

> In the field of complex numbers $\mathbb{C}$,
>
> **every**
>
> polynomial equation of degree $n$ has exactly $n$ roots (counted with multiplicity).

It is brought up in order to separate two **entirely different** things:

|  | Meaning | The case of the quintic equation |
| --- | --- | --- |
| **The roots exist** | whether there are roots in $\mathbb{C}$ | **Yes**, exactly 5 complex roots, which can also be computed numerically to any precision |
| **The roots can be written down** | whether they can be expressed in closed form by a formula in radicals | in general **no** |

When Galois and Abel said the quintic equation "has no solution", they **always meant the second thing** — it cannot be written as a formula in radicals; it **never** meant the first thing, "there are no roots". This is the most common misunderstanding:

> "The quintic equation has no solution" $\neq$ "the quintic equation has no roots".

It has a full set of 5 complex roots; these roots can be plotted on the complex plane, and can also be computed numerically to any precision — it is only that there is no **master key** built out of "taking roots" that can derive them step by step from the coefficients. For example: the circle constant $\pi$ really exists, yet it is not a root of any equation with integer coefficients (it is a transcendental number). "Existing" and "being writable with some particular tool" were always two different things.

**Who proved this theorem?** Its first proof was given by [**Gauss**](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss) **in his doctoral dissertation of 1799** (University of Helmstedt) — he was only 22 that year. (Strictly speaking, this 1799 proof leans toward geometry and leaves a topological gap, which was only filled by Ostrowski in 1920; the first fully rigorous proof is usually credited to Argand in 1806. Gauss himself was very fond of it, and proved it four times in his life.) But in any case, it was Gauss who made "the roots must exist" a cornerstone of mathematics — and it is exactly this conclusion that forced "the formula cannot be written down" into a question that had to be answered head-on.

![The 5 roots of x^5-x-1](/content/images/2026/06/fig_roots5.png)

*Figure 15  The 5 roots of $x^5-x-1=0$ plotted on the complex plane: $1$ real root (red, $\approx1.167$) + $2$ pairs of conjugate complex roots (green). All five roots are there — they can be drawn and computed numerically to any precision; it is only that no formula built from "taking roots" can write them down from the coefficients. This is exactly the equation of §6 with "group $=S_5$, core $=A_5$".*

---

## §6 The key to the quintic: that A₅ which cannot be broken apart

Finally, we draw back to the main line: **why is the quintic fundamentally different from the quadratic, cubic and quartic?**

Back to the closing line of §3 — whether an equation can be solved by radicals depends on whether its Galois group can be "taken apart layer by layer". This sentence can now be said very precisely.

The Galois groups of quadratic, cubic and quartic equations are all **solvable groups** (solvable). First look at the protagonist here at the quintic: the Galois group of the general quintic equation is $S_5$ — all $120$ rearrangements of the five roots (the $S_n$ from the short lesson above, here with $n=5$); "the half of it" inside it is the $A_5$ made up of the even permutations, $60$ in all.

**What does an "even permutation" look like concretely? Try one with 5 roots.** Let the five roots be $r_1,r_2,r_3,r_4,r_5$. One of the simplest nontrivial even permutations is the **3-cycle** $(r_1\,r_2\,r_3)$:

$$
r_1\to r_2,\quad r_2\to r_3,\quad r_3\to r_1,\quad r_4,r_5\ \text{stay}.
$$

Why is it "even"? Because it can be broken into an **even number** of pairwise swaps: $(r_1\,r_2\,r_3)=(r_1\,r_2)\circ(r_2\,r_3)$ (two). A bit bigger, the **5-cycle** $(r_1\,r_2\,r_3\,r_4\,r_5)$ (each root moves over one place) is also an even permutation ($=4$ swaps). $A_5$ is the totality of these $60$ permutations of the roots "put together from an even number of swaps" — and they correspond one to one exactly with the $60$ rotations of the icosahedron in EP1.

**What exactly does "solvable" mean? We already took the group of the cubic clearly apart in the short lesson above, so it is just right for explaining this.** The Galois group of the cubic equation is exactly the $S_3$ of that short lesson — it is non-commutative, and yet the cubic does **have** a root formula; what is the reason? Because it **can be taken apart**. We saw in the short lesson above: $A_3=\{e,r,r^2\}$ is a normal subgroup of $S_3$, with quotient group $S_3/A_3\cong\mathbb{Z}/2$; $A_3$ itself is then peeled down to $\{e\}$. Connect these two steps, and $S_3$ has a **normal chain**:

$$
S_3\ \triangleright\ A_3\,(\cong\mathbb{Z}/3)\ \triangleright\ \{e\}.
$$

Corresponding to the **quotient group** after each layer is peeled off:

$$
S_3/A_3\cong\mathbb{Z}/2\ (\text{commutative}),\qquad A_3/\{e\}\cong\mathbb{Z}/3\ (\text{commutative}).
$$

**Both layers of quotients are commutative groups** — this is exactly the precise definition of a "solvable group": **there exists a normal chain in which every link's quotient is commutative**. And every commutative link's quotient corresponds to **one root extraction** in the formula by radicals: one layer of $\mathbb{Z}/2$ and one layer of $\mathbb{Z}/3$ can be matched to the **one square root and one cube root** in Cardano's formula in §1. "Peeling layer by layer" is at this point no longer a metaphor — it is the chain $S_3\triangleright A_3\triangleright\{e\}$, **one link of the chain equals one root extraction in the formula**. The cubic can be solved precisely because its group can be taken apart into this chain of "all commutative layers".

**So where does $A_5$ differ?** The Galois group of the general quintic equation is $S_5$ (a concrete example is $x^5-x-1=0$: it is irreducible over the rational numbers and its group is exactly the whole of $S_5$ — it is precisely the equation of §5 that "has 5 roots yet whose formula cannot be written down"). Inside $S_5$ there is a **hard core that cannot be broken apart**, exactly the $A_5$ of EP1. If one tries to peel it layer by layer the way $S_3$ was peeled, **the very first step is blocked**: $A_5$ is **non-commutative and also simple** — it has inside it no "normal" substructure that can be peeled off (no nontrivial normal subgroup); it is one solid hard core. The normal chain is stuck dead at its very start, and the ladder of formulas by radicals **breaks** here.

**There is one step here that is the easiest to misunderstand and must be clearly distinguished: "non-commutative" is not the same as "unsolvable".** The phone example of EP1 showed that rotations do not commute (turning first and then flipping $\ne$ flipping first and then turning), and from this it is easy to think mistakenly that "non-commutative = hard = unsolvable". But $S_3$ is a counterexample — it is non-commutative, yet the cubic has a formula. The real obstacle needs one more condition:

|  | Property | What it means for the equation |
| --- | --- | --- |
| **Non-commutative** | necessary / not sufficient | a commutative group is always solvable and always has a formula; but non-commutative does **not necessarily** mean unsolvable ($S_3$ is the other way round) |
| **Non-commutative + simple (cannot be broken apart)** | the real key obstacle | a non-commutative hard core that cannot be peeled as a whole leaves the formula with no road at all |

$A_5$ is exactly the **smallest** one that has **both** of these properties **at once**. The phone of EP1 showed "non-commutative"; EP2 reveals that the real obstacle is "**non-commutative and impossible to break apart**".

And this $A_5$ is exactly the atom of symmetry of the icosahedron in EP1 — **the same atom, two appearances**:

|  | The $A_5$ of EP1 | The $A_5$ of EP2 |
| --- | --- | --- |
| Identity | **geometric** | **algebraic** |
| What it is | the 60 rotations of the icosahedron | the 60 even permutations of 5 roots |
| Intuition | turn it, and it is still itself | swap them around, and the equation's relations do not change |

The $60$ rotations of the icosahedron and the $60$ even permutations of five roots are exactly what the short lesson above called **isomorphic** ($\cong$ — a bijective homomorphism, the same skeleton with only the labels changed): the elements can be paired one to one and the multiplication tables match without the slightest difference, so "the rotation group of the icosahedron" $\cong A_5$. "Symmetry" and "equations" connect here.

![The geometric A₅ (the 60 rotations of the icosahedron) and the algebraic A₅ (the 60 even permutations of 5 roots) are the same group: |A₅| = 60 —](/content/images/2026/06/fig_icosa_A5.gif)

*Figure 16  The geometric A₅ (the 60 rotations of the icosahedron) and the algebraic A₅ (the 60 even permutations of 5 roots) are the same group: |A₅| = 60 — the first time the thread of "Symmetry and the Monster" shows itself.*

So — **why does the step "cannot be broken apart $\Rightarrow$ no solution by radicals" hold rigorously?** This requires establishing an equivalence between "solvable group" and "solvable by radicals" (Galois's criterion), and then using the simplicity of $A_5$ to block the root formula completely — this is exactly the core of the [**Abel–Ruffini theorem**](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem), left for **EP3**. At this point, we can see that the atom that was turning in EP1 appears, in isomorphic form, in the symmetry of an equation's roots.

![Niels Abel (Niels Henrik Abel, 1802–1829) — he and Galois never met, yet he independently proved that the quintic equation has no solution by radicals (the Abel–Ruffini theorem).](/content/images/2026/06/niels_abel.jpg)

*Figure 17  Niels Abel (Niels Henrik Abel, 1802–1829) — he and Galois never met, yet he independently proved that the quintic equation has no solution by radicals (the Abel–Ruffini theorem).*

---

## Glossary card: putting the "group-theory words" you just learned into your pocket

> The terms that appeared in the "short lesson in group theory" just now are all gathered on this card, so you can look them up at any time while reading on through §§ 4–6. Each is explained once in
>
> **plain words**
>
> $+$ one concrete example; if you want to see one computed from beginning to end, go back to the "short lesson in group theory" above.

**About the "group" itself**

- **Group**—a set of "motions", plus the rule "do one after another"; as long as four conditions are met it counts as a group: two motions joined together are still in the set, there is a "do nothing" motion, every motion can be undone in reverse, and when joining them, how the brackets are placed does not affect the result. *Example*: the $6$ symmetries of the equilateral triangle, addition of integers, the hours on a clock face.
- **Order of a group $|G|$**—how many motions there are in this group altogether. *Example*: the symmetry group of the equilateral triangle has $6$, $|S_3|=6$; all the ways of arranging five cards, $120$. (It can also be infinitely many, for example all the integers.)
- **Order of an element**—how many times a single motion must be **repeated** before it returns to "do nothing". *Example*: a turn of $120^\circ$ repeated $3$ times turns back to the original, order $3$; a flip motion flipped $2$ times is restored, order $2$.
- **Abelian group (commutative group)**—a group in which, for any two motions, it makes no difference which is done first and which after. *Example*: addition of integers ($3+5=5+3$). **Counterexample**: the symmetries of the equilateral triangle (turning first and then flipping $\ne$ flipping first and then turning).

**Some common groups**

- **Cyclic group $\mathbb{Z}/n$**—the whole group can be generated by doing **one** motion over and over (do it once, twice… do it $n$ times and it is back at the start); that motion is called a **generator**. *Example*: the three rotations $\{e,r,r^2\}$ are all turned out of $r$; that is $\mathbb{Z}/3$.
- **Symmetric group $S_n$**—all the ways of **arbitrarily rearranging** $n$ things, $n!$ in all. *Example*: $S_3$ is the $6$ arrangements of three vertices; $S_5$ is the $120$ of five roots.
- **Alternating group $A_n$**—the "mild" half of $S_n$: the arrangements that can be put together from an **even** number of "pairwise swaps", $n!/2$ in all. *Example*: $A_5$ is the $60$ even arrangements of five roots, and also exactly the $60$ rotations of the icosahedron.

**"Parts" and "relations" within a group**

- **Subgroup**—some of the elements of a group which, closing the door on themselves (without borrowing from outside), already make up a group. *Example*: the $3$ rotations of the equilateral triangle $\{e,r,r^2\}$ are a group by themselves, a subgroup of $S_3$.
- **Transposition (swap)**—the simplest kind of rearrangement: exchange just two things and leave the rest unmoved. Any complicated rearrangement can be broken into a number of transpositions. *Example*: exchange root $1$ and root $2$.
- **Coset**—a block obtained by **moving a subgroup as a whole** (multiplying each of its elements by some motion in the group); all cosets are equally large, and together they exactly fill the whole group. *Example*: $S_3$ is cut by the subgroup $A_3$ into two blocks, "the three rotations" and "the three flips".
- **Lagrange's theorem**—the size of any subgroup must **divide** the size of the whole group (because the cosets cut the big group into a number of equally large blocks). *Example*: the subgroup size $3$ divides the group size $6$.

**"Can it be taken apart" — the core of this episode**

- **Normal subgroup**—a subgroup "with a special property": moving it from the **left** by any motion and moving it from the **right** give the same block. Only subgroups of this kind can be "shrunk away as a whole block". *Example*: $A_3$ is normal in $S_3$; while a subgroup like "stay $+$ one flip" is not normal (moving on the left and on the right differ).
- **Quotient group $G/N$**—the smaller group that is left after a normal subgroup is treated as "one point" and shrunk away as a whole block. *Example*: $S_3$ with $A_3$ shrunk away leaves two, "even / odd", which is $\mathbb{Z}/2$.
- **Homomorphism**—a correspondence between two groups that "**preserves the operation**": doing first here and then corresponding equals corresponding first and then doing over there. *Example*: attaching to each arrangement a sign "even $\to+1$, odd $\to-1$".
- **Isomorphism ($\cong$)**—the strongest kind of correspondence: paired one to one, nothing compressed; apart from names, the two groups are entirely the same thing. *Example*: the rotation group of the icosahedron $\cong A_5$.
- **Simple group**—a group that can no longer "be taken apart": apart from "do nothing" and itself, it has inside it **no normal subgroup at all** that can be shrunk away. It is the "atom" of the world of symmetry. *Example*: $A_5$, the smallest non-commutative simple group (exactly the one that blocks the quintic equation).
- **Solvable group**—a group that can be peeled layer by layer (each layer by means of a normal subgroup) down to the bottom, such that **after each layer is peeled, what is left is a commutative group** (formally: there is a normal chain in which every link's quotient group is abelian). It is exactly the key to telling whether an equation "can be solved by radicals" — but the equivalence "the group is solvable $\Leftrightarrow$ the equation is solvable by radicals" (Galois's criterion) is the main theorem that **EP3** will prove rigorously; here only the definition is given. *Example*: the cubic's $S_3$ is solvable; the quintic's $S_5$ is **not** solvable because it contains $A_5$, the atom that cannot be broken apart.

**Specific to Galois theory**

- **Number field**—a set of numbers that is **closed** under addition, subtraction, multiplication and division (however you compute, you never escape this set). *Example*: $\mathbb{Q}(\sqrt5)$, that is, all numbers of the form $a+b\sqrt5$ ($a,b$ fractions).
- **Field automorphism**—a "relabeling" correspondence of a number field onto itself, in which not one rational number moves and addition, subtraction, multiplication and division are all preserved, with only certain irrational numbers sent to other numbers. *Example*: sending $\sqrt5$ to $-\sqrt5$ (the rational numbers stay perfectly still).
- **Galois group**—the group made up of all the "field automorphisms" of an equation, describing all the symmetry of this equation's roots. *Example*: the Galois group of $x^2-x-1$ is $\mathbb{Z}/2$.

---

## Epilogue

In this episode, the difficulty of solving equations was relocated once: it is not in formula technique, but hidden in the structure of "the symmetry group of the roots". The groups of the quadratic, cubic and quartic can be taken apart — into a normal chain of all commutative layers, each link corresponding to one root extraction — and so there is the ladder of formulas by radicals; the quintic gets stuck because in its group $S_5$, that $A_5$ is exactly the atom of symmetry on the icosahedron of EP1, **simple and impossible to break apart**.

But we still owe one most crucial "why": **why, if it cannot be broken apart, can the formula certainly not be written down?** This requires really explaining "normal subgroups", "quotient groups" and "simple groups" thoroughly, and then seeing how Abel and Galois used the simplicity of $A_5$ to prove **rigorously** that the quintic equation will never have a root formula.

Why that atom cannot be broken apart — find out in the next episode.

---

## Sources

**Galois and the manuscripts from the eve of the duel** · MacTutor biography —— [MacTutor: Évariste Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/); the papers are held in the library of the Institut de France in Paris, and were edited and published by Liouville in 1846 (for a modern critical edition see Peter Neumann, *The Mathematical Writings of Évariste Galois*, EMS 2011).

**The cubic/quartic formulas and the attribution dispute** · biographies of del Ferro and Ferrari —— [MacTutor: del Ferro](https://mathshistory.st-andrews.ac.uk/Biographies/Ferro/), [MacTutor: Ferrari](https://mathshistory.st-andrews.ac.uk/Biographies/Ferrari/); an overview of the dispute —— [Quanta: The Scandalous History of the Cubic Formula](https://www.quantamagazine.org/the-scandalous-history-of-the-cubic-formula-20220630/). Cardano's *Ars Magna* (Ars Magna, 1545) first printed the solution of the cubic.

**The entrance of imaginary numbers** · Bombelli's *Algebra* (L'Algebra, 1572) was the first to treat square roots of negative numbers systematically (casus irreducibilis).

**The fundamental theorem of algebra** —— [Wikipedia: Fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra); first proved in Gauss's 1799 doctoral dissertation —— [Wikipedia: Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss).

**The unsolvability of the quintic (Abel–Ruffini) and group theory** —— [Wikipedia: Abel–Ruffini theorem](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem), [Wikipedia: Alternating group ($A_5$)](https://en.wikipedia.org/wiki/Alternating_group); the series' source book, Mark Ronan, *Symmetry and the Monster* (OUP 2006).

**Debunking the "aesthetic myth" of the golden ratio** —— [Plus Magazine: The golden ratio](https://plus.maths.org/content/golden-ratio) (systematically debunked by Livio 2002).

*The historical images in the text (the portrait of Galois and his papers from the eve of the duel, the Babylonian clay tablet Plimpton 322, the title page of Cardano's Ars Magna, the portraits of Cardano / Tartaglia / Bombelli / Abel) are all taken from *[*Wikimedia Commons*](https://commons.wikimedia.org/)*, and are in the public domain (the author or publication died or appeared more than a hundred years ago, PD-old).*
