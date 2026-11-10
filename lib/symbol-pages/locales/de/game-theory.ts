import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/game-theory/<slug>. */
const text: SymbolPageTranslations = {
  "strategy": {
    name: "Strategie",
    meaning: "Strategie von Spieler i: ein vollständiger Handlungsplan, gewählt aus der Strategiemenge S_i dieses Spielers.",
    usage: "In einem Spiel in Normalform wählt jeder Spieler ein s_i \\in S_i, und die gemeinsame Wahl ist ein Profil s = (s_i, s_{-i}), wobei s_{-i} die Strategien aller anderen zusammenfasst. In Spielen in extensiver Form legt eine reine Strategie an jeder Informationsmenge eine Aktion fest, auch an solchen, die nie erreicht werden. Der Index bezeichnet den Spieler, verwenden Sie daher Hochstellungen oder Striche, s_i', s_i^*, für alternative Strategien desselben Spielers. Schreiben Sie s_{-i} mit geschweiften Klammern, da s_-i nur das Minuszeichen tiefstellt.",
  },
  "strategy-set": {
    name: "Strategiemenge",
    meaning: "Strategiemenge von Spieler i: alle reinen Strategien, die diesem Spieler zur Verfügung stehen.",
    usage: "Der Raum aller Profile ist das kartesische Produkt S = S_1 \\times \\cdots \\times S_n = \\prod_i S_i, und S_{-i} = \\prod_{j \\ne i} S_j. Endliche S_i ergeben Matrixspiele; kompakte konvexe Teilmengen des \\mathbb{R}^k treten im Cournot-Wettbewerb und anderen stetigen Spielen auf. Gemischte Strategien liegen in \\Delta(S_i). Schreiben Sie Strategiemengen groß und Strategien klein. In kooperativen Spielen bezeichnet S oft stattdessen eine Koalition, vermischen Sie also nicht beide Verwendungen in einer Arbeit.",
  },
  "strategy-profile": {
    name: "Strategieprofil",
    meaning: "Strategieprofil: eine Liste mit genau einer Strategie für jeden der n Spieler des Spiels.",
    usage: "Auszahlungen werden an vollständigen Profilen ausgewertet, u_i(s), und bei der Analyse von Abweichungen zerlegt man ein Profil in (s_i, s_{-i}). \\ldots setzt die Punkte auf die Grundlinie, richtig zwischen Kommas; \\cdots zentriert sie, passend für Summen wie s_1 + \\cdots + s_n. Mit amsmath wählt ein einfaches \\dots automatisch je nach Kontext. Manche Texte schreiben Profile fett, \\mathbf{s}, um sie von der Strategie s_i eines einzelnen Spielers zu unterscheiden. Das Profil, in dem i zu s_i' wechselt, während alle anderen ihre Strategie beibehalten, schreibt man (s_i', s_{-i}). Die Reihenfolge der Spieler legt das Tupel fest, geben Sie sie daher einmal an.",
  },
  "payoff-function": {
    name: "Auszahlungsfunktion",
    meaning: "Auszahlungs- bzw. Nutzenfunktion von Spieler i, die jedem Strategieprofil s eine reelle Zahl zuordnet.",
    usage: "Formal ist u_i: S \\to \\mathbb{R}, und ein Spiel in Normalform ist das Tripel (N, (S_i), (u_i)). Gemischte Strategien erweitern sie über den Erwartungswert, u_i(\\sigma) = \\sum_s \\sigma(s)\\, u_i(s). Einseitige Abweichungen schreibt man u_i(s_i', s_{-i}). Manche Fachgebiete verwenden stattdessen \\pi_i oder v_i für Auszahlungen; in kooperativen Spielen bezeichnet v bereits die charakteristische Funktion, dort ist u_i also die sicherere Wahl. Auszahlungen müssen nur Von-Neumann-Morgenstern-Nutzen sein, positive affine Transformationen lassen die Gleichgewichte daher unverändert. Bei zwei Spielern stellt man die Auszahlungen oft als Bimatrix dar.",
  },
  "expected-payoff": {
    name: "Erwartete Auszahlung",
    meaning: "Erwartete Auszahlung von Spieler i, der wahrscheinlichkeitsgewichtete Mittelwert von u_i unter gemischten Strategien oder Zufallszügen.",
    usage: "Bei unabhängigen gemischten Strategien gilt \\mathbb{E}_\\sigma[u_i] = \\sum_{s} \\prod_j \\sigma_j(s_j)\\, u_i(s); diese Größe maximieren die Spieler in einem gemischten Nash-Gleichgewicht. Schreiben Sie die Verteilung als Index, \\mathbb{E}_{s \\sim \\sigma}[u_i(s)], wenn sie nicht offensichtlich ist. Das Doppelstrich-\\mathbb{E} ist ein möglicher Stil; \\operatorname{E} und \\mathrm{E} ergeben ein aufrechtes E und sind in der Ökonometrie verbreitet. Bei hohen Argumenten passen Sie die Klammern mit \\left[ \\right] oder \\bigl[ \\bigr] an. Zieht die Natur, wie in Bayesschen Spielen, läuft der Erwartungswert auch über die Typen, \\mathbb{E}_\\theta[u_i(s(\\theta), \\theta)]. Verwenden Sie eckige Klammern für den Erwartungswert und runde für Funktionsargumente.",
  },
  "best-response": {
    name: "Beste Antwort",
    meaning: "Beste-Antwort-Korrespondenz: die Menge der Strategien, die die Auszahlung von Spieler i gegen die Strategien s_{-i} der anderen maximieren.",
    usage: "Sie ist definiert als BR_i(s_{-i}) = \\arg\\max_{s_i \\in S_i} u_i(s_i, s_{-i}), und ein Profil ist genau dann ein Nash-Gleichgewicht, wenn s_i^* \\in BR_i(s^*_{-i}) für alle i gilt. Im Allgemeinen ist sie mengenwertig, weshalb die Existenz gemischter Gleichgewichte mit dem Fixpunktsatz von Kakutani und nicht mit dem von Brouwer bewiesen wird. Als BR_i getippt setzt TeX B und R als zwei miteinander multiplizierte kursive Variablen; schreiben Sie \\mathrm{BR}_i oder \\operatorname{BR}_i für aufrechte Buchstaben. Verwenden Sie \\operatorname*{arg\\,max} für die Maximalstelle. In endlichen Spielen existieren reine beste Antworten immer.",
  },
  "nash-equilibrium": {
    name: "Nash-Gleichgewicht",
    meaning: "Profil eines Nash-Gleichgewichts: Kein Spieler kann sich durch einseitiges Abweichen von seiner Strategie s_i^* verbessern.",
    usage: "Die definierende Bedingung ist u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) für jeden Spieler i und jede Alternative s_i. Nash bewies, dass jedes endliche Spiel ein Gleichgewicht in gemischten Strategien besitzt, geschrieben \\sigma^*. Gleichgewichte müssen weder eindeutig noch effizient sein, wie das Gefangenendilemma zeigt. Der Stern ist hochgestellt, s_1^* und s^*_1 werden also identisch dargestellt; verwenden Sie ^* statt ^\\star, denn Letzteres ist ein fünfzackiger Stern. In einem Bimatrixspiel ist ein reines Gleichgewicht eine Zelle, in der die Auszahlung jedes Spielers bei gegebener Wahl des anderen maximal ist.",
  },
  "mixed-strategy": {
    name: "Gemischte Strategie",
    meaning: "Gemischte Strategie von Spieler i: eine Wahrscheinlichkeitsverteilung über die reinen Strategien dieses Spielers.",
    usage: "Eine gemischte Strategie ist \\sigma_i \\in \\Delta(S_i), wobei \\sigma_i(s_i) die Wahrscheinlichkeit angibt, s_i zu spielen; der Träger einer Gleichgewichtsstrategie enthält nur beste Antworten. Beim Matching Pennies mischt im eindeutigen Gleichgewicht jeder Spieler 1/2-1/2. Spiele in extensiver Form unterscheiden gemischte Strategien von Verhaltensstrategien, die oft b_i oder \\beta_i geschrieben werden. Verwechseln Sie \\sigma_i nicht mit einer Standardabweichung in Arbeiten, die auch Statistik betreiben; \\varsigma ist ein anderes Sigma, die Schlussform, und kein Ersatz. Bei perfektem Erinnerungsvermögen macht der Satz von Kuhn gemischte Strategien und Verhaltensstrategien äquivalent.",
  },
  "probability-simplex": {
    name: "Wahrscheinlichkeitssimplex",
    meaning: "Menge der Wahrscheinlichkeitsverteilungen über S_i, die für eine endliche Menge ein Wahrscheinlichkeitssimplex ist.",
    usage: "Hat S_i genau k Elemente, ist \\Delta(S_i) das (k-1)-dimensionale Simplex \\{x \\in \\mathbb{R}^k : x_j \\ge 0, \\sum_j x_j = 1\\}. Gemischte Strategien, Überzeugungen und korrelierte Gleichgewichte liegen alle in Mengen dieser Form. Das große \\Delta ist standardmäßig aufrecht; \\varDelta liefert eine kursive Variante, falls Ihr Stil sie verlangt. Verwechseln Sie es nicht mit \\triangle, einem geometrischen Dreieck, oder mit \\nabla, dem umgekehrten Symbol für Gradienten. Bei zwei reinen Strategien ist es einfach das Intervall [0, 1] der Wahrscheinlichkeiten für die erste.",
  },
  "dominant-strategy": {
    name: "Dominante Strategie",
    meaning: "Dominante Strategie von Spieler i: eine Strategie, die unabhängig vom Verhalten der anderen Spieler eine beste Antwort ist.",
    usage: "Strikte Dominanz bedeutet u_i(s_i^d, s_{-i}) > u_i(s_i, s_{-i}) für jedes andere s_i und jedes s_{-i}; im Gefangenendilemma ist Verraten strikt dominant. Wahrheitsgemäßes Bieten in einer Zweitpreisauktion ist schwach dominant. Das hochgestellte d ist eine Kennzeichnung, kein Index, daher setzen es viele Autoren aufrecht, s_i^{\\mathrm{d}}, damit es nicht als Variable gelesen wird. Ob ^d vor oder nach _i steht, ergibt dieselbe gestapelte Ausgabe. Hat jeder Spieler eine dominante Strategie, ist das resultierende Profil ein Gleichgewicht in dominanten Strategien und damit ein Nash-Gleichgewicht.",
  },
  "dominated-strategy": {
    name: "Dominierte Strategie",
    meaning: "Dominanzrelation: s_i \\prec s'_i besagt, dass die Strategie s_i von s'_i dominiert wird, die stets mindestens ebenso gut abschneidet.",
    usage: "Strikt dominierte Strategien werden von rationalen Spielern nie gespielt, und ihre iterierte Elimination ist ein übliches Lösungsverfahren. \\prec ist eine Relation mit korrekten Abständen; für schwache Dominanz verwenden Sie \\preceq, für die umgekehrte Richtung \\succ oder \\succeq. Manche Texte schreiben die Relation mit spielerindizierten Symbolen wie \\prec_i. s'_i und s_i' werden gleich dargestellt, weil der Strich mit dem Index gestapelt wird. Die Richtungskonventionen variieren, und manche Autoren schreiben s'_i \\succ s_i für dieselbe Aussage, definieren Sie sie daher. Auch eine Strategie, die von einer gemischten Strategie dominiert wird, kann eliminiert werden.",
  },
  "pareto-optimal": {
    name: "Pareto-Optimum",
    meaning: "Pareto-optimales Ergebnis: Kein anderes Profil stellt einen Spieler besser, ohne einen anderen schlechter zu stellen.",
    usage: "Ein Profil s^{PO} ist Pareto-optimal, wenn es kein s mit u_i(s) \\ge u_i(s^{PO}) für alle i und strikter Ungleichung für ein i gibt. Das Gefangenendilemma zeigt ein Nash-Gleichgewicht, das nicht Pareto-optimal ist. Als s^{PO} geschrieben setzt TeX P und O als zwei kursive Variablen; eine Kennzeichnung gehört in aufrechte Schrift, s^{\\mathrm{PO}}, was zugleich verhindert, dass PO als Produkt gelesen wird. Derselbe Tipp gilt für Kennzeichnungen wie s^{\\mathrm{NE}}. Pareto-Optimalität sagt nichts über Fairness aus; sie schließt nur eindeutige Verbesserungen aus.",
  },
  "minimax": {
    name: "Minimax",
    meaning: "Minimax-Operator: Minimierung über j des Maximums über i, der Wert, den ein minimierender Spieler im ungünstigsten Fall garantieren kann.",
    usage: "In einem Nullsummen-Matrixspiel mit Auszahlung a_{ij} an den Zeilenspieler ist \\min_j \\max_i a_{ij} die Garantie des Spaltenspielers und \\max_i \\min_j a_{ij} die des Zeilenspielers; Letztere übersteigt Erstere nie. Der Minimax-Satz von Von Neumann besagt, dass beide in gemischten Strategien übereinstimmen. In abgesetzten Formeln stehen die Indizes darunter; im Fließtext erscheinen sie als tiefgestellte Indizes, fügen Sie also \\limits hinzu, wenn sie auch im Text darunter stehen sollen. Für mehr Abstand zwischen den Operatoren fügen Sie \\, ein oder schreiben \\min_{j}\\,\\max_{i}.",
  },
  "zero-sum": {
    name: "Nullsummenspiel",
    meaning: "Nullsummenbedingung: Die Auszahlungen der beiden Spieler heben sich stets auf, der Gewinn des einen ist also genau der Verlust des anderen.",
    usage: "Ein solches Spiel wird vollständig durch eine Matrix A beschrieben, mit u_1 = x^\\top A y und u_2 = -x^\\top A y für gemischte Strategien x und y. Konstantsummenspiele, u_1 + u_2 = c, sind strategisch äquivalent. Der Wert v = \\max_x \\min_y x^\\top A y lässt sich durch lineare Optimierung berechnen. Für n Spieler schreiben Sie \\sum_{i} u_i(s) = 0 für alle Profile s. Verwenden Sie für die Transponierte einheitlich x^\\top oder x^T. Schach und Heads-up-Poker sind klassische Beispiele.",
  },
  "cooperative-value": {
    name: "Charakteristische Funktion",
    meaning: "Charakteristische Funktion eines kooperativen Spiels: der Gesamtwert, den eine Koalition S aus eigener Kraft sichern kann.",
    usage: "Ein Spiel mit transferierbarem Nutzen ist ein Paar (N, v) mit v: 2^N \\to \\mathbb{R} und v(\\emptyset) = 0. Superadditivität, v(S \\cup T) \\ge v(S) + v(T) für disjunkte Koalitionen, macht die Bildung der großen Koalition lohnend. Der Kern ist die Menge der Aufteilungen x mit \\sum_{i \\in S} x_i \\ge v(S) für jedes S. \\emptyset ergibt einen Kreis mit Schrägstrich; \\varnothing liefert die rundere, modernere Form. Hier ist S eine Koalition und keine Strategiemenge, sagen Sie das daher ausdrücklich.",
  },
  "shapley-value": {
    name: "Shapley-Wert",
    meaning: "Shapley-Wert: der faire Anteil von Spieler i an v(N), sein durchschnittlicher Grenzbeitrag über alle Reihenfolgen.",
    usage: "Die Formel lautet \\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!\\,(n-|S|-1)!}{n!}\\,(v(S \\cup \\{i\\}) - v(S)). Er ist die eindeutige Aufteilung, die Effizienz, Symmetrie, die Nullspieler-Eigenschaft und Additivität erfüllt. Das maschinelle Lernen nutzt ihn zur Merkmalsattribution, etwa in SHAP. Wählen Sie bewusst zwischen \\phi und \\varphi; sie sehen recht unterschiedlich aus. Maskieren Sie in der Mengendifferenz die geschweiften Klammern als \\{i\\}, damit sie ausgegeben werden. Die exakte Berechnung summiert pro Spieler über alle 2^{n-1} Koalitionen, daher sind Stichprobennäherungen in der Praxis verbreitet. In einem symmetrischen Spiel erhält jeder Spieler v(N)/n.",
  },
  "subgame-perfect": {
    name: "Teilspielperfektes Gleichgewicht",
    meaning: "Teilspielperfektes Gleichgewicht: ein Nash-Gleichgewicht, dessen Einschränkung auf jedes Teilspiel ebenfalls ein Nash-Gleichgewicht ist.",
    usage: "Selten führte das Konzept ein, um unglaubwürdige Drohungen auszuschließen, und in endlichen Spielen mit perfekter Information findet die Rückwärtsinduktion das SPE. Im Mathematikmodus als SPE getippt sind die drei Buchstaben miteinander multiplizierte kursive Variablen mit schlechter Unterschneidung; schreiben Sie in Formeln \\mathrm{SPE} oder \\text{SPE} und im Fließtext normalen Text. Verwandte Lösungskonzepte schreibt man genauso, \\mathrm{NE}, \\mathrm{PBE} für das perfekte Bayessche Gleichgewicht. Jedes SPE ist ein Nash-Gleichgewicht, aber nicht umgekehrt. Sequenzielle Verhandlungen und wiederholte Spiele stützen sich stark darauf.",
  },
  "information-set": {
    name: "Informationsmenge",
    meaning: "Informationsmenge in einem Spiel in extensiver Form: Entscheidungsknoten, die ein Spieler bei seinem Zug nicht unterscheiden kann.",
    usage: "Jede Informationsmenge h gehört zu einem Spieler, bietet an jedem ihrer Knoten dieselben Aktionen A(h) und bildet unvollkommene Information wie verdeckte Züge ab. Verhaltensstrategien ordnen jeder Informationsmenge des Spielers eine Verteilung \\sigma_i(h) \\in \\Delta(A(h)) zu. Die Konventionen unterscheiden sich: Viele Texte verwenden I oder I_i für Informationsmengen und reservieren h für Historien, definieren Sie Ihre Notation daher. Perfekte Information bedeutet, dass jedes h ein einzelner Knoten ist. Perfektes Erinnerungsvermögen verlangt, dass ein Spieler frühere Züge und Informationen nie vergisst.",
  },
  "action": {
    name: "Aktion",
    meaning: "Aktion von Spieler i, eine Wahl an einem einzelnen Entscheidungspunkt, im Unterschied zu einer vollständigen Strategie.",
    usage: "In einmaligen Spielen fallen Aktionen und reine Strategien zusammen, viele Texte schreiben Profile daher als a = (a_i, a_{-i}) mit a_i \\in A_i. In extensiven und wiederholten Spielen sind Aktionen lokale Züge, während Strategien Historien oder Informationsmengen auf Aktionen abbilden. Arbeiten zu Lernverfahren und Multi-Agenten-Reinforcement-Learning verwenden a_i^t für die Aktion in Runde t. Fügen Sie Striche für Alternativen hinzu, a_i', und geschweifte Klammern für den Komplementindex, a_{-i}. In wiederholten Spielen ist eine Historie eine Folge von Aktionsprofilen, h^t = (a^0, \\ldots, a^{t-1}).",
  },
};

export default text;
