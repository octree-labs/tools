import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "Tensor",
    meaning: "Ein allgemeiner Tensor vom Typ (2,2) mit zwei oberen (kontravarianten) und zwei unteren (kovarianten) Indizes.",
    usage: "Jeder obere Index transformiert sich mit der Jacobi-Matrix und jeder untere mit ihrer Inversen, sodass die Kontraktion eines oberen mit einem unteren Index ein koordinatenunabhängiges Ergebnis liefert. In der Schreibweise T^{ij}_{kl} stehen die unteren Indizes direkt unter den oberen, was die Reihenfolge der Indizes verbirgt; bei nicht symmetrischen Tensoren schreiben Sie T^{ij}{}_{kl}, damit der untere Block erst nach dem oberen beginnt. Der Riemannsche Krümmungstensor R^i{}_{jkl} und der Elastizitätstensor C_{ijkl} sind gängige Beispiele. Indizes sind standardmäßig kursiv; belassen Sie sie so, sofern es sich nicht um Bezeichnungen statt um Tensorstellen handelt.",
  },
  "covariant-index": {
    name: "Kovarianter Index",
    meaning: "Tensor mit zwei unteren Indizes, ein kovarianter Tensor zweiter Stufe wie eine Metrik, ein Spannungstensor oder eine Bilinearform.",
    usage: "Untere Indizes transformieren sich mit der inversen Jacobi-Matrix, T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}, nach derselben Regel wie Gradienten. Beispiele sind die Metrik g_{ij}, der Ricci-Tensor R_{ij} und der Cauchysche Spannungstensor \\sigma_{ij}. Ein kovarianter 2-Tensor ordnet zwei Vektoren eine Zahl zu, T_{ij} u^i v^j. Im euklidischen Raum mit kartesischen Koordinaten entfällt die Unterscheidung zwischen oben und unten, weshalb technische Lehrbücher oft alle Indizes unten schreiben. Jeder solche Tensor zerfällt in einen symmetrischen und einen antisymmetrischen Anteil, T_{ij} = T_{(ij)} + T_{[ij]}.",
  },
  "contravariant-index": {
    name: "Kontravarianter Index",
    meaning: "Tensor mit zwei oberen Indizes: ein kontravarianter Tensor zweiter Stufe wie eine inverse Metrik oder ein Energie-Impuls-Tensor.",
    usage: "Obere Indizes transformieren sich wie Vektorkomponenten, T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}. Der Energie-Impuls-Tensor T^{\\mu\\nu} ist das Standardbeispiel der Physik, mit dem Erhaltungssatz \\partial_\\mu T^{\\mu\\nu} = 0 in der flachen Raumzeit. Setzen Sie beide Indizes in eine gemeinsame Klammergruppe, T^{ij}; T^i^j ist ein Fehler wegen doppelten Exponenten. Wird zusätzlich ein Strich benötigt, funktioniert T'^{ij}, weil LaTeX den Strich mit dem folgenden Exponenten zusammenführt. Die Kontraktion mit zwei Kovektoren, T^{ij}\\alpha_i\\beta_j, ergibt einen Skalar, und die inverse Metrik g^{ij} ist das häufigste Beispiel in der Geometrie.",
  },
  "mixed-tensor": {
    name: "Gemischter Tensor",
    meaning: "Gemischter Tensor vom Typ (1,1) mit einem oberen und einem unteren Index, gleichwertig zu einer linearen Abbildung auf Vektoren.",
    usage: "Ein (1,1)-Tensor bildet einen Vektor v^j auf T^i_j v^j ab, in einer Basis ist er also einfach eine Matrix, und seine Spur T^i_i ist koordinatenunabhängig. Bei T^i_j stehen die beiden Indizes senkrecht übereinander, was beim Kronecker-Delta unproblematisch, sonst aber mehrdeutig ist, da sich T^i{}_j und T_j{}^i nach dem Senken mit einer Metrik unterscheiden. Der Trick mit der leeren Gruppe {} versetzt sie. Senkt man den oberen Index mit der Metrik, entsteht ein (0,2)-Tensor, T_{kj} = g_{ki} T^i{}_j, und die versetzte Form zeigt, welche Stelle sich bewegt hat.",
  },
  "kronecker-delta": {
    name: "Kronecker-Delta",
    meaning: "Kronecker-Delta: gleich 1, wenn die Indizes übereinstimmen, sonst 0; die Komponenten der identischen Abbildung.",
    usage: "Es wirkt als Indexersetzung, \\delta^i_j v^j = v^i, und seine Spur in n Dimensionen ist \\delta^i_i = n. Es drückt auch die Dualität von Basen aus, e^i(e_j) = \\delta^i_j, sowie die Beziehung zur inversen Metrik, g^{ik} g_{kj} = \\delta^i_j. Da es symmetrisch ist, schadet das Übereinanderstellen der Indizes als \\delta^i_j nicht, anders als bei allgemeinen gemischten Tensoren. In kartesischen Situationen schreibt man es oft als \\delta_{ij} mit beiden Indizes unten. Verwechseln Sie es nicht mit der Diracschen Deltafunktion \\delta(x).",
  },
  "levi-civita": {
    name: "Levi-Civita-Symbol",
    meaning: "Levi-Civita-Symbol in drei Dimensionen: +1 für gerade Permutationen von 123, -1 für ungerade, 0 bei wiederholtem Index.",
    usage: "Es drückt Kreuzprodukte und Rotationen in Indexschreibweise aus, (\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k, und Determinanten als \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}. Die Kontraktionsidentität \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} wird in Beweisen der Vektoranalysis ständig benutzt. Viele Autoren bevorzugen \\varepsilon_{ijk}, das geschwungene Epsilon, um \\epsilon für kleine Größen freizuhalten; entscheiden Sie sich für eine Variante und bleiben Sie dabei. Auf gekrümmten Räumen ist es eine Tensordichte, und der echte Tensor trägt einen Faktor \\sqrt{g}.",
  },
  "einstein-summation": {
    name: "Einsteinsche Summenkonvention",
    meaning: "Einsteinsche Summenkonvention: Über einen oben und unten wiederholten Index wird summiert, A^i B_i bedeutet also die Summe über i.",
    usage: "Die Konvention lässt A^i B_i für \\sum_i A^i B_i stehen, die skalare Paarung eines Vektors mit einem Kovektor, ohne das Summenzeichen zu schreiben. Jeder Summationsindex muss genau einmal oben und einmal unten vorkommen; ein dreimal auftretender Index deutet auf einen Fehler hin. Freie Indizes müssen auf beiden Seiten einer Gleichung übereinstimmen, wie in v^i = T^i_j u^j. Wenn die Konvention den Lesern unbekannt sein könnte, erwähnen Sie sie einmal und geben in der ersten Gleichung die ausgeschriebene Form mit \\sum an.",
  },
  "tensor-product": {
    name: "Tensorprodukt",
    meaning: "Tensorprodukt von A und B, das zwei Tensoren oder Vektorräume zu einem von höherer Stufe oder Dimension verbindet.",
    usage: "Für Vektorräume gilt \\dim(V \\otimes W) = \\dim V \\cdot \\dim W, und bei Tensoren multiplizieren sich die Komponenten, (A \\otimes B)^{ij} = A^i B^j. Bei Matrizen bezeichnet dasselbe Symbol das Kronecker-Produkt, eine Blockmatrix mit den Einträgen a_{ij}B. Die Quantenmechanik verwendet es für zusammengesetzte Systeme, |\\psi\\rangle \\otimes |\\phi\\rangle. \\otimes ist ein binärer Operator mit automatischen Abständen; für ein Produkt über eine Indexmenge nehmen Sie den großen Operator \\bigotimes_{i=1}^n V_i, für wiederholte Faktoren V^{\\otimes k}.",
  },
  "contraction": {
    name: "Kontraktion",
    meaning: "Kontraktion eines gemischten Tensors: Summation über einen wiederholten oberen und unteren Index, die seine Spur ergibt.",
    usage: "Setzt man einen oberen Index gleich einem unteren und summiert, verschwinden beide und die Stufe sinkt um zwei; bei einem (1,1)-Tensor ist das Ergebnis T^i_i = \\operatorname{tr} T ein Skalar. Der Ricci-Tensor ist eine Kontraktion des Riemannschen Krümmungstensors, und die Skalarkrümmung entsteht durch erneute Kontraktion mit der Metrik, R = g^{ij}R_{ij}. Nur ein oberer Index darf mit einem unteren kontrahiert werden; die Kontraktion zweier unterer Indizes erfordert die Metrik. Schreiben Sie \\operatorname{tr} statt eines bloßen tr, damit die Spur aufrecht und mit Operatorabständen erscheint.",
  },
  "metric-lowering": {
    name: "Indexsenkung mit der Metrik",
    meaning: "Senken eines Index: Die Metrik wandelt die kontravarianten Komponenten v^j eines Vektors in kovariante Komponenten v_i um.",
    usage: "Das ist der musikalische Isomorphismus „Be“, oft als v^\\flat geschrieben, der Vektoren mit Kovektoren identifiziert. Im euklidischen Raum mit kartesischen Koordinaten gilt g_{ij} = \\delta_{ij}, das Senken ändert zahlenmäßig also nichts; im Minkowski-Raum mit der Signatur (-,+,+,+) kehrt es das Vorzeichen der Zeitkomponente um. Der freie Index i muss auf beiden Seiten übereinstimmen, während über j summiert wird. Bei einem vollständigen Tensor senken Sie jeden Index einzeln, T_{ij} = g_{ik} T^k{}_j, und achten auf die Reihenfolge der Stellen. Der für v^\\flat verwendete Befehl \\flat ist das musikalische Be-Zeichen und steht im normalen Mathematikmodus zur Verfügung.",
  },
  "metric-raising": {
    name: "Indexhebung mit der Metrik",
    meaning: "Heben eines Index: Die inverse Metrik verwandelt kovariante Komponenten v_j zurück in kontravariante Komponenten v^i.",
    usage: "Das Heben ist der musikalische Isomorphismus „Kreuz“, \\alpha^\\sharp, und auf diese Weise entsteht der Gradientenvektor aus dem Differential: (\\operatorname{grad} f)^i = g^{ij}\\partial_j f. Heben und anschließendes Senken liefert die ursprünglichen Komponenten zurück, weil g^{ij} g_{jk} = \\delta^i_k gilt. In der Relativitätstheorie wandelt p^\\mu = g^{\\mu\\nu} p_\\nu einen Viererimpuls-Kovektor in einen Vektor um. Schreiben Sie die inverse Metrik mit oberen Indizes, niemals als g^{-1}_{ij}, was eine falsche Indexstellung nahelegt. Der Befehl \\sharp liefert das passende Kreuzzeichen, und bei einer diagonalen Metrik bleibt nur der Term mit j = i übrig.",
  },
  "partial-derivative": {
    name: "Partielle Ableitung",
    meaning: "Kurzschreibweise für die partielle Ableitung nach der Koordinate x^i, die auch für die Koordinatenbasisvektoren verwendet wird.",
    usage: "\\partial_i f statt \\frac{\\partial f}{\\partial x^i} hält indexlastige Formeln kompakt, und in der Geometrie bezeichnet \\partial_i auch das Basisvektorfeld \\partial/\\partial x^i. Die Relativitätstheorie verwendet \\partial_\\mu auf der Raumzeit, mit dem d’Alembert-Operator \\partial_\\mu\\partial^\\mu. Partielle Ableitungen von Tensorkomponenten sind in krummlinigen Koordinaten keine Tensoren; ersetzen Sie \\partial_i durch \\nabla_i, um das zu beheben. Ein Komma im Index, f_{,i}, ist die traditionelle gleichwertige Schreibweise. Verwenden Sie für partielle Ableitungen \\partial, nicht d oder \\delta. Partielle Ableitungen kommutieren, \\partial_i\\partial_j = \\partial_j\\partial_i, weshalb Koordinatenfelder eine verschwindende Lie-Klammer haben.",
  },
  "covariant-derivative": {
    name: "Kovariante Ableitung",
    meaning: "Kovariante Ableitung entlang der i-ten Koordinatenrichtung, der tensorielle Ersatz für die partielle Ableitung \\partial_i.",
    usage: "Auf einen Vektor angewandt kommt eine Christoffel-Korrektur hinzu, \\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k, und auf einen Kovektor kehrt sich das Vorzeichen um, \\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k. Die traditionelle Semikolon-Schreibweise drückt dasselbe als v^j{}_{;i} aus. Metrikverträglichkeit bedeutet \\nabla_k g_{ij} = 0, sodass Indizes durch \\nabla hindurch gehoben und gesenkt werden können. Kovariante Ableitungen kommutieren im Allgemeinen nicht; ihr Kommutator auf einem Vektor liefert den Riemannschen Krümmungstensor. Lehrbücher der Relativitätstheorie schreiben denselben Operator als \\nabla_\\mu.",
  },
  "symmetrization": {
    name: "Symmetrisierung",
    meaning: "Symmetrischer Anteil eines Tensors bezüglich der Indizes i und j, geschrieben mit runden Klammern um das Indexpaar.",
    usage: "Für zwei Indizes gilt T_{(ij)} = \\tfrac12(T_{ij} + T_{ji}), bei n Indizes läuft die Summe über alle Permutationen, geteilt durch n!. Die Klammerschreibweise ist in der allgemeinen Relativitätstheorie Standard, etwa in der Killing-Gleichung \\nabla_{(i}\\xi_{j)} = 0. Um einen Index von der Symmetrisierung auszunehmen, grenzen Sie ihn mit senkrechten Strichen ab, wie in T_{(i|j|k)}. Runde Klammern in einem Index sind gewöhnliche Zeichen, ein besonderer Befehl ist also nicht nötig; beachten Sie nur, dass Klammern in verschiedenen Indizes geöffnet und geschlossen werden können.",
  },
  "antisymmetrization": {
    name: "Antisymmetrisierung",
    meaning: "Antisymmetrischer Anteil eines Tensors bezüglich i und j, geschrieben mit eckigen Klammern um die Indizes.",
    usage: "Für zwei Indizes gilt T_{[ij]} = \\tfrac12(T_{ij} - T_{ji}), im Allgemeinen ist es die vorzeichenbehaftete Summe über die Permutationen, geteilt durch n!. Jeder Tensor mit zwei Indizes zerfällt in T_{ij} = T_{(ij)} + T_{[ij]}. Die erste Bianchi-Identität lautet R_{i[jkl]} = 0, und der elektromagnetische Feldstärketensor erfüllt \\partial_{[\\mu}F_{\\nu\\lambda]} = 0. Manche Autoren lassen den Faktor 1/n! weg, geben Sie Ihre Normierung also an. Eckige Klammern in einem Index sind gewöhnliche Zeichen, \\lbrack ist nicht nötig. Vollständig antisymmetrische kovariante Tensoren entsprechen Differentialformen.",
  },
  "tensor-rank": {
    name: "Tensorstufe",
    meaning: "Typ eines Tensors: p kontravariante (obere) und q kovariante (untere) Indizes, oft locker als seine Stufe bezeichnet.",
    usage: "Ein (p, q)-Tensor ist ein Element von V^{\\otimes p} \\otimes (V^*)^{\\otimes q}, ein Vektor ist also vom Typ (1, 0), ein Kovektor (0, 1), eine lineare Abbildung (1, 1) und eine Metrik (0, 2). Die Begriffe schwanken: Manche Bücher nennen p + q die Stufe oder Ordnung und reservieren „Typ“ für das Paar. Eine Kontraktion bildet den Typ (p, q) auf (p-1, q-1) ab. In LaTeX ist das Paar einfach eine Klammer mit Komma; der kleine Abstand nach dem Komma entsteht im Mathematikmodus automatisch, fügen Sie also keinen zusätzlichen Zwischenraum ein.",
  },
  "basis-vector": {
    name: "Basisvektor",
    meaning: "Basisvektoren eines Vektorraums oder Tangentialraums, mit unterem Index versehen, damit die Komponenten obere Indizes tragen.",
    usage: "Ein Vektor wird als v = v^i e_i entwickelt, wobei der untere Index der Basis mit dem oberen Index der Komponenten gepaart wird. In der Geometrie ist die Koordinatenbasis e_i = \\partial_i, und in einem Orthonormalsystem gilt g(e_i, e_j) = \\delta_{ij}. Physik und Ingenieurwesen schreiben oft fett \\mathbf{e}_i oder mit Dach \\hat{e}_i und verwenden \\mathbf{e}_x, \\mathbf{e}_y für kartesische Richtungen. Lassen Sie den Index unten; e^i für Basisvektoren kollidiert mit der Konvention für die duale Basis. Bei einem Basiswechsel e'_i = A^j{}_i e_j transformieren sich die Komponenten mit der inversen Matrix.",
  },
  "dual-basis": {
    name: "Duale Basis",
    meaning: "Kovektoren der dualen Basis, definiert durch e^i(e_j) = \\delta^i_j, mit denen man die Komponenten eines Vektors herausgreift.",
    usage: "Wendet man e^i auf einen Vektor an, erhält man seine i-te Komponente, e^i(v) = v^i, und Kovektoren werden als \\alpha = \\alpha_i e^i entwickelt. Für Koordinaten ist die duale Basis e^i = dx^i, und in Cartans Methode liefert das orthonormale Kobasisfeld e^a die Metrik als g = \\delta_{ab}\\, e^a \\otimes e^b. Da der Index hochgestellt ist, kann e^i als Potenz von e missverstanden werden; besteht diese Gefahr, weisen Sie darauf hin oder verwenden Sie \\theta^i, eine gängige Alternative für Kobasisfelder.",
  },
  "component-transform": {
    name: "Komponententransformation",
    meaning: "Transformationsgesetz für einen kontravarianten Tensor zweiter Stufe: Jeder obere Index erhält einen Faktor der Transformationsmatrix.",
    usage: "Hier ist \\Lambda^i_k die Transformationsmatrix, in der speziellen Relativitätstheorie eine Lorentz-Transformation, allgemein die Jacobi-Matrix \\partial x'^i/\\partial x^k, und die gestrichenen Komponenten gehören zum neuen Bezugssystem. Ein Tensor ist gerade dadurch definiert, dass er diesem Gesetz gehorcht, wobei sich untere Indizes stattdessen mit der inversen Matrix transformieren. LaTeX führt in T'^{ij} Strich und Exponent zusammen, Klammern um den Strich sind also nicht nötig. Versetzen Sie die Indizes als \\Lambda^i{}_k, wenn die Matrix nicht symmetrisch ist, damit die Leser wissen, welche Stelle die Zeile angibt.",
  },
};

export default text;
