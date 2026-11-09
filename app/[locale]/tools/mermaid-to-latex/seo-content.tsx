import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Paste the Mermaid code",
    body: (
      <>
        Paste the diagram definition, starting with its type, such as <Cmd>graph TD</Cmd>,{" "}
        <Cmd>flowchart LR</Cmd> or <Cmd>sequenceDiagram</Cmd>, without the surrounding{" "}
        <Cmd>```mermaid</Cmd> fence.
      </>
    ),
  },
  {
    title: "Convert to TikZ",
    body: "Click Convert to LaTeX. The AI rewrites the nodes, labels and arrows as a tikzpicture inside a complete LaTeX document.",
  },
  {
    title: "Preview, adjust and export",
    body: "Open the Preview tab to compile the diagram to PDF. Edit node distances or positions in the code if anything overlaps, then export diagram.tex or diagram.pdf, or open it in Octree.",
  },
];

const tips = [
  {
    title: "Nodes overlap",
    body: (
      <>
        Increase <Cmd>node distance</Cmd> in the tikzpicture options, or change a node placement
        such as <Cmd>below of=</Cmd> to <Cmd>right of=</Cmd>. TikZ does not lay out graphs
        automatically the way Mermaid does.
      </>
    ),
  },
  {
    title: "Library not loaded",
    body: (
      <>
        An error about an unknown arrow tip or shape usually means a missing{" "}
        <Cmd>\usetikzlibrary</Cmd>, for example <Cmd>arrows.meta</Cmd>, <Cmd>shapes</Cmd> or{" "}
        <Cmd>positioning</Cmd>. Add it to the preamble.
      </>
    ),
  },
  {
    title: "Start small",
    body: "Flowcharts convert most reliably. For large or complex diagrams, convert one part at a time and combine the tikzpictures.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I use a Mermaid diagram in LaTeX?",
    answer:
      "LaTeX cannot render Mermaid directly. Paste the Mermaid code into this converter and it rewrites the diagram as TikZ, the drawing package LaTeX uses natively. Copy the tikzpicture into your document and load the tikz package, or export the full .tex file.",
  },
  {
    question: "Which Mermaid diagram types are supported?",
    answer:
      "Flowcharts and graphs (graph and flowchart) convert most reliably. Sequence diagrams, state diagrams and class diagrams can also be converted, since an AI model reads the code, but expect to adjust positions in the TikZ output.",
  },
  {
    question: "Why convert Mermaid to TikZ instead of using an image?",
    answer:
      "A TikZ diagram is vector graphics drawn by LaTeX itself, so it uses the same font as your text, stays sharp at any zoom and can be edited in source. An exported PNG or SVG cannot be changed without going back to Mermaid.",
  },
  {
    question: "Is the Mermaid to LaTeX converter free?",
    answer:
      "Yes, it is free and needs no account. The conversion uses OpenAI gpt-4o-mini and returns up to about 2,000 tokens of LaTeX, and the preview compiles with a full TeX Live distribution.",
  },
];

export default function MermaidToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="Mermaid to TikZ"
      intro={
        <>
          <p>
            This converter turns Mermaid diagram code into TikZ, so a flowchart drafted in a
            Markdown file, a GitHub README or Notion can go into a LaTeX paper as native vector
            graphics. Paste the Mermaid definition and an AI model (OpenAI gpt-4o-mini) rewrites
            each node, label and arrow as a <Cmd>tikzpicture</Cmd>, with explicit positions so
            nodes do not overlap, inside a complete standalone or article document that loads
            tikz and the libraries it needs.
          </p>
          <p>
            The Preview tab compiles the diagram with a full TeX Live distribution on the Octree
            compile service, so you can check the layout before exporting the .tex file or PDF.
            Mermaid lays diagrams out automatically and TikZ does not, so large diagrams may need
            spacing tweaks. Flowcharts work best; each conversion returns up to about 2,000
            tokens of LaTeX. It is free and needs no account.
          </p>
        </>
      }
      stepsHeading="How to convert Mermaid to TikZ"
      steps={steps}
      tipsHeading="Common problems and how to fix them"
      tips={tips}
      faqHeading="Mermaid to LaTeX FAQ"
      faq={faq}
      related={
        <>
          Learn the drawing commands in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/tikz" external>
            TikZ guide
          </IntroLink>
          , describe a diagram in words with the{" "}
          <IntroLink href="/tools/tikz-generator">TikZ generator</IntroLink>, or redraw a sketch
          with <IntroLink href="/tools/image-to-tikz">image to TikZ</IntroLink>.
        </>
      }
    />
  );
}
