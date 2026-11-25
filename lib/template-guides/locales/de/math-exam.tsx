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
    question: "Wie erstelle ich eine Mathematikklausur in LaTeX?",
    answer:
      "Beginnen Sie mit dieser Vorlage: Sie enthält eine Kopfzeile mit Kurs und Semester, Zeilen für Name und Matrikelnummer, eine Liste mit Hinweisen, eine Punktetabelle und nummerierte Aufgaben mit Freiraum für den Lösungsweg. Passen Sie die Kopfzeile an, schreiben Sie jede Aufgabe als Absatz \\textbf{Problem N.} mit ihrer Punktzahl und legen Sie den Antwortraum mit \\vspace fest.",
  },
  {
    question: "Wird die Punktetabelle automatisch summiert?",
    answer:
      "Nein. Die Tabelle ist ein gewöhnliches tabular; wenn Sie eine Aufgabe hinzufügen, entfernen oder neu gewichten, müssen Sie die Zeilen Problem, Points und Total sowie die Zeile in den Hinweisen von Hand anpassen. Wenn Sie automatische Summen möchten, bietet die Dokumentklasse exam (Teil von TeX Live) den Befehl \\question[points] und, nach \\addpoints in der Präambel, eine \\gradetable, die die Punkte für Sie addiert.",
  },
  {
    question: "Wie gebe ich den Studierenden mehr Platz zum Schreiben?",
    answer:
      "Vergrößern Sie den \\vspace nach jeder Aufgabe, zum Beispiel auf \\vspace{8cm}, oder beginnen Sie eine Aufgabe mit \\newpage auf einer neuen Seite. Im Beispiel folgen auf die Aufgaben 1 und 2 jeweils 4 cm, auf Aufgabe 3 ein Seitenumbruch und auf Aufgabe 4 6 cm.",
  },
  {
    question: "Kann ich diese Klausur aus Overleaf drucken?",
    answer:
      "Ja. Die Vorlage verwendet die Klasse article mit geometry, amsmath, amssymb, amsthm und fancyhdr und kompiliert daher mit pdfLaTeX in Overleaf, Octree oder einer lokalen TeX-Installation. Laden Sie das PDF herunter und drucken Sie es in Originalgröße (100 %) auf Letter-Papier; für A4 ergänzen Sie a4paper in den Optionen von geometry.",
  },
];

export default function MathExamGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Vorlage für Mathematikklausuren in LaTeX</GuideH2>
      <GuideP>
        Diese LaTeX-Vorlage erzeugt eine druckfertige, formelle Mathematikklausur
        mit allem, was ein Deckblatt braucht: einer Kopfzeile mit Kurs,
        Klausurbezeichnung und Semester auf jeder Seite, Zeilen für Name und
        Matrikelnummer, einer kurzen Liste mit Hinweisen und einer Punktetabelle
        mit leerer Spalte für die Bewertung. Das Beispiel ist eine Abschlussklausur
        mit fünf Aufgaben und 100 Punkten für einen Einführungskurs: eine
        quadratische Gleichung, eine Ableitung mit der Quotientenregel, ein
        Integral per Substitution, ein kurzer Beweis über gerade Zahlen und ein
        trigonometrischer Grenzwert.
      </GuideP>
      <GuideP>
        Jede Aufgabe besteht aus einer fetten Bezeichnung „Problem N.“ mit der
        Punktzahl in Klammern, der Aufgabenstellung und einem festen vertikalen
        Freiraum für den Lösungsweg, sodass die Studierenden ihre Antworten direkt
        auf das Blatt schreiben. Der Quelltext nutzt die Standardklasse{" "}
        <GuideCode>article</GuideCode> in 12 pt mit Rändern von einem Zoll,{" "}
        <GuideCode>fancyhdr</GuideCode> für Kopfzeile und Seitenzahl sowie{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> für die
        Mathematik und funktioniert damit als Klausurvorlage für Overleaf, Octree
        oder jede lokale TeX-Installation. Da keine spezielle Klausurklasse zum
        Einsatz kommt, ist jedes Element reines LaTeX, das sich leicht verschieben
        lässt: Passen Sie die Kopfzeile an, formulieren Sie die Aufgaben neu und
        justieren Sie den Antwortraum – schon ist ein Test, eine
        Zwischenklausur oder eine Abschlussklausur druckbereit.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>Laufende Kopfzeile mit Kurs, Klausurbezeichnung und Semester; Seitenzahl in der Fußzeile</li>
        <li>Zeilen für Name und Matrikelnummer</li>
        <li>Liste mit Hinweisen (Aufgaben, Punkte, Bearbeitungszeit, zugelassene Hilfsmittel)</li>
        <li>Punktetabelle mit den Spalten Problem, Points und Score</li>
        <li>Fünf Beispielaufgaben mit freiem Antwortraum</li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um sie in Octree zu
          bearbeiten, oder auf <em>Quellcode anzeigen</em>, und fügen Sie den Code in
          Overleaf oder eine lokale <GuideCode>exam.tex</GuideCode> ein.
        </li>
        <li>Kompilieren Sie mit pdfLaTeX; ein Durchlauf genügt.</li>
        <li>
          Bearbeiten Sie <GuideCode>\lhead</GuideCode>,{" "}
          <GuideCode>\chead</GuideCode> und <GuideCode>\rhead</GuideCode>, den
          zentrierten Titel und die Hinweise.
        </li>
        <li>
          Formulieren Sie die Aufgaben neu und passen Sie anschließend die
          Punktetabelle an, damit Zeilen und Gesamtsumme übereinstimmen.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Eine Aufgabe hinzufügen.</strong> Kopieren Sie einen
        Aufgabenblock, ändern Sie Nummer und Punktzahl und fügen Sie vor{" "}
        <GuideCode>\textbf{"{Total}"}</GuideCode> eine passende Zeile in die
        Tabelle ein:
      </GuideP>
      <GuidePre>{`\\noindent
\\textbf{Problem 6.} (10 points) Find all real solutions of
\\[
|2x - 3| = 5
\\]

\\vspace{4cm}`}</GuidePre>
      <GuideP>
        <strong>Seitenumbrüche steuern.</strong> Das Beispiel erzwingt mit{" "}
        <GuideCode>\newpage</GuideCode> eine neue Seite für Aufgabe 4. Setzen Sie
        einen solchen Befehl vor jede Aufgabe, die sonst von ihrem Antwortraum
        getrennt würde.
      </GuideP>
      <GuideP>
        <strong>Für automatische Summen zur Klasse exam wechseln.</strong> Wenn
        Sie viele Klausuren schreiben, zählt die Klasse{" "}
        <GuideCode>exam</GuideCode> die Punkte für Sie mit und erstellt die
        Bewertungstabelle:
      </GuideP>
      <GuidePre>{`\\documentclass[12pt]{exam}
\\usepackage{amsmath,amssymb}
\\addpoints
\\begin{document}
\\begin{center}
\\gradetable[h][questions]
\\end{center}
\\begin{questions}
\\question[20] Solve $3x^2 - 7x + 2 = 0$.
\\vspace{4cm}
\\question[20] Find the derivative of $f(x) = \\frac{\\sin x}{x^2+1}$.
\\vspace{4cm}
\\end{questions}
\\end{document}`}</GuidePre>

      <GuideP>
        Verwandte Vorlagen: <GuideLink href="/templates/quiz-template">Test</GuideLink>,{" "}
        <GuideLink href="/templates/math-problem-set">mathematisches Übungsblatt</GuideLink> und{" "}
        <GuideLink href="/templates/grading-rubric">Bewertungsraster</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur Vorlage für Mathematikklausuren</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
