import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  "probability": {
    name: "Probabilidad",
    meaning: "P de pizarra (blackboard bold), la medida de probabilidad aplicada a sucesos.",
    usage: "En la probabilidad basada en la teoría de la medida se escribe \\mathbb{P}(A) para la probabilidad del suceso A, con axiomas como \\mathbb{P}(\\Omega) = 1. El estilo de pizarra distingue la medida de una P normal que podría designar una matriz, un polinomio o una partición. Con las fuentes estándar, \\mathbb solo funciona con mayúsculas, así que una minúscula produce glifos incorrectos. Combínalo con \\mathbb{E} y un Var recto para mantener un estilo coherente. Un espacio de probabilidad es la terna (\\Omega, \\mathcal{F}, \\mathbb{P}), con una F caligráfica para la sigma-álgebra. Algunos autores usan en su lugar \\Pr, un operador recto predefinido.",
  },
  "probability-of-a": {
    name: "Probabilidad de A",
    meaning: "Probabilidad del suceso A, escrita con una P mayúscula cursiva normal.",
    usage: "Los textos introductorios escriben P(A) para la probabilidad de que ocurra A, con 0 \\le P(A) \\le 1 y la regla del complementario P(A^c) = 1 - P(A). La P cursiva simple sirve cuando ninguna otra cosa del documento usa esa letra; si no, \\Pr(A), un operador recto predefinido, o \\mathbb{P}(A) evitan el conflicto. Para argumentos grandes, deja que los paréntesis crezcan: P\\left(\\bigcup_i A_i\\right). Escribir Pr(A) sin barra invertida produce una P y una r en cursiva, como dos variables multiplicadas. La probabilidad condicionada pone \\mid dentro de los paréntesis, P(A \\mid B), en lugar de una barra vertical simple.",
  },
  "expectation": {
    name: "Esperanza",
    meaning: "Valor esperado de una variable aleatoria X, escrito con una E de pizarra.",
    usage: "La esperanza es la media de X ponderada por su distribución, \\mathbb{E}[X] = \\sum_x x\\,p(x) o \\int x f(x)\\,dx. Los artículos de aprendizaje automático la usan constantemente, a menudo con un subíndice que indica la distribución: \\mathbb{E}_{x \\sim p}[\\ell(x)]. Los corchetes son lo habitual, y \\left[ \\right] o \\bigl[ \\bigr] ayudan cuando el argumento contiene fracciones. La E de pizarra distingue el operador de una energía E o de un conjunto de aristas E. La linealidad, \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y], se cumple incluso sin independencia, y por eso se usa con tanta libertad.",
  },
  "expectation-e": {
    name: "Esperanza (E)",
    meaning: "Esperanza de X con una E cursiva simple, la media de su distribución.",
    usage: "Muchos libros de estadística escriben E[X] o E(X) para el valor esperado, con la identidad de la varianza \\operatorname{Var}(X) = E[X^2] - (E[X])^2 como ejemplo típico. Una E cursiva puede chocar con otros significados, como una energía o un suceso llamado E, por lo que \\mathbb{E} o una \\mathrm{E} recta son habituales en los artículos de investigación. Si optas por la recta, define \\DeclareMathOperator{\\E}{E} para que el espaciado y la fuente sean uniformes en todas partes. La esperanza condicionada sigue el mismo estilo, E[X \\mid Y]. Sea cual sea la forma elegida, úsala de manera coherente de principio a fin.",
  },
  "variance": {
    name: "Varianza",
    meaning: "Varianza de X, el valor esperado de la desviación cuadrática respecto a su media, con una etiqueta recta.",
    usage: "Las identidades habituales son \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 y \\text{Var}(aX + b) = a^2\\text{Var}(X). \\text{Var} se ve bien en la mayoría de los casos, pero dentro del texto en cursiva de un teorema la etiqueta también pasa a cursiva, porque \\text copia la fuente circundante. \\operatorname{Var} o un \\DeclareMathOperator{\\Var}{Var} en el preámbulo es más robusto y espacia correctamente. Algunos autores escriben en su lugar \\mathbb{V}, \\sigma^2 o \\mathrm{Var}. Para variables independientes, las varianzas se suman: \\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y), mientras que el caso general añade el doble de la covarianza.",
  },
  "covariance": {
    name: "Covarianza",
    meaning: "Covarianza de X e Y, que mide cómo varían conjuntamente las dos variables aleatorias.",
    usage: "Definida por \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y], es la base de la correlación \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) y de las matrices de covarianza, que suelen escribirse \\Sigma. Las variables independientes tienen covarianza nula, aunque el recíproco no se cumple en general. Como con Var, \\operatorname{Cov} o un operador declarado da un resultado más robusto que \\text{Cov}, que se vuelve cursiva en los enunciados de teoremas. Añade un espacio fino tras la coma, (X,\\,Y), si los argumentos se ven apretados. Para un vector aleatorio, \\operatorname{Cov}(\\mathbf{X}) denota la matriz de covarianza completa. Un valor positivo significa que las variables tienden a moverse en la misma dirección.",
  },
  "normal-distribution": {
    name: "Distribución normal",
    meaning: "Distribución normal (gaussiana) con media mu y varianza sigma al cuadrado.",
    usage: "Escribe X \\sim \\mathcal{N}(\\mu, \\sigma^2) para indicar que X sigue una distribución normal; el segundo parámetro es la varianza, no la desviación típica, una fuente frecuente de confusión al leer documentación de software. La forma multivariante es \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma) con una matriz de covarianza. \\mathcal da la N caligráfica y solo funciona con mayúsculas. La densidad \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)} suele aparecer a continuación en una ecuación destacada. La normal estándar es \\mathcal{N}(0, 1), y su función de distribución acumulada se escribe normalmente \\Phi.",
  },
  "independence-symbol-double-perp": {
    name: "Símbolo de independencia",
    meaning: "Dos signos \\perp superpuestos mediante espacios negativos, el símbolo construido a mano habitual para la independencia estadística.",
    usage: "Los probabilistas escriben X \\perp\\!\\!\\!\\perp Y para variables aleatorias independientes y X \\perp\\!\\!\\!\\perp Y \\mid Z para la independencia condicional, una notación popularizada por los modelos gráficos y la inferencia causal. Tres espacios finos negativos \\! acercan el segundo \\perp casi encima del primero, creando una T invertida de doble trazo. Como se monta a mano, su aspecto exacto varía un poco entre fuentes; define una macro como \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}} para que además reciba el espaciado de relación. Algunos textos usan un solo \\perp para la independencia, pero choca con la ortogonalidad.",
  },
  "conditional": {
    name: "Barra de condicionamiento",
    meaning: "Barra vertical con espaciado de relación, que se lee «dado», «tal que» o «divide».",
    usage: "A diferencia de una | simple, \\mid añade espacio a ambos lados, justo lo que necesitan la probabilidad condicionada P(A \\mid B), la notación por comprensión \\{x \\mid x > 0\\} y la divisibilidad 3 \\mid 12. Usa | o \\vert para valores absolutos, donde no se quiere espacio adicional, y \\lvert ... \\rvert cuando la barra delimita algo. En notación por comprensión con contenido alto, \\middle| entre \\left\\{ y \\right\\} hace crecer la barra a juego. Su negación es \\nmid, para «no divide». Muchos autores usan dos puntos en la notación por comprensión, lo que evita confusiones cuando también aparece la divisibilidad.",
  },
  "given": {
    name: "Probabilidad condicionada",
    meaning: "Probabilidad condicionada de A dado que el suceso B ya ha ocurrido.",
    usage: "Definida por P(A \\mid B) = P(A \\cap B)/P(B) para P(B) > 0, es la pieza básica del teorema de Bayes. Usa siempre \\mid en lugar de |: la barra sola no lleva espacio alrededor y la expresión se ve apretada. Para argumentos altos, escribe P\\left(A \\,\\middle|\\, B\\right) para que la barra se ajuste a los paréntesis. Las cadenas de condicionamiento, P(A \\mid B, C), ponen una coma tras la barra en lugar de una segunda barra. En la notación de verosimilitud, p(x \\mid \\theta) sigue la misma convención, y algunos estadísticos usan punto y coma, p(x; \\theta), cuando \\theta es un parámetro fijo y no una variable aleatoria.",
  },
  "chi-squared": {
    name: "Ji cuadrado",
    meaning: "Ji cuadrado: la letra griega ji elevada al cuadrado, que da nombre a una distribución y a un estadístico de contraste.",
    usage: "El estadístico de Pearson \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} compara frecuencias observadas y esperadas, y \\chi^2_k denota la distribución con k grados de libertad. Ten en cuenta que \\chi es la letra griega ji; no escribas una x, que se parece algo pero es un glifo distinto y se apoya de otra forma en la línea base. Para añadir a la vez los grados de libertad y el cuadrado, escribe \\chi^2_{k} o \\chi_{k}^{2}; LaTeX los apila igual en ambos casos. En las secciones de resultados, presenta los contrastes como \\chi^2(2) = 6.1, p = 0.047, según la guía de estilo de tu disciplina.",
  },
  "binomial-coefficient": {
    name: "Coeficiente binomial",
    meaning: "Coeficiente binomial «n sobre k», el número de subconjuntos de k elementos de un conjunto de n elementos.",
    usage: "Aparece en el teorema del binomio (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}, en la regla de Pascal y en la distribución binomial P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}. \\binom se ajusta al estilo actual; fuerza la forma grande con \\dbinom en línea o la pequeña con \\tbinom en una ecuación destacada. La antigua sintaxis {n \\choose k} aún funciona al estilo de plain TeX, pero se desaconseja en documentos LaTeX. Algunos textos escriben C(n,k) o un nCk prefijado; la pila entre paréntesis es el estándar en la escritura científica.",
  },
  "factorial": {
    name: "Factorial",
    meaning: "Factorial de n, el producto de todos los enteros positivos hasta n.",
    usage: "Escribir n! no requiere ningún comando: el signo de exclamación se imprime directamente en modo matemático, con 0! = 1 por convención. Los factoriales abundan en combinatoria y análisis, desde \\binom{n}{k} = \\frac{n!}{k!(n-k)!} hasta los coeficientes de Taylor \\frac{f^{(n)}(a)}{n!}. Cuida el espaciado en productos como n!\\,m!, donde un espacio fino evita que el signo se pegue a la letra siguiente, y pon entre paréntesis los argumentos compuestos, (n+1)!. No confundas este carácter con \\!, que es un espacio fino negativo. Entre las notaciones relacionadas están el doble factorial n!! y la aproximación de Stirling n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n.",
  },
};

export default text;
