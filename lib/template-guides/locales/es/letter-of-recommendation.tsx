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
    question: "¿Qué extensión debe tener una carta de recomendación?",
    answer:
      "Lo habitual es una página completa, y dos páginas es el máximo para cartas de posgrado o para puestos docentes. Algo más corto que unos tres párrafos suena tibio, porque los comités suponen que quien tiene mucho que decir escribe más. Esta plantilla ocupa aproximadamente una página a 11pt con márgenes de una pulgada una vez completados los marcadores; si llegas a una tercera página, recorta la sección de cualidades personales o acorta los ejemplos.",
  },
  {
    question: "¿Qué debe decir el primer párrafo de una carta de recomendación?",
    answer:
      "A quién recomiendas, para qué, cómo lo conoces, en qué calidad y desde hace cuánto tiempo, y tu grado general de entusiasmo. El párrafo inicial de la plantilla hace exactamente eso: menciona el programa, la duración de la relación, tu papel (profesor, director o supervisor) y una comparación sobre el lugar que ocupa el candidato entre los estudiantes a los que has dado clase.",
  },
  {
    question: "¿Cómo agrego un membrete o un logotipo a la carta en LaTeX?",
    answer:
      "Carga graphicx y coloca un \\includegraphics dentro del comando \\address, que la clase letter imprime arriba a la derecha de la primera página: \\address{\\includegraphics[height=1.5cm]{logo.png}\\\\Department Name\\\\University Name\\\\...}. Para un membrete preimpreso a todo lo ancho, usa el paquete eso-pic para colocar un PDF o una imagen detrás de la primera página, o simplemente imprime en papel membretado.",
  },
  {
    question: "¿Cómo inserto una firma escaneada?",
    answer:
      "Pon la imagen en el argumento de \\signature: \\signature{\\includegraphics[height=1.2cm]{signature.png}\\\\Professor Name\\\\Title\\\\Department}. Por defecto, la clase letter deja un espacio vertical después de \\closing para la firma manuscrita; con una imagen, puedes reducir ese hueco con un \\vspace negativo al comienzo del argumento de \\signature (\\longindentation solo desplaza el bloque en horizontal).",
  },
  {
    question: "¿Una carta de recomendación debe llevar fecha e ir dirigida a una persona?",
    answer:
      "Sí. La clase letter imprime \\today automáticamente debajo de la dirección del remitente; si necesitas una fecha concreta, reemplázala con \\date{3 de marzo de 2026}. Dirige la carta a una persona o a un comité con nombre cuando lo conozcas (la plantilla usa el Comité de Admisiones del programa) y empieza con «Estimados miembros del Comité de Admisiones» o «Estimada Dra. Apellido». «A quien corresponda» solo es aceptable en cartas de uso general.",
  },
];

export default function LetterOfRecommendationGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">¿Qué es esta plantilla de carta de recomendación?</GuideH2>
      <GuideP>
        Es una plantilla gratuita de carta de recomendación en LaTeX, escrita desde el
        punto de vista de un profesor o supervisor que recomienda a un estudiante para un
        programa de posgrado. Usa la clase de documento estándar{" "}
        <GuideCode>letter</GuideCode> a 11pt, con márgenes de una pulgada definidos con{" "}
        <GuideCode>geometry</GuideCode>, y <GuideCode>hyperref</GuideCode> (cargado pero sin
        usar; el correo electrónico es texto plano). El cuerpo se organiza en cuatro
        encabezados en negrita, Academic Excellence, Research Capabilities, Personal
        Qualities y Recommendation (excelencia académica, capacidad de investigación,
        cualidades personales y recomendación), con texto provisional que te indica qué
        tipo de evidencia corresponde a cada uno. Completa los nombres, las fechas y los
        ejemplos, compila y tendrás una carta limpia y bien maquetada, con la dirección del
        remitente, la fecha, el bloque del destinatario, el saludo, la despedida y la
        firma en los lugares donde el lector espera encontrarlos.
      </GuideP>
      <GuideP>
        Como la clase <GuideCode>letter</GuideCode> se encarga de la maquetación, la
        plantilla sirve igual de bien para referencias académicas, laborales, de becas, de
        prácticas o personales; solo cambian los encabezados y la evidencia.
      </GuideP>

      <GuideH2 id="structure">La estructura de una buena carta de recomendación</GuideH2>
      <GuideP>
        Los comités de admisión y los responsables de contratación leen cientos de estas
        cartas. Las que realmente ayudan a un candidato tienen una forma previsible, que es
        la que sigue la plantilla:
      </GuideP>
      <GuideOl>
        <li>
          <strong>Apertura: relación y valoración.</strong> A quién recomiendas, para qué,
          desde hace cuánto y en qué calidad lo conoces, y tu juicio general en una sola
          frase. El primer párrafo de la plantilla hace esto y agrega una comparación
          (&quot;uno de los estudiantes más destacados que he tenido en mis X años de
          docencia&quot;). Las comparaciones son lo más útil que puede contener una carta,
          porque dan la medida de tus elogios.
        </li>
        <li>
          <strong>Dos o tres ejemplos concretos.</strong> Cada sección central debe contar
          una historia concreta: un proyecto, un resultado, una decisión que tomó el
          candidato y lo que salió de ella. &quot;Excelente capacidad de análisis&quot; es
          una afirmación; &quot;detectó un error en nuestro diseño de muestreo que se les
          había pasado a dos posdoctorandos y propuso la corrección que usamos en el
          artículo publicado&quot; es evidencia.
        </li>
        <li>
          <strong>Comparaciones y contexto.</strong> Sitúa al candidato en una
          clasificación siempre que puedas hacerlo con honestidad (&quot;entre el 5 % mejor
          de los aproximadamente 400 estudiantes a los que he dado clase&quot;) y explica
          qué significa la calificación o el logro en tu curso o laboratorio.
        </li>
        <li>
          <strong>Cualidades personales.</strong> Madurez, colaboración, liderazgo,
          perseverancia, con un ejemplo de cada una. Sé breve.
        </li>
        <li>
          <strong>Cierre: recomendación sin reservas y ofrecimiento de contacto.</strong>{" "}
          Reitera la recomendación, explica por qué el candidato encaja en este programa o
          puesto e invita al lector a ponerse en contacto contigo, con correo electrónico y
          teléfono.
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">Recorrido por la plantilla, sección por sección</GuideH2>
      <GuideH3>Preámbulo: \signature y \address</GuideH3>
      <GuidePre>{`\\signature{Professor Name\\\\Title\\\\Department}
\\address{Department Name\\\\University Name\\\\Address\\\\City, State ZIP\\\\Email: professor@university.edu}`}</GuidePre>
      <GuideP>
        En la clase <GuideCode>letter</GuideCode>, <GuideCode>\address</GuideCode> es la
        dirección del <em>remitente</em>; se imprime arriba a la derecha de la primera
        página, con la fecha debajo. <GuideCode>\signature</GuideCode> es el texto que se
        imprime bajo la despedida, después de un espacio para la firma manuscrita. Ambos se
        definen una sola vez en el preámbulo y los reutilizan todos los entornos{" "}
        <GuideCode>letter</GuideCode> del archivo, lo que facilita preparar varias cartas
        para el mismo estudiante en un único documento.
      </GuideP>
      <GuideH3>El entorno letter y \opening</GuideH3>
      <GuideP>
        <GuideCode>\begin{"{letter}{Admissions Committee\\\\Graduate Program Name\\\\...}"}</GuideCode>{" "}
        recibe como argumento la dirección del <em>destinatario</em> y la imprime a la
        izquierda, encima del saludo.{" "}
        <GuideCode>\opening{"{Dear Members of the Admissions Committee,}"}</GuideCode>{" "}
        imprime el saludo y da comienzo al cuerpo. Los dos comandos son obligatorios: una
        carta sin <GuideCode>\opening</GuideCode> omite sin avisar la dirección, la fecha y
        el saludo.
      </GuideP>
      <GuideH3>Párrafos del cuerpo</GuideH3>
      <GuideP>
        El cuerpo son párrafos normales separados por líneas en blanco, con{" "}
        <GuideCode>\textbf{"{Academic Excellence}"}</GuideCode> y los otros tres encabezados
        como líneas en negrita independientes. La clase <GuideCode>letter</GuideCode> no
        aplica sangría a los párrafos y añade un poco de espacio entre ellos, que es la
        convención adecuada para la correspondencia. Reemplaza todos los marcadores,
        incluidas las alternativas he/she/they, por el nombre y los pronombres del
        candidato; una carta que todavía dice &quot;Student Name&quot; o
        &quot;his/her&quot; es la señal clásica de una plantilla sin terminar.
      </GuideP>
      <GuideH3>\closing</GuideH3>
      <GuideP>
        <GuideCode>\closing{"{Sincerely,}"}</GuideCode> imprime la fórmula de despedida,
        deja espacio para firmar e imprime el bloque de <GuideCode>\signature</GuideCode>.
        Después puedes agregar <GuideCode>\encl{"{Transcript}"}</GuideCode>,{" "}
        <GuideCode>\cc{"{Graduate Coordinator}"}</GuideCode> o{" "}
        <GuideCode>\ps{"{...}"}</GuideCode> para una posdata.
      </GuideP>

      <GuideH2 id="variants">Cartas de recomendación académicas y profesionales</GuideH2>
      <GuideUl>
        <li>
          <strong>Posgrado (la opción predeterminada de la plantilla):</strong> destaca la
          investigación, la independencia intelectual, la capacidad de redacción y de
          análisis, y las calificaciones en contexto. Conserva los cuatro encabezados.
        </li>
        <li>
          <strong>Empleo:</strong> cambia los encabezados por Desempeño y resultados,
          Competencias, Trabajo en equipo y carácter, y Recomendación. Usa resultados que
          le importen al empleador: proyectos entregados, ingresos, fiabilidad, cómo
          manejó un contratiempo. Menciona en la apertura las fechas de empleo y el
          cargo.
        </li>
        <li>
          <strong>Beca o fellowship:</strong> relaciona cada ejemplo con los criterios de la
          convocatoria (liderazgo, servicio, potencial) y di explícitamente por qué este
          candidato merece esta beca.
        </li>
        <li>
          <strong>Referencia personal:</strong> elimina la sección académica, conserva la de
          cualidades personales y deja claro cómo conoces a la persona y que la relación no
          es puramente profesional.
        </li>
      </GuideUl>

      <GuideH2 id="customize">Cómo personalizarla: membrete, firma, fechas y extensión</GuideH2>
      <GuideUl>
        <li>
          <strong>Membrete o logotipo.</strong> Agrega{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> y coloca{" "}
          <GuideCode>\includegraphics[height=1.5cm]{"{logo.png}"}</GuideCode> como primera
          línea de <GuideCode>\address</GuideCode>. Para un membrete preimpreso en PDF a
          página completa, usa <GuideCode>eso-pic</GuideCode> con{" "}
          <GuideCode>\AddToShipoutPictureBG*</GuideCode> en la primera página.
        </li>
        <li>
          <strong>Imagen de la firma.</strong>{" "}
          <GuideCode>\signature{"{\\includegraphics[height=1.2cm]{sig.png}\\\\Professor Name\\\\Title}"}</GuideCode>
          . Escanéala en tinta negra sobre fondo blanco y recórtala al ras.
        </li>
        <li>
          <strong>Alinea la despedida a la izquierda.</strong> Por defecto, la clase
          sangra la despedida y la firma hasta la mitad de la página. Agrega{" "}
          <GuideCode>\longindentation=0pt</GuideCode> en el preámbulo para llevarlas al
          margen izquierdo, que es la disposición moderna más habitual.
        </li>
        <li>
          <strong>Fecha.</strong> <GuideCode>\today</GuideCode> se imprime automáticamente;
          usa <GuideCode>\date{"{March 3, 2026}"}</GuideCode> antes de{" "}
          <GuideCode>\begin{"{document}"}</GuideCode> para fijarla.
        </li>
        <li>
          <strong>Datos de contacto.</strong> Existe{" "}
          <GuideCode>\telephone{"{...}"}</GuideCode>, pero la clase{" "}
          <GuideCode>letter</GuideCode> predeterminada solo lo imprime cuando{" "}
          <GuideCode>\address</GuideCode> está vacío; es más sencillo incluir el número de
          teléfono en <GuideCode>\address</GuideCode>.
        </li>
        <li>
          <strong>Tipografía y tamaño.</strong> Cambia <GuideCode>11pt</GuideCode> por{" "}
          <GuideCode>12pt</GuideCode> para un aspecto más tradicional, o agrega{" "}
          <GuideCode>\usepackage{"{newtxtext}"}</GuideCode> para usar Times. Con{" "}
          <GuideCode>a4paper</GuideCode> en las opciones de la clase cambias el tamaño del
          papel.
        </li>
        <li>
          <strong>Extensión.</strong> Apunta a una página y nunca pases de dos. Recorta
          ejemplos antes que comparaciones.
        </li>
      </GuideUl>

      <GuideH2 id="errors">Errores comunes y cómo solucionarlos</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;LaTeX Error: \opening missing&quot;</strong> o un espaciado extraño
          en la parte superior. Cada entorno <GuideCode>letter</GuideCode> debe contener un{" "}
          <GuideCode>\opening</GuideCode> antes del texto del cuerpo.
        </li>
        <li>
          <strong>&quot;Undefined control sequence \includegraphics&quot;.</strong> Agrega{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode> al preámbulo.
        </li>
        <li>
          <strong>&quot;Misplaced alignment tab character &amp;&quot;.</strong> Hay un
          ampersand suelto en el nombre de un departamento, como &quot;Investigación &amp;
          Desarrollo&quot;. Escribe <GuideCode>\&amp;</GuideCode>.
        </li>
        <li>
          <strong>Las líneas de la dirección salen pegadas.</strong> Las líneas dentro de{" "}
          <GuideCode>\address</GuideCode>, de <GuideCode>\signature</GuideCode> y del
          argumento del destinatario se separan con <GuideCode>\\</GuideCode>, no con líneas
          en blanco.
        </li>
        <li>
          <strong>Falta la dirección del remitente y solo aparece la fecha.</strong> Dejaste{" "}
          <GuideCode>\address</GuideCode> vacío o lo definiste después de{" "}
          <GuideCode>\opening</GuideCode>. Mantenlo en el preámbulo, como hace la plantilla.
        </li>
        <li>
          <strong>La segunda página no tiene encabezado.</strong> Es el comportamiento
          predeterminado de la clase. Agrega <GuideCode>\pagestyle{"{headings}"}</GuideCode>{" "}
          para imprimir el nombre del destinatario, la fecha y el número de página en las
          páginas siguientes.
        </li>
      </GuideUl>

      <GuideH2 id="compile">Cómo compilar la carta</GuideH2>
      <GuideOl>
        <li>
          <strong>En Octree:</strong> haz clic en <em>Abrir como plantilla</em>. Completa
          los marcadores en el editor con vista previa en vivo, o pega tus notas sobre el
          estudiante y pídele al asistente de IA que redacte cada sección.
        </li>
        <li>
          <strong>En Overleaf:</strong> pega el código en un proyecto en blanco y compila
          con pdfLaTeX. Sube las imágenes del logotipo o de la firma a la raíz del
          proyecto.
        </li>
        <li>
          <strong>En local:</strong> guarda el archivo como{" "}
          <GuideCode>letter.tex</GuideCode> y ejecuta{" "}
          <GuideCode>pdflatex letter.tex</GuideCode>. Basta con una pasada.
        </li>
      </GuideOl>

      <GuideH2 id="comparison">Plantillas de cartas relacionadas</GuideH2>
      <GuideTable
        headers={["Plantilla", "Ideal para", "Clase", "Estructura"]}
        rows={[
          [
            <strong key="r">Carta de recomendación</strong>,
            "Profesores, directores y responsables que escriben a favor de un candidato",
            <GuideCode key="c1">letter</GuideCode>,
            "Cuatro secciones con encabezado: excelencia, investigación, cualidades, recomendación",
          ],
          [
            <GuideLink key="l" href="/templates/letter">
              Carta formal
            </GuideLink>,
            "Correspondencia comercial y oficial en general",
            <GuideCode key="c2">letter</GuideCode>,
            "Cuerpo sencillo con remitente, destinatario, saludo y despedida",
          ],
          [
            <GuideLink key="c" href="/templates/cover-letter">
              Carta de presentación
            </GuideLink>,
            "Candidatos que escriben sobre sí mismos para un empleo o un programa",
            <GuideCode key="c3">letter</GuideCode>,
            "Tres o cuatro párrafos que relacionan la experiencia con el puesto",
          ],
        ]}
      />
      <GuideP>
        Si eres quien postula y no quien recomienda, las plantillas de{" "}
        <GuideLink href="/templates/motivation-letter">carta de motivación</GuideLink> y de{" "}
        <GuideLink href="/templates/statement-of-purpose">declaración de propósito</GuideLink>{" "}
        cubren los documentos que escribes tú mismo.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
