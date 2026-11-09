import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Describe the plot",
    body: "Say what to draw: the function or data points, the plot type (line, bar, scatter, area, histogram or 3D surface), axis ranges, labels, legend and colours. Pasting a small table of numbers works too.",
  },
  {
    title: "Generate the code",
    body: (
      <>
        Click Generate Plot. The AI writes a complete document with{" "}
        <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> and a commented <Cmd>axis</Cmd> environment.
      </>
    ),
  },
  {
    title: "Preview and export",
    body: "Open the Preview tab to compile the plot to PDF. Edit the code to fine-tune it, then export pgfplot.tex or pgfplot.pdf, or open it in Octree.",
  },
];

const tips = [
  {
    title: "Dimension too large",
    body: (
      <>
        A function that grows very fast, such as <Cmd>exp(x)</Cmd> over a wide domain, overflows
        TeX arithmetic. Narrow the <Cmd>domain</Cmd>, set <Cmd>restrict y to domain</Cmd>, or use
        a logarithmic axis.
      </>
    ),
  },
  {
    title: "Jagged curves",
    body: (
      <>
        Raise <Cmd>samples</Cmd>, for example <Cmd>samples=200</Cmd>, for smooth curves. Keep it
        lower for 3D plots, which compile much more slowly.
      </>
    ),
  },
  {
    title: "Plotting your own data",
    body: (
      <>
        Replace the generated coordinates with your values using{" "}
        <Cmd>\addplot table</Cmd> or <Cmd>\addplot coordinates</Cmd>; the axis styling stays the
        same.
      </>
    ),
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "What is a PGFPlots generator?",
    answer:
      "It writes pgfplots code for you. pgfplots is the LaTeX package for drawing charts with TikZ; instead of learning its axis options, you describe the plot in plain English and get a complete document you can compile, edit and paste into a paper.",
  },
  {
    question: "Which kinds of plots can it make?",
    answer:
      "Anything pgfplots can draw: function plots, line charts, bar charts, scatter plots, histograms, error bars, area plots and 3D surface or mesh plots. Describe the data, axes and style you want and the code reflects them.",
  },
  {
    question: "How do I put the plot in my LaTeX document?",
    answer:
      "Add \\usepackage{pgfplots} and \\pgfplotsset{compat=1.18} to your preamble, then copy the tikzpicture environment from the generated code into your document, usually inside a figure environment with a caption.",
  },
  {
    question: "Is the PGFPlots generator free?",
    answer:
      "Yes, it is free and needs no account. The code is written by an AI model (OpenAI GPT-5) and compiled with a full TeX Live distribution, so check the preview against what you asked for.",
  },
];

export default function PgfplotsGeneratorSeoContent() {
  return (
    <ToolSeoContent
      heading="PGFPlots Generator"
      intro={
        <>
          <p>
            This PGFPlots generator turns a plain-English description of a chart into pgfplots
            code. Describe a function, a set of data points or a plot type, and an AI model
            (OpenAI GPT-5) writes a complete LaTeX document with a commented{" "}
            <Cmd>tikzpicture</Cmd> and <Cmd>axis</Cmd> environment: line and function plots, bar
            charts, scatter plots, histograms and 3D surfaces, with the axis labels, ranges,
            legend and colours you asked for.
          </p>
          <p>
            The Preview tab compiles the plot with a full TeX Live distribution on the Octree
            compile service, so you see the PDF before you export the .tex file. Because the
            chart is drawn by LaTeX, it uses your document font and stays sharp at any size,
            unlike an image pasted from a spreadsheet. The generator is free and needs no
            account; the code it writes is yours to edit, from tick labels to plot styles.
          </p>
        </>
      }
      stepsHeading="How to generate a pgfplots chart"
      steps={steps}
      tipsHeading="Common pgfplots errors and how to fix them"
      tips={tips}
      faqHeading="PGFPlots generator FAQ"
      faq={faq}
      related={
        <>
          Learn the axis options in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
            pgfplots guide
          </IntroLink>
          , draw diagrams with the{" "}
          <IntroLink href="/tools/tikz-generator">TikZ generator</IntroLink>, or turn a CSV into a
          table with the <IntroLink href="/tools/table-to-latex">LaTeX table generator</IntroLink>.
        </>
      }
    />
  );
}
