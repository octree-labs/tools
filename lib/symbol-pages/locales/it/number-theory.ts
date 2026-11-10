import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "Non divisibilità",
    meaning: "Barra verticale tagliata che afferma che un intero non divide un altro.",
    usage: "I teorici dei numeri scrivono 3 \\nmid 10 e lo usano in ipotesi come quella del piccolo teorema di Fermat: se p \\nmid a, allora a^{p-1} \\equiv 1 \\pmod p. È la negazione di \\mid e ha la stessa spaziatura da relazione; \\not\\mid produce una barra spesso mal posizionata, quindi preferite \\nmid. Evitate una | semplice con una barra aggiunta a mano. In informatica compare nelle condizioni su passi, periodi e dimensioni delle tabelle hash, come k \\nmid n. Tra le negazioni precomposte affini ci sono \\nparallel e \\nleq.",
  },
  "gcd": {
    name: "Massimo comune divisore",
    meaning: "Massimo comune divisore di a e b, il più grande intero che li divide entrambi.",
    usage: "\\gcd è un operatore predefinito, quindi viene stampato in tondo e, come \\lim, accetta limiti posti sotto di sé in stile display. L'identità di Bézout afferma che \\gcd(a, b) = ax + by per opportuni interi x e y, e a e b sono coprimi quando \\gcd(a, b) = 1. Molti articoli di teoria dei numeri omettono il nome e scrivono (a, b), notazione compatta ma in conflitto con le coppie ordinate e gli intervalli aperti. L'algoritmo di Euclide si basa su \\gcd(a, b) = \\gcd(b, a \\bmod b), dove \\bmod fornisce la spaziatura da operatore binario. Non esiste un comando predefinito corrispondente per il minimo comune multiplo.",
  },
  "lcm": {
    name: "Minimo comune multiplo",
    meaning: "Minimo comune multiplo di a e b, il più piccolo intero positivo divisibile per entrambi.",
    usage: "A differenza di \\gcd, non esiste un comando \\lcm predefinito, ed è per questo che questa voce usa \\text. Una riga nel preambolo, \\DeclareMathOperator{\\lcm}{lcm}, fornisce un vero operatore con la spaziatura corrispondente; in alternativa usate \\operatorname{lcm} in linea. L'identità \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| collega i due. Il minimo comune multiplo compare quando si sommano frazioni con denominatori diversi, nel periodo di cicli combinati e nell'ordine di un elemento di un gruppo prodotto. Alcuni testi scrivono [a, b] per il mcm, in parallelo con (a, b) per il MCD.",
  },
  "modulo": {
    name: "Modulo",
    meaning: "'mod n' tra parentesi dopo una congruenza, che ne indica il modulo.",
    usage: "Scrivete a \\equiv b \\pmod{n} per affermare che n divide a - b. \\pmod aggiunge le parentesi e un'ampia spaziatura prima di esse, adatta alle congruenze in display. I comandi affini servono in altri casi: \\bmod è l'operatore binario per il resto, come in a \\bmod n = r; \\mod produce la parola mod senza parentesi; e \\pod produce solo le parentesi. Nel testo in linea il grande spazio inserito da \\pmod può sembrare eccessivo, quindi alcuni autori passano a \\bmod o a una macro personalizzata. Gli enunciati del teorema cinese del resto concatenano più congruenze con moduli diversi.",
  },
  "euler-phi": {
    name: "Funzione phi di Eulero",
    meaning: "Funzione totiente di Eulero: quanti interi da 1 a n sono coprimi con n, scritta con la phi ricciuta.",
    usage: "Il teorema di Eulero a^{\\varphi(n)} \\equiv 1 \\pmod n per \\gcd(a, n) = 1 e la formula del prodotto \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) sono le occorrenze classiche. \\varphi dà la forma aperta con l'occhiello, mentre \\phi dà la forma con un tratto dritto che attraversa un cerchio; entrambe indicano la stessa funzione, e la scelta è una questione di stile editoriale. Molti testi di teoria dei numeri scelgono \\varphi così che \\phi resti libera per altri usi, come la sezione aurea o un angolo. La generazione delle chiavi RSA usa \\varphi(pq) = (p-1)(q-1).",
  },
  "phi-function": {
    name: "Funzione phi",
    meaning: "Funzione totiente di Eulero scritta con la phi a tratto dritto invece che con la variante ricciuta.",
    usage: "Molti manuali scrivono la funzione totiente come \\phi(n), per esempio \\phi(p) = p - 1 per un primo p e \\phi(p^k) = p^k - p^{k-1}. Nel font predefinito Computer Modern, \\phi è un cerchio attraversato da un tratto verticale, mentre \\varphi è la forma con l'occhiello. Entrambe indicano la stessa funzione, quindi sceglietene una e restate coerenti. Se compaiono anche la sezione aurea, un angolo o un potenziale, riservate \\phi a un significato e \\varphi all'altro. La moltiplicatività, \\phi(mn) = \\phi(m)\\phi(n) per m e n coprimi, è una formula in display frequente.",
  },
  "prime": {
    name: "Numero primo",
    meaning: "p minuscola corsiva, la lettera convenzionale per un numero primo in teoria dei numeri.",
    usage: "Per convenzione p, e q per un secondo primo, indicano numeri primi, quindi enunciati come 'per ogni primo p' o somme e produttorie indicizzate da p richiedono poche spiegazioni aggiuntive. Il prodotto di Eulero \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} è il caso classico in cui l'indice percorre implicitamente i primi. Digitando p in modalità matematica si ottiene la lettera corsiva; mantenetela in modalità matematica anche nel testo, così che corrisponda alle formule in display. Per evitare ambiguità con probabilità o p-value, dichiarate presto la convenzione. Le potenze di primi si scrivono p^k, e i numeri p-adici \\mathbb{Q}_p.",
  },
  "prime-notation": {
    name: "n-esimo numero primo",
    meaning: "p_n con pedice, che indica l'n-esimo primo, quindi p_1 = 2, p_2 = 3, p_3 = 5.",
    usage: "Le successioni di primi sono indicizzate così in risultati come la dimostrazione di Euclide, dove p_1 p_2 \\cdots p_n + 1 ha un fattore primo fuori dalla lista, e nell'asintotica p_n \\sim n\\ln n derivante dal teorema dei numeri primi. I pedici di più caratteri richiedono le graffe, p_{n+1}, altrimenti si abbassa solo la n. Il postulato di Bertrand diventa p_{n+1} < 2p_n. Il primoriale, il prodotto dei primi n numeri primi, si scrive spesso p_n\\#. La funzione enumerativa dei primi \\pi(x) è sostanzialmente l'inversa di n \\mapsto p_n.",
  },
  "legendre-symbol": {
    name: "Simbolo di Legendre",
    meaning: "Simbolo di Legendre (a/p): 1, -1 o 0 a seconda che a sia o meno un residuo quadratico modulo p.",
    usage: "Per un primo dispari p, \\left(\\frac{a}{p}\\right) vale 1 se a è un quadrato non nullo modulo p, -1 se non lo è, e 0 se p \\mid a. La reciprocità quadratica è la celebre identità che lega \\left(\\frac{p}{q}\\right) e \\left(\\frac{q}{p}\\right) tramite il segno (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}. \\left( \\right) adatta automaticamente le parentesi alla frazione. Non usate \\binom, che omette la linea di frazione richiesta dal simbolo; \\genfrac{(}{)}{}{}{a}{p} è un'alternativa equivalente. Il criterio di Eulero lo calcola come a^{(p-1)/2} modulo p.",
  },
  "integer-part": {
    name: "Parte intera",
    meaning: "Parentesi quadre attorno a x, una notazione più antica per la parte intera o il floor di x.",
    usage: "La teoria dei numeri classica e molti testi per le olimpiadi scrivono [x] per il più grande intero non superiore a x, come nella formula di Legendre per l'esponente di p in n!, che somma [n/p^k] su k \\ge 1. La scrittura moderna preferisce \\lfloor x \\rfloor, che non è ambiguo, perché le parentesi quadre servono anche a raggruppare espressioni, indicano intervalli chiusi e fungono da parentesi di Iverson. Se mantenete [x], definitelo esplicitamente. Per i numeri negativi floor e troncamento differiscono: \\lfloor -2.5 \\rfloor = -3, mentre il troncamento verso zero dà -2.",
  },
  "fractional-part": {
    name: "Parte frazionaria",
    meaning: "Parte frazionaria di x, definita come x meno il suo floor, scritta con graffe precedute dal backslash.",
    usage: "Poiché in LaTeX le graffe semplici servono solo a raggruppare, quelle visibili vanno scritte come \\{ e \\}. La parte frazionaria soddisfa x = \\lfloor x \\rfloor + \\{x\\} con 0 \\le \\{x\\} < 1, e compare nei risultati di equidistribuzione come il teorema di Weyl, secondo cui \\{n\\alpha\\} è uniformemente distribuita per \\alpha irrazionale. Le stesse graffe indicano anche gli insiemi, quindi \\{x\\} potrebbe essere letto come il singoletto contenente x; definite la notazione oppure scrivete \\operatorname{frac}(x). Per contenuti più alti usate \\left\\{ ... \\right\\}.",
  },
  "sum-of-divisors": {
    name: "Somma dei divisori",
    meaning: "Funzione somma dei divisori: il totale di tutti i divisori positivi di n.",
    usage: "\\sigma(n) = \\sum_{d \\mid n} d, quindi \\sigma(6) = 1 + 2 + 3 + 6 = 12. Un numero è perfetto esattamente quando \\sigma(n) = 2n, e la forma generale \\sigma_k(n) = \\sum_{d \\mid n} d^k include il numero dei divisori come \\sigma_0. La funzione è moltiplicativa, con \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1} per le potenze di primi, quindi si può calcolare a partire da una fattorizzazione. La \\sigma minuscola indica anche la deviazione standard, quindi nei lavori interdisciplinari una breve nota aiuta. La \\Sigma maiuscola qui non c'entra.",
  },
  "mobius-function": {
    name: "Funzione di Möbius",
    meaning: "Funzione di Möbius: 0 se il quadrato di un primo divide n, altrimenti (-1)^k per k fattori primi.",
    usage: "Il suo ruolo principale è l'inversione di Möbius: se g(n) = \\sum_{d \\mid n} f(d), allora f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d). Soddisfa inoltre \\sum_{d \\mid n} \\mu(d) = 0 per n > 1, e la sua serie di Dirichlet è il reciproco della funzione zeta, \\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}. La lettera \\mu è molto sovraccarica, indicando una media in statistica e una misura in analisi, quindi introducetela esplicitamente. In modalità matematica usate la \\mu greca, mai una u latina come sosia.",
  },
  "number-of-divisors": {
    name: "Numero dei divisori",
    meaning: "Funzione che conta i divisori: quanti divisori positivi ha n.",
    usage: "d(n) = \\sum_{d \\mid n} 1, quindi d(12) = 6. Per n = p_1^{a_1}\\cdots p_k^{a_k}, la formula d(n) = (a_1+1)\\cdots(a_k+1) mostra che è moltiplicativa. Altri nomi comuni sono \\tau(n) e \\sigma_0(n), quindi verificate quale usa il vostro riferimento. Il problema dei divisori di Dirichlet studia l'ordine medio, \\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x}). Attenzione: la lettera d è anche la consueta variabile per i divisori all'interno di tali somme, quindi preferite \\tau(n) quando entrambe comparirebbero nella stessa formula.",
  },
};

export default text;
