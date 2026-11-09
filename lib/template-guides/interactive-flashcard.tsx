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
    question: "How does the click-to-reveal work without JavaScript?",
    answer:
      "Each answer is covered by a black box placed on a PDF optional content group (a layer), created with the ocgx2 package. The box is also a link whose action switches that layer on or off, so clicking it hides the box and clicking again shows it. No JavaScript is involved; the PDF viewer only has to support layers and their toggle actions.",
  },
  {
    question: "Which PDF viewers support the hidden answers?",
    answer:
      "The template's header comment lists Evince, Okular, Chrome and Firefox. Support for PDF layers varies between viewers and versions, and a viewer that ignores them may show the boxes permanently or show the answers outright, so open the finished PDF in the viewer your students will actually use before you share it.",
  },
  {
    question: "Why do two answers reveal together?",
    answer:
      "Every \\reveal call needs a unique first argument, because it names the layer. If two calls share an ID such as q1, they share a layer and toggle together. Number the IDs per question (q1, q2, ...) or per section (f1, v1, ...) as the template does.",
  },
  {
    question: "Does this flashcard template compile in Overleaf?",
    answer:
      "Yes. ocgx2, TikZ (loaded through ocgx2's tikz option), hyperref and the AMS packages are all in TeX Live, so it compiles with pdfLaTeX in Overleaf, Octree or locally. To try the reveal effect, download the PDF and open it in a viewer that supports layers.",
  },
];

export default function InteractiveFlashcardGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An interactive flashcard and redacted quiz template in LaTeX</GuideH2>
      <GuideP>
        This interactive flashcard LaTeX template produces a self-testing study
        guide: every answer is hidden under a black box, and clicking the box in the
        PDF reveals it, clicking again hides it. It works like a redacted quiz you can
        reuse as often as you like, without printing answer sheets or folding paper.
      </GuideP>
      <GuideP>
        The effect comes from the <GuideCode>ocgx2</GuideCode> package, which creates
        PDF optional content groups (layers), loaded with its{" "}
        <GuideCode>tikz</GuideCode> option. The template defines a single command,{" "}
        <GuideCode>{"\\reveal{id}{answer}"}</GuideCode>: it measures the answer, draws
        a rounded black box of the same size over it on a layer named{" "}
        <GuideCode>id</GuideCode>, and makes the box a toggle for that layer.
        Because the box is sized from the answer, it works inline in a sentence, in a
        list item and even inside a displayed formula. The sample is a World History
        quick review with six questions on ancient civilisations and the medieval
        period, two formulas with hidden numerators and denominators (population
        growth rate and GDP per capita) and four vocabulary definitions. The page uses
        the <GuideCode>article</GuideCode> class with 1 inch margins and defines an{" "}
        <GuideCode>accent</GuideCode> colour that the sample does not use yet. Replace the questions with your
        own subject. For a printable quiz with an answer key, see the{" "}
        <GuideLink href="/templates/quiz-template">quiz template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          A <GuideCode>\reveal</GuideCode> command built on{" "}
          <GuideCode>ocgx2</GuideCode> and TikZ
        </li>
        <li>Six question-and-answer items in two sections</li>
        <li>Hidden terms inside two displayed formulas</li>
        <li>Four hidden vocabulary definitions in a list</li>
        <li>Instructions for the reader at the top of the page</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>flashcards.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Change the title, then replace each question and the second argument of
          its <GuideCode>\reveal</GuideCode>.
        </li>
        <li>
          Give every <GuideCode>\reveal</GuideCode> a unique first argument (q1, q2,
          f1, v1 ...).
        </li>
        <li>
          Download the PDF and test the boxes in the viewer you will use to study.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Hide a longer answer.</strong> <GuideCode>\reveal</GuideCode> measures
        its content as a single line. Wrap multi-line answers in a{" "}
        <GuideCode>\parbox</GuideCode> so the box covers a paragraph:
      </GuideP>
      <GuidePre>{`\\noindent \\textbf{7. Why did the Western Roman Empire decline?}\\\\
Answer: \\reveal{q7}{\\parbox[t]{0.8\\linewidth}{Several causes are usually
  cited together: political instability, economic strain, overreliance on
  mercenaries and pressure from migrating peoples.}}`}</GuidePre>
      <GuideP>
        <strong>Change the colour of the boxes.</strong> The fill is set inside the
        command definition. Use the template&apos;s <GuideCode>accent</GuideCode>{" "}
        colour, or any xcolor name, in the shutter node:
      </GuideP>
      <GuidePre>{`\\node[fill=accent, rounded corners=2pt, fit=(hidden_text), inner sep=2pt] {};`}</GuidePre>
      <GuideP>
        <strong>Make an answer key from the same file.</strong> The last argument of
        the shutter layer is its initial state. Change <GuideCode>on</GuideCode> to{" "}
        <GuideCode>off</GuideCode> in the definition and every answer starts visible;
        the boxes can still be toggled on:
      </GuideP>
      <GuidePre>{`\\begin{ocg}{shutter}{#1}{off}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/quiz-template">quiz</GuideLink>,{" "}
        <GuideLink href="/templates/cornell-notes">Cornell notes</GuideLink> and{" "}
        <GuideLink href="/templates/formula-sheet">formula sheet</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Interactive flashcard template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
