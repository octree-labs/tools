import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "Constante de Planck reducida (h barra)",
    meaning: "Constante de Planck reducida ħ = h/2π, el cuanto de momento angular que aparece en toda la mecánica cuántica.",
    usage: "Aparece en el conmutador canónico [x, p] = i\\hbar, en la energía del fotón E = \\hbar\\omega y en la relación de incertidumbre \\Delta x\\, \\Delta p \\geq \\hbar/2. Su valor es de aproximadamente 1.055 \\times 10^{-34} J s. \\hslash es una variante con una barra inclinada en lugar de horizontal; elige una y mantenla. La h sin barra es la constante no reducida de E = h\\nu. En trabajos teóricos lo habitual son las unidades con \\hbar = 1, así que menciona esa elección cuando la elimines de las ecuaciones.",
  },
  "bra-vector": {
    name: "Vector bra",
    meaning: "Un bra en notación de Dirac: el vector dual (fila), un funcional lineal que actúa sobre los kets.",
    usage: "El bra \\langle \\psi | es la traspuesta conjugada del ket |\\psi\\rangle, así que es lo que colocas a la izquierda de un producto interno o de un valor esperado. Usa \\langle, nunca el signo menor que <, que es una relación con espaciado amplio y la forma equivocada. Aquí basta con una | simple, pero \\rvert da el espaciado correcto de delimitador de cierre. Si lo usas a menudo, define \\newcommand{\\bra}[1]{\\langle #1 \\rvert}. Cuando la etiqueta del estado es alta, \\left\\langle \\frac{\\psi}{2} \\right| escala ambos delimitadores a la vez.",
  },
  "ket-vector": {
    name: "Vector ket",
    meaning: "Un ket en notación de Dirac, que representa un estado cuántico como vector columna en un espacio de Hilbert.",
    usage: "Los estados son kets: |0\\rangle y |1\\rangle para un cúbit, |n\\rangle para los niveles del oscilador armónico, y superposiciones como \\alpha|0\\rangle + \\beta|1\\rangle. El corchete angular es \\rangle, no >. Escribir \\lvert \\psi \\rangle le da a TeX un delimitador de apertura explícito, de modo que el espaciado es correcto incluso después de un signo menos. Una macro como \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} mantiene coherentes cientos de kets. Los productos tensoriales se escriben |\\psi\\rangle \\otimes |\\phi\\rangle o, en forma compacta, |\\psi\\phi\\rangle. Un ket por un bra, |\\psi\\rangle\\langle\\psi|, es un proyector o una matriz densidad.",
  },
  "braket": {
    name: "Braket (producto bra-ket)",
    meaning: "Producto interno de dos estados, un bra que se encuentra con un ket; el cuadrado de su módulo da una probabilidad de transición.",
    usage: "La amplitud \\langle \\phi | \\psi \\rangle es simétrica conjugada, \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*, y la normalización se escribe \\langle \\psi | \\psi \\rangle = 1. Los elementos de matriz encierran un operador: \\langle \\phi | \\hat{A} | \\psi \\rangle. Usa una | simple en el medio en lugar de \\mid, cuyo espaciado de relación separa las dos mitades. Para contenidos altos, \\left\\langle \\phi \\middle| \\psi \\right\\rangle hace que también crezca la barra central. Los matemáticos escriben lo mismo como (\\phi, \\psi) o \\langle \\phi, \\psi \\rangle, con una coma.",
  },
  "laplacian": {
    name: "Laplaciano",
    meaning: "Operador de Laplace, la suma de las segundas derivadas parciales; mide cuánto se aparta una función de su promedio local.",
    usage: "Lo usan la ecuación de Laplace \\nabla^2 \\phi = 0, la ecuación de Poisson \\nabla^2 \\phi = -\\rho/\\varepsilon_0, la ecuación del calor y la ecuación de ondas. Los físicos prefieren \\nabla^2, que recuerda que es la divergencia del gradiente; los matemáticos suelen escribir \\Delta, que puede chocar con \\Delta como diferencia finita o incremento. En coordenadas cartesianas, \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}, pero en coordenadas curvilíneas aparecen términos adicionales. Para el laplaciano vectorial de un campo, pon el operando en negrita para señalar el significado distinto.",
  },
  "d-alembertian": {
    name: "Operador de d'Alembert (dalembertiano)",
    meaning: "Símbolo de caja cuadrada: el operador de ondas de d'Alembert en relatividad y el operador de necesidad en lógica modal.",
    usage: "En relatividad especial, \\Box = \\partial^\\mu \\partial_\\mu combina derivadas temporales y espaciales, de modo que la ecuación de ondas es \\Box \\phi = 0 y la ecuación de Klein-Gordon es (\\Box + m^2)\\phi = 0. Las convenciones de signo dependen de la signatura de la métrica, así que indica la tuya. Los lógicos modales leen \\Box p como «necesariamente p», con \\Diamond p para «posiblemente p». Algunos textos escriben \\Box^2 para el operador por analogía con \\nabla^2. El \\square, visualmente parecido, se usa habitualmente como marca de fin de demostración; comprueba qué glifo usa tu clase de documento para el QED.",
  },
  "calligraphic-l-lagrangian": {
    name: "L caligráfica (lagrangiano)",
    meaning: "L caligráfica, el símbolo estándar para una densidad lagrangiana y, en aprendizaje automático, para una función de pérdida.",
    usage: "La teoría de campos escribe la acción como S = \\int \\mathcal{L}\\, d^4x, con la ecuación de Euler-Lagrange \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}. La mecánica clásica suele usar una L simple para el propio lagrangiano y reservar \\mathcal{L} para las densidades. Los artículos de aprendizaje automático usan \\mathcal{L}(\\theta) para una pérdida, y los ingenieros lo usan para la transformada de Laplace \\mathcal{L}\\{f\\}(s). En optimización, la función lagrangiana con multiplicadores también es \\mathcal{L}(x, \\lambda). Presenta explícitamente el significado que necesites. Su contrapartida mediante la transformada de Legendre es el hamiltoniano \\mathcal{H}.",
  },
  "calligraphic-h-hamiltonian": {
    name: "H caligráfica (hamiltoniano)",
    meaning: "H caligráfica, usada para el hamiltoniano (función de energía) y con frecuencia para un espacio de Hilbert.",
    usage: "En mecánica clásica, las ecuaciones de Hamilton son \\dot{q} = \\partial \\mathcal{H}/\\partial p y \\dot{p} = -\\partial \\mathcal{H}/\\partial q. La mecánica cuántica suele escribir el operador hamiltoniano como \\hat{H} y usar \\mathcal{H} para el espacio de Hilbert de los estados, así que los dos significados caligráficos pueden chocar en un mismo artículo. La física estadística usa \\mathcal{H} para un funcional hamiltoniano en el peso de Boltzmann e^{-\\beta \\mathcal{H}}. La teoría del aprendizaje lo usa para una clase de hipótesis. Elige letras distintas si aparece más de uno. Ten en cuenta que \\mathcal solo cubre letras mayúsculas en las fuentes predeterminadas.",
  },
  "tensor": {
    name: "Tensor",
    meaning: "Un tensor contravariante de rango 2, como el tensor de energía-momento, escrito con dos índices griegos superiores.",
    usage: "La relatividad general acopla la geometría con la materia mediante G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}, y la conservación se escribe \\nabla_\\mu T^{\\mu\\nu} = 0. Las llaves agrupan ambos índices en un único superíndice; T^\\mu\\nu pondría \\nu en la línea base. Para tensores mixtos, mantén visible el orden horizontal con un grupo vacío: T^{\\mu}{}_{\\nu} coloca el índice inferior después del superior en lugar de debajo. Los índices repetidos arriba y abajo siguen el convenio de suma de Einstein. Por convención, los índices griegos recorren el espacio-tiempo y los latinos solo el espacio.",
  },
  "christoffel-symbol": {
    name: "Símbolo de Christoffel",
    meaning: "Símbolo de Christoffel de segunda especie, que codifica cómo cambian los vectores de la base coordenada para la conexión de Levi-Civita.",
    usage: "Se calcula a partir de la métrica como \\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu}) y aparece en la ecuación de las geodésicas y en las derivadas covariantes. Pese a la notación de índices, no es un tensor. Escribir el superíndice y el subíndice sobre la misma base los apila verticalmente, que es el estilo habitual aquí porque el símbolo es simétrico en su par inferior. La gamma mayúscula es recta por defecto; \\varGamma da una versión en cursiva si tu estilo lo exige.",
  },
  "partial-time": {
    name: "Derivada parcial respecto al tiempo",
    meaning: "Operador de derivada parcial respecto al tiempo t, manteniendo fijas todas las variables espaciales.",
    usage: "Gobierna las ecuaciones de evolución: la ecuación del calor \\frac{\\partial u}{\\partial t} = k \\nabla^2 u, la ecuación de continuidad y la ecuación de Schrödinger. En línea, un \\frac completo queda apretado, así que escribe \\partial u/\\partial t o la forma compacta \\partial_t u; la forma con subíndice es la estándar en los artículos de EDP. En matemáticas display usa \\frac, y \\dfrac si aparece dentro de una fracción o matriz y debe conservar el tamaño completo. Distínguela de la derivada total d/dt y de la derivada material D/Dt que se usa en mecánica de fluidos.",
  },
  "vector-field": {
    name: "Campo vectorial",
    meaning: "Acento de flecha sobre una letra que la marca como vector, aquí el campo eléctrico E.",
    usage: "La física introductoria escribe los vectores con flechas, \\vec{E}, \\vec{F} = q\\vec{E}, mientras que la mayoría de las revistas y los textos avanzados prefieren la negrita, \\mathbf{E}, o para letras griegas \\boldsymbol{\\omega}. \\vec es un acento corto de anchura fija pensado para un solo carácter; para vectores de varias letras, como un segmento AB, \\overrightarrow{AB} se estira sobre toda la etiqueta. Elige un único estilo de vector para todo el documento. Los vectores unitarios suelen llevar sombrero, \\hat{x}, y para la i y la j sin punto dentro de acentos usa \\imath y \\jmath.",
  },
  "divergence": {
    name: "Divergencia",
    meaning: "Operador divergencia, nabla multiplicado escalarmente por un campo vectorial, que da el flujo neto saliente por unidad de volumen.",
    usage: "La ley de Gauss \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 y la ley de inexistencia de monopolos \\nabla \\cdot \\mathbf{B} = 0 son sus usos más conocidos, y el flujo incompresible exige \\nabla \\cdot \\mathbf{u} = 0. \\cdot lleva espaciado de operador binario, que es el aspecto esperado. Usa \\cdot, no un punto ni \\bullet. Algunos textos matemáticos prefieren \\operatorname{div} \\mathbf{F}, que evita tratar nabla como un vector. El teorema de la divergencia la relaciona con el flujo a través de la frontera: \\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}.",
  },
  "curl": {
    name: "Rotacional",
    meaning: "Operador rotacional, nabla multiplicado vectorialmente por un campo vectorial, que mide su rotación local o densidad de circulación.",
    usage: "La ley de Faraday \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t y la ley de Ampère con la corrección de Maxwell se escriben con él, y en fluidos \\nabla \\times \\mathbf{u} es la vorticidad. Conviene recordar dos identidades: el rotacional de un gradiente es cero y la divergencia de un rotacional es cero. \\times es un operador binario, así que el espaciado es automático. Los textos europeos escriben a veces \\operatorname{rot} \\mathbf{F}, y otros usan \\operatorname{curl}. El rotacional solo se define de esta forma en tres dimensiones.",
  },
};

export default text;
