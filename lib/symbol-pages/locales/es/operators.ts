import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "Suma directa",
    meaning: "Signo más dentro de un círculo, para sumas directas de espacios o módulos y para la disyunción exclusiva (XOR) en álgebra booleana.",
    usage: "En álgebra lineal se escribe V = U \\oplus W cuando cada vector se descompone de forma única en una parte de U y otra de W, y en teoría de módulos se construye \\mathbb{Z} \\oplus \\mathbb{Z}. En informática y criptografía, a \\oplus b es el XOR bit a bit, como en el cifrado de libreta de un solo uso c = m \\oplus k. Es un operador binario, así que recibe espaciado medio. Para una suma directa sobre un conjunto de índices, usa el operador grande \\bigoplus_{i \\in I} V_i, que admite límites como \\sum. No lo confundas con \\pm ni con un + normal; en algunas álgebras \\oplus denota además una suma deformada.",
  },
  "tensor-product": {
    name: "Producto tensorial",
    meaning: "Signo de multiplicación dentro de un círculo: el producto tensorial de vectores, espacios, módulos o matrices (producto de Kronecker).",
    usage: "El álgebra multilineal escribe V \\otimes W, la mecánica cuántica escribe estados compuestos |\\psi\\rangle \\otimes |\\phi\\rangle y el álgebra matricial usa A \\otimes B para el producto de Kronecker. En aprendizaje automático aparece a veces para productos exteriores. Es un operador binario con espaciado medio. Para productos iterados usa el operador grande \\bigotimes_{i=1}^n V_i, y para el producto tensorial sobre un anillo pon el anillo como subíndice, M \\otimes_R N. No uses \\times, que es el producto cartesiano o el producto vectorial.",
  },
  "circle-dot": {
    name: "Punto en círculo",
    meaning: "Punto dentro de un círculo, habitual para el producto elemento a elemento (de Hadamard) de vectores o matrices.",
    usage: "Los artículos de aprendizaje profundo escriben h_t = o_t \\odot \\tanh(c_t) para productos elemento a elemento en las LSTM y en máscaras de atención, y el álgebra lineal numérica usa A \\odot B para el producto de Hadamard, a menudo junto a \\circ con el mismo significado. Los diagramas de física usan un punto en un círculo para un vector que sale del plano del papel, aunque ahí es un símbolo y no un operador. Es un operador binario con espaciado medio; también existe la forma grande \\bigodot. Indica en tu sección de notación si \\odot significa producto de Hadamard, ya que algunos autores lo usan para XNOR u otras operaciones.",
  },
  "circle-minus": {
    name: "Signo menos en círculo",
    meaning: "Signo menos dentro de un círculo, usado para complementos ortogonales dentro de un espacio y para algunas operaciones de tipo diferencia.",
    usage: "En la teoría de espacios de Hilbert, H \\ominus K denota el complemento ortogonal de un subespacio cerrado K dentro de H, la contrapartida de \\oplus. El procesamiento morfológico de imágenes usa A \\ominus B para la erosión, y algunos textos de teoría de conjuntos lo emplean para la diferencia simétrica, aunque ahí es más común \\triangle. Es un operador binario, así que el espaciado es automático. Como su significado varía, defínelo una vez en tu artículo. No hay una versión estándar como operador grande. En el uso como diferencia simétrica, A \\ominus B equivale a (A \\setminus B) \\cup (B \\setminus A).",
  },
  "circle-slash": {
    name: "Barra en círculo",
    meaning: "Barra oblicua dentro de un círculo, que suele denotar la división elemento a elemento (de Hadamard) de vectores o matrices.",
    usage: "Los textos de cálculo matricial y aprendizaje automático escriben A \\oslash B para la división entrada a entrada, en pareja con \\odot para la multiplicación entrada a entrada, como en actualizaciones normalizadas x \\oslash \\sqrt{v}. LaTeX lo trata como operador binario, así que recibe el mismo espaciado medio que \\odot y \\otimes. Ten en cuenta que es distinto de \\varnothing y \\emptyset, que parecen un círculo tachado pero son símbolos ordinarios para el conjunto vacío, y de la letra escandinava \\o. Como no es universalmente conocido, preséntalo en la sección de notación.",
  },
  "star": {
    name: "Estrella",
    meaning: "Operador binario en forma de estrella de cinco puntas, usado para la convolución, la dualidad de Hodge y productos personalizados.",
    usage: "El procesamiento de señales escribe a veces la correlación cruzada como f \\star g, la geometría diferencial usa \\star para el operador estrella de Hodge y los algebristas lo emplean para operaciones binarias genéricas o para el producto estrella de Moyal. En optimización, los valores óptimos se escriben x^\\star, como alternativa a x^*. \\star es un operador binario, distinto de \\ast (el asterisco) y del símbolo que produce \\bigstar. Como su espaciado es el de un operador binario, usarlo como operador prefijo, por ejemplo la estrella de Hodge, puede requerir llaves: {\\star}\\omega.",
  },
  "asterisk": {
    name: "Asterisco",
    meaning: "Asterisco como operador binario, normalmente para la convolución o una operación de grupo genérica.",
    usage: "En modo matemático, \\ast es el mismo glifo que se obtiene al teclear *, un operador binario con espaciado medio que se usa para la convolución (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau y para operaciones binarias genéricas en álgebra. Como superíndice, A^* o A^\\ast denota el adjunto, la traspuesta conjugada, el espacio dual o la estrella de Kleene, según el campo. Se sitúa centrado sobre el eje matemático, a diferencia del asterisco elevado del texto. Para un valor óptimo con estrella x^\\star, algunos autores prefieren \\star para mantener separados los significados.",
  },
  "composition": {
    name: "Composición",
    meaning: "Operador de círculo pequeño, estándar para la composición de funciones y también usado para los grados.",
    usage: "El uso principal es (f \\circ g)(x) = f(g(x)). Como superíndice, 90^\\circ da grados, aunque un símbolo de grado dedicado de una fuente text-companion puede verse mejor, y A^\\circ suele significar el interior o el conjunto polar. Algunos autores usan \\circ para el producto de Hadamard, donde \\odot es la alternativa más clara. \\circ es un operador binario, así que recibe espacio medio; \\bigcirc es un círculo más grande y \\cdot un punto relleno. Evita usar la letra o para la composición.",
  },
  "bullet": {
    name: "Punto grueso",
    meaning: "Punto redondo relleno como operador binario, usado como marcador de posición, para productos genéricos y para objetos graduados.",
    usage: "La teoría de categorías y el álgebra homológica usan \\bullet como marcador de índice, como en C_\\bullet para un complejo de cadenas y H^\\bullet para la cohomología total. También sirve como argumento comodín, f(\\bullet, y), y como símbolo de operación en álgebra. Las viñetas de las listas itemize se generan con \\textbullet, no con el \\bullet matemático. Comparado con \\cdot, es más grande y grueso; \\cdot es la opción correcta para la multiplicación ordinaria o el producto escalar. Como operador binario recibe espaciado medio, así que como marcador en f(\\bullet) el espaciado queda bien porque no tiene operando a la izquierda.",
  },
  "diamond": {
    name: "Rombo",
    meaning: "Operador binario en forma de rombo pequeño, usado para operaciones genéricas y en algunas notaciones modales y algebraicas.",
    usage: "\\diamond aparece como operación binaria arbitraria (a \\diamond b), en el producto diamante de la teoría de Lie y en teoría de autómatas. La lógica modal escribe la posibilidad con un rombo más grande, normalmente \\Diamond o \\lozenge, en lugar de esta versión pequeña de operador binario. Como \\diamond es un operador binario, usarlo como operador prefijo delante de una fórmula da un espaciado raro; usa \\Diamond o envuélvelo así: {\\diamond}p. Se diferencia de \\diamondsuit, el palo de la baraja, que es un símbolo ordinario.",
  },
  "big-circle": {
    name: "Círculo grande",
    meaning: "Operador binario en forma de círculo abierto grande, mayor que \\circ, usado para productos especiales y diagramas.",
    usage: "\\bigcirc es sobre todo un símbolo a elección para operaciones personalizadas, por ejemplo un producto tipo caja, o en lógica temporal, donde un círculo denota el operador «en el siguiente instante», \\bigcirc p. Es un operador binario, no un operador grande con límites, así que no crece en modo display como lo hace \\bigcup. Para rodear un símbolo con un círculo, superponer \\bigcirc resulta incómodo; funciona mejor un nodo circular de un paquete de dibujo o \\textcircled. Para la composición, lo estándar es el \\circ pequeño. Para un operador dentro de un círculo como \\oplus o \\otimes, los comandos dedicados encajan mejor que las superposiciones.",
  },
  "triangle-up": {
    name: "Triángulo hacia arriba",
    meaning: "Triángulo abierto que apunta hacia arriba, usado para triángulos en geometría, la diferencia simétrica y el laplaciano.",
    usage: "La geometría escribe \\triangle ABC para un triángulo, la teoría de conjuntos escribe A \\triangle B para la diferencia simétrica y algunos textos lo usan para el operador de Laplace, aunque lo habitual es \\Delta o \\nabla^2. En LaTeX estándar, \\triangle es un símbolo ordinario, no un operador binario, así que en A \\triangle B quizá quieras \\mathbin{\\triangle} para un espaciado correcto, o usar \\bigtriangleup, que ya es un operador binario. Es más grande y tiene otra forma que la delta mayúscula griega \\Delta.",
  },
  "triangle-down": {
    name: "Triángulo hacia abajo",
    meaning: "Triángulo abierto pequeño que apunta hacia abajo, un símbolo ordinario y no un operador.",
    usage: "\\triangledown es un triángulo más pequeño, con espaciado ordinario, que apunta hacia abajo y se usa como decoración o marcador en algunas notaciones. No es lo mismo que \\nabla, el operador gradiente, que tiene otra forma y es el que necesitas para \\nabla f; tampoco es \\bigtriangledown, que es un operador binario más grande. Si usas \\triangledown como operación, envuélvelo en \\mathbin para obtener espaciado de operador. Para versiones rellenas existe \\blacktriangledown. En artículos terminados aparece rara vez, sobre todo como referencia a un marcador de gráfica en los pies de figura o como operación personalizada.",
  },
  "square": {
    name: "Cuadrado",
    meaning: "Símbolo de cuadrado abierto, usado para el operador de d'Alembert, la necesidad modal y las marcas de fin de demostración.",
    usage: "Los físicos escriben \\square para el operador de ondas de d'Alembert, \\square = \\partial_t^2/c^2 - \\nabla^2, la lógica modal usa \\square p para «necesariamente p» (a menudo como \\Box), y el cuadrado hueco sirve de marca QED al final de las demostraciones. En las demostraciones de amsthm esa marca se coloca automáticamente mediante \\qedsymbol, así que rara vez tendrás que escribirla tú. \\square es un símbolo ordinario; \\blacksquare da la versión rellena. Muchos textos de lógica escriben \\Box para la necesidad; los dos glifos son casi idénticos. Cuando se usa como operador delante de un campo, no hace falta espaciado adicional.",
  },
  "wedge": {
    name: "Cuña",
    meaning: "Operador binario en forma de cuña, para el Y lógico, el producto exterior (producto cuña) y los ínfimos en retículos.",
    usage: "La geometría diferencial construye formas como dx \\wedge dy, con \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega. La lógica usa p \\wedge q para la conjunción (\\land es un alias), la teoría de retículos escribe a \\wedge b para la cota inferior máxima y los probabilistas escriben s \\wedge t para \\min(s, t). Es un operador binario con espaciado medio. Para conjunciones sobre un conjunto de índices, usa el operador grande \\bigwedge. En topología, X \\wedge Y es el producto smash de espacios punteados. No lo confundas con el acento circunflejo \\hat ni con \\widehat.",
  },
  "vee": {
    name: "Símbolo vee",
    meaning: "Operador binario en forma de uve, para el O lógico, los supremos en retículos y las sumas cuña de espacios.",
    usage: "La lógica escribe p \\vee q para la disyunción inclusiva, y \\lor es un alias idéntico. La teoría de retículos usa a \\vee b para la cota superior mínima, la probabilidad escribe s \\vee t para \\max(s, t) y la topología usa X \\vee Y para la suma cuña, que pega espacios por un punto base. Para muchos términos, usa \\bigvee_{i} p_i. Se distingue de la letra v y de \\veebar, que algunos textos usan para la disyunción exclusiva. El símbolo tiene espaciado de operador binario.",
  },
  "amalgamation": {
    name: "Amalgamación",
    meaning: "Operador de amalgamación, usado para uniones disjuntas y coproductos.",
    usage: "La teoría de categorías y la topología escriben X \\amalg Y para el coproducto o la unión disjunta, y la teoría de grupos usa G \\ast_H K para los productos libres amalgamados, con \\amalg en algunos textos. \\amalg es un operador binario. Para la versión indexada con límites, usa el operador grande \\coprod_{i \\in I} X_i, que tiene el mismo aspecto pero se escala en estilo display. Otras alternativas para la unión disjunta son \\sqcup y \\bigsqcup, de forma más achatada y más comunes en teoría de conjuntos.",
  },
  "dagger": {
    name: "Daga",
    meaning: "Símbolo de daga, usado sobre todo en superíndices para adjuntos y conjugados hermíticos.",
    usage: "La mecánica cuántica escribe A^\\dagger para el adjunto hermítico, de modo que a^\\dagger es el operador de creación, y en álgebra lineal algunos textos usan A^\\dagger para la pseudoinversa de Moore-Penrose (A^+ es la alternativa). La daga también marca notas al pie o entradas especiales en tablas. En matemáticas es un operador binario, pero como superíndice su espaciado es irrelevante. En modo texto usa \\textdagger. La versión doble \\ddagger se usa para notas al pie de segundo nivel y algunas notaciones especiales. La teoría cuántica de campos la usa constantemente para los operadores de creación y aniquilación.",
  },
  "double-dagger": {
    name: "Daga doble",
    meaning: "Símbolo de daga doble, usado como marca de nota al pie y ocasionalmente como decoración en superíndice.",
    usage: "\\ddagger es el segundo símbolo de nota al pie después de \\dagger en muchos estilos y marca afiliaciones o notas de tablas. En matemáticas a veces decora operadores, por ejemplo un estado de transición X^\\ddagger en cinética química (energía de activación \\Delta G^\\ddagger). Como comando matemático es un operador binario, pero como superíndice el espaciado no importa. En modo texto usa \\textdaggerdbl. Como su significado no está estandarizado, explícalo donde lo uses por primera vez. Colocado como superíndice no necesita llaves: X^\\ddagger funciona directamente.",
  },
  "wreath-product": {
    name: "Producto en corona",
    meaning: "Operador de corona, escrito entre grupos para denotar el producto en corona.",
    usage: "La teoría de grupos escribe G \\wr H para el producto en corona, por ejemplo el grupo hiperoctaédrico \\mathbb{Z}_2 \\wr S_n, y los subgrupos de Sylow de los grupos simétricos son productos en corona iterados. El símbolo es una pequeña línea vertical ondulada que se compone como operador binario. Se parece un poco a una tilde girada, pero a diferencia de la relación \\sim lleva espaciado de operador binario. Algunos autores escriben los factores en el orden inverso, así que indica qué grupo actúa. Los grupos del cubo de Rubik y los grupos de automorfismos de árboles son ejemplos clásicos en los que aparecen productos en corona.",
  },
  "set-minus": {
    name: "Diferencia de conjuntos",
    meaning: "Operador de diferencia de conjuntos: A \\setminus B es el conjunto de los elementos de A que no están en B.",
    usage: "Usa \\setminus para la diferencia de conjuntos, A \\setminus B, y para quitar elementos, \\mathbb{R} \\setminus \\{0\\}. Es un operador binario con el espaciado adecuado, mientras que \\backslash tiene el mismo aspecto pero es un símbolo ordinario que se usa para cocientes como G \\backslash X (clases laterales por la izquierda). La variante más pequeña \\smallsetminus queda mejor con algunas fuentes. Algunos autores escriben A - B, pero \\setminus evita la confusión con la resta. Combinado con \\complement: A \\setminus B = A \\cap B^\\complement. En expresiones como G \\backslash X / H para clases dobles, reserva \\backslash para el cociente.",
  },
};

export default text;
