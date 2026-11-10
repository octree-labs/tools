import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/geometry/<slug>. */
const text: SymbolPageTranslations = {
  "angle": {
    name: "Angolo",
    meaning: "Simbolo di angolo posto prima delle etichette dei vertici, come nell'angolo ABC con vertice in B.",
    usage: "Nelle dimostrazioni di geometria si scrive \\angle ABC per l'angolo con vertice in B, e \\angle ABC \\cong \\angle DEF per angoli congruenti. Il simbolo è un normale simbolo matematico, quindi dopo di esso non viene aggiunto spazio, il che si adatta a nomi come \\angle A. I libri di testo americani indicano spesso l'ampiezza come m\\angle A = 60^{\\circ}, separando l'angolo dalla sua misura. Tra i simboli correlati ci sono \\measuredangle, che aggiunge un arco per segnalare un angolo misurato o orientato, e \\sphericalangle per gli angoli sulla sfera. Evitate di usarlo nel testo come abbreviazione della parola angolo.",
  },
  "measured-angle": {
    name: "Angolo misurato",
    meaning: "Simbolo di angolo con un arco, usato spesso per un angolo misurato o orientato.",
    usage: "Alcuni testi di geometria riservano \\angle all'angolo come figura e \\measuredangle alla sua misura numerica, scrivendo \\measuredangle ABC = 30^{\\circ}. Nella geometria olimpica \\measuredangle indica spesso gli angoli orientati modulo 180^{\\circ}, il che rende i ragionamenti sui quadrilateri ciclici indipendenti dalla configurazione della figura: A, B, C, D sono conciclici esattamente quando \\measuredangle ABC = \\measuredangle ADC. Poiché le convenzioni variano, chiarite cosa intendete in una nota sulla notazione. Si comporta come un simbolo ordinario, quindi la spaziatura accanto alle lettere è stretta.",
  },
  "spherical-angle": {
    name: "Angolo sferico",
    meaning: "Simbolo di angolo sferico, usato per gli angoli tra archi di cerchio massimo su una sfera.",
    usage: "Geometria sferica, navigazione e astronomia lo usano per gli angoli formati da archi su una sfera, dove gli angoli di un triangolo sommano a più di 180^{\\circ}. Il teorema di Girard dà l'area di un triangolo sferico come R^2(A + B + C - \\pi), l'eccesso sferico. La sua forma è diversa sia da \\measuredangle sia dal semplice \\angle, quindi non scambiateli liberamente. Alcuni autori lo riutilizzano per angoli solidi o orientati, quindi una definizione di una riga aiuta i lettori. È un simbolo ordinario, quindi aggiungete \\, se risulta troppo vicino all'etichetta che segue.",
  },
  "not-congruent": {
    name: "Segno di non congruenza",
    meaning: "Simbolo di congruenza barrato: due figure o oggetti non sono congruenti o non sono isomorfi.",
    usage: "In geometria \\triangle ABC \\ncong \\triangle DEF afferma che i triangoli non sono congruenti; in algebra \\cong significa spesso isomorfo, quindi G \\ncong H afferma che due gruppi non sono isomorfi. È una relazione, quindi la spaziatura è automatica. Preferite questo glifo precomposto a \\not\\cong, che sovrappone una barra generica che può risultare decentrata sul simbolo. Tra le relazioni negate affini ci sono \\neq e \\nsim. Quando usate \\cong per l'isomorfismo, indicate la categoria o la struttura se non è ovvia, perché due spazi possono essere omeomorfi senza essere isomorfi come gruppi.",
  },
  "similar-or-equal": {
    name: "Segno di simile o uguale",
    meaning: "Tilde sopra una sola linea, letta come omotopicamente equivalente, asintoticamente uguale o isomorfo.",
    usage: "Il significato dipende dal settore: i topologi scrivono X \\simeq Y per l'equivalenza omotopica, i teorici delle categorie per l'equivalenza di categorie, i fisici per l'uguaglianza approssimata. Confrontatelo con \\cong (tilde sopra due linee), di solito riservato all'isomorfismo o alla congruenza, \\approx (due tilde) per l'approssimazione numerica e \\sim per l'equivalenza asintotica o le relazioni di equivalenza. Poiché le convenzioni si sovrappongono, dichiarate quale usate. Come simbolo di relazione riceve automaticamente un'ampia spaziatura su entrambi i lati, quindi non servono spazi manuali.",
  },
  "arc": {
    name: "Arco",
    meaning: "Arco a forma di cupola rovesciata, a volte posto sopra le lettere per indicare un arco di circonferenza.",
    usage: "Da solo, \\frown è un arco di classe relazione, e i teorici degli insiemi lo usano per la concatenazione di successioni, s^\\frown t. Per l'arco geometrico tra i punti A e B il simbolo deve stare sopra le lettere; \\overset{\\frown}{AB} lo fa, anche se l'arco non si allunga, e gli accenti ad arco largo dedicati, forniti da font aggiuntivi, rendono meglio su etichette lunghe. La sua immagine speculare è \\smile, e i due si combinano in alcune notazioni per relazioni di compatibilità. Poiché il simbolo semplice ha la spaziatura di una relazione, controllate il risultato quando compare tra lettere.",
  },
  "prime-feet-minutes": {
    name: "Primo (piedi/minuti)",
    meaning: "Un singolo primo, che indica piedi, primi d'arco o minuti di tempo dopo un numero.",
    usage: "In modalità matematica un apostrofo diventa un primo in apice, quindi 5'\\,9'' si legge cinque piedi e nove pollici, e 12^{\\circ}\\,30' dà dodici gradi e trenta primi d'arco. Fuori dalla modalità matematica l'apostrofo è una semplice virgoletta di chiusura e non somiglia a un primo, quindi scrivete le misure in modalità matematica. Lo stesso carattere produce i primi delle derivate, f'(x), e indica punti o variabili trasformati, A' e x'. Per coordinate geografiche come 40^{\\circ}\\,26'\\,46'', inserite spazi sottili tra le componenti perché non si attacchino tra loro.",
  },
  "double-prime-inches-seconds": {
    name: "Doppio primo (pollici/secondi)",
    meaning: "Due primi, che indicano pollici, secondi d'arco o secondi dopo un numero.",
    usage: "In modalità matematica '' diventa un unico apice con due primi, quindi 6'' indica sei pollici o sei secondi d'arco, e 2^{\\circ}\\,15'\\,30'' scrive un angolo in gradi, primi e secondi. Digitare invece il carattere delle virgolette doppie produce un glifo diverso e va evitato. In modalità testo due apostrofi formano una virgoletta di chiusura, non un secondo, quindi le misure vanno in modalità matematica. La stessa costruzione scrive le derivate seconde, f''(x), e i punti trasformati due volte come A''. Gli astronomi la usano per i secondi d'arco, come in una risoluzione di 0.1''.",
  },
  "line-segment": {
    name: "Segmento",
    meaning: "Barra sopra AB, la notazione standard per il segmento tra i punti A e B.",
    usage: "I testi di geometria scrivono \\overline{AB} per il segmento e AB semplice per la sua lunghezza, quindi \\overline{AB} \\cong \\overline{CD} va di pari passo con AB = CD. La barra si estende su tutto l'argomento, a differenza di \\bar{x}, che è un accento a larghezza fissa per una sola lettera. Altri significati di \\overline sono il complesso coniugato \\overline{z}, la chiusura di un insieme \\overline{A} e la negazione nell'algebra di Boole, \\overline{A \\cdot B}. Semirette e rette usano \\overrightarrow{AB} e \\overleftrightarrow{AB}, che indicano la direzione o l'estensione infinita.",
  },
};

export default text;
