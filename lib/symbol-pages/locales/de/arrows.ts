import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "Pfeil nach links",
    meaning: "Zeichnet einen kurzen einfachen Pfeil nach links, verwendet für Zuweisungen in Algorithmen und für rückwärts notierte Abbildungen.",
    usage: "Pseudocode schreibt Zuweisungen als x \\leftarrow x + 1, und \\gets ist ein eingebauter Alias für genau diesen Pfeil, der sich in Algorithmen natürlicher liest. In der Mathematik zeigt er manchmal eine von rechts nach links notierte Abbildung, B \\leftarrow A, oder in älteren Texten einen Grenzwert, dem man sich von rechts nähert. Arbeiten zum maschinellen Lernen verwenden ihn für Parameter-Updates, \\theta \\leftarrow \\theta - \\eta g. Er ist eine Relation, TeX setzt also breite Abstände um ihn. Für einen längeren Pfeil nehmen Sie \\longleftarrow, für einen beschrifteten das dehnbare \\xleftarrow{text}.",
  },
  "right-arrow": {
    name: "Pfeil nach rechts",
    meaning: "Zeichnet einen kurzen einfachen Pfeil nach rechts, für Funktionssignaturen, Grenzwerte und Reaktionspfeile.",
    usage: "\\rightarrow hat den kürzeren Alias \\to, die übliche Wahl in f : A \\to B und bei Grenzwerten x \\to 0. Verwenden Sie stattdessen \\mapsto, wenn Sie beschreiben, was mit einem Element geschieht, wie in x \\mapsto x^2. In der Logik ist p \\rightarrow q die materiale Implikation, zu unterscheiden vom Doppelpfeil \\Rightarrow zwischen Aussagen. Chemiker schreiben damit einfache Reaktionen, und Graphentheoretiker verwenden ihn für gerichtete Kanten u \\rightarrow v. Brauchen Sie eine Beschriftung über dem Pfeil, wächst das dehnbare \\xrightarrow{\\text{label}} passend mit.",
  },
  "up-arrow": {
    name: "Pfeil nach oben",
    meaning: "Zeichnet einen Pfeil nach oben, verwendet für monoton wachsende Grenzwerte, Spin up, Gasentwicklung und Knuths Notation.",
    usage: "Die Analysis schreibt x_n \\uparrow x für eine Folge, die monoton wachsend gegen ihren Grenzwert strebt, etwa im Satz von der monotonen Konvergenz. Die Physik verwendet ihn für Spin up, |\\uparrow\\rangle, und die Chemie kennzeichnet ein aus der Reaktion entweichendes Gas mit einem Pfeil nach oben hinter dem Produkt. Knuths Pfeilschreibweise für riesige Zahlen schreibt 3 \\uparrow\\uparrow 3 für iterierte Potenzierung. \\uparrow funktioniert auch als Begrenzer, \\big\\uparrow oder \\left\\uparrow ... \\right. erzeugen also höhere Versionen. Der Doppelpfeil \\Uparrow ist ein eigenes Symbol.",
  },
  "long-left-arrow": {
    name: "Langer Pfeil nach links",
    meaning: "Zeichnet einen langen einfachen Pfeil nach links, eine gestreckte Version von \\leftarrow für breite oder hervorgehobene Abbildungen.",
    usage: "\\longleftarrow ist ein langer Pfeil fester Länge, etwa doppelt so lang wie \\leftarrow, zusammengesetzt aus einem Minuszeichen und einer Pfeilspitze. Er ist nützlich, wenn Pfeile zwischen langen Ausdrücken stehen oder in Inline-Diagrammen exakter Sequenzen, die von rechts nach links geschrieben werden. Für Text über dem Pfeil ist das dehnbare \\xleftarrow{f} besser, weil es mit der Beschriftung wächst. Zuweisungen in Algorithmen schreibt man meist mit dem kurzen \\gets. Sein Gegenstück mit Doppelschaft ist \\Longleftarrow, die Grundlage des Symbols \\impliedby.",
  },
  "long-right-arrow": {
    name: "Langer Pfeil nach rechts",
    meaning: "Zeichnet einen langen einfachen Pfeil nach rechts, oft für Konvergenzaussagen und für Pfeile zwischen langen Ausdrücken.",
    usage: "Man verwendet \\longrightarrow, wenn ein kurzes \\to gedrängt wirkt, etwa in a_n \\longrightarrow L oder zwischen zwei langen Termen einer Reduktion. Eine Bedingung unter dem Pfeil lässt sich mit \\xrightarrow[n \\to \\infty]{} ergänzen, das sich auf die Beschriftung dehnt, oder mit \\underset{n\\to\\infty}{\\longrightarrow}. Die Chemie verwendet lange Pfeile für Reaktionen mit darüber notierten Bedingungen. Es ist ein Symbol fester Länge, anders als die dehnbaren Pfeile. Die Doppelversion ist \\Longrightarrow, die \\implies mit zusätzlichen Abständen druckt.",
  },
  "down-arrow": {
    name: "Pfeil nach unten",
    meaning: "Zeichnet einen Pfeil nach unten, verwendet für monoton fallende Grenzwerte, Spin down, Niederschläge und Big-Step-Auswertung.",
    usage: "Eine Folge, die monoton fallend gegen ihren Grenzwert strebt, schreibt man x_n \\downarrow x, und einseitige Grenzwerte erscheinen als t \\downarrow 0. Physiker schreiben Spin down als |\\downarrow\\rangle, und Chemiker setzen einen Pfeil hinter einen festen Niederschlag. In der Domänentheorie und der Semantik von Programmiersprachen bedeutet e\\downarrow, dass eine Berechnung terminiert. Wie \\uparrow ist es ein Begrenzer, \\Big\\downarrow ergibt also einen höheren Pfeil, praktisch für skizzierte vertikale Diagramme. Die Version mit Doppelschaft ist \\Downarrow. Manche Texte zu Topologie und Ordnungstheorie schreiben außerdem {\\downarrow}x für die Abwärtsmenge eines Elements.",
  },
  "left-arrow-double": {
    name: "Doppelpfeil nach links",
    meaning: "Zeichnet einen kurzen Doppelpfeil nach links, gelesen „folgt aus“, oder kennzeichnet die Rückrichtung eines Beweises.",
    usage: "In Beweisen einer Äquivalenz bezeichnen Autoren die beiden Richtungen mit (\\Rightarrow) und (\\Leftarrow), wobei Letztere die Umkehrung beweist. Zwischen Formeln bedeutet A \\Leftarrow B, dass B A impliziert. Für eine lange Version mit Abständen zwischen ganzen Aussagen liefert \\impliedby ein \\Longleftarrow mit zusätzlichem Abstand, spiegelbildlich zu \\implies. Achten Sie darauf, \\Leftarrow beim schnellen Lesen nicht mit \\leq zu verwechseln, da manche Leser die Form falsch deuten. Logiktexte formen meist so um, dass ein Rechtspfeil entsteht, reservieren Sie \\Leftarrow also für Rückrichtungen.",
    example: "(\\Leftarrow)\\ \\text{Angenommen, } n^2 \\text{ ist gerade. Dann ist } n \\text{ gerade.}",
  },
  "right-arrow-double": {
    name: "Doppelpfeil nach rechts",
    meaning: "Zeichnet einen kurzen Doppelpfeil nach rechts, das übliche Implikationszeichen zwischen Formeln.",
    usage: "\\Rightarrow besagt, dass eine Formel eine andere impliziert, wie in p \\Rightarrow q, und bezeichnet in Äquivalenzbeweisen die Hinrichtung (\\Rightarrow). \\implies druckt das längere \\Longrightarrow mit zusätzlichen breiten Abständen und passt zu Implikationen zwischen vollständigen Aussagen. Die Wahrscheinlichkeitstheorie schreibt die schwache Konvergenz von Verteilungen als X_n \\Rightarrow X, und Termersetzungssysteme verwenden es für einen Reduktionsschritt. Die Boolesche Algebra verwendet es für das Konditional. Ziehen Sie es dem einfachen Pfeil \\to vor, wenn die Objekte Aussagen und nicht Mengen oder Funktionen sind.",
  },
  "up-arrow-double": {
    name: "Doppelpfeil nach oben",
    meaning: "Zeichnet einen Doppelpfeil nach oben, ein seltenes Symbol, das auch als dehnbarer Begrenzer dienen kann.",
    usage: "\\Uparrow hat in der Mathematik keine einheitliche Standardbedeutung. Es taucht gelegentlich in Diagrammen auf, in manchen Texten zu Logik und Beweistheorie und in der Physik für einen stark polarisierten Zustand. Da es ein Begrenzer ist, skalieren \\Big\\Uparrow und \\left\\Uparrow ... \\right. es vertikal. Wenn Sie nur eine Richtung nach oben brauchen, ist \\uparrow die übliche Wahl. Verwenden Sie \\Uparrow für eine eigene Relation, definieren Sie es im Text bei seinem ersten Auftreten, damit die Leser nicht raten müssen.",
  },
  "long-left-arrow-double": {
    name: "Langer Doppelpfeil nach links",
    meaning: "Zeichnet einen langen Doppelpfeil nach links; mit zusätzlichen Abständen ist er das Zeichen für „folgt aus“.",
    usage: "\\Longleftarrow ist die Glyphe hinter \\impliedby, das auf beiden Seiten breite Abstände ergänzt, für den Einsatz zwischen ganzen Aussagen. Verwenden Sie \\Longleftarrow direkt, wenn Sie den langen Pfeil ohne diese Polsterung wollen, etwa in einer engen Kette in einer Tabelle. In Beweisen kann es die Rückrichtung einleiten, (\\Longleftarrow). Sein nach rechts zeigender Zwilling \\Longrightarrow liegt \\implies zugrunde, und das zweiköpfige \\Longleftrightarrow liegt \\iff zugrunde. Mischen Sie in einem Beweis nicht kurze und lange Formen. Rückwärtspfeile lesen sich am besten, wenn die stärkere Voraussetzung rechts steht.",
  },
  "long-right-arrow-double": {
    name: "Langer Doppelpfeil nach rechts",
    meaning: "Zeichnet einen langen Doppelpfeil nach rechts; mit Abständen aufgefüllt wird er zum Zeichen \\implies.",
    usage: "\\Longrightarrow ist die nackte Glyphe, die \\implies verwendet, ohne die zusätzlichen breiten Abstände. Wählen Sie \\Longrightarrow, wenn Sie eine Implikation auf engem Raum brauchen, etwa in einem Index, einer Matrixzelle oder einer schmalen Tabelle, und \\implies zwischen ganzen Teilsätzen in abgesetzten Formeln. Es wird auch für mehrschrittige Reduktionen in Termersetzungssystemen und in manchen Wahrscheinlichkeitstexten für Konvergenz verwendet. Die kurze Version \\Rightarrow eignet sich besser zwischen kurzen Formeln. Die Umkehrung schreiben Sie mit \\Longleftarrow. Richten Sie in einer Folge abgesetzter Schritte die Pfeile mit der align-Umgebung aus, damit jeder Schritt in derselben Spalte beginnt.",
    example: "a \\mid b \\text{ und } b \\mid c \\Longrightarrow a \\mid c",
  },
  "down-arrow-double": {
    name: "Doppelpfeil nach unten",
    meaning: "Zeichnet einen Doppelpfeil nach unten, verwendet für die Big-Step-Auswertung in der Semantik von Programmiersprachen.",
    usage: "Die operationale Semantik schreibt e \\Downarrow v im Big-Step-Stil dafür, dass der Ausdruck e zum Wert v ausgewertet wird; das ist die wichtigste fachliche Verwendung dieses Symbols. In Diagrammen und logischen Beweisen kann es einen vertikalen Schlussschritt markieren. Wie die anderen vertikalen Pfeile ist \\Downarrow ein Begrenzer, \\Big\\Downarrow erzeugt also eine höhere Version. Verwechseln Sie es nicht mit \\downarrow, das in derselben Semantik Terminierung bedeuten kann. Legen Sie Ihre Konvention bei der Einführung des Urteils fest. Die Small-Step-Semantik verwendet dagegen \\to oder \\longrightarrow für einzelne Reduktionsschritte und \\to^* für deren reflexiv-transitive Hülle.",
  },
  "left-right-arrow": {
    name: "Pfeil nach links und rechts",
    meaning: "Zeichnet einen kurzen Pfeil mit zwei Spitzen, für Zuordnungen, das Bikonditional und Resonanzstrukturen.",
    usage: "Die Logik verwendet p \\leftrightarrow q für den Bikonditional-Junktor innerhalb von Formeln, während \\Leftrightarrow und \\iff zwischen ganzen Aussagen gebräuchlicher sind. In der Kombinatorik beschreibt er eine bijektive Zuordnung zwischen Objekten, und die Chemie setzt ihn zwischen Resonanzstrukturen, nicht für Gleichgewichte, die \\rightleftharpoons verwenden. Die Graphentheorie kann ihn für ungerichtete oder in beide Richtungen gerichtete Kanten nutzen. Er ist eine Relation und erhält breite Abstände. Für eine längere Version verwenden Sie \\longleftrightarrow. Bei Wahrheitstafeln entspricht er XNOR: wahr genau dann, wenn beide Seiten übereinstimmen.",
  },
  "long-left-right-arrow": {
    name: "Langer Pfeil nach links und rechts",
    meaning: "Zeichnet einen langen einfachen Pfeil mit zwei Spitzen, ein gestrecktes \\leftrightarrow für Zuordnungen zwischen langen Ausdrücken.",
    usage: "\\longleftrightarrow passt zu einer Zuordnung zwischen zwei langen Objekten, etwa einer Bijektion zwischen Teilmengen und Binärwörtern, bei der der kurze Pfeil verloren wirkt. Es ist ein Symbol fester Länge, Beschriftungen brauchen also \\overset oder eine gestapelte Konstruktion. Beachten Sie, dass \\iff aus dem Doppelpfeil \\Longleftrightarrow gebaut ist und nicht aus dieser einfachen Version; verwenden Sie \\longleftrightarrow also nicht für die logische Äquivalenz in Beweisen. Die Physik verwendet ihn für eine Dualität zwischen zwei Theorien. Die zusätzliche Länge hilft auch, wenn über dem Pfeil gestapelter Text steht.",
  },
  "up-down-arrow": {
    name: "Pfeil nach oben und unten",
    meaning: "Zeichnet einen senkrechten Pfeil mit zwei Spitzen, meist als skalierbarer Begrenzer oder in Diagrammen verwendet.",
    usage: "\\updownarrow zeigt nach oben und nach unten und eignet sich daher in vertikalen Diagrammen, um eine wechselseitige Beziehung zwischen Zeilen darzustellen. Als Begrenzer lässt er sich mit \\big, \\Big oder \\left und \\right vergrößern. In der Physik zeigt er gelegentlich eine Überlagerung von Spinzuständen oder eine vertikale Schwingung an. Seine Variante mit Doppelschaft ist \\Updownarrow. Zeichnen Sie ein vollständiges kommutatives Diagramm, richtet eine spezielle Diagrammumgebung vertikale Pfeile besser aus, als wenn Sie \\updownarrow von Hand platzieren. In modernen Fachartikeln wird er selten gebraucht, in Vorlesungsskripten ist er aber nützlich.",
  },
  "left-right-arrow-double": {
    name: "Doppelpfeil nach links und rechts",
    meaning: "Zeichnet einen kurzen Doppelpfeil mit zwei Spitzen für die logische Äquivalenz zwischen Formeln.",
    usage: "\\Leftrightarrow besagt, dass zwei Formeln einander implizieren, wie in A \\Leftrightarrow B. Für die Äquivalenz zwischen ganzen Aussagen in abgesetzten Formeln liefert \\iff das längere \\Longleftrightarrow mit zusätzlichen Abständen. Die Boolesche Algebra verwendet es für XNOR oder das Bikonditional. In Ketten äquivalenter Gleichungen ist eine mit align ausgerichtete Spalte von \\Leftrightarrow ein verbreitetes Muster in Lösungsheften. Verwechseln Sie es nicht mit \\equiv, das Identität oder Kongruenz ausdrückt und nicht logische Äquivalenz. Schreiben Sie es nur, wenn jeder Schritt wirklich umkehrbar ist; das Quadrieren beider Seiten zum Beispiel zerstört die Äquivalenz.",
  },
  "long-left-right-arrow-double": {
    name: "Langer Doppelpfeil nach links und rechts",
    meaning: "Zeichnet einen langen Doppelpfeil mit zwei Spitzen, dieselbe Glyphe, die \\iff verwendet.",
    usage: "\\Longleftrightarrow druckt denselben Pfeil wie \\iff, aber ohne die zusätzlichen breiten Abstände, die \\iff hinzufügt. Damit ist es die bessere Wahl in Indizes, Tabellen oder engem Fließtext, während \\iff sich in abgesetzten Sätzen besser liest. Es erscheint auch in Beweisen, in denen beide Richtungen zusammen begründet werden. Zwischen kurzen Formeln ist das kurze \\Leftrightarrow vorzuziehen. Bleiben Sie im gesamten Dokument bei einer Wahl, besonders in Formulierungen von Sätzen. Es dient auch in Ketten umkehrbarer algebraischer Umformungen, die in einer align-Umgebung ausgerichtet sind, wo die zusätzliche Länge lange Gleichungen optisch trennt. Wie die anderen Pfeile ist es eine Relation, TeX gibt ihm also auf beiden Seiten breite Abstände.",
    example: "A \\text{ invertierbar} \\Longleftrightarrow \\det A \\neq 0",
  },
  "up-down-arrow-double": {
    name: "Doppelpfeil nach oben und unten",
    meaning: "Zeichnet einen senkrechten Doppelpfeil mit zwei Spitzen, ein als Begrenzer nutzbares Symbol für vertikale Äquivalenz.",
    usage: "\\Updownarrow wird vor allem in vertikalen Anordnungen verwendet, etwa bei zwei übereinander stehenden äquivalenten Aussagen in einem array, wo es die Rolle eines auf die Seite gedrehten \\Leftrightarrow spielt. Es ist ein Begrenzer, die Versionen \\Big\\Updownarrow und \\left ... \\right wachsen also vertikal. Außerhalb solcher Diagramme hat es keine weit verbreitete Bedeutung. Brauchen Sie eine Version mit einfachem Schaft, verwenden Sie \\updownarrow. Ein schlichtes array mit zentrierter Spalte hält die Aussagen und den Pfeil ausgerichtet. Auf Vorlesungsfolien kann es auch zeigen, dass zwei übereinanderstehende Definitionen austauschbar sind. Kombinieren Sie es mit \\Leftrightarrow, wenn dieselbe Äquivalenz anderswo auch waagerecht auftritt.",
    example: "\\begin{array}{c} A \\text{ gilt} \\\\ \\Updownarrow \\\\ B \\text{ gilt} \\end{array}",
  },
  "maps-to": {
    name: "Abbildungspfeil",
    meaning: "Zeichnet einen Pfeil mit Querstrich, der zeigt, wohin eine Funktion ein einzelnes Element abbildet, wie in x ↦ x².",
    usage: "Verwenden Sie \\mapsto für Elemente und \\to für Mengen: f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 gibt Definitionsbereich, Zielbereich und Vorschrift zusammen an. Arbeiten zum Lambda-Kalkül und zur funktionalen Programmierung verwenden ihn für anonyme Funktionen, und in der Semantik schreibt man Substitutionen oder Umgebungsänderungen als [x \\mapsto v]. Er unterscheidet sich von \\to nur durch den kleinen Querstrich am Ende, achten Sie also darauf, dass er auch in kleinen Größen deutlich dargestellt wird. Für lange Ausdrücke verwenden Sie \\longmapsto. In kommutativen Diagrammen werden Pfeile auf Elementebene ebenfalls mit einem solchen Querstrich gezeichnet.",
  },
  "long-maps-to": {
    name: "Langer Abbildungspfeil",
    meaning: "Zeichnet einen langen Pfeil mit Querstrich, der ein Element auf sein Bild abbildet, für breitere Ausdrücke als bei \\mapsto.",
    usage: "\\longmapsto bietet mehr Platz, wenn Eingabe oder Ausgabe lang ist, wie in (x, y) \\longmapsto x^2 + y^2, oder wenn die Elementvorschrift mit einem \\longrightarrow darüber fluchten soll. Er wird genauso gelesen wie \\mapsto und sollte mit \\to oder \\longrightarrow in der Zeile kombiniert werden, die Definitions- und Zielbereich angibt. Wegen der festen Länge braucht eine Beschriftung darüber weiterhin \\overset. Konsequent in abgesetzten Funktionsdefinitionen eingesetzt, ergibt er ein sauberes zweizeiliges Erscheinungsbild.",
  },
  "northeast-arrow": {
    name: "Pfeil nach rechts oben",
    meaning: "Zeichnet einen diagonalen Pfeil nach rechts oben, für steigende Tendenzen und Diagrammkanten.",
    usage: "\\nearrow wird oft informell für „wächst monoton gegen“ verwendet, wie in a_n \\nearrow a, das diagonale Gegenstück zu \\uparrow. Er verbindet auch Einträge in von Hand gebauten Diagrammen, Matrixdarstellungen und Skizzen im Stil von Hasse-Diagrammen. Mit \\searrow, \\swarrow und \\nwarrow bildet er einen vollständigen Satz diagonaler Pfeile. Diese dehnen sich nicht, für lange diagonale Pfeile eignet sich also ein Diagrammwerkzeug besser. In Notizen zu Wirtschaft und Datenanalyse kann er in einer Tabellenzelle einen steigenden Trend zusammenfassen. Definieren Sie die Bedeutung einmal, denn es handelt sich um eine Schreibweise und nicht um ein formales Symbol.",
  },
  "hook-left-arrow": {
    name: "Hakenpfeil nach links",
    meaning: "Zeichnet einen Pfeil nach links mit einem Haken am Ende, die gespiegelte Form des Inklusionspfeils.",
    usage: "\\hookleftarrow spiegelt \\hookrightarrow und wird verwendet, wenn eine Inklusion oder Injektion von rechts nach links gezeichnet wird, etwa in einer rückwärts geschriebenen exakten Sequenz oder in einem Diagramm, in dem das Ziel links steht. Ansonsten ist er selten. In Tastaturdokumentationen steht eine ähnliche Glyphe für die Eingabetaste, das ist aber eine andere Bedeutung. Zeigen Ihre Pfeile überwiegend nach rechts, ist es oft klarer, die Aussage mit \\hookrightarrow umzuformulieren. Er hat Relationsabstände wie die anderen Pfeile. Seine Länge entspricht der von \\hookrightarrow, gespiegelte Diagramme bleiben also ausgewogen. Brauchen Sie viele solcher Pfeile, behandelt eine spezielle Diagrammumgebung die Haken automatisch.",
  },
  "hook-right-arrow": {
    name: "Hakenpfeil nach rechts",
    meaning: "Zeichnet einen Pfeil nach rechts mit Haken am Ende, das Standardsymbol für eine injektive Abbildung, Inklusion oder Einbettung.",
    usage: "Schreibt man \\iota : A \\hookrightarrow X, weiß der Leser, dass die Abbildung eine Inklusion oder Injektion ist, ohne dass man es in Worten sagen muss. Die Analysis verwendet ihn für stetige Einbettungen von Funktionenräumen, wie in H^1(\\Omega) \\hookrightarrow L^2(\\Omega), und kompakte Einbettungen werden manchmal mit einer weiteren Verzierung gekennzeichnet. Die Kategorientheorie verwendet ihn für Monomorphismen. Das surjektive Gegenstück ist \\twoheadrightarrow. Durch den Haken ist der Pfeil länger als \\to, prüfen Sie also die Ausrichtung in Diagrammen. Er ist eine Relation, TeX umgibt ihn also mit breiten Abständen.",
  },
  "southeast-arrow": {
    name: "Pfeil nach rechts unten",
    meaning: "Zeichnet einen diagonalen Pfeil nach rechts unten, für fallende Tendenzen und Diagrammkanten.",
    usage: "\\searrow kürzt oft „fällt monoton gegen“ ab, wie in \\varepsilon_n \\searrow 0 für eine monoton fallende Folge. Er ergänzt \\nearrow, \\swarrow und \\nwarrow in informellen Diagrammen, etwa einem 2-mal-2-Raster von Objekten. Physiker verwenden ihn in Skizzen von Energieniveaus oder Zerfallsketten. Die Pfeile haben eine feste Größe und eignen sich daher eher für schnellen Einsatz im Text als für ausgefeilte Diagramme. Der Name steht für „southeast“ (Südosten), nicht für „search“. Wer ihn nicht kennt, erwartet vielleicht ein Suchsymbol, eine kurze Definition hilft also. In Tabellen, die das Monotonieverhalten zusammenfassen, ergeben \\nearrow und \\searrow eine kompakte visuelle Darstellung.",
  },
  "left-harpoon-up": {
    name: "Harpune nach links, Widerhaken oben",
    meaning: "Zeichnet eine nach links zeigende Harpune mit dem Widerhaken oben, eine halbe nach links zeigende Pfeilspitze.",
    usage: "\\leftharpoonup dient vor allem als Baustein oder in spezieller Notation. Manche Physiktexte setzen eine Harpune über Vektoren, und \\rightharpoonup über \\leftharpoondown gestapelt ergibt Gleichgewichtspfeile, auch wenn es \\rightleftharpoons bereits gibt. Sie kann auch in Reaktionsschemata auftauchen. Da Harpunen in kleinen Größen ähnlich aussehen, wählen Sie die Seite des Widerhakens bewusst und bleiben Sie konsequent. In den meisten Dokumenten erscheint sie eher innerhalb anderer Konstruktionen als allein. Ihre Verwandten sind \\rightharpoonup, \\leftharpoondown und \\rightharpoondown, die sich nur in Richtung und Seite des Widerhakens unterscheiden. Wie andere Pfeile erhält sie Relationsabstände.",
  },
  "right-harpoon-up": {
    name: "Harpune nach rechts, Widerhaken oben",
    meaning: "Zeichnet eine nach rechts zeigende Harpune mit dem Widerhaken oben, das übliche Zeichen für schwache Konvergenz.",
    usage: "Die Funktionalanalysis schreibt u_n \\rightharpoonup u für schwache Konvergenz und unterscheidet sie so von der starken Konvergenz u_n \\to u. Schwach-*-Konvergenz schreibt man oft \\overset{*}{\\rightharpoonup}. Die Physik verwendet gelegentlich eine Harpune nach rechts als Vektorakzent. Sie bildet außerdem die obere Hälfte des Gleichgewichtssymbols \\rightleftharpoons in der Chemie. Halten Sie \\rightharpoonup von \\rightharpoondown getrennt, dessen Widerhaken unten sitzt, da Leser sie als verschiedene Notationen auffassen können. In KaTeX und LaTeX hat die Glyphe Relationsabstände, u_n \\rightharpoonup u wird also wie ein Gleichheitszeichen gesetzt. Nennen Sie beim Schreiben den Raum, in dem die Konvergenz schwach ist, wie im Beispiel.",
  },
  "southwest-arrow": {
    name: "Pfeil nach links unten",
    meaning: "Zeichnet einen diagonalen Pfeil nach links unten, vor allem für Diagramme und Ablaufskizzen.",
    usage: "\\swarrow zeigt einen Schritt nach links unten, etwa in einem von Hand gezeichneten Raster von Objekten oder zur Veranschaulichung, wie sich die Terme in einer Matrixdeterminante zusammensetzen. Zusammen mit \\nearrow, \\searrow und \\nwarrow deckt er die vier Diagonalen ab. Er dehnt sich nicht, lange diagonale Pfeile brauchen also ein Diagrammwerkzeug. Gelegentlich markiert er einen Trend in einer Tabelle, doch für fallende Werte ist \\searrow gebräuchlicher. Kombinieren Sie ihn in arrays mit \\quad-Abständen, um ihn richtig zu positionieren.",
  },
  "left-harpoon-down": {
    name: "Harpune nach links, Widerhaken unten",
    meaning: "Zeichnet eine nach links zeigende Harpune mit dem Widerhaken unten, die untere Hälfte einer geteilten Pfeilspitze.",
    usage: "\\leftharpoondown ist die untere Hälfte des Gleichgewichtssymbols \\rightleftharpoons, in dem sie unter \\rightharpoonup steht. Allein erscheint sie selten, etwa in manchen Reaktionsschemata oder als umgekehrtes Zeichen für schwache Konvergenz. Wenn Sie einen Gleichgewichtspfeil wollen, verwenden Sie direkt \\rightleftharpoons, statt Harpunen von Hand zu stapeln. Beachten Sie, dass Harpunen sich von \\leftarrow unterscheiden und nicht leichtfertig ausgetauscht werden sollten. Sie hat Relationsabstände wie gewöhnliche Pfeile. Ihre Geschwister sind \\leftharpoonup, \\rightharpoonup und \\rightharpoondown. In den meisten Arbeiten werden Sie sie gar nicht brauchen, da ein gewöhnlicher Pfeil dasselbe klarer ausdrückt.",
  },
  "right-harpoon-down": {
    name: "Harpune nach rechts, Widerhaken unten",
    meaning: "Zeichnet eine nach rechts zeigende Harpune mit dem Widerhaken unten, eine Variante des halben Pfeils mit unterem Widerhaken.",
    usage: "\\rightharpoondown ist in der Lage des Widerhakens das Spiegelbild von \\rightharpoonup und erscheint in manchen Gleichgewichtsnotationen und als Vektorakzent. Da \\rightharpoonup das etablierte Symbol für schwache Konvergenz ist, würde es die Leser verwirren, \\rightharpoondown dafür zu verwenden. Manchmal wird sie mit \\leftharpoonup in \\leftrightharpoons kombiniert, der umgekehrten Gleichgewichtsanordnung. Wie bei allen Harpunen sollten Sie prüfen, dass der Widerhaken im fertigen PDF bei der gewählten Schriftgröße sichtbar ist. Ihre Geschwister \\leftharpoonup und \\leftharpoondown vervollständigen den Satz der vier Harpunen. Wie andere Pfeile erhält sie Relationsabstände.",
  },
  "northwest-arrow": {
    name: "Pfeil nach links oben",
    meaning: "Zeichnet einen diagonalen Pfeil nach links oben, vor allem in Diagrammen und Veranschaulichungen verwendet.",
    usage: "\\nwarrow ist der seltenste der vier diagonalen Pfeile. Er erscheint in von Hand gebauten arrays, die zeigen, wie Einträge zusammenhängen, etwa bei den Abhängigkeiten in einer Tabelle der dynamischen Programmierung, in der eine Zelle von ihrem linken oberen Nachbarn abhängt. Zusammen mit \\nearrow, \\searrow und \\swarrow lassen sich kleine Diagramme ohne Zeichenpaket skizzieren. Für ausgefeilte kommutative Diagramme liefert eine spezielle Diagrammumgebung passende Pfeillängen und Beschriftungen. Seine feste Größe und die Relationsabstände machen ihn praktisch in arrays und Tabellen. Liest man die vier diagonalen Pfeile als Himmelsrichtungen (northeast, southeast, southwest, northwest, also Nordost, Südost, Südwest, Nordwest), merkt man sich die Namen leichter.",
  },
};

export default text;
