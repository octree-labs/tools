import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "Kleiner-Zeichen",
    meaning: "Die Kleiner-Relation, die aussagt, dass die linke Größe echt kleiner als die rechte ist.",
    usage: "Direkt im Mathematikmodus getippt, wird < zu einer Relation mit passendem Abstand, wie in 0 < x < 1 oder einer strikten Ungleichung in einem Epsilon-Delta-Beweis. Verwenden Sie es nicht als spitze Klammer für Skalarprodukte; dafür gibt es \\langle. Im Textmodus mit der alten Standard-Schriftkodierung kann < ein umgekehrtes Ausrufezeichen ausgeben, schreiben Sie daher \\textless oder nutzen Sie den Mathematikmodus. Die nicht strikte Form ist \\leq (oder \\le), die Verneinung \\not< oder \\nless. Web-Renderer wie MathJax akzeptieren auch \\lt, was in HTML hilfreich ist.",
  },
  "greater-than": {
    name: "Größer-Zeichen",
    meaning: "Die Größer-Relation, die aussagt, dass die linke Größe echt größer als die rechte ist.",
    usage: "Im Mathematikmodus ist > ein Relationssymbol und erhält automatisch Relationsabstand, x > 0 braucht also keine manuellen Leerzeichen. Es schließt strikte Ungleichungen wie \\lambda_{\\max} > 0 oder die Bedingung n > N in Grenzwertdefinitionen ab. Es sollte nicht als schließende spitze Klammer verwendet werden; dafür gibt es \\rangle. Im Textmodus mit der älteren Schriftkodierung kann das Zeichen als umgekehrtes Fragezeichen erscheinen, verwenden Sie daher \\textgreater oder den Mathematikmodus. Verwandte Befehle sind \\geq (oder \\ge), \\gg für „sehr viel größer“ und \\ngtr für die Verneinung.",
  },
  "equivalent": {
    name: "Identitätszeichen",
    meaning: "Relation mit drei Strichen für „identisch gleich“, „kongruent modulo n“ oder „logisch äquivalent“.",
    usage: "Die Zahlentheorie schreibt a \\equiv b \\pmod{n} für Kongruenz, die Analysis schreibt f \\equiv 0, um auszudrücken, dass eine Funktion überall verschwindet, und die Logik verwendet es für die logische Äquivalenz von Formeln. Kombinieren Sie es mit \\pmod{n} für den eingeklammerten Modul oder \\bmod für die binäre Form a \\bmod n. Es unterscheidet sich von \\cong (Isomorphie oder geometrische Kongruenz) und von \\triangleq oder := (Definitionen), obwohl manche Autoren es auch für Definitionen verwenden. Verneint wird es mit \\not\\equiv. In der Physik führt \\equiv oft eine Kurzschreibweise ein: \\omega \\equiv 2\\pi f.",
  },
  "proportional-to": {
    name: "Proportionalitätszeichen",
    meaning: "Drückt aus, dass eine Größe proportional zu einer anderen ist, also bis auf einen konstanten Faktor gleich.",
    usage: "Die Physik schreibt F \\propto 1/r^2 für Abstandsquadratgesetze, und die bayessche Statistik stützt sich ständig darauf: p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta), wobei die Normierungskonstante entfällt. Es ist eine Relation, der Abstand wird also automatisch gesetzt. Verwechseln Sie es nicht mit dem griechischen Buchstaben \\alpha, der in manchen Schriften ähnlich aussieht, aber keinen Relationsabstand hat. Eine Variante, \\varpropto, hat eine leicht andere Form. Für das Skalierungsverhalten in der Algorithmenanalyse sind \\sim oder \\Theta meist klarer. Ergänzen Sie eine Konstante nur, wenn sie wichtig ist; ansonsten besteht der Sinn von \\propto gerade darin, sie zu verbergen.",
  },
  "similar-to": {
    name: "Tilde-Relation",
    meaning: "Tilde als Relation für „verteilt wie“, „asymptotisch gleich“, „ähnlich“ oder „äquivalent bezüglich einer Relation“.",
    usage: "In der Wahrscheinlichkeitstheorie liest man X \\sim \\mathcal{N}(0, 1) als „X ist standardnormalverteilt“. In der Asymptotik bedeutet f \\sim g, dass f/g \\to 1, wie in der Stirlingformel. Die Algebra verwendet x \\sim y für eine Äquivalenzrelation, die Geometrie für ähnliche Dreiecke. Als Relation hat es beidseitig Abstand; für eine Tilde als Akzent auf einem Buchstaben verwenden Sie \\tilde{x}. Nahe Verwandte sind \\simeq (asymptotisch gleich oder homotopieäquivalent), \\approx (ungefähr) und \\thicksim, eine kräftigere Version. Als vorangestelltes „ungefähr“, wie in \\sim 10^3, kann der Abstand seltsam wirken; schreiben Sie {\\sim}10^3.",
  },
  "congruent": {
    name: "Isomorphiezeichen",
    meaning: "Tilde über einem Gleichheitszeichen, das die Isomorphie von Strukturen oder die Kongruenz geometrischer Figuren bezeichnet.",
    usage: "Algebraiker schreiben G \\cong H für isomorphe Gruppen und V \\cong V^{**} für endlichdimensionale Räume, während die Geometrie \\triangle ABC \\cong \\triangle DEF für kongruente Dreiecke verwendet. Manche Texte aus Physik und Technik verwenden es für „ungefähr gleich“, dafür ist \\approx jedoch klarer. Es unterscheidet sich von \\simeq (ein einzelner Strich, verwendet für Homotopieäquivalenz oder asymptotische Gleichheit) und von \\equiv (drei Striche). Um die Abbildung anzugeben, setzen Sie sie mit \\overset{\\phi}{\\cong} über das Symbol oder verwenden einen Pfeil wie \\xrightarrow{\\sim}.",
  },
  "subset-or-equal": {
    name: "Teilmengenzeichen",
    meaning: "Sagt aus, dass jedes Element der linken Menge auch zur rechten Menge gehört; die Mengen dürfen gleich sein.",
    usage: "Verwenden Sie \\subseteq für die Inklusion, die Gleichheit zulässt, wie in A \\subseteq A, und in Definitionen wie der Abgeschlossenheit einer Topologie unter Vereinigungen von Teilfamilien \\mathcal{U} \\subseteq \\tau. Viele Autoren verwenden das einfache \\subset in derselben Bedeutung, andere reservieren \\subset für die echte Inklusion, es lohnt sich also, Ihre Konvention anzugeben. Für eine eindeutig echte Inklusion verwenden Sie \\subsetneq. Die Verneinung ist \\nsubseteq oder \\not\\subseteq. Um die Gleichheit zweier Mengen zu zeigen, beweist man standardmäßig A \\subseteq B und B \\subseteq A.",
  },
  "proper-subset": {
    name: "Echte Teilmenge",
    meaning: "Teilmengenzeichen mit durchgestrichenem Strich: Die linke Menge ist in der rechten enthalten, aber nicht gleich ihr.",
    usage: "\\subsetneq drückt die echte Inklusion explizit aus und beseitigt die Mehrdeutigkeit von \\subset, das manche Texte als nicht strikt behandeln. Es erscheint in Ketten wie \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} und in Maximalitätsargumenten für Ideale. Varianten sind \\subsetneqq (doppelter Strich mit Schrägstrich) und \\varsubsetneq, dessen Schrägstrich nur den Strich kreuzt. Verwechseln Sie es nicht mit \\nsubseteq, das „überhaupt keine Teilmenge“ bedeutet. Das Gegenstück für Obermengen ist \\supsetneq. Es ist eine Relation, der Abstand wird also automatisch gesetzt. Um in einem Beweis zu zeigen, dass die Inklusion echt ist, zeigen Sie A \\subseteq B und geben ein Element von B außerhalb von A an.",
  },
  "superset": {
    name: "Obermengenzeichen",
    meaning: "Obermengenrelation: Die linke Menge enthält die rechte (je nach Konvention oft im echten Sinne).",
    usage: "\\supset ist das Spiegelbild von \\subset, A \\supset B sagt also, dass B in A liegt. Wie bei \\subset sind sich die Autoren uneinig, ob es Gleichheit zulässt; geben Sie Ihre Konvention an oder verwenden Sie \\supseteq und \\supsetneq, um Zweifel auszuräumen. Logiktexte älterer Tradition, darunter die Principia Mathematica, verwendeten \\supset für die materiale Implikation, daher begegnet Ihnen p \\supset q in philosophischen Arbeiten. In neuen Texten ist \\to oder \\implies für die Implikation klarer. Die Verneinung ist \\not\\supset, und \\nsupseteq deckt die nicht strikte Version ab.",
  },
  "superset-or-equal": {
    name: "Obermenge oder gleich",
    meaning: "Relation „Obermenge oder gleich“: Die linke Menge enthält jedes Element der rechten Menge.",
    usage: "Lesen Sie A \\supseteq B als „A enthält B“, möglicherweise mit Gleichheit. Es bietet sich an, wenn die größere Menge im Mittelpunkt steht, wie bei \\overline{A} \\supseteq A für Abschlüsse oder \\ker f \\supseteq \\operatorname{im} g in Argumenten mit exakten Sequenzen. Es ist einfach \\subseteq in umgekehrter Leserichtung, wählen Sie also die Form, die die wichtige Menge zuerst nennt. Die strikte Version ist \\supsetneq, die Verneinung \\nsupseteq. In Verbands- und Ordnungstheorie drückt es auch die umgekehrte Inklusionsordnung auf Mengenfamilien aus.",
  },
  "perpendicular": {
    name: "Senkrecht-Zeichen",
    meaning: "Relation „senkrecht auf“, die orthogonale Geraden, Vektoren oder Unterräume sowie die Unabhängigkeit von Variablen kennzeichnet.",
    usage: "Die Geometrie schreibt AB \\perp CD, die lineare Algebra schreibt u \\perp v, wenn \\langle u, v \\rangle = 0, und W^\\perp für ein orthogonales Komplement, und die Zahlentheorie verwendet manchmal a \\perp b für teilerfremde ganze Zahlen. Stochastiker schreiben X \\perp Y für Unabhängigkeit, oft verdoppelt als X \\perp\\!\\!\\!\\perp Y, um das eigene Unabhängigkeitssymbol nachzuahmen. \\perp ist eine Relation mit beidseitigem Abstand, während \\bot dieselbe Form, aber gewöhnlichen Abstand hat, was zum logischen Falsum oder einem kleinsten Element passt. Hochgestellt wie in W^\\perp funktioniert beides, da der Abstand dort unterdrückt wird.",
  },
  "parallel": {
    name: "Parallelzeichen",
    meaning: "Relation „ist parallel zu“ für Geraden, Ebenen oder Vektoren; außerdem ein Operator für parallele Komposition.",
    usage: "Die Geometrie schreibt \\ell_1 \\parallel \\ell_2, die Physik schreibt Komponenten wie F_\\parallel (oft über \\|), und die Elektrotechnik verwendet R_1 \\parallel R_2 für parallel geschaltete Widerstände. Prozesskalküle verwenden es für die parallele Komposition, P \\parallel Q. Das Zeichen ist dasselbe wie \\|, doch \\parallel erhält Relationsabstand; verwenden Sie es also zwischen Objekten und \\| (oder \\lVert, \\rVert) als Normbegrenzer. Die Verneinung ist \\nparallel. Für die KL-Divergenz D(P \\parallel Q) ist der Relationsabstand üblich, manche bevorzugen jedoch \\|.",
  },
  "not-parallel": {
    name: "Nicht-parallel-Zeichen",
    meaning: "Verneinte Parallelrelation, die aussagt, dass zwei Geraden oder Vektoren nicht parallel sind.",
    usage: "\\nparallel zeichnet einen Schrägstrich durch den Doppelstrich und wird in Geometrieaufgaben wie \\ell_1 \\nparallel \\ell_2 verwendet, was bedeutet, dass sich die Geraden schneiden (in der Ebene) oder windschief sind (im Raum). Es ist eine Relation mit demselben Abstand wie \\parallel. \\not\\parallel kann funktionieren, doch der überlagerte Schrägstrich ist oft schlecht zentriert, daher sieht das eigene Zeichen besser aus. Es gibt außerdem \\nshortparallel, eine kürzere Variante. In der Physik schreibt man eine nicht parallele Komponente häufiger mit \\perp.",
  },
  "much-less-than": {
    name: "Sehr-viel-kleiner-Zeichen",
    meaning: "Relation „sehr viel kleiner als“: Die linke Größe ist um Größenordnungen kleiner als die rechte.",
    usage: "Physik und Technik verwenden \\ll für Näherungsbereiche: v \\ll c für nichtrelativistische Bewegung oder x \\ll 1, um \\sin x \\approx x zu rechtfertigen. Die analytische Zahlentheorie verwendet die Vinogradov-Notation f \\ll g, gleichbedeutend mit f = O(g), und die Maßtheorie schreibt \\mu \\ll \\nu für absolute Stetigkeit. Es ist ein einzelnes Zeichen, tippen Sie also nicht << oder < <, was zwei getrennte Relationssymbole mit falschem Abstand ergibt. Die dreifache Version \\lll gibt es für eine noch stärkere Ungleichung.",
  },
  "much-greater-than": {
    name: "Sehr-viel-größer-Zeichen",
    meaning: "Relation „sehr viel größer als“, die anzeigt, dass eine Größe eine andere bei Weitem übersteigt.",
    usage: "Verwenden Sie \\gg in asymptotischen oder physikalischen Überlegungen, etwa n \\gg 1 für Näherungen bei großen Stichproben, kT \\gg \\hbar\\omega für den klassischen Grenzfall oder die Vinogradov-Notation f \\gg g, gleichbedeutend mit g = O(f). Es ist ein Symbol mit Relationsabstand; >> zu tippen erzeugt zwei getrennte Relationen. Das stärkere \\ggg gibt es ebenfalls. Da \\gg nicht quantitativ ist, folgt in Arbeiten oft eine präzise Aussage, etwa n \\gg \\log(1/\\delta) zusammen mit der beteiligten Konstante. Asymptotische Argumente in der Physik geben den Bereich oft einmal an, zum Beispiel L \\gg \\lambda, und lassen dann kleine Terme weg.",
  },
  "precedes": {
    name: "Vorgängerzeichen",
    meaning: "Relation „vorangehend“ für strikte Ordnungen, die nicht das gewöhnliche numerische Kleiner sind.",
    usage: "\\prec schreibt abstrakte strikte Ordnungen: Präferenzen in der Ökonomie (x \\prec y bedeutet, dass y strikt vorgezogen wird), Majorisierung in der Matrixanalysis, Dominanzordnungen auf Partitionen und die Happened-before-Relation in verteilten Systemen. Seine gebogene Form signalisiert, dass die Ordnung kein numerisches < ist. Die nicht strikte Version ist \\preceq, und \\preccurlyeq liefert eine Variante mit gebogenem Strich, die manche Texte bevorzugen. Die lineare Algebra schreibt A \\prec B für die Loewner-Ordnung, was bedeutet, dass B - A positiv definit ist. Zu den Verneinungen gehört \\nprec.",
  },
  "succeeds": {
    name: "Nachfolgerzeichen",
    meaning: "Relation „nachfolgend“, die Umkehrung von \\prec, für strikte abstrakte Ordnungen.",
    usage: "\\succ liest man als „folgt auf“ oder „wird vorgezogen“: In der Mikroökonomie bedeutet x \\succ y, dass x gegenüber y strikt vorgezogen wird, und in der Matrixanalysis besagt A \\succ 0, dass A positiv definit ist (Loewner-Ordnung). Arbeiten zur Optimierung verwenden es in semidefiniten Nebenbedingungen. Es ist ein Relationssymbol, der Abstand wird also automatisch gesetzt. Die nicht strikte Form ist \\succeq, die Form mit gebogenem Strich \\succcurlyeq und die Verneinung \\nsucc. Vermeiden Sie > für diese Ordnungen, da Leser es als numerischen Vergleich auffassen würden.",
  },
  "precedes-or-equal": {
    name: "Vorgänger-oder-gleich-Zeichen",
    meaning: "Relation „vorangehend oder gleich“, die nicht strikte Version von \\prec für Halb- und Präferenzordnungen.",
    usage: "Die Ordnungstheorie schreibt x \\preceq y für eine allgemeine Halbordnung und reserviert \\le für Zahlen. Ökonomen verwenden es für die schwache Präferenz, und in der Matrixanalysis schreibt man A \\preceq B, wenn B - A positiv semidefinit ist. In der konvexen Optimierung verwendet die verallgemeinerte Ungleichung x \\preceq_K y einen Index für den Kegel. \\preccurlyeq sieht ähnlich aus, mit gebogenem unterem Strich, und manche Autoren bevorzugen es, um Verwechslungen mit \\leq zu vermeiden. Die Umkehrung ist \\succeq, und \\npreceq verneint es.",
  },
  "succeeds-or-equal": {
    name: "Nachfolger-oder-gleich-Zeichen",
    meaning: "Relation „nachfolgend oder gleich“, meist zu sehen in A \\succeq 0 für positiv semidefinite Matrizen.",
    usage: "Nebenbedingungen der semidefiniten Programmierung schreibt man X \\succeq 0, was bedeutet, dass X symmetrisch positiv semidefinit ist, und die Loewner-Ordnung vergleicht Matrizen als A \\succeq B. Ökonomen verwenden \\succeq für die schwache Präferenz, gelesen als „mindestens so gut wie“. Es ist eine Relation mit Standardabstand. Die strikte Version ist \\succ, die geschwungene Variante \\succcurlyeq und die Verneinung \\nsucceq. Für numerische Vergleiche bleiben Sie bei \\geq, damit Leser nicht nach einer nicht standardmäßigen Ordnung suchen. In einem semidefiniten Programm steht die Nebenbedingung meist in einer eigenen Zeile nach „u.d.N.“.",
    example: "\\min_{X} \\operatorname{tr}(CX) \\ \\text{u.d.N.}\\ X \\succeq 0",
  },
  "asymptotic": {
    name: "Asymptotische Äquivalenz",
    meaning: "Relation der asymptotischen Äquivalenz: Zwei Funktionen wachsen bis auf konstante Faktoren gleich schnell.",
    usage: "In Analysis und Zahlentheorie bedeutet f \\asymp g, dass es Konstanten c, C > 0 mit c g \\le f \\le C g für große Argumente gibt, gleichwertig zu f = \\Theta(g) in der Informatik. Es ist schwächer als f \\sim g, das verlangt, dass der Quotient gegen 1 strebt. Das Zeichen, ein Paar gegenläufiger Bögen, sollte nicht mit \\approx oder mit \\smile und \\frown verwechselt werden. Es ist eine Relation, der Abstand wird also automatisch gesetzt. Manche Physiktexte verwenden es auch locker für „asymptotisch gleich“, definieren Sie es also, wenn es auf Präzision ankommt.",
  },
  "defined-as": {
    name: "Definitionszeichen",
    meaning: "Doppelpunkt-Gleich, die definierende Zuweisung: Die linke Seite wird als gleich der rechten Seite definiert.",
    usage: "f(x) := x^2 + 1 kennzeichnet eine Definition statt einer Gleichheitsbehauptung, und der Doppelpunkt steht auf der Seite des zu definierenden Objekts (=: kehrt die Richtung um). Direkt getippt sind Doppelpunkt und Gleichheitszeichen beide Relationen, TeX setzt sie also ohne Abstand dazwischen, doch der Doppelpunkt ist nicht vertikal auf das Gleichheitszeichen zentriert, was manche Typographen stört. Der Befehl \\coloneqq aus einem Mathematik-Werkzeugpaket behebt diese Ausrichtung. In Pseudocode bezeichnet es auch die Zuweisung, x := x + 1. Alternativen sind \\triangleq und \\stackrel{\\text{def}}{=}.",
  },
  "triangle-equal": {
    name: "Gleichheitszeichen mit Dreieck",
    meaning: "Gleichheitszeichen mit einem kleinen Dreieck darüber, gelesen als „ist definiert als“.",
    usage: "Arbeiten aus Signalverarbeitung, Regelungstechnik und Informationstheorie bevorzugen oft \\triangleq für Definitionen, wie in H(X) \\triangleq -\\sum p(x) \\log p(x). Es erfüllt dieselbe Aufgabe wie :=, ist aber symmetrisch und zeigt daher nicht an, welche Seite neu ist. Manchen Lesern ist es unvertraut, erwähnen Sie die Konvention also einmal im Notationsabschnitt. Alternativen sind \\stackrel{\\text{def}}{=} oder \\overset{\\mathrm{def}}{=} sowie \\equiv in der Physik. Es ist eine Relation, der Abstand wird also automatisch gesetzt. Erläutern Sie die Konvention für alle Leser außerhalb Ihres Fachgebiets.",
  },
};

export default text;
