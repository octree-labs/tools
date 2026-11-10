import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "Combinazione (nCr)",
    meaning: "Numero di modi di scegliere k elementi tra n senza tener conto dell'ordine, letto n su k.",
    usage: "Il valore è C(n, k) = \\frac{n!}{k!(n-k)!}, identico al coefficiente binomiale \\binom{n}{k}, che è la notazione preferita nella maggior parte della matematica. \\binom adatta la propria dimensione al contesto; \\dbinom forza la dimensione da display e \\tbinom quella da testo. Evitate in LaTeX la sintassi del TeX di base {n \\choose k}, sconsigliata da amsmath con un avviso. Altre notazioni sono nCr, {}^nC_k e C^k_n, quest'ultima comune nei testi francesi con gli indici scambiati, quindi verificate la convenzione. La regola di Pascal, C(n, k) = C(n-1, k-1) + C(n-1, k), genera il triangolo di Tartaglia.",
  },
  "permutation-npr": {
    name: "Disposizione (nPr)",
    meaning: "Numero di disposizioni ordinate di k elementi scelti tra n elementi distinti, letto disposizioni di n elementi a k a k.",
    usage: "Le disposizioni contano le selezioni ordinate: P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1), quindi P(5, 2) = 20. Il valore coincide con il fattoriale decrescente (n)_k o n^{\\underline{k}} ed è legato alle combinazioni da P(n, k) = k!\\,C(n, k). Tra le alternative che incontrerete ci sono nPr, {}^nP_k e A^k_n (arrangements) nei testi francesi e cinesi. Poiché P(\\cdot) indica anche la probabilità, in un capitolo di probabilità il lettore potrebbe fraintendere P(n, k); passare a (n)_k o n^{\\underline{k}} evita il problema. Usate \\cdots tra i fattori di un prodotto.",
  },
  "multinomial": {
    name: "Coefficiente multinomiale",
    meaning: "Coefficiente multinomiale: modi di suddividere n elementi in gruppi di dimensioni da k_1 a k_m, le cui dimensioni sommano a n.",
    usage: "Il valore è n! / (k_1!\\,k_2!\\cdots k_m!), con k_1 + \\cdots + k_m = n, e fornisce i coefficienti del teorema multinomiale, (x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}. Conta gli anagrammi distinti di una parola con lettere ripetute, per esempio 11!/(4!\\,4!\\,2!\\,1!) per MISSISSIPPI. La costruzione riutilizza \\binom con un elenco separato da virgole nella posizione inferiore; il caso binomiale \\binom{n}{k} è il caso particolare \\binom{n}{k, n-k}. Usate \\ldots tra le virgole, non \\cdots.",
  },
  "falling-factorial": {
    name: "Fattoriale decrescente",
    meaning: "Fattoriale decrescente in notazione combinatoria: n(n-1)...(n-k+1), il prodotto di k fattori decrescenti.",
    usage: "(n)_k conta le funzioni iniettive da un insieme di k elementi a uno di n elementi e per gli interi vale n!/(n-k)!. Attenzione: questa notazione alla Pochhammer è ambigua, perché nelle funzioni speciali (a)_n indica il fattoriale crescente. La notazione di Knuth, n^{\\underline{k}} per il decrescente e n^{\\overline{k}} per il crescente, elimina l'ambiguità ed è usata in Concrete Mathematics; si scrive con \\underline e \\overline nell'esponente. I fattoriali decrescenti si convertono in potenze ordinarie tramite i numeri di Stirling: x^n = \\sum_k S(n,k)(x)_k. Definite esplicitamente la vostra notazione nell'articolo.",
  },
  "rising-factorial": {
    name: "Fattoriale crescente",
    meaning: "Fattoriale crescente scritto con un apice tra parentesi: n(n+1)...(n+k-1).",
    usage: "Questa notazione, comune in combinatoria e probabilità, indica il fattoriale crescente n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n). È ambigua: in analisi f^{(k)} è la derivata k-esima, e alcuni autori usano invece x^{(k)} per il fattoriale decrescente. Il n^{\\overline{k}} di Knuth o il simbolo di Pochhammer (n)_k delle funzioni speciali sono alternative, anche se quest'ultimo entra in conflitto con il fattoriale decrescente combinatorio. Le parentesi devono stare dentro le graffe dell'apice, ^{(k)}. I fattoriali crescenti contano i modi ordinati di collocare k palline in n tubi ordinati.",
  },
  "stirling-first-kind": {
    name: "Numero di Stirling di prima specie",
    meaning: "Numero di Stirling di prima specie senza segno: permutazioni di n elementi con esattamente k cicli, in notazione con parentesi quadre.",
    usage: "\\genfrac accetta sei argomenti: delimitatore sinistro, delimitatore destro, spessore della linea, stile, numeratore, denominatore. Impostando lo spessore a 0pt si elimina la linea di frazione e si ottiene la notazione impilata tra parentesi quadre di Concrete Mathematics. Questi numeri soddisfano la ricorrenza {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1} e la loro somma su k vale n!. Invece di ripetere la chiamata a sei argomenti, definite una macro come \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}. Il quarto argomento vuoto lascia che la dimensione segua il contesto; usate 0 per lo stile display o 1 per lo stile testo.",
  },
  "stirling-second-kind": {
    name: "Numero di Stirling di seconda specie",
    meaning: "Numero di Stirling di seconda specie: modi di partizionare un insieme di n elementi in k blocchi non vuoti, in notazione con parentesi graffe.",
    usage: "Qui \\genfrac disegna come delimitatori le graffe con escape \\{ e \\}, con una linea di 0pt, producendo la notazione con graffe resa popolare da Knuth. I numeri obbediscono a S(n+1, k) = k\\,S(n, k) + S(n, k-1), la loro somma su k dà il numero di Bell B_n e convertono le potenze in fattoriali decrescenti: x^n = \\sum_k {n \\brace k}(x)_k. Poiché le graffe richiedono l'escape, una barra rovesciata mancante è il tipico errore di compilazione. Racchiudetelo in una macro come \\stirlingII{n}{k}. La notazione alternativa S(n, k) è più semplice da scrivere e comune nei testi di informatica.",
  },
  "bell-number": {
    name: "Numero di Bell",
    meaning: "Numero di Bell B_n: il numero totale di modi di partizionare un insieme di n elementi in blocchi non vuoti.",
    usage: "I numeri di Bell iniziano con 1, 1, 2, 5, 15, 52, 203 e sono uguali alla somma dei numeri di Stirling di seconda specie, B_n = \\sum_k S(n, k). Soddisfano B_{n+1} = \\sum_k \\binom{n}{k} B_k e la formula di Dobinski B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}. Un conflitto di notazione da tenere d'occhio: B_n indica anche i numeri di Bernoulli, che compaiono nella formula di Eulero-Maclaurin e nei valori della funzione zeta, quindi chi fa analisi potrebbe dover rinominarne uno. Le graffe sono necessarie quando l'indice è un'espressione, come in B_{n+1}. Sono i momenti di una distribuzione di Poisson di media 1.",
  },
  "fibonacci": {
    name: "Numero di Fibonacci",
    meaning: "Numero di Fibonacci F_n, definito da F_0 = 0, F_1 = 1 e F_n = F_{n-1} + F_{n-2}.",
    usage: "I numeri di Fibonacci iniziano con 0, 1, 1, 2, 3, 5, 8, 13 e hanno la forma chiusa F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}, la formula di Binet, dove \\varphi = (1+\\sqrt5)/2 è la sezione aurea. Contano le piastrellature di una striscia 1 \\times n con quadrati e domino (ne esistono F_{n+1}) e compaiono nell'analisi dell'algoritmo di Euclide e degli heap di Fibonacci. Alcuni testi iniziano l'indicizzazione con F_1 = F_2 = 1, quindi dichiarate i vostri valori iniziali. Usate \\varphi per la sezione aurea come fa la maggior parte degli autori; \\phi è la variante diritta. Le graffe sono necessarie per F_{n-1}.",
  },
  "partition": {
    name: "Funzione di partizione",
    meaning: "Funzione di partizione p(n): il numero di modi di scrivere n come somma di interi positivi, senza tener conto dell'ordine.",
    usage: "Per esempio, p(4) = 5 perché 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. La funzione generatrice di Eulero è \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}, e Hardy e Ramanujan trovarono l'andamento asintotico p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}. Le congruenze di Ramanujan includono p(5k+4) \\equiv 0 \\pmod 5. La p minuscola entra in conflitto con la notazione delle densità di probabilità e con i numeri primi, quindi definitela nei contesti misti. Le versioni ristrette si scrivono p_k(n) o p(n, k) per le partizioni in al più k parti.",
  },
  "derangement": {
    name: "Dismutazione",
    meaning: "Numero di dismutazioni D_n: permutazioni di n elementi in cui nessun elemento resta nella sua posizione originale.",
    usage: "D_n conta le permutazioni senza punti fissi e inizia con 1, 0, 1, 2, 9, 44, 265. Il principio di inclusione-esclusione dà D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}, quindi D_n è l'intero più vicino a n!/e e la probabilità che una permutazione casuale sia una dismutazione tende a 1/e. Tra le ricorrenze c'è D_n = (n-1)(D_{n-1} + D_{n-2}). L'esempio classico è il problema dei cappelli al guardaroba. Lo stesso numero si scrive anche !n, il subfattoriale; D_n è più leggibile nel testo corrente. Notate che D_n indica anche il gruppo diedrale in algebra, quindi chiarite se compaiono entrambi.",
  },
  "double-factorial": {
    name: "Semifattoriale",
    meaning: "Semifattoriale (doppio fattoriale): il prodotto di tutti gli interi da n fino a 1 o 2 che hanno la stessa parità di n.",
    usage: "Per n dispari, n!! = n(n-2)\\cdots 3 \\cdot 1, quindi 7!! = 105; per n pari termina con 2, quindi 8!! = 384. Non è (n!)!, un fraintendimento frequente, quindi una breve definizione è utile. Tra le identità ci sono (2n)!! = 2^n n! e (2n-1)!! = \\frac{(2n)!}{2^n n!}, che conta gli accoppiamenti perfetti su 2n punti e compare nei momenti gaussiani, \\mathbb{E}[X^{2n}] = (2n-1)!! per una normale standard. In TeX ! è un simbolo di chiusura, quindi n!! non richiede spaziature particolari. Per convenzione 0!! = (-1)!! = 1.",
  },
  "subfactorial": {
    name: "Subfattoriale",
    meaning: "Subfattoriale di n, una notazione con punto esclamativo prefisso per il numero di dismutazioni di n oggetti.",
    usage: "!n è uguale a D_n, il numero di permutazioni senza punti fissi: !4 = 9 e !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor per n \\geq 1. Il punto esclamativo prefisso è compatto ma facile da fraintendere, soprattutto dopo una variabile, dove m!n sembra m fattoriale per n. Scrivere D_n, o aggiungere un raggruppamento esplicito, evita il problema. In TeX il punto esclamativo appartiene alla classe di chiusura, quindi dopo una relazione binaria come = viene composto senza spazio aggiuntivo, come desiderato. Alcuni autori usano il punto esclamativo rovesciato o n\\text{¡}, ma questa notazione è rara.",
  },
  "pochhammer": {
    name: "Simbolo di Pochhammer",
    meaning: "Simbolo di Pochhammer: nelle funzioni speciali, il fattoriale crescente a(a+1)...(a+n-1).",
    usage: "Nella letteratura sulle funzioni ipergeometriche e speciali, (a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a), con (a)_0 = 1. È il mattone di base della serie {}_pF_q, per esempio {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}. I combinatoristi usano lo stesso (x)_n per il fattoriale decrescente, quindi questo è uno dei conflitti di notazione più noti; la DLMF e la maggior parte dei riferimenti sulle funzioni speciali usano il significato crescente. Il a^{\\overline{n}} di Knuth non è ambiguo se il vostro pubblico è misto. Qui le parentesi sono ordinarie, dimensionate sull'argomento.",
  },
};

export default text;
