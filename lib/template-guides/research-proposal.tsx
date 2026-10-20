import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "How long should a research proposal be?",
    answer:
      "A master's or PhD thesis proposal is usually 5 to 15 pages; a proposal for a funding call is whatever the call specifies, often 2 to 5 pages plus a budget. The example in this template compiles to three pages at 11pt with one-inch margins, which is a sensible length for a course assignment or a first draft to send to a supervisor. Expand the literature review and methodology first if you need more pages; the other sections should stay short.",
  },
  {
    question: "What is the difference between a research proposal and a thesis proposal?",
    answer:
      "A thesis proposal is a research proposal written for a degree committee: it argues that the project is feasible for one student in the time available and usually adds a chapter outline and a supervision plan. A grant or funding proposal is written for a sponsor and adds a budget justification, deliverables and a statement of impact. The core sections (background, questions, literature, methods, timeline, references) are the same, which is why this template works for both.",
  },
  {
    question: "Can I use this research proposal template for a PhD application?",
    answer:
      "Yes. Most PhD programmes ask for a proposal of 1,500 to 3,000 words with the structure used here. Replace the example topic, keep the research questions explicit, and make sure the timeline covers the full length of the programme (three or four years instead of twelve months). Check the department's guidance for required headings such as Training Needs or Supervision and add them as new \\section commands.",
  },
  {
    question: "How do I cite sources in the research proposal?",
    answer:
      "The template loads natbib with the round option, so \\citet{key} gives Cepeda et al. (2006) and \\citep{key} gives (Cepeda et al., 2006). References live in a thebibliography environment at the end of the file: each entry starts with \\bibitem[Author(Year)]{key} so natbib can build the author-year label. If you already have a .bib file, delete that environment, add \\bibliographystyle{plainnat} and \\bibliography{references}, and run BibTeX.",
  },
  {
    question: "Does a research proposal need a budget?",
    answer:
      "Only when you are asking for money. Funding and grant proposals always include one, usually as a table with a short justification, and the template's Budget section shows a compact booktabs version. Thesis proposals for a degree normally leave it out unless fieldwork, equipment or participant payments need departmental approval; in that case keep the table and delete the rows you do not need.",
  },
];

export default function ResearchProposalGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is a research proposal?</GuideH2>
      <GuideP>
        A research proposal is a short document that makes the case for a study
        before it is carried out: what question you will answer, why it matters,
        what is already known, how you will do the work, and what it will cost in
        time and money. Supervisors, degree committees and funding bodies use it to
        decide whether the project is worth doing and whether you can do it. This
        free research proposal template in LaTeX gives you the standard structure
        together with a complete research proposal example (a spaced-repetition
        experiment with second-language learners) so you can see what each section
        looks like when it is finished before you replace the content with your own.
      </GuideP>

      <GuideH2 id="format">Research proposal format: what goes in each section</GuideH2>
      <GuideP>
        The sections below follow the order most universities and funders expect.
        Lengths are for a three- to ten-page proposal; scale them up for a full
        thesis proposal.
      </GuideP>
      <GuideTable
        headers={["Section", "What goes in it", "Typical length"]}
        rows={[
          [
            "Title block",
            "A specific title that names the variables or phenomenon, your name, supervisor, department and the submission date.",
            "Half a page",
          ],
          [
            "Abstract",
            "The problem, the gap, the method and the expected contribution in one paragraph.",
            "100 to 200 words",
          ],
          [
            "Introduction and background",
            "Why the topic matters, the key concepts, and the gap in current knowledge, with two or three citations.",
            "One to two pages",
          ],
          [
            "Research questions and hypotheses",
            "Two to four numbered questions, each with a testable hypothesis or expected answer.",
            "Half a page",
          ],
          [
            "Literature review",
            "What previous studies found, where they disagree, and what none of them has done yet.",
            "One to three pages",
          ],
          [
            "Methodology",
            "Design, participants or data, materials, procedure and analysis plan, in enough detail to judge feasibility.",
            "One to three pages",
          ],
          [
            "Timeline",
            "A table or Gantt chart of phases against months or quarters.",
            "Quarter page",
          ],
          [
            "Expected outcomes and significance",
            "What you expect to find and who benefits: the field, practitioners, policy.",
            "Half a page",
          ],
          [
            "Budget",
            "Itemised costs with a total; funding proposals only.",
            "Quarter page",
          ],
          [
            "References",
            "Every source cited, in the style your department or funder requires.",
            "As needed",
          ],
        ]}
      />

      <GuideH2 id="thesis-vs-grant">Thesis proposal vs grant proposal</GuideH2>
      <GuideP>
        The same template serves both, but the emphasis shifts. For a thesis
        proposal, expand the literature review and methodology, extend the timeline
        to the length of the degree, add a chapter outline, and drop the budget
        unless your department asks for one. For a funding application, keep the
        background tight, add a budget justification and a list of deliverables,
        and follow the sponsor&apos;s page limit and heading names exactly. If the
        money is the point of the document, start from the{" "}
        <GuideLink href="/templates/grant-proposal">grant proposal template</GuideLink>{" "}
        instead, which is organised around specific aims and a budget narrative; if
        you are already writing the dissertation, the{" "}
        <GuideLink href="/templates/thesis">thesis template</GuideLink> continues
        where this proposal leaves off.
      </GuideP>

      <GuideH2 id="customise">How to customise the research proposal template</GuideH2>
      <GuideH3>Title block and supervisor</GuideH3>
      <GuideP>
        The applicant, supervisor and department sit in the{" "}
        <GuideCode>\author</GuideCode> command. Keep the{" "}
        <GuideCode>\normalsize</GuideCode> lines so the affiliation stays smaller
        than your name, and change the <GuideCode>\date</GuideCode> to a fixed date
        once you submit.
      </GuideP>
      <GuidePre>{`\\author{Your Name \\\\[4pt]
  \\normalsize Supervisor: Dr.\\ Supervisor Name \\\\
  \\normalsize Department of Linguistics, University Name \\\\
  \\normalsize \\texttt{your.email@university.edu}}
\\date{Submitted: 15 March 2026}`}</GuidePre>

      <GuideH3>Timeline table</GuideH3>
      <GuideP>
        The timeline is a <GuideCode>booktabs</GuideCode> table with one column per
        quarter and a filled square (<GuideCode>$\blacksquare$</GuideCode> from{" "}
        <GuideCode>amssymb</GuideCode>) in each active cell. Add a column per month
        for a shorter project, or rows for each work package. For a three-year PhD
        use years or semesters as the columns.
      </GuideP>
      <GuidePre>{`\\begin{tabular}{c >{\\raggedright\\arraybackslash}p{6.4cm} c c c c}
  \\toprule
  Phase & Activity & Y1 & Y2 & Y3 & Y4 \\\\
  \\midrule
  1 & Literature review and ethics approval & $\\blacksquare$ & & & \\\\
  2 & Data collection & & $\\blacksquare$ & $\\blacksquare$ & \\\\
  3 & Analysis and writing up & & & $\\blacksquare$ & $\\blacksquare$ \\\\
  \\bottomrule
\\end{tabular}`}</GuidePre>

      <GuideH3>Citations and references</GuideH3>
      <GuideUl>
        <li>
          <GuideCode>{"\\citet{key}"}</GuideCode> for an in-sentence citation
          (Nakata (2015) found...), <GuideCode>{"\\citep{key}"}</GuideCode> for a
          parenthetical one.
        </li>
        <li>
          Each <GuideCode>\bibitem</GuideCode> carries an{" "}
          <GuideCode>[Author(Year)]</GuideCode> label so natbib can typeset
          author-year citations without BibTeX; the file compiles with a single
          pdflatex run plus one more for cross-references.
        </li>
        <li>
          To switch to a <GuideCode>.bib</GuideCode> file, replace the{" "}
          <GuideCode>thebibliography</GuideCode> environment with{" "}
          <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> and{" "}
          <GuideCode>{"\\bibliography{references}"}</GuideCode>, or use APA style
          with the <GuideCode>apacite</GuideCode> package if your department
          requires it.
        </li>
      </GuideUl>

      <GuideH2 id="faq">Research proposal template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
