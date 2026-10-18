import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function CombinatoricsIntro() {
  return (
    <IntroSection>
      <IntroH2>Combinatorics symbols in LaTeX</IntroH2>
      <IntroP>
        The factorial needs no special command: <Cmd>n!</Cmd> is just the letter and an
        exclamation mark, and the double factorial is <Cmd>n!!</Cmd>. The binomial coefficient
        is the most searched symbol in this category. Use amsmath&rsquo;s{" "}
        <Cmd>\binom{"{n}{k}"}</Cmd>, which sizes itself for inline or display math, or force a size
        with <Cmd>\dbinom</Cmd> and <Cmd>\tbinom</Cmd>. The older <Cmd>{"{n \\choose k}"}</Cmd>{" "}
        still works but does not play well with amsmath. Multinomial coefficients extend the
        same command: <Cmd>\binom{"{n}{k_1, k_2, \\ldots, k_m}"}</Cmd>.
      </IntroP>
      <IntroP>
        Permutations are usually spelled out as <Cmd>P(n, k)</Cmd> or written with the falling
        factorial <Cmd>(n)_k</Cmd> or <Cmd>n^{"{\\underline{k}}"}</Cmd>; the rising factorial is{" "}
        <Cmd>n^{"{\\overline{k}}"}</Cmd> or the Pochhammer symbol <Cmd>(a)_n</Cmd>. Stirling
        numbers use bracket and brace versions of a binomial, built with amsmath&rsquo;s{" "}
        <Cmd>\genfrac</Cmd>:{" "}
        <Cmd>\genfrac{"{\\{}{\\}}{0pt}{}{n}{k}"}</Cmd> for the second kind. Sums and products over
        index sets are <Cmd>\sum_{"{k=0}"}^{"{n}"}</Cmd> and <Cmd>\prod_{"{i=1}"}^{"{n}"}</Cmd>,
        ellipses are <Cmd>\ldots</Cmd> or <Cmd>\cdots</Cmd>, and the size of a finite set is{" "}
        <Cmd>|A|</Cmd> or <Cmd>\lvert A \rvert</Cmd>.
      </IntroP>
      <IntroP>
        Add <Cmd>\usepackage{"{amsmath}"}</Cmd> for <Cmd>\binom</Cmd>, <Cmd>\genfrac</Cmd> and{" "}
        <Cmd>\lvert</Cmd>; nothing here requires amssymb. For sums, products and fractions in
        general, see our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>
        .
      </IntroP>
    </IntroSection>
  );
}
