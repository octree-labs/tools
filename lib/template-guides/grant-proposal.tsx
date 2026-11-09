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
    question: "Does this grant proposal template follow NIH or NSF format?",
    answer:
      "It follows neither funder exactly. The sections (summary, significance, specific aims, research design, outcomes and broader impact, timeline, budget and justification, qualifications) are the common core of most research grant applications, and the Specific Aims and Broader Impact headings echo NIH and NSF vocabulary. Every funder publishes its own required sections, fonts, margins and page limits, so rename and reorder sections to match the call.",
  },
  {
    question: "How do I cite references in the grant proposal?",
    answer:
      "natbib is loaded with the plain BibTeX style, which gives numbered citations: \\citep{key} prints [1]. To number references in order of first citation, load natbib with the numbers option and use \\bibliographystyle{unsrtnat}; add a references.bib file next to the .tex file.",
  },
  {
    question: "Should the budget be in the main document?",
    answer:
      "It depends on the funder. Many collect the budget in a separate form or spreadsheet and ask only for a written justification in the proposal. The template's Budget section has both a summary table and a justification, so delete whichever the call does not want.",
  },
  {
    question: "Does this grant proposal template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath, graphicx and natbib, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX and BibTeX.",
  },
];

export default function GrantProposalGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A grant proposal template in LaTeX</GuideH2>
      <GuideP>
        This grant proposal template in LaTeX is a structured research funding
        application with every core section in place and filled with bracketed
        prompts. It uses the standard <GuideCode>article</GuideCode> class at 12 pt
        with 1 inch margins, and a title block that names the project, the principal
        investigator, co-investigators, department and university.
      </GuideP>
      <GuideP>
        The proposal opens with a Project Summary stating the amount requested, the
        duration, the research question and the expected impact, followed by
        keywords. Background and Significance sets out the problem and three numbered
        reasons it matters. Specific Aims lists three aims, each with what you will do
        and an expected outcome, and Research Design and Methods mirrors them with one
        methods subsection per aim, an analysis plan and Anticipated Challenges with
        mitigation. Expected Outcomes and Impact lists deliverables and broader
        impact; the Timeline is a two-year table broken into half-year periods; and
        the Budget has a summary table (personnel, equipment, supplies, travel, other,
        total direct costs, indirect costs and total) with a written justification.
        A Qualifications section and a BibTeX bibliography close the document.
        Citations use <GuideCode>natbib</GuideCode>. The structure fits university
        seed grants, foundation applications and early drafts of federal proposals
        before you move them into the funder&apos;s required format. For a thesis or
        PhD proposal rather than a funding request, see the{" "}
        <GuideLink href="/templates/research-proposal">research proposal template</GuideLink>
        .
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block with PI, co-investigators and institution</li>
        <li>Project Summary, Background and Significance, three Specific Aims</li>
        <li>Methods per aim, an analysis plan and anticipated challenges</li>
        <li>Deliverables and broader impact</li>
        <li>A two-year timeline table</li>
        <li>Budget summary table and justification</li>
        <li>Qualifications and a BibTeX bibliography</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>proposal.tex</GuideCode>.
        </li>
        <li>
          Create <GuideCode>references.bib</GuideCode> and cite with{" "}
          <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX and BibTeX (<GuideCode>latexmk -pdf proposal.tex</GuideCode>
          ).
        </li>
        <li>
          Rename and reorder sections to match the funder&apos;s call, then replace
          the bracketed prompts.
        </li>
        <li>
          Fill in the budget amounts with <GuideCode>\$</GuideCode> and check the page
          count against the call&apos;s limit.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Show the timeline as a Gantt-style table.</strong> Reviewers scan a
        grid of activities against quarters faster than a list. This uses only
        standard LaTeX:
      </GuideP>
      <GuidePre>{`\\begin{center}
\\begin{tabular}{|l|c|c|c|c|c|c|c|c|}
\\hline
\\textbf{Activity} & \\multicolumn{4}{c|}{\\textbf{Year 1}} & \\multicolumn{4}{c|}{\\textbf{Year 2}} \\\\
\\hline
 & Q1 & Q2 & Q3 & Q4 & Q1 & Q2 & Q3 & Q4 \\\\
\\hline
Aim 1 & $\\bullet$ & $\\bullet$ & $\\bullet$ & & & & & \\\\
Aim 2 & & & $\\bullet$ & $\\bullet$ & $\\bullet$ & & & \\\\
Aim 3 & & & & & $\\bullet$ & $\\bullet$ & $\\bullet$ & \\\\
Dissemination & & & & & & & $\\bullet$ & $\\bullet$ \\\\
\\hline
\\end{tabular}
\\end{center}`}</GuidePre>
      <GuideP>
        <strong>Match the funder&apos;s font.</strong> Calls often require a
        specific typeface and size. For a sans-serif Helvetica-style body, add to the
        preamble:
      </GuideP>
      <GuidePre>{`\\usepackage[T1]{fontenc}
\\usepackage{helvet}
\\renewcommand{\\familydefault}{\\sfdefault}`}</GuidePre>
      <GuideP>
        <strong>Number references in citation order.</strong> unsrtnat carries
        author-year data, so also load natbib with the <GuideCode>numbers</GuideCode>{" "}
        option to keep bracketed numbers; reference [1] is then the first one cited:
      </GuideP>
      <GuidePre>{`\\usepackage[numbers]{natbib}   % replaces \\usepackage{natbib}

Prior work has shown ... \\citep{smith2024}.

\\bibliographystyle{unsrtnat}
\\bibliography{references}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/research-proposal">research proposal</GuideLink>,{" "}
        <GuideLink href="/templates/research-statement">research statement</GuideLink> and{" "}
        <GuideLink href="/templates/white-paper">white paper</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Grant proposal template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
