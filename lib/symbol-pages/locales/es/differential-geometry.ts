import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  "manifold": {
    name: "Variedad",
    meaning: "M caligráfica, la forma estándar de nombrar una variedad diferenciable en los artículos de geometría diferencial y topología.",
    usage: "Escribir \\mathcal{M} en lugar de una M cursiva simple indica que el objeto es un espacio y no una matriz o un número, lo que ayuda cuando la M ya está ocupada. Las cartas se escriben \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n y la dimensión como \\dim \\mathcal{M} = n. La misma letra designa también los modelos de Kripke en lógica y los espacios de móduli en geometría algebraica, así que defínela una vez en el texto. \\mathcal solo tiene glifos fiables para las mayúsculas latinas; para una M de escritura más curvada usa \\mathscr{M}, y mantén un único estilo en todo el artículo.",
  },
  "tangent-space": {
    name: "Espacio tangente",
    meaning: "Espacio tangente de la variedad M en el punto p: el espacio vectorial de todos los vectores velocidad de las curvas que pasan por p.",
    usage: "Para una variedad de dimensión n, T_p M es un espacio vectorial real de dimensión n con base coordenada \\partial/\\partial x^i en p. La diferencial de una aplicación diferenciable se escribe dF_p: T_p M \\to T_{F(p)} N, y un campo vectorial asigna a cada p un elemento de T_p M. En modo matemático el espacio entre T_p y M se ignora, así que el resultado es el compacto T_pM en ambos casos; añade \\, si quieres una separación visible. Si la variedad se llama \\mathcal{M}, escribe T_p\\mathcal{M} por coherencia.",
  },
  "cotangent-space": {
    name: "Espacio cotangente",
    meaning: "Espacio cotangente en p: el dual de T_p M, formado por las formas lineales (covectores) sobre los vectores tangentes en p.",
    usage: "Los elementos de T^*_p M son covectores como la diferencial df_p, y las diferenciales coordenadas dx^i forman la base dual de \\partial/\\partial x^i. Colocar el asterisco antes o después del subíndice (T^*_p M frente a T_p^* M) produce el mismo resultado, ya que TeX apila el superíndice y el subíndice sea cual sea su orden. Usa ^* en lugar de ^{\\ast} solo por brevedad; ambos dan el mismo asterisco. La métrica identifica T_p M con T^*_p M bajando un índice, y así es como los gradientes se convierten en covectores.",
  },
  "tangent-bundle": {
    name: "Fibrado tangente",
    meaning: "Fibrado tangente: la unión disjunta de todos los espacios tangentes T_p M, que es a su vez una variedad del doble de dimensión que M.",
    usage: "Un punto de TM es un par (p, v) con v \\in T_p M, y la proyección \\pi: TM \\to M olvida el vector. Un campo vectorial es precisamente una sección diferenciable X: M \\to TM con \\pi \\circ X = \\mathrm{id}. La aplicación tangente (push-forward) de F: M \\to N suele escribirse TF o dF: TM \\to TN. Como TeX compone las dos letras cursivas sin separación, TM se lee correctamente como un único nombre; si es posible la confusión con un producto T \\cdot M, menciónalo en el texto.",
  },
  "cotangent-bundle": {
    name: "Fibrado cotangente",
    meaning: "Fibrado cotangente: el fibrado de todos los espacios cotangentes de M, el espacio de fases natural de la mecánica hamiltoniana.",
    usage: "Los puntos de T^*M son pares (q, p) formados por una posición y un covector, por eso la mecánica clásica vive aquí. Está dotado de una forma simpléctica canónica \\omega = dq^i \\wedge dp_i, y las 1-formas sobre M son secciones de T^*M. Las formas de grado superior son secciones de \\Lambda^k T^*M, escritas con \\Lambda o \\bigwedge^k. El asterisco es un superíndice, así que T^*M y T^{*}M se ven igual; evita T*M sin el acento circunflejo, que coloca una estrella de tipo binario sobre la línea base.",
  },
  "covariant-derivative": {
    name: "Derivada covariante",
    meaning: "Derivada covariante del campo vectorial Y en la dirección X, definida por una conexión afín \\nabla.",
    usage: "Una conexión afín es lineal sobre las funciones en X y satisface la regla de Leibniz \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y. La conexión de Levi-Civita es la única sin torsión y compatible con la métrica, lo que da \\nabla_X Y - \\nabla_Y X = [X, Y]. En coordenadas se reduce a \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j. La dirección en subíndice se compone en tamaño pequeño; para expresiones largas como \\nabla_{\\dot\\gamma}\\dot\\gamma, pon el subíndice entre llaves para que el punto siga unido.",
  },
  "christoffel-symbol": {
    name: "Símbolo de Christoffel",
    meaning: "Símbolos de Christoffel: los coeficientes de la conexión, que indican cómo cambian los vectores de la base coordenada de un punto a otro.",
    usage: "Para la conexión de Levi-Civita se calculan a partir de la métrica como \\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}), y son simétricos en i y j. No son las componentes de un tensor, por eso pueden anularse en un punto en coordenadas normales. Las letras griegas mayúsculas van en redonda por defecto en LaTeX; si tu estilo las quiere en cursiva, usa \\varGamma. Algunos textos antiguos escriben los de segunda especie con un símbolo de llaves, pero la forma \\Gamma es la estándar hoy.",
  },
  "riemann-curvature": {
    name: "Tensor de curvatura de Riemann",
    meaning: "Componentes del tensor de curvatura de Riemann, que mide cómo el transporte paralelo a lo largo de un pequeño lazo no devuelve un vector a su estado inicial.",
    usage: "Con una convención habitual, R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}, pero el signo y el orden de los índices varían entre libros de texto, así que indica el tuyo. Escrito como R^l_{ijk}, TeX apila la l justo encima de la i y oculta qué posición está subida; para escalonar los índices usa R^l{}_{ijk}, donde el grupo vacío desplaza el subíndice a la derecha. Bajar el primer índice da R_{lijk}, que con las convenciones habituales es antisimétrico en su primer par y en su último par de posiciones, pero comprueba la colocación de índices de tu fuente antes de citar identidades.",
  },
  "ricci-tensor": {
    name: "Tensor de Ricci",
    meaning: "Tensor de Ricci: la traza del tensor de Riemann sobre un par de índices, una magnitud de curvatura simétrica de dos índices.",
    usage: "Se obtiene por contracción, R_{ij} = R^k_{ikj} en una convención habitual, y rige la distorsión del volumen a lo largo de las geodésicas. Las ecuaciones de campo de Einstein se escriben R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}, y una variedad con R_{ij} = \\lambda g_{ij} se llama de Einstein. Los físicos suelen usar índices griegos \\mu\\nu, y los matemáticos latinos ij. Ricci-plana significa R_{ij} = 0, la condición que define las métricas de Calabi-Yau. Algunos autores escriben \\mathrm{Ric} para el tensor sin coordenadas; \\operatorname{Ric} da el mismo texto en redonda con espaciado de operador.",
  },
  "scalar-curvature": {
    name: "Curvatura escalar",
    meaning: "Curvatura escalar: la traza completa del tensor de Ricci, un único número en cada punto de una variedad riemanniana.",
    usage: "Se define como R = g^{ij} R_{ij}, y en dimensión dos es igual al doble de la curvatura de Gauss K. La acción de Einstein-Hilbert la integra, S = \\int R \\sqrt{-g}\\, d^4x, y el problema de Yamabe busca una métrica conforme de R constante. Como una R sola también designa los reales, una relación o un radio, muchos autores escriben \\mathrm{Scal} o s; nunca uses R para \\mathbb{R} en el mismo artículo. Compónla como una R cursiva simple en modo matemático.",
  },
  "metric-tensor": {
    name: "Tensor métrico",
    meaning: "Componentes del tensor métrico, la forma simétrica definida positiva que define longitudes y ángulos en una variedad.",
    usage: "El elemento de línea se escribe ds^2 = g_{ij}\\, dx^i dx^j con suma implícita, y la longitud de una curva es \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt. En relatividad la métrica es lorentziana y se indexa g_{\\mu\\nu}, por ejemplo la métrica de Minkowski \\eta_{\\mu\\nu}. Su determinante aparece en la forma de volumen \\sqrt{\\det g}\\, dx^1 \\cdots dx^n, a menudo abreviado \\sqrt{g}. Añade espacios finos con \\, entre la métrica y las diferenciales para que ds^2 = g_{ij}\\,dx^i\\,dx^j no quede apretado. En forma matricial suele escribirse (g_{ij}) o simplemente g.",
  },
  "inverse-metric": {
    name: "Métrica inversa",
    meaning: "Métrica inversa: la matriz inversa de g_{ij}, usada para subir índices y formar trazas y gradientes.",
    usage: "Se define mediante g^{ij} g_{jk} = \\delta^i_k, así que en una referencia ortonormal es igual a la identidad. Subir un índice la usa directamente, v^i = g^{ij} v_j, y el gradiente de una función tiene componentes (\\nabla f)^i = g^{ij}\\partial_j f. El operador de Laplace-Beltrami es \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f). No confundas g^{ij} con el inverso de una sola componente; es una entrada de la matriz inversa, así que g^{11} \\ne 1/g_{11} salvo que la métrica sea diagonal.",
  },
  "exterior-derivative": {
    name: "Derivada exterior",
    meaning: "Derivada exterior de una forma diferencial \\omega, que aumenta su grado en uno y generaliza el gradiente, el rotacional y la divergencia.",
    usage: "El operador satisface d \\circ d = 0 y la regla de Leibniz graduada d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta para una k-forma \\alpha. El teorema de Stokes se convierte en \\int_M d\\omega = \\int_{\\partial M} \\omega, y una forma es cerrada cuando d\\omega = 0 y exacta cuando \\omega = d\\eta. Muchos estilos componen el operador en redonda, \\mathrm{d}\\omega, para distinguirlo de una variable d; elijas lo que elijas, úsalo de forma coherente, también en integrales como \\int f\\, dx.",
  },
  "wedge-product": {
    name: "Producto exterior",
    meaning: "Producto exterior (cuña) de dos formas diferenciales, un producto antisimétrico que construye formas de grado superior.",
    usage: "Para una k-forma \\alpha y una l-forma \\beta es conmutativo graduado, \\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha, así que una 1-forma multiplicada exteriormente por sí misma es cero. Las formas de volumen se escriben dx^1 \\wedge \\cdots \\wedge dx^n. \\wedge es un operador binario, así que TeX añade un espacio medio a ambos lados; \\land produce el mismo glifo y conviene reservarlo para la conjunción lógica. Para la potencia exterior o una cuña grande sobre un conjunto de índices, usa \\bigwedge, como en \\bigwedge^k V.",
  },
  "lie-derivative": {
    name: "Derivada de Lie",
    meaning: "Derivada de Lie a lo largo del campo vectorial X, que mide cómo cambia un tensor bajo el flujo generado por X.",
    usage: "Sobre funciones es simplemente \\mathcal{L}_X f = Xf, sobre campos vectoriales es el corchete de Lie \\mathcal{L}_X Y = [X, Y], y sobre formas la fórmula mágica de Cartan da \\mathcal{L}_X = d\\iota_X + \\iota_X d. A diferencia de \\nabla_X, no necesita conexión ni métrica. Un campo de Killing satisface \\mathcal{L}_X g = 0. La L caligráfica es la elección habitual; \\pounds_X aparece en algunos textos de relatividad, pero \\mathcal{L} es más clara. Evita confundirla con un lagrangiano \\mathcal{L} en artículos de física que usen ambos.",
  },
  "lie-bracket": {
    name: "Corchete de Lie",
    meaning: "Corchete de Lie de dos campos vectoriales: el campo vectorial que actúa sobre las funciones como X(Yf) - Y(Xf).",
    usage: "El corchete es bilineal, antisimétrico y cumple la identidad de Jacobi [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0, lo que hace de los campos vectoriales un álgebra de Lie. En coordenadas sus componentes son X^j\\partial_j Y^i - Y^j\\partial_j X^i. La misma notación de corchetes designa el conmutador AB - BA de matrices u operadores cuánticos. Los [ y ] simples sirven para argumentos cortos; para contenidos altos usa \\left[ \\right] o \\bigl[ \\bigr] para que los corchetes se ajusten. Mide hasta qué punto los flujos de X e Y no conmutan, y los campos vectoriales coordenados siempre satisfacen [\\partial_i, \\partial_j] = 0.",
  },
  "connection-form": {
    name: "Forma de conexión",
    meaning: "Formas de conexión: una matriz de 1-formas que describe una conexión respecto de una referencia elegida del fibrado.",
    usage: "En el método de la referencia móvil de Cartan con correferencia e^i, la primera ecuación de estructura para una conexión sin torsión es de^i = -\\omega^i_j \\wedge e^j. Para una conexión métrica en una referencia ortonormal la matriz es antisimétrica, \\omega_{ij} = -\\omega_{ji}. Los físicos llaman al mismo objeto conexión de espín, \\omega^a{}_b. Usa \\omega^i{}_j para escalonar los índices cuando su orden importa, y no la confundas con una forma simpléctica o de Kähler, que también se escribe \\omega. Bajo un cambio de referencia se transforma de manera no homogénea, así que, como los símbolos de Christoffel, no es un tensor.",
  },
  "curvature-form": {
    name: "Forma de curvatura",
    meaning: "Formas de curvatura: una matriz de 2-formas que codifica la curvatura de una conexión en una referencia dada.",
    usage: "La segunda ecuación de estructura de Cartan las define como \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j, o de forma compacta \\Omega = d\\omega + \\omega \\wedge \\omega. Desarrollarlas en la correferencia recupera el tensor de Riemann, \\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l. La teoría de Chern-Weil construye clases características como \\operatorname{tr}(\\Omega \\wedge \\Omega) a partir de estas formas. La \\Omega mayúscula va en redonda por defecto; \\varOmega da una versión en cursiva. La misma letra denota también el espacio de formas \\Omega^k(M), así que el contexto debe aclarar el significado.",
  },
  "geodesic": {
    name: "Geodésica",
    meaning: "Una curva en una variedad parametrizada por t; en este contexto, una geodésica, la curva con aceleración covariante nula.",
    usage: "Una geodésica satisface \\nabla_{\\dot\\gamma}\\dot\\gamma = 0, que en coordenadas es \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0. Los datos iniciales \\gamma(0) = p y \\dot\\gamma(0) = v definen la aplicación exponencial \\exp_p(v) = \\gamma(1). Usa \\dot{\\gamma} y \\ddot{\\gamma} para las derivadas temporales; \\gamma'(t) es la alternativa cuando t no es el tiempo. Escribe \\dot\\gamma^k en lugar de \\dot{\\gamma^k} para que el punto quede solo sobre la letra, y mantén \\gamma en minúscula, ya que \\Gamma se reserva para los símbolos de Christoffel. En una esfera redonda las geodésicas son arcos de círculos máximos.",
  },
  "parallel-transport": {
    name: "Transporte paralelo",
    meaning: "Transporte paralelo a lo largo de la curva \\gamma: la aplicación lineal que lleva vectores de un espacio tangente a otro sin girarlos.",
    usage: "Es una aplicación P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M y, para una conexión compatible con la métrica, es una isometría. El transporte a lo largo de lazos cerrados genera el grupo de holonomía, cuya no trivialidad refleja la curvatura. Algunos textos escriben \\tau_\\gamma, \\Pi_\\gamma o P^\\gamma_{t \\leftarrow s} para registrar los extremos. Con un subíndice de una sola letra, las llaves de P_{\\gamma} son opcionales, pero mantenlas cuando el subíndice crece, como en P_{\\gamma|[0,t]}. Un campo vectorial V es paralelo a lo largo de \\gamma cuando \\nabla_{\\dot\\gamma} V = 0, y P_\\gamma lleva V(0) a V(1). Alrededor de un lazo pequeño, el transporte difiere de la identidad en un término proporcional a la curvatura.",
  },
};

export default text;
