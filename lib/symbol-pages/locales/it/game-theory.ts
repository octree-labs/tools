import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/game-theory/<slug>. */
const text: SymbolPageTranslations = {
  "strategy": {
    name: "Strategia",
    meaning: "Strategia del giocatore i: un piano d'azione completo scelto dall'insieme delle strategie S_i di quel giocatore.",
    usage: "In un gioco in forma normale ogni giocatore sceglie s_i \\in S_i, e la scelta congiunta è un profilo s = (s_i, s_{-i}), dove s_{-i} raccoglie le strategie di tutti gli altri. Nei giochi in forma estesa una strategia pura specifica un'azione per ogni insieme informativo, anche per quelli mai raggiunti. Il pedice indica il giocatore, quindi usate apici o primi, s_i', s_i^*, per strategie alternative dello stesso giocatore. Scrivete s_{-i} con le graffe, perché s_-i mette nel pedice solo il segno meno.",
  },
  "strategy-set": {
    name: "Insieme delle strategie",
    meaning: "Insieme delle strategie del giocatore i: tutte le strategie pure a disposizione di quel giocatore.",
    usage: "Lo spazio di tutti i profili è il prodotto cartesiano S = S_1 \\times \\cdots \\times S_n = \\prod_i S_i, e S_{-i} = \\prod_{j \\ne i} S_j. Insiemi S_i finiti danno i giochi a matrice; sottoinsiemi compatti e convessi di \\mathbb{R}^k compaiono nella concorrenza alla Cournot e in altri giochi continui. Le strategie miste vivono in \\Delta(S_i). Tenete gli insiemi delle strategie in maiuscolo e le strategie in minuscolo. Nei giochi cooperativi S indica spesso una coalizione, quindi evitate di mescolare i due usi nello stesso articolo.",
  },
  "strategy-profile": {
    name: "Profilo di strategie",
    meaning: "Profilo di strategie: una lista che contiene una strategia per ciascuno degli n giocatori del gioco.",
    usage: "I payoff si valutano su profili completi, u_i(s), e l'analisi delle deviazioni scompone un profilo come (s_i, s_{-i}). \\ldots colloca i puntini sulla linea di base, corretto tra virgole; \\cdots li centra, adatto a somme come s_1 + \\cdots + s_n. Con amsmath il semplice \\dots sceglie automaticamente in base al contesto. Alcuni testi scrivono i profili in grassetto, \\mathbf{s}, per distinguerli dalla strategia s_i di un singolo giocatore. Il profilo in cui i passa a s_i' mentre tutti gli altri mantengono la propria strategia si scrive (s_i', s_{-i}). L'ordine dei giocatori fissa la n-upla, quindi dichiaratelo una volta.",
  },
  "payoff-function": {
    name: "Funzione di payoff",
    meaning: "Funzione di payoff (utilità) del giocatore i, che assegna un numero reale a ogni profilo di strategie s.",
    usage: "Formalmente u_i: S \\to \\mathbb{R}, e un gioco in forma normale è la terna (N, (S_i), (u_i)). Le strategie miste la estendono tramite il valore atteso, u_i(\\sigma) = \\sum_s \\sigma(s)\\, u_i(s). Le deviazioni unilaterali si scrivono u_i(s_i', s_{-i}). In alcuni ambiti si usano \\pi_i o v_i per i payoff; nei giochi cooperativi v indica già la funzione caratteristica, quindi lì u_i è la scelta più sicura. I payoff devono essere solo utilità di von Neumann-Morgenstern, quindi le trasformazioni affini positive lasciano invariati gli equilibri. Con due giocatori i payoff si presentano spesso come bimatrice.",
  },
  "expected-payoff": {
    name: "Payoff atteso",
    meaning: "Payoff atteso del giocatore i, la media ponderata per le probabilità di u_i in presenza di strategie miste o mosse del caso.",
    usage: "Con strategie miste indipendenti, \\mathbb{E}_\\sigma[u_i] = \\sum_{s} \\prod_j \\sigma_j(s_j)\\, u_i(s), la quantità che i giocatori massimizzano in un equilibrio di Nash in strategie miste. Indicate la distribuzione in pedice, \\mathbb{E}_{s \\sim \\sigma}[u_i(s)], quando non è ovvia. La E in grassetto da lavagna \\mathbb{E} è uno stile; \\operatorname{E} e \\mathrm{E} danno una E dritta e sono comuni in econometria. Per argomenti alti dimensionate le parentesi con \\left[ \\right] o \\bigl[ \\bigr]. Quando muove la natura, come nei giochi bayesiani, il valore atteso si estende anche ai tipi, \\mathbb{E}_\\theta[u_i(s(\\theta), \\theta)]. Riservate le parentesi quadre al valore atteso e quelle tonde agli argomenti di funzione.",
  },
  "best-response": {
    name: "Miglior risposta",
    meaning: "Corrispondenza di miglior risposta: l'insieme delle strategie che massimizzano il payoff del giocatore i date le strategie altrui s_{-i}.",
    usage: "Si definisce come BR_i(s_{-i}) = \\arg\\max_{s_i \\in S_i} u_i(s_i, s_{-i}), e un profilo è un equilibrio di Nash esattamente quando s_i^* \\in BR_i(s^*_{-i}) per ogni i. In generale ha valori insiemistici, ed è per questo che l'esistenza degli equilibri misti si dimostra con il teorema del punto fisso di Kakutani e non con quello di Brouwer. Digitato come BR_i, TeX compone B e R come due variabili in corsivo moltiplicate; scrivete \\mathrm{BR}_i o \\operatorname{BR}_i per lettere dritte. Usate \\operatorname*{arg\\,max} per l'argomento del massimo. Nei giochi finiti le migliori risposte pure esistono sempre.",
  },
  "nash-equilibrium": {
    name: "Equilibrio di Nash",
    meaning: "Profilo di equilibrio di Nash: nessun giocatore può guadagnare abbandonando unilateralmente la propria strategia s_i^*.",
    usage: "La condizione che lo definisce è u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) per ogni giocatore i e ogni alternativa s_i. Nash dimostrò che ogni gioco finito ha un equilibrio in strategie miste, indicato con \\sigma^*. Gli equilibri non sono necessariamente unici né efficienti, come mostra il dilemma del prigioniero. L'asterisco è un apice, quindi s_1^* e s^*_1 vengono resi in modo identico; usate ^* invece di ^\\star, che è una stella a cinque punte. In un gioco bimatrice un equilibrio puro è una cella in cui il payoff di ciascun giocatore è massimo data la scelta dell'altro.",
  },
  "mixed-strategy": {
    name: "Strategia mista",
    meaning: "Strategia mista del giocatore i: una distribuzione di probabilità sulle strategie pure di quel giocatore.",
    usage: "Una strategia mista è \\sigma_i \\in \\Delta(S_i), con \\sigma_i(s_i) la probabilità di giocare s_i, e il supporto di una strategia di equilibrio contiene solo migliori risposte. Nel gioco del pari e dispari (matching pennies) l'unico equilibrio prevede che ogni giocatore randomizzi 1/2-1/2. I giochi in forma estesa distinguono le strategie miste dalle strategie comportamentali, spesso indicate con b_i o \\beta_i. Non confondete \\sigma_i con una deviazione standard negli articoli che trattano anche statistica; \\varsigma è un sigma diverso, la forma finale, e non è un sostituto. Con memoria perfetta, il teorema di Kuhn rende equivalenti strategie miste e comportamentali.",
  },
  "probability-simplex": {
    name: "Simplesso di probabilità",
    meaning: "Insieme delle distribuzioni di probabilità su S_i, che per un insieme finito è un simplesso di probabilità.",
    usage: "Se S_i ha k elementi, \\Delta(S_i) è il simplesso (k-1)-dimensionale \\{x \\in \\mathbb{R}^k : x_j \\ge 0, \\sum_j x_j = 1\\}. Strategie miste, credenze ed equilibri correlati vivono tutti in insiemi di questa forma. La \\Delta maiuscola è dritta per impostazione predefinita; \\varDelta ne dà una versione in corsivo se il vostro stile lo richiede. Non confondetela con \\triangle, un triangolo geometrico, né con \\nabla, il simbolo capovolto usato per i gradienti. Con due strategie pure si riduce all'intervallo [0, 1] delle probabilità assegnate alla prima.",
  },
  "dominant-strategy": {
    name: "Strategia dominante",
    meaning: "Strategia dominante del giocatore i: una strategia che è una miglior risposta qualunque cosa facciano gli altri giocatori.",
    usage: "La dominanza stretta significa u_i(s_i^d, s_{-i}) > u_i(s_i, s_{-i}) per ogni altra s_i e ogni s_{-i}; nel dilemma del prigioniero defezionare è strettamente dominante. Offrire il proprio vero valore in un'asta al secondo prezzo è debolmente dominante. L'apice d è un'etichetta, non un indice, quindi molti autori lo compongono in tondo, s_i^{\\mathrm{d}}, per evitare che venga letto come una variabile. Mettere ^d prima o dopo _i dà lo stesso risultato impilato. Quando ogni giocatore ha una strategia dominante, il profilo risultante è un equilibrio in strategie dominanti e quindi un equilibrio di Nash.",
  },
  "dominated-strategy": {
    name: "Strategia dominata",
    meaning: "Relazione di dominanza: s_i \\prec s'_i afferma che la strategia s_i è dominata da s'_i, che fa sempre almeno altrettanto bene.",
    usage: "Le strategie strettamente dominate non vengono mai giocate da giocatori razionali, e la loro eliminazione iterata è una procedura risolutiva standard. \\prec è una relazione con la spaziatura corretta; per la dominanza debole usate \\preceq, e per la direzione opposta \\succ o \\succeq. Alcuni testi scrivono la relazione con simboli indicizzati per giocatore, come \\prec_i. s'_i e s_i' vengono resi allo stesso modo, perché il primo si fonde con la pila del pedice. Le convenzioni sulla direzione variano, e alcuni autori scrivono s'_i \\succ s_i per la stessa affermazione, quindi definitela. Anche una strategia dominata da una strategia mista può essere eliminata.",
  },
  "pareto-optimal": {
    name: "Ottimo paretiano",
    meaning: "Esito Pareto-ottimale: nessun altro profilo migliora la situazione di un giocatore senza peggiorare quella di un altro.",
    usage: "Un profilo s^{PO} è Pareto-ottimale se non esiste s con u_i(s) \\ge u_i(s^{PO}) per ogni i e disuguaglianza stretta per almeno un i. Il dilemma del prigioniero mostra un equilibrio di Nash che non è Pareto-ottimale. Scritto s^{PO}, TeX compone P e O come due variabili in corsivo; un'etichetta va in tondo, s^{\\mathrm{PO}}, il che evita anche che PO si legga come un prodotto. Lo stesso consiglio vale per etichette come s^{\\mathrm{NE}}. L'ottimalità paretiana non dice nulla sull'equità; esclude soltanto i miglioramenti inequivocabili.",
  },
  "minimax": {
    name: "Minimax",
    meaning: "Operatore minimax: minimizzare su j il massimo su i, il valore nel caso peggiore che un giocatore minimizzante può garantirsi.",
    usage: "In un gioco a somma zero a matrice con payoff a_{ij} per il giocatore di riga, \\min_j \\max_i a_{ij} è la garanzia del giocatore di colonna e \\max_i \\min_j a_{ij} quella del giocatore di riga; la seconda non supera mai la prima. Il teorema del minimax di von Neumann afferma che le due coincidono in strategie miste. In stile display gli indici vanno sotto; in linea compaiono come pedici, quindi aggiungete \\limits se li volete sotto anche nel testo. Per più spazio tra gli operatori inserite \\, oppure usate \\min_{j}\\,\\max_{i}.",
  },
  "zero-sum": {
    name: "Gioco a somma zero",
    meaning: "Condizione di somma zero: i payoff dei due giocatori si annullano sempre, quindi il guadagno di uno è esattamente la perdita dell'altro.",
    usage: "Un gioco di questo tipo è descritto interamente da una matrice A, con u_1 = x^\\top A y e u_2 = -x^\\top A y per le strategie miste x e y. I giochi a somma costante, u_1 + u_2 = c, sono strategicamente equivalenti. Il valore v = \\max_x \\min_y x^\\top A y si può calcolare con la programmazione lineare. Con n giocatori scrivete \\sum_{i} u_i(s) = 0 per tutti i profili s. Usate x^\\top o x^T per la trasposta, in modo coerente. Gli scacchi e il poker testa a testa sono esempi classici.",
  },
  "cooperative-value": {
    name: "Funzione caratteristica",
    meaning: "Funzione caratteristica di un gioco cooperativo: il valore totale che una coalizione S può assicurarsi da sola.",
    usage: "Un gioco a utilità trasferibile è una coppia (N, v) con v: 2^N \\to \\mathbb{R} e v(\\emptyset) = 0. La superadditività, v(S \\cup T) \\ge v(S) + v(T) per coalizioni disgiunte, rende conveniente formare la grande coalizione. Il nucleo (core) è l'insieme delle allocazioni x con \\sum_{i \\in S} x_i \\ge v(S) per ogni S. \\emptyset dà un cerchio barrato; \\varnothing dà la forma più tonda e moderna. Qui S è una coalizione, non un insieme di strategie, quindi dichiaratelo esplicitamente.",
  },
  "shapley-value": {
    name: "Valore di Shapley",
    meaning: "Valore di Shapley: la quota equa di v(N) spettante al giocatore i, il suo contributo marginale medio su tutti gli ordinamenti.",
    usage: "La formula è \\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!\\,(n-|S|-1)!}{n!}\\,(v(S \\cup \\{i\\}) - v(S)). È l'unica allocazione che soddisfa efficienza, simmetria, proprietà del giocatore nullo e additività. Il machine learning la usa per l'attribuzione dell'importanza delle variabili, come in SHAP. Scegliete con cognizione tra \\phi e \\varphi, che hanno un aspetto piuttosto diverso. Dentro la differenza insiemistica fate l'escape delle graffe, \\{i\\}, perché vengano stampate. Il calcolo esatto somma su tutte le 2^{n-1} coalizioni per ogni giocatore, quindi in pratica sono comuni le approssimazioni per campionamento. In un gioco simmetrico ogni giocatore riceve v(N)/n.",
  },
  "subgame-perfect": {
    name: "Equilibrio perfetto nei sottogiochi",
    meaning: "Equilibrio perfetto nei sottogiochi (SPE): un equilibrio di Nash la cui restrizione a ogni sottogioco è anch'essa un equilibrio di Nash.",
    usage: "Selten introdusse il concetto per escludere le minacce non credibili, e nei giochi finiti a informazione perfetta l'induzione a ritroso trova lo SPE. Digitando SPE in modalità matematica, le tre lettere diventano variabili in corsivo moltiplicate, con una crenatura scadente; nelle formule scrivete \\mathrm{SPE} o \\text{SPE}, e nel testo corrente testo semplice. I concetti risolutivi affini si scrivono allo stesso modo, \\mathrm{NE}, \\mathrm{PBE} per l'equilibrio bayesiano perfetto. Ogni SPE è un equilibrio di Nash, ma non viceversa. La contrattazione sequenziale e i giochi ripetuti vi fanno ampio ricorso.",
  },
  "information-set": {
    name: "Insieme informativo",
    meaning: "Insieme informativo in un gioco in forma estesa: i nodi decisionali che un giocatore non sa distinguere quando tocca a lui.",
    usage: "Ogni insieme informativo h appartiene a un solo giocatore, offre le stesse azioni A(h) in ogni suo nodo e rappresenta l'informazione imperfetta, come le mosse nascoste. Le strategie comportamentali assegnano una distribuzione \\sigma_i(h) \\in \\Delta(A(h)) a ciascun insieme informativo del giocatore. Le convenzioni variano: molti testi usano I o I_i per gli insiemi informativi e riservano h alle storie, quindi definite la vostra notazione. Informazione perfetta significa che ogni h è un singolo nodo. La memoria perfetta richiede che un giocatore non dimentichi mai le mosse o le informazioni precedenti.",
  },
  "action": {
    name: "Azione",
    meaning: "Azione del giocatore i, una scelta compiuta in un singolo punto decisionale, in contrapposizione a una strategia completa.",
    usage: "Nei giochi a una sola mossa azioni e strategie pure coincidono, quindi molti testi scrivono i profili come a = (a_i, a_{-i}) con a_i \\in A_i. Nei giochi in forma estesa e ripetuti le azioni sono mosse locali, mentre le strategie associano azioni alle storie o agli insiemi informativi. Gli articoli sull'apprendimento e sull'apprendimento per rinforzo multi-agente usano a_i^t per l'azione al turno t. Aggiungete i primi per le alternative, a_i', e le graffe per l'indice complementare, a_{-i}. Nei giochi ripetuti una storia è una sequenza di profili di azioni, h^t = (a^0, \\ldots, a^{t-1}).",
  },
};

export default text;
