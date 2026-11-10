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
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Was ist das IEEE-Format für Konferenzbeiträge?",
    answer:
      "Ein IEEE-Konferenzbeitrag wird auf US-Letter-Papier zweispaltig in 10 pt Times gesetzt, mit einem zentrierten Titel in 24 pt, Autorenblöcken unter dem Titel, fett eingeleitetem Abstract und Index Terms, römisch nummerierten Abschnitten mit Überschriften in Kapitälchen, nummerierten Zitaten in eckigen Klammern und ohne Seitenzahlen. Die LaTeX-Klasse IEEEtran erzeugt im Konferenzmodus all das automatisch; Sie liefern nur den Inhalt.",
  },
  {
    question: "Ist IEEEtran die offizielle IEEE-Vorlage?",
    answer:
      "Ja. IEEEtran.cls ist die Klasse, die IEEE für seine Transactions, Journals und Konferenzen bereitstellt, und die Option conference entspricht der IEEE-Konferenzvorlage im IEEE Author Center. Sie ist in TeX Live und MiKTeX enthalten, ein Download ist also nicht nötig. Manche Konferenzen legen ihrem Call for Papers eine Kopie der Klasse bei; in der Regel handelt es sich um dieselbe Datei.",
  },
  {
    question: "Wie viele Autorinnen und Autoren kann ich angeben, und wie teilen sich mehrere eine Affiliation?",
    answer:
      "Es gibt keine Obergrenze. Jedes Paar aus \\IEEEauthorblockN und \\IEEEauthorblockA bildet einen Block, getrennt durch \\and; IEEEtran setzt bis zu drei Blöcke pro Zeile. Teilen sich viele Personen dieselben Einrichtungen, verwenden Sie die auskommentierte Alternative in der Vorlage: Führen Sie die Namen einmal mit Markierungen \\IEEEauthorrefmark{1} auf und geben Sie jede Affiliation in einer eigenen Zeile \\IEEEauthorblockA an.",
  },
  {
    question: "Kann ich BibTeX mit dieser Vorlage verwenden?",
    answer:
      "Ja. Die Vorlage enthält ein von Hand geschriebenes thebibliography, damit sie eigenständig kompiliert. Löschen Sie diese Umgebung, behalten Sie \\bibliographystyle{IEEEtran} bei und ergänzen Sie \\bibliography{refs} mit Verweis auf Ihre .bib-Datei; IEEEtran.bst wird mit der Klasse ausgeliefert. Das bereits geladene Paket cite fasst aufeinanderfolgende Nummern zu Bereichen zusammen.",
  },
  {
    question: "Warum darf ich die Seitenränder nicht ändern?",
    answer:
      "IEEE PDF eXpress und die Konferenzleitung prüfen die Seitengeometrie. IEEEtran setzt Ränder, Spaltenbreite und Spaltenabstand genau so, wie es die IEEE-Spezifikation verlangt; wenn Sie geometry laden oder \\textwidth ändern, fällt der Beitrag bei der Formatprüfung durch. Ist Ihr Beitrag zu lang, kürzen Sie stattdessen Text oder Abbildungen.",
  },
];

export default function IeeeConferenceGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Was ist diese IEEE-Konferenzvorlage?</GuideH2>
      <GuideP>
        Diese Vorlage bildet das vollständige offizielle IEEE-Format für
        Konferenzbeiträge ab, erzeugt mit{" "}
        <GuideCode>\documentclass[conference]{"{IEEEtran}"}</GuideCode>, der Klasse, die
        IEEE für seine Konferenzen bereitstellt und die in jeder TeX-Distribution
        bereits installiert ist. Sie enthält alles, was eine vollständige Einreichung
        braucht: einen Titel mit Fußnote zur Förderung über{" "}
        <GuideCode>\thanks</GuideCode>, einen Block mit drei Autorinnen und Autoren über{" "}
        <GuideCode>\IEEEauthorblockN</GuideCode> und{" "}
        <GuideCode>\IEEEauthorblockA</GuideCode>, fett eingeleitetes Abstract und Index
        Terms, eine Einleitung mit Initiale über <GuideCode>\IEEEPARstart</GuideCode>,
        eine nummerierte Gleichung, einen Algorithmus mit{" "}
        <GuideCode>algorithmic</GuideCode>, eine <GuideCode>booktabs</GuideCode>-Tabelle
        mit Beschriftung oberhalb, eine Abbildung mit Beschriftung unterhalb, einen
        Abschnitt Acknowledgment und ein Literaturverzeichnis im IEEE-Stil.
      </GuideP>
      <GuideP>
        Von der kürzeren Vorlage{" "}
        <GuideLink href="/templates/research-paper">Research Paper</GuideLink>, die
        ebenfalls IEEEtran nutzt, unterscheidet sie sich dadurch, dass sie das
        vollständige Format abdeckt: korrekte Autorenblöcke mit Abteilung, Einrichtung,
        Ort und E-Mail-Adresse, Schlagwörter, Danksagung, eine Tabelle und eine
        Abbildung mit korrekten IEEE-Beschriftungen sowie fünf formatierte
        Literaturangaben. Verwenden Sie diese Vorlage, wenn Sie eine echte Einreichung
        schreiben.
      </GuideP>

      <GuideH2 id="format">Die IEEE-Formatregeln, die die Klasse durchsetzt</GuideH2>
      <GuideUl>
        <li>US-Letter-Papier, zwei Spalten, Grundschrift im Stil von Times in 10 pt.</li>
        <li>Titel in 24 pt, Autorennamen in 11 pt, Affiliationen in 10 pt, alles zentriert.</li>
        <li>
          Zwei Spalten von 3,5 Zoll mit 12 pt Spaltenabstand und von der Klasse
          festgelegten Rändern. Laden Sie nicht <GuideCode>geometry</GuideCode> und
          ändern Sie <GuideCode>\textwidth</GuideCode> nicht.
        </li>
        <li>Abstract und Index Terms fett mit eingebetteter Überschrift.</li>
        <li>
          Römisch nummerierte Abschnitte in Kapitälchen, mit Buchstaben gezählte
          Unterabschnitte kursiv.
        </li>
        <li>
          Tabellenbeschriftungen oberhalb der Tabelle in Kapitälchen („TABLE I“),
          Abbildungsbeschriftungen unterhalb („Fig. 1.“).
        </li>
        <li>
          Nummerierte Zitate in eckigen Klammern; aufeinanderfolgende Nummern fasst das
          Paket <GuideCode>cite</GuideCode> zusammen.
        </li>
        <li>Keine Seitenzahlen; diese ergänzt die Konferenz beim Erstellen des Tagungsbands.</li>
      </GuideUl>

      <GuideH2 id="walkthrough">Schritt für Schritt</GuideH2>
      <GuideH3>Autorenblock</GuideH3>
      <GuidePre>{`\\author{%
  \\IEEEauthorblockN{1\\textsuperscript{st} Given Name Surname}
  \\IEEEauthorblockA{\\textit{Dept. of Electrical Engineering} \\\\
    \\textit{Example University}\\\\
    City, Country \\\\
    first.author@example.edu}
  \\and
  ...
}`}</GuidePre>
      <GuideP>
        Ein Paar aus N und A pro Person, getrennt durch <GuideCode>\and</GuideCode>;
        IEEEtran setzt bis zu drei Blöcke pro Zeile. Das Ordnungspräfix (1st, 2nd)
        entspricht der aktuellen Konvention der IEEE-Konferenzvorlage und kann
        gelöscht werden. Bei sechs oder mehr Personen mit gemeinsamen Einrichtungen
        verwenden Sie die Variante mit <GuideCode>\IEEEauthorrefmark</GuideCode>, die
        im Quelltext als Kommentar steht.
      </GuideP>
      <GuideH3>Abstract, Schlagwörter und Einleitung</GuideH3>
      <GuideP>
        <GuideCode>abstract</GuideCode> und <GuideCode>IEEEkeywords</GuideCode> müssen
        nach <GuideCode>\maketitle</GuideCode> stehen. Halten Sie das Abstract bei 150
        bis 250 Wörtern und geben Sie drei bis sechs durch Kommas getrennte Index
        Terms in alphabetischer Reihenfolge an.{" "}
        <GuideCode>\IEEEPARstart{"{D}{eep}"}</GuideCode> erzeugt die Initiale, mit der
        IEEE-Beiträge beginnen; sie ist optional.
      </GuideP>
      <GuideH3>Gleichungen, Algorithmen, Tabellen und Abbildungen</GuideH3>
      <GuideP>
        Das Beispiel verwendet einen <GuideCode>aligned</GuideCode>-Block innerhalb von{" "}
        <GuideCode>equation</GuideCode>, damit ein langes Optimierungsproblem in eine
        Spalte passt, ein <GuideCode>algorithmic</GuideCode>-Listing für das Verfahren
        und <GuideCode>[htbp]</GuideCode>-Gleitumgebungen für Tabelle und Abbildung.
        Die Abbildung ist ein Balkendiagramm in TikZ, damit die Vorlage ohne
        Bilddateien kompiliert; ersetzen Sie es durch{" "}
        <GuideCode>\includegraphics[width=\columnwidth]{"{energy.pdf}"}</GuideCode>.
        Breite Tabellen oder Abbildungen, die beide Spalten benötigen, setzen Sie mit{" "}
        <GuideCode>table*</GuideCode> und <GuideCode>figure*</GuideCode>.
      </GuideP>
      <GuideH3>Literaturverzeichnis</GuideH3>
      <GuideP>
        Im IEEE-Stil stehen bei Autorinnen und Autoren zuerst die Initialen, dann der
        Nachname, Titel in Anführungszeichen, Publikationsorte abgekürzt und kursiv und
        das Jahr am Ende. Mit BibTeX entfernen Sie den Block{" "}
        <GuideCode>thebibliography</GuideCode> und verwenden{" "}
        <GuideCode>\bibliographystyle{"{IEEEtran}"}</GuideCode> zusammen mit{" "}
        <GuideCode>\bibliography{"{refs}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="customize">Zwischen IEEE-Formaten wechseln</GuideH2>
      <GuideTable
        headers={["Ziel", "Klassenzeile", "Hinweise"]}
        rows={[
          [
            "Konferenzbeitrag",
            <GuideCode key="c">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Diese Vorlage",
          ],
          [
            "Transactions / Journal",
            <GuideCode key="j">\documentclass[journal]{"{IEEEtran}"}</GuideCode>,
            "Ergänzt lebende Kolumnentitel, Kurzbiografien der Autorinnen und Autoren und ein einspaltiges Abstract",
          ],
          [
            "Doppelblindes Review",
            <GuideCode key="r">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Ersetzen Sie den Autorenblock durch einen anonymen Block und entfernen Sie \\thanks",
          ],
          [
            "Entwurf mit größerem Zeilenabstand",
            <GuideCode key="d">\documentclass[conference,draftcls,onecolumn]{"{IEEEtran}"}</GuideCode>,
            "Zum Weitergeben eines gut lesbaren Entwurfs; niemals so einreichen",
          ],
        ]}
      />

      <GuideH2 id="errors">Häufige Fehler</GuideH2>
      <GuideUl>
        <li>
          <strong>„Command \thanks already defined“ oder \thanks wird ignoriert.</strong>{" "}
          Lassen Sie <GuideCode>\IEEEoverridecommandlockouts</GuideCode> wie in der
          Vorlage direkt nach der documentclass-Zeile stehen.
        </li>
        <li>
          <strong>Zu breite Gleichung.</strong> Brechen Sie sie mit{" "}
          <GuideCode>aligned</GuideCode> oder <GuideCode>split</GuideCode> um;
          IEEE-Spalten sind nur 3,5 Zoll breit.
        </li>
        <li>
          <strong>Abbildung rutscht ans Ende.</strong> Verwenden Sie{" "}
          <GuideCode>[!t]</GuideCode> für die Platzierung oben und achten Sie darauf,
          dass die Abbildung schmaler als <GuideCode>\columnwidth</GuideCode> ist.
        </li>
        <li>
          <strong>Beitrag überschreitet das Seitenlimit.</strong> Die meisten
          IEEE-Konferenzen erlauben sechs Seiten plus ein oder zwei kostenpflichtige
          Zusatzseiten; kürzen Sie den Inhalt statt der Abstände, denn diese werden
          geprüft.
        </li>
      </GuideUl>

      <GuideH2 id="compile">So kompilieren Sie</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> Klicken Sie auf <em>Als Vorlage öffnen</em> und
          schreiben Sie mit der zweispaltigen Live-Vorschau.
        </li>
        <li>
          <strong>In Overleaf:</strong> Fügen Sie den Code in ein neues Projekt ein;
          pdfLaTeX ist voreingestellt und IEEEtran vorinstalliert.
        </li>
        <li>
          <strong>Lokal:</strong> zweimal <GuideCode>pdflatex paper.tex</GuideCode> für
          die Querverweise oder <GuideCode>latexmk -pdf paper.tex</GuideCode>.
        </li>
      </GuideOl>
      <GuideP>
        Reichen Sie bei ICASSP, CVPR oder einem anderen Publikationsort im IEEE-Stil
        ein? Typische Einreichungsfristen finden Sie auf der{" "}
        <GuideLink href="/conference-deadlines">Seite mit Konferenzfristen</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufig gestellte Fragen</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
