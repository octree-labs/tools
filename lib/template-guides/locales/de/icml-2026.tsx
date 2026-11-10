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
    question: "Ist das die offizielle Style-Datei für ICML 2026?",
    answer:
      "Nein. Es ist ein zweispaltiger Entwurf im ICML-Stil auf Basis der Standardklasse article mit Times und Rändern von 0,75 Zoll, sodass er ohne zusätzliche Dateien überall kompiliert. Einreichungen bei ICML müssen die offizielle Style-Datei und das Beispielpaper aus dem Author-Kit verwenden, das im Call for Papers auf icml.cc verlinkt ist; dieses hat eigene Befehle für Titel und Autoren. Schreiben und überarbeiten Sie hier und übertragen Sie die Abschnitte anschließend in das offizielle Kit.",
  },
  {
    question: "Kompiliert diese ICML-Vorlage in Overleaf?",
    answer:
      "Ja, mit pdfLaTeX, der Standardeinstellung von Overleaf. Legen Sie eine Datei references.bib neben die .tex-Datei, denn die Vorlage endet mit \\bibliography{references}. Alle Pakete sind in TeX Live enthalten, auch das ältere Paket subfigure.",
  },
  {
    question: "Wie lasse ich eine Abbildung oder Tabelle über beide Spalten laufen?",
    answer:
      "Verwenden Sie die Sternvarianten der Umgebungen: \\begin{figure*}[t] ... \\end{figure*} oder \\begin{table*}[t] ... \\end{table*}, mit Breiten relativ zu \\textwidth. Zweispaltige Gleitobjekte können nur oben auf einer Seite oder auf einer eigenen Gleitobjektseite stehen, meist auf der Seite nach derjenigen, auf der sie definiert sind.",
  },
  {
    question: "Wie hoch ist die Seitenbegrenzung bei ICML 2026?",
    answer:
      "Das Beispiel-Abstract in dieser Vorlage nennt acht Seiten für den Haupttext, während Literaturverzeichnis und Anhänge unbegrenzt sind; das entspricht den ICML-Calls der letzten Jahre. Prüfen Sie die genaue Grenze und die Regeln für die Camera-Ready-Fassung im offiziellen Call for Papers für ICML 2026.",
  },
  {
    question: "Wie laufen Titel und Autoren über beide Spalten?",
    answer:
      "Die Vorlage definiert \\maketitle so um, dass der Titelblock innerhalb von \\twocolumn[...] ausgegeben wird, was ihn über die volle Seitenbreite setzt. Das Abstract beginnt danach in der linken Spalte, wie in ICML-Papern.",
  },
];

export default function Icml2026Guide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine LaTeX-Vorlage für ICML 2026 zum Entwerfen</GuideH2>
      <GuideP>
        Diese Vorlage für ICML 2026 ist ein zweispaltiges Machine-Learning-Paper, das
        sofort in Overleaf, Octree oder jeder TeX-Live-Installation kompiliert. Sie
        ist eine Vorlage für Entwürfe und nicht die offizielle Style-Datei: Sie
        verwendet die Standardklasse <GuideCode>article</GuideCode> mit der Option{" "}
        <GuideCode>twocolumn</GuideCode> in 10 pt, die Schrift{" "}
        <GuideCode>times</GuideCode> und Ränder von 0,75 Zoll und definiert{" "}
        <GuideCode>\maketitle</GuideCode> so um, dass Titel und Autorenblock wie in
        ICML-Papern über beiden Spalten oberhalb des Abstracts stehen.
      </GuideP>
      <GuideP>
        Die Präambel lädt, was ICML-Paper typischerweise brauchen:{" "}
        <GuideCode>algorithm</GuideCode> und <GuideCode>algorithmic</GuideCode> für
        Pseudocode, <GuideCode>booktabs</GuideCode> für Tabellen,{" "}
        <GuideCode>subfigure</GuideCode> für nebeneinanderstehende Teilabbildungen,{" "}
        <GuideCode>amsmath</GuideCode> und <GuideCode>hyperref</GuideCode>. Das
        Beispielpaper enthält einen Block mit drei Autoren, nummerierten Institutionen
        und einem Hinweis auf gleichwertige Beiträge, ein Abstract, Introduction,
        Related Work, einen Abschnitt Method mit einer regularisierten Verlustfunktion,
        eine Tabelle unter Experiments, einen Abschnitt Accessibility and
        Reproducibility und ein Literaturverzeichnis mit BibTeX im Stil{" "}
        <GuideCode>plain</GuideCode>. Entwerfen Sie hier und übertragen Sie die
        Abschnitte dann für das eingereichte PDF in das offizielle Author-Kit für
        ICML 2026 von{" "}
        <GuideLink href="https://icml.cc" external>
          icml.cc
        </GuideLink>
        .
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>Zweispaltiges Layout in 10 pt mit einem Titelblock über die volle Breite</li>
        <li>Drei Autoren mit hochgestellten Institutionsnummern und einer Markierung für gleichwertige Beiträge</li>
        <li>Abstract und sechs Abschnitte, darunter Accessibility and Reproducibility</li>
        <li>Eine abgesetzte Gleichung und eine Ergebnistabelle mit <GuideCode>booktabs</GuideCode></li>
        <li>
          <GuideCode>algorithm</GuideCode>/<GuideCode>algorithmic</GuideCode> für
          Pseudocode geladen
        </li>
        <li>BibTeX mit dem Stil <GuideCode>plain</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um in Octree zu bearbeiten, oder auf{" "}
          <em>Quellcode anzeigen</em> und fügen Sie den Code in Overleaf oder eine lokale{" "}
          <GuideCode>paper.tex</GuideCode> ein.
        </li>
        <li>
          Legen Sie neben der Datei eine <GuideCode>references.bib</GuideCode> an und
          zitieren Sie Einträge mit <GuideCode>\cite</GuideCode>.
        </li>
        <li>
          Kompilieren Sie mit pdfLaTeX und BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>).
          Die Vorlage benötigt keine Systemschriften, XeLaTeX oder LuaLaTeX sind also
          nicht erforderlich.
        </li>
        <li>
          Bearbeiten Sie <GuideCode>\title</GuideCode> und den{" "}
          <GuideCode>\author</GuideCode>-Block in der Präambel. Entfernen Sie für die
          doppelt blinde Begutachtungsfassung Namen und Institutionen.
        </li>
        <li>
          Kopieren Sie Ihre Abschnitte vor der Einreichung in das offizielle
          Beispielpaper für ICML 2026 und verwenden Sie dessen Literaturstil.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Pseudocode schreiben.</strong> Das Paket{" "}
        <GuideCode>algorithmic</GuideCode> verwendet Befehle in Großbuchstaben. Ein
        gleitender Algorithmus, der in eine Spalte passt:
      </GuideP>
      <GuidePre>{`\\begin{algorithm}[tb]
  \\caption{SGD with weight decay}
  \\label{alg:sgd}
  \\begin{algorithmic}
    \\STATE {\\bfseries Input:} data $\\{(x_i, y_i)\\}_{i=1}^{n}$, step size $\\eta$
    \\FOR{$t = 1$ {\\bfseries to} $T$}
      \\STATE Sample $i$ uniformly from $\\{1, \\dots, n\\}$
      \\STATE $\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\ell(f_\\theta(x_i), y_i)$
    \\ENDFOR
  \\end{algorithmic}
\\end{algorithm}`}</GuidePre>
      <GuideP>
        <strong>subfigure durch subcaption ersetzen.</strong>{" "}
        <GuideCode>subfigure</GuideCode> ist veraltet. Löschen Sie{" "}
        <GuideCode>{"\\usepackage{subfigure}"}</GuideCode> (die beiden Pakete lassen
        sich nicht gemeinsam laden), fügen Sie{" "}
        <GuideCode>{"\\usepackage{subcaption}"}</GuideCode> hinzu und setzen Sie
        Teilabbildungen so:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-a}
    \\caption{Dataset A}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-b}
    \\caption{Dataset B}
  \\end{subfigure}
  \\caption{Accuracy on both datasets.}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Den Titelblock konsistent halten.</strong> Autoren und Institutionen
        stehen als einfacher Text in <GuideCode>\author</GuideCode>, getrennt durch{" "}
        <GuideCode>\quad</GuideCode>, mit Hochstellungen in der Form{" "}
        <GuideCode>{"$^{1}$"}</GuideCode>. Fügen Sie einen Autor hinzu, indem Sie einen
        Eintrag <GuideCode>{"Firstname Lastname$^{1}$"}</GuideCode> kopieren und eine
        neue Institutionszeile ergänzen; markieren Sie gleichwertige Beiträge mit{" "}
        <GuideCode>{"$^{*}$"}</GuideCode>.
      </GuideP>

      <GuideP>
        Verwandte Vorlagen:{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>,{" "}
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink> und{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>. Termine finden
        Sie auf der{" "}
        <GuideLink href="/conference-deadlines">Seite mit Konferenzfristen</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur ICML-Vorlage</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
