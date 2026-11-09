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
    question: "Can I make a leaflet or brochure in LaTeX?",
    answer:
      "Yes. This template is a one-page A4 leaflet built on the standard article class: multicol splits the page into two and three columns, tcolorbox draws the coloured offer box and xcolor defines the brand colour. It compiles to a print-ready PDF in Octree, Overleaf or any TeX Live install, with no special document class.",
  },
  {
    question: "How do I change the leaflet colour?",
    answer:
      "Every coloured element uses one colour called maincolor, defined near the top with \\definecolor{maincolor}{RGB}{0,102,204}. Change the three RGB values and the title, section headings and offer box all update together. You can also use a named colour or an HTML hex value with \\definecolor{maincolor}{HTML}{0066CC}.",
  },
  {
    question: "How do I add a logo or photo to the leaflet?",
    answer:
      "The template already loads graphicx. Upload the image next to the .tex file and add \\includegraphics[width=3cm]{logo} inside the centred title block, or inside one of the columns with width=\\linewidth so it fits the column. PNG, JPG and PDF images work with pdfLaTeX.",
  },
  {
    question: "Can I turn this into a tri-fold brochure?",
    answer:
      "Yes. Switch the page to landscape by adding landscape to the geometry options, and put the body inside one multicols environment with three columns, using \\columnbreak to end each panel. For a printed tri-fold you will usually want a second page for the inside panels; start it with \\newpage and repeat the three-column layout.",
  },
];

export default function LeafletGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A leaflet and brochure template in LaTeX</GuideH2>
      <GuideP>
        This leaflet LaTeX template produces a one-page marketing flyer or brochure on
        A4 paper that you can print or send as a PDF. It is written for a fictional
        technology consultancy, so the sample has everything a small business leaflet
        needs: a large coloured company name with a tagline, a two-column block with
        services and contact details, a highlighted special-offer box with a call to
        action, and a three-column &quot;Why Choose Us?&quot; strip at the bottom.
      </GuideP>
      <GuideP>
        It is built on the standard <GuideCode>article</GuideCode> class at 12 pt with
        half-inch margins, so it works as a leaflet template for Overleaf, Octree or a
        local TeX Live install without extra files. Columns come from{" "}
        <GuideCode>multicol</GuideCode>, the offer box from{" "}
        <GuideCode>tcolorbox</GuideCode>, and every accent colour from a single{" "}
        <GuideCode>maincolor</GuideCode> defined with <GuideCode>xcolor</GuideCode>, so
        rebranding takes one line. Page numbers are switched off with{" "}
        <GuideCode>\pagestyle{"{empty}"}</GuideCode> and paragraph indentation is set to
        zero, which keeps the page looking like a designed flyer rather than a report.
        Replace the sample text with your own services, offer and contact details, add a
        logo with <GuideCode>graphicx</GuideCode> (already loaded), and you have a
        print-ready leaflet in a few minutes.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Centred company name in the brand colour with an italic tagline</li>
        <li>Two-column &quot;What We Do&quot; and &quot;Contact Us&quot; block</li>
        <li>A filled <GuideCode>tcolorbox</GuideCode> call-to-action box at 80% of the text width</li>
        <li>Three-column &quot;Why Choose Us?&quot; section split with <GuideCode>\columnbreak</GuideCode></li>
        <li>One brand colour, <GuideCode>maincolor</GuideCode>, used throughout</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>leaflet.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX. One pass is enough; there are no references or citations.</li>
        <li>
          Change the brand colour in the <GuideCode>\definecolor</GuideCode> line, then
          edit the title, tagline, the service list, the contact lines and the text inside
          the <GuideCode>tcolorbox</GuideCode>.
        </li>
        <li>
          Keep the content to one page; if it overflows, shorten the lists or reduce the{" "}
          <GuideCode>\vspace</GuideCode> gaps between blocks.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Rebrand in one line.</strong> The title, every{" "}
        <GuideCode>\section*</GuideCode> heading and the offer box read{" "}
        <GuideCode>maincolor</GuideCode>. Define it from your brand&apos;s hex code:
      </GuideP>
      <GuidePre>{`\\definecolor{maincolor}{HTML}{0B7A75}`}</GuidePre>
      <GuideP>
        <strong>Add a logo above the name.</strong> <GuideCode>graphicx</GuideCode> is
        already loaded, so put the image inside the first <GuideCode>center</GuideCode>{" "}
        block:
      </GuideP>
      <GuidePre>{`\\begin{center}
\\includegraphics[width=3cm]{logo}\\\\[0.3cm]
{\\Huge \\textbf{\\color{maincolor} TECHSOLUTIONS}}\\\\[0.3cm]
{\\Large \\textit{Your Partner in Digital Transformation}}
\\end{center}`}</GuidePre>
      <GuideP>
        <strong>Style the offer box.</strong> The box options are ordinary{" "}
        <GuideCode>tcolorbox</GuideCode> keys. For an outlined box with rounded corners
        instead of a solid fill, swap the options to{" "}
        <GuideCode>colback=white,colframe=maincolor,coltext=black,arc=4mm</GuideCode>{" "}
        (replace <GuideCode>colupper=white</GuideCode> so the text stays readable on a
        white background).
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/flyer">flyer</GuideLink>,{" "}
        <GuideLink href="/templates/newsletter">newsletter</GuideLink> and{" "}
        <GuideLink href="/templates/business-card">business card</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Leaflet template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
