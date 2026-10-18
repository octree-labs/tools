import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "Is this the official AAAI 2027 template?",
    answer:
      "No. AAAI requires the style file from its author kit (aaai27.sty for AAAI-27, with aaai27.bst for BibTeX), which is distributed from aaai.org and is not on TeX Live. This template reproduces the AAAI format with the standard article class so you can draft immediately, and its body is written so that dropping in the official preamble is a one-block replacement. Always compile with the official kit before you submit.",
  },
  {
    question: "What is the AAAI paper format?",
    answer:
      "US letter paper, two columns of 3.3 in with a 0.375 in gutter, 10 pt Times body text, a bold 14 pt centred title, author names with superscript affiliation markers and affiliations below, a bold centred Abstract heading with the abstract indented in the first column, unnumbered bold section headings (centred for sections, left-aligned for subsections), no page numbers, and author-year citations such as (Smith 2020) with an alphabetical reference list.",
  },
  {
    question: "How do I anonymise the paper for review?",
    answer:
      "With the official kit, \\usepackage[submission]{aaai27} prints the anonymous author block for you. In this template, replace the three author lines in the title block with 'Anonymous submission', delete the emails and affiliations, and remove the Acknowledgments section. Do not cite your own prior work in a way that reveals authorship.",
  },
  {
    question: "What is the AAAI page limit?",
    answer:
      "Recent AAAI main-track calls allow seven pages of content plus unlimited pages for references, with an optional technical appendix as supplementary material. Check the AAAI-27 call for papers, as limits and the appendix policy change between editions.",
  },
  {
    question: "Can I use natbib and BibTeX?",
    answer:
      "With the official kit, yes: aaai27.sty loads natbib and the kit ships aaai27.bst, so \\citep and \\citet work and \\bibliographystyle{aaai27} formats the list. This standalone version avoids natbib so it compiles without a .bst file; \\bibitem[Label]{key} entries make \\cite print the author-year label in parentheses.",
  },
];

export default function Aaai2027Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this AAAI 2027 template?</GuideH2>
      <GuideP>
        This is a LaTeX paper skeleton in the AAAI 2027 author-kit format. AAAI
        papers must be built with <GuideCode>aaai27.sty</GuideCode> from the official
        author kit, a file that is distributed only from aaai.org and is not part of
        TeX Live, so this template reproduces the AAAI layout with the standard{" "}
        <GuideCode>article</GuideCode> class and common packages: US letter, two
        columns with the 0.375 in AAAI gutter, 0.75 in side margins, Times 10 pt,
        bold 14 pt centred title, author names with superscript affiliation markers,
        a bold centred Abstract heading with an indented abstract that stays in the
        first column, unnumbered centred section headings, left-aligned subsections,
        run-in sub-subsections, no page numbers, and author-year citations with an
        AAAI-style reference list.
      </GuideP>
      <GuideP>
        The sample paper is a complete short AI paper, so the skeleton shows every
        element you will need: an itemised contribution list, Related Work with
        subsections, a formal definition and theorem written as run-in headings, an
        equation, a <GuideCode>booktabs</GuideCode> table, a TikZ figure placeholder,
        Experiments with Setup/Results/User study, Conclusion, Acknowledgments and
        four references in AAAI form.
      </GuideP>

      <GuideH2 id="official">Switching to the official aaai27.sty</GuideH2>
      <GuideOl>
        <li>
          Download the AAAI-27 author kit from aaai.org (linked from the conference
          submission instructions) and place <GuideCode>aaai27.sty</GuideCode> and{" "}
          <GuideCode>aaai27.bst</GuideCode> next to your file.
        </li>
        <li>
          Replace everything between the <GuideCode>EMULATION (begin)</GuideCode> and{" "}
          <GuideCode>EMULATION (end)</GuideCode> markers in the preamble with the kit
          preamble, which is essentially:
        </li>
      </GuideOl>
      <GuidePre>{`\\documentclass[letterpaper]{article}
\\usepackage[submission]{aaai27}   % [submission] for review, no option for camera-ready
\\usepackage{times}
\\usepackage{helvet}
\\usepackage{courier}
\\usepackage[hyphens]{url}
\\usepackage{graphicx}
\\urlstyle{rm}
\\def\\UrlFont{\\rm}
\\usepackage{natbib}
\\usepackage{caption}
\\frenchspacing
\\setlength{\\pdfpagewidth}{8.5in}
\\setlength{\\pdfpageheight}{11in}`}</GuidePre>
      <GuideOl>
        <li value={3}>
          Replace the <GuideCode>\twocolumn[...]</GuideCode> title block with the
          kit&apos;s <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> and{" "}
          <GuideCode>\affiliations</GuideCode> commands followed by{" "}
          <GuideCode>\maketitle</GuideCode>.
        </li>
        <li>
          Replace <GuideCode>\cite</GuideCode> with <GuideCode>\citep</GuideCode> or{" "}
          <GuideCode>\citet</GuideCode>, delete the hand-written bibliography and use{" "}
          <GuideCode>\bibliographystyle{"{aaai27}"}</GuideCode> with{" "}
          <GuideCode>\bibliography{"{refs}"}</GuideCode>.
        </li>
        <li>
          Compile, then run the kit&apos;s checklist: no <GuideCode>hyperref</GuideCode>{" "}
          links, Type 1 fonts embedded, no page numbers, and the PDF metadata the
          kit requires.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Walkthrough of the emulation</GuideH2>
      <GuideH3>Title block</GuideH3>
      <GuideP>
        The title, authors and affiliations are passed to{" "}
        <GuideCode>\twocolumn[...]</GuideCode> so they span both columns while the
        abstract begins in the first column, which is how the AAAI kit lays out the
        first page. Affiliation markers use{" "}
        <GuideCode>\textsuperscript{"{\\rm 1}"}</GuideCode>; the upright{" "}
        <GuideCode>\rm</GuideCode> matches the kit.
      </GuideP>
      <GuideH3>Headings</GuideH3>
      <GuideP>
        <GuideCode>titlesec</GuideCode> sets sections as centred bold 12 pt,
        subsections as bold 11 pt and sub-subsections as run-in bold with a full
        stop, and <GuideCode>\setcounter{"{secnumdepth}{0}"}</GuideCode> removes the
        numbers, exactly like AAAI.
      </GuideP>
      <GuideH3>Citations</GuideH3>
      <GuideP>
        A two-line <GuideCode>\makeatletter</GuideCode> patch makes{" "}
        <GuideCode>\cite</GuideCode> print its label in parentheses, so{" "}
        <GuideCode>\bibitem[Wachter, Mittelstadt, and Russell 2017]{"{wachter2017}"}</GuideCode>{" "}
        yields &quot;(Wachter, Mittelstadt, and Russell 2017)&quot;. The reference
        entries follow AAAI style: surnames and initials separated by semicolons,
        the year after the authors, title in sentence case, venue in italics, pages
        last.
      </GuideP>

      <GuideH2 id="rules">AAAI formatting rules worth remembering</GuideH2>
      <GuideUl>
        <li>Do not change margins, column widths, fonts or font sizes.</li>
        <li>
          No page numbers, no headers or footers, no <GuideCode>hyperref</GuideCode>{" "}
          with coloured links.
        </li>
        <li>
          Figures and tables must fit inside a column or span both with{" "}
          <GuideCode>figure*</GuideCode>; captions go below both.
        </li>
        <li>
          Use US letter, not A4; the kit sets{" "}
          <GuideCode>\pdfpagewidth</GuideCode> and <GuideCode>\pdfpageheight</GuideCode>{" "}
          explicitly.
        </li>
        <li>All fonts must be Type 1 and embedded; the Times/Helvetica/Courier trio is.</li>
      </GuideUl>

      <GuideH2 id="errors">Common errors</GuideH2>
      <GuideUl>
        <li>
          <strong>Stretched lines around citations.</strong> Author-year labels cannot
          break across lines in narrow columns; rephrase so the citation ends a
          clause, or use <GuideCode>\sloppy</GuideCode> locally.
        </li>
        <li>
          <strong>Abstract spans both columns.</strong> Keep the abstract after the
          closing bracket of <GuideCode>\twocolumn[...]</GuideCode>, not inside it.
        </li>
        <li>
          <strong>&quot;File aaai27.sty not found&quot;.</strong> The kit is not
          installable with tlmgr; download it from aaai.org and put it in the project
          folder.
        </li>
        <li>
          <strong>Theorem environments.</strong> The sample writes Definition and
          Theorem as run-in headings; for real theorems add{" "}
          <GuideCode>amsthm</GuideCode> and <GuideCode>\newtheorem</GuideCode>.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile</GuideH2>
      <GuideP>
        In Octree, click <em>Open as template</em> and edit with the live preview.
        Locally, <GuideCode>pdflatex paper.tex</GuideCode> twice resolves the table and
        figure references; with the official kit and BibTeX use{" "}
        <GuideCode>latexmk -pdf</GuideCode>.
      </GuideP>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Venue", "Layout"]}
        rows={[
          [<strong key="a">AAAI 2027</strong>, "AAAI, IJCAI-style AI conferences", "Two columns, author-year citations"],
          [
            <GuideLink key="n" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "NeurIPS, ICLR",
            "Single column, numeric citations",
          ],
          [
            <GuideLink key="e" href="/templates/emnlp-2026">
              EMNLP 2026
            </GuideLink>,
            "ACL, EMNLP, NAACL",
            "Two columns, ACL style",
          ],
        ]}
      />
      <GuideP>
        AAAI usually closes submissions in August for a February conference; see the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
