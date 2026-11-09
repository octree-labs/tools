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
    question: "Does the invoice calculate totals automatically?",
    answer:
      "No. Every amount in the template, including the subtotal, the 8% tax line and the total due, is typed by hand, so check the arithmetic whenever you change a line item. The customisation section shows how to let LaTeX compute the amounts with \\fpeval and format them with siunitx.",
  },
  {
    question: "How do I add more line items?",
    answer:
      "Copy one row of the items table, for example 'Project Development & 1 & \\$2,500.00 & \\$2,500.00 \\\\', above the empty \\\\ line that spaces the items from the totals, then update the subtotal, tax and total.",
  },
  {
    question: "Can I use a different currency?",
    answer:
      "Yes. Replace \\$ with the symbol you need: \\euro from the eurosym package for euros, \\pounds{} for pounds, or a plain code such as EUR or GBP, which avoids font issues entirely. Change it in the rate, amount and total columns.",
  },
  {
    question: "Does this invoice template work in Overleaf?",
    answer:
      "Yes. It uses the article class with geometry, graphicx, booktabs and xcolor, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function InvoiceGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An invoice template in LaTeX</GuideH2>
      <GuideP>
        This invoice template in LaTeX is a one-page invoice for freelancers,
        consultants and small businesses that bill for services or products. It
        uses the standard <GuideCode>article</GuideCode> class with 0.75 inch margins,
        no page number, <GuideCode>booktabs</GuideCode> for the line-item table and a
        single accent colour, <GuideCode>headerblue</GuideCode>, for the rules.
      </GuideP>
      <GuideP>
        The top of the page puts a large INVOICE heading with a blue rule on the
        left and your company name, address, phone and email on the right. Below
        that, a Bill To block for the client sits opposite the invoice details:
        invoice number (INV-2025-001 in the sample), invoice date, due date and
        payment terms (Net 30). The items table has Description, Quantity, Rate and
        Amount columns with three sample lines (hourly consulting, a fixed-price
        project and hourly research), followed by Subtotal, Tax at 8% and a bold
        Total Due. The lower part of the page lists payment details (bank name,
        account and routing numbers, SWIFT code), three notes covering the payment
        deadline, quoting the invoice number and a late-payment charge, and a
        closing thank-you line. All amounts are plain text, so double-check the
        sums after each edit, or let LaTeX calculate them as shown below. For a covering note to send with the invoice, see the{" "}
        <GuideLink href="/templates/letter">letter template</GuideLink>.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>INVOICE heading and company contact block</li>
        <li>Bill To block and invoice number, dates and terms</li>
        <li>A booktabs line-item table with subtotal, tax and total</li>
        <li>Payment information and notes</li>
        <li>
          One colour, <GuideCode>headerblue</GuideCode>, defined in the preamble
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>invoice.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>Replace your company details and the client&apos;s Bill To block.</li>
        <li>
          Set the invoice number, dates and terms, then edit the line items and
          recalculate subtotal, tax and total.
        </li>
        <li>
          Replace the sample bank details and notes with your own, and save each
          invoice under its number.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Let LaTeX do the arithmetic.</strong> <GuideCode>\fpeval</GuideCode>{" "}
        evaluates expressions and <GuideCode>siunitx</GuideCode> formats the result
        with thousands separators and two decimals. Add to the preamble (
        <GuideCode>xfp</GuideCode> provides <GuideCode>\fpeval</GuideCode> on older
        LaTeX installations):
      </GuideP>
      <GuidePre>{`\\usepackage{xfp}
\\usepackage{siunitx}
\\sisetup{group-separator={,}, group-minimum-digits=4,
  round-mode=places, round-precision=2}
\\newcommand{\\money}[1]{\\$\\num{\\fpeval{#1}}}

% in the table
Consulting Services - January & 40 hrs & \\money{150} & \\money{40*150} \\\\
...
& & \\textbf{Tax (8\\%):} & \\money{0.08*11000} \\\\`}</GuidePre>
      <GuideP>
        <strong>Fix the header width.</strong> The two header minipages are each half
        the text width, and the paragraph indent plus the space between them make
        the line 19pt too wide. Add <GuideCode>\noindent</GuideCode> before the first
        and <GuideCode>%</GuideCode> after its <GuideCode>{"\\end{minipage}"}</GuideCode>,
        and put the same <GuideCode>%</GuideCode> after the Bill To minipage below:
      </GuideP>
      <GuidePre>{`\\noindent
\\begin{minipage}[t]{0.5\\textwidth}
{\\Large \\textbf{INVOICE}}\\\\[0.3cm]
{\\color{headerblue}\\rule{5cm}{2pt}}
\\end{minipage}%
\\begin{minipage}[t]{0.5\\textwidth}`}</GuidePre>
      <GuideP>
        <strong>Add your logo.</strong> graphicx is loaded; put the logo in the
        right-hand header block above the company name:
      </GuideP>
      <GuidePre>{`\\raggedleft
\\includegraphics[height=1.5cm]{logo}\\\\[0.2cm]
{\\large \\textbf{Your Company Name}}\\\\`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/letter">letter</GuideLink>,{" "}
        <GuideLink href="/templates/business-card">business card</GuideLink> and{" "}
        <GuideLink href="/templates/business-plan">business plan</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Invoice template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
