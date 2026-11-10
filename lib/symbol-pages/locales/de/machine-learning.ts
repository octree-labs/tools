import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  "expectation": {
    name: "Erwartungswert",
    meaning: "Doppelt gestrichenes E, die Standardnotation für den Erwartungswert einer Zufallsvariablen.",
    usage: "Der Erwartungswert ist in Wahrscheinlichkeitstheorie und maschinellem Lernen allgegenwärtig: \\mathbb{E}[X] = \\sum_x x\\,p(x), das Risiko \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)] oder die Varianz als \\mathbb{E}[X^2] - \\mathbb{E}[X]^2. Setzen Sie die Verteilung in einen Index, um die Quelle des Zufalls deutlich zu machen. Ältere Texte verwenden ein einfaches aufrechtes E oder \\operatorname{E}; beides ist bei konsequenter Verwendung in Ordnung. Beachten Sie, dass \\mathbb nur Großbuchstaben bereitstellt, \\mathbb{e} ergibt also Unsinn. Verwenden Sie eckige Klammern für das Argument und \\left[ \\right], wenn es hohe Brüche enthält. Ein Makro wie \\newcommand{\\E}{\\mathbb{E}} hält die Notation einheitlich.",
  },
  "kl-divergence": {
    name: "KL-Divergenz",
    meaning: "Kullback-Leibler-Divergenz von Q bezüglich P: der erwartete zusätzliche Log-Verlust, wenn Q anstelle der wahren Verteilung P verwendet wird.",
    usage: "Die KL-Divergenz ist D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)} und zentral für variationelle Inferenz, die ELBO und die Regularisierung von Strategien im bestärkenden Lernen. Sie ist nicht symmetrisch, die Reihenfolge von P und Q spielt also eine Rolle, und der Doppelstrich trennt beide. \\| ist ein gewöhnliches Symbol ohne umgebende Abstände, was gedrängt wirken kann; viele Autoren schreiben \\parallel, das Relationsabstände erhält, oder fügen auf beiden Seiten \\, ein. \\text{KL} im Index übernimmt die umgebende Schrift, daher ist \\mathrm{KL} in kursivem Satztext sicherer. Für große Brüche im Inneren verwenden Sie \\left( \\right).",
  },
  "kl-divergence-short-form": {
    name: "KL-Divergenz (Kurzform)",
    meaning: "Kurzschreibweise für die Kullback-Leibler-Divergenz zwischen den Verteilungen P und Q, ohne das vorangestellte D.",
    usage: "Viele Arbeiten zum maschinellen Lernen lassen das D weg und schreiben \\text{KL}(P \\| Q), besonders in Verlustfunktionen wie dem VAE-Ziel mit dem Term \\text{KL}(q_\\phi(z|x) \\| p(z)). Die Bedeutung ist exakt dieselbe wie bei D_{\\text{KL}}(P \\| Q), einschließlich der Asymmetrie: Die Vorwärts-KL deckt tendenziell die gesamte Masse ab, die Rückwärts-KL sucht Moden. Da \\text{} die Schrift des umgebenden Textes übernimmt, kann KL in einem Satz kursiv erscheinen; \\operatorname{KL} oder \\mathrm{KL} beheben das, und \\operatorname fügt zusätzlich den richtigen Abstand vor der Klammer ein. Für mehr Luft um die Striche bieten sich \\,\\|\\, oder \\parallel an.",
  },
  "argmax": {
    name: "Argmax",
    meaning: "Das Argument des Maximums: der Eingabewert, an dem eine Funktion ihren größten Wert annimmt.",
    usage: "Als \\arg\\max geschrieben, kombiniert es zwei vordefinierte Operatoren: \\arg, das nie Grenzen trägt, und \\max, das sie trägt. Im Display-Stil landet ein Index daher nur unter max, und die Nebenbedingung sitzt außermittig. Sauberer ist \\operatorname*{arg\\,max} oder die Definition \\DeclareMathOperator*{\\argmax}{arg\\,max} in der Präambel, die den Index unter dem ganzen Wort zentriert. Es erscheint in Klassifikationsregeln wie \\hat{y} = \\arg\\max_k p(k|x), bei der Maximum-Likelihood-Schätzung und in gierigen Strategien des bestärkenden Lernens. Beachten Sie, dass das Ergebnis eine Menge ist, wenn der Maximierer nicht eindeutig ist.",
  },
  "argmin": {
    name: "Argmin",
    meaning: "Das Argument des Minimums: die Eingabe, an der eine Funktion ihren kleinsten Wert erreicht.",
    usage: "Mit \\arg\\min definieren die meisten Optimierungs- und Lernprobleme ihre Lösung, etwa die kleinsten Quadrate \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 oder die Clusterzuordnung bei k-Means. So geschrieben ist es \\arg gefolgt von \\min, im abgesetzten Mathematikmodus wird der Index daher unter min statt unter dem ganzen Ausdruck zentriert. Für einen zentrierten Index verwenden Sie \\operatorname*{arg\\,min} oder deklarieren einen Operator mit Stern in der Präambel. Manche Autoren schreiben argmin als ein Wort ohne Abstand; der schmale Abstand in arg\\,min folgt dem verbreitetsten Stil. Denken Sie daran, dass das Ergebnis eine Menge sein kann, wenn die Minimierer nicht eindeutig sind.",
  },
  "argmax-subscript": {
    name: "Argmax mit Index",
    meaning: "Argmax mit der Optimierungsvariablen Theta im Index: der Parameterwert, der eine Zielfunktion maximiert.",
    usage: "Diese Form benennt die optimierte Variable und ist die Standardschreibweise für Maximum-Likelihood, \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta), und für die MAP-Schätzung. Da der Index nur an \\max hängt, steht Theta im Display-Modus unter max und nicht zentriert unter dem gesamten arg max. Ersetzen Sie es durch \\operatorname*{arg\\,max}_{\\theta} oder ein deklariertes \\argmax, erhalten Sie eine zentrierte Platzierung, die die meisten Fachzeitschriften erwarten. Im Fließtext erscheint der Index in beiden Fällen rechts daneben. Sie können im Index auch Nebenbedingungen angeben, etwa \\theta \\in \\Theta, mit \\substack für mehrere Zeilen.",
  },
  "argmin-subscript": {
    name: "Argmin mit Index",
    meaning: "Argmin über Theta: der Parameterwert, der eine Verlust- oder Zielfunktion minimiert.",
    usage: "So wird die empirische Risikominimierung üblicherweise geschrieben: \\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i). Im Display-Stil steht der Index nur unter min, was leicht außermittig wirkt; \\operatorname*{arg\\,min}_{\\theta} behebt das und hält die Abstände einheitlich. Wenn Sie es oft schreiben, spart ein Präambelmakro Tipparbeit und garantiert identische Ausgabe. Regularisierte Zielfunktionen fügen häufig einen Strafterm hinzu, wie bei Ridge- oder Lasso-Regression. Ist der Minimierer eindeutig, ist das Gleichheitszeichen in Ordnung; andernfalls ist \\in die präzisere Relation, da argmin eine Menge liefert.",
  },
  "softmax": {
    name: "Softmax-Funktion",
    meaning: "Name der Softmax-Funktion: bildet einen Vektor von Logits durch Exponentieren und Normieren auf eine Wahrscheinlichkeitsverteilung ab.",
    usage: "Softmax ist komponentenweise definiert als \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j} und schließt fast jeden Klassifikator sowie den Attention-Mechanismus ab, wo \\text{softmax}(QK^\\top/\\sqrt{d_k})V steht. Da \\text{} die Schrift des umgebenden Textes verwendet, wird es in Satz- oder Hervorhebungsumgebungen kursiv. \\operatorname{softmax} ist meist die bessere Wahl: Es ist immer aufrecht und fügt wie \\sin einen Operatorabstand vor der Klammer ein. Ein Temperaturparameter wird als \\text{softmax}(z/T) geschrieben. Verwenden Sie \\left( \\right), wenn das Argument einen Bruch enthält. In codelastigen Arbeiten sollten Sie angeben, über welche Achse Softmax normiert, etwa die Klassendimension.",
  },
  "relu": {
    name: "ReLU",
    meaning: "Name der Aktivierungsfunktion Rectified Linear Unit, die max(0, x) ausgibt und negative Eingaben auf null setzt.",
    usage: "ReLU ist definiert als \\text{ReLU}(x) = \\max(0, x), mit Ableitung 1 für positive und 0 für negative Eingaben. Sie ist die Standardaktivierung verdeckter Schichten in modernen Netzen; Varianten sind Leaky ReLU, \\max(\\alpha x, x), und GELU. \\text{ReLU} funktioniert, folgt aber dem umgebenden Textstil und wird in einer kursiven Umgebung schräg; \\operatorname{ReLU} oder \\mathrm{ReLU} bleiben aufrecht, und \\operatorname regelt zusätzlich den Abstand vor dem Argument. Wird die Funktion auf einen Vektor angewendet, geben Sie an, dass sie elementweise wirkt, etwa \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b}).",
  },
  "gradient-of-l": {
    name: "Gradient der Verlustfunktion",
    meaning: "Gradient des Verlusts L nach den Parametern Theta: der Vektor der partiellen Ableitungen, der beim Training verwendet wird.",
    usage: "Diese Größe berechnet die Backpropagation, und sie treibt den Gradientenabstieg \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L} an. Der Index an \\nabla gibt an, nach welchen Variablen Sie ableiten; das ist wichtig, wenn der Verlust sowohl von Parametern als auch von Eingaben abhängt, etwa \\nabla_x \\mathcal{L} bei adversarialen Angriffen. \\mathcal liefert das Schreibschrift-L und unterstützt nur Großbuchstaben. Im Fließtext sitzt der Index rechts unten am Nabla, was üblich ist. Für stochastische Schätzungen hilft ein Hut: \\hat{\\nabla}_\\theta \\mathcal{L} oder \\tilde{g}.",
  },
  "partial-derivative": {
    name: "Partielle Ableitung",
    meaning: "Partielle Ableitung des Verlusts L nach einem Parameter Theta, die Empfindlichkeit des Verlusts für jeden einzelnen Parameter.",
    usage: "Dieser Bruch ist der skalare Grundbaustein der Backpropagation; die Kettenregel wird zu \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}. Verwenden Sie \\partial, das geschwungene d, für partielle Ableitungen und ein einfaches d für totale Ableitungen. Im Fließtext schrumpft \\frac und ist oft schwer lesbar; \\tfrac, die Schrägstrichform \\partial \\mathcal{L}/\\partial \\theta oder ein \\dfrac im abgesetzten Modus funktionieren oft besser. Bei häufiger Verwendung hält ein Makro oder der Befehl \\pdv im Stil des physics-Pakets die Eingabe kurz. Ist Theta ein Vektor, wechseln viele Autoren stattdessen zu \\nabla_\\theta \\mathcal{L}.",
  },
  "theta-star": {
    name: "Theta-Stern",
    meaning: "Theta mit hochgestelltem Stern: der optimale Parameterwert, typischerweise der Minimierer eines Verlusts.",
    usage: "Ein Stern kennzeichnet das Optimum, wie in \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta), und Konvergenzresultate beschränken \\|\\theta_t - \\theta^*\\|. ^* setzt ein Sternchen in Exponentengröße. Alternativen sind ^\\ast, das identisch ist, und ^\\star, ein fünfzackiger Stern, den manche Autoren bevorzugen, weil das Sternchen mit Konjugation oder Adjungierter verwechselt werden kann. Unterscheiden Sie es von \\hat{\\theta}, das konventionell eine Schätzung aus Daten statt des wahren Optimums bezeichnet. Trägt Theta zusätzlich einen Index, ist jede Reihenfolge möglich: \\theta^*_t und \\theta_t^* werden gleich gesetzt.",
  },
  "weight-matrix": {
    name: "Gewichtsmatrix",
    meaning: "Fettes aufrechtes W, die übliche Notation für die Gewichtsmatrix einer Schicht eines neuronalen Netzes.",
    usage: "Fette Großbuchstaben bezeichnen Matrizen und fette Kleinbuchstaben Vektoren, eine vollständig verbundene Schicht ist also \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, mit schichtspezifischen Gewichten \\mathbf{W}^{(l)} oder \\mathbf{W}_l. \\mathbf erzeugt aufrechte fette lateinische Buchstaben; griechische Buchstaben und die meisten Symbole macht es nicht fett, verwenden Sie daher \\boldsymbol oder \\bm für \\boldsymbol{\\Sigma} oder ein fettes \\theta. Viele Deep-Learning-Arbeiten verzichten ganz auf Fettdruck und schreiben W; wählen Sie eine Konvention und behalten Sie sie durchgehend bei. Die Transponierte schreibt man meist \\mathbf{W}^\\top, was sauberer wirkt als ^T.",
  },
  "bias-vector": {
    name: "Bias-Vektor",
    meaning: "Fettes kleines b, die übliche Notation für einen Bias-Vektor, der nach einer linearen Transformation addiert wird.",
    usage: "Der Bias verschiebt die Voraktivierung jedes Neurons, wie in \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, und schichtweise Varianten schreibt man \\mathbf{b}^{(l)}. Fette Kleinbuchstaben kennzeichnen konventionell einen Spaltenvektor. \\mathbf setzt aufrecht fett; wünschen Sie fett kursive Vektoren, wie manche Physikzeitschriften, verwenden Sie stattdessen \\boldsymbol{b} oder \\bm{b}. Seien Sie beim Indizieren konsequent: Der i-te Bias-Eintrag ist b_i in normaler Kursivschrift, nicht fett, da er ein Skalar ist. In linearen Modellen schreibt man den Achsenabschnitt oft als b oder w_0 statt als fetten Vektor.",
  },
  "cross-entropy": {
    name: "Kreuzentropie",
    meaning: "Kreuzentropie zwischen einer wahren Verteilung p und einem Modell q: die erwartete Codelänge, wenn p mit q codiert wird.",
    usage: "Die Kreuzentropie ist H(p, q) = -\\sum_x p(x) \\log q(x) und die Verlustfunktion der Klassifikation: Bei One-Hot-Labels reduziert sie sich auf -\\log q(y). Sie zerfällt in H(p, q) = H(p) + D_{\\text{KL}}(p \\| q), was erklärt, warum ihre Minimierung über q auch die KL-Divergenz minimiert. Achten Sie auf einen Notationskonflikt: H(X, Y) mit Zufallsvariablen bezeichnet meist die gemeinsame Entropie, daher schreiben manche Autoren zur Klarheit H_\\times(p, q) oder \\mathrm{CE}(p, q). Das Komma erhält normale Interpunktionsabstände, eine manuelle Anpassung ist also nicht nötig.",
  },
  "entropy": {
    name: "Entropie",
    meaning: "Shannon-Entropie einer Zufallsvariablen X: die mittlere Unsicherheit bzw. der mittlere Informationsgehalt ihrer Ausprägungen.",
    usage: "Die Entropie ist H(X) = -\\sum_x p(x) \\log p(x), gemessen in Bit mit \\log_2 und in Nat mit \\ln. Sie wird von der Gleichverteilung maximiert, wo H(X) = \\log |\\mathcal{X}| gilt, und erscheint beim Aufteilen von Entscheidungsbäumen über den Informationsgewinn sowie im bestärkenden Lernen mit maximaler Entropie. Verwandte Größen teilen sich den Buchstaben: bedingte Entropie H(Y|X), gemeinsame Entropie H(X, Y) und differentielle Entropie h(X) für stetige Variablen, meist in Kleinschreibung. Manche Arbeiten schreiben \\mathbb{H}[X], um Verwechslungen mit einer Hesse-Matrix H oder einer Hypothesenklasse zu vermeiden.",
  },
  "mutual-information": {
    name: "Transinformation",
    meaning: "Transinformation (wechselseitige Information) zwischen X und Y: wie stark die Kenntnis einer Zufallsvariablen die Unsicherheit über die andere verringert.",
    usage: "Die Transinformation ist I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y)) und genau dann null, wenn X und Y unabhängig sind. Das Semikolon ist üblich und trennt die beiden Argumente, die selbst Listen sein können, wie in I(X_1, X_2; Y); ein Komma wäre mehrdeutig. TeX behandelt ; als Satzzeichen und fügt danach automatisch einen schmalen Abstand ein. Die bedingte Transinformation schreibt man I(X; Y \\mid Z). Sie liegt dem Information Bottleneck, kontrastiven InfoNCE-Verlusten und der Merkmalsauswahl zugrunde.",
  },
  "log-likelihood": {
    name: "Log-Likelihood",
    meaning: "Log-Likelihood der Daten x unter den Parametern Theta, die Größe, die bei der Maximum-Likelihood-Schätzung maximiert wird.",
    usage: "Durch Logarithmieren werden Produkte unabhängiger Likelihoods zu Summen, \\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta), was sich leichter ableiten lässt und numerisch stabil ist. Ihr Negatives ist der bekannte NLL-Verlust. Ein typografischer Hinweis: Ein bloßes | ist ein gewöhnliches Symbol und erhält auf keiner Seite Abstand; \\mid ist eine Relation und fügt ausgewogene Abstände ein, was p(x \\mid \\theta) ergibt. Manche Autoren verwenden ein Semikolon, p(x; \\theta), um anzuzeigen, dass Theta ein fester Parameter ist und keine Zufallsvariable, auf die bedingt wird; das ist die frequentistische Lesart.",
  },
  "probability-distribution": {
    name: "Wahrscheinlichkeitsverteilung",
    meaning: "Wahrscheinlichkeit (Dichte oder Masse) von x unter einer Verteilung p, die grundlegende Notation für eine Verteilung im maschinellen Lernen.",
    usage: "Kleines p(x) bezeichnet eine Dichte- oder Wahrscheinlichkeitsfunktion, während großes P(X = x) oder \\Pr oft für Wahrscheinlichkeiten von Ereignissen reserviert ist. Das maschinelle Lernen verwendet p großzügig mehrfach und lässt das Argument entscheiden, welche Verteilung gemeint ist, etwa p(x) gegenüber p(z); wird das unübersichtlich, ergänzen Sie Indizes wie p_\\theta(x) oder p_{\\text{data}}(x). Die Normierung verlangt \\sum_x p(x) = 1 oder \\int p(x)\\,dx = 1, mit einem schmalen Abstand \\, vor dx. Das Ziehen von Stichproben schreibt man x \\sim p(x), mit \\sim.",
  },
  "conditional-probability": {
    name: "Bedingte Wahrscheinlichkeit",
    meaning: "Bedingte Wahrscheinlichkeit von y gegeben x, etwa die vorhergesagte Label-Verteilung eines Klassifikators für eine Eingabe.",
    usage: "Diskriminative Modelle lernen p(y | x) direkt, während generative Modelle p(x | y) und p(y) lernen und den Satz von Bayes anwenden, p(y|x) = p(x|y)p(y)/p(x). Der als | getippte senkrechte Strich ist ein gewöhnliches Zeichen ohne umgebende Abstände; \\mid ist eine Relation und ergibt p(y \\mid x), was sich besser liest und von den meisten Stilrichtlinien empfohlen wird. Für einen hohen bedingenden Ausdruck skaliert \\middle| zwischen \\left( und \\right) den Strich mit den Klammern. Indizes wie p_\\theta(y \\mid x) geben die Parameter des Modells an.",
  },
  "sum-over-classes": {
    name: "Summe über Klassen",
    meaning: "Summation über die Klassen c von 1 bis C, wie sie in Mehrklassen-Verlustfunktionen und bei der Normierung von Wahrscheinlichkeiten vorkommt.",
    usage: "Summen über Klassen erscheinen in der kategorialen Kreuzentropie, -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c, und im Nenner von Softmax. Im abgesetzten Modus stehen die Grenzen über und unter dem großen Sigma; im Fließtext stehen sie kleiner rechts daneben, was Zeilenhöhe spart. Mit \\sum\\limits erzwingen Sie die abgesetzte Platzierung im Fließtext, mit \\nolimits das Gegenteil. C für die Anzahl der Klassen und c für den Index zu verwenden, ist eine verbreitete Konvention; verwenden Sie C nur nicht zusätzlich für Kosten oder eine Konstante in derselben Gleichung. Das Symbol \\Sigma ist ein griechischer Buchstabe und sollte \\sum nicht ersetzen.",
  },
  "product-over-samples": {
    name: "Produkt über Stichproben",
    meaning: "Produkt über die Stichproben i von 1 bis N, typischerweise die Likelihood eines i.i.d.-Datensatzes.",
    usage: "Für unabhängige Stichproben faktorisiert die Likelihood als \\prod_{i=1}^{N} p(x_i \\mid \\theta), und Logarithmieren macht daraus eine Summe. \\prod ist das große Pi als Großoperator, für den abgesetzten Modus dimensioniert; ersetzen Sie es nicht durch \\Pi, den griechischen Buchstaben, der klein bleibt und keine Grenzen trägt. Im abgesetzten Modus stehen die Grenzen oben und unten, im Fließtext seitlich; \\prod\\limits ändert das. Für ein Koprodukt ist \\coprod das auf dem Kopf stehende Gegenstück. Lange Produkte sind in der Praxis numerisch instabil, ein weiterer Grund, warum Arbeiten oft zur logarithmierten Form wechseln.",
  },
  "l1-norm": {
    name: "L1-Norm",
    meaning: "L1-Norm von Theta: die Summe der Beträge ihrer Einträge.",
    usage: "Die L1-Norm, \\|\\theta\\|_1 = \\sum_i |\\theta_i|, ist der Lasso-Strafterm und fördert dünnbesetzte Lösungen, weil ihre Einheitskugel Ecken auf den Achsen hat. \\| liefert Doppelstriche, behandelt sie aber als gewöhnliche Symbole, sodass die Abstände nicht stimmen können, wenn ein Minuszeichen folgt; \\lVert \\theta \\rVert_1 kennzeichnet sie als linke und rechte Begrenzer und setzt korrekte Abstände. Für hohe Argumente skalieren Sie mit \\left\\| ... \\right\\|. Viele Arbeiten definieren für Einheitlichkeit ein Makro \\norm über \\DeclarePairedDelimiter aus mathtools. Verwechseln Sie sie nicht mit |\\theta|, das einen Betrag oder eine Mächtigkeit bezeichnet.",
  },
  "l2-norm": {
    name: "L2-Norm",
    meaning: "Euklidische (L2-)Norm von Theta: die Quadratwurzel aus der Summe ihrer quadrierten Einträge.",
    usage: "Die L2-Norm \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} misst die Länge, und ihr Quadrat erscheint als Ridge- bzw. Weight-Decay-Strafterm \\lambda\\|\\theta\\|_2^2. Beachten Sie die Reihenfolge der Indizes: \\|\\theta\\|_2^2 ist die quadrierte Norm, und TeX stapelt Index und Exponent sauber. Viele Autoren lassen den Index 2 weg, wenn der Kontext klar ist. Für bessere Abstände der Begrenzer verwenden Sie \\lVert und \\rVert statt \\|, und \\left\\| \\right\\| für hohe Inhalte wie Brüche. Bei Matrizen bezeichnet \\|A\\|_2 meist die Spektralnorm und nicht die eintragsweise Norm, die Frobeniusnorm.",
  },
  "frobenius-norm": {
    name: "Frobeniusnorm",
    meaning: "Frobeniusnorm der Matrix W: die Quadratwurzel aus der Summe der Quadrate aller ihrer Einträge.",
    usage: "Die Frobeniusnorm ist \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}, das Matrix-Gegenstück zur L2-Norm von Vektoren. Sie wird für Weight Decay auf Matrizen, für den Fehler von Niedrigrangapproximationen und in Zielfunktionen der Matrixfaktorisierung verwendet. Sie unterscheidet sich von der Spektralnorm \\|\\mathbf{W}\\|_2, dem größten Singulärwert. Der Index F ist ein einfacher kursiver Buchstabe; manche schreiben \\mathrm{F}. Wie bei Vektornormen liefern \\lVert und \\rVert bessere Abstände als \\|, besonders wenn die Norm quadriert ist oder ein Koeffizient davorsteht.",
  },
};

export default text;
