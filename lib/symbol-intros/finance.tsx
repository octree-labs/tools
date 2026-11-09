import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroP,
  IntroSection,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

export const quickRef: QuickRefRow[] = [
  { latex: "\\$", use: "Dollar sign" },
  { latex: "\\pounds", use: "Pound sterling" },
  { latex: "\\texteuro", preview: "\\text{€}", use: "Euro sign (textcomp, built in)" },
  { latex: "\\euro", preview: "\\text{€}", use: "Official euro sign", pkg: "eurosym" },
  { latex: "\\textyen", preview: "\\text{¥}", use: "Yen sign (textcomp, built in)" },
  { latex: "\\%", use: "Percent" },
  { latex: "\\textperthousand", preview: "\\text{‰}", use: "Per mille (textcomp, built in)" },
  { latex: "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}", use: "Net present value" },
  { latex: "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}", use: "Compound interest" },
  { latex: "A = Pe^{rt}", use: "Continuous compounding" },
  { latex: "\\pm", use: "Plus or minus" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write a dollar sign in LaTeX?",
    answer:
      "Escape it: \\$ prints $ in both text and math mode, for example \\$100. A bare $ opens or closes math mode, which is why an unescaped dollar sign in a price causes errors or turns the rest of the line into math.",
  },
  {
    question: "How do I write the euro sign in LaTeX?",
    answer:
      "\\texteuro (from textcomp, now part of the LaTeX kernel) prints the euro sign of the current font with no extra package. For the official EU design load \\usepackage{eurosym} and write \\euro. With XeLaTeX or LuaLaTeX you can also type € directly.",
  },
  {
    question: "How do I write a percent sign in LaTeX?",
    answer:
      "Write \\%. A bare % starts a comment, so everything after it on the line disappears from the output. For per mille use \\textperthousand, and for numbers with units the siunitx package offers \\qty{5}{\\percent}.",
  },
];

export default function FinanceIntro() {
  return (
    <IntroSection>
      <IntroH2>Currency and finance symbols in LaTeX: dollar, euro and formulas</IntroH2>
      <IntroP>
        Currency symbols in LaTeX need a little care because the dollar sign starts math mode.
        Escape it as <Cmd>{"\\$"}</Cmd> to print a dollar sign; the pound sign is <Cmd>{"\\pounds"}</Cmd>,
        and the euro sign is <Cmd>{"\\texteuro"}</Cmd>, or <Cmd>{"\\euro"}</Cmd> from the eurosym
        package for the official design. Percent is <Cmd>{"\\%"}</Cmd> because a bare % starts
        a comment, and per mille is <Cmd>{"\\textperthousand"}</Cmd>. Finance formulas such as
        net present value or compound interest are ordinary math built from <Cmd>{"\\sum"}</Cmd> and <Cmd>{"\\frac"}</Cmd>.
        The table lists the finance symbols people use most, with the package each one needs;
        the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: currencies, percent and formulas</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Currencies such as the rupee or bitcoin have no standard command: compile with XeLaTeX
        or LuaLaTeX and a font that has the glyph, then type the character directly. For amounts
        in tables, the siunitx package aligns numbers on the decimal point.
      </IntroP>

      <IntroH3>Frequently asked questions about currency symbols in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
