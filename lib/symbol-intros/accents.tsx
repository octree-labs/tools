import { Cmd, IntroH2, IntroLink, IntroP, IntroSection } from "./ui";

export default function AccentsIntro() {
  return (
    <IntroSection>
      <IntroH2>Accent marks and special letters in LaTeX</IntroH2>
      <IntroP>
        In text, LaTeX builds accented letters from a command and the base letter: the
        acute <Cmd>\&apos;e</Cmd> (é), grave <Cmd>\`e</Cmd> (è), circumflex{" "}
        <Cmd>\^e</Cmd> (ê), umlaut or diaeresis <Cmd>\&quot;o</Cmd> (ö), tilde{" "}
        <Cmd>\~n</Cmd> (ñ), cedilla <Cmd>\c{"{c}"}</Cmd> (ç), caron <Cmd>\v{"{s}"}</Cmd> (š),
        breve <Cmd>\u{"{a}"}</Cmd> (ă), Hungarian double acute <Cmd>\H{"{o}"}</Cmd> (ő), dot
        above <Cmd>\.z</Cmd> (ż), macron <Cmd>\=a</Cmd> (ā), dot below <Cmd>\d{"{a}"}</Cmd>,
        bar below <Cmd>\b{"{a}"}</Cmd>, ring <Cmd>\r{"{a}"}</Cmd> (å) and ogonek{" "}
        <Cmd>\k{"{e}"}</Cmd> (ę). Whole letters have their own commands: <Cmd>\l</Cmd> (ł),{" "}
        <Cmd>\o</Cmd> (ø), <Cmd>\ae</Cmd> (æ) and <Cmd>\ss</Cmd> (ß). To accent an i or j,
        use the dotless forms <Cmd>\i</Cmd> and <Cmd>\j</Cmd>, as in <Cmd>\&apos;{"{\\i}"}</Cmd>{" "}
        for í, so the accent does not collide with the dot.
      </IntroP>
      <IntroP>
        Math mode uses a separate set that sits over a variable rather than a letter:{" "}
        <Cmd>\hat{"{x}"}</Cmd>, <Cmd>\bar{"{x}"}</Cmd>, <Cmd>\vec{"{v}"}</Cmd>,{" "}
        <Cmd>\tilde{"{x}"}</Cmd>, <Cmd>\dot{"{x}"}</Cmd> and <Cmd>\ddot{"{x}"}</Cmd> for
        derivatives, <Cmd>\acute</Cmd>, <Cmd>\grave</Cmd>, <Cmd>\breve</Cmd> and{" "}
        <Cmd>\check</Cmd>. For more than one character, base LaTeX has the stretching{" "}
        <Cmd>\widehat{"{xy}"}</Cmd> and <Cmd>\widetilde{"{xy}"}</Cmd>, plus{" "}
        <Cmd>\overline{"{z}"}</Cmd> for conjugates and <Cmd>\overrightarrow{"{AB}"}</Cmd>{" "}
        for vectors; none of them needs amsmath.
      </IntroP>
      <IntroP>
        Since 2018 LaTeX reads UTF-8 by default, so you can type é, ö or ñ directly in the
        source (older setups need <Cmd>\usepackage[utf8]{"{inputenc}"}</Cmd>). Add{" "}
        <Cmd>\usepackage[T1]{"{fontenc}"}</Cmd> so accented letters are single glyphs that
        hyphenate and copy correctly instead of being composed from two pieces. For a
        worked example see our guide to{" "}
        <IntroLink
          href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
          external
        >
          Spanish characters and accents in LaTeX
        </IntroLink>
        , or the overview of{" "}
        <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
          special characters in LaTeX
        </IntroLink>
        . Click any card below to copy its command.
      </IntroP>
    </IntroSection>
  );
}
