import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "Imaginäre Einheit",
    meaning: "Die imaginäre Einheit, eine Zahl, deren Quadrat −1 ist; die Grundlage der komplexen Arithmetik.",
    usage: "Mathematiker und Physiker schreiben i für die Quadratwurzel aus -1, was z = a + bi und das i\\hbar der Schrödingergleichung ergibt. Im Mathematikmodus ist ein einfaches i kursiv, genau wie eine Indexvariable; in Arbeiten, die auch über i summieren, ist daher das aufrechte \\mathrm{i} sicherer, das auch die ISO-Satznorm empfiehlt. Ein Makro wie \\newcommand{\\iu}{\\mathrm{i}} hält das einheitlich. Verwenden Sie \\imath nicht für die imaginäre Einheit: Es ist ein i ohne Punkt, gedacht für Akzente wie \\hat{\\imath} bei Einheitsvektoren. Spieltheoretiker verwenden i außerdem als Index für Spieler.",
  },
  "imaginary-unit-engineering": {
    name: "Imaginäre Einheit (Elektrotechnik)",
    meaning: "Symbol der Elektrotechnik für die imaginäre Einheit, gewählt, weil i für den elektrischen Strom reserviert ist.",
    usage: "Elektroingenieure schreiben Impedanzen als Z = R + jX und Zeiger als V e^{j\\omega t}, und Python verwendet j aus demselben historischen Grund für komplexe Literale. Texte zur Signalverarbeitung folgen dem ebenfalls und schreiben die Fourier-Transformation mit e^{-j\\omega t}. Wie bei i unterscheidet ein aufrechtes \\mathrm{j} die Konstante von einer Indexvariablen j. \\jmath, das j ohne Punkt, ist für Akzente wie \\hat{\\jmath} gedacht, nicht für die imaginäre Einheit. Beachten Sie, dass viele Lehrbücher j vor die Zahl setzen und j5 statt 5j schreiben.",
  },
  "complex-number": {
    name: "Komplexe Zahl",
    meaning: "Algebraische (kartesische) Form einer komplexen Zahl mit Realteil a und Imaginärteil b.",
    usage: "Jede komplexe Zahl lässt sich als a + bi mit reellen a und b schreiben; diese Form eignet sich am besten für die Addition und zum Ablesen von \\Re z = a und \\Im z = b. Multiplikation und Potenzen sind meist in der Polarform r e^{i\\theta} einfacher. bi mit der Einheit am Ende zu schreiben ist die übliche Konvention, Ingenieure schreiben jedoch oft a + jb. Wenn Ihr Dokument i aufrecht setzt, halten Sie es auch hier aufrecht: a + b\\mathrm{i}. Ist b negativ, schreiben Sie a - bi statt a + (-b)i, und setzen Sie bei konkreten Zahlen i hinter die Ziffern, etwa 3 + 4i.",
  },
  "real-part": {
    name: "Realteil",
    meaning: "Realteil der komplexen Zahl z: Für z = a + bi liefert er die reelle Zahl a.",
    usage: "Das eingebaute \\Re erzeugt ein großes Fraktur-R, das traditionelle Symbol für den Realteil, doch viele heutige Autoren finden es schwer lesbar und schreiben stattdessen \\operatorname{Re}(z), das ein aufrechtes „Re“ mit Operatorabständen ausgibt. In jedem Fall ist \\Re nur ein Symbol und kein Operator, TeX fügt also keinen Abstand vor dem Argument ein; verwenden Sie Klammern oder einen schmalen Abstand. Eine nützliche Identität ist \\Re z = (z + \\bar{z})/2. In der Signalverarbeitung ist \\Re\\{\\cdot\\} mit geschweiften Klammern üblich, um das physikalische Signal aus einem Zeiger zu gewinnen.",
  },
  "imaginary-part": {
    name: "Imaginärteil",
    meaning: "Imaginärteil von z, der reelle Koeffizient b in z = a + bi (nicht der Term bi selbst).",
    usage: "Ein häufiger Fehler von Studierenden ist die Annahme \\Im(3 + 4i) = 4i; tatsächlich ist es 4, eine reelle Zahl. Das Symbol ist ein Fraktur-I und kann wie \\Re undurchsichtig wirken, daher ist \\operatorname{Im}(z) eine beliebte, besser lesbare Alternative. Beachten Sie, dass Im in der Algebra auch das Bild einer Abbildung abkürzt; kommen beide Bedeutungen vor, schreiben Sie \\operatorname{im} f für das Bild, um Konflikte zu vermeiden. Nützliche Fakten sind \\Im z = (z - \\bar{z})/(2i) und dass die obere Halbebene die Menge ist, auf der \\Im z > 0 gilt.",
  },
  "complex-conjugate": {
    name: "Komplexe Konjugation",
    meaning: "Komplex Konjugierte von z, die Spiegelung an der reellen Achse: Die Konjugierte von a + bi ist a − bi.",
    usage: "Mathematiker schreiben \\bar{z}, und Identitäten wie z\\bar{z} = |z|^2 machen sie zentral für die Division komplexer Zahlen. \\bar ist ein Akzent fester Breite für ein einzelnes Zeichen; für einen konjugierten Ausdruck verwenden Sie \\overline{z + w}, das sich über das ganze Argument erstreckt und \\overline{z + w} = \\bar{z} + \\bar{w} lesbar macht. Physiker schreiben häufiger z^* und reservieren den Strich für andere Zwecke, etwa Dirac-Adjungierte \\bar{\\psi}. Im Wirtinger-Kalkül behandelt \\partial / \\partial \\bar{z} \\bar{z} als unabhängige Variable.",
  },
  "complex-conjugate-star": {
    name: "Komplexe Konjugation (Stern)",
    meaning: "Sternschreibweise für die komplex Konjugierte, Standard in Physik und Elektrotechnik.",
    usage: "Die Quantenmechanik schreibt Wahrscheinlichkeiten als \\psi^* \\psi und Skalarprodukte mit konjugierten Komponenten, z^* ist dort also die Norm. Im Exponenten funktioniert der Stern so, wie er getippt wird; z^{\\ast} ergibt dasselbe Zeichen. Bei Matrizen bedeutet A^* in der Mathematik oft die konjugiert Transponierte, während Physiker dafür A^\\dagger schreiben und A^* für die einfache eintragsweise Konjugation behalten; geben Sie also Ihre Konvention an. Ein Stern kann auch ein Optimum (x^*) oder einen Dualraum (V^*) kennzeichnen, vermeiden Sie die Schreibweise daher, wenn diese Bedeutungen in der Nähe vorkommen.",
  },
  "modulus": {
    name: "Betrag",
    meaning: "Betrag (Absolutbetrag) von z, sein Abstand vom Ursprung: √(a² + b²) für z = a + bi.",
    usage: "Einfache senkrechte Striche funktionieren in einfachen Fällen, sind für TeX aber mehrdeutig, da es öffnende und schließende nicht unterscheiden kann; das führt zu schlechten Abständen in Ausdrücken wie |-z|. Verwenden Sie \\lvert z \\rvert oder definieren Sie ein Makro, um korrekte Abstände zu erhalten, und \\left| \\frac{z}{w} \\right|, wenn der Inhalt hoch ist. Verwenden Sie hier niemals \\mid: Das ist eine Relation mit breiten Abständen. Wichtige Eigenschaften sind |zw| = |z||w| und die Dreiecksungleichung |z + w| \\leq |z| + |w|. Im Vektorkontext bezeichnen die Doppelstriche \\| \\| stattdessen eine Norm.",
  },
  "argument": {
    name: "Argument",
    meaning: "Argument von z: der Winkel von der positiven reellen Achse zu z, festgelegt bis auf Vielfache von 2π.",
    usage: "\\arg ist ein eingebauter Operatorname, wird also aufrecht und mit korrekten Abständen gesetzt; arg ohne Backslash ergibt kursive Buchstaben. Da der Winkel mehrdeutig ist, wird \\arg z oft als Menge \\{\\theta + 2\\pi k\\} aufgefasst, und \\arg(zw) = \\arg z + \\arg w gilt nur modulo 2\\pi. Für den eindeutigen Hauptwert schreibt man \\operatorname{Arg} z mit großem Anfangsbuchstaben. Verwechseln Sie \\arg nicht mit Operatoren im Stil von argmax, die eine minimierende Eingabe liefern und eine eigene Deklaration brauchen.",
  },
  "principal-argument": {
    name: "Hauptwert des Arguments",
    meaning: "Hauptwert des Arguments, der eindeutige Winkel in (−π, π], den z mit der positiven reellen Achse bildet.",
    usage: "Der Großbuchstabe unterscheidet dieses eindeutige Arg vom mehrdeutigen \\arg. Der Verzweigungsschnitt liegt auf der negativen reellen Achse, weshalb \\text{Arg}(-1) = \\pi gilt, Werte knapp unterhalb des Schnitts sich aber -\\pi nähern. Manche Bücher verwenden stattdessen [0, 2\\pi), geben Sie also an, welches Intervall Sie meinen. LaTeX hat keinen Befehl \\Arg; \\text{Arg} funktioniert, wird aber in Theorem-Umgebungen kursiv. \\operatorname{Arg} oder \\DeclareMathOperator{\\Arg}{Arg} ist robuster und liefert den richtigen Abstand vor dem Argument. Zum Beispiel ist \\text{Arg}(i) = \\pi/2, während \\arg i die ganze Menge \\pi/2 + 2\\pi k ist.",
  },
  "polar-form": {
    name: "Polarform",
    meaning: "Polarform (Exponentialform) einer komplexen Zahl: der Betrag r mal eine komplexe Zahl vom Betrag 1 mit dem Winkel θ.",
    usage: "Beim Multiplizieren in Polarform werden einfach die Beträge multipliziert und die Winkel addiert, also (r e^{i\\theta})^n = r^n e^{in\\theta}, der Satz von de Moivre in kompakter Form. Einheitswurzeln e^{2\\pi i k/n} und Zeiger A e^{i\\omega t} ergeben sich direkt aus dieser Schreibweise. Setzen Sie den ganzen Exponenten in geschweifte Klammern; e^i\\theta würde e nur mit i potenzieren. Wenn Exponenten überladen werden, liest sich \\exp(i\\theta) leichter als ein winziger Exponent. Manche Stilrichtlinien setzen die Konstante als aufrechtes \\mathrm{e}, um sie von einer Variablen zu unterscheiden.",
  },
  "euler-s-formula": {
    name: "Eulersche Formel",
    meaning: "Die Eulersche Formel verbindet die komplexe Exponentialfunktion mit Kosinus und Sinus; sie legt e^{iθ} auf den Einheitskreis.",
    usage: "Mit \\theta = \\pi erhält man die Eulersche Identität e^{i\\pi} + 1 = 0, und das Auflösen der Formel nach dem Kosinus liefert \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2. Beachten Sie, dass \\cos und \\sin Operatorbefehle sind: Sie werden aufrecht gesetzt und fügen vor \\theta einen schmalen Abstand ein, während cos drei kursive Buchstaben ergäbe. Für ein einzelnes Symbol als Argument wie \\theta sind keine Klammern nötig, bei zusammengesetzten Argumenten aber schon, \\sin(2\\theta). In der Elektrotechnik wird dieselbe Identität mit j statt i geschrieben.",
  },
  "complex-exponential": {
    name: "Komplexe Exponentialfunktion",
    meaning: "Exponentialfunktion an einer komplexen Zahl z = x + iy, gleich eˣ(cos y + i sin y).",
    usage: "Die komplexe Exponentialfunktion ist ganz, nirgends null und periodisch mit Periode 2\\pi i, weshalb ihre Umkehrung, der Logarithmus, mehrdeutig ist. Bei kurzen Exponenten ist e^{z} in Ordnung; bei etwas wie e^{-(x - \\mu)^2/2\\sigma^2} wird der Exponent winzig, und \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) liest sich besser. \\exp ist ein vordefinierter Operator. Setzen Sie Exponenten aus mehreren Zeichen immer in geschweifte Klammern. Manche Verlage verlangen ein aufrechtes \\mathrm{e} für die Konstante, was sie von einer Variablen e unterscheidet. Ihre Ableitung ist sie selbst, was sie zum Baustein der Lösungen linearer gewöhnlicher Differentialgleichungen macht.",
  },
  "complex-logarithm": {
    name: "Komplexer Logarithmus",
    meaning: "Komplexer Logarithmus von z, eine mehrdeutige Umkehrung der Exponentialfunktion: ln|z| + i arg z.",
    usage: "Da sich die Exponentialfunktion alle 2\\pi i wiederholt, hat \\log z unendlich viele Werte, die sich um 2\\pi i k unterscheiden. Der Hauptzweig wird oft mit Großbuchstaben geschrieben, \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z, und ist abseits des Verzweigungsschnitts auf der negativen reellen Achse analytisch. \\log und \\ln sind beide eingebaute Operatoren; Analytiker schreiben für den natürlichen Logarithmus meist \\log, während \\ln die Basis explizit macht. Nach \\log erscheint automatisch ein schmaler Abstand, \\log z braucht für eine einzelne Variable also keine Klammern.",
  },
  "complex-power": {
    name: "Komplexe Potenz",
    meaning: "Komplexe Potenz z hoch w, definiert als exp(w log z) und im Allgemeinen mehrdeutig.",
    usage: "Die überraschende Tatsache i^i = e^{-\\pi/2} (auf dem Hauptzweig) folgt aus dieser Definition. Da \\log z mehrdeutig ist, hat z^w viele Werte, sofern w keine ganze Zahl ist, und Regeln wie (z^a)^b = z^{ab} können versagen. Setzen Sie Exponenten aus mehr als einem Zeichen in geschweifte Klammern: z^{w+1}, nicht z^w+1. Bei Türmen wie z^{w^v} verkleinert TeX jede Ebene, erwägen Sie daher die \\exp-Schreibweise für bessere Lesbarkeit. Geben Sie den Zweig ausdrücklich an, wenn Sie sich auf einen bestimmten Wert stützen, zum Beispiel durch \\exp(w \\operatorname{Log} z).",
  },
  "unit-circle": {
    name: "Einheitskreis",
    meaning: "Gleichung des Einheitskreises in der komplexen Ebene: alle komplexen Zahlen im Abstand 1 vom Ursprung.",
    usage: "Die Punkte auf dem Einheitskreis sind genau die e^{i\\theta}, und die n-ten Einheitswurzeln liegen auf ihm. Er wird oft \\mathbb{T} oder S^1 genannt und ist als Gruppe unter Multiplikation die Kreisgruppe der Fourier-Analysis. Kurvenintegrale über ihn schreibt man \\oint_{|z|=1} mit der Bedingung als Index. Für die Konjugation auf dem Kreis gilt \\bar{z} = 1/z, eine praktische Vereinfachung. Wenn die Abstände um die Striche im Kontext seltsam aussehen, verwenden Sie \\lvert z \\rvert; die offene Kreisscheibe |z| < 1 und die abgeschlossene Kreisscheibe |z| \\le 1 folgen demselben Muster.",
  },
  "upper-half-plane": {
    name: "Obere Halbebene",
    meaning: "Ein H mit Doppelstrich, meist die obere Halbebene {z : Im z > 0}; auch die Quaternionen.",
    usage: "In Funktionentheorie und Zahlentheorie ist \\mathbb{H} der Definitionsbereich der Modulformen, auf dem SL_2(\\mathbb{Z}) durch Möbiustransformationen operiert, und es trägt die hyperbolische Metrik. In der Algebra bezeichnet derselbe Buchstabe Hamiltons Quaternionen, benannt nach ihm; kommen beide vor, schreiben Sie \\mathcal{H} oder sagen Sie ausdrücklich, welches gemeint ist. \\mathbb liefert mit den Standardschriften nur Großbuchstaben; Kleinbuchstaben als Argument ergeben Unsinn oder Fehler. Verwandte Mengen werden genauso gesetzt: \\mathbb{C}, \\mathbb{R}, \\mathbb{Z}. Ihr Rand ist die reelle Gerade zusammen mit einem Punkt im Unendlichen.",
  },
};

export default text;
