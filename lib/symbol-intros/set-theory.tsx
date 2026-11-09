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
  { latex: "\\in", use: "Element of" },
  { latex: "\\notin", use: "Not an element of" },
  { latex: "\\subset", use: "Subset" },
  { latex: "\\subseteq", use: "Subset or equal" },
  { latex: "\\subsetneq", use: "Proper subset (not equal)", pkg: "amssymb" },
  { latex: "\\cup", use: "Union" },
  { latex: "\\cap", use: "Intersection" },
  { latex: "A \\setminus B", use: "Set difference" },
  { latex: "\\emptyset", use: "Empty set (\\varnothing in amssymb)" },
  {
    latex: "\\mathbb{R}",
    use: "Real numbers (also \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
    pkg: "amssymb",
  },
  { latex: "\\{ x \\in A \\mid x > 0 \\}", use: "Set-builder notation" },
  { latex: "\\mathcal{P}(A)", use: "Power set" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write subset in LaTeX?",
    answer:
      "Use \\subset for ⊂ and \\subseteq for ⊆, both built in: $A \\subseteq B$. For a proper subset that explicitly excludes equality, amssymb provides \\subsetneq (⊊). The superset versions are \\supset, \\supseteq and \\supsetneq, and \\not\\subset negates.",
  },
  {
    question: "How do I write element of in LaTeX?",
    answer:
      "\\in prints ∈, as in $x \\in A$, and \\notin prints ∉. The reversed form \\ni (∋) reads contains as an element. All three are built in.",
  },
  {
    question: "How do I write the empty set in LaTeX?",
    answer:
      "\\emptyset prints ∅ and is built in. Many authors prefer the rounder \\varnothing, which needs \\usepackage{amssymb}. Either way, do not use \\phi or \\O, which are a Greek letter and a Scandinavian letter.",
  },
];

export default function SetTheoryIntro() {
  return (
    <IntroSection>
      <IntroH2>LaTeX set theory symbols: subset, element of, union and empty set</IntroH2>
      <IntroP>
        LaTeX set theory symbols are mostly built in. Element of is <Cmd>{"\\in"}</Cmd> (∈) and
        not an element of is <Cmd>{"\\notin"}</Cmd>; subset is <Cmd>{"\\subset"}</Cmd> (⊂) and
        subset or equal <Cmd>{"\\subseteq"}</Cmd> (⊆); union and intersection are <Cmd>{"\\cup"}</Cmd> and <Cmd>{"\\cap"}</Cmd>,
        set difference is <Cmd>{"\\setminus"}</Cmd>, and the empty set is <Cmd>{"\\emptyset"}</Cmd> (∅).
        A few extras need amssymb: the rounder empty set <Cmd>{"\\varnothing"}</Cmd>, proper subset <Cmd>{"\\subsetneq"}</Cmd>,
        and number sets like <Cmd>{"\\mathbb{N}"}</Cmd> and <Cmd>{"\\mathbb{R}"}</Cmd>. Curly
        braces must be escaped, so a set is <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. The table lists the
        set theory symbols people use most, with the package each one needs; the full list follows
        below.
      </IntroP>

      <IntroH3>Quick reference: the most used set theory symbols</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Big unions and intersections over an index, such as <Cmd>{"\\bigcup_{i \\in I} A_i"}</Cmd>,
        are on the <IntroLink href="/symbols/summation">summation symbols</IntroLink> page, and
        quantifiers like <Cmd>{"\\forall"}</Cmd> and <Cmd>{"\\exists"}</Cmd> on the <IntroLink href="/symbols/quantifiers">quantifiers</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about set theory in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
