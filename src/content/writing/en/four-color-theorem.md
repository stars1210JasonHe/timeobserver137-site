---
title: "The Four Color Theorem: a story from a century ago, still felt today"
date: 2026-06-05
lang: en
draft: true
tags:
  - timeobserver137
  - math-companion
  - 4ct
  - four-color-theorem
  - graph-theory
  - history-of-mathematics
  - ai-and-math
  - draft
ghostSlug: four-color-theorem
---

*- from a map to "proof" in the age of AI*

> timeobserver137 companion blog · 4CT episode. The video gives the intuition; the blog supplies the rigorous proofs.

---

## Before we begin

Having finished this episode, I want to say what I currently think about artificial intelligence and the shock it brings. The conclusion straight away: AI will not, in any case, and should not, replace people.

The birth of AI is itself purposeful; it was never built in order to "create a person". The mainstream view now tends to hold that its purpose is to be a cognitive tool for humans - and so its nature as a "tool" is also very clear. Our human birth, by contrast, was not purposeful from the start, and so we always do some things that seem to have no purpose: we keep going in a match that looks certain to be lost, we enjoy the warm afternoon sunshine, and we also feel the sorrow of parting and death. These things may perhaps be simulated in future, but they can never replace our own feelings.

Back to mathematics - AI is a tool, and the ones who discover and understand the beauty of mathematics are us, people.

The article below follows the thread "what counts as a proof, whose proof is it, and on what grounds do we believe it", walking all the way from a map to today's AI, to make the conclusion above solid step by step.

— yeqiu

---

## Prologue: a wrong proof believed for eleven years

In 1852, a young man who had just graduated in law, Francis Guthrie, was coloring a map of the counties of England when he noticed something odd: it seemed that four colors were always enough, however you colored. He could not prove it himself, so he asked his younger brother Frederick (then a student of De Morgan) to ask his teacher - the great mathematician Augustus De Morgan. On October 23 of the same year, De Morgan wrote to Hamilton, leaving the earliest written record of this problem.

More than twenty years later, in 1879, Alfred Kempe, a practicing barrister in London and an amateur mathematician, published a short paper announcing that he had proved it. The mathematical community could find no flaw, and so treated it as solved. (Kempe himself was elected a Fellow of the Royal Society in 1881, but the nomination mainly honored his work on linkages and kinematics, not this four-color proof.)

**But eleven years later - in 1890 - Percy Heawood discovered that this proof was wrong.**

A wrong proof, believed by everyone for eleven years. This is more worth pondering than the problem itself: when we say a proposition "has been proved", on what grounds do we actually judge that? Did someone really check it step by step, or did everyone just look at it, find no flaw, and take it as right for the time being?

This article follows that question, from a map all the way to today's artificial intelligence.

---

## Contents

- [**§1 The problem itself**](#1-the-problem-itself) — what the Four Color Theorem is; why not three colors, why "four" is special in the plane ($K_4$ / $K_5$)
- [**§2 From map to dots and lines**](#2-from-map-to-dots-and-lines) — abstracting the map into a planar graph
- [**§3 Kempe chains and the Five Color Theorem**](#3-kempe-chains-and-the-five-color-theorem) — Euler's formula, there must be a vertex of degree ≤ 5, swapping Kempe chains: first prove "five colors are always enough"
- [**§4 Why Kempe's "four colors" collapses**](#4-why-kempes-four-colors-collapses) — Heawood's 1890 gap, the Errera graph, Tait edge coloring
- [**§5 Machine proof**](#5-machine-proof-unavoidable-sets-reducibility-discharging) — unavoidable sets, reducibility, discharging; 1976 → Coq, and "the proof itself is a program"
- [**§6 The crisis of trust in the AI age**](#6-the-same-problem-replayed-more-dangerously-the-crisis-of-trust-in-the-ai-age) — the same problem, replayed more dangerously in the AI age

---

## §1 The problem itself

[**The Four Color Theorem**](https://zh.wikipedia.org/wiki/%E5%9B%9B%E8%89%B2%E5%AE%9A%E7%90%86): any planar map can be colored with only four colors so that adjacent regions have different colors. Here "adjacent" means sharing a stretch of boundary that has length - touching at only one point does not count.

A few facts to make clear first:

- **Why not three?** You can draw four regions that are pairwise adjacent (that is, the [complete graph](https://zh.wikipedia.org/wiki/%E5%AE%8C%E5%85%A8%E5%9B%BE) $K_4$); then whatever the fourth region is colored, it clashes with the first three, so three colors are not enough.
- **Why won't "five pairwise adjacent" force a fifth color?** First get clear on what we are actually looking for: **the most direct way to overturn the Four Color Theorem is to give a counterexample - to produce a planar map that really needs five colors.** And the most conspicuous candidate counterexample is "five regions, all pairwise adjacent": if there really were five such regions, then each one touches the other four, and the colors must be pairwise different - five regions **would have to use five colors** (this is exactly what "forcing a fifth color" means). **So if such a map could really be drawn in the plane, the Four Color Theorem would be overturned on the spot.** But these five pairwise adjacent regions, drawn as dots and lines, are exactly the complete graph $K_5$ (five points, every pair joined by an edge), and **$K_5$ cannot be drawn in the plane at all** - this is given directly by Lemma 3.2 later ($K_5$ has $10$ edges, exceeding the upper bound $E\le 3V-6 = 9$, so in any drawing there are always two edges that must cross). So this **most conspicuous counterexample cannot be built in the plane at all**. But note: being unable to build this one counterexample, $K_5$, **is not the same as proving that four colors are always enough** - there might be other planar structures, not shaped like $K_5$, that need five colors (in fact there are none, but ruling out "all" such possibilities requires the much harder proof that comes later).
- **Change the surface, and "four" immediately loses its special status.** On the torus (the doughnut surface) **seven** colors are needed; on the [Klein bottle](https://zh.wikipedia.org/wiki/%E5%85%8B%E8%8E%B1%E5%9B%A0%E7%93%B6), six. "Four" belongs to the plane and the sphere alone - and this is precisely the root of why it is hard to prove.

![Four pairwise adjacent regions: three colors are not enough](/content/images/2026/06/fig1_1_why_not_three.png)

*Figure 1.1 Four regions pairwise adjacent (that is, the complete graph $K_4$): the central region touches all three outer ones, so a fourth color is unavoidable - so three colors are not enough (video B06).*

![K₄ can, K₅ cannot: why](/content/images/2026/06/fig1_2_k4_vs_k5.png)

*Figure 1.2 Left: four pairwise adjacent regions ($K_4$) need four colors, and can be laid flat in the plane with no crossings. Right: five regions that were all pairwise adjacent would need five colors, but however $K_5$ is drawn in the plane, there is at least one edge crossing (red ✗) - so a planar map cannot put together "five pairwise adjacent", and so cannot force a fifth color.*

### Why exactly "four" is so hard: lower bound, upper bound, and the gap of "1" in between

Above, the torus needs seven colors and the Klein bottle needs six - how exactly are these numbers "nailed down"? Hidden here is the deepest distinction in the whole piece, and the real reason four colors is hard. To determine "how many colors are enough on a given surface", **you must have two halves, and neither can be missing**:

- **The lower bound (at least how many)** comes from **construction**: on this surface, **actually lay out** $n$ pairwise adjacent regions. Since they all touch each other, $n$ colors are unavoidable - hence "**at least $n$ are needed**".
- **The upper bound (how many are enough)** comes from **Euler's formula**: compute the value of $V-E+F$ on this surface, deduce that "there are not too many edges", and so the graph **always has a vertex of low degree**; delete it, color the rest, put it back and fill in its color, and by induction you prove "**$n$ are enough**".

Only when **the lower bound and the upper bound land on exactly the same number** can you say "exactly $n$".

**The torus is an example where the two sides close naturally**: by construction, 7 **pairwise adjacent** regions can really be laid out on the surface of a doughnut ($K_7$ fits) → at least 7 are needed; and the torus has $V-E+F=0$ (the plane has 2), from which it follows that there is always a vertex of **degree $\le 6$** - this is the **opening move** of the upper-bound argument, but **not the conclusion**. From here one goes once more through the routine of §3, "delete a low-degree vertex → color the smaller graph by induction → put it back and fill in its color" (only this time the number to make up is 7, not 5), and only then is it proved that **7 are enough**. In other words, the torus's upper bound of 7 and "plane degree $\le 5$ ⇒ five colors are enough", which §3 proves carefully, are **the same kind** of inductive argument, and it is not handed over for free by the single phrase "degree $\le 6$" - it is itself a theorem that has to be proved (the seven color theorem for the torus). Once both sides are made solid, lower bound 7 = upper bound 7 → **exactly 7**. So "seven colors on the torus" does not rest only on that one construction picture; it is pinned between the construction (lower bound) and the Euler induction (upper bound) together.

**And the plane is precisely the one where the two sides do not meet**:

- Lower bound: $K_4$ (four pairwise adjacent) can be built → the plane **needs at least 4**.
- Upper bound: the same Euler induction, in the plane $E\le 3V-6$ → there is always a vertex of **degree $\le 5$** → **one can easily prove "5 are enough"** (this is exactly the **Five Color Theorem** that we will prove by hand in §3).
- So what you have in hand is: lower bound **4**, easily reached upper bound **5** - **a whole 1 short in between**.

**This gap of "1" is the entire Four Color Theorem.** "In fact four are enough, the fifth is never needed" - pushing the upper bound from 5 down to 4 is exactly the hard problem that trapped the mathematical world for more than a hundred years and in the end could only be solved with a computer. Among **orientable surfaces**, the plane and the sphere are the only ones where the "lower bound" and the "easy upper bound" differ by 1 - from the torus upward, for those more complicated orientable surfaces, the two sides close naturally and are settled at once (Ringel–Youngs 1968 caught them all in one net). But crossing over to **non-orientable surfaces**, there is also a hidden "off-by-1 twin": **the Klein bottle**. Its construction lower bound is 6 ($K_6$ embeds, $K_7$ does not), the easy upper bound given by Euler's formula is 7, but the true value is **6** - this was only settled by Franklin in 1934. So the off-by-1 phenomenon of "the easy upper bound not reaching the true value" in fact occurs in only two places in all of surface topology: the sphere (true value 4, not 5) and the Klein bottle (true value 6, not 7); the Four Color Theorem is one of them, and the only one so hard that it could not be done without a machine. (One point needs spelling out here: these two "off-by-1" cases are **the same phenomenon** - the easily reached upper bound is 1 higher than the true value in both - but their sources are not entirely the same. The sphere's "easy upper bound 5" is the **Five Color Theorem**, a **true statement that has already been proved**, and what is missing is "tightening a true statement by 1 more" (5 → 4); the Klein bottle's "easy upper bound 7", on the other hand, is the bound given by the [**Heawood formula**](https://en.wikipedia.org/wiki/Heawood_conjecture), and the Klein bottle is precisely the **only** surface on which the Heawood formula does not reach the true value - which is exactly why Franklin's 1934 example is famous. The mechanisms differ, but both fall under the same line, "the easy upper bound is 1 higher than the true value".) So "**four belongs to the plane and the sphere alone, and this is precisely the root of why it is hard to prove**" - it is not that four colors is simple, but that it **is stuck in the gap that is hardest to weld shut**. (Note: here we are **not** proving the Four Color Theorem by contradiction; we have only proved solid small conclusions such as "$K_5$ cannot be drawn" and "the plane always has a point of degree ≤ 5", and the step of pushing the upper bound from 5 down to 4 is only really completed in §5.)

![Lower bound vs upper bound: the plane is 1 short](/content/images/2026/06/fig1_3_lower_upper_bound.png)

*Figure 1.3 Nailing down "how many colors are enough" takes two halves: construction gives the lower bound, Euler's formula gives the upper bound. On the torus both sides are 7 and close exactly → exactly seven colors; in the plane the lower bound is 4, but the easily reached upper bound is 5 - that $4\leftrightarrow 5$ gap in between is the entire Four Color Theorem (hard for a hundred years).*

> **A footnote on real maps**: real-world maps actually have no use for the Four Color Theorem, because there are "exclaves" - a piece of national territory sitting inside another country, which by convention must have the same color as the homeland - and such maps do not satisfy the theorem's hypotheses. But the theorem itself is not wrong.

---

## §2 From map to dots and lines

When mathematicians study maps, the first step is to abstract the map into a **planar graph**: each region shrinks to a vertex, and when two regions are adjacent an edge is drawn between the two vertices. The shapes and sizes of the countries no longer matter at all; only one thing remains - who touches whom. So "four-coloring a map" becomes "four-coloring the vertices of a planar graph".

![The map becomes dots and lines](/content/images/2026/06/fig2_1_map_to_graph.png)

*Figure 2.1 Each region shrinks to a point, and adjacent ones are joined by a line - four-coloring the map thereby becomes four-coloring the vertices of a planar graph (video B14).*

**After this step, Kempe introduced his most ingenious tool - the "chain".** (See §3 for details.)

Historical thread: Guthrie 1852 → De Morgan → twenty-five years of silence → Cayley raises it again at the London Mathematical Society in 1878 and publishes formally in 1879 → in the same year Kempe's "proof" appears. (Interestingly, Cayley and Kempe both worked for many years as practicing lawyers before turning to mathematics.)

---

## §3 Kempe chains and the Five Color Theorem

§2 translated "four-coloring a map" into "four-coloring the vertices of a planar graph". What Kempe 1879 really left behind, the result that stands up to checking, is not four colors, but **five colors**, proved securely with the same "chain" idea.

Continuing the main line of "lower bound vs upper bound" from §1: the lower bound for planar maps is **4** (forced by $K_4$, §1), and the **Five Color Theorem** to be proved in this section **is exactly that "easily reached" upper bound of 5**. The gap from 5 down to 4 - that is, the entire Four Color Theorem - has to wait for §4 (seeing how two "single pen" routes failed one after the other) and §5 (where machine proof welds it shut). This section first takes apart the engine of the upper bound 5 and looks at it clearly: its core part is the step "a planar graph must have a vertex of degree $\le 5$" (Corollary 3.3) - **degree $\le 5$, so five colors are enough**. It is both the key to understanding later why Kempe stumbled on "four colors", and itself a clean, beautiful planarity argument.

### First, make a few words clear

Four words recur in the proof; recognize them in a picture first, and you will not get stuck later:

![Four basic words: multi-edge, self-loop, cycle, tree](/content/images/2026/06/fig3_0_terms.png)

*Figure 3.0 Multi-edge: more than one edge between two points; self-loop: an edge that goes from a point back to itself. We allow neither of these - "planar graph" below always means a simple graph (no multi-edges, no self-loops). Cycle: a closed loop of edges joined end to end (the smallest cycle is a triangle). Tree: a connected graph containing no cycle at all.*

A few more notational conventions: $V,E,F$ are the graph's **numbers of vertices, edges and faces** respectively ($F$ also counts the outer unbounded region as a face); $\deg(v)$ is the **degree** of the vertex $v$, that is, the number of edges coming out of it; $G-v$ means the graph left after deleting the vertex $v$ together with its edges.

| Symbol | Meaning |
| --- | --- |
| $V, E, F$ | numbers of vertices, edges and faces of the planar graph ($F$ includes the outer unbounded face) |
| $\deg(v)$ | degree of the vertex $v$ (number of edges incident to it) |
| $G - v$ | the graph obtained from $G$ by deleting the vertex $v$ and its incident edges |
| $(i,j)$-chain | a connected component of the subgraph induced by the vertices of colors $i,j$ (Definition 3.4) |

Below, "planar graph" always means a **simple connected planar graph** (no multi-edges, no self-loops), and we assume $V \ge 3$.

### Why a planar graph always has a "low-degree" vertex

The whole coloring argument has one handhold: however complicated the map, a planar graph **must have a region with "no more than five neighbors"**. This is forced entirely by Euler's formula.

**Lemma 3.1** ([Euler's formula](https://zh.wikipedia.org/wiki/%E6%AC%A7%E6%8B%89%E7%A4%BA%E6%80%A7%E6%95%B0)). *A connected planar graph satisfies*

$$
V - E + F = 2. \tag{3.1}
$$

Where does this formula come from? From an "induction on the number of edges", in which every step can be drawn:

![The inductive proof of Euler's formula](/content/images/2026/06/fig3_1b_euler_induction.png)

*Figure 3.1a Base case: when the graph has no cycle it is a tree, $E=V-1$, and there is only the one outer face ($F=1$), so $V-E+F=V-(V-1)+1=2$. Inductive step: as long as the graph has a cycle, pick an edge $e$ on the cycle; it separates exactly two faces A and B; delete $e$, and A and B merge into one face; before and after deleting the edge, $V$ is unchanged, $E$ drops by 1 and $F$ also drops by 1, and the value of $V-E+F$ does not budge. Keep deleting until there is no cycle (a tree); the value is always 2.*

*Proof.* Induction on the number of edges $E$. If $G$ has no cycle, then $G$ is a tree, $E = V-1$, and there is only the one outer face, $F=1$; then $V-(V-1)+1 = 2$. If $G$ contains a cycle, take an edge $e$ on the cycle; $G-e$ is still connected, and the two faces that $e$ originally separated merge into one after the deletion, so $V' = V,\ E' = E-1,\ F' = F-1$. By the induction hypothesis $V'-E'+F'=2$, and substituting back gives $V-E+F = 2$. **(QED)**

**Lemma 3.2** (upper bound on the number of edges). *A simple planar graph with $V \ge 3$ satisfies*

$$
E \le 3V - 6. \tag{3.2}
$$

*Proof.* Adding edges to $G$ only increases $E$ and does not destroy planarity or simplicity, so it suffices to prove $E = 3V-6$ for **maximal planar graphs** (those in which adding any further edge destroys planarity); a general graph, as a subgraph of one, then naturally satisfies $E \le 3V-6$. Every face of a maximal planar graph is a triangle (otherwise another diagonal could be added inside the face), so counting "3 boundary edges per face, each edge separating exactly 2 faces" gives $3F = 2E$. Substituting $F = \tfrac23 E$ into $(3.1)$: $V - E + \tfrac23 E = 2$, and rearranging gives $E = 3V-6$. **(QED)**

**Corollary 3.3** (a low-degree vertex must exist). *Every simple planar graph has a vertex of degree $\le 5$.*

*Proof.* Suppose, to the contrary, that every vertex has degree $\ge 6$. By the [handshake theorem](https://zh.wikipedia.org/wiki/%E6%8F%A1%E6%89%8B%E5%BC%95%E7%90%86) (each edge joins its two endpoints and contributes 1 to the degree of each end, so when the degrees of all vertices are added up, each edge is counted exactly twice - that is, the sum of the degrees of all vertices is exactly twice the number of edges: $\sum_v \deg(v)=2E$) we have $2E = \sum_v \deg(v) \ge 6V$, that is, $E \ge 3V$, which contradicts what $(3.2)$ gives, $E \le 3V-6 < 3V$. So there must be a vertex of degree $\le 5$. **(QED)**

> **Remark 3.3.1.**
>
> Corollary 3.3 is the handhold of the whole coloring argument: however complicated the map, planarity guarantees that there must exist a region with "no more than five neighbors", letting us start from it and use induction on the rest. This step corresponds to the scene in the video "Euler's formula ⇒ there must be a vertex of degree ≤ 5".

![A planar graph must have a vertex of degree ≤5](/content/images/2026/06/gif3_1_euler_deg5.gif)

*Figure 3.1 (animation) From $V-E+F=2$ deduce $E\le 3V-6$, and then the handshake theorem ($2E\ge 3F$) forces a vertex of degree $\le 5$ (video B17).*

The short piece of code below checks Lemma 3.2 and Corollary 3.3 on a few concrete planar graphs (the skeletons of regular polyhedra) - the number of edges does not exceed $3V-6$, and there is always a vertex of degree $\le 5$:

```python
import networkx as nx

def check(G):
    assert nx.check_planarity(G)[0]                       # planar
    V, E = G.number_of_nodes(), G.number_of_edges()
    assert E <= 3 * V - 6                                  # Lemma 3.2
    mindeg = min(d for _, d in G.degree())
    assert mindeg <= 5                                     # Corollary 3.3
    return V, E, 3 * V - 6, mindeg

for name, G in [("octahedron", nx.octahedral_graph()),
                ("icosahedron", nx.icosahedral_graph()),
                ("dodecahedron", nx.dodecahedral_graph())]:
    V, E, bound, mindeg = check(G)
    print(f"{name:12s} V={V:2d} E={E:2d} <= 3V-6={bound:2d}   min-degree={mindeg} (<=5)")
# octahedron   V= 6 E=12 <= 3V-6=12   min-degree=4 (<=5)
# icosahedron  V=12 E=30 <= 3V-6=30   min-degree=5 (<=5)
# dodecahedron V=20 E=30 <= 3V-6=54   min-degree=3 (<=5)
```

### Kempe's "chain": watching step by step how it frees up a color

Kempe's most ingenious tool is to look at only **two** colors. The mechanism sounds abstract, but drawn out it is actually very straightforward - the figure below walks through it from zero:

![How a Kempe chain frees up a color](/content/images/2026/06/fig3_2b_kempe_mechanic.png)

*Figure 3.2a Step 1: the central vertex $u$ is "stuck" - its four neighbors happen to use up all four colors, red, yellow (amber), green and blue, and no free color is left for $u$. Step 2: look only at the vertices of the two colors red and green, and dim the other colors for the moment. Starting from the red neighbor $a$ and walking only between red and green points, the lump that can be reached, $\{a,e,f\}$, is a (red,green)-Kempe chain; the key is that this chain cannot reach the other green neighbor $c$ ($c$ is another, independent chain). Step 3: on this chain swap red and green wholesale - $a$ changes from red to green. This swap does not break any adjacency (the points outside the chain do not move), yet it leaves no red among $u$'s neighbors, so red is freed up and can be given to $u$.*

In one sentence: a Kempe chain is "a connected block held up by some two colors"; as long as some chain cannot reach the counterpart it ought to reach, **swapping colors wholesale on this chain** frees up a color out of thin air. This is the entire source of firepower for the five-color proof below.

**Definition 3.4** (Kempe chain). *Suppose the planar graph $G$ already has a proper coloring. Fix two colors $i, j$, keep only the vertices of color $i$ or $j$ and the edges between them, and obtain the induced subgraph $G_{ij}$. Each connected component of $G_{ij}$ is called an $(i,j)$-Kempe chain.*

**Lemma 3.5** (swapping does not break properness). *On some $(i,j)$-chain $C$, interchange all colors $i$ and $j$ (the vertices outside the chain stay as they are); what is obtained is still a proper coloring.*

*Proof.* Take any edge $uw$; it suffices to verify that after the swap its two ends have different colors. If $u,w$ are both not on $C$, the colors of both are unchanged; they were different and are still different. If both $u,w$ are on $C$, the swap only interchanges the two colors $\{i,j\}$ within $C$, and the two adjacent ends still take two different colors from $\{i,j\}$. If exactly one end is in $C$ and the other end $w$ is outside $C$: the color of $w$ cannot belong to $\{i,j\}$ - otherwise $w$ would be an $i,j$-colored vertex adjacent to $u$, and would fall into the same connected component $C$, a contradiction; so $u$ after the swap (still $i$ or $j$) still has a different color from the vertex whose color is not in $\{i,j\}$, namely $w$. In summary, the two ends of every edge have different colors, and the coloring is proper. **(QED)**

### The Five Color Theorem

**Theorem 3.6** ([the Five Color Theorem](https://zh.wikipedia.org/wiki/%E4%BA%94%E8%89%B2%E5%AE%9A%E7%90%86), Heawood 1890). *Every planar graph can be properly colored with at most five colors.*

*Proof.* Suppose it does not hold, and take a **minimal counterexample** $G$: a planar graph with the fewest vertices that cannot be 5-colored. By Corollary 3.3, $G$ has a vertex $v$ with $\deg(v) \le 5$.

By the minimality of $G$, $G - v$ can be 5-colored; fix one proper 5-coloring of it, and below we try to color $v$ as well.

If the neighbors of $v$ (at most 5) actually use only $\le 4$ colors, then among the five colors there is still a free color that can be given directly to $v$, giving a proper 5-coloring of $G$, which contradicts "$G$ is a counterexample". So it must be that $\deg(v) = 5$, and the five neighbors use exactly all five colors. Following the planar embedding, label them clockwise around $v$ as $v_1, \dots, v_5$, and let the color of $v_k$ be $k$.

Consider the chain starting from $v_1$, the $(1,3)$-chain $C_{13}$.

**Case (i): $v_3 \notin C_{13}$.** On $C_{13}$ swap $1 \leftrightarrow 3$ (Lemma 3.5 guarantees it is still proper). $v_1$ becomes color 3, while $v_3$ is not on this chain and keeps color 3. Now there is no color 1 among the neighbors of $v$; color 1 is freed up and can be given to $v$. Contradiction.

**Case (ii): $v_3 \in C_{13}$.** Then $C_{13}$ contains, running from $v_1$ to $v_3$ with vertex colors all in $\{1,3\}$, a path $P$. Joining $P$ end to end with the vertex $v$ (via the two edges $v v_1$, $v v_3$) encloses a **closed curve** $\gamma$ in the plane. By the [Jordan curve theorem](https://zh.wikipedia.org/wiki/%E8%8B%A5%E5%B0%94%E5%BD%93%E6%9B%B2%E7%BA%BF%E5%AE%9A%E7%90%86), $\gamma$ divides the plane into an inner and an outer region; and $v_2$ and $v_4$ lie around $v$ exactly on the two different sides of $v_1, v_3$, so the two of them are separated by $\gamma$ into different regions.

Now look at the chain starting from $v_2$, the $(2,4)$-chain $C_{24}$: its vertex colors are all 2 or 4, while $\gamma$ is made up entirely of vertices of colors 1 and 3 (plus $v$) - the two groups of colors are disjoint. A path whose colors are all in $\{2,4\}$, if it wants to pass from the inside of $\gamma$ to the outside, must "cross" $\gamma$; but crossing can only land on a vertex of $\gamma$, or intersect an edge of $\gamma$; the former is impossible (there are no vertices of color 2 or 4 on $\gamma$), and the latter is forbidden by **planarity** (the edges of a planar graph do not cross one another). So $C_{24}$ cannot contain both $v_2$ and $v_4$, that is, $v_4 \notin C_{24}$. So on $C_{24}$ swap $2 \leftrightarrow 4$; $v_2$ becomes color 4, color 2 is freed up and given to $v$. Contradiction.

Both cases lead to a contradiction; the minimal counterexample does not exist. The theorem is proved. **(QED)**

> **Remark 3.6.1 (planarity is the lifeline of this proof).**
>
> The entire weight of the argument rests on one sentence in Case (ii): once the $(1,3)$-chain really connects $v_1$ and $v_3$, it encloses a Jordan closed curve in the plane, which puts $v_2$ and $v_4$
>
> **forcibly on two sides**, so the $(2,4)$-chain can no longer reach both of them at once - and we can therefore always free up a color. Here "planarity" does two irreplaceable things: first, the Jordan curve theorem guarantees that a closed curve in the plane must divide the plane into an inside and an outside; second, the edges of a planar graph do not cross, which guarantees that a chain of other colors cannot "go around" $\gamma$. Draw the same graph on the
>
> **torus**
>
> (the doughnut surface), and both properties fail at once - a closed curve on the torus does not necessarily separate the surface, the $(2,4)$-chain can go around through the "hole" and connect $v_2, v_4$ at the same time, and the argument collapses on the spot. This is exactly why "four colors" is special in the plane and on the sphere, while on the torus seven are needed (§1). Video B19 acts out this chain swap frame by frame.

![The five-color proof with two chain swaps](/content/images/2026/06/gif3_2_two_chain.gif)

*Figure 3.2 The Jordan curve enclosed by the $(1,3)$-chain separates $v_2,v_4$, and the $(2,4)$-chain cannot connect both, so one color is freed up for the central vertex $v$ (video B19).*

> **Remark 3.6.2 (why it stops exactly at five colors).**
>
> The reason this proof is clean is that when the five neighbors use up all five colors, "freeing a color for $v$" needs only
>
> **one**
>
> successful chain swap, and Jordan separation guarantees exactly that the one swap must succeed. But once you go down to
>
> **four colors**: when the neighbors use up all four colors, freeing a color requires two chains to give way
>
> **at the same time**
>
> , and planarity can only cut off "one of them"; it cannot control the interaction between the two. This is exactly what Kempe 1879 failed to see through, which led him to believe mistakenly that the same trick could prove four colors. The next section gives Heawood's precise counterattack.

### Walking the proof through a concrete graph

An abstract argument read once may not be felt, so we follow the steps of Theorem 3.6 and walk through "find the vertex → delete → color → swap a chain to free a color" on a small graph you can draw along with.

**Example 3.8.** *Take the following planar graph (8 vertices): a center $v$, an outer pentagon $n_0 n_1 n_2 n_3 n_4$ joined with $v$ into a wheel ($v$ has degree 5), and, from $n_0$, a small tail $n_0\text{–}p\text{–}q$ dragged out. Color $G-v$:*

> $$
> n_0{=}1,\; n_1{=}2,\; n_2{=}3,\; n_3{=}4,\; n_4{=}5,\quad p{=}3,\; q{=}1.
> $$
>
> *This is proper, and the five neighbors of $v$, $n_0,\dots,n_4$, use exactly all five colors - for the moment there is no color to fill in for $v$. Look at the chain starting from $n_0$ (color 1), the $(1,3)$-chain: it goes along $n_0\to p\to q$ (colors $1,3,1$), reaches its end at $q$, and cannot reach $n_2$ (also color 3, but not on this chain) - exactly Case (i) of Theorem 3.6. So on the chain $\{n_0,p,q\}$ swap $1\leftrightarrow 3$, obtaining $n_0{=}3,\,p{=}1,\,q{=}3$; now the five neighbors of $v$ use only $\{2,3,4,5\}$, color 1 is freed up, and we set $v{=}1$. The proper 5-coloring of the whole graph is complete.*

The networkx code below can be run directly; it recomputes and checks each step above (the graph is planar, each step's coloring is proper, the $(1,3)$-chain really cannot reach $n_2$, and the final coloring is proper on all 12 edges):

```python
import networkx as nx

# 5-wheel (center v + pentagon n0..n4) + tail n0-p-q
N = ["n0", "n1", "n2", "n3", "n4"]
G = nx.Graph(
    [("v", n) for n in N]                          # spokes
    + [(N[i], N[(i + 1) % 5]) for i in range(5)]   # pentagon C5
    + [("n0", "p"), ("p", "q")]                    # tail of the (1,3)-chain
)
assert nx.check_planarity(G)[0] and G.degree("v") == 5   # planar, v has degree 5

# proper 5-coloring of G - v; the five neighbors of v use all five colors
C = {"n0": 1, "n1": 2, "n2": 3, "n3": 4, "n4": 5, "p": 3, "q": 1}
proper = lambda col, skip=(): all(
    col[a] != col[b] for a, b in G.edges()
    if a not in skip and b not in skip and a in col and b in col)
assert proper(C, skip=("v",))
assert {C[n] for n in N} == {1, 2, 3, 4, 5}              # neighbors use all five colors -> v stuck

# the (1,3)-Kempe chain starting from n0 (union-find / search)
def chain(col, start, i, j):
    seen, stack = {start}, [start]
    while stack:
        x = stack.pop()
        for y in G[x]:
            if y in col and col[y] in (i, j) and y not in seen:
                seen.add(y); stack.append(y)
    return seen

ch = chain(C, "n0", 1, 3)
assert ch == {"n0", "p", "q"} and "n2" not in ch          # Case (i): cannot reach n2

# swap 1<->3 on the chain, free color 1, color v
for x in ch:
    C[x] = 3 if C[x] == 1 else (1 if C[x] == 3 else C[x])
assert {C[n] for n in N} == {2, 3, 4, 5}                   # color 1 is now free
C["v"] = 1
assert proper(C)                                           # all 12 edges of the graph are proper
print("five colors done:", C)
# -> five colors done: {'n0': 3, 'n1': 2, 'n2': 3, 'n3': 4, 'n4': 5, 'p': 1, 'q': 3, 'v': 1}
```

![A worked example of the Five Color Theorem by hand](/content/images/2026/06/fig3_3_worked_5color.png)

*Figure 3.3 The graph of Example 3.8: on the left, the initial coloring of $G-v$ (the five neighbors of $v$ use all five colors); on the right, the result after swapping along the $(1,3)$-chain, with color 1 freed up and $v$ colored 1.*

> **Remark 3.8.1.**
>
> What we landed on here is Case (i) (one swap frees a color). Case (ii) - where the $(1,3)$-chain really connects $v_1,v_3$ - needs the Jordan separation of Remark 3.6.1 to cut off the $(2,4)$-chain; the construction is somewhat larger, but the logic of freeing a color is the same: planarity guarantees that some chain can always be cut off.

---

## §4 Why Kempe's "four colors" collapses

Kempe's ambition in 1879 went beyond five colors - he wanted to use the same chain method to prove four colors directly, and at the time everyone believed he had done it. Only a full eleven years later did Percy Heawood point out where the problem lay. This section makes that error clear: it is not a slip of the pen, but an essential gap in the "chain method" at the four-color step. In the same period Tait set out by another road (edge coloring) and ran into the same wall - we tell both roads through to the end together.

### Kempe's four-color argument, and its fatal step

Copying the framework of §3: take a minimal counterexample, find a degree-$\le 5$ vertex $v$, and first 4-color $G-v$. If the neighbors of $v$ use $\le 3$ colors, fill it in directly; the real obstacle is $\deg(v)=5$ with the five neighbors able to use only four colors - one color must appear twice among the neighbors.

Imitating the five-color method, Kempe wanted to free up a color by chain swaps. But in the worst case with four colors, **one swap is not enough**: to free a color at the central vertex $v$, you have to flip two Kempe chains **at the same time** (for example a red-green chain and a red-yellow chain). Kempe assumed by default that these two chains each act on their own and do not affect each other -

**This step is exactly what is wrong.**

**Proposition 4.1** (Heawood's 1890 gap). *Swapping two Kempe chains at the same time can produce an improper coloring: even if the two chains are vertex-disjoint, a green vertex and a yellow vertex may happen to be adjacent; the red-green swap turns the former red, the red-yellow swap turns the latter red, and so two adjacent red vertices appear.*

*Explanation (failure mechanism).* Let the five neighbors of the central vertex $v$ (degree 5) use all four colors ($1$=red, $2$=yellow, $3$=green, $4$=blue). To free up red, Kempe needs to swap once each on a $(1,3)$ red-green chain $A$ and a $(1,2)$ red-yellow chain $B$. As vertex sets the two chains can be **disjoint**, and on this basis Kempe thought they would not interfere with each other; but "disjoint" is not the same as "non-adjacent" - there may well be an edge between, on chain $A$, some green point $g$ and, on chain $B$, some yellow point $y$. Swapping $A$ (red $\leftrightarrow$ green) colors $g$ red; swapping $B$ (red $\leftrightarrow$ yellow) colors $y$ red; $g, y$ are adjacent and yet both red - the coloring is no longer proper. Kempe's "repair" instead created a new conflict. $\blacksquare$

> **Remark 4.1.1.**
>
> Compare §3.6.1: the five-color proof moves only
>
> **one**
>
> chain, and Jordan separation guarantees it is cleanly cut off; four colors requires moving
>
> **two**, and planarity can cut off only one of them; it cannot control the new adjacency that the second creates with the first. The root of the gap is exactly the spot announced in Remark 3.6.2. Video B20 freezes, frame by frame, the swaps of these two chains and the final conflict point where "green and yellow both turn red".

![Two chain swaps interfering with each other](/content/images/2026/06/gif4_1_kempe_clash.gif)

*Figure 4.1 The red-green chain and the red-yellow chain are vertex-disjoint, yet a green point and a yellow point are adjacent; after the two swaps both turn red at the same time → adjacent red-red → improper (video B20).*

### The Errera graph: the counterexample that tangles the whole method to death on the spot

Proposition 4.1 shows that "the chain method can go wrong", but that is not harsh enough - perhaps changing the order of moves would get around it? The [**Errera graph**](https://en.wikipedia.org/wiki/Errera_graph) (Alfred Errera 1921, a planar graph with 17 vertices and 45 edges) blocks this way out: on it, **however you color by Kempe's chain method, you get tangled to death**.

We checked the following facts about the Errera graph first-hand with networkx (the adjacency list, the coloring and the swap sequence can all be recomputed):

**Example 4.2** (the Errera tangle sequence). *Take the Errera graph, and call some vertex of degree 5 $v$. First give $G-v$ a proper 4-coloring such that the five neighbors of $v$ use exactly all four colors (red, green, yellow, blue), so there is no color to fill in for $v$. Then:*

- *no single proper Kempe chain swap on its own can free up a color among the neighbors of $v$* (networkx exhaustively tries every single swap over all neighbors $\times$ all candidate colors, and none works);
- *when forced to do two swaps, there is a red-yellow chain $A=\{1,15\}$ and a red-blue chain $B=\{7\}$, which are vertex-disjoint, but there is an edge between vertex $7$ and vertex $15$; after swapping $A$, $15$ turns red, after swapping $B$, $7$ turns red, and both ends of the edge $7\text{–}15$ are red - exactly the conflict of Proposition 4.1, realized precisely on a concrete graph.*

This is not the chance failure of one particular way of coloring, but a **structural deadlock** of Kempe's chain algorithm on the Errera graph: every way out leads to the same kind of contradiction. The Errera graph therefore became the standard counterexample for "the chain method cannot prove four colors".

The networkx code below can be run directly; it recomputes all the claims of Example 4.2 - the adjacency of the Errera graph, the five neighbors of $v=0$ using all four colors, **no single proper Kempe swap being able to free a color**, and $7$ and $15$ both turning red when forced to do two swaps:

```python
import networkx as nx

# Errera graph (17 vertices 45 edges, planar); colors 0=red 1=green 2=yellow 3=blue
EDGES = [(0,1),(0,7),(0,14),(0,15),(0,16),(1,2),(1,9),(1,14),(1,15),(2,3),(2,8),(2,9),
         (2,10),(2,14),(3,4),(3,9),(3,10),(3,11),(4,5),(4,10),(4,11),(4,12),(5,6),(5,11),
         (5,12),(5,13),(6,7),(6,8),(6,12),(6,13),(6,16),(7,13),(7,15),(7,16),(8,10),(8,12),
         (8,14),(8,16),(9,11),(9,13),(9,15),(10,12),(11,13),(13,15),(14,16)]
G = nx.Graph(EDGES)
assert G.number_of_nodes()==17 and G.number_of_edges()==45 and nx.check_planarity(G)[0]

V = 0; NB = [1,7,14,15,16]                           # central degree-5 vertex and its 5 neighbors
C = {1:0,2:1,3:0,4:1,5:0,6:2,7:3,8:0,9:3,10:2,11:2,12:3,13:1,14:3,15:2,16:1}  # proper 4-coloring of G-0
assert all(C[a]!=C[b] for a,b in G.edges() if V not in (a,b))    # G-0 proper
assert {C[n] for n in NB}=={0,1,2,3}                 # 5 neighbors use all 4 colors -> no color for 0

def comp(col, s, i, j):                               # the (i,j)-Kempe chain containing s
    seen, st = {s}, [s]
    while st:
        x = st.pop()
        for y in G[x]:
            if col.get(y) in (i,j) and y not in seen: seen.add(y); st.append(y)
    return seen

def frees(col):                                       # does a "single proper swap" exist that frees a color at 0
    for n in NB:
        for o in range(4):
            if o==col[n]: continue
            ch = comp(col, n, col[n], o)
            sw = {**col, **{x:(o if col[x]==col[n] else col[n] if col[x]==o else col[x]) for x in ch}}
            if all(sw[a]!=sw[b] for a,b in G.edges() if V not in (a,b)) and {sw[m] for m in NB}!={0,1,2,3}:
                return True
    return False
assert not frees(C)                                   # False = no single swap can save it (the Errera phenomenon)

A = comp(C,1,0,2); B = comp(C,7,0,3)                  # the forced two swaps: red-yellow chain + red-blue chain
assert A=={1,15} and B=={7} and not (A&B) and G.has_edge(7,15)   # disjoint, but 7-15 adjacent
s = dict(C)
for x in A: s[x] = 2 if s[x]==0 else (0 if s[x]==2 else s[x])    # swap red<->yellow
for x in B: s[x] = 3 if s[x]==0 else (0 if s[x]==3 else s[x])    # swap red<->blue
assert s[7]==0 and s[15]==0                           # 7 and 15 both turn red, edge 7-15 red-red -> improper
print("Errera tangle: every single swap fails; the double swap makes 7,15 both red -> contradiction")
```

![The Errera graph's tangle](/content/images/2026/06/gif4_2_errera.gif)

*Figure 4.2 (animation) The 17-vertex Errera graph. The Kempe chain swap goes once around the highlighted chain, and in the end both ends turn red → adjacency conflict (red ✗) - the chain method is structurally tangled to death on this graph (video B21).*

### The other road fell too: Tait's edge coloring

At almost the same time, the physicist and mathematician Peter Guthrie Tait in 1880 gave a **second** road that looked more workable. He did not touch the face coloring of vertices, but moved the problem onto the **edges**, and proved a very beautiful equivalence.

First the stage has to be set clearly: consider **cubic planar maps** - each vertex has exactly 3 edges coming out of it (the kind of point in a map where three countries meet), and the graph is bridgeless (removing any one edge leaves it connected).

**Theorem 4.3** (Tait's 1880 equivalence). *A bridgeless cubic planar graph can be properly face-colored with 4 colors if and only if its edges can be colored with 3 colors (the 3 edges coming out of each vertex have mutually different colors).*

This equivalence **is itself completely correct**, and its construction is unexpectedly clean. The trick is to regard the four colors not as four names, but as the four elements of the [**Klein four-group**](https://zh.wikipedia.org/wiki/%E5%85%8B%E8%8E%B1%E5%9B%A0%E5%9B%9B%E5%85%83%E7%BE%A4) $\mathbb{Z}_2\times\mathbb{Z}_2=\{00,01,10,11\}$ (written $0,1,2,3$, with addition being bitwise exclusive-or, XOR). Given a proper 4-face-coloring, **let the color of each edge = the XOR of the colors of the two faces on either side of it**:

![Tait's equivalence: 4-face-coloring ↔ 3-edge-coloring](/content/images/2026/06/fig4_3_tait_equiv.png)

*Figure 4.3 The smallest cubic planar graph, $K_4$ (the skeleton of the tetrahedron). Left: 4 colors (the Klein four-group $0,1,2,3$) color the four faces, with the outer unbounded face taking the identity $0$. Right: each edge is colored "the XOR of the two faces on either side of it". Since two adjacent faces have different colors, the XOR cannot be $0$, and the result can only fall among the three nonzero elements $\{1,2,3\}$ - exactly 3 edge colors; and since the 3 faces around any vertex are pairwise different, the three edges automatically take all 3 of these colors. The 4-coloring of faces and the 3-coloring of edges correspond one to one in this way.*

Why is the edge coloring produced by XOR necessarily proper? Going once around any vertex you meet 3 faces, and they are pairwise of different colors - that is, **three pairwise different elements** of the Klein group (possibly including the identity $0$); and for any three pairwise different group elements, their pairwise XORs **are exactly three different nonzero elements**. So the 3 edges at this vertex take exactly all 3 colors, mutually different. The code below recomputes the whole correspondence on $K_4$:

```python
import networkx as nx
# K4 = the smallest bridgeless cubic planar graph; its planar embedding has 4 faces
# faces labeled with the Klein four-group 0..3; the outer unbounded face takes the identity 0
face = {"OUT": 0, "ABD": 1, "ACD": 2, "BCD": 3}
edge_faces = {("A","B"): ("OUT","ABD"), ("A","C"): ("OUT","ACD"), ("B","C"): ("OUT","BCD"),
              ("A","D"): ("ABD","ACD"), ("B","D"): ("ABD","BCD"), ("C","D"): ("ACD","BCD")}
edge_col = {e: face[f] ^ face[g] for e,(f,g) in edge_faces.items()}   # edge color = XOR of the two side faces
assert all(c in (1,2,3) for c in edge_col.values())                  # nonzero -> exactly 3 edge colors
for v in "ABCD":                                                     # the 3 edges at each vertex take all 3 colors
    assert sorted(edge_col[e] for e in edge_col if v in e) == [1,2,3]
print("4-face-coloring --XOR--> 3-edge-coloring:", edge_col)
# -> {('A','B'):1, ('A','C'):2, ('B','C'):3, ('A','D'):3, ('B','D'):2, ('C','D'):1}
```

The problem lies in Tait's next **step**. He noticed: as long as a cubic planar graph contains a [**Hamiltonian cycle**](https://zh.wikipedia.org/wiki/%E5%93%88%E5%AF%86%E9%A1%BF%E5%9B%BE) (a closed cycle passing through every vertex exactly once), a 3-edge-coloring is immediately available -

![A Hamiltonian cycle gives a 3-edge-coloring; Tutte's counterexample](/content/images/2026/06/fig4_4_tutte.png)

*Figure 4.4 Left: the triangular prism (a cubic planar graph). It has a Hamiltonian cycle; the cycle length must be even (the edges left outside the cycle form exactly a perfect matching, pairing the vertices two by two, so the number of vertices is even), so alternate two colors along the cycle, and color all the remaining matching edges with the third color - and a proper 3-edge-coloring is done. Right: the 46-vertex graph constructed by Tutte in 1946 - cubic, planar, and 3-connected, yet without any Hamiltonian cycle. Tait assumed by default that "such graphs always have a Hamiltonian cycle", and this graph pierced that assumption in one blow.*

**But the assumption "every cubic (3-connected) planar graph contains a Hamiltonian cycle" is wrong** - this is the famous [**Tait's conjecture**](https://en.wikipedia.org/wiki/Tait%27s_conjecture). In 1946, W. T. Tutte gave a [graph](https://en.wikipedia.org/wiki/Tutte_graph) that is **3-connected, cubic, planar, yet contains no Hamiltonian cycle** (46 vertices), directly overturning it. Note the measure of this: what Tutte's counterexample refutes is Tait's **Hamiltonicity assumption**, not the equivalence of Theorem 4.3, "four-face-coloring $\Leftrightarrow$ three-edge-coloring" - **the equivalence still holds today**; it is only that it could not, as Tait had hoped, be cashed in easily as a four-color proof by way of "there is always a Hamiltonian cycle".

```python
import networkx as nx
T = nx.tutte_graph()
assert T.number_of_nodes() == 46
assert all(d == 3 for _, d in T.degree())     # cubic
assert nx.check_planarity(T)[0]               # planar
assert nx.node_connectivity(T) == 3           # 3-connected
# containing no Hamiltonian cycle is Tutte's 1946 theorem; brute-force enumeration of Hamiltonian cycles on 46 vertices is impractical, so it is not recomputed here
print("Tutte graph: 46 vertices, cubic, planar, 3-connected - a counterexample to Tait's conjecture")
```

Two roads of "proving it with a single pen" fell one after the other - Kempe's chains, Tait's edge coloring - and a thought began to surface in the mathematical world: **perhaps the Four Color Theorem simply cannot be proved by human hand.**

---

## §5 Machine proof: unavoidable sets, reducibility, discharging

If it cannot be settled at one stroke by an ingenious argument, one clumsy method remains: list all the "local patterns that a minimal counterexample must contain", and then prove one by one that none of these patterns can appear in a minimal counterexample - squeezed from both ends, the minimal counterexample has nowhere to stand. This is exactly the framework of Appel–Haken 1976, and also the first major theorem that essentially cannot do without a computer.

### Reducible configurations

**Definition 5.1** (configuration / reducible). *A configuration is a small local subgraph of a planar graph with a boundary ring - think of it as "a piece of jigsaw puzzle with a frame, dug out of the map". It is called reducible if: whenever some minimal counterexample contains this configuration, a contradiction can be derived from it - specifically, for D-reducibility (Birkhoff's criterion), this means that every proper 4-coloring of the ring can (if necessary with Kempe chain swaps outside the ring) be extended to a proper 4-coloring of the whole "configuration + interior".*

Draw these two words and it is clear at a glance:

![Configuration = interior + the ring surrounding it](/content/images/2026/06/fig5_3_config_ring.png)

*Figure 5.3 Taking the Birkhoff diamond as an example: the 6 gold vertices of the outer circle, joined end to end, form the ring (a 6-cycle, the only interface between this configuration and the outside world); the 4 blue vertices inside are the interior of the configuration (every interior vertex has degree 5). "Reducible" asks exactly this: given any proper coloring on the ring, can these 4 points inside always be colored along with it?*

Intuitively: a reducible configuration is "a hard bone that can be gnawed through" - once it appears in a minimal counterexample, its coloring can be completed, contradicting "the minimal counterexample cannot be colored".

**Example 5.2** (the Birkhoff diamond, the earliest D-reducible configuration). *Birkhoff's 1913 "diamond" configuration: a ring of 6 vertices with 4 interior vertices embedded inside. The ring, as a 6-cycle $C_6$, has a total number of proper 4-colorings given by the* [*chromatic polynomial*](https://zh.wikipedia.org/wiki/%E8%89%B2%E5%A4%9A%E9%A1%B9%E5%BC%8F)

$$
P(C_6, 4) = (4-1)^6 + (4-1) = 3^6 + 3 = 732. \tag{5.1}
$$

*Of these 732 ring colorings, 384 can be extended directly into the interior; the remaining 348 can also be extended with the help of Kempe chain swaps; $384 + 348 = 732$ - all 732 can be extended, so the Birkhoff diamond is D-reducible.*

![The reducibility checking bench: 384 direct + 348 via Kempe = 732](/content/images/2026/06/fig5_4_reducibility.png)

*Figure 5.4 The full picture of the reducibility check: the 732 proper 4-colorings of the ring are sent one by one into the "checking bench". For the 384 in the top row, without any trick, the 4 interior points can be filled in directly (✓); for the 348 in the bottom row, filling in directly gets stuck, but as long as one Kempe chain swap is done outside the ring to change the coloring's posture, they can be filled in too (↻). Adding the two gives $384+348=732$, with not a single one missed - this is the whole meaning of "the Birkhoff diamond is reducible".*

> **Remark 5.2.1 (where this set of numbers comes from).**
>
> The 732, 384 and 348 here
>
> **are all reproducible computational results**; the code below produces them directly. In particular, it should be pointed out: the 384/348 split
>
> **has nothing to do with any Kempe model**
>
> - it asks only one thing: "can a ring coloring,
>
> **without the help of Kempe, directly**
>
> be filled in at the 4 interior vertices (exhausting the $4^4$ interior colorings)". Precisely because of this, whatever proper labeling is used to build the Birkhoff diamond, what comes out is 384/348 (this was checked with three independent constructions + rotation/reflection invariance). One needs to distinguish:
>
> **the concept of "D-reducible"**
>
> is Birkhoff's classic 1913 contribution; whereas
>
> **the specific numbers "384/348"**
>
> are a conclusion obtained today by a single computer run, and are not numbers printed word for word in Birkhoff's original text. It must also be honestly stated: the Kempe closure in the code below is a
>
> **reproducible demonstration model**
>
> - it faithfully reproduces the count "384 direct + 348 all recovered via the closure", but it is not the complete, rigorous Heesch D-reducibility criterion (the latter has additional non-crossing constraints on "which chain interchanges can be realized simultaneously in the exterior of the plane"). For the Birkhoff diamond, which is D-reducible in the first place, the conclusion given by this demonstration model agrees with the rigorous criterion; for the rigorous criterion itself, see Birkhoff 1913 and Heesch's reducibility algorithm.

The networkx code below can be run directly and reproduces all the counts (the canonical adjacency of the Birkhoff diamond was settled by three independent parties):

```python
import itertools, networkx as nx

# Birkhoff diamond: 6-ring 0..5 + 4 interior points 6,7,8,9; interior diamond = K4 minus edge 7-9 (keeping the diagonal 6-8)
RING   = [(0,1),(1,2),(2,3),(3,4),(4,5),(5,0)]
INNER  = [(6,7),(7,8),(8,9),(9,6),(6,8)]
SPOKES = [(6,5),(6,0),(7,0),(7,1),(7,2),(8,2),(8,3),(9,3),(9,4),(9,5)]   # interior point -> ring
G = nx.Graph(RING+INNER+SPOKES)
assert G.number_of_nodes()==10 and G.number_of_edges()==21        # 10 vertices 21 edges
assert sorted(d for n,d in G.degree() if n in (6,7,8,9))==[5,5,5,5]  # interior points all degree 5
assert nx.check_planarity(G)[0]                                    # planar

CONSTR = INNER + SPOKES                                            # edges involving the interior
RING_COLS = [c for c in itertools.product(range(4),repeat=6)
             if all(c[a]!=c[b] for a,b in RING)]
assert len(RING_COLS) == 732                                       # P(C6,4)=3^6+3

def direct(rc):                       # can the ring coloring be filled in at the 4 interior points "directly, without Kempe" (exhausting 4^4)
    base = {i: rc[i] for i in range(6)}
    return any(all({**base,6:a,7:b,8:c,9:d}[x] != {**base,6:a,7:b,8:c,9:d}[y]
                   for x,y in CONSTR) for a,b,c,d in itertools.product(range(4),repeat=4))

# Note: the Kempe closure below is a reproducible *demonstration* model of D-reducibility; it faithfully reproduces the count "384 direct + 348 via the closure"
#     but it is not the complete rigorous Heesch D-reducibility criterion (the latter has additional non-crossing constraints on "which interchanges can be realized
#     simultaneously in the exterior of the plane"). For the rigorous criterion see Birkhoff 1913 / Heesch's D-reducibility algorithm.
def kempe_moves(rc):                  # exterior i-j Kempe chain = swapping one contiguous block of ring points colored {i,j}
    moves = []
    for i,j in itertools.combinations(range(4),2):
        pos = [k for k in range(6) if rc[k] in (i,j)]
        for s in range(len(pos)):
            for L in range(1, len(pos)):
                blk = {pos[(s+t)%len(pos)] for t in range(L)}
                new = [(j if rc[k]==i else i) if k in blk else rc[k] for k in range(6)]
                if all(new[a]!=new[b] for a,b in RING):
                    moves.append(tuple(new))
    return moves

direct_set = {rc for rc in RING_COLS if direct(rc)}
def d_good(rc):                       # can rc reach, via the Kempe closure, some coloring that extends directly
    seen, st = {rc}, [rc]
    while st:
        x = st.pop()
        if x in direct_set: return True
        for y in kempe_moves(x):
            if y not in seen: seen.add(y); st.append(y)
    return False

D = len(direct_set)
recovered = sum(d_good(rc) for rc in RING_COLS if rc not in direct_set)
print(D, recovered, D + recovered)        # -> 384 348 732  (all 732 D-reducible)
```

![Birkhoff diamond reducibility check](/content/images/2026/06/gif5_2_birkhoff.gif)

*Figure 5.2 The Birkhoff diamond: a 6-vertex ring + 4 interior points; the 732 ring colorings are verified one by one to be extendable (384 directly + 348 via Kempe swaps) (video B25a, the reducibility checking bench).*

### Unavoidable sets and the discharging method

Having "some reducible configurations" alone is not enough - one must also prove that they form an **unavoidable set**: every planar graph (and hence every minimal counterexample) contains at least one of them. This step is done by the [**discharging method**](https://en.wikipedia.org/wiki/Discharging_method_%28discrete_mathematics%29).

**Proposition 5.3** (the total charge is positive). *In a triangulated planar graph, assign to each vertex $v$ the "charge" $6 - \deg(v)$; then the total charge is always $+12$:*

$$
\sum_{v} \bigl(6 - \deg(v)\bigr) = 6V - 2E = 6V - 2(3V - 6) = 12. \tag{5.2}
$$

*Proof.* By the handshake theorem $\sum_v \deg(v) = 2E$, and a triangulation attains equality in $(3.2)$, $E = 3V-6$; substituting gives $6V - 2E = 6V - (6V-12) = 12$. **(QED)**

![Discharging: total charge +12, moved along edges](/content/images/2026/06/fig5_5_discharging.png)

*Figure 5.5 Left: why is the total charge $+12$? Taking the octahedron as an example, every vertex has degree 4, charge $6-4=+2$, and $6\times(+2)=+12$; this sum is determined only by Euler's formula, and has nothing to do with how exactly the triangulation is done. Right: a discharging "rule" means moving charge along edges to neighbors by a fixed procedure (green arrows) - moving does not change the total, and the sum is still $+12$. When the rules are designed well, the vertices still carrying positive charge after the moving can only have surroundings that fall into a finite number of configurations listed in advance. (Schematic; RSST actually used 32 such rules.)*

A total charge of $+12 > 0$ means that **there must be a positively charged vertex**, that is, a vertex of degree $\le 5$ (those of degree $\ge 6$ have charge $\le 0$). The essence of the discharging method is: **move charge from some vertices to their neighbors according to a fixed set of rules** (moving does not change the total; it is still $+12$). When the rules are designed well, the vertices still carrying positive charge after the moving must have local structure around them that falls into the configuration set listed in advance - so "what the neighborhood of a vertex of degree $\le 5$ looks like" is exhaustively classified, and the configuration set is proved **unavoidable**.

![Discharging: redistributing the charge](/content/images/2026/06/gif5_1_discharge.gif)

*Figure 5.1 (animation) Assign each vertex the charge $6-\deg(v)$; by Euler's formula the total is always $+12>0$; then move charge from the central vertex toward its neighbors according to fixed rules (green arrows) - moving does not change the total, but forces "who still carries positive charge" into a finite number of local configurations (video B24).*

Putting "unavoidable" together with "every configuration is reducible": a minimal counterexample must contain some configuration (unavoidable), and that configuration is reducible (deriving a contradiction). The minimal counterexample does not exist, and the Four Color Theorem holds.

### 1976, and the repairs after it

Both halves of this framework - listing the unavoidable set and verifying reducibility one by one - are on a scale far beyond human hands:

- **Appel–Haken 1976**: an unavoidable set of about **1476** configurations (initially about 1834, gradually reduced to about 1476); the reducibility verification consumed about **1200 hours** of machine time. This is the first major theorem in history that **essentially depends on a computer**: nobody could check those more than a thousand configurations by hand one by one.
- **Schmidt 1981**: the German student Ulrich Schmidt checked about **forty percent** (this proportion is as recorded in Robin Wilson's book *Four Colors Suffice*) of the "unavoidability" part of the proof, and found **one** substantive error in the discharging process. Note the measure of this: forty percent is the **scope he checked**, not "forty percent was wrong"; the error is **one**, not a whole stretch. This error (together with several that others found later) was all repaired in Appel–Haken's **1989** book. The proof is right, but its process was not unassailable.
- **Robertson–Sanders–Seymour–Thomas 1996 (paper published 1997)**: a much cleaner new proof, compressing the configurations from over a thousand to **633**, and reducing the discharging rules from Appel–Haken's **487** to **32**. This settled the doubt "is it actually right" - but one knot still remained: you still had to trust that the programs running the reducibility checks were not themselves written wrong.
- **Gonthier 2005**: using the proof assistant **Coq**, the whole proof - not just the result, but every step of the logic - was handed over to the machine for complete formal verification. This downgraded "trusting a whole pile of special-purpose programs" to "trusting Coq's tiny, repeatedly reviewed kernel". The computer proof that once set off the dispute "does this still count as a proof" itself became the gold standard of credibility.

> **Remark 5.4.**
>
> Formal verification (Coq, and today Lean) is exactly the legacy the Four Color Theorem leaves to the present: as long as a proof can be translated into this kind of language and checked step by step by a machine, its rightness or wrongness has a criterion that does not depend on human eyes reading it through - a wrong one does not pass. This thread is exactly the hardest line of defense when the next section (§6) faces proofs in the AI age that "look credible but are not necessarily right".

### So - can one write a program that proves the whole thing? Answer: yes

Having read this far, a very natural question is: since the Birkhoff code above can already "decide with one run whether a configuration is reducible", if it were **scaled up**, could a program finish proving the whole Four Color Theorem?

**Yes. And this is exactly the most special thing about the Four Color Theorem - its proof is itself a program.** Taken apart, this program consists of two parts that can be run separately and together complete the proof:

1. **Reducibility = a scaled-up version of the code above.** What the Birkhoff demo in §5 does is "enumerate all proper colorings of the ring and decide one by one whether they can be extended". What a complete proof has to do is run **the same thing** once on each of RSST's **633** configurations (each configuration's ring is larger and its interior more complex, but the **logic** of the decision is **isomorphic**). This step is naturally a job for the computer - but two scales must be distinguished: **a single** configuration (like the Birkhoff demo in this article) can be decided today in a few seconds to a few minutes; whereas a complete rerun of **the D-reducibility of all 633 configurations, plus the unavoidability for the 32 rules**, is a proper computation - in 1976 Appel–Haken spent about 1200 hours of machine time, and today, although much faster, it still needs considerable computing power and time (rerunning and cross-checking with another independent program takes hours and up), **and is certainly not a one-click result in a few minutes**.
2. **Unavoidability = a programmatic check of the discharging rules.** The discharging method of §5 (Proposition 5.3 + Figure 5.5) needs to prove that "those 633 configurations form an unavoidable set". RSST compressed it into **32 discharging rules**, and wrote it as a decision procedure that a machine can verify rule by rule - that is to say, the fact that "nobody can escape this set of configurations" is likewise something a program can run out.

Both halves are programs, and together they are the complete proof. **So "writing a program to prove the Four Color Theorem" is not a metaphor, but, in the literal sense, the way the Four Color Theorem has been proved ever since 1976.**

**So should you write a checker for over a thousand configurations from scratch yourself? - No need, and you should not.** Ready-made, runnable complete implementations have long been public, and repeatedly and independently checked. The most practical approach is in three layers, taken according to the "degree of certainty" you want:

- **If you want a feel for it first (a few minutes)**: just run the Birkhoff reducibility code in §5 of this article. It is a faithful slice of the whole proof on **a single configuration** - acting out in full the core action of "enumerate ring colorings + decide extension".
- **If you want to run the real complete proof data (633 configurations + 32 rules)**: use directly the programs and data published by Robertson–Sanders–Seymour–Thomas - the [official Four Color Theorem page](https://thomas.math.gatech.edu/FC/fourcolor.html) hosts the complete list of the 633 configurations (`unavoidable.pdf`), diagrams of the 32 discharging rules, and the C programs and data files used back then for the reducibility checks and the unavoidability verification. Gašper Fijavž, under the supervision of Bojan Mohar, also independently wrote a set of programs (see the RSST official page). **Do not reinvent the wheel** - what you build would be nothing more than a cruder version of it.
- **If you want the gold standard that leaves no room for "might the program be written wrong"**: use Georges Gonthier's **complete Coq formalization** - [coq-community/fourcolor](https://github.com/coq-community/fourcolor). It translates **every step of the logic** of the proof (not only those computational results) into Coq, and hands it to the proof assistant's kernel, which verifies it step by step. To trust it, you only need to trust Coq's tiny kernel, repeatedly reviewed by the whole world, and no longer need to trust any piece of special-purpose checking code.

To close this section in one sentence: the Four Color Theorem pushed the business of "proof" into a new position - **its correctness is no longer guaranteed by some person understanding a paper, but by a program (which anyone can download, rerun, and even rewrite in another language)**. This is precisely the positive point of reference for the trust problem of the AI age that the next section will discuss: although the 1976 computer proof "could not be read through by anyone", it **could be rerun by anyone and checked independently**; this fallback of "being machine-recheckable" is exactly what we most want, and what is scarcest, when we face black-box AI arguments today.

---

## §6 The same problem, replayed more dangerously: the crisis of trust in the AI age

> **The base material for this chapter = Gauss's in-depth report "From the Four Color Theorem to the Leiden Declaration"**
>
> (primary-source checked). What follows is a rewrite for the blog; all "live data" and unpublished items carry caveats.

The problem the Four Color Theorem left behind is not history; it is **the present, being replayed on a larger scale**.

**The 1976 computer vs the 2026 AI have one essential difference** - this is the most important cut in the whole affair:

- **The 1976 computer** did manual labor: it checked one by one the more than a thousand configurations that people had thought up, and did not propose any new idea. Its fault was "**it computes correctly, but nobody can read it all**" (unsurveyable). Against this fault, the answer is Gonthier-style **machine formal verification**.
- **The 2026 AI** has exactly the reverse fault: it can write arguments that read as watertight yet hide an error at some plausible-looking but wrong spot - "**it looks right, but is not necessarily really right**". And it really is **creating new mathematics** now.

**A live example of real creation (2026-05)**: a reasoning model of an unpublished type overturned Erdős's 1946 **unit distance conjecture** - attacking discrete geometry with tools from number theory, and building a new construction nobody had thought of. Nine top mathematicians wrote a paper specifically to verify it ([arXiv:2605.20695](https://arxiv.org/abs/2605.20695)). The assessment written by Fields Medalist Tim Gowers in the companion paper ([reprinted in full on the OpenAI announcement page; click through to check it word for word](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)): "There is no doubt that the solution to the unit-distance problem is a milestone in AI mathematics: if a human had written the paper and submitted it to the Annals of Mathematics, I would have recommended acceptance without any hesitation." But the way it landed stepped exactly on the two points everyone worries about most: **failing to cite earlier work + a fully black-box method**.

**The contrasting counterexample (2025-10)**: an OpenAI executive posted that a model had "solved 10 unsolved Erdős problems", and was exposed by the database maintainer Thomas Bloom as a "serious mischaracterization" - the AI had only retrieved ready-made answers from existing literature. "Finding a ready-made one" and "solving it originally", it turns out, form one continuous gray band.

**The collective response (2026-06-02)**: mathematicians signed the **Leiden Declaration** (endorsed by the International Mathematical Union), listing 5 core values of mathematics and 5 threats that AI brings:

| Value | Threat |
| --- | --- |
| Proof gives the highest level of certainty | arguments that "seem credible but are unreliable, and are hard to distinguish from real proofs" |
| Results are attributed to specific authors, who are accountable | models synthesizing people's work without citing it |
| Arguments are transparent and independently verifiable | rushing out results via press releases/blogs, bypassing review |
| Evaluation by shared standards | AI itself being treated as the goal, distorting hiring and funding |
| Directions are decided by expert judgment | choosing problems by "whether AI can do them easily" |

> **Honest labels**: ① The number of signatures is a live counter (over a hundred at release, nearly eight hundred within a day, still rising); do not treat it as a fixed value. ② The OpenAI model type has not been published; it is not a confirmed GPT-5.x. ③
>
> **The four-color↔AI parallel was drawn by the commentator Gil Kalai; it is not in the original text of the Leiden Declaration**
>
> - this article uses it as the main axis of its argument, but notes where it comes from. ④ Tao is not among the signatories of the declaration.

**Two ways out**:

1. **Formal verification** - the road the Four Color Theorem itself left behind. As long as a proof can be translated into a language like Lean and checked step by step by a machine, it is certainly right (a wrong one does not pass); DeepMind's AlphaProof is the AI version of the Gonthier route. There is also a premise here that is often skipped: what the machine verifies is whether **the proof itself** is right; it is not responsible for guaranteeing that "the **statement** being proved is exactly the one you want" - if the statement of the theorem is translated askew, a valid machine-checked proof can still mislead. **Boundary**: formalization covers only the parts that have already been written in a formal language, and depends on the statement being translated faithfully.
2. **Holding on to human judgment.** Fields Medalist Peter Scholze (a signatory of the [Leiden Declaration](https://leidendeclaration.ai/)): "The goal of mathematical research is human understanding of mathematics, and so mathematics can only thrive in a community of human mathematicians."

---

## Closing

The wrong proof of 1879, believed for eleven years, and these AI proofs of 2026 that nobody can fully vouch for, are in fact asking the same question. Only now, even the proof itself may already have been written for you by the machine.

From 1976 to today, the hard part has never been "computing it out". The hard part is judgment - what exactly counts as "solved", and on what grounds we believe it.

---

---

## Sources

**Early history and people** - Early history of the four color problem (Guthrie 1852, De Morgan→Hamilton letter of 1852-10-23, Cayley 1878–79, Heawood 1890) —— [MacTutor: The Four Colour Theorem](https://mathshistory.st-andrews.ac.uk/HistTopics/The_four_colour_theorem/) - Alfred Kempe (the 1879 proof; elected a Fellow of the Royal Society in 1881 for his work on linkages/kinematics) —— [MacTutor: Kempe](https://mathshistory.st-andrews.ac.uk/Biographies/Kempe/) - The Errera graph (Alfred Errera, 1921; 17 vertices 45 edges) —— [Wikipedia: Errera graph](https://en.wikipedia.org/wiki/Errera_graph) - Tait's edge-coloring equivalence and Hamiltonian assumption (1880) —— [Wikipedia: Tait's conjecture](https://en.wikipedia.org/wiki/Tait%27s_conjecture) - Tutte's non-Hamiltonian cubic planar graph (1946; 46 vertices) —— [Wikipedia: Tutte graph](https://en.wikipedia.org/wiki/Tutte_graph)

**Machine proof** - The Birkhoff diamond / D-reducibility (G. D. Birkhoff, *The Reducibility of Maps*, Amer. J. Math. 35:115–128, 1913) —— [full text at archive.org](https://archive.org/details/jstor-2370276) - Appel–Haken 1976 + Schmidt's 1981 check —— [Wikipedia: Four color theorem](https://en.wikipedia.org/wiki/Four_color_theorem) - The new proof of Robertson–Sanders–Seymour–Thomas (1996/1997; 633 configurations / 32 discharging rules; includes runnable programs and data) —— [Robin Thomas: The Four Color Theorem](https://thomas.math.gatech.edu/FC/fourcolor.html) - Gonthier's Coq formalization (2005) —— [coq-community/fourcolor](https://github.com/coq-community/fourcolor) · [*Formal Proof—The Four-Color Theorem*, AMS Notices 2008 (PDF)](https://www.ams.org/notices/200811/tx081101382p.pdf)

**The AI age (§6)** - The human verification paper for the disproof of the unit distance conjecture (9 authors) —— [arXiv:2605.20695](https://arxiv.org/abs/2605.20695) - Tim Gowers's assessment ("milestone in AI mathematics…") —— [OpenAI announcement page](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) - The GPT-5 "solved 10 problems" mischaracterization + Thomas Bloom's clarification (2025-10) —— [TechCrunch](https://techcrunch.com/2025/10/19/openais-embarrassing-math/) - The Leiden Declaration (IMU-endorsed) —— [leidendeclaration.ai](https://leidendeclaration.ai/) · [list of signatories](https://leidendeclaration.ai/signatories) - Peter Scholze's endorsement quote —— [Leiden Declaration official site](https://leidendeclaration.ai/) - Source of the four-color↔AI parallel (Gil Kalai) —— [Combinatorics and More, 2026-05-21](https://gilkalai.wordpress.com/2026/05/21/amazing-erdos-unit-distance-problem-was-disproved-it-was-achieved-by-ai/) - AlphaProof (silver-medal-level formal proofs at IMO 2024) —— [DeepMind](https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/)

*(Sources checked item by item in Gauss's historical-fact round, curl-200 live, 2026-06-04.)*
