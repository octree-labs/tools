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
    question: "Which pseudocode package does this template use?",
    answer:
      "algpseudocode, the most common layout of the algorithmicx bundle, inside the float from the algorithm package. Its commands are capitalised words such as \\State, \\If, \\For, \\While, \\Procedure and \\Return. The older algorithmic package uses upper-case commands (\\STATE, \\IF) instead; do not load both, because they define the same algorithmic environment.",
  },
  {
    question: "How do I write Input and Output lines?",
    answer:
      "Use \\Require and \\Ensure at the top of the algorithmic environment. They print Require: and Ensure: by default; add \\algrenewcommand\\algorithmicrequire{\\textbf{Input:}} and \\algrenewcommand\\algorithmicensure{\\textbf{Output:}} to the preamble to relabel them.",
  },
  {
    question: "How do I stop the algorithm from floating to another page?",
    answer:
      "The algorithm environment is a float, like figure. Load the float package and write \\begin{algorithm}[H] to keep it exactly where it appears in the source, or use [t] or [p] for top of page and float page.",
  },
  {
    question: "Does this algorithm template work in Overleaf?",
    answer:
      "Yes. algorithm, algpseudocode, listings and xcolor are all in TeX Live, so the template compiles unchanged in Overleaf, Octree or a local install with pdfLaTeX.",
  },
];

export default function AlgorithmGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">An algorithm pseudocode template in LaTeX</GuideH2>
      <GuideP>
        This algorithm pseudocode template in LaTeX is a short document for
        presenting one algorithm properly: a numbered pseudocode listing, a complexity
        analysis and a worked example. It is built on the standard{" "}
        <GuideCode>article</GuideCode> class at 12 pt with 1 inch margins and uses the
        two packages most papers and theses rely on for pseudocode:{" "}
        <GuideCode>algorithm</GuideCode>, which provides the captioned, floating
        Algorithm box, and <GuideCode>algpseudocode</GuideCode> from the algorithmicx
        bundle, which provides the commands inside it.
      </GuideP>
      <GuideP>
        The sample procedure shows the constructs you will use most:{" "}
        <GuideCode>\Procedure</GuideCode> with an argument,{" "}
        <GuideCode>\State</GuideCode> assignments with <GuideCode>\gets</GuideCode>, a{" "}
        <GuideCode>\For</GuideCode> loop, an <GuideCode>\If</GuideCode> /{" "}
        <GuideCode>\Else</GuideCode> branch and <GuideCode>\Return</GuideCode>, with
        line numbers switched on by <GuideCode>{"\\begin{algorithmic}[1]"}</GuideCode>.
        After the listing come Time and Space Complexity bullets in big-O notation and
        an Input / Output example in typewriter type. The preamble also loads{" "}
        <GuideCode>listings</GuideCode> and <GuideCode>xcolor</GuideCode>, which the
        sample does not use yet, so you can add real source code next to the
        pseudocode without touching the preamble. The same snippets drop into a
        thesis, lab report or course assignment that needs an algorithm block.
      </GuideP>

      <GuideH2 id="included">What is included</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[12pt]{article}"}</GuideCode> with a title block
          for the algorithm name
        </li>
        <li>
          An <GuideCode>algorithm</GuideCode> float with an{" "}
          <GuideCode>algpseudocode</GuideCode> procedure and line numbers
        </li>
        <li>Complexity Analysis subsection with time and space bounds</li>
        <li>Example subsection with input and output</li>
        <li>
          <GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode>,{" "}
          <GuideCode>listings</GuideCode> and <GuideCode>xcolor</GuideCode> preloaded
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">How to use it</GuideH2>
      <GuideOl>
        <li>
          Click <em>Open as Template</em> to edit in Octree, or <em>View Source</em> and
          paste the code into Overleaf or a local <GuideCode>algorithm.tex</GuideCode>.
        </li>
        <li>Compile with pdfLaTeX; no bibliography or extra files are needed.</li>
        <li>
          Replace <GuideCode>[Algorithm Name]</GuideCode> in <GuideCode>\title</GuideCode>,
          the <GuideCode>\caption</GuideCode> and the{" "}
          <GuideCode>{"\\Procedure{AlgorithmName}{$input$}"}</GuideCode> line.
        </li>
        <li>
          Rewrite the body of <GuideCode>algorithmic</GuideCode> line by line, closing
          every block with its matching <GuideCode>\EndFor</GuideCode>,{" "}
          <GuideCode>\EndIf</GuideCode> or <GuideCode>\EndProcedure</GuideCode>.
        </li>
        <li>Update the complexity bounds and the example to match.</li>
      </GuideOl>

      <GuideH2 id="customise">Customise the template</GuideH2>
      <GuideP>
        <strong>Add Input/Output lines, a while loop and comments.</strong> These are
        all algpseudocode commands; the two <GuideCode>\algrenewcommand</GuideCode>{" "}
        lines go in the preamble:
      </GuideP>
      <GuidePre>{`\\algrenewcommand\\algorithmicrequire{\\textbf{Input:}}
\\algrenewcommand\\algorithmicensure{\\textbf{Output:}}

\\begin{algorithm}
\\caption{Binary search}
\\label{alg:bsearch}
\\begin{algorithmic}[1]
\\Require sorted array $A[1..n]$, target $x$
\\Ensure index of $x$, or $0$ if absent
\\State $lo \\gets 1$, $hi \\gets n$
\\While{$lo \\le hi$} \\Comment{search interval is non-empty}
    \\State $mid \\gets \\lfloor (lo + hi)/2 \\rfloor$
    \\If{$A[mid] = x$}
        \\State \\Return $mid$
    \\ElsIf{$A[mid] < x$}
        \\State $lo \\gets mid + 1$
    \\Else
        \\State $hi \\gets mid - 1$
    \\EndIf
\\EndWhile
\\State \\Return $0$
\\end{algorithmic}
\\end{algorithm}
Algorithm~\\ref{alg:bsearch} runs in $O(\\log n)$ time.`}</GuidePre>
      <GuideP>
        <strong>Show the real implementation with listings.</strong> The package is
        already loaded; this sets a readable style once and typesets a Python
        version of the sample procedure:
      </GuideP>
      <GuidePre>{`\\lstset{basicstyle=\\ttfamily\\small, keywordstyle=\\color{blue},
  commentstyle=\\color{gray}, numbers=left, numberstyle=\\tiny,
  frame=single, breaklines=true}

\\begin{lstlisting}[language=Python, caption={Python implementation}]
def algorithm_name(values, condition):
    result = 0
    for v in values:
        result += v if condition(v) else -v  # the If/Else branch
    return result
\\end{lstlisting}`}</GuidePre>
      <GuideP>
        <strong>Rename the float.</strong> To call the boxes Procedure instead of
        Algorithm, put <GuideCode>{"\\floatname{algorithm}{Procedure}"}</GuideCode> in
        the preamble; references made with <GuideCode>\ref</GuideCode> keep working.
      </GuideP>
      <GuideP>
        Related templates:{" "}
        <GuideLink href="/templates/technical-report">technical report</GuideLink>,{" "}
        <GuideLink href="/templates/lab-report">lab report</GuideLink> and{" "}
        <GuideLink href="/templates/thesis">thesis</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Algorithm template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
