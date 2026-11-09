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
  { latex: "\\ae", preview: "\\text{æ}", use: "Ash ligature æ (\\AE for Æ)" },
  { latex: "\\oe", preview: "\\text{œ}", use: "Ethel ligature œ (\\OE for Œ)" },
  { latex: "\\o", preview: "\\text{ø}", use: "Slashed o ø (\\O for Ø)" },
  { latex: "\\aa", preview: "\\text{å}", use: "Ring a å (\\AA for Å)" },
  { latex: "\\ss", preview: "\\text{ß}", use: "German sharp s ß" },
  { latex: "\\l", preview: "\\text{ł}", use: "Polish ł (\\L for Ł)" },
  { latex: "\\i", preview: "\\text{ı}", use: "Dotless i, base for accents" },
  { latex: "\\'e", preview: "\\text{é}", use: "Acute accent é" },
  { latex: "\\\"o", preview: "\\text{ö}", use: "Umlaut ö" },
  { latex: "\\~n", preview: "\\text{ñ}", use: "Tilde ñ" },
  { latex: "\\c{c}", preview: "\\text{ç}", use: "Cedilla ç" },
  { latex: "\\v{s}", preview: "\\text{š}", use: "Caron (háček) š" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I type special Latin letters like æ, ø and ß in LaTeX?",
    answer:
      "Each has a built-in text-mode command: \\ae and \\AE for æ and Æ, \\oe and \\OE for œ and Œ, \\o and \\O for ø and Ø, \\aa and \\AA for å and Å, \\ss for ß and \\l and \\L for ł and Ł. Since 2018 LaTeX also reads UTF-8, so you can type the letters directly.",
  },
  {
    question: "How do I use these Latin characters inside math mode?",
    answer:
      "The commands are text-mode only, so wrap them in \\text{...} from amsmath, as in $x_{\\text{\\ae}}$. In math the dotless letters have their own commands, \\imath and \\jmath, used for accented vectors like \\hat{\\imath}.",
  },
  {
    question: "Why do accented letters not copy or hyphenate correctly in my PDF?",
    answer:
      "With the default OT1 font encoding, LaTeX builds accented letters from two pieces. Add \\usepackage[T1]{fontenc} to the preamble so é, ö and ñ become single glyphs that hyphenate, search and copy correctly.",
  },
];

export default function LatinIntro() {
  return (
    <IntroSection>
      <IntroH2>Latin symbols in LaTeX: special letters and accents</IntroH2>
      <IntroP>
        Latin letters beyond A to Z, such as the ligatures æ and œ, the Scandinavian ø and å, the
        German ß and the Polish ł, each have a short LaTeX command: <Cmd>\ae</Cmd>,{" "}
        <Cmd>\oe</Cmd>, <Cmd>\o</Cmd>, <Cmd>\aa</Cmd>, <Cmd>\ss</Cmd> and <Cmd>\l</Cmd>, with
        capitalised versions like <Cmd>\AE</Cmd> and <Cmd>\O</Cmd>. Accented letters combine an
        accent command with the base letter, for example <Cmd>\&apos;e</Cmd> for é and{" "}
        <Cmd>\~n</Cmd> for ñ. All of these are built in and work in text mode. The table lists
        the Latin symbols people use most; the full list follows below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Text mode, math mode and UTF-8</IntroH3>
      <IntroP>
        Use the commands in running text; inside an equation wrap them in{" "}
        <Cmd>\text{"{...}"}</Cmd>, and use <Cmd>\imath</Cmd> and <Cmd>\jmath</Cmd> for dotless
        letters under math accents. Modern LaTeX reads UTF-8, so typing é or ø directly also
        works, and <Cmd>\usepackage[T1]{"{fontenc}"}</Cmd> makes accented letters single glyphs
        that hyphenate and copy correctly. Every accent command is listed on the{" "}
        <IntroLink href="/symbols/accents">accents</IntroLink> page, and our guide to{" "}
        <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
          special characters in LaTeX
        </IntroLink>{" "}
        covers reserved characters such as <Cmd>\&amp;</Cmd> and <Cmd>\%</Cmd>.
      </IntroP>

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
