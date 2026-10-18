import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function OrderIntro() {
  return (
    <IntroSection>
      <IntroH2>Order and inequality symbols in LaTeX</IntroH2>
      <IntroP>
        Strict inequalities are typed directly as <Cmd>&lt;</Cmd> and <Cmd>&gt;</Cmd> in math
        mode; the non-strict forms are <Cmd>\leq</Cmd> and <Cmd>\geq</Cmd>, with the shorter
        aliases <Cmd>\le</Cmd> and <Cmd>\ge</Cmd>. Much-less-than and much-greater-than are{" "}
        <Cmd>\ll</Cmd> and <Cmd>\gg</Cmd>. If you prefer the slanted European style, amssymb
        provides <Cmd>\leqslant</Cmd> and <Cmd>\geqslant</Cmd>, and it also supplies the negated
        relations <Cmd>\nless</Cmd>, <Cmd>\ngtr</Cmd>, <Cmd>\nleq</Cmd> and <Cmd>\ngeq</Cmd>,
        which are cleaner than stacking <Cmd>\not</Cmd> in front of a symbol.
      </IntroP>
      <IntroP>
        Partial orders and preorders use the curly comparison symbols <Cmd>\prec</Cmd>,{" "}
        <Cmd>\succ</Cmd>, <Cmd>\preceq</Cmd> and <Cmd>\succeq</Cmd>, plus{" "}
        <Cmd>\preccurlyeq</Cmd> and <Cmd>\succcurlyeq</Cmd> from amssymb. Inclusion orders are{" "}
        <Cmd>\subseteq</Cmd> and <Cmd>\sqsubseteq</Cmd>. Extremal elements come from the built-in
        operators <Cmd>\min</Cmd>, <Cmd>\max</Cmd>, <Cmd>\inf</Cmd> and <Cmd>\sup</Cmd>, which
        take limits as subscripts in display math, for example{" "}
        <Cmd>\sup_{"{x \\in S}"} f(x)</Cmd>. Subset and element relations are covered on the{" "}
        <IntroLink href="/symbols/set-theory">set theory symbols</IntroLink> page.
      </IntroP>
      <IntroP>
        Only the negated, slanted and curly-equal forms need{" "}
        <Cmd>\usepackage{"{amssymb}"}</Cmd>; the rest is core LaTeX. Chains of inequalities such as <Cmd>a &lt; b \leq c</Cmd> can be typed in
        one go. Read our guide to the{" "}
        <IntroLink href="https://www.useoctree.com/blog/greater-than-less-than-symbols-guide" external>
          greater-than and less-than symbols
        </IntroLink>{" "}
        and the overview of{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>
        .
      </IntroP>
    </IntroSection>
  );
}
