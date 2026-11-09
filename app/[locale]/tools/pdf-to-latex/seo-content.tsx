import { ToolSeoContent } from "@/components/ToolSeoContent";
import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Check arXiv first",
    body: "If the PDF is an arXiv paper, the authors' original LaTeX source is usually available. Download it from the TeX Source link on the paper's arXiv page instead of converting the PDF.",
  },
  {
    title: "Capture the part you need",
    body: "Take a screenshot of the page or region, saved as PNG or JPEG. One equation block or a short section per image converts best.",
  },
  {
    title: "Convert the image to LaTeX",
    body: "Upload the screenshot to the math to LaTeX converter. It returns a complete document that loads amsmath and amssymb, and its preview compiles the code so you can compare it with the PDF.",
  },
  {
    title: "Assemble and edit",
    body: "Paste the pieces into the online LaTeX editor to fix them with a live PDF preview, or open them in Octree to save the document as a project.",
  },
];

const tips = [
  {
    title: "Figures are not extracted",
    body: "Images and plots in the PDF are not recreated as LaTeX. Add them back with \\includegraphics, or redraw diagrams with image to TikZ.",
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
      "A PDF does not contain its LaTeX source, so the text and math have to be recreated. For arXiv papers, download the original source from the TeX Source link on the paper's arXiv page. For other PDFs, screenshot the page or region you need and upload the image to the math to LaTeX converter, then check the compiled preview against the original.",
  },
  {
    question: "Is converting a PDF to LaTeX free?",
    answer:
      "Yes. The math to LaTeX converter and the online LaTeX editor need no account. A free Octree account is only needed to save the result as a project.",
  },
  {
    question: "Can I convert a whole paper or thesis?",
    answer:
      "Image conversion is built for short, math-heavy passages, and output length per conversion is limited, so work a section at a time. Papers on arXiv are better downloaded from their original source.",
  },
  {
    question: "Does the result keep the exact layout of the PDF?",
    answer:
      "No. The text, headings and math are recreated as clean, editable LaTeX; fonts, spacing, page layout and images are not copied.",
  },
  {
    question: "Can scanned PDFs be converted?",
    answer:
      "Screenshots of clear scans of printed or neatly handwritten pages can work. Low-resolution, skewed or faint scans lead to misread symbols, so check the result carefully.",
  },
];

export default function PdfToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="Convert PDF to LaTeX online"
      intro={
        <>
          <p>
            A PDF stores the finished pages, not the LaTeX that produced them, so converting a PDF
            to LaTeX means recreating its text and math as editable source. How you do that
            depends on where the PDF came from: arXiv papers usually come with their original
            source, and for everything else a screenshot of the page can be converted to LaTeX
            by AI.
          </p>
          <p>
            The math to LaTeX converter turns an image of equations, problem sets or lecture notes
            into a complete LaTeX document and compiles it with a full TeX Live distribution on
            the Octree compile service. No account is needed. The result does not keep the
            original fonts, page layout or images, and long documents are best converted a
            section at a time.
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
          Convert screenshots of equations with the{" "}
          <IntroLink href="/tools/math-to-latex">math to LaTeX converter</IntroLink>, edit the
          result in the <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>, or
          read the{" "}
          <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
            guide to LaTeX math
          </IntroLink>
          .
        </>
      }
    />
  );
}
