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
    question: "Wie erstelle ich ein wissenschaftliches Poster in LaTeX?",
    answer:
      "Verwenden Sie eine Posterklasse wie tikzposter, auf der diese Vorlage aufbaut. Legen Sie Papierformat und Ausrichtung in \\documentclass fest, Titel, Autorinnen und Autoren sowie Institut in der Präambel, und schreiben Sie den Inhalt als \\block{Titel}{Text}-Kästen, die Sie in \\begin{columns} mit \\column{Breite} anordnen. Titelleiste, Gestaltung der Kästen und Abstände übernimmt die Klasse.",
  },
  {
    question: "Wie ändere ich das Design des Posters?",
    answer:
      "Fügen Sie nach \\documentclass einen Theme-Befehl ein, zum Beispiel \\usetheme{Rays}. tikzposter bringt mehrere eingebaute Themes mit, darunter Default, Rays, Basic, Simple, Envelope, Wave, Board, Autumn und Desert, dazu eigene Farbstile, die Sie mit \\usecolorstyle festlegen.",
  },
  {
    question: "Wie ändere ich die Postergröße oder stelle auf Querformat um?",
    answer:
      "Ändern Sie die Klassenoptionen. tikzposter unterstützt a0paper, a1paper und a2paper sowie die Schlüsselwörter portrait oder landscape, zum Beispiel \\documentclass[25pt,a1paper,landscape]{tikzposter}. Die Option 25pt ist die Grundschriftgröße; tikzposter akzeptiert Werte von 12pt bis 25pt.",
  },
  {
    question: "Lässt sich die tikzposter-Vorlage in Overleaf kompilieren?",
    answer:
      "Ja. tikzposter gehört zu TeX Live, daher kompiliert die Datei mit pdfLaTeX in Overleaf, in Octree oder in einer lokalen Installation ohne zusätzliche Dateien. Große Poster mit vielen Bildern brauchen beim Kompilieren unter Umständen länger als ein normales Dokument.",
  },
];

export default function PosterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Vorlage für wissenschaftliche Poster in LaTeX (tikzposter)</GuideH2>
      <GuideP>
        Diese LaTeX-Vorlage für wissenschaftliche Poster nutzt die Klasse{" "}
        <GuideCode>tikzposter</GuideCode> und erzeugt ein Konferenz- oder
        Forschungsposter im Format A0 hochkant mit einer Grundschrift von 25 pt, der
        größten, die die Klasse anbietet. So bleibt der Text auch aus einigen Metern
        Entfernung lesbar. Die Titelleiste oben übernimmt <GuideCode>\title</GuideCode>,{" "}
        <GuideCode>\author</GuideCode> und <GuideCode>\institute</GuideCode> aus der
        Präambel; alles darunter wird aus <GuideCode>\block</GuideCode>-Kästen
        aufgebaut.
      </GuideP>
      <GuideP>
        Das Beispiellayout folgt der Reihenfolge, die in den meisten Postersessions
        üblich ist: ein Abstract-Block über die volle Breite, darunter zwei gleich
        breite Spalten mit Introduction und Methods links sowie Results und Conclusion
        rechts, und ganz unten ein References-Block über die volle Breite. Spalten
        werden mit <GuideCode>{"\\begin{columns}"}</GuideCode> und{" "}
        <GuideCode>{"\\column{0.5}"}</GuideCode> angelegt, wobei die Zahl den Anteil an
        der Posterbreite angibt; für ein dreispaltiges Layout schreiben Sie also einfach
        dreimal <GuideCode>{"\\column{0.33}"}</GuideCode>. Die Vorlage verwendet das
        Standard-Theme von tikzposter und lädt zusätzlich zur Klasse nur{" "}
        <GuideCode>amsmath</GuideCode>. tikzposter gehört zu TeX Live, daher eignet sich
        die Vorlage für Overleaf, Octree und jede lokale Installation. Eine Alternative
        auf Basis von beamer mit dreispaltigem Forschungslayout finden Sie in der
        Vorlage für Konferenzposter.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li><GuideCode>tikzposter</GuideCode> in A0 hochkant mit 25 pt</li>
        <li>Titelleiste mit Titel, Autorinnen und Autoren sowie Institut</li>
        <li>Abstract- und References-Block über die volle Breite</li>
        <li>Zweispaltiger Hauptteil: Introduction, Methods, Results und Conclusion</li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um die Vorlage in Octree zu
          bearbeiten, oder auf <em>Quellcode anzeigen</em>, und fügen Sie den Code in Overleaf
          oder in eine lokale <GuideCode>poster.tex</GuideCode> ein.
        </li>
        <li>Kompilieren Sie mit pdfLaTeX.</li>
        <li>
          Bearbeiten Sie <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>{" "}
          und <GuideCode>\institute</GuideCode> und danach den Text in jedem{" "}
          <GuideCode>{"\\block{...}{...}"}</GuideCode>.
        </li>
        <li>
          Prüfen Sie, welches Format Ihre Konferenz verlangt, und stellen Sie es in den
          Klassenoptionen ein, bevor Sie Abbildungen einfügen.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Ein Theme wählen.</strong> Eine einzige Zeile nach{" "}
        <GuideCode>\documentclass</GuideCode> gestaltet die Titelleiste und alle Blöcke
        neu:
      </GuideP>
      <GuidePre>{`\\documentclass[25pt,a0paper,portrait]{tikzposter}
\\usetheme{Rays}
\\usecolorstyle{Denmark}`}</GuidePre>
      <GuideP>
        <strong>Eine Abbildung in einen Block einfügen.</strong> Laden Sie{" "}
        <GuideCode>graphicx</GuideCode> in der Präambel und verwenden Sie die
        tikzposter-Umgebung <GuideCode>tikzfigure</GuideCode>, die eine nummerierte
        Bildunterschrift ergänzt; Breiten beziehen sich über{" "}
        <GuideCode>\linewidth</GuideCode> auf den Block:
      </GuideP>
      <GuidePre>{`\\block{Results}{
  Key findings and data visualization.
  \\begin{tikzfigure}[Accuracy on the test set]
    \\includegraphics[width=0.9\\linewidth]{results}
  \\end{tikzfigure}
}`}</GuidePre>
      <GuideP>
        <strong>Ungleiche Spalten.</strong> Spalten müssen nicht gleich breit sein; für
        eine breite Ergebnisspalte verwenden Sie <GuideCode>{"\\column{0.4}"}</GuideCode>{" "}
        und <GuideCode>{"\\column{0.6}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Verwandte Vorlagen: <GuideLink href="/templates/conference-poster">Konferenzposter (beamerposter)</GuideLink>,{" "}
        <GuideLink href="/templates/beamer-presentation">Beamer-Präsentation</GuideLink> und{" "}
        <GuideLink href="/templates/research-paper">Forschungsarbeit</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Häufige Fragen zur Vorlage für wissenschaftliche Poster</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
