import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "Relazione “precede o uguale” curva",
    meaning: "Relazione curva “precede o uguale”, usata per ordini non stretti e relazioni di preferenza diverse dal consueto ≤ numerico.",
    usage: "Chi si occupa di teoria degli ordini o di economia ricorre a \\preccurlyeq quando un preordine astratto richiede un simbolo visibilmente diverso da \\leq, per esempio la preferenza debole di un consumatore x \\preccurlyeq y o l'ordine di dominanza sulle partizioni. Il suo corrispondente stretto è \\prec e il suo speculare è \\succcurlyeq. Non confondetelo con \\preceq, che ha sotto una barra diritta invece di quella curva; alcuni autori usano entrambi nello stesso articolo per indicare due ordini distinti. Essendo una relazione, TeX lo circonda automaticamente di spazi spessi, quindi non aggiungete mai a mano comandi \\, o \;.",
    example: "x \\preccurlyeq y \\text{ e } y \\preccurlyeq z \\implies x \\preccurlyeq z",
  },
  "curly-succeeds": {
    name: "Relazione “segue o uguale” curva",
    meaning: "Relazione curva “segue o uguale”, inversa di \\preccurlyeq, per ordini deboli, preferenze e maggiorazione.",
    usage: "In microeconomia x \\succcurlyeq y si legge “x è debolmente preferito a y”, e in algebra lineare indica talvolta la maggiorazione o una disuguaglianza generalizzata. Il simbolo a barra diritta \\succeq è simile ed è la scelta più comune per le matrici semidefinite positive (A \\succeq 0), quindi scegliete una convenzione e mantenetela coerente in tutto l'articolo. La versione stretta è \\succ. Poiché negare un simbolo di relazione con \\not può dare un risultato goffo, controllate il risultato: per la forma a barra diritta esistono negazioni dedicate come \\nsucceq, che di solito hanno un aspetto migliore di \\not\\succcurlyeq.",
  },
  "not-less-than": {
    name: "Negazione del minore",
    meaning: "Segno di minore negato: afferma che una quantità non è strettamente più piccola di un'altra.",
    usage: "Scrivere a \\nless b equivale logicamente ad a \\geq b in un ordine totale, ma in un ordine parziale le due scritture dicono cose diverse, ed è proprio lì che \\nless trova il suo posto: due elementi non confrontabili soddisfano sia a \\nless b sia b \\nless a. Il glifo è un unico simbolo precomposto con una barra, quindi è più pulito di \\not<, la cui barra può risultare decentrata. Il suo compagno per l'altra direzione è \\ngtr. Per le versioni non strette negate usate \\nleq o \\nleqslant anziché sovrapporre \\not.",
    example: "a \\nless b \\text{ e } b \\nless a \\text{ (non confrontabili)}",
  },
  "not-greater-than": {
    name: "Negazione del maggiore",
    meaning: "Segno di maggiore negato, che afferma che il membro sinistro non è strettamente più grande del destro.",
    usage: "Il nome del comando elimina le vocali della parola inglese per “maggiore” (\\ngtr, non \\ngt né \\ngreater), il che trae in inganno chi lo digita a memoria. In un ordine lineare x \\ngtr y significa semplicemente x \\leq y, quindi la maggior parte degli autori preferisce la forma positiva; \\ngtr è più naturale negli ordini parziali, nei reticoli o quando si enuncia il fallimento di un'ipotesi, come una successione che non è definitivamente maggiore di una certa soglia. Abbinatelo a \\nless per la direzione opposta e a \\ngeq per la versione non stretta negata. Ha la spaziatura da relazione, come > stesso.",
    example: "f(n) \\ngtr g(n) \\quad \\text{per infiniti } n",
  },
  "not-less-or-equal": {
    name: "Negazione del minore o uguale",
    meaning: "Non minore o uguale: negazione di ≤, con una barra obliqua che attraversa la forma a barra orizzontale.",
    usage: "Usate \\nleq quando affermate che una disuguaglianza non vale, per esempio nei controesempi o negli insiemi parzialmente ordinati, dove x \\nleq y non implica y \\leq x. Ci sono tre glifi correlati: \\nleq nega \\leq a barra singola, \\nleqslant nega \\leqslant inclinato e \\nleqq nega \\leqq a doppia barra. Fate corrispondere la negazione allo stile non negato usato nel resto del documento, così che i simboli sembrino della stessa famiglia. Il simbolo precomposto \\nleq è preferibile a \\not\\leq, che colloca una barra generica non necessariamente allineata con quella del simbolo.",
    example: "\\exists\\, x, y \\in P : x \\nleq y \\text{ e } y \\nleq x",
  },
  "not-greater-or-equal": {
    name: "Negazione del maggiore o uguale",
    meaning: "Non maggiore o uguale: la forma barrata di ≥, che segnala che la disuguaglianza non vale.",
    usage: "In analisi reale x \\ngeq 0 equivale semplicemente a x < 0, ma negli ordinamenti vettoriali o matriciali è più debole: un vettore può non essere non negativo componente per componente senza essere negativo, quindi lì \\ngeq è il simbolo corretto. Appartiene alla stessa famiglia di \\nleq, \\ngeqslant e \\ngeqq, e conviene scegliere la versione il cui gemello non negato compare nel vostro testo. Evitate \\not\\geq se vi interessa l'aspetto, perché la barra generica è posizionata per = e può sembrare fuori posto. Come tutte le relazioni, riceve automaticamente spazi spessi.",
    example: "\\mathbf{v} \\ngeq \\mathbf{0} \\text{ anche se } v_1 > 0",
  },
  "minimum": {
    name: "Minimo",
    meaning: "Operatore di minimo, che dà il valore più piccolo di un insieme finito o il valore minimo raggiunto da una funzione.",
    usage: "\\min è un nome di operatore predefinito: stampa “min” in tondo con la spaziatura corretta e, nelle formule in evidenza, il pedice va sotto, come in \\min_{x \\in S} f(x). In linea il pedice si sposta di lato per non aumentare l'altezza della riga; forzatelo sotto con \\min\\limits_{x} se proprio serve. Digitare semplicemente min in modalità matematica produce tre variabili in corsivo moltiplicate tra loro, un errore frequente. Per il punto che realizza il minimo non esiste un comando predefinito, quindi definite \\DeclareMathOperator*{\\argmin}{arg\\,min} nel preambolo. Distinguete \\min da \\inf, che può non essere raggiunto.",
  },
  "maximum": {
    name: "Massimo",
    meaning: "Operatore di massimo: l'elemento più grande di un insieme o il valore massimo che una funzione raggiunge sul suo dominio.",
    usage: "I problemi di ottimizzazione, la norma del massimo \\|x\\|_\\infty = \\max_i |x_i| e le funzioni di attivazione ReLU \\max(0, x) si basano tutti su \\max. Rispetto ai limiti si comporta come \\sum: sotto l'operatore nelle formule in evidenza, accanto nel testo in linea. Le parentesi che lo seguono non si ridimensionano automaticamente, quindi scrivete \\max\\left( a, b \\right) o \\max\\bigl( \\dots \\bigr) quando l'argomento contiene frazioni. Quando il massimo potrebbe non esistere, usate invece \\sup. Per un operatore argmax dichiaratene uno con \\DeclareMathOperator* nella forma con asterisco, così che anche il suo pedice vada sotto nelle formule in evidenza.",
  },
  "infimum": {
    name: "Estremo inferiore",
    meaning: "Estremo inferiore, il massimo dei minoranti di un insieme di numeri reali, che esiste anche quando il minimo non esiste.",
    usage: "L'insieme \\{1/n : n \\in \\mathbb{N}\\} ha \\inf uguale a 0 ma nessun minimo: è l'esempio classico del perché l'analisi abbia bisogno di \\inf invece di \\min. Il comando compone “inf” in tondo con spaziatura da operatore e limiti sotto nelle formule in evidenza, quindi \\inf_{n \\ge 1} a_n appare corretto in un ambiente equation. Un errore comune è confondere \\inf con \\infty, il simbolo di infinito. Tra gli operatori correlati ci sono \\liminf, che esiste già come comando, e l'estremo inferiore essenziale, che dovete definire voi, per esempio con \\operatorname*{ess\\,inf}.",
  },
  "supremum": {
    name: "Estremo superiore",
    meaning: "Estremo superiore: il minimo dei maggioranti di un insieme, centrale per la completezza dei reali e per la definizione delle norme.",
    usage: "Le norme operatoriali si scrivono \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|, e la norma uniforme di una funzione è \\sup_x |f(x)|. Il comando pone il pedice sotto nelle formule in evidenza e a destra in linea, proprio come \\lim. Usate \\limsup per il limite superiore invece di combinare a mano \\lim e \\sup, e ricordate che \\sup esiste per ogni sottoinsieme non vuoto e limitato dei reali, mentre \\max può non esistere. Quando la condizione nel pedice è lunga, impilate le righe con \\substack{...} sotto l'operatore invece di comprimere un unico pedice largo.",
  },
  "least-upper-bound": {
    name: "Minimo dei maggioranti",
    meaning: "Abbreviazione “lub”, dall'espressione inglese per minimo dei maggioranti: vecchio sinonimo di estremo superiore, comune nella teoria degli ordini e dei reticoli.",
    usage: "I manuali sugli insiemi parzialmente ordinati e sui reticoli scrivono talvolta \\text{lub}\\, S invece di \\sup S, e l'unione reticolare a \\vee b è il lub di una coppia. Comporla con \\text funziona, ma ha due inconvenienti: \\text copia il font circostante, quindi dentro un teorema in corsivo diventa corsiva, e non fornisce la spaziatura da operatore prima dell'argomento. L'approccio più pulito è \\operatorname{lub} o una riga di preambolo \\DeclareMathOperator{\\lub}{lub}, che la mantiene in tondo e spaziata come \\sup. Usate la dichiarazione con asterisco se volete i pedici sotto nelle formule in evidenza.",
  },
  "greatest-lower-bound": {
    name: "Massimo dei minoranti",
    meaning: "Abbreviazione “glb”, dall'espressione inglese per massimo dei minoranti: il nome usato nella teoria degli ordini per l'estremo inferiore di un insieme.",
    usage: "Nella teoria dei reticoli l'intersezione reticolare a \\wedge b è definita come il glb di a e b, e i reticoli completi sono quelli in cui ogni sottoinsieme ha glb e lub. Poiché LaTeX non ha un comando \\glb predefinito, si scrive \\text{glb}, che appare in tondo nel testo normale ma eredita il corsivo dentro gli ambienti dei teoremi e non ha lo spazio sottile che un operatore dovrebbe avere. Preferite \\operatorname{glb} o \\DeclareMathOperator{\\glb}{glb} per risultati coerenti. Se i vostri lettori vengono dall'analisi più che dalla teoria degli ordini, \\inf può essere la notazione più familiare per lo stesso concetto.",
  },
};

export default text;
