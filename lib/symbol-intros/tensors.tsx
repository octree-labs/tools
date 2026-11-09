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
  { latex: "T^{ij}_{kl}", use: "Tensor with upper and lower indices" },
  { latex: "T^{i}{}_{j}", use: "Staggered indices (order matters)" },
  {
    latex: "\\tensor{T}{^i_j^k}",
    preview: "T^{i}{}_{j}{}^{k}",
    use: "Staggered indices made easy",
    pkg: "tensor",
  },
  { latex: "g_{\\mu\\nu}", use: "Metric tensor" },
  { latex: "\\delta^i_j", use: "Kronecker delta" },
  { latex: "\\epsilon_{ijk}", use: "Levi-Civita symbol" },
  { latex: "A^i B_i", use: "Einstein summation (repeated index)" },
  { latex: "A \\otimes B", use: "Tensor product" },
  { latex: "\\partial_\\mu", use: "Partial derivative along a coordinate" },
  { latex: "\\nabla_\\mu T^{\\nu}", use: "Covariant derivative" },
  { latex: "T_{(ij)}", use: "Symmetrisation" },
  { latex: "T_{[ij]}", use: "Antisymmetrisation" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write a tensor with upper and lower indices in LaTeX?",
    answer:
      "Combine superscripts and subscripts: $T^{ij}_{kl}$. If the horizontal order of indices matters, insert an empty group so they do not stack: T^{i}{}_{j} puts j after i. The tensor package automates this with \\tensor{T}{^i_j} and T\\indices{^i_j}.",
  },
  {
    question: "How do I write the Kronecker delta and Levi-Civita symbol in LaTeX?",
    answer:
      "The Kronecker delta is \\delta_{ij} or \\delta^i_j, and the Levi-Civita symbol is \\epsilon_{ijk} or \\varepsilon_{ijk}, depending on which epsilon shape your field uses. Both are built-in Greek letters with indices.",
  },
  {
    question: "How do I write Einstein summation in LaTeX?",
    answer:
      "There is no special command: repeating an index up and down implies the sum, so A^i B_i means \\sum_i A^i B_i. Write the explicit \\sum only when you want to show it, and use Greek indices like \\mu and \\nu for spacetime components.",
  },
];

export default function TensorsIntro() {
  return (
    <IntroSection>
      <IntroH2>Tensor notation in LaTeX: indices, Einstein summation and the tensor package</IntroH2>
      <IntroP>
        Tensor notation in LaTeX is built from superscripts and subscripts: <Cmd>{"T^{ij}_{kl}"}</Cmd> for
        a tensor with two upper and two lower indices, <Cmd>{"g_{\\mu\\nu}"}</Cmd> for the metric
        and <Cmd>{"\\delta^i_j"}</Cmd> for the Kronecker delta. When the order of mixed indices
        matters, stagger them with an empty group, <Cmd>{"T^{i}{}_{j}"}</Cmd>, or load the tensor
        package and write <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>. The Levi-Civita symbol is <Cmd>{"\\epsilon_{ijk}"}</Cmd>,
        the tensor product is <Cmd>{"\\otimes"}</Cmd>, and Einstein summation simply repeats an
        index, <Cmd>{"A^i B_i"}</Cmd>. The table lists the tensor symbols people use most, with
        the package each one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: indices and tensor operations</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Connections, curvature and differential forms are on the <IntroLink href="/symbols/differential-geometry">differential geometry symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about tensor notation in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
