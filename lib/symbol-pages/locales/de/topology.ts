import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "Aleph-null",
    meaning: "Aleph-null, die Kardinalität der natürlichen Zahlen und die kleinste unendliche Kardinalzahl.",
    usage: "Jede Menge, die sich als Folge auflisten lässt, etwa \\mathbb{Z} oder \\mathbb{Q}, hat die Kardinalität \\aleph_0, und Rechnungen wie \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 zeigen, wie unendliche Kardinalzahlen andere absorbieren. Cantors Diagonalargument beweist 2^{\\aleph_0} > \\aleph_0, die reellen Zahlen sind also echt mächtiger. \\aleph steht ohne zusätzliche Pakete zur Verfügung und verhält sich wie ein gewöhnliches Symbol, der Index wird also direkt angehängt. Manche ältere Texte schreiben \\omega für die entsprechende Ordinalzahl; halten Sie Kardinal- und Ordinalzahlen in Ihrer Notation auseinander.",
  },
  "aleph-one": {
    name: "Aleph-eins",
    meaning: "Aleph-eins, die erste überabzählbare Kardinalzahl: die nächste unendliche Größe nach der abzählbaren.",
    usage: "Die Kontinuumshypothese besagt 2^{\\aleph_0} = \\aleph_1, das heißt, keine Menge liegt in ihrer Mächtigkeit echt zwischen den ganzen und den reellen Zahlen; Gödel und Cohen zeigten, dass sie von ZFC unabhängig ist. Schreiben Sie |\\mathbb{R}| = \\aleph_1 nicht als Tatsache, denn das ist genau die offene Annahme; verwenden Sie \\mathfrak{c} oder 2^{\\aleph_0} für das Kontinuum. \\aleph_1 ist auch die Kardinalität von \\omega_1, der Menge der abzählbaren Ordinalzahlen. Größere Alephs folgen dem Muster \\aleph_\\alpha mit Ordinalzahlen als Index, und der Index braucht geschweifte Klammern, wenn er länger als ein Token ist.",
    example: "2^{\\aleph_0} = \\aleph_1 \\quad \\text{(KH)}",
  },
  "beth": {
    name: "Beth",
    meaning: "Hebräischer Buchstabe Beth, verwendet für die Beth-Zahlen: iterierte Potenzmengen ausgehend von der abzählbaren Kardinalzahl.",
    usage: "Die Beth-Folge ist durch \\beth_0 = \\aleph_0 und \\beth_{\\alpha+1} = 2^{\\beth_\\alpha} definiert, \\beth_1 ist also die Kardinalität der reellen Zahlen und \\beth_2 die aller reellen Funktionen. Die verallgemeinerte Kontinuumshypothese ist die Aussage \\aleph_\\alpha = \\beth_\\alpha für jede Ordinalzahl. Neben \\aleph bietet der erweiterte Symbolvorrat von LaTeX \\beth, \\gimel und \\daleth, den zweiten bis vierten hebräischen Buchstaben. Wie \\aleph ist es ein gewöhnliches Symbol, Indizes werden also direkt angehängt; außerhalb der Mengenlehre begegnet man ihm selten.",
  },
  "weierstrass-p": {
    name: "Weierstraßsches p",
    meaning: "Schreibschriftartiges p für die Weierstraßsche elliptische Funktion, eine doppelt periodische meromorphe Funktion.",
    usage: "Die Weierstraßsche Funktion \\wp(z) erfüllt (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3, weshalb sie elliptische Kurven parametrisiert. Das Zeichen ist ein besonderes Schreibschrift-p, das zu keiner Schriftfamilie gehört, \\mathcal{P} und \\mathscr{P} sind also andere Symbole. Manche Autoren verwenden \\wp für die Potenzmenge, doch \\mathcal{P}(X) ist die gebräuchlichere Wahl und vermeidet die Verwechslung mit der elliptischen Funktion. Die Strichschreibweise funktioniert wie gewohnt, \\wp'(z), und das Symbol reicht wie eine Unterlänge etwas unter die Grundlinie.",
  },
  "fraktur-r-real-part-symbol": {
    name: "Fraktur-R (Realteil-Symbol)",
    meaning: "Großes Fraktur-R, das klassische Symbol für den Realteil einer komplexen Größe.",
    usage: "Für sich genommen ist \\Re nur ein Zeichen und kein Operator, vor einem Argument entsteht also kein automatischer Abstand; lassen Sie runde oder geschweifte Klammern folgen, wie in \\Re(s) > 1 für die Halbebene, in der die Reihe der Riemannschen Zetafunktion konvergiert. Die analytische Zahlentheorie verwendet genau diesen Stil. Wünschen Sie ein anderes Erscheinungsbild, definieren Sie es in der Präambel mit \\renewcommand{\\Re}{\\operatorname{Re}} um, sodass sich jedes Vorkommen auf einmal ändert. Beachten Sie, dass sich \\Re von \\mathfrak{R} unterscheidet, das ein Fraktur-R aus einer anderen Schrift liefert und etwas anders aussieht.",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "Fraktur-I (Imaginärteil-Symbol)",
    meaning: "Großes Fraktur-I, das traditionelle Zeichen für den Imaginärteil einer komplexen Zahl.",
    usage: "Konturintegration und Spektraltheorie verwenden \\Im, um Größen aufzuspalten: Der Imaginärteil einer Greenschen Funktion liefert die Zustandsdichte, und \\Im \\tau > 0 definiert die obere Halbebene der Modulformen. Wie bei \\Re gibt der Befehl nur ein Symbol aus, Sie sollten also Klammern setzen. Viele Leser finden die Frakturbuchstaben schwer lesbar, und eine Umdefinition mit \\renewcommand{\\Im}{\\operatorname{Im}} wechselt zu einem aufrechten „Im“. Verwendet Ihr Text auch das Bild eines Homomorphismus, schreiben Sie dieses als \\operatorname{im} in Kleinbuchstaben, um beides auseinanderzuhalten.",
  },
  "calligraphic-o": {
    name: "Kalligraphisches O",
    meaning: "Kalligraphisches O, verwendet für das System der offenen Mengen in der Topologie und für mehrere andere Strukturen.",
    usage: "Ein topologischer Raum wird oft als (X, \\mathcal{O}) geschrieben, wobei \\mathcal{O} das System der offenen Mengen ist, auch wenn \\tau ebenso üblich ist. Derselbe Buchstabe hat viele weitere Aufgaben: die Landau-Notation \\mathcal{O}(n \\log n), die Strukturgarbe \\mathcal{O}_X in der algebraischen Geometrie und den Ganzheitsring \\mathcal{O}_K eines Zahlkörpers. \\mathcal unterstützt in den Standardschriften nur Großbuchstaben. Für die Landau-Notation bevorzugen viele Stilrichtlinien ein schlichtes kursives O; entscheiden Sie sich für eine Form und verwenden Sie sie überall.",
  },
  "interior": {
    name: "Inneres",
    meaning: "Inneres von A, die Vereinigung aller in A enthaltenen offenen Mengen; geschrieben mit einem kleinen hochgestellten Kreis.",
    usage: "Das Innere ist die größte offene Teilmenge von A und hängt über \\partial A = \\overline{A} \\setminus A^{\\circ} mit dem Abschluss zusammen. Das hochgestellte \\circ ist der hochgesetzte Verkettungskringel und darf nicht mit einem Gradzeichen bei Einheiten verwechselt werden. Andere gängige Schreibweisen sind \\operatorname{int} A und \\mathring{A}, wobei Letzteres den Kringel direkt über den Buchstaben setzt; \\mathring eignet sich besser für einzelne Buchstaben mit Index wie U_1. Für ein abgeschlossenes Intervall gilt [a, b]^{\\circ} = (a, b).",
  },
  "exterior": {
    name: "Äußeres",
    meaning: "Äußeres einer Menge A: das Innere ihres Komplements, also die Punkte mit einer Umgebung, die A nicht trifft.",
    usage: "Jeder Raum zerfällt in drei disjunkte Teile, das Innere, den Rand und das Äußere von A, und es gilt \\text{ext}(A) = (X \\setminus A)^{\\circ}. Tippt man ext im Mathematikmodus ohne Umhüllung, erhält man kursive Buchstaben e, x, t, die miteinander multipliziert werden, eine Umhüllung ist also nötig. \\text übernimmt die umgebende Schrift und wird in einem Satz daher kursiv; \\operatorname{ext} bleibt aufrecht und liefert Operatorabstände, und \\DeclareMathOperator{\\ext}{ext} macht es wiederverwendbar. Beachten Sie, dass ext auch für die äußere Algebra und für Ext-Gruppen in der homologischen Algebra steht.",
  },
  "boundary-operator": {
    name: "Randoperator",
    meaning: "Rand von A: die Punkte, deren sämtliche Umgebungen sowohl A als auch sein Komplement treffen.",
    usage: "Der Rand einer Kreisscheibe ist ihre Kreislinie, und der Rand der rationalen Zahlen in den reellen Zahlen ist alles, \\partial \\mathbb{Q} = \\mathbb{R}. Dasselbe Symbol \\partial ist in der algebraischen Topologie der Randoperator, \\partial_n : C_n \\to C_{n-1} mit \\partial \\circ \\partial = 0, und erscheint im Satz von Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Manche Texte schreiben stattdessen \\operatorname{Fr} A oder \\operatorname{bd} A. Da \\partial ein gewöhnliches Symbol ist, trennt nichts es vom Mengennamen; dieses enge Schriftbild ist die beabsichtigte Konvention.",
  },
  "direct-limit": {
    name: "Direkter Limes",
    meaning: "Direkter Limes (Kolimes) eines gerichteten Systems, gesetzt als „lim“ mit einem nach rechts zeigenden Pfeil darunter.",
    usage: "Direkte Limites konstruieren Objekte wie \\mathbb{Q} als \\varinjlim \\frac{1}{n}\\mathbb{Z} oder den Halm einer Garbe, \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U). In abgesetzten Formeln steht die Indexmenge unter dem Pfeil, im Fließtext daneben. Das amsmath-Paket bietet auch \\injlim, das „inj lim“ in Worten ausgibt; wählen Sie die in Ihrem Fachgebiet übliche Form. Kategorientheoretiker schreiben oft \\operatorname*{colim}, da direkte Limites ein Spezialfall von Kolimites sind. Das Gegenstück für inverse Systeme ist \\varprojlim.",
  },
  "inverse-limit": {
    name: "Inverser Limes",
    meaning: "Inverser (projektiver) Limes eines Systems, dargestellt als „lim“ mit einem nach links zeigenden Pfeil darunter.",
    usage: "Die p-adischen ganzen Zahlen sind das klassische Beispiel, \\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}, und proendliche Gruppen wie Galoisgruppen sind inverse Limites endlicher Gruppen. Wie bei \\lim steht der Index in abgesetzten Formeln darunter. Die Alternative \\projlim gibt die Wörter „proj lim“ ohne Pfeil aus. Die Kategorientheorie verallgemeinert dies zu einem beliebigen Limes, meist als \\lim geschrieben. Achten Sie auf die Pfeilrichtung: \\varprojlim hat den Pfeil nach links und entspricht Abbildungen, die im System abwärts laufen, \\varinjlim den Pfeil nach rechts.",
  },
  "quotient": {
    name: "Quotient",
    meaning: "Quotient von A nach B: eine Gruppe, ein Ring, ein Modul oder ein Raum, in dem B zusammengeschlagen oder herausfaktorisiert ist.",
    usage: "Quotienten erscheinen als \\mathbb{Z}/n\\mathbb{Z}, als G/H für Nebenklassen und als X/A, wenn ein Teilraum zu einem Punkt zusammengeschlagen wird. Im Mathematikmodus ist / ein gewöhnliches Symbol ohne umgebenden Abstand, was dem üblichen Schriftbild entspricht. Bei einem Quotienten nach einer Äquivalenzrelation setzen Sie die Tilde in geschweifte Klammern, X/{\\sim}, sonst erhält \\sim Relationsabstände und hinterlässt eine Lücke. Bei hohen Operanden halten \\big/ oder Konstruktionen mit \\left. \\middle/ \\right. den Schrägstrich in der richtigen Größe. Verwenden Sie hier nicht \\setminus; das ist die Mengendifferenz, eine andere Operation. Geben Sie an, welche Struktur der Quotient trägt, denn G/H ist nur dann eine Gruppe, wenn H ein Normalteiler ist.",
  },
  "fundamental-group": {
    name: "Fundamentalgruppe",
    meaning: "Fundamentalgruppe eines Raums: Homotopieklassen von Schleifen an einem Basispunkt, mit dem Hintereinanderdurchlaufen als Produkt.",
    usage: "Die Standardberechnung \\pi_1(S^1) \\cong \\mathbb{Z} zählt, wie oft eine Schleife um die Kreislinie läuft, und ein Raum mit trivialem \\pi_1 heißt einfach zusammenhängend. Schreiben Sie den Basispunkt ausdrücklich, \\pi_1(X, x_0), wenn es darauf ankommt; bei wegzusammenhängenden Räumen wird er oft weggelassen. Höhere Homotopiegruppen folgen demselben Muster, \\pi_n(X). Verwenden Sie für Isomorphie \\cong statt =. Bezeichnet \\pi im selben Dokument auch die Kreiszahl oder eine Projektion, überlegen Sie, ob Leser die Bedeutungen verwechseln könnten.",
  },
  "homology": {
    name: "Homologie",
    meaning: "n-te Homologiegruppe eines Raums oder Kettenkomplexes, die n-dimensionale Löcher misst.",
    usage: "Für Sphären gilt H_n(S^n) \\cong \\mathbb{Z}, während H_k(S^n) = 0 für 0 < k < n ist, und die Euler-Charakteristik ist die alternierende Summe der Ränge der H_n. Koeffizienten stehen nach einem Semikolon, H_n(X; \\mathbb{Z}/2), relative Homologie schreibt man H_n(X, A). Untere Indizes kennzeichnen Homologie, obere Kohomologie, halten Sie das also sauber auseinander. Varianten werden durch Verzierungen markiert: reduzierte Homologie \\tilde{H}_n, singuläre Homologie H_n^{\\mathrm{sing}}. In der homologischen Algebra ist sie als \\ker \\partial_n / \\operatorname{im} \\partial_{n+1} definiert. Lange exakte Sequenzen dieser Gruppen werden meist als kommutative Diagramme gezeichnet.",
  },
  "cohomology": {
    name: "Kohomologie",
    meaning: "n-te Kohomologiegruppe, die duale Theorie zur Homologie, die über das Cup-Produkt eine Ringstruktur trägt.",
    usage: "Die De-Rham-Kohomologie H^n_{\\mathrm{dR}}(M) klassifiziert geschlossene Differentialformen modulo exakter, und das Cup-Produkt \\smile macht H^\\ast(X) zu einem graduierten Ring. Die Kombination aus oberem und unterem Index, wie in H^n_{\\mathrm{dR}}, wird sauber übereinandergesetzt; verwenden Sie \\mathrm für Bezeichnungen, die Wörter und keine Variablen sind. Der obere Index unterscheidet sie von der Homologie H_n, eine Konvention, die Sie respektieren sollten. Gruppenkohomologie H^n(G, M) und Garbenkohomologie H^n(X, \\mathcal{F}) verwenden dasselbe Symbol mit anderen Argumenten. Die Poincaré-Dualität verbindet H^k und H_{n-k} auf geschlossenen orientierten n-Mannigfaltigkeiten, was erklärt, warum beide Schreibweisen oft gemeinsam auftreten.",
  },
  "calligraphic-c-category": {
    name: "Kalligraphisches C (Kategorie)",
    meaning: "Kalligraphisches C, der übliche Name für eine beliebige Kategorie; auch für Nebenbedingungs- oder zulässige Mengen verwendet.",
    usage: "Die Kategorientheorie schreibt Objekte als X \\in \\mathcal{C} und Morphismenmengen als \\operatorname{Hom}_{\\mathcal{C}}(X, Y), wobei eine zweite Kategorie meist \\mathcal{D} heißt. Konkrete Kategorien werden oft fett oder serifenlos gesetzt, etwa \\mathbf{Set} oder \\mathsf{Grp}, um Namen von Variablen zu unterscheiden. Die Optimierung verwendet \\mathcal{C} für eine konvexe zulässige Menge, wie in \\min_{x \\in \\mathcal{C}} f(x). \\mathcal liefert in den Standardschriften nur Großbuchstaben; \\mathscr bietet einen geschwungeneren Schreibschriftstil, falls Sie eine zweite Familie brauchen.",
  },
  "calligraphic-f-functor": {
    name: "Kalligraphisches F (Funktor)",
    meaning: "Kalligraphisches F, häufig der Name eines Funktors zwischen Kategorien, einer Garbe, einer σ-Algebra oder einer Transformation.",
    usage: "Ein Funktor \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} bildet Objekte und Morphismen ab und erhält dabei die Verkettung. Außerhalb der Kategorientheorie ist derselbe Buchstabe eine Garbe \\mathcal{F}(U), eine σ-Algebra oder Filtration (\\mathcal{F}_t in der Wahrscheinlichkeitstheorie) oder die Fourier-Transformation \\mathcal{F}\\{f\\}. Wegen dieser Mehrfachbelegung sollten Sie den Buchstaben ausdrücklich einführen. Verwenden Sie \\colon statt :, wenn Sie die Signatur des Funktors schreiben, um Interpunktionsabstände zu erhalten. Viele Autoren reservieren schlichte kursive F, G für Funktoren und kalligraphische Buchstaben für Garben. Eine natürliche Transformation zwischen zwei Funktoren schreibt man oft als \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}.",
  },
};

export default text;
