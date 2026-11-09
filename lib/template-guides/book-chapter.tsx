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
    question: "Why doesn't the book title appear in the PDF?",
    answer:
      "The template sets \\title and \\author but never calls \\maketitle, so the output starts directly with the chapter. That is deliberate for a chapter you will send on its own or \\include into a larger book. Add \\maketitle after \\begin{document} if you want a title page.",
  },
  {
    question: "Should I use the report or the book class?",
    answer:
      "The template uses report, which is one-sided and lets chapters start on any page. Switch to \\documentclass[12pt]{book} for a printed book: it is two-sided by default, starts chapters on right-hand pages and adds \\frontmatter, \\mainmatter and \\backmatter. Everything else in the template works unchanged.",
  },
  {
    question: "How do I write a chapter for an edited volume?",
    answer:
      "Most publishers of edited books send their own class or style file, and the editor merges the chapters. Use this template to write and compile your chapter, keep figures and references self-contained, and move the text into the publisher's file when it arrives. Set the chapter number with \\setcounter{chapter}{n-1} if you need to match the volume.",
  },
  {
    question: "Does this book chapter template work in Overleaf?",
    answer:
      "Yes. It uses the report class with geometry and graphicx, all part of TeX Live, and compiles in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function BookChapterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A book chapter template in LaTeX</GuideH2>
      <GuideP>
        This book chapter template in LaTeX gives you a single chapter, ready to
        write, that you can compile on its own or later combine with other chapters
        into a full book or thesis. It uses the standard{" "}
        <GuideCode>report</GuideCode> class at 12 pt with 1 inch margins, so{" "}
        <GuideCode>\chapter</GuideCode> produces the large &quot;Chapter 1&quot;
        heading that readers expect, and sections, figures and equations are numbered
        within the chapter (1.1, 1.2 and so on).
      </GuideP>
      <GuideP>
        The skeleton has the usual shape of an academic or non-fiction chapter: an
        Introduction, a Background section with a subsection, a Main Content section
        with a bullet list, and a Conclusion that summarises what the chapter has
        presented. <GuideCode>graphicx</GuideCode> is loaded for figures. The
        preamble sets <GuideCode>\title</GuideCode> and <GuideCode>\author</GuideCode>{" "}
        for the book, but the document does not call <GuideCode>\maketitle</GuideCode>
        , so the PDF begins with the chapter itself, which is how chapters are
        usually circulated to co-authors, supervisors and editors. Because the
        template is so small, it is also a good way to learn how LaTeX structures
        long documents before moving to a full{" "}
        <GuideLink href="/templates/thesis">thesis template</GuideLink> or{" "}
        <GuideLink href="/templates/dissertation">dissertation template</GuideLink>,
        both of which use the same chapter and section commands. When you have
        several chapters, split them into separate files and pull them into one main
        document as shown below.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[12pt]{report}"}</GuideCode> with 1 inch margins
        </li>
        <li>
          One <GuideCode>\chapter</GuideCode> with four sections and a subsection
        </li>
        <li>A bullet list example</li>
        <li>
          <GuideCode>graphicx</GuideCode> loaded for figures
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>chapter.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX.</li>
        <li>
          Replace <GuideCode>{"\\chapter{Chapter Title}"}</GuideCode> and the section
          headings with your own.
        </li>
        <li>
          Write the chapter; add <GuideCode>\section</GuideCode> and{" "}
          <GuideCode>\subsection</GuideCode> commands as needed and they are numbered
          automatically.
        </li>
        <li>
          Set <GuideCode>\title</GuideCode> and <GuideCode>\author</GuideCode>, and
          add <GuideCode>\maketitle</GuideCode> if you want a title page.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Split a book into chapter files.</strong> Keep the preamble in a main
        file and put each chapter, starting at its <GuideCode>\chapter</GuideCode>{" "}
        line, in its own file. <GuideCode>\includeonly</GuideCode> lets you compile
        one chapter at a time while keeping the numbering of the full book:
      </GuideP>
      <GuidePre>{`% main.tex
\\documentclass[12pt]{report}
\\usepackage[margin=1in]{geometry}
\\usepackage{graphicx}
% \\includeonly{chapter2}

\\begin{document}
\\tableofcontents
\\include{chapter1}
\\include{chapter2}
\\end{document}`}</GuidePre>
      <GuideP>
        <strong>Start at a later chapter number.</strong> If this is chapter 4 of a
        book, set the counter to one less before <GuideCode>\chapter</GuideCode>:
      </GuideP>
      <GuidePre>{`\\setcounter{chapter}{3}
\\chapter{Chapter Title}   % prints Chapter 4`}</GuidePre>
      <GuideP>
        <strong>Add a numbered figure.</strong> graphicx is already loaded; figures
        are numbered by chapter, so the first one is Figure 1.1:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.7\\textwidth]{diagram}
  \\caption{An overview of the argument in this chapter.}
  \\label{fig:overview}
\\end{figure}
Figure~\\ref{fig:overview} summarises ...`}</GuidePre>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/thesis">thesis</GuideLink>,{" "}
        <GuideLink href="/templates/dissertation">dissertation</GuideLink> and{" "}
        <GuideLink href="/templates/manuscript">manuscript</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Book chapter template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
