import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/calculus/<slug>. */
const text: SymbolPageTranslations = {
  "integral": {
    name: "Integral",
    meaning: "Dibuja el signo integral, usado para primitivas e integrales definidas como el área bajo una curva.",
    usage: "Escribe los límites como subíndice y superíndice: \\int_a^b f(x)\\,dx da una integral definida, y por defecto los límites se colocan junto al signo en estilo de presentación. Añade \\limits justo después de \\int para apilarlos encima y debajo, un estilo que prefieren algunos textos de física. Pon un espacio fino \\, antes del diferencial para que dx no choque con el integrando. Para integrales repetidas, \\int\\int deja un hueco poco elegante; usa \\iint o \\iiint, que ajustan el espaciado automáticamente. En las fórmulas en línea el signo se reduce notablemente, así que las integrales largas o anidadas suelen leerse mejor en un entorno de presentación.",
  },
  "double-integral": {
    name: "Integral doble",
    meaning: "Signo de integral doble para integrar una función de dos variables sobre una región plana.",
    usage: "Una integral doble aparece siempre que se integra sobre un área, como en \\iint_D f(x,y)\\,dA para la masa, para la probabilidad sobre una densidad conjunta o para el flujo a través de una superficie. Escribir \\int\\int a mano produce dos signos con demasiado espacio entre ellos; \\iint los junta en un par compacto. Pon la región como un único subíndice, \\iint_{D}, en lugar de repartir los límites entre ambos signos. Si necesitas límites separados para cada variable, escribe \\int_a^b\\!\\int_c^d, ya que el comando combinado solo admite un conjunto de límites. El espacio fino negativo \\! evita que esos pares construidos a mano se separen.",
  },
  "triple-integral": {
    name: "Integral triple",
    meaning: "Signo de integral triple, usado para integrar sobre una región sólida tridimensional.",
    usage: "Las integrales de volumen como \\iiint_V \\rho\\,dV para la masa total, o el lado izquierdo del teorema de la divergencia \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV, usan este símbolo. Como \\iint, acerca los tres signos más de lo que lo haría \\int\\int\\int, de modo que el resultado se lee como un único operador. La región va en un solo subíndice; para límites iterados explícitos en cada variable, encadena comandos \\int separados. Existe también \\iiiint para cuatro signos y \\idotsint, que dibuja dos signos separados por puntos para una integral n-ésima. En coordenadas esféricas, recuerda el jacobiano: dV = r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi.",
  },
  "contour-integral": {
    name: "Integral de contorno",
    meaning: "Signo integral con un pequeño círculo, que indica la integración a lo largo de una curva cerrada.",
    usage: "El análisis complejo depende mucho de ella: el teorema integral de Cauchy afirma que \\oint_\\gamma f(z)\\,dz = 0 para f holomorfa, y el teorema de los residuos evalúa estas integrales como 2\\pi i por una suma de residuos. En física aparece en la circulación y en las leyes de Ampère y de Faraday, por ejemplo \\oint_C \\mathbf{B}\\cdot d\\boldsymbol{\\ell}. Indica el contorno en el subíndice; \\oint_{\\partial S} señala la frontera de una superficie. Una integral de superficie cerrada con un círculo sobre dos signos no forma parte del conjunto estándar de comandos, así que muchos autores escriben simplemente \\iint_{\\partial V} y aclaran que la superficie es cerrada.",
  },
  "derivative": {
    name: "Derivada",
    meaning: "Notación de Leibniz para el operador derivada respecto de x, construida con una fracción.",
    usage: "Escribir \\frac{d}{dx} da la forma de operador usada en reglas como \\frac{d}{dx}\\sin x = \\cos x, mientras que \\frac{dy}{dx} designa la derivada de una variable dependiente. Muchas guías de estilo escriben la d del diferencial en redonda, como \\mathrm{d}, para distinguirla de una variable llamada d; una macro como \\newcommand{\\diff}{\\mathrm{d}} mantiene la coherencia. En el texto corrido, \\frac se reduce a un tamaño diminuto, así que allí es preferible \\tfrac o la forma con barra dy/dx. Para órdenes superiores escribe \\frac{d^2y}{dx^2}, con el exponente sobre la d en el numerador pero sobre la x en el denominador.",
  },
  "partial-derivative-operator": {
    name: "Operador derivada parcial",
    meaning: "Operador de la derivada parcial respecto de x, manteniendo fijas todas las demás variables.",
    usage: "El cálculo en varias variables y las EDP están llenos de él: la ecuación del calor \\frac{\\partial u}{\\partial t} = k\\frac{\\partial^2 u}{\\partial x^2}, los gradientes y las matrices jacobianas lo usan. La \\partial curva lo distingue de la d ordinaria de \\frac{d}{dx}, reservada a funciones de una variable. Las derivadas parciales cruzadas se escriben \\frac{\\partial^2 f}{\\partial x\\,\\partial y}, con un espacio fino entre los factores del denominador. Cuando las fracciones se amontonan, la abreviatura con subíndice \\partial_x f o f_x es una alternativa compacta, habitual en física y en sistemas largos de EDP donde las fracciones apiladas dispararían la altura de línea.",
  },
  "limit": {
    name: "Límite",
    meaning: "Operador límite con la condición de aproximación x \\to a escrita debajo.",
    usage: "Como \\lim es un operador predefinido, se compone en redonda recta y coloca su subíndice debajo en las fórmulas de presentación, como en \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. En línea, el subíndice pasa al lado para ahorrar altura; fuérzalo debajo con \\lim\\limits_{x\\to a} solo si la altura adicional es aceptable. Los límites laterales usan x \\to a^+ o x \\to a^-, y los límites en el infinito x \\to \\infty. Los operadores relacionados \\limsup y \\liminf se comportan igual. Usa \\to para la flecha en lugar de un guion y un signo mayor que, que se imprimirían como dos símbolos separados.",
  },
  "summation": {
    name: "Sumatorio",
    meaning: "Signo de sumatorio con el índice desde n = 1 hasta infinito, la forma de una serie infinita.",
    usage: "Las series infinitas como el problema de Basilea \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} o la serie armónica divergente se escriben así. En las fórmulas de presentación los límites se apilan encima y debajo de una sigma grande; en línea se desplazan a la derecha de una más pequeña, lo que mantiene uniforme el interlineado. Añade \\limits si necesitas límites apilados en línea, o \\displaystyle con moderación. No uses la letra griega \\Sigma como sustituto: es una letra de tamaño normal, no un operador, y no admite límites correctamente. La convergencia suele expresarse mediante sumas parciales, S_N = \\sum_{n=1}^{N} a_n.",
  },
  "product": {
    name: "Productorio",
    meaning: "Operador productorio sobre n desde 1 hasta infinito, usado para escribir productos infinitos.",
    usage: "Resultados clásicos como el producto de Euler para la función zeta y el producto de Wallis para \\pi se escriben con él. Como en \\sum, los límites van debajo y encima del operador en estilo de presentación y al lado en línea. No lo confundas con \\Pi, la letra griega mayúscula, que tiene una forma parecida pero conserva el tamaño normal y recibe los límites como simples subíndices. Se dice que un producto infinito converge cuando sus productos parciales tienden a un límite no nulo, así que los autores suelen escribir \\prod_{n=1}^{\\infty}(1+a_n) junto con la condición \\sum |a_n| < \\infty, que garantiza la convergencia.",
  },
  "differential": {
    name: "Diferencial",
    meaning: "Diferencial de x, que cierra una integral e indica la variable de integración.",
    usage: "Si se escribe dx sin más, la d sale en cursiva y queda pegada al integrando, así que la solución habitual es un espacio fino: \\int f(x)\\,dx. El estilo ISO y muchas revistas escriben la d en redonda con \\mathrm{d}x; una macro como \\newcommand{\\dd}{\\mathrm{d}} mantiene la coherencia en todo el artículo. En las integrales múltiples, separa los diferenciales con espacios finos, dx\\,dy, o abrévialos como dA o dV. El mismo diferencial aparece en las derivadas de Leibniz \\frac{dy}{dx} y en las formas diferenciales, donde los productos se escriben dx \\wedge dy y el orden importa porque el producto exterior es antisimétrico.",
  },
  "prime-derivative": {
    name: "Derivada con prima",
    meaning: "Notación de Lagrange con prima para la primera derivada de f evaluada en x.",
    usage: "Teclear un apóstrofo en modo matemático produce una prima como superíndice, así que f' es una abreviatura de f^{\\prime}. La notación con prima es compacta para funciones de una variable, como en el teorema del valor medio f'(c) = \\frac{f(b)-f(a)}{b-a}. Si también necesitas un exponente, escribe f'^2, que combina ambos en un solo superíndice, o agrupa como (f'(x))^2; escribir f^2' provoca un error de superíndice doble. Evita pegar una comilla tipográfica, que no se convierte en prima, y evita un \\prime suelto fuera de un superíndice, que se imprime a tamaño completo sobre la línea base. En física, una prima también puede marcar una coordenada transformada como x'.",
  },
  "double-prime": {
    name: "Doble prima",
    meaning: "Segunda derivada de f en x en notación con primas, que describe la concavidad o la aceleración.",
    usage: "Dos apóstrofos en modo matemático se combinan en un único superíndice con dos primas, equivalente a f^{\\prime\\prime}. El criterio de la segunda derivada la usa: si f'(c) = 0 y f''(c) > 0, entonces c es un mínimo local. En mecánica, x''(t) da la aceleración, aunque para las derivadas temporales se prefiere la forma con puntos \\ddot{x}. Tres primas f''' aún se leen bien, pero a partir de ahí pasa a f^{(4)}(x), con el orden entre paréntesis para que no se confunda con una potencia. Nunca escribas un carácter de comillas dobles en lugar de dos apóstrofos; se representa como un glifo completamente distinto.",
  },
  "approaches": {
    name: "Flecha de tendencia",
    meaning: "Flecha hacia la derecha que se lee «tiende a» en los límites o «va de... a» entre conjuntos.",
    usage: "Cumple una doble función: en los límites, x \\to 0 o n \\to \\infty; en las signaturas de funciones, f\\colon X \\to Y. \\to es simplemente un alias de \\rightarrow, así que el resultado es idéntico; elige el que se lea mejor en el código fuente. No lo confundas con \\mapsto, que muestra a dónde va un elemento concreto (x \\mapsto x^2), ni con \\longrightarrow, una flecha más larga para fórmulas destacadas. Para los modos de convergencia, decóralo: \\xrightarrow{d} para la convergencia en distribución, o apila una etiqueta con \\overset{p}{\\to}. Tiene espaciado de relación, así que no hace falta añadir espacios a mano a su alrededor.",
  },
  "evaluated-at": {
    name: "Barra de evaluación",
    meaning: "Barra vertical de evaluación con límites, que muestra una primitiva evaluada de a a b.",
    usage: "Tras integrar, escribir F(x)\\Big|_{a}^{b} = F(b) - F(a) es la abreviatura estándar del teorema fundamental del cálculo. \\Big fija la barra en un tamaño ampliado, adecuado para fracciones normales; para expresiones más altas usa \\bigg| o combina \\left. con \\right|_{a}^{b} para que la barra crezca hasta igualar lo que la precede. Algunos autores prefieren corchetes, \\Big[ F(x) \\Big]_a^b, que no dejan dudas sobre qué parte se evalúa. Una | simple sin tamaño es demasiado corta y hace que los límites se amontonen junto a la primitiva, sobre todo después de una fracción.",
  },
};

export default text;
