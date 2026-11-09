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
  {
    latex: "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}",
    use: "Matrix in parentheses",
    pkg: "amsmath",
  },
  {
    latex: "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}",
    use: "Matrix in square brackets",
    pkg: "amsmath",
  },
  {
    latex: "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}",
    use: "Determinant bars",
    pkg: "amsmath",
  },
  { latex: "\\mathbf{v}", use: "Bold vector" },
  { latex: "\\vec{v}", use: "Vector with an arrow" },
  { latex: "A^\\top", use: "Transpose" },
  { latex: "A^{-1}", use: "Inverse" },
  { latex: "A^\\dagger", use: "Conjugate transpose" },
  { latex: "\\det(A)", use: "Determinant" },
  { latex: "\\operatorname{tr}(A)", use: "Trace", pkg: "amsmath" },
  { latex: "\\|x\\|_2", use: "Euclidean norm" },
  { latex: "\\langle u, v \\rangle", use: "Inner product" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write a matrix in LaTeX?",
    answer:
      "Load amsmath and use a matrix environment in math mode, separating columns with & and rows with \\\\: \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix gives parentheses, bmatrix square brackets, Bmatrix braces, vmatrix single bars for a determinant and Vmatrix double bars.",
  },
  {
    question: "How do I write the transpose in LaTeX?",
    answer:
      "Write A^\\top, which prints a small T, or simply A^T, or A^\\intercal from amssymb. Pick one and use it consistently; A^\\top is common in modern texts because it cannot be confused with a variable T.",
  },
  {
    question: "How do I write a vector in LaTeX?",
    answer:
      "Use \\mathbf{v} for a bold vector or \\vec{v} for an arrow accent; \\boldsymbol{v} from amsmath also works for Greek letters. A column vector is a one-column matrix: \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
  },
];

export default function LinearAlgebraIntro() {
  return (
    <IntroSection>
      <IntroH2>Linear algebra symbols in LaTeX: matrices, vectors, transpose and norms</IntroH2>
      <IntroP>
        Linear algebra in LaTeX starts with the matrix environments from amsmath: <Cmd>{"pmatrix"}</Cmd> for
        round brackets, <Cmd>{"bmatrix"}</Cmd> for square ones and <Cmd>{"vmatrix"}</Cmd> for
        a determinant. A vector is <Cmd>{"\\mathbf{v}"}</Cmd> or <Cmd>{"\\vec{v}"}</Cmd>, the
        transpose is <Cmd>{"A^\\top"}</Cmd> (or <Cmd>{"A^T"}</Cmd>), the inverse <Cmd>{"A^{-1}"}</Cmd>,
        the conjugate transpose <Cmd>{"A^\\dagger"}</Cmd>, and the norm <Cmd>{"\\|x\\|"}</Cmd>.
        The determinant <Cmd>{"\\det"}</Cmd> is built in, while trace and rank are best written
        with <Cmd>{"\\operatorname{tr}"}</Cmd> and <Cmd>{"\\operatorname{rank}"}</Cmd>. The table
        lists the linear algebra symbols people use most, with the package each one needs; the
        full list follows below.
      </IntroP>

      <IntroH3>Quick reference: matrices, vectors and operations</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Separate columns with <Cmd>{"&"}</Cmd> and rows with <Cmd>{"\\\\"}</Cmd>. For large matrices
        with dots use <Cmd>{"\\cdots"}</Cmd>, <Cmd>{"\\vdots"}</Cmd> and <Cmd>{"\\ddots"}</Cmd>;
        Kronecker and tensor products are on the <IntroLink href="/symbols/operators">operators</IntroLink> page
        and index notation on the <IntroLink href="/symbols/tensors">tensor notation</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about linear algebra in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
