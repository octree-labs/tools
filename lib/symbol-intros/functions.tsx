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
  { latex: "f \\colon A \\to B", use: "Function from A to B" },
  { latex: "x \\mapsto x^2", use: "Maps to (function rule)" },
  { latex: "g \\circ f", use: "Composition, g after f" },
  { latex: "f^{-1}", use: "Inverse function" },
  { latex: "\\cong", use: "Isomorphic to" },
  { latex: "\\simeq", use: "Homotopy equivalent, weak isomorphism" },
  { latex: "\\xrightarrow{\\sim}", use: "Isomorphism arrow", pkg: "amsmath" },
  { latex: "\\operatorname{id}_A", use: "Identity map", pkg: "amsmath" },
  { latex: "\\hookrightarrow", use: "Injection, inclusion" },
  { latex: "\\twoheadrightarrow", use: "Surjection", pkg: "amssymb" },
  { latex: "f|_A", use: "Restriction to A" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write function composition in LaTeX?",
    answer:
      "Use \\circ, which is built in: $g \\circ f$ prints g ∘ f, read “g after f”. Write (g \\circ f)(x) = g(f(x)) for the rule. Do not use a lowercase o or \\cdot, which have the wrong size and spacing.",
  },
  {
    question: "How do I write the isomorphism symbol in LaTeX?",
    answer:
      "The standard isomorphism symbol ≅ is \\cong, built in: $G \\cong H$. For a homotopy equivalence or weaker notion use \\simeq (≃), and for an arrow that is an isomorphism use \\xrightarrow{\\sim} from amsmath, or \\cong placed over an arrow with \\xrightarrow{\\cong}.",
  },
  {
    question: "How do I write f: A → B in LaTeX?",
    answer:
      "Write f \\colon A \\to B. The \\colon command gives the spacing of punctuation; a plain colon is spaced like a relation and leaves too much room before A. Use \\mapsto for the rule, as in x \\mapsto x^2.",
  },
];

export default function FunctionsIntro() {
  return (
    <IntroSection>
      <IntroH2>Function composition and isomorphism in LaTeX</IntroH2>
      <IntroP>
        Function composition in LaTeX is <Cmd>\circ</Cmd>, as in <Cmd>g \circ f</Cmd>, and the
        isomorphism symbol in LaTeX is <Cmd>\cong</Cmd> (&cong;), with <Cmd>\simeq</Cmd> for a
        weaker equivalence; all three are built in. A function is declared with{" "}
        <Cmd>f \colon A \to B</Cmd>, where <Cmd>\colon</Cmd> gets the spacing right, and its rule
        with <Cmd>\mapsto</Cmd>, as in <Cmd>x \mapsto x^2</Cmd>. The identity map is{" "}
        <Cmd>\operatorname{"{id}"}</Cmd> from amsmath. The table lists the function and mapping
        commands people use most, with the package each one needs; the full list of symbols
        follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Injections, surjections and named functions</IntroH3>
      <IntroP>
        The inverse is <Cmd>f^{"{-1}"}</Cmd> and restriction to a subset is <Cmd>f|_A</Cmd>.
        Injections and surjections get their own arrows, <Cmd>\hookrightarrow</Cmd> and{" "}
        <Cmd>\twoheadrightarrow</Cmd> (the latter from amssymb), and an isomorphism arrow is{" "}
        <Cmd>\xrightarrow{"{\\sim}"}</Cmd>. Standard functions such as <Cmd>\sin</Cmd>,{" "}
        <Cmd>\log</Cmd>, <Cmd>\exp</Cmd>, <Cmd>\lim</Cmd> and <Cmd>\ker</Cmd> are built in and
        typeset upright with correct spacing. Anything else (image, domain, support, sign) should
        be wrapped in amsmath&rsquo;s <Cmd>\operatorname{"{Im}"}</Cmd> or declared once with{" "}
        <Cmd>\DeclareMathOperator{"{\\dom}{dom}"}</Cmd>; plain <Cmd>Im(f)</Cmd> would be set as
        the product of two italic variables. Piecewise definitions use the amsmath{" "}
        <Cmd>cases</Cmd> environment.
      </IntroP>
      <IntroP>
        Load <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> for <Cmd>\operatorname</Cmd>,{" "}
        <Cmd>\xrightarrow</Cmd>, <Cmd>cases</Cmd> and <Cmd>\twoheadrightarrow</Cmd>. Our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/math-functions" external>
          math functions in LaTeX
        </IntroLink>{" "}
        covers operators, limits and function spacing in more depth, and the{" "}
        <IntroLink href="/symbols/arrows">arrow symbols</IntroLink> page lists every mapping
        arrow.
      </IntroP>

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
