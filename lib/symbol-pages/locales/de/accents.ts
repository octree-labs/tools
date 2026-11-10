import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/accents/<slug>. */
const text: SymbolPageTranslations = {
  "hat": {
    name: "Dach",
    meaning: "Setzt einen kleinen Zirkumflex über ein einzelnes Zeichen und kennzeichnet damit Schätzer, Einheitsvektoren oder Fourier-Transformierte.",
    usage: "In der Statistik schreibt man \\hat{\\theta} für einen Schätzer von \\theta und \\hat{y} für die angepassten Werte einer Regression, in der Physik stehen \\hat{x} oder \\hat{\\mathbf{n}} für Einheitsvektoren und Quantenoperatoren, und in der Analysis bezeichnet \\hat{f} die Fourier-Transformierte. Der Akzent hat eine feste Breite und sieht daher nur über einem einzelnen Symbol gut aus; für mehrere Buchstaben wechseln Sie zu \\widehat{xy}. Über i oder j verwenden Sie die punktlosen Formen \\imath und \\jmath, damit das Dach nicht auf einem Punkt sitzt. Im Fließtext außerhalb des Mathematikmodus ist der entsprechende Zirkumflex-Akzent \\^{o}, nicht \\hat.",
  },
  "wide-hat": {
    name: "Breites Dach",
    meaning: "Streckt einen Zirkumflex über einen Ausdruck aus mehreren Buchstaben, etwa über die Fourier-Transformierte eines Produkts.",
    usage: "Verwenden Sie \\widehat, wenn der Akzent mehr als eine Glyphe überdecken muss, zum Beispiel \\widehat{f * g} = \\hat{f}\\,\\hat{g} für die Faltung, \\widehat{ABC} für einen Winkel in manchen Geometrietraditionen oder \\widehat{G} für die duale Gruppe oder die Vervollständigung einer Gruppe. In den Standardschriften Computer Modern wächst das Dach nur bis zu einer begrenzten Breite, über langen Ausdrücken hört es also auf, sich zu strecken, und wirkt zu klein; dann liest sich ein Exponent wie (f g)^\\wedge oder ein Operator \\mathcal{F}\\{\\cdot\\} besser. Für einen einzelnen Buchstaben ist \\hat{x} vorzuziehen, das über kursiven Zeichen genauer positioniert wird.",
  },
  "tilde": {
    name: "Tilde",
    meaning: "Setzt eine kleine Tilde über ein einzelnes Symbol, oft zur Kennzeichnung einer Näherung, einer Transformierten oder einer abgewandelten Variablen.",
    usage: "Eine Tilde über einem Buchstaben weist meist auf ein verwandtes, aber verändertes Objekt hin: \\tilde{x} für eine gestörte oder genäherte Lösung, \\tilde{f} für eine Laplace- oder andere Transformierte, \\tilde{O}(n) für die Soft-O-Komplexität, die logarithmische Faktoren verbirgt, oder \\tilde{X} für die universelle Überlagerung in der Topologie. Wie \\hat hat sie eine feste Breite, über zwei oder mehr Buchstaben verwenden Sie daher \\widetilde. Verwechseln Sie sie nicht mit \\sim, einem Relationszeichen zwischen Termen (X \\sim N(0,1)), und auch nicht mit dem Textakzent \\~{n} für Wörter wie señor. Für punktlose Buchstaben schreiben Sie \\tilde{\\imath}.",
  },
  "wide-tilde": {
    name: "Breite Tilde",
    meaning: "Zeichnet eine dehnbare Tilde über eine Gruppe von Symbolen, verwendet für Überlagerungen, Abschlüsse und abgewandelte Ausdrücke.",
    usage: "Wählen Sie \\widetilde, wenn die Tilde mehrere Zeichen überspannen muss, wie in \\widetilde{GL}_n für eine Überlagerungsgruppe, \\widetilde{AB} für einen Bogen in manchen Geometrietexten oder \\widetilde{f(x)} für eine geglättete Funktion. Ihre Breite wächst mit dem Inhalt, aber nur bis zu einem schriftabhängigen Maximum, danach bleibt sie zentriert und wirkt zu kurz; bei langen Argumenten ist eine nachgestellte Notation oder ein benannter Operator klarer. Über einem einzelnen Buchstaben ergibt \\tilde{x} eine bessere Platzierung und einen kleineren Akzent. Soll die Tilde als eigenständiges Zeichen im Text stehen, ist stattdessen \\textasciitilde der passende Befehl.",
  },
  "dot": {
    name: "Punkt",
    meaning: "Setzt einen einzelnen Punkt über eine Variable, die Newtonsche Notation für die erste Zeitableitung.",
    usage: "In der Mechanik und bei dynamischen Systemen bedeutet \\dot{x} dx/dt, sodass sich Gleichungen wie \\dot{x} = Ax oder die Lagrange-Funktion L(q, \\dot{q}, t) kompakt schreiben lassen. In der Physik steht der Punkt auch für Raten wie \\dot{m} für den Massenstrom. Der Punkt ist ein mathematischer Akzent und funktioniert auch über griechischen Buchstaben: \\dot{\\theta}. Verwechseln Sie ihn nicht mit \\cdot (einem mittigen Multiplikationspunkt) oder mit dem Textakzent \\.{z} in polnischen Wörtern. Für die zweite Ableitung verwenden Sie \\ddot{x}, statt zwei \\dot-Befehle zu stapeln, was die Punkte verschiebt.",
  },
  "double-dot": {
    name: "Doppelter Punkt",
    meaning: "Setzt zwei Punkte über eine Variable, um ihre zweite Zeitableitung zu bezeichnen, etwa die Beschleunigung.",
    usage: "Das zweite Newtonsche Gesetz schreibt man üblicherweise als m\\ddot{x} = F, den harmonischen Oszillator als \\ddot{x} + \\omega^2 x = 0. In der Lagrange-Mechanik liefern die Euler-Lagrange-Gleichungen Terme mit \\ddot{q}. Obwohl es einem Umlaut ähnelt, ist \\ddot ein mathematischer Akzent; für deutsche oder türkische Wörter im Text verwenden Sie stattdessen \\\"{o}. Die Punkte werden über der geneigten Achse des Symbols zentriert und rücken daher über kursiven Buchstaben leicht nach rechts, was beabsichtigt ist. Für eine dritte Ableitung gibt es \\dddot{x}, darüber hinaus sind die Leibniz-Notation oder x^{(n)} klarer.",
  },
  "triple-dot": {
    name: "Dreifacher Punkt",
    meaning: "Setzt drei Punkte über eine Variable, die Newtonsche Notation für die dritte Zeitableitung (Ruck).",
    usage: "Dritte Ableitungen kommen in der Bewegungsplanung und Regelungstechnik vor, wo \\dddot{x} der Ruck ist, sowie bei der Abraham-Lorentz-Strahlungsrückwirkungskraft, die proportional zu \\dddot{\\mathbf{x}} ist. Dazu gehört \\ddddot für vier Punkte, und keiner der beiden Befehle ist Teil des minimalen LaTeX-Kernels. Die Punkte stehen enger beieinander, als es mit drei manuellen \\dot-Aufrufen möglich wäre, und sitzen auf derselben Höhe wie bei \\ddot. Da drei Punkte in kleiner Schrift oder in Indizes schwer lesbar werden, wechseln viele Autoren bei höheren Ordnungen zu x^{(3)} oder d^3x/dt^3.",
  },
  "bar": {
    name: "Querstrich",
    meaning: "Setzt einen kurzen waagerechten Strich über ein Symbol, typischerweise für einen Stichprobenmittelwert oder eine komplexe Konjugation.",
    usage: "In der Statistik steht \\bar{x} für den Stichprobenmittelwert (1/n)\\sum x_i; in der Funktionentheorie schreibt man \\bar{z} für die Konjugierte; und \\bar{A} kann den Abschluss einer Menge bezeichnen. Der Strich hat eine feste Breite von etwa einem Buchstaben, \\bar{xy} sieht daher falsch aus: Verwenden Sie \\overline{xy}, um mehrere Symbole zu überspannen; das ist auch die übliche Wahl zum Konjugieren eines Ausdrucks wie \\overline{z + w}. Im Text ist der Makron-Akzent \\={a}, nicht \\bar. Fette Vektoren vertragen ihn problemlos: \\bar{\\mathbf{v}}.",
  },
  "overline": {
    name: "Überstrich",
    meaning: "Zeichnet eine Linie über einen ganzen Ausdruck, für Konjugierte, Abschlüsse, periodische Dezimalzahlen oder Streckenbezeichnungen.",
    usage: "Anders als \\bar streckt sich der Strich von \\overline über die volle Breite seines Arguments und eignet sich daher für \\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2, den Abschluss \\overline{A \\cup B}, die boolesche Negation \\overline{A + B}, die Strecke \\overline{AB} und periodische Dezimalzahlen wie 0.\\overline{3}. Verschachtelte Überstriche stapeln sich in zunehmender Höhe, was nebeneinander ungleichmäßig wirken kann; ein \\vphantom des höchsten Inhalts in jedem davon hilft, sie anzugleichen. Im Textmodus ist ein Überstrich nicht direkt verfügbar; setzen Sie ihn in Mathematikmodus. Sein Gegenstück zum Unterstreichen ist \\underline.",
  },
  "underline": {
    name: "Unterstrich",
    meaning: "Zeichnet eine Linie unter einen Ausdruck, verwendet zur Hervorhebung, für untere Schranken oder Unterintegrale.",
    usage: "In der Mathematik verwendet man \\underline für Darbouxsche Unterintegrale, den Limes inferior \\underline{\\lim}, untere Schranken und zur Kennzeichnung ausgezeichneter Elemente; manche Fachgebiete unterstreichen Vektoren, statt sie fett zu setzen. Es funktioniert im Text- und im Mathematikmodus, schaltet im Text jedoch Silbentrennung und Zeilenumbruch ab und ist daher eine schlechte Wahl zum Hervorheben von Wörtern, wofür \\emph vorzuziehen ist. Die Tiefe der Linie hängt von Unterlängen ab, sodass \\underline{a} und \\underline{y} auf unterschiedlicher Höhe liegen; ein \\vphantom{y} in jedem gleicht sie an. Sein oberes Gegenstück ist \\overline.",
  },
  "vector-arrow": {
    name: "Vektorpfeil",
    meaning: "Setzt einen kleinen nach rechts zeigenden Pfeil über einen einzelnen Buchstaben, um ihn als Vektor zu kennzeichnen.",
    usage: "Schulphysik und viele Ingenieurtexte schreiben Vektoren als \\vec{F}, \\vec{v} oder \\vec{r}, während die reine Mathematik häufiger fettes \\mathbf{v} oder einfache Buchstaben verwendet. Der Pfeil hat eine feste Größe für ein Zeichen; über zwei Punkten wie AB wirkt er gedrängt, verwenden Sie dann \\overrightarrow{AB}. Über kursiven Buchstaben sitzt der Pfeil leicht rechts der Mitte, um ihrer Neigung zu folgen. Die Kombination mit einem Dach für Einheitsvektoren (\\hat{\\vec{x}}) funktioniert, wird aber hoch, weshalb viele \\hat{\\mathbf{x}} schreiben.",
  },
  "wide-vector": {
    name: "Breiter Vektorpfeil",
    meaning: "Streckt einen nach rechts zeigenden Pfeil über sein Argument, die übliche Notation für den Vektor von A nach B.",
    usage: "Geometrie und Vektoralgebra verwenden \\overrightarrow{AB} für den Vektor vom Punkt A zum Punkt B, was Identitäten wie \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC} ergibt. Der Pfeil wird so breit wie der Inhalt, anders als \\vec, das nur über einen Buchstaben passt. In der Kategorientheorie und der Funktionalanalysis kennzeichnet er mitunter die Richtung eines Limes oder eine gerichtete Menge. Der Pfeil wird in voller Pfeilhöhe gezeichnet und erzeugt daher merklich zusätzlichen vertikalen Abstand; im Fließtext mit engem Zeilenabstand sollten Sie \\vec{v} oder fette Buchstaben erwägen. Für die umgekehrte Richtung verwenden Sie \\overleftarrow.",
  },
  "left-vector": {
    name: "Linkspfeil darüber",
    meaning: "Zeichnet einen nach links zeigenden Pfeil über das Argument, der eine umgekehrte Richtung oder eine rückwärts gelesene Folge kennzeichnet.",
    usage: "Seltener als sein nach rechts zeigendes Gegenstück erscheint \\overleftarrow{AB}, wenn ein Vektor oder Pfad von B zurück nach A gelesen wird, für das gespiegelte Wort oder die umgekehrte Zeichenkette in der Theorie formaler Sprachen und für zeitlich rückwärts laufende oder adjungierte Größen in der Physik. Sein Pfeil streckt sich genau wie bei \\overrightarrow über das ganze Argument. Brauchen Sie Pfeile unter dem Ausdruck, stellt amsmath \\underleftarrow und \\underrightarrow bereit. Für einen rückwärts gerichteten Vektor über einem einzelnen Buchstaben gibt es keine eingebaute Kurzform wie \\vec, daher ist dieser breite Befehl die übliche Wahl.",
  },
  "line-arrow-over-ab": {
    name: "Doppelpfeil darüber (Gerade AB)",
    meaning: "Zeichnet einen Pfeil mit zwei Spitzen über sein Argument, die übliche Notation für die Gerade durch die Punkte A und B.",
    usage: "Die Schulgeometrie unterscheidet drei aus zwei Punkten gebildete Objekte: \\overline{AB} für die Strecke, \\overrightarrow{AB} für den Strahl und \\overleftrightarrow{AB} für die unendliche Gerade. Der Pfeil streckt sich mit dem Inhalt und hat an beiden Enden Spitzen. Gelegentlich wird er auch für beidseitige Relationen oder zweiseitige Grenzwerte verwendet. Da er recht hoch ist, kann er in dichten Absätzen mit der Zeile darüber kollidieren; abgesetzte Formeln vermeiden das. Die passende Version mit Pfeil darunter ist \\underleftrightarrow. Behalten Sie den Unterschied zu \\overline{AB} im Blick, das nur die endliche Strecke bezeichnet.",
  },
  "acute": {
    name: "Akut",
    meaning: "Setzt einen Akut (einen ansteigenden Strich) über ein mathematisches Symbol, gelegentlich als strichähnliche Markierung verwendet.",
    usage: "Mathematische Akzente wie \\acute gibt es vor allem der Vollständigkeit halber; in der Praxis dienen sie als Variablenverzierung, zum Beispiel \\acute{x} für eine transformierte Koordinate in manchen Physiktexten. Für Buchstaben mit Akzent in Wörtern verwenden Sie den Textakzent \\'{e}, wie in café; \\acute funktioniert außerhalb des Mathematikmodus nicht. Die mathematische Version nutzt die kursive Mathematikschrift, sodass \\acute{e} in einer Gleichung nicht zu einem aufrechten Buchstaben mit Akzent im umgebenden Absatz passt. Brauchen Sie lediglich eine Markierung wie bei Ableitungen, ist x' (Strich) weit gebräuchlicher.",
  },
  "grave": {
    name: "Gravis",
    meaning: "Setzt einen Gravis (einen abfallenden Strich) als Variablenverzierung über ein Symbol im Mathematikmodus.",
    usage: "\\grave ist das Gegenstück im Mathematikmodus zum Textakzent \\`{a} aus französischen Wörtern wie voilà. In Gleichungen wird er selten verwendet und dient lediglich als weitere Möglichkeit, verwandte Variablen zu unterscheiden, neben Strichen, Dächern und Tilden. Da er ein mathematischer Akzent ist, setzt er sein Argument in mathematischer Kursivschrift; für ein Wort mit Akzent in einer Gleichung schreiben Sie stattdessen \\text{\\`{a}}. Wenn Sie eine Verzierung für eine neue Variable auswählen, sind den Lesern \\tilde, \\hat oder ein Strich meist vertrauter.",
  },
  "breve": {
    name: "Brevis",
    meaning: "Setzt eine Brevis (einen kleinen schalenförmigen Bogen) über ein Symbol, eine weniger gebräuchliche Variablenverzierung.",
    usage: "In der Mathematik erscheint \\breve{x} als alternative Markierung, wenn Dach, Querstrich und Tilde bereits vergeben sind, zum Beispiel in manchen Arbeiten zur Signalverarbeitung und Statistik für einen abgewandelten Schätzer, sowie in der Notation der Lie-Theorie. Die Brevis ist unten rund, anders als \\check, das spitz ist. Für rumänischen oder türkischen Text (ă, ğ) verwenden Sie den Textakzent \\u{a} statt des mathematischen Befehls. Der Akzent hat eine feste Breite und passt daher nur über einzelne Buchstaben.",
  },
  "check": {
    name: "Hatschek",
    meaning: "Setzt einen Hatschek (Caron), einen kleinen v-förmigen Akzent, über ein Symbol; verwendet vor allem für die Čech-Kohomologie.",
    usage: "Die algebraische Topologie schreibt \\check{H}^n(X) für die Čech-Kohomologie, und manche Texte verwenden \\check{x} für ein duales oder rücktransformiertes Objekt, das Gegenteil eines Dachs. Die V-Form unterscheidet ihn von der runden \\breve und von \\hat, das ein umgekehrtes V ist. Im Text wird ein tschechisches Hatschek wie č mit \\v{c} erzeugt, nicht mit \\check. Der Akzent hat eine feste Breite; im LaTeX-Kern gibt es kein standardmäßiges \\widecheck, daher verwenden Autoren über langen Ausdrücken stattdessen einen Exponenten.",
  },
  "ring": {
    name: "Ring",
    meaning: "Setzt einen kleinen Kreis über ein Symbol, verwendet für das Innere von Mengen und einige Einheitenzeichen.",
    usage: "Die Topologie schreibt mitunter \\mathring{A} für das Innere von A (eine Alternative zu A^\\circ oder \\operatorname{int} A), und die Differentialgeometrie verwendet es für spurfreie Größen oder Referenzgrößen. Für das Ångström-Zeichen im Text verwenden Sie \\AA, für den skandinavischen Buchstaben å \\aa; \\mathring ist nur für den Mathematikmodus gedacht. Es unterscheidet sich von einem hochgestellten \\circ, das rechts oben statt zentriert darüber steht. Der Ring ist für einen einzelnen Buchstaben bemessen. Über den Buchstaben i und j verwenden Sie \\imath oder \\jmath, damit der Ring den Punkt ersetzt.",
  },
  "overbrace": {
    name: "Geschweifte Klammer darüber",
    meaning: "Zeichnet eine waagerechte geschweifte Klammer über einen Ausdruck, mit einer optionalen Beschriftung, die als Exponent angegeben wird.",
    usage: "Mit Klammern darüber beschriftet man Teile einer Formel, zum Beispiel n Kopien in \\overbrace{1 + 1 + \\cdots + 1}^{n}, oder man benennt einen Term in einer Herleitung. Der Exponent nach dem Befehl wird über der Spitze der Klammer platziert, und wenn Sie die Beschriftung in \\text setzen, bleibt sie aufrecht und in gut lesbarer Größe. Die Klammer beansprucht viel Höhe und gehört daher in abgesetzte Formeln; im Fließtext drückt sie die Zeilen auseinander. Kombinieren Sie sie mit \\underbrace am selben Ausdruck, um oben und unten zu beschriften. Für eine Klammer mit seitlicher Beschriftung verwenden Sie stattdessen \\left\\{ ... \\right.",
    example: "\\overbrace{a + a + \\cdots + a}^{n \\text{ mal}} = na",
  },
  "underbrace": {
    name: "Geschweifte Klammer darunter",
    meaning: "Setzt eine geschweifte Klammer unter einen Ausdruck, mit einer Beschriftung, die als Index darunter angegeben wird.",
    usage: "Lehrbücher erklären mit \\underbrace Teile einer Gleichung, etwa indem sie \\underbrace{\\frac{1}{2}mv^2}_{\\text{kinetic}} in einer Energiebilanz markieren oder Faktoren in einem Produkt zählen. Die Beschriftung steht in einem Index direkt nach dem Befehl; verwenden Sie \\text für Wörter und \\scriptstyle-Inhalt für kurze Formeln. Die Klammer streckt sich genau auf die Breite ihres Arguments. Verschachtelte oder überlappende Klammern erfordern Sorgfalt: Sie können einen Teil eines Ausdrucks, der bereits eine Klammer darüber hat, unten einklammern, aber Klammern dürfen sich nicht kreuzen. Wie \\overbrace eignet es sich am besten für abgesetzte Formeln.",
    example: "E = \\underbrace{\\tfrac{1}{2} m v^2}_{\\text{kinetisch}} + mgh",
  },
  "cancel": {
    name: "Durchstreichung",
    meaning: "Streicht einen Ausdruck mit einer diagonalen Linie durch, um in einer Herleitung zu zeigen, dass sich Terme wegkürzen.",
    usage: "Lehrkräfte und Vorlesungsskripte zeigen mit \\cancel Vereinfachungen, zum Beispiel einen Faktor, der sich in einem Bruch kürzt, oder entgegengesetzte Terme, die sich in einer Summe aufheben. Dasselbe Paket bietet \\bcancel (Strich in Backslash-Richtung), \\xcancel (ein X über dem Term) und \\cancelto{0}{x}, das einen Pfeil zu dem Wert zeichnet, gegen den der Term geht. Die Farbe des Strichs lässt sich getrennt von der Textfarbe ändern, was auf Folien hilft. \\cancel funktioniert auch im Textmodus, wird aber meist in Formeln verwendet. Formale Arbeiten zeigen Kürzungen selten auf diese Weise; es ist ein Hilfsmittel für die Lehre.",
  },
  "boxed-formula": {
    name: "Eingerahmte Formel",
    meaning: "Zeichnet einen rechteckigen Rahmen um einen mathematischen Ausdruck, oft um ein Endergebnis hervorzuheben.",
    usage: "Studierende rahmen Endergebnisse ein, und Autoren heben zentrale Identitäten mit \\boxed{E = mc^2} hervor. Der Befehl funktioniert im Mathematikmodus und behält den Inhalt je nach Lage im Display- oder Textstil, anders als \\fbox, das in den Textmodus wechselt und darin $...$ benötigt. In align-Umgebungen setzen Sie \\boxed um eine Seite oder den Inhalt einer ganzen Zeile, aber nicht über den Ausrichtungspunkt & hinweg. Innenabstand und Linienstärke richten sich nach \\fboxsep und \\fboxrule, die Sie lokal anpassen können. Für farbige Rahmen ist \\fcolorbox um eine Inline-Formel der übliche nächste Schritt.",
  },
};

export default text;
