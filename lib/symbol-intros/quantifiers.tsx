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
  { latex: "\\forall", use: "For all" },
  { latex: "\\exists", use: "There exists" },
  { latex: "\\nexists", use: "There does not exist", pkg: "amssymb" },
  { latex: "\\exists!", use: "There exists exactly one" },
  { latex: "\\forall x \\in A", use: "For all x in A" },
  { latex: "\\in", use: "Element of" },
  { latex: "\\notin", use: "Not an element of" },
  { latex: "\\neg", use: "Not" },
  { latex: "\\land", use: "And" },
  { latex: "\\lor", use: "Or" },
  { latex: "\\implies", use: "Implies", pkg: "amsmath" },
  { latex: "\\iff", use: "If and only if" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write for all in LaTeX?",
    answer:
      "Use \\forall in math mode: $\\forall x \\in \\mathbb{R}$ prints ∀x ∈ ℝ. It is built in. Add a separator after the bound variable, for example \\forall x,\\ P(x) or \\forall x : P(x), to keep the formula readable.",
  },
  {
    question: "How do I write there exists and there does not exist in LaTeX?",
    answer:
      "There exists is \\exists (∃), built in. There does not exist is \\nexists (∄), which needs \\usepackage{amssymb}; \\not\\exists also works without a package but looks less clean. For unique existence write \\exists!.",
  },
  {
    question: "How do I write such that in LaTeX?",
    answer:
      "In set-builder notation use a vertical bar or colon: \\{ x \\in A \\mid x > 0 \\} or \\{ x : x > 0 \\}; \\mid gives the right spacing. In a quantified statement a comma or \\text{ s.t. } is common, as in \\exists x \\in A \\text{ s.t. } x > 0.",
  },
];

export default function QuantifiersIntro() {
  return (
    <IntroSection>
      <IntroH2>Quantifiers in LaTeX: for all, there exists and element of</IntroH2>
      <IntroP>
        The quantifiers in LaTeX are <Cmd>{"\\forall"}</Cmd> (for all, ∀) and <Cmd>{"\\exists"}</Cmd> (there
        exists, ∃), both built in; <Cmd>{"\\nexists"}</Cmd> for there does not exist comes from
        amssymb, and unique existence is written <Cmd>{"\\exists!"}</Cmd>. Quantified statements
        usually combine them with element of, <Cmd>{"\\in"}</Cmd>, and a separator such as a comma
        or a colon: <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. Negation is <Cmd>{"\\neg"}</Cmd>,
        and implication and equivalence are <Cmd>{"\\implies"}</Cmd> and <Cmd>{"\\iff"}</Cmd>.
        The table lists the quantifier symbols people use most, with the package each one needs;
        the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: quantifiers and connectives</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        More connectives and proof symbols are on the <IntroLink href="/symbols/logic">logic symbols</IntroLink> page,
        and subsets and set-builder notation on the <IntroLink href="/symbols/set-theory">set theory symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about quantifiers in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
