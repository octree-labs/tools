import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Take a clear picture",
    body: "Photograph or screenshot the math: a line from your notebook, a whiteboard, a tablet note or a textbook formula. Crop it to the part you need.",
  },
  {
    title: "Upload it",
    body: "Drop the JPEG or PNG onto the upload box. The LaTeX streams into the code panel as the AI reads the image.",
  },
  {
    title: "Check the preview and copy",
    body: "Open the preview tab to compare the compiled result with your original, then copy the code, download it, or open it in Octree to keep editing.",
  },
];

const tips = [
  {
    title: "One expression or short block per image",
    body: "The converter is built for equations and short derivations; split a full page of working into several uploads.",
  },
  {
    title: "Write clearly and keep contrast high",
    body: "Dark ink on plain paper, even lighting and a straight-on angle reduce misread symbols such as 1 and l, or x and ×.",
  },
  {
    title: "Always check the symbols",
    body: "Handwriting recognition makes mistakes. Compare subscripts, exponents and Greek letters in the preview before you use the code.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert handwritten math into LaTeX?",
    answer:
      "Upload a photo or scan of the handwritten math as JPEG or PNG. The AI reads it and returns LaTeX in a complete document that loads amsmath and amssymb, and the preview compiles it so you can check every symbol.",
  },
  {
    question: "Is this online LaTeX converter free?",
    answer:
      "Yes. Converting, previewing, copying and downloading are free and need no account. A free Octree account is only needed to save the result as a project.",
  },
  {
    question: "Does it work with iPad and tablet handwriting?",
    answer:
      "Yes. Export the page or a screenshot from GoodNotes, Notability, OneNote or a similar app as an image, crop it to the equation and upload it.",
  },
  {
    question: "Can I type math instead of uploading an image?",
    answer:
      "This page converts images. To convert typed math or a plain-language description such as \"integral of x squared from 0 to 1\", use the equation to LaTeX converter.",
  },
  {
    question: "Will the LaTeX compile in Overleaf?",
    answer:
      "Yes. The output uses standard amsmath notation and compiles with pdfLaTeX on any TeX distribution, including Overleaf and Octree. The preview on this page compiles it with full TeX Live.",
  },
];

export default function MathToLatexSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="math-to-latex"
      locale={locale}
      heading="Convert handwritten math into LaTeX online"
      intro={
        <>
          <p>
            This math to LaTeX converter turns a picture of handwritten or printed math into
            LaTeX code. Upload a photo, scan or screenshot of an equation and a vision AI model
            transcribes fractions, roots, sums, integrals, matrices and Greek letters into
            standard amsmath notation.
          </p>
          <p>
            The result is a complete LaTeX document, and the preview compiles it with a full TeX
            Live distribution on the Octree compile service, using pdfLaTeX. No account is
            needed. It works best on one equation or a few lines at a time; long pages of
            working are better split into several images.
          </p>
        </>
      }
      stepsHeading="How to convert math to LaTeX"
      steps={steps}
      tipsHeading="Tips for accurate conversions"
      tips={tips}
      faqHeading="Math to LaTeX FAQ"
      faq={faq}
      related={
        <>
          Learn how LaTeX math works in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
            guide to mathematical expressions
          </IntroLink>
          , convert typed math with the{" "}
          <IntroLink href="/tools/equation-to-latex">equation to LaTeX converter</IntroLink>, or
          look up a command in the <IntroLink href="/symbols">LaTeX symbol reference</IntroLink>.
        </>
      }
    />
  );
}
