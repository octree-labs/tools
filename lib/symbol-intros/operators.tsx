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

export const quickRef: QuickRefRow[] = [
  { latex: "\\oplus", use: "Circle plus: direct sum, XOR" },
  { latex: "\\otimes", use: "Circle times: tensor product" },
  { latex: "\\odot", use: "Circle dot: Hadamard product" },
  { latex: "\\ominus", use: "Circle minus" },
  { latex: "\\oslash", use: "Circle slash" },
  { latex: "\\times", use: "Cross product, multiplication" },
  { latex: "\\cdot", use: "Centered dot" },
  { latex: "\\ast", use: "Asterisk operator, convolution" },
  { latex: "\\circ", use: "Composition" },
  { latex: "\\star", use: "Star operator" },
  { latex: "\\bigoplus_{i=1}^{n} V_i", use: "Direct sum over an index" },
  { latex: "\\bigotimes_{i=1}^{n} V_i", use: "Tensor product over an index" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write circle plus in LaTeX?",
    answer:
      "Use \\oplus for ⊕, the circle plus used for direct sums and XOR. It is a built-in binary operator: $A \\oplus B$. For a direct sum over many terms, use the big operator \\bigoplus_{i=1}^{n} V_i.",
  },
  {
    question: "How do I write the odot (circle dot) operator in LaTeX?",
    answer:
      "\\odot prints ⊙ and is used for the Hadamard (element-wise) product, $A \\odot B$. The large version is \\bigodot. Both are built in.",
  },
  {
    question: "How do I define a new operator in LaTeX?",
    answer:
      "Load amsmath and write \\DeclareMathOperator{\\Tr}{Tr} in the preamble; \\Tr(A) then prints an upright Tr with operator spacing. Use \\DeclareMathOperator* when limits should go underneath, as for \\argmax. For a one-off, \\operatorname{Tr} does the same inline.",
  },
];

export default function OperatorsIntro() {
  return (
    <IntroSection>
      <IntroH2>LaTeX operators: circle plus, times, dot and big operators</IntroH2>
      <IntroP>
        LaTeX operators fall into two groups. Binary operators sit between two terms with medium
        spacing: <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\cdot"}</Cmd>, <Cmd>{"\\ast"}</Cmd>, <Cmd>{"\\circ"}</Cmd>,
        and the circled family <Cmd>{"\\oplus"}</Cmd> (circle plus, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗), <Cmd>{"\\odot"}</Cmd> (⊙)
        and <Cmd>{"\\ominus"}</Cmd>. Big operators take limits and grow in display math: <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>, <Cmd>{"\\bigoplus"}</Cmd>, <Cmd>{"\\bigotimes"}</Cmd> and <Cmd>{"\\bigcup"}</Cmd>.
        All of these are built in. Named operators like <Cmd>{"\\max"}</Cmd>, <Cmd>{"\\sin"}</Cmd> and <Cmd>{"\\det"}</Cmd> are
        predefined, and you can declare your own with <Cmd>{"\\DeclareMathOperator"}</Cmd> from
        amsmath. The table lists the LaTeX operators people use most; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: binary and big operators</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Defining your own operators</IntroH3>
      <IntroP>
        To add a named operator such as a trace or argmax, declare it once in the preamble. The
        starred form puts limits underneath in display math:
      </IntroP>
      <Pre>{"\\usepackage{amsmath}\n\\DeclareMathOperator{\\Tr}{Tr}\n\\DeclareMathOperator*{\\argmax}{arg\\,max}"}</Pre>

      <IntroH3>Frequently asked questions about LaTeX operators</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
