import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function LogicIntro() {
  return (
    <IntroSection>
      <IntroH2>Logic symbols in LaTeX</IntroH2>
      <IntroP>
        The connectives of propositional logic are <Cmd>\land</Cmd> (and), <Cmd>\lor</Cmd> (or)
        and <Cmd>\lnot</Cmd> (not); <Cmd>\wedge</Cmd>, <Cmd>\vee</Cmd> and <Cmd>\neg</Cmd> are
        identical aliases. Implication and equivalence are best written with <Cmd>\implies</Cmd> (from amsmath)
        and <Cmd>\iff</Cmd>, which add relation spacing around the arrows;
        the bare <Cmd>\Rightarrow</Cmd> and <Cmd>\Leftrightarrow</Cmd> work too. Quantifiers are{" "}
        <Cmd>\forall</Cmd> and <Cmd>\exists</Cmd>, with <Cmd>\nexists</Cmd> for &ldquo;there is
        no&rdquo;, and the constants true and false are <Cmd>\top</Cmd> and <Cmd>\bot</Cmd>.
      </IntroP>
      <IntroP>
        Proof theory and semantics have their own turnstiles: <Cmd>\vdash</Cmd> means
        &ldquo;proves&rdquo; or syntactic entailment, <Cmd>\models</Cmd> (also{" "}
        <Cmd>\vDash</Cmd>) means &ldquo;satisfies&rdquo; or semantic entailment, and{" "}
        <Cmd>\nvdash</Cmd> negates the first. The inference markers <Cmd>\therefore</Cmd> and{" "}
        <Cmd>\because</Cmd> come from amssymb, as do <Cmd>\nexists</Cmd> and <Cmd>\vDash</Cmd>.
        Logical equivalence of formulas is often <Cmd>\equiv</Cmd>, exclusive or is{" "}
        <Cmd>\oplus</Cmd>, and the Sheffer stroke (NAND) is <Cmd>\uparrow</Cmd>. The modal
        operators <Cmd>\Box</Cmd> and <Cmd>\Diamond</Cmd> are listed on the{" "}
        <IntroLink href="/symbols/modal-logic">modal logic symbols</IntroLink> page.
      </IntroP>
      <IntroP>
        Everything here is math-mode only, so wrap symbols in <Cmd>$...$</Cmd> and load{" "}
        <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> in the preamble. A typical formula:{" "}
        <Cmd>\forall x\, (P(x) \implies Q(x))</Cmd>. For how these combine with sets, functions
        and relations, read our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          mathematical expressions in LaTeX
        </IntroLink>
        .
      </IntroP>
    </IntroSection>
  );
}
