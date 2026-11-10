import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "Somma diretta",
    meaning: "Più cerchiato, per le somme dirette di spazi o moduli e per l'OR esclusivo (XOR) nell'algebra booleana.",
    usage: "In algebra lineare si scrive V = U \\oplus W quando ogni vettore si scompone in modo unico in una parte di U e una di W, e la teoria dei moduli costruisce \\mathbb{Z} \\oplus \\mathbb{Z}. In informatica e in crittografia a \\oplus b è lo XOR bit a bit, come nel cifrario a chiave monouso c = m \\oplus k. È un operatore binario, quindi riceve uno spazio medio. Per una somma diretta su un insieme di indici usate il grande operatore \\bigoplus_{i \\in I} V_i, che accetta limiti come \\sum. Non confondetelo con \\pm né con un semplice +; in alcune algebre \\oplus indica anche un'addizione deformata.",
  },
  "tensor-product": {
    name: "Prodotto tensoriale",
    meaning: "Per cerchiato, il prodotto tensoriale di vettori, spazi, moduli o matrici (prodotto di Kronecker).",
    usage: "L'algebra multilineare scrive V \\otimes W, la meccanica quantistica scrive gli stati composti |\\psi\\rangle \\otimes |\\phi\\rangle e l'algebra delle matrici usa A \\otimes B per il prodotto di Kronecker. Nell'apprendimento automatico compare talvolta per il prodotto esterno. È un operatore binario con spaziatura media. Per i prodotti iterati usate il grande operatore \\bigotimes_{i=1}^n V_i e, per il prodotto tensoriale su un anello, mettete l'anello in pedice, M \\otimes_R N. Non usate \\times, che indica il prodotto cartesiano o vettoriale.",
  },
  "circle-dot": {
    name: "Punto cerchiato",
    meaning: "Punto cerchiato, comunemente usato per il prodotto elemento per elemento (prodotto di Hadamard) di vettori o matrici.",
    usage: "Gli articoli di apprendimento profondo scrivono h_t = o_t \\odot \\tanh(c_t) per i prodotti elemento per elemento nelle reti LSTM e nelle maschere di attenzione, e l'algebra lineare numerica usa A \\odot B per il prodotto di Hadamard, spesso accanto a \\circ con lo stesso significato. Nei diagrammi di fisica un punto cerchiato indica un vettore uscente dal foglio, ma lì è un simbolo, non un operatore. È un operatore binario con spaziatura media; esiste anche la forma grande \\bigodot. Precisate nella sezione sulle notazioni se \\odot indica il prodotto di Hadamard, perché alcuni autori lo usano per lo XNOR o per altre operazioni.",
  },
  "circle-minus": {
    name: "Meno cerchiato",
    meaning: "Meno cerchiato, usato per i complementi ortogonali all'interno di uno spazio e per alcune operazioni di tipo differenza.",
    usage: "Nella teoria degli spazi di Hilbert H \\ominus K indica il complemento ortogonale di un sottospazio chiuso K in H, controparte di \\oplus. L'elaborazione morfologica delle immagini usa A \\ominus B per l'erosione, e alcuni testi di teoria degli insiemi lo usano per la differenza simmetrica, anche se lì è più comune \\triangle. È un operatore binario, quindi la spaziatura è automatica. Poiché il suo significato varia, definitelo una volta nel vostro articolo. Non esiste una versione standard come grande operatore. Nell'uso come differenza simmetrica, A \\ominus B è uguale a (A \\setminus B) \\cup (B \\setminus A).",
  },
  "circle-slash": {
    name: "Barra obliqua cerchiata",
    meaning: "Barra obliqua cerchiata, che indica tipicamente la divisione elemento per elemento (di Hadamard) di vettori o matrici.",
    usage: "I testi di calcolo matriciale e di apprendimento automatico scrivono A \\oslash B per la divisione componente per componente, abbinandola a \\odot per la moltiplicazione componente per componente, come negli aggiornamenti normalizzati x \\oslash \\sqrt{v}. LaTeX lo tratta come operatore binario, quindi riceve la stessa spaziatura media di \\odot e \\otimes. Notate che è diverso da \\varnothing e \\emptyset, che sembrano un cerchio barrato ma sono simboli ordinari per l'insieme vuoto, e dalla lettera scandinava \\o. Poiché non è universalmente noto, introducetelo nella sezione sulle notazioni.",
  },
  "star": {
    name: "Stella",
    meaning: "Operatore binario a stella a cinque punte, usato per la convoluzione, la dualità di Hodge e prodotti definiti ad hoc.",
    usage: "L'elaborazione dei segnali scrive talvolta la correlazione incrociata come f \\star g, la geometria differenziale usa \\star per l'operatore stella di Hodge e gli algebristi lo usano per operazioni binarie generiche o per il prodotto stella di Moyal. In ottimizzazione i valori ottimi si scrivono x^\\star, in alternativa a x^*. \\star è un operatore binario, distinto da \\ast (l'asterisco) e dal simbolo testuale prodotto da \\bigstar. Poiché ha la spaziatura di un operatore binario, usarlo come operatore prefisso, come la stella di Hodge, può richiedere le graffe: {\\star}\\omega.",
  },
  "asterisk": {
    name: "Asterisco",
    meaning: "Asterisco come operatore binario, tipicamente per la convoluzione o per un'operazione di gruppo generica.",
    usage: "In modalità matematica \\ast è lo stesso glifo che si ottiene digitando *, un operatore binario con spaziatura media, usato per la convoluzione (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau e per operazioni binarie generiche in algebra. Come apice, A^* o A^\\ast indica l'aggiunto, la trasposta coniugata, lo spazio duale o la stella di Kleene a seconda del settore. È centrato sull'asse matematico, a differenza dell'asterisco testuale, che è rialzato. Per un valore ottimo con stella x^\\star alcuni autori preferiscono \\star, per tenere distinti i significati.",
  },
  "composition": {
    name: "Composizione",
    meaning: "Operatore a cerchietto, standard per la composizione di funzioni e usato anche per i gradi.",
    usage: "(f \\circ g)(x) = f(g(x)) è l'uso principale. Come apice, 90^\\circ dà i gradi, anche se un simbolo di grado dedicato, preso da un font di simboli testuali, può avere un aspetto migliore, e A^\\circ indica spesso la parte interna o l'insieme polare. Alcuni autori usano \\circ per il prodotto di Hadamard, per il quale \\odot è l'alternativa più chiara. \\circ è un operatore binario, quindi riceve uno spazio medio; \\bigcirc è un cerchio più grande e \\cdot un punto pieno. Evitate di usare la lettera o per la composizione.",
  },
  "bullet": {
    name: "Pallino",
    meaning: "Punto tondo pieno come operatore binario, usato come segnaposto, per prodotti generici e per oggetti graduati.",
    usage: "La teoria delle categorie e l'algebra omologica usano \\bullet come segnaposto per gli indici, come in C_\\bullet per un complesso di catene e H^\\bullet per la coomologia totale. Serve anche da argomento generico, f(\\bullet, y), e da simbolo di operazione in algebra. I pallini degli elenchi itemize si ottengono con \\textbullet, non con il \\bullet matematico. Rispetto a \\cdot è più grande e più marcato; \\cdot è la scelta giusta per la moltiplicazione ordinaria o il prodotto scalare. Come operatore binario riceve uno spazio medio, ma come segnaposto in f(\\bullet) la spaziatura va bene, perché non ha un operando a sinistra.",
  },
  "diamond": {
    name: "Rombo",
    meaning: "Piccolo operatore binario a rombo, usato per operazioni generiche e in alcune notazioni modali e algebriche.",
    usage: "\\diamond compare come operazione binaria arbitraria (a \\diamond b), nel prodotto a rombo della teoria di Lie e nella teoria degli automi. La logica modale scrive la possibilità con un rombo più grande, di solito \\Diamond o \\lozenge, invece di questa piccola versione da operatore binario. Poiché \\diamond è un operatore binario, usarlo come operatore prefisso davanti a una formula produce una spaziatura strana; usate \\Diamond oppure racchiudetelo come {\\diamond}p. È diverso da \\diamondsuit, il seme di quadri delle carte, che è un simbolo ordinario.",
  },
  "big-circle": {
    name: "Cerchio grande",
    meaning: "Operatore binario a cerchio grande vuoto, più grande di \\circ, usato per prodotti speciali e diagrammi.",
    usage: "\\bigcirc è soprattutto un simbolo a libera scelta per operazioni definite ad hoc, per esempio un prodotto di tipo scatola, oppure nella logica temporale, dove un cerchio indica l'operatore di istante successivo, \\bigcirc p. È un operatore binario, non un grande operatore con limiti, quindi non cresce nelle formule in evidenza come fa \\bigcup. Per cerchiare un simbolo, sovrapporre \\bigcirc è scomodo; un nodo cerchiato di un pacchetto grafico o \\textcircled funzionano meglio. Per la composizione lo standard è il più piccolo \\circ. Per un operatore cerchiato come \\oplus o \\otimes, i comandi dedicati sono più adatti delle sovrapposizioni.",
  },
  "triangle-up": {
    name: "Triangolo verso l'alto",
    meaning: "Triangolo vuoto con la punta in alto, usato per i triangoli in geometria, per la differenza simmetrica e per il laplaciano.",
    usage: "La geometria scrive \\triangle ABC per un triangolo, la teoria degli insiemi scrive A \\triangle B per la differenza simmetrica, e alcuni testi lo usano per l'operatore di Laplace, anche se \\Delta o \\nabla^2 sono più comuni. In LaTeX standard \\triangle è un simbolo ordinario, non un operatore binario, quindi in A \\triangle B può convenire \\mathbin{\\triangle} per una spaziatura corretta, oppure \\bigtriangleup, che è già un operatore binario. È più grande e di forma diversa rispetto alla delta maiuscola greca \\Delta.",
  },
  "triangle-down": {
    name: "Triangolo verso il basso",
    meaning: "Piccolo triangolo vuoto con la punta in basso, un simbolo ordinario e non un operatore.",
    usage: "\\triangledown è un triangolo più piccolo, con spaziatura ordinaria, rivolto verso il basso, usato come decorazione o contrassegno in alcune notazioni. Non è lo stesso di \\nabla, l'operatore gradiente, che ha una forma diversa ed è quello che serve per \\nabla f; né è \\bigtriangledown, che è un operatore binario più grande. Se usate \\triangledown come operazione, racchiudetelo in \\mathbin per avere la spaziatura da operatore. Per le versioni piene è disponibile \\blacktriangledown. Negli articoli compare di rado, soprattutto come riferimento a un marcatore di grafico nelle didascalie o come operazione definita ad hoc.",
  },
  "square": {
    name: "Quadrato",
    meaning: "Simbolo del quadrato vuoto, usato per il dalembertiano, la necessità modale e il segno di fine dimostrazione.",
    usage: "I fisici scrivono \\square per l'operatore d'onda di d'Alembert, \\square = \\partial_t^2/c^2 - \\nabla^2, la logica modale usa \\square p per “necessariamente p” (spesso come \\Box), e il quadrato vuoto funge da segno di fine dimostrazione. Nelle dimostrazioni di amsthm il segno viene inserito automaticamente tramite \\qedsymbol, quindi raramente lo digiterete voi. \\square è un simbolo ordinario; \\blacksquare dà la versione piena. Molti testi di logica scrivono \\Box per la necessità; i due glifi sono quasi identici. Usato come operatore davanti a un campo, non richiede spaziatura aggiuntiva.",
  },
  "wedge": {
    name: "Simbolo a cuneo",
    meaning: "Operatore binario a cuneo, per la congiunzione logica, il prodotto esterno e l'estremo inferiore nei reticoli.",
    usage: "La geometria differenziale costruisce forme come dx \\wedge dy, con \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega. La logica usa p \\wedge q per la congiunzione (\\land ne è un alias), la teoria dei reticoli scrive a \\wedge b per l'estremo inferiore e i probabilisti scrivono s \\wedge t per \\min(s, t). È un operatore binario con spaziatura media. Per congiunzioni su un insieme di indici usate il grande operatore \\bigwedge. In topologia X \\wedge Y è il prodotto ridotto di spazi puntati. Non confondetelo con l'accento circonflesso \\hat o \\widehat.",
  },
  "vee": {
    name: "Simbolo a V",
    meaning: "Operatore binario a V, per la disgiunzione logica, l'estremo superiore nei reticoli e la somma a un punto di spazi.",
    usage: "La logica scrive p \\vee q per la disgiunzione inclusiva, e \\lor è un alias identico. La teoria dei reticoli usa a \\vee b per l'estremo superiore, la probabilità scrive s \\vee t per \\max(s, t) e la topologia usa X \\vee Y per la somma a un punto, che incolla gli spazi in un punto base. Per molti termini usate \\bigvee_{i} p_i. È diverso dalla lettera v e da \\veebar, che alcuni testi usano per la disgiunzione esclusiva. Il simbolo ha la spaziatura di un operatore binario.",
  },
  "amalgamation": {
    name: "Amalgama",
    meaning: "Operatore di amalgama, usato per le unioni disgiunte e i coprodotti.",
    usage: "La teoria delle categorie e la topologia scrivono X \\amalg Y per il coprodotto o l'unione disgiunta, e la teoria dei gruppi usa G \\ast_H K per i prodotti liberi amalgamati, con \\amalg in alcuni testi. \\amalg è un operatore binario. Per la versione indicizzata con limiti usate il grande operatore \\coprod_{i \\in I} X_i, che ha lo stesso aspetto ma si ingrandisce nelle formule in evidenza. Alternative per l'unione disgiunta sono \\sqcup e \\bigsqcup, di forma più piatta e più comuni nella teoria degli insiemi.",
  },
  "dagger": {
    name: "Obelo (croce)",
    meaning: "Simbolo dell'obelo, usato soprattutto in apice per gli aggiunti e i coniugati hermitiani.",
    usage: "La meccanica quantistica scrive A^\\dagger per l'aggiunto hermitiano, quindi a^\\dagger è l'operatore di creazione, e l'algebra lineare usa in alcuni testi A^\\dagger per la pseudoinversa di Moore-Penrose (l'alternativa è A^+). L'obelo contrassegna anche le note a piè di pagina o voci particolari nelle tabelle. In matematica è un operatore binario, ma in apice la sua spaziatura è irrilevante. In modalità testo usate \\textdagger. La versione doppia \\ddagger si usa per le note di secondo livello e per alcune notazioni speciali. La teoria quantistica dei campi lo usa di continuo per gli operatori di creazione e di distruzione.",
  },
  "double-dagger": {
    name: "Doppio obelo (doppia croce)",
    meaning: "Simbolo del doppio obelo, usato come richiamo di nota e talvolta come decorazione in apice.",
    usage: "\\ddagger è in molti stili il secondo simbolo di nota dopo \\dagger, per indicare affiliazioni o note di tabella. In matematica decora talvolta operatori, per esempio uno stato di transizione X^\\ddagger nella cinetica chimica (energia di attivazione \\Delta G^\\ddagger). Come comando matematico è un operatore binario, ma in apice la spaziatura non conta. In modalità testo usate \\textdaggerdbl. Poiché il suo significato non è standardizzato, spiegatelo dove lo usate per la prima volta. Posto in apice, non richiede graffe: X^\\ddagger funziona direttamente.",
  },
  "wreath-product": {
    name: "Prodotto intrecciato",
    meaning: "Operatore di prodotto intrecciato, scritto tra due gruppi.",
    usage: "La teoria dei gruppi scrive G \\wr H per il prodotto intrecciato, per esempio il gruppo iperottaedrale \\mathbb{Z}_2 \\wr S_n, e i sottogruppi di Sylow dei gruppi simmetrici sono prodotti intrecciati iterati. Il simbolo è una piccola linea verticale ondulata composta come operatore binario. Somiglia un po' a una tilde ruotata, ma a differenza della relazione \\sim ha la spaziatura di un operatore binario. Alcuni autori scrivono i fattori nell'ordine opposto, quindi indicate quale gruppo agisce. I gruppi del cubo di Rubik e i gruppi di automorfismi degli alberi sono esempi classici in cui compaiono prodotti intrecciati.",
  },
  "set-minus": {
    name: "Differenza insiemistica",
    meaning: "Operatore di differenza insiemistica: A \\setminus B è l'insieme degli elementi di A che non appartengono a B.",
    usage: "Usate \\setminus per la differenza insiemistica, A \\setminus B, e per la rimozione di elementi, \\mathbb{R} \\setminus \\{0\\}. È un operatore binario con la spaziatura corretta, mentre \\backslash ha lo stesso aspetto ma è un simbolo ordinario usato per quozienti come G \\backslash X (classi laterali sinistre). Una variante più piccola, \\smallsetminus, si adatta meglio ad alcuni font. Alcuni autori scrivono invece A - B, ma \\setminus evita la confusione con la sottrazione. Combinato con \\complement: A \\setminus B = A \\cap B^\\complement. Nei quozienti come G \\backslash X / H per le doppie classi laterali, mantenete invece \\backslash per il quoziente.",
  },
};

export default text;
