import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/graph-theory/<slug>. */
const text: SymbolPageTranslations = {
  "vertex": {
    name: "Knoten",
    meaning: "Kleines kursives v, der übliche Buchstabe für einen einzelnen Knoten eines Graphen.",
    usage: "Knoten werden mit Kleinbuchstaben wie u, v, w bezeichnet, die Zugehörigkeit schreibt man v \\in V(G). Der Grad eines Knotens ist \\deg(v), seine Nachbarschaft N(v), und eine Kante zwischen zwei Knoten wird oft als uv oder \\{u, v\\} geschrieben. Da es sich um einen einfachen Buchstaben handelt, kommt es vor allem auf Einheitlichkeit an: Verwenden Sie v im selben Text nicht zusätzlich für einen Vektor oder eine Geschwindigkeit. Eine Indizierung, v_1, \\dots, v_n, liefert eine Reihenfolge, die für Adjazenzmatrizen nützlich ist. Tragen Knoten Beschriftungen oder Gewichte, halten Funktionen wie w(v) die Notation übersichtlich.",
  },
  "edge": {
    name: "Kante",
    meaning: "Kleines kursives e, der übliche Buchstabe für eine einzelne Kante eines Graphen.",
    usage: "Eine Kante e = uv oder e = \\{u, v\\} verbindet zwei Knoten; in gerichteten Graphen schreibt man einen Bogen als e = (u, v), wobei die Reihenfolge zählt. Die Zugehörigkeit ist e \\in E(G), Kantengewichte sind w(e). Da e auch die Eulersche Zahl bezeichnet, setzen manche Autoren diese Konstante aufrecht als \\mathrm{e}, um Verwechslungen zu vermeiden, wenn Graphen und Exponentialfunktionen gemeinsam auftreten, etwa in probabilistischen Argumenten. Indizierte Kanten e_1, \\dots, e_m nummerieren die Spalten einer Inzidenzmatrix. Die Endpunkte von e werden manchmal als e^- und e^+ für Anfangs- und Endknoten geschrieben.",
  },
  "graph": {
    name: "Graph",
    meaning: "Definition eines Graphen G als geordnetes Paar aus einer Knotenmenge V und einer Kantenmenge E.",
    usage: "Mit dieser Zeile beginnen die meisten graphentheoretischen Argumente; sie legt V als Knotenmenge und E \\subseteq \\binom{V}{2} als Kantenmenge eines einfachen Graphen fest, bzw. E \\subseteq V \\times V für einen gerichteten. Übliche Abkürzungen: n = |V| und m = |E|. Gewichtete Graphen erweitern das zu G = (V, E, w). Verwenden Sie für das geordnete Paar runde Klammern, keine spitzen. In längeren Arbeiten schreiben Sie V(G) und E(G), wenn mehrere Graphen im Spiel sind. Das kalligrafische \\mathcal{G} ist manchmal für eine Familie von Graphen oder ein grafisches Modell reserviert.",
  },
  "vertex-set": {
    name: "Knotenmenge",
    meaning: "Knotenmenge des Graphen G, als Funktion von G geschrieben, wenn mehrere Graphen behandelt werden.",
    usage: "V(G) macht deutlich, zu welchem Graphen eine Knotenmenge gehört; das ist wichtig beim Vergleich eines Graphen mit einem Teilgraphen H, wobei V(H) \\subseteq V(G) gilt. Die Ordnung des Graphen ist |V(G)|, oft als n oder |G| abgekürzt. Für Komplemente und Kantengraphen gilt V(\\overline{G}) = V(G), während V(L(G)) = E(G). Ein einfaches kursives V ist üblich; ein besonderer Befehl ist nicht nötig. Schreiben Sie Mengendefinitionen mit den Klammern \\{ \\} und verwenden Sie \\mid oder einen Doppelpunkt für die Bedingung. Eine Summe über alle Knoten lautet \\sum_{v \\in V(G)}.",
  },
  "edge-set": {
    name: "Kantenmenge",
    meaning: "Kantenmenge des Graphen G, die Menge aller durch eine Kante verbundenen Knotenpaare.",
    usage: "E(G) wird ausdrücklich geschrieben, wenn mehr als ein Graph betrachtet wird; ihre Mächtigkeit |E(G)|, in manchen Texten auch e(G) oder \\|G\\|, ist die Größe des Graphen. Das Handschlaglemma verknüpft sie mit den Graden: \\sum_v \\deg(v) = 2|E(G)|. Ein einfacher Graph erfüllt |E(G)| \\leq \\binom{n}{2}, und ein Baum hat genau n - 1 Kanten. Beachten Sie, dass E stark überladen ist, insbesondere mit dem Erwartungswert in der probabilistischen Kombinatorik; ein Doppelstrich-\\mathbb{E} für den Erwartungswert hält beides auseinander.",
  },
  "adjacency": {
    name: "Adjazenz",
    meaning: "Adjazenzrelation: u und v sind im Graphen durch eine Kante verbunden.",
    usage: "\\sim ist eine binäre Relation, daher setzt TeX ausgewogene breite Abstände darum, sodass u \\sim v korrekt gelesen wird. Um den Graphen anzugeben, schreiben Sie u \\sim_G v. Manche Autoren verwenden stattdessen u \\leftrightarrow v oder uv \\in E(G). Nichtadjazenz schreibt man u \\nsim v. Verwechseln Sie \\sim nicht mit \\simeq (asymptotische Äquivalenz oder Homotopieäquivalenz), \\approx (ungefähr gleich) oder \\backsim (umgekehrte Tilde). In der Wahrscheinlichkeitstheorie bedeutet x \\sim p „gezogen aus“, definieren Sie Adjazenz in interdisziplinären Arbeiten daher ausdrücklich. Nachbarschaften ergeben sich dann natürlich: N(v) = \\{u : u \\sim v\\}.",
  },
  "degree": {
    name: "Knotengrad",
    meaning: "Grad des Knotens v: die Anzahl der mit ihm inzidenten Kanten, wobei Schleifen doppelt zählen.",
    usage: "\\deg ist einer der vordefinierten Operatornamen von LaTeX und wird daher aufrecht mit korrekten Abständen gesetzt, anders als getipptes deg, das drei kursive Buchstaben ergibt. Das Handschlaglemma besagt \\sum_v \\deg(v) = 2|E|, und viele Autoren kürzen zu d(v) oder d_G(v) ab. Minimal- und Maximalgrad schreibt man \\delta(G) und \\Delta(G). Für einen indizierten Graphen funktioniert \\deg_G(v) ganz natürlich. Derselbe Befehl setzt in der Algebra auch den Grad eines Polynoms, \\deg(p). Ein regulärer Graph hat \\deg(v) = k für jeden Knoten.",
  },
  "in-degree": {
    name: "Eingangsgrad",
    meaning: "Eingangsgrad des Knotens v in einem gerichteten Graphen: die Anzahl der Bögen, die in v enden.",
    usage: "In gerichteten Graphen trägt jeder Bogen eins zum Ausgangsgrad seines Anfangsknotens und eins zum Eingangsgrad seines Endknotens bei, also gilt \\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|. Eine Quelle hat \\deg^-(v) = 0. Das hochgestellte Minus ist die verbreitetste Konvention, manche Texte schreiben jedoch d^-(v), \\deg_{\\text{in}}(v) oder \\mathrm{indeg}(v). Setzen Sie den Exponenten in Klammern, ^{-}, damit er eindeutig zugeordnet ist. Im Kontext von PageRank und Markow-Ketten hängt der Eingangsgrad damit zusammen, wie viele Seiten auf einen Knoten verlinken. Topologisches Sortieren mit dem Algorithmus von Kahn entfernt wiederholt Knoten mit Eingangsgrad null.",
  },
  "out-degree": {
    name: "Ausgangsgrad",
    meaning: "Ausgangsgrad des Knotens v in einem gerichteten Graphen: die Anzahl der Bögen, die v verlassen.",
    usage: "Der Ausgangsgrad zählt die Bögen mit Anfangsknoten v; eine Senke hat \\deg^+(v) = 0. Über alle Knoten summiert ergibt er |E|, genau wie der gesamte Eingangsgrad. Ein hochgestelltes Plus ist üblich, Alternativen sind d^+(v) und \\deg_{\\text{out}}(v), definieren Sie Ihre Notation also. Ein gerichteter Graph besitzt genau dann einen Eulerkreis, wenn er zusammenhängend ist (isolierte Knoten ausgenommen) und an jedem Knoten \\deg^+(v) = \\deg^-(v) gilt. In der Adjazenzmatrix ist der Ausgangsgrad eine Zeilensumme und der Eingangsgrad eine Spaltensumme. Setzen Sie den Exponenten zur Klarheit im Quelltext in Klammern, ^{+}.",
  },
  "path": {
    name: "Weg",
    meaning: "Weggraph mit n Knoten: n Knoten, die durch n - 1 Kanten in einer Linie verbunden sind.",
    usage: "P_n ist neben C_n und K_n eine grundlegende Familie der Graphentheorie. Die Konventionen unterscheiden sich, was tatsächlich für Verwirrung sorgt: Viele Texte lassen n die Knoten zählen, während andere, darunter Diestel, P^k für einen Weg mit k Kanten schreiben. Geben Sie Ihre Konvention an. Wege haben für n \\geq 2 die chromatische Zahl 2 und sind Bäume. Beim Abzählen unterscheidet sich die Anzahl der Wege von der der Kantenfolgen, da sich Knoten nicht wiederholen dürfen. Der Index ist ein einfacher Index; für längere Indizes verwenden Sie geschweifte Klammern, P_{n+1}. Nicht zu verwechseln mit P(n, k), den Permutationen.",
    example: "P_n \\text{ hat } n \\text{ Knoten und } n - 1 \\text{ Kanten}",
  },
  "cycle": {
    name: "Kreis",
    meaning: "Kreisgraph mit n Knoten (n mindestens 3), der eine einzige geschlossene Schleife bildet; in der Kombinatorik auch die n-te Catalan-Zahl.",
    usage: "In der Graphentheorie ist C_n der Kreis mit n Knoten und n Kanten; er ist genau dann bipartit, wenn n gerade ist, also gilt \\chi(C_n) = 2 für gerades n und 3 für ungerades n. In der Kombinatorik bezeichnet dieselbe Notation häufig die Catalan-Zahl C_n = \\frac{1}{n+1}\\binom{2n}{n}, die korrekte Klammerungen, Binärbäume und Dyck-Pfade zählt: 1, 1, 2, 5, 14, 42. Da sich beide Gebiete diese Seite teilen, sagen Sie früh, welche Bedeutung Sie meinen. Für zusammengesetzte Indizes sind geschweifte Klammern nötig, C_{2k+1}.",
  },
  "complete-graph": {
    name: "Vollständiger Graph",
    meaning: "Vollständiger Graph mit n Knoten, in dem jedes Paar verschiedener Knoten durch eine Kante verbunden ist.",
    usage: "K_n hat \\binom{n}{2} = n(n-1)/2 Kanten und die chromatische Zahl n. Der Buchstabe ehrt Kuratowski, dessen Satz besagt, dass ein Graph genau dann planar ist, wenn er keine Unterteilung von K_5 oder K_{3,3} enthält. Ramsey-Zahlen werden mit vollständigen Graphen formuliert: R(3,3) = 6 bedeutet, dass jede 2-Färbung der Kanten von K_6 ein einfarbiges Dreieck enthält. Die Formel von Cayley zählt n^{n-2} Spannbäume von K_n. Verwenden Sie geschweifte Klammern für mehrstellige Indizes wie K_{n+1}. Eine Clique der Größe k in G ist ein zu K_k isomorpher Teilgraph.",
  },
  "bipartite": {
    name: "Vollständig bipartiter Graph",
    meaning: "Vollständig bipartiter Graph: zwei Teile der Größen m und n, wobei jeder Knoten des einen Teils mit jedem Knoten des anderen verbunden ist.",
    usage: "K_{m,n} hat m + n Knoten und mn Kanten, und K_{1,n} ist der Sterngraph. K_{3,3}, der Versorgungsgraph, ist einer der beiden verbotenen Teilgraphen von Kuratowski für Planarität. Beachten Sie, dass das Komma innerhalb der Klammern steht: K_{m,n}; K_m,n setzt n auf die Grundlinie. TeX fügt nach dem Komma im Index etwas Abstand ein, was gut aussieht; für ein engeres Schriftbild schreiben manche K_{m\\,n} ohne Komma, doch das ist selten. Das Zarankiewicz-Problem fragt, wie viele Kanten ein Graph haben kann, ohne eine Kopie von K_{s,t} zu enthalten.",
    example: "|E(K_{m,n})| = mn, \\quad K_{3,3} \\text{ ist nicht planar}",
  },
  "adjacency-matrix": {
    name: "Adjazenzmatrix",
    meaning: "Eintrag in Zeile i, Spalte j der Adjazenzmatrix: 1, wenn die Knoten i und j adjazent sind, sonst 0.",
    usage: "Für einen einfachen ungerichteten Graphen ist die Adjazenzmatrix symmetrisch mit Nullen auf der Diagonale; in gewichteten Graphen enthält A_{ij} das Kantengewicht. Eine klassische Tatsache: (A^k)_{ij} zählt die Kantenfolgen der Länge k von i nach j, daher ist \\operatorname{tr}(A^3)/6 die Anzahl der Dreiecke. Grade sind Zeilensummen, \\deg(i) = \\sum_j A_{ij}, und die Laplace-Matrix ist L = D - A. Schreiben Sie A_{ij} mit geschweiften Klammern; A_ij würde nur das i tiefstellen. Mit Komma ist A_{i,j} klarer, wenn die Indizes Ausdrücke sind, wie bei A_{i+1,j}.",
    example: "(A^k)_{ij} = \\#\\{\\text{Kantenfolgen von } i \\text{ nach } j \\text{ mit } k \\text{ Kanten}\\}",
  },
  "incidence-matrix": {
    name: "Inzidenzmatrix",
    meaning: "Großes B, üblicherweise die Inzidenzmatrix eines Graphen, mit Zeilen für Knoten und Spalten für Kanten.",
    usage: "Für einen ungerichteten Graphen ist B_{ve} = 1, wenn der Knoten v ein Endpunkt der Kante e ist. Für einen gerichteten oder beliebig orientierten Graphen sind die Einträge -1 am Anfangs- und +1 am Endknoten (oder umgekehrt, je nach Autor), und dann gilt BB^\\top = L = D - A, die Laplace-Matrix des Graphen. Manche Bücher nennen die Matrix M oder N statt B. Sie ist eine n \\times m-Matrix, geben Sie die Dimensionen also an. Für eine nicht orientierte Inzidenzmatrix gilt BB^\\top = D + A, die vorzeichenlose Laplace-Matrix, eine häufige Quelle von Vorzeichenfehlern.",
  },
  "connected": {
    name: "Zusammenhang",
    meaning: "Zusammenhangsrelation: Zwischen den Knoten u und v gibt es einen Weg, sie liegen also in derselben Zusammenhangskomponente.",
    usage: "\\leftrightarrow ist ein Pfeil der Relationsklasse und erhält daher symmetrische Abstände. In der Graphentheorie bedeutet u \\leftrightarrow v oft, dass u und v verbunden sind, bei Markow-Ketten dagegen, dass zwei Zustände kommunizieren. Gerichtete Graphen erfordern Sorgfalt: Gegenseitige Erreichbarkeit ist die Relation des starken Zusammenhangs, manchmal als u \\rightleftarrows v geschrieben. Verwechseln Sie \\leftrightarrow nicht mit dem längeren \\longleftrightarrow oder dem Doppelpfeil \\Leftrightarrow, der logische Äquivalenz bedeutet. Manche Autoren schreiben u \\sim v für Adjazenz und reservieren \\leftrightarrow für Zusammenhang, was sauber ist, wenn es angegeben wird. Es ist eine Äquivalenzrelation, deren Klassen die Komponenten sind.",
    example: "u \\leftrightarrow v \\iff \\exists \\text{ ein } u\\text{-}v\\text{-Weg in } G",
  },
  "tree": {
    name: "Baum",
    meaning: "Großes T, der übliche Buchstabe für einen Baum: einen zusammenhängenden Graphen ohne Kreise.",
    usage: "Ein Baum mit n Knoten hat genau n - 1 Kanten, zwischen je zwei Knoten einen eindeutigen Weg und für n \\geq 2 mindestens zwei Blätter. Spannbäume schreibt man T \\subseteq G, und die Formel von Cayley besagt, dass K_n genau n^{n-2} beschriftete Spannbäume hat. Algorithmen für minimale Spannbäume wie die von Kruskal und Prim minimieren w(T) = \\sum_{e \\in T} w(e). Ein einfaches kursives T genügt; achten Sie auf Konflikte mit dem Transpositionsexponenten oder der Zeit und verwenden Sie in Dokumenten, die auch Bäume behandeln, besser ^\\top für Transponierte. Gewurzelte Bäume schreibt man oft (T, r).",
  },
  "forest": {
    name: "Wald",
    meaning: "Großes F, üblicherweise für einen Wald: einen kreisfreien Graphen, dessen Komponenten Bäume sind.",
    usage: "Ein Wald mit n Knoten und k Zusammenhangskomponenten hat n - k Kanten, eine Verallgemeinerung der Baumformel. Aufspannende Wälder treten im Algorithmus von Kruskal auf, der einen Wald wachsen lässt, indem er die günstigste Kante ohne Kreisbildung hinzufügt, sowie in der Matroidsicht auf Graphen, in der die Wälder die unabhängigen Mengen des graphischen Matroids sind. Als einfacher Buchstabe braucht F keinen Befehl, kollidiert aber mit den Flächen planarer Graphen (Eulers V - E + F = 2) und mit Fibonacci-Zahlen, wechseln Sie also den Buchstaben, wenn beides vorkommt. Die Arborizität eines Graphen zählt die Wälder, die nötig sind, um seine Kanten zu überdecken.",
  },
  "chromatic-number": {
    name: "Chromatische Zahl",
    meaning: "Chromatische Zahl von G: die kleinste Anzahl an Farben, mit der sich die Knoten so färben lassen, dass benachbarte Knoten verschiedene Farben haben.",
    usage: "Gesetzt mit dem griechischen \\chi erfüllt die chromatische Zahl \\omega(G) \\leq \\chi(G) \\leq \\Delta(G) + 1, und der Satz von Brooks senkt die obere Schranke auf \\Delta(G), außer bei vollständigen Graphen und ungeraden Kreisen. Der Vierfarbensatz besagt \\chi(G) \\leq 4 für planare Graphen. Die Kantenversion ist der chromatische Index \\chi'(G). Verwechseln Sie \\chi nicht mit dem lateinischen x, das in manchen Schriften ähnlich aussieht, oder mit der Euler-Charakteristik, die ebenfalls \\chi verwendet. Die Berechnung von \\chi(G) ist NP-schwer, daher geben viele Arbeiten Schranken statt exakter Werte an.",
  },
  "clique": {
    name: "Cliquenzahl",
    meaning: "Cliquenzahl von G: die Größe des größten vollständigen Teilgraphen, der im Graphen enthalten ist.",
    usage: "Die Cliquenzahl ist eine untere Schranke für die chromatische Zahl, \\omega(G) \\leq \\chi(G), und Graphen, bei denen für jeden induzierten Teilgraphen Gleichheit gilt, heißen perfekt. Sie ergänzt die Unabhängigkeitszahl: \\omega(G) = \\alpha(\\overline{G}), wobei \\overline{G} das Komplement ist. Ihre Bestimmung ist NP-schwer. Verwenden Sie das kleine griechische \\omega, nicht w. Das Symbol ist anderswo überladen: die Klein-Omega-Notation der Asymptotik und \\omega(n), die Anzahl verschiedener Primfaktoren, eine kurze Definition hilft also in gemischten Kontexten. Der Satz von Turán beschränkt die Kantenzahl eines Graphen mit \\omega(G) \\leq r.",
  },
  "independent-set": {
    name: "Unabhängigkeitszahl",
    meaning: "Unabhängigkeitszahl von G: die Größe der größten Menge paarweise nicht adjazenter Knoten.",
    usage: "Die Unabhängigkeitszahl erfüllt \\alpha(G) \\cdot \\chi(G) \\geq |V(G)|, da jede Farbklasse eine unabhängige Menge ist, und \\alpha(G) = \\omega(\\overline{G}). Die Identität von Gallai verknüpft sie mit der Knotenüberdeckungszahl: \\alpha(G) + \\tau(G) = |V(G)|. Ihre Berechnung ist im Allgemeinen NP-schwer, auf bipartiten Graphen aber mit dem Satz von Kőnig einfach. Verwenden Sie den griechischen Buchstaben \\alpha, der sich in den meisten Schriften deutlich von a unterscheidet. Kantenanaloga sind \\alpha'(G) oder \\nu(G), die Matchingzahl. Die Schranke von Caro und Wei liefert \\alpha(G) \\geq \\sum_v 1/(\\deg(v)+1).",
  },
  "matching": {
    name: "Matching",
    meaning: "Großes M, der übliche Buchstabe für ein Matching: eine Menge von Kanten, von denen keine zwei einen Knoten gemeinsam haben.",
    usage: "Ein Matching M \\subseteq E(G) heißt perfekt, wenn es jeden Knoten überdeckt, also |M| = |V(G)|/2, und maximal, wenn es kein größeres gibt; seine Größe ist die Matchingzahl \\nu(G). Der Heiratssatz von Hall gibt die Bedingung für ein perfektes Matching in bipartiten Graphen an: |N(S)| \\geq |S| für jede Teilmenge S einer Seite. Zu den Algorithmen gehören Hopcroft-Karp für bipartite Graphen und der Blüten-Algorithmus von Edmonds im allgemeinen Fall. Augmentierende Wege werden oft relativ zu M angegeben, und die symmetrische Differenz M \\triangle M' kommt in vielen Beweisen vor. Vermeiden Sie M, wenn auch eine Matrix einen Namen braucht.",
    example: "M \\subseteq E(G), \\quad |M| = |V(G)|/2 \\text{ falls } M \\text{ perfekt ist}",
  },
  "planar-graph": {
    name: "Planarer Graph",
    meaning: "Einbettung eines Graphen G in die Ebene, bei der sich Kanten nur in gemeinsamen Endpunkten treffen; G ist dann planar.",
    usage: "Der Hakenpfeil \\hookrightarrow kennzeichnet üblicherweise eine Injektion oder Einbettung, G \\hookrightarrow \\mathbb{R}^2 besagt also, dass G ohne Kreuzungen in der Ebene gezeichnet werden kann. Zusammenhängende planare Graphen erfüllen die Eulersche Polyederformel V - E + F = 2, und einfache planare Graphen mit mindestens drei Knoten haben höchstens 3V - 6 Kanten. Die Sätze von Kuratowski und Wagner charakterisieren sie durch das Verbot von K_5 und K_{3,3}. \\hookrightarrow ist ein Pfeil mit Relationsabständen; die Umkehrung ist \\hookleftarrow. Eine Einbettung in die Kugeloberfläche ist gleichwertig, und andere Flächen schreibt man G \\hookrightarrow S_g.",
  },
};

export default text;
