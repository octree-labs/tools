import type { SymbolPageTranslations } from "../types";

/** Italian copy for /it/symbols/finance/<slug>. */
const text: SymbolPageTranslations = {
  "dollar-sign": {
    name: "Simbolo del dollaro",
    meaning: "Simbolo del dollaro preceduto da escape: stampa un $ letterale invece di aprire o chiudere la modalità matematica.",
    usage: "In LaTeX un $ senza escape attiva o disattiva la modalità matematica, quindi i prezzi richiedono \\$, come in \\$19.99. Funziona sia in modalità testo sia in modalità matematica, il che rende immediate formule come \\$100 \\times 1.05 = \\$105. Negli strumenti basati su Markdown e nei renderer KaTeX vale lo stesso escape. Per tabelle piene di importi, il pacchetto siunitx allinea i numeri sul separatore decimale mentre il simbolo resta nell'intestazione della colonna. Scrivere USD evita ambiguità quando in uno stesso documento compaiono più valute chiamate dollaro, come il dollaro canadese o quello australiano.",
  },
  "euro-sign": {
    name: "Simbolo dell'euro",
    meaning: "Simbolo della valuta euro inserito come carattere letterale dentro \\text, per prezzi e importi finanziari in euro.",
    usage: "Incollare il carattere € dentro \\text funziona quando il documento è in UTF-8 e il font contiene il glifo, cosa che vale per la maggior parte delle configurazioni moderne. Con pdfLaTeX la forma a comando è \\texteuro, mentre \\euro produce il disegno ufficiale, a geometria fissa. La posizione del simbolo cambia da paese a paese: in Germania e in Francia si scrive 10 €, mentre in Irlanda e nei Paesi Bassi spesso lo si antepone. Nelle tabelle conviene indicare gli importi in una colonna con il simbolo nell'intestazione invece di ripeterlo in ogni cella. Con XeLaTeX e LuaLaTeX il carattere proviene direttamente dal font scelto.",
  },
  "pound-sterling-sign": {
    name: "Simbolo della sterlina",
    meaning: "Simbolo della sterlina come carattere letterale in \\text, usato per importi in sterline britanniche.",
    usage: "Digitare il carattere £ direttamente dentro \\text funziona nei documenti UTF-8. LaTeX offre anche il comando predefinito \\pounds, valido in testo e in matematica, ma con i font Computer Modern predefiniti proviene dal corsivo e appare inclinato, il che sorprende molti utenti; cambiando la codifica dei font si ottiene un glifo dritto. Secondo la convenzione britannica il simbolo precede l'importo senza spazio, come in £1,500. Lo stesso glifo serve anche per altre valute chiamate sterlina o lira. Nelle tabelle finanziarie allineate sul separatore decimale e tenete il simbolo nell'intestazione per ridurre l'ingombro.",
  },
  "yen-sign": {
    name: "Simbolo dello yen",
    meaning: "Simbolo dello yen o dello yuan inserito come carattere letterale dentro \\text, per importi in yen giapponesi e yuan cinesi.",
    usage: "Lo stesso glifo serve sia per lo yen giapponese sia per lo yuan renminbi cinese, ed è per questo che gli articoli aggiungono spesso JPY o CNY per eliminare l'ambiguità. Digitare ¥ dentro \\text funziona nei documenti UTF-8 con un font che lo contiene; con pdfLaTeX l'alternativa a comando è \\textyen. Gli importi in yen hanno raramente decimali, perché nell'uso quotidiano la valuta non ha sottounità, quindi \\text{¥}1{,}200 è tipico. Alcuni font lo disegnano con una sola barra trasversale e altri con due; entrambe le forme sono accettate, ma mantenete lo stesso font in tutto il documento.",
  },
  "indian-rupee-sign": {
    name: "Simbolo della rupia indiana",
    meaning: "Simbolo della rupia indiana come carattere letterale in \\text, usato per importi in rupie indiane.",
    usage: "Il simbolo della rupia è stato adottato dall'India nel 2010, quindi molti font più vecchi ne sono privi, compreso il Computer Modern predefinito; con pdfLaTeX spesso non stampa nulla. La strada più affidabile è compilare con XeLaTeX o LuaLaTeX usando un font come Noto Sans o un font di sistema recente che includa il glifo. Se il glifo non è disponibile, Rs. o INR sono alternative testuali accettate. La numerazione indiana raggruppa le cifre in lakh e crore, per esempio 1,00,000; in modalità matematica usate {,} perché la virgola non aggiunga uno spazio indesiderato dopo di sé.",
  },
  "bitcoin-sign": {
    name: "Simbolo del bitcoin",
    meaning: "Simbolo del bitcoin inserito come carattere letterale dentro \\text, per importi espressi in bitcoin.",
    usage: "Il glifo del bitcoin è più recente della maggior parte dei font, quindi pdfLaTeX con i font standard di solito non riesce a stamparlo; la soluzione pratica è XeLaTeX o LuaLaTeX con un font che lo includa, oppure un font di icone. Molti articoli di finanza ed economia scrivono semplicemente BTC, che non dà mai problemi di font, e usano sat per l'unità più piccola, dove 1 BTC equivale a 100,000,000 satoshi. Gli importi in bitcoin hanno spesso fino a otto cifre decimali, quindi l'allineamento decimale nelle tabelle conta più del solito. Controllate con attenzione il PDF, perché un glifo mancante spesso fallisce in silenzio, con un semplice avviso nel log.",
  },
  "percent-sign": {
    name: "Simbolo di percentuale",
    meaning: "Simbolo di percentuale preceduto da escape: stampa % invece di aprire un commento LaTeX.",
    usage: "In LaTeX un % isolato commenta il resto della riga, causa classica di testo che scompare, quindi ogni percentuale richiede \\%. Funziona in modalità testo e matematica, come in un tasso d'interesse del 5\\% o in r = 3.5\\%. Le convenzioni sullo spazio variano: l'inglese scrive di solito 5% senza spazio, mentre alcune convenzioni europee e del SI inseriscono uno spazio sottile, 5\\,\\%. siunitx gestisce la cosa in modo coerente se componete molte grandezze. Quando parlate di punti percentuali, scrivete pp o punti percentuali per distinguere un aumento dal 4% al 5% da una variazione relativa dell'1%.",
  },
  "per-mille-sign": {
    name: "Simbolo per mille",
    meaning: "Simbolo per mille, cioè parti per mille, inserito come carattere letterale dentro \\text.",
    usage: "Il per mille esprime tassi in parti per mille, quindi 5‰ equivale allo 0.5%. Compare nelle tavole assicurative e di mortalità, nella salinità e nei rapporti isotopici come \\delta^{13}C in geochimica, e nei limiti di alcolemia di diversi paesi. Con pdfLaTeX la forma a comando è \\textperthousand; in matematica racchiudetelo in \\text come qui. Non confondetelo con il punto base, che corrisponde a parti per diecimila e ha un proprio glifo, raramente supportato. Se il font del lettore potrebbe non averlo, scrivere per mille o parti per mille è un'alternativa priva di ambiguità.",
  },
  "basis-point": {
    name: "Punto base",
    meaning: "Abbreviazione di punto base: un centesimo di punto percentuale, usato per tassi d'interesse e spread.",
    usage: "Un punto base vale 0.01%, quindi un tasso che sale dal 4.25% al 4.50% si è mosso di 25 bp. Gli spread obbligazionari, le decisioni delle banche centrali e le commissioni dei fondi si esprimono così, perché le variazioni percentuali applicate ai tassi sono ambigue. Racchiudere bp in \\text lo mantiene dritto e impedisce a TeX di leggere b e p come due variabili in corsivo moltiplicate. Separate il numero dall'unità con uno spazio sottile, \\, come in 25\\,\\text{bp}. Alcuni autori usano bps o bips. Curiosamente, bp è anche l'unità interna di TeX per il big point PostScript, 1/72 di pollice, ma il contesto le tiene ben distinte.",
  },
  "npv": {
    name: "Valore attuale netto",
    meaning: "Valore attuale netto (VAN, in inglese NPV): la somma dei flussi di cassa futuri scontati meno l'investimento iniziale.",
    usage: "Il VAN si calcola come \\text{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}, dove C_0 è di solito l'esborso iniziale negativo e r il tasso di sconto. Un progetto viene accettato quando NPV > 0. Racchiudere la sigla in \\text la mantiene dritta e impedisce a TeX di trattarla come N per P per V con la spaziatura del corsivo. \\mathrm{NPV} dà lo stesso aspetto ma ignora lo stile del testo circostante, il che è più sicuro dentro i teoremi. Se la usate come funzione, per esempio \\text{NPV}(r), \\operatorname{NPV} aggiunge la spaziatura corretta prima della parentesi.",
  },
  "irr": {
    name: "Tasso interno di rendimento",
    meaning: "Tasso interno di rendimento (TIR, in inglese IRR): il tasso di sconto al quale il valore attuale netto di un progetto è nullo.",
    usage: "L'IRR è definito implicitamente da 0 = \\sum_{t=0}^{n} C_t / (1 + \\text{IRR})^t, quindi in generale non ha una forma chiusa e si risolve numericamente. Un progetto è interessante quando il suo IRR supera il costo del capitale. Flussi di cassa che cambiano segno più di una volta possono produrre più IRR, un limite noto rispetto al VAN. Usate \\text o \\mathrm perché la sigla resti dritta; digitare IRR direttamente in modalità matematica produce tre variabili in corsivo con la spaziatura di un prodotto. Quando compare in un denominatore, usate \\left( \\right) per un ridimensionamento pulito attorno alla frazione.",
  },
  "roi": {
    name: "Ritorno sull'investimento",
    meaning: "Ritorno sull'investimento (ROI): il guadagno di un investimento rapportato al suo costo, di solito espresso in percentuale.",
    usage: "Il ROI si calcola come \\text{ROI} = (\\text{gain} - \\text{cost}) / \\text{cost}, spesso moltiplicato per 100\\% per la presentazione. A differenza dell'IRR ignora la distribuzione temporale dei flussi di cassa, quindi per confronti su più anni si usano varianti annualizzate. Comporlo con \\text mantiene le lettere dritte e spaziate come una parola; digitato direttamente in matematica, R, O e I diventano variabili in corsivo e la O può essere scambiata per uno zero. Nelle frazioni usate \\frac con pezzi in \\text al numeratore e al denominatore, oppure \\dfrac nei paragrafi in linea per mantenerlo leggibile.",
    example: "\\text{ROI} = \\frac{\\text{guadagno} - \\text{costo}}{\\text{costo}} \\times 100\\%",
  },
  "summation": {
    name: "Sommatoria sui periodi",
    meaning: "Sommatoria sui periodi t da 1 a n, il modo standard per aggregare i flussi di cassa di più periodi.",
    usage: "Le formule finanziarie sommano sui periodi: il valore attuale di una rendita, \\sum_{t=1}^{n} \\frac{C}{(1+r)^t}, il prezzo di un'obbligazione con cedole più valore nominale e il VAN, che parte da t = 0 per includere l'esborso iniziale. In modalità display gli estremi stanno sopra e sotto il sigma; in linea si spostano a destra in corpo minore. Usate \\sum\\limits per forzare gli estremi impilati in un paragrafo. Scegliete con cura l'indice iniziale, perché partire da 0 o da 1 cambia il risultato. Nel tempo continuo l'analogo è un integrale con sconto e^{-rt}.",
  },
  "present-value": {
    name: "Valore attuale",
    meaning: "Valore attuale di un singolo flusso di cassa C ricevuto al tempo t, scontato al tasso r per periodo.",
    usage: "Lo sconto divide un importo futuro per il fattore di crescita (1+r)^t, quindi 1,000 ricevuti fra 3 anni al 5% valgono oggi circa 863.84. Sommando questo termine sui periodi si ottengono il VAN e i prezzi delle obbligazioni. In modalità display \\frac disegna una frazione a grandezza piena; nel testo in linea si rimpicciolisce, quindi \\tfrac o la forma con barra C/(1+r)^t possono leggersi meglio. Se il denominatore si complica, per esempio con un tasso variabile (1 + r_t), usate \\prod oppure tenete l'esponente tra graffe: ^{t} conta quando t ha più di un carattere, come ^{t-1}.",
  },
  "compound-interest": {
    name: "Interesse composto",
    meaning: "Formula dell'interesse composto: il montante A dopo t anni quando il capitale P frutta al tasso r capitalizzato n volte l'anno.",
    usage: "Qui P è il capitale, r il tasso nominale annuo, n il numero di capitalizzazioni annue e t il numero di anni; la capitalizzazione mensile usa n = 12. Al crescere di n il montante tende alla formula continua Pe^{rt}. L'esponente va racchiuso tra graffe, ^{nt}, altrimenti si eleva solo n. La barra in linea r/n mantiene la riga compatta; nelle equazioni in display è più comune \\left(1 + \\frac{r}{n}\\right)^{nt}, dove la coppia \\left( \\right) ingrandisce le parentesi per adattarle alla frazione. Non scrivete \\frac dentro parentesi non ridimensionate, che risultano visibilmente troppo corte.",
  },
  "continuous-compounding": {
    name: "Capitalizzazione continua",
    meaning: "Formula della capitalizzazione continua: il capitale P cresce fino a Pe^{rt} dopo un tempo t al tasso r capitalizzato in modo continuo.",
    usage: "È il limite dell'interesse composto quando la capitalizzazione diventa infinitamente frequente, poiché (1 + r/n)^{nt} \\to e^{rt}. Si usa in tutta la valutazione dei derivati, come nel fattore di sconto e^{-rT} della formula di Black-Scholes. Racchiudete l'esponente tra graffe, e^{rt}, perché entrambe le lettere vengano innalzate. Alcuni stili compongono il numero di Nepero in tondo, \\mathrm{e}^{rt}, per distinguerlo da una variabile chiamata e; entrambe le scelte sono accettate se coerenti. Per esponenti lunghi \\exp(rt) è più leggibile di un minuscolo apice, soprattutto con frazioni all'esponente.",
  },
};

export default text;
