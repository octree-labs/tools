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
  { latex: "\\perp", use: "Perpendicular, orthogonal" },
  { latex: "\\parallel", use: "Parallel" },
  { latex: "\\nparallel", use: "Not parallel", pkg: "amssymb" },
  { latex: "\\angle ABC", use: "Angle" },
  { latex: "\\measuredangle ABC", use: "Measured angle", pkg: "amssymb" },
  { latex: "\\triangle ABC", use: "Triangle" },
  { latex: "\\cong", use: "Congruent" },
  { latex: "\\sim", use: "Similar" },
  { latex: "\\overline{AB}", use: "Line segment" },
  { latex: "\\overrightarrow{AB}", use: "Ray or vector" },
  { latex: "\\overleftrightarrow{AB}", use: "Line through A and B", pkg: "amsmath" },
  { latex: "90^\\circ", use: "Degree sign" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the perpendicular or orthogonal symbol in LaTeX?",
    answer:
      "Use \\perp in math mode: $AB \\perp CD$ prints AB ⊥ CD. The same command is used for orthogonal vectors, u \\perp v, and the orthogonal complement V^\\perp. It is built in, so no package is needed.",
  },
  {
    question: "How do I write a triangle symbol in LaTeX?",
    answer:
      "\\triangle prints △, as in $\\triangle ABC$, and needs no package. amssymb adds the smaller \\vartriangle and the filled \\blacktriangle.",
  },
  {
    question: "How do I write the degree symbol in LaTeX?",
    answer:
      "In math mode write a superscript circle: $90^\\circ$. In text, \\textdegree prints °, and the siunitx package gives consistent output with \\ang{45} or \\qty{90}{\\degree}.",
  },
];

export default function GeometryIntro() {
  return (
    <IntroSection>
      <IntroH2>Geometry symbols in LaTeX: perpendicular, parallel, angle and triangle</IntroH2>
      <IntroP>
        Geometry symbols in LaTeX are built in for the most part. Perpendicular, also the orthogonal
        symbol, is <Cmd>{"\\perp"}</Cmd> (⊥), parallel is <Cmd>{"\\parallel"}</Cmd> (∥), an angle
        is <Cmd>{"\\angle ABC"}</Cmd>, and a triangle is <Cmd>{"\\triangle ABC"}</Cmd>. Congruent
        is <Cmd>{"\\cong"}</Cmd> and similar is <Cmd>{"\\sim"}</Cmd>. A line segment gets a bar, <Cmd>{"\\overline{AB}"}</Cmd>,
        a ray or vector gets an arrow, <Cmd>{"\\overrightarrow{AB}"}</Cmd>, and a degree sign
        is a superscript circle, <Cmd>{"90^\\circ"}</Cmd>. Only a few extras, like <Cmd>{"\\measuredangle"}</Cmd> and <Cmd>{"\\nparallel"}</Cmd>,
        need amssymb. The table lists the geometry symbols people use most, with the package each
        one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used geometry symbols</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        The same <Cmd>{"\\perp"}</Cmd> command marks orthogonal vectors, <Cmd>{"u \\perp v"}</Cmd>,
        and the orthogonal complement, <Cmd>{"V^\\perp"}</Cmd>. For arcs, <Cmd>{"\\overset{\\frown}{AB}"}</Cmd> (amsmath)
        places an arc over the letters. More comparison symbols are on the <IntroLink href="/symbols/relations">relation symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about geometry symbols in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
