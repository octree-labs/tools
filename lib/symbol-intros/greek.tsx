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
  { latex: "\\alpha", use: "Alpha" },
  { latex: "\\beta", use: "Beta" },
  { latex: "\\gamma", use: "Gamma (\\Gamma uppercase)" },
  { latex: "\\delta", use: "Delta (\\Delta uppercase)" },
  { latex: "\\epsilon", use: "Epsilon ϵ (\\varepsilon for ε)" },
  { latex: "\\theta", use: "Theta (\\vartheta variant, \\Theta uppercase)" },
  { latex: "\\lambda", use: "Lambda (\\Lambda uppercase)" },
  { latex: "\\mu", use: "Mu" },
  { latex: "\\pi", use: "Pi (\\Pi uppercase)" },
  { latex: "\\sigma", use: "Sigma (\\Sigma uppercase)" },
  { latex: "\\phi", use: "Phi ϕ (\\varphi for φ, \\Phi uppercase)" },
  { latex: "\\omega", use: "Omega (\\Omega uppercase)" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write Greek letters in LaTeX?",
    answer:
      "Type a backslash and the letter name in math mode: $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. For uppercase, capitalise the first letter: \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. No package is needed.",
  },
  {
    question: "Why is there no \\Alpha command in LaTeX?",
    answer:
      "Uppercase Alpha, Beta, Epsilon, Zeta, Eta, Iota, Kappa, Mu, Nu, Omicron, Rho, Tau and Chi look the same as Latin letters, so LaTeX does not define them; type A, B, E and so on. Lowercase omicron is likewise just o.",
  },
  {
    question: "How do I make a bold Greek letter in LaTeX?",
    answer:
      "Use \\boldsymbol{\\alpha} from amsmath or \\bm{\\alpha} from the bm package. \\mathbf only affects Latin letters, digits and uppercase Greek, so \\mathbf{\\alpha} leaves the alpha unchanged.",
  },
];

export default function GreekIntro() {
  return (
    <IntroSection>
      <IntroH2>Greek letters in LaTeX: the full Greek alphabet</IntroH2>
      <IntroP>
        Greek letters in LaTeX are written as a backslash plus the letter name in math mode: <Cmd>{"\\alpha"}</Cmd>, <Cmd>{"\\beta"}</Cmd>, <Cmd>{"\\gamma"}</Cmd>, <Cmd>{"\\pi"}</Cmd>.
        Capitalise the name for the uppercase form, such as <Cmd>{"\\Gamma"}</Cmd>, <Cmd>{"\\Delta"}</Cmd> and <Cmd>{"\\Omega"}</Cmd>;
        uppercase letters that look like Latin ones, like Alpha and Beta, have no command, so
        you type A and B. Several letters have variant shapes: <Cmd>{"\\varepsilon"}</Cmd>, <Cmd>{"\\vartheta"}</Cmd>, <Cmd>{"\\varphi"}</Cmd> and <Cmd>{"\\varsigma"}</Cmd>.
        All of these are built in. The table lists the Greek letters people use most; the full
        LaTeX Greek alphabet follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used Greek letters</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Bold, upright and text-mode Greek</IntroH3>
      <IntroP>
        For bold Greek use <Cmd>{"\\boldsymbol{\\alpha}"}</Cmd> from amsmath or <Cmd>{"\\bm{\\alpha}"}</Cmd> from
        the bm package; <Cmd>{"\\mathbf"}</Cmd> leaves lowercase Greek unchanged. Upright letters,
        for example for the micro prefix, come from the upgreek package (<Cmd>{"\\upmu"}</Cmd>).
        In running text you can type Greek directly with XeLaTeX or LuaLaTeX, or use the textgreek
        package. See also our guide to <IntroLink href="https://www.useoctree.com/learn/greek-letters-math-symbols" external>Greek letters as math symbols</IntroLink>.
      </IntroP>

      <IntroH3>Frequently asked questions about Greek letters in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
