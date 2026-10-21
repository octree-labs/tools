import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "./ui";

const faq: GuideFaqItem[] = [
  {
    question: "How long should a literature review be?",
    answer:
      "It depends on where it sits. A stand-alone review for a course is usually 2,000 to 4,000 words; the review chapter of a master's thesis runs 5,000 to 10,000 words and a PhD chapter can be longer; the literature section of a journal article or proposal is often under 1,000 words. The example in this template is about 1,500 words and compiles to four single-spaced pages at 11pt, which suits an assignment or a first draft for a supervisor.",
  },
  {
    question: "What is the difference between a literature review and an annotated bibliography?",
    answer:
      "An annotated bibliography is a list: each source gets its own paragraph of summary and evaluation and the entries do not talk to each other. A literature review is an argument: it groups sources by theme, compares their findings and methods, and reaches a conclusion about what the field knows and does not know. Many students write the annotated bibliography first and then use it as raw material for the review.",
  },
  {
    question: "How do I write the conclusion of a literature review?",
    answer:
      "Restate the question the review set out to answer, give the two or three claims the evidence supports with the key citations attached, name the main limitation of the literature as a whole, and end with the direction future research should take. Do not introduce new sources in the conclusion. The example in the template follows exactly this order in one paragraph of about 200 words.",
  },
  {
    question: "Can I use BibTeX with this literature review template?",
    answer:
      "Yes. The template ships with a thebibliography environment so it compiles in one pdflatex run without extra files, and natbib builds the author-year citations from each \\bibitem[Author(Year)] label. To switch to a .bib file, delete the thebibliography block and replace it with \\bibliographystyle{plainnat} and \\bibliography{references}, then run pdflatex, bibtex, pdflatex, pdflatex. The \\citet and \\citep commands in the text do not change.",
  },
  {
    question: "Should a literature review be double-spaced?",
    answer:
      "Most university assignments and thesis regulations ask for double or one-and-a-half spacing; journals and proposals usually want single spacing. The template loads the setspace package and sets \\singlespacing in the preamble, so change that one line to \\onehalfspacing or \\doublespacing to meet your requirement. At double spacing the example runs to about seven pages.",
  },
];

export default function LiteratureReviewGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">What is a literature review?</GuideH2>
      <GuideP>
        A literature review is a structured account of what published research
        says about a question: which studies have been done, what they found,
        where they agree and disagree, how good their methods were and what is
        still unknown. It can stand alone as a course assignment or a journal
        article, or form the second chapter of a thesis and the background
        section of a proposal. It is not a list of summaries; that is an{" "}
        <GuideLink href="/templates/annotated-bibliography">annotated bibliography</GuideLink>
        , which is a useful first step but a different document. It is also not
        the plan for a new study; that belongs in a{" "}
        <GuideLink href="/templates/research-proposal">research proposal</GuideLink>
        , which usually contains a short review as one of its sections. This
        free LaTeX template gives you the structure together with a complete
        literature review example (seven studies of active learning in
        undergraduate STEM courses, all real and cited correctly) so you can see
        what each section looks like before you replace the content with your
        own.
      </GuideP>

      <GuideH2 id="structure">Literature review structure and format</GuideH2>
      <GuideP>
        The template follows the order that most departments expect. Lengths are
        for a 2,000 to 4,000 word stand-alone review; scale them up for a thesis
        chapter.
      </GuideP>
      <GuideTable
        headers={["Section", "Purpose", "Typical length"]}
        rows={[
          [
            "Abstract",
            "The question, the scope, the themes and the main conclusion in one paragraph.",
            "100 to 150 words",
          ],
          [
            "Introduction",
            "Why the question matters, the boundaries of the review, and the search strategy: databases, search terms, date range and inclusion criteria.",
            "Two paragraphs",
          ],
          [
            "Thematic sections",
            "Two to four themes, each synthesising several sources rather than describing them one at a time. A summary table of the included studies belongs here.",
            "60 to 70 percent of the text",
          ],
          [
            "Methodological critique",
            "Strengths and weaknesses of the literature as a whole: designs, samples, measures, generalisability.",
            "One or two paragraphs",
          ],
          [
            "Gaps and future directions",
            "What no study has answered and how it could be answered.",
            "One paragraph",
          ],
          [
            "Conclusion",
            "The answer to the question, the claims the evidence supports, and the direction for future work.",
            "150 to 250 words",
          ],
          [
            "References",
            "Every source cited, in author-year or numeric style as required.",
            "As needed",
          ],
        ]}
      />

      <GuideH2 id="organise">Theme, chronology or method: how to organise the review</GuideH2>
      <GuideP>
        Thematic organisation, used in the example, groups studies by the
        question they answer (achievement, equity, student perception) and is
        the right default: it forces you to compare sources instead of listing
        them. Chronological organisation works when the field has gone through
        clear phases and the story is how thinking changed, for instance from
        early single-course studies to large meta-analyses; each section covers
        a period and ends with what that period left unresolved. Methodological
        organisation groups studies by design (surveys, experiments,
        meta-analyses) and suits reviews whose point is that the answer depends
        on how the question was studied. Whichever you choose, the summary table
        should carry the same columns: author and year, design, sample and main
        finding, so a reader can scan the evidence base in one place.
      </GuideP>

      <GuideH2 id="conclusion">How to write the conclusion</GuideH2>
      <GuideP>
        A literature review conclusion answers the question the introduction
        asked, using only the sources already discussed. The example does this
        in four moves. It restates the aim: what is known about active learning
        in undergraduate STEM courses, for whom it works and how students
        perceive it. It states three claims with the supporting citations
        attached: active learning improves achievement and lowers failure rates
        by about half a standard deviation across disciplines; its benefits are
        largest for underrepresented students, but only when the active
        component is substantial and the classroom is deliberately inclusive;
        and students systematically underestimate how much they learn from it,
        so course evaluations are an unreliable guide to effectiveness. It then
        names the limitations of the literature as a whole (quasi-experimental
        designs, loose definitions of the intervention and short follow-up
        periods) and ends with what would turn a strong general finding into
        practical guidance: research that measures dosage, tracks retention and
        extends the evidence to new settings. Copy that shape and your
        conclusion will read as a verdict rather than a summary.
      </GuideP>

      <GuideH2 id="customise">How to customise the literature review template</GuideH2>
      <GuideH3>Citations and references</GuideH3>
      <GuideUl>
        <li>
          <GuideCode>{"\\citet{key}"}</GuideCode> gives an in-sentence citation
          (Freeman et al. (2014) found...); <GuideCode>{"\\citep{key}"}</GuideCode>{" "}
          gives a parenthetical one (Freeman et al., 2014). Both come from{" "}
          <GuideCode>natbib</GuideCode> with the <GuideCode>round</GuideCode>{" "}
          option.
        </li>
        <li>
          References live in a <GuideCode>thebibliography</GuideCode>{" "}
          environment with an <GuideCode>[Author(Year)]</GuideCode> label on each{" "}
          <GuideCode>\bibitem</GuideCode>, so the file compiles with plain
          pdflatex and no external files.
        </li>
        <li>
          To move to BibTeX, delete that environment and add the two lines below;
          the citation commands in the text stay the same.
        </li>
      </GuideUl>
      <GuidePre>{`\\bibliographystyle{plainnat}
\\bibliography{references}`}</GuidePre>

      <GuideH3>Spacing and page length</GuideH3>
      <GuideP>
        The preamble loads <GuideCode>setspace</GuideCode> and calls{" "}
        <GuideCode>\singlespacing</GuideCode>. Replace it with{" "}
        <GuideCode>\onehalfspacing</GuideCode> or{" "}
        <GuideCode>\doublespacing</GuideCode> if your department requires it;
        nothing else needs to change. The study table is set in{" "}
        <GuideCode>\small</GuideCode> with fixed-width <GuideCode>p</GuideCode>{" "}
        columns that add up to the text width, so add or remove a column by
        adjusting the widths rather than the font size.
      </GuideP>

      <GuideH3>APA style</GuideH3>
      <GuideP>
        The reference list already follows APA order (authors, year, title,
        journal, volume, issue, pages). For strict APA 7 formatting of the
        citations and the hanging-indent reference list, load{" "}
        <GuideCode>apacite</GuideCode> instead of <GuideCode>natbib</GuideCode>{" "}
        and use <GuideCode>{"\\bibliographystyle{apacite}"}</GuideCode> with a{" "}
        <GuideCode>.bib</GuideCode> file, or start from the{" "}
        <GuideLink href="/templates/apa-student-paper">APA student paper template</GuideLink>{" "}
        and paste the sections in.
      </GuideP>

      <GuideH2 id="faq">Literature review template FAQ</GuideH2>
      <GuideFaq items={faq} />
    </article>
  );
}
