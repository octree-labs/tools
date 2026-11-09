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
    question: "Does this WWW 2026 template use the official ACM class?",
    answer:
      "Yes. It is built on acmart, the official ACM LaTeX class, with the sigconf (two-column proceedings) and anonymous options. acmart ships with TeX Live, so no extra class file is needed. The sample is a short skeleton rather than the full ACM sample paper, so check the WWW 2026 call for papers for the exact class options, review settings and supplementary rules before you submit.",
  },
  {
    question: "Is the Relevance to the Web section required?",
    answer:
      "The template's sample text marks it as a mandatory section for the Research Track and asks you to state explicitly how your work is relevant to the Web. Confirm the current requirement, and the tracks it applies to, in the official WWW 2026 call for papers.",
  },
  {
    question: "How do I de-anonymise the paper for the camera-ready version?",
    answer:
      "Remove anonymous from the class options, so the first line reads \\documentclass[sigconf]{acmart}, and complete every \\author, \\affiliation and \\email block. With anonymous set, acmart hides author names in the PDF, so you can fill them in from the start.",
  },
  {
    question: "Why does the bibliography not compile?",
    answer:
      "The template ends with \\bibliography{software}, so BibTeX looks for a file called software.bib, which is not included. Create a .bib file, change the argument to its name without the extension (for example \\bibliography{references}), cite entries with \\cite, and compile with pdfLaTeX and BibTeX. The ACM-Reference-Format style ships with acmart.",
  },
];

export default function Www2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A WWW 2026 (The Web Conference) LaTeX template</GuideH2>
      <GuideP>
        This WWW 2026 LaTeX template gives you a ready-to-compile starting point for a
        paper submitted to The Web Conference. It uses <GuideCode>acmart</GuideCode>,
        the official ACM document class, with the <GuideCode>sigconf</GuideCode> option
        for the two-column ACM proceedings layout and the{" "}
        <GuideCode>anonymous</GuideCode> option, which hides author names and
        affiliations in the PDF for double-blind review. Because{" "}
        <GuideCode>acmart</GuideCode> is part of TeX Live, the file compiles as a WWW
        template for Overleaf, in Octree or on a local install without downloading a
        separate author kit.
      </GuideP>
      <GuideP>
        The skeleton is short. It sets a title and one author block with institution,
        city, country and email, places the abstract before{" "}
        <GuideCode>\maketitle</GuideCode> as <GuideCode>acmart</GuideCode> requires, and
        has two sections: an Introduction, and a Relevance to the Web section that the
        template&apos;s own text describes as mandatory for the Research Track.
        References use the <GuideCode>ACM-Reference-Format</GuideCode> BibTeX style that
        ships with the class. Since this is a minimal skeleton rather than ACM&apos;s full
        sample paper, it does not include CCS concepts, keywords or rights-management
        commands; the steps below show how to add the common ones. Always check the
        official WWW 2026 call for papers for page limits, review options and
        submission rules, which this template does not state. For dates, see the
        conference deadlines page.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          Official <GuideCode>acmart</GuideCode> class with <GuideCode>sigconf</GuideCode>{" "}
          and <GuideCode>anonymous</GuideCode>
        </li>
        <li>Title, one author block with affiliation and email, and an abstract</li>
        <li>Introduction and a Relevance to the Web section</li>
        <li>BibTeX with <GuideCode>ACM-Reference-Format</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Create a <GuideCode>.bib</GuideCode> file and point{" "}
          <GuideCode>\bibliography</GuideCode> at it; the template expects{" "}
          <GuideCode>software.bib</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>{" "}
          locally); Overleaf and Octree run BibTeX for you.
        </li>
        <li>
          Edit <GuideCode>\title</GuideCode>, the author block and the abstract, keeping{" "}
          <GuideCode>{"\\begin{abstract}"}</GuideCode> before{" "}
          <GuideCode>\maketitle</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Line numbers for reviewers.</strong> <GuideCode>acmart</GuideCode>&apos;s{" "}
        <GuideCode>review</GuideCode> option adds line numbers to the margin; use it if
        the call for papers asks for it:
      </GuideP>
      <GuidePre>{`\\documentclass[sigconf,review,anonymous]{acmart}`}</GuidePre>
      <GuideP>
        <strong>Keywords and more authors.</strong> Put{" "}
        <GuideCode>\keywords</GuideCode> before <GuideCode>\maketitle</GuideCode>, and
        repeat the author block for each co-author:
      </GuideP>
      <GuidePre>{`\\author{Second Author}
\\affiliation{%
  \\institution{Another Institution}
  \\city{City}
  \\country{Country}
}
\\email{second.author@another.edu}

\\begin{document}
\\begin{abstract}
Abstract goes here.
\\end{abstract}
\\keywords{web measurement, crawling, user privacy}
\\maketitle`}</GuidePre>
      <GuideP>
        <strong>Camera-ready.</strong> Drop <GuideCode>anonymous</GuideCode> (and{" "}
        <GuideCode>review</GuideCode> if you added it), then add the rights and
        conference information that ACM sends after acceptance.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/acm-chi-2026">ACM CHI 2026</GuideLink>,{" "}
        <GuideLink href="/templates/emnlp-2026">EMNLP 2026</GuideLink> and{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>. For dates, see the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">WWW 2026 template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
