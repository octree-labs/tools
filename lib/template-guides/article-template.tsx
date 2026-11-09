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
    question: "Does this article template work in Overleaf?",
    answer:
      "Yes. It uses the standard article class and packages that ship with TeX Live (geometry, amsmath, amssymb, graphicx, cite and authblk), so it compiles in Overleaf, Octree or a local install with pdfLaTeX. Add a references.bib file for the bibliography.",
  },
  {
    question: "How do I give two authors the same affiliation?",
    answer:
      "With authblk, give both authors the same number: \\author[1]{First Author} and \\author[1]{Second Author}, with a single \\affil[1]{...}. An author with two affiliations gets both numbers, for example \\author[1,2]{Third Author}.",
  },
  {
    question: "How do I change the citation style?",
    answer:
      "The template uses numeric citations with \\bibliographystyle{plain}, which sorts the reference list alphabetically. Use unsrt to number references in order of first citation, or abbrv for abbreviated first names. For author-year citations, replace the cite package with natbib and use a style such as plainnat.",
  },
  {
    question: "Can I submit this article template to a journal?",
    answer:
      "Use it for drafting and for preprints. Most journals and publishers provide their own class file, so check the author guidelines; because the template uses plain \\section commands and a standard BibTeX bibliography, your text and references move into a journal class with few changes.",
  },
];

export default function ArticleTemplateGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A scientific article template for LaTeX and Overleaf</GuideH2>
      <GuideP>
        This article template for LaTeX and Overleaf is a clean starting point for a
        scientific paper, preprint or course article. It uses the standard{" "}
        <GuideCode>article</GuideCode> class at 11 pt with 1 inch margins, so it
        compiles anywhere with pdfLaTeX and moves easily into a publisher&apos;s class
        later. Authors and affiliations are set with the{" "}
        <GuideCode>authblk</GuideCode> package, which numbers each affiliation and
        prints it under the names, the format most journals use for multi-author
        papers.
      </GuideP>
      <GuideP>
        The body follows the familiar research article structure, with placeholder
        text in square brackets: an abstract, a Keywords line, Introduction,
        Background (Historical Context and Current State), Methods (Data Collection
        and Analysis Approach), Results with a figure environment and a Statistical
        Analysis subsection, Discussion (Interpretation and Limitations), Conclusion
        and an unnumbered Acknowledgments section. Citations are numeric through the{" "}
        <GuideCode>cite</GuideCode> package, which sorts and compresses runs such as
        [1, 2, 3] into [1–3], and the bibliography is built by BibTeX from{" "}
        <GuideCode>references.bib</GuideCode> with the <GuideCode>plain</GuideCode>{" "}
        style. <GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode> and{" "}
        <GuideCode>graphicx</GuideCode> are loaded for equations and figures. If you
        need a slightly more compact layout with author-year citations, the{" "}
        <GuideLink href="/templates/journal-article">journal article template</GuideLink>{" "}
        is the closest alternative.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{article}"}</GuideCode> with 1 inch margins
        </li>
        <li>
          Two authors and numbered affiliations via <GuideCode>authblk</GuideCode>
        </li>
        <li>Abstract and a bold Keywords line</li>
        <li>Six numbered sections with subsections in the standard IMRaD order</li>
        <li>A labelled figure environment ready for an image</li>
        <li>
          Numeric citations with <GuideCode>cite</GuideCode> and{" "}
          <GuideCode>{"\\bibliographystyle{plain}"}</GuideCode>
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>article.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> and cite entries with{" "}
          <GuideCode>{"\\cite{key}"}</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf article.tex</GuideCode>
          ).
        </li>
        <li>
          Edit <GuideCode>\title</GuideCode>, the <GuideCode>\author[n]</GuideCode> and{" "}
          <GuideCode>\affil[n]</GuideCode> lines, the abstract and the keywords.
        </li>
        <li>
          Replace every bracketed placeholder, then search for <GuideCode>[</GuideCode>{" "}
          to catch any you missed.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Put an image in the figure.</strong> The sample figure has a caption
        but no content. graphicx is loaded, so add <GuideCode>\includegraphics</GuideCode>{" "}
        and reference it with <GuideCode>\ref</GuideCode>:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
\\centering
\\includegraphics[width=0.8\\linewidth]{results.pdf}
\\caption{Results visualization}
\\label{fig:results}
\\end{figure}

As Figure~\\ref{fig:results} shows, ...`}</GuidePre>
      <GuideP>
        <strong>Add emails and shared affiliations.</strong> authblk accepts several
        numbers per author, and <GuideCode>\texttt</GuideCode> inside{" "}
        <GuideCode>\affil</GuideCode> is a simple way to list contact addresses:
      </GuideP>
      <GuidePre>{`\\author[1]{First Author}
\\author[1,2]{Second Author}
\\author[2]{Third Author}
\\affil[1]{Department of Physics, University A}
\\affil[2]{Institute B \\\\ \\texttt{third.author@example.org}}`}</GuidePre>
      <GuideP>
        <strong>Number equations for reference.</strong> amsmath is loaded, so use{" "}
        <GuideCode>equation</GuideCode> or <GuideCode>align</GuideCode> with labels
        and cite them with <GuideCode>\eqref</GuideCode>:
      </GuideP>
      <GuidePre>{`\\begin{align}
  y &= \\beta_0 + \\beta_1 x + \\varepsilon \\label{eq:model} \\\\
  \\hat{\\beta}_1 &= \\frac{\\sum_i (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_i (x_i - \\bar{x})^2}
\\end{align}
We estimate model~\\eqref{eq:model} by least squares.`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/journal-article">journal article</GuideLink>,{" "}
        <GuideLink href="/templates/research-paper">research paper</GuideLink> and{" "}
        <GuideLink href="/templates/manuscript">manuscript</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Article template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
