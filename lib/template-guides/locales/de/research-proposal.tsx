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
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Wie lang sollte ein Forschungsexposé sein?",
    answer:
      "Ein Exposé für eine Master- oder Doktorarbeit umfasst meist 5 bis 15 Seiten; ein Antrag auf eine Förderausschreibung ist so lang, wie die Ausschreibung es vorgibt, oft 2 bis 5 Seiten plus Budget. Das Beispiel in dieser Vorlage ergibt bei 11 pt und Rändern von einem Zoll drei Seiten – eine sinnvolle Länge für eine Seminararbeit oder einen ersten Entwurf an die Betreuungsperson. Wenn Sie mehr Seiten brauchen, erweitern Sie zuerst Literaturüberblick und Methodik; die übrigen Abschnitte sollten kurz bleiben.",
  },
  {
    question: "Was ist der Unterschied zwischen einem Forschungsexposé und einem Exposé für die Abschlussarbeit?",
    answer:
      "Ein Exposé für die Abschlussarbeit ist ein Forschungsexposé, das sich an eine Prüfungskommission richtet: Es begründet, dass das Projekt für eine einzelne Person in der verfügbaren Zeit machbar ist, und enthält meist zusätzlich eine Kapitelgliederung und einen Betreuungsplan. Ein Förder- oder Drittmittelantrag richtet sich an einen Geldgeber und ergänzt eine Budgetbegründung, Arbeitsergebnisse und eine Darstellung der erwarteten Wirkung. Die Kernabschnitte (Hintergrund, Fragestellungen, Literatur, Methoden, Zeitplan, Literaturverzeichnis) sind identisch, weshalb diese Vorlage für beides funktioniert.",
  },
  {
    question: "Kann ich diese Vorlage für eine Promotionsbewerbung verwenden?",
    answer:
      "Ja. Viele Promotionsprogramme verlangen ein Exposé von 1.500 bis 3.000 Wörtern mit genau dieser Struktur. Ersetzen Sie das Beispielthema, formulieren Sie die Forschungsfragen ausdrücklich und achten Sie darauf, dass der Zeitplan die gesamte Programmdauer abdeckt (drei oder vier Jahre statt zwölf Monate). Prüfen Sie die Vorgaben des Fachbereichs auf Pflichtüberschriften wie Qualifizierungsbedarf oder Betreuung und ergänzen Sie diese als neue \\section-Befehle.",
  },
  {
    question: "Wie zitiere ich Quellen im Forschungsexposé?",
    answer:
      "Die Vorlage lädt natbib mit der Option round, sodass \\citet{key} „Cepeda et al. (2006)“ und \\citep{key} „(Cepeda et al., 2006)“ erzeugt. Die Literaturangaben stehen in einer thebibliography-Umgebung am Ende der Datei: Jeder Eintrag beginnt mit \\bibitem[Author(Year)]{key}, damit natbib die Autor-Jahr-Kennung bilden kann. Wenn Sie bereits eine .bib-Datei haben, löschen Sie diese Umgebung, fügen \\bibliographystyle{plainnat} und \\bibliography{references} ein und führen BibTeX aus.",
  },
  {
    question: "Braucht ein Forschungsexposé ein Budget?",
    answer:
      "Nur wenn Sie Geld beantragen. Förder- und Drittmittelanträge enthalten immer eines, meist als Tabelle mit kurzer Begründung; der Abschnitt Budget der Vorlage zeigt eine kompakte booktabs-Fassung. Exposés für eine Abschlussarbeit lassen es in der Regel weg, es sei denn, Feldforschung, Geräte oder Vergütungen für Teilnehmende müssen vom Fachbereich genehmigt werden; behalten Sie in diesem Fall die Tabelle und löschen Sie die Zeilen, die Sie nicht benötigen.",
  },
];

export default function ResearchProposalGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Was ist ein Forschungsexposé?</GuideH2>
      <GuideP>
        Ein Forschungsexposé (englisch „research proposal“) ist ein kurzes
        Dokument, das ein Forschungsvorhaben begründet, bevor es durchgeführt
        wird: welche Frage Sie beantworten, warum sie wichtig ist, was bereits
        bekannt ist, wie Sie vorgehen und was das Vorhaben an Zeit und Geld
        kostet. Betreuende, Prüfungskommissionen und Förderinstitutionen
        entscheiden anhand des Exposés, ob sich das Projekt lohnt und ob Sie es
        umsetzen können. Diese kostenlose LaTeX-Vorlage für ein Forschungsexposé
        liefert Ihnen die übliche Gliederung zusammen mit einem vollständigen
        Beispiel (ein Experiment zum verteilten Wiederholen mit
        Fremdsprachenlernenden), sodass Sie sehen, wie jeder Abschnitt fertig
        aussieht, bevor Sie den Inhalt durch Ihren eigenen ersetzen.
      </GuideP>

      <GuideH2 id="format">Aufbau eines Forschungsexposés: was in jeden Abschnitt gehört</GuideH2>
      <GuideP>
        Die folgenden Abschnitte entsprechen der Reihenfolge, die die meisten
        Hochschulrichtlinien vorsehen; schreibt die Ausschreibung eines
        Geldgebers eigene Überschriften vor, haben diese Vorrang. Die
        Längenangaben gelten für ein Exposé von drei bis zehn Seiten; für ein
        umfassendes Exposé zur Doktorarbeit skalieren Sie sie entsprechend.
      </GuideP>
      <GuideTable
        headers={["Abschnitt", "Inhalt", "Übliche Länge"]}
        rows={[
          [
            "Titelblock",
            "Ein präziser Titel, der die Variablen oder das Phänomen benennt, Ihr Name, die Betreuungsperson, der Fachbereich und das Abgabedatum.",
            "Eine halbe Seite",
          ],
          [
            "Zusammenfassung",
            "Problem, Forschungslücke, Methode und erwarteter Beitrag in einem Absatz.",
            "100 bis 200 Wörter",
          ],
          [
            "Einleitung und Hintergrund",
            "Warum das Thema relevant ist, die zentralen Begriffe und die Lücke im aktuellen Wissensstand, mit zwei oder drei Belegen.",
            "Ein bis zwei Seiten",
          ],
          [
            "Forschungsfragen und Hypothesen",
            "Zwei bis vier nummerierte Fragen, jeweils mit einer überprüfbaren Hypothese oder erwarteten Antwort.",
            "Eine halbe Seite",
          ],
          [
            "Literaturüberblick",
            "Was frühere Studien gefunden haben, wo sie sich widersprechen und was noch keine von ihnen untersucht hat.",
            "Ein bis drei Seiten",
          ],
          [
            "Methodik",
            "Design, Teilnehmende oder Daten, Materialien, Ablauf und Auswertungsplan – so detailliert, dass sich die Machbarkeit beurteilen lässt.",
            "Ein bis drei Seiten",
          ],
          [
            "Zeitplan",
            "Eine Tabelle oder ein Gantt-Diagramm der Projektphasen nach Monaten oder Quartalen; die Vorlage setzt ihn ans Ende der Methodik.",
            "Eine Viertelseite",
          ],
          [
            "Erwartete Ergebnisse und Bedeutung",
            "Was Sie zu finden erwarten und wem es nützt: dem Fachgebiet, der Praxis, der Politik.",
            "Eine halbe Seite",
          ],
          [
            "Budget",
            "Aufgeschlüsselte Kosten mit Gesamtsumme; nur bei Förderanträgen.",
            "Eine Viertelseite",
          ],
          [
            "Literaturverzeichnis",
            "Alle zitierten Quellen im Zitierstil, den Ihr Fachbereich oder Geldgeber verlangt.",
            "Nach Bedarf",
          ],
        ]}
      />

      <GuideH2 id="thesis-vs-grant">Exposé für die Abschlussarbeit oder Förderantrag</GuideH2>
      <GuideP>
        Dieselbe Vorlage eignet sich für beides, nur die Gewichtung verschiebt
        sich. Für ein Exposé zur Abschlussarbeit erweitern Sie Literaturüberblick
        und Methodik, dehnen den Zeitplan auf die Dauer des Studiums oder der
        Promotion aus, ergänzen eine Kapitelgliederung und streichen das Budget,
        sofern Ihr Fachbereich es nicht verlangt. Für einen Förderantrag halten
        Sie den Hintergrund knapp, fügen eine Budgetbegründung und eine Liste der
        Arbeitsergebnisse hinzu und halten sich genau an Seitenbegrenzung und
        Überschriften des Geldgebers. Steht die Finanzierung im Mittelpunkt,
        beginnen Sie besser mit der{" "}
        <GuideLink href="/templates/grant-proposal">Vorlage für Förderanträge</GuideLink>
        , die nach konkreten Zielen und einer Budgetbegründung aufgebaut ist;
        schreiben Sie bereits an der Dissertation, setzt die{" "}
        <GuideLink href="/templates/thesis">Vorlage für Abschlussarbeiten</GuideLink>{" "}
        dort an, wo dieses Exposé aufhört.
      </GuideP>

      <GuideH2 id="customise">So passen Sie die Vorlage für das Forschungsexposé an</GuideH2>
      <GuideH3>Titelblock und Betreuung</GuideH3>
      <GuideP>
        Antragstellende Person, Betreuung und Fachbereich stehen im Befehl{" "}
        <GuideCode>\author</GuideCode>. Behalten Sie die Zeilen mit{" "}
        <GuideCode>\normalsize</GuideCode> bei, damit die Zugehörigkeit kleiner
        gesetzt wird als Ihr Name, und ersetzen Sie <GuideCode>\date</GuideCode>{" "}
        bei der Abgabe durch ein festes Datum.
      </GuideP>
      <GuidePre>{`\\author{Your Name \\\\[4pt]
  \\normalsize Supervisor: Dr.\\ Supervisor Name \\\\
  \\normalsize Department of Linguistics, University Name \\\\
  \\normalsize \\texttt{your.email@university.edu}}
\\date{Submitted: 15 March 2026}`}</GuidePre>

      <GuideH3>Zeitplantabelle</GuideH3>
      <GuideP>
        Der Zeitplan ist eine <GuideCode>booktabs</GuideCode>-Tabelle mit einer
        Spalte pro Quartal und einem gefüllten Quadrat (
        <GuideCode>$\blacksquare$</GuideCode> aus{" "}
        <GuideCode>amssymb</GuideCode>) in jeder aktiven Zelle. Für ein kürzeres
        Projekt fügen Sie eine Spalte pro Monat hinzu, oder Zeilen für jedes
        Arbeitspaket. Für eine dreijährige Promotion verwenden Sie Jahre oder
        Semester als Spalten.
      </GuideP>
      <GuidePre>{`\\begin{tabular}{c >{\\raggedright\\arraybackslash}p{6.4cm} c c c c}
  \\toprule
  Phase & Activity & Y1 & Y2 & Y3 & Y4 \\\\
  \\midrule
  1 & Literature review and ethics approval & $\\blacksquare$ & & & \\\\
  2 & Data collection & & $\\blacksquare$ & $\\blacksquare$ & \\\\
  3 & Analysis and writing up & & & $\\blacksquare$ & $\\blacksquare$ \\\\
  \\bottomrule
\\end{tabular}`}</GuidePre>

      <GuideH3>Zitate und Literaturverzeichnis</GuideH3>
      <GuideUl>
        <li>
          <GuideCode>{"\\citet{key}"}</GuideCode> für ein Zitat im Satz
          („Nakata (2015) zeigte …“), <GuideCode>{"\\citep{key}"}</GuideCode>{" "}
          für ein Zitat in Klammern.
        </li>
        <li>
          Jedes <GuideCode>\bibitem</GuideCode> trägt eine Kennung{" "}
          <GuideCode>[Author(Year)]</GuideCode>, damit natbib Autor-Jahr-Zitate
          ohne BibTeX setzen kann; die Datei kompiliert mit einem einzigen
          pdflatex-Lauf plus einem weiteren für die Querverweise.
        </li>
        <li>
          Um auf eine <GuideCode>.bib</GuideCode>-Datei umzusteigen, ersetzen Sie
          die Umgebung <GuideCode>thebibliography</GuideCode> durch{" "}
          <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> und{" "}
          <GuideCode>{"\\bibliography{references}"}</GuideCode>, oder verwenden
          Sie den APA-Stil mit dem Paket <GuideCode>apacite</GuideCode>, falls
          Ihr Fachbereich ihn verlangt.
        </li>
      </GuideUl>

      <GuideH2 id="faq">Häufige Fragen zur Vorlage für das Forschungsexposé</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
