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
    question: "How do I make a worksheet in LaTeX?",
    answer:
      "Write the problems as an enumerate list so they are numbered automatically, and leave space after each with \\vspace, as this template does. Put the worksheet title in \\title and the topic in \\author, and use amsmath environments such as align* for systems of equations.",
  },
  {
    question: "How do I add a name and date line?",
    answer:
      "Add a line after \\maketitle: \\noindent Name: \\underline{\\hspace{6cm}} \\hfill Date: \\underline{\\hspace{3cm}}. Students then have a place to write before they start.",
  },
  {
    question: "Can I put the problems in two columns?",
    answer:
      "Yes. The template already loads multicol. Wrap the enumerate list in \\begin{multicols}{2} ... \\end{multicols}; reduce the \\vspace after each item if the columns become too long.",
  },
  {
    question: "Does this worksheet template work in Overleaf?",
    answer:
      "Yes. It uses only the article class with geometry, amsmath and multicol, so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function WorksheetGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A worksheet template in LaTeX</GuideH2>
      <GuideP>
        This worksheet LaTeX template is a simple, printable practice sheet for
        classroom work, homework or tutoring sessions. It has a title (&quot;Practice
        Worksheet&quot;) with the topic underneath, one section of numbered problems,
        and two centimetres of blank space after each problem for students to write
        their working. Because it contains nothing but a list and some spacing, it is
        quick to adapt for any subject and level: change the problems and the topic
        line and print.
      </GuideP>
      <GuideP>
        The sample problems are a short algebra and calculus warm-up: solving a linear
        equation, simplifying a rational expression, evaluating a definite integral of
        sine, differentiating a cubic, and solving a two-equation linear system
        written with an <GuideCode>align*</GuideCode> environment. Numbering is automatic
        from the <GuideCode>enumerate</GuideCode> list, so you can add, delete or reorder
        problems freely. The document is the standard <GuideCode>article</GuideCode>{" "}
        class at its default 10 pt size with one-inch margins, with{" "}
        <GuideCode>amsmath</GuideCode> for the mathematics and{" "}
        <GuideCode>multicol</GuideCode> loaded so you can switch to a two-column layout
        for short problems. It compiles as a worksheet template for Overleaf, in Octree
        or with any local TeX install. For numbered exercises grouped by topic, the math
        exercises template is a close relative; for graded work with point values, see
        the quiz and problem set templates.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title with worksheet name and topic</li>
        <li>Five numbered practice problems</li>
        <li>Blank working space after each problem</li>
        <li><GuideCode>multicol</GuideCode> loaded for a two-column layout</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>worksheet.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit <GuideCode>\title</GuideCode>, and put the topic in{" "}
          <GuideCode>\author</GuideCode>.
        </li>
        <li>
          Replace each <GuideCode>\item</GuideCode> and adjust the{" "}
          <GuideCode>\vspace{"{2cm}"}</GuideCode> to the space each answer needs.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Name and date line.</strong> Add this right after{" "}
        <GuideCode>\maketitle</GuideCode>:
      </GuideP>
      <GuidePre>{`\\noindent Name: \\underline{\\hspace{6cm}} \\hfill Date: \\underline{\\hspace{3cm}}`}</GuidePre>
      <GuideP>
        <strong>Two columns of short problems.</strong> Wrap the list in{" "}
        <GuideCode>multicols</GuideCode>, which is already loaded:
      </GuideP>
      <GuidePre>{`\\begin{multicols}{2}
\\begin{enumerate}
\\item Solve for $x$: $2x + 5 = 13$
\\vspace{2cm}
\\item Calculate: $\\int_0^{\\pi} \\sin(x)\\, dx$
\\vspace{2cm}
\\end{enumerate}
\\end{multicols}`}</GuidePre>
      <GuideP>
        <strong>Lettered sub-questions.</strong> Nest a second{" "}
        <GuideCode>enumerate</GuideCode> inside an item; LaTeX labels the inner list
        (a), (b), (c) automatically.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/math-exercises">math exercises</GuideLink>,{" "}
        <GuideLink href="/templates/quiz-template">quiz</GuideLink> and{" "}
        <GuideLink href="/templates/math-problem-set">math problem set</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Worksheet template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
