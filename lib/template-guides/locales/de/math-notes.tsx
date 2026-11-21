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
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Wie schreibe ich Mathe-Mitschriften in LaTeX?",
    answer:
      "Verwenden Sie eine Vorlage, in der die Satzumgebungen bereits definiert sind, wie diese hier: Dann tippen Sie nur noch \\begin{theorem}, \\begin{definition} oder \\begin{proof}, und Nummerierung und Formatierung erfolgen automatisch. Definieren Sie Kurzbefehle für häufig verwendete Symbole, etwa \\newcommand{\\R}{\\mathbb{R}}, damit Sie in der Vorlesung mithalten können.",
  },
  {
    question: "Welche Satzumgebungen definiert die Vorlage?",
    answer:
      "Acht: theorem, lemma, proposition und corollary im kursiven Stil plain; definition und example im aufrechten Stil definition; remark und note im leichteren Stil remark. Alle teilen sich einen gemeinsamen, abschnittsweise nummerierten Zähler, sodass Sie Definition 2.1, Theorem 2.2, Example 2.3 erhalten. Die Umgebung proof stammt aus amsthm.",
  },
  {
    question: "Wie verweise ich mit der Nummer auf einen Satz?",
    answer:
      "Setzen Sie \\label{thm:closed} in den Satz und schreiben Sie im Text Theorem~\\ref{thm:closed}. LaTeX trägt die Nummer ein; kompilieren Sie zweimal, damit der Verweis aufgelöst wird.",
  },
  {
    question: "Kann ich diese Mathe-Mitschriften in Overleaf verwenden?",
    answer:
      "Ja. Die Vorlage verwendet die Klasse article mit geometry, amsmath, amssymb, amsthm, fancyhdr und xcolor, die alle zu TeX Live gehören, und kompiliert daher mit pdfLaTeX in Overleaf, Octree oder einer lokalen Installation.",
  },
];

export default function MathNotesGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Vorlage für Mathe-Mitschriften in LaTeX</GuideH2>
      <GuideP>
        Diese LaTeX-Vorlage für Mathe-Mitschriften ist darauf ausgelegt, eine
        Mathematikvorlesung oder eigene Lernnotizen mit sauber nummerierten
        Ergebnissen auszuarbeiten. Sie definiert alle in Mathematikveranstaltungen
        üblichen Aussagetypen (Satz, Lemma, Proposition, Korollar, Definition,
        Beispiel, Bemerkung und Notiz), die sich einen einzigen, abschnittsweise
        nummerierten Zähler teilen, sodass Verweise wie „Lemma 3.4“ über eine
        ganze Mitschrift hinweg eindeutig sind. Sätze erscheinen kursiv,
        Definitionen und Beispiele aufrecht, und Bemerkungen nutzen den leichteren
        Stil remark – ganz nach den üblichen Konventionen von{" "}
        <GuideCode>amsthm</GuideCode>.
      </GuideP>
      <GuideP>
        Die Beispielvorlesung ist ein kurzer Abschnitt mengentheoretischer
        Topologie: eine Definition der Stetigkeit über offene Mengen, der Satz,
        dass eine stetige Abbildung von einem kompakten Raum in einen
        Hausdorff-Raum abgeschlossen ist, ein Beweisgerüst, ein Beispiel, eine
        Bemerkung, ein Lemma über kompakte Bilder und zwei Übungsaufgaben. Das
        Dokument nutzt die Standardklasse <GuideCode>article</GuideCode> in 11 pt
        mit Rändern von einem Zoll. <GuideCode>fancyhdr</GuideCode> druckt den
        Kursnamen, „Lecture Notes“ und das Datum oben auf jede Seite und die
        Seitenzahl darunter; <GuideCode>xcolor</GuideCode> ist für
        Hervorhebungen geladen. Die Vorlage funktioniert für Mathe-Mitschriften in
        Overleaf, in Octree oder mit jeder lokalen TeX-Distribution und wächst
        durch zusätzliche Abschnitte von einer einzelnen Vorlesung zu einem
        ganzen Kurs.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>Acht satzartige Umgebungen mit einem gemeinsamen, abschnittsweisen Zähler</li>
        <li>Drei Satzstile: plain, definition und remark</li>
        <li>Laufende Kopfzeile für Kurs, Titel und Datum, Seitenzahl in der Fußzeile</li>
        <li>Beispielvorlesung zur Topologie mit Definition, Satz, Beweis, Beispiel und Übungsaufgaben</li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um sie in Octree zu
          bearbeiten, oder auf <em>Quellcode anzeigen</em>, und fügen Sie den Code
          in Overleaf oder eine lokale <GuideCode>notes.tex</GuideCode> ein.
        </li>
        <li>
          Kompilieren Sie mit pdfLaTeX. Wenn Sie <GuideCode>\ref</GuideCode>{" "}
          verwenden, kompilieren Sie zweimal.
        </li>
        <li>
          Legen Sie die Kopfzeile mit <GuideCode>\lhead</GuideCode> (Kurs) und{" "}
          <GuideCode>\rhead</GuideCode> (Datum) fest und den Titel der Vorlesung
          in <GuideCode>\title</GuideCode>.
        </li>
        <li>
          Schreiben Sie Ergebnisse mit den Umgebungen, zum Beispiel{" "}
          <GuideCode>{"\\begin{proposition} ... \\end{proposition}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Kurzbefehle für die Notation anlegen.</strong> Fügen Sie Folgendes
        in die Präambel ein, um <GuideCode>\R</GuideCode> statt{" "}
        <GuideCode>{"\\mathbb{R}"}</GuideCode> zu tippen:
      </GuideP>
      <GuidePre>{`\\newcommand{\\R}{\\mathbb{R}}
\\newcommand{\\N}{\\mathbb{N}}
\\DeclareMathOperator{\\interior}{int}`}</GuidePre>
      <GuideP>
        <strong>Sätze farbig hinterlegen.</strong> Laden Sie{" "}
        <GuideCode>tcolorbox</GuideCode> nach den Zeilen mit{" "}
        <GuideCode>\newtheorem</GuideCode> und umschließen Sie eine Umgebung mit
        einem farbigen Kasten, ohne an Ihrer Schreibweise etwas zu ändern:
      </GuideP>
      <GuidePre>{`\\usepackage{tcolorbox}
\\tcolorboxenvironment{theorem}{colback=blue!5,colframe=blue!50!black}`}</GuidePre>
      <GuideP>
        <strong>Einen Kerngedanken hervorheben.</strong>{" "}
        <GuideCode>xcolor</GuideCode> ist bereits geladen, sodass{" "}
        <GuideCode>{"\\textcolor{red}{...}"}</GuideCode> eine Warnung oder einen
        typischen Fehler direkt im Text markiert.
      </GuideP>

      <GuideP>
        Verwandte Vorlagen: <GuideLink href="/templates/lecture-notes">Vorlesungsskript</GuideLink>,{" "}
        <GuideLink href="/templates/mathematical-document">mathematisches Dokument</GuideLink>{" "}
        und <GuideLink href="/templates/math-cheat-sheet">Mathe-Spickzettel</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur Vorlage für Mathe-Mitschriften</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
