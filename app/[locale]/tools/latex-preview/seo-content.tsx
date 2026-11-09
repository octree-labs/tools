import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { FaqJsonLdItem } from "@/lib/json-ld";
import { LocalizedToolSeoContent } from "@/lib/tool-seo";

const steps = [
  {
    title: "Write or paste a full document",
    body: (
      <>
        Replace the example with your own LaTeX, from <Cmd>\documentclass</Cmd> to{" "}
        <Cmd>\end{"{document}"}</Cmd>. The editor highlights LaTeX syntax and completes common
        commands.
      </>
    ),
  },
  {
    title: "Watch the PDF update",
    body: "The preview recompiles about a second after you stop typing. If compilation fails, a dialog shows the error message and the log.",
  },
  {
    title: "Keep the result",
    body: "Click Open in Octree to save the document as a project, add images and .bib files, or ask the AI to edit it.",
  },
];

const tips = [
  {
    title: "File `name.sty' not found",
    body: (
      <>
        A package in <Cmd>\usepackage</Cmd> is misspelled or is not part of TeX Live. Check the
        name; every package on CTAN that ships with TeX Live is installed.
      </>
    ),
  },
  {
    title: "Missing $ inserted",
    body: (
      <>
        A math-only command such as <Cmd>^</Cmd>, <Cmd>_</Cmd> or <Cmd>\alpha</Cmd> appears
        outside math mode. Wrap it in <Cmd>$...$</Cmd>, or escape a literal underscore as{" "}
        <Cmd>\_</Cmd>.
      </>
    ),
  },
  {
    title: "Undefined control sequence",
    body: (
      <>
        A command is misspelled or its package is not loaded, for example <Cmd>\mathbb</Cmd>{" "}
        without <Cmd>amssymb</Cmd>. The log names the line.
      </>
    ),
  },
  {
    title: "Not sure what is wrong",
    body: "Click Fix this error with AI in Octree in the error dialog. Octree opens the document with the error log attached, so its AI edit knows exactly what to fix.",
  },
];

const faq: FaqJsonLdItem[] = [
  {
    question: "Can I edit LaTeX online without installing anything?",
    answer:
      "Yes. Type or paste LaTeX into the editor on this page and the PDF appears next to it. Compilation runs on a full TeX Live installation on Octree's servers, so you do not need a local TeX distribution.",
  },
  {
    question: "Is this LaTeX viewer free, and do I need an account?",
    answer:
      "It is free and needs no account. Nothing is saved on this page, so copy your code before you leave, or open it in Octree with a free account to keep it as a project.",
  },
  {
    question: "Which LaTeX compiler does the online preview use?",
    answer:
      "pdfLaTeX by default. The compile service switches to XeLaTeX when the document loads fontspec, polyglossia, unicode-math or xeCJK, and to LuaLaTeX when it uses \\directlua or luacode.",
  },
  {
    question: "Can I upload images or a .bib bibliography?",
    answer:
      "Not on this page: it compiles a single main.tex file. A thebibliography environment works, but graphics files and .bib files need the Octree editor, which supports multi-file projects.",
  },
  {
    question: "Why does a package like minted fail to compile?",
    answer:
      "minted and other packages that need shell escape (\\write18) are disabled for security. Use the listings package or verbatim for code instead.",
  },
];

export default function LatexPreviewSeoContent({ locale }: { locale?: string }) {
  return (
    <LocalizedToolSeoContent
      slug="latex-preview"
      locale={locale}
      heading="Edit LaTeX online: free LaTeX compiler and PDF viewer"
      intro={
        <>
          <p>
            This page is an online LaTeX editor, compiler and viewer in one. Write a document on
            the left and the compiled PDF appears on the right. Documents compile with a full TeX
            Live distribution on the Octree compile service, so amsmath, TikZ, pgfplots, beamer,
            geometry, hyperref and the rest of TeX Live work without installing anything.
          </p>
          <p>
            pdfLaTeX is the default engine; the service switches to XeLaTeX for fontspec and
            system fonts, and to LuaLaTeX for Lua code. No account is needed. The editor holds
            one file, so images, .bib files and multi-file projects belong in the Octree editor,
            where a free account also saves your work. Shell escape is off, so minted is not
            available.
          </p>
        </>
      }
      stepsHeading="How to use the online LaTeX editor"
      steps={steps}
      tipsHeading="Common LaTeX errors and how to fix them"
      tips={tips}
      faqHeading="LaTeX online editor FAQ"
      faq={faq}
      related={
        <>
          New to LaTeX? Start with the{" "}
          <IntroLink href="https://www.useoctree.com/learn/latex" external>
            introduction to LaTeX
          </IntroLink>
          , browse ready-made{" "}
          <IntroLink href="/templates">LaTeX templates</IntroLink>, or describe a document and let
          the <IntroLink href="/tools/ai-latex-generator">AI LaTeX generator</IntroLink> write it.
        </>
      }
    />
  );
}
