import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  "manifold": {
    name: "Mannigfaltigkeit",
    meaning: "Kalligrafisches M, die übliche Bezeichnung einer glatten Mannigfaltigkeit in Arbeiten zu Differentialgeometrie und Topologie.",
    usage: "\\mathcal{M} statt eines einfachen kursiven M zu schreiben signalisiert, dass das Objekt ein Raum ist und keine Matrix oder Zahl, was hilft, wenn M schon vergeben ist. Karten schreibt man \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n und die Dimension als \\dim \\mathcal{M} = n. Derselbe Buchstabe bezeichnet auch Kripke-Modelle in der Logik und Modulräume in der algebraischen Geometrie, definieren Sie ihn also einmal im Text. \\mathcal hat nur für lateinische Großbuchstaben verlässliche Glyphen; für ein geschwungeneres Schreibschrift-M verwenden Sie \\mathscr{M} und bleiben in einer Arbeit bei einem Stil.",
  },
  "tangent-space": {
    name: "Tangentialraum",
    meaning: "Tangentialraum der Mannigfaltigkeit M im Punkt p: der Vektorraum aller Geschwindigkeitsvektoren von Kurven durch p.",
    usage: "Für eine n-dimensionale Mannigfaltigkeit ist T_p M ein n-dimensionaler reeller Vektorraum mit der Koordinatenbasis \\partial/\\partial x^i in p. Das Differential einer glatten Abbildung schreibt man dF_p: T_p M \\to T_{F(p)} N, und ein Vektorfeld ordnet jedem p ein Element von T_p M zu. Im Mathematikmodus wird das Leerzeichen zwischen T_p und M ignoriert, die Ausgabe ist also in beiden Fällen das kompakte T_pM; fügen Sie \\, ein, wenn Sie einen sichtbaren Abstand wünschen. Heißt die Mannigfaltigkeit \\mathcal{M}, schreiben Sie der Einheitlichkeit halber T_p\\mathcal{M}.",
  },
  "cotangent-space": {
    name: "Kotangentialraum",
    meaning: "Kotangentialraum in p: der Dualraum von T_p M, bestehend aus linearen Funktionalen (Kovektoren) auf den Tangentialvektoren in p.",
    usage: "Elemente von T^*_p M sind Kovektoren wie das Differential df_p, und die Koordinatendifferentiale dx^i bilden die zu \\partial/\\partial x^i duale Basis. Ob der Stern vor oder nach dem Index steht (T^*_p M oder T_p^* M), ergibt dieselbe Ausgabe, da TeX Hoch- und Tiefstellung unabhängig von der Reihenfolge übereinander setzt. Verwenden Sie ^* statt ^{\\ast} nur der Kürze halber; beide ergeben denselben Stern. Die Metrik identifiziert T_p M mit T^*_p M durch Herunterziehen eines Index, so werden Gradienten zu Kovektoren.",
  },
  "tangent-bundle": {
    name: "Tangentialbündel",
    meaning: "Tangentialbündel: die disjunkte Vereinigung aller Tangentialräume T_p M, selbst eine Mannigfaltigkeit der doppelten Dimension von M.",
    usage: "Ein Punkt von TM ist ein Paar (p, v) mit v \\in T_p M, und die Projektion \\pi: TM \\to M vergisst den Vektor. Ein Vektorfeld ist genau ein glatter Schnitt X: M \\to TM mit \\pi \\circ X = \\mathrm{id}. Der Pushforward von F: M \\to N wird oft TF oder dF: TM \\to TN geschrieben. Da TeX die beiden kursiven Buchstaben ohne Lücke setzt, liest sich TM korrekt als ein Name; ist eine Verwechslung mit einem Produkt T \\cdot M möglich, erwähnen Sie das im Text.",
  },
  "cotangent-bundle": {
    name: "Kotangentialbündel",
    meaning: "Kotangentialbündel: das Bündel aller Kotangentialräume von M, der natürliche Phasenraum der Hamiltonschen Mechanik.",
    usage: "Punkte von T^*M sind Paare (q, p) aus einer Position und einem Kovektor, weshalb die klassische Mechanik hier lebt. Es trägt eine kanonische symplektische Form \\omega = dq^i \\wedge dp_i, und Einsformen auf M sind Schnitte von T^*M. Formen höheren Grades sind Schnitte von \\Lambda^k T^*M, geschrieben mit \\Lambda oder \\bigwedge^k. Der Stern ist hochgestellt, T^*M und T^{*}M sehen also gleich aus; vermeiden Sie T*M ohne Zirkumflex, das einen Stern wie einen binären Operator auf die Grundlinie setzt.",
  },
  "covariant-derivative": {
    name: "Kovariante Ableitung",
    meaning: "Kovariante Ableitung des Vektorfelds Y in Richtung X, definiert durch einen affinen Zusammenhang \\nabla.",
    usage: "Ein affiner Zusammenhang ist in X linear über Funktionen und erfüllt die Leibniz-Regel \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y. Der Levi-Civita-Zusammenhang ist der eindeutige torsionsfreie, mit der Metrik verträgliche Zusammenhang, woraus \\nabla_X Y - \\nabla_Y X = [X, Y] folgt. In Koordinaten reduziert er sich auf \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j. Die Richtung im Index wird klein gesetzt; bei langen Ausdrücken wie \\nabla_{\\dot\\gamma}\\dot\\gamma setzen Sie den Index in geschweifte Klammern, damit der Punkt angehängt bleibt.",
  },
  "christoffel-symbol": {
    name: "Christoffel-Symbol",
    meaning: "Christoffel-Symbole: die Zusammenhangskoeffizienten, die angeben, wie sich die Koordinatenbasisvektoren von Punkt zu Punkt ändern.",
    usage: "Für den Levi-Civita-Zusammenhang berechnet man sie aus der Metrik als \\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}), und sie sind symmetrisch in i und j. Sie sind nicht die Komponenten eines Tensors, weshalb sie in Normalkoordinaten in einem Punkt verschwinden können. Griechische Großbuchstaben sind in LaTeX standardmäßig aufrecht; wenn Ihr Stil kursiv verlangt, verwenden Sie \\varGamma. Manche älteren Texte schreiben die zweite Art als Symbol mit geschweiften Klammern, heute ist aber die \\Gamma-Form Standard.",
  },
  "riemann-curvature": {
    name: "Riemannscher Krümmungstensor",
    meaning: "Komponenten des Riemannschen Krümmungstensors, der misst, wie die Parallelverschiebung entlang einer kleinen Schleife einen Vektor nicht in sich zurückführt.",
    usage: "In einer gängigen Konvention gilt R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}, Vorzeichen und Indexreihenfolge unterscheiden sich jedoch zwischen Lehrbüchern, geben Sie Ihre also an. Als R^l_{ijk} geschrieben setzt TeX l direkt über i, wodurch verborgen bleibt, welcher Platz hochgestellt ist; um die Indizes zu versetzen, verwenden Sie R^l{}_{ijk}, wobei die leere Gruppe den Index nach rechts schiebt. Herunterziehen des ersten Index ergibt R_{lijk}, das unter den üblichen Konventionen im ersten und im letzten Indexpaar antisymmetrisch ist; prüfen Sie aber die Indexstellung Ihrer Quelle, bevor Sie Identitäten zitieren.",
  },
  "ricci-tensor": {
    name: "Ricci-Tensor",
    meaning: "Ricci-Tensor: die Spur des Riemann-Tensors über ein Indexpaar, eine symmetrische Krümmungsgröße mit zwei Indizes.",
    usage: "Man erhält ihn durch Kontraktion, in einer gängigen Konvention R_{ij} = R^k_{ikj}, und er bestimmt die Volumenverzerrung entlang von Geodäten. Die Einsteinschen Feldgleichungen lauten R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}, und eine Mannigfaltigkeit mit R_{ij} = \\lambda g_{ij} heißt Einstein-Mannigfaltigkeit. Physiker indizieren meist mit griechischen Buchstaben \\mu\\nu, Mathematiker mit lateinischen ij. Ricci-flach bedeutet R_{ij} = 0, die Bedingung, die Calabi-Yau-Metriken definiert. Manche Autoren schreiben \\mathrm{Ric} für den koordinatenfreien Tensor; \\operatorname{Ric} ergibt denselben aufrechten Text mit Operatorabständen.",
  },
  "scalar-curvature": {
    name: "Skalarkrümmung",
    meaning: "Skalarkrümmung: die volle Spur des Ricci-Tensors, eine einzelne Zahl in jedem Punkt einer Riemannschen Mannigfaltigkeit.",
    usage: "Sie ist durch R = g^{ij} R_{ij} definiert und in zwei Dimensionen gleich dem Doppelten der Gaußschen Krümmung K. Die Einstein-Hilbert-Wirkung integriert sie, S = \\int R \\sqrt{-g}\\, d^4x, und das Yamabe-Problem fragt nach einer konformen Metrik mit konstantem R. Da ein bloßes R auch die reellen Zahlen, eine Relation oder einen Radius bezeichnet, schreiben viele Autoren stattdessen \\mathrm{Scal} oder s; verwenden Sie in derselben Arbeit niemals R für \\mathbb{R}. Setzen Sie sie im Mathematikmodus als einfaches kursives R.",
  },
  "metric-tensor": {
    name: "Metrischer Tensor",
    meaning: "Komponenten des metrischen Tensors, der symmetrischen positiv definiten Form, die Längen und Winkel auf einer Mannigfaltigkeit festlegt.",
    usage: "Das Linienelement schreibt man ds^2 = g_{ij}\\, dx^i dx^j mit impliziter Summation, und die Länge einer Kurve ist \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt. In der Relativitätstheorie ist die Metrik lorentzsch und wird g_{\\mu\\nu} indiziert, zum Beispiel die Minkowski-Metrik \\eta_{\\mu\\nu}. Ihre Determinante erscheint in der Volumenform \\sqrt{\\det g}\\, dx^1 \\cdots dx^n, oft abgekürzt als \\sqrt{g}. Fügen Sie mit \\, schmale Abstände zwischen Metrik und Differentialen ein, damit ds^2 = g_{ij}\\,dx^i\\,dx^j nicht gedrängt wirkt. In Matrixform schreibt man sie oft (g_{ij}) oder einfach g.",
  },
  "inverse-metric": {
    name: "Inverse Metrik",
    meaning: "Inverse Metrik: die inverse Matrix von g_{ij}, mit der man Indizes hochzieht sowie Spuren und Gradienten bildet.",
    usage: "Sie ist durch g^{ij} g_{jk} = \\delta^i_k definiert und in einem Orthonormalrahmen daher gleich der Einheitsmatrix. Das Hochziehen eines Index verwendet sie direkt, v^i = g^{ij} v_j, und der Gradient einer Funktion hat die Komponenten (\\nabla f)^i = g^{ij}\\partial_j f. Der Laplace-Beltrami-Operator ist \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f). Verwechseln Sie g^{ij} nicht mit dem Kehrwert einer einzelnen Komponente; es ist ein Eintrag der inversen Matrix, also g^{11} \\ne 1/g_{11}, sofern die Metrik nicht diagonal ist.",
  },
  "exterior-derivative": {
    name: "Äußere Ableitung",
    meaning: "Äußere Ableitung einer Differentialform \\omega, die ihren Grad um eins erhöht und grad, rot und div verallgemeinert.",
    usage: "Der Operator erfüllt d \\circ d = 0 und die graduierte Leibniz-Regel d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta für eine k-Form \\alpha. Der Satz von Stokes wird zu \\int_M d\\omega = \\int_{\\partial M} \\omega, und eine Form heißt geschlossen, wenn d\\omega = 0, und exakt, wenn \\omega = d\\eta. Viele Stile setzen den Operator aufrecht als \\mathrm{d}\\omega, um ihn von einer Variablen d zu unterscheiden; wofür Sie sich auch entscheiden, verwenden Sie es einheitlich, auch in Integralen wie \\int f\\, dx.",
  },
  "wedge-product": {
    name: "Dachprodukt",
    meaning: "Dachprodukt (äußeres Produkt) zweier Differentialformen, ein antisymmetrisches Produkt, das Formen höheren Grades aufbaut.",
    usage: "Für eine k-Form \\alpha und eine l-Form \\beta ist es graduiert kommutativ, \\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha, sodass eine Einsform mit sich selbst multipliziert null ergibt. Volumenformen schreibt man dx^1 \\wedge \\cdots \\wedge dx^n. \\wedge ist ein binärer Operator, TeX setzt also auf beiden Seiten einen mittleren Abstand; \\land erzeugt dasselbe Zeichen und bleibt besser dem logischen Und vorbehalten. Für die äußere Potenz oder ein großes Dach über eine Indexmenge verwenden Sie \\bigwedge, wie in \\bigwedge^k V.",
  },
  "lie-derivative": {
    name: "Lie-Ableitung",
    meaning: "Lie-Ableitung entlang des Vektorfelds X, die misst, wie sich ein Tensor unter dem von X erzeugten Fluss ändert.",
    usage: "Auf Funktionen ist sie einfach \\mathcal{L}_X f = Xf, auf Vektorfeldern die Lie-Klammer \\mathcal{L}_X Y = [X, Y], und auf Formen liefert die Cartan-Formel \\mathcal{L}_X = d\\iota_X + \\iota_X d. Anders als \\nabla_X braucht sie weder Zusammenhang noch Metrik. Ein Killing-Vektorfeld erfüllt \\mathcal{L}_X g = 0. Das kalligrafische L ist die übliche Wahl; \\pounds_X kommt in manchen Texten zur Relativitätstheorie vor, \\mathcal{L} ist aber klarer. Vermeiden Sie Verwechslungen mit einer Lagrange-Funktion \\mathcal{L} in Physikarbeiten, die beides verwenden.",
  },
  "lie-bracket": {
    name: "Lie-Klammer",
    meaning: "Lie-Klammer zweier Vektorfelder: das Vektorfeld, das auf Funktionen durch X(Yf) - Y(Xf) wirkt.",
    usage: "Die Klammer ist bilinear, antisymmetrisch und erfüllt die Jacobi-Identität [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0, wodurch die Vektorfelder eine Lie-Algebra bilden. In Koordinaten sind ihre Komponenten X^j\\partial_j Y^i - Y^j\\partial_j X^i. Dieselbe Schreibweise mit eckigen Klammern ist der Kommutator AB - BA von Matrizen oder Quantenoperatoren. Einfache [ und ] genügen bei kurzen Argumenten; bei hohem Inhalt verwenden Sie \\left[ \\right] oder \\bigl[ \\bigr], damit die Klammern mitwachsen. Sie misst, inwieweit die Flüsse von X und Y nicht kommutieren, und Koordinatenvektorfelder erfüllen stets [\\partial_i, \\partial_j] = 0.",
  },
  "connection-form": {
    name: "Zusammenhangsform",
    meaning: "Zusammenhangs-1-Formen: eine Matrix von 1-Formen, die einen Zusammenhang bezüglich eines gewählten Rahmens des Bündels beschreibt.",
    usage: "In Cartans Methode des bewegten Rahmens mit Korahmen e^i lautet die erste Strukturgleichung für einen torsionsfreien Zusammenhang de^i = -\\omega^i_j \\wedge e^j. Für einen metrischen Zusammenhang in einem Orthonormalrahmen ist die Matrix antisymmetrisch, \\omega_{ij} = -\\omega_{ji}. Physiker nennen dasselbe Objekt Spinzusammenhang \\omega^a{}_b. Verwenden Sie \\omega^i{}_j, um die Indizes zu versetzen, wenn ihre Reihenfolge wichtig ist, und verwechseln Sie dies nicht mit einer symplektischen oder Kähler-Form, die ebenfalls \\omega geschrieben wird. Bei einem Rahmenwechsel transformiert sie sich inhomogen, ist also wie die Christoffel-Symbole kein Tensor.",
  },
  "curvature-form": {
    name: "Krümmungsform",
    meaning: "Krümmungs-2-Formen: eine Matrix von 2-Formen, die die Krümmung eines Zusammenhangs in einem gegebenen Rahmen kodiert.",
    usage: "Cartans zweite Strukturgleichung definiert sie als \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j, kompakt \\Omega = d\\omega + \\omega \\wedge \\omega. Die Entwicklung im Korahmen liefert den Riemann-Tensor zurück, \\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l. Die Chern-Weil-Theorie baut aus diesen Formen charakteristische Klassen wie \\operatorname{tr}(\\Omega \\wedge \\Omega). Das große \\Omega ist standardmäßig aufrecht; \\varOmega liefert eine kursive Version. Derselbe Buchstabe bezeichnet auch den Raum der Formen \\Omega^k(M), der Kontext sollte die Bedeutung also klarstellen.",
  },
  "geodesic": {
    name: "Geodäte",
    meaning: "Eine durch t parametrisierte Kurve auf einer Mannigfaltigkeit; in diesem Kontext eine Geodäte, die Kurve mit verschwindender kovarianter Beschleunigung.",
    usage: "Eine Geodäte erfüllt \\nabla_{\\dot\\gamma}\\dot\\gamma = 0, in Koordinaten \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0. Die Anfangsdaten \\gamma(0) = p und \\dot\\gamma(0) = v definieren die Exponentialabbildung \\exp_p(v) = \\gamma(1). Verwenden Sie \\dot{\\gamma} und \\ddot{\\gamma} für Zeitableitungen; \\gamma'(t) ist die Alternative, wenn t keine Zeit ist. Schreiben Sie \\dot\\gamma^k statt \\dot{\\gamma^k}, damit der Punkt nur über dem Buchstaben steht, und halten Sie \\gamma klein, da \\Gamma für Christoffel-Symbole reserviert ist. Auf einer runden Sphäre sind die Geodäten Bögen von Großkreisen.",
  },
  "parallel-transport": {
    name: "Parallelverschiebung",
    meaning: "Parallelverschiebung entlang der Kurve \\gamma: die lineare Abbildung, die Vektoren zwischen Tangentialräumen bewegt, ohne sie zu drehen.",
    usage: "Sie ist eine Abbildung P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M und für einen metrikverträglichen Zusammenhang eine Isometrie. Die Verschiebung entlang geschlossener Schleifen erzeugt die Holonomiegruppe, deren Nichttrivialität Krümmung widerspiegelt. Manche Texte schreiben \\tau_\\gamma, \\Pi_\\gamma oder P^\\gamma_{t \\leftarrow s}, um die Endpunkte festzuhalten. Bei einem einbuchstabigen Index sind die geschweiften Klammern in P_{\\gamma} optional, behalten Sie sie aber, wenn der Index wächst, wie in P_{\\gamma|[0,t]}. Ein Vektorfeld V ist parallel entlang \\gamma, wenn \\nabla_{\\dot\\gamma} V = 0, und P_\\gamma bildet V(0) auf V(1) ab. Entlang einer kleinen Schleife unterscheidet sich die Verschiebung von der Identität um einen Term proportional zur Krümmung.",
  },
};

export default text;
