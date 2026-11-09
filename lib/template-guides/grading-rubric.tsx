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
    question: "What kind of rubric is this?",
    answer:
      "A weighted points rubric: five criteria (Content, Organization, Writing Quality, Citations and Formatting) with a point weight and a one-line description each, adding up to 100, plus a letter-grade scale. For a full analytic rubric that describes each performance level, add level columns as shown in the customisation section.",
  },
  {
    question: "How do I change the weights?",
    answer:
      "Edit the Points column and keep the Total row in step; LaTeX does not add the numbers for you. The grading scale below the table is a plain list, so adjust the letter-grade bands there to match your institution.",
  },
  {
    question: "Why does adding \\rowcolor give an error?",
    answer:
      "\\rowcolor and \\cellcolor come from xcolor's table option. The template loads xcolor without it, so change the line to \\usepackage[table]{xcolor} rather than loading xcolor a second time, which causes an option clash.",
  },
  {
    question: "Does this grading rubric template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, array and xcolor, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function GradingRubricGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A grading rubric template in LaTeX</GuideH2>
      <GuideP>
        This grading rubric template in LaTeX gives instructors a clean, printable
        one-page rubric for essays, reports and projects. It uses the standard{" "}
        <GuideCode>article</GuideCode> class with 1 inch margins and a title block
        that reads Assignment Grading Rubric with the course name underneath, so it
        can be handed out with an assignment brief or attached to returned work.
      </GuideP>
      <GuideP>
        The core is a ruled table with three fixed-width columns (Criterion,
        Points and Description) built with <GuideCode>p</GuideCode> column types, so
        long descriptions wrap neatly inside their cells. The sample weights five
        criteria for a written assignment: Content 40 points, Organization 20,
        Writing Quality 20, Citations 10 and Formatting 10, with a bold Total row of
        100. Below the table, a Grading Scale list maps the score to letter grades
        from A (90 to 100) down to F (below 60). Because the rubric is plain LaTeX,
        you can keep one version per assignment in a course folder, reuse criteria
        between them, and print or share the PDF knowing it will look the same
        everywhere. The preamble already loads <GuideCode>array</GuideCode>, for
        column formatting, and <GuideCode>xcolor</GuideCode>, so shading a header row
        or adding columns for performance levels takes only a few lines. If you are
        also setting the assignment itself, the{" "}
        <GuideLink href="/templates/assignment">assignment template</GuideLink>{" "}
        uses the same simple structure.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block with rubric name and course</li>
        <li>A criteria table with points and descriptions</li>
        <li>Five weighted criteria totalling 100 points</li>
        <li>A letter-grade scale from A to F</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>rubric.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Set <GuideCode>\title</GuideCode> to the assignment and{" "}
          <GuideCode>\author</GuideCode> to the course.
        </li>
        <li>
          Edit the criteria rows; each row ends with <GuideCode>{"\\\\"}</GuideCode>{" "}
          and is followed by <GuideCode>\hline</GuideCode>.
        </li>
        <li>Update the Total row and the grading scale to match.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Turn it into an analytic rubric.</strong> Add a column per
        performance level and describe what each level looks like for each
        criterion. The widths below fit the 1 inch margins:
      </GuideP>
      <GuidePre>{`\\begin{tabular}{|p{2.2cm}|p{2.8cm}|p{2.8cm}|p{2.8cm}|p{2.8cm}|}
\\hline
\\textbf{Criterion} & \\textbf{Excellent (4)} & \\textbf{Good (3)}
  & \\textbf{Fair (2)} & \\textbf{Poor (1)} \\\\
\\hline
Content & Thorough, accurate, insightful & Accurate with minor gaps
  & Partial understanding & Major errors or missing \\\\
\\hline
Organization & Logical throughout & Mostly logical
  & Hard to follow in places & No clear structure \\\\
\\hline
\\end{tabular}`}</GuidePre>
      <GuideP>
        <strong>Shade the header row.</strong> Load xcolor with the{" "}
        <GuideCode>table</GuideCode> option (replace the existing line) and use{" "}
        <GuideCode>\rowcolor</GuideCode>:
      </GuideP>
      <GuidePre>{`\\usepackage[table]{xcolor}   % replaces \\usepackage{xcolor}

\\rowcolor{gray!20}
\\textbf{Criterion} & \\textbf{Points} & \\textbf{Description} \\\\`}</GuidePre>
      <GuideP>
        <strong>Add a column for marking.</strong> An empty Score column lets you
        grade on the printed sheet. Shrink the description to make room:
      </GuideP>
      <GuidePre>{`\\begin{tabular}{|p{3cm}|p{1.5cm}|p{7cm}|p{1.5cm}|}
\\hline
\\textbf{Criterion} & \\textbf{Points} & \\textbf{Description} & \\textbf{Score} \\\\
\\hline
Content & 40 & Demonstrates understanding of concepts & \\\\
\\hline
\\end{tabular}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/assignment">assignment</GuideLink>,{" "}
        <GuideLink href="/templates/syllabus">syllabus</GuideLink> and{" "}
        <GuideLink href="/templates/quiz-template">quiz</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Grading rubric template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
