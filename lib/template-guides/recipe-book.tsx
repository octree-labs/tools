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
    question: "Can I make a cookbook in LaTeX?",
    answer:
      "Yes. This template uses the book class to create a recipe collection with a title page, table of contents, one chapter per course and a consistent layout for every recipe: a servings and timing line, an ingredients list, numbered instructions and a notes section. Add recipes by copying one \\section* block.",
  },
  {
    question: "Why don't individual recipes appear in the table of contents?",
    answer:
      "Recipes use the starred \\section*, which is never added to the contents automatically. Put \\addcontentsline{toc}{section}{Bruschetta} after each recipe heading, or switch to numbered \\section if you are happy with recipe numbers.",
  },
  {
    question: "Is the index generated automatically?",
    answer:
      "Partly. The Index chapter is a hand-written two-column list, but its page numbers come from \\pageref to a \\label after each chapter and recipe heading, so they stay correct as pages move. For each new recipe, add a label and an index line; for a large book, generate the index with the imakeidx package and \\index entries instead.",
  },
  {
    question: "How do I remove the blank pages between chapters?",
    answer:
      "The book class starts every chapter on a right-hand page. Add the openany option, \\documentclass[11pt,openany]{book}, so each chapter starts on the next page.",
  },
];

export default function RecipeBookGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">A recipe book and cookbook template in LaTeX</GuideH2>
      <GuideP>
        This recipe book LaTeX template turns a family recipe collection, a club
        fundraiser cookbook or a personal kitchen notebook into a neatly typeset book.
        It opens with a title page (&quot;My Recipe Collection&quot;, a subtitle,
        &quot;Compiled by&quot; and the date), then a table of contents and one chapter
        per course: Appetizers &amp; Starters, Main Courses and Desserts, each with a
        complete sample recipe (bruschetta, spaghetti carbonara and chocolate chip
        cookies), followed by a two-column index.
      </GuideP>
      <GuideP>
        Every recipe uses the same layout, which is what makes a cookbook easy to
        follow: the recipe name, a single line with servings, prep time and cook time,
        an Ingredients bullet list, numbered Instructions, and a closing Notes, Tips or
        Variations paragraph. The cookie recipe shows how to set a long ingredient list
        in two columns with <GuideCode>multicol</GuideCode>. The document uses the{" "}
        <GuideCode>book</GuideCode> class at 11 pt with one-inch margins,{" "}
        <GuideCode>enumitem</GuideCode> for flush-left lists,{" "}
        <GuideCode>graphicx</GuideCode> for food photos, and{" "}
        <GuideCode>xcolor</GuideCode> with a saddle-brown{" "}
        <GuideCode>recipecolor</GuideCode> defined and ready to use. It compiles as a
        cookbook template for Overleaf, in Octree or with any local TeX install. Copy a
        recipe block for each new dish, add chapters for other courses such as soups or
        breads, and add each new dish to the index at the end.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>Title page and table of contents</li>
        <li>Three course chapters with one complete recipe each</li>
        <li>Servings and timing line, ingredients, numbered steps and notes per recipe</li>
        <li>Two-column ingredient list example</li>
        <li>A two-column index with page numbers from <GuideCode>\pageref</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>recipes.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX, twice, so the table of contents updates.</li>
        <li>Edit the title page, then the chapter names and recipes.</li>
        <li>
          Escape special characters in ingredient lists: <GuideCode>\&amp;</GuideCode>,{" "}
          <GuideCode>\%</GuideCode>, <GuideCode>\$</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>One macro for the recipe header.</strong> Define the heading once so
        every recipe looks the same, appears in the contents, uses the unused{" "}
        <GuideCode>recipecolor</GuideCode>, and gets a label for the index:
      </GuideP>
      <GuidePre>{`\\newcommand{\\recipe}[5]{%
  \\section*{\\color{recipecolor}#2}\\label{rec:#1}
  \\addcontentsline{toc}{section}{#2}
  \\textbf{Servings:} #3 \\textbar{} \\textbf{Prep Time:} #4 \\textbar{} \\textbf{Cook Time:} #5}

\\recipe{bruschetta}{Bruschetta}{6}{15 min}{5 min}`}</GuidePre>
      <GuideP>
        <GuideCode>\textbar</GuideCode> is used because, with pdfLaTeX&apos;s default
        font encoding, a bare <GuideCode>|</GuideCode> in text can print as a dash.
      </GuideP>
      <GuideP>
        <strong>Keep the index accurate.</strong> The first argument of the macro is
        the label key, matching the template&apos;s existing labels, so index lines
        such as <GuideCode>{"Bruschetta, \\pageref{rec:bruschetta}"}</GuideCode> keep
        working. Compile twice after adding recipes so the page numbers update.
      </GuideP>
      <GuideP>
        <strong>Add a photo.</strong> Under the recipe header, add{" "}
        <GuideCode>{"\\includegraphics[width=0.6\\textwidth]{bruschetta}"}</GuideCode>{" "}
        inside a <GuideCode>center</GuideCode> environment.
      </GuideP>

      <GuideP>
        Related templates: <GuideLink href="/templates/manuscript">book manuscript</GuideLink>,{" "}
        <GuideLink href="/templates/newsletter">newsletter</GuideLink> and{" "}
        <GuideLink href="/templates/leaflet">leaflet</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Recipe book template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
