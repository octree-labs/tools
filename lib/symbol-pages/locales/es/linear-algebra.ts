import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "Vector en negrita",
    meaning: "Letra en negrita redonda, la convención tipográfica habitual para un vector como x en R^n.",
    usage:
      "Los textos de álgebra lineal y los artículos de física marcan los vectores en negrita, como en A\\mathbf{x} = \\mathbf{b}. \\mathbf solo afecta a las letras latinas y a los dígitos; las letras griegas como \\alpha no cambian, así que para ellas use \\boldsymbol{\\alpha}. Tenga en cuenta que \\mathbf da negrita redonda, mientras que \\boldsymbol{x} da negrita cursiva; el estilo ISO prefiere la negrita cursiva para los vectores, aunque muchos libros de texto usan la redonda. Otras alternativas son \\vec{x} con flecha, habitual en la física introductoria, y el subrayado en apuntes de estilo manuscrito. Elija una convención y aplíquela con coherencia, idealmente mediante una macro para poder cambiarla en un solo lugar.",
  },
  "transpose": {
    name: "Traspuesta",
    meaning: "Traspuesta de la matriz A escrita con el símbolo \\top, que intercambia filas y columnas.",
    usage:
      "Usar \\top como superíndice da una marca redonda y limpia en forma de T que no se confunde con una variable llamada T, y por eso muchos artículos de aprendizaje automático y estadística escriben \\mathbf{x}^{\\top}\\mathbf{y} o (AB)^{\\top} = B^{\\top}A^{\\top}. A^T se parece, pero usa una T cursiva, y \\intercal es una tercera opción, más baja y estrecha. Elija lo que elija, defina una macro corta para ello, de modo que cambiar de estilo más adelante sea una edición de una línea. Para matrices complejas, la traspuesta conjugada suele escribirse A^{*} o A^{H}, con \\dagger habitual en física.",
  },
  "transpose-t": {
    name: "Traspuesta (T)",
    meaning: "Traspuesta de A marcada con una T cursiva en superíndice, la forma más común en los libros de texto.",
    usage:
      "Escribir A^T es rápido y se entiende en todas partes: las ecuaciones normales de mínimos cuadrados A^T A\\mathbf{x} = A^T\\mathbf{b} aparecen así en la mayoría de los libros de álgebra lineal. El inconveniente es la ambigüedad cuando T también es una variable, como un horizonte temporal o una temperatura, ya que A^T podría leerse entonces como una potencia. En ese caso pase a A^{\\top} o a la forma redonda A^{\\mathsf{T}}. Las llaves son necesarias en cuanto el superíndice tiene más de un elemento, así que la inversa de la traspuesta es A^{-T}, no A^-T. Una matriz simétrica es aquella que cumple A^T = A.",
  },
  "inverse": {
    name: "Inversa",
    meaning: "Inversa de la matriz cuadrada A, la matriz cuyo producto con A es la identidad.",
    usage:
      "Cumple AA^{-1} = A^{-1}A = I y solo existe cuando \\det(A) \\neq 0. Las llaves son obligatorias: A^-1 pondría como superíndice solo el signo menos y dejaría el 1 en la línea base. Para una matriz 2 por 2, la fórmula explícita con \\frac{1}{ad-bc} multiplicado por la adjunta suele componerse completa con bmatrix. En los artículos numéricos, los lectores entienden que la inversa rara vez se calcula explícitamente, así que escribir \\mathbf{x} = A^{-1}\\mathbf{b} como notación es correcto. Las pseudoinversas usan A^{+} o A^{\\dagger}, y (AB)^{-1} = B^{-1}A^{-1} invierte el orden.",
  },
  "determinant": {
    name: "Determinante",
    meaning: "Determinante de una matriz cuadrada A, el escalar que da su factor de escala de volumen con signo.",
    usage:
      "\\det es un operador predefinido, así que se imprime en redonda con el espaciado correcto; escribir det(A) pondría en cursiva tres variables distintas. Entre las identidades clave están \\det(AB) = \\det(A)\\det(B) y \\det(A^{-1}) = 1/\\det(A). A diferencia de \\sin, \\det admite límites colocados debajo en estilo display, como \\lim. Para una matriz explícita, el entorno vmatrix dibuja directamente las barras verticales, de modo que \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc se lee con naturalidad. Los paréntesis son opcionales cuando el argumento es una sola letra, \\det A, como con otros operadores.",
  },
  "trace": {
    name: "Traza",
    meaning: "Traza de A, la suma de los elementos de su diagonal, escrita con la etiqueta «tr» en redonda.",
    usage:
      "La traza aparece en identidades como \\operatorname{tr}(AB) = \\operatorname{tr}(BA) y en la norma de Frobenius \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A). Con \\text{tr} se obtienen letras redondas, pero hereda la fuente del texto circundante, pasa a cursiva dentro de un teorema y no añade espaciado de operador. La opción más robusta es \\operatorname{tr}, o un \\DeclareMathOperator{\\tr}{tr} global en el preámbulo, para que \\tr A se espacie correctamente sin paréntesis. Los físicos suelen escribir Tr con mayúscula, sobre todo para las matrices densidad. La traza también es igual a la suma de los valores propios contados con su multiplicidad.",
  },
  "rank": {
    name: "Rango",
    meaning: "Rango de A: la dimensión de su espacio de columnas, escrita con una etiqueta en redonda.",
    usage:
      "El teorema del rango y la nulidad dice \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n, y una matriz cuadrada es invertible exactamente cuando tiene rango completo. \\text{rank} da letras redondas, pero la cursiva de un entorno de teorema puede filtrarse en ellas y no tiene espaciado de operador. Es preferible \\operatorname{rank}(A), o declarar una vez \\DeclareMathOperator{\\rank}{rank} y escribir \\rank A. No existe un comando \\rank predefinido, así que escribirlo sin definirlo provoca un error de secuencia de control no definida (undefined control sequence). La aproximación de bajo rango mediante la SVD truncada es un caso habitual en el que lo compondrá.",
  },
  "norm": {
    name: "Norma",
    meaning: "Dobles barras verticales alrededor de x, que denotan su norma, longitud o magnitud.",
    usage:
      "Usar \\lVert y \\rVert en lugar de \\| a ambos lados indica a LaTeX qué barra abre y cuál cierra, lo que da el espaciado correcto en expresiones como \\lVert -x \\rVert, donde \\|-x\\| trataría el menos como operador binario. Los subíndices seleccionan la norma: \\lVert x \\rVert_2 para la euclídea, \\lVert x \\rVert_1, \\lVert x \\rVert_\\infty, o \\lVert A \\rVert_F para la de Frobenius. Para contenidos altos, use \\left\\lVert ... \\right\\rVert. La desigualdad triangular \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert es un uso típico, y una macro \\norm ahorra mucho tecleo en artículos largos.",
  },
  "inner-product": {
    name: "Producto interno",
    meaning: "Corchetes angulares alrededor de dos vectores, que denotan su producto interno o producto escalar.",
    usage:
      "Los productos internos generalizan el producto escalar: \\langle x, y \\rangle = \\sum_i x_i y_i en R^n, y la desigualdad de Cauchy-Schwarz |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert es el ejemplo clásico. No escriba nunca los signos menor que y mayor que en su lugar; < y > son relaciones con espaciado amplio y el ángulo equivocado. Para argumentos grandes, \\left\\langle ... \\right\\rangle ajusta el tamaño de los corchetes. En mecánica cuántica, los mismos corchetes forman la notación bra-ket, \\langle \\psi | \\phi \\rangle, con una barra en medio. Algunos libros escriben (x, y) o x \\cdot y para la misma cantidad.",
  },
  "kronecker-delta": {
    name: "Delta de Kronecker",
    meaning: "Delta de Kronecker: vale 1 cuando los índices i y j coinciden y 0 en caso contrario.",
    usage:
      "Recoge la matriz identidad elemento a elemento, I_{ij} = \\delta_{ij}, y expresa la ortonormalidad de una base, \\langle e_i, e_j \\rangle = \\delta_{ij}. En notación de índices actúa como operador de sustitución: \\sum_j \\delta_{ij} a_j = a_i, lo que simplifica los cálculos tensoriales. No la confunda con la delta de Dirac \\delta(x), una distribución sobre variables continuas, aunque ambas usen la \\delta minúscula. Las llaves alrededor de ij mantienen ambos índices en el subíndice; \\delta_ij bajaría solo la i y dejaría la j en la línea base. En trabajo tensorial con índices mixtos, escriba \\delta^i_j.",
  },
  "identity-matrix": {
    name: "Matriz identidad",
    meaning: "La matriz identidad n por n, con unos en la diagonal y ceros en el resto.",
    usage:
      "El subíndice indica el tamaño, así que para una matriz A de m por n se cumplen AI_n = A e I_m A = A, con identidades distintas a cada lado. Cuando la dimensión es obvia, basta con I; algunos autores prefieren la negrita \\mathbf{I} o escriben E, sobre todo en textos europeos antiguos. Para tamaños de varios caracteres, añada llaves: I_{n+1} o I_{10}, porque I_10 bajaría solo el 1. El polinomio característico \\det(A - \\lambda I_n) es el lugar habitual donde aparece, y \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} escribe I_2 de forma explícita.",
  },
  "zero-matrix": {
    name: "Matriz nula",
    meaning: "Cero en negrita, que denota el vector nulo o la matriz nula, a diferencia del escalar 0.",
    usage:
      "La negrita distingue el elemento neutro de la suma de un espacio vectorial del número cero, como en A\\mathbf{x} = \\mathbf{0} para un sistema homogéneo o \\mathbf{v} + \\mathbf{0} = \\mathbf{v}. \\mathbf funciona con dígitos, así que esta es la forma más sencilla; \\boldsymbol{0} da el mismo resultado en la mayoría de las fuentes. Para una matriz nula de tamaño explícito, escriba \\mathbf{0}_{m \\times n} o una O mayúscula, O_{m \\times n}. Muchos artículos prescinden de la negrita y escriben 0 cuando el contexto aclara el tipo, lo cual es aceptable si se hace con coherencia. Use el mismo estilo de negrita que para los demás vectores.",
  },
  "matrix": {
    name: "Matriz",
    meaning: "Entorno bmatrix, que compone una matriz entre corchetes, con & entre las columnas.",
    usage:
      "Las entradas de una fila se separan con &, las filas terminan con \\\\ y los corchetes se ajustan al contenido, así que no hace falta \\left[. Los entornos hermanos solo cambian los delimitadores: pmatrix usa paréntesis, vmatrix barras verticales para determinantes, Vmatrix barras dobles y matrix a secas ninguno. El entorno array es la alternativa más antigua; necesita una especificación de columnas como {cc}, pero permite líneas verticales y alineación por columna. Para matrices genéricas, rellene los huecos con \\cdots, \\vdots y \\ddots, como en a_{11} & \\cdots & a_{1n}. En línea, smallmatrix dentro de \\bigl[ \\bigr] evita estirar la línea.",
  },
  "column-vector": {
    name: "Vector columna",
    meaning: "pmatrix con una sola columna, que apila x sobre y como vector columna entre paréntesis.",
    usage:
      "Cada \\\\ inicia una nueva fila, así que una única columna de entradas se convierte en un vector vertical, la forma habitual de escribir coordenadas en R^2 o el término independiente de un sistema lineal. Los paréntesis (pmatrix) y los corchetes (bmatrix) son igual de estándar; elija un estilo para todo el documento. Para ahorrar espacio vertical en el texto corrido, escriba en su lugar una fila traspuesta, (x, y)^{\\top}. Para vectores largos, use \\vdots en una fila intermedia, como en x_1 \\\\ \\vdots \\\\ x_n. Los vectores columna en línea quedan apretados y separan las líneas; smallmatrix es la alternativa compacta cuando no se pueden evitar.",
  },
};

export default text;
