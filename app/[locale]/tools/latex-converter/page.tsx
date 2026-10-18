import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowLeftRight, ArrowRight } from 'lucide-react';
import { generateAlternates, withDefaultOgImage } from '@/lib/seo';
import { OctreeCTA } from '@/components/OctreeCTA';
import {
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideP,
  GuideTable,
  type GuideFaqItem,
} from '@/lib/template-guides/ui';

const TITLE = 'LaTeX Converter: Convert To and From LaTeX Online';
const DESCRIPTION =
  'Free online LaTeX converter hub. Convert Markdown, HTML, MathML, Mermaid, tables, PDFs, images and equations to LaTeX, or convert LaTeX to Markdown, PNG, Word and PDF. No sign-up.';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const alternates = generateAlternates('/tools/latex-converter', locale);
  return withDefaultOgImage({
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
      'latex converter',
      'latex converter online',
      'convert to latex',
      'convert from latex',
      'latex convert',
      'online latex converter',
      'tex converter',
      'convert latex',
      'latex file converter',
      'latex format converter',
    ],
    alternates,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: `https://tools.useoctree.com${alternates.canonical}`,
      siteName: 'Octree LaTeX Tools',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLE,
      description: DESCRIPTION,
    },
  });
}

interface Converter {
  name: string;
  href: string;
  input: string;
  output: string;
  ai: boolean;
  bestFor: string;
  description: string;
}

const toLatex: Converter[] = [
  {
    name: 'Markdown to LaTeX',
    href: '/tools/markdown-to-latex',
    input: 'Markdown (.md)',
    output: 'LaTeX document',
    ai: true,
    bestFor: 'Notes, READMEs and blog drafts headed for a paper or thesis',
    description:
      'Turns headings, lists, emphasis, links, code blocks, tables and $math$ from Markdown into a compilable LaTeX document with the right packages in the preamble. Ideal when you draft in Obsidian, Notion or a README and need to hand in a typeset PDF.',
  },
  {
    name: 'HTML to LaTeX',
    href: '/tools/html-to-latex',
    input: 'HTML markup',
    output: 'LaTeX',
    ai: true,
    bestFor: 'Web pages, CMS exports and documentation sites',
    description:
      'Maps HTML headings, paragraphs, lists, tables, links and inline formatting onto LaTeX equivalents, keeping the document structure while dropping scripts, styles and navigation chrome.',
  },
  {
    name: 'MathML to LaTeX',
    href: '/tools/mathml-to-latex',
    input: 'MathML (Presentation)',
    output: 'LaTeX math',
    ai: true,
    bestFor: 'Equations exported from Word, MathType, Maple or browsers',
    description:
      'Converts MathML trees (mrow, mfrac, msup, msqrt, mtable and friends) into clean amsmath syntax so formulas from Word or the web can be reused in LaTeX papers.',
  },
  {
    name: 'Mermaid to LaTeX',
    href: '/tools/mermaid-to-latex',
    input: 'Mermaid diagram code',
    output: 'TikZ / LaTeX',
    ai: true,
    bestFor: 'Flowcharts and sequence diagrams from Markdown docs',
    description:
      'Rewrites Mermaid flowcharts, graphs and sequence diagrams as TikZ pictures that compile inside a LaTeX document, including node shapes, labels and arrows.',
  },
  {
    name: 'Table to LaTeX',
    href: '/tools/table-to-latex',
    input: 'CSV, JSON, Excel',
    output: 'LaTeX tabular',
    ai: false,
    bestFor: 'Data tables, results tables and spreadsheets',
    description:
      'Upload a CSV, JSON or Excel file and get a booktabs-styled tabular environment with proper column alignment and escaped special characters, ready to paste into a table float.',
  },
  {
    name: 'PDF to LaTeX',
    href: '/tools/pdf-to-latex',
    input: 'PDF file',
    output: 'LaTeX source',
    ai: true,
    bestFor: 'Recovering editable source from a typeset paper',
    description:
      'Extracts the text, structure and equations of a PDF and reconstructs LaTeX source you can edit. Best on papers and reports that were themselves typeset with LaTeX.',
  },
  {
    name: 'Image to LaTeX',
    href: '/tools/math-to-latex',
    input: 'Image or photo of math',
    output: 'LaTeX math',
    ai: true,
    bestFor: 'Handwritten notes, whiteboards and textbook screenshots',
    description:
      'Recognises printed or handwritten equations in an image and returns the LaTeX, with a live rendered preview so you can check every symbol before copying.',
  },
  {
    name: 'Equation to LaTeX',
    href: '/tools/equation-to-latex',
    input: 'Plain-text description or image',
    output: 'LaTeX math',
    ai: true,
    bestFor: 'Writing formulas you can describe but not type',
    description:
      'Describe an equation in words ("the quadratic formula", "a 3 by 3 identity matrix") or upload a picture of it and get correct amsmath code back.',
  },
  {
    name: 'Image to TikZ',
    href: '/tools/image-to-tikz',
    input: 'Diagram image',
    output: 'TikZ code',
    ai: true,
    bestFor: 'Redrawing sketches and figures as vector graphics',
    description:
      'Turns a drawing, sketch or screenshot of a diagram into editable TikZ code so figures stay sharp, match your document font and can be tweaked in source.',
  },
  {
    name: 'arXiv to LaTeX',
    href: '/tools/arxiv-to-latex',
    input: 'arXiv paper ID or URL',
    output: 'LaTeX project',
    ai: false,
    bestFor: 'Studying or building on a published preprint',
    description:
      'Pulls the LaTeX source of an arXiv submission into an editable project so you can read the real source, reuse macros and figures, or start a follow-up paper from it.',
  },
];

const fromLatex: Converter[] = [
  {
    name: 'LaTeX to Markdown',
    href: '/tools/latex-to-markdown',
    input: 'LaTeX document or snippet',
    output: 'Markdown (.md)',
    ai: true,
    bestFor: 'README files, Notion, Obsidian, GitHub and blogs',
    description:
      'Converts sections, lists, tables, emphasis, code and links to Markdown while keeping math as $...$ and $$...$$ so it still renders with MathJax or KaTeX.',
  },
  {
    name: 'LaTeX to PNG',
    href: '/tools/latex-to-png',
    input: 'LaTeX equation or document',
    output: 'PNG image',
    ai: false,
    bestFor: 'Slides, Word, Google Docs, Notion and web pages',
    description:
      'Compiles your LaTeX with a full TeX Live and renders the first page to a PNG at 1x, 2x or 4x resolution, optionally with a transparent background, then lets you download it or copy it to the clipboard.',
  },
  {
    name: 'LaTeX to Word',
    href: '/tools/latex-to-word',
    input: 'LaTeX document',
    output: 'Word (.docx)',
    ai: true,
    bestFor: 'Journal submissions, track-changes reviews, editable hand-ins',
    description:
      'Produces a native .docx with real heading styles, bulleted and numbered lists, tables and formatting. Math is written as readable Unicode text; use Pandoc when you need native Word equations.',
  },
  {
    name: 'LaTeX to PDF',
    href: '/tools/latex-preview',
    input: 'LaTeX document',
    output: 'PDF',
    ai: false,
    bestFor: 'Compiling and checking a document without installing TeX',
    description:
      'An online LaTeX editor with live compilation: type on the left, see the PDF on the right, and export it. Full TeX Live, so packages like TikZ, biblatex and beamer just work.',
  },
];

const faq: GuideFaqItem[] = [
  {
    question: 'What is a LaTeX converter?',
    answer:
      'A LaTeX converter is a tool that translates between LaTeX source and another format. Converters to LaTeX take Markdown, HTML, MathML, Mermaid, spreadsheets, PDFs or images and produce .tex code; converters from LaTeX take .tex source and produce Markdown, PNG images, Word documents or PDFs. This page collects all of Octree’s free converters in both directions.',
  },
  {
    question: 'Which converters use AI and which are deterministic?',
    answer:
      'Structure-heavy conversions (Markdown, HTML, MathML, Mermaid, PDF, images, equations and LaTeX to Markdown or Word) use an AI model because the mapping is ambiguous and needs judgement. Table to LaTeX, arXiv to LaTeX, LaTeX to PNG and LaTeX to PDF are deterministic: they parse or compile your input exactly and give the same output every time.',
  },
  {
    question: 'How do I convert LaTeX to Word or PDF for free?',
    answer:
      'For Word, open the LaTeX to Word converter, paste your document and download document.docx. For PDF, open the LaTeX preview, paste your document and export the compiled PDF. Both run on a full TeX Live installation on our servers and require no account.',
  },
  {
    question: 'Can I convert a whole paper with figures and a bibliography?',
    answer:
      'Text, sections, lists, tables and equations convert well in every direction. Figures are the main limitation: image files are not uploaded with the source, so converters keep the caption and reference. For bibliographies, LaTeX to Word keeps citation keys and a References list; for full BibTeX resolution, use the Citation Generator to create entries and compile in the LaTeX preview.',
  },
  {
    question: 'Is there a limit on document size?',
    answer:
      'Each converter accepts a typical paper, chapter or long README. The AI-powered converters cap input around 60,000 characters per request; split a thesis by chapter if it is larger. The compile-based tools (PNG and PDF) accept any document that compiles within the server time limit.',
  },
];

function ConverterCard({ converter }: { converter: Converter }) {
  return (
    <Link
      href={converter.href}
      className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
    >
      <h3 className="text-base font-semibold text-gray-900 mb-1">{converter.name}</h3>
      <p className="text-xs font-medium text-gray-500 mb-3">
        {converter.input} <span aria-hidden="true">→</span> {converter.output}
        {converter.ai && (
          <span className="ml-2 inline-flex items-center rounded bg-blue-50 px-1.5 py-0.5 text-[11px] font-medium text-blue-700 border border-blue-200">
            AI
          </span>
        )}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed flex-grow">{converter.description}</p>
      <span className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium w-fit">
        Open converter
        <ArrowRight className="ml-1 size-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export default function LatexConverterPage() {
  const allConverters = [...toLatex, ...fromLatex];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12">
          <div className="relative flex items-start justify-center mb-3">
            <Link
              href="/"
              className="absolute left-0 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back to Tools</span>
            </Link>
            <h1 className="text-4xl font-light text-gray-900 text-center">
              LaTeX Converter: Convert To and From LaTeX
            </h1>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Every free online LaTeX converter in one place. Convert Markdown, HTML, MathML,
            Mermaid, tables, PDFs and images <em>to</em> LaTeX, or convert LaTeX <em>to</em>{' '}
            Markdown, PNG, Word and PDF. No account, no install.
          </p>
        </div>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-900 border border-orange-200">
              TO LATEX
            </span>
            <h2 className="text-2xl font-medium text-gray-900">Convert to LaTeX</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toLatex.map((c) => (
              <ConverterCard key={c.href} converter={c} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-md bg-green-50 px-3 py-1.5 text-sm font-medium text-green-900 border border-green-200">
              FROM LATEX
            </span>
            <h2 className="text-2xl font-medium text-gray-900">Convert from LaTeX</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fromLatex.map((c) => (
              <ConverterCard key={c.href} converter={c} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl">
          <article>
            <GuideH2 id="comparison">
              <span className="inline-flex items-center gap-2">
                <ArrowLeftRight className="h-5 w-5 text-gray-500" />
                Compare the LaTeX converters
              </span>
            </GuideH2>
            <GuideTable
              headers={['Converter', 'Input', 'Output', 'AI-powered?', 'Best for']}
              rows={allConverters.map((c) => [
                <GuideLink key={c.href} href={c.href}>
                  {c.name}
                </GuideLink>,
                c.input,
                c.output,
                c.ai ? 'Yes' : 'No (deterministic)',
                c.bestFor,
              ])}
            />

            <GuideH2 id="choosing">Choosing the right converter</GuideH2>
            <GuideP>
              Start from what you have. If it is text with structure (a Markdown file, a web
              page, a Word export), use the matching <strong>to LaTeX</strong> converter and
              then open the result in the{' '}
              <GuideLink href="/tools/latex-preview">LaTeX preview</GuideLink> to compile it. If
              it is a picture of math, a sketch or a PDF, the image, PDF and equation converters
              reconstruct source you can edit. If you already have LaTeX and someone else needs
              another format, pick by destination: <strong>Markdown</strong> for wikis and
              GitHub, <strong>Word</strong> for reviewers and submission portals,{' '}
              <strong>PNG</strong> for slides and documents that cannot typeset math, and{' '}
              <strong>PDF</strong> for the final, typeset output.
            </GuideP>
            <GuideP>
              The AI-powered converters trade exactness for flexibility: they handle custom
              macros, unusual packages and messy input, but you should proofread the output.
              The deterministic converters (tables, arXiv, PNG, PDF) never invent content and
              are the right choice when the input is already well-formed. Need something not
              listed here, such as a TikZ diagram from a description or a BibTeX entry from a
              DOI? See the <GuideLink href="/">full list of LaTeX tools</GuideLink>.
            </GuideP>

            <GuideH2 id="faq">Frequently asked questions</GuideH2>
            <GuideFaq items={faq} />
          </article>
        </section>

        <div className="mt-16">
          <OctreeCTA source="tools:latex-converter" />
        </div>
      </div>
    </div>
  );
}
