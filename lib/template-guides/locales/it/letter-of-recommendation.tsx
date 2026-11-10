import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Quanto deve essere lunga una lettera di raccomandazione?",
    answer:
      "La norma è una pagina piena, e due pagine sono il massimo per le lettere destinate a corsi post-laurea o a posizioni accademiche. Una lettera di meno di tre paragrafi circa suona tiepida, perché le commissioni danno per scontato che chi ha molto da dire scriva di più. Una volta compilati i segnaposto, questo template produce circa una pagina in corpo 11pt con margini di un pollice; se arrivi a una terza pagina, taglia la sezione Personal Qualities o accorcia gli esempi.",
  },
  {
    question: "Che cosa deve dire il primo paragrafo di una lettera di raccomandazione?",
    answer:
      "Chi stai raccomandando, per che cosa, come lo conosci, in quale veste e da quanto tempo, e il tuo grado complessivo di convinzione. Il paragrafo d’apertura del template fa esattamente questo: nomina il programma, la durata del rapporto, il tuo ruolo (docente, relatore o responsabile) e un giudizio comparativo sulla posizione del candidato rispetto agli studenti che hai seguito.",
  },
  {
    question: "Come aggiungo carta intestata o un logo alla lettera LaTeX?",
    answer:
      "Carica graphicx e inserisci un \\includegraphics dentro il comando \\address, che la classe letter stampa in alto a destra nella prima pagina: \\address{\\includegraphics[height=1.5cm]{logo.png}\\\\Nome del dipartimento\\\\Nome dell’università\\\\...}. Per una carta intestata prestampata a tutta larghezza, usa il pacchetto eso-pic per collocare un PDF o un’immagine dietro la prima pagina, oppure stampa direttamente su carta intestata.",
  },
  {
    question: "Come inserisco una firma scansionata?",
    answer:
      "Metti l’immagine nell’argomento di \\signature: \\signature{\\includegraphics[height=1.2cm]{signature.png}\\\\Nome del docente\\\\Qualifica\\\\Dipartimento}. Per impostazione predefinita la classe letter lascia uno spazio verticale dopo \\closing per la firma a mano; con un’immagine puoi ridurlo con un \\vspace negativo all’inizio dell’argomento di \\signature (\\longindentation sposta il blocco solo in orizzontale).",
  },
  {
    question: "Una lettera di raccomandazione deve essere datata e indirizzata a una persona?",
    answer:
      "Sì. La classe letter stampa automaticamente \\today sotto l’indirizzo del mittente; sostituiscilo con \\date{3 marzo 2026} se ti serve una data precisa. Indirizza la lettera a una persona o a una commissione specifica quando la conosci (il template usa la commissione di ammissione del programma) e apri con ‘Gentili membri della Commissione di ammissione’ o ‘Gentile Prof. Cognome’. ‘A chi di competenza’ è accettabile solo per lettere di uso generico.",
  },
];

export default function LetterOfRecommendationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Che cos’è questo template per lettere di raccomandazione?</GuideH2>
      <GuideP>
        È un template LaTeX gratuito per lettere di raccomandazione, scritto dal
        punto di vista di un docente o di un relatore che raccomanda uno studente
        per un corso post-laurea. Usa la classe di documento standard{" "}
        <GuideCode>letter</GuideCode> in corpo 11pt con margini di un pollice
        impostati da <GuideCode>geometry</GuideCode>, e{" "}
        <GuideCode>hyperref</GuideCode> (caricato ma non usato: l’email è testo
        semplice). Il corpo è organizzato sotto quattro titoli in linea in grassetto,
        Academic Excellence, Research Capabilities, Personal Qualities e
        Recommendation, con testo segnaposto che indica quale tipo di prova va in
        ciascuno. Inserisci nomi, date ed esempi, compila, e avrai una lettera
        pulita e impaginata correttamente, con indirizzo del mittente, data, blocco
        del destinatario, formula di apertura, chiusura e firma esattamente dove chi
        legge se li aspetta.
      </GuideP>
      <GuideP>
        Poiché è la classe <GuideCode>letter</GuideCode> a gestire l’impaginazione,
        il template va altrettanto bene per referenze accademiche, professionali,
        per borse di studio, per tirocini e personali; cambiano soltanto i titoli e
        le prove portate.
      </GuideP>

      <GuideH2 id="structure">La struttura di una lettera di raccomandazione efficace</GuideH2>
      <GuideP>
        Commissioni di ammissione e selezionatori leggono centinaia di queste
        lettere. Quelle che aiutano davvero un candidato hanno una forma
        riconoscibile, che il template segue:
      </GuideP>
      <GuideOl>
        <li>
          <strong>Apertura: rapporto e giudizio.</strong> Chi stai raccomandando, per
          che cosa, da quanto tempo e in quale veste lo conosci, e il tuo giudizio
          complessivo in una frase. Il primo paragrafo del template fa questo e
          aggiunge un termine di paragone (&quot;uno degli studenti più brillanti
          che abbia incontrato nei miei X anni di insegnamento&quot;). I confronti
          sono in assoluto la cosa più utile che una lettera possa contenere, perché
          danno la misura dei tuoi elogi.
        </li>
        <li>
          <strong>Due o tre esempi specifici.</strong> Ogni sezione centrale deve
          contenere un episodio concreto: un progetto, un risultato, una decisione
          presa dal candidato e le sue conseguenze. &quot;Eccellenti capacità
          analitiche&quot; è un’affermazione; &quot;ha individuato un difetto nel
          nostro disegno di campionamento che due postdoc non avevano notato, e ha
          proposto la correzione che abbiamo adottato nell’articolo pubblicato&quot;
          è una prova.
        </li>
        <li>
          <strong>Giudizi comparativi e di contesto.</strong> Colloca il candidato
          in una graduatoria dove puoi farlo onestamente (&quot;nel 5 per cento
          migliore dei circa 400 studenti che ho avuto&quot;), e spiega che cosa
          significano quel voto o quel risultato nel tuo corso o nel tuo
          laboratorio.
        </li>
        <li>
          <strong>Qualità personali.</strong> Maturità, spirito di collaborazione,
          leadership, tenacia, con un esempio ciascuna. Sii breve.
        </li>
        <li>
          <strong>Chiusura: raccomandazione senza riserve e disponibilità a essere
          contattato.</strong>{" "}
          Ribadisci la raccomandazione, spiega perché il candidato è adatto a quel
          programma o a quel ruolo e invita chi legge a contattarti, indicando email
          e telefono.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Il template sezione per sezione</GuideH2>
      <GuideH3>Preambolo: \signature e \address</GuideH3>
      <GuidePre>{`\\signature{Professor Name\\\\Title\\\\Department}
\\address{Department Name\\\\University Name\\\\Address\\\\City, State ZIP\\\\Email: professor@university.edu}`}</GuidePre>
      <GuideP>
        Nella classe <GuideCode>letter</GuideCode>, <GuideCode>\address</GuideCode>{" "}
        è l’indirizzo del <em>mittente</em>: viene stampato in alto a destra nella
        prima pagina, con la data sotto. <GuideCode>\signature</GuideCode> è il
        testo stampato sotto la formula di chiusura, dopo uno spazio per la firma a
        mano. Entrambi si definiscono una sola volta nel preambolo e vengono
        riutilizzati da ogni ambiente <GuideCode>letter</GuideCode> del file, il che
        rende facile produrre in un unico documento più lettere per lo stesso
        studente.
      </GuideP>
      <GuideH3>L’ambiente letter e \opening</GuideH3>
      <GuideP>
        <GuideCode>\begin{"{letter}{Admissions Committee\\\\Graduate Program Name\\\\...}"}</GuideCode>{" "}
        prende come argomento l’indirizzo del <em>destinatario</em> e lo stampa a
        sinistra, sopra la formula di apertura.{" "}
        <GuideCode>\opening{"{Dear Members of the Admissions Committee,}"}</GuideCode>{" "}
        stampa la formula di apertura e dà inizio al corpo. Sono obbligatori
        entrambi: una lettera senza <GuideCode>\opening</GuideCode> perde senza
        avvisi indirizzo, data e formula di apertura.
      </GuideP>
      <GuideH3>I paragrafi del corpo</GuideH3>
      <GuideP>
        Il corpo è fatto di normali paragrafi separati da righe vuote, con{" "}
        <GuideCode>\textbf{"{Academic Excellence}"}</GuideCode> e gli altri tre
        titoli su righe a sé in grassetto. La classe <GuideCode>letter</GuideCode>{" "}
        non fa rientrare i paragrafi e aggiunge un piccolo spazio tra l’uno e
        l’altro, che è la convenzione corretta per la corrispondenza. Sostituisci
        ogni segnaposto, comprese le alternative he/she/they, con il nome e i
        pronomi del candidato: una lettera che dice ancora &quot;Student Name&quot;
        o &quot;his/her&quot; è il segno classico di un template lasciato a metà.
      </GuideP>
      <GuideH3>\closing</GuideH3>
      <GuideP>
        <GuideCode>\closing{"{Sincerely,}"}</GuideCode> stampa la formula di saluto
        finale, lascia lo spazio per firmare e stampa il blocco{" "}
        <GuideCode>\signature</GuideCode>. Dopo puoi aggiungere{" "}
        <GuideCode>\encl{"{Transcript}"}</GuideCode>,{" "}
        <GuideCode>\cc{"{Graduate Coordinator}"}</GuideCode> oppure{" "}
        <GuideCode>\ps{"{...}"}</GuideCode> per un poscritto.
      </GuideP>

      <GuideH2 id="variants">Lettere di raccomandazione accademiche e professionali</GuideH2>
      <GuideUl>
        <li>
          <strong>Corsi post-laurea (l’impostazione predefinita del template):</strong>{" "}
          metti in risalto ricerca, autonomia intellettuale, capacità di scrittura e
          di analisi, e voti inseriti nel loro contesto. Mantieni i quattro titoli.
        </li>
        <li>
          <strong>Lavoro:</strong> rinomina i titoli in Performance and Results,
          Skills, Teamwork and Character e Recommendation. Porta i risultati che
          interessano al datore di lavoro: progetti consegnati, fatturato,
          affidabilità, come la persona ha affrontato una difficoltà. Indica
          nell’apertura il periodo di impiego e la qualifica.
        </li>
        <li>
          <strong>Borsa di studio o fellowship:</strong> collega ogni esempio ai
          criteri del bando (leadership, impegno, potenziale) e spiega in modo
          esplicito perché questo candidato merita proprio questo riconoscimento.
        </li>
        <li>
          <strong>Referenza personale:</strong> elimina la sezione accademica,
          mantieni Personal Qualities e chiarisci come conosci la persona e che il
          vostro rapporto non è soltanto professionale.
        </li>
      </GuideUl>

      <GuideH2 id="customize">Come personalizzarla: carta intestata, firma, date, lunghezza</GuideH2>
      <GuideUl>
        <li>
          <strong>Carta intestata o logo.</strong> Aggiungi{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> e inserisci{" "}
          <GuideCode>\includegraphics[height=1.5cm]{"{logo.png}"}</GuideCode> come
          prima riga di <GuideCode>\address</GuideCode>. Per un PDF di carta
          intestata prestampata a piena pagina, usa <GuideCode>eso-pic</GuideCode>{" "}
          con <GuideCode>\AddToShipoutPictureBG*</GuideCode> sulla prima pagina.
        </li>
        <li>
          <strong>Immagine della firma.</strong>{" "}
          <GuideCode>\signature{"{\\includegraphics[height=1.2cm]{sig.png}\\\\Professor Name\\\\Title}"}</GuideCode>
          . Scansionala in inchiostro nero su fondo bianco e ritagliala al margine.
        </li>
        <li>
          <strong>Allinea la chiusura a sinistra.</strong> Per impostazione
          predefinita la classe sposta chiusura e firma a metà pagina. Aggiungi{" "}
          <GuideCode>\longindentation=0pt</GuideCode> nel preambolo per portarle al
          margine sinistro, l’impaginazione moderna più diffusa.
        </li>
        <li>
          <strong>Data.</strong> <GuideCode>\today</GuideCode> viene stampato in
          automatico; usa <GuideCode>\date{"{March 3, 2026}"}</GuideCode> prima di{" "}
          <GuideCode>\begin{"{document}"}</GuideCode> per fissarla.
        </li>
        <li>
          <strong>Recapiti.</strong> <GuideCode>\telephone{"{...}"}</GuideCode> è
          disponibile, ma la classe <GuideCode>letter</GuideCode> predefinita lo
          stampa solo quando <GuideCode>\address</GuideCode> è vuoto; è più semplice
          includere il numero di telefono in <GuideCode>\address</GuideCode>.
        </li>
        <li>
          <strong>Font e corpo.</strong> Cambia <GuideCode>11pt</GuideCode> in{" "}
          <GuideCode>12pt</GuideCode> per un aspetto più tradizionale, oppure
          aggiungi <GuideCode>\usepackage{"{newtxtext}"}</GuideCode> per il Times.{" "}
          <GuideCode>a4paper</GuideCode> tra le opzioni della classe cambia il
          formato della carta.
        </li>
        <li>
          <strong>Lunghezza.</strong> Punta a una pagina, mai più di due. Taglia gli
          esempi prima dei giudizi comparativi.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Errori frequenti e come correggerli</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;LaTeX Error: \opening missing&quot;</strong> o spaziature
          strane in cima alla pagina. Ogni ambiente <GuideCode>letter</GuideCode>{" "}
          deve contenere un <GuideCode>\opening</GuideCode> prima del testo.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \includegraphics&quot;.</strong>{" "}
          Aggiungi <GuideCode>\usepackage{"{graphicx}"}</GuideCode> al preambolo.
        </li>
        <li>
          <strong>&quot;Misplaced alignment tab character &amp;&quot;.</strong> Una
          e commerciale non protetta nel nome di un dipartimento, come
          &quot;Research &amp; Development&quot;. Scrivi{" "}
          <GuideCode>\&amp;</GuideCode>.
        </li>
        <li>
          <strong>Le righe dell’indirizzo si fondono.</strong> Le righe dentro{" "}
          <GuideCode>\address</GuideCode>, <GuideCode>\signature</GuideCode> e
          l’argomento del destinatario si separano con <GuideCode>\\</GuideCode>,
          non con righe vuote.
        </li>
        <li>
          <strong>Manca l’indirizzo del mittente e compare solo la data.</strong>{" "}
          Hai lasciato vuoto <GuideCode>\address</GuideCode> o l’hai definito dopo{" "}
          <GuideCode>\opening</GuideCode>. Tienilo nel preambolo, come fa il
          template.
        </li>
        <li>
          <strong>La seconda pagina non ha intestazione.</strong> È il comportamento
          predefinito della classe. Aggiungi{" "}
          <GuideCode>\pagestyle{"{headings}"}</GuideCode> per stampare nome del
          destinatario, data e numero di pagina sulle pagine successive.
        </li>
      </GuideUl>

      <GuideH2 id="compile">Come compilare la lettera</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> fai clic su <em>Open as template</em>. Compila
          i segnaposto nell’editor con l’anteprima in tempo reale, oppure incolla i
          tuoi appunti sullo studente e chiedi all’assistente IA di scrivere una
          bozza di ogni sezione.
        </li>
        <li>
          <strong>Su Overleaf:</strong> incolla il sorgente in un progetto vuoto e
          compila con pdfLaTeX. Carica eventuali immagini del logo o della firma
          nella cartella principale del progetto.
        </li>
        <li>
          <strong>In locale:</strong> salva il file come{" "}
          <GuideCode>letter.tex</GuideCode> ed esegui{" "}
          <GuideCode>pdflatex letter.tex</GuideCode>. Basta un passaggio.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Template per lettere correlati</GuideH2>
      <GuideTable
        headers={["Template", "Ideale per", "Classe", "Struttura"]}
        rows={[
          [
            <strong key="r">Lettera di raccomandazione</strong>,
            "Docenti, relatori e responsabili che scrivono per un candidato",
            <GuideCode key="c1">letter</GuideCode>,
            "Quattro sezioni con titolo: eccellenza, ricerca, qualità personali, raccomandazione",
          ],
          [
            <GuideLink key="l" href="/templates/letter">
              Lettera formale
            </GuideLink>,
            "Corrispondenza commerciale e ufficiale in generale",
            <GuideCode key="c2">letter</GuideCode>,
            "Corpo semplice con mittente, destinatario, apertura e chiusura",
          ],
          [
            <GuideLink key="c" href="/templates/cover-letter">
              Lettera di presentazione
            </GuideLink>,
            "Candidati che scrivono di sé per un lavoro o un programma",
            <GuideCode key="c3">letter</GuideCode>,
            "Tre o quattro paragrafi che collegano l’esperienza al ruolo",
          ],
        ]}
      />
      <GuideP>
        Se sei tu il candidato e non chi raccomanda, i template{" "}
        <GuideLink href="/templates/motivation-letter">lettera motivazionale</GuideLink> e{" "}
        <GuideLink href="/templates/statement-of-purpose">statement of purpose</GuideLink>{" "}
        coprono i documenti che scrivi in prima persona.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
