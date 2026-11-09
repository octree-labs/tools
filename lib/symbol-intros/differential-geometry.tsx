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
  { latex: "T_pM", use: "Tangent space at p" },
  { latex: "T^*_pM", use: "Cotangent space at p" },
  { latex: "\\nabla_X Y", use: "Covariant derivative (connection)" },
  { latex: "\\Gamma^k_{ij}", use: "Christoffel symbols" },
  { latex: "R^l{}_{ijk}", use: "Riemann curvature tensor" },
  { latex: "g_{ij}", use: "Metric tensor" },
  { latex: "\\alpha \\wedge \\beta", use: "Wedge product of forms" },
  { latex: "\\bigwedge^k V", use: "Exterior power, k-forms" },
  { latex: "d\\omega", use: "Exterior derivative" },
  { latex: "\\mathcal{L}_X", use: "Lie derivative" },
  { latex: "[X, Y]", use: "Lie bracket of vector fields" },
  { latex: "\\star\\omega", use: "Hodge star" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the wedge product in LaTeX?",
    answer:
      "Use \\wedge between forms, $\\alpha \\wedge \\beta$; it is a binary operator with the correct spacing. For the exterior power or a large wedge over an index set, use the big operator \\bigwedge, as in \\bigwedge^k V or \\bigwedge_{i=1}^{n} dx_i. Both are built in.",
  },
  {
    question: "How do I write the covariant derivative in LaTeX?",
    answer:
      "Write \\nabla with the direction as a subscript: $\\nabla_X Y$, or \\nabla_\\mu V^\\nu in index notation. Partial derivatives along coordinates are written \\partial_\\mu, and the semicolon notation V^\\nu{}_{;\\mu} is also common in physics texts.",
  },
  {
    question: "How do I write the Lie derivative and exterior derivative in LaTeX?",
    answer:
      "The Lie derivative is a calligraphic L with a subscript, \\mathcal{L}_X T. The exterior derivative is a plain d, d\\omega; some authors set it upright with \\mathrm{d}\\omega to distinguish it from a variable.",
  },
];

export default function DifferentialGeometryIntro() {
  return (
    <IntroSection>
      <IntroH2>Differential geometry symbols in LaTeX: forms, connections and curvature</IntroH2>
      <IntroP>
        Differential geometry symbols in LaTeX build on a few built-in commands. The wedge product
        of forms is <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>, with <Cmd>{"\\bigwedge^k V"}</Cmd> for
        the exterior power; the exterior derivative is <Cmd>{"d\\omega"}</Cmd>; the covariant
        derivative is <Cmd>{"\\nabla_X Y"}</Cmd>; and the Lie derivative is <Cmd>{"\\mathcal{L}_X"}</Cmd>.
        Christoffel symbols and curvature tensors are indexed letters, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> and <Cmd>{"R^l{}_{ijk}"}</Cmd>,
        and the tangent space at a point is <Cmd>{"T_pM"}</Cmd>. The table lists the differential
        geometry symbols people use most; all of them are built in, and the full list follows
        below.
      </IntroP>

      <IntroH3>Quick reference: manifolds, forms and curvature</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Ordinary and partial derivatives are on the <IntroLink href="/symbols/calculus">calculus symbols</IntroLink> page,
        and index notation with the Einstein summation convention is on the <IntroLink href="/symbols/tensors">tensor notation</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about differential geometry in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
