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
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "Does this CHI template use the official ACM class?",
    answer:
      "Yes. It is built on acmart, the official ACM document class, with the manuscript, review and anonymous options. acmart ships with TeX Live, so no extra files are needed. It is a short starting skeleton rather than ACM's full sample article, so check the CHI 2026 author instructions for anything the venue adds on top of acmart.",
  },
  {
    question: "What do the manuscript, review and anonymous options do?",
    answer:
      "manuscript sets the single-column format used for review, review adds line numbers so reviewers can refer to specific lines, and anonymous hides the author names and affiliations in the output while keeping them in your source. Remove review and anonymous once the paper is accepted.",
  },
  {
    question: "Where does the bibliography come from?",
    answer:
      "The template ends with \\bibliography{sample-base}, the file name from ACM's sample. A filecontents* block at the top of the file writes sample-base.bib with one sample entry on the first compile, and the Introduction cites it. Replace that entry with your own, or delete the block and point \\bibliography at your own .bib file. The ACM-Reference-Format style is part of acmart, so it needs no download.",
  },
  {
    question: "Does this CHI template work in Overleaf?",
    answer:
      "Yes. acmart and ACM-Reference-Format.bst are in TeX Live, so the template compiles in Overleaf, Octree or a local install with pdfLaTeX; its sample .bib is written from the file itself. acmart sets its own fonts, so do not add font packages such as times.",
  },
];

export default function AcmChi2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An ACM CHI 2026 LaTeX template on acmart</GuideH2>
      <GuideP>
        This ACM CHI 2026 LaTeX template is a submission skeleton built on{" "}
        <GuideCode>acmart</GuideCode>, the official ACM document class that CHI and
        other SIGCHI venues use. The class line is{" "}
        <GuideCode>{"\\documentclass[manuscript,review,anonymous]{acmart}"}</GuideCode>,
        which gives the single-column review format, line numbers for reviewers and
        hidden author names, so the PDF it produces is already suitable for an
        anonymous first submission. Because acmart is part of TeX Live, the template
        works as an ACM CHI template for Overleaf, Octree or a local install with no
        extra files to download.
      </GuideP>
      <GuideP>
        The source shows the parts of an ACM paper that trip people up: the author
        block written with <GuideCode>\author</GuideCode>,{" "}
        <GuideCode>\email</GuideCode> and an <GuideCode>\affiliation</GuideCode>{" "}
        containing <GuideCode>\institution</GuideCode>, <GuideCode>\city</GuideCode>{" "}
        and <GuideCode>\country</GuideCode>; a <GuideCode>CCSXML</GuideCode> block
        with a matching <GuideCode>\ccsdesc</GuideCode> line for the ACM Computing
        Classification System; <GuideCode>\keywords</GuideCode>; and{" "}
        <GuideCode>\maketitle</GuideCode> placed after the abstract, which acmart
        requires. It ends with the <GuideCode>ACM-Reference-Format</GuideCode>{" "}
        BibTeX style. The body is deliberately short, with an Introduction and a
        reminder to give every figure a text description for screen readers, so you
        can replace it with your own sections straight away.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>acmart</GuideCode> with <GuideCode>manuscript</GuideCode>,{" "}
          <GuideCode>review</GuideCode> and <GuideCode>anonymous</GuideCode> options
        </li>
        <li>One author with email and a structured affiliation</li>
        <li>
          Abstract, CCS concepts (<GuideCode>CCSXML</GuideCode> and{" "}
          <GuideCode>\ccsdesc</GuideCode>) and keywords
        </li>
        <li>
          A commented <GuideCode>\Description</GuideCode> example for accessible
          figures
        </li>
        <li>
          <GuideCode>{"\\bibliographystyle{ACM-Reference-Format}"}</GuideCode> with a
          sample <GuideCode>sample-base.bib</GuideCode> and one citation
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Replace the sample entry in the <GuideCode>{"filecontents*"}</GuideCode>{" "}
          block, or add your own <GuideCode>.bib</GuideCode> file and change{" "}
          <GuideCode>{"\\bibliography{sample-base}"}</GuideCode> to its name.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>
          ), twice if the line numbers or references look stale.
        </li>
        <li>
          Fill in <GuideCode>\title</GuideCode>, the author block, the abstract and{" "}
          <GuideCode>\keywords</GuideCode>. Generate real CCS concepts with the
          ACM tool linked in the template&apos;s comment (dl.acm.org/ccs.cfm) and paste both the XML and the <GuideCode>\ccsdesc</GuideCode>{" "}
          lines over the example.
        </li>
        <li>
          After acceptance, delete <GuideCode>review</GuideCode> and{" "}
          <GuideCode>anonymous</GuideCode> from the class options and follow the CHI
          camera-ready instructions.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add figures with a description.</strong> acmart defines{" "}
        <GuideCode>\Description</GuideCode> for the alt text that ACM&apos;s
        accessible PDFs use, and warns when a figure has none:
      </GuideP>
      <GuidePre>{`\\begin{figure}
  \\centering
  \\includegraphics[width=0.8\\linewidth]{study-setup}
  \\caption{The study setup.}
  \\Description{A participant seated at a desk using a tablet
    while a researcher observes from the side.}
  \\label{fig:setup}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Add co-authors.</strong> Repeat the whole block for each person,
        each with its own <GuideCode>\affiliation</GuideCode>; the{" "}
        <GuideCode>anonymous</GuideCode> option hides all of them in the review PDF:
      </GuideP>
      <GuidePre>{`\\author{First Author}
\\email{first.author@institution.edu}
\\affiliation{%
  \\institution{Institution Name}
  \\city{City}
  \\country{Country}
}
\\author{Second Author}
\\email{second.author@other.edu}
\\affiliation{%
  \\institution{Other Institution}
  \\city{City}
  \\country{Country}
}`}</GuidePre>
      <GuideP>
        <strong>Shorten the running heads.</strong> In the non-manuscript formats
        acmart prints author names in the page header; give a short list with{" "}
        <GuideCode>\renewcommand{"{\\shortauthors}"}</GuideCode> after{" "}
        <GuideCode>\maketitle</GuideCode> if the full list is too long.
      </GuideP>
      <GuidePre>{`\\maketitle
\\renewcommand{\\shortauthors}{Author and Author}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/ieee-conference">IEEE conference paper</GuideLink>{" "}
        and <GuideLink href="/templates/research-paper">research paper</GuideLink>. For
        dates, see the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">ACM CHI template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
