import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "Argmax con pedice",
    meaning: "Argmax rispetto a x: il punto x in cui la funzione obiettivo assume il valore massimo.",
    usage: "Nei testi di ottimizzazione il punto di massimo di f su un insieme ammissibile si scrive x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x). Scritto come \\arg\\max_{x}, il pedice si aggancia a \\max, quindi nelle formule in evidenza x compare centrato sotto max anziché sotto l'intero arg max. \\operatorname*{arg\\,max}_{x} o un operatore dichiarato con asterisco lo colloca sotto il nome completo. Nelle formule in linea il pedice sta comunque in basso a destra. Poiché i massimi possono non essere unici, x^* \\in \\arg\\max è tecnicamente più preciso dell'uguaglianza. Per la massimizzazione su più variabili, elencatele: \\arg\\max_{x, y}.",
  },
  "argmin-subscript": {
    name: "Argmin con pedice",
    meaning: "Argmin rispetto a x: il punto x che minimizza la funzione obiettivo.",
    usage: "Questa forma definisce la soluzione di un problema di minimizzazione, come nell'operatore prossimale \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big). Poiché \\arg non accetta limiti, il pedice appartiene a \\min, che lo centra sotto min solo nelle formule in evidenza; \\operatorname*{arg\\,min} corregge la posizione. I vincoli possono andare nel pedice, \\arg\\min_{x \\in C}, oppure, su più righe, dentro \\substack. Distinguete argmin, che restituisce un punto o un insieme, da \\min, che restituisce il valore; confonderli è un errore frequente negli elaborati degli studenti.",
  },
  "minimize": {
    name: "Minimizzazione",
    meaning: "Minimo rispetto a x: il valore più piccolo che un'espressione assume al variare di x, scritto con x sotto min.",
    usage: "\\min è un operatore predefinito che accetta limiti, quindi nelle formule in evidenza \\min_{x} pone x sotto la parola, mentre in linea x compare come pedice a destra. È la riga d'apertura di un problema di ottimizzazione standard: \\min_x f(x) soggetto a vincoli. Quando il minimo può non essere raggiunto, come sugli insiemi aperti, usate invece \\inf. Per forzare in linea la posizione delle formule in evidenza scrivete \\min\\limits_{x}. Per condizioni su più righe sotto min usate \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}. Il valore che denota è un numero, a differenza di argmin, che restituisce il punto di minimo.",
  },
  "maximize": {
    name: "Massimizzazione",
    meaning: "Massimo rispetto a x: il valore più grande che l'espressione raggiunge quando x percorre il suo dominio.",
    usage: "\\max_{x} funziona come \\min_{x}: l'operatore predefinito pone i limiti sotto nelle formule in evidenza e di lato in linea. Usi tipici sono la funzione duale, i problemi minimax come \\min_G \\max_D nell'addestramento delle reti GAN e la massimizzazione del margine nelle SVM. Quando l'estremo superiore può non essere raggiunto, l'operatore corretto è \\sup. Combinare operatori è comune, e TeX gestisce bene i limiti impilati su \\min e \\max adiacenti. Potete modificare la posizione con \\limits o \\nolimits e aggiungere \\, o \; prima dell'obiettivo per dare respiro alle espressioni lunghe.",
  },
  "subject-to": {
    name: "Abbreviazione “s.t.” (soggetto a)",
    meaning: "Abbreviazione, di origine inglese, di “soggetto a”, che introduce i vincoli di un problema di ottimizzazione.",
    usage: "Nell'enunciato di un problema, s.t. separa l'obiettivo dai vincoli: \\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0. Usate \\text in modo che le lettere siano diritte e il punto venga mantenuto, e circondatelo con \\quad su entrambi i lati, perché \\text non aggiunge alcuna spaziatura propria. Molte guide di stile preferiscono l'espressione completa, nei testi italiani \\text{soggetto a}, soprattutto nelle formulazioni in evidenza allineate con l'ambiente align, dove i vincoli si impilano sulle righe successive sotto il primo. Non digitate s.t. direttamente in modalità matematica: otterreste una s e una t in corsivo, trattate come variabili, seguite da un punto.",
  },
  "constraint": {
    name: "Vincolo di disuguaglianza",
    meaning: "Vincolo di disuguaglianza generico: la funzione g deve essere non positiva in un punto ammissibile x.",
    usage: "Scrivere i vincoli di disuguaglianza nella forma standard g_i(x) \\leq 0 è la convenzione dell'ottimizzazione convessa, quindi un vincolo come x_1 + x_2 \\geq 1 diventa 1 - x_1 - x_2 \\leq 0. \\leq ha l'alias breve \\le, ed entrambi danno lo stesso glifo; \\leqslant disegna una barra inclinata, preferita in una parte della tipografia europea. Indicizzate più vincoli come g_i(x) \\leq 0 per i = 1, \\dots, m. Nell'analisi KKT ogni disuguaglianza riceve un moltiplicatore \\lambda_i \\geq 0 con la condizione degli scarti complementari \\lambda_i g_i(x) = 0. Nella presentazione dei problemi, allineateli con &.",
  },
  "equality-constraint": {
    name: "Vincolo di uguaglianza",
    meaning: "Vincolo di uguaglianza generico: la funzione h deve annullarsi in ogni punto ammissibile x.",
    usage: "I vincoli di uguaglianza h_j(x) = 0 affiancano i vincoli di disuguaglianza g_i(x) \\leq 0 nella forma standard di un problema di programmazione non lineare. Nell'ottimizzazione convessa devono essere affini, perciò si scrivono spesso Ax = b. Nella lagrangiana ciascuno riceve un moltiplicatore \\nu_j o \\mu_j che, a differenza dei moltiplicatori delle disuguaglianze, può avere segno qualsiasi. La lettera h è convenzionale, ma in alcuni settori si scontra con il passo o con l'entropia; scegliete lettere che non creino conflitti. Per più vincoli, indicizzateli con j per tenerli distinti dall'indice i delle disuguaglianze.",
  },
  "lagrangian": {
    name: "Lagrangiana",
    meaning: "Funzione lagrangiana, che combina un obiettivo con i suoi vincoli pesati dai moltiplicatori lambda.",
    usage: "La lagrangiana è \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x), e la funzione duale è il suo estremo inferiore rispetto a x. Porre \\nabla_x \\mathcal{L} = 0 dà la condizione di stazionarietà usata nei problemi di analisi vincolata e nelle derivazioni delle SVM. \\mathcal produce la L calligrafica e funziona solo con le lettere maiuscole. Poiché lo stesso \\mathcal{L} indica anche le funzioni di perdita nell'apprendimento automatico, gli articoli che usano entrambi scrivono talvolta L o \\Lambda per uno dei due. Alcuni manuali adottano la convenzione di segno opposta, f - \\lambda g, quindi dichiarate la vostra.",
  },
  "gradient": {
    name: "Gradiente",
    meaning: "Gradiente di f in x: il vettore delle derivate parziali prime, che punta nella direzione di massima crescita.",
    usage: "Il gradiente \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top guida i metodi del primo ordine come la discesa del gradiente, x_{k+1} = x_k - \\alpha \\nabla f(x_k), e il suo annullarsi è la condizione di ottimalità del primo ordine per i problemi non vincolati. \\nabla è il triangolo rovesciato, chiamato anche nabla. Lo stesso operatore dà la divergenza, \\nabla \\cdot \\mathbf{F}, e il rotore, \\nabla \\times \\mathbf{F}, nel calcolo vettoriale. Non confondetelo con \\Delta, il triangolo diritto usato per il laplaciano o per le differenze finite. Aggiungete un pedice, \\nabla_x f, quando derivate solo rispetto ad alcune variabili.",
  },
  "hessian": {
    name: "Matrice hessiana",
    meaning: "Hessiana di f in x: la matrice delle derivate parziali seconde, che descrive la curvatura locale.",
    usage: "In ottimizzazione \\nabla^2 f(x) è l'hessiana, usata nel metodo di Newton, x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k), e nelle condizioni del secondo ordine: un'hessiana definita positiva in un punto stazionario indica un minimo locale stretto. Attenzione: in fisica e nelle equazioni alle derivate parziali \\nabla^2 f indica il laplaciano, uno scalare pari alla traccia dell'hessiana, spesso scritto \\Delta f. Chiarite quale dei due intendete, oppure usate H_f o \\nabla\\nabla^\\top f per la matrice. La convessità di una funzione due volte differenziabile equivale a \\nabla^2 f(x) \\succeq 0 ovunque.",
  },
  "optimal-value": {
    name: "Soluzione ottima",
    meaning: "x con un asterisco in apice: la soluzione ottima, o punto di minimo, di un problema di ottimizzazione.",
    usage: "L'asterisco contrassegna il punto ottimo, quindi p^* = f(x^*) è il valore ottimo, e gli ottimi duali si scrivono \\lambda^*, \\nu^*. Le velocità di convergenza si esprimono in termini di f(x_k) - f(x^*) o di \\|x_k - x^*\\|. ^* e ^\\ast producono lo stesso asterisco; ^\\star dà una stella che evita la confusione con i coniugati complessi, gli aggiunti o la stella di Kleene, che usano anch'essi un asterisco. Quando x ha anche un pedice, x_k^* e x^*_k vengono resi in modo identico. Distinguete x^* da \\hat{x}, che indica tipicamente una stima o una soluzione approssimata.",
  },
  "feasible-set": {
    name: "Insieme ammissibile",
    meaning: "X calligrafica, usata comunemente per indicare l'insieme ammissibile o il dominio su cui varia una variabile di ottimizzazione.",
    usage: "Le maiuscole calligrafiche danno il nome agli insiemi in ottimizzazione e nell'apprendimento automatico: x \\in \\mathcal{X} per la regione ammissibile, \\mathcal{Y} per le etichette, \\mathcal{D} per una distribuzione dei dati, \\mathcal{H} per una classe di ipotesi. \\mathcal supporta solo lettere maiuscole; con argomenti minuscoli si ottengono glifi imprevedibili. Se volete una grafia più ornata, \\mathscr offre uno stile diverso, mentre \\mathbb{X} dà il grassetto da lavagna, usato più spesso per gli insiemi numerici. La proiezione sull'insieme si scrive \\Pi_{\\mathcal{X}}(y). Definite l'insieme esplicitamente una volta, per esempio \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}.",
  },
  "kkt-conditions": {
    name: "Condizioni KKT",
    meaning: "Condizione di stazionarietà del sistema KKT: il gradiente dell'obiettivo è bilanciato dai gradienti dei vincoli, pesati dai moltiplicatori.",
    usage: "Questa riga è la prima delle condizioni di Karush-Kuhn-Tucker; l'insieme completo aggiunge l'ammissibilità primale g(x) \\leq 0, l'ammissibilità duale \\lambda \\geq 0 e la condizione degli scarti complementari \\lambda g(x) = 0. Con più vincoli si generalizza in \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0. Per leggibilità componete l'intero sistema in un ambiente cases o aligned. Le convenzioni di segno variano: se la lagrangiana è scritta f - \\lambda g, il più diventa un meno, quindi adeguatevi alla vostra definizione. Valutare esplicitamente in x^* evita ambiguità.",
  },
  "positive-definite": {
    name: "Matrice definita positiva",
    meaning: "Condizione di matrice definita positiva: A \\succ 0 significa x^T A x > 0 per ogni vettore x non nullo.",
    usage: "Nell'analisi matriciale e nella programmazione semidefinita, \\succ esprime l'ordine di Loewner, quindi A \\succ B significa che A - B è definita positiva. Un'hessiana \\nabla^2 f(x) \\succ 0 certifica la convessità stretta, e una matrice di covarianza \\Sigma \\succ 0 è invertibile. \\succ è un simbolo di relazione, quindi riceve automaticamente la spaziatura da relazione. Evitate > per le matrici, perché suggerisce un confronto elemento per elemento. Simboli simili sono \\succcurlyeq, una variante curva che alcuni autori usano per il caso semidefinito, e \\gg, che significa “molto maggiore di”. Come notazione insiemistica equivalente si scrive A \\in \\mathbb{S}^n_{++}.",
    example: "\\Sigma \\succ 0 \\implies \\Sigma^{-1} \\text{ esiste}",
  },
  "positive-semidefinite": {
    name: "Matrice semidefinita positiva",
    meaning: "Condizione di semidefinitezza positiva: A \\succeq 0 significa x^T A x \\geq 0 per tutti i vettori x.",
    usage: "I vincoli semidefiniti X \\succeq 0 definiscono i programmi semidefiniti, e la convessità di una funzione regolare equivale a \\nabla^2 f(x) \\succeq 0. Le matrici di Gram e di covarianza sono sempre semidefinite positive. \\succeq disegna il segno di “segue” con una barra diritta sotto; \\succcurlyeq è una variante a barra curva che alcuni testi di ottimizzazione preferiscono, quindi sceglietene una e mantenetela. La versione stretta è \\succ. L'insieme di tali matrici si scrive spesso \\mathbb{S}^n_+, e le condizioni sul complemento di Schur sono un modo comune di esprimere questi vincoli in forma a blocchi.",
  },
};

export default text;
