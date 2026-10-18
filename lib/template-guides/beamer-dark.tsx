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
    question: "Does this Beamer dark theme work with pdflatex?",
    answer:
      "Yes. The template uses only the Madrid theme, lmodern, xcolor and standard packages, so it compiles with pdflatex, XeLaTeX and LuaLaTeX without any extra fonts. That is the main difference from metropolis, which is designed around the Fira typeface and fontspec and is best compiled with XeLaTeX or LuaLaTeX.",
  },
  {
    question: "How do I change the accent colour?",
    answer:
      "Edit the hex value in \\definecolor{accent}{HTML}{4FC3F7}. Every element that uses the accent (structure, bullets, block titles, the tertiary palette) updates automatically because they all reference the named colour. The secondary accent used for \\alert and alerted blocks is accent2 (orange by default).",
  },
  {
    question: "How do I make a printable light version of the slides?",
    answer:
      "Compile a handout. Change the class line to \\documentclass[handout,11pt,aspectratio=169]{beamer}, which collapses all \\pause overlays, and wrap a light palette in \\mode<handout>{ \\setbeamercolor{background canvas}{bg=white} \\setbeamercolor{normal text}{fg=black,bg=white} } so the handout prints without a dark background. Add pgfpages to put several slides on one page.",
  },
  {
    question: "Can I apply this dark palette to Berlin, Frankfurt or another theme?",
    answer:
      "Yes. The colour block is independent of the layout theme. Change \\usetheme{Madrid} to \\usetheme{Berlin} or \\usetheme{Frankfurt} and keep the \\setbeamercolor lines; the palette primary to quaternary colours drive the head and foot bars in all of the Madrid-family themes. Themes with a sidebar (Berkeley, Goettingen) additionally need \\setbeamercolor{sidebar}{bg=...} and \\setbeamercolor{section in sidebar}{fg=...}.",
  },
  {
    question: "Why do my matplotlib plots look wrong on the dark slides?",
    answer:
      "The default white figure background and black axes clash with the dark canvas. Export figures with a transparent background and light axes, for example plt.style.use('dark_background') and savefig('fig.pdf', transparent=True) in matplotlib, or set axis line and tick label colours to white in pgfplots. For photos and diagrams you cannot recolour, place them in a light rounded box so the edges are deliberate.",
  },
];

export default function BeamerDarkGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is this Beamer dark theme?</GuideH2>
      <GuideP>
        Beamer ships with dozens of layout themes but almost no dark colour themes, so most
        &quot;dark mode&quot; decks you see are either metropolis with{" "}
        <GuideCode>background=dark</GuideCode> or a hand-built palette. This template is
        the second kind, done carefully: a complete, pdflatex-safe 16:9 presentation built
        on the familiar <GuideCode>Madrid</GuideCode> theme with every colour overridden
        through <GuideCode>\setbeamercolor</GuideCode>. You get a near-black canvas, light
        body text, a cyan accent for structure and bullets, an orange secondary accent for{" "}
        <GuideCode>\alert</GuideCode>, rounded shadow-free blocks, no navigation bar and a
        custom footline with &quot;frame / total&quot; numbers. It needs no extra fonts
        or theme packages, so it compiles on any TeX installation.
      </GuideP>
      <GuideP>
        The deck includes eight example frames: a plain title page, an outline built from{" "}
        <GuideCode>\tableofcontents</GuideCode>, a bullet slide with{" "}
        <GuideCode>\pause</GuideCode> overlays and a block, a figure placeholder, a{" "}
        <GuideCode>booktabs</GuideCode> table with highlighted cells, an equation inside an
        example block, a two-column comparison and a closing slide. Replace the content
        and keep the preamble.
      </GuideP>

      <GuideH2 id="palette">How the dark palette is built</GuideH2>
      <GuideP>
        Six named colours are defined with <GuideCode>xcolor</GuideCode> in the HTML model:
      </GuideP>
      <GuidePre>{`\\definecolor{bgdark}{HTML}{1E1E24}   % slide background
\\definecolor{bgpanel}{HTML}{2B2B33}  % frametitle / block backgrounds
\\definecolor{fglight}{HTML}{E6E6E6}  % body text
\\definecolor{fgmuted}{HTML}{A0A0A8}  % footline, captions
\\definecolor{accent}{HTML}{4FC3F7}   % cyan accent
\\definecolor{accent2}{HTML}{FFB74D}  % orange secondary accent`}</GuidePre>
      <GuideP>
        Beamer colours are organised as a tree of inheritance, so two assignments do most
        of the work. <GuideCode>background canvas</GuideCode> paints the slide, and{" "}
        <GuideCode>normal text</GuideCode> sets the default foreground and background that
        almost every other element inherits. <GuideCode>structure</GuideCode> is the
        parent of titles, bullets, enumerations, table-of-contents entries and the
        default block title, so setting it to the accent colours all of them at once.{" "}
        <GuideCode>alerted text</GuideCode> and <GuideCode>example text</GuideCode> cover{" "}
        <GuideCode>\alert</GuideCode> and the <GuideCode>exampleblock</GuideCode>{" "}
        environment.
      </GuideP>
      <GuideP>
        The remaining lines override elements that Madrid colours separately. The{" "}
        <GuideCode>frametitle</GuideCode> bar gets the panel background;{" "}
        <GuideCode>palette primary</GuideCode> through{" "}
        <GuideCode>palette quaternary</GuideCode> are the four tints Madrid uses for its
        head and foot bars, and <GuideCode>title in head/foot</GuideCode>,{" "}
        <GuideCode>author in head/foot</GuideCode> and{" "}
        <GuideCode>date in head/foot</GuideCode> set the footline text. Block colours are
        set in pairs, <GuideCode>block title</GuideCode> and{" "}
        <GuideCode>block body</GuideCode>, with alerted and example variants; the titles
        use dark text on the accent so they stay legible. The expression{" "}
        <GuideCode>bgpanel!80!accent</GuideCode> is an <GuideCode>xcolor</GuideCode> mix,
        80 percent panel and 20 percent accent, which is how to derive tints without
        defining more colours.
      </GuideP>

      <GuideH2 id="templates">Templates and the footline</GuideH2>
      <GuideP>
        <GuideCode>\setbeamertemplate{"{navigation symbols}{}"}</GuideCode> removes the
        little navigation icons in the bottom right that almost nobody uses.{" "}
        <GuideCode>\setbeamertemplate{"{blocks}[rounded][shadow=false]"}</GuideCode> gives
        flat rounded blocks (shadows look muddy on dark backgrounds), and{" "}
        <GuideCode>{"[circle]"}</GuideCode> bullets are easier to read than Madrid&apos;s
        default balls. The custom <GuideCode>footline</GuideCode> is three{" "}
        <GuideCode>beamercolorbox</GuideCode>es of widths 0.3, 0.5 and 0.2 of the paper
        width showing <GuideCode>\insertshortauthor</GuideCode>,{" "}
        <GuideCode>\insertshorttitle</GuideCode> and{" "}
        <GuideCode>\insertframenumber / \inserttotalframenumber</GuideCode>. The short
        forms come from the optional arguments to <GuideCode>\title[...]</GuideCode> and{" "}
        <GuideCode>\author[...]</GuideCode>, so set both.
      </GuideP>

      <GuideH2 id="metropolis">Why not just use metropolis?</GuideH2>
      <GuideP>
        metropolis is an excellent modern theme and has a built-in dark variant (
        <GuideCode>\metroset{"{background=dark}"}</GuideCode>). Its catch is typography:
        it is designed around Fira Sans and Fira Mono, loaded through{" "}
        <GuideCode>fontspec</GuideCode>, which means XeLaTeX or LuaLaTeX. It does compile
        under pdflatex, but with warnings and a fallback to the default fonts that loses
        much of its character, and you must install the Fira fonts on a local machine.
        This template deliberately uses <GuideCode>lmodern</GuideCode> and the stock
        Madrid layout so a dark deck works with the pdflatex toolchain most
        universities, journals and CI systems already have. If you do use XeLaTeX, you can
        add <GuideCode>\usepackage{"{fontspec}"}</GuideCode> and{" "}
        <GuideCode>\setsansfont{"{Fira Sans}"}</GuideCode> to this template without
        touching the palette.
      </GuideP>

      <GuideH2 id="adapt">Adapting any theme to dark</GuideH2>
      <GuideP>
        The palette block is independent of the layout, so the recipe generalises. Change{" "}
        <GuideCode>\usetheme{"{Madrid}"}</GuideCode> to{" "}
        <GuideCode>\usetheme{"{Berlin}"}</GuideCode>, <GuideCode>Frankfurt</GuideCode>,{" "}
        <GuideCode>CambridgeUS</GuideCode> or <GuideCode>Boadilla</GuideCode> and keep every{" "}
        <GuideCode>\setbeamercolor</GuideCode> line. Berlin and Frankfurt show section
        mini-frames in the headline; colour them with{" "}
        <GuideCode>\setbeamercolor{"{section in head/foot}{fg=fglight,bg=bgpanel}"}</GuideCode>{" "}
        and <GuideCode>mini frame</GuideCode>. Sidebar themes (Berkeley, Goettingen,
        Hannover) need <GuideCode>sidebar</GuideCode>,{" "}
        <GuideCode>section in sidebar</GuideCode> and{" "}
        <GuideCode>subsection in sidebar</GuideCode>. If an element still shows the
        theme&apos;s original blue, run your PDF through the Beamer user guide&apos;s
        colour list or add <GuideCode>\setbeamercolor{"{structure}{fg=accent}"}</GuideCode>{" "}
        after <GuideCode>\usecolortheme</GuideCode> calls, since colour themes loaded
        later override earlier settings.
      </GuideP>

      <GuideH2 id="readability">Readable colours for projectors</GuideH2>
      <GuideUl>
        <li>
          <strong>Avoid pure black and pure white.</strong> The canvas is{" "}
          <GuideCode>#1E1E24</GuideCode> and text is <GuideCode>#E6E6E6</GuideCode>; full
          contrast causes halation on bright projectors and looks harsh on video calls.
          If you want pure black for a cinema-style room, set{" "}
          <GuideCode>bg=black</GuideCode> in <GuideCode>background canvas</GuideCode>.
        </li>
        <li>
          <strong>Keep contrast high for body text.</strong> Aim for a contrast ratio of
          7:1 or more between text and canvas; the shipped pair is about 13:1. Muted
          text (<GuideCode>fgmuted</GuideCode>) is fine for footers and captions, not
          for content.
        </li>
        <li>
          <strong>Use saturated, light accents.</strong> Light cyan, amber, mint and pink
          read well on dark; dark blue and dark red disappear. Avoid relying on red
          versus green alone.
        </li>
        <li>
          <strong>Prefer bolder weights.</strong> Thin fonts on dark backgrounds smear
          when projected. The template sets frame titles in{" "}
          <GuideCode>\bfseries</GuideCode> for this reason.
        </li>
        <li>
          <strong>Test on the actual projector.</strong> Cheap projectors crush dark
          greys; if <GuideCode>bgpanel</GuideCode> blocks vanish, lighten them to{" "}
          <GuideCode>#3A3A44</GuideCode>.
        </li>
      </GuideUl>

      <GuideH2 id="images">Charts and images on dark backgrounds</GuideH2>
      <GuideP>
        <GuideCode>\includegraphics</GuideCode> cannot invert or recolour an image, so
        prepare figures for dark slides at the source. Export plots with a transparent
        background and light axes, labels and gridlines; in matplotlib use{" "}
        <GuideCode>plt.style.use(&apos;dark_background&apos;)</GuideCode> and{" "}
        <GuideCode>transparent=True</GuideCode>, and in pgfplots set{" "}
        <GuideCode>axis line style</GuideCode> and tick label colours to{" "}
        <GuideCode>fglight</GuideCode>. Prefer PDF or SVG-derived PDF over PNG for line
        art. For screenshots and photos that must keep a white background, drop them in a
        rounded <GuideCode>beamercolorbox</GuideCode> like the placeholder in frame four,
        or add a thin light border with <GuideCode>\fbox</GuideCode>, so the white
        rectangle looks intentional. Keep diagrams&apos; line weights a little heavier
        than you would for a light deck.
      </GuideP>

      <GuideH2 id="handout">Handout mode and other options</GuideH2>
      <GuideUl>
        <li>
          <strong>Handouts.</strong>{" "}
          <GuideCode>\documentclass[handout,11pt,aspectratio=169]{"{beamer}"}</GuideCode>{" "}
          collapses every <GuideCode>\pause</GuideCode>. Add{" "}
          <GuideCode>\usepackage{"{pgfpages}"}</GuideCode> and{" "}
          <GuideCode>\pgfpagesuselayout{"{4 on 1}[a4paper,landscape,border shrink=5mm]"}</GuideCode>{" "}
          for four slides per page, and switch to a light palette inside{" "}
          <GuideCode>\mode&lt;handout&gt;{"{...}"}</GuideCode> to save ink.
        </li>
        <li>
          <strong>Aspect ratio.</strong> <GuideCode>aspectratio=169</GuideCode> matches
          modern projectors; use <GuideCode>43</GuideCode> for older rooms.
        </li>
        <li>
          <strong>Frame numbers.</strong> Already in the footline. To hide them on the
          title slide, the <GuideCode>[plain]</GuideCode> option removes the footline
          entirely, as the template does.
        </li>
        <li>
          <strong>Section slides.</strong> Add{" "}
          <GuideCode>\AtBeginSection{"{\\begin{frame}\\sectionpage\\end{frame}}"}</GuideCode>{" "}
          for a divider before each section.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Package xcolor Error: Undefined color `accent&apos;&quot;.</strong>{" "}
          A <GuideCode>\definecolor</GuideCode> line was deleted or moved below its first
          use. Keep all six definitions before the <GuideCode>\setbeamercolor</GuideCode>{" "}
          block.
        </li>
        <li>
          <strong>Frame overflows the slide.</strong> Too much content; split the frame,
          or add <GuideCode>[shrink=10]</GuideCode> to the frame options as a last resort.
        </li>
        <li>
          <strong>Overlays behave oddly in tables or columns.</strong>{" "}
          <GuideCode>\pause</GuideCode> inside <GuideCode>tabular</GuideCode> is unreliable;
          use <GuideCode>\onslide&lt;2-&gt;</GuideCode> on individual cells instead.
        </li>
        <li>
          <strong>Total frame count is wrong.</strong>{" "}
          <GuideCode>\inserttotalframenumber</GuideCode> is read from the{" "}
          <GuideCode>.aux</GuideCode> file; compile twice.
        </li>
        <li>
          <strong>Fonts look different after adding Fira.</strong> You compiled with
          pdflatex. Fira via <GuideCode>fontspec</GuideCode> requires XeLaTeX or LuaLaTeX;
          with pdflatex use <GuideCode>\usepackage[sfdefault]{"{FiraSans}"}</GuideCode>{" "}
          instead.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the dark Beamer deck</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em> to get a live preview
          of every slide; the assistant can add frames or convert your bullet notes into
          slides.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste into a blank project and compile with
          pdfLaTeX. Two passes are needed for the outline and the total frame count,
          which Overleaf does automatically.
        </li>
        <li>
          <strong>Locally:</strong>
          <GuidePre>{`pdflatex slides.tex
pdflatex slides.tex      # second pass for TOC and frame totals
# or: latexmk -pdf slides.tex`}</GuidePre>
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Beamer dark theme vs other presentation templates</GuideH2>
      <GuideTable
        headers={["Template", "Best for", "Engine", "Look"]}
        rows={[
          [
            <strong key="d">Beamer Dark Theme</strong>,
            "Talks in dim rooms, screen recordings, lectures",
            "pdflatex, XeLaTeX or LuaLaTeX",
            "Madrid layout, dark canvas, cyan and orange accents, 16:9",
          ],
          [
            <GuideLink key="b" href="/templates/beamer-presentation">
              Beamer Presentation
            </GuideLink>,
            "Standard academic talks and seminars",
            "pdflatex",
            "Madrid theme with its default blue light palette",
          ],
          [
            <GuideLink key="p" href="/templates/poster">
              Research Poster
            </GuideLink>,
            "Conference poster sessions",
            "pdflatex",
            "tikzposter A0 layout with block-based columns",
          ],
        ]}
      />
      <GuideP>
        The light <GuideLink href="/templates/beamer-presentation">Beamer template</GuideLink>{" "}
        and this one share the Madrid layout, so you can move frames between them freely.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
