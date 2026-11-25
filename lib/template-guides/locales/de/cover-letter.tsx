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
    question: "Kann ich diese Anschreiben-Vorlage in Overleaf verwenden?",
    answer:
      "Ja. Sie verwendet die Standardklasse letter und lädt nur geometry und hyperref, die in jeder TeX-Distribution enthalten sind. Fügen Sie den Quelltext in ein leeres Overleaf-Projekt, in Octree oder in eine lokale TeX-Live- oder MiKTeX-Installation ein, und er kompiliert unverändert mit pdfLaTeX.",
  },
  {
    question: "Ist das eine Vorlage für ein Anschreiben oder für ein Bewerbungsschreiben?",
    answer:
      "Beides. Ein Anschreiben und ein Bewerbungsschreiben haben denselben Aufbau: Ihre Adresse, das Datum, der Empfänger, eine Anrede, drei oder vier Absätze und eine Grußformel. Dieselbe Vorlage eignet sich für Bewerbungen an Hochschulen, für Praktika, für ein Masterstudium oder eine Promotion sowie für Motivationsschreiben; nur der Wortlaut der Absätze ändert sich.",
  },
  {
    question: "Wie ändere oder entferne ich das Datum?",
    answer:
      "Die Klasse letter gibt \\today unter Ihrer Adresse aus. Für ein festes Datum fügen Sie \\date{12 March 2027} in die Präambel ein. Um es zu entfernen, verwenden Sie stattdessen \\date{}.",
  },
  {
    question: "Wie weise ich auf einen beigefügten Lebenslauf hin?",
    answer:
      "Fügen Sie \\encl{Resume} nach \\closing{Sincerely,} ein, dann gibt der Brief unter der Unterschrift eine Zeile „encl:“ aus. \\cc{Name} ergänzt auf dieselbe Weise eine Verteilerzeile, und \\ps{P.S. ...} fügt ein Postskriptum hinzu.",
  },
  {
    question: "Wie halte ich das Anschreiben auf einer Seite?",
    answer:
      "Beschränken Sie den Text auf drei oder vier kurze Absätze – das erwarten Personalverantwortliche ohnehin. Läuft er trotzdem über, verkleinern Sie den Rand in \\usepackage[margin=1in]{geometry} auf 0.8in oder stellen Sie die Klassenoption von 11pt auf 10pt um.",
  },
];

export default function CoverLetterGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Eine Anschreiben-Vorlage in LaTeX</GuideH2>
      <GuideP>
        Dies ist eine Vorlage für ein Anschreiben in LaTeX, die sich zugleich als
        LaTeX-Vorlage für Bewerbungsschreiben eignet – für Stellen, Praktika, ein
        Masterstudium oder eine Promotion und für Positionen an Hochschulen. Sie
        basiert auf der Standardklasse <GuideCode>letter</GuideCode>, die das Layout
        eines förmlichen Briefs übernimmt: Ihre Absenderadresse und das Datum oben
        rechts, der Adressblock des Empfängers links, die Anrede, der Brieftext und
        eine Grußformel mit Ihrem Namen darunter.
      </GuideP>
      <GuideP>
        Da die Vorlage nur <GuideCode>geometry</GuideCode> und{" "}
        <GuideCode>hyperref</GuideCode> lädt, kompiliert sie ohne Änderungen mit
        pdfLaTeX in Overleaf, Octree oder jeder lokalen TeX-Installation. Der
        Brieftext ist ein Bewerbungsschreiben mit vier Absätzen und Platzhaltern in
        eckigen Klammern wie <GuideCode>[Position Title]</GuideCode> und{" "}
        <GuideCode>[Company Name]</GuideCode>: ein Einstieg, der die Stelle nennt,
        ein Absatz mit konkreten Erfolgen, ein Absatz dazu, warum Sie zu genau diesem
        Arbeitgeber möchten, und ein kurzer Schluss mit der Bitte um ein
        Vorstellungsgespräch.
      </GuideP>
      <GuideP>
        Ein Anschreiben in LaTeX lohnt sich vor allem dann, wenn auch Ihr Lebenslauf
        in LaTeX gesetzt ist: Schriften, Ränder und Kopfzeile passen zusammen, und Sie
        können für jede Bewerbung eine eigene Briefdatei unter Versionskontrolle
        halten. Kombinieren Sie es mit der{" "}
        <GuideLink href="/templates/resume">LaTeX-Lebenslaufvorlage</GuideLink> oder{" "}
        <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Was enthalten ist</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{letter}"}</GuideCode> mit Rändern von 1 Zoll
        </li>
        <li>
          Absenderblock aus <GuideCode>\address</GuideCode> (Adresse, Telefon, E-Mail)
          und ein automatisches Datum
        </li>
        <li>
          Empfängerblock in <GuideCode>{"\\begin{letter}{...}"}</GuideCode>
        </li>
        <li>
          Anrede mit <GuideCode>\opening</GuideCode> und Grußformel mit{" "}
          <GuideCode>\closing</GuideCode>, darunter der Name aus{" "}
          <GuideCode>\signature</GuideCode>
        </li>
        <li>Vier Platzhalterabsätze für eine Bewerbung</li>
      </GuideUl>

      <GuideH2 id="how-to-use">So verwenden Sie die Vorlage</GuideH2>
      <GuideOl>
        <li>
          Klicken Sie auf <em>Als Vorlage öffnen</em>, um in Octree zu bearbeiten, oder
          auf <em>Quellcode anzeigen</em> und fügen Sie den Code in Overleaf oder eine
          lokale <GuideCode>letter.tex</GuideCode> ein.
        </li>
        <li>
          Kompilieren Sie mit pdfLaTeX. XeLaTeX oder LuaLaTeX benötigen Sie nur, wenn
          Sie <GuideCode>fontspec</GuideCode> hinzufügen, um die Systemschrift Ihres
          Lebenslaufs zu übernehmen.
        </li>
        <li>
          Setzen Sie in der Präambel <GuideCode>\signature</GuideCode> auf Ihren Namen
          und <GuideCode>\address</GuideCode> auf Ihre Kontaktzeilen, getrennt durch{" "}
          <GuideCode>\\</GuideCode>.
        </li>
        <li>
          Ersetzen Sie die Empfängerzeilen in{" "}
          <GuideCode>{"\\begin{letter}{...}"}</GuideCode> und den Namen in{" "}
          <GuideCode>\opening</GuideCode>.
        </li>
        <li>
          Füllen Sie jeden Platzhalter in eckigen Klammern aus und durchsuchen Sie die
          Datei anschließend nach <GuideCode>[</GuideCode>, um sicherzugehen, dass
          keiner übrig ist.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Die Vorlage anpassen</GuideH2>
      <GuideP>
        <strong>E-Mail-Adresse und Portfolio anklickbar machen.</strong> hyperref ist
        bereits geladen; verwenden Sie also <GuideCode>\href</GuideCode> im
        Adressblock und blenden Sie die farbigen Linkrahmen aus:
      </GuideP>
      <GuidePre>{`\\hypersetup{hidelinks}
\\address{Your Name\\\\City, State ZIP\\\\
  \\href{mailto:you@example.com}{you@example.com}\\\\
  \\url{https://example.com}}`}</GuidePre>
      <GuideP>
        <strong>Anlagen und ein festes Datum hinzufügen.</strong> Die Klasse letter
        bietet Befehle für die Zeilen nach der Unterschrift:
      </GuideP>
      <GuidePre>{`\\date{12 March 2027}   % in der Präambel; \\date{} entfernt es

% ... nach \\closing{Sincerely,}
\\encl{Resume, transcript}
\\cc{Dr.~Jane Smith}`}</GuidePre>
      <GuideP>
        <strong>Eine Datei für viele Bewerbungen wiederverwenden.</strong> Definieren
        Sie Unternehmen und Stelle einmal in der Präambel und verwenden Sie die
        Makros im Brieftext; so ändern sich bei jeder neuen Bewerbung nur zwei Zeilen:
      </GuideP>
      <GuidePre>{`\\newcommand{\\company}{Acme Corp}
\\newcommand{\\role}{Data Scientist}

% im Brieftext
I am applying for the \\role{} position at \\company.`}</GuidePre>

      <GuideH2 id="faq">Häufige Fragen zur Anschreiben-Vorlage</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
