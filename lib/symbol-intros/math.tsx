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
  { latex: "\\pm", use: "Plus or minus" },
  { latex: "\\times", use: "Multiplication (times)" },
  { latex: "\\div", use: "Division" },
  { latex: "\\cdot", use: "Centered dot, multiplication" },
  { latex: "\\neq", use: "Not equal" },
  { latex: "\\leq", use: "Less than or equal to" },
  { latex: "\\approx", use: "Approximately equal" },
  { latex: "\\infty", use: "Infinity" },
  { latex: "\\sqrt{x}", use: "Square root (\\sqrt[n]{x} for nth root)" },
  { latex: "\\frac{a}{b}", use: "Fraction" },
  { latex: "x^{2n}", use: "Superscript (exponent)" },
  { latex: "\\mathbb{R}", use: "Real numbers", pkg: "amssymb" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write math symbols in LaTeX?",
    answer:
      "Put them in math mode: $...$ for inline formulas and \\[...\\] or an equation environment for displayed ones, then use the symbol's command, for example $a \\times b \\neq c$. Using a math command outside math mode causes a Missing $ inserted error.",
  },
  {
    question: "Which packages do I need for LaTeX math symbols?",
    answer:
      "Most symbols are built in. Add \\usepackage{amsmath} for environments like align and commands like \\text and \\operatorname, and \\usepackage{amssymb} for extra symbols such as \\mathbb{R}, \\therefore, \\nexists and \\varnothing. mathtools extends amsmath with fixes and extra tools.",
  },
  {
    question: "How do I find the LaTeX command for a symbol?",
    answer:
      "Search this page or the category pages and click a card to copy its command. If you only know what the symbol looks like, Detexify lets you draw it and suggests matching commands, and the Comprehensive LaTeX Symbol List covers thousands of symbols.",
  },
];

export default function MathIntro() {
  return (
    <IntroSection>
      <IntroH2>LaTeX math symbols: the essentials</IntroH2>
      <IntroP>
        LaTeX math symbols only work in math mode, so wrap them in <Cmd>{"$...$"}</Cmd> for inline
        math or <Cmd>{"\\[...\\]"}</Cmd> for a displayed equation. The everyday ones are built
        in: <Cmd>{"\\pm"}</Cmd>, <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> and <Cmd>{"\\cdot"}</Cmd> for
        arithmetic, <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>, <Cmd>{"\\geq"}</Cmd> and <Cmd>{"\\approx"}</Cmd> for
        comparisons, <Cmd>{"\\infty"}</Cmd>, <Cmd>{"\\sqrt{x}"}</Cmd> and <Cmd>{"\\frac{a}{b}"}</Cmd>.
        Superscripts and subscripts use <Cmd>{"^"}</Cmd> and <Cmd>{"_"}</Cmd>, with braces for
        more than one character: <Cmd>{"x^{2n}"}</Cmd>. Extra symbols such as <Cmd>{"\\mathbb{R}"}</Cmd> and <Cmd>{"\\therefore"}</Cmd> come
        from amssymb. The table lists the math symbols people use most, with the package each
        one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: everyday math symbols</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        For more, browse the <IntroLink href="/symbols/greek">Greek letters</IntroLink>, <IntroLink href="/symbols/relations">relation symbols</IntroLink>, <IntroLink href="/symbols/set-theory">set theory symbols</IntroLink> and <IntroLink href="/symbols/calculus">calculus symbols</IntroLink>,
        or read the overview of <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>mathematical expressions in LaTeX</IntroLink>.
      </IntroP>

      <IntroH3>Frequently asked questions about LaTeX math symbols</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
