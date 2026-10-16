---
title: "E09 Mathematical Addendum · The Tail End of Berlin 1753-1766"
date: 2026-05-20
lang: en
tags:
  - timeobserver137
  - math-companion
  - e09
series: euler
seriesOrder: 9
ghostSlug: e09-berlin-iv-final
---

## Introduction · Written before the mathematical derivations

> Companion video: E09 "The Tail End of Berlin · 1753–1766"

To be honest, after I finished making this episode's video, one thing stayed with me strongly: in the 15 years from 1750 to 1765, Euler, alone at his desk in Berlin, had 4 notebooks open at the same time. Looking back now, what was written in those 4 notebooks grew, respectively, into today's topology, computational fluid dynamics, attitude control, and internet cryptography.

In the video we only had time to tell the story and give the intuition; the part about "why it really holds" has to be written down here... My own feeling is that for many viewers, just watching the video is not enough; they will feel "Euler was really impressive, but I still don't know how it actually works". So there is this blog post.

Below I will use roughly 5 minutes' worth of space to say what each of the 4 theorems is about, and why they are still being used 270 years later. It is fine to stop once you have read that far; if you want to go on to the proofs, scroll down to §1 through §4.

---

## The 4 mathematical stories of this episode

### §1 · V − E + F = 2 — the polyhedron identity

A cube has 8 vertices, 12 edges, 6 faces: 8 − 12 + 6 = 2. A regular tetrahedron: 4 − 6 + 4 = 2. On November 14, 1750, Euler wrote to Goldbach and stated this for the first time.

Why? Because a polyhedron's "freedom of shape" and its "surface topology" are two different things... however you squeeze it and however you stretch it, as long as you do not poke a hole, this 2 will not change. This one observation later became the starting point of all of topology.

One application I personally found rather surprising is the soccer-ball molecule C60. In 1985 chemists discovered that carbon atoms have a configuration in which exactly 60 atoms form a soccer ball; this kind of molecule is called a fullerene. Euler's formula here forces it to have exactly 12 pentagonal faces — not one more, not one less, and this has nothing at all to do with how many hexagons there are. In 1996 this discovery won the Nobel Prize.

### §2 · The fluid equations — the first partial differential equations

When Newton wrote F = ma it was meant for "point masses". But what about water? What about air?

From 1752 to 1755, Euler extended F = ma to continuous matter... and the result was the first system of partial differential equations in human history. Today this set of equations goes by the name CFD; airplane wings, weather forecasting, simulations of blood flow in the heart all use it.

Its extended version, Navier-Stokes, is still one of the 7 Millennium Prize Problems, with a prize of 1 million US dollars; the reward has been offered for 25 years and no one has been able to solve it. Our understanding of how fluids behave is still incomplete today.

### §3 · The rigid-body equations + Euler angles — why a top does not fall over

The Earth spins about its axis once every 24 hours; the front wheel of a bicycle, when it spins fast, does not fall over; a nut floating freely on the ISS spontaneously flips over periodically... These seemingly unrelated phenomena are all described in one sentence by Euler's rigid-body equations $I\dot{\boldsymbol{\omega}} + \boldsymbol{\omega}\times(I\boldsymbol{\omega}) = \boldsymbol{\tau}$.

That 1985 Dzhanibekov nut experiment on the ISS is very striking, compared with the ground, where this phenomenon simply cannot be seen. Today the attitude control of flying vehicles, the planning of robot wrists, and the algorithms that rotate bones in animation engines all rest, at the bottom, on this mathematics that Euler ground out over 15 years in Berlin.

### §4 · Euler's theorem + RSA — the root of contemporary cryptography

In 1763 Euler generalized a small observation of Fermat's ("2 to the 6th power equals 64, which leaves remainder 1 when divided by 7") to an arbitrary modulus.

213 years later, in 1977, three people at MIT — Rivest, Shamir, Adleman — discovered that this theorem of Euler's could be used to build a kind of asymmetric encryption. The key used for encryption can be made public, while the key for decryption is kept strictly secret... This is RSA.

What I find interesting when I think about it is that when Euler was writing this theorem, he could not possibly have foreseen that centuries later it would become the cornerstone of the whole internet's system of trust. Today the padlock in your browser's address bar, the login to your banking app, every encrypted email you send — the first step, the handshake, uses RSA.

---

## Why put these 4 theorems in one episode?

They look as though they have nothing whatsoever to do with each other — topology, fluids, rigid bodies, number theory. But they were written by the same person, in the same period, in the same city, at the same desk. 1750 to 1765: Euler's 15 years in Berlin.

Thinking back on the popular introductions to Euler I used to read, they generally say "he researched everything", "he was the king of mathematics"; this kind of description is actually of no use, and after hearing it you know nothing. I myself tend to think of it this way: in those 15 years he did not know that these 4 things would become the foundations of 4 modern disciplines; he just spread 4 notebooks out on his desk and wrote at his own pace. Looking back today, each one of these 4 notebooks has grown into a large tree.

The 4 §s below are complete, peer-reviewed, rigorous proofs. Every formula is derived from the beginning. If at any point you feel "wait, why is this so", you can go back to the corresponding timecode in the video (marked at the top of each §), or look directly at the worked example block and compute it once with concrete numbers — I think that for many people, computing it once with concrete numbers is easier to understand than reading an abstract proof.

By the way, this blog post was actually not written by me alone. The proofs were written by Abel, Socrates and Gauss each did two rounds of review (logical rigor + historical fact-checking), Escher made the illustrations and GIF animations, and Euler handled the Ghost publishing. My own part is this introduction, plus steering the direction of the whole project. I find this way of collaborating quite novel... one person plus a group of AI partners, each with their own specialty, produces something that is probably a good deal more rigorous than what I would write on my own.

— Yeqiu and his AI partners · timeobserver137

---

## §1 · Rigorous proof of the polyhedron formula V−E+F=2

> Companion video: 04:07–07:40 (segment M1)
>
> **This section assumes you are familiar with**
>
> : high-school solid geometry (counting vertices/edges/faces), elementary graph theory (vertices, edges, faces, connectedness), induction.

## Summary in one sentence

For any **convex polyhedron** (more generally, for any finite polyhedron homeomorphic to the sphere), the number of vertices $V$, the number of edges $E$ and the number of faces $F$ always satisfy

$$
V - E + F = 2.
$$

This identity was put forward by Euler in a letter to Goldbach on November 14, 1750. On the surface it is an elementary combinatorial equation, but in fact it is the first cornerstone of **topology**: today we call the quantity $\chi = V - E + F$ the **Euler characteristic** of the surface, and for the sphere $\chi(S^2) = 2$. This section gives four routes of proof from 1750 to the modern day, highlighting the assumptions and gaps of each step.

---

## 1.1 Euler 1750: the informal cut-a-face-and-flatten argument

The argument Euler himself gave runs roughly as follows:

**Step 1**: Take any face of the polyhedron and "cut out" that face, obtaining a **polyhedral shell with a hole**; at this point $V$ and $E$ are unchanged and $F$ decreases by 1, so

$$
V - E + F = V - E + (F-1) + 1.
$$

**Step 2**: **Flatten** the remaining shell onto the plane along the boundary that was cut out. After flattening one obtains a **plane graph** $G$, still with $V$ vertices and still with $E$ edges, and with $F-1$ bounded faces plus $1$ **unbounded outer face**, $F$ in total.

**Step 3**: Repeatedly apply two kinds of reduction to the plane graph: - **Triangulation**: if some bounded face is not a triangle, add a diagonal inside it; $E$ and $F$ each increase by $1$, and the identity is unchanged. - **Deleting an edge or a vertex**: when all faces are already triangles, deleting a **boundary triangle** correspondingly decreases $E$ and $F$ each by $1$ (or, removing a leaf vertex, $V-E$ decrease together), and the identity is unchanged.

**Step 4**: Keep reducing until only one triangle is left, $V=3, E=3, F=2$ (one triangular face + one outer face); at this point $V-E+F = 3-3+2 = 2$. Tracing back through all the reductions, the original polyhedron also satisfies $V-E+F=2$.

**Gaps**: Euler's argument has two non-rigorous points, which it took later generations more than 60 years to fill.

1. **Flattening does not always give a plane graph**: the geometric action of "unfolding the shell onto the plane" is shape-preservingly feasible only for **convex** polyhedra; for a non-convex polyhedron (such as a star shape with grooves) one must first argue that it can be deformed homotopically and continuously to the sphere and then flattened. Euler tacitly assumed the polyhedron was convex, but he did not say so explicitly.
2. **Convergence of the triangulation–edge-deletion reduction**: does this process terminate for an arbitrary plane graph? Euler assumed one could delete all the way down to a single triangle, but whether it could fall into an **infinite loop** (for example, all faces are triangles but there is no boundary triangle that can be deleted) was not proved.

These two gaps were filled by Legendre in 1794 and Cauchy in 1813 respectively.

---

## 1.2 Legendre 1794: the spherical excess route

**Core idea**: Inscribe the convex polyhedron in the unit sphere, and project each face of the polyhedron from the center of the sphere. Each face becomes a **spherical polygon**, and all the faces of the polyhedron **cover the whole sphere**, with total area $4\pi$.

**Lemma (spherical triangle formula)**. For a triangle on the unit sphere whose three interior angles are $\alpha, \beta, \gamma$, its spherical area satisfies

$$
A_\triangle = (\alpha + \beta + \gamma) - \pi.
$$

(This is the famous result of Harriot 1603 / Girard 1629; the area of a general spherical $n$-gon is its interior angle sum minus $(n-2)\pi$.)

**Corollary (spherical $n$-gon)**. The spherical area of an $n$-gon on the sphere is

$$
A_n = \left(\sum_{i=1}^n \alpha_i\right) - (n-2)\pi.
$$

**Outline of Legendre's proof**.

Let the $k$-th face project to a spherical $n_k$-gon, with interior angle sum $S_k$ and number of edges $n_k$. All the faces cover the total area of the sphere:

$$
\sum_k A_{n_k} = \sum_k \big( S_k - (n_k-2)\pi \big) = \left(\sum_k S_k\right) - \pi \sum_k n_k + 2\pi F = 4\pi.
$$

Next, count each term separately:

- $\sum_k n_k$ counts the sum of the numbers of edges of each face. But each edge belongs to exactly two faces, so $\sum_k n_k = 2E$.
- $\sum_k S_k$ is the sum of the interior angles of all faces at all vertices. At each vertex, the sum of the interior angles of all the spherical polygons having that vertex as a corner is exactly $2\pi$ (they go around that point on the unit sphere one full turn). So $\sum_k S_k = 2\pi V$.

Substituting gives

$$
2\pi V - 2\pi E + 2\pi F = 4\pi, \quad \Longrightarrow \quad V - E + F = 2. \qquad \blacksquare
$$

**Advantage**: this proof completely avoids Euler's flattening action, using only spherical geometry and simple counting; its drawback is that it **applies only to convex polyhedra** (only these can be inscribed in a sphere and projected from the center).

---

## 1.3 Cauchy 1813: the modern textbook standard (induction on plane graphs)

In *Recherches sur les polyèdres*, Cauchy gave the earliest inductive proof that is rigorous in the strict sense; it is also the version most commonly used in modern graph theory and topology textbooks.

**First step**: Following Euler's 1750 line of thought, choose a face, cut it out and flatten into a plane graph $G$. We want to prove that every **connected plane graph $G$** satisfies

$$
V(G) - E(G) + F(G) = 2,
$$

where $F(G)$ includes the **unbounded outer face** (that is, the unbounded region corresponding to the face that was cut out).

**Second step (base of induction)**: the single-point plane graph $V=1, E=0, F=1$ (only one outer face); obviously $V-E+F=2$.

**Third step (induction)**: For any connected plane graph $G$ (number of vertices $V \geq 2$), split into two cases, "contains a cycle vs. tree":

- **Case A: $G$ contains a cycle**. Pick any edge $e$ **lying on the cycle** and delete it. After deletion the graph is still connected (removing one edge from a cycle, other paths take its place), $V$ is unchanged, $E$ decreases by $1$; and the two faces that $e$ separated in the original graph merge into one, so $F$ also decreases by $1$. By the induction hypothesis $V-(E-1)+(F-1) = 2$, so $V-E+F=2$.
- **Case B: $G$ contains no cycle (that is, $G$ is connected and acyclic, a tree)**. Any tree with $\geq 2$ vertices contains at least two **leaf vertices** (vertices of degree $1$). Choose one leaf vertex $v$ and its unique incident edge $e$, and delete them together → $V$ decreases by $1$, $E$ decreases by $1$, $F$ is unchanged (a tree originally has only $1$ outer face, and deleting a leaf neither adds nor removes faces). By the induction hypothesis $(V-1)-(E-1)+F = V-E+F = 2$.

(Note: the originally naive assertion "if $e$ is a bridge, then one of its endpoints must be a leaf" is in fact **not true** — a counterexample is the **barbell graph** (a bridge edge between two triangles), where both ends of the bridge have degree $3$. The corrected "contains a cycle vs. tree" dichotomy is universal and rigorous.)

By induction, every connected plane graph satisfies $V-E+F=2$. $\blacksquare$

**Key observation**. Cauchy's proof depends only on the **connectedness** and **planarity** of the graph, not on geometric convexity. It therefore extends Euler's formula in one stroke from convex polyhedra to any polyhedron homeomorphic to the sphere (allowing Schönhardt-type ones that are non-convex but topological spheres).

**Pitfall**: this proof does not tell us how the formula should be corrected once a polyhedron is no longer homeomorphic to the sphere (for example a torus with a handle). That had to wait until Riemann (1851) and Poincaré (1895) provided a new language.

---

## 1.4 The modern view: the topological invariant $\chi$

At the beginning of the 20th century, topologists discovered that $V-E+F$ is not only a numerical identity but a **homotopy invariant** of a **simplicial complex**.

**Definition**. For a compact connected 2-dimensional manifold $M$, choose any **simplicial subdivision** of it (that is, cut $M$ into finitely many triangles, such that adjacent triangles share an edge or a vertex); let the triangulation have $V$ vertices, $E$ edges and $F$ (triangular) faces, and define

$$
\chi(M) := V - E + F.
$$

**Core theorem**. $\chi(M)$ **does not depend on the particular subdivision**; it depends only on the homeomorphism type of $M$.

**Examples**: - The sphere $S^2$: $\chi(S^2) = 2$. - The torus $T^2$ (doughnut): $\chi(T^2) = 0$. - The genus-$g$ orientable closed surface $\Sigma_g$: $\chi(\Sigma_g) = 2 - 2g$. - The Klein bottle: $\chi = 0$. - The projective plane $\mathbb{RP}^2$: $\chi = 1$.

This restates Euler's formula as a clean **topological criterion** (forward direction):

$$
M \cong S^2 \quad \Longrightarrow \quad V - E + F = 2.
$$

(The *reverse direction* $V-E+F=2 \Rightarrow M \cong S^2$ also holds, but it requires the **classification theorem for compact 2-dimensional manifolds** (from Möbius/Klein/Dyck 1888 on); see Massey *Algebraic Topology* §I.7 or a similar textbook; this section does not go into it.)

**Geometric intuition**. The surface of a convex polyhedron is homeomorphic to the sphere (radial projection is a homeomorphism), so $\chi = 2$, which is equivalent to $V-E+F=2$. If the surface of the polyhedron is allowed to "grow holes" (such as a torus-type polyhedron with a handle), then $V-E+F$ no longer equals $2$ but $2-2g$.

**Independent of stretching/bending**. $\chi$ is a homeomorphism invariant, which means that however the surface is **continuously deformed** (without tearing or gluing), the value of $V-E+F$ does not change. This is the first clear example of "topology does not depend on metric".

---

## Worked examples

### Example 1: verifying the count for the octahedron

The regular octahedron has $V=6$ vertices (the top and bottom apexes + the 4 vertices of the middle square), $E=12$ edges (the top and bottom apexes each connect to the 4 square vertices = 8 + the 4 sides of the square = 12), $F=8$ triangular faces (4 on the upper pyramid + 4 on the lower pyramid).

$$
V - E + F = 6 - 12 + 8 = 2. \quad \checkmark
$$

**What this tells us**: the surface of the regular octahedron is homeomorphic to the sphere; it is a topological sphere with $\chi = 2$.

### Example 2: verifying the truncated icosahedron (soccer ball)

The modern soccer-ball pattern is the **truncated icosahedron**: shave a triangle off each of the 12 vertices of the regular icosahedron, obtaining 12 **pentagons** (shaved from the vertices) + 20 **hexagons** (turned out of the original 20 triangular faces).

- Number of vertices $V = 60$ (each original vertex shaved yields 5 new vertices, $12 \times 5 = 60$)
- Number of edges $E = 90$ (12 pentagons + 20 hexagons, each edge belongs to two faces, $(12 \cdot 5 + 20 \cdot 6)/2 = 150/2 = 75$ — wait, recompute: pentagons 5 edges × 12 = 60, hexagons 6 edges × 20 = 120, total edge count (with repetition) = 180, each edge counted twice, $E = 90$ ✓)
- Number of faces $F = 12 + 20 = 32$

$$
V - E + F = 60 - 90 + 32 = 2. \quad \checkmark
$$

**What this tells us**: even for a fairly complex polyhedron with a "non-convex feel" (in fact the Carbon 60 fullerene also has this shape, chemistry 1985, the Kroto-Smalley-Curl Nobel Prize), as long as it is topologically a sphere, $V-E+F$ always = 2. This is why all the fullerene (buckyball) molecules discovered in 1996 must contain exactly 12 pentagons — solving $V-E+F=2$ + $f_5 \cdot 5 + f_6 \cdot 6 = 2E$ + $3V = 2E$ simultaneously gives $f_5 = 12$, independent of the number of hexagons $f_6$.

---

## Geometric/physical intuition

![The five Platonic solids — each one satisfies V−E+F = 2](/content/images/2026/05/fig1_platonic_solids.png)

> **Fig 1.**
>
> Wireframe projections of the five Platonic solids + V/E/F counts. χ = V−E+F = 2 holds identically on all five surfaces.

🎬 [**Visualization of the cut-flatten proof — video 06:24**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=384s) (anim-04): remove one face, flatten the remaining network onto the plane, inductively delete edges/vertices → proving V−E+F = 2 (chunk M1_07).

🎬 [**Sphere ↔ torus homotopic deformation — video 06:00**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=360s) (anim-03): comparison of the topological invariant χ=2 (sphere) and χ=0 (torus) (chunk M1_06).

Imagine the polyhedron as an **inflated rubber ball**: the vertices are markers, the edges are rubber bands, the faces are rubber membranes. However you **squeeze, stretch, twist** this ball, as long as you do not puncture it and do not glue two membranes together, the **combined** value $V-E+F$ of the number of vertices, edges and faces is always $2$.

But once you poke a hole and turn it into a doughnut (torus), $V-E+F$ immediately jumps to $0$, and this has nothing at all to do with how you "draw" the edges or how you divide the "faces" — it is an **innate** global property of this surface, independent of the subdivision.

---

## Video correspondence

Video **04:07–07:40 (segment M1)**: - 04:07–04:38: the Goldbach letter + V−E+F=2 surfaces for the first time (anim-20) - 04:40–05:09: V/E/F letter hover + tetrahedron 4 vertices 6 edges 4 faces counter (anim-01, anim-21) - 05:10–05:35: 5 regular polyhedra verify V−E+F=2 (anim-02) - 05:35–06:05: sphere ↔ torus homotopic deformation, $\chi$ jumps from 2 to 0 (anim-03) - 06:05–06:35: visualization of Euler's 1750 cut-face–flatten proof (anim-04) - 06:35–07:10: 200-year topology relay portrait grid: Cauchy 1813 / Riemann / Poincaré 1895 / Perelman 2003 (anim-05)

— Abel

---

## §2 · From Newton to Euler: deriving the equations of fluid motion

> Companion video: 07:45–11:11 (segment M2)
>
> **This section assumes you are familiar with**
>
> : multivariable calculus (partial derivatives, chain rule), vector calculus (gradient $\nabla$, divergence $\nabla \cdot$), the divergence theorem (the Gauss-Ostrogradsky formula), Newton's second law.

## Summary in one sentence

Between 1752 and 1755, Euler extended Newton's second law $F = ma$ from discrete "point masses" to a "**continuous medium**" (that is, assuming that a fluid can be regarded as a **continuous field of matter**, with a well-defined local density and velocity at any scale — also called the **continuum hypothesis**, not to be confused with the set-theoretic proposition of the same name). This extension produced the first genuine **system of partial differential equations** — the Euler fluid equations:

$$
\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{\nabla p}{\rho} + \mathbf{g}, \qquad \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0.
$$

It translates "force = mass × acceleration" into the language of vector fields, and is still the cornerstone of computational fluid dynamics (CFD) today. This section gives the standard derivation starting from a control volume, and then briefly introduces how Navier 1822 and Stokes 1845 added the viscous term and extended it into the Navier-Stokes equations.

---

## 2.1 The material derivative: the acceleration following a fluid element

**Problem**. In a continuous medium, the velocity field $\mathbf{v}(\mathbf{x}, t)$ gives **the fluid velocity at spatial position $\mathbf{x}$ at time $t$**. But Newton's second law concerns **the acceleration of a particular fluid element**, not the acceleration at a point in space. The two are not the same.

**Key distinction**: - **Eulerian view**: observe at a fixed spatial point $\mathbf{x}$ how the velocity $\mathbf{v}(\mathbf{x}, t)$ changes. $\partial \mathbf{v}/\partial t$ is the time variation of the velocity at a fixed point in space. - **Lagrangian view**: follow the motion of a particular labeled fluid element. In $F=ma$, the $a$ is that element's "own acceleration".

**Lemma (material derivative)**. The acceleration following the motion of a fluid element can be written as

$$
\frac{D \mathbf{v}}{D t} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}.
$$

*Proof*. Let the fluid element at time $t$ be located at $\mathbf{x}(t)$, with velocity $\mathbf{v}(\mathbf{x}(t), t)$. By the chain rule,

$$
\frac{d}{dt} \mathbf{v}(\mathbf{x}(t), t) = \frac{\partial \mathbf{v}}{\partial t} + \frac{\partial \mathbf{v}}{\partial x_i} \frac{d x_i}{d t}.
$$

And $d x_i / dt = v_i$ (the element is simply carried along by the velocity field), so

$$
\frac{D \mathbf{v}}{D t} = \frac{\partial \mathbf{v}}{\partial t} + v_i \frac{\partial \mathbf{v}}{\partial x_i} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}. \qquad \blacksquare
$$

**Intuition**. The first term $\partial \mathbf{v}/\partial t$ is the **local time variation** (if you stand on a fixed riverbank, how the speed of the river water changes); the second term $(\mathbf{v}\cdot\nabla)\mathbf{v}$ is the **convective term** (if you sit in a small boat, the change in velocity you feel as you drift with the river to different places). Only the sum of the two is the acceleration the fluid element itself feels.

---

## 2.2 Newton's second law + control volume → the Euler equations

**Core idea**. For a **fluid element of density $\rho$ and volume $dV$**, Newton's second law $F = ma$ is written as

$$
\rho \, dV \cdot \frac{D \mathbf{v}}{D t} = \sum \mathbf{F}.
$$

We need to write the $\sum \mathbf{F}$ on the right as the sum of the various kinds of force.

**Three kinds of force acting on the element**:

1. **Pressure gradient** (surface force): on the 6 faces of the element, each face bears the pressure of the surrounding fluid. Let the element be a box with sides $dx \times dy \times dz$; the pressure difference between the left and right faces along the $x$ direction is

$$
\Big(p(x) - p(x + dx)\Big) \, dy \, dz \;\approx\; -\frac{\partial p}{\partial x} \, dx \, dy \, dz.
$$

The same holds in all three directions, and the resultant force is $-\nabla p \cdot dV$.

1. **Gravity** (body force): the weight of the element is $\rho \, dV \cdot \mathbf{g}$.
2. **(Viscous force ignored for now)**: the core assumption of Euler's model is an **inviscid fluid** — there is no internal friction between fluid elements, which interact only through pressure. Formally, this is equivalent to asserting that the Cauchy stress tensor is **isotropic**:

$$
\sigma_{ij} = -p \, \delta_{ij}.
$$

That is, the stress on any small fluid surface consists only of the normal pressure $p$, with no shear stress (the off-diagonal $\sigma_{ij}$ for $i \neq j$ are all $0$). This is the biggest gap from reality, later filled by Navier and Stokes (see 2.4) — the $\sigma_{ij}$ of a Newtonian fluid contains shear terms linear in the strain rate.

**Total resultant force**:

$$
\sum \mathbf{F} = -\nabla p \cdot dV + \rho \mathbf{g} \cdot dV = \left( -\nabla p + \rho \mathbf{g} \right) dV.
$$

Substituting into Newton's second law (dividing both sides by $\rho \, dV$):

$$
\boxed{\;\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{\nabla p}{\rho} + \mathbf{g}.\;}
$$

This is the **Euler fluid momentum equation** (Euler equation of motion; 1755 *Principes généraux* manuscript / 1757 published in the Mémoires de l'Académie de Berlin).

🎬 [**Fluid element force balance — video 08:44**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=524s) (anim-06): balance of 3 forces on a fluid element (pressure gradient / body force / acceleration) + building the Euler equation, chunk M2_03.

### Worked example: incompressible ideal flow around a stationary sphere — the surface pressure distribution

Consider a uniform flow of speed $U$ flowing past a stationary sphere (radius $a$), assuming inviscid + incompressible + irrotational. The velocity field outside the sphere is known (from the Laplace equation + Neumann boundary conditions, e.g. Lamb *Hydrodynamics*):

$$
v_r = U \left( 1 - \frac{a^3}{r^3} \right) \cos\theta, \quad v_\theta = -U \left( 1 + \frac{a^3}{2 r^3} \right) \sin\theta.
$$

**Apply the formula (Bernoulli along a streamline)**. For a **steady ideal flow**, along any streamline $\frac{1}{2} v^2 + p/\rho = \text{const}$. Take the reference point at infinity ($v = U$, $p = p_\infty$):

$$
p = p_\infty + \frac{1}{2}\rho\left( U^2 - v^2 \right).
$$

**Compute (on the sphere $r = a$)**:

$$
v_r\bigg|_{r=a} = 0, \quad v_\theta\bigg|_{r=a} = -\frac{3}{2} U \sin\theta, \quad v^2 = \frac{9}{4} U^2 \sin^2\theta.
$$

$$
\boxed{\;p(a, \theta) - p_\infty = \frac{1}{2}\rho U^2 \left( 1 - \frac{9}{4} \sin^2\theta \right).\;}
$$

**What this tells us**: on the sphere, the pressure is greatest at $\theta = 0$ (the stagnation point facing the flow, the "nose") and at $\theta = \pi$ (the rear stagnation point) ($+\frac{1}{2}\rho U^2$ above ambient pressure); on the two sides of the sphere ($\theta = \pi/2$) the pressure is smallest ($-\frac{5}{8}\rho U^2$ below ambient).

Note: a pressure distribution symmetric front to back means that **the net drag of inviscid flow around a sphere $= 0$** — the famous **D'Alembert paradox** (1752). The drag of real fluids comes from the viscous term added in §2.4; this is the core limitation of the Euler equations.

---

## 2.3 Conservation of mass → the continuity equation

**Problem**. For each fixed spatial region $\Omega$, how does the total mass inside the region change over time?

**Principle of conservation of mass**: change of mass inside the region = inflow - outflow.

**Formalization**. The total mass inside region $\Omega$ is

$$
M(t) = \int_\Omega \rho(\mathbf{x}, t) \, dV.
$$

The mass flow rate out through $\Omega$'s boundary $\partial \Omega$ is

$$
\Phi(t) = \oint_{\partial \Omega} \rho \mathbf{v} \cdot \hat{\mathbf{n}} \, dS,
$$

where $\hat{\mathbf{n}}$ is the outward unit normal vector on $\partial \Omega$. Conservation of mass is then

$$
\frac{d M}{d t} = -\Phi, \qquad \Longrightarrow \qquad \frac{d}{dt}\int_\Omega \rho \, dV + \oint_{\partial \Omega} \rho \mathbf{v} \cdot \hat{\mathbf{n}} \, dS = 0.
$$

The **divergence theorem (Gauss / Ostrogradsky)** converts the boundary integral into a volume integral:

$$
\oint_{\partial \Omega} \rho \mathbf{v} \cdot \hat{\mathbf{n}} \, dS = \int_\Omega \nabla \cdot (\rho \mathbf{v}) \, dV.
$$

Substituting and exchanging integration and differentiation (for a fixed region $\Omega$, $d/dt$ can be moved inside the integral):

$$
\int_\Omega \left[ \frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) \right] dV = 0.
$$

**Key (du Bois-Reymond vanishing lemma)**: this holds for **any region $\Omega$**. Assume the integrand $f$ is continuous; if at some point $\mathbf{x}_0$ we have $f(\mathbf{x}_0) \neq 0$ (without loss of generality $> 0$), then by continuity there exists around $\mathbf{x}_0$ a neighborhood $\Omega_\epsilon$ such that $f > 0$ on all of $\Omega_\epsilon$; taking $\Omega = \Omega_\epsilon$ gives $\int_{\Omega_\epsilon} f \, dV > 0$, a contradiction. So the integrand is $0$ everywhere:

$$
\boxed{\;\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0.\;}
$$

This is the **continuity equation**, which turns conservation of mass from an integral form into a partial differential equation.

**Special case: incompressible flow**. If $\rho = \mathrm{const}$, then $\partial \rho / \partial t = 0$ and $\nabla \rho = 0$, and the continuity equation simplifies to

$$
\nabla \cdot \mathbf{v} = 0.
$$

This is the standard assumption for water flow, and for air at low speeds.

### Worked example: incompressible flow through a pipe of varying cross-section

Consider water (incompressible) flowing through a pipe, with inlet cross-section radius $R_1 = 2 \,\mathrm{cm}$ and inlet velocity $v_1 = 1 \,\mathrm{m/s}$. The pipe narrows to an outlet radius $R_2 = 1 \,\mathrm{cm}$. Find the outlet velocity $v_2$.

**Apply the formula**: for steady incompressible flow, $\nabla \cdot \mathbf{v} = 0$ together with the pipe wall not leaking (that is, conservation of volume flow rate) gives

$$
A_1 v_1 = A_2 v_2, \qquad \pi R_1^2 v_1 = \pi R_2^2 v_2.
$$

**Compute**:

$$
v_2 = \frac{R_1^2}{R_2^2} v_1 = \frac{(2)^2}{(1)^2} \cdot 1 = 4 \,\mathrm{m/s}.
$$

**What this tells us**: halve the radius and the velocity becomes $4$ times as large — the continuity equation translates "conservation of mass" into the everyday intuition "the pipe narrows, the flow speeds up" (this is the principle behind squeezing the outlet of a garden hose: the jet of water gets thinner but flies farther).

🎬 [**Continuity equation inflow/outflow + density change — video 09:22**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=562s) (anim-07, chunk M2_04). 🎬 [**ODE → PDE bridge metaphor — video 09:43**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=583s) (anim-25, chunk M2_05): an intuitive bridge for understanding a "single-point ordinary differential equation" as a "partial differential equation over a whole continuous medium".

---

## 2.4 Navier 1822 + Stokes 1845: adding the viscous term

The core defect of the Euler equations is the assumption of **inviscid flow**, but real fluids have friction at the molecular scale inside them. Navier (1822) and Stokes (1845) each independently added the viscous force to the Euler equations.

**Core idea**. The viscous force comes from velocity gradients inside the fluid — adjacent layers of flow produce shear stress because of their difference in velocity. In the framework of the Cauchy stress tensor, for a **Newtonian fluid** (stress linear in strain rate),

$$
\tau_{ij} = -p \, \delta_{ij} + \mu \left( \frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i} \right) + \lambda \, \delta_{ij} \nabla \cdot \mathbf{v},
$$

where $\mu$ is the **shear viscosity coefficient** and $\lambda$ is the **bulk viscosity coefficient**.

**For incompressible flow** ($\nabla \cdot \mathbf{v} = 0$), the divergence of the stress above simplifies to $\nabla \cdot \boldsymbol{\tau} = -\nabla p + \mu \nabla^2 \mathbf{v}$, and substituting into Newton's second law gives

$$
\boxed{\;\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v} = -\frac{\nabla p}{\rho} + \nu \nabla^2 \mathbf{v} + \mathbf{g},\;}
$$

where $\nu = \mu / \rho$ is the **kinematic viscosity**. These are the **Navier-Stokes equations** for an incompressible Newtonian fluid.

**Relation to the Euler equations**: taking the limit $\nu = 0$ returns the Euler equations, so the Euler equations are the N-S equations in the **ideal / inviscid** case.

🎬 [**Euler → Navier-Stokes formula evolution — video 10:27**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=627s) (anim-09): adding the viscous term ν∇²v to the right side of the Euler equation evolves it into the NS equations, chunk M2_07.

### Worked example: Poiseuille laminar flow in a circular pipe — an analytic solution of NS

Consider steady, incompressible, axisymmetric laminar flow through a circular pipe of radius $R$ and length $L$, with a pressure difference $\Delta p = p_1 - p_2 > 0$ between the two ends. Find the velocity distribution $v(r)$ and the total flow rate $Q$.

**Modeling assumptions**: - Steady: $\partial \mathbf{v}/\partial t = 0$ - Axisymmetric: $\mathbf{v} = v(r) \hat{\mathbf{z}}$ (flow only in the $z$ direction, varying only with $r$) - Incompressible: $\nabla \cdot \mathbf{v} = \partial v / \partial z = 0$ ✓ (automatic) - No gravity (horizontal pipe), or gravity along the axis absorbed into $p$

**Simplifying the NS equations**. The convective term $(v \cdot \nabla)v = v(r) \partial_z (v(r) \hat{\mathbf{z}}) = 0$ ($v$ does not depend on $z$). The $z$-direction NS:

$$
0 = -\frac{1}{\rho} \frac{\partial p}{\partial z} + \nu \nabla^2 v.
$$

In cylindrical coordinates with axial symmetry, $\nabla^2 v = \frac{1}{r} \frac{d}{dr}\left( r \frac{dv}{dr} \right)$. The $r$-direction NS gives $\partial p / \partial r = 0$, that is, $p = p(z)$. The $z$-direction pressure gradient is constant: $\partial p / \partial z = -\Delta p / L$. Substituting:

$$
\frac{\mu}{r} \frac{d}{dr}\left( r \frac{dv}{dr} \right) = -\frac{\Delta p}{L}.
$$

**Integrate** (using $\mu = \rho\nu$):

$$
r \frac{dv}{dr} = -\frac{\Delta p}{2\mu L} r^2 + C_1.
$$

Since the velocity is finite at $r=0$ $\Rightarrow C_1 = 0$. Integrating again:

$$
v(r) = -\frac{\Delta p}{4\mu L} r^2 + C_2.
$$

From no slip at the pipe wall, $v(R) = 0 \Rightarrow C_2 = \frac{\Delta p}{4\mu L} R^2$. Finally:

$$
\boxed{\;v(r) = \frac{\Delta p}{4\mu L} \left( R^2 - r^2 \right).\;}
$$

**Total flow rate**:

$$
Q = \int_0^R v(r) \cdot 2\pi r \, dr = \frac{\pi \Delta p}{2\mu L} \int_0^R (R^2 r - r^3) \, dr = \frac{\pi \Delta p}{2\mu L} \cdot \frac{R^4}{4} = \boxed{\;\frac{\pi R^4 \Delta p}{8 \mu L}.\;}
$$

**What this tells us**: the velocity distribution is a **parabola** (fastest on the axis, zero at the wall); the flow rate $\propto R^4$ — double the radius and the flow rate becomes 16 times as large! This is why hardening of the arteries in the human body (blood-vessel radius reduced by 20%) increases the burden on the heart (the pressure difference) several times over. Poiseuille's experiments of 1838-46 measured this formula; it is the first engineering-grade law in fluid mechanics derived rigorously from the NS equations.

**Historical timeline**: - **1752-08-31**: Euler submits *Principia motus fluidorum* (E258), giving the 2D incompressible flow equations for the first time. - **1755 / E226**: *Principes généraux du mouvement des fluides*, the complete 3D generalization. - **1822**: Claude-Louis Navier adds the viscous term (but his derivation, based on molecular assumptions, is disputed). - **1845**: George Gabriel Stokes re-derives it using the continuum stress tensor, giving today's textbook form.

**A current world-class open problem: global well-posedness of NS (Clay Millennium Problem)**. For general 3D initial data, can the existence + uniqueness + smoothness of NS solutions be established on arbitrary time intervals? This is one of the 7 Millennium Prize Problems, with a prize of 1 million US dollars. As of 2025, the main progress is the 1982 Caffarelli-Kohn-Nirenberg estimate of the Hausdorff dimension of the singular set of suitable weak solutions, but a complete answer has still not been given.

---

## 2.5 Vorticity and Helmholtz's vortex theorems (supplement)

Define the **vorticity** $\boldsymbol{\omega} = \nabla \times \mathbf{v}$. Taking the curl of the Euler equation gives the **vorticity equation**

$$
\frac{D \boldsymbol{\omega}}{D t} = (\boldsymbol{\omega} \cdot \nabla) \mathbf{v},
$$

which reveals Helmholtz's three vortex theorems of 1858: vortex lines move with the fluid elements, vortex lines have no endpoints, and the strength of a vortex tube is conserved over time. This is the theoretical basis for the analysis of atmospheric circulation, tornadoes, and wing lift.

🎬 [**Kármán vortex street — video 10:02**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=602s) (anim-08): periodic shedding of the vortex row behind a cylinder + visualization of vorticity ω = ∇×v, chunk M2_06.

---

## Geometric/physical intuition

Imagine the fluid as **a pot of little water droplets pushing against each other**. The left side of the Euler fluid equation

$$
\frac{D \mathbf{v}}{D t} = \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla) \mathbf{v}
$$

is "the acceleration of a particular droplet". The right side is the force this droplet bears: - $-\nabla p / \rho$: the high-pressure region pushes it toward the low-pressure region (pressure gradient). - $\mathbf{g}$: gravity.

The continuity equation

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0
$$

is "droplets do not vanish or appear out of nowhere in a region" — the local density can change only because matter flows in or out.

![A fluid element + pressure coupling with adjacent elements](/content/images/2026/05/fig2_fluid_element_v2.png)

> **Fig 2.**
>
> A central fluid element + 4 adjacent elements (up / down / left / right) + inward pressure-thrust arrows. The inside of the element is described by three state quantities (ρ, v, p); the neighbors are coupled, in the form of a pressure gradient, to the −∇p/ρ term on the right side of the central equation. This is a geometric miniature of the continuum hypothesis.

---

## Video correspondence

Video **07:45–11:11 (segment M2)**: - 07:45–08:15: single-point particle → continuous medium expand (anim-23) - 08:15–09:00: material derivative + Euler eq force balance (anim-06) - 09:00–09:35: continuity equation inflow/outflow (anim-07) - 09:35–10:10: ODE→PDE bridge metaphor (anim-25) - 10:10–10:40: continuum PDE buildup, momentum + mass (anim-24) - 10:40–11:11: Euler → Navier-Stokes evolution + Karman vortex street (anim-09, anim-08)

— Abel

---

## §3 · The rigid-body equations and Euler angles

> Companion video: 11:16–14:51 (segment M3)
>
> **This section assumes you are familiar with**
>
> : multivariable calculus (chain rule, partial derivatives), linear algebra (eigenvalues of real symmetric matrices and the spectral theorem), vector analysis (cross and dot products, $3 \times 3$ matrices).

## Summary in one sentence

In 1765, in *Theoria motus corporum solidorum seu rigidorum* (published in Rostock+Greifswald), Euler systematically synthesized Newton's $\mathbf{F} = m\mathbf{a}$ into the equations of rotational motion of a **whole rigid body**, obtaining the famous **Euler rigid-body equations**

$$
I \frac{d\boldsymbol{\omega}}{dt} + \boldsymbol{\omega} \times (I \boldsymbol{\omega}) = \boldsymbol{\tau},
$$

where $\boldsymbol{\omega}$ is the angular velocity vector, $I$ is the **inertia tensor**, and $\boldsymbol{\tau}$ is the external torque.

But this theory did not suddenly pop up in 1765 — it was Euler's accumulation across 15 years:

- **1750-09-03**: *Découverte d'un nouveau principe de mécanique* (E177) — the first version of the rigid-body equations
- **1751**: the body-fixed frame turned into a tool
- **1758**: *Recherches sur la connoisance mechanique des corps* (Berlin Mémoires) — discovery of the principal axes of inertia + the first appearance of the term "moment of inertia"
- **1765**: *Theoria motus* — the synthesized system

The key to the whole theory is the introduction of the **inertia tensor** + the parametrization of SO(3) by **Euler angles (φ, θ, ψ)**, and the proof of **Euler's rotation theorem**: any rotation in three-dimensional space can be expressed as a rotation about some **instantaneous axis**. This section gives the tensor framework of $L = I\boldsymbol{\omega}$, the body-frame derivation of the rigid-body equations, the geometry of 3-1-3 Euler angles, and the SO(3) eigenvalue proof of the rotation theorem.

---

## 3.1 Angular momentum $L = I\boldsymbol{\omega}$ and the inertia tensor

**Definition (rigid body)**. A body made up of finitely many (or continuously distributed) point masses, in which the distance between any two point masses does not change over time.

**Angular momentum**. Choose a fixed reference point $O$ in space (the origin of an inertial frame), and assume that **the rigid body rotates relative to $O$** (that is, $O$ is on the rigid body, or is the fixed point about which the rigid body performs pure rotation). The angular momentum of the rigid body is the sum of the angular momenta of the point masses:

$$
\mathbf{L} = \sum_i m_i \, \mathbf{r}_i \times \mathbf{v}_i,
$$

where $\mathbf{r}_i$ is the position vector of the $i$-th point mass relative to $O$, and $\mathbf{v}_i$ is its velocity.

**Key fact**. For a rigid body rotating about $O$ (angular velocity $\boldsymbol{\omega}$), the velocity of each point mass is $\mathbf{v}_i = \boldsymbol{\omega} \times \mathbf{r}_i$; substituting gives

$$
\mathbf{L} = \sum_i m_i \, \mathbf{r}_i \times (\boldsymbol{\omega} \times \mathbf{r}_i).
$$

By the BAC-CAB identity $\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$:

$$
\mathbf{r}_i \times (\boldsymbol{\omega} \times \mathbf{r}_i) = \boldsymbol{\omega} \, |\mathbf{r}_i|^2 - \mathbf{r}_i (\mathbf{r}_i \cdot \boldsymbol{\omega}).
$$

Writing this in component form $L_a = I_{ab}\,\omega_b$ (Einstein summation convention) gives

$$
I_{ab} = \sum_i m_i \left( |\mathbf{r}_i|^2 \delta_{ab} - r_{ia} r_{ib} \right).
$$

**For a continuous mass distribution**:

$$
I_{ab} = \int_V \rho(\mathbf{r}) \left( |\mathbf{r}|^2 \delta_{ab} - r_a r_b \right) dV.
$$

**$I$ is a symmetric tensor**. This is obvious from the definition $I_{ab} = I_{ba}$. Physically, $I$ maps the angular velocity vector to the angular momentum vector; it takes over the role of the "scalar inertia" $m$ in $\mathbf{p} = m\mathbf{v}$.

**Key property**. Since $I$ is real symmetric, by the spectral theorem $I$ can be diagonalized: there exists an orthogonal basis $\hat{\mathbf{e}}_1, \hat{\mathbf{e}}_2, \hat{\mathbf{e}}_3$ such that

$$
I = \mathrm{diag}(I_1, I_2, I_3),
$$

These three $\hat{\mathbf{e}}_k$ are called the **principal axes** of inertia, and the three $I_k \geq 0$ are the **principal moments of inertia** (for a general mass distribution $I_k > 0$; degenerate cases such as a thin rod or a point mass allow some $I_k = 0$). This was introduced by Euler in **1758** in *Recherches sur la connoisance mechanique des corps* (Berlin Mémoires) — which is also the paper in which the term "moment of inertia" first appeared — and was fully retained in the synthesis of the 1765 *Theoria motus*.

![The inertia ellipsoid + the principal axes of inertia](/content/images/2026/05/fig3_inertia_ellipsoid.png)

> **Fig 3.**
>
> The inertia ellipsoid $I_{ab} x_a x_b = 1$ — the semi-axis lengths $1/\sqrt{I_k}$ are inversely related to the three principal moments of inertia $(I_1, I_2, I_3)$. The 3 arrows $\hat{\mathbf{e}}_1, \hat{\mathbf{e}}_2, \hat{\mathbf{e}}_3$ are the directions of the principal axes. Every rigid body, even one of irregular shape, corresponds to a unique inertia ellipsoid.

### Worked example: the moment of inertia of a cube about a face-center axis vs a body-diagonal axis

Consider a solid cube with side $a$, uniform density $\rho$ and total mass $M = \rho a^3$. Find the moment of inertia (a) about a **face-center axis** (passing through the centers of two opposite faces) and (b) about a **body-diagonal axis** (passing through two opposite vertices).

**(a) Face-center axis (e.g. the $z$ axis, along one of the cube's symmetry center lines)**.

By symmetry, the principal axes lie along the three face-center axes, and the principal moments of inertia are $I_x = I_y = I_z =: I_0$.

$$
I_0 = \int_{-a/2}^{a/2} \int_{-a/2}^{a/2} \int_{-a/2}^{a/2} \rho \, (x^2 + y^2) \, dx \, dy \, dz.
$$

By symmetry, $\int x^2 = \int y^2 = a \cdot a \cdot \frac{a^3}{12} = \frac{a^5}{12}$, so

$$
I_0 = \rho \cdot 2 \cdot \frac{a^5}{12} = \frac{\rho a^5}{6} = \frac{M a^2}{6}.
$$

**(b) Body-diagonal axis**.

In the face-center-axis basis the inertia tensor is $I = \frac{Ma^2}{6} \mathbb{I}$ (isotropic, three equal eigenvalues), so $I$ is $\frac{Ma^2}{6} \mathbb{I}$ in **any** orthogonal basis — including the direction of the body-diagonal axis.

$$
I_\text{diag} = \frac{Ma^2}{6}.
$$

**What this tells us**: because of its cubic symmetry (3 $C_4$ axes + 4 $C_3$ body-diagonal axes), the cube's inertia tensor is isotropic (degenerate, a triple eigenvalue). About **any axis through the center**, the moment of inertia is $Ma^2/6$. This is an example of high symmetry "promoting" the principal moments of inertia to a constant. By contrast, a rectangular box (with unequal sides) has three different principal moments of inertia, and its rotational behavior is very different (e.g. the Dzhanibekov effect, see the example below).

---

## 3.2 Euler's rigid-body equations (body-frame derivation)

The rotational version of Newton's second law (in an inertial frame):

$$
\frac{d \mathbf{L}}{d t}\bigg|_{\text{inertial}} = \boldsymbol{\tau}.
$$

**Difficulty**. With $\mathbf{L} = I \boldsymbol{\omega}$ in the inertial frame, $I$ changes over time (because the rigid body is rotating, the orientation of its principal axes is rotating too), and computing $dI/dt$ is troublesome.

**Solution**. In the **body frame that rotates together with the rigid body**, $I$ is a constant tensor (the principal axes stay aligned with the body axes). But the body frame is not an inertial frame, so the **transformation formula for a rotating reference frame** is needed.

**Lemma (derivative formula for a rotating coordinate system)**. For any vector $\mathbf{A}$,

$$
\frac{d \mathbf{A}}{d t}\bigg|_{\text{inertial}} = \frac{d \mathbf{A}}{d t}\bigg|_{\text{body}} + \boldsymbol{\omega} \times \mathbf{A}.
$$

(This is the standard formula for the transformation of velocities in any rotating reference frame — the geometric source of what physics calls the "Coriolis formula".)

**Applied to $\mathbf{A} = \mathbf{L}$**:

$$
\frac{d \mathbf{L}}{dt}\bigg|_{\text{inertial}} = \frac{d \mathbf{L}}{dt}\bigg|_{\text{body}} + \boldsymbol{\omega} \times \mathbf{L}.
$$

Substitute $\mathbf{L} = I\boldsymbol{\omega}$, with $I$ constant in the body frame:

$$
\frac{d \mathbf{L}}{dt}\bigg|_{\text{body}} = I \frac{d \boldsymbol{\omega}}{d t}\bigg|_{\text{body}}.
$$

Combined with Newton's second law $d\mathbf{L}/dt|_{\text{inertial}} = \boldsymbol{\tau}$:

$$
\boxed{\;I \frac{d \boldsymbol{\omega}}{d t} + \boldsymbol{\omega} \times (I \boldsymbol{\omega}) = \boldsymbol{\tau}.\;}
$$

These are the **Euler rigid-body equations**, written in the body frame; the three equations correspond respectively to the principal-axis directions.

**Component form** (along the principal axes):

$$
I_1 \dot{\omega}_1 + (I_3 - I_2) \omega_2 \omega_3 = \tau_1,
$$

$$
I_2 \dot{\omega}_2 + (I_1 - I_3) \omega_3 \omega_1 = \tau_2,
$$

$$
I_3 \dot{\omega}_3 + (I_2 - I_1) \omega_1 \omega_2 = \tau_3.
$$

🎬 [**Euler rigid-body equations 3-step build — video 12:59**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=779s) (anim-12): three-step Replacement Transform derivation of I dω/dt + ω×(Iω) = τ, chunk M3_05.

**Free rigid body (no external torque) $\boldsymbol{\tau} = 0$**: even with no external force, $\omega_k$ is not constant — the nonlinear coupling terms such as $\omega_2 \omega_3$ make the angular velocity "drift" between the principal axes. This leads to **free precession** and the famous **Dzhanibekov effect** (the intermediate axis theorem: rotation about the intermediate principal axis is unstable).

### Worked example: the Dzhanibekov intermediate-axis effect

Let the rigid body's principal moments of inertia satisfy $I_1 < I_2 < I_3$ (e.g. a box with unequal sides: $I_1=1, I_2=2, I_3=3$ units). When a **free rigid body** ($\tau = 0$) rotates about the **intermediate axis** $\hat{\mathbf{e}}_2$, give it a tiny perturbation $\omega_1, \omega_3 \ll \omega_2$. The Euler equations (no external force):

$$
I_1 \dot\omega_1 = (I_2 - I_3) \omega_2 \omega_3, \quad I_2 \dot\omega_2 = (I_3 - I_1) \omega_3 \omega_1, \quad I_3 \dot\omega_3 = (I_1 - I_2) \omega_1 \omega_2.
$$

Linearize (set $\omega_2 \approx \omega_0 = \text{const}$, with $\omega_1, \omega_3$ small quantities):

$$
\dot\omega_1 \approx \frac{I_2 - I_3}{I_1} \omega_0 \, \omega_3, \quad \dot\omega_3 \approx \frac{I_1 - I_2}{I_3} \omega_0 \, \omega_1.
$$

Second-order ODE: $\ddot\omega_1 = \frac{(I_2-I_3)(I_1-I_2)}{I_1 I_3} \omega_0^2 \, \omega_1$.

**Stability test**. Let $\omega_1 \propto e^{\lambda t}$, $\lambda^2 = \frac{(I_2-I_3)(I_1-I_2)}{I_1 I_3} \omega_0^2$.

- If rotating about the **smallest or largest principal axis** ($I_2$ replaced by $I_1$ or $I_3$), then the coefficient $(I_2-I_3)(I_1-I_2)$ is a product of a negative and a positive number → $\lambda^2 < 0$ → $\lambda$ purely imaginary → **stable (periodic wobble)**.
- If rotating about the **intermediate principal axis** $I_2$ ($I_1 < I_2 < I_3$): $(I_2-I_3) < 0$, $(I_1-I_2) < 0$, the product is $> 0$ → $\lambda^2 > 0$ → $\lambda$ real → **exponential growth → unstable**.

**What this tells us**: when a free rigid body rotates about the principal axis of "intermediate inertia", any tiny perturbation is amplified exponentially, causing the "flip effect" — what looks like a **periodic 180° flip** is in fact $\omega_1, \omega_3$ going through a complete exponential–saturation–decay cycle.

**The 1985 Dzhanibekov experiment**: the Soviet cosmonaut Vladimir Dzhanibekov, on the ISS (the Salyut 7 space station), unscrewed a wing-nut and let it float and spin freely — the nut **spontaneously flipped over periodically**, astonishing ground control. This effect could already be predicted within the framework of Euler's 1758 *Recherches* (linearization gives it directly), but because gravitational disturbances on Earth are too large, no one had ever seen it on the ground; only in the true weightlessness of space did it show itself. Video: search "Dzhanibekov effect ISS".

---

## 3.3 Euler angles (3-1-3 convention)

**Problem**. SO(3) (the 3D rotation group) is a 3-dimensional manifold, and 3 parameters are needed to parametrize it locally. **Euler angles (φ, θ, ψ)** are the classic choice.

**3-1-3 convention** (z-x-z, the most commonly used in classical mechanics):

Rotate the body frame $(\hat{\mathbf{x}}', \hat{\mathbf{y}}', \hat{\mathbf{z}}')$ out of the space frame $(\hat{\mathbf{x}}, \hat{\mathbf{y}}, \hat{\mathbf{z}})$, in 3 steps in all:

1. **About $\hat{\mathbf{z}}$, rotate by angle $\varphi$**: called **precession**. $\varphi \in [0, 2\pi)$.
2. **About the new $\hat{\mathbf{x}}$ (after step 1, called the line of nodes), rotate by angle $\theta$**: called **nutation**. $\theta \in [0, \pi]$.
3. **About the new $\hat{\mathbf{z}}$ (the final body z-axis), rotate by angle $\psi$**: called **spin**. $\psi \in [0, 2\pi)$.

**The corresponding rotation matrix** (in column-vector form):

$$
R(\varphi, \theta, \psi) = R_z(\varphi) \, R_x(\theta) \, R_z(\psi),
$$

where

$$
R_z(\alpha) = \begin{pmatrix} \cos\alpha & -\sin\alpha & 0 \\ \sin\alpha & \cos\alpha & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad R_x(\alpha) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{pmatrix}.
$$

**The angular velocity $\boldsymbol{\omega}$ expressed in Euler-angle components** (in the body frame):

$$
\omega_1 = \dot{\varphi} \sin\theta \sin\psi + \dot{\theta} \cos\psi,
$$

$$
\omega_2 = \dot{\varphi} \sin\theta \cos\psi - \dot{\theta} \sin\psi,
$$

$$
\omega_3 = \dot{\varphi} \cos\theta + \dot{\psi}.
$$

(These formulas were given in Euler's 1750 letter + the 1765 *Theoria motus*, with the 1758 *Recherches* in between providing the principal-axes framework.)

**Singularity (gimbal lock)**. When $\theta = 0$ or $\pi$, $\dot{\varphi}$ and $\dot{\psi}$ cannot be told apart independently — the first and third steps rotate about the same axis. This is a geometric defect of the 3-1-3 parametrization, which in the attitude control of flying vehicles is avoided by switching to **quaternions** (Hamilton 1843).

### Worked example: steady precession of a gyroscope

Consider a pendulum gyroscope toy (a toy top): mass $m = 0.2 \,\mathrm{kg}$, distance from the center of mass on the spin axis to the pivot point $r = 0.05 \,\mathrm{m}$, moment of inertia about the spin axis $I = 1.0 \times 10^{-3} \,\mathrm{kg \cdot m^2}$, spin angular velocity $\omega_\text{spin} = 100 \,\mathrm{rad/s}$. **Find the steady precession angular velocity $\omega_p$**.

**Apply the formula**. In the "fast top" approximation, where the spin angular velocity is much larger than the precession angular velocity, the gravitational torque $\tau = mgr$ causes a change in direction of the horizontal component of the angular momentum, giving the **steady precession rate**

$$
\omega_p = \frac{\tau}{L \sin\theta} = \frac{mgr \sin\theta}{I \omega_\text{spin} \sin\theta} = \frac{mgr}{I \omega_\text{spin}}.
$$

(A detailed derivation can be obtained from the Euler equations of §3.2 under the assumption $\theta = \text{const}$; it can also be read geometrically with $d\mathbf{L}/dt = \boldsymbol{\tau}$: the gravitational torque is horizontal → the horizontal component of $\mathbf{L}$ rotates about the vertical.)

**Compute**:

$$
\omega_p = \frac{(0.2)(9.8)(0.05)}{(10^{-3})(100)} = \frac{0.098}{0.1} = 0.98 \,\mathrm{rad/s} \approx 0.156 \,\mathrm{Hz}.
$$

That is, the top precesses one full turn about the vertical roughly every **6.4 seconds**.

**What this tells us**: - $\omega_p$ is **inversely proportional** to $\omega_\text{spin}$ — the faster the spin, the slower the precession; the spin slows down → the precession speeds up → it finally falls over (the physical essence of a toy top's lifetime). - **Stability of a bicycle's front wheel**: when riding, the spin of the front wheel produces $\omega_\text{spin}$; when the bicycle leans, gravity gives the front wheel a torque, which, through the same precession formula, makes the front wheel **steer automatically** to correct the direction of the lean — this is the answer to the 19th-century puzzle of bicycle stability (analyzed in detail in Klein-Sommerfeld 1910 *Theorie des Kreisels*). - **LIGO mirror control**: the gravitational-wave detector suspends 40 kg mirrors whose attitude is stabilized with gyroscopes, and its feedback system is real-time precession control based on the Euler equations. The theoretical framework of Euler's 1758 *Recherches* was still at the core when the first gravitational wave was detected in 2015.

🎬 [**Gyroscope + Euler angles φ/θ/ψ — video 12:33**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=753s) (anim-11): three ValueTrackers simultaneously drive precession / nutation / spin, chunk M3_04.

---

## 3.4 Euler's rotation theorem

**Euler's 1775 theorem (Euler's rotation theorem)**. Any **isometry of three-dimensional space that keeps the origin fixed** $R$ (that is, $R \in \mathrm{SO}(3)$) can be expressed as **a rotation about some fixed axis $\hat{\mathbf{n}}$**, by some angle $\alpha \in [0, \pi]$.

In other words, a seemingly complicated "composition of rotations about several axes" can always be reduced to a single rotation about a single axis — the direction of the axis and the angle are uniquely determined by the composite result (modulo $\pm \hat{\mathbf{n}}$ and $\pm \alpha$).

**Proof (eigenvalue argument)**.

**Step 1**. $R$ is a $3 \times 3$ real orthogonal matrix, $\det R = +1$ (orientation-preserving).

**Step 2**. The characteristic polynomial of $R$, $\chi_R(\lambda) = \det(\lambda I - R)$, is a cubic polynomial with real coefficients. A real cubic polynomial must have at least one real root (complex roots must come in pairs).

**Step 3**. Let $\lambda$ be an eigenvalue of $R$ and $\mathbf{v}$ a corresponding eigenvector (which can be taken real). $R \mathbf{v} = \lambda \mathbf{v}$. By orthogonality $|R\mathbf{v}| = |\mathbf{v}|$, so $|\lambda| = 1$. Among real roots only $\pm 1$ remain.

**Step 4 (case split)**. From $\det R = +1$ and the product of the three eigenvalues $= \det R$:

$$
\lambda_1 \lambda_2 \lambda_3 = +1.
$$

The eigenvalues of a real orthogonal matrix fall into two cases:

- **Case A (complex eigenvalues)**: complex eigenvalues must be a conjugate pair $e^{\pm i\alpha}$ ($\alpha \in (0, \pi)$), with product $|e^{i\alpha}|^2 = 1$, so the third (real) eigenvalue must be $+1$.
- **Case B (all eigenvalues real)**: the three real eigenvalues are all $\pm 1$ (Step 3), with product $+1$, so the number of $-1$s must be even $\in \{0, 2\}$:
- $\{+1, +1, +1\}$: $R = I$ (the identity, that is, "the rotation with $\alpha = 0$")
- $\{+1, -1, -1\}$: about some axis $\hat{\mathbf{n}}$, a rotation by angle $\pi$ (the rotation with $\alpha = \pi$; the two $-1$ eigenvalues correspond to the reversal in the plane perpendicular to that axis)

In both cases $+1$ is an eigenvalue.

**Step 5**. So $R$ must have the eigenvalue $+1$, with corresponding eigenvector $\hat{\mathbf{n}}$ (that is, the **direction of the axis**): $R \hat{\mathbf{n}} = \hat{\mathbf{n}}$ — points in that direction are fixed under $R$.

**Step 6**. In the plane perpendicular to $\hat{\mathbf{n}}$, $\hat{\mathbf{n}}^\perp$ (two-dimensional), $R$ restricts to an orthogonal orientation-preserving transformation of that plane, that is, a 2D rotation — let its angle be $\alpha$.

*Proof that $R$ preserves $\hat{\mathbf{n}}^\perp$*: for any $\mathbf{v} \perp \hat{\mathbf{n}}$, by the orthogonality of $R$, $(R\mathbf{v}) \cdot (R\hat{\mathbf{n}}) = \mathbf{v} \cdot \hat{\mathbf{n}} = 0$, and $R\hat{\mathbf{n}} = \hat{\mathbf{n}}$, so $R\mathbf{v} \perp \hat{\mathbf{n}}$. That is, $R$ maps $\hat{\mathbf{n}}^\perp$ into itself. On $\hat{\mathbf{n}}^\perp$, $R$ is a $2 \times 2$ orthogonal matrix, and $\det R|_{\hat{\mathbf{n}}^\perp} = \det R / \lambda_{\hat{\mathbf{n}}} = +1 / +1 = +1$, so it is an orientation-preserving 2D rotation. The complex eigenvalues $e^{\pm i\alpha}$ are exactly the eigenvalues of this 2D rotation.

**Conclusion**. $R$ is exactly the same as "rotating about the fixed axis $\hat{\mathbf{n}}$ by $\alpha$". $\blacksquare$

🎬 [**Euler's rotation theorem — video 13:31**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=811s) (anim-13): multiple superposed rotations → a single instantaneous axis + angle (n̂, α), chunk M3_06.

**Geometric meaning**. SO(3) looks like a 3-dimensional Lie group, but Euler's theorem tells us that every element of SO(3) "looks like" $(\text{axis}, \text{angle}) = (\hat{\mathbf{n}}, \alpha)$ — this gives SO(3) a concise parametrization (the axis–angle parametrization). It is also the geometric starting point for the quaternions $\mathbb{H}^1 \cong \mathrm{SU}(2)$ double-covering SO(3).

### Worked example: find the equivalent (n̂, α) of $R_z(90°) \cdot R_x(90°)$

Let $R = R_z(\pi/2) \cdot R_x(\pi/2)$ — first rotate about the $x$ axis by $90°$, then rotate about the $z$ axis by $90°$. Find the axis $\hat{\mathbf{n}}$ and the angle $\alpha$ of the equivalent rotation.

**First step: compute $R$**.

$$
R_z(\pi/2) = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad R_x(\pi/2) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}.
$$

The matrix product:

$$
R = R_z R_x = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.
$$

**Second step: find $\hat{\mathbf{n}}$ (satisfying $R\hat{\mathbf{n}} = \hat{\mathbf{n}}$)**.

Solve $(R - I)\hat{\mathbf{n}} = 0$:

$$
\begin{pmatrix} -1 & 0 & 1 \\ 1 & -1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \hat{\mathbf{n}} = 0.
$$

From the equations: $n_1 = n_3$, $n_1 = n_2$, $n_2 = n_3$ → $n_1 = n_2 = n_3$. Normalizing:

$$
\hat{\mathbf{n}} = \frac{1}{\sqrt{3}} (1, 1, 1).
$$

That is, the axis lies along the **body-diagonal direction of the cube**.

**Third step: find $\alpha$**.

The trace of $R$ is $\mathrm{tr}(R) = 0$. For a rotation about $\hat{\mathbf{n}}$ by angle $\alpha$, $\mathrm{tr}(R) = 1 + 2\cos\alpha$, so

$$
1 + 2\cos\alpha = 0 \;\Longrightarrow\; \cos\alpha = -\frac{1}{2} \;\Longrightarrow\; \alpha = \frac{2\pi}{3} = 120°.
$$

**Conclusion**. $R_z(90°) \cdot R_x(90°)$ is the same as **a rotation about $\hat{\mathbf{n}} = \frac{1}{\sqrt{3}}(1,1,1)$ by $120°$**.

**What this tells us**: the **result of superposing** two intuitive $90°$ rotations **is not a $180°$ or a $90°$ rotation**, but a $120°$ rotation about a "strange" body-diagonal axis — Euler's rotation theorem guarantees that such an "equivalent reduction" always exists, but the equivalent axis is often unexpected. This is why the composition of 3D rotations cannot be treated with the intuition of "vector addition" (the rotation group SO(3) is **non-abelian**: $R_z R_x \neq R_x R_z$), and must be handled rigorously with Euler angles / quaternions / matrix algebra.

---

## Geometric/physical intuition

Imagine the rotation of a rigid body as **a top that can turn freely about the origin**:

1. **The inertia tensor $I$** describes "how hard it is for the rigid body to turn in each direction". Along a principal axis, the difference between the rigid body turning "easily" or "with effort" is given by the corresponding principal moment of inertia $I_k$.
2. **The angular momentum $\mathbf{L} = I\boldsymbol{\omega}$** is in general **not in the same direction as the angular velocity $\boldsymbol{\omega}$** (unless $\boldsymbol{\omega}$ lies along some principal axis). This is why, when you casually do a spinning twirl, your body "drifts" — the direction of the angular momentum is locked in the inertial frame, but the angular velocity vector traces an ellipsoid in the body frame.
3. **Euler angles (φ, θ, ψ)** name the gyroscope's three independent rotational degrees of freedom: - φ (precession): the top's central axis **"draws a large cone" around the vertical** — this is the "swinging head of the top" that we see. - θ (nutation): the **change in tilt of the central axis itself ("nodding")**. - ψ (spin): the top **spinning about its own central axis**.
4. **Euler's rotation theorem**: even though the top seems to be performing three independent rotations (φ, θ, ψ), at each instant it is in fact **rotating only about one instantaneous axis** — that axis can keep changing, but at each instant it is just one axis.

![Euler-angle decomposition of a gyroscope + the instantaneous axis of rotation](/content/images/2026/05/fig4_gyroscope_angles.png)

> **Fig 4.**
>
> The gyroscope's three rotational degrees of freedom: φ (precession) about the vertical + θ (nutation) about the line of nodes + ψ (spin) about the body z axis. Euler's rotation theorem tells us: even when the three angles change at the same time, at each instant the overall composition is still a pure rotation about
>
> **a unique instantaneous axis $\hat{\mathbf{n}}$**
>
> .

---

## Video correspondence

Video **11:16–14:51 (segment M3)**: - 11:16–11:45: Berlin Academy seal + Découverte 1750 + the first rigid-body equation (anim-26) - 11:45–12:20: rigid body vs fluid split-screen comparison (anim-27) - 12:20–12:55: switching body-fixed frame ↔ inertial frame (anim-10) - 12:55–13:30: gyro 3D + Euler angles φ/θ/ψ ⭐ (anim-11) - 13:30–14:00: rigid-body equation $I\dot\omega + \omega \times (I\omega) = \tau$ 3-step build (anim-12) - 14:00–14:30: Euler's rotation theorem + visualization of the instantaneous axis (anim-13) - 14:30–14:51: 15-year arc 1750→1765 timeline (anim-14)

— Abel

---

## §4 · Euler's theorem and the RSA cryptosystem

> Companion video: 14:53–15:55 (segment MISC_01)
>
> **This section assumes you are familiar with**
>
> : integer modular arithmetic ($\bmod n$), the greatest common divisor $\gcd$, the extended Euclidean algorithm (finding modular inverses); introductory group theory (finite groups, Lagrange's theorem) is optional — the main proof uses an elementary permutation and does not depend on group theory.
>
> **Historical note on notation**
>
> : Euler's 1763 paper describes in Latin "the number of positive integers less than $n$ and coprime to $n$", and
>
> **did not introduce the symbol $\varphi$**
>
> . The $\varphi(n)$ symbol in general use today comes from Gauss 1801
>
> *Disquisitiones Arithmeticae*
>
> §38 onward. This section uses $\varphi$ for consistency with modern textbooks, but the reader should remember that Euler himself did not use this symbol.

## Summary in one sentence

**Euler's theorem**, published by Euler in 1763,

$$
a^{\varphi(n)} \equiv 1 \pmod{n}, \quad \gcd(a, n) = 1
$$

generalizes Fermat's little theorem (when $p$ is prime, $a^{p-1} \equiv 1 \pmod p$) to an arbitrary positive integer modulus. More than two centuries later, in 1977, Rivest, Shamir and Adleman used this theorem to construct the RSA public-key cryptosystem — the first algorithm able to exchange keys securely over a public channel. This section gives the **permutation proof** of Euler's theorem and a **complete derivation** of the correctness of RSA.

---

## 4.1 Definition and basic properties of the Euler function $\varphi(n)$

**Definition**. For a positive integer $n \geq 1$, the **Euler function** $\varphi(n)$ is defined as the number of positive integers not exceeding $n$ that are coprime to $n$:

$$
\varphi(n) := \#\{k : 1 \leq k \leq n,\; \gcd(k, n) = 1\}.
$$

**Example**: $\varphi(10) = \#\{1, 3, 7, 9\} = 4$ (note that $2, 4, 5, 6, 8, 10$ all have a common factor with $10$).

**Lemma A (prime case)**. If $p$ is prime, then $\varphi(p) = p - 1$ (only $p$ itself is not coprime to $p$).

**Lemma B (prime-power case)**. If $p$ is prime and $k \geq 1$, then $\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$.

*Proof*. In $\{1, 2, \ldots, p^k\}$, those not coprime to $p^k$ are exactly the multiples of $p$: $p, 2p, 3p, \ldots, p^{k-1} \cdot p$, $p^{k-1}$ of them in all. $\blacksquare$

**Lemma C (multiplicativity)**. If $\gcd(m, n) = 1$, then

$$
\varphi(mn) = \varphi(m) \, \varphi(n).
$$

*Proof sketch*. By the Chinese remainder theorem (CRT), modulo $mn$ corresponds to modulo $(m, n)$ jointly:

$$
(\mathbb{Z}/mn\mathbb{Z})^* \;\cong\; (\mathbb{Z}/m\mathbb{Z})^* \times (\mathbb{Z}/n\mathbb{Z})^*.
$$

The orders of the two sides are equal, which gives the conclusion. $\blacksquare$

**Corollary (computational formula)**. If $n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$ is the prime factorization of $n$, then

$$
\varphi(n) = n \prod_{i=1}^r \left( 1 - \frac{1}{p_i} \right).
$$

---

## 4.2 The permutation proof of Euler's theorem

**Theorem (Euler 1763)**. If $\gcd(a, n) = 1$, then

$$
a^{\varphi(n)} \equiv 1 \pmod{n}.
$$

**Proof** (using a multiplicative permutation).

**Step 1**. Let $\{x_1, x_2, \ldots, x_{\varphi(n)}\}$ be the set of all elements of $\{1, 2, \ldots, n\}$ coprime to $n$ (that is, the representatives of $(\mathbb{Z}/n\mathbb{Z})^*$).

**Step 2**. Consider the set $\{a x_1, a x_2, \ldots, a x_{\varphi(n)}\} \pmod{n}$. We prove that this set equals the original set modulo $n$ (only in a different order, that is, a **permutation**).

- **The elements are coprime to $n$**: since $\gcd(a, n) = \gcd(x_i, n) = 1$, we have $\gcd(a x_i, n) = 1$ (multiplicativity), so each $a x_i \bmod n$ belongs to $(\mathbb{Z}/n\mathbb{Z})^*$.
- **The elements are pairwise distinct**: if $a x_i \equiv a x_j \pmod n$ with $i \neq j$, then $a(x_i - x_j) \equiv 0 \pmod n$; since $\gcd(a, n) = 1$, by the cancellation law $x_i \equiv x_j \pmod n$, contradicting $x_i \neq x_j$.

By these two points, $\{a x_i \bmod n\}_{i=1}^{\varphi(n)}$ is a permutation of $(\mathbb{Z}/n\mathbb{Z})^*$.

**Step 3 (the product is invariant)**. Multiply all the elements of the sets on both sides:

$$
\prod_{i=1}^{\varphi(n)} (a x_i) \equiv \prod_{i=1}^{\varphi(n)} x_i \pmod{n}.
$$

The left side rearranges to $a^{\varphi(n)} \cdot \prod_i x_i$, so

$$
a^{\varphi(n)} \cdot \prod_i x_i \equiv \prod_i x_i \pmod{n}.
$$

**Step 4 (cancel $\prod x_i$)**. Since $\gcd(x_i, n) = 1$ holds for each $i$, $\gcd\left(\prod_i x_i, n\right) = 1$, and a multiplicative inverse can be taken modulo $n$. Multiplying both sides by $\left(\prod_i x_i\right)^{-1}$ gives

$$
a^{\varphi(n)} \equiv 1 \pmod{n}. \qquad \blacksquare
$$

**Concrete calculation (n=10, a=3)**.

- The coprime set $\{1, 3, 7, 9\}$.
- Multiply by $a=3$: $\{3, 9, 21, 27\} \equiv \{3, 9, 1, 7\} \pmod{10}$, exactly a permutation.
- Product: $3 \cdot 9 \cdot 21 \cdot 27 = 3^4 \cdot (1 \cdot 3 \cdot 7 \cdot 9) \equiv 1 \cdot 3 \cdot 7 \cdot 9 \pmod{10}$.
- Cancelling gives $3^4 \equiv 1 \pmod{10}$; check: $3^4 = 81 = 8 \cdot 10 + 1$ ✓.

🎬 [**n=10 permutation animation + derivation 3-step build — video 14:53**](https://www.youtube.com/watch?v=Yb-rS6tQb1o&t=893s) (anim-15): $\{1,3,7,9\}$ multiplied by $a=3$ lands on $\{3,9,1,7\}$ — visualization of the set mapping to itself + the abstract derivation, chunk MISC_01.

---

## 4.3 Fermat's little theorem as a special case

**Fermat's little theorem (1640)**. If $p$ is prime and $\gcd(a, p) = 1$, then

$$
a^{p-1} \equiv 1 \pmod{p}.
$$

**As a special case of Euler's theorem**: take $n = p$ prime; Lemma A gives $\varphi(p) = p - 1$, and substituting into Euler's theorem yields Fermat.

**Equivalent form** (for any $a$, not necessarily coprime):

$$
a^p \equiv a \pmod{p}.
$$

(When $\gcd(a, p) \neq 1$, that is $p \mid a$, both sides are $0$ modulo $p$, and it still holds.)

Historically, Fermat's 1640 letter stated only the conclusion; the first complete proof was given by Euler in 1736 (by induction using the binomial theorem). Euler's permutation proof then generalized it to arbitrary $n$.

### Worked example: Fermat's little theorem + a prototype of the Miller-Rabin primality test

**Example 1 (direct check)**. Take $a = 2$, $p = 7$:

$$
2^{p-1} = 2^6 = 64 = 9 \cdot 7 + 1, \quad \Longrightarrow \quad 2^6 \equiv 1 \pmod{7}. \quad \checkmark
$$

**Example 2 (use in primality testing)**. Given a large integer $n$, decide whether $n$ is prime — naive trial division up to $\sqrt{n}$ is too slow. **Fermat test**: choose a random $a \in \{2, \ldots, n-2\}$ and compute $a^{n-1} \bmod n$ with fast modular exponentiation:

- If $a^{n-1} \not\equiv 1 \pmod{n}$, then $n$ **must be composite** (because if $n$ were prime, Fermat's little theorem would require $\equiv 1$).
- If $a^{n-1} \equiv 1 \pmod{n}$, then $n$ **may be prime** (this cannot be decided, because there exist "pseudoprimes" such as the Carmichael number $n=561=3\cdot 11\cdot 17$ that satisfy it for all coprime $a$).

**The Miller-Rabin (1976) improvement**: write $n - 1 = 2^s \cdot d$ ($d$ odd), and check whether the sequence $a^d, a^{2d}, a^{4d}, \ldots, a^{2^{s-1}d}$ has a turning point at $\pm 1 \pmod{n}$. This gets around the Carmichael trap. Miller-Rabin is the industrial standard by which all of today's RSA libraries (OpenSSL / GMP / Python `sympy.isprime`) generate large primes.

**What this tells us**: Fermat's little theorem is not merely a number-theory toy; it is the algorithmic core of primality testing in **actual present-day engineering** — when Euler generalized this theorem in 1763, he could not possibly have foreseen that 213 years later it would become the cryptographic foundation of internet security (TLS / SSH / PGP).

---

## 4.4 The RSA public-key cryptosystem

The core problem of RSA: **how can encrypted information be transmitted over a public channel?** The key observation is the **difficulty of factoring** large integers — even if the product of two large primes $n = pq$ is known, when $p, q$ each have several hundred decimal digits, all existing algorithms need an infeasible amount of time to factor $n$.

### Step 1: key generation

1. Choose two large primes $p, q$ (in practice each $\geq 1024$ bits).
2. Compute $n = pq$ (the public modulus).
3. Compute $\varphi(n) = (p-1)(q-1)$ (by the multiplicativity Lemma C and the prime case, $\varphi(p)\varphi(q) = (p-1)(q-1)$).
4. Choose $e$ satisfying $1 < e < \varphi(n)$ and $\gcd(e, \varphi(n)) = 1$ (the public **encryption exponent**; in practice $e = 65537$ is commonly taken).
5. Compute $d$ satisfying $ed \equiv 1 \pmod{\varphi(n)}$ — that is, $d = e^{-1} \pmod{\varphi(n)}$, found with the extended Euclidean algorithm. $d$ is the **private key** (the decryption exponent).

**Public key**: $(n, e)$, published openly. **Private key**: $(n, d)$, kept strictly secret.

### Step 2: encryption

For a plaintext $m \in \{0, 1, \ldots, n-1\}$, compute the ciphertext

$$
c \equiv m^e \pmod{n}.
$$

### Step 3: decryption

For a ciphertext $c$, compute

$$
m' \equiv c^d \pmod{n}.
$$

### Correctness theorem: $m' = m$

**To prove**:

$$
(m^e)^d \equiv m \pmod{n}.
$$

**Proof**.

$ed \equiv 1 \pmod{\varphi(n)}$ means that there exists a positive integer $k$ such that

$$
ed = 1 + k \varphi(n).
$$

Therefore

$$
(m^e)^d = m^{ed} = m^{1 + k\varphi(n)} = m \cdot \left(m^{\varphi(n)}\right)^k.
$$

**Case A**: $\gcd(m, n) = 1$. By Euler's theorem $m^{\varphi(n)} \equiv 1 \pmod n$, so

$$
m^{ed} \equiv m \cdot 1^k \equiv m \pmod{n}.
$$

**Case B**: $\gcd(m, n) \neq 1$. First exclude the boundary case $m = 0$ (here $c = 0^e = 0$, $m' = 0^d = 0 = m$ ✓, which obviously holds). Let $1 \leq m < n$, $\gcd(m, n) > 1$. Since $n = pq$ is a product of two primes, we must have $p \mid m$ or $q \mid m$ (but not both, otherwise $pq \mid m$, that is $m \geq pq = n$, a contradiction). Without loss of generality let $p \mid m, q \nmid m$. Then

$$
m^{ed} \equiv 0 \equiv m \pmod{p}.
$$

On the other hand $\gcd(m, q) = 1$, and by Fermat's little theorem $m^{q-1} \equiv 1 \pmod q$, so

$$
m^{ed} = m^{1 + k(p-1)(q-1)} = m \cdot \left(m^{q-1}\right)^{k(p-1)} \equiv m \cdot 1 \equiv m \pmod{q}.
$$

By the Chinese remainder theorem (CRT): $m^{ed} \equiv m \pmod p$ and $m^{ed} \equiv m \pmod q$ jointly give

$$
m^{ed} \equiv m \pmod{pq} = \pmod{n}. \qquad \blacksquare
$$

### Where the security comes from

The security of RSA rests on the following computationally hard problem:

- **Factoring large integers**: since $n = pq$ is public, if $n$ could be factored efficiently then $p, q$ could be recovered, from which $\varphi(n) = (p-1)(q-1)$ could be computed, and then $d = e^{-1} \pmod{\varphi(n)}$ found — broken.
- **The currently best factoring algorithm** (the Number Field Sieve) has subexponential complexity $\exp(O((\log n)^{1/3} (\log\log n)^{2/3}))$, which is still infeasible for $n$ at the scale of $2048$ bits — estimated to require a modern supercomputer running continuously for millions of years.

**Note**: if quantum computers are scaled up, **Shor's algorithm** can factor large integers in polynomial time, and RSA will no longer be secure. This is the current core problem of post-quantum cryptography.

### RSA Python toy trace (p=61, q=53)

Below, Python is used to walk through the three steps above, key generation / encryption / decryption. Although the toy parameters are small, every step is completely isomorphic to real-world 2048-bit RSA — only the numbers are 600 digits bigger.

```python
from math import gcd

# --- Step 1: key generation ---
p, q = 61, 53                         # two (toy) primes
n = p * q                             # public modulus
phi = (p - 1) * (q - 1)               # Euler totient
print(f"n   = {n}")                   # 3233
print(f"φ(n)= {phi}")                 # 3120

e = 17                                # public encryption exponent, satisfies gcd(e, φ) = 1
assert gcd(e, phi) == 1

# find the modular inverse d ≡ e⁻¹ (mod φ), built into Python 3.8+:
d = pow(e, -1, phi)
print(f"e   = {e}, d = {d}")          # e=17, d=2753
assert (e * d) % phi == 1             # ed ≡ 1 (mod φ)  ✓

# --- Step 2: encryption ---
m = 65                                # plaintext (assumed already encoded as an integer < n)
c = pow(m, e, n)                      # ciphertext c = m^e mod n
print(f"plaintext m = {m}")           # 65
print(f"ciphertext c = {c}")          # 2790

# --- Step 3: decryption ---
m_prime = pow(c, d, n)                # m' = c^d mod n
print(f"decrypted m' = {m_prime}")    # 65
assert m_prime == m                   # correctness  ✓
```

Output of the run:

```
n   = 3233
φ(n)= 3120
e   = 17, d = 2753
plaintext m = 65
ciphertext c = 2790
decrypted m' = 65
```

**Key observation**: the person holding the private key can compute $d = 2753$ instantly; an attacker without the private key who wants to work back from $n = 3233$ to $\varphi$ must first factor $n = 61 \times 53$ — with toy parameters this is solved in a second, but at the $2048$-bit scale (even with the most advanced NFS algorithm), the estimate exceeds the lifetime of a modern supercomputer. This is the core of asymmetric encryption: **encryption / verification use the public key, decryption / signing use the private key, and the two are strung together on one thread by Euler's theorem**.

![φ(n) trend chart (n=1..30)](/content/images/2026/05/fig5_totient_trend.png)

> **Fig 5.**
>
> Values of the Euler totient $\varphi(n)$ for $n = 1..30$. Orange = at primes, $\varphi(p) = p-1$, a local maximum; blue = at composites, where $\varphi(n)$ drops markedly, reflecting that composites have more small elements not coprime to them. This jagged shape is exactly one of the sources of RSA's security: even knowing $n$, $\varphi(n)$ is hard to predict directly; one must first factor.

---

## Geometric/physical intuition

The **geometric flavor** of Euler's theorem is hidden in group theory. $(\mathbb{Z}/n\mathbb{Z})^*$ is a **finite commutative group** of order $\varphi(n)$. For any element $a$ of the group, by Lagrange's theorem, the order of $a$ (that is, in $a^k = e$, the smallest positive integer $k$) must divide the order of the group $\varphi(n)$, and hence $a^{\varphi(n)} = e$ — this is the group-theoretic reading of Euler's theorem.

More intuitively, our earlier **permutation proof** showed: multiplying by $a$ each element of $(\mathbb{Z}/n\mathbb{Z})^*$ amounts to performing a **permutation** on that finite set — the elements are shuffled, but the set itself is unchanged. In any finite group the operation "multiply by $a$" is a permutation, and this fact directly gives Lagrange's theorem and Euler's theorem.

And the core **magic trick** of RSA lies in:

$$
\text{(encryption)}\;m \;\xrightarrow{(\cdot)^e}\; c \;\xrightarrow{(\cdot)^d}\; m \;\text{(decryption)}
$$

If encryption is regarded as turning the message $m$ around the finite wheel $(\mathbb{Z}/n\mathbb{Z})$ by $e$ turns, decryption is turning it back by $d$ turns; and $ed \equiv 1 \pmod{\varphi(n)}$ guarantees exactly that the total number of turns $ed$ equals "$1$ turn plus an integer multiple of $\varphi(n)$ turns" — by Euler's theorem, $\varphi(n)$ turns equals not turning at all — so it finally returns to the starting point.

---

## Video correspondence

Video **14:53–15:55 (segment MISC_01)**: - 14:53–15:18: demonstration of the permutation of the $n=10$ coprime set $\{1,3,7,9\}$ multiplied by $a=3$ (anim-15 Phase 1-4) - 15:18–15:55: the abstract derivation in three steps $\prod a x_i \equiv \prod x_i \to a^{\varphi(n)} \equiv 1 \pmod n$ (anim-15 Phase 5)

Suggested further reading: - Koblitz, *A Course in Number Theory and Cryptography* (Springer GTM 114) - RFC 8017: PKCS#1 v2.2 (RSA implementation standard)

— Abel
