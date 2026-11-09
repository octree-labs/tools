import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/computer-science/<slug>. */
const text: SymbolPageTranslations = {
  "big-o": {
    name: "Notación O grande",
    meaning: "Cota superior asintótica: f(n) = O(n) significa que f no crece más rápido que un múltiplo constante de n para n grande.",
    usage: "La O grande es la herramienta básica del análisis de algoritmos: la búsqueda lineal se ejecuta en O(n), la ordenación por mezcla en O(n \\log n) y la multiplicación de matrices ingenua en O(n^3). En sentido estricto, O(g) es un conjunto de funciones, por lo que f \\in O(g) es la forma precisa, aunque f(n) = O(g(n)) es la convención casi universal. Algunos autores prefieren una \\mathcal{O}(n) caligráfica para distinguir el operador de una variable llamada O; elige una forma y mantenla en todo el artículo. Escribe el argumento con el coste real dentro, como O(n^2 \\log n), en lugar de O(n^2) \\cdot \\log n, y recuerda que O solo acota por arriba, así que no afirma que la cota sea ajustada.",
  },
  "big-omega": {
    name: "Notación Omega grande",
    meaning: "Cota inferior asintótica: f(n) = Omega(n) significa que f crece al menos tan rápido como una constante por n para n grande.",
    usage: "La omega mayúscula expresa cotas inferiores; la más famosa es que cualquier ordenación por comparaciones necesita \\Omega(n \\log n) comparaciones en el peor caso. Se escribe con la mayúscula griega recta \\Omega; amsmath ofrece también \\varOmega para una forma inclinada, que algunos tipógrafos prefieren para variables pero que resulta extraña como operador. Ten en cuenta que la teoría analítica de números usa el significado más antiguo de Hardy y Littlewood, en el que \\Omega indica que la cota no es o(g), así que comprueba qué definición sigue cada fuente. Combínala con O para acotar un tiempo de ejecución por ambos lados y pasa a \\Theta cuando las dos cotas coincidan.",
    example: "\\text{ordenar por comparaciones cuesta un tiempo } \\Omega(n \\log n)",
  },
  "big-theta": {
    name: "Notación Theta grande",
    meaning: "Cota asintótica ajustada: f(n) = Theta(n) significa que f está acotada por arriba y por abajo por múltiplos constantes de n.",
    usage: "Theta es la afirmación correcta cuando has demostrado cotas superior e inferior que coinciden: la búsqueda binaria es \\Theta(\\log n), y el caso intermedio del teorema maestro da \\Theta(n^{\\log_b a} \\log n). Formalmente, f \\in \\Theta(g) exactamente cuando f \\in O(g) y f \\in \\Omega(g). Muchos artículos escriben O donde quieren decir \\Theta; los revisores de congresos de teoría lo notan, así que usa \\Theta cuando lo importante es que la cota sea ajustada. La mayúscula \\Theta es recta por defecto; no la confundas con la minúscula \\theta, que suele nombrar un ángulo o un vector de parámetros, y evita \\vartheta, una variante de la minúscula.",
  },
  "little-o": {
    name: "Notación o pequeña",
    meaning: "Cota superior asintótica estricta: f(n) = o(n) significa que f(n)/n tiende a 0 cuando n crece.",
    usage: "La o pequeña expresa que una función es despreciable frente a otra, como en \\log n = o(n) o n = o(n^2). Es estrictamente más fuerte que la O grande: toda función o(g) es O(g), pero n es O(n) sin ser o(n). Los analistas la usan constantemente en desarrollos de Taylor, como \\sin x = x + o(x) cuando x \\to 0, así que indica siempre el punto límite cuando no sea el infinito. Como es simplemente una o cursiva, no existe un comando especial; asegúrate de que los lectores no la confundan con un cero y mantenla en minúscula para que no choque con la O grande.",
    example: "\\log n = o(n) \\quad \\text{ya que} \\quad \\lim_{n\\to\\infty} \\frac{\\log n}{n} = 0",
  },
  "little-omega": {
    name: "Notación omega pequeña",
    meaning: "Cota inferior asintótica estricta: f(n) = omega(n) significa que f(n)/n crece sin límite.",
    usage: "La omega pequeña es la imagen especular de la o pequeña: f = \\omega(g) exactamente cuando g = o(f), así que n^2 = \\omega(n) y n \\log n = \\omega(n). Aparece con menos frecuencia que \\Omega, sobre todo en demostraciones de cotas inferiores y en algoritmos aleatorizados donde una cantidad debe crecer estrictamente más rápido que de forma lineal. Usa la minúscula griega \\omega, no la w latina, que se le parece en algunas fuentes. Ten en cuenta que el mismo símbolo está sobrecargado: en teoría de grafos \\omega(G) es el número de clique y en teoría de números \\omega(n) cuenta los factores primos distintos, así que define tu uso cuando se mezclen contextos.",
  },
  "modulo": {
    name: "Operador módulo",
    meaning: "Operador binario de módulo: escribe «mod» entre dos operandos, como en a mod n, con el espaciado de un operador.",
    usage: "Usa \\bmod para la operación de resto dentro de una expresión, como 17 \\bmod 5 = 2 o la función hash h(k) = k \\bmod m. Produce un mod recto con un espacio medio a cada lado, igual que un operador binario. Para las congruencias usa en su lugar \\pmod: a \\equiv b \\pmod{n} imprime la forma entre paréntesis con un espacio adicional delante. amsmath define también \\mod{n}, que deja un hueco más amplio sin paréntesis, y \\pod{n}, que conserva los paréntesis pero omite la palabra. Escribir las letras mod sin más las pondría en cursiva como un producto de variables, así que usa siempre uno de estos comandos.",
  },
  "logarithm": {
    name: "Logaritmo",
    meaning: "Escribe el nombre de la función logaritmo en letra redonda recta, con el espaciado correcto antes de su argumento.",
    usage: "\\log es uno de los nombres de función predefinidos de LaTeX, así que imprime un log recto e inserta un espacio fino antes del argumento, a diferencia de teclear log, que pone en cursiva tres variables. Añade una base con un subíndice, como en \\log_2 n para el logaritmo binario; en análisis de algoritmos, \\log sin subíndice suele significar base 2, mientras que en matemáticas a menudo significa el logaritmo natural, así que indica la convención. LaTeX también predefine \\lg para la base 2 y \\ln para el logaritmo natural. Cuando el argumento tenga más de un símbolo, añade paréntesis, por ejemplo \\log(n+1), y usa \\left( \\right) para argumentos altos.",
  },
  "natural-log": {
    name: "Logaritmo natural",
    meaning: "Imprime el nombre del logaritmo natural, ln, en letra recta con el espaciado de un operador.",
    usage: "\\ln es el comando predefinido para el logaritmo en base e: da un ln recto seguido del espaciado adecuado, igual que \\sin o \\exp. Aparece en identidades de cálculo como \\frac{d}{dx}\\ln x = \\frac{1}{x}, en teoría de la información cuando la entropía se mide en nats y en las log-verosimilitudes. Muchos matemáticos escriben \\log para referirse al logaritmo natural, mientras que los ingenieros y los informáticos reservan \\ln para la base e y \\log para la base 10 o 2, así que sé coherente. Para un argumento como una fracción, rodéalo con \\left( y \\right) para que los paréntesis se ajusten a su tamaño.",
  },
};

export default text;
