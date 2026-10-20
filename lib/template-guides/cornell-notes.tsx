import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
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
    question: "What is the Cornell method of note taking?",
    answer:
      "A page layout and a routine developed by Walter Pauk at Cornell University in the 1950s. Each page is split into a wide notes column on the right, a narrow cue column on the left and a summary box at the bottom. You write notes during class, add questions and keywords to the cue column afterwards, and sum the page up in a sentence or two. Reviewing means covering the notes and answering the cues from memory.",
  },
  {
    question: "What are the dimensions of a Cornell notes page?",
    answer:
      "The usual proportions on US letter paper are a cue column about 2.5 inches wide, a notes column taking the rest of the width, and a summary area about 2 inches tall across the bottom. This template uses exactly those values with half-inch margins, so the notes column is 5 inches wide and the ruled area is about 7.4 inches tall. Each is a \\setlength line you can change.",
  },
  {
    question: "Can I get the Cornell notes template as a PDF?",
    answer:
      "Yes. The preview at the top of this page is the compiled PDF: the filled example page followed by three blank pages. Download it and print it as is, or open the template, change the header text or the number of pages, and compile your own PDF. Print at 100% scale (not Fit to page) so the half-inch margins and 0.3-inch rules stay accurate.",
  },
  {
    question: "How do I print a pack of blank Cornell pages?",
    answer:
      "Each \\cornellpage{}{}{} line in the document produces one blank sheet, so paste the line as many times as you need, or wrap it in a loop: \\newcount\\n \\loop\\ifnum\\n<20 \\cornellpage{}{}{}\\advance\\n by 1 \\repeat. Delete the \\cornellnotes example block if you want the pack to start with a blank page. Pre-fill the class name and leave Topic and Date empty to write them in by hand.",
  },
  {
    question: "Can I type my notes into the template instead of printing it?",
    answer:
      "Yes. \\cornellnotes{Topic}{Class}{Date}{cues}{notes}{summary} takes the three text areas as arguments, and the example page in the template shows itemize lists, bold run-in headings and emphasis inside them. The typed notes get a white background so they sit over the ruled lines. One page holds roughly 40 lines of notes at the default \\small size; for a longer lecture call the macro again for a second page.",
  },
  {
    question: "Does this compile with pdflatex, and does it work in Overleaf?",
    answer:
      "Yes to both. The template only uses article, geometry, tikz, xcolor, helvet and enumitem, which are in every TeX Live, MiKTeX and Overleaf installation. The frame is positioned with TikZ remember picture, so the first compile may print a warning asking you to rerun; latexmk, Overleaf and Octree do the second pass automatically.",
  },
  {
    question: "How do I change to A4 paper?",
    answer:
      "Replace letterpaper with a4paper in both the \\documentclass options and the geometry options. The columns are defined relative to \\textwidth and \\textheight, so the layout stretches to the new page: the cue column stays 2.5 in, the notes column becomes slightly narrower and the ruled area slightly taller.",
  },
];

export default function CornellNotesGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this Cornell notes template?</GuideH2>
      <GuideP>
        This is a free, printable Cornell notes template written in LaTeX. Every page carries
        the classic Cornell layout: a header row for the topic, class, date and page number; a
        2.5-inch cue column on the left for questions and keywords; a wide, lightly ruled notes
        column on the right; and a 2-inch summary box across the bottom. The compiled PDF opens
        with a filled example page that shows how the cue column, the notes and the summary
        relate, followed by three blank pages ready to print. Add a line to the source and you
        get another blank sheet.
      </GuideP>
      <GuideP>
        Unlike a scanned worksheet or a fixed PDF, this Cornell note taking template is one
        short file you can adapt. The column widths, the summary height, the rule spacing and
        the padding are all <GuideCode>\setlength</GuideCode> values at the top of the
        preamble; the frame is drawn with TikZ once per page by a single macro, so changing a
        number changes every page. It compiles with plain <GuideCode>pdflatex</GuideCode> on
        any TeX Live or MiKTeX install and in Overleaf, with no images and no shell escape.
      </GuideP>

      <GuideH2 id="layout">The Cornell layout, part by part</GuideH2>
      <GuideTable
        headers={["Area", "Size in the template", "What goes there"]}
        rows={[
          [
            "Header row",
            "0.6 in tall, full width",
            "Topic, class, date and an automatic page number",
          ],
          [
            "Cue column",
            "2.5 in wide (\\cuewidth)",
            "Questions, keywords and prompts written after the lecture",
          ],
          [
            "Notes column",
            "5 in wide, ruled every 0.3 in (\\rulespacing)",
            "Main ideas in short lines during the lecture; skip a line between topics",
          ],
          [
            "Summary box",
            "2 in tall, full width (\\summaryheight)",
            "One or two sentences in your own words, written within a day",
          ],
        ]}
      />
      <GuideP>
        Letter paper with half-inch margins leaves a 7.5-by-10-inch frame, so the notes column
        takes the 5 inches left over by the cue column and the ruled area is about 7.4 inches
        tall, which gives 23 ruled lines. The dimensions follow the proportions commonly used
        for Cornell note paper; if your school hands out a different sheet, copy its numbers
        into the length definitions.
      </GuideP>

      <GuideH2 id="method">How to use the Cornell method</GuideH2>
      <GuideP>
        The template is only half of the Cornell system; the other half is the routine, often
        taught as the five R&apos;s. The filled example page in the preview walks through it.
      </GuideP>
      <GuideOl>
        <li>
          <strong>Record.</strong> During class, write in the notes column only. Use short
          phrases, abbreviations and your own words; leave the cue column empty.
        </li>
        <li>
          <strong>Reduce.</strong> As soon as possible afterwards, read the notes and write a
          question or keyword in the cue column beside each main idea.
        </li>
        <li>
          <strong>Recite.</strong> Cover the notes column, read each cue aloud and answer it
          from memory. Uncover and check.
        </li>
        <li>
          <strong>Reflect.</strong> Ask how the material connects to what you already know and
          where it is likely to be tested.
        </li>
        <li>
          <strong>Review.</strong> Spend ten minutes a week reciting from older pages. The
          summary box is what you reread first.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Lengths you can edit</GuideH3>
      <GuidePre>{`\\newlength{\\cuewidth}       \\setlength{\\cuewidth}{2.5in}      % cue / questions column
\\newlength{\\headerheight}   \\setlength{\\headerheight}{0.6in}  % Topic / Class / Date / Page row
\\newlength{\\summaryheight}  \\setlength{\\summaryheight}{2in}   % summary box at the bottom
\\newlength{\\rulespacing}    \\setlength{\\rulespacing}{0.3in}   % distance between ruled lines
\\newcommand{\\showrules}{1}  % 1 = ruled lines in the notes column, 0 = plain`}</GuidePre>
      <GuideP>
        The notes column width and the body height are computed from these and from the page
        size, so you never set them by hand. Set <GuideCode>\showrules</GuideCode> to 0 for an
        unlined notes column, or change the rule spacing to 0.25 in for narrow ruled paper.
      </GuideP>
      <GuideH3>The page macros</GuideH3>
      <GuidePre>{`\\cornellpage{Topic}{Class}{Date}                          % one blank page
\\cornellnotes{Topic}{Class}{Date}{Cues}{Notes}{Summary}   % one filled page`}</GuidePre>
      <GuideP>
        Both call the same internal <GuideCode>\cornelldraw</GuideCode> macro, which opens a{" "}
        <GuideCode>tikzpicture</GuideCode> with <GuideCode>remember picture, overlay</GuideCode>,
        anchors the frame to the top-left corner of the text area, shades the header and
        summary, draws the rules with a <GuideCode>\foreach</GuideCode> loop, places the
        labels and any typed content as nodes, strokes the frame last and ends with{" "}
        <GuideCode>\newpage</GuideCode>. The page number in the header is{" "}
        <GuideCode>\thepage</GuideCode>, so the footer is left empty with{" "}
        <GuideCode>\pagestyle{"{empty}"}</GuideCode>.
      </GuideP>
      <GuideH3>Typed content</GuideH3>
      <GuideP>
        The three content arguments are ordinary LaTeX inside a fixed-width node, so{" "}
        <GuideCode>itemize</GuideCode>, <GuideCode>\textbf</GuideCode> and{" "}
        <GuideCode>\emph</GuideCode> all work. The example page uses{" "}
        <GuideCode>\\[6pt]</GuideCode> between cue questions so each one lines up roughly with
        the idea it points to. The notes node gets a white fill when it has content, so typed
        text covers the rules instead of sitting across them.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>More or fewer blank pages.</strong> Each{" "}
          <GuideCode>\cornellpage{"{}{}{}"}</GuideCode> line is one sheet; copy or delete lines.
          Pre-fill the class argument if every page is for the same course.
        </li>
        <li>
          <strong>No example page.</strong> Delete the <GuideCode>\cornellnotes</GuideCode>{" "}
          block so the PDF is only blank pages, which is what most people print.
        </li>
        <li>
          <strong>Wider cue column.</strong> Some schools use 3 in; change{" "}
          <GuideCode>\cuewidth</GuideCode> and the notes column shrinks to match.
        </li>
        <li>
          <strong>Colours.</strong> The four <GuideCode>\definecolor</GuideCode> lines set the
          frame, the rules, the labels and the shading. Set <GuideCode>boxfill</GuideCode> to
          white for a toner-free print.
        </li>
        <li>
          <strong>Font.</strong> The template loads <GuideCode>helvet</GuideCode> for a sans
          serif look; remove those two lines for Computer Modern, or load{" "}
          <GuideCode>newtxtext</GuideCode> for Times.
        </li>
        <li>
          <strong>Field labels.</strong> The header field names and the column labels are
          literal text in <GuideCode>\cornelldraw</GuideCode>; translate them or rename
          Topic to Lecture there.
        </li>
      </GuideUl>

      <GuideH2 id="mistakes">Common mistakes and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>The frame is shifted on the first compile.</strong> TikZ needs a second pass
          to resolve <GuideCode>remember picture</GuideCode> coordinates. Compile again, or
          use <GuideCode>latexmk</GuideCode>, which reruns for you.
        </li>
        <li>
          <strong>The rules overshoot the frame after changing a width.</strong>{" "}
          <GuideCode>\noteswidth</GuideCode> and <GuideCode>\bodyheight</GuideCode> are
          computed once in the preamble, so change <GuideCode>\cuewidth</GuideCode>,{" "}
          <GuideCode>\headerheight</GuideCode> and <GuideCode>\summaryheight</GuideCode> on
          their <GuideCode>\setlength</GuideCode> lines there, not after{" "}
          <GuideCode>\begin{"{document}"}</GuideCode>.
        </li>
        <li>
          <strong>Typed notes overflow the page.</strong> A node does not break across pages.
          Split long notes into two <GuideCode>\cornellnotes</GuideCode> calls.
        </li>
        <li>
          <strong>Rules do not reach the summary box.</strong> The loop draws whole rule
          spacings only; choose a <GuideCode>\rulespacing</GuideCode> that divides the body
          height, or accept a slightly larger last gap.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile and print</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> above. Edit the header
          text, add or remove page lines and download the PDF from the preview.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste the source into a blank project; TikZ and the
          other packages are preinstalled and the recompile handles the second pass.
        </li>
        <li>
          <strong>Locally:</strong> save as <GuideCode>cornell.tex</GuideCode> and run
          <GuidePre>{`latexmk -pdf cornell.tex
# or
pdflatex cornell.tex && pdflatex cornell.tex`}</GuidePre>
          Print at 100% scale so the measurements on paper match the lengths in the source.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Layout"]}
        rows={[
          [
            <strong key="c">Cornell Notes</strong>,
            "Lecture and reading notes you will review for exams",
            "Cue column, ruled notes column, summary box",
          ],
          [
            <GuideLink key="l" href="/templates/lecture-notes">
              Lecture Notes
            </GuideLink>,
            "Typed notes with theorems, definitions and sections",
            "Article-style running text",
          ],
          [
            <GuideLink key="w" href="/templates/worksheet">
              Worksheet
            </GuideLink>,
            "Handouts with numbered exercises and answer space",
            "Problems with blank areas",
          ],
          [
            <GuideLink key="h" href="/templates/homework">
              Homework Template
            </GuideLink>,
            "Submitted problem sets",
            "Header block and numbered problems",
          ],
        ]}
      />

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
