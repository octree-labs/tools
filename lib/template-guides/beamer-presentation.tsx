import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "Does this Beamer template work in Overleaf?",
    answer:
      "Yes. It uses only the beamer document class with the built-in Madrid theme and the default colour theme, and loads no extra packages. Paste the source into a blank Overleaf project, Octree or any TeX Live or MiKTeX install and it compiles unchanged with pdfLaTeX, which is the Overleaf default.",
  },
  {
    question: "How do I make the slides 16:9 instead of 4:3?",
    answer:
      "Add the aspectratio option to the class line: \\documentclass[aspectratio=169]{beamer}. Beamer's default is 4:3 (128 by 96 mm); 169 gives 160 by 90 mm, which fills modern projectors and video calls. 1610 and 43 are also accepted.",
  },
  {
    question: "Which Beamer themes can I use instead of Madrid?",
    answer:
      "Any theme that ships with beamer works by changing \\usetheme{Madrid}: AnnArbor, Berlin, Boadilla, CambridgeUS, Copenhagen, Darmstadt, Frankfurt, Singapore and Warsaw are common choices. Colour themes such as beaver, crane, dolphin, seahorse and whale go in \\usecolortheme{...}. The third-party metropolis theme also works but looks best with XeLaTeX or LuaLaTeX because it is designed around the Fira fonts.",
  },
  {
    question: "Why does the footline show a long title or my full university name?",
    answer:
      "Madrid prints the author, institute, title and date in the footline using the short forms of those fields. Give each one a short version in square brackets, for example \\title[Short title]{Full Presentation Title} and \\institute[ABC]{Alpha Beta College}, and the footline uses the short text while the title slide keeps the long one.",
  },
  {
    question: "How do I make a printable handout from the slides?",
    answer:
      "Add handout to the class options (\\documentclass[handout]{beamer}). Overlays from \\pause and <2-> specifications collapse into one page per frame. To print several frames per sheet, add \\usepackage{pgfpages} and \\pgfpagesuselayout{4 on 1}[a4paper,border shrink=5mm] to the preamble.",
  },
];

export default function BeamerPresentationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A Beamer presentation template for LaTeX and Overleaf</GuideH2>
      <GuideP>
        This is a Beamer presentation template for LaTeX and Overleaf: a short, clean
        starting deck built on the standard <GuideCode>beamer</GuideCode> class with the
        built-in <GuideCode>Madrid</GuideCode> theme and the default colour theme. Madrid
        is one of the most widely used Beamer templates for academic talks because it
        gives you a coloured frame title bar, rounded blocks and a three-part footline
        with author, title and slide number, without any setup.
      </GuideP>
      <GuideP>
        The template loads no packages beyond Beamer itself, so it is an Overleaf Beamer
        template in the practical sense: paste it into a blank Overleaf project, open it
        in Octree, or compile it on any TeX Live or MiKTeX install, and it builds with
        pdfLaTeX on the first try. The sample deck has a title slide, a table of contents
        generated from <GuideCode>\section</GuideCode> commands, and Introduction, Main
        Content and Conclusion frames that you replace with your own material.
      </GuideP>
      <GuideP>
        If you are comparing Beamer templates, start here when you want the conventional
        look that reviewers and examiners expect for a conference talk, thesis defence or
        lecture. For a dark slide deck, see the{" "}
        <GuideLink href="/templates/beamer-dark">Beamer dark theme</GuideLink>, and for
        an A0 poster made with Beamer, the{" "}
        <GuideLink href="/templates/conference-poster">conference poster</GuideLink>{" "}
        template.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass{beamer}"}</GuideCode> with{" "}
          <GuideCode>{"\\usetheme{Madrid}"}</GuideCode> and{" "}
          <GuideCode>{"\\usecolortheme{default}"}</GuideCode>
        </li>
        <li>
          Title page from <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>,{" "}
          <GuideCode>\institute</GuideCode> and <GuideCode>\date</GuideCode>
        </li>
        <li>An automatic Table of Contents frame</li>
        <li>Three sections (Introduction, Main Content, Conclusion), each with a frame</li>
        <li>An itemize list frame you can copy for bullet slides</li>
        <li>No external packages, fonts or images, so it compiles anywhere</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree with a live PDF preview, or{" "}
          <em>View Source</em> and paste the code into a new Overleaf project or a local{" "}
          <GuideCode>slides.tex</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX (<GuideCode>latexmk -pdf slides.tex</GuideCode>). XeLaTeX
          and LuaLaTeX also work; you only need them if you switch to system fonts with{" "}
          <GuideCode>fontspec</GuideCode> or use the metropolis theme.
        </li>
        <li>
          Edit the title block at the top of the file: <GuideCode>\title</GuideCode>,{" "}
          <GuideCode>\author</GuideCode>, <GuideCode>\institute</GuideCode> and{" "}
          <GuideCode>\date</GuideCode> fill both the title slide and the footline.
        </li>
        <li>
          Add a slide by copying a <GuideCode>{"\\begin{frame} ... \\end{frame}"}</GuideCode>{" "}
          block. Put <GuideCode>\section</GuideCode> before a group of frames so it shows
          in the table of contents.
        </li>
        <li>Compile twice so the table of contents and slide numbers are up to date.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Change the theme and colours.</strong> The two lines after the class
        control the whole look. Swap the layout theme and colour theme independently, and
        remove the navigation symbols in the bottom right corner, which most speakers
        never use:
      </GuideP>
      <GuidePre>{`\\documentclass[aspectratio=169]{beamer}
\\usetheme{Madrid}
\\usecolortheme{beaver}   % or crane, dolphin, seahorse, whale
\\setbeamertemplate{navigation symbols}{}`}</GuidePre>
      <GuideP>
        <strong>Give the footline short fields.</strong> Madrid prints author, institute
        and title in the footline, so long names overflow. Use the optional short forms:
      </GuideP>
      <GuidePre>{`\\title[Short Title]{A Much Longer Presentation Title}
\\author[A.~Author]{Alice Author}
\\institute[UoX]{University of Example}`}</GuidePre>
      <GuideP>
        <strong>Show an outline at every section.</strong> Put this in the preamble and
        Beamer inserts an outline frame with the current section highlighted each time a
        new <GuideCode>\section</GuideCode> starts:
      </GuideP>
      <GuidePre>{`\\AtBeginSection[]{
  \\begin{frame}
    \\frametitle{Outline}
    \\tableofcontents[currentsection]
  \\end{frame}
}`}</GuidePre>

      <GuideH2 id="comparison">Related Beamer templates</GuideH2>
      <GuideTable
        headers={["Template", "Look", "Compiler"]}
        rows={[
          [<strong key="b">Beamer Presentation</strong>, "Madrid, light, 4:3", "pdfLaTeX"],
          [
            <GuideLink key="d" href="/templates/beamer-dark">
              Beamer Dark Theme
            </GuideLink>,
            "Madrid with a dark palette, 16:9",
            "pdfLaTeX",
          ],
          [
            <GuideLink key="p" href="/templates/conference-poster">
              Conference Poster
            </GuideLink>,
            "A0 beamerposter",
            "pdfLaTeX",
          ],
        ]}
      />

      <GuideH2 id="faq">Beamer template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
