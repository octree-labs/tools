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
    question: "Wie ist ein Whitepaper aufgebaut?",
    answer:
      "Ein Titelblatt, eine Management Summary, eine Beschreibung des Problems, der vorgeschlagene Lösungsansatz, der Nutzen, Belege wie eine Fallstudie und ein Fazit mit Handlungsaufforderung. Diese Vorlage hält sich an genau diese Reihenfolge: Executive Summary, The Challenge, The Solution, Benefits, Case Study und Conclusion, nach einem Titelblatt, das die Zusammenfassung bereits in einem Kasten vorwegnimmt.",
  },
  {
    question: "Sind die Zahlen in der Vorlage echt?",
    answer:
      "Nein. Angaben wie die Kostensenkung um 40 % oder die Einsparung von 5 Mio. US-Dollar in der Fallstudie sind Platzhalter, die zeigen, wo Zahlen hingehören. Ersetzen Sie sie durch Ihre eigenen gemessenen Ergebnisse oder durch belegte Quellen, und ergänzen Sie ein Literaturverzeichnis, wenn Sie Daten Dritter zitieren.",
  },
  {
    question: "Wie ändere ich das Farbschema des Whitepapers?",
    answer:
      "Eine einzige Farbe, primarycolor, wird mit \\definecolor{primarycolor}{RGB}{0,51,102} definiert und für den Titel, die Abschnittsüberschriften (über titlesec) und den Rahmen des Zusammenfassungskastens verwendet. Ändern Sie die RGB-Werte in Ihre Markenfarbe, und alles passt sich automatisch an.",
  },
  {
    question: "Funktioniert diese Whitepaper-Vorlage in Overleaf?",
    answer:
      "Ja. Sie nutzt die Klasse article mit geometry, graphicx, xcolor, titlesec, hyperref und tcolorbox, die alle zu TeX Live gehören. Sie lässt sich daher mit pdfLaTeX in Overleaf, in Octree oder in einer lokalen Installation kompilieren.",
  },
];

export default function WhitePaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Whitepaper-Vorlage in LaTeX</GuideH2>
      <GuideP>
        Diese Whitepaper-Vorlage für LaTeX erzeugt einen ansprechend gestalteten Bericht
        im eigenen Markenauftritt, wie ihn Unternehmen veröffentlichen, um ein Problem
        zu erklären und für ihren Lösungsansatz zu werben: Produkt-Whitepaper,
        technische Positionspapiere und Fachbeiträge für Marketing oder Vertrieb. Das
        Titelblatt zeigt einen großen, zweizeiligen Titel in der Markenfarbe, einen
        kursiven Untertitel, Firmenname und Datum sowie am Seitenende einen gerahmten
        Kasten mit der Executive Summary, sodass die Leserschaft die Kernaussage schon
        vor dem Umblättern erfasst.
      </GuideP>
      <GuideP>
        Der Hauptteil folgt dem klassischen Aufbau aus Problem und Lösung in sechs
        nummerierten Abschnitten: Executive Summary, The Challenge, The Solution,
        Benefits (eine Aufzählung der Ergebnisse), Case Study und Conclusion. Das
        Beispiel ist für eine fiktive KI-Plattform geschrieben; die Prozentangaben und
        Einsparungen sind Platzhalter, die Sie durch echte, belegte Zahlen ersetzen.
        Der Quelltext nutzt die Standardklasse <GuideCode>article</GuideCode> in 11 pt
        mit Rändern von einem Zoll. <GuideCode>titlesec</GuideCode> setzt die
        Abschnittsüberschriften groß und fett in einer einzigen Markenfarbe,{" "}
        <GuideCode>primarycolor</GuideCode>; <GuideCode>tcolorbox</GuideCode> zeichnet
        den Zusammenfassungskasten; <GuideCode>hyperref</GuideCode> macht Links im PDF
        anklickbar; und <GuideCode>graphicx</GuideCode> ist für Diagramme und
        Abbildungen geladen. Der Absatzeinzug ist abgeschaltet, was dem Dokument die
        moderne Anmutung eines Geschäftsdokuments gibt. Alle Pakete gehören zu TeX
        Live, daher funktioniert die Vorlage in Overleaf, in Octree und in jeder
        lokalen Installation.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>Titelblatt im Markendesign mit Untertitel, Firma, Datum und einem Kasten für die Executive Summary</li>
        <li>Sechs nummerierte Abschnitte im Aufbau Problem und Lösung</li>
        <li>Farbige Abschnittsüberschriften über <GuideCode>titlesec</GuideCode></li>
        <li>Eine durchgängig verwendete Markenfarbe, <GuideCode>primarycolor</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um die Vorlage in Octree zu
          bearbeiten, oder auf <em>Quellcode anzeigen</em>, und fügen Sie den Code in Overleaf
          oder in eine lokale <GuideCode>whitepaper.tex</GuideCode> ein.
        </li>
        <li>Kompilieren Sie mit pdfLaTeX; ein Durchlauf genügt.</li>
        <li>
          Legen Sie Ihre Markenfarbe in der Zeile mit <GuideCode>\definecolor</GuideCode>{" "}
          fest und bearbeiten Sie dann Titel, Untertitel, Firmennamen und Datum auf dem
          Titelblatt.
        </li>
        <li>
          Schreiben Sie den Zusammenfassungskasten und jeden Abschnitt neu; die
          Executive Summary sollte nur wenige Sätze umfassen.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Absätze durch Abstand trennen.</strong> Die Vorlage setzt{" "}
        <GuideCode>\parindent</GuideCode> auf null, fügt aber keinen Abstand zwischen
        Absätzen ein, sodass aufeinanderfolgende Absätze ineinanderlaufen. Ersetzen Sie
        die Zeile mit <GuideCode>\setlength</GuideCode> durch:
      </GuideP>
      <GuidePre>{`\\usepackage{parskip}`}</GuidePre>
      <GuideP>
        <strong>Ein zentrales Ergebnis hervorheben.</strong> Verwenden Sie den Kastenstil
        des Titelblatts im Fließtext erneut, etwa für eine Kennzahl oder ein Zitat:
      </GuideP>
      <GuidePre>{`\\begin{tcolorbox}[colback=primarycolor!5,colframe=primarycolor,title=Key result]
Company XYZ cut [metric] by [amount] within [time period].
\\end{tcolorbox}`}</GuidePre>
      <GuideP>
        <strong>Jede Seite mit der Marke versehen.</strong> Fügen Sie mit{" "}
        <GuideCode>fancyhdr</GuideCode> eine Fußzeile mit Firmennamen und Seitenzahl
        hinzu:{" "}
        <GuideCode>{"\\usepackage{fancyhdr} \\pagestyle{fancy} \\fancyhf{} \\lfoot{TechCorp Industries} \\rfoot{\\thepage} \\renewcommand{\\headrulewidth}{0pt}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Verwandte Vorlagen: <GuideLink href="/templates/business-report">Geschäftsbericht</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">technischer Bericht</GuideLink> und{" "}
        <GuideLink href="/templates/business-plan">Businessplan</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur Whitepaper-Vorlage</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
