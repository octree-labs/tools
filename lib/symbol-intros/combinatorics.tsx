import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroLink,
  IntroP,
  IntroSection,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

export const quickRef: QuickRefRow[] = [
  { latex: "\\binom{n}{k}", use: "n choose k (binomial coefficient)", pkg: "amsmath" },
  { latex: "\\dbinom{n}{k}", use: "Display-size binomial, even inline", pkg: "amsmath" },
  { latex: "\\tbinom{n}{k}", use: "Text-size binomial, even in display", pkg: "amsmath" },
  { latex: "{n \\choose k}", use: "Plain TeX choose (avoid with amsmath)" },
  { latex: "n!", use: "Factorial" },
  { latex: "n!!", use: "Double factorial" },
  { latex: "\\frac{n!}{k!(n-k)!}", use: "Binomial coefficient formula" },
  { latex: "\\binom{n}{k_1, k_2, \\ldots, k_m}", use: "Multinomial coefficient", pkg: "amsmath" },
  { latex: "P(n, k) = \\frac{n!}{(n-k)!}", use: "Permutations (nPr)" },
  { latex: "n^{\\underline{k}}", use: "Falling factorial" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write n choose k in LaTeX?",
    answer:
      "Load amsmath and write \\binom{n}{k}, which prints n over k in parentheses and sizes itself for inline or display math. Use \\dbinom{n}{k} to force the large display size and \\tbinom{n}{k} for the small text size. The plain TeX form {n \\choose k} also works, but amsmath warns against it.",
  },
  {
    question: "How do I write a factorial in LaTeX?",
    answer:
      "A factorial needs no command: write n! in math mode. The double factorial is n!!, and for an expression wrap it in parentheses, as in (n+1)!. The binomial formula is \\frac{n!}{k!(n-k)!}.",
  },
  {
    question: "How do I write a multinomial coefficient in LaTeX?",
    answer:
      "Reuse \\binom with a list in the lower argument: \\binom{n}{k_1, k_2, \\ldots, k_m}. Or write it out as \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
  },
];

export default function CombinatoricsIntro() {
  return (
    <IntroSection>
      <IntroH2>Choose and factorial in LaTeX: combinatorics symbols</IntroH2>
      <IntroP>
        To write &ldquo;n choose k&rdquo; in LaTeX, load amsmath and use{" "}
        <Cmd>\binom{"{n}{k}"}</Cmd>, which prints the binomial coefficient in parentheses and
        sizes itself for inline or display math; <Cmd>\dbinom</Cmd> and <Cmd>\tbinom</Cmd> force
        the large or small size. A factorial in LaTeX needs no command at all: <Cmd>n!</Cmd> is
        the letter and an exclamation mark, so the binomial formula is{" "}
        <Cmd>\frac{"{n!}{k!(n-k)!}"}</Cmd>. The table lists the combinatorics commands people use
        most, with the package each one needs; the full list of symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Permutations, Stirling numbers and sums</IntroH3>
      <IntroP>
        Permutations are usually spelled out as <Cmd>P(n, k)</Cmd> or written with the falling
        factorial <Cmd>(n)_k</Cmd> or <Cmd>n^{"{\\underline{k}}"}</Cmd>; the rising factorial is{" "}
        <Cmd>n^{"{\\overline{k}}"}</Cmd> or the Pochhammer symbol <Cmd>(a)_n</Cmd>. Stirling
        numbers use bracket and brace versions of a binomial, built with amsmath&rsquo;s{" "}
        <Cmd>\genfrac</Cmd>:{" "}
        <Cmd>\genfrac{"{\\{}{\\}}{0pt}{}{n}{k}"}</Cmd> for the second kind. Sums and products over
        index sets are <Cmd>\sum_{"{k=0}"}^{"{n}"}</Cmd> and <Cmd>\prod_{"{i=1}"}^{"{n}"}</Cmd>,
        and the size of a finite set is <Cmd>|A|</Cmd> or <Cmd>\lvert A \rvert</Cmd>.
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

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
