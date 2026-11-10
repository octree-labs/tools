import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/latin/<slug>. */
const text: SymbolPageTranslations = {
  "o-with-umlaut-diaeresis": {
    name: "O con dieresi (umlaut)",
    meaning: "Pone due punti sopra la o, producendo ö come accento matematico; nel testo corrente la stessa lettera si scrive \\\"o.",
    usage: "\\ddot è un accento della modalità matematica, quindi \\ddot{o} produce una o in corsivo con due punti, adatta alle formule ma non alle parole. Per parole tedesche, svedesi, finlandesi, turche o ungheresi come Köln o Gödel, usate l'accento testuale \\\"{o} oppure digitate ö direttamente in un sorgente UTF-8. In matematica e in fisica \\ddot{x} è la notazione di Newton per la derivata seconda rispetto al tempo, e \\dddot{x} dà la terza. La versione con un solo punto, \\dot{x}, indica una derivata prima. Scrivere \\ddot nel testo corrente provoca un errore di dollaro mancante (Missing $ inserted), un tipico errore da principianti quando si copiano nomi accentati.",
  },
  "o-with-grave-accent": {
    name: "O con accento grave",
    meaning: "Pone un accento grave sulla o, producendo ò come accento matematico; per le parole si usa il comando testuale \\`o.",
    usage: "L'accento grave indica l'accento tonico o il timbro della vocale in italiano (però, città), in catalano e in vietnamita, e compare in parole francesi come où. In un documento scrivete queste parole con \\`{o} o digitando la lettera accentata, perché \\grave funziona solo in modalità matematica e compone la lettera in corsivo matematico. L'uso matematico di \\grave è raro; talvolta un autore lo usa per decorare una variabile quando \\hat, \\tilde e \\bar sono già occupati. Non confondete l'accento grave con l'accento acuto \\acute, inclinato nell'altro senso.",
    example: "\\grave{o} \\quad \\text{confrontate con l'accento testuale in } \\text{per\\`{o}}",
  },
  "o-with-acute-accent": {
    name: "O con accento acuto",
    meaning: "Pone un accento acuto sulla o, producendo ó come accento matematico; nelle parole si usa la forma testuale \\'o.",
    usage: "L'accento acuto compare in spagnolo (canción, José), in portoghese, in polacco (ó in Kraków), in islandese e in ungherese. Per tutte queste parole scrivete \\'{o} o digitate ó direttamente, perché \\acute{o} funziona solo in modalità matematica e produce una lettera in corsivo. In matematica \\acute è una decorazione poco usata, talvolta impiegata per distinguere una variabile trasformata. Tenete presente che un primo x' è diverso da un accento acuto. La ő lunga ungherese usa il doppio accento acuto \\H{o}, non due accenti acuti.",
    example: "\\acute{o} \\quad \\text{rispetto a } \\text{Krak\\'{o}w}",
  },
  "o-with-circumflex": {
    name: "O con accento circonflesso",
    meaning: "Pone un accento circonflesso sulla o, producendo ô; in matematica lo stesso comando \\hat indica stimatori e versori.",
    usage: "Per parole francesi, portoghesi o vietnamite come hôtel o côte, usate l'accento testuale \\^{o} o digitate ô direttamente; \\hat funziona solo in modalità matematica. In matematica \\hat è ovunque: \\hat{\\theta} per uno stimatore, \\hat{y} per una previsione, \\hat{\\mathbf{x}} per un versore, \\hat{H} per un operatore quantistico e \\hat{f} per una trasformata di Fourier. Per accenti su più caratteri usate \\widehat{AB}, che si allunga. Per mettere un cappello su i o j, usate \\hat{\\imath} in modo da eliminare il puntino.",
  },
  "o-with-tilde": {
    name: "O con tilde",
    meaning: "Pone una tilde sulla o, producendo õ; come accento matematico \\tilde decora anche variabili come \\tilde{x}.",
    usage: "In portoghese (põe, Camões) e in estone (dove õ è una lettera a sé), nel testo la scelta giusta è il comando testuale \\~{o} o una õ digitata. In modalità matematica \\tilde indica una grandezza trasformata, approssimata o alternativa, come una variabile normalizzata \\tilde{x} o la notazione soft-O \\tilde{O}(n). Per argomenti larghi \\widetilde{AB} si estende sull'intera espressione. Non confondete l'accento con \\sim, la tilde autonoma usata come relazione per «ha distribuzione» o «asintotico a». Le tilde sulle maiuscole possono stare in alto, quindi controllate l'interlinea.",
  },
  "o-with-macron": {
    name: "O con macron",
    meaning: "Pone un macron sulla o, producendo ō; in matematica lo stesso accento \\bar indica medie e complessi coniugati.",
    usage: "I macron indicano le vocali lunghe nei dizionari di latino, nella romanizzazione del giapponese (Tōkyō, Ōsaka), in māori e in hawaiano; nel testo usate \\={o} o digitate ō. In matematica \\bar{x} è una media campionaria, \\bar{z} un complesso coniugato e \\bar{A} talvolta una chiusura o un complementare. La barra di \\bar ha una larghezza fissa e corta, quindi per espressioni più lunghe usate \\overline{A \\cup B}, che si estende su tutto l'argomento. Alcuni autori preferiscono \\overline anche per le singole lettere, così che coniugati e chiusure abbiano un aspetto uniforme.",
  },
  "o-with-dot-above": {
    name: "O con punto sopra",
    meaning: "Pone un singolo punto sopra la o, producendo ȯ; in matematica l'accento \\dot è la notazione di Newton per la derivata rispetto al tempo.",
    usage: "Come lettera ȯ è poco comune; compare in alcune traslitterazioni e in livone. Nel testo usate l'accento \\.{o} o un carattere digitato, perché \\dot funziona solo in modalità matematica. In fisica e in ingegneria \\dot{x} indica dx/dt, quindi la velocità è \\dot{\\mathbf{r}} e un modello nello spazio degli stati si scrive \\dot{\\mathbf{x}} = A\\mathbf{x} + B\\mathbf{u}. Due punti, \\ddot{x}, danno la derivata seconda. Non confondete l'accento con \\cdot, un punto di moltiplicazione centrato sull'asse matematico, non sopra una lettera.",
  },
  "o-with-breve": {
    name: "O con breve",
    meaning: "Pone una breve, una piccola coppa, sopra la o, producendo ŏ; per le parole si usa invece l'accento testuale \\u{o}.",
    usage: "La breve indica le vocali brevi nella prosodia latina e compare nella romanizzazione McCune-Reischauer del coreano, come in Chŏng. La ă rumena e la ğ turca usano lo stesso segno su altre lettere. Nel testo scrivete \\u{o} o digitate ŏ; \\breve funziona solo in modalità matematica e compone la lettera in corsivo. L'uso matematico è raro, di solito come ulteriore decorazione per una variabile modificata dopo cappelli e tilde. Non confondete la breve con l'háček \\check, che è appuntito anziché arrotondato.",
    example: "\\breve{o} \\quad \\text{rispetto a } \\text{Ch\\u{o}ng}",
  },
  "o-with-caron-hacek": {
    name: "O con caron (háček)",
    meaning: "Pone un caron o háček sulla o, producendo ǒ; nel testo lo stesso segno si scrive con \\v{o}.",
    usage: "Nel pinyin hanyu ǒ indica il terzo tono, come in wǒ, e l'háček è centrale nell'ortografia ceca, slovacca e di altre lingue slave su lettere come č e š. Nel testo usate \\v{o} o una ǒ digitata; \\check è l'accento della modalità matematica. I matematici usano \\check per la coomologia di Čech \\check{H}, per le trasformate di Fourier inverse \\check{f} e per gli oggetti duali. È appuntito, a differenza della breve arrotondata \\breve, e punta verso il basso, a differenza del circonflesso \\hat. Per argomenti larghi \\widecheck non è standard, quindi limitate \\check alle singole lettere.",
  },
  "o-with-double-acute": {
    name: "O con doppio accento acuto",
    meaning: "Scrive la ő lunga ungherese con doppio accento acuto, un comando testuale per nomi come Erdős.",
    usage: "\\H è un accento testuale, non matematico, quindi usatelo nel testo o dentro \\text{...}; in modalità matematica pura genera un errore. L'ungherese distingue ö da ő e ü da ű, quindi il nome del matematico è Erdős, non Erdös, e scriverlo correttamente in una bibliografia è una cortesia che vale il comando in più. In BibTeX racchiudete l'accento tra graffe, {\\H{o}}, perché l'ordinamento e i cambi di maiuscole non lo rovinino. Non cercate di imitarlo con due accenti acuti.",
    example: "\\text{numero di Erd\\H{o}s } = 1",
  },
  "o-with-cedilla": {
    name: "O con cediglia",
    meaning: "Scrive una o con un uncino di cediglia sotto, una lettera rara che LaTeX produce di norma con l'accento testuale \\c{o}.",
    usage: "La cediglia è nota per la ç del francese e del portoghese, ma sulla o è insolita; compare nell'ortografia marshallese e in alcuni sistemi di trascrizione. Digitare il carattere precomposto dentro \\text funziona in molti renderer web, ma una compilazione LaTeX classica potrebbe non riconoscere la cediglia combinante, quindi \\c{o} nel testo è la forma sorgente affidabile. Non confondete la cediglia con l'ogonek, l'uncino delle polacche ą ed ę, che è rivolto dall'altra parte e si scrive \\k. Nessuno dei due funziona in modalità matematica senza \\text.",
  },
  "o-with-dot-below": {
    name: "O con punto sotto",
    meaning: "Scrive una o con un punto sottostante, ọ, usata in yoruba e in vietnamita e scritta \\d{o} nel testo LaTeX.",
    usage: "Lo yoruba usa ọ come vocale distinta (come in parole yorùbá quali ọjọ́), e il vietnamita usa il punto sotto come segno del tono grave. In un sorgente LaTeX l'accento testuale \\d{o} produce questa lettera, mentre anche digitare ọ direttamente funziona con un font che ha il glifo. Come gli altri accenti testuali, \\d non è valido in modalità matematica pura; racchiudete le parole in \\text. Non usate \\dot, che mette il punto sopra ed è un accento matematico per le derivate. Combinare i toni con il punto sotto può richiedere un font con glifi precomposti.",
  },
  "o-with-underline": {
    name: "O sottolineata",
    meaning: "Sottolinea la o; in matematica \\underline indica vettori, limiti inferiori o simboli enfatizzati.",
    usage: "\\underline funziona sia in modalità testo sia in modalità matematica e traccia una linea sotto l'intero argomento, quindi \\underline{o} dà una o sottolineata. Alcuni testi di ingegneria e di meccanica usano \\underline{u} per i vettori al posto del grassetto, e gli articoli di ottimizzazione scrivono \\underline{x} per un limite inferiore abbinato a \\overline{x} per un limite superiore. Nelle traslitterazioni il macron sottoscritto è un accento testuale distinto, \\b{o}, più corto e centrato sotto la lettera. Per l'enfasi nel testo preferite \\emph alla sottolineatura, perché le sottolineature non vanno a capo.",
  },
  "linked-o-o-two-o-s-joined-by-a-dash": {
    name: "O-o collegate (due o unite da un trattino)",
    meaning: "Unisce due o con un segno meno stretto da spazi negativi, imitando un glifo o-o collegato.",
    usage: "Questa costruzione non è un comando standard: ogni \\! inserisce uno spazio sottile negativo, quindi o\\!\\!-\\!\\!o trascina un segno meno matematico contro entrambe le lettere e il risultato somiglia a due anelli collegati. Poiché è assemblata in modalità matematica, le o sono in corsivo e la spaziatura dipende dal font. Se vi serve la legatura medievale oo o una lettera storica simile, un font che includa quel carattere è più pulito di questo espediente. Per disegnare un legame o un collegamento a forma di manubrio, uno strumento per diagrammi offre un controllo migliore. Usatela solo per un rapido effetto visivo.",
  },
  "oe-ligature-lowercase": {
    name: "Legatura OE (minuscola)",
    meaning: "Scrive la legatura minuscola œ usata in parole francesi come cœur e œuvre; in LaTeX è \\oe.",
    usage: "L'ortografia francese richiede la legatura in parole come sœur, cœur e œil, quindi scrivere oe è un errore di ortografia, non solo una scelta tipografica. Nel sorgente LaTeX usate \\oe o digitate œ direttamente; \\oe è un comando testuale, quindi in matematica usate \\text. L'inglese la usa in grafie antiche o britanniche come fœtus. A differenza delle legature ff o fi, che TeX forma automaticamente, œ è una lettera a sé e non viene mai creata digitando oe. Ricordate lo spazio dopo \\oe, come in c\\oe ur, oppure usate le graffe come in c{\\oe}ur.",
  },
  "oe-ligature-uppercase": {
    name: "Legatura OE (maiuscola)",
    meaning: "Scrive la legatura maiuscola Œ usata in francese, come in Œuvres complètes; in LaTeX è \\OE.",
    usage: "La Œ maiuscola compare all'inizio delle parole francesi e nei titoli tutti in maiuscolo, quindi ŒUVRES e non OEUVRES. Digitate il carattere direttamente o usate \\OE in modalità testo; in matematica deve stare dentro \\text. Nel maiuscoletto o nei titoli in maiuscolo verificate che \\MakeUppercase trasformi \\oe in \\OE, cosa che LaTeX fa correttamente. Non confondetela con Æ, l'ash, che usa una a invece di una o. Anche grafie inglesi antiche come Œdipus la usano.",
  },
  "ae-ligature-lowercase-ash": {
    name: "Legatura AE (minuscola)",
    meaning: "Scrive la æ minuscola, chiamata ash, lettera del danese, del norvegese, dell'islandese e dell'inglese antico; in LaTeX è \\ae.",
    usage: "In danese e in norvegese æ è una lettera a pieno titolo dell'alfabeto, ordinata dopo la z, quindi nei nomi non va mai sostituita con ae. L'inglese la usa in grafie stilizzate come encyclopædia e Cæsar, e il simbolo IPA æ indica la vocale di cat. In LaTeX usate \\ae o digitate æ direttamente; è un comando testuale, quindi in matematica racchiudetelo in \\text. Separate la lettera successiva con graffe o uno spazio, come in \\ae{}ble. È distinta da œ, che unisce o ed e.",
  },
  "ae-ligature-uppercase": {
    name: "Legatura AE (maiuscola)",
    meaning: "Scrive la Æ maiuscola, l'ash maiuscolo usato in danese, norvegese, islandese e inglese antico.",
    usage: "La Æ maiuscola apre parole danesi e norvegesi e compare in nomi dell'inglese antico come Ælfred. LaTeX fornisce \\AE in modalità testo, oppure potete digitare Æ direttamente. Nei titoli in maiuscolo la conversione in maiuscole di LaTeX trasforma automaticamente \\ae in \\AE. Le bibliografie con nomi scandinavi devono mantenere la lettera così com'è, perché le regole di ordinamento la collocano verso la fine dell'alfabeto. Non confondetela con Œ, che unisce O ed E e appartiene all'ortografia francese. Digitarla direttamente in un file UTF-8 è oggi l'opzione più semplice.",
  },
  "a-with-ring-above": {
    name: "A con anello",
    meaning: "Scrive å, la a con anello, lettera dello svedese, del danese, del norvegese e del finlandese; nel testo LaTeX è \\aa.",
    usage: "Nelle lingue scandinave å è una vocale distinta, ordinata alla fine dell'alfabeto, come in på o Århus. LaTeX la scrive con \\aa o con l'accento ad anello generico \\r{a}, oppure potete digitare å direttamente. Sono comandi testuali, quindi in matematica racchiudeteli in \\text. Non usate l'accento matematico \\mathring{a}, che mette un anello su una lettera matematica in corsivo ed è pensato per cose come l'interno di un insieme. I software bibliografici dovrebbero trattare {\\aa} come un'unica lettera ai fini dell'ordinamento.",
  },
  "a-with-ring-above-angstrom": {
    name: "A maiuscola con anello (ångström)",
    meaning: "Scrive la Å maiuscola, usata nelle parole scandinave e come simbolo dell'unità ångström (10^{-10} m).",
    usage: "Fisici e chimici esprimono lunghezze di legame e lunghezze d'onda in ångström, come in 1.54 Å, e il comando \\AA di LaTeX dà il glifo corretto in modalità testo. In matematica scrivete \\text{\\AA} o usate una macro dedicata alle unità, perché \\AA da solo è un comando testuale. Come lettera apre nomi di luoghi svedesi e danesi come Åland. Il segno Unicode separato dell'ångström si normalizza in questa stessa lettera, quindi usare Å è corretto. Mettete uno spazio sottile tra numero e unità, come in 1.54\\,\\text{Å}.",
  },
  "o-with-stroke-lowercase": {
    name: "O barrata (minuscola)",
    meaning: "Scrive ø, la o barrata del danese, del norvegese e del faroese; in LaTeX è il comando testuale \\o.",
    usage: "ø è una vocale a pieno titolo in danese e in norvegese, come in København o Søren Kierkegaard, e nei nomi non va sostituita con o o oe. Usate \\o o digitate ø direttamente; è un comando testuale, quindi in matematica usate \\text. Somiglia ai simboli dell'insieme vuoto \\emptyset e \\varnothing e al simbolo del diametro, ma sono caratteri diversi con significati diversi, quindi non prendete in prestito ø per l'insieme vuoto. Anche la trascrizione fonetica usa ø per una vocale anteriore arrotondata.",
  },
  "o-with-stroke-uppercase": {
    name: "O barrata (maiuscola)",
    meaning: "Scrive la Ø maiuscola, come in Øresund, la O barrata maiuscola scritta \\O nel testo LaTeX.",
    usage: "La Ø maiuscola apre parole danesi e norvegesi come Øresund e Østergaard. In LaTeX usate \\O in modalità testo o digitate Ø direttamente; \\O non è definito in matematica senza \\text. Poiché somiglia all'insieme vuoto \\emptyset e al simbolo del diametro, si è tentati di riutilizzarla, ma sono caratteri distinti, e lettori di schermo e motori di ricerca li trattano in modo diverso. Negli alfabeti norvegese e danese l'ordinamento colloca Ø dopo Æ e prima di Å.",
  },
  "l-with-stroke-lowercase": {
    name: "L barrata (minuscola)",
    meaning: "Scrive ł, la l barrata polacca pronunciata come la w inglese; nel testo LaTeX è \\l.",
    usage: "Il polacco usa ł in molte parole e nomi comuni, come złoty, Wrocław e Łukasiewicz, il logico all'origine della notazione polacca. Nel sorgente LaTeX scrivete \\l o digitate ł direttamente; è un comando testuale, quindi in matematica usate \\text. Quando una lettera la segue direttamente, separatela con le graffe, come in z\\l{}oty. Alcuni font non hanno ł, il che può produrre un glifo mancante invece di un avviso, quindi controllate il PDF. È distinta dalla lambda minuscola barrata ƛ.",
  },
  "l-with-stroke-uppercase": {
    name: "L barrata (maiuscola)",
    meaning: "Scrive la Ł maiuscola, come in Łódź, la L barrata polacca maiuscola scritta \\L in LaTeX.",
    usage: "La Ł maiuscola apre nomi come Łódź e Łukasiewicz, quindi le bibliografie che citano autori polacchi ne hanno bisogno per scrivere correttamente i nomi. Usate \\L in modalità testo o digitate Ł direttamente; in matematica racchiudetela in \\text. In BibTeX tenetela tra graffe, {\\L}ukasiewicz, perché i cambi di maiuscole e l'ordinamento funzionino. Non confondete \\L con \\pounds, il simbolo della sterlina, che è un simbolo diverso anche se entrambi hanno una barra su una forma simile a una L. Digitare Ł direttamente in un sorgente UTF-8 è l'opzione più semplice nelle configurazioni moderne.",
  },
  "dotless-i-math": {
    name: "I senza puntino (matematica)",
    meaning: "Produce una i corsiva matematica senza puntino, così che accenti come \\hat o \\vec vi si appoggino senza un puntino di troppo.",
    usage: "Il motivo principale per usare \\imath è il posizionamento degli accenti: \\hat{\\imath} dà il versore i con cappello della fisica senza puntino sotto il cappello, mentre \\hat{i} conserva il puntino. Compare anche come \\vec{\\imath} nel calcolo vettoriale e talvolta come unità immaginaria composta. Nel testo la i senza puntino è \\i, che usereste per parole turche come ılık o per la i accentata nelle codifiche più vecchie. Non confondete \\imath con \\iota, che è la lettera greca e ha una forma diversa.",
  },
  "dotless-j-math": {
    name: "J senza puntino (matematica)",
    meaning: "Produce una j corsiva matematica senza puntino, usata sotto accenti come nel versore j con cappello.",
    usage: "Fisica e ingegneria scrivono i versori cartesiani come \\hat{\\imath}, \\hat{\\jmath}, \\hat{k}, e \\jmath elimina il puntino così che il cappello si appoggi in modo pulito. Gli ingegneri elettrici che usano j per l'unità immaginaria talvolta vi mettono anche degli accenti. In modalità testo il comando corrispondente è \\j. Non c'è un motivo standard per usare \\jmath senza accenti, quindi riservatelo alle forme accentate. Notate che \\vec{\\jmath} e \\hat{\\jmath} posizionano l'accento in modo leggermente diverso, quindi controllate la spaziatura.",
  },
  "inverted-question-mark": {
    name: "Punto interrogativo capovolto",
    meaning: "Scrive ¿, il punto interrogativo capovolto che apre una domanda in spagnolo; LaTeX accetta anche ?` per ottenerlo.",
    usage: "Lo spagnolo pone ¿ all'inizio di una domanda e ? alla fine, come in ¿Dónde está? In LaTeX la legatura ?` (punto interrogativo seguito da un accento grave) produce il segno capovolto nei font standard, e \\textquestiondown è il comando con nome. Anche digitare ¿ direttamente funziona con l'input UTF-8. È un carattere testuale, quindi in matematica va dentro \\text. Lo usano anche il galiziano e l'asturiano, mentre il catalano in genere no. Poiché ?` è una legatura, un accento grave isolato dopo un punto interrogativo può creare per errore il glifo capovolto, quindi controllate le frasi che terminano con una domanda seguita da una virgoletta.",
  },
  "inverted-exclamation-mark": {
    name: "Punto esclamativo capovolto",
    meaning: "Scrive ¡, il punto esclamativo capovolto che apre un'esclamazione in spagnolo; LaTeX accetta anche !` per ottenerlo.",
    usage: "Lo spagnolo racchiude le esclamazioni tra ¡ e !, come in ¡Hola!, e la stessa coppia si applica anche a metà frase. LaTeX lo produce con la legatura !` (punto esclamativo seguito da un accento grave) o con il comando con nome \\textexclamdown, e anche digitare ¡ in un file UTF-8 funziona. In matematica deve stare dentro \\text. Non confondetelo con la i minuscola o con la barra verticale |, che in alcuni font senza grazie possono sembrare simili. Come per la legatura del punto interrogativo, una sequenza !` letterale nel sorgente diventa ¡, il che talvolta sorprende gli autori che citano codice.",
  },
};

export default text;
