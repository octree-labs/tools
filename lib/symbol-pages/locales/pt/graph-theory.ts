import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/graph-theory/<slug>. */
const text: SymbolPageTranslations = {
  "vertex": {
    name: "Vértice",
    meaning: "Letra v minúscula em itálico, a letra convencional para um único vértice de um grafo.",
    usage: "Os vértices são escritos com letras minúsculas como u, v, w, e a pertinência é v \\in V(G). O grau de um vértice é \\deg(v), sua vizinhança N(v), e uma aresta entre dois vértices costuma ser escrita uv ou \\{u, v\\}. Como se trata de uma letra simples, a principal preocupação é a consistência: não reutilize v para um vetor ou uma velocidade no mesmo texto. Indexar com subscritos, v_1, \\dots, v_n, dá uma ordenação útil para matrizes de adjacência. Quando os vértices têm rótulos ou pesos, funções como w(v) mantêm a notação limpa.",
  },
  "edge": {
    name: "Aresta",
    meaning: "Letra e minúscula em itálico, a letra habitual para uma única aresta de um grafo.",
    usage: "Uma aresta e = uv ou e = \\{u, v\\} liga dois vértices; em grafos orientados, um arco é escrito e = (u, v), e a ordem importa. A pertinência é e \\in E(G), e os pesos das arestas são w(e). Como e também denota o número de Euler, alguns autores escrevem essa constante em tipo vertical, \\mathrm{e}, para evitar confusão quando grafos e exponenciais aparecem juntos, por exemplo em argumentos probabilísticos. Arestas com subscrito, e_1, \\dots, e_m, indexam as colunas de uma matriz de incidência. As extremidades de e às vezes são escritas e^- e e^+, para a cauda e a cabeça.",
  },
  "graph": {
    name: "Grafo",
    meaning: "Definição de um grafo G como um par ordenado formado por um conjunto de vértices V e um conjunto de arestas E.",
    usage: "Esta é a primeira linha da maioria dos argumentos de teoria dos grafos; ela fixa V como o conjunto de vértices e E \\subseteq \\binom{V}{2} como as arestas de um grafo simples, ou E \\subseteq V \\times V para um grafo orientado. Abreviações comuns: n = |V| e m = |E|. Grafos ponderados estendem a definição para G = (V, E, w). Use parênteses, e não colchetes angulares, para o par ordenado. Em trabalhos mais longos, escreva V(G) e E(G) quando vários grafos estiverem em jogo. O caligráfico \\mathcal{G} às vezes é reservado para uma família de grafos ou para um modelo gráfico.",
  },
  "vertex-set": {
    name: "Conjunto de vértices",
    meaning: "Conjunto de vértices do grafo G, escrito como função de G quando se discutem vários grafos.",
    usage: "V(G) deixa claro a qual grafo pertence um conjunto de vértices, o que é importante ao comparar um grafo com um subgrafo H, em que V(H) \\subseteq V(G). A ordem do grafo é |V(G)|, frequentemente abreviada como n ou |G|. Para complementos e grafos de linha, V(\\overline{G}) = V(G), enquanto V(L(G)) = E(G). O V simples em itálico é o padrão; nenhum comando especial é necessário. Escreva definições por compreensão com as chaves \\{ \\} e use \\mid ou dois-pontos para a condição. Uma soma sobre os vértices se escreve \\sum_{v \\in V(G)}.",
  },
  "edge-set": {
    name: "Conjunto de arestas",
    meaning: "Conjunto de arestas do grafo G, o conjunto de todos os pares de vértices ligados por uma aresta.",
    usage: "E(G) é escrito explicitamente quando há mais de um grafo em questão; sua cardinalidade |E(G)|, também escrita e(G) ou \\|G\\| em alguns textos, é o tamanho do grafo. O lema do aperto de mãos a relaciona com os graus: \\sum_v \\deg(v) = 2|E(G)|. Um grafo simples satisfaz |E(G)| \\leq \\binom{n}{2}, e uma árvore tem exatamente n - 1 arestas. Lembre-se de que E é muito sobrecarregado, notadamente com a esperança na combinatória probabilística, então usar o \\mathbb{E} em blackboard para a esperança ajuda a separar os dois.",
  },
  "adjacency": {
    name: "Adjacência",
    meaning: "Relação de adjacência: u e v estão ligados por uma aresta no grafo.",
    usage: "\\sim é uma relação binária, então o TeX coloca espaços grossos equilibrados ao seu redor, e u \\sim v é lido corretamente. Para especificar o grafo, escreva u \\sim_G v. Alguns autores usam u \\leftrightarrow v ou uv \\in E(G) em seu lugar. A não adjacência é escrita u \\nsim v. Não confunda \\sim com \\simeq (equivalência assintótica ou homotópica), \\approx (aproximadamente igual) ou \\backsim (til invertido). Em probabilidade, x \\sim p significa amostrado de, então defina a adjacência explicitamente em artigos interdisciplinares. As vizinhanças decorrem naturalmente: N(v) = \\{u : u \\sim v\\}.",
  },
  "degree": {
    name: "Grau de um vértice",
    meaning: "Grau do vértice v: o número de arestas incidentes a ele, contando os laços duas vezes.",
    usage: "\\deg é um dos nomes de operador predefinidos do LaTeX, então é impresso em tipo vertical e com o espaçamento correto, ao contrário de digitar deg, que produz três letras em itálico. O lema do aperto de mãos afirma que \\sum_v \\deg(v) = 2|E|, e muitos autores abreviam para d(v) ou d_G(v). Os graus mínimo e máximo são escritos \\delta(G) e \\Delta(G). Para um grafo indicado no subscrito, \\deg_G(v) funciona naturalmente. O mesmo comando também compõe o grau de um polinômio, \\deg(p), em álgebra. Um grafo regular tem \\deg(v) = k para todo vértice.",
  },
  "in-degree": {
    name: "Grau de entrada",
    meaning: "Grau de entrada do vértice v num grafo orientado: o número de arcos que terminam em v.",
    usage: "Em grafos orientados, cada arco contribui com um para o grau de saída de sua cauda e com um para o grau de entrada de sua cabeça, então \\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|. Uma fonte tem \\deg^-(v) = 0. O menos sobrescrito é a convenção mais comum, embora alguns textos escrevam d^-(v), \\deg_{\\text{in}}(v) ou \\mathrm{indeg}(v). Coloque o sobrescrito entre chaves, ^{-}, para que fique claramente associado. No PageRank e em contextos de cadeias de Markov, o grau de entrada está relacionado a quantas páginas apontam para um nó. A ordenação topológica pelo algoritmo de Kahn remove repetidamente vértices de grau de entrada zero.",
  },
  "out-degree": {
    name: "Grau de saída",
    meaning: "Grau de saída do vértice v num grafo orientado: o número de arcos que saem de v.",
    usage: "O grau de saída conta os arcos cuja cauda é v; um sumidouro tem \\deg^+(v) = 0. Somado sobre todos os vértices, ele é igual a |E|, coincidindo com o grau de entrada total. O mais sobrescrito é comum, com d^+(v) e \\deg_{\\text{out}}(v) como alternativas, então defina sua notação. Um grafo orientado tem um circuito euleriano exatamente quando é conexo (ignorando vértices isolados) e \\deg^+(v) = \\deg^-(v) em todo vértice. Em termos da matriz de adjacência, o grau de saída é uma soma de linha e o grau de entrada uma soma de coluna. Coloque o sobrescrito entre chaves, ^{+}, para maior clareza no código-fonte.",
  },
  "path": {
    name: "Grafo caminho",
    meaning: "Grafo caminho com n vértices: n vértices ligados em linha por n - 1 arestas.",
    usage: "P_n é uma família básica da teoria dos grafos, junto com C_n e K_n. As convenções variam, o que é uma fonte real de confusão: muitos textos fazem n contar os vértices, enquanto outros, como o Diestel, escrevem P^k para um caminho com k arestas. Declare a sua. Os caminhos têm número cromático 2 para n \\geq 2 e são árvores. Na contagem de passeios, o número de caminhos difere do de passeios, pois os vértices não podem se repetir. O subscrito é um índice simples; para índices mais longos, use chaves, P_{n+1}. Não confunda com P(n, k), as permutações.",
  },
  "cycle": {
    name: "Grafo ciclo",
    meaning: "Grafo ciclo com n vértices (n pelo menos 3), formando um único laço fechado; em combinatória, também é o n-ésimo número de Catalan.",
    usage: "Na teoria dos grafos, C_n é o ciclo com n vértices e n arestas; ele é bipartido exatamente quando n é par, então \\chi(C_n) = 2 para n par e 3 para n ímpar. Em combinatória, a mesma notação costuma significar o número de Catalan C_n = \\frac{1}{n+1}\\binom{2n}{n}, que conta parentizações balanceadas, árvores binárias e caminhos de Dyck: 1, 1, 2, 5, 14, 42. Como esta página é compartilhada pelas duas áreas, diga logo no início qual significado você pretende. Chaves são necessárias para índices compostos, C_{2k+1}.",
  },
  "complete-graph": {
    name: "Grafo completo",
    meaning: "Grafo completo com n vértices, no qual cada par de vértices distintos está ligado por uma aresta.",
    usage: "K_n tem \\binom{n}{2} = n(n-1)/2 arestas e número cromático n. A letra homenageia Kuratowski, cujo teorema afirma que um grafo é planar se e somente se não contém nenhuma subdivisão de K_5 ou de K_{3,3}. Os números de Ramsey são formulados com grafos completos: R(3,3) = 6 significa que toda 2-coloração das arestas de K_6 contém um triângulo monocromático. A fórmula de Cayley conta n^{n-2} árvores geradoras de K_n. Use chaves para subscritos com vários caracteres, como K_{n+1}. Uma clique de tamanho k em G é um subgrafo isomorfo a K_k.",
  },
  "bipartite": {
    name: "Grafo bipartido completo",
    meaning: "Grafo bipartido completo: duas partes de tamanhos m e n, com cada vértice de uma parte ligado a cada vértice da outra.",
    usage: "K_{m,n} tem m + n vértices e mn arestas, e K_{1,n} é o grafo estrela. K_{3,3}, o grafo das três casas e três serviços, é um dos dois subgrafos proibidos de Kuratowski para a planaridade. Observe que a vírgula fica dentro das chaves: K_{m,n}; escrever K_m,n deixa o n na linha de base. O TeX acrescenta um pequeno espaço depois da vírgula nos subscritos, o que fica bem; para um aspecto mais compacto, alguns escrevem K_{m\\,n} sem vírgula, mas isso é raro. O problema de Zarankiewicz pergunta quantas arestas um grafo pode ter sem conter uma cópia de K_{s,t}.",
  },
  "adjacency-matrix": {
    name: "Matriz de adjacência",
    meaning: "Entrada na linha i e coluna j da matriz de adjacência: 1 se os vértices i e j são adjacentes, 0 caso contrário.",
    usage: "Para um grafo simples não orientado, a matriz de adjacência é simétrica, com zeros na diagonal; em grafos ponderados, A_{ij} guarda o peso da aresta. Um fato clássico: (A^k)_{ij} conta os passeios de comprimento k de i até j, então \\operatorname{tr}(A^3)/6 é o número de triângulos. Os graus são somas de linha, \\deg(i) = \\sum_j A_{ij}, e o laplaciano é L = D - A. Escreva A_{ij} com chaves; A_ij colocaria apenas o i no subscrito. Para índices com vírgula, A_{i,j} é mais claro quando os índices são expressões como A_{i+1,j}.",
    example: "(A^k)_{ij} = \\#\\{\\text{passeios de comprimento } k \\text{ de } i \\text{ a } j\\}",
  },
  "incidence-matrix": {
    name: "Matriz de incidência",
    meaning: "B maiúsculo, convencionalmente a matriz de incidência de um grafo, com linhas para os vértices e colunas para as arestas.",
    usage: "Para um grafo não orientado, B_{ve} = 1 quando o vértice v é uma extremidade da aresta e. Para um grafo orientado, ou com orientação arbitrária, as entradas são -1 na cauda e +1 na cabeça (ou o contrário, dependendo do autor), e então BB^\\top = L = D - A, o laplaciano do grafo. Alguns livros chamam a matriz de M ou N em vez de B. Ela é uma matriz n \\times m, então declare as dimensões. Para uma matriz de incidência não orientada, BB^\\top é igual a D + A, o laplaciano sem sinal, uma fonte frequente de erros de sinal.",
  },
  "connected": {
    name: "Conectividade",
    meaning: "Relação de conectividade: existe um caminho entre os vértices u e v, de modo que eles estão na mesma componente.",
    usage: "\\leftrightarrow é uma seta da classe das relações, então recebe espaçamento simétrico. Na teoria dos grafos, u \\leftrightarrow v costuma significar que u e v estão conectados, enquanto em cadeias de Markov significa que dois estados se comunicam. Grafos orientados exigem cuidado: a alcançabilidade mútua é a relação de conexão forte, às vezes escrita u \\rightleftarrows v. Não confunda \\leftrightarrow com a seta mais longa \\longleftrightarrow nem com a seta dupla \\Leftrightarrow, que significa equivalência lógica. Alguns autores escrevem u \\sim v para a adjacência e reservam \\leftrightarrow para a conectividade, o que é limpo se for declarado. É uma relação de equivalência cujas classes são as componentes.",
    example: "u \\leftrightarrow v \\iff \\exists \\text{ um caminho } u\\text{-}v \\text{ em } G",
  },
  "tree": {
    name: "Árvore",
    meaning: "T maiúsculo, a letra habitual para uma árvore: um grafo conexo sem ciclos.",
    usage: "Uma árvore com n vértices tem exatamente n - 1 arestas, um único caminho entre quaisquer dois vértices e pelo menos duas folhas quando n \\geq 2. Árvores geradoras são escritas T \\subseteq G, e a fórmula de Cayley diz que K_n tem n^{n-2} árvores geradoras rotuladas. Algoritmos de árvore geradora mínima, como os de Kruskal e de Prim, minimizam w(T) = \\sum_{e \\in T} w(e). O T simples em itálico basta; cuidado com conflitos com o sobrescrito de transposição ou com o tempo, e prefira ^\\top para transpostas em documentos que também tratam de árvores. Árvores enraizadas costumam ser escritas (T, r).",
  },
  "forest": {
    name: "Floresta",
    meaning: "F maiúsculo, que convencionalmente denota uma floresta: um grafo acíclico cujas componentes são árvores.",
    usage: "Uma floresta com n vértices e k componentes conexas tem n - k arestas, o que generaliza a fórmula das árvores. Florestas geradoras aparecem no algoritmo de Kruskal, que faz uma floresta crescer acrescentando a aresta mais barata que não cria ciclo, e na visão matroidal dos grafos, em que as florestas são os conjuntos independentes da matroide gráfica. Como letra simples, F não precisa de comando, mas colide com as faces em grafos planares (a fórmula de Euler V - E + F = 2) e com os números de Fibonacci, então troque de letra se ambos aparecerem. A arboricidade de um grafo conta as florestas necessárias para cobrir suas arestas.",
  },
  "chromatic-number": {
    name: "Número cromático",
    meaning: "Número cromático de G: o menor número de cores necessário para colorir os vértices de modo que vértices adjacentes tenham cores diferentes.",
    usage: "Escrito com a letra grega \\chi, o número cromático satisfaz \\omega(G) \\leq \\chi(G) \\leq \\Delta(G) + 1, e o teorema de Brooks reduz a cota superior para \\Delta(G), exceto para grafos completos e ciclos ímpares. O teorema das quatro cores afirma que \\chi(G) \\leq 4 para grafos planares. A versão para arestas é o índice cromático \\chi'(G). Não confunda \\chi com o x latino, que parece semelhante em algumas fontes, nem com a característica de Euler, que também usa \\chi. Calcular \\chi(G) é NP-difícil, então muitos artigos dão cotas em vez de valores exatos.",
  },
  "clique": {
    name: "Número de clique",
    meaning: "Número de clique de G: o tamanho do maior subgrafo completo contido no grafo.",
    usage: "O número de clique é uma cota inferior para o número cromático, \\omega(G) \\leq \\chi(G), e os grafos em que a igualdade vale para todo subgrafo induzido são chamados perfeitos. Ele é complementar ao número de independência: \\omega(G) = \\alpha(\\overline{G}), com \\overline{G} o complemento. Encontrá-lo é NP-difícil. Use o ômega grego minúsculo, \\omega, e não w. O símbolo é sobrecarregado em outros contextos: a notação assintótica ômega minúsculo e \\omega(n), o número de fatores primos distintos, então uma breve definição ajuda em contextos mistos. O teorema de Turán limita o número de arestas de um grafo com \\omega(G) \\leq r.",
  },
  "independent-set": {
    name: "Número de independência",
    meaning: "Número de independência de G: o tamanho do maior conjunto de vértices dois a dois não adjacentes.",
    usage: "O número de independência satisfaz \\alpha(G) \\cdot \\chi(G) \\geq |V(G)|, pois cada classe de cor é um conjunto independente, e \\alpha(G) = \\omega(\\overline{G}). A identidade de Gallai o relaciona ao número de cobertura por vértices: \\alpha(G) + \\tau(G) = |V(G)|. Calculá-lo é NP-difícil em geral, mas fácil em grafos bipartidos graças ao teorema de Kőnig. Use \\alpha, a letra grega, que é visualmente distinta de a na maioria das fontes. Os análogos para arestas são \\alpha'(G) ou \\nu(G), o número de emparelhamento. A cota de Caro-Wei dá \\alpha(G) \\geq \\sum_v 1/(\\deg(v)+1).",
  },
  "matching": {
    name: "Emparelhamento",
    meaning: "M maiúsculo, a letra padrão para um emparelhamento: um conjunto de arestas em que duas quaisquer não compartilham vértice.",
    usage: "Um emparelhamento M \\subseteq E(G) é perfeito quando cobre todos os vértices, de modo que |M| = |V(G)|/2, e máximo quando não existe outro maior; seu tamanho é o número de emparelhamento \\nu(G). O teorema de Hall dá a condição para um emparelhamento perfeito em grafos bipartidos: |N(S)| \\geq |S| para todo subconjunto S de um dos lados. Os algoritmos incluem o de Hopcroft-Karp para grafos bipartidos e o algoritmo das flores de Edmonds no caso geral. Caminhos aumentantes costumam ser escritos em relação a M, e a diferença simétrica M \\triangle M' aparece em muitas demonstrações. Evite M se uma matriz também precisar de nome.",
    example: "M \\subseteq E(G), \\quad |M| = |V(G)|/2 \\text{ se } M \\text{ for perfeito}",
  },
  "planar-graph": {
    name: "Grafo planar",
    meaning: "Imersão de um grafo G no plano, em que as arestas só se encontram nas extremidades comuns; G é então planar.",
    usage: "A seta com gancho \\hookrightarrow marca convencionalmente uma injeção ou imersão, então G \\hookrightarrow \\mathbb{R}^2 diz que G pode ser desenhado no plano sem cruzamentos. Grafos planares conexos satisfazem a fórmula de Euler V - E + F = 2, e grafos planares simples com pelo menos três vértices têm no máximo 3V - 6 arestas. Os teoremas de Kuratowski e de Wagner os caracterizam proibindo K_5 e K_{3,3}. \\hookrightarrow é uma seta com espaçamento de relação; a inversa é \\hookleftarrow. Imergir na esfera é equivalente, e outras superfícies são escritas G \\hookrightarrow S_g.",
  },
};

export default text;
