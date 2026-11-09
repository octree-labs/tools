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
    question: "Can I write a novel or book manuscript in LaTeX?",
    answer:
      "Yes. This template uses the standard book class, which gives you front matter, numbered chapters, a table of contents and back matter out of the box. Write each chapter with \\chapter{Title}; for a long book, put chapters in separate files and pull them in with \\include{chapter1}.",
  },
  {
    question: "How do I remove the blank pages before chapters?",
    answer:
      "The book class starts every chapter on a right-hand (odd) page, which inserts a blank page when the previous chapter ends on an odd page. Add the openany option, \\documentclass[12pt,openany]{book}, and chapters start on the next page instead.",
  },
  {
    question: "How do I change the running header?",
    answer:
      "The header is set with fancyhdr in the preamble: \\fancyhead[LO] and \\fancyhead[RE] hold the 'Author Last Name / BOOK TITLE' text and \\fancyhead[RO] and \\fancyhead[LE] the page number. Replace the placeholder text in both LO and RE so odd and even pages match.",
  },
  {
    question: "Does the template count words for me?",
    answer:
      "No. The word count on the title page is typed by hand. Overleaf has a Word Count item in its menu, and on a local install the texcount tool counts words in a .tex file; update the title page figure before you submit.",
  },
];

export default function ManuscriptGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A book manuscript template in LaTeX</GuideH2>
      <GuideP>
        This manuscript LaTeX template sets up a book-length document for a novel or a
        non-fiction book in a plain, double-spaced format that is easy to read and mark
        up. The title page puts your name, address, phone, email and an approximate word
        count in the top-left corner, with the book title and byline centred lower down,
        the layout many publishers and agents expect for a submitted manuscript. Check
        the submission guidelines of the press or agent you are sending to, since some
        ask for a particular font, spacing or file format.
      </GuideP>
      <GuideP>
        The template uses the standard <GuideCode>book</GuideCode> class at 12 pt with
        one-inch margins and <GuideCode>setspace</GuideCode> for double spacing, so it
        works as a manuscript template for Overleaf, Octree or any local TeX install.{" "}
        <GuideCode>fancyhdr</GuideCode> prints &quot;Author Last Name / BOOK TITLE&quot;
        and the page number at the top of each page, with no header rule. The document
        is split the way books are: <GuideCode>\frontmatter</GuideCode> holds the
        dedication, acknowledgments and table of contents;{" "}
        <GuideCode>\mainmatter</GuideCode> holds four sample chapters, including a scene
        break inside a chapter; and <GuideCode>\backmatter</GuideCode> holds an author
        bio. Chapter numbering, the table of contents and roman page numbers in the
        front matter are handled by the class.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page with contact details, word count, title and byline</li>
        <li>Dedication, acknowledgments and table of contents in the front matter</li>
        <li>Four numbered sample chapters with a scene break example</li>
        <li>Author bio in the back matter</li>
        <li>Double spacing and a running header with author, title and page number</li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>manuscript.tex</GuideCode>.
        </li>
        <li>
          Compile with pdfLaTeX. Compile twice after adding or renaming chapters so the
          table of contents updates.
        </li>
        <li>
          Fill in the <GuideCode>titlepage</GuideCode> block and replace the{" "}
          <GuideCode>\fancyhead[LO]</GuideCode> and <GuideCode>\fancyhead[RE]</GuideCode>{" "}
          text with your surname and title.
        </li>
        <li>
          Write each chapter after <GuideCode>{"\\chapter{...}"}</GuideCode>. Unnumbered
          pages such as the dedication use <GuideCode>{"\\chapter*{...}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Drop the blank pages.</strong> The <GuideCode>book</GuideCode> class
        opens chapters on right-hand pages. For a manuscript that will be read on screen
        or printed one-sided, use:
      </GuideP>
      <GuidePre>{`\\documentclass[12pt,openany,oneside]{book}`}</GuidePre>
      <GuideP>
        With <GuideCode>oneside</GuideCode>, fancyhdr uses only the odd-page settings,
        so the header becomes <GuideCode>\fancyhead[LO]</GuideCode> text on the left and
        the page number on the right on every page.
      </GuideP>
      <GuideP>
        <strong>Use a visible scene break.</strong> The sample marks a scene break with
        an empty <GuideCode>{"\\section*{}"}</GuideCode>, which only adds space. A centred
        symbol is clearer for editors; define it once in the preamble and use{" "}
        <GuideCode>\scenebreak</GuideCode> in the text:
      </GuideP>
      <GuidePre>{`\\newcommand{\\scenebreak}{\\par\\begin{center}\\#\\end{center}\\par}`}</GuidePre>
      <GuideP>
        <strong>Split chapters into files.</strong> For a full-length book, move each
        chapter into its own file (<GuideCode>chapter1.tex</GuideCode> starting with{" "}
        <GuideCode>{"\\chapter{...}"}</GuideCode>) and replace it in the main file with{" "}
        <GuideCode>{"\\include{chapter1}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/book-chapter">book chapter</GuideLink>,{" "}
        <GuideLink href="/templates/thesis">thesis</GuideLink> and{" "}
        <GuideLink href="/templates/essay">essay</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Manuscript template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
