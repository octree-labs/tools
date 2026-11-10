import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/computer-science/<slug>. */
const text: SymbolPageTranslations = {
  "big-o": {
    name: "Groß-O",
    meaning: "Asymptotische obere Schranke: f(n) = O(n) bedeutet, dass f für große n nicht schneller wächst als ein konstantes Vielfaches von n.",
    usage: "Groß-O ist das Arbeitspferd der Algorithmenanalyse: Lineare Suche läuft in O(n), Mergesort in O(n \\log n), naive Matrixmultiplikation in O(n^3). Genau genommen ist O(g) eine Menge von Funktionen, f \\in O(g) ist also die präzise Form, auch wenn f(n) = O(g(n)) die nahezu universelle Konvention ist. Manche Autoren bevorzugen ein kalligrafisches \\mathcal{O}(n), um den Operator von einer Variablen namens O zu unterscheiden; entscheiden Sie sich für eine Variante und bleiben Sie in der ganzen Arbeit dabei. Schreiben Sie das Argument mit den tatsächlichen Kosten im Inneren, etwa O(n^2 \\log n) statt O(n^2) \\cdot \\log n, und denken Sie daran, dass O nur nach oben beschränkt und daher nicht behauptet, die Schranke sei scharf.",
  },
  "big-omega": {
    name: "Groß-Omega",
    meaning: "Asymptotische untere Schranke: f(n) = Omega(n) bedeutet, dass f für große n mindestens so schnell wächst wie eine Konstante mal n.",
    usage: "Das große Omega drückt untere Schranken aus, am bekanntesten die, dass jedes vergleichsbasierte Sortierverfahren im schlechtesten Fall \\Omega(n \\log n) Vergleiche braucht. Es wird mit dem aufrechten griechischen Großbuchstaben \\Omega gesetzt; amsmath bietet außerdem \\varOmega für eine geneigte Form, die manche Typografen für Variablen bevorzugen, die als Operator aber seltsam aussieht. Beachten Sie, dass die analytische Zahlentheorie die ältere Bedeutung von Hardy und Littlewood verwendet, bei der \\Omega bedeutet, dass die Schranke nicht o(g) ist; prüfen Sie also, welcher Definition eine Quelle folgt. Kombinieren Sie es mit O, um eine Laufzeit einzugrenzen, und wechseln Sie zu \\Theta, sobald beide Seiten übereinstimmen.",
    example: "\\text{Sortieren per Vergleich braucht } \\Omega(n \\log n) \\text{ Zeit}",
  },
  "big-theta": {
    name: "Groß-Theta",
    meaning: "Scharfe asymptotische Schranke: f(n) = Theta(n) bedeutet, dass f nach oben und unten durch konstante Vielfache von n beschränkt ist.",
    usage: "Theta ist die richtige Aussage, wenn Sie übereinstimmende obere und untere Schranken bewiesen haben: Binäre Suche ist \\Theta(\\log n), und der mittlere Fall des Master-Theorems liefert \\Theta(n^{\\log_b a} \\log n). Formal gilt f \\in \\Theta(g) genau dann, wenn f \\in O(g) und f \\in \\Omega(g). Viele Arbeiten schreiben O, wo \\Theta gemeint ist; Gutachter auf Theorie-Konferenzen bemerken das, verwenden Sie also \\Theta, wenn es um die Schärfe geht. Das große \\Theta ist standardmäßig aufrecht; verwechseln Sie es nicht mit dem kleinen \\theta, das meist einen Winkel oder einen Parametervektor bezeichnet, und vermeiden Sie \\vartheta, eine Variante des Kleinbuchstabens.",
  },
  "little-o": {
    name: "Klein-o",
    meaning: "Strikte asymptotische obere Schranke: f(n) = o(n) bedeutet, dass f(n)/n mit wachsendem n gegen 0 geht.",
    usage: "Klein-o drückt aus, dass eine Funktion gegenüber einer anderen vernachlässigbar ist, wie in \\log n = o(n) oder n = o(n^2). Es ist echt stärker als Groß-O: Jede o(g)-Funktion ist O(g), aber n ist O(n), ohne o(n) zu sein. Analytiker verwenden es ständig in Taylor-Entwicklungen, etwa \\sin x = x + o(x) für x \\to 0, geben Sie also immer die Grenzstelle an, wenn sie nicht unendlich ist. Da es nur ein kursives o ist, gibt es keinen eigenen Befehl; achten Sie darauf, dass Leser es nicht mit einer Null verwechseln, und schreiben Sie es klein, damit es nicht mit Groß-O kollidiert.",
    example: "\\log n = o(n) \\quad \\text{da} \\quad \\lim_{n\\to\\infty} \\frac{\\log n}{n} = 0",
  },
  "little-omega": {
    name: "Klein-Omega",
    meaning: "Strikte asymptotische untere Schranke: f(n) = omega(n) bedeutet, dass f(n)/n unbeschränkt wächst.",
    usage: "Klein-Omega ist das Spiegelbild von Klein-o: f = \\omega(g) genau dann, wenn g = o(f), also n^2 = \\omega(n) und n \\log n = \\omega(n). Es kommt seltener vor als \\Omega, vor allem in Beweisen unterer Schranken und bei randomisierten Algorithmen, wo eine Größe echt schneller als linear wachsen muss. Verwenden Sie das kleine griechische \\omega, nicht das lateinische w, das in manchen Schriften ähnlich aussieht. Beachten Sie, dass dasselbe Symbol mehrfach belegt ist: In der Graphentheorie ist \\omega(G) die Cliquenzahl, und in der Zahlentheorie zählt \\omega(n) die verschiedenen Primfaktoren; definieren Sie Ihre Verwendung also bei gemischtem Kontext.",
  },
  "modulo": {
    name: "Modulo",
    meaning: "Binärer Modulo-Operator: setzt „mod“ zwischen zwei Operanden, wie in a mod n, mit Operatorabständen.",
    usage: "Verwenden Sie \\bmod für die Restoperation innerhalb eines Ausdrucks, etwa 17 \\bmod 5 = 2 oder die Hashfunktion h(k) = k \\bmod m. Es erzeugt ein aufrechtes mod mit mittlerem Abstand auf beiden Seiten, genau wie ein binärer Operator. Für Kongruenzen verwenden Sie stattdessen \\pmod: a \\equiv b \\pmod{n} setzt die eingeklammerte Form mit zusätzlichem Abstand davor. amsmath definiert außerdem \\mod{n}, das eine breitere Lücke ohne Klammern ergibt, und \\pod{n}, das die Klammern behält, aber das Wort weglässt. Die bloßen Buchstaben mod würden kursiv als Produkt von Variablen gesetzt, verwenden Sie also immer einen dieser Befehle.",
  },
  "logarithm": {
    name: "Logarithmus",
    meaning: "Setzt den Namen der Logarithmusfunktion in aufrechter Schrift mit korrektem Abstand vor dem Argument.",
    usage: "\\log ist einer der vordefinierten Funktionsnamen von LaTeX, gibt also ein aufrechtes log aus und fügt vor dem Argument einen schmalen Abstand ein, anders als das Tippen von log, das drei Variablen kursiv setzt. Eine Basis fügen Sie mit einem Index hinzu, wie in \\log_2 n für binäre Logarithmen; in der Algorithmenanalyse bedeutet ein \\log ohne Index meist Basis 2, in der Mathematik oft den natürlichen Logarithmus, geben Sie also die Konvention an. LaTeX definiert außerdem \\lg für Logarithmen zur Basis 2 und \\ln für natürliche Logarithmen vor. Besteht das Argument aus mehr als einem Symbol, setzen Sie Klammern, zum Beispiel \\log(n+1), und verwenden Sie \\left( \\right) für hohe Argumente.",
  },
  "natural-log": {
    name: "Natürlicher Logarithmus",
    meaning: "Gibt den Namen des natürlichen Logarithmus, ln, in aufrechter Schrift mit Operatorabständen aus.",
    usage: "\\ln ist der vordefinierte Befehl für den Logarithmus zur Basis e; er ergibt ein aufrechtes ln mit passendem Abstand danach, genauso wie \\sin oder \\exp. Er erscheint in Identitäten der Analysis wie \\frac{d}{dx}\\ln x = \\frac{1}{x}, in der Informationstheorie, wenn Entropie in Nats gemessen wird, und in Log-Likelihoods. Viele Mathematiker schreiben \\log für den natürlichen Logarithmus, während Ingenieure und Informatiker \\ln für die Basis e und \\log für die Basis 10 oder 2 reservieren; bleiben Sie also einheitlich. Bei einem Argument wie einem Bruch umschließen Sie es mit \\left( und \\right), damit die Klammern mitwachsen.",
  },
};

export default text;
