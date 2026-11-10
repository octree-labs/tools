import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/boolean/<slug>. */
const text: SymbolPageTranslations = {
  "nand": {
    name: "Operador NAND",
    meaning: "Cuña con una barra encima, usada como conectiva NAND (barra de Sheffer): verdadera salvo que ambas entradas sean verdaderas.",
    usage: "NAND es funcionalmente completa, de modo que cualquier función booleana puede construirse solo con p \\barwedge q, y los diseñadores digitales la usan precisamente por eso. Los lógicos también escriben la barra de Sheffer como una barra vertical, p \\mid q, o como p \\uparrow q, así que indica tu notación una vez. \\barwedge es un operador binario, con espaciado medio a cada lado. No lo confundas con \\veebar, que lleva la barra debajo de una v y suele denotar la disyunción exclusiva, ni con \\doublebarwedge, que lleva dos barras. Su tabla de verdad es la complementaria de la de \\wedge.",
  },
  "nor-operator-bar-over-vee": {
    name: "Operador NOR (barra sobre la disyunción)",
    meaning: "Una v con un acento de barra encima, construida a mano para representar NOR (flecha de Peirce): verdadera solo cuando ambas entradas son falsas.",
    usage: "Las fuentes matemáticas habituales no tienen un comando estándar para el glifo NOR, así que \\bar{\\vee} lo imita poniendo un acento sobre el símbolo de la disyunción. Un efecto secundario: un símbolo acentuado se convierte en un átomo ordinario y pierde el espaciado de operador binario que tenía \\vee, así que escribe \\mathbin{\\bar{\\vee}} para recuperarlo, idealmente dentro de un \\newcommand. La notación alternativa p \\downarrow q (flecha de Peirce) se entiende ampliamente y evita el problema. No lo confundas con \\veebar, cuya barra está debajo de la v y que normalmente significa XOR.",
  },
  "boolean-and": {
    name: "Conjunción booleana (AND)",
    meaning: "Punto centrado entre dos variables, la notación de ingeniería para el AND booleano (conjunción lógica).",
    usage: "El álgebra de conmutación y la electrónica digital escriben la conjunción de forma multiplicativa: A \\cdot B, o simplemente AB, reflejando que AND se comporta como la multiplicación sobre 0 y 1. En lógica formal la misma operación se escribe A \\wedge B o A \\land B. \\cdot es un operador binario, así que ya recibe espaciado medio; no uses un punto, que en modo matemático funciona como signo de puntuación y se apoya en la línea base. Muchos libros omiten el punto por completo en expresiones de suma de productos como AB + \\overline{A}C y conservan \\cdot solo donde la yuxtaposición sería ambigua, por ejemplo entre nombres de señales de varias letras.",
  },
  "boolean-or": {
    name: "Disyunción booleana (OR)",
    meaning: "Signo más usado como OR booleano en el álgebra de conmutación: la salida es 1 cuando al menos una entrada es 1.",
    usage: "Los diseñadores de circuitos escriben la disyunción como A + B, de modo que las formas de suma de productos como AB + \\overline{A}C se leen con naturalidad. Cuidado con el significado aritmético: en el álgebra de Boole 1 + 1 = 1, mientras que en el cuerpo de dos elementos el signo más significa XOR y 1 + 1 = 0, por lo que XOR suele tener su propio símbolo \\oplus. Los lógicos escriben el mismo OR como A \\vee B o A \\lor B. No hace falta ningún comando especial; el + ya lleva espaciado de operador binario, y en expresiones largas puedes cortar la línea antes de un + dentro de un entorno multline.",
  },
  "boolean-not": {
    name: "Negación booleana (NOT)",
    meaning: "Barra trazada sobre todo el ancho de su argumento; indica el NOT booleano en circuitos lógicos y la clausura de un conjunto en topología.",
    usage: "En lógica digital \\overline{A} es la señal invertida, y \\overline{A \\cdot B} traza una barra continua sobre toda una expresión, que es la razón visual por la que los ingenieros la prefieren a un \\neg prefijo. Los topólogos usan la misma construcción para la clausura de un conjunto. A diferencia de \\bar{A}, que es un acento de ancho fijo pensado para una sola letra, \\overline se estira para cubrir todo lo que hay entre las llaves. Las negaciones anidadas como \\overline{\\overline{A}} se apilan limpiamente. Para una barra algo más corta sobre letras sueltas, algunos autores prefieren \\bar; cualquiera de las dos sirve si eres coherente.",
  },
  "complement": {
    name: "Complemento",
    meaning: "Una prima tras una variable o un conjunto, notación compacta para el complemento o la negación booleana de A.",
    usage: "Los cursos de teoría de conjuntos suelen escribir A' para el complemento U \\setminus A, y algunos libros de diseño lógico escriben A' en lugar de \\overline{A} porque cabe en una línea y es fácil de teclear. En modo matemático el apóstrofo se convierte automáticamente en un superíndice \\prime, así que A'' da una prima doble con el espaciado correcto. El peligro es la ambigüedad: A' también denota derivadas, conjuntos derivados en topología y espacios duales. Las alternativas incluyen A^c y A^{\\complement}. Elijas la que elijas, defínela una vez cerca del comienzo del documento.",
  },
  "de-morgan": {
    name: "Ley de De Morgan",
    meaning: "La ley de De Morgan en notación booleana: el complemento de un AND es igual al OR de los complementos.",
    usage: "Esta identidad permite a los diseñadores convertir circuitos basados en AND en circuitos basados en OR, y es la razón por la que una puerta NAND equivale a una puerta OR con las entradas invertidas. Su dual dice \\overline{A + B} = \\overline{A} \\cdot \\overline{B}. El ejemplo muestra por qué importa \\overline: una barra larga sobre A \\cdot B se distingue visiblemente de barras separadas sobre cada letra, y esa distinción es todo el contenido de la ley. En notación de conjuntos la misma ley es (A \\cap B)^c = A^c \\cup B^c, y en lógica \\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q.",
  },
};

export default text;
