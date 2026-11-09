import { ToolSeoContent } from "@/components/ToolSeoContent";
import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";

const steps = [
  {
    title: "Paste your Markdown",
    body: "Replace the example with your own .md content: notes from Obsidian or Notion, a README, or a draft with headings, lists, tables, code blocks and math.",
  },
  {
    title: "Convert to LaTeX",
    body: (
      <>
        Click Convert to LaTeX. A complete document streams into the Code tab, with{" "}
        <Cmd>#</Cmd> headings as <Cmd>\section</Cmd>, lists as itemize and enumerate, and{" "}
        <Cmd>$...$</Cmd> and <Cmd>$$...$$</Cmd> math kept as LaTeX math.
      </>
    ),
  },
  {
    title: "Preview and export",
    body: "Open the Preview tab to compile it to PDF, then export the .tex file or the PDF, or open it in Octree to keep writing.",
  },
];

const tips = [
  {
    title: "Undefined control sequence in math",
    body: (
      <>
        Markdown math is passed through as written, so KaTeX-only commands or a{" "}
        <Cmd>\mathbb</Cmd> without amssymb can fail. The log names the line; fix the command or
        add the package.
      </>
    ),
  },
  {
    title: "Images do not appear",
    body: (
      <>
        <Cmd>![alt](image.png)</Cmd> becomes an <Cmd>\includegraphics</Cmd> line, but the image
        file is not uploaded. Upload it in Octree or comment the line out to compile.
      </>
    ),
  },
  {
    title: "Long documents stop early",
    body: "Each conversion returns about 2,000 tokens of LaTeX. Convert a long file one chapter or section at a time and join the parts.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert Markdown to LaTeX online?",
    answer:
      "Paste your Markdown into the editor on this page and click Convert to LaTeX. The tool returns a complete LaTeX document with the packages it needs, which you can preview as a PDF and download as a .tex file. No install and no account are needed.",
  },
  {
    question: "Does it keep math equations?",
    answer:
      "Yes. Inline math in $...$ and display math in $$...$$ are kept as LaTeX math, and amsmath and amssymb are loaded in the preamble, so equations written for MathJax or KaTeX usually compile unchanged.",
  },
  {
    question: "How is this different from Pandoc?",
    answer:
      "Pandoc (pandoc notes.md -o notes.tex) is a deterministic command-line converter you install locally. This tool runs in the browser, uses an AI model (OpenAI gpt-4o-mini) to write the LaTeX, and compiles a PDF preview straight away. Proofread the output, since the AI can reword or restructure content.",
  },
  {
    question: "Can I convert a .md file to .tex?",
    answer:
      "Open the .md file in any text editor, copy its contents into the converter and click Convert to LaTeX, then use Export to download document.tex. The page takes pasted text rather than file uploads.",
  },
];

export default function MarkdownToLatexSeoContent() {
  return (
    <ToolSeoContent
      heading="Convert Markdown to LaTeX Online"
      intro={
        <>
          <p>
            This Markdown to LaTeX converter turns .md text into a complete, compilable LaTeX
            document. An AI model (OpenAI gpt-4o-mini) rewrites headings as sections, bold and
            italic as <Cmd>\textbf</Cmd> and <Cmd>\textit</Cmd>, bullet and numbered lists as
            itemize and enumerate, tables as tabular, fenced code as code listings and links as
            hyperlinks, loading packages such as booktabs, listings and hyperref, while keeping inline and display math as LaTeX math.
          </p>
          <p>
            The Preview tab compiles the result with a full TeX Live distribution on the Octree
            compile service, so you see the PDF before you download the .tex file. Input is
            pasted text, and each conversion returns about 2,000 tokens of LaTeX, enough for a
            few pages; split longer files. It is free, needs no account, and works for README
            files, lecture notes and drafts written in Obsidian, Notion or Typora that need to
            become a paper or thesis chapter.
          </p>
        </>
      }
      stepsHeading="How to convert Markdown to LaTeX"
      steps={steps}
      tipsHeading="Common problems and how to fix them"
      tips={tips}
      faqHeading="Markdown to LaTeX FAQ"
      faq={faq}
      related={
        <>
          Going the other way? Use the{" "}
          <IntroLink href="/tools/latex-to-markdown">LaTeX to Markdown converter</IntroLink>, see
          all <IntroLink href="/tools/latex-converter">LaTeX converters</IntroLink>, or read the{" "}
          <IntroLink href="https://www.useoctree.com/learn/latex" external>
            introduction to LaTeX
          </IntroLink>
          .
        </>
      }
    />
  );
}
