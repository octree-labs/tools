import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  probability: {
    name: "Probabilità (P blackboard)",
    meaning: "P in grassetto da lavagna (blackboard bold), la misura di probabilità applicata agli eventi.",
    usage: "La probabilità in chiave di teoria della misura scrive \\mathbb{P}(A) per la probabilità dell'evento A, con assiomi come \\mathbb{P}(\\Omega) = 1. Lo stile blackboard distingue la misura da una P semplice che potrebbe indicare una matrice, un polinomio o una partizione. Con i font standard \\mathbb funziona solo sulle lettere maiuscole, quindi un input minuscolo produce glifi sbagliati. Abbinatela a \\mathbb{E} e a un Var in tondo per uno stile coerente. Uno spazio di probabilità è la terna (\\Omega, \\mathcal{F}, \\mathbb{P}), con la F calligrafica per la sigma-algebra. Alcuni autori usano invece \\Pr, un operatore predefinito in tondo.",
  },
  "probability-of-a": {
    name: "Probabilità di A",
    meaning: "Probabilità dell'evento A, scritta con una normale P maiuscola in corsivo.",
    usage: "I testi introduttivi scrivono P(A) per la probabilità che A si verifichi, con 0 \\le P(A) \\le 1 e la regola del complementare P(A^c) = 1 - P(A). La P semplice in corsivo va bene quando nient'altro nel documento usa quella lettera; altrimenti \\Pr(A), un operatore predefinito in tondo, o \\mathbb{P}(A) evitano il conflitto. Per argomenti grandi, lasciate crescere le parentesi: P\\left(\\bigcup_i A_i\\right). Digitare Pr(A) senza backslash dà una P e una r in corsivo, come due variabili moltiplicate. La probabilità condizionata mette \\mid dentro le parentesi, P(A \\mid B), anziché una semplice barra verticale.",
  },
  expectation: {
    name: "Valore atteso",
    meaning: "Valore atteso di una variabile aleatoria X, scritto con una E in grassetto da lavagna.",
    usage: "Il valore atteso è la media di X pesata secondo la sua distribuzione, \\mathbb{E}[X] = \\sum_x x\\,p(x) oppure \\int x f(x)\\,dx. Gli articoli di machine learning lo usano ovunque, spesso con un pedice che indica la distribuzione: \\mathbb{E}_{x \\sim p}[\\ell(x)]. Le parentesi quadre sono convenzionali, e \\left[ \\right] o \\bigl[ \\bigr] aiutano quando l'argomento contiene frazioni. La E blackboard distingue l'operatore da un'energia E o da un insieme di archi E. La linearità, \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y], vale anche senza indipendenza, ed è per questo che lo si usa con tanta libertà.",
  },
  "expectation-e": {
    name: "Valore atteso (E)",
    meaning: "Valore atteso di X con una E semplice in corsivo, la media della sua distribuzione.",
    usage: "Molti manuali di statistica scrivono E[X] o E(X) per il valore atteso, con l'identità della varianza \\operatorname{Var}(X) = E[X^2] - (E[X])^2 come esempio classico. Una E in corsivo può entrare in conflitto con altri significati, come l'energia o un evento chiamato E, ed è per questo che negli articoli di ricerca sono comuni \\mathbb{E} o una \\mathrm{E} in tondo. Se scegliete il tondo, definite \\DeclareMathOperator{\\E}{E} così che spaziatura e font restino uniformi ovunque. Il valore atteso condizionato segue lo stesso stile, E[X \\mid Y]. Qualunque forma scegliate, usatela in modo coerente dall'inizio alla fine.",
  },
  variance: {
    name: "Varianza",
    meaning: "Varianza di X, lo scarto quadratico atteso dalla sua media, con un'etichetta in tondo.",
    usage: "Le identità usuali sono \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 e \\text{Var}(aX + b) = a^2\\text{Var}(X). \\text{Var} ha un buon aspetto quasi ovunque, ma dentro il testo in corsivo di un teorema anche l'etichetta diventa corsiva, perché \\text copia il font circostante. \\operatorname{Var} o un \\DeclareMathOperator{\\Var}{Var} nel preambolo è più robusto e spazia correttamente. Alcuni autori scrivono invece \\mathbb{V}, \\sigma^2 o \\mathrm{Var}. Per variabili indipendenti le varianze si sommano: \\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y), mentre nel caso generale si aggiunge il doppio della covarianza.",
  },
  covariance: {
    name: "Covarianza",
    meaning: "Covarianza di X e Y, che misura come le due variabili aleatorie variano insieme.",
    usage: "Definita da \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y], è alla base della correlazione \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) e delle matrici di covarianza, di solito indicate con \\Sigma. Variabili indipendenti hanno covarianza nulla, ma in generale il viceversa non vale. Come per Var, \\operatorname{Cov} o un operatore dichiarato dà un risultato più solido di \\text{Cov}, che prende il corsivo negli enunciati dei teoremi. Aggiungete uno spazio sottile dopo la virgola, (X,\\,Y), se gli argomenti sembrano compressi. Per un vettore aleatorio, \\operatorname{Cov}(\\mathbf{X}) indica l'intera matrice di covarianza. Un valore positivo significa che le variabili tendono a muoversi nella stessa direzione.",
  },
  "normal-distribution": {
    name: "Distribuzione normale",
    meaning: "Distribuzione normale (gaussiana) con media mu e varianza sigma al quadrato.",
    usage: "Scrivete X \\sim \\mathcal{N}(\\mu, \\sigma^2) per affermare che X ha distribuzione normale; il secondo parametro è la varianza, non la deviazione standard, una frequente fonte di confusione quando si legge la documentazione dei software. La forma multivariata è \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma) con una matrice di covarianza. \\mathcal dà la N calligrafica e funziona solo sulle lettere maiuscole. La densità \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)} segue spesso in una formula in display. La normale standard è \\mathcal{N}(0, 1), e la sua funzione di ripartizione si indica di solito con \\Phi.",
  },
  "independence-symbol-double-perp": {
    name: "Simbolo di indipendenza (doppio perp)",
    meaning: "Due segni \\perp sovrapposti con spazi negativi, il consueto simbolo costruito a mano per l'indipendenza statistica.",
    usage: "I probabilisti scrivono X \\perp\\!\\!\\!\\perp Y per variabili aleatorie indipendenti e X \\perp\\!\\!\\!\\perp Y \\mid Z per l'indipendenza condizionata, notazione resa popolare dai modelli grafici e dall'inferenza causale. Tre spazi sottili negativi \\! portano il secondo \\perp quasi sopra il primo, creando una T rovesciata con doppia asta. Poiché è assemblato a mano, il suo aspetto esatto varia un po' tra i font; definite una macro come \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}} così ottiene anche la spaziatura da relazione. In alcuni testi si usa un solo \\perp per l'indipendenza, ma si confonde con l'ortogonalità.",
  },
  conditional: {
    name: "Barra di condizionamento",
    meaning: "Barra verticale con spaziatura da relazione, letta come «dato», «tale che» o «divide».",
    usage: "A differenza di una semplice |, \\mid aggiunge spazio su entrambi i lati, ed è proprio ciò che serve alla probabilità condizionata P(A \\mid B), alla notazione insiemistica per comprensione \\{x \\mid x > 0\\} e alla divisibilità 3 \\mid 12. Usate | o \\vert per i valori assoluti, dove non si vuole spazio aggiuntivo, e \\lvert ... \\rvert quando la barra racchiude qualcosa. Nella notazione per comprensione con contenuti alti, \\middle| tra \\left\\{ e \\right\\} fa crescere la barra di conseguenza. La sua negazione è \\nmid, per «non divide». Molti autori usano invece i due punti nella notazione per comprensione, il che evita confusione quando compare anche la divisibilità.",
  },
  given: {
    name: "Probabilità condizionata",
    meaning: "Probabilità condizionata di A dato che l'evento B si è già verificato.",
    usage: "Definita da P(A \\mid B) = P(A \\cap B)/P(B) per P(B) > 0, è il mattone fondamentale del teorema di Bayes. Usate sempre \\mid anziché |: la barra semplice non riceve spazio attorno e l'espressione sembra compressa. Per argomenti alti, scrivete P\\left(A \\,\\middle|\\, B\\right) così che la barra si adatti alle parentesi. Le catene di condizionamento, P(A \\mid B, C), mettono una virgola dopo la barra anziché una seconda barra. Nella notazione della verosimiglianza, p(x \\mid \\theta) segue la stessa convenzione, e alcuni statistici usano un punto e virgola, p(x; \\theta), quando \\theta è un parametro fisso e non una variabile aleatoria.",
  },
  "chi-squared": {
    name: "Chi quadro",
    meaning: "Chi quadro: la lettera greca chi al quadrato, che dà il nome a una distribuzione e a una statistica test.",
    usage: "La statistica di Pearson \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} confronta frequenze osservate e attese, e \\chi^2_k indica la distribuzione con k gradi di libertà. Notate che \\chi è la lettera greca chi; non digitate una x, che le somiglia ma è un glifo diverso e si posiziona diversamente rispetto alla linea di base. Per aggiungere sia i gradi di libertà sia il quadrato, scrivete \\chi^2_{k} o \\chi_{k}^{2}; LaTeX li sovrappone allo stesso modo in entrambi i casi. Nelle sezioni dei risultati, riportate i test come \\chi^2(2) = 6.1, p = 0.047, seguendo le norme redazionali del vostro settore.",
  },
  "binomial-coefficient": {
    name: "Coefficiente binomiale",
    meaning: "Coefficiente binomiale n su k, il numero di sottoinsiemi di k elementi di un insieme di n elementi.",
    usage: "Compare nel teorema binomiale (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}, nella regola di Pascal e nella distribuzione binomiale P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}. \\binom si dimensiona in base allo stile corrente; forzate la forma grande nel testo con \\dbinom o quella piccola in display con \\tbinom. La vecchia sintassi {n \\choose k} funziona ancora nello stile plain TeX, ma è sconsigliata nei documenti LaTeX. Alcuni testi scrivono C(n,k) o nCk con prefisso; nella scrittura scientifica lo standard è la forma impilata tra parentesi.",
  },
  factorial: {
    name: "Fattoriale",
    meaning: "Fattoriale di n, il prodotto di tutti gli interi positivi fino a n.",
    usage: "Scrivere n! non richiede alcun comando: il punto esclamativo viene stampato direttamente in modalità matematica, con 0! = 1 per convenzione. I fattoriali sono ovunque in combinatoria e in analisi, da \\binom{n}{k} = \\frac{n!}{k!(n-k)!} ai coefficienti di Taylor \\frac{f^{(n)}(a)}{n!}. Attenzione alla spaziatura nei prodotti come n!\\,m!, dove uno spazio sottile evita che i punti esclamativi si addossino alla lettera successiva, e mettete tra parentesi gli argomenti composti, (n+1)!. Non confondete il carattere con \\!, che è uno spazio sottile negativo. Notazioni correlate sono il semifattoriale n!! e l'approssimazione di Stirling n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n.",
  },
};

export default text;
