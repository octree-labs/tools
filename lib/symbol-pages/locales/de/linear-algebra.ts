import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "Fettgedruckter Vektor",
    meaning: "Fetter, aufrechter Buchstabe, die übliche Druckkonvention für einen Vektor wie x im R^n.",
    usage: "Lehrbücher der linearen Algebra und physikalische Arbeiten setzen Vektoren fett, etwa in A\\mathbf{x} = \\mathbf{b}. \\mathbf wirkt nur auf lateinische Buchstaben und Ziffern; griechische Buchstaben wie \\alpha bleiben unverändert, verwenden Sie dafür \\boldsymbol{\\alpha}. Beachten Sie, dass \\mathbf aufrecht fett setzt, während \\boldsymbol{x} fett kursiv ergibt; der ISO-Stil bevorzugt fett kursive Vektoren, viele Lehrbücher dagegen aufrechte. Alternativen sind \\vec{x} mit Pfeil, verbreitet in der Einführungsphysik, und eine Unterstreichung in handschriftlich anmutenden Skripten. Entscheiden Sie sich für eine Konvention und wenden Sie sie konsequent an, am besten über ein Makro, damit sie an einer Stelle geändert werden kann.",
  },
  "transpose": {
    name: "Transponierte",
    meaning: "Transponierte der Matrix A, geschrieben mit dem Symbol \\top; Zeilen und Spalten werden vertauscht.",
    usage: "Mit \\top als Exponent erhalten Sie ein sauberes, aufrechtes T-förmiges Zeichen, das nicht mit einer Variablen namens T verwechselt werden kann; deshalb schreiben viele Arbeiten aus maschinellem Lernen und Statistik \\mathbf{x}^{\\top}\\mathbf{y} oder (AB)^{\\top} = B^{\\top}A^{\\top}. A^T sieht ähnlich aus, verwendet aber ein kursives T, und \\intercal ist eine dritte Variante, die tiefer sitzt und schmaler ist. Wofür Sie sich auch entscheiden, definieren Sie ein kurzes Makro, damit ein späterer Stilwechsel nur eine Zeile kostet. Bei komplexen Matrizen schreibt man die konjugiert Transponierte meist als A^{*} oder A^{H}, in der Physik ist \\dagger üblich.",
  },
  "transpose-t": {
    name: "Transponierte (T)",
    meaning: "Transponierte von A, gekennzeichnet durch ein hochgestelltes kursives T, die in Lehrbüchern häufigste Form.",
    usage: "A^T ist schnell geschrieben und wird überall verstanden: Die Normalgleichungen der kleinsten Quadrate A^T A\\mathbf{x} = A^T\\mathbf{b} erscheinen in den meisten Lehrbüchern der linearen Algebra in dieser Form. Der Nachteil ist die Mehrdeutigkeit, wenn T zugleich eine Variable ist, etwa ein Zeithorizont oder eine Temperatur, denn dann könnte A^T als Potenz gelesen werden. Wechseln Sie in diesem Fall zu A^{\\top} oder zum aufrechten A^{\\mathsf{T}}. Sobald der Exponent mehr als ein Zeichen umfasst, sind Klammern nötig, die inverse Transponierte ist also A^{-T}, nicht A^-T. Eine symmetrische Matrix ist eine Matrix mit A^T = A.",
  },
  "inverse": {
    name: "Inverse Matrix",
    meaning: "Inverse der quadratischen Matrix A, also die Matrix, deren Produkt mit A die Einheitsmatrix ergibt.",
    usage: "Sie erfüllt AA^{-1} = A^{-1}A = I und existiert nur, wenn \\det(A) \\neq 0 gilt. Die geschweiften Klammern sind Pflicht: A^-1 würde nur das Minuszeichen hochstellen und die 1 auf der Grundlinie lassen. Für eine 2×2-Matrix wird die explizite Formel mit \\frac{1}{ad-bc} mal der Adjunkten oft vollständig mit bmatrix gesetzt. In numerischen Arbeiten wissen die Leser, dass die Inverse selten explizit berechnet wird, die Schreibweise \\mathbf{x} = A^{-1}\\mathbf{b} ist als Notation also unproblematisch. Pseudoinverse schreibt man A^{+} oder A^{\\dagger}, und (AB)^{-1} = B^{-1}A^{-1} kehrt die Reihenfolge um.",
  },
  "determinant": {
    name: "Determinante",
    meaning: "Determinante einer quadratischen Matrix A, der Skalar, der ihren vorzeichenbehafteten Volumenskalierungsfaktor angibt.",
    usage: "\\det ist ein vordefinierter Operator, wird also aufrecht und mit korrekten Abständen gesetzt; det(A) einzutippen würde drei einzelne kursive Variablen erzeugen. Wichtige Identitäten sind \\det(AB) = \\det(A)\\det(B) und \\det(A^{-1}) = 1/\\det(A). Anders als \\sin kann \\det im Display-Stil Grenzen darunter tragen, wie \\lim. Für eine explizite Matrix zeichnet die Umgebung vmatrix direkt senkrechte Striche, sodass sich \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc natürlich liest. Ist das Argument ein einzelner Buchstabe, sind die Klammern wie bei anderen Operatoren optional: \\det A.",
  },
  "trace": {
    name: "Spur",
    meaning: "Spur von A, die Summe ihrer Diagonaleinträge, geschrieben mit der aufrechten Bezeichnung „tr“.",
    usage: "Die Spur erscheint in Identitäten wie \\operatorname{tr}(AB) = \\operatorname{tr}(BA) und in der Frobeniusnorm \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A). Mit \\text{tr} erhalten Sie aufrechte Buchstaben, doch es übernimmt die Schrift des umgebenden Textes, wird also in einem Satz kursiv, und fügt keine Operatorabstände ein. Robuster ist \\operatorname{tr} oder ein globales \\DeclareMathOperator{\\tr}{tr} in der Präambel, sodass \\tr A auch ohne Klammern richtig gesetzt wird. Physiker schreiben oft Tr mit großem T, besonders bei Dichtematrizen. Die Spur ist außerdem gleich der Summe der Eigenwerte, mit Vielfachheit gezählt.",
  },
  "rank": {
    name: "Rang",
    meaning: "Rang von A: die Dimension ihres Spaltenraums, geschrieben mit aufrechter Bezeichnung.",
    usage: "Der Rangsatz lautet \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n, und eine quadratische Matrix ist genau dann invertierbar, wenn sie vollen Rang hat. \\text{rank} liefert aufrechte Buchstaben, aber die Kursivschrift einer Satzumgebung kann hineinwirken, und es fehlen Operatorabstände. Verwenden Sie lieber \\operatorname{rank}(A), oder deklarieren Sie einmal \\DeclareMathOperator{\\rank}{rank} und schreiben Sie \\rank A. Es gibt keinen eingebauten Befehl \\rank, ohne Definition führt er daher zum Fehler „undefined control sequence“. Niedrigrangapproximation mittels abgeschnittener Singulärwertzerlegung ist ein typischer Anlass, den Rang zu setzen.",
  },
  "norm": {
    name: "Norm",
    meaning: "Doppelte senkrechte Striche um x, die seine Norm, Länge oder seinen Betrag bezeichnen.",
    usage: "Mit \\lVert und \\rVert statt \\| auf beiden Seiten weiß LaTeX, welcher Strich öffnet und welcher schließt, und setzt die Abstände korrekt, etwa in \\lVert -x \\rVert, wo \\|-x\\| das Minus als binären Operator behandeln würde. Indizes wählen die Norm aus: \\lVert x \\rVert_2 für die euklidische, \\lVert x \\rVert_1, \\lVert x \\rVert_\\infty oder \\lVert A \\rVert_F für die Frobeniusnorm. Für hohe Inhalte verwenden Sie \\left\\lVert ... \\right\\rVert. Die Dreiecksungleichung \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert ist ein typischer Einsatz, und ein Makro \\norm spart in langen Arbeiten viel Tipparbeit.",
  },
  "inner-product": {
    name: "Skalarprodukt",
    meaning: "Spitze Klammern um zwei Vektoren, die ihr Skalarprodukt (inneres Produkt) bezeichnen.",
    usage: "Innere Produkte verallgemeinern das Standardskalarprodukt: \\langle x, y \\rangle = \\sum_i x_i y_i im R^n, und die Cauchy-Schwarz-Ungleichung |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert ist das klassische Beispiel. Tippen Sie niemals stattdessen Kleiner- und Größerzeichen; < und > sind Relationen mit breiten Abständen und falschem Winkel. Für große Argumente skaliert \\left\\langle ... \\right\\rangle die Klammern. In der Quantenmechanik bilden dieselben Klammern die Bra-Ket-Notation, \\langle \\psi | \\phi \\rangle, mit einem Strich in der Mitte. Manche Bücher schreiben für dieselbe Größe (x, y) oder x \\cdot y.",
  },
  "kronecker-delta": {
    name: "Kronecker-Delta",
    meaning: "Kronecker-Delta: gleich 1, wenn die Indizes i und j übereinstimmen, sonst 0.",
    usage: "Es beschreibt die Einheitsmatrix eintragsweise, I_{ij} = \\delta_{ij}, und drückt die Orthonormalität einer Basis aus, \\langle e_i, e_j \\rangle = \\delta_{ij}. In Indexschreibweise wirkt es als Substitutionsoperator: \\sum_j \\delta_{ij} a_j = a_i, was Tensorrechnungen vereinfacht. Verwechseln Sie es nicht mit der Dirac-Delta-Distribution \\delta(x) auf kontinuierlichen Variablen, auch wenn beide das kleine \\delta verwenden. Klammern um ij halten beide Indizes im Index; \\delta_ij würde nur das i tiefstellen und das j auf der Grundlinie lassen. Bei Tensoren mit gemischten Indizes schreiben Sie stattdessen \\delta^i_j.",
  },
  "identity-matrix": {
    name: "Einheitsmatrix",
    meaning: "Die n×n-Einheitsmatrix mit Einsen auf der Diagonale und Nullen überall sonst.",
    usage: "Der Index gibt die Größe an, sodass für eine m×n-Matrix A sowohl AI_n = A als auch I_m A = A gilt, mit unterschiedlichen Einheitsmatrizen auf beiden Seiten. Ist die Dimension offensichtlich, genügt ein einfaches I; manche Autoren bevorzugen ein fettes \\mathbf{I} oder schreiben E, besonders in älteren europäischen Texten. Bei mehrstelligen Größen setzen Sie Klammern: I_{n+1} oder I_{10}, denn I_10 würde nur die 1 tiefstellen. Das charakteristische Polynom \\det(A - \\lambda I_n) ist der klassische Ort, an dem sie auftritt, und \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} schreibt I_2 explizit aus.",
  },
  "zero-matrix": {
    name: "Nullmatrix",
    meaning: "Fett gesetzte Null, die den Nullvektor oder die Nullmatrix im Unterschied zum Skalar 0 bezeichnet.",
    usage: "Der Fettdruck unterscheidet das neutrale Element der Addition eines Vektorraums von der Zahl Null, etwa in A\\mathbf{x} = \\mathbf{0} für ein homogenes System oder in \\mathbf{v} + \\mathbf{0} = \\mathbf{v}. \\mathbf funktioniert auch bei Ziffern, daher ist dies die einfachste Form; \\boldsymbol{0} liefert in den meisten Schriften dasselbe Ergebnis. Für eine Nullmatrix expliziter Größe schreiben Sie \\mathbf{0}_{m \\times n} oder ein großes O_{m \\times n}. Viele Arbeiten verzichten auf den Fettdruck und schreiben 0, wenn der Typ aus dem Kontext klar ist, was bei konsequenter Handhabung akzeptabel ist. Passen Sie den Fettstil an den Ihrer übrigen Vektoren an.",
  },
  "matrix": {
    name: "Matrix",
    meaning: "Die Umgebung bmatrix setzt eine Matrix in eckigen Klammern, mit & zwischen den Spalten.",
    usage: "Einträge einer Zeile werden durch & getrennt, Zeilen enden mit \\\\, und die Klammern passen ihre Größe dem Inhalt an, ein \\left[ ist also nicht nötig. Verwandte Umgebungen ändern nur die Begrenzer: pmatrix verwendet runde Klammern, vmatrix senkrechte Striche für Determinanten, Vmatrix Doppelstriche und das einfache matrix gar keine. Die Umgebung array ist die ältere Alternative; sie braucht eine Spaltenangabe wie {cc}, erlaubt aber senkrechte Linien und spaltenweise Ausrichtung. Bei allgemeinen Matrizen füllen Sie Lücken mit \\cdots, \\vdots und \\ddots, etwa a_{11} & \\cdots & a_{1n}. Im Fließtext vermeidet smallmatrix innerhalb von \\bigl[ \\bigr], dass die Zeile gedehnt wird.",
  },
  "column-vector": {
    name: "Spaltenvektor",
    meaning: "pmatrix mit einer einzigen Spalte, die x über y als Spaltenvektor in runden Klammern stapelt.",
    usage: "Jedes \\\\ beginnt eine neue Zeile, eine einzelne Spalte von Einträgen wird so zu einem senkrechten Vektor; das ist die übliche Schreibweise für Koordinaten im R^2 oder die rechte Seite eines linearen Gleichungssystems. Runde Klammern (pmatrix) und eckige Klammern (bmatrix) sind gleichermaßen üblich; wählen Sie einen Stil für das gesamte Dokument. Um im Fließtext vertikalen Platz zu sparen, schreiben Sie stattdessen eine transponierte Zeile, (x, y)^{\\top}. Für lange Vektoren verwenden Sie \\vdots in einer mittleren Zeile, etwa x_1 \\\\ \\vdots \\\\ x_n. Spaltenvektoren im Fließtext wirken gedrängt und vergrößern den Zeilenabstand; smallmatrix ist die kompakte Alternative, wenn sie sich nicht vermeiden lassen.",
  },
};

export default text;
