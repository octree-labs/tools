import Link from "next/link";
import { getFaqJsonLd, serializeJsonLd, type FaqJsonLdItem } from "@/lib/json-ld";

/**
 * English-only editorial content rendered below the word counter. It is a
 * server component (no hooks, no translations) so it is part of the static
 * HTML in every locale, like the template guides in lib/template-guides.
 */

const counted = [
  {
    title: "Text",
    body:
      "Words in paragraphs, lists and footnotes, including the text inside formatting commands such as \\textbf{...} and \\emph{...}. This is the main number most word limits refer to.",
  },
  {
    title: "Headers",
    body:
      "Words in \\section, \\subsection, \\chapter and similar headings, reported separately so you can include or exclude them.",
  },
  {
    title: "Captions",
    body: "Words in figure and table captions written with \\caption{...}, also reported separately.",
  },
  {
    title: "Not counted",
    body:
      "Commands and their options, labels, references and citation keys (\\label, \\ref, \\cite), comments after %, and math: inline $...$ and displayed equations are formulas, not words, so an equation never inflates the total.",
  },
];

const steps = [
  {
    title: "Paste your LaTeX source",
    body:
      "Paste the whole .tex file, preamble included, or just the section you want to measure into the editor.",
  },
  {
    title: "Let it count",
    body:
      "The count updates automatically as you type. Your source is run through texcount, the counter that ships with TeX Live and that Overleaf uses, so commands and markup are stripped correctly.",
  },
  {
    title: "Read the breakdown",
    body:
      "See the total word count plus separate numbers for body text, headers and captions, and use the one your journal, course or thesis office asks for.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I get a word count for a LaTeX document?",
    answer:
      "Paste your .tex source into the LaTeX word counter above and the count appears straight away, with separate totals for body text, headers and captions. Offline, run texcount on the file from the command line: texcount -inc -total main.tex.",
  },
  {
    question: "Does the LaTeX word count include equations?",
    answer:
      "No. Inline math such as $E = mc^2$ and displayed equations are treated as formulas rather than words, so they are not added to the word count.",
  },
  {
    question: "How does this compare to texcount and Overleaf's word count?",
    answer:
      "It runs texcount, the Perl script shipped with TeX Live and MiKTeX, so the numbers match texcount -total on your machine; Overleaf's word count is also built on texcount, so totals should agree closely. The difference is that you do not need a local TeX installation or an account.",
  },
  {
    question: "Are the bibliography and comments included in the word count?",
    answer:
      "No. Comments after % are ignored, and texcount skips the bibliography by default, so references from \\bibliography or a thebibliography environment are not counted. Citation keys inside \\cite{...} are not counted as words either.",
  },
];

export default function LatexWordCounterSeoContent() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 pb-20 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">LaTeX Word Count Online</h2>
        <p className="mb-6">
          Counting words in LaTeX is harder than in a word processor: a raw word count of a .tex
          file also counts commands like <code>\begin&#123;itemize&#125;</code>, labels and
          equations. This free LaTeX word counter reads the source the way a TeX-aware tool
          should, ignoring markup and math, and gives you a word count of the text a reader
          actually sees.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">What is counted</h2>
        <ul className="list-disc pl-6 space-y-3 mb-12">
          {counted.map((item) => (
            <li key={item.title}>
              <span className="font-medium text-gray-900">{item.title}.</span> {item.body}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How to count words in LaTeX
        </h2>
        <ol className="list-decimal pl-6 space-y-3 mb-12">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="font-medium text-gray-900">{step.title}.</span> {step.body}
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">LaTeX word count FAQ</h2>
        <dl className="space-y-6 mb-10">
          {faq.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="text-sm text-gray-600">
          Need the document in another format? Try the{" "}
          <Link href="/tools/latex-to-word" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            LaTeX to Word converter
          </Link>{" "}
          if your submission needs a .docx, or browse the{" "}
          <Link href="/symbols" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            LaTeX symbol reference
          </Link>
          .
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(getFaqJsonLd(faq)) }}
        />
      </div>
    </section>
  );
}
