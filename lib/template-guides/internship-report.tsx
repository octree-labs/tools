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
    question: "What should an internship report include?",
    answer:
      "Most universities ask for the parts this template already has: a title page, acknowledgments, an abstract, an introduction with objectives, a description of the company and department, what you did (often week by week, plus major projects), the skills you gained, challenges and how you handled them, conclusions and recommendations, and appendices with work samples. Check your department's guidelines for required sections, length and any supervisor sign-off.",
  },
  {
    question: "How long should an internship report be?",
    answer:
      "That is set by your programme, not by the template. The sample compiles to about thirteen pages because the report class starts every chapter on a new page; the length of your report comes from how much you write in each chapter.",
  },
  {
    question: "Can I include confidential company information?",
    answer:
      "Only with permission. Ask your supervisor what you may describe, anonymise client names and figures where needed, and leave out screenshots of internal systems unless they are approved. The Recommendations for the Company subsection is marked 'if appropriate' in the template for the same reason.",
  },
  {
    question: "Does this internship report template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry, graphicx and hyperref, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX. Compile twice so the table of contents is complete.",
  },
];

export default function InternshipReportGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An internship report template in LaTeX</GuideH2>
      <GuideP>
        This internship report template in LaTeX covers everything a university
        usually asks for at the end of a placement, from the title page to the
        appendices, with prompts in square brackets telling you what to write in each
        place. It uses the <GuideCode>report</GuideCode> class at 12 pt with 1 inch
        margins and <GuideCode>hyperref</GuideCode>, so the table of contents is
        clickable in the PDF.
      </GuideP>
      <GuideP>
        The title page lists the report title, your name and student ID, the company
        and department, the dates of the internship, and the department and
        university it is submitted to. Acknowledgments and an Abstract follow, both
        added to the table of contents. The body has six chapters: Introduction
        (background and four objectives), Company Overview (profile, department,
        organisational structure), Internship Activities (a week-by-week summary of
        an eight-week placement, major projects each described by Description, My
        Role, Skills Used and Outcome, and daily responsibilities), Skills and
        Learning Outcomes (technical skills, professional skills and how coursework
        applied), Challenges and Solutions, and Conclusions and Recommendations with
        advice for the company and for future interns. Unnumbered appendices hold
        work samples and photos. The structure suits engineering, computer science,
        business and science internships and co-op reports;
        rename or drop chapters to match your department&apos;s guidelines. If your
        placement was mainly a research project, the{" "}
        <GuideLink href="/templates/project-report">project report template</GuideLink>{" "}
        may be a closer fit.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page with student, company, duration and university</li>
        <li>Acknowledgments and Abstract listed in the contents</li>
        <li>Six chapters from Introduction to Conclusions and Recommendations</li>
        <li>Week-by-week activities and a reusable project description format</li>
        <li>Unnumbered appendices for work samples and photos</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>report.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents is complete.</li>
        <li>
          Fill in the title page: replace Student ID 12345, company, department,
          dates and university.
        </li>
        <li>
          Work through each chapter replacing the bracketed prompts; adjust the week
          ranges to your placement length.
        </li>
        <li>
          Write the Abstract last, in one paragraph, once the rest is done.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add a weekly log table.</strong> Many programmes ask for a log of
        tasks per week. A <GuideCode>p</GuideCode> column wraps long entries:
      </GuideP>
      <GuidePre>{`\\begin{tabular}{|c|p{9cm}|c|}
\\hline
\\textbf{Week} & \\textbf{Tasks completed} & \\textbf{Hours} \\\\
\\hline
1 & Orientation, safety training, set up development environment & 40 \\\\
\\hline
2 & Shadowed the data team; first ticket on the reporting pipeline & 40 \\\\
\\hline
\\end{tabular}`}</GuidePre>
      <GuideP>
        <strong>Put logos on the title page.</strong> graphicx is loaded; add the
        university and company logos at the top of the{" "}
        <GuideCode>titlepage</GuideCode>, sized by height:
      </GuideP>
      <GuidePre>{`\\begin{titlepage}
\\begin{center}
\\includegraphics[height=2cm]{logo}\\hfill
\\includegraphics[height=2cm]{logo}
\\vspace*{1cm}

{\\Large \\textbf{Internship Report}}\\\\[1cm]`}</GuidePre>
      <GuideP>
        <strong>Add a supervisor sign-off.</strong> If your department needs the
        company supervisor to confirm the report, add a declaration chapter after the
        Abstract:
      </GuideP>
      <GuidePre>{`\\chapter*{Supervisor Declaration}
\\addcontentsline{toc}{chapter}{Supervisor Declaration}
I confirm that the work described in this report was carried out by the student
during the internship period.

\\vspace{2cm}
\\begin{tabular}{@{}p{7cm}p{5cm}@{}}
\\rule{6cm}{0.4pt} & \\rule{4cm}{0.4pt} \\\\
Supervisor name and signature & Date \\\\
\\end{tabular}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/project-report">project report</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">technical report</GuideLink> and{" "}
        <GuideLink href="/templates/business-report">business report</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Internship report template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
