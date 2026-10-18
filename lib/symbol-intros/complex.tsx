import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function ComplexIntro() {
  return (
    <IntroSection>
      <IntroH2>Complex number symbols in LaTeX</IntroH2>
      <IntroP>
        The set of complex numbers is blackboard bold <Cmd>\mathbb{"{C}"}</Cmd>, which needs
        amssymb or amsfonts. The imaginary unit is simply <Cmd>i</Cmd> (engineers use{" "}
        <Cmd>j</Cmd>); if you want it upright to distinguish it from an index, write{" "}
        <Cmd>\mathrm{"{i}"}</Cmd>. A number in rectangular form is <Cmd>z = a + bi</Cmd>, and in
        polar form <Cmd>z = r e^{"{i\\theta}"}</Cmd> with <Cmd>\theta</Cmd> the argument.
        Euler&rsquo;s formula is <Cmd>e^{"{i\\theta}"} = \cos\theta + i\sin\theta</Cmd>.
      </IntroP>
      <IntroP>
        Real and imaginary parts have the built-in commands <Cmd>\Re</Cmd> and <Cmd>\Im</Cmd>,
        which print the Fraktur letters &#8476; and &#8465;. Most modern texts prefer the upright
        operator style, so use amsmath&rsquo;s <Cmd>\operatorname{"{Re}"}(z)</Cmd> and{" "}
        <Cmd>\operatorname{"{Im}"}(z)</Cmd>, or redefine the originals in the preamble with{" "}
        <Cmd>\renewcommand{"{\\Re}{\\operatorname{Re}}"}</Cmd>. The complex conjugate is{" "}
        <Cmd>\bar{"{z}"}</Cmd> for one letter or <Cmd>\overline{"{z}"}</Cmd> for an expression,
        and physicists write <Cmd>z^*</Cmd>. The modulus is <Cmd>|z|</Cmd> or, with amsmath,{" "}
        <Cmd>\lvert z \rvert</Cmd>, and the argument is <Cmd>\arg z</Cmd> (principal value{" "}
        <Cmd>\operatorname{"{Arg}"} z</Cmd>).
      </IntroP>
      <IntroP>
        Load <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd> to get <Cmd>\mathbb</Cmd>,{" "}
        <Cmd>\operatorname</Cmd> and <Cmd>\lvert</Cmd>. Quaternions follow the same pattern with{" "}
        <Cmd>\mathbb{"{H}"}</Cmd>. The Greek letters used for arguments and angles are listed in
        our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/greek-letters-math-symbols" external>
          Greek letters and math symbols
        </IntroLink>
        .
      </IntroP>
    </IntroSection>
  );
}
