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
    question: "Does the template contain a full year?",
    answer:
      "Yes. The second page, 2025 Year Calendar, shows all twelve months of 2025 as four rows of three small month tables. For another year, refill the tables or generate the months with the TikZ calendar library shown above, which works out the dates for you.",
  },
  {
    question: "How do I change the month on the monthly page?",
    answer:
      "Change the heading, then refill the six rows of the table. Leave a cell empty for each day before the first of the month (the first column is Sunday), and keep the \\cellcolor{weekendcolor} on the first and last cell of each row so weekends stay shaded.",
  },
  {
    question: "Can I start the week on Monday?",
    answer:
      "Yes. Reorder the header row to Monday ... Sunday, move the \\cellcolor{weekendcolor} commands to the last two columns, and shift each date row by one cell. In the TikZ calendar library, week list starts on Monday by default.",
  },
  {
    question: "Does this calendar template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, xcolor (with the table option), tikz and array, all in TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function CalendarGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A printable calendar template in LaTeX</GuideH2>
      <GuideP>
        This calendar template in LaTeX produces a printable landscape monthly
        planner and a compact multi-month overview. It uses the{" "}
        <GuideCode>article</GuideCode> class with <GuideCode>geometry</GuideCode> set
        to landscape and 0.5 inch margins, no page numbers, and two colours:{" "}
        <GuideCode>headercolor</GuideCode>, a dark slate for the weekday header row,
        and <GuideCode>weekendcolor</GuideCode>, a light grey that shades Saturdays and
        Sundays.
      </GuideP>
      <GuideP>
        Page one is March 2025 as a large grid: seven fixed-width columns from Sunday
        to Saturday, six week rows tall enough to write in, and three ruled lines
        for notes at the bottom. It is built as an ordinary{" "}
        <GuideCode>tabular</GuideCode> with <GuideCode>array</GuideCode> column
        types and <GuideCode>\rowcolor</GuideCode> / <GuideCode>\cellcolor</GuideCode>{" "}
        from xcolor&apos;s <GuideCode>table</GuideCode> option, so every cell is easy
        to find and edit, and you can type appointments straight into a date&apos;s
        cell. Page two, headed 2025 Year Calendar, shows all twelve months of 2025 as
        small month tables in four rows of three. The preamble also loads{" "}
        <GuideCode>tikz</GuideCode>, which the sample does not use, so the
        TikZ <GuideCode>calendar</GuideCode> library is available if you would
        rather generate months automatically than type dates by hand. Use it as a
        monthly wall planner, a class or project schedule, or a year-at-a-glance
        page for a handbook.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Landscape page with 0.5 inch margins</li>
        <li>A full-page monthly grid with shaded weekends and a notes area</li>
        <li>Twelve small month tables (January to December 2025)</li>
        <li>
          <GuideCode>headercolor</GuideCode> and <GuideCode>weekendcolor</GuideCode>{" "}
          defined once for the whole file
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>calendar.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Change the month heading and refill the date cells for your month, leaving
          empty cells before the first day.
        </li>
        <li>
          Type events into a cell after the date, for example{" "}
          <GuideCode>{"14 \\newline \\small Team offsite"}</GuideCode>.
        </li>
        <li>
          Update or extend the small month tables on page two.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Resize the day columns in one place.</strong> The monthly grid uses
        a column type <GuideCode>D</GuideCode> defined once in the preamble, so seven
        1.2 inch columns fit the 10 inch text block. Change the width there; keep
        seven times the width plus padding under the text width:
      </GuideP>
      <GuidePre>{`\\newcolumntype{D}{>{\\centering\\arraybackslash}p{1.2in}}

\\begin{tabular}{|D|D|D|D|D|D|D|}`}</GuidePre>
      <GuideP>
        <strong>Generate a month automatically.</strong> The TikZ{" "}
        <GuideCode>calendar</GuideCode> library computes the weekdays, so you only
        give a date range. Add <GuideCode>{"\\usetikzlibrary{calendar}"}</GuideCode>{" "}
        to the preamble:
      </GuideP>
      <GuidePre>{`\\begin{tikzpicture}
\\calendar[dates=2026-01-01 to 2026-01-last, week list,
  month label above centered, month text=\\textbf{\\%mt \\%y0}]
  if (weekend) [black!50];
\\end{tikzpicture}`}</GuidePre>
      <GuideP>
        <strong>Change the colours.</strong> Both colours are defined in the preamble;
        replace the RGB values or use HTML hex codes:
      </GuideP>
      <GuidePre>{`\\definecolor{headercolor}{HTML}{1F4E79}
\\definecolor{weekendcolor}{HTML}{FDEBD0}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/syllabus">syllabus</GuideLink>,{" "}
        <GuideLink href="/templates/meeting-minutes">meeting minutes</GuideLink> and{" "}
        <GuideLink href="/templates/flyer">flyer</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Calendar template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
