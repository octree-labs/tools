import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "Summenzeichen",
    meaning: "Der Summenoperator in Form eines großen Sigma, der die Glieder einer Folge aufaddiert.",
    usage: "Grenzen werden mit _ und ^ angehängt: \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}. In abgesetzten Formeln stehen die Grenzen zentriert unter und über einem vergrößerten Sigma, im Fließtext rücken sie zur Seite und das Zeichen bleibt klein; \\limits und \\nolimits setzen dieses Verhalten außer Kraft. Verwenden Sie \\sum statt \\Sigma, denn das ist nur der griechische Buchstabe, der weder mitwächst noch Grenzen übereinandersetzt. Für mehrzeilige Bedingungen unter dem Zeichen stapelt \\substack{0 \\le i \\le m \\\\ 0 < j < n} diese sauber. Eine Summe nur mit Index, \\sum_i, ist in der Physik und im maschinellen Lernen üblich, wenn der Bereich offensichtlich ist.",
  },
  "summation-to-infinity": {
    name: "Unendliche Summe",
    meaning: "Summe mit einem Index von n = 0 bis unendlich, die Form, in der Potenzreihen geschrieben werden.",
    usage: "Der Beginn bei null ist für Potenz- und Taylorreihen natürlich: e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} und die geometrische Reihe \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r} für |r| < 1. Prüfen Sie den Startindex genau, denn eine Verschiebung von n = 0 auf n = 1 lässt das erste Glied weg und ändert die geschlossene Form. In abgesetzten Formeln werden die Grenzen übereinandergesetzt, im Fließtext rücken sie neben das Sigma. Ist die obere Grenze unendlich, ist \\sum_{n \\ge 0} eine kompakte Alternative. Erzeugende Funktionen einer Folge a_n schreibt man genauso, \\sum_{n=0}^{\\infty} a_n x^n.",
  },
  "product": {
    name: "Produktzeichen",
    meaning: "Der Produktoperator in Form eines großen Pi, der die Glieder einer Folge miteinander multipliziert.",
    usage: "Die Grenzen funktionieren wie bei \\sum: n! = \\prod_{k=1}^{n} k, und in der Statistik die Likelihood L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta). Das Zeichen ist größer als der Buchstabe \\Pi und setzt die Grenzen in abgesetzten Formeln darüber und darunter, ersetzen Sie es also nicht durch den griechischen Buchstaben. Logarithmieren macht aus einem Produkt eine Summe, \\log\\prod_i a_i = \\sum_i \\log a_i, ein Schritt in fast jeder Maximum-Likelihood-Herleitung. Kartesische Produkte von Mengen, \\prod_{i \\in I} X_i, verwenden denselben Befehl. Das auf den Kopf gestellte Gegenstück \\coprod bezeichnet Koprodukte.",
  },
  "coproduct": {
    name: "Koprodukt",
    meaning: "Auf den Kopf gestelltes Produktzeichen für das Koprodukt, etwa die disjunkte Vereinigung von Mengen.",
    usage: "Kategorientheorie und algebraische Topologie schreiben \\coprod_{i \\in I} X_i für das Koprodukt einer Familie: disjunkte Vereinigung bei Mengen und Räumen, direkte Summe bei abelschen Gruppen oder Moduln. Es ist ein großer Operator wie \\prod, in abgesetzten Formeln stehen die Grenzen also darunter und darüber. Verwechseln Sie es nicht mit \\amalg, dem kleinen binären Gegenstück für genau zwei Objekte, X \\amalg Y. Disjunkte Vereinigungen werden auch als \\bigsqcup geschrieben, das eine becherartige Form hat; wählen Sie, was in Ihrem Fachgebiet üblich ist. Die duale Konstruktion, das kategorielle Produkt, verwendet \\prod.",
  },
  "big-union-with-index": {
    name: "Große Vereinigung mit Index",
    meaning: "Große Vereinigung über eine indizierte Familie von Mengen, von A_1 bis A_n.",
    usage: "Endliche und abzählbare Vereinigungen, \\bigcup_{i=1}^{n} A_i oder \\bigcup_{n=1}^{\\infty} A_n, treten in der Maßtheorie bei der σ-Additivität, in der Wahrscheinlichkeitstheorie bei der Vereinigungsschranke und in der Topologie bei offenen Überdeckungen auf. \\bigcup ist der große Operator, \\cup die binäre Form für zwei Mengen, A \\cup B. In abgesetzten Formeln stehen die Grenzen darunter und darüber, im Fließtext rücken sie zur Seite. Indexmengen müssen nicht aus Zahlen bestehen: \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha ist bei beliebigen Überdeckungen üblich. Für eine Vereinigung paarweise disjunkter Mengen wechseln Sie zu \\bigsqcup oder nennen die Disjunktheit ausdrücklich.",
  },
  "big-intersection-with-index": {
    name: "Großer Durchschnitt mit Index",
    meaning: "Großer Durchschnitt über eine indizierte Familie von Mengen, A_1 bis A_n.",
    usage: "Durchschnitte indizierter Familien formulieren Aussagen wie das Intervallschachtelungsprinzip, \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing, oder definieren die von einem Mengensystem erzeugte σ-Algebra als Durchschnitt aller σ-Algebren, die es enthalten. Verwenden Sie \\bigcap für Familien und \\cap für zwei Mengen, A \\cap B. Die De-Morgan-Regel verbindet die beiden großen Operatoren: \\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c. In abgesetzten Formeln stehen die Indizes darunter und darüber; im Fließtext ergänzen Sie \\limits nur bei Bedarf. Ein Durchschnitt über eine leere Indexfamilie ist nur relativ zu einer Grundmenge sinnvoll, nennen Sie diese also.",
  },
  "big-wedge": {
    name: "Großes Und-Zeichen",
    meaning: "Großer Keiloperator für die Konjunktion vieler Aussagen oder für eine äußere Potenz.",
    usage: "In der Logik ist \\bigwedge_{i=1}^{n} \\varphi_i die Konjunktion von n Formeln, die n-stellige Form von \\wedge (auch \\land); die konjunktive Normalform ist ein \\bigwedge von Klauseln. In der Verbandstheorie bezeichnet es das Infimum einer Menge, in der Differentialgeometrie ist \\bigwedge^k V die k-te äußere Potenz eines Vektorraums. Die Grenzen verhalten sich wie bei \\sum: übereinander in abgesetzten Formeln, neben dem Zeichen im Fließtext. Verwechseln Sie es nicht mit dem griechischen Großbuchstaben \\Lambda, den manche Autoren in normaler Größe für äußere Potenzen verwenden. Der duale Operator ist \\bigvee.",
  },
  "big-vee": {
    name: "Großes Oder-Zeichen",
    meaning: "Großer Operator in V-Form für die Disjunktion vieler Aussagen oder das Supremum in einem Verband.",
    usage: "Die Logik verwendet \\bigvee_{i=1}^{n} \\varphi_i für eine n-fache Disjunktion als Verallgemeinerung von \\vee (auch \\lor); die disjunktive Normalform ist buchstäblich ein \\bigvee von \\bigwedge-Termen. In Ordnungstheorie und Verbänden ist \\bigvee S das Supremum einer Menge S. Als großer Operator setzt es seine Grenzen in abgesetzten Formeln übereinander und im Fließtext zur Seite. Verwenden Sie nicht den Buchstaben V oder ein \\vee mit Index als Ersatz, denn diese bleiben klein und positionieren keine Grenzen. In der algebraischen Topologie bezeichnet \\bigvee_{i} S^1 eine Einpunktvereinigung von Kreislinien, bei der punktierte Räume an ihren Basispunkten verklebt werden.",
  },
  "big-direct-sum": {
    name: "Große direkte Summe",
    meaning: "Großes eingekreistes Plus, die direkte Summe einer Familie von Räumen oder Moduln.",
    usage: "Ein diagonalisierbarer Operator zerlegt seinen Raum in Eigenräume, V = \\bigoplus_{\\lambda} E_\\lambda, und graduierte Ringe erscheinen als \\bigoplus_{n \\ge 0} R_n. \\oplus ist die binäre Form für zwei Summanden, U \\oplus W. In Informatik und Kryptographie bezeichnet \\bigoplus_{i} x_i oft das exklusive Oder vieler Bits mit demselben Zeichen. Die Grenzen werden in abgesetzten Formeln wie bei \\sum übereinandergesetzt. Beachten Sie, dass sich die direkte Summe unendlich vieler Moduln vom direkten Produkt \\prod unterscheidet, das unendlich viele von null verschiedene Komponenten erlaubt; wählen Sie den Operator, der zu Ihrer Konstruktion passt.",
  },
  "big-tensor-product": {
    name: "Großes Tensorprodukt",
    meaning: "Großes eingekreistes Mal, das Tensorprodukt einer Familie von Räumen oder Operatoren.",
    usage: "Im Quantencomputing schreibt man den Zustandsraum von n Qubits als \\bigotimes_{i=1}^{n} \\mathbb{C}^2, und die multilineare Algebra baut die Tensoralgebra T(V) = \\bigoplus_k V^{\\otimes k} auf. Die binäre Form \\otimes verknüpft zwei Faktoren, A \\otimes B, und bezeichnet bei Matrizen auch das Kronecker-Produkt. Als großer Operator erhält \\bigotimes in abgesetzten Formeln übereinandergesetzte Grenzen. Behalten Sie für wiederholte Tensorpotenzen eines Raums die Exponentenform V^{\\otimes n} bei; sie ist kompakter als ein großer Operator mit Grenzen. Nennen Sie den Grundring oder -körper, wenn er nicht offensichtlich ist, wie in \\otimes_R.",
  },
  "big-circle-dot": {
    name: "Großer eingekreister Punkt",
    meaning: "Großer Punkt im Kreis für ein n-stelliges elementweises oder symmetrisches Produkt.",
    usage: "\\bigodot ist die Version von \\odot als großer Operator. Im maschinellen Lernen ist \\odot das Hadamard-Produkt, also das elementweise Produkt, sodass \\bigodot_{i=1}^{n} \\mathbf{v}_i das elementweise Produkt vieler Vektoren bezeichnen kann; Arbeiten zur Tensorzerlegung verwenden \\odot für das Khatri-Rao-Produkt, und manche Algebrabücher für symmetrische Potenzen. Da die Bedeutung je nach Fachgebiet schwankt, definieren Sie es in Ihrem Notationsabschnitt. Die Grenzen werden in abgesetzten Formeln wie bei \\sum übereinandergesetzt. Verwechseln Sie es nicht mit \\bigcirc, einem großen leeren Kreis mit den Abständen eines binären Operators, der kein großer Operator ist.",
  },
  "big-square-union": {
    name: "Große disjunkte Vereinigung",
    meaning: "Großes eckiges Vereinigungszeichen für die disjunkte Vereinigung einer indizierten Familie von Mengen.",
    usage: "Die Schreibweise X = \\bigsqcup_{i \\in I} X_i drückt sowohl eine Vereinigung aus als auch, dass die Teile paarweise disjunkt sind, eine in Topologie, Maßtheorie und Kategorientheorie verbreitete Konvention. Die binäre Form ist \\sqcup, wie in A \\sqcup B. \\coprod ist eine Alternative, die manche Autoren für dieselbe kategorielle Konstruktion bevorzugen, während \\bigcup allein nichts über Disjunktheit aussagt. In der Bereichstheorie und der denotationellen Semantik bezeichnet \\bigsqcup dagegen die kleinste obere Schranke einer gerichteten Menge. Als großer Operator setzt es seine Grenzen in abgesetzten Formeln übereinander und im Fließtext zur Seite.",
  },
  "double-sum": {
    name: "Doppelsumme",
    meaning: "Zwei verschachtelte Summen, über i von 1 bis m und j von 1 bis n, etwa beim Aufaddieren der Einträge einer Matrix.",
    usage: "Doppelsummen addieren alle Einträge eines m×n-Feldes, wie in der Frobeniusnorm \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2. LaTeX setzt die beiden Operatoren mit passendem Abstand nebeneinander, ein manueller Zwischenraum ist also nicht nötig. Teilen sich beide Indizes eine Bedingung, ist ein einzelnes Zeichen wie \\sum_{i,j} oder \\sum_{1 \\le i < j \\le n} kompakter, und \\substack stapelt mehrere Bedingungen unter einem Sigma. Das Vertauschen der Reihenfolge endlicher Doppelsummen ist immer erlaubt, unendliche erfordern dagegen absolute Konvergenz oder nichtnegative Glieder.",
  },
  "indexed-sum": {
    name: "Summe über eine Indexmenge",
    meaning: "Summe über alle Elemente k einer Menge K statt über einen Zahlenbereich.",
    usage: "Summen über Indexmengen sind natürlich, wenn die Indexmenge kein Intervall ist: Summen über Primzahlen \\sum_{p \\le x}, über Teiler \\sum_{d \\mid n} oder über Knoten im Handschlaglemma \\sum_{v \\in V} \\deg v = 2|E|. Sie sind für jede endliche Menge sinnvoll und für unendliche, wenn die Reihe absolut konvergiert, da keine Reihenfolge vorausgesetzt wird. Für mehrere Bedingungen verwenden Sie \\substack, wie in \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}. In abgesetzten Formeln steht die Bedingung zentriert unter dem Sigma, halten Sie sie also kurz, um eine breite Lücke um den Operator zu vermeiden.",
  },
};

export default text;
