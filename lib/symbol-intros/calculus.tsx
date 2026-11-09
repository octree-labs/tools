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
  { latex: "\\frac{dy}{dx}", use: "Derivative (Leibniz notation)" },
  { latex: "f'(x)", use: "Derivative (prime notation); f''(x) for the second" },
  { latex: "\\frac{d^2 y}{dx^2}", use: "Second derivative" },
  { latex: "\\frac{\\partial f}{\\partial x}", use: "Partial derivative" },
  { latex: "\\dot{x}", use: "Time derivative (Newton dot); \\ddot{x} for the second" },
  { latex: "\\int_a^b f(x)\\,dx", use: "Definite integral" },
  { latex: "\\iint_D f\\,dA", use: "Double integral (\\iiint for triple)", pkg: "amsmath" },
  { latex: "\\oint_C", use: "Contour (closed line) integral" },
  { latex: "\\lim_{x \\to 0}", use: "Limit" },
  { latex: "\\nabla f", use: "Gradient" },
  { latex: "\\dv{f}{x}", preview: "\\frac{df}{dx}", use: "Derivative shortcut", pkg: "physics" },
  {
    latex: "\\pdv{f}{x}",
    preview: "\\frac{\\partial f}{\\partial x}",
    use: "Partial derivative shortcut",
    pkg: "physics",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write a derivative in LaTeX?",
    answer:
      "Write it as a fraction in math mode: $\\frac{dy}{dx}$ for dy/dx and $\\frac{d^2y}{dx^2}$ for the second derivative. Prime notation is f'(x) and f''(x), and Newton's dot notation is \\dot{x} and \\ddot{x}. All are built in; the physics package adds \\dv{y}{x} as a shortcut.",
  },
  {
    question: "How do I write a partial derivative in LaTeX?",
    answer:
      "Use the built-in \\partial symbol inside a fraction: $\\frac{\\partial f}{\\partial x}$, and $\\frac{\\partial^2 f}{\\partial x \\partial y}$ for a mixed second derivative. With \\usepackage{physics}, \\pdv{f}{x} and \\pdv{f}{x}{y} produce the same output.",
  },
  {
    question: "How do I write an integral with limits in LaTeX?",
    answer:
      "Use \\int with a subscript and superscript: $\\int_a^b f(x)\\,dx$. Add \\limits (\\int\\limits_a^b) to put the limits above and below the sign. For double and triple integrals load amsmath and use \\iint and \\iiint, which space the signs correctly; \\oint gives a closed contour integral.",
  },
];

export default function CalculusIntro() {
  return (
    <IntroSection>
      <IntroH2>Calculus symbols in LaTeX: derivatives, integrals and limits</IntroH2>
      <IntroP>
        The core calculus symbols in LaTeX are all built in. A derivative in LaTeX is a fraction, <Cmd>{"\\frac{dy}{dx}"}</Cmd>,
        or a prime, <Cmd>{"f'(x)"}</Cmd>; a partial derivative uses <Cmd>{"\\partial"}</Cmd>,
        as in <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>; an integral is <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>;
        and a limit is <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Multiple integrals such as <Cmd>{"\\iint"}</Cmd> and <Cmd>{"\\iiint"}</Cmd> come
        from amsmath, and the physics package adds shortcuts like <Cmd>{"\\dv"}</Cmd> and <Cmd>{"\\pdv"}</Cmd>.
        The table lists the calculus symbols people use most, with the package each one needs;
        the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: derivatives, integrals and limits</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Spacing and the upright d</IntroH3>
      <IntroP>
        Add a thin space <Cmd>{"\\,"}</Cmd> before the differential so <Cmd>{"f(x)\\,dx"}</Cmd> does
        not run together. Some style guides set the d upright; define <Cmd>{"\\newcommand{\\diff}{\\mathop{}\\!\\mathrm{d}}"}</Cmd> once
        and write <Cmd>{"\\int f(x) \\diff x"}</Cmd>. Sums and series are on the <IntroLink href="/symbols/summation">summation symbols</IntroLink> page,
        and the gradient and nabla are covered with the <IntroLink href="/symbols/machine-learning">machine learning symbols</IntroLink>.
      </IntroP>

      <IntroH3>Frequently asked questions about calculus in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
