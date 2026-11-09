import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "Editar LaTeX en línea: compilador LaTeX gratis y visor de PDF",
    intro: (
      <>
        <p>
          Esta página reúne un editor, un compilador y un visor de LaTeX en línea. Escribe un
          documento a la izquierda y el PDF compilado aparece a la derecha. Los documentos se
          compilan con una distribución completa de TeX Live en el servicio de compilación de
          Octree, así que amsmath, TikZ, pgfplots, beamer, geometry, hyperref y el resto de TeX
          Live funcionan sin instalar nada.
        </p>
        <p>
          pdfLaTeX es el motor por defecto; el servicio cambia a XeLaTeX para fontspec y fuentes
          del sistema, y a LuaLaTeX para código Lua. No necesitas cuenta. El editor admite un solo
          archivo, así que las imágenes, los archivos .bib y los proyectos de varios archivos van
          en el editor de Octree, donde una cuenta gratuita además guarda tu trabajo. El shell
          escape está desactivado, por lo que minted no está disponible.
        </p>
      </>
    ),
    stepsHeading: "Cómo usar el editor de LaTeX en línea",
    steps: [
      {
        title: "Escribe o pega un documento completo",
        body: (
          <>
            Sustituye el ejemplo por tu propio LaTeX, desde <Cmd>\documentclass</Cmd> hasta{" "}
            <Cmd>\end{"{document}"}</Cmd>. El editor resalta la sintaxis de LaTeX y autocompleta
            los comandos más comunes.
          </>
        ),
      },
      {
        title: "Mira cómo se actualiza el PDF",
        body: "La vista previa se recompila aproximadamente un segundo después de que dejas de escribir. Si la compilación falla, un cuadro de diálogo muestra el mensaje de error y el log.",
      },
      {
        title: "Conserva el resultado",
        body: "Haz clic en \"Abrir en Octree\" para guardar el documento como proyecto, añadir imágenes y archivos .bib o pedirle a la IA que lo edite.",
      },
    ],
    tipsHeading: "Errores comunes de LaTeX y cómo solucionarlos",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            Un paquete de <Cmd>\usepackage</Cmd> está mal escrito o no forma parte de TeX Live.
            Revisa el nombre: todos los paquetes de CTAN incluidos en TeX Live están instalados.
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            Un comando exclusivo del modo matemático, como <Cmd>^</Cmd>, <Cmd>_</Cmd> o{" "}
            <Cmd>\alpha</Cmd>, aparece fuera de él. Enciérralo en <Cmd>$...$</Cmd>, o escapa un
            guion bajo literal como <Cmd>\_</Cmd>.
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            Un comando está mal escrito o su paquete no está cargado, por ejemplo{" "}
            <Cmd>\mathbb</Cmd> sin <Cmd>amssymb</Cmd>. El log indica la línea.
          </>
        ),
      },
      {
        title: "No sabes qué falla",
        body: "Haz clic en \"Fix this error with AI in Octree\" (corregir el error con IA en Octree) en el cuadro de diálogo del error. Octree abre el documento con el log de errores adjunto, así que la IA sabe exactamente qué tiene que corregir.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre el editor de LaTeX en línea",
    faq: [
      {
        question: "¿Puedo editar LaTeX en línea sin instalar nada?",
        answer:
          "Sí. Escribe o pega LaTeX en el editor de esta página y el PDF aparece a su lado. La compilación se ejecuta en una instalación completa de TeX Live en los servidores de Octree, así que no necesitas una distribución de TeX local.",
      },
      {
        question: "¿Este visor de LaTeX es gratis? ¿Necesito una cuenta?",
        answer:
          "Es gratis y no necesita cuenta. En esta página no se guarda nada, así que copia tu código antes de salir o ábrelo en Octree con una cuenta gratuita para conservarlo como proyecto.",
      },
      {
        question: "¿Qué compilador de LaTeX usa la vista previa en línea?",
        answer:
          "pdfLaTeX por defecto. El servicio de compilación cambia a XeLaTeX cuando el documento carga fontspec, polyglossia, unicode-math o xeCJK, y a LuaLaTeX cuando usa \\directlua o luacode.",
      },
      {
        question: "¿Puedo subir imágenes o una bibliografía .bib?",
        answer:
          "En esta página no: compila un único archivo main.tex. El entorno thebibliography funciona, pero los archivos de imagen y los archivos .bib requieren el editor de Octree, que admite proyectos de varios archivos.",
      },
      {
        question: "¿Por qué no compila un paquete como minted?",
        answer:
          "minted y otros paquetes que necesitan shell escape (\\write18) están desactivados por seguridad. Para código, usa el paquete listings o verbatim.",
      },
    ],
    related: (
      <>
        ¿Empiezas con LaTeX? Comienza por la{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introducción a LaTeX
        </IntroLink>
        , explora las <IntroLink href="/templates">plantillas de LaTeX</IntroLink> listas para usar
        o describe un documento y deja que el{" "}
        <IntroLink href="/tools/ai-latex-generator">generador de LaTeX con IA</IntroLink> lo
        escriba.
      </>
    ),
  },

  "math-to-latex": {
    heading: "Convertir matemáticas a LaTeX: de fórmulas escritas a mano a código en línea",
    intro: (
      <>
        <p>
          Este conversor de matemáticas a LaTeX transforma una imagen de fórmulas escritas a mano
          o impresas en código LaTeX. Sube una foto, un escaneo o una captura de pantalla de una
          ecuación y un modelo de IA con visión transcribe fracciones, raíces, sumatorios,
          integrales, matrices y letras griegas en notación estándar de amsmath.
        </p>
        <p>
          El resultado es un documento LaTeX completo, y la vista previa lo compila con una
          distribución completa de TeX Live en el servicio de compilación de Octree, usando
          pdfLaTeX. No necesitas cuenta. Funciona mejor con una ecuación o unas pocas líneas cada
          vez; si tienes páginas largas de desarrollos, es mejor dividirlas en varias imágenes.
        </p>
      </>
    ),
    stepsHeading: "Cómo convertir matemáticas a LaTeX",
    steps: [
      {
        title: "Haz una foto nítida",
        body: "Fotografía o haz una captura de las matemáticas: una línea de tu cuaderno, una pizarra, una nota de la tableta o una fórmula de un libro. Recórtala a la parte que necesitas.",
      },
      {
        title: "Súbela",
        body: "Arrastra el JPEG o PNG al cuadro de carga. El LaTeX va apareciendo en el panel de código a medida que la IA lee la imagen.",
      },
      {
        title: "Revisa la vista previa y copia",
        body: "Abre la pestaña de vista previa para comparar el resultado compilado con el original; después copia el código, descárgalo o ábrelo en Octree para seguir editando.",
      },
    ],
    tipsHeading: "Consejos para conversiones precisas",
    tips: [
      {
        title: "Una expresión o un bloque corto por imagen",
        body: "El conversor está pensado para ecuaciones y desarrollos cortos; divide una página entera de cálculos en varias subidas.",
      },
      {
        title: "Escribe con claridad y buen contraste",
        body: "Tinta oscura sobre papel liso, luz uniforme y un ángulo frontal reducen las confusiones entre símbolos como 1 y l, o x y ×.",
      },
      {
        title: "Revisa siempre los símbolos",
        body: "El reconocimiento de escritura a mano comete errores. Compara subíndices, exponentes y letras griegas en la vista previa antes de usar el código.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir matemáticas a LaTeX",
    faq: [
      {
        question: "¿Cómo convierto matemáticas escritas a mano a LaTeX?",
        answer:
          "Sube una foto o un escaneo de las matemáticas escritas a mano en JPEG o PNG. La IA las lee y devuelve LaTeX en un documento completo que carga amsmath y amssymb, y la vista previa lo compila para que puedas revisar cada símbolo.",
      },
      {
        question: "¿Este conversor de LaTeX en línea es gratis?",
        answer:
          "Sí. Convertir, previsualizar, copiar y descargar es gratis y no necesita cuenta. Solo necesitas una cuenta gratuita de Octree para guardar el resultado como proyecto.",
      },
      {
        question: "¿Funciona con escritura a mano del iPad o de una tableta?",
        answer:
          "Sí. Exporta la página o una captura de pantalla desde GoodNotes, Notability, OneNote o una app similar como imagen, recórtala a la ecuación y súbela.",
      },
      {
        question: "¿Puedo escribir las matemáticas en vez de subir una imagen?",
        answer:
          "Esta página convierte imágenes. Para convertir matemáticas escritas con el teclado o una descripción en lenguaje natural como \"integral de x al cuadrado de 0 a 1\", usa el conversor de ecuaciones a LaTeX.",
      },
      {
        question: "¿El LaTeX generado compila en Overleaf?",
        answer:
          "Sí. El resultado usa notación estándar de amsmath y compila con pdfLaTeX en cualquier distribución de TeX, incluidos Overleaf y Octree. La vista previa de esta página lo compila con TeX Live completo.",
      },
    ],
    related: (
      <>
        Aprende cómo funcionan las matemáticas en LaTeX con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guía de expresiones matemáticas
        </IntroLink>
        , convierte matemáticas escritas con el teclado con el{" "}
        <IntroLink href="/tools/equation-to-latex">conversor de ecuaciones a LaTeX</IntroLink> o
        busca un comando en la{" "}
        <IntroLink href="/symbols">referencia de símbolos de LaTeX</IntroLink>.
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "Convertir PDF a LaTeX en línea",
    intro: (
      <>
        <p>
          Un PDF guarda las páginas terminadas, no el LaTeX que las generó, así que convertir un
          PDF a LaTeX significa recrear su texto y sus matemáticas como código editable. Cómo
          hacerlo depende del origen del PDF: los artículos de arXiv suelen incluir su código
          fuente original, y para todo lo demás el conversor de esta página recrea el LaTeX con
          IA.
        </p>
        <p>
          Sube un PDF de hasta 3 MB y 20 páginas y recibe un documento LaTeX completo, compilado
          con una distribución completa de TeX Live en el servicio de compilación de Octree para
          que puedas revisarlo. No necesitas cuenta. El resultado no conserva las fuentes, la
          maquetación ni las imágenes originales, y los documentos largos conviene convertirlos
          sección por sección.
        </p>
      </>
    ),
    stepsHeading: "Cómo convertir un PDF a LaTeX",
    steps: [
      {
        title: "Mira primero en arXiv",
        body: "Si el PDF es un artículo de arXiv, normalmente está disponible el código LaTeX original de los autores. Descárgalo desde el enlace TeX Source de la página del artículo en arXiv en lugar de convertir el PDF.",
      },
      {
        title: "Sube el PDF",
        body: "Arrastra un PDF de hasta 3 MB y 20 páginas al conversor de arriba. La IA lee el texto y las matemáticas y devuelve un documento LaTeX completo que carga amsmath, y la vista previa lo compila para que puedas compararlo con el original.",
      },
      {
        title: "Convierte los archivos largos por partes",
        body: "Si el PDF es largo, extrae las páginas que necesitas o haz una captura de un solo bloque de ecuaciones y usa el conversor de matemáticas a LaTeX.",
      },
      {
        title: "Une las partes y edita",
        body: "Pega las piezas en el editor de LaTeX en línea para corregirlas con vista previa del PDF en vivo, o ábrelas en Octree para guardar el documento como proyecto.",
      },
    ],
    tipsHeading: "Consejos antes de convertir",
    tips: [
      {
        title: "Las figuras no se extraen",
        body: "Las imágenes y gráficas del PDF no se recrean como LaTeX. Vuelve a añadirlas con \\includegraphics, o redibuja los diagramas con el conversor de imagen a TikZ.",
      },
      {
        title: "Revisa las matemáticas",
        body: "El reconocimiento comete errores en fórmulas y tablas densas. Compara subíndices, signos y alineación con el original.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir PDF a LaTeX",
    faq: [
      {
        question: "¿Cómo convierto un PDF a LaTeX?",
        answer:
          "Un PDF no contiene su código LaTeX, así que hay que recrear el texto y las matemáticas. Para artículos de arXiv, descarga el código original desde el enlace TeX Source de la página del artículo en arXiv. Para otros PDF, sube el archivo (hasta 3 MB y 20 páginas) al conversor de esta página y luego compara la vista previa compilada con el original.",
      },
      {
        question: "¿Convertir un PDF a LaTeX es gratis?",
        answer:
          "Sí. El conversor de PDF, el conversor de matemáticas a LaTeX y el editor de LaTeX en línea no necesitan cuenta. Solo necesitas una cuenta gratuita de Octree para guardar el resultado como proyecto.",
      },
      {
        question: "¿Puedo convertir un artículo o una tesis completa?",
        answer:
          "El conversor acepta PDF de hasta 3 MB y 20 páginas, y la longitud del resultado por conversión es limitada, así que una tesis conviene convertirla capítulo a capítulo. Los artículos de arXiv es mejor descargarlos desde su código fuente original.",
      },
      {
        question: "¿El resultado conserva la maquetación exacta del PDF?",
        answer:
          "No. El texto, los títulos y las matemáticas se recrean como LaTeX limpio y editable; las fuentes, el espaciado, la maquetación y las imágenes no se copian.",
      },
      {
        question: "¿Se pueden convertir PDF escaneados?",
        answer:
          "Los escaneos nítidos de páginas impresas o escritas a mano con letra clara pueden funcionar. Los escaneos de baja resolución, torcidos o tenues provocan errores de lectura en los símbolos, así que revisa bien el resultado.",
      },
    ],
    related: (
      <>
        Convierte capturas de ecuaciones con el{" "}
        <IntroLink href="/tools/math-to-latex">conversor de matemáticas a LaTeX</IntroLink>, edita
        el resultado en el <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink>{" "}
        o lee la{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guía de matemáticas en LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "image-to-tikz": {
    heading: "Convertir imagen a TikZ: de un diagrama a LaTeX editable",
    intro: (
      <>
        <p>
          Este conversor de imagen a TikZ transforma la imagen de un diagrama en código TikZ que
          puedes editar y compilar. Sube un diagrama de flujo, un diagrama de bloques, un árbol,
          un grafo o un boceto, y un modelo de IA con visión lo reconstruye como nodos y trazos en
          un documento LaTeX independiente, conservando las etiquetas de texto y los colores
          siempre que puede.
        </p>
        <p>
          La vista previa compila el resultado con una distribución completa de TeX Live en el
          servicio de compilación de Octree, usando pdfLaTeX. No necesitas cuenta. El resultado
          es un redibujo fiel, no un calco exacto píxel a píxel, así que cuenta con hacer algunos
          retoques manuales en las figuras que deban coincidir exactamente.
        </p>
      </>
    ),
    stepsHeading: "Cómo convertir una imagen a TikZ",
    steps: [
      {
        title: "Sube el diagrama",
        body: "Arrastra una captura de pantalla, una exportación o una foto del diagrama en JPEG, PNG, GIF o WebP, de hasta 20 MB.",
      },
      {
        title: "Deja que la IA lo redibuje en TikZ",
        body: (
          <>
            El modelo lee las formas, flechas, etiquetas y colores y escribe un documento LaTeX
            independiente con un <Cmd>tikzpicture</Cmd>, usando bibliotecas como positioning,
            arrows y shapes.geometric.
          </>
        ),
      },
      {
        title: "Compara y después ajusta",
        body: "Abre la pestaña de vista previa para comparar el diagrama compilado con tu imagen. Copia o descarga el código, o ábrelo en Octree para ajustarlo con la IA.",
      },
    ],
    tipsHeading: "Consejos para una mejor conversión",
    tips: [
      {
        title: "Recorta la imagen al diagrama",
        body: "Quita pies de figura, texto de la página y otras figuras; un diagrama por imagen es lo que mejor se convierte.",
      },
      {
        title: "Usa fuentes limpias",
        body: "Las exportaciones y capturas de pantalla dan mejor resultado que las fotos. Para bocetos a mano, usa tinta oscura sobre papel liso y fotografíalos de frente.",
      },
      {
        title: "Las gráficas de datos van en pgfplots",
        body: "El conversor redibuja formas; no recupera puntos de datos. Para gráficas a partir de números, usa el generador de pgfplots.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir imagen a TikZ",
    faq: [
      {
        question: "¿Cómo convierto una imagen a TikZ?",
        answer:
          "Sube un JPEG, PNG, GIF o WebP del diagrama. La IA devuelve un documento LaTeX completo con un tikzpicture que lo redibuja, y la vista previa compila ese código para que puedas compararlo con el original.",
      },
      {
        question: "¿El código TikZ es una copia exacta de mi imagen?",
        answer:
          "No. Es un redibujo con nodos y trazos editables, no un calco. La disposición, las etiquetas y las flechas suelen mantenerse, pero el espaciado, las curvas y los colores pueden variar, así que cuenta con ajustar coordenadas si es una figura para publicar.",
      },
      {
        question: "¿Qué tipo de diagramas se convierten mejor?",
        answer:
          "Diagramas de flujo, diagramas de bloques, árboles, grafos, máquinas de estados y figuras geométricas sencillas. Las figuras densas con muchos elementos superpuestos, las fotografías y las gráficas de datos se convierten mal.",
      },
      {
        question: "¿Puede convertir un boceto a mano o la foto de una pizarra?",
        answer:
          "Sí, si las líneas y las etiquetas se leen bien. Recorta la foto al diagrama y usa buena iluminación; el lápiz tenue y los ángulos torcidos reducen la precisión.",
      },
      {
        question: "¿El conversor de imagen a TikZ es gratis?",
        answer:
          "Sí, y no necesita cuenta. El código generado compila con pdfLaTeX y TeX Live, así que funciona en Overleaf, en Octree o en una instalación local de LaTeX.",
      },
    ],
    related: (
      <>
        Aprende los comandos del resultado con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guía de TikZ
        </IntroLink>
        . ¿No tienes una imagen de partida? Describe el diagrama al{" "}
        <IntroLink href="/tools/tikz-generator">generador de TikZ</IntroLink> o representa datos
        con el <IntroLink href="/tools/pgfplots-generator">generador de pgfplots</IntroLink>.
      </>
    ),
  },

  "tikz-generator": {
    heading: "Generador de TikZ en línea: crea diagramas TikZ a partir de una descripción",
    intro: (
      <>
        <p>
          Este generador de TikZ escribe código TikZ a partir de una descripción en lenguaje
          natural de un diagrama. Produce un documento LaTeX completo con un tikzpicture comentado
          y las bibliotecas que necesita, como positioning, arrows.meta y shapes, para que tengas
          un punto de partida que funciona en lugar de una página en blanco.
        </p>
        <p>
          La vista previa compila el código con una distribución completa de TeX Live en el
          servicio de compilación de Octree, usando pdfLaTeX. No necesitas cuenta. Aquí el código
          generado es de solo lectura; si quieres un editor de TikZ en línea con vista previa en
          vivo, pégalo en el editor de LaTeX o ábrelo en Octree, donde una cuenta gratuita lo
          guarda.
        </p>
      </>
    ),
    stepsHeading: "Cómo crear un diagrama TikZ en línea",
    steps: [
      {
        title: "Describe el diagrama",
        body: "Indica los nodos, cómo se conectan y la disposición, por ejemplo \"un diagrama de flujo con Inicio, Proceso y Fin conectados de izquierda a derecha\".",
      },
      {
        title: "Genera el TikZ",
        body: "La IA escribe un documento LaTeX completo con un tikzpicture comentado y las bibliotecas de TikZ que necesita.",
      },
      {
        title: "Previsualiza y edita",
        body: "Revisa el diagrama compilado en la pestaña de vista previa. Para modificar el código a mano, pégalo en el editor de LaTeX en línea o ábrelo en Octree.",
      },
    ],
    tipsHeading: "Consejos para mejores diagramas TikZ",
    tips: [
      {
        title: "Sé concreto",
        body: "Indica etiquetas de nodos, formas, direcciones de las flechas y colores. Decir \"de izquierda a derecha\" o \"de arriba abajo\" resuelve la mayoría de los problemas de disposición.",
      },
      {
        title: "Avanza en pasos pequeños",
        body: "Genera primero una versión sencilla y luego pide un cambio cada vez en Octree en lugar de reescribir la instrucción desde cero.",
      },
      {
        title: "Usa pgfplots para gráficas de funciones",
        body: "Para ejes, gráficas de funciones y gráficos a partir de datos, el generador de pgfplots produce un código más limpio que TikZ a secas.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre el generador de TikZ",
    faq: [
      {
        question: "¿Puedo usar TikZ en línea sin instalar LaTeX?",
        answer:
          "Sí. El generador de TikZ escribe el código y lo compila en los servidores de Octree con una distribución completa de TeX Live, así que la vista previa del diagrama funciona en el navegador sin instalar nada.",
      },
      {
        question: "¿Hay un editor de TikZ en línea con vista previa en vivo?",
        answer:
          "En esta página el código generado es de solo lectura. Pégalo en el editor de LaTeX en línea gratuito de tools.useoctree.com/tools/latex-preview, que recompila mientras escribes, o ábrelo en Octree para editarlo con IA y guardarlo como proyecto.",
      },
      {
        question: "¿Qué tipos de diagramas TikZ puede generar?",
        answer:
          "Diagramas de flujo, árboles, grafos y redes, diagramas de bloques, máquinas de estados, esquemas de redes neuronales, diagramas de Venn, diagramas conmutativos y figuras geométricas. Los dibujos técnicos muy detallados suelen requerir edición manual después.",
      },
      {
        question: "¿El generador de TikZ es gratis?",
        answer:
          "Sí. Generar, previsualizar, copiar y descargar el código no necesita cuenta. Solo necesitas una cuenta gratuita de Octree para guardar el diagrama como proyecto.",
      },
      {
        question: "¿El código funciona en Overleaf?",
        answer:
          "Sí. El resultado es un documento LaTeX estándar que carga tikz y bibliotecas estándar de TikZ, y compila con pdfLaTeX, así que funciona en Overleaf, en Octree y en distribuciones de TeX locales.",
      },
    ],
    related: (
      <>
        Aprende la sintaxis con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guía de TikZ
        </IntroLink>
        , edita código TikZ en el{" "}
        <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink> o convierte una
        imagen existente en código con{" "}
        <IntroLink href="/tools/image-to-tikz">imagen a TikZ</IntroLink>.
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "Generador de LaTeX con IA: convierte una descripción en código LaTeX",
    intro: (
      <>
        <p>
          Este generador de LaTeX con IA escribe código LaTeX a partir de una descripción en
          lenguaje natural. Pide una presentación beamer, un informe de laboratorio, un artículo a
          dos columnas o una tabla, y te devuelve un documento completo con la clase de documento
          adecuada, paquetes como amsmath, amssymb y graphicx, y una estructura de secciones lista
          para rellenar.
        </p>
        <p>
          La vista previa compila el código con una distribución completa de TeX Live en el
          servicio de compilación de Octree: pdfLaTeX por defecto, y XeLaTeX o LuaLaTeX cuando el
          código los requiere. No necesitas cuenta; regístrate gratis solo si quieres guardar el
          resultado como proyecto.
        </p>
      </>
    ),
    stepsHeading: "Cómo generar LaTeX con IA",
    steps: [
      {
        title: "Describe lo que necesitas",
        body: "Escribe una o dos frases: el tipo de documento, sus secciones y cualquier detalle concreto, como una tabla, una ecuación o un diseño a dos columnas.",
      },
      {
        title: "Genera el código LaTeX",
        body: "Haz clic en \"Generar LaTeX\". El código va apareciendo como un documento completo, con la clase de documento, los paquetes y la estructura ya preparados.",
      },
      {
        title: "Previsualiza y luego copia o sigue editando",
        body: "Cambia a la pestaña de vista previa para ver el PDF compilado. Copia el código, descárgalo como .tex o PDF, o ábrelo en Octree para seguir editándolo.",
      },
    ],
    tipsHeading: "Consejos para obtener mejor LaTeX",
    tips: [
      {
        title: "Indica la clase de documento",
        body: "Di article, report, diapositivas beamer o letter, y enumera las secciones que quieres; las instrucciones vagas dan documentos genéricos.",
      },
      {
        title: "Pide una cosa cada vez",
        body: "Una sola tabla, una disposición de figuras o un conjunto de diapositivas sale más limpio que una tesis entera en una sola instrucción. Las peticiones largas pueden quedar cortadas.",
      },
      {
        title: "Sustituye el texto de relleno",
        body: "El generador escribe la estructura y contenido de ejemplo, no tu investigación. Revisa cada ecuación y nunca conserves una cita que no hayas verificado.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre el generador de LaTeX con IA",
    faq: [
      {
        question: "¿Qué es un generador de LaTeX con IA?",
        answer:
          "Convierte una descripción en lenguaje natural en código LaTeX. Describes el documento y el generador escribe un archivo .tex completo con la clase de documento, los paquetes que necesita, las secciones y contenido de relleno que luego editas.",
      },
      {
        question: "¿El generador de código LaTeX es gratis?",
        answer:
          "Sí. Puedes generar, previsualizar, copiar y descargar LaTeX sin cuenta. Solo necesitas una cuenta gratuita de Octree si quieres guardar el documento como proyecto y seguir editándolo.",
      },
      {
        question: "¿El LaTeX generado compila?",
        answer:
          "La vista previa lo compila con TeX Live completo en el servicio de compilación de Octree (pdfLaTeX por defecto, XeLaTeX o LuaLaTeX cuando el código los necesita). Si falla, el cuadro de diálogo del error ofrece abrir el documento en Octree para que la IA corrija el error a partir del log.",
      },
      {
        question: "¿Puede escribirme un artículo entero?",
        answer:
          "Escribe el esqueleto de un artículo: la clase de documento, los paquetes, las secciones y contenido de relleno como una ecuación o una tabla de ejemplo. El contenido es texto de relleno y los documentos muy largos pueden quedar cortados, así que toma el resultado como punto de partida.",
      },
      {
        question: "¿Qué tipos de documentos puede generar?",
        answer:
          "Artículos, informes, presentaciones beamer, cartas, currículums, hojas de ejercicios, tablas y ecuaciones sueltas son peticiones habituales. Si un documento necesita un paquete concreto, menciónalo en la descripción.",
      },
    ],
    related: (
      <>
        ¿Quieres entender el código que escribe? Lee la{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introducción a LaTeX
        </IntroLink>{" "}
        o pega cualquier LaTeX en el{" "}
        <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink> para editarlo
        con vista previa del PDF en vivo.
      </>
    ),
  },

  "table-to-latex": {
    heading: "Convertir tabla a LaTeX: generador de tablas LaTeX desde CSV",
    intro: (
      <>
        <p>
          Este generador de tablas LaTeX convierte un archivo CSV en una tabla LaTeX compuesta.
          Sube un .csv exportado desde Excel, Google Sheets o cualquier hoja de cálculo y un modelo
          de IA (OpenAI gpt-4o-mini) escribe un documento LaTeX completo alrededor de un entorno{" "}
          <Cmd>tabular</Cmd>, cargando booktabs para obtener líneas horizontales limpias y
          definiendo la fila de encabezado y la alineación de las columnas. Es la forma más rápida
          de convertir Excel a LaTeX: guarda primero la hoja como CSV, ya que los archivos .xlsx no
          se leen directamente.
        </p>
        <p>
          La pestaña Vista previa compila la tabla con una distribución completa de TeX Live en el
          servicio de compilación de Octree, así que ves el resultado antes de exportar el archivo
          .tex, un PDF o una imagen JPG. El archivo se lee en tu navegador y se envía como texto, y
          cada conversión devuelve unos 2000 tokens de LaTeX, suficiente para una tabla de
          resultados de unas pocas decenas de filas. Es gratis y no necesita cuenta.
        </p>
      </>
    ),
    stepsHeading: "Cómo convertir un archivo CSV en una tabla LaTeX",
    steps: [
      {
        title: "Guarda la tabla como CSV",
        body: "En Excel elige Archivo > Guardar como > CSV (delimitado por comas); en Google Sheets elige Archivo > Descargar > Valores separados por comas. Deja la fila de encabezado como primera línea.",
      },
      {
        title: "Sube el archivo .csv",
        body: "Arrastra el archivo al área de carga o haz clic para elegirlo. La tabla LaTeX va apareciendo en la pestaña Código como un documento completo.",
      },
      {
        title: "Previsualiza y exporta",
        body: "Abre la pestaña Vista previa para compilar la tabla a PDF y luego exporta el archivo .tex, el PDF o una imagen JPG, o ábrelo en Octree para colocar la tabla en tu artículo.",
      },
    ],
    tipsHeading: "Problemas comunes con tablas y cómo solucionarlos",
    tips: [
      {
        title: "Los caracteres especiales rompen la tabla",
        body: (
          <>
            <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> y <Cmd>_</Cmd> en las
            celdas deben escaparse como <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>,{" "}
            <Cmd>\#</Cmd> y <Cmd>\_</Cmd>. Si la vista previa falla, el log indica la fila que
            hay que corregir.
          </>
        ),
      },
      {
        title: "La tabla se sale de la página",
        body: (
          <>
            Las tablas anchas desbordan el ancho del texto. Usa páginas apaisadas, una fuente más
            pequeña como <Cmd>\small</Cmd>, o envuelve el tabular en{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> de graphicx.
          </>
        ),
      },
      {
        title: "Las hojas de cálculo grandes se cortan",
        body: "Cada conversión devuelve unos 2000 tokens de LaTeX, lo que alcanza para una tabla de unas pocas decenas de filas. Divide las hojas más grandes en varios archivos CSV o deja solo las filas que necesita el artículo.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre el generador de tablas LaTeX",
    faq: [
      {
        question: "¿Cómo convierto una tabla de Excel a LaTeX?",
        answer:
          "Guarda la hoja como archivo CSV en Excel (Archivo > Guardar como > CSV) y sube el .csv aquí. La herramienta no lee archivos .xlsx directamente, pero una exportación CSV de la hoja conserva los mismos valores de las celdas. Obtienes una tabla con booktabs dentro de un documento LaTeX completo que puedes previsualizar, descargar y pegar en tu artículo.",
      },
      {
        question: "¿Qué formatos de archivo acepta el generador de tablas LaTeX?",
        answer:
          "Solo archivos .csv. Excel, Google Sheets, LibreOffice Calc y Numbers pueden exportar una hoja como CSV. En esta página no se aceptan JSON, .xlsx ni tablas pegadas.",
      },
      {
        question: "¿El resultado usa booktabs?",
        answer:
          "Sí. El documento generado carga booktabs, y la tabla normalmente usa sus líneas \\toprule, \\midrule y \\bottomrule. Copia el entorno tabular o table en tu propio documento y añade \\usepackage{booktabs} a su preámbulo.",
      },
      {
        question: "¿El conversor de CSV a LaTeX es gratis?",
        answer:
          "Sí, es gratis y no necesita cuenta. La tabla la escribe un modelo de IA (OpenAI gpt-4o-mini), así que revisa los números y la alineación de las columnas en la vista previa antes de usarla.",
      },
    ],
    related: (
      <>
        Aprende tabular, multirow y los tipos de columna con la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guía de tablas en LaTeX
        </IntroLink>
        , representa los mismos datos con el{" "}
        <IntroLink href="/tools/pgfplots-generator">generador de PGFPlots</IntroLink> o consulta
        todos los <IntroLink href="/tools/latex-converter">conversores de LaTeX</IntroLink>.
      </>
    ),
  },

  "equation-to-latex": {
    heading: "Convertir ecuación a LaTeX: cómo funciona el conversor",
    intro: (
      <p>
        Convierte cualquier ecuación matemática a LaTeX en tres pasos. La herramienta acepta
        ecuaciones escritas con el teclado, capturas de pantalla y ecuaciones escritas a mano, y
        genera LaTeX que puedes pegar directamente en un artículo, unos deberes o tus apuntes.
      </p>
    ),
    stepsHeading: "Cómo convertir una ecuación a LaTeX en tres pasos",
    steps: [
      {
        title: "Escribe o sube tu ecuación",
        body: "Escribe la ecuación en lenguaje natural (\"integral de x al cuadrado de 0 a 1\"), pégala en cualquier notación o sube una imagen: una captura de una fórmula de un libro, una foto de una pizarra o una ecuación escrita a mano en tu iPad o tu móvil.",
      },
      {
        title: "Convierte a LaTeX",
        body: "Haz clic en \"Convertir a LaTeX\". La IA lee la ecuación, reconoce fracciones, raíces, sumatorios, integrales, matrices y letras griegas, y escribe LaTeX estándar con amsmath, así que el resultado compila en Overleaf, Octree o cualquier distribución de TeX.",
      },
      {
        title: "Revisa la vista previa y copia el código",
        body: "La ecuación renderizada aparece junto al código para que puedas confirmar cada símbolo. Copia el LaTeX, descárgalo como archivo .tex o PDF, o ábrelo en Octree para seguir editando.",
      },
    ],
    tipsHeading: "Para qué lo usa la gente",
    tips: [
      {
        title: "Deberes y hojas de problemas",
        body: "Convierte una solución escrita a mano en una entrega mecanografiada sin tener que aprender antes todos los comandos de LaTeX.",
      },
      {
        title: "Artículos de investigación y tesis",
        body: "Lleva ecuaciones de tus notas, diapositivas o PDF antiguos a tu manuscrito como LaTeX limpio y editable.",
      },
      {
        title: "Apuntes de clase",
        body: "Fotografía la pizarra o tu cuaderno después de clase y convierte cada fórmula a LaTeX para tus apuntes.",
      },
      {
        title: "Capturas de fórmulas de libros",
        body: "Sube un recorte de una página de un libro o una revista y obtén el LaTeX de la fórmula en lugar de volver a escribirla.",
      },
      {
        title: "Escritura a mano en iPad o tableta",
        body: "Exporta tus ecuaciones escritas a mano desde GoodNotes, Notability u OneNote como imágenes y conviértelas en un solo paso.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir ecuaciones a LaTeX",
    faq: [
      {
        question: "¿Cómo convierto una ecuación a LaTeX?",
        answer:
          "Escribe la ecuación en texto plano o en notación matemática, o sube una imagen de ella, y haz clic en \"Convertir a LaTeX\". El conversor devuelve código LaTeX que usa amsmath y muestra una vista previa renderizada para que puedas revisarla antes de copiarla en tu documento.",
      },
      {
        question: "¿Puede convertir una ecuación escrita a mano a LaTeX?",
        answer:
          "Sí. Sube una foto o un escaneo de una ecuación escrita a mano en JPEG, PNG, GIF o WebP, incluida la escritura exportada desde una app de iPad o tableta. Las imágenes nítidas, con buen contraste y una ecuación por imagen dan el LaTeX más preciso.",
      },
      {
        question: "¿El conversor de ecuaciones a LaTeX es gratis?",
        answer:
          "Sí. El conversor es gratuito y no requiere cuenta. Puedes copiar el LaTeX, descargar un archivo .tex o un PDF compilado, o abrir el resultado en el editor de Octree.",
      },
      {
        question: "¿Qué paquetes de LaTeX necesita el resultado?",
        answer:
          "El código generado usa notación matemática estándar que compila con los paquetes amsmath, amssymb y amsfonts. Si descargas el archivo .tex, el preámbulo ya los incluye, y el resultado funciona en Overleaf y en todas las distribuciones de TeX habituales.",
      },
    ],
    related: (
      <>
        ¿Buscas los comandos que hay detrás del resultado? Consulta la{" "}
        <IntroLink href="/symbols">referencia de símbolos de LaTeX</IntroLink>. Las matemáticas en
        texto plano se escriben directamente en el cuadro de arriba; para seguir editando el
        resultado como documento completo, usa el{" "}
        <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink>.
      </>
    ),
  },
};

export default translations;
