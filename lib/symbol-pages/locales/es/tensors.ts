import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "Tensor",
    meaning: "Tensor general de tipo (2,2), con dos índices superiores (contravariantes) y dos inferiores (covariantes).",
    usage: "Cada índice superior se transforma con la matriz jacobiana y cada índice inferior con su inversa, de modo que contraer un índice superior con uno inferior da un resultado independiente de las coordenadas. Escrito como T^{ij}_{kl}, los índices inferiores quedan justo debajo de los superiores, lo que oculta el orden de los índices; para tensores no simétricos escribe T^{ij}{}_{kl}, de modo que el bloque inferior empiece después del superior. El tensor de Riemann R^i{}_{jkl} y el tensor de elasticidad C_{ijkl} son ejemplos habituales. Los índices van en cursiva por defecto; mantenlos así salvo que sean etiquetas y no posiciones del tensor.",
  },
  "covariant-index": {
    name: "Índices covariantes",
    meaning: "Tensor con dos índices inferiores, un tensor covariante de rango 2 como una métrica, un tensor de tensiones o una forma bilineal.",
    usage: "Los índices inferiores se transforman con la jacobiana inversa, T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}, la misma regla que siguen los gradientes. Entre los ejemplos están la métrica g_{ij}, el tensor de Ricci R_{ij} y el tensor de tensiones de Cauchy \\sigma_{ij}. Un 2-tensor covariante actúa sobre dos vectores y da un número, T_{ij} u^i v^j. En el espacio euclídeo con coordenadas cartesianas desaparece la distinción entre índices superiores e inferiores, por eso los textos de ingeniería suelen escribir todos los índices abajo. Todo tensor de este tipo se descompone en una parte simétrica y otra antisimétrica, T_{ij} = T_{(ij)} + T_{[ij]}.",
  },
  "contravariant-index": {
    name: "Índices contravariantes",
    meaning: "Tensor con dos índices superiores: un tensor contravariante de rango 2, como la métrica inversa o el tensor de energía-momento.",
    usage: "Los índices superiores se transforman como las componentes de un vector, T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}. El tensor de energía-momento T^{\\mu\\nu} es el ejemplo típico de la física, con la ley de conservación \\partial_\\mu T^{\\mu\\nu} = 0 en el espacio-tiempo plano. Pon ambos índices dentro de un mismo grupo de llaves, T^{ij}; T^i^j produce un error de doble superíndice. Cuando también hace falta una prima, T'^{ij} funciona porque LaTeX fusiona la prima con el superíndice siguiente. Contraer con dos covectores, T^{ij}\\alpha_i\\beta_j, da un escalar, y la métrica inversa g^{ij} es el ejemplo más común en geometría.",
  },
  "mixed-tensor": {
    name: "Tensor mixto",
    meaning: "Tensor mixto de tipo (1,1), con un índice superior y uno inferior, equivalente a una aplicación lineal sobre vectores.",
    usage: "Un tensor (1,1) envía un vector v^j a T^i_j v^j, así que en una base es simplemente una matriz, y su traza T^i_i no depende de las coordenadas. Con T^i_j los dos índices quedan apilados verticalmente, lo que no supone problema para la delta de Kronecker pero resulta ambiguo en otros casos, ya que T^i{}_j y T_j{}^i difieren tras bajar un índice con la métrica. El truco del grupo vacío {} los escalona. Bajar el índice superior con la métrica produce un tensor (0,2), T_{kj} = g_{ki} T^i{}_j, y la forma escalonada muestra qué posición se ha movido.",
  },
  "kronecker-delta": {
    name: "Delta de Kronecker",
    meaning: "Delta de Kronecker: vale 1 cuando los índices son iguales y 0 en caso contrario; son las componentes de la aplicación identidad.",
    usage: "Actúa como una sustitución de índices, \\delta^i_j v^j = v^i, y su traza en n dimensiones es \\delta^i_i = n. También expresa la dualidad de bases, e^i(e_j) = \\delta^i_j, y la relación con la métrica inversa g^{ik} g_{kj} = \\delta^i_j. Como es simétrica, apilar los índices en \\delta^i_j no causa problemas, a diferencia de los tensores mixtos en general. En contextos cartesianos se escribe a menudo \\delta_{ij}, con ambos índices abajo. No la confundas con la función delta de Dirac \\delta(x).",
  },
  "levi-civita": {
    name: "Símbolo de Levi-Civita",
    meaning: "Símbolo de Levi-Civita en tres dimensiones: +1 para permutaciones pares de 123, -1 para las impares y 0 si se repite un índice.",
    usage: "Expresa productos vectoriales y rotacionales en forma de índices, (\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k, y determinantes como \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}. La identidad de contracción \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} se usa constantemente en demostraciones de cálculo vectorial. Muchos autores prefieren \\varepsilon_{ijk}, la épsilon curva, para reservar \\epsilon a cantidades pequeñas; elige una y mantenla. En espacios curvos es una densidad tensorial, y el tensor propiamente dicho lleva un factor \\sqrt{g}.",
  },
  "einstein-summation": {
    name: "Convenio de suma de Einstein",
    meaning: "Convenio de suma de Einstein: un índice repetido, una vez arriba y otra abajo, se suma, de modo que A^i B_i significa la suma sobre i.",
    usage: "El convenio permite que A^i B_i represente \\sum_i A^i B_i, el emparejamiento escalar de un vector con un covector, sin escribir el signo de suma. Cada índice sumado debe aparecer exactamente una vez arriba y una vez abajo; un índice que aparece tres veces indica un error. Los índices libres deben coincidir en ambos lados de una ecuación, como en v^i = T^i_j u^j. Si el convenio puede resultar desconocido para los lectores, enúncialo una vez y da la forma explícita con \\sum en la primera ecuación.",
  },
  "tensor-product": {
    name: "Producto tensorial",
    meaning: "Producto tensorial de A y B, que combina dos tensores o espacios vectoriales en uno de mayor rango o dimensión.",
    usage: "Para espacios vectoriales, \\dim(V \\otimes W) = \\dim V \\cdot \\dim W, y para tensores las componentes se multiplican, (A \\otimes B)^{ij} = A^i B^j. Para matrices, el mismo símbolo denota el producto de Kronecker, una matriz por bloques con bloques a_{ij}B. La mecánica cuántica lo usa para sistemas compuestos, |\\psi\\rangle \\otimes |\\phi\\rangle. \\otimes es un operador binario con espaciado automático; para un producto sobre un conjunto de índices usa el operador grande \\bigotimes_{i=1}^n V_i, y para factores repetidos V^{\\otimes k}.",
  },
  "contraction": {
    name: "Contracción",
    meaning: "Contracción de un tensor mixto: sumar sobre un índice superior y otro inferior repetidos, lo que da su traza.",
    usage: "Igualar un índice superior a uno inferior y sumar elimina ambos y reduce el rango en dos; para un tensor (1,1), el resultado T^i_i = \\operatorname{tr} T es un escalar. El tensor de Ricci es una contracción del tensor de Riemann, y la curvatura escalar se obtiene contrayendo de nuevo con la métrica, R = g^{ij}R_{ij}. Solo se puede contraer un índice superior con uno inferior; contraer dos índices inferiores requiere la métrica. Escribe \\operatorname{tr} en lugar de tr a secas para que la traza quede en redonda y con el espaciado de operador.",
  },
  "metric-lowering": {
    name: "Descenso de índices",
    meaning: "Descenso de índices: la métrica convierte las componentes contravariantes v^j de un vector en componentes covariantes v_i.",
    usage: "Es el isomorfismo musical bemol, que suele escribirse v^\\flat y que identifica vectores con covectores. En el espacio euclídeo con coordenadas cartesianas g_{ij} = \\delta_{ij}, así que bajar el índice no cambia nada numéricamente; en el espacio de Minkowski con signatura (-,+,+,+) invierte el signo de la componente temporal. El índice libre i debe coincidir en ambos lados, mientras que j se suma. Para un tensor completo, baja cada índice por separado, T_{ij} = g_{ik} T^k{}_j, prestando atención al orden de las posiciones. El comando \\flat usado en v^\\flat es el signo musical de bemol, disponible en el modo matemático estándar.",
  },
  "metric-raising": {
    name: "Ascenso de índices",
    meaning: "Ascenso de índices: la métrica inversa convierte las componentes covariantes v_j de nuevo en componentes contravariantes v^i.",
    usage: "Subir índices es el isomorfismo musical sostenido, \\alpha^\\sharp, y es la forma de construir el vector gradiente a partir de la diferencial: (\\operatorname{grad} f)^i = g^{ij}\\partial_j f. Subir y luego bajar devuelve las componentes originales porque g^{ij} g_{jk} = \\delta^i_k. En relatividad, p^\\mu = g^{\\mu\\nu} p_\\nu convierte el covector cuadrimomento en un vector. Escribe la métrica inversa con índices superiores, nunca como g^{-1}_{ij}, que sugiere una colocación de índices equivocada. El comando \\sharp da el signo de sostenido correspondiente, y para una métrica diagonal solo sobrevive el término j = i.",
  },
  "partial-derivative": {
    name: "Derivada parcial",
    meaning: "Notación abreviada de la derivada parcial respecto de la coordenada x^i, que también se usa para los vectores de la base coordenada.",
    usage: "Escribir \\partial_i f en lugar de \\frac{\\partial f}{\\partial x^i} mantiene compactas las fórmulas cargadas de índices, y en geometría \\partial_i también denota el campo vectorial de la base \\partial/\\partial x^i. La relatividad usa \\partial_\\mu sobre el espacio-tiempo, con el d’alembertiano \\partial_\\mu\\partial^\\mu. Las derivadas parciales de las componentes de un tensor no son tensores en coordenadas curvilíneas; sustituye \\partial_i por \\nabla_i para corregirlo. Un subíndice con coma, f_{,i}, es el equivalente tradicional. Usa \\partial, no d ni \\delta, para las derivadas parciales. Las derivadas parciales conmutan, \\partial_i\\partial_j = \\partial_j\\partial_i, y por eso los campos coordenados tienen corchete de Lie nulo.",
  },
  "covariant-derivative": {
    name: "Derivada covariante",
    meaning: "Derivada covariante a lo largo de la i-ésima dirección coordenada, el sustituto tensorial de la derivada parcial \\partial_i.",
    usage: "Sobre un vector añade una corrección con los símbolos de Christoffel, \\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k, y sobre un covector el signo cambia, \\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k. La notación tradicional con punto y coma escribe v^j{}_{;i} para lo mismo. La compatibilidad con la métrica significa que \\nabla_k g_{ij} = 0, de modo que los índices pueden subirse y bajarse a través de \\nabla. En general, las derivadas covariantes no conmutan; su conmutador sobre un vector da el tensor de Riemann. Los textos de relatividad escriben el mismo operador como \\nabla_\\mu.",
  },
  "symmetrization": {
    name: "Simetrización",
    meaning: "Parte simétrica de un tensor respecto de los índices i y j, escrita con paréntesis alrededor del par de índices.",
    usage: "Para dos índices T_{(ij)} = \\tfrac12(T_{ij} + T_{ji}), y para n índices la suma recorre todas las permutaciones y se divide entre n!. La notación de paréntesis es estándar en relatividad general, por ejemplo en la ecuación de Killing \\nabla_{(i}\\xi_{j)} = 0. Para excluir un índice de la simetrización, sepáralo con barras verticales, como en T_{(i|j|k)}. Los paréntesis dentro de un subíndice son caracteres normales, así que no hace falta ningún comando especial; solo ten en cuenta que pueden abrirse y cerrarse en subíndices distintos.",
  },
  "antisymmetrization": {
    name: "Antisimetrización",
    meaning: "Parte antisimétrica de un tensor respecto de i y j, escrita con corchetes alrededor de los índices.",
    usage: "Para dos índices T_{[ij]} = \\tfrac12(T_{ij} - T_{ji}), y en general es la suma con signo sobre las permutaciones dividida entre n!. Todo tensor de dos índices se descompone como T_{ij} = T_{(ij)} + T_{[ij]}. La primera identidad de Bianchi se escribe R_{i[jkl]} = 0, y el tensor del campo electromagnético cumple \\partial_{[\\mu}F_{\\nu\\lambda]} = 0. Algunos autores omiten el factor 1/n!, así que indica tu normalización. Los corchetes en un subíndice son caracteres normales, sin necesidad de \\lbrack. Los tensores covariantes totalmente antisimétricos corresponden a formas diferenciales.",
  },
  "tensor-rank": {
    name: "Tipo de un tensor",
    meaning: "Tipo de un tensor: p índices contravariantes (superiores) y q covariantes (inferiores), a veces llamado de forma imprecisa su rango.",
    usage: "Un tensor (p, q) es un elemento de V^{\\otimes p} \\otimes (V^*)^{\\otimes q}, de modo que un vector es (1, 0), un covector (0, 1), una aplicación lineal (1, 1) y una métrica (0, 2). La terminología varía: algunos libros llaman rango u orden a p + q y reservan «tipo» para el par. La contracción lleva el tipo (p, q) a (p-1, q-1). En LaTeX el par son simplemente paréntesis con una coma; el espacio fino tras la coma es automático en modo matemático, así que no añadas espaciado extra.",
  },
  "basis-vector": {
    name: "Vector de la base",
    meaning: "Vectores de la base de un espacio vectorial o tangente, con índice inferior para que las componentes lleven índices superiores.",
    usage: "Un vector se desarrolla como v = v^i e_i, emparejando el índice inferior de la base con el superior de las componentes. En geometría la base coordenada es e_i = \\partial_i, y en una referencia ortonormal g(e_i, e_j) = \\delta_{ij}. En física e ingeniería se suele escribir en negrita \\mathbf{e}_i o con sombrero \\hat{e}_i, y \\mathbf{e}_x, \\mathbf{e}_y para las direcciones cartesianas. Mantén el índice abajo; escribir e^i para los vectores de la base choca con el convenio de la base dual. Bajo un cambio de base e'_i = A^j{}_i e_j, las componentes se transforman con la matriz inversa.",
  },
  "dual-basis": {
    name: "Base dual",
    meaning: "Covectores de la base dual, definidos por e^i(e_j) = \\delta^i_j, que sirven para extraer las componentes de un vector.",
    usage: "Aplicar e^i a un vector extrae su i-ésima componente, e^i(v) = v^i, y los covectores se desarrollan como \\alpha = \\alpha_i e^i. Para coordenadas, la base dual es e^i = dx^i, y en el método de Cartan el correferencial ortonormal e^a da la métrica como g = \\delta_{ab}\\, e^a \\otimes e^b. Como el índice es un superíndice, e^i puede confundirse con una potencia de e; si hay algún riesgo, acláralo o usa \\theta^i, una alternativa habitual para los correferenciales.",
  },
  "component-transform": {
    name: "Ley de transformación de componentes",
    meaning: "Ley de transformación de un tensor contravariante de rango 2: cada índice superior recibe un factor de la matriz de transformación.",
    usage: "Aquí \\Lambda^i_k es la matriz de transformación, una transformación de Lorentz en relatividad especial o, en general, la jacobiana \\partial x'^i/\\partial x^k, y las componentes primadas viven en el nuevo sistema de referencia. Un tensor se define precisamente por obedecer esta ley, mientras que los índices inferiores se transforman con la matriz inversa. LaTeX fusiona la prima y el superíndice en T'^{ij}, así que no hacen falta llaves alrededor de la prima. Escalona los índices como \\Lambda^i{}_k cuando la matriz no es simétrica, para que el lector sepa qué posición corresponde a la fila.",
  },
};

export default text;
