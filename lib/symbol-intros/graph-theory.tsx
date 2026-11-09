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
  { latex: "G = (V, E)", use: "Graph with vertex set V and edge set E" },
  { latex: "u \\sim v", use: "u is adjacent to v" },
  { latex: "\\deg(v)", use: "Degree of a vertex" },
  { latex: "\\deg^{+}(v)", use: "Out-degree (\\deg^{-} for in-degree)" },
  { latex: "N(v)", use: "Neighbourhood of v" },
  { latex: "K_n", use: "Complete graph" },
  { latex: "K_{m,n}", use: "Complete bipartite graph" },
  { latex: "\\chi(G)", use: "Chromatic number" },
  { latex: "\\omega(G)", use: "Clique number" },
  { latex: "\\alpha(G)", use: "Independence number" },
  { latex: "\\Delta(G)", use: "Maximum degree (\\delta(G) for minimum)" },
  { latex: "G \\cong H", use: "Isomorphic graphs" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write the degree of a vertex in LaTeX?",
    answer:
      "Use the built-in operator \\deg, which prints an upright deg with correct spacing: $\\deg(v)$. For directed graphs, \\deg^{+}(v) and \\deg^{-}(v) give out-degree and in-degree, and the handshake lemma reads \\sum_{v \\in V} \\deg(v) = 2|E|.",
  },
  {
    question: "How do I draw a graph in LaTeX?",
    answer:
      "Load \\usepackage{tikz}, place vertices with \\node[circle,draw] (a) at (0,0) {a}; and connect them with \\draw (a) -- (b);. For larger graphs, the TikZ graphs library and the tkz-graph package shorten the syntax.",
  },
  {
    question: "How do I write the chromatic number in LaTeX?",
    answer:
      "The chromatic number is \\chi(G), a Greek chi. The chromatic index (edge chromatic number) is often written \\chi'(G), the clique number \\omega(G) and the independence number \\alpha(G). All are built in.",
  },
];

export default function GraphTheoryIntro() {
  return (
    <IntroSection>
      <IntroH2>Graph theory symbols in LaTeX: vertices, edges, degree and coloring</IntroH2>
      <IntroP>
        Graph theory notation in LaTeX is mostly standard letters and built-in operators. A graph
        is <Cmd>{"G = (V, E)"}</Cmd>, adjacency is <Cmd>{"u \\sim v"}</Cmd>, the degree of a vertex
        is <Cmd>{"\\deg(v)"}</Cmd> (the <Cmd>{"\\deg"}</Cmd> operator is built in), and complete
        and complete bipartite graphs are <Cmd>{"K_n"}</Cmd> and <Cmd>{"K_{m,n}"}</Cmd>. Graph
        invariants use Greek letters: chromatic number <Cmd>{"\\chi(G)"}</Cmd>, clique number <Cmd>{"\\omega(G)"}</Cmd>,
        independence number <Cmd>{"\\alpha(G)"}</Cmd>, and maximum and minimum degree <Cmd>{"\\Delta(G)"}</Cmd> and <Cmd>{"\\delta(G)"}</Cmd>.
        To draw the graph itself, use TikZ. The table lists the graph theory symbols people use
        most; all are built in, and the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: the most used graph theory symbols</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Drawing a graph with TikZ</IntroH3>
      <IntroP>
        Place vertices as nodes and connect them with <Cmd>{"\\draw"}</Cmd>. The TikZ graphs library
        and the tkz-graph package offer shorter syntax for larger graphs:
      </IntroP>
      <Pre>{"\\usepackage{tikz}\n\n\\begin{tikzpicture}\n  \\node[circle,draw] (a) at (0,0) {a};\n  \\node[circle,draw] (b) at (2,0) {b};\n  \\node[circle,draw] (c) at (1,1.5) {c};\n  \\draw (a) -- (b) -- (c) -- (a);\n\\end{tikzpicture}"}</Pre>

      <IntroH3>Frequently asked questions about graph theory in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
