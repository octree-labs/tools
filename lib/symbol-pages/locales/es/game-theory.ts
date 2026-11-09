import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/game-theory/<slug>. */
const text: SymbolPageTranslations = {
  "strategy": {
    name: "Estrategia",
    meaning: "Estrategia del jugador i: un plan de acción completo elegido del conjunto de estrategias S_i de ese jugador.",
    usage:
      "En un juego en forma normal cada jugador elige s_i \\in S_i, y la elección conjunta es un perfil s = (s_i, s_{-i}), donde s_{-i} reúne las estrategias de todos los demás. En los juegos en forma extensiva, una estrategia pura especifica una acción en cada conjunto de información, incluso en los que nunca se alcanzan. El subíndice indica el jugador, así que usa superíndices o primas, s_i', s_i^*, para estrategias alternativas del mismo jugador. Escribe s_{-i} con llaves, ya que s_-i deja solo el signo menos en el subíndice.",
  },
  "strategy-set": {
    name: "Conjunto de estrategias",
    meaning: "Conjunto de estrategias del jugador i: todas las estrategias puras de las que dispone ese jugador.",
    usage:
      "El espacio de todos los perfiles es el producto cartesiano S = S_1 \\times \\cdots \\times S_n = \\prod_i S_i, y S_{-i} = \\prod_{j \\ne i} S_j. Los S_i finitos dan lugar a juegos matriciales; los subconjuntos compactos y convexos de \\mathbb{R}^k aparecen en la competencia de Cournot y en otros juegos continuos. Las estrategias mixtas viven en \\Delta(S_i). Escribe los conjuntos de estrategias en mayúscula y las estrategias en minúscula. En los juegos cooperativos, S suele designar una coalición, así que evita mezclar ambos usos en un mismo artículo.",
  },
  "strategy-profile": {
    name: "Perfil de estrategias",
    meaning: "Perfil de estrategias: una lista que contiene una estrategia para cada uno de los n jugadores del juego.",
    usage:
      "Los pagos se evalúan en perfiles completos, u_i(s), y el análisis de desviaciones divide un perfil como (s_i, s_{-i}). \\ldots coloca los puntos en la línea base, lo correcto entre comas; \\cdots los centra, lo adecuado para sumas como s_1 + \\cdots + s_n. Con amsmath, \\dots sin más elige automáticamente según el contexto. Algunos textos escriben los perfiles en negrita, \\mathbf{s}, para distinguirlos de la estrategia s_i de un solo jugador. El perfil en el que i cambia a s_i' mientras los demás mantienen su estrategia se escribe (s_i', s_{-i}). El orden de los jugadores fija la tupla, así que indícalo una vez.",
  },
  "payoff-function": {
    name: "Función de pagos",
    meaning: "Función de pagos (de utilidad) del jugador i, que asigna un número real a cada perfil de estrategias s.",
    usage:
      "Formalmente u_i: S \\to \\mathbb{R}, y un juego en forma normal es la terna (N, (S_i), (u_i)). Las estrategias mixtas la extienden mediante la esperanza, u_i(\\sigma) = \\sum_s \\sigma(s)\\, u_i(s). Las desviaciones unilaterales se escriben u_i(s_i', s_{-i}). Algunos campos usan \\pi_i o v_i para los pagos; en los juegos cooperativos v ya designa la función característica, así que allí u_i es la opción más segura. Los pagos solo tienen que ser utilidades de von Neumann-Morgenstern, de modo que las transformaciones afines positivas no alteran los equilibrios. Con dos jugadores, los pagos suelen mostrarse como una bimatriz.",
  },
  "expected-payoff": {
    name: "Pago esperado",
    meaning: "Pago esperado del jugador i, el promedio ponderado por probabilidades de u_i bajo estrategias mixtas o jugadas del azar.",
    usage:
      "Con estrategias mixtas independientes, \\mathbb{E}_\\sigma[u_i] = \\sum_{s} \\prod_j \\sigma_j(s_j)\\, u_i(s), la magnitud que los jugadores maximizan en un equilibrio de Nash en estrategias mixtas. Pon la distribución como subíndice, \\mathbb{E}_{s \\sim \\sigma}[u_i(s)], cuando no sea evidente. La \\mathbb{E} de pizarra es un estilo posible; \\operatorname{E} y \\mathrm{E} dan una E en redonda y son habituales en econometría. Para argumentos altos, dimensiona los corchetes con \\left[ \\right] o \\bigl[ \\bigr]. Cuando juega la naturaleza, como en los juegos bayesianos, la esperanza también recorre los tipos, \\mathbb{E}_\\theta[u_i(s(\\theta), \\theta)]. Reserva los corchetes para la esperanza y los paréntesis para los argumentos de funciones.",
  },
  "best-response": {
    name: "Mejor respuesta",
    meaning: "Correspondencia de mejor respuesta: el conjunto de estrategias que maximizan el pago del jugador i frente a las estrategias s_{-i} de los demás.",
    usage:
      "Se define como BR_i(s_{-i}) = \\arg\\max_{s_i \\in S_i} u_i(s_i, s_{-i}), y un perfil es un equilibrio de Nash exactamente cuando s_i^* \\in BR_i(s^*_{-i}) para todo i. En general toma valores en conjuntos, por eso la existencia de equilibrios mixtos se demuestra con el teorema del punto fijo de Kakutani y no con el de Brouwer. Si se escribe BR_i, TeX compone B y R como dos variables en cursiva multiplicadas; escribe \\mathrm{BR}_i o \\operatorname{BR}_i para obtener letras rectas. Usa \\operatorname*{arg\\,max} para el maximizador. En los juegos finitos siempre existen mejores respuestas puras.",
  },
  "nash-equilibrium": {
    name: "Equilibrio de Nash",
    meaning: "Perfil de equilibrio de Nash: ningún jugador puede ganar desviándose unilateralmente de su estrategia s_i^*.",
    usage:
      "La condición que lo define es u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) para todo jugador i y toda alternativa s_i. Nash demostró que todo juego finito tiene un equilibrio en estrategias mixtas, escrito \\sigma^*. Los equilibrios no tienen por qué ser únicos ni eficientes, como muestra el dilema del prisionero. La estrella es un superíndice, así que s_1^* y s^*_1 se ven idénticos; usa ^* en lugar de ^\\star, que es una estrella de cinco puntas. En un juego bimatricial, un equilibrio puro es una casilla en la que el pago de cada jugador es máximo dada la elección del otro.",
  },
  "mixed-strategy": {
    name: "Estrategia mixta",
    meaning: "Estrategia mixta del jugador i: una distribución de probabilidad sobre las estrategias puras de ese jugador.",
    usage:
      "Una estrategia mixta es \\sigma_i \\in \\Delta(S_i), con \\sigma_i(s_i) la probabilidad de jugar s_i, y el soporte de una estrategia de equilibrio solo contiene mejores respuestas. En el juego de las monedas (matching pennies), el único equilibrio consiste en que cada jugador mezcle al 1/2-1/2. Los juegos en forma extensiva distinguen las estrategias mixtas de las estrategias de comportamiento, a menudo escritas b_i o \\beta_i. No confundas \\sigma_i con una desviación típica en artículos que también hacen estadística; \\varsigma es una sigma distinta, de final de palabra, y no sirve como sustituto. Con memoria perfecta, el teorema de Kuhn hace equivalentes las estrategias mixtas y las de comportamiento.",
  },
  "probability-simplex": {
    name: "Símplex de probabilidad",
    meaning: "Conjunto de las distribuciones de probabilidad sobre S_i, que para un conjunto finito es un símplex de probabilidad.",
    usage:
      "Si S_i tiene k elementos, \\Delta(S_i) es el símplex de dimensión k-1, \\{x \\in \\mathbb{R}^k : x_j \\ge 0, \\sum_j x_j = 1\\}. Las estrategias mixtas, las creencias y los equilibrios correlacionados viven en conjuntos de esta forma. La \\Delta mayúscula es recta por defecto; \\varDelta da una versión en cursiva si tu estilo lo requiere. No la confundas con \\triangle, un triángulo geométrico, ni con \\nabla, el símbolo invertido que se usa para los gradientes. Con dos estrategias puras es simplemente el intervalo [0, 1] de probabilidades sobre la primera.",
  },
  "dominant-strategy": {
    name: "Estrategia dominante",
    meaning: "Estrategia dominante del jugador i: una que es mejor respuesta hagan lo que hagan los demás jugadores.",
    usage:
      "La dominancia estricta significa u_i(s_i^d, s_{-i}) > u_i(s_i, s_{-i}) para cualquier otra s_i y cualquier s_{-i}; en el dilema del prisionero, delatar es estrictamente dominante. Pujar con sinceridad en una subasta al segundo precio es débilmente dominante. El superíndice d es una etiqueta, no un índice, así que muchos autores lo escriben en redonda, s_i^{\\mathrm{d}}, para que no se lea como una variable. Poner ^d antes o después de _i da el mismo resultado apilado. Cuando todos los jugadores tienen una estrategia dominante, el perfil resultante es un equilibrio en estrategias dominantes y, por tanto, un equilibrio de Nash.",
  },
  "dominated-strategy": {
    name: "Estrategia dominada",
    meaning: "Relación de dominancia: s_i \\prec s'_i indica que la estrategia s_i está dominada por s'_i, que siempre obtiene al menos lo mismo.",
    usage:
      "Los jugadores racionales nunca juegan estrategias estrictamente dominadas, y su eliminación iterada es un procedimiento de solución estándar. \\prec es una relación con el espaciado adecuado; para la dominancia débil usa \\preceq, y para el sentido contrario \\succ o \\succeq. Algunos textos escriben la relación con símbolos indexados por jugador, como \\prec_i. s'_i y s_i' se ven igual porque la prima se combina con el subíndice apilado. Las convenciones de sentido varían, y algunos autores escriben s'_i \\succ s_i para el mismo enunciado, así que defínela. Una estrategia dominada por una estrategia mixta también puede eliminarse.",
  },
  "pareto-optimal": {
    name: "Óptimo de Pareto",
    meaning: "Resultado óptimo de Pareto: ningún otro perfil mejora a algún jugador sin empeorar a otro.",
    usage:
      "Un perfil s^{PO} es óptimo de Pareto si no existe ningún s con u_i(s) \\ge u_i(s^{PO}) para todo i y desigualdad estricta para algún i. El dilema del prisionero muestra un equilibrio de Nash que no es óptimo de Pareto. Si se escribe s^{PO}, TeX compone P y O como dos variables en cursiva; una etiqueta debe ir en redonda, s^{\\mathrm{PO}}, lo que además evita que PO se lea como un producto. El mismo consejo vale para etiquetas como s^{\\mathrm{NE}}. La optimalidad de Pareto no dice nada sobre la equidad; solo descarta mejoras inequívocas.",
  },
  "minimax": {
    name: "Minimax",
    meaning: "Operador minimax: minimizar sobre j el máximo sobre i, el valor en el peor caso que puede garantizarse un jugador minimizador.",
    usage:
      "En un juego matricial de suma cero con pago a_{ij} para el jugador de las filas, \\min_j \\max_i a_{ij} es la garantía del jugador de las columnas y \\max_i \\min_j a_{ij} la del jugador de las filas; la segunda nunca supera a la primera. El teorema minimax de von Neumann afirma que ambas coinciden en estrategias mixtas. En estilo destacado los índices van debajo; en línea aparecen como subíndices, así que añade \\limits si también los quieres debajo en el texto. Para separar más los operadores, inserta \\, o usa \\min_{j}\\,\\max_{i}.",
  },
  "zero-sum": {
    name: "Juego de suma cero",
    meaning: "Condición de suma cero: los pagos de los dos jugadores siempre se anulan, de modo que la ganancia de uno es exactamente la pérdida del otro.",
    usage:
      "Un juego así queda descrito por completo mediante una sola matriz A, con u_1 = x^\\top A y y u_2 = -x^\\top A y para las estrategias mixtas x e y. Los juegos de suma constante, u_1 + u_2 = c, son estratégicamente equivalentes. El valor v = \\max_x \\min_y x^\\top A y puede calcularse mediante programación lineal. Para n jugadores escribe \\sum_{i} u_i(s) = 0 para todos los perfiles s. Usa x^\\top o x^T para la traspuesta, de forma coherente. El ajedrez y el póker mano a mano son ejemplos clásicos.",
  },
  "cooperative-value": {
    name: "Función característica",
    meaning: "Función característica de un juego cooperativo: el valor total que una coalición S puede asegurarse por sí sola.",
    usage:
      "Un juego de utilidad transferible es un par (N, v) con v: 2^N \\to \\mathbb{R} y v(\\emptyset) = 0. La superaditividad, v(S \\cup T) \\ge v(S) + v(T) para coaliciones disjuntas, hace que merezca la pena formar la gran coalición. El núcleo (core) es el conjunto de asignaciones x con \\sum_{i \\in S} x_i \\ge v(S) para toda S. \\emptyset da un círculo tachado; \\varnothing da la forma más redonda y moderna. Aquí S es una coalición, no un conjunto de estrategias, así que indícalo explícitamente.",
  },
  "shapley-value": {
    name: "Valor de Shapley",
    meaning: "Valor de Shapley: la parte justa de v(N) que corresponde al jugador i, su contribución marginal media sobre todas las ordenaciones.",
    usage:
      "La fórmula es \\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!\\,(n-|S|-1)!}{n!}\\,(v(S \\cup \\{i\\}) - v(S)). Es la única asignación que cumple eficiencia, simetría, la propiedad del jugador nulo y aditividad. El aprendizaje automático lo usa para la atribución de características, como en SHAP. Elige entre \\phi y \\varphi a propósito, ya que se ven bastante distintas. Dentro de la diferencia de conjuntos, escapa las llaves como \\{i\\} para que se impriman. El cálculo exacto suma sobre las 2^{n-1} coaliciones por jugador, así que en la práctica son habituales las aproximaciones por muestreo. En un juego simétrico cada jugador recibe v(N)/n.",
  },
  "subgame-perfect": {
    name: "Equilibrio perfecto en subjuegos",
    meaning: "Equilibrio perfecto en subjuegos: un equilibrio de Nash cuya restricción a cada subjuego es también un equilibrio de Nash.",
    usage:
      "Selten introdujo el concepto para descartar amenazas no creíbles, y en los juegos finitos con información perfecta la inducción hacia atrás encuentra el EPS (SPE en inglés). Escrito como SPE en modo matemático, las tres letras son variables en cursiva multiplicadas, con un mal interletraje; escribe \\mathrm{SPE} o \\text{SPE} en las fórmulas y texto normal en la prosa. Los conceptos de solución relacionados se escriben igual, \\mathrm{NE}, \\mathrm{PBE} para el equilibrio bayesiano perfecto. Todo EPS es un equilibrio de Nash, pero no al revés. La negociación secuencial y los juegos repetidos dependen mucho de él.",
  },
  "information-set": {
    name: "Conjunto de información",
    meaning: "Conjunto de información en un juego en forma extensiva: los nodos de decisión que un jugador no puede distinguir cuando le toca jugar.",
    usage:
      "Cada conjunto de información h pertenece a un único jugador, ofrece las mismas acciones A(h) en todos sus nodos y recoge la información imperfecta, como las jugadas ocultas. Las estrategias de comportamiento asignan una distribución \\sigma_i(h) \\in \\Delta(A(h)) a cada uno de los conjuntos de información del jugador. Las convenciones varían: muchos textos usan I o I_i para los conjuntos de información y reservan h para las historias, así que define tu notación. La información perfecta significa que cada h es un único nodo. La memoria perfecta exige que un jugador nunca olvide sus jugadas ni la información anteriores.",
  },
  "action": {
    name: "Acción",
    meaning: "Acción del jugador i, una elección hecha en un único punto de decisión, a diferencia de una estrategia completa.",
    usage:
      "En los juegos de una sola etapa, las acciones y las estrategias puras coinciden, así que muchos textos escriben los perfiles como a = (a_i, a_{-i}) con a_i \\in A_i. En los juegos extensivos y repetidos, las acciones son jugadas locales, mientras que las estrategias asignan acciones a las historias o a los conjuntos de información. Los artículos sobre aprendizaje y aprendizaje por refuerzo multiagente usan a_i^t para la acción en la ronda t. Añade primas para las alternativas, a_i', y llaves para el índice complementario, a_{-i}. En los juegos repetidos, una historia es una sucesión de perfiles de acciones, h^t = (a^0, \\ldots, a^{t-1}).",
  },
};

export default text;
