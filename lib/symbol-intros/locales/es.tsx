import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** Spanish (route locale `es`). */
const es: IntroLocale = {
  languageTag: "es",
  labels: {
    symbol: "Símbolo",
    command: "Comando",
    use: "Uso",
    package: "Paquete",
    builtIn: "integrado",
    copy: "Copiar",
  },
  intros: {
    arrows: {
      title: "Flechas en LaTeX: cómo escribir una flecha en LaTeX",
      intro: (
        <IntroP>
          Las flechas en LaTeX son comandos del modo matemático que llevan el nombre de su
          dirección: para escribir una flecha en LaTeX, usa <Cmd>{"$\\rightarrow$"}</Cmd> para
          &rarr;, <Cmd>{"$\\leftarrow$"}</Cmd> para &larr; y <Cmd>{"$\\Rightarrow$"}</Cmd> para la
          flecha doble &rArr;. La tabla recoge las 12 flechas más usadas, con el paquete que
          necesita cada una; la lista completa de símbolos de flechas aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: las flechas más usadas",
      use: {
        "\\rightarrow": "Flecha a la derecha",
        "\\to": "Aplicación entre conjuntos, límites (x \u2192 \u221e)",
        "\\leftarrow": "Flecha a la izquierda, asignación",
        "\\leftrightarrow": "Flecha bidireccional (izquierda-derecha)",
        "\\Rightarrow": "Implica (flecha doble)",
        "\\Leftrightarrow": "Si y solo si",
        "\\mapsto": "Regla de una función, x \u21a6 x\u00b2",
        "\\longrightarrow": "Flecha larga a la derecha",
        "\\uparrow": "Flecha hacia arriba",
        "\\downarrow": "Flecha hacia abajo",
        "\\hookrightarrow": "Inyección, inclusión",
        "\\xrightarrow{f}": "Flecha con texto encima, se alarga según el texto",
      },
      faqHeading: "Preguntas frecuentes sobre las flechas en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo una flecha en LaTeX?",
          answer:
            "Las flechas son símbolos matemáticos, así que van en modo matemático: $\\rightarrow$ (o la forma abreviada $\\to$) da una flecha a la derecha, $\\leftarrow$ una flecha a la izquierda y $\\leftrightarrow$ una flecha bidireccional. Con la primera letra en mayúscula se obtiene la versión de doble trazo, por ejemplo \\Rightarrow y \\Leftrightarrow. Ninguna necesita paquetes.",
        },
        {
          question: "¿Cómo hago una flecha larga en LaTeX?",
          answer:
            "Añade el prefijo long al nombre: \\longrightarrow, \\longleftarrow y \\longleftrightarrow, o \\Longrightarrow y \\Longleftrightarrow para flechas dobles, y \\longmapsto para una flecha de aplicación larga. Si la flecha debe crecer con una etiqueta, usa en su lugar \\xrightarrow{...} de amsmath.",
        },
        {
          question: "¿Cómo pongo texto encima de una flecha en LaTeX?",
          answer:
            "Carga amsmath y usa \\xrightarrow{texto} o \\xleftarrow{texto}; la flecha se alarga para ajustarse a la etiqueta. Un argumento opcional añade texto debajo de la flecha: \\xrightarrow[debajo]{encima}. Para una flecha de tamaño fijo también puedes escribir \\overset{f}{\\rightarrow}.",
        },
        {
          question: "¿Cómo escribo una flecha doble en LaTeX?",
          answer:
            "Usa \\Rightarrow para \u21d2, \\Leftarrow para \u21d0 y \\Leftrightarrow para \u21d4. En lógica, \\implies (amsmath) y el comando integrado \\iff dan las mismas flechas con un espaciado más amplio. Para dos flechas superpuestas usa \\rightleftarrows (amssymb), o \\rightleftharpoons para equilibrios químicos.",
        },
        {
          question: "¿Cómo uso una flecha en modo texto en LaTeX?",
          answer:
            "Escribir \\rightarrow fuera del modo matemático provoca el error \u201cMissing $ inserted\u201d. Puedes encerrarla como $\\rightarrow$ o usar los comandos de modo texto \\textrightarrow, \\textleftarrow, \\textuparrow y \\textdownarrow, que forman parte del núcleo de LaTeX (textcomp) y usan la misma fuente que el texto que los rodea.",
        },
      ],
    },
    math: {
      title: "Símbolos matemáticos en LaTeX: lo esencial",
      intro: (
        <IntroP>
          Los símbolos matemáticos de LaTeX solo funcionan en modo matemático, así que enciérralos
          en <Cmd>{"$...$"}</Cmd> para fórmulas en línea o en <Cmd>{"\\[...\\]"}</Cmd> para una
          ecuación destacada. Los de uso diario están integrados: <Cmd>{"\\pm"}</Cmd>,{" "}
          <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> y <Cmd>{"\\cdot"}</Cmd> para la aritmética,{" "}
          <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>, <Cmd>{"\\geq"}</Cmd> y{" "}
          <Cmd>{"\\approx"}</Cmd> para comparaciones, <Cmd>{"\\infty"}</Cmd>,{" "}
          <Cmd>{"\\sqrt{x}"}</Cmd> y <Cmd>{"\\frac{a}{b}"}</Cmd>. Los superíndices y subíndices
          usan <Cmd>{"^"}</Cmd> y <Cmd>{"_"}</Cmd>, con llaves cuando abarcan más de un carácter:{" "}
          <Cmd>{"x^{2n}"}</Cmd>. Símbolos adicionales como <Cmd>{"\\mathbb{R}"}</Cmd> y{" "}
          <Cmd>{"\\therefore"}</Cmd> vienen de amssymb. La tabla recoge los símbolos matemáticos
          más usados, con el paquete que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: símbolos matemáticos de uso diario",
      use: {
        "\\pm": "Más o menos",
        "\\times": "Multiplicación (por)",
        "\\div": "División",
        "\\cdot": "Punto centrado, multiplicación",
        "\\neq": "Distinto de",
        "\\leq": "Menor o igual que",
        "\\approx": "Aproximadamente igual",
        "\\infty": "Infinito",
        "\\sqrt{x}": "Raíz cuadrada (\\sqrt[n]{x} para la raíz n-ésima)",
        "\\frac{a}{b}": "Fracción",
        "x^{2n}": "Superíndice (exponente)",
        "\\mathbb{R}": "Números reales",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos matemáticos en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo símbolos matemáticos en LaTeX?",
          answer:
            "Ponlos en modo matemático: $...$ para fórmulas en línea y \\[...\\] o un entorno equation para las destacadas, y usa el comando del símbolo, por ejemplo $a \\times b \\neq c$. Usar un comando matemático fuera del modo matemático provoca el error Missing $ inserted.",
        },
        {
          question: "¿Qué paquetes necesito para los símbolos matemáticos en LaTeX?",
          answer:
            "La mayoría de los símbolos están integrados. Añade \\usepackage{amsmath} para entornos como align y comandos como \\text y \\operatorname, y \\usepackage{amssymb} para símbolos adicionales como \\mathbb{R}, \\therefore, \\nexists y \\varnothing. mathtools amplía amsmath con correcciones y herramientas extra.",
        },
        {
          question: "¿Cómo encuentro el comando LaTeX de un símbolo?",
          answer:
            "Busca en esta página o en las páginas de categorías y haz clic en una tarjeta para copiar su comando. Si solo sabes cómo se ve el símbolo, Detexify te permite dibujarlo y sugiere los comandos que coinciden, y la Comprehensive LaTeX Symbol List cubre miles de símbolos.",
        },
      ],
    },
    "set-theory": {
      title: "Símbolos de teoría de conjuntos en LaTeX: subconjunto, pertenencia, unión y conjunto vacío",
      intro: (
        <IntroP>
          Los símbolos de teoría de conjuntos en LaTeX están casi todos integrados. «Pertenece a» es{" "}
          <Cmd>{"\\in"}</Cmd> (∈) y «no pertenece a» es <Cmd>{"\\notin"}</Cmd>; «subconjunto» es{" "}
          <Cmd>{"\\subset"}</Cmd> (⊂) y «subconjunto o igual», <Cmd>{"\\subseteq"}</Cmd> (⊆); la unión y
          la intersección son <Cmd>{"\\cup"}</Cmd> y <Cmd>{"\\cap"}</Cmd>, la diferencia de conjuntos
          es <Cmd>{"\\setminus"}</Cmd> y el conjunto vacío es <Cmd>{"\\emptyset"}</Cmd> (∅). Algunos
          extras requieren amssymb: el conjunto vacío más redondo <Cmd>{"\\varnothing"}</Cmd>, el
          subconjunto propio <Cmd>{"\\subsetneq"}</Cmd> y conjuntos numéricos como{" "}
          <Cmd>{"\\mathbb{N}"}</Cmd> y <Cmd>{"\\mathbb{R}"}</Cmd>. Las llaves deben escaparse, así
          que un conjunto se escribe <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. La tabla recoge los símbolos de
          teoría de conjuntos más usados, con el paquete que necesita cada uno; la lista completa
          aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: los símbolos de teoría de conjuntos más usados",
      use: {
        "\\in": "Pertenece a",
        "\\notin": "No pertenece a",
        "\\subset": "Subconjunto",
        "\\subseteq": "Subconjunto o igual",
        "\\subsetneq": "Subconjunto propio (no igual)",
        "\\cup": "Unión",
        "\\cap": "Intersección",
        "A \\setminus B": "Diferencia de conjuntos",
        "\\emptyset": "Conjunto vacío (\\varnothing en amssymb)",
        "\\mathbb{R}": "Números reales (también \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
        "\\{ x \\in A \\mid x > 0 \\}": "Notación por comprensión",
        "\\mathcal{P}(A)": "Conjunto potencia",
      },
      faqHeading: "Preguntas frecuentes sobre teoría de conjuntos en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo subconjunto en LaTeX?",
          answer:
            "Usa \\subset para ⊂ y \\subseteq para ⊆, ambos integrados: $A \\subseteq B$. Para un subconjunto propio que excluya explícitamente la igualdad, amssymb ofrece \\subsetneq (⊊). Las versiones de superconjunto son \\supset, \\supseteq y \\supsetneq, y \\not\\subset las niega.",
        },
        {
          question: "¿Cómo escribo el símbolo de pertenencia en LaTeX?",
          answer:
            "\\in produce ∈, como en $x \\in A$, y \\notin produce ∉. La forma invertida \\ni (∋) se lee «contiene como elemento». Los tres están integrados.",
        },
        {
          question: "¿Cómo escribo el conjunto vacío en LaTeX?",
          answer:
            "\\emptyset produce ∅ y está integrado. Muchos autores prefieren el más redondo \\varnothing, que necesita \\usepackage{amssymb}. En cualquier caso, no uses \\phi ni \\O, que son una letra griega y una letra escandinava.",
        },
      ],
    },
    logic: {
      title: "Símbolos de lógica en LaTeX",
      intro: (
        <>
          <IntroP>
            Los conectivos de la lógica proposicional son <Cmd>{"\\land"}</Cmd> (y),{" "}
            <Cmd>{"\\lor"}</Cmd> (o) y <Cmd>{"\\lnot"}</Cmd> (no); <Cmd>{"\\wedge"}</Cmd>,{" "}
            <Cmd>{"\\vee"}</Cmd> y <Cmd>{"\\neg"}</Cmd> son alias idénticos. La implicación y la
            equivalencia se escriben mejor con <Cmd>{"\\implies"}</Cmd> (de amsmath) y{" "}
            <Cmd>{"\\iff"}</Cmd>, que añaden espaciado de relación alrededor de las flechas;{" "}
            <Cmd>{"\\Rightarrow"}</Cmd> y <Cmd>{"\\Leftrightarrow"}</Cmd> a secas también
            funcionan. Los cuantificadores son <Cmd>{"\\forall"}</Cmd> y <Cmd>{"\\exists"}</Cmd>, con{" "}
            <Cmd>{"\\nexists"}</Cmd> para &ldquo;no existe&rdquo;, y las constantes verdadero y
            falso son <Cmd>{"\\top"}</Cmd> y <Cmd>{"\\bot"}</Cmd>.
          </IntroP>
          <IntroP>
            La teoría de la demostración y la semántica tienen sus propios torniquetes:{" "}
            <Cmd>{"\\vdash"}</Cmd> significa &ldquo;demuestra&rdquo; o consecuencia sintáctica,{" "}
            <Cmd>{"\\models"}</Cmd> (también <Cmd>{"\\vDash"}</Cmd>) significa
            &ldquo;satisface&rdquo; o consecuencia semántica, y <Cmd>{"\\nvdash"}</Cmd> niega el
            primero. Los marcadores de inferencia <Cmd>{"\\therefore"}</Cmd> y{" "}
            <Cmd>{"\\because"}</Cmd> vienen de amssymb, igual que <Cmd>{"\\nexists"}</Cmd> y{" "}
            <Cmd>{"\\vDash"}</Cmd>. La equivalencia lógica entre fórmulas suele escribirse{" "}
            <Cmd>{"\\equiv"}</Cmd>, la disyunción exclusiva es <Cmd>{"\\oplus"}</Cmd> y la barra de
            Sheffer (NAND) es <Cmd>{"\\uparrow"}</Cmd>. Los operadores modales <Cmd>{"\\Box"}</Cmd>{" "}
            y <Cmd>{"\\Diamond"}</Cmd> aparecen en la página de{" "}
            <IntroLink href="/es/symbols/modal-logic">símbolos de lógica modal</IntroLink>.
          </IntroP>
          <IntroP>
            Todo lo anterior funciona solo en modo matemático, así que encierra los símbolos en{" "}
            <Cmd>{"$...$"}</Cmd> y carga <Cmd>{"\\usepackage{amsmath, amssymb}"}</Cmd> en el
            preámbulo. Una fórmula típica: <Cmd>{"\\forall x\\, (P(x) \\implies Q(x))"}</Cmd>. Para
            ver cómo se combinan con conjuntos, funciones y relaciones, lee nuestra guía de{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              expresiones matemáticas en LaTeX
            </IntroLink>
            .
          </IntroP>
        </>
      ),
    },
    physics: {
      title: "Símbolos de mecánica cuántica en LaTeX",
      intro: (
        <IntroP>
          Los símbolos de mecánica cuántica que más escriben los físicos están todos integrados en
          LaTeX: la constante de Planck reducida <Cmd>{"\\hbar"}</Cmd>, el bra{" "}
          <Cmd>{"\\langle \\psi |"}</Cmd> y el ket <Cmd>{"| \\psi \\rangle"}</Cmd>, los operadores
          con sombrero como <Cmd>{"\\hat{H}"}</Cmd>, el adjunto <Cmd>{"A^\\dagger"}</Cmd>, el
          laplaciano <Cmd>{"\\nabla^2"}</Cmd> y la derivada temporal <Cmd>{"\\partial_t"}</Cmd>.
          Para una notación bra-ket más corta, los paquetes braket y physics añaden{" "}
          <Cmd>{"\\bra{}"}</Cmd>, <Cmd>{"\\ket{}"}</Cmd> y <Cmd>{"\\braket{}"}</Cmd>. La tabla
          recoge los símbolos de física cuántica más usados, con el paquete que necesita cada uno;
          la lista completa de símbolos de física aparece más abajo.
        </IntroP>
      ),
      use: {
        "\\hbar": "Constante de Planck reducida (h barra)",
        "\\langle \\psi |": "Bra, con comandos básicos",
        "| \\psi \\rangle": "Ket, con comandos básicos",
        "\\langle \\phi | \\psi \\rangle": "Producto interno (bra-ket)",
        "\\bra{\\psi}": "Bra",
        "\\ket{\\psi}": "Ket",
        "\\braket{\\phi|\\psi}": "Producto interno (physics: \\braket{\\phi}{\\psi})",
        "\\hat{H}": "Operador hamiltoniano",
        "A^\\dagger": "Adjunto hermítico (daga)",
        "\\nabla^2": "Laplaciano",
        "\\partial_t \\psi": "Derivada temporal",
        "\\otimes": "Producto tensorial de estados",
      },
      faqHeading: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Cómo escribo la notación bra-ket en LaTeX?",
          answer:
            "Sin ningún paquete, escribe un bra como \\langle \\psi |, un ket como | \\psi \\rangle y un producto interno como \\langle \\phi | \\psi \\rangle. Con \\usepackage{braket} puedes escribir \\bra{\\psi}, \\ket{\\psi} y \\braket{\\phi|\\psi}; con \\usepackage{physics} el producto interno toma en cambio dos argumentos, \\braket{\\phi}{\\psi}. Carga solo uno de los dos paquetes, ya que ambos definen estos comandos.",
        },
        {
          question: "¿Cómo escribo h barra en LaTeX?",
          answer:
            "La constante de Planck reducida \u210f es \\hbar, que está integrada y se usa en modo matemático: $\\hbar$. La ecuación de Schr\u00f6dinger queda entonces i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
        },
        {
          question: "¿Cómo escribo operadores y la daga en LaTeX?",
          answer:
            "Marca los operadores con un sombrero, \\hat{H} o \\hat{p}, y escribe el adjunto hermítico con \\dagger como superíndice, A^\\dagger. Los valores esperados son \\langle \\hat{A} \\rangle, o \\expval{A} con el paquete physics, y los conmutadores son [\\hat{x}, \\hat{p}] = i\\hbar.",
        },
      ],
    },
    functions: {
      title: "Composición de funciones e isomorfismo en LaTeX",
      intro: (
        <IntroP>
          La composición de funciones en LaTeX es <Cmd>{"\\circ"}</Cmd>, como en{" "}
          <Cmd>{"g \\circ f"}</Cmd>, y el símbolo de isomorfismo en LaTeX es <Cmd>{"\\cong"}</Cmd>{" "}
          (&cong;), con <Cmd>{"\\simeq"}</Cmd> para una equivalencia más débil; los tres están
          integrados. Una función se declara con <Cmd>{"f \\colon A \\to B"}</Cmd>, donde{" "}
          <Cmd>{"\\colon"}</Cmd> da el espaciado correcto, y su regla con <Cmd>{"\\mapsto"}</Cmd>,
          como en <Cmd>{"x \\mapsto x^2"}</Cmd>. La aplicación identidad es{" "}
          <Cmd>{"\\operatorname{id}"}</Cmd> de amsmath. La tabla recoge los comandos de funciones y
          aplicaciones más usados, con el paquete que necesita cada uno; la lista completa de
          símbolos aparece más abajo.
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "Función de A en B",
        "x \\mapsto x^2": "Se aplica en (regla de la función)",
        "g \\circ f": "Composición, g después de f",
        "f^{-1}": "Función inversa",
        "\\cong": "Isomorfo a",
        "\\simeq": "Homotópicamente equivalente, isomorfismo débil",
        "\\xrightarrow{\\sim}": "Flecha de isomorfismo",
        "\\operatorname{id}_A": "Aplicación identidad",
        "\\hookrightarrow": "Inyección, inclusión",
        "\\twoheadrightarrow": "Sobreyección",
        "f|_A": "Restricción a A",
      },
      faqHeading: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Cómo escribo la composición de funciones en LaTeX?",
          answer:
            "Usa \\circ, que está integrado: $g \\circ f$ produce g ∘ f, que se lee \u201cg después de f\u201d. Escribe (g \\circ f)(x) = g(f(x)) para la regla. No uses una o minúscula ni \\cdot, que tienen el tamaño y el espaciado incorrectos.",
        },
        {
          question: "¿Cómo escribo el símbolo de isomorfismo en LaTeX?",
          answer:
            "El símbolo de isomorfismo estándar ≅ es \\cong, integrado: $G \\cong H$. Para una equivalencia homotópica o una noción más débil usa \\simeq (≃), y para una flecha que es un isomorfismo usa \\xrightarrow{\\sim} de amsmath, o \\cong sobre una flecha con \\xrightarrow{\\cong}.",
        },
        {
          question: "¿Cómo escribo f: A → B en LaTeX?",
          answer:
            "Escribe f \\colon A \\to B. El comando \\colon da el espaciado de un signo de puntuación; unos dos puntos normales se espacian como una relación y dejan demasiado espacio antes de A. Usa \\mapsto para la regla, como en x \\mapsto x^2.",
        },
      ],
    },
    chemistry: {
      title: "Símbolos de química en LaTeX: flechas de reacción, equilibrio y fórmulas",
      intro: (
        <IntroP>
          Para los símbolos de química en LaTeX, el paquete mhchem hace casi todo el trabajo:{" "}
          <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> compone una reacción completa con los símbolos de
          los elementos en redonda, subíndices y una flecha de reacción. Sin mhchem, la flecha de
          reacción es <Cmd>{"\\rightarrow"}</Cmd>, el símbolo de equilibrio es{" "}
          <Cmd>{"\\rightleftharpoons"}</Cmd> y las fórmulas se escriben como{" "}
          <Cmd>{"\\mathrm{H_2O}"}</Cmd> en modo matemático para que las letras de los elementos no
          salgan en cursiva. Las condiciones de reacción van sobre una flecha extensible con{" "}
          <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> de amsmath. La tabla recoge los símbolos de química
          más usados, con el paquete que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: reacciones, flechas y fórmulas",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "Reacción completa",
        "\\ce{A <=> B}": "Equilibrio en mhchem",
        "\\rightarrow": "Produce (flecha de reacción)",
        "\\rightleftharpoons": "Símbolo de equilibrio (arpones)",
        "\\xrightarrow{\\Delta}": "Flecha con calor o condiciones encima",
        "\\mathrm{H_2O}": "Fórmula química en modo matemático",
        "\\mathrm{Na^+}": "Carga de un ion",
        "{}^{14}_{6}\\mathrm{C}": "Isótopo (número másico y número atómico)",
        "\\Delta H^\\circ": "Variación de entalpía estándar",
        "\\uparrow": "Desprendimiento de gas",
        "\\downarrow": "Precipitado",
        "\\ce{HC#CH}": "Enlace triple (= para un enlace doble)",
      },
      faqHeading: "Preguntas frecuentes sobre química en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo la flecha de reacción en LaTeX?",
          answer:
            "En modo matemático la flecha de reacción es \\rightarrow, o \\longrightarrow para una más larga. Con mhchem, escribe -> dentro de \\ce{...}, por ejemplo \\ce{A + B -> C}. Para poner condiciones sobre la flecha usa \\xrightarrow{\\Delta} de amsmath, o ->[\\Delta] dentro de \\ce.",
        },
        {
          question: "¿Cómo escribo el símbolo de equilibrio en LaTeX?",
          answer:
            "El símbolo de equilibrio ⇌ es \\rightleftharpoons, que está integrado: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. En mhchem escribe <=> dentro de \\ce{...}; también ofrece <=>> y <<=> para equilibrios desplazados hacia la derecha o hacia la izquierda.",
        },
        {
          question: "¿Cómo escribo fórmulas químicas con subíndices en LaTeX?",
          answer:
            "Usa \\ce{H2SO4} de mhchem, que pone los dígitos como subíndices y mantiene las letras en redonda. Sin mhchem, escribe \\mathrm{H_2SO_4} en modo matemático; un simple H_2SO_4 pondría las letras en cursiva, como si fueran variables.",
        },
      ],
    },
    probability: {
      title: "Símbolos de probabilidad y estadística en LaTeX",
      intro: (
        <IntroP>
          El símbolo de probabilidad en LaTeX es <Cmd>{"\\Pr"}</Cmd> o <Cmd>{"\\mathbb{P}"}</Cmd>, y
          el operador esperanza es <Cmd>{"\\mathbb{E}[X]"}</Cmd>. La tabla recoge los ocho comandos
          más usados, con el paquete que necesita cada uno; la lista completa de símbolos de
          probabilidad y estadística aparece más abajo.
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "Operador de probabilidad (Pr en redonda)",
        "\\mathbb{P}(A)": "Símbolo de probabilidad, negrita de pizarra",
        "\\mathbb{E}[X]": "Operador esperanza",
        "\\operatorname{Var}(X)": "Varianza",
        "\\operatorname{Cov}(X, Y)": "Covarianza",
        "P(A \\mid B)": "Probabilidad condicionada",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "Se distribuye como (normal)",
        "\\binom{n}{k}": "Coeficiente binomial",
      },
      faqHeading: "Preguntas frecuentes",
      faq: [
        {
          question: "¿Cómo escribo el símbolo de probabilidad en LaTeX?",
          answer:
            "Usa el operador integrado \\Pr, como en \\Pr(A), para obtener Pr en redonda con espaciado de operador, o la negrita de pizarra \\mathbb{P}(A) con \\usepackage{amssymb}. Para la probabilidad condicionada escribe P(A \\mid B); \\mid espacia bien la barra, cosa que un | simple no hace.",
        },
        {
          question: "¿Cómo escribo el operador esperanza en LaTeX?",
          answer:
            "Escribe \\mathbb{E}[X] (amssymb) para una E en negrita de pizarra, o \\operatorname{E}[X] (amsmath) para una E en redonda. Para reutilizarlo, decláralo una vez en el preámbulo con \\DeclareMathOperator{\\E}{\\mathbb{E}} y luego escribe \\E[X].",
        },
        {
          question: "¿Cómo escribo la varianza en LaTeX?",
          answer:
            "La varianza no tiene un comando integrado, así que escribe \\operatorname{Var}(X) con amsmath, o declara \\DeclareMathOperator{\\Var}{Var} en el preámbulo y usa \\Var(X). La desviación típica es \\sigma y la varianza también puede escribirse \\sigma^2.",
        },
      ],
    },
    greek: {
      title: "Letras griegas en LaTeX: el alfabeto griego completo",
      intro: (
        <IntroP>
          Las letras griegas en LaTeX se escriben con una barra invertida y el nombre de la letra en
          modo matemático: <Cmd>{"\\alpha"}</Cmd>, <Cmd>{"\\beta"}</Cmd>, <Cmd>{"\\gamma"}</Cmd>,{" "}
          <Cmd>{"\\pi"}</Cmd>. Escribe el nombre con mayúscula inicial para la forma mayúscula, como{" "}
          <Cmd>{"\\Gamma"}</Cmd>, <Cmd>{"\\Delta"}</Cmd> y <Cmd>{"\\Omega"}</Cmd>; las mayúsculas
          que se parecen a letras latinas, como Alfa y Beta, no tienen comando, así que se escriben
          A y B. Varias letras tienen formas variantes: <Cmd>{"\\varepsilon"}</Cmd>,{" "}
          <Cmd>{"\\vartheta"}</Cmd>, <Cmd>{"\\varphi"}</Cmd> y <Cmd>{"\\varsigma"}</Cmd>. Todas están
          integradas. La tabla recoge las letras griegas más usadas; el alfabeto griego completo
          en LaTeX aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: las letras griegas más usadas",
      use: {
        "\\alpha": "Alfa",
        "\\beta": "Beta",
        "\\gamma": "Gamma (\\Gamma mayúscula)",
        "\\delta": "Delta (\\Delta mayúscula)",
        "\\epsilon": "Épsilon ϵ (\\varepsilon para ε)",
        "\\theta": "Theta (variante \\vartheta, \\Theta mayúscula)",
        "\\lambda": "Lambda (\\Lambda mayúscula)",
        "\\mu": "Mu",
        "\\pi": "Pi (\\Pi mayúscula)",
        "\\sigma": "Sigma (\\Sigma mayúscula)",
        "\\phi": "Phi ϕ (\\varphi para φ, \\Phi mayúscula)",
        "\\omega": "Omega (\\Omega mayúscula)",
      },
      faqHeading: "Preguntas frecuentes sobre las letras griegas en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo letras griegas en LaTeX?",
          answer:
            "Escribe una barra invertida y el nombre de la letra en modo matemático: $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. Para la mayúscula, pon en mayúscula la primera letra: \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. No hace falta ningún paquete.",
        },
        {
          question: "¿Por qué no existe el comando \\Alpha en LaTeX?",
          answer:
            "Las mayúsculas Alfa, Beta, Épsilon, Zeta, Eta, Iota, Kappa, Mu, Nu, Ómicron, Rho, Tau y Chi son iguales que letras latinas, así que LaTeX no las define; escribe A, B, E, etc. La ómicron minúscula es, del mismo modo, simplemente o.",
        },
        {
          question: "¿Cómo pongo una letra griega en negrita en LaTeX?",
          answer:
            "Usa \\boldsymbol{\\alpha} de amsmath o \\bm{\\alpha} del paquete bm. \\mathbf solo afecta a letras latinas, dígitos y griegas mayúsculas, así que \\mathbf{\\alpha} deja la alfa sin cambios.",
        },
      ],
    },
    quantifiers: {
      title: "Cuantificadores en LaTeX: para todo, existe y pertenencia",
      intro: (
        <IntroP>
          Los cuantificadores en LaTeX son <Cmd>{"\\forall"}</Cmd> (para todo, ∀) y{" "}
          <Cmd>{"\\exists"}</Cmd> (existe, ∃), ambos integrados; <Cmd>{"\\nexists"}</Cmd> para «no
          existe» viene de amssymb, y la existencia única se escribe <Cmd>{"\\exists!"}</Cmd>. Los
          enunciados cuantificados suelen combinarlos con la pertenencia, <Cmd>{"\\in"}</Cmd>, y un
          separador como una coma o dos puntos:{" "}
          <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. La negación es{" "}
          <Cmd>{"\\neg"}</Cmd>, y la implicación y la equivalencia son <Cmd>{"\\implies"}</Cmd> y{" "}
          <Cmd>{"\\iff"}</Cmd>. La tabla recoge los símbolos de cuantificadores más usados, con el
          paquete que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: cuantificadores y conectivos",
      use: {
        "\\forall": "Para todo",
        "\\exists": "Existe",
        "\\nexists": "No existe",
        "\\exists!": "Existe exactamente uno",
        "\\forall x \\in A": "Para todo x en A",
        "\\in": "Pertenece a",
        "\\notin": "No pertenece a",
        "\\neg": "No",
        "\\land": "Y",
        "\\lor": "O",
        "\\implies": "Implica",
        "\\iff": "Si y solo si",
      },
      faqHeading: "Preguntas frecuentes sobre los cuantificadores en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo «para todo» en LaTeX?",
          answer:
            "Usa \\forall en modo matemático: $\\forall x \\in \\mathbb{R}$ produce ∀x ∈ ℝ. Está integrado. Añade un separador después de la variable ligada, por ejemplo \\forall x,\\ P(x) o \\forall x : P(x), para que la fórmula se lea con claridad.",
        },
        {
          question: "¿Cómo escribo «existe» y «no existe» en LaTeX?",
          answer:
            "«Existe» es \\exists (∃), integrado. «No existe» es \\nexists (∄), que necesita \\usepackage{amssymb}; \\not\\exists también funciona sin paquete, pero queda menos limpio. Para la existencia única escribe \\exists!.",
        },
        {
          question: "¿Cómo escribo «tal que» en LaTeX?",
          answer:
            "En la notación por comprensión usa una barra vertical o dos puntos: \\{ x \\in A \\mid x > 0 \\} o \\{ x : x > 0 \\}; \\mid da el espaciado correcto. En un enunciado cuantificado es habitual una coma o \\text{ t.q. }, como en \\exists x \\in A \\text{ t.q. } x > 0.",
        },
      ],
    },
    boolean: {
      title: "Símbolos de álgebra booleana en LaTeX: AND, OR y XOR",
      intro: (
        <IntroP>
          Los símbolos de álgebra booleana en LaTeX reutilizan las conectivas lógicas: el símbolo
          AND es <Cmd>{"\\land"}</Cmd> (&and;), el símbolo OR es <Cmd>{"\\lor"}</Cmd> (&or;) y NOT
          es <Cmd>{"\\lnot"}</Cmd> (&not;). El XOR en LaTeX es <Cmd>{"\\oplus"}</Cmd> (&oplus;), o{" "}
          <Cmd>{"\\veebar"}</Cmd> de amssymb. La implicación y la equivalencia son{" "}
          <Cmd>{"\\Rightarrow"}</Cmd> e <Cmd>{"\\iff"}</Cmd>, las constantes verdadero y falso son{" "}
          <Cmd>{"\\top"}</Cmd> y <Cmd>{"\\bot"}</Cmd>, y los cuantificadores son{" "}
          <Cmd>{"\\forall"}</Cmd> y <Cmd>{"\\exists"}</Cmd>. Todos van en modo matemático. La
          tabla recoge los comandos más usados, con el paquete que necesita cada uno; la lista
          completa de símbolos de puertas lógicas aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: operaciones booleanas",
      use: {
        "\\land": "AND, conjunción (alias \\wedge)",
        "\\lor": "OR, disyunción (alias \\vee)",
        "\\lnot": "NOT, negación (alias \\neg)",
        "\\overline{A}": "NOT, notación con barra",
        "\\oplus": "XOR (o exclusivo)",
        "\\veebar": "XOR, estilo de lógica",
        "\\barwedge": "NAND",
        "\\Rightarrow": "Implica",
        "\\iff": "Si y solo si (equivalencia)",
        "\\top": "Verdadero, 1",
        "\\bot": "Falso, 0",
        "\\forall x \\, \\exists y": "Para todo, existe",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos booleanos en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo los símbolos AND y OR en LaTeX?",
          answer:
            "AND (∧) es \\land o su alias \\wedge, y OR (∨) es \\lor o \\vee. Ambos están integrados y van en modo matemático: $A \\land B$, $A \\lor B$. NOT es \\lnot o \\neg. En la notación de circuitos también puedes escribir A \\cdot B para AND, A + B para OR y \\overline{A} para NOT.",
        },
        {
          question: "¿Cómo escribo XOR en LaTeX?",
          answer:
            "Usa \\oplus (⊕), que está integrado: $A \\oplus B$. Los textos de lógica a veces usan \\veebar (⊻), que necesita \\usepackage{amssymb}. XNOR se escribe normalmente \\odot o \\overline{A \\oplus B}.",
        },
        {
          question: "¿Qué paquete necesito para los símbolos de álgebra booleana en LaTeX?",
          answer:
            "Ninguno para los habituales: \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall y \\exists están integrados. Carga amssymb para \\veebar y \\barwedge, y amsmath para \\implies.",
        },
      ],
    },
    brackets: {
      title: "Corchetes en LaTeX: llaves, corchetes angulares, función piso y normas",
      intro: (
        <IntroP>
          Los delimitadores de LaTeX son de dos tipos: los que se escriben directamente, como{" "}
          <Cmd>{"("}</Cmd>, <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> y <Cmd>{"]"}</Cmd>, y los que
          necesitan un comando, como <Cmd>{"\\{"}</Cmd> y <Cmd>{"\\}"}</Cmd> para las llaves,{" "}
          <Cmd>{"\\langle"}</Cmd> y <Cmd>{"\\rangle"}</Cmd> para los corchetes angulares,{" "}
          <Cmd>{"\\lfloor"}</Cmd> y <Cmd>{"\\rfloor"}</Cmd> para la función piso, y{" "}
          <Cmd>{"\\lVert"}</Cmd> y <Cmd>{"\\rVert"}</Cmd> para una norma. Si antepones{" "}
          <Cmd>{"\\left"}</Cmd> y <Cmd>{"\\right"}</Cmd> a cualquier par, LaTeX ajusta el tamaño
          de los delimitadores a su contenido, por ejemplo una fracción. Los corchetes dobles
          necesitan el paquete stmaryrd. La tabla recoge los corchetes y delimitadores más usados,
          con el paquete que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: los corchetes más usados",
      use: {
        "\\left( \\frac{a}{b} \\right)": "Paréntesis que se ajustan al contenido",
        "\\{ x \\}": "Llaves (escapadas)",
        "\\langle x \\rangle": "Corchetes angulares, producto escalar",
        "\\lfloor x \\rfloor": "Función piso (parte entera)",
        "\\lceil x \\rceil": "Función techo",
        "\\lvert x \\rvert": "Valor absoluto",
        "\\lVert x \\rVert": "Norma",
        "\\llbracket x \\rrbracket": "Corchetes dobles",
        "\\bigl( x \\bigr)": "Tamaños manuales: \\big, \\Big, \\bigg, \\Bigg",
        "[a, b)": "Intervalo semiabierto",
        "\\underbrace{a + b}_{n}": "Llave bajo una expresión (\\overbrace encima)",
      },
      faqHeading: "Preguntas frecuentes sobre los corchetes en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo llaves en LaTeX?",
          answer:
            "Las llaves son los caracteres de agrupación de LaTeX, así que una { o } sin más no se imprime. Escápalas: \\{ y \\} funcionan en texto y en modo matemático, por ejemplo $\\{1, 2, 3\\}$. Usa \\left\\{ y \\right\\} para llaves que crecen con su contenido; \\lbrace y \\rbrace son alternativas con nombre.",
        },
        {
          question: "¿Cómo escribo corchetes angulares en LaTeX?",
          answer:
            "Usa \\langle y \\rangle, como en $\\langle u, v \\rangle$. No uses las teclas < y >: son símbolos de relación con otra forma y otro espaciado. Para contenido alto escribe \\left\\langle ... \\right\\rangle.",
        },
        {
          question: "¿Cómo escribo corchetes dobles en LaTeX?",
          answer:
            "Carga \\usepackage{stmaryrd} y escribe \\llbracket x \\rrbracket para los corchetes dobles ⟦x⟧ que se usan en semántica y para intervalos de enteros. Sin el paquete, [\\![ x ]\\!] los imita juntando dos corchetes con un espacio fino negativo.",
        },
      ],
    },
    calculus: {
      title: "Símbolos de cálculo en LaTeX: derivadas, integrales y límites",
      intro: (
        <IntroP>
          Los símbolos básicos de cálculo en LaTeX están todos integrados. Una derivada en LaTeX es
          una fracción, <Cmd>{"\\frac{dy}{dx}"}</Cmd>, o una prima, <Cmd>{"f'(x)"}</Cmd>; una
          derivada parcial usa <Cmd>{"\\partial"}</Cmd>, como en{" "}
          <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>; una integral es{" "}
          <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>; y un límite es <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Las
          integrales múltiples como <Cmd>{"\\iint"}</Cmd> e <Cmd>{"\\iiint"}</Cmd> vienen de
          amsmath, y el paquete physics añade atajos como <Cmd>{"\\dv"}</Cmd> y{" "}
          <Cmd>{"\\pdv"}</Cmd>. La tabla recoge los símbolos de cálculo más usados, con el paquete
          que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: derivadas, integrales y límites",
      use: {
        "\\frac{dy}{dx}": "Derivada (notación de Leibniz)",
        "f'(x)": "Derivada (notación prima); f''(x) para la segunda",
        "\\frac{d^2 y}{dx^2}": "Segunda derivada",
        "\\frac{\\partial f}{\\partial x}": "Derivada parcial",
        "\\dot{x}": "Derivada temporal (punto de Newton); \\ddot{x} para la segunda",
        "\\int_a^b f(x)\\,dx": "Integral definida",
        "\\iint_D f\\,dA": "Integral doble (\\iiint para la triple)",
        "\\oint_C": "Integral de contorno (integral de línea cerrada)",
        "\\lim_{x \\to 0}": "Límite",
        "\\nabla f": "Gradiente",
        "\\dv{f}{x}": "Atajo para la derivada",
        "\\pdv{f}{x}": "Atajo para la derivada parcial",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de cálculo en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo una derivada en LaTeX?",
          answer:
            "Escríbela como una fracción en modo matemático: $\\frac{dy}{dx}$ para dy/dx y $\\frac{d^2y}{dx^2}$ para la segunda derivada. La notación prima es f'(x) y f''(x), y la notación de punto de Newton es \\dot{x} y \\ddot{x}. Todas están integradas; el paquete physics añade \\dv{y}{x} como atajo.",
        },
        {
          question: "¿Cómo escribo una derivada parcial en LaTeX?",
          answer:
            "Usa el símbolo integrado \\partial dentro de una fracción: $\\frac{\\partial f}{\\partial x}$, y $\\frac{\\partial^2 f}{\\partial x \\partial y}$ para una segunda derivada mixta. Con \\usepackage{physics}, \\pdv{f}{x} y \\pdv{f}{x}{y} producen el mismo resultado.",
        },
        {
          question: "¿Cómo escribo una integral con límites en LaTeX?",
          answer:
            "Usa \\int con un subíndice y un superíndice: $\\int_a^b f(x)\\,dx$. Añade \\limits (\\int\\limits_a^b) para colocar los límites encima y debajo del signo. Para integrales dobles y triples carga amsmath y usa \\iint e \\iiint, que espacian correctamente los signos; \\oint da una integral de contorno cerrado.",
        },
      ],
    },
    combinatorics: {
      title: "Coeficiente binomial y factorial en LaTeX: símbolos de combinatoria",
      intro: (
        <IntroP>
          Para escribir «n sobre k» en LaTeX, carga amsmath y usa <Cmd>{"\\binom{n}{k}"}</Cmd>,
          que imprime el coeficiente binomial entre paréntesis y ajusta su tamaño a las fórmulas
          en línea o destacadas; <Cmd>{"\\dbinom"}</Cmd> y <Cmd>{"\\tbinom"}</Cmd> fuerzan el
          tamaño grande o pequeño. Un factorial en LaTeX no necesita ningún comando:{" "}
          <Cmd>{"n!"}</Cmd> es la letra seguida de un signo de exclamación, así que la fórmula del
          coeficiente binomial es <Cmd>{"\\frac{n!}{k!(n-k)!}"}</Cmd>. La tabla recoge los
          comandos de combinatoria más usados, con el paquete que necesita cada uno; la lista
          completa de símbolos aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: coeficientes binomiales y factoriales",
      use: {
        "\\binom{n}{k}": "n sobre k (coeficiente binomial)",
        "\\dbinom{n}{k}": "Binomial en tamaño destacado, incluso en línea",
        "\\tbinom{n}{k}": "Binomial en tamaño de texto, incluso en fórmulas destacadas",
        "{n \\choose k}": "\\choose de TeX plano (evítalo con amsmath)",
        "n!": "Factorial",
        "n!!": "Doble factorial",
        "\\frac{n!}{k!(n-k)!}": "Fórmula del coeficiente binomial",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "Coeficiente multinomial",
        "P(n, k) = \\frac{n!}{(n-k)!}": "Variaciones (permutaciones de n elementos tomados de k en k)",
        "n^{\\underline{k}}": "Factorial descendente",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de combinatoria en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo «n sobre k» en LaTeX?",
          answer:
            "Carga amsmath y escribe \\binom{n}{k}, que imprime n sobre k entre paréntesis y ajusta su tamaño a las fórmulas en línea o destacadas. Usa \\dbinom{n}{k} para forzar el tamaño grande de las fórmulas destacadas y \\tbinom{n}{k} para el tamaño pequeño de texto. La forma de TeX plano {n \\choose k} también funciona, pero amsmath la desaconseja.",
        },
        {
          question: "¿Cómo escribo un factorial en LaTeX?",
          answer:
            "Un factorial no necesita ningún comando: escribe n! en modo matemático. El doble factorial es n!!, y para una expresión enciérrala entre paréntesis, como en (n+1)!. La fórmula del coeficiente binomial es \\frac{n!}{k!(n-k)!}.",
        },
        {
          question: "¿Cómo escribo un coeficiente multinomial en LaTeX?",
          answer:
            "Reutiliza \\binom con una lista en el argumento inferior: \\binom{n}{k_1, k_2, \\ldots, k_m}. O escríbelo desarrollado como \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
        },
      ],
    },
    complex: {
      title: "Símbolo de los números complejos y conjugado en LaTeX",
      intro: (
        <IntroP>
          El símbolo de los números complejos es la C de pizarra &#8450;, que en LaTeX se escribe{" "}
          <Cmd>{"\\mathbb{C}"}</Cmd> con el paquete amssymb. El conjugado complejo en LaTeX es{" "}
          <Cmd>{"\\bar{z}"}</Cmd> para una sola letra o <Cmd>{"\\overline{z}"}</Cmd> para una
          expresión completa, y en física se escribe <Cmd>{"z^*"}</Cmd>. Las partes real e
          imaginaria son <Cmd>{"\\Re"}</Cmd> e <Cmd>{"\\Im"}</Cmd>, o la forma recta{" "}
          <Cmd>{"\\operatorname{Re}"}</Cmd>; el módulo es <Cmd>{"|z|"}</Cmd> y el argumento{" "}
          <Cmd>{"\\arg z"}</Cmd>. La tabla recoge los símbolos de números complejos más usados,
          con el paquete que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: notación de números complejos",
      use: {
        "\\mathbb{C}": "Conjunto de los números complejos",
        "z = a + bi": "Forma binómica",
        "\\bar{z}": "Conjugado complejo (una letra)",
        "\\overline{z + w}": "Conjugado de una expresión",
        "z^*": "Conjugado, notación de física",
        "\\Re(z)": "Parte real, ℜ gótica (Fraktur)",
        "\\Im(z)": "Parte imaginaria, ℑ gótica (Fraktur)",
        "\\operatorname{Re}(z)": "Parte real, en letra recta (también Im)",
        "|z|": "Módulo (valor absoluto)",
        "\\arg z": "Argumento",
        "re^{i\\theta}": "Forma polar",
        "\\mathrm{i}": "Unidad imaginaria en letra recta",
      },
      faqHeading: "Preguntas frecuentes sobre los números complejos en LaTeX",
      faq: [
        {
          question: "¿Cuál es el símbolo de los números complejos?",
          answer:
            "El conjunto de los números complejos es la C de pizarra, ℂ. En LaTeX escribe \\mathbb{C} con \\usepackage{amssymb} (o amsfonts), como en z \\in \\mathbb{C}. Los números reales son \\mathbb{R} con el mismo estilo.",
        },
        {
          question: "¿Cómo escribo el conjugado complejo en LaTeX?",
          answer:
            "Usa \\bar{z} para una sola letra y \\overline{z + w} para una expresión más larga, ya que \\overline se extiende sobre todo su argumento. En física e ingeniería se suele escribir z^*, y la traspuesta conjugada de una matriz es A^\\dagger o A^*.",
        },
        {
          question: "¿Cómo escribo las partes real e imaginaria en LaTeX?",
          answer:
            "Los comandos integrados \\Re e \\Im imprimen las letras góticas ℜ y ℑ. Para las formas rectas Re e Im que usa la mayoría de los textos actuales, escribe \\operatorname{Re}(z) y \\operatorname{Im}(z) con amsmath, o redefine los originales una vez con \\renewcommand{\\Re}{\\operatorname{Re}}.",
        },
      ],
    },
    "computer-science": {
      title: "Símbolos de ciencias de la computación en LaTeX: O grande, función piso y notación de algoritmos",
      intro: (
        <IntroP>
          La mayoría de los símbolos de ciencias de la computación en LaTeX son comandos
          matemáticos corrientes. La notación O grande en LaTeX es <Cmd>{"O(n \\log n)"}</Cmd> o,
          en muchos artículos, la caligráfica <Cmd>{"\\mathcal{O}(n)"}</Cmd>; sus parientes son{" "}
          <Cmd>{"\\Omega(n)"}</Cmd>, <Cmd>{"\\Theta(n)"}</Cmd> y la o pequeña <Cmd>{"o(n)"}</Cmd>.
          Las funciones piso y techo son <Cmd>{"\\lfloor x \\rfloor"}</Cmd> y{" "}
          <Cmd>{"\\lceil x \\rceil"}</Cmd>, el XOR es <Cmd>{"\\oplus"}</Cmd>, la asignación en
          pseudocódigo es <Cmd>{"\\gets"}</Cmd>, y una definición con := queda más limpia con{" "}
          <Cmd>{"\\coloneqq"}</Cmd> de mathtools. La tabla recoge los símbolos de ciencias de la
          computación más usados, con el paquete que necesita cada uno; la lista completa aparece
          más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: complejidad, redondeo y algoritmos",
      use: {
        "O(n \\log n)": "O grande (cota superior)",
        "\\mathcal{O}(n)": "O grande, estilo caligráfico",
        "\\Omega(n)": "Omega grande (cota inferior)",
        "\\Theta(n^2)": "Theta grande (cota ajustada)",
        "o(n)": "o pequeña",
        "\\lfloor \\log_2 n \\rfloor": "Piso del logaritmo en base 2",
        "\\lceil n/2 \\rceil": "Función techo",
        "a \\bmod n": "Módulo como operador binario",
        "\\oplus": "XOR",
        "x \\gets x + 1": "Asignación en pseudocódigo",
        "\\coloneqq": "Definido como (:=)",
        "\\{0,1\\}^*": "Todas las cadenas binarias (estrella de Kleene)",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de ciencias de la computación en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo la notación O grande en LaTeX?",
          answer:
            "Escribe O(n) en modo matemático: $O(n \\log n)$. Muchos autores prefieren la forma caligráfica $\\mathcal{O}(n)$, que no necesita paquetes. Omega grande y Theta grande usan las mayúsculas griegas \\Omega(n) y \\Theta(n), y la o pequeña es o(n). Escribe \\log y no log, para que el nombre de la función aparezca en letra recta.",
        },
        {
          question: "¿Cómo escribo las funciones piso y techo en LaTeX?",
          answer:
            "Usa los delimitadores integrados \\lfloor x \\rfloor para ⌊x⌋ y \\lceil x \\rceil para ⌈x⌉. Para contenido alto antepón \\left y \\right, como en \\left\\lfloor \\frac{n}{2} \\right\\rfloor, o define \\floor y \\ceil con \\DeclarePairedDelimiter de mathtools.",
        },
        {
          question: "¿Cómo escribo mod en LaTeX?",
          answer:
            "Usa \\bmod para el operador binario, a \\bmod n, y \\pmod{n} para una congruencia, como en a \\equiv b \\pmod{n}, que imprime (mod n) con el espaciado correcto. Ambos están integrados; amsmath añade \\mod{n} y \\pod{n} para otros estilos de espaciado.",
        },
      ],
    },
    "differential-geometry": {
      title: "Símbolos de geometría diferencial en LaTeX: formas, conexiones y curvatura",
      intro: (
        <IntroP>
          Los símbolos de geometría diferencial en LaTeX se construyen con unos pocos comandos
          integrados. El producto exterior de formas es <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>,
          con <Cmd>{"\\bigwedge^k V"}</Cmd> para la potencia exterior; la derivada exterior es{" "}
          <Cmd>{"d\\omega"}</Cmd>; la derivada covariante es <Cmd>{"\\nabla_X Y"}</Cmd>; y la
          derivada de Lie es <Cmd>{"\\mathcal{L}_X"}</Cmd>. Los símbolos de Christoffel y los
          tensores de curvatura son letras con índices, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> y{" "}
          <Cmd>{"R^l{}_{ijk}"}</Cmd>, y el espacio tangente en un punto es <Cmd>{"T_pM"}</Cmd>. La
          tabla recoge los símbolos de geometría diferencial más usados; todos están integrados, y
          la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: variedades, formas y curvatura",
      use: {
        "T_pM": "Espacio tangente en p",
        "T^*_pM": "Espacio cotangente en p",
        "\\nabla_X Y": "Derivada covariante (conexión)",
        "\\Gamma^k_{ij}": "Símbolos de Christoffel",
        "R^l{}_{ijk}": "Tensor de curvatura de Riemann",
        "g_{ij}": "Tensor métrico",
        "\\alpha \\wedge \\beta": "Producto exterior de formas",
        "\\bigwedge^k V": "Potencia exterior, k-formas",
        "d\\omega": "Derivada exterior",
        "\\mathcal{L}_X": "Derivada de Lie",
        "[X, Y]": "Corchete de Lie de campos vectoriales",
        "\\star\\omega": "Estrella de Hodge",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de geometría diferencial en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo el producto exterior (cuña) en LaTeX?",
          answer:
            "Usa \\wedge entre formas, $\\alpha \\wedge \\beta$; es un operador binario con el espaciado correcto. Para la potencia exterior o un producto exterior grande sobre un conjunto de índices, usa el operador grande \\bigwedge, como en \\bigwedge^k V o \\bigwedge_{i=1}^{n} dx_i. Ambos están integrados.",
        },
        {
          question: "¿Cómo escribo la derivada covariante en LaTeX?",
          answer:
            "Escribe \\nabla con la dirección como subíndice: $\\nabla_X Y$, o \\nabla_\\mu V^\\nu en notación de índices. Las derivadas parciales a lo largo de las coordenadas se escriben \\partial_\\mu, y la notación con punto y coma V^\\nu{}_{;\\mu} también es habitual en los textos de física.",
        },
        {
          question: "¿Cómo escribo la derivada de Lie y la derivada exterior en LaTeX?",
          answer:
            "La derivada de Lie es una L caligráfica con subíndice, \\mathcal{L}_X T. La derivada exterior es una d normal, d\\omega; algunos autores la escriben en letra recta con \\mathrm{d}\\omega para distinguirla de una variable.",
        },
      ],
    },
    finance: {
      title: "Símbolos de moneda y finanzas en LaTeX: dólar, euro y fórmulas",
      intro: (
        <IntroP>
          Los símbolos de moneda en LaTeX requieren algo de cuidado porque el signo de dólar inicia
          el modo matemático. Escápalo como <Cmd>{"\\$"}</Cmd> para imprimir un signo de dólar; el
          signo de la libra es <Cmd>{"\\pounds"}</Cmd>, y el signo del euro es{" "}
          <Cmd>{"\\texteuro"}</Cmd>, o <Cmd>{"\\euro"}</Cmd> del paquete eurosym para el diseño
          oficial. El porcentaje es <Cmd>{"\\%"}</Cmd> porque un % sin escapar inicia un
          comentario, y el tanto por mil es <Cmd>{"\\textperthousand"}</Cmd>. Las fórmulas
          financieras, como el valor actual neto o el interés compuesto, son matemáticas
          corrientes construidas con <Cmd>{"\\sum"}</Cmd> y <Cmd>{"\\frac"}</Cmd>. La tabla recoge
          los símbolos financieros más usados, con el paquete que necesita cada uno; la lista
          completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: monedas, porcentajes y fórmulas",
      use: {
        "\\$": "Signo de dólar",
        "\\pounds": "Libra esterlina",
        "\\texteuro": "Signo del euro (textcomp, integrado)",
        "\\euro": "Signo oficial del euro",
        "\\textyen": "Signo del yen (textcomp, integrado)",
        "\\%": "Porcentaje",
        "\\textperthousand": "Tanto por mil (textcomp, integrado)",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "Valor actual neto (VAN)",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "Interés compuesto",
        "A = Pe^{rt}": "Capitalización continua",
        "\\pm": "Más o menos",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos financieros en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo el signo de dólar en LaTeX?",
          answer:
            "Escápalo: \\$ imprime $ tanto en modo texto como en modo matemático, por ejemplo \\$100. Un $ sin escapar abre o cierra el modo matemático, por eso un signo de dólar sin escapar en un precio provoca errores o convierte el resto de la línea en una fórmula.",
        },
        {
          question: "¿Cómo escribo el signo del euro en LaTeX?",
          answer:
            "\\texteuro (de textcomp, que ahora forma parte del núcleo de LaTeX) imprime el signo del euro de la fuente actual sin paquetes adicionales. Para el diseño oficial de la UE carga \\usepackage{eurosym} y escribe \\euro. Con XeLaTeX o LuaLaTeX también puedes escribir € directamente.",
        },
        {
          question: "¿Cómo escribo el signo de porcentaje en LaTeX?",
          answer:
            "Escribe \\%. Un % sin escapar inicia un comentario, de modo que todo lo que le sigue en la línea desaparece del documento. Para el tanto por mil usa \\textperthousand, y para números con unidades el paquete siunitx ofrece \\qty{5}{\\percent}.",
        },
      ],
    },
    "game-theory": {
      title: "Símbolos de teoría de juegos en LaTeX: estrategias, pagos y equilibrios",
      intro: (
        <IntroP>
          La notación de teoría de juegos en LaTeX consiste sobre todo en letras con índices, así
          que la clave es usar subíndices coherentes. La estrategia de un jugador es{" "}
          <Cmd>{"s_i"}</Cmd>, las estrategias de todos los demás son <Cmd>{"s_{-i}"}</Cmd>, el pago
          es <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, y un equilibrio de Nash se marca con un asterisco,{" "}
          <Cmd>{"s^*"}</Cmd>. Las estrategias mixtas usan{" "}
          <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>, las preferencias usan <Cmd>{"\\succ"}</Cmd>{" "}
          y <Cmd>{"\\succeq"}</Cmd>, y la mejor respuesta queda mejor con{" "}
          <Cmd>{"\\operatorname{BR}_i"}</Cmd> de amsmath. Las matrices de pagos son tablas
          construidas con array. La tabla recoge los símbolos de teoría de juegos más usados, con
          el paquete que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: estrategias, pagos y equilibrios",
      use: {
        "s_i \\in S_i": "Estrategia del jugador i",
        "s_{-i}": "Estrategias de todos los demás jugadores",
        "u_i(s_i, s_{-i})": "Pago (utilidad) del jugador i",
        "s^* = (s_1^*, \\ldots, s_n^*)": "Perfil de equilibrio de Nash",
        "\\operatorname{BR}_i(s_{-i})": "Mejor respuesta",
        "\\sigma_i \\in \\Delta(S_i)": "Estrategia mixta",
        "\\mathbb{E}[u_i(\\sigma)]": "Pago esperado",
        "a \\succ b": "Preferencia estricta",
        "a \\succeq b": "Preferencia débil",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "Valor maximin",
        "\\phi_i(v)": "Valor de Shapley",
        "v(S)": "Valor de la coalición S",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de teoría de juegos en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo una matriz de pagos en LaTeX?",
          answer:
            "Usa un array dentro de una fórmula destacada, con una línea vertical después de las etiquetas de las filas: \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. Para un juego en forma estratégica con los nombres de los jugadores, el paquete sgame ofrece un entorno game.",
        },
        {
          question: "¿Cómo escribo s menos i en LaTeX?",
          answer:
            "Pon el signo menos y el índice entre llaves: s_{-i}. Sin llaves, s_-i solo baja el signo menos. Lo mismo vale para perfiles como (s_i', s_{-i}) y mejores respuestas como BR_i(s_{-i}).",
        },
        {
          question: "¿Cómo marco un equilibrio de Nash en LaTeX?",
          answer:
            "Usa un asterisco como superíndice: s^* para el perfil y s_i^* para la estrategia de equilibrio de un jugador. La condición de equilibrio es u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) para todo s_i \\in S_i.",
        },
      ],
    },
    geometry: {
      title: "Símbolos de geometría en LaTeX: perpendicular, paralelo, ángulo y triángulo",
      intro: (
        <IntroP>
          Los símbolos de geometría en LaTeX están en su mayoría integrados. Perpendicular, que es
          también el símbolo de ortogonalidad, es <Cmd>{"\\perp"}</Cmd> (⊥), paralelo es{" "}
          <Cmd>{"\\parallel"}</Cmd> (∥), un ángulo es <Cmd>{"\\angle ABC"}</Cmd> y un triángulo es{" "}
          <Cmd>{"\\triangle ABC"}</Cmd>. Congruente es <Cmd>{"\\cong"}</Cmd> y semejante es{" "}
          <Cmd>{"\\sim"}</Cmd>. Un segmento lleva una barra, <Cmd>{"\\overline{AB}"}</Cmd>, una
          semirrecta o un vector lleva una flecha, <Cmd>{"\\overrightarrow{AB}"}</Cmd>, y el signo
          de grado es un círculo en superíndice, <Cmd>{"90^\\circ"}</Cmd>. Solo unos pocos extras,
          como <Cmd>{"\\measuredangle"}</Cmd> y <Cmd>{"\\nparallel"}</Cmd>, necesitan amssymb. La
          tabla recoge los símbolos de geometría más usados, con el paquete que necesita cada uno;
          la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: los símbolos de geometría más usados",
      use: {
        "\\perp": "Perpendicular, ortogonal",
        "\\parallel": "Paralelo",
        "\\nparallel": "No paralelo",
        "\\angle ABC": "Ángulo",
        "\\measuredangle ABC": "Ángulo medido",
        "\\triangle ABC": "Triángulo",
        "\\cong": "Congruente",
        "\\sim": "Semejante",
        "\\overline{AB}": "Segmento",
        "\\overrightarrow{AB}": "Semirrecta o vector",
        "\\overleftrightarrow{AB}": "Recta que pasa por A y B",
        "90^\\circ": "Signo de grado",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de geometría en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo el símbolo de perpendicular u ortogonal en LaTeX?",
          answer:
            "Usa \\perp en modo matemático: $AB \\perp CD$ imprime AB ⊥ CD. El mismo comando sirve para vectores ortogonales, u \\perp v, y para el complemento ortogonal V^\\perp. Está integrado, así que no necesita ningún paquete.",
        },
        {
          question: "¿Cómo escribo el símbolo de triángulo en LaTeX?",
          answer:
            "\\triangle imprime △, como en $\\triangle ABC$, y no necesita paquetes. amssymb añade el más pequeño \\vartriangle y el relleno \\blacktriangle.",
        },
        {
          question: "¿Cómo escribo el símbolo de grado en LaTeX?",
          answer:
            "En modo matemático escribe un círculo como superíndice: $90^\\circ$. En texto, \\textdegree imprime °, y el paquete siunitx da un resultado uniforme con \\ang{45} o \\qty{90}{\\degree}.",
        },
      ],
    },
    "graph-theory": {
      title: "Símbolos de teoría de grafos en LaTeX: vértices, aristas, grado y coloración",
      intro: (
        <IntroP>
          La notación de teoría de grafos en LaTeX consiste sobre todo en letras normales y
          operadores integrados. Un grafo es <Cmd>{"G = (V, E)"}</Cmd>, la adyacencia es{" "}
          <Cmd>{"u \\sim v"}</Cmd>, el grado de un vértice es <Cmd>{"\\deg(v)"}</Cmd> (el operador{" "}
          <Cmd>{"\\deg"}</Cmd> está integrado), y los grafos completos y bipartitos completos son{" "}
          <Cmd>{"K_n"}</Cmd> y <Cmd>{"K_{m,n}"}</Cmd>. Los invariantes de grafos usan letras
          griegas: el número cromático <Cmd>{"\\chi(G)"}</Cmd>, el número de clique{" "}
          <Cmd>{"\\omega(G)"}</Cmd>, el número de independencia <Cmd>{"\\alpha(G)"}</Cmd>, y los
          grados máximo y mínimo <Cmd>{"\\Delta(G)"}</Cmd> y <Cmd>{"\\delta(G)"}</Cmd>. Para
          dibujar el grafo en sí, usa TikZ. La tabla recoge los símbolos de teoría de grafos más
          usados; todos están integrados, y la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: los símbolos de teoría de grafos más usados",
      use: {
        "G = (V, E)": "Grafo con conjunto de vértices V y conjunto de aristas E",
        "u \\sim v": "u es adyacente a v",
        "\\deg(v)": "Grado de un vértice",
        "\\deg^{+}(v)": "Grado de salida (\\deg^{-} para el grado de entrada)",
        "N(v)": "Vecindad de v",
        "K_n": "Grafo completo",
        "K_{m,n}": "Grafo bipartito completo",
        "\\chi(G)": "Número cromático",
        "\\omega(G)": "Número de clique",
        "\\alpha(G)": "Número de independencia",
        "\\Delta(G)": "Grado máximo (\\delta(G) para el mínimo)",
        "G \\cong H": "Grafos isomorfos",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de teoría de grafos en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo el grado de un vértice en LaTeX?",
          answer:
            "Usa el operador integrado \\deg, que imprime deg en letra recta con el espaciado correcto: $\\deg(v)$. Para grafos dirigidos, \\deg^{+}(v) y \\deg^{-}(v) dan el grado de salida y el grado de entrada, y el lema del apretón de manos se escribe \\sum_{v \\in V} \\deg(v) = 2|E|.",
        },
        {
          question: "¿Cómo dibujo un grafo en LaTeX?",
          answer:
            "Carga \\usepackage{tikz}, coloca los vértices con \\node[circle,draw] (a) at (0,0) {a}; y únelos con \\draw (a) -- (b);. Para grafos más grandes, la biblioteca graphs de TikZ y el paquete tkz-graph simplifican la sintaxis.",
        },
        {
          question: "¿Cómo escribo el número cromático en LaTeX?",
          answer:
            "El número cromático es \\chi(G), con la letra griega ji. El índice cromático (número cromático de aristas) se suele escribir \\chi'(G), el número de clique \\omega(G) y el número de independencia \\alpha(G). Todos están integrados.",
        },
      ],
    },
    latin: {
      title: "Letras latinas en LaTeX: letras especiales y acentos",
      intro: (
        <IntroP>
          Las letras latinas que van más allá de la A a la Z, como las ligaduras æ y œ, las
          escandinavas ø y å, la ß alemana y la ł polaca, tienen cada una un comando corto en
          LaTeX: <Cmd>{"\\ae"}</Cmd>, <Cmd>{"\\oe"}</Cmd>, <Cmd>{"\\o"}</Cmd>, <Cmd>{"\\aa"}</Cmd>,{" "}
          <Cmd>{"\\ss"}</Cmd> y <Cmd>{"\\l"}</Cmd>, con versiones en mayúscula como{" "}
          <Cmd>{"\\AE"}</Cmd> y <Cmd>{"\\O"}</Cmd>. Las letras acentuadas combinan un comando de
          acento con la letra base, por ejemplo <Cmd>{"\\'e"}</Cmd> para é y <Cmd>{"\\~n"}</Cmd>{" "}
          para ñ. Todos están integrados y funcionan en modo texto. La tabla recoge los símbolos
          latinos más usados; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: letras especiales y acentos",
      use: {
        "\\ae": "Ligadura æ (\\AE para Æ)",
        "\\oe": "Ligadura œ (\\OE para Œ)",
        "\\o": "O barrada ø (\\O para Ø)",
        "\\aa": "A con anillo å (\\AA para Å)",
        "\\ss": "Eszett alemana ß",
        "\\l": "Ł polaca ł (\\L para Ł)",
        "\\i": "I sin punto, base para acentos",
        "\\'e": "Acento agudo é",
        "\\\"o": "Diéresis ö",
        "\\~n": "Tilde ñ",
        "\\c{c}": "Cedilla ç",
        "\\v{s}": "Carón (háček) š",
      },
      faqHeading: "Preguntas frecuentes sobre las letras latinas en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo letras latinas especiales como æ, ø y ß en LaTeX?",
          answer:
            "Cada una tiene un comando integrado de modo texto: \\ae y \\AE para æ y Æ, \\oe y \\OE para œ y Œ, \\o y \\O para ø y Ø, \\aa y \\AA para å y Å, \\ss para ß, y \\l y \\L para ł y Ł. Desde 2018 LaTeX también lee UTF-8, así que puedes escribir las letras directamente.",
        },
        {
          question: "¿Cómo uso estos caracteres latinos en modo matemático?",
          answer:
            "Los comandos solo funcionan en modo texto, así que enciérralos en \\text{...} de amsmath, como en $x_{\\text{\\ae}}$. En modo matemático las letras sin punto tienen sus propios comandos, \\imath y \\jmath, que se usan para vectores con acento como \\hat{\\imath}.",
        },
        {
          question: "¿Por qué las letras acentuadas no se copian ni se dividen bien en mi PDF?",
          answer:
            "Con la codificación de fuente OT1 predeterminada, LaTeX construye las letras acentuadas a partir de dos piezas. Añade \\usepackage[T1]{fontenc} al preámbulo para que é, ö y ñ sean glifos únicos que se dividan en sílabas, se busquen y se copien correctamente.",
        },
      ],
    },
    "linear-algebra": {
      title: "Símbolos de álgebra lineal en LaTeX: matrices, vectores, traspuesta y normas",
      intro: (
        <IntroP>
          El álgebra lineal en LaTeX empieza con los entornos de matrices de amsmath:{" "}
          <Cmd>{"pmatrix"}</Cmd> para paréntesis, <Cmd>{"bmatrix"}</Cmd> para corchetes y{" "}
          <Cmd>{"vmatrix"}</Cmd> para un determinante. Un vector es <Cmd>{"\\mathbf{v}"}</Cmd> o{" "}
          <Cmd>{"\\vec{v}"}</Cmd>, la traspuesta es <Cmd>{"A^\\top"}</Cmd> (o <Cmd>{"A^T"}</Cmd>),
          la inversa <Cmd>{"A^{-1}"}</Cmd>, la traspuesta conjugada <Cmd>{"A^\\dagger"}</Cmd> y la
          norma <Cmd>{"\\|x\\|"}</Cmd>. El determinante <Cmd>{"\\det"}</Cmd> está integrado,
          mientras que la traza y el rango se escriben mejor con{" "}
          <Cmd>{"\\operatorname{tr}"}</Cmd> y <Cmd>{"\\operatorname{rank}"}</Cmd>. La tabla recoge
          los símbolos de álgebra lineal más usados, con el paquete que necesita cada uno; la
          lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: matrices, vectores y operaciones",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "Matriz entre paréntesis",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "Matriz entre corchetes",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "Barras de determinante",
        "\\mathbf{v}": "Vector en negrita",
        "\\vec{v}": "Vector con flecha",
        "A^\\top": "Traspuesta",
        "A^{-1}": "Inversa",
        "A^\\dagger": "Traspuesta conjugada",
        "\\det(A)": "Determinante",
        "\\operatorname{tr}(A)": "Traza",
        "\\|x\\|_2": "Norma euclídea",
        "\\langle u, v \\rangle": "Producto escalar (producto interno)",
      },
      faqHeading: "Preguntas frecuentes sobre el álgebra lineal en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo una matriz en LaTeX?",
          answer:
            "Carga amsmath y usa un entorno de matrices en modo matemático, separando las columnas con & y las filas con \\\\: \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix da paréntesis, bmatrix corchetes, Bmatrix llaves, vmatrix barras simples para un determinante y Vmatrix barras dobles.",
        },
        {
          question: "¿Cómo escribo la traspuesta en LaTeX?",
          answer:
            "Escribe A^\\top, que imprime una T pequeña, o simplemente A^T, o A^\\intercal de amssymb. Elige una forma y úsala de manera coherente; A^\\top es habitual en los textos actuales porque no se confunde con una variable T.",
        },
        {
          question: "¿Cómo escribo un vector en LaTeX?",
          answer:
            "Usa \\mathbf{v} para un vector en negrita o \\vec{v} para un acento de flecha; \\boldsymbol{v} de amsmath también funciona con letras griegas. Un vector columna es una matriz de una sola columna: \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
        },
      ],
    },
    "machine-learning": {
      title: "Símbolo del gradiente en LaTeX y otra notación de aprendizaje automático",
      intro: (
        <IntroP>
          El símbolo del gradiente en LaTeX es <Cmd>{"\\nabla"}</Cmd>, que imprime &nabla; y no
          necesita ningún paquete: escribe <Cmd>{"\\nabla f"}</Cmd> para el gradiente de{" "}
          <Cmd>{"f"}</Cmd>, o <Cmd>{"\\nabla_\\theta \\mathcal{L}"}</Cmd> para el gradiente de una
          función de pérdida respecto a los parámetros. Las derivadas parciales usan{" "}
          <Cmd>{"\\partial"}</Cmd>, las predicciones son <Cmd>{"\\hat{y}"}</Cmd>, la esperanza es{" "}
          <Cmd>{"\\mathbb{E}"}</Cmd> y el argmax es <Cmd>{"\\operatorname*{arg\\,max}"}</Cmd>. La
          tabla recoge los comandos más usados para escribir un gradiente en LaTeX, con el paquete
          que necesita cada uno; la lista completa de símbolos de aprendizaje automático aparece
          más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: gradientes, pérdidas y optimización",
      use: {
        "\\nabla": "Símbolo del gradiente (nabla)",
        "\\nabla_\\theta \\mathcal{L}": "Gradiente de la pérdida respecto a θ",
        "\\partial": "Derivada parcial",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "Derivada parcial de la pérdida",
        "\\mathcal{L}": "Función de pérdida",
        "\\theta": "Parámetros del modelo",
        "\\hat{y}": "Predicción, estimación",
        "\\mathbb{E}": "Esperanza",
        "\\operatorname*{arg\\,max}_\\theta": "Argmax con el subíndice debajo",
        "\\operatorname*{arg\\,min}_\\theta": "Argmin con el subíndice debajo",
        "\\|w\\|_2": "Norma L2 de los pesos",
        "\\odot": "Producto de Hadamard (elemento a elemento)",
      },
      faqHeading: "Preguntas frecuentes sobre la notación de aprendizaje automático en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo el símbolo del gradiente en LaTeX?",
          answer:
            "El símbolo del gradiente ∇ es \\nabla, está integrado en LaTeX y se usa en modo matemático: $\\nabla f$. Pon la variable respecto a la que derivas como subíndice, como en \\nabla_\\theta \\mathcal{L}(\\theta), y escribe el laplaciano como \\nabla^2 f. No necesita ningún paquete.",
        },
        {
          question: "¿Cómo escribo una derivada parcial en LaTeX?",
          answer:
            "Usa \\partial: \\frac{\\partial f}{\\partial x} para una primera derivada y \\frac{\\partial^2 f}{\\partial x^2} para una segunda derivada. Una componente del gradiente se escribe igual, por ejemplo \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
        },
        {
          question: "¿Cómo escribo argmax y argmin en LaTeX?",
          answer:
            "Con amsmath, escribe \\operatorname*{arg\\,max}_\\theta f(\\theta); el asterisco coloca el subíndice debajo en las fórmulas destacadas. Si lo usas a menudo, decláralo una vez en el preámbulo con \\DeclareMathOperator*{\\argmax}{arg\\,max} y luego escribe \\argmax_\\theta. El atajo \\arg\\max_\\theta también funciona, pero entonces el subíndice queda solo debajo de max y no debajo de todo arg max.",
        },
        {
          question: "¿Cómo escribo la esperanza y la función de pérdida en LaTeX?",
          answer:
            "La esperanza es la E de pizarra \\mathbb{E}, que necesita \\usepackage{amssymb}, como en \\mathbb{E}_{x \\sim p}[f(x)]. La función de pérdida suele ser una L caligráfica, \\mathcal{L}, que está integrada.",
        },
      ],
    },
    "modal-logic": {
      title: "Símbolos de lógica modal en LaTeX: caja, diamante y semántica de Kripke",
      intro: (
        <IntroP>
          Los dos símbolos básicos de la lógica modal en LaTeX son <Cmd>{"\\Box"}</Cmd> para la
          necesidad (□) y <Cmd>{"\\Diamond"}</Cmd> para la posibilidad (◇), ambos de amssymb;{" "}
          <Cmd>{"\\Box p"}</Cmd> se lee «es necesario que p» y <Cmd>{"\\Diamond p"}</Cmd> «es
          posible que p». La semántica de Kripke usa <Cmd>{"\\models"}</Cmd> (integrado) o{" "}
          <Cmd>{"\\Vdash"}</Cmd>, como en <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, con una
          relación de accesibilidad <Cmd>{"wRv"}</Cmd>. La lógica epistémica escribe el
          conocimiento como <Cmd>{"K_a p"}</Cmd>, y la lógica temporal añade{" "}
          <Cmd>{"\\bigcirc p"}</Cmd> para «siguiente» y <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd>{" "}
          para «hasta». La tabla recoge los símbolos de lógica modal más usados, con el paquete
          que necesita cada uno; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: operadores modales, epistémicos y temporales",
      use: {
        "\\Box p": "Necesariamente p",
        "\\Diamond p": "Posiblemente p",
        "\\Box(p \\to q)": "Necesidad de una implicación (axioma K)",
        "\\neg\\Box\\neg p": "No necesariamente no p, equivale a \\Diamond p",
        "\\mathcal{M}, w \\models p": "p es verdadera en el mundo w",
        "w \\Vdash p": "Forzamiento, satisfacción",
        "wRv": "Relación de accesibilidad",
        "K_a p": "El agente a sabe p",
        "B_a p": "El agente a cree p",
        "C_G p": "Conocimiento común en el grupo G",
        "\\bigcirc p": "Siguiente (lógica temporal)",
        "p \\mathbin{\\mathcal{U}} q": "Hasta (lógica temporal)",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de lógica modal en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo los símbolos de caja y diamante en LaTeX?",
          answer:
            "Carga \\usepackage{amssymb} y escribe \\Box p para la necesidad y \\Diamond p para la posibilidad. El paquete latexsym ofrece los mismos dos comandos. Ten en cuenta que el comando integrado \\diamond es un pequeño operador binario, no el diamante modal.",
        },
        {
          question: "¿Cómo escribo el símbolo de satisfacción (doble torniquete) en LaTeX?",
          answer:
            "\\models está integrado e imprime ⊨, como en $\\mathcal{M}, w \\models \\varphi$. amssymb añade \\vDash (⊨), \\Vdash (⊩) para el forzamiento y \\nvDash para «no satisface»; \\vdash (⊢) para la derivabilidad está integrado.",
        },
        {
          question: "¿Cómo escribo «hasta» y «siguiente» de la lógica temporal en LaTeX?",
          answer:
            "Usa \\bigcirc p para «siguiente», y convierte la U caligráfica en un operador binario para «hasta»: p \\mathbin{\\mathcal{U}} q, que da el espaciado correcto. «Siempre» y «finalmente» suelen escribirse \\Box p y \\Diamond p, o \\mathbf{G} p y \\mathbf{F} p.",
        },
      ],
    },
    "number-theory": {
      title: "Símbolos de teoría de números en LaTeX",
      intro: (
        <IntroP>
          El módulo y la operación mod en LaTeX tienen varias formas: <Cmd>{"\\bmod"}</Cmd> para un
          resto, <Cmd>{"\\pmod{n}"}</Cmd> tras una congruencia, y <Cmd>{"\\lvert z \\rvert"}</Cmd>{" "}
          para el módulo (valor absoluto) de un número. La tabla recoge los ocho comandos más
          usados, con el paquete que necesita cada uno; la lista completa de símbolos de teoría de
          números aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: divisibilidad y aritmética modular",
      use: {
        "a \\bmod n": "Módulo como operación binaria",
        "a \\equiv b \\pmod{n}": "Congruencia con (mod n)",
        "a \\equiv b \\mod{n}": "Congruencia sin paréntesis",
        "\\lvert z \\rvert": "Módulo / valor absoluto",
        "a \\mid b": "a divide a b",
        "a \\nmid b": "a no divide a b",
        "\\gcd(a, b)": "Máximo común divisor",
        "\\operatorname{lcm}(a, b)": "Mínimo común múltiplo",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de teoría de números en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo mod (módulo) en LaTeX?",
          answer:
            "Usa \\bmod para la operación binaria, como en a \\bmod n, y \\pmod{n} tras una congruencia: a \\equiv b \\pmod{n} añade los paréntesis y el espaciado por ti. amsmath también ofrece \\mod{n} (sin paréntesis) y \\pod{n} (paréntesis sin la palabra mod).",
        },
        {
          question: "¿Cómo escribo el módulo (valor absoluto) en LaTeX?",
          answer:
            "Escribe \\lvert z \\rvert con amsmath, o \\left| z \\right| cuando las barras deban crecer con un contenido alto. Si lo usas a menudo, mathtools te permite declarar \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert} y luego escribir \\abs{z}.",
        },
        {
          question: "¿Cómo escribo «divide a» en LaTeX?",
          answer:
            "Usa \\mid, como en a \\mid b, que LaTeX espacia como una relación; una | sin más queda demasiado apretada. La negación \\nmid (a no divide a b) necesita \\usepackage{amssymb}.",
        },
      ],
    },
    operators: {
      title: "Operadores en LaTeX: más en círculo, por, punto y operadores grandes",
      intro: (
        <IntroP>
          Los operadores de LaTeX se dividen en dos grupos. Los operadores binarios se colocan
          entre dos términos con un espaciado medio: <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\cdot"}</Cmd>,{" "}
          <Cmd>{"\\ast"}</Cmd>, <Cmd>{"\\circ"}</Cmd> y la familia de operadores en círculo{" "}
          <Cmd>{"\\oplus"}</Cmd> (más en círculo, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗),{" "}
          <Cmd>{"\\odot"}</Cmd> (⊙) y <Cmd>{"\\ominus"}</Cmd>. Los operadores grandes admiten
          límites y crecen en las fórmulas destacadas: <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>,{" "}
          <Cmd>{"\\bigoplus"}</Cmd>, <Cmd>{"\\bigotimes"}</Cmd> y <Cmd>{"\\bigcup"}</Cmd>. Todos
          están integrados. Los operadores con nombre como <Cmd>{"\\max"}</Cmd>,{" "}
          <Cmd>{"\\sin"}</Cmd> y <Cmd>{"\\det"}</Cmd> están predefinidos, y puedes declarar los
          tuyos con <Cmd>{"\\DeclareMathOperator"}</Cmd> de amsmath. La tabla recoge los
          operadores de LaTeX más usados; la lista completa aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: operadores binarios y grandes",
      use: {
        "\\oplus": "Más en círculo: suma directa, XOR",
        "\\otimes": "Por en círculo: producto tensorial",
        "\\odot": "Punto en círculo: producto de Hadamard",
        "\\ominus": "Menos en círculo",
        "\\oslash": "Barra en círculo",
        "\\times": "Producto vectorial, multiplicación",
        "\\cdot": "Punto centrado",
        "\\ast": "Operador asterisco, convolución",
        "\\circ": "Composición",
        "\\star": "Operador estrella",
        "\\bigoplus_{i=1}^{n} V_i": "Suma directa sobre un índice",
        "\\bigotimes_{i=1}^{n} V_i": "Producto tensorial sobre un índice",
      },
      faqHeading: "Preguntas frecuentes sobre los operadores en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo el más en círculo en LaTeX?",
          answer:
            "Usa \\oplus para ⊕, el más en círculo que se usa para sumas directas y XOR. Es un operador binario integrado: $A \\oplus B$. Para una suma directa de muchos términos, usa el operador grande \\bigoplus_{i=1}^{n} V_i.",
        },
        {
          question: "¿Cómo escribo el operador odot (punto en círculo) en LaTeX?",
          answer:
            "\\odot imprime ⊙ y se usa para el producto de Hadamard (elemento a elemento), $A \\odot B$. La versión grande es \\bigodot. Ambos están integrados.",
        },
        {
          question: "¿Cómo defino un operador nuevo en LaTeX?",
          answer:
            "Carga amsmath y escribe \\DeclareMathOperator{\\Tr}{Tr} en el preámbulo; entonces \\Tr(A) imprime Tr en letra recta con el espaciado de operador. Usa \\DeclareMathOperator* cuando los límites deban ir debajo, como en \\argmax. Para un uso puntual, \\operatorname{Tr} hace lo mismo dentro de la fórmula.",
        },
      ],
    },
    optimization: {
      title: "Símbolos de optimización en LaTeX: argmax, argmin y restricciones",
      intro: (
        <IntroP>
          La notación de optimización en LaTeX gira en torno a <Cmd>{"\\min"}</Cmd>,{" "}
          <Cmd>{"\\max"}</Cmd> y sus versiones arg. <Cmd>{"\\min_{x}"}</Cmd> y{" "}
          <Cmd>{"\\max_{x}"}</Cmd> están integrados y colocan la variable debajo del operador en
          las fórmulas destacadas, pero no existe un <Cmd>{"\\argmax"}</Cmd> integrado: escribe{" "}
          <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> o declara <Cmd>{"\\argmax"}</Cmd> una vez con{" "}
          <Cmd>{"\\DeclareMathOperator*"}</Cmd> de amsmath. Las restricciones siguen a{" "}
          <Cmd>{"\\text{s.t.}"}</Cmd> («sujeto a»), el lagrangiano es{" "}
          <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, el óptimo es <Cmd>{"x^*"}</Cmd>, y las
          restricciones semidefinidas usan <Cmd>{"\\succeq 0"}</Cmd>. La tabla recoge los símbolos
          de optimización más usados, con el paquete que necesita cada uno; la lista completa
          aparece más abajo.
        </IntroP>
      ),
      quickRefHeading: "Referencia rápida: objetivos, restricciones y optimalidad",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "Argmax con la variable debajo",
        "\\operatorname*{arg\\,min}_{x} f(x)": "Argmin con la variable debajo",
        "\\min_{x \\in \\mathcal{X}} f(x)": "Minimizar sobre un conjunto",
        "\\max_{x} f(x)": "Maximizar",
        "\\text{s.t.}": "Sujeto a (en español también \\text{s.a.})",
        "g_i(x) \\leq 0": "Restricción de desigualdad",
        "h_j(x) = 0": "Restricción de igualdad",
        "\\mathcal{L}(x, \\lambda)": "Lagrangiano",
        "\\nabla f(x^*) = 0": "Condición de optimalidad de primer orden",
        "\\nabla^2 f(x)": "Matriz hessiana",
        "X \\succeq 0": "Semidefinida positiva",
        "\\lambda_i \\geq 0": "Variables duales (multiplicadores)",
      },
      faqHeading: "Preguntas frecuentes sobre los símbolos de optimización en LaTeX",
      faq: [
        {
          question: "¿Cómo escribo argmax en LaTeX?",
          answer:
            "Escribe \\operatorname*{arg\\,max}_{x} f(x) con amsmath; el asterisco coloca x debajo del operador en las fórmulas destacadas. Para reutilizarlo, añade \\DeclareMathOperator*{\\argmax}{arg\\,max} al preámbulo y escribe \\argmax_x f(x). \\arg\\max también imprime arg max, pero su subíndice se asocia solo a max.",
        },
        {
          question: "¿Cómo escribo un problema de optimización con restricciones en LaTeX?",
          answer:
            "Pon el objetivo y las restricciones en un entorno aligned: \\min_{x} \\quad & f(x) \\\\ \\text{s.a.} \\quad & g(x) \\leq 0. El paquete optidef ofrece los entornos mini y maxi, que alinean el objetivo y las restricciones por ti.",
        },
        {
          question: "¿Cómo escribo «sujeto a» en LaTeX?",
          answer:
            "Usa \\text{s.a.} o \\text{sujeto a} de amsmath (en inglés, \\text{s.t.}) para que las palabras aparezcan en texto recto con el espaciado normal. Si escribes s.a. directamente en modo matemático, se imprimen las variables s y a en cursiva.",
        },
      ],
    },
  },
};

export default es;
