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
    question: "What goes in a research statement?",
    answer:
      "A short overview of your research agenda and its unifying theme, the motivation for it, what you have already done (usually your PhD and postdoc work), what you are working on now, and where the work is going over the next few years, often with a list of selected publications. This template uses exactly those sections: Overview, Research Background and Motivation, Past Research, Current Research, Future Research Directions, Conclusion and Selected Publications.",
  },
  {
    question: "How long should a research statement be?",
    answer:
      "Follow the job advertisement; many ask for two to three pages, some for one or up to five. The sample text in this template is a skeleton that fills about two pages, so expand Past, Current and Future Research first, as those carry the most weight with a hiring committee.",
  },
  {
    question: "Why are the section headings not numbered?",
    answer:
      "The template uses titlesec to redefine \\section and \\subsection with an empty label, so headings print without numbers, which suits a short statement. Remove the two \\titleformat lines to get numbered sections back.",
  },
  {
    question: "Does this research statement template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, amssymb, graphicx, hyperref and titlesec, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function ResearchStatementGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A research statement template in LaTeX</GuideH2>
      <GuideP>
        This research statement LaTeX template is built for academic job applications:
        faculty positions, postdoctoral fellowships and research scientist roles, where
        the committee wants to see a coherent research agenda, what you have achieved
        and what you will do next. The title block puts &quot;Research Statement&quot;
        above your name, department, university and email, and the body follows the
        order hiring committees expect.
      </GuideP>
      <GuideP>
        An Overview states your area and the theme that unifies your work; Research
        Background and Motivation explains the problem you care about; Past Research
        covers your dissertation and its main contribution; Current Research describes
        your ongoing projects; Future Research Directions lays out the next three to
        five years; a Conclusion ties it together; and Selected Publications lists your
        key papers. The sample is written as a machine learning researcher working on
        interpretable and trustworthy AI, so every sentence shows the kind of specific
        claim each section needs; replace it with your own field and results. The source
        is the standard <GuideCode>article</GuideCode> class at 11 pt with one-inch
        margins. <GuideCode>titlesec</GuideCode> gives unnumbered bold section headings,{" "}
        <GuideCode>hyperref</GuideCode> makes links and emails clickable, and{" "}
        <GuideCode>graphicx</GuideCode> and the AMS packages are loaded for a figure or
        an equation. It compiles as a research statement template for Overleaf, in
        Octree or with any local TeX install.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block with name, department, university and email</li>
        <li>Seven sections from Overview to Selected Publications</li>
        <li>Unnumbered bold headings via <GuideCode>titlesec</GuideCode></li>
        <li>Clickable links with <GuideCode>hyperref</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local{" "}
          <GuideCode>research-statement.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit the <GuideCode>\author</GuideCode> block, then rewrite each section for
          your own research.
        </li>
        <li>
          Update the Selected Publications list; it is a plain{" "}
          <GuideCode>enumerate</GuideCode>, so no BibTeX run is needed.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add a figure beside the text.</strong> One well-chosen figure helps a
        committee outside your subfield. Load <GuideCode>wrapfig</GuideCode> and let the
        text flow around it:
      </GuideP>
      <GuidePre>{`\\usepackage{wrapfig}
...
\\begin{wrapfigure}{r}{0.4\\textwidth}
  \\centering
  \\includegraphics[width=0.38\\textwidth]{overview}
  \\caption{Overview of my research program.}
\\end{wrapfigure}`}</GuidePre>
      <GuideP>
        <strong>Link your publications.</strong> <GuideCode>hyperref</GuideCode> is
        loaded, so wrap each title in <GuideCode>\href</GuideCode> pointing to its DOI
        or PDF:
      </GuideP>
      <GuidePre>{`\\item Author, A. (2023). \\href{https://doi.org/10.xxxx/xxxxx}{Novel Approaches to
  Neural Network Interpretability}. \\textit{Journal of Machine Learning Research}.`}</GuidePre>
      <GuideP>
        <strong>Name on every page.</strong> Application portals often merge documents,
        so add a header with <GuideCode>fancyhdr</GuideCode>:{" "}
        <GuideCode>{"\\usepackage{fancyhdr} \\pagestyle{fancy} \\fancyhf{} \\lhead{Your Name} \\rhead{Research Statement} \\cfoot{\\thepage}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/academic-cv">academic CV</GuideLink>,{" "}
        <GuideLink href="/templates/statement-of-purpose">statement of purpose</GuideLink> and{" "}
        <GuideLink href="/templates/cover-letter">cover letter</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Research statement template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
