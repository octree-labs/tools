import { ToolSeoContent } from "@/components/ToolSeoContent";
import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Describe what you need",
    body: "Write a sentence or two: the kind of document, its sections, and anything specific such as a table, an equation or a two-column layout.",
  },
  {
    title: "Generate the LaTeX code",
    body: "Click Generate LaTeX. The code streams in as a complete document with the document class, packages and structure already in place.",
  },
  {
    title: "Preview, then copy or keep editing",
    body: "Switch to the preview tab to see the compiled PDF. Copy the code, download it as .tex or PDF, or open it in Octree to edit it further.",
  },
];

const tips = [
  {
    title: "Name the document class",
    body: "Say article, report, beamer slides or letter, and list the sections you want; vague prompts give generic documents.",
  },
  {
    title: "Ask for one thing at a time",
    body: "A single table, figure layout or set of slides comes out cleaner than a whole thesis in one prompt. Long requests can be cut short.",
  },
  {
    title: "Replace the placeholder text",
    body: "The generator writes structure and sample content, not your research. Check every equation, and never keep a citation you have not verified.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "What is an AI LaTeX generator?",
    answer:
      "It turns a plain-English description into LaTeX code. You describe the document, and the generator writes a complete .tex file with the document class, the packages it needs, sections and placeholder content that you then edit.",
  },
  {
    question: "Is the LaTeX code generator free?",
    answer:
      "Yes. You can generate, preview, copy and download LaTeX without an account. A free Octree account is only needed if you want to save the document as a project and keep editing it.",
  },
  {
    question: "Does the generated LaTeX compile?",
    answer:
      "The preview compiles it with full TeX Live on the Octree compile service (pdfLaTeX by default, XeLaTeX or LuaLaTeX when the code needs them). If it fails, the error dialog offers to open the document in Octree so the AI can fix the error from the log.",
  },
  {
    question: "Can it write a whole paper for me?",
    answer:
      "It writes the skeleton of a paper: the document class, packages, sections and placeholder content such as an example equation or table. The content is placeholder text, and very long documents may be cut off, so treat the output as a starting point.",
  },
  {
    question: "What kinds of documents can it generate?",
    answer:
      "Articles, reports, beamer presentations, letters, CVs, homework sheets, tables and standalone equations are common requests. If a document needs a specific package, mention it in the description.",
  },
];

export default function AiLatexGeneratorSeoContent() {
  return (
    <ToolSeoContent
      heading="LaTeX generator: turn a description into LaTeX code"
      intro={
        <>
          <p>
            This AI LaTeX generator writes LaTeX code from a plain-English description. Ask for a
            beamer deck, a lab report, a two-column article or a table, and it returns a complete
            document with the right document class, packages such as amsmath, amssymb and
            graphicx, and a section structure you can fill in.
          </p>
          <p>
            The preview compiles the code with a full TeX Live distribution on the Octree compile
            service: pdfLaTeX by default, XeLaTeX or LuaLaTeX when the code calls for them. No
            account is needed; sign up for free only if you want to save the result as a project.
          </p>
        </>
      }
      stepsHeading="How to generate LaTeX with AI"
      steps={steps}
      tipsHeading="Tips for better LaTeX output"
      tips={tips}
      faqHeading="AI LaTeX generator FAQ"
      faq={faq}
      related={
        <>
          Want to understand the code it writes? Read the{" "}
          <IntroLink href="https://www.useoctree.com/learn/latex" external>
            introduction to LaTeX
          </IntroLink>
          , or paste any LaTeX into the{" "}
          <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink> to edit it with a
          live PDF preview.
        </>
      }
    />
  );
}
