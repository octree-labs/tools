import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Upload the diagram",
    body: "Drop in a screenshot, export or photo of the diagram as JPEG, PNG, GIF or WebP, up to 20 MB.",
  },
  {
    title: "Let the AI redraw it in TikZ",
    body: (
      <>
        The model reads the shapes, arrows, labels and colours and writes a standalone LaTeX
        document with a <Cmd>tikzpicture</Cmd>, using libraries such as positioning, arrows and
        shapes.geometric.
      </>
    ),
  },
  {
    title: "Compare, then refine",
    body: "Open the preview tab to compare the compiled diagram with your image. Copy or download the code, or open it in Octree to adjust it with the AI.",
  },
];

const tips = [
  {
    title: "Crop to the diagram",
    body: "Remove captions, page text and other figures; one diagram per image converts best.",
  },
  {
    title: "Prefer clean sources",
    body: "Exports and screenshots beat photos. For hand-drawn sketches, use dark ink on plain paper and photograph it straight on.",
  },
  {
    title: "Data plots belong in pgfplots",
    body: "The converter redraws shapes; it does not recover data points. For charts from numbers, use the pgfplots generator.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert an image to TikZ?",
    answer:
      "Upload a JPEG, PNG, GIF or WebP of the diagram. The AI returns a complete LaTeX document containing a tikzpicture that redraws it, and the preview compiles that code so you can compare it with the original.",
  },
  {
    question: "Is the TikZ output an exact copy of my image?",
    answer:
      "No. It is a redraw with editable nodes and paths, not a trace. Layout, labels and arrows usually carry over, but spacing, curves and colours can differ, so expect to adjust coordinates for a publication figure.",
  },
  {
    question: "Which diagrams convert best?",
    answer:
      "Flowcharts, block diagrams, trees, graphs, state machines and simple geometric figures. Dense figures with many overlapping elements, photographs and data plots convert poorly.",
  },
  {
    question: "Can it convert a hand-drawn sketch or whiteboard photo?",
    answer:
      "Yes, if the lines and labels are legible. Crop the photo to the diagram and use good lighting; faint pencil and skewed angles reduce accuracy.",
  },
  {
    question: "Is the image to TikZ converter free?",
    answer:
      "Yes, and it needs no account. The generated code compiles with pdfLaTeX and TeX Live, so it works in Overleaf, Octree or a local LaTeX installation.",
  },
];

export default function ImageToTikzSeoContent() {
  return (
    <ToolSeoContent
      heading="Image to TikZ: convert a diagram into editable LaTeX"
      intro={
        <>
          <p>
            This image to TikZ converter turns a picture of a diagram into TikZ code you can edit
            and compile. Upload a flowchart, block diagram, tree, graph or sketch, and a vision AI
            model rebuilds it as nodes and paths in a standalone LaTeX document, keeping the text
            labels and colours where it can.
          </p>
          <p>
            The preview compiles the result with a full TeX Live distribution on the Octree
            compile service, using pdfLaTeX. No account is needed. The output is a close redraw,
            not a pixel-perfect trace, so plan on a few manual tweaks for figures that must match
            exactly.
          </p>
        </>
      }
      stepsHeading="How to convert an image to TikZ"
      steps={steps}
      tipsHeading="Tips for a better conversion"
      tips={tips}
      faqHeading="Image to TikZ FAQ"
      faq={faq}
      related={
        <>
          Learn the commands in the output with the{" "}
          <IntroLink href="https://www.useoctree.com/learn/tikz" external>
            TikZ guide
          </IntroLink>
          . No image to start from? Describe the diagram to the{" "}
          <IntroLink href="/tools/tikz-generator">TikZ generator</IntroLink>, or plot data with
          the <IntroLink href="/tools/pgfplots-generator">pgfplots generator</IntroLink>.
        </>
      }
    />
  );
}
