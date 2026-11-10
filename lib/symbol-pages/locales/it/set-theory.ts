import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "Insieme vuoto (variante)",
    meaning: "Simbolo alternativo dell'insieme vuoto: un cerchio rotondo attraversato da una barra obliqua, l'insieme privo di elementi.",
    usage: "\\varnothing ed \\emptyset indicano la stessa cosa, l'insieme vuoto, ma hanno un aspetto diverso: in Computer Modern \\emptyset è uno zero stretto e alto con una barra, mentre \\varnothing è un cerchio rotondo barrato che molti matematici preferiscono. Usatene uno in modo coerente, per esempio A \\cap B = \\varnothing per insiemi disgiunti. Non è la lettera greca \\phi né \\varphi, né la lettera scandinava \\O, quindi evitate di usarle come sostituti. Alcuni autori ridefiniscono \\emptyset come \\varnothing nel preambolo, così che tutte le occorrenze cambino in un colpo solo.",
  },
  "contains": {
    name: "Appartenenza inversa (contiene)",
    meaning: "Relazione di appartenenza rovesciata: l'insieme a sinistra contiene l'elemento a destra.",
    usage: "A \\ni x dice la stessa cosa di x \\in A, ma con l'insieme al primo posto, il che risulta naturale in espressioni come un intorno U \\ni x. Testi più vecchi e alcuni logici usavano \\ni anche per «tale che», benché oggi lo standard sia \\mid oppure i due punti. \\owns è un alias di \\ni. Si nega con \\not\\ni. Non va confuso con la lettera epsilon né con un \\in girato a mano: \\ni è una vera relazione, con la spaziatura corrispondente.",
  },
  "not-subset": {
    name: "Non inclusione",
    meaning: "Simbolo di sottoinsieme barrato: l'insieme a sinistra non è un sottoinsieme di quello a destra.",
    usage: "\\not\\subset sovrappone una barra a \\subset tramite il prefisso generico \\not. Il risultato è accettabile, anche se a volte la barra non è centrata; i glifi dedicati \\nsubseteq (non sottoinsieme né uguale) e \\nsubset, presente in alcuni pacchetti di simboli, rendono meglio. Poiché \\subset è di per sé ambiguo tra inclusione stretta e non stretta, \\nsubseteq è spesso la negazione più chiara. Esempio: \\mathbb{Q} \\not\\subset \\mathbb{Z}, perché 1/2 è razionale ma non intero. Scrivete \\not subito prima della relazione, senza spazi né graffe, affinché i due simboli si combinino correttamente.",
    example: "\\mathbb{Q} \\not\\subset \\mathbb{Z} \\text{ dato che } \\tfrac{1}{2} \\notin \\mathbb{Z}",
  },
  "big-union": {
    name: "Unione grande",
    meaning: "Operatore grande di unione per l'unione di una famiglia indicizzata di insiemi, con estremi sopra e sotto.",
    usage: "\\bigcup_{i=1}^{\\infty} A_i scrive un'unione numerabile, e \\bigcup_{\\alpha \\in I} U_\\alpha un'unione su un insieme di indici, come nei ricoprimenti aperti. Si comporta come \\sum: in stile display gli estremi vanno sotto e sopra, in linea vanno a lato, e \\limits li forza sotto anche in linea. Non usatelo tra due insiemi: A \\cup B usa il \\cup binario. Tra gli operatori grandi affini ci sono \\bigcap, \\bigsqcup per le unioni disgiunte e \\biguplus per l'unione di multiinsiemi. Le leggi di De Morgan lo collegano a \\bigcap e ai complementari.",
  },
  "big-intersection": {
    name: "Intersezione grande",
    meaning: "Operatore grande di intersezione per intersecare una famiglia indicizzata di insiemi.",
    usage: "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing è un esempio classico, e in topologia si scrive \\bigcap_{\\alpha} F_\\alpha per le intersezioni di chiusi. Come gli altri operatori grandi, ha gli estremi sotto e sopra in modalità display e a lato in linea, e in stile display si ingrandisce. Per due insiemi usate invece il \\cap binario. Lo usano gli intervalli incapsulati, l'insieme di Cantor \\bigcap_n C_n e la definizione della sigma-algebra generata come intersezione di tutte le sigma-algebre che contengono la famiglia data.",
  },
  "complement": {
    name: "Complementare",
    meaning: "Simbolo di complementare, di solito posto come apice su un insieme per indicare tutti gli elementi che non vi appartengono.",
    usage: "A^\\complement indica il complementare di A rispetto a un universo, per cui A \\cup A^\\complement = U. È un simbolo ordinario dall'aspetto di una C stilizzata. Alternative diffuse sono A^c, A' e \\overline{A}, ma la barra si confonde con la chiusura topologica e l'apice con la derivata, mentre \\complement non è ambiguo. Scrivetelo come apice: da solo compare di rado. La legge di De Morgan, (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement, ne è un uso classico.",
  },
  "natural-numbers": {
    name: "Numeri naturali",
    meaning: "N a doppio tratto, il simbolo standard per l'insieme dei numeri naturali 1, 2, 3 e così via.",
    usage: "Se \\mathbb{N} contenga lo 0 dipende dal contesto: logica e informatica di solito partono da 0, la teoria dei numeri spesso da 1, quindi dichiarate la vostra convenzione oppure scrivete \\mathbb{N}_0 o \\mathbb{Z}_{\\ge 0} e \\mathbb{Z}_{>0}. Il comando \\mathbb, con il font a doppio tratto standard, copre solo le lettere maiuscole, quindi \\mathbb{1} o le minuscole non vengono rese come ci si aspetta senza un altro pacchetto di font. Molti autori definiscono \\newcommand{\\N}{\\mathbb{N}} per brevità. Le successioni si scrivono spesso (a_n)_{n \\in \\mathbb{N}}. Le dimostrazioni per induzione di solito iniziano con «per ogni n \\in \\mathbb{N}».",
  },
  "integers": {
    name: "Numeri interi",
    meaning: "Z a doppio tratto, l'insieme di tutti i numeri interi: positivi, negativi e zero.",
    usage: "La Z viene dal tedesco Zahlen. Costruzioni comuni sono il gruppo ciclico \\mathbb{Z}/n\\mathbb{Z}, gli interi p-adici \\mathbb{Z}_p (attenzione: alcuni autori usano invece \\mathbb{Z}_n per il gruppo ciclico), il reticolo \\mathbb{Z}^n e \\mathbb{Z}[i] per gli interi di Gauss. I sottoinsiemi si scrivono con pedici come \\mathbb{Z}_{\\ge 0}. Con i font standard \\mathbb funziona solo sulle maiuscole. Evitate di simularlo con il grassetto \\mathbf{Z}, che era la vecchia convenzione tipografica. In teoria degli anelli \\mathbb{Z} è l'anello iniziale, e ogni gruppo abeliano è uno \\mathbb{Z}-modulo.",
  },
  "rational-numbers": {
    name: "Numeri razionali",
    meaning: "Q a doppio tratto, il campo dei numeri razionali (frazioni di interi).",
    usage: "Q sta per quoziente. Compare nelle estensioni di campi come \\mathbb{Q}(\\sqrt{2}), in enunciati di densità come il fatto che \\mathbb{Q} è denso in \\mathbb{R}, e nella teoria algebrica dei numeri con \\overline{\\mathbb{Q}} per i numeri algebrici. I numeri p-adici si scrivono \\mathbb{Q}_p. I razionali positivi sono \\mathbb{Q}_{>0} o \\mathbb{Q}^+. Poiché \\mathbb copre solo le maiuscole, qui non ci sono problemi. Definire \\newcommand{\\Q}{\\mathbb{Q}} fa risparmiare battute nei documenti ricchi di algebra. La sua chiusura algebrica è numerabile, mentre il suo completamento rispetto al valore assoluto usuale dà \\mathbb{R}. I punti razionali di una curva si scrivono C(\\mathbb{Q}).",
  },
  "real-numbers": {
    name: "Numeri reali",
    meaning: "R a doppio tratto, l'insieme dei numeri reali che formano la retta numerica continua.",
    usage: "\\mathbb{R}^n è lo spazio euclideo, f : \\mathbb{R} \\to \\mathbb{R} una funzione reale, e \\mathbb{R}_{\\ge 0} o \\mathbb{R}_+ i reali non negativi (le convenzioni divergono sul fatto che \\mathbb{R}^+ includa lo 0). Gli spazi di matrici si scrivono \\mathbb{R}^{m \\times n}. La retta reale estesa è \\overline{\\mathbb{R}} oppure [-\\infty, \\infty]. Evitate \\Re, che stampa una R in fraktur per la parte reale di un numero complesso, non l'insieme dei reali. Molti autori definiscono una macro breve \\R. La sua completezza, cioè il fatto che ogni insieme limitato abbia un estremo superiore, è ciò che lo distingue da \\mathbb{Q}.",
  },
  "complex-numbers": {
    name: "Numeri complessi",
    meaning: "C a doppio tratto, il campo dei numeri complessi della forma a + bi con a e b reali.",
    usage: "L'analisi complessa lavora con funzioni f : \\mathbb{C} \\to \\mathbb{C}, l'algebra lineare con \\mathbb{C}^n e le matrici hermitiane in \\mathbb{C}^{n \\times n}, la geometria algebrica con anelli di polinomi \\mathbb{C}[x]. Il piano privato dell'origine è \\mathbb{C} \\setminus \\{0\\} o \\mathbb{C}^\\times, la sfera di Riemann \\hat{\\mathbb{C}} o \\mathbb{C} \\cup \\{\\infty\\}. Il teorema fondamentale dell'algebra afferma che \\mathbb{C} è algebricamente chiuso. Non usate \\mathcal{C}, che di solito denota una categoria o una classe di funzioni come C^\\infty. Lo spazio proiettivo complesso si scrive \\mathbb{CP}^n o \\mathbb{P}^n_\\mathbb{C}.",
  },
  "power-set": {
    name: "Insieme delle parti",
    meaning: "P calligrafica, la notazione abituale per l'insieme delle parti (l'insieme di tutti i sottoinsiemi) di un insieme.",
    usage: "\\mathcal{P}(A) è l'insieme delle parti, con |\\mathcal{P}(A)| = 2^{|A|} per A finito, e il teorema di Cantor afferma che non esiste alcuna suriezione A \\to \\mathcal{P}(A). Alcuni autori usano invece \\wp, la p di Weierstrass, oppure 2^A. \\mathcal{P} indica anche misure di probabilità, partizioni o la classe P della teoria della complessità, quindi conta il contesto. L'alfabeto calligrafico copre solo le maiuscole. Per una P più corsiva, un comando di font script come \\mathscr, fornito da un pacchetto aggiuntivo, è un'alternativa.",
  },
  "cardinality": {
    name: "Cardinalità",
    meaning: "Barre verticali attorno a un insieme che ne indicano la cardinalità, cioè il numero di elementi che contiene.",
    usage: "Per gli insiemi finiti |A| conta gli elementi, come nella formula di inclusione-esclusione |A \\cup B| = |A| + |B| - |A \\cap B|; per gli insiemi infiniti è il numero cardinale. La stessa notazione indica il valore assoluto per i numeri e il determinante per le matrici, quindi decide il contesto. Alternative sono \\#A e \\operatorname{card}(A). Per una spaziatura che distingua sinistra e destra scrivete \\lvert A \\rvert, e usate \\left| ... \\right| attorno a contenuti alti come \\mathcal{P}(\\mathbb{N}). In combinatoria, |A| = |B| per insiemi finiti si dimostra spesso esibendo una biiezione.",
  },
  "aleph": {
    name: "Aleph",
    meaning: "Lettera ebraica aleph, usata per i numeri cardinali infiniti, a partire dall'infinito numerabile, aleph-zero.",
    usage: "\\aleph_0 è la cardinalità di \\mathbb{N}, \\aleph_1 il cardinale successivo, e l'ipotesi del continuo afferma 2^{\\aleph_0} = \\aleph_1. Scrivete i pedici come \\aleph_0 e non \\aleph0. Altre lettere ebraiche disponibili in modalità matematica sono \\beth, \\gimel e \\daleth; i numeri \\beth, con \\beth_1 = 2^{\\aleph_0}, misurano il continuo. \\aleph è un simbolo ordinario. Non va confuso con \\alpha né con la N dei numeri naturali. L'argomento diagonale di Cantor mostra che i reali non sono numerabili, quindi la loro cardinalità supera strettamente \\aleph_0.",
  },
};

export default text;
