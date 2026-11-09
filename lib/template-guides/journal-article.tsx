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
    question: "Can I submit this template directly to a journal?",
    answer:
      "Use it to write and circulate the manuscript. Most journals either supply their own LaTeX class or accept a generic manuscript and typeset it themselves; read the author guidelines for required sections, citation style, word limits and whether they want line numbers or double spacing. Because the template uses standard \\section commands and BibTeX, moving into a journal class is mostly a preamble change.",
  },
  {
    question: "Why does today's date appear under the authors?",
    answer:
      "The template does not set \\date, and LaTeX's \\maketitle prints \\today when no date is given. Add \\date{} to the preamble to remove it, or \\date{Submitted 3 March 2027} for a fixed date.",
  },
  {
    question: "Which citation style does it use?",
    answer:
      "Author-year citations through natbib with the apalike BibTeX style: \\citet{key} gives Smith (2020) and \\citep{key} gives (Smith, 2020). If the journal wants numbered references, load natbib with the numbers option and change the style, for example to unsrtnat.",
  },
  {
    question: "Does this journal article template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, amssymb, graphicx, natbib and authblk, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX and BibTeX. Add a references.bib file for the bibliography.",
  },
];

export default function JournalArticleGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A journal article template in LaTeX</GuideH2>
      <GuideP>
        This journal article template in LaTeX is a compact manuscript for an
        empirical research paper, the kind you circulate to co-authors and then
        submit to a journal. It uses the standard <GuideCode>article</GuideCode>{" "}
        class at 12 pt with 1 inch margins, numbered affiliations from the{" "}
        <GuideCode>authblk</GuideCode> package, and author-year citations from{" "}
        <GuideCode>natbib</GuideCode> with the <GuideCode>apalike</GuideCode> BibTeX
        style, a combination that suits journals in the social, life and behavioural
        sciences as well as many in engineering.
      </GuideP>
      <GuideP>
        After the title, authors and a short abstract comes a bold Keywords line,
        then the sections of a standard empirical article: Introduction,
        Literature Review with an example <GuideCode>\citep</GuideCode> citation,
        Methodology with Participants and Procedure subsections, Results,
        Discussion and Conclusion. Prompts in square brackets show what each part
        should say, for example <GuideCode>[research question]</GuideCode> in the
        abstract and <GuideCode>[gap]</GuideCode> in the introduction, so you can
        draft the argument quickly and then fill in the detail.{" "}
        <GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode> and{" "}
        <GuideCode>graphicx</GuideCode> are loaded for equations and figures, and the
        reference list is generated from <GuideCode>references.bib</GuideCode>, so
        only cited works appear and you can change the citation style with one line
        when a journal asks for it. Compared with the{" "}
        <GuideLink href="/templates/article-template">article template</GuideLink>,
        which uses numbered citations and a Background section, this one is set up
        for author-year referencing and a participants-and-procedure methods
        section.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[12pt]{article}"}</GuideCode> with 1 inch margins
        </li>
        <li>
          Two authors with numbered affiliations via <GuideCode>authblk</GuideCode>
        </li>
        <li>Abstract and Keywords line</li>
        <li>Six sections, with Participants and Procedure under Methodology</li>
        <li>
          natbib author-year citations and an <GuideCode>apalike</GuideCode> reference
          list
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>article.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode>; the template cites the key{" "}
          <GuideCode>citation</GuideCode>, so rename it to one of your keys.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf article.tex</GuideCode>
          ).
        </li>
        <li>
          Edit the title, <GuideCode>\author[n]</GuideCode> and{" "}
          <GuideCode>\affil[n]</GuideCode> lines, abstract and keywords.
        </li>
        <li>Replace each bracketed prompt and add figures and tables as needed.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Mark the corresponding author.</strong> authblk accepts extra text in
        an affiliation; a footnote with <GuideCode>\thanks</GuideCode> works too:
      </GuideP>
      <GuidePre>{`\\author[1]{First Author\\thanks{Corresponding author: first.author@university.edu}}
\\author[2]{Second Author}
\\affil[1]{Department, University Name}
\\affil[2]{Department, University Name}
\\date{}`}</GuidePre>
      <GuideP>
        <strong>Report results in a table.</strong> Add{" "}
        <GuideCode>{"\\usepackage{booktabs}"}</GuideCode> for publication-quality
        rules, and put the caption above the table as most journals require:
      </GuideP>
      <GuidePre>{`\\begin{table}[t]
\\centering
\\caption{Descriptive statistics by condition}
\\label{tab:descriptives}
\\begin{tabular}{lccc}
\\toprule
Condition & $n$ & $M$ & $SD$ \\\\
\\midrule
Control   & 48 & 3.21 & 0.84 \\\\
Treatment & 50 & 3.67 & 0.79 \\\\
\\bottomrule
\\end{tabular}
\\end{table}`}</GuidePre>
      <GuideP>
        <strong>Cite with page numbers and prefixes.</strong> natbib&apos;s optional
        arguments add text before and after the citation:
      </GuideP>
      <GuidePre>{`\\citep[see][p.~14]{smith2024}   % (see Smith and Doe, 2024, p. 14)
\\citet[ch.~3]{smith2024}          % Smith and Doe (2024, ch. 3)`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/article-template">article template</GuideLink>,{" "}
        <GuideLink href="/templates/manuscript">manuscript</GuideLink> and{" "}
        <GuideLink href="/templates/literature-review">literature review</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Journal article template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
