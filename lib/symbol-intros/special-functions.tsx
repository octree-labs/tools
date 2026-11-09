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
  { latex: "\\Gamma(z)", use: "Gamma function" },
  { latex: "\\mathrm{B}(x, y)", use: "Beta function (upright capital B)" },
  { latex: "\\zeta(s)", use: "Riemann zeta function" },
  { latex: "\\operatorname{erf}(x)", use: "Error function", pkg: "amsmath" },
  { latex: "\\operatorname{erfc}(x)", use: "Complementary error function", pkg: "amsmath" },
  { latex: "J_n(x)", use: "Bessel function of the first kind" },
  { latex: "Y_n(x)", use: "Bessel function of the second kind" },
  { latex: "P_n(x)", use: "Legendre polynomial" },
  { latex: "H_n(x)", use: "Hermite polynomial" },
  { latex: "{}_2F_1(a, b; c; z)", use: "Gauss hypergeometric function" },
  { latex: "\\psi(x)", use: "Digamma function" },
  { latex: "\\delta(x)", use: "Dirac delta" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the Gamma function in LaTeX?",
    answer:
      "Use the uppercase Greek letter: $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$. No package is needed. The Beta function is usually an upright B, \\mathrm{B}(x, y), so it is not mistaken for a variable.",
  },
  {
    question: "How do I write the error function erf in LaTeX?",
    answer:
      "LaTeX has no \\erf command. Use \\operatorname{erf}(x) from amsmath, or add \\DeclareMathOperator{\\erf}{erf} to the preamble and write \\erf(x). This sets erf upright with operator spacing, unlike plain erf, which prints three italic variables.",
  },
  {
    question: "How do I write the hypergeometric function in LaTeX?",
    answer:
      "Use an empty group to attach the left subscript: {}_2F_1(a, b; c; z). The mathtools package also provides \\prescript{}{2}{F}_{1} for prescripts, and the generalised {}_pF_q follows the same pattern.",
  },
];

export default function SpecialFunctionsIntro() {
  return (
    <IntroSection>
      <IntroH2>Special functions in LaTeX: Gamma, Beta, zeta, erf and Bessel</IntroH2>
      <IntroP>
        Special functions in LaTeX are written with Greek letters or upright names. The Gamma
        function is <Cmd>{"\\Gamma(z)"}</Cmd>, the Riemann zeta function <Cmd>{"\\zeta(s)"}</Cmd>,
        the digamma function <Cmd>{"\\psi(x)"}</Cmd> and the Dirac delta <Cmd>{"\\delta(x)"}</Cmd>.
        Functions named by Latin letters should be upright: there is no built-in <Cmd>{"\\erf"}</Cmd>,
        so write <Cmd>{"\\operatorname{erf}(x)"}</Cmd> or declare it once with <Cmd>{"\\DeclareMathOperator"}</Cmd> from
        amsmath. Bessel functions and orthogonal polynomials are indexed letters such as <Cmd>{"J_n(x)"}</Cmd> and <Cmd>{"P_n(x)"}</Cmd>,
        and the hypergeometric function is <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>. The table lists
        the special functions people use most, with the package each one needs; the full list
        follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used special functions</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        If you use a function often, declare it in the preamble so it prints upright with operator
        spacing everywhere:
      </IntroP>
      <Pre>{"\\usepackage{amsmath}\n\\DeclareMathOperator{\\erf}{erf}\n\\DeclareMathOperator{\\erfc}{erfc}"}</Pre>

      <IntroH3>Frequently asked questions about special functions in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
