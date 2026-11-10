import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  "probability": {
    name: "Wahrscheinlichkeitsmaß",
    meaning: "Ein P mit Doppelstrich (Blackboard Bold), das auf Ereignisse angewendete Wahrscheinlichkeitsmaß.",
    usage: "Die maßtheoretische Wahrscheinlichkeitstheorie schreibt \\mathbb{P}(A) für die Wahrscheinlichkeit des Ereignisses A, mit Axiomen wie \\mathbb{P}(\\Omega) = 1. Der Doppelstrich unterscheidet das Maß von einem einfachen P, das eine Matrix, ein Polynom oder eine Partition bezeichnen könnte. Mit den Standardschriften funktioniert \\mathbb nur für Großbuchstaben; Kleinbuchstaben ergeben falsche Glyphen. Kombinieren Sie es mit \\mathbb{E} und einem aufrechten Var für einen einheitlichen Stil. Ein Wahrscheinlichkeitsraum ist das Tripel (\\Omega, \\mathcal{F}, \\mathbb{P}), mit kalligrafischem F für die Sigma-Algebra. Manche Autoren verwenden stattdessen \\Pr, einen vordefinierten aufrechten Operator.",
  },
  "probability-of-a": {
    name: "Wahrscheinlichkeit von A",
    meaning: "Wahrscheinlichkeit des Ereignisses A, geschrieben mit einem gewöhnlichen kursiven großen P.",
    usage: "Einführende Texte schreiben P(A) für die Wahrscheinlichkeit, dass A eintritt, mit 0 \\le P(A) \\le 1 und der Komplementregel P(A^c) = 1 - P(A). Das einfache kursive P ist in Ordnung, solange nichts anderes im Dokument diesen Buchstaben verwendet; andernfalls vermeiden \\Pr(A), ein vordefinierter aufrechter Operator, oder \\mathbb{P}(A) die Kollision. Bei großen Argumenten lassen Sie die Klammern mitwachsen: P\\left(\\bigcup_i A_i\\right). Tippt man Pr(A) ohne Backslash, erhält man ein kursives P und ein r als zwei multiplizierte Variablen. Bei bedingter Wahrscheinlichkeit steht \\mid in den Klammern, P(A \\mid B), statt eines bloßen senkrechten Strichs.",
  },
  "expectation": {
    name: "Erwartungswert",
    meaning: "Erwartungswert einer Zufallsvariablen X, geschrieben mit einem E mit Doppelstrich.",
    usage: "Der Erwartungswert ist der mit der Verteilung gewichtete Mittelwert von X, \\mathbb{E}[X] = \\sum_x x\\,p(x) bzw. \\int x f(x)\\,dx. Arbeiten zum maschinellen Lernen verwenden ihn überall, oft mit einem Index, der die Verteilung nennt: \\mathbb{E}_{x \\sim p}[\\ell(x)]. Eckige Klammern sind üblich, und \\left[ \\right] oder \\bigl[ \\bigr] helfen, wenn das Argument Brüche enthält. Das E mit Doppelstrich hebt den Operator von einer Energie E oder einer Kantenmenge E ab. Die Linearität \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y] gilt auch ohne Unabhängigkeit, weshalb er so freizügig eingesetzt wird.",
  },
  "expectation-e": {
    name: "Erwartungswert (E)",
    meaning: "Erwartungswert von X mit einfachem kursivem E, der Mittelwert seiner Verteilung.",
    usage: "Viele Statistiklehrbücher schreiben E[X] oder E(X) für den Erwartungswert, mit der Varianzformel \\operatorname{Var}(X) = E[X^2] - (E[X])^2 als Standardbeispiel. Ein kursives E kann mit anderen Bedeutungen wie einer Energie oder einem Ereignis namens E kollidieren, weshalb in Forschungsarbeiten \\mathbb{E} oder ein aufrechtes \\mathrm{E} verbreitet sind. Wenn Sie sich für die aufrechte Form entscheiden, definieren Sie \\DeclareMathOperator{\\E}{E}, damit Abstand und Schrift überall einheitlich bleiben. Der bedingte Erwartungswert folgt demselben Stil, E[X \\mid Y]. Welche Form Sie auch wählen, verwenden Sie sie von Anfang bis Ende konsequent.",
  },
  "variance": {
    name: "Varianz",
    meaning: "Varianz von X, die erwartete quadratische Abweichung vom Mittelwert, mit aufrechter Bezeichnung.",
    usage: "Die üblichen Identitäten sind \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 und \\text{Var}(aX + b) = a^2\\text{Var}(X). \\text{Var} sieht an den meisten Stellen richtig aus, doch in kursivem Satztext wird auch die Bezeichnung kursiv, weil \\text die umgebende Schrift übernimmt. \\operatorname{Var} oder ein \\DeclareMathOperator{\\Var}{Var} in der Präambel ist robuster und liefert korrekte Abstände. Manche Autoren schreiben stattdessen \\mathbb{V}, \\sigma^2 oder \\mathrm{Var}. Für unabhängige Variablen addieren sich die Varianzen, \\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y), im allgemeinen Fall kommt die doppelte Kovarianz hinzu.",
  },
  "covariance": {
    name: "Kovarianz",
    meaning: "Kovarianz von X und Y, die misst, wie die beiden Zufallsvariablen gemeinsam variieren.",
    usage: "Definiert durch \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y], liegt sie der Korrelation \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) und den Kovarianzmatrizen zugrunde, die meist \\Sigma geschrieben werden. Unabhängige Variablen haben Kovarianz null, die Umkehrung gilt im Allgemeinen jedoch nicht. Wie bei Var liefern \\operatorname{Cov} oder ein deklarierter Operator robustere Ausgabe als \\text{Cov}, das in Satzaussagen kursiv wird. Fügen Sie nach dem Komma einen schmalen Abstand ein, (X,\\,Y), wenn die Argumente gedrängt wirken. Für einen Zufallsvektor bezeichnet \\operatorname{Cov}(\\mathbf{X}) die vollständige Kovarianzmatrix. Ein positiver Wert bedeutet, dass sich die Variablen tendenziell in dieselbe Richtung bewegen.",
  },
  "normal-distribution": {
    name: "Normalverteilung",
    meaning: "Normalverteilung (Gauß-Verteilung) mit Erwartungswert mu und Varianz sigma Quadrat.",
    usage: "Schreiben Sie X \\sim \\mathcal{N}(\\mu, \\sigma^2), um auszudrücken, dass X normalverteilt ist; der zweite Parameter ist die Varianz, nicht die Standardabweichung, eine häufige Quelle von Verwechslungen beim Lesen von Softwaredokumentation. Die multivariate Form ist \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma) mit einer Kovarianzmatrix. \\mathcal liefert das geschwungene N und funktioniert nur bei Großbuchstaben. Die Dichte \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)} folgt oft in einer abgesetzten Formel. Die Standardnormalverteilung ist \\mathcal{N}(0, 1), ihre Verteilungsfunktion schreibt man meist \\Phi.",
  },
  "independence-symbol-double-perp": {
    name: "Unabhängigkeitssymbol (doppeltes perp)",
    meaning: "Zwei mit negativen Abständen überlagerte \\perp-Zeichen, das übliche von Hand gebaute Symbol für stochastische Unabhängigkeit.",
    usage: "Stochastiker schreiben X \\perp\\!\\!\\!\\perp Y für unabhängige Zufallsvariablen und X \\perp\\!\\!\\!\\perp Y \\mid Z für bedingte Unabhängigkeit, eine Notation, die durch grafische Modelle und kausale Inferenz verbreitet wurde. Drei negative schmale Abstände \\! ziehen das zweite \\perp fast auf das erste und erzeugen ein umgedrehtes T mit doppeltem Schaft. Da es von Hand zusammengesetzt ist, variiert sein genaues Aussehen leicht zwischen Schriften; definieren Sie ein Makro wie \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}}, damit es auch Relationsabstand erhält. Manche Texte verwenden ein einfaches \\perp für Unabhängigkeit, doch das kollidiert mit Orthogonalität.",
  },
  "conditional": {
    name: "Bedingungsstrich",
    meaning: "Senkrechter Strich mit Relationsabstand, gelesen als „gegeben“, „für die gilt“ oder „teilt“.",
    usage: "Anders als ein einfaches | fügt \\mid auf beiden Seiten Abstand ein, genau das, was bedingte Wahrscheinlichkeit P(A \\mid B), beschreibende Mengenschreibweise \\{x \\mid x > 0\\} und Teilbarkeit 3 \\mid 12 brauchen. Verwenden Sie | oder \\vert für Beträge, wo kein zusätzlicher Abstand gewünscht ist, und \\lvert ... \\rvert, wenn der Strich etwas einklammert. In der Mengenschreibweise mit hohem Inhalt lässt \\middle| zwischen \\left\\{ und \\right\\} den Strich passend mitwachsen. Seine Negation ist \\nmid für „teilt nicht“. Viele Autoren verwenden in der Mengenschreibweise stattdessen einen Doppelpunkt, was Verwechslungen vermeidet, wenn auch Teilbarkeit vorkommt.",
  },
  "given": {
    name: "Bedingte Wahrscheinlichkeit",
    meaning: "Bedingte Wahrscheinlichkeit von A unter der Bedingung, dass das Ereignis B bereits eingetreten ist.",
    usage: "Definiert durch P(A \\mid B) = P(A \\cap B)/P(B) für P(B) > 0, ist sie der Grundbaustein des Satzes von Bayes. Verwenden Sie immer \\mid statt |: Der bloße Strich erhält keinen Abstand, und der Ausdruck wirkt gedrängt. Bei hohen Argumenten schreiben Sie P\\left(A \\,\\middle|\\, B\\right), damit der Strich mit den Klammern wächst. Bei mehrfacher Bedingung, P(A \\mid B, C), folgt nach dem Strich ein Komma statt eines zweiten Strichs. In der Likelihood-Schreibweise folgt p(x \\mid \\theta) derselben Konvention, und manche Statistiker verwenden ein Semikolon, p(x; \\theta), wenn \\theta ein fester Parameter und keine Zufallsvariable ist.",
  },
  "chi-squared": {
    name: "Chi-Quadrat",
    meaning: "Chi-Quadrat: der griechische Buchstabe Chi zum Quadrat, Name einer Verteilung und einer Teststatistik.",
    usage: "Pearsons Statistik \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} vergleicht beobachtete und erwartete Häufigkeiten, und \\chi^2_k bezeichnet die Verteilung mit k Freiheitsgraden. Beachten Sie, dass \\chi der griechische Buchstabe Chi ist; tippen Sie kein x, das zwar ähnlich aussieht, aber eine andere Glyphe ist und anders auf der Grundlinie sitzt. Um Freiheitsgrade und Quadrat zugleich anzubringen, schreiben Sie \\chi^2_{k} oder \\chi_{k}^{2}; LaTeX setzt beides identisch übereinander. Im Ergebnisteil berichten Sie Tests als \\chi^2(2) = 6.1, p = 0.047, gemäß dem Stilleitfaden Ihres Fachs.",
  },
  "binomial-coefficient": {
    name: "Binomialkoeffizient",
    meaning: "Binomialkoeffizient „n über k“, die Anzahl der k-elementigen Teilmengen einer n-elementigen Menge.",
    usage: "Er erscheint im binomischen Lehrsatz (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}, in der Pascalschen Regel und in der Binomialverteilung P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}. \\binom passt seine Größe an den aktuellen Stil an; erzwingen Sie die große Form im Fließtext mit \\dbinom oder die kleine in abgesetzten Formeln mit \\tbinom. Die ältere Syntax {n \\choose k} funktioniert im Stil von Plain TeX noch, wird in LaTeX-Dokumenten aber nicht empfohlen. Manche Texte schreiben C(n,k) oder ein vorangestelltes nCk; in Forschungsarbeiten ist die geklammerte Stapelform Standard.",
  },
  "factorial": {
    name: "Fakultät",
    meaning: "Fakultät von n, das Produkt aller positiven ganzen Zahlen bis n.",
    usage: "Für n! braucht man keinen Befehl: Das Ausrufezeichen erscheint im Mathematikmodus direkt, mit 0! = 1 per Konvention. Fakultäten durchziehen Kombinatorik und Analysis, von \\binom{n}{k} = \\frac{n!}{k!(n-k)!} bis zu Taylor-Koeffizienten \\frac{f^{(n)}(a)}{n!}. Achten Sie in Produkten wie n!\\,m! auf den Abstand, wo ein schmaler Abstand verhindert, dass das Zeichen am nächsten Buchstaben klebt, und klammern Sie zusammengesetzte Argumente ein, (n+1)!. Verwechseln Sie das Zeichen nicht mit \\!, einem negativen schmalen Abstand. Verwandte Schreibweisen sind die Doppelfakultät n!! und die Stirlingsche Formel n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n.",
  },
};

export default text;
