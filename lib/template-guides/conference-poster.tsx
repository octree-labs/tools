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
    question: "Is a research poster the same as a conference poster?",
    answer:
      "In practice yes. A research poster summarises one study on a single large sheet; a conference poster is the same thing named after where it is shown. Both use the layout in this poster template: a title bar, three columns that move from Introduction to Conclusion, one or two large figures and a short reference list. Universities also use research posters for student showcases and thesis days, where the same file works unchanged.",
  },
  {
    question: "What size is an A0 poster and does this template print at A0?",
    answer:
      "A0 is 841 by 1189 mm (33.1 by 46.8 in). The template sets size=a0 and orientation=landscape in the beamerposter options, so the PDF page is exactly 1189 by 841 mm and can go straight to a large-format printer. Change size=a1 for a half-size poster or orientation=portrait for a vertical layout.",
  },
  {
    question: "How do I make a 36 x 48 inch poster for a US conference?",
    answer:
      "Replace the beamerposter options with size=custom,width=121.92,height=91.44 (centimetres, width first) for 48 by 36 landscape, or width=91.44,height=121.92 for portrait. Keep scale=1.3 and check that the three columns still fit; for portrait, change the column widths to 0.46 of the paper width and use two columns.",
  },
  {
    question: "Why beamerposter instead of tikzposter?",
    answer:
      "Both work. beamerposter reuses beamer blocks, columns and colour themes, so anyone who has made a Beamer presentation can edit it, and it compiles on every TeX distribution. tikzposter has more decorative block styles but its own syntax. This template uses beamerposter because it is the more common choice at machine learning and science conferences and is easier to restyle.",
  },
  {
    question: "Can I add my university logo and real figures?",
    answer:
      "Yes. The logos are TikZ placeholders drawn by the \\logoplaceholder command; replace each call with \\includegraphics[width=10cm]{logo.png}. The bar chart and pipeline diagram are also TikZ, so swap them for \\includegraphics of your exported PDF or PNG figures at the same width. Vector PDF figures print sharper than PNG at poster size.",
  },
  {
    question: "The text is too small or too large when printed. What do I change?",
    answer:
      "The scale option multiplies every font size. scale=1.3 gives roughly 30 pt body text on A0, which is readable from one metre. Use scale=1.4 or 1.5 for a less dense poster, or lower it if your content does not fit. Do not shrink the paper size to make text fit; print shops charge by the sheet and judges read from a distance.",
  },
];

export default function ConferencePosterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this research poster template?</GuideH2>
      <GuideP>
        This is a free research poster template written in LaTeX with the{" "}
        <GuideCode>beamerposter</GuideCode> package, made for academic conference
        poster sessions. It produces an A0 landscape sheet
        (1189 by 841 mm) with a coloured title bar holding the title, authors,
        affiliations and two logo placeholders, three equal columns of content blocks,
        and a footer with contact details. The sample content follows the structure
        most reviewers expect from a scientific poster: Introduction, Method, Results,
        Ablation, Key findings, Conclusion, References and Acknowledgements. Every
        figure is drawn with TikZ, so the file compiles on its own with pdfLaTeX and
        needs no image files until you are ready to add your own.
      </GuideP>
      <GuideP>
        Under the hood it is a one-frame Beamer document:{" "}
        <GuideCode>\documentclass[final,t]{"{beamer}"}</GuideCode> followed by{" "}
        <GuideCode>\usepackage[size=a0,orientation=landscape,scale=1.3]{"{beamerposter}"}</GuideCode>.
        That means everything you know from Beamer slides applies: blocks, alert
        blocks, example blocks, itemize lists, columns and colour themes all work
        unchanged, only larger.
      </GuideP>

      <GuideH2 id="layout">How the layout is built</GuideH2>
      <GuideH3>Title bar</GuideH3>
      <GuideP>
        The headline template is redefined in the preamble as one{" "}
        <GuideCode>beamercolorbox</GuideCode> containing three minipages: a 12 percent
        wide logo box, a 70 percent wide centred block with the title, authors and
        institutes, and a second logo box. An orange accent bar underneath separates
        it from the body. Author superscripts come from Beamer&apos;s{" "}
        <GuideCode>\inst{"{1}"}</GuideCode>, used in both{" "}
        <GuideCode>\author</GuideCode> and <GuideCode>\institute</GuideCode>.
      </GuideP>
      <GuideH3>Columns and blocks</GuideH3>
      <GuideP>
        The body is a <GuideCode>columns[t]</GuideCode> environment with three{" "}
        <GuideCode>column</GuideCode> environments of <GuideCode>0.30\paperwidth</GuideCode>{" "}
        each. Blocks are rounded without shadow, and a small{" "}
        <GuideCode>\addtobeamertemplate{"{block end}"}</GuideCode> hook adds 1.2 cm of
        space after every block so you never have to insert manual{" "}
        <GuideCode>\vspace</GuideCode> between them. Use <GuideCode>block</GuideCode> for
        ordinary sections, <GuideCode>alertblock</GuideCode> for the one message you want
        read first, and <GuideCode>exampleblock</GuideCode> for secondary material.
      </GuideP>
      <GuideH3>Figures and tables</GuideH3>
      <GuideP>
        The Results block contains a TikZ bar chart drawn with a{" "}
        <GuideCode>\foreach</GuideCode> loop and a <GuideCode>booktabs</GuideCode> table.
        The Method block has a four-node pipeline diagram using the{" "}
        <GuideCode>positioning</GuideCode> and <GuideCode>arrows.meta</GuideCode>{" "}
        libraries. Replace either with{" "}
        <GuideCode>\includegraphics[width=0.9\linewidth]{"{figure.pdf}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="customize">Customising the poster</GuideH2>
      <GuideUl>
        <li>
          <strong>Colours.</strong> Four <GuideCode>\definecolor</GuideCode> lines set the
          palette: <GuideCode>primary</GuideCode> (title bar and block titles),{" "}
          <GuideCode>accent</GuideCode> (alert block and highlights),{" "}
          <GuideCode>panel</GuideCode> (block body background) and{" "}
          <GuideCode>ink</GuideCode> (text). Change them to your institution&apos;s
          colours and everything updates.
        </li>
        <li>
          <strong>Size.</strong> Edit the beamerposter options:{" "}
          <GuideCode>size=a1</GuideCode>, <GuideCode>orientation=portrait</GuideCode>, or{" "}
          <GuideCode>size=custom,width=121.92,height=91.44</GuideCode> for 48 by 36 in.
        </li>
        <li>
          <strong>Two columns.</strong> Delete one <GuideCode>column</GuideCode> block
          and set the remaining widths to <GuideCode>0.46\paperwidth</GuideCode>.
        </li>
        <li>
          <strong>Fonts.</strong> The template loads <GuideCode>lmodern</GuideCode>;
          Beamer uses its sans-serif face. Add{" "}
          <GuideCode>\usepackage{"{helvet}"}</GuideCode> for Helvetica or{" "}
          <GuideCode>\usefonttheme{"{serif}"}</GuideCode> for a serif look.
        </li>
        <li>
          <strong>QR code.</strong> Add <GuideCode>\usepackage{"{qrcode}"}</GuideCode> and
          put <GuideCode>\qrcode[height=6cm]{"{https://...}"}</GuideCode> in the footer
          or the Conclusion block.
        </li>
      </GuideUl>
      <GuidePre>{`% 36 x 48 in landscape (US letter-size posters)
\\usepackage[size=custom,width=121.92,height=91.44,scale=1.3]{beamerposter}

% Replace a logo placeholder
\\includegraphics[width=10cm]{university-logo.pdf}`}</GuidePre>

      <GuideH2 id="design">Research poster design advice</GuideH2>
      <GuideP>
        A research poster is read in about ninety seconds from one to two metres away. Keep
        the body text at 28 to 32 pt (the default <GuideCode>scale=1.3</GuideCode> on A0
        does this), limit the whole poster to roughly 800 words, and put the result
        that matters in an alert block near the top of the right-hand column, where
        eyes land after the title. One large figure beats three small ones. Use the
        References block sparingly; four or five entries are enough, and the full
        paper can live behind a QR code.
      </GuideP>

      <GuideH2 id="errors">Common errors</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;File beamerposter.sty not found&quot;.</strong> Install it with{" "}
          <GuideCode>tlmgr install beamerposter</GuideCode>. Octree and Overleaf include
          it.
        </li>
        <li>
          <strong>Content overflows the page.</strong> beamerposter never adds a
          second page; text that does not fit is cut off. Reduce{" "}
          <GuideCode>scale</GuideCode>, shorten bullets, or remove a block.
        </li>
        <li>
          <strong>Blocks of different heights across columns.</strong> That is normal;
          balance by moving a short block (Acknowledgements, References) to the
          column with spare room.
        </li>
        <li>
          <strong>Logo appears huge or tiny.</strong> TikZ coordinates are in
          centimetres at true poster size; a 10 cm logo is about right for A0.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> and edit with the
          live PDF preview; zoom in to check the text size at a 100 percent view.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste into a blank project; the default
          pdfLaTeX compiler works.
        </li>
        <li>
          <strong>Locally:</strong> <GuideCode>pdflatex poster.tex</GuideCode>; one pass
          is enough. Export the PDF at 100 percent for the print shop and ask for
          matte paper.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Related templates</GuideH2>
      <GuideTable
        headers={["Template", "Use it for", "Format"]}
        rows={[
          [
            <strong key="p">Research Poster</strong>,
            "Poster sessions at any conference",
            "A0 landscape, beamerposter, three columns",
          ],
          [
            <GuideLink key="b" href="/templates/beamer-dark">
              Beamer Dark Theme
            </GuideLink>,
            "The talk that goes with the poster",
            "16:9 Beamer slides, dark palette",
          ],
          [
            <GuideLink key="n" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "The paper behind the poster",
            "Single-column preprint",
          ],
        ]}
      />
      <GuideP>
        Submitting soon? Check the{" "}
        <GuideLink href="/conference-deadlines">conference deadlines page</GuideLink>{" "}
        for typical submission windows and the matching paper templates.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
