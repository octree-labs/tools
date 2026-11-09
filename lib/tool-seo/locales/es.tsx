import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
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

  "arxiv-to-latex": {
    heading: "De arXiv a LaTeX: descargar el código fuente LaTeX de cualquier artículo",
    intro: (
      <>
        <p>
          La mayoría de los artículos de arXiv se escribieron en LaTeX, y arXiv conserva el código
          fuente que subieron los autores: los archivos .tex, la bibliografía, los archivos de
          estilo y las figuras. Esta herramienta obtiene ese código fuente LaTeX de arXiv por ti.
          Pega un ID o un enlace y podrás explorar los archivos, leer el archivo .tex principal y
          descargar el código fuente como .zip, sin tener que descomprimir tú mismo un .tar.gz.
        </p>
        <p>
          Las descargas llegan directamente del servicio de e-prints de arXiv y no se guarda nada.
          Se admiten códigos fuente de hasta 30 MB y 200 archivos. Los artículos enviados solo
          como PDF no tienen TeX que descargar; la herramienta lo indica y te sugiere un conversor.
        </p>
      </>
    ),
    stepsHeading: "Cómo descargar el código fuente TeX de arXiv",
    steps: [
      {
        title: "Pega el ID o el enlace de arXiv",
        body: "Introduce un ID como 2401.12345, un ID del formato antiguo como hep-th/9711200 o cualquier enlace arxiv.org/abs o arxiv.org/pdf. Añade una versión (2401.12345v2) para obtener esa revisión exacta; sin ella, obtienes la más reciente.",
      },
      {
        title: "Explora el código fuente LaTeX",
        body: "La herramienta descarga el e-print del artículo desde arXiv, lo descomprime y muestra todos los archivos. El archivo .tex principal, el que contiene \\documentclass y \\begin{document}, se abre en el visor; haz clic en cualquier otro archivo .tex, .bib o .sty para leerlo.",
      },
      {
        title: "Descárgalo o edítalo",
        body: "Descarga el código fuente de arXiv como .zip, o abre el archivo principal en Octree con sus archivos \\input e \\include ya integrados. Sube las figuras del .zip para compilarlo con imágenes.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre el código fuente LaTeX de arXiv",
    faq: [
      {
        question: "¿Cómo descargo el código fuente LaTeX de un artículo de arXiv?",
        answer:
          "Pega el ID o la URL de arXiv del artículo en la herramienta de esta página. Obtiene el código fuente que los autores subieron a arXiv, enumera todos los archivos, muestra el archivo .tex principal y te permite descargarlo todo como .zip. En el propio arxiv.org, los mismos archivos están en el enlace TeX Source de la página del resumen del artículo, empaquetados como .tar.gz.",
      },
      {
        question: "¿Por qué un artículo dice que no tiene código fuente LaTeX?",
        answer:
          "Algunos autores solo suben un PDF a arXiv, así que no hay ningún archivo .tex que descargar. Para esos artículos, el conversor de PDF a LaTeX puede recrear el texto y las matemáticas como LaTeX editable, aunque no recupera el código fuente original.",
      },
      {
        question: "¿Cuál es el archivo .tex principal?",
        answer:
          "El código fuente de arXiv suele contener varios archivos .tex. La herramienta elige el que el archivo 00README de arXiv marca como principal (top level), si lo hay; si no, el archivo con \\documentclass y \\begin{document} que ningún otro archivo carga con \\input. Las secciones incluidas con \\input o \\include aparecen como archivos separados en el árbol.",
      },
      {
        question: "¿Puedo reutilizar el código fuente LaTeX de un artículo de arXiv?",
        answer:
          "El código fuente sirve para ver cómo se compuso un artículo, comprobar una ecuación o tomar prestada una macro. Reutilizar texto, figuras o el artículo completo depende de la licencia que los autores eligieron en arXiv, que aparece en la página del resumen; en cualquier caso, cita a los autores.",
      },
    ],
    related: (
      <>
        ¿No hay código fuente en arXiv? Prueba el{" "}
        <IntroLink href="/tools/pdf-to-latex">conversor de PDF a LaTeX</IntroLink>. Edita y compila
        el código en el <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink>{" "}
        o cuenta sus palabras con el{" "}
        <IntroLink href="/tools/latex-word-counter">contador de palabras de LaTeX</IntroLink>.
      </>
    ),
  },

  "citation-generator": {
    heading: "Generador de citas BibTeX",
    intro: (
      <>
        <p>
          Este generador de citas BibTeX convierte los datos de un libro, un artículo de revista,
          una ponencia de congreso o una página web en una entrada BibTeX que puedes pegar en un
          archivo .bib y citar desde LaTeX. Pega campos estructurados o una referencia en texto
          libre, y el generador escribe una entrada con un tipo de entrada, una clave de cita y
          los campos que puede identificar: autor, título, año, revista o booktitle, volumen,
          páginas, editorial y DOI.
        </p>
        <p>
          Un modelo de IA (OpenAI gpt-4o-mini) escribe las entradas a partir del texto que pegas.
          No consulta Crossref, PubMed ni el catálogo de ninguna biblioteca, así que un DOI o una
          URL sin más datos no bastan para obtener un resultado fiable: incluye el título y los
          autores, y compara el resultado con la fuente. La herramienta es gratuita, no necesita
          cuenta y exporta un archivo references.bib que funciona con BibTeX, natbib y biblatex.
        </p>
      </>
    ),
    stepsHeading: "Cómo generar una cita BibTeX",
    steps: [
      {
        title: "Describe la fuente",
        body: "Pega el título, los autores, el año y la revista, editorial o congreso de un libro, un artículo o una ponencia, en cualquier orden o como una referencia en texto libre. También puedes incluir un DOI o una URL, pero añade los datos que tengas, porque el generador no los consulta.",
      },
      {
        title: "Genera la entrada BibTeX",
        body: (
          <>
            Haz clic en &quot;Generar BibTeX&quot;. La IA elige el tipo de entrada (
            <Cmd>@article</Cmd>, <Cmd>@book</Cmd>, <Cmd>@inproceedings</Cmd>, etc.), escribe una
            clave de cita como <Cmd>goodfellow2016deep</Cmd> y rellena los campos que puede
            identificar.
          </>
        ),
      },
      {
        title: "Revísala y guárdala",
        body: (
          <>
            Compara los campos con la página de la editorial; después copia la entrada o haz clic
            en &quot;Exportar como .bib&quot; para descargar <Cmd>references.bib</Cmd>. La pestaña
            Vista previa abre en Octree un documento de prueba con natbib que cita todas las
            claves.
          </>
        ),
      },
    ],
    tipsHeading: "Errores comunes de BibTeX y cómo solucionarlos",
    tips: [
      {
        title: "Citation undefined",
        body: (
          <>
            La clave de <Cmd>\cite{"{...}"}</Cmd> debe coincidir exactamente con la que sigue a{" "}
            <Cmd>@article{"{"}</Cmd>, y el documento necesita{" "}
            <Cmd>\bibliography{"{references}"}</Cmd> con un estilo como{" "}
            <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Ejecuta BibTeX y después LaTeX dos veces.
          </>
        ),
      },
      {
        title: "Nombres en el orden incorrecto",
        body: (
          <>
            Separa los autores con <Cmd>and</Cmd>, no con comas:{" "}
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>. Una coma dentro de un nombre
            indica el orden Apellido, Nombre.
          </>
        ),
      },
      {
        title: "Desaparecen las mayúsculas",
        body: (
          <>
            Muchos estilos pasan los títulos a minúsculas. Encierra las siglas y los nombres
            propios entre llaves, por ejemplo <Cmd>{"{BERT}"}</Cmd> o <Cmd>{"{Bayesian}"}</Cmd>,
            para conservar sus mayúsculas.
          </>
        ),
      },
    ],
    faqHeading: "Preguntas frecuentes sobre el generador de citas BibTeX",
    faq: [
      {
        question: "¿Cómo genero una cita BibTeX?",
        answer:
          "Pega los datos de la fuente (título, autores, año, revista o editorial) en el cuadro y haz clic en \"Generar BibTeX\". La herramienta devuelve una entrada BibTeX completa con un tipo de entrada, una clave de cita y los campos correspondientes, que puedes copiar o descargar como references.bib.",
      },
      {
        question: "¿Puede crear una entrada BibTeX a partir de un DOI o una URL?",
        answer:
          "Puedes pegar un DOI o una URL, pero el generador no los busca en Crossref ni en la web: un modelo de IA escribe la entrada a partir del texto que le das. Con un artículo conocido suele rellenar bien los campos, pero puede equivocarse, así que revisa cada campo o pega el título, los autores y la revista o congreso junto con el DOI.",
      },
      {
        question: "¿Genera citas en formato APA, MLA o IEEE?",
        answer:
          "Solo genera BibTeX. El estilo de cita se elige en tu documento LaTeX, por ejemplo con \\bibliographystyle{IEEEtran} o \\bibliographystyle{apalike}, o con biblatex y style=apa, así que la misma entrada .bib puede imprimirse en cualquier estilo.",
      },
      {
        question: "¿El generador de BibTeX es gratis?",
        answer:
          "Sí. Es gratis y no necesita cuenta. En esta página no se guarda nada, así que copia la entrada o exporta el archivo .bib antes de salir.",
      },
    ],
    related: (
      <>
        Consulta ejemplos prácticos en la{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          guía de bibliografías en LaTeX
        </IntroLink>
        , empieza un artículo con las <IntroLink href="/templates">plantillas de LaTeX</IntroLink>{" "}
        o compila tu documento en el{" "}
        <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink>.
      </>
    ),
  },

  "html-to-latex": {
    heading: "Conversor de HTML a LaTeX: convertir HTML a LaTeX en línea",
    intro: (
      <>
        <p>
          Este conversor de HTML a LaTeX transforma marcado web en un documento LaTeX completo y
          compilable. Pega HTML en el editor y un modelo de IA (OpenAI gpt-4o-mini) traduce cada
          elemento a su equivalente en LaTeX: los encabezados <Cmd>{"<h1>"}</Cmd> a{" "}
          <Cmd>{"<h3>"}</Cmd> pasan a secciones, <Cmd>{"<ul>"}</Cmd> y <Cmd>{"<ol>"}</Cmd> a
          itemize y enumerate, <Cmd>{"<table>"}</Cmd> a tabular, y <Cmd>{"<strong>"}</Cmd>,{" "}
          <Cmd>{"<em>"}</Cmd>, <Cmd>{"<code>"}</Cmd> y los enlaces a sus comandos de LaTeX, con
          amsmath, amssymb y hyperref en el preámbulo.
        </p>
        <p>
          La pestaña Vista previa compila el resultado con una distribución completa de TeX Live
          en el servicio de compilación de Octree, así que puedes ver el PDF antes de descargar el
          archivo .tex. La herramienta acepta marcado pegado, no una URL, y cada conversión
          devuelve unos 2000 tokens de LaTeX, así que conviene convertir las páginas largas por
          partes. Es gratis y no necesita cuenta.
        </p>
      </>
    ),
    stepsHeading: "Cómo convertir HTML a LaTeX",
    steps: [
      {
        title: "Pega tu HTML",
        body: "Sustituye el ejemplo por tu propio marcado: una página completa, un fragmento de un artículo o el código de una tabla copiado de un sitio web o de una exportación de un CMS.",
      },
      {
        title: "Convierte a LaTeX",
        body: (
          <>
            Haz clic en &quot;Convertir a LaTeX&quot;. El LaTeX va apareciendo en la pestaña
            Código como un documento completo, desde <Cmd>\documentclass{"{article}"}</Cmd> hasta{" "}
            <Cmd>\end{"{document}"}</Cmd>.
          </>
        ),
      },
      {
        title: "Previsualiza y exporta",
        body: "Abre la pestaña Vista previa para compilar el documento a PDF; después expórtalo como archivo .tex o como PDF, o ábrelo en Octree para seguir editándolo.",
      },
    ],
    tipsHeading: "Consejos para una conversión limpia",
    tips: [
      {
        title: "Quita lo que LaTeX no puede usar",
        body: "Elimina scripts, estilos en línea, menús de navegación y anuncios antes de convertir. El CSS de párrafo, como colores y fuentes, no tiene un equivalente directo en LaTeX, y una entrada más corta deja más espacio para el contenido.",
      },
      {
        title: "Las imágenes quedan como marcadores",
        body: (
          <>
            Una etiqueta <Cmd>{"<img>"}</Cmd> solo puede convertirse en una línea{" "}
            <Cmd>\includegraphics</Cmd>; el archivo de imagen no se descarga, así que la vista
            previa no puede mostrarlo. Añade los archivos en Octree o comenta esas líneas.
          </>
        ),
      },
      {
        title: "Caracteres especiales",
        body: (
          <>
            Si la compilación falla en un símbolo, comprueba que <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>,{" "}
            <Cmd>#</Cmd> y <Cmd>_</Cmd> del texto se hayan escapado como <Cmd>\&amp;</Cmd>,{" "}
            <Cmd>\%</Cmd>, <Cmd>\#</Cmd> y <Cmd>\_</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir HTML a LaTeX",
    faq: [
      {
        question: "¿Cómo convierto HTML a LaTeX?",
        answer:
          "Pega el HTML en el editor de esta página y haz clic en \"Convertir a LaTeX\". Los encabezados pasan a comandos \\section, las listas a itemize o enumerate, las tablas a tabular, y la negrita, la cursiva y los enlaces a \\textbf, \\emph y \\href. Revisa el resultado en la pestaña Vista previa y descarga el .tex o el PDF.",
      },
      {
        question: "¿Esta herramienta puede convertir LaTeX a HTML?",
        answer:
          "No, solo convierte de HTML a LaTeX. Para pasar de LaTeX a HTML, lo habitual es usar una herramienta TeX local como make4ht o htlatex, de TeX4ht, o Pandoc (pandoc paper.tex -o paper.html). Para publicar en la web, el conversor de LaTeX a Markdown de este sitio es otra opción.",
      },
      {
        question: "¿Qué longitud puede tener el HTML?",
        answer:
          "No hay un límite fijo de entrada, pero cada conversión devuelve unos 2000 tokens de LaTeX, aproximadamente unas pocas páginas. Convierte las páginas largas sección por sección, o quita antes los scripts, los estilos y la navegación para enviar solo el contenido.",
      },
      {
        question: "¿El conversor de HTML a LaTeX es gratis?",
        answer:
          "Sí, es gratis y no necesita cuenta. La conversión usa un modelo de IA (OpenAI gpt-4o-mini), así que revisa el resultado, sobre todo las tablas con celdas combinadas.",
      },
    ],
    related: (
      <>
        ¿Necesitas otro formato? Consulta todos los{" "}
        <IntroLink href="/tools/latex-converter">conversores de LaTeX</IntroLink>, convierte{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown a LaTeX</IntroLink> o aprende lo básico
        en la{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guía de tablas en LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-to-word": {
    heading: "Convertir LaTeX a Word (DOCX) en línea",
    intro: (
      <>
        <p>
          Este conversor de LaTeX a Word transforma un documento .tex en un archivo .docx de
          Microsoft Word editable. Funciona en dos pasadas. Primero, un modelo de IA (OpenAI
          gpt-4o-mini) lee tu LaTeX y lo reescribe como HTML semántico limpio: conserva los
          encabezados <GuideCode>\section</GuideCode>, las listas, las tablas{" "}
          <GuideCode>tabular</GuideCode>, la negrita y la cursiva, los enlaces y las notas al pie,
          y descarta el preámbulo y los comandos de maquetación que no significan nada en Word.
          Después, ese HTML se traduce de forma determinista a los elementos propios de Word:
          estilos Título 1 a 6, listas con viñetas y numeradas, tablas con fila de encabezado y
          texto con formato.
        </p>
        <p>
          El resultado es un .docx nativo, así que el control de cambios, los comentarios y la
          tabla de contenido funcionan como en cualquier archivo de Word. Las matemáticas se
          escriben como texto Unicode legible en lugar de ecuaciones de Word, las figuras se
          sustituyen por sus pies de figura y la entrada está limitada a 60 000 caracteres. El
          conversor es gratuito, no necesita cuenta y no guarda nada una vez enviado el archivo.
        </p>
        <GuideTable
          headers={["LaTeX", "Resultado en Word"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Estilos Título, Título 1 y Título 2"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Listas con viñetas y numeradas, con los niveles anidados"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Tabla de Word con fila de encabezado en negrita; título encima"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Texto en negrita, cursiva, subrayado y monoespaciado"],
            [<GuideCode key="5">$inline math$</GuideCode>, "Texto legible con símbolos Unicode, superíndices y subíndices"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Un párrafo centrado por cada línea de ecuación, con su número"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Hipervínculo en el que se puede hacer clic; texto de la nota al pie entre paréntesis"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "Marcadores [clave] y una sección References numerada"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Solo el pie de figura (los archivos de imagen no se suben)"],
          ]}
        />
      </>
    ),
    stepsHeading: "Cómo convertir LaTeX a Word",
    steps: [
      {
        title: "Pega tu LaTeX",
        body: "Pega el contenido de tu archivo .tex, un documento completo o un fragmento, de hasta 60 000 caracteres.",
      },
      {
        title: "Convierte a Word",
        body: "Haz clic en \"Convert to Word\" (convertir a Word). Cuando termina la conversión, document.docx se descarga automáticamente; el botón de descarga sigue disponible para obtener otra copia.",
      },
      {
        title: "Ábrelo en Word",
        body: "Abre el archivo en Microsoft Word, Google Docs, LibreOffice o Pages. Los encabezados usan los estilos de título propios de Word, así que el panel de navegación y la tabla de contenido funcionan desde el primer momento.",
      },
    ],
    tipsHeading: "Límites y cómo sortearlos",
    tips: [
      {
        title: "Las ecuaciones quedan como texto plano",
        body: (
          <>
            Las matemáticas se convierten en texto Unicode legible, como x² + y² = r², no en
            ecuaciones de Word editables. Para obtener ecuaciones nativas de Word (OMML), ejecuta
            Pandoc en local:{" "}
            <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>, o
            renderiza una fórmula clave con el{" "}
            <IntroLink href="/tools/latex-to-png">conversor de LaTeX a PNG</IntroLink>.
          </>
        ),
      },
      {
        title: "Las figuras aparecen como pies de figura",
        body: "Los archivos de imagen no se suben junto con el texto, así que cada figura se sustituye por su pie. Inserta las imágenes en Word después.",
      },
      {
        title: "La entrada es demasiado larga",
        body: "El límite es de 60 000 caracteres. Convierte una tesis capítulo a capítulo y pega las partes en un mismo archivo de Word.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir LaTeX a Word",
    faq: [
      {
        question: "¿Cómo convierto un archivo LaTeX a Word?",
        answer:
          "Pega el contenido de tu archivo .tex en el editor y haz clic en \"Convert to Word\" (convertir a Word). El conversor lee la estructura del LaTeX, la reconstruye como un documento de Word con encabezados reales, listas, tablas y formato de texto, y descarga document.docx en tu ordenador. Ábrelo en Microsoft Word, Google Docs, LibreOffice o Pages.",
      },
      {
        question: "¿Qué pasa con las ecuaciones al convertir LaTeX a Word?",
        answer:
          "Las matemáticas en línea y destacadas se convierten en texto plano legible con símbolos Unicode (por ejemplo x² + y² = r² o ∫ f(x) dx), y las ecuaciones destacadas quedan centradas en su propia línea. No son objetos de ecuación nativos de Word. Si necesitas ecuaciones de Word editables (OMML), ejecuta Pandoc en local: pandoc paper.tex -o paper.docx. Para una fórmula con un aspecto perfecto, renderízala con la herramienta de LaTeX a PNG y pega la imagen.",
      },
      {
        question: "¿Se conservan las tablas, las listas y la bibliografía?",
        answer:
          "Las tablas (tabular, booktabs, longtable) se convierten en tablas reales de Word con fila de encabezado; itemize y enumerate pasan a listas con viñetas y numeradas; se conservan la negrita, la cursiva, el subrayado, el texto monoespaciado, los enlaces y las notas al pie. Las citas aparecen como [clave] o como texto autor-año, y un entorno thebibliography se convierte en una sección References numerada. Las figuras se sustituyen por sus pies porque el conversor no tiene acceso a los archivos de imagen.",
      },
      {
        question: "¿Convertir LaTeX a Word es gratis? ¿Se guarda mi documento?",
        answer:
          "El conversor es gratuito y no requiere registro. Tu LaTeX se envía a nuestro servidor para convertirlo, y el archivo de Word se genera en memoria y se devuelve a tu navegador; no se conserva nada una vez enviada la respuesta. Se admiten documentos de hasta 60 000 caracteres, lo que cubre un artículo típico o un capítulo de tesis.",
      },
    ],
    related: (
      <>
        ¿Necesitas Markdown para Notion o GitHub? Usa el{" "}
        <IntroLink href="/tools/latex-to-markdown">conversor de LaTeX a Markdown</IntroLink>,
        compila un PDF en el{" "}
        <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink> o consulta
        todos los <IntroLink href="/tools/latex-converter">conversores de LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-png": {
    heading: "Convertir LaTeX a PNG: ecuaciones y fórmulas como imagen",
    intro: (
      <>
        <p>
          Este conversor de LaTeX a PNG convierte una ecuación, una figura TikZ o la primera
          página de un documento en una imagen PNG. Tu código se compila con una instalación
          completa de TeX Live en el servicio de compilación de Octree, el mismo que usa el{" "}
          <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink>, así que
          tienes disponibles todos los paquetes que usarías en local. El PDF vuelve a tu
          navegador, donde pdf.js rasteriza su primera página con los DPI que elegiste y genera un
          PNG con fondo transparente o blanco. No interviene ninguna IA y no se guarda nada una
          vez terminada la compilación.
        </p>
        <p>
          Para una sola fórmula, la clase <GuideCode>standalone</GuideCode> con la opción{" "}
          <GuideCode>preview</GuideCode> recorta la página a la ecuación, y{" "}
          <GuideCode>border=4pt</GuideCode> añade un pequeño margen alrededor. Usa la imagen en
          diapositivas, en Word y Google Docs, en archivos README, en Notion, en Slack o en un
          correo, en cualquier sitio que no sepa componer matemáticas. Es gratis y no necesita
          cuenta.
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "Cómo convertir LaTeX a PNG",
    steps: [
      {
        title: "Escribe la ecuación o el documento",
        body: (
          <>
            Edita el ejemplo, que usa{" "}
            <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd> para que la imagen se
            recorte a la fórmula, o pega cualquier documento completo.
          </>
        ),
      },
      {
        title: "Elige la resolución y el fondo",
        body: "Elige 1× (96 DPI), 2× (192 DPI) o 4× (384 DPI), y deja activada la opción \"Transparent background\" (fondo transparente) para diapositivas y temas oscuros, o desactívala para un fondo blanco.",
      },
      {
        title: "Convierte y guarda",
        body: "Haz clic en \"Convert to PNG\" (convertir a PNG). Descarga latex.png o copia la imagen al portapapeles y pégala en PowerPoint, Google Docs, Notion o Slack.",
      },
    ],
    tipsHeading: "Consejos para obtener mejores imágenes",
    tips: [
      {
        title: "La fórmula toca el borde",
        body: (
          <>
            Aumenta <Cmd>border=4pt</Cmd> en las opciones de la clase de documento. Usa{" "}
            <Cmd>$\displaystyle ...$</Cmd> en línea en lugar de <Cmd>\[ ... \]</Cmd>, que ocupa
            todo el ancho de la línea.
          </>
        ),
      },
      {
        title: "Imagen para una diapositiva oscura",
        body: (
          <>
            Carga <Cmd>xcolor</Cmd> y escribe <Cmd>\color{"{white}"}</Cmd> antes de la fórmula;
            con el fondo transparente, el texto blanco queda bien sobre cualquier tema oscuro.
          </>
        ),
      },
      {
        title: "Solo aparece una página",
        body: "Solo se renderiza la primera página del PDF. Haz una conversión por ecuación, o compila un documento de varias páginas como PDF en el editor de LaTeX en línea.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir LaTeX a PNG",
    faq: [
      {
        question: "¿Cómo convierto una ecuación LaTeX en una imagen PNG?",
        answer:
          "Pega tu ecuación dentro de un documento standalone (el ejemplo por defecto usa \\documentclass[preview,border=4pt]{standalone}), elige una resolución y haz clic en \"Convert to PNG\" (convertir a PNG). El LaTeX se compila a PDF en nuestro servidor, la primera página se renderiza en tu navegador y puedes descargar el PNG o copiarlo directamente al portapapeles.",
      },
      {
        question: "¿Puedo obtener un PNG de LaTeX con fondo transparente?",
        answer:
          "Sí. Deja activada la opción \"Transparent background\" (fondo transparente). Como la clase standalone no pinta un color de página, todos los píxeles fuera de la fórmula quedan transparentes, así que la imagen se integra limpiamente en diapositivas oscuras, fondos de color y páginas web. Desmárcala para obtener un fondo blanco opaco.",
      },
      {
        question: "¿Qué resolución elijo para diapositivas o para imprimir?",
        answer:
          "1× (96 DPI) basta para una vista previa rápida o un mensaje de chat. Usa 2× (192 DPI) para Google Slides, PowerPoint, Word, Google Docs y Notion, donde la imagen se muestra aproximadamente a su tamaño natural en pantallas de alta densidad. Usa 4× (384 DPI) cuando la imagen se vaya a imprimir o ampliar.",
      },
      {
        question: "¿Funciona con un documento LaTeX completo y no solo con una ecuación?",
        answer:
          "Sí. Funciona cualquier documento que compile con pdflatex, incluidos article, beamer o figuras TikZ. Solo la primera página se convierte a PNG; para documentos de varias páginas, usa la herramienta de vista previa de LaTeX para compilar y descargar el PDF completo.",
      },
    ],
    related: (
      <>
        ¿Necesitas el documento entero? Compílalo en el{" "}
        <IntroLink href="/tools/latex-preview">editor de LaTeX en línea</IntroLink>, conviértelo en
        un <IntroLink href="/tools/latex-to-word">archivo de Word</IntroLink> o busca comandos en la{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guía de matemáticas en LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Convertir Markdown a LaTeX en línea",
    intro: (
      <>
        <p>
          Este conversor de Markdown a LaTeX transforma texto .md en un documento LaTeX completo y
          compilable. Un modelo de IA (OpenAI gpt-4o-mini) reescribe los encabezados como
          secciones, la negrita y la cursiva como <Cmd>\textbf</Cmd> y <Cmd>\textit</Cmd>, las
          listas con viñetas y numeradas como itemize y enumerate, las tablas como tabular, los
          bloques de código como listados de código y los enlaces como hipervínculos, y carga
          paquetes como booktabs, listings y hyperref, mientras conserva las matemáticas en línea
          y destacadas como matemáticas de LaTeX.
        </p>
        <p>
          La pestaña Vista previa compila el resultado con una distribución completa de TeX Live
          en el servicio de compilación de Octree, así que ves el PDF antes de descargar el
          archivo .tex. La entrada es texto pegado, y cada conversión devuelve unos 2000 tokens de
          LaTeX, suficiente para unas pocas páginas; divide los archivos más largos. Es gratis, no
          necesita cuenta y sirve para archivos README, apuntes de clase y borradores escritos en
          Obsidian, Notion o Typora que tienen que convertirse en un artículo o en un capítulo de
          tesis.
        </p>
      </>
    ),
    stepsHeading: "Cómo convertir Markdown a LaTeX",
    steps: [
      {
        title: "Pega tu Markdown",
        body: "Sustituye el ejemplo por tu propio contenido .md: notas de Obsidian o Notion, un README o un borrador con encabezados, listas, tablas, bloques de código y matemáticas.",
      },
      {
        title: "Convierte a LaTeX",
        body: (
          <>
            Haz clic en &quot;Convertir a LaTeX&quot;. Un documento completo va apareciendo en la
            pestaña Código, con los encabezados <Cmd>#</Cmd> como <Cmd>\section</Cmd>, las listas
            como itemize y enumerate, y las matemáticas <Cmd>$...$</Cmd> y <Cmd>$$...$$</Cmd>{" "}
            conservadas como matemáticas de LaTeX.
          </>
        ),
      },
      {
        title: "Previsualiza y exporta",
        body: "Abre la pestaña Vista previa para compilarlo a PDF; después exporta el archivo .tex o el PDF, o ábrelo en Octree para seguir escribiendo.",
      },
    ],
    tipsHeading: "Problemas comunes y cómo solucionarlos",
    tips: [
      {
        title: "Undefined control sequence en las matemáticas",
        body: (
          <>
            Las matemáticas de Markdown se copian tal cual, así que los comandos exclusivos de
            KaTeX o un <Cmd>\mathbb</Cmd> sin amssymb pueden fallar. El log indica la línea;
            corrige el comando o añade el paquete.
          </>
        ),
      },
      {
        title: "Las imágenes no aparecen",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> se convierte en una línea <Cmd>\includegraphics</Cmd>,
            pero el archivo de imagen no se sube. Súbelo en Octree o comenta la línea para
            compilar.
          </>
        ),
      },
      {
        title: "Los documentos largos se cortan",
        body: "Cada conversión devuelve unos 2000 tokens de LaTeX. Convierte un archivo largo capítulo a capítulo o sección a sección y une las partes.",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre convertir Markdown a LaTeX",
    faq: [
      {
        question: "¿Cómo convierto Markdown a LaTeX en línea?",
        answer:
          "Pega tu Markdown en el editor de esta página y haz clic en \"Convertir a LaTeX\". La herramienta devuelve un documento LaTeX completo con los paquetes que necesita, que puedes previsualizar como PDF y descargar como archivo .tex. No hace falta instalar nada ni tener cuenta.",
      },
      {
        question: "¿Conserva las ecuaciones matemáticas?",
        answer:
          "Sí. Las matemáticas en línea entre $...$ y las destacadas entre $$...$$ se conservan como matemáticas de LaTeX, y amsmath y amssymb se cargan en el preámbulo, así que las ecuaciones escritas para MathJax o KaTeX suelen compilar sin cambios.",
      },
      {
        question: "¿En qué se diferencia de Pandoc?",
        answer:
          "Pandoc (pandoc notes.md -o notes.tex) es un conversor determinista de línea de comandos que se instala en local. Esta herramienta funciona en el navegador, usa un modelo de IA (OpenAI gpt-4o-mini) para escribir el LaTeX y compila al momento una vista previa en PDF. Revisa el resultado, porque la IA puede reformular o reestructurar el contenido.",
      },
      {
        question: "¿Puedo convertir un archivo .md a .tex?",
        answer:
          "Abre el archivo .md en cualquier editor de texto, copia su contenido en el conversor y haz clic en \"Convertir a LaTeX\"; después usa \"Exportar\" para descargar document.tex. La página acepta texto pegado, no la subida de archivos.",
      },
    ],
    related: (
      <>
        ¿Vas en la dirección contraria? Usa el{" "}
        <IntroLink href="/tools/latex-to-markdown">conversor de LaTeX a Markdown</IntroLink>,
        consulta todos los <IntroLink href="/tools/latex-converter">conversores de LaTeX</IntroLink>{" "}
        o lee la{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introducción a LaTeX
        </IntroLink>
        .
      </>
    ),
  },
};

export default translations;
