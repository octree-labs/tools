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
  { latex: "\\nabla", use: "Gradient symbol (nabla, del)" },
  { latex: "\\nabla_\\theta \\mathcal{L}", use: "Gradient of the loss with respect to θ" },
  { latex: "\\partial", use: "Partial derivative" },
  { latex: "\\frac{\\partial \\mathcal{L}}{\\partial w}", use: "Partial derivative of the loss" },
  { latex: "\\mathcal{L}", use: "Loss function" },
  { latex: "\\theta", use: "Model parameters" },
  { latex: "\\hat{y}", use: "Prediction, estimate" },
  { latex: "\\mathbb{E}", use: "Expectation", pkg: "amssymb" },
  { latex: "\\operatorname*{arg\\,max}_\\theta", use: "Argmax with a limit underneath", pkg: "amsmath" },
  { latex: "\\operatorname*{arg\\,min}_\\theta", use: "Argmin with a limit underneath", pkg: "amsmath" },
  { latex: "\\|w\\|_2", use: "L2 norm of the weights" },
  { latex: "\\odot", use: "Hadamard (element-wise) product" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the gradient symbol in LaTeX?",
    answer:
      "The gradient symbol ∇ is \\nabla, built into LaTeX and used in math mode: $\\nabla f$. Put the variable you differentiate with respect to in a subscript, as in \\nabla_\\theta \\mathcal{L}(\\theta), and write the Laplacian as \\nabla^2 f. No package is needed.",
  },
  {
    question: "How do I write a partial derivative in LaTeX?",
    answer:
      "Use \\partial: \\frac{\\partial f}{\\partial x} for a first derivative and \\frac{\\partial^2 f}{\\partial x^2} for a second derivative. A single component of the gradient is written the same way, for example \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
  },
  {
    question: "How do I write argmax and argmin in LaTeX?",
    answer:
      "With amsmath, write \\operatorname*{arg\\,max}_\\theta f(\\theta); the star puts the subscript underneath in display math. For repeated use declare it once in the preamble with \\DeclareMathOperator*{\\argmax}{arg\\,max} and then write \\argmax_\\theta. The shortcut \\arg\\max_\\theta also works, but the subscript then sits under max alone rather than under the whole arg max.",
  },
  {
    question: "How do I write the expectation and the loss function in LaTeX?",
    answer:
      "Expectation is blackboard bold \\mathbb{E}, which needs \\usepackage{amssymb}, as in \\mathbb{E}_{x \\sim p}[f(x)]. The loss function is usually a calligraphic L, \\mathcal{L}, which is built in.",
  },
];

export default function MachineLearningIntro() {
  return (
    <IntroSection>
      <IntroH2>Gradient symbol in LaTeX and other machine learning notation</IntroH2>
      <IntroP>
        The gradient symbol in LaTeX is <Cmd>\nabla</Cmd>, which prints &nabla; and needs no
        package: write <Cmd>\nabla f</Cmd> for the gradient of <Cmd>f</Cmd>, or{" "}
        <Cmd>\nabla_\theta \mathcal{"{L}"}</Cmd> for the gradient of a loss with respect to
        the parameters. Partial derivatives use <Cmd>\partial</Cmd>, predictions are{" "}
        <Cmd>\hat{"{y}"}</Cmd>, expectation is <Cmd>\mathbb{"{E}"}</Cmd> and argmax is{" "}
        <Cmd>\operatorname*{"{arg\\,max}"}</Cmd>. The table lists the commands people use most
        when writing a gradient in LaTeX, with the package each one needs; the full list of
        machine learning symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Load <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> for <Cmd>\mathbb</Cmd> and{" "}
        <Cmd>\operatorname*</Cmd>. Vectors and matrices are usually bold, written{" "}
        <Cmd>\mathbf{"{x}"}</Cmd> or <Cmd>\boldsymbol{"{\\theta}"}</Cmd> (amsmath), and the
        transpose is <Cmd>X^\top</Cmd>. For calculus notation in general see our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/math-functions" external>
          math functions in LaTeX
        </IntroLink>{" "}
        and the <IntroLink href="/symbols/calculus">calculus symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
