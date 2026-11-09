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
    question: "What is the format of a business memo?",
    answer:
      "A memo starts with a MEMORANDUM heading and a block of TO, FROM, DATE and RE (subject) lines, followed by a rule and the body. This template uses that layout and splits the body into Purpose, Background, Discussion, Recommendation/Action Items and Conclusion, ending with a contact line instead of a signature.",
  },
  {
    question: "How do I add a CC line to the memo?",
    answer:
      "Add a line such as \\textbf{CC:} Name, Title\\\\ to the header block, between the FROM and DATE lines or after RE. Each header line ends with \\\\ except the last one.",
  },
  {
    question: "Why does the memo show today's date?",
    answer:
      "The DATE line uses \\today, which prints the date of the compile. Replace \\today with a written date, for example 14 May 2026, once the memo is final so the date does not change when you recompile.",
  },
  {
    question: "Can I use this memo template in Overleaf or Word?",
    answer:
      "The template is LaTeX, so it compiles with pdfLaTeX in Overleaf, Octree or any TeX install and produces a PDF to email or print. It loads only geometry and graphicx. It is not a Word file; if a recipient needs to edit it, send the PDF and the .tex source.",
  },
];

export default function MemoGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A memo template in LaTeX</GuideH2>
      <GuideP>
        This memo LaTeX template produces a professional business memorandum in the
        conventional layout: a bold MEMORANDUM heading, a header block with TO, FROM,
        DATE and RE lines, a horizontal rule, and a structured body. Use it for internal
        announcements, policy updates, decision requests or project status notes that
        need to look consistent and print cleanly.
      </GuideP>
      <GuideP>
        The body is organised the way most memo guides recommend, so the reader gets the
        point first. A Purpose section states why you are writing; Background gives the
        context; Discussion lists the key points as bold-labelled bullets with room for
        analysis; Recommendation/Action Items is a numbered list where each action names
        a responsible party and a deadline; and a short Conclusion closes the memo,
        followed by a contact line with an email address and phone extension. The
        source is the standard <GuideCode>article</GuideCode> class at 11 pt with
        one-inch margins, page numbers switched off with{" "}
        <GuideCode>\pagestyle{"{empty}"}</GuideCode>, and unnumbered{" "}
        <GuideCode>\section*</GuideCode> headings, so it compiles as a memo template
        for Overleaf, in Octree or with any local TeX install. The DATE line uses{" "}
        <GuideCode>\today</GuideCode>, and <GuideCode>graphicx</GuideCode> is already
        loaded if you want a company logo above the heading.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>MEMORANDUM heading and TO / FROM / DATE / RE block</li>
        <li>Full-width rule separating the header from the body</li>
        <li>Purpose, Background, Discussion, Recommendation/Action Items and Conclusion</li>
        <li>Bullet list of key points and a numbered action list</li>
        <li>Closing contact line</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>memo.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; one pass is enough.</li>
        <li>
          Fill in the TO, FROM and RE lines, and replace <GuideCode>\today</GuideCode>{" "}
          with a fixed date when the memo is final.
        </li>
        <li>
          Rewrite the sections. Delete any you do not need; short memos often keep only
          Purpose, Discussion and Action Items.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Align the header fields.</strong> The sample header is four lines with
        bold labels. A table lines the values up in one column and makes room for a CC
        line:
      </GuideP>
      <GuidePre>{`\\noindent
\\begin{tabular}{@{}ll}
\\textbf{TO:}   & All Engineering Staff \\\\
\\textbf{FROM:} & Jane Smith, Director of Operations \\\\
\\textbf{CC:}   & Leadership Team \\\\
\\textbf{DATE:} & 14 May 2026 \\\\
\\textbf{RE:}   & New on-call rota
\\end{tabular}`}</GuidePre>
      <GuideP>
        <strong>Add a logo.</strong> <GuideCode>graphicx</GuideCode> is loaded, so put{" "}
        <GuideCode>{"\\includegraphics[height=1.2cm]{logo}"}</GuideCode> and a{" "}
        <GuideCode>\\</GuideCode> at the top of the first <GuideCode>center</GuideCode>{" "}
        block, above MEMORANDUM.
      </GuideP>
      <GuideP>
        <strong>Number pages on longer memos.</strong> Change{" "}
        <GuideCode>\pagestyle{"{empty}"}</GuideCode> to{" "}
        <GuideCode>\pagestyle{"{plain}"}</GuideCode> to print page numbers in the
        footer when the memo runs past one page.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/meeting-minutes">meeting minutes</GuideLink>,{" "}
        <GuideLink href="/templates/business-report">business report</GuideLink> and{" "}
        <GuideLink href="/templates/letter">formal letter</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Memo template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
