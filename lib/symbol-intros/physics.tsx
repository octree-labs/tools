import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroLink,
  IntroP,
  IntroSection,
  Pre,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

export const quickRef: QuickRefRow[] = [
  { latex: "\\hbar", use: "Reduced Planck constant (h-bar)" },
  { latex: "\\langle \\psi |", use: "Bra, built from basic commands" },
  { latex: "| \\psi \\rangle", use: "Ket, built from basic commands" },
  { latex: "\\langle \\phi | \\psi \\rangle", use: "Inner product (bra-ket)" },
  { latex: "\\bra{\\psi}", preview: "\\langle \\psi |", use: "Bra", pkg: "braket or physics" },
  { latex: "\\ket{\\psi}", preview: "| \\psi \\rangle", use: "Ket", pkg: "braket or physics" },
  {
    latex: "\\braket{\\phi|\\psi}",
    preview: "\\langle \\phi | \\psi \\rangle",
    use: "Inner product (physics: \\braket{\\phi}{\\psi})",
    pkg: "braket",
  },
  { latex: "\\hat{H}", use: "Hamiltonian operator" },
  { latex: "A^\\dagger", use: "Hermitian adjoint (dagger)" },
  { latex: "\\nabla^2", use: "Laplacian" },
  { latex: "\\partial_t \\psi", use: "Time derivative" },
  { latex: "\\otimes", use: "Tensor product of states" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write bra-ket notation in LaTeX?",
    answer:
      "Without any package, write a bra as \\langle \\psi |, a ket as | \\psi \\rangle and an inner product as \\langle \\phi | \\psi \\rangle. With \\usepackage{braket} you can write \\bra{\\psi}, \\ket{\\psi} and \\braket{\\phi|\\psi}; with \\usepackage{physics} the inner product takes two arguments instead, \\braket{\\phi}{\\psi}. Load only one of the two packages, since both define these commands.",
  },
  {
    question: "How do I write h-bar in LaTeX?",
    answer:
      "The reduced Planck constant \u210f is \\hbar, which is built in and used in math mode: $\\hbar$. The Schr\u00f6dinger equation then reads i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
  },
  {
    question: "How do I write operators and the dagger in LaTeX?",
    answer:
      "Mark operators with a hat, \\hat{H} or \\hat{p}, and write the Hermitian adjoint with \\dagger as a superscript, A^\\dagger. Expectation values are \\langle \\hat{A} \\rangle, or \\expval{A} with the physics package, and commutators are [\\hat{x}, \\hat{p}] = i\\hbar.",
  },
];

export default function PhysicsIntro() {
  return (
    <IntroSection>
      <IntroH2>Quantum mechanics symbols in LaTeX</IntroH2>
      <IntroP>
        The quantum mechanics symbols physicists type most are all built into LaTeX: the reduced
        Planck constant <Cmd>\hbar</Cmd>, the bra <Cmd>\langle \psi |</Cmd> and the ket{" "}
        <Cmd>| \psi \rangle</Cmd>, operators with a hat like <Cmd>\hat{"{H}"}</Cmd>, the
        adjoint <Cmd>A^\dagger</Cmd>, the Laplacian <Cmd>\nabla^2</Cmd> and the time derivative{" "}
        <Cmd>\partial_t</Cmd>. For shorter bra-ket notation, the braket and physics packages add{" "}
        <Cmd>\bra{"{}"}</Cmd>, <Cmd>\ket{"{}"}</Cmd> and <Cmd>\braket{"{}"}</Cmd>. The table lists
        the quantum physics symbols people use most, with the package each one needs; the full
        list of physics symbols follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>The braket and physics packages</IntroH3>
      <IntroP>
        Pick one of the two. The braket package is small and uses a single argument for the
        inner product, <Cmd>\braket{"{\\phi|\\psi}"}</Cmd>; the physics package also adds{" "}
        <Cmd>\expval{"{A}"}</Cmd>, <Cmd>\comm{"{A}{B}"}</Cmd>, derivatives such as{" "}
        <Cmd>\dv{"{f}{x}"}</Cmd> and automatic bracket sizing, but writes the inner product as{" "}
        <Cmd>\braket{"{\\phi}{\\psi}"}</Cmd>.
      </IntroP>
      <Pre>{"% braket package\n\\usepackage{braket}\n$\\braket{\\phi|\\psi}$, $i\\hbar \\partial_t \\ket{\\psi} = \\hat{H}\\ket{\\psi}$\n\n% physics package\n\\usepackage{physics}\n$\\braket{\\phi}{\\psi}$, $\\expval{\\hat{H}}{\\psi}$"}</Pre>
      <IntroP>
        Vectors, divergence and curl use <Cmd>\vec{"{E}"}</Cmd>, <Cmd>\nabla \cdot</Cmd> and{" "}
        <Cmd>\nabla \times</Cmd>. For Greek letters such as <Cmd>\psi</Cmd>, <Cmd>\Psi</Cmd> and{" "}
        <Cmd>\omega</Cmd> see our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/greek-letters-math-symbols" external>
          Greek letters and math symbols
        </IntroLink>
        , and the <IntroLink href="/symbols/tensors">tensor symbols</IntroLink> page for index
        notation.
      </IntroP>

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
