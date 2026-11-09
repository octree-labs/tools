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
    question: "What should a course syllabus include?",
    answer:
      "At minimum: course name and number, instructor contact details, meeting time and place, office hours, a course description, learning objectives, required materials, the grading breakdown, a week-by-week schedule and course policies such as attendance, late work and academic integrity. This template has a section for each. Many institutions also require statements on accessibility and support services; add them as extra \\section* blocks.",
  },
  {
    question: "How do I make the course schedule span several pages?",
    answer:
      "A tabular cannot break across pages. Load the longtable package and replace the schedule's tabular with a longtable using the same column specification; add \\endhead after the header row so it repeats on each page.",
  },
  {
    question: "How is the grade breakdown set up?",
    answer:
      "It is a two-column tabular with the component on the left and its weight on the right: Homework 30%, Midterm 25%, Final 25% and Project 20%, which adds up to 100%. Percent signs must be written as \\% in LaTeX.",
  },
  {
    question: "Does the syllabus template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, hyperref, array and xcolor, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function SyllabusGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A course syllabus template in LaTeX</GuideH2>
      <GuideP>
        This syllabus LaTeX template gives instructors and teaching assistants a clean,
        one-document course syllabus for a university or college class. The title block
        holds the course name and number, the instructor&apos;s name, department and
        email, and the semester, and the sections below cover the information students
        look for in the first week: when and where the class meets, office hours, what
        the course is about, what they will learn, what to buy, how they are graded,
        what happens each week and what the rules are.
      </GuideP>
      <GuideP>
        In order, the template has Course Information (time, location, office hours),
        Course Description, numbered Learning Objectives, Required Materials, a Grading
        table that splits the final grade into homework, midterm, final exam and
        project, a ruled Course Schedule table with Week, Topic and Assignment columns,
        and Course Policies on attendance, late work and academic integrity. It is the
        standard <GuideCode>article</GuideCode> class at 11 pt with one-inch margins and
        unnumbered <GuideCode>\section*</GuideCode> headings.{" "}
        <GuideCode>hyperref</GuideCode> is loaded so links to the course website or
        learning platform are clickable, <GuideCode>array</GuideCode> helps with table
        columns, and <GuideCode>xcolor</GuideCode> defines a dark-blue{" "}
        <GuideCode>headercolor</GuideCode> you can apply to headings. It compiles as a
        syllabus template for Overleaf, in Octree or with a local TeX install, and is
        easy to update each term by changing the dates and the schedule.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title block with course, instructor, contact and semester</li>
        <li>Course information, description, objectives and materials</li>
        <li>Grading breakdown table totalling 100%</li>
        <li>Weekly schedule table</li>
        <li>Attendance, late work and academic integrity policies</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>syllabus.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> and{" "}
          <GuideCode>\date</GuideCode> (the semester).
        </li>
        <li>
          Fill in each section, then add one row per week to the schedule table, ending
          each row with <GuideCode>\\</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Colour the headings.</strong> <GuideCode>headercolor</GuideCode> is
        defined but not yet used. Load <GuideCode>titlesec</GuideCode> to apply it to
        every <GuideCode>\section*</GuideCode>:
      </GuideP>
      <GuidePre>{`\\usepackage{titlesec}
\\titleformat*{\\section}{\\Large\\bfseries\\color{headercolor}}`}</GuidePre>
      <GuideP>
        <strong>A full-term schedule.</strong> For 14 or 15 weeks, switch to{" "}
        <GuideCode>longtable</GuideCode> so the table breaks across pages and repeats
        its header:
      </GuideP>
      <GuidePre>{`\\usepackage{longtable}
...
\\begin{longtable}{|l|p{6cm}|p{5cm}|}
\\hline
\\textbf{Week} & \\textbf{Topic} & \\textbf{Assignment} \\\\
\\hline
\\endhead
1 & Introduction & Reading Chapter 1 \\\\
2 & Topic 2 & HW 1 Due \\\\
\\hline
\\end{longtable}`}</GuidePre>
      <GuideP>
        <strong>Clickable contact details.</strong> With <GuideCode>hyperref</GuideCode>{" "}
        already loaded, write the email as{" "}
        <GuideCode>{"\\href{mailto:instructor@university.edu}{instructor@university.edu}"}</GuideCode>{" "}
        and the course site as <GuideCode>{"\\url{https://...}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/lecture-notes">lecture notes</GuideLink>,{" "}
        <GuideLink href="/templates/grading-rubric">grading rubric</GuideLink> and{" "}
        <GuideLink href="/templates/assignment">assignment</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Course syllabus template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
