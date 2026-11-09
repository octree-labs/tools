import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuideTable } from "@/lib/template-guides/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Paste your LaTeX",
    body: "Paste the contents of your .tex file, a full document or a snippet, up to 60,000 characters.",
  },
  {
    title: "Convert to Word",
    body: "Click Convert to Word. When the conversion finishes, document.docx downloads automatically; the download button stays for another copy.",
  },
  {
    title: "Open it in Word",
    body: "Open the file in Microsoft Word, Google Docs, LibreOffice or Pages. Headings use Word's own Heading styles, so the navigation pane and a table of contents work straight away.",
  },
];

const tips = [
  {
    title: "Equations are plain text",
    body: (
      <>
        Math becomes readable Unicode text such as x² + y² = r², not editable Word equations.
        For native Word (OMML) equations, run Pandoc locally:{" "}
        <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>, or render a
        key formula with the <IntroLink href="/tools/latex-to-png">LaTeX to PNG converter</IntroLink>.
      </>
    ),
  },
  {
    title: "Figures appear as captions",
    body: "Image files are not uploaded with the text, so each figure becomes its caption. Insert the images in Word afterwards.",
  },
  {
    title: "Input is too long",
    body: "The limit is 60,000 characters. Convert a thesis chapter by chapter and paste the parts into one Word file.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert a LaTeX file to Word?",
    answer:
      "Paste the contents of your .tex file into the editor and click Convert to Word. The converter reads the LaTeX structure, rebuilds it as a Word document with real headings, lists, tables and text formatting, and downloads document.docx to your computer. Open it in Microsoft Word, Google Docs, LibreOffice or Pages.",
  },
  {
    question: "What happens to equations when converting LaTeX to Word?",
    answer:
      "Inline and display math are converted to readable plain text with Unicode symbols (for example x² + y² = r² or ∫ f(x) dx), with display equations centred on their own line. They are not native Word equation objects. If you need editable Word equations (OMML), run Pandoc locally: pandoc paper.tex -o paper.docx. For a picture-perfect formula, render it with the LaTeX to PNG tool and paste the image.",
  },
  {
    question: "Are tables, lists and bibliographies preserved?",
    answer:
      "Tables (tabular, booktabs, longtable) become real Word tables with a header row; itemize and enumerate become bulleted and numbered lists; bold, italic, underline, monospace, links and footnotes are kept. Citations appear as [key] or author-year text and a thebibliography environment becomes a numbered References section. Figures are replaced by their captions because the image files are not available to the converter.",
  },
  {
    question: "Is LaTeX to Word conversion free, and is my document stored?",
    answer:
      "The converter is free with no sign-up. Your LaTeX is sent to our server for conversion and the Word file is generated in memory and streamed back to your browser; nothing is kept once the response is sent. Documents up to 60,000 characters are supported, which covers a typical paper or thesis chapter.",
  },
];

export default function LatexToWordSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="latex-to-word"
      locale={locale}
      heading="LaTeX to Word Converter (DOCX)"
      intro={
        <>
          <p>
            This LaTeX to Word converter turns a .tex document into an editable Microsoft Word
            .docx file. It works in two passes. First, an AI model (OpenAI gpt-4o-mini) reads
            your LaTeX and rewrites it as clean semantic HTML, keeping <GuideCode>\section</GuideCode>{" "}
            headings, lists, <GuideCode>tabular</GuideCode> tables, bold and italic text, links
            and footnotes, and dropping the preamble and layout commands that mean nothing in
            Word. Second, that HTML is mapped deterministically to Word&apos;s own building blocks:
            Heading 1 to 6 styles, bulleted and numbered lists, tables with a header row and
            formatted runs.
          </p>
          <p>
            The result is a native .docx, so track changes, comments and the table of contents
            work as in any Word file. Math is written as readable Unicode text rather than Word
            equations, figures become their captions, and input is limited to 60,000 characters.
            The converter is free, needs no account, and keeps nothing once the file is sent
            back.
          </p>
          <GuideTable
            headers={["LaTeX", "Word output"]}
            rows={[
              [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Title, Heading 1, Heading 2 styles"],
              [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Bulleted and numbered lists, nested levels kept"],
              [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Word table with a bold header row; caption above"],
              [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Bold, italic, underline, monospace runs"],
              [<GuideCode key="5">$inline math$</GuideCode>, "Readable text with Unicode symbols, superscripts and subscripts"],
              [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Centred paragraph per equation line, with its number"],
              [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Clickable hyperlink; footnote text in parentheses"],
              [<GuideCode key="8">\cite, thebibliography</GuideCode>, "[key] placeholders and a numbered References section"],
              [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Caption only (image files are not uploaded)"],
            ]}
          />
        </>
      }
      stepsHeading="How to convert LaTeX to Word"
      steps={steps}
      tipsHeading="Limits and how to work around them"
      tips={tips}
      faqHeading="LaTeX to Word FAQ"
      faq={faq}
      related={
        <>
          Need Markdown for Notion or GitHub instead? Use the{" "}
          <IntroLink href="/tools/latex-to-markdown">LaTeX to Markdown converter</IntroLink>,
          compile a PDF in the <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>,
          or see all <IntroLink href="/tools/latex-converter">LaTeX converters</IntroLink>.
        </>
      }
    />
  );
}
