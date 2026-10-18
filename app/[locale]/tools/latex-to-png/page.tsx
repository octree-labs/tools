import LatexToPngTool from './LatexToPngTool';
import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideUl,
  type GuideFaqItem,
} from '@/lib/template-guides/ui';

const faq: GuideFaqItem[] = [
  {
    question: 'How do I convert a LaTeX equation to a PNG image?',
    answer:
      'Paste your equation inside a standalone document (the default example uses \\documentclass[preview,border=4pt]{standalone}), choose a resolution and click Convert to PNG. The LaTeX is compiled to PDF on our server, the first page is rendered in your browser and you can download the PNG or copy it straight to the clipboard.',
  },
  {
    question: 'Can I get a LaTeX PNG with a transparent background?',
    answer:
      'Yes. Keep the "Transparent background" option on. Because the standalone class does not paint a page colour, every pixel outside the formula stays transparent, so the image sits cleanly on dark slides, coloured backgrounds and web pages. Untick it for an opaque white background.',
  },
  {
    question: 'What resolution should I pick for slides or print?',
    answer:
      '1x (96 DPI) is fine for a quick preview or chat message. Use 2x (192 DPI) for Google Slides, PowerPoint, Word, Google Docs and Notion, where the image is displayed at roughly its natural size on high-DPI screens. Use 4x (384 DPI) when the image will be printed or scaled up.',
  },
  {
    question: 'Does it work with a full LaTeX document, not just an equation?',
    answer:
      'Yes. Any document that compiles with pdflatex works, including article, beamer or TikZ pictures. Only the first page is rendered to PNG; for multi-page documents, use the LaTeX preview tool to compile and download the full PDF.',
  },
];

export default function LatexToPngPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LatexToPngTool />

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <article>
          <GuideH2 id="how-it-works">How the LaTeX to PNG converter works</GuideH2>
          <GuideP>
            This tool turns LaTeX source into a PNG image in three steps. First, your code is
            compiled with a full TeX Live installation on our compile server, the same one that
            powers the{' '}
            <GuideLink href="/tools/latex-preview">online LaTeX editor</GuideLink>, so every
            package you would use locally is available. Second, the resulting PDF is sent back
            to your browser and its first page is rasterised with pdf.js at the DPI you picked.
            Third, the pixels are written to a PNG that you can download or copy to the
            clipboard. Nothing is stored on the server once the compile finishes.
          </GuideP>
          <GuideP>
            For single formulas, the <GuideCode>standalone</GuideCode> class with the{' '}
            <GuideCode>preview</GuideCode> option crops the page to the equation&apos;s bounding
            box (use inline <GuideCode>$\displaystyle ...$</GuideCode> rather than{' '}
            <GuideCode>\[ ... \]</GuideCode>, which spans the full line width), and{' '}
            <GuideCode>border=4pt</GuideCode> adds a little breathing room:
          </GuideP>
          <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
\\[ \\hat{H}\\psi = E\\psi \\]
\\end{document}`}</GuidePre>
          <GuideP>
            Any complete document compiles too, from an <GuideCode>article</GuideCode> page to
            a <GuideCode>tikzpicture</GuideCode> wrapped in <GuideCode>standalone</GuideCode>.
            If compilation fails you will see the error message and can open the full log to
            find the offending line.
          </GuideP>

          <GuideH2 id="use-cases">Where to use a LaTeX PNG</GuideH2>
          <GuideUl>
            <li>
              <strong>Slides.</strong> PowerPoint, Keynote and Google Slides have weak equation
              editors. Render the formula at 2x with a transparent background and drop it onto
              any slide theme; it stays crisp when projected.
            </li>
            <li>
              <strong>Word and Google Docs.</strong> When a co-author or journal insists on a
              Word file, paste equation images where the native editor cannot reproduce the
              typesetting. For the text itself, try the{' '}
              <GuideLink href="/tools/latex-to-word">LaTeX to Word converter</GuideLink>.
            </li>
            <li>
              <strong>Web pages and README files.</strong> GitHub, blogs and forums without
              MathJax can still show a formula as an image. Use 2x so it looks sharp on retina
              screens.
            </li>
            <li>
              <strong>Notion, Slack and email.</strong> Copy to clipboard and paste directly
              into the editor, no file juggling required.
            </li>
          </GuideUl>

          <GuideH2 id="tips">Tips for better images</GuideH2>
          <GuideOl>
            <li>
              Increase the <GuideCode>border</GuideCode> value if the formula touches the image
              edge, or use <GuideCode>varwidth</GuideCode> for multi-line content.
            </li>
            <li>
              Pick a text colour with <GuideCode>\color{'{white}'}</GuideCode> from the{' '}
              <GuideCode>xcolor</GuideCode> package when the PNG is meant for a dark slide.
            </li>
            <li>
              Use <GuideCode>\usepackage{'{lmodern}'}</GuideCode> for smoother glyphs at low
              resolutions.
            </li>
            <li>
              Need the image as a vector instead? The{' '}
              <GuideLink href="/tools/latex-preview">LaTeX preview</GuideLink> exports the PDF,
              which Illustrator, Inkscape and Keynote accept directly.
            </li>
          </GuideOl>

          <GuideH2 id="faq">Frequently asked questions</GuideH2>
          <GuideFaq items={faq} />
        </article>
      </section>
    </div>
  );
}
