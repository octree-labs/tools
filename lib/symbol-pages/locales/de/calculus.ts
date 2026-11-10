import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/calculus/<slug>. */
const text: SymbolPageTranslations = {
  "integral": {
    name: "Integral",
    meaning: "Zeichnet das Integralzeichen, verwendet für Stammfunktionen und bestimmte Integrale wie die Fläche unter einer Kurve.",
    usage: "Schreiben Sie die Grenzen als Index und Exponent: \\int_a^b f(x)\\,dx ergibt ein bestimmtes Integral, und die Grenzen stehen im Display-Stil standardmäßig neben dem Zeichen. Fügen Sie \\limits direkt nach \\int ein, um die Grenzen über und unter das Zeichen zu setzen, ein Stil, den manche Physiktexte bevorzugen. Setzen Sie einen schmalen Abstand \\, vor das Differential, damit dx nicht mit dem Integranden zusammenstößt. Bei Mehrfachintegralen hinterlässt \\int\\int eine unschöne Lücke; verwenden Sie \\iint oder \\iiint, die den Abstand automatisch verringern. Im Fließtext-Mathematikmodus schrumpft das Zeichen merklich, lange oder verschachtelte Integrale lesen sich daher meist in einer abgesetzten Umgebung besser.",
  },
  "double-integral": {
    name: "Doppelintegral",
    meaning: "Doppelintegralzeichen zur Integration einer Funktion zweier Variablen über ein ebenes Gebiet.",
    usage: "Ein Doppelintegral tritt immer auf, wenn Sie über eine Fläche integrieren, etwa \\iint_D f(x,y)\\,dA für eine Masse, für eine Wahrscheinlichkeit über eine gemeinsame Dichte oder für den Fluss durch eine Fläche. Wer \\int\\int von Hand tippt, erhält zwei Zeichen mit zu viel Abstand dazwischen; \\iint rückt sie zu einem einzigen engen Paar zusammen. Geben Sie das Gebiet als einen einzigen Index an, \\iint_{D}, statt Grenzen auf beide Zeichen zu verteilen. Brauchen Sie getrennte Grenzen für jede Variable, schreiben Sie stattdessen \\int_a^b\\!\\int_c^d, da der kombinierte Befehl nur einen Satz Grenzen annimmt. Der negative schmale Abstand \\! verhindert, dass solche handgebauten Paare auseinanderdriften.",
  },
  "triple-integral": {
    name: "Dreifachintegral",
    meaning: "Dreifachintegralzeichen, verwendet zur Integration über einen dreidimensionalen Körper.",
    usage: "Volumenintegrale wie \\iiint_V \\rho\\,dV für die Gesamtmasse oder die linke Seite des Divergenzsatzes \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV verwenden dieses Symbol. Wie \\iint setzt es die drei Zeichen enger als \\int\\int\\int, sodass das Ergebnis als ein einziger Operator gelesen wird. Das Gebiet steht in einem einzigen Index; für explizite iterierte Grenzen jeder Variablen verketten Sie stattdessen einzelne \\int-Befehle. Es gibt außerdem \\iiiint für vier Zeichen und \\idotsint, das zwei durch Punkte getrennte Zeichen für ein n-faches Integral zeichnet. Denken Sie in Kugelkoordinaten an die Funktionaldeterminante: dV = r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi.",
  },
  "contour-integral": {
    name: "Ringintegral",
    meaning: "Integralzeichen mit einem kleinen Kreis, das die Integration entlang einer geschlossenen Kurve kennzeichnet.",
    usage: "Die Funktionentheorie stützt sich stark darauf: Der Cauchysche Integralsatz besagt \\oint_\\gamma f(z)\\,dz = 0 für holomorphes f, und der Residuensatz berechnet solche Integrale als 2\\pi i mal eine Summe von Residuen. In der Physik erscheint es bei der Zirkulation sowie im Ampèreschen und im Faradayschen Gesetz, zum Beispiel \\oint_C \\mathbf{B}\\cdot d\\boldsymbol{\\ell}. Benennen Sie die Kurve im Index; \\oint_{\\partial S} kennzeichnet den Rand einer Fläche. Ein geschlossenes Oberflächenintegral mit einem Kreis über zwei Zeichen gehört nicht zum Standardbefehlssatz, daher schreiben viele Autoren einfach \\iint_{\\partial V} und geben an, dass die Fläche geschlossen ist.",
  },
  "derivative": {
    name: "Ableitung",
    meaning: "Leibniz-Notation für den Ableitungsoperator nach x, aufgebaut aus einem Bruch.",
    usage: "\\frac{d}{dx} ergibt die Operatorform, die in Regeln wie \\frac{d}{dx}\\sin x = \\cos x verwendet wird, während \\frac{dy}{dx} die Ableitung einer abhängigen Variablen bezeichnet. Viele Stilrichtlinien setzen das Differential d aufrecht, als \\mathrm{d}, um es von einer Variablen namens d zu unterscheiden; ein Makro wie \\newcommand{\\diff}{\\mathrm{d}} hält dies einheitlich. Im Fließtext schrumpft \\frac auf winzige Indexgröße, bevorzugen Sie dort \\tfrac oder die Schrägstrichform dy/dx. Für höhere Ordnungen schreiben Sie \\frac{d^2y}{dx^2}, mit dem Exponenten am d im Zähler, aber am x im Nenner.",
  },
  "partial-derivative-operator": {
    name: "Partieller Ableitungsoperator",
    meaning: "Operator für die partielle Ableitung nach x, bei der alle anderen Variablen festgehalten werden.",
    usage: "Mehrdimensionale Analysis und partielle Differentialgleichungen sind voll davon: Die Wärmeleitungsgleichung \\frac{\\partial u}{\\partial t} = k\\frac{\\partial^2 u}{\\partial x^2}, Gradienten und Jacobi-Matrizen verwenden ihn. Das geschwungene \\partial unterscheidet ihn vom gewöhnlichen d in \\frac{d}{dx}, das Funktionen einer Variablen vorbehalten ist. Gemischte partielle Ableitungen schreibt man als \\frac{\\partial^2 f}{\\partial x\\,\\partial y}, mit einem schmalen Abstand zwischen den Faktoren im Nenner. Werden Brüche zu gedrängt, ist die Indexkurzform \\partial_x f oder f_x eine kompakte Alternative, die in der Physik und in langen Systemen partieller Differentialgleichungen üblich ist, wo gestapelte Brüche die Zeilenhöhe sprengen würden.",
  },
  "limit": {
    name: "Grenzwert",
    meaning: "Limes-Operator, unter dem die Annäherungsbedingung x \\to a steht.",
    usage: "Da \\lim ein vordefinierter Operator ist, wird er aufrecht gesetzt und platziert seinen Index in abgesetzten Formeln darunter, wie in \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. Im Fließtext rückt der Index zur Seite, um Zeilenhöhe zu sparen; erzwingen Sie ihn mit \\lim\\limits_{x\\to a} nur dann darunter, wenn die zusätzliche Höhe akzeptabel ist. Einseitige Grenzwerte verwenden x \\to a^+ oder x \\to a^-, Grenzwerte im Unendlichen x \\to \\infty. Die verwandten Operatoren \\limsup und \\liminf verhalten sich genauso. Verwenden Sie für den Pfeil \\to statt eines Bindestrichs mit Größer-Zeichen, die als zwei getrennte Symbole ausgegeben würden.",
  },
  "summation": {
    name: "Summe",
    meaning: "Summenzeichen mit einem Index, der bei n = 1 beginnt und bis unendlich läuft, die Form einer unendlichen Reihe.",
    usage: "Unendliche Reihen wie das Basler Problem \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} oder die divergente harmonische Reihe werden so geschrieben. In abgesetzten Formeln stehen die Grenzen über und unter einem großen Sigma; im Fließtext rücken sie rechts neben ein kleineres, was den Zeilenabstand gleichmäßig hält. Fügen Sie \\limits hinzu, wenn Sie im Fließtext gestapelte Grenzen brauchen, oder sparsam \\displaystyle. Verwenden Sie nicht den griechischen Buchstaben \\Sigma als Ersatz: Er ist ein Buchstabe normaler Größe, kein Operator, und nimmt Grenzen nicht korrekt an. Konvergenz wird oft über Partialsummen formuliert, S_N = \\sum_{n=1}^{N} a_n.",
  },
  "product": {
    name: "Produkt",
    meaning: "Produktoperator über n von 1 bis unendlich, verwendet zum Schreiben unendlicher Produkte.",
    usage: "Klassische Ergebnisse wie das Euler-Produkt der Zetafunktion und das Wallis-Produkt für \\pi werden damit geschrieben. Wie bei \\sum stehen die Grenzen im Display-Stil unter und über dem Operator und im Fließtext seitlich. Verwechseln Sie es nicht mit \\Pi, dem griechischen Großbuchstaben, der eine ähnliche Form hat, aber normale Größe behält und Grenzen als gewöhnliche Indizes annimmt. Ein unendliches Produkt heißt konvergent, wenn seine Partialprodukte gegen einen von null verschiedenen Grenzwert streben, daher schreiben Autoren oft \\prod_{n=1}^{\\infty}(1+a_n) zusammen mit der Bedingung \\sum |a_n| < \\infty, die die Konvergenz garantiert.",
  },
  "differential": {
    name: "Differential",
    meaning: "Differential von x, das ein Integral abschließt und die Integrationsvariable benennt.",
    usage: "Als einfaches dx getippt, erscheint das d kursiv und sitzt direkt am Integranden, daher ist ein schmaler Abstand die übliche Abhilfe: \\int f(x)\\,dx. Der ISO-Stil und viele Fachzeitschriften setzen das d aufrecht mit \\mathrm{d}x; ein Makro wie \\newcommand{\\dd}{\\mathrm{d}} hält dies in einer ganzen Arbeit einheitlich. In Mehrfachintegralen trennen Sie Differentiale durch schmale Abstände, dx\\,dy, oder kürzen sie als dA oder dV ab. Dasselbe Differential erscheint in Leibniz-Ableitungen \\frac{dy}{dx} und in Differentialformen, wo Produkte als dx \\wedge dy geschrieben werden und die Reihenfolge zählt, weil das Dachprodukt antisymmetrisch ist.",
  },
  "prime-derivative": {
    name: "Ableitung mit Strich",
    meaning: "Lagrangesche Strichnotation für die erste Ableitung von f an der Stelle x.",
    usage: "Ein Apostroph im Mathematikmodus erzeugt einen Strich als Exponenten, f' ist also eine Kurzform für f^{\\prime}. Die Strichnotation ist für Funktionen einer Variablen kompakt, wie im Mittelwertsatz f'(c) = \\frac{f(b)-f(a)}{b-a}. Brauchen Sie zusätzlich einen Exponenten, schreiben Sie f'^2, das beides zu einem Exponenten zusammenfasst, oder klammern Sie als (f'(x))^2; f^2' löst einen Fehler wegen doppelten Exponenten aus. Fügen Sie kein typografisches Anführungszeichen ein, das nicht zum Strich wird, und vermeiden Sie ein bloßes \\prime außerhalb eines Exponenten, das in voller Größe auf der Grundlinie erscheint. In der Physik kann ein Strich auch eine transformierte Koordinate wie x' kennzeichnen.",
  },
  "double-prime": {
    name: "Zweite Ableitung mit Strichen",
    meaning: "Zweite Ableitung von f an der Stelle x in Strichnotation, die Krümmungsverhalten oder Beschleunigung beschreibt.",
    usage: "Zwei Apostrophe im Mathematikmodus werden zu einem einzigen Exponenten mit zwei Strichen zusammengefasst, entsprechend f^{\\prime\\prime}. Das hinreichende Kriterium mit der zweiten Ableitung nutzt sie: Gilt f'(c) = 0 und f''(c) > 0, dann ist c ein lokales Minimum. In der Mechanik gibt x''(t) die Beschleunigung an, für Zeitableitungen wird jedoch die Punktform \\ddot{x} bevorzugt. Drei Striche f''' sind noch lesbar, darüber hinaus wechseln Sie zu f^{(4)}(x), mit der Ordnung in Klammern, damit sie nicht für eine Potenz gehalten wird. Tippen Sie niemals ein doppeltes Anführungszeichen anstelle von zwei Apostrophen; es wird als völlig anderes Zeichen dargestellt.",
  },
  "approaches": {
    name: "Grenzübergangspfeil",
    meaning: "Nach rechts zeigender Pfeil, gelesen als „strebt gegen“ bei Grenzwerten oder als „bildet ab nach“ zwischen Mengen.",
    usage: "Er erfüllt eine Doppelrolle: bei Grenzwerten, x \\to 0 oder n \\to \\infty; in Funktionssignaturen, f\\colon X \\to Y. \\to ist lediglich ein Alias für \\rightarrow, die Ausgabe ist also identisch; wählen Sie, was sich im Quelltext besser liest. Verwechseln Sie ihn nicht mit \\mapsto, das zeigt, wohin ein einzelnes Element abgebildet wird (x \\mapsto x^2), oder mit \\longrightarrow, einem längeren Pfeil für abgesetzte Formeln. Für Konvergenzarten versehen Sie ihn mit Beschriftungen: \\xrightarrow{d} für Verteilungskonvergenz, oder setzen Sie eine Beschriftung mit \\overset{p}{\\to} darüber. Er hat den Abstand einer Relation, manuelle Abstände sind daher nicht nötig.",
  },
  "evaluated-at": {
    name: "Auswertungsstrich",
    meaning: "Senkrechter Auswertungsstrich mit Grenzen, der eine von a bis b ausgewertete Stammfunktion darstellt.",
    usage: "Nach dem Integrieren ist F(x)\\Big|_{a}^{b} = F(b) - F(a) die übliche Kurzschreibweise aus dem Hauptsatz der Differential- und Integralrechnung. \\Big legt den Strich auf eine vergrößerte Stufe fest, die zu gewöhnlichen Brüchen passt; für höhere Ausdrücke verwenden Sie \\bigg| oder kombinieren \\left. mit \\right|_{a}^{b}, damit der Strich mit dem vorangehenden Inhalt mitwächst. Manche Autoren bevorzugen eckige Klammern, \\Big[ F(x) \\Big]_a^b, die keinen Zweifel lassen, wie viel ausgewertet wird. Ein einfaches | ohne Größenanpassung ist zu kurz und lässt die Grenzen an die Stammfunktion heranrücken, besonders nach einem Bruch.",
  },
};

export default text;
