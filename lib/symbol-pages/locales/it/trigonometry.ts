import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "Seno",
    meaning: "Funzione seno, stampata in tondo come operatore con nome e con la spaziatura corretta.",
    usage: "Scrivete sempre \\sin e non sin; le lettere nude vengono composte come tre variabili corsive moltiplicate tra loro. L'operatore aggiunge uno spazio sottile prima dell'argomento, quindi \\sin x non richiede parentesi per un singolo simbolo, mentre \\sin(2x) o \\sin\\left(\\frac{\\pi}{2}\\right) raggruppano argomenti più lunghi. Le potenze vanno subito dopo il comando: \\sin^2 x + \\cos^2 x = 1. Notate che \\sin^{-1} x è la funzione inversa, non il reciproco \\csc x. Tra le formule comuni ci sono la formula di duplicazione \\sin 2\\theta = 2\\sin\\theta\\cos\\theta e lo sviluppo di Taylor x - x^3/3! + \\cdots.",
  },
  "cosine": {
    name: "Coseno",
    meaning: "Funzione coseno, composta in tondo come operatore matematico con nome, al pari di \\sin.",
    usage: "\\cos compare nel teorema del coseno (di Carnot) c^2 = a^2 + b^2 - 2ab\\cos C, nella formula di Eulero e^{i\\theta} = \\cos\\theta + i\\sin\\theta e nella forma angolare del prodotto scalare, da cui deriva la similarità del coseno nell'apprendimento automatico. Scrivere cos senza barra rovesciata dà lettere corsive e una spaziatura errata. Scrivete \\cos^2\\theta per il quadrato del coseno; \\cos\\theta^2 indica il coseno di theta al quadrato, che è una quantità diversa. Il comando di per sé non prende argomenti, quindi raggruppate gli argomenti composti tra parentesi, come in \\cos(\\omega t + \\phi).",
  },
  "tangent": {
    name: "Tangente",
    meaning: "Funzione tangente, il rapporto tra seno e coseno, composta in tondo.",
    usage: "Definita come \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, non è definita dove \\cos\\theta = 0, cioè nei multipli dispari di \\pi/2. In geometria le pendenze sono tangenti degli angoli di inclinazione, e l'identità 1 + \\tan^2\\theta = \\sec^2\\theta si ottiene dividendo l'identità pitagorica per \\cos^2\\theta. Alcuni testi europei, compresi molti italiani, scrivono invece tg, che non ha un comando predefinito; se vi serve usate \\operatorname{tg}. La formula di addizione \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} è una comune equazione in display.",
  },
  "cotangent": {
    name: "Cotangente",
    meaning: "Cotangente, il reciproco della tangente, scritta come operatore in tondo.",
    usage: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}, con poli nei multipli interi di \\pi. Compare nell'identità 1 + \\cot^2\\theta = \\csc^2\\theta e nel classico sviluppo in fratti semplici di \\pi\\cot\\pi z usato per calcolare \\sum 1/n^2. I testi russi e alcuni europei scrivono ctg; per questa forma usate \\operatorname{ctg}. La sua inversa si scrive di solito arccot, che non ha un comando predefinito. Ricordate che \\cot x è il reciproco della tangente, non la funzione inversa \\tan^{-1} x. La sua derivata è -\\csc^2 x.",
  },
  "secant": {
    name: "Secante",
    meaning: "Secante, il reciproco del coseno, come operatore con nome in tondo.",
    usage: "\\sec\\theta = 1/\\cos\\theta, e il suo quadrato compare come derivata della tangente, \\frac{d}{dx}\\tan x = \\sec^2 x. L'integrale \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C è un classico dei corsi di analisi e delle formule della proiezione di Mercatore. Scrivere sec senza barra rovesciata lascia lettere corsive e perde lo spazio prima dell'argomento. In geometria, la retta secante è un oggetto diverso, indicato a parole e non con questo comando. Come per gli altri comandi trigonometrici, le potenze si attaccano direttamente, \\sec^2 x, con l'argomento dopo.",
  },
  "cosecant": {
    name: "Cosecante",
    meaning: "Cosecante, il reciproco del seno, composta come operatore in tondo.",
    usage: "\\csc\\theta = 1/\\sin\\theta, non definita nei multipli interi di \\pi. La sua derivata è \\frac{d}{dx}\\csc x = -\\csc x\\cot x, e l'identità 1 + \\cot^2 x = \\csc^2 x completa il terzetto pitagorico. Alcuni libri, soprattutto britannici più vecchi, la abbreviano in cosec; questa forma richiede \\operatorname{cosec}. Un errore comune è scrivere \\sin^{-1} x quando si intende \\csc x: l'esponente -1 indica la funzione inversa arcoseno, non il reciproco. Le potenze si attaccano subito dopo il comando, come in \\csc^2 x, seguite dall'argomento.",
  },
  "arcsine": {
    name: "Arcoseno",
    meaning: "Arcoseno, l'inversa del seno ristretto a [-pi/2, pi/2], come operatore in tondo.",
    usage: "\\arcsin x restituisce l'angolo in [-\\pi/2, \\pi/2] il cui seno è x, per x in [-1, 1]. È l'alternativa non ambigua a \\sin^{-1} x, che alcuni lettori interpretano erroneamente come 1/\\sin x. La sua derivata \\frac{1}{\\sqrt{1-x^2}} dà l'integrale fondamentale \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C, un caposaldo della sostituzione trigonometrica. Le librerie software la chiamano asin, ma i nomi dei linguaggi di programmazione non dovrebbero comparire nella matematica composta; usate sempre il comando con la barra rovesciata, così risulta in tondo e ben spaziato. Raggruppate gli argomenti composti tra parentesi.",
  },
  "arccosine": {
    name: "Arcocoseno",
    meaning: "Arcocoseno, che restituisce l'angolo in [0, pi] il cui coseno è un valore dato.",
    usage: "L'angolo tra due vettori, \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert}, è forse la sua comparsa più frequente. Il suo codominio è [0, \\pi] e la sua derivata è -\\frac{1}{\\sqrt{1-x^2}}, ed è per questo che \\arcsin x + \\arccos x = \\frac{\\pi}{2} per ogni x in [-1, 1]. \\cos^{-1} x indica la stessa cosa, ma \\arccos evita la confusione con il reciproco. Racchiudete gli argomenti lunghi in \\left( \\right) per chiarezza, poiché l'operatore non fornisce parentesi proprie. In geometria computazionale l'argomento viene spesso prima limitato a [-1, 1] per evitare errori di arrotondamento.",
  },
  "arctangent": {
    name: "Arcotangente",
    meaning: "Arcotangente, che dà l'angolo in (-pi/2, pi/2) la cui tangente è x.",
    usage: "\\arctan x compare in \\int \\frac{dx}{1+x^2} = \\arctan x + C e nella formula di Machin \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}. Per l'angolo polare di un punto (x, y) in tutti e quattro i quadranti i programmatori usano atan2; negli articoli scrivete \\operatorname{atan2}(y, x) oppure l'argomento complesso \\arg(x + iy). \\tan^{-1} x è un sinonimo accettato, più comune in ingegneria. La serie \\arctan x = x - x^3/3 + x^5/5 - \\cdots converge per |x| \\le 1 e dà la serie di Leibniz per x = 1.",
  },
  "arccotangent": {
    name: "Arcocotangente",
    meaning: "Inversa della cotangente, scritta tramite \\text perché LaTeX non ha un comando \\arccot predefinito.",
    usage: "Il LaTeX standard definisce \\arcsin, \\arccos e \\arctan ma non \\arccot, quindi questa voce costruisce l'etichetta a partire dal testo. Un approccio più pulito è \\operatorname{arccot} x, che aggiunge la spaziatura da operatore, oppure \\DeclareMathOperator{\\arccot}{arccot} nel preambolo, così \\arccot x funziona come i suoi analoghi predefiniti. Le convenzioni sul codominio differiscono: alcuni testi usano (0, \\pi), altri (-\\pi/2, \\pi/2] senza lo 0, quindi dichiarate quale intendete. La sua derivata è -\\frac{1}{1+x^2} con entrambe le scelte. Alcuni autori scrivono invece \\cot^{-1}. Scegliete una forma e usatela in tutto il testo.",
  },
  "arcsecant": {
    name: "Arcosecante",
    meaning: "Inversa della secante, scritta con \\text perché LaTeX non ha un comando \\arcsec predefinito.",
    usage: "Definita per |x| \\ge 1, \\text{arcsec}\\, x = \\arccos(1/x). La sua derivata è \\frac{1}{|x|\\sqrt{x^2-1}} con il consueto codominio [0, \\pi] privato di \\pi/2, e il valore assoluto è un'omissione frequente negli elaborati degli studenti. Poiché \\text non aggiunge la spaziatura da operatore, inserite \\, prima dell'argomento oppure passate a \\operatorname{arcsec}. Dichiarando una volta \\DeclareMathOperator{\\arcsec}{arcsec} potete scrivere \\arcsec x proprio come \\arccos x. Le tavole di integrali esprimono \\int \\frac{dx}{x\\sqrt{x^2-1}} in funzione di essa. È usata di rado negli articoli moderni, che tendono a riscriverla come arcocoseno del reciproco.",
  },
  "arccosecant": {
    name: "Arcocosecante",
    meaning: "Inversa della cosecante, costruita con \\text perché non esiste un comando \\arccsc predefinito.",
    usage: "Per |x| \\ge 1, \\text{arccsc}\\, x = \\arcsin(1/x), con valori in [-\\pi/2, \\pi/2] escluso lo 0. La sua derivata è -\\frac{1}{|x|\\sqrt{x^2-1}}. È la meno usata delle sei funzioni trigonometriche inverse, quindi la maggior parte degli autori la converte in forma di arcoseno nelle risposte finali. Per una spaziatura corretta usate \\operatorname{arccsc} o dichiaratela come operatore matematico nel preambolo, invece di affidarvi a \\text, che oltretutto diventa corsivo negli ambienti di teorema. Alcuni libri scrivono \\csc^{-1} x, con il solito rischio che venga letta come un reciproco.",
  },
  "inverse-sine": {
    name: "Seno inverso",
    meaning: "Seno inverso scritto con l'esponente -1, equivalente all'arcoseno.",
    usage: "Le calcolatrici e molti testi di ingegneria indicano l'arcoseno con \\sin^{-1}, quindi \\sin^{-1}(0.5) = \\frac{\\pi}{6}. La notazione è in conflitto con \\sin^2 x = (\\sin x)^2: per analogia, \\sin^{-1} x potrebbe essere letto come 1/\\sin x, che in realtà è \\csc x. Per questo i testi di matematica pura tendono a preferire \\arcsin. Le graffe attorno a -1 sono obbligatorie, e LaTeX colloca l'esponente subito dopo il nome dell'operatore, quindi \\sin^{-1} x appare con l'esponente prima dell'argomento. Qualunque notazione scegliate, usatela in modo coerente in tutto il documento.",
  },
  "inverse-cosine": {
    name: "Coseno inverso",
    meaning: "Coseno inverso in notazione con esponente, la stessa funzione dell'arcocoseno.",
    usage: "Fisica e ingegneria scrivono spesso \\cos^{-1} per gli angoli, per esempio l'angolo tra due vettori calcolato dal loro prodotto scalare normalizzato. Non è il reciproco 1/\\cos x, che è \\sec x; qui l'esponente -1 indica la funzione inversa. L'insieme dei valori è [0, \\pi], quindi \\cos^{-1}(-1) = \\pi. Gli articoli di matematica pura scelgono di solito \\arccos per evitare l'ambiguità. Se il vostro testo mescola \\cos^2 x per i quadrati e \\cos^{-1} x per le inverse, indicate la convenzione una volta, così i lettori non devono indovinare.",
  },
  "inverse-tangent": {
    name: "Tangente inversa",
    meaning: "Tangente inversa scritta come tan elevato a -1, equivalente all'arcotangente.",
    usage: "Ingegneria e fisica usano \\tan^{-1} per gli angoli di fase, come in \\phi = \\tan^{-1}(\\omega L / R) per un circuito RL, e per convertire pendenze in angoli. Come per le altre forme inverse, non è \\cot x, il reciproco. L'insieme dei valori è (-\\pi/2, \\pi/2), quindi non distingue quadranti opposti; gli articoli che hanno bisogno dell'angolo completo dovrebbero dichiarare di usare la versione a due argomenti. Molte guide di stile preferiscono \\arctan in matematica ma accettano \\tan^{-1} nei lavori applicati, purché il significato sia coerente.",
  },
  "hyperbolic-sine": {
    name: "Seno iperbolico",
    meaning: "Seno iperbolico, (e^x - e^{-x})/2, composto come operatore in tondo.",
    usage: "\\sinh x = \\frac{e^x - e^{-x}}{2} parametrizza l'iperbole unitaria insieme a \\cosh, ed è per questo che \\cosh^2 x - \\sinh^2 x = 1. Compare nella relatività ristretta attraverso la rapidità, nei problemi sulla catenaria e nelle soluzioni di y'' = y. La sua derivata è \\cosh x senza cambio di segno, a differenza del seno circolare. L'inversa si scrive spesso \\operatorname{arsinh} o \\sinh^{-1}; LaTeX non fornisce un comando predefinito per essa. Scrivere sinh senza la barra rovesciata dà quattro lettere corsive e una spaziatura scadente.",
  },
  "hyperbolic-cosine": {
    name: "Coseno iperbolico",
    meaning: "Coseno iperbolico, (e^x + e^{-x})/2, come operatore con nome in tondo.",
    usage: "Una catena sospesa assume la forma di una catenaria, y = a\\cosh(x/a), l'applicazione da manuale. La funzione è pari, sempre almeno pari a 1, e soddisfa \\cosh^2 x - \\sinh^2 x = 1 e \\cosh(ix) = \\cos x. In relatività ristretta il fattore di Lorentz è uguale al coseno iperbolico della rapidità. Come gli altri operatori, \\cosh aggiunge uno spazio sottile prima di un argomento formato da un solo simbolo, quindi \\cosh x va bene senza parentesi. La sua inversa non ha un comando predefinito; usate \\operatorname{arcosh} o \\cosh^{-1}.",
  },
  "hyperbolic-tangent": {
    name: "Tangente iperbolica",
    meaning: "Tangente iperbolica, rapporto tra sinh e cosh, con valori compresi tra -1 e 1.",
    usage: "Le reti neurali usano \\tanh come funzione di attivazione, spesso confrontata con la sigmoide logistica tramite \\tanh x = 2\\sigma(2x) - 1. La sua derivata è 1 - \\tanh^2 x, il che mantiene compatte le formule della retropropagazione. In fisica compare nella magnetizzazione di campo medio, m = \\tanh(\\beta J z m), e nella composizione relativistica delle velocità. L'insieme dei valori (-1, 1) la rende comoda per comprimere quantità illimitate. La sua inversa \\operatorname{artanh} va scritta a mano o dichiarata, perché LaTeX non ha un comando predefinito per essa.",
  },
  "inverse-hyperbolic-sine": {
    name: "Seno iperbolico inverso",
    meaning: "Inversa del seno iperbolico, etichettata con \\text perché LaTeX non ha un comando predefinito per essa.",
    usage: "È uguale a \\ln\\left(x + \\sqrt{x^2 + 1}\\right) e dà la primitiva di \\frac{1}{\\sqrt{x^2+1}}. La notazione ISO la chiama arsinh, da settore seno iperbolico, perché il suo argomento è un'area e non un arco; molti autori scrivono ancora arcsinh o \\sinh^{-1}. Qualunque nome scegliate, \\operatorname{arsinh} o un \\DeclareMathOperator nel preambolo danno una spaziatura migliore di \\text, che oltretutto eredita il corsivo dei teoremi. Chi lavora con i dati la usa come trasformazione stabilizzatrice della varianza perché, a differenza del logaritmo, gestisce lo zero e i valori negativi.",
  },
  "degree-symbol": {
    name: "Simbolo di grado",
    meaning: "Cerchietto in apice che indica i gradi, per gli angoli e per le temperature.",
    usage: "Il consueto simbolo di grado in modalità matematica è ^{\\circ}, come in 90^{\\circ} o \\angle ABC = 45^{\\circ}; porta in apice \\circ, il cerchietto della composizione. Per le temperature scrivete 25^{\\circ}\\mathrm{C} con una C in tondo. Non usate una lettera o o una cifra 0 in apice, che hanno la forma sbagliata, né \\circ sulla linea di base, che indica la composizione di funzioni. In modalità testo, \\textdegree dà un simbolo corrispondente senza entrare in modalità matematica. I documenti con molte misure traggono vantaggio da una macro dedicata alle unità, che gestisca spaziatura e caratteri in modo coerente.",
  },
  "radians": {
    name: "Radiante",
    meaning: "Etichetta di unità «rad» in tondo, che indica un angolo misurato in radianti.",
    usage: "I radianti sono adimensionali, quindi la maggior parte dei testi matematici omette l'unità e scrive \\theta = \\pi/2; fisica e ingegneria la aggiungono spesso in modo esplicito, come in \\omega = 2\\pi\\,\\text{rad/s}. Mettete uno spazio sottile \\, tra il numero e l'unità e tenete l'unità in tondo; \\text lo fa, anche se \\mathrm{rad} è più sicuro, perché \\text copia il tipo di carattere circostante nei contesti in corsivo. La conversione è \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180. Notate che rad abbrevia anche il radicale di un ideale in algebra, di solito scritto \\operatorname{rad}(I).",
  },
};

export default text;
