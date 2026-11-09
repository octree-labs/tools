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
  { latex: "\\sin \\theta", use: "Sine" },
  { latex: "\\cos \\theta", use: "Cosine" },
  { latex: "\\tan \\theta", use: "Tangent" },
  { latex: "\\sec \\theta", use: "Secant (\\csc cosecant, \\cot cotangent)" },
  { latex: "\\arcsin x", use: "Inverse sine" },
  { latex: "\\arccos x", use: "Inverse cosine" },
  { latex: "\\arctan x", use: "Inverse tangent" },
  { latex: "\\sin^{-1} x", use: "Inverse sine, power notation" },
  { latex: "\\sin^2 \\theta + \\cos^2 \\theta = 1", use: "Pythagorean identity" },
  { latex: "\\sinh x", use: "Hyperbolic sine (\\cosh, \\tanh)" },
  { latex: "30^\\circ", use: "Degrees" },
  { latex: "\\operatorname{arcsec} x", use: "Inverse secant (not built in)", pkg: "amsmath" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write sin, cos and tan in LaTeX?",
    answer:
      "Use the built-in commands in math mode: $\\sin x$, $\\cos x$, $\\tan x$, and \\cot, \\sec and \\csc for the reciprocals. Typing sin without a backslash prints the italic product s·i·n, which is why the commands exist.",
  },
  {
    question: "How do I write inverse trig functions like arcsin in LaTeX?",
    answer:
      "\\arcsin, \\arccos and \\arctan are built in, as are \\sinh, \\cosh, \\tanh and \\coth. \\arcsec, \\arccsc, \\arccot, \\sech and \\csch are not: write \\operatorname{arcsec} x, or add \\DeclareMathOperator{\\arcsec}{arcsec} to the preamble with amsmath. The power notation \\sin^{-1} x also works.",
  },
  {
    question: "How do I write sin squared and degrees in LaTeX?",
    answer:
      "Put the exponent right after the command: \\sin^2 \\theta. For degrees use a superscript circle, $30^\\circ$, or \\ang{30} from siunitx for consistent formatting in text and tables.",
  },
];

export default function TrigonometryIntro() {
  return (
    <IntroSection>
      <IntroH2>LaTeX trigonometry: sin, cos, tan and inverse trig functions</IntroH2>
      <IntroP>
        LaTeX trigonometry functions have their own commands: <Cmd>{"\\sin"}</Cmd>, <Cmd>{"\\cos"}</Cmd>, <Cmd>{"\\tan"}</Cmd>, <Cmd>{"\\cot"}</Cmd>, <Cmd>{"\\sec"}</Cmd> and <Cmd>{"\\csc"}</Cmd>,
        plus the inverses <Cmd>{"\\arcsin"}</Cmd>, <Cmd>{"\\arccos"}</Cmd> and <Cmd>{"\\arctan"}</Cmd> and
        the hyperbolic <Cmd>{"\\sinh"}</Cmd>, <Cmd>{"\\cosh"}</Cmd> and <Cmd>{"\\tanh"}</Cmd>.
        Always use the command rather than typing sin, because the command sets the name upright
        with correct spacing, while plain sin prints three italic variables. Powers go straight
        after the name, <Cmd>{"\\sin^2 \\theta"}</Cmd>, and degrees are a superscript circle, <Cmd>{"30^\\circ"}</Cmd>.
        The table lists the trigonometric symbols people use most, with the package each one needs;
        the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: trig functions and identities</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        Use <Cmd>{"\\left("}</Cmd> and <Cmd>{"\\right)"}</Cmd> around tall arguments, as in <Cmd>{"\\sin\\left(\\frac{\\pi}{2}\\right)"}</Cmd>.
        Greek angle letters such as <Cmd>{"\\theta"}</Cmd> and <Cmd>{"\\varphi"}</Cmd> are on
        the <IntroLink href="/symbols/greek">Greek letters</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about trigonometry in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
