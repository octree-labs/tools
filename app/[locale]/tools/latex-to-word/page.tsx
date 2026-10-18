import LatexToWordTool from './LatexToWordTool';
import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from '@/lib/template-guides/ui';

const faq: GuideFaqItem[] = [
  {
    question: 'How do I convert a LaTeX file to Word?',
    answer:
      'Paste the contents of your .tex file into the editor and click Convert to Word. The converter reads the LaTeX structure, rebuilds it as a Word document with real headings, lists, tables and text formatting, and downloads document.docx to your computer. Open it in Microsoft Word, Google Docs, LibreOffice or Pages.',
  },
  {
    question: 'What happens to equations when converting LaTeX to Word?',
    answer:
      'Inline and display math are converted to readable plain text with Unicode symbols (for example x² + y² = r² or ∫ f(x) dx), with display equations centred on their own line. They are not native Word equation objects. If you need editable Word equations (OMML), run Pandoc locally: pandoc paper.tex -o paper.docx. For a picture-perfect formula, render it with the LaTeX to PNG tool and paste the image.',
  },
  {
    question: 'Are tables, lists and bibliographies preserved?',
    answer:
      'Tables (tabular, booktabs, longtable) become real Word tables with a header row; itemize and enumerate become bulleted and numbered lists; bold, italic, underline, monospace, links and footnotes are kept. Citations appear as [key] or author-year text and a thebibliography environment becomes a numbered References section. Figures are replaced by their captions because the image files are not available to the converter.',
  },
  {
    question: 'Is LaTeX to Word conversion free, and is my document stored?',
    answer:
      'The converter is free with no sign-up. Your LaTeX is sent to our server for conversion and the Word file is generated in memory and streamed back to your browser; nothing is kept once the response is sent. Documents up to 60,000 characters are supported, which covers a typical paper or thesis chapter.',
  },
];

export default function LatexToWordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LatexToWordTool />

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <article>
          <GuideH2 id="how-it-works">How the LaTeX to Word converter works</GuideH2>
          <GuideP>
            LaTeX and Word describe documents in very different ways: LaTeX is a program that
            typesets, Word is a tree of styled paragraphs. This converter bridges the two in
            two passes. First, an AI model reads your LaTeX and rewrites it as clean semantic
            HTML, keeping <GuideCode>\section</GuideCode> headings, <GuideCode>itemize</GuideCode>{' '}
            and <GuideCode>enumerate</GuideCode> lists, <GuideCode>tabular</GuideCode> tables,{' '}
            <GuideCode>\textbf</GuideCode>/<GuideCode>\emph</GuideCode> formatting, links and
            footnotes, while dropping the preamble and layout commands that have no meaning in
            Word. Second, that HTML is mapped deterministically to Word&apos;s own building
            blocks: <GuideCode>Heading 1-6</GuideCode> styles, bulleted and numbered lists,
            tables with header rows and formatted runs. The result is a native{' '}
            <GuideCode>.docx</GuideCode> that behaves like a document written in Word, so
            track changes, comments, the navigation pane and the table of contents all work.
          </GuideP>

          <GuideH2 id="what-converts">What converts, and how</GuideH2>
          <GuideTable
            headers={['LaTeX', 'Word output']}
            rows={[
              [<GuideCode key="1">\title, \section, \subsection</GuideCode>, 'Title, Heading 1, Heading 2 styles'],
              [<GuideCode key="2">itemize, enumerate, description</GuideCode>, 'Bulleted and numbered lists, nested levels kept'],
              [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, 'Word table with a bold header row; caption above'],
              [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, 'Bold, italic, underline, monospace runs'],
              [<GuideCode key="5">$inline math$</GuideCode>, 'Readable text with Unicode symbols, superscripts and subscripts'],
              [<GuideCode key="6">equation, align, \[ \]</GuideCode>, 'Centred paragraph per equation line, with its number'],
              [<GuideCode key="7">\href, \url, \footnote</GuideCode>, 'Clickable hyperlink; footnote text in parentheses'],
              [<GuideCode key="8">\cite, thebibliography</GuideCode>, '[key] placeholders and a numbered References section'],
              [<GuideCode key="9">figure, \includegraphics</GuideCode>, 'Caption only (image files are not uploaded)'],
            ]}
          />

          <GuideH2 id="use-cases">When you need LaTeX in Word</GuideH2>
          <GuideUl>
            <li>
              <strong>Journal and grant submissions</strong> that only accept .docx, or that
              run Word-based plagiarism and formatting checks.
            </li>
            <li>
              <strong>Co-authors and supervisors</strong> who review with track changes and
              comments rather than Git diffs.
            </li>
            <li>
              <strong>Theses and reports</strong> that must be handed in as editable files,
              and CVs or cover letters written in LaTeX that a recruiter wants in Word.
            </li>
            <li>
              <strong>Reuse in Google Docs or Notion</strong>: open the .docx in Google Docs to
              keep the headings and tables, or use the{' '}
              <GuideLink href="/tools/latex-to-markdown">LaTeX to Markdown converter</GuideLink>{' '}
              for Notion, Obsidian and README files.
            </li>
          </GuideUl>

          <GuideH2 id="pandoc">When to use Pandoc instead</GuideH2>
          <GuideP>
            For a math-heavy paper where every equation must stay editable in Word, Pandoc is
            still the gold standard: it converts LaTeX math to native Word (OMML) equations and
            can resolve a BibTeX bibliography with <GuideCode>--citeproc</GuideCode>. Install
            it and run:
          </GuideP>
          <GuidePre>{`pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib`}</GuidePre>
          <GuideP>
            Pandoc needs a local install and struggles with custom macros, packages and
            complex floats, which is where this converter&apos;s AI first pass is more
            forgiving. Many authors use both: this tool for the text, Pandoc or the{' '}
            <GuideLink href="/tools/latex-to-png">LaTeX to PNG converter</GuideLink> for the
            equations that matter.
          </GuideP>

          <GuideH2 id="faq">Frequently asked questions</GuideH2>
          <GuideFaq items={faq} />
        </article>
      </section>
    </div>
  );
}
