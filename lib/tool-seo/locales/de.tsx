import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "LaTeX online bearbeiten: kostenloser LaTeX-Compiler und PDF-Viewer",
    intro: (
      <>
        <p>
          Diese Seite vereint einen Online-LaTeX-Editor, einen Compiler und einen Viewer. Links
          schreiben Sie Ihr Dokument, rechts erscheint das kompilierte PDF. Kompiliert wird mit
          einer vollständigen TeX-Live-Distribution auf dem Kompilierdienst von Octree: amsmath,
          TikZ, pgfplots, beamer, geometry, hyperref und der Rest von TeX Live funktionieren, ohne
          dass Sie etwas installieren müssen.
        </p>
        <p>
          pdfLaTeX ist die Standard-Engine; für fontspec und Systemschriften wechselt der Dienst zu
          XeLaTeX, für Lua-Code zu LuaLaTeX. Ein Konto ist nicht nötig. Der Editor enthält nur eine
          einzige Datei: Bilder, .bib-Dateien und Projekte mit mehreren Dateien gehören in den
          Octree-Editor, wo ein kostenloses Konto Ihre Arbeit auch speichert. Shell-Escape ist
          deaktiviert, minted steht daher nicht zur Verfügung.
        </p>
      </>
    ),
    stepsHeading: "So verwenden Sie den Online-LaTeX-Editor",
    steps: [
      {
        title: "Schreiben oder fügen Sie ein vollständiges Dokument ein",
        body: (
          <>
            Ersetzen Sie das Beispiel durch Ihren eigenen LaTeX-Code, von <Cmd>\documentclass</Cmd>{" "}
            bis <Cmd>\end{"{document}"}</Cmd>. Der Editor hebt die LaTeX-Syntax hervor und
            vervollständigt gängige Befehle.
          </>
        ),
      },
      {
        title: "Sehen Sie zu, wie sich das PDF aktualisiert",
        body: "Die Vorschau wird etwa eine Sekunde nach Ihrem letzten Tastendruck neu kompiliert. Schlägt die Kompilierung fehl, zeigt ein Dialog die Fehlermeldung und das Log.",
      },
      {
        title: "Behalten Sie das Ergebnis",
        body: "Klicken Sie auf „In Octree öffnen“, um das Dokument als Projekt zu speichern, Bilder und .bib-Dateien hinzuzufügen oder die KI um Änderungen zu bitten.",
      },
    ],
    tipsHeading: "Häufige LaTeX-Fehler und wie Sie sie beheben",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            Ein mit <Cmd>\usepackage</Cmd> geladenes Paket ist falsch geschrieben oder gehört nicht
            zu TeX Live. Prüfen Sie den Namen; alle CTAN-Pakete, die mit TeX Live ausgeliefert
            werden, sind installiert.
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            Ein Befehl, der nur im Mathematikmodus erlaubt ist, etwa <Cmd>^</Cmd>, <Cmd>_</Cmd> oder{" "}
            <Cmd>\alpha</Cmd>, steht außerhalb des Mathematikmodus. Umschließen Sie ihn mit{" "}
            <Cmd>$...$</Cmd>, oder maskieren Sie einen wörtlichen Unterstrich als <Cmd>\_</Cmd>.
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            Ein Befehl ist falsch geschrieben oder sein Paket ist nicht geladen, zum Beispiel{" "}
            <Cmd>\mathbb</Cmd> ohne <Cmd>amssymb</Cmd>. Das Log nennt die betroffene Zeile.
          </>
        ),
      },
      {
        title: "Sie finden den Fehler nicht",
        body: "Klicken Sie im Fehlerdialog auf „Fix this error with AI in Octree“. Octree öffnet das Dokument mit angehängtem Fehlerlog, sodass die KI genau weiß, was zu korrigieren ist.",
      },
    ],
    faqHeading: "FAQ zum Online-LaTeX-Editor",
    faq: [
      {
        question: "Kann ich LaTeX online bearbeiten, ohne etwas zu installieren?",
        answer:
          "Ja. Tippen oder fügen Sie LaTeX in den Editor auf dieser Seite ein, und das PDF erscheint daneben. Die Kompilierung läuft auf einer vollständigen TeX-Live-Installation auf den Servern von Octree, eine lokale TeX-Distribution ist also nicht nötig.",
      },
      {
        question: "Ist dieser LaTeX-Viewer kostenlos, und brauche ich ein Konto?",
        answer:
          "Er ist kostenlos und erfordert kein Konto. Auf dieser Seite wird nichts gespeichert: Kopieren Sie Ihren Code, bevor Sie die Seite verlassen, oder öffnen Sie ihn mit einem kostenlosen Konto in Octree, um ihn als Projekt zu behalten.",
      },
      {
        question: "Welchen LaTeX-Compiler verwendet die Online-Vorschau?",
        answer:
          "Standardmäßig pdfLaTeX. Der Kompilierdienst wechselt zu XeLaTeX, wenn das Dokument fontspec, polyglossia, unicode-math oder xeCJK lädt, und zu LuaLaTeX, wenn es \\directlua oder luacode verwendet.",
      },
      {
        question: "Kann ich Bilder oder ein .bib-Literaturverzeichnis hochladen?",
        answer:
          "Nicht auf dieser Seite: Sie kompiliert eine einzige Datei main.tex. Eine thebibliography-Umgebung funktioniert, aber Grafikdateien und .bib-Dateien erfordern den Octree-Editor, der Projekte mit mehreren Dateien unterstützt.",
      },
      {
        question: "Warum kompiliert ein Paket wie minted nicht?",
        answer:
          "minted und andere Pakete, die Shell-Escape (\\write18) benötigen, sind aus Sicherheitsgründen deaktiviert. Verwenden Sie für Code stattdessen das Paket listings oder verbatim.",
      },
    ],
    related: (
      <>
        Neu bei LaTeX? Beginnen Sie mit der{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          Einführung in LaTeX
        </IntroLink>
        , stöbern Sie in fertigen <IntroLink href="/templates">LaTeX-Vorlagen</IntroLink>, oder
        beschreiben Sie ein Dokument und lassen Sie es vom{" "}
        <IntroLink href="/tools/ai-latex-generator">KI-LaTeX-Generator</IntroLink> schreiben.
      </>
    ),
  },

  "math-to-latex": {
    heading: "Handschriftliche Mathematik online in LaTeX umwandeln",
    intro: (
      <>
        <p>
          Dieser Mathe-zu-LaTeX-Konverter verwandelt ein Bild handschriftlicher oder gedruckter
          Mathematik in LaTeX-Code. Laden Sie ein Foto, einen Scan oder einen Screenshot einer
          Gleichung hoch: Ein KI-Bildmodell überträgt Brüche, Wurzeln, Summen, Integrale, Matrizen
          und griechische Buchstaben in die übliche amsmath-Notation.
        </p>
        <p>
          Das Ergebnis ist ein vollständiges LaTeX-Dokument, das die Vorschau mit pdfLaTeX auf einer
          vollständigen TeX-Live-Distribution des Octree-Kompilierdienstes kompiliert. Ein Konto ist
          nicht nötig. Am besten funktioniert das Tool mit einer Gleichung oder wenigen Zeilen auf
          einmal; lange Rechenseiten teilen Sie besser in mehrere Bilder auf.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie Mathematik in LaTeX um",
    steps: [
      {
        title: "Machen Sie ein scharfes Bild",
        body: "Fotografieren Sie die Mathematik oder erstellen Sie einen Screenshot: eine Zeile aus Ihrem Heft, ein Whiteboard, eine Tablet-Notiz oder eine Formel aus dem Lehrbuch. Schneiden Sie das Bild auf den relevanten Teil zu.",
      },
      {
        title: "Laden Sie es hoch",
        body: "Ziehen Sie die JPEG- oder PNG-Datei in den Upload-Bereich. Das LaTeX erscheint nach und nach im Code-Bereich, während die KI das Bild liest.",
      },
      {
        title: "Prüfen Sie die Vorschau und kopieren Sie",
        body: "Öffnen Sie den Vorschau-Tab, um die kompilierte Ausgabe mit dem Original zu vergleichen, und kopieren Sie dann den Code, laden Sie ihn herunter oder öffnen Sie ihn in Octree, um weiterzuarbeiten.",
      },
    ],
    tipsHeading: "Tipps für genaue Umwandlungen",
    tips: [
      {
        title: "Ein Ausdruck oder ein kurzer Block pro Bild",
        body: "Der Konverter ist für Gleichungen und kurze Herleitungen gedacht; teilen Sie eine ganze Seite voller Rechnungen auf mehrere Uploads auf.",
      },
      {
        title: "Schreiben Sie deutlich und kontrastreich",
        body: "Dunkle Tinte auf glattem Papier, gleichmäßige Beleuchtung und eine Aufnahme von vorn verringern Verwechslungen wie 1 und l oder x und ×.",
      },
      {
        title: "Prüfen Sie immer die Symbole",
        body: "Handschrifterkennung macht Fehler. Kontrollieren Sie Indizes, Exponenten und griechische Buchstaben in der Vorschau, bevor Sie den Code verwenden.",
      },
    ],
    faqHeading: "FAQ: Mathematik in LaTeX",
    faq: [
      {
        question: "Wie wandle ich handschriftliche Mathematik in LaTeX um?",
        answer:
          "Laden Sie ein Foto oder einen Scan der handschriftlichen Mathematik als JPEG oder PNG hoch. Die KI liest sie und gibt das LaTeX in einem vollständigen Dokument zurück, das amsmath und amssymb lädt, und die Vorschau kompiliert es, damit Sie jedes Symbol prüfen können.",
      },
      {
        question: "Ist dieser Online-LaTeX-Konverter kostenlos?",
        answer:
          "Ja. Umwandlung, Vorschau, Kopieren und Herunterladen sind kostenlos und erfordern kein Konto. Ein kostenloses Octree-Konto brauchen Sie nur, um das Ergebnis als Projekt zu speichern.",
      },
      {
        question: "Funktioniert das mit Handschrift auf dem iPad oder Tablet?",
        answer:
          "Ja. Exportieren Sie die Seite oder einen Screenshot aus GoodNotes, Notability, OneNote oder einer ähnlichen App als Bild, schneiden Sie es auf die Gleichung zu und laden Sie es hoch.",
      },
      {
        question: "Kann ich die Mathematik eintippen, statt ein Bild hochzuladen?",
        answer:
          "Diese Seite wandelt Bilder um. Für getippte Mathematik oder eine Beschreibung in Alltagssprache wie „Integral von x Quadrat von 0 bis 1“ verwenden Sie den Gleichung-zu-LaTeX-Konverter.",
      },
      {
        question: "Kompiliert das erzeugte LaTeX in Overleaf?",
        answer:
          "Ja. Die Ausgabe verwendet die übliche amsmath-Notation und kompiliert mit pdfLaTeX in jeder TeX-Distribution, auch in Overleaf und Octree. Die Vorschau auf dieser Seite kompiliert sie mit einem vollständigen TeX Live.",
      },
    ],
    related: (
      <>
        Wie Mathematik in LaTeX funktioniert, erklärt der{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          Leitfaden zu mathematischen Ausdrücken
        </IntroLink>
        ; getippte Mathematik wandeln Sie mit dem{" "}
        <IntroLink href="/tools/equation-to-latex">Gleichung-zu-LaTeX-Konverter</IntroLink> um,
        und Befehle schlagen Sie in der{" "}
        <IntroLink href="/symbols">LaTeX-Symbolreferenz</IntroLink> nach.
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "PDF online in LaTeX umwandeln",
    intro: (
      <>
        <p>
          Ein PDF enthält die fertigen Seiten, nicht das LaTeX, aus dem sie entstanden sind. Ein PDF
          in LaTeX umzuwandeln heißt daher, Text und Mathematik als bearbeitbaren Quelltext neu zu
          erstellen. Der Weg hängt von der Herkunft des PDFs ab: Zu arXiv-Artikeln gibt es meist den
          Originalquelltext, und für alles andere erstellt der Konverter auf dieser Seite das LaTeX
          mit KI neu.
        </p>
        <p>
          Laden Sie ein PDF mit höchstens 3 MB und 20 Seiten hoch und erhalten Sie ein vollständiges
          LaTeX-Dokument, das zur Kontrolle mit einer vollständigen TeX-Live-Distribution auf dem
          Kompilierdienst von Octree kompiliert wird. Ein Konto ist nicht nötig. Schriften, Layout
          und Bilder des Originals bleiben nicht erhalten, und lange Dokumente wandeln Sie besser
          abschnittsweise um.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie ein PDF in LaTeX um",
    steps: [
      {
        title: "Prüfen Sie zuerst arXiv",
        body: "Stammt das PDF von arXiv, ist der originale LaTeX-Quelltext der Autoren meist verfügbar. Laden Sie ihn über den Link „TeX Source“ auf der arXiv-Seite des Artikels herunter, statt das PDF umzuwandeln.",
      },
      {
        title: "Laden Sie das PDF hoch",
        body: "Ziehen Sie ein PDF mit höchstens 3 MB und 20 Seiten in den Konverter oben. Die KI liest Text und Mathematik und gibt ein vollständiges LaTeX-Dokument mit amsmath zurück; die Vorschau kompiliert es, damit Sie es mit dem Original vergleichen können.",
      },
      {
        title: "Wandeln Sie lange Dateien in Teilen um",
        body: "Bei einem langen PDF extrahieren Sie die benötigten Seiten oder machen einen Screenshot eines Gleichungsblocks und verwenden den Mathe-zu-LaTeX-Konverter.",
      },
      {
        title: "Zusammenfügen und bearbeiten",
        body: "Fügen Sie die Teile in den Online-LaTeX-Editor ein, um sie mit Live-PDF-Vorschau zu korrigieren, oder öffnen Sie sie in Octree, um das Dokument als Projekt zu speichern.",
      },
    ],
    tipsHeading: "Tipps vor der Umwandlung",
    tips: [
      {
        title: "Abbildungen werden nicht extrahiert",
        body: "Bilder und Diagramme im PDF werden nicht als LaTeX nachgebaut. Binden Sie sie mit \\includegraphics wieder ein, oder zeichnen Sie Diagramme mit dem Bild-zu-TikZ-Tool neu.",
      },
      {
        title: "Prüfen Sie die Mathematik",
        body: "Die Erkennung macht bei dichten Formeln und Tabellen Fehler. Vergleichen Sie Indizes, Vorzeichen und Ausrichtung mit dem Original.",
      },
    ],
    faqHeading: "FAQ: PDF in LaTeX",
    faq: [
      {
        question: "Wie wandle ich ein PDF in LaTeX um?",
        answer:
          "Ein PDF enthält seinen LaTeX-Quelltext nicht, Text und Mathematik müssen also neu erstellt werden. Für arXiv-Artikel laden Sie den Originalquelltext über den Link „TeX Source“ auf der arXiv-Seite des Artikels herunter. Für andere PDFs laden Sie die Datei (höchstens 3 MB und 20 Seiten) in den Konverter auf dieser Seite hoch und vergleichen die kompilierte Vorschau mit dem Original.",
      },
      {
        question: "Ist die Umwandlung von PDF in LaTeX kostenlos?",
        answer:
          "Ja. Der PDF-Konverter, der Mathe-zu-LaTeX-Konverter und der Online-LaTeX-Editor erfordern kein Konto. Ein kostenloses Octree-Konto brauchen Sie nur, um das Ergebnis als Projekt zu speichern.",
      },
      {
        question: "Kann ich einen ganzen Artikel oder eine Abschlussarbeit umwandeln?",
        answer:
          "Der Konverter nimmt PDFs mit höchstens 3 MB und 20 Seiten an, und die Länge der Ausgabe ist pro Umwandlung begrenzt: Eine Abschlussarbeit wandeln Sie daher besser Kapitel für Kapitel um. Für Artikel, die auf arXiv veröffentlicht sind, laden Sie stattdessen den Originalquelltext herunter.",
      },
      {
        question: "Behält die Ausgabe das genaue Layout des PDFs bei?",
        answer:
          "Nein. Text, Überschriften und Mathematik werden als sauberes, bearbeitbares LaTeX neu erstellt; Schriften, Abstände, Seitenlayout und Bilder werden nicht übernommen.",
      },
      {
        question: "Kann ich ein gescanntes PDF umwandeln?",
        answer:
          "Saubere Scans gedruckter oder ordentlich handgeschriebener Seiten können funktionieren. Scans mit geringer Auflösung, schiefer Lage oder schwachem Kontrast führen zu Symbolfehlern: Prüfen Sie das Ergebnis sorgfältig.",
      },
    ],
    related: (
      <>
        Wandeln Sie Screenshots von Gleichungen mit dem{" "}
        <IntroLink href="/tools/math-to-latex">Mathe-zu-LaTeX-Konverter</IntroLink> um, bearbeiten
        Sie das Ergebnis im <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>,
        oder lesen Sie den{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          Leitfaden zu Mathematik in LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "image-to-tikz": {
    heading: "Bild in TikZ umwandeln: Diagramme als bearbeitbares LaTeX",
    intro: (
      <>
        <p>
          Dieser Bild-zu-TikZ-Konverter verwandelt das Bild eines Diagramms in TikZ-Code, den Sie
          bearbeiten und kompilieren können. Laden Sie ein Flussdiagramm, ein Blockdiagramm, einen
          Baum, einen Graphen oder eine Skizze hoch: Ein KI-Bildmodell baut es als Knoten und Pfade
          in einem eigenständigen LaTeX-Dokument nach und übernimmt Beschriftungen und Farben so
          weit wie möglich.
        </p>
        <p>
          Die Vorschau kompiliert das Ergebnis mit pdfLaTeX auf einer vollständigen
          TeX-Live-Distribution des Octree-Kompilierdienstes. Ein Konto ist nicht nötig. Das
          Ergebnis ist eine originalgetreue Nachbildung, keine pixelgenaue Kopie: Planen Sie für
          Abbildungen, die exakt übereinstimmen müssen, etwas Handarbeit ein.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie ein Bild in TikZ um",
    steps: [
      {
        title: "Laden Sie das Diagramm hoch",
        body: "Ziehen Sie einen Screenshot, einen Export oder ein Foto des Diagramms als JPEG, PNG, GIF oder WebP hinein, bis 20 MB.",
      },
      {
        title: "Lassen Sie die KI es in TikZ nachzeichnen",
        body: (
          <>
            Das Modell liest Formen, Pfeile, Beschriftungen und Farben und schreibt ein
            eigenständiges LaTeX-Dokument mit einem <Cmd>tikzpicture</Cmd> und Bibliotheken wie
            positioning, arrows und shapes.geometric.
          </>
        ),
      },
      {
        title: "Vergleichen und verfeinern",
        body: "Öffnen Sie den Vorschau-Tab, um das kompilierte Diagramm mit Ihrem Bild zu vergleichen. Kopieren Sie den Code, laden Sie ihn herunter oder öffnen Sie ihn in Octree, um ihn mit der KI anzupassen.",
      },
    ],
    tipsHeading: "Tipps für bessere Umwandlungen",
    tips: [
      {
        title: "Schneiden Sie auf das Diagramm zu",
        body: "Entfernen Sie Bildunterschriften, Seitentext und andere Abbildungen; ein einzelnes Diagramm pro Bild liefert die besten Ergebnisse.",
      },
      {
        title: "Bevorzugen Sie saubere Quellen",
        body: "Exporte und Screenshots sind besser als Fotos. Für eine Handskizze verwenden Sie dunkle Tinte auf glattem Papier und fotografieren von vorn.",
      },
      {
        title: "Datendiagramme gehören zu pgfplots",
        body: "Der Konverter zeichnet Formen nach, er gewinnt keine Datenpunkte zurück. Für Diagramme aus Zahlen verwenden Sie den pgfplots-Generator.",
      },
    ],
    faqHeading: "FAQ: Bild in TikZ",
    faq: [
      {
        question: "Wie wandle ich ein Bild in TikZ um?",
        answer:
          "Laden Sie das Diagramm als JPEG, PNG, GIF oder WebP hoch. Die KI gibt ein vollständiges LaTeX-Dokument mit einem tikzpicture zurück, das es nachzeichnet, und die Vorschau kompiliert den Code, damit Sie ihn mit dem Original vergleichen können.",
      },
      {
        question: "Ist der TikZ-Code eine exakte Kopie meines Bildes?",
        answer:
          "Nein. Es ist eine Nachbildung mit bearbeitbaren Knoten und Pfaden, keine Durchzeichnung. Anordnung, Beschriftungen und Pfeile bleiben meist erhalten, Abstände, Kurven und Farben können aber abweichen: Rechnen Sie damit, für eine Abbildung in einer Publikation Koordinaten anzupassen.",
      },
      {
        question: "Welche Diagramme lassen sich am besten umwandeln?",
        answer:
          "Flussdiagramme, Blockdiagramme, Bäume, Graphen, Zustandsautomaten und einfache geometrische Abbildungen. Dichte Abbildungen mit vielen überlappenden Elementen, Fotografien und Datendiagramme lassen sich schlecht umwandeln.",
      },
      {
        question: "Kann ich eine Handskizze oder ein Whiteboard-Foto umwandeln?",
        answer:
          "Ja, wenn Linien und Beschriftungen lesbar sind. Schneiden Sie das Foto auf das Diagramm zu und sorgen Sie für gute Beleuchtung; blasser Bleistift oder ein schräger Winkel verringern die Genauigkeit.",
      },
      {
        question: "Ist der Bild-zu-TikZ-Konverter kostenlos?",
        answer:
          "Ja, und er erfordert kein Konto. Der erzeugte Code kompiliert mit pdfLaTeX und TeX Live und funktioniert daher in Overleaf, Octree oder einer lokalen LaTeX-Installation.",
      },
    ],
    related: (
      <>
        Lernen Sie die Befehle der Ausgabe mit dem{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          TikZ-Leitfaden
        </IntroLink>
        . Kein Ausgangsbild? Beschreiben Sie das Diagramm dem{" "}
        <IntroLink href="/tools/tikz-generator">TikZ-Generator</IntroLink>, oder stellen Sie Daten
        mit dem <IntroLink href="/tools/pgfplots-generator">pgfplots-Generator</IntroLink> dar.
      </>
    ),
  },

  "tikz-generator": {
    heading: "TikZ-Generator online: TikZ-Diagramme aus einer Beschreibung erstellen",
    intro: (
      <>
        <p>
          Dieser TikZ-Generator schreibt TikZ-Code aus einer Beschreibung des Diagramms in
          Alltagssprache. Er erzeugt ein vollständiges LaTeX-Dokument mit einem kommentierten
          tikzpicture und den nötigen Bibliotheken wie positioning, arrows.meta und shapes: Sie
          starten mit einer funktionierenden Grundlage statt mit einer leeren Seite.
        </p>
        <p>
          Die Vorschau kompiliert den Code mit pdfLaTeX auf einer vollständigen TeX-Live-Distribution
          des Octree-Kompilierdienstes. Ein Konto ist nicht nötig. Der erzeugte Code ist hier
          schreibgeschützt; für einen Online-TikZ-Editor mit Live-Vorschau fügen Sie ihn in den
          LaTeX-Editor ein oder öffnen ihn in Octree, wo ein kostenloses Konto ihn speichert.
        </p>
      </>
    ),
    stepsHeading: "So erstellen Sie ein TikZ-Diagramm online",
    steps: [
      {
        title: "Beschreiben Sie das Diagramm",
        body: "Nennen Sie die Knoten, ihre Verbindungen und die Anordnung, zum Beispiel „ein Flussdiagramm mit Start, Verarbeitung und Ende, von links nach rechts verbunden“.",
      },
      {
        title: "Erzeugen Sie das TikZ",
        body: "Die KI schreibt ein vollständiges LaTeX-Dokument mit einem kommentierten tikzpicture und den benötigten TikZ-Bibliotheken.",
      },
      {
        title: "Vorschau ansehen und bearbeiten",
        body: "Prüfen Sie das kompilierte Diagramm im Vorschau-Tab. Um den Code von Hand zu ändern, fügen Sie ihn in den Online-LaTeX-Editor ein oder öffnen ihn in Octree.",
      },
    ],
    tipsHeading: "Tipps für bessere TikZ-Diagramme",
    tips: [
      {
        title: "Seien Sie konkret",
        body: "Geben Sie Knotenbeschriftungen, Formen, Pfeilrichtungen und Farben an. „Von links nach rechts“ oder „von oben nach unten“ löst die meisten Layoutprobleme.",
      },
      {
        title: "Gehen Sie in kleinen Schritten vor",
        body: "Erzeugen Sie zuerst eine einfache Version und bitten Sie dann in Octree um jeweils eine Änderung, statt die Anfrage von vorn neu zu schreiben.",
      },
      {
        title: "Verwenden Sie pgfplots für Funktionsgraphen",
        body: "Für Achsen, Funktionsgraphen und Datendiagramme erzeugt der pgfplots-Generator saubereren Code als reines TikZ.",
      },
    ],
    faqHeading: "FAQ zum TikZ-Generator",
    faq: [
      {
        question: "Kann ich TikZ online nutzen, ohne LaTeX zu installieren?",
        answer:
          "Ja. Der TikZ-Generator schreibt den Code und kompiliert ihn auf den Servern von Octree mit einer vollständigen TeX-Live-Distribution: Die Vorschau des Diagramms funktioniert im Browser, ohne dass Sie etwas installieren.",
      },
      {
        question: "Gibt es einen Online-TikZ-Editor mit Live-Vorschau?",
        answer:
          "Der erzeugte Code ist auf dieser Seite schreibgeschützt. Fügen Sie ihn in den kostenlosen Online-LaTeX-Editor unter tools.useoctree.com/tools/latex-preview ein, der beim Tippen neu kompiliert, oder öffnen Sie ihn in Octree, um ihn mit KI zu bearbeiten und als Projekt zu speichern.",
      },
      {
        question: "Welche Arten von TikZ-Diagrammen kann er erzeugen?",
        answer:
          "Flussdiagramme, Bäume, Graphen und Netzwerke, Blockdiagramme, Zustandsautomaten, Skizzen neuronaler Netze, Venn-Diagramme, kommutative Diagramme und geometrische Abbildungen. Sehr detaillierte technische Zeichnungen brauchen danach meist noch Handarbeit.",
      },
      {
        question: "Ist der TikZ-Generator kostenlos?",
        answer:
          "Ja. Erzeugen, Vorschau, Kopieren und Herunterladen des Codes erfordern kein Konto. Ein kostenloses Octree-Konto brauchen Sie nur, um das Diagramm als Projekt zu speichern.",
      },
      {
        question: "Funktioniert der Code in Overleaf?",
        answer:
          "Ja. Die Ausgabe ist ein Standard-LaTeX-Dokument, das tikz und Standard-TikZ-Bibliotheken lädt und mit pdfLaTeX kompiliert: Sie funktioniert in Overleaf, Octree und lokalen TeX-Distributionen.",
      },
    ],
    related: (
      <>
        Lernen Sie die Syntax im{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          TikZ-Leitfaden
        </IntroLink>
        , bearbeiten Sie TikZ-Code im{" "}
        <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>, oder machen Sie aus
        einem vorhandenen Bild Code mit{" "}
        <IntroLink href="/tools/image-to-tikz">Bild zu TikZ</IntroLink>.
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "KI-LaTeX-Generator: aus einer Beschreibung wird LaTeX-Code",
    intro: (
      <>
        <p>
          Dieser KI-LaTeX-Generator schreibt LaTeX-Code aus einer Beschreibung in Alltagssprache.
          Fragen Sie nach einer beamer-Präsentation, einem Laborbericht, einem zweispaltigen
          Artikel oder einer Tabelle: Er liefert ein vollständiges Dokument mit der passenden
          Dokumentklasse, Paketen wie amsmath, amssymb und graphicx und einer Gliederung zum
          Ausfüllen.
        </p>
        <p>
          Die Vorschau kompiliert den Code mit einer vollständigen TeX-Live-Distribution auf dem
          Kompilierdienst von Octree: standardmäßig pdfLaTeX, XeLaTeX oder LuaLaTeX, wenn der Code es
          verlangt. Ein Konto ist nicht nötig; registrieren Sie sich nur kostenlos, wenn Sie das
          Ergebnis als Projekt speichern möchten.
        </p>
      </>
    ),
    stepsHeading: "So erzeugen Sie LaTeX mit KI",
    steps: [
      {
        title: "Beschreiben Sie, was Sie brauchen",
        body: "Schreiben Sie ein bis zwei Sätze: die Art des Dokuments, seine Abschnitte und besondere Elemente wie eine Tabelle, eine Gleichung oder ein zweispaltiges Layout.",
      },
      {
        title: "Erzeugen Sie den LaTeX-Code",
        body: "Klicken Sie auf „LaTeX generieren“. Der Code erscheint nach und nach als vollständiges Dokument, mit Dokumentklasse, Paketen und Gliederung bereits an ihrem Platz.",
      },
      {
        title: "Vorschau ansehen, dann kopieren oder weiterbearbeiten",
        body: "Wechseln Sie zum Vorschau-Tab, um das kompilierte PDF zu sehen. Kopieren Sie den Code, laden Sie ihn als .tex oder PDF herunter, oder öffnen Sie ihn in Octree, um weiter daran zu arbeiten.",
      },
    ],
    tipsHeading: "Tipps für besseres LaTeX",
    tips: [
      {
        title: "Nennen Sie die Dokumentklasse",
        body: "Geben Sie article, report, beamer-Folien oder letter an und zählen Sie die gewünschten Abschnitte auf; eine vage Anfrage ergibt ein generisches Dokument.",
      },
      {
        title: "Bitten Sie um eine Sache auf einmal",
        body: "Eine einzelne Tabelle, ein Abbildungslayout oder ein Foliensatz wird sauberer als eine ganze Abschlussarbeit in einer Anfrage. Lange Anfragen können abgeschnitten werden.",
      },
      {
        title: "Ersetzen Sie den Beispieltext",
        body: "Der Generator schreibt eine Struktur und Beispielinhalt, nicht Ihre Forschung. Prüfen Sie jede Gleichung und behalten Sie nie ein Zitat, das Sie nicht überprüft haben.",
      },
    ],
    faqHeading: "FAQ zum KI-LaTeX-Generator",
    faq: [
      {
        question: "Was ist ein KI-LaTeX-Generator?",
        answer:
          "Er macht aus einer Beschreibung in Alltagssprache LaTeX-Code. Sie beschreiben das Dokument, und der Generator schreibt eine vollständige .tex-Datei mit Dokumentklasse, benötigten Paketen, Abschnitten und Beispielinhalt, den Sie anschließend anpassen.",
      },
      {
        question: "Ist der LaTeX-Code-Generator kostenlos?",
        answer:
          "Ja. Sie können LaTeX ohne Konto erzeugen, ansehen, kopieren und herunterladen. Ein kostenloses Octree-Konto brauchen Sie nur, wenn Sie das Dokument als Projekt speichern und weiter bearbeiten möchten.",
      },
      {
        question: "Kompiliert das erzeugte LaTeX?",
        answer:
          "Die Vorschau kompiliert es mit einem vollständigen TeX Live auf dem Kompilierdienst von Octree (standardmäßig pdfLaTeX, XeLaTeX oder LuaLaTeX, wenn der Code es braucht). Schlägt das fehl, bietet der Fehlerdialog an, das Dokument in Octree zu öffnen, damit die KI den Fehler anhand des Logs behebt.",
      },
      {
        question: "Kann er einen ganzen Artikel für mich schreiben?",
        answer:
          "Er schreibt das Gerüst eines Artikels: Dokumentklasse, Pakete, Abschnitte und Beispielinhalt wie eine typische Gleichung oder Tabelle. Dieser Inhalt ist Platzhaltertext, und sehr lange Dokumente können abgeschnitten werden: Betrachten Sie das Ergebnis als Ausgangspunkt.",
      },
      {
        question: "Welche Dokumenttypen kann er erzeugen?",
        answer:
          "Artikel, Berichte, beamer-Präsentationen, Briefe, Lebensläufe, Übungsblätter, Tabellen und einzelne Gleichungen sind häufige Anfragen. Braucht ein Dokument ein bestimmtes Paket, nennen Sie es in der Beschreibung.",
      },
    ],
    related: (
      <>
        Sie möchten den erzeugten Code verstehen? Lesen Sie die{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          Einführung in LaTeX
        </IntroLink>
        , oder fügen Sie beliebigen LaTeX-Code in den{" "}
        <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink> ein, um ihn mit
        Live-PDF-Vorschau zu bearbeiten.
      </>
    ),
  },

  "table-to-latex": {
    heading: "Tabelle in LaTeX umwandeln: LaTeX-Tabellengenerator für CSV",
    intro: (
      <>
        <p>
          Dieser LaTeX-Tabellengenerator macht aus einer CSV-Datei eine formatierte LaTeX-Tabelle.
          Laden Sie eine .csv-Datei aus Excel, Google Sheets oder einer anderen Tabellenkalkulation
          hoch: Ein KI-Modell (OpenAI gpt-4o-mini) schreibt ein vollständiges LaTeX-Dokument um eine{" "}
          <Cmd>tabular</Cmd>-Umgebung, lädt booktabs für saubere horizontale Linien und richtet
          Kopfzeile und Spaltenausrichtung ein. Das ist der schnellste Weg, Excel in LaTeX
          umzuwandeln: Speichern Sie das Blatt zuerst als CSV, denn .xlsx-Dateien werden nicht direkt
          gelesen.
        </p>
        <p>
          Der Tab „Vorschau“ kompiliert die Tabelle mit einer vollständigen TeX-Live-Distribution
          auf dem Kompilierdienst von Octree, sodass Sie das Ergebnis sehen, bevor Sie die .tex-Datei,
          ein PDF oder ein JPG-Bild exportieren. Die Datei wird in Ihrem Browser gelesen und als Text
          gesendet, und jede Umwandlung liefert etwa 2.000 Tokens LaTeX, genug für eine
          Ergebnistabelle mit einigen Dutzend Zeilen. Das Tool ist kostenlos und erfordert kein
          Konto.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie eine CSV-Datei in eine LaTeX-Tabelle um",
    steps: [
      {
        title: "Speichern Sie Ihre Tabelle als CSV",
        body: "Wählen Sie in Excel Datei > Speichern unter > CSV UTF-8 (durch Trennzeichen getrennt); in Google Sheets Datei > Herunterladen > Kommagetrennte Werte (.csv). Lassen Sie die Kopfzeile in der ersten Zeile.",
      },
      {
        title: "Laden Sie die .csv-Datei hoch",
        body: "Ziehen Sie die Datei in den Upload-Bereich oder klicken Sie, um sie auszuwählen. Die LaTeX-Tabelle erscheint nach und nach im Tab „Code“ als vollständiges Dokument.",
      },
      {
        title: "Vorschau ansehen und exportieren",
        body: "Öffnen Sie den Tab „Vorschau“, um die Tabelle zu einem PDF zu kompilieren, und exportieren Sie dann die .tex-Datei, das PDF oder ein JPG-Bild, oder öffnen Sie sie in Octree, um die Tabelle in Ihren Artikel einzufügen.",
      },
    ],
    tipsHeading: "Häufige Tabellenprobleme und wie Sie sie beheben",
    tips: [
      {
        title: "Sonderzeichen zerstören die Tabelle",
        body: (
          <>
            <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> und <Cmd>_</Cmd> in Zellen
            müssen als <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>, <Cmd>\#</Cmd> und{" "}
            <Cmd>\_</Cmd> maskiert werden. Schlägt die Vorschau fehl, nennt das Log die zu
            korrigierende Zeile.
          </>
        ),
      },
      {
        title: "Die Tabelle ragt über die Seite hinaus",
        body: (
          <>
            Breite Tabellen überschreiten die Textbreite. Verwenden Sie Querformat, eine kleinere
            Schrift wie <Cmd>\small</Cmd>, oder setzen Sie die tabular in{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> aus graphicx.
          </>
        ),
      },
      {
        title: "Große Tabellenblätter werden abgeschnitten",
        body: "Jede Umwandlung liefert etwa 2.000 Tokens LaTeX, also eine Tabelle mit einigen Dutzend Zeilen. Teilen Sie größere Blätter in mehrere CSV-Dateien auf oder behalten Sie nur die Zeilen, die der Artikel braucht.",
      },
    ],
    faqHeading: "FAQ zum LaTeX-Tabellengenerator",
    faq: [
      {
        question: "Wie wandle ich eine Excel-Tabelle in LaTeX um?",
        answer:
          "Speichern Sie das Blatt in Excel als CSV-Datei (Datei > Speichern unter > CSV) und laden Sie die .csv-Datei hier hoch. Das Tool liest .xlsx-Dateien nicht direkt, aber ein CSV-Export des Blatts enthält dieselben Zellwerte. Sie erhalten eine booktabs-Tabelle in einem vollständigen LaTeX-Dokument, die Sie ansehen, herunterladen und in Ihren Artikel einfügen können.",
      },
      {
        question: "Welche Dateiformate akzeptiert der LaTeX-Tabellengenerator?",
        answer:
          "Nur .csv-Dateien. Excel, Google Sheets, LibreOffice Calc und Numbers können ein Blatt als CSV exportieren. JSON, .xlsx-Dateien und eingefügte Tabellen werden auf dieser Seite nicht akzeptiert.",
      },
      {
        question: "Verwendet die Ausgabe booktabs?",
        answer:
          "Ja. Das erzeugte Dokument lädt booktabs, und die Tabelle verwendet normalerweise dessen Linien \\toprule, \\midrule und \\bottomrule. Kopieren Sie die tabular- oder table-Umgebung in Ihr eigenes Dokument und fügen Sie \\usepackage{booktabs} zu dessen Präambel hinzu.",
      },
      {
        question: "Ist der CSV-zu-LaTeX-Konverter kostenlos?",
        answer:
          "Ja, er ist kostenlos und erfordert kein Konto. Die Tabelle wird von einem KI-Modell (OpenAI gpt-4o-mini) geschrieben: Prüfen Sie Zahlen und Spaltenausrichtung in der Vorschau, bevor Sie sie verwenden.",
      },
    ],
    related: (
      <>
        Lernen Sie tabular, multirow und Spaltentypen im{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          Leitfaden zu LaTeX-Tabellen
        </IntroLink>
        , stellen Sie dieselben Daten mit dem{" "}
        <IntroLink href="/tools/pgfplots-generator">PGFPlots-Generator</IntroLink> grafisch dar,
        oder sehen Sie sich alle <IntroLink href="/tools/latex-converter">LaTeX-Konverter</IntroLink>{" "}
        an.
      </>
    ),
  },

  "equation-to-latex": {
    heading: "Gleichung in LaTeX umwandeln: so funktioniert der Konverter",
    intro: (
      <p>
        Wandeln Sie jede mathematische Gleichung in drei Schritten in LaTeX um. Das Tool akzeptiert
        getippte Gleichungen, Screenshots und handschriftliche Gleichungen und erzeugt LaTeX, das
        Sie direkt in einen Artikel, eine Hausaufgabe oder Vorlesungsnotizen einfügen können.
      </p>
    ),
    stepsHeading: "In drei Schritten eine Gleichung in LaTeX umwandeln",
    steps: [
      {
        title: "Geben Sie Ihre Gleichung ein oder laden Sie sie hoch",
        body: "Tippen Sie die Gleichung in Alltagssprache („Integral von x Quadrat von 0 bis 1“), fügen Sie sie in beliebiger Notation ein, oder ziehen Sie ein Bild hinein: einen Screenshot einer Lehrbuchformel, ein Whiteboard-Foto oder eine handschriftliche Gleichung von iPad oder Smartphone.",
      },
      {
        title: "Wandeln Sie in LaTeX um",
        body: "Klicken Sie auf „Zu LaTeX konvertieren“. Die KI liest die Gleichung, erkennt Brüche, Wurzeln, Summen, Integrale, Matrizen und griechische Buchstaben und schreibt Standard-LaTeX mit amsmath: Das Ergebnis kompiliert in Overleaf, Octree oder jeder TeX-Distribution.",
      },
      {
        title: "Prüfen Sie die Vorschau und kopieren Sie den Code",
        body: "Die gerenderte Gleichung erscheint neben dem Code, damit Sie jedes Symbol prüfen können. Kopieren Sie das LaTeX, laden Sie es als .tex-Datei oder PDF herunter, oder öffnen Sie es in Octree, um weiterzuarbeiten.",
      },
    ],
    tipsHeading: "Wofür ist es gedacht?",
    tips: [
      {
        title: "Hausaufgaben und Übungsblätter",
        body: "Machen Sie aus einer handschriftlichen Lösung eine getippte Abgabe, ohne vorher alle LaTeX-Befehle lernen zu müssen.",
      },
      {
        title: "Forschungsartikel und Abschlussarbeiten",
        body: "Übertragen Sie Gleichungen aus Notizen, Folien oder älteren PDFs als sauberes, bearbeitbares LaTeX in Ihr Manuskript.",
      },
      {
        title: "Vorlesungsnotizen",
        body: "Fotografieren Sie nach der Vorlesung die Tafel oder Ihr Heft und wandeln Sie jede Formel für Ihre Notizen in LaTeX um.",
      },
      {
        title: "Screenshots von Lehrbuchformeln",
        body: "Laden Sie einen Ausschnitt einer Lehrbuch- oder Zeitschriftenseite hoch und erhalten Sie das LaTeX der Formel, statt sie abzutippen.",
      },
      {
        title: "Handschrift auf iPad oder Tablet",
        body: "Exportieren Sie handschriftliche Gleichungen aus GoodNotes, Notability oder OneNote als Bilder und wandeln Sie sie in einem Schritt um.",
      },
    ],
    faqHeading: "FAQ: Gleichung in LaTeX",
    faq: [
      {
        question: "Wie wandle ich eine Gleichung in LaTeX um?",
        answer:
          "Tippen Sie die Gleichung als Klartext oder in mathematischer Notation ein, oder laden Sie ein Bild davon hoch, und klicken Sie auf „Zu LaTeX konvertieren“. Der Konverter gibt LaTeX-Code mit amsmath zurück und zeigt eine gerenderte Vorschau, damit Sie ihn prüfen können, bevor Sie ihn in Ihr Dokument kopieren.",
      },
      {
        question: "Kann ich eine handschriftliche Gleichung in LaTeX umwandeln?",
        answer:
          "Ja. Laden Sie ein Foto oder einen Scan einer handschriftlichen Gleichung als JPEG, PNG, GIF oder WebP hoch, auch Handschrift, die aus einer iPad- oder Tablet-App exportiert wurde. Scharfe, kontrastreiche Bilder mit einer Gleichung pro Bild liefern das genaueste LaTeX.",
      },
      {
        question: "Ist der Gleichung-zu-LaTeX-Konverter kostenlos?",
        answer:
          "Ja. Der Konverter ist kostenlos und erfordert kein Konto. Sie können das LaTeX kopieren, eine .tex-Datei oder ein kompiliertes PDF herunterladen oder das Ergebnis im Octree-Editor öffnen.",
      },
      {
        question: "Welche LaTeX-Pakete braucht die Ausgabe?",
        answer:
          "Der erzeugte Code verwendet übliche mathematische Notation, die mit den Paketen amsmath, amssymb und amsfonts kompiliert. Wenn Sie die .tex-Datei herunterladen, enthält die Präambel sie bereits, und die Ausgabe funktioniert in Overleaf und allen gängigen TeX-Distributionen.",
      },
    ],
    related: (
      <>
        Sie suchen die Befehle hinter der Ausgabe? Stöbern Sie in der{" "}
        <IntroLink href="/symbols">LaTeX-Symbolreferenz</IntroLink>. Mathematik als Klartext tippen
        Sie direkt in das Feld oben; um das Ergebnis als vollständiges Dokument weiterzubearbeiten,
        verwenden Sie den <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>.
      </>
    ),
  },

  "arxiv-to-latex": {
    heading: "arXiv zu LaTeX: den LaTeX-Quelltext jedes Artikels herunterladen",
    intro: (
      <>
        <p>
          Die meisten Artikel auf arXiv wurden in LaTeX geschrieben, und arXiv bewahrt den von den
          Autoren eingereichten Quelltext auf: .tex-Dateien, Literaturverzeichnis, Stildateien und
          Abbildungen. Dieses Tool holt diesen arXiv-LaTeX-Quelltext für Sie. Fügen Sie eine ID oder
          einen Link ein: Sie können die Dateien durchsuchen, die Haupt-.tex-Datei lesen und den
          arXiv-Quellcode als .zip herunterladen, ohne selbst ein .tar.gz-Archiv zu entpacken.
        </p>
        <p>
          Die Downloads kommen direkt vom E-Print-Dienst von arXiv, und nichts wird gespeichert.
          Quelltexte bis 30 MB und 200 Dateien werden unterstützt. Artikel, die nur als PDF
          eingereicht wurden, haben kein TeX zum Herunterladen; das Tool weist darauf hin und
          verweist Sie stattdessen auf einen Konverter.
        </p>
      </>
    ),
    stepsHeading: "So laden Sie den TeX-Quelltext eines arXiv-Artikels herunter",
    steps: [
      {
        title: "Fügen Sie die arXiv-ID oder den Link ein",
        body: "Geben Sie eine ID wie 2401.12345 ein, eine ID im alten Format wie hep-th/9711200, oder einen beliebigen arxiv.org/abs- oder arxiv.org/pdf-Link. Hängen Sie eine Version an (2401.12345v2), um genau diese Revision zu erhalten; ohne Version erhalten Sie die neueste.",
      },
      {
        title: "Durchsuchen Sie den LaTeX-Quelltext",
        body: "Das Tool lädt das E-Print des Artikels von arXiv herunter, entpackt es und zeigt alle Dateien an. Die Haupt-.tex-Datei, die \\documentclass und \\begin{document} enthält, öffnet sich im Viewer; klicken Sie auf jede andere .tex-, .bib- oder .sty-Datei, um sie zu lesen.",
      },
      {
        title: "Herunterladen oder bearbeiten",
        body: "Laden Sie den arXiv-Quellcode als .zip herunter, oder öffnen Sie die Hauptdatei in Octree, wobei ihre \\input- und \\include-Dateien eingebunden werden. Laden Sie anschließend die Abbildungen aus der .zip hoch, um sie mit ihren Bildern zu kompilieren.",
      },
    ],
    faqHeading: "FAQ zum LaTeX-Quelltext von arXiv-Artikeln",
    faq: [
      {
        question: "Wie lade ich den LaTeX-Quelltext eines arXiv-Artikels herunter?",
        answer:
          "Fügen Sie die arXiv-ID oder URL des Artikels in das Tool auf dieser Seite ein. Es holt den von den Autoren eingereichten Quelltext von arXiv, listet alle Dateien auf, zeigt die Haupt-.tex-Datei an und lässt Sie alles als .zip herunterladen. Auf arxiv.org liegen dieselben Dateien hinter dem Link „TeX Source“ auf der Abstract-Seite des Artikels, als .tar.gz-Archiv.",
      },
      {
        question: "Warum heißt es bei einem Artikel, er habe keinen LaTeX-Quelltext?",
        answer:
          "Manche Autoren reichen bei arXiv nur ein PDF ein: Dann gibt es keine .tex-Dateien zum Herunterladen. Für solche Artikel kann der PDF-zu-LaTeX-Konverter Text und Mathematik als bearbeitbares LaTeX neu erstellen, den Originalquelltext stellt er jedoch nicht wieder her.",
      },
      {
        question: "Welche ist die Haupt-.tex-Datei?",
        answer:
          "arXiv-Quelltexte enthalten oft mehrere .tex-Dateien. Das Tool wählt die Datei, die die arXiv-Datei 00README als oberste Datei angibt, sofern vorhanden; andernfalls die Datei, die \\documentclass und \\begin{document} enthält und von keiner anderen Datei per \\input eingebunden wird. Abschnitte, die mit \\input oder \\include geladen werden, erscheinen im Dateibaum als eigene Dateien.",
      },
      {
        question: "Darf ich den LaTeX-Quelltext eines arXiv-Artikels wiederverwenden?",
        answer:
          "Der Quelltext ist nützlich, um zu sehen, wie ein Artikel gesetzt wurde, eine Gleichung zu prüfen oder ein Makro zu übernehmen. Ob Text, Abbildungen oder der ganze Artikel wiederverwendet werden dürfen, hängt von der Lizenz ab, die die Autoren auf arXiv gewählt haben und die auf der Abstract-Seite angegeben ist; zitieren Sie die Autoren in jedem Fall.",
      },
    ],
    related: (
      <>
        Kein Quelltext auf arXiv? Probieren Sie den{" "}
        <IntroLink href="/tools/pdf-to-latex">PDF-zu-LaTeX-Konverter</IntroLink>. Bearbeiten und
        kompilieren Sie den Quelltext im{" "}
        <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>, oder zählen Sie
        seine Wörter mit dem{" "}
        <IntroLink href="/tools/latex-word-counter">LaTeX-Wortzähler</IntroLink>.
      </>
    ),
  },

  "citation-generator": {
    heading: "BibTeX-Zitationsgenerator für LaTeX",
    intro: (
      <>
        <p>
          Dieser BibTeX-Zitationsgenerator macht aus den Angaben zu einem Buch, einem
          Zeitschriftenartikel, einem Konferenzbeitrag oder einer Webseite einen BibTeX-Eintrag, den
          Sie in eine .bib-Datei einfügen und aus LaTeX zitieren. Fügen Sie strukturierte Felder oder
          eine Literaturangabe als Freitext ein: Der Generator schreibt einen Eintrag mit Eintragstyp,
          Zitierschlüssel und den Feldern, die er erkennen kann (author, title, year, journal oder
          booktitle, volume, pages, publisher und DOI).
        </p>
        <p>
          Ein KI-Modell (OpenAI gpt-4o-mini) schreibt die Einträge aus dem eingefügten Text. Es fragt
          weder Crossref noch PubMed noch einen Bibliothekskatalog ab: Eine DOI oder URL allein
          reicht daher nicht für ein verlässliches Ergebnis. Geben Sie Titel und Autoren an und
          vergleichen Sie das Ergebnis mit der Quelle. Das Tool ist kostenlos, erfordert kein Konto
          und exportiert eine Datei references.bib, die mit BibTeX, natbib und biblatex
          funktioniert.
        </p>
      </>
    ),
    stepsHeading: "So erzeugen Sie eine BibTeX-Zitation",
    steps: [
      {
        title: "Beschreiben Sie die Quelle",
        body: "Fügen Sie Titel, Autoren, Jahr und Erscheinungsort (Zeitschrift, Konferenz oder Verlag) eines Buchs, Artikels oder Beitrags ein, in beliebiger Reihenfolge oder als Freitext-Literaturangabe. Sie können auch eine DOI oder URL ergänzen, geben Sie aber alle Angaben an, die Sie haben: Der Generator schlägt sie nicht nach.",
      },
      {
        title: "Erzeugen Sie den BibTeX-Eintrag",
        body: (
          <>
            Klicken Sie auf „BibTeX generieren“. Die KI wählt den Eintragstyp (<Cmd>@article</Cmd>,{" "}
            <Cmd>@book</Cmd>, <Cmd>@inproceedings</Cmd> usw.), schreibt einen Zitierschlüssel wie{" "}
            <Cmd>goodfellow2016deep</Cmd> und füllt die Felder aus, die sie erkennen kann.
          </>
        ),
      },
      {
        title: "Prüfen und speichern",
        body: (
          <>
            Vergleichen Sie die Felder mit der Verlagsseite, und kopieren Sie dann den Eintrag oder
            klicken Sie auf „Als .bib exportieren“, um <Cmd>references.bib</Cmd> herunterzuladen. Der
            Tab „Vorschau“ öffnet in Octree ein natbib-Testdokument, das alle Schlüssel zitiert.
          </>
        ),
      },
    ],
    tipsHeading: "Häufige BibTeX-Fehler und wie Sie sie beheben",
    tips: [
      {
        title: "Citation undefined",
        body: (
          <>
            Der Schlüssel in <Cmd>\cite{"{...}"}</Cmd> muss genau mit dem nach{" "}
            <Cmd>@article{"{"}</Cmd> übereinstimmen, und das Dokument braucht{" "}
            <Cmd>\bibliography{"{references}"}</Cmd> mit einem Stil wie{" "}
            <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Führen Sie BibTeX und dann zweimal LaTeX aus.
          </>
        ),
      },
      {
        title: "Namen in falscher Reihenfolge",
        body: (
          <>
            Trennen Sie Autoren mit <Cmd>and</Cmd>, nicht mit Kommas:{" "}
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>. Ein Komma innerhalb eines Namens
            bedeutet die Reihenfolge Nachname, Vorname.
          </>
        ),
      },
      {
        title: "Großbuchstaben verschwinden",
        body: (
          <>
            Viele Stile setzen Titel in Kleinbuchstaben. Umschließen Sie Akronyme und Eigennamen mit
            geschweiften Klammern, etwa <Cmd>{"{BERT}"}</Cmd> oder <Cmd>{"{Bayesian}"}</Cmd>, damit
            ihre Großschreibung erhalten bleibt.
          </>
        ),
      },
    ],
    faqHeading: "FAQ zum BibTeX-Zitationsgenerator",
    faq: [
      {
        question: "Wie erzeuge ich eine BibTeX-Zitation?",
        answer:
          "Fügen Sie die Angaben zur Quelle (Titel, Autoren, Jahr, Zeitschrift oder Verlag) in das Feld ein und klicken Sie auf „BibTeX generieren“. Das Tool gibt einen vollständigen BibTeX-Eintrag mit Eintragstyp, Zitierschlüssel und passenden Feldern zurück, den Sie kopieren oder als Datei references.bib herunterladen können.",
      },
      {
        question: "Kann er einen BibTeX-Eintrag aus einer DOI oder URL erstellen?",
        answer:
          "Sie können eine DOI oder URL einfügen, aber der Generator schlägt sie weder in Crossref noch im Web nach: Ein KI-Modell schreibt den Eintrag aus dem angegebenen Text. Bei einem bekannten Artikel füllt es die Felder oft richtig aus, kann sich aber irren: Prüfen Sie jedes Feld, oder fügen Sie zusätzlich zur DOI Titel, Autoren und Erscheinungsort ein.",
      },
      {
        question: "Formatiert er Zitationen in APA, MLA oder IEEE?",
        answer:
          "Er erzeugt nur BibTeX. Den Zitierstil wählen Sie in Ihrem LaTeX-Dokument, etwa mit \\bibliographystyle{IEEEtran} oder \\bibliographystyle{apalike}, oder mit biblatex und style=apa: So lässt sich derselbe .bib-Eintrag in jedem Stil ausgeben.",
      },
      {
        question: "Ist der BibTeX-Generator kostenlos?",
        answer:
          "Ja. Er ist kostenlos und erfordert kein Konto. Auf dieser Seite wird nichts gespeichert: Kopieren Sie den Eintrag oder exportieren Sie die .bib-Datei, bevor Sie die Seite verlassen.",
      },
    ],
    related: (
      <>
        Kommentierte Beispiele finden Sie im{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          Leitfaden zu LaTeX-Literaturverzeichnissen
        </IntroLink>
        ; beginnen Sie einen Artikel mit den{" "}
        <IntroLink href="/templates">LaTeX-Vorlagen</IntroLink>, oder kompilieren Sie Ihr Dokument
        im <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>.
      </>
    ),
  },

  "html-to-latex": {
    heading: "HTML online in LaTeX umwandeln",
    intro: (
      <>
        <p>
          Dieser HTML-zu-LaTeX-Konverter macht aus Web-Markup ein vollständiges, kompilierbares
          LaTeX-Dokument. Fügen Sie HTML in den Editor ein: Ein KI-Modell (OpenAI gpt-4o-mini) ordnet
          jedem Element seine LaTeX-Entsprechung zu. Die Überschriften <Cmd>{"<h1>"}</Cmd> bis{" "}
          <Cmd>{"<h3>"}</Cmd> werden zu Abschnitten, <Cmd>{"<ul>"}</Cmd> und <Cmd>{"<ol>"}</Cmd>{" "}
          werden zu itemize und enumerate, <Cmd>{"<table>"}</Cmd> wird zu tabular, und{" "}
          <Cmd>{"<strong>"}</Cmd>, <Cmd>{"<em>"}</Cmd>, <Cmd>{"<code>"}</Cmd> und Links werden zu den
          entsprechenden LaTeX-Befehlen, mit amsmath, amssymb und hyperref in der Präambel.
        </p>
        <p>
          Der Tab „Vorschau“ kompiliert das Ergebnis mit einer vollständigen TeX-Live-Distribution
          auf dem Kompilierdienst von Octree, sodass Sie das PDF sehen, bevor Sie die .tex-Datei
          herunterladen. Das Tool nimmt eingefügtes Markup an, keine URL, und jede Umwandlung liefert
          etwa 2.000 Tokens LaTeX: Lange Seiten wandeln Sie besser in mehreren Teilen um. Es ist
          kostenlos und erfordert kein Konto.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie HTML in LaTeX um",
    steps: [
      {
        title: "Fügen Sie Ihr HTML ein",
        body: "Ersetzen Sie das Beispiel durch Ihr eigenes Markup: eine ganze Seite, einen Artikelausschnitt oder den Quelltext einer Tabelle, kopiert von einer Website oder aus einem CMS-Export.",
      },
      {
        title: "Starten Sie die Umwandlung in LaTeX",
        body: (
          <>
            Klicken Sie auf „Zu LaTeX konvertieren“. Das LaTeX erscheint nach und nach im Tab „Code“
            als vollständiges Dokument, von <Cmd>\documentclass{"{article}"}</Cmd> bis{" "}
            <Cmd>\end{"{document}"}</Cmd>.
          </>
        ),
      },
      {
        title: "Vorschau ansehen und exportieren",
        body: "Öffnen Sie den Tab „Vorschau“, um das Dokument zu einem PDF zu kompilieren, und exportieren Sie es dann als .tex-Datei oder PDF, oder öffnen Sie es in Octree, um weiterzuarbeiten.",
      },
    ],
    tipsHeading: "Tipps für eine saubere Umwandlung",
    tips: [
      {
        title: "Entfernen Sie, was LaTeX nicht nutzen kann",
        body: "Löschen Sie Skripte, Inline-Styles, Navigation und Werbung vor der Umwandlung. CSS auf Absätzen, etwa Farben und Schriften, hat keine direkte LaTeX-Entsprechung, und eine kürzere Eingabe lässt mehr Platz für den Inhalt.",
      },
      {
        title: "Bilder werden zu Platzhaltern",
        body: (
          <>
            Ein <Cmd>{"<img>"}</Cmd>-Tag kann nur zu einer <Cmd>\includegraphics</Cmd>-Zeile werden;
            die Bilddatei selbst wird nicht heruntergeladen, daher kann die Vorschau sie nicht
            anzeigen. Fügen Sie die Dateien in Octree hinzu oder kommentieren Sie diese Zeilen aus.
          </>
        ),
      },
      {
        title: "Sonderzeichen",
        body: (
          <>
            Scheitert die Kompilierung an einem Symbol, prüfen Sie, ob <Cmd>&amp;</Cmd>,{" "}
            <Cmd>%</Cmd>, <Cmd>#</Cmd> und <Cmd>_</Cmd> im Text als <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>,{" "}
            <Cmd>\#</Cmd> und <Cmd>\_</Cmd> maskiert wurden.
          </>
        ),
      },
    ],
    faqHeading: "FAQ: HTML in LaTeX",
    faq: [
      {
        question: "Wie wandle ich HTML in LaTeX um?",
        answer:
          "Fügen Sie das HTML in den Editor auf dieser Seite ein und klicken Sie auf „Zu LaTeX konvertieren“. Überschriften werden zu \\section-Befehlen, Listen zu itemize oder enumerate, Tabellen zu tabular, und Fett, Kursiv und Links zu \\textbf, \\emph und \\href. Prüfen Sie das Ergebnis im Tab „Vorschau“ und laden Sie die .tex-Datei oder das PDF herunter.",
      },
      {
        question: "Kann dieses Tool LaTeX in HTML umwandeln?",
        answer:
          "Nein, es wandelt nur HTML in LaTeX um. Für den Weg von LaTeX zu HTML nutzt man üblicherweise ein lokales TeX-Tool wie make4ht oder htlatex aus TeX4ht, oder Pandoc (pandoc paper.tex -o paper.html). Für die Veröffentlichung im Web ist auch der LaTeX-zu-Markdown-Konverter dieser Website eine Option.",
      },
      {
        question: "Wie viel HTML kann ich umwandeln?",
        answer:
          "Es gibt keine feste Grenze für die Eingabe, aber jede Umwandlung liefert etwa 2.000 Tokens LaTeX, also einige Seiten. Wandeln Sie eine lange Seite abschnittsweise um, oder entfernen Sie zuerst Skripte, Styles und Navigation, damit nur der Inhalt gesendet wird.",
      },
      {
        question: "Ist der HTML-zu-LaTeX-Konverter kostenlos?",
        answer:
          "Ja, er ist kostenlos und erfordert kein Konto. Die Umwandlung nutzt ein KI-Modell (OpenAI gpt-4o-mini): Prüfen Sie das Ergebnis, besonders Tabellen mit verbundenen Zellen.",
      },
    ],
    related: (
      <>
        Brauchen Sie ein anderes Format? Sehen Sie sich alle{" "}
        <IntroLink href="/tools/latex-converter">LaTeX-Konverter</IntroLink> an, wandeln Sie{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown in LaTeX</IntroLink> um, oder lernen Sie
        die Grundlagen mit dem{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          Leitfaden zu LaTeX-Tabellen
        </IntroLink>
        .
      </>
    ),
  },

  "latex-to-word": {
    heading: "LaTeX online in Word (DOCX) umwandeln",
    intro: (
      <>
        <p>
          Dieser LaTeX-zu-Word-Konverter macht aus einem .tex-Dokument eine bearbeitbare Microsoft
          Word-Datei (.docx). Er arbeitet in zwei Durchgängen. Zuerst liest ein KI-Modell (OpenAI
          gpt-4o-mini) Ihr LaTeX und schreibt es in sauberes, semantisches HTML um: Es behält{" "}
          <GuideCode>\section</GuideCode>-Überschriften, Listen, <GuideCode>tabular</GuideCode>
          -Tabellen, Fett- und Kursivschrift, Links und Fußnoten bei und entfernt die Präambel und
          Layoutbefehle, die in Word keinen Sinn ergeben. Danach wird dieses HTML deterministisch in
          native Word-Elemente umgewandelt: Formatvorlagen Überschrift 1 bis Überschrift 6,
          Aufzählungen und nummerierte Listen, Tabellen mit Kopfzeile und formatierte Textabschnitte.
        </p>
        <p>
          Das Ergebnis ist eine echte .docx-Datei: Änderungsverfolgung, Kommentare und
          Inhaltsverzeichnis funktionieren wie in jeder Word-Datei. Mathematik wird als lesbarer
          Unicode-Text statt als Word-Formeln geschrieben, Abbildungen werden durch ihre
          Bildunterschriften ersetzt, und die Eingabe ist auf 60.000 Zeichen begrenzt. Der Konverter
          ist kostenlos, erfordert kein Konto und speichert nichts, nachdem die Datei zurückgegeben
          wurde.
        </p>
        <GuideTable
          headers={["LaTeX", "Ergebnis in Word"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Formatvorlagen Titel, Überschrift 1, Überschrift 2"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Aufzählungen und nummerierte Listen, Verschachtelung bleibt erhalten"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Word-Tabelle mit fetter Kopfzeile; Beschriftung darüber"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Fetter, kursiver, unterstrichener Text und Text in Festbreitenschrift"],
            [<GuideCode key="5">$inline math$</GuideCode>, "Lesbarer Text mit Unicode-Symbolen, Hoch- und Tiefstellungen"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Ein zentrierter Absatz pro Gleichungszeile, mit Nummer"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Anklickbarer Hyperlink; Fußnotentext in Klammern"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "Marken [key] und nummerierter Abschnitt „References“"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Nur die Bildunterschrift (Bilddateien werden nicht hochgeladen)"],
          ]}
        />
      </>
    ),
    stepsHeading: "So wandeln Sie LaTeX in Word um",
    steps: [
      {
        title: "Fügen Sie Ihr LaTeX ein",
        body: "Fügen Sie den Inhalt Ihrer .tex-Datei ein, ein vollständiges Dokument oder einen Ausschnitt, bis 60.000 Zeichen.",
      },
      {
        title: "Starten Sie die Umwandlung in Word",
        body: "Klicken Sie auf „Convert to Word“. Nach Abschluss der Umwandlung wird document.docx automatisch heruntergeladen; die Download-Schaltfläche bleibt sichtbar, falls Sie eine weitere Kopie brauchen.",
      },
      {
        title: "Öffnen Sie die Datei in Word",
        body: "Öffnen Sie die Datei in Microsoft Word, Google Docs, LibreOffice oder Pages. Überschriften verwenden die integrierten Überschrift-Formatvorlagen von Word (Überschrift 1, Überschrift 2 usw.), daher funktionieren Navigationsbereich und Inhaltsverzeichnis sofort.",
      },
    ],
    tipsHeading: "Grenzen und wie Sie sie umgehen",
    tips: [
      {
        title: "Gleichungen sind Klartext",
        body: (
          <>
            Mathematik wird zu lesbarem Unicode-Text wie x² + y² = r², nicht zu bearbeitbaren
            Word-Formeln. Für native Word-Formeln (OMML) führen Sie Pandoc lokal aus:{" "}
            <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>, oder rendern
            Sie eine wichtige Formel als Bild mit dem{" "}
            <IntroLink href="/tools/latex-to-png">LaTeX-zu-PNG-Konverter</IntroLink>.
          </>
        ),
      },
      {
        title: "Abbildungen erscheinen als Bildunterschriften",
        body: "Bilddateien werden nicht mit dem Text gesendet, daher wird jede Abbildung durch ihre Bildunterschrift ersetzt. Fügen Sie die Bilder anschließend in Word ein.",
      },
      {
        title: "Der Text ist zu lang",
        body: "Die Grenze liegt bei 60.000 Zeichen. Wandeln Sie eine Abschlussarbeit Kapitel für Kapitel um und fügen Sie die Teile in einer Word-Datei zusammen.",
      },
    ],
    faqHeading: "FAQ: LaTeX in Word",
    faq: [
      {
        question: "Wie wandle ich eine LaTeX-Datei in Word um?",
        answer:
          "Fügen Sie den Inhalt Ihrer .tex-Datei in den Editor ein und klicken Sie auf „Convert to Word“. Der Konverter liest die Struktur des LaTeX, baut sie als Word-Dokument mit echten Überschriften, Listen, Tabellen und Textformatierung nach und lädt document.docx auf Ihren Computer herunter. Öffnen Sie es in Microsoft Word, Google Docs, LibreOffice oder Pages.",
      },
      {
        question: "Was passiert mit Gleichungen, wenn ich LaTeX in Word umwandle?",
        answer:
          "Inline- und abgesetzte Mathematik wird in lesbaren Klartext mit Unicode-Symbolen umgewandelt (zum Beispiel x² + y² = r² oder ∫ f(x) dx), abgesetzte Gleichungen stehen zentriert in einer eigenen Zeile. Es sind keine nativen Word-Formelobjekte. Wenn Sie bearbeitbare Word-Formeln (OMML) brauchen, führen Sie Pandoc lokal aus: pandoc paper.tex -o paper.docx. Für eine perfekt gesetzte Formel rendern Sie sie mit dem LaTeX-zu-PNG-Tool als Bild und fügen das Bild ein.",
      },
      {
        question: "Bleiben Tabellen, Listen und Literaturverzeichnisse erhalten?",
        answer:
          "Tabellen (tabular, booktabs, longtable) werden zu echten Word-Tabellen mit Kopfzeile; itemize und enumerate werden zu Aufzählungen und nummerierten Listen; Fett, Kursiv, Unterstreichung, Festbreitenschrift, Links und Fußnoten bleiben erhalten. Zitationen erscheinen als [key] oder als Autor-Jahr-Text, und eine thebibliography-Umgebung wird zu einem nummerierten Abschnitt „References“. Abbildungen werden durch ihre Bildunterschriften ersetzt, da der Konverter keinen Zugriff auf die Bilddateien hat.",
      },
      {
        question: "Ist die Umwandlung von LaTeX in Word kostenlos, und wird mein Dokument gespeichert?",
        answer:
          "Der Konverter ist kostenlos und ohne Anmeldung nutzbar. Ihr LaTeX wird zur Umwandlung an unseren Server gesendet; die Word-Datei wird im Arbeitsspeicher erzeugt und an Ihren Browser zurückgestreamt, und nach dem Senden der Antwort wird nichts gespeichert. Dokumente bis 60.000 Zeichen werden unterstützt, was einen typischen Artikel oder ein Kapitel einer Abschlussarbeit abdeckt.",
      },
    ],
    related: (
      <>
        Brauchen Sie stattdessen Markdown für Notion oder GitHub? Verwenden Sie den{" "}
        <IntroLink href="/tools/latex-to-markdown">LaTeX-zu-Markdown-Konverter</IntroLink>,
        kompilieren Sie ein PDF im{" "}
        <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>, oder sehen Sie sich
        alle <IntroLink href="/tools/latex-converter">LaTeX-Konverter</IntroLink> an.
      </>
    ),
  },

  "latex-to-png": {
    heading: "LaTeX in PNG umwandeln: Gleichungen als Bild",
    intro: (
      <>
        <p>
          Dieser LaTeX-zu-PNG-Konverter rendert eine Gleichung, eine TikZ-Abbildung oder die erste
          Seite eines Dokuments als PNG-Bild. Ihr Code wird mit einer vollständigen
          TeX-Live-Installation auf dem Kompilierdienst von Octree kompiliert, demselben, den auch
          der <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink> nutzt: Alle
          Pakete, die Sie lokal verwenden würden, sind verfügbar. Das PDF kommt in Ihren Browser
          zurück, wo pdf.js die erste Seite in der gewählten Auflösung (DPI) rastert und ein PNG mit
          transparentem oder weißem Hintergrund erzeugt. Keine KI ist beteiligt, und nach der
          Kompilierung wird nichts gespeichert.
        </p>
        <p>
          Für eine einzelne Formel schneidet die Klasse <GuideCode>standalone</GuideCode> mit der
          Option <GuideCode>preview</GuideCode> die Seite auf die Gleichung zu, und{" "}
          <GuideCode>border=4pt</GuideCode> fügt einen kleinen Rand hinzu. Verwenden Sie das Bild in
          Folien, Word und Google Docs, README-Dateien, Notion, Slack oder E-Mails: überall dort, wo
          Mathematik nicht gesetzt werden kann. Das Tool ist kostenlos und erfordert kein Konto.
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "So wandeln Sie LaTeX in PNG um",
    steps: [
      {
        title: "Schreiben Sie die Gleichung oder das Dokument",
        body: (
          <>
            Bearbeiten Sie das Beispiel, das{" "}
            <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd> verwendet, damit das Bild
            auf die Formel zugeschnitten wird, oder fügen Sie ein beliebiges vollständiges Dokument
            ein.
          </>
        ),
      },
      {
        title: "Wählen Sie Auflösung und Hintergrund",
        body: "Wählen Sie 1× (96 DPI), 2× (192 DPI) oder 4× (384 DPI), und lassen Sie „Transparent background“ für Folien und dunkle Designs aktiviert, oder deaktivieren Sie es für einen weißen Hintergrund.",
      },
      {
        title: "Umwandeln und speichern",
        body: "Klicken Sie auf „Convert to PNG“. Laden Sie latex.png herunter oder kopieren Sie das Bild in die Zwischenablage, um es in PowerPoint, Google Docs, Notion oder Slack einzufügen.",
      },
    ],
    tipsHeading: "Tipps für bessere Bilder",
    tips: [
      {
        title: "Die Formel berührt den Rand",
        body: (
          <>
            Erhöhen Sie <Cmd>border=4pt</Cmd> in den Optionen der Dokumentklasse. Verwenden Sie
            inline <Cmd>$\displaystyle ...$</Cmd> statt <Cmd>\[ ... \]</Cmd>, das die ganze
            Zeilenbreite einnimmt.
          </>
        ),
      },
      {
        title: "Ein Bild für eine dunkle Folie",
        body: (
          <>
            Laden Sie <Cmd>xcolor</Cmd> und schreiben Sie <Cmd>\color{"{white}"}</Cmd> vor die Formel;
            mit transparentem Hintergrund hebt sich weißer Text von jedem dunklen Design ab.
          </>
        ),
      },
      {
        title: "Nur eine Seite wird angezeigt",
        body: "Nur die erste Seite des PDFs wird gerendert. Wandeln Sie jede Gleichung einzeln um, oder kompilieren Sie ein mehrseitiges Dokument im Online-LaTeX-Editor zu einem PDF.",
      },
    ],
    faqHeading: "FAQ: LaTeX in PNG",
    faq: [
      {
        question: "Wie wandle ich eine LaTeX-Gleichung in ein PNG-Bild um?",
        answer:
          "Setzen Sie Ihre Gleichung in ein standalone-Dokument (das Standardbeispiel verwendet \\documentclass[preview,border=4pt]{standalone}), wählen Sie eine Auflösung und klicken Sie auf „Convert to PNG“. Das LaTeX wird auf unserem Server zu einem PDF kompiliert, die erste Seite wird in Ihrem Browser gerendert, und Sie können das PNG herunterladen oder direkt in die Zwischenablage kopieren.",
      },
      {
        question: "Bekomme ich ein LaTeX-PNG mit transparentem Hintergrund?",
        answer:
          "Ja. Lassen Sie die Option „Transparent background“ aktiviert. Da die Klasse standalone keine Seitenfarbe malt, bleiben alle Pixel außerhalb der Formel transparent: Das Bild fügt sich sauber in dunkle Folien, farbige Hintergründe und Webseiten ein. Deaktivieren Sie die Option für einen deckenden weißen Hintergrund.",
      },
      {
        question: "Welche Auflösung sollte ich für Folien oder den Druck wählen?",
        answer:
          "1× (96 DPI) reicht für eine schnelle Vorschau oder eine Chatnachricht. Wählen Sie 2× (192 DPI) für Google Slides, PowerPoint, Word, Google Docs und Notion, wo das Bild auf hochauflösenden Bildschirmen etwa in natürlicher Größe erscheint. Wählen Sie 4× (384 DPI), wenn das Bild gedruckt oder vergrößert wird.",
      },
      {
        question: "Funktioniert das mit einem vollständigen LaTeX-Dokument, nicht nur mit einer Gleichung?",
        answer:
          "Ja. Jedes Dokument, das mit pdflatex kompiliert, funktioniert, auch ein Artikel, eine beamer-Präsentation oder eine TikZ-Abbildung. Nur die erste Seite wird als PNG gerendert; für ein mehrseitiges Dokument kompilieren Sie mit dem LaTeX-Vorschau-Tool das vollständige PDF und laden es herunter.",
      },
    ],
    related: (
      <>
        Brauchen Sie das ganze Dokument? Kompilieren Sie es im{" "}
        <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>, machen Sie daraus
        eine <IntroLink href="/tools/latex-to-word">Word-Datei</IntroLink>, oder schlagen Sie
        Befehle im{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          Leitfaden zu Mathematik in LaTeX
        </IntroLink>{" "}
        nach.
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Markdown online in LaTeX umwandeln",
    intro: (
      <>
        <p>
          Dieser Markdown-zu-LaTeX-Konverter macht aus .md-Text ein vollständiges, kompilierbares
          LaTeX-Dokument. Ein KI-Modell (OpenAI gpt-4o-mini) schreibt Überschriften in Abschnitte
          um, Fett- und Kursivschrift in <Cmd>\textbf</Cmd> und <Cmd>\textit</Cmd>, Aufzählungen und
          nummerierte Listen in itemize und enumerate, Tabellen in tabular, abgegrenzte Codeblöcke in
          Code-Listings und Links in Hyperlinks. Es lädt Pakete wie booktabs, listings und hyperref
          und behält Inline- und abgesetzte Mathematik als LaTeX-Mathematik bei.
        </p>
        <p>
          Der Tab „Vorschau“ kompiliert das Ergebnis mit einer vollständigen TeX-Live-Distribution
          auf dem Kompilierdienst von Octree, sodass Sie das PDF sehen, bevor Sie die .tex-Datei
          herunterladen. Die Eingabe ist eingefügter Text, und jede Umwandlung liefert etwa 2.000
          Tokens LaTeX, genug für einige Seiten; längere Dateien teilen Sie auf. Das Tool ist
          kostenlos, erfordert kein Konto und eignet sich für README-Dateien, Vorlesungsnotizen und
          Entwürfe aus Obsidian, Notion oder Typora, die zu einem Artikel oder einem Kapitel einer
          Abschlussarbeit werden sollen.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie Markdown in LaTeX um",
    steps: [
      {
        title: "Fügen Sie Ihr Markdown ein",
        body: "Ersetzen Sie das Beispiel durch Ihren eigenen .md-Inhalt: Notizen aus Obsidian oder Notion, eine README oder einen Entwurf mit Überschriften, Listen, Tabellen, Codeblöcken und Mathematik.",
      },
      {
        title: "Starten Sie die Umwandlung in LaTeX",
        body: (
          <>
            Klicken Sie auf „Zu LaTeX konvertieren“. Ein vollständiges Dokument erscheint nach und
            nach im Tab „Code“, mit <Cmd>#</Cmd>-Überschriften als <Cmd>\section</Cmd>, Listen als
            itemize und enumerate und <Cmd>$...$</Cmd>- und <Cmd>$$...$$</Cmd>-Mathematik als
            LaTeX-Mathematik.
          </>
        ),
      },
      {
        title: "Vorschau ansehen und exportieren",
        body: "Öffnen Sie den Tab „Vorschau“, um das Dokument zu einem PDF zu kompilieren, und exportieren Sie dann die .tex-Datei oder das PDF, oder öffnen Sie es in Octree, um weiterzuschreiben.",
      },
    ],
    tipsHeading: "Häufige Probleme und wie Sie sie beheben",
    tips: [
      {
        title: "Undefined control sequence in der Mathematik",
        body: (
          <>
            Markdown-Mathematik wird unverändert übernommen: KaTeX-spezifische Befehle oder ein{" "}
            <Cmd>\mathbb</Cmd> ohne amssymb können daher fehlschlagen. Das Log nennt die Zeile;
            korrigieren Sie den Befehl oder ergänzen Sie das Paket.
          </>
        ),
      },
      {
        title: "Bilder erscheinen nicht",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> wird zu einer <Cmd>\includegraphics</Cmd>-Zeile, aber die
            Bilddatei wird nicht hochgeladen. Laden Sie sie in Octree hoch oder kommentieren Sie die
            Zeile aus, um zu kompilieren.
          </>
        ),
      },
      {
        title: "Lange Dokumente brechen vor dem Ende ab",
        body: "Jede Umwandlung liefert etwa 2.000 Tokens LaTeX. Wandeln Sie eine lange Datei kapitel- oder abschnittsweise um und fügen Sie die Teile dann zusammen.",
      },
    ],
    faqHeading: "FAQ: Markdown in LaTeX",
    faq: [
      {
        question: "Wie wandle ich Markdown online in LaTeX um?",
        answer:
          "Fügen Sie Ihr Markdown in den Editor auf dieser Seite ein und klicken Sie auf „Zu LaTeX konvertieren“. Das Tool gibt ein vollständiges LaTeX-Dokument mit den nötigen Paketen zurück, das Sie als PDF ansehen und als .tex-Datei herunterladen können. Weder Installation noch Konto sind nötig.",
      },
      {
        question: "Bleiben mathematische Gleichungen erhalten?",
        answer:
          "Ja. Inline-Mathematik zwischen $...$ und abgesetzte Mathematik zwischen $$...$$ bleiben als LaTeX-Mathematik erhalten, und amsmath und amssymb werden in der Präambel geladen: Für MathJax oder KaTeX geschriebene Gleichungen kompilieren daher meist ohne Änderungen.",
      },
      {
        question: "Was ist der Unterschied zu Pandoc?",
        answer:
          "Pandoc (pandoc notes.md -o notes.tex) ist ein deterministischer Kommandozeilen-Konverter, den Sie lokal installieren. Dieses Tool läuft im Browser, nutzt ein KI-Modell (OpenAI gpt-4o-mini), um das LaTeX zu schreiben, und kompiliert sofort eine PDF-Vorschau. Prüfen Sie das Ergebnis, denn die KI kann Inhalte umformulieren oder umstrukturieren.",
      },
      {
        question: "Kann ich eine .md-Datei in eine .tex-Datei umwandeln?",
        answer:
          "Öffnen Sie die .md-Datei in einem beliebigen Texteditor, kopieren Sie ihren Inhalt in den Konverter und klicken Sie auf „Zu LaTeX konvertieren“, dann laden Sie mit „Exportieren“ document.tex herunter. Die Seite akzeptiert eingefügten Text, keine Datei-Uploads.",
      },
    ],
    related: (
      <>
        Sie möchten den umgekehrten Weg? Verwenden Sie den{" "}
        <IntroLink href="/tools/latex-to-markdown">LaTeX-zu-Markdown-Konverter</IntroLink>, sehen
        Sie sich alle <IntroLink href="/tools/latex-converter">LaTeX-Konverter</IntroLink> an, oder
        lesen Sie die{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          Einführung in LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-converter": {
    heading: "LaTeX-Konverter: online in und aus LaTeX umwandeln",
    intro: (
      <>
        <p>
          Die LaTeX-Konverter von Octree decken die Formate ab, die am häufigsten in LaTeX hinein
          oder aus LaTeX heraus müssen. In LaTeX: Markdown, HTML, MathML und Mermaid-Diagramme,
          CSV-Tabellen aus Excel oder Google Sheets, PDFs, Fotos von Gleichungen, Bilder von
          Diagrammen und arXiv-Artikel. Aus LaTeX: Markdown für GitHub und Notion, Word-.docx für
          Gutachter und Einreichungsportale, PNG-Bilder für Folien und PDF über den
          Online-LaTeX-Editor.
        </p>
        <p>
          Jeder Konverter ist kostenlos, läuft im Browser und erfordert kein Konto. Die meisten
          nutzen ein KI-Modell, weil der Wechsel zwischen Formaten Urteilsvermögen erfordert;
          LaTeX-Ausgaben werden mit einer vollständigen TeX-Live-Distribution auf dem
          Kompilierdienst von Octree kompiliert, damit Sie das PDF vor dem Herunterladen prüfen
          können. arXiv zu LaTeX, LaTeX zu PNG und LaTeX zu PDF kommen ohne KI aus. Die Tabelle oben
          listet jeden Konverter mit Eingabe, Ausgabe und bestem Einsatzzweck.
        </p>
      </>
    ),
    stepsHeading: "So verwenden Sie die LaTeX-Konverter",
    steps: [
      {
        title: "Beginnen Sie mit dem, was Sie haben",
        body: "Wählen Sie die Karte, die zu Ihrer Eingabe passt: Markdown, HTML, MathML, Mermaid, eine CSV-Datei, ein PDF, ein Bild oder eine arXiv-ID, um LaTeX zu erhalten, oder ein LaTeX-Dokument, um Markdown, eine Word-Datei, ein PNG-Bild oder ein PDF zu erhalten.",
      },
      {
        title: "Einfügen oder hochladen, dann umwandeln",
        body: "Jeder Konverter öffnet sich auf seiner eigenen Seite. Fügen Sie Ihren Inhalt ein oder laden Sie Ihre Datei hoch und starten Sie die Umwandlung; KI-Konverter zeigen das Ergebnis, während es geschrieben wird.",
      },
      {
        title: "Ergebnis prüfen und exportieren",
        body: "LaTeX-Ausgaben kommen mit einer kompilierten PDF-Vorschau, damit Sie sie prüfen können, bevor Sie die .tex-Datei herunterladen. Öffnen Sie ein LaTeX-Ergebnis in Octree, um weiterzuarbeiten.",
      },
    ],
    tipsHeading: "Tipps für bessere Umwandlungen",
    tips: [
      {
        title: "Prüfen Sie die KI-Ausgabe",
        body: "KI-Konverter kommen mit unordentlichen Eingaben und ungewöhnlichen Paketen zurecht, können aber Inhalte umformulieren oder auslassen. Vergleichen Sie die Vorschau mit Ihrer Quelle, bevor Sie etwas einreichen.",
      },
      {
        title: "Wandeln Sie lange Dokumente in Teilen um",
        body: "Die Konverter für Markdown, HTML, Mermaid, CSV und LaTeX zu Markdown liefern etwa 2.000 Tokens pro Umwandlung, also einige Seiten, und LaTeX zu Word akzeptiert bis 60.000 Zeichen. Teilen Sie eine Abschlussarbeit nach Kapiteln auf.",
      },
      {
        title: "Abbildungen reisen separat",
        body: "Kein Konverter sendet Bilddateien mit dem Text. Abbildungen werden zu \\includegraphics-Zeilen, Bildlinks oder Bildunterschriften: Fügen Sie die Dateien anschließend hinzu.",
      },
    ],
    faqHeading: "FAQ zu den LaTeX-Konvertern",
    faq: [
      {
        question: "Was ist ein LaTeX-Konverter?",
        answer:
          "Ein LaTeX-Konverter übersetzt zwischen LaTeX-Quelltext und einem anderen Format. Konverter in LaTeX nehmen Markdown, HTML, MathML, Mermaid, CSV-Tabellen, PDFs oder Bilder und erzeugen .tex-Code; Konverter aus LaTeX nehmen .tex-Quelltext und erzeugen Markdown, PNG-Bilder, Word-Dokumente oder PDFs. Diese Seite versammelt alle kostenlosen Konverter von Octree in beide Richtungen.",
      },
      {
        question: "Welche Konverter nutzen KI und welche arbeiten deterministisch?",
        answer:
          "Markdown, HTML, MathML, Mermaid, Tabelle (CSV), PDF, Bild und Gleichung zu LaTeX sowie LaTeX zu Markdown nutzen ein KI-Modell. LaTeX zu Word nutzt KI für einen ersten Durchgang und baut die .docx dann deterministisch auf. arXiv zu LaTeX, LaTeX zu PNG und LaTeX zu PDF nutzen keine KI: Sie laden Ihre Eingabe unverändert herunter oder kompilieren sie.",
      },
      {
        question: "Wie wandle ich LaTeX kostenlos in Word oder PDF um?",
        answer:
          "Für Word öffnen Sie den LaTeX-zu-Word-Konverter, fügen Ihr Dokument ein und laden document.docx herunter. Für PDF öffnen Sie den Online-LaTeX-Editor, fügen Ihr Dokument ein und laden das kompilierte PDF herunter. Beide sind kostenlos und erfordern kein Konto.",
      },
      {
        question: "Ist die Dokumentgröße begrenzt?",
        answer:
          "LaTeX zu Word akzeptiert bis 60.000 Zeichen, und PDF zu LaTeX akzeptiert PDFs bis 3 MB und 20 Seiten. Die Konverter für Markdown, HTML, Mermaid, CSV und LaTeX zu Markdown liefern etwa 2.000 Tokens pro Umwandlung, also einige Seiten: Wandeln Sie lange Dokumente in Teilen um. Die kompilierbasierten Tools akzeptieren jedes Dokument, das innerhalb des Zeitlimits des Servers kompiliert.",
      },
    ],
    related: (
      <>
        Neu bei LaTeX? Lesen Sie die{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          Einführung in LaTeX
        </IntroLink>
        , bearbeiten Sie ein Dokument im{" "}
        <IntroLink href="/tools/latex-preview">Online-LaTeX-Editor</IntroLink>, oder stöbern Sie in
        der <IntroLink href="/">vollständigen Liste der LaTeX-Tools</IntroLink>.
      </>
    ),
  },

  "latex-to-markdown": {
    heading: "LaTeX online in Markdown umwandeln",
    intro: (
      <>
        <p>
          Dieser LaTeX-zu-Markdown-Konverter macht aus einem .tex-Dokument oder -Ausschnitt sauberes
          Standard-Markdown. Ein KI-Modell (OpenAI gpt-4o-mini) schreibt Abschnitte in{" "}
          <Cmd>#</Cmd>-Überschriften um, itemize und enumerate in Listen, tabular- und
          booktabs-Tabellen in Markdown-Tabellen, <Cmd>\textbf</Cmd> und <Cmd>\emph</Cmd> in Fett-
          und Kursivschrift, Code-Umgebungen in abgegrenzte Codeblöcke und <Cmd>\href</Cmd> in
          Links. Mathematik bleibt LaTeX zwischen <Cmd>$...$</Cmd> und <Cmd>$$...$$</Cmd>, das
          GitHub, Obsidian und andere KaTeX- oder MathJax-Renderer darstellen.
        </p>
        <p>
          Das Tool ist kostenlos, erfordert kein Konto und nimmt eingefügten Text an. Jede Umwandlung
          liefert etwa 2.000 Tokens Markdown: Wandeln Sie lange Artikel in Teilen um. Abbildungen
          werden nach Möglichkeit zu Bildlinks, und Zitationen werden nicht aus einer .bib-Datei
          aufgelöst; planen Sie also, sie von Hand zu korrigieren. Nutzen Sie es, um einen Artikel in
          einem Blog zu veröffentlichen, Vorlesungsnotizen in eine README zu verwandeln oder
          LaTeX-Notizen nach Notion oder Obsidian zu übertragen.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie LaTeX in Markdown um",
    steps: [
      {
        title: "Fügen Sie Ihr LaTeX ein",
        body: "Fügen Sie ein vollständiges .tex-Dokument oder nur einen Ausschnitt ein, etwa einen Abschnitt, eine Tabelle oder eine Liste. Die Präambel ist nicht nötig.",
      },
      {
        title: "Starten Sie die Umwandlung in Markdown",
        body: "Klicken Sie auf „Zu Markdown konvertieren“. Das Markdown erscheint nach und nach im Ausgabe-Editor, während es geschrieben wird.",
      },
      {
        title: "Kopieren oder herunterladen",
        body: "Kopieren Sie das Markdown aus dem Ausgabe-Editor, oder laden Sie mit „Als Markdown exportieren“ document.md für GitHub, Obsidian, Notion oder eine statische Website herunter.",
      },
    ],
    tipsHeading: "Tipps für eine saubere Umwandlung",
    tips: [
      {
        title: "Mathematik braucht einen Renderer",
        body: (
          <>
            Gleichungen bleiben als <Cmd>$...$</Cmd> und <Cmd>$$...$$</Cmd> erhalten. GitHub,
            Obsidian, Jupyter und die meisten Generatoren für statische Websites mit KaTeX oder
            MathJax stellen sie dar; einfache Markdown-Viewer zeigen das rohe LaTeX.
          </>
        ),
      },
      {
        title: "Eigene Makros",
        body: (
          <>
            Mit <Cmd>\newcommand</Cmd> definierte Befehle haben in Markdown keine Entsprechung.
            Fügen Sie ihre Definitionen in die Eingabe ein, damit der Konverter sie auflösen kann,
            und prüfen Sie das Ergebnis.
          </>
        ),
      },
      {
        title: "Abbildungen und Zitationen",
        body: (
          <>
            Abbildungen werden nach Möglichkeit zu Markdown-Bildlinks auf die ursprünglichen
            Dateinamen, und <Cmd>\cite</Cmd>-Schlüssel werden nicht aus einer .bib-Datei aufgelöst.
            Legen Sie die Bilder neben die .md-Datei und korrigieren Sie Verweise von Hand.
          </>
        ),
      },
    ],
    faqHeading: "FAQ: LaTeX in Markdown",
    faq: [
      {
        question: "Wie wandle ich LaTeX in Markdown um?",
        answer:
          "Fügen Sie Ihr LaTeX in den linken Editor ein und klicken Sie auf „Zu Markdown konvertieren“. Abschnitte werden zu #-Überschriften, itemize und enumerate zu Listen, tabular zu einer Markdown-Tabelle, \\textbf und \\emph zu Fett und Kursiv, und Code-Umgebungen zu abgegrenzten Codeblöcken. Kopieren Sie das Ergebnis oder exportieren Sie document.md.",
      },
      {
        question: "Bleiben Gleichungen erhalten?",
        answer:
          "Ja. Inline-Mathematik bleibt zwischen $...$ und abgesetzte Mathematik zwischen $$...$$ erhalten, als LaTeX geschrieben: Sie wird überall dargestellt, wo Markdown mit MathJax oder KaTeX gerendert wird, auch auf GitHub, in Obsidian und in Jupyter-Notebooks.",
      },
      {
        question: "Wie viel LaTeX kann ich umwandeln?",
        answer:
          "Es gibt keine feste Grenze für die Eingabe, aber jede Umwandlung liefert etwa 2.000 Tokens Markdown, also einige Seiten. Wandeln Sie eine Abschlussarbeit oder einen langen Artikel kapitel- oder abschnittsweise um.",
      },
      {
        question: "Ist es kostenlos, und ist es besser als Pandoc?",
        answer:
          "Es ist kostenlos und ohne Konto nutzbar. Das Tool nutzt ein KI-Modell (OpenAI gpt-4o-mini), das mit ungewöhnlichen Paketen und unordentlichem Quelltext zurechtkommt, dessen Ausgabe aber geprüft werden muss. Pandoc (pandoc paper.tex -o paper.md) ist deterministisch und für sehr lange Dokumente besser geeignet, muss aber lokal installiert werden.",
      },
    ],
    related: (
      <>
        Sie möchten den umgekehrten Weg? Verwenden Sie den{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown-zu-LaTeX-Konverter</IntroLink>,
        exportieren Sie nach <IntroLink href="/tools/latex-to-word">Word</IntroLink>, oder sehen Sie
        sich alle <IntroLink href="/tools/latex-converter">LaTeX-Konverter</IntroLink> an.
      </>
    ),
  },

  "latex-word-counter": {
    heading: "Wörter in einem LaTeX-Dokument online zählen",
    intro: (
      <p>
        Wörter in LaTeX zu zählen ist schwieriger als in einer Textverarbeitung: Eine einfache
        Wortzählung einer .tex-Datei erfasst auch Befehle wie <Cmd>\begin{"{itemize}"}</Cmd>, Labels
        und Gleichungen. Dieser kostenlose LaTeX-Wortzähler liest den Quelltext so, wie es ein
        TeX-kundiges Werkzeug tun muss, ignoriert Markup und Mathematik und liefert Ihnen die
        Wortzahl des Textes, den der Leser tatsächlich sieht.
      </p>
    ),
    stepsHeading: "So zählen Sie Wörter in LaTeX",
    steps: [
      {
        title: "Fügen Sie Ihren LaTeX-Quelltext ein",
        body: "Fügen Sie die ganze .tex-Datei samt Präambel in den Editor ein, oder nur den Abschnitt, den Sie messen möchten.",
      },
      {
        title: "Lassen Sie zählen",
        body: "Die Wortzahl aktualisiert sich beim Tippen automatisch. Ihr Quelltext läuft durch texcount, den mit TeX Live ausgelieferten Zähler, den auch Overleaf nutzt: Befehle und Markup werden daher korrekt entfernt.",
      },
      {
        title: "Lesen Sie die Aufschlüsselung",
        body: "Sehen Sie sich die Gesamtwortzahl sowie die getrennten Zahlen für Fließtext, Überschriften und Bildunterschriften an, und verwenden Sie die Zahl, die Ihre Zeitschrift, Ihr Kurs oder Ihre Hochschule verlangt.",
      },
    ],
    tipsHeading: "Was gezählt wird",
    tips: [
      {
        title: "Fließtext",
        body: "Wörter in Absätzen, Listen und Fußnoten, einschließlich Text innerhalb von Formatierungsbefehlen wie \\textbf{...} und \\emph{...}. Auf diese Hauptzahl beziehen sich die meisten Wortgrenzen.",
      },
      {
        title: "Überschriften",
        body: "Wörter in \\section-, \\subsection-, \\chapter- und ähnlichen Überschriften, getrennt gezählt, damit Sie sie ein- oder ausschließen können.",
      },
      {
        title: "Bildunterschriften",
        body: "Wörter in Abbildungs- und Tabellenbeschriftungen, die mit \\caption{...} geschrieben sind, ebenfalls getrennt gezählt.",
      },
      {
        title: "Was nicht gezählt wird",
        body: "Befehle und ihre Optionen, Labels, Querverweise und Zitierschlüssel (\\label, \\ref, \\cite), Kommentare nach % sowie Mathematik: Inline-Formeln $...$ und abgesetzte Gleichungen sind keine Wörter, sodass eine Gleichung die Summe nie aufbläht.",
      },
    ],
    faqHeading: "FAQ zur LaTeX-Wortzählung",
    faq: [
      {
        question: "Wie erhalte ich die Wortzahl eines LaTeX-Dokuments?",
        answer:
          "Fügen Sie Ihren .tex-Quelltext in den LaTeX-Wortzähler oben ein: Die Wortzahl erscheint sofort, mit getrennten Summen für Fließtext, Überschriften und Bildunterschriften. Offline führen Sie texcount auf der Kommandozeile aus: texcount -inc -total main.tex.",
      },
      {
        question: "Enthält die LaTeX-Wortzahl Gleichungen?",
        answer:
          "Nein. Inline-Mathematik wie $E = mc^2$ und abgesetzte Gleichungen werden als Formeln und nicht als Wörter behandelt: Sie werden nicht zur Wortzahl addiert.",
      },
      {
        question: "Wie verhält sich der Wortzähler zu texcount und zur Wortzählung von Overleaf?",
        answer:
          "Er führt texcount aus, das Perl-Skript, das mit TeX Live und MiKTeX ausgeliefert wird: Die Zahlen entsprechen daher texcount -total auf Ihrem Rechner. Auch die Wortzählung von Overleaf basiert auf texcount, die Summen sollten also sehr nah beieinanderliegen. Der Unterschied: Sie brauchen weder eine lokale TeX-Installation noch ein Konto.",
      },
      {
        question: "Werden Literaturverzeichnis und Kommentare mitgezählt?",
        answer:
          "Nein. Kommentare nach % werden ignoriert, und texcount überspringt das Literaturverzeichnis standardmäßig: Einträge aus \\bibliography oder einer thebibliography-Umgebung werden nicht gezählt. Auch Zitierschlüssel in \\cite{...} zählen nicht als Wörter.",
      },
    ],
    related: (
      <>
        Brauchen Sie das Dokument in einem anderen Format? Probieren Sie den{" "}
        <IntroLink href="/tools/latex-to-word">LaTeX-zu-Word-Konverter</IntroLink>, wenn Ihre
        Einreichung eine .docx verlangt, oder stöbern Sie in der{" "}
        <IntroLink href="/symbols">LaTeX-Symbolreferenz</IntroLink>.
      </>
    ),
  },

  "mathml-to-latex": {
    heading: "MathML online in LaTeX umwandeln",
    intro: (
      <>
        <p>
          Dieser MathML-zu-LaTeX-Konverter macht aus MathML-Markup LaTeX-Mathematik, die Sie in einen
          Artikel einfügen können. Fügen Sie ein <Cmd>{"<math>"}</Cmd>-Element ein: Ein KI-Modell
          (OpenAI gpt-4o-mini) schreibt den Baum in amsmath-Code um. <Cmd>{"<mfrac>"}</Cmd> wird zu{" "}
          <Cmd>\frac</Cmd>, <Cmd>{"<msqrt>"}</Cmd> zu <Cmd>\sqrt</Cmd>, <Cmd>{"<msup>"}</Cmd> und{" "}
          <Cmd>{"<msub>"}</Cmd> werden zu Hoch- und Tiefstellungen, und <Cmd>{"<mtable>"}</Cmd> wird
          zu einer Matrix oder einem ausgerichteten Block. Griechische Buchstaben und Operatoren, die
          als Unicode-Zeichen geschrieben sind, kommen meist als LaTeX-Befehle zurück.
        </p>
        <p>
          Das Ergebnis ist ein vollständiges LaTeX-Dokument, und der Tab „Vorschau“ kompiliert es mit
          einer vollständigen TeX-Live-Distribution auf dem Kompilierdienst von Octree, damit Sie
          jedes Symbol prüfen können. Der Editor hebt XML-Syntax hervor und dient damit auch als
          einfacher Online-MathML-Editor. Jede Umwandlung liefert bis zu etwa 1.500 Tokens LaTeX,
          reichlich für einige Gleichungen. Das Tool ist kostenlos und erfordert kein Konto.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie MathML in LaTeX um",
    steps: [
      {
        title: "Fügen Sie das MathML ein",
        body: (
          <>
            Fügen Sie ein <Cmd>{"<math>"}</Cmd>-Element ein, kopiert von einer Webseite, aus einem
            Word- oder MathType-Export, oder MathML aus einer EPUB- oder JATS-XML-Datei.
          </>
        ),
      },
      {
        title: "Starten Sie die Umwandlung in LaTeX",
        body: "Klicken Sie auf „Zu LaTeX konvertieren“. Die Gleichung kommt in einem vollständigen LaTeX-Dokument zurück, das amsmath und amssymb lädt.",
      },
      {
        title: "Prüfen Sie die Vorschau",
        body: "Öffnen Sie den Tab „Vorschau“, um das Dokument zu kompilieren und die gesetzte Gleichung mit dem Original zu vergleichen, und kopieren Sie dann die Mathematik, exportieren Sie die .tex-Datei oder das PDF, oder öffnen Sie es in Octree.",
      },
    ],
    tipsHeading: "Tipps zum Umwandeln von MathML",
    tips: [
      {
        title: "Kopieren Sie das ganze math-Element",
        body: (
          <>
            Nehmen Sie alles von <Cmd>{"<math>"}</Cmd> bis <Cmd>{"</math>"}</Cmd> mit. Ein Fragment,
            das mitten in einem <Cmd>{"<mrow>"}</Cmd> beginnt, kann Klammern oder Terme verlieren.
          </>
        ),
      },
      {
        title: "MathML aus Word erhalten",
        body: "Word speichert Gleichungen als OMML, nicht als MathML. Aktivieren Sie in Word für Windows unter Formeloptionen „MathML als Nur-Text in die Zwischenablage kopieren“, kopieren Sie dann die Gleichung und fügen Sie sie hier ein.",
      },
      {
        title: "Sie wollen nur die Gleichung",
        body: (
          <>
            Kopieren Sie die Zeilen zwischen <Cmd>\begin{"{document}"}</Cmd> und{" "}
            <Cmd>\end{"{document}"}</Cmd> in Ihre eigene Datei; die Präambel braucht nur{" "}
            <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "FAQ: MathML in LaTeX",
    faq: [
      {
        question: "Wie wandle ich MathML in LaTeX um?",
        answer:
          "Fügen Sie das MathML-Markup in den Editor ein und klicken Sie auf „Zu LaTeX konvertieren“. Elemente wie mfrac, msqrt, msup, msub, mover und mtable werden zu \\frac, \\sqrt, Hochstellungen, Tiefstellungen, Akzenten und Matrizen umgeschrieben, und das Ergebnis erscheint als vollständiges LaTeX-Dokument, das Sie im Tab „Vorschau“ kompilieren können.",
      },
      {
        question: "Wird Content MathML unterstützt?",
        answer:
          "Das Tool ist für Presentation MathML gedacht, das Browser, Word und MathType exportieren. Content MathML (apply, ci, cn) wird meist ebenfalls umgewandelt, da ein KI-Modell das Markup liest, prüfen Sie das Ergebnis aber in der Vorschau.",
      },
      {
        question: "Kann ich mehrere Gleichungen auf einmal umwandeln?",
        answer:
          "Ja. Fügen Sie mehrere math-Elemente hintereinander ein: Sie werden in einem Dokument umgewandelt. Jede Umwandlung liefert bis zu etwa 1.500 Tokens LaTeX, teilen Sie sehr lange Dateien daher auf.",
      },
      {
        question: "Ist der MathML-zu-LaTeX-Konverter kostenlos?",
        answer:
          "Ja, er ist kostenlos und erfordert kein Konto. Die Umwandlung nutzt OpenAI gpt-4o-mini, und die Vorschau kompiliert mit einer vollständigen TeX-Live-Distribution: So können Sie die Gleichung prüfen, bevor Sie sie verwenden.",
      },
    ],
    related: (
      <>
        Schreiben Sie Gleichungen von Hand mit dem{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          Leitfaden zu Mathematik in LaTeX
        </IntroLink>
        , wandeln Sie ein Foto einer Gleichung mit dem Tool{" "}
        <IntroLink href="/tools/math-to-latex">Mathe zu LaTeX</IntroLink> um, oder sehen Sie sich
        alle <IntroLink href="/tools/latex-converter">LaTeX-Konverter</IntroLink> an.
      </>
    ),
  },

  "mermaid-to-latex": {
    heading: "Mermaid-Diagramm in TikZ für LaTeX umwandeln",
    intro: (
      <>
        <p>
          Dieser Konverter macht aus dem Code eines Mermaid-Diagramms TikZ: So kann ein
          Flussdiagramm, das in einer Markdown-Datei, einer GitHub-README oder in Notion skizziert
          wurde, als native Vektorgrafik in einen LaTeX-Artikel gelangen. Fügen Sie die
          Mermaid-Definition ein: Ein KI-Modell (OpenAI gpt-4o-mini) schreibt jeden Knoten, jede
          Beschriftung und jeden Pfeil in ein <Cmd>tikzpicture</Cmd> um, mit expliziten Positionen,
          damit sich keine Knoten überlappen, innerhalb eines vollständigen standalone- oder
          article-Dokuments, das tikz und die nötigen Bibliotheken lädt.
        </p>
        <p>
          Der Tab „Vorschau“ kompiliert das Diagramm mit einer vollständigen TeX-Live-Distribution
          auf dem Kompilierdienst von Octree, sodass Sie das Layout prüfen können, bevor Sie die
          .tex-Datei oder das PDF exportieren. Mermaid ordnet Diagramme automatisch an, TikZ nicht:
          Große Diagramme brauchen daher eventuell Anpassungen bei den Abständen. Flussdiagramme
          liefern die besten Ergebnisse; jede Umwandlung liefert bis zu etwa 2.000 Tokens LaTeX. Das
          Tool ist kostenlos und erfordert kein Konto.
        </p>
      </>
    ),
    stepsHeading: "So wandeln Sie Mermaid in TikZ um",
    steps: [
      {
        title: "Fügen Sie den Mermaid-Code ein",
        body: (
          <>
            Fügen Sie die Diagrammdefinition ein, beginnend mit ihrem Typ wie <Cmd>graph TD</Cmd>,{" "}
            <Cmd>flowchart LR</Cmd> oder <Cmd>sequenceDiagram</Cmd>, ohne den umgebenden{" "}
            <Cmd>```mermaid</Cmd>-Block.
          </>
        ),
      },
      {
        title: "Starten Sie die Umwandlung in TikZ",
        body: "Klicken Sie auf „Zu LaTeX konvertieren“. Die KI schreibt Knoten, Beschriftungen und Pfeile in ein tikzpicture innerhalb eines vollständigen LaTeX-Dokuments um.",
      },
      {
        title: "Vorschau ansehen, anpassen und exportieren",
        body: "Öffnen Sie den Tab „Vorschau“, um das Diagramm zu einem PDF zu kompilieren. Überlappen sich Elemente, ändern Sie Abstände oder Knotenpositionen im Code, und exportieren Sie dann diagram.tex oder diagram.pdf, oder öffnen Sie es in Octree.",
      },
    ],
    tipsHeading: "Häufige Probleme und wie Sie sie beheben",
    tips: [
      {
        title: "Knoten überlappen sich",
        body: (
          <>
            Erhöhen Sie <Cmd>node distance</Cmd> in den Optionen des tikzpicture, oder ändern Sie
            die Platzierung eines Knotens, etwa <Cmd>below of=</Cmd> zu <Cmd>right of=</Cmd>. TikZ
            ordnet Graphen nicht automatisch an, wie Mermaid es tut.
          </>
        ),
      },
      {
        title: "Bibliothek nicht geladen",
        body: (
          <>
            Ein Fehler zu einer unbekannten Pfeilspitze oder Form bedeutet meist, dass ein{" "}
            <Cmd>\usetikzlibrary</Cmd> fehlt, etwa <Cmd>arrows.meta</Cmd>, <Cmd>shapes</Cmd> oder{" "}
            <Cmd>positioning</Cmd>. Ergänzen Sie es in der Präambel.
          </>
        ),
      },
      {
        title: "Fangen Sie klein an",
        body: "Flussdiagramme lassen sich am zuverlässigsten umwandeln. Große oder komplexe Diagramme wandeln Sie Teil für Teil um und setzen die tikzpictures zusammen.",
      },
    ],
    faqHeading: "FAQ: Mermaid in LaTeX",
    faq: [
      {
        question: "Wie verwende ich ein Mermaid-Diagramm in LaTeX?",
        answer:
          "LaTeX kann Mermaid nicht direkt darstellen. Fügen Sie den Mermaid-Code in diesen Konverter ein: Er schreibt das Diagramm in TikZ um, das native Zeichenpaket von LaTeX. Kopieren Sie das tikzpicture in Ihr Dokument und laden Sie das Paket tikz, oder exportieren Sie die vollständige .tex-Datei.",
      },
      {
        question: "Welche Mermaid-Diagrammtypen werden unterstützt?",
        answer:
          "Flussdiagramme und Graphen (graph und flowchart) lassen sich am zuverlässigsten umwandeln. Sequenz-, Zustands- und Klassendiagramme können ebenfalls umgewandelt werden, da ein KI-Modell den Code liest, rechnen Sie aber damit, Positionen im erzeugten TikZ anzupassen.",
      },
      {
        question: "Warum Mermaid in TikZ umwandeln, statt ein Bild zu verwenden?",
        answer:
          "Ein TikZ-Diagramm ist eine Vektorgrafik, die LaTeX selbst zeichnet: Es verwendet dieselbe Schrift wie Ihr Text, bleibt bei jeder Vergrößerung scharf und lässt sich im Quelltext bearbeiten. Ein exportiertes PNG oder SVG lässt sich nicht ändern, ohne den Umweg über Mermaid zu gehen.",
      },
      {
        question: "Ist der Mermaid-zu-LaTeX-Konverter kostenlos?",
        answer:
          "Ja, er ist kostenlos und erfordert kein Konto. Die Umwandlung nutzt OpenAI gpt-4o-mini und liefert bis zu etwa 2.000 Tokens LaTeX, und die Vorschau kompiliert mit einer vollständigen TeX-Live-Distribution.",
      },
    ],
    related: (
      <>
        Lernen Sie die Zeichenbefehle mit dem{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          TikZ-Leitfaden
        </IntroLink>
        , beschreiben Sie ein Diagramm in Worten mit dem{" "}
        <IntroLink href="/tools/tikz-generator">TikZ-Generator</IntroLink>, oder zeichnen Sie eine
        Skizze mit dem Tool <IntroLink href="/tools/image-to-tikz">Bild zu TikZ</IntroLink> nach.
      </>
    ),
  },

  "pgfplots-generator": {
    heading: "PGFPlots-Generator: pgfplots-Diagramme in LaTeX erstellen",
    intro: (
      <>
        <p>
          Dieser PGFPlots-Generator macht aus der Beschreibung eines Diagramms in Alltagssprache
          pgfplots-Code. Beschreiben Sie eine Funktion, eine Datenreihe oder einen Diagrammtyp: Ein
          KI-Modell (OpenAI GPT-5) schreibt ein vollständiges LaTeX-Dokument mit einer kommentierten{" "}
          <Cmd>tikzpicture</Cmd>- und <Cmd>axis</Cmd>-Umgebung. Funktionsgraphen und
          Liniendiagramme, Balkendiagramme, Streudiagramme, Histogramme und 3D-Flächen, mit den
          gewünschten Achsenbeschriftungen, Bereichen, Legende und Farben.
        </p>
        <p>
          Der Tab „Vorschau“ kompiliert das Diagramm mit einer vollständigen TeX-Live-Distribution
          auf dem Kompilierdienst von Octree, sodass Sie das PDF sehen, bevor Sie die .tex-Datei
          exportieren. Da LaTeX das Diagramm zeichnet, verwendet es die Schrift Ihres Dokuments und
          bleibt in jeder Größe scharf, anders als ein aus einer Tabellenkalkulation eingefügtes
          Bild. Der Generator ist kostenlos und erfordert kein Konto; der erzeugte Code gehört Ihnen
          und lässt sich frei bearbeiten, von den Achsenbeschriftungen bis zu den Plotstilen.
        </p>
      </>
    ),
    stepsHeading: "So erzeugen Sie ein pgfplots-Diagramm",
    steps: [
      {
        title: "Beschreiben Sie das Diagramm",
        body: "Geben Sie an, was dargestellt werden soll: die Funktion oder Datenpunkte, den Diagrammtyp (Linie, Balken, Streuung, Fläche, Histogramm oder 3D-Fläche), Achsenbereiche, Beschriftungen, Legende und Farben. Sie können auch eine kleine Wertetabelle einfügen.",
      },
      {
        title: "Erzeugen Sie den Code",
        body: (
          <>
            Klicken Sie auf „Plot generieren“. Die KI schreibt ein vollständiges Dokument mit{" "}
            <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> und einer kommentierten <Cmd>axis</Cmd>
            -Umgebung.
          </>
        ),
      },
      {
        title: "Vorschau ansehen und exportieren",
        body: "Öffnen Sie den Tab „Vorschau“, um das Diagramm zu einem PDF zu kompilieren. Bearbeiten Sie den Code zum Feinschliff, und exportieren Sie dann pgfplot.tex oder pgfplot.pdf, oder öffnen Sie es in Octree.",
      },
    ],
    tipsHeading: "Häufige pgfplots-Fehler und wie Sie sie beheben",
    tips: [
      {
        title: "Dimension too large",
        body: (
          <>
            Eine sehr schnell wachsende Funktion wie <Cmd>exp(x)</Cmd> über einen großen Bereich
            übersteigt die Arithmetik von TeX. Verkleinern Sie <Cmd>domain</Cmd>, ergänzen Sie{" "}
            <Cmd>restrict y to domain</Cmd> oder verwenden Sie eine logarithmische Achse.
          </>
        ),
      },
      {
        title: "Kantige Kurven",
        body: (
          <>
            Erhöhen Sie <Cmd>samples</Cmd>, zum Beispiel <Cmd>samples=200</Cmd>, für glatte Kurven.
            Halten Sie den Wert bei 3D-Diagrammen niedriger, da sie deutlich langsamer kompilieren.
          </>
        ),
      },
      {
        title: "Eigene Daten darstellen",
        body: (
          <>
            Ersetzen Sie die erzeugten Koordinaten durch Ihre Werte mit <Cmd>\addplot table</Cmd>{" "}
            oder <Cmd>\addplot coordinates</Cmd>; der Achsenstil bleibt gleich.
          </>
        ),
      },
    ],
    faqHeading: "FAQ zum PGFPlots-Generator",
    faq: [
      {
        question: "Was ist ein PGFPlots-Generator?",
        answer:
          "Er schreibt pgfplots-Code für Sie. pgfplots ist das LaTeX-Paket, das Diagramme mit TikZ zeichnet; statt seine Achsenoptionen zu lernen, beschreiben Sie das Diagramm in Alltagssprache und erhalten ein vollständiges Dokument zum Kompilieren, Bearbeiten und Einfügen in einen Artikel.",
      },
      {
        question: "Welche Diagrammtypen kann er erstellen?",
        answer:
          "Alles, was pgfplots zeichnen kann: Funktionsgraphen, Liniendiagramme, Balkendiagramme, Streudiagramme, Histogramme, Fehlerbalken, Flächendiagramme sowie 3D-Flächen und -Gitter. Beschreiben Sie Daten, Achsen und Stil, und der Code berücksichtigt sie.",
      },
      {
        question: "Wie füge ich das Diagramm in mein LaTeX-Dokument ein?",
        answer:
          "Fügen Sie \\usepackage{pgfplots} und \\pgfplotsset{compat=1.18} zu Ihrer Präambel hinzu, und kopieren Sie dann die tikzpicture-Umgebung aus dem erzeugten Code in Ihr Dokument, meist innerhalb einer figure-Umgebung mit Bildunterschrift.",
      },
      {
        question: "Ist der PGFPlots-Generator kostenlos?",
        answer:
          "Ja, er ist kostenlos und erfordert kein Konto. Der Code wird von einem KI-Modell (OpenAI GPT-5) geschrieben und mit einer vollständigen TeX-Live-Distribution kompiliert: Prüfen Sie in der Vorschau, ob er Ihrer Anfrage entspricht.",
      },
    ],
    related: (
      <>
        Lernen Sie die Achsenoptionen mit dem{" "}
        <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
          pgfplots-Leitfaden
        </IntroLink>
        , zeichnen Sie Diagramme mit dem{" "}
        <IntroLink href="/tools/tikz-generator">TikZ-Generator</IntroLink>, oder machen Sie aus
        einer CSV-Datei eine Tabelle mit dem{" "}
        <IntroLink href="/tools/table-to-latex">LaTeX-Tabellengenerator</IntroLink>.
      </>
    ),
  },
};

export default translations;
