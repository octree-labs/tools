import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroP,
  IntroSection,
  Pre,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

const quickRef: QuickRefRow[] = [
  {
    latex: "\\ce{2H2 + O2 -> 2H2O}",
    preview: "2\\mathrm{H_2} + \\mathrm{O_2} \\rightarrow 2\\mathrm{H_2O}",
    use: "Whole reaction",
    pkg: "mhchem",
  },
  {
    latex: "\\ce{A <=> B}",
    preview: "\\mathrm{A} \\rightleftharpoons \\mathrm{B}",
    use: "Equilibrium in mhchem",
    pkg: "mhchem",
  },
  { latex: "\\rightarrow", use: "Yields (reaction arrow)" },
  { latex: "\\rightleftharpoons", use: "Equilibrium symbol (harpoons)" },
  { latex: "\\xrightarrow{\\Delta}", use: "Arrow with heat or conditions above", pkg: "amsmath" },
  { latex: "\\mathrm{H_2O}", use: "Chemical formula in math mode" },
  { latex: "\\mathrm{Na^+}", use: "Ion charge" },
  { latex: "{}^{14}_{6}\\mathrm{C}", use: "Isotope (mass and atomic number)" },
  { latex: "\\Delta H^\\circ", use: "Standard enthalpy change" },
  { latex: "\\uparrow", use: "Gas evolved" },
  { latex: "\\downarrow", use: "Precipitate" },
  {
    latex: "\\ce{HC#CH}",
    preview: "\\mathrm{HC{\\equiv}CH}",
    use: "Triple bond (= for a double bond)",
    pkg: "mhchem",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the yields arrow in LaTeX?",
    answer:
      "In math mode the yields arrow is \\rightarrow, or \\longrightarrow for a longer one. With mhchem, type -> inside \\ce{...}, for example \\ce{A + B -> C}. To print conditions above the arrow use \\xrightarrow{\\Delta} from amsmath, or ->[\\Delta] inside \\ce.",
  },
  {
    question: "How do I write the equilibrium symbol in LaTeX?",
    answer:
      "The equilibrium symbol ⇌ is \\rightleftharpoons, which is built in: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. In mhchem write <=> inside \\ce{...}; it also offers <=>> and <<=> for equilibria that lie to the right or to the left.",
  },
  {
    question: "How do I write chemical formulas with subscripts in LaTeX?",
    answer:
      "Use \\ce{H2SO4} from mhchem, which sets the digits as subscripts and keeps the letters upright. Without mhchem, write \\mathrm{H_2SO_4} in math mode; plain H_2SO_4 would set the letters in italics like variables.",
  },
];

export default function ChemistryIntro() {
  return (
    <IntroSection>
      <IntroH2>Chemistry symbols in LaTeX: reaction arrows, equilibrium and formulas</IntroH2>
      <IntroP>
        For chemistry symbols in LaTeX, the mhchem package does most of the work: <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> typesets
        a whole reaction with upright element symbols, subscripts and a yields arrow. Without
        mhchem, the yields arrow is <Cmd>{"\\rightarrow"}</Cmd>, the equilibrium symbol is <Cmd>{"\\rightleftharpoons"}</Cmd>,
        and formulas are written as <Cmd>{"\\mathrm{H_2O}"}</Cmd> in math mode so the element
        letters stay upright. Reaction conditions go over a stretchy arrow with <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> from
        amsmath. The table lists the chemistry symbols people use most, with the package each
        one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: reactions, arrows and formulas</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Writing reactions with mhchem</IntroH3>
      <IntroP>
        Load mhchem with version 4. Inside <Cmd>{"\\ce"}</Cmd>, <Cmd>{"->"}</Cmd> is the yields
        arrow, <Cmd>{"<=>"}</Cmd> the equilibrium arrow, numbers after an element become subscripts, <Cmd>{"^"}</Cmd> sets
        a charge, and a lone <Cmd>{"^"}</Cmd> or <Cmd>{"v"}</Cmd> after a species marks a gas
        or a precipitate. Text in square brackets after an arrow goes above it:
      </IntroP>
      <Pre>{"\\usepackage[version=4]{mhchem}\n\n\\ce{CaCO3 ->[\\Delta] CaO + CO2 ^}"}</Pre>

      <IntroH3>Frequently asked questions about chemistry in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
