import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "Argmax mit Index",
    meaning: "Argmax über x: die Stelle x, an der die Zielfunktion am größten ist.",
    usage: "In Texten zur Optimierung schreibt man die Maximalstelle von f über einer zulässigen Menge als x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x). Als \\arg\\max_{x} getippt, hängt der Index an \\max, im Display-Stil steht x also zentriert unter max statt unter dem ganzen arg max. \\operatorname*{arg\\,max}_{x} oder ein mit Stern deklarierter Operator setzt ihn unter den vollständigen Namen. Im Fließtext-Mathematikmodus steht der Index unabhängig davon rechts unten. Da Maxima nicht eindeutig sein müssen, ist x^* \\in \\arg\\max streng genommen präziser als eine Gleichung. Bei Maximierung über mehrere Variablen führen Sie diese auf: \\arg\\max_{x, y}.",
  },
  "argmin-subscript": {
    name: "Argmin mit Index",
    meaning: "Argmin über x: die Stelle x, an der die Zielfunktion minimal wird.",
    usage: "Diese Form definiert die Lösung eines Minimierungsproblems, etwa beim proximalen Operator \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big). Da \\arg keine Grenzen annehmen kann, gehört der Index zu \\min, das ihn nur im Display-Modus unter min zentriert; \\operatorname*{arg\\,min} korrigiert die Platzierung. Nebenbedingungen können in den Index, \\arg\\min_{x \\in C}, oder bei mehreren Zeilen in \\substack. Unterscheiden Sie argmin, das einen Punkt oder eine Menge liefert, von \\min, das den Wert liefert; beides zu vermischen ist ein häufiger Fehler in studentischen Ausarbeitungen.",
  },
  "minimize": {
    name: "Minimum",
    meaning: "Minimum über x: der kleinste Wert, den ein Ausdruck annimmt, wenn x variiert, mit x unter min geschrieben.",
    usage: "\\min ist ein vordefinierter Operator, der Grenzen annimmt, im Display-Modus setzt \\min_{x} das x also unter das Wort, im Fließtext erscheint es als Index rechts daneben. Dies ist die erste Zeile eines Standard-Optimierungsproblems: \\min_x f(x) unter Nebenbedingungen. Wenn das Minimum nicht angenommen werden muss, wie bei offenen Mengen, verwenden Sie stattdessen \\inf. Um die Display-Platzierung im Fließtext zu erzwingen, schreiben Sie \\min\\limits_{x}. Für mehrzeilige Bedingungen unter min verwenden Sie \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}. Der bezeichnete Wert ist eine Zahl, anders als argmin, das die Minimalstelle liefert.",
  },
  "maximize": {
    name: "Maximum",
    meaning: "Maximum über x: der größte Wert, den der Ausdruck annimmt, wenn x seinen Definitionsbereich durchläuft.",
    usage: "\\max_{x} funktioniert wie \\min_{x}: Der vordefinierte Operator setzt Grenzen im Display-Stil darunter und im Fließtext daneben. Typische Anwendungen sind die duale Funktion, Minimax-Probleme wie \\min_G \\max_D beim Training von GANs und die Maximierung des Randabstands bei SVMs. Wenn das Supremum nicht angenommen werden muss, ist \\sup der korrekte Operator. Operatoren zu kombinieren ist üblich, und TeX setzt gestapelte Grenzen an benachbarten \\min und \\max sauber. Die Platzierung lässt sich mit \\limits oder \\nolimits überschreiben, und vor der Zielfunktion schafft \\, oder \; in langen Ausdrücken etwas Luft.",
  },
  "subject-to": {
    name: "Unter der Nebenbedingung",
    meaning: "Abkürzung, die die Nebenbedingungen eines Optimierungsproblems einleitet; im Englischen „s.t.“, im Deutschen meist „u.d.N.“.",
    usage: "In einer Problemformulierung trennt die Abkürzung die Zielfunktion von den Nebenbedingungen: \\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0. Verwenden Sie \\text, damit die Buchstaben aufrecht stehen und der Punkt erhalten bleibt, und umgeben Sie es beidseitig mit \\quad, denn \\text fügt selbst keinen Abstand ein. Viele Stilrichtlinien bevorzugen die ausgeschriebene Formulierung, etwa \\text{unter der Nebenbedingung}, besonders in abgesetzten Formulierungen mit der align-Umgebung, in denen die Nebenbedingungen in den folgenden Zeilen unter der ersten stehen. Tippen Sie die Abkürzung nicht direkt im Mathematikmodus; sonst erscheinen kursive Buchstaben als Variablen mit einem Punkt.",
    example: "\\min_{x} f(x) \\quad \\text{u.d.N.} \\quad Ax = b, \; x \\geq 0",
  },
  "constraint": {
    name: "Ungleichungsnebenbedingung",
    meaning: "Allgemeine Ungleichungsnebenbedingung: Die Funktion g muss an einem zulässigen Punkt x nichtpositiv sein.",
    usage: "Ungleichungsnebenbedingungen in der Standardform g_i(x) \\leq 0 zu schreiben ist in der konvexen Optimierung Konvention, eine Bedingung wie x_1 + x_2 \\geq 1 wird also zu 1 - x_1 - x_2 \\leq 0. \\leq hat die Kurzform \\le, beide ergeben dasselbe Zeichen; \\leqslant zeichnet einen schrägen Strich, der in manchen europäischen Satztraditionen bevorzugt wird. Mehrere Nebenbedingungen indizieren Sie als g_i(x) \\leq 0 für i = 1, \\dots, m. In der KKT-Analyse erhält jede Ungleichung einen Multiplikator \\lambda_i \\geq 0 mit dem komplementären Schlupf \\lambda_i g_i(x) = 0. Für die Darstellung des Problems richten Sie sie mit & aus.",
  },
  "equality-constraint": {
    name: "Gleichungsnebenbedingung",
    meaning: "Allgemeine Gleichungsnebenbedingung: Die Funktion h muss an jedem zulässigen Punkt x verschwinden.",
    usage: "Gleichungsnebenbedingungen h_j(x) = 0 ergänzen die Ungleichungsnebenbedingungen g_i(x) \\leq 0 in der Standardform eines nichtlinearen Programms. In der konvexen Optimierung müssen sie affin sein und werden daher oft als Ax = b geschrieben. In der Lagrange-Funktion erhält jede einen Multiplikator \\nu_j oder \\mu_j, der anders als Multiplikatoren von Ungleichungen ein beliebiges Vorzeichen haben darf. Der Buchstabe h ist üblich, kollidiert aber in manchen Gebieten mit der Schrittweite oder der Entropie; wählen Sie Buchstaben, die sich nicht überschneiden. Bei mehreren Nebenbedingungen indizieren Sie mit j, um sie vom Ungleichungsindex i zu unterscheiden.",
  },
  "lagrangian": {
    name: "Lagrange-Funktion",
    meaning: "Lagrange-Funktion, die eine Zielfunktion mit ihren durch Multiplikatoren lambda gewichteten Nebenbedingungen verbindet.",
    usage: "Die Lagrange-Funktion lautet \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x), und die duale Funktion ist ihr Infimum über x. Setzt man \\nabla_x \\mathcal{L} = 0, erhält man die Stationaritätsbedingung, die bei Extremwertaufgaben mit Nebenbedingungen und bei SVM-Herleitungen verwendet wird. \\mathcal liefert das kalligraphische L und funktioniert nur für Großbuchstaben. Da dasselbe \\mathcal{L} im maschinellen Lernen auch Verlustfunktionen bezeichnet, schreiben Arbeiten, die beides verwenden, für eines davon manchmal L oder \\Lambda. Manche Lehrbücher verwenden die umgekehrte Vorzeichenkonvention, f - \\lambda g, geben Sie Ihre also an.",
  },
  "gradient": {
    name: "Gradient",
    meaning: "Gradient von f in x: der Vektor der ersten partiellen Ableitungen, der in Richtung des steilsten Anstiegs zeigt.",
    usage: "Der Gradient \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top treibt Verfahren erster Ordnung wie das Gradientenverfahren, x_{k+1} = x_k - \\alpha \\nabla f(x_k), an, und sein Verschwinden ist die Optimalitätsbedingung erster Ordnung für Probleme ohne Nebenbedingungen. \\nabla ist das auf der Spitze stehende Dreieck, auch Nabla oder Del genannt. Derselbe Operator liefert in der Vektoranalysis die Divergenz, \\nabla \\cdot \\mathbf{F}, und die Rotation, \\nabla \\times \\mathbf{F}. Verwechseln Sie ihn nicht mit \\Delta, dem aufrechten Dreieck für den Laplace-Operator oder finite Differenzen. Fügen Sie einen Index hinzu, \\nabla_x f, wenn Sie nur nach einigen Variablen ableiten.",
  },
  "hessian": {
    name: "Hesse-Matrix",
    meaning: "Hesse-Matrix von f in x: die Matrix der zweiten partiellen Ableitungen, die die lokale Krümmung beschreibt.",
    usage: "In der Optimierung ist \\nabla^2 f(x) die Hesse-Matrix, die im Newton-Verfahren, x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k), und in Bedingungen zweiter Ordnung verwendet wird: Eine positiv definite Hesse-Matrix an einem stationären Punkt bedeutet ein striktes lokales Minimum. Vorsicht: In Physik und bei partiellen Differentialgleichungen bedeutet \\nabla^2 f den Laplace-Operator, einen Skalar gleich der Spur der Hesse-Matrix, oft als \\Delta f geschrieben. Stellen Sie klar, was Sie meinen, oder verwenden Sie H_f oder \\nabla\\nabla^\\top f für die Matrix. Die Konvexität einer zweimal differenzierbaren Funktion ist äquivalent zu \\nabla^2 f(x) \\succeq 0 überall.",
  },
  "optimal-value": {
    name: "Optimallösung",
    meaning: "x mit hochgestelltem Stern: die Optimallösung bzw. Minimalstelle eines Optimierungsproblems.",
    usage: "Der Stern markiert den optimalen Punkt, p^* = f(x^*) ist also der Optimalwert, und duale Optima schreibt man \\lambda^*, \\nu^*. Konvergenzraten werden über f(x_k) - f(x^*) oder \\|x_k - x^*\\| angegeben. ^* und ^\\ast erzeugen denselben Asterisk; ^\\star liefert einen Stern, der Verwechslungen mit komplex Konjugierten, Adjungierten oder dem Kleene-Stern vermeidet, die ebenfalls einen Asterisk verwenden. Hat x zusätzlich einen Index, sehen x_k^* und x^*_k identisch aus. Unterscheiden Sie x^* von \\hat{x}, das üblicherweise eine Schätzung oder Näherungslösung bezeichnet.",
  },
  "feasible-set": {
    name: "Zulässige Menge",
    meaning: "Kalligraphisches X, häufig verwendet für die zulässige Menge oder den Bereich, den eine Optimierungsvariable durchläuft.",
    usage: "Kalligraphische Großbuchstaben benennen Mengen in Optimierung und Lerntheorie: x \\in \\mathcal{X} für den zulässigen Bereich, \\mathcal{Y} für Labels, \\mathcal{D} für eine Datenverteilung, \\mathcal{H} für eine Hypothesenklasse. \\mathcal unterstützt nur Großbuchstaben; Kleinbuchstaben als Argument ergeben unvorhersehbare Zeichen. Für eine verschnörkeltere Schreibschrift liefert \\mathscr einen anderen Stil, während \\mathbb{X} Blackboard-Fettdruck ergibt, der eher für Zahlbereiche verwendet wird. Die Projektion auf die Menge schreibt man \\Pi_{\\mathcal{X}}(y). Definieren Sie die Menge einmal explizit, z. B. \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}.",
  },
  "kkt-conditions": {
    name: "KKT-Bedingungen",
    meaning: "Stationaritätsbedingung des KKT-Systems: Der Gradient der Zielfunktion wird durch die gewichteten Gradienten der Nebenbedingungen ausgeglichen.",
    usage: "Diese Zeile ist die erste der Karush-Kuhn-Tucker-Bedingungen; das vollständige System ergänzt primale Zulässigkeit g(x) \\leq 0, duale Zulässigkeit \\lambda \\geq 0 und komplementären Schlupf \\lambda g(x) = 0. Bei mehreren Nebenbedingungen verallgemeinert sie sich zu \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0. Setzen Sie das ganze System zur besseren Lesbarkeit in eine cases- oder aligned-Umgebung. Die Vorzeichenkonventionen unterscheiden sich: Wird die Lagrange-Funktion als f - \\lambda g geschrieben, wird das Plus zum Minus, passen Sie es also Ihrer Definition an. Die explizite Auswertung in x^* vermeidet Mehrdeutigkeiten.",
  },
  "positive-definite": {
    name: "Positive Definitheit",
    meaning: "Bedingung für eine positiv definite Matrix: A \\succ 0 bedeutet x^T A x > 0 für jeden Vektor x ungleich null.",
    usage: "In Matrixanalysis und semidefiniter Programmierung drückt \\succ die Loewner-Ordnung aus, A \\succ B bedeutet also, dass A - B positiv definit ist. Eine Hesse-Matrix \\nabla^2 f(x) \\succ 0 belegt strikte Konvexität, und eine Kovarianzmatrix \\Sigma \\succ 0 ist invertierbar. \\succ ist ein Relationssymbol und erhält daher automatisch Relationsabstand. Vermeiden Sie > für Matrizen, da es einen elementweisen Vergleich nahelegt. Ähnlich aussehende Zeichen sind \\succcurlyeq, eine geschwungene Variante, die manche Autoren für den semidefiniten Fall verwenden, und \\gg, das „viel größer als“ bedeutet. Als gleichwertige Mengenschreibweise dient A \\in \\mathbb{S}^n_{++}.",
    example: "\\Sigma \\succ 0 \\implies \\Sigma^{-1} \\text{ existiert}",
  },
  "positive-semidefinite": {
    name: "Positive Semidefinitheit",
    meaning: "Bedingung für positive Semidefinitheit: A \\succeq 0 bedeutet x^T A x \\geq 0 für alle Vektoren x.",
    usage: "Semidefinite Nebenbedingungen X \\succeq 0 definieren semidefinite Programme, und die Konvexität einer glatten Funktion ist äquivalent zu \\nabla^2 f(x) \\succeq 0. Gram- und Kovarianzmatrizen sind stets positiv semidefinit. \\succeq zeichnet das Nachfolgerzeichen mit einem geraden Strich darunter; \\succcurlyeq ist eine Variante mit gebogenem Strich, die manche Optimierungstexte bevorzugen, wählen Sie also eine und bleiben Sie dabei. Die strikte Version ist \\succ. Die Menge solcher Matrizen schreibt man oft \\mathbb{S}^n_+, und Bedingungen über das Schur-Komplement sind ein gängiger Weg, diese Nebenbedingungen in Blockform anzugeben.",
    example: "\\min_{X} \\operatorname{tr}(CX) \\quad \\text{u.d.N.} \\quad X \\succeq 0",
  },
};

export default text;
