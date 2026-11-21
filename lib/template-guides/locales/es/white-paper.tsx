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
    question: "¿Cuál es la estructura de un white paper?",
    answer:
      "Una portada, un resumen ejecutivo, el planteamiento del problema, la solución propuesta, los beneficios, evidencia como un caso de estudio y una conclusión con una llamada a la acción. Esta plantilla sigue ese orden: Resumen ejecutivo, El desafío, La solución, Beneficios, Caso de estudio y Conclusión, después de una portada que además adelanta el resumen ejecutivo en un recuadro.",
  },
  {
    question: "¿Las estadísticas de la plantilla son reales?",
    answer:
      "No. Cifras como la reducción de costos del 40 % y el ahorro de 5 millones de dólares del caso de estudio son marcadores de posición que muestran dónde van los números. Sustitúyelas por tus propios resultados medidos o por fuentes citadas, y agrega una sección de referencias si citas datos de terceros.",
  },
  {
    question: "¿Cómo cambio la paleta de colores del white paper?",
    answer:
      "Hay un solo color, primarycolor, definido con \\definecolor{primarycolor}{RGB}{0,51,102} y usado en el título, los encabezados de sección (mediante titlesec) y el marco del recuadro de resumen. Cambia los valores RGB por el color de tu marca y todo se actualiza.",
  },
  {
    question: "¿Esta plantilla de white paper funciona en Overleaf?",
    answer:
      "Sí. Usa la clase article con geometry, graphicx, xcolor, titlesec, hyperref y tcolorbox, todos incluidos en TeX Live, así que compila con pdfLaTeX en Overleaf, Octree o una instalación local.",
  },
];

export default function WhitePaperGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">Una plantilla de white paper en LaTeX</GuideH2>
      <GuideP>
        Esta plantilla LaTeX de white paper genera un informe pulido y con identidad de marca,
        como los que publican las empresas para explicar un problema y defender su manera de
        resolverlo: white papers de producto, documentos técnicos de posición y piezas de
        liderazgo de opinión para marketing o ventas. La portada lleva un título grande en
        dos líneas con el color de la marca, un subtítulo en cursiva, el nombre de la empresa
        y la fecha, y un recuadro enmarcado con el Resumen ejecutivo al pie de la página, para
        que el lector capte la idea principal antes de pasar la hoja.
      </GuideP>
      <GuideP>
        El cuerpo sigue la estructura clásica de problema y solución en seis secciones
        numeradas: Resumen ejecutivo, El desafío, La solución, Beneficios (una lista de
        resultados), Caso de estudio y Conclusión. El ejemplo está escrito para una
        plataforma de IA ficticia, y sus porcentajes y cifras de ahorro son marcadores de
        posición que debes reemplazar por números reales y con fuente. El código usa la clase
        de documento estándar <GuideCode>article</GuideCode> a 11 pt con márgenes de una
        pulgada. <GuideCode>titlesec</GuideCode> compone los encabezados de sección en letra
        grande y negrita con un único color de marca, <GuideCode>primarycolor</GuideCode>;{" "}
        <GuideCode>tcolorbox</GuideCode> dibuja el recuadro del resumen;{" "}
        <GuideCode>hyperref</GuideCode> hace que los enlaces del PDF sean clicables, y{" "}
        <GuideCode>graphicx</GuideCode> está cargado para gráficos y diagramas. La sangría de
        párrafo está desactivada para darle un aspecto moderno de documento empresarial. Todo
        viene con TeX Live, así que compila como plantilla de white paper en Overleaf, en
        Octree o en cualquier instalación local.
      </GuideP>

      <GuideH2 id="included">Qué incluye</GuideH2>
      <GuideUl>
        <li>Portada con identidad de marca, subtítulo, empresa, fecha y un recuadro de resumen ejecutivo</li>
        <li>Seis secciones numeradas con estructura de problema y solución</li>
        <li>Encabezados de sección en color mediante <GuideCode>titlesec</GuideCode></li>
        <li>Un color de marca, <GuideCode>primarycolor</GuideCode>, usado en todo el documento</li>
      </GuideUl>

      <GuideH2 id="how-to-use">Cómo usarla</GuideH2>
      <GuideOl>
        <li>
          Haz clic en <em>Abrir como plantilla</em> para editarla en Octree, o en{" "}
          <em>Ver código</em> y pega el código en Overleaf o en un archivo local{" "}
          <GuideCode>whitepaper.tex</GuideCode>.
        </li>
        <li>Compila con pdfLaTeX; basta con una pasada.</li>
        <li>
          Define el color de tu marca en la línea <GuideCode>\definecolor</GuideCode> y luego
          edita el título, el subtítulo, el nombre de la empresa y la fecha en la portada.
        </li>
        <li>
          Reescribe el recuadro de resumen y cada sección; limita el resumen ejecutivo a unas
          pocas oraciones.
        </li>
      </GuideOl>

      <GuideH2 id="customise">Personaliza la plantilla</GuideH2>
      <GuideP>
        <strong>Separa los párrafos con espacio.</strong> La plantilla fija{" "}
        <GuideCode>\parindent</GuideCode> en cero pero no agrega espacio entre párrafos, así
        que los párrafos seguidos quedan pegados. Sustituye la línea{" "}
        <GuideCode>\setlength</GuideCode> por:
      </GuideP>
      <GuidePre>{`\\usepackage{parskip}`}</GuidePre>
      <GuideP>
        <strong>Destaca un resultado clave.</strong> Reutiliza el estilo del recuadro de la
        portada en el cuerpo para una estadística o una cita:
      </GuideP>
      <GuidePre>{`\\begin{tcolorbox}[colback=primarycolor!5,colframe=primarycolor,title=Key result]
Company XYZ cut [metric] by [amount] within [time period].
\\end{tcolorbox}`}</GuidePre>
      <GuideP>
        <strong>Pon tu marca en todas las páginas.</strong> Agrega un pie de página con el
        nombre de la empresa y el número de página usando <GuideCode>fancyhdr</GuideCode>:{" "}
        <GuideCode>{"\\usepackage{fancyhdr} \\pagestyle{fancy} \\fancyhf{} \\lfoot{TechCorp Industries} \\rfoot{\\thepage} \\renewcommand{\\headrulewidth}{0pt}"}</GuideCode>.
      </GuideP>

      <GuideP>
        Plantillas relacionadas:{" "}
        <GuideLink href="/templates/business-report">informe empresarial</GuideLink>,{" "}
        <GuideLink href="/templates/technical-report">informe técnico</GuideLink> y{" "}
        <GuideLink href="/templates/business-plan">plan de negocios</GuideLink>.
      </GuideP>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de white paper</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
