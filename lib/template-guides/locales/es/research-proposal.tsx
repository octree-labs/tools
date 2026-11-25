import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "¿Qué extensión debe tener una propuesta de investigación?",
    answer:
      "Una propuesta de tesis de maestría o doctorado suele ocupar entre 5 y 15 páginas; una propuesta para una convocatoria de financiamiento tiene la extensión que fije la convocatoria, a menudo de 2 a 5 páginas más un presupuesto. El ejemplo de esta plantilla ocupa tres páginas a 11 pt con márgenes de una pulgada, una extensión razonable para un trabajo de curso o un primer borrador para enviar a tu director. Si necesitas más páginas, amplía primero la revisión de la literatura y la metodología; las demás secciones deben seguir siendo breves.",
  },
  {
    question: "¿En qué se diferencia una propuesta de investigación de una propuesta de tesis?",
    answer:
      "Una propuesta de tesis es una propuesta de investigación dirigida a un comité académico: argumenta que el proyecto es viable para un solo estudiante en el tiempo disponible y suele añadir un esquema de capítulos y un plan de dirección. Una propuesta de financiamiento se escribe para una entidad patrocinadora y añade la justificación del presupuesto, los entregables y una declaración de impacto. Las secciones centrales (antecedentes, preguntas, literatura, métodos, cronograma, referencias) son las mismas, por eso esta plantilla sirve para ambas.",
  },
  {
    question: "¿Puedo usar esta plantilla de propuesta de investigación para postular a un doctorado?",
    answer:
      "Sí. Muchos programas de doctorado piden una propuesta de 1.500 a 3.000 palabras con la estructura que se usa aquí. Sustituye el tema de ejemplo, mantén explícitas las preguntas de investigación y asegúrate de que el cronograma cubra toda la duración del programa (tres o cuatro años en lugar de doce meses). Revisa las indicaciones del departamento por si exigen apartados como Necesidades de formación o Dirección, y agrégalos como nuevos comandos \\section.",
  },
  {
    question: "¿Cómo cito las fuentes en la propuesta de investigación?",
    answer:
      "La plantilla carga natbib con la opción round, así que \\citet{key} produce Cepeda et al. (2006) y \\citep{key} produce (Cepeda et al., 2006). Las referencias están en un entorno thebibliography al final del archivo: cada entrada empieza con \\bibitem[Author(Year)]{key} para que natbib pueda construir la etiqueta autor-año. Si ya tienes un archivo .bib, elimina ese entorno, añade \\bibliographystyle{plainnat} y \\bibliography{references}, y ejecuta BibTeX.",
  },
  {
    question: "¿Una propuesta de investigación necesita presupuesto?",
    answer:
      "Solo cuando solicitas dinero. Las propuestas de financiamiento siempre lo incluyen, normalmente como una tabla con una justificación breve, y la sección Budget de la plantilla muestra una versión compacta hecha con booktabs. Las propuestas de tesis para obtener un título suelen omitirlo, salvo que el trabajo de campo, el equipo o los pagos a participantes requieran aprobación del departamento; en ese caso conserva la tabla y elimina las filas que no necesites.",
  },
];

export default function ResearchProposalGuideEs() {
  return (
    <article>
      <GuideH2 id="what-is-it">¿Qué es una propuesta de investigación?</GuideH2>
      <GuideP>
        Una propuesta de investigación es un documento breve que justifica un
        estudio antes de llevarlo a cabo: qué pregunta vas a responder, por qué
        importa, qué se sabe ya, cómo harás el trabajo y cuánto costará en tiempo
        y dinero. Directores, comités académicos y entidades financiadoras la usan
        para decidir si el proyecto vale la pena y si eres capaz de realizarlo.
        Esta plantilla gratuita de propuesta de investigación en LaTeX te ofrece la
        estructura estándar junto con un ejemplo completo (un experimento de
        repetición espaciada con estudiantes de una segunda lengua), para que veas
        cómo queda cada sección terminada antes de sustituir el contenido por el
        tuyo.
      </GuideP>

      <GuideH2 id="format">Formato de la propuesta de investigación: qué va en cada sección</GuideH2>
      <GuideP>
        Las secciones siguen el orden que usan la mayoría de las normas
        universitarias; si la convocatoria de un financiador establece sus propios
        apartados, estos tienen prioridad. Las extensiones corresponden a una
        propuesta de tres a diez páginas; auméntalas para una propuesta de tesis
        completa.
      </GuideP>
      <GuideTable
        headers={["Sección", "Qué incluye", "Extensión habitual"]}
        rows={[
          [
            "Bloque de título",
            "Un título específico que nombre las variables o el fenómeno, tu nombre, el de tu director, el departamento y la fecha de entrega.",
            "Media página",
          ],
          [
            "Resumen",
            "El problema, el vacío, el método y la contribución esperada en un solo párrafo.",
            "De 100 a 200 palabras",
          ],
          [
            "Introducción y antecedentes",
            "Por qué importa el tema, los conceptos clave y el vacío en el conocimiento actual, con dos o tres citas.",
            "De una a dos páginas",
          ],
          [
            "Preguntas de investigación e hipótesis",
            "De dos a cuatro preguntas numeradas, cada una con una hipótesis comprobable o una respuesta esperada.",
            "Media página",
          ],
          [
            "Revisión de la literatura",
            "Qué encontraron los estudios previos, en qué discrepan y qué no ha hecho todavía ninguno de ellos.",
            "De una a tres páginas",
          ],
          [
            "Metodología",
            "Diseño, participantes o datos, materiales, procedimiento y plan de análisis, con el detalle suficiente para juzgar la viabilidad.",
            "De una a tres páginas",
          ],
          [
            "Cronograma",
            "Una tabla o diagrama de Gantt de las fases por meses o trimestres; la plantilla lo coloca al final de la metodología.",
            "Un cuarto de página",
          ],
          [
            "Resultados esperados e importancia",
            "Qué esperas encontrar y a quién beneficia: la disciplina, los profesionales, las políticas públicas.",
            "Media página",
          ],
          [
            "Presupuesto",
            "Costos desglosados con un total; solo en propuestas de financiamiento.",
            "Un cuarto de página",
          ],
          [
            "Referencias",
            "Todas las fuentes citadas, en el estilo que exija tu departamento o financiador.",
            "Lo necesario",
          ],
        ]}
      />

      <GuideH2 id="thesis-vs-grant">Propuesta de tesis frente a propuesta de financiamiento</GuideH2>
      <GuideP>
        La misma plantilla sirve para ambas, pero cambia el énfasis. Para una
        propuesta de tesis, amplía la revisión de la literatura y la metodología,
        extiende el cronograma a la duración del programa, añade un esquema de
        capítulos y elimina el presupuesto, a menos que tu departamento lo pida.
        Para una solicitud de financiamiento, mantén los antecedentes concisos,
        añade una justificación del presupuesto y una lista de entregables, y
        respeta al pie de la letra el límite de páginas y los nombres de los
        apartados que fije el patrocinador. Si el dinero es el objetivo del
        documento, parte mejor de la{" "}
        <GuideLink href="/templates/grant-proposal">plantilla de propuesta de financiamiento</GuideLink>,
        organizada en torno a objetivos específicos y una justificación del
        presupuesto; si ya estás redactando la tesis, la{" "}
        <GuideLink href="/templates/thesis">plantilla de tesis</GuideLink> continúa
        donde termina esta propuesta.
      </GuideP>

      <GuideH2 id="customise">Cómo personalizar la plantilla de propuesta de investigación</GuideH2>
      <GuideH3>Bloque de título y director</GuideH3>
      <GuideP>
        El solicitante, el director y el departamento van en el comando{" "}
        <GuideCode>\author</GuideCode>. Conserva las líneas con{" "}
        <GuideCode>\normalsize</GuideCode> para que la afiliación aparezca en un
        tamaño menor que tu nombre, y cambia <GuideCode>\date</GuideCode> por una
        fecha fija cuando entregues la propuesta.
      </GuideP>
      <GuidePre>{`\\author{Your Name \\\\[4pt]
  \\normalsize Supervisor: Dr.\\ Supervisor Name \\\\
  \\normalsize Department of Linguistics, University Name \\\\
  \\normalsize \\texttt{your.email@university.edu}}
\\date{Submitted: 15 March 2026}`}</GuidePre>

      <GuideH3>Tabla del cronograma</GuideH3>
      <GuideP>
        El cronograma es una tabla de <GuideCode>booktabs</GuideCode> con una
        columna por trimestre y un cuadrado relleno (
        <GuideCode>$\blacksquare$</GuideCode> de{" "}
        <GuideCode>amssymb</GuideCode>) en cada celda activa. Añade una columna por
        mes si el proyecto es más corto, o filas para cada paquete de trabajo. Para
        un doctorado de tres años, usa años o semestres como columnas.
      </GuideP>
      <GuidePre>{`\\begin{tabular}{c >{\\raggedright\\arraybackslash}p{6.4cm} c c c c}
  \\toprule
  Phase & Activity & Y1 & Y2 & Y3 & Y4 \\\\
  \\midrule
  1 & Literature review and ethics approval & $\\blacksquare$ & & & \\\\
  2 & Data collection & & $\\blacksquare$ & $\\blacksquare$ & \\\\
  3 & Analysis and writing up & & & $\\blacksquare$ & $\\blacksquare$ \\\\
  \\bottomrule
\\end{tabular}`}</GuidePre>

      <GuideH3>Citas y referencias</GuideH3>
      <GuideUl>
        <li>
          <GuideCode>{"\\citet{key}"}</GuideCode> para una cita integrada en la
          oración (Nakata (2015) encontró...), <GuideCode>{"\\citep{key}"}</GuideCode>{" "}
          para una cita entre paréntesis.
        </li>
        <li>
          Cada <GuideCode>\bibitem</GuideCode> lleva una etiqueta{" "}
          <GuideCode>[Author(Year)]</GuideCode> para que natbib pueda componer
          citas autor-año sin BibTeX; el archivo compila con una sola ejecución de
          pdflatex más otra para las referencias cruzadas.
        </li>
        <li>
          Para pasar a un archivo <GuideCode>.bib</GuideCode>, sustituye el entorno{" "}
          <GuideCode>thebibliography</GuideCode> por{" "}
          <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> y{" "}
          <GuideCode>{"\\bibliography{references}"}</GuideCode>, o usa el estilo APA
          con el paquete <GuideCode>apacite</GuideCode> si tu departamento lo exige.
        </li>
      </GuideUl>

      <GuideH2 id="faq">Preguntas frecuentes sobre la plantilla de propuesta de investigación</GuideH2>
      <GuideFaq items={faq} inLanguage="es" />
    </article>
  );
}
