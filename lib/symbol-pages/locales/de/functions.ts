import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  "function": {
    name: "Funktion",
    meaning: "Funktion f, angewendet auf ein Argument x; die grundlegende Schreibweise für einen Funktionswert.",
    usage: "Einbuchstabige Namen wie f, g und h werden kursiv gesetzt, was für Symbole, die Funktionen bezeichnen, korrekt ist. Mehrbuchstabige benannte Funktionen sind anders: Schreiben Sie \\sin x oder \\log x, und für eigene Namen \\operatorname{softmax}(z), damit sie aufrecht erscheinen statt als Produkt kursiver Buchstaben. In der Optimierung ist f(x) oft die Zielfunktion, etwa in \\min_x f(x) unter Nebenbedingungen. Ist das Argument hoch, passen \\left( \\right) oder \\bigl( \\bigr) die Klammergröße an. Für vektorielle Argumente ist f(\\mathbf{x}) mit fettem x üblich.",
  },
  "function-definition": {
    name: "Funktionsdefinition",
    meaning: "Erklärt f zu einer Funktion vom Definitionsbereich A in die Zielmenge B.",
    usage: "Diese Signaturzeile eröffnet die meisten Definitionen in Analysis und Algebra, oft gefolgt von der elementweisen Vorschrift x \\mapsto x^2. Ein bloßer Doppelpunkt erhält beidseitig Relationsabstand und wirkt zu breit; \\colon liefert den korrekten, engen Abstand eines Satzzeichens, f\\colon A \\to B. \\to und \\rightarrow erzeugen denselben Pfeil; \\longrightarrow setzt in abgesetzten Formeln einen stärkeren Akzent. Kombinieren Sie es mit \\mapsto für die elementweise Vorschrift: f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2. Diagramme mit mehreren Abbildungen zwischen mehreren Objekten zeichnet man besser mit einer eigenen Umgebung für kommutative Diagramme.",
  },
  "composition": {
    name: "Verkettung (Komposition)",
    meaning: "Verkettung von f mit g: Zuerst wird g angewendet, dann f auf das Ergebnis.",
    usage: "Die Verkettung wird von rechts nach links gelesen: (f \\circ g)(x) = f(g(x)); sie ist assoziativ, aber meist nicht kommutativ. \\circ ist ein binärer Operator, der Abstand ergibt sich also automatisch. Verwenden Sie kein \\circ auf der Grundlinie für Grad, dafür braucht man ^{\\circ}, und verwechseln Sie es nicht mit \\cdot oder \\bullet, die eine Multiplikation nahelegen. Wiederholte Verkettung schreibt man oft f^{\\circ n}, um Verwechslungen mit Potenzen f^n zu vermeiden. Die klassische Formel dazu ist die Kettenregel: (f \\circ g)'(x) = f'(g(x))\\,g'(x), mit der inneren Ableitung rechts.",
  },
  "inverse-function": {
    name: "Umkehrfunktion",
    meaning: "Umkehrfunktion von f, die Abbildung, die f rückgängig macht, sodass f^{-1}(f(x)) = x.",
    usage: "Nur Bijektionen besitzen eine Umkehrfunktion auf der ganzen Zielmenge, doch f^{-1}(B) bezeichnet auch das Urbild einer Menge B unter einer beliebigen Funktion; das ist ein anderer Begriff, der keine Umkehrbarkeit voraussetzt. Der Exponent -1 bedeutet nicht den Kehrwert: f^{-1}(x) ist etwas anderes als 1/f(x), eine häufige Verwechslung bei Studierenden, die auch \\sin^{-1} betrifft. Geschweifte Klammern sind nötig, weil -1 aus zwei Token besteht. Der Satz über die Umkehrfunktion liefert die Ableitung (f^{-1})'(y) = 1/f'(x) mit y = f(x), vorausgesetzt f'(x) \\neq 0.",
  },
  "image": {
    name: "Bild einer Funktion",
    meaning: "Bild von f, die Menge aller Werte, die f tatsächlich annimmt, geschrieben mit aufrechtem „Im“.",
    usage: "In der linearen Algebra ist \\text{Im}(T) der Spaltenraum der Abbildung, und der Rangsatz lautet \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V. Beachten Sie, dass \\Im ein anderer Befehl ist: Er liefert ein Fraktur-I für den Imaginärteil einer komplexen Zahl. Viele Autoren schreiben klein \\operatorname{im} oder deklarieren \\DeclareMathOperator{\\im}{im}, was korrekte Abstände liefert und nicht wie \\text die Kursivschrift von Satzumgebungen übernimmt. Die Mengenschreibweise f(A) ist eine Alternative, wenn das Bild einer bestimmten Teilmenge statt des ganzen Definitionsbereichs gemeint ist.",
  },
  "kernel": {
    name: "Kern",
    meaning: "Kern von f: alles, was f auf null abbildet, ein Untervektorraum bzw. ein Normalteiler.",
    usage: "\\ker ist ein vordefinierter Operator und erscheint daher aufrecht mit dem richtigen Abstand: \\ker T = \\{v \\in V \\mid T(v) = 0\\}. Ein Homomorphismus ist genau dann injektiv, wenn sein Kern trivial ist, und der Homomorphiesatz besagt G/\\ker\\varphi \\cong \\operatorname{im}\\varphi. Bei einem einzelnen Symbol sind Klammern optional, \\ker A. In der linearen Algebra heißt der Kern auch Nullraum, manchmal geschrieben N(A) oder \\operatorname{null}(A). Für das Bild gibt es keinen eingebauten Gegenoperator, deklarieren Sie also \\im oder verwenden Sie \\operatorname{im}.",
  },
  "domain": {
    name: "Definitionsbereich",
    meaning: "Definitionsbereich von f, die Menge der Eingaben, für die die Funktion definiert ist.",
    usage: "Die konvexe Analysis nutzt ihn intensiv: \\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} ist der effektive Definitionsbereich einer konvexen Funktion mit Werten in den erweiterten reellen Zahlen. \\text{dom} erscheint aufrecht, kann aber in einer Satzumgebung kursiv werden und hat keinen Operatorabstand; \\operatorname{dom} vermeidet beide Probleme. In einer Signatur f\\colon A \\to B ist A bereits der Definitionsbereich, daher ist \\text{dom}(f) vor allem nützlich, wenn der Definitionsbereich implizit oder partiell ist, wie bei unbeschränkten Operatoren auf Hilberträumen. Manche Texte schreiben stattdessen D(f) oder D_f; richten Sie sich nach der Konvention Ihres Fachgebiets.",
  },
  "codomain": {
    name: "Zielmenge",
    meaning: "Zielmenge von f, die für die Funktionswerte festgelegte Menge.",
    usage: "In f\\colon A \\to B ist B die Zielmenge, die größer sein kann als das Bild; f ist genau dann surjektiv, wenn \\text{Im}(f) = \\text{cod}(f). Die Kategorientheorie schreibt \\operatorname{cod} f neben \\operatorname{dom} f für Ziel und Quelle eines Morphismus. Wie bei anderen textbasierten Bezeichnungen liefert \\operatorname{cod} besseren Abstand und verhindert, dass in Satzaussagen Kursivschrift durchschlägt. Manche Autoren schreiben der Deutlichkeit halber \\operatorname{codom} aus. Die Unterscheidung zwischen Zielmenge und Wertebereich ist wichtig, weil manche Bücher mit dem Wort Wertebereich die Zielmenge meinen und andere das Bild.",
    example: "f \\text{ ist surjektiv} \\iff \\text{Im}(f) = \\text{cod}(f)",
  },
  "range": {
    name: "Wertebereich",
    meaning: "Wertebereich von f, meist die Menge der Werte, die f tatsächlich annimmt.",
    usage: "Der Begriff ist mehrdeutig: Die meisten modernen Texte verstehen unter dem Wertebereich das Bild, einige ältere aber die Zielmenge, geben Sie Ihre Definition also an. In der linearen Algebra ist \\text{range}(A) der Spaltenraum, und der Hauptsatz der linearen Algebra besagt, dass er das orthogonale Komplement des Nullraums von A^{\\top} ist. Mit \\operatorname{range} erhält man aufrechte Buchstaben mit Operatorabstand; Operatortheoretiker schreiben stattdessen oft \\mathcal{R}(A) oder \\operatorname{ran} T. \\text{range} funktioniert, folgt aber der umgebenden Textschrift, auch der Kursivschrift.",
  },
  "surjective": {
    name: "Surjektionspfeil",
    meaning: "Pfeil mit doppelter Spitze, der eine surjektive Abbildung bzw. einen surjektiven Morphismus kennzeichnet.",
    usage: "Algebraiker schreiben f\\colon A \\twoheadrightarrow B, um auszudrücken, dass f surjektiv ist, etwa für die Quotientenabbildung G \\twoheadrightarrow G/N. Er bildet ein Paar mit \\hookrightarrow für Injektionen, sodass eine kurze exakte Sequenz 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 beides auf einen Blick zeigt. Für Abbildungen in die andere Richtung gibt es die nach links weisende Version \\twoheadleftarrow. Der Pfeil ist eine Relation, der Abstand ergibt sich also automatisch. Verwenden Sie ihn nicht für Konvergenz oder Implikation; dort sind \\to und \\implies üblich.",
  },
  "restriction": {
    name: "Einschränkung",
    meaning: "Einschränkung von f auf eine Teilmenge A: Die Vorschrift bleibt, der Definitionsbereich wird verkleinert.",
    usage: "Die Einschränkung f|_A behält die Vorschrift bei und verkleinert den Definitionsbereich, also f|_A\\colon A \\to B. Ein einfacher Strich ist kurz, und der Index kann davon losgelöst wirken; viele Autoren schreiben f\\big|_A für einen höheren Strich oder verwenden den Pfeil \\restriction, der wie eine halbe Harpune aussieht. Verwechseln Sie dies nicht mit dem Auswertungsstrich F(x)\\big|_a^b, der dieselbe Form für einen anderen Zweck nutzt. Einschränkungen sind in der Topologie verbreitet, wo die Stetigkeit von f|_U auf offenen Mengen geprüft wird, und in der Garbentheorie, wo s|_U einen Schnitt auf eine kleinere offene Menge einschränkt.",
  },
  "function-evaluation": {
    name: "Funktionswert",
    meaning: "Drückt aus, dass die Funktion f die Eingabe x auf den Wert y abbildet.",
    usage: "Die Gleichung ist die elementweise Lesart einer Funktion: y ist das Bild von x, auch geschrieben x \\mapsto y. In Algebrakursen bestimmt man Umkehrfunktionen, indem man f(x) = y nach x auflöst, was x = f^{-1}(y) ergibt. Der Abstand um = ergibt sich automatisch, fügen Sie also keine manuellen Leerräume hinzu. Für eine Liste von Werten richten Sie mehrere Gleichungen mit der Umgebung align aus und setzen & vor jedes Gleichheitszeichen. Hat der Funktionsname mehrere Buchstaben, verwenden Sie \\operatorname, damit er nicht kursiv erscheint: \\operatorname{relu}(x) = y statt relu(x) = y.",
  },
  "piecewise-function": {
    name: "Abschnittsweise definierte Funktion",
    meaning: "Abschnittsweise Definition mit der Umgebung cases, die auf verschiedenen Intervallen verschiedene Vorschriften angibt.",
    usage: "Innerhalb von cases enthält jede Zeile einen Wert, ein & und dann die Bedingung, und Zeilen enden mit \\; LaTeX fügt die linke geschweifte Klammer automatisch hinzu und setzt keinen rechten Begrenzer. Typische Anwendungen sind der Betrag, die ReLU-Aktivierung, die Signumfunktion und die Heaviside-Funktion. Setzen Sie Wörter in \\text{}, etwa \\text{falls } x > 0, damit sie aufrecht und mit normalem Abstand erscheinen. Brüche in den Zeilen werden standardmäßig im Textstil gesetzt; verwenden Sie \\dfrac, wenn sie zu klein wirken. Achten Sie darauf, dass die Bedingungen den Definitionsbereich lückenlos und ohne Überschneidung abdecken, oft mit einer abschließenden Zeile \\text{sonst}.",
  },
};

export default text;
