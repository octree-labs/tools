import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "Can I submit to EMNLP 2026 with this template as-is?",
    answer:
      "No. This skeleton reproduces the ACL look with standard packages so you can start writing anywhere, but ARR and EMNLP require the official style files. Before submitting, download acl.sty and acl_natbib.bst from github.com/acl-org/acl-style-files, replace the preamble with \\documentclass[11pt]{article} and \\usepackage[review]{acl} as shown in the template's comment block, and switch to \\bibliographystyle{acl_natbib}. Your section text, tables, figures and citations carry over unchanged.",
  },
  {
    question: "What is the page limit for EMNLP 2026?",
    answer:
      "Long papers may have up to eight pages of content and short papers up to four, with one extra page allowed in the camera-ready version (nine and five pages). References, the Limitations section, the ethics statement and appendices do not count toward the limit. Always confirm against the current call for papers at 2026.emnlp.org before submitting.",
  },
  {
    question: "Is the Limitations section mandatory?",
    answer:
      "Yes. Since 2022, every paper submitted through ACL Rolling Review to an *ACL venue, including EMNLP, must include a Limitations section after the conclusion. It does not count toward the page limit. Papers without it are desk-rejected. The template includes it as an unnumbered \\section*{Limitations}. An Ethics Statement is optional but strongly recommended where data or human subjects are involved.",
  },
  {
    question: "What are the EMNLP 2026 deadlines?",
    answer:
      "According to 2026.emnlp.org at the time of writing, the ARR submission deadline for long and short papers is May 25, 2026, the EMNLP commitment deadline is August 2, 2026, notification is August 20, 2026, camera-ready papers are due August 30, 2026 (all anywhere-on-Earth), and the conference takes place in Budapest, Hungary, from October 24 to 29, 2026. Dates can shift, so check the official call for papers.",
  },
  {
    question: "Why does the template load newtxmath instead of amssymb?",
    answer:
      "newtxmath provides Times-compatible math fonts and already defines every symbol that amssymb and latexsym provide. Loading amssymb as well triggers 'Command \\iint already defined' and similar errors. The template therefore loads amsmath first, then newtxtext and newtxmath, and omits amssymb. If you switch to the official acl.sty preamble, which uses the times package, you can load amssymb normally.",
  },
];

export default function Emnlp2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-emnlp">What is EMNLP, and what is this template?</GuideH2>
      <GuideP>
        EMNLP, the Conference on Empirical Methods in Natural Language Processing, is one
        of the three flagship venues of the Association for Computational Linguistics,
        alongside ACL and NAACL, and is organised by SIGDAT. EMNLP 2026 is scheduled for
        October 24 to 29, 2026 in Budapest, Hungary. Submissions go through ACL Rolling
        Review (ARR): papers are reviewed by ARR first and then &quot;committed&quot; to
        EMNLP. The 2026 website lists May 25, 2026 as the ARR submission deadline for
        long and short papers, August 2 as the commitment deadline, August 20 for
        notifications and August 30 for camera-ready papers. Always confirm these on the{" "}
        <GuideLink href="https://2026.emnlp.org/calls/main_conference_papers/" external>
          official call for papers
        </GuideLink>{" "}
        before planning around them.
      </GuideP>
      <GuideP>
        This EMNLP 2026 LaTeX template is a paper skeleton approximating the ACL style:
        two columns, 11pt Times, with abstract, numbered sections, an
        equation, a <GuideCode>booktabs</GuideCode> results table, a figure placeholder,
        and the unnumbered Limitations, Ethics Statement and Acknowledgments sections
        the venue expects. It compiles anywhere with standard packages, so you can start
        writing today and drop in the official style files when you are ready to submit.
      </GuideP>

      <GuideH2 id="format">The EMNLP submission format</GuideH2>
      <GuideUl>
        <li>
          <strong>Layout:</strong> two columns, 11pt Times Roman. The official{" "}
          <GuideCode>acl.sty</GuideCode> uses A4 paper, 2.5cm margins and a 0.6cm column
          gap; this skeleton approximates that look with standard packages.
        </li>
        <li>
          <strong>Length:</strong> long papers up to eight pages of content, short papers
          up to four; the camera-ready version gets one extra page. References,
          Limitations, the ethics statement and appendices do not count.
        </li>
        <li>
          <strong>Anonymity:</strong> reviewing is double-blind. Submit with the{" "}
          <GuideCode>review</GuideCode> option, which prints line numbers and hides
          authors, and remove acknowledgments and self-identifying links. There is no
          longer an anonymity period for preprints.
        </li>
        <li>
          <strong>Mandatory Limitations section</strong> after the conclusion, plus
          compliance with the ARR ethics policy and the Responsible NLP Research
          checklist. An Ethics Statement section is optional.
        </li>
      </GuideUl>

      <GuideH2 id="official-style">Official style files vs this skeleton</GuideH2>
      <GuideP>
        The official template depends on <GuideCode>acl.sty</GuideCode> and{" "}
        <GuideCode>acl_natbib.bst</GuideCode>, maintained at{" "}
        <GuideLink href="https://github.com/acl-org/acl-style-files" external>
          github.com/acl-org/acl-style-files
        </GuideLink>
        . They are distributed separately, so this skeleton emulates their look instead:{" "}
        <GuideCode>\documentclass[11pt,twocolumn,letterpaper]{"{article}"}</GuideCode>,{" "}
        <GuideCode>geometry</GuideCode> with ACL-like margins and column gap (the real acl.sty: A4, 2.5cm, 0.6cm),{" "}
        <GuideCode>newtxtext</GuideCode>/<GuideCode>newtxmath</GuideCode> for Times,{" "}
        <GuideCode>titlesec</GuideCode> for the ACL heading sizes,{" "}
        <GuideCode>natbib</GuideCode> with round brackets, <GuideCode>microtype</GuideCode>{" "}
        and <GuideCode>inconsolata</GuideCode> for code. For submission, replace the
        preamble with the block quoted in the template&apos;s header comment:
      </GuideP>
      <GuidePre>{`\\documentclass[11pt]{article}
\\usepackage[review]{acl}   % [final] for camera-ready
\\usepackage{times}
\\usepackage{latexsym}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{microtype}
\\usepackage{inconsolata}
...
\\bibliographystyle{acl_natbib}
\\bibliography{custom}`}</GuidePre>
      <GuideP>
        Delete the <GuideCode>geometry</GuideCode>, <GuideCode>newtx</GuideCode>,{" "}
        <GuideCode>titlesec</GuideCode>, <GuideCode>natbib</GuideCode> and{" "}
        <GuideCode>\pagestyle</GuideCode> lines, which <GuideCode>acl.sty</GuideCode>{" "}
        supplies itself. The body of the paper needs no changes.
      </GuideP>

      <GuideH2 id="walkthrough">Section-by-section walkthrough</GuideH2>
      <GuideH3>Title and authors</GuideH3>
      <GuideP>
        <GuideCode>\title</GuideCode> is set bold and <GuideCode>\Large</GuideCode>. The{" "}
        <GuideCode>\author</GuideCode> block uses superscript numbers to tie each author
        to an affiliation, with emails in <GuideCode>\texttt</GuideCode>.{" "}
        <GuideCode>\date{"{}"}</GuideCode> suppresses the date. Under the official style,
        the <GuideCode>review</GuideCode> option replaces all of this with
        &quot;Anonymous ACL submission&quot;.
      </GuideP>
      <GuideH3>Abstract and introduction</GuideH3>
      <GuideP>
        The abstract is a single paragraph; keep it under 200 words so it fits in the
        first column. The introduction ends with a compact contribution list, a
        convention most EMNLP papers follow because reviewers look for it.
      </GuideP>
      <GuideH3>Related work and citations</GuideH3>
      <GuideP>
        The template uses <GuideCode>natbib</GuideCode> author-year commands:{" "}
        <GuideCode>\citet{"{devlin2019bert}"}</GuideCode> gives &quot;Devlin et al.
        (2019)&quot; for textual citations and{" "}
        <GuideCode>\citep{"{devlin2019bert}"}</GuideCode> gives &quot;(Devlin et al.,
        2019)&quot; for parenthetical ones. <GuideCode>\citealp</GuideCode> drops the
        brackets and <GuideCode>\citeyearpar</GuideCode> prints only the year. These are
        the same commands <GuideCode>acl_natbib.bst</GuideCode> expects, so citations
        survive the switch to the official files.
      </GuideP>
      <GuideH3>Method, experiments and results</GuideH3>
      <GuideP>
        The Method section shows a numbered <GuideCode>equation</GuideCode> with{" "}
        <GuideCode>\label</GuideCode> for cross-referencing. Experiments use{" "}
        <GuideCode>\paragraph</GuideCode> run-in headings for Datasets, Baselines and
        Implementation details, which saves vertical space in two-column layouts. The
        results table uses <GuideCode>booktabs</GuideCode> rules and{" "}
        <GuideCode>\small</GuideCode> text; the figure is an <GuideCode>\fbox</GuideCode>{" "}
        placeholder to replace with <GuideCode>\includegraphics</GuideCode>. Use{" "}
        <GuideCode>table*</GuideCode> and <GuideCode>figure*</GuideCode> for floats that
        should span both columns.
      </GuideP>
      <GuideH3>Limitations, ethics, references, appendix</GuideH3>
      <GuideP>
        The three closing sections are <GuideCode>\section*</GuideCode> so they are
        unnumbered, as in accepted EMNLP papers. The references are a{" "}
        <GuideCode>thebibliography</GuideCode> stub with three well-known entries so the
        skeleton compiles without a <GuideCode>.bib</GuideCode> file; replace it with{" "}
        <GuideCode>\bibliography{"{custom}"}</GuideCode> as soon as you have one.{" "}
        <GuideCode>\appendix</GuideCode> restarts section lettering for supplementary
        material.
      </GuideP>

      <GuideH2 id="customize">How to customize the template</GuideH2>
      <GuideUl>
        <li>
          <strong>Use a .bib file.</strong> Delete the <GuideCode>thebibliography</GuideCode>{" "}
          block, keep <GuideCode>\bibliographystyle{"{plainnat}"}</GuideCode> for drafting
          (or <GuideCode>acl_natbib</GuideCode> once you have the file), and add{" "}
          <GuideCode>\bibliography{"{custom}"}</GuideCode>.
        </li>
        <li>
          <strong>Algorithms and code.</strong> Add{" "}
          <GuideCode>\usepackage{"{algorithm,algpseudocode}"}</GuideCode> or{" "}
          <GuideCode>listings</GuideCode>; <GuideCode>inconsolata</GuideCode> is already
          loaded for monospace text.
        </li>
        <li>
          <strong>Anonymise.</strong> Replace the author block with &quot;Anonymous
          EMNLP submission&quot;, strip the Acknowledgments, and refer to your own prior
          work in the third person.
        </li>
        <li>
          <strong>Short paper.</strong> Drop Related Work into the introduction and merge
          Results and Analysis; keep Limitations.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Common errors and how to fix them</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Command \iint already defined&quot; or similar.</strong> You added{" "}
          <GuideCode>amssymb</GuideCode> or <GuideCode>latexsym</GuideCode> next to{" "}
          <GuideCode>newtxmath</GuideCode>. Remove them; <GuideCode>newtxmath</GuideCode>{" "}
          already provides those symbols. Also keep <GuideCode>amsmath</GuideCode> loaded
          before <GuideCode>newtxmath</GuideCode>, as the template does.
        </li>
        <li>
          <strong>&quot;File `acl.sty&apos; not found&quot;.</strong> The official file is
          not bundled. Download it from the acl-style-files repository and place it next
          to your <GuideCode>.tex</GuideCode> file.
        </li>
        <li>
          <strong>&quot;Bibliography not compatible with author-year citations&quot;.</strong>{" "}
          You switched to a numeric style such as <GuideCode>plain</GuideCode>. Use{" "}
          <GuideCode>plainnat</GuideCode> or <GuideCode>acl_natbib</GuideCode> with{" "}
          <GuideCode>natbib</GuideCode>.
        </li>
        <li>
          <strong>Undefined citations after editing the bib.</strong> Run BibTeX and then
          pdfLaTeX twice more, or use <GuideCode>latexmk</GuideCode>.
        </li>
        <li>
          <strong>Overfull \hbox in two columns.</strong> Long URLs and inline code are
          the usual culprits; wrap URLs in <GuideCode>\url</GuideCode> (loaded) and allow
          hyphenation with <GuideCode>\-</GuideCode> in long tokens.
        </li>
        <li>
          <strong>&quot;newtxtext.sty not found&quot;.</strong> Run{" "}
          <GuideCode>tlmgr install newtx</GuideCode> on a minimal TeX Live.
        </li>
      </GuideUl>

      <GuideH2 id="compile">How to compile the EMNLP template</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> click <em>Open as template</em>. The skeleton compiles
          immediately with a live preview; the AI assistant can help draft sections or
          convert a results CSV into a <GuideCode>booktabs</GuideCode> table.
        </li>
        <li>
          <strong>In Overleaf:</strong> paste the source into a blank project (pdfLaTeX).
          For submission, upload <GuideCode>acl.sty</GuideCode> and{" "}
          <GuideCode>acl_natbib.bst</GuideCode> to the project, or start from the official
          ACL template in the Overleaf gallery.
        </li>
        <li>
          <strong>Locally:</strong>
          <GuidePre>{`pdflatex paper.tex
bibtex paper          # once you use a .bib file
pdflatex paper.tex
pdflatex paper.tex
# or: latexmk -pdf paper.tex`}</GuidePre>
        </li>
      </GuideOl>

      <GuideH2 id="comparison">EMNLP 2026 vs other conference templates</GuideH2>
      <GuideTable
        headers={["Template", "Venue style", "Layout", "Required sections"]}
        rows={[
          [
            <strong key="e">EMNLP 2026</strong>,
            "ACL / ARR (emulated)",
            "Two columns, 11pt Times, A4 (acl.sty)",
            "Limitations (mandatory), Ethics Statement (optional)",
          ],
          [
            <GuideLink key="a" href="/templates/acl-2026">
              ACL 2026
            </GuideLink>,
            "ACL / ARR (emulated)",
            "Two columns, 11pt, letter",
            "Same ARR rules; interchangeable with this skeleton",
          ],
          [
            <GuideLink key="n" href="/templates/neurips-2026">
              NeurIPS 2026
            </GuideLink>,
            "NeurIPS",
            "Single column, 11pt, 9 pages",
            "Paper checklist, broader impact",
          ],
        ]}
      />
      <GuideP>
        Because EMNLP, ACL and NAACL all use the same ARR style, a paper drafted in this
        template can be committed to whichever venue fits the timeline.
      </GuideP>

      <GuideH2 id="faq">Frequently asked questions</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
