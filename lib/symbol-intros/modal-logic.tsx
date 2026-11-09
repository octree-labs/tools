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
  { latex: "\\Box p", use: "Necessarily p", pkg: "amssymb" },
  { latex: "\\Diamond p", use: "Possibly p", pkg: "amssymb" },
  { latex: "\\Box(p \\to q)", use: "Necessity of an implication (axiom K)", pkg: "amssymb" },
  { latex: "\\neg\\Box\\neg p", use: "Not necessarily not p, same as \\Diamond p", pkg: "amssymb" },
  { latex: "\\mathcal{M}, w \\models p", use: "p is true at world w" },
  { latex: "w \\Vdash p", use: "Forcing, satisfaction", pkg: "amssymb" },
  { latex: "wRv", use: "Accessibility relation" },
  { latex: "K_a p", use: "Agent a knows p" },
  { latex: "B_a p", use: "Agent a believes p" },
  { latex: "C_G p", use: "Common knowledge in group G" },
  { latex: "\\bigcirc p", use: "Next (temporal logic)" },
  { latex: "p \\mathbin{\\mathcal{U}} q", use: "Until (temporal logic)" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the box and diamond symbols in LaTeX?",
    answer:
      "Load \\usepackage{amssymb} and write \\Box p for necessity and \\Diamond p for possibility. The latexsym package provides the same two commands. Note that the built-in \\diamond is a small binary operator, not the modal diamond.",
  },
  {
    question: "How do I write the models (double turnstile) symbol in LaTeX?",
    answer:
      "\\models is built in and prints ⊨, as in $\\mathcal{M}, w \\models \\varphi$. amssymb adds \\vDash (⊨), \\Vdash (⊩) for forcing and \\nvDash for does not model; \\vdash (⊢) for provability is built in.",
  },
  {
    question: "How do I write until and next in temporal logic in LaTeX?",
    answer:
      "Use \\bigcirc p for next, and wrap the calligraphic U as a binary operator for until: p \\mathbin{\\mathcal{U}} q, which gives the correct spacing. Always and eventually are usually \\Box p and \\Diamond p, or \\mathbf{G} p and \\mathbf{F} p.",
  },
];

export default function ModalLogicIntro() {
  return (
    <IntroSection>
      <IntroH2>Modal logic symbols in LaTeX: box, diamond and Kripke semantics</IntroH2>
      <IntroP>
        The two core modal logic symbols in LaTeX are <Cmd>{"\\Box"}</Cmd> for necessity (□) and <Cmd>{"\\Diamond"}</Cmd> for
        possibility (◇), both from amssymb; <Cmd>{"\\Box p"}</Cmd> reads it is necessary that
        p and <Cmd>{"\\Diamond p"}</Cmd> it is possible that p. Kripke semantics uses <Cmd>{"\\models"}</Cmd> (built
        in) or <Cmd>{"\\Vdash"}</Cmd>, as in <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, with an
        accessibility relation <Cmd>{"wRv"}</Cmd>. Epistemic logic writes knowledge as <Cmd>{"K_a p"}</Cmd>,
        and temporal logic adds <Cmd>{"\\bigcirc p"}</Cmd> for next and <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> for
        until. The table lists the modal logic symbols people use most, with the package each
        one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: modal, epistemic and temporal operators</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Propositional connectives and quantifiers are on the <IntroLink href="/symbols/logic">logic symbols</IntroLink> and <IntroLink href="/symbols/quantifiers">quantifiers</IntroLink> pages.
      </IntroP>

      <IntroH3>Frequently asked questions about modal logic in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
