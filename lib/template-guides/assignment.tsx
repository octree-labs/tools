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
    question: "Is this assignment template for students or teachers?",
    answer:
      "Both. As written it is a problem sheet: the title is the assignment name, the author line holds the course and the date line holds the due date, with Instructions and Submission Guidelines sections for the person setting the work. Students can keep the same file and write their answers under each Solution: label.",
  },
  {
    question: "Does this assignment template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath and enumitem, all part of TeX Live, so it compiles unchanged in Overleaf, Octree or a local install with pdfLaTeX.",
  },
  {
    question: "How do I add parts (a), (b), (c) to a problem?",
    answer:
      "enumitem is already loaded, so write \\begin{enumerate}[label=(\\alph*)] with one \\item per part. Use label=(\\roman*) for (i), (ii), (iii).",
  },
  {
    question: "How do I hide the solutions when handing the assignment out?",
    answer:
      "Wrap each answer in a macro you can switch off, for example \\newcommand{\\solution}[1]{\\par\\textbf{Solution:} #1} for the answer key, and redefine it as \\newcommand{\\solution}[1]{} to print the blank version from the same file.",
  },
];

export default function AssignmentGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An assignment template in LaTeX</GuideH2>
      <GuideP>
        This assignment template in LaTeX is a minimal problem sheet for a course: a
        title block, instructions, numbered problems with space for solutions, and
        submission guidelines. It uses the standard <GuideCode>article</GuideCode>{" "}
        class with 1 inch margins and only three packages,{" "}
        <GuideCode>geometry</GuideCode>, <GuideCode>amsmath</GuideCode> and{" "}
        <GuideCode>enumitem</GuideCode>, so it compiles first time in Overleaf, Octree
        or any TeX install and is easy to read and change even if you are new to LaTeX.
      </GuideP>
      <GuideP>
        The title block is repurposed for coursework: <GuideCode>\title</GuideCode>{" "}
        holds the assignment name, <GuideCode>\author</GuideCode> the course name and{" "}
        <GuideCode>\date</GuideCode> the due date, so <GuideCode>\maketitle</GuideCode>{" "}
        prints a centred header without any custom macros. Problems are unnumbered
        subsections (<GuideCode>{"\\subsection*{Problem 1}"}</GuideCode>), each
        followed by a bold Solution: label, and Problem 3 shows a displayed integral
        written with <GuideCode>{"\\[ ... \\]"}</GuideCode>. Teachers can use it to
        set problem sets and quizzes; students can paste the questions in and type
        their answers below each label. If you want a header with the course number
        and due date on every page, or worked example solutions, the{" "}
        <GuideLink href="/templates/homework">homework template</GuideLink> adds a{" "}
        <GuideCode>fancyhdr</GuideCode> header and <GuideCode>amsthm</GuideCode>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>article</GuideCode> class with 1 inch margins
        </li>
        <li>Title, course and due date printed by <GuideCode>\maketitle</GuideCode></li>
        <li>Instructions and Submission Guidelines sections</li>
        <li>Three problems, each with a Solution: label</li>
        <li>
          <GuideCode>amsmath</GuideCode> for equations and{" "}
          <GuideCode>enumitem</GuideCode> for custom lists
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>assignment.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; no bibliography or images are needed.</li>
        <li>
          Set <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> (course)
          and <GuideCode>\date</GuideCode> (due date) in the preamble.
        </li>
        <li>
          Copy a <GuideCode>{"\\subsection*{Problem N}"}</GuideCode> block for each
          question and replace the text.
        </li>
        <li>Edit the Instructions and Submission Guidelines for your course.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add parts and point values.</strong> Put the marks in the heading and
        use enumitem&apos;s <GuideCode>label</GuideCode> key for lettered parts:
      </GuideP>
      <GuidePre>{`\\subsection*{Problem 1 (10 points)}
Let $f(x) = x^3 - 3x$.
\\begin{enumerate}[label=(\\alph*)]
  \\item Find $f'(x)$. (3 points)
  \\item Find the critical points of $f$. (3 points)
  \\item Classify each critical point. (4 points)
\\end{enumerate}`}</GuidePre>
      <GuideP>
        <strong>Show multi-step working.</strong> amsmath&apos;s{" "}
        <GuideCode>align*</GuideCode> lines up each step on the equals sign, which is
        clearer than separate displays:
      </GuideP>
      <GuidePre>{`\\textbf{Solution:}
\\begin{align*}
  \\int_0^1 x^2 \\, dx &= \\left[ \\frac{x^3}{3} \\right]_0^1 \\\\
                     &= \\frac{1}{3} - 0 = \\frac{1}{3}
\\end{align*}`}</GuidePre>
      <GuideP>
        <strong>Print a blank sheet and an answer key from one file.</strong> Define
        a <GuideCode>\solution</GuideCode> macro in the preamble and switch it with
        one line:
      </GuideP>
      <GuidePre>{`\\newif\\ifanswers
\\answerstrue   % comment out for the student version
\\newcommand{\\solution}[1]{\\ifanswers\\par\\textbf{Solution:} #1\\par\\fi}

% in the body
\\solution{The integral equals $1/3$.}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/homework">homework</GuideLink>,{" "}
        <GuideLink href="/templates/worksheet">worksheet</GuideLink> and{" "}
        <GuideLink href="/templates/grading-rubric">grading rubric</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Assignment template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
