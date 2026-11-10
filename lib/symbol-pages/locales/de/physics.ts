import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "Reduziertes Plancksches Wirkungsquantum (h quer)",
    meaning: "Reduziertes Plancksches Wirkungsquantum ħ = h/2π, das Quantum des Drehimpulses, das in der gesamten Quantenmechanik auftritt.",
    usage: "Es erscheint im kanonischen Kommutator [x, p] = i\\hbar, in der Photonenenergie E = \\hbar\\omega und in der Unschärferelation \\Delta x\\, \\Delta p \\geq \\hbar/2. Sein Wert beträgt etwa 1.055 \\times 10^{-34} J s. \\hslash ist eine Variante mit schrägem statt waagerechtem Strich; entscheiden Sie sich für eine und bleiben Sie dabei. Das einfache h ohne Strich ist die nicht reduzierte Konstante aus E = h\\nu. In theoretischen Arbeiten sind Einheiten mit \\hbar = 1 üblich; erwähnen Sie diese Wahl, wenn Sie die Konstante aus den Gleichungen weglassen.",
  },
  "bra-vector": {
    name: "Bra-Vektor",
    meaning: "Ein Bra in Dirac-Notation: der duale (Zeilen-)Vektor, ein lineares Funktional, das auf Kets wirkt.",
    usage: "Das Bra \\langle \\psi | ist das konjugiert Transponierte des Kets |\\psi\\rangle und steht daher links in einem Skalarprodukt oder Erwartungswert. Verwenden Sie \\langle, niemals das Kleiner-Zeichen <, das eine Relation mit breitem Abstand und falscher Form ist. Ein einfacher Strich | ist hier zulässig, aber \\rvert liefert den korrekten Abstand eines schließenden Begrenzers. Bei häufiger Verwendung definieren Sie \\newcommand{\\bra}[1]{\\langle #1 \\rvert}. Ist die Zustandsbezeichnung hoch, skaliert \\left\\langle \\frac{\\psi}{2} \\right| beide Begrenzer gemeinsam.",
  },
  "ket-vector": {
    name: "Ket-Vektor",
    meaning: "Ein Ket in Dirac-Notation, das einen Quantenzustand als Spaltenvektor in einem Hilbertraum darstellt.",
    usage: "Zustände sind Kets: |0\\rangle und |1\\rangle für ein Qubit, |n\\rangle für die Niveaus des harmonischen Oszillators und Superpositionen wie \\alpha|0\\rangle + \\beta|1\\rangle. Die spitze Klammer ist \\rangle, nicht >. Mit \\lvert \\psi \\rangle erhält TeX einen expliziten öffnenden Begrenzer, sodass der Abstand selbst nach einem Minuszeichen stimmt. Ein Makro wie \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} hält Hunderte von Kets einheitlich. Tensorprodukte schreibt man |\\psi\\rangle \\otimes |\\phi\\rangle oder kompakt |\\psi\\phi\\rangle. Ein Ket mal ein Bra, |\\psi\\rangle\\langle\\psi|, ist ein Projektor oder eine Dichtematrix.",
  },
  "braket": {
    name: "Bra-Ket (Skalarprodukt)",
    meaning: "Skalarprodukt zweier Zustände, bei dem ein Bra auf ein Ket trifft; das Betragsquadrat liefert eine Übergangswahrscheinlichkeit.",
    usage: "Die Amplitude \\langle \\phi | \\psi \\rangle ist konjugiert symmetrisch, \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*, und die Normierung lautet \\langle \\psi | \\psi \\rangle = 1. Matrixelemente schließen einen Operator ein: \\langle \\phi | \\hat{A} | \\psi \\rangle. Setzen Sie in die Mitte einen einfachen Strich | statt \\mid, dessen Relationsabstand die beiden Hälften auseinanderschiebt. Bei hohen Inhalten lässt \\left\\langle \\phi \\middle| \\psi \\right\\rangle auch den mittleren Strich mitwachsen. Mathematiker schreiben dasselbe als (\\phi, \\psi) oder \\langle \\phi, \\psi \\rangle mit Komma.",
  },
  "laplacian": {
    name: "Laplace-Operator",
    meaning: "Laplace-Operator, die Summe der zweiten partiellen Ableitungen; er misst, wie stark eine Funktion von ihrem lokalen Mittelwert abweicht.",
    usage: "Die Laplace-Gleichung \\nabla^2 \\phi = 0, die Poisson-Gleichung \\nabla^2 \\phi = -\\rho/\\varepsilon_0, die Wärmeleitungsgleichung und die Wellengleichung verwenden ihn alle. Physiker bevorzugen \\nabla^2, das daran erinnert, dass er die Divergenz des Gradienten ist; Mathematiker schreiben oft \\Delta, was mit \\Delta als Differenz oder Änderung kollidieren kann. In kartesischen Koordinaten gilt \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}, in krummlinigen Koordinaten kommen jedoch zusätzliche Terme hinzu. Für den vektoriellen Laplace-Operator eines Feldes setzen Sie den Operanden fett, um die andere Bedeutung zu kennzeichnen.",
  },
  "d-alembertian": {
    name: "D'Alembert-Operator",
    meaning: "Quadratisches Kastensymbol, der d'Alembertsche Wellenoperator der Relativitätstheorie und der Notwendigkeitsoperator der Modallogik.",
    usage: "In der speziellen Relativitätstheorie fasst \\Box = \\partial^\\mu \\partial_\\mu Zeit- und Raumableitungen zusammen, sodass die Wellengleichung \\Box \\phi = 0 und die Klein-Gordon-Gleichung (\\Box + m^2)\\phi = 0 lautet. Die Vorzeichenkonventionen hängen von der Signatur der Metrik ab, geben Sie Ihre daher an. Modallogiker lesen \\Box p als „notwendigerweise p“ und \\Diamond p als „möglicherweise p“. Manche Texte schreiben in Analogie zu \\nabla^2 auch \\Box^2 für den Operator. Das optisch ähnliche \\square dient häufig als Zeichen für das Beweisende; prüfen Sie, welches Symbol Ihre Dokumentklasse für QED verwendet.",
  },
  "calligraphic-l-lagrangian": {
    name: "Kalligrafisches L (Lagrange-Funktion)",
    meaning: "Kalligrafisches L, das Standardsymbol für eine Lagrange-Dichte und im maschinellen Lernen für eine Verlustfunktion.",
    usage: "Die Feldtheorie schreibt die Wirkung als S = \\int \\mathcal{L}\\, d^4x, mit der Euler-Lagrange-Gleichung \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}. Die klassische Mechanik verwendet für die Lagrange-Funktion selbst oft ein einfaches L und reserviert \\mathcal{L} für Dichten. Arbeiten zum maschinellen Lernen nutzen \\mathcal{L}(\\theta) für einen Verlust, Ingenieure für die Laplace-Transformation \\mathcal{L}\\{f\\}(s). In der Optimierung heißt auch die Lagrange-Funktion mit Multiplikatoren \\mathcal{L}(x, \\lambda). Führen Sie die jeweils benötigte Bedeutung ausdrücklich ein. Ihr Gegenstück über die Legendre-Transformation ist die Hamilton-Funktion \\mathcal{H}.",
  },
  "calligraphic-h-hamiltonian": {
    name: "Kalligrafisches H (Hamilton-Funktion)",
    meaning: "Kalligrafisches H, verwendet für die Hamilton-Funktion (Energiefunktion) und häufig für einen Hilbertraum.",
    usage: "In der klassischen Mechanik lauten die Hamiltonschen Gleichungen \\dot{q} = \\partial \\mathcal{H}/\\partial p und \\dot{p} = -\\partial \\mathcal{H}/\\partial q. Die Quantenmechanik schreibt den Hamilton-Operator meist als \\hat{H} und verwendet \\mathcal{H} für den Hilbertraum der Zustände, sodass die beiden kalligrafischen Bedeutungen in einem Artikel kollidieren können. Die statistische Physik nutzt \\mathcal{H} für ein Hamilton-Funktional im Boltzmann-Gewicht e^{-\\beta \\mathcal{H}}. Die Lerntheorie verwendet es für eine Hypothesenklasse. Wählen Sie verschiedene Buchstaben, wenn mehr als eine Bedeutung vorkommt. Beachten Sie, dass \\mathcal in den Standardschriften nur Großbuchstaben abdeckt.",
  },
  "tensor": {
    name: "Tensor",
    meaning: "Ein kontravarianter Tensor zweiter Stufe wie der Energie-Impuls-Tensor, geschrieben mit zwei oberen griechischen Indizes.",
    usage: "Die allgemeine Relativitätstheorie koppelt Geometrie und Materie über G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}, und die Erhaltung lautet \\nabla_\\mu T^{\\mu\\nu} = 0. Geschweifte Klammern fassen beide Indizes zu einem Exponenten zusammen; T^\\mu\\nu würde \\nu auf die Grundlinie setzen. Bei gemischten Tensoren machen Sie die horizontale Reihenfolge mit einer leeren Gruppe sichtbar: T^{\\mu}{}_{\\nu} setzt den unteren Index hinter den oberen statt darunter. Wiederholte obere und untere Indizes folgen der Einsteinschen Summenkonvention. Griechische Indizes laufen üblicherweise über die Raumzeit, lateinische nur über den Raum.",
  },
  "christoffel-symbol": {
    name: "Christoffel-Symbol",
    meaning: "Christoffel-Symbol zweiter Art, das beschreibt, wie sich die Koordinatenbasisvektoren bezüglich des Levi-Civita-Zusammenhangs ändern.",
    usage: "Es wird aus der Metrik berechnet als \\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu}) und tritt in der Geodätengleichung und in kovarianten Ableitungen auf. Trotz der Indexschreibweise ist es kein Tensor. Hoch- und Tiefstellung an derselben Basis werden übereinander gesetzt; das ist hier der übliche Stil, weil das Symbol in seinem unteren Indexpaar symmetrisch ist. Das große Gamma steht standardmäßig aufrecht; \\varGamma liefert eine kursive Version, falls Ihr Stil das verlangt.",
  },
  "partial-time": {
    name: "Partielle Zeitableitung",
    meaning: "Partieller Ableitungsoperator nach der Zeit t, bei dem alle räumlichen Variablen festgehalten werden.",
    usage: "Er bestimmt Evolutionsgleichungen: die Wärmeleitungsgleichung \\frac{\\partial u}{\\partial t} = k \\nabla^2 u, die Kontinuitätsgleichung und die Schrödinger-Gleichung. Im Fließtext wirkt ein voller \\frac gedrängt, schreiben Sie daher \\partial u/\\partial t oder kompakt \\partial_t u; die Form mit Index ist in Arbeiten über partielle Differentialgleichungen Standard. In abgesetzten Formeln verwenden Sie \\frac, und \\dfrac, wenn der Ausdruck in einem Bruch oder einer Matrix steht und in voller Größe bleiben soll. Unterscheiden Sie ihn von der totalen Ableitung d/dt und von der materiellen Ableitung D/Dt der Strömungsmechanik.",
  },
  "vector-field": {
    name: "Vektorfeld",
    meaning: "Pfeilakzent über einem Buchstaben, der ihn als Vektor kennzeichnet, hier das elektrische Feld E.",
    usage: "Einführende Physiktexte schreiben Vektoren mit Pfeilen, \\vec{E}, \\vec{F} = q\\vec{E}, während die meisten Fachzeitschriften und weiterführenden Texte Fettdruck bevorzugen, \\mathbf{E}, oder für griechische Buchstaben \\boldsymbol{\\omega}. \\vec ist ein kurzer Akzent fester Breite, bemessen für ein einzelnes Zeichen; für Vektoren aus mehreren Buchstaben wie eine Strecke AB erstreckt sich \\overrightarrow{AB} über die ganze Bezeichnung. Wählen Sie einen Vektorstil für das gesamte Dokument. Einheitsvektoren tragen typischerweise ein Dach, \\hat{x}, und für i und j ohne Punkt unter Akzenten verwenden Sie \\imath und \\jmath.",
  },
  "divergence": {
    name: "Divergenz",
    meaning: "Divergenzoperator, Nabla skalar multipliziert mit einem Vektorfeld, der den Nettofluss nach außen pro Volumeneinheit angibt.",
    usage: "Das Gaußsche Gesetz \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 und das Gesetz der Quellenfreiheit \\nabla \\cdot \\mathbf{B} = 0 sind die bekanntesten Anwendungen, und inkompressible Strömung verlangt \\nabla \\cdot \\mathbf{u} = 0. \\cdot hat den Abstand eines binären Operators, was dem erwarteten Bild entspricht. Verwenden Sie \\cdot, keinen Punkt und kein \\bullet. Manche mathematischen Texte bevorzugen \\operatorname{div} \\mathbf{F}, womit man Nabla nicht als Vektor behandelt. Der Gaußsche Integralsatz verknüpft sie mit dem Fluss durch den Rand: \\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}.",
  },
  "curl": {
    name: "Rotation",
    meaning: "Rotationsoperator, Nabla vektoriell multipliziert mit einem Vektorfeld, der dessen lokale Drehung bzw. Zirkulationsdichte misst.",
    usage: "Das Faradaysche Gesetz \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t und das Ampèresche Gesetz mit Maxwells Ergänzung werden damit geschrieben, und in Strömungen ist \\nabla \\times \\mathbf{u} die Wirbelstärke. Zwei Identitäten sollte man sich merken: Die Rotation eines Gradienten ist null, und die Divergenz einer Rotation ist null. \\times ist ein binärer Operator, der Abstand ergibt sich also automatisch. Europäische Texte schreiben stattdessen manchmal \\operatorname{rot} \\mathbf{F}, andere verwenden \\operatorname{curl}. In dieser Form ist die Rotation nur in drei Dimensionen definiert.",
  },
};

export default text;
