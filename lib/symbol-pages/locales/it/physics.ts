import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "Costante di Planck ridotta (h tagliato)",
    meaning: "Costante di Planck ridotta ħ = h/2π, il quanto di momento angolare che compare ovunque nella meccanica quantistica.",
    usage: "Compare nel commutatore canonico [x, p] = i\\hbar, nell'energia del fotone E = \\hbar\\omega e nella relazione di indeterminazione \\Delta x\\, \\Delta p \\geq \\hbar/2. Il suo valore è circa 1.055 \\times 10^{-34} J s. \\hslash è una variante con un tratto obliquo al posto della barra orizzontale: sceglietene una e mantenetela. La h semplice, senza barra, è la costante non ridotta di E = h\\nu. Nei lavori teorici si usano di norma unità con \\hbar = 1, quindi dichiarate questa scelta quando la eliminate dalle equazioni.",
  },
  "bra-vector": {
    name: "Vettore bra",
    meaning: "Un bra nella notazione di Dirac: il vettore duale (vettore riga), un funzionale lineare che agisce sui ket.",
    usage: "Il bra \\langle \\psi | è il trasposto coniugato del ket |\\psi\\rangle, quindi è ciò che si scrive a sinistra di un prodotto scalare o di un valore di aspettazione. Usate \\langle, mai il segno di minore <, che è una relazione con spaziatura ampia e forma sbagliata. Qui una barra | semplice è accettabile, ma \\rvert dà la spaziatura corretta di un delimitatore di chiusura. Per un uso ripetuto, definite \\newcommand{\\bra}[1]{\\langle #1 \\rvert}. Quando l'etichetta dello stato è alta, \\left\\langle \\frac{\\psi}{2} \\right| ridimensiona insieme entrambi i delimitatori.",
  },
  "ket-vector": {
    name: "Vettore ket",
    meaning: "Un ket nella notazione di Dirac, che rappresenta uno stato quantistico come vettore colonna nello spazio di Hilbert.",
    usage: "Gli stati sono ket: |0\\rangle e |1\\rangle per un qubit, |n\\rangle per i livelli dell'oscillatore armonico e sovrapposizioni come \\alpha|0\\rangle + \\beta|1\\rangle. La parentesi angolare è \\rangle, non >. Scrivere \\lvert \\psi \\rangle fornisce a TeX un delimitatore di apertura esplicito, così la spaziatura resta corretta anche dopo un segno meno. Una macro come \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} mantiene coerenti centinaia di ket. I prodotti tensoriali si scrivono |\\psi\\rangle \\otimes |\\phi\\rangle o, in forma compatta, |\\psi\\phi\\rangle. Un ket per un bra, |\\psi\\rangle\\langle\\psi|, è un proiettore o una matrice densità.",
  },
  braket: {
    name: "Braket (prodotto scalare bra-ket)",
    meaning: "Prodotto scalare di due stati, l'incontro di un bra con un ket; il quadrato del suo modulo dà una probabilità di transizione.",
    usage: "L'ampiezza \\langle \\phi | \\psi \\rangle ha simmetria hermitiana, \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*, e la normalizzazione si scrive \\langle \\psi | \\psi \\rangle = 1. Gli elementi di matrice racchiudono un operatore: \\langle \\phi | \\hat{A} | \\psi \\rangle. Al centro usate una barra | semplice anziché \\mid, la cui spaziatura da relazione allontana le due metà. Per contenuti alti, \\left\\langle \\phi \\middle| \\psi \\right\\rangle fa crescere anche la barra centrale. I matematici scrivono la stessa cosa come (\\phi, \\psi) o \\langle \\phi, \\psi \\rangle con una virgola.",
  },
  laplacian: {
    name: "Laplaciano",
    meaning: "Operatore di Laplace, somma delle derivate parziali seconde; misura quanto una funzione si discosta dalla sua media locale.",
    usage: "L'equazione di Laplace \\nabla^2 \\phi = 0, l'equazione di Poisson \\nabla^2 \\phi = -\\rho/\\varepsilon_0, l'equazione del calore e l'equazione delle onde lo usano tutte. I fisici preferiscono \\nabla^2, che ricorda che si tratta della divergenza del gradiente; i matematici scrivono spesso \\Delta, che può entrare in conflitto con \\Delta inteso come differenza finita o variazione. In coordinate cartesiane \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}, ma in coordinate curvilinee compaiono termini aggiuntivi. Per il laplaciano vettoriale di un campo, scrivete l'operando in grassetto per segnalare il diverso significato.",
  },
  "d-alembertian": {
    name: "Dalembertiano",
    meaning: "Simbolo del quadrato, l'operatore d'onda di d'Alembert in relatività e l'operatore di necessità nella logica modale.",
    usage: "In relatività ristretta \\Box = \\partial^\\mu \\partial_\\mu combina derivate temporali e spaziali, per cui l'equazione delle onde è \\Box \\phi = 0 e l'equazione di Klein-Gordon è (\\Box + m^2)\\phi = 0. Le convenzioni di segno dipendono dalla segnatura della metrica, quindi dichiarate la vostra. In logica modale \\Box p si legge «necessariamente p», con \\Diamond p per «possibilmente p». Alcuni testi scrivono \\Box^2 per l'operatore, per analogia con \\nabla^2. Il simbolo visivamente simile \\square è spesso usato come segno di fine dimostrazione; verificate quale glifo usa la vostra classe di documento per il QED.",
  },
  "calligraphic-l-lagrangian": {
    name: "L calligrafica (lagrangiana)",
    meaning: "L calligrafica, il simbolo standard per una densità di lagrangiana e, nel machine learning, per una funzione di perdita.",
    usage: "La teoria dei campi scrive l'azione come S = \\int \\mathcal{L}\\, d^4x, con l'equazione di Eulero-Lagrange \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}. La meccanica classica usa spesso la L semplice per la lagrangiana vera e propria e riserva \\mathcal{L} alle densità. Gli articoli di machine learning usano \\mathcal{L}(\\theta) per una loss, e gli ingegneri la usano per la trasformata di Laplace \\mathcal{L}\\{f\\}(s). In ottimizzazione anche la funzione lagrangiana con i moltiplicatori è \\mathcal{L}(x, \\lambda). Introducete esplicitamente il significato che vi serve. La sua controparte tramite la trasformata di Legendre è l'hamiltoniana \\mathcal{H}.",
  },
  "calligraphic-h-hamiltonian": {
    name: "H calligrafica (hamiltoniana)",
    meaning: "H calligrafica, usata per l'hamiltoniana (funzione energia) e spesso per uno spazio di Hilbert.",
    usage: "In meccanica classica le equazioni di Hamilton si scrivono \\dot{q} = \\partial \\mathcal{H}/\\partial p e \\dot{p} = -\\partial \\mathcal{H}/\\partial q. La meccanica quantistica scrive di solito l'operatore hamiltoniano come \\hat{H} e usa \\mathcal{H} per lo spazio di Hilbert degli stati, quindi i due significati calligrafici possono scontrarsi nello stesso articolo. La fisica statistica usa \\mathcal{H} per un funzionale hamiltoniano nel peso di Boltzmann e^{-\\beta \\mathcal{H}}. La teoria dell'apprendimento la usa per una classe di ipotesi. Se ne compare più di uno, scegliete lettere distinte. Notate che \\mathcal copre solo le lettere maiuscole con i font predefiniti.",
  },
  tensor: {
    name: "Tensore",
    meaning: "Un tensore controvariante di rango 2, come il tensore energia-impulso, scritto con due indici greci in alto.",
    usage: "La relatività generale accoppia geometria e materia tramite G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}, e la conservazione si scrive \\nabla_\\mu T^{\\mu\\nu} = 0. Le graffe raggruppano entrambi gli indici in un unico apice; T^\\mu\\nu metterebbe \\nu sulla linea di base. Per i tensori misti, rendete visibile l'ordine orizzontale con un gruppo vuoto: T^{\\mu}{}_{\\nu} colloca l'indice inferiore dopo quello superiore anziché sotto di esso. Gli indici ripetuti in alto e in basso seguono la convenzione di sommatoria di Einstein. Per convenzione gli indici greci variano sullo spaziotempo, quelli latini solo sullo spazio.",
  },
  "christoffel-symbol": {
    name: "Simbolo di Christoffel",
    meaning: "Simbolo di Christoffel di seconda specie, che descrive come variano i vettori della base coordinata per la connessione di Levi-Civita.",
    usage: "Si calcola dalla metrica come \\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu}) e compare nell'equazione delle geodetiche e nelle derivate covarianti. Nonostante la notazione a indici, non è un tensore. Scrivere apice e pedice sulla stessa base li sovrappone verticalmente, che qui è lo stile abituale perché il simbolo è simmetrico nella coppia di indici inferiori. La Gamma maiuscola è dritta per impostazione predefinita; \\varGamma dà una versione corsiva se il vostro stile lo richiede.",
  },
  "partial-time": {
    name: "Derivata parziale rispetto al tempo",
    meaning: "Operatore di derivata parziale rispetto al tempo t, a variabili spaziali fissate.",
    usage: "Governa le equazioni di evoluzione: l'equazione del calore \\frac{\\partial u}{\\partial t} = k \\nabla^2 u, l'equazione di continuità e l'equazione di Schrödinger. Nel testo una \\frac completa risulta compressa, quindi scrivete \\partial u/\\partial t o la forma compatta \\partial_t u; la forma con pedice è standard negli articoli sulle EDP. In modalità display usate \\frac, e \\dfrac se compare dentro una frazione o una matrice e deve restare a grandezza piena. Distinguetela dalla derivata totale d/dt e dalla derivata materiale D/Dt usata in fluidodinamica.",
  },
  "vector-field": {
    name: "Campo vettoriale",
    meaning: "Accento a freccia sopra una lettera che la indica come vettore, qui il campo elettrico E.",
    usage: "La fisica di base scrive i vettori con le frecce, \\vec{E}, \\vec{F} = q\\vec{E}, mentre la maggior parte delle riviste e dei testi avanzati preferisce il grassetto, \\mathbf{E}, o per le lettere greche \\boldsymbol{\\omega}. \\vec è un accento corto a larghezza fissa, dimensionato per un solo carattere; per vettori di più lettere, come un segmento AB, \\overrightarrow{AB} si estende sull'intera etichetta. Scegliete un solo stile per i vettori in tutto il documento. I versori portano di solito il cappello, \\hat{x}, e per la i e la j senza puntino sotto un accento usate \\imath e \\jmath.",
  },
  divergence: {
    name: "Divergenza",
    meaning: "Operatore divergenza, il prodotto scalare di nabla con un campo vettoriale, che dà il flusso netto uscente per unità di volume.",
    usage: "La legge di Gauss \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 e la legge di assenza di monopoli \\nabla \\cdot \\mathbf{B} = 0 sono gli usi più noti, e un flusso incomprimibile richiede \\nabla \\cdot \\mathbf{u} = 0. \\cdot ha la spaziatura di un operatore binario, che è l'aspetto atteso. Usate \\cdot, non un punto fermo né \\bullet. Alcuni testi matematici preferiscono \\operatorname{div} \\mathbf{F}, che evita di trattare nabla come un vettore. Il teorema della divergenza la collega al flusso attraverso il bordo: \\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}.",
  },
  curl: {
    name: "Rotore",
    meaning: "Operatore rotore, il prodotto vettoriale di nabla con un campo vettoriale, che misura la rotazione locale o la densità di circuitazione.",
    usage: "La legge di Faraday \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t e la legge di Ampère con la correzione di Maxwell si scrivono con esso, e nei fluidi \\nabla \\times \\mathbf{u} è la vorticità. Vale la pena ricordare due identità: il rotore di un gradiente è nullo e la divergenza di un rotore è nulla. \\times è un operatore binario, quindi la spaziatura è automatica. I testi europei scrivono talvolta \\operatorname{rot} \\mathbf{F}, e altri usano \\operatorname{curl}. Il rotore è definito in questo modo solo in tre dimensioni.",
  },
};

export default text;
