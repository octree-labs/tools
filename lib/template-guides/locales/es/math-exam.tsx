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
    question: "¿Cómo hago un examen de matemáticas en LaTeX?",
    answer:
      "Parte de esta plantilla: tiene un encabezado con la materia y el periodo, líneas para el nombre y la matrícula del estudiante, una lista de instrucciones, una tabla de puntos y problemas numerados con espacio en blanco para el desarrollo. Edita el encabezado, escribe cada problema como un párrafo \\textbf{Problem N.} con su puntaje y define el espacio de respuesta con \\vspace.",
  },
  {
    question: "¿La tabla de puntos se suma automáticamente?",
    answer:
      "No. La tabla es un tabular normal, así que cuando agregas, quitas o cambias el valor de un problema tienes que actualizar a mano las filas de problema, puntos y total, además de la línea de instrucciones. Si quieres totales automáticos, la clase de documento exam (incluida en TeX Live) ofrece \\question[puntos] y, tras poner \\addpoints en el preámbulo, un \\gradetable que suma los puntos por ti.",
  },
  {
    question: "¿Cómo les doy a los estudiantes más espacio para escribir?",
    answer:
      "Aumenta el \\vspace después de cada problema, por ejemplo \\vspace{8cm}, o empieza un problema en una página nueva con \\newpage. En el ejemplo, después de los problemas 1 y 2 hay 4 cm, después del problema 3 un salto de página y después del problema 4, 6 cm.",
  },
  {
    question: "¿Puedo imprimir este examen desde Overleaf?",
    answer:
      "Sí. La plantilla usa la clase article con geometry, amsmath, amssymb, amsthm y fancyhdr, así que compila con pdfLaTeX en Overleaf, en Octree o en una instalación local de TeX. Descarga el PDF e imprímelo al 100 % de escala en papel carta; para A4, agrega a4paper a las opciones de geometry.",
  },
];

export default function MathExamGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla de examen de matemáticas en LaTeX</GuideH2>
      <GuideP>
        Esta plantilla de LaTeX para exámenes de matemáticas genera una prueba formal
        lista para imprimir con todo lo que necesita una portada: un encabezado con la
        materia, el nombre del examen y el periodo en cada página, líneas para el nombre
        y la matrícula del estudiante, una breve lista de instrucciones y una tabla de
        puntos con una columna de calificación vacía. El ejemplo es un examen final de
        cinco problemas y 100 puntos para un curso introductorio, que incluye una
        ecuación cuadrática, una derivada con la regla del cociente, una integral por
        sustitución, una demostración corta sobre enteros pares y un límite
        trigonométrico.
      </GuideP>
      <GuideP>
        Cada problema lleva una etiqueta en negritas &quot;Problem N.&quot; con su
        puntaje entre paréntesis, el enunciado y un bloque fijo de espacio vertical para
        el desarrollo, de modo que los estudiantes escriben sus respuestas directamente
        en la hoja. El código usa la clase estándar <GuideCode>article</GuideCode> a 12
        pt con márgenes de una pulgada, <GuideCode>fancyhdr</GuideCode> para el
        encabezado y el número de página, y{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> para las
        matemáticas, así que funciona como plantilla de examen en Overleaf, en Octree o
        en cualquier instalación local de TeX. Como no usa ninguna clase especial para
        exámenes, cada elemento es LaTeX simple y fácil de reorganizar: cambia el
        encabezado, reescribe los problemas y ajusta el espacio de respuesta, y tendrás
        un quiz, un examen parcial o un final listo para imprimir.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>
          Encabezado en todas las páginas con la materia, el nombre del examen y el
          periodo; número de página en el pie
        </li>
        <li>Líneas para el nombre y la matrícula del estudiante</li>
        <li>Lista de instrucciones (problemas, puntos, tiempo, materiales permitidos)</li>
        <li>Tabla de puntos con columnas de problema, puntos y calificación</li>
        <li>Cinco problemas de ejemplo con espacio en blanco para la respuesta</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>exam.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX; basta con una pasada.</li>
        <li>
          Edita <GuideCode>\lhead</GuideCode>, <GuideCode>\chead</GuideCode> y{" "}
          <GuideCode>\rhead</GuideCode>, el título centrado y las instrucciones.
        </li>
        <li>
          Reescribe los problemas y luego actualiza la tabla de puntos para que las filas
          y el total coincidan.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Agrega un problema.</strong> Copia un bloque de problema, cambia su
        número y puntaje, y agrega la fila correspondiente antes de{" "}
        <GuideCode>\textbf{"{Total}"}</GuideCode> en la tabla:
      </GuideP>
      <GuidePre>{`\\noindent
\\textbf{Problem 6.} (10 points) Find all real solutions of
\\[
|2x - 3| = 5
\\]

\\vspace{4cm}`}</GuidePre>
      <GuideP>
        <strong>Controla los saltos de página.</strong> El ejemplo manda el problema 4 a
        una página nueva con <GuideCode>\newpage</GuideCode>. Pon uno antes de cualquier
        problema que, de otro modo, quedaría separado de su espacio de respuesta.
      </GuideP>
      <GuideP>
        <strong>Cambia a la clase exam para tener totales automáticos.</strong> Si
        preparas muchos exámenes, la clase <GuideCode>exam</GuideCode> lleva la cuenta de
        los puntos y arma la tabla de calificaciones por ti:
      </GuideP>
      <GuidePre>{`\\documentclass[12pt]{exam}
\\usepackage{amsmath,amssymb}
\\addpoints
\\begin{document}
\\begin{center}
\\gradetable[h][questions]
\\end{center}
\\begin{questions}
\\question[20] Solve $3x^2 - 7x + 2 = 0$.
\\vspace{4cm}
\\question[20] Find the derivative of $f(x) = \\frac{\\sin x}{x^2+1}$.
\\vspace{4cm}
\\end{questions}
\\end{document}`}</GuidePre>

      <GuideP>
        Plantillas relacionadas: <GuideLink href="/templates/quiz-template">quiz</GuideLink>,{" "}
        <GuideLink href="/templates/math-problem-set">lista de problemas de matemáticas</GuideLink>{" "}
        y <GuideLink href="/templates/grading-rubric">rúbrica de evaluación</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de examen de matemáticas</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
