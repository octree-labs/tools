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
    question: "¿Puedo usar esta plantilla de carta de presentación en Overleaf?",
    answer:
      "Sí. Usa la clase letter estándar y solo carga geometry y hyperref, que forman parte de cualquier distribución de TeX. Pega el código en un proyecto vacío de Overleaf, en Octree o en una instalación local de TeX Live o MiKTeX, y compila sin cambios con pdfLaTeX.",
  },
  {
    question: "¿Es una plantilla de carta de presentación o de carta de postulación?",
    answer:
      "Ambas. Una carta de presentación y una carta de postulación a un empleo tienen la misma estructura: tu dirección, la fecha, el destinatario, un saludo, tres o cuatro párrafos y una despedida. La misma plantilla sirve para postulaciones académicas, pasantías, posgrados y cartas de motivación; solo cambia la redacción de los párrafos.",
  },
  {
    question: "¿Cómo cambio o elimino la fecha?",
    answer:
      "La clase letter imprime \\today debajo de tu dirección. Para fijar una fecha, agrega \\date{12 March 2027} al preámbulo. Para eliminarla, usa \\date{} en su lugar.",
  },
  {
    question: "¿Cómo menciono que adjunto mi currículum?",
    answer:
      "Agrega \\encl{Resume} después de \\closing{Sincerely,} y la carta imprime una línea 'encl:' debajo de la firma. \\cc{Name} agrega de la misma forma una línea de copia, y \\ps{P.S. ...} agrega una posdata.",
  },
  {
    question: "¿Cómo hago que la carta de presentación quepa en una página?",
    answer:
      "Limita el cuerpo a tres o cuatro párrafos breves, que es lo que esperan de todos modos los responsables de contratación. Si aun así se pasa de una página, reduce el margen de \\usepackage[margin=1in]{geometry} a 0.8in o cambia la opción de la clase de 11pt a 10pt.",
  },
];

export default function CoverLetterGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla de carta de presentación en LaTeX</GuideH2>
      <GuideP>
        Esta es una plantilla de carta de presentación en LaTeX que también funciona como
        plantilla LaTeX de carta de postulación para empleos, pasantías, posgrados y puestos
        académicos. Está basada en la clase de documento estándar{" "}
        <GuideCode>letter</GuideCode>, que resuelve el diseño que necesita una carta formal:
        tu dirección de remitente y la fecha arriba a la derecha, el bloque con la dirección
        del destinatario a la izquierda, el saludo, el cuerpo y una despedida con tu nombre
        escrito debajo.
      </GuideP>
      <GuideP>
        Como la plantilla solo carga <GuideCode>geometry</GuideCode> y{" "}
        <GuideCode>hyperref</GuideCode>, compila con pdfLaTeX en Overleaf, Octree o
        cualquier instalación local de TeX sin cambios. El cuerpo es una carta de
        postulación de cuatro párrafos con marcadores entre corchetes como{" "}
        <GuideCode>[Position Title]</GuideCode> y <GuideCode>[Company Name]</GuideCode>: una
        apertura que nombra el puesto, un párrafo con logros concretos, otro sobre por qué
        quieres trabajar con ese empleador y un cierre breve en el que pides una entrevista.
      </GuideP>
      <GuideP>
        Escribir la carta de presentación en LaTeX tiene más sentido cuando tu currículum
        también está en LaTeX: las fuentes, los márgenes y el encabezado coinciden, y puedes
        mantener un archivo de carta por postulación bajo control de versiones. Combínala con
        la <GuideLink href="/templates/resume">plantilla de currículum en LaTeX</GuideLink> o
        con <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{letter}"}</GuideCode> con márgenes de 1 pulgada
        </li>
        <li>
          Bloque del remitente a partir de <GuideCode>\address</GuideCode> (dirección,
          teléfono, correo electrónico) y una fecha automática
        </li>
        <li>
          Bloque del destinatario en <GuideCode>{"\\begin{letter}{...}"}</GuideCode>
        </li>
        <li>
          Saludo con <GuideCode>\opening</GuideCode> y despedida con{" "}
          <GuideCode>\closing</GuideCode>, con el nombre tomado de{" "}
          <GuideCode>\signature</GuideCode>
        </li>
        <li>Cuatro párrafos de ejemplo para una postulación a un empleo</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>letter.tex</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX. Solo necesitas XeLaTeX o LuaLaTeX si agregas{" "}
          <GuideCode>fontspec</GuideCode> para que coincida con un currículum compuesto en una
          fuente del sistema.
        </li>
        <li>
          En el preámbulo, pon tu nombre en <GuideCode>\signature</GuideCode> y tus líneas de
          contacto en <GuideCode>\address</GuideCode>, separadas por{" "}
          <GuideCode>\\</GuideCode>.
        </li>
        <li>
          Reemplaza las líneas del destinatario en{" "}
          <GuideCode>{"\\begin{letter}{...}"}</GuideCode> y el nombre en{" "}
          <GuideCode>\opening</GuideCode>.
        </li>
        <li>
          Completa todos los marcadores entre corchetes y luego busca{" "}
          <GuideCode>[</GuideCode> en el archivo para asegurarte de que no quede ninguno.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Haz clicables tu correo y tu portafolio.</strong> hyperref ya está cargado,
        así que usa <GuideCode>\href</GuideCode> en el bloque de dirección y oculta los
        recuadros de color de los enlaces:
      </GuideP>
      <GuidePre>{`\\hypersetup{hidelinks}
\\address{Your Name\\\\City, State ZIP\\\\
  \\href{mailto:you@example.com}{you@example.com}\\\\
  \\url{https://example.com}}`}</GuidePre>
      <GuideP>
        <strong>Agrega anexos y una fecha fija.</strong> La clase letter tiene comandos para
        las líneas que van después de la firma:
      </GuideP>
      <GuidePre>{`\\date{12 March 2027}   % en el preámbulo; \\date{} la elimina

% ... después de \\closing{Sincerely,}
\\encl{Resume, transcript}
\\cc{Dr.~Jane Smith}`}</GuidePre>
      <GuideP>
        <strong>Reutiliza un mismo archivo para muchas postulaciones.</strong> Define la
        empresa y el puesto una sola vez en el preámbulo y usa las macros en el cuerpo; así,
        cada nueva postulación solo cambia dos líneas:
      </GuideP>
      <GuidePre>{`\\newcommand{\\company}{Acme Corp}
\\newcommand{\\role}{Data Scientist}

% en el cuerpo
Me postulo al puesto de \\role{} en \\company.`}</GuidePre>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de carta de presentación</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
