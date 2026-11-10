import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "Unità immaginaria",
    meaning: "L'unità immaginaria, un numero il cui quadrato è −1; la base dell'aritmetica complessa.",
    usage: "Matematici e fisici scrivono i per la radice quadrata di -1, ottenendo z = a + bi e lo i\\hbar dell'equazione di Schrödinger. In modalità matematica la i semplice è in corsivo, come una variabile indice, quindi negli articoli che sommano anche su i è più sicuro usare la i in tondo \\mathrm{i}, come raccomanda la norma tipografica ISO; una macro come \\newcommand{\\iu}{\\mathrm{i}} mantiene la coerenza. Non usate \\imath per l'unità immaginaria: è una i senza puntino pensata per ricevere accenti, come \\hat{\\imath} per i versori. Anche i teorici dei giochi usano i come indice di un giocatore.",
  },
  "imaginary-unit-engineering": {
    name: "Unità immaginaria (ingegneria)",
    meaning: "Simbolo ingegneristico per l'unità immaginaria, scelto perché i è riservata alla corrente elettrica.",
    usage: "Gli ingegneri elettrici scrivono le impedenze come Z = R + jX e i fasori come V e^{j\\omega t}, e Python usa j per i letterali complessi per la stessa ragione storica. Anche i testi di elaborazione dei segnali seguono questa convenzione, scrivendo la trasformata di Fourier con e^{-j\\omega t}. Come per i, una j in tondo \\mathrm{j} distingue la costante da una variabile indice j. \\jmath, la j senza puntino, serve per gli accenti come \\hat{\\jmath}, non per l'unità immaginaria. Notate che molti manuali mettono j prima del numero, scrivendo j5 anziché 5j.",
  },
  "complex-number": {
    name: "Numero complesso",
    meaning: "Forma algebrica (cartesiana) di un numero complesso, con parte reale a e parte immaginaria b.",
    usage: "Ogni numero complesso si può scrivere come a + bi con a e b reali; questa forma è la più adatta per l'addizione e per leggere \\Re z = a e \\Im z = b. Moltiplicazioni e potenze sono di solito più semplici in forma polare r e^{i\\theta}. Scrivere bi, con l'unità per ultima, è la convenzione comune, anche se gli ingegneri scrivono spesso a + jb. Se il vostro documento compone la i in tondo, mantenetela in tondo anche qui: a + b\\mathrm{i}. Quando b è negativo, scrivete a - bi anziché a + (-b)i, e per numeri specifici mettete la i dopo le cifre, come in 3 + 4i.",
  },
  "real-part": {
    name: "Parte reale",
    meaning: "Parte reale del numero complesso z: per z = a + bi restituisce il numero reale a.",
    usage: "Il comando predefinito \\Re stampa una R maiuscola in Fraktur, il simbolo tradizionale della parte reale, ma molti autori moderni la trovano poco leggibile e scrivono invece \\operatorname{Re}(z), che rende 'Re' in tondo con la spaziatura da operatore. In ogni caso \\Re è solo un simbolo, non un operatore, quindi TeX non aggiunge spazio prima dell'argomento; usate parentesi o uno spazio sottile. Un'identità utile è \\Re z = (z + \\bar{z})/2. Nell'elaborazione dei segnali è comune \\Re\\{\\cdot\\} con le graffe per estrarre il segnale fisico da un fasore.",
  },
  "imaginary-part": {
    name: "Parte immaginaria",
    meaning: "Parte immaginaria di z, il coefficiente reale b in z = a + bi (non il termine bi stesso).",
    usage: "Un errore frequente degli studenti è pensare che \\Im(3 + 4i) = 4i; vale 4, un numero reale. Il simbolo è una I in Fraktur e, come \\Re, può sembrare oscuro, quindi \\operatorname{Im}(z) è un'alternativa diffusa e più leggibile. Attenzione: Im abbrevia anche l'immagine di un'applicazione in algebra; se compaiono entrambi i significati, scrivete \\operatorname{im} f per l'immagine per evitare conflitti. Tra i fatti utili ci sono \\Im z = (z - \\bar{z})/(2i) e il fatto che il semipiano superiore è l'insieme in cui \\Im z > 0.",
  },
  "complex-conjugate": {
    name: "Complesso coniugato",
    meaning: "Complesso coniugato di z, il suo simmetrico rispetto all'asse reale: il coniugato di a + bi è a − bi.",
    usage: "I matematici scrivono \\bar{z}, e identità come z\\bar{z} = |z|^2 lo rendono centrale nella divisione tra numeri complessi. \\bar è un accento di larghezza fissa pensato per un solo carattere; per un'espressione coniugata usate \\overline{z + w}, che si estende su tutto l'argomento e rende leggibile \\overline{z + w} = \\bar{z} + \\bar{w}. I fisici scrivono più spesso z^* e riservano la barra ad altri scopi, come gli aggiunti di Dirac \\bar{\\psi}. Nel calcolo di Wirtinger \\partial / \\partial \\bar{z} tratta \\bar{z} come una variabile indipendente.",
  },
  "complex-conjugate-star": {
    name: "Complesso coniugato (asterisco)",
    meaning: "Notazione con asterisco per il complesso coniugato, standard in fisica e in ingegneria elettrica.",
    usage: "La meccanica quantistica scrive le probabilità come \\psi^* \\psi e i prodotti scalari con componenti coniugate, quindi lì z^* è la norma. In apice l'asterisco va bene così come lo si digita; z^{\\ast} dà lo stesso glifo. Per le matrici, in matematica A^* indica spesso la trasposta coniugata, mentre i fisici scrivono A^\\dagger per questa e riservano A^* alla semplice coniugazione elemento per elemento, quindi dichiarate la vostra convenzione. Un asterisco può anche indicare un ottimo (x^*) o uno spazio duale (V^*), quindi evitate questa notazione se quei significati compaiono nelle vicinanze.",
  },
  "modulus": {
    name: "Modulo",
    meaning: "Modulo (valore assoluto) di z, la sua distanza dall'origine: √(a² + b²) per z = a + bi.",
    usage: "Le semplici barre verticali funzionano nei casi semplici, ma sono ambigue per TeX, che non distingue quella di apertura da quella di chiusura; questo causa una spaziatura errata in espressioni come |-z|. Usate \\lvert z \\rvert, o definite una macro, per ottenere la spaziatura corretta, e \\left| \\frac{z}{w} \\right| quando il contenuto è alto. Non usate mai \\mid in questo caso: è una relazione con una spaziatura ampia. Le proprietà fondamentali sono |zw| = |z||w| e la disuguaglianza triangolare |z + w| \\leq |z| + |w|. In contesti vettoriali le doppie barre \\| \\| indicano invece una norma.",
  },
  "argument": {
    name: "Argomento",
    meaning: "Argomento di z: l'angolo tra il semiasse reale positivo e z, definito a meno di multipli di 2π.",
    usage: "\\arg è un nome di operatore predefinito, quindi viene stampato in tondo con la spaziatura corretta; scrivere arg senza barra rovesciata dà lettere in corsivo. Poiché l'angolo è a più valori, \\arg z viene spesso trattato come un insieme \\{\\theta + 2\\pi k\\}, e \\arg(zw) = \\arg z + \\arg w vale solo modulo 2\\pi. Per il valore principale, a un solo valore, si scrive \\operatorname{Arg} z con l'iniziale maiuscola. Non confondete \\arg con gli operatori del tipo argmax, che restituiscono un input che ottimizza e richiedono una propria dichiarazione.",
  },
  "principal-argument": {
    name: "Argomento principale",
    meaning: "Valore principale dell'argomento, l'unico angolo in (−π, π] che z forma con il semiasse reale positivo.",
    usage: "L'iniziale maiuscola distingue questo Arg a un solo valore dal \\arg a più valori. Il taglio di diramazione giace lungo il semiasse reale negativo, ed è per questo che \\text{Arg}(-1) = \\pi ma i valori appena sotto il taglio tendono a -\\pi. Alcuni libri usano invece [0, 2\\pi), quindi dite quale intervallo intendete. LaTeX non ha un comando \\Arg; \\text{Arg} funziona ma diventa corsivo all'interno degli ambienti teorema. \\operatorname{Arg} o \\DeclareMathOperator{\\Arg}{Arg} è più robusto e dà la spaziatura corretta prima dell'argomento. Per esempio, \\text{Arg}(i) = \\pi/2 mentre \\arg i è l'intero insieme \\pi/2 + 2\\pi k.",
  },
  "polar-form": {
    name: "Forma polare",
    meaning: "Forma polare (esponenziale) di un numero complesso: il modulo r per un numero complesso unitario di angolo θ.",
    usage: "In forma polare la moltiplicazione si riduce a moltiplicare i moduli e sommare gli angoli, quindi (r e^{i\\theta})^n = r^n e^{in\\theta}, che è la formula di De Moivre in forma compatta. Le radici dell'unità e^{2\\pi i k/n} e i fasori A e^{i\\omega t} derivano direttamente da questa notazione. Mettete l'intero esponente tra graffe; e^i\\theta eleverebbe e soltanto a i. Quando gli esponenti diventano affollati, \\exp(i\\theta) è più leggibile di un minuscolo apice. Alcune norme redazionali compongono la costante in tondo, \\mathrm{e}, per distinguerla da una variabile.",
  },
  "euler-s-formula": {
    name: "Formula di Eulero",
    meaning: "Formula di Eulero, che lega l'esponenziale complesso a coseno e seno; colloca e^{iθ} sulla circonferenza unitaria.",
    usage: "Ponendo \\theta = \\pi si ottiene l'identità di Eulero e^{i\\pi} + 1 = 0, e risolvendo la formula rispetto al coseno si ricava \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2. Notate che \\cos e \\sin sono comandi di operatore: vengono stampati in tondo e aggiungono uno spazio sottile prima di \\theta, mentre scrivere cos darebbe tre lettere in corsivo. Non servono parentesi per un argomento costituito da un solo simbolo come \\theta, ma usatele per argomenti composti, \\sin(2\\theta). In contesti ingegneristici la stessa identità si scrive con j al posto di i.",
  },
  "complex-exponential": {
    name: "Esponenziale complesso",
    meaning: "Funzione esponenziale valutata in un numero complesso z = x + iy, uguale a eˣ(cos y + i sin y).",
    usage: "L'esponenziale complesso è una funzione intera, mai nulla e periodica di periodo 2\\pi i, ed è per questo che la sua inversa, il logaritmo, è a più valori. Con esponenti brevi e^{z} va bene; per qualcosa come e^{-(x - \\mu)^2/2\\sigma^2} l'apice diventa minuscolo, e \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) si legge meglio. \\exp è un operatore predefinito. Mettete sempre tra graffe gli esponenti composti da più elementi. Alcuni editori chiedono la costante in tondo \\mathrm{e}, che la distingue da una variabile e. La sua derivata è la funzione stessa, il che la rende il mattone di base delle soluzioni delle equazioni differenziali ordinarie lineari.",
  },
  "complex-logarithm": {
    name: "Logaritmo complesso",
    meaning: "Logaritmo complesso di z, un'inversa a più valori dell'esponenziale: ln|z| + i arg z.",
    usage: "Poiché l'esponenziale si ripete ogni 2\\pi i, \\log z ha infiniti valori che differiscono per 2\\pi i k. Il ramo principale si scrive spesso con l'iniziale maiuscola, \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z, ed è analitico fuori dal taglio di diramazione sul semiasse reale negativo. \\log e \\ln sono entrambi operatori predefiniti; in analisi si scrive comunemente \\log per il logaritmo naturale, mentre \\ln rende esplicita la base. Dopo \\log compare automaticamente uno spazio sottile, quindi \\log z non richiede parentesi per una singola variabile.",
  },
  "complex-power": {
    name: "Potenza complessa",
    meaning: "Potenza complessa z elevato a w, definita come exp(w log z) e in generale a più valori.",
    usage: "Il fatto sorprendente i^i = e^{-\\pi/2} (sul ramo principale) deriva da questa definizione. Poiché \\log z è a più valori, z^w ha molti valori a meno che w sia intero, e regole come (z^a)^b = z^{ab} possono non valere. Mettete tra graffe gli esponenti con più di un elemento: z^{w+1}, non z^w+1. Per torri come z^{w^v}, TeX rimpicciolisce ogni livello, quindi valutate la notazione \\exp per la leggibilità. Dichiarate esplicitamente il ramo quando vi basate su un valore particolare, per esempio scrivendo \\exp(w \\operatorname{Log} z).",
  },
  "unit-circle": {
    name: "Circonferenza unitaria",
    meaning: "Equazione della circonferenza unitaria nel piano complesso: tutti i numeri complessi a distanza 1 dall'origine.",
    usage: "I punti della circonferenza unitaria sono esattamente gli e^{i\\theta}, e le radici n-esime dell'unità giacciono su di essa. Viene spesso indicata con \\mathbb{T} o S^1 e, come gruppo rispetto alla moltiplicazione, è il gruppo del cerchio usato nell'analisi di Fourier. Gli integrali di contorno su di essa si scrivono \\oint_{|z|=1} con la condizione come pedice. Per la coniugazione sulla circonferenza vale \\bar{z} = 1/z, una semplificazione comoda. Se la spaziatura attorno alle barre sembra errata nel contesto, usate \\lvert z \\rvert; il disco aperto |z| < 1 e il disco chiuso |z| \\le 1 seguono lo stesso schema.",
  },
  "upper-half-plane": {
    name: "Semipiano superiore",
    meaning: "H in grassetto da lavagna, il più delle volte il semipiano superiore {z : Im z > 0}; indica anche i quaternioni.",
    usage: "In analisi complessa e in teoria dei numeri \\mathbb{H} è il dominio delle forme modulari, su cui agisce SL_2(\\mathbb{Z}) tramite trasformazioni di Möbius, ed è dotato della metrica iperbolica. In algebra la stessa lettera indica i quaternioni di Hamilton, che da lui prendono il nome, quindi se compaiono entrambi scrivete \\mathcal{H} o specificate quale intendete. Con i font standard \\mathbb fornisce solo lettere maiuscole; argomenti minuscoli producono simboli senza senso o errori. Gli insiemi correlati si compongono allo stesso modo: \\mathbb{C}, \\mathbb{R}, \\mathbb{Z}. Il suo bordo è la retta reale insieme a un punto all'infinito.",
  },
};

export default text;
