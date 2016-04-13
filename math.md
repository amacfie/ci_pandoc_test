% Pandoc math demos

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

## References
