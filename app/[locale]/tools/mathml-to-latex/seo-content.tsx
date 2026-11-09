import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Paste the MathML",
    body: (
      <>
        Paste a <Cmd>{"<math>"}</Cmd> element copied from a web page, an export from Word or
        MathType, or MathML from an EPUB or JATS XML file.
      </>
    ),
  },
  {
    title: "Convert to LaTeX",
    body: "Click Convert to LaTeX. The equation comes back inside a complete LaTeX document with amsmath and amssymb loaded.",
  },
  {
    title: "Check the preview",
    body: "Open the Preview tab to compile the document and compare the typeset equation with the original, then copy the math, export the .tex file or PDF, or open it in Octree.",
  },
];

const tips = [
  {
    title: "Copy the whole math element",
    body: (
      <>
        Include everything from <Cmd>{"<math>"}</Cmd> to <Cmd>{"</math>"}</Cmd>. A fragment that
        starts in the middle of an <Cmd>{"<mrow>"}</Cmd> can lose brackets or terms.
      </>
    ),
  },
  {
    title: "Getting MathML out of Word",
    body: "Word stores equations as OMML, not MathML. In Word for Windows, turn on Equation Options > Copy MathML to the clipboard as plain text, then copy the equation and paste it here.",
  },
  {
    title: "Only want the equation",
    body: (
      <>
        Copy the lines between <Cmd>\begin{"{document}"}</Cmd> and <Cmd>\end{"{document}"}</Cmd>{" "}
        into your own file; the preamble only needs <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>.
      </>
    ),
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert MathML to LaTeX?",
    answer:
      "Paste the MathML markup into the editor and click Convert to LaTeX. Elements such as mfrac, msqrt, msup, msub, mover and mtable are rewritten as \\frac, \\sqrt, superscripts, subscripts, accents and matrices, and the result is shown as a complete LaTeX document you can compile in the Preview tab.",
  },
  {
    question: "Does it support Content MathML?",
    answer:
      "It is built for Presentation MathML, the kind browsers, Word and MathType export. Content MathML (apply, ci, cn) is usually converted too, because an AI model reads the markup, but check the result in the preview.",
  },
  {
    question: "Can I convert several equations at once?",
    answer:
      "Yes. Paste several math elements one after another and they are converted into one document. Each conversion returns up to about 1,500 tokens of LaTeX, so split very long files.",
  },
  {
    question: "Is the MathML to LaTeX converter free?",
    answer:
      "Yes, it is free and needs no account. The conversion uses OpenAI gpt-4o-mini, and the preview compiles with a full TeX Live distribution, so you can confirm the equation before using it.",
  },
];

export default function MathmlToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="MathML to LaTeX"
      intro={
        <>
          <p>
            This MathML to LaTeX converter turns MathML markup into LaTeX math you can paste into
            a paper. Paste a <Cmd>{"<math>"}</Cmd> element and an AI model (OpenAI gpt-4o-mini)
            rewrites the tree as amsmath code: <Cmd>{"<mfrac>"}</Cmd> becomes <Cmd>\frac</Cmd>,{" "}
            <Cmd>{"<msqrt>"}</Cmd> becomes <Cmd>\sqrt</Cmd>, <Cmd>{"<msup>"}</Cmd> and{" "}
            <Cmd>{"<msub>"}</Cmd> become superscripts and subscripts, and <Cmd>{"<mtable>"}</Cmd>{" "}
            becomes a matrix or aligned block. Greek letters and operators written as Unicode
            characters become their LaTeX commands.
          </p>
          <p>
            The output is a complete LaTeX document, and the Preview tab compiles it with a full
            TeX Live distribution on the Octree compile service so you can check every symbol.
            The editor highlights the XML, so it doubles as a simple online MathML editor. Each
            conversion returns up to about 1,500 tokens of LaTeX, plenty for a few equations. It
            is free and needs no account.
          </p>
        </>
      }
      stepsHeading="How to convert MathML to LaTeX"
      steps={steps}
      tipsHeading="Tips for MathML conversion"
      tips={tips}
      faqHeading="MathML to LaTeX FAQ"
      faq={faq}
      related={
        <>
          Write equations by hand with the{" "}
          <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
            LaTeX math guide
          </IntroLink>
          , convert a picture of an equation with{" "}
          <IntroLink href="/tools/math-to-latex">math to LaTeX</IntroLink>, or see all{" "}
          <IntroLink href="/tools/latex-converter">LaTeX converters</IntroLink>.
        </>
      }
    />
  );
}
