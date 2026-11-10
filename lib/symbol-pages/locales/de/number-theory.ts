import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "Nichtteilbarkeit",
    meaning: "Durchgestrichener senkrechter Strich, der aussagt, dass eine ganze Zahl eine andere nicht teilt.",
    usage: "Zahlentheoretiker schreiben 3 \\nmid 10 und verwenden das Zeichen in Voraussetzungen wie beim kleinen Satz von Fermat: Ist p \\nmid a, dann gilt a^{p-1} \\equiv 1 \\pmod p. Es ist die Negation von \\mid und hat dieselben Relationsabstände; \\not\\mid erzeugt einen oft schlecht platzierten Schrägstrich, bevorzugen Sie daher \\nmid. Vermeiden Sie ein einfaches | mit einem von Hand getippten Schrägstrich. In der Informatik erscheint es in Bedingungen an Schrittweiten, Perioden und Hashtabellengrößen, etwa k \\nmid n. Verwandte vorgefertigte Negationen sind \\nparallel und \\nleq.",
  },
  "gcd": {
    name: "Größter gemeinsamer Teiler",
    meaning: "Größter gemeinsamer Teiler von a und b, die größte ganze Zahl, die beide teilt.",
    usage: "\\gcd ist ein vordefinierter Operator, wird also aufrecht gesetzt und kann wie \\lim im Display-Stil Grenzen darunter tragen. Das Lemma von Bézout besagt, dass \\gcd(a, b) = ax + by für gewisse ganze Zahlen x und y gilt, und a und b sind teilerfremd, wenn \\gcd(a, b) = 1 ist. Im Deutschen ist auch die Schreibweise ggT(a, b) verbreitet, und viele zahlentheoretische Arbeiten lassen den Namen weg und schreiben (a, b), was kompakt ist, aber mit geordneten Paaren und offenen Intervallen kollidiert. Der euklidische Algorithmus beruht auf \\gcd(a, b) = \\gcd(b, a \\bmod b), wobei \\bmod Abstände eines binären Operators liefert. Für das kleinste gemeinsame Vielfache gibt es keinen passenden eingebauten Befehl.",
  },
  "lcm": {
    name: "Kleinstes gemeinsames Vielfaches",
    meaning: "Kleinstes gemeinsames Vielfaches von a und b, die kleinste positive ganze Zahl, die von beiden geteilt wird.",
    usage: "Anders als für \\gcd gibt es keinen eingebauten Befehl \\lcm, deshalb verwendet dieser Eintrag \\text. Die Präambelzeile \\DeclareMathOperator{\\lcm}{lcm} ergibt einen echten Operator mit passenden Abständen, im Fließtext können Sie auch \\operatorname{lcm} verwenden. Die Identität \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| verbindet beide. Kleinste gemeinsame Vielfache treten beim Addieren von Brüchen mit verschiedenen Nennern auf, bei der Periode kombinierter Zyklen und bei der Ordnung eines Elements einer Produktgruppe. Im Deutschen schreibt man oft kgV(a, b), manche Texte auch [a, b] als Gegenstück zu (a, b) für den ggT.",
  },
  "modulo": {
    name: "Modulo",
    meaning: "Eingeklammertes „mod n“ nach einer Kongruenz, das den Modul angibt.",
    usage: "Schreiben Sie a \\equiv b \\pmod{n}, um auszudrücken, dass n die Differenz a - b teilt. \\pmod fügt die Klammern und großzügigen Abstand davor ein, was zu abgesetzten Kongruenzen passt. Seine Verwandten dienen anderen Fällen: \\bmod ist der binäre Operator für einen Rest, wie in a \\bmod n = r; \\mod liefert das Wort mod ohne Klammern; und \\pod liefert nur die Klammern. Im Fließtext kann der große Abstand, den \\pmod einfügt, übertrieben wirken, daher wechseln manche Autoren zu \\bmod oder einem eigenen Makro. Formulierungen des chinesischen Restsatzes verketten mehrere Kongruenzen mit verschiedenen Moduln.",
  },
  "euler-phi": {
    name: "Eulersche Phi-Funktion",
    meaning: "Eulersche Phi-Funktion: die Anzahl der ganzen Zahlen von 1 bis n, die zu n teilerfremd sind, geschrieben mit dem geschwungenen Phi.",
    usage: "Der Satz von Euler a^{\\varphi(n)} \\equiv 1 \\pmod n für \\gcd(a, n) = 1 und die Produktformel \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) sind die typischen Vorkommen. \\varphi ergibt die offene, geschwungene Form, \\phi dagegen einen Kreis mit geradem Strich; beide bezeichnen dieselbe Funktion, und die Wahl ist eine Frage des Hausstils. Viele zahlentheoretische Texte wählen \\varphi, damit \\phi für andere Zwecke frei bleibt, etwa den goldenen Schnitt oder einen Winkel. Die Schlüsselerzeugung bei RSA verwendet \\varphi(pq) = (p-1)(q-1).",
  },
  "phi-function": {
    name: "Phi-Funktion",
    meaning: "Eulersche Phi-Funktion, geschrieben mit dem Phi mit geradem Strich statt der geschwungenen Variante.",
    usage: "Viele Lehrbücher schreiben die Phi-Funktion als \\phi(n), etwa \\phi(p) = p - 1 für eine Primzahl p und \\phi(p^k) = p^k - p^{k-1}. In der Standardschrift Computer Modern ist \\phi ein Kreis mit senkrechtem Strich, während \\varphi die geschwungene Form ist. Beide bezeichnen dieselbe Funktion, wählen Sie also eine und bleiben Sie konsequent. Kommen auch der goldene Schnitt, ein Winkel oder ein Potential vor, reservieren Sie \\phi für die eine Bedeutung und \\varphi für die andere. Die Multiplikativität, \\phi(mn) = \\phi(m)\\phi(n) für teilerfremde m und n, ist eine häufige abgesetzte Formel.",
  },
  "prime": {
    name: "Primzahl",
    meaning: "Kleines kursives p, der übliche Buchstabe für eine Primzahl in der Zahlentheorie.",
    usage: "Konventionell bezeichnen p und für eine zweite Primzahl q Primzahlen, sodass Aussagen wie „für jede Primzahl p“ oder über p indizierte Summen und Produkte kaum weiterer Erklärung bedürfen. Das Euler-Produkt \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} ist der klassische Fall, in dem der Index stillschweigend über Primzahlen läuft. p im Mathematikmodus ergibt den kursiven Buchstaben; setzen Sie es auch im Fließtext in den Mathematikmodus, damit es zu den abgesetzten Formeln passt. Um Verwechslungen mit Wahrscheinlichkeiten oder p-Werten zu vermeiden, legen Sie die Konvention früh fest. Primzahlpotenzen schreibt man p^k, die p-adischen Zahlen \\mathbb{Q}_p.",
  },
  "prime-notation": {
    name: "n-te Primzahl",
    meaning: "Indiziertes p_n, das die n-te Primzahl bezeichnet, sodass p_1 = 2, p_2 = 3, p_3 = 5.",
    usage: "Folgen von Primzahlen werden so indiziert, etwa in Euklids Beweis, wo p_1 p_2 \\cdots p_n + 1 einen Primfaktor außerhalb der Liste hat, und in der Asymptotik p_n \\sim n\\ln n aus dem Primzahlsatz. Mehrzeichige Indizes brauchen Klammern, p_{n+1}, sonst wird nur das n tiefgestellt. Das Bertrandsche Postulat wird zu p_{n+1} < 2p_n. Die Primfakultät, das Produkt der ersten n Primzahlen, schreibt man oft p_n\\#. Die Primzahlzählfunktion \\pi(x) ist im Wesentlichen die Umkehrung von n \\mapsto p_n.",
  },
  "legendre-symbol": {
    name: "Legendre-Symbol",
    meaning: "Legendre-Symbol (a/p): 1, -1 oder 0, je nachdem, ob a ein quadratischer Rest modulo p ist.",
    usage: "Für eine ungerade Primzahl p ist \\left(\\frac{a}{p}\\right) gleich 1, wenn a ein von null verschiedenes Quadrat modulo p ist, -1, wenn nicht, und 0, wenn p \\mid a. Das quadratische Reziprozitätsgesetz ist die berühmte Identität, die \\left(\\frac{p}{q}\\right) und \\left(\\frac{q}{p}\\right) über das Vorzeichen (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}} verknüpft. \\left( \\right) passt die Klammern automatisch der Größe des Bruchs an. Verwenden Sie nicht \\binom, das den Bruchstrich weglässt, den das Symbol braucht; \\genfrac{(}{)}{}{}{a}{p} ist eine gleichwertige Alternative. Das Euler-Kriterium berechnet es als a^{(p-1)/2} modulo p.",
  },
  "integer-part": {
    name: "Ganzzahliger Anteil",
    meaning: "Eckige Klammern um x, eine ältere Notation für den ganzzahligen Anteil bzw. die Abrundung von x.",
    usage: "Die klassische Zahlentheorie und viele Olympiadetexte schreiben [x] für die größte ganze Zahl, die x nicht übersteigt, etwa in der Legendre-Formel für den Exponenten von p in n!, die [n/p^k] über k \\ge 1 summiert. Moderne Texte bevorzugen das eindeutige \\lfloor x \\rfloor, denn eckige Klammern gruppieren auch Ausdrücke, bezeichnen abgeschlossene Intervalle und dienen als Iverson-Klammern. Wenn Sie [x] beibehalten, definieren Sie es ausdrücklich. Für negative Zahlen unterscheiden sich Abrundung und Abschneiden: \\lfloor -2.5 \\rfloor = -3, während das Abschneiden in Richtung null -2 ergibt.",
  },
  "fractional-part": {
    name: "Gebrochener Anteil",
    meaning: "Gebrochener Anteil von x, definiert als x minus seine Abrundung, geschrieben mit maskierten geschweiften Klammern.",
    usage: "Da einfache geschweifte Klammern in LaTeX nur gruppieren, müssen die sichtbaren als \\{ und \\} maskiert werden. Der gebrochene Anteil erfüllt x = \\lfloor x \\rfloor + \\{x\\} mit 0 \\le \\{x\\} < 1 und erscheint in Gleichverteilungsresultaten wie dem Satz von Weyl, nach dem \\{n\\alpha\\} für irrationales \\alpha gleichverteilt ist. Dieselben Klammern bezeichnen auch Mengen, sodass \\{x\\} als einelementige Menge mit x gelesen werden könnte; definieren Sie die Notation oder schreiben Sie \\operatorname{frac}(x). Für höhere Inhalte verwenden Sie \\left\\{ ... \\right\\}.",
  },
  "sum-of-divisors": {
    name: "Teilersummenfunktion",
    meaning: "Teilersummenfunktion: die Summe aller positiven Teiler von n.",
    usage: "\\sigma(n) = \\sum_{d \\mid n} d, also \\sigma(6) = 1 + 2 + 3 + 6 = 12. Eine Zahl ist genau dann vollkommen, wenn \\sigma(n) = 2n gilt, und die allgemeine Form \\sigma_k(n) = \\sum_{d \\mid n} d^k enthält die Teileranzahl als \\sigma_0. Die Funktion ist multiplikativ, mit \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1} für Primzahlpotenzen, und lässt sich daher aus einer Faktorisierung berechnen. Das kleine \\sigma bedeutet auch Standardabweichung, in interdisziplinären Arbeiten hilft daher eine kurze Anmerkung. Das große \\Sigma hat hiermit nichts zu tun.",
  },
  "mobius-function": {
    name: "Möbius-Funktion",
    meaning: "Möbius-Funktion: 0, wenn das Quadrat einer Primzahl n teilt, sonst (-1)^k bei k Primfaktoren.",
    usage: "Ihre Hauptrolle ist die Möbius-Inversion: Ist g(n) = \\sum_{d \\mid n} f(d), dann gilt f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d). Außerdem erfüllt sie \\sum_{d \\mid n} \\mu(d) = 0 für n > 1, und ihre Dirichlet-Reihe ist der Kehrwert der Zetafunktion, \\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}. Der Buchstabe \\mu ist stark überladen, er bedeutet in der Statistik einen Mittelwert und in der Analysis ein Maß, führen Sie ihn daher ausdrücklich ein. Verwenden Sie im Mathematikmodus das griechische \\mu, niemals ein lateinisches u als Ersatz.",
  },
  "number-of-divisors": {
    name: "Teileranzahlfunktion",
    meaning: "Teileranzahlfunktion: wie viele positive Teiler n hat.",
    usage: "d(n) = \\sum_{d \\mid n} 1, also d(12) = 6. Für n = p_1^{a_1}\\cdots p_k^{a_k} zeigt die Formel d(n) = (a_1+1)\\cdots(a_k+1), dass sie multiplikativ ist. Andere übliche Bezeichnungen sind \\tau(n) und \\sigma_0(n), prüfen Sie also, welche Ihre Quelle verwendet. Das Dirichletsche Teilerproblem untersucht die mittlere Größenordnung, \\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x}). Vorsicht: Der Buchstabe d ist auch die übliche Teilervariable in solchen Summen, bevorzugen Sie daher \\tau(n), wenn beides in einer Formel vorkäme.",
  },
};

export default text;
