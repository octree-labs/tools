import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  "alpha": {
    name: "Alpha",
    meaning: "Kleines griechisches Alpha, die Standardbezeichnung für Winkel, Signifikanzniveaus, Lernraten und Koeffizienten.",
    usage: "In der Statistik ist \\alpha das Signifikanzniveau eines Tests, etwa \\alpha = 0.05, und der Formparameter der Beta- und der Gammaverteilung. Physiker verwenden es für die Feinstrukturkonstante \\alpha \\approx 1/137 und für Alphateilchen. In der Geometrie bezeichnet es Winkel, oft zusammen mit \\beta und \\gamma. Einen Befehl \\Alpha gibt es nicht, weil das große Alpha mit dem lateinischen A identisch ist; schreiben Sie A oder \\mathrm{A}. Achten Sie darauf, dass \\alpha in handschriftähnlichen Schriften nicht mit dem lateinischen a oder dem Proportionalitätszeichen \\propto verwechselt wird.",
    example: "P(\\text{Ablehnung von } H_0 \\mid H_0 \\text{ wahr}) = \\alpha",
  },
  "beta": {
    name: "Beta",
    meaning: "Kleines griechisches Beta, Standard für Regressionskoeffizienten, Winkel und den zweiten Parameter einer Verteilung.",
    usage: "Regressionsmodelle schreiben y = \\beta_0 + \\beta_1 x + \\varepsilon, und \\hat{\\beta} kennzeichnet die geschätzten Koeffizienten. Beim Hypothesentest ist \\beta die Wahrscheinlichkeit eines Fehlers 2. Art, die Teststärke ist also 1 - \\beta. Die Physik verwendet es für v/c in der Relativitätstheorie und für die inverse Temperatur \\beta = 1/(k_B T). In der Finanzwirtschaft bezeichnet es das Beta einer Aktie gegenüber dem Markt. Einen Befehl \\Beta gibt es nicht, da das große Beta wie das lateinische B aussieht. Das deutsche Eszett ß ist ein anderes Zeichen, das man mit \\ss schreibt, und darf nicht anstelle von \\beta verwendet werden.",
  },
  "gamma": {
    name: "Gamma",
    meaning: "Kleines griechisches Gamma, verwendet für die Euler-Mascheroni-Konstante, den Lorentz-Faktor und Diskontfaktoren.",
    usage: "\\gamma ist der Lorentz-Faktor \\gamma = 1/\\sqrt{1 - v^2/c^2} in der speziellen Relativitätstheorie und die Euler-Mascheroni-Konstante \\gamma \\approx 0.5772 in der Analysis. Beim bestärkenden Lernen ist es der Diskontfaktor in \\sum_t \\gamma^t r_t, und die Physik verwendet es für Gammastrahlen und Photonen. In der Geometrie bezeichnet es oft den dritten Winkel eines Dreiecks nach \\alpha und \\beta, in der Funktionentheorie ist \\gamma eine Kurve oder ein Integrationsweg. Beachten Sie, dass das große \\Gamma, die Gammafunktion, ein eigener Befehl ist; schreiben Sie für die Konstante nicht \\Gamma.",
  },
  "gamma-upper": {
    name: "Großes Gamma",
    meaning: "Großes griechisches Gamma, vor allem bekannt als Gammafunktion Γ(z), die die Fakultät verallgemeinert.",
    usage: "Für positive ganze Zahlen gilt \\Gamma(n) = (n-1)!, allgemein \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt. Es bezeichnet außerdem die Christoffel-Symbole \\Gamma^k_{ij} in der Differentialgeometrie, die Gammaverteilung und einen Typisierungskontext \\Gamma \\vdash e : \\tau in der Typentheorie. Große griechische Buchstaben stehen in LaTeX standardmäßig aufrecht; für eine kursive Version verwenden Sie \\varGamma. Graphentheoretiker schreiben manchmal \\Gamma(v) für die Nachbarschaft eines Knotens. Verwechseln Sie es nicht mit einem gedrehten lateinischen L oder mit \\gamma, der kleinen Konstante.",
  },
  "delta": {
    name: "Delta",
    meaning: "Kleines griechisches Delta, verwendet für kleine Größen, die Dirac-Deltafunktion und das Kronecker-Delta.",
    usage: "Die Analysis kombiniert es in Definitionen von Grenzwert und Stetigkeit mit Epsilon, wie in |x - a| < \\delta. Die Dirac-Deltafunktion \\delta(x) erfüllt \\int f(x)\\delta(x - a)\\,dx = f(a), und das Kronecker-Delta \\delta_{ij} ist 1 für i = j und sonst 0. Die Variationsrechnung schreibt \\delta S für eine Variation, und die Chemie verwendet \\delta+ und \\delta- für Partialladungen. Es unterscheidet sich von \\partial, dem geschwungenen Zeichen für partielle Ableitungen, und vom großen \\Delta für endliche Änderungen.",
  },
  "delta-upper": {
    name: "Großes Delta",
    meaning: "Großes griechisches Delta, verwendet für die endliche Änderung einer Größe, den Laplace-Operator und Diskriminanten.",
    usage: "Physik und Chemie schreiben \\Delta x für eine Ortsänderung und \\Delta H für eine Enthalpieänderung, wie in \\Delta G = \\Delta H - T\\Delta S. In der Analysis ist \\Delta der Laplace-Operator \\Delta u = \\nabla^2 u, in der Algebra die Diskriminante \\Delta = b^2 - 4ac. Geometer verwenden es für ein Dreieck, wobei \\triangle ein eigenes, ungefülltes Symbol ist, das sich dafür besser eignet. Große griechische Buchstaben stehen aufrecht; verwenden Sie \\varDelta für eine kursive Version. Verwechseln Sie \\Delta nicht mit \\nabla, demselben Dreieck auf dem Kopf.",
  },
  "epsilon": {
    name: "Epsilon",
    meaning: "Kleines Epsilon in Mondsichelform ϵ, verwendet für kleine positive Größen und Fehlerterme.",
    usage: "\\epsilon erzeugt die Mondsichelform ϵ, während \\varepsilon die offene, geschwungene Form ε liefert, die viele Leser mit dem handschriftlichen Epsilon verbinden. Analytiker verwenden beide für eine beliebig kleine Zahl in \\forall \\epsilon > 0, sollten aber innerhalb eines Artikels bei einer Form bleiben. Viele Autoren reservieren \\epsilon für kleine Größen und verwenden \\varepsilon für Fehlerterme oder Rauschen. Verwechseln Sie keine der beiden mit dem Elementzeichen \\in, das ϵ ähnelt, aber eine Relation mit anderem Abstand ist. Die Physik verwendet außerdem \\epsilon_0 für die elektrische Feldkonstante.",
  },
  "epsilon-variant": {
    name: "Epsilon (Variante)",
    meaning: "Kleines Varianten-Epsilon ε, die offene, geschwungene Form, die oft für Fehlerterme und kleine Zahlen bevorzugt wird.",
    usage: "\\varepsilon erzeugt die gerundete Form ε, die dem handschriftlichen Epsilon näher kommt als das mondsichelförmige \\epsilon. Die Statistik schreibt den Fehlerterm einer Regression als \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2), und viele Analysis-Lehrbücher bevorzugen \\varepsilon in Epsilon-Delta-Beweisen. Die Physik verwendet \\varepsilon_0 für die elektrische Feldkonstante und \\varepsilon_{ijk} für das Levi-Civita-Symbol. Da die beiden Formen leicht versehentlich gemischt werden, empfiehlt es sich, eine davon in der Präambel umzudefinieren, sodass Sie nur einen Befehl tippen. Verwenden Sie es nicht als Ersatz für das Elementzeichen \\in.",
  },
  "zeta": {
    name: "Zeta",
    meaning: "Kleines griechisches Zeta, vor allem bekannt durch die Riemannsche Zetafunktion und den Dämpfungsgrad.",
    usage: "Die Riemannsche Zetafunktion \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} ist die typische Anwendung, mit der Lösung des Basler Problems \\zeta(2) = \\pi^2/6. Ingenieure verwenden \\zeta als Dämpfungsgrad eines Systems zweiter Ordnung, wie in \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0. Die Funktionentheorie verwendet es für eine komplexe Hilfsvariable, die Zahlentheorie für Einheitswurzeln \\zeta_n = e^{2\\pi i/n}. Einen Befehl \\Zeta gibt es nicht, weil das große Zeta dem lateinischen Z gleicht. Handschriftlich wird es leicht mit \\xi verwechselt; prüfen Sie also, welcher Buchstabe in einer Quelle gemeint ist.",
  },
  "eta": {
    name: "Eta",
    meaning: "Kleines griechisches Eta, verwendet für Lernraten, Wirkungsgrad, Viskosität und die Minkowski-Metrik.",
    usage: "Im maschinellen Lernen ist \\eta die übliche Lernrate in Aktualisierungen wie w \\leftarrow w - \\eta \\nabla L(w). Die Thermodynamik schreibt den Wirkungsgrad als \\eta = W/Q_h, die Strömungsmechanik verwendet es für die dynamische Viskosität, und die Relativitätstheorie schreibt die Minkowski-Metrik \\eta_{\\mu\\nu}. Die Statistik verwendet es manchmal für den linearen Prädiktor \\eta = X\\beta eines verallgemeinerten linearen Modells. Das große Eta sieht wie das lateinische H aus, daher gibt es keinen Befehl \\Eta. Verwechseln Sie \\eta auf Folien in serifenloser Schrift nicht mit dem lateinischen n, da die Unterlänge dort schwer zu erkennen sein kann.",
  },
  "theta": {
    name: "Theta",
    meaning: "Kleines griechisches Theta, die übliche Bezeichnung für Winkel und für Modellparameter in Statistik und maschinellem Lernen.",
    usage: "Trigonometrie und Polarkoordinaten verwenden \\theta für Winkel, wie in (r\\cos\\theta, r\\sin\\theta). Statistik und maschinelles Lernen nutzen es für Parametervektoren, mit \\hat{\\theta} für einen Schätzer und \\theta^* für das Optimum. Asymptotische Groß-Theta-Schranken verwenden das große \\Theta, nicht \\theta. Die Variante \\vartheta ist eine schreibschriftähnliche Form, die gelegentlich für einen zweiten Winkel oder in der Physik verwendet wird. Bei einem Schätzer sitzt das Dach mit \\hat{\\theta} besser zentriert als mit \\widehat{\\theta}, das für breitere Argumente gedacht ist. In der Bayesschen Notation bezeichnet \\theta auch die unbekannte Größe in der A-posteriori-Verteilung p(\\theta \\mid x).",
  },
  "theta-upper": {
    name: "Großes Theta",
    meaning: "Großes griechisches Theta, Standard für scharfe asymptotische Schranken und Parameterräume.",
    usage: "Die Algorithmenanalyse schreibt \\Theta(n \\log n) für eine Schranke, die nach oben und unten gilt, neben O und \\Omega. Die Statistik verwendet \\Theta für einen Parameterraum, wie in \\theta \\in \\Theta. Die Physik nutzt es für die Heaviside-Funktion \\Theta(x) und in manchen Texten für die Temperatur. Große griechische Buchstaben stehen in LaTeX aufrecht; \\varTheta liefert eine kursive Form, falls ein Stil sie verlangt. Verwechseln Sie \\Theta nicht mit dem Zeichen für die leere Menge oder mit einer durchgestrichenen Ziffer 0.",
  },
  "iota": {
    name: "Iota",
    meaning: "Kleines griechisches Iota, ein schmaler Buchstabe ohne Punkt, verwendet für Inklusionsabbildungen und Indexschreibweisen.",
    usage: "\\iota bezeichnet häufig eine Inklusion oder Einbettung, wie in \\iota : A \\hookrightarrow X, und in der Differentialgeometrie das innere Produkt \\iota_X \\omega. APL und einige funktionale Sprachen verwenden iota für einen Indexgenerator, was in Informatiktexten auftaucht. Da es einem i ohne Punkt ähnelt, achten Sie darauf, es nicht mit \\imath zu verwechseln, dem punktlosen i unter Akzenten. Einen Befehl \\Iota gibt es nicht; das große Iota sieht wie das lateinische I aus. Es ist so selten, dass eine kurze Definition bei der ersten Verwendung den Lesern hilft.",
  },
  "kappa": {
    name: "Kappa",
    meaning: "Kleines griechisches Kappa, verwendet für Krümmung, Konditionszahlen und Cohens Kappa.",
    usage: "Die Differentialgeometrie schreibt die Krümmung einer Kurve als \\kappa = |\\gamma''(s)|, und die Numerik verwendet \\kappa(A) = \\|A\\|\\|A^{-1}\\| für die Konditionszahl einer Matrix. Die Statistik kennt Cohens \\kappa für die Übereinstimmung zwischen Beurteilern, die Physik verwendet es für die Wärmeleitfähigkeit oder die Dielektrizitätskonstante. Die Variante \\varkappa liefert eine andere Glyphe, die manche Autoren bevorzugen. Einen Befehl \\Kappa gibt es nicht, weil das große Kappa mit dem lateinischen K identisch ist. Vertauschen Sie \\kappa nicht mit dem lateinischen k, da viele Formeln beide verwenden.",
  },
  "lambda": {
    name: "Lambda",
    meaning: "Kleines griechisches Lambda, verwendet für Eigenwerte, Wellenlängen, Raten und die Stärke der Regularisierung.",
    usage: "Die lineare Algebra schreibt Av = \\lambda v für Eigenwert und Eigenvektor. Die Physik verwendet \\lambda für die Wellenlänge in c = \\lambda f, die Wahrscheinlichkeitstheorie für die Rate einer Poisson- oder Exponentialverteilung, und die Optimierung für Lagrange-Multiplikatoren und das Strafgewicht bei Ridge oder Lasso, \\lambda\\|w\\|^2. Die Informatik schreibt anonyme Funktionen im Lambda-Kalkül, \\lambda x.\\, x + 1. Das große \\Lambda ist ein eigener Befehl mit anderen Verwendungen. Auch Zeitpläne für Lernraten und exponentielle Glättung leihen sich \\lambda für Abklingfaktoren.",
  },
  "lambda-upper": {
    name: "Großes Lambda",
    meaning: "Großes griechisches Lambda, verbreitet für Diagonalmatrizen aus Eigenwerten und die kosmologische Konstante.",
    usage: "Die Spektralzerlegung A = Q\\Lambda Q^{-1} verwendet \\Lambda für die Diagonalmatrix der Eigenwerte. Die Kosmologie schreibt die kosmologische Konstante als \\Lambda, und das Standardmodell der Kosmologie wird \\Lambda\\text{CDM} gesetzt. Die Teilchenphysik verwendet es für das Lambda-Baryon, und Gittertheorie oder Zahlentheorie können mit \\Lambda ein Gitter oder die Mangoldt-Funktion \\Lambda(n) bezeichnen. Große griechische Buchstaben stehen in LaTeX aufrecht; verwenden Sie \\varLambda für eine kursive Form. Verwechseln Sie es nicht mit dem logischen Und \\wedge, einer anderen Glyphe mit Operatorabstand.",
  },
  "mu": {
    name: "My (Mu)",
    meaning: "Kleines griechisches My, Standard für den Mittelwert, Maße, Reibungskoeffizienten und das Präfix Mikro.",
    usage: "Die Wahrscheinlichkeitstheorie schreibt den Mittelwert als \\mu = E[X], eine Normalverteilung ist also \\mathcal{N}(\\mu, \\sigma^2). Die Maßtheorie verwendet \\mu für ein Maß, die Physik für den Reibungskoeffizienten, die magnetische Permeabilität \\mu_0 und die reduzierte Masse. Als Einheitenpräfix in \\mu m oder \\mu s erscheint es mathematisch kursiv, während typografische Normen ein aufrechtes Mikrozeichen verlangen, und \\mathrm ändert die Form eines griechischen Buchstabens nicht. Die Optimierung verwendet \\mu für Barriereparameter in Innere-Punkte-Verfahren.",
  },
  "nu": {
    name: "Ny (Nu)",
    meaning: "Kleines griechisches Ny, verwendet für Frequenz, Freiheitsgrade und kinematische Viskosität.",
    usage: "Die Physik schreibt die Photonenenergie als E = h\\nu, wobei \\nu die Frequenz ist, und die Strömungsmechanik verwendet \\nu für die kinematische Viskosität. Die Statistik nutzt \\nu für die Freiheitsgrade der studentschen t-Verteilung, und die Teilchenphysik schreibt Neutrinos als \\nu_e, \\nu_\\mu. Die Relativitätstheorie verwendet griechische Indizes \\mu\\nu für Tensorkomponenten, wie in g_{\\mu\\nu}. In vielen Schriften sieht \\nu dem lateinischen v sehr ähnlich, vermeiden Sie daher beide Buchstaben in derselben Formel. Einen Befehl \\Nu gibt es nicht; das große Ny ist das lateinische N.",
  },
  "xi": {
    name: "Xi",
    meaning: "Kleines griechisches Xi, ein geschlängelter Buchstabe für Zufallsvariablen, Hilfsvariablen und Dämpfung.",
    usage: "Texte zur Wahrscheinlichkeitstheorie verwenden \\xi oft für eine Zufallsvariable oder einen Rauschterm, und die Analysis nutzt es für eine Zwischenstelle, wie im Mittelwertsatz f(b) - f(a) = f'(\\xi)(b - a). Die Fourier-Analysis schreibt Frequenzvariablen als \\xi in \\hat{f}(\\xi). Manche Ingenieurtexte verwenden \\xi statt \\zeta für den Dämpfungsgrad. Da \\xi und \\zeta handschriftlich schwer zu unterscheiden sind, prüfen Sie, welcher Buchstabe in einer Quelle gemeint ist. Die Großform \\Xi ist ein eigener Befehl.",
  },
  "xi-upper": {
    name: "Großes Xi",
    meaning: "Großes griechisches Xi, ein Buchstabe aus drei Strichen, verwendet für das Xi-Baryon und einige spezielle Funktionen.",
    usage: "\\Xi ist in der Mathematik vergleichsweise selten. Teilchenphysiker verwenden es für die Xi-Baryonen, geschrieben \\Xi^0 und \\Xi^-, und in der analytischen Zahlentheorie bezeichnet es manchmal Riemanns Xi-Funktion \\Xi(t). Die statistische Mechanik schreibt gelegentlich die großkanonische Zustandssumme als \\Xi. Wie andere große griechische Buchstaben steht es in LaTeX aufrecht; \\varXi liefert die kursive Form. Verwechseln Sie es nicht mit dem Äquivalenzzeichen \\equiv, das drei gleich lange Striche und Relationsabstand hat.",
  },
  "pi": {
    name: "Pi",
    meaning: "Kleines griechisches Pi, die Kreiszahl 3,14159…, auch verwendet für Permutationen und Strategien (Policies).",
    usage: "\\pi ist das Verhältnis von Kreisumfang zu Durchmesser und erscheint in A = \\pi r^2, e^{i\\pi} + 1 = 0 und in Winkeln im Bogenmaß wie \\pi/2. Das bestärkende Lernen verwendet \\pi für eine Strategie \\pi(a \\mid s), die Kombinatorik für eine Permutation, und die Zahlentheorie schreibt \\pi(x) für die Primzahlzählfunktion. Die Variante \\varpi ist eine andere Glyphe. Wenn Pi eine Konstante ist, bevorzugen manche Stilrichtlinien eine aufrechte Form, Standard-LaTeX liefert jedoch ein kursives \\pi. Verwenden Sie nicht den großen Operator \\prod anstelle von \\pi oder umgekehrt.",
  },
  "pi-upper": {
    name: "Großes Pi",
    meaning: "Großes griechisches Pi, ein gewöhnlicher Buchstabe für Projektionen, Gewinn und osmotischen Druck.",
    usage: "\\Pi ist ein Buchstabe fester Größe, nicht der Produktoperator; für Produkte über einen Index verwenden Sie \\prod, das skaliert und Grenzen positioniert. Als Buchstabe bezeichnet \\Pi Projektionsabbildungen, die Gewinnfunktion in der Volkswirtschaftslehre, den osmotischen Druck und in der Informatik den Pi-Kalkül. Die Typentheorie schreibt abhängige Funktionstypen als \\Pi_{x:A} B(x). Die Komplexitätstheorie verwendet \\Pi_k für Stufen der Polynomialzeithierarchie. Große griechische Buchstaben stehen standardmäßig aufrecht, und \\varPi liefert bei Bedarf eine kursive Variante.",
  },
  "rho": {
    name: "Rho",
    meaning: "Kleines griechisches Rho, verwendet für Dichte, Korrelationskoeffizienten und Ladungsdichte.",
    usage: "Die Physik verwendet \\rho für die Massendichte, \\rho = m/V, und die Ladungsdichte in den Maxwell-Gleichungen \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0. Die Statistik schreibt die Pearson-Korrelation als \\rho_{XY} und die Rangkorrelation nach Spearman als \\rho. Die Darstellungstheorie verwendet \\rho für eine Darstellung, die Quantenmechanik für eine Dichtematrix. Die Variante \\varrho hat einen geschwungenen Schwanz, mit dem manche Autoren zwei Bedeutungen auseinanderhalten. Verwechseln Sie \\rho nicht mit dem lateinischen p, das in vielen Schriften ähnlich aussieht.",
  },
  "sigma": {
    name: "Sigma",
    meaning: "Kleines griechisches Sigma, für die Standardabweichung, Aktivierungsfunktionen und die Sigma-Algebra.",
    usage: "Die Statistik schreibt die Standardabweichung als \\sigma und die Varianz als \\sigma^2. Das maschinelle Lernen verwendet \\sigma(x) = 1/(1 + e^{-x}) für die logistische Sigmoidfunktion und \\sigma für eine allgemeine Aktivierungsfunktion. Die Maßtheorie spricht von \\sigma-Algebren, die Physik verwendet \\sigma für Wirkungsquerschnitte, Leitfähigkeit und die Pauli-Matrizen \\sigma_x, und die lineare Algebra \\sigma_i für Singulärwerte. Die Variante \\varsigma, das Schluss-Sigma, ähnelt einem lateinischen s und ist in der Mathematik selten. Verwenden Sie das große \\Sigma nicht für Summen; dafür gibt es \\sum.",
  },
  "sigma-upper": {
    name: "Großes Sigma",
    meaning: "Großes griechisches Sigma als Buchstabe, vor allem für Kovarianzmatrizen und Alphabete verwendet.",
    usage: "In der Statistik bezeichnet \\Sigma eine Kovarianzmatrix, wie in \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), und die Singulärwertzerlegung schreibt A = U\\Sigma V^\\top. Die Theorie formaler Sprachen verwendet \\Sigma für ein Alphabet und \\Sigma^* für alle Wörter darüber. Für Summen verwenden Sie stattdessen \\sum: \\Sigma ist ein gewöhnlicher Buchstabe fester Größe, der in abgesetzten Formeln nicht wächst und keine Grenzen trägt. Die Komplexitätstheorie verwendet \\Sigma_k^p für die Polynomialzeithierarchie. Große griechische Buchstaben stehen aufrecht; \\varSigma ist die kursive Variante.",
  },
  "tau": {
    name: "Tau",
    meaning: "Kleines griechisches Tau, verwendet für Zeitkonstanten, Drehmoment, Eigenzeit und Kendalls Rangkorrelation.",
    usage: "Die Physik schreibt das Drehmoment als \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, eine Zeitkonstante in e^{-t/\\tau} und die Eigenzeit \\tau in der Relativitätstheorie. Die Statistik kennt Kendalls \\tau, und manche Autoren verwenden \\tau = 2\\pi als Kreiskonstante. Die Zahlentheorie verwendet \\tau(n) für die Anzahl der Teiler, und bei Modulformen bezeichnet \\tau einen Punkt der oberen Halbebene. Die Typentheorie schreibt Typen oft als \\tau und \\sigma. Einen Befehl \\Tau gibt es nicht, da das große Tau dem lateinischen T gleicht. In manchen Schriften ähnelt \\tau einem kleinen t, wählen Sie also für benachbarte Variablen deutlich verschiedene Namen.",
  },
  "upsilon": {
    name: "Ypsilon",
    meaning: "Kleines griechisches Ypsilon, ein selten verwendeter Buchstabe, der dem lateinischen u oder v sehr ähnelt.",
    usage: "Das kleine \\upsilon ist in der Mathematik ungewöhnlich, vor allem weil es leicht mit u und mit \\nu verwechselt wird. Es tritt in der Teilchenphysik für das Upsilon-Meson auf, das meist mit dem Großbuchstaben geschrieben wird, und gelegentlich als Geschwindigkeit oder allgemeine Indexvariable. Wenn Sie eine neue Variable brauchen, ist ein weniger mehrdeutiger Buchstabe oft die bessere Wahl. Wenn Sie es doch verwenden, definieren Sie es ausdrücklich. Das \\upsilon von LaTeX ist wie andere kleine griechische Buchstaben kursiv, während das große \\Upsilon einen eigenen Befehl hat.",
  },
  "upsilon-upper": {
    name: "Großes Ypsilon",
    meaning: "Großes griechisches Ypsilon, vor allem bekannt durch das Upsilon-Meson der Teilchenphysik.",
    usage: "\\Upsilon bezeichnet in der Teilchenphysik die Familie der Bottomonium-Mesonen, \\Upsilon(1S), \\Upsilon(2S). In der Mathematik ist es selten und bezeichnet gelegentlich eine Funktion oder Menge, wenn andere Buchstaben vergeben sind. Anders als das große Alpha oder Beta hat das große Ypsilon in Computer Modern eine eigene Form mit geschwungenen Armen, ist also nicht einfach ein lateinisches Y und hat einen eigenen Befehl. Wie andere große griechische Buchstaben steht es aufrecht; \\varUpsilon liefert die kursive Form. Achten Sie auf Folien auf die Lesbarkeit, da es dort wie ein Y aussehen kann.",
  },
  "phi": {
    name: "Phi",
    meaning: "Kleines griechisches Phi, verwendet für Winkel, den goldenen Schnitt, die eulersche Phi-Funktion und Merkmalsabbildungen.",
    usage: "\\phi liefert die geschlossene, durchgestrichene Form, \\varphi die offene, geschwungene Form; viele Autoren wählen \\varphi für Funktionen und behalten \\phi für Winkel. Die Zahlentheorie schreibt die eulersche Phi-Funktion als \\varphi(n) oder \\phi(n), der goldene Schnitt ist \\phi = (1 + \\sqrt{5})/2, und Kugelkoordinaten verwenden \\phi für einen Winkel. Das maschinelle Lernen nutzt \\phi(x) für eine Merkmalsabbildung in Kernmethoden, die Physik für skalare Potentiale und Wellenfunktionen. Verwechseln Sie \\phi nicht mit \\emptyset oder dem skandinavischen Ø.",
  },
  "phi-upper": {
    name: "Großes Phi",
    meaning: "Großes griechisches Phi, verwendet für die Verteilungsfunktion der Standardnormalverteilung, den magnetischen Fluss und Potentiale.",
    usage: "Die Statistik schreibt die Verteilungsfunktion der Standardnormalverteilung als \\Phi(z), mit kleinem \\phi(z) für die Dichte. Die Physik verwendet \\Phi_B für den magnetischen Fluss und \\Phi für das elektrische Potential, die Technik allgemein für Flüsse. In linearer Algebra und Optimierung kann \\Phi eine Designmatrix aus Basisfunktionen bezeichnen. Große griechische Buchstaben stehen in LaTeX aufrecht; \\varPhi liefert die kursive Variante. Verwechseln Sie \\Phi nicht mit \\emptyset oder dem eingekreisten \\oslash. Seine Umkehrfunktion \\Phi^{-1} liefert Quantile der Normalverteilung wie z_{0.975} \\approx 1.96.",
  },
  "chi": {
    name: "Chi",
    meaning: "Kleines griechisches Chi, verwendet für die Chi-Quadrat-Verteilung, charakteristische Funktionen und die Suszeptibilität.",
    usage: "Die Chi-Quadrat-Statistik \\chi^2 = \\sum (O_i - E_i)^2/E_i ist die bekannteste Anwendung, zusammen mit \\chi^2_k für die Verteilung mit k Freiheitsgraden. Mengenlehre und Wahrscheinlichkeitstheorie schreiben die Indikatorfunktion oder charakteristische Funktion einer Menge als \\chi_A. Die Topologie verwendet \\chi(M) für die Euler-Charakteristik, die Graphentheorie \\chi(G) für die chromatische Zahl, und die Physik \\chi für die magnetische Suszeptibilität. Beachten Sie, dass \\chi unter die Grundlinie reicht; prüfen Sie daher die Position von Indizes. Verwechseln Sie es nicht mit dem lateinischen x oder dem Operator \\times.",
  },
  "psi": {
    name: "Psi",
    meaning: "Kleines griechisches Psi, der übliche Buchstabe für eine quantenmechanische Wellenfunktion und die Digammafunktion.",
    usage: "Die Quantenmechanik schreibt Wellenfunktionen als \\psi(x, t) und Zustände in Dirac-Notation als |\\psi\\rangle, mit der Schrödinger-Gleichung i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi. Bei den speziellen Funktionen steht \\psi(x) = \\Gamma'(x)/\\Gamma(x) für die Digammafunktion. Die Strömungsmechanik verwendet \\psi für die Stromfunktion, die Wavelet-Analyse für ein Mutter-Wavelet. In der Bra-Ket-Notation verwendet \\langle \\psi | \\phi \\rangle die Befehle \\langle und \\rangle, nicht Kleiner- und Größer-Zeichen. Das große \\Psi ist ein eigener Befehl. Die Normierung verlangt \\int |\\psi|^2\\,dx = 1.",
  },
  "psi-upper": {
    name: "Großes Psi",
    meaning: "Großes griechisches Psi, oft eine Vielteilchen-Wellenfunktion oder ein Zustand in der Quantenmechanik.",
    usage: "Die Physik verwendet \\Psi für eine Gesamt- oder Vielteilchen-Wellenfunktion und behält \\psi für Einteilchenzustände, wie in der zeitabhängigen Schrödinger-Gleichung für \\Psi(\\mathbf{r}, t). Die Teilchenphysik schreibt das J/\\psi-Meson klein, verwendet \\Psi aber für einige Charmonium-Zustände. In der Mathematik kann es eine Funktion oder einen Funktor bezeichnen, wenn andere Buchstaben vergeben sind. Große griechische Buchstaben stehen aufrecht; \\varPsi liefert eine kursive Version. Die Psychologie verwendet das Symbol auch als Emblem, doch diese Verwendung kommt in Formeln kaum vor.",
  },
  "omega": {
    name: "Omega",
    meaning: "Kleines griechisches Omega, verwendet für die Kreisfrequenz, Ergebnisse eines Zufallsexperiments und die erste unendliche Ordinalzahl.",
    usage: "Die Physik schreibt die Kreisfrequenz als \\omega = 2\\pi f, ein harmonischer Oszillator ist also x(t) = A\\cos(\\omega t + \\varphi). Die Wahrscheinlichkeitstheorie verwendet \\omega \\in \\Omega für ein Ergebnis im Ergebnisraum, die Mengenlehre \\omega für die erste unendliche Ordinalzahl. Die Komplexitätstheorie schreibt Klein-Omega \\omega(n) für strikte untere Schranken, die Differentialgeometrie verwendet \\omega für Differentialformen. Die Zahlentheorie kennt \\omega(n), die Anzahl der verschiedenen Primfaktoren. Achten Sie darauf, \\omega in handschriftlichen Notizen nicht mit dem lateinischen w zu verwechseln.",
  },
  "omega-upper": {
    name: "Großes Omega",
    meaning: "Großes griechisches Omega, verwendet für die Einheit Ohm, Ergebnisräume und asymptotische untere Schranken.",
    usage: "Als Einheit ist \\Omega das Ohm, ein Widerstand ist also 10\\,\\mathrm{k}\\Omega; trennen Sie Zahl und Einheit durch einen schmalen Abstand. Die Wahrscheinlichkeitstheorie schreibt den Ergebnisraum als \\Omega im Tripel (\\Omega, \\mathcal{F}, P). Die Algorithmenanalyse verwendet \\Omega(n \\log n) für eine untere Schranke, neben O und \\Theta. Die Analysis schreibt ein offenes Gebiet oft als \\Omega \\subset \\mathbb{R}^n. Große griechische Buchstaben stehen aufrecht, und \\varOmega liefert eine kursive Variante. Verwechseln Sie \\Omega nicht mit dem Mho, einem umgedrehten Omega, das früher für Siemens verwendet wurde.",
  },
};

export default text;
