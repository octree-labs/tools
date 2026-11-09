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
  { latex: "\\overline{A}", use: "Closure" },
  { latex: "\\partial A", use: "Boundary" },
  { latex: "A^\\circ", use: "Interior (also \\operatorname{int} A)" },
  { latex: "X \\cong Y", use: "Homeomorphic" },
  { latex: "X \\simeq Y", use: "Homotopy equivalent" },
  { latex: "\\pi_1(X, x_0)", use: "Fundamental group" },
  { latex: "H_n(X)", use: "n-th homology group" },
  { latex: "\\mathcal{T}", use: "Topology on a set" },
  { latex: "x \\in U \\subseteq X", use: "Belongs to, subset or equal" },
  { latex: "S^n", use: "n-sphere" },
  { latex: "\\aleph_0", use: "Aleph null (countable cardinality)" },
  { latex: "\\beth_1", use: "Beth number", pkg: "amssymb" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the homeomorphic symbol in LaTeX?",
    answer:
      "Most texts use \\cong (≅): $X \\cong Y$. Some authors use \\approx (≈) or \\simeq (≃), though \\simeq usually means homotopy equivalence. All three are built in; state your convention once if it could be ambiguous.",
  },
  {
    question: "How do I write the beth symbol in LaTeX?",
    answer:
      "\\beth prints ℶ and needs \\usepackage{amssymb}, which also provides \\gimel and \\daleth. \\aleph (ℵ) is built in. Cardinals take subscripts as usual: \\aleph_0, \\beth_1, and \\mathfrak{c} (amssymb) for the cardinality of the continuum.",
  },
  {
    question: "How do I write the closure and interior of a set in LaTeX?",
    answer:
      "Closure is \\overline{A}, or \\bar{A} for a single letter, or \\operatorname{cl}(A). Interior is A^\\circ or \\operatorname{int}(A) with amsmath, and boundary is \\partial A. Use \\overline rather than \\bar for anything longer than one letter.",
  },
];

export default function TopologyIntro() {
  return (
    <IntroSection>
      <IntroH2>Topology symbols in LaTeX: closure, boundary, homeomorphic and aleph</IntroH2>
      <IntroP>
        Topology symbols in LaTeX are mostly built in. The closure of a set is <Cmd>{"\\overline{A}"}</Cmd>,
        its boundary is <Cmd>{"\\partial A"}</Cmd>, and its interior is <Cmd>{"A^\\circ"}</Cmd> or <Cmd>{"\\operatorname{int} A"}</Cmd>.
        Homeomorphic is usually written <Cmd>{"\\cong"}</Cmd> (≅), homotopy equivalent <Cmd>{"\\simeq"}</Cmd>,
        the fundamental group <Cmd>{"\\pi_1(X)"}</Cmd> and homology <Cmd>{"H_n(X)"}</Cmd>. Set
        notation carries over: belongs to is <Cmd>{"\\in"}</Cmd> and subset or equal is <Cmd>{"\\subseteq"}</Cmd>.
        For cardinalities, <Cmd>{"\\aleph_0"}</Cmd> is built in and <Cmd>{"\\beth"}</Cmd> comes
        from amssymb. The table lists the topology symbols people use most, with the package each
        one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used topology symbols</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Unions, intersections and complements are on the <IntroLink href="/symbols/set-theory">set theory symbols</IntroLink> page,
        and manifolds and forms on the <IntroLink href="/symbols/differential-geometry">differential geometry symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about topology symbols in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
