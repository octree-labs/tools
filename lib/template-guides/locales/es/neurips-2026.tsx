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
    question: "¿Es este el archivo de estilo oficial de NeurIPS 2026?",
    answer:
      "No. Es un borrador con estilo NeurIPS basado en la clase estándar article con Times, márgenes de 1 pulgada y natbib, de modo que compila en cualquier lugar sin archivos adicionales. El envío a NeurIPS debe usar el archivo de estilo oficial del kit enlazado en la convocatoria de artículos de neurips.cc. Como el cuerpo usa los mismos comandos (\\title, \\author, abstract, secciones, \\bibliographystyle{plainnat}), el cambio consiste sobre todo en modificar el preámbulo.",
  },
  {
    question: "¿La plantilla de NeurIPS funciona en Overleaf?",
    answer:
      "Sí. Compila con pdfLaTeX, el compilador predeterminado de Overleaf, y solo usa paquetes incluidos en TeX Live. Añade un archivo references.bib junto al archivo .tex, porque la plantilla termina con \\bibliography{references}.",
  },
  {
    question: "¿Dónde va la lista de verificación del artículo de NeurIPS?",
    answer:
      "En esta plantilla es una sección después de las referencias y de \\appendix, que es donde la pide NeurIPS. Los seis puntos incluidos solo muestran el formato de respuesta. Copia la lista completa y vigente del kit de estilo oficial de NeurIPS 2026 y responde todas las preguntas.",
  },
  {
    question: "¿Cuál es el límite de páginas de NeurIPS 2026?",
    answer:
      "El resumen de ejemplo de esta plantilla menciona nueve páginas de contenido principal, sin contar las referencias ni la lista de verificación, lo que coincide con las convocatorias recientes de NeurIPS. Los límites de páginas pueden cambiar de un año a otro, así que confirma la cifra en la convocatoria oficial de NeurIPS 2026 antes de enviar tu artículo.",
  },
  {
    question: "¿Debo usar \\citep o \\citet?",
    answer:
      "Ambos están disponibles porque natbib está cargado. \\citet{key} produce una cita textual («Smith et al. (2024)») para usarla dentro de una oración, y \\citep{key} produce una cita entre paréntesis. El estilo bibliográfico plainnat admite las dos.",
  },
];

export default function Neurips2026GuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla LaTeX de NeurIPS 2026 para redactar borradores</GuideH2>
      <GuideP>
        Esta plantilla de NeurIPS te ofrece un artículo de aprendizaje automático
        con estilo NeurIPS que compila de inmediato en Overleaf, Octree o cualquier
        instalación de TeX Live. Es una plantilla para redactar, no el archivo de
        estilo oficial: usa la clase estándar <GuideCode>article</GuideCode> a 11 pt
        con la fuente <GuideCode>times</GuideCode>, márgenes de 1 pulgada y sin
        sangría de párrafo, además de los paquetes que cargan la mayoría de los
        artículos de NeurIPS (<GuideCode>hyperref</GuideCode>,{" "}
        <GuideCode>booktabs</GuideCode>, <GuideCode>amsmath</GuideCode>,{" "}
        <GuideCode>nicefrac</GuideCode>, <GuideCode>microtype</GuideCode> y{" "}
        <GuideCode>natbib</GuideCode>).
      </GuideP>
      <GuideP>
        El artículo de ejemplo sigue la estructura que esperan los revisores: título
        y bloque de un solo autor con una nota al pie mediante{" "}
        <GuideCode>\thanks</GuideCode>, resumen, Introduction, Related Work, Method
        con una ecuación numerada, Experiments con una tabla de resultados hecha con{" "}
        <GuideCode>booktabs</GuideCode>, Conclusion, una bibliografía con{" "}
        <GuideCode>plainnat</GuideCode> y una sección NeurIPS Paper Checklist después
        de <GuideCode>\appendix</GuideCode>. Escribe aquí tu contenido y luego
        pásalo al kit de estilo oficial de NeurIPS 2026 de{" "}
        <GuideLink href="https://neurips.cc" external>
          neurips.cc
        </GuideLink>{" "}
        para generar el PDF del envío, lo que lleva pocos minutos porque los
        comandos son los mismos. La versión del próximo año es la{" "}
        <GuideLink href="/templates/neurips-2027">plantilla de NeurIPS 2027</GuideLink>.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>Título, bloque de autor con afiliación y correo electrónico, y una nota al pie del autor</li>
        <li>Resumen y cinco secciones numeradas</li>
        <li>Una ecuación destacada con letras de pizarra de <GuideCode>amsfonts</GuideCode></li>
        <li>Una tabla de resultados con <GuideCode>\toprule</GuideCode>, <GuideCode>\midrule</GuideCode> y <GuideCode>\bottomrule</GuideCode></li>
        <li>natbib con el estilo <GuideCode>plainnat</GuideCode></li>
        <li>Una sección NeurIPS Paper Checklist con seis respuestas de ejemplo</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>paper.tex</GuideCode>.
        </li>
        <li>
          Crea <GuideCode>references.bib</GuideCode> junto a él con tus entradas de
          BibTeX y cítalas con <GuideCode>\citet</GuideCode> o{" "}
          <GuideCode>\citep</GuideCode>.
        </li>
        <li>
          Compila con pdfLaTeX y BibTeX, por ejemplo{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>. No se necesitan fuentes
          Unicode, así que XeLaTeX y LuaLaTeX no aportan nada aquí.
        </li>
        <li>
          Edita <GuideCode>\title</GuideCode> y <GuideCode>\author</GuideCode> al
          principio del preámbulo; para la versión anónima de revisión, sustituye el
          bloque de autor por <GuideCode>Anonymous Author(s)</GuideCode>.
        </li>
        <li>
          Antes de enviar, pasa el contenido al archivo de estilo oficial y pega la
          lista de verificación completa del kit oficial.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Añade más autores.</strong> La plantilla tiene un solo autor. El
        estilo oficial separa los bloques de autor con <GuideCode>\And</GuideCode>;
        en este borrador con la clase article, usa en su lugar el comando estándar{" "}
        <GuideCode>\and</GuideCode>:
      </GuideP>
      <GuidePre>{`\\author{
  First Author \\\\ University A \\\\ \\texttt{first@a.edu}
  \\and
  Second Author \\\\ Lab B \\\\ \\texttt{second@b.org}
}`}</GuidePre>
      <GuideP>
        <strong>Añade una figura.</strong> <GuideCode>graphicx</GuideCode> ya está
        cargado. Los artículos de NeurIPS ponen el pie de las figuras debajo de la
        figura y el título de las tablas encima de la tabla, como en la tabla de
        ejemplo:
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.8\\linewidth]{example-image}
  \\caption{Training loss over time.}
  \\label{fig:loss}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>Responde bien la lista de verificación.</strong> Cada punto lleva una
        respuesta y una justificación breve. Mantén el formato de los puntos de
        ejemplo y añade la justificación en la misma línea:
      </GuideP>
      <GuidePre>{`\\item \\textbf{Limitations:} Did you describe the limitations of your work?
  \\textbf{[Yes]} Justification: see Section~5.`}</GuidePre>

      <GuideH2 id="comparison">Plantillas de congresos relacionadas</GuideH2>
      <GuideTable
        headers={["Plantilla", "Diseño"]}
        rows={[
          [<strong key="n">NeurIPS 2026</strong>, "Una columna, natbib, lista de verificación"],
          [
            <GuideLink key="n7" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "Una columna, emulación más fiel del diseño de NeurIPS",
          ],
          [
            <GuideLink key="i" href="/templates/icml-2026">
              ICML 2026
            </GuideLink>,
            "Dos columnas, entorno algorithm",
          ],
          [
            <GuideLink key="l" href="/templates/iclr-2026">
              ICLR 2026
            </GuideLink>,
            "Una columna, declaración de reproducibilidad",
          ],
        ]}
      />
      <GuideP>
        Para las fechas de envío, consulta la{" "}
        <GuideLink href="/conference-deadlines">página de fechas límite de congresos</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de NeurIPS</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
