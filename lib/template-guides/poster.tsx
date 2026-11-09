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
    question: "How do I make an academic poster in LaTeX?",
    answer:
      "Use a poster class such as tikzposter, which this template is built on. Set the paper size and orientation in \\documentclass, the title, authors and institute in the preamble, and write the content as \\block{Title}{Text} boxes arranged in \\begin{columns} with \\column{width}. The class handles the title bar, box styling and spacing.",
  },
  {
    question: "How do I change the poster theme?",
    answer:
      "Add a theme command after \\documentclass, for example \\usetheme{Rays}. tikzposter ships with several built-in themes, including Default, Rays, Basic, Simple, Envelope, Wave, Board, Autumn and Desert, plus separate colour styles you set with \\usecolorstyle.",
  },
  {
    question: "How do I change the poster size or make it landscape?",
    answer:
      "Change the class options. tikzposter supports a0paper, a1paper and a2paper and the portrait or landscape keyword, for example \\documentclass[25pt,a1paper,landscape]{tikzposter}. The 25pt option is the base font size; tikzposter accepts 12pt to 25pt.",
  },
  {
    question: "Does the tikzposter template compile in Overleaf?",
    answer:
      "Yes. tikzposter is part of TeX Live, so the file compiles with pdfLaTeX in Overleaf, Octree or a local install with no extra files. Large posters with many images can take longer to compile than a normal document.",
  },
];

export default function PosterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An academic poster template in LaTeX (tikzposter)</GuideH2>
      <GuideP>
        This academic poster LaTeX template uses the <GuideCode>tikzposter</GuideCode>{" "}
        class to produce a conference or research poster at A0 size in portrait
        orientation with a 25 pt base font, the largest the class offers, so text stays
        readable from a few metres away. The title bar at the top takes the{" "}
        <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> and{" "}
        <GuideCode>\institute</GuideCode> you set in the preamble, and everything below
        it is built from <GuideCode>\block</GuideCode> boxes.
      </GuideP>
      <GuideP>
        The sample layout follows the order most poster sessions expect: a full-width
        Abstract block, then two equal columns with Introduction and Methods on the left
        and Results and Conclusion on the right, and a full-width References block at the
        bottom. Columns are declared with <GuideCode>{"\\begin{columns}"}</GuideCode> and{" "}
        <GuideCode>{"\\column{0.5}"}</GuideCode>, where the number is the fraction of the
        poster width, so a three-column layout is a matter of writing{" "}
        <GuideCode>{"\\column{0.33}"}</GuideCode> three times. The template uses the
        default tikzposter theme and loads only <GuideCode>amsmath</GuideCode> on top of
        the class. tikzposter is part of TeX Live, which makes this a poster template
        for Overleaf, Octree or any local install. For a beamer-based alternative with a
        three-column research layout, see the conference poster template.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>A0 portrait <GuideCode>tikzposter</GuideCode> at 25 pt</li>
        <li>Title bar with title, authors and institute</li>
        <li>Full-width Abstract and References blocks</li>
        <li>Two-column body: Introduction, Methods, Results and Conclusion</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>poster.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Edit <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> and{" "}
          <GuideCode>\institute</GuideCode>, then the text inside each{" "}
          <GuideCode>{"\\block{...}{...}"}</GuideCode>.
        </li>
        <li>
          Check the size your conference asks for and set it in the class options before
          you add figures.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Pick a theme.</strong> One line after <GuideCode>\documentclass</GuideCode>{" "}
        restyles the title bar and every block:
      </GuideP>
      <GuidePre>{`\\documentclass[25pt,a0paper,portrait]{tikzposter}
\\usetheme{Rays}
\\usecolorstyle{Denmark}`}</GuidePre>
      <GuideP>
        <strong>Add a figure to a block.</strong> Load{" "}
        <GuideCode>graphicx</GuideCode> in the preamble and use tikzposter&apos;s{" "}
        <GuideCode>tikzfigure</GuideCode> environment, which adds a numbered caption;
        widths are relative to the block via <GuideCode>\linewidth</GuideCode>:
      </GuideP>
      <GuidePre>{`\\block{Results}{
  Key findings and data visualization.
  \\begin{tikzfigure}[Accuracy on the test set]
    \\includegraphics[width=0.9\\linewidth]{results}
  \\end{tikzfigure}
}`}</GuidePre>
      <GuideP>
        <strong>Uneven columns.</strong> Column widths need not be equal; for a wide
        results column use <GuideCode>{"\\column{0.4}"}</GuideCode> and{" "}
        <GuideCode>{"\\column{0.6}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/conference-poster">conference poster (beamerposter)</GuideLink>,{" "}
        <GuideLink href="/templates/beamer-presentation">Beamer presentation</GuideLink> and{" "}
        <GuideLink href="/templates/research-paper">research paper</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Academic poster template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
