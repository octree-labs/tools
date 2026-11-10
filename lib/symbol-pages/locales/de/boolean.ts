import type { SymbolPageTranslations } from "../types";

/** German copy for /de/symbols/boolean/<slug>. */
const text: SymbolPageTranslations = {
  "nand": {
    name: "NAND-Verknüpfung",
    meaning: "Ein Keil mit einem Strich darüber, verwendet als NAND-Junktor (Sheffer-Strich): wahr, außer wenn beide Eingänge wahr sind.",
    usage: "NAND ist funktional vollständig, sodass sich jede boolesche Funktion allein aus p \\barwedge q aufbauen lässt, und genau aus diesem Grund setzen Digitaldesigner es ein. In der Logik schreibt man den Sheffer-Strich auch als senkrechten Strich, p \\mid q, oder als p \\uparrow q; legen Sie Ihre Notation daher einmal fest. \\barwedge ist ein binärer Operator und erhält auf jeder Seite einen mittleren Abstand. Verwechseln Sie es nicht mit \\veebar, bei dem der Strich unter einem Vee steht und das meist das ausschließende Oder bezeichnet, oder mit \\doublebarwedge, das zwei Striche trägt. Seine Wahrheitstabelle ist das Komplement der von \\wedge.",
  },
  "nor-operator-bar-over-vee": {
    name: "NOR-Verknüpfung (überstrichenes ODER)",
    meaning: "Ein Oder-Zeichen (\\vee) mit einem Strichakzent darüber, von Hand gebaut, um NOR (Peirce-Pfeil) darzustellen: nur wahr, wenn beide Eingänge falsch sind.",
    usage: "In den gängigen Mathematikschriften gibt es keinen einzelnen Standardbefehl für das NOR-Zeichen, daher behilft man sich mit \\bar{\\vee}, das einen Akzent über das Oder-Zeichen setzt. Ein Nebeneffekt: Ein Symbol mit Akzent wird zu einem gewöhnlichen Atom und verliert den Abstand eines binären Operators, den \\vee hatte; schreiben Sie daher \\mathbin{\\bar{\\vee}}, um ihn wiederherzustellen, am besten innerhalb eines \\newcommand. Die alternative Notation p \\downarrow q (Peirce-Pfeil) ist weithin bekannt und umgeht das Problem. Verwechseln Sie dies nicht mit \\veebar, dessen Strich unter dem Vee sitzt und das normalerweise XOR bedeutet.",
  },
  "boolean-and": {
    name: "Boolesches UND",
    meaning: "Ein mittiger Punkt zwischen zwei Variablen, die ingenieurtechnische Notation für das boolesche UND (logische Konjunktion).",
    usage: "Schaltalgebra und Digitalelektronik schreiben die Konjunktion multiplikativ: A \\cdot B oder einfach AB, entsprechend der Tatsache, dass sich UND auf 0 und 1 wie eine Multiplikation verhält. In der formalen Logik schreibt man dieselbe Operation als A \\wedge B oder A \\land B. \\cdot ist ein binärer Operator und erhält daher bereits einen mittleren Abstand; verwenden Sie keinen Punkt, der im Mathematikmodus wie ein Satzzeichen behandelt wird und auf der Grundlinie sitzt. Viele Lehrbücher lassen den Punkt in disjunktiven Normalformen wie AB + \\overline{A}C ganz weg und behalten \\cdot nur dort, wo bloßes Nebeneinanderschreiben mehrdeutig wäre, zum Beispiel zwischen Signalnamen aus mehreren Buchstaben.",
  },
  "boolean-or": {
    name: "Boolesches ODER",
    meaning: "Ein Pluszeichen als boolesches ODER in der Schaltalgebra: Der Ausgang ist 1, wenn mindestens ein Eingang 1 ist.",
    usage: "Schaltungsentwickler schreiben die Disjunktion als A + B, sodass sich disjunktive Normalformen wie AB + \\overline{A}C natürlich lesen. Achten Sie auf die arithmetische Bedeutung: In der booleschen Algebra gilt 1 + 1 = 1, während das Pluszeichen im Körper mit zwei Elementen XOR bedeutet und 1 + 1 = 0 gilt, weshalb XOR oft ein eigenes Symbol \\oplus erhält. In der Logik schreibt man dasselbe ODER als A \\vee B oder A \\lor B. Ein spezieller Befehl ist nicht nötig; das + hat bereits den Abstand eines binären Operators, und in langen Ausdrücken können Sie in einer multline-Umgebung vor einem + umbrechen.",
  },
  "boolean-not": {
    name: "Boolesches NICHT",
    meaning: "Ein Strich über die volle Breite seines Arguments; kennzeichnet das boolesche NICHT in Logikschaltungen und den Abschluss einer Menge in der Topologie.",
    usage: "In der Digitallogik ist \\overline{A} das invertierte Signal, und \\overline{A \\cdot B} zeichnet einen durchgehenden Strich über einen ganzen Ausdruck, was der optische Grund ist, warum Ingenieure es einem vorangestellten \\neg vorziehen. In der Topologie verwendet man dieselbe Konstruktion für den Abschluss einer Menge. Im Vergleich zu \\bar{A}, einem Akzent mit fester Breite für einen einzelnen Buchstaben, streckt sich \\overline über alles innerhalb der Klammern. Verschachtelte Negationen wie \\overline{\\overline{A}} stapeln sich sauber. Für einen etwas kürzeren Strich über einzelnen Buchstaben bevorzugen manche Autoren \\bar; beides ist in Ordnung, solange Sie einheitlich bleiben.",
  },
  "complement": {
    name: "Komplement",
    meaning: "Ein Strich nach einer Variablen oder Menge, eine kompakte Notation für das Komplement oder die boolesche Negation von A.",
    usage: "In Vorlesungen zur Mengenlehre schreibt man A' oft für das Komplement U \\setminus A, und manche Bücher zum Logikentwurf schreiben A' statt \\overline{A}, weil es in eine Zeile passt und leicht zu tippen ist. Im Mathematikmodus wird der Apostroph automatisch zu einem hochgestellten \\prime, sodass A'' einen doppelten Strich mit korrektem Abstand ergibt. Die Gefahr ist die Mehrdeutigkeit: A' bezeichnet auch Ableitungen, Ableitungsmengen in der Topologie und Dualräume. Alternativen sind A^c und A^{\\complement}. Wofür Sie sich auch entscheiden, definieren Sie es einmal am Anfang des Dokuments.",
  },
  "de-morgan": {
    name: "De-Morgan-Gesetz",
    meaning: "Das De-Morgan-Gesetz in boolescher Notation: Das Komplement eines UND ist gleich dem ODER der Komplemente.",
    usage: "Mit dieser Identität lassen sich UND-basierte Schaltungen in ODER-basierte umwandeln, und sie ist der Grund, warum ein NAND-Gatter einem ODER-Gatter mit invertierten Eingängen entspricht. Ihre duale Form lautet \\overline{A + B} = \\overline{A} \\cdot \\overline{B}. Das Beispiel zeigt, warum \\overline wichtig ist: Ein langer Strich über A \\cdot B unterscheidet sich sichtbar von getrennten Strichen über jedem Buchstaben, und genau dieser Unterschied ist der ganze Inhalt des Gesetzes. In Mengennotation lautet dasselbe Gesetz (A \\cap B)^c = A^c \\cup B^c, in der Logik \\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q.",
  },
};

export default text;
