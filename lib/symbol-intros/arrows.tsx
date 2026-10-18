import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function ArrowsIntro() {
  return (
    <IntroSection>
      <IntroH2>Arrow symbols in LaTeX</IntroH2>
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
        All of the arrows above are built into LaTeX math mode. For logic, prefer{" "}
        <Cmd>\implies</Cmd> (from amsmath) and the built-in <Cmd>\iff</Cmd>, which add the
        correct spacing around the arrow, and for labelled arrows use <Cmd>\xrightarrow{"{f}"}</Cmd> and{" "}
        <Cmd>\xleftarrow{"{g}"}</Cmd>, also from amsmath, which stretch to fit the label.
        Negated and squiggly arrows (<Cmd>\nrightarrow</Cmd>, <Cmd>\rightsquigarrow</Cmd>,{" "}
        <Cmd>\twoheadrightarrow</Cmd>) need <Cmd>\usepackage{"{amssymb}"}</Cmd>.
      </IntroP>
      <IntroP>
        Every arrow must be in math mode, so write <Cmd>$\rightarrow$</Cmd> in running text. For
        the meaning behind each arrow and how to type them outside LaTeX, see our guide to{" "}
        <IntroLink href="https://www.useoctree.com/blog/arrow-symbols-meaning-how-to-type" external>
          arrow symbols and how to type them
        </IntroLink>
        , or the overview of{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>
        . Click any card below to copy its command.
      </IntroP>
    </IntroSection>
  );
}
