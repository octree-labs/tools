import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** German (route locale `de`). */
const de: IntroLocale = {
  languageTag: "de",
  labels: {
    symbol: "Symbol",
    command: "Befehl",
    use: "Verwendung",
    package: "Paket",
    builtIn: "eingebaut",
    copy: "Kopieren",
  },
  intros: {
    arrows: {
      title: "Pfeile in LaTeX: so setzen Sie einen Pfeil in LaTeX",
      intro: (
        <IntroP>
          Pfeile in LaTeX sind Befehle des Mathematikmodus, die nach ihrer Richtung benannt sind:
          Für einen Pfeil in LaTeX schreiben Sie <Cmd>{"$\\rightarrow$"}</Cmd> für &rarr;,{" "}
          <Cmd>{"$\\leftarrow$"}</Cmd> für &larr; und <Cmd>{"$\\Rightarrow$"}</Cmd> für den
          Doppelpfeil &rArr;. Die Tabelle zeigt die 12 gebräuchlichsten Pfeile mit dem jeweils
          benötigten Paket; die vollständige Liste der Pfeilsymbole folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Pfeile",
      use: {
        "\\rightarrow": "Pfeil nach rechts",
        "\\to": "Abbildung zwischen Mengen, Grenzwerte (x \u2192 \u221e)",
        "\\leftarrow": "Pfeil nach links, Zuweisung",
        "\\leftrightarrow": "Pfeil in beide Richtungen (links-rechts)",
        "\\Rightarrow": "Impliziert (Doppelpfeil)",
        "\\Leftrightarrow": "Genau dann, wenn",
        "\\mapsto": "Abbildungsvorschrift, x \u21a6 x\u00b2",
        "\\longrightarrow": "Langer Pfeil nach rechts",
        "\\uparrow": "Pfeil nach oben",
        "\\downarrow": "Pfeil nach unten",
        "\\hookrightarrow": "Injektion, Inklusion",
        "\\xrightarrow{f}": "Pfeil mit Beschriftung, wächst mit dem Text",
      },
      faqHeading: "Häufige Fragen zu Pfeilen in LaTeX",
      faq: [
        {
          question: "Wie setze ich einen Pfeil in LaTeX?",
          answer:
            "Pfeile sind mathematische Symbole und gehören deshalb in den Mathematikmodus: $\\rightarrow$ (oder die Kurzform $\\to$) ergibt einen Pfeil nach rechts, $\\leftarrow$ einen Pfeil nach links und $\\leftrightarrow$ einen Pfeil in beide Richtungen. Mit großem Anfangsbuchstaben erhalten Sie die doppelt gezogene Variante, etwa \\Rightarrow und \\Leftrightarrow. Keiner dieser Befehle benötigt ein Paket.",
        },
        {
          question: "Wie erzeuge ich einen langen Pfeil in LaTeX?",
          answer:
            "Stellen Sie dem Namen long voran: \\longrightarrow, \\longleftarrow und \\longleftrightarrow, oder \\Longrightarrow und \\Longleftrightarrow für Doppelpfeile, sowie \\longmapsto für einen langen Abbildungspfeil. Soll der Pfeil mit einer Beschriftung mitwachsen, verwenden Sie stattdessen \\xrightarrow{...} aus amsmath.",
        },
        {
          question: "Wie schreibe ich Text über einen Pfeil in LaTeX?",
          answer:
            "Laden Sie amsmath und verwenden Sie \\xrightarrow{Text} oder \\xleftarrow{Text}; der Pfeil wird so lang, dass die Beschriftung passt. Ein optionales Argument fügt Text unter dem Pfeil hinzu: \\xrightarrow[unten]{oben}. Für einen Pfeil fester Länge können Sie auch \\overset{f}{\\rightarrow} schreiben.",
        },
        {
          question: "Wie setze ich einen Doppelpfeil in LaTeX?",
          answer:
            "Verwenden Sie \\Rightarrow für \u21d2, \\Leftarrow für \u21d0 und \\Leftrightarrow für \u21d4. In der Logik liefern \\implies (amsmath) und der eingebaute Befehl \\iff dieselben Pfeile mit größerem Abstand. Für zwei übereinanderliegende Pfeile nutzen Sie \\rightleftarrows (amssymb), für chemische Gleichgewichte \\rightleftharpoons.",
        },
        {
          question: "Wie verwende ich einen Pfeil im Textmodus von LaTeX?",
          answer:
            "Wenn Sie \\rightarrow außerhalb des Mathematikmodus schreiben, erhalten Sie den Fehler \u201eMissing $ inserted\u201c. Schließen Sie den Befehl als $\\rightarrow$ ein oder verwenden Sie die Textmodus-Befehle \\textrightarrow, \\textleftarrow, \\textuparrow und \\textdownarrow, die zum LaTeX-Kern gehören (textcomp) und die Schrift des umgebenden Textes übernehmen.",
        },
      ],
    },
    math: {
      title: "Mathematische Symbole in LaTeX: das Wichtigste",
      intro: (
        <IntroP>
          Mathematische Symbole funktionieren in LaTeX nur im Mathematikmodus. Schließen Sie sie
          daher in <Cmd>{"$...$"}</Cmd> für Formeln im Fließtext oder in <Cmd>{"\\[...\\]"}</Cmd>{" "}
          für eine abgesetzte Gleichung ein. Die alltäglichen Symbole sind eingebaut:{" "}
          <Cmd>{"\\pm"}</Cmd>, <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> und{" "}
          <Cmd>{"\\cdot"}</Cmd> für die Arithmetik, <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>,{" "}
          <Cmd>{"\\geq"}</Cmd> und <Cmd>{"\\approx"}</Cmd> für Vergleiche, dazu{" "}
          <Cmd>{"\\infty"}</Cmd>, <Cmd>{"\\sqrt{x}"}</Cmd> und <Cmd>{"\\frac{a}{b}"}</Cmd>. Hoch-
          und Tiefstellungen setzen Sie mit <Cmd>{"^"}</Cmd> und <Cmd>{"_"}</Cmd>, mit
          geschweiften Klammern, sobald sie mehr als ein Zeichen umfassen: <Cmd>{"x^{2n}"}</Cmd>.
          Zusätzliche Symbole wie <Cmd>{"\\mathbb{R}"}</Cmd> und <Cmd>{"\\therefore"}</Cmd> stammen
          aus amssymb. Die Tabelle zeigt die gebräuchlichsten mathematischen Symbole mit dem
          jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: alltägliche mathematische Symbole",
      use: {
        "\\pm": "Plus-minus",
        "\\times": "Multiplikation (mal)",
        "\\div": "Division",
        "\\cdot": "Mittelpunkt, Multiplikation",
        "\\neq": "Ungleich",
        "\\leq": "Kleiner oder gleich",
        "\\approx": "Ungefähr gleich",
        "\\infty": "Unendlich",
        "\\sqrt{x}": "Quadratwurzel (\\sqrt[n]{x} für die n-te Wurzel)",
        "\\frac{a}{b}": "Bruch",
        "x^{2n}": "Hochstellung (Exponent)",
        "\\mathbb{R}": "Reelle Zahlen",
      },
      faqHeading: "Häufige Fragen zu mathematischen Symbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich mathematische Symbole in LaTeX?",
          answer:
            "Setzen Sie sie in den Mathematikmodus: $...$ für Formeln im Fließtext und \\[...\\] oder eine equation-Umgebung für abgesetzte Formeln, und verwenden Sie den Befehl des Symbols, zum Beispiel $a \\times b \\neq c$. Ein Mathematikbefehl außerhalb des Mathematikmodus führt zum Fehler Missing $ inserted.",
        },
        {
          question: "Welche Pakete brauche ich für mathematische Symbole in LaTeX?",
          answer:
            "Die meisten Symbole sind eingebaut. Fügen Sie \\usepackage{amsmath} für Umgebungen wie align und Befehle wie \\text und \\operatorname hinzu, und \\usepackage{amssymb} für zusätzliche Symbole wie \\mathbb{R}, \\therefore, \\nexists und \\varnothing. mathtools erweitert amsmath um Korrekturen und weitere Werkzeuge.",
        },
        {
          question: "Wie finde ich den LaTeX-Befehl für ein Symbol?",
          answer:
            "Suchen Sie auf dieser Seite oder auf den Kategorieseiten und klicken Sie auf eine Karte, um ihren Befehl zu kopieren. Wenn Sie nur wissen, wie das Symbol aussieht, können Sie es bei Detexify zeichnen und bekommen passende Befehle vorgeschlagen; die Comprehensive LaTeX Symbol List umfasst Tausende von Symbolen.",
        },
      ],
    },
    "set-theory": {
      title: "Mengenlehre-Symbole in LaTeX: Teilmenge, Element, Vereinigung und leere Menge",
      intro: (
        <IntroP>
          Die Symbole der Mengenlehre sind in LaTeX fast alle eingebaut. „Element von“ ist{" "}
          <Cmd>{"\\in"}</Cmd> (∈) und „nicht Element von“ ist <Cmd>{"\\notin"}</Cmd>; „Teilmenge“
          ist <Cmd>{"\\subset"}</Cmd> (⊂) und „Teilmenge oder gleich“ <Cmd>{"\\subseteq"}</Cmd>{" "}
          (⊆); Vereinigung und Schnitt sind <Cmd>{"\\cup"}</Cmd> und <Cmd>{"\\cap"}</Cmd>, die
          Mengendifferenz ist <Cmd>{"\\setminus"}</Cmd> und die leere Menge ist{" "}
          <Cmd>{"\\emptyset"}</Cmd> (∅). Einige Extras benötigen amssymb: die rundere leere Menge{" "}
          <Cmd>{"\\varnothing"}</Cmd>, die echte Teilmenge <Cmd>{"\\subsetneq"}</Cmd> und
          Zahlbereiche wie <Cmd>{"\\mathbb{N}"}</Cmd> und <Cmd>{"\\mathbb{R}"}</Cmd>. Geschweifte
          Klammern müssen maskiert werden, eine Menge schreiben Sie also als{" "}
          <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Symbole der
          Mengenlehre mit dem jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Symbole der Mengenlehre",
      use: {
        "\\in": "Element von",
        "\\notin": "Nicht Element von",
        "\\subset": "Teilmenge",
        "\\subseteq": "Teilmenge oder gleich",
        "\\subsetneq": "Echte Teilmenge (nicht gleich)",
        "\\cup": "Vereinigung",
        "\\cap": "Schnitt",
        "A \\setminus B": "Mengendifferenz",
        "\\emptyset": "Leere Menge (\\varnothing in amssymb)",
        "\\mathbb{R}": "Reelle Zahlen (auch \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
        "\\{ x \\in A \\mid x > 0 \\}": "Mengenbildernotation",
        "\\mathcal{P}(A)": "Potenzmenge",
      },
      faqHeading: "Häufige Fragen zur Mengenlehre in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich „Teilmenge“ in LaTeX?",
          answer:
            "Verwenden Sie \\subset für ⊂ und \\subseteq für ⊆, beide eingebaut: $A \\subseteq B$. Für eine echte Teilmenge, die Gleichheit ausdrücklich ausschließt, bietet amssymb \\subsetneq (⊊). Die Obermengen-Varianten sind \\supset, \\supseteq und \\supsetneq, und \\not\\subset verneint.",
        },
        {
          question: "Wie schreibe ich das Elementzeichen in LaTeX?",
          answer:
            "\\in ergibt ∈, wie in $x \\in A$, und \\notin ergibt ∉. Die gespiegelte Form \\ni (∋) liest sich „enthält als Element“. Alle drei sind eingebaut.",
        },
        {
          question: "Wie schreibe ich die leere Menge in LaTeX?",
          answer:
            "\\emptyset ergibt ∅ und ist eingebaut. Viele Autoren bevorzugen das rundere \\varnothing, das \\usepackage{amssymb} benötigt. Verwenden Sie in keinem Fall \\phi oder \\O: Das sind ein griechischer und ein skandinavischer Buchstabe.",
        },
      ],
    },
    logic: {
      title: "Logiksymbole in LaTeX",
      intro: (
        <>
          <IntroP>
            Die Junktoren der Aussagenlogik sind <Cmd>{"\\land"}</Cmd> (und),{" "}
            <Cmd>{"\\lor"}</Cmd> (oder) und <Cmd>{"\\lnot"}</Cmd> (nicht);{" "}
            <Cmd>{"\\wedge"}</Cmd>, <Cmd>{"\\vee"}</Cmd> und <Cmd>{"\\neg"}</Cmd> sind identische
            Aliasse. Implikation und Äquivalenz schreiben Sie am besten mit{" "}
            <Cmd>{"\\implies"}</Cmd> (aus amsmath) und <Cmd>{"\\iff"}</Cmd>, die um die Pfeile
            herum den Abstand einer Relation einfügen; die schlichten Befehle{" "}
            <Cmd>{"\\Rightarrow"}</Cmd> und <Cmd>{"\\Leftrightarrow"}</Cmd> funktionieren ebenfalls.
            Die Quantoren sind <Cmd>{"\\forall"}</Cmd> und <Cmd>{"\\exists"}</Cmd>, dazu{" "}
            <Cmd>{"\\nexists"}</Cmd> für &bdquo;es gibt kein&ldquo;, und die Konstanten wahr und
            falsch sind <Cmd>{"\\top"}</Cmd> und <Cmd>{"\\bot"}</Cmd>.
          </IntroP>
          <IntroP>
            Beweistheorie und Semantik haben eigene Drehkreuzsymbole: <Cmd>{"\\vdash"}</Cmd>{" "}
            bedeutet &bdquo;beweist&ldquo; bzw. syntaktische Folgerung, <Cmd>{"\\models"}</Cmd>{" "}
            (auch <Cmd>{"\\vDash"}</Cmd>) bedeutet &bdquo;erfüllt&ldquo; bzw. semantische
            Folgerung, und <Cmd>{"\\nvdash"}</Cmd> verneint Ersteres. Die Schlusszeichen{" "}
            <Cmd>{"\\therefore"}</Cmd> und <Cmd>{"\\because"}</Cmd> stammen aus amssymb, ebenso wie{" "}
            <Cmd>{"\\nexists"}</Cmd> und <Cmd>{"\\vDash"}</Cmd>. Logische Äquivalenz zwischen
            Formeln wird meist als <Cmd>{"\\equiv"}</Cmd> geschrieben, das exklusive Oder ist{" "}
            <Cmd>{"\\oplus"}</Cmd> und der Sheffer-Strich (NAND) ist <Cmd>{"\\uparrow"}</Cmd>. Die
            Modaloperatoren <Cmd>{"\\Box"}</Cmd> und <Cmd>{"\\Diamond"}</Cmd> finden Sie auf der
            Seite{" "}
            <IntroLink href="/de/symbols/modal-logic">Symbole der Modallogik</IntroLink>.
          </IntroP>
          <IntroP>
            All das funktioniert nur im Mathematikmodus. Schließen Sie die Symbole daher in{" "}
            <Cmd>{"$...$"}</Cmd> ein und laden Sie <Cmd>{"\\usepackage{amsmath, amssymb}"}</Cmd> in
            der Präambel. Eine typische Formel: <Cmd>{"\\forall x\\, (P(x) \\implies Q(x))"}</Cmd>.
            Wie sich die Symbole mit Mengen, Funktionen und Relationen kombinieren lassen, zeigt
            unser Leitfaden zu{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              mathematischen Ausdrücken in LaTeX
            </IntroLink>
            .
          </IntroP>
        </>
      ),
    },
    physics: {
      title: "Symbole der Quantenmechanik in LaTeX",
      intro: (
        <IntroP>
          Die Symbole der Quantenmechanik, die Physiker am häufigsten schreiben, sind in LaTeX
          alle eingebaut: die reduzierte Planck-Konstante <Cmd>{"\\hbar"}</Cmd>, der Bra{" "}
          <Cmd>{"\\langle \\psi |"}</Cmd> und der Ket <Cmd>{"| \\psi \\rangle"}</Cmd>, Operatoren
          mit Dach wie <Cmd>{"\\hat{H}"}</Cmd>, der adjungierte Operator{" "}
          <Cmd>{"A^\\dagger"}</Cmd>, der Laplace-Operator <Cmd>{"\\nabla^2"}</Cmd> und die
          Zeitableitung <Cmd>{"\\partial_t"}</Cmd>. Für eine kürzere Bra-Ket-Notation ergänzen die
          Pakete braket und physics <Cmd>{"\\bra{}"}</Cmd>, <Cmd>{"\\ket{}"}</Cmd> und{" "}
          <Cmd>{"\\braket{}"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Symbole der
          Quantenphysik mit dem jeweils benötigten Paket; die vollständige Liste der
          Physiksymbole folgt weiter unten.
        </IntroP>
      ),
      use: {
        "\\hbar": "Reduzierte Planck-Konstante (h quer)",
        "\\langle \\psi |": "Bra, mit Grundbefehlen",
        "| \\psi \\rangle": "Ket, mit Grundbefehlen",
        "\\langle \\phi | \\psi \\rangle": "Skalarprodukt (Bra-Ket)",
        "\\bra{\\psi}": "Bra",
        "\\ket{\\psi}": "Ket",
        "\\braket{\\phi|\\psi}": "Skalarprodukt (physics: \\braket{\\phi}{\\psi})",
        "\\hat{H}": "Hamilton-Operator",
        "A^\\dagger": "Hermitesch Adjungierte (Dagger)",
        "\\nabla^2": "Laplace-Operator",
        "\\partial_t \\psi": "Zeitableitung",
        "\\otimes": "Tensorprodukt von Zuständen",
      },
      faqHeading: "Häufige Fragen",
      faq: [
        {
          question: "Wie schreibe ich die Bra-Ket-Notation in LaTeX?",
          answer:
            "Ohne Paket schreiben Sie einen Bra als \\langle \\psi |, einen Ket als | \\psi \\rangle und ein Skalarprodukt als \\langle \\phi | \\psi \\rangle. Mit \\usepackage{braket} können Sie \\bra{\\psi}, \\ket{\\psi} und \\braket{\\phi|\\psi} schreiben; mit \\usepackage{physics} nimmt das Skalarprodukt stattdessen zwei Argumente, \\braket{\\phi}{\\psi}. Laden Sie nur eines der beiden Pakete, da beide diese Befehle definieren.",
        },
        {
          question: "Wie schreibe ich h quer in LaTeX?",
          answer:
            "Die reduzierte Planck-Konstante \u210f ist \\hbar; der Befehl ist eingebaut und wird im Mathematikmodus verwendet: $\\hbar$. Die Schr\u00f6dinger-Gleichung lautet dann i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
        },
        {
          question: "Wie schreibe ich Operatoren und den Dagger in LaTeX?",
          answer:
            "Kennzeichnen Sie Operatoren mit einem Dach, \\hat{H} oder \\hat{p}, und schreiben Sie die hermitesch Adjungierte mit \\dagger als Hochstellung, A^\\dagger. Erwartungswerte sind \\langle \\hat{A} \\rangle, mit dem Paket physics auch \\expval{A}, und Kommutatoren schreiben Sie als [\\hat{x}, \\hat{p}] = i\\hbar.",
        },
      ],
    },
    functions: {
      title: "Funktionsverkettung und Isomorphie in LaTeX",
      intro: (
        <IntroP>
          Die Verkettung von Funktionen ist in LaTeX <Cmd>{"\\circ"}</Cmd>, wie in{" "}
          <Cmd>{"g \\circ f"}</Cmd>, und das Isomorphiezeichen ist <Cmd>{"\\cong"}</Cmd>{" "}
          (&cong;), mit <Cmd>{"\\simeq"}</Cmd> für eine schwächere Äquivalenz; alle drei sind
          eingebaut. Eine Funktion deklarieren Sie mit <Cmd>{"f \\colon A \\to B"}</Cmd>, wobei{" "}
          <Cmd>{"\\colon"}</Cmd> für den richtigen Abstand sorgt, und ihre Vorschrift mit{" "}
          <Cmd>{"\\mapsto"}</Cmd>, wie in <Cmd>{"x \\mapsto x^2"}</Cmd>. Die identische Abbildung
          ist <Cmd>{"\\operatorname{id}"}</Cmd> aus amsmath. Die Tabelle zeigt die
          gebräuchlichsten Befehle für Funktionen und Abbildungen mit dem jeweils benötigten
          Paket; die vollständige Symbolliste folgt weiter unten.
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "Funktion von A nach B",
        "x \\mapsto x^2": "Wird abgebildet auf (Abbildungsvorschrift)",
        "g \\circ f": "Verkettung, g nach f",
        "f^{-1}": "Umkehrfunktion",
        "\\cong": "Isomorph zu",
        "\\simeq": "Homotopieäquivalent, schwache Isomorphie",
        "\\xrightarrow{\\sim}": "Isomorphiepfeil",
        "\\operatorname{id}_A": "Identische Abbildung",
        "\\hookrightarrow": "Injektion, Inklusion",
        "\\twoheadrightarrow": "Surjektion",
        "f|_A": "Einschränkung auf A",
      },
      faqHeading: "Häufige Fragen",
      faq: [
        {
          question: "Wie schreibe ich die Verkettung von Funktionen in LaTeX?",
          answer:
            "Verwenden Sie das eingebaute \\circ: $g \\circ f$ ergibt g ∘ f, gelesen \u201eg nach f\u201c. Für die Vorschrift schreiben Sie (g \\circ f)(x) = g(f(x)). Verwenden Sie kein kleines o und kein \\cdot, denn beide haben die falsche Größe und den falschen Abstand.",
        },
        {
          question: "Wie schreibe ich das Isomorphiezeichen in LaTeX?",
          answer:
            "Das übliche Isomorphiezeichen ≅ ist das eingebaute \\cong: $G \\cong H$. Für eine Homotopieäquivalenz oder einen schwächeren Begriff verwenden Sie \\simeq (≃), und für einen Pfeil, der ein Isomorphismus ist, \\xrightarrow{\\sim} aus amsmath oder \\cong über einem Pfeil mit \\xrightarrow{\\cong}.",
        },
        {
          question: "Wie schreibe ich f: A → B in LaTeX?",
          answer:
            "Schreiben Sie f \\colon A \\to B. Der Befehl \\colon erzeugt den Abstand eines Satzzeichens; ein gewöhnlicher Doppelpunkt wird wie eine Relation gesetzt und lässt vor A zu viel Platz. Für die Vorschrift verwenden Sie \\mapsto, wie in x \\mapsto x^2.",
        },
      ],
    },
    chemistry: {
      title: "Chemiesymbole in LaTeX: Reaktionspfeile, Gleichgewicht und Formeln",
      intro: (
        <IntroP>
          Bei Chemiesymbolen in LaTeX erledigt das Paket mhchem fast die ganze Arbeit:{" "}
          <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> setzt eine vollständige Reaktion mit aufrechten
          Elementsymbolen, Indizes und Reaktionspfeil. Ohne mhchem ist der Reaktionspfeil{" "}
          <Cmd>{"\\rightarrow"}</Cmd>, das Gleichgewichtszeichen ist{" "}
          <Cmd>{"\\rightleftharpoons"}</Cmd>, und Formeln schreiben Sie im Mathematikmodus als{" "}
          <Cmd>{"\\mathrm{H_2O}"}</Cmd>, damit die Elementbuchstaben nicht kursiv erscheinen.
          Reaktionsbedingungen setzen Sie mit <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> aus amsmath
          über einen mitwachsenden Pfeil. Die Tabelle zeigt die gebräuchlichsten Chemiesymbole
          mit dem jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Reaktionen, Pfeile und Formeln",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "Vollständige Reaktion",
        "\\ce{A <=> B}": "Gleichgewicht in mhchem",
        "\\rightarrow": "Ergibt (Reaktionspfeil)",
        "\\rightleftharpoons": "Gleichgewichtszeichen (Harpunen)",
        "\\xrightarrow{\\Delta}": "Pfeil mit Wärme oder Bedingungen darüber",
        "\\mathrm{H_2O}": "Chemische Formel im Mathematikmodus",
        "\\mathrm{Na^+}": "Ionenladung",
        "{}^{14}_{6}\\mathrm{C}": "Isotop (Massenzahl und Ordnungszahl)",
        "\\Delta H^\\circ": "Standardreaktionsenthalpie",
        "\\uparrow": "Gasentwicklung",
        "\\downarrow": "Niederschlag",
        "\\ce{HC#CH}": "Dreifachbindung (= für eine Doppelbindung)",
      },
      faqHeading: "Häufige Fragen zur Chemie in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich den Reaktionspfeil in LaTeX?",
          answer:
            "Im Mathematikmodus ist der Reaktionspfeil \\rightarrow, für einen längeren Pfeil \\longrightarrow. Mit mhchem schreiben Sie -> innerhalb von \\ce{...}, zum Beispiel \\ce{A + B -> C}. Bedingungen über dem Pfeil setzen Sie mit \\xrightarrow{\\Delta} aus amsmath oder mit ->[\\Delta] innerhalb von \\ce.",
        },
        {
          question: "Wie schreibe ich das Gleichgewichtszeichen in LaTeX?",
          answer:
            "Das Gleichgewichtszeichen ⇌ ist das eingebaute \\rightleftharpoons: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. In mhchem schreiben Sie <=> innerhalb von \\ce{...}; dort gibt es außerdem <=>> und <<=> für Gleichgewichte, die nach rechts oder links verschoben sind.",
        },
        {
          question: "Wie schreibe ich chemische Formeln mit Indizes in LaTeX?",
          answer:
            "Verwenden Sie \\ce{H2SO4} aus mhchem; das Paket stellt die Ziffern tief und lässt die Buchstaben aufrecht. Ohne mhchem schreiben Sie \\mathrm{H_2SO_4} im Mathematikmodus; ein einfaches H_2SO_4 würde die Buchstaben kursiv setzen, als wären es Variablen.",
        },
      ],
    },
    probability: {
      title: "Symbole für Wahrscheinlichkeit und Statistik in LaTeX",
      intro: (
        <IntroP>
          Das Wahrscheinlichkeitssymbol in LaTeX ist <Cmd>{"\\Pr"}</Cmd> oder{" "}
          <Cmd>{"\\mathbb{P}"}</Cmd>, und der Erwartungswertoperator ist{" "}
          <Cmd>{"\\mathbb{E}[X]"}</Cmd>. Die Tabelle zeigt die acht gebräuchlichsten Befehle mit
          dem jeweils benötigten Paket; die vollständige Liste der Symbole für Wahrscheinlichkeit
          und Statistik folgt weiter unten.
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "Wahrscheinlichkeitsoperator (aufrechtes Pr)",
        "\\mathbb{P}(A)": "Wahrscheinlichkeitssymbol, Blackboard Bold",
        "\\mathbb{E}[X]": "Erwartungswertoperator",
        "\\operatorname{Var}(X)": "Varianz",
        "\\operatorname{Cov}(X, Y)": "Kovarianz",
        "P(A \\mid B)": "Bedingte Wahrscheinlichkeit",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "Ist verteilt wie (normal)",
        "\\binom{n}{k}": "Binomialkoeffizient",
      },
      faqHeading: "Häufige Fragen",
      faq: [
        {
          question: "Wie schreibe ich das Wahrscheinlichkeitssymbol in LaTeX?",
          answer:
            "Verwenden Sie den eingebauten Operator \\Pr, wie in \\Pr(A), für ein aufrechtes Pr mit Operatorabstand, oder das Blackboard-Bold-Zeichen \\mathbb{P}(A) mit \\usepackage{amssymb}. Für die bedingte Wahrscheinlichkeit schreiben Sie P(A \\mid B); \\mid setzt den senkrechten Strich mit dem richtigen Abstand, ein einfaches | tut das nicht.",
        },
        {
          question: "Wie schreibe ich den Erwartungswertoperator in LaTeX?",
          answer:
            "Schreiben Sie \\mathbb{E}[X] (amssymb) für ein E in Blackboard Bold oder \\operatorname{E}[X] (amsmath) für ein aufrechtes E. Zur Wiederverwendung deklarieren Sie ihn einmal in der Präambel mit \\DeclareMathOperator{\\E}{\\mathbb{E}} und schreiben dann \\E[X].",
        },
        {
          question: "Wie schreibe ich die Varianz in LaTeX?",
          answer:
            "Für die Varianz gibt es keinen eingebauten Befehl. Schreiben Sie daher \\operatorname{Var}(X) mit amsmath, oder deklarieren Sie \\DeclareMathOperator{\\Var}{Var} in der Präambel und verwenden Sie \\Var(X). Die Standardabweichung ist \\sigma, die Varianz lässt sich auch als \\sigma^2 schreiben.",
        },
      ],
    },
    greek: {
      title: "Griechische Buchstaben in LaTeX: das vollständige griechische Alphabet",
      intro: (
        <IntroP>
          Griechische Buchstaben schreiben Sie in LaTeX im Mathematikmodus mit einem Backslash
          und dem Namen des Buchstabens: <Cmd>{"\\alpha"}</Cmd>, <Cmd>{"\\beta"}</Cmd>,{" "}
          <Cmd>{"\\gamma"}</Cmd>, <Cmd>{"\\pi"}</Cmd>. Für die Großbuchstaben schreiben Sie den
          Namen mit großem Anfangsbuchstaben, etwa <Cmd>{"\\Gamma"}</Cmd>,{" "}
          <Cmd>{"\\Delta"}</Cmd> und <Cmd>{"\\Omega"}</Cmd>; Großbuchstaben, die wie lateinische
          aussehen, etwa Alpha und Beta, haben keinen Befehl und werden als A und B geschrieben.
          Einige Buchstaben haben Varianten: <Cmd>{"\\varepsilon"}</Cmd>,{" "}
          <Cmd>{"\\vartheta"}</Cmd>, <Cmd>{"\\varphi"}</Cmd> und <Cmd>{"\\varsigma"}</Cmd>. Alle
          sind eingebaut. Die Tabelle zeigt die gebräuchlichsten griechischen Buchstaben; das
          vollständige griechische Alphabet in LaTeX folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten griechischen Buchstaben",
      use: {
        "\\alpha": "Alpha",
        "\\beta": "Beta",
        "\\gamma": "Gamma (groß \\Gamma)",
        "\\delta": "Delta (groß \\Delta)",
        "\\epsilon": "Epsilon ϵ (\\varepsilon für ε)",
        "\\theta": "Theta (Variante \\vartheta, groß \\Theta)",
        "\\lambda": "Lambda (groß \\Lambda)",
        "\\mu": "My",
        "\\pi": "Pi (groß \\Pi)",
        "\\sigma": "Sigma (groß \\Sigma)",
        "\\phi": "Phi ϕ (\\varphi für φ, groß \\Phi)",
        "\\omega": "Omega (groß \\Omega)",
      },
      faqHeading: "Häufige Fragen zu griechischen Buchstaben in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich griechische Buchstaben in LaTeX?",
          answer:
            "Schreiben Sie im Mathematikmodus einen Backslash und den Namen des Buchstabens: $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. Für den Großbuchstaben schreiben Sie den ersten Buchstaben groß: \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. Ein Paket ist nicht nötig.",
        },
        {
          question: "Warum gibt es in LaTeX keinen Befehl \\Alpha?",
          answer:
            "Die Großbuchstaben Alpha, Beta, Epsilon, Zeta, Eta, Iota, Kappa, My, Ny, Omikron, Rho, Tau und Chi sehen genauso aus wie lateinische Buchstaben, deshalb definiert LaTeX sie nicht; schreiben Sie A, B, E usw. Das kleine Omikron ist entsprechend einfach o.",
        },
        {
          question: "Wie setze ich einen griechischen Buchstaben fett in LaTeX?",
          answer:
            "Verwenden Sie \\boldsymbol{\\alpha} aus amsmath oder \\bm{\\alpha} aus dem Paket bm. \\mathbf wirkt nur auf lateinische Buchstaben, Ziffern und griechische Großbuchstaben, daher bleibt das Alpha bei \\mathbf{\\alpha} unverändert.",
        },
      ],
    },
    quantifiers: {
      title: "Quantoren in LaTeX: für alle, es existiert und Element von",
      intro: (
        <IntroP>
          Die Quantoren in LaTeX sind <Cmd>{"\\forall"}</Cmd> (für alle, ∀) und{" "}
          <Cmd>{"\\exists"}</Cmd> (es existiert, ∃), beide eingebaut; <Cmd>{"\\nexists"}</Cmd> für
          „es existiert kein“ stammt aus amssymb, und eindeutige Existenz schreibt man{" "}
          <Cmd>{"\\exists!"}</Cmd>. Quantifizierte Aussagen kombinieren sie meist mit dem
          Elementzeichen <Cmd>{"\\in"}</Cmd> und einem Trenner wie Komma oder Doppelpunkt:{" "}
          <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. Die Negation ist{" "}
          <Cmd>{"\\neg"}</Cmd>, Implikation und Äquivalenz sind <Cmd>{"\\implies"}</Cmd> und{" "}
          <Cmd>{"\\iff"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Quantorensymbole mit dem
          jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Quantoren und Junktoren",
      use: {
        "\\forall": "Für alle",
        "\\exists": "Es existiert",
        "\\nexists": "Es existiert kein",
        "\\exists!": "Es existiert genau ein",
        "\\forall x \\in A": "Für alle x in A",
        "\\in": "Element von",
        "\\notin": "Nicht Element von",
        "\\neg": "Nicht",
        "\\land": "Und",
        "\\lor": "Oder",
        "\\implies": "Impliziert",
        "\\iff": "Genau dann, wenn",
      },
      faqHeading: "Häufige Fragen zu Quantoren in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich „für alle“ in LaTeX?",
          answer:
            "Verwenden Sie \\forall im Mathematikmodus: $\\forall x \\in \\mathbb{R}$ ergibt ∀x ∈ ℝ. Der Befehl ist eingebaut. Setzen Sie nach der gebundenen Variablen einen Trenner, etwa \\forall x,\\ P(x) oder \\forall x : P(x), damit sich die Formel klar lesen lässt.",
        },
        {
          question: "Wie schreibe ich „es existiert“ und „es existiert kein“ in LaTeX?",
          answer:
            "„Es existiert“ ist das eingebaute \\exists (∃). „Es existiert kein“ ist \\nexists (∄) und benötigt \\usepackage{amssymb}; \\not\\exists funktioniert auch ohne Paket, sieht aber weniger sauber aus. Für eindeutige Existenz schreiben Sie \\exists!.",
        },
        {
          question: "Wie schreibe ich „sodass“ in LaTeX?",
          answer:
            "In der Mengenbildernotation verwenden Sie einen senkrechten Strich oder einen Doppelpunkt: \\{ x \\in A \\mid x > 0 \\} oder \\{ x : x > 0 \\}; \\mid sorgt für den richtigen Abstand. In einer quantifizierten Aussage ist ein Komma oder \\text{ s.d. } üblich, wie in \\exists x \\in A \\text{ s.d. } x > 0.",
        },
      ],
    },
    boolean: {
      title: "Symbole der booleschen Algebra in LaTeX: AND, OR und XOR",
      intro: (
        <IntroP>
          Die Symbole der booleschen Algebra in LaTeX verwenden die logischen Junktoren: Das
          AND-Symbol ist <Cmd>{"\\land"}</Cmd> (&and;), das OR-Symbol ist <Cmd>{"\\lor"}</Cmd>{" "}
          (&or;) und NOT ist <Cmd>{"\\lnot"}</Cmd> (&not;). XOR ist in LaTeX{" "}
          <Cmd>{"\\oplus"}</Cmd> (&oplus;) oder <Cmd>{"\\veebar"}</Cmd> aus amssymb. Implikation
          und Äquivalenz sind <Cmd>{"\\Rightarrow"}</Cmd> und <Cmd>{"\\iff"}</Cmd>, die
          Konstanten wahr und falsch sind <Cmd>{"\\top"}</Cmd> und <Cmd>{"\\bot"}</Cmd>, und die
          Quantoren sind <Cmd>{"\\forall"}</Cmd> und <Cmd>{"\\exists"}</Cmd>. Alle gehören in den
          Mathematikmodus. Die Tabelle zeigt die gebräuchlichsten Befehle mit dem jeweils
          benötigten Paket; die vollständige Liste der Logikgatter-Symbole folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: boolesche Operationen",
      use: {
        "\\land": "AND, Konjunktion (Alias \\wedge)",
        "\\lor": "OR, Disjunktion (Alias \\vee)",
        "\\lnot": "NOT, Negation (Alias \\neg)",
        "\\overline{A}": "NOT, Überstrich-Notation",
        "\\oplus": "XOR (exklusives Oder)",
        "\\veebar": "XOR, Logik-Schreibweise",
        "\\barwedge": "NAND",
        "\\Rightarrow": "Impliziert",
        "\\iff": "Genau dann, wenn (Äquivalenz)",
        "\\top": "Wahr, 1",
        "\\bot": "Falsch, 0",
        "\\forall x \\, \\exists y": "Für alle, es existiert",
      },
      faqHeading: "Häufige Fragen zu booleschen Symbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich die Symbole AND und OR in LaTeX?",
          answer:
            "AND (∧) ist \\land oder der Alias \\wedge, OR (∨) ist \\lor oder \\vee. Beide sind eingebaut und gehören in den Mathematikmodus: $A \\land B$, $A \\lor B$. NOT ist \\lnot oder \\neg. In der Schaltungsnotation können Sie auch A \\cdot B für AND, A + B für OR und \\overline{A} für NOT schreiben.",
        },
        {
          question: "Wie schreibe ich XOR in LaTeX?",
          answer:
            "Verwenden Sie das eingebaute \\oplus (⊕): $A \\oplus B$. Logiklehrbücher verwenden manchmal \\veebar (⊻), das \\usepackage{amssymb} benötigt. XNOR wird meist als \\odot oder \\overline{A \\oplus B} geschrieben.",
        },
        {
          question: "Welches Paket brauche ich für Symbole der booleschen Algebra in LaTeX?",
          answer:
            "Für die üblichen keines: \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall und \\exists sind eingebaut. Laden Sie amssymb für \\veebar und \\barwedge und amsmath für \\implies.",
        },
      ],
    },
    brackets: {
      title: "Klammern in LaTeX: geschweifte und spitze Klammern, Gaußklammern und Normen",
      intro: (
        <IntroP>
          Begrenzer in LaTeX gibt es in zwei Arten: solche, die Sie direkt tippen, wie{" "}
          <Cmd>{"("}</Cmd>, <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> und <Cmd>{"]"}</Cmd>, und solche,
          die einen Befehl brauchen, etwa <Cmd>{"\\{"}</Cmd> und <Cmd>{"\\}"}</Cmd> für geschweifte
          Klammern, <Cmd>{"\\langle"}</Cmd> und <Cmd>{"\\rangle"}</Cmd> für spitze Klammern,{" "}
          <Cmd>{"\\lfloor"}</Cmd> und <Cmd>{"\\rfloor"}</Cmd> für die Abrundungsfunktion sowie{" "}
          <Cmd>{"\\lVert"}</Cmd> und <Cmd>{"\\rVert"}</Cmd> für eine Norm. Stellen Sie einem
          beliebigen Paar <Cmd>{"\\left"}</Cmd> und <Cmd>{"\\right"}</Cmd> voran, passt LaTeX die
          Größe der Begrenzer an den Inhalt an, etwa an einen Bruch. Doppelte eckige Klammern
          benötigen das Paket stmaryrd. Die Tabelle zeigt die gebräuchlichsten Klammern und
          Begrenzer mit dem jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Klammern",
      use: {
        "\\left( \\frac{a}{b} \\right)": "Runde Klammern, die mit dem Inhalt wachsen",
        "\\{ x \\}": "Geschweifte Klammern (maskiert)",
        "\\langle x \\rangle": "Spitze Klammern, Skalarprodukt",
        "\\lfloor x \\rfloor": "Abrundungsfunktion (Gaußklammer)",
        "\\lceil x \\rceil": "Aufrundungsfunktion",
        "\\lvert x \\rvert": "Betrag",
        "\\lVert x \\rVert": "Norm",
        "\\llbracket x \\rrbracket": "Doppelte eckige Klammern",
        "\\bigl( x \\bigr)": "Manuelle Größen: \\big, \\Big, \\bigg, \\Bigg",
        "[a, b)": "Halboffenes Intervall",
        "\\underbrace{a + b}_{n}": "Geschweifte Klammer unter einem Ausdruck (\\overbrace darüber)",
      },
      faqHeading: "Häufige Fragen zu Klammern in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich geschweifte Klammern in LaTeX?",
          answer:
            "Geschweifte Klammern sind die Gruppierungszeichen von LaTeX, daher wird ein einfaches { oder } nicht gedruckt. Maskieren Sie sie: \\{ und \\} funktionieren im Text- und im Mathematikmodus, zum Beispiel $\\{1, 2, 3\\}$. Verwenden Sie \\left\\{ und \\right\\} für Klammern, die mit dem Inhalt wachsen; \\lbrace und \\rbrace sind benannte Alternativen.",
        },
        {
          question: "Wie schreibe ich spitze Klammern in LaTeX?",
          answer:
            "Verwenden Sie \\langle und \\rangle, wie in $\\langle u, v \\rangle$. Nehmen Sie nicht die Tasten < und >: Das sind Relationszeichen mit anderer Form und anderem Abstand. Für hohen Inhalt schreiben Sie \\left\\langle ... \\right\\rangle.",
        },
        {
          question: "Wie schreibe ich doppelte eckige Klammern in LaTeX?",
          answer:
            "Laden Sie \\usepackage{stmaryrd} und schreiben Sie \\llbracket x \\rrbracket für die doppelten eckigen Klammern ⟦x⟧, die in der Semantik und für ganzzahlige Intervalle verwendet werden. Ohne das Paket ahmt [\\![ x ]\\!] sie nach, indem zwei Klammern mit einem negativen schmalen Abstand zusammengeschoben werden.",
        },
      ],
    },
    calculus: {
      title: "Analysis-Symbole in LaTeX: Ableitungen, Integrale und Grenzwerte",
      intro: (
        <IntroP>
          Die grundlegenden Symbole der Analysis sind in LaTeX alle eingebaut. Eine Ableitung ist
          in LaTeX ein Bruch, <Cmd>{"\\frac{dy}{dx}"}</Cmd>, oder ein Strich,{" "}
          <Cmd>{"f'(x)"}</Cmd>; eine partielle Ableitung verwendet <Cmd>{"\\partial"}</Cmd>, wie
          in <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>; ein Integral ist{" "}
          <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>; und ein Grenzwert ist{" "}
          <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Mehrfachintegrale wie <Cmd>{"\\iint"}</Cmd> und{" "}
          <Cmd>{"\\iiint"}</Cmd> stammen aus amsmath, und das Paket physics ergänzt Kurzbefehle
          wie <Cmd>{"\\dv"}</Cmd> und <Cmd>{"\\pdv"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten
          Analysis-Symbole mit dem jeweils benötigten Paket; die vollständige Liste folgt weiter
          unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Ableitungen, Integrale und Grenzwerte",
      use: {
        "\\frac{dy}{dx}": "Ableitung (Leibniz-Notation)",
        "f'(x)": "Ableitung (Strichnotation); f''(x) für die zweite",
        "\\frac{d^2 y}{dx^2}": "Zweite Ableitung",
        "\\frac{\\partial f}{\\partial x}": "Partielle Ableitung",
        "\\dot{x}": "Zeitableitung (Newtons Punkt); \\ddot{x} für die zweite",
        "\\int_a^b f(x)\\,dx": "Bestimmtes Integral",
        "\\iint_D f\\,dA": "Doppelintegral (\\iiint für das Dreifachintegral)",
        "\\oint_C": "Kurvenintegral über eine geschlossene Kurve",
        "\\lim_{x \\to 0}": "Grenzwert",
        "\\nabla f": "Gradient",
        "\\dv{f}{x}": "Kurzbefehl für die Ableitung",
        "\\pdv{f}{x}": "Kurzbefehl für die partielle Ableitung",
      },
      faqHeading: "Häufige Fragen zu Analysis-Symbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich eine Ableitung in LaTeX?",
          answer:
            "Schreiben Sie sie als Bruch im Mathematikmodus: $\\frac{dy}{dx}$ für dy/dx und $\\frac{d^2y}{dx^2}$ für die zweite Ableitung. Die Strichnotation ist f'(x) und f''(x), Newtons Punktnotation \\dot{x} und \\ddot{x}. Alle sind eingebaut; das Paket physics ergänzt \\dv{y}{x} als Kurzform.",
        },
        {
          question: "Wie schreibe ich eine partielle Ableitung in LaTeX?",
          answer:
            "Verwenden Sie das eingebaute Symbol \\partial in einem Bruch: $\\frac{\\partial f}{\\partial x}$, und $\\frac{\\partial^2 f}{\\partial x \\partial y}$ für eine gemischte zweite Ableitung. Mit \\usepackage{physics} liefern \\pdv{f}{x} und \\pdv{f}{x}{y} dasselbe Ergebnis.",
        },
        {
          question: "Wie schreibe ich ein Integral mit Grenzen in LaTeX?",
          answer:
            "Verwenden Sie \\int mit Tief- und Hochstellung: $\\int_a^b f(x)\\,dx$. Fügen Sie \\limits hinzu (\\int\\limits_a^b), um die Grenzen über und unter das Zeichen zu setzen. Für Doppel- und Dreifachintegrale laden Sie amsmath und verwenden \\iint und \\iiint, die die Zeichen richtig setzen; \\oint ergibt ein Integral über eine geschlossene Kurve.",
        },
      ],
    },
    combinatorics: {
      title: "Binomialkoeffizient und Fakultät in LaTeX: Symbole der Kombinatorik",
      intro: (
        <IntroP>
          Für „n über k“ in LaTeX laden Sie amsmath und verwenden <Cmd>{"\\binom{n}{k}"}</Cmd>; der
          Befehl setzt den Binomialkoeffizienten in runde Klammern und passt seine Größe an
          Fließtext- oder abgesetzte Formeln an; <Cmd>{"\\dbinom"}</Cmd> und{" "}
          <Cmd>{"\\tbinom"}</Cmd> erzwingen die große bzw. kleine Größe. Eine Fakultät braucht in
          LaTeX keinen Befehl: <Cmd>{"n!"}</Cmd> ist der Buchstabe mit Ausrufezeichen, die Formel
          für den Binomialkoeffizienten lautet also <Cmd>{"\\frac{n!}{k!(n-k)!}"}</Cmd>. Die
          Tabelle zeigt die gebräuchlichsten Befehle der Kombinatorik mit dem jeweils benötigten
          Paket; die vollständige Symbolliste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Binomialkoeffizienten und Fakultäten",
      use: {
        "\\binom{n}{k}": "n über k (Binomialkoeffizient)",
        "\\dbinom{n}{k}": "Binomialkoeffizient in Displaygröße, auch im Fließtext",
        "\\tbinom{n}{k}": "Binomialkoeffizient in Textgröße, auch in abgesetzten Formeln",
        "{n \\choose k}": "\\choose aus Plain TeX (mit amsmath vermeiden)",
        "n!": "Fakultät",
        "n!!": "Doppelfakultät",
        "\\frac{n!}{k!(n-k)!}": "Formel des Binomialkoeffizienten",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "Multinomialkoeffizient",
        "P(n, k) = \\frac{n!}{(n-k)!}": "Variationen (k-Permutationen aus n Elementen)",
        "n^{\\underline{k}}": "Fallende Faktorielle",
      },
      faqHeading: "Häufige Fragen zu Symbolen der Kombinatorik in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich „n über k“ in LaTeX?",
          answer:
            "Laden Sie amsmath und schreiben Sie \\binom{n}{k}; das setzt n über k in runde Klammern und passt die Größe an Fließtext- oder abgesetzte Formeln an. Verwenden Sie \\dbinom{n}{k}, um die große Displaygröße zu erzwingen, und \\tbinom{n}{k} für die kleine Textgröße. Die Plain-TeX-Form {n \\choose k} funktioniert ebenfalls, wird von amsmath aber nicht empfohlen.",
        },
        {
          question: "Wie schreibe ich eine Fakultät in LaTeX?",
          answer:
            "Eine Fakultät braucht keinen Befehl: Schreiben Sie n! im Mathematikmodus. Die Doppelfakultät ist n!!, und einen Ausdruck setzen Sie in Klammern, wie in (n+1)!. Die Formel des Binomialkoeffizienten lautet \\frac{n!}{k!(n-k)!}.",
        },
        {
          question: "Wie schreibe ich einen Multinomialkoeffizienten in LaTeX?",
          answer:
            "Verwenden Sie \\binom erneut, mit einer Liste im unteren Argument: \\binom{n}{k_1, k_2, \\ldots, k_m}. Oder schreiben Sie ihn ausführlich als \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
        },
      ],
    },
    complex: {
      title: "Symbol für komplexe Zahlen und komplexe Konjugation in LaTeX",
      intro: (
        <IntroP>
          Das Symbol für die komplexen Zahlen ist das C in Blackboard Bold, &#8450;, das Sie in
          LaTeX mit dem Paket amssymb als <Cmd>{"\\mathbb{C}"}</Cmd> schreiben. Die komplex
          Konjugierte ist in LaTeX <Cmd>{"\\bar{z}"}</Cmd> für einen einzelnen Buchstaben oder{" "}
          <Cmd>{"\\overline{z}"}</Cmd> für einen ganzen Ausdruck, in der Physik schreibt man{" "}
          <Cmd>{"z^*"}</Cmd>. Real- und Imaginärteil sind <Cmd>{"\\Re"}</Cmd> und{" "}
          <Cmd>{"\\Im"}</Cmd> oder in aufrechter Form <Cmd>{"\\operatorname{Re}"}</Cmd>; der Betrag
          ist <Cmd>{"|z|"}</Cmd> und das Argument <Cmd>{"\\arg z"}</Cmd>. Die Tabelle zeigt die
          gebräuchlichsten Symbole für komplexe Zahlen mit dem jeweils benötigten Paket; die
          vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Notation für komplexe Zahlen",
      use: {
        "\\mathbb{C}": "Menge der komplexen Zahlen",
        "z = a + bi": "Algebraische Form",
        "\\bar{z}": "Komplex Konjugierte (ein Buchstabe)",
        "\\overline{z + w}": "Konjugierte eines Ausdrucks",
        "z^*": "Konjugierte, Physik-Notation",
        "\\Re(z)": "Realteil, Fraktur-ℜ",
        "\\Im(z)": "Imaginärteil, Fraktur-ℑ",
        "\\operatorname{Re}(z)": "Realteil, aufrecht (ebenso Im)",
        "|z|": "Betrag (Modul)",
        "\\arg z": "Argument",
        "re^{i\\theta}": "Polarform",
        "\\mathrm{i}": "Aufrechte imaginäre Einheit",
      },
      faqHeading: "Häufige Fragen zu komplexen Zahlen in LaTeX",
      faq: [
        {
          question: "Was ist das Symbol für die komplexen Zahlen?",
          answer:
            "Die Menge der komplexen Zahlen ist das C in Blackboard Bold, ℂ. In LaTeX schreiben Sie \\mathbb{C} mit \\usepackage{amssymb} (oder amsfonts), wie in z \\in \\mathbb{C}. Die reellen Zahlen sind \\mathbb{R} im selben Stil.",
        },
        {
          question: "Wie schreibe ich die komplex Konjugierte in LaTeX?",
          answer:
            "Verwenden Sie \\bar{z} für einen einzelnen Buchstaben und \\overline{z + w} für einen längeren Ausdruck, da sich \\overline über das gesamte Argument erstreckt. In Physik und Technik schreibt man oft z^*, und die konjugiert Transponierte einer Matrix ist A^\\dagger oder A^*.",
        },
        {
          question: "Wie schreibe ich Real- und Imaginärteil in LaTeX?",
          answer:
            "Die eingebauten Befehle \\Re und \\Im setzen die Frakturbuchstaben ℜ und ℑ. Für die aufrechten Formen Re und Im, die die meisten heutigen Texte verwenden, schreiben Sie \\operatorname{Re}(z) und \\operatorname{Im}(z) mit amsmath, oder Sie definieren die Originale einmalig mit \\renewcommand{\\Re}{\\operatorname{Re}} um.",
        },
      ],
    },
    "computer-science": {
      title: "Informatik-Symbole in LaTeX: O-Notation, Gaußklammern und Algorithmen-Notation",
      intro: (
        <IntroP>
          Die meisten Informatik-Symbole in LaTeX sind gewöhnliche Mathematikbefehle. Die
          O-Notation ist in LaTeX <Cmd>{"O(n \\log n)"}</Cmd> oder, in vielen Artikeln, das
          kalligrafische <Cmd>{"\\mathcal{O}(n)"}</Cmd>; verwandt sind <Cmd>{"\\Omega(n)"}</Cmd>,{" "}
          <Cmd>{"\\Theta(n)"}</Cmd> und das kleine o, <Cmd>{"o(n)"}</Cmd>. Ab- und Aufrunden
          schreiben Sie mit <Cmd>{"\\lfloor x \\rfloor"}</Cmd> und{" "}
          <Cmd>{"\\lceil x \\rceil"}</Cmd>, XOR ist <Cmd>{"\\oplus"}</Cmd>, die Zuweisung im
          Pseudocode ist <Cmd>{"\\gets"}</Cmd>, und eine Definition mit := wird mit{" "}
          <Cmd>{"\\coloneqq"}</Cmd> aus mathtools sauberer. Die Tabelle zeigt die
          gebräuchlichsten Informatik-Symbole mit dem jeweils benötigten Paket; die vollständige
          Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Komplexität, Runden und Algorithmen",
      use: {
        "O(n \\log n)": "Groß-O (obere Schranke)",
        "\\mathcal{O}(n)": "Groß-O, kalligrafisch",
        "\\Omega(n)": "Groß-Omega (untere Schranke)",
        "\\Theta(n^2)": "Groß-Theta (scharfe Schranke)",
        "o(n)": "Klein-o",
        "\\lfloor \\log_2 n \\rfloor": "Abgerundeter Logarithmus zur Basis 2",
        "\\lceil n/2 \\rceil": "Aufrundungsfunktion",
        "a \\bmod n": "Modulo als binärer Operator",
        "\\oplus": "XOR",
        "x \\gets x + 1": "Zuweisung im Pseudocode",
        "\\coloneqq": "Definiert als (:=)",
        "\\{0,1\\}^*": "Alle Binärwörter (Kleene-Stern)",
      },
      faqHeading: "Häufige Fragen zu Informatik-Symbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich die O-Notation in LaTeX?",
          answer:
            "Schreiben Sie O(n) im Mathematikmodus: $O(n \\log n)$. Viele Autoren bevorzugen die kalligrafische Form $\\mathcal{O}(n)$, die kein Paket benötigt. Groß-Omega und Groß-Theta verwenden die griechischen Großbuchstaben \\Omega(n) und \\Theta(n), Klein-o ist o(n). Schreiben Sie \\log statt log, damit der Funktionsname aufrecht erscheint.",
        },
        {
          question: "Wie schreibe ich Ab- und Aufrundungsfunktion in LaTeX?",
          answer:
            "Verwenden Sie die eingebauten Begrenzer \\lfloor x \\rfloor für ⌊x⌋ und \\lceil x \\rceil für ⌈x⌉. Bei hohem Inhalt stellen Sie \\left und \\right voran, wie in \\left\\lfloor \\frac{n}{2} \\right\\rfloor, oder definieren \\floor und \\ceil mit \\DeclarePairedDelimiter aus mathtools.",
        },
        {
          question: "Wie schreibe ich mod in LaTeX?",
          answer:
            "Verwenden Sie \\bmod für den binären Operator, a \\bmod n, und \\pmod{n} für eine Kongruenz, wie in a \\equiv b \\pmod{n}, das (mod n) mit dem richtigen Abstand setzt. Beide sind eingebaut; amsmath ergänzt \\mod{n} und \\pod{n} für andere Abstandsvarianten.",
        },
      ],
    },
    "differential-geometry": {
      title: "Symbole der Differentialgeometrie in LaTeX: Formen, Zusammenhänge und Krümmung",
      intro: (
        <IntroP>
          Die Symbole der Differentialgeometrie bauen Sie in LaTeX aus wenigen eingebauten
          Befehlen. Das Dachprodukt von Formen ist <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>, mit{" "}
          <Cmd>{"\\bigwedge^k V"}</Cmd> für die äußere Potenz; die äußere Ableitung ist{" "}
          <Cmd>{"d\\omega"}</Cmd>; die kovariante Ableitung ist <Cmd>{"\\nabla_X Y"}</Cmd>; und die
          Lie-Ableitung ist <Cmd>{"\\mathcal{L}_X"}</Cmd>. Christoffel-Symbole und
          Krümmungstensoren sind indizierte Buchstaben, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> und{" "}
          <Cmd>{"R^l{}_{ijk}"}</Cmd>, und der Tangentialraum in einem Punkt ist{" "}
          <Cmd>{"T_pM"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Symbole der
          Differentialgeometrie; alle sind eingebaut, und die vollständige Liste folgt weiter
          unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Mannigfaltigkeiten, Formen und Krümmung",
      use: {
        "T_pM": "Tangentialraum in p",
        "T^*_pM": "Kotangentialraum in p",
        "\\nabla_X Y": "Kovariante Ableitung (Zusammenhang)",
        "\\Gamma^k_{ij}": "Christoffel-Symbole",
        "R^l{}_{ijk}": "Riemannscher Krümmungstensor",
        "g_{ij}": "Metrischer Tensor",
        "\\alpha \\wedge \\beta": "Dachprodukt von Formen",
        "\\bigwedge^k V": "Äußere Potenz, k-Formen",
        "d\\omega": "Äußere Ableitung",
        "\\mathcal{L}_X": "Lie-Ableitung",
        "[X, Y]": "Lie-Klammer von Vektorfeldern",
        "\\star\\omega": "Hodge-Stern",
      },
      faqHeading: "Häufige Fragen zu Symbolen der Differentialgeometrie in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich das Dachprodukt (Keilprodukt) in LaTeX?",
          answer:
            "Verwenden Sie \\wedge zwischen Formen, $\\alpha \\wedge \\beta$; es ist ein binärer Operator mit dem richtigen Abstand. Für die äußere Potenz oder ein großes Dachprodukt über eine Indexmenge verwenden Sie den großen Operator \\bigwedge, wie in \\bigwedge^k V oder \\bigwedge_{i=1}^{n} dx_i. Beide sind eingebaut.",
        },
        {
          question: "Wie schreibe ich die kovariante Ableitung in LaTeX?",
          answer:
            "Schreiben Sie \\nabla mit der Richtung als Index: $\\nabla_X Y$, oder \\nabla_\\mu V^\\nu in Indexnotation. Partielle Ableitungen entlang der Koordinaten schreiben Sie als \\partial_\\mu, und die Semikolon-Notation V^\\nu{}_{;\\mu} ist in Physiktexten ebenfalls üblich.",
        },
        {
          question: "Wie schreibe ich Lie-Ableitung und äußere Ableitung in LaTeX?",
          answer:
            "Die Lie-Ableitung ist ein kalligrafisches L mit Index, \\mathcal{L}_X T. Die äußere Ableitung ist ein gewöhnliches d, d\\omega; manche Autoren setzen es mit \\mathrm{d}\\omega aufrecht, um es von einer Variablen zu unterscheiden.",
        },
      ],
    },
    finance: {
      title: "Währungs- und Finanzsymbole in LaTeX: Dollar, Euro und Formeln",
      intro: (
        <IntroP>
          Währungssymbole erfordern in LaTeX etwas Sorgfalt, denn das Dollarzeichen startet den
          Mathematikmodus. Maskieren Sie es als <Cmd>{"\\$"}</Cmd>, um ein Dollarzeichen zu
          drucken; das Pfundzeichen ist <Cmd>{"\\pounds"}</Cmd>, und das Eurozeichen ist{" "}
          <Cmd>{"\\texteuro"}</Cmd> oder, im offiziellen Design, <Cmd>{"\\euro"}</Cmd> aus dem Paket
          eurosym. Prozent ist <Cmd>{"\\%"}</Cmd>, weil ein unmaskiertes % einen Kommentar
          beginnt, und Promille ist <Cmd>{"\\textperthousand"}</Cmd>. Finanzformeln wie der
          Kapitalwert oder der Zinseszins sind gewöhnliche Mathematik, aufgebaut aus{" "}
          <Cmd>{"\\sum"}</Cmd> und <Cmd>{"\\frac"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten
          Finanzsymbole mit dem jeweils benötigten Paket; die vollständige Liste folgt weiter
          unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Währungen, Prozent und Formeln",
      use: {
        "\\$": "Dollarzeichen",
        "\\pounds": "Pfund Sterling",
        "\\texteuro": "Eurozeichen (textcomp, eingebaut)",
        "\\euro": "Offizielles Eurozeichen",
        "\\textyen": "Yen-Zeichen (textcomp, eingebaut)",
        "\\%": "Prozent",
        "\\textperthousand": "Promille (textcomp, eingebaut)",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "Kapitalwert (NPV)",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "Zinseszins",
        "A = Pe^{rt}": "Stetige Verzinsung",
        "\\pm": "Plus-minus",
      },
      faqHeading: "Häufige Fragen zu Finanzsymbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich das Dollarzeichen in LaTeX?",
          answer:
            "Maskieren Sie es: \\$ druckt $ sowohl im Text- als auch im Mathematikmodus, zum Beispiel \\$100. Ein unmaskiertes $ öffnet oder schließt den Mathematikmodus, deshalb führt ein unmaskiertes Dollarzeichen in einem Preis zu Fehlern oder macht den Rest der Zeile zur Formel.",
        },
        {
          question: "Wie schreibe ich das Eurozeichen in LaTeX?",
          answer:
            "\\texteuro (aus textcomp, das inzwischen zum LaTeX-Kern gehört) druckt das Eurozeichen der aktuellen Schrift ohne zusätzliche Pakete. Für das offizielle EU-Design laden Sie \\usepackage{eurosym} und schreiben \\euro. Mit XeLaTeX oder LuaLaTeX können Sie € auch direkt eingeben.",
        },
        {
          question: "Wie schreibe ich das Prozentzeichen in LaTeX?",
          answer:
            "Schreiben Sie \\%. Ein unmaskiertes % beginnt einen Kommentar, sodass alles, was danach in der Zeile steht, aus dem Dokument verschwindet. Für Promille verwenden Sie \\textperthousand, und für Zahlen mit Einheiten bietet das Paket siunitx \\qty{5}{\\percent}.",
        },
      ],
    },
    "game-theory": {
      title: "Symbole der Spieltheorie in LaTeX: Strategien, Auszahlungen und Gleichgewichte",
      intro: (
        <IntroP>
          Die Notation der Spieltheorie besteht in LaTeX vor allem aus indizierten Buchstaben,
          entscheidend sind also einheitliche Indizes. Die Strategie eines Spielers ist{" "}
          <Cmd>{"s_i"}</Cmd>, die Strategien aller anderen sind <Cmd>{"s_{-i}"}</Cmd>, die
          Auszahlung ist <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, und ein Nash-Gleichgewicht wird mit
          einem Stern markiert, <Cmd>{"s^*"}</Cmd>. Gemischte Strategien schreiben Sie mit{" "}
          <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>, Präferenzen mit <Cmd>{"\\succ"}</Cmd> und{" "}
          <Cmd>{"\\succeq"}</Cmd>, und die beste Antwort gelingt am besten mit{" "}
          <Cmd>{"\\operatorname{BR}_i"}</Cmd> aus amsmath. Auszahlungsmatrizen sind mit array
          gebaute Tabellen. Die Tabelle zeigt die gebräuchlichsten Symbole der Spieltheorie mit
          dem jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Strategien, Auszahlungen und Gleichgewichte",
      use: {
        "s_i \\in S_i": "Strategie von Spieler i",
        "s_{-i}": "Strategien aller anderen Spieler",
        "u_i(s_i, s_{-i})": "Auszahlung (Nutzen) von Spieler i",
        "s^* = (s_1^*, \\ldots, s_n^*)": "Nash-Gleichgewichtsprofil",
        "\\operatorname{BR}_i(s_{-i})": "Beste Antwort",
        "\\sigma_i \\in \\Delta(S_i)": "Gemischte Strategie",
        "\\mathbb{E}[u_i(\\sigma)]": "Erwartete Auszahlung",
        "a \\succ b": "Strikte Präferenz",
        "a \\succeq b": "Schwache Präferenz",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "Maximin-Wert",
        "\\phi_i(v)": "Shapley-Wert",
        "v(S)": "Wert der Koalition S",
      },
      faqHeading: "Häufige Fragen zu Symbolen der Spieltheorie in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich eine Auszahlungsmatrix in LaTeX?",
          answer:
            "Verwenden Sie ein array in einer abgesetzten Formel, mit einer senkrechten Linie nach den Zeilenbeschriftungen: \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. Für ein Spiel in Normalform mit Spielernamen bietet das Paket sgame eine game-Umgebung.",
        },
        {
          question: "Wie schreibe ich s minus i in LaTeX?",
          answer:
            "Setzen Sie Minuszeichen und Index in geschweifte Klammern: s_{-i}. Ohne Klammern stellt s_-i nur das Minuszeichen tief. Dasselbe gilt für Profile wie (s_i', s_{-i}) und beste Antworten wie BR_i(s_{-i}).",
        },
        {
          question: "Wie markiere ich ein Nash-Gleichgewicht in LaTeX?",
          answer:
            "Verwenden Sie einen hochgestellten Stern: s^* für das Profil und s_i^* für die Gleichgewichtsstrategie eines Spielers. Die Gleichgewichtsbedingung lautet u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) für alle s_i \\in S_i.",
        },
      ],
    },
    geometry: {
      title: "Geometrie-Symbole in LaTeX: senkrecht, parallel, Winkel und Dreieck",
      intro: (
        <IntroP>
          Die Geometrie-Symbole sind in LaTeX größtenteils eingebaut. Senkrecht, zugleich das
          Symbol für Orthogonalität, ist <Cmd>{"\\perp"}</Cmd> (⊥), parallel ist{" "}
          <Cmd>{"\\parallel"}</Cmd> (∥), ein Winkel ist <Cmd>{"\\angle ABC"}</Cmd> und ein Dreieck
          ist <Cmd>{"\\triangle ABC"}</Cmd>. Kongruent ist <Cmd>{"\\cong"}</Cmd> und ähnlich ist{" "}
          <Cmd>{"\\sim"}</Cmd>. Eine Strecke trägt einen Strich, <Cmd>{"\\overline{AB}"}</Cmd>,
          ein Strahl oder Vektor einen Pfeil, <Cmd>{"\\overrightarrow{AB}"}</Cmd>, und das
          Gradzeichen ist ein hochgestellter Kreis, <Cmd>{"90^\\circ"}</Cmd>. Nur wenige Extras
          wie <Cmd>{"\\measuredangle"}</Cmd> und <Cmd>{"\\nparallel"}</Cmd> benötigen amssymb. Die
          Tabelle zeigt die gebräuchlichsten Geometrie-Symbole mit dem jeweils benötigten Paket;
          die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Geometrie-Symbole",
      use: {
        "\\perp": "Senkrecht, orthogonal",
        "\\parallel": "Parallel",
        "\\nparallel": "Nicht parallel",
        "\\angle ABC": "Winkel",
        "\\measuredangle ABC": "Gemessener Winkel",
        "\\triangle ABC": "Dreieck",
        "\\cong": "Kongruent",
        "\\sim": "Ähnlich",
        "\\overline{AB}": "Strecke",
        "\\overrightarrow{AB}": "Strahl oder Vektor",
        "\\overleftrightarrow{AB}": "Gerade durch A und B",
        "90^\\circ": "Gradzeichen",
      },
      faqHeading: "Häufige Fragen zu Geometrie-Symbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich das Symbol für senkrecht oder orthogonal in LaTeX?",
          answer:
            "Verwenden Sie \\perp im Mathematikmodus: $AB \\perp CD$ ergibt AB ⊥ CD. Derselbe Befehl dient für orthogonale Vektoren, u \\perp v, und für das orthogonale Komplement V^\\perp. Er ist eingebaut und braucht kein Paket.",
        },
        {
          question: "Wie schreibe ich das Dreieckssymbol in LaTeX?",
          answer:
            "\\triangle ergibt △, wie in $\\triangle ABC$, und braucht kein Paket. amssymb ergänzt das kleinere \\vartriangle und das gefüllte \\blacktriangle.",
        },
        {
          question: "Wie schreibe ich das Gradzeichen in LaTeX?",
          answer:
            "Im Mathematikmodus schreiben Sie einen hochgestellten Kreis: $90^\\circ$. Im Text ergibt \\textdegree das Zeichen °, und das Paket siunitx liefert mit \\ang{45} oder \\qty{90}{\\degree} ein einheitliches Ergebnis.",
        },
      ],
    },
    "graph-theory": {
      title: "Symbole der Graphentheorie in LaTeX: Knoten, Kanten, Grad und Färbung",
      intro: (
        <IntroP>
          Die Notation der Graphentheorie besteht in LaTeX vor allem aus gewöhnlichen Buchstaben
          und eingebauten Operatoren. Ein Graph ist <Cmd>{"G = (V, E)"}</Cmd>, Adjazenz ist{" "}
          <Cmd>{"u \\sim v"}</Cmd>, der Grad eines Knotens ist <Cmd>{"\\deg(v)"}</Cmd> (der
          Operator <Cmd>{"\\deg"}</Cmd> ist eingebaut), und vollständige bzw. vollständig
          bipartite Graphen sind <Cmd>{"K_n"}</Cmd> und <Cmd>{"K_{m,n}"}</Cmd>. Graphinvarianten
          verwenden griechische Buchstaben: die chromatische Zahl <Cmd>{"\\chi(G)"}</Cmd>, die
          Cliquenzahl <Cmd>{"\\omega(G)"}</Cmd>, die Unabhängigkeitszahl{" "}
          <Cmd>{"\\alpha(G)"}</Cmd> sowie Maximal- und Minimalgrad <Cmd>{"\\Delta(G)"}</Cmd> und{" "}
          <Cmd>{"\\delta(G)"}</Cmd>. Um den Graphen selbst zu zeichnen, verwenden Sie TikZ. Die
          Tabelle zeigt die gebräuchlichsten Symbole der Graphentheorie; alle sind eingebaut, und
          die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Symbole der Graphentheorie",
      use: {
        "G = (V, E)": "Graph mit Knotenmenge V und Kantenmenge E",
        "u \\sim v": "u ist adjazent zu v",
        "\\deg(v)": "Grad eines Knotens",
        "\\deg^{+}(v)": "Ausgangsgrad (\\deg^{-} für den Eingangsgrad)",
        "N(v)": "Nachbarschaft von v",
        "K_n": "Vollständiger Graph",
        "K_{m,n}": "Vollständig bipartiter Graph",
        "\\chi(G)": "Chromatische Zahl",
        "\\omega(G)": "Cliquenzahl",
        "\\alpha(G)": "Unabhängigkeitszahl",
        "\\Delta(G)": "Maximalgrad (\\delta(G) für den Minimalgrad)",
        "G \\cong H": "Isomorphe Graphen",
      },
      faqHeading: "Häufige Fragen zu Symbolen der Graphentheorie in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich den Grad eines Knotens in LaTeX?",
          answer:
            "Verwenden Sie den eingebauten Operator \\deg, der deg aufrecht und mit dem richtigen Abstand setzt: $\\deg(v)$. Für gerichtete Graphen ergeben \\deg^{+}(v) und \\deg^{-}(v) Ausgangs- und Eingangsgrad, und das Handschlaglemma schreiben Sie als \\sum_{v \\in V} \\deg(v) = 2|E|.",
        },
        {
          question: "Wie zeichne ich einen Graphen in LaTeX?",
          answer:
            "Laden Sie \\usepackage{tikz}, platzieren Sie die Knoten mit \\node[circle,draw] (a) at (0,0) {a}; und verbinden Sie sie mit \\draw (a) -- (b);. Für größere Graphen vereinfachen die TikZ-Bibliothek graphs und das Paket tkz-graph die Syntax.",
        },
        {
          question: "Wie schreibe ich die chromatische Zahl in LaTeX?",
          answer:
            "Die chromatische Zahl ist \\chi(G), mit dem griechischen Buchstaben Chi. Der chromatische Index (Kantenfärbungszahl) wird meist \\chi'(G) geschrieben, die Cliquenzahl \\omega(G) und die Unabhängigkeitszahl \\alpha(G). Alle sind eingebaut.",
        },
      ],
    },
    latin: {
      title: "Lateinische Buchstaben in LaTeX: Sonderbuchstaben und Akzente",
      intro: (
        <IntroP>
          Lateinische Buchstaben jenseits von A bis Z, etwa die Ligaturen æ und œ, die
          skandinavischen ø und å, das deutsche ß und das polnische ł, haben in LaTeX jeweils
          einen kurzen Befehl: <Cmd>{"\\ae"}</Cmd>, <Cmd>{"\\oe"}</Cmd>, <Cmd>{"\\o"}</Cmd>,{" "}
          <Cmd>{"\\aa"}</Cmd>, <Cmd>{"\\ss"}</Cmd> und <Cmd>{"\\l"}</Cmd>, mit Großformen wie{" "}
          <Cmd>{"\\AE"}</Cmd> und <Cmd>{"\\O"}</Cmd>. Buchstaben mit Akzent kombinieren einen
          Akzentbefehl mit dem Grundbuchstaben, zum Beispiel <Cmd>{"\\'e"}</Cmd> für é und{" "}
          <Cmd>{"\\~n"}</Cmd> für ñ. Alle sind eingebaut und funktionieren im Textmodus. Die
          Tabelle zeigt die gebräuchlichsten lateinischen Symbole; die vollständige Liste folgt
          weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Sonderbuchstaben und Akzente",
      use: {
        "\\ae": "Ligatur æ (\\AE für Æ)",
        "\\oe": "Ligatur œ (\\OE für Œ)",
        "\\o": "Durchgestrichenes o ø (\\O für Ø)",
        "\\aa": "A mit Ring å (\\AA für Å)",
        "\\ss": "Deutsches Eszett ß",
        "\\l": "Polnisches ł (\\L für Ł)",
        "\\i": "i ohne Punkt, Basis für Akzente",
        "\\'e": "Akut é",
        "\\\"o": "Umlaut/Trema ö",
        "\\~n": "Tilde ñ",
        "\\c{c}": "Cedille ç",
        "\\v{s}": "Hatschek š",
      },
      faqHeading: "Häufige Fragen zu lateinischen Buchstaben in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich lateinische Sonderbuchstaben wie æ, ø und ß in LaTeX?",
          answer:
            "Jeder hat einen eingebauten Textmodus-Befehl: \\ae und \\AE für æ und Æ, \\oe und \\OE für œ und Œ, \\o und \\O für ø und Ø, \\aa und \\AA für å und Å, \\ss für ß sowie \\l und \\L für ł und Ł. Seit 2018 liest LaTeX auch UTF-8, Sie können die Buchstaben also direkt eingeben.",
        },
        {
          question: "Wie verwende ich diese lateinischen Zeichen im Mathematikmodus?",
          answer:
            "Die Befehle funktionieren nur im Textmodus, schließen Sie sie also in \\text{...} aus amsmath ein, wie in $x_{\\text{\\ae}}$. Im Mathematikmodus haben die punktlosen Buchstaben eigene Befehle, \\imath und \\jmath, die für Vektoren mit Akzent wie \\hat{\\imath} verwendet werden.",
        },
        {
          question: "Warum lassen sich Buchstaben mit Akzent in meinem PDF nicht richtig kopieren oder trennen?",
          answer:
            "Mit der voreingestellten Schriftkodierung OT1 setzt LaTeX Buchstaben mit Akzent aus zwei Teilen zusammen. Fügen Sie \\usepackage[T1]{fontenc} in die Präambel ein, damit é, ö und ñ einzelne Glyphen sind, die korrekt getrennt, durchsucht und kopiert werden.",
        },
      ],
    },
    "linear-algebra": {
      title: "Symbole der linearen Algebra in LaTeX: Matrizen, Vektoren, Transponierte und Normen",
      intro: (
        <IntroP>
          Lineare Algebra in LaTeX beginnt mit den Matrixumgebungen von amsmath:{" "}
          <Cmd>{"pmatrix"}</Cmd> für runde Klammern, <Cmd>{"bmatrix"}</Cmd> für eckige Klammern und{" "}
          <Cmd>{"vmatrix"}</Cmd> für eine Determinante. Ein Vektor ist <Cmd>{"\\mathbf{v}"}</Cmd>{" "}
          oder <Cmd>{"\\vec{v}"}</Cmd>, die Transponierte ist <Cmd>{"A^\\top"}</Cmd> (oder{" "}
          <Cmd>{"A^T"}</Cmd>), die Inverse <Cmd>{"A^{-1}"}</Cmd>, die konjugiert Transponierte{" "}
          <Cmd>{"A^\\dagger"}</Cmd> und die Norm <Cmd>{"\\|x\\|"}</Cmd>. Die Determinante{" "}
          <Cmd>{"\\det"}</Cmd> ist eingebaut, Spur und Rang schreiben Sie dagegen am besten mit{" "}
          <Cmd>{"\\operatorname{tr}"}</Cmd> und <Cmd>{"\\operatorname{rank}"}</Cmd>. Die Tabelle
          zeigt die gebräuchlichsten Symbole der linearen Algebra mit dem jeweils benötigten
          Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Matrizen, Vektoren und Operationen",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "Matrix in runden Klammern",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "Matrix in eckigen Klammern",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "Determinantenstriche",
        "\\mathbf{v}": "Fetter Vektor",
        "\\vec{v}": "Vektor mit Pfeil",
        "A^\\top": "Transponierte",
        "A^{-1}": "Inverse",
        "A^\\dagger": "Konjugiert Transponierte",
        "\\det(A)": "Determinante",
        "\\operatorname{tr}(A)": "Spur",
        "\\|x\\|_2": "Euklidische Norm",
        "\\langle u, v \\rangle": "Skalarprodukt (inneres Produkt)",
      },
      faqHeading: "Häufige Fragen zur linearen Algebra in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich eine Matrix in LaTeX?",
          answer:
            "Laden Sie amsmath und verwenden Sie im Mathematikmodus eine Matrixumgebung; Spalten trennen Sie mit &, Zeilen mit \\\\: \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix ergibt runde Klammern, bmatrix eckige, Bmatrix geschweifte, vmatrix einfache Striche für eine Determinante und Vmatrix doppelte Striche.",
        },
        {
          question: "Wie schreibe ich die Transponierte in LaTeX?",
          answer:
            "Schreiben Sie A^\\top, das ein kleines T setzt, oder einfach A^T, oder A^\\intercal aus amssymb. Entscheiden Sie sich für eine Form und verwenden Sie sie einheitlich; A^\\top ist in heutigen Texten verbreitet, weil es nicht mit einer Variablen T verwechselt wird.",
        },
        {
          question: "Wie schreibe ich einen Vektor in LaTeX?",
          answer:
            "Verwenden Sie \\mathbf{v} für einen fetten Vektor oder \\vec{v} für einen Pfeilakzent; \\boldsymbol{v} aus amsmath funktioniert auch mit griechischen Buchstaben. Ein Spaltenvektor ist eine Matrix mit einer einzigen Spalte: \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
        },
      ],
    },
    "machine-learning": {
      title: "Gradientensymbol in LaTeX und weitere Notation des maschinellen Lernens",
      intro: (
        <IntroP>
          Das Gradientensymbol in LaTeX ist <Cmd>{"\\nabla"}</Cmd>; es ergibt &nabla; und braucht
          kein Paket: Schreiben Sie <Cmd>{"\\nabla f"}</Cmd> für den Gradienten von{" "}
          <Cmd>{"f"}</Cmd> oder <Cmd>{"\\nabla_\\theta \\mathcal{L}"}</Cmd> für den Gradienten
          einer Verlustfunktion nach den Parametern. Partielle Ableitungen verwenden{" "}
          <Cmd>{"\\partial"}</Cmd>, Vorhersagen sind <Cmd>{"\\hat{y}"}</Cmd>, der Erwartungswert
          ist <Cmd>{"\\mathbb{E}"}</Cmd> und argmax ist{" "}
          <Cmd>{"\\operatorname*{arg\\,max}"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten
          Befehle, um einen Gradienten in LaTeX zu schreiben, mit dem jeweils benötigten Paket;
          die vollständige Liste der Symbole des maschinellen Lernens folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Gradienten, Verluste und Optimierung",
      use: {
        "\\nabla": "Gradientensymbol (Nabla)",
        "\\nabla_\\theta \\mathcal{L}": "Gradient des Verlusts nach θ",
        "\\partial": "Partielle Ableitung",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "Partielle Ableitung des Verlusts",
        "\\mathcal{L}": "Verlustfunktion",
        "\\theta": "Modellparameter",
        "\\hat{y}": "Vorhersage, Schätzwert",
        "\\mathbb{E}": "Erwartungswert",
        "\\operatorname*{arg\\,max}_\\theta": "Argmax mit Index darunter",
        "\\operatorname*{arg\\,min}_\\theta": "Argmin mit Index darunter",
        "\\|w\\|_2": "L2-Norm der Gewichte",
        "\\odot": "Hadamard-Produkt (elementweise)",
      },
      faqHeading: "Häufige Fragen zur Notation des maschinellen Lernens in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich das Gradientensymbol in LaTeX?",
          answer:
            "Das Gradientensymbol ∇ ist \\nabla; es ist in LaTeX eingebaut und wird im Mathematikmodus verwendet: $\\nabla f$. Setzen Sie die Variable, nach der Sie ableiten, als Index, wie in \\nabla_\\theta \\mathcal{L}(\\theta), und schreiben Sie den Laplace-Operator als \\nabla^2 f. Ein Paket ist nicht nötig.",
        },
        {
          question: "Wie schreibe ich eine partielle Ableitung in LaTeX?",
          answer:
            "Verwenden Sie \\partial: \\frac{\\partial f}{\\partial x} für eine erste Ableitung und \\frac{\\partial^2 f}{\\partial x^2} für eine zweite Ableitung. Eine Komponente des Gradienten schreiben Sie genauso, zum Beispiel \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
        },
        {
          question: "Wie schreibe ich argmax und argmin in LaTeX?",
          answer:
            "Schreiben Sie mit amsmath \\operatorname*{arg\\,max}_\\theta f(\\theta); der Stern setzt den Index in abgesetzten Formeln darunter. Wenn Sie es häufig brauchen, deklarieren Sie es einmal in der Präambel mit \\DeclareMathOperator*{\\argmax}{arg\\,max} und schreiben dann \\argmax_\\theta. Die Abkürzung \\arg\\max_\\theta funktioniert auch, dann steht der Index aber nur unter max und nicht unter dem ganzen arg max.",
        },
        {
          question: "Wie schreibe ich Erwartungswert und Verlustfunktion in LaTeX?",
          answer:
            "Der Erwartungswert ist das E in Blackboard Bold, \\mathbb{E}, das \\usepackage{amssymb} benötigt, wie in \\mathbb{E}_{x \\sim p}[f(x)]. Die Verlustfunktion ist meist ein kalligrafisches L, \\mathcal{L}, das eingebaut ist.",
        },
      ],
    },
    "modal-logic": {
      title: "Symbole der Modallogik in LaTeX: Box, Diamond und Kripke-Semantik",
      intro: (
        <IntroP>
          Die beiden Grundsymbole der Modallogik in LaTeX sind <Cmd>{"\\Box"}</Cmd> für
          Notwendigkeit (□) und <Cmd>{"\\Diamond"}</Cmd> für Möglichkeit (◇), beide aus amssymb;{" "}
          <Cmd>{"\\Box p"}</Cmd> liest sich „notwendigerweise p“ und <Cmd>{"\\Diamond p"}</Cmd>{" "}
          „möglicherweise p“. Die Kripke-Semantik verwendet <Cmd>{"\\models"}</Cmd> (eingebaut)
          oder <Cmd>{"\\Vdash"}</Cmd>, wie in <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, mit einer
          Erreichbarkeitsrelation <Cmd>{"wRv"}</Cmd>. Die epistemische Logik schreibt Wissen als{" "}
          <Cmd>{"K_a p"}</Cmd>, und die Temporallogik ergänzt <Cmd>{"\\bigcirc p"}</Cmd> für
          „als Nächstes“ und <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> für „bis“. Die Tabelle
          zeigt die gebräuchlichsten Symbole der Modallogik mit dem jeweils benötigten Paket; die
          vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: modale, epistemische und temporale Operatoren",
      use: {
        "\\Box p": "Notwendigerweise p",
        "\\Diamond p": "Möglicherweise p",
        "\\Box(p \\to q)": "Notwendigkeit einer Implikation (Axiom K)",
        "\\neg\\Box\\neg p": "Nicht notwendigerweise nicht p, entspricht \\Diamond p",
        "\\mathcal{M}, w \\models p": "p ist wahr in der Welt w",
        "w \\Vdash p": "Forcing, Erfüllung",
        "wRv": "Erreichbarkeitsrelation",
        "K_a p": "Agent a weiß, dass p",
        "B_a p": "Agent a glaubt, dass p",
        "C_G p": "Gemeinsames Wissen in der Gruppe G",
        "\\bigcirc p": "Als Nächstes (Temporallogik)",
        "p \\mathbin{\\mathcal{U}} q": "Bis (Temporallogik)",
      },
      faqHeading: "Häufige Fragen zu Symbolen der Modallogik in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich die Symbole Box und Diamond in LaTeX?",
          answer:
            "Laden Sie \\usepackage{amssymb} und schreiben Sie \\Box p für Notwendigkeit und \\Diamond p für Möglichkeit. Das Paket latexsym bietet dieselben beiden Befehle. Beachten Sie, dass der eingebaute Befehl \\diamond ein kleiner binärer Operator ist und nicht der modale Diamond.",
        },
        {
          question: "Wie schreibe ich das Erfüllungssymbol (doppeltes Drehkreuz) in LaTeX?",
          answer:
            "\\models ist eingebaut und ergibt ⊨, wie in $\\mathcal{M}, w \\models \\varphi$. amssymb ergänzt \\vDash (⊨), \\Vdash (⊩) für Forcing und \\nvDash für „erfüllt nicht“; \\vdash (⊢) für Ableitbarkeit ist eingebaut.",
        },
        {
          question: "Wie schreibe ich „bis“ und „als Nächstes“ der Temporallogik in LaTeX?",
          answer:
            "Verwenden Sie \\bigcirc p für „als Nächstes“, und machen Sie das kalligrafische U für „bis“ zu einem binären Operator: p \\mathbin{\\mathcal{U}} q, das den richtigen Abstand ergibt. „Immer“ und „irgendwann“ werden meist als \\Box p und \\Diamond p oder als \\mathbf{G} p und \\mathbf{F} p geschrieben.",
        },
      ],
    },
    "number-theory": {
      title: "Symbole der Zahlentheorie in LaTeX",
      intro: (
        <IntroP>
          Modulo und Betrag haben in LaTeX mehrere Formen: <Cmd>{"\\bmod"}</Cmd> für einen Rest,{" "}
          <Cmd>{"\\pmod{n}"}</Cmd> nach einer Kongruenz und <Cmd>{"\\lvert z \\rvert"}</Cmd> für
          den Betrag einer Zahl. Die Tabelle zeigt die acht gebräuchlichsten Befehle mit dem
          jeweils benötigten Paket; die vollständige Liste der Symbole der Zahlentheorie folgt
          weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Teilbarkeit und modulare Arithmetik",
      use: {
        "a \\bmod n": "Modulo als binäre Operation",
        "a \\equiv b \\pmod{n}": "Kongruenz mit (mod n)",
        "a \\equiv b \\mod{n}": "Kongruenz ohne Klammern",
        "\\lvert z \\rvert": "Betrag / Absolutwert",
        "a \\mid b": "a teilt b",
        "a \\nmid b": "a teilt b nicht",
        "\\gcd(a, b)": "Größter gemeinsamer Teiler",
        "\\operatorname{lcm}(a, b)": "Kleinstes gemeinsames Vielfaches",
      },
      faqHeading: "Häufige Fragen zu Symbolen der Zahlentheorie in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich mod (modulo) in LaTeX?",
          answer:
            "Verwenden Sie \\bmod für die binäre Operation, wie in a \\bmod n, und \\pmod{n} nach einer Kongruenz: a \\equiv b \\pmod{n} ergänzt Klammern und Abstand automatisch. amsmath bietet außerdem \\mod{n} (ohne Klammern) und \\pod{n} (Klammern ohne das Wort mod).",
        },
        {
          question: "Wie schreibe ich den Betrag (Absolutwert) in LaTeX?",
          answer:
            "Schreiben Sie \\lvert z \\rvert mit amsmath, oder \\left| z \\right|, wenn die Striche mit hohem Inhalt wachsen sollen. Wenn Sie ihn oft brauchen, können Sie mit mathtools \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert} deklarieren und dann \\abs{z} schreiben.",
        },
        {
          question: "Wie schreibe ich „teilt“ in LaTeX?",
          answer:
            "Verwenden Sie \\mid, wie in a \\mid b, das LaTeX wie eine Relation setzt; ein einfaches | steht zu gedrängt. Die Verneinung \\nmid (a teilt b nicht) benötigt \\usepackage{amssymb}.",
        },
      ],
    },
    operators: {
      title: "Operatoren in LaTeX: eingekreistes Plus, Mal, Punkt und große Operatoren",
      intro: (
        <IntroP>
          Operatoren in LaTeX zerfallen in zwei Gruppen. Binäre Operatoren stehen mit mittlerem
          Abstand zwischen zwei Termen: <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\cdot"}</Cmd>,{" "}
          <Cmd>{"\\ast"}</Cmd>, <Cmd>{"\\circ"}</Cmd> und die Familie der eingekreisten
          Operatoren <Cmd>{"\\oplus"}</Cmd> (eingekreistes Plus, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗),{" "}
          <Cmd>{"\\odot"}</Cmd> (⊙) und <Cmd>{"\\ominus"}</Cmd>. Große Operatoren nehmen Grenzen
          auf und wachsen in abgesetzten Formeln: <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>,{" "}
          <Cmd>{"\\bigoplus"}</Cmd>, <Cmd>{"\\bigotimes"}</Cmd> und <Cmd>{"\\bigcup"}</Cmd>. Alle
          sind eingebaut. Benannte Operatoren wie <Cmd>{"\\max"}</Cmd>, <Cmd>{"\\sin"}</Cmd> und{" "}
          <Cmd>{"\\det"}</Cmd> sind vordefiniert, und eigene deklarieren Sie mit{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> aus amsmath. Die Tabelle zeigt die
          gebräuchlichsten LaTeX-Operatoren; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: binäre und große Operatoren",
      use: {
        "\\oplus": "Eingekreistes Plus: direkte Summe, XOR",
        "\\otimes": "Eingekreistes Mal: Tensorprodukt",
        "\\odot": "Eingekreister Punkt: Hadamard-Produkt",
        "\\ominus": "Eingekreistes Minus",
        "\\oslash": "Eingekreister Schrägstrich",
        "\\times": "Kreuzprodukt, Multiplikation",
        "\\cdot": "Mittelpunkt",
        "\\ast": "Sternoperator, Faltung",
        "\\circ": "Verkettung",
        "\\star": "Sternoperator (fünfzackig)",
        "\\bigoplus_{i=1}^{n} V_i": "Direkte Summe über einen Index",
        "\\bigotimes_{i=1}^{n} V_i": "Tensorprodukt über einen Index",
      },
      faqHeading: "Häufige Fragen zu Operatoren in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich das eingekreiste Plus in LaTeX?",
          answer:
            "Verwenden Sie \\oplus für ⊕, das eingekreiste Plus für direkte Summen und XOR. Es ist ein eingebauter binärer Operator: $A \\oplus B$. Für eine direkte Summe vieler Terme verwenden Sie den großen Operator \\bigoplus_{i=1}^{n} V_i.",
        },
        {
          question: "Wie schreibe ich den Operator odot (eingekreister Punkt) in LaTeX?",
          answer:
            "\\odot ergibt ⊙ und wird für das Hadamard-Produkt (elementweise) verwendet, $A \\odot B$. Die große Version ist \\bigodot. Beide sind eingebaut.",
        },
        {
          question: "Wie definiere ich einen neuen Operator in LaTeX?",
          answer:
            "Laden Sie amsmath und schreiben Sie \\DeclareMathOperator{\\Tr}{Tr} in die Präambel; dann setzt \\Tr(A) ein aufrechtes Tr mit Operatorabstand. Verwenden Sie \\DeclareMathOperator*, wenn die Grenzen darunter stehen sollen, wie bei \\argmax. Für einen einmaligen Gebrauch leistet \\operatorname{Tr} dasselbe direkt in der Formel.",
        },
      ],
    },
    optimization: {
      title: "Optimierungssymbole in LaTeX: argmax, argmin und Nebenbedingungen",
      intro: (
        <IntroP>
          Die Notation der Optimierung dreht sich in LaTeX um <Cmd>{"\\min"}</Cmd>,{" "}
          <Cmd>{"\\max"}</Cmd> und ihre arg-Varianten. <Cmd>{"\\min_{x}"}</Cmd> und{" "}
          <Cmd>{"\\max_{x}"}</Cmd> sind eingebaut und setzen die Variable in abgesetzten Formeln
          unter den Operator, ein eingebautes <Cmd>{"\\argmax"}</Cmd> gibt es jedoch nicht:
          Schreiben Sie <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> oder deklarieren Sie{" "}
          <Cmd>{"\\argmax"}</Cmd> einmalig mit <Cmd>{"\\DeclareMathOperator*"}</Cmd> aus amsmath.
          Nebenbedingungen folgen auf <Cmd>{"\\text{s.t.}"}</Cmd> („subject to“, auf Deutsch
          „unter den Nebenbedingungen“), die Lagrange-Funktion ist{" "}
          <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, das Optimum ist <Cmd>{"x^*"}</Cmd>, und
          semidefinite Nebenbedingungen verwenden <Cmd>{"\\succeq 0"}</Cmd>. Die Tabelle zeigt die
          gebräuchlichsten Optimierungssymbole mit dem jeweils benötigten Paket; die vollständige
          Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Zielfunktionen, Nebenbedingungen und Optimalität",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "Argmax mit der Variablen darunter",
        "\\operatorname*{arg\\,min}_{x} f(x)": "Argmin mit der Variablen darunter",
        "\\min_{x \\in \\mathcal{X}} f(x)": "Minimieren über einer Menge",
        "\\max_{x} f(x)": "Maximieren",
        "\\text{s.t.}": "Unter den Nebenbedingungen (deutsch auch \\text{u.d.N.})",
        "g_i(x) \\leq 0": "Ungleichungsnebenbedingung",
        "h_j(x) = 0": "Gleichungsnebenbedingung",
        "\\mathcal{L}(x, \\lambda)": "Lagrange-Funktion",
        "\\nabla f(x^*) = 0": "Optimalitätsbedingung erster Ordnung",
        "\\nabla^2 f(x)": "Hesse-Matrix",
        "X \\succeq 0": "Positiv semidefinit",
        "\\lambda_i \\geq 0": "Duale Variablen (Multiplikatoren)",
      },
      faqHeading: "Häufige Fragen zu Optimierungssymbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich argmax in LaTeX?",
          answer:
            "Schreiben Sie \\operatorname*{arg\\,max}_{x} f(x) mit amsmath; der Stern setzt x in abgesetzten Formeln unter den Operator. Zur Wiederverwendung fügen Sie \\DeclareMathOperator*{\\argmax}{arg\\,max} in die Präambel ein und schreiben \\argmax_x f(x). \\arg\\max ergibt ebenfalls arg max, aber der Index gehört dann nur zu max.",
        },
        {
          question: "Wie schreibe ich ein Optimierungsproblem mit Nebenbedingungen in LaTeX?",
          answer:
            "Setzen Sie Zielfunktion und Nebenbedingungen in eine aligned-Umgebung: \\min_{x} \\quad & f(x) \\\\ \\text{u.d.N.} \\quad & g(x) \\leq 0. Das Paket optidef bietet die Umgebungen mini und maxi, die Zielfunktion und Nebenbedingungen automatisch ausrichten.",
        },
        {
          question: "Wie schreibe ich „unter den Nebenbedingungen“ in LaTeX?",
          answer:
            "Verwenden Sie \\text{u.d.N.} oder \\text{unter den Nebenbedingungen} aus amsmath (englisch \\text{s.t.}), damit die Wörter aufrecht und mit normalem Abstand erscheinen. Schreiben Sie s.t. direkt im Mathematikmodus, erhalten Sie die kursiven Variablen s und t.",
        },
      ],
    },
    order: {
      title: "Kleiner als, größer als und kleiner gleich in LaTeX",
      intro: (
        <IntroP>
          In LaTeX tippen Sie die Zeichen für kleiner als und größer als im Mathematikmodus
          direkt als <Cmd>{"<"}</Cmd> und <Cmd>{">"}</Cmd>. Kleiner gleich ist in LaTeX{" "}
          <Cmd>{"\\leq"}</Cmd> (oder der Alias <Cmd>{"\\le"}</Cmd>), größer gleich ist{" "}
          <Cmd>{"\\geq"}</Cmd> (<Cmd>{"\\ge"}</Cmd>) und ungleich ist <Cmd>{"\\neq"}</Cmd>; alle
          drei sind eingebaut, <Cmd>{"$a \\leq b$"}</Cmd> funktioniert also in jedem Dokument.
          Viel kleiner als ist <Cmd>{"\\ll"}</Cmd>, und die schrägen, ungefähren und verneinten
          Formen stammen aus amssymb. Die Tabelle zeigt die gebräuchlichsten
          Ungleichheitszeichen mit dem jeweils benötigten Paket; die vollständige Liste der
          Ordnungssymbole folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Ungleichungen und Ordnung",
      use: {
        "<": "Kleiner als (direkt getippt)",
        ">": "Größer als (direkt getippt)",
        "\\leq": "Kleiner gleich (Alias \\le)",
        "\\geq": "Größer gleich (Alias \\ge)",
        "\\neq": "Ungleich (Alias \\ne)",
        "\\ll": "Viel kleiner als",
        "\\gg": "Viel größer als",
        "\\leqslant": "Kleiner gleich, schräg",
        "\\lesssim": "Kleiner oder ungefähr gleich",
        "\\not<": "Nicht kleiner als",
        "\\nleq": "Weder kleiner noch gleich",
        "\\prec": "Vorgänger (Halbordnung); \\succ für „Nachfolger“",
      },
      faqHeading: "Häufige Fragen zu Ungleichheitszeichen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich kleiner gleich in LaTeX?",
          answer:
            "Schreiben Sie \\leq oder den kürzeren Alias \\le im Mathematikmodus: $a \\leq b$. Größer gleich ist \\geq oder \\ge. Beide sind eingebaut. Für die in europäischen Texten übliche schräge Form laden Sie amssymb und verwenden \\leqslant und \\geqslant.",
        },
        {
          question: "Wie schreibe ich das Kleiner-als-Zeichen in LaTeX?",
          answer:
            "Im Mathematikmodus tippen Sie < direkt: $a < b$. Im Fließtext außerhalb des Mathematikmodus druckt die voreingestellte Schriftkodierung OT1 statt < ein ¡. Schließen Sie das Zeichen daher als $<$ ein, verwenden Sie \\textless (und \\textgreater für >) oder laden Sie \\usepackage[T1]{fontenc}.",
        },
        {
          question: "Wie schreibe ich „nicht kleiner als“ oder „ungleich“ in LaTeX?",
          answer:
            "Ungleich ist \\neq oder \\ne. Bei anderen Relationen stellen Sie dem Symbol \\not voran, wie in \\not<, oder laden amssymb für die eigenen Verneinungen \\nless, \\ngtr, \\nleq und \\ngeq, die sauberer aussehen als ein darübergelegter Schrägstrich.",
        },
        {
          question: "Was ist der Unterschied zwischen \\leq und \\le in LaTeX?",
          answer:
            "Keiner: \\le ist ein Alias von \\leq, beide ergeben ≤, so wie \\ge ein Alias von \\geq und \\ne ein Alias von \\neq ist. Verwenden Sie, was Ihnen lieber ist, aber einheitlich.",
        },
      ],
    },
    relations: {
      title: "Relationssymbole in LaTeX: ungleich, ungefähr gleich und kleiner als",
      intro: (
        <IntroP>
          Relationssymbole vergleichen in LaTeX zwei Ausdrücke, und die üblichen sind alle
          eingebaut. Ungleich ist in LaTeX <Cmd>{"\\neq"}</Cmd> (≠), ungefähr gleich ist{" "}
          <Cmd>{"\\approx"}</Cmd> (≈), kleiner als und größer als tippen Sie als <Cmd>{"<"}</Cmd>{" "}
          und <Cmd>{">"}</Cmd>, und kleiner gleich ist <Cmd>{"\\leq"}</Cmd> (≤). Äquivalenz ist{" "}
          <Cmd>{"\\equiv"}</Cmd>, ähnlich ist <Cmd>{"\\sim"}</Cmd>, kongruent ist{" "}
          <Cmd>{"\\cong"}</Cmd> und proportional zu ist <Cmd>{"\\propto"}</Cmd>. Jede Relation
          lässt sich verneinen, indem Sie <Cmd>{"\\not"}</Cmd> voranstellen, oder Sie laden
          amssymb für eigene Formen wie <Cmd>{"\\nleq"}</Cmd> und schräge wie{" "}
          <Cmd>{"\\leqslant"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Relationen mit dem
          jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Relationssymbole",
      use: {
        "\\neq": "Ungleich (Alias \\ne)",
        "\\approx": "Ungefähr gleich",
        "<": "Kleiner als",
        ">": "Größer als",
        "\\leq": "Kleiner gleich",
        "\\geq": "Größer gleich",
        "\\equiv": "Äquivalent, identisch, kongruent modulo n",
        "\\sim": "Ähnlich, „ist verteilt wie“",
        "\\cong": "Kongruent, isomorph",
        "\\propto": "Proportional zu",
        "\\ll": "Viel kleiner als (\\gg für viel größer als)",
        "\\leqslant": "Kleiner gleich, schräg",
      },
      faqHeading: "Häufige Fragen zu Relationssymbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich „ungleich“ in LaTeX?",
          answer:
            "Verwenden Sie \\neq (oder den Alias \\ne) im Mathematikmodus: $a \\neq b$ ergibt a ≠ b. Ein Paket ist nicht nötig. Für andere verneinte Relationen stellen Sie \\not voran, wie in \\not\\equiv, oder verwenden die eigenen Versionen aus amssymb wie \\nleq und \\ncong.",
        },
        {
          question: "Wie schreibe ich „ungefähr gleich“ in LaTeX?",
          answer:
            "\\approx ergibt ≈ und ist das übliche Zeichen für ungefähr gleich: $\\pi \\approx 3.14$. Eng verwandt sind \\simeq (≃), \\cong (≅), \\sim (∼) und \\doteq (≐), alle eingebaut, sowie \\approxeq (≊) aus amssymb.",
        },
        {
          question: "Wie schreibe ich „kleiner als“ in LaTeX?",
          answer:
            "Im Mathematikmodus tippen Sie < und > direkt: $a < b$. Im Fließtext außerhalb des Mathematikmodus verwenden Sie \\textless und \\textgreater oder schließen das Zeichen in $...$ ein, denn mit der alten Schriftkodierung OT1 kann ein einfaches < als umgekehrtes Ausrufezeichen erscheinen.",
        },
      ],
    },
    "special-functions": {
      title: "Spezielle Funktionen in LaTeX: Gamma, Beta, Zeta, erf und Bessel",
      intro: (
        <IntroP>
          Spezielle Funktionen schreiben Sie in LaTeX mit griechischen Buchstaben oder mit
          aufrechten Namen. Die Gammafunktion ist <Cmd>{"\\Gamma(z)"}</Cmd>, die Riemannsche
          Zetafunktion <Cmd>{"\\zeta(s)"}</Cmd>, die Digammafunktion <Cmd>{"\\psi(x)"}</Cmd> und
          die Dirac-Delta-Funktion <Cmd>{"\\delta(x)"}</Cmd>. Funktionen mit lateinischen Namen
          gehören aufrecht gesetzt: Ein eingebautes <Cmd>{"\\erf"}</Cmd> gibt es nicht, schreiben
          Sie also <Cmd>{"\\operatorname{erf}(x)"}</Cmd> oder deklarieren Sie es einmalig mit{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> aus amsmath. Bessel-Funktionen und orthogonale
          Polynome sind indizierte Buchstaben wie <Cmd>{"J_n(x)"}</Cmd> und <Cmd>{"P_n(x)"}</Cmd>,
          und die hypergeometrische Funktion ist <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>. Die Tabelle
          zeigt die gebräuchlichsten speziellen Funktionen mit dem jeweils benötigten Paket; die
          vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten speziellen Funktionen",
      use: {
        "\\Gamma(z)": "Gammafunktion",
        "\\mathrm{B}(x, y)": "Betafunktion (aufrechtes großes B)",
        "\\zeta(s)": "Riemannsche Zetafunktion",
        "\\operatorname{erf}(x)": "Fehlerfunktion",
        "\\operatorname{erfc}(x)": "Komplementäre Fehlerfunktion",
        "J_n(x)": "Bessel-Funktion erster Art",
        "Y_n(x)": "Bessel-Funktion zweiter Art",
        "P_n(x)": "Legendre-Polynom",
        "H_n(x)": "Hermite-Polynom",
        "{}_2F_1(a, b; c; z)": "Gaußsche hypergeometrische Funktion",
        "\\psi(x)": "Digammafunktion",
        "\\delta(x)": "Dirac-Delta",
      },
      faqHeading: "Häufige Fragen zu speziellen Funktionen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich die Gammafunktion in LaTeX?",
          answer:
            "Verwenden Sie den griechischen Großbuchstaben: $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$. Ein Paket ist nicht nötig. Die Betafunktion wird meist mit einem aufrechten B geschrieben, \\mathrm{B}(x, y), damit sie nicht mit einer Variablen verwechselt wird.",
        },
        {
          question: "Wie schreibe ich die Fehlerfunktion erf in LaTeX?",
          answer:
            "LaTeX hat keinen Befehl \\erf. Verwenden Sie \\operatorname{erf}(x) aus amsmath, oder fügen Sie \\DeclareMathOperator{\\erf}{erf} in die Präambel ein und schreiben Sie \\erf(x). So erscheint erf aufrecht mit Operatorabstand, anders als ein einfach getipptes erf, das drei kursive Variablen ergibt.",
        },
        {
          question: "Wie schreibe ich die hypergeometrische Funktion in LaTeX?",
          answer:
            "Verwenden Sie eine leere Gruppe, um den Index links zu setzen: {}_2F_1(a, b; c; z). Das Paket mathtools bietet für vorangestellte Indizes auch \\prescript{}{2}{F}_{1}, und die verallgemeinerte Form {}_pF_q folgt demselben Muster.",
        },
      ],
    },
    summation: {
      title: "Summenzeichen in LaTeX: Sigma-Notation, Produkte und Grenzen",
      intro: (
        <IntroP>
          Eine Summe schreiben Sie in LaTeX mit <Cmd>{"\\sum"}</Cmd>, das das große Sigma (Σ) als
          großen Operator setzt: <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> stellt den Index darunter und
          die obere Grenze darüber. Das Produktzeichen funktioniert genauso mit{" "}
          <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>. In abgesetzten Formeln stehen die Grenzen über und
          unter dem Zeichen; im Fließtext rücken sie daneben, sofern Sie nicht{" "}
          <Cmd>{"\\limits"}</Cmd> oder <Cmd>{"\\displaystyle"}</Cmd> hinzufügen. Mehrzeilige
          Bedingungen unter einer Summe verwenden <Cmd>{"\\substack"}</Cmd> aus amsmath, und die
          großen Mengenoperatoren <Cmd>{"\\bigcup"}</Cmd> und <Cmd>{"\\bigcap"}</Cmd> folgen
          denselben Regeln. Die Tabelle zeigt die gebräuchlichsten Summensymbole mit dem jeweils
          benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Summen, Produkte und Grenzen",
      use: {
        "\\sum_{i=1}^{n} a_i": "Summe (Sigma-Notation)",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}": "Unendliche Reihe",
        "\\prod_{i=1}^{n} x_i": "Produkt",
        "\\coprod": "Koprodukt",
        "\\sum\\limits_{i=1}^{n}": "Grenzen über und unter dem Zeichen im Fließtext",
        "\\displaystyle\\sum_{i=1}^{n}": "Summe in Displaygröße im Fließtext",
        "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}": "Doppelsumme",
        "\\sum_{\\substack{i < j \\\\ i \\neq k}}": "Mehrzeilige Bedingungen",
        "\\bigcup_{i \\in I} A_i": "Vereinigung über einen Index",
        "\\bigcap_{i=1}^{n} A_i": "Schnitt über einen Index",
        "\\sum_{k=0}^{n} \\binom{n}{k}": "Summe von Binomialkoeffizienten",
      },
      faqHeading: "Häufige Fragen zum Summenzeichen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich eine Summe in LaTeX?",
          answer:
            "Verwenden Sie \\sum mit Tief- und Hochstellung im Mathematikmodus: $\\sum_{i=1}^{n} a_i$. Setzen Sie Grenzen mit mehr als einem Zeichen in geschweifte Klammern. In einer abgesetzten Gleichung (\\[...\\]) erscheinen die Grenzen über und unter dem Sigma, im Fließtext daneben.",
        },
        {
          question: "Wie setze ich die Grenzen im Fließtext über und unter das Summenzeichen?",
          answer:
            "Fügen Sie nach dem Operator \\limits hinzu, \\sum\\limits_{i=1}^{n}, oder geben Sie der ganzen Summe mit \\displaystyle\\sum_{i=1}^{n} Displaygröße. Setzen Sie das sparsam ein, denn es vergrößert den Zeilenabstand im Absatz.",
        },
        {
          question: "Wie schreibe ich das Produktzeichen in LaTeX?",
          answer:
            "\\prod ergibt das Produktzeichen ∏ und nimmt Grenzen genauso auf wie \\sum: $\\prod_{i=1}^{n} x_i$. Verwenden Sie nicht \\Pi, den griechischen Buchstaben: Er wächst in abgesetzten Formeln nicht mit und setzt seine Grenzen nicht richtig.",
        },
      ],
    },
    tensors: {
      title: "Tensornotation in LaTeX: Indizes, Einsteinsche Summenkonvention und das Paket tensor",
      intro: (
        <IntroP>
          Tensornotation bauen Sie in LaTeX aus Hoch- und Tiefstellungen:{" "}
          <Cmd>{"T^{ij}_{kl}"}</Cmd> für einen Tensor mit zwei oberen und zwei unteren Indizes,{" "}
          <Cmd>{"g_{\\mu\\nu}"}</Cmd> für die Metrik und <Cmd>{"\\delta^i_j"}</Cmd> für das
          Kronecker-Delta. Wenn die Reihenfolge gemischter Indizes zählt, versetzen Sie sie mit
          einer leeren Gruppe, <Cmd>{"T^{i}{}_{j}"}</Cmd>, oder Sie laden das Paket tensor und
          schreiben <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>. Das Levi-Civita-Symbol ist{" "}
          <Cmd>{"\\epsilon_{ijk}"}</Cmd>, das Tensorprodukt ist <Cmd>{"\\otimes"}</Cmd>, und die
          Einsteinsche Summenkonvention besteht einfach darin, einen Index zu wiederholen,{" "}
          <Cmd>{"A^i B_i"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Tensorsymbole mit dem
          jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Tensorindizes und Operationen",
      use: {
        "T^{ij}_{kl}": "Tensor mit oberen und unteren Indizes",
        "T^{i}{}_{j}": "Versetzte Indizes (Reihenfolge zählt)",
        "\\tensor{T}{^i_j^k}": "Versetzte Indizes, einfach geschrieben",
        "g_{\\mu\\nu}": "Metrischer Tensor",
        "\\delta^i_j": "Kronecker-Delta",
        "\\epsilon_{ijk}": "Levi-Civita-Symbol",
        "A^i B_i": "Einsteinsche Summenkonvention (wiederholter Index)",
        "A \\otimes B": "Tensorprodukt",
        "\\partial_\\mu": "Partielle Ableitung nach einer Koordinate",
        "\\nabla_\\mu T^{\\nu}": "Kovariante Ableitung",
        "T_{(ij)}": "Symmetrisierung",
        "T_{[ij]}": "Antisymmetrisierung",
      },
      faqHeading: "Häufige Fragen zur Tensornotation in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich einen Tensor mit oberen und unteren Indizes in LaTeX?",
          answer:
            "Kombinieren Sie Hoch- und Tiefstellungen: $T^{ij}_{kl}$. Wenn die horizontale Reihenfolge der Indizes zählt, fügen Sie eine leere Gruppe ein, damit sie nicht übereinanderstehen: T^{i}{}_{j} setzt j hinter i. Das Paket tensor automatisiert das mit \\tensor{T}{^i_j} und T\\indices{^i_j}.",
        },
        {
          question: "Wie schreibe ich das Kronecker-Delta und das Levi-Civita-Symbol in LaTeX?",
          answer:
            "Das Kronecker-Delta ist \\delta_{ij} oder \\delta^i_j, und das Levi-Civita-Symbol ist \\epsilon_{ijk} oder \\varepsilon_{ijk}, je nachdem, welche Epsilon-Form in Ihrem Fachgebiet üblich ist. Beide sind eingebaute griechische Buchstaben mit Indizes.",
        },
        {
          question: "Wie schreibe ich die Einsteinsche Summenkonvention in LaTeX?",
          answer:
            "Einen speziellen Befehl gibt es nicht: Ein oben und unten wiederholter Index impliziert die Summe, A^i B_i bedeutet also \\sum_i A^i B_i. Schreiben Sie das \\sum nur dann aus, wenn Sie es zeigen wollen, und verwenden Sie griechische Indizes wie \\mu und \\nu für Raumzeit-Komponenten.",
        },
      ],
    },
    topology: {
      title: "Topologie-Symbole in LaTeX: Abschluss, Rand, Homöomorphie und Aleph",
      intro: (
        <IntroP>
          Die Topologie-Symbole sind in LaTeX größtenteils eingebaut. Der Abschluss einer Menge
          ist <Cmd>{"\\overline{A}"}</Cmd>, ihr Rand ist <Cmd>{"\\partial A"}</Cmd> und ihr
          Inneres ist <Cmd>{"A^\\circ"}</Cmd> oder <Cmd>{"\\operatorname{int} A"}</Cmd>. Die
          Homöomorphie wird meist <Cmd>{"\\cong"}</Cmd> (≅) geschrieben, die Homotopieäquivalenz{" "}
          <Cmd>{"\\simeq"}</Cmd>, die Fundamentalgruppe <Cmd>{"\\pi_1(X)"}</Cmd> und die Homologie{" "}
          <Cmd>{"H_n(X)"}</Cmd>. Die Mengennotation bleibt erhalten: Element von ist{" "}
          <Cmd>{"\\in"}</Cmd> und Teilmenge oder gleich ist <Cmd>{"\\subseteq"}</Cmd>. Für
          Kardinalzahlen ist <Cmd>{"\\aleph_0"}</Cmd> eingebaut, <Cmd>{"\\beth"}</Cmd> stammt aus
          amssymb. Die Tabelle zeigt die gebräuchlichsten Topologie-Symbole mit dem jeweils
          benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: die gebräuchlichsten Topologie-Symbole",
      use: {
        "\\overline{A}": "Abschluss (abgeschlossene Hülle)",
        "\\partial A": "Rand",
        "A^\\circ": "Inneres (auch \\operatorname{int} A)",
        "X \\cong Y": "Homöomorph",
        "X \\simeq Y": "Homotopieäquivalent",
        "\\pi_1(X, x_0)": "Fundamentalgruppe",
        "H_n(X)": "n-te Homologiegruppe",
        "\\mathcal{T}": "Topologie auf einer Menge",
        "x \\in U \\subseteq X": "Element von, Teilmenge oder gleich",
        "S^n": "n-Sphäre",
        "\\aleph_0": "Aleph null (abzählbare Kardinalzahl)",
        "\\beth_1": "Beth-Zahl",
      },
      faqHeading: "Häufige Fragen zu Topologie-Symbolen in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich das Homöomorphiezeichen in LaTeX?",
          answer:
            "Die meisten Texte verwenden \\cong (≅): $X \\cong Y$. Manche Autoren nehmen \\approx (≈) oder \\simeq (≃), wobei \\simeq meist Homotopieäquivalenz bezeichnet. Alle drei sind eingebaut; legen Sie Ihre Konvention einmal fest, wenn Mehrdeutigkeit droht.",
        },
        {
          question: "Wie schreibe ich das Beth-Symbol in LaTeX?",
          answer:
            "\\beth ergibt ℶ und benötigt \\usepackage{amssymb}, das auch \\gimel und \\daleth bereitstellt. \\aleph (ℵ) ist eingebaut. Kardinalzahlen tragen wie gewohnt Indizes: \\aleph_0, \\beth_1, und \\mathfrak{c} (amssymb) für die Mächtigkeit des Kontinuums.",
        },
        {
          question: "Wie schreibe ich Abschluss und Inneres einer Menge in LaTeX?",
          answer:
            "Der Abschluss ist \\overline{A}, bei einem einzelnen Buchstaben auch \\bar{A}, oder \\operatorname{cl}(A). Das Innere ist A^\\circ oder \\operatorname{int}(A) mit amsmath, und der Rand ist \\partial A. Verwenden Sie für alles, was länger als ein Buchstabe ist, \\overline statt \\bar.",
        },
      ],
    },
    trigonometry: {
      title: "Trigonometrie in LaTeX: Sinus, Kosinus, Tangens und Arkusfunktionen",
      intro: (
        <IntroP>
          Die trigonometrischen Funktionen haben in LaTeX eigene Befehle: <Cmd>{"\\sin"}</Cmd>,{" "}
          <Cmd>{"\\cos"}</Cmd>, <Cmd>{"\\tan"}</Cmd>, <Cmd>{"\\cot"}</Cmd>, <Cmd>{"\\sec"}</Cmd>{" "}
          und <Cmd>{"\\csc"}</Cmd>, dazu die Umkehrfunktionen <Cmd>{"\\arcsin"}</Cmd>,{" "}
          <Cmd>{"\\arccos"}</Cmd> und <Cmd>{"\\arctan"}</Cmd> sowie die Hyperbelfunktionen{" "}
          <Cmd>{"\\sinh"}</Cmd>, <Cmd>{"\\cosh"}</Cmd> und <Cmd>{"\\tanh"}</Cmd>. Verwenden Sie
          immer den Befehl, statt sin zu tippen: Der Befehl setzt den Namen aufrecht und mit dem
          richtigen Abstand, ein einfach getipptes sin ergibt dagegen drei kursive Variablen.
          Potenzen stehen direkt nach dem Namen, <Cmd>{"\\sin^2 \\theta"}</Cmd>, und Grad sind ein
          hochgestellter Kreis, <Cmd>{"30^\\circ"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten
          trigonometrischen Symbole mit dem jeweils benötigten Paket; die vollständige Liste folgt
          weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: trigonometrische Funktionen und Identitäten",
      use: {
        "\\sin \\theta": "Sinus",
        "\\cos \\theta": "Kosinus",
        "\\tan \\theta": "Tangens",
        "\\sec \\theta": "Sekans (\\csc Kosekans, \\cot Kotangens)",
        "\\arcsin x": "Arkussinus",
        "\\arccos x": "Arkuskosinus",
        "\\arctan x": "Arkustangens",
        "\\sin^{-1} x": "Arkussinus, Potenzschreibweise",
        "\\sin^2 \\theta + \\cos^2 \\theta = 1": "Trigonometrischer Pythagoras",
        "\\sinh x": "Sinus hyperbolicus (\\cosh, \\tanh)",
        "30^\\circ": "Grad",
        "\\operatorname{arcsec} x": "Arkussekans (nicht eingebaut)",
      },
      faqHeading: "Häufige Fragen zur Trigonometrie in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich Sinus, Kosinus und Tangens in LaTeX?",
          answer:
            "Verwenden Sie die eingebauten Befehle im Mathematikmodus: $\\sin x$, $\\cos x$, $\\tan x$, und \\cot, \\sec und \\csc für die Kehrwertfunktionen. Wer sin ohne Backslash tippt, erhält das kursive Produkt s·i·n, und genau deshalb gibt es die Befehle.",
        },
        {
          question: "Wie schreibe ich Arkusfunktionen wie den Arkussinus in LaTeX?",
          answer:
            "\\arcsin, \\arccos und \\arctan sind eingebaut, ebenso \\sinh, \\cosh, \\tanh und \\coth. \\arcsec, \\arccsc, \\arccot, \\sech und \\csch dagegen nicht: Schreiben Sie \\operatorname{arcsec} x, oder fügen Sie mit amsmath \\DeclareMathOperator{\\arcsec}{arcsec} in die Präambel ein. Die Potenzschreibweise \\sin^{-1} x funktioniert ebenfalls.",
        },
        {
          question: "Wie schreibe ich Sinus zum Quadrat und Grad in LaTeX?",
          answer:
            "Setzen Sie den Exponenten direkt hinter den Befehl: \\sin^2 \\theta. Für Grad verwenden Sie einen hochgestellten Kreis, $30^\\circ$, oder \\ang{30} aus siunitx für eine einheitliche Formatierung in Text und Tabellen.",
        },
      ],
    },
    units: {
      title: "Einheiten in LaTeX: siunitx, Gradzeichen und SI-Einheiten",
      intro: (
        <IntroP>
          Einheiten gelingen in LaTeX am einfachsten mit dem Paket siunitx:{" "}
          <Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> setzt eine Zahl mit ihrer
          Einheit aufrecht und mit dem richtigen Abstand, <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd>{" "}
          setzt eine Einheit allein und <Cmd>{"\\num{6.022e23}"}</Cmd> formatiert eine Zahl. Ohne
          siunitx setzen Sie Einheiten von Hand aufrecht, wie in{" "}
          <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>, mit einem schmalen Leerraum <Cmd>{"\\,"}</Cmd>{" "}
          zwischen Zahl und Einheit. Das Gradzeichen ist <Cmd>{"^\\circ"}</Cmd> im
          Mathematikmodus oder <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd> mit siunitx, und das
          Ångström ist <Cmd>{"\\AA"}</Cmd>. Die Tabelle zeigt die gebräuchlichsten Befehle für
          Einheiten mit dem jeweils benötigten Paket; die vollständige Liste folgt weiter unten.
        </IntroP>
      ),
      quickRefHeading: "Kurzreferenz: Einheiten mit und ohne siunitx",
      use: {
        "\\qty{9.81}{\\metre\\per\\second\\squared}": "Größe mit Einheit",
        "\\unit{\\kilo\\gram}": "Einheit allein",
        "\\num{6.022e23}": "Formatierte Zahl",
        "\\qty{20}{\\degreeCelsius}": "Grad Celsius",
        "\\ang{45}": "Winkel in Grad",
        "\\qty{10}{\\micro\\metre}": "SI-Präfix (Mikrometer)",
        "\\qty{5}{\\kilo\\ohm}": "Kiloohm",
        "9.81\\,\\mathrm{m/s^2}": "Einheiten von Hand, ohne Paket",
        "^\\circ": "Gradzeichen im Mathematikmodus",
        "\\AA": "Ångström (Textmodus)",
        "\\textdegree": "Gradzeichen im Textmodus",
        "\\hbar": "Reduzierte Planck-Konstante",
      },
      faqHeading: "Häufige Fragen zu Einheiten in LaTeX",
      faq: [
        {
          question: "Wie schreibe ich Einheiten in LaTeX?",
          answer:
            "Laden Sie \\usepackage{siunitx} und schreiben Sie \\qty{3.0}{\\metre\\per\\second} für einen Wert mit Einheit, \\unit{\\kilo\\gram} für eine Einheit allein und \\num{1.5e-3} für eine Zahl. Version 3 von siunitx verwendet \\qty und \\unit; die alten Befehle \\SI und \\si funktionieren weiterhin. Ohne das Paket schreiben Sie 3.0\\,\\mathrm{m/s}.",
        },
        {
          question: "Wie schreibe ich das Gradzeichen in LaTeX?",
          answer:
            "Im Mathematikmodus verwenden Sie einen hochgestellten Kreis: $90^\\circ$, oder $20^\\circ\\mathrm{C}$ für eine Temperatur. Im Text ergibt \\textdegree das Zeichen °. Mit siunitx sorgen \\ang{90} und \\qty{20}{\\degreeCelsius} überall für einheitliche Abstände.",
        },
        {
          question: "Gibt es einen Konflikt zwischen siunitx und dem Paket physics?",
          answer:
            "Beide Pakete definieren einen Befehl \\qty, daher führt es zu einem Konflikt, wenn Sie sie zusammen laden. Wenn Sie physics brauchen, verwenden Sie für Größen mit Einheiten die ältere siunitx-Form \\SI{9.81}{\\metre\\per\\second\\squared}, die siunitx in Version 3 weiterhin unterstützt.",
        },
      ],
    },
    accents: {
      title: "Akzente und Sonderbuchstaben in LaTeX",
      intro: (
        <>
          <IntroP>
            Im Text setzt LaTeX Buchstaben mit Akzent aus einem Befehl und dem Grundbuchstaben
            zusammen: Akut <Cmd>{"\\'e"}</Cmd> (é), Gravis <Cmd>{"\\`e"}</Cmd> (è), Zirkumflex{" "}
            <Cmd>{"\\^e"}</Cmd> (ê), Umlaut bzw. Trema <Cmd>{"\\\"o"}</Cmd> (ö), Tilde{" "}
            <Cmd>{"\\~n"}</Cmd> (ñ), Cedille <Cmd>{"\\c{c}"}</Cmd> (ç), Hatschek{" "}
            <Cmd>{"\\v{s}"}</Cmd> (š), Breve <Cmd>{"\\u{a}"}</Cmd> (ă), ungarischer Doppelakut{" "}
            <Cmd>{"\\H{o}"}</Cmd> (ő), Punkt darüber <Cmd>{"\\.z"}</Cmd> (ż), Makron{" "}
            <Cmd>{"\\=a"}</Cmd> (ā), Punkt darunter <Cmd>{"\\d{a}"}</Cmd>, Strich darunter{" "}
            <Cmd>{"\\b{a}"}</Cmd>, Ring <Cmd>{"\\r{a}"}</Cmd> (å) und Ogonek{" "}
            <Cmd>{"\\k{e}"}</Cmd> (ę). Einige vollständige Buchstaben haben einen eigenen Befehl:{" "}
            <Cmd>{"\\l"}</Cmd> (ł), <Cmd>{"\\o"}</Cmd> (ø), <Cmd>{"\\ae"}</Cmd> (æ) und{" "}
            <Cmd>{"\\ss"}</Cmd> (ß). Um ein i oder j mit Akzent zu versehen, verwenden Sie die
            punktlosen Formen <Cmd>{"\\i"}</Cmd> und <Cmd>{"\\j"}</Cmd>, wie in{" "}
            <Cmd>{"\\'{\\i}"}</Cmd> für í, damit der Akzent nicht mit dem Punkt kollidiert.
          </IntroP>
          <IntroP>
            Der Mathematikmodus verwendet einen eigenen Satz von Akzenten, die über einer Variablen
            statt über einem Textbuchstaben stehen: <Cmd>{"\\hat{x}"}</Cmd>,{" "}
            <Cmd>{"\\bar{x}"}</Cmd>, <Cmd>{"\\vec{v}"}</Cmd>, <Cmd>{"\\tilde{x}"}</Cmd>,{" "}
            <Cmd>{"\\dot{x}"}</Cmd> und <Cmd>{"\\ddot{x}"}</Cmd> für Ableitungen,{" "}
            <Cmd>{"\\acute"}</Cmd>, <Cmd>{"\\grave"}</Cmd>, <Cmd>{"\\breve"}</Cmd> und{" "}
            <Cmd>{"\\check"}</Cmd>. Für mehr als ein Zeichen bietet LaTeX selbst die mitwachsenden
            Akzente <Cmd>{"\\widehat{xy}"}</Cmd> und <Cmd>{"\\widetilde{xy}"}</Cmd>, dazu{" "}
            <Cmd>{"\\overline{z}"}</Cmd> für Konjugierte und <Cmd>{"\\overrightarrow{AB}"}</Cmd> für
            Vektoren; keiner davon benötigt amsmath.
          </IntroP>
          <IntroP>
            Seit 2018 liest LaTeX standardmäßig UTF-8, Sie können é, ö oder ñ also direkt im
            Quelltext eingeben (ältere Installationen benötigen{" "}
            <Cmd>{"\\usepackage[utf8]{inputenc}"}</Cmd>). Fügen Sie{" "}
            <Cmd>{"\\usepackage[T1]{fontenc}"}</Cmd> hinzu, damit Buchstaben mit Akzent einzelne
            Glyphen sind, die korrekt getrennt und kopiert werden, statt aus zwei Teilen
            zusammengesetzt zu sein. Ein praktisches Beispiel finden Sie in unserem Leitfaden zu{" "}
            <IntroLink
              href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
              external
            >
              spanischen Zeichen und Akzenten in LaTeX
            </IntroLink>
            , oder in der Einführung in{" "}
            <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
              Sonderzeichen in LaTeX
            </IntroLink>
            . Klicken Sie unten auf eine Karte, um ihren Befehl zu kopieren.
          </IntroP>
        </>
      ),
    },
  },
};

export default de;
