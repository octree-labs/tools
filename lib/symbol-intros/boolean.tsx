import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function BooleanIntro() {
  return (
    <IntroSection>
      <IntroH2>Boolean algebra symbols in LaTeX</IntroH2>
      <IntroP>
        Boolean algebra reuses the logic connectives: <Cmd>\land</Cmd> for AND, <Cmd>\lor</Cmd>{" "}
        for OR and <Cmd>\lnot</Cmd> (or <Cmd>\neg</Cmd>) for NOT. Exclusive or is{" "}
        <Cmd>\oplus</Cmd>, and the constants are <Cmd>\top</Cmd> (true, 1) and <Cmd>\bot</Cmd>{" "}
        (false, 0). Digital-design and circuit texts prefer the algebraic style instead:{" "}
        <Cmd>A \cdot B</Cmd> or just <Cmd>AB</Cmd> for AND, <Cmd>A + B</Cmd> for OR, and a bar for
        negation, written <Cmd>\overline{"{A}"}</Cmd> for a whole expression or{" "}
        <Cmd>\bar{"{A}"}</Cmd> for a single letter. De Morgan&rsquo;s law then reads{" "}
        <Cmd>\overline{"{A \\cdot B}"} = \overline{"{A}"} + \overline{"{B}"}</Cmd>.
      </IntroP>
      <IntroP>
        The less common gates have dedicated symbols in amssymb: <Cmd>\barwedge</Cmd> for NAND,{" "}
        <Cmd>\veebar</Cmd> for XOR, and the Sheffer stroke and Peirce arrow can be written as{" "}
        <Cmd>\uparrow</Cmd> and <Cmd>\downarrow</Cmd>. Implication and equivalence are{" "}
        <Cmd>\Rightarrow</Cmd> and <Cmd>\Leftrightarrow</Cmd> (or amsmath&rsquo;s{" "}
        <Cmd>\implies</Cmd> and <Cmd>\iff</Cmd>), and the Boolean domain is{" "}
        <Cmd>\mathbb{"{B}"} = \{"{0, 1\\}"}</Cmd>.
      </IntroP>
      <IntroP>
        Add <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> to the preamble and keep every symbol
        in math mode. For truth tables, the <Cmd>tabular</Cmd> environment with{" "}
        <Cmd>$\land$</Cmd> in the header row is enough. See our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>{" "}
        for spacing and alignment, and the{" "}
        <IntroLink href="/symbols/logic">logic symbols</IntroLink> page for quantifiers and
        turnstiles.
      </IntroP>
    </IntroSection>
  );
}
