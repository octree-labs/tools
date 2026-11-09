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
    question: "What sections does a business plan need?",
    answer:
      "Investors and lenders generally expect the sections this template already has: an executive summary, a company description, products and services, market and competitive analysis, marketing strategy, operations, the management team and financial projections with the funding request. Delete chapters that do not apply and add any section a lender or competition asks for by name.",
  },
  {
    question: "Why does every section start on a new page?",
    answer:
      "The template uses the report class, where each \\chapter starts a new page; that is why the sample compiles to about thirteen pages. That suits a formal printed plan. For a shorter document, change \\chapter to \\section throughout and \\section to \\subsection, or switch the class to article and do the same.",
  },
  {
    question: "Is this business plan template confidential?",
    answer:
      "The title page prints the word Confidential under the date; that is a label, not protection. If you need recipients to agree to confidentiality, have them sign a non-disclosure agreement before you share the plan.",
  },
  {
    question: "Does this business plan template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry, graphicx, booktabs, hyperref and xcolor, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX. Compile twice so the table of contents is filled in.",
  },
];

export default function BusinessPlanGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A business plan template in LaTeX</GuideH2>
      <GuideP>
        This business plan template in LaTeX lays out a complete, investor-style plan
        with every standard section already in place and filled with bracketed
        prompts. It uses the <GuideCode>report</GuideCode> class at 12 pt with 1 inch
        margins, opens with a title page (Business Plan, the company name in the
        template&apos;s blue, prepared by, date and a Confidential label) and follows
        it with an automatic table of contents.
      </GuideP>
      <GuideP>
        Each part of the plan is a chapter: Executive Summary (business concept, key
        success factors, financial highlights such as Year 1 revenue, break-even and
        funding required), Company Description, Products and Services with a
        competitive advantage list, Market Analysis, Competitive Analysis with a
        strengths-and-weaknesses table, Marketing Strategy, Operations Plan,
        Management Team, Financial Projections with a three-year sales forecast table,
        funding requirements and use of funds, and an Appendix. The prompts tell you
        what to write in each place, for example{" "}
        <GuideCode>[Company Name] was founded in [year] to address
        [problem/opportunity]</GuideCode>, so the template doubles as a checklist.
        Writing a business plan in LaTeX keeps numbering, cross-references and the
        contents page correct as the plan grows, and the colour is defined once as{" "}
        <GuideCode>businessblue</GuideCode>, so restyling the plan for your brand
        takes one line. If what you need is a report on results rather than a
        plan, see the{" "}
        <GuideLink href="/templates/business-report">business report template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page, table of contents and ten chapters</li>
        <li>Executive summary with financial highlights</li>
        <li>Competitor table and three-year sales forecast table</li>
        <li>Funding requirements and use-of-funds list</li>
        <li>
          Brand colour <GuideCode>businessblue</GuideCode> defined with xcolor
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>business-plan.tex</GuideCode>
          .
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents is complete.</li>
        <li>
          Edit the title page: company name, founder name and title. The date is{" "}
          <GuideCode>\today</GuideCode>; replace it with a fixed date when you send
          the plan.
        </li>
        <li>
          Work through each chapter replacing the bracketed prompts. Write the
          Executive Summary last, once the numbers are settled.
        </li>
        <li>
          Fill in the tables, keeping <GuideCode>\$</GuideCode> for dollar signs and{" "}
          <GuideCode>\%</GuideCode> for percentages.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Use booktabs for the financial tables.</strong> The package is loaded
        but the sample tables use vertical rules. A cleaner three-year projection:
      </GuideP>
      <GuidePre>{`\\begin{center}
\\begin{tabular}{lrrr}
\\toprule
 & \\textbf{Year 1} & \\textbf{Year 2} & \\textbf{Year 3} \\\\
\\midrule
Revenue            & \\$120{,}000 & \\$310{,}000 & \\$650{,}000 \\\\
Cost of goods sold & \\$48{,}000  & \\$118{,}000 & \\$234{,}000 \\\\
Operating expenses & \\$95{,}000  & \\$140{,}000 & \\$210{,}000 \\\\
\\midrule
\\textbf{Net income} & \\textbf{--\\$23{,}000} & \\textbf{\\$52{,}000} & \\textbf{\\$206{,}000} \\\\
\\bottomrule
\\end{tabular}
\\end{center}`}</GuidePre>
      <GuideP>
        <strong>Colour the links and chapter headings.</strong> hyperref is loaded, so
        tidy the contents links in the preamble; titlesec recolours the chapter
        titles with the same brand colour:
      </GuideP>
      <GuidePre>{`\\hypersetup{colorlinks=true, linkcolor=businessblue, urlcolor=businessblue}

\\usepackage{titlesec}
\\titleformat{\\chapter}[display]
  {\\normalfont\\huge\\bfseries\\color{businessblue}}
  {\\chaptertitlename\\ \\thechapter}{16pt}{\\Huge}`}</GuidePre>
      <GuideP>
        <strong>Add a confidential footer to every page.</strong> Load{" "}
        <GuideCode>fancyhdr</GuideCode> and repeat the label in the footer; the{" "}
        <GuideCode>plain</GuideCode> style is redefined too because report uses it on
        chapter opening pages:
      </GuideP>
      <GuidePre>{`\\usepackage{fancyhdr}
\\fancypagestyle{plain}{\\fancyhf{}\\renewcommand{\\headrulewidth}{0pt}
  \\lfoot{\\small Confidential}\\rfoot{\\small\\thepage}}
\\pagestyle{plain}`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/business-report">business report</GuideLink>,{" "}
        <GuideLink href="/templates/white-paper">white paper</GuideLink> and{" "}
        <GuideLink href="/templates/invoice">invoice</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Business plan template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
