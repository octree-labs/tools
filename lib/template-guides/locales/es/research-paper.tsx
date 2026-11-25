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
    question: "¿Qué clase de documento usa esta plantilla de artículo de investigación?",
    answer:
      "IEEEtran con la opción conference, la clase LaTeX oficial del IEEE. Ofrece el formato a dos columnas de los congresos del IEEE, con tipografía estilo Times, los comandos de bloque de autor del IEEE y encabezados de sección al estilo IEEE. La clase forma parte de TeX Live, así que no necesitas archivos adicionales.",
  },
  {
    question: "¿Cómo agrego una figura que se ajuste a la columna?",
    answer:
      "La figura de ejemplo solo tiene un pie de figura. Agrega \\includegraphics[width=\\columnwidth]{results} antes del \\caption dentro del entorno figure; graphicx ya está cargado. Usa figure* con width=\\textwidth para una figura que ocupe las dos columnas.",
  },
  {
    question: "¿Cómo cito referencias en esta plantilla?",
    answer:
      "Escribe \\cite{ref1} en el texto; el paquete cite ordena y agrupa las citas numéricas, por ejemplo [1]-[3]. Las referencias son una lista thebibliography al final. Si prefieres usar un archivo .bib, reemplaza esa lista por \\bibliographystyle{IEEEtran} y \\bibliography{refs} y ejecuta BibTeX.",
  },
  {
    question: "¿Puedo usar esta plantilla de artículo de investigación en Overleaf?",
    answer:
      "Sí. IEEEtran, amsmath, amssymb, graphicx y cite vienen con TeX Live, así que compila con pdfLaTeX en Overleaf, en Octree o en una instalación local. Antes de enviar el artículo a un congreso o revista concretos, revisa sus instrucciones para autores: algunos congresos del IEEE ofrecen sus propios archivos de plantilla.",
  },
];

export default function ResearchPaperGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Plantilla de artículo de investigación en LaTeX (estilo IEEE)</GuideH2>
      <GuideP>
        Esta plantilla LaTeX de artículo de investigación es un punto de partida breve y
        limpio para un artículo científico o de ingeniería en el formato a dos columnas de
        los congresos del IEEE. Está construida sobre <GuideCode>IEEEtran</GuideCode>, la
        clase de documento oficial del IEEE, cargada con la opción{" "}
        <GuideCode>conference</GuideCode>, de modo que el bloque de título, la disposición
        en columnas, la tipografía y los estilos de encabezado coinciden con los que usan
        los congresos del IEEE. Es una buena opción para un trabajo de curso, un envío a un
        workshop o un primer borrador que más adelante pasarás a la plantilla oficial del
        congreso.
      </GuideP>
      <GuideP>
        El artículo de ejemplo contiene las secciones que necesita casi cualquier artículo
        de investigación: un título y un bloque de autor del IEEE (nombre, departamento,
        universidad y correo electrónico), un resumen y, a continuación, Introducción,
        Trabajo relacionado, Metodología, Resultados y Conclusión, además de una lista
        numerada de referencias. La sección de Resultados incluye una{" "}
        <GuideCode>figure</GuideCode> provisional con su pie de figura, donde va tu
        gráfica. Además de la clase, el preámbulo carga <GuideCode>amsmath</GuideCode> y{" "}
        <GuideCode>amssymb</GuideCode> para las ecuaciones, <GuideCode>graphicx</GuideCode>{" "}
        para las figuras y <GuideCode>cite</GuideCode> para agrupar las citas numéricas.
        Todo viene con TeX Live, así que funciona como plantilla de artículo de
        investigación en Overleaf, en Octree o en una instalación local. El código es
        deliberadamente mínimo; si buscas un ejemplo IEEE más completo, con varios autores,
        ecuaciones, tablas y palabras clave, consulta la plantilla de artículo para
        congresos del IEEE.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>Formato de congreso a dos columnas de <GuideCode>IEEEtran</GuideCode></li>
        <li>Bloque de autor del IEEE con nombre, afiliación y correo electrónico</li>
        <li>Resumen y cinco secciones estándar</li>
        <li>
          Figura provisional y una lista de referencias con{" "}
          <GuideCode>thebibliography</GuideCode>
        </li>
        <li>
          <GuideCode>amsmath</GuideCode>, <GuideCode>amssymb</GuideCode>,{" "}
          <GuideCode>graphicx</GuideCode> y <GuideCode>cite</GuideCode>
        </li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX; dos veces cuando ya cites referencias.</li>
        <li>
          Edita <GuideCode>\title</GuideCode> y el par{" "}
          <GuideCode>\IEEEauthorblockN</GuideCode>/<GuideCode>\IEEEauthorblockA</GuideCode>{" "}
          dentro de <GuideCode>\author</GuideCode>.
        </li>
        <li>Reemplaza los marcadores entre corchetes de cada sección con tu contenido.</li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Agrega coautores.</strong> Repite el bloque de autor y separa los bloques
        con <GuideCode>\and</GuideCode>; IEEEtran los coloca uno al lado del otro:
      </GuideP>
      <GuidePre>{`\\author{\\IEEEauthorblockN{First Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\first@university.edu}
\\and
\\IEEEauthorblockN{Second Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\second@university.edu}}`}</GuidePre>
      <GuideP>
        <strong>Pon una figura real en Resultados.</strong> Ajústala al ancho de la
        columna:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
\\centering
\\includegraphics[width=\\columnwidth]{results}
\\caption{Results visualization}
\\label{fig:results}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Cambia a BibTeX.</strong> Reemplaza el bloque{" "}
        <GuideCode>thebibliography</GuideCode> por{" "}
        <GuideCode>{"\\bibliographystyle{IEEEtran}"}</GuideCode> y{" "}
        <GuideCode>{"\\bibliography{refs}"}</GuideCode>, pon tus entradas en{" "}
        <GuideCode>refs.bib</GuideCode> y compila con pdfLaTeX, BibTeX y luego pdfLaTeX dos
        veces (o con <GuideCode>latexmk -pdf paper.tex</GuideCode>).
      </GuideP>

      <GuideP>
        Plantillas relacionadas:{" "}
        <GuideLink href="/templates/ieee-conference">artículo para congresos del IEEE</GuideLink>,{" "}
        <GuideLink href="/templates/journal-article">artículo de revista</GuideLink> y{" "}
        <GuideLink href="/templates/article-template">artículo</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de artículo de investigación</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
