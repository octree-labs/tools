import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre } from "@/lib/template-guides/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Write the equation or document",
    body: (
      <>
        Edit the example, which uses <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd>{" "}
        so the image is cropped to the formula, or paste any complete document.
      </>
    ),
  },
  {
    title: "Pick a resolution and background",
    body: "Choose 1x (96 DPI), 2x (192 DPI) or 4x (384 DPI), and keep Transparent background on for slides and dark themes or turn it off for white.",
  },
  {
    title: "Convert and save",
    body: "Click Convert to PNG. Download latex.png or copy the image to the clipboard and paste it into PowerPoint, Google Docs, Notion or Slack.",
  },
];

const tips = [
  {
    title: "Formula touches the edge",
    body: (
      <>
        Increase <Cmd>border=4pt</Cmd> in the document class options. Use inline{" "}
        <Cmd>$\displaystyle ...$</Cmd> rather than <Cmd>\[ ... \]</Cmd>, which spans the full line
        width.
      </>
    ),
  },
  {
    title: "Image for a dark slide",
    body: (
      <>
        Load <Cmd>xcolor</Cmd> and write <Cmd>\color{"{white}"}</Cmd> before the formula; with a
        transparent background the white text sits on any dark theme.
      </>
    ),
  },
  {
    title: "Only one page appears",
    body: "Only the first page of the PDF is rendered. Put each equation in its own conversion, or compile a multi-page document as a PDF in the online LaTeX editor.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert a LaTeX equation to a PNG image?",
    answer:
      "Paste your equation inside a standalone document (the default example uses \\documentclass[preview,border=4pt]{standalone}), choose a resolution and click Convert to PNG. The LaTeX is compiled to PDF on our server, the first page is rendered in your browser and you can download the PNG or copy it straight to the clipboard.",
  },
  {
    question: "Can I get a LaTeX PNG with a transparent background?",
    answer:
      "Yes. Keep the \"Transparent background\" option on. Because the standalone class does not paint a page colour, every pixel outside the formula stays transparent, so the image sits cleanly on dark slides, coloured backgrounds and web pages. Untick it for an opaque white background.",
  },
  {
    question: "What resolution should I pick for slides or print?",
    answer:
      "1x (96 DPI) is fine for a quick preview or chat message. Use 2x (192 DPI) for Google Slides, PowerPoint, Word, Google Docs and Notion, where the image is displayed at roughly its natural size on high-DPI screens. Use 4x (384 DPI) when the image will be printed or scaled up.",
  },
  {
    question: "Does it work with a full LaTeX document, not just an equation?",
    answer:
      "Yes. Any document that compiles with pdflatex works, including article, beamer or TikZ pictures. Only the first page is rendered to PNG; for multi-page documents, use the LaTeX preview tool to compile and download the full PDF.",
  },
];

export default function LatexToPngSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="latex-to-png"
      locale={locale}
      heading="LaTeX to PNG"
      intro={
        <>
          <p>
            This LaTeX to PNG converter renders an equation, a TikZ picture or the first page of
            a document as a PNG image. Your code is compiled with a full TeX Live installation on
            the Octree compile service, the same one behind the{" "}
            <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>, so every
            package you would use locally is available. The PDF comes back to your browser, where
            pdf.js rasterises its first page at the DPI you chose and writes a PNG with a
            transparent or white background. No AI is involved, and nothing is stored once the
            compile finishes.
          </p>
          <p>
            For a single formula, the <GuideCode>standalone</GuideCode> class with the{" "}
            <GuideCode>preview</GuideCode> option crops the page to the equation, and{" "}
            <GuideCode>border=4pt</GuideCode> adds a little space around it. Use the image in
            slides, Word and Google Docs, README files, Notion, Slack or email, anywhere that
            cannot typeset math. It is free and needs no account.
          </p>
          <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
        </>
      }
      stepsHeading="How to convert LaTeX to PNG"
      steps={steps}
      tipsHeading="Tips for better images"
      tips={tips}
      faqHeading="LaTeX to PNG FAQ"
      faq={faq}
      related={
        <>
          Need the whole document? Compile it in the{" "}
          <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>, turn it into a{" "}
          <IntroLink href="/tools/latex-to-word">Word file</IntroLink>, or look up commands in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
            LaTeX math guide
          </IntroLink>
          .
        </>
      }
    />
  );
}
