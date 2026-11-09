import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Check arXiv first",
    body: "If the PDF is an arXiv paper, the authors' original LaTeX source is usually available. Download it from the TeX Source link on the paper's arXiv page instead of converting the PDF.",
  },
  {
    title: "Upload the PDF",
    body: "Drop a PDF of up to 3 MB and 20 pages into the converter above. AI reads the text and math and returns a complete LaTeX document that loads amsmath, and the preview compiles it so you can compare it with the original.",
  },
  {
    title: "Convert longer files in parts",
    body: "For a long PDF, split out the pages you need, or screenshot a single equation block and use the math to LaTeX converter.",
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
      "A PDF does not contain its LaTeX source, so the text and math have to be recreated. For arXiv papers, download the original source from the TeX Source link on the paper's arXiv page. For other PDFs, upload the file (up to 3 MB and 20 pages) to the converter on this page, then check the compiled preview against the original.",
  },
  {
    question: "Is converting a PDF to LaTeX free?",
    answer:
      "Yes. The PDF converter, the math to LaTeX converter and the online LaTeX editor need no account. A free Octree account is only needed to save the result as a project.",
  },
  {
    question: "Can I convert a whole paper or thesis?",
    answer:
      "The converter takes PDFs of up to 3 MB and 20 pages, and output length per conversion is limited, so a thesis is best converted a chapter at a time. Papers on arXiv are better downloaded from their original source.",
  },
  {
    question: "Does the result keep the exact layout of the PDF?",
    answer:
      "No. The text, headings and math are recreated as clean, editable LaTeX; fonts, spacing, page layout and images are not copied.",
  },
  {
    question: "Can scanned PDFs be converted?",
    answer:
      "Clear scans of printed or neatly handwritten pages can work. Low-resolution, skewed or faint scans lead to misread symbols, so check the result carefully.",
  },
];

export default function PdfToLatexSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="pdf-to-latex"
      locale={locale}
      heading="Convert PDF to LaTeX online"
      intro={
        <>
          <p>
            A PDF stores the finished pages, not the LaTeX that produced them, so converting a PDF
            to LaTeX means recreating its text and math as editable source. How you do that
            depends on where the PDF came from: arXiv papers usually come with their original
            source, and for everything else the converter on this page recreates the LaTeX with
            AI.
          </p>
          <p>
            Upload a PDF of up to 3 MB and 20 pages and get a complete LaTeX document back,
            compiled with a full TeX Live distribution on the Octree compile service so you can
            check it. No account is needed. The result does not keep the original fonts, page
            layout or images, and long documents are best converted a section at a time.
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
