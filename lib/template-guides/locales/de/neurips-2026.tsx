import {
  GuideCode,
  GuideFaq,
  GuideH2,
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
    question: "Ist das die offizielle Style-Datei für NeurIPS 2026?",
    answer:
      "Nein. Es handelt sich um einen Entwurf im NeurIPS-Stil auf Basis der Standardklasse article mit Times, Rändern von 1 Zoll und natbib, sodass er ohne zusätzliche Dateien überall kompiliert. Für die Einreichung bei NeurIPS müssen Sie die offizielle Style-Datei aus dem Style-Kit verwenden, das im Call for Papers auf neurips.cc verlinkt ist. Da der Hauptteil dieselben Befehle nutzt (\\title, \\author, abstract, Abschnitte, \\bibliographystyle{plainnat}), müssen Sie beim Umstieg im Wesentlichen nur die Präambel ändern.",
  },
  {
    question: "Funktioniert die NeurIPS-Vorlage in Overleaf?",
    answer:
      "Ja. Sie kompiliert mit pdfLaTeX, der Standardeinstellung von Overleaf, und verwendet nur Pakete, die in TeX Live enthalten sind. Legen Sie eine Datei references.bib neben die .tex-Datei, denn die Vorlage endet mit \\bibliography{references}.",
  },
  {
    question: "Wohin gehört die NeurIPS Paper Checklist?",
    answer:
      "In dieser Vorlage ist sie ein Abschnitt nach dem Literaturverzeichnis und \\appendix – genau dort, wo NeurIPS sie verlangt. Die sechs Punkte hier zeigen nur das Antwortformat. Kopieren Sie die vollständige, aktuelle Checkliste aus dem offiziellen Style-Kit für NeurIPS 2026 und beantworten Sie jede Frage.",
  },
  {
    question: "Wie hoch ist die Seitenbegrenzung bei NeurIPS 2026?",
    answer:
      "Das Beispiel-Abstract in dieser Vorlage nennt neun Seiten Hauptteil, wobei Literaturverzeichnis und Checkliste nicht mitzählen; das entspricht den Calls der letzten Jahre. Seitenbegrenzungen können sich von Jahr zu Jahr ändern, prüfen Sie die Zahl daher vor der Einreichung im offiziellen Call for Papers für NeurIPS 2026.",
  },
  {
    question: "Sollte ich \\citep oder \\citet verwenden?",
    answer:
      "Da natbib geladen ist, stehen beide zur Verfügung. \\citet{key} erzeugt ein Textzitat („Smith et al. (2024)“), das sich als Teil eines Satzes verwenden lässt, und \\citep{key} ein Zitat in Klammern. Der Literaturstil plainnat unterstützt beide.",
  },
];

export default function Neurips2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine LaTeX-Vorlage für NeurIPS 2026 zum Entwerfen</GuideH2>
      <GuideP>
        Diese NeurIPS-Vorlage liefert Ihnen ein Machine-Learning-Paper im NeurIPS-Stil,
        das sofort in Overleaf, Octree oder jeder TeX-Live-Installation kompiliert. Es
        ist eine Vorlage für Entwürfe, nicht die offizielle Style-Datei: Sie verwendet
        die Standardklasse <GuideCode>article</GuideCode> in 11 pt mit der Schrift{" "}
        <GuideCode>times</GuideCode>, Rändern von 1 Zoll und ohne Absatzeinzug,
        dazu die Pakete, die die meisten NeurIPS-Paper laden (<GuideCode>hyperref</GuideCode>,{" "}
        <GuideCode>booktabs</GuideCode>, <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>nicefrac</GuideCode>, <GuideCode>microtype</GuideCode> und{" "}
        <GuideCode>natbib</GuideCode>).
      </GuideP>
      <GuideP>
        Das Beispielpaper hat den Aufbau, den Gutachter erwarten: Titel und ein
        Autorenblock mit einer Fußnote per <GuideCode>\thanks</GuideCode>, Abstract,
        Introduction, Related Work, Method mit einer nummerierten Gleichung,
        Experiments mit einer Ergebnistabelle in <GuideCode>booktabs</GuideCode>,
        Conclusion, ein Literaturverzeichnis mit <GuideCode>plainnat</GuideCode> und
        ein Abschnitt NeurIPS Paper Checklist nach <GuideCode>\appendix</GuideCode>.
        Schreiben Sie Ihren Inhalt hier und übertragen Sie ihn dann für das
        Einreichungs-PDF in das offizielle Style-Kit für NeurIPS 2026 von{" "}
        <GuideLink href="https://neurips.cc" external>
          neurips.cc
        </GuideLink>
        ; das dauert nur wenige Minuten, weil die Befehle dieselben sind. Die Version
        für das nächste Jahr ist die{" "}
        <GuideLink href="/templates/neurips-2027">NeurIPS-2027-Vorlage</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>Titel, Autorenblock mit Institution und E-Mail-Adresse sowie eine Autorenfußnote</li>
        <li>Abstract und fünf nummerierte Abschnitte</li>
        <li>Eine abgesetzte Gleichung mit Blackboard-Bold-Buchstaben aus <GuideCode>amsfonts</GuideCode></li>
        <li>Eine Ergebnistabelle mit <GuideCode>\toprule</GuideCode>, <GuideCode>\midrule</GuideCode> und <GuideCode>\bottomrule</GuideCode></li>
        <li>natbib mit dem Stil <GuideCode>plainnat</GuideCode></li>
        <li>Ein Abschnitt NeurIPS Paper Checklist mit sechs Beispielantworten</li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um in Octree zu bearbeiten, oder auf{" "}
          <em>Quellcode anzeigen</em> und fügen Sie den Code in Overleaf oder eine lokale{" "}
          <GuideCode>paper.tex</GuideCode> ein.
        </li>
        <li>
          Legen Sie daneben eine <GuideCode>references.bib</GuideCode> mit Ihren
          BibTeX-Einträgen an und zitieren Sie diese mit <GuideCode>\citet</GuideCode> oder{" "}
          <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Kompilieren Sie mit pdfLaTeX und BibTeX, zum Beispiel mit{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>. Unicode-Schriften werden nicht
          benötigt, XeLaTeX und LuaLaTeX bringen hier also keinen Vorteil.
        </li>
        <li>
          Bearbeiten Sie <GuideCode>\title</GuideCode> und <GuideCode>\author</GuideCode> am
          Anfang der Präambel; für die anonyme Begutachtungsfassung ersetzen Sie den
          Autorenblock durch <GuideCode>Anonymous Author(s)</GuideCode>.
        </li>
        <li>
          Übertragen Sie den Inhalt vor der Einreichung in die offizielle Style-Datei und
          fügen Sie die vollständige Checkliste aus dem offiziellen Kit ein.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Weitere Autoren hinzufügen.</strong> Die Vorlage enthält einen Autor.
        Der offizielle Stil trennt Autorenblöcke mit <GuideCode>\And</GuideCode>; in
        diesem Entwurf auf Basis der article-Klasse verwenden Sie stattdessen das
        übliche <GuideCode>\and</GuideCode>:
      </GuideP>
      <GuidePre>{`\\author{
  First Author \\\\ University A \\\\ \\texttt{first@a.edu}
  \\and
  Second Author \\\\ Lab B \\\\ \\texttt{second@b.org}
}`}</GuidePre>
      <GuideP>
        <strong>Eine Abbildung hinzufügen.</strong> <GuideCode>graphicx</GuideCode> ist
        bereits geladen. In NeurIPS-Papern stehen Bildunterschriften unter der
        Abbildung und Tabellenüberschriften über der Tabelle, wie in der Beispieltabelle:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.8\\linewidth]{example-image}
  \\caption{Training loss over time.}
  \\label{fig:loss}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Die Checkliste richtig beantworten.</strong> Jeder Punkt verlangt eine
        Antwort und eine kurze Begründung. Behalten Sie das Format der Beispielpunkte
        bei und schreiben Sie die Begründung in dieselbe Zeile:
      </GuideP>
      <GuidePre>{`\\item \\textbf{Limitations:} Did you describe the limitations of your work?
  \\textbf{[Yes]} Justification: see Section~5.`}</GuidePre>

      <GuideH2 id="comparison">Verwandte Konferenzvorlagen</GuideH2>
      <GuideTable
        headers={["Vorlage", "Layout"]}
        rows={[
          [<strong key="n">NeurIPS 2026</strong>, "Einspaltig, natbib, Checkliste"],
          [
            <GuideLink key="n7" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "Einspaltig, näher am NeurIPS-Layout",
          ],
          [
            <GuideLink key="i" href="/templates/icml-2026">
              ICML 2026
            </GuideLink>,
            "Zweispaltig, algorithm-Umgebung",
          ],
          [
            <GuideLink key="l" href="/templates/iclr-2026">
              ICLR 2026
            </GuideLink>,
            "Einspaltig, Reproducibility Statement",
          ],
        ]}
      />
      <GuideP>
        Einreichungsfristen finden Sie auf der{" "}
        <GuideLink href="/conference-deadlines">Seite mit Konferenzfristen</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur NeurIPS-Vorlage</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
