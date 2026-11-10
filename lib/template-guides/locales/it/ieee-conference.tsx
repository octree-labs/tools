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
    question: "Qual è il formato degli articoli IEEE?",
    answer:
      "Un articolo per una conferenza IEEE è impaginato su carta US Letter in due colonne di testo Times a 10 pt, con titolo centrato a 24 pt, blocchi degli autori sotto il titolo, Abstract e Index Terms in grassetto con titolo in linea, sezioni con numeri romani e titoli in maiuscoletto, citazioni numerate tra parentesi quadre e nessun numero di pagina. La classe LaTeX IEEEtran in modalità conference produce tutto questo in automatico: tu devi fornire soltanto il contenuto.",
  },
  {
    question: "IEEEtran è il template ufficiale IEEE?",
    answer:
      "Sì. IEEEtran.cls è la classe che IEEE distribuisce per le sue transactions, riviste e conferenze, e l’opzione conference corrisponde al template per conferenze disponibile nell’IEEE Author Center. È inclusa in TeX Live e MiKTeX, quindi non serve scaricarla. Alcune conferenze allegano una copia della classe alla call for papers; di norma si tratta dello stesso file.",
  },
  {
    question: "Quanti autori posso indicare e come gestisco un’affiliazione in comune?",
    answer:
      "Non c’è un limite. Ogni coppia \\IEEEauthorblockN / \\IEEEauthorblockA forma un blocco, e i blocchi sono separati da \\and; IEEEtran ne dispone fino a tre per riga. Se molti autori condividono le affiliazioni, usa l’alternativa commentata nel template: elenca i nomi una sola volta con i marcatori \\IEEEauthorrefmark{1} e dedica a ogni affiliazione una riga \\IEEEauthorblockA.",
  },
  {
    question: "Posso usare BibTeX con questo template?",
    answer:
      "Sì. Il template include una thebibliography scritta a mano, così si compila senza file esterni. Elimina quell’ambiente, mantieni \\bibliographystyle{IEEEtran} e aggiungi \\bibliography{refs} che punti al tuo file .bib; IEEEtran.bst è distribuito insieme alla classe. Il pacchetto cite, già caricato, raggruppa i numeri consecutivi in intervalli.",
  },
  {
    question: "Perché non devo modificare i margini?",
    answer:
      "IEEE PDF eXpress e i chair della conferenza controllano la geometria della pagina. IEEEtran imposta i margini, la larghezza delle colonne e lo spazio tra di esse richiesti dalle specifiche IEEE; aggiungere geometry o modificare \\textwidth produce un articolo che non supera il controllo di conformità. Se l’articolo è troppo lungo, taglia testo o figure.",
  },
];

export default function IeeeConferenceGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Che cos’è questo template per conferenze IEEE?</GuideH2>
      <GuideP>
        Questo template riproduce per intero il formato ufficiale degli articoli per
        conferenze IEEE generato da{" "}
        <GuideCode>\documentclass[conference]{"{IEEEtran}"}</GuideCode>, la classe che
        IEEE distribuisce per le proprie conferenze e che è già installata in ogni
        distribuzione TeX. Contiene tutto ciò che serve per una sottomissione
        completa: un titolo con la nota sui finanziamenti tramite{" "}
        <GuideCode>\thanks</GuideCode>, un blocco di tre autori con{" "}
        <GuideCode>\IEEEauthorblockN</GuideCode> e{" "}
        <GuideCode>\IEEEauthorblockA</GuideCode>, Abstract e Index Terms in grassetto
        con titolo in linea, un’introduzione con capolettera tramite{" "}
        <GuideCode>\IEEEPARstart</GuideCode>, un’equazione numerata, un listato{" "}
        <GuideCode>algorithmic</GuideCode>, una tabella{" "}
        <GuideCode>booktabs</GuideCode> con la didascalia sopra, una figura con la
        didascalia sotto, una sezione Acknowledgment e una bibliografia in stile
        IEEE.
      </GuideP>
      <GuideP>
        Si distingue dal template più breve{" "}
        <GuideLink href="/templates/research-paper">Articolo di ricerca</GuideLink>, che
        usa anch’esso IEEEtran, perché copre il formato completo: blocchi degli autori
        corretti con dipartimento, istituzione, città ed email, parole chiave,
        ringraziamenti, una tabella e una figura con didascalie IEEE come si deve, e
        cinque voci bibliografiche formattate. Usa questo quando prepari una
        sottomissione vera.
      </GuideP>

      <GuideH2 id="format">Le regole del formato IEEE applicate dalla classe</GuideH2>
      <GuideUl>
        <li>Carta US Letter, due colonne, testo a 10 pt in un font simile al Times.</li>
        <li>Titolo a 24 pt, nomi degli autori a 11 pt, affiliazioni a 10 pt, tutto centrato.</li>
        <li>
          Due colonne da 3,5 pollici separate da 12 pt, con margini fissati dalla
          classe. Non caricare <GuideCode>geometry</GuideCode> e non modificare{" "}
          <GuideCode>\textwidth</GuideCode>.
        </li>
        <li>Abstract e Index Terms in grassetto con titolo in linea.</li>
        <li>
          Sezioni con numeri romani in maiuscoletto, sottosezioni contrassegnate da
          lettere in corsivo.
        </li>
        <li>
          Didascalie delle tabelle sopra la tabella, in maiuscoletto (&quot;TABLE
          I&quot;); didascalie delle figure sotto (&quot;Fig. 1.&quot;).
        </li>
        <li>
          Citazioni numerate tra parentesi quadre, con i numeri consecutivi
          raggruppati dal pacchetto <GuideCode>cite</GuideCode>.
        </li>
        <li>Nessun numero di pagina: lo aggiunge la conferenza quando compone gli atti.</li>
      </GuideUl>

      <GuideH2 id="walkthrough">Il template passo per passo</GuideH2>
      <GuideH3>Blocco degli autori</GuideH3>
      <GuidePre>{`\\author{%
  \\IEEEauthorblockN{1\\textsuperscript{st} Given Name Surname}
  \\IEEEauthorblockA{\\textit{Dept. of Electrical Engineering} \\\\
    \\textit{Example University}\\\\
    City, Country \\\\
    first.author@example.edu}
  \\and
  ...
}`}</GuidePre>
      <GuideP>
        Una coppia N/A per autore, separate da <GuideCode>\and</GuideCode>; IEEEtran
        dispone fino a tre blocchi per riga. Il prefisso ordinale (1st, 2nd) è la
        convenzione dell’attuale template IEEE per conferenze e si può eliminare.
        Con sei o più autori che condividono le istituzioni, usa la variante con{" "}
        <GuideCode>\IEEEauthorrefmark</GuideCode> lasciata come commento nel
        sorgente.
      </GuideP>
      <GuideH3>Abstract, parole chiave e introduzione</GuideH3>
      <GuideP>
        <GuideCode>abstract</GuideCode> e <GuideCode>IEEEkeywords</GuideCode> devono
        venire dopo <GuideCode>\maketitle</GuideCode>. Contieni l’abstract tra 150 e
        250 parole e indica da tre a sei index terms separati da virgole, in ordine
        alfabetico. <GuideCode>\IEEEPARstart{"{D}{eep}"}</GuideCode> produce il
        capolettera con cui si aprono gli articoli IEEE; è facoltativo.
      </GuideP>
      <GuideH3>Equazioni, algoritmi, tabelle e figure</GuideH3>
      <GuideP>
        L’esempio usa un blocco <GuideCode>aligned</GuideCode> dentro{" "}
        <GuideCode>equation</GuideCode> perché un lungo problema di ottimizzazione
        stia in una colonna, un listato <GuideCode>algorithmic</GuideCode> per il
        metodo e float <GuideCode>[htbp]</GuideCode> per la tabella e la figura. La
        figura è un grafico a barre in TikZ, così il template si compila senza file
        di immagine; sostituiscila con{" "}
        <GuideCode>\includegraphics[width=\columnwidth]{"{energy.pdf}"}</GuideCode>.
        Tabelle o figure larghe che occupano entrambe le colonne usano{" "}
        <GuideCode>table*</GuideCode> e <GuideCode>figure*</GuideCode>.
      </GuideP>
      <GuideH3>Bibliografia</GuideH3>
      <GuideP>
        Lo stile IEEE riporta gli autori con le iniziali seguite dal cognome, i
        titoli tra virgolette, le sedi di pubblicazione abbreviate e in corsivo e
        l’anno in fondo. Con BibTeX, rimuovi il blocco{" "}
        <GuideCode>thebibliography</GuideCode> e usa{" "}
        <GuideCode>\bibliographystyle{"{IEEEtran}"}</GuideCode> con{" "}
        <GuideCode>\bibliography{"{refs}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="customize">Passare da un formato IEEE all’altro</GuideH2>
      <GuideTable
        headers={["Destinazione", "Riga della classe", "Note"]}
        rows={[
          [
            "Articolo per conferenza",
            <GuideCode key="c">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Questo template",
          ],
          [
            "Transactions / rivista",
            <GuideCode key="j">\documentclass[journal]{"{IEEEtran}"}</GuideCode>,
            "Aggiunge testatine correnti, biografie degli autori e abstract a una colonna",
          ],
          [
            "Revisione in doppio cieco",
            <GuideCode key="r">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Sostituisci il blocco degli autori con un unico blocco anonimo e rimuovi \\thanks",
          ],
          [
            "Bozza con interlinea ampia",
            <GuideCode key="d">\documentclass[conference,draftcls,onecolumn]{"{IEEEtran}"}</GuideCode>,
            "Per far circolare una bozza leggibile; non sottomettere mai in questa forma",
          ],
        ]}
      />

      <GuideH2 id="errors">Errori frequenti</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Command \thanks already defined&quot; oppure \thanks ignorato.</strong>{" "}
          Tieni <GuideCode>\IEEEoverridecommandlockouts</GuideCode> subito dopo la
          riga documentclass, come nel template.
        </li>
        <li>
          <strong>Equazione che sborda.</strong> Spezzala con{" "}
          <GuideCode>aligned</GuideCode> o <GuideCode>split</GuideCode>; le colonne
          IEEE sono larghe appena 3,5 pollici.
        </li>
        <li>
          <strong>La figura finisce in fondo al documento.</strong> Usa{" "}
          <GuideCode>[!t]</GuideCode> per collocarla in cima alla pagina e assicurati
          che sia più stretta di <GuideCode>\columnwidth</GuideCode>.
        </li>
        <li>
          <strong>L’articolo supera il limite di pagine.</strong> La maggior parte
          delle conferenze IEEE consente sei pagine più una o due pagine extra a
          pagamento; taglia i contenuti anziché gli spazi, che vengono controllati.
        </li>
      </GuideUl>

      <GuideH2 id="compile">Come compilare</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> fai clic su <em>Open as template</em> e scrivi
          con l’anteprima a due colonne in tempo reale.
        </li>
        <li>
          <strong>Su Overleaf:</strong> incolla il codice in un nuovo progetto;
          pdfLaTeX è il compilatore predefinito e IEEEtran è preinstallato.
        </li>
        <li>
          <strong>In locale:</strong> <GuideCode>pdflatex paper.tex</GuideCode> due
          volte per i riferimenti incrociati, oppure{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>.
        </li>
      </GuideOl>
      <GuideP>
        Devi sottomettere a ICASSP, CVPR o a un’altra sede in stile IEEE? Consulta
        la{" "}
        <GuideLink href="/conference-deadlines">pagina delle scadenze delle conferenze</GuideLink>{" "}
        per le finestre di sottomissione abituali.
      </GuideP>

      <GuideH2 id="faq">Domande frequenti</GuideH2>
      <GuideFaq items={faq} inLanguage="it" />
    </article>
  );
}
