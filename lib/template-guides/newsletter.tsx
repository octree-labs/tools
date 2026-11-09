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
    question: "Can I make a newsletter in LaTeX?",
    answer:
      "Yes. This template builds a full newsletter on the standard article class: multicol for the two- and three-column sections, tcolorbox for the feature story and fact boxes, and xcolor for a single accent colour. It compiles to a PDF that you can print, attach to an email or post online.",
  },
  {
    question: "How do I change the newsletter colours?",
    answer:
      "Two colours are defined at the top: headerblue for rules, headings and box frames, and lightgray for the feature story background. Change their RGB values, for example \\definecolor{headerblue}{RGB}{153,0,51}, and the whole layout updates.",
  },
  {
    question: "How do I add photos to the newsletter?",
    answer:
      "graphicx is already loaded. Inside a column use \\includegraphics[width=\\linewidth]{photo} so the image fits the column width; inside the feature box use a fraction of \\linewidth such as 0.5\\linewidth. Do not use a floating figure environment inside multicols, because floats are not allowed there.",
  },
  {
    question: "Does this newsletter template work in Overleaf?",
    answer:
      "Yes. It uses only packages from TeX Live (geometry, multicol, graphicx, xcolor, tcolorbox), so it compiles with pdfLaTeX in Overleaf, Octree or a local install.",
  },
];

export default function NewsletterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A newsletter template in LaTeX</GuideH2>
      <GuideP>
        This newsletter LaTeX template lays out a complete organisation, club, school
        or company newsletter on letter paper. The masthead has the newsletter name
        between two thick blue rules with a &quot;Month Year | Volume X, Issue X&quot;
        line, followed by a boxed feature story with a headline and bullet points. Below
        that, the page switches to columns: News &amp; Updates beside Upcoming Events,
        then a member Spotlight beside Tips &amp; Resources, a boxed &quot;Did You
        Know?&quot; fact, and a three-column footer strip with Quick Links, Contact Info
        and Follow Us, closed by a rule and a small footer line with your website and
        email.
      </GuideP>
      <GuideP>
        The source uses the standard <GuideCode>article</GuideCode> class at 11 pt with
        0.75-inch margins. Columns come from <GuideCode>multicol</GuideCode>, split
        explicitly with <GuideCode>\columnbreak</GuideCode>; the two boxes are{" "}
        <GuideCode>tcolorbox</GuideCode> environments; and every accent uses one colour,{" "}
        <GuideCode>headerblue</GuideCode>, defined with <GuideCode>xcolor</GuideCode> so
        you can rebrand in a single line. Page numbers are switched off. All packages
        ship with TeX Live, so it works as a newsletter template for Overleaf, in Octree
        or with a local install. The sample fills about two pages; add or delete
        sections to match your issue, and keep the structure the same from month to
        month so readers know where to look.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Masthead with title, date, volume and issue between coloured rules</li>
        <li>Boxed feature story with headline and key points</li>
        <li>Two-column News &amp; Updates / Upcoming Events and Spotlight / Tips sections</li>
        <li>&quot;Did You Know?&quot; box and a three-column links and contact strip</li>
        <li>Footer line with organisation name, website and email</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>newsletter.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Edit the masthead lines, then the feature story inside the first{" "}
          <GuideCode>tcolorbox</GuideCode>; its box title is set with{" "}
          <GuideCode>{"title=\\textbf{Feature Story}"}</GuideCode>.
        </li>
        <li>
          Replace the column content. Each <GuideCode>multicols</GuideCode> block is
          independent, so you can delete one without affecting the others.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Rebrand the colours.</strong> Both colours are defined in the preamble:
      </GuideP>
      <GuidePre>{`\\definecolor{headerblue}{RGB}{153,0,51}
\\definecolor{lightgray}{RGB}{250,245,240}`}</GuidePre>
      <GuideP>
        <strong>Add a photo to a column.</strong> Inside <GuideCode>multicols</GuideCode>,
        place images inline rather than in a <GuideCode>figure</GuideCode> float:
      </GuideP>
      <GuidePre>{`\\subsection*{Update Title 1}
\\includegraphics[width=\\linewidth]{team-photo}

Brief description of this update or news item.`}</GuidePre>
      <GuideP>
        <strong>Quotation marks.</strong> The Spotlight quote uses{" "}
        <GuideCode>\textquotedblleft</GuideCode> and{" "}
        <GuideCode>\textquotedblright</GuideCode> for curly quotes. In your own text,
        type two backticks to open and two apostrophes to close:{" "}
        <GuideCode>``Quote ...&apos;&apos;</GuideCode>. A straight{" "}
        <GuideCode>&quot;</GuideCode> or two apostrophes at the start print the wrong
        mark.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/leaflet">leaflet</GuideLink>,{" "}
        <GuideLink href="/templates/flyer">flyer</GuideLink> and{" "}
        <GuideLink href="/templates/memo">memo</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Newsletter template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
