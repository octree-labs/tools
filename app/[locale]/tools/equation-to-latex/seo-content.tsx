import Link from "next/link";
import { getFaqJsonLd, serializeJsonLd, type FaqJsonLdItem } from "@/lib/json-ld";

/**
 * English-only editorial content rendered below the converter. It is a server
 * component (no hooks, no translations) so it is part of the static HTML in
 * every locale, like the template guides in lib/template-guides.
 */

const steps = [
  {
    title: "Enter or upload your equation",
    body:
      "Type the equation in plain language (\"integral of x squared from 0 to 1\"), paste it in any notation, or drop in an image: a screenshot of a textbook formula, a photo of a whiteboard, or a handwritten equation from your iPad or phone.",
  },
  {
    title: "Convert to LaTeX",
    body:
      "Click Convert. The AI reads the equation, recognises fractions, roots, sums, integrals, matrices and Greek letters, and writes standard LaTeX using amsmath, so the output compiles in Overleaf, Octree or any TeX distribution.",
  },
  {
    title: "Check the preview and copy the code",
    body:
      "The rendered equation appears next to the code so you can confirm every symbol. Copy the LaTeX, download it as a .tex file or PDF, or open it in Octree to keep editing.",
  },
];

const useCases = [
  {
    title: "Homework and problem sets",
    body: "Turn a handwritten solution into a typed submission without learning every LaTeX command first.",
  },
  {
    title: "Research papers and theses",
    body: "Move equations from notes, slides or older PDFs into your manuscript as clean, editable LaTeX.",
  },
  {
    title: "Lecture notes",
    body: "Photograph the board or your notebook after class and convert each formula into LaTeX for your notes.",
  },
  {
    title: "Screenshots of textbook formulas",
    body: "Upload a crop of a textbook or journal page and get the LaTeX behind the formula instead of retyping it.",
  },
  {
    title: "Handwriting on iPad or tablet",
    body: "Export your handwritten equations from GoodNotes, Notability or OneNote as images and convert them in one step.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I convert an equation to LaTeX?",
    answer:
      "Type the equation in plain text or math notation, or upload an image of it, then click Convert to LaTeX. The converter returns LaTeX code that uses amsmath and shows a rendered preview so you can check it before copying it into your document.",
  },
  {
    question: "Can it convert a handwritten equation to LaTeX?",
    answer:
      "Yes. Upload a photo or scan of a handwritten equation as JPEG, PNG, GIF or WebP, including handwriting exported from an iPad or tablet app. Clear, high-contrast images with one equation per picture give the most accurate LaTeX.",
  },
  {
    question: "Is the equation to LaTeX converter free?",
    answer:
      "Yes. The converter is free to use and does not require an account. You can copy the LaTeX, download a .tex file or a compiled PDF, or open the result in the Octree editor.",
  },
  {
    question: "Which LaTeX packages does the output need?",
    answer:
      "The generated code uses standard math notation that compiles with the amsmath, amssymb and amsfonts packages. If you download the .tex file, the preamble already includes them, and the output works in Overleaf and every common TeX distribution.",
  },
];

export default function EquationToLatexSeoContent() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 pb-20 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          How the equation to LaTeX converter works
        </h2>
        <p className="mb-6">
          Convert any math equation to LaTeX in three steps. The tool accepts typed equations,
          screenshots and handwritten equations, and produces LaTeX you can paste straight into
          a paper, homework or set of notes.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-12">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="font-medium text-gray-900">{step.title}.</span> {step.body}
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          What people use it for
        </h2>
        <ul className="list-disc pl-6 space-y-3 mb-12">
          {useCases.map((item) => (
            <li key={item.title}>
              <span className="font-medium text-gray-900">{item.title}.</span> {item.body}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Equation to LaTeX FAQ
        </h2>
        <dl className="space-y-6 mb-10">
          {faq.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold text-gray-900 mb-1">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="text-sm text-gray-600">
          Looking for the commands behind the output? Browse the{" "}
          <Link href="/symbols" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            LaTeX symbol reference
          </Link>{" "}
          or try the{" "}
          <Link href="/tools/math-to-latex" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
            math to LaTeX converter
          </Link>{" "}
          for plain-text math notation.
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(getFaqJsonLd(faq)) }}
        />
      </div>
    </section>
  );
}
