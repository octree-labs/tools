import type { SymbolPageTranslations } from "../types";

/** Spanish copy for /es/symbols/graph-theory/<slug>. */
const text: SymbolPageTranslations = {
  "vertex": {
    name: "Vértice",
    meaning: "Letra v minúscula en cursiva, la letra habitual para designar un único vértice de un grafo.",
    usage:
      "Los vértices se escriben con letras minúsculas como u, v, w, y la pertenencia se expresa como v \\in V(G). El grado de un vértice es \\deg(v), su vecindario N(v), y una arista entre dos vértices suele escribirse uv o \\{u, v\\}. Como se trata de una letra corriente, lo importante es la coherencia: no reutilice v para un vector o una velocidad en el mismo texto. Indexar con subíndices, v_1, \\dots, v_n, proporciona un orden útil para las matrices de adyacencia. Cuando los vértices llevan etiquetas o pesos, funciones como w(v) mantienen la notación limpia.",
  },
  "edge": {
    name: "Arista",
    meaning: "Letra e minúscula en cursiva, la letra habitual para designar una única arista de un grafo.",
    usage:
      "Una arista e = uv o e = \\{u, v\\} une dos vértices; en los grafos dirigidos, un arco se escribe e = (u, v) y el orden importa. La pertenencia es e \\in E(G) y los pesos de las aristas son w(e). Como e también denota el número de Euler, algunos autores escriben esa constante en redonda como \\mathrm{e} para evitar confusiones cuando grafos y exponenciales aparecen juntos, por ejemplo en argumentos probabilísticos. Las aristas con subíndice e_1, \\dots, e_m indexan las columnas de una matriz de incidencia. Los extremos de e se escriben a veces e^- y e^+ para la cola y la cabeza.",
  },
  "graph": {
    name: "Grafo",
    meaning: "Definición de un grafo G como par ordenado formado por un conjunto de vértices V y un conjunto de aristas E.",
    usage:
      "Es la primera línea de la mayoría de los razonamientos de teoría de grafos; fija V como conjunto de vértices y E \\subseteq \\binom{V}{2} como aristas en un grafo simple, o E \\subseteq V \\times V en uno dirigido. Abreviaturas habituales: n = |V| y m = |E|. Los grafos ponderados lo amplían a G = (V, E, w). Use paréntesis, no corchetes angulares, para el par ordenado. En trabajos extensos, escriba V(G) y E(G) cuando intervengan varios grafos. La caligráfica \\mathcal{G} se reserva a veces para una familia de grafos o un modelo gráfico.",
  },
  "vertex-set": {
    name: "Conjunto de vértices",
    meaning: "Conjunto de vértices del grafo G, escrito como función de G cuando se estudian varios grafos.",
    usage:
      "V(G) deja claro a qué grafo pertenece un conjunto de vértices, algo importante al comparar un grafo con un subgrafo H, donde V(H) \\subseteq V(G). El orden del grafo es |V(G)|, abreviado a menudo como n o |G|. Para complementos y grafos de líneas, V(\\overline{G}) = V(G), mientras que V(L(G)) = E(G). La V cursiva normal es la estándar; no hace falta ningún comando especial. Escriba las definiciones por comprensión con llaves \\{ \\} y use \\mid o dos puntos para la condición. Una suma sobre los vértices se escribe \\sum_{v \\in V(G)}.",
  },
  "edge-set": {
    name: "Conjunto de aristas",
    meaning: "Conjunto de aristas del grafo G, es decir, el conjunto de todos los pares de vértices unidos por una arista.",
    usage:
      "E(G) se escribe explícitamente cuando hay más de un grafo en juego; su cardinal |E(G)|, que algunos textos escriben e(G) o \\|G\\|, es el tamaño del grafo. El lema del apretón de manos lo relaciona con los grados: \\sum_v \\deg(v) = 2|E(G)|. Un grafo simple cumple |E(G)| \\leq \\binom{n}{2}, y un árbol tiene exactamente n - 1 aristas. Tenga en cuenta que E está muy sobrecargada, sobre todo con la esperanza en combinatoria probabilística, así que usar la letra de pizarra \\mathbb{E} para la esperanza ayuda a distinguir ambas.",
  },
  "adjacency": {
    name: "Adyacencia",
    meaning: "Relación de adyacencia: u y v están unidos por una arista en el grafo.",
    usage:
      "\\sim es una relación binaria, así que TeX coloca espacios gruesos equilibrados a su alrededor y u \\sim v se lee correctamente. Para indicar el grafo, escriba u \\sim_G v. Algunos autores usan en su lugar u \\leftrightarrow v o uv \\in E(G). La no adyacencia se escribe u \\nsim v. No confunda \\sim con \\simeq (equivalencia asintótica u homotópica), \\approx (aproximadamente igual) ni \\backsim (tilde invertida). En probabilidad, x \\sim p significa «muestreado de», así que defina la adyacencia explícitamente en artículos interdisciplinares. Los vecindarios se definen de forma natural: N(v) = \\{u : u \\sim v\\}.",
  },
  "degree": {
    name: "Grado",
    meaning: "Grado del vértice v: el número de aristas incidentes en él, contando los lazos dos veces.",
    usage:
      "\\deg es uno de los nombres de operador predefinidos de LaTeX, así que se imprime en redonda con el espaciado correcto, a diferencia de escribir deg, que produce tres letras en cursiva. El lema del apretón de manos afirma que \\sum_v \\deg(v) = 2|E|, y muchos autores lo abrevian como d(v) o d_G(v). Los grados mínimo y máximo se escriben \\delta(G) y \\Delta(G). Para indicar el grafo con subíndice, \\deg_G(v) funciona de forma natural. El mismo comando también compone el grado de un polinomio, \\deg(p), en álgebra. Un grafo regular cumple \\deg(v) = k para todo vértice.",
  },
  "in-degree": {
    name: "Grado de entrada",
    meaning: "Grado de entrada del vértice v en un grafo dirigido: el número de arcos que terminan en v.",
    usage:
      "En los grafos dirigidos cada arco suma uno al grado de salida de su cola y uno al grado de entrada de su cabeza, de modo que \\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|. Una fuente cumple \\deg^-(v) = 0. El superíndice menos es la convención más común, aunque algunos textos escriben d^-(v), \\deg_{\\text{in}}(v) o \\mathrm{indeg}(v). Ponga el superíndice entre llaves, ^{-}, para que quede claramente unido. En PageRank y en cadenas de Markov, el grado de entrada se relaciona con cuántas páginas enlazan a un nodo. La ordenación topológica mediante el algoritmo de Kahn elimina repetidamente los vértices de grado de entrada cero.",
  },
  "out-degree": {
    name: "Grado de salida",
    meaning: "Grado de salida del vértice v en un grafo dirigido: el número de arcos que salen de v.",
    usage:
      "El grado de salida cuenta los arcos cuya cola es v; un sumidero cumple \\deg^+(v) = 0. Sumado sobre todos los vértices es igual a |E|, igual que el grado de entrada total. El superíndice más es habitual, con d^+(v) y \\deg_{\\text{out}}(v) como alternativas, así que defina su notación. Un grafo dirigido tiene un circuito euleriano exactamente cuando es conexo (ignorando los vértices aislados) y \\deg^+(v) = \\deg^-(v) en todo vértice. En términos de la matriz de adyacencia, el grado de salida es una suma de fila y el grado de entrada una suma de columna. Ponga el superíndice entre llaves, ^{+}, para mayor claridad en el código fuente.",
  },
  "path": {
    name: "Grafo camino",
    meaning: "Grafo camino de n vértices: n vértices unidos en línea por n - 1 aristas.",
    usage:
      "P_n es una familia básica de la teoría de grafos, junto con C_n y K_n. Las convenciones varían, lo que es una fuente real de confusión: muchos textos hacen que n cuente vértices, mientras que otros, como Diestel, escriben P^k para un camino con k aristas. Indique la suya. Los caminos tienen número cromático 2 para n \\geq 2 y son árboles. Al contar recorridos, el número de caminos difiere del de recorridos porque los vértices no pueden repetirse. El subíndice es un índice normal; para índices más largos use llaves, P_{n+1}. No lo confunda con P(n, k), las permutaciones.",
  },
  "cycle": {
    name: "Ciclo",
    meaning: "Grafo ciclo de n vértices (n al menos 3), que forma un único bucle cerrado; en combinatoria, también el n-ésimo número de Catalan.",
    usage:
      "En teoría de grafos, C_n es el ciclo con n vértices y n aristas; es bipartito exactamente cuando n es par, así que \\chi(C_n) = 2 para n par y 3 para n impar. En combinatoria, la misma notación suele designar el número de Catalan C_n = \\frac{1}{n+1}\\binom{2n}{n}, que cuenta parentizaciones equilibradas, árboles binarios y caminos de Dyck: 1, 1, 2, 5, 14, 42. Como esta notación se comparte entre ambas áreas, indique pronto qué significado pretende. Los índices compuestos necesitan llaves, C_{2k+1}.",
  },
  "complete-graph": {
    name: "Grafo completo",
    meaning: "Grafo completo de n vértices, en el que cada par de vértices distintos está unido por una arista.",
    usage:
      "K_n tiene \\binom{n}{2} = n(n-1)/2 aristas y número cromático n. La letra homenajea a Kuratowski, cuyo teorema afirma que un grafo es plano si y solo si no contiene ninguna subdivisión de K_5 ni de K_{3,3}. Los números de Ramsey se formulan con grafos completos: R(3,3) = 6 significa que cualquier 2-coloración de las aristas de K_6 contiene un triángulo monocromático. La fórmula de Cayley cuenta n^{n-2} árboles generadores de K_n. Use llaves para subíndices de varios caracteres como K_{n+1}. Un clique de tamaño k en G es un subgrafo isomorfo a K_k.",
  },
  "bipartite": {
    name: "Grafo bipartito completo",
    meaning: "Grafo bipartito completo: dos partes de tamaños m y n en las que cada vértice de una parte está unido a todos los vértices de la otra.",
    usage:
      "K_{m,n} tiene m + n vértices y mn aristas, y K_{1,n} es el grafo estrella. K_{3,3}, el grafo de los servicios públicos, es uno de los dos subgrafos prohibidos de Kuratowski para la planaridad. Observe que la coma va dentro de las llaves: K_{m,n}; escribir K_m,n deja la n en la línea base. TeX añade un pequeño espacio tras la coma en los subíndices, lo que queda bien; para un aspecto más compacto, algunos escriben K_{m\\,n} sin coma, pero es poco frecuente. El problema de Zarankiewicz pregunta cuántas aristas puede tener un grafo sin contener una copia de K_{s,t}.",
    example: "|E(K_{m,n})| = mn, \\quad K_{3,3} \\text{ no es plano}",
  },
  "adjacency-matrix": {
    name: "Matriz de adyacencia",
    meaning: "Entrada de la fila i y la columna j de la matriz de adyacencia: 1 si los vértices i y j son adyacentes y 0 en caso contrario.",
    usage:
      "En un grafo simple no dirigido, la matriz de adyacencia es simétrica con ceros en la diagonal; en los grafos ponderados, A_{ij} contiene el peso de la arista. Un resultado clásico: (A^k)_{ij} cuenta los recorridos de longitud k de i a j, así que \\operatorname{tr}(A^3)/6 es el número de triángulos. Los grados son sumas de filas, \\deg(i) = \\sum_j A_{ij}, y el laplaciano es L = D - A. Escriba A_{ij} con llaves; A_ij solo pondría la i como subíndice. Con índices separados por comas, A_{i,j} es más claro cuando los índices son expresiones como A_{i+1,j}.",
    example: "(A^k)_{ij} = \\#\\{\\text{recorridos de longitud } k \\text{ de } i \\text{ a } j\\}",
  },
  "incidence-matrix": {
    name: "Matriz de incidencia",
    meaning: "B mayúscula, por convención la matriz de incidencia de un grafo, con filas para los vértices y columnas para las aristas.",
    usage:
      "En un grafo no dirigido, B_{ve} = 1 cuando el vértice v es un extremo de la arista e. En un grafo dirigido u orientado arbitrariamente, las entradas valen -1 en la cola y +1 en la cabeza (o al revés, según el autor), y entonces BB^\\top = L = D - A, el laplaciano del grafo. Algunos libros llaman a la matriz M o N en lugar de B. Es una matriz n \\times m, así que indique las dimensiones. Para una matriz de incidencia no orientada, BB^\\top es igual a D + A, el laplaciano sin signo, una fuente frecuente de errores de signo.",
  },
  "connected": {
    name: "Conectividad",
    meaning: "Relación de conectividad: existe un camino entre los vértices u y v, de modo que están en la misma componente conexa.",
    usage:
      "\\leftrightarrow es una flecha de la clase de las relaciones, así que recibe un espaciado simétrico. En teoría de grafos, u \\leftrightarrow v suele significar que u y v están conectados, mientras que en cadenas de Markov significa que dos estados se comunican. Los grafos dirigidos requieren cuidado: la alcanzabilidad mutua es la relación de conexión fuerte, que a veces se escribe u \\rightleftarrows v. No confunda \\leftrightarrow con la más larga \\longleftrightarrow ni con la flecha doble \\Leftrightarrow, que indica equivalencia lógica. Algunos autores escriben u \\sim v para la adyacencia y reservan \\leftrightarrow para la conectividad, lo cual es limpio si se indica. Es una relación de equivalencia cuyas clases son las componentes conexas.",
    example: "u \\leftrightarrow v \\iff \\exists \\text{ un camino } u\\text{-}v \\text{ en } G",
  },
  "tree": {
    name: "Árbol",
    meaning: "T mayúscula, la letra habitual para un árbol: un grafo conexo sin ciclos.",
    usage:
      "Un árbol de n vértices tiene exactamente n - 1 aristas, un único camino entre dos vértices cualesquiera y al menos dos hojas cuando n \\geq 2. Los árboles generadores se escriben T \\subseteq G, y la fórmula de Cayley afirma que K_n tiene n^{n-2} árboles generadores etiquetados. Los algoritmos de árbol generador mínimo como los de Kruskal y Prim minimizan w(T) = \\sum_{e \\in T} w(e). Basta con la T cursiva normal; tenga cuidado con los choques con el superíndice de traspuesta o con el tiempo, y prefiera ^\\top para las traspuestas en documentos que también traten de árboles. Los árboles con raíz se escriben a menudo (T, r).",
  },
  "forest": {
    name: "Bosque",
    meaning: "F mayúscula, que por convención denota un bosque: un grafo acíclico cuyas componentes conexas son árboles.",
    usage:
      "Un bosque con n vértices y k componentes conexas tiene n - k aristas, lo que generaliza la fórmula de los árboles. Los bosques generadores aparecen en el algoritmo de Kruskal, que hace crecer un bosque añadiendo la arista más barata que no forme un ciclo, y en la visión matroidal de los grafos, donde los bosques son los conjuntos independientes del matroide gráfico. Como letra corriente, F no necesita ningún comando, pero choca con las caras de los grafos planos (la fórmula de Euler V - E + F = 2) y con los números de Fibonacci, así que cambie de letra si aparecen ambos. La arboricidad de un grafo cuenta los bosques necesarios para cubrir sus aristas.",
  },
  "chromatic-number": {
    name: "Número cromático",
    meaning: "Número cromático de G: la menor cantidad de colores necesaria para colorear los vértices de modo que los adyacentes tengan colores distintos.",
    usage:
      "Escrito con la letra griega \\chi, el número cromático cumple \\omega(G) \\leq \\chi(G) \\leq \\Delta(G) + 1, y el teorema de Brooks rebaja la cota superior a \\Delta(G) salvo para grafos completos y ciclos impares. El teorema de los cuatro colores afirma que \\chi(G) \\leq 4 para grafos planos. La versión para aristas es el índice cromático \\chi'(G). No confunda \\chi con la x latina, que se parece en algunas fuentes, ni con la característica de Euler, que también usa \\chi. Calcular \\chi(G) es NP-difícil, por lo que muchos artículos dan cotas en lugar de valores exactos.",
  },
  "clique": {
    name: "Número de clique",
    meaning: "Número de clique de G: el tamaño del mayor subgrafo completo contenido en el grafo.",
    usage:
      "El número de clique es una cota inferior del número cromático, \\omega(G) \\leq \\chi(G), y los grafos en los que se da la igualdad para todo subgrafo inducido se llaman perfectos. Es el complementario del número de independencia: \\omega(G) = \\alpha(\\overline{G}), con \\overline{G} el grafo complementario. Calcularlo es NP-difícil. Use la omega griega minúscula \\omega, no w. El símbolo está sobrecargado en otros ámbitos: la notación asintótica omega minúscula y \\omega(n), el número de factores primos distintos, así que una breve definición ayuda en contextos mixtos. El teorema de Turán acota las aristas de un grafo con \\omega(G) \\leq r.",
  },
  "independent-set": {
    name: "Número de independencia",
    meaning: "Número de independencia de G: el tamaño del mayor conjunto independiente, es decir, de vértices no adyacentes dos a dos.",
    usage:
      "El número de independencia cumple \\alpha(G) \\cdot \\chi(G) \\geq |V(G)|, ya que cada clase de color es un conjunto independiente, y \\alpha(G) = \\omega(\\overline{G}). La identidad de Gallai lo relaciona con el número de recubrimiento por vértices: \\alpha(G) + \\tau(G) = |V(G)|. Calcularlo es NP-difícil en general, pero sencillo en grafos bipartitos gracias al teorema de Kőnig. Use \\alpha, la letra griega, que se distingue visualmente de la a en la mayoría de las fuentes. Los análogos para aristas son \\alpha'(G) o \\nu(G), el número de emparejamiento. La cota de Caro-Wei da \\alpha(G) \\geq \\sum_v 1/(\\deg(v)+1).",
  },
  "matching": {
    name: "Emparejamiento",
    meaning: "M mayúscula, la letra estándar para un emparejamiento: un conjunto de aristas en el que no hay dos que compartan un vértice.",
    usage:
      "Un emparejamiento M \\subseteq E(G) es perfecto cuando cubre todos los vértices, de modo que |M| = |V(G)|/2, y máximo cuando no existe ninguno mayor; su tamaño es el número de emparejamiento \\nu(G). El teorema de Hall da la condición para que exista un emparejamiento perfecto en grafos bipartitos: |N(S)| \\geq |S| para todo subconjunto S de un lado. Entre los algoritmos están el de Hopcroft-Karp para grafos bipartitos y el algoritmo de flores de Edmonds en general. Los caminos aumentantes suelen escribirse respecto de M, y la diferencia simétrica M \\triangle M' aparece en muchas demostraciones. Evite M si una matriz también necesita nombre.",
    example: "M \\subseteq E(G), \\quad |M| = |V(G)|/2 \\text{ si } M \\text{ es perfecto}",
  },
  "planar-graph": {
    name: "Grafo plano",
    meaning: "Inmersión de un grafo G en el plano, en la que las aristas solo se encuentran en extremos comunes; G es entonces plano.",
    usage:
      "La flecha con gancho \\hookrightarrow indica por convención una inyección o inmersión, así que G \\hookrightarrow \\mathbb{R}^2 dice que G puede dibujarse en el plano sin cruces. Los grafos planos conexos cumplen la fórmula de Euler V - E + F = 2, y los grafos planos simples con al menos tres vértices tienen como máximo 3V - 6 aristas. Los teoremas de Kuratowski y de Wagner los caracterizan prohibiendo K_5 y K_{3,3}. \\hookrightarrow es una flecha con espaciado de relación; la inversa es \\hookleftarrow. La inmersión en la esfera es equivalente, y la inmersión en otras superficies se escribe G \\hookrightarrow S_g.",
  },
};

export default text;
