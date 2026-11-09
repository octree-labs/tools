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

const quickRef: QuickRefRow[] = [
  { latex: "\\sum_{i=1}^{n} a_i", use: "Sum (sigma notation)" },
  { latex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}", use: "Infinite series" },
  { latex: "\\prod_{i=1}^{n} x_i", use: "Product" },
  { latex: "\\coprod", use: "Coproduct" },
  { latex: "\\sum\\limits_{i=1}^{n}", use: "Limits above and below in inline math" },
  { latex: "\\displaystyle\\sum_{i=1}^{n}", use: "Display-size sum in inline math" },
  { latex: "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}", use: "Double sum" },
  {
    latex: "\\sum_{\\substack{i < j \\\\ i \\neq k}}",
    use: "Multi-line conditions",
    pkg: "amsmath",
  },
  { latex: "\\bigcup_{i \\in I} A_i", use: "Union over an index" },
  { latex: "\\bigcap_{i=1}^{n} A_i", use: "Intersection over an index" },
  { latex: "\\sum_{k=0}^{n} \\binom{n}{k}", use: "Binomial sum", pkg: "amsmath" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write a sum in LaTeX?",
    answer:
      "Use \\sum with a subscript and superscript in math mode: $\\sum_{i=1}^{n} a_i$. Wrap multi-character limits in braces. In a displayed equation (\\[...\\]) the limits appear above and below the sigma; inline they appear to the side.",
  },
  {
    question: "How do I put the limits above and below the sum in inline math?",
    answer:
      "Add \\limits after the operator, \\sum\\limits_{i=1}^{n}, or make the whole sum display size with \\displaystyle\\sum_{i=1}^{n}. Use this sparingly, because it increases the line spacing of the paragraph.",
  },
  {
    question: "How do I write the product symbol in LaTeX?",
    answer:
      "\\prod prints the product symbol ∏ and takes limits like \\sum: $\\prod_{i=1}^{n} x_i$. Do not use \\Pi, which is the Greek letter and neither grows in display math nor places its limits correctly.",
  },
];

export default function SummationIntro() {
  return (
    <IntroSection>
      <IntroH2>Sum in LaTeX: sigma notation, products and limits</IntroH2>
      <IntroP>
        A sum in LaTeX is written with <Cmd>{"\\sum"}</Cmd>, which prints the capital sigma (Σ)
        as a big operator: <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> puts the index below and the upper
        limit above. The product symbol works the same way with <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>.
        In display math the limits sit above and below the sign; in inline math they move to the
        side unless you add <Cmd>{"\\limits"}</Cmd> or <Cmd>{"\\displaystyle"}</Cmd>. Multi-line
        conditions under a sum use <Cmd>{"\\substack"}</Cmd> from amsmath, and the big set operators <Cmd>{"\\bigcup"}</Cmd> and <Cmd>{"\\bigcap"}</Cmd> follow
        the same rules. The table lists the summation symbols people use most, with the package
        each one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: sums, products and limits</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Integrals and limits are on the <IntroLink href="/symbols/calculus">calculus symbols</IntroLink> page,
        and binomial coefficients and factorials on the <IntroLink href="/symbols/combinatorics">combinatorics symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about sums in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
