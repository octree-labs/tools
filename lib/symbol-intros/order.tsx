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
  { latex: "<", use: "Less than (type it directly)" },
  { latex: ">", use: "Greater than (type it directly)" },
  { latex: "\\leq", use: "Less than or equal to (alias \\le)" },
  { latex: "\\geq", use: "Greater than or equal to (alias \\ge)" },
  { latex: "\\neq", use: "Not equal to (alias \\ne)" },
  { latex: "\\ll", use: "Much less than" },
  { latex: "\\gg", use: "Much greater than" },
  { latex: "\\leqslant", use: "Less than or equal to, slanted", pkg: "amssymb" },
  { latex: "\\lesssim", use: "Less than or approximately", pkg: "amssymb" },
  { latex: "\\not<", use: "Not less than" },
  { latex: "\\nleq", use: "Not less than or equal to", pkg: "amssymb" },
  { latex: "\\prec", use: "Precedes (partial order); \\succ for succeeds" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write less than or equal to in LaTeX?",
    answer:
      "Write \\leq, or its shorter alias \\le, in math mode: $a \\leq b$. Greater than or equal to is \\geq or \\ge. Both are built in. For the slanted style common in European texts, load amssymb and use \\leqslant and \\geqslant.",
  },
  {
    question: "How do I type the less than symbol in LaTeX?",
    answer:
      "In math mode type < directly: $a < b$. In running text outside math mode, the default OT1 font encoding prints ¡ instead of <, so either wrap it as $<$ or use \\textless (and \\textgreater for >), or load \\usepackage[T1]{fontenc}.",
  },
  {
    question: "How do I write not less than or not equal in LaTeX?",
    answer:
      "Not equal is \\neq or \\ne. For the other relations, put \\not in front of the symbol, as in \\not<, or load amssymb for the dedicated negations \\nless, \\ngtr, \\nleq and \\ngeq, which look cleaner than a stacked slash.",
  },
  {
    question: "What is the difference between \\leq and \\le in LaTeX?",
    answer:
      "None: \\le is an alias of \\leq and both print ≤, just as \\ge is an alias of \\geq and \\ne an alias of \\neq. Use whichever you prefer, consistently.",
  },
];

export default function OrderIntro() {
  return (
    <IntroSection>
      <IntroH2>Less than, greater than and less than or equal to in LaTeX</IntroH2>
      <IntroP>
        In LaTeX, less than and greater than are typed directly in math mode as{" "}
        <Cmd>&lt;</Cmd> and <Cmd>&gt;</Cmd>. Less than or equal to in LaTeX is{" "}
        <Cmd>\leq</Cmd> (or the alias <Cmd>\le</Cmd>), greater than or equal to is{" "}
        <Cmd>\geq</Cmd> (<Cmd>\ge</Cmd>) and not equal is <Cmd>\neq</Cmd>; all three are built
        in, so <Cmd>$a \leq b$</Cmd> works in any document. Much-less-than is <Cmd>\ll</Cmd>,
        and the slanted, approximate and negated forms come from amssymb. The table lists the
        inequality symbols people use most, with the package each one needs; the full list of
        order symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Partial orders and bounds</IntroH3>
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
        <Cmd>\usepackage{"{amssymb}"}</Cmd>; the rest is core LaTeX. Chains of inequalities such
        as <Cmd>a &lt; b \leq c</Cmd> can be typed in one go. Read our guide to the{" "}
        <IntroLink href="https://www.useoctree.com/blog/greater-than-less-than-symbols-guide" external>
          greater-than and less-than symbols
        </IntroLink>{" "}
        and the overview of{" "}
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
