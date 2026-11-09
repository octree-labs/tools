import { ToolSeoContent } from "@/components/ToolSeoContent";
import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Pick a short PDF",
    body: "A page of equations, a problem set or a handout converts best. Split long documents and upload the pages you need.",
  },
  {
    title: "Upload it",
    body: "Drop the PDF onto the upload box. The AI reads the page and streams LaTeX into the code panel.",
  },
  {
    title: "Check the preview and keep the code",
    body: "Open the preview tab to compare the compiled document with your PDF, then copy the code, download it as .tex, or open it in Octree to keep editing.",
  },
];

const tips = [
  {
    title: "Papers on arXiv already have LaTeX",
    body: "If the PDF came from arXiv, download the authors' original source with arXiv to LaTeX instead of converting the PDF.",
  },
  {
    title: "Figures are not extracted",
    body: "Images and plots in the PDF are not copied into the output. Add them back with \\includegraphics, or redraw diagrams with image to TikZ.",
  },
  {
    title: "Proofread the math",
    body: "Recognition makes mistakes in dense formulas and tables. Compare subscripts, signs and alignment against the original.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert a PDF to LaTeX?",
    answer:
      "Upload the PDF, and the AI returns LaTeX in a complete document that loads amsmath and amssymb. The preview compiles it so you can compare it with the original before you copy or download the code.",
  },
  {
    question: "Is the PDF to LaTeX converter free?",
    answer:
      "Yes. Converting, previewing and downloading need no account. A free Octree account is only needed to save the result as a project.",
  },
  {
    question: "Can it convert a whole paper or thesis?",
    answer:
      "It is built for short, math-heavy documents. Output length per conversion is limited, so convert long documents a few pages at a time, and get arXiv papers from their original source with the arXiv to LaTeX tool.",
  },
  {
    question: "Does it keep the exact layout of the PDF?",
    answer:
      "No. It recreates the text, headings and math as clean, editable LaTeX rather than copying fonts, spacing and page layout, and it does not extract images.",
  },
  {
    question: "Can it read scanned PDFs?",
    answer:
      "Clear scans of printed or neatly handwritten pages can work. Low-resolution, skewed or faint scans lead to misread symbols, so check the result carefully.",
  },
];

export default function PdfToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="Convert PDF to LaTeX online"
      intro={
        <>
          <p>
            This PDF to LaTeX converter reads a PDF page and writes it back as editable LaTeX
            code. It is aimed at math: equations, problem sets, lecture handouts and short notes,
            which come back as text, headings and standard amsmath notation.
          </p>
          <p>
            The result is a complete LaTeX document, and the preview compiles it with a full TeX
            Live distribution on the Octree compile service, using pdfLaTeX. No account is needed.
            The converter does not keep the original fonts or page layout and does not extract
            images, and long documents are best converted a few pages at a time.
          </p>
        </>
      }
      stepsHeading="How to convert a PDF to LaTeX"
      steps={steps}
      tipsHeading="Tips before you convert"
      tips={tips}
      faqHeading="PDF to LaTeX FAQ"
      faq={faq}
      related={
        <>
          For papers on arXiv, use{" "}
          <IntroLink href="/tools/arxiv-to-latex">arXiv to LaTeX</IntroLink> to get the original
          source. Edit the converted code with a live preview in the{" "}
          <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>, or read the{" "}
          <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
            guide to LaTeX math
          </IntroLink>
          .
        </>
      }
    />
  );
}
