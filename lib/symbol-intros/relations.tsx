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
  { latex: "\\neq", use: "Not equal (alias \\ne)" },
  { latex: "\\approx", use: "Approximately equal" },
  { latex: "<", use: "Less than" },
  { latex: ">", use: "Greater than" },
  { latex: "\\leq", use: "Less than or equal to" },
  { latex: "\\geq", use: "Greater than or equal to" },
  { latex: "\\equiv", use: "Equivalent, identical, congruent mod n" },
  { latex: "\\sim", use: "Similar, distributed as" },
  { latex: "\\cong", use: "Congruent, isomorphic" },
  { latex: "\\propto", use: "Proportional to" },
  { latex: "\\ll", use: "Much less than (\\gg for much greater)" },
  { latex: "\\leqslant", use: "Slanted less than or equal to", pkg: "amssymb" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write not equal in LaTeX?",
    answer:
      "Use \\neq (or its alias \\ne) in math mode: $a \\neq b$ prints a ≠ b. No package is needed. For other negated relations put \\not in front, as in \\not\\equiv, or use the dedicated amssymb versions such as \\nleq and \\ncong.",
  },
  {
    question: "How do I write approximately equal in LaTeX?",
    answer:
      "\\approx prints ≈ and is the standard approximately-equal symbol: $\\pi \\approx 3.14$. Close relatives are \\simeq (≃), \\cong (≅), \\sim (∼) and \\doteq (≐), all built in, and \\approxeq (≊) from amssymb.",
  },
  {
    question: "How do I write less than in LaTeX?",
    answer:
      "In math mode type < and > directly: $a < b$. In running text outside math mode, use \\textless and \\textgreater or wrap the sign in $...$, since with the old OT1 font encoding a bare < can print as an inverted exclamation mark.",
  },
];

export default function RelationsIntro() {
  return (
    <IntroSection>
      <IntroH2>Relation symbols in LaTeX: not equal, approximately equal and less than</IntroH2>
      <IntroP>
        Relation symbols in LaTeX compare two expressions, and the common ones are all built in.
        Not equal in LaTeX is <Cmd>{"\\neq"}</Cmd> (≠), approximately equal is <Cmd>{"\\approx"}</Cmd> (≈),
        less than and greater than are typed as <Cmd>{"<"}</Cmd> and <Cmd>{">"}</Cmd>, and less
        than or equal to is <Cmd>{"\\leq"}</Cmd> (≤). Equivalence is <Cmd>{"\\equiv"}</Cmd>, similar
        is <Cmd>{"\\sim"}</Cmd>, congruent is <Cmd>{"\\cong"}</Cmd> and proportional to is <Cmd>{"\\propto"}</Cmd>.
        Negate any relation with <Cmd>{"\\not"}</Cmd> in front, or load amssymb for dedicated
        forms like <Cmd>{"\\nleq"}</Cmd> and slanted ones like <Cmd>{"\\leqslant"}</Cmd>. The
        table lists the relations people use most, with the package each one needs; the full list
        follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used relation symbols</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Strict and partial orders, including <Cmd>{"\\prec"}</Cmd> and <Cmd>{"\\succeq"}</Cmd>,
        are on the <IntroLink href="/symbols/order">order and inequality symbols</IntroLink> page;
        subset relations are on the <IntroLink href="/symbols/set-theory">set theory symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about relation symbols in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
