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
    question: "Funktioniert diese Beamer-Vorlage in Overleaf?",
    answer:
      "Ja. Sie verwendet nur die Dokumentklasse beamer mit dem eingebauten Theme Madrid und dem Standard-Farbschema und lädt keine zusätzlichen Pakete. Fügen Sie den Quelltext in ein leeres Overleaf-Projekt, in Octree oder in eine beliebige TeX-Live- oder MiKTeX-Installation ein, und er kompiliert unverändert mit pdfLaTeX, der Standardeinstellung von Overleaf.",
  },
  {
    question: "Wie stelle ich die Folien auf 16:9 statt 4:3 um?",
    answer:
      "Ergänzen Sie in der Klassenzeile die Option aspectratio: \\documentclass[aspectratio=169]{beamer}. Standardmäßig verwendet Beamer 4:3 (128 × 96 mm); mit 169 erhalten Sie 160 × 90 mm, was moderne Projektoren und Videokonferenzen ausfüllt. Auch 1610 und 43 sind zulässig.",
  },
  {
    question: "Welche Beamer-Themes kann ich statt Madrid verwenden?",
    answer:
      "Jedes mit beamer ausgelieferte Theme funktioniert, wenn Sie \\usetheme{Madrid} ändern: Gängige Varianten sind AnnArbor, Berlin, Boadilla, CambridgeUS, Copenhagen, Darmstadt, Frankfurt, Singapore und Warsaw. Farbschemata wie beaver, crane, dolphin, seahorse und whale gehören in \\usecolortheme{...}. Das externe Theme metropolis funktioniert ebenfalls, sieht aber mit XeLaTeX oder LuaLaTeX am besten aus, weil es auf die Schriftfamilie Fira ausgelegt ist.",
  },
  {
    question: "Warum zeigt die Fußzeile einen langen Titel oder den vollen Namen meiner Universität?",
    answer:
      "Madrid gibt Autor, Institution, Titel und Datum in der Fußzeile aus und verwendet dafür die Kurzformen dieser Felder. Geben Sie jedem Feld eine Kurzfassung in eckigen Klammern, zum Beispiel \\title[Short title]{Full Presentation Title} und \\institute[ABC]{Alpha Beta College}; dann verwendet die Fußzeile den kurzen Text, während die Titelfolie die lange Fassung behält.",
  },
  {
    question: "Wie erstelle ich aus den Folien ein druckbares Handout?",
    answer:
      "Ergänzen Sie handout in den Klassenoptionen (\\documentclass[handout]{beamer}). Überlagerungen aus \\pause und Angaben wie <2-> werden dann zu einer Seite pro Frame zusammengefasst. Um mehrere Frames auf ein Blatt zu drucken, fügen Sie \\usepackage{pgfpages} und \\pgfpagesuselayout{4 on 1}[a4paper,border shrink=5mm] in die Präambel ein.",
  },
];

export default function BeamerPresentationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Beamer-Präsentationsvorlage für LaTeX und Overleaf</GuideH2>
      <GuideP>
        Dies ist eine Beamer-Präsentationsvorlage für LaTeX und Overleaf: ein kurzer,
        aufgeräumter Foliensatz als Ausgangspunkt, aufgebaut auf der Standardklasse{" "}
        <GuideCode>beamer</GuideCode> mit dem eingebauten Theme{" "}
        <GuideCode>Madrid</GuideCode> und dem Standard-Farbschema. Madrid gehört zu den
        meistgenutzten Beamer-Vorlagen für wissenschaftliche Vorträge, weil es ohne
        jede Einrichtung eine farbige Titelleiste für jeden Frame, abgerundete Blöcke
        und eine dreiteilige Fußzeile mit Autor, Titel und Foliennummer liefert.
      </GuideP>
      <GuideP>
        Die Vorlage lädt außer Beamer selbst keine Pakete und ist damit im praktischen
        Sinne eine Overleaf-Beamer-Vorlage: Fügen Sie sie in ein leeres
        Overleaf-Projekt ein, öffnen Sie sie in Octree oder kompilieren Sie sie in
        einer beliebigen TeX-Live- oder MiKTeX-Installation – sie läuft mit pdfLaTeX
        beim ersten Versuch durch. Der Beispielfoliensatz enthält eine Titelfolie, ein
        aus den <GuideCode>\section</GuideCode>-Befehlen erzeugtes
        Inhaltsverzeichnis sowie Frames für Introduction, Main Content und
        Conclusion, die Sie durch Ihr eigenes Material ersetzen.
      </GuideP>
      <GuideP>
        Wenn Sie Beamer-Vorlagen vergleichen, beginnen Sie hier, wenn Sie den
        klassischen Look wünschen, den Gutachter und Prüfer bei einem
        Konferenzvortrag, einer Disputation oder einer Vorlesung erwarten. Für einen
        dunklen Foliensatz siehe das{" "}
        <GuideLink href="/templates/beamer-dark">dunkle Beamer-Theme</GuideLink>, und
        für ein A0-Poster mit Beamer die Vorlage{" "}
        <GuideLink href="/templates/conference-poster">Konferenzposter</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass{beamer}"}</GuideCode> mit{" "}
          <GuideCode>{"\\usetheme{Madrid}"}</GuideCode> und{" "}
          <GuideCode>{"\\usecolortheme{default}"}</GuideCode>
        </li>
        <li>
          Titelfolie aus <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>,{" "}
          <GuideCode>\institute</GuideCode> und <GuideCode>\date</GuideCode>
        </li>
        <li>Ein automatisch erzeugter Frame mit Inhaltsverzeichnis</li>
        <li>Drei Abschnitte (Introduction, Main Content, Conclusion) mit je einem Frame</li>
        <li>Ein Frame mit itemize-Liste, den Sie für Aufzählungsfolien kopieren können</li>
        <li>Keine externen Pakete, Schriften oder Bilder, daher kompiliert sie überall</li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um in Octree mit Live-PDF-Vorschau
          zu bearbeiten, oder auf <em>Quellcode anzeigen</em> und fügen Sie den Code in ein
          neues Overleaf-Projekt oder eine lokale <GuideCode>slides.tex</GuideCode> ein.
        </li>
        <li>
          Kompilieren Sie mit pdfLaTeX (<GuideCode>latexmk -pdf slides.tex</GuideCode>).
          XeLaTeX und LuaLaTeX funktionieren ebenfalls; Sie brauchen sie nur, wenn Sie
          mit <GuideCode>fontspec</GuideCode> auf Systemschriften umstellen oder das
          Theme metropolis verwenden.
        </li>
        <li>
          Bearbeiten Sie den Titelblock am Anfang der Datei:{" "}
          <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>,{" "}
          <GuideCode>\institute</GuideCode> und <GuideCode>\date</GuideCode> füllen
          sowohl die Titelfolie als auch die Fußzeile.
        </li>
        <li>
          Fügen Sie eine Folie hinzu, indem Sie einen Block{" "}
          <GuideCode>{"\\begin{frame} ... \\end{frame}"}</GuideCode> kopieren. Setzen
          Sie <GuideCode>\section</GuideCode> vor eine Gruppe von Frames, damit sie im
          Inhaltsverzeichnis erscheint.
        </li>
        <li>Kompilieren Sie zweimal, damit Inhaltsverzeichnis und Foliennummern aktuell sind.</li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>Theme und Farben ändern.</strong> Die beiden Zeilen nach der Klasse
        bestimmen das gesamte Erscheinungsbild. Tauschen Sie Layout-Theme und
        Farbschema unabhängig voneinander aus und entfernen Sie die
        Navigationssymbole unten rechts, die die meisten Vortragenden nie benutzen:
      </GuideP>
      <GuidePre>{`\\documentclass[aspectratio=169]{beamer}
\\usetheme{Madrid}
\\usecolortheme{beaver}   % oder crane, dolphin, seahorse, whale
\\setbeamertemplate{navigation symbols}{}`}</GuidePre>
      <GuideP>
        <strong>Der Fußzeile kurze Felder geben.</strong> Madrid gibt Autor,
        Institution und Titel in der Fußzeile aus, sodass lange Namen überlaufen.
        Verwenden Sie die optionalen Kurzformen:
      </GuideP>
      <GuidePre>{`\\title[Short Title]{A Much Longer Presentation Title}
\\author[A.~Author]{Alice Author}
\\institute[UoX]{University of Example}`}</GuidePre>
      <GuideP>
        <strong>Bei jedem Abschnitt eine Gliederung zeigen.</strong> Schreiben Sie
        Folgendes in die Präambel, dann fügt Beamer bei jedem neuen{" "}
        <GuideCode>\section</GuideCode> einen Gliederungs-Frame ein, in dem der
        aktuelle Abschnitt hervorgehoben ist:
      </GuideP>
      <GuidePre>{`\\AtBeginSection[]{
  \\begin{frame}
    \\frametitle{Outline}
    \\tableofcontents[currentsection]
  \\end{frame}
}`}</GuidePre>

      <GuideH2 id="comparison">Verwandte Beamer-Vorlagen</GuideH2>
      <GuideTable
        headers={["Vorlage", "Erscheinungsbild", "Compiler"]}
        rows={[
          [<strong key="b">Beamer-Präsentation</strong>, "Madrid, hell, 4:3", "pdfLaTeX"],
          [
            <GuideLink key="d" href="/templates/beamer-dark">
              Beamer Dark Theme
            </GuideLink>,
            "Madrid mit dunkler Farbpalette, 16:9",
            "pdfLaTeX",
          ],
          [
            <GuideLink key="p" href="/templates/conference-poster">
              Konferenzposter
            </GuideLink>,
            "A0 mit beamerposter",
            "pdfLaTeX",
          ],
        ]}
      />

      <GuideH2 id="faq">Häufige Fragen zur Beamer-Vorlage</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
