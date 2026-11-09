import { IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Paste the arXiv ID or link",
    body: "Enter an ID such as 2401.12345, an old-style ID such as hep-th/9711200, or any arxiv.org/abs or arxiv.org/pdf link. Add a version (2401.12345v2) to get that exact revision; without one you get the latest.",
  },
  {
    title: "Browse the LaTeX source",
    body: "The tool downloads the paper's e-print from arXiv, unpacks it and shows every file. The main .tex file, the one with \\documentclass and \\begin{document}, opens in the viewer; click any other .tex, .bib or .sty file to read it.",
  },
  {
    title: "Download or edit it",
    body: "Download the arXiv source code as a .zip, or open the main file in Octree with its \\input and \\include files inlined. Upload the figures from the .zip to compile it with images.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "How do I download the LaTeX source of an arXiv paper?",
    answer:
      "Paste the paper's arXiv ID or URL into the tool on this page. It fetches the source the authors uploaded to arXiv, lists every file, shows the main .tex file and lets you download everything as a .zip. On arxiv.org itself, the same files are behind the TeX Source link on the paper's abstract page, packaged as a .tar.gz.",
  },
  {
    question: "Why does a paper say it has no LaTeX source?",
    answer:
      "Some authors submit only a PDF to arXiv, so there is no .tex file to download. For those papers, the PDF to LaTeX converter can recreate the text and math as editable LaTeX, though it does not recover the original source.",
  },
  {
    question: "Which file is the main .tex file?",
    answer:
      "arXiv sources often contain several .tex files. The tool picks the one arXiv's 00README marks as top level when there is one; otherwise the file with \\documentclass and \\begin{document} that is not \\input by another file. Sections pulled in with \\input or \\include appear as separate files in the tree.",
  },
  {
    question: "Can I reuse the LaTeX source of an arXiv paper?",
    answer:
      "The source is useful for reading how a paper was typeset, checking an equation, or borrowing a macro. Reusing text, figures or the whole paper depends on the license the authors chose on arXiv, shown on the abstract page; credit the authors either way.",
  },
];

export default function ArxivToLatexSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="arxiv-to-latex"
      locale={locale}
      heading="arXiv to LaTeX: Download Any Paper's Source"
      intro={
        <>
          <p>
            Most papers on arXiv were written in LaTeX, and arXiv keeps the source the authors
            uploaded: the .tex files, bibliography, style files and figures. This tool gets that
            arXiv LaTeX source for you. Paste an ID or link and you can browse the files, read the
            main .tex file and download the arXiv source code as a .zip, without unpacking a
            .tar.gz yourself.
          </p>
          <p>
            Downloads come straight from arXiv&apos;s e-print service and nothing is stored. Sources
            of up to 30 MB and 200 files are supported. Papers submitted only as a PDF have no TeX
            to download; the tool says so and points you to a converter instead.
          </p>
        </>
      }
      stepsHeading="How to download arXiv TeX source"
      steps={steps}
      faqHeading="arXiv LaTeX source FAQ"
      faq={faq}
      related={
        <>
          No source on arXiv? Try the{" "}
          <IntroLink href="/tools/pdf-to-latex">PDF to LaTeX converter</IntroLink>. Edit and compile
          the source in the <IntroLink href="/tools/latex-preview">online LaTeX editor</IntroLink>,
          or count its words with the{" "}
          <IntroLink href="/tools/latex-word-counter">LaTeX word counter</IntroLink>.
        </>
      }
    />
  );
}
