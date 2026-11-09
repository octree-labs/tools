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
    question: "Can I use this cover letter template in Overleaf?",
    answer:
      "Yes. It uses the standard letter class and loads only geometry and hyperref, all part of every TeX distribution. Paste the source into a blank Overleaf project, Octree or a local TeX Live or MiKTeX install and it compiles unchanged with pdfLaTeX.",
  },
  {
    question: "Is this a cover letter or an application letter template?",
    answer:
      "Both. A cover letter and a job application letter have the same structure: your address, the date, the recipient, a salutation, three or four paragraphs and a closing. The same template works for academic applications, internships, graduate school and motivation letters; only the wording of the paragraphs changes.",
  },
  {
    question: "How do I change or remove the date?",
    answer:
      "The letter class prints \\today under your address. To fix a date, add \\date{12 March 2027} to the preamble. To remove it, use \\date{} instead.",
  },
  {
    question: "How do I mention an enclosed resume?",
    answer:
      "Add \\encl{Resume} after \\closing{Sincerely,} and the letter prints an 'encl:' line under the signature. \\cc{Name} adds a copy line in the same way, and \\ps{P.S. ...} adds a postscript.",
  },
  {
    question: "How do I keep the cover letter to one page?",
    answer:
      "Keep the body to three or four short paragraphs, which is what hiring managers expect anyway. If it still spills over, reduce the margin in \\usepackage[margin=1in]{geometry} to 0.8in or switch the class option from 11pt to 10pt.",
  },
];

export default function CoverLetterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A cover letter template in LaTeX</GuideH2>
      <GuideP>
        This is a cover letter template in LaTeX that also works as a LaTeX application
        letter template for jobs, internships, graduate school and academic positions. It
        is built on the standard <GuideCode>letter</GuideCode> document class, which
        handles the layout a formal letter needs: your return address and the date at the
        top right, the recipient address block on the left, the salutation, the body and
        a closing with your typed name underneath.
      </GuideP>
      <GuideP>
        Because the template loads only <GuideCode>geometry</GuideCode> and{" "}
        <GuideCode>hyperref</GuideCode>, it compiles with pdfLaTeX in Overleaf, Octree or
        any local TeX install without changes. The body is a four-paragraph application
        letter with square-bracket placeholders such as{" "}
        <GuideCode>[Position Title]</GuideCode> and <GuideCode>[Company Name]</GuideCode>:
        an opening that names the role, a paragraph of concrete achievements, a
        paragraph on why you want this employer, and a short close asking for an
        interview.
      </GuideP>
      <GuideP>
        Writing the cover letter in LaTeX makes the most sense when your resume is also
        LaTeX: the fonts, margins and header match, and you can keep one letter file per
        application under version control. Pair it with the{" "}
        <GuideLink href="/templates/resume">LaTeX resume template</GuideLink> or{" "}
        <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{letter}"}</GuideCode> with 1 inch margins
        </li>
        <li>
          Sender block from <GuideCode>\address</GuideCode> (address, phone, email) and
          an automatic date
        </li>
        <li>
          Recipient block in <GuideCode>{"\\begin{letter}{...}"}</GuideCode>
        </li>
        <li>
          <GuideCode>\opening</GuideCode> salutation and <GuideCode>\closing</GuideCode>{" "}
          with the name from <GuideCode>\signature</GuideCode>
        </li>
        <li>Four placeholder paragraphs for a job application</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>letter.tex</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX. XeLaTeX or LuaLaTeX are only needed if you add{" "}
          <GuideCode>fontspec</GuideCode> to match a resume set in a system font.
        </li>
        <li>
          In the preamble, set <GuideCode>\signature</GuideCode> to your name and{" "}
          <GuideCode>\address</GuideCode> to your contact lines, separated by{" "}
          <GuideCode>\\</GuideCode>.
        </li>
        <li>
          Replace the recipient lines in <GuideCode>{"\\begin{letter}{...}"}</GuideCode>{" "}
          and the name in <GuideCode>\opening</GuideCode>.
        </li>
        <li>
          Fill in every square-bracket placeholder, then search the file for{" "}
          <GuideCode>[</GuideCode> to make sure none are left.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Make your email and portfolio clickable.</strong> hyperref is already
        loaded, so use <GuideCode>\href</GuideCode> in the address block and hide the
        coloured link boxes:
      </GuideP>
      <GuidePre>{`\\hypersetup{hidelinks}
\\address{Your Name\\\\City, State ZIP\\\\
  \\href{mailto:you@example.com}{you@example.com}\\\\
  \\url{https://example.com}}`}</GuidePre>
      <GuideP>
        <strong>Add enclosures and a fixed date.</strong> The letter class has commands
        for the lines that follow the signature:
      </GuideP>
      <GuidePre>{`\\date{12 March 2027}   % in the preamble; \\date{} removes it

% ... after \\closing{Sincerely,}
\\encl{Resume, transcript}
\\cc{Dr.~Jane Smith}`}</GuidePre>
      <GuideP>
        <strong>Reuse one file for many applications.</strong> Define the company and
        role once in the preamble and use the macros in the body, so each new
        application only changes two lines:
      </GuideP>
      <GuidePre>{`\\newcommand{\\company}{Acme Corp}
\\newcommand{\\role}{Data Scientist}

% in the body
I am applying for the \\role{} position at \\company.`}</GuidePre>

      <GuideH2 id="faq">Cover letter template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
