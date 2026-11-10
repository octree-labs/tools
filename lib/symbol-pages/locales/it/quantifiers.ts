import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "Quantificatore di esistenza unica",
    meaning: "Esiste esattamente uno: il quantificatore esistenziale seguito da un punto esclamativo che impone l'unicità.",
    usage: "Enunciati di unicità, come l'esistenza di un'unica soluzione di un problema ai valori iniziali o di un unico elemento neutro in un gruppo, si scrivono \\exists! x. In modalità matematica di TeX il punto esclamativo è un simbolo di chiusura, quindi \\exists! x viene spaziato in modo sensato, anche se alcuni autori aggiungono \\, prima della variabile per chiarezza. Formalmente \\exists! x\\, P(x) abbrevia \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)). Evitate \\exists_1, che alcuni lettori interpretano come una variabile con pedice. Nella prosa, «esiste un unico» si legge spesso meglio del simbolo.",
  },
  "for-all-x": {
    name: "Quantificatore universale su x",
    meaning: "Quantificatore universale applicato a x, che afferma che l'enunciato seguente vale per ogni valore di x.",
    usage: "Le definizioni di continuità, gli assiomi di gruppo e i principi di induzione iniziano tutti con \\forall x. Il simbolo \\forall è un atomo matematico ordinario, quindi TeX non inserisce spazio dopo la variabile; aggiungere \\, o i due punti, come in \\forall x\\, P(x) o \\forall x : P(x), rende le formule lunghe molto più leggibili. Alcuni autori mettono il quantificatore dopo l'enunciato e a parole («per ogni x»), il che risulta più scorrevole nella prosa. Non usate \\forall nel testo corrente come abbreviazione di «per ogni», a meno che il pubblico non si aspetti quella scorciatoia.",
  },
  "exists-x": {
    name: "Quantificatore esistenziale su x",
    meaning: "Quantificatore esistenziale che vincola x, affermando che almeno un valore di x rende vero l'enunciato.",
    usage: "Usi tipici sono la definizione di limite (\\exists \\delta > 0), la suriettività (\\forall y\\, \\exists x : f(x) = y) e i testimoni in logica. L'ordine conta: \\forall y \\exists x è diverso da \\exists x \\forall y, quindi scrivete con cura le sequenze di quantificatori. La sua forma negata \\nexists esiste come simbolo a sé per «non esiste». Come \\forall, anche \\exists non riceve spazio automatico dopo la variabile vincolata, quindi aggiungete uno spazio sottile o i due punti prima del predicato. Per l'unicità, aggiungete un punto esclamativo e ottenete \\exists!.",
  },
  "for-all-in-set": {
    name: "Quantificatore universale ristretto",
    meaning: "Quantificatore universale limitato: l'enunciato deve valere per ogni elemento x dell'insieme A.",
    usage: "Restringere il quantificatore a un insieme, come in \\forall x \\in A, è un'abbreviazione di \\forall x\\,(x \\in A \\to P(x)) ed è il modo in cui scrive la maggior parte dei matematici. \\in ha spaziatura di relazione, quindi l'espressione si spazia da sola; basta separarla dal predicato con una virgola, i due punti o \\; per leggibilità. Con più variabili potete scrivere \\forall x, y \\in A invece di ripetere il quantificatore. Non confondete \\in con \\epsilon o \\varepsilon, che in alcuni font si somigliano ma sono lettere, non la relazione di appartenenza.",
  },
  "exists-in-set": {
    name: "Quantificatore esistenziale ristretto",
    meaning: "Quantificatore esistenziale limitato: qualche elemento x appartenente ad A soddisfa la condizione che segue.",
    usage: "Questa forma compatta sostituisce \\exists x\\,(x \\in A \\wedge P(x)) e compare continuamente in analisi, per esempio nella densità dei razionali: tra due reali qualsiasi \\exists q \\in \\mathbb{Q}. La negazione di \\exists x \\in A\\, P(x) è \\forall x \\in A\\, \\neg P(x), una regola da tenere a mente quando si negano le definizioni. Usate \\nexists x \\in A per «nessun elemento di A». Mettete i due punti, «tale che» oppure \\; prima del predicato, così che il lettore veda dove finisce il quantificatore.",
  },
  "such-that-colon": {
    name: "Due punti “tale che”",
    meaning: "I due punti letti «tale che» negli enunciati quantificati e nella notazione insiemistica per proprietà, a separare una variabile dalla sua condizione.",
    usage: "In modalità matematica i due punti semplici sono trattati come relazione e ricevono lo stesso spazio ampio su entrambi i lati, il che va bene per \\{x : x > 0\\} e \\forall x : P(x). Per la segnatura di una funzione usate invece \\colon, che ha la spaziatura della punteggiatura: f\\colon A \\to B rende bene, mentre f : A \\to B lascia un vuoto prima dei due punti. Per le definizioni, := composto da due caratteri può risultare disallineato verticalmente; un simbolo di definizione dedicato, fornito da un pacchetto di estensione, risolve il problema. Alcuni autori preferiscono \\mid o una barra verticale nella notazione insiemistica; sceglietene una e siate coerenti.",
  },
  "set-builder": {
    name: "Notazione insiemistica per caratteristica",
    meaning: "Notazione per caratteristica: l'insieme di tutti gli x per cui vale la proprietà P(x), scritto con parentesi graffe e un separatore.",
    usage: "In modalità matematica le graffe vanno precedute da backslash, \\{ e \\}, altrimenti servono solo a raggruppare e spariscono dall'output. \\mid è una relazione, quindi riceve lo spazio corretto su entrambi i lati, a differenza di una | semplice, che è un simbolo ordinario e schiaccia le lettere. Quando la condizione contiene frazioni o materiale alto, dimensionate tutto insieme: \\left\\{ x \\;\\middle|\\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}. Anche i due punti funzionano bene come separatore ed evitano confusioni quando la condizione stessa contiene valori assoluti.",
  },
  "quantified-statement": {
    name: "Enunciato con quantificatori annidati",
    meaning: "Un enunciato con quantificatori annidati: per ogni x esiste un y che rende vera P(x, y), dove y può dipendere da x.",
    usage: "Questo schema è alla base delle definizioni epsilon-delta e di enunciati come «ogni intero ha un successore». Scambiare l'ordine in \\exists y \\forall x produce un'affermazione molto più forte, un unico y valido per tutti gli x, e confondere le due è un errore classico nelle dimostrazioni. I due punti separano il prefisso di quantificatori dalla matrice della formula; se la vostra convenzione sui due punti entra in conflitto con la notazione delle funzioni altrove, usate un punto o delle parentesi. Per leggibilità nei prefissi più lunghi, aggiungete \\, tra i blocchi di quantificatori, oppure scriveteli a parole: per ogni x esiste y.",
  },
};

export default text;
