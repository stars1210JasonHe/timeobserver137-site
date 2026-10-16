---
title: "Gauss and the regular 17-gon: one morning, a two-thousand-year-old problem"
date: 2026-05-29
lang: en
draft: true
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

> On March 30, 1796, a young man still a month short of turning nineteen worked out something no one had managed in the two thousand years since Euclid - drawing the regular 17-gon with only a straightedge and compass. But a deeper question than "drawing it" is:
>
> **Why can it be drawn?**
>
> This article starts from zero: Fermat primes, the clock modulo 17, Gauss periods, the Galois group, four layers of quadratic extensions, up to the explicit closed form of $\cos\frac{2\pi}{17}$ and Richmond's twenty-step construction, and then on to Wantzel and Lindemann closing the door on the three great problems of ancient Greece.

---

**Contents**

- [§0 Prologue](#0-prologue)
- [§1 Why 17 (the Fermat prime criterion)](#1--why-17-fermat-primes-and-the-constructibility-criterion)
- [§2 Multiplication on a clock (ℤ/17ℤ)*](#2--multiplication-on-a-clock-z17zmathbbz17mathbbzz17z-and-its-generator)
- [§3 Gauss periods → the first √17](#3--gauss-periods-splitting-the-sixteen-roots-into-two-halves-forcing-out-the-first-17sqrt1717)
- [§4 The group of symmetries: Galois](#4--the-group-of-symmetries-the-galois-group-and-the-second-and-third-cuts)
- [§5 The explicit closed form of cos(2π/17)](#5--drawing-in-the-net-the-explicit-closed-form-of-cos2π17cosdfrac2pi17cos172π-and-where-the-innermost-radical-comes-from)
- [§6 Richmond 1893: a twenty-step construction](#6--richmond-1893-twenty-steps-to-draw-cos2π17costfrac2pi17cos172π-on-paper)
- [§7 Necessity: Wantzel + Lindemann](#7--necessity-why-most-figures-cannot-be-drawn-wantzel-1837--lindemann-1882)
- [§8 History and significance](#8-history-and-significance)
- [§9 Closing](#9-closing)

## §0 Prologue

![The first entry of Gauss's mathematical diary (Tagebuch), March 30, 1796 - the record of the discovery that the regular 17-gon is constructible (Latin *Principia quibus innititur sectio circuli…*). Wikimedia Commons, public domain.](/content/images/2026/05/hist_s0_tagebuch_1796.png)

*The first entry of Gauss's mathematical diary (Tagebuch), March 30, 1796 - the record of the discovery that the regular 17-gon is constructible (Latin *Principia quibus innititur sectio circuli…*). Wikimedia Commons, public domain.*

In the Mediterranean world more than two thousand years ago, ancient Greece was a civilizational community made up of many city-states, and our philosophy, astronomy and geometry of today slowly took shape there.

My interest in mathematics came from plane geometry in junior high school. And what shook me most in it was the story of the young Gauss constructing the regular 17-gon.

![The young Gauss, pastel by J. C. A. Schwartz, 1803 (Gauss about 26). Wikimedia Commons, PD.](/content/images/2026/05/hist_s0_gauss_young_1803.jpg)

*The young Gauss, pastel by J. C. A. Schwartz, 1803 (Gauss about 26). Wikimedia Commons, PD.*

In this episode, let us look back on this story together. Rather than "how to draw it", what this blog post wants more to make clear is the thing Gauss really worked out back then - **why it can be drawn**.

---

## §1 — Why 17: Fermat primes and the constructibility criterion

The regular 17-gon is a milestone in the history of mathematics not because "17 is a nice-looking number", but because it lands exactly on an extremely demanding criterion: **for the regular polygons that can be constructed exactly with an unmarked straightedge and a compass, the number of sides is held fast by a rare kind of prime called a "Fermat prime"**. This section makes two things clear starting from zero - what kind of prime is "constructible", and why $17$ happens to be one of them. We first use a plain picture to explain "Fermat numbers", then fill in the complete proof of a key lemma (Gauss wrote it into the *Disquisitiones Arithmeticae*, but various popular accounts often pass over in a single stroke "$2^m+1$ prime $\Rightarrow m$ is a power of $2$"), and finally explain the ins and outs of the criterion "constructible $\iff$ what the number of sides looks like", and where each of the three great ancient Greek problems belongs with respect to it.

### Additional notation for this section

| Notation | Reading / meaning |
| --- | --- |
| $F_k$ | the $k$-th **Fermat number**, $F_k=2^{2^{k}}+1$ (the exponent itself is a power of $2$) |
| Fermat prime | a Fermat number that is exactly a prime; at present only $F_0,\dots,F_4$ are known, these $5$ |
| $a\mid b$ | "$a$ divides $b$", that is, $b$ is an integer multiple of $a$ |
| $\varphi(n)$ | Euler's function: the number of integers in $1\sim n$ coprime to $n$; when $n=p$ is prime, $\varphi(p)=p-1$ |
| $\cos\frac{2\pi}{p}$ | the horizontal coordinate of a vertex of the regular $p$-gon (taking the unit circle, with the first vertex due east) |
| $[\mathbb{Q}(x):\mathbb{Q}]$ | a measure of the "algebraic complexity" of the number $x$: the degree of the lowest-degree equation with rational coefficients that it satisfies (see §7 for details) |

### 1.1 Intuition first: what a Fermat number is, and why the exponent must be a "power of $2$"

![The 17 roots of $z^{17}=1$ spread evenly around the unit circle; the real part of $\zeta_{17}=e^{2\pi i/17}$ (orange) is $\cos\frac{2\pi}{17}$. — Animation frame: Abel (Manim)](/content/images/2026/05/fig_s1_1_roots_zeta.png)

*The 17 roots of $z^{17}=1$ spread evenly around the unit circle; the real part of $\zeta_{17}=e^{2\pi i/17}$ (orange) is $\cos\frac{2\pi}{17}$. — Animation frame: Abel (Manim)*

First look at the plainest question: among numbers of the form $2^m+1$, **which can possibly be prime**?

Try a few at random: $2^1+1=3$ (prime), $2^2+1=5$ (prime), $2^3+1=9=3\times3$ (**not**), $2^4+1=17$ (prime), $2^5+1=33=3\times11$ (**not**), $2^6+1=65=5\times13$ (**not**), $2^8+1=257$ (prime).

A pattern is ready to emerge: **only when the exponent $m$ is itself a power of $2$ ($m=1,2,4,8,\dots$) does $2^m+1$ have a chance of being prime**; as soon as $m$ carries an odd factor ($3,5,6$ all carry one), it can necessarily be factored.

The picture of this observation is like this: if an odd factor is hidden in $m$, then $2^m+1$ automatically "grows" a factor one size smaller, $2^{d}+1$, which splits it apart. On this basis [Fermat](https://en.wikipedia.org/wiki/Pierre_de_Fermat) in the seventeenth century conjectured: take $m=2^k$ (pinching off every odd factor completely), and the numbers obtained

$$
F_k=2^{2^{k}}+1
$$

are perhaps all prime. The first five are indeed beautiful:

$$
F_0=3,\quad F_1=5,\quad F_2=17,\quad F_3=257,\quad F_4=65537.
$$

**$17=F_2=2^{2^{2}}+1$ is exactly the third Fermat prime among them** - this is the arithmetic identity card that later lets it be constructed with straightedge and compass.

### 1.2 Making the intuition rigorous: $2^m+1$ is prime $\Rightarrow m$ is a power of $2$

The "pattern" of the previous subsection must be proved, or else it is only a coincidence. Here is a complete proof (Gauss, *Disquisitiones Arithmeticae* [§365](https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae), builds the constructibility criterion on it). The entire fuel of the proof is the following elementary identity.

**Lemma (factor of an odd power).** Let $e$ be an **odd number**; then the polynomial $x+1$ divides $x^{e}+1$:

$$
x^{e}+1=(x+1)\big(x^{e-1}-x^{e-2}+x^{e-3}-\cdots-x+1\big).
$$

(Expand the right-hand side, and adjacent terms cancel in pairs, leaving only $x^{e}+1$; because $e$ is odd, the last term is $+1$, and the signs match exactly. Equivalently, $x=-1$ is a root of $x^{e}+1$, so $x+1$ is a factor of it.)

**Proposition.** If $2^{m}+1$ is prime, then $m$ is a power of $2$.

*Proof (by contradiction).* Suppose $m$ is **not** a power of $2$. Then $m$ contains at least one **odd factor** $e>1$. Write it as

$$
m=d\cdot e,\qquad \text{where } e>1 \text{ is odd},\ \ d=\frac{m}{e}\ \ (1\le d<m).
$$

Substitute $x=2^{d}$ in the lemma (note that $e$ is odd, so the lemma applies):

$$
2^{d}+1\ \Big|\ (2^{d})^{e}+1=2^{de}+1=2^{m}+1.
$$

So $2^{d}+1$ is a factor of $2^{m}+1$. Now look at its size: because $1\le d<m$,

$$
1<2^{d}+1<2^{m}+1,
$$

that is, $2^{d}+1$ is a **proper factor lying strictly between $1$ and $2^{m}+1$**. This contradicts $2^{m}+1$ being prime (having only the trivial factors $1$ and itself).

Therefore $m$ contains no odd factor $>1$, that is, $m$ is made up only of factors $2$ - $m$ is a power of $2$. **(QED)**

> **A reminder about direction (do not read it backwards)**: this proposition only says "prime $\Rightarrow$ the exponent is a power of $2$"; it
>
> **does not**
>
> guarantee "the exponent is a power of $2$ $\Rightarrow$ prime". The reverse direction is where Fermat guessed wrong - see $F_5$ in the next subsection.

### 1.3 Fermat's crash: $F_5$ is not prime (Euler 1732)

![The Fermat primes $F_0\!=\!3,\,F_1\!=\!5,\,F_2\!=\!17,\,F_3\!=\!257,\,F_4\!=\!65537$; $F_5$ is struck out by Euler in 1732 with the factor 641. — Abel (Manim)](/content/images/2026/05/fig_s1_3_F5_fail.png)

*The Fermat primes $F_0\!=\!3,\,F_1\!=\!5,\,F_2\!=\!17,\,F_3\!=\!257,\,F_4\!=\!65537$; $F_5$ is struck out by Euler in 1732 with the factor 641. — Abel (Manim)*

Fermat conjectured that "all $F_k$ are prime", but he only checked up to $F_4$. About a century later, [**Euler**](https://en.wikipedia.org/wiki/Leonhard_Euler)** in 1732** gave the first counterexample: the sixth Fermat number

$$
F_5=2^{2^{5}}+1=2^{32}+1=4294967297
$$

is **not** prime. Euler's key insight was: if $F_5$ has a prime factor, that prime factor must be of the form $64k+1$ (this constraint greatly narrows the search range), and on this basis he soon pinned down $641$. The verification needs only **one division**:

$$
4294967297=641\times 6700417.
$$

($641$ is prime, and $6700417$ is also prime, but the latter was only confirmed later. $641=64\times10+1$, exactly of the form $64k+1$.) This stroke brought the "Fermat primes" down from "an infinite family" to a rare list of "only $5$ known at present": $F_0,\dots,F_4 = 3,5,17,257,65537$. After $F_5$ nobody has ever found a new Fermat prime, and whether there is a sixth is unknown to this day.

It is exactly this rarity that determines that the "regular polygons with an odd prime number of sides" constructible with straightedge and compass can be counted on the fingers - and $17$ holds one of the places.

### 1.4 The constructibility criterion: the Gauss–Wantzel theorem

![The Gauss–Wantzel criterion $n=2^a p_1\cdots p_k$ (distinct Fermat primes); the $7/9/11/13/14$-gons are out. — Abel (Manim)](/content/images/2026/05/fig_s1_4_gauss_criterion.png)

*The Gauss–Wantzel criterion $n=2^a p_1\cdots p_k$ (distinct Fermat primes); the $7/9/11/13/14$-gons are out. — Abel (Manim)*

![F. J. Richelot (1808–1875), who constructed the regular 257-gon in 1832. Wikimedia Commons, public domain.](/content/images/2026/05/hist_s1_richelot_257gon.jpg)

*F. J. Richelot (1808–1875), who constructed the regular 257-gon in 1832. Wikimedia Commons, public domain.*

Now lay out in full the general criterion for "which regular polygons are constructible". Its "sufficiency" (how to construct) was given by Gauss in 1796 by taking roots of periods (§3–§6 of this series do exactly the case $n=17$ from the beginning), and its "necessity" (if not satisfied, it really cannot be constructed) was completed by [**Wantzel**](https://mathshistory.st-andrews.ac.uk/Biographies/Wantzel/)** in 1837** ([J. Math. Pures Appl. **2**, 366–372](https://en.wikipedia.org/wiki/Pierre_Wantzel)). Together they are called:

> **The Gauss–Wantzel theorem.**
>
> The regular $n$-gon can be constructed exactly with straightedge and compass if and only if
>
> $$
> n=2^{a}\,p_{1}p_{2}\cdots p_{k},
> $$
>
> where $a\ge 0$, and $p_{1},\dots,p_{k}$ are
>
> **mutually distinct**
>
> Fermat primes ($k$ may be $0$).

To read this criterion, grasp three key points:

- **"Mutually distinct" is a hard constraint**. Among the constructible odd prime factors, each Fermat prime is used at most once. For example $n=9=3^{2}$ uses the Fermat prime $3$ repeatedly, and is **not constructible** - and this is exactly equivalent to "$60^\circ$ cannot be trisected". Go through this chain of equivalence: the regular nonagon requires constructing $40^\circ=\tfrac{1}{9}\cdot360^\circ$; and $40^\circ=2\times20^\circ$, doubling an angle is constructible, so "constructing $40^\circ$" and "constructing $20^\circ$" are the same thing; and $20^\circ=\tfrac{1}{3}\cdot60^\circ$, so it finally comes down to "can $60^\circ$ be trisected" - and $60^\circ$ itself is a readily constructible angle (the equilateral triangle), but trisecting it is not possible. The rigorous proof of this impossibility is left to §7.
- **Multiplying by $2$ costs nothing**. The factor $2^{a}$ can be added freely: if you can construct the regular $n$-gon, you can construct the regular $2n$-gon (bisect each arc, which needs only one perpendicular bisector). So the regular $3,5,15,17$-gons are constructible, and the regular $6,10,30,34,68$-gons are all constructible too.
- **The list of constructible odd numbers of sides is extremely short**. From the $5$ known Fermat primes $\{3,5,17,257,65537\}$ take several "mutually distinct" ones and multiply them, also counting "taking none at all" (the empty product $=1$, corresponding to $n$ being a pure power of $2$), and **there are only $2^{5}=32$ combinations in total**. Listing the odd numbers of sides other than the empty product $1$ gives $3,5,15,17,51,85,255,257,\dots$ ($15=3\times5$ slots in between $5$ and $17$). $17$ is the fourth smallest among them, and the first that is "non-trivial to the point of surprise" - this is exactly why Gauss shook the mathematical world back then (only after solving this problem, when not yet nineteen, did he decide to devote himself to mathematics).

### 1.5 The arithmetic heart of necessity: the degree must be a power of $2$

Why exactly **Fermat** primes in the criterion? This subsection gives the intuitive chain (for the complete proof see Wantzel's degree criterion in §7); it translates "geometrically constructible" into "arithmetically, the exponent is a power of $2$", connecting exactly back to §1.2.

**Step one - turn geometry into coordinates.** Put the regular $p$-gon into the unit circle with the first vertex pinned at $(1,0)$; then the adjacent vertex is $\big(\cos\frac{2\pi}{p},\sin\frac{2\pi}{p}\big)$. **Constructing the regular $p$-gon $\iff$ constructing the real number $\cos\frac{2\pi}{p}$** (with this horizontal coordinate, the vertical coordinate $\sin$ is obtained from the equation of the unit circle by taking one square root, and the remaining vertices are copied by equal arcs). So the problem falls entirely onto whether one real number can be constructed.

**Step two - the "degree" of a constructible number must be a power of $2$.** Each straightedge-and-compass step (line meets line, line meets circle, circle meets circle) solves at most one **quadratic** equation in coordinates, that is, introduces at most one square root. Stringing the whole construction together, any constructible number $x$ lies at the top of a tower of extensions that is "quadratic at each layer", and so its algebraic degree

$$
[\mathbb{Q}(x):\mathbb{Q}]=2^{t}\quad(\text{for some } t\ge 0)
$$

**must be a power of $2$** (this is the core of Wantzel 1837; §7 gives the rigorous argument by the tower multiplication formula).

**Step three - compute the degree of $\cos\frac{2\pi}{p}$.** For a **prime** $p$, it can be proved (§2 of this series has proved that $\zeta_{17}$, over $\mathbb{Q}$, has degree $=16$, and for a general prime the same argument gives $p-1$):

$$
\big[\mathbb{Q}\big(\cos\tfrac{2\pi}{p}\big):\mathbb{Q}\big]=\frac{p-1}{2}=\frac{\varphi(p)}{2}.
$$

**Step four - put it together.** If the regular $p$-gon is constructible, then by steps two and three, $\dfrac{p-1}{2}$ must be a power of $2$, so $p-1$ is a power of $2$, that is, of the form $p=2^{m}+1$. And by the proposition of §1.2, $2^{m}+1$ being prime forces $m$ to be a power of $2$, so $p=2^{2^{k}}+1=F_k$ is a **Fermat prime**. This explains why the criterion must involve Fermat primes - they are the only arithmetic outlet for the geometric constraint "the degree is a power of $2$".

> **Where the three great problems belong (please do not lump them together)**: Wantzel's ruler of "the degree must be a power of $2$"
>
> **only**
>
> directly closes off
>
> **doubling the cube**
>
> (requires constructing $\sqrt[3]{2}$, degree $3$) and
>
> **trisecting an arbitrary angle**
>
> (e.g. $\cos20^\circ$ satisfies an irreducible cubic equation, degree $3$) - these two problems; both are out because "degree $3$" appears. But
>
> **squaring the circle**
>
> does not rest on Wantzel: it requires constructing $\sqrt{\pi}$, and the root of $\pi$'s non-constructibility is that
>
> [**Lindemann**](https://mathshistory.st-andrews.ac.uk/Biographies/Lindemann/)
>
> ** in 1882**
>
> (
>
> [Math. Annalen **20**, 213–225](https://en.wikipedia.org/wiki/Lindemann%E2%80%93Weierstrass_theorem)
>
> ) proved that
>
> **$\pi$ is transcendental**
>
> (not even an algebraic number, let alone constructible). So the full stop on the third problem was put down by Lindemann, not Wantzel. §7 will prove these three separately.

### 1.6 Worked examples: quickly deciding a few regular polygons with the criterion

> **Example 1.1 ($17=F_2$, constructible).**
>
> $17=2^{4}+1$, the exponent $4=2^{2}$ is a power of $2$, and $17$ is prime, so $17$ is the Fermat prime $F_2$. $\dfrac{17-1}{2}=8=2^{3}$ is a power of $2$ → the regular 17-gon is
>
> **constructible**
>
> .
>
> **Example 1.2 ($7$, not constructible).**
>
> $\dfrac{7-1}{2}=3$ is not a power of $2$; and $7=2^{m}+1$ has no integer solution ($7-1=6$ is not a power of $2$) → $7$ is not a Fermat prime → the regular heptagon is
>
> **not constructible**
>
> . Likewise for the regular $11,13$-gons: $(11-1)/2=5$ and $(13-1)/2=6$ are neither powers of $2$, so neither is constructible.
>
> **Example 1.3 ($9=3^{2}$, not constructible).**
>
> The odd prime factors of $9$ are the repeated Fermat prime $3\times3$, violating "mutually distinct" → the regular nonagon is
>
> **not constructible**
>
> (equivalent to $60^\circ$ not being trisectable: the regular nonagon requires constructing $40^\circ=2\times20^\circ$, and $20^\circ=60^\circ/3$).
>
> **Example 1.4 ($15=3\times5$, constructible).**
>
> $3=F_0$ and $5=F_1$ are two
>
> **different**
>
> Fermat primes, and the product satisfies the criterion → the regular 15-gon is
>
> **constructible**
>
> (already known to Euclid). Multiplying further by powers of $2$: the regular $30,60,120$-gons are all constructible too.

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

The run output confirms: $F_5=641\times 6700417$ is broken by a single division; within $m=1\sim39$, whenever $2^{m}+1$ is prime its exponent is necessarily a power of $2$; $p=3,5,17,257,65537$ are constructible, and $p=7,11,13$ are not.

### 1.7 Modern significance

This criterion welds the most ancient of tools, "a straightedge and a compass", to the language of **fields and degrees of extensions** that only matured in the nineteenth century, and its echoes go far beyond geometry itself:

- **A problem of more than two thousand years, closed along two timelines**. The three great ancient Greek construction problems (doubling the cube, trisecting the angle, squaring the circle), counted from about $450$ BC ([Anaxagoras](https://en.wikipedia.org/wiki/Anaxagoras) thinking about squaring the circle in prison), were only finally settled by Wantzel 1837 and Lindemann 1882, a span of about **two thousand three hundred years**. That is one line. The other line is the construction of regular polygons: after [Euclid](https://mathshistory.st-andrews.ac.uk/Biographies/Euclid/) (about $300$ BC) gave the regular $3,5,15$-gons, the list of odd prime numbers of sides made no progress at all for **over two thousand years**, until [Gauss](https://mathshistory.st-andrews.ac.uk/Biographies/Gauss/) added the regular 17-gon in 1796 - the two "millennial scales" refer to different things; do not merge them into one number.
- **The rarity of Fermat primes is still an open frontier today**. Apart from $F_0\sim F_4$, humanity has not found another Fermat prime to this day, and many Fermat numbers after $F_5$ have been verified to be composite; "are there only finitely many Fermat primes" is an unsolved mystery of number theory. This means that whether the list of "regular polygons with a constructible odd number of sides" is closed is, in essence, an **open problem**.
- **The same criterion idea of "the degree is a power of $2$"** is exactly the embryo of Galois theory (§4): translate a geometric/equation problem into a problem about the structure of groups and fields, and then read off the answer from "the number of layers of the tower". This paradigm of "first translate, then use structure to decide possible or impossible" later governed the whole territory from the solution of algebraic equations by radicals (Abel–Galois) to modern computational complexity.

In the year he was not yet nineteen, Gauss used the regular 17-gon to show: sometimes the fastest path to answering "can it be done" is not to do it more cleverly, but to move the problem into an algebraic world where all the possibilities can be seen clearly - and $17=F_2$ is exactly the first pass that this world handed to geometry.

— *End of §1.*

---

## §2 — Multiplication on a clock: $(\mathbb{Z}/17\mathbb{Z})^{*}$ and its generator

To understand how Gauss "took apart" the regular 17-gon, we first have to get to know a small algebraic world: **multiplication modulo 17**. This section starts from zero - it does not assume you have studied group theory. We will first use the picture of a clock to make the objects clear, then formalize it, and finally prove one key fact: **by repeatedly multiplying with just one number, $g=3$, you can walk through all the nonzero remainders modulo 17**. This property of "walking through everything" is the entire foundation for the layer-by-layer root-taking of the next three sections.

### Additional notation for this section

| Notation | Reading / meaning |
| --- | --- |
| $\mathbb{Z}/17\mathbb{Z}$ | the world of remainders modulo 17, $\{0,1,2,\dots,16\}$, where addition, subtraction and multiplication all "wrap around" (like a 17-hour clock) |
| $(\mathbb{Z}/17\mathbb{Z})^{*}$ | the set formed by the **nonzero** remainders above, $\{1,2,\dots,16\}$, under **multiplication** (16 in all) |
| $\operatorname{ord}(a)$ | the **order** of $a$: the number of times $a$ must be multiplied by itself to return to $1$ for the first time |
| $g$ | **generator / primitive root**: an element with $\operatorname{ord}(g)=16$ (multiplying by itself it can traverse all 16) |
| $\zeta_{17}$ | $=e^{2\pi i/17}$, the primitive $17$-th root of unity on the unit circle of the complex plane |

### 2.1 The world modulo 17: a 17-hour clock

An ordinary clock has 12 hours, and after 12 it wraps around to 1. Change the number of hours to 17, and you get $\mathbb{Z}/17\mathbb{Z}$: all integers are classified by "their remainder on division by 17", leaving only the 17 representatives $0,1,2,\dots,16$. After two numbers are added or multiplied, **anything over 16 has a multiple of 17 subtracted to wrap it back**. For example

$$
5\times 7 = 35 = 2\times 17 + 1 \equiv 1 \pmod{17},\qquad 3\times 6 = 18 \equiv 1 \pmod{17}.
$$

The notation "$a\equiv b \pmod{17}$" is read "$a$ is congruent to $b$ modulo 17", meaning that they have the same remainder on division by 17 (they differ by a multiple of 17).

Why pick 17? Because **17 is prime** - it has no factors other than 1 and itself. This guarantees something good: among $1,2,\dots,16$, **any number can be "divided by"** (each has a multiplicative inverse). For example, $5\times 7\equiv 1$ above shows that $7$ is the reciprocal of $5$. So these 16 nonzero remainders form a closed little world of their own under multiplication, written $(\mathbb{Z}/17\mathbb{Z})^{*}$. (If the modulus is not prime, for example modulo 6, then $2\times 3\equiv 0$, multiplication "falls out" of the nonzero set, and this good property is gone.)

### 2.2 "Order": how long self-multiplication takes to return to 1

In this world of multiplication, pick a number and multiply it by itself repeatedly, and sooner or later you return to $1$ (because there are only finitely many values, it must cycle; and $1$ is certainly in the cycle). **The number of times needed to return to $1$ for the first time** is called the **order** $\operatorname{ord}(a)$ of the number.

Try it with $a=2$:

$$
2,\ 4,\ 8,\ 16,\ \underbrace{32}_{\equiv 15},\ \underbrace{30}_{\equiv 13},\ \underbrace{26}_{\equiv 9},\ \underbrace{18}_{\equiv 1}.
$$

It took 8 steps to return to $1$, so $\operatorname{ord}(2)=8$. Note that the orbit of $2$, $\{2,4,8,16,15,13,9,1\}$, has only **8** numbers - it **cannot walk through** all 16.

### 2.3 The generator $g=3$: walking step by step over the whole clock face

![The generator $g=3$: from 1, repeatedly $\times 3 \bmod 17$ walks in turn through all 16 nonzero remainders ($1\to3\to9\to10\to13\to\dots\to1$) and then returns to the start - the literal image of "generating". — Animation: Abel (Manim)](/content/images/2026/05/fig_s2_3_generator_g3_path.gif)

*The generator $g=3$: from 1, repeatedly $\times 3 \bmod 17$ walks in turn through all 16 nonzero remainders ($1\to3\to9\to10\to13\to\dots\to1$) and then returns to the start - the literal image of "generating". — Animation: Abel (Manim)*

Switch to $a=3$, and repeatedly $\times 3 \bmod 17$:

$$
3,\ 9,\ \underbrace{27}_{\equiv 10},\ \underbrace{30}_{\equiv 13},\ \underbrace{39}_{\equiv 5},\ \underbrace{15}_{},\ \underbrace{45}_{\equiv 11},\ \underbrace{33}_{\equiv 16},\ \dots
$$

Keep walking, and the orbit is

$$
3^0,3^1,\dots,3^{15} \equiv 1,3,9,10,13,5,15,11,16,14,8,7,4,12,2,6 \pmod{17},
$$

**the 16 numbers traverse $1$ to $16$ exactly, with no repeats and no omissions**, and only at the 16th step does it return to $1$. That is, $\operatorname{ord}(3)=16$. A number like this, whose "self-multiplication can walk through the whole", is called a **generator** (or **primitive root**): it is like the second hand of a clock; each jump of one notch (one $\times 3$), and $16$ jumps go exactly once around the clock face, stepping on every hour.

Compare the $2$ of 2.2 (which steps on only 8 points before returning early to the start), and you can feel intuitively what is special about a "generator": **not every number can generate; only one that can generate deserves to be called a primitive root**. $g=3$ is the smallest primitive root modulo 17, and we use it throughout what follows.

> This "renumbering the remainders by powers of $g$" is the
>
> **core trick**
>
> of the whole article. We do not look at these remainders in the natural order $1,2,3,\dots$, but line them up by which power of $g$ they are. We will see later: once this order of lining up is fixed, the symmetry of the regular 17-gon becomes a simple "shift of index".

### 2.4 Making it rigorous: $(\mathbb{Z}/17\mathbb{Z})^{*}$ is a cyclic group of order 16, $\operatorname{ord}(3)=16$

Make the intuition above rigorous. "Order" has a basic property (the special case of Lagrange's theorem in the cyclic situation): $\operatorname{ord}(a)$ **must divide** the number of elements of the group, $16$. So $\operatorname{ord}(3)$ can only be one of the divisors of $16$: $1,2,4,8,16$.

*Proof.* To prove $\operatorname{ord}(3)=16$, it suffices to rule out all the **proper divisors** $1,2,4,8$. Note that they all divide $8$, so "$\operatorname{ord}(3)$ is some proper divisor" would imply $3^{8}\equiv 1$. So **one only needs to check one condition**, $3^{8}\not\equiv 1$, to rule out all the proper divisors at one stroke. Square repeatedly:

$$
3^2=9,\quad 3^4=9^2=81\equiv 13,\quad 3^8\equiv 13^2=169\equiv 16\equiv -1 \pmod{17}.
$$

We get $3^{8}\equiv -1\neq 1$, so $\operatorname{ord}(3)\nmid 8$; combined with $\operatorname{ord}(3)\mid 16$, the only possibility is $\operatorname{ord}(3)=16$. **(QED)**

Since there exists an element of order $16$, the whole of $(\mathbb{Z}/17\mathbb{Z})^{*}$ is exhausted by its powers, that is, $(\mathbb{Z}/17\mathbb{Z})^{*}=\langle 3\rangle$ is a **cyclic group**, $(\mathbb{Z}/17\mathbb{Z})^{*}\cong \mathbb{Z}/16\mathbb{Z}$.

### 2.5 The key foundation: the degree of $\zeta_{17}$ over $\mathbb{Q}$ is exactly 16

All the later claims that "the symmetry group has 16 elements" and "each layer of extension has degree 2" hang on a fact that must be **proved** (not assumed): the lowest-degree equation with rational coefficients satisfied by $\zeta_{17}=e^{2\pi i/17}$ has **degree exactly 16**.

$\zeta_{17}$ is a root of $x^{17}-1=0$. Removing the factor $x-1$, it lies on the **cyclotomic polynomial**

$$
\Phi_{17}(x)=\frac{x^{17}-1}{x-1}=x^{16}+x^{15}+\cdots+x+1
$$

We prove that $\Phi_{17}$ is **irreducible** over $\mathbb{Q}$ (it cannot be further decomposed into a product of polynomials of lower degree with rational coefficients). The trick is to substitute $x\mapsto x+1$ and then use the **Eisenstein criterion**:

$$
\Phi_{17}(x+1)=\frac{(x+1)^{17}-1}{x}=x^{16}+\binom{17}{1}x^{15}+\binom{17}{2}x^{14}+\cdots+\binom{17}{16}.
$$

Because $17$ is prime, all the middle binomial coefficients $\binom{17}{k}$ ($1\le k\le 16$) are divisible by $17$; the constant term is $\binom{17}{16}=17$, divisible by $17$ but **not** by $17^2=289$; the leading coefficient $1$ is not divisible by $17$. This satisfies the Eisenstein criterion exactly (with the prime $p=17$), so $\Phi_{17}(x+1)$ is irreducible, and hence $\Phi_{17}(x)$ is irreducible. Therefore

$$
[\mathbb{Q}(\zeta_{17}):\mathbb{Q}]=\deg\Phi_{17}=16.
$$

**This step is the load-bearing wall of the whole piece**: precisely because the degree is $16$, the "symmetry group" of $\zeta_{17}$ (the Galois group of §4) really has $16$ elements, and equals the whole of $(\mathbb{Z}/17\mathbb{Z})^{*}$ rather than some subgroup of it; otherwise all of the later "$|G|=16=2^4$, four layers of quadratic extensions" would come to nothing. (Without this step, $\zeta_{17}$ could in principle satisfy an equation of lower degree, and the whole tower would collapse.)

### 2.6 Worked examples: generator vs non-generator

> **Example 2.1 ($g=3$ is a generator).**
>
> The length of the orbit of powers of $3$ $=\operatorname{ord}(3)=16$, traversing the whole of $\{1,\dots,16\}$ - see 2.3.
>
> **Example 2.2 ($g=2$ is not a generator).**
>
> The orbit of powers of $2$, $\{2,4,8,16,15,13,9,1\}$, has only $\operatorname{ord}(2)=8$ elements, missing $\{3,5,6,7,10,11,12,14\}$. Checking the order: $2^8=256=15\times 17+1\equiv 1$, and $2^4=16\equiv -1\neq 1$, so $\operatorname{ord}(2)=8\neq 16$.
>
> **It walks only half the circle.  
>   
> Example 2.3 (smaller orders).**
>
> $\operatorname{ord}(16)=2$ (since $16\equiv -1$, $(-1)^2=1$); $\operatorname{ord}(4)=4$ ($4^2=16\equiv -1$, $4^4\equiv 1$). The smaller the order, the shorter the orbit, and the further from "generating".

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

### 2.7 Modern significance

"Repeated self-multiplication walking through the whole world of remainders" - the seemingly classical concept of the generator/primitive root is the heart of **modern public-key cryptography**:

- **Diffie–Hellman key exchange** (1976) is built precisely on, for a large prime $p$, a primitive root $g$: the two parties each take a secret exponent $a,b$, publicly exchange $g^a,g^b \bmod p$, and each then computes $g^{ab}$ as the shared key. The security comes from the **discrete logarithm problem** - given $g,\ g^a \bmod p$, recovering $a$ is computationally infeasible when $p$ is extremely large, even though the structure of $g$ "walking through" the whole guarantees that the values of $g^a$ are sufficiently uniform.
- The same "cyclic group + generator" structure also underpins **ElGamal encryption**, **DSA digital signatures**, and elliptic-curve cryptography (replacing the modular multiplicative group with the group of points on an elliptic curve, and the primitive root with a base point).

The cyclic structure of $(\mathbb{Z}/17\mathbb{Z})^{*}$ that Gauss studied in 1796 for a construction, and the mathematics that protects internet communications two centuries later, are the same object.

— *End of §2.*

---

## §3 — Gauss periods: splitting the sixteen roots into two halves, forcing out the first $\sqrt{17}$

§2 arranged the world modulo 17 into a 16-notch "second-hand track" - the powers of the generator $g=3$ step in turn on all 16 nonzero remainders. Gauss's stroke of genius was: **do not try to solve head-on the degree-16 equation that $\zeta_{17}$ satisfies, but group the 16 roots along this track and sum each group, so that the groups satisfy a simple quadratic equation among themselves**. This section makes the "first cut": split the 16 roots into two groups of 8 each, and prove that the sums of these two groups are exactly the two roots of $x^2+x-4=0$ - and so $\sqrt{17}$ appears for the first time.

### Additional notation for this section

| Notation | Meaning |
| --- | --- |
| quadratic residue $\mathrm{QR}$ | a remainder modulo 17 that "is the square of some number"; there are 8 |
| quadratic non-residue $\mathrm{NQR}$ | a nonzero remainder modulo 17 that is not a square; there are 8 |
| $\eta_0,\eta_1$ | the two **first-level Gauss periods**: sums of the roots of unity corresponding to QR / NQR |
| $N(c)$ | among the 64 product terms of $\eta_0\eta_1$, the number of terms with exponent $\equiv c$ |

### 3.1 Intuition: why "summing in groups" is a good idea

Facing $\zeta_{17}$ directly is hard - it satisfies a degree-16 equation. But the 16 roots, as a **whole**, have a great deal of symmetry (the cyclic structure of §2). Gauss's idea is like cutting a cake: first cut the 16 roots into 2 pieces (each piece the sum of 8 roots, written $\eta_0,\eta_1$); these two pieces satisfy a **quadratic** equation, which is easy to solve; then cut each piece into 2 smaller pieces (the $\theta$ of §4), again a quadratic equation; cut 4 times like this, and each cut needs only the solution of a quadratic equation, the taking of one square root. **4 square roots drag $\zeta_{17}$ down from the sky to the ground that straightedge and compass can reach.** This section is the first cut.

### 3.2 What a quadratic residue is (define first, then use)

A nonzero remainder $a$ is called a **quadratic residue** (QR) if it "is a square" modulo 17 - that is, there exists some $b$ with $b^2\equiv a\pmod{17}$. Otherwise it is called a **quadratic non-residue** (NQR).

Compute $1^2,2^2,\dots,8^2$ modulo 17 (beyond that they repeat symmetrically):

$$
1,\ 4,\ 9,\ \underbrace{16}_{},\ \underbrace{25}_{\equiv 8},\ \underbrace{36}_{\equiv 2},\ \underbrace{49}_{\equiv 15},\ \underbrace{64}_{\equiv 13}.
$$

Removing duplicates gives **8** quadratic residues:

$$
\mathrm{QR}=\{1,2,4,8,9,13,15,16\},\qquad \mathrm{NQR}=\{3,5,6,7,10,11,12,14\}.
$$

**The connection with the generator of §2 (key)**: the quadratic residues are exactly the **even powers** of $g=3$. The reason is short: an even power $g^{2k}=(g^{k})^2$ is of course a square, so it is a QR; conversely, the "kernel" of the squaring map $x\mapsto x^2$ has only the two elements $\{\pm 1\}$ ($x^2\equiv 1$ only for $x\equiv\pm1$, since 17 is prime), so the squaring map is **2-to-1** - $16$ elements map onto $8$ images, and these 8 images are all the QRs, exactly the 8 even powers. So

$$
\text{even powers} \;=\; \text{quadratic residues QR},\qquad \text{odd powers} \;=\; \text{non-residues NQR}.
$$

The figure below draws this: the 16 remainders are placed on the unit circle, and the QRs (ochre) and NQRs (blue) are split into two groups by the parity of the power of $g=3$ - these are exactly the members of $\eta_0,\eta_1$, about to be defined.

![QR / non-residues grouped by the parity of the power of g=3](/content/images/2026/05/qr_period_split.png)

### 3.3 The two first-level Gauss periods $\eta_0,\eta_1$

![The 16 roots split into two first-level Gauss periods: 8 $\to\eta_0$ (orange), 8 $\to\eta_1$ (blue). — Animation: Abel (Manim)](/content/images/2026/05/fig_s3_3_period_split.gif)

*The 16 roots split into two first-level Gauss periods: 8 $\to\eta_0$ (orange), 8 $\to\eta_1$ (blue). — Animation: Abel (Manim)*

Summing the roots of unity corresponding to the QRs, and those corresponding to the NQRs, gives two numbers:

$$
\eta_0=\sum_{a\in\mathrm{QR}}\zeta_{17}^{\,a},\qquad \eta_1=\sum_{b\in\mathrm{NQR}}\zeta_{17}^{\,b}.
$$

Each is a sum of 8 roots of unity. Below we prove that they satisfy a beautiful quadratic equation.

### 3.4 Proposition one: $\eta_0+\eta_1=-1$

The two groups of exponents together are exactly $\{1,2,\dots,16\}$, so

$$
\eta_0+\eta_1=\sum_{k=1}^{16}\zeta_{17}^{\,k}.
$$

And the sum of all 17 roots of unity is zero ($1+\zeta_{17}+\cdots+\zeta_{17}^{16}=0$, because they are the roots of $x^{17}-1=0$, whose $x^{16}$ coefficient is 0). Removing $\zeta_{17}^0=1$ gives $\sum_{k=1}^{16}\zeta_{17}^{k}=-1$. Hence

$$
\boxed{\eta_0+\eta_1=-1.} \tag{1}
$$

### 3.5 Proposition two: $\eta_0\cdot\eta_1=-4$ (with a complete account of the $8\times 8=64$ expansion)

![The expansion of $\eta_0\cdot\eta_1$ into $8\times8=64$ terms: each nonzero remainder appears exactly 4 times, and the sum $=-4$. — Animation: Abel (Manim)](/content/images/2026/05/fig_s3_5_8x8_expansion.gif)

*The expansion of $\eta_0\cdot\eta_1$ into $8\times8=64$ terms: each nonzero remainder appears exactly 4 times, and the sum $=-4$. — Animation: Abel (Manim)*

This is the only step in this section that takes some effort. By definition, multiplying two sums of 8 terms gives $8\times 8=64$ product terms, each of the form $\zeta_{17}^{a}\cdot\zeta_{17}^{b}=\zeta_{17}^{a+b}$:

$$
\eta_0\,\eta_1=\Big(\sum_{a\in\mathrm{QR}}\zeta_{17}^{a}\Big)\Big(\sum_{b\in\mathrm{NQR}}\zeta_{17}^{b}\Big)=\sum_{a\in\mathrm{QR}}\sum_{b\in\mathrm{NQR}}\zeta_{17}^{\,a+b}.
$$

Because $\zeta_{17}^{17}=1$, for each term only the exponent $c:=(a+b)\bmod 17$ matters. Classify the 64 terms by $c$, and write

$$
N(c)=\#\{(a,b)\in\mathrm{QR}\times\mathrm{NQR}:a+b\equiv c\pmod{17}\},\qquad \sum_{c=0}^{16}N(c)=64.
$$

We prove two things: **(i)** $N(0)=0$; **(ii)** for each $c\in\{1,\dots,16\}$, $N(c)=4$.

**(i) $c=0$ is impossible.** $a+b\equiv 0$ means $b\equiv -a$. Since $17\equiv 1\pmod 4$, $-1$ is a quadratic residue ($-1\equiv 16=4^2$). A residue times a residue is still a residue, so $-a=(-1)\cdot a$, when $a\in\mathrm{QR}$, is still in $\mathrm{QR}$, and **never falls into $\mathrm{NQR}$**. So no legitimate $(a,b)$ gives $c=0$, that is, $N(0)=0$.

**(ii) Each nonzero $c$ exactly 4 times.** Here we use a clean symmetry argument (**not depending** on $\eta_0\neq\eta_1$, to avoid circularity):

- *Step one ($\mathrm{QR}$-shift)*: take any residue $t\in\mathrm{QR}$. Multiplying by $t$ sends $\mathrm{QR}\to\mathrm{QR}$ and $\mathrm{NQR}\to\mathrm{NQR}$ (residue times residue = residue, residue times non-residue = non-residue), so $(a,b)\mapsto(ta,tb)$ is a bijection of $\mathrm{QR}\times\mathrm{NQR}$ to itself, turning $a+b\equiv c$ into $\equiv tc$. Hence $N(c)=N(tc)$. Moreover, under the action of "multiplying by QR", the nonzero remainders split into exactly two orbits - $\mathrm{QR}$ itself and $\mathrm{NQR}$. So $N$, on $\mathrm{QR}$, takes a constant value $N_{\mathrm R}$, and on $\mathrm{NQR}$ a constant value $N_{\mathrm N}$.
- *Step two ($\mathrm{NQR}$-swap, welding the two constants into one)*: take any non-residue $s\in\mathrm{NQR}$. Multiplying by $s$ **swaps** $\mathrm{QR}\leftrightarrow\mathrm{NQR}$, so $(a,b)\mapsto(sb,sa)$ (note $sb\in\mathrm{QR}$, $sa\in\mathrm{NQR}$) is still a bijection of $\mathrm{QR}\times\mathrm{NQR}$ to itself, and $sa+sb\equiv sc$. So $N(c)=N(sc)$; and $s\in\mathrm{NQR}$ maps the $\mathrm{QR}$ class to the $\mathrm{NQR}$ class, and vice versa. **This step gives $N_{\mathrm R}=N_{\mathrm N}$ directly** - without needing any information about whether $\eta_0,\eta_1$ are equal.
- *Step three (counting)*: $8N_{\mathrm R}+8N_{\mathrm N}=\sum_{c=1}^{16}N(c)=64-N(0)=64$, and combined with $N_{\mathrm R}=N_{\mathrm N}$ this gives $N_{\mathrm R}=N_{\mathrm N}=4$.

So each nonzero remainder appears exactly 4 times:

$$
\eta_0\eta_1=\sum_{c=1}^{16}N(c)\,\zeta_{17}^{c}=4\sum_{c=1}^{16}\zeta_{17}^{c}=4\cdot(-1)=-4.
$$

$$
\boxed{\eta_0\cdot\eta_1=-4.} \tag{2}
$$

> **Why stress "not depending on $\eta_0\neq\eta_1$"**: a common way of writing it uses the Galois automorphism $\sigma$ to derive $(N_{\mathrm R}-N_{\mathrm N})(\eta_0-\eta_1)=0$, and then divides by $\eta_0-\eta_1$. But that requires knowing first that $\eta_0\neq\eta_1$, and the cleanest reason for "$\eta_0\neq\eta_1$" comes precisely from $\sqrt{17}\neq 0$, which is about to be computed below - that would be
>
> **circular reasoning**
>
> . The NQR-swap argument above gets around this pit: it gives $N_{\mathrm R}=N_{\mathrm N}$ directly, without inverting cause and effect.

### 3.6 The first radical $\sqrt{17}$

![$x^2+x-4=0 \Rightarrow \eta_{0,1}=\frac{-1\pm\sqrt{17}}{2}$ - $\sqrt{17}$ appears for the first time. — Abel (Manim)](/content/images/2026/05/fig_s3_6_sqrt17_hero.png)

*$x^2+x-4=0 \Rightarrow \eta_{0,1}=\frac{-1\pm\sqrt{17}}{2}$ - $\sqrt{17}$ appears for the first time. — Abel (Manim)*

By (1), (2) and Vieta's theorem (the relation between roots and coefficients), $\eta_0,\eta_1$ are the two roots of

$$
x^2-(\eta_0+\eta_1)x+\eta_0\eta_1=x^2+x-4=0
$$

The discriminant is $1^2-4(1)(-4)=1+16=17$, so

$$
\boxed{\eta_{0,1}=\frac{-1\pm\sqrt{17}}{2}.}
$$

$\sqrt{17}$ **appears for the first time**. $\eta_0,\eta_1$ are both real (complex conjugation sends $\zeta_{17}^a$ to $\zeta_{17}^{-a}$, and $-\mathrm{QR}=\mathrm{QR}$, $-\mathrm{NQR}=\mathrm{NQR}$, so the two sums are unchanged by conjugation). Take $\eta_0=\frac{-1+\sqrt{17}}{2}\approx 1.5616$ (the larger), $\eta_1=\frac{-1-\sqrt{17}}{2}\approx -2.5616$. It generates the first layer of the tower of fields, $K_1=\mathbb{Q}(\sqrt{17})$, $[K_1:\mathbb{Q}]=2$ - it can be constructed with a single square root, which is exactly what straightedge and compass can do.

### 3.7 Worked examples

> **Example 3.1 (checking the sum and product).**
>
> Numerically $\eta_0+\eta_1\approx 1.5616+(-2.5616)=-1$ ✓; $\eta_0\eta_1\approx 1.5616\times(-2.5616)=-4.000$ ✓.
>
> **Example 3.2 (spot check of $N(c)$).**
>
> Take $c=1$: count the pairs in $\mathrm{QR}\times\mathrm{NQR}$ with $a+b\equiv 1$ (requiring $a\in\mathrm{QR},b\in\mathrm{NQR}$): among the candidates, $(2,16)$ and $(9,9)$ are both out ($16,9\notin\mathrm{NQR}$);
>
> **the exactly $4$ pairs that are really legitimate are $(4,14),(8,10),(13,5),(15,3)$**
>
> (see the program enumeration below). Every nonzero $c$ gives 4, and $c=0$ gives 0.

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

### 3.8 Modern significance

Gauss periods are not a one-off trick. Generalizing "grouping roots of unity by cosets of a subgroup and summing" gives the **Gauss sums** and **period polynomials** of modern number theory, which are:

- the core tool of the most concise proofs of **quadratic reciprocity** (the square of a Gauss sum gives $\pm p$, and the sign is exactly the sign in the reciprocity law);
- the computational skeleton of the **class field theory of cyclotomic fields** - the intermediate subfields generated by these periods correspond exactly to the subgroups of the Galois group (§4 will use this correspondence);
- the direct source of the cyclotomic periods in modern **primality testing** (e.g. the [APR / APR-CL](https://en.wikipedia.org/wiki/Adleman%E2%80%93Pomerance%E2%80%93Rumely_primality_test) test, Adleman–Pomerance–Rumely 1983 + the practical Cohen–Lenstra variant) - APR is a primality test (it does no integer factorization), and its cyclotomic periods trace back to Jacobi sums.

A "summing in groups" done in order to draw a 17-gon grew into a common language of twentieth-century algebraic number theory.

— *End of §3.*

---

## §4 — The group of symmetries: the Galois group, and the second and third cuts

§3 made the "first cut" - splitting the 16 roots into the two halves $\eta_0,\eta_1$, forcing out $\sqrt{17}$. But that cut relied on something not yet explained: why does "multiplying the exponent by some power of $g$" map quadratic residues neatly to quadratic residues, and non-residues to non-residues? This kind of operation, "swapping roots without making a mess", is exactly the protagonist of this section - the **Galois group**. It is the invisible skeleton behind Gauss's whole method of cutting. This section starts from zero (**it does not assume you have heard words like "group theory" or "Galois"**): first explain in plain words what "symmetry" actually means, then formalize it as a group, then use it to make the second cut cleanly and neatly ($\eta\to\theta$, forcing out $\sqrt{34-2\sqrt{17}}$), and make clear why each layer of the whole "tower of four quadratic extensions" has degree exactly 2.

### Additional notation for this section

| Notation | Reading / meaning |
| --- | --- |
| $\sigma_k$ | the "root-swapping map" that replaces $\zeta_{17}$ by $\zeta_{17}^{\,k}$, $\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{\,k}$ |
| $\mathrm{Gal}(\mathbb{Q}(\zeta_{17})/\mathbb{Q})$ | the **Galois group**: all root-swapping maps that leave the rational numbers fixed, forming a group under composition |
| $\sigma$ | in this section we fix $\sigma:=\sigma_3$ (using the primitive root $g=3$ of §2); it is the generator of the whole group |
| $\langle\sigma^d\rangle$ | the **subgroup** generated by repeatedly composing $\sigma^d$ |
| $\theta_0,\theta_1$ | the two **second-level Gauss periods**: the 4-term sums obtained by cutting $\eta_0$ into two halves again |
| $K_0\subset\cdots\subset K_4$ | the tower of fields: $\mathbb{Q}=K_0\subset K_1\subset K_2\subset K_3\subset K_4=\mathbb{Q}(\zeta_{17})$ |

### 4.1 Intuition: what "symmetry of the roots" means

First set aside all terminology. $\zeta_{17}=e^{2\pi i/17}$ is a root of the degree-16 equation $\Phi_{17}(x)=x^{16}+\cdots+x+1=0$ (§2). Who are its "sibling roots"? Substitute the powers of $\zeta_{17}$

$$
\zeta_{17},\ \zeta_{17}^2,\ \zeta_{17}^3,\ \dots,\ \zeta_{17}^{16}
$$

one by one into $\Phi_{17}$, and you will find that **every one is a root** - they are exactly the 16 seventeenth roots of unity on the unit circle other than $1$, all solutions of $\Phi_{17}=0$.

Now do something that looks pointless: **replace $\zeta_{17}$ in the equation entirely by one of its sibling roots $\zeta_{17}^{k}$, leaving the rational numbers as they are.** For example, replace every occurrence of $\zeta_{17}$ by $\zeta_{17}^3$. Such a replacement is written $\sigma_3$. The key picture is:

> These 16 roots are like 16 identical marbles laid out on a circle, and the world of the rational numbers
>
> **cannot tell which is which**
>
> - because they satisfy exactly the same equation $\Phi_{17}=0$, and rational coefficients cannot single out any one of them by name. So a rearrangement like "swap marble 1 for marble 3, marble 3 for marble 9……", seen from the viewpoint of the rational numbers, is
>
> **the same as not moving at all**
>
> : any equality with rational coefficients that holds before the swap holds just the same after it.

Such a root swap, "equal to not moving at all in the eyes of the rational numbers", is called a **symmetry** of $\mathbb{Q}(\zeta_{17})$ over $\mathbb{Q}$ (technical term: a $\mathbb{Q}$-automorphism). It necessarily sends roots to roots, preserves addition and multiplication, and fixes every rational number. **All such symmetries put together are the Galois group.** "Group" here only says: two symmetries done one after the other (composition) are still a symmetry, every symmetry can be undone (has an inverse), and the "identity" that swaps nothing also counts as one - the same kind of "stackable and reversible" structure as the moves of a Rubik's cube or the rotations of the plane.

### 4.2 Numbering the symmetries: $\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{\,k}$

![Numbering the symmetries: $\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{k}$; the 16 maps form the Galois group $\cong(\mathbb{Z}/17\mathbb{Z})^{*}$. — Animation: Abel (Manim)](/content/images/2026/05/fig_s4_2_galois_sigma_maps.gif)

*Numbering the symmetries: $\sigma_k:\zeta_{17}\mapsto\zeta_{17}^{k}$; the 16 maps form the Galois group $\cong(\mathbb{Z}/17\mathbb{Z})^{*}$. — Animation: Abel (Manim)*

A symmetry is completely determined by which sibling root it sends $\zeta_{17}$ to (because it preserves multiplication, knowing where $\zeta_{17}$ goes means knowing everything). Write the symmetry "$\zeta_{17}\mapsto\zeta_{17}^{k}$" as $\sigma_k$. Here $k$ can only take $1,2,\dots,16$ (taking $0$ would send $\zeta_{17}$ to $1$, which is not a sibling root, and is not allowed). When two symmetries are composed, the exponents multiply:

$$
\sigma_j\circ\sigma_k:\ \zeta_{17}\ \xmapsto{\ \sigma_k\ }\ \zeta_{17}^{\,k}\ \xmapsto{\ \sigma_j\ }\ (\zeta_{17}^{\,k})^{\,j}=\zeta_{17}^{\,jk},\qquad\text{i.e.}\quad \sigma_j\circ\sigma_k=\sigma_{jk\bmod 17}.
$$

**Do you see the trick?** The "composition" of symmetries corresponds exactly to the "multiplication modulo 17" of the exponents - this is exactly the 16-hour multiplication clock $(\mathbb{Z}/17\mathbb{Z})^{*}$ of §2! So there is a natural correspondence

$$
\sigma_k\ \longleftrightarrow\ k\in(\mathbb{Z}/17\mathbb{Z})^{*},
$$

translating "composing symmetries" into "multiplying remainders". This correspondence is an **operation-preserving injection**: different $k$ give different root swaps (sending $\zeta_{17}$ to different siblings), and composition corresponds to multiplication.

But an injection is not enough - could the "root swaps" corresponding to some $k$ in fact **not be legitimate symmetries** (some rational equality being broken after the swap)? This is exactly where the "load-bearing wall" of §2 has to hold.

### 4.3 The key: $\mathrm{Gal}\cong(\mathbb{Z}/17\mathbb{Z})^{*}\cong\mathbb{Z}/16$ (why all 16 symmetries are legitimate)

Each legitimate symmetry corresponds to a $k$; conversely, **does every $k\in\{1,\dots,16\}$ give a legitimate symmetry?** This is equivalent to asking: can sending $\zeta_{17}$ to an arbitrary sibling root $\zeta_{17}^k$ be extended, without breaking any rational equality, to a symmetry of the whole field $\mathbb{Q}(\zeta_{17})$?

The answer is yes, and **the grounds are precisely "$\Phi_{17}$ is irreducible, $[\mathbb{Q}(\zeta_{17}):\mathbb{Q}]=16$", proved in §2.5**. The standard consequence of this irreducibility is: **any two roots** of an irreducible polynomial are "algebraically indistinguishable" over $\mathbb{Q}$, and sending one root to the other can always be extended uniquely to a symmetry of the field. The 16 roots of $\Phi_{17}$, $\zeta_{17}^1,\dots,\zeta_{17}^{16}$, are therefore pairwise "interchangeable", corresponding to 16 genuine symmetries. So the injection of 4.2 is in fact a **surjection**:

$$
\boxed{\ \mathrm{Gal}\bigl(\mathbb{Q}(\zeta_{17})/\mathbb{Q}\bigr)\ \cong\ (\mathbb{Z}/17\mathbb{Z})^{*}\ \cong\ \mathbb{Z}/16\mathbb{Z}.\ }
$$

And §2 has proved that $(\mathbb{Z}/17\mathbb{Z})^{*}$ is the **cyclic group** of order 16 generated by the primitive root $g=3$. Translated: the whole Galois group is also cyclic, generated by repeatedly composing the single symmetry

$$
\sigma:=\sigma_3:\ \zeta_{17}\mapsto\zeta_{17}^{3}
$$

with $\sigma^{16}=\mathrm{id}$. Under the order of §2, "renumbering the exponents by powers of $g$" ($\zeta_{17}^{g^m}$ written as number $m$), what $\sigma$ does is extremely plain: **it advances the "number" $m$ of every exponent by one notch, $m\mapsto m+1\pmod{16}$**.

> **This is the true form of the knife of §3.**
>
> §3 said "multiplying by a residue $t$ maps QR to QR" - the residues are exactly the even numbers (even powers of $g$), and multiplying by $t=g^{2j}$ is number $+2j$, sending even numbers to even numbers. The so-called "symmetry of the Gauss periods" is, from start to finish, the incarnation of $\sigma$, this "number $+1$", at different step sizes.
>
> ⚠️
>
> **Without the irreducibility of §2.5, this section collapses at once.**
>
> If $\Phi_{17}$ were reducible and the true degree of $\zeta_{17}$ were $<16$, then some $\sigma_k$ would no longer be legitimate symmetries, the group would have fewer than 16 elements, and the "four-layer quadratic tower" would be out of the question. This is why we call §2.5 the load-bearing wall of the whole piece.

### 4.4 Seeing degrees through symmetry: the stabilizer argument (why each layer has degree exactly 2)

With the group, one can explain **why every cut is a quadratic equation** without relying on "hard counting of period lengths". Here one must take special care to avoid a circular trap: **one cannot presuppose "the degree of $\eta_0$ is 2" in order to prove it**, but must **derive** it step by step from the group structure - and, to derive "the degree is exactly 2", one must split it into two halves: first pin the upper bound, then rule out "it is actually rational".

The tool is the core correspondence of Galois theory - **fixed subfield $\leftrightarrow$ subgroup**: for $\beta\in\mathbb{Q}(\zeta_{17})$, its degree over $\mathbb{Q}$, $[\mathbb{Q}(\beta):\mathbb{Q}]$, equals the **orbit length** under the action of the whole group, and also equals $[\,\mathrm{Gal}:\mathrm{Stab}(\beta)\,]$, where $\mathrm{Stab}(\beta)=\{\tau\in\mathrm{Gal}:\tau(\beta)=\beta\}$ is the **stabilizer** of $\beta$ (those symmetries that leave it unmoved). The orbit-stabilizer theorem guarantees that these three are equal (this uses that $\mathbb{Q}(\zeta_{17})/\mathbb{Q}$ is a Galois extension, so that all the conjugates of $\beta$ are exactly its whole orbit).

Apply it to $\eta_0=\sum_{a\in\mathrm{QR}}\zeta_{17}^{a}$ from the first cut, **in two steps, whose order cannot be reversed**:

- **Step one (pin the upper bound, using only "which symmetries fix it"):** $\sigma^2$ moves every exponent number by $+2$ and preserves parity, so it maps QR (the even numbers) as a whole back to QR; the summands of $\eta_0$ are only rearranged, and the value is unchanged - so $\sigma^2$ **fixes** $\eta_0$, and therefore the whole subgroup $\langle\sigma^2\rangle\subseteq\mathrm{Stab}(\eta_0)$. And the order of $\sigma^2$ is $16/\gcd(2,16)=8$, so $|\langle\sigma^2\rangle|=8$. By "the larger the stabilizer, the smaller the degree":
  $$
  [\mathbb{Q}(\eta_0):\mathbb{Q}]=[\mathrm{Gal}:\mathrm{Stab}(\eta_0)]\ \le\ [\mathrm{Gal}:\langle\sigma^2\rangle]=\tfrac{16}{8}=2.
  $$
  **Note that one cannot yet write "degree $=2$" here** - we have only proved that $\langle\sigma^2\rangle$ is in the stabilizer, and have not yet ruled out the stabilizer being larger (which would drop the degree to 1).
- **Step two (rule out degree $1$, $\Rightarrow$ and pin down the stabilizer in passing):** "degree $1$" means $\eta_0\in\mathbb{Q}$, that is, **every** symmetry fixes it ($\mathrm{Stab}(\eta_0)=\mathrm{Gal}$). To refute it, one only needs to **actually exhibit** a symmetry that moves $\eta_0$ away (the exhibit that Socrates's P1-A② required, rather than an empty claim of "degree 2"):
  $$
  \sigma(\eta_0)=\sum_{a\in\mathrm{QR}}\zeta_{17}^{\,3a}=\sum_{a'\in\,3\cdot\mathrm{QR}}\zeta_{17}^{\,a'}.
  $$
  And $3=g$ is an odd number, and $3\cdot\mathrm{QR}$ pushes all the even numbers into odd numbers, that is, $3\cdot\mathrm{QR}=\mathrm{NQR}$. So
  $$
  \boxed{\ \sigma(\eta_0)=\sum_{b\in\mathrm{NQR}}\zeta_{17}^{\,b}=\eta_1\neq\eta_0.\ }
  $$
  (Numerically $\eta_0\approx 1.5616$, $\eta_1\approx -2.5616$, indeed not equal.) Since $\sigma$ really moves $\eta_0$, $\eta_0\notin\mathbb{Q}$, the degree is not $1$, and so $\mathrm{Stab}(\eta_0)\neq\mathrm{Gal}$.

**Putting it together to close.** $\langle\sigma^2\rangle$ is, in $\mathrm{Gal}$, a subgroup of **index $2$**, and between it and the whole group **there is no room for an intermediate subgroup**; and $\langle\sigma^2\rangle\subseteq\mathrm{Stab}(\eta_0)\subsetneq\mathrm{Gal}$, so squeezed in between, only one possibility remains: $\mathrm{Stab}(\eta_0)=\langle\sigma^2\rangle$. So

$$
[\mathbb{Q}(\eta_0):\mathbb{Q}]=[\mathrm{Gal}:\langle\sigma^2\rangle]=2\quad(\text{exactly }2,\text{ not }1).
$$

The two "conjugates" of $\eta_0$ are exactly its orbit $\{\eta_0,\eta_1\}$, of length $2$, which corresponds exactly to the quadratic equation $x^2+x-4=0$ of §3. **The key is: we never assumed "the degree is 2"; first the stabilizer pinned it to $\le 2$, then a specific $\sigma$ ruled out $1$, and $2$ was squeezed out.**

This argument - "$\langle\sigma^d\rangle$ fixes it $\Rightarrow$ degree $\le 2$, then exhibit a $\sigma$ that moves it $\Rightarrow$ rule out degree $1$, $\Rightarrow$ index $2$ has no intermediate layer, the stabilizer is pinned down, and the degree is exactly $2$" - **applies equally to every cut**, giving layer by layer

$$
\mathbb{Q}=K_0\ \underset{2}{\subset}\ K_1\ \underset{2}{\subset}\ K_2\ \underset{2}{\subset}\ K_3\ \underset{2}{\subset}\ K_4=\mathbb{Q}(\zeta_{17}),
$$

corresponding to a chain of subgroups in the group, $\mathrm{Gal}\supset\langle\sigma^2\rangle\supset\langle\sigma^4\rangle\supset\langle\sigma^8\rangle\supset\{\mathrm{id}\}$, with all adjacent indices 2. Each layer down, the subgroup fixing it shrinks by half and the degree doubles, until the generator $\sigma$ is trapped and we are back at $\zeta_{17}$ itself.

### 4.5 The second cut: $\eta_0\to(\theta_0,\theta_1)$, forcing out $\sqrt{34-2\sqrt{17}}$

Now cut the $\eta_0$ of the first cut (8 terms, QR) into two halves again. **How to cut?** Continue with the numbers of §2: QR are the even numbers $\{0,2,4,\dots,14\}$; group them again by "number $\bmod 4$" - those with number $\equiv 0\pmod 4$ in one group, those with $\equiv 2\pmod 4$ in the other. That is, cut using the subgroup $\langle\sigma^4\rangle$ (number $+4$):

$$
\theta_0=\sum_{m\equiv 0\,(4)}\zeta_{17}^{\,g^m}=\zeta_{17}^{1}+\zeta_{17}^{13}+\zeta_{17}^{16}+\zeta_{17}^{4},\qquad \theta_1=\sum_{m\equiv 2\,(4)}\zeta_{17}^{\,g^m}=\zeta_{17}^{9}+\zeta_{17}^{15}+\zeta_{17}^{8}+\zeta_{17}^{2}.
$$

Here the exponent set of $\theta_0$ is $\{1,4,13,16\}$ ($g$-numbers $0,4,8,12$), and the exponent set of $\theta_1$ is $\{2,8,9,15\}$ ($g$-numbers $2,6,10,14$). Each is a **sum of 4 terms**.

**Sum**: the two groups together are exactly all 8 terms of $\eta_0$, so

$$
\theta_0+\theta_1=\eta_0. \tag{1}
$$

**Product**: this is the main point. Expanding $\theta_0\theta_1$ gives $4\times 4=16$ product terms $\zeta_{17}^{a+b}$ ($a\in\{1,4,13,16\},\ b\in\{2,8,9,15\}$). As in §3, classify them by the exponent $c:=(a+b)\bmod 17$, and write $N(c)$ for the number of pairs giving that $c$. Direct enumeration (see the verification block below) gives

$$
N(0)=0,\qquad N(c)=1\ \ \text{for each}\ c\in\{1,\dots,16\}.
$$

So

$$
\theta_0\theta_1=\sum_{c=1}^{16}N(c)\,\zeta_{17}^{c}=\sum_{c=1}^{16}\zeta_{17}^{c}=-1. \tag{2}
$$

> **Why is $N(0)=0$? - here the reason of §3 cannot simply be copied (Socrates §4 finding).** §3 used "$-1$ is a quadratic residue" to rule out $c=0$, because there $a\in\mathrm{QR}$ and $b\in\mathrm{NQR}$, and for $b\equiv -a$ to hold, $-a$ would have to jump to the other class. But **now $\theta_0,\theta_1$ both belong to QR**, and "$-1\in\mathrm{QR}$" instead shows that $-a$ is still in QR, so it does not stop anything at all. The correct reason is **
>
> structural, looking at the numbers**:
>
> $-1=g^{8}$ (since $g^8\equiv 16\equiv -1\pmod{17}$, see §2.4). So "negation" $a\mapsto -a$ is exactly taking the $g$-number
>
> **$+8\pmod{16}$**
>
> . And the number set of $\theta_0$, $\{0,4,8,12\}$, under $+8$ becomes $\{8,12,0,4\}$ -
>
> **still itself**
>
> (likewise for $\theta_1$'s $\{2,6,10,14\}$); that is to say
>
> $$
> a\in\theta_0\ \Longrightarrow\ -a\in\theta_0,\qquad a\in\theta_1\ \Longrightarrow\ -a\in\theta_1.
> $$
>
> So "$b\equiv -a$ with $a\in\theta_0,b\in\theta_1$" cannot hold ($-a$ always stays on the $\theta_0$ side and cannot cross over to $\theta_1$), and therefore $c=0$ has no legitimate pair ($N(0)=0$).
>
> **The grounds are that the number sets are closed under $+8$, not the residuosity of $-1$.**

By (1), (2) and Vieta's theorem, $\theta_0,\theta_1$ are the two roots of

$$
x^2-(\theta_0+\theta_1)x+\theta_0\theta_1=x^2-\eta_0\,x-1=0
$$

The discriminant is $\eta_0^2+4$, so

$$
\boxed{\ \theta_{0,1}=\frac{\eta_0\pm\sqrt{\eta_0^2+4}}{2}.\ }
$$

Substitute the $\eta_0=\dfrac{-1+\sqrt{17}}{2}$ of the first cut (§3) into the discriminant and simplify:

$$
\eta_0^2+4=\Bigl(\tfrac{-1+\sqrt{17}}{2}\Bigr)^2+4=\frac{1-2\sqrt{17}+17}{4}+4=\frac{34-2\sqrt{17}}{4},
$$

so

$$
\boxed{\ \sqrt{\eta_0^2+4}=\frac{\sqrt{34-2\sqrt{17}}}{2}.\ }
$$

**The second radical, $\sqrt{34-2\sqrt{17}}$, is born here** (the radicand $34-2\sqrt{17}\approx 25.75>0$ is real, and constructible). Take the larger root

$$
\theta_0=\frac{\eta_0}{2}+\frac{\sqrt{34-2\sqrt{17}}}{4}\approx 2.0495,\qquad \theta_1=\frac{\eta_0}{2}-\frac{\sqrt{34-2\sqrt{17}}}{4}\approx -0.4879.
$$

It generates the second layer of the tower of fields, $K_2=\mathbb{Q}(\theta_0)$, $[K_2:K_1]=2$.

> **Parallel branch (kept in reserve for §5)**
>
> : if one starts from the other half of the first cut, $\eta_1=\dfrac{-1-\sqrt{17}}{2}$, and likewise cuts it into two halves, the discriminant becomes $\eta_1^2+4=\dfrac{34+2\sqrt{17}}{4}$, forcing out the
>
> **twin radical**
>
> $\sqrt{34+2\sqrt{17}}$. The two radicals $\sqrt{34\mp 2\sqrt{17}}$ enter together into the final closed form of $\cos\frac{2\pi}{17}$ (§5).

### 4.6 The tower of fields and worked examples: four layers of quadratic extensions, $\cos\frac{2\pi}{17}$ lands on the third layer

![The tower of four quadratic extensions $16\to2\!\times\!8\to2\!\times\!4\to2\!\times\!2\to1$, each layer forcing out a radical; $\cos\frac{2\pi}{17}$ lands on the third layer. — Abel (Manim)](/content/images/2026/05/fig_s4_6_field_tower.png)

*The tower of four quadratic extensions $16\to2\!\times\!8\to2\!\times\!4\to2\!\times\!2\to1$, each layer forcing out a radical; $\cos\frac{2\pi}{17}$ lands on the third layer. — Abel (Manim)*

String the four cuts together, and you have a tower of extensions with **four layers, each quadratic**:

$$
\mathbb{Q}=K_0\ \underset{\sqrt{17}}{\subset}\ K_1=\mathbb{Q}(\sqrt{17})\ \underset{\sqrt{34-2\sqrt{17}}}{\subset}\ K_2=\mathbb{Q}(\theta_0)\ \underset{\text{third cut}}{\subset}\ K_3\ \underset{\text{fourth cut}}{\subset}\ K_4=\mathbb{Q}(\zeta_{17}),
$$

each layer of degree $[K_{i+1}:K_i]=2$, total degree $2^4=16=[\mathbb{Q}(\zeta_{17}):\mathbb{Q}]$, fitting §2.5 seamlessly. Among them

$$
[K_3:\mathbb{Q}]=2^3=8=\frac{\varphi(17)}{2},\qquad [K_4:\mathbb{Q}]=2^4=16=\varphi(17).
$$

$K_3=\mathbb{Q}(\zeta_{17})\cap\mathbb{R}=\mathbb{Q}\bigl(\cos\tfrac{2\pi}{17}\bigr)$ is the **maximal real subfield** of $\mathbb{Q}(\zeta_{17})$ (the half fixed by complex conjugation, the fixed field of $\sigma_{-1}=\sigma_{16}$). **The key fact**:

$$
\boxed{\ \cos\tfrac{2\pi}{17}\in K_3\ \text{-- it needs only the first three radicals; only the fourth cut brings back the complex}\ \zeta_{17}\ \text{itself}.\ }
$$

Because $\cos\frac{2\pi}{17}=\frac12(\zeta_{17}+\zeta_{17}^{-1})$ is real, it lies in the real subfield $K_3$; constructing the regular 17-gon with straightedge and compass requires only constructing this real coordinate (§1), so **three layers of root-taking are enough**, and the layer $K_4$ (putting real part + imaginary part back together into the complete $\zeta_{17}$) is not necessary for the construction. This is the structural reason why §5 gives a closed form of $\cos\frac{2\pi}{17}$ with three layers of nested radicals.

> **Example 4.1 (working out the composition of symmetries).**
>
> $\sigma=\sigma_3$, $\sigma^2=\sigma_{9}$ ($3^2=9$), $\sigma^4=\sigma_{13}$ ($3^4=81\equiv 13$), $\sigma^8=\sigma_{16}=\sigma_{-1}$ (complex conjugation!). So the subgroup of the "third cut", $\langle\sigma^4\rangle$, has order $16/4=4$, and $\langle\sigma^8\rangle=\{\mathrm{id},\sigma_{-1}\}$ has order 2 - the latter is exactly the 2-element subgroup that fixes $K_3$, and its fixed field is exactly the real subfield $K_3$.
>
> **Example 4.2 ($\sigma$ moves $\eta_0$ to $\eta_1$).**
>
> $\sigma$ multiplies exponents by $\times 3$: $\mathrm{QR}=\{1,2,4,8,9,13,15,16\}\xrightarrow{\times 3}\{3,6,12,7,10,5,11,14\}=\mathrm{NQR}$. Hence $\sigma(\eta_0)=\eta_1$, confirming the exhibit of 4.4: $\eta_0$ is irrational, of degree exactly 2.
>
> **Example 4.3 (numerical check of the second cut).**
>
> $\theta_0\approx 2.0495$, $\theta_1\approx -0.4879$; $\theta_0+\theta_1\approx 1.5616=\eta_0$ ✓, $\theta_0\theta_1\approx -1.0000$ ✓; $\sqrt{34-2\sqrt{17}}\approx 5.0748$, $/2\approx 2.5374=\sqrt{\eta_0^2+4}$ ✓.

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

### 4.7 Modern significance

§4 raised a seemingly classical picture - "rearranging the roots of unity without the rational numbers noticing" - into a group, and this is exactly the origin of **Galois theory**. Its modern echoes reach far beyond construction:

- **The Galois correspondence** (subgroup $\leftrightarrow$ intermediate subfield) is the heart of the whole theory. The chain of subgroups in this section, $\mathrm{Gal}\supset\langle\sigma^2\rangle\supset\langle\sigma^4\rangle\supset\langle\sigma^8\rangle\supset\{\mathrm{id}\}$, corresponds one to one with the tower of fields $\mathbb{Q}\subset K_1\subset K_2\subset K_3\subset K_4$ - "the substructure of the group" and "the substructure of the field" are mirror images of each other. The 17-gon is constructible essentially because this group is a **2-group (of order $2^4$)**, and each layer can be climbed with one square root.
- The same framework explains **why general equations of degree five and higher have no solution by radicals** (Abel–Ruffini and Galois): the Galois group of the general quintic is $S_5$, which **is not a solvable group** (it has no such chain of normal subgroups "of degree 2/prime degree layer by layer"), so however radicals are nested, they cannot reach the roots - a perfect contrast with the 17-gon "being able to climb up". Niels Henrik Abel, who lent the name Abel to this agent, was exactly one of the first to prove this impossibility ([MacTutor: Abel](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/); for Évariste Galois's idea of the symmetry group see [MacTutor: Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/)).
- This language of "symmetry group + chain of subgroups" is active today in places far beyond the theory of equations: **coding theory** (the root sets of cyclic codes correspond to cyclotomic cosets), **cryptography** (for the finite field $\mathrm{GF}(2^n)$, the Frobenius automorphism $x\mapsto x^2$ is precisely a generator of a Galois group), and even the **Langlands program** of modern number theory (connecting representations of Galois groups with automorphic forms). The 16 root-swapping symmetries that Gauss played with in 1796 in order to draw the 17-gon are one of the sources of this main line (Disquisitiones Arithmeticae §343–366 systematically records the cyclotomic periods and this structure of symmetries).

— *End of §4.*

---

## §5 — Drawing in the net: the explicit closed form of $\cos\dfrac{2\pi}{17}$ and where the innermost radical comes from

§3 made the first cut ($16$ roots $\to$ two groups of $8$ each, forcing out $\sqrt{17}$), and §4 made the second and third cuts ($8\to 4\to 2$, forcing out the layer $\sqrt{34-2\sqrt{17}}$). This section makes **the last cut**: solve one more quadratic equation for the "two-term periods", each group of which has only $2$ terms left, and $\cos\dfrac{2\pi}{17}$ is written completely as a string of nested radicals.

More important is to answer a question about the v0 draft that Socrates caught: the radicand written in the **innermost layer**, the most frightening-looking one,

$$
D\;:=\;17+3\sqrt{17}-\sqrt{34-2\sqrt{17}}-2\sqrt{34+2\sqrt{17}}
$$

(here we give the innermost radicand a name, $D$ - below we will prove that it is exactly $4$ times the discriminant of the quadratic equation of the last cut.)

**Where exactly does it come from?** v0 only said "obtained by simplification" and reported a numerical value. This section gives its real identity: **it is exactly $4$ times the discriminant of the quadratic equation of the last cut** - and we will **derive this equality symbolically from the beginning** (not write out $D$ first and then go back to check the numbers). $\cos\dfrac{2\pi}{17}$ is "constructible" precisely because each of these four cuts only solves a quadratic equation and takes one square root - it never needs a cube root.

### Additional notation for this section

| Notation | Reading / meaning |
| --- | --- |
| $\zeta_{17}$ | $=e^{2\pi i/17}$, the primitive $17$-th root of unity on the unit circle of the complex plane ($\zeta_{17}^{17}=1$) |
| $\alpha$ | $=2\cos\dfrac{2\pi}{17}=\zeta_{17}^{1}+\zeta_{17}^{16}$, the target we are finally after (divide by $2$ to get the $\cos$) |
| $\alpha'$ | $=2\cos\dfrac{8\pi}{17}=\zeta_{17}^{4}+\zeta_{17}^{13}$, the partner that, with $\alpha$, **lives in the same $\theta$-group** |
| $\theta_0$ | the second-level period of §4 ($4$ terms), $\theta_0=\zeta_{17}^{1}+\zeta_{17}^{4}+\zeta_{17}^{13}+\zeta_{17}^{16}=\alpha+\alpha'$ |
| $\theta'$ | the $4$-term period $\zeta_{17}^{3}+\zeta_{17}^{5}+\zeta_{17}^{12}+\zeta_{17}^{14}$ (index set $\{3,5,12,14\}$), which will appear as $\alpha\alpha'$ |
| $A,\;B$ | abbreviations $A:=\sqrt{34-2\sqrt{17}}$ (the radical of the second cut, §4), $B:=\sqrt{34+2\sqrt{17}}$ (the radical of the $\eta_1$ branch) |
| $K_1\subset K_2\subset K_3$ | the first three layers of the tower of fields: $K_1=\mathbb{Q}(\sqrt{17})$, $K_2=\mathbb{Q}(\theta_0)$, $K_3=\mathbb{Q}\!\left(\cos\tfrac{2\pi}{17}\right)$ (degree $8=2^3$, $=\mathbb{Q}(\zeta_{17})\cap\mathbb{R}$) |
| $D$ | the innermost radicand (notation): $D:=17+3\sqrt{17}-A-2B=4(\theta_0^{2}-4\theta')\approx 11.295$ |

### 5.1 Intuition: cutting the "four-cut cake" all the way through

Recall the picture of §3: the $16$ roots of unity are like $16$ candles stuck into a cake. Gauss does not try to solve that degree-$16$ equation head-on, but **cuts it in half repeatedly**, and each cut needs only the solution of one quadratic equation:

$$
\underbrace{16\text{ roots}}_{\zeta_{17}}\;\xrightarrow[\text{first cut}]{\sqrt{17}}\;\underbrace{8+8}_{\eta_0,\eta_1}\;\xrightarrow[\text{second cut}]{\sqrt{34\mp 2\sqrt{17}}}\;\underbrace{4\times 4}_{\theta\text{-s}}\;\xrightarrow[\text{third cut}]{}\;\underbrace{2\times 8}_{\alpha\text{-s}} .
$$

By the third cut, each "group" has only a sum of $2$ terms left - for example $\alpha=\zeta_{17}^{1}+\zeta_{17}^{16}$ (this is exactly $2\cos\dfrac{2\pi}{17}$, because $\zeta_{17}^{16}=\overline{\zeta_{17}^{1}}$, and adding conjugates gives twice the real part). **The last cut is exactly separating $\alpha$ and its partner $\alpha'$**, and the radical that comes out of the discriminant of the quadratic equation the two of them satisfy is exactly that lump in the innermost layer of the closed form.

Remember the conclusion first, in one sentence: **the innermost radical $=$ the source of the discriminant of the quadratic equation of the last cut**. It is not a "result of simplification" dropped from the sky, but the necessary product of "separating $\alpha$ and $\alpha'$".

### 5.2 The target and its partner: $\alpha$ and $\alpha'$ live in the same group

What we really want is

$$
\alpha:=2\cos\frac{2\pi}{17}=\zeta_{17}^{1}+\zeta_{17}^{16}.
$$

§4 has already cut the $8$-term $\eta_0$ into two $4$-term periods, one of which is

$$
\theta_0=\zeta_{17}^{1}+\zeta_{17}^{4}+\zeta_{17}^{13}+\zeta_{17}^{16}\qquad(\text{index set }\{1,4,13,16\}).
$$

Pair the four terms of $\theta_0$ **two by two into conjugates** ($\zeta^{1}$ with $\zeta^{16}=\zeta^{-1}$, $\zeta^{4}$ with $\zeta^{13}=\zeta^{-4}$), and you get two "two-term periods":

$$
\alpha=\zeta_{17}^{1}+\zeta_{17}^{16}=2\cos\frac{2\pi}{17},\qquad \alpha'=\zeta_{17}^{4}+\zeta_{17}^{13}=2\cos\frac{8\pi}{17}.
$$

Clearly

$$
\boxed{\alpha+\alpha'=\theta_0.}\tag{1}
$$

This is the "sum" of the last cut. $\theta_0$ was already written in §4 as a closed form containing only the first two layers of radicals (quoted as (5) below), so the right-hand side of (1) is **a known number belonging to $K_2$**. All that is missing is their "product".

### 5.3 The key step: the product $\alpha\alpha'$ is a $K_2$-period $\theta'$

Multiply the two two-term sums, expand into $2\times 2=4$ terms, and add the exponents modulo $17$:

$$
\alpha\,\alpha'=(\zeta^{1}+\zeta^{16})(\zeta^{4}+\zeta^{13}) =\zeta^{1+4}+\zeta^{1+13}+\zeta^{16+4}+\zeta^{16+13} =\zeta^{5}+\zeta^{14}+\zeta^{20}+\zeta^{29}.
$$

Use $\zeta^{17}=1$ to reduce the exponents to $0\!-\!16$: $\zeta^{20}=\zeta^{3}$, $\zeta^{29}=\zeta^{12}$. So

$$
\boxed{\alpha\,\alpha'=\zeta^{3}+\zeta^{5}+\zeta^{12}+\zeta^{14}=:\theta'.}\tag{2}
$$

These four indices $\{3,5,12,14\}$ **happen to make up another $4$-term period** (they are all non-residues in the sense of §3, belonging to a small group cut out of the $\eta_1$ branch). This is exactly the miracle of Gauss's method "closing on itself": multiplying two two-term periods gives not a tangled mess, but **another Gauss period** - a number that lives in $K_2$ and can be expressed with the first two layers of radicals.

Its closed form in $K_2$ is given by a derivation of exactly the same type as in §4 (only falling on the $\eta_1$ branch): $\theta'$ and its partner on the same branch, $\theta''=\zeta^{6}+\zeta^{7}+\zeta^{10}+\zeta^{11}$, satisfy $\theta'+\theta''=\eta_1=\dfrac{-1-\sqrt{17}}{2}$ and $\theta'\theta''=-1$, that is, the quadratic equation $x^2-\eta_1 x-1=0$. Its discriminant is $\eta_1^2+4=\dfrac{34+2\sqrt{17}}{4}$, so $\sqrt{\eta_1^2+4}=\dfrac{B}{2}$; taking the larger root gives

$$
\boxed{\theta'=\frac{\eta_1+\sqrt{\eta_1^2+4}}{2}=\frac{-1-\sqrt{17}+\sqrt{34+2\sqrt{17}}}{4}=\frac{-1-\sqrt{17}+B}{4}}\approx 0.344151.\tag{3}
$$

Note that $B=\sqrt{34+2\sqrt{17}}$ appears in (3) - this is exactly the radical given by the $\eta_1$ branch in §4. **Remember this**: the reason $\sqrt{34+2\sqrt{17}}$ pops up in the innermost layer of the closed form has its root right here - $\alpha\alpha'$ is a period of the $\eta_1$ branch.

### 5.4 The last cut: solving for $\alpha$, and deriving the innermost radical **symbolically**

![The explicit closed form of $16\cos\frac{2\pi}{17}$ emerging layer by layer; the four nested radicals correspond to the "four cuts". — Animation: Abel (Manim)](/content/images/2026/05/fig_s5_4_cos_closed_form.gif)

*The explicit closed form of $16\cos\frac{2\pi}{17}$ emerging layer by layer; the four nested radicals correspond to the "four cuts". — Animation: Abel (Manim)*

By (1) and (2), $\alpha$ and $\alpha'$ are the two roots of the same quadratic equation

$$
x^2-\theta_0\,x+\theta'=0 \tag{$\star$}
$$

(Vieta's theorem: the sum is $\theta_0$, the product is $\theta'$). Take the larger root ($\alpha=2\cos\dfrac{2\pi}{17}\approx 1.865>\alpha'\approx 0.185$):

$$
\alpha=\frac{\theta_0+\sqrt{\theta_0^{2}-4\theta'}}{2}. \tag{4}
$$

**Now do the symbolic derivation that P1-C requires** - compute the discriminant of $(\star)$, $\theta_0^{2}-4\theta'$, step by step into explicit radicals, and watch it **grow by itself** into that lump in the innermost layer (we do not copy $D$ in advance, but let it "fall out" of the computation). Substitute the closed form of $\theta_0$ from §4

$$
\theta_0=\frac{-1+\sqrt{17}+A}{4},\qquad A=\sqrt{34-2\sqrt{17}}\ \ (A^2=34-2\sqrt{17}), \tag{5}
$$

First compute $\theta_0^{2}$. Expand the square of the numerator, $(-1+\sqrt{17}+A)^2=1+17+A^2-2\sqrt{17}+2A(\sqrt{17}-1)$, and then use $A^2=34-2\sqrt{17}$:

$$
16\,\theta_0^{2}=\bigl(18-2\sqrt{17}\bigr)+\bigl(34-2\sqrt{17}\bigr)+2A(\sqrt{17}-1) =52-4\sqrt{17}+2\sqrt{17}\,A-2A,
$$

Divide both sides by $4$:

$$
4\,\theta_0^{2}=13-\sqrt{17}+\frac{\sqrt{17}\,A}{2}-\frac{A}{2}. \tag{6a}
$$

On the other side, from (3) we have $4\theta'=-1-\sqrt{17}+B$. So $4$ times the discriminant is

$$
4\bigl(\theta_0^{2}-4\theta'\bigr)=4\theta_0^{2}-4\,(4\theta') =\Bigl(13-\sqrt{17}+\tfrac{\sqrt{17}\,A}{2}-\tfrac{A}{2}\Bigr)-4\bigl(-1-\sqrt{17}+B\bigr),
$$

Combine the constant and $\sqrt{17}$ terms ($13+4=17$, $-\sqrt{17}+4\sqrt{17}=3\sqrt{17}$):

$$
4\bigl(\theta_0^{2}-4\theta'\bigr)=17+3\sqrt{17}+\frac{\sqrt{17}\,A}{2}-\frac{A}{2}-4B. \tag{6b}
$$

At this point we have **not yet reached** $D$: (6b) contains an annoying mixed term $\dfrac{\sqrt{17}\,A}{2}$ (that is, $\sqrt{17}\cdot\sqrt{34-2\sqrt{17}}$, a doubly nested radical), which on the surface cannot be eliminated. **The real key lies in this step** - it rests on an explicit radical identity that "welds" the $A$ branch and the $B$ branch together:

$$
\boxed{\;(\sqrt{17}+1)\,A=4B,\qquad\text{i.e.}\quad (\sqrt{17}+1)\sqrt{34-2\sqrt{17}}=4\sqrt{34+2\sqrt{17}}.\;}\tag{$\dagger$}
$$

*Proof of $(\dagger)$.* Both sides are positive, so it suffices to compare squares. The square of the left-hand side is

$$
(\sqrt{17}+1)^2(34-2\sqrt{17})=(18+2\sqrt{17})(34-2\sqrt{17})=612-36\sqrt{17}+68\sqrt{17}-4\cdot17=544+32\sqrt{17},
$$

and the square of the right-hand side is $16(34+2\sqrt{17})=544+32\sqrt{17}$; the two are equal, so $(\dagger)$ holds. **(QED)**

From $(\dagger)$, solve $\dfrac{\sqrt{17}\,A}{2}=\dfrac{(4B-A)}{2}=2B-\dfrac{A}{2}$ (substituting $\sqrt{17}\,A=4B-A$), and substitute back into the mixed term in (6b):

$$
\frac{\sqrt{17}\,A}{2}-\frac{A}{2}-4B=\Bigl(2B-\frac{A}{2}\Bigr)-\frac{A}{2}-4B=-A-2B.
$$

So (6b) **collapses cleanly** into

$$
\boxed{\begin{aligned}4\bigl(\theta_0^{2}-4\theta'\bigr)&=17+3\sqrt{17}-\sqrt{34-2\sqrt{17}}-2\sqrt{34+2\sqrt{17}}\\&=D.\end{aligned}}\tag{6}
$$

(6) is the answer, and it was **derived symbolically all the way**: the mixed term $\sqrt{17}\,A$ was neither ignored nor "matched numerically by luck", but was rewritten exactly by the identity $(\dagger)$ as a combination of $A$ and $B$ and then cancelled naturally. Conclusion: **the innermost radicand $D$ was not cobbled together - it is exactly the discriminant of the quadratic equation that "separates $\alpha,\alpha'$", $(\star)$, namely $(\theta_0^2-4\theta')$, multiplied by $4$.** So

$$
\sqrt{D}=2\sqrt{\theta_0^{2}-4\theta'},
$$

Substitute back into (4), use $16\cos\dfrac{2\pi}{17}=8\alpha=4\theta_0+4\sqrt{\theta_0^{2}-4\theta'}$, and substitute $4\theta_0=-1+\sqrt{17}+A$ from (5) and $4\sqrt{\theta_0^2-4\theta'}=2\sqrt{D}$:

$$
\boxed{\begin{aligned}16\cos\frac{2\pi}{17}=\ &-1+\sqrt{17}+\sqrt{34-2\sqrt{17}}\\&+2\sqrt{17+3\sqrt{17}-\sqrt{34-2\sqrt{17}}-2\sqrt{34+2\sqrt{17}}}\,.\end{aligned}}\tag{7}
$$

This is exactly the Gauss-style explicit closed form. The four nested levels correspond one to one to the four cuts: $\sqrt{17}$ (first cut, §3), $\sqrt{34-2\sqrt{17}}$ (second cut, §4), and on to that outermost $2\sqrt{D}$ (third and fourth cuts written out together, this section). **Throughout, only square roots appear, with no cube roots or roots of any higher degree** - this is the whole algebraic meaning of "constructible with straightedge and compass".

> **Why this step is the "load-bearing check" that v0 had to fill in**: the v0 draft wrote (6) as "obtained by simplification", silently handing the only really difficult cancellation (the elimination of the mixed term $\sqrt{17}\,A$) over to a numerical check. But if $D$ and the discriminant were only equal by numerical coincidence, the closed form would become a "magic number that happens to match", and readers could not believe it really comes from Gauss's layer-by-layer method. Now (6) is nailed down by $(\dagger)$, a
>
> **radical identity that can be verified by hand**
>
> : the identity of $D$ is the discriminant of $(\star)$ $\times 4$, with no second interpretation, and no step hidden in code.

### 5.5 P2: why "each cut raises only one square root" - the degree of the intersection of two circles

All four cuts above are quadratic equations, and behind this is a hard constraint of straightedge-and-compass construction, which is left to be used formally in Wantzel's degree criterion in §7; here we first point out its geometric root. Each straightedge-and-compass step is nothing more than "line meets line / line meets circle / circle meets circle". The first two clearly solve at most a quadratic equation. **The intersection of two circles** seems to require solving a quartic, but in fact does not. Let

$$
x^{2}+y^{2}+D_1x+E_1y+F_1=0,\qquad x^{2}+y^{2}+D_2x+E_2y+F_2=0,
$$

**Subtract** the two equations, and the quadratic part $x^2+y^2$ is eliminated entirely, leaving only a **line** (called the **radical axis** of the two circles):

$$
(D_1-D_2)x+(E_1-E_2)y+(F_1-F_2)=0.
$$

So "circle $\cap$ circle" degenerates into "circle $\cap$ line", which is still quadratic. **Conclusion: at each intersection point of straightedge and compass, the coordinates add at most one square root to the existing number field** - never introducing a cube root in one step. This is exactly the geometric counterpart of (7) being all square roots, and hence of $\cos\dfrac{2\pi}{17}$ being constructible; conversely, whatever requires a cube root (such as doubling the cube, $\sqrt[3]{2}$, or trisecting $60^\circ$), straightedge and compass are powerless against (proved in detail in §7).

### 5.6 Worked example: numerical values layer by layer, confirming that every radicand is always positive

![Substituting numerical values layer by layer: the innermost layer $\approx 11.295$, and finally $\cos\frac{2\pi}{17}=14.920/16=0.9325$, agreeing with $\cos(21.176^\circ)$. — Abel (Manim)](/content/images/2026/05/fig_s5_6_numerical_9325.png)

*Substituting numerical values layer by layer: the innermost layer $\approx 11.295$, and finally $\cos\frac{2\pi}{17}=14.920/16=0.9325$, agreeing with $\cos(21.176^\circ)$. — Abel (Manim)*

Compute (7) once from the inside out, checking along the way that the number under each layer of radical is $>0$ (otherwise the closed form would fall into the complex numbers, and the construction would be impossible):

| Quantity | Expression | Value |
| --- | --- | --- |
| first layer | $\sqrt{17}$ | $4.12311$ |
| second layer | $A=\sqrt{34-2\sqrt{17}}$ | $5.07482$ |
| auxiliary | $B=\sqrt{34+2\sqrt{17}}$ | $6.49971$ |
| innermost | $D=17+3\sqrt{17}-A-2B$ | $11.29508\;(>0)$ |
| outermost | $2\sqrt{D}$ | $2(3.36082)=6.72163$ |
| total | $16\cos\dfrac{2\pi}{17}=-1+4.12311+5.07482+6.72163$ | $14.91956$ |
| result | $\cos\dfrac{2\pi}{17}=14.91956/16$ | $0.932472$ |

This **agrees completely** with the direct computation $\cos\dfrac{2\pi}{17}=\cos(21.176^\circ)=0.932472$. Note $D\approx 11.30>0$: this is not a coincidence, but is guaranteed by (6) - it equals the discriminant $\times4$, and since $\alpha\neq\alpha'$ are two different real numbers, the discriminant $\theta_0^2-4\theta'>0$ must hold.

> **Example 5.1 (self-check of the partner relation).**
>
> $\alpha\approx 1.8649$, $\alpha'\approx 0.1845$; the sum $\alpha+\alpha'\approx 2.0495=\theta_0$ ✓, the product $\alpha\alpha'\approx 0.3442=\theta'$ ✓. So $\alpha,\alpha'$ are indeed the two roots of $(\star)$.
>
> **Example 5.2 (numerical witness of the welding identity $(\dagger)$).**
>
> $(\sqrt{17}+1)\,A\approx 5.1231\times 5.0748\approx 25.999$; $4B\approx 4\times 6.4997\approx 25.999$ ✓. It is exactly this equality that reduces the mixed term $\sqrt{17}\,A$ of (6b) to a simple combination of $A,B$.
>
> **Example 5.3 (discriminant $=D/4$).**
>
> $\theta_0^2-4\theta'\approx 2.0495^2-4(0.3442)\approx 4.2005-1.3766=2.8238$; multiplying by $4$ gives $11.2951=D$ ✓. This is the numerical witness of (6).

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

### 5.7 Modern significance

This chain of "relaying quadratic equations" - each step solving only a quadratic and taking only one square root - is not just a clever trick for drawing a 17-gon; it is the oldest and most concrete example of the modern main line of **Galois theory, "solvability $=$ solvability of the group"**:

- **The turn in the theory of equations**: precisely because $\mathrm{Gal}(\mathbb{Q}(\zeta_{17})/\mathbb{Q})\cong\mathbb{Z}/16$ has a chain of subgroups $16\to 8\to 4\to 2\to 1$ (index $2$ at each step) can $\cos\dfrac{2\pi}{17}$ be **solved by radicals layer by layer** through quadratic equations. The same language, in the hands of Abel (1824) and Galois (1832), gave **no solution by radicals for the quintic** - the symmetry group $S_5$ of the general quintic has no such chain "halving step by step" (it is not solvable). The 17-gon is the lighthouse on the "solvable" side. (For their lives see the MacTutor entries on [Abel](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/) and [Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/).)
- **Computable decision for nested radicals**: "layer upon layer of nested square roots" like (7) have mature simplification and decision algorithms in today's computer algebra systems (SymPy's `sqrtdenest`/`minimal_polynomial`, Maxima, PARI/GP) - deciding whether an algebraic number can be written as real nested quadratic radicals is equivalent to deciding whether its Galois closure is a $2$-group, which is exactly the algorithmic incarnation of Gauss's 1796 criterion. The welding identity $(\dagger)$ of this section is exactly a miniature example of the most common kind of such simplification, "two layers of radicals opening into each other".
- **From constructibility to cryptography**: the cyclic group $(\mathbb{Z}/17\mathbb{Z})^*$ of §2, the Gauss periods of §3, and the layer-by-layer quadratic tower of this section together make up a complete anatomy of the **cyclotomic field**; and the cyclotomic field is exactly the algebraic stage on which modern **lattice cryptography (such as schemes based on Ring-LWE)** works. The algebra Gauss did for a compass and a straightedge became, two centuries later, the foundation of post-quantum cryptography.

Gauss held this result close to his heart and asked for it to be carved on his tombstone (the regular 17-gon, see [Disquisitiones Arithmeticae](https://gdz.sub.uni-goettingen.de/id/PPN235993352) §365, 1801); Wantzel 1837 ([J. Math. Pures Appl. 2, 366–372](https://eudml.org/doc/234865)) completed "constructible $\iff$ the degree is a power of $2$" into a necessary and sufficient condition; Lindemann 1882 ([Math. Annalen 20](https://eudml.org/doc/157031)) used the transcendence of $\pi$ to close the great door of squaring the circle; Richmond 1893 ([Quarterly J. Pure Appl. Math. 26, 206–207](https://en.wikipedia.org/wiki/Heptadecagon#Construction)) translated the closed form of this section into the compass steps of §6 that one can really hold in one's hand. A complete chain from the radicals of (7) to a regular 17-gon on paper is thereby closed.

— *End of §5.*

---

## §6 — Richmond 1893: twenty steps to draw $\cos\tfrac{2\pi}{17}$ on paper

The previous three sections (§3–§5) have already turned $\cos\tfrac{2\pi}{17}$ into a string of nested square roots. But "can be written with square roots" is still only constructible **algebraically**; to convince people that it really can be drawn **geometrically** with an unmarked straightedge plus a compass, each square root still has to be made real as an actual line, an actual circle, an actual intersection point. In 1893, H. W. Richmond of Cambridge gave a surprisingly concise scheme ([Richmond 1893, *Quarterly Journal of Pure and Applied Mathematics* 26, 206–207](https://en.wikipedia.org/wiki/Heptadecagon#Construction)) - it does not even need to draw explicitly that long string of radicals from §5, but uses two clever angles and one circle to **directly** fix the projections of the vertices $V_3$, $V_5$ on the $x$-axis, and then fills in all 17 vertices.

This section breaks Richmond's original construction into **20 "single-stroke" stages** (honest count: each stage adds exactly one line, one circle or one intersection point, plus the erasing of a few auxiliary lines). **Every step diagram is paired with the geometric/algebraic grounds behind that step** - diagram and derivation are one inseparable unit. Readers starting from zero can get all the way through by looking only at the diagrams and the plain words of each step; for readers who want to be strict, the coordinates given at each step have all been independently verified numerically to $10^{-5}$ (verification script in §6.7).

### Additional notation for this section

| Notation | Meaning |
| --- | --- |
| $O$ | the center of the circle, taken as the coordinate origin $(0,0)$ |
| $A=V_0$ | the intersection $(1,0)$ of the horizontal radius with the circle, by convention the $0$-th vertex |
| $B$ | the intersection $(0,1)$ of the vertical radius with the circle |
| $I$ | the **quarter point** of $OB$, $(0,\tfrac14)$ ($OI=\tfrac14\,OB$) |
| $E,\,F$ | two points on the line of $OA$ fixed by two angles; key: **$F$ is on the negative $x$-half-axis** |
| $K$ | the intersection of the circle with diameter $AF$ with $OB$ |
| $N_3,\,N_5$ | the two intersections of the circle with center $E$ and radius $EK$ with $OA$ (projections of vertices) |
| $V_3,\,V_5$ | the points on the circle where the perpendiculars through $N_3,N_5$ to $OA$ land = the true $3$rd and $5$th vertices |

> **The route in one sentence**: first use angles to fix $E$ at $x\approx 0.0860$ and $F$ at $x\approx -0.1220$; then use a circle to "translate" the information of $E,F$ into the radius $EK$; this radius makes the two points that the circle $(E,EK)$ cuts on the $x$-axis exactly $\cos\tfrac{6\pi}{17}$ and $\cos\tfrac{10\pi}{17}$ - that is, the horizontal coordinates of the vertices $V_3,V_5$. With $V_3$ in hand, the remaining vertices can be stepped off with the compass by equal arcs.

---

### 6.1 Intuition first: why "two angles + one circle" is enough

![The whole process of Richmond's 1893 twenty-step straightedge-and-compass construction (circle, two radii, quarter point, two key angles, translating circle, raising the vertices step by step). — Animation: Abel (Manim)](/content/images/2026/05/fig_s6_richmond_build.gif)

*The whole process of Richmond's 1893 twenty-step straightedge-and-compass construction (circle, two radii, quarter point, two key angles, translating circle, raising the vertices step by step). — Animation: Abel (Manim)*

In the closed form given by §5, $\cos\tfrac{2\pi}{17}$ is four layers of nested radicals. If one insisted on drawing every layer of radical with straightedge and compass (each $\sqrt{\ }$ corresponding to one "intersection of a circle and a line"), the steps would be very long-winded. Richmond's cleverness lies in this: he **does not draw $\cos\tfrac{2\pi}{17}$ itself**, but draws the cosines corresponding to a pair of "second-level Gauss periods" - $\cos\tfrac{6\pi}{17}$ and $\cos\tfrac{10\pi}{17}$.

This pair of numbers has an excellent property (§6.6 will compute it for you): their **sum** and **difference** are both quantities of very simple structure, which can be caught at one stroke by quartering an angle (fixing $E$) and one $45^\circ$ deflection (fixing $F$). So:

- the horizontal coordinate of the point $E$ $=$ the **half-sum** of this pair of cosines;
- the length $EK$ $=$ the **half-difference** of this pair of cosines.

One circle (center $E$, radius $EK$) encodes the "half-sum" and the "half-difference" at the same time, and its two intersections with the $x$-axis, $E_x\pm EK$, are exactly these two cosines. **This is why "two angles + one circle" is enough to fix the vertices** - all the information of the four layers of radicals is compressed by Richmond into the quartering of $\angle OIE$, the $45^\circ$ deflection, and that one circle.

---

### 6.2 Getting started: the circle, two radii, the quarter point $I$ (stages 1–5)

![Stage 1: draw the circle, center O](/content/images/2026/05/richmond_step_01.png)

**Stage 1 (draw the circle, center $O$).** Fix the unit circle and its center $O=(0,0)$. The whole construction is done on this one circle, and the final regular 17-gon is inscribed in it.

![Stage 2: draw the horizontal diameter, fixing the vertex A=V₀](/content/images/2026/05/richmond_step_02.png)

**Stage 2 (draw the horizontal diameter → vertex $A=V_0$).** Through $O$ draw the horizontal diameter, meeting the circle on the right at $A=(1,0)$. By convention $A$ is the $0$-th vertex $V_0$ - the angles of all vertices are counted from here, and the $k$-th vertex is at angle $\tfrac{2\pi k}{17}$.

![Stage 3: draw the vertical radius OB](/content/images/2026/05/richmond_step_03.png)

**Stage 3 (draw the vertical radius $OB$).** Through $O$ draw the radius perpendicular to $OA$, meeting the circle above at $B=(0,1)$. $OB$ will provide the vertical scale used later to fix $I$. A perpendicular only needs "the line joining the intersections of two circles", which is a legitimate straightedge-and-compass operation.

![Stage 4: bisect OB, giving the midpoint M](/content/images/2026/05/richmond_step_04.png)

**Stage 4 (bisect $OB$ → midpoint $M$).** Draw the perpendicular bisector of $OB$, giving the midpoint $M=(0,\tfrac12)$. Bisecting a segment is the most basic straightedge-and-compass operation (draw two circles of equal radius centered at the two endpoints, and join their intersections). This step prepares for bisecting once more in the next step.

![Stage 5: bisect OM, giving the quarter point I](/content/images/2026/05/richmond_step_05.png)

**Stage 5 (bisect $OM$ → quarter point $I$).** Bisect $OM$ once more, giving $I=(0,\tfrac14)$, that is, $OI=\tfrac14\,OB=\tfrac14$. Two bisections give "one quarter" - this is the only specific ratio used in Richmond's construction, and the angles of the next section are all generated from it.

---

### 6.3 Two key angles: fixing $E$ and $F$ (stages 6–9)

This is the "algebraic heart" of the whole construction: using two angles at $I$, catch the half-sum and half-difference information of that pair of cosines at one go.

![Stage 6: join the segment IA](/content/images/2026/05/richmond_step_06.png)

**Stage 6 (join $IA$).** Join $I=(0,\tfrac14)$ and $A=(1,0)$. In the right triangle $OIA$, $\tan\angle OIA=\dfrac{OA}{OI}=\dfrac{1}{1/4}=4$, so

$$
\angle OIA=\arctan 4=75.964^\circ.
$$

This $\arctan 4$ is the "mother angle" of all the later angles.

![Stage 7: quarter the angle OIA, fixing E](/content/images/2026/05/richmond_step_07.png)

**Stage 7 (bisect $\angle OIA$ twice → fix $E$).** **Quarter** $\angle OIA$ (two successive angle bisections, both legitimate straightedge-and-compass operations), and take the part next to $OA$, $\angle OIE=\tfrac14\angle OIA$. The ray $IE$ meets $OA$ at $E$. So

$$
\angle OIE=\tfrac14\arctan 4=18.991^\circ,\qquad E_x=OI\cdot\tan\angle OIE=\tfrac14\tan\!\big(\tfrac14\arctan 4\big)=0.08604.
$$

This $E_x\approx 0.0860$ is exactly the **half-sum** of that pair of cosines mentioned in §6.1 (verified in §6.6).

![Stage 8: at I, turn 45 degrees from IE; F lands on the negative x-half-axis](/content/images/2026/05/richmond_step_08.png)

**Stage 8 (at $I$, from $IE$ turn $45^\circ$ → $F$ lands on the negative $x$-half-axis).** With $I$ as vertex, from the ray $IE$, in the direction opposite to $A$, turn out $45^\circ$ (a $45^\circ$ angle can be constructed with straightedge and compass: first construct a right angle, then bisect it); the ray meets the **line** of $OA$ at $F$. The key detail: $F$ is **not on the side of $A$, but on the other side of $O$ - the negative $x$-half-axis**. Check: the angle on the side of $F$ is then $\angle OIF=45^\circ-\angle OIE=26.009^\circ$, so

$$
OF=OI\cdot\tan\angle OIF=0.12198,\qquad F=(-0.12198,\,0),\qquad \angle EIF=18.991^\circ+26.009^\circ=45.000^\circ\ \checkmark.
$$

> **A step often drawn wrong in history**: early retellings often put $F$ on the side of $A$ (positive $x$). Once the sign is reversed, the later intersection point lands at the wrong horizontal coordinate (rather than the true value $N_3=0.4457$), and all the vertices are wrong.
>
> **$F$ being on the negative half-axis**
>
> is the lifeline of this construction's correctness.

![Stage 9: erase the auxiliary lines of the angles (E, F fixed)](/content/images/2026/05/richmond_step_09.png)

**Stage 9 (erase the auxiliary lines of the angles).** Once $E,F$ are fixed, the three rays $IA$, $IE$, $IF$ have done their job, and are erased to keep the picture clean. Keep the two points $E$, $F$ and $I$.

---

### 6.4 One circle translates $E,F$ into a radius (stages 10–14)

![Stage 10: bisect AF, giving the midpoint](/content/images/2026/05/richmond_step_10.png)

**Stage 10 (bisect $AF$ → midpoint).** Take the midpoint of $A=(1,0)$ and $F=(-0.12198,0)$, $\big(\tfrac{1+(-0.12198)}{2},0\big)=(0.439,0)$. This is the center of the circle of the next step.

![Stage 11: draw the circle with AF as diameter](/content/images/2026/05/richmond_step_11.png)

**Stage 11 (draw the circle with $AF$ as diameter).** With the midpoint of the previous step as center and $\tfrac12|AF|=\tfrac{1+0.12198}{2}=0.561$ as radius, draw a circle. By **Thales's semicircle theorem**, every point $K$ lying on this circle satisfies $\angle AKF=90^\circ$ - this is exactly the geometric device used in the next step to "take a square root".

![Stage 12: mark K = the intersection of circle(AF) with OB](/content/images/2026/05/richmond_step_12.png)

**Stage 12 (mark $K=$ circle$(AF)\cap OB$).** This circle meets the vertical radius $OB$ at $K=(0,K_y)$. Since $\angle AKF=90^\circ$ and $OK\perp AF$, the **projection theorem (geometric mean)** for right triangles gives $OK^2=OA\cdot OF$, that is,

$$
K_y=\sqrt{OA\cdot OF}=\sqrt{1\times 0.12198}=0.34926.
$$

This step uses a circle to draw "the square root of the product of two lengths" - this is the standard method of taking square roots with straightedge and compass.

![Stage 13: draw the circle with center E and radius EK](/content/images/2026/05/richmond_step_13.png)

**Stage 13 (draw the circle with center $E$ and radius $EK$).** Take the distance from $E=(0.08604,0)$ to $K=(0,0.34926)$ as the radius:

$$
EK=\sqrt{E_x^{2}+K_y^{2}}=\sqrt{0.08604^{2}+0.34926^{2}}=0.35970.
$$

With $E$ as center and $EK$ as radius, draw a circle. This radius $EK\approx 0.3597$ is exactly the **half-difference** of that pair of cosines in §6.1 (verified in §6.6).

![Stage 14: mark N₃, N₅ = the intersections of circle(E,EK) with OA](/content/images/2026/05/richmond_step_14.png)

**Stage 14 (mark $N_3,N_5=$ circle$(E,EK)\cap OA$).** The circle $(E,EK)$ meets the horizontal axis $OA$ at two points $E_x\pm EK$:

$$
N_3=E_x+EK=0.08604+0.35970=0.44574,\qquad N_5=E_x-EK=0.08604-0.35970=-0.27366.
$$

The key fact (verified both numerically and symbolically, see §6.6–6.7):

$$
N_3=\cos\tfrac{6\pi}{17}=0.44574,\qquad N_5=\cos\tfrac{10\pi}{17}=-0.27366.
$$

Because $E_x$ is the half-sum of this pair of cosines and $EK$ is the half-difference, "half-sum $\pm$ half-difference" restores exactly the two cosines themselves - **this is the whole secret of how Richmond uses one circle to fix the projections of two vertices at the same time**.

---

### 6.5 Raising the vertices, stepping off the rest (stages 15–20)

![Seventeen equally spaced vertices joined into a complete regular 17-gon; the whole figure rotates once to bring out the symmetry. — Animation: Abel (Manim)](/content/images/2026/05/fig_s6_5_17gon_complete.gif)

*Seventeen equally spaced vertices joined into a complete regular 17-gon; the whole figure rotates once to bring out the symmetry. — Animation: Abel (Manim)*

![Stage 15: erase the auxiliary circles and the used-up labels](/content/images/2026/05/richmond_step_15.png)

**Stage 15 (erase the auxiliary circles and the used-up labels).** With $N_3,N_5$ now fixed on the $x$-axis, the circle $(AF)$, the circle $(E,EK)$ and intermediate elements such as $K,M,B$ leave the stage, and the picture keeps only two vertical lines still to be drawn.

![Stage 16: through N₃ draw the perpendicular to OA, giving V₃ on the circle](/content/images/2026/05/richmond_step_16.png)

**Stage 16 (through $N_3$ draw the perpendicular to $OA$ → $V_3$).** At $N_3=(0.44574,0)$ draw the perpendicular to $OA$, meeting the circle above at

$$
V_3=\big(0.44574,\ \sqrt{1-0.44574^2}\big)=(0.44574,\ 0.89516).
$$

Its polar angle $=\arctan\tfrac{0.89516}{0.44574}=63.529^\circ=3\times\tfrac{360^\circ}{17}$ - exactly the **$3$rd vertex**. Because the polar angle of the point on the unit circle with horizontal coordinate $\cos\theta$ is exactly $\theta$, and $N_3=\cos\tfrac{6\pi}{17}=\cos\big(3\cdot\tfrac{2\pi}{17}\big)$.

![Stage 17: through N₅ draw the perpendicular to OA, giving V₅ on the circle](/content/images/2026/05/richmond_step_17.png)

**Stage 17 (through $N_5$ draw the perpendicular to $OA$ → $V_5$).** Likewise raise a perpendicular at $N_5=(-0.27366,0)$, giving

$$
V_5=(-0.27366,\ 0.96182),\quad \text{polar angle}=105.882^\circ=5\times\tfrac{360^\circ}{17},
$$

that is, the **$5$th vertex** ($N_5=\cos\tfrac{10\pi}{17}=\cos\big(5\cdot\tfrac{2\pi}{17}\big)$). At this point the three true vertices $V_0,V_3,V_5$ are in hand.

![Stage 18: erase the auxiliary lines (V₀, V₃, V₅ fixed)](/content/images/2026/05/richmond_step_18.png)

**Stage 18 (erase the auxiliary lines).** The two perpendiculars and projection elements such as $N_3,N_5,I,E,F$ have done their job and are erased, keeping only the three points $V_0,V_3,V_5$ on the circle.

![Stage 19: step with a fixed-length chord (arc 3), giving all 17 vertices](/content/images/2026/05/richmond_step_19.png)

**Stage 19 (step with a fixed-length chord → all 17 vertices).** Take the chord spanning an arc of $\tfrac{3}{17}$ of a turn, $V_0V_3$, as the "compass opening", and starting from $V_0$ step along the circle continuously, crossing $3$ vertices each time: $V_0\to V_3\to V_6\to\cdots$. Because

$$
\gcd(3,17)=1,
$$

stepping with step length $3$ modulo $17$ **traverses all $17$ vertices with no repeats and no omissions** ($\{3k\bmod 17:k=0,\dots,16\}=\{0,1,\dots,16\}$, verified). So the repeated "pacing" of this one fixed-length chord alone fills in all the vertices - with no need to reconstruct the angles one by one.

![Stage 20: join in order, giving the regular 17-gon](/content/images/2026/05/richmond_step_20.png)

**Stage 20 (join in order → the regular 17-gon).** Join the $17$ vertices into chords in adjacent order, completing the regular 17-gon. **Every stroke throughout is an actual line, an actual circle or an actual intersection point**, strictly satisfying the definition of a straightedge-and-compass construction. This is the discovery of that morning of Gauss in 1796 ([Disquisitiones Arithmeticae §365](https://en.wikipedia.org/wiki/Disquisitiones_Arithmeticae)), made real by Richmond in 1893 as twenty steps that can be drawn by hand.

> **Honest count**: the above is
>
> **20 stages**, not 21. Of these, $3$ are clean-up steps of "erasing auxiliary lines" (stages $9,15,18$), which add no geometric element but are listed separately for the clarity of the picture; the real "construction primitives" (line/circle/intersection) number about $17$. Any retelling that calls it "21 steps" counts one step too many.

---

### 6.6 Worked example: why $E_x$ is the half-sum and $EK$ the half-difference

What this section most deserves to have checked by hand is the core claim of stage 14, "half-sum $\pm$ half-difference restores the cosines". Nail it down with numbers:

> **Example 6.1 (half-sum).**
>
> The sum of this pair of cosines
>
> $$
> \cos\tfrac{6\pi}{17}+\cos\tfrac{10\pi}{17}=0.44574+(-0.27366)=0.17208,
> $$
>
> half of it $=0.08604$, which, with the $E_x=\tfrac14\tan\big(\tfrac14\arctan 4\big)=0.08604$ computed in stage 7,
>
> **agrees**
>
> . That is, $E_x=\tfrac12\big(\cos\tfrac{6\pi}{17}+\cos\tfrac{10\pi}{17}\big)$.
>
> **Example 6.2 (half-difference).**
>
> Half the difference of this pair of cosines
>
> $$
> \tfrac12\big(\cos\tfrac{6\pi}{17}-\cos\tfrac{10\pi}{17}\big)=\tfrac12\big(0.44574-(-0.27366)\big)=0.35970,
> $$
>
> with the $EK=\sqrt{E_x^2+K_y^2}=0.35970$ of stage 13,
>
> **agrees**
>
> . That is, $EK=\tfrac12\big(\cos\tfrac{6\pi}{17}-\cos\tfrac{10\pi}{17}\big)$.
>
> **Example 6.3 (restoring).**
>
> So
>
> $$
> N_3=E_x+EK=\text{half-sum}+\text{half-difference}=\cos\tfrac{6\pi}{17},\qquad N_5=E_x-EK=\text{half-sum}-\text{half-difference}=\cos\tfrac{10\pi}{17}.
> $$
>
> This is exactly the elementary identity of "turning sum and difference into the two numbers": given the sum $S$ and the difference $D$ of two numbers, the two numbers are $\tfrac{S}{2}\pm\tfrac{D}{2}$. Richmond encodes $S$ into the position of $E$ and $D$ into the radius of the circle, and the two intersections of one circle with the $x$-axis are automatically those two numbers.
>
> **Example 6.4 (stepping traversal).**
>
> Step length $3$, modulo $17$: $0,3,6,9,12,15,1,4,7,10,13,16,2,5,8,11,14$ - stepping exactly once on each of $0$ to $16$, and at the $17$th step returning to $0$. Only a step length not coprime to $17$ would get stuck ($17$ is prime, and the only nonzero step lengths not coprime to it are multiples of $17$, that is $0$); for the prime $17$, any $1\le s\le 16$ can traverse everything, and $s=3$ is taken only because $V_3$ is already at hand.

### 6.7 Verification script

The pure Python below (using only the standard library `math`) starts from $I=(0,\tfrac14)$, recomputes each key point following Richmond's twenty steps, and checks the landing points against the true vertices, the half-sum and half-difference, and the stepping traversal - all assertions pass.

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

### 6.8 Modern significance

Richmond's twenty steps look like no more than a small piece of classical geometry, but the ideas it embodies can be seen everywhere today:

- **The paradigm of "compress - decode"**. Richmond did not laboriously draw the fourfold radical of §5 layer by layer, but found a set of **well-structured intermediate quantities** (the cosines of a pair of second-level Gauss periods), used the fewest geometric actions (two angles + one circle) to encode their "sum" and "difference" at one go, and then used one circle to decode two vertices at the same time. This way of thinking, "project a complicated object onto a good basis and restore it in bulk with algebraic identities", is exactly the spirit of modern **signal processing and the fast Fourier transform (FFT)** - splitting an $N$-point DFT recursively by odd/even or coprime factors, with only one butterfly merge at each layer. The fast summation algorithm Gauss himself wrote down while studying cyclotomy and trigonometric interpolation is generally recognized as the historical forerunner of the FFT (Heideman–Johnson–Burrus 1984).
- **Coprime stepping = a generator of a cyclic group**. Stage 19's "$\gcd(3,17)=1$, so step length $3$ traverses all vertices" is the additive version of the same thing as §2's "$g=3$ is a generator of $(\mathbb{Z}/17\mathbb{Z})^*$, and self-multiplication walks through the whole": in the additive cyclic group $\mathbb{Z}/17\mathbb{Z}$, the element $s$ generates the whole group if and only if $\gcd(s,17)=1$. Today **error-correcting codes (such as Reed–Solomon)** and **cyclic shift registers in cryptography** both rely on "a coprime step length traversing the whole" to guarantee coverage and diffusion.
- **Drawable by hand = verifiable**. Richmond insisted that every step be an actual line, an actual circle, an actual intersection point, so that this construction can be reproduced independently by anyone with straightedge and compass, and checked independently with coordinates (as in §6.7). This standard of "a completely transparent process, and a result that can be independently recomputed" is exactly the goal pursued by modern **formalized mathematical proof** (Coq / Lean): every step reduced to an atomic operation that can be checked mechanically.

A twenty-step procedure used in 1893 to draw a 17-gon packages three mathematical tastes that continue to this day: compression and decoding, traversal of cyclic groups, and verifiable construction.

— *End of §6.*

---

## §7 — Necessity: why most figures cannot be drawn (Wantzel 1837 + Lindemann 1882)

The previous six sections have all been doing the **positive** thing: how Gauss cut $\zeta_{17}$, cut by cut, down to ground that straightedge and compass can reach. But "$17$ can be drawn" is only half of the story. What is really astonishing is its **reverse side** - the vast majority of things you would like to draw **can never be drawn**. The regular heptagon cannot be drawn, doubling the cube cannot be drawn, trisecting an ordinary angle cannot be drawn, and turning a circle into a square of equal area cannot be drawn either. This section gives the key that closes these great doors: a **degree criterion**. Pierre Wantzel proved it on one page in [1837](https://eudml.org/doc/234865), cleanly killing two of these ancient Greek problems of more than two thousand years; the remaining "squaring the circle" had to wait until [Lindemann 1882](https://eudml.org/doc/157031) proved $\pi$ transcendental to be finally sealed off.

This section also answers the question that runs through the whole article: **why is it exactly $17$ that survives?** The answer will fall out naturally - because $[\mathbb{Q}(\cos\tfrac{2\pi}{17}):\mathbb{Q}]=8=2^3$ is exactly a power of $2$, and its arithmetic root is exactly that $17=F_2$ is a Fermat prime (§1).

### Additional notation for this section

| Notation | Reading / meaning |
| --- | --- |
| constructible number | a real number (coordinate) that can be fixed, starting from the unit length, by **finitely many** straightedge-and-compass steps |
| $[\mathbb{Q}(x):\mathbb{Q}]$ | the **degree** of the number $x$ over $\mathbb{Q}$: the degree of the lowest-degree equation with rational coefficients that it satisfies |
| $2^t$ | a power of $2$ ($1,2,4,8,16,\dots$); the "pass" that Wantzel's criterion requires |
| $\sqrt[3]{2}$ | the cube root of $2$, the side length that the problem of doubling the cube requires constructing |
| algebraic number / transcendental number | a number satisfying some equation with rational coefficients / a number satisfying **no** such equation (such as $\pi$) |
| Eisenstein criterion | a sufficient condition that uses a prime $p$ to decide at a glance that a polynomial is **irreducible** |

### 7.1 Intuition: each move of straightedge and compass only "takes one square root"

Leave formulas aside for now, and think about what straightedge and compass can actually do. You have only two tools in hand:

- **the straightedge** - draws a straight line through two known points;
- **the compass** - draws a circle with a known point as center and the distance between two known points as radius.

Where do new points come from? There are only three kinds of intersection: **line meets line**, **line meets circle**, **circle meets circle**. Translate them into coordinate equations: a line is a linear equation, a circle is a quadratic equation.

- Two lines meeting: solving two linear equations, the new coordinates obtained are **rational operations** (addition, subtraction, multiplication, division) on the known coordinates, introducing no radical at all.
- Line meeting circle: substituting the line into the circle gives a **quadratic** equation, and the new coordinates take at most **one more square root**.
- Two circles meeting: subtracting the equations of the two circles, the square terms $x^2+y^2$ cancel exactly, leaving a **line** (called the **radical axis** of the two circles). So "circle meets circle" degenerates into "line meets circle", and likewise takes at most **one square root**.

In one sentence: **each stroke of straightedge and compass adds at most one more layer of square roots to the coordinates.** All the numbers you can construct are nothing more than what is piled up, starting from the rational numbers, by repeatedly taking square roots and doing rational operations. This is the entire intuitive source of the criterion that follows - **constructible = a string of square roots stacked up**.

### 7.2 Formalization: the degree of a constructible number must be a power of $2$ (Wantzel's degree criterion)

Put the intuition of 7.1 into the language of fields. A **field** is a set of numbers closed under addition, subtraction, multiplication and division (such as $\mathbb{Q}$, $\mathbb{R}$). "Taking one square root over the known quantities" corresponds to enlarging the current field $F$ into $F(\sqrt{d})$ ($d\in F$) - this is called one **quadratic extension**; its "dimension" (as a vector space over $F$) is $2$, written $[F(\sqrt d):F]=2$.

> **Notation reminder**: the tower below uses the letters $F_i$; it is a "general-purpose scaffold" put up temporarily for
>
> **any one**
>
> constructible number $x$, and it is a different thing from the tower $K_0\subset K_1\subset\cdots\subset K_4$ belonging specifically to the regular 17-gon in §3–§5 ($K_3=\mathbb{Q}(\cos\tfrac{2\pi}{17})$, $K_4=\mathbb{Q}(\zeta_{17})$); do not mix them up.

So "each step takes at most one square root" from 7.1, translated, is: every constructible number $x$ lies at the top of a **tower of quadratic extensions**

$$
\mathbb{Q}=F_0\subset F_1\subset F_2\subset\cdots\subset F_m,\qquad [F_{i+1}:F_i]=2,\qquad x\in F_m.
$$

(The purely rational steps that introduce no new radical can be merged, so we may assume every layer is a genuine quadratic extension.) Next, use a basic fact that is like a "multiplication table" - the **tower multiplication formula** (degree multiplicativity): if $\mathbb{Q}\subset L\subset M$, then

$$
[M:\mathbb{Q}]=[M:L]\cdot[L:\mathbb{Q}].
$$

(Intuitively: the "size of the basis" of $M$ over $\mathbb{Q}$ equals the product of the basis sizes of the two stages, first to $L$, then from $L$ to $M$ - like the number of squares in an $a\times b$ grid.) Multiply layer by layer up the whole tower:

$$
[F_m:\mathbb{Q}]=\prod_{i=0}^{m-1}[F_{i+1}:F_i]=\underbrace{2\cdot 2\cdots 2}_{m\ \text{factors}}=2^{m}.
$$

Finally, use the tower multiplication once more: because $\mathbb{Q}\subset\mathbb{Q}(x)\subset F_m$, $[\mathbb{Q}(x):\mathbb{Q}]$ **divides** $[F_m:\mathbb{Q}]=2^m$. And the divisors of $2^m$ can only be powers of $2$ again. So we obtain

> **Wantzel's degree criterion (1837).**
>
> If the real number $x$ can be constructed with straightedge and compass, then $[\mathbb{Q}(x):\mathbb{Q}]$ must be a power of $2$:
>
> $$
> x\ \text{constructible} \;\Longrightarrow\; [\mathbb{Q}(x):\mathbb{Q}]=2^{t}\ \text{(for some integer } t\ge 0\text{)}.
> $$

This is a **pass check**: any number that wants to be constructed with straightedge and compass must first pass the gate "the degree is a power of $2$". **Note the direction** - it is a necessary condition (constructible $\Rightarrow$ power of $2$). If a number's degree is not a power of $2$, it is **out on the spot**, and there is no need to start drawing at all. The three ancient Greek problems below are exactly the ones blocked dead by this gate (or by its strengthened version with transcendental numbers).

> **A historical note**:
>
> [Pierre Wantzel](https://mathshistory.st-andrews.ac.uk/Biographies/Wantzel/)
>
> (1814–1848) published this result in his early twenties ($22$–$23$ years old; the paper appeared in the 1837 volume, and his age differs depending on whether it is taken before or after his birthday in month $6$, June), and was the first person in history to prove rigorously that these classical constructions are
>
> **impossible**
>
> . Before him, people already strongly suspected they could not be drawn, but "cannot be drawn" and "proving it can never be drawn" are worlds apart - the latter requires translating "the power of straightedge and compass" into algebraic degree, which is exactly what Wantzel did.

### 7.3 Doubling the cube: why $\sqrt[3]{2}$ is out (degree $3$)

![Wantzel 1837: doubling the cube ($\sqrt[3]{2}$, degree 3) and the general trisection of an angle ($60^\circ$, degree 3) are both out. — Abel (Manim)](/content/images/2026/05/fig_s7_3_wantzel_xmarks.png)

*Wantzel 1837: doubling the cube ($\sqrt[3]{2}$, degree 3) and the general trisection of an angle ($60^\circ$, degree 3) are both out. — Abel (Manim)*

**The problem** (said to originate in a plague on Delos, when an oracle demanded that the volume of a cubical altar be doubled): given a cube of edge $1$ (volume $1$), construct a cube of volume $2$ - that is, construct the new edge length $\sqrt[3]{2}$.

*Proof.* $\sqrt[3]{2}$ is a root of $x^3-2=0$. To compute its degree, first prove that $x^3-2$ is **irreducible** over $\mathbb{Q}$ (it cannot be further decomposed into factors of lower degree with rational coefficients). Use the **Eisenstein criterion** with the prime $p=2$, and check the coefficients of $x^3-2$ (from the leading term to the constant term, in order, $1,0,0,-2$) one by one:

- **the leading coefficient** $1$ is not divisible by $2$;
- **the other coefficients** $0,0,-2$ are all divisible by $2$;
- **the constant term** $-2$ is not divisible by $2^2=4$.

The three conditions hit Eisenstein's hypotheses exactly, so $x^3-2$ is irreducible. Therefore it is the minimal polynomial of $\sqrt[3]{2}$,

$$
[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3.
$$

$3$ is **not** a power of $2$. By Wantzel's criterion (7.2), $\sqrt[3]{2}$ is not constructible. **Doubling the cube is impossible.** **(QED)**

### 7.4 Trisecting a general angle: why trisecting $60^\circ$ is out (degree $3$)

**The problem**: trisect an arbitrary given angle with straightedge and compass. Note that some special angles can be trisected ($90^\circ\to30^\circ$ is easy), so to prove "**impossible**", it suffices to give **one** angle that cannot be trisected. The most classic counterexample is $60^\circ$ (which is itself constructible - the interior angle of the equilateral triangle).

*Proof.* Let $t=\cos 20^\circ$ (that is, a third of $60^\circ$). Use the triple-angle formula $\cos 3\alpha=4\cos^3\alpha-3\cos\alpha$, taking $\alpha=20^\circ$, $\cos 60^\circ=\tfrac12$:

$$
4t^3-3t=\tfrac12 \quad\Longrightarrow\quad \boxed{8t^3-6t-1=0.}
$$

To prove that $\cos 20^\circ$ has degree $3$, it suffices to prove that $8t^3-6t-1$ is irreducible over $\mathbb{Q}$. A **cubic** polynomial is reducible over $\mathbb{Q}$ $\iff$ it has a **rational root** (because if it can be factored at all, it must contain a linear factor). So it suffices to prove that it **has no rational root**. Use the **rational root theorem**: if the fraction in lowest terms $p/q$ is a root, then $p\mid(\text{constant term}=-1)$ and $q\mid(\text{leading coefficient}=8)$. So the only candidates are

$$
\pm 1,\ \pm\tfrac12,\ \pm\tfrac14,\ \pm\tfrac18.
$$

Substitute them one by one (worked example 7.6 below + the python block give the values of all $8$), and **not one makes the polynomial zero**. So $8t^3-6t-1$ has no rational root $\Rightarrow$ it is irreducible $\Rightarrow$

$$
[\mathbb{Q}(\cos 20^\circ):\mathbb{Q}]=3,
$$

again not a power of $2$. By Wantzel's criterion, $\cos 20^\circ$ is not constructible. **$60^\circ$ cannot be trisected, so the trisection of a general angle is impossible.** **(QED)**

> **The echo of §1**: this also explains why the regular $9$-gon cannot be drawn. Constructing the regular $9$-gon $\iff$ constructing $\cos\tfrac{2\pi}{9}=\cos 40^\circ$, and $40^\circ=2\times20^\circ$ (doubling an angle is constructible), $20^\circ=60^\circ/3$, which drags us back to the same cubic obstacle of trisecting $60^\circ$ (degree $3$, consistent with this section's argument for trisecting $60^\circ$). Arithmetically, $9=3^2$ contains the
>
> **repeated**
>
> Fermat prime $3$ - this is exactly the case where "mutually distinct" in the criterion of §1, "$n=2^a p_1\cdots p_k$, $p_i$
>
> **mutually distinct**
>
> ", is violated. A repeated Fermat prime factor = a residual cubic obstacle = cannot be drawn.

### 7.5 Squaring the circle: this one Wantzel cannot lock out; it takes Lindemann

![Lindemann 1882: $\pi$ is transcendental $\Rightarrow$ constructible $\subset$ algebraic $\not\ni \pi \Rightarrow$ squaring the circle is closed. — Abel (Manim)](/content/images/2026/05/fig_s7_5_lindemann_venn.png)

*Lindemann 1882: $\pi$ is transcendental $\Rightarrow$ constructible $\subset$ algebraic $\not\ni \pi \Rightarrow$ squaring the circle is closed. — Abel (Manim)*

![Ferdinand von Lindemann (1852–1939), who proved in 1882 that $\pi$ is transcendental. Wikimedia Commons, PD (the only low-resolution portrait on Commons).](/content/images/2026/05/hist_s7_lindemann.jpg)

*Ferdinand von Lindemann (1852–1939), who proved in 1882 that $\pi$ is transcendental. Wikimedia Commons, PD (the only low-resolution portrait on Commons).*

**The problem**: given a circle of radius $1$ (area $\pi$), construct a square of equal area - that is, construct the side length $\sqrt{\pi}$.

This is the **deepest** of the three problems. Wantzel's degree criterion **has no purchase** here: it deals with problems internal to **algebraic numbers**, such as "is the degree a power of $2$", while $\pi$ is not an algebraic number at all. What really seals it off is a result of a completely different order:

> **Lindemann's theorem (1882).**
>
> $\pi$ is a
>
> **transcendental number**
>
> - it does not satisfy
>
> **any**
>
> nonzero polynomial equation with rational coefficients.

*Proof.* With this key, the argument is done in one step. **All constructible numbers are algebraic numbers** (by 7.2: a constructible number lies in a finite extension of $\mathbb{Q}$, and naturally satisfies some equation with rational coefficients). Suppose $\sqrt{\pi}$ were constructible; then $\sqrt{\pi}$ would be an algebraic number; but algebraic numbers are closed under multiplication, so $(\sqrt{\pi})^2=\pi$ would also be an algebraic number - contradicting Lindemann. So $\sqrt{\pi}$ is not constructible. **Squaring the circle is impossible.** **(QED)**

Please keep this **division of labor** firmly in mind; it is the point on which §1 and this section must agree:

| Problem | Obstacle | Who sealed it off |
| --- | --- | --- |
| doubling the cube | $[\mathbb{Q}(\sqrt[3]2):\mathbb{Q}]=3$, not a power of $2$ | **Wantzel 1837** |
| trisecting the angle | $[\mathbb{Q}(\cos 20^\circ):\mathbb{Q}]=3$, not a power of $2$ | **Wantzel 1837** |
| squaring the circle | $\pi$ is transcendental (not even an algebraic number) | **Lindemann 1882** |

Wantzel's degree criterion closed **the first two** at one stroke; the third lies beyond what "degree" can describe, and had to wait for Lindemann to prove the transcendence of $\pi$. Crediting squaring the circle to Wantzel is a common historical error - this article does not make it.

> **A historical note**:
>
> [Ferdinand von Lindemann](https://mathshistory.st-andrews.ac.uk/Biographies/Lindemann/)
>
> (1852–1939) built his proof on the method by which Hermite in
>
> [1873](https://mathshistory.st-andrews.ac.uk/Biographies/Hermite/)
>
> proved $e$ transcendental, generalizing it to $\pi$. From ancient Greece to this point,
>
> **a span of about two thousand three hundred years**
>
> (the earliest explicit attempt at squaring the circle can be traced back to Anaxagoras around $450$ BC; it was sealed off in $1882$).

### 7.6 Worked example: closing the door of trisection by hand with the rational root theorem

Substitute, one by one, into $8t^3-6t-1$ all $8$ candidate rational roots, and see how far from zero they are (not one hits):

| Candidate $t$ | $8t^3-6t-1$ | A root? |
| --- | --- | --- |
| $1$ | $8-6-1=1$ | No |
| $-1$ | $-8+6-1=-3$ | No |
| $\tfrac12$ | $1-3-1=-3$ | No |
| $-\tfrac12$ | $-1+3-1=1$ | No |
| $\tfrac14$ | $\tfrac18-\tfrac32-1=-\tfrac{19}{8}$ | No |
| $-\tfrac14$ | $-\tfrac18+\tfrac32-1=\tfrac38$ | No |
| $\tfrac18$ | $\tfrac{1}{64}-\tfrac34-1=-\tfrac{111}{64}$ | No |
| $-\tfrac18$ | $-\tfrac{1}{64}+\tfrac34-1=-\tfrac{17}{64}$ | No |

No rational root $\Rightarrow$ the cubic is irreducible $\Rightarrow$ $[\mathbb{Q}(\cos 20^\circ):\mathbb{Q}]=3$. Numerically, verify that $\cos 20^\circ\approx 0.939693$ really is a root: $8(0.939693)^3-6(0.939693)-1\approx 0$.

**Contrast with the survival of $17$**: the regular $17$-gon $\iff$ constructing $\cos\tfrac{2\pi}{17}$, whose degree is $[\mathbb{Q}(\cos\tfrac{2\pi}{17}):\mathbb{Q}]=\tfrac{17-1}{2}=8=2^3$ - **exactly a power of $2$**, passing Wantzel's pass check. This is the essential divide between $17$ and $\sqrt[3]2$, $\cos 20^\circ$: it is not that "$17$ is especially hard"; quite the opposite, its degree is **especially tame** (it is $2^3$, not $3$ or some odd composite), so it can be taken level by level by the four layers of square roots of §3–§6.

### 7.7 Verification (pure Python / stdlib)

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

Run output (checked): doubling the cube / trisecting $60^\circ$ / the regular $9$-gon are all out because their degree $=3$, and only the regular $17$-gon passes, because its degree $=8=2^3$.

### 7.8 Modern significance

![The family of Fermat primes (3 / 5 / 17 / 257 / 65537) corresponds to five constructible polygons; the 65537 sides grow denser step by step, until to the naked eye it is no different from a circle. — Animation: Abel (Manim)](/content/images/2026/05/fig_s7_8_fermat_family_65537.gif)

*The family of Fermat primes (3 / 5 / 17 / 257 / 65537) corresponds to five constructible polygons; the 65537 sides grow denser step by step, until to the naked eye it is no different from a circle. — Animation: Abel (Manim)*

The real weight of Wantzel's one page of 1837 lies not in "solving three more ancient problems", but in its demonstrating a **completely new way of thinking**:

- **Translating "power" into an "invariant"**. The physical operations of straightedge and compass are compressed into a purely algebraic number, $[\mathbb{Q}(x):\mathbb{Q}]$. Once the translation is done, "impossible" is upgraded from "we have not yet found a way" to "a mathematical theorem that no way at all exists". This is exactly the core later shared by [Galois theory](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/) and [the Abel–Ruffini unsolvability of the quintic](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/) - using invariants of groups and fields to decide the **fundamental limits** of a whole class of operations.
- **Proofs of impossibility became a business in their own right**. From Wantzel to Lindemann, and on to Gödel's incompleteness in the $20$th century, Turing's undecidability of the halting problem, and the lower bounds of computational complexity - modern science has a whole branch devoted to **proving "it cannot be done"**. Doubling the cube and trisecting the angle are the earliest source of this line of thought, one that can be explained on a single page.
- **The beginning of transcendental number theory**. Lindemann's treatment of $\pi$, together with Hermite's treatment of $e$, gave rise to the discipline of transcendental number theory, leading directly to profound results of the $20$th century such as the [Gelfond–Schneider theorem](https://mathshistory.st-andrews.ac.uk/Biographies/Gelfond/) (on when $a^b$ is transcendental).

Back to the main line that runs through the whole article: **the three great ancient Greek problems trapped humanity for about two thousand three hundred years**, and the construction of regular polygons also **stalled for over two thousand years** (from Euclid around $300$ BC to Gauss's breakthrough in [1796](https://gdz.sub.uni-goettingen.de/id/PPN235993352); see *[Disquisitiones Arithmeticae](https://gdz.sub.uni-goettingen.de/id/PPN235993352) §365* for details). That $17$ could survive in this wilderness of "impossible" is not luck, but a precise arithmetic condition protecting it: $17=F_2$ is a Fermat prime $\Rightarrow$ $[\mathbb{Q}(\cos\tfrac{2\pi}{17}):\mathbb{Q}]=8$ is a power of $2$ $\Rightarrow$ it passes Wantzel's criterion $\Rightarrow$ it is reachable by four layers of square roots (§3–§5) $\Rightarrow$ a straightedge and a compass really can draw it (§6, the elegant construction of [Richmond 1893](https://en.wikipedia.org/wiki/Heptadecagon#Construction)). **The positive "constructible" and the negative "not constructible" share the same degree criterion - this is exactly the unified viewpoint that algebra gave to geometry after Gauss.**

— *End of §7.*

### 7.9 Historical sources: Wantzel and Lindemann, the men and their work

In the *Disquisitiones Arithmeticae* of 1801, Gauss proved the **sufficient** direction of the constructibility criterion: as long as $n = 2^a \cdot p_1 \cdots p_k$ (the $p_i$ distinct Fermat primes), the regular $n$-gon can be constructed with straightedge and compass. But he did not prove the **necessary** direction (conversely: if this condition is not satisfied, it certainly cannot be constructed) - Gauss himself asserted necessity, but gave no proof.

The one who completed this step was the French mathematician [**Pierre Laurent Wantzel**](https://en.wikipedia.org/wiki/Pierre_Wantzel)** (1814–1848)**. In 1837 he published the paper ["Research on the means of recognizing whether a problem of geometry can be solved with straightedge and compass"](https://eudml.org/doc/234865) (*Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas*), in the Journal of Pure and Applied Mathematics (*Journal de Mathématiques Pures et Appliquées*), volume 2, pages 366–372. This paper proved necessity rigorously for the first time, completing what is today called the [**Gauss–Wantzel theorem**](https://en.wikipedia.org/wiki/Constructible_polygon).

The same paper also, in passing, put an end to two ancient Greek problems that had troubled the mathematical world for more than two thousand years: [**doubling the cube**](https://en.wikipedia.org/wiki/Doubling_the_cube) (the minimal polynomial of $\sqrt[3]{2}$ has degree 3, and cannot fit into a tower of extensions of degree a power of 2) and [**the trisection of an arbitrary angle**](https://en.wikipedia.org/wiki/Angle_trisection) (the general case comes down to an equation of degree 3). Wantzel died young, at only 33, and this foundational paper was seriously underestimated for a long time after his death.

The last of the three problems to fall was [**squaring the circle**](https://en.wikipedia.org/wiki/Squaring_the_circle) - what it requires is not only "the degree is not a power of 2", but that $\pi$ is not an algebraic number at all. In 1882, [**Ferdinand von Lindemann**](https://en.wikipedia.org/wiki/Ferdinand_von_Lindemann) proved that $\pi$ is transcendental (the paper ["On the number π"](https://eudml.org/doc/157031) *Über die Zahl π*, in the Mathematical Annals, *Mathematische Annalen*, volume 20, pages 213–225); his proof was built on [Hermite](https://en.wikipedia.org/wiki/Charles_Hermite)'s 1873 result on the transcendence of $e$ and on Euler's identity $e^{i\pi} = -1$. A number constructible with straightedge and compass must be algebraic; since $\pi$ is transcendental, it is not constructible, and squaring the circle is therefore impossible. Counting from when the ancient Greeks ([Anaxagoras](https://en.wikipedia.org/wiki/Anaxagoras), around the 5th century BC) posed it, it took **about two thousand three hundred years**, and with this all three great problems were brought to a full stop.

---

## §8 History and significance

### 8.1 1796-03-30: the first entry in the diary

On the morning of March 30, 1796, Gauss wrote the first entry in his [mathematical diary](https://en.wikipedia.org/wiki/Gauss%27s_diary) (*Mathematisches Tagebuch*), in Latin:

> *"Principia quibus innititur sectio circuli, ac divisibilitas eiusdem geometrica in septemdecim partes etc."*
>
> (The principles on which the division of the circle rests, and its geometric divisibility into seventeen parts, etc.)

This diary, kept from 1796 to 1814, has 146 entries in all; it was **only rediscovered in 1897**, first published by **Felix Klein** in 1903 in the Mathematical Annals (*Mathematische Annalen*), and later included in **volume 11** of Gauss's collected works (*Werke*). When he wrote this first entry, Gauss was **not yet 19** - he was born on April 30, 1777, and this day was still exactly one month short of his 19th birthday.

### 8.2 1801: *Disquisitiones Arithmeticae* §365–§366

![The title page of the Disquisitiones Arithmeticae, Leipzig 1801 - Chapter VII, §365–§366, gives the constructibility criterion. Wikimedia Commons, PD.](/content/images/2026/05/hist_s1_DA_titlepage_1801.jpg)

*The title page of the Disquisitiones Arithmeticae, Leipzig 1801 - Chapter VII, §365–§366, gives the constructibility criterion. Wikimedia Commons, PD.*

Five years later, in 1801, Gauss published the [Arithmetical Investigations](https://gdz.sub.uni-goettingen.de/id/PPN235993352) (*Disquisitiones Arithmeticae*, completed in 1798 and sent to press in 1801; the link is a digitized scan of the first Latin edition of 1801), a book of 366 articles in all. Among them, **§365–§366** of **Chapter VII** (the theory of the division of the circle, cyclotomy) - which are also the last two articles of the whole book - give the sufficient condition for a regular polygon to be constructible with straightedge and compass:

$$
n = 2^a \cdot p_1 \cdot p_2 \cdots p_k,\quad p_i \text{ mutually distinct Fermat primes}
$$

The $17 = F_2$ corresponding to the regular 17-gon is exactly the first "new" constructible regular polygon after Euclid.

### 8.3 Fermat primes and the later 257-gon and 65537-gon

![The first page of the manuscript of J. G. Hermes's Diary of the Division of the Circle (Diarium Kreisteilung) - he spent about ten years calculating the construction of the regular 65537-gon by hand; it is kept in Göttingen. Wikimedia Commons, PD.](/content/images/2026/05/hist_s7_hermes_65537_manuscript.jpg)

*The first page of the manuscript of J. G. Hermes's Diary of the Division of the Circle (Diarium Kreisteilung) - he spent about ten years calculating the construction of the regular 65537-gon by hand; it is kept in Göttingen. Wikimedia Commons, PD.*

The [Fermat numbers](https://en.wikipedia.org/wiki/Fermat_number) $F_n = 2^{2^n} + 1$. Only five Fermat **primes** are known:

$$
F_0 = 3,\quad F_1 = 5,\quad F_2 = 17,\quad F_3 = 257,\quad F_4 = 65537
$$

After Gauss's 17-gon of 1796: an explicit construction of the regular [**257-gon**](https://en.wikipedia.org/wiki/257-gon) was given by **Richelot in 1832**; the regular [**65537-gon**](https://en.wikipedia.org/wiki/65537-gon) was completed by **Johann Gustav Hermes** in **1894** - he spent **ten years** on it, leaving about **200 pages** of manuscript; the paper ["On the division of the circle into 65537 equal parts"](https://eudml.org/doc/58274) (*Über die Teilung des Kreises in 65537 gleiche Teile*) was published in the proceedings of the Göttingen Society of Sciences (*Nachrichten*, 1894, pages 170–186), and the manuscript is **kept at the University of Göttingen** to this day (digitized).

From $F_5$ on, all those known at present are composite - **Euler as early as 1732** found that $F_5 = 641 \times 6700417$ is not prime. Whether a sixth Fermat prime exists is still an unsolved mystery to this day.

### 8.4 The three great problems of two thousand years

![The 1482 Ratdolt printing of Euclid's Elements, with construction diagrams in the margins - the source of the tradition of straightedge-and-compass construction. Wikimedia Commons, PD.](/content/images/2026/05/hist_s7_euclid_1482.jpg)

*The 1482 Ratdolt printing of Euclid's Elements, with construction diagrams in the margins - the source of the tradition of straightedge-and-compass construction. Wikimedia Commons, PD.*

The three ancient Greek straightedge-and-compass construction problems - **squaring the circle, doubling the cube, trisecting the angle** - troubled the mathematical world for more than two thousand years. Book IV of Euclid's *Elements* gives only the constructions of the regular 3-, 4-, 5-, 6- and 15-gons; for **over two thousand years** afterward, the construction of regular polygons made almost no progress at all - until Gauss's 17-gon of 1796, the first breakthrough after Euclid.

Gauss's real contribution was not "drawing it", but his proving "**why it can be drawn**": the boundary of straightedge-and-compass construction is ultimately decided by the algebraic symmetry of number fields (whether it can be reached layer by layer through a chain of square roots). This viewpoint translated a two-thousand-year-old geometric problem into a problem about the symmetric structure of numbers - this is exactly the forerunner of later [Galois theory](https://en.wikipedia.org/wiki/Galois_theory).

### 8.5 Background: the patronage of the Duke of Brunswick

Gauss came from humble origins, and his education benefited from the patronage of the [**Duke of Brunswick**](https://en.wikipedia.org/wiki/Charles_William_Ferdinand,_Duke_of_Brunswick) (Duke of Brunswick, Carl Wilhelm Ferdinand). He studied at the University of Göttingen in **1795–1798** - the breakthrough of the 17-gon happened right at the beginning of this period of sponsored study.

> A widely circulated anecdote (hard to verify from primary sources; best regarded as legend): it is said that Gauss once wished to have a regular 17-gon carved on his tombstone, and the stonemason politely declined on the grounds that "once carved, it would be mistaken for a circle", so a seventeen-pointed star was carved instead.

---

## §9 Closing

As was said at the beginning of the video, Gauss had such astonishing insight when he was young that it filled me, then in high school, with deep admiration.

This blog post writes down all the derivations that there was no time to unfold in the video. The video version (with animation and narration) is here: [**YouTube · timeobserver137**](https://youtu.be/TWnMkXEghFg).

If you find an error in the video or the blog post, or are interested in what I do, you are also welcome to leave a message in the comments below the video or by email.

Thank you for watching.

---

*timeobserver137 · *[*timeobserver137.cyou*](/)* · mathematical derivations: Abel | historical fact-checking: Gauss | logic review: Socrates | composition and media: Escher | publication: Euler*
