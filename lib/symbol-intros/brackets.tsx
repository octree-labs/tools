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
  { latex: "\\left( \\frac{a}{b} \\right)", use: "Parentheses that grow to fit the content" },
  { latex: "\\{ x \\}", use: "Curly braces (escaped)" },
  { latex: "\\langle x \\rangle", use: "Angle brackets, inner product" },
  { latex: "\\lfloor x \\rfloor", use: "Floor" },
  { latex: "\\lceil x \\rceil", use: "Ceiling" },
  { latex: "\\lvert x \\rvert", use: "Absolute value", pkg: "amsmath" },
  { latex: "\\lVert x \\rVert", use: "Norm", pkg: "amsmath" },
  { latex: "\\llbracket x \\rrbracket", use: "Double square brackets", pkg: "stmaryrd" },
  { latex: "\\bigl( x \\bigr)", use: "Manual sizes: \\big, \\Big, \\bigg, \\Bigg" },
  { latex: "[a, b)", use: "Half-open interval" },
  { latex: "\\underbrace{a + b}_{n}", use: "Brace under an expression (\\overbrace above)" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write curly braces in LaTeX?",
    answer:
      "Curly braces are LaTeX's grouping characters, so a plain { or } is not printed. Escape them: \\{ and \\} work in text and math, for example $\\{1, 2, 3\\}$. Use \\left\\{ and \\right\\} for braces that grow with their content; \\lbrace and \\rbrace are named alternatives.",
  },
  {
    question: "How do I write angle brackets in LaTeX?",
    answer:
      "Use \\langle and \\rangle, as in $\\langle u, v \\rangle$. Do not use the < and > keys: they are relation symbols with a different shape and spacing. For tall content write \\left\\langle ... \\right\\rangle.",
  },
  {
    question: "How do I write double brackets in LaTeX?",
    answer:
      "Load \\usepackage{stmaryrd} and write \\llbracket x \\rrbracket for the double square brackets ⟦x⟧ used for semantics and integer intervals. Without the package, [\\![ x ]\\!] fakes them by pulling two brackets together with a negative thin space.",
  },
];

export default function BracketsIntro() {
  return (
    <IntroSection>
      <IntroH2>LaTeX brackets: braces, angle brackets, floor and norms</IntroH2>
      <IntroP>
        LaTeX brackets come in two kinds: the ones you type directly, like <Cmd>{"("}</Cmd>, <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> and <Cmd>{"]"}</Cmd>,
        and the ones that need a command, like <Cmd>{"\\{"}</Cmd> and <Cmd>{"\\}"}</Cmd> for curly
        braces, <Cmd>{"\\langle"}</Cmd> and <Cmd>{"\\rangle"}</Cmd> for angle brackets, <Cmd>{"\\lfloor"}</Cmd> and <Cmd>{"\\rfloor"}</Cmd> for
        floor, and <Cmd>{"\\lVert"}</Cmd> and <Cmd>{"\\rVert"}</Cmd> for a norm. Put <Cmd>{"\\left"}</Cmd> and <Cmd>{"\\right"}</Cmd> in
        front of any pair and LaTeX sizes the brackets to fit what is inside, such as a fraction.
        Double brackets need the stmaryrd package. The table lists the brackets and delimiters
        people use most, with the package each one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used brackets</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Auto-sized absolute values and norms</IntroH3>
      <IntroP>
        For absolute values and norms you use often, define paired delimiters once in the preamble
        with mathtools. Then <Cmd>{"\\abs{x}"}</Cmd> keeps a fixed size, <Cmd>{"\\abs*{\\frac{a}{b}}"}</Cmd> grows
        with the content and <Cmd>{"\\abs[\\big]{x}"}</Cmd> picks a size by hand:
      </IntroP>
      <Pre>{"\\usepackage{mathtools}\n\\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert}\n\\DeclarePairedDelimiter{\\norm}{\\lVert}{\\rVert}"}</Pre>

      <IntroH3>Frequently asked questions about LaTeX brackets</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
