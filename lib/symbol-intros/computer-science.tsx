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

export const quickRef: QuickRefRow[] = [
  { latex: "O(n \\log n)", use: "Big O (upper bound)" },
  { latex: "\\mathcal{O}(n)", use: "Big O, calligraphic style" },
  { latex: "\\Omega(n)", use: "Big Omega (lower bound)" },
  { latex: "\\Theta(n^2)", use: "Big Theta (tight bound)" },
  { latex: "o(n)", use: "Little-o" },
  { latex: "\\lfloor \\log_2 n \\rfloor", use: "Floor of log base 2" },
  { latex: "\\lceil n/2 \\rceil", use: "Ceiling" },
  { latex: "a \\bmod n", use: "Modulo as a binary operator" },
  { latex: "\\oplus", use: "XOR" },
  { latex: "x \\gets x + 1", use: "Assignment in pseudocode" },
  { latex: "\\coloneqq", use: "Defined as (:=)", pkg: "mathtools" },
  { latex: "\\{0,1\\}^*", use: "All binary strings (Kleene star)" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write Big O notation in LaTeX?",
    answer:
      "Type O(n) in math mode: $O(n \\log n)$. Many authors prefer the calligraphic form $\\mathcal{O}(n)$, which needs no package. Big Omega and Big Theta use the Greek capitals \\Omega(n) and \\Theta(n), and little-o is o(n). Write \\log, not log, so the function name is upright.",
  },
  {
    question: "How do I write floor and ceiling in LaTeX?",
    answer:
      "Use the built-in delimiters \\lfloor x \\rfloor for ⌊x⌋ and \\lceil x \\rceil for ⌈x⌉. For tall content put \\left and \\right in front, as in \\left\\lfloor \\frac{n}{2} \\right\\rfloor, or define \\floor and \\ceil with \\DeclarePairedDelimiter from mathtools.",
  },
  {
    question: "How do I write mod in LaTeX?",
    answer:
      "Use \\bmod for the binary operator, a \\bmod n, and \\pmod{n} for a congruence, as in a \\equiv b \\pmod{n}, which prints (mod n) with the correct spacing. Both are built in; amsmath adds \\mod{n} and \\pod{n} for other spacing styles.",
  },
];

export default function ComputerScienceIntro() {
  return (
    <IntroSection>
      <IntroH2>Computer science symbols in LaTeX: Big O, floor and algorithm notation</IntroH2>
      <IntroP>
        Most computer science symbols in LaTeX are ordinary math commands. Big O notation in LaTeX
        is <Cmd>{"O(n \\log n)"}</Cmd> or, in many papers, the calligraphic <Cmd>{"\\mathcal{O}(n)"}</Cmd>;
        its relatives are <Cmd>{"\\Omega(n)"}</Cmd>, <Cmd>{"\\Theta(n)"}</Cmd> and little-o <Cmd>{"o(n)"}</Cmd>.
        Floor and ceiling are <Cmd>{"\\lfloor x \\rfloor"}</Cmd> and <Cmd>{"\\lceil x \\rceil"}</Cmd>,
        XOR is <Cmd>{"\\oplus"}</Cmd>, assignment in pseudocode is <Cmd>{"\\gets"}</Cmd>, and
        a definition with := is cleanest as <Cmd>{"\\coloneqq"}</Cmd> from mathtools. The table
        lists the computer science symbols people use most, with the package each one needs; the
        full list follows below.
      </IntroP>

      <IntroH3>Quick reference: complexity, rounding and algorithms</IntroH3>
      <QuickRefTable rows={quickRef} />
      <IntroP>
        For pseudocode itself, use the algorithm and algpseudocode packages, which provide <Cmd>{"\\State"}</Cmd>, <Cmd>{"\\If"}</Cmd> and <Cmd>{"\\For"}</Cmd> and
        use <Cmd>{"\\gets"}</Cmd> for assignment, rather than building it from math symbols. Logic
        operators are listed on the <IntroLink href="/symbols/boolean">Boolean algebra symbols</IntroLink> page.
      </IntroP>

      <IntroH3>Frequently asked questions about computer science symbols</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
