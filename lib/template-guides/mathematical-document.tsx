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
    question: "What packages do I need for a math document in LaTeX?",
    answer:
      "For most mathematical writing, amsmath (display environments and \\eqref), amssymb (symbols such as \\mathbb{R}) and amsthm (theorem environments and proofs) are enough. This template loads exactly those three plus geometry for one-inch margins.",
  },
  {
    question: "How do I number theorems by section?",
    answer:
      "Add [section] to the \\newtheorem line, for example \\newtheorem{theorem}{Theorem}[section]. To make lemmas and definitions share the theorem's numbers, define them with the counter in square brackets: \\newtheorem{lemma}[theorem]{Lemma}.",
  },
  {
    question: "How do I reference an equation?",
    answer:
      "Put \\label{eq:ode} inside the equation environment and write \\eqref{eq:ode} in the text; amsmath prints the number in parentheses. Compile twice so the reference resolves.",
  },
  {
    question: "Does this mathematical document template work in Overleaf?",
    answer:
      "Yes. It uses the article class with amsmath, amsthm, amssymb and geometry, which are part of every TeX distribution, so it compiles with pdfLaTeX in Overleaf, Octree or locally.",
  },
];

export default function MathematicalDocumentGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A mathematical document template in LaTeX</GuideH2>
      <GuideP>
        This mathematical document LaTeX template is a minimal starting point for any
        math-heavy writing: a short paper, a proof write-up, a report for a course or a
        note to collaborators. It has the pieces you need and nothing else. The
        preamble loads <GuideCode>amsmath</GuideCode>, <GuideCode>amsthm</GuideCode> and{" "}
        <GuideCode>amssymb</GuideCode>, sets one-inch margins with{" "}
        <GuideCode>geometry</GuideCode>, and defines three numbered environments:{" "}
        <GuideCode>theorem</GuideCode>, <GuideCode>lemma</GuideCode> and{" "}
        <GuideCode>definition</GuideCode>.
      </GuideP>
      <GuideP>
        The sample document shows each element once so you can copy the pattern: a
        title, author and date, an abstract, an Introduction that sets up a function on
        the reals, a definition, a theorem stating the Gaussian integral, a proof
        environment that ends with the QED box, and a Main Results section with a
        numbered differential equation. Because it uses the standard{" "}
        <GuideCode>article</GuideCode> class at the default 10 pt size, the output looks
        like a typical preprint, and the same file works as a math template for Overleaf,
        in Octree or with a local TeX install. Start here when you want a clean, plain
        mathematical document and add packages as the content needs them, for example{" "}
        <GuideCode>graphicx</GuideCode> for figures or <GuideCode>hyperref</GuideCode>{" "}
        for clickable references. If you need richer structure from the start, such as
        a running header, remarks, corollaries or examples, the math notes template has
        them already defined.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title, author, date and abstract</li>
        <li>
          <GuideCode>theorem</GuideCode>, <GuideCode>lemma</GuideCode> and{" "}
          <GuideCode>definition</GuideCode> environments, each with its own counter
        </li>
        <li>A <GuideCode>proof</GuideCode> with automatic end-of-proof box</li>
        <li>Inline maths, a display integral and a numbered equation</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>main.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; compile twice once you add cross-references.</li>
        <li>
          Edit <GuideCode>\title</GuideCode> and <GuideCode>\author</GuideCode>, then
          write sections with <GuideCode>\section</GuideCode> and results with the
          theorem environments.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Number results and equations by section.</strong> Replace the three{" "}
        <GuideCode>\newtheorem</GuideCode> lines so everything shares one counter, and
        number equations as (1.1), (1.2):
      </GuideP>
      <GuidePre>{`\\newtheorem{theorem}{Theorem}[section]
\\newtheorem{lemma}[theorem]{Lemma}
\\theoremstyle{definition}
\\newtheorem{definition}[theorem]{Definition}
\\numberwithin{equation}{section}`}</GuidePre>
      <GuideP>
        <strong>Label and cite equations.</strong> Give the equation a label and refer
        to it with <GuideCode>\eqref</GuideCode>:
      </GuideP>
      <GuidePre>{`\\begin{equation}
\\frac{dy}{dx} = f(x,y) \\label{eq:ode}
\\end{equation}
Every solution of \\eqref{eq:ode} is differentiable.`}</GuidePre>
      <GuideP>
        <strong>Multi-line derivations.</strong> <GuideCode>amsmath</GuideCode> is loaded,
        so use <GuideCode>align</GuideCode> with <GuideCode>&amp;</GuideCode> before each
        relation sign to line up a chain of equalities.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/math-notes">math notes</GuideLink>,{" "}
        <GuideLink href="/templates/article-template">article</GuideLink> and{" "}
        <GuideLink href="/templates/journal-article">journal article</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Mathematical document FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
