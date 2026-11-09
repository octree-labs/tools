import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Describe the diagram",
    body: "Name the nodes, how they connect and the layout, for example \"a flowchart with Start, Process and End connected left to right\".",
  },
  {
    title: "Generate TikZ",
    body: "The AI writes a complete LaTeX document with a commented tikzpicture and the TikZ libraries it needs.",
  },
  {
    title: "Preview and edit",
    body: "Check the compiled diagram in the preview tab. To change the code by hand, paste it into the online LaTeX editor or open it in Octree.",
  },
];

const tips = [
  {
    title: "Be concrete",
    body: "Give node labels, shapes, arrow directions and colours. Saying \"left to right\" or \"top to bottom\" fixes most layout problems.",
  },
  {
    title: "Iterate in small steps",
    body: "Generate a simple version first, then ask for one change at a time in Octree instead of rewriting the prompt from scratch.",
  },
  {
    title: "Use pgfplots for graphs of functions",
    body: "For axes, function plots and charts from data, the pgfplots generator produces cleaner code than raw TikZ.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "Can I use TikZ online without installing LaTeX?",
    answer:
      "Yes. The TikZ generator writes the code and compiles it on Octree's servers with a full TeX Live distribution, so the diagram preview works in the browser with nothing installed.",
  },
  {
    question: "Is there an online TikZ editor with live preview?",
    answer:
      "Generated code is read-only on this page. Paste it into the free online LaTeX editor at tools.useoctree.com/tools/latex-preview, which recompiles as you type, or open it in Octree to edit it with AI and save it as a project.",
  },
  {
    question: "What kinds of TikZ diagrams can it generate?",
    answer:
      "Flowcharts, trees, graphs and networks, block diagrams, state machines, neural network sketches, Venn diagrams, commutative diagrams and geometric figures. Highly detailed technical drawings usually need manual editing afterwards.",
  },
  {
    question: "Is the TikZ generator free?",
    answer:
      "Yes. Generating, previewing, copying and downloading the code needs no account. A free Octree account is only needed to save the diagram as a project.",
  },
  {
    question: "Will the code work in Overleaf?",
    answer:
      "Yes. The output is a standard LaTeX document that loads tikz and standard TikZ libraries, and compiles with pdfLaTeX, so it works in Overleaf, Octree and local TeX distributions.",
  },
];

export default function TikzGeneratorSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="tikz-generator"
      locale={locale}
      heading="TikZ online: generate TikZ diagrams from a description"
      intro={
        <>
          <p>
            This TikZ generator writes TikZ code from a plain-English description of a diagram.
            It produces a complete LaTeX document with a commented tikzpicture and the libraries
            it needs, such as positioning, arrows.meta and shapes, so you get a working starting
            point instead of a blank page.
          </p>
          <p>
            The preview compiles the code with a full TeX Live distribution on the Octree compile
            service, using pdfLaTeX. No account is needed. The generated code is read-only here;
            for an online TikZ editor with live preview, paste it into the LaTeX editor or open it
            in Octree, where a free account saves it.
          </p>
        </>
      }
      stepsHeading="How to create a TikZ diagram online"
      steps={steps}
      tipsHeading="Tips for better TikZ diagrams"
      tips={tips}
      faqHeading="TikZ generator FAQ"
      faq={faq}
      related={
        <>
          Learn the syntax in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/tikz" external>
            TikZ guide
          </IntroLink>
          , edit TikZ code in the{" "}
          <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>, or turn an
          existing picture into code with{" "}
          <IntroLink href="/tools/image-to-tikz">image to TikZ</IntroLink>.
        </>
      }
    />
  );
}
