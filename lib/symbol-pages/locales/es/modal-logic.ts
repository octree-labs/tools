import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  "possibly": {
    name: "Operador de posibilidad",
    meaning: "Operador de posibilidad: \\Diamond p se lee «posiblemente p» y es verdadero en un mundo si p se cumple en algún mundo accesible.",
    usage: "Es el dual de la necesidad, \\Diamond p \\leftrightarrow \\neg\\Box\\neg p, y en el sistema T se tiene p \\to \\Diamond p. La lógica temporal lo lee como «finalmente» y la lógica dinámica escribe \\langle a \\rangle p para la misma idea. \\Diamond es un símbolo ordinario grande; \\diamond es un operador binario pequeño y \\lozenge un rombo estrecho, así que no los intercambies. TeX trata \\Diamond como símbolo ordinario, de modo que \\Diamond p se compone sin hueco; añade \\, solo si tu estilo editorial pide espacio.",
  },
  "not-necessary": {
    name: "Negación de la necesidad",
    meaning: "Necesidad negada: \\neg\\Box p dice que p no es necesario, lo que equivale a \\Diamond\\neg p.",
    usage: "La dualidad \\neg\\Box p \\leftrightarrow \\Diamond\\neg p te permite desplazar las negaciones hacia dentro, el equivalente modal de las leyes de De Morgan para cuantificadores. Semánticamente se cumple en un mundo cuando algún mundo accesible hace falsa p. \\neg es un símbolo ordinario, así que \\neg\\Box p se compone de forma compacta; escribe \\lnot si lo prefieres, es un alias. No existe un comando estándar único para una caja tachada, y un glifo combinado confundiría a los lectores, así que mantén la forma de dos símbolos. En lecturas epistémicas, \\neg K_a p dice que el agente no sabe p, lo cual es más débil que saber \\neg p.",
  },
  "not-possible": {
    name: "Imposibilidad",
    meaning: "Posibilidad negada: \\neg\\Diamond p dice que p es imposible, lo que equivale a \\Box\\neg p.",
    usage: "La imposibilidad es la necesidad de la negación, \\neg\\Diamond p \\leftrightarrow \\Box\\neg p, y se cumple en un mundo cuando ningún mundo accesible satisface p. Una contradicción es imposible en toda lógica modal normal, \\neg\\Diamond\\bot. Las lecturas epistémicas dicen que un agente considera p descartado. El comando \\neg puede sustituirse por \\lnot con un resultado idéntico. Evita improvisar un rombo tachado con \\not\\Diamond, que está pensado para relaciones y coloca mal la barra. Llevar la negación hacia dentro, \\Diamond\\neg p, significa algo distinto: p podría no cumplirse.",
  },
  "necessary-implication": {
    name: "Implicación necesaria",
    meaning: "Implicación necesitada: \\Box(p \\to q) dice que en todo mundo accesible p implica q (implicación estricta).",
    usage: "Es el antecedente del axioma de distribución K, \\Box(p \\to q) \\to (\\Box p \\to \\Box q), que incluye toda lógica modal normal. C. I. Lewis introdujo la implicación estricta exactamente como esta fórmula, por lo que \\Box(p \\to q) se lee a menudo como «p implica estrictamente q». \\to y \\rightarrow dan la misma flecha; \\implies es una flecha larga con espacio extra, más adecuada para el razonamiento metateórico que para las conectivas del lenguaje objeto. Los paréntesis son obligatorios, porque \\Box liga con más fuerza que \\to. La regla de necesitación te permite derivar \\Box(p \\to q) a partir de cualquier teorema p \\to q.",
  },
  "possible-conjunction": {
    name: "Conjunción posible",
    meaning: "Conjunción posible: \\Diamond(p \\land q) dice que existe un mundo accesible en el que p y q se cumplen a la vez.",
    usage: "Implica \\Diamond p \\land \\Diamond q, pero no al revés, ya que p y q pueden ser posibles en mundos distintos; esta asimetría es un clásico de los exámenes. Su dual es \\Box(\\neg p \\lor \\neg q). \\land y \\wedge producen el mismo símbolo; \\land se lee mejor en artículos de lógica. Mantén los paréntesis, porque \\Diamond p \\land q se analiza como (\\Diamond p) \\land q. En términos de Kripke, un único mundo testigo debe satisfacer ambos conyuntos a la vez. Por ejemplo, que llueva es posible y que no llueva es posible, pero que llueva y no llueva a la vez no lo es.",
  },
  "knows": {
    name: "Operador de conocimiento",
    meaning: "Operador epistémico de conocimiento: K_a p se lee «el agente a sabe que p».",
    usage: "La lógica epistémica suele modelar el conocimiento con S5: el axioma de verdad K_a p \\to p, la introspección positiva K_a p \\to K_a K_a p y la introspección negativa. Semánticamente, K_a p se cumple cuando p es verdadera en todo mundo que el agente a no puede distinguir del real. El dual \\hat{K}_a p o M_a p significa que a considera p posible. Usa una K recta, \\mathsf{K}_a o \\mathrm{K}_a, si la K cursiva choca con la lógica llamada K, y escribe los nombres de agente de varias letras como \\text{Alice} en el subíndice.",
  },
  "believes": {
    name: "Operador de creencia",
    meaning: "Operador de creencia: B_a p se lee «el agente a cree que p», lo cual, a diferencia del conocimiento, puede ser falso.",
    usage: "La lógica doxástica suele usar KD45: consistencia B_a p \\to \\neg B_a\\neg p y los dos axiomas de introspección, pero sin axioma de verdad, así que B_a p \\to p falla. El vínculo entre conocimiento y creencia K_a p \\to B_a p es un principio puente habitual. Los artículos sobre revisión de creencias escriben B_a(p \\mid q) para la creencia condicional. Como con K_a, considera una \\mathsf{B} recta si la B cursiva se usa para otra cosa, y no la confundas con la caja \\Box, que es el operador genérico de necesidad.",
  },
  "common-knowledge": {
    name: "Conocimiento común",
    meaning: "Conocimiento común en el grupo G: todos saben p, todos saben que todos saben p, y así sucesivamente sin fin.",
    usage: "Si E_G p significa que todos en G saben p, el conocimiento común es la conjunción infinita E_G p \\land E_G E_G p \\land \\cdots, y satisface el axioma de punto fijo C_G p \\leftrightarrow E_G(p \\land C_G p). Los acertijos de los niños embarrados y del ataque coordinado giran en torno a la diferencia entre E_G y C_G. El conocimiento distribuido se escribe D_G p. G es un conjunto de agentes, así que escríbelo como una letra mayúscula cursiva y defínelo explícitamente.",
  },
  "always-temporal-box": {
    name: "Siempre (caja temporal)",
    meaning: "«Siempre» temporal: \\Box p dice que p se cumple ahora y en todo instante futuro de la ejecución.",
    usage: "En la lógica temporal lineal, \\Box se escribe a menudo G (globalmente), y las propiedades de seguridad tienen la forma \\Box\\neg\\mathit{bad}. Es dual de «finalmente», \\Box p \\leftrightarrow \\neg\\Diamond\\neg p, y \\Box\\Diamond p expresa que p ocurre infinitas veces. La misma caja es la necesidad en la lógica modal alética, así que indica qué lectura se aplica. \\Box y \\square dan cuadrados casi idénticos; \\Box es el operador modal convencional y no se añade automáticamente espacio antes de p. CTL le antepone un cuantificador de caminos, como en AG p.",
  },
  "eventually-temporal-diamond": {
    name: "Finalmente (rombo temporal)",
    meaning: "«Finalmente» temporal: \\Diamond p dice que p se cumple en algún instante presente o futuro.",
    usage: "La lógica temporal lineal también lo escribe F p (futuro), y puede definirse a partir de «hasta» como \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p. Las propiedades de vivacidad suelen tener esta forma, como \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant}). \\Diamond\\Box p significa que p acaba cumpliéndose para siempre. En la lógica modal alética el mismo rombo significa «posiblemente», así que indica la lectura temporal. Usa \\Diamond, no \\diamond, que es un operador binario más pequeño. En la lógica de árbol de computación (CTL) se le antepone un cuantificador de caminos, como en AF p o EF p.",
  },
  "until": {
    name: "Operador hasta",
    meaning: "Operador «hasta» de la lógica temporal: p \\mathcal{U} q se cumple si q acaba cumpliéndose y p se cumple en cada instante anterior.",
    usage: "El «hasta» fuerte exige que q ocurra; el «hasta» débil p \\mathcal{W} q también permite que p se mantenga para siempre. «Finalmente» se deriva como \\Diamond q \\equiv \\top \\mathcal{U} q. Escrito tal cual, \\mathcal{U} es un símbolo ordinario, así que p\\mathcal{U}q se compone sin espacio alrededor de la U; envuélvelo como p \\mathbin{\\mathcal{U}} q para obtener espaciado de operador binario, o define \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}. Muchos artículos de LTL usan una U romana, \\mathbin{\\mathsf{U}}, en lugar de la letra caligráfica. Las lógicas de tiempo pasado añaden «desde», su imagen especular que mira hacia atrás.",
  },
  "next": {
    name: "Operador siguiente",
    meaning: "Operador de instante siguiente de la lógica temporal: \\bigcirc p dice que p se cumple en el estado inmediatamente posterior.",
    usage: "Es el único operador de LTL ligado a pasos de tiempo discretos, y también se escribe X p. La ley de expansión p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) lo usa para desplegar «hasta» paso a paso. \\bigcirc es un círculo grande del mismo tamaño que \\Box y \\Diamond, así que encaja visualmente con ellos; \\circ es un operador pequeño de composición y aquí es incorrecto. Algunos artículos prefieren \\mathsf{X} por claridad en especificaciones con mucho texto plano.",
  },
  "accessibility": {
    name: "Relación de accesibilidad",
    meaning: "Relación de accesibilidad en la semántica de Kripke: w R v significa que el mundo v es accesible (se considera posible) desde el mundo w.",
    usage: "Las propiedades de R se corresponden con axiomas modales: la reflexividad da T (\\Box p \\to p), la transitividad da 4 (\\Box p \\to \\Box\\Box p) y una relación de equivalencia da S5. Que \\Box p sea verdadera en w exige p en todo v con wRv. Si escribes w R v, TeX trata R como una letra ordinaria y los espacios desaparecen, produciendo wRv; usa w \\mathrel{R} v para obtener espaciado de relación, o define una macro. Algunos autores escriben R(w, v) o w \\to v en su lugar.",
  },
  "kripke-model": {
    name: "Modelo de Kripke",
    meaning: "Satisfacción en un modelo de Kripke: la fórmula p es verdadera en el mundo w del modelo \\mathcal{M}.",
    usage: "Un modelo de Kripke \\mathcal{M} = (W, R, V) tiene mundos, una relación de accesibilidad y una valoración, y la verdad se define mundo a mundo, por ejemplo \\mathcal{M}, w \\models \\Box p si y solo si p se cumple en todos los R-sucesores. \\models es una relación con el espaciado adecuado; \\vDash da un glifo de doble torniquete similar, y sus negaciones son \\not\\models o \\nvDash. No uses \\vdash, que significa demostrabilidad y no verdad. Cuando el modelo está fijado, los autores abrevian a w \\models p o w \\Vdash p.",
  },
  "possible-world": {
    name: "Mundo posible",
    meaning: "Un mundo posible: un punto de un marco de Kripke en el que las fórmulas se evalúan como verdaderas o falsas.",
    usage: "Los mundos se toman de un conjunto W, y un marco es el par (W, R) con una relación de accesibilidad. Según la lógica, un mundo puede representar un estado de un programa, un instante de tiempo o una alternativa epistémica. Por convención se usan las minúsculas w, v, u para los mundos y w_0 para el mundo real. Como una w cursiva aislada es tan habitual, introdúcela explícitamente y prefiere w \\in W en la primera fórmula para fijar la lectura.",
  },
  "deontic-ought": {
    name: "Obligación deóntica",
    meaning: "Obligación deóntica: O p se lee «debe ser que p» o «p es obligatorio».",
    usage: "La lógica deóntica estándar es la lógica modal normal KD, con el axioma D, O p \\to P p, que dice que las obligaciones son consistentes, mientras que el axioma de verdad O p \\to p falla deliberadamente. Los acertijos de deberes contrarios, como la paradoja de Chisholm, muestran sus límites y motivan la obligación diádica O(p \\mid q). En modo matemático O p se compone como Op sin espacio, así que escribe O\\,p o usa una \\mathbf{O} o \\mathsf{O} recta para que no se lea como la notación O grande.",
  },
  "deontic-permitted": {
    name: "Permiso deóntico",
    meaning: "Permiso deóntico: P p se lee «p está permitido», el dual de la obligación.",
    usage: "El permiso se define como P p \\leftrightarrow \\neg O\\neg p, y la prohibición como F p \\leftrightarrow O\\neg p. En la lógica deóntica estándar toda obligación está permitida, O p \\to P p. El permiso de libre elección, según el cual P(p \\lor q) debería implicar P p, es un acertijo conocido que el sistema estándar no valida. Una P cursiva choca con la notación de probabilidad, así que muchos autores usan \\mathsf{P} o \\mathbf{P}; añade \\, tras ella para separar el operador de la fórmula.",
  },
};

export default text;
