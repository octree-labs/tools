import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  "expectation": {
    name: "Esperanza",
    meaning: "E de pizarra (blackboard bold), la notación estándar para el valor esperado de una variable aleatoria.",
    usage: "La esperanza aparece por todas partes en probabilidad y aprendizaje automático: \\mathbb{E}[X] = \\sum_x x\\,p(x), el riesgo \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)] o la varianza como \\mathbb{E}[X^2] - \\mathbb{E}[X]^2. Pon la distribución en un subíndice para dejar explícita la fuente de aleatoriedad. Los textos antiguos usan una E romana simple o \\operatorname{E}; ambas valen si las usas de forma coherente. Ten en cuenta que \\mathbb solo ofrece mayúsculas, así que \\mathbb{e} produce basura. Usa corchetes para el argumento y \\left[ \\right] cuando contenga fracciones altas. Definir una macro como \\newcommand{\\E}{\\mathbb{E}} mantiene la notación uniforme.",
  },
  "kl-divergence": {
    name: "Divergencia de Kullback-Leibler",
    meaning: "Divergencia de Kullback-Leibler de Q respecto de P: la pérdida logarítmica extra esperada al usar Q en lugar de la distribución verdadera P.",
    usage: "La divergencia KL es D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}, y es central en la inferencia variacional, el ELBO y la regularización de políticas en aprendizaje por refuerzo. No es simétrica, así que el orden de P y Q importa, y la doble barra los separa. \\| es un símbolo ordinario sin espacio alrededor, lo que puede verse apretado; muchos autores escriben \\parallel, que recibe espaciado de relación, o añaden \\, a ambos lados. \\text{KL} en el subíndice hereda la fuente del entorno, así que \\mathrm{KL} es más seguro dentro del texto en cursiva de un teorema. Para fracciones grandes en el interior, usa \\left( \\right).",
  },
  "kl-divergence-short-form": {
    name: "Divergencia KL (forma abreviada)",
    meaning: "Notación abreviada de la divergencia de Kullback-Leibler entre las distribuciones P y Q, sin el prefijo D.",
    usage: "Muchos artículos de aprendizaje automático omiten la D y escriben \\text{KL}(P \\| Q), sobre todo en funciones de pérdida como el objetivo del VAE, con un término \\text{KL}(q_\\phi(z|x) \\| p(z)). Significa exactamente lo mismo que D_{\\text{KL}}(P \\| Q), incluida la asimetría: la KL directa tiende a cubrir la masa y la KL inversa a buscar la moda. Como \\text{} copia la fuente del texto circundante, KL puede salir en cursiva dentro de un teorema; \\operatorname{KL} o \\mathrm{KL} lo corrigen, y \\operatorname además añade el espacio correcto antes del paréntesis. Considera \\,\\|\\, o \\parallel para dar más aire a las barras.",
  },
  "argmax": {
    name: "Argmax",
    meaning: "El argumento del máximo: el valor de entrada en el que una función alcanza su valor más grande.",
    usage: "Escrito como \\arg\\max, combina dos operadores predefinidos: \\arg, que nunca admite límites, y \\max, que sí los admite. El resultado es que, en estilo display, un subíndice queda solo bajo max, así que la restricción aparece descentrada. Una opción más limpia es \\operatorname*{arg\\,max}, o definir \\DeclareMathOperator*{\\argmax}{arg\\,max} en el preámbulo, que centra el subíndice bajo la palabra completa. Aparece en reglas de clasificación como \\hat{y} = \\arg\\max_k p(k|x), en la estimación por máxima verosimilitud y en las políticas voraces del aprendizaje por refuerzo. Ten en cuenta que devuelve un conjunto cuando el maximizador no es único.",
  },
  "argmin": {
    name: "Argmin",
    meaning: "El argumento del mínimo: la entrada en la que una función alcanza su valor más pequeño.",
    usage: "\\arg\\min es la forma en que la mayoría de los problemas de optimización y aprendizaje definen una solución, por ejemplo mínimos cuadrados \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 o la asignación de clústeres en k-medias. Escrito así, es \\arg seguido de \\min, de modo que en modo display el subíndice se centra bajo min y no bajo la expresión completa. Para un subíndice centrado, usa \\operatorname*{arg\\,min} o declara un operador con asterisco en el preámbulo. Algunos autores escriben argmin como una sola palabra sin espacio; el espacio fino de arg\\,min sigue el estilo más común. Recuerda que el resultado puede ser un conjunto si los minimizadores no son únicos.",
  },
  "argmax-subscript": {
    name: "Argmax con subíndice",
    meaning: "Argmax con la variable de optimización theta en el subíndice: el valor del parámetro que maximiza un objetivo.",
    usage: "Esta forma nombra la variable que se optimiza, la manera estándar de escribir la máxima verosimilitud, \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta), y la estimación MAP. Como el subíndice se une solo a \\max, en modo display theta queda bajo max y no centrado bajo el arg max completo. Sustituirlo por \\operatorname*{arg\\,max}_{\\theta} o por un \\argmax declarado da una colocación centrada y es lo que esperan la mayoría de las revistas. En matemáticas en línea el subíndice aparece a la derecha en cualquier caso. También puedes listar restricciones en el subíndice, como \\theta \\in \\Theta, usando \\substack para varias líneas.",
  },
  "argmin-subscript": {
    name: "Argmin con subíndice",
    meaning: "Argmin sobre theta: el valor del parámetro que minimiza una pérdida o función objetivo.",
    usage: "Así se suele escribir la minimización del riesgo empírico: \\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i). En estilo display el subíndice va solo bajo min, lo que se ve ligeramente descentrado; \\operatorname*{arg\\,min}_{\\theta} lo corrige y mantiene un espaciado coherente. Si lo escribes a menudo, una macro en el preámbulo te ahorra teclear y garantiza un resultado idéntico. Los objetivos regularizados suelen añadir un término de penalización, como en ridge o lasso. Cuando el minimizador es único, el signo igual está bien; si no, \\in es la relación más precisa, porque argmin devuelve un conjunto.",
  },
  "softmax": {
    name: "Softmax",
    meaning: "Nombre de la función softmax: transforma un vector de logits en una distribución de probabilidad mediante exponenciación y normalización.",
    usage: "La softmax se define componente a componente como \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j}, y cierra casi todos los clasificadores y el mecanismo de atención, donde aparece \\text{softmax}(QK^\\top/\\sqrt{d_k})V. Como \\text{} usa la fuente del texto circundante, se vuelve cursiva dentro de entornos de teorema o de énfasis. \\operatorname{softmax} suele ser la mejor opción: siempre es recta y añade espaciado de operador antes del paréntesis, igual que \\sin. Un parámetro de temperatura se escribe \\text{softmax}(z/T). Usa \\left( \\right) cuando el argumento contenga una fracción. En artículos con mucho código, indica sobre qué eje normaliza la softmax, por ejemplo la dimensión de clases.",
  },
  "relu": {
    name: "ReLU",
    meaning: "Nombre de la activación unidad lineal rectificada (ReLU), que devuelve max(0, x) y anula las entradas negativas.",
    usage: "ReLU se define como \\text{ReLU}(x) = \\max(0, x), con derivada 1 para entradas positivas y 0 para las negativas. Es la activación por defecto de las capas ocultas en las redes modernas; entre sus variantes están Leaky ReLU, \\max(\\alpha x, x), y GELU. Escribir \\text{ReLU} funciona, pero sigue el estilo del texto circundante, así que en un entorno en cursiva se inclina; \\operatorname{ReLU} o \\mathrm{ReLU} se mantienen rectos, y \\operatorname además gestiona el espaciado antes del argumento. Cuando se aplica a un vector, indica que actúa elemento a elemento, como en \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b}).",
  },
  "gradient-of-l": {
    name: "Gradiente de L",
    meaning: "Gradiente de la pérdida L respecto de los parámetros theta: el vector de derivadas parciales que se usa en el entrenamiento.",
    usage: "Es la cantidad que calcula la retropropagación, y dirige la actualización del descenso de gradiente \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}. El subíndice de \\nabla indica respecto de qué variables derivas, lo que importa cuando la pérdida depende tanto de los parámetros como de las entradas, por ejemplo \\nabla_x \\mathcal{L} en los ataques adversarios. \\mathcal da la L caligráfica y solo admite mayúsculas. En el texto en línea, el subíndice queda abajo a la derecha del nabla, que es lo estándar. Para estimaciones estocásticas ayuda un acento circunflejo: \\hat{\\nabla}_\\theta \\mathcal{L} o \\tilde{g}.",
  },
  "partial-derivative": {
    name: "Derivada parcial",
    meaning: "Derivada parcial de la pérdida L respecto de un parámetro theta: la sensibilidad de la pérdida a cada parámetro.",
    usage: "Esta fracción es el bloque escalar básico de la retropropagación; la regla de la cadena queda \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}. Usa \\partial, la d curva, para derivadas parciales y una d normal para derivadas totales. En el texto corrido, \\frac se encoge para caber, lo que a menudo resulta difícil de leer; \\tfrac, la forma con barra \\partial \\mathcal{L}/\\partial \\theta, o un \\dfrac en display pueden funcionar mejor. Para un uso repetido, una macro o el comando \\pdv al estilo del paquete physics abrevian la escritura. Cuando theta es un vector, muchos autores pasan a escribir \\nabla_\\theta \\mathcal{L}.",
  },
  "theta-star": {
    name: "Theta con asterisco",
    meaning: "Theta con un asterisco como superíndice: el valor óptimo del parámetro, normalmente el minimizador de una pérdida.",
    usage: "Un símbolo con asterisco marca el óptimo, como en \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta), y los resultados de convergencia acotan \\|\\theta_t - \\theta^*\\|. Escribir ^* eleva un asterisco en tamaño de superíndice. Las alternativas son ^\\ast, idéntica, y ^\\star, que da una estrella de cinco puntas que algunos autores prefieren porque el asterisco puede confundirse con un conjugado o un adjunto. Distínguelo de \\hat{\\theta}, que por convención denota una estimación a partir de los datos y no el óptimo verdadero. Si theta también lleva subíndice, cualquier orden sirve: \\theta^*_t y \\theta_t^* se ven igual.",
  },
  "weight-matrix": {
    name: "Matriz de pesos",
    meaning: "W recta en negrita, la notación convencional para la matriz de pesos de una capa de una red neuronal.",
    usage: "Las mayúsculas en negrita denotan matrices y las minúsculas en negrita vectores, así que una capa densa es \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, con pesos específicos de cada capa escritos \\mathbf{W}^{(l)} o \\mathbf{W}_l. \\mathbf produce letras latinas rectas en negrita; no pone en negrita las letras griegas ni la mayoría de los símbolos, así que usa \\boldsymbol o \\bm para \\boldsymbol{\\Sigma} o para una \\theta en negrita. Muchos artículos de aprendizaje profundo prescinden por completo de la negrita y escriben W; elige una convención y mantenla en todo el texto. La traspuesta suele ser \\mathbf{W}^\\top, que se lee mejor que ^T.",
  },
  "bias-vector": {
    name: "Vector de sesgo",
    meaning: "b minúscula en negrita, la notación habitual para el vector de sesgo que se suma tras una transformación lineal.",
    usage: "El sesgo desplaza la preactivación de cada neurona, como en \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, y las versiones por capa se escriben \\mathbf{b}^{(l)}. Por convención, la minúscula en negrita indica un vector columna. \\mathbf da negrita recta; si quieres vectores en negrita cursiva, como hacen algunas revistas de física, usa \\boldsymbol{b} o \\bm{b}. Sé coherente con los índices: la i-ésima componente del sesgo es b_i en cursiva normal, no en negrita, porque es un escalar. En los modelos lineales, el término independiente suele escribirse b o w_0 en lugar de un vector en negrita.",
  },
  "cross-entropy": {
    name: "Entropía cruzada",
    meaning: "Entropía cruzada entre una distribución verdadera p y un modelo q: la longitud de código esperada al codificar p con q.",
    usage: "La entropía cruzada es H(p, q) = -\\sum_x p(x) \\log q(x), y es la pérdida de clasificación: con etiquetas one-hot se reduce a -\\log q(y). Se descompone como H(p, q) = H(p) + D_{\\text{KL}}(p \\| q), lo que explica por qué minimizarla respecto de q también minimiza la divergencia KL. Cuidado con el choque de notación: H(X, Y) con variables aleatorias suele significar entropía conjunta, así que algunos autores escriben H_\\times(p, q) o \\mathrm{CE}(p, q) para mayor claridad. La coma tiene el espaciado normal de puntuación, así que no hace falta ningún ajuste manual.",
  },
  "entropy": {
    name: "Entropía",
    meaning: "Entropía de Shannon de una variable aleatoria X: la incertidumbre media, o contenido de información, de sus resultados.",
    usage: "La entropía es H(X) = -\\sum_x p(x) \\log p(x), medida en bits con \\log_2 y en nats con \\ln. Se maximiza con la distribución uniforme, donde H(X) = \\log |\\mathcal{X}|, y aparece en la división de árboles de decisión mediante la ganancia de información y en el aprendizaje por refuerzo de máxima entropía. Las cantidades relacionadas comparten la letra: entropía condicional H(Y|X), entropía conjunta H(X, Y) y entropía diferencial h(X) para variables continuas, normalmente en minúscula. Algunos artículos escriben \\mathbb{H}[X] para evitar confusiones con una hessiana H o con una clase de hipótesis.",
  },
  "mutual-information": {
    name: "Información mutua",
    meaning: "Información mutua entre X e Y: cuánto reduce el conocimiento de una variable aleatoria la incertidumbre sobre la otra.",
    usage: "La información mutua es I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y)), y vale cero exactamente cuando X e Y son independientes. El punto y coma es convencional y separa los dos argumentos, que a su vez pueden ser listas, como en I(X_1, X_2; Y); una coma sería ambigua. TeX trata ; como puntuación y añade automáticamente un espacio fino detrás. La información mutua condicional se escribe I(X; Y \\mid Z). Es la base del cuello de botella de la información, de las pérdidas contrastivas InfoNCE y de la selección de características.",
  },
  "log-likelihood": {
    name: "Log-verosimilitud",
    meaning: "Log-verosimilitud de los datos x bajo los parámetros theta, la cantidad que se maximiza en la estimación por máxima verosimilitud.",
    usage: "Tomar logaritmos convierte productos de verosimilitudes independientes en sumas, \\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta), lo que es más fácil de derivar y numéricamente estable. Su opuesta es la conocida pérdida NLL (log-verosimilitud negativa). Un consejo tipográfico: una | sola es un símbolo ordinario, así que no recibe espacio a ningún lado; \\mid es una relación y añade un espaciado equilibrado, dando p(x \\mid \\theta). Algunos autores usan punto y coma, p(x; \\theta), para indicar que theta es un parámetro fijo y no una variable aleatoria sobre la que se condiciona, que es la lectura frecuentista.",
  },
  "probability-distribution": {
    name: "Distribución de probabilidad",
    meaning: "Probabilidad (densidad o masa) de x bajo una distribución p, la notación básica para una distribución en aprendizaje automático.",
    usage: "La p minúscula p(x) denota una función de densidad o de masa, mientras que la mayúscula P(X = x) o \\Pr suele reservarse para probabilidades de sucesos. El aprendizaje automático sobrecarga p libremente y deja que el argumento decida a qué distribución se refiere, como en p(x) frente a p(z); cuando esto se vuelve confuso, añade subíndices como p_\\theta(x) o p_{\\text{data}}(x). La normalización exige \\sum_x p(x) = 1 o \\int p(x)\\,dx = 1, con un espacio fino \\, antes de dx. El muestreo se escribe x \\sim p(x), usando \\sim.",
  },
  "conditional-probability": {
    name: "Probabilidad condicional",
    meaning: "Probabilidad condicional de y dado x, como la distribución de etiquetas que predice un clasificador para una entrada.",
    usage: "Los modelos discriminativos aprenden p(y | x) directamente, mientras que los generativos aprenden p(x | y) y p(y) y aplican la regla de Bayes, p(y|x) = p(x|y)p(y)/p(x). La barra vertical escrita tal cual como | es un carácter ordinario y no recibe espacio alrededor; \\mid es una relación y da p(y \\mid x), que se lee mejor y es lo que recomiendan la mayoría de las guías de estilo. Para una expresión condicionante alta, \\middle| entre \\left( y \\right) escala la barra junto con los paréntesis. Los subíndices como p_\\theta(y \\mid x) indican los parámetros del modelo.",
  },
  "sum-over-classes": {
    name: "Suma sobre clases",
    meaning: "Sumatorio sobre las clases c de 1 a C, como en las pérdidas multiclase y en la normalización de probabilidades.",
    usage: "Las sumas sobre clases aparecen en la entropía cruzada categórica, -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c, y en el denominador de la softmax. En matemáticas en display los límites van encima y debajo de la sigma grande; en línea quedan a la derecha en un cuerpo menor, lo que ahorra altura de línea. Fuerza la colocación de display en línea con \\sum\\limits, o lo contrario con \\nolimits. Usar C para el número de clases y c para el índice es una convención común; simplemente no reutilices C para un coste o una constante en la misma ecuación. El símbolo \\Sigma es una letra griega y no debe sustituir a \\sum.",
  },
  "product-over-samples": {
    name: "Producto sobre muestras",
    meaning: "Producto sobre las muestras i de 1 a N, normalmente la verosimilitud de un conjunto de datos i.i.d.",
    usage: "Para muestras independientes, la verosimilitud se factoriza como \\prod_{i=1}^{N} p(x_i \\mid \\theta), y al tomar logaritmos se convierte en una suma. \\prod es la pi mayúscula como operador grande, dimensionada para display; no la sustituyas por \\Pi, la letra griega, que se queda pequeña y no admite límites. Las matemáticas en display colocan los límites encima y debajo, mientras que en el texto en línea van a un lado; \\prod\\limits cambia ese comportamiento. Para un coproducto, \\coprod es la versión invertida. En la práctica, los productos largos son numéricamente inestables, otro motivo por el que los artículos suelen pasar a la forma logarítmica.",
  },
  "l1-norm": {
    name: "Norma L1",
    meaning: "Norma L1 de theta: la suma de los valores absolutos de sus componentes.",
    usage: "La norma L1, \\|\\theta\\|_1 = \\sum_i |\\theta_i|, es la penalización del lasso y favorece soluciones dispersas porque su bola unidad tiene esquinas sobre los ejes. \\| da barras dobles pero las trata como símbolos ordinarios, así que el espaciado puede fallar cuando sigue un signo menos; \\lVert \\theta \\rVert_1 las marca como delimitadores izquierdo y derecho y espacia correctamente. Para argumentos altos, usa \\left\\| ... \\right\\| para escalarlas. Muchos artículos definen una macro \\norm mediante \\DeclarePairedDelimiter de mathtools para mayor coherencia. No la confundas con |\\theta|, que denota un valor absoluto o un cardinal.",
  },
  "l2-norm": {
    name: "Norma L2",
    meaning: "Norma euclídea (L2) de theta: la raíz cuadrada de la suma de los cuadrados de sus componentes.",
    usage: "La norma L2 \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} mide longitud, y su cuadrado aparece como penalización ridge o de decaimiento de pesos \\lambda\\|\\theta\\|_2^2. Fíjate en el orden de los índices: \\|\\theta\\|_2^2 es la norma al cuadrado, y TeX apila el subíndice y el superíndice con limpieza. Muchos autores omiten el subíndice 2 cuando el contexto es claro. Para un mejor espaciado de delimitadores, usa \\lVert y \\rVert en lugar de \\|, y \\left\\| \\right\\| para contenidos altos como fracciones. Para matrices, \\|A\\|_2 suele significar la norma espectral, no la elemento a elemento, que es la norma de Frobenius.",
  },
  "frobenius-norm": {
    name: "Norma de Frobenius",
    meaning: "Norma de Frobenius de la matriz W: la raíz cuadrada de la suma de los cuadrados de todas sus entradas.",
    usage: "La norma de Frobenius es \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}, el análogo matricial de la norma L2 vectorial. Se usa para el decaimiento de pesos en matrices, el error de aproximación de bajo rango y los objetivos de factorización de matrices. Se diferencia de la norma espectral \\|\\mathbf{W}\\|_2, que es el mayor valor singular. El subíndice F es una letra cursiva normal; algunos escriben \\mathrm{F}. Como con las normas vectoriales, \\lVert y \\rVert dan mejor espaciado que \\|, sobre todo cuando la norma va al cuadrado o precedida de un coeficiente.",
  },
};

export default text;
