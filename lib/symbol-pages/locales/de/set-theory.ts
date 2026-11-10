import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "Leere Menge (Variante)",
    meaning: "Variante des Symbols für die leere Menge: ein runder Kreis mit diagonalem Schrägstrich, die Menge ohne Elemente.",
    usage: "\\varnothing und \\emptyset bedeuten dasselbe, die leere Menge, sehen aber unterschiedlich aus: \\emptyset ist in Computer Modern eine schmale, hohe Null mit Schrägstrich, während \\varnothing ein runder Kreis mit Schrägstrich ist, den viele Mathematiker bevorzugen. Verwenden Sie eine Form durchgehend, etwa A \\cap B = \\varnothing für disjunkte Mengen. Es ist weder der griechische Buchstabe \\phi oder \\varphi noch der skandinavische Buchstabe \\O, vermeiden Sie diese also als Ersatz. Manche Autoren definieren \\emptyset in der Präambel als \\varnothing um, sodass alle Vorkommen auf einmal umgestellt werden.",
  },
  "contains": {
    name: "Umgekehrtes Elementzeichen (enthält)",
    meaning: "Umgekehrte Elementrelation: Die Menge links enthält das Element rechts.",
    usage: "A \\ni x sagt dasselbe wie x \\in A, nur mit der Menge zuerst, was sich in Wendungen wie „eine Umgebung U \\ni x“ natürlich liest. Ältere Texte und manche Logiker verwendeten \\ni auch für „sodass“, heute sind jedoch \\mid oder ein Doppelpunkt üblich. \\owns ist ein Alias für \\ni. Die Negation ist \\not\\ni. Verwechseln Sie es nicht mit dem Buchstaben Epsilon oder mit einem von Hand umgedrehten \\in; \\ni ist eine echte Relation mit passenden Abständen.",
  },
  "not-subset": {
    name: "Nicht-Teilmenge-Zeichen",
    meaning: "Durchgestrichenes Teilmengenzeichen: Die linke Menge ist keine Teilmenge der rechten.",
    usage: "\\not\\subset legt mit dem allgemeinen Präfix \\not einen Schrägstrich über \\subset. Das Ergebnis ist brauchbar, auch wenn der Strich manchmal nicht mittig sitzt; die eigenen Glyphen \\nsubseteq (keine Teilmenge oder gleich) und \\nsubset aus manchen Symbolpaketen sehen besser aus. Da \\subset selbst zwischen echter und nicht strikter Inklusion mehrdeutig ist, ist \\nsubseteq oft die klarere Negation. Beispiel: \\mathbb{Q} \\not\\subset \\mathbb{Z}, denn 1/2 ist rational, aber keine ganze Zahl. Setzen Sie \\not direkt vor die Relation, ohne Leerzeichen oder Klammern, damit beides korrekt verbunden wird.",
    example: "\\mathbb{Q} \\not\\subset \\mathbb{Z} \\text{ da } \\tfrac{1}{2} \\notin \\mathbb{Z}",
  },
  "big-union": {
    name: "Große Vereinigung",
    meaning: "Großer Vereinigungsoperator für die Vereinigung einer indizierten Mengenfamilie, mit Grenzen darüber und darunter.",
    usage: "\\bigcup_{i=1}^{\\infty} A_i schreibt eine abzählbare Vereinigung, \\bigcup_{\\alpha \\in I} U_\\alpha eine Vereinigung über eine Indexmenge, etwa bei offenen Überdeckungen. Es verhält sich wie \\sum: Im abgesetzten Stil stehen die Grenzen darunter und darüber, im Fließtext seitlich, und \\limits erzwingt sie auch im Fließtext darunter. Verwenden Sie es nicht zwischen zwei Mengen; A \\cup B nutzt das binäre \\cup. Verwandte große Operatoren sind \\bigcap, \\bigsqcup für disjunkte Vereinigungen und \\biguplus für die Vereinigung von Multimengen. Die De-Morganschen Gesetze verbinden es mit \\bigcap und Komplementen.",
  },
  "big-intersection": {
    name: "Großer Schnitt",
    meaning: "Großer Schnittoperator für den Durchschnitt einer indizierten Mengenfamilie.",
    usage: "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing ist ein Standardbeispiel, und in der Topologie schreibt man \\bigcap_{\\alpha} F_\\alpha für Durchschnitte abgeschlossener Mengen. Wie bei anderen großen Operatoren stehen die Grenzen im abgesetzten Modus darunter und darüber, im Fließtext daneben, und im abgesetzten Stil wird das Zeichen größer. Für zwei Mengen verwenden Sie stattdessen das binäre \\cap. Intervallschachtelungen, die Cantor-Menge \\bigcap_n C_n und die Definition der erzeugten Sigma-Algebra als Durchschnitt aller sie enthaltenden Sigma-Algebren nutzen es.",
  },
  "complement": {
    name: "Komplement",
    meaning: "Komplementsymbol, meist als Exponent an einer Menge, um alle Elemente außerhalb von ihr zu bezeichnen.",
    usage: "A^\\complement bezeichnet das Komplement von A bezüglich einer Grundmenge, sodass A \\cup A^\\complement = U gilt. Es ist ein gewöhnliches Symbol, das wie ein stilisiertes C aussieht. Übliche Alternativen sind A^c, A' und \\overline{A}, doch der Überstrich kann mit dem topologischen Abschluss und der Strich mit Ableitungen verwechselt werden, \\complement ist also eindeutig. Schreiben Sie es als Exponent; allein steht es selten. Das De-Morgansche Gesetz (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement ist eine klassische Anwendung.",
  },
  "natural-numbers": {
    name: "Natürliche Zahlen",
    meaning: "Das Blackboard-Bold-N (Doppelstrich-N), das Standardsymbol für die Menge der natürlichen Zahlen 1, 2, 3 und so weiter.",
    usage: "Ob \\mathbb{N} die 0 enthält, ist uneinheitlich: Logik und Informatik beginnen meist bei 0, die Zahlentheorie oft bei 1; nennen Sie also Ihre Konvention oder schreiben Sie \\mathbb{N}_0 bzw. \\mathbb{Z}_{\\ge 0} und \\mathbb{Z}_{>0}. Der Befehl \\mathbb deckt in der Standard-Doppelstrichschrift nur Großbuchstaben ab, \\mathbb{1} oder Kleinbuchstaben werden ohne ein weiteres Schriftpaket also nicht wie erwartet dargestellt. Viele Autoren definieren der Kürze halber \\newcommand{\\N}{\\mathbb{N}}. Folgen schreibt man oft als (a_n)_{n \\in \\mathbb{N}}. Induktionsbeweise beginnen typischerweise mit „für alle n \\in \\mathbb{N}“.",
  },
  "integers": {
    name: "Ganze Zahlen",
    meaning: "Das Doppelstrich-Z, die Menge aller ganzen Zahlen, positiv, negativ und null.",
    usage: "Das Z kommt vom deutschen Wort „Zahlen“. Gängige Konstruktionen sind die zyklische Gruppe \\mathbb{Z}/n\\mathbb{Z}, die p-adischen ganzen Zahlen \\mathbb{Z}_p (Vorsicht: Manche Autoren schreiben \\mathbb{Z}_n stattdessen für die zyklische Gruppe), das Gitter \\mathbb{Z}^n und \\mathbb{Z}[i] für die Gaußschen Zahlen. Teilmengen schreibt man mit Indizes wie \\mathbb{Z}_{\\ge 0}. \\mathbb funktioniert in den Standardschriften nur mit Großbuchstaben. Vermeiden Sie die Nachahmung durch fettes \\mathbf{Z}, die ältere Druckkonvention. In der Ringtheorie ist \\mathbb{Z} der initiale Ring, und jede abelsche Gruppe ist ein \\mathbb{Z}-Modul.",
  },
  "rational-numbers": {
    name: "Rationale Zahlen",
    meaning: "Das Doppelstrich-Q, der Körper der rationalen Zahlen (Brüche ganzer Zahlen).",
    usage: "Q steht für Quotient. Es erscheint in Körpererweiterungen wie \\mathbb{Q}(\\sqrt{2}), in Dichtheitsaussagen, etwa dass \\mathbb{Q} dicht in \\mathbb{R} liegt, und in der algebraischen Zahlentheorie mit \\overline{\\mathbb{Q}} für die algebraischen Zahlen. Die p-adischen Zahlen schreibt man \\mathbb{Q}_p. Positive rationale Zahlen sind \\mathbb{Q}_{>0} oder \\mathbb{Q}^+. Da \\mathbb nur Großbuchstaben abdeckt, ist das hier kein Problem. Die Definition \\newcommand{\\Q}{\\mathbb{Q}} spart in algebralastigen Dokumenten Tipparbeit. Sein algebraischer Abschluss ist abzählbar, während seine Vervollständigung bezüglich des gewöhnlichen Betrags \\mathbb{R} ergibt. Rationale Punkte auf Kurven schreibt man C(\\mathbb{Q}).",
  },
  "real-numbers": {
    name: "Reelle Zahlen",
    meaning: "Das Doppelstrich-R, die Menge der reellen Zahlen, die den kontinuierlichen Zahlenstrahl bilden.",
    usage: "\\mathbb{R}^n ist der euklidische Raum, f : \\mathbb{R} \\to \\mathbb{R} eine reelle Funktion und \\mathbb{R}_{\\ge 0} oder \\mathbb{R}_+ die nichtnegativen reellen Zahlen (ob \\mathbb{R}^+ die 0 enthält, ist Konventionssache). Matrizenräume schreibt man \\mathbb{R}^{m \\times n}. Die erweiterten reellen Zahlen sind \\overline{\\mathbb{R}} oder [-\\infty, \\infty]. Vermeiden Sie \\Re, das ein Fraktur-R für den Realteil einer komplexen Zahl druckt, nicht die Menge der reellen Zahlen. Viele Autoren definieren ein kurzes Makro \\R. Seine Vollständigkeit, also dass jede beschränkte Menge ein Supremum besitzt, unterscheidet es von \\mathbb{Q}.",
  },
  "complex-numbers": {
    name: "Komplexe Zahlen",
    meaning: "Das Doppelstrich-C, der Körper der komplexen Zahlen der Form a + bi mit reellen a und b.",
    usage: "Die Funktionentheorie arbeitet mit Funktionen f : \\mathbb{C} \\to \\mathbb{C}, die lineare Algebra mit \\mathbb{C}^n und hermiteschen Matrizen in \\mathbb{C}^{n \\times n}, die algebraische Geometrie mit Polynomringen \\mathbb{C}[x]. Die punktierte Ebene ist \\mathbb{C} \\setminus \\{0\\} oder \\mathbb{C}^\\times, die Riemannsche Zahlenkugel \\hat{\\mathbb{C}} oder \\mathbb{C} \\cup \\{\\infty\\}. Der Fundamentalsatz der Algebra besagt, dass \\mathbb{C} algebraisch abgeschlossen ist. Verwenden Sie nicht \\mathcal{C}, das meist eine Kategorie oder eine Funktionenklasse wie C^\\infty bezeichnet. Den komplexen projektiven Raum schreibt man \\mathbb{CP}^n oder \\mathbb{P}^n_\\mathbb{C}.",
  },
  "power-set": {
    name: "Potenzmenge",
    meaning: "Das kalligrafische P, die übliche Bezeichnung für die Potenzmenge (die Menge aller Teilmengen) einer Menge.",
    usage: "\\mathcal{P}(A) ist die Potenzmenge mit |\\mathcal{P}(A)| = 2^{|A|} für endliches A, und der Satz von Cantor besagt, dass es keine Surjektion A \\to \\mathcal{P}(A) gibt. Manche Autoren verwenden stattdessen \\wp, das Weierstraßsche p, oder 2^A. \\mathcal{P} steht außerdem für Wahrscheinlichkeitsmaße, Partitionen oder die Klasse P in der Komplexitätstheorie, der Kontext ist also entscheidend. Das kalligrafische Alphabet umfasst nur Großbuchstaben. Für ein schreibschriftartigeres P ist ein Skriptschrift-Befehl wie \\mathscr aus einem Zusatzpaket eine Alternative.",
  },
  "cardinality": {
    name: "Mächtigkeit",
    meaning: "Senkrechte Striche um eine Menge geben ihre Mächtigkeit (Kardinalität) an: die Anzahl ihrer Elemente.",
    usage: "Bei endlichen Mengen zählt |A| die Elemente, wie in der Siebformel |A \\cup B| = |A| + |B| - |A \\cap B|; bei unendlichen Mengen ist es die Kardinalzahl. Dieselbe Schreibweise bedeutet bei Zahlen den Betrag und bei Matrizen die Determinante, der Kontext entscheidet also. Alternativen sind \\#A und \\operatorname{card}(A). Für Abstände, die links und rechts unterscheiden, schreiben Sie \\lvert A \\rvert, und um hohe Inhalte wie \\mathcal{P}(\\mathbb{N}) verwenden Sie \\left| ... \\right|. In der Kombinatorik beweist man |A| = |B| für endliche Mengen oft durch Angabe einer Bijektion.",
  },
  "aleph": {
    name: "Aleph",
    meaning: "Der hebräische Buchstabe Aleph, verwendet für unendliche Kardinalzahlen, beginnend mit der abzählbaren Unendlichkeit Aleph null.",
    usage: "\\aleph_0 ist die Mächtigkeit von \\mathbb{N}, \\aleph_1 die nächstgrößere Kardinalzahl, und die Kontinuumshypothese besagt 2^{\\aleph_0} = \\aleph_1. Schreiben Sie Indizes als \\aleph_0, nicht als \\aleph0. Weitere im Mathematiksatz verfügbare hebräische Buchstaben sind \\beth, \\gimel und \\daleth, wobei die Beth-Zahlen \\beth_1 = 2^{\\aleph_0} das Kontinuum messen. \\aleph ist ein gewöhnliches Symbol. Verwechseln Sie es nicht mit \\alpha oder mit N für die natürlichen Zahlen. Cantors Diagonalargument zeigt, dass die reellen Zahlen überabzählbar sind, ihre Mächtigkeit also echt größer als \\aleph_0 ist.",
  },
};

export default text;
