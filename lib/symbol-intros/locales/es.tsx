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
  },
};

export default es;
