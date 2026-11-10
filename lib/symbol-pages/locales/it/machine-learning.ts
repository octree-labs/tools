import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  "expectation": {
    name: "Valore atteso",
    meaning: "E in grassetto da lavagna, la notazione standard per il valore atteso di una variabile aleatoria.",
    usage: "Il valore atteso compare ovunque in probabilità e nel machine learning: \\mathbb{E}[X] = \\sum_x x\\,p(x), il rischio \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)], oppure la varianza come \\mathbb{E}[X^2] - \\mathbb{E}[X]^2. Mettete la distribuzione nel pedice per rendere esplicita la fonte di aleatorietà. I testi meno recenti usano una semplice E in tondo o \\operatorname{E}; entrambe vanno bene se usate in modo coerente. Notate che \\mathbb fornisce solo lettere maiuscole, quindi \\mathbb{e} produce caratteri senza senso. Usate le parentesi quadre per l'argomento e \\left[ \\right] quando contiene frazioni alte. Definire una macro come \\newcommand{\\E}{\\mathbb{E}} mantiene la notazione uniforme.",
  },
  "kl-divergence": {
    name: "Divergenza KL",
    meaning: "Divergenza di Kullback-Leibler di Q da P: la log-perdita aggiuntiva attesa quando si usa Q al posto della vera distribuzione P.",
    usage: "La divergenza KL è D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}, centrale nell'inferenza variazionale, nell'ELBO e nella regolarizzazione delle politiche nell'apprendimento per rinforzo. Non è simmetrica, quindi l'ordine di P e Q conta, e la doppia barra li separa. \\| è un simbolo ordinario senza spazio attorno, che può sembrare compresso; molti autori scrivono \\parallel, che riceve la spaziatura da relazione, oppure aggiungono \\, su entrambi i lati. \\text{KL} nel pedice eredita il font circostante, quindi \\mathrm{KL} è più sicuro dentro il testo corsivo di un teorema. Per frazioni grandi all'interno usate \\left( \\right).",
  },
  "kl-divergence-short-form": {
    name: "Divergenza KL (forma breve)",
    meaning: "Notazione abbreviata della divergenza di Kullback-Leibler tra le distribuzioni P e Q, senza il prefisso D.",
    usage: "Molti articoli di machine learning omettono la D e scrivono \\text{KL}(P \\| Q), soprattutto nelle funzioni di perdita come l'obiettivo del VAE con un termine \\text{KL}(q_\\phi(z|x) \\| p(z)). Significa esattamente lo stesso di D_{\\text{KL}}(P \\| Q), compresa l'asimmetria: la KL diretta tende a coprire la massa, quella inversa a cercare le mode. Poiché \\text{} copia il font del testo circostante, KL può risultare corsivo dentro un teorema; \\operatorname{KL} o \\mathrm{KL} risolvono il problema, e \\operatorname aggiunge anche lo spazio giusto prima della parentesi. Valutate \\,\\|\\, o \\parallel per dare più aria attorno alle barre.",
  },
  "argmax": {
    name: "Argmax",
    meaning: "L'argomento del massimo: il valore in ingresso in cui una funzione raggiunge il suo valore più grande.",
    usage: "Scritto come \\arg\\max, combina due operatori predefiniti: \\arg, che non accetta mai limiti, e \\max, che li accetta. Di conseguenza, in stile display un pedice finisce solo sotto max e il vincolo risulta decentrato. Un approccio più pulito è \\operatorname*{arg\\,max}, oppure definire \\DeclareMathOperator*{\\argmax}{arg\\,max} nel preambolo, che centra il pedice sotto l'intera parola. Compare nelle regole di classificazione come \\hat{y} = \\arg\\max_k p(k|x), nella stima di massima verosimiglianza e nelle politiche greedy dell'apprendimento per rinforzo. Notate che restituisce un insieme quando il punto di massimo non è unico.",
  },
  "argmin": {
    name: "Argmin",
    meaning: "L'argomento del minimo: il valore in ingresso in cui una funzione raggiunge il suo valore più piccolo.",
    usage: "\\arg\\min è il modo in cui la maggior parte dei problemi di ottimizzazione e di apprendimento definisce una soluzione, per esempio i minimi quadrati \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 o l'assegnazione ai cluster nel k-means. Scritto così, è \\arg seguito da \\min, quindi in display il pedice si centra sotto min anziché sotto l'intera espressione. Per un pedice centrato usate \\operatorname*{arg\\,min} o dichiarate un operatore con asterisco nel preambolo. Alcuni autori scrivono argmin come un'unica parola senza spazio; lo spazio sottile in arg\\,min segue lo stile più diffuso. Ricordate che il risultato può essere un insieme se i punti di minimo non sono unici.",
  },
  "argmax-subscript": {
    name: "Argmax con pedice",
    meaning: "Argmax con la variabile di ottimizzazione theta nel pedice: il valore del parametro che massimizza un obiettivo.",
    usage: "Questa forma indica la variabile da ottimizzare ed è il modo standard di scrivere la massima verosimiglianza, \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta), e la stima MAP. Poiché il pedice è attaccato solo a \\max, in modalità display theta si trova sotto max e non centrato sotto l'intero arg max. Sostituirlo con \\operatorname*{arg\\,max}_{\\theta} o con un \\argmax dichiarato dà un posizionamento centrato ed è ciò che la maggior parte delle riviste si aspetta. In linea il pedice compare comunque a destra. Potete anche elencare vincoli nel pedice, come \\theta \\in \\Theta, usando \\substack per più righe.",
  },
  "argmin-subscript": {
    name: "Argmin con pedice",
    meaning: "Argmin su theta: il valore del parametro che minimizza una funzione di perdita o un obiettivo.",
    usage: "È così che si scrive di solito la minimizzazione del rischio empirico: \\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i). In stile display il pedice va solo sotto min, il che appare leggermente decentrato; \\operatorname*{arg\\,min}_{\\theta} risolve il problema e mantiene coerente la spaziatura. Se lo scrivete spesso, una macro nel preambolo fa risparmiare digitazione e garantisce un risultato identico. Gli obiettivi regolarizzati aggiungono comunemente un termine di penalità, come in ridge o lasso. Quando il punto di minimo è unico il segno di uguale va bene; altrimenti \\in è la relazione più precisa, perché argmin restituisce un insieme.",
  },
  "softmax": {
    name: "Funzione softmax",
    meaning: "Nome della funzione softmax: trasforma un vettore di logit in una distribuzione di probabilità tramite esponenziazione e normalizzazione.",
    usage: "La softmax è definita componente per componente come \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j}, e chiude quasi ogni classificatore e il meccanismo di attenzione, dove compare \\text{softmax}(QK^\\top/\\sqrt{d_k})V. Poiché \\text{} usa il font del testo circostante, diventa corsiva dentro gli ambienti teorema o di enfasi. \\operatorname{softmax} è di solito la scelta migliore: è sempre in tondo e aggiunge la spaziatura da operatore prima della parentesi, proprio come \\sin. Un parametro di temperatura si scrive \\text{softmax}(z/T). Usate \\left( \\right) quando l'argomento contiene una frazione. Negli articoli ricchi di codice specificate lungo quale asse normalizza la softmax, per esempio la dimensione delle classi.",
  },
  "relu": {
    name: "ReLU",
    meaning: "Nome della funzione di attivazione unità lineare rettificata, che restituisce max(0, x) e azzera gli ingressi negativi.",
    usage: "La ReLU è definita come \\text{ReLU}(x) = \\max(0, x), con derivata 1 per ingressi positivi e 0 per quelli negativi. È l'attivazione predefinita degli strati nascosti nelle reti moderne; tra le varianti ci sono la Leaky ReLU, \\max(\\alpha x, x), e la GELU. Scrivere \\text{ReLU} funziona, ma segue lo stile del testo circostante, quindi in un ambiente corsivo risulta inclinato; \\operatorname{ReLU} o \\mathrm{ReLU} restano dritti, e \\operatorname gestisce anche la spaziatura prima dell'argomento. Quando la applicate a un vettore, precisate che agisce elemento per elemento, come in \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b}).",
  },
  "gradient-of-l": {
    name: "Gradiente della perdita",
    meaning: "Gradiente della perdita L rispetto ai parametri theta: il vettore delle derivate parziali usato nell'addestramento.",
    usage: "È la quantità calcolata dalla retropropagazione e guida l'aggiornamento della discesa del gradiente \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}. Il pedice di \\nabla indica rispetto a quali variabili si deriva, il che conta quando la perdita dipende sia dai parametri sia dagli ingressi, per esempio \\nabla_x \\mathcal{L} negli attacchi avversari. \\mathcal produce la L calligrafica e supporta solo lettere maiuscole. Nel testo in linea il pedice si trova in basso a destra del nabla, come è consuetudine. Per le stime stocastiche è utile un cappello: \\hat{\\nabla}_\\theta \\mathcal{L} oppure \\tilde{g}.",
  },
  "partial-derivative": {
    name: "Derivata parziale",
    meaning: "Derivata parziale della perdita L rispetto a un parametro theta, la sensibilità della perdita a quel singolo parametro.",
    usage: "Questa frazione è il mattone scalare della retropropagazione; la regola della catena diventa \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}. Usate \\partial, la d curva, per le derivate parziali e una d semplice per le derivate totali. Nel testo corrente \\frac si rimpicciolisce per adattarsi, risultando spesso poco leggibile; \\tfrac, la forma con barra \\partial \\mathcal{L}/\\partial \\theta, o un \\dfrac in display possono funzionare meglio. Per un uso ripetuto, una macro o il comando \\pdv in stile physics accorcia la digitazione. Quando theta è un vettore, molti autori passano invece a \\nabla_\\theta \\mathcal{L}.",
  },
  "theta-star": {
    name: "Theta ottimo",
    meaning: "Theta con un asterisco in apice: il valore ottimo del parametro, tipicamente il punto di minimo di una perdita.",
    usage: "Un simbolo con asterisco indica l'ottimo, come in \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta), e i risultati di convergenza maggiorano \\|\\theta_t - \\theta^*\\|. Digitando ^* si ottiene un asterisco alzato in dimensione da apice. Le alternative sono ^\\ast, identica, e ^\\star, che dà una stella a cinque punte preferita da alcuni autori perché l'asterisco può essere confuso con un coniugato o un aggiunto. Distinguetelo da \\hat{\\theta}, che per convenzione indica una stima ricavata dai dati e non il vero ottimo. Se theta ha anche un pedice, entrambi gli ordini funzionano: \\theta^*_t e \\theta_t^* producono lo stesso risultato.",
  },
  "weight-matrix": {
    name: "Matrice dei pesi",
    meaning: "W in grassetto dritto, la notazione convenzionale per la matrice dei pesi di uno strato di una rete neurale.",
    usage: "Le maiuscole in grassetto indicano matrici e le minuscole in grassetto vettori, quindi uno strato denso è \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, con i pesi specifici di ogni strato scritti \\mathbf{W}^{(l)} o \\mathbf{W}_l. \\mathbf produce lettere latine in grassetto dritto; non rende in grassetto le lettere greche né la maggior parte dei simboli, quindi usate \\boldsymbol o \\bm per \\boldsymbol{\\Sigma} o per una \\theta in grassetto. Molti articoli di deep learning rinunciano del tutto al grassetto e scrivono W; scegliete una convenzione e mantenetela ovunque. La trasposta si scrive di solito \\mathbf{W}^\\top, che si legge meglio di ^T.",
  },
  "bias-vector": {
    name: "Vettore di bias",
    meaning: "b minuscola in grassetto, la notazione abituale per un vettore di bias aggiunto dopo una trasformazione lineare.",
    usage: "Il bias sposta la preattivazione di ogni neurone, come in \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, e le versioni per strato si scrivono \\mathbf{b}^{(l)}. Per convenzione, una minuscola in grassetto indica un vettore colonna. \\mathbf dà un grassetto dritto; se volete vettori in grassetto corsivo, come fanno alcune riviste di fisica, usate invece \\boldsymbol{b} o \\bm{b}. Siate coerenti con gli indici: l'i-esimo elemento del bias è b_i in semplice corsivo, non in grassetto, perché è uno scalare. Nei modelli lineari l'intercetta si scrive spesso b o w_0 anziché come vettore in grassetto.",
  },
  "cross-entropy": {
    name: "Entropia incrociata",
    meaning: "Entropia incrociata tra una distribuzione vera p e un modello q: la lunghezza attesa del codice quando si codifica p usando q.",
    usage: "L'entropia incrociata è H(p, q) = -\\sum_x p(x) \\log q(x), ed è la perdita della classificazione: con etichette one-hot si riduce a -\\log q(y). Si scompone come H(p, q) = H(p) + D_{\\text{KL}}(p \\| q), il che spiega perché minimizzarla rispetto a q minimizza anche la divergenza KL. Attenzione al conflitto di notazione: H(X, Y) con variabili aleatorie indica di solito l'entropia congiunta, quindi alcuni autori scrivono H_\\times(p, q) o \\mathrm{CE}(p, q) per chiarezza. La virgola ha la normale spaziatura da punteggiatura, quindi non serve alcun aggiustamento manuale.",
  },
  "entropy": {
    name: "Entropia",
    meaning: "Entropia di Shannon di una variabile aleatoria X: l'incertezza media, o contenuto informativo, dei suoi esiti.",
    usage: "L'entropia è H(X) = -\\sum_x p(x) \\log p(x), misurata in bit con \\log_2 e in nat con \\ln. È massima per la distribuzione uniforme, dove H(X) = \\log |\\mathcal{X}|, e compare nella suddivisione degli alberi di decisione tramite il guadagno di informazione e nell'apprendimento per rinforzo a massima entropia. Le grandezze correlate condividono la lettera: entropia condizionata H(Y|X), entropia congiunta H(X, Y) ed entropia differenziale h(X) per le variabili continue, di solito in minuscolo. Alcuni articoli scrivono \\mathbb{H}[X] per evitare confusione con una matrice hessiana H o con una classe di ipotesi.",
  },
  "mutual-information": {
    name: "Informazione mutua",
    meaning: "Informazione mutua tra X e Y: quanto la conoscenza di una variabile aleatoria riduce l'incertezza sull'altra.",
    usage: "L'informazione mutua è I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y)), ed è nulla esattamente quando X e Y sono indipendenti. Il punto e virgola è convenzionale e separa i due argomenti, che possono essere a loro volta liste, come in I(X_1, X_2; Y); una virgola sarebbe ambigua. TeX tratta ; come punteggiatura e aggiunge automaticamente uno spazio sottile dopo. L'informazione mutua condizionata si scrive I(X; Y \\mid Z). È alla base del collo di bottiglia informativo, delle perdite contrastive InfoNCE e della selezione delle feature.",
  },
  "log-likelihood": {
    name: "Log-verosimiglianza",
    meaning: "Log-verosimiglianza dei dati x dati i parametri theta, la quantità massimizzata nella stima di massima verosimiglianza.",
    usage: "Passare ai logaritmi trasforma i prodotti di verosimiglianze indipendenti in somme, \\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta), più facili da derivare e numericamente stabili. Il suo opposto è la familiare perdita NLL. Un consiglio tipografico: una | isolata è un simbolo ordinario e non riceve spazio da nessun lato; \\mid è una relazione e aggiunge una spaziatura bilanciata, dando p(x \\mid \\theta). Alcuni autori usano un punto e virgola, p(x; \\theta), per segnalare che theta è un parametro fisso e non una variabile aleatoria su cui si condiziona, che è la lettura frequentista.",
  },
  "probability-distribution": {
    name: "Distribuzione di probabilità",
    meaning: "Probabilità (densità o massa) di x secondo una distribuzione p, la notazione di base per una distribuzione nel machine learning.",
    usage: "La p(x) minuscola indica una funzione di densità o di massa, mentre la maiuscola P(X = x) o \\Pr è spesso riservata alle probabilità di eventi. Il machine learning sovraccarica liberamente p, lasciando che sia l'argomento a stabilire quale distribuzione si intende, come in p(x) rispetto a p(z); quando la cosa diventa confusa, aggiungete pedici come p_\\theta(x) o p_{\\text{data}}(x). La normalizzazione richiede \\sum_x p(x) = 1 oppure \\int p(x)\\,dx = 1, con uno spazio sottile \\, prima di dx. Il campionamento si scrive x \\sim p(x), usando \\sim.",
  },
  "conditional-probability": {
    name: "Probabilità condizionata",
    meaning: "Probabilità condizionata di y dato x, come la distribuzione delle etichette prevista da un classificatore per un ingresso.",
    usage: "I modelli discriminativi apprendono direttamente p(y | x), mentre quelli generativi apprendono p(x | y) e p(y) e applicano la regola di Bayes, p(y|x) = p(x|y)p(y)/p(x). La barra verticale digitata come | è un carattere ordinario e non riceve spazio attorno; \\mid è una relazione e produce p(y \\mid x), che si legge meglio ed è ciò che raccomanda la maggior parte delle guide di stile. Per un'espressione condizionante alta, \\middle| tra \\left( e \\right) ridimensiona la barra insieme alle parentesi. Pedici come p_\\theta(y \\mid x) indicano i parametri del modello.",
  },
  "sum-over-classes": {
    name: "Somma sulle classi",
    meaning: "Sommatoria sulle classi c da 1 a C, come nelle perdite multiclasse e nella normalizzazione delle probabilità.",
    usage: "Le somme sulle classi compaiono nell'entropia incrociata categoriale, -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c, e nel denominatore della softmax. In display i limiti vanno sopra e sotto la grande sigma; in linea si trovano a destra in corpo più piccolo, risparmiando altezza di riga. Forzate il posizionamento da display in linea con \\sum\\limits, o il contrario con \\nolimits. Usare C per il numero di classi e c per l'indice è una convenzione comune; evitate solo di riusare C per un costo o una costante nella stessa equazione. Il simbolo \\Sigma è una lettera greca e non deve sostituire \\sum.",
  },
  "product-over-samples": {
    name: "Produttoria sui campioni",
    meaning: "Produttoria sui campioni i da 1 a N, tipicamente la verosimiglianza di un insieme di dati i.i.d.",
    usage: "Per campioni indipendenti la verosimiglianza si fattorizza come \\prod_{i=1}^{N} p(x_i \\mid \\theta), e passando al logaritmo diventa una somma. \\prod è il pi greco maiuscolo da operatore grande, dimensionato per il display; non sostituitelo con \\Pi, la lettera greca, che resta piccola e non ha limiti. In display i limiti vanno sopra e sotto, mentre nel testo in linea si trovano di lato; \\prod\\limits modifica questo comportamento. Per un coprodotto, \\coprod è la controparte capovolta. Nella pratica le produttorie lunghe sono numericamente instabili, un motivo in più per cui gli articoli passano spesso alla forma logaritmica.",
  },
  "l1-norm": {
    name: "Norma L1",
    meaning: "Norma L1 di theta: la somma dei valori assoluti dei suoi elementi.",
    usage: "La norma L1, \\|\\theta\\|_1 = \\sum_i |\\theta_i|, è la penalità del lasso e favorisce soluzioni sparse perché la sua palla unitaria ha spigoli sugli assi. \\| dà le doppie barre ma le tratta come simboli ordinari, quindi la spaziatura può risultare sbagliata quando segue un segno meno; \\lVert \\theta \\rVert_1 le marca come delimitatori sinistro e destro e le spazia correttamente. Per argomenti alti usate \\left\\| ... \\right\\| per ridimensionarle. Molti articoli definiscono una macro \\norm tramite \\DeclarePairedDelimiter di mathtools per coerenza. Non confondetela con |\\theta|, che indica un valore assoluto o una cardinalità.",
  },
  "l2-norm": {
    name: "Norma L2",
    meaning: "Norma euclidea (L2) di theta: la radice quadrata della somma dei quadrati dei suoi elementi.",
    usage: "La norma L2 \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} misura la lunghezza, e il suo quadrato compare come penalità ridge o di weight decay \\lambda\\|\\theta\\|_2^2. Notate l'ordine di pedice e apice: \\|\\theta\\|_2^2 è la norma al quadrato, e TeX impila ordinatamente pedice e apice. Molti autori omettono il pedice 2 quando il contesto è chiaro. Per una spaziatura migliore dei delimitatori usate \\lVert e \\rVert invece di \\|, e \\left\\| \\right\\| per contenuti alti come le frazioni. Per le matrici, \\|A\\|_2 indica di solito la norma spettrale e non quella elemento per elemento, che è la norma di Frobenius.",
  },
  "frobenius-norm": {
    name: "Norma di Frobenius",
    meaning: "Norma di Frobenius della matrice W: la radice quadrata della somma dei quadrati di tutti i suoi elementi.",
    usage: "La norma di Frobenius è \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}, l'analogo matriciale della norma L2 dei vettori. Si usa per il weight decay sulle matrici, per l'errore di approssimazione a rango basso e negli obiettivi di fattorizzazione di matrici. Differisce dalla norma spettrale \\|\\mathbf{W}\\|_2, che è il valore singolare più grande. Il pedice F è una semplice lettera corsiva; alcuni scrivono \\mathrm{F}. Come per le norme vettoriali, \\lVert e \\rVert danno una spaziatura migliore di \\|, soprattutto quando la norma è al quadrato o preceduta da un coefficiente.",
  },
};

export default text;
