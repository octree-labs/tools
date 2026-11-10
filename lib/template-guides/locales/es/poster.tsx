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
    question: "¿Cómo hago un póster académico en LaTeX?",
    answer:
      "Usa una clase para pósteres como tikzposter, que es la base de esta plantilla. Define el tamaño del papel y la orientación en \\documentclass; el título, los autores y la institución en el preámbulo, y escribe el contenido en cajas \\block{Título}{Texto} distribuidas dentro de \\begin{columns} con \\column{ancho}. La clase se encarga de la barra de título, el estilo de las cajas y los espacios.",
  },
  {
    question: "¿Cómo cambio el tema del póster?",
    answer:
      "Agrega un comando de tema después de \\documentclass, por ejemplo \\usetheme{Rays}. tikzposter incluye varios temas integrados, entre ellos Default, Rays, Basic, Simple, Envelope, Wave, Board, Autumn y Desert, además de estilos de color independientes que se eligen con \\usecolorstyle.",
  },
  {
    question: "¿Cómo cambio el tamaño del póster o lo pongo en horizontal?",
    answer:
      "Cambia las opciones de la clase. tikzposter admite a0paper, a1paper y a2paper, y las palabras clave portrait o landscape; por ejemplo, \\documentclass[25pt,a1paper,landscape]{tikzposter}. La opción 25pt es el tamaño de letra base; tikzposter acepta de 12pt a 25pt.",
  },
  {
    question: "¿La plantilla de tikzposter compila en Overleaf?",
    answer:
      "Sí. tikzposter forma parte de TeX Live, así que el archivo compila con pdfLaTeX en Overleaf, en Octree o en una instalación local sin archivos adicionales. Los pósteres grandes con muchas imágenes pueden tardar más en compilar que un documento normal.",
  },
];

export default function PosterGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Plantilla de póster académico en LaTeX (tikzposter)</GuideH2>
      <GuideP>
        Esta plantilla LaTeX de póster académico usa la clase{" "}
        <GuideCode>tikzposter</GuideCode> para generar un póster de congreso o de
        investigación en tamaño A0, en orientación vertical y con una letra base de 25 pt,
        la más grande que ofrece la clase, para que el texto se lea bien a unos metros de
        distancia. La barra de título de la parte superior toma el{" "}
        <GuideCode>\title</GuideCode>, el <GuideCode>\author</GuideCode> y el{" "}
        <GuideCode>\institute</GuideCode> que definas en el preámbulo, y todo lo que está
        debajo se arma con cajas <GuideCode>\block</GuideCode>.
      </GuideP>
      <GuideP>
        El diseño de ejemplo sigue el orden que esperan la mayoría de las sesiones de
        pósteres: un bloque de Resumen a todo lo ancho, luego dos columnas iguales con
        Introducción y Métodos a la izquierda y Resultados y Conclusión a la derecha, y un
        bloque de Referencias a todo lo ancho al final. Las columnas se declaran con{" "}
        <GuideCode>{"\\begin{columns}"}</GuideCode> y{" "}
        <GuideCode>{"\\column{0.5}"}</GuideCode>, donde el número es la fracción del ancho
        del póster, de modo que para un diseño de tres columnas basta con escribir{" "}
        <GuideCode>{"\\column{0.33}"}</GuideCode> tres veces. La plantilla usa el tema
        predeterminado de tikzposter y solo carga <GuideCode>amsmath</GuideCode> además de
        la clase. tikzposter forma parte de TeX Live, por lo que esta plantilla de póster
        funciona en Overleaf, en Octree o en cualquier instalación local. Si prefieres una
        alternativa basada en beamer con un diseño de investigación a tres columnas,
        consulta la plantilla de póster para congresos.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>tikzposter</GuideCode> en A0 vertical a 25 pt
        </li>
        <li>Barra de título con título, autores e institución</li>
        <li>Bloques de Resumen y Referencias a todo lo ancho</li>
        <li>Cuerpo a dos columnas: Introducción, Métodos, Resultados y Conclusión</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>poster.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX.</li>
        <li>
          Edita <GuideCode>\title</GuideCode>, <GuideCode>\author</GuideCode> e{" "}
          <GuideCode>\institute</GuideCode> y, después, el texto de cada{" "}
          <GuideCode>{"\\block{...}{...}"}</GuideCode>.
        </li>
        <li>
          Revisa el tamaño que pide tu congreso y configúralo en las opciones de la clase
          antes de agregar figuras.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Elige un tema.</strong> Una sola línea después de{" "}
        <GuideCode>\documentclass</GuideCode> cambia el estilo de la barra de título y de
        todos los bloques:
      </GuideP>
      <GuidePre>{`\\documentclass[25pt,a0paper,portrait]{tikzposter}
\\usetheme{Rays}
\\usecolorstyle{Denmark}`}</GuidePre>
      <GuideP>
        <strong>Agrega una figura a un bloque.</strong> Carga{" "}
        <GuideCode>graphicx</GuideCode> en el preámbulo y usa el entorno{" "}
        <GuideCode>tikzfigure</GuideCode> de tikzposter, que añade un pie de figura
        numerado; los anchos son relativos al bloque mediante{" "}
        <GuideCode>\linewidth</GuideCode>:
      </GuideP>
      <GuidePre>{`\\block{Results}{
  Key findings and data visualization.
  \\begin{tikzfigure}[Accuracy on the test set]
    \\includegraphics[width=0.9\\linewidth]{results}
  \\end{tikzfigure}
}`}</GuidePre>
      <GuideP>
        <strong>Columnas de distinto ancho.</strong> Las columnas no tienen por qué ser
        iguales; para una columna de resultados más ancha usa{" "}
        <GuideCode>{"\\column{0.4}"}</GuideCode> y <GuideCode>{"\\column{0.6}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Plantillas relacionadas:{" "}
        <GuideLink href="/templates/conference-poster">póster para congresos (beamerposter)</GuideLink>,{" "}
        <GuideLink href="/templates/beamer-presentation">presentación Beamer</GuideLink> y{" "}
        <GuideLink href="/templates/research-paper">artículo de investigación</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de póster académico</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
