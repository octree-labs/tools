import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "Tensore",
    meaning: "Tensore generico di tipo (2,2), con due indici in alto (controvarianti) e due in basso (covarianti).",
    usage: "Ogni indice in alto si trasforma con lo jacobiano e ogni indice in basso con la sua inversa, quindi contrarre un indice in alto con uno in basso dà un risultato indipendente dalle coordinate. Scrivendo T^{ij}_{kl}, gli indici in basso stanno proprio sotto quelli in alto, il che nasconde l'ordine degli indici; per tensori non simmetrici scrivete T^{ij}{}_{kl}, così il blocco inferiore inizia dopo quello superiore. Il tensore di Riemann R^i{}_{jkl} e il tensore di elasticità C_{ijkl} sono esempi comuni. Gli indici sono in corsivo per impostazione predefinita; lasciateli così, a meno che non siano etichette anziché posizioni del tensore.",
  },
  "covariant-index": {
    name: "Indici covarianti",
    meaning: "Tensore con due indici in basso, un tensore covariante di ordine 2 come una metrica, un tensore degli sforzi o una forma bilineare.",
    usage: "Gli indici in basso si trasformano con lo jacobiano inverso, T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}, la stessa regola dei gradienti. Tra gli esempi ci sono la metrica g_{ij}, il tensore di Ricci R_{ij} e il tensore degli sforzi di Cauchy \\sigma_{ij}. Un 2-tensore covariante agisce su due vettori restituendo un numero, T_{ij} u^i v^j. Nello spazio euclideo con coordinate cartesiane la distinzione tra indici in alto e in basso scompare, ed è per questo che i testi di ingegneria scrivono spesso tutti gli indici in basso. Ogni tensore di questo tipo si scompone in parte simmetrica e parte antisimmetrica, T_{ij} = T_{(ij)} + T_{[ij]}.",
  },
  "contravariant-index": {
    name: "Indici controvarianti",
    meaning: "Tensore con due indici in alto: un tensore controvariante di ordine 2 come la metrica inversa o il tensore energia-impulso.",
    usage: "Gli indici in alto si trasformano come le componenti di un vettore, T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}. Il tensore energia-impulso T^{\\mu\\nu} è l'esempio classico della fisica, con la legge di conservazione \\partial_\\mu T^{\\mu\\nu} = 0 nello spaziotempo piatto. Mettete entrambi gli indici in un unico gruppo tra graffe, T^{ij}; T^i^j è un errore di doppio apice. Quando serve anche un primo, T'^{ij} funziona perché LaTeX fonde il primo con l'apice successivo. La contrazione con due covettori, T^{ij}\\alpha_i\\beta_j, produce uno scalare, e la metrica inversa g^{ij} è l'esempio più comune in geometria.",
  },
  "mixed-tensor": {
    name: "Tensore misto",
    meaning: "Tensore misto di tipo (1,1), con un indice in alto e uno in basso, equivalente a un'applicazione lineare sui vettori.",
    usage: "Un tensore (1,1) manda un vettore v^j in T^i_j v^j, quindi in una base è semplicemente una matrice, e la sua traccia T^i_i non dipende dalle coordinate. Con T^i_j i due indici sono impilati verticalmente, il che va bene per la delta di Kronecker ma è ambiguo negli altri casi, poiché T^i{}_j e T_j{}^i differiscono dopo l'abbassamento con una metrica. Il trucco del gruppo vuoto {} li sfalsa. Abbassando l'indice superiore con la metrica si ottiene un tensore (0,2), T_{kj} = g_{ki} T^i{}_j, e la forma sfalsata mostra quale posizione si è spostata.",
  },
  "kronecker-delta": {
    name: "Delta di Kronecker",
    meaning: "Delta di Kronecker: vale 1 quando gli indici sono uguali e 0 altrimenti; sono le componenti dell'applicazione identità.",
    usage: "Agisce come una sostituzione di indice, \\delta^i_j v^j = v^i, e la sua traccia in n dimensioni è \\delta^i_i = n. Esprime anche la dualità tra basi, e^i(e_j) = \\delta^i_j, e la relazione con la metrica inversa g^{ik} g_{kj} = \\delta^i_j. Essendo simmetrica, impilare gli indici come in \\delta^i_j non crea problemi, a differenza dei tensori misti generici. In contesti cartesiani si scrive spesso \\delta_{ij}, con entrambi gli indici in basso. Non confondetela con la funzione delta di Dirac \\delta(x).",
  },
  "levi-civita": {
    name: "Simbolo di Levi-Civita",
    meaning: "Simbolo di Levi-Civita in tre dimensioni: +1 per le permutazioni pari di 123, -1 per quelle dispari, 0 se un indice si ripete.",
    usage: "Esprime prodotti vettoriali e rotori in forma indiciale, (\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k, e i determinanti come \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}. L'identità di contrazione \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} si usa di continuo nelle dimostrazioni di calcolo vettoriale. Molti autori preferiscono \\varepsilon_{ijk}, l'epsilon corsiva, per lasciare \\epsilon libera per le quantità piccole; sceglietene una e mantenetela. Negli spazi curvi è una densità tensoriale, e il vero tensore porta un fattore \\sqrt{g}.",
  },
  "einstein-summation": {
    name: "Convenzione di Einstein",
    meaning: "Convenzione di sommatoria di Einstein: un indice ripetuto, una volta in alto e una in basso, è sommato, quindi A^i B_i indica la somma su i.",
    usage: "La convenzione permette di scrivere A^i B_i al posto di \\sum_i A^i B_i, l'accoppiamento scalare di un vettore con un covettore, senza scrivere il simbolo di sommatoria. Ogni indice sommato deve comparire esattamente una volta in alto e una in basso; un indice che compare tre volte segnala un errore. Gli indici liberi devono coincidere nei due membri di un'equazione, come in v^i = T^i_j u^j. Se la convenzione potrebbe non essere familiare ai lettori, enunciatela una volta e scrivete la forma esplicita con \\sum nella prima equazione.",
  },
  "tensor-product": {
    name: "Prodotto tensoriale",
    meaning: "Prodotto tensoriale di A e B, che combina due tensori o spazi vettoriali in uno di ordine o dimensione maggiore.",
    usage: "Per gli spazi vettoriali, \\dim(V \\otimes W) = \\dim V \\cdot \\dim W, e per i tensori le componenti si moltiplicano, (A \\otimes B)^{ij} = A^i B^j. Per le matrici lo stesso simbolo indica il prodotto di Kronecker, una matrice a blocchi con elementi a_{ij}B. La meccanica quantistica lo usa per i sistemi composti, |\\psi\\rangle \\otimes |\\phi\\rangle. \\otimes è un operatore binario con spaziatura automatica; per un prodotto su un insieme di indici usate l'operatore grande \\bigotimes_{i=1}^n V_i, e per fattori ripetuti V^{\\otimes k}.",
  },
  "contraction": {
    name: "Contrazione",
    meaning: "Contrazione di un tensore misto: la somma su un indice ripetuto in alto e in basso, che ne dà la traccia.",
    usage: "Porre un indice in alto uguale a uno in basso e sommare li elimina entrambi, abbassando l'ordine di due; per un tensore (1,1) il risultato T^i_i = \\operatorname{tr} T è uno scalare. Il tensore di Ricci è una contrazione del tensore di Riemann, e la curvatura scalare contrae di nuovo con la metrica, R = g^{ij}R_{ij}. Si può contrarre solo un indice in alto con uno in basso; contrarre due indici in basso richiede la metrica. Scrivete \\operatorname{tr} anziché tr semplice, così la traccia è in tondo con la spaziatura da operatore.",
  },
  "metric-lowering": {
    name: "Abbassamento degli indici",
    meaning: "Abbassamento di un indice: la metrica converte le componenti controvarianti v^j di un vettore in componenti covarianti v_i.",
    usage: "È l'isomorfismo musicale bemolle, spesso scritto v^\\flat, che identifica vettori e covettori. Nello spazio euclideo con coordinate cartesiane g_{ij} = \\delta_{ij}, quindi l'abbassamento non cambia nulla numericamente; nello spazio di Minkowski con segnatura (-,+,+,+) inverte il segno della componente temporale. L'indice libero i deve coincidere nei due membri, mentre j è sommato. Per un tensore completo abbassate ogni indice separatamente, T_{ij} = g_{ik} T^k{}_j, tenendo traccia dell'ordine delle posizioni. Il comando \\flat usato per v^\\flat è il bemolle musicale, disponibile nella normale modalità matematica.",
  },
  "metric-raising": {
    name: "Innalzamento degli indici",
    meaning: "Innalzamento di un indice: la metrica inversa riporta le componenti covarianti v_j alle componenti controvarianti v^i.",
    usage: "L'innalzamento è l'isomorfismo musicale diesis, \\alpha^\\sharp, ed è così che si costruisce il vettore gradiente a partire dal differenziale: (\\operatorname{grad} f)^i = g^{ij}\\partial_j f. Innalzare e poi abbassare restituisce le componenti originali, perché g^{ij} g_{jk} = \\delta^i_k. In relatività, p^\\mu = g^{\\mu\\nu} p_\\nu converte un quadrimpulso covettore in un vettore. Scrivete la metrica inversa con indici in alto, mai come g^{-1}_{ij}, che suggerisce una posizione sbagliata degli indici. Il comando \\sharp dà il diesis corrispondente, e per una metrica diagonale sopravvive solo il termine con j = i.",
  },
  "partial-derivative": {
    name: "Derivata parziale",
    meaning: "Notazione abbreviata per la derivata parziale rispetto alla coordinata x^i, usata anche per i vettori della base coordinata.",
    usage: "Scrivere \\partial_i f invece di \\frac{\\partial f}{\\partial x^i} mantiene compatte le formule piene di indici, e in geometria \\partial_i indica anche il campo vettoriale di base \\partial/\\partial x^i. La relatività usa \\partial_\\mu sullo spaziotempo, con il dalembertiano \\partial_\\mu\\partial^\\mu. Le derivate parziali delle componenti di un tensore non sono tensori in coordinate curvilinee; per rimediare sostituite \\partial_i con \\nabla_i. Un pedice con la virgola, f_{,i}, è l'equivalente tradizionale. Per le derivate parziali usate \\partial, non d né \\delta. Le derivate parziali commutano, \\partial_i\\partial_j = \\partial_j\\partial_i, ed è per questo che i campi coordinati hanno parentesi di Lie nulla.",
  },
  "covariant-derivative": {
    name: "Derivata covariante",
    meaning: "Derivata covariante lungo la i-esima direzione coordinata, il sostituto tensoriale della derivata parziale \\partial_i.",
    usage: "Su un vettore aggiunge una correzione con i simboli di Christoffel, \\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k, e su un covettore il segno si inverte, \\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k. La notazione tradizionale con il punto e virgola scrive v^j{}_{;i} per la stessa cosa. La compatibilità con la metrica significa \\nabla_k g_{ij} = 0, quindi gli indici si possono alzare e abbassare attraverso \\nabla. In generale le derivate covarianti non commutano; il loro commutatore su un vettore dà il tensore di Riemann. I testi di relatività scrivono lo stesso operatore come \\nabla_\\mu.",
  },
  "symmetrization": {
    name: "Simmetrizzazione",
    meaning: "Parte simmetrica di un tensore rispetto agli indici i e j, scritta con parentesi tonde attorno alla coppia di indici.",
    usage: "Per due indici T_{(ij)} = \\tfrac12(T_{ij} + T_{ji}), e su n indici la somma corre su tutte le permutazioni divisa per n!. La notazione con le parentesi è standard in relatività generale, per esempio nell'equazione di Killing \\nabla_{(i}\\xi_{j)} = 0. Per escludere un indice dalla simmetrizzazione, isolatelo con barre verticali, come in T_{(i|j|k)}. Le parentesi dentro un pedice sono caratteri ordinari, quindi non serve alcun comando speciale; fate solo attenzione al fatto che le parentesi possono aprirsi e chiudersi in pedici diversi.",
  },
  "antisymmetrization": {
    name: "Antisimmetrizzazione",
    meaning: "Parte antisimmetrica di un tensore rispetto a i e j, scritta con parentesi quadre attorno agli indici.",
    usage: "Per due indici T_{[ij]} = \\tfrac12(T_{ij} - T_{ji}), e in generale è la somma con segno sulle permutazioni divisa per n!. Ogni tensore a due indici si scompone come T_{ij} = T_{(ij)} + T_{[ij]}. La prima identità di Bianchi si scrive R_{i[jkl]} = 0, e il tensore del campo elettromagnetico soddisfa \\partial_{[\\mu}F_{\\nu\\lambda]} = 0. Alcuni autori omettono il fattore 1/n!, quindi dichiarate la vostra normalizzazione. Le parentesi quadre in un pedice sono caratteri semplici, senza bisogno di \\lbrack. I tensori covarianti totalmente antisimmetrici corrispondono alle forme differenziali.",
  },
  "tensor-rank": {
    name: "Tipo di un tensore",
    meaning: "Tipo di un tensore: p indici controvarianti (in alto) e q covarianti (in basso), talvolta chiamato impropriamente il suo ordine.",
    usage: "Un tensore (p, q) è un elemento di V^{\\otimes p} \\otimes (V^*)^{\\otimes q}, quindi un vettore è (1, 0), un covettore (0, 1), un'applicazione lineare (1, 1) e una metrica (0, 2). La terminologia varia: alcuni libri chiamano p + q rango o ordine e riservano «tipo» alla coppia. La contrazione manda il tipo (p, q) in (p-1, q-1). In LaTeX la coppia è semplicemente una parentesi con una virgola; in modalità matematica lo spazio sottile dopo la virgola è automatico, quindi non aggiungete altra spaziatura.",
  },
  "basis-vector": {
    name: "Vettori di base",
    meaning: "Vettori di base di uno spazio vettoriale o tangente, con l'indice in basso così che le componenti lo portino in alto.",
    usage: "Un vettore si sviluppa come v = v^i e_i, accoppiando l'indice in basso della base con quello in alto delle componenti. In geometria la base coordinata è e_i = \\partial_i, e in un riferimento ortonormale g(e_i, e_j) = \\delta_{ij}. Fisica e ingegneria scrivono spesso in grassetto \\mathbf{e}_i o con il cappuccio \\hat{e}_i, e usano \\mathbf{e}_x, \\mathbf{e}_y per le direzioni cartesiane. Tenete l'indice in basso; scrivere e^i per i vettori di base contrasta con la convenzione della base duale. Con un cambio di base e'_i = A^j{}_i e_j, le componenti si trasformano con la matrice inversa.",
  },
  "dual-basis": {
    name: "Base duale",
    meaning: "Covettori della base duale, definiti da e^i(e_j) = \\delta^i_j e usati per estrarre le componenti di un vettore.",
    usage: "Applicare e^i a un vettore ne estrae la i-esima componente, e^i(v) = v^i, e i covettori si sviluppano come \\alpha = \\alpha_i e^i. Per le coordinate la base duale è e^i = dx^i, e nel metodo di Cartan il corriferimento ortonormale e^a dà la metrica come g = \\delta_{ab}\\, e^a \\otimes e^b. Poiché l'indice è un apice, e^i può essere scambiato per una potenza di e; se c'è questo rischio, precisatelo oppure usate \\theta^i, un'alternativa comune per i corriferimenti.",
  },
  "component-transform": {
    name: "Legge di trasformazione delle componenti",
    meaning: "Legge di trasformazione di un tensore controvariante di ordine 2: ogni indice in alto riceve un fattore della matrice di trasformazione.",
    usage: "Qui \\Lambda^i_k è la matrice di trasformazione, una trasformazione di Lorentz in relatività ristretta o lo jacobiano \\partial x'^i/\\partial x^k in generale, e le componenti con il primo vivono nel nuovo riferimento. Un tensore è definito dal fatto di obbedire a questa legge, mentre gli indici in basso si trasformano con la matrice inversa. LaTeX fonde il primo e l'apice in T'^{ij}, quindi non servono graffe attorno al primo. Sfalsate gli indici come in \\Lambda^i{}_k quando la matrice non è simmetrica, così i lettori sanno quale posizione indica la riga.",
  },
};

export default text;
