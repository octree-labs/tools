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
  { latex: "\\land", use: "AND (alias \\wedge)" },
  { latex: "\\lor", use: "OR (alias \\vee)" },
  { latex: "\\lnot", use: "NOT (alias \\neg)" },
  { latex: "\\overline{A}", use: "NOT, bar notation" },
  { latex: "\\oplus", use: "XOR (exclusive or)" },
  { latex: "\\veebar", use: "XOR, logic style", pkg: "amssymb" },
  { latex: "\\barwedge", use: "NAND", pkg: "amssymb" },
  { latex: "\\Rightarrow", use: "Implies" },
  { latex: "\\iff", use: "If and only if (equivalence)" },
  { latex: "\\top", use: "True, 1" },
  { latex: "\\bot", use: "False, 0" },
  { latex: "\\forall x \\, \\exists y", use: "For all, there exists" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the AND and OR symbols in LaTeX?",
    answer:
      "AND (∧) is \\land or its alias \\wedge, and OR (∨) is \\lor or \\vee. Both are built in and go in math mode: $A \\land B$, $A \\lor B$. NOT is \\lnot or \\neg. In circuit notation you can instead write A \\cdot B for AND, A + B for OR and \\overline{A} for NOT.",
  },
  {
    question: "How do I write XOR in LaTeX?",
    answer:
      "Use \\oplus (⊕), which is built in: $A \\oplus B$. Logic texts sometimes use \\veebar (⊻), which needs \\usepackage{amssymb}. XNOR is usually written \\odot or \\overline{A \\oplus B}.",
  },
  {
    question: "Which package do I need for boolean algebra symbols in LaTeX?",
    answer:
      "None for the common ones: \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall and \\exists are built in. Load amssymb for \\veebar and \\barwedge, and amsmath for \\implies.",
  },
];

export default function BooleanIntro() {
  return (
    <IntroSection>
      <IntroH2>Boolean algebra symbols in LaTeX: AND, OR, XOR</IntroH2>
      <IntroP>
        The boolean algebra symbols in LaTeX reuse the logic connectives: the AND symbol is{" "}
        <Cmd>\land</Cmd> (&and;), the OR symbol is <Cmd>\lor</Cmd> (&or;) and NOT is{" "}
        <Cmd>\lnot</Cmd> (&not;). XOR in LaTeX is <Cmd>\oplus</Cmd> (&oplus;), or{" "}
        <Cmd>\veebar</Cmd> from amssymb. Implication and equivalence are <Cmd>\Rightarrow</Cmd>{" "}
        and <Cmd>\iff</Cmd>, the constants true and false are <Cmd>\top</Cmd> and{" "}
        <Cmd>\bot</Cmd>, and the quantifiers are <Cmd>\forall</Cmd> and <Cmd>\exists</Cmd>. All
        of them go in math mode. The table lists the commands people use most, with the package
        each one needs; the full list of logic gate symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Circuit-style notation</IntroH3>
      <IntroP>
        Digital-design and circuit texts prefer the algebraic style:{" "}
        <Cmd>A \cdot B</Cmd> or just <Cmd>AB</Cmd> for AND, <Cmd>A + B</Cmd> for OR, and a bar for
        negation, written <Cmd>\overline{"{A}"}</Cmd> for a whole expression or{" "}
        <Cmd>\bar{"{A}"}</Cmd> for a single letter. De Morgan&rsquo;s law then reads{" "}
        <Cmd>\overline{"{A \\cdot B}"} = \overline{"{A}"} + \overline{"{B}"}</Cmd>. The Sheffer
        stroke and Peirce arrow can be written as <Cmd>\uparrow</Cmd> and{" "}
        <Cmd>\downarrow</Cmd>, and the Boolean domain is{" "}
        <Cmd>\mathbb{"{B}"} = \{"{0, 1\\}"}</Cmd>.
      </IntroP>
      <IntroP>
        Add <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> to the preamble for{" "}
        <Cmd>\veebar</Cmd>, <Cmd>\barwedge</Cmd>, <Cmd>\implies</Cmd> and <Cmd>\mathbb</Cmd>. For
        truth tables, the <Cmd>tabular</Cmd> environment with <Cmd>$\land$</Cmd> in the header row
        is enough. See our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>{" "}
        for spacing and alignment, and the{" "}
        <IntroLink href="/symbols/logic">logic symbols</IntroLink> page for quantifiers and
        turnstiles.
      </IntroP>

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
