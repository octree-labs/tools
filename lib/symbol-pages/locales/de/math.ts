import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "Addition",
    meaning: "Addiert zwei Größen; das binäre Pluszeichen, das auch als einstelliges Vorzeichen für positive Zahlen dient.",
    usage: "Ein + im Mathematikmodus ergibt einen binären Operator, TeX setzt also automatisch auf beiden Seiten einen mittleren Abstand, wie in a + b. Steht das Plus am Anfang eines Ausdrucks oder folgt es auf einen anderen Operator oder eine Relation, wie in -(+3) oder x = +1, behandelt TeX es als einstellig und lässt den Abstand weg. Bricht eine multline- oder split-Gleichung vor einem Plus um, schreiben Sie {}+ an den Anfang der Folgezeile, um die binären Abstände wiederherzustellen. Für ein hochgestelltes Plus, etwa beim Ion Na^+ oder bei der Menge \\mathbb{R}^+, sind keine Klammern nötig. Vermeiden Sie \\oplus, sofern Sie nicht eine direkte Summe oder XOR meinen, denn das ist ein anderes Symbol.",
  },
  "subtraction": {
    name: "Subtraktion",
    meaning: "Zieht eine Größe von einer anderen ab; im Mathematikmodus wird die Bindestrich-Taste zu einem echten Minuszeichen, nicht zu einem Bindestrich.",
    usage: "Im Mathematikmodus wird der Bindestrich in ein richtiges Minuszeichen umgewandelt, das länger ist als ein Textbindestrich und in a - b die Abstände eines binären Operators erhält. Außerhalb des Mathematikmodus erhalten Sie nur einen kurzen Bindestrich, eine negative Zahl im Fließtext sollte daher trotzdem als $-5$ geschrieben und nicht einfach getippt werden. Ist das Minus einstellig, wie in -x oder e^{-t}, entfernt TeX die umgebenden Abstände automatisch. Verwechseln Sie es nicht mit \\setminus, das die Mengendifferenz A \\setminus B bezeichnet, oder mit dem Halbgeviertstrich für Bereiche. Für ein hochgestelltes Minus, wie in x^{-1} oder Cl^-, braucht man Klammern nur, wenn mehr als ein Zeichen folgt.",
  },
  "multiplication": {
    name: "Multiplikation",
    meaning: "Erzeugt das Kreuz ×, das für Multiplikation, Kreuzprodukt von Vektoren und kartesische Produkte verwendet wird.",
    usage: "In der Arithmetik schreibt man mit \\times etwa 3 \\times 4 oder die wissenschaftliche Schreibweise 6.02 \\times 10^{23}. In linearer Algebra und Physik ist es das Kreuzprodukt von Vektoren, \\mathbf{a} \\times \\mathbf{b}, und es gibt außerdem Matrixdimensionen an, etwa eine m \\times n-Matrix. Die Mengenlehre verwendet es für das kartesische Produkt A \\times B. Zum Vergleich: \\cdot ist die übliche Wahl für Skalarprodukte und für die Multiplikation von Variablen, und der Stern * bezeichnet normalerweise die Faltung. Der große Operator \\bigtimes gehört nicht zum Standard-LaTeX, daher schreiben viele Autoren für ein indiziertes kartesisches Produkt stattdessen \\prod.",
  },
  "division": {
    name: "Division",
    meaning: "Ergibt den Obelus ÷, das Divisionszeichen aus der Grundschule mit einem Punkt über und unter einem Strich.",
    usage: "Der Obelus erscheint auf Rechenarbeitsblättern, in taschenrechnerartigen Ausdrücken und in manchen Tabellen, etwa 12 \\div 4 = 3. In der Forschungsmathematik kommt er fast nie vor; schreiben Sie stattdessen einen Bruch mit \\frac{12}{4}, einen Schrägstrich im Text, 12/4, oder einen Doppelpunkt für Verhältnisse. In manchen Ländern wird der Obelus ganz vermieden, und ISO 80000-2 rät von ihm ab. Da \\div ein binärer Operator ist, setzt TeX die Abstände wie bei + und -. Verwechseln Sie es nicht mit \\mid oder dem Schrägstrich /, die in Zahlentheorie und Gruppentheorie „teilt“ bzw. Quotient bedeuten, zum Beispiel G/N.",
  },
  "fraction": {
    name: "Bruch",
    meaning: "Setzt einen echten Bruch mit Zähler a über Nenner b, getrennt durch einen waagerechten Bruchstrich.",
    usage: "\\frac hat zwei Argumente, Zähler und Nenner, \\frac{a}{b} ist also nur ein Platzhalter für jedes Verhältnis wie \\frac{dy}{dx} oder \\frac{n(n+1)}{2}. Im Fließtext-Mathematikmodus schrumpft er auf Textgröße, was gedrängt wirken kann; \\dfrac erzwingt die Display-Größe, \\tfrac die Textgröße. Für einfache Verhältnisse im Text liest sich ein Schrägstrich, a/b, oft besser als ein gestapelter Bruch. Binomialkoeffizienten schreibt man mit \\binom{n}{k}, nicht mit einem \\frac ohne Bruchstrich. Kettenbrüche sehen mit \\cfrac sauberer aus, das jede Ebene in voller Größe hält. Steht ein Bruch in Klammern, verwenden Sie \\left( und \\right), damit die Klammern auf seine Höhe mitwachsen.",
  },
  "square-root": {
    name: "Quadratwurzel",
    meaning: "Zeichnet ein Wurzelzeichen über sein Argument und ergibt die Quadratwurzel (Hauptwert) von x.",
    usage: "\\sqrt streckt das Wurzelzeichen automatisch über alles, was in den Klammern steht, sodass \\sqrt{x^2 + y^2} einen längeren Strich und ein höheres Zeichen erhält. So schreibt man üblicherweise die euklidische Norm, die Mitternachtsformel und die Standardabweichung als \\sqrt{\\operatorname{Var}(X)}. Wurzeln über Argumenten unterschiedlicher Höhe können ungleichmäßig wirken; ein \\vphantom{y} oder \\mathstrut im Inneren gleicht benachbarte Wurzeln an. Für einen Wurzelexponenten wie bei der Kubikwurzel nutzen Sie das optionale Argument \\sqrt[3]{x}. Im Fließtext ist x^{1/2} manchmal klarer als eine Wurzel über einem hohen Bruch.",
  },
  "n-th-root": {
    name: "n-te Wurzel",
    meaning: "Schreibt die n-te Wurzel aus x, wobei der Wurzelexponent n in den Winkel des Wurzelzeichens gesetzt wird.",
    usage: "Der Wurzelexponent steht in eckigen Klammern vor dem Radikanden, \\sqrt[3]{8} = 2 ist also eine Kubikwurzel und \\sqrt[n]{x} bezeichnet x^{1/n}. Sie kommt im Wurzelkriterium für Reihen vor, \\limsup \\sqrt[n]{|a_n|}, und beim geometrischen Mittel \\sqrt[n]{x_1 x_2 \\cdots x_n}. TeX platziert den Exponenten manchmal ungünstig, besonders bei hohen Exponenten; \\leftroot{} und \\uproot{} verschieben ihn, wie in \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}. Halten Sie den Exponenten kurz: Bei komplizierten Exponenten ist die Potenz x^{1/(k+1)} leichter zu lesen als eine Wurzel.",
  },
  "summation": {
    name: "Summe",
    meaning: "Summiert eine Folge von Termen, während der Index i von 1 bis n läuft, mit dem großen Sigma als großem Operator.",
    usage: "\\sum ist ein großer Operator: Im abgesetzten Mathematikmodus stehen die Grenzen i=1 und n unter und über dem Sigma, im Fließtext rücken sie als Index und Exponent an die Seite. Mit \\limits erzwingen Sie gestapelte Grenzen im Fließtext, mit \\nolimits seitliche Grenzen im Display, wobei gestapelte Grenzen im Fließtext den Zeilenabstand stören können. Für mehrzeilige Bedingungen unter dem Sigma verwenden Sie \\substack{0 \\le i \\le m \\\\ 0 < j < n}. Verwenden Sie für Summen nicht den griechischen Buchstaben \\Sigma; er ist ein kleineres gewöhnliches Symbol ohne Operatorabstände. Typische Anwendungen sind Reihen, Erwartungswerte und \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}.",
  },
  "product": {
    name: "Produkt",
    meaning: "Multipliziert eine Folge von Faktoren für i von 1 bis n, mit dem großen Pi als großem Operator.",
    usage: "\\prod verhält sich wie \\sum: Im Display-Stil stehen die Grenzen darüber und darunter, im Fließtext seitlich. Damit schreibt man Fakultäten als n! = \\prod_{i=1}^{n} i, Likelihoods L(\\theta) = \\prod_{i} p(x_i \\mid \\theta) und Euler-Produkte über Primzahlen. Ersetzen Sie es nicht durch den griechischen Buchstaben \\Pi, ein gewöhnliches Symbol fester Größe. Die umgedrehte Variante \\coprod bezeichnet Koprodukte in der Kategorientheorie. Ist das Produkt eine Likelihood, die Sie logarithmieren wollen, zeigt man den Übergang zur Summe üblicherweise explizit, denn \\log macht aus \\prod ein \\sum.",
  },
  "integral": {
    name: "Integral",
    meaning: "Schreibt ein bestimmtes Integralzeichen mit unterer Grenze a und oberer Grenze b.",
    usage: "Anders als bei \\sum stehen die Grenzen von \\int standardmäßig auch im abgesetzten Modus seitlich; fügen Sie \\limits hinzu, wie in \\int\\limits_a^b, wenn Ihr Stil gestapelte Grenzen verlangt. Setzen Sie vor das Differential einen schmalen Abstand \\,, wie in \\int_a^b f(x)\\,dx; manche Autoren verwenden ein aufrechtes d mit \\mathrm{d}x. Für Mehrfachintegrale gibt es eigene Befehle \\iint und \\iiint, die die Zeichen besser setzen als wiederholtes \\int. Kurvenintegrale über geschlossene Wege verwenden \\oint. Für einen Auswertungsstrich nach der Integration schreiben Sie \\Big|_a^b oder \\left. F(x) \\right|_a^b.",
  },
  "limit": {
    name: "Grenzwert",
    meaning: "Schreibt den Limes-Operator, unter dem „lim“ steht, dass x gegen unendlich geht.",
    usage: "\\lim ist ein vordefinierter Operatorname, er wird also aufrecht gesetzt und stellt im abgesetzten Modus den Index x \\to \\infty direkt darunter. Im Fließtext rückt der Index zur Seite, damit der Zeilenabstand ordentlich bleibt. Der Pfeil darin ist \\to, ein kurzer Alias für \\rightarrow. Einseitige Grenzwerte schreibt man x \\to 0^+ oder x \\downarrow 0. Die verwandten Operatoren \\limsup und \\liminf funktionieren genauso. Brauchen Sie ein eigenes limesartiges Wort mit gestapeltem Index, definieren Sie es mit \\DeclareMathOperator* (der Stern aktiviert die Grenzen), statt \\text{lim} zu schreiben.",
  },
  "infinity": {
    name: "Unendlich",
    meaning: "Zeichnet die Lemniskate ∞, die für eine unbeschränkte Größe oder einen unbeschränkt wachsenden Grenzwert steht.",
    usage: "\\infty begegnet Ihnen in Grenzwerten wie x \\to \\infty, uneigentlichen Integralen \\int_0^\\infty e^{-x}\\,dx und Reihengrenzen \\sum_{n=1}^{\\infty}. Es bezeichnet außerdem die Supremumsnorm \\|f\\|_\\infty, den Raum L^\\infty und die glatten Funktionen C^\\infty. Schreiben Sie -\\infty und +\\infty mit direkt angefügtem Vorzeichen; TeX setzt das Vorzeichen korrekt als einstellig. Denken Sie daran, dass \\infty keine reelle Zahl ist, ein Intervall, das es enthält, sollte an diesem Ende also offen sein, wie in [0, \\infty). Für die erweiterten reellen Zahlen ist \\overline{\\mathbb{R}} eine gängige Schreibweise.",
  },
  "approximately-equal": {
    name: "Ungefähr gleich",
    meaning: "Drückt aus, dass zwei Werte ungefähr gleich sind, etwa bei einer numerischen Schätzung oder einer gerundeten Konstante.",
    usage: "Verwenden Sie \\approx für numerische Näherungen wie \\pi \\approx 3.14159 und für Entwicklungen erster Ordnung wie \\sin x \\approx x für kleine x. Es ist eine Relation, TeX gibt ihm also breite Abstände wie bei =. Mehrere ähnlich aussehende Zeichen haben andere Bedeutungen: \\simeq bedeutet oft asymptotisch gleich oder isomorph, \\sim asymptotisch gleich oder „verteilt wie“, \\cong bezeichnet Kongruenz oder Isomorphie, und \\approxeq ist eine seltenere Variante. In Finanz- und Ingenieurtexten kennzeichnet \\approx meist gerundete Ergebnisse; geben Sie die Genauigkeit an, etwa auf drei Nachkommastellen, damit die Leser wissen, wie grob die Schätzung ist.",
  },
  "not-equal": {
    name: "Ungleichheitszeichen",
    meaning: "Besagt, dass zwei Größen nicht gleich sind; die Negation des Gleichheitszeichens.",
    usage: "\\neq und sein kurzer Alias \\ne erzeugen dasselbe durchgestrichene Gleichheitszeichen, beide sind verwendbar. Es erscheint in Bedingungen wie x \\neq 0, in Verschiedenheitsaussagen i \\neq j und in programmiernahen Arbeiten als Ungleichheitstest. \\not= funktioniert ebenfalls, doch die Lage des Schrägstrichs kann leicht von der eigenen Glyphe abweichen. Tippen Sie in Informatiktexten im Mathematikmodus nicht != ein; das ergibt ein Ausrufezeichen, gefolgt von einem Gleichheitszeichen. Für „nicht äquivalent“ oder „nicht kongruent“ verwenden Sie \\not\\equiv oder \\ncong statt \\neq.",
  },
  "less-than-or-equal": {
    name: "Kleiner oder gleich",
    meaning: "Drückt aus, dass die linke Seite kleiner oder gleich der rechten Seite ist.",
    usage: "\\leq hat den kürzeren Alias \\le, beide drucken dieselbe Glyphe mit einem einzelnen waagerechten Strich. Wer <= im Mathematikmodus tippt, erhält zwei getrennte Symbole, verwenden Sie also immer den Befehl. Ungleichungen wie die Dreiecksungleichung \\|x+y\\| \\leq \\|x\\|+\\|y\\| und Schranken wie 0 \\leq p \\leq 1 sind sein tägliches Geschäft. Die geneigte Variante \\leqslant wird in manchen europäischen und russischen Traditionen bevorzugt, \\leqq hat einen Doppelstrich. In Ordnungs- und Verbandstheorie bezeichnet \\leq eine Halbordnung, während \\preceq für allgemeinere Präordnungen verwendet wird.",
  },
  "greater-than-or-equal": {
    name: "Größer oder gleich",
    meaning: "Drückt aus, dass die linke Seite größer oder gleich der rechten Seite ist.",
    usage: "\\geq und sein Alias \\ge sind austauschbar. Wer >= im Mathematikmodus tippt, erhält zwei getrennte Zeichen, verwenden Sie also den Befehl. Typische Kontexte sind untere Schranken wie n \\geq 1, die Ungleichung vom arithmetischen und geometrischen Mittel und Nebenbedingungen in der Optimierung wie x_i \\geq 0. Die geneigte Form \\geqslant wird von manchen Zeitschriften bevorzugt, \\geqq hat einen Doppelstrich. In der Ordnungstheorie verallgemeinert die umgekehrte Relation \\succeq das \\geq. Lassen Sie eine Ungleichungskette nach Möglichkeit in eine Richtung zeigen, denn a \\leq b \\leq c liest sich leichter als eine Mischung aus \\leq und \\geq.",
  },
  "implies": {
    name: "Implikation",
    meaning: "Schreibt einen langen Doppelpfeil für die logische Implikation: Die linke Aussage impliziert die rechte.",
    usage: "\\implies erzeugt ein \\Longrightarrow mit zusätzlichen breiten Abständen, was zu Implikationen zwischen ganzen Aussagen passt, wie in x > 2 \\implies x^2 > 4. Für die Implikation zwischen Formeln innerhalb eines logischen Ausdrucks bevorzugen viele Logiker das kürzere \\Rightarrow oder \\to ohne die breite Lücke. Die Umkehrung ist \\impliedby. Vermeiden Sie in Beweisen, mehrere \\implies über eine ganze Seite aneinanderzureihen; vollständige Sätze mit „also“ lesen sich oft besser. In der Notation der Aussagenlogik ist p \\to q gebräuchlicher als p \\implies q.",
    example: "x^2 = 4 \\implies x = 2 \\text{ oder } x = -2",
  },
  "if-and-only-if": {
    name: "Äquivalenz (genau dann, wenn)",
    meaning: "Schreibt einen langen Doppelpfeil mit zwei Spitzen für die logische Äquivalenz, gelesen „genau dann, wenn“.",
    usage: "\\iff erzeugt ein \\Longleftrightarrow mit zusätzlichen breiten Abständen auf beiden Seiten. Es verbindet zwei Aussagen, die einander implizieren, etwa in einem Satz wie n \\text{ gerade} \\iff n^2 \\text{ gerade}. Logiktexte bevorzugen für das Bikonditional innerhalb von Formeln oft \\leftrightarrow oder \\Leftrightarrow und reservieren \\iff für Aussagen im Fließtext. Wegen dieser Polsterung wirkt \\iff in kompakten Indizes oder Bedingungen der Mengenbildungsschreibweise zu locker. Verwechseln Sie es nicht mit \\equiv, das „identisch gleich“ oder „kongruent modulo n“ bedeutet.",
  },
  "for-all": {
    name: "Allquantor",
    meaning: "Ergibt den Allquantor ∀, gelesen „für alle“ oder „für jedes“.",
    usage: "\\forall leitet allquantifizierte Aussagen ein, wie in der Epsilon-Delta-Definition \\forall \\varepsilon > 0\\ \\exists \\delta > 0. TeX behandelt es als gewöhnliches Symbol, nach der gebundenen Variablen gibt es also keinen automatischen Abstand; fügen Sie je nach Konvention \\, oder \\ oder ein Trennzeichen wie Doppelpunkt oder Punkt ein. In textlastigen Beweisen empfehlen viele Stilrichtlinien, „für alle“ auszuschreiben statt \\forall zu verwenden. Im getypten Lambda-Kalkül und in der Typentheorie leitet es außerdem polymorphe Typen ein, zum Beispiel \\forall \\alpha.\\, \\alpha \\to \\alpha.",
  },
  "exists": {
    name: "Existenzquantor",
    meaning: "Ergibt den Existenzquantor ∃, gelesen „es existiert“ oder „für ein“.",
    usage: "\\exists besagt, dass mindestens ein Element eine Eigenschaft erfüllt, wie in \\exists x \\in \\mathbb{R} : x^2 = 2. Eindeutigkeit schreibt man \\exists! (es existiert genau ein), und \\nexists liefert das negierte Symbol für „es existiert kein“. Wie \\forall ist es ein gewöhnliches Symbol, setzen Sie also für die Lesbarkeit einen schmalen Abstand oder einen Doppelpunkt nach der gebundenen Variablen. Die Reihenfolge der Quantoren ist wichtig: \\forall x\\, \\exists y ist etwas anderes als \\exists y\\, \\forall x, halten Sie also die beabsichtigte Reihenfolge ein. In formaler Logik vermeiden Klammern um den Wirkungsbereich, \\exists x\\,(P(x)), Mehrdeutigkeiten.",
  },
  "element-of": {
    name: "Elementzeichen",
    meaning: "Drückt Zugehörigkeit aus: Das Element links gehört zur Menge rechts.",
    usage: "\\in ist die grundlegende Elementrelation, wie in x \\in \\mathbb{R} oder n \\in \\mathbb{N}, und erhält Relationsabstände. Sein Spiegelbild \\ni liest man „enthält als Element“, und \\notin verneint es. Verwechseln Sie es nicht mit \\epsilon oder \\varepsilon, griechischen Buchstaben, die ähnlich aussehen, aber andere Abstände und eine andere Bedeutung haben. In Summen und in der Mengenbildungsschreibweise bindet es den Index, wie in \\sum_{x \\in S} f(x) oder \\{x \\in X : f(x) > 0\\}. Für Teilmengenbeziehungen zwischen zwei Mengen verwenden Sie \\subseteq, nicht \\in.",
  },
  "not-element-of": {
    name: "Nicht-Element-Zeichen",
    meaning: "Drückt Nichtzugehörigkeit aus: Das Element links gehört nicht zur angegebenen Menge.",
    usage: "\\notin ist eine eigene durchgestrichene Version von \\in, als Relation gesetzt, wie in \\sqrt{2} \\notin \\mathbb{Q}. \\not\\in liefert ein ähnliches Ergebnis, doch \\notin platziert den Schrägstrich besser und ist die Standardwahl. Seine natürlichen Begleiter sind \\in und \\ni, und für verneinte Teilmengen würden Sie \\not\\subset oder \\nsubseteq verwenden. Typische Anwendungen sind Widerspruchsbeweise und Beschreibungen von Komplementen wie x \\in A^c \\iff x \\notin A. Bei Quantoren ist \\forall x \\notin S eine akzeptable Kurzform, doch den Bereich auszuschreiben ist klarer.",
  },
  "subset": {
    name: "Teilmenge",
    meaning: "Zeigt, dass eine Menge in einer anderen enthalten ist; oft als echte (strikte) Teilmenge gelesen.",
    usage: "Die Konventionen unterscheiden sich: Manche Autoren verwenden \\subset für jede Teilmenge, andere reservieren es für echte Teilmengen und schreiben \\subseteq, wenn Gleichheit erlaubt ist. Um eindeutig zu sein, schreiben viele Arbeiten \\subseteq für „Teilmenge oder gleich“ und \\subsetneq für „echte Teilmenge“ und nennen die Konvention einmal. Die umgekehrte Relation ist \\supset. Typische Aussagen sind \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} und Inklusionen von Unterräumen in der linearen Algebra. Die Negation \\not\\subset funktioniert, und \\nsubseteq liefert eine sauberere Glyphe für „keine Teilmenge oder gleich“. Für welche Lesart Sie sich auch entscheiden, wechseln Sie innerhalb eines Dokuments nicht zwischen beiden.",
  },
  "union": {
    name: "Vereinigung",
    meaning: "Bildet die Vereinigung von Mengen: alle Elemente, die zu mindestens einer von ihnen gehören.",
    usage: "\\cup ist ein binärer Operator, wie in A \\cup B, und erhält auf beiden Seiten mittlere Abstände. Für die Vereinigung über eine indizierte Familie verwenden Sie den großen Operator \\bigcup, der im abgesetzten Modus die Grenzen stapelt: \\bigcup_{i=1}^{\\infty} A_i. Die disjunkte Vereinigung schreibt man oft \\sqcup oder \\dot\\cup. In der Wahrscheinlichkeitsrechnung entspricht A \\cup B dem Ereignis „A oder B“, was P(A \\cup B) = P(A) + P(B) - P(A \\cap B) ergibt. Verwenden Sie für die Mengenvereinigung weder den Buchstaben U noch das logische \\lor.",
  },
  "intersection": {
    name: "Schnittmenge",
    meaning: "Bildet den Schnitt von Mengen: die Elemente, die allen gemeinsam sind.",
    usage: "\\cap ist ein binärer Operator, der zwischen Mengen steht, wie in A \\cap B, während \\bigcap die Version als großer Operator für Familien ist, \\bigcap_{n} U_n. In der Wahrscheinlichkeitsrechnung steht es für gemeinsame Ereignisse, P(A \\cap B) = P(A)P(B) definiert also die Unabhängigkeit. Sein logisches Gegenstück ist \\land (und), und das Infimum \\wedge der Verbandstheorie sieht ähnlich aus, ist aber eine andere Glyphe. Die De-Morganschen Gesetze verbinden es mit der Vereinigung: (A \\cup B)^c = A^c \\cap B^c. Gilt A \\cap B = \\emptyset, so sind die Mengen disjunkt.",
  },
  "empty-set": {
    name: "Leere Menge",
    meaning: "Bezeichnet die leere Menge, die eindeutig bestimmte Menge, die überhaupt keine Elemente enthält.",
    usage: "\\emptyset druckt die Standardglyphe der leeren Menge, einen Kreis mit Schrägstrich. Viele Mathematiker bevorzugen die rundere Form \\varnothing, die sich von einer durchgestrichenen Null unterscheidet und in modernen Texten verbreitet ist. Wählen Sie eine und verwenden Sie sie durchgehend. Typische Anwendungen sind Disjunktheit, A \\cap B = \\emptyset, und Ergebnisse in der Mengenbildungsschreibweise. Verwechseln Sie sie nicht mit dem skandinavischen Buchstaben Ø oder mit \\phi und \\varphi. Auch \\{\\} ist für die leere Menge zulässig, beachten Sie aber, dass \\{\\emptyset\\} eine Menge mit einem Element ist.",
  },
  "partial-derivative": {
    name: "Partielle Ableitung",
    meaning: "Schreibt das geschwungene ∂ für partielle Ableitungen und in der Topologie auch für den Rand von Mengen.",
    usage: "\\partial erscheint in partiellen Ableitungen wie \\frac{\\partial f}{\\partial x} und gemischten Ableitungen \\frac{\\partial^2 f}{\\partial x\\,\\partial y}. In Topologie und Geometrie ist \\partial A der Rand einer Menge oder Mannigfaltigkeit, verwendet im Satz von Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Als kurze Formen mit Index sind \\partial_x f und \\partial_t u in Arbeiten über partielle Differentialgleichungen üblich. Verwechseln Sie es nicht mit \\delta (Variation) oder d (totale Ableitung). Ein schmaler Abstand zwischen den \\partial-Faktoren im Nenner verbessert das Schriftbild.",
  },
  "nabla": {
    name: "Nabla",
    meaning: "Schreibt den Nabla-Operator ∇, den vektoriellen Differentialoperator für Gradient, Divergenz und Rotation.",
    usage: "\\nabla f ist der Gradient, \\nabla \\cdot \\mathbf{F} die Divergenz, \\nabla \\times \\mathbf{F} die Rotation und \\nabla^2 oder \\Delta der Laplace-Operator. Im maschinellen Lernen bezeichnet \\nabla_\\theta L(\\theta) den Gradienten einer Verlustfunktion nach den Parametern, wie beim Gradientenabstieg \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L. Differentialgeometer verwenden \\nabla für einen Zusammenhang oder die kovariante Ableitung, \\nabla_X Y. Es ist ein gewöhnliches Symbol, es werden also keine zusätzlichen Abstände eingefügt. Manche Autoren setzen es mit \\boldsymbol{\\nabla} fett, um zu betonen, dass es ein vektorieller Operator ist.",
  },
  "plus-minus": {
    name: "Plus-Minus-Zeichen",
    meaning: "Ergibt das Plusminuszeichen ± für zwei Alternativen oder eine Toleranz um einen Wert.",
    usage: "\\pm erscheint in der Mitternachtsformel x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} und bei Messunsicherheiten wie 9.81 \\pm 0.02. Sein Gegenstück \\mp (Minusplus) wird verwendet, wenn Vorzeichen gemeinsam wechseln müssen, wie in \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b. Es ist ein binärer Operator, TeX setzt die Abstände also wie bei +. In Tabellen mit Versuchsergebnissen sollten Sie die Zahlen zur besseren Lesbarkeit am \\pm-Zeichen ausrichten. Finanztexte verwenden es für Spannen wie eine Rendite von 5\\% \\pm 2\\%.",
  },
  "dot-product": {
    name: "Skalarprodukt",
    meaning: "Setzt einen zentrierten Punkt, der für das Skalarprodukt und für die Multiplikation zwischen Faktoren verwendet wird.",
    usage: "\\cdot ist ein binärer Operator auf der Mathematikachse, wie in \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i und in Produkten wie 2 \\cdot 3. Er markiert auch ein Platzhalterargument, wie in \\|\\cdot\\| oder f(\\cdot). Verwenden Sie keinen Punkt, der auf der Grundlinie sitzt, und kein \\bullet, das größer ist. Für Auslassungspunkte zwischen multiplizierten Faktoren nehmen Sie \\cdots, das vertikal zentriert ist, im Gegensatz zu \\ldots für Aufzählungen. Verwenden Sie \\times für Kreuzprodukte und die wissenschaftliche Schreibweise und reservieren Sie \\cdot für Skalar- und innere Produkte.",
  },
};

export default text;
