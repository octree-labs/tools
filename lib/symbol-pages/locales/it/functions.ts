import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  function: {
    name: "Funzione",
    meaning: "Funzione f applicata a un argomento x, la notazione di base per il valore di una funzione.",
    usage: "I nomi di una sola lettera come f, g e h si scrivono in corsivo, che è corretto per simboli che indicano funzioni. Le funzioni con nomi di più lettere sono un caso diverso: scrivete \\sin x o \\log x e, per i vostri nomi, usate \\operatorname{softmax}(z), così risultano in tondo anziché come un prodotto di lettere in corsivo. In ottimizzazione f(x) è spesso la funzione obiettivo, come in \\min_x f(x) soggetto a vincoli. Quando l'argomento è alto, usate \\left( \\right) o \\bigl( \\bigr) per dimensionare le parentesi. Per argomenti vettoriali è comune f(\\mathbf{x}) con la x in grassetto.",
  },
  "function-definition": {
    name: "Definizione di funzione",
    meaning: "Dichiara f come funzione dal dominio A al codominio B.",
    usage: "Questa riga di intestazione apre la maggior parte delle definizioni in analisi e in algebra, spesso seguita dalla regola sugli elementi x \\mapsto x^2. Digitare i due punti semplici produce una spaziatura da relazione su entrambi i lati, che risulta troppo larga; \\colon dà la corretta spaziatura stretta da punteggiatura, f\\colon A \\to B. \\to e \\rightarrow producono la stessa freccia; \\longrightarrow dà più enfasi nelle formule in display. Abbinatela a \\mapsto per la regola sugli elementi: f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2. I diagrammi con più mappe tra più oggetti si disegnano meglio con un ambiente dedicato ai diagrammi commutativi.",
  },
  composition: {
    name: "Composizione",
    meaning: "Composizione di f con g: si applica prima g e poi f al risultato.",
    usage: "La composizione si legge da destra a sinistra: (f \\circ g)(x) = f(g(x)); è associativa ma in generale non commutativa. \\circ è un operatore binario, quindi la spaziatura attorno è automatica. Non usate \\circ sulla linea di base per i gradi, che richiedono ^{\\circ}, e non confondetelo con \\cdot o \\bullet, che suggeriscono una moltiplicazione. La composizione ripetuta si scrive spesso f^{\\circ n} per evitare ambiguità con le potenze f^n. La regola della catena è la formula classica che la coinvolge: (f \\circ g)'(x) = f'(g(x))\\,g'(x), con la derivata interna a destra.",
  },
  "inverse-function": {
    name: "Funzione inversa",
    meaning: "Funzione inversa di f, la mappa che annulla l'effetto di f, per cui f^{-1}(f(x)) = x.",
    usage: "Solo le biiezioni hanno un'inversa su tutto il codominio, ma f^{-1}(B) si usa anche per la controimmagine di un insieme B tramite una funzione qualsiasi, un concetto diverso che non richiede invertibilità. L'apice -1 non indica il reciproco: f^{-1}(x) è diverso da 1/f(x), una confusione frequente tra gli studenti che riguarda anche \\sin^{-1}. Le graffe sono necessarie perché -1 è formato da due token. Il teorema della funzione inversa dà la derivata (f^{-1})'(y) = 1/f'(x) dove y = f(x), purché f'(x) \\neq 0.",
  },
  image: {
    name: "Immagine",
    meaning: "Immagine di f, l'insieme di tutti i valori effettivamente assunti da f, scritta con «Im» in tondo.",
    usage: "In algebra lineare \\text{Im}(T) è lo spazio delle colonne dell'applicazione, e il teorema del rango si scrive \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V. Attenzione: \\Im è un comando diverso, che produce una I in fraktur usata per la parte immaginaria di un numero complesso. Molti autori scrivono \\operatorname{im} in minuscolo o dichiarano \\DeclareMathOperator{\\im}{im}, che spazia correttamente e non eredita il corsivo dei teoremi come fa \\text. La notazione insiemistica f(A) è un'alternativa quando si vuole l'immagine di un particolare sottoinsieme anziché dell'intero dominio.",
  },
  kernel: {
    name: "Nucleo",
    meaning: "Nucleo di f: tutto ciò che f manda in zero, un sottospazio o un sottogruppo normale.",
    usage: "\\ker è un operatore predefinito, quindi viene stampato in tondo con la spaziatura corretta: \\ker T = \\{v \\in V \\mid T(v) = 0\\}. Un omomorfismo è iniettivo esattamente quando il suo nucleo è banale, e il primo teorema di isomorfismo afferma G/\\ker\\varphi \\cong \\operatorname{im}\\varphi. Le parentesi sono facoltative per un singolo simbolo, \\ker A. In algebra lineare il nucleo si chiama anche spazio nullo, talvolta scritto N(A) o \\operatorname{null}(A). Non esiste un operatore predefinito per l'immagine da abbinargli, quindi dichiarate \\im o usate \\operatorname{im}.",
  },
  domain: {
    name: "Dominio",
    meaning: "Dominio di f, l'insieme degli input su cui la funzione è definita.",
    usage: "L'analisi convessa lo usa molto: \\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} è il dominio effettivo di una funzione convessa a valori estesi. \\text{dom} viene stampato in tondo ma può prendere il corsivo in un ambiente teorema e non ha la spaziatura da operatore; \\operatorname{dom} evita entrambi i problemi. In un'intestazione f\\colon A \\to B, A è già il dominio, quindi \\text{dom}(f) è utile soprattutto quando il dominio è implicito o parziale, come per gli operatori non limitati sugli spazi di Hilbert. Alcuni testi usano invece D(f) o D_f, quindi seguite la convenzione del vostro settore.",
  },
  codomain: {
    name: "Codominio",
    meaning: "Codominio di f, l'insieme di arrivo dichiarato per i valori della funzione.",
    usage: "In f\\colon A \\to B il codominio è B, che può essere più grande dell'immagine; f è suriettiva esattamente quando \\text{Im}(f) = \\text{cod}(f). La teoria delle categorie scrive \\operatorname{cod} f accanto a \\operatorname{dom} f per il codominio e il dominio di un morfismo. Come per le altre etichette testuali, \\operatorname{cod} dà una spaziatura migliore ed evita che il corsivo si propaghi negli enunciati dei teoremi. Alcuni autori scrivono per esteso \\operatorname{codom} per chiarezza. Distinguere il codominio dal range è importante, perché alcuni libri usano la parola range per indicare il codominio e altri l'immagine.",
    example: "f \\text{ suriettiva} \\iff \\text{Im}(f) = \\text{cod}(f)",
  },
  range: {
    name: "Range (insieme dei valori)",
    meaning: "Range di f, che di solito indica l'insieme dei valori effettivamente assunti da f.",
    usage: "Il termine è ambiguo: la maggior parte dei testi moderni tratta il range come l'immagine, ma alcuni più vecchi lo usano per il codominio, quindi dichiarate la vostra definizione. In algebra lineare \\text{range}(A) è lo spazio delle colonne, e il teorema fondamentale dell'algebra lineare afferma che è il complemento ortogonale dello spazio nullo di A^{\\top}. Scrivere \\operatorname{range} dà lettere in tondo con spaziatura da operatore; i teorici degli operatori scrivono spesso \\mathcal{R}(A) o \\operatorname{ran} T. \\text{range} funziona, ma segue il font del testo circostante, corsivo compreso.",
  },
  surjective: {
    name: "Freccia di suriezione",
    meaning: "Freccia con doppia punta, che indica una mappa o un morfismo suriettivo.",
    usage: "Gli algebristi scrivono f\\colon A \\twoheadrightarrow B per dire che f è suriettiva, per esempio la proiezione sul quoziente G \\twoheadrightarrow G/N. Si abbina a \\hookrightarrow per le iniezioni, così una successione esatta corta 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 le mostra entrambe a colpo d'occhio. Esiste una versione verso sinistra, \\twoheadleftarrow, per le mappe disegnate nell'altra direzione. La freccia è una relazione, quindi la spaziatura attorno è automatica. Evitate di usarla per indicare convergenza o implicazione; lì sono standard \\to e \\implies.",
  },
  restriction: {
    name: "Restrizione",
    meaning: "Restrizione di f a un sottoinsieme A, che mantiene la regola ma riduce il dominio.",
    usage: "La restrizione f|_A mantiene la regola ma riduce il dominio, per cui f|_A\\colon A \\to B. Una barra semplice è corta e il pedice può sembrarne staccato; molti autori scrivono f\\big|_A per una barra più alta, oppure usano la freccia \\restriction, che somiglia a mezzo arpione. Non confondetela con la barra di valutazione, F(x)\\big|_a^b, che usa la stessa forma per uno scopo diverso. Le restrizioni sono comuni in topologia, dove si verifica la continuità di f|_U sugli aperti, e nella teoria dei fasci, dove s|_U restringe una sezione a un aperto più piccolo.",
  },
  "function-evaluation": {
    name: "Valutazione di una funzione",
    meaning: "Afferma che la funzione f manda l'input x nel valore di output y.",
    usage: "L'equazione è la lettura di una funzione a livello degli elementi: y è l'immagine di x, scritto anche x \\mapsto y. Nei corsi di algebra, risolvere f(x) = y rispetto a x è il modo in cui si trovano le funzioni inverse, ottenendo x = f^{-1}(y). La spaziatura attorno a = è automatica, quindi evitate di aggiungere spazi manuali. Per un elenco di valori, allineate più equazioni con l'ambiente align, mettendo & prima di ogni segno di uguale. Quando il nome della funzione ha più lettere, usate \\operatorname perché non sia in corsivo: \\operatorname{relu}(x) = y anziché relu(x) = y.",
  },
  "piecewise-function": {
    name: "Funzione definita a tratti",
    meaning: "Definizione a tratti con l'ambiente cases, che assegna regole diverse su intervalli diversi.",
    usage: "Dentro cases, ogni riga contiene un valore, un &, poi la relativa condizione, e le righe terminano con \\; LaTeX aggiunge automaticamente la graffa sinistra e nessun delimitatore destro. Usi tipici sono il valore assoluto, la funzione di attivazione ReLU, la funzione segno e il gradino di Heaviside. Racchiudete le parole in \\text{}, come in \\text{se } x > 0, così vengono stampate in tondo con la spaziatura normale. Le frazioni nelle righe sono composte in stile testo per impostazione predefinita, quindi usate \\dfrac quando sembrano troppo piccole. Assicuratevi che le condizioni coprano il dominio senza sovrapposizioni, spesso chiudendo con una riga \\text{altrimenti}.",
  },
};

export default text;
