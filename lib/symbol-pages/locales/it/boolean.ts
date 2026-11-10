import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/boolean/<slug>. */
const text: SymbolPageTranslations = {
  "nand": {
    name: "NAND",
    meaning: "Cuneo con una barra sopra, usato come connettivo NAND (barra di Sheffer): vero tranne quando entrambi gli ingressi sono veri.",
    usage: "Il NAND è funzionalmente completo, quindi ogni funzione booleana si può costruire solo con p \\barwedge q, ed è proprio per questo che i progettisti digitali lo usano. I logici scrivono la barra di Sheffer anche come barra verticale, p \\mid q o p \\uparrow q, quindi dichiarate la vostra notazione una volta. \\barwedge è un operatore binario e riceve uno spazio medio su ciascun lato. Non confondetelo con \\veebar, che ha la barra sotto il simbolo di disgiunzione e di solito indica l'or esclusivo, né con \\doublebarwedge, che porta due barre. La sua tavola di verità è il complemento di quella di \\wedge.",
  },
  "nor-operator-bar-over-vee": {
    name: "Operatore NOR (OR negato)",
    meaning: "Un simbolo di disgiunzione (\\vee) con un accento a barra sopra, costruito a mano per rappresentare il NOR (freccia di Peirce): vero solo quando entrambi gli ingressi sono falsi.",
    usage: "Nei font matematici comuni non esiste un singolo comando standard per il glifo NOR, quindi \\bar{\\vee} lo simula ponendo un accento sopra il simbolo di or. Un effetto collaterale: un simbolo accentato diventa un atomo ordinario e perde la spaziatura da operatore binario che aveva \\vee, quindi scrivete \\mathbin{\\bar{\\vee}} per ripristinarla, idealmente dentro un \\newcommand. La notazione alternativa p \\downarrow q (freccia di Peirce) è ampiamente compresa ed evita il problema. Non confondetelo con \\veebar, la cui barra sta sotto il simbolo di disgiunzione e normalmente significa XOR.",
  },
  "boolean-and": {
    name: "AND booleano",
    meaning: "Punto centrato tra due variabili: è la notazione ingegneristica per l'AND booleano (congiunzione logica).",
    usage: "L'algebra della commutazione e l'elettronica digitale scrivono la congiunzione in forma moltiplicativa: A \\cdot B, o semplicemente AB, rispecchiando il fatto che l'AND si comporta come la moltiplicazione su 0 e 1. Nella logica formale la stessa operazione si scrive A \\wedge B o A \\land B. \\cdot è un operatore binario, quindi riceve già uno spazio medio; non usate un punto fermo, che in modalità matematica si comporta come punteggiatura e sta sulla linea di base. Molti libri di testo omettono del tutto il punto nelle espressioni in forma di somma di prodotti come AB + \\overline{A}C, mantenendo \\cdot solo dove la giustapposizione sarebbe ambigua, per esempio tra nomi di segnali di più lettere.",
  },
  "boolean-or": {
    name: "OR booleano",
    meaning: "Segno più usato come OR booleano nell'algebra della commutazione: l'uscita vale 1 quando almeno un ingresso vale 1.",
    usage: "I progettisti di circuiti scrivono la disgiunzione come A + B, così le forme a somma di prodotti come AB + \\overline{A}C si leggono in modo naturale. Fate attenzione al significato aritmetico: nell'algebra di Boole 1 + 1 = 1, mentre nel campo con due elementi il segno più indica lo XOR e 1 + 1 = 0, ed è per questo che lo XOR riceve spesso un simbolo proprio, \\oplus. I logici scrivono lo stesso OR come A \\vee B o A \\lor B. Non serve alcun comando speciale: il + ha già la spaziatura da operatore binario, e nelle espressioni lunghe potete andare a capo prima di un + dentro un ambiente multline.",
  },
  "boolean-not": {
    name: "NOT booleano",
    meaning: "Barra tracciata per tutta la larghezza del suo argomento; indica il NOT booleano nei circuiti logici e la chiusura di un insieme in topologia.",
    usage: "Nella logica digitale \\overline{A} è il segnale invertito, e \\overline{A \\cdot B} traccia un'unica barra continua sopra un'intera espressione, che è il motivo visivo per cui gli ingegneri la preferiscono a un \\neg prefisso. I topologi usano lo stesso costrutto per la chiusura di un insieme. Rispetto a \\bar{A}, che è un accento a larghezza fissa pensato per una sola lettera, \\overline si estende per coprire tutto ciò che sta tra le graffe. Le negazioni annidate come \\overline{\\overline{A}} si sovrappongono in modo pulito. Per una barra leggermente più corta sulle singole lettere alcuni autori preferiscono \\bar; vanno bene entrambi, purché siate coerenti.",
  },
  "complement": {
    name: "Complemento",
    meaning: "Un apice dopo una variabile o un insieme: notazione compatta per il complemento o la negazione booleana di A.",
    usage: "I corsi di teoria degli insiemi scrivono spesso A' per il complemento U \\setminus A, e alcuni libri di progettazione logica scrivono A' invece di \\overline{A} perché sta su una riga ed è facile da digitare. In modalità matematica l'apostrofo diventa automaticamente un apice \\prime, quindi A'' dà un doppio apice con la spaziatura corretta. Il rischio è l'ambiguità: A' indica anche le derivate, gli insiemi derivati in topologia e gli spazi duali. Le alternative includono A^c e A^{\\complement}. Qualunque scegliate, definitela una volta vicino all'inizio del documento.",
  },
  "de-morgan": {
    name: "Legge di De Morgan",
    meaning: "La legge di De Morgan in notazione booleana: il complemento di un AND è uguale all'OR dei complementi.",
    usage: "Questa identità permette ai progettisti di convertire circuiti basati sull'AND in circuiti basati sull'OR ed è il motivo per cui una porta NAND equivale a una porta OR con ingressi invertiti. La sua duale si scrive \\overline{A + B} = \\overline{A} \\cdot \\overline{B}. L'esempio mostra perché \\overline è importante: un'unica barra lunga sopra A \\cdot B è visibilmente diversa da barre separate sopra ciascuna lettera, e questa distinzione è tutto il contenuto della legge. In notazione insiemistica la stessa legge è (A \\cap B)^c = A^c \\cup B^c, e in logica \\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q.",
  },
};

export default text;
