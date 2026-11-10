import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "Vettore in grassetto",
    meaning: "Lettera in grassetto dritto, la convenzione tipografica abituale per un vettore come x in R^n.",
    usage: "I testi di algebra lineare e gli articoli di fisica indicano i vettori in grassetto, come in A\\mathbf{x} = \\mathbf{b}. \\mathbf agisce solo sulle lettere latine e sulle cifre; le lettere greche come \\alpha restano invariate, quindi per queste usate \\boldsymbol{\\alpha}. Notate che \\mathbf produce un grassetto dritto, mentre \\boldsymbol{x} produce un grassetto corsivo; lo stile ISO preferisce il grassetto corsivo per i vettori, mentre molti manuali usano quello dritto. Tra le alternative ci sono \\vec{x} con la freccia, comune nella fisica di base, e la sottolineatura negli appunti in stile manoscritto. Scegliete una convenzione e applicatela in modo coerente, idealmente tramite una macro, così da poterla cambiare in un solo punto.",
  },
  "transpose": {
    name: "Trasposta",
    meaning: "Trasposta della matrice A scritta con il simbolo \\top, che scambia righe e colonne.",
    usage: "Usare \\top come apice dà un segno pulito, dritto e a forma di T, che non si può confondere con una variabile chiamata T; per questo molti articoli di machine learning e di statistica scrivono \\mathbf{x}^{\\top}\\mathbf{y} oppure (AB)^{\\top} = B^{\\top}A^{\\top}. A^T ha un aspetto simile ma usa una T corsiva, e \\intercal è una terza opzione, più bassa e più stretta. Qualunque scelta facciate, definite una macro breve, così che cambiare stile in seguito richieda la modifica di una sola riga. Per le matrici complesse la trasposta coniugata si scrive di solito A^{*} o A^{H}, mentre in fisica è comune \\dagger.",
  },
  "transpose-t": {
    name: "Trasposta (T)",
    meaning: "Trasposta di A indicata con una T corsiva in apice, la forma più comune nei manuali.",
    usage: "Scrivere A^T è rapido e compreso da tutti: le equazioni normali dei minimi quadrati A^T A\\mathbf{x} = A^T\\mathbf{b} compaiono così nella maggior parte dei libri di algebra lineare. Lo svantaggio è l'ambiguità quando T è anche una variabile, come un orizzonte temporale o una temperatura, perché A^T potrebbe allora essere letto come una potenza. In tal caso passate ad A^{\\top} o alla forma dritta A^{\\mathsf{T}}. Le graffe servono non appena l'apice contiene più di un elemento, quindi l'inversa della trasposta si scrive A^{-T} e non A^-T. Una matrice simmetrica è una matrice con A^T = A.",
  },
  "inverse": {
    name: "Matrice inversa",
    meaning: "Inversa della matrice quadrata A, la matrice il cui prodotto con A è l'identità.",
    usage: "Soddisfa AA^{-1} = A^{-1}A = I ed esiste solo quando \\det(A) \\neq 0. Le graffe sono obbligatorie: A^-1 metterebbe in apice solo il segno meno lasciando l'1 sulla linea di base. Per una matrice 2 per 2, la formula esplicita con \\frac{1}{ad-bc} moltiplicato per l'aggiunta classica viene spesso composta per intero con bmatrix. Negli articoli di analisi numerica i lettori sanno che l'inversa raramente viene calcolata in modo esplicito, quindi scrivere \\mathbf{x} = A^{-1}\\mathbf{b} come notazione va benissimo. Le pseudoinverse si indicano con A^{+} o A^{\\dagger}, e (AB)^{-1} = B^{-1}A^{-1} inverte l'ordine dei fattori.",
  },
  "determinant": {
    name: "Determinante",
    meaning: "Determinante di una matrice quadrata A, lo scalare che ne esprime il fattore di scala con segno dei volumi.",
    usage: "\\det è un operatore predefinito, quindi viene stampato in tondo con la spaziatura corretta; digitando det(A) si otterrebbero tre variabili distinte in corsivo. Tra le identità fondamentali ci sono \\det(AB) = \\det(A)\\det(B) e \\det(A^{-1}) = 1/\\det(A). A differenza di \\sin, \\det può ricevere limiti posti sotto di sé in stile display, come \\lim. Per una matrice esplicita l'ambiente vmatrix disegna direttamente le barre verticali, quindi \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc si legge in modo naturale. Le parentesi sono facoltative quando l'argomento è una sola lettera, \\det A, come per gli altri operatori.",
  },
  "trace": {
    name: "Traccia",
    meaning: "Traccia di A, la somma dei suoi elementi diagonali, scritta con l'etichetta 'tr' in tondo.",
    usage: "La traccia compare in identità come \\operatorname{tr}(AB) = \\operatorname{tr}(BA) e nella norma di Frobenius \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A). Con \\text{tr} si ottengono lettere dritte, ma il comando eredita il font del testo circostante, diventando corsivo dentro un teorema, e non aggiunge la spaziatura da operatore. La scelta più robusta è \\operatorname{tr}, oppure un \\DeclareMathOperator{\\tr}{tr} globale nel preambolo, così che \\tr A sia spaziato correttamente anche senza parentesi. I fisici scrivono spesso Tr con la maiuscola, soprattutto per le matrici densità. La traccia è anche uguale alla somma degli autovalori contati con la loro molteplicità.",
  },
  "rank": {
    name: "Rango",
    meaning: "Rango di A: la dimensione del suo spazio delle colonne, scritta con un'etichetta in tondo.",
    usage: "Il teorema del rango si scrive \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n, e una matrice quadrata è invertibile esattamente quando ha rango massimo. \\text{rank} dà lettere dritte, ma il corsivo di un ambiente teorema può contaminarlo e non ha la spaziatura da operatore. Preferite \\operatorname{rank}(A), oppure dichiarate una volta \\DeclareMathOperator{\\rank}{rank} e scrivete \\rank A. Non esiste un comando \\rank predefinito, quindi usarlo senza definirlo provoca un errore di sequenza di controllo non definita. L'approssimazione a rango basso tramite SVD troncata è un caso frequente in cui lo comporrete.",
  },
  "norm": {
    name: "Norma",
    meaning: "Doppie barre verticali attorno a x, che ne indicano la norma, la lunghezza o il modulo.",
    usage: "Usare \\lVert e \\rVert invece di \\| su entrambi i lati indica a LaTeX quale barra apre e quale chiude, con una spaziatura corretta in espressioni come \\lVert -x \\rVert, dove \\|-x\\| tratterebbe il meno come operatore binario. Il pedice seleziona la norma: \\lVert x \\rVert_2 per quella euclidea, \\lVert x \\rVert_1, \\lVert x \\rVert_\\infty, oppure \\lVert A \\rVert_F per quella di Frobenius. Per contenuti alti usate \\left\\lVert ... \\right\\rVert. La disuguaglianza triangolare \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert è un uso tipico, e una macro \\norm fa risparmiare parecchia digitazione negli articoli lunghi.",
  },
  "inner-product": {
    name: "Prodotto interno",
    meaning: "Parentesi angolari attorno a due vettori, che ne indicano il prodotto interno.",
    usage: "Il prodotto interno generalizza il prodotto scalare canonico: \\langle x, y \\rangle = \\sum_i x_i y_i in R^n, e la disuguaglianza di Cauchy-Schwarz |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert è l'esempio classico. Non digitate mai i segni di minore e maggiore al loro posto: < e > sono relazioni, con una spaziatura ampia e un angolo sbagliato. Per argomenti grandi, \\left\\langle ... \\right\\rangle ridimensiona le parentesi. In meccanica quantistica le stesse parentesi formano la notazione bra-ket, \\langle \\psi | \\phi \\rangle, con una barra al centro. Alcuni libri scrivono (x, y) o x \\cdot y per la stessa quantità.",
  },
  "kronecker-delta": {
    name: "Delta di Kronecker",
    meaning: "Delta di Kronecker: vale 1 quando gli indici i e j coincidono e 0 altrimenti.",
    usage: "Descrive la matrice identità elemento per elemento, I_{ij} = \\delta_{ij}, ed esprime l'ortonormalità di una base, \\langle e_i, e_j \\rangle = \\delta_{ij}. Nella notazione a indici agisce come operatore di sostituzione: \\sum_j \\delta_{ij} a_j = a_i, il che semplifica i calcoli tensoriali. Non confondetela con la delta di Dirac \\delta(x), una distribuzione su variabili continue, anche se entrambe usano la \\delta minuscola. Le graffe attorno a ij mantengono entrambi gli indici nel pedice; \\delta_ij abbasserebbe solo la i lasciando la j sulla linea di base. Nel calcolo tensoriale con indici misti scrivete invece \\delta^i_j.",
  },
  "identity-matrix": {
    name: "Matrice identità",
    meaning: "La matrice identità n per n, con uno sulla diagonale e zero altrove.",
    usage: "Il pedice indica la dimensione, quindi per una matrice A di dimensioni m per n valgono sia AI_n = A sia I_m A = A, con identità diverse sui due lati. Quando la dimensione è ovvia basta una semplice I; alcuni autori preferiscono la \\mathbf{I} in grassetto o scrivono E, soprattutto nei testi europei meno recenti. Per dimensioni di più caratteri aggiungete le graffe: I_{n+1} o I_{10}, perché I_10 abbasserebbe solo l'1. Il polinomio caratteristico \\det(A - \\lambda I_n) è il contesto in cui compare più spesso, e \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} scrive esplicitamente I_2.",
  },
  "zero-matrix": {
    name: "Matrice nulla",
    meaning: "Zero in grassetto, che indica il vettore nullo o la matrice nulla, a differenza dello scalare 0.",
    usage: "Il grassetto distingue l'elemento neutro dell'addizione di uno spazio vettoriale dal numero zero, come in A\\mathbf{x} = \\mathbf{0} per un sistema omogeneo o in \\mathbf{v} + \\mathbf{0} = \\mathbf{v}. \\mathbf funziona sulle cifre, quindi questa è la forma più semplice; \\boldsymbol{0} dà lo stesso risultato nella maggior parte dei font. Per una matrice nulla di dimensione esplicita scrivete \\mathbf{0}_{m \\times n} o una O maiuscola, O_{m \\times n}. Molti articoli rinunciano al grassetto e scrivono 0 quando il contesto chiarisce il tipo, il che è accettabile purché coerente. Adottate lo stesso stile di grassetto che usate per gli altri vettori.",
  },
  "matrix": {
    name: "Matrice",
    meaning: "Ambiente bmatrix che compone una matrice tra parentesi quadre, con & tra le colonne.",
    usage: "Gli elementi di una riga sono separati da &, le righe terminano con \\\\, e le parentesi si adattano al contenuto, quindi non serve \\left[. Gli ambienti affini cambiano solo i delimitatori: pmatrix usa le parentesi tonde, vmatrix le barre verticali per i determinanti, Vmatrix le doppie barre e il semplice matrix nessun delimitatore. L'ambiente array è l'alternativa più vecchia: richiede una specifica delle colonne come {cc} ma consente linee verticali e allineamento per colonna. Per matrici generiche riempite i vuoti con \\cdots, \\vdots e \\ddots, come in a_{11} & \\cdots & a_{1n}. In linea, smallmatrix dentro \\bigl[ \\bigr] evita di allargare la riga.",
  },
  "column-vector": {
    name: "Vettore colonna",
    meaning: "pmatrix a una colonna, che impila x sopra y come vettore colonna tra parentesi tonde.",
    usage: "Ogni \\\\ inizia una nuova riga, quindi una sola colonna di elementi diventa un vettore verticale, il modo abituale di scrivere coordinate in R^2 o il termine noto di un sistema lineare. Le parentesi tonde (pmatrix) e quadre (bmatrix) sono ugualmente diffuse; scegliete uno stile per tutto il documento. Per risparmiare spazio verticale nel testo corrente scrivete invece una riga trasposta, (x, y)^{\\top}. Per vettori lunghi usate \\vdots in una riga centrale, come in x_1 \\\\ \\vdots \\\\ x_n. I vettori colonna in linea risultano compressi e allontanano le righe; smallmatrix è l'alternativa compatta quando non se ne può fare a meno.",
  },
};

export default text;
