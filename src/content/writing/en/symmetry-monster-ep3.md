---
title: "Symmetry and the Monster (3): The Indecomposable Atom · A₅"
date: 2026-06-24
lang: en
series: symmetry-monster
seriesOrder: 3
ghostSlug: symmetry-monster-ep3
---

## A word from the author

> The proofs in this episode's blog post were worked out step by step by me together with my AI partners. Whenever I had a question I kept pressing them, and of course they never let me down. Learning in the AI era may no longer need a teacher lecturing in a classroom, and may need more of our own desire to explore the unknown; and as knowledge becomes cheap and AI develops, one question will surely keep making us ask: what do we learn for? For me the answer is "I'm very curious: how on earth did this come about? Why?" For readers it may be different, but I hope readers will also find their own answers. Continuing from EP2 — in the last episode we set up group theory, asserted that "A₅ cannot be broken apart", and left two IOUs (why it cannot be broken apart, and why being unbreakable means no formula can be written down), and also previewed a person who never met the other yet gave the same answer. This episode pays off all three at once. This is the episode in the series with the hardest mathematics, but it still
>
> **takes you as someone who has just finished the little group-theory lesson of the last episode**, and goes down step by step from there. This episode's promise:
>
> **Every conclusion that really matters in this episode is proved for you; the few standard lemmas found in every textbook are given with their sources and only their conclusions are taken, so as not to drown the main line.**
>
> "The chief forms of beauty are order, symmetry and definiteness, and the mathematical sciences display them in a special degree." — Aristotle
>
> *(The chief forms of beauty are order and symmetry and definiteness, which the mathematical sciences demonstrate in a special degree. — Aristotle)*

---

**🎬 This episode's companion video is now online (YouTube)**

<iframe width="200" height="113" src="https://www.youtube.com/embed/eM9LKpYwjk0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Symmetry and the Monster (3): the atom that cannot be broken apart, and an equation three hundred years in the solving"></iframe>

---

## Contents

- [An impossible game](#an-impossible-game)
- [The letter that came too late](#the-letter-that-came-too-late)
- [§1 A three-hundred-year-old open case: Ruffini and Abel](#1-a-three-hundred-year-old-open-case-ruffini-and-abel)
- [§2 The language of atoms: groups, composition series and Jordan–Hölder](#2-the-language-of-atoms-groups-composition-series-and-jordanhölder)
- [§3 Why A₅ is an atom](#3-why-a-is-an-atom)
- [§4 A little lesson in field theory: translating root extraction into groups](#4-a-little-lesson-in-field-theory-translating-root-extraction-into-groups)
- [§5 Closing the loop: the Abel–Ruffini theorem](#5-closing-the-loop-the-abelruffini-theorem)
- [Epilogue: the first atom, and a list no one had seen](#epilogue-the-first-atom-and-a-list-no-one-had-seen)

---

## An impossible game

On the table there is a little toy: a four-by-four frame, fifteen sliding blocks, and one empty square left over. The blocks can slide horizontally and vertically; wherever the empty square moves, the block next to it can slide over. Scramble it, then try to slide it back into order — this is the "15 puzzle" that was all the rage in the nineteenth century.

![The 14-15 puzzle illustration in Loyd's 1914 *Cyclopedia of 5000 Puzzles* (public domain)](/content/images/2026/06/loyd_15puzzle.jpg)

*Figure 1 The 14-15 puzzle illustration in Loyd's 1914 *Cyclopedia of 5000 Puzzles* (public domain)*

Now you are given a position that is **almost** set up: 1 to 15 arranged in order, except that the last two blocks — **14 and 15 have swapped places**. The empty square is in the bottom-right corner. Your task: by sliding alone, swap 14 and 15 back, with the empty square back in the bottom-right corner again.

It sounds as simple as can be. And yet — you will find that you cannot do it no matter what.

> This was exactly the prize problem of the day. America's most celebrated puzzle master,
>
> **Sam Loyd (1841–1911)**
>
> , offered for it a
>
> **1000-dollar**
>
> reward (equivalent to well over a hundred thousand dollars today) for a solution.
>
> **He never had to worry about this reward — because the problem has no solution at all.**
>
> (A historical aside: this story of "Loyd's invention + a thousand-dollar prize" is itself a widely circulated legend. Later research (Slocum & Sonneveld, 2006) established that the real inventor was Noyes Chapman, a postmaster in New York State, and that Loyd only began claiming publicly that it was his own creation in 1891. But
>
> **this takes nothing away from the mathematics of the game**
>
> — this impossibility is beyond doubt, and it is proved for you below.)

Why is it impossible? The answer is hidden in a plain but profound distinction: **odd permutations and even permutations** (in the little lesson of EP2 we saw "swaps" through the flips of a triangle; here we use them all the way).

**First put the game aside, and think only about "scrambling".** The simplest scrambling is to swap two things and leave the rest alone — this is what EP2 called a **swap (transposition)**. Six people sit around a table; two of them exchange seats and the others do not move: that is one transposition. Any complicated rearrangement can be carried out by breaking it into some number of transpositions.

Here there is a key fact (touched on at the end of the EP2 little lesson, and formally put to use here): **if a rearrangement can be done with an even number of transpositions, it can never be done with an odd number, and vice versa.** Every rearrangement is either "even" or "odd", clearly one or the other. If you rearranged the seats with seven transpositions and someone says he can achieve the same result with exactly six, you can be sure: he is wrong.

> 🔑
>
> **Why are odd and even clearly separated?**
>
> (Put the people back one by one.) To get A to sit in B's seat, swap A and B — A is back in place, and "the number of people in the right seat" goes up by at least one. In this way, each transposition flips the parity of the number of people sitting correctly, until everyone is back in place. The parity at the end point (all correct) is determined, so the parity of the number of transpositions needed to reach it is determined too.

**Back to the game.** Swapping 14 and 15 alone and leaving the rest alone — this is **one** transposition, an **odd** permutation. But any way of sliding that brings the empty square "back to the bottom-right corner" must be an **even** permutation. The reasoning is like coloring a chessboard: paint the 16 squares alternately black and white; each time the empty square slides one step, it goes from a black square to a white square, or from white to black — **the color flips once**. For the empty square to get back to its original square (the same color), the number of color flips must be **even**, that is, the total number of steps is even → an even permutation.

Odd ≠ even. An odd permutation can never be made up of an even number of steps. Loyd's thousand dollars was therefore perfectly safe — and he knew this very well.

![All arrangements of the 16 sliding blocks fall into two equal halves: the ones that can be reached by sliding](/content/images/2026/06/fig_parity_halves.png)

*Figure 2 All arrangements of the 16 sliding blocks fall into two equal halves: the "even" half that can be reached by sliding and the "odd" half that cannot; "swap only 14 and 15" lands exactly in the unreachable half*

By the way, a word on how "big" this game is: the full permutations of 16 positions give 16! = **20,922,789,888,000** arrangements (over twenty trillion); exactly half of them are even permutations, that is, **10,461,394,944,000** — this is the number of positions you **can actually reach by sliding**. The other half, more than ten trillion, including the one "swap only 14 and 15", can never be reached by sliding.

This leap turns the 15-puzzle from a clever toy into **the key to the whole episode**: the "odd and even" you just played with is not an isolated special case. **Shrink it to 5 objects** — all the even permutations of 5 things number exactly $60$ and form a group, which is precisely the [**alternating group**](https://en.wikipedia.org/wiki/Alternating_group) $A_5$ from the little lesson of EP2. And this $A_5$ **cannot be broken apart**; it is a "symmetry atom"; it is precisely the 60 rotations of the icosahedron that we ran into at the end of the last episode. That $A_5$ cannot be broken apart is also precisely the root of "the general quintic equation has no formula for its roots" — §5 will explain this line thoroughly.

In this episode, we fix our eyes only on this first and also smallest non-commutative atom, $A_5$: first prove that it really cannot be broken apart, then see how it leaves the quintic equation without a formula for its roots.

At the other end of the story are two young men who gave their lives to this atom.

---

## The letter that came too late

![Niels Henrik Abel (1802–1829), painted by Johan Gørbitz (public domain)](/content/images/2026/06/niels_abel.jpg)

*Figure 3 Niels Henrik Abel (1802–1829), painted by Johan Gørbitz (public domain)*

On April 6, 1829, in Norway, a 26-year-old young man's life was taken by tuberculosis. Two days later — on April 8 — Crelle wrote from Berlin with good news: he had secured a position for him. The letter was two days late. His name was [Niels Abel](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/). Five years earlier (1824), he had printed at his own expense a thin little pamphlet proving what generations had failed to do: the general equation of the fifth degree has no formula for its roots (an expanded version was published in 1826 in the first issue of Crelle's journal). But until his death he could not answer the next question — **exactly which equations can be solved, and which cannot?** That answer was in the hands of another person who was just as young, died just as early, and never met him — [Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/). In this episode, we finish saying what the two of them did not have time to finish saying.

![Évariste Galois (1811–1832), a portrait drawn from memory by his brother, at about age 15 (public domain)](/content/images/2026/06/galois_portrait_age15.jpg)

*Figure 4 Évariste Galois (1811–1832), a portrait drawn from memory by his brother, at about age 15 (public domain)*

---

## §1 A three-hundred-year-old open case: Ruffini and Abel

The Babylonians could already handle quadratic equations; cubics and quartics were conquered in the Renaissance (covered in EP2); but the quintic equation held out against humanity for nearly three hundred years.

![Paolo Ruffini (1765–1822), public domain](/content/images/2026/06/ruffini.jpg)

*Figure 5 Paolo Ruffini (1765–1822), public domain*

The first to declare solemnly that "it simply cannot be solved" was the Italian [**Paolo Ruffini**](https://mathshistory.st-andrews.ac.uk/Biographies/Ruffini/): in 1799 he published his *General Theory of Equations*, asserting that the general equation of degree higher than four cannot have an algebraic solution, and he revised it repeatedly (1803, 1808, 1813). But his proof had a **critical gap**, and the mathematical world almost ignored it. He once asked the Paris Institute to rule on whether it was right or wrong — Lagrange, Legendre and Lacroix were assigned to review it, but the response was vague and disappointing. [According to the account in Ronan's *Symmetry and the Monster*, the gist of the polite refusal at the time was: the geometers were unwilling to spend time delving into each other's lengthy work.]

More than twenty years later, the Norwegian **Abel** (1824, independently of Ruffini) gave an accepted proof: **there exist** quintic equations whose solutions cannot be written in radicals. But note — x⁵=2 can be solved (just take the fifth root). So the real question is not "can the quintic equation be solved" but "**which can, and which cannot**". Abel died of illness just as he was closing in on this measuring stick for deciding. The stage was left to Galois.

They had both touched the door, but could not push it open. To push it open, one must first think through, completely, the matter of "how groups break apart".

---

## §2 The language of atoms: groups, composition series and Jordan–Hölder

### First list a "group" out in full: the Cayley table

Before proving anything, first make "the operation of a group" **visible and checkable**.

Take the symmetry group $S_3$ of the equilateral triangle from EP2. It has 6 actions: doing nothing $e$, rotating by $120°$, $r$, rotating by $240°$, $r^2$, and three flips $a,b,c$ (flipping about the axes through each of the three vertices). The operation of the group is "do one, then do another" — write $x\circ y$ = **first do $y$, then do $x$** (the one on the right is done first, the EP2 convention).

Fill all the results of $x\circ y$ into a 6×6 table, and that is the **multiplication table (Cayley table)**:

![The Cayley table of S₃: each cell is the result of "row action ∘ column action"; the blue 3×3 block (gold frame) is exactly the subgroup A₃={e,r,r²}, closed in itself](/content/images/2026/06/fig_cayley_s3.png)

*Figure 6 The Cayley table of S₃: each cell is the result of "row action ∘ column action"; the blue 3×3 block (gold frame) is exactly the subgroup A₃={e,r,r²}, closed in itself*

This table turns the abstract "group" into a table you can check with your finger. Two things can be seen at a glance, and everything below depends on them:

- **Each action appears exactly once in every row and every column** (each row and each column is a rearrangement of the 6 actions) — this is a direct consequence of a group being "invertible": fix $x$, and "$x\circ\,?$" sends different $y$ to different results, with nothing missed and nothing repeated.
- **The blue 3×3 small block in the gold frame at the top left** uses only $\{e,r,r^2\}$, and its results all fall in $\{e,r,r^2\}$ too — it is **closed in itself**, a little group of its own. This is a "**subgroup**": a non-empty block of elements inside a group that **is also a group on its own, with the door closed**. Precisely, three conditions are needed: it contains the identity $e$, it is **closed** under composition $\circ$ (two things in the block multiplied are still in the block), and it is **closed** under taking inverses (the inverse of every element in the block is also in the block). (In a finite group, "non-empty + closed under $\circ$" in fact implies the other two; they are written out in full here to make later comparison easy.) This subgroup here is called $A_3=\{e,r,r^2\}$ (the three rotations).

Remember this table and this subgroup $A_3$; we are about to use it to prove the first theorem.

---

### The first theorem: Lagrange (the size of a subgroup always divides the size of the group)

Lagrange (Joseph-Louis Lagrange, 1736–1813) was born in Turin, baptized Giuseppe Lodovico Lagrangia. His father had served as treasurer of the Office of Public Works and Fortifications in Turin, but lost the family fortune through failed speculation. Looking back in his later years, Lagrange actually counted this as a stroke of luck, and once said that if he had been rich at the start, he would probably not have devoted himself to mathematics. In the year he turned thirty, at the invitation of Frederick the Great of Prussia, he went to Berlin to succeed Euler as head of the mathematics section of the Academy of Sciences; it was precisely during his years in Berlin that he wrote *Reflections on the Algebraic Solution of Equations* (1770), the first systematic inquiry into "why equations of degree four and below can be solved by radicals, while those of degree five and above cannot" — this question, passing later through Ruffini and Abel, led straight to Galois, and became one of the sources of group theory.

In 1787 Lagrange moved to Paris. During the French Revolution and the Reign of Terror he escaped harm thanks to his high prestige and the protection of Lavoisier and others; when Lavoisier was sent to the guillotine, he lamented that it took only a moment to cut off that head, and a hundred years may not be enough to produce another like it. After Napoleon came to power, he was made a count of the Empire. But what truly keeps his name in group theory is a plain yet profound theorem. Take the most ordinary example — a square: its symmetries number $8$ in all (four rotations plus the flips about four axes of symmetry); among them the four rotations that "only turn and do not flip" form a subgroup of their own, and that $4$ divides $8$ exactly is no accident; this is a miniature of Lagrange's theorem.

**Theorem (Lagrange).** For a finite group $G$, any subgroup $H$ of it has order dividing the order of $G$: $|H|$ divides $|G|$. (The notation $|\cdot|$ is read "how many elements are inside", that is, the **order** of a group as EP2 put it — not an absolute value, it just borrows the same pair of vertical bars; e.g. $|S_3|=6$, $|A_3|=3$.) This is a proposition that holds for **all** finite groups, not a coincidence of some particular group.

**Proof.** For $g\in G$, write the **left coset** $gH=\{g\circ h:h\in H\}$ — the block obtained by left-multiplying the whole of $H$ by $g$, shifting it as a whole. The map $h\mapsto g\circ h$ is a bijection $H\to gH$ (with left multiplication by $g^{-1}$ as its inverse), so each coset has exactly $|H|$ elements. Moreover any two cosets are either equal or disjoint: if $x\in g_1H\cap g_2H$, write $x=g_1\circ h_1=g_2\circ h_2$; then $g_1=g_2\circ(h_2\circ h_1^{-1})\in g_2H$, so $g_1H\subseteq g_2H$, and symmetrically the reverse also holds, and the two blocks coincide. Therefore $G$ is tiled by a number of pairwise disjoint cosets each containing $|H|$ elements; let there be $m$ blocks in all, then $|G|=m\,|H|$, that is, $|H|$ divides $|G|$. $\blacksquare$

Check it with $S_3$: the subgroup $A_3=\{e,r,r^2\}$ and its coset $aA_3=\{a,b,c\}$, two blocks, fill it up, $3\times2=6=|S_3|$ ✓. So the sizes of the subgroups of $S_3$ can only be the divisors of $6$, $1,2,3,6$ — $4\nmid6$, so there cannot possibly be a $4$-element subgroup; Lagrange rules it out in one sentence.

> **This theorem is used everywhere later in this episode**: A₅ has 60 elements, and the size of any subgroup of it (including "normal subgroups") must divide 60. This is precisely one of the two locks that seal every gap when we prove "A₅ cannot be broken apart".

We have just proved the first theorem — Lagrange's theorem — from beginning to end. It is worth pausing here: **theorems are the lifeline of mathematics.** A theorem is a proposition that has been proved true; without them we would have nothing to rely on, because we would have no way of being sure whether the foundation under our feet is solid. If some conclusion looks true and we build it into a theory, but later find that it is false, then everything built on top of it collapses with it — every later result proved by means of it has to be torn down and redone. Precisely for this reason, mathematicians are meticulous about "proof": an important conclusion that will be cited again and again must be proved until no one at all can find fault with it.

On this point mathematics is quite different from theoretical physics. The physicist Feynman has a widely circulated remark, whose gist is: the whole purpose of physics is to compute a number, with a decimal point — otherwise you have accomplished nothing. In mathematics, by contrast, the whole point is to state and prove a theorem.

---

### Peeling a group layer by layer: composition series

In the EP2 little lesson we learned a trick: "**shrink away a normal subgroup to get a quotient group**". First let us see this trick clearly with the Cayley table, then **apply it repeatedly, all the way down**.

**First, a review of "quotient groups", seen through the blocks of the Cayley table.** Back to that table for $S_3$: $A_3=\{e,r,r^2\}$ (the blue block) is a normal subgroup, and the other block $\{a,b,c\}$ (the warm block) is its coset. Now treat **each whole block as a new "point"**: call the blue block "even" and the warm block "odd". Look at the four corners of the Cayley table:

- blue block $\circ$ blue block = blue block (even∘even=even)
- blue block $\circ$ warm block = warm block (even∘odd=odd)
- warm block $\circ$ warm block = blue block (odd∘odd=even)

**The whole 6×6 table shrinks into a 2×2 "multiplication table of blocks"** — exactly the $\mathbb{Z}/2$ seen in EP2. This "multiplication left between points after each coset is pinched into a point" is the **quotient group** $S_3/A_3\cong\mathbb{Z}/2$. Quotient group = divide the big table into blocks by cosets, then look at how the blocks multiply.

> **A key precondition must be stated clearly: only when $N$ is a "normal" subgroup does this "block multiplication" make sense.**
>
> First recall what EP2 said about a
>
> **normal subgroup**: take any $g$ and use it to move $N$, and moving it on the left, $gN$, and on the right, $Ng$, give the same block, that is, $gN=Ng$.
>
> **The whole use of normality is to make the definition "multiplying two blocks, $(gN)(g'N)=(gg')N$", not depend on which element you pick from a block as its representative**
>
> — no matter whom you pick, the product lands in the same block. If $N$ were not normal, "block times block" would give different answers for different representatives, and would not be a definition at all. $A_3$ is normal in $S_3$ (checked in EP2), so $S_3/A_3$ makes sense.
>
> **Remember this: whenever a quotient group $G/N$ is written later, $N$ is assumed normal.**

**Composition series: peel until nothing more can be peeled.** In EP2 we peeled one layer off $S_3$. Now **peel layer by layer all the way down**: find a normal subgroup and shrink it away, find another normal subgroup in what remains and shrink it away, until only $\{e\}$ is left. Each layer shrunk gives a quotient group. If **the quotient at every layer can already 'not be broken apart'** (it is a **simple group** as EP2 put it: a **nontrivial** group $G\ne\{e\}$ that, apart from $\{e\}$ and itself, has no other normal subgroup to shrink — by convention $\{e\}$ itself does not count as a simple group), this chain is called a **composition series** of $G$, and that string of simple-group quotients is the "**symmetry atoms**" of $G$.

An analogy: peel an onion layer by layer inward, until nothing more can be peeled; the layers peeled off are this onion's "atomic layers".

**An example: peel $S_4$ all the way down.** $S_4$ consists of the rearrangements of 4 objects $\{a,b,c,d\}$, all $4!=24$ of them. We peel it layer by layer, **computing the quotient at each layer one by one**:

$$
S_4\ \triangleright\ A_4\ \triangleright\ V_4\ \triangleright\ \langle p\rangle\ \triangleright\ \{e\}.
$$

> **First, two notations made clear**: $G\triangleright N$ (triangle arrow) is read "$N$ is a
>
> **normal subgroup**
>
> of $G$"; the arrow points from the big group to the block that is shrunk away; the string above is "$S_4$ shrinks away $A_4$, $A_4$ then shrinks away $V_4$, shrinking all the way until only $\{e\}$ is left". $\langle p\rangle$ (angle brackets) is read "
>
> **the subgroup generated by $p$**
>
> " — the group made up of all the actions obtained by multiplying $p$ by itself repeatedly (EP2's cyclic groups, generators).

**Layer 1, $S_4/A_4$.** $A_4$ is the 12 **even** rearrangements in $S_4$ (those built from an even number of swaps). As with $S_3$, even/odd each take half; $A_4$ is a normal subgroup, with one coset left over (all the odd rearrangements). Pinch by cosets into two points "even/odd", and the quotient $=\mathbb{Z}/2$.

**Layer 2, $A_4/V_4$.** Here we need to lay $V_4$ out and see it clearly. It is these four actions in $A_4$:

$$
V_4=\{\,e,\ \ p=(ab)(cd),\ \ q=(ac)(bd),\ \ s=(ad)(bc)\,\}
$$

(each is a double transposition, "swapping one pair in each of two groups"). It is itself a group — look at its Cayley table:

![The Cayley table of V₄: the diagonal is all e (each flip multiplied by itself returns to the starting point), and two different flips multiplied give exactly the third → this is the Klein four-group Z/2×Z/2](/content/images/2026/06/fig_cayley_v4.png)

*Figure 7 The Cayley table of V₄: the diagonal is all e (each flip multiplied by itself returns to the starting point), and two different flips multiplied give exactly the third → this is the Klein four-group Z/2×Z/2*

One can see at a glance in the table: the diagonal is all $e$ (each action multiplied by itself = doing nothing), and any two different non-$e$ actions multiplied give exactly the third. This structure is called the **Klein four-group**, written $V_4\cong\mathbb{Z}/2\times\mathbb{Z}/2$.

> **First, this new notation "$\times$" made clear — the direct product (not covered in EP2).**
>
> The
>
> **direct product**
>
> $G\times H$ of two groups is just to put them
>
> **side by side, each minding its own business, not interfering with each other**
>
> . First look at the smallest, $\mathbb{Z}/2$: it is a "switch" — two states (off / on), press once to toggle, press twice to return to where it was. Then $\mathbb{Z}/2\times\mathbb{Z}/2$ is
>
> **two independent switches**: a state is a pair $(\text{first},\text{second})$, $2\times2=4$ kinds in all — (off,off), (on,off), (off,on), (on,on); "multiplying" two states = the two switches each toggle independently, without affecting each other. Match these two switches to $V_4$: $e=$(off,off), $p=$(on,off), $q=$(off,on), $s=$(on,on). Check one: $p\circ q$ = "first on, second off" combined with "first off, second on" = the two switches together "first on, second on" = $s$ — exactly the $p\circ q=s$ read off the Cayley table above. Each action multiplied by itself returns to $e$ (press a switch twice and it resets), which also matches the diagonal being all $e$. So $V_4$ really and truly is "two independent copies of $\mathbb{Z}/2$", genuinely $\cong\mathbb{Z}/2\times\mathbb{Z}/2$. (In general: the elements of $G\times H$ are pairs $(g,h)$, the operation is done component by component, $(g_1,h_1)(g_2,h_2)=(g_1g_2,\,h_1h_2)$, and the size is $|G\times H|=|G|\cdot|H|$. When larger direct products come up later, the meaning is the same: several groups side by side, each minding its own business.)

*Why is $V_4$ normal in $A_4$?* No new tool is needed, only "order + Lagrange".

> **First, "the order of an element" made clear**
>
> (note: this is a different thing from the order of a group $|G|$ earlier): an action $x$ multiplied by itself repeatedly returns to $e$ sooner or later;
>
> **the smallest such number $k\ge1$ (with $x^k=e$) is called the order of $x$**
>
> . Example: in $A_4$ a double transposition multiplied by itself once $(x\circ x)$ returns to $e$, order $2$; a 3-cycle returns to $e$ after turning three times, order $3$; $e$ itself has order $1$.

The 12 actions of $A_4$ have orders only 1 ($e$), 2 (the three double transpositions), 3 (the eight 3-cycles); **there is none of order 4**. So any "subgroup of 4 elements" in $A_4$ cannot contain an element of order 4, nor can it contain an element of order 3 (if it did, it would have to have a 3-element subgroup, but $3\nmid4$ — $\nmid$ is read "**does not divide**" — violating Lagrange) — it can only be $\{e\}$ plus three elements of order 2, and the elements of order 2 are exactly those three double transpositions. So **the only subgroup with 4 elements is $V_4$**. A subgroup that is "one of a kind" must be normal: take any action $g$ and "relabel" $V_4$ as a whole (replace each $v$ by $gvg^{-1}$); what you get is still a 4-element subgroup in $A_4$ — but there is only one such subgroup, $V_4$, so it can only turn back into itself. This "unchanged under relabeling" is exactly normality. Hence $|A_4|/|V_4|=12/4=3$, and the quotient $=\mathbb{Z}/3$.

**Layers 3 and 4.** $V_4$ itself can be peeled further: it contains a normal subgroup $\langle p\rangle=\{e,p\}$ (of order 2; in a commutative group every subgroup is automatically normal). $V_4/\langle p\rangle$: $4/2=2=\mathbb{Z}/2$; finally $\langle p\rangle/\{e\}=\mathbb{Z}/2$.

> ⚠️
>
> **A place where it is easy to go wrong**: you cannot stop at $V_4$! $V_4$ has
>
> **4**
>
> elements, not 2; it is
>
> **not**
>
> a simple group (it contains $\langle p\rangle$, which can be shrunk). So two more layers must be inserted. The composition series of $S_4$ therefore has
>
> **four layers**, and the atoms are, in order,
>
> $$
> \mathbb{Z}/2,\ \ \mathbb{Z}/3,\ \ \mathbb{Z}/2,\ \ \mathbb{Z}/2.
> $$
>
> Check: $2\times3\times2\times2=24=|S_4|$ ✓. (Each time a layer is peeled, the size of the group is divided by the size of that layer's quotient; peeled all the way down, the sizes of all the quotients multiplied together must restore the whole group — this is a quick way to check that nothing was peeled wrongly.)

At this point we know how to "peel a group into a string of atoms". But at once there is a question that cannot be avoided: **peeling another way, would we get a different set of atoms?** We answer it below (the Jordan–Hölder theorem).

---

### However you peel, the atoms are always the same set: Jordan–Hölder

[Jordan](https://mathshistory.st-andrews.ac.uk/Biographies/Jordan/) (Camille Jordan, 1838–1922) worked in engineering early on — after graduating from the École Polytechnique in Paris he first made his living as an engineer, and only afterwards turned to mathematics, serving as examiner at the École Polytechnique and professor at the Collège de France. In 1870 he published *Traité des substitutions et des équations algébriques* (Treatise on Substitutions), the first monograph on group theory in history, which systematically organized Galois's theory and remained the standard work on group theory for nearly thirty years afterwards, until Burnside's book appeared. In the same year, Sophus Lie and Felix Klein made a special trip to Paris to study with him — each of the two later founded far-reaching directions in mathematics. In his later years Jordan suffered great grief: he had eight children (two daughters and six sons), and in the First World War three of his sons were killed one after another. In 1922 he died at the advanced age of 84.

![Camille Jordan (1838–1922), public domain](/content/images/2026/06/camille_jordan.jpg)

*Figure 8 Camille Jordan (1838–1922), public domain*

What also keeps Jordan's name in group theory is a theorem about "how to take a group apart". A group can be peeled layer by layer inward like an onion; if this layer-by-layer peeling is likened to breaking matter down into molecules and further down into atoms, then what Jordan (and, a little later, the German mathematician Hölder) proved is: whichever path you follow to peel it, **the set of "atoms" obtained when it is peeled all the way down is essentially always the same set**. This is exactly the Jordan-Hölder theorem we are to prove in this section — it guarantees that the "composition factors" of a group do not depend on the way it is decomposed, which echoes precisely this series' theme of "the atoms of symmetry".

At the end of the "composition series" section we left a key question: peeling a group into a string of atoms, **peeling another way, would we get a different set of atoms?** This section and the next prove the answer, "no". This is the hardest and most thought-demanding stretch of this episode; first we assemble two tools, then complete the proof.

**The theorem to be proved (the Jordan–Hölder theorem)**: **for any finite group $G$, however you peel its composition series, in whatever order, the set of composition factors (atoms) obtained at the end, together with how many times each kind of atom appears, is always the same set** — differing at most in the order of arrangement. In other words, "which symmetry atoms a group breaks into" is a fingerprint **inherent to and unique to** that group, unrelated to how you take it apart. (This is a general theorem that holds **for all finite groups**, not a coincidence of some particular group.)

**First, get a feel for what it says through an example** (the example only helps understanding; it does not count as a proof): take $\mathbb{Z}/6=\{0,1,2,3,4,5\}$ (the 6 hours on a clock face, with the operation "add, then take the remainder mod 6"). It can be peeled all the way down in two different ways:

- Peeling A: $\mathbb{Z}/6\ \triangleright\ \{0,2,4\}\ \triangleright\ \{0\}$. First shrink away $\{0,2,4\}$ (this is a 3-element subgroup $\cong\mathbb{Z}/3$), and the remaining quotient shrinks the two piles "even/odd" each into one point $=\mathbb{Z}/2$; then shrink $\{0,2,4\}$ itself to $\{0\}$, quotient $=\mathbb{Z}/3$. **Atoms: one $\mathbb{Z}/2$, one $\mathbb{Z}/3$.**
- Peeling B: $\mathbb{Z}/6\ \triangleright\ \{0,3\}\ \triangleright\ \{0\}$. First shrink away $\{0,3\}$ (a 2-element subgroup $\cong\mathbb{Z}/2$), and the quotient shrinks the three piles "congruent mod 3" each into one point $=\mathbb{Z}/3$; then shrink $\{0,3\}$ to $\{0\}$, quotient $=\mathbb{Z}/2$. **Atoms: one $\mathbb{Z}/3$, one $\mathbb{Z}/2$.**

Two ways of peeling, and **the atoms obtained are the same set** $\{\mathbb{Z}/2,\ \mathbb{Z}/3\}$ (only in a different order). What J-H says is: **this is by no means just a coincidence of $\mathbb{Z}/6$; it holds for all groups.**

![The two ways of taking Z/6 apart end up with the same set of symmetry atoms {Z/2, Z/3}](/content/images/2026/06/fig_jh_z6.png)

*Figure 9 The two ways of taking Z/6 apart end up with the same set of symmetry atoms {Z/2, Z/3}*

To prove it "for all groups", two tools are needed — two **isomorphism theorems**. This section first explains the first one thoroughly (it is itself a generalization of that little EP2 example of "attaching plus and minus signs"), and later we prepare the second one and then close by induction.

#### Tool one: the first isomorphism theorem

First, using the "sign homomorphism $\operatorname{sgn}$" most familiar from EP2, get clear on three words — **group homomorphism** and its **image** and **kernel** — which will be used throughout what follows.

**A group homomorphism is a "translator".** $\varphi:G\to H$ translates the "language" $G$ into the language $H$. It "preserves the operation" — the translation **does not break the grammar**: in $G$, "first do $a$, then do $b$", translated over = in $H$, "first translate $a$, then translate $b$", and the result is the same.

**Use as the example the translator from EP2 you know best: attaching plus and minus signs, $\operatorname{sgn}$.** It translates $S_3$ (the 6 symmetry actions of the equilateral triangle, $e,r,r^2,a,b,c$) into the group with only two numbers, $\{+1,-1\}$ (operation = multiplying the two numbers): the three **rotations** are translated to $+1$, and the three **flips** to $-1$. Listed one by one:

$$
\operatorname{sgn}(e)=\operatorname{sgn}(r)=\operatorname{sgn}(r^2)=+1,\qquad \operatorname{sgn}(a)=\operatorname{sgn}(b)=\operatorname{sgn}(c)=-1.
$$

It does indeed "preserve the operation" (for example "flip ∘ flip = rotation" corresponds to "$(-1)\times(-1)=+1$"). Keeping our eyes on this translator, let us learn two words.

**Image = the places the translation actually reaches.** Translate all the actions of $S_3$ over; the set made up of the values **actually reached** in the target is called the **image**, written $\operatorname{Im}\varphi$. $\operatorname{sgn}$ actually only puts out $+1$ and $-1$, so

$$
\operatorname{Im}\operatorname{sgn}=\{+1,-1\}.
$$

(Here it happens to **cover the whole** target group $\{+1,-1\}$, which is called **surjective**; if some value were never produced by the translation, the image would not be the whole target.)

**Kernel = those originals that are translated into "the identity" (the translation says nothing at all).** The identity of the target group $\{+1,-1\}$ is $+1$ (multiplying anything by it leaves it unchanged = "saying nothing"). Which actions are translated to $+1$? Look at the table above — the three rotations. So

$$
\ker\operatorname{sgn}=\{e,r,r^2\}=A_3.
$$

**Kernel = "how much information" this translator "loses".** $\operatorname{sgn}$ squeezes 6 actions into 2 signs; **the 3 actions in the kernel $A_3$ are all translated into the same $+1$, and can no longer be told apart from one another** — this is "losing information", and the bigger the kernel, the more is lost. Conversely, **a translator whose kernel is only $\{e\}$ (only "doing nothing" is translated into the identity) loses nothing at all, and different originals are translated into different translations = injective** (example: the "identity translator" that translates each action into itself has kernel $\{e\}$). The kernel of $\operatorname{sgn}$, $A_3$, has 3 elements; it is a translator that "loses quite a lot".

| Concept | English term | What it asks | In $\operatorname{sgn}$ it is |
| --- | --- | --- | --- |
| Image | image, $\operatorname{Im}\varphi$ | Which things in the target group are translated to? | $\{+1,-1\}$ |
| Kernel | kernel, $\ker\varphi$ | Which things in the original group are translated into the identity? | $\{e,r,r^2\}=A_3$ |

**Now connect it to that big theorem.** Keeping our eyes on $\operatorname{sgn}$: kernel $=A_3$ means "**the three rotations in $A_3$ all come out the same when translated (all are $+1$)**". We computed earlier: $S_3$, cut into two blocks by $A_3$ (the three rotations one block, the three flips another), pinched into two points, is the quotient group $S_3/A_3$, whose multiplication is exactly $\mathbb{Z}/2$. And the image $\{+1,-1\}$, as a group, is also $\mathbb{Z}/2$. **Two blocks ↔ two translations, in one-to-one correspondence, with the same skeleton**:

$$
S_3\big/\underbrace{A_3}_{\text{kernel}}\ \cong\ \underbrace{\{+1,-1\}}_{\text{image}}.
$$

> **Here it is $\cong$, not an equals sign $=$**
>
> (it is the earlier $\ker\operatorname{sgn}=A_3$ and $\operatorname{Im}\operatorname{sgn}=\{+1,-1\}$ that use a true equals sign). $=$ governs "literally the same pile of things"; $\cong$ (read "
>
> **isomorphic**
>
> ", covered in EP2) governs "
>
> **as groups, the skeleton of multiplication is exactly the same, only the names differ**
>
> ". Here the left side is two
>
> **points**, "rotation block / flip block", and the right side is two
>
> **numbers**, "$+1$ / $-1$"; literally they are not the same thing, only the skeleton of multiplication is the same — so $\cong$ is used. Keep $=$ (literally the same) and $\cong$ (the same skeleton) apart, and there is no ambiguity.

This phenomenon is **not unique to $\operatorname{sgn}$**; it holds for any translator:

So, given any group homomorphism (translator) $\varphi:G\to H$, we have

$$
G\big/\ker\varphi\ \cong\ \operatorname{Im}\varphi.
$$

**In plain words**: merge the original group by its "kernel" (the pile translated into nothing), and what is left has exactly the same skeleton as "all the translations" — **the translation drops everything it should drop, and what remains is a clean one-to-one correspondence**.

**Why?** The key is a single sentence: **the originals that are translated into the same translation form exactly one coset of the kernel** — what "merging" merges is precisely that.

On $\operatorname{sgn}$ it can be seen very clearly: the whole of what is translated to $+1$ $=\{e,r,r^2\}=A_3=$ the kernel (the coset containing the identity); the whole of what is translated to $-1$ $=\{a,b,c\}=$ another coset of the kernel. **Two translations ↔ two cosets, in one-to-one correspondence.** And the cosets pinched into points are exactly the quotient group $G/\ker$, while the whole of the translations is exactly the image — the two naturally have the same skeleton. Writing this sentence rigorously is the proof:

> Intuition: the elements mapped to the same value form exactly one coset of the kernel, so the quotient group obtained by merging $G$ by the kernel, $G/\ker\varphi$, corresponds one-to-one, and preserving the operation, with all the values taken, $\operatorname{Im}\varphi$. $\operatorname{sgn}$ is a special case of it: $S_3/A_3\cong\{+1,-1\}\cong\mathbb{Z}/2$. The way this theorem is used: when you meet a quotient group $G/N$ that is hard to identify, just build a homomorphism whose kernel is exactly $N$, and $G/N$ is isomorphic to its image — the second isomorphism theorem below uses it in exactly this way.

---

### Finishing the proof of Jordan–Hölder by diamond induction

Earlier we prepared tool one (the first isomorphism theorem). This section prepares tool two and one small fact, and then proves J-H completely.

#### Tool two: the second isomorphism theorem

**Statement**: Let $A$, $B$ both be subgroups of $G$, and let $B$ be **normal** in $G$. Then $A\cap B$ is normal in $A$, and moreover

$$
AB/B\ \cong\ A/(A\cap B).
$$

> ⚠️
>
> **$AB$ is not a direct product; let us be clear about that first.**
>
> $AB$ means the set made up of all the results obtained by "taking an element of $A$ and an element of $B$ and
>
> **multiplying them in the group $G$**
>
> ", $\{a\circ b:a\in A,\,b\in B\}$ — its elements are all, inside $G$,
>
> **ordinary elements**, and as a whole it is a subset of $G$ (and, when $B$ is normal, a subgroup too). Whereas the
>
> **direct product**
>
> $A\times B$ (the kind in $V_4=\mathbb{Z}/2\times\mathbb{Z}/2$ earlier) is a completely different thing: its elements are
>
> **pairs**
>
> $(a,b)$, and it is a newly constructed group. The two also differ in size — $|AB|=\dfrac{|A|\,|B|}{|A\cap B|}$, while $|A\times B|=|A|\,|B|$. What the second isomorphism theorem uses here is the
>
> **product set $AB$**
>
> (living inside $G$), not the direct product.
>
> **Proof**: apply the first isomorphism theorem to the map $\psi:A\to AB/B,\ a\mapsto aB$, and it follows — $\psi$ is a surjective homomorphism, and its kernel is exactly $A\cap B$.

#### A small fact: the subgroup at each step of a composition series is "maximal normal"

A composition series requires each quotient to be a simple group. There is an equivalent way of saying this, which the induction will need:

**Small fact**: If the quotient group $G/N$ is a **simple group**, then $N$ is a **maximal normal subgroup** of $G$ — meaning that between $N$ and $G$ **no other** normal subgroup **can be squeezed in** (apart from $N$, $G$ themselves).

> **Proof**
>
> (only the direction needed): if there is a normal subgroup $M$ squeezed in between, $N\subsetneq M\subsetneq G$, then $M/N$ is a nontrivial proper normal subgroup of $G/N$, contradicting $G/N$ being a simple group. So $N$ must be maximal normal.

#### The induction: finishing the proof of Jordan–Hölder

The tools are all here. We want to prove: **for any finite group $G$, any two composition series of it give the same set of atoms (composition factors)** (with multiplicities, differing at most in arrangement).

**Use "induction on $|G|$" — that is, assume "it already holds for every group smaller than $G$", and prove that it holds for $G$ too.** **Base case**: when $|G|=1$ (the group has only $e$), there is only the one trivial composition series, nothing to compare, and it holds automatically. Below, let $|G|>1$, and assume it already holds for groups smaller than it. Let $G$ have two composition series

$$
G=G_0\triangleright G_1\triangleright G_2\triangleright\cdots\{e\},\qquad G=H_0\triangleright H_1\triangleright H_2\triangleright\cdots\{e\}.
$$

Their **first atoms** are $G/G_1$ and $G/H_1$ respectively. There are two cases.

**Case one: the two chains peel off the same subgroup at the first step ($G_1=H_1$).** Then from the second step on, both chains are composition series of **the same smaller group $G_1$**. $G_1$ is smaller than $G$, so **by the induction hypothesis** the atoms of these two chains of it are the same set. Adding the common atom at the very top, $G/G_1$, the whole thing matches. ✓

**Case two: what is peeled off at the first step is not the same ($G_1\ne H_1$).** This is the key step, and it relies on that **diamond diagram**:

![The diamond of the Jordan–Hölder induction: G at the top, the two maximal normal subgroups G₁/H₁ on the two sides, their intersection K at the bottom; the second isomorphism theorem gives that the quotients on opposite sides are isomorphic to each other, G/G₁≅H₁/K, G/H₁≅G₁/K](/content/images/2026/06/fig_jh_diamond.png)

*Figure 10 The diamond of the Jordan–Hölder induction: G at the top, the two maximal normal subgroups G₁/H₁ on the two sides, their intersection K at the bottom; the second isomorphism theorem gives that the quotients on opposite sides are isomorphic to each other, G/G₁≅H₁/K, G/H₁≅G₁/K*

- Since $G/G_1$, $G/H_1$ are both simple groups, by the **small fact** above, $G_1$ and $H_1$ are both **maximal normal subgroups** of $G$ (the two below the top vertex $G$ in the figure).
- Look at their product $G_1H_1$. First, it **is a normal subgroup** (the product of two normal subgroups is still normal: $g(G_1H_1)g^{-1}=(gG_1g^{-1})(gH_1g^{-1})=G_1H_1$). Next, it **properly contains** $G_1$ — this step needs care: knowing only $H_1\ne G_1$ **is not enough** (in case $H_1$ were a proper subset of $G_1$, it would not bring a single new element, and $G_1H_1$ would still be $G_1$). The real reason is **the maximality of $H_1$**: suppose $H_1\subsetneq G_1$; then $H_1\subsetneq G_1\subsetneq G$ squeezes a normal subgroup $G_1$ between $H_1$ and $G$, contradicting "$H_1$ is maximal normal (nothing else can be squeezed in between)". So $H_1\not\subseteq G_1$ — there **really is** an element in $H_1$ that is not in $G_1$, and it adds to $G_1H_1$ cosets outside $G_1$, so $G_1H_1\supsetneq G_1$. Then, using **the maximality of $G_1$** (between $G_1$ and $G$ no other normal subgroup can be squeezed in either), the $G_1H_1$ squeezed in between can only be $G$ itself. (Top of the figure: $G_1H_1=G$.)
- Let $K=G_1\cap H_1$ (bottom of the figure: the intersection of the two). Apply **tool two (the second isomorphism theorem)** to the two diagonals of this diamond:
  $$
  \underbrace{G/G_1}_{\text{upper-left edge}}=G_1H_1/G_1\cong \underbrace{H_1/K}_{\text{lower-right edge}},\qquad \underbrace{G/H_1}_{\text{upper-right edge}}\cong \underbrace{G_1/K}_{\text{lower-left edge}}.
  $$
  **The two quotients on opposite sides of the diamond are isomorphic to each other.** This is the core of the whole proof.
- Since $G/G_1$, $G/H_1$ are simple, by the isomorphisms just obtained $H_1/K$, $G_1/K$ are simple too — and then by the small fact, $K$ is maximal normal both in $G_1$ and in $H_1$. For $K$, take any composition series $K\triangleright\cdots\triangleright\{e\}$.

So, attaching any composition series to $K$, we get two new chains passing through $K$, $G\triangleright G_1\triangleright K\triangleright\cdots$ and $G\triangleright H_1\triangleright K\triangleright\cdots$: by the diagonal isomorphisms, the pairs of atoms at the top of the two are the same up to renaming, and below them follows the same $K$ chain, so their atoms are the same set. Then, using the induction hypothesis on each, align original chain A with "the new chain via $G_1$", and original chain B with "the new chain via $H_1$", equal all the way:

$$
\text{original chain A}\ \overset{\text{induction}}{=}\ \text{via }G_1\ \overset{\text{diagonal isomorphism}}{=}\ \text{via }H_1\ \overset{\text{induction}}{=}\ \text{original chain B}.
$$

The atoms of the two original composition series are the same set. **The Jordan–Hölder theorem is proved.** $\blacksquare$

> **Looking back, a one-sentence summary of the cleverness here**: the two ways of peeling diverge at the first step ($G_1\ne H_1$), but their
>
> **intersection $K$**
>
> joins the two paths together again; the second isomorphism theorem guarantees that when "coming down around the left" and "coming down around the right" meet at $K$,
>
> **the atoms picked up along the way are the same set, only with their order swapped**
>
> . That example of $\mathbb{Z}/6$ ($\{0,2,4\}$ and $\{0,3\}$ diverging, meeting at $\{0\}$, the atoms $\{\mathbb{Z}/2,\mathbb{Z}/3\}$ swapped) is the smallest physical instance of this diamond.
>
> **Full proofs**
>
> — for the first and second isomorphism theorems and the induction of the Jordan–Hölder theorem, see Dummit–Foote, *Abstract Algebra*, 3rd ed. (Wiley 2004) §3.3–§3.4; the historical source for composition series and the Jordan–Hölder theorem is Jordan 1870, *Traité des substitutions*.

**With this, "which symmetry atoms a group breaks into" is its unique fingerprint — proved.** With this measuring stick in hand, the next section (§3) returns to the atom that stands in the way: what makes $A_5$ impossible to break apart?

---

## §3 Why A₅ is an atom

### What makes A₅ impossible to break apart (part 1 · conjugation → conjugacy classes → normal = union of whole classes)

With J-H's measuring stick of "atoms are unique" in hand, we return to the atom that stands in the way, $A_5$. In EP2 we **asserted** that it cannot be broken apart; now we must really **prove** it.

> **First, the lettering convention for this stretch made clear**: from here on, $A_5$ is
>
> **the even permutations of 5 objects**, and we call these 5 objects $a,b,c,d,e$ (not $1,2,3,4,5$; numbers are easily confused with "counts/orders"). Permutations are written as cycles: $(ab)$ means "swap $a,b$ and leave the rest alone", $(abc)$ means "$a\to b\to c\to a$", $(abcde)$ means the 5 arranged in a ring and rotated. (Note: in the $S_3$ of the EP2 little lesson, $a,b,c$ were the names of "three flip actions"; here $a,b,c,d,e$ are "the 5 objects being scrambled" — different contexts, do not mix them up.)

**The theorem to be proved**: $A_5$ ($|A_5|=60$) **has no nontrivial normal subgroup** — apart from $\{e\}$ and itself, no third normal subgroup that can be "shrunk away as a whole block" can be found. (So it cannot be broken apart = a simple group.)

To prove it we need a new tool that EP2 did not formally cover — **conjugation** and **conjugacy classes**. Below we start from a familiar small group.

#### Conjugation: changing to a different numbering, looking at the same action

EP2 said that a subgroup $N$ being **normal** means "moving it left and right gives the same thing": take any **element of the group $g$** ($g$ is just any action/permutation in this group; whichever one you pick is fine), and we always have $gN=Ng$. Right-multiplying both sides by $g^{-1}$ gives an equivalent way of writing it:

$$
gNg^{-1}=N.
$$

The operation that pops up here, "$x\mapsto gxg^{-1}$" (take the $g$ you picked and sandwich $x$ between it front and back), is called **using $g$ to conjugate $x$**. What is the intuition? **$g$ amounts to giving all the objects a new set of numbers, and $gxg^{-1}$ is "under the new numbering, looking again at the same action $x$".**

> **It is clearest on permutations — the role of $g$ is exactly that "renumbering".**
>
> Take a permutation as an example: $\sigma=(a\,b)$, meaning "swap $a,b$ and leave the rest alone". Now pick a $g$ to serve as the rule for renumbering — for example $g=(a\,b\,c)$, whose effect is to
>
> **rename $a$ as $b$, rename $b$ as $c$, rename $c$ as $a$**
>
> (this is $g(a)=b,\ g(b)=c,\ g(c)=a$). Then "using this $g$ to conjugate $\sigma$" is
>
> **renaming each letter in the cycle of $\sigma$ once according to $g$**:
>
> $$
> g\,\underbrace{(a\ \ b)}_{\sigma=\text{swap }a,b}\,g^{-1}\ =\ \big(\ \underbrace{g(a)}_{=\,b}\quad \underbrace{g(b)}_{=\,c}\ \big)\ =\ (b\ \ c).
> $$
>
> In plain words: originally it was "swap $a,b$"; after the two names $a,b$ are changed according to $g$ into $b,c$, it becomes "swap $b,c$".
>
> **The same kind of action (both are a single swap), only with a different set of names for the objects.**
>
> *(If you are not reassured, you can check $g\sigma g^{-1}$ point by point: acting on $b$ — first $g^{-1}$ turns $b$ back into $a$, then $\sigma$ swaps $a$ into $b$, then $g$ renames $b$ as $c$; net effect $b\mapsto c$; likewise $c\mapsto b$, $a\mapsto a$, which together are exactly $(b\ c)$.)*
>
> **The general rule**
>
> (remember this one): $g\,(x_1\,x_2\,\cdots\,x_k)\,g^{-1}=\big(g(x_1)\ g(x_2)\ \cdots\ g(x_k)\big)$ — conjugation is "renaming the letters in the cycle uniformly by $g$",
>
> **it does not change the shape of the cycle, it only changes the frame of reference**
>
> .

#### Conjugacy classes: a family of actions that "coincide with each other once the numbering is changed"

Conjugate an action $\sigma$ by each of **all** the $g$ in the group (with the renaming rule of the previous section); all the results together make up a **conjugacy class** — a family of actions that "can coincide with each other as long as the objects are given a different numbering".

**First, bring conjugacy classes down to a concrete example on $S_3$.** Write $S_3$ as all 6 permutations of 3 objects $a,b,c$: the identity $e$, three swaps $(ab),(ac),(bc)$, two 3-cycles $(abc),(acb)$. Conjugate each one by all $g$, and you will find that they **automatically fall into three classes according to "whether the shape is the same"**:

- $\{e\}$: however $e$ is conjugated it is still $e$; it is a class of its own.
- $\{(ab),(ac),(bc)\}$: the three swaps are conjugate to each other — the previous section computed $(abc)\,(ab)\,(abc)^{-1}=(bc)$; changing to another $g=(bc)$ can also turn $(ab)$ into $(ac)$ ($(bc)\,(ab)\,(bc)^{-1}=(ac)$). The three swaps are one class.
- $\{(abc),(acb)\}$: the two 3-cycles are conjugate to each other, one class.

$6=1+3+2$: $S_3$ splits into **3 conjugacy classes**, and **exactly according to "shape"**. This "shape" can be stated precisely, and so there is a criterion. First let us state the definitions of two words clearly.

**Definition (cycle type).** Fix $n$ objects. Any permutation can be broken **uniquely** into several mutually non-overlapping cycles (EP2 used this; an object that does not move counts as a **cycle of length 1**). The **cycle type** of a permutation is the shape formed by **the lengths and numbers of its cycles** after it is broken into disjoint cycles — looking only at "how many cycles, and how long each is", not at which particular letters (counting the objects that do not move as cycles of length 1, the lengths of all the cycles always add up to the total number of objects $n$). Examples (on 5 objects): the shape of $(ab)$ is "one swap + three fixed points"; $(ab)(cd)$ is "two swaps + one fixed point"; $(abc)$ is "one 3-cycle + two fixed points". — The "swap / 3-cycle / fixed point" here all describe **the lengths and numbers of cycles**, not which particular objects (the objects are always the letters $a,b,c,d,e$).

**Definition (conjugate, as a relation between two permutations).** To say that $\sigma$ and $\tau$ are **conjugate** in a group $G$ means: **there exists in the group a renaming $g\in G$ such that $g\sigma g^{-1}=\tau$.** In plain words, "changing to a different numbering can turn $\sigma$ into $\tau$". ($g\sigma g^{-1}$ is the conjugation operation defined in the previous section; now we give the fact "$\sigma$ can be turned into $\tau$ in this way" the name "conjugate".)

**First, set out the "renaming rule" we will need as a named fact** (the previous section gave it; here we make clear why it is true, so that this section is self-contained):

> **Renaming rule**: $g\,(x_1\,x_2\,\cdots\,x_k)\,g^{-1}=\big(g(x_1)\ g(x_2)\ \cdots\ g(x_k)\big)$; with several cycles, rename each one this way.
>
> *Why*: under the convention that the right one is done first, $g\sigma g^{-1}$ acting on $g(x)$ = first $g^{-1}$ goes back to $x$, then $\sigma$ sends it to $\sigma(x)$, then $g$ sends it to $g(\sigma(x))$; that is, it sends $g(x)$ to $g(\sigma(x))$. $\sigma$ originally sends $x$ to $\sigma(x)$, so $g\sigma g^{-1}$ is nothing more than "renaming every letter in $\sigma$ according to $g$" — the shape has not moved at all.

**Criterion (in the full symmetric group $S_n$): $\sigma$ and $\tau$ are conjugate $\iff$ they have the same cycle type.** The two directions are proved separately.

**($\Rightarrow$ conjugate ⟹ same type; this half holds in any group.)** Let $\tau=g\sigma g^{-1}$. By the renaming rule, $\tau$ just renames the letters in each cycle of $\sigma$ according to $g$: a cycle of length $k$ after renaming is still of length $k$, and the number of cycles, their respective lengths, even the number of fixed points — not one of them has changed. So $\tau$ and $\sigma$ have the same cycle type.

**($\Leftarrow$ same type ⟹ conjugate; this half needs "the renaming $g$ to lie in the group".)** Let $\sigma,\tau$ have the same cycle type. Pair up the cycles on the two sides by length, and align them position by position: match the first letter in some cycle of $\sigma$ to the first letter in the corresponding cycle of $\tau$, the second to the second… **the letters that $\sigma$ fixes are also matched to the letters that $\tau$ fixes**. Because the two sides have the same cycle type (fixed points included, the lengths add up to $n$ on both), this alignment matches $\sigma$'s $n$ letters with $\tau$'s $n$ letters **one to one, with nothing repeated and nothing missed** — so this "letter to letter" correspondence is a **bijection** on $n$ objects, that is, a genuine permutation $g$. By the renaming rule, it gives exactly $g\sigma g^{-1}=\tau$. In $S_n$, $g$ is just some permutation of these $n$ objects, and **necessarily belongs to $S_n$**, so $\sigma,\tau$ are conjugate in $S_n$. (Note: such a $g$ **exists, but is in general not unique** — changing the starting point at which each cycle is aligned, or changing how cycles of equal length are paired, gives another legitimate $g$. This point will be needed later for $A_5$.) **Proved.** $\blacksquare$

**Worked examples (go through constructing the $g$ for ⟸ twice).** 1. $\sigma=(ab)$, $\tau=(bc)$ (the same type, both one swap + one fixed point). Align: $a\to b$, $b\to c$; the remaining letter that $\sigma$ fixes, $c$, can only be matched with the letter that $\tau$ fixes, $a$, that is, $c\to a$. Together $g=(abc)$. Substitute: $g\,(ab)\,g^{-1}=\big(g(a)\ g(b)\big)=(b\,c)=\tau$ ✓. 2. A longer one, to see "aligning starting points + fixed points" clearly: $\sigma=(abc)$, $\tau=(bcd)$ (on 4 objects $a,b,c,d$, the same type, both one 3-cycle + one fixed point). Align $a\to b,\ b\to c,\ c\to d$; the letter $\sigma$ fixes, $d$, is matched with the letter $\tau$ fixes, $a$, that is, $d\to a$. Together $g=(abcd)$. Substitute: $g\,(abc)\,g^{-1}=\big(g(a)\ g(b)\ g(c)\big)=(b\,c\,d)=\tau$ ✓.

So **in $S_n$, conjugacy classes = exactly the classification by cycle type**; that is where those three classes of $S_3$, $1+3+2$, come from.

> ⚠️
>
> **Take special note: once inside a subgroup (such as the $A_5$ we want to prove things about), this criterion changes.**
>
> The step "same type ⟹ conjugate" requires "the renaming $g$ to be in the group". But in $A_5$, those $g$ that can rename two permutations of the same type onto each other
>
> **might all be odd permutations, with not a single one in $A_5$**
>
> — in that case the same cycle type in $A_5$
>
> **splits into more than one**
>
> conjugacy class. (More precisely: it really splits only when
>
> **no even permutation at all**
>
> can rename the two onto each other; this precise judgment — which in fact amounts to looking at whether the "centralizer" of $\sigma$ consists entirely of even permutations — is left until later in this section, where it is worked out with centralizers.)
>
> **The 24 5-cycles of $A_5$ split in exactly this way, into two classes of 12 each**
>
> . So the conjugacy classes of $A_5$
>
> **are not**
>
> the 4 classes $\{1,15,20,24\}$ given by cycle type, but
>
> **5 classes**
>
> $\{1,15,20,12,12\}$. This is, in the whole $A_5$ proof,
>
> **the most critical point**: overlook one class, and the case-by-case check later will miss a case, and the proof will not be rigorous.

#### The key step: a normal subgroup = several whole classes put together

Now connect conjugation and normality. Look back at the definition of normal, $gNg^{-1}=N$ — what it says is "after each element of $N$ — call it $x$ — is renamed (conjugated) into $gxg^{-1}$, the whole of $N$ is left untouched". This implies a very strong conclusion:

> **As soon as a normal subgroup $N$ contains some action $x$, it is forced to contain all the conjugates of $x$ too (that is, the whole conjugacy class that $x$ is in).**
>
> *Why*: normality requires $gxg^{-1}$ (for
>
> **every**
>
> $g$) to still land in $N$; and what $x$ sweeps out when conjugated by all $g$
>
> **is exactly the conjugacy class of $x$**
>
> . So containing $x$ means containing its whole class.

**See what this sentence means on $S_3$.** Suppose a normal subgroup $N$ contains the swap $(ab)$. By the statement above, $N$ is **forced** to take in the whole conjugacy class of $(ab)$, $\{(ab),(ac),(bc)\}$ (not one of the three swaps may be missing). Adding the $e$ it must contain, $N$ has at least these **4**: $\{e,(ab),(ac),(bc)\}$. But $4\nmid 6$ (Lagrange: the order of a subgroup must divide the order of the group, $6$)! So such an $N$ **cannot stop at 4**, and can only expand all the way to fill the whole of $S_3$. Conclusion: **in $S_3$, as soon as a normal subgroup contains one swap, it has to be the whole of $S_3$.**

Conversely, $A_3=\{e,(abc),(acb)\}$ is a **proper, legitimate** normal subgroup — it is exactly "the class of $\{e\}$ + the class of 3-cycles", **two whole classes put together** ($1+2=3$, and $3\mid6$ ✓, not violating Lagrange). **The "recipe" for a normal subgroup is: put it together from whole conjugacy classes, and the total must also divide the order of the group.** In general:

$$
\boxed{\text{Any normal subgroup is a union of several complete conjugacy classes (and always contains the class formed by }e\text{ alone).}}
$$

This turns the hard job of "finding normal subgroups" into "**choosing several complete conjugacy classes to put together, while also satisfying Lagrange (the total divides the order of the group)**" — and how big each class is, and how many classes there are in all, can be counted. Later in this section we count the 5 conjugacy classes of $A_5$, list all 60 elements, and then put them together and check in this way, concluding that "$A_5$, apart from $\{e\}$ and itself, has no other normal subgroup = cannot be broken apart".

---

### What makes A₅ impossible to break apart: lay out the 60 elements and check them class by class

Earlier we got a measuring stick: **any normal subgroup is a union of several complete conjugacy classes (and always contains the class of $e$); and by Lagrange, its size must divide the order of the group.** Now we measure $A_5$ with this stick — first count its conjugacy classes and lay out all 60 elements, then check them one by one.

#### 1. The 60 elements of $A_5$, all listed by the 5 conjugacy classes

$A_5$ is all the **even** permutations of the 5 objects $a,b,c,d,e$ (those built from an even number of swaps), 60 in all. By conjugacy class they fall into 5 classes (the first 3 classes are just by shape; the 5-cycles need care, see "2. Centralizers" below):

![The 5 conjugacy classes of A₅ counted directly: identity 1, double transpositions 15, 3-cycles 20, 5-cycles split into 12+12, total 1+15+20+12+12=60](/content/images/2026/06/fig_class_count.png)

*Figure 11 The 5 conjugacy classes of A₅ counted directly: identity 1, double transpositions 15, 3-cycles 20, 5-cycles split into 12+12, total 1+15+20+12+12=60*

**Class 1 · the identity $e$ (1 element).** Nothing moves.

**Class 2 · double transpositions of type $(ab)(cd)$ (15 elements).** Two groups, each swapping one pair, with one object left fixed. How to count: first choose which object is fixed (5 ways); the remaining 4 can be divided into two pairs in 3 ways, $5\times3=15$. (Each is two swaps = an even permutation.) The full list:

$$
(ab)(cd)\ \ (ab)(ce)\ \ (ab)(de)\ \ (ac)(bd)\ \ (ac)(be)\ \ (ac)(de)\ \ (ad)(bc)\ \ (ad)(be)
$$

$$
(ad)(ce)\ \ (ae)(bc)\ \ (ae)(bd)\ \ (ae)(cd)\ \ (bc)(de)\ \ (bd)(ce)\ \ (be)(cd)
$$

**Class 3 · 3-cycles of type $(abc)$ (20 elements).** Three objects rotate, two are left fixed. How to count: choosing 3 objects has $\binom{5}{3}=10$ ways, and each group arranged in a ring has 2 directions ($(abc)$ and $(acb)$), $10\times2=20$. (One 3-cycle = two swaps = an even permutation.) The full list:

$$
(abc)\ (abd)\ (abe)\ (acb)\ (acd)\ (ace)\ (adb)\ (adc)\ (ade)\ (aeb)
$$

$$
(aec)\ (aed)\ (bcd)\ (bce)\ (bdc)\ (bde)\ (bec)\ (bed)\ (cde)\ (ced)
$$

**Classes 4 and 5 · 5-cycles of type $(abcde)$ (24 in all, but split into two classes of 12 each).** Five objects arranged in a ring and rotated, with no fixed point. How to count: arranging 5 objects in a ring has $5!$ arrangements, but the same ring written from its 5 starting points is the same, $5!/5=24$. (One 5-cycle = four swaps = an even permutation.) **These 24 are not one class, but split into two classes of 12 each** — why they split, and how they divide, is exactly the ⚠️ left earlier, worked out precisely below with "centralizers". The two classes of 12 each, listed in full (the results are laid out first; the proof of the split is below in "2. Why the 5-cycles split into 12+12"):

**Class ①** (containing $(abcde)$ and its inverse $(aedcb)$):

$$
(abcde)\ (abdec)\ (abecd)\ (acbed)\ (acdbe)\ (acedb)\ (adbce)\ (adceb)\ (adebc)\ (aebdc)\ (aecbd)\ (aedcb)
$$

**Class ②** (containing $(abcde)^2=(acebd)$ and $(abcde)^3=(adbec)$):

$$
(abced)\ (abdce)\ (abedc)\ (acbde)\ (acdeb)\ (acebd)\ (adbec)\ (adcbe)\ (adecb)\ (aebcd)\ (aecdb)\ (aedbc)
$$

Total $1+15+20+12+12=60$ ✓, exactly all the elements of $A_5$.

![The icosahedron rotating in turn about its three kinds of symmetry axes, demonstrating the 5 conjugacy classes of A₅ one by one: rotation by 180° about edge axes (15), by 120° about face-center axes (20), by 72° and 144° about vertex axes (12 each), total 1+15+20+12+12=60. Front edges are drawn solid and back edges dashed, flipping in real time as it rotates (continuing EP2's hidden-line drawing)](/content/images/2026/06/fig_a5_rot_classes.gif)

*Figure 12 The icosahedron rotating in turn about its three kinds of symmetry axes, demonstrating the 5 conjugacy classes of A₅ one by one: rotation by 180° about edge axes (15), by 120° about face-center axes (20), by 72° and 144° about vertex axes (12 each), total 1+15+20+12+12=60. Front edges are drawn solid and back edges dashed, flipping in real time as it rotates (continuing EP2's hidden-line drawing)*

#### 2. Why the 5-cycles split into $12+12$: centralizers

To compute precisely how big each class is, we need a new tool.

**New notation · the centralizer.** For an action $\sigma$, its **centralizer** $C(\sigma)$ is the set made up of all the actions in the group that **commute** with $\sigma$:

$$
C(\sigma)=\{\,g\in G:\ g\sigma=\sigma g\,\}.
$$

In plain words, being the same "whether done before or after $\sigma$" is what defines these $g$. It is a **subgroup**: $e$ is obviously in it; if $g,h$ both commute with $\sigma$, then $(gh)\sigma=g(h\sigma)=g(\sigma h)=(g\sigma)h=(\sigma g)h=\sigma(gh)$, so the product commutes too; and if $g\sigma=\sigma g$, left-multiplying and right-multiplying both sides by $g^{-1}$ gives $\sigma g^{-1}=g^{-1}\sigma$, so $g^{-1}$ also commutes with $\sigma$. Closed, contains $e$, contains inverses: all three conditions are met, and $C(\sigma)$ is a subgroup. ✓

**The conjugacy-class size formula: $\big|\,\sigma\text{'s conjugacy class}\,\big|=\dfrac{|G|}{|C(\sigma)|}$.**

> *Proof*: regard the conjugacy class of $\sigma$ as all the values of the map $g\mapsto g\sigma g^{-1}$. Two elements $g,h$ give the same conjugate value $g\sigma g^{-1}=h\sigma h^{-1}$ if and only if $(h^{-1}g)\,\sigma\,(h^{-1}g)^{-1}=\sigma$, that is, $h^{-1}g\in C(\sigma)$, which is to say that $g,h$ fall in
>
> **the same left coset**
>
> of $C(\sigma)$; conversely, the $g$ in the same left coset give the same conjugation result too. So "different conjugation results" and "the left cosets of $C(\sigma)$" are in
>
> **one-to-one correspondence**, equal in number $=|G|/|C(\sigma)|$ (a direct application of the coset machinery of Lagrange in §2 earlier). Proved ✓

**Computing the centralizer of the 5-cycle $\sigma=(abcde)$.** First look in the full symmetric group $S_5$. By the earlier criterion (in $S_n$, conjugate ⟺ same cycle type), the 24 5-cycles are **one and the same** conjugacy class in $S_5$; the conjugacy-class size formula is an equation and can be used in reverse — substituting the known class size 24 back in gives $|C_{S_5}(\sigma)|=|S_5|/24=120/24=5$. On the other hand, the things that commute with $\sigma$ include at least the 5 powers of $\sigma$ itself, $e,\sigma,\sigma^2,\sigma^3,\sigma^4$ (an action and its own powers of course give the same result whichever is done first); and these 5 are **all different from one another** — a 5-cycle moves each object one place along, and must be done 5 times in a row before every object is back in its own place ($\sigma^5=e$); with fewer than 5 times not all are back. 5 mutually different powers exactly fill that 5-element centralizer, so

$$
C_{S_5}(\sigma)=\langle\sigma\rangle\ (\text{i.e. }\sigma\text{'s powers all together, as a cyclic subgroup})=\{e,\sigma,\sigma^2,\sigma^3,\sigma^4\}.
$$

These 5 powers are **all even permutations** (a 5-cycle is even, and its powers are all even too), all in $A_5$. And the elements in $A_5$ that commute with $\sigma$ are precisely those "that in $S_5$ commute with $\sigma$ and also happen to fall in $A_5$", that is, $C_{A_5}(\sigma)=C_{S_5}(\sigma)\cap A_5$; since $C_{S_5}(\sigma)=\langle\sigma\rangle$ already lies entirely within $A_5$, we have $C_{A_5}(\sigma)=\langle\sigma\rangle$, $|C_{A_5}(\sigma)|=5$.

**So for each 5-cycle $\sigma$, its conjugacy class in $A_5$ has size $=\dfrac{|A_5|}{|C_{A_5}(\sigma)|}=\dfrac{60}{5}=12$.** Now to close: the 24 5-cycles were originally one whole class in $S_5$, but once in $A_5$, the conjugacy class of each 5-cycle has only 12 members, smaller than 24 — $A_5$ can no longer merge these 24 into one class, so this class **splits** in $A_5$; and since each piece has exactly 12, $24=12+12$, it **splits into exactly two classes**. Proved ✓ (Which two classes: $\sigma=(abcde)$ and its inverse $\sigma^4=(aedcb)$ are in the same class; $\sigma^2=(acebd)$ and $\sigma^3=(adbec)$ are in the other class. Intuitively, the renamings that could in $S_5$ "merge these two classes by renaming" — those $g$ — are all odd permutations, and there are none in $A_5$ — this is exactly the concrete form, on 5-cycles, of what the earlier ⚠️ said: "the renaming $g$ may be an odd permutation".)

![On a single 5-fold vertex axis, first rotating 72° and then 144° separates two rotation families, ±72° and ±144°; six such axes each give two families, 12 per family, so the 24 5-cycles that in S₅ belonged to one whole class split into 12+12 in A₅](/content/images/2026/06/fig_a5_rot_split.gif)

*Figure 13 On a single 5-fold vertex axis, first rotating 72° and then 144° separates two rotation families, ±72° and ±144°; six such axes each give two families, 12 per family, so the 24 5-cycles that in S₅ belonged to one whole class split into 12+12 in A₅*

#### 3. Checking one by one: $A_5$ has no proper normal subgroup

Everything is ready. The sizes of the 5 conjugacy classes of $A_5$ are $1,15,20,12,12$. By the measuring stick from earlier: any normal subgroup $N$ is put together as "the class of $e$ + several whole classes chosen from $\{15,20,12,12\}$", and $|N|$ must divide 60. Compute $|N|$ for every way of choosing and check them one by one:

| Classes chosen (all contain $e$) | $\lvert N\rvert$ | $60 \bmod \lvert N\rvert$ | Divides 60? |
| --- | --- | --- | --- |
| only $e$ | 1 | 0 | ✅ yes ($N=\{e\}$) |
| $e+12$ | 13 | 8 | ✗ |
| $e+15$ | 16 | 12 | ✗ |
| $e+20$ | 21 | 18 | ✗ |
| $e+12+12$ | 25 | 10 | ✗ |
| $e+15+12$ | 28 | 4 | ✗ |
| $e+20+12$ | 33 | 27 | ✗ |
| $e+15+20$ | 36 | 24 | ✗ |
| $e+15+12+12$ | 40 | 20 | ✗ |
| $e+20+12+12$ | 45 | 15 | ✗ |
| $e+15+20+12$ | 48 | 12 | ✗ |
| $e+15+20+12+12$ | 60 | 0 | ✅ yes ($N=A_5$) |

![The 12 candidate orders of a normal subgroup hitting, one by one, the](/content/images/2026/06/fig_divisor_gate.gif)

*Figure 14 The 12 candidate orders of a normal subgroup hitting, one by one, the divisibility gate "60 mod |N| = 0?": each first shows its remainder 60 mod N; those that divide (1 and 60) light up green and pass, those that do not (13, 16, 21, 25, 28, 33, 36, 40, 45, 48) turn red and are blocked — in the end only two green gates are left, N=1 ({e}) and N=60 (the whole of A₅): A₅ has no proper normal subgroup*

Among the 12 candidate sizes, **only $|N|=1$ (choosing nothing, $N=\{e\}$) and $|N|=60$ (choosing everything, $N=A_5$) divide 60**; the other 10 ($13,16,21,25,28,33,36,40,45,48$) do not divide 60, and the corresponding normal subgroups **cannot possibly exist** — this is exactly where Lagrange rules out every possibility cleanly. (Note: here one must use **the true 5 classes** $\{1,15,20,12,12\}$; if one wrongly takes the 5-cycles as one class and uses the wrong 4 classes $\{1,15,20,24\}$, one would miss candidates such as $|N|=13,28,33,48$ that "choose half the 5-cycles" — although these also do not divide 60 and the conclusion happens not to change, the argument would be incomplete. This is why that $12+12$ earlier had to be worked out clearly.)

#### 4. Conclusion

$A_5$, apart from $\{e\}$ and itself, **has no other normal subgroup** — by definition, $A_5$ is a **simple group**, a "symmetry atom" that cannot be broken apart. Moreover it has 60 elements and is not an "obvious" simple group like a cyclic group of prime order; it is **the smallest non-commutative simple group**.

It is precisely this atom, both unbreakable and "non-solvable", stuck in the composition series of $S_5$, that became the root of the quintic equation having no general solution in radicals (this line continues in §4/§5). **A₅ is a simple group — proved.** $\blacksquare$

---

## §4 A little lesson in field theory: translating root extraction into groups

### A little lesson in field theory (the foundation): what a "field" is, and how to measure its size

The EP2 little lesson in group theory taught us to **take groups apart**; §2/§3 of this episode then took A₅ apart into an "atom that cannot be broken apart". But "can the quintic equation be solved by radicals" is a question about **numbers** — whether, starting from the coefficients, by repeatedly adding, subtracting, multiplying, dividing and then extracting roots, the roots can be written out. To make "root extraction" and "radicals" clear, we first need a language for describing "worlds made up of numbers": **fields**.

#### 1. Fields: number systems in which addition, subtraction, multiplication and division all work

**Definition (field).** A **field** $F$ is a set of numbers, with two operations $+$, $\times$, satisfying the following (all rules we have long been used to for "ordinary numbers"):

- **Addition**: closed under $+$ (the sum of two numbers is still in $F$), associative, commutative; there is a zero element $0$ ($a+0=a$); each $a$ has an opposite $-a$ ($a+(-a)=0$).
- **Multiplication**: closed under $\times$, associative, commutative; there is an identity element $1\ne 0$ ($a\cdot 1=a$); **each nonzero element $a$ has a multiplicative inverse $a^{-1}$** ($a\cdot a^{-1}=1$).
- **Distributive law**: $a(b+c)=ab+ac$.

In plain words: **in a field, the four arithmetic operations — addition, subtraction, multiplication, division (by a nonzero divisor) — all work, and never go out of bounds.**

**Examples**: the rational numbers $\mathbb{Q}$, the real numbers $\mathbb{R}$, the complex numbers $\mathbb{C}$ are all fields. **Counterexample**: the integers $\mathbb{Z}$ are **not** a field — addition, subtraction and multiplication all work, but **division does not**: $2\in\mathbb{Z}$, but the multiplicative inverse of $2$, $\tfrac12\notin\mathbb{Z}$. Lacking the condition "nonzero elements have inverses", $\mathbb{Z}$ does not qualify as a field.

(Compare with EP2: in the little lesson in group theory, the elements of a group were "**actions**"; here the elements of a field are "**numbers**". Two languages, which will be joined later. This episode uses only fields inside $\mathbb{C}$, and all the "numbers" are familiar complex numbers.)

#### 2. Field extensions: seeing the big field as a "vector space" over the small field

**Definition (field extension).** If two fields satisfy $F\subseteq E$ ($F$ is a subfield of $E$), we say $E/F$ is a **field extension**, $E$ the big field and $F$ the small field. Example: $\mathbb{Q}\subseteq\mathbb{Q}(\sqrt2)$ ($\mathbb{Q}(\sqrt2)$ is explained just below).

**How do we measure "how much bigger the big field is than the small field"?** The key move: **see the big field $E$ as a "vector space" over the small field $F$**.

> **First, a word borrowed (from linear algebra).**
>
> "Vector space / basis / dimension" are not taught in the little lesson in group theory; they are standard content of another basic course, and this section only borrows them without going into them. What we need is a single sentence: a set of numbers $v_1,\dots,v_n$ is called a
>
> **basis** of $E$ over $F$, meaning that —
>
> **every**
>
> element in $E$ can be written
>
> **uniquely**
>
> as $c_1v_1+\dots+c_nv_n$ (with coefficients $c_i$ taken from the small field $F$). The number of elements in the basis is called the
>
> **dimension**
>
> . (A standard result of linear algebra: however a basis of the same space is chosen, the bases all have the same size, so the "dimension" is well defined and does not depend on the choice — this section cites this directly.)

Regarding $E$ as a vector space over $F$, its dimension is called the **degree** of this extension:

$$
[E:F]\;=\;\dim_F E\;=\;\big(E\text{ — the size of a basis over }F\text{ }\big).
$$

> **Right away, a concrete one — $\mathbb{Q}(\sqrt2)$.**
>
> It means $\{\,a+b\sqrt2:\ a,b\in\mathbb{Q}\,\}$ (all "rational number $+$ rational number $\times\sqrt2$"). First check that it really is a field: -
>
> **Closed under multiplication**: $(a+b\sqrt2)(c+d\sqrt2)=(ac+2bd)+(ad+bc)\sqrt2$, still of the shape "$\mathbb{Q}+\mathbb{Q}\sqrt2$"; likewise for addition and subtraction. -
>
> **Nonzero elements have inverses**: $\dfrac{1}{a+b\sqrt2}=\dfrac{a-b\sqrt2}{a^2-2b^2}$, the denominator $a^2-2b^2\ne0$ (the element being inverted is nonzero: if $b=0$ then $a^2=0$ gives $a=0$ and the whole element is $0$, which is excluded, so $b\ne0$; then $a^2-2b^2=0$ would give $(a/b)^2=2$,
>
> **implying**
>
> that $\sqrt2$ is rational, a contradiction), so the inverse also lies inside. Every number in this field is a combination of $\{1,\sqrt2\}$ with rational coefficients; and $1,\sqrt2$ are
>
> **linearly independent**
>
> — if $a+b\sqrt2=0$ with $a,b\in\mathbb{Q}$, then $b\ne0$ would give $\sqrt2=-a/b$ rational (a contradiction), so necessarily $a=b=0$. Hence $\{1,\sqrt2\}$ is a basis,
>
> $$
> [\mathbb{Q}(\sqrt2):\mathbb{Q}]=2.\qquad\blacksquare
> $$

#### 3. Adjoining a root, $F(\alpha)$, and the minimal polynomial

$\mathbb{Q}(\sqrt2)$ is just "adding to $\mathbb{Q}$ a $\sqrt2$". In general:

**Definition (simple extension).** $F(\alpha)$ = **the smallest field containing both $F$ and $\alpha$** (add $\alpha$ into $F$, then fill in the results of all the arithmetic operations).

**Definition (algebraic element, minimal polynomial).** If $\alpha$ is a root of some polynomial with coefficients in $F$, we say $\alpha$ is **algebraic** over $F$. Among all the polynomials "having $\alpha$ as a root, with coefficients in $F$, and leading coefficient $1$ (**monic**)", the one of **smallest degree** is called the **minimal polynomial** of $\alpha$, $m(x)$. (There is only one such "smallest-degree and monic" polynomial, so one can speak of "**the**" minimal polynomial; this section uses only its property of "smallest degree".)

> **Example (first look at a concrete one)**: take $F=\mathbb{Q}$, $\alpha=\sqrt2$. $\sqrt2$ is a root of $x^2-2$, so it is
>
> **algebraic**
>
> over $\mathbb{Q}$. Among the monic polynomials with rational coefficients having $\sqrt2$ as a root, $x^2-2$ has the smallest degree — to go lower only a linear polynomial $x-\sqrt2$ is left, but its coefficient $\sqrt2\notin\mathbb{Q}$, not a rational coefficient, so it does not qualify. So $x^2-2$ is exactly the
>
> **minimal polynomial**
>
> of $\sqrt2$.
>
> **$m$ is necessarily irreducible**
>
> ("irreducible" means: over $F$ it
>
> **cannot**
>
> be written as a product of two polynomials with coefficients in $F$
>
> **both of lower degree**
>
> ). Otherwise $m=g\cdot h$ ($g,h$ both of lower degree, coefficients in $F$); substitute $\alpha$: $0=m(\alpha)=g(\alpha)\,h(\alpha)$, so $g(\alpha)=0$ or $h(\alpha)=0$ — out pops a polynomial
>
> **of lower degree**
>
> that also has $\alpha$ as a root (dividing by its leading coefficient makes it monic, with the degree unchanged), contradicting "$m$ has the smallest degree". So $m$ is irreducible. ∎

**Theorem (degree of a simple extension).** Let $\alpha$ be **algebraic** over $F$, with minimal polynomial $m$ of degree $n$. Then $[F(\alpha):F]=n$, and $\{1,\alpha,\alpha^2,\dots,\alpha^{n-1}\}$ is a basis of $F(\alpha)$ over $F$.

> **Example (first read the theorem through once with $\sqrt2$)**: $\alpha=\sqrt2$, minimal polynomial $m=x^2-2$ of degree $n=2$. The theorem says $[\mathbb{Q}(\sqrt2):\mathbb{Q}]=2$, with basis $\{1,\alpha\}=\{1,\sqrt2\}$ — that is, every number in $\mathbb{Q}(\sqrt2)$ is written exactly as $a\cdot1+b\cdot\sqrt2$ ($a,b\in\mathbb{Q}$), exactly two "basis vectors", matching the theorem. (Likewise for $n=3$, $\sqrt[3]2$, with basis $\{1,\sqrt[3]2,\sqrt[3]4\}$; see worked example 2.) Below we prove the general case.
>
> **Full proof in Dummit–Foote, *Abstract Algebra*, 3rd ed. §13.1.  
>   
> A tool for deciding irreducibility — Eisenstein's criterion**
>
> (needed for the worked examples below, so stated first): a monic polynomial with coefficients in $\mathbb{Z}$,
>
> **if there is a prime $p$ that divides all its non-leading coefficients, and $p^2$ does not divide the constant term**
>
> (the leading coefficient $1$ is of course not divisible by $p$), then it is
>
> **irreducible**
>
> over $\mathbb{Q}$.
>
> **One more link**
>
> (the worked examples rely on it to cross from "irreducible" to "is the minimal polynomial"): if a polynomial with coefficients in $F$ that is
>
> **monic and irreducible**
>
> has $\alpha$ as a root, it
>
> **is**
>
> the minimal polynomial of $\alpha$. Because the minimal polynomial $m$ divides every polynomial having $\alpha$ as a root (by the same division with remainder as above: the remainder is of lower degree and also annihilates $\alpha$, so it can only be $0$), while an irreducible polynomial has no proper factor of lower degree other than constants and itself; and both are monic, so they can only be equal.
>
> **Worked example 1 — $\mathbb{Q}(\sqrt2)$ once more.**
>
> The minimal polynomial of $\sqrt2$ is $x^2-2$: it has $\sqrt2$ as a root and is monic; take $p=2$: the non-leading coefficients are $0$ and $-2$ (both divisible by $2$), and the constant term $-2$ is not divisible by $4=2^2$ — Eisenstein gives
>
> **irreducible**
>
> . Degree $2$, so $[\mathbb{Q}(\sqrt2):\mathbb{Q}]=2$, basis $\{1,\sqrt2\}$, agreeing with the earlier result (computing $\mathbb{Q}(\sqrt2)$ in the section on field extensions).
>
> **Worked example 2 — $\mathbb{Q}(\sqrt[3]2)$.**
>
> The minimal polynomial of $\sqrt[3]2$ is $x^3-2$ (likewise irreducible by Eisenstein with $p=2$). Degree $3$, so $[\mathbb{Q}(\sqrt[3]2):\mathbb{Q}]=3$, basis $\{1,\sqrt[3]2,\sqrt[3]4\}$.

#### 4. The tower formula: one layer nested in another, the degrees multiply

If a big extension is "two layers nested together", its degree is the **product** of the degrees of the two layers.

**Theorem (tower formula).** For a tower of fields $F\subseteq K\subseteq E$,

$$
[E:F]=[E:K]\cdot[K:F].
$$

> **Intuition (viewing "degree" as "dimension")**: $\mathbb{Q}$ itself is "$1$-dimensional"; add a $\sqrt2$, and the dimension doubles to $2$ (basis $\{1,\sqrt2\}$); on top of that add a $\sqrt3$, and the dimension doubles again to $4$ (basis $\{1,\sqrt2,\sqrt3,\sqrt6\}$). What the tower formula says is exactly —
>
> **nesting upward layer by layer, the dimensions multiply layer by layer**: two layers of $\times2$ each, together $2\times2=4$ times. Below, "multiplying bases" is written up as a proof.
>
> **Full proof in Dummit–Foote §13.2.  
>   
> Worked example 3 — $\mathbb{Q}(\sqrt2,\sqrt3)$ (adding $\sqrt2$ and $\sqrt3$ at the same time).**
>
> Build a two-layer tower $\mathbb{Q}\subseteq\mathbb{Q}(\sqrt2)\subseteq\mathbb{Q}(\sqrt2,\sqrt3)$. -
>
> **First layer**
>
> $[\mathbb{Q}(\sqrt2):\mathbb{Q}]=2$ (worked example 1). -
>
> **Second layer**
>
> $[\mathbb{Q}(\sqrt2,\sqrt3):\mathbb{Q}(\sqrt2)]$: $\sqrt3$ satisfies $x^2-3$; for this to be the minimal polynomial of the second layer, we must first confirm that
>
> **$\sqrt3\notin\mathbb{Q}(\sqrt2)$**
>
> . Suppose to the contrary that $\sqrt3=a+b\sqrt2$ ($a,b\in\mathbb{Q}$); squaring both sides gives $3=(a^2+2b^2)+2ab\sqrt2$; the left side is rational, so $2ab\sqrt2$ must also be rational, and necessarily $ab=0$. $b=0$ gives $\sqrt3=a$ rational (false); $a=0$ gives $\sqrt3=b\sqrt2$, that is, $\sqrt{3/2}$ rational (false). A contradiction, so $\sqrt3\notin\mathbb{Q}(\sqrt2)$ ✓. Moreover $x^2-3$ is a
>
> **quadratic**; if it were reducible over $\mathbb{Q}(\sqrt2)$, it would have to split off a linear factor, that is, have a root in $\mathbb{Q}(\sqrt2)$ (that is, $\sqrt3\in\mathbb{Q}(\sqrt2)$); since we have just proved there is no such root, $x^2-3$ is
>
> **irreducible** over $\mathbb{Q}(\sqrt2)$, and the second layer has degree $2$. -
>
> **Tower formula**: $[\mathbb{Q}(\sqrt2,\sqrt3):\mathbb{Q}]=2\times2=4$, basis $\{1,\sqrt2,\sqrt3,\sqrt6\}$.

![The extension tower of ℚ(√2,√3)/ℚ: from ℚ at the bottom upward, each square root added is one layer; the minimal polynomials of the layers (x²−2, x²−3) both have degree 2, the two layers multiply to 2×2=4, and the basis of the whole tower over ℚ at the top is {1,√2,√3,√6}](/content/images/2026/06/fig_field_tower_q236.png)

*Figure 15 The extension tower of ℚ(√2,√3)/ℚ: from ℚ at the bottom upward, each square root added is one layer; the minimal polynomials of the layers (x²−2, x²−3) both have degree 2, the two layers multiply to 2×2=4, and the basis of the whole tower over ℚ at the top is {1,√2,√3,√6}*

> **Connecting back to the "Gauss · the regular 17-gon" episode (G17) — the tower formula is exactly the tool that was really at work behind that episode.**
>
> Remember why the regular 17-gon can be constructed with straightedge and compass? The key is this: the field corresponding to it, $\mathbb{Q}\!\left(\cos\tfrac{2\pi}{17}\right)$, has degree over $\mathbb{Q}$ exactly $8=2\times2\times2$ — a tower of
>
> **three layers, each a factor of $2$**
>
> . Each step forward in a straightedge-and-compass construction corresponds exactly to "taking one square root", that is, adding to the tower a layer of factor $2$; and "constructible with straightedge and compass $\iff$ the degree is a power of $2$" is exactly the criterion the G17 episode explained thoroughly. The tower formula $[E:F]=[E:K][K:F]$ is the measuring stick for counting "how many layers in all, and how many times bigger altogether": $2^3=8$, multiplied layer by layer, and only so does the regular 17-gon fall within the reach of straightedge and compass. (The $\mathbb{Q}(\sqrt2,\sqrt3)$ above is a one-size-smaller version of the same principle: two layers, $2\times2=4$.)

(This "four-element tower" of $\mathbb{Q}(\sqrt2,\sqrt3)$ will, when we connect to Galois groups below, match up with the Klein four-group $V_4$ we saw in §2.)

---

### Splitting fields and Galois groups: trading "the tower of fields" for "a group"

Earlier we learned to measure how big an extension is (the degree [E:F]). This section gives each extension a **group** — its symmetry. Once this bridge is built, "can the equation be solved by radicals" is completely translated into "can a group be taken apart".

#### 1. Splitting fields: the smallest field in which a polynomial splits completely

**Definition (splitting field).** Given an $F$-coefficient polynomial $f$, its **splitting field** is an extension field $E$ such that: $f$ **splits completely into linear factors** over $E$ (that is, all the roots of $f$ fall in $E$), and $E$ is the **smallest** field carrying these roots (generated exactly by adjoining to $F$ all the roots of $f$).

> **Example 1**: the roots of $f=(x^2-2)(x^2-3)$ are $\pm\sqrt2,\pm\sqrt3$, all in $\mathbb{Q}(\sqrt2,\sqrt3)$, and this field is generated exactly by these roots — so $\mathbb{Q}(\sqrt2,\sqrt3)$ is the splitting field of $f$, of degree $4$ (computed earlier).
>
> **Example 2**: the three roots of $f=x^3-2$ are $\sqrt[3]2,\ \omega\sqrt[3]2,\ \omega^2\sqrt[3]2$, where $\omega=-\tfrac12+\tfrac{\sqrt3}2 i$ is a non-real "cube root of unity", satisfying $\omega^3=1$ (and hence $\omega^2+\omega+1=0$). Using $1,\omega,\omega^2$ to multiply the real root $\sqrt[3]2$ gives exactly these three roots (the cube of each is $(\sqrt[3]2)^3\,(\omega^k)^3=2\cdot1=2$). To hold all three roots we need $\sqrt[3]2$ and $\omega$, and the splitting field is $\mathbb{Q}(\sqrt[3]2,\omega)$. Compute its degree: $[\mathbb{Q}(\sqrt[3]2):\mathbb{Q}]=3$ ($x^3-2$); $\omega$ satisfies $x^2+x+1$ and is not in the real field $\mathbb{Q}(\sqrt[3]2)$ ($\omega$ is non-real), so the next layer up has degree $2$. The tower formula gives $[\mathbb{Q}(\sqrt[3]2,\omega):\mathbb{Q}]=3\times2=6$.

This section uses only polynomials whose **roots are pairwise distinct** (both above are); this point will be needed below when counting.

#### 2. Field automorphisms and fixing the base field

**Definition (field automorphism, fixing $F$).** A **field automorphism** of the extension $E/F$ is a bijection $\sigma:E\to E$ that **preserves addition and multiplication** ($\sigma(x+y)=\sigma x+\sigma y$, $\sigma(xy)=\sigma x\cdot\sigma y$), and **fixes $F$ pointwise** (for each $c\in F$ we have $\sigma(c)=c$). Intuitively: $\sigma$ is a symmetry transformation inside $E$ that "does not disturb the small field $F$, and only stirs the big field".

> **Example**: on $E=\mathbb{Q}(\sqrt2)$, $F=\mathbb{Q}$, define $\sigma(a+b\sqrt2)=a-b\sqrt2$ (that is, flip the sign of $\sqrt2$). It
>
> **fixes $\mathbb{Q}$**
>
> (when $b=0$, $a\mapsto a$);
>
> **preserving addition**
>
> is obvious;
>
> **preserving multiplication**
>
> can be checked: $\sigma\big((a+b\sqrt2)(c+d\sqrt2)\big)=(ac+2bd)-(ad+bc)\sqrt2=(a-b\sqrt2)(c-d\sqrt2)=\sigma(a+b\sqrt2)\,\sigma(c+d\sqrt2)$. So $\sigma$ is a field automorphism fixing $\mathbb{Q}$. (It sends $\sqrt2$ to $-\sqrt2$ — and $-\sqrt2$ is exactly the other root of $x^2-2$; this is what the lemma below says.)

**Lemma (automorphisms send roots to roots).** Let $g$ be a polynomial with coefficients in $F$, $\beta\in E$ a root of $g$, and $\sigma$ an automorphism fixing $F$. Then $\sigma(\beta)$ is also a root of $g$.

> **Full proof in Dummit–Foote §13.4 (extending isomorphisms to splitting fields), §14.1 (automorphisms permute roots).**

This lemma has a direct consequence, used again and again below: **an automorphism fixing $F$ merely permutes among "those few roots of $f$"**; and the splitting field is generated by these roots, so $\sigma$ is **completely determined** by "which root it sends each root to".

#### 3. The Galois group

**Definition (Galois group).** For the extension $E/F$, all its "field automorphisms fixing $F$" form a group under **composition** (composing two still fixes $F$, still preserves the operations, is still a bijection; the identity map is the identity element; the inverse map also fixes $F$). This group is written $\mathrm{Gal}(E/F)$ and is called the **Galois group** of $E/F$.

> **Example (the smallest Galois group)**: $\mathrm{Gal}(\mathbb{Q}(\sqrt2)/\mathbb{Q})$. An automorphism fixing $\mathbb{Q}$ is determined by $\sigma(\sqrt2)$, and $\sigma(\sqrt2)$ can only be a root of $x^2-2$, $\pm\sqrt2$ (the earlier lemma "automorphisms send roots to roots"), so there are only two: the identity $e$ and the sign flip $\sigma$. $\sigma$ multiplied by itself returns to $e$, so $\mathrm{Gal}(\mathbb{Q}(\sqrt2)/\mathbb{Q})=\{e,\sigma\}\cong\mathbb{Z}/2$. (Later in this section we will see the larger examples $V_4$, $S_3$.)

By the consequence of that earlier lemma, sending each $\sigma$ to "the permutation it performs on the roots of $f$" gives a map $\mathrm{Gal}(E/F)\to(\text{permutations of the roots})$, and it is **injective** ($\sigma$ is determined by where the roots go) and preserves composition — that is to say, $\mathrm{Gal}(E/F)$ **embeds** into the permutation group of the roots. This is exactly the origin of "the symmetry group of an equation" spoken of in §2/§3.

#### 4. The core theorem: $|\mathrm{Gal}(E/F)|=[E:F]$

To work out Galois groups, we need a theorem that links "how big the group is" and "how big the extension is" precisely.

**Theorem.** Let $E$ be the splitting field of some $F$-coefficient polynomial, and let the roots of that polynomial be pairwise distinct. Then

$$
\big|\mathrm{Gal}(E/F)\big|=[E:F].
$$

> **Example (first read the core theorem through once with $\mathbb{Q}(\sqrt2)$)**: $E=\mathbb{Q}(\sqrt2)$, $F=\mathbb{Q}$ (the splitting field of $x^2-2$, whose two roots $\pm\sqrt2$ are distinct). The tower has only one layer, $\mathbb{Q}\subseteq\mathbb{Q}(\sqrt2)$; the minimal polynomial of $\sqrt2$ is $m_0=x^2-2$, of degree $d_0=2$. An automorphism fixing $\mathbb{Q}$ is determined by $\sigma(\sqrt2)$, and $\sigma(\sqrt2)$ can only be sent to the roots of $m_0$, $\{\sqrt2,-\sqrt2\}$ — exactly $2$ ways of sending, each giving a legitimate automorphism, so $|\mathrm{Gal}|=2=[\mathbb{Q}(\sqrt2):\mathbb{Q}]$, matching the theorem. (The two-layer $\mathbb{Q}(\sqrt2,\sqrt3)$: $2$ ways for each layer, $2\times2=4$ automorphisms, looked at in detail in "Example one" later in this section.) Below we prove the general case.
>
> **Full proof in Dummit–Foote §14.1–§14.2.  
>   
> Note that the splitting field and "pairwise distinct roots" are both indispensable**: without the splitting field, the roots of $m_i$ may not be in $E$ and cannot be sent there (too few choices); without "pairwise distinct", the $d_i$ roots would coincide and the number of choices would not match either. The two conditions guarantee exactly "$d_i$ roots at each layer, each giving one extension".

#### 5. Example one: $\mathrm{Gal}(\mathbb{Q}(\sqrt2,\sqrt3)/\mathbb{Q})=V_4$

$E=\mathbb{Q}(\sqrt2,\sqrt3)$ is the splitting field of $(x^2-2)(x^2-3)$, $[E:\mathbb{Q}]=4$, and by the theorem $|\mathrm{Gal}|=4$. Concretely, lay out these $4$ automorphisms: each $\sigma$ is determined by $\sigma(\sqrt2)$ and $\sigma(\sqrt3)$, and $\sigma(\sqrt2)$ can only be a root of $x^2-2$, $\pm\sqrt2$, and $\sigma(\sqrt3)$ can only be a root of $x^2-3$, $\pm\sqrt3$ (the earlier lemma on sending roots to roots); combining them independently gives $2\times2=4$:

| Automorphism | $\sqrt2\mapsto$ | $\sqrt3\mapsto$ | Order |
| --- | --- | --- | --- |
| $e$ | $\sqrt2$ | $\sqrt3$ | 1 |
| $\sigma$ | $-\sqrt2$ | $\sqrt3$ | 2 |
| $\tau$ | $\sqrt2$ | $-\sqrt3$ | 2 |
| $\sigma\tau$ | $-\sqrt2$ | $-\sqrt3$ | 2 |

Every non-$e$ automorphism multiplied by itself returns to $e$ (flipping the sign of a root twice restores it), and composing any two different non-$e$ automorphisms gives the third (for example $\sigma$ flips the sign of $\sqrt2$ and $\tau$ flips the sign of $\sqrt3$; doing one after the other flips both signs, which is exactly $\sigma\tau$). Four elements, every non-$e$ one of order $2$, and closed under composition — the multiplication table is uniquely determined. This multiplication table is exactly the same as that of the **Klein four-group** $V_4$ seen in §2:

$$
\mathrm{Gal}(\mathbb{Q}(\sqrt2,\sqrt3)/\mathbb{Q})\cong V_4\cong \mathbb{Z}/2\times\mathbb{Z}/2.
$$

(That is, $V_4$ rather than $\mathbb{Z}/4$: order $4$, commutative, each non-$e$ element of order $2$.) ∎

#### 6. Example two: $\mathrm{Gal}(x^3-2/\mathbb{Q})=S_3$ (non-commutative)

$E=\mathbb{Q}(\sqrt[3]2,\omega)$ is the splitting field of $x^3-2$, $[E:\mathbb{Q}]=6$, and by the earlier core theorem $|\mathrm{Gal}|=[E:F]$ we get $|\mathrm{Gal}(E/\mathbb{Q})|=6$.

Next, see which group of order $6$ it lands on. Each $\sigma$ permutes the three roots $\{\sqrt[3]2,\ \omega\sqrt[3]2,\ \omega^2\sqrt[3]2\}$ among themselves (the earlier lemma on sending roots to roots), giving a map $\mathrm{Gal}(E/\mathbb{Q})\to S_3$ (all permutations of the $3$ roots, $|S_3|=6$). This map: - **injective**: the values of $\sigma$ on the three roots determine the whole of $\sigma$ — because $\omega=\dfrac{\omega\sqrt[3]2}{\sqrt[3]2}$, and $\sigma$ preserves multiplication and so naturally also preserves division ($\sigma(a/b)=\sigma a/\sigma b$), so $\sigma(\omega)=\dfrac{\sigma(\omega\sqrt[3]2)}{\sigma(\sqrt[3]2)}$ is computed from the values of $\sigma$ on two roots; once $\sigma(\sqrt[3]2)$ and $\sigma(\omega)$ are fixed, the whole of $\sigma$ is fixed. - **preserves composition**: permuting the roots one after another = composing the automorphisms one after another.

So $\mathrm{Gal}(E/\mathbb{Q})$ injects into $S_3$, and both sides have $6$ elements (on a finite set an injection is a surjection), so

$$
\mathrm{Gal}(x^3-2/\mathbb{Q})\cong S_3.
$$

This is a **non-commutative** group (in $S_3$, $(\text{cycling the three roots, starting from }\sqrt[3]2\text{})$ and $(\text{complex conjugation})$ give different results in different orders). (Order $6$, non-commutative, contains odd permutations.) ∎

![Left: the 4 automorphisms of Gal(ℚ(√2,√3)/ℚ)=V₄ = independently flipping the signs of √2 and √3 (four cells e/σ/τ/στ, every non-e element of order 2, ≅ℤ/2×ℤ/2); right: the 6 automorphisms of Gal(x³−2/ℚ)=S₃ = all permutations of the three cube roots ∛2, ω∛2, ω²∛2 in the complex plane (non-commutative)](/content/images/2026/06/fig_gal_roots_v4_s3.png)

*Figure 16 Left: the 4 automorphisms of Gal(ℚ(√2,√3)/ℚ)=V₄ = independently flipping the signs of √2 and √3 (four cells e/σ/τ/στ, every non-e element of order 2, ≅ℤ/2×ℤ/2); right: the 6 automorphisms of Gal(x³−2/ℚ)=S₃ = all permutations of the three cube roots ∛2, ω∛2, ω²∛2 in the complex plane (non-commutative)*

**Comparing the two examples**: the quadratic-type $\mathbb{Q}(\sqrt2,\sqrt3)$ gives a **commutative** group $V_4$; the irreducible cubic $x^3-2$ gives a **non-commutative** group $S_3$. The higher the degree and the more complicated the entanglement among the roots, the more the Galois group may turn from commutative to non-commutative — this line goes all the way to $S_5$ in §5, where non-commutativity reaches the point of "cannot be taken apart", which is precisely the root of the quintic equation having no solution in radicals.

---

### The Galois correspondence: translating "taking groups apart" into "taking towers apart"

Earlier we gave each splitting field $E/F$ a group $\mathrm{Gal}(E/F)$. This section is the summit of §4: **the subgroups of $\mathrm{Gal}(E/F)$ and the intermediate fields between $F$ and $E$ are in one-to-one correspondence**. With this dictionary, "can a group be taken apart" is equivalent to "can a tower of fields be built", and the solvability of an equation by radicals comes down completely to the group.

The $E/F$ of this section are all extensions of the earlier kind — **splitting fields, with pairwise distinct roots** (such extensions satisfy $|\mathrm{Gal}(E/F)|=[E:F]$ and are called **Galois extensions**).

#### 1. Two directions: the fixed field and the relative Galois group

The two sides of the dictionary, two constructions that are the reverse of each other:

**Constructing a subgroup from an intermediate field.** Given an intermediate field $K$ ($F\subseteq K\subseteq E$), let

$$
K\ \longmapsto\ \mathrm{Gal}(E/K)=\{\,\sigma\in\mathrm{Gal}(E/F):\ \sigma\text{ fixes pointwise }K\,\}.
$$

Fixing $K$ is a stricter requirement than fixing $F$ ($K$ is bigger), so $\mathrm{Gal}(E/K)$ is a **subgroup** of $\mathrm{Gal}(E/F)$.

**Constructing an intermediate field from a subgroup.** Given a subgroup $H\le\mathrm{Gal}(E/F)$, let

$$
H\ \longmapsto\ E^{H}=\{\,x\in E:\ \sigma(x)=x\ \text{for all}\ \sigma\in H\,\}.
$$

This $E^H$ (the elements fixed by every automorphism in $H$) is a field: if $x,y$ are both fixed, then $x\pm y,\ xy,\ x/y$ are also fixed (automorphisms preserve the operations). And $F$ was fixed by the whole of $\mathrm{Gal}(E/F)$ to begin with, so $F\subseteq E^H\subseteq E$, an intermediate field. $E^H$ is called the **fixed field** of $H$.

> **Example (the smallest case)**: $E=\mathbb{Q}(\sqrt2)$, $\mathrm{Gal}(E/\mathbb{Q})=\{e,\sigma\}\cong\mathbb{Z}/2$ (earlier). Two subgroups: the fixed field of $\{e\}$ is the whole of $E$ (everything is fixed); the fixed field of $\{e,\sigma\}$ is $\mathbb{Q}$ (what is fixed by $\sigma$ is exactly those $a+b\sqrt2$ with $b=0$, that is, the rational numbers). Two subgroups ↔ two fields ($E$ and $\mathbb{Q}$), matching exactly.

#### 2. The correspondence theorem: the two constructions are inverse to each other, and order-reversing

**Theorem (Galois correspondence).** Let $E/F$ be a Galois extension. Then the two maps above

$$
\{\,\mathrm{Gal}(E/F)\text{ subgroups}\,\}\ \underset{\textstyle E^{(-)}}{\overset{\textstyle \mathrm{Gal}(E/-)}{\rightleftarrows}}\ \{\,F\text{ — }E\text{ intermediate fields}\,\}
$$

are **one-to-one correspondences inverse to each other**, and are **order-reversing** (the bigger the subgroup, the smaller the corresponding fixed field). Concretely,

$$
\mathrm{Gal}(E/E^{H})=H,\qquad E^{\mathrm{Gal}(E/K)}=K,\qquad |H|=[E:E^{H}],\qquad [E^H:F]=[\,\mathrm{Gal}(E/F):H\,].
$$

> **Full proof in Dummit–Foote §14.2 (the fundamental theorem of Galois theory).  
>   
> The only deep external citation in §4 — Artin's theorem (also the most critical one).**
>
> Full statement: let $G$ be a
>
> **finite**
>
> group of automorphisms of a field $K$, and $K^{G}$ its fixed field; then $[K:K^{G}]=|G|$, and $K/K^{G}$ is a Galois extension, $\mathrm{Gal}(K/K^{G})=G$. This section uses its $[E:E^H]=|H|$ to close the correspondence bijection; the later section on normal correspondence also uses its $\mathrm{Gal}(K/K^G)=G$ to obtain the quotient group. It is the half of the bijection bridge of the Galois correspondence that is "admitted for now": the proof of Artin's theorem relies on
>
> **the linear independence of characters (Dedekind)**, which belongs to another course, and this section does not go into it. Apart from this deep external citation of Artin, and the two basic-course prerequisites already marked as cited earlier ("any two bases of the same space have the same size" from linear algebra, and the polynomial version of Bézout), §4 (together with the earlier tower formula, $|\mathrm{Gal}|=[E:F]$, the lemma on sending roots to roots, and the first isomorphism theorem) is all derived step by step from the axioms of groups and fields.

#### 3. The normal correspondence: normal subgroups ↔ normal (Galois) extensions

The dictionary also matches up the word "normal".

**Theorem (normal correspondence).** Let $E/F$ be Galois, and let $H\le\mathrm{Gal}(E/F)$ correspond to the intermediate field $K=E^H$. Then

$$
H\ \text{in}\ \mathrm{Gal}(E/F)\ \text{is normal}\quad\Longleftrightarrow\quad K/F\ \text{is also a Galois extension}.
$$

And in that case $\mathrm{Gal}(K/F)\cong\mathrm{Gal}(E/F)\,/\,H$.

> **(This "normal correspondence" is also part of the fundamental theorem of Galois theory above; the proof is the same.)**

#### 4. An instance: the whole correspondence lattice of $x^3-2$ ($S_3 \leftrightarrow$ subfields)

$E=\mathbb{Q}(\sqrt[3]2,\omega)$, $\mathrm{Gal}(E/\mathbb{Q})=S_3$ (earlier), $[E:\mathbb{Q}]=6$. The **6 subgroups** of $S_3$ correspond, in reverse order according to the correspondence theorem, to **6 intermediate fields**:

| $S_3$ subgroup $H$ (order) | Fixed field $E^H$ | $[E^H:\mathbb{Q}]=[S_3:H]$ |
| --- | --- | --- |
| $\{e\}$ (1) | the whole $E=\mathbb{Q}(\sqrt[3]2,\omega)$ | 6 |
| $\langle\,\sqrt[3]2\to\omega\sqrt[3]2\to\omega^2\sqrt[3]2\ \text{(the 3-cycle)}\,\rangle=A_3$ (3, **fixes $\omega$**) | $\mathbb{Q}(\omega)$ | 2 |
| the three transposition subgroups (2 each) | $\mathbb{Q}(\sqrt[3]2)$, $\mathbb{Q}(\omega\sqrt[3]2)$, $\mathbb{Q}(\omega^2\sqrt[3]2)$ | 3 each |
| $S_3$ (6) | $\mathbb{Q}$ | 1 |

The order reversal is plain to see: the subgroups grow from $\{e\}$ (smallest) to $S_3$ (largest), and the fixed fields shrink from $E$ (largest) to $\mathbb{Q}$ (smallest); in each row $|H|\cdot[E^H:\mathbb{Q}]=6$.

**What the normal correspondence looks like here**: - $A_3\triangleleft S_3$ (index 2, normal) ↔ $\mathbb{Q}(\omega)/\mathbb{Q}$ is a Galois extension (it is the splitting field of $x^2+x+1$, with both roots $\omega,\omega^2$ inside); the quotient $S_3/A_3\cong\mathbb{Z}/2\cong\mathrm{Gal}(\mathbb{Q}(\omega)/\mathbb{Q})$. ✓ - The three transposition subgroups are **not normal** ↔ $\mathbb{Q}(\sqrt[3]2)$ and the others are **not** Galois extensions ($\mathbb{Q}(\sqrt[3]2)$ is a real field and cannot hold the other two non-real roots $\omega\sqrt[3]2,\omega^2\sqrt[3]2$; $x^3-2$ does not split in it).

![The whole lattice of the Galois correspondence of x³−2: on the left, the lattice of the 6 subgroups of S₃ ({e} at the bottom, the three transpositions + A₃ in the middle, S₃ at the top); on the right, the lattice of the 6 intermediate fields of ℚ(∛2,ω) drawn upside down (E at the top, the three cubic fields + ℚ(ω) in the middle, ℚ at the bottom); order-reversing arrows in between connect corresponding items; the normal pair A₃↔ℚ(ω) is highlighted](/content/images/2026/06/fig_galois_correspondence_s3.png)

*Figure 17 The whole lattice of the Galois correspondence of x³−2: on the left, the lattice of the 6 subgroups of S₃ ({e} at the bottom, the three transpositions + A₃ in the middle, S₃ at the top); on the right, the lattice of the 6 intermediate fields of ℚ(∛2,ω) drawn upside down (E at the top, the three cubic fields + ℚ(ω) in the middle, ℚ at the bottom); order-reversing arrows in between connect corresponding items; the normal pair A₃↔ℚ(ω) is highlighted*

![The Galois correspondence (animation): the group ladder S₃▷A₃▷{e} and the field tower ℚ⊆ℚ(ω)⊆ℚ(ω,∛2) corresponding crosswise layer by layer — big group ↔ small field, inclusion reversed](/content/images/2026/06/fig_galois_corr_anim.gif)

*Figure 18 The Galois correspondence (animation): the group ladder S₃▷A₃▷{e} and the field tower ℚ⊆ℚ(ω)⊆ℚ(ω,∛2) corresponding crosswise layer by layer — big group ↔ small field, inclusion reversed*

This "subgroup lattice ↔ subfield lattice" is the full picture of the Galois correspondence: **every structure on the group side (subgroup, normal, index) has a mirror image on the field side (intermediate field, Galois subextension, degree).** The next section (§5) uses it to translate "the equation is solvable by radicals" into "$\mathrm{Gal}$ is solvable", arriving at the non-solvability of $S_5$.

---

## §5 Closing the loop: the Abel–Ruffini theorem

### Group solvable ⟺ solvable by radicals: why the quintic equation has no formula for its roots

The quadratic equation has a formula for its roots, $x=\tfrac{-b\pm\sqrt{b^2-4ac}}{2a}$, and so do the cubic and the quartic (longer, but still using only $+,-,\times,\div$ and root extraction). What about the quintic? This section answers it with the tools built earlier, and the key step of the conclusion uses "$A_5$ cannot be broken apart", proved in §3.

#### 1. Radical extensions: towers of root extraction

What exactly does "solve with a formula for the roots" mean? It means starting from the coefficients, repeatedly applying $+,-,\times,\div$ and then **extracting roots**, and writing the roots out. Translate this into fields:

**Definition (radical extension / solvable by radicals).** A **radical tower** is a chain of fields $F=F_0\subseteq F_1\subseteq\cdots\subseteq F_m$ in which each layer "adds one root": $F_{i+1}=F_i\big(\sqrt[n_i]{a_i}\big)$ (for some $a_i\in F_i$). A polynomial $f$ (with coefficients in $F$) is called **solvable by radicals** if its roots all fall into some radical tower based on $F$, inside its $F_m$.

> **Example**: $x^3-2$ is solvable by radicals — its roots $\sqrt[3]2,\omega\sqrt[3]2,\omega^2\sqrt[3]2$ fall in the two-layer tower $\mathbb{Q}\subseteq\mathbb{Q}(\omega)\subseteq\mathbb{Q}(\omega,\sqrt[3]2)$ (the first layer adds the cube root of unity $\omega=\zeta_3$, that is, a non-real root of $x^3-1$; the second layer adds $\sqrt[3]2$; both are root extractions). The quadratic equation is more direct: the roots $\tfrac{-b\pm\sqrt{\Delta}}{2a}$ fall in the one-layer tower $\mathbb{Q}(\text{coefficients})\subseteq\mathbb{Q}(\text{coefficients})(\sqrt{\Delta})$.

"Does the quintic equation have a formula for its roots" thus becomes: "is the general quintic polynomial solvable by radicals".

#### 2. Solvable groups: groups that can be peeled all the way down into commutative steps

§2 taught composition series. Give the groups whose "every layer's quotient is commutative" a name of their own:

**Definition (solvable group).** A group $G$ is called **solvable** if there is a chain $G=G_0\triangleright G_1\triangleright\cdots\triangleright G_k=\{e\}$ in which each quotient $G_i/G_{i+1}$ is a **commutative group**. (Equivalently: the composition factors in a composition series are all cyclic groups of prime order.)

> **Example**: $S_3\triangleright A_3\triangleright\{e\}$, the two quotients $\mathbb{Z}/2$, $\mathbb{Z}/3$ are both commutative, so $S_3$ is
>
> **solvable**
>
> . $S_4$ is also solvable (peeled in §2: the quotients $\mathbb{Z}/2,\mathbb{Z}/3,\mathbb{Z}/2,\mathbb{Z}/2$ are all commutative).
>
> **Counterexample (the key one)**: $A_5$ is
>
> **not solvable**
>
> — it is a
>
> **simple group**
>
> (proved in §3: apart from $\{e\}$ and itself it has no normal subgroup), so the only chain that can be peeled is $A_5\triangleright\{e\}$, whose quotient is $A_5$ itself, and $A_5$ is
>
> **non-commutative**
>
> . No commutative steps can be peeled out. $S_5$ is not solvable either (its composition series $S_5\triangleright A_5\triangleright\{e\}$ runs into $A_5$, a non-commutative simple group, and cannot be taken apart further into commutative pieces).

![The radical tower cannot reach the roots (animation): the radical tower of x⁵−6x+3 climbs upward layer by layer, +√, +∛, +⁵√, and stops when it hits the wall of A₅ (proved unbreakable in §3) — radicals can never reach its roots; this is exactly](/content/images/2026/06/fig_radical_tower_barrier.gif)

*Figure 19 The radical tower cannot reach the roots (animation): the radical tower of x⁵−6x+3 climbs upward layer by layer, +√, +∛, +⁵√, and stops when it hits the wall of A₅ (proved unbreakable in §3) — radicals can never reach its roots; this is exactly the root of "there is no formula for the roots"*

> **A small group-theory fact along the way**
>
> (needed for the ⟹ direction below, and can be proved on the spot): the
>
> **subgroups and quotient groups of a solvable group are also solvable**
>
> . Subgroup $H$: intersecting with the chain gives $H_i=H\cap G_i$; by the second isomorphism theorem (§2), $H_i/H_{i+1}$ embeds into the commutative group $G_i/G_{i+1}$, so it is still commutative. Quotient group $G/N$: reduce the chain modulo $N$ term by term; the quotients are quotients of the original quotients, still commutative. So "solvable" is closed under taking subgroups and taking quotients. (What the $\Rightarrow$ direction really uses is the "quotient" half.) ∎

#### 3. Kummer: extracting one root = one cyclic step

Each layer of a radical tower is "adding a $\sqrt[n]a$". What does this layer look like on the group side?

> **Lemma (root extraction $\Rightarrow$ cyclic).**
>
> If the base field $F$
>
> **already contains the $n$-th roots of unity**
>
> (that is, $x^n-1$ already splits in $F$), then adjoining an $n$-th root, $F(\sqrt[n]a)/F$, is a Galois extension, and its Galois group is
>
> **cyclic**
>
> .
>
> **Full proof in Dummit–Foote §14.7.**

The precondition "contains the $n$-th roots of unity" must be **treated honestly**: in general the base field $F=\mathbb{Q}$ does not contain them. The remedy is to **add the layer of roots of unity first** — $\mathbb{Q}\subseteq\mathbb{Q}(\zeta_n)$ ($\zeta_n=$ a primitive $n$-th root of unity) is itself a radical layer of the "add $\sqrt[n]1$" type, and its Galois group is **commutative**, which is also proved on the spot: any $\sigma\in\mathrm{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})$ sends $\zeta_n$ to another primitive $n$-th root of unity $\zeta_n^{\,k}$ ($\sigma$ preserves the orders of elements, so $\gcd(k,n)=1$); define $\psi(\sigma)=k\in(\mathbb{Z}/n)^\times$; $\psi$ preserves multiplication ($\sigma\tau(\zeta_n)=\sigma(\zeta_n^{\,k_\tau})=\zeta_n^{\,k_\sigma k_\tau}$) and is injective ($\sigma$ is determined by $\sigma(\zeta_n)$), so $\mathrm{Gal}$ embeds into the commutative group $(\mathbb{Z}/n)^\times$, and is **commutative**. ∎ So in the tower obtained by "first adding the roots of unity, then extracting roots layer by layer", the Galois group of every layer is commutative (the roots-of-unity layer is commutative, and each layer after that is cyclic by the lemma above).

> **Example**: $\mathbb{Q}\subseteq\mathbb{Q}(\omega)\subseteq\mathbb{Q}(\omega,\sqrt[3]2)$. The first layer $\mathbb{Q}(\omega)/\mathbb{Q}$ adds the cube root of unity $\omega$, $\mathrm{Gal}=\mathbb{Z}/2$ (commutative); in the second layer $\mathbb{Q}(\omega,\sqrt[3]2)/\mathbb{Q}(\omega)$ the base field already contains $\omega$, and by the lemma above (root extraction ⟹ cyclic) adding $\sqrt[3]2$ gives $\mathrm{Gal}=\mathbb{Z}/3$ (cyclic). Both layers are commutative.

#### 4. The core theorem: solvable by radicals ⟺ the Galois group is solvable

**Core theorem (Galois's solvability criterion).** An $F$-coefficient polynomial $f$ is **solvable by radicals** $\iff$ its Galois group $\mathrm{Gal}(f)$ is **solvable**.

> *Proof*
>
> (both directions; the only external citations left are, in the ⟸ direction,
>
> **Kummer in reverse**
>
> [the Lagrange resolvent] + the normal closure being still radical; everything else is derived).
>
> **($\Rightarrow$ solvable by radicals $\Rightarrow$ $\mathrm{Gal}(f)$ solvable) — this is the direction the finale needs.**
>
> Let $f$ be solvable by radicals, its roots falling in a radical tower. First add all the roots of unity at the very bottom layer (the earlier Kummer section: the roots-of-unity layer is commutative), then extract roots layer by layer; by the same earlier conclusion, we obtain a tower $F\subseteq F_1\subseteq\cdots\subseteq F_m$,
>
> **each layer $F_{i+1}/F_i$ of which is a Galois extension with commutative Galois group**, and $F_m$ contains all the roots of $f$. Here we must add a
>
> **key remark**: "every layer is Galois" alone does not guarantee that $F_m/F$ as a whole is Galois (being Galois is not transitive — in $\mathbb{Q}\subseteq\mathbb{Q}(\sqrt2)\subseteq\mathbb{Q}(\sqrt[4]2)$ each layer is Galois of degree 2, but $\mathbb{Q}(\sqrt[4]2)/\mathbb{Q}$ is not normal). The remedy is to
>
> **take $F_m$ to be a Galois extension over $F$**: take the
>
> **normal closure** of this radical tower over $F$; it is still a radical extension (the normal closure of a radical extension is still radical — cited as a standard result and not gone into in this section, like Kummer), and layer by layer it can still be arranged into commutative Galois layers. So $F_m/F$ is both Galois as a whole and commutative at every layer. Apply the
>
> **Galois correspondence**
>
> (the previous section) to $F_m/F$: the tower of fields $F\subseteq F_1\subseteq\cdots\subseteq F_m$ corresponds to the chain of subgroups $\mathrm{Gal}(F_m/F)\supseteq\mathrm{Gal}(F_m/F_1)\supseteq\cdots\supseteq\{e\}$;
>
> **each layer $F_{i+1}/F_i$ is Galois**, so by the normal correspondence of the previous section, adjacent subgroups satisfy $\mathrm{Gal}(F_m/F_{i+1})\triangleleft\mathrm{Gal}(F_m/F_i)$, with quotient $\cong\mathrm{Gal}(F_{i+1}/F_i)$
>
> **commutative**
>
> — this is exactly a chain with commutative quotients, so $\mathrm{Gal}(F_m/F)$ is
>
> **solvable**
>
> . And the splitting field of $f$, $E\subseteq F_m$, is a Galois subextension over $F$, so by the
>
> **normal correspondence**
>
> (previous section: $E/F$ normal $\Rightarrow$ $\mathrm{Gal}(F_m/E)\triangleleft\mathrm{Gal}(F_m/F)$, with quotient precisely $\mathrm{Gal}(E/F)$), $\mathrm{Gal}(f)=\mathrm{Gal}(E/F)$ is a
>
> **quotient group** of $\mathrm{Gal}(F_m/F)$; a quotient of a solvable group is solvable (the small fact in the earlier "solvable groups" section), so $\mathrm{Gal}(f)$ is solvable.
>
> **($\Leftarrow$ $\mathrm{Gal}(f)$ solvable $\Rightarrow$ solvable by radicals).**
>
> Conversely: $\mathrm{Gal}(f)$ solvable gives a chain of subgroups with commutative quotients — then
>
> **refine each commutative quotient into cyclic quotients**
>
> (any finite commutative group can be refined into a string of cyclic quotients of prime order, that is, the equivalent formulation in the earlier "solvable groups" section); first add the roots of unity to the base field, then translate this cyclic chain back to the field side through the Galois correspondence, obtaining a tower of intermediate fields,
>
> **each layer with cyclic Galois group**; by
>
> **Kummer in reverse**
>
> — when the base field contains the roots of unity, a cyclic Galois extension must be of the form $F(\sqrt[n]a)$, and each layer is just adding a $\sqrt[n]{\cdot}$ (this step relies on the Lagrange resolvent, and is one of the three external citations from field theory in §4/§5 — the other two are Artin in §4 and "the normal closure is still radical" used in the $\Rightarrow$ direction; like Artin: a standard result of another course, not gone into in this section). So the roots fall into a radical tower, and $f$ is solvable by radicals. ∎
>
> **Example (the criterion paying out)**: $x^3-2$'s $\mathrm{Gal}=S_3$ is solvable (the earlier "solvable groups" section) $\Rightarrow$ by the criterion it is solvable by radicals — exactly the earlier "radical extension" tower $\mathbb{Q}\subseteq\mathbb{Q}(\omega)\subseteq\mathbb{Q}(\omega,\sqrt[3]2)$, matching the two commutative quotients of $S_3\triangleright A_3\triangleright\{e\}$. Solvable groups ↔ towers of root extraction, the two sides corresponding layer by layer.

#### 5. The finale: $x^5-6x+3$ and Abel–Ruffini

The criterion moves "is there a formula for the roots" entirely onto the group: **as soon as we find a quintic polynomial whose Galois group is not solvable, it has no solution in radicals.**

Before getting down to it, let us first invite in someone who will help us below. [Cauchy](https://mathshistory.st-andrews.ac.uk/Biographies/Cauchy/) (Augustin-Louis Cauchy, 1789–1857) was one of the rare prolific figures in the history of mathematics, publishing as many as 789 papers in his lifetime; the diligence with which he submitted to the French Academy of Sciences' *Comptes Rendus* surpassed all his peers. He was a devout Catholic and a staunch legitimist royalist — which placed him at exactly the opposite political end from the republican Galois. After the July Revolution of 1830, the new king Louis-Philippe demanded an oath of allegiance; Cauchy would rather give up all his teaching posts in Paris and wander in exile to Turin and Prague than swear an oath against his conscience, and only returned home several years later. He was also known for his generosity: according to the eulogy given at his funeral by the mayor of Sceaux, Cauchy made great financial sacrifices for the town's schools and charities; when the mayor expressed surprise, he replied: « Ne vous effrayez pas, ce n'est que mon traitement, c'est l'Empereur qui paye » ("Don't be alarmed, it is only my salary; it is the Emperor who pays").

What Cauchy left to group theory is a result that fills exactly the gap in Lagrange's theorem. Lagrange tells us: the order of a subgroup must divide the order of the group; but the converse does not necessarily hold — a group of order 60 does not necessarily have a subgroup of order 15. Yet Cauchy proved in 1845: **as soon as a prime $p$ divides the order of a group, the group must contain an element of order $p$**. So that group of order 60, though not guaranteed to have a subgroup of order 15, must contain elements of order 2, 3 and 5. Later, when proving $\mathrm{Gal}(f)=S_5$, we will use its $p=5$ case — at that point it will be proved clearly on the spot with the picture of a ring of beads.

Take $f(x)=x^5-6x+3$. - **Irreducible**: Eisenstein's criterion with $p=3$ (the non-leading coefficients $0,0,0,-6,3$ are all divisible by $3$, and the constant term $3$ is not divisible by $9$), so $f$ is irreducible over $\mathbb{Q}$. (Eisenstein was used in §4.) - **$\mathrm{Gal}(f)=S_5$**: regard $\mathrm{Gal}(f)$ as a permutation group on the 5 roots of $f$ ($\le S_5$), and prove in three steps that it is the whole of $S_5$. - **Contains a $5$-cycle**: $f$ irreducible $\Rightarrow$ $\mathrm{Gal}$ is **transitive** on the 5 roots — any two roots $\alpha,\beta$ give $\mathbb{Q}(\alpha)\cong\mathbb{Q}[x]/(f)\cong\mathbb{Q}(\beta)$, and this isomorphism extends to an automorphism of the splitting field (the earlier machinery of sending roots to roots), sending $\alpha$ to $\beta$, so any root can reach any root. By the orbit-stabilizer theorem, the orbit length $5\mid|\mathrm{Gal}|$. > **Cauchy's theorem ($p\mid|G|\Rightarrow G$ has an element of order $p$), proved on the spot** ($p$ prime; with the picture of a ring of beads): string $p$ beads into a **ring**, write a group element on each, $x_1,\dots,x_p$, and require that multiplied in order they give $=e$. How many such **legal rings** are there? The first $p-1$ beads are chosen freely, and the last one is determined by $x_p=(x_1\cdots x_{p-1})^{-1}$: $|G|^{p-1}$ in all. > After **turning the ring by one place**, $(x_1,\dots,x_p)\to(x_2,\dots,x_p,x_1)$, it is still legal: $x_2\cdots x_px_1=x_1^{-1}(x_1\cdots x_p)x_1=e$. A ring turned over and over either turns out $p$ mutually different appearances (a group of $p$ — $p$ is prime, there is no intermediate size), or **stays the same however it is turned** (if and only if all the beads are the same $a$, with $a^p=e$; called an **all-same ring**). > Group them by "turning one place": the non-all-same ones in groups of $p$, each all-same ring on its own ⟹ **the number of all-same rings $\equiv|G|^{p-1}\pmod p$**. $p\mid|G|\Rightarrow p\mid|G|^{p-1}$, so the number of all-same rings is divisible by $p$; the trivial $(e,\dots,e)$ already counts as one ⟹ $\ge p\ge2$ ⟹ there is at least one more $(a,\dots,a)$, $a\neq e$, $a^p=e$, that is, an element of order $p$. ∎ > > Take $p=5$ (a ring of 5 beads): $5\mid|\mathrm{Gal}|$ gives an element of order 5 — in $S_5$ an element of order 5 can only be a $5$-cycle. - **Contains a transposition**: $f$ has exactly **3 real roots + 1 pair of conjugate complex roots** (the derivative has only two real critical points → the graph crosses the $x$ axis 3 times); complex conjugation fixes the 3 real roots and swaps that pair of complex roots, which is exactly a **transposition**. - **$5$-cycle + transposition $\Rightarrow S_5$** (proved on the spot, $p=5$ prime): let the $5$-cycle be $\sigma$ and the transposition $\tau$. Relabel so that $\tau=(1\,2)$. Since $p$ is prime, $\langle\sigma\rangle$ is transitive, some power $\sigma^k$ sends $1\!\to\!2$ and is still a $5$-cycle, and $\langle\sigma^k\rangle=\langle\sigma\rangle$ ($k$ coprime to $5$), so $\sigma^k$ can be used in place of $\sigma$; then relabel the remaining three points (fixing $1,2$, $\tau$ unchanged) so that $\sigma^k=(1\,2\,3\,4\,5)$. Conjugating $(1\,2)$ with it gives in turn $(2\,3),(3\,4),(4\,5)$, and adjacent transpositions generate the whole of $S_5$. So $\langle\sigma,\tau\rangle=S_5$. ∎

Putting the three steps together, $\mathrm{Gal}(f)$ contains both a $5$-cycle and a transposition, so $\mathrm{Gal}(f)=S_5$.

![The distribution of the roots of x⁵−6x+3: 3 real roots (red, fixed by complex conjugation) + 1 pair of conjugate complex roots (blue); complex conjugation only swaps this pair and fixes those three, which is exactly a transposition](/content/images/2026/06/fig_roots_x5.png)

*Figure 20 The distribution of the roots of x⁵−6x+3: 3 real roots (red, fixed by complex conjugation) + 1 pair of conjugate complex roots (blue); complex conjugation only swaps this pair and fixes those three, which is exactly a transposition*

![Complex conjugation = a transposition (animation): the 5 roots of x⁵−6x+3 in the complex plane; complex conjugation reflects across the real axis, swapping only that pair of complex roots and fixing the three real roots ⇒ a transposition](/content/images/2026/06/fig_roots_x5_anim.gif)

*Figure 21 Complex conjugation = a transposition (animation): the 5 roots of x⁵−6x+3 in the complex plane; complex conjugation reflects across the real axis, swapping only that pair of complex roots and fixing the three real roots ⇒ a transposition*

- **$S_5$ is not solvable**: its composition series $S_5\triangleright A_5\triangleright\{e\}$ runs into $A_5$ — and in §3 we proved that **$A_5$ is a simple group, and non-commutative**; this quotient cannot be peeled into commutative steps. So $S_5$ is not solvable.
- By the core theorem (the contrapositive of $\Rightarrow$): $\mathrm{Gal}(f)=S_5$ is not solvable $\Rightarrow$ **$x^5-6x+3$ has no solution in radicals**.

**The Abel–Ruffini theorem**: **the general polynomial equation of degree five and above has no uniform formula for its roots in radicals.** The concrete $x^5-6x+3$ above is a counterexample — its roots cannot be written out using only the coefficients, $+-\times\div$ and root extraction.

![The two composition series, solvable vs non-solvable: on the left, S₃▷A₃▷{e} of x³−2, each quotient ℤ/2, ℤ/3 commutative (green · solvable → has a solution in radicals); on the right, S₅▷A₅▷{e} of x⁵−6x+3, which hits A₅ (a non-commutative simple group, proved in §3), a layer that cannot be peeled into commutative steps (red · dashed · unbreakable), so non-solvable → no solution in radicals. Bottom = Abel–Ruffini: A₅, this non-commutative simple atom, is the root of the quintic having no uniform formula for its roots](/content/images/2026/06/fig_solvable_vs_s5.png)

*Figure 22 The two composition series, solvable vs non-solvable: on the left, S₃▷A₃▷{e} of x³−2, each quotient ℤ/2, ℤ/3 commutative (green · solvable → has a solution in radicals); on the right, S₅▷A₅▷{e} of x⁵−6x+3, which hits A₅ (a non-commutative simple group, proved in §3), a layer that cannot be peeled into commutative steps (red · dashed · unbreakable), so non-solvable → no solution in radicals. Bottom = Abel–Ruffini: A₅, this non-commutative simple atom, is the root of the quintic having no uniform formula for its roots*

![Solvable vs non-solvable (animation): the roots of x⁵=2 form a regular pentagon, and radicals light up the five vertices one by one (solvable ✓); the roots of x⁵−6x+3 are scattered, and radicals reach out but cannot get to them (non-solvable ✗)](/content/images/2026/06/fig_solvable_vs_s5_anim.gif)

*Figure 23 Solvable vs non-solvable (animation): the roots of x⁵=2 form a regular pentagon, and radicals light up the five vertices one by one (solvable ✓); the roots of x⁵−6x+3 are scattered, and radicals reach out but cannot get to them (non-solvable ✗)*

> **The honest scope**
>
> (do not exaggerate): this does not say "no quintic equation can be solved". Some quintics
>
> **can**
>
> be solved by radicals, for example $x^5-2$ (roots $\sqrt[5]2\cdot\zeta_5^k$, solvable Galois group). What Abel–Ruffini says is that
>
> **there is no formula that works for all quintics**, and that
>
> **there exist**
>
> concrete equations like $x^5-6x+3$ that simply cannot be written in radicals.

**Tying back to §3.** The last piece of the puzzle in the whole argument is "$A_5$ cannot be broken apart". In §3 we counted out $A_5$ element by element, computed $12+12$ with centralizers, and then checked divisibility of 60 case by case, proving that it is **the smallest non-commutative simple group** — at that time it was still just a "symmetry atom". Now its meaning shows itself: precisely because the atom $A_5$ is non-commutative and also cannot be broken apart, $S_5$ is not solvable, and the quintic equation has no formula for its roots in radicals.

---

## Epilogue: the first atom, and a list no one had seen

$A_5$ is the first "non-commutative symmetry atom" we have run into. You might naturally guess: the symmetry atoms are just the column of even-permutation groups $A_5, A_6, A_7, \dots$, right? Find them all, and isn't the story over?

**Precisely not.** List all the symmetry atoms (non-commutative simple groups) "smaller than two thousand", and you get this string of numbers:

$$
60,\quad 168,\quad 360,\quad 504,\quad 660,\quad 1092.
$$

$60$ is $A_5$, $360$ is $A_6$ — but that **$168$ no longer belongs to the family of alternating groups**. It comes from another kind of regular family (mathematicians later called it $\mathrm{PSL}(2,7)$, belonging to the large class of "Lie type") — these predictable families were later arranged into a "**periodic table**". $168$ is the first atom on the table to jump out of the alternating groups, and it told people for the first time: the atoms of symmetry are much richer than the one family of alternating groups; and the predictable families are not just one either. The true **exceptions**, which "no periodic table can hold", only come on stage further on.

![The non-commutative symmetry atoms smaller than 2000: 60(A₅), 360(A₆) in the alternating-group family; 168=PSL(2,7) is the first to jump out of the alternating groups, coming from](/content/images/2026/06/fig_atoms_list.png)

*Figure 24 The non-commutative symmetry atoms smaller than 2000: 60(A₅), 360(A₆) in the alternating-group family; 168=PSL(2,7) is the first atom to jump out of the alternating groups, coming from the "Lie type" periodic table*

![The exceptional atoms'](/content/images/2026/06/fig_atoms_table_anim.gif)

*Figure 25 The "periodic table" of the exceptional atoms (animation): first the alternating groups Aₙ are laid out in a column, then all the non-commutative atoms smaller than 2000 are listed, 60·168·360·504·660·1092, with 168 highlighted — it is not any Aₙ; it is the first atom to jump out of the alternating-group family*

And how hard are these atoms to find? Later we will meet two exceptional atoms that each scramble $100$ objects, of sizes $604{,}800$ and $44{,}352{,}000$ — that already sounds big, but the world they live in (all the even permutations of $100$ objects) is a $158$-digit number; within it those two atoms are smaller, by who knows how many orders of magnitude, than an atom is to the whole visible universe. **In a universe too large to imagine, searching for some things you do not even know exist** — that is the story that follows.

It will bring humanity into a war fought for thirty years, whose proof is so long that no one can read it through alone (EP5). And at the end of that war crouches a giant beast hidden in the deepest place, which no one had expected to exist.

But that is a story for later.

---

## Sources

**Biographies of the mathematicians (the historical skeleton)** — [MacTutor: Abel](https://mathshistory.st-andrews.ac.uk/Biographies/Abel/), [Ruffini](https://mathshistory.st-andrews.ac.uk/Biographies/Ruffini/), [Jordan](https://mathshistory.st-andrews.ac.uk/Biographies/Jordan/), [Galois](https://mathshistory.st-andrews.ac.uk/Biographies/Galois/), [Lagrange](https://mathshistory.st-andrews.ac.uk/Biographies/Lagrange/), [Cauchy](https://mathshistory.st-andrews.ac.uk/Biographies/Cauchy/). They support the lives and dates of the people in the text (Abel's death from illness, the gap in Ruffini's 1799 work, Jordan's 1870 *Traité des substitutions*, Cauchy's 1845 theorem and exile, Lagrange's 1770 *Réflexions*).

**Abel's life (tuberculosis)** — [Wikipedia: Niels Henrik Abel](https://en.wikipedia.org/wiki/Niels_Henrik_Abel). The dates of birth and death and the background of the correspondence with Crelle in the section "The letter that came too late".

**Galois's testament letter on the eve of the duel** — [IHP: Lettre-testament de Galois](http://www.galois.ihp.fr/ressources/vie-et-oeuvre-de-galois/lettres/lettre-testament/) (images of the original at the Institut Henri Poincaré in Paris). Supports the "manuscript on the eve of the duel" mentioned in the introduction.

**The impossibility of the 15-puzzle and debunking the Loyd legend** — [cut-the-knot: The Fifteen Puzzle](https://www.cut-the-knot.org/pythagoras/history15.shtml) (including the research of Slocum & Sonneveld, 2006: the real inventor was Noyes Chapman, not Loyd). Supports the historical boundaries of the parity argument in the introduction.

**The series' source book** — Mark Ronan, *Symmetry and the Monster* (OUP, 2006): [author page, Mark Ronan](https://en.wikipedia.org/wiki/Mark_Ronan). The skeleton of the story, the list of non-commutative simple groups <2000, the exceptional atoms (epilogue).

**Standard references for group theory and field theory** — D. S. Dummit & R. M. Foote, *Abstract Algebra*, 3rd ed. (Wiley, 2004): isomorphism theorems §3.3 · composition series and Jordan–Hölder §3.4 · field extensions and the degree of simple extensions §13.1 · the tower formula §13.2 · splitting fields and extension of isomorphisms §13.4 · Galois groups and automorphisms permuting roots §14.1 · the fundamental correspondence theorem of Galois theory §14.2 · solvability and radical extensions (Kummer, the insolvability of the quintic) §14.7. The sources of the standard lemmas marked "full proof in" in the main text. (See also Artin, *Galois Theory*, and Stewart, *Galois Theory*.)

*The historical portraits in the text (Abel, Galois, Ruffini, Jordan) and the illustration (Loyd's 15-puzzle) are all taken from *[*Wikimedia Commons*](https://commons.wikimedia.org/)* and are in the public domain (PD-old). The mathematical diagrams (Cayley tables, conjugacy classes, field towers, Galois correspondence lattices, root distributions, composition series, the periodic table of atoms, etc.) are original to this series.*
