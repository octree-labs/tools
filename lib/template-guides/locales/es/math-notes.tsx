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
    question: "¿Cómo tomo apuntes de matemáticas en LaTeX?",
    answer:
      "Usa una plantilla que ya tenga definidos los entornos de teoremas, como esta, para que solo tengas que escribir \\begin{theorem}, \\begin{definition} o \\begin{proof} y la numeración y el formato salgan solos. Define atajos para los símbolos que usas con frecuencia, como \\newcommand{\\R}{\\mathbb{R}}, para seguirle el ritmo a la clase.",
  },
  {
    question: "¿Qué entornos de teoremas define la plantilla?",
    answer:
      "Ocho: theorem, lemma, proposition y corollary en el estilo plain (cursiva); definition y example en el estilo definition (letra recta), y remark y note en el estilo remark, más ligero. Todos comparten un mismo contador numerado por sección, así que obtienes Definición 2.1, Teorema 2.2, Ejemplo 2.3. El entorno proof viene de amsthm.",
  },
  {
    question: "¿Cómo hago referencia a un teorema por su número?",
    answer:
      "Pon \\label{thm:closed} dentro del teorema y escribe Theorem~\\ref{thm:closed} en el texto. LaTeX completa el número; compila dos veces para que la referencia se resuelva.",
  },
  {
    question: "¿Puedo usar estos apuntes de matemáticas en Overleaf?",
    answer:
      "Sí. La plantilla usa la clase article con geometry, amsmath, amssymb, amsthm, fancyhdr y xcolor, todos incluidos en TeX Live, así que compila con pdfLaTeX en Overleaf, en Octree o en una instalación local.",
  },
];

export default function MathNotesGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla de apuntes de matemáticas en LaTeX</GuideH2>
      <GuideP>
        Esta plantilla de LaTeX para apuntes de matemáticas está pensada para pasar en
        limpio una clase de matemáticas o tus propias notas de estudio con los resultados
        bien numerados. Define el conjunto completo de enunciados que se usan en los
        cursos de matemáticas (teorema, lema, proposición, corolario, definición,
        ejemplo, observación y nota), todos con un único contador numerado por sección,
        de modo que referencias como &quot;Lema 3.4&quot; no se prestan a confusión en
        todo el conjunto de apuntes. Los teoremas van en cursiva, las definiciones y los
        ejemplos en letra recta, y las observaciones usan el estilo remark, más ligero,
        siguiendo las convenciones habituales de <GuideCode>amsthm</GuideCode>.
      </GuideP>
      <GuideP>
        La clase de ejemplo es un fragmento breve de topología general: una definición de
        continuidad mediante conjuntos abiertos, el teorema que afirma que una función
        continua de un espacio compacto a un espacio de Hausdorff es cerrada, un esbozo
        de demostración, un ejemplo, una observación, un lema sobre imágenes de compactos
        y dos ejercicios. El documento usa la clase estándar{" "}
        <GuideCode>article</GuideCode> a 11 pt con márgenes de una pulgada.{" "}
        <GuideCode>fancyhdr</GuideCode> imprime el nombre del curso, &quot;Lecture
        Notes&quot; y la fecha en la parte superior de cada página, con el número de
        página abajo, y <GuideCode>xcolor</GuideCode> está cargado para resaltar texto.
        Funciona como plantilla de apuntes de matemáticas en Overleaf, en Octree o con
        cualquier distribución local de TeX, y crece de una sola clase a un curso
        completo con solo agregar secciones.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>Ocho entornos tipo teorema con un único contador compartido por sección</li>
        <li>Tres estilos de teorema: plain, definition y remark</li>
        <li>
          Encabezado en todas las páginas con el curso, el título y la fecha; número de
          página en el pie
        </li>
        <li>
          Clase de topología de ejemplo con definición, teorema, demostración, ejemplo y
          ejercicios
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>notes.tex</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX. Compila dos veces si usas <GuideCode>\ref</GuideCode>.
        </li>
        <li>
          Configura el encabezado con <GuideCode>\lhead</GuideCode> (curso) y{" "}
          <GuideCode>\rhead</GuideCode> (fecha), y el título de la clase en{" "}
          <GuideCode>\title</GuideCode>.
        </li>
        <li>
          Escribe los resultados con los entornos, por ejemplo{" "}
          <GuideCode>{"\\begin{proposition} ... \\end{proposition}"}</GuideCode>.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Agrega atajos de notación.</strong> Pon esto en el preámbulo para escribir{" "}
        <GuideCode>\R</GuideCode> en lugar de <GuideCode>{"\\mathbb{R}"}</GuideCode>:
      </GuideP>
      <GuidePre>{`\\newcommand{\\R}{\\mathbb{R}}
\\newcommand{\\N}{\\mathbb{N}}
\\DeclareMathOperator{\\interior}{int}`}</GuidePre>
      <GuideP>
        <strong>Sombrea los teoremas.</strong> Carga <GuideCode>tcolorbox</GuideCode>{" "}
        después de las líneas <GuideCode>\newtheorem</GuideCode> y envuelve un entorno en
        un recuadro de color sin cambiar la forma en que lo escribes:
      </GuideP>
      <GuidePre>{`\\usepackage{tcolorbox}
\\tcolorboxenvironment{theorem}{colback=blue!5,colframe=blue!50!black}`}</GuidePre>
      <GuideP>
        <strong>Resalta una idea clave.</strong> <GuideCode>xcolor</GuideCode> ya está
        cargado, así que <GuideCode>{"\\textcolor{red}{...}"}</GuideCode> marca en el
        texto una advertencia o un error frecuente.
      </GuideP>

      <GuideP>
        Plantillas relacionadas:{" "}
        <GuideLink href="/templates/lecture-notes">apuntes de clase</GuideLink>,{" "}
        <GuideLink href="/templates/mathematical-document">documento matemático</GuideLink>{" "}
        y <GuideLink href="/templates/math-cheat-sheet">formulario de matemáticas</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de apuntes de matemáticas</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
