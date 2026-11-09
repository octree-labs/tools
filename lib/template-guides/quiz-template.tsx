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
    question: "How do I make a quiz in LaTeX?",
    answer:
      "Write the questions as a numbered enumerate list, put the points in bold at the start of each item, list multiple-choice options in a nested enumerate with label=(\\alph*), and leave answer space with \\vspace. This template does all of that on the plain article class, with a title, name and date lines and an instructions line.",
  },
  {
    question: "How many points is the sample quiz worth?",
    answer:
      "The five sample questions are worth 5, 10, 15, 20 and 10 points, 60 in total, with a 20-minute time limit stated in the instructions. The points are typed by hand, so update them and the instructions when you change questions.",
  },
  {
    question: "How do I make an answer key from the same file?",
    answer:
      "Load the comment package, declare \\includecomment{answer} and put each answer in \\begin{answer} ... \\end{answer} under its question. Switch the declaration to \\excludecomment{answer} to print the student version without answers.",
  },
  {
    question: "Does this quiz template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, amsmath and enumitem, all part of TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function QuizTemplateGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A quiz template in LaTeX</GuideH2>
      <GuideP>
        This quiz LaTeX template is a short, printable test for a class, tutorial or
        training session. It has a centred title (&quot;Quiz - Topic Name&quot;) and course
        name, underlined lines for the student&apos;s name and date, and a one-line
        instruction with a time limit. The questions are a numbered list with the point
        value for each in bold, and each one is followed by blank space sized for the
        expected answer.
      </GuideP>
      <GuideP>
        The sample shows five common question types so you can copy whichever you need:
        a multiple-choice question with options lettered (a) to (d), a true-or-false
        statement, a short-answer equation to solve, a show-your-work integral, and a
        one-sentence explanation. Together they total 60 points with a 20-minute limit.
        Numbering and option letters come from <GuideCode>enumitem</GuideCode>, so
        adding, removing or reordering questions renumbers everything automatically,
        and <GuideCode>amsmath</GuideCode> handles the mathematics. The document is the
        standard <GuideCode>article</GuideCode> class at 12 pt with one-inch margins and
        no special exam class, which keeps every part easy to edit; it compiles as a
        quiz template for Overleaf, in Octree or with any local TeX install. Although
        the sample is maths-flavoured, the structure works for any subject: replace the
        questions, adjust the <GuideCode>\vspace</GuideCode> after each one, and update
        the time limit.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title, course name, name and date lines</li>
        <li>Instructions with a time limit</li>
        <li>Five question types: multiple choice, true/false, short answer, worked problem, explanation</li>
        <li>Bold point values and sized answer space for each question</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>quiz.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>Edit the title, course name and the instructions line.</li>
        <li>
          Replace each <GuideCode>\item</GuideCode>; for multiple choice, keep the nested{" "}
          <GuideCode>{"\\begin{enumerate}[label=(\\alph*)]"}</GuideCode> list.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Multiple-choice options on one line.</strong> Short options waste
        vertical space as a list. Load enumitem with the <GuideCode>inline</GuideCode>{" "}
        option and use <GuideCode>enumerate*</GuideCode>:
      </GuideP>
      <GuidePre>{`\\usepackage[inline]{enumitem}
...
\\item \\textbf{(5 points)} Multiple Choice: What is $2 + 2$?\\\\
\\begin{enumerate*}[label=(\\alph*), itemjoin=\\qquad]
\\item 3 \\item 4 \\item 5 \\item 6
\\end{enumerate*}`}</GuidePre>
      <GuideP>
        <strong>Tick boxes for true or false.</strong> Add{" "}
        <GuideCode>{"\\usepackage{amssymb}"}</GuideCode> (the template loads only{" "}
        <GuideCode>amsmath</GuideCode>) and write{" "}
        <GuideCode>{"$\\square$ True \\qquad $\\square$ False"}</GuideCode> under the
        statement.
      </GuideP>
      <GuideP>
        <strong>Answer key in the same file.</strong>
      </GuideP>
      <GuidePre>{`\\usepackage{comment}
\\includecomment{answer}   % \\excludecomment{answer} for the student copy

\\item \\textbf{(15 points)} Short Answer: Solve for $x$: \\[ 3x + 7 = 22 \\]
\\begin{answer}
\\textbf{Answer:} $x = 5$
\\end{answer}`}</GuidePre>

      <GuideP>
        Related templates: <GuideLink href="/templates/math-exam">math exam</GuideLink>,{" "}
        <GuideLink href="/templates/worksheet">worksheet</GuideLink> and{" "}
        <GuideLink href="/templates/interactive-flashcard">interactive flashcards</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Quiz template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
