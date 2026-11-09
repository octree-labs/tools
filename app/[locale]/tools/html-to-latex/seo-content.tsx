import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Paste your HTML",
    body: "Replace the example with your own markup: a full page, an article fragment, or the source of a table copied from a website or a CMS export.",
  },
  {
    title: "Convert to LaTeX",
    body: (
      <>
        Click Convert to LaTeX. The LaTeX streams into the Code tab as a complete document,
        from <Cmd>\documentclass{"{article}"}</Cmd> to <Cmd>\end{"{document}"}</Cmd>.
      </>
    ),
  },
  {
    title: "Preview and export",
    body: "Open the Preview tab to compile the document to PDF, then export it as a .tex file or a PDF, or open it in Octree to keep editing.",
  },
];

const tips = [
  {
    title: "Strip what LaTeX cannot use",
    body: "Remove scripts, inline styles, navigation and ads before converting. Paragraph-level CSS such as colours and fonts has no direct LaTeX equivalent, and the shorter input leaves more room for the content.",
  },
  {
    title: "Images become placeholders",
    body: (
      <>
        An <Cmd>{"<img>"}</Cmd> tag can only become an <Cmd>\includegraphics</Cmd> line; the image
        file itself is not downloaded, so the preview cannot show it. Add the files in Octree or
        comment those lines out.
      </>
    ),
  },
  {
    title: "Special characters",
    body: (
      <>
        If compilation fails on a symbol, check that <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>#</Cmd>{" "}
        and <Cmd>_</Cmd> in the text were escaped as <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\#</Cmd>{" "}
        and <Cmd>\_</Cmd>.
      </>
    ),
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert HTML to LaTeX?",
    answer:
      "Paste the HTML into the editor on this page and click Convert to LaTeX. Headings become \\section commands, lists become itemize or enumerate, tables become tabular, and bold, italic and links become \\textbf, \\emph and \\href. Check the result in the Preview tab and download the .tex or PDF.",
  },
  {
    question: "Can this tool convert LaTeX to HTML?",
    answer:
      "No, it only converts HTML to LaTeX. To go from LaTeX to HTML, the usual route is a local TeX tool such as make4ht or htlatex from TeX4ht, or Pandoc (pandoc paper.tex -o paper.html). For web publishing, the LaTeX to Markdown converter on this site is another option.",
  },
  {
    question: "How long can the HTML be?",
    answer:
      "There is no fixed input limit, but each conversion returns about 2,000 tokens of LaTeX, roughly a few pages. Convert a long page section by section, or strip scripts, styles and navigation first so only the content is sent.",
  },
  {
    question: "Is the HTML to LaTeX converter free?",
    answer:
      "Yes, it is free and needs no account. The conversion uses an AI model (OpenAI gpt-4o-mini), so proofread the output, especially tables with merged cells.",
  },
];

export default function HtmlToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="HTML to LaTeX Converter"
      intro={
        <>
          <p>
            This HTML to LaTeX converter turns web markup into a complete, compilable LaTeX
            document. Paste HTML into the editor and an AI model (OpenAI gpt-4o-mini) maps each
            element to its LaTeX equivalent: <Cmd>{"<h1>"}</Cmd> to <Cmd>{"<h3>"}</Cmd> headings
            to sections, <Cmd>{"<ul>"}</Cmd> and <Cmd>{"<ol>"}</Cmd> to itemize and enumerate,{" "}
            <Cmd>{"<table>"}</Cmd> to tabular, and <Cmd>{"<strong>"}</Cmd>, <Cmd>{"<em>"}</Cmd>,{" "}
            <Cmd>{"<code>"}</Cmd> and links to their LaTeX commands, with amsmath, amssymb and
            hyperref in the preamble.
          </p>
          <p>
            The Preview tab compiles the result with a full TeX Live distribution on the Octree
            compile service, so you can see the PDF before downloading the .tex file. The tool
            takes pasted markup, not a URL, and each conversion returns about 2,000 tokens of
            LaTeX, so long pages are best converted in parts. It is free and needs no account.
          </p>
        </>
      }
      stepsHeading="How to convert HTML to LaTeX"
      steps={steps}
      tipsHeading="Tips for a clean conversion"
      tips={tips}
      faqHeading="HTML to LaTeX FAQ"
      faq={faq}
      related={
        <>
          Need another format? See all{" "}
          <IntroLink href="/tools/latex-converter">LaTeX converters</IntroLink>, convert{" "}
          <IntroLink href="/tools/markdown-to-latex">Markdown to LaTeX</IntroLink>, or learn the
          basics in the{" "}
          <IntroLink href="https://www.useoctree.com/learn/tables" external>
            LaTeX tables guide
          </IntroLink>
          .
        </>
      }
    />
  );
}
