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
    question: "Welche Dokumentklasse verwendet diese Vorlage für Forschungsarbeiten?",
    answer:
      "IEEEtran mit der Option conference, die LaTeX-Klasse von IEEE selbst. Sie liefert das zweispaltige IEEE-Konferenzlayout mit Times-ähnlichen Schriften, die IEEE-Befehle für den Autorenblock und Abschnittsüberschriften im IEEE-Stil. Die Klasse gehört zu TeX Live, daher sind keine zusätzlichen Dateien nötig.",
  },
  {
    question: "Wie füge ich eine Abbildung ein, die in die Spalte passt?",
    answer:
      "Die Beispielabbildung besteht nur aus einer Bildunterschrift. Fügen Sie innerhalb der Umgebung figure vor \\caption den Befehl \\includegraphics[width=\\columnwidth]{results} ein; graphicx ist bereits geladen. Für eine Abbildung über beide Spalten verwenden Sie figure* mit width=\\textwidth.",
  },
  {
    question: "Wie zitiere ich Quellen in dieser Vorlage?",
    answer:
      "Schreiben Sie \\cite{ref1} in den Text; das Paket cite sortiert numerische Zitate und fasst sie zusammen, etwa zu [1]-[3]. Die Literaturangaben stehen als thebibliography-Liste am Ende. Um stattdessen eine .bib-Datei zu nutzen, ersetzen Sie diese Liste durch \\bibliographystyle{IEEEtran} und \\bibliography{refs} und führen BibTeX aus.",
  },
  {
    question: "Kann ich diese Vorlage für Forschungsarbeiten in Overleaf verwenden?",
    answer:
      "Ja. IEEEtran, amsmath, amssymb, graphicx und cite sind alle Teil von TeX Live, daher kompiliert die Vorlage mit pdfLaTeX in Overleaf, Octree oder einer lokalen Installation. Prüfen Sie vor der Einreichung bei einer bestimmten Konferenz deren Autorenrichtlinien; manche IEEE-Konferenzen stellen eigene Vorlagendateien bereit.",
  },
];

export default function ResearchPaperGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Vorlage für Forschungsarbeiten in LaTeX (IEEE-Stil)</GuideH2>
      <GuideP>
        Diese LaTeX-Vorlage für Forschungsarbeiten ist ein kurzer, aufgeräumter
        Ausgangspunkt für einen natur- oder ingenieurwissenschaftlichen Artikel im
        zweispaltigen IEEE-Konferenzformat. Sie basiert auf{" "}
        <GuideCode>IEEEtran</GuideCode>, der Dokumentklasse von IEEE selbst, geladen
        mit der Option <GuideCode>conference</GuideCode>, sodass Titelblock,
        Spaltenlayout, Schriften und Überschriften dem entsprechen, was
        IEEE-Konferenzen verwenden. Sie eignet sich gut für eine Seminararbeit,
        eine Workshop-Einreichung oder einen ersten Entwurf, den Sie später in die
        offizielle Vorlage einer Konferenz übertragen.
      </GuideP>
      <GuideP>
        Der Beispielartikel enthält die Abschnitte, die fast jede Forschungsarbeit
        braucht: einen Titel und einen IEEE-Autorenblock (Name, Institut,
        Universität und E-Mail-Adresse), eine Zusammenfassung, dann Introduction,
        Related Work, Methodology, Results und Conclusion sowie ein nummeriertes
        Literaturverzeichnis. Der Abschnitt Results enthält als Platzhalter eine Umgebung{" "}
        <GuideCode>figure</GuideCode> mit Bildunterschrift für Ihr Diagramm.
        Neben der Klasse lädt die Präambel <GuideCode>amsmath</GuideCode> und{" "}
        <GuideCode>amssymb</GuideCode> für Formeln, <GuideCode>graphicx</GuideCode>{" "}
        für Abbildungen und <GuideCode>cite</GuideCode> für zusammengefasste
        numerische Zitate. Alles gehört zu TeX Live, daher funktioniert die
        Vorlage in Overleaf, in Octree oder mit einer lokalen Installation. Der
        Quelltext ist bewusst minimal gehalten; ein umfangreicheres IEEE-Beispiel
        mit mehreren Autoren, Formeln, Tabellen und Schlüsselwörtern finden Sie in
        der Vorlage für IEEE-Konferenzbeiträge.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>Zweispaltiges Konferenzlayout mit <GuideCode>IEEEtran</GuideCode></li>
        <li>IEEE-Autorenblock für Name, Zugehörigkeit und E-Mail-Adresse</li>
        <li>Zusammenfassung und fünf Standardabschnitte</li>
        <li>Platzhalter für eine Abbildung und ein Literaturverzeichnis mit <GuideCode>thebibliography</GuideCode></li>
        <li><GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode>, <GuideCode>graphicx</GuideCode> und <GuideCode>cite</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um sie in Octree zu
          bearbeiten, oder auf <em>Quellcode anzeigen</em>, und fügen Sie den Code
          in Overleaf oder eine lokale <GuideCode>paper.tex</GuideCode> ein.
        </li>
        <li>Kompilieren Sie mit pdfLaTeX, sobald Sie Quellen zitieren, zweimal.</li>
        <li>
          Bearbeiten Sie <GuideCode>\title</GuideCode> und das Paar{" "}
          <GuideCode>\IEEEauthorblockN</GuideCode>/<GuideCode>\IEEEauthorblockA</GuideCode>{" "}
          in <GuideCode>\author</GuideCode>.
        </li>
        <li>Ersetzen Sie die Platzhalter in eckigen Klammern in jedem Abschnitt durch Ihre Inhalte.</li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Koautoren hinzufügen.</strong> Wiederholen Sie den Autorenblock und
        trennen Sie die Blöcke mit <GuideCode>\and</GuideCode>; IEEEtran setzt sie
        nebeneinander:
      </GuideP>
      <GuidePre>{`\\author{\\IEEEauthorblockN{First Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\first@university.edu}
\\and
\\IEEEauthorblockN{Second Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\second@university.edu}}`}</GuidePre>
      <GuideP>
        <strong>Eine echte Abbildung in Results einfügen.</strong> Skalieren Sie
        sie auf die Spaltenbreite:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
\\centering
\\includegraphics[width=\\columnwidth]{results}
\\caption{Results visualization}
\\label{fig:results}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Auf BibTeX umsteigen.</strong> Ersetzen Sie den Block{" "}
        <GuideCode>thebibliography</GuideCode> durch{" "}
        <GuideCode>{"\\bibliographystyle{IEEEtran}"}</GuideCode> und{" "}
        <GuideCode>{"\\bibliography{refs}"}</GuideCode>, legen Sie Ihre Einträge in{" "}
        <GuideCode>refs.bib</GuideCode> ab und kompilieren Sie mit pdfLaTeX,
        BibTeX und dann zweimal pdfLaTeX (oder mit{" "}
        <GuideCode>latexmk -pdf paper.tex</GuideCode>).
      </GuideP>

      <GuideP>
        Verwandte Vorlagen: <GuideLink href="/templates/ieee-conference">IEEE-Konferenzbeitrag</GuideLink>,{" "}
        <GuideLink href="/templates/journal-article">Zeitschriftenartikel</GuideLink> und{" "}
        <GuideLink href="/templates/article-template">Artikel</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur Vorlage für Forschungsarbeiten</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
