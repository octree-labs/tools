import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "Sinus",
    meaning: "Sinusfunktion, aufrecht als benannter Operator mit korrekten Abständen gesetzt.",
    usage: "Tippen Sie immer \\sin statt sin; die bloßen Buchstaben werden als drei miteinander multiplizierte kursive Variablen gesetzt. Der Operator fügt vor seinem Argument einen kleinen Abstand ein, sodass \\sin x bei einem einzelnen Symbol keine Klammern braucht, während \\sin(2x) oder \\sin\\left(\\frac{\\pi}{2}\\right) längere Argumente gruppieren. Potenzen folgen direkt auf den Befehl: \\sin^2 x + \\cos^2 x = 1. Beachten Sie, dass \\sin^{-1} x die Umkehrfunktion ist und nicht der Kehrwert \\csc x. Zu den gängigen Formeln gehören die Doppelwinkelformel \\sin 2\\theta = 2\\sin\\theta\\cos\\theta und die Taylorreihe x - x^3/3! + \\cdots.",
  },
  "cosine": {
    name: "Kosinus",
    meaning: "Kosinusfunktion, wie \\sin aufrecht als benannter mathematischer Operator gesetzt.",
    usage: "\\cos erscheint im Kosinussatz c^2 = a^2 + b^2 - 2ab\\cos C, in der Eulerschen Formel e^{i\\theta} = \\cos\\theta + i\\sin\\theta und in der Winkelform des Skalarprodukts, aus der die Kosinus-Ähnlichkeit im maschinellen Lernen stammt. Wer cos ohne Backslash tippt, erhält kursive Buchstaben und falsche Abstände. Schreiben Sie \\cos^2\\theta für das Quadrat des Kosinus; \\cos\\theta^2 bedeutet den Kosinus von Theta zum Quadrat, eine andere Größe. Der Befehl selbst nimmt kein Argument, gruppieren Sie zusammengesetzte Argumente also mit Klammern, wie in \\cos(\\omega t + \\phi).",
  },
  "tangent": {
    name: "Tangens",
    meaning: "Tangensfunktion, der Quotient aus Sinus und Kosinus, aufrecht gesetzt.",
    usage: "Definiert als \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, ist er dort nicht definiert, wo \\cos\\theta = 0 gilt, also bei ungeraden Vielfachen von \\pi/2. Steigungen in der Geometrie sind Tangenswerte von Neigungswinkeln, und die Identität 1 + \\tan^2\\theta = \\sec^2\\theta entsteht, wenn man den trigonometrischen Pythagoras durch \\cos^2\\theta teilt. Manche europäischen Texte schreiben stattdessen tg, wofür es keinen eingebauten Befehl gibt; verwenden Sie bei Bedarf \\operatorname{tg}. Das Additionstheorem \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} ist eine häufige abgesetzte Gleichung.",
  },
  "cotangent": {
    name: "Kotangens",
    meaning: "Kotangens, der Kehrwert des Tangens, als aufrechter Operator geschrieben.",
    usage: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}, mit Polstellen bei ganzzahligen Vielfachen von \\pi. Er erscheint in der Identität 1 + \\cot^2\\theta = \\csc^2\\theta und in der klassischen Partialbruchzerlegung von \\pi\\cot\\pi z, mit der man \\sum 1/n^2 berechnet. Russische und manche europäische Texte schreiben ctg; verwenden Sie dafür \\operatorname{ctg}. Seine Umkehrfunktion wird üblicherweise arccot geschrieben, wofür es keinen vordefinierten Befehl gibt. Denken Sie daran, dass \\cot x der Kehrwert des Tangens ist und nicht die Umkehrfunktion \\tan^{-1} x. Seine Ableitung ist -\\csc^2 x.",
  },
  "secant": {
    name: "Sekans",
    meaning: "Sekans, der Kehrwert des Kosinus, als aufrechter benannter Operator.",
    usage: "\\sec\\theta = 1/\\cos\\theta, und sein Quadrat erscheint als Ableitung des Tangens, \\frac{d}{dx}\\tan x = \\sec^2 x. Das Integral \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C ist ein Klassiker der Analysisvorlesungen und der Formeln zur Mercator-Projektion. Wer sec ohne Backslash tippt, erhält kursive Buchstaben und verliert den Abstand vor dem Argument. In der Geometrie ist eine Sekante ein anderes Objekt, das mit Worten statt mit diesem Befehl benannt wird. Wie bei den anderen trigonometrischen Befehlen werden Potenzen direkt angehängt, \\sec^2 x, mit dem Argument danach.",
  },
  "cosecant": {
    name: "Kosekans",
    meaning: "Kosekans, der Kehrwert des Sinus, als aufrechter Operator gesetzt.",
    usage: "\\csc\\theta = 1/\\sin\\theta, nicht definiert bei ganzzahligen Vielfachen von \\pi. Seine Ableitung ist \\frac{d}{dx}\\csc x = -\\csc x\\cot x, und die Identität 1 + \\cot^2 x = \\csc^2 x vervollständigt das pythagoreische Trio. Manche Bücher, vor allem ältere britische, kürzen ihn als cosec ab; diese Form benötigt \\operatorname{cosec}. Ein häufiger Fehler ist, \\sin^{-1} x zu schreiben, wenn \\csc x gemeint ist: Der Exponent -1 bezeichnet die Umkehrfunktion Arkussinus, nicht den Kehrwert. Potenzen folgen direkt auf den Befehl, wie in \\csc^2 x, mit dem Argument danach.",
  },
  "arcsine": {
    name: "Arkussinus",
    meaning: "Arkussinus, die Umkehrfunktion des auf [-π/2, π/2] eingeschränkten Sinus, als aufrechter Operator.",
    usage: "\\arcsin x liefert für x in [-1, 1] den Winkel in [-\\pi/2, \\pi/2], dessen Sinus x ist. Er ist die eindeutige Alternative zu \\sin^{-1} x, das manche Leser als 1/\\sin x missverstehen. Seine Ableitung \\frac{1}{\\sqrt{1-x^2}} liefert das Standardintegral \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C, eine Grundlage der trigonometrischen Substitution. Softwarebibliotheken nennen ihn asin, doch Namen aus Programmiersprachen gehören nicht in den mathematischen Formelsatz; verwenden Sie immer den Befehl mit Backslash, damit er aufrecht und mit Abstand erscheint. Gruppieren Sie zusammengesetzte Argumente mit Klammern.",
  },
  "arccosine": {
    name: "Arkuskosinus",
    meaning: "Arkuskosinus, der den Winkel in [0, π] liefert, dessen Kosinus ein gegebener Wert ist.",
    usage: "Der Winkel zwischen zwei Vektoren, \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert}, ist wohl sein häufigster Auftritt. Sein Wertebereich ist [0, \\pi] und seine Ableitung -\\frac{1}{\\sqrt{1-x^2}}, weshalb \\arcsin x + \\arccos x = \\frac{\\pi}{2} für jedes x in [-1, 1] gilt. \\cos^{-1} x bedeutet dasselbe, aber \\arccos vermeidet die Verwechslung mit dem Kehrwert. Setzen Sie lange Argumente zur Übersicht in \\left( \\right), da der Operator selbst keine Klammern mitbringt. In der algorithmischen Geometrie wird das Argument oft zuerst auf [-1, 1] begrenzt, um Rundungsfehler zu vermeiden.",
  },
  "arctangent": {
    name: "Arkustangens",
    meaning: "Arkustangens, der den Winkel in (-π/2, π/2) liefert, dessen Tangens x ist.",
    usage: "\\arctan x erscheint in \\int \\frac{dx}{1+x^2} = \\arctan x + C und in der Machinschen Formel \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}. Für den Polarwinkel eines Punktes (x, y) in allen vier Quadranten verwenden Programmierer atan2; in Fachartikeln schreiben Sie \\operatorname{atan2}(y, x) oder das komplexe Argument \\arg(x + iy). \\tan^{-1} x ist ein anerkanntes Synonym, das in den Ingenieurwissenschaften häufiger ist. Die Reihe \\arctan x = x - x^3/3 + x^5/5 - \\cdots konvergiert für |x| \\le 1 und ergibt bei x = 1 die Leibniz-Reihe.",
  },
  "arccotangent": {
    name: "Arkuskotangens",
    meaning: "Umkehrfunktion des Kotangens, über \\text gesetzt, weil LaTeX kein eingebautes \\arccot besitzt.",
    usage: "Standard-LaTeX definiert \\arcsin, \\arccos und \\arctan, aber nicht \\arccot, deshalb baut dieser Eintrag die Bezeichnung aus Text auf. Sauberer ist \\operatorname{arccot} x, das Operatorabstände ergänzt, oder \\DeclareMathOperator{\\arccot}{arccot} in der Präambel, sodass \\arccot x wie seine eingebauten Geschwister funktioniert. Die Konventionen für den Wertebereich unterscheiden sich: Manche Texte verwenden (0, \\pi), andere (-\\pi/2, \\pi/2] ohne 0, geben Sie also an, welchen Sie meinen. Seine Ableitung ist bei beiden Wahlen -\\frac{1}{1+x^2}. Manche Autoren schreiben stattdessen \\cot^{-1}. Wählen Sie eine Form und verwenden Sie sie durchgehend.",
  },
  "arcsecant": {
    name: "Arkussekans",
    meaning: "Umkehrfunktion des Sekans, mit \\text geschrieben, da LaTeX kein vordefiniertes \\arcsec besitzt.",
    usage: "Für |x| \\ge 1 definiert, gilt \\text{arcsec}\\, x = \\arccos(1/x). Seine Ableitung ist \\frac{1}{|x|\\sqrt{x^2-1}} beim üblichen Wertebereich [0, \\pi] ohne \\pi/2, und der Betrag wird in studentischen Arbeiten häufig vergessen. Da \\text keine Operatorabstände ergänzt, fügen Sie vor dem Argument \\, ein oder wechseln zu \\operatorname{arcsec}. Wer einmal \\DeclareMathOperator{\\arcsec}{arcsec} deklariert, kann \\arcsec x genauso wie \\arccos x schreiben. Integraltafeln drücken \\int \\frac{dx}{x\\sqrt{x^2-1}} damit aus. In modernen Fachartikeln wird er selten verwendet und meist als Arkuskosinus des Kehrwerts umgeschrieben.",
  },
  "arccosecant": {
    name: "Arkuskosekans",
    meaning: "Umkehrfunktion des Kosekans, mit \\text zusammengesetzt, da es kein eingebautes \\arccsc gibt.",
    usage: "Für |x| \\ge 1 gilt \\text{arccsc}\\, x = \\arcsin(1/x), mit Werten in [-\\pi/2, \\pi/2] ohne 0. Seine Ableitung ist -\\frac{1}{|x|\\sqrt{x^2-1}}. Er ist die am wenigsten gebrauchte der sechs Arkusfunktionen, daher wandeln die meisten Autoren ihn in Endergebnissen in die Arkussinusform um. Für korrekte Abstände verwenden Sie \\operatorname{arccsc} oder deklarieren ihn in der Präambel als mathematischen Operator, statt sich auf \\text zu verlassen, das in Satzumgebungen außerdem kursiv wird. Manche Bücher schreiben \\csc^{-1} x, mit dem üblichen Risiko, als Kehrwert gelesen zu werden.",
  },
  "inverse-sine": {
    name: "Inverser Sinus",
    meaning: "Umkehrfunktion des Sinus, mit hochgestelltem -1 geschrieben, gleichbedeutend mit dem Arkussinus.",
    usage: "Taschenrechner und viele technische Lehrbücher bezeichnen den Arkussinus als \\sin^{-1}, sodass \\sin^{-1}(0.5) = \\frac{\\pi}{6} gilt. Die Schreibweise kollidiert mit \\sin^2 x = (\\sin x)^2: In Analogie dazu könnte \\sin^{-1} x als 1/\\sin x missverstanden werden, was tatsächlich \\csc x ist. Deshalb bevorzugen Texte der reinen Mathematik \\arcsin. Geschweifte Klammern um -1 sind zwingend, und LaTeX setzt den Exponenten direkt hinter den Operatornamen, sodass \\sin^{-1} x mit dem Exponenten vor dem Argument erscheint. Für welche Schreibweise Sie sich auch entscheiden, verwenden Sie sie im gesamten Dokument einheitlich.",
  },
  "inverse-cosine": {
    name: "Inverser Kosinus",
    meaning: "Umkehrfunktion des Kosinus in Exponentenschreibweise, dieselbe Funktion wie der Arkuskosinus.",
    usage: "Physik und Ingenieurwesen schreiben oft \\cos^{-1} für Winkel, etwa für den Winkel zwischen zwei Vektoren, der aus ihrem normierten Skalarprodukt berechnet wird. Es ist nicht der Kehrwert 1/\\cos x, das ist \\sec x; der Exponent -1 bedeutet hier die Umkehrfunktion. Der Wertebereich ist [0, \\pi], also gilt \\cos^{-1}(-1) = \\pi. Fachartikel der reinen Mathematik wählen meist \\arccos, um die Mehrdeutigkeit zu vermeiden. Mischt Ihr Text \\cos^2 x für Quadrate und \\cos^{-1} x für Umkehrfunktionen, erwähnen Sie die Konvention einmal, damit die Leser nicht raten müssen.",
  },
  "inverse-tangent": {
    name: "Inverser Tangens",
    meaning: "Umkehrfunktion des Tangens, als Tangens hoch -1 geschrieben, gleichbedeutend mit dem Arkustangens.",
    usage: "Ingenieurwesen und Physik verwenden \\tan^{-1} für Phasenwinkel, wie in \\phi = \\tan^{-1}(\\omega L / R) für einen RL-Kreis, und zur Umrechnung von Steigungen in Winkel. Wie bei den anderen Umkehrformen ist es nicht \\cot x, der Kehrwert. Sein Wertebereich ist (-\\pi/2, \\pi/2), er kann also gegenüberliegende Quadranten nicht unterscheiden; Arbeiten, die den vollen Winkel benötigen, sollten angeben, dass sie die Variante mit zwei Argumenten verwenden. Viele Stilrichtlinien bevorzugen in der Mathematik \\arctan, akzeptieren in angewandten Arbeiten aber \\tan^{-1}, solange die Bedeutung einheitlich ist.",
  },
  "hyperbolic-sine": {
    name: "Sinus hyperbolicus",
    meaning: "Sinus hyperbolicus, (e^x - e^{-x})/2, als aufrechter Operator gesetzt.",
    usage: "\\sinh x = \\frac{e^x - e^{-x}}{2} parametrisiert zusammen mit \\cosh die Einheitshyperbel, weshalb \\cosh^2 x - \\sinh^2 x = 1 gilt. Er erscheint in der speziellen Relativitätstheorie über die Rapidität, bei Kettenlinienproblemen und in Lösungen von y'' = y. Seine Ableitung ist \\cosh x ohne Vorzeichenwechsel, anders als beim Kreissinus. Die Umkehrfunktion wird oft als \\operatorname{arsinh} oder \\sinh^{-1} geschrieben; LaTeX stellt dafür keinen eingebauten Befehl bereit. Wer sinh ohne Backslash tippt, erhält vier kursive Buchstaben und schlechte Abstände.",
  },
  "hyperbolic-cosine": {
    name: "Kosinus hyperbolicus",
    meaning: "Kosinus hyperbolicus, (e^x + e^{-x})/2, als aufrechter benannter Operator.",
    usage: "Eine hängende Kette nimmt die Form einer Kettenlinie an, y = a\\cosh(x/a), die klassische Lehrbuchanwendung. Die Funktion ist gerade, stets mindestens 1 und erfüllt \\cosh^2 x - \\sinh^2 x = 1 sowie \\cosh(ix) = \\cos x. In der speziellen Relativitätstheorie ist der Lorentz-Faktor gleich dem Kosinus hyperbolicus der Rapidität. Wie andere Operatoren fügt \\cosh vor einem Argument aus einem einzelnen Symbol einen kleinen Abstand ein, \\cosh x funktioniert also ohne Klammern. Für die Umkehrfunktion gibt es keinen vordefinierten Befehl; verwenden Sie \\operatorname{arcosh} oder \\cosh^{-1}.",
  },
  "hyperbolic-tangent": {
    name: "Tangens hyperbolicus",
    meaning: "Tangens hyperbolicus, Sinus hyperbolicus geteilt durch Kosinus hyperbolicus, mit Werten zwischen -1 und 1.",
    usage: "Neuronale Netze verwenden \\tanh als Aktivierungsfunktion, oft verglichen mit der logistischen Sigmoidfunktion über \\tanh x = 2\\sigma(2x) - 1. Seine Ableitung ist 1 - \\tanh^2 x, was die Formeln der Fehlerrückführung kompakt hält. In der Physik erscheint er in der Molekularfeld-Magnetisierung, m = \\tanh(\\beta J z m), und bei der relativistischen Geschwindigkeitsaddition. Der Wertebereich (-1, 1) macht ihn praktisch, um unbeschränkte Größen zu stauchen. Seine Umkehrfunktion \\operatorname{artanh} muss von Hand geschrieben oder deklariert werden, da LaTeX keinen eingebauten Befehl dafür hat.",
  },
  "inverse-hyperbolic-sine": {
    name: "Areasinus hyperbolicus",
    meaning: "Umkehrfunktion des Sinus hyperbolicus, mit \\text beschriftet, da LaTeX keinen eingebauten Befehl dafür hat.",
    usage: "Sie ist gleich \\ln\\left(x + \\sqrt{x^2 + 1}\\right) und liefert die Stammfunktion von \\frac{1}{\\sqrt{x^2+1}}. Die ISO-Notation nennt sie arsinh, für Areasinus, weil ihr Argument eine Fläche und kein Bogen ist; viele Autoren schreiben dennoch arcsinh oder \\sinh^{-1}. Welchen Namen Sie auch wählen, \\operatorname{arsinh} oder ein \\DeclareMathOperator in der Präambel ergibt bessere Abstände als \\text, das außerdem die Kursivschrift von Satzumgebungen übernimmt. In der Datenanalyse dient sie als varianzstabilisierende Transformation, weil sie anders als der Logarithmus auch null und negative Werte verarbeitet.",
  },
  "degree-symbol": {
    name: "Gradzeichen",
    meaning: "Hochgestellter Kreis zur Kennzeichnung von Grad, für Winkel und für Temperaturen.",
    usage: "Das übliche Gradzeichen im Mathematikmodus ist ^{\\circ}, wie in 90^{\\circ} oder \\angle ABC = 45^{\\circ}; es hebt \\circ, den Verkettungskringel, auf Exponentengröße. Für Temperaturen schreiben Sie 25^{\\circ}\\mathrm{C} mit aufrechtem C. Verwenden Sie kein hochgestelltes o und keine hochgestellte 0, die die falsche Form haben, und kein \\circ auf der Grundlinie, das die Verkettung von Funktionen bedeutet. Im Textmodus liefert \\textdegree ein passendes Zeichen, ohne in den Mathematikmodus zu wechseln. Dokumente mit vielen Messwerten profitieren von einem einheitenbewussten Makro, das Abstände und Schriften einheitlich behandelt.",
  },
  "radians": {
    name: "Radiant",
    meaning: "Aufrechte Einheitenbezeichnung „rad“, die einen im Bogenmaß gemessenen Winkel kennzeichnet.",
    usage: "Der Radiant ist dimensionslos, daher lässt die Mathematik die Einheit meist weg und schreibt \\theta = \\pi/2; Physik und Ingenieurwesen fügen sie oft ausdrücklich hinzu, wie in \\omega = 2\\pi\\,\\text{rad/s}. Setzen Sie einen kleinen Abstand \\, zwischen Zahl und Einheit und halten Sie die Einheit aufrecht; \\text leistet das, doch \\mathrm{rad} ist sicherer, weil \\text in kursiven Umgebungen die umgebende Schrift übernimmt. Die Umrechnung lautet \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180. Beachten Sie, dass rad in der Algebra auch das Radikal eines Ideals abkürzt, meist als \\operatorname{rad}(I) geschrieben.",
  },
};

export default text;
