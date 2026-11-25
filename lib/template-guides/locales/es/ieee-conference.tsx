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
    question: "¿Cuál es el formato de artículo del IEEE?",
    answer:
      "Un artículo de conferencia del IEEE se compone en papel carta estadounidense, a dos columnas de texto Times de 10 pt, con un título centrado de 24 pt, bloques de autores debajo del título, Abstract e Index Terms con encabezado en negritas integrado al párrafo, secciones numeradas con romanos y títulos en versalitas, citas numeradas entre corchetes y sin números de página. La clase IEEEtran de LaTeX en modo conference genera todo esto automáticamente; tú solo aportas el contenido.",
  },
  {
    question: "¿IEEEtran es la plantilla oficial del IEEE?",
    answer:
      "Sí. IEEEtran.cls es la clase que el IEEE distribuye para sus transactions, revistas y conferencias, y la opción conference corresponde a la plantilla de conferencia del IEEE Author Center. Viene incluida en TeX Live y MiKTeX, así que no hace falta descargarla. Algunas conferencias incluyen una copia de la clase en su convocatoria; normalmente es el mismo archivo.",
  },
  {
    question: "¿Cuántos autores puedo incluir y cómo indico una afiliación compartida?",
    answer:
      "No hay límite. Cada par \\IEEEauthorblockN / \\IEEEauthorblockA forma un bloque, separado del siguiente con \\and; IEEEtran acomoda hasta tres por fila. Si hay muchos autores que comparten afiliaciones, usa la alternativa que está comentada en la plantilla: escribe los nombres una sola vez con marcas \\IEEEauthorrefmark{1} y pon cada afiliación en una línea \\IEEEauthorblockA.",
  },
  {
    question: "¿Puedo usar BibTeX con esta plantilla?",
    answer:
      "Sí. La plantilla trae un thebibliography escrito a mano para que compile por sí sola. Elimina ese entorno, conserva \\bibliographystyle{IEEEtran} y agrega \\bibliography{refs} apuntando a tu archivo .bib; IEEEtran.bst viene con la clase. El paquete cite, que ya está cargado, agrupa los números consecutivos en rangos.",
  },
  {
    question: "¿Por qué no debo cambiar los márgenes?",
    answer:
      "IEEE PDF eXpress y los organizadores de la conferencia revisan la geometría de la página. IEEEtran fija los márgenes, el ancho de columna y la separación entre columnas que exige la especificación del IEEE; si cargas geometry o cambias \\textwidth, el artículo no pasará la revisión de cumplimiento. Si tu artículo es demasiado largo, recorta texto o figuras.",
  },
];

export default function IeeeConferenceGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">¿Qué es esta plantilla de conferencia del IEEE?</GuideH2>
      <GuideP>
        Esta plantilla es el formato oficial completo de artículo de conferencia del IEEE
        que genera <GuideCode>\documentclass[conference]{"{IEEEtran}"}</GuideCode>, la
        clase que el IEEE distribuye para sus conferencias y que ya viene instalada en
        todas las distribuciones de TeX. Incluye todo lo que necesita un envío completo:
        un título con una nota al pie de financiamiento mediante{" "}
        <GuideCode>\thanks</GuideCode>, un bloque de tres autores con{" "}
        <GuideCode>\IEEEauthorblockN</GuideCode> y{" "}
        <GuideCode>\IEEEauthorblockA</GuideCode>, el Abstract y los Index Terms con
        encabezado en negritas integrado al párrafo, una introducción con letra capital
        mediante <GuideCode>\IEEEPARstart</GuideCode>, una ecuación numerada, un
        algoritmo con <GuideCode>algorithmic</GuideCode>, una tabla con{" "}
        <GuideCode>booktabs</GuideCode> y el pie arriba, una figura con el pie abajo, una
        sección de agradecimientos y una lista de referencias en estilo IEEE.
      </GuideP>
      <GuideP>
        Se diferencia de la plantilla más breve de{" "}
        <GuideLink href="/templates/research-paper">artículo de investigación</GuideLink>,
        que también usa IEEEtran, en que cubre el formato completo: bloques de autores
        correctos con departamento, institución, ciudad y correo electrónico, palabras
        clave, agradecimientos, una tabla y una figura con pies al estilo IEEE, y cinco
        referencias con formato. Usa esta cuando vayas a preparar un envío real.
      </GuideP>

      <GuideH2 id="format">Las reglas de formato del IEEE que aplica la clase</GuideH2>
      <GuideUl>
        <li>Papel carta estadounidense, dos columnas, texto de 10 pt en una fuente tipo Times.</li>
        <li>Título de 24 pt, nombres de autores de 11 pt y afiliaciones de 10 pt, todo centrado.</li>
        <li>
          Dos columnas de 3.5 in con una separación de 12 pt y márgenes definidos por la
          clase. No cargues <GuideCode>geometry</GuideCode> ni modifiques{" "}
          <GuideCode>\textwidth</GuideCode>.
        </li>
        <li>Abstract e Index Terms en negritas, con el encabezado integrado al párrafo.</li>
        <li>
          Secciones numeradas con romanos en versalitas y subsecciones con letras en
          cursiva.
        </li>
        <li>
          Pies de tabla arriba de la tabla en versalitas (&quot;TABLE I&quot;); pies de
          figura abajo (&quot;Fig. 1.&quot;).
        </li>
        <li>
          Citas numeradas entre corchetes, con los números consecutivos agrupados por el
          paquete <GuideCode>cite</GuideCode>.
        </li>
        <li>
          Sin números de página; la conferencia los agrega al armar las memorias.
        </li>
      </GuideUl>

      <GuideH2 id="walkthrough">Recorrido por la plantilla</GuideH2>
      <GuideH3>Bloque de autores</GuideH3>
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
        Un par N/A por autor, separados con <GuideCode>\and</GuideCode>; IEEEtran
        coloca hasta tres bloques por fila. El prefijo ordinal (1st, 2nd) es la
        convención actual de la plantilla de conferencias del IEEE y puedes borrarlo.
        Para seis o más autores que comparten instituciones, usa la variante con{" "}
        <GuideCode>\IEEEauthorrefmark</GuideCode> que quedó como comentario en el
        código.
      </GuideP>
      <GuideH3>Resumen, palabras clave e introducción</GuideH3>
      <GuideP>
        <GuideCode>abstract</GuideCode> e <GuideCode>IEEEkeywords</GuideCode> deben ir
        después de <GuideCode>\maketitle</GuideCode>. Mantén el resumen entre 150 y 250
        palabras e incluye de tres a seis términos de indexación separados por comas y
        en orden alfabético. <GuideCode>\IEEEPARstart{"{D}{eep}"}</GuideCode> genera la
        letra capital con la que empiezan los artículos del IEEE; es opcional.
      </GuideP>
      <GuideH3>Ecuaciones, algoritmos, tablas y figuras</GuideH3>
      <GuideP>
        El ejemplo usa un bloque <GuideCode>aligned</GuideCode> dentro de{" "}
        <GuideCode>equation</GuideCode> para que un problema de optimización largo quepa
        en una columna, un listado <GuideCode>algorithmic</GuideCode> para el método y
        flotantes <GuideCode>[htbp]</GuideCode> para la tabla y la figura. La figura es
        una gráfica de barras hecha con TikZ para que la plantilla compile sin archivos
        de imagen; sustitúyela por{" "}
        <GuideCode>\includegraphics[width=\columnwidth]{"{energy.pdf}"}</GuideCode>. Las
        tablas o figuras anchas que ocupan las dos columnas usan{" "}
        <GuideCode>table*</GuideCode> y <GuideCode>figure*</GuideCode>.
      </GuideP>
      <GuideH3>Referencias</GuideH3>
      <GuideP>
        El estilo IEEE escribe a los autores con las iniciales y luego el apellido, los
        títulos entre comillas, los nombres de las publicaciones abreviados y en
        cursiva, y el año al final. Con BibTeX, elimina el bloque{" "}
        <GuideCode>thebibliography</GuideCode> y usa{" "}
        <GuideCode>\bibliographystyle{"{IEEEtran}"}</GuideCode> con{" "}
        <GuideCode>\bibliography{"{refs}"}</GuideCode>.
      </GuideP>

      <GuideH2 id="customize">Cómo cambiar entre formatos del IEEE</GuideH2>
      <GuideTable
        headers={["Destino", "Línea de clase", "Notas"]}
        rows={[
          [
            "Artículo de conferencia",
            <GuideCode key="c">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Esta plantilla",
          ],
          [
            "Transactions / revista",
            <GuideCode key="j">\documentclass[journal]{"{IEEEtran}"}</GuideCode>,
            "Agrega encabezados de página, biografías de los autores y resumen a una columna",
          ],
          [
            "Revisión doble ciego",
            <GuideCode key="r">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "Sustituye el bloque de autores por un solo bloque anónimo y elimina \\thanks",
          ],
          [
            "Borrador con interlineado",
            <GuideCode key="d">\documentclass[conference,draftcls,onecolumn]{"{IEEEtran}"}</GuideCode>,
            "Para circular un borrador fácil de leer; nunca lo envíes así",
          ],
        ]}
      />

      <GuideH2 id="errors">Errores frecuentes</GuideH2>
      <GuideUl>
        <li>
          <strong>&quot;Command \thanks already defined&quot; o \thanks se ignora.</strong>{" "}
          Deja <GuideCode>\IEEEoverridecommandlockouts</GuideCode> justo después de la
          línea documentclass, como en la plantilla.
        </li>
        <li>
          <strong>Ecuación que se sale del margen.</strong> Divídela con{" "}
          <GuideCode>aligned</GuideCode> o <GuideCode>split</GuideCode>; las columnas del
          IEEE miden apenas 3.5 in de ancho.
        </li>
        <li>
          <strong>La figura se va al final.</strong> Usa <GuideCode>[!t]</GuideCode> para
          colocarla arriba y asegúrate de que sea más angosta que{" "}
          <GuideCode>\columnwidth</GuideCode>.
        </li>
        <li>
          <strong>El artículo excede el límite de páginas.</strong> La mayoría de las
          conferencias del IEEE permiten seis páginas y una o dos páginas extra con
          costo; recorta contenido en lugar de espaciado, porque el espaciado se revisa.
        </li>
      </GuideUl>

      <GuideH2 id="compile">Cómo compilar</GuideH2>
      <GuideOl>
        <li>
          <strong>En Octree:</strong> haz clic en <em>Abrir como plantilla</em> y escribe
          con la vista previa en vivo a dos columnas.
        </li>
        <li>
          <strong>En Overleaf:</strong> pégala en un proyecto nuevo; pdfLaTeX es el
          compilador predeterminado y IEEEtran ya viene instalado.
        </li>
        <li>
          <strong>En tu computadora:</strong> <GuideCode>pdflatex paper.tex</GuideCode>{" "}
          dos veces para resolver las referencias cruzadas, o{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>.
        </li>
      </GuideOl>
      <GuideP>
        ¿Vas a enviar a ICASSP, CVPR u otra conferencia con estilo IEEE? Consulta la{" "}
        <GuideLink href="/conference-deadlines">página de fechas límite de conferencias</GuideLink>{" "}
        para ver los periodos de envío habituales.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
