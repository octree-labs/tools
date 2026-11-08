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

const quickRef: QuickRefRow[] = [
  { latex: "\\rightarrow", use: "Right arrow" },
  { latex: "\\to", use: "Maps to a set, limits (x \u2192 \u221e)" },
  { latex: "\\leftarrow", use: "Left arrow, assignment" },
  { latex: "\\leftrightarrow", use: "Two-headed arrow" },
  { latex: "\\Rightarrow", use: "Implies (double arrow)" },
  { latex: "\\Leftrightarrow", use: "If and only if" },
  { latex: "\\mapsto", use: "Function rule, x \u21a6 x\u00b2" },
  { latex: "\\longrightarrow", use: "Long right arrow" },
  { latex: "\\uparrow", use: "Up arrow" },
  { latex: "\\downarrow", use: "Down arrow" },
  { latex: "\\hookrightarrow", use: "Injection, inclusion" },
  {
    latex: "\\xrightarrow{f}",
    use: "Arrow with text above, stretches to fit",
    pkg: "amsmath",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write an arrow in LaTeX?",
    answer:
      "Arrows are math symbols, so put them in math mode: $\\rightarrow$ (or the shorthand $\\to$) gives a right arrow, $\\leftarrow$ a left arrow and $\\leftrightarrow$ a two-headed arrow. Capitalising the first letter gives the double-line version, for example \\Rightarrow and \\Leftrightarrow. None of these need a package.",
  },
  {
    question: "How do I make a long arrow in LaTeX?",
    answer:
      "Prefix the name with long: \\longrightarrow, \\longleftarrow and \\longleftrightarrow, or \\Longrightarrow and \\Longleftrightarrow for double arrows, and \\longmapsto for a long maps-to arrow. If the arrow needs to grow with a label, use \\xrightarrow{...} from amsmath instead.",
  },
  {
    question: "How do I put text above an arrow in LaTeX?",
    answer:
      "Load amsmath and use \\xrightarrow{text} or \\xleftarrow{text}; the arrow stretches to fit the label. An optional argument adds text below the arrow: \\xrightarrow[below]{above}. For a fixed-size arrow you can also write \\overset{f}{\\rightarrow}.",
  },
  {
    question: "How do I write a double arrow in LaTeX?",
    answer:
      "Use \\Rightarrow for \u21d2, \\Leftarrow for \u21d0 and \\Leftrightarrow for \u21d4. In logic, \\implies and \\iff (amsmath) give the same arrows with wider spacing. For two arrows stacked on top of each other use \\rightleftarrows (amssymb) or \\rightleftharpoons for chemical equilibria.",
  },
  {
    question: "How do I use an arrow in text mode in LaTeX?",
    answer:
      "Writing \\rightarrow outside math mode causes a \u201cMissing $ inserted\u201d error. Either wrap it as $\\rightarrow$, or use the text-mode commands \\textrightarrow, \\textleftarrow, \\textuparrow and \\textdownarrow, which are part of the LaTeX kernel (textcomp) and match the surrounding text font.",
  },
];

export default function ArrowsIntro() {
  return (
    <IntroSection>
      <IntroH2>LaTeX arrows: how to write an arrow in LaTeX</IntroH2>
      <IntroP>
        LaTeX arrows are math-mode commands named after their direction: to type an arrow in LaTeX,
        write <Cmd>$\rightarrow$</Cmd> for &rarr;, <Cmd>$\leftarrow$</Cmd> for &larr; and{" "}
        <Cmd>$\Rightarrow$</Cmd> for the double arrow &rArr;. The table below lists the 12 arrows
        people use most, with the package each one needs; the full list of arrow symbols follows
        further down the page.
      </IntroP>

      <IntroH3>Quick reference: the most used arrows</IntroH3>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Arrows in text mode vs math mode</IntroH3>
      <IntroP>
        Every command in the table is a math symbol, so it must sit inside <Cmd>$...$</Cmd> or an
        equation environment; in running text use <Cmd>$\to$</Cmd> or the text-mode commands{" "}
        <Cmd>\textrightarrow</Cmd> and <Cmd>\textleftarrow</Cmd>. The basic arrows are built in;
        add these lines to your preamble for labelled arrows (<Cmd>\xrightarrow</Cmd>,{" "}
        <Cmd>\implies</Cmd>) and the extra arrows from the AMS fonts (<Cmd>\twoheadrightarrow</Cmd>,{" "}
        <Cmd>\rightsquigarrow</Cmd>, <Cmd>\nrightarrow</Cmd>):
      </IntroP>
      <Pre>{"\\usepackage{amsmath}\n\\usepackage{amssymb}"}</Pre>

      <IntroH3>Which arrow to use</IntroH3>
      <IntroP>
        The arrows people look up most are the plain right arrow <Cmd>\rightarrow</Cmd> (or its
        shorthand <Cmd>\to</Cmd>, used in <Cmd>f: A \to B</Cmd> and limits like{" "}
        <Cmd>x \to \infty</Cmd>), the left arrow <Cmd>\leftarrow</Cmd>, the double-headed{" "}
        <Cmd>\leftrightarrow</Cmd>, and the thick double arrows <Cmd>\Rightarrow</Cmd> and{" "}
        <Cmd>\Leftrightarrow</Cmd> that stand for implication and equivalence. Function rules use{" "}
        <Cmd>\mapsto</Cmd> (<Cmd>x \mapsto x^2</Cmd>), and the long variants{" "}
        <Cmd>\longrightarrow</Cmd>, <Cmd>\Longrightarrow</Cmd> and <Cmd>\longmapsto</Cmd> give you
        extra room in commutative diagrams. Vertical and diagonal arrows are{" "}
        <Cmd>\uparrow</Cmd>, <Cmd>\downarrow</Cmd>, <Cmd>\nearrow</Cmd> and <Cmd>\searrow</Cmd>;
        hooked and harpoon arrows such as <Cmd>\hookrightarrow</Cmd>,{" "}
        <Cmd>\rightharpoonup</Cmd> and <Cmd>\rightleftharpoons</Cmd> mark injections and
        equilibria.
      </IntroP>
      <IntroP>
        For logic, prefer <Cmd>\implies</Cmd> (from amsmath) and the built-in <Cmd>\iff</Cmd>,
        which add the correct spacing around the arrow, and for labelled arrows use{" "}
        <Cmd>\xrightarrow{"{f}"}</Cmd> and <Cmd>\xleftarrow{"{g}"}</Cmd>, also from amsmath,
        which stretch to fit the label. Negated and squiggly arrows (<Cmd>\nrightarrow</Cmd>,{" "}
        <Cmd>\rightsquigarrow</Cmd>, <Cmd>\twoheadrightarrow</Cmd>) need{" "}
        <Cmd>\usepackage{"{amssymb}"}</Cmd>.
      </IntroP>
      <IntroP>
        For the meaning behind each arrow and how to type them outside LaTeX, see our guide to{" "}
        <IntroLink href="https://www.useoctree.com/blog/arrow-symbols-meaning-how-to-type" external>
          arrow symbols and how to type them
        </IntroLink>
        , or the overview of{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>
        . Click any card below to copy its command.
      </IntroP>

      <IntroH3>Frequently asked questions about LaTeX arrows</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
