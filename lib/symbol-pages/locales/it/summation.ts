import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "Sommatoria",
    meaning: "Operatore di sommatoria indicato dalla sigma maiuscola, che somma i termini di una successione.",
    usage: "Gli estremi si aggiungono con _ e ^: \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}. In modalità display gli estremi sono centrati sotto e sopra una sigma ingrandita, mentre nel testo stanno di lato e il simbolo resta piccolo; \\limits e \\nolimits modificano questo comportamento. Usate \\sum e non \\Sigma, che è solo la lettera greca e non si ingrandisce né impila gli estremi. Per condizioni su più righe sotto il simbolo, \\substack{0 \\le i \\le m \\\\ 0 < j < n} le impila in modo ordinato. Una sommatoria con il solo pedice, \\sum_i, è frequente in fisica e nell'apprendimento automatico quando l'intervallo è ovvio.",
  },
  "summation-to-infinity": {
    name: "Serie da zero a infinito",
    meaning: "Somma con indice che va da n = 0 all'infinito, la forma usata per le serie di potenze.",
    usage: "Partire da zero è naturale per le serie di potenze e di Taylor: e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} e la serie geometrica \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r} per |r| < 1. Controllate con cura l'indice iniziale, perché passare da n = 0 a n = 1 elimina il primo termine e cambia la forma chiusa. In modalità display gli estremi sono impilati; nel testo si spostano accanto alla sigma. Quando l'estremo superiore è infinito, \\sum_{n \\ge 0} è un'alternativa compatta. Le funzioni generatrici di una successione a_n si scrivono allo stesso modo, \\sum_{n=0}^{\\infty} a_n x^n.",
  },
  "product": {
    name: "Produttoria",
    meaning: "Operatore di produttoria indicato dalla pi maiuscola, che moltiplica i termini di una successione.",
    usage: "Gli estremi funzionano come per \\sum: n! = \\prod_{k=1}^{n} k e, in statistica, la verosimiglianza L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta). È più grande della lettera \\Pi e in stile display colloca gli estremi sopra e sotto, quindi non sostituitelo con la lettera greca. Passando ai logaritmi un prodotto diventa una somma, \\log\\prod_i a_i = \\sum_i \\log a_i, un passaggio presente in quasi ogni derivazione di massima verosimiglianza. Anche i prodotti cartesiani di insiemi, \\prod_{i \\in I} X_i, usano lo stesso comando. La sua controparte capovolta \\coprod indica i coprodotti.",
  },
  "coproduct": {
    name: "Coprodotto",
    meaning: "Simbolo di prodotto capovolto che indica il coprodotto, per esempio un'unione disgiunta di insiemi.",
    usage: "La teoria delle categorie e la topologia algebrica usano \\coprod_{i \\in I} X_i per il coprodotto di una famiglia: unione disgiunta per insiemi e spazi, somma diretta per gruppi abeliani o moduli. È un operatore grande come \\prod, quindi in stile display gli estremi si impilano sotto e sopra. Non confondetelo con \\amalg, la sua piccola controparte binaria per esattamente due oggetti, X \\amalg Y. Le unioni disgiunte si scrivono anche con \\bigsqcup, che ha una forma a coppa; scegliete quello in uso nel vostro settore. La costruzione duale, il prodotto categoriale, usa \\prod.",
  },
  "big-union-with-index": {
    name: "Unione grande con indice",
    meaning: "Unione grande su una famiglia indicizzata di insiemi, da A_1 fino ad A_n.",
    usage: "Le unioni finite e numerabili, \\bigcup_{i=1}^{n} A_i o \\bigcup_{n=1}^{\\infty} A_n, compaiono nella teoria della misura per l'additività numerabile, nella disuguaglianza di Boole in probabilità e in topologia per i ricoprimenti aperti. \\bigcup è l'operatore grande; \\cup è la versione binaria per due insiemi, A \\cup B. In modalità display gli estremi si impilano sotto e sopra, mentre nel testo si spostano di lato. Gli insiemi di indici non devono essere numerici: \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha è comune per ricoprimenti arbitrari. Per un'unione di insiemi a due a due disgiunti passate a \\bigsqcup oppure dichiarate la disgiunzione a parole.",
  },
  "big-intersection-with-index": {
    name: "Intersezione grande con indice",
    meaning: "Intersezione grande su una famiglia indicizzata di insiemi, da A_1 fino ad A_n.",
    usage: "Le intersezioni di famiglie indicizzate servono a enunciare risultati come il teorema degli intervalli incapsulati, \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing, o a definire la sigma-algebra generata da una collezione come intersezione di tutte quelle che la contengono. Usate \\bigcap per le famiglie e \\cap per due insiemi, A \\cap B. Le leggi di De Morgan collegano i due operatori grandi: \\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c. In stile display gli indici stanno sotto e sopra; nel testo aggiungete \\limits solo se serve. Un'intersezione su una famiglia di indici vuota ha senso solo rispetto a un insieme ambiente, quindi specificate quale.",
  },
  "big-wedge": {
    name: "Congiunzione grande",
    meaning: "Operatore ∧ grande per la congiunzione di molte proposizioni o per una potenza esterna.",
    usage: "In logica, \\bigwedge_{i=1}^{n} \\varphi_i è la congiunzione di n formule, la forma n-aria di \\wedge (anche \\land); la forma normale congiuntiva è un \\bigwedge di clausole. Nella teoria dei reticoli indica l'inf, o estremo inferiore, di un insieme, e in geometria differenziale \\bigwedge^k V è la k-esima potenza esterna di uno spazio vettoriale. Gli estremi si comportano come quelli di \\sum: impilati in display, accanto al simbolo nel testo. Non confondetelo con \\Lambda, la maiuscola greca, che alcuni autori usano per le potenze esterne a grandezza normale. L'operatore duale è \\bigvee.",
  },
  "big-vee": {
    name: "Disgiunzione grande",
    meaning: "Operatore ∨ grande per la disgiunzione di molte proposizioni o per il sup in un reticolo.",
    usage: "La logica usa \\bigvee_{i=1}^{n} \\varphi_i per una disgiunzione di n termini, generalizzando \\vee (anche \\lor); la forma normale disgiuntiva è letteralmente un \\bigvee di termini \\bigwedge. Nella teoria degli ordini e dei reticoli, \\bigvee S è il sup, o estremo superiore, di un insieme S. Essendo un operatore grande, in display gli estremi si impilano e nel testo si spostano di lato. Evitate di sostituirlo con la lettera V o con un \\vee con pedice, che restano piccoli e non posizionano gli estremi. In topologia algebrica, \\bigvee_{i} S^1 indica un bouquet di circonferenze, ottenuto incollando spazi puntati nei loro punti base.",
  },
  "big-direct-sum": {
    name: "Somma diretta grande",
    meaning: "Più cerchiato grande, la somma diretta di una famiglia di spazi o moduli.",
    usage: "Un operatore diagonalizzabile scompone il suo spazio in autospazi, V = \\bigoplus_{\\lambda} E_\\lambda, e gli anelli graduati si presentano come \\bigoplus_{n \\ge 0} R_n. \\oplus è la forma binaria per due addendi, U \\oplus W. In informatica e crittografia, \\bigoplus_{i} x_i indica spesso lo XOR di molti bit, riutilizzando lo stesso glifo. In stile display gli estremi si impilano come per \\sum. Notate che la somma diretta di infiniti moduli differisce dal prodotto diretto \\prod, che ammette infinite componenti non nulle, quindi scegliete l'operatore adatto alla vostra costruzione.",
  },
  "big-tensor-product": {
    name: "Prodotto tensoriale grande",
    meaning: "Per cerchiato grande, il prodotto tensoriale di una famiglia di spazi o operatori.",
    usage: "L'informatica quantistica scrive lo spazio degli stati di n qubit come \\bigotimes_{i=1}^{n} \\mathbb{C}^2, e l'algebra multilineare costruisce l'algebra tensoriale T(V) = \\bigoplus_k V^{\\otimes k}. La forma binaria \\otimes unisce due fattori, A \\otimes B, e indica anche il prodotto di Kronecker di matrici. Come operatore grande, \\bigotimes riceve in display gli estremi impilati. Per le potenze tensoriali ripetute di un solo spazio mantenete la forma con esponente V^{\\otimes n}, più compatta di un operatore grande con estremi. Indicate l'anello o il campo di base quando non è ovvio, come in \\otimes_R.",
  },
  "big-circle-dot": {
    name: "Punto cerchiato grande",
    meaning: "Punto cerchiato grande, usato per un prodotto n-ario elemento per elemento o simmetrico.",
    usage: "\\bigodot è la versione a operatore grande di \\odot. Nell'apprendimento automatico \\odot è il prodotto di Hadamard, cioè elemento per elemento, quindi \\bigodot_{i=1}^{n} \\mathbf{v}_i può indicare il prodotto elemento per elemento di molti vettori; gli articoli sulla decomposizione tensoriale usano \\odot per il prodotto di Khatri-Rao, e alcuni testi di algebra per le potenze simmetriche. Poiché il significato varia da un settore all'altro, definitelo nella sezione sulle notazioni. In stile display gli estremi si impilano come per \\sum. Non confondetelo con \\bigcirc, un grande cerchio vuoto con la spaziatura di un operatore binario, non un operatore grande.",
  },
  "big-square-union": {
    name: "Unione disgiunta grande",
    meaning: "Coppa quadrata grande, che indica l'unione disgiunta di una famiglia indicizzata di insiemi.",
    usage: "Scrivere X = \\bigsqcup_{i \\in I} X_i segnala sia un'unione sia che i pezzi sono a due a due disgiunti, una convenzione diffusa in topologia, teoria della misura e teoria delle categorie. La forma binaria è \\sqcup, come in A \\sqcup B. \\coprod è un'alternativa preferita da alcuni autori per la stessa costruzione categoriale, mentre \\bigcup da solo non dice nulla sulla disgiunzione. Nella teoria dei domini e nella semantica denotazionale, \\bigsqcup indica invece il minimo maggiorante di un insieme diretto. Come operatore grande, i suoi estremi si impilano in display e stanno di lato nel testo.",
  },
  "double-sum": {
    name: "Sommatoria doppia",
    meaning: "Due sommatorie annidate, su i da 1 a m e su j da 1 a n, come quando si sommano gli elementi di una matrice.",
    usage: "Le sommatorie doppie sommano tutti gli elementi di una tabella m per n, come nella norma di Frobenius \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2. LaTeX affianca i due operatori con una spaziatura adeguata, quindi non serve alcuno spazio manuale tra di essi. Quando entrambi gli indici condividono una condizione, un solo simbolo come \\sum_{i,j} o \\sum_{1 \\le i < j \\le n} è più compatto, e \\substack impila più condizioni sotto una sola sigma. Scambiare l'ordine di sommatorie doppie finite è sempre lecito, ma per quelle infinite servono la convergenza assoluta o termini non negativi.",
  },
  "indexed-sum": {
    name: "Sommatoria su un insieme di indici",
    meaning: "Somma su ogni elemento k di un insieme K anziché su un intervallo numerico.",
    usage: "Le sommatorie indicizzate da un insieme sono naturali quando l'insieme degli indici non è un intervallo: somme sui primi \\sum_{p \\le x}, sui divisori \\sum_{d \\mid n} o sui vertici nel lemma delle strette di mano \\sum_{v \\in V} \\deg v = 2|E|. Hanno senso per qualunque insieme finito, e per quelli infiniti quando la serie converge assolutamente, dato che non è implicito alcun ordinamento. Per più condizioni usate \\substack, come in \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}. In modalità display la condizione sta centrata sotto la sigma, quindi tenetela breve per evitare un ampio vuoto attorno all'operatore.",
  },
};

export default text;
