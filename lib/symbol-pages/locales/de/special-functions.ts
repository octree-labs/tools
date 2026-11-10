import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/special-functions/<slug>. */
const text: SymbolPageTranslations = {
  "gamma-function": {
    name: "Gammafunktion",
    meaning: "Gammafunktion, die Erweiterung der Fakultät auf komplexe Zahlen mit Gamma(n) = (n-1)!.",
    usage: "Definiert durch \\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt für \\operatorname{Re} z > 0, erfüllt sie \\Gamma(z+1) = z\\Gamma(z) und \\Gamma(1/2) = \\sqrt{\\pi}. Der Ergänzungssatz \\Gamma(z)\\Gamma(1-z) = \\pi/\\sin(\\pi z) und die Stirlingformel sind Standardwerkzeuge. \\Gamma setzt ein aufrechtes großes Gamma, die übliche Form; \\varGamma liefert eine kursive Variante. Sie erscheint in den Normierungskonstanten der Gamma-, Beta-, Chi-Quadrat- und Student-t-Verteilung. Setzen Sie im Integral \\, vor dt. Verwechseln Sie die Funktion nicht mit \\gamma, der Euler-Mascheroni-Konstante.",
  },
  "beta-function": {
    name: "Betafunktion",
    meaning: "Betafunktion B(x, y), ein Integral über [0, 1], das eng mit der Gammafunktion verbunden ist.",
    usage: "Die Betafunktion ist B(x, y) = \\int_0^1 t^{x-1}(1-t)^{y-1}\\,dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}, und sie normiert die Betaverteilung in der bayesschen Statistik. Streng genommen ist das Symbol ein großes griechisches Beta, doch LaTeX hat keinen Befehl \\Beta, weil es genauso aussieht wie das lateinische B; B ist also korrekt, und manche Autoren schreiben \\mathrm{B}, um es als Funktion zu kennzeichnen. Sie ist symmetrisch, B(x, y) = B(y, x). Die unvollständige Version ist B(z; a, b), die regularisierte Form I_z(a, b). Vermeiden Sie Überschneidungen mit Bell- oder Bernoulli-Zahlen B_n.",
  },
  "riemann-zeta-function": {
    name: "Riemannsche Zetafunktion",
    meaning: "Riemannsche Zetafunktion, für Re s > 1 durch die Reihe der 1/n^s definiert und auf die komplexe Ebene fortgesetzt.",
    usage: "\\zeta(s) = \\sum_{n=1}^\\infty n^{-s} verbindet über das Euler-Produkt \\prod_p (1 - p^{-s})^{-1} die Analysis mit den Primzahlen. Berühmte Werte sind \\zeta(2) = \\pi^2/6 (das Basler Problem) und \\zeta(-1) = -1/12 durch analytische Fortsetzung. Die Riemannsche Vermutung besagt, dass die nichttrivialen Nullstellen auf \\operatorname{Re} s = 1/2 liegen. Verwenden Sie \\zeta, das handschriftlich wie \\xi aussehen kann, im Druck aber verschieden ist. Üblicherweise ist die Variable s = \\sigma + it. Die Hurwitzsche Zetafunktion ist \\zeta(s, a), und in der Physik tritt \\zeta oft in Bose-Einstein-Integralen auf.",
  },
  "error-function": {
    name: "Fehlerfunktion",
    meaning: "Fehlerfunktion: das skalierte Integral der Gaußfunktion e^{-t^2} von 0 bis x, verwendet für Wahrscheinlichkeiten der Normalverteilung.",
    usage: "Die Definition lautet \\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2}\\,dt, mit den Grenzwerten \\pm 1 bei \\pm\\infty. Die Verteilungsfunktion der Standardnormalverteilung ist \\Phi(x) = \\frac{1}{2}\\big[1 + \\text{erf}(x/\\sqrt{2})\\big], und erf löst die Wärmeleitungsgleichung für eine sprungförmige Anfangsbedingung. \\text{erf} wird aufrecht gesetzt, folgt aber der umgebenden Schrift und wird daher in Sätzen kursiv; \\operatorname{erf} oder ein \\DeclareMathOperator in der Präambel ist robuster und fügt korrekten Abstand ein. Sie ist ungerade: \\text{erf}(-x) = -\\text{erf}(x). Die Umkehrfunktion ist \\text{erf}^{-1}, mit der man Quantile der Normalverteilung berechnet.",
  },
  "complementary-error": {
    name: "Komplementäre Fehlerfunktion",
    meaning: "Komplementäre Fehlerfunktion, 1 - erf(x): das skalierte Integral über den Gaußschen Ausläufer von x bis unendlich.",
    usage: "\\text{erfc}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_x^\\infty e^{-t^2}\\,dt = 1 - \\text{erf}(x), und sie ist die bevorzugte Form für kleine Randwahrscheinlichkeiten, weil die numerische Berechnung von 1 - \\text{erf}(x) für große x an Genauigkeit verliert. Sie liefert Bitfehlerraten in der Nachrichtentechnik, Q(x) = \\frac{1}{2}\\text{erfc}(x/\\sqrt{2}), und Diffusionsprofile in der Wärmeübertragung. Die skalierte Version \\text{erfcx}(x) = e^{x^2}\\text{erfc}(x) vermeidet Unterlauf. Wie bei erf bleibt \\operatorname{erfc} in kursiver Umgebung aufrecht und setzt den Abstand korrekt, ist also die sicherere Wahl. Für große x verhält sie sich ungefähr wie e^{-x^2}/(x\\sqrt{\\pi}).",
  },
  "bessel-j": {
    name: "Bessel-Funktion J",
    meaning: "Bessel-Funktion erster Art der Ordnung n, die im Ursprung endliche Lösung der Besselschen Differentialgleichung.",
    usage: "J_n löst x^2 y'' + x y' + (x^2 - n^2) y = 0 und hat die Reihe \\sum_m \\frac{(-1)^m}{m!\\,\\Gamma(m+n+1)} (x/2)^{2m+n}. Sie beschreibt schwingende Membranen, zylindrische Wellenleiter und die Beugung an einer kreisförmigen Blende, wobei das Airy-Muster J_1 enthält. Für nicht ganzzahlige Ordnung schreibt man konventionell J_\\nu(x) mit \\nu. Die erzeugende Funktion ist e^{(x/2)(t - 1/t)} = \\sum_n J_n(x) t^n. Für zusammengesetzte Ordnungen sind Klammern nötig, J_{n+1}(x). Ihre Nullstellen schreibt man oft j_{n,k}; sie bestimmen die Resonanzfrequenzen einer Kreismembran.",
  },
  "bessel-y": {
    name: "Bessel-Funktion Y",
    meaning: "Bessel-Funktion zweiter Art der Ordnung n, die im Ursprung singuläre Lösung der Besselschen Differentialgleichung.",
    usage: "Y_n, auch Weber- oder Neumann-Funktion genannt und in manchen Physiktexten N_n geschrieben, ist die zweite unabhängige Lösung der Besselschen Differentialgleichung, mit Y_n(x) \\to -\\infty für x \\to 0^+. Für nicht ganzzahliges \\nu gilt Y_\\nu(x) = \\frac{J_\\nu(x)\\cos(\\nu\\pi) - J_{-\\nu}(x)}{\\sin(\\nu\\pi)}, ganzzahlige Ordnungen werden durch einen Grenzwert definiert. Bei Randwertproblemen auf einer vollen Kreisscheibe wird der Term Y_n wegen der Regularität im Mittelpunkt verworfen, auf einem Kreisring jedoch beibehalten. Die Hankel-Funktionen kombinieren beide: H_n^{(1)} = J_n + iY_n.",
  },
  "modified-bessel-i": {
    name: "Modifizierte Bessel-Funktion I",
    meaning: "Modifizierte Bessel-Funktion erster Art, eine exponentiell wachsende Lösung der modifizierten Besselschen Differentialgleichung.",
    usage: "I_n löst x^2 y'' + x y' - (x^2 + n^2) y = 0 und hängt über I_n(x) = i^{-n} J_n(ix) mit J_n zusammen. Anders als J_n oszilliert sie nicht; sie wächst wie e^x/\\sqrt{2\\pi x}. Sie erscheint bei der Wärmeleitung in Zylindern, in der Normierungskonstante 2\\pi I_0(\\kappa) der von-Mises-Verteilung und in der Rice-Verteilung. Verwenden Sie \\nu für allgemeine Ordnung, I_\\nu(x). Verwechseln Sie sie nicht mit der Einheitsmatrix I_n oder dem Informationsmaß I(X; Y); das eingeklammerte Argument schafft meist Klarheit, eine Definition hilft aber.",
  },
  "modified-bessel-k": {
    name: "Modifizierte Bessel-Funktion K",
    meaning: "Modifizierte Bessel-Funktion zweiter Art, die abklingende Lösung der modifizierten Besselschen Differentialgleichung.",
    usage: "K_n, manchmal Macdonald-Funktion genannt, klingt für große x wie \\sqrt{\\pi/(2x)}\\,e^{-x} ab und divergiert im Ursprung. Zusammen mit I_n bildet sie die beiden unabhängigen Lösungen der modifizierten Besselschen Differentialgleichung. Sie erscheint im Matérn-Kovarianzkern für Gauß-Prozesse, im zweidimensionalen Yukawa-Potential und in den Normierungskonstanten verallgemeinerter inverser Gauß-Verteilungen. Vorsicht: K(k) bezeichnet auch das vollständige elliptische Integral und K_n den vollständigen Graphen, geben Sie also an, welches K Sie meinen, wenn sich Fachgebiete überschneiden.",
  },
  "legendre-p": {
    name: "Legendre-Polynom",
    meaning: "Legendre-Polynom vom Grad n, orthogonal auf [-1, 1] mit der Gewichtsfunktion 1.",
    usage: "Die Legendre-Polynome beginnen mit P_0 = 1, P_1 = x, P_2 = \\frac{1}{2}(3x^2 - 1) und folgen der Formel von Rodrigues P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n. Die Orthogonalität lautet \\int_{-1}^1 P_m P_n\\,dx = \\frac{2}{2n+1}\\delta_{mn}. Sie erscheinen in Multipolentwicklungen, Kugelflächenfunktionen und als Stützstellen der Gauß-Legendre-Quadratur. Zugeordnete Legendre-Funktionen schreibt man P_n^m(x) oder P_\\ell^m(\\cos\\theta). Physiker verwenden für den Grad oft \\ell. Verwechseln Sie sie nicht mit dem Pfadgraphen P_n oder der Wahrscheinlichkeit P; das Argument x weist meist auf das Polynom hin.",
  },
  "legendre-q": {
    name: "Legendre-Funktion zweiter Art",
    meaning: "Legendre-Funktion zweiter Art, die zweite Lösung der Legendreschen Differentialgleichung, singulär bei x = 1 und -1.",
    usage: "Q_n löst dieselbe Gleichung wie P_n, (1 - x^2) y'' - 2x y' + n(n+1) y = 0, ist aber kein Polynom: Zum Beispiel gilt Q_0(x) = \\frac{1}{2}\\ln\\frac{1+x}{1-x} und Q_1(x) = x Q_0(x) - 1. Wegen der logarithmischen Singularitäten bei \\pm 1 wird sie bei Problemen auf der ganzen Kugel meist verworfen und nur beibehalten, wenn das Gebiet die Pole ausschließt, etwa bei einem Kegel oder dem Außenraum eines verlängerten Rotationsellipsoids. Zugeordnete Versionen sind Q_n^m(x). Verwenden Sie für den Logarithmus \\ln mit \\frac und \\left( \\right), wenn das Argument hoch wird.",
  },
  "hermite-polynomial": {
    name: "Hermite-Polynom",
    meaning: "Hermite-Polynom vom Grad n, orthogonal auf der reellen Achse mit Gaußscher Gewichtsfunktion.",
    usage: "Die physikalischen Hermite-Polynome folgen H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}, beginnen mit 1, 2x, 4x^2 - 2 und liefern die Eigenfunktionen des quantenmechanischen harmonischen Oszillators \\psi_n \\propto H_n(x) e^{-x^2/2}. In der Wahrscheinlichkeitstheorie verwendet man eine andere Normierung, geschrieben He_n(x), mit Gewicht e^{-x^2/2}; beide hängen über eine Umskalierung zusammen, geben Sie also an, welche Familie Sie meinen. Die Rekursion lautet H_{n+1} = 2x H_n - 2n H_{n-1}. H bezeichnet auch die Entropie, die Heaviside-Funktion und Hamilton-Operatoren, eine kurze Definition hilft den Lesern also.",
  },
  "laguerre-polynomial": {
    name: "Laguerre-Polynom",
    meaning: "Laguerre-Polynom vom Grad n, orthogonal auf [0, unendlich) mit der Gewichtsfunktion e^{-x}.",
    usage: "Laguerre-Polynome erfüllen die Formel von Rodrigues L_n(x) = \\frac{e^x}{n!} \\frac{d^n}{dx^n}(e^{-x} x^n), beginnen mit L_0 = 1 und L_1 = 1 - x und lösen x y'' + (1 - x) y' + n y = 0. Die verallgemeinerte Form L_n^{(\\alpha)}(x), mit eingeklammertem Exponenten, liefert die radialen Wellenfunktionen des Wasserstoffatoms. Ältere Physiktexte verwenden eine andere Normierung, die sich um den Faktor n! unterscheidet, prüfen Sie also die Quellen, bevor Sie Formeln mischen. Sie definieren außerdem die Gauß-Laguerre-Quadratur für Integrale mit Gewicht e^{-x}. Vermeiden Sie Verwechslungen mit einer Lagrange- oder Verlustfunktion L.",
  },
  "chebyshev-t": {
    name: "Tschebyschow-Polynom erster Art",
    meaning: "Tschebyschow-Polynom erster Art, definiert durch T_n(cos theta) = cos(n theta).",
    usage: "Die Tschebyschow-Polynome T folgen T_0 = 1, T_1 = x und T_{n+1} = 2x T_n - T_{n-1}, woraus T_2 = 2x^2 - 1 folgt. Sie sind auf [-1, 1] orthogonal mit der Gewichtsfunktion 1/\\sqrt{1 - x^2}, und unter allen normierten Polynomen vom Grad n hat 2^{1-n} T_n auf diesem Intervall das kleinste Maximum. Diese Minimax-Eigenschaft liegt den Tschebyschow-Knoten für die Interpolation zugrunde, die das Runge-Phänomen vermeiden, sowie den Tschebyschow-Spektralmethoden. Der Buchstabe T kollidiert manchmal mit Temperatur, Periode oder Transposition, definieren Sie ihn also bei Bedarf; verwenden Sie ^\\top für Transponierte, um Klarheit zu wahren.",
  },
  "chebyshev-u": {
    name: "Tschebyschow-Polynom zweiter Art",
    meaning: "Tschebyschow-Polynom zweiter Art, mit U_n(cos theta) sin theta = sin((n+1) theta).",
    usage: "Die Polynome U teilen mit T_n die Rekursion U_{n+1} = 2x U_n - U_{n-1}, beginnen aber mit U_0 = 1, U_1 = 2x. Sie sind auf [-1, 1] orthogonal mit der Gewichtsfunktion \\sqrt{1 - x^2} und hängen über T_n'(x) = n U_{n-1}(x) mit denen erster Art zusammen. U_n erscheint in den charakteristischen Polynomen von Pfadgraphen, in tridiagonalen Toeplitz-Eigenwertproblemen und in der Gauß-Tschebyschow-Quadratur zweiter Art. Schreiben Sie die definierende Identität wie unten gezeigt mit \\frac und \\sin und verwenden Sie \\theta statt t, passend zur trigonometrischen Konvention.",
  },
  "hypergeometric": {
    name: "Hypergeometrische Funktion",
    meaning: "Gaußsche hypergeometrische Funktion: die Potenzreihe in z, deren Koeffizienten aus Pochhammer-Symbolen von a, b, c gebildet werden.",
    usage: "Sie ist definiert als {}_2F_1(a,b;c;z) = \\sum_{n \\geq 0} \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!} für |z| < 1 und enthält viele elementare und spezielle Funktionen als Spezialfälle, z. B. \\ln(1+z) = z\\,{}_2F_1(1,1;2;-z). Die leere Gruppe {} gibt dem linken Index 2 etwas, woran er sich anheften kann, der Standardtrick für vorangestellte Indizes; der Befehl \\prescript bietet feinere Kontrolle. Semikolons trennen Zählerparameter, Nennerparameter und das Argument. Die allgemeine Form {}_pF_q folgt demselben Muster, und der Satz von Gauß liefert ihren Wert bei z = 1.",
  },
  "digamma": {
    name: "Digammafunktion",
    meaning: "Digammafunktion, die logarithmische Ableitung der Gammafunktion: Gamma'(x)/Gamma(x).",
    usage: "\\psi(x) = \\frac{d}{dx}\\ln\\Gamma(x) erfüllt \\psi(x+1) = \\psi(x) + 1/x, also \\psi(n+1) = H_n - \\gamma mit der harmonischen Zahl H_n und der Euler-Mascheroni-Konstante \\gamma, sowie \\psi(1) = -\\gamma. Sie erscheint in der variationellen Bayes-Inferenz für Dirichlet-Verteilungen, wo \\mathbb{E}[\\ln \\theta_k] = \\psi(\\alpha_k) - \\psi(\\sum_j \\alpha_j) gilt. Das griechische \\psi ist Standard; manche Texte schreiben F(x). Verwenden Sie nicht \\digamma, das den archaischen griechischen Buchstaben Digamma statt der Funktion ausgibt. In der Quantenmechanik ist \\psi die Wellenfunktion, definieren Sie es also.",
  },
  "polygamma": {
    name: "Polygammafunktion",
    meaning: "Polygammafunktion der Ordnung n: die (n+1)-te Ableitung von ln Gamma(x) bzw. die n-te Ableitung der Digammafunktion.",
    usage: "\\psi^{(n)}(x) = \\frac{d^{n+1}}{dx^{n+1}} \\ln \\Gamma(x), mit \\psi^{(0)} = \\psi der Digammafunktion und \\psi^{(1)} der Trigammafunktion. Bemerkenswerte Werte: \\psi^{(1)}(1) = \\pi^2/6, und allgemein \\psi^{(n)}(1) = (-1)^{n+1} n!\\,\\zeta(n+1). Die Trigammafunktion liefert die Fisher-Information und Varianzterme für Gamma- und Dirichlet-Modelle. Der eingeklammerte Exponent kennzeichnet die Ableitungsordnung, keine Potenz; ^n allein würde als Potenzierung gelesen. Die geschweiften Klammern um (n) sind nötig, damit die ganze Gruppe hochgestellt wird. Viele Autoren schreiben die Trigammafunktion einfach als \\psi'(x), was ebenso üblich ist.",
  },
  "elliptic-integral-k": {
    name: "Elliptisches Integral K",
    meaning: "Vollständiges elliptisches Integral erster Art, ein Integral von 1/sqrt(1 - k^2 sin^2 theta) über eine Viertelperiode.",
    usage: "K(k) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - k^2 \\sin^2\\theta}}, mit K(0) = \\pi/2 und logarithmischer Divergenz für k \\to 1. Es liefert die exakte Periode eines Pendels, T = 4\\sqrt{L/g}\\,K(\\sin(\\theta_0/2)). Die größte Falle ist die Konvention für das Argument: Manche Texte und Programme verwenden den Parameter m = k^2 und schreiben K(m), sodass K(0.5) zwei verschiedene Zahlen bedeuten kann. Geben Sie an, ob Sie den Modul k oder den Parameter m verwenden. Die unvollständige Version ist F(\\phi, k). Das arithmetisch-geometrische Mittel liefert eine schnelle Formel: K(k) = \\frac{\\pi}{2\\,\\mathrm{AGM}(1, \\sqrt{1-k^2})}.",
  },
  "elliptic-integral-e": {
    name: "Elliptisches Integral E",
    meaning: "Vollständiges elliptisches Integral zweiter Art, das Integral von sqrt(1 - k^2 sin^2 theta) über eine Viertelperiode.",
    usage: "E(k) = \\int_0^{\\pi/2} \\sqrt{1 - k^2 \\sin^2\\theta}\\,d\\theta, mit E(0) = \\pi/2 und E(1) = 1. Der Umfang einer Ellipse mit großer Halbachse a und Exzentrizität e ist 4a\\,E(e), wofür es keine elementare geschlossene Form gibt. Die Legendre-Relation verbindet es mit K: E K' + E' K - K K' = \\pi/2, wobei Striche den komplementären Modul bezeichnen. Wie bei K prüfen Sie, ob eine Quelle den Modul k oder den Parameter m = k^2 verwendet. Der einfache Buchstabe E kollidiert mit Energie, Erwartungswert und Kantenmengen, definieren Sie ihn also früh.",
  },
  "dirac-delta-function": {
    name: "Diracsche Deltafunktion",
    meaning: "Dirac-Delta: eine Distribution, die außerhalb von 0 verschwindet, das Integral 1 hat und unter einem Integral f(0) herausgreift.",
    usage: "Ihre definierende Eigenschaft ist die Siebeigenschaft \\int f(x)\\,\\delta(x - a)\\,dx = f(a). Sie ist eine Distribution, keine gewöhnliche Funktion, und die Ableitung der Heaviside-Funktion, H'(x) = \\delta(x). In der Signalverarbeitung modelliert sie einen Impuls; ihre Fourier-Transformierte ist 1. Für die Skalierung gilt \\delta(ax) = \\delta(x)/|a|. Verwechseln Sie sie nicht mit dem Kronecker-Delta \\delta_{ij}, einem diskreten Symbol, das für i = j gleich 1 ist. Das kleine \\delta unterscheidet sich von \\Delta (Laplace-Operator oder Differenz) und von \\partial.",
  },
  "heaviside-step-function": {
    name: "Heaviside-Funktion",
    meaning: "Heaviside-Funktion (Sprungfunktion): 0 für negative x und 1 für positive x, mit dem Sprung im Ursprung.",
    usage: "Die Heaviside-Funktion H(x) modelliert ein Signal, das zum Zeitpunkt null eingeschaltet wird, und ihre distributionelle Ableitung ist das Dirac-Delta: H'(x) = \\delta(x). Der Wert bei 0 ist Konvention, häufig 1/2 in der Fourier-Analysis, 1 in der Regelungstechnik, manchmal undefiniert. Alternative Schreibweisen sind \\theta(x) in der Physik, u(t) in den Ingenieurwissenschaften und die Indikatorfunktion \\mathbf{1}_{x \\geq 0}. Definieren Sie sie der Klarheit halber mit einer cases-Umgebung. Da H auch für Entropie, Hermite-Polynome und Hamilton-Operatoren steht, erspart eine kurze Definition bei der ersten Verwendung den Lesern Verwirrung. Ihre Laplace-Transformierte ist 1/s.",
  },
};

export default text;
