import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function FunctionsIntro() {
  return (
    <IntroSection>
      <IntroH2>Function symbols in LaTeX</IntroH2>
      <IntroP>
        A function is declared with the arrow <Cmd>\to</Cmd> (an alias of{" "}
        <Cmd>\rightarrow</Cmd>) between its domain and codomain, <Cmd>f: A \to B</Cmd>, and its
        rule with <Cmd>\mapsto</Cmd>, as in <Cmd>x \mapsto x^2</Cmd>. Composition is{" "}
        <Cmd>f \circ g</Cmd>, the inverse is <Cmd>f^{"{-1}"}</Cmd>, and restriction to a subset is{" "}
        <Cmd>f|_A</Cmd>. Injections and surjections get their own arrows,{" "}
        <Cmd>\hookrightarrow</Cmd> and <Cmd>\twoheadrightarrow</Cmd> (the latter from amssymb),
        and a bijection is often <Cmd>\leftrightarrow</Cmd> or <Cmd>\xrightarrow{"{\\sim}"}</Cmd>.
      </IntroP>
      <IntroP>
        Standard functions such as <Cmd>\sin</Cmd>, <Cmd>\cos</Cmd>, <Cmd>\log</Cmd>,{" "}
        <Cmd>\ln</Cmd>, <Cmd>\exp</Cmd>, <Cmd>\lim</Cmd>, <Cmd>\max</Cmd>, <Cmd>\min</Cmd> and{" "}
        <Cmd>\ker</Cmd> are built in and typeset upright with correct spacing. Anything else
        (image, domain, support, sign) should be wrapped in amsmath&rsquo;s{" "}
        <Cmd>\operatorname{"{Im}"}</Cmd> or declared once with{" "}
        <Cmd>\DeclareMathOperator{"{\\dom}{dom}"}</Cmd>; plain <Cmd>Im(f)</Cmd> would be set as
        the product of two italic variables. Piecewise definitions use the amsmath{" "}
        <Cmd>cases</Cmd> environment: <Cmd>f(x) = \begin{"{cases}"} a &amp; x &gt; 0 \\ b &amp;
        x \leq 0 \end{"{cases}"}</Cmd>.
      </IntroP>
      <IntroP>
        Load <Cmd>\usepackage{"{amsmath}"}</Cmd> for <Cmd>\operatorname</Cmd>,{" "}
        <Cmd>\DeclareMathOperator</Cmd>, <Cmd>cases</Cmd> and <Cmd>\xrightarrow</Cmd>, and{" "}
        <Cmd>amssymb</Cmd> for <Cmd>\twoheadrightarrow</Cmd>. Our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/math-functions" external>
          math functions in LaTeX
        </IntroLink>{" "}
        covers operators, limits and function spacing in more depth.
      </IntroP>
    </IntroSection>
  );
}
