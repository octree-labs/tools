import {
  GuideCode,
  GuideFaq,
  GuideH2,
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
    question: "¿Esta plantilla de Beamer funciona en Overleaf?",
    answer:
      "Sí. Solo usa la clase de documento beamer con el tema integrado Madrid y el tema de color predeterminado, y no carga paquetes adicionales. Pega el código en un proyecto vacío de Overleaf, en Octree o en cualquier instalación de TeX Live o MiKTeX y compilará sin cambios con pdfLaTeX, el compilador predeterminado de Overleaf.",
  },
  {
    question: "¿Cómo hago que las diapositivas sean 16:9 en lugar de 4:3?",
    answer:
      "Añade la opción aspectratio a la línea de la clase: \\documentclass[aspectratio=169]{beamer}. El formato predeterminado de Beamer es 4:3 (128 por 96 mm); 169 da 160 por 90 mm, que llena los proyectores modernos y las videollamadas. También se aceptan 1610 y 43.",
  },
  {
    question: "¿Qué temas de Beamer puedo usar en lugar de Madrid?",
    answer:
      "Cualquier tema incluido en beamer funciona con solo cambiar \\usetheme{Madrid}: AnnArbor, Berlin, Boadilla, CambridgeUS, Copenhagen, Darmstadt, Frankfurt, Singapore y Warsaw son opciones habituales. Los temas de color, como beaver, crane, dolphin, seahorse y whale, van en \\usecolortheme{...}. El tema externo metropolis también funciona, pero se ve mejor con XeLaTeX o LuaLaTeX porque está diseñado en torno a las fuentes Fira.",
  },
  {
    question: "¿Por qué el pie de página muestra un título largo o el nombre completo de mi universidad?",
    answer:
      "Madrid imprime el autor, la institución, el título y la fecha en el pie de página usando las versiones cortas de esos campos. Dale a cada uno una versión corta entre corchetes, por ejemplo \\title[Short title]{Full Presentation Title} y \\institute[ABC]{Alpha Beta College}, y el pie de página usará el texto corto mientras la diapositiva de título conserva el largo.",
  },
  {
    question: "¿Cómo genero un folleto imprimible a partir de las diapositivas?",
    answer:
      "Añade handout a las opciones de la clase (\\documentclass[handout]{beamer}). Las superposiciones de \\pause y las especificaciones <2-> se reducen a una sola página por frame. Para imprimir varios frames por hoja, añade \\usepackage{pgfpages} y \\pgfpagesuselayout{4 on 1}[a4paper,border shrink=5mm] al preámbulo.",
  },
];

export default function BeamerPresentationGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla de presentación Beamer para LaTeX y Overleaf</GuideH2>
      <GuideP>
        Esta es una plantilla de presentación Beamer para LaTeX y Overleaf: una
        presentación inicial breve y limpia, basada en la clase estándar{" "}
        <GuideCode>beamer</GuideCode> con el tema integrado{" "}
        <GuideCode>Madrid</GuideCode> y el tema de color predeterminado. Madrid es
        una de las plantillas de Beamer más usadas para charlas académicas porque
        ofrece una barra de título de color, bloques redondeados y un pie de página
        en tres partes con autor, título y número de diapositiva, sin ninguna
        configuración.
      </GuideP>
      <GuideP>
        La plantilla no carga ningún paquete aparte del propio Beamer, así que en la
        práctica es una plantilla de Beamer para Overleaf: pégala en un proyecto
        vacío de Overleaf, ábrela en Octree o compílala en cualquier instalación de
        TeX Live o MiKTeX, y se genera con pdfLaTeX al primer intento. La
        presentación de ejemplo incluye una diapositiva de título, un índice
        generado a partir de los comandos <GuideCode>\section</GuideCode> y los
        frames Introduction, Main Content y Conclusion, que sustituyes por tu propio
        material.
      </GuideP>
      <GuideP>
        Si estás comparando plantillas de Beamer, empieza por esta cuando quieras el
        aspecto convencional que los revisores y tribunales esperan en una charla de
        congreso, una defensa de tesis o una clase. Para una presentación oscura,
        consulta el{" "}
        <GuideLink href="/templates/beamer-dark">tema oscuro de Beamer</GuideLink>, y
        para un póster A0 hecho con Beamer, la plantilla de{" "}
        <GuideLink href="/templates/conference-poster">póster para congresos</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass{beamer}"}</GuideCode> con{" "}
          <GuideCode>{"\\usetheme{Madrid}"}</GuideCode> y{" "}
          <GuideCode>{"\\usecolortheme{default}"}</GuideCode>
        </li>
        <li>
          Diapositiva de título a partir de <GuideCode>\title</GuideCode>,{" "}
          <GuideCode>\author</GuideCode>, <GuideCode>\institute</GuideCode> y{" "}
          <GuideCode>\date</GuideCode>
        </li>
        <li>Un frame con el índice generado automáticamente</li>
        <li>Tres secciones (Introduction, Main Content, Conclusion), cada una con un frame</li>
        <li>Un frame con una lista itemize que puedes copiar para diapositivas de viñetas</li>
        <li>Sin paquetes, fuentes ni imágenes externas, así que compila en cualquier lugar</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree con vista
          previa del PDF en vivo, o en <em>Ver código</em> y pega el código en un
          proyecto nuevo de Overleaf o en un archivo local{" "}
          <GuideCode>slides.tex</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX (<GuideCode>latexmk -pdf slides.tex</GuideCode>).
          XeLaTeX y LuaLaTeX también funcionan; solo los necesitas si cambias a
          fuentes del sistema con <GuideCode>fontspec</GuideCode> o usas el tema
          metropolis.
        </li>
        <li>
          Edita el bloque de título al principio del archivo:{" "}
          <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode>,{" "}
          <GuideCode>\institute</GuideCode> y <GuideCode>\date</GuideCode> rellenan
          tanto la diapositiva de título como el pie de página.
        </li>
        <li>
          Añade una diapositiva copiando un bloque{" "}
          <GuideCode>{"\\begin{frame} ... \\end{frame}"}</GuideCode>. Coloca{" "}
          <GuideCode>\section</GuideCode> antes de un grupo de frames para que
          aparezca en el índice.
        </li>
        <li>Compila dos veces para que el índice y los números de diapositiva estén actualizados.</li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Cambia el tema y los colores.</strong> Las dos líneas que siguen a la
        clase controlan todo el aspecto. Cambia el tema de diseño y el tema de color
        por separado, y quita los símbolos de navegación de la esquina inferior
        derecha, que casi ningún ponente usa:
      </GuideP>
      <GuidePre>{`\\documentclass[aspectratio=169]{beamer}
\\usetheme{Madrid}
\\usecolortheme{beaver}   % o crane, dolphin, seahorse, whale
\\setbeamertemplate{navigation symbols}{}`}</GuidePre>
      <GuideP>
        <strong>Usa campos cortos en el pie de página.</strong> Madrid imprime el
        autor, la institución y el título en el pie de página, así que los nombres
        largos se desbordan. Usa las versiones cortas opcionales:
      </GuideP>
      <GuidePre>{`\\title[Short Title]{A Much Longer Presentation Title}
\\author[A.~Author]{Alice Author}
\\institute[UoX]{University of Example}`}</GuidePre>
      <GuideP>
        <strong>Muestra un esquema en cada sección.</strong> Pon esto en el preámbulo
        y Beamer insertará un frame con el esquema, con la sección actual resaltada,
        cada vez que empiece un nuevo <GuideCode>\section</GuideCode>:
      </GuideP>
      <GuidePre>{`\\AtBeginSection[]{
  \\begin{frame}
    \\frametitle{Outline}
    \\tableofcontents[currentsection]
  \\end{frame}
}`}</GuidePre>

      <GuideH2 id="comparison">Plantillas de Beamer relacionadas</GuideH2>
      <GuideTable
        headers={["Plantilla", "Aspecto", "Compilador"]}
        rows={[
          [<strong key="b">Presentación Beamer</strong>, "Madrid, claro, 4:3", "pdfLaTeX"],
          [
            <GuideLink key="d" href="/templates/beamer-dark">
              Tema oscuro de Beamer
            </GuideLink>,
            "Madrid con una paleta oscura, 16:9",
            "pdfLaTeX",
          ],
          [
            <GuideLink key="p" href="/templates/conference-poster">
              Póster para congresos
            </GuideLink>,
            "beamerposter A0",
            "pdfLaTeX",
          ],
        ]}
      />

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de Beamer</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
