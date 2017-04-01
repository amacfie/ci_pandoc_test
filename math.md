---
title: Pandoc math demos
secPrefix:
  - "Sec."
  - "Secs."
---

$$ \def\mc#1{\mathcal{#1}} $$
$$ \newcommand{\Var}{\mathrm{Var}} $$
$$ \newcommand{\Cov}{\mathrm{Cov}} $$

# This is a heading (level 1)

$a^2 + b^2 = c^2$

$v(t) = v_0 + \frac{1}{2}at^2$

$\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$

$\exists x \forall y (Rxy \equiv Ryx)$

$p \wedge q \models p$

$\Box\diamond p\equiv\diamond p$

$\int_{0}^{1} x dx = \left[ \frac{1}{2}x^2 \right]_{0}^{1} = \frac{1}{2}$

## New section

$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = \lim_{n\rightarrow\infty} (1+x/n)^n$

### Next heading {#sec:nextsec}

$$\begin{align} \label{eq:hi}
  e &= e \\
  &= e
\end{align}$$

(@fundam) $$x^{T}F x'=0$$

Equation (@fundam) shows...
Using $e^{-x} = \sum_{n \geq 0} x^n/n!$ we have $\text{text test}$

[@knut]

<div id="hi" class="theorem">

Theorem #thm:f

Given a field $F$...
</div>

And now, the pseudocode:
<pre>
var N = \(6^2\)
var j = 4
for i = 1 to N
  if i = j
    N = N + 1
</pre>

In [Theorem #](#thm:f) we concluded...
In [an earlier section](#this-is-a-heading-level-2) and also
[@sec:nextsec]...
<!-- p tag required -->
<div class="proof"><p>
Omitted.
Lorem ipsum.
</p></div>


# Vestibulum

Praesent adipiscing vulputate diam, at cursus orci porta eget. Fusce congue
orci sed arcu iaculis, non ornare mi bibendum. Quisque tristique vehicula
bibendum. Sed commodo tortor non vulputate porta. Vivamus dictum justo velit,
a interdum dolor bibendum iaculis. Nulla convallis sagittis lectus,
scelerisque lobortis elit fermentum a. Quisque accumsan sollicitudin nulla
vitae gravida. Sed ut metus eget magna tincidunt pulvinar id ut massa. Quisque
condimentum mi vitae tortor laoreet, sed placerat neque consectetur. Duis
tortor velit, dapibus fringilla aliquam at, malesuada a sem. Quisque purus
eros, egestas quis bibendum sed, fermentum nec lacus. Nullam non lectus risus.

1. Faucibus
    1. Pellentesque habitant morbi tristique
    1. Etiam pellentesque tellus neque, a sagittis nibh hendrerit vel
    1. Vivamus vulputate sapien ut nulla porttitor, ac molestie odio porttitor
1. Praesent
    1. Maecenas nibh
        1. Cavallis lectus nulla
        1. Morbi a tempor nulla
        1. Duis
        1. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut
        dignissim justo non ante volutpat, ut tincidunt risus porttitor.
    1. Vestibulum et velit quis neque scelerisque laoreet
    1. Donec et risus rhoncus

Nam viverra a enim at aliquet. Maecenas blandit, lacus non cursus venenatis,
arcu orci rhoncus ante, id iaculis est libero in sapien. Pellentesque ac arcu
vehicula, iaculis risus non, vestibulum lectus. Nulla a lobortis nulla. Morbi
nec eros placerat, congue nisi at, fermentum velit. Class aptent taciti
sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed
bibendum metus sed posuere commodo. Mauris tincidunt volutpat porta. Duis
vehicula tortor eget elit congue placerat. Phasellus semper convallis quam nec
congue. Nunc et felis tortor. Sed ullamcorper ut nunc sit amet rutrum. In
posuere ante sit amet nunc commodo semper. Mauris posuere, est sed viverra
pellentesque, tellus arcu vestibulum elit, non porta dolor mauris at nulla.
Maecenas dignissim, leo non ultricies ultrices, odio metus adipiscing turpis,
nec fringilla ipsum metus et lorem.

## Sapien rhoncus

Lorem ipsum dolor sit [amet](page2.html), consectetur adipiscing elit.
Suspendisse eget luctus odio.

Nullam at eros fermentum, iaculis tortor ac,
malesuada mi.  Curabitur mollis enim sed leo rhoncus, at elementum sapien
luctus. Phasellus quam libero, ultrices nec malesuada a, luctus sit amet ante.
Ut vulputate dictum cursus. Proin ac sapien rhoncus, fringilla nulla non,
consequat lacus.

~~~
for i in 0..5
   if i < 2 then
      next
   end
   puts "Value of local variable is #{i}"
end
~~~

Integer varius tincidunt nisi, consequat interdum lacus commodo non. Etiam ut
convallis justo. Fusce `i` malesuada justo id justo adipiscing elementum. Donec
in nibh pellentesque, tincidunt `i < 2` risus vel, egestas odio. Ut eget ante
quam.  Vestibulum lobortis ac nulla ut facilisis. Cras egestas venenatis ipsum,
et iaculis ante viverra sit amet. Vestibulum vitae massa dictum quam bibendum
ultrices ac non lectus.

+---------------+---------------+--------------------+
| Fruit         | Price         | Advantages         |
+===============+===============+====================+
| Bananas       | $1.34         | - built-in wrapper |
|               |               | - bright color     |
+---------------+---------------+--------------------+
| Oranges       | $2.10         | - cures scurvy     |
|               |               | - tasty            |
+---------------+---------------+--------------------+

# Convergence in distribution

Different random variables may have the same distribution function.
There is a type of convergence that only depends on the distribution function:
_convergence in distribution_.

Given a sequence of dfs $F_0, F_1, \ldots$, we say $F_n$ converges in
distribution (a.k.a. weakly) to $F_0$ and write $F_n \Rightarrow F_0$ iff
for all $x \in \mc{C}(F_0)$, $F_n(x) \rightarrow F_0(x).$
Here $\mc{C}(F_0)$ is the points at which $F_0$ is continuous.
Also, if $X_n$ has df $F_n$ we write can write $X_n \Rightarrow X_0$.


A function $F$ which is a df except that $F(\infty) \neq 1$ or
$F(-\infty) \neq 0$ is called _defective_.

Lemma 8.1.1: Distribution functions are uniquely determined on a dense set

Lemma 8.3.1. (If dfs converge weakly, so do their inverses.)
Suppose $F_n \Rightarrow F_0$.
If $t \in (0, 1) \cap \mc{C}(F_0^\leftarrow),$
then
$F_n^\leftarrow (t) \rightarrow F_0^\leftarrow(t)$.

Baby Skorohod Theorem: Suppose $(X_n)$ are random variables such that
$X_n \Rightarrow X_0$.
Then there exist random variables $X^\sharp_n$ defined on
$( [0, 1], \mc{B}([0, 1]), \lambda)$ such that for each $n$,
$X_n$ and $X^\sharp_n$ have the same distribution and
$X^\sharp_n \rightarrow X^\sharp_0$ a.s. w.r.t. $\lambda$.

(Almost-)Continuous Mapping Theorem. "Interchanging continuous functions and
convergence in distribution":
Let $(X_n)$ be random variables such that
$X_n \Rightarrow X_0.$
Say the df of $X_n$ is $F_n$.
Let $h: \mathbb{R} \rightarrow \mathbb{R}$ satisfy
$P[ X_0 \in Disc(h) ] = 0,$ where
$Disc(h)$ is the locations of discontinuities of $h$.
Then $h(X_n) \Rightarrow h(X_0)$ and
if $h$ is bounded, dominated convergence implies
$E(h(X_n))) \rightarrow E(h(X_0)).$

Theorem 8.4.1: Let $(F_n)$ be distribution functions.
The following are equivalent:

1. $F_n \Rightarrow F_0$.
1. For all $f: \mathbb{R} \rightarrow \mathbb{R}$ which are bounded and
continuous,
$\int f d F_n \rightarrow \int f d F_0.$
Equivalently, if $X_n$ is a random variable with df $F_n (n \geq 0)$ then for
$f$ bounded and continuous,
$$
E(f(X_n)) \rightarrow E(f(X_0)).
$$
1. If $A \in \mc{B}(\mathbb{R})$ satisfies $F_0(\partial(A)) = 0,$
then $F_n(A) \rightarrow F_0(A).$
(The special case of finite intervals $I$ with $F_0(\partial(I))=0$ is also
equivalent.)

Prop 8.5.1: Convergence i.p. implies convergence in distribution, but not
vice versa

Convergence in distribution is easy to have, but now basic properties with
random variables and limits are under question.
Slutsky's theorem: Suppose
$X, X_n, Y_n, n \geq 1$, are random variables.
If $X_n \Rightarrow X$, and $X_n - Y_n \rightarrow 0$ in probability,
then
$Y_n \Rightarrow X.$


# References

