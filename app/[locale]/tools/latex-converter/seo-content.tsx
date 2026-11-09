import { ToolSeoContent } from "@/components/ToolSeoContent";
import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Start from what you have",
    body: "Pick the card that matches your input: Markdown, HTML, MathML, Mermaid, a CSV file, a PDF, an image or an arXiv ID to get LaTeX, or a LaTeX document to get Markdown, Word, PNG or PDF.",
  },
  {
    title: "Paste or upload and convert",
    body: "Each converter opens on its own page with an example. Replace it with your content and click convert; AI converters stream the result as it is written.",
  },
  {
    title: "Check the result and export",
    body: "LaTeX outputs come with a compiled PDF preview, so you can check them before downloading the .tex file. Open any result in Octree to keep editing it.",
  },
];

const tips = [
  {
    title: "Proofread AI output",
    body: "The AI converters handle messy input and unusual packages, but they can reword or drop content. Compare the preview with your source before you submit anything.",
  },
  {
    title: "Convert long documents in parts",
    body: "The Markdown, HTML, Mermaid, CSV and LaTeX to Markdown converters return about 2,000 tokens per conversion, roughly a few pages, and LaTeX to Word accepts up to 60,000 characters. Split a thesis by chapter.",
  },
  {
    title: "Figures travel separately",
    body: "No converter uploads image files with the text. Figures become \\includegraphics lines, image links or captions, so add the files afterwards.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "What is a LaTeX converter?",
    answer:
      "A LaTeX converter translates between LaTeX source and another format. Converters to LaTeX take Markdown, HTML, MathML, Mermaid, CSV tables, PDFs or images and produce .tex code; converters from LaTeX take .tex source and produce Markdown, PNG images, Word documents or PDFs. This page collects all of Octree's free converters in both directions.",
  },
  {
    question: "Which converters use AI and which are deterministic?",
    answer:
      "Markdown, HTML, MathML, Mermaid, table (CSV), PDF, image and equation to LaTeX, and LaTeX to Markdown, use an AI model. LaTeX to Word uses AI for a first pass and then builds the .docx deterministically. arXiv to LaTeX, LaTeX to PNG and LaTeX to PDF use no AI: they download or compile your input exactly.",
  },
  {
    question: "How do I convert LaTeX to Word or PDF for free?",
    answer:
      "For Word, open the LaTeX to Word converter, paste your document and download document.docx. For PDF, open the online LaTeX editor, paste your document and download the compiled PDF. Both are free and need no account.",
  },
  {
    question: "Is there a limit on document size?",
    answer:
      "LaTeX to Word accepts up to 60,000 characters and PDF to LaTeX accepts PDFs up to 3 MB and 20 pages. The Markdown, HTML, Mermaid, CSV and LaTeX to Markdown converters return about 2,000 tokens of output per conversion, roughly a few pages, so convert long documents in parts. The compile-based tools accept any document that compiles within the server time limit.",
  },
];

export default function LatexConverterSeoContent() {
  return (
    <ToolSeoContent
      heading="LaTeX converters: convert to and from LaTeX online"
      intro={
        <>
          <p>
            Octree&apos;s LaTeX converters cover the formats people most often need to move in and
            out of LaTeX. To LaTeX: Markdown, HTML, MathML and Mermaid diagrams, CSV tables from
            Excel or Google Sheets, PDFs, photos of equations, diagram images and arXiv papers.
            From LaTeX: Markdown for GitHub and Notion, Word .docx for reviewers and submission
            portals, PNG images for slides, and PDF through the online LaTeX editor.
          </p>
          <p>
            Each converter is free, works in the browser and needs no account. Most of them use an
            AI model, because mapping one format onto another takes judgement; the outputs that
            are LaTeX are compiled with a full TeX Live distribution on the Octree compile
            service so you can check the PDF before downloading. arXiv to LaTeX, LaTeX to PNG and
            LaTeX to PDF use no AI at all. The table above lists every converter with its input,
            output and best use.
          </p>
        </>
      }
      stepsHeading="How to use the LaTeX converters"
      steps={steps}
      tipsHeading="Tips for better conversions"
      tips={tips}
      faqHeading="LaTeX converter FAQ"
      faq={faq}
      related={
        <>
          New to LaTeX? Read the{" "}
          <IntroLink href="https://www.useoctree.com/learn/latex" external>
            introduction to LaTeX
          </IntroLink>
          , edit a document in the{" "}
          <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>, or browse the{" "}
          <IntroLink href="/">full list of LaTeX tools</IntroLink>.
        </>
      }
    />
  );
}
