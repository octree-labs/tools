import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "Kombination (nCr)",
    meaning: "Anzahl der Möglichkeiten, k Elemente aus n ohne Beachtung der Reihenfolge auszuwählen, gelesen „n über k“.",
    usage: "Der Wert ist C(n, k) = \\frac{n!}{k!(n-k)!} und stimmt mit dem Binomialkoeffizienten \\binom{n}{k} überein, der in der Mathematik meist bevorzugten Schreibweise. \\binom passt seine Größe dem Kontext an; \\dbinom erzwingt die Display-Größe, \\tbinom die Textgröße. Vermeiden Sie in LaTeX die reine TeX-Syntax {n \\choose k}, vor der amsmath warnt. Weitere Schreibweisen sind nCr, {}^nC_k und C^k_n; die letzte ist in französischen Texten mit vertauschten Indizes verbreitet, prüfen Sie also die Konvention. Die Pascalsche Regel C(n, k) = C(n-1, k-1) + C(n-1, k) erzeugt das Pascalsche Dreieck.",
  },
  "permutation-npr": {
    name: "Permutation (nPr)",
    meaning: "Anzahl der geordneten Anordnungen von k Elementen, die aus n verschiedenen Elementen ausgewählt werden, gelesen „n permutiert k“.",
    usage: "Permutationen zählen geordnete Auswahlen: P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1), also P(5, 2) = 20. Das entspricht der fallenden Faktoriellen (n)_k oder n^{\\underline{k}} und hängt mit Kombinationen über P(n, k) = k!\\,C(n, k) zusammen. Als Alternativen begegnen Ihnen nPr, {}^nP_k und A^k_n (Arrangements) in französischen und chinesischen Texten. Da P(\\cdot) auch eine Wahrscheinlichkeit bezeichnet, kann P(n, k) in einem Kapitel über Wahrscheinlichkeit missverstanden werden; der Wechsel zu (n)_k oder n^{\\underline{k}} vermeidet das. Verwenden Sie \\cdots zwischen den Faktoren eines Produkts.",
  },
  "multinomial": {
    name: "Multinomialkoeffizient",
    meaning: "Multinomialkoeffizient: Anzahl der Möglichkeiten, n Elemente in Gruppen der Größen k_1 bis k_m aufzuteilen, wobei sich die Größen zu n summieren.",
    usage: "Der Wert ist n! / (k_1!\\,k_2!\\cdots k_m!) mit k_1 + \\cdots + k_m = n, und er liefert die Koeffizienten im Multinomialsatz, (x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}. Er zählt die verschiedenen Anordnungen eines Wortes mit wiederholten Buchstaben, zum Beispiel 11!/(4!\\,4!\\,2!\\,1!) für MISSISSIPPI. Die Konstruktion verwendet \\binom mit einer Kommaliste im unteren Feld; der Binomialfall \\binom{n}{k} ist der Spezialfall \\binom{n}{k, n-k}. Setzen Sie \\ldots zwischen Kommas, nicht \\cdots.",
  },
  "falling-factorial": {
    name: "Fallende Faktorielle",
    meaning: "Fallende Faktorielle in kombinatorischer Schreibweise: n(n-1)...(n-k+1), das Produkt von k absteigenden Faktoren.",
    usage: "(n)_k zählt die injektiven Abbildungen einer k-Menge in eine n-Menge und ist für ganze Zahlen gleich n!/(n-k)!. Achtung: Diese Pochhammer-artige Schreibweise ist mehrdeutig, denn in der Theorie der speziellen Funktionen bedeutet (a)_n die steigende Faktorielle. Knuths Schreibweise, n^{\\underline{k}} für die fallende und n^{\\overline{k}} für die steigende, beseitigt die Mehrdeutigkeit und wird in Concrete Mathematics verwendet; sie wird mit \\underline und \\overline im Exponenten gesetzt. Fallende Faktorielle lassen sich über Stirling-Zahlen in gewöhnliche Potenzen umrechnen: x^n = \\sum_k S(n,k)(x)_k. Definieren Sie Ihre Schreibweise in der Arbeit ausdrücklich.",
  },
  "rising-factorial": {
    name: "Steigende Faktorielle",
    meaning: "Steigende Faktorielle, geschrieben mit einem eingeklammerten Exponenten: n(n+1)...(n+k-1).",
    usage: "Diese in Kombinatorik und Wahrscheinlichkeitstheorie verbreitete Schreibweise bezeichnet die steigende Faktorielle n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n). Sie ist mehrdeutig: In der Analysis ist f^{(k)} die k-te Ableitung, und manche Autoren verwenden x^{(k)} stattdessen für die fallende Faktorielle. Knuths n^{\\overline{k}} oder das Pochhammer-Symbol (n)_k aus der Theorie der speziellen Funktionen sind Alternativen, wobei Letzteres mit der kombinatorischen fallenden Faktoriellen kollidiert. Die Klammern müssen innerhalb der Exponentenklammern stehen, ^{(k)}. Steigende Faktorielle zählen die geordneten Platzierungen von k Kugeln in n geordnete Röhren.",
  },
  "stirling-first-kind": {
    name: "Stirling-Zahl erster Art",
    meaning: "Vorzeichenlose Stirling-Zahl erster Art: Permutationen von n Elementen mit genau k Zyklen, in Eckklammer-Schreibweise.",
    usage: "\\genfrac hat sechs Argumente: linkes Begrenzungszeichen, rechtes Begrenzungszeichen, Linienstärke, Stil, Zähler, Nenner. Mit der Linienstärke 0pt verschwindet der Bruchstrich, und es entsteht die gestapelte Eckklammer-Schreibweise aus Concrete Mathematics. Diese Zahlen erfüllen die Rekursion {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1} und summieren sich über k zu n!. Statt den Aufruf mit sechs Argumenten zu wiederholen, definieren Sie ein Makro wie \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}. Das leere vierte Argument lässt die Größe dem Kontext folgen; verwenden Sie 0 für Display- oder 1 für Textstil.",
  },
  "stirling-second-kind": {
    name: "Stirling-Zahl zweiter Art",
    meaning: "Stirling-Zahl zweiter Art: Anzahl der Zerlegungen einer n-elementigen Menge in k nichtleere Blöcke, in geschweifter Klammerschreibweise.",
    usage: "Hier setzt \\genfrac die maskierten geschweiften Klammern \\{ und \\} als Begrenzungszeichen mit einem 0pt-Strich und erzeugt so die von Knuth populär gemachte Klammerschreibweise. Die Zahlen erfüllen S(n+1, k) = k\\,S(n, k) + S(n, k-1), summieren sich über k zur Bell-Zahl B_n und rechnen Potenzen in fallende Faktorielle um: x^n = \\sum_k {n \\brace k}(x)_k. Da die geschweiften Klammern maskiert werden müssen, ist ein fehlender Backslash der übliche Kompilierfehler. Verpacken Sie das Ganze in ein Makro wie \\stirlingII{n}{k}. Die alternative Schreibweise S(n, k) ist einfacher zu tippen und in Informatiktexten verbreitet.",
  },
  "bell-number": {
    name: "Bell-Zahl",
    meaning: "Bell-Zahl B_n: die Gesamtzahl der Möglichkeiten, eine Menge aus n Elementen in nichtleere Blöcke zu zerlegen.",
    usage: "Die Bell-Zahlen beginnen mit 1, 1, 2, 5, 15, 52, 203 und sind gleich der Summe der Stirling-Zahlen zweiter Art, B_n = \\sum_k S(n, k). Sie erfüllen B_{n+1} = \\sum_k \\binom{n}{k} B_k sowie die Dobinski-Formel B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}. Ein Bezeichnungskonflikt, auf den Sie achten sollten: B_n bezeichnet auch die Bernoulli-Zahlen, die in der Euler-Maclaurin-Formel und bei Zetawerten auftreten, sodass Analytiker eine der beiden umbenennen müssen. Geschweifte Klammern sind nötig, wenn der Index ein Ausdruck ist, wie in B_{n+1}. Sie sind die Momente einer Poisson-Verteilung mit Erwartungswert 1.",
  },
  "fibonacci": {
    name: "Fibonacci-Zahl",
    meaning: "Fibonacci-Zahl F_n, definiert durch F_0 = 0, F_1 = 1 und F_n = F_{n-1} + F_{n-2}.",
    usage: "Die Fibonacci-Zahlen beginnen mit 0, 1, 1, 2, 3, 5, 8, 13 und haben die geschlossene Form F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}, die Formel von Binet, wobei \\varphi = (1+\\sqrt5)/2 der goldene Schnitt ist. Sie zählen die Pflasterungen eines 1 \\times n-Streifens mit Quadraten und Dominosteinen (F_{n+1} davon) und treten bei der Analyse des euklidischen Algorithmus und bei Fibonacci-Heaps auf. Manche Texte beginnen die Indizierung bei F_1 = F_2 = 1, geben Sie also Ihre Anfangswerte an. Verwenden Sie für den goldenen Schnitt wie die meisten Autoren \\varphi; \\phi ist die gerade Variante. Für F_{n-1} sind geschweifte Klammern nötig.",
  },
  "partition": {
    name: "Partitionsfunktion",
    meaning: "Partitionsfunktion p(n): die Anzahl der Möglichkeiten, n ohne Beachtung der Reihenfolge als Summe positiver ganzer Zahlen zu schreiben.",
    usage: "Zum Beispiel ist p(4) = 5, denn 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. Eulers erzeugende Funktion ist \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}, und Hardy und Ramanujan fanden die Asymptotik p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}. Zu Ramanujans Kongruenzen gehört p(5k+4) \\equiv 0 \\pmod 5. Das kleine p kollidiert mit der Schreibweise für Wahrscheinlichkeitsdichten und für Primzahlen, definieren Sie es also in gemischten Kontexten. Eingeschränkte Varianten schreibt man p_k(n) oder p(n, k) für Partitionen in höchstens k Teile.",
  },
  "derangement": {
    name: "Fixpunktfreie Permutation",
    meaning: "Anzahl D_n der fixpunktfreien Permutationen: Permutationen von n Elementen, bei denen kein Element an seiner ursprünglichen Position bleibt.",
    usage: "D_n zählt die Permutationen ohne Fixpunkte und beginnt mit 1, 0, 1, 2, 9, 44, 265. Das Inklusions-Exklusions-Prinzip liefert D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}, sodass D_n die zu n!/e nächstgelegene ganze Zahl ist und die Wahrscheinlichkeit einer zufälligen fixpunktfreien Permutation gegen 1/e strebt. Zu den Rekursionen gehört D_n = (n-1)(D_{n-1} + D_{n-2}). Die klassische Geschichte dazu ist das Hutproblem. Dieselbe Zahl wird auch !n geschrieben, die Subfakultät; D_n liest sich im Fließtext leichter. Beachten Sie, dass D_n in der Algebra auch die Diedergruppe bezeichnet, stellen Sie das also klar, wenn beides vorkommt.",
  },
  "double-factorial": {
    name: "Doppelfakultät",
    meaning: "Doppelfakultät: das Produkt aller ganzen Zahlen von n abwärts bis 1 oder 2, die dieselbe Parität wie n haben.",
    usage: "Für ungerades n ist n!! = n(n-2)\\cdots 3 \\cdot 1, also 7!! = 105; für gerades n endet sie bei 2, also 8!! = 384. Sie ist nicht (n!)!, eine häufige Fehldeutung, daher hilft eine kurze Definition. Zu den Identitäten gehören (2n)!! = 2^n n! und (2n-1)!! = \\frac{(2n)!}{2^n n!}, was die perfekten Matchings auf 2n Punkten zählt und in Gaußschen Momenten auftritt, \\mathbb{E}[X^{2n}] = (2n-1)!! für eine standardnormalverteilte Größe. In TeX ist ! ein schließendes Symbol, n!! braucht also keinen besonderen Abstand. Nach Konvention gilt 0!! = (-1)!! = 1.",
  },
  "subfactorial": {
    name: "Subfakultät",
    meaning: "Subfakultät von n, eine Schreibweise mit vorangestelltem Ausrufezeichen für die Anzahl der fixpunktfreien Permutationen von n Objekten.",
    usage: "!n ist gleich D_n, der Anzahl der Permutationen ohne Fixpunkte: !4 = 9 und !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor für n \\geq 1. Das vorangestellte Ausrufezeichen ist kompakt, aber leicht falsch zu lesen, besonders nach einer Variablen, wo m!n wie m Fakultät mal n aussieht. D_n oder eine ausdrückliche Klammerung verhindert das. In TeX gehört das Ausrufezeichen zur Klasse der schließenden Symbole, sodass es nach einer binären Relation wie = ohne zusätzlichen Abstand gesetzt wird, wie gewünscht. Manche Autoren verwenden das umgedrehte Ausrufezeichen oder n\\text{¡}, diese Schreibweise ist aber selten.",
  },
  "pochhammer": {
    name: "Pochhammer-Symbol",
    meaning: "Pochhammer-Symbol: in der Theorie der speziellen Funktionen die steigende Faktorielle a(a+1)...(a+n-1).",
    usage: "In der Literatur zu hypergeometrischen und speziellen Funktionen gilt (a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a) mit (a)_0 = 1. Es ist der Baustein der Reihe {}_pF_q, zum Beispiel {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}. Kombinatoriker verwenden dasselbe (x)_n für die fallende Faktorielle, das ist also einer der berüchtigtsten Bezeichnungskonflikte; DLMF und die meisten Nachschlagewerke zu speziellen Funktionen verwenden die steigende Bedeutung. Knuths a^{\\overline{n}} ist eindeutig, wenn Ihr Publikum gemischt ist. Die Klammern sind hier gewöhnliche Klammern, deren Größe sich nach dem Argument richtet.",
  },
};

export default text;
