import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "Quantificatore esistenziale negato",
    meaning: "Quantificatore esistenziale negato: non esiste alcun oggetto con la proprietà indicata.",
    usage: "\\nexists x \\in \\mathbb{Q} : x^2 = 2 afferma che 2 non ha radice quadrata razionale. Il simbolo è un \\exists barrato disegnato come glifo unico; anche \\not\\exists funziona, ma la barra può risultare mal posizionata. Dal punto di vista logico equivale a \\forall x\\, \\neg P(x), e molti logici preferiscono scrivere \\neg \\exists x per chiarezza. Aggiungete un piccolo spazio o i due punti dopo la variabile vincolata, come in \\nexists x \\, P(x). Per l'esistenza e unicità il simbolo è \\exists!.",
  },
  "negation": {
    name: "Negazione",
    meaning: "Segno di negazione logica, un uncino a forma di L posto davanti a una formula per indicare «non».",
    usage: "In logica si scrive \\neg p per «non p» e, nella logica classica, \\neg\\neg p \\equiv p; \\lnot è un alias esatto. Alcuni testi usano invece \\sim p, una sopralineatura \\bar{p} oppure p', specie in algebra di Boole e nei circuiti digitali. \\neg è un simbolo ordinario, quindi tra esso e il suo operando non compare spazio, che è proprio l'effetto voluto. Le leggi di De Morgan, \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, ne sono un tipico esempio in display. In contesti di programmazione si vedono sia ! sia \\lnot.",
  },
  "logical-and": {
    name: "Congiunzione logica",
    meaning: "AND logico (congiunzione), vero esattamente quando entrambi gli operandi sono veri.",
    usage: "\\land è un alias di \\wedge, scelto per leggibilità in logica, come in p \\land q o \\forall x\\, (P(x) \\land Q(x)). Poiché LaTeX lo classifica come operatore binario, lo spazio attorno a p \\land q viene inserito automaticamente: non aggiungete \\, a mano. Per la congiunzione di molte formule usate l'operatore grande \\bigwedge_{i=1}^{n} p_i. In algebra di Boole l'AND si scrive spesso come prodotto, pq o p \\cdot q. Usate \\land in logica e \\wedge in algebra esterna, così che il sorgente sia chiaro, anche se stampano lo stesso simbolo.",
  },
  "logical-or": {
    name: "Disgiunzione logica",
    meaning: "OR logico (disgiunzione), vero quando almeno uno degli operandi è vero.",
    usage: "\\lor è un alias di \\vee, usato nella logica proposizionale e dei predicati: p \\lor \\neg p è il principio del terzo escluso. LaTeX lo spazia come operatore binario, quindi p \\lor q non richiede comandi di spaziatura manuali. Per molti disgiunti, l'operatore grande è \\bigvee_{i} p_i. L'OR esclusivo è un simbolo diverso: \\oplus o \\veebar. L'algebra di Boole e la progettazione di circuiti scrivono spesso l'OR come +. Preferite \\lor nelle formule logiche e \\vee nella teoria dei reticoli per un sorgente leggibile, anche se il risultato stampato è identico.",
  },
  "proves": {
    name: "Simbolo di deduzione (tornello)",
    meaning: "Tornello: la formula a destra è derivabile (dimostrabile) dalle ipotesi a sinistra.",
    usage: "La teoria della dimostrazione scrive \\Gamma \\vdash \\varphi per la conseguenza sintattica, e la teoria dei tipi lo usa nei giudizi di tipo \\Gamma \\vdash e : \\tau. Si distingue da \\models, che esprime la conseguenza semantica (verità in tutti i modelli); correttezza e completezza affermano che le due coincidono nella logica del primo ordine. Si nega con \\nvdash. \\vdash è una relazione, quindi la spaziatura è automatica. Per le regole di inferenza, \\frac o un pacchetto dedicato agli alberi di dimostrazione produce la linea orizzontale, con giudizi contenenti \\vdash sopra e sotto. Il simbolo speculare è \\dashv.",
  },
  "models": {
    name: "Conseguenza semantica (doppio tornello)",
    meaning: "Doppio tornello: conseguenza semantica o soddisfacibilità, cioè verità in ogni modello.",
    usage: "\\mathcal{M} \\models \\varphi dice che la struttura M soddisfa la formula \\varphi, e \\Gamma \\models \\varphi dice che ogni modello di \\Gamma soddisfa \\varphi. Si contrappone a \\vdash, che è la derivabilità sintattica. La sua negazione è \\not\\models oppure il glifo dedicato \\nvDash. Il simile \\vDash ha proporzioni leggermente diverse ed è usato in alcune logiche insieme a \\Vdash per il forcing in teoria degli insiemi. In quanto relazione, riceve spazio su entrambi i lati. Nel model checking si scrive s \\models \\phi per uno stato che soddisfa una formula temporale.",
  },
  "therefore": {
    name: "Simbolo “quindi”",
    meaning: "Tre punti disposti a triangolo, letti «quindi», che introducono una conclusione.",
    usage: "\\therefore è comune nella matematica scolastica e nelle derivazioni informali: x + 2 = 5, \\therefore x = 3. Gli articoli formali preferiscono di solito parole come «dunque» o la freccia di implicazione \\implies. È composto come relazione, quindi la spaziatura tra le espressioni è automatica. La versione capovolta, \\because, significa «poiché». Nel testo va comunque scritto in modalità matematica, per esempio $\\therefore$, a meno di caricare un simbolo testuale alternativo. Dato che il suo significato è chiaro alla maggior parte dei lettori, funziona bene nelle slide e nelle soluzioni svolte, dove lo spazio è poco.",
  },
  "because": {
    name: "Simbolo “poiché”",
    meaning: "Tre punti disposti a triangolo rovesciato, letti «poiché» o «dato che», che introducono una motivazione.",
    usage: "\\because introduce una giustificazione, tipicamente nelle soluzioni scolastiche passo per passo: \\angle A = \\angle B \\quad \\because AB = AC. È lo speculare di \\therefore, con il punto singolo in basso. La scrittura formale di solito scrive per esteso «poiché» o usa un'annotazione testuale come \\text{(per il Lemma 2)}. Come simbolo di relazione ha spazio su entrambi i lati, e un \\quad o \\qquad prima di esso separa la motivazione dall'equazione. Negli articoli usatelo con parsimonia. Nelle dimostrazioni, scrivere la motivazione a parole è di solito più gentile verso il lettore.",
  },
  "contradiction-falsum-bottom": {
    name: "Contraddizione (falsum, bottom)",
    meaning: "Simbolo di T rovesciata (bottom): il falsum o contraddizione in logica, e l'elemento minimo di un reticolo.",
    usage: "In logica si usa \\bot per una proposizione sempre falsa, quindi derivare \\bot dimostra la negazione, e \\neg p si può definire come p \\to \\bot. La teoria dei domini e i reticoli usano \\bot per l'elemento minimo, la teoria dei tipi per il tipo vuoto. \\bot è un simbolo ordinario; lo stesso glifo con spaziatura di relazione è \\perp, quello giusto per l'ortogonalità tra due oggetti. Il suo duale è \\top. Nelle dimostrazioni per assurdo alcuni autori scrivono \\bot o \\Rightarrow\\Leftarrow alla fine del passaggio contraddittorio.",
  },
  "tautology-verum-top": {
    name: "Tautologia (verum, top)",
    meaning: "Simbolo di T (top): il verum, la proposizione sempre vera, e l'elemento massimo di un reticolo.",
    usage: "In logica \\top è una tautologia, l'elemento neutro della congiunzione (p \\land \\top \\equiv p). Reticoli e teoria dei domini lo usano per l'elemento massimo, la teoria dei tipi per il tipo unità. È molto usato anche come apice per la trasposta di una matrice, A^\\top, in alternativa ad A^T o A^\\intercal. \\top è un simbolo ordinario. Non va confuso con la lettera T, che poggia sulla linea di base e ha proporzioni diverse. Il suo duale è \\bot.",
  },
  "not-equivalent": {
    name: "Simbolo di non equivalenza",
    meaning: "Triplo trattino barrato: non congruo modulo n, oppure non identicamente uguale.",
    usage: "In teoria dei numeri si scrive a \\not\\equiv b \\pmod{n} quando n non divide a - b, per esempio nell'ipotesi del piccolo teorema di Fermat a \\not\\equiv 0 \\pmod{p}. Il prefisso \\not sovrappone una barra alla relazione; mettetelo subito prima di \\equiv. In alcuni font la barra appare leggermente decentrata, ma tra i font di simboli più comuni non esiste un glifo dedicato standard, quindi \\not\\equiv resta la scelta abituale. In logica significa «non logicamente equivalente». Per la semplice disuguaglianza usate invece \\neq.",
  },
};

export default text;
