import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Paste your LaTeX",
    body: "Paste a full .tex document or just a snippet, such as one section, a table or a list. The preamble is not required.",
  },
  {
    title: "Convert to Markdown",
    body: "Click Convert to Markdown. The Markdown streams into the output editor as it is written.",
  },
  {
    title: "Copy or download it",
    body: "Copy the Markdown from the output editor, or use Export as Markdown to download document.md for GitHub, Obsidian, Notion or a static site.",
  },
];

const tips = [
  {
    title: "Math needs a renderer",
    body: (
      <>
        Equations stay as <Cmd>$...$</Cmd> and <Cmd>$$...$$</Cmd>. GitHub, Obsidian, Jupyter and
        most static site generators with KaTeX or MathJax render them; plain Markdown viewers show
        the raw LaTeX.
      </>
    ),
  },
  {
    title: "Custom macros",
    body: (
      <>
        Commands defined with <Cmd>\newcommand</Cmd> have no Markdown equivalent. Include the
        definitions in the input so the converter can expand them, and check the result.
      </>
    ),
  },
  {
    title: "Figures and citations",
    body: (
      <>
        Figures become Markdown image links to the original file names where possible, and{" "}
        <Cmd>\cite</Cmd> keys are not resolved against a .bib file. Upload the images next to the
        .md file and fix references by hand.
      </>
    ),
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert LaTeX to Markdown?",
    answer:
      "Paste your LaTeX into the left editor and click Convert to Markdown. Sections become # headings, itemize and enumerate become lists, tabular becomes a Markdown table, \\textbf and \\emph become bold and italic, and code environments become fenced code blocks. Copy the result or export document.md.",
  },
  {
    question: "Are equations preserved?",
    answer:
      "Yes. Inline math is kept as $...$ and display math as $$...$$, written in LaTeX, so it renders anywhere Markdown is shown with MathJax or KaTeX, including GitHub, Obsidian and Jupyter notebooks.",
  },
  {
    question: "How long can the LaTeX input be?",
    answer:
      "There is no fixed input limit, but each conversion returns about 2,000 tokens of Markdown, roughly a few pages. Convert a thesis or long paper one chapter or section at a time.",
  },
  {
    question: "Is it free, and is it better than Pandoc?",
    answer:
      "It is free and needs no account. It uses an AI model (OpenAI gpt-4o-mini), which copes with unusual packages and messy source but should be proofread. Pandoc (pandoc paper.tex -o paper.md) is deterministic and better for very long documents, but needs a local install.",
  },
];

export default function LatexToMarkdownSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="latex-to-markdown"
      locale={locale}
      heading="LaTeX to Markdown Converter"
      intro={
        <>
          <p>
            This LaTeX to Markdown converter turns a .tex document or snippet into clean,
            standard Markdown. An AI model (OpenAI gpt-4o-mini) rewrites sections as{" "}
            <Cmd>#</Cmd> headings, itemize and enumerate as lists, tabular and booktabs tables as
            Markdown tables, <Cmd>\textbf</Cmd> and <Cmd>\emph</Cmd> as bold and italic, code
            environments as fenced code blocks and <Cmd>\href</Cmd> as links. Math stays as LaTeX
            between <Cmd>$...$</Cmd> and <Cmd>$$...$$</Cmd>, which GitHub, Obsidian and other
            KaTeX or MathJax renderers display.
          </p>
          <p>
            The tool is free, needs no account and takes pasted text. Each conversion returns
            about 2,000 tokens of Markdown, so convert long papers in parts. Figures become image
            links where possible and citations are not resolved against a .bib file, so plan to
            fix those by hand. Use it to put a paper on a blog, turn lecture notes into a README, or
            move LaTeX notes into Notion or Obsidian.
          </p>
        </>
      }
      stepsHeading="How to convert LaTeX to Markdown"
      steps={steps}
      tipsHeading="Tips for a clean conversion"
      tips={tips}
      faqHeading="LaTeX to Markdown FAQ"
      faq={faq}
      related={
        <>
          Going the other way? Use the{" "}
          <IntroLink href="/tools/markdown-to-latex">Markdown to LaTeX converter</IntroLink>, export
          to <IntroLink href="/tools/latex-to-word">Word</IntroLink>, or see all{" "}
          <IntroLink href="/tools/latex-converter">LaTeX converters</IntroLink>.
        </>
      }
    />
  );
}
