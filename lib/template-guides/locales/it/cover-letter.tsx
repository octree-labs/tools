import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "Posso usare questo template per lettere di presentazione su Overleaf?",
    answer:
      "Sì. Usa la classe standard letter e carica soltanto geometry e hyperref, inclusi in ogni distribuzione TeX. Incolla il sorgente in un progetto Overleaf vuoto, in Octree o in un’installazione locale di TeX Live o MiKTeX e si compila senza modifiche con pdfLaTeX.",
  },
  {
    question: "È un template per lettere di presentazione o per lettere di candidatura?",
    answer:
      "Per entrambe. Una lettera di presentazione e una lettera di candidatura hanno la stessa struttura: il tuo indirizzo, la data, il destinatario, una formula di apertura, tre o quattro paragrafi e una formula di chiusura. Lo stesso template va bene per candidature accademiche, tirocini, ammissioni a corsi post-laurea e lettere motivazionali; cambia solo il testo dei paragrafi.",
  },
  {
    question: "Come cambio o tolgo la data?",
    answer:
      "La classe letter stampa \\today sotto il tuo indirizzo. Per fissare una data, aggiungi \\date{12 marzo 2027} al preambolo. Per toglierla, usa invece \\date{}.",
  },
  {
    question: "Come segnalo il curriculum allegato?",
    answer:
      "Aggiungi \\encl{Curriculum vitae} dopo \\closing{Sincerely,} e la lettera stamperà una riga ‘encl:’ sotto la firma. Allo stesso modo \\cc{Nome} aggiunge una riga per le copie conoscenza e \\ps{P.S. ...} un poscritto.",
  },
  {
    question: "Come faccio a stare in una pagina?",
    answer:
      "Limita il corpo a tre o quattro paragrafi brevi, che è comunque ciò che si aspettano i selezionatori. Se il testo sfora ancora, riduci il margine in \\usepackage[margin=1in]{geometry} a 0.8in oppure passa dall’opzione di classe 11pt a 10pt.",
  },
];

export default function CoverLetterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Un template LaTeX per lettere di presentazione</GuideH2>
      <GuideP>
        Questo è un template LaTeX per lettere di presentazione che funziona anche
        come template per lettere di candidatura a offerte di lavoro, tirocini,
        corsi post-laurea e posizioni accademiche. È costruito sulla classe di
        documento standard <GuideCode>letter</GuideCode>, che gestisce
        l’impaginazione richiesta da una lettera formale: il tuo indirizzo e la data
        in alto a destra, il blocco dell’indirizzo del destinatario a sinistra, la
        formula di apertura, il corpo e una chiusura con il tuo nome scritto sotto.
      </GuideP>
      <GuideP>
        Poiché il template carica soltanto <GuideCode>geometry</GuideCode> e{" "}
        <GuideCode>hyperref</GuideCode>, si compila con pdfLaTeX su Overleaf, in
        Octree o in qualsiasi installazione TeX locale senza modifiche. Il corpo è
        una lettera di candidatura in quattro paragrafi con segnaposto tra parentesi
        quadre come <GuideCode>[Position Title]</GuideCode> e{" "}
        <GuideCode>[Company Name]</GuideCode>: un’apertura che nomina il ruolo, un
        paragrafo di risultati concreti, un paragrafo sul perché vuoi lavorare per
        quell’azienda e una breve chiusura in cui chiedi un colloquio.
      </GuideP>
      <GuideP>
        Scrivere la lettera di presentazione in LaTeX ha più senso quando anche il
        curriculum è in LaTeX: font, margini e intestazione coincidono, e puoi
        tenere un file di lettera per ogni candidatura sotto controllo di versione.
        Abbinala al{" "}
        <GuideLink href="/templates/resume">template LaTeX per il curriculum</GuideLink>{" "}
        o a <GuideLink href="/templates/jakes-resume">Jake’s Resume</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Che cosa contiene</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{letter}"}</GuideCode> con margini di un pollice
        </li>
        <li>
          Blocco del mittente generato da <GuideCode>\address</GuideCode> (indirizzo,
          telefono, email) e data automatica
        </li>
        <li>
          Blocco del destinatario in <GuideCode>{"\\begin{letter}{...}"}</GuideCode>
        </li>
        <li>
          Formula di apertura con <GuideCode>\opening</GuideCode> e chiusura con{" "}
          <GuideCode>\closing</GuideCode>, seguita dal nome indicato in{" "}
          <GuideCode>\signature</GuideCode>
        </li>
        <li>Quattro paragrafi segnaposto per una candidatura di lavoro</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Come si usa</GuideH2>
      <GuideOl>
        <li>
          Fai clic su <em>Open as Template</em> per modificarlo in Octree, oppure su{" "}
          <em>View Source</em> e incolla il codice su Overleaf o in un file locale{" "}
          <GuideCode>letter.tex</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX. XeLaTeX o LuaLaTeX servono solo se aggiungi{" "}
          <GuideCode>fontspec</GuideCode> per usare lo stesso font di sistema del
          curriculum.
        </li>
        <li>
          Nel preambolo, imposta <GuideCode>\signature</GuideCode> con il tuo nome e{" "}
          <GuideCode>\address</GuideCode> con i tuoi recapiti, separati da{" "}
          <GuideCode>\\</GuideCode>.
        </li>
        <li>
          Sostituisci le righe del destinatario in{" "}
          <GuideCode>{"\\begin{letter}{...}"}</GuideCode> e il nome in{" "}
          <GuideCode>\opening</GuideCode>.
        </li>
        <li>
          Compila tutti i segnaposto tra parentesi quadre, poi cerca nel file{" "}
          <GuideCode>[</GuideCode> per assicurarti che non ne sia rimasto nessuno.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personalizzare il template</GuideH2>
      <GuideP>
        <strong>Rendi cliccabili email e portfolio.</strong> hyperref è già
        caricato, quindi usa <GuideCode>\href</GuideCode> nel blocco dell’indirizzo
        e nascondi i riquadri colorati attorno ai link:
      </GuideP>
      <GuidePre>{`\\hypersetup{hidelinks}
\\address{Your Name\\\\City, State ZIP\\\\
  \\href{mailto:you@example.com}{you@example.com}\\\\
  \\url{https://example.com}}`}</GuidePre>
      <GuideP>
        <strong>Aggiungi allegati e una data fissa.</strong> La classe letter ha dei
        comandi per le righe che seguono la firma:
      </GuideP>
      <GuidePre>{`\\date{12 March 2027}   % nel preambolo; \\date{} la rimuove

% ... dopo \\closing{Sincerely,}
\\encl{Resume, transcript}
\\cc{Dr.~Jane Smith}`}</GuidePre>
      <GuideP>
        <strong>Riusa un solo file per molte candidature.</strong> Definisci
        l’azienda e il ruolo una volta sola nel preambolo e usa le macro nel corpo,
        così a ogni nuova candidatura cambiano solo due righe:
      </GuideP>
      <GuidePre>{`\\newcommand{\\company}{Acme Corp}
\\newcommand{\\role}{Data Scientist}

% nel corpo
I am applying for the \\role{} position at \\company.`}</GuidePre>

      <GuideH2 id="faq">Domande frequenti sul template per lettere di presentazione</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
