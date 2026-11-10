import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/computer-science/<slug>. */
const text: SymbolPageTranslations = {
  "big-o": {
    name: "O grande",
    meaning: "Limite superiore asintotico: f(n) = O(n) significa che f non cresce più rapidamente di un multiplo costante di n per n grande.",
    usage: "La notazione O grande è lo strumento principale dell'analisi degli algoritmi: la ricerca lineare richiede O(n), il merge sort O(n \\log n), la moltiplicazione di matrici ingenua O(n^3). A rigore O(g) è un insieme di funzioni, quindi f \\in O(g) è la forma precisa, anche se f(n) = O(g(n)) è la convenzione quasi universale. Alcuni autori preferiscono una \\mathcal{O}(n) calligrafica per distinguere l'operatore da una variabile chiamata O; sceglietene una e restate coerenti in tutto l'articolo. Scrivete l'argomento con il costo reale all'interno, come O(n^2 \\log n), anziché O(n^2) \\cdot \\log n, e ricordate che O limita solo dall'alto, quindi non afferma che il limite sia stretto.",
  },
  "big-omega": {
    name: "Omega grande",
    meaning: "Limite inferiore asintotico: f(n) = Omega(n) significa che f cresce almeno quanto una costante per n, per n grande.",
    usage: "La omega maiuscola esprime limiti inferiori, il più celebre dei quali afferma che ogni ordinamento basato su confronti richiede \\Omega(n \\log n) confronti nel caso peggiore. Si scrive con la maiuscola greca in tondo \\Omega; amsmath offre anche \\varOmega per una forma inclinata, che alcuni tipografi preferiscono per le variabili ma che risulta strana come operatore. Notate che la teoria analitica dei numeri usa il significato più antico di Hardy e Littlewood, in cui \\Omega significa che il limite non è o(g), quindi verificate quale definizione segue una fonte. Abbinatela a O per racchiudere un tempo di esecuzione, e passate a \\Theta quando i due lati coincidono.",
    example: "\\text{l'ordinamento per confronti richiede un tempo } \\Omega(n \\log n)",
  },
  "big-theta": {
    name: "Theta grande",
    meaning: "Limite asintotico stretto: f(n) = Theta(n) significa che f è limitata dall'alto e dal basso da multipli costanti di n.",
    usage: "Theta è l'affermazione giusta quando avete dimostrato limiti superiore e inferiore coincidenti: la ricerca binaria è \\Theta(\\log n), e il caso intermedio del Master Theorem dà \\Theta(n^{\\log_b a} \\log n). Formalmente, f \\in \\Theta(g) esattamente quando f \\in O(g) e f \\in \\Omega(g). Molti articoli scrivono O dove si intende \\Theta; i revisori delle sedi di informatica teorica se ne accorgono, quindi usate \\Theta quando il punto è la strettezza del limite. La \\Theta maiuscola è in tondo per impostazione predefinita; non confondetela con la \\theta minuscola, che di solito indica un angolo o un vettore di parametri, ed evitate \\vartheta, una variante della lettera minuscola.",
  },
  "little-o": {
    name: "o piccolo",
    meaning: "Limite superiore asintotico stretto: f(n) = o(n) significa che f(n)/n tende a 0 al crescere di n.",
    usage: "La o piccola esprime che una funzione è trascurabile rispetto a un'altra, come in \\log n = o(n) o n = o(n^2). È strettamente più forte della O grande: ogni funzione o(g) è O(g), ma n è O(n) senza essere o(n). In analisi la si usa continuamente negli sviluppi di Taylor, come \\sin x = x + o(x) per x \\to 0, quindi indicate sempre il punto limite quando non è l'infinito. Poiché è solo una o in corsivo, non esiste un comando apposito; assicuratevi che i lettori non la scambino per uno zero, e mantenetela minuscola per evitare collisioni con la O grande.",
    example: "\\log n = o(n) \\quad \\text{poiche} \\quad \\lim_{n\\to\\infty} \\frac{\\log n}{n} = 0",
  },
  "little-omega": {
    name: "omega piccolo",
    meaning: "Limite inferiore asintotico stretto: f(n) = omega(n) significa che f(n)/n cresce senza limite.",
    usage: "La omega piccola è l'immagine speculare della o piccola: f = \\omega(g) esattamente quando g = o(f), quindi n^2 = \\omega(n) e n \\log n = \\omega(n). Compare meno spesso di \\Omega, soprattutto nelle dimostrazioni di limiti inferiori e negli algoritmi randomizzati, dove una quantità deve crescere strettamente più che linearmente. Usate la greca minuscola \\omega, non la w latina, che in alcuni font le somiglia. Tenete presente che lo stesso simbolo ha più significati: in teoria dei grafi \\omega(G) è il numero di clique e in teoria dei numeri \\omega(n) conta i fattori primi distinti, quindi definite il vostro uso quando il contesto è misto.",
  },
  "modulo": {
    name: "Modulo (operatore)",
    meaning: "Operatore modulo binario: compone 'mod' tra due operandi, come in a mod n, con la spaziatura da operatore.",
    usage: "Usate \\bmod per l'operazione di resto all'interno di un'espressione, come 17 \\bmod 5 = 2 o la funzione hash h(k) = k \\bmod m. Produce mod in tondo con uno spazio medio su entrambi i lati, proprio come un operatore binario. Per le congruenze usate invece \\pmod: a \\equiv b \\pmod{n} stampa la forma tra parentesi con uno spazio aggiuntivo prima. amsmath definisce anche \\mod{n}, che dà uno spazio più ampio senza parentesi, e \\pod{n}, che mantiene le parentesi ma elimina la parola. Digitare le semplici lettere mod le metterebbe in corsivo come un prodotto di variabili, quindi usate sempre uno di questi comandi.",
  },
  "logarithm": {
    name: "Logaritmo",
    meaning: "Compone il nome della funzione logaritmo in tondo, con la spaziatura corretta prima dell'argomento.",
    usage: "\\log è uno dei nomi di funzione predefiniti di LaTeX, quindi stampa log in tondo e inserisce uno spazio sottile prima dell'argomento, a differenza di log digitato direttamente, che mette in corsivo tre variabili. Aggiungete una base con un pedice, come in \\log_2 n per i logaritmi in base 2; nell'analisi degli algoritmi un \\log senza pedice indica di solito la base 2, mentre in matematica indica spesso il logaritmo naturale, quindi dichiarate la convenzione. LaTeX predefinisce anche \\lg per i logaritmi in base 2 e \\ln per quelli naturali. Quando l'argomento è composto da più di un simbolo, aggiungete le parentesi, per esempio \\log(n+1), e usate \\left( \\right) per argomenti alti.",
  },
  "natural-log": {
    name: "Logaritmo naturale",
    meaning: "Stampa il nome del logaritmo naturale, ln, in tondo con la spaziatura da operatore.",
    usage: "\\ln è il comando predefinito per il logaritmo in base e, che dà ln in tondo seguito dalla spaziatura corretta, come si comportano \\sin o \\exp. Compare in identità dell'analisi come \\frac{d}{dx}\\ln x = \\frac{1}{x}, in teoria dell'informazione quando l'entropia si misura in nat, e nelle log-verosimiglianze. Molti matematici scrivono \\log per indicare il logaritmo naturale, mentre ingegneri e informatici riservano \\ln alla base e e \\log alla base 10 o 2, quindi scegliete in modo coerente. Per un argomento come una frazione, racchiudetelo tra \\left( e \\right) in modo che le parentesi si adattino.",
  },
};

export default text;
