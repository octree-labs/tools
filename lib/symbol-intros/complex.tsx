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
  { latex: "\\mathbb{C}", use: "Set of complex numbers", pkg: "amssymb" },
  { latex: "z = a + bi", use: "Rectangular form" },
  { latex: "\\bar{z}", use: "Complex conjugate (one letter)" },
  { latex: "\\overline{z + w}", use: "Conjugate of an expression" },
  { latex: "z^*", use: "Conjugate, physics notation" },
  { latex: "\\Re(z)", use: "Real part, Fraktur ℜ" },
  { latex: "\\Im(z)", use: "Imaginary part, Fraktur ℑ" },
  { latex: "\\operatorname{Re}(z)", use: "Real part, upright (also Im)", pkg: "amsmath" },
  { latex: "|z|", use: "Modulus (absolute value)" },
  { latex: "\\arg z", use: "Argument" },
  { latex: "re^{i\\theta}", use: "Polar form" },
  { latex: "\\mathrm{i}", use: "Upright imaginary unit" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "What is the symbol for complex numbers?",
    answer:
      "The set of complex numbers is the blackboard bold C, ℂ. In LaTeX write \\mathbb{C} with \\usepackage{amssymb} (or amsfonts), as in z \\in \\mathbb{C}. The real numbers are \\mathbb{R} in the same style.",
  },
  {
    question: "How do I write the complex conjugate in LaTeX?",
    answer:
      "Use \\bar{z} for a single letter and \\overline{z + w} for a longer expression, since \\overline stretches over its whole argument. Physicists and engineers often write z^* instead, and the conjugate transpose of a matrix is A^\\dagger or A^*.",
  },
  {
    question: "How do I write the real and imaginary parts in LaTeX?",
    answer:
      "The built-in \\Re and \\Im print the Fraktur letters ℜ and ℑ. For the upright Re and Im that most modern texts use, write \\operatorname{Re}(z) and \\operatorname{Im}(z) with amsmath, or redefine the originals once with \\renewcommand{\\Re}{\\operatorname{Re}}.",
  },
];

export default function ComplexIntro() {
  return (
    <IntroSection>
      <IntroH2>Complex number symbol and conjugate in LaTeX</IntroH2>
      <IntroP>
        The symbol for complex numbers is the blackboard bold &#8450;, written{" "}
        <Cmd>\mathbb{"{C}"}</Cmd> in LaTeX with the amssymb package. The complex conjugate in
        LaTeX is <Cmd>\bar{"{z}"}</Cmd> for one letter or <Cmd>\overline{"{z}"}</Cmd> for a
        whole expression, and physicists write <Cmd>z^*</Cmd>. Real and imaginary parts are{" "}
        <Cmd>\Re</Cmd> and <Cmd>\Im</Cmd>, or the upright <Cmd>\operatorname{"{Re}"}</Cmd>; the
        modulus is <Cmd>|z|</Cmd> and the argument <Cmd>\arg z</Cmd>. The table lists the complex
        numbers symbols people use most, with the package each one needs; the full list follows
        below.
      </IntroP>
      <QuickRefTable rows={quickRef} />

      <IntroH3>Imaginary unit, polar form and modulus</IntroH3>
      <IntroP>
        The imaginary unit is simply <Cmd>i</Cmd> (engineers use <Cmd>j</Cmd>); if you want it
        upright to distinguish it from an index, write <Cmd>\mathrm{"{i}"}</Cmd>. A number in
        polar form is <Cmd>z = r e^{"{i\\theta}"}</Cmd> with <Cmd>\theta</Cmd> the argument, and
        Euler&rsquo;s formula is <Cmd>e^{"{i\\theta}"} = \cos\theta + i\sin\theta</Cmd>. The
        modulus can also be written <Cmd>\lvert z \rvert</Cmd> with amsmath, which spaces the
        bars correctly, and the principal argument is <Cmd>\operatorname{"{Arg}"} z</Cmd>.
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

      <IntroH3>Frequently asked questions</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
