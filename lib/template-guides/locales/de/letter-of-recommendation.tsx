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
    question: "Wie lang sollte ein Empfehlungsschreiben sein?",
    answer:
      "Eine volle Seite ist üblich, zwei Seiten sind das Maximum für Empfehlungen zur Promotion, zum Masterstudium oder für Berufungen. Alles, was kürzer als etwa drei Absätze ist, wirkt halbherzig, denn Auswahlgremien gehen davon aus, dass jemand mit viel zu sagen auch mehr schreibt. Mit ausgefüllten Platzhaltern ergibt diese Vorlage bei 11pt und Rändern von einem Zoll etwa eine Seite; kürzen Sie den Abschnitt Personal Qualities oder die Beispiele, falls Sie auf eine dritte Seite geraten.",
  },
  {
    question: "Was gehört in den ersten Absatz eines Empfehlungsschreibens?",
    answer:
      "Nennen Sie, wen Sie wofür empfehlen, woher, in welcher Funktion und wie lange Sie die Person kennen, und wie überzeugt Sie insgesamt sind. Der Einleitungsabsatz der Vorlage tut genau das: Er nennt das Programm, die Dauer der Zusammenarbeit, Ihre Rolle (Professorin oder Professor, Betreuung oder Vorgesetzte) und eine vergleichende Aussage darüber, wo die Person unter den Studierenden steht, die Sie unterrichtet haben.",
  },
  {
    question: "Wie füge ich dem LaTeX-Brief einen Briefkopf oder ein Logo hinzu?",
    answer:
      "Laden Sie graphicx und setzen Sie ein \\includegraphics in den Befehl \\address, den die Klasse letter oben rechts auf der ersten Seite ausgibt: \\address{\\includegraphics[height=1.5cm]{logo.png}\\\\Department Name\\\\University Name\\\\...}. Für einen vorgedruckten Briefkopf über die ganze Seitenbreite legen Sie mit dem Paket eso-pic ein PDF oder Bild hinter die erste Seite, oder Sie drucken einfach auf Briefpapier.",
  },
  {
    question: "Wie füge ich eine eingescannte Unterschrift ein?",
    answer:
      "Setzen Sie das Bild in das Argument von \\signature: \\signature{\\includegraphics[height=1.2cm]{signature.png}\\\\Professor Name\\\\Title\\\\Department}. Die Klasse letter lässt nach \\closing standardmäßig Platz für eine handschriftliche Unterschrift; mit einem Bild können Sie diesen Abstand durch ein negatives \\vspace am Anfang des Arguments von \\signature verkleinern (\\longindentation verschiebt den Block nur horizontal).",
  },
  {
    question: "Sollte ein Empfehlungsschreiben ein Datum tragen und an eine Person gerichtet sein?",
    answer:
      "Ja. Die Klasse letter gibt \\today automatisch unter der Absenderadresse aus; mit \\date{March 3, 2026} legen Sie bei Bedarf ein bestimmtes Datum fest. Richten Sie das Schreiben an eine namentlich bekannte Person oder ein Gremium, sofern Sie es kennen (die Vorlage verwendet das Admissions Committee des Programms), und beginnen Sie mit „Dear Members of the Admissions Committee“ oder „Dear Dr. Name“ beziehungsweise auf Deutsch mit „Sehr geehrte Mitglieder der Auswahlkommission“. „To Whom It May Concern“ („Sehr geehrte Damen und Herren“) ist nur bei allgemein verwendbaren Schreiben angemessen.",
  },
];

export default function LetterOfRecommendationGuide() {
  return (
    <article>
      <GuideH2 id="what-is-it">Was ist diese Vorlage für Empfehlungsschreiben?</GuideH2>
      <GuideP>
        Dies ist eine kostenlose LaTeX-Vorlage für ein Empfehlungsschreiben, verfasst
        aus der Sicht einer Professorin, eines Professors oder einer betreuenden
        Person, die Studierende für ein weiterführendes Studienprogramm empfiehlt. Sie
        verwendet die Standardklasse <GuideCode>letter</GuideCode> in 11pt mit Rändern
        von einem Zoll über <GuideCode>geometry</GuideCode> sowie{" "}
        <GuideCode>hyperref</GuideCode> (geladen, aber ungenutzt; die E-Mail-Adresse ist
        reiner Text). Der Hauptteil ist unter vier fett gesetzten, eingebetteten
        Überschriften gegliedert, Academic Excellence, Research Capabilities, Personal
        Qualities und Recommendation, deren Platzhaltertext beschreibt, welche Belege
        jeweils dorthin gehören. Ergänzen Sie Namen, Daten und Beispiele, kompilieren
        Sie, und Sie erhalten einen sauberen, korrekt gesetzten Brief, in dem
        Absenderadresse, Datum, Empfängerblock, Anrede, Grußformel und Unterschrift
        dort stehen, wo die Leserschaft sie erwartet.
      </GuideP>
      <GuideP>
        Da die Klasse <GuideCode>letter</GuideCode> das Layout übernimmt, eignet sich
        die Vorlage ebenso für akademische Empfehlungen, Arbeitszeugnisse im Briefstil,
        Stipendien, Praktika und persönliche Referenzen; es ändern sich nur die
        Überschriften und die Belege.
      </GuideP>

      <GuideH2 id="structure">Der Aufbau eines überzeugenden Empfehlungsschreibens</GuideH2>
      <GuideP>
        Auswahlkommissionen und Personalverantwortliche lesen Hunderte solcher
        Schreiben. Die Schreiben, die Bewerbenden tatsächlich helfen, folgen einem
        vorhersehbaren Muster, an das sich auch die Vorlage hält:
      </GuideP>
      <GuideOl>
        <li>
          <strong>Einleitung: Beziehung und Urteil.</strong> Wen Sie wofür empfehlen, wie
          lange und in welcher Funktion Sie die Person kennen, und Ihr Gesamturteil in
          einem Satz. Der erste Absatz der Vorlage erledigt das und ergänzt eine
          vergleichende Aussage („one of the most outstanding students I have
          encountered in my X years of teaching“). Vergleiche sind das Nützlichste, was
          ein Empfehlungsschreiben enthalten kann, denn sie machen Ihr Lob einordenbar.
        </li>
        <li>
          <strong>Zwei oder drei konkrete Beispiele.</strong> Jeder mittlere Abschnitt
          sollte eine konkrete Begebenheit enthalten: ein Projekt, ein Ergebnis, eine
          Entscheidung der Person und was daraus folgte. „Ausgezeichnete analytische
          Fähigkeiten“ ist eine Behauptung; „hat einen Fehler in unserem
          Stichprobendesign entdeckt, der zwei Postdocs entgangen war, und die Lösung
          vorgeschlagen, die wir im veröffentlichten Artikel verwendet haben“ ist ein
          Beleg.
        </li>
        <li>
          <strong>Vergleichende und einordnende Aussagen.</strong> Ordnen Sie die Person
          ein, wo Sie das ehrlich können („unter den besten 5 Prozent der rund 400
          Studierenden, die ich unterrichtet habe“), und erklären Sie, was die Note oder
          Leistung in Ihrem Kurs oder Labor bedeutet.
        </li>
        <li>
          <strong>Persönliche Eigenschaften.</strong> Reife, Teamfähigkeit,
          Führungsstärke, Ausdauer, jeweils mit einem Beispiel. Fassen Sie sich kurz.
        </li>
        <li>
          <strong>Schluss: uneingeschränkte Empfehlung und Kontaktangebot.</strong>{" "}
          Bekräftigen Sie die Empfehlung, begründen Sie, warum die Person zu diesem
          Programm oder dieser Stelle passt, und bieten Sie an, für Rückfragen zur
          Verfügung zu stehen, mit E-Mail-Adresse und Telefonnummer.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Die Vorlage Abschnitt für Abschnitt</GuideH2>
      <GuideH3>Präambel: \signature und \address</GuideH3>
      <GuidePre>{`\\signature{Professor Name\\\\Title\\\\Department}
\\address{Department Name\\\\University Name\\\\Address\\\\City, State ZIP\\\\Email: professor@university.edu}`}</GuidePre>
      <GuideP>
        In der Klasse <GuideCode>letter</GuideCode> ist <GuideCode>\address</GuideCode>{" "}
        die Adresse des <em>Absenders</em>; sie erscheint oben rechts auf der ersten
        Seite, darunter das Datum. <GuideCode>\signature</GuideCode> ist der Text unter
        der Grußformel, nach einem Freiraum für die handschriftliche Unterschrift.
        Beides wird einmal in der Präambel festgelegt und von jeder{" "}
        <GuideCode>letter</GuideCode>-Umgebung in der Datei wiederverwendet; so lassen
        sich mehrere Schreiben für dieselbe Person bequem in einem Dokument erstellen.
      </GuideP>
      <GuideH3>Die Umgebung letter und \opening</GuideH3>
      <GuideP>
        <GuideCode>\begin{"{letter}{Admissions Committee\\\\Graduate Program Name\\\\...}"}</GuideCode>{" "}
        erhält die Adresse des <em>Empfängers</em> als Argument und gibt sie links über
        der Anrede aus.{" "}
        <GuideCode>\opening{"{Dear Members of the Admissions Committee,}"}</GuideCode>{" "}
        setzt die Anrede und eröffnet den Brieftext. Beide Befehle sind Pflicht: Fehlt{" "}
        <GuideCode>\opening</GuideCode>, entfallen Adresse, Datum und Anrede
        stillschweigend.
      </GuideP>
      <GuideH3>Absätze im Hauptteil</GuideH3>
      <GuideP>
        Der Hauptteil besteht aus gewöhnlichen, durch Leerzeilen getrennten Absätzen;{" "}
        <GuideCode>\textbf{"{Academic Excellence}"}</GuideCode> und die drei übrigen
        Überschriften stehen als fette Zeilen für sich. Die Klasse{" "}
        <GuideCode>letter</GuideCode> rückt Absätze nicht ein und fügt etwas Abstand
        zwischen ihnen ein, wie es im Schriftverkehr üblich ist. Ersetzen Sie jeden
        Platzhalter, auch die Alternativen he/she/they, durch den Namen und die
        Pronomen der Person; ein Schreiben, in dem noch „Student Name“ oder „his/her“
        steht, verrät auf den ersten Blick eine nicht fertig ausgefüllte Vorlage.
      </GuideP>
      <GuideH3>\closing</GuideH3>
      <GuideP>
        <GuideCode>\closing{"{Sincerely,}"}</GuideCode> setzt die Grußformel, lässt Platz
        für die Unterschrift und gibt den Block aus <GuideCode>\signature</GuideCode>{" "}
        aus. Danach können Sie <GuideCode>\encl{"{Transcript}"}</GuideCode>,{" "}
        <GuideCode>\cc{"{Graduate Coordinator}"}</GuideCode> oder{" "}
        <GuideCode>\ps{"{...}"}</GuideCode> für ein Postskriptum ergänzen.
      </GuideP>

      <GuideH2 id="variants">Akademische und berufliche Empfehlungsschreiben</GuideH2>
      <GuideUl>
        <li>
          <strong>Master- oder Promotionsstudium (Standard der Vorlage):</strong>{" "}
          Betonen Sie Forschung, geistige Selbstständigkeit, Schreib- und
          Analysefähigkeit sowie die Einordnung der Noten. Behalten Sie die vier
          Überschriften bei.
        </li>
        <li>
          <strong>Beruf:</strong> Benennen Sie die Überschriften um in Leistung und
          Ergebnisse, Fähigkeiten, Teamarbeit und Persönlichkeit sowie Empfehlung.
          Nennen Sie Ergebnisse, die für Arbeitgeber zählen: abgeschlossene Projekte,
          Umsatz, Zuverlässigkeit, der Umgang mit Rückschlägen. Erwähnen Sie in der
          Einleitung den Beschäftigungszeitraum und die Stellenbezeichnung.
        </li>
        <li>
          <strong>Stipendium oder Fellowship:</strong> Beziehen Sie jedes Beispiel auf
          die Vergabekriterien (Führungsstärke, Engagement, Potenzial) und sagen Sie
          ausdrücklich, warum gerade diese Person die Förderung verdient.
        </li>
        <li>
          <strong>Persönliche Referenz:</strong> Streichen Sie den akademischen
          Abschnitt, behalten Sie Personal Qualities und machen Sie deutlich, woher Sie
          die Person kennen und dass die Beziehung nicht rein beruflich ist.
        </li>
      </GuideUl>

      <GuideH2 id="customize">Anpassen: Briefkopf, Unterschrift, Datum, Länge</GuideH2>
      <GuideUl>
        <li>
          <strong>Briefkopf oder Logo.</strong> Ergänzen Sie{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> und setzen Sie{" "}
          <GuideCode>\includegraphics[height=1.5cm]{"{logo.png}"}</GuideCode> als erste
          Zeile von <GuideCode>\address</GuideCode>. Für einen vorgedruckten Briefkopf
          als ganzseitiges PDF verwenden Sie <GuideCode>eso-pic</GuideCode> mit{" "}
          <GuideCode>\AddToShipoutPictureBG*</GuideCode> auf der ersten Seite.
        </li>
        <li>
          <strong>Unterschrift als Bild.</strong>{" "}
          <GuideCode>\signature{"{\\includegraphics[height=1.2cm]{sig.png}\\\\Professor Name\\\\Title}"}</GuideCode>
          . Scannen Sie eine Unterschrift in schwarzer Tinte auf weißem Papier und
          schneiden Sie das Bild knapp zu.
        </li>
        <li>
          <strong>Grußformel linksbündig setzen.</strong> Die Klasse rückt Grußformel
          und Unterschrift standardmäßig bis zur Seitenmitte ein. Mit{" "}
          <GuideCode>\longindentation=0pt</GuideCode> in der Präambel stehen sie am
          linken Rand, wie es heute meist üblich ist.
        </li>
        <li>
          <strong>Datum.</strong> <GuideCode>\today</GuideCode> wird automatisch
          ausgegeben; mit <GuideCode>\date{"{March 3, 2026}"}</GuideCode> vor{" "}
          <GuideCode>\begin{"{document}"}</GuideCode> legen Sie es fest.
        </li>
        <li>
          <strong>Kontaktdaten.</strong> <GuideCode>\telephone{"{...}"}</GuideCode> steht
          zur Verfügung, die Standardklasse <GuideCode>letter</GuideCode> gibt die Nummer
          aber nur aus, wenn <GuideCode>\address</GuideCode> leer ist; einfacher ist es,
          die Telefonnummer direkt in <GuideCode>\address</GuideCode> aufzunehmen.
        </li>
        <li>
          <strong>Schrift und Schriftgröße.</strong> Ändern Sie{" "}
          <GuideCode>11pt</GuideCode> in <GuideCode>12pt</GuideCode> für ein
          klassischeres Erscheinungsbild, oder ergänzen Sie{" "}
          <GuideCode>\usepackage{"{newtxtext}"}</GuideCode> für Times.{" "}
          <GuideCode>a4paper</GuideCode> in den Klassenoptionen stellt das Papierformat
          um.
        </li>
        <li>
          <strong>Länge.</strong> Streben Sie eine Seite an, niemals mehr als zwei.
          Kürzen Sie eher Beispiele als vergleichende Aussagen.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Häufige Fehler und wie Sie sie beheben</GuideH2>
      <GuideUl>
        <li>
          <strong>„LaTeX Error: \opening missing“</strong> oder ungewöhnliche Abstände
          am Seitenanfang. Jede <GuideCode>letter</GuideCode>-Umgebung muss vor dem
          Brieftext ein <GuideCode>\opening</GuideCode> enthalten.
        </li>
        <li>
          <strong>„Undefined control sequence \includegraphics“.</strong> Ergänzen Sie{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> in der Präambel.
        </li>
        <li>
          <strong>„Misplaced alignment tab character &amp;“.</strong> Ein
          ungeschütztes kaufmännisches Und in einem Abteilungsnamen wie „Research &amp;
          Development“. Schreiben Sie <GuideCode>\&amp;</GuideCode>.
        </li>
        <li>
          <strong>Adresszeilen laufen ineinander.</strong> Zeilen innerhalb von{" "}
          <GuideCode>\address</GuideCode>, <GuideCode>\signature</GuideCode> und dem
          Empfängerargument werden durch <GuideCode>\\</GuideCode> getrennt, nicht
          durch Leerzeilen.
        </li>
        <li>
          <strong>Absenderadresse fehlt, nur das Datum erscheint.</strong> Sie haben{" "}
          <GuideCode>\address</GuideCode> leer gelassen oder erst nach{" "}
          <GuideCode>\opening</GuideCode> definiert. Belassen Sie es wie in der Vorlage
          in der Präambel.
        </li>
        <li>
          <strong>Die zweite Seite hat keine Kopfzeile.</strong> Das ist die
          Standardeinstellung der Klasse. Mit{" "}
          <GuideCode>\pagestyle{"{headings}"}</GuideCode> erscheinen Empfängername,
          Datum und Seitenzahl auf den Folgeseiten.
        </li>
      </GuideUl>

      <GuideH2 id="compile">So kompilieren Sie den Brief</GuideH2>
      <GuideOl>
        <li>
          <strong>In Octree:</strong> Klicken Sie auf <em>Als Vorlage öffnen</em>.
          Füllen Sie die Platzhalter im Editor mit Live-Vorschau aus, oder fügen Sie
          Ihre Notizen zur Person ein und lassen Sie den KI-Assistenten jeden Abschnitt
          entwerfen.
        </li>
        <li>
          <strong>In Overleaf:</strong> Fügen Sie den Quelltext in ein leeres Projekt ein
          und kompilieren Sie mit pdfLaTeX. Laden Sie Logo- oder Unterschriftsbilder in
          das Hauptverzeichnis des Projekts hoch.
        </li>
        <li>
          <strong>Lokal:</strong> Speichern Sie die Datei als{" "}
          <GuideCode>letter.tex</GuideCode> und führen Sie{" "}
          <GuideCode>pdflatex letter.tex</GuideCode> aus. Ein Durchlauf genügt.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Verwandte Briefvorlagen</GuideH2>
      <GuideTable
        headers={["Vorlage", "Geeignet für", "Klasse", "Aufbau"]}
        rows={[
          [
            <strong key="r">Empfehlungsschreiben</strong>,
            "Professorinnen, Professoren, Betreuende und Vorgesetzte, die für eine Person schreiben",
            <GuideCode key="c1">letter</GuideCode>,
            "Vier Abschnitte mit Überschrift: Leistung, Forschung, Eigenschaften, Empfehlung",
          ],
          [
            <GuideLink key="l" href="/templates/letter">
              Formeller Brief
            </GuideLink>,
            "Allgemeine geschäftliche und amtliche Korrespondenz",
            <GuideCode key="c2">letter</GuideCode>,
            "Schlichter Brieftext mit Absender, Empfänger, Anrede und Grußformel",
          ],
          [
            <GuideLink key="c" href="/templates/cover-letter">
              Anschreiben
            </GuideLink>,
            "Bewerbende, die für eine Stelle oder ein Programm über sich selbst schreiben",
            <GuideCode key="c3">letter</GuideCode>,
            "Drei oder vier Absätze, die Erfahrung und Anforderungen der Stelle verknüpfen",
          ],
        ]}
      />
      <GuideP>
        Wenn Sie sich selbst bewerben und nicht die Empfehlung schreiben, decken die
        Vorlagen für das{" "}
        <GuideLink href="/templates/motivation-letter">Motivationsschreiben</GuideLink> und
        das <GuideLink href="/templates/statement-of-purpose">Statement of Purpose</GuideLink>{" "}
        die Dokumente ab, die Sie selbst verfassen.
      </GuideP>

      <GuideH2 id="faq">Häufig gestellte Fragen</GuideH2>
      <GuideFaq items={faq} inLanguage="de" />
    </article>
  );
}
