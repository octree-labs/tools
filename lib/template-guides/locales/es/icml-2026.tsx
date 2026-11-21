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
    question: "¿Es este el archivo de estilo oficial de ICML 2026?",
    answer:
      "No. Es un borrador a dos columnas con el estilo de ICML, basado en la clase article estándar con fuente Times y márgenes de 0.75 pulgadas, así que compila en cualquier lugar sin archivos adicionales. Los envíos a ICML deben usar el archivo de estilo oficial y el artículo de ejemplo del kit para autores enlazado en la convocatoria de icml.cc, que tiene sus propios comandos para el título y los autores. Escribe y revisa aquí, y luego pasa las secciones al kit oficial.",
  },
  {
    question: "¿Esta plantilla de ICML compila en Overleaf?",
    answer:
      "Sí, con pdfLaTeX, el compilador predeterminado de Overleaf. Agrega un archivo references.bib junto al archivo .tex, porque la plantilla termina con \\bibliography{references}. Todos los paquetes vienen con TeX Live, incluido el paquete subfigure, que es más antiguo.",
  },
  {
    question: "¿Cómo hago que una figura o tabla ocupe las dos columnas?",
    answer:
      "Usa los entornos con asterisco: \\begin{figure*}[t] ... \\end{figure*} o \\begin{table*}[t] ... \\end{table*}, con anchos relativos a \\textwidth. Los flotantes a dos columnas solo pueden ir en la parte superior de una página o en una página de flotantes, normalmente la página siguiente a aquella donde se definen.",
  },
  {
    question: "¿Cuál es el límite de páginas de ICML 2026?",
    answer:
      "El resumen de ejemplo de esta plantilla menciona ocho páginas para el texto principal, sin límite para las referencias y los apéndices, lo que coincide con las convocatorias recientes de ICML. Confirma el límite exacto y las reglas para la versión final en la convocatoria oficial de ICML 2026.",
  },
  {
    question: "¿Cómo se consigue que el título y los autores ocupen las dos columnas?",
    answer:
      "La plantilla redefine \\maketitle para imprimir el bloque del título dentro de \\twocolumn[...], que lo compone a lo ancho de toda la página. Después, el resumen empieza en la columna izquierda, como en los artículos de ICML.",
  },
];

export default function Icml2026GuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla LaTeX de ICML 2026 para redactar borradores</GuideH2>
      <GuideP>
        Esta plantilla de ICML 2026 es un artículo de aprendizaje automático a dos columnas
        que compila de inmediato en Overleaf, Octree o cualquier instalación de TeX Live. Es
        una plantilla para redactar, no el archivo de estilo oficial: usa la clase de
        documento estándar <GuideCode>article</GuideCode> con la opción{" "}
        <GuideCode>twocolumn</GuideCode> a 10 pt, la fuente <GuideCode>times</GuideCode> y
        márgenes de 0.75 pulgadas, y redefine <GuideCode>\maketitle</GuideCode> para que el
        bloque del título y los autores ocupe las dos columnas por encima del resumen, como
        en los artículos de ICML.
      </GuideP>
      <GuideP>
        El preámbulo carga lo que suelen necesitar los artículos de ICML:{" "}
        <GuideCode>algorithm</GuideCode> y <GuideCode>algorithmic</GuideCode> para
        pseudocódigo, <GuideCode>booktabs</GuideCode> para tablas,{" "}
        <GuideCode>subfigure</GuideCode> para paneles lado a lado,{" "}
        <GuideCode>amsmath</GuideCode> y <GuideCode>hyperref</GuideCode>. El artículo de
        ejemplo incluye un bloque de tres autores con afiliaciones numeradas y una nota de
        contribución equitativa, un resumen, Introducción, Trabajo relacionado, una sección
        de Método con una función de pérdida regularizada, una tabla de Experimentos, una
        sección de Accesibilidad y reproducibilidad y una bibliografía BibTeX con el estilo{" "}
        <GuideCode>plain</GuideCode>. Redacta aquí y luego pasa las secciones al kit oficial
        para autores de ICML 2026 de{" "}
        <GuideLink href="https://icml.cc" external>
          icml.cc
        </GuideLink>{" "}
        para generar el PDF que vas a enviar.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>Diseño a dos columnas de 10 pt con un bloque de título a todo lo ancho</li>
        <li>Tres autores con afiliaciones en superíndice y una marca de contribución equitativa</li>
        <li>Resumen y seis secciones, entre ellas Accesibilidad y reproducibilidad</li>
        <li>Una ecuación destacada y una tabla de resultados con <GuideCode>booktabs</GuideCode></li>
        <li>
          <GuideCode>algorithm</GuideCode>/<GuideCode>algorithmic</GuideCode> cargados para
          escribir pseudocódigo
        </li>
        <li>BibTeX con el estilo <GuideCode>plain</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Crea <GuideCode>references.bib</GuideCode> junto al archivo y cita las entradas con{" "}
          <GuideCode>\cite</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX y BibTeX (<GuideCode>latexmk -pdf paper.tex</GuideCode>). La
          plantilla no necesita fuentes del sistema, así que no hace falta XeLaTeX ni
          LuaLaTeX.
        </li>
        <li>
          Edita <GuideCode>\title</GuideCode> y el bloque <GuideCode>\author</GuideCode> en el
          preámbulo. Para la versión de revisión doble ciego, elimina los nombres y las
          afiliaciones.
        </li>
        <li>
          Antes de enviar, copia tus secciones en el artículo de ejemplo oficial de ICML 2026
          y usa su estilo de bibliografía.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Escribe pseudocódigo.</strong> El paquete{" "}
        <GuideCode>algorithmic</GuideCode> usa comandos en mayúsculas. Este es un algoritmo
        flotante que cabe en una columna:
      </GuideP>
      <GuidePre>{`\\begin{algorithm}[tb]
  \\caption{SGD with weight decay}
  \\label{alg:sgd}
  \\begin{algorithmic}
    \\STATE {\\bfseries Input:} data $\\{(x_i, y_i)\\}_{i=1}^{n}$, step size $\\eta$
    \\FOR{$t = 1$ {\\bfseries to} $T$}
      \\STATE Sample $i$ uniformly from $\\{1, \\dots, n\\}$
      \\STATE $\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\ell(f_\\theta(x_i), y_i)$
    \\ENDFOR
  \\end{algorithmic}
\\end{algorithm}`}</GuidePre>
      <GuideP>
        <strong>Cambia subfigure por subcaption.</strong> <GuideCode>subfigure</GuideCode>{" "}
        está obsoleto. Borra <GuideCode>{"\\usepackage{subfigure}"}</GuideCode> (los dos no
        pueden cargarse a la vez), agrega <GuideCode>{"\\usepackage{subcaption}"}</GuideCode>{" "}
        y escribe los paneles así:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-a}
    \\caption{Dataset A}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-b}
    \\caption{Dataset B}
  \\end{subfigure}
  \\caption{Accuracy on both datasets.}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Mantén el bloque del título al día.</strong> Los autores y las afiliaciones
        son texto simple dentro de <GuideCode>\author</GuideCode>, separados por{" "}
        <GuideCode>\quad</GuideCode>, con los superíndices escritos como{" "}
        <GuideCode>{"$^{1}$"}</GuideCode>. Para agregar un autor, copia una entrada{" "}
        <GuideCode>{"Firstname Lastname$^{1}$"}</GuideCode> y una nueva línea de afiliación;
        marca la contribución equitativa con <GuideCode>{"$^{*}$"}</GuideCode>.
      </GuideP>

      <GuideP>
        Plantillas relacionadas:{" "}
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>,{" "}
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink> y{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>. Para las fechas,
        consulta la{" "}
        <GuideLink href="/conference-deadlines">página de plazos de conferencias</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de ICML</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
