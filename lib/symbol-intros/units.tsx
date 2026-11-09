import type { FaqJsonLdItem } from "@/lib/json-ld";
import {
  Cmd,
  IntroFaq,
  IntroH2,
  IntroH3,
  IntroP,
  IntroSection,
  Pre,
  QuickRefTable,
  type QuickRefRow,
} from "./ui";

const quickRef: QuickRefRow[] = [
  {
    latex: "\\qty{9.81}{\\metre\\per\\second\\squared}",
    preview: "9.81\\,\\mathrm{m\\,s^{-2}}",
    use: "Quantity with a unit",
    pkg: "siunitx",
  },
  {
    latex: "\\unit{\\kilo\\gram}",
    preview: "\\mathrm{kg}",
    use: "Unit on its own",
    pkg: "siunitx",
  },
  {
    latex: "\\num{6.022e23}",
    preview: "6.022 \\times 10^{23}",
    use: "Formatted number",
    pkg: "siunitx",
  },
  {
    latex: "\\qty{20}{\\degreeCelsius}",
    preview: "20\\,{}^{\\circ}\\mathrm{C}",
    use: "Degrees Celsius",
    pkg: "siunitx",
  },
  { latex: "\\ang{45}", preview: "45^{\\circ}", use: "Angle in degrees", pkg: "siunitx" },
  {
    latex: "\\qty{10}{\\micro\\metre}",
    preview: "10\\,\\mu\\mathrm{m}",
    use: "SI prefix (micrometre)",
    pkg: "siunitx",
  },
  {
    latex: "\\qty{5}{\\kilo\\ohm}",
    preview: "5\\,\\mathrm{k}\\Omega",
    use: "Kiloohm",
    pkg: "siunitx",
  },
  { latex: "9.81\\,\\mathrm{m/s^2}", use: "Units by hand, no package" },
  { latex: "^\\circ", preview: "90^\\circ", use: "Degree sign in math mode" },
  { latex: "\\AA", preview: "\\text{\\AA}", use: "Angstrom (text mode)" },
  { latex: "\\textdegree", preview: "\\text{°}", use: "Degree sign in text mode" },
  { latex: "\\hbar", use: "Reduced Planck constant" },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I write units in LaTeX?",
    answer:
      "Load \\usepackage{siunitx} and write \\qty{3.0}{\\metre\\per\\second} for a value with a unit, \\unit{\\kilo\\gram} for a unit alone and \\num{1.5e-3} for a number. siunitx version 3 uses \\qty and \\unit; the older \\SI and \\si still work. Without the package, write 3.0\\,\\mathrm{m/s}.",
  },
  {
    question: "How do I write the degree symbol in LaTeX?",
    answer:
      "In math mode use a superscript circle: $90^\\circ$, or $20^\\circ\\mathrm{C}$ for temperature. In text, \\textdegree prints °. With siunitx, \\ang{90} and \\qty{20}{\\degreeCelsius} give consistent spacing everywhere.",
  },
  {
    question: "Does siunitx conflict with the physics package?",
    answer:
      "Both packages define a \\qty command, so loading them together leads to a clash. If you need physics, use the older siunitx form \\SI{9.81}{\\metre\\per\\second\\squared}, which siunitx version 3 still supports, for quantities with units.",
  },
];

export default function UnitsIntro() {
  return (
    <IntroSection>
      <IntroH2>Units in LaTeX: siunitx, degree symbol and SI units</IntroH2>
      <IntroP>
        Units in LaTeX are easiest with the siunitx package: <Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> typesets
        a number and its unit with upright letters and correct spacing, <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd> prints
        a unit alone, and <Cmd>{"\\num{6.022e23}"}</Cmd> formats a number. Without siunitx, set
        units upright by hand, as in <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>, with a thin space <Cmd>{"\\,"}</Cmd> between
        number and unit. The degree symbol is <Cmd>{"^\\circ"}</Cmd> in math or <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd> with
        siunitx, and the angstrom is <Cmd>{"\\AA"}</Cmd>. The table lists the unit commands people
        use most, with the package each one needs; the full list follows below.
      </IntroP>

      <IntroH3>Quick reference: units with and without siunitx</IntroH3>
      <QuickRefTable rows={quickRef} />
      <Pre>{"\\usepackage{siunitx}\n\nThe sample was heated to \\qty{350}{\\kelvin} at \\qty{2.5}{\\kilo\\pascal}."}</Pre>

      <IntroH3>Frequently asked questions about units in LaTeX</IntroH3>
      <IntroFaq items={faq} />
    </IntroSection>
  );
}
