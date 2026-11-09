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
    latex: "\\operatorname*{arg\\,max}_{x} f(x)",
    use: "Argmax with the variable underneath",
    pkg: "amsmath",
  },
  {
    latex: "\\operatorname*{arg\\,min}_{x} f(x)",
    use: "Argmin with the variable underneath",
    pkg: "amsmath",
  },
  { latex: "\\min_{x \\in \\mathcal{X}} f(x)", use: "Minimise over a set" },
  { latex: "\\max_{x} f(x)", use: "Maximise" },
  { latex: "\\text{s.t.}", use: "Subject to", pkg: "amsmath" },
  { latex: "g_i(x) \\leq 0", use: "Inequality constraint" },
  { latex: "h_j(x) = 0", use: "Equality constraint" },
  { latex: "\\mathcal{L}(x, \\lambda)", use: "Lagrangian" },
  { latex: "\\nabla f(x^*) = 0", use: "First-order optimality condition" },
  { latex: "\\nabla^2 f(x)", use: "Hessian" },
  { latex: "X \\succeq 0", use: "Positive semidefinite" },
  { latex: "\\lambda_i \\geq 0", use: "Dual variables (multipliers)" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write argmax in LaTeX?",
    answer:
      "Write \\operatorname*{arg\\,max}_{x} f(x) with amsmath; the star puts x under the operator in display math. To reuse it, add \\DeclareMathOperator*{\\argmax}{arg\\,max} to the preamble and write \\argmax_x f(x). \\arg\\max also prints arg max, but its subscript attaches only to max.",
  },
  {
    question: "How do I write an optimization problem with constraints in LaTeX?",
    answer:
      "Put the objective and constraints in an aligned environment: \\min_{x} \\quad & f(x) \\\\ \\text{s.t.} \\quad & g(x) \\leq 0. The optidef package provides mini and maxi environments that align the objective and constraints for you.",
  },
  {
    question: "How do I write subject to in LaTeX?",
    answer:
      "Use \\text{s.t.} or \\text{subject to} from amsmath so the words are set in upright text with normal spacing. Writing s.t. directly in math mode prints italic variables s and t.",
  },
];

export default function OptimizationIntro() {
  return (
    <IntroSection>
      <IntroH2>Optimization symbols in LaTeX: argmax, argmin and constraints</IntroH2>
      <IntroP>
        Optimization notation in LaTeX centres on <Cmd>{"\\min"}</Cmd>, <Cmd>{"\\max"}</Cmd> and
        their arg versions. <Cmd>{"\\min_{x}"}</Cmd> and <Cmd>{"\\max_{x}"}</Cmd> are built in
        and put the variable under the operator in display math, but there is no built-in <Cmd>{"\\argmax"}</Cmd>:
        write <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> or declare <Cmd>{"\\argmax"}</Cmd> once
        with <Cmd>{"\\DeclareMathOperator*"}</Cmd> from amsmath. Constraints follow <Cmd>{"\\text{s.t.}"}</Cmd>,
        the Lagrangian is <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, the optimum is <Cmd>{"x^*"}</Cmd>,
        and semidefinite constraints use <Cmd>{"\\succeq 0"}</Cmd>. The table lists the optimization
        symbols people use most, with the package each one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: objectives, constraints and optimality</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Writing a constrained problem</IntroH3>
      <IntroP>
        A full problem lines up neatly in an aligned environment from amsmath; the optidef package
        offers ready-made mini and maxi environments if you write many of them:
      </IntroP>
      <Pre>{"\\[\n\\begin{aligned}\n\\min_{x \\in \\mathbb{R}^n} \\quad & f(x) \\\\\n\\text{s.t.} \\quad & g_i(x) \\leq 0, \\quad i = 1, \\dots, m \\\\\n& h_j(x) = 0, \\quad j = 1, \\dots, p\n\\end{aligned}\n\\]"}</Pre>

      <IntroH3>Frequently asked questions about optimization in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
