import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "Tensor",
    meaning: "Tensor geral do tipo (2,2), com dois índices superiores (contravariantes) e dois inferiores (covariantes).",
    usage: "Cada índice superior se transforma com a jacobiana e cada índice inferior com a sua inversa, de modo que contrair um índice superior com um inferior dá um resultado independente das coordenadas. Escrito como T^{ij}_{kl}, os índices inferiores ficam logo abaixo dos superiores, o que esconde a ordem dos índices; para tensores não simétricos, escreva T^{ij}{}_{kl}, para que o bloco inferior comece depois do superior. O tensor de Riemann R^i{}_{jkl} e o tensor de elasticidade C_{ijkl} são exemplos comuns. Os índices saem em itálico por padrão; mantenha-os assim, a menos que sejam rótulos e não posições do tensor.",
  },
  "covariant-index": {
    name: "Índice covariante",
    meaning: "Tensor com dois índices inferiores, um tensor covariante de ordem 2, como uma métrica, um tensor de tensões ou uma forma bilinear.",
    usage: "Os índices inferiores se transformam com a jacobiana inversa, T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}, a mesma regra dos gradientes. Exemplos incluem a métrica g_{ij}, o tensor de Ricci R_{ij} e o tensor de tensões de Cauchy \\sigma_{ij}. Um 2-tensor covariante atua sobre dois vetores e devolve um número, T_{ij} u^i v^j. No espaço euclidiano com coordenadas cartesianas, a distinção entre índices superiores e inferiores desaparece, e é por isso que textos de engenharia costumam escrever todos os índices embaixo. Todo tensor desse tipo se decompõe em partes simétrica e antissimétrica, T_{ij} = T_{(ij)} + T_{[ij]}.",
  },
  "contravariant-index": {
    name: "Índice contravariante",
    meaning: "Tensor com dois índices superiores: um tensor contravariante de ordem 2, como a métrica inversa ou o tensor energia-momento.",
    usage: "Os índices superiores se transformam como as componentes de um vetor, T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}. O tensor energia-momento T^{\\mu\\nu} é o exemplo clássico da física, com a lei de conservação \\partial_\\mu T^{\\mu\\nu} = 0 no espaço-tempo plano. Coloque os dois índices num único grupo de chaves, T^{ij}; T^i^j gera um erro de expoente duplo. Quando também for preciso uma linha, T'^{ij} funciona, porque o LaTeX junta a linha ao expoente seguinte. A contração com dois covetores, T^{ij}\\alpha_i\\beta_j, produz um escalar, e a métrica inversa g^{ij} é o exemplo mais comum em geometria.",
  },
  "mixed-tensor": {
    name: "Tensor misto",
    meaning: "Tensor misto do tipo (1,1), com um índice superior e um inferior, equivalente a uma aplicação linear sobre vetores.",
    usage: "Um tensor (1,1) leva um vetor v^j em T^i_j v^j, de modo que, numa base, ele é simplesmente uma matriz, e o seu traço T^i_i não depende das coordenadas. Com T^i_j, os dois índices ficam empilhados verticalmente, o que não tem problema para o delta de Kronecker, mas é ambíguo nos demais casos, pois T^i{}_j e T_j{}^i diferem depois de abaixar o índice com uma métrica. O truque do grupo vazio {} os escalona. Abaixar o índice superior com a métrica produz um tensor (0,2), T_{kj} = g_{ki} T^i{}_j, e a forma escalonada mostra qual posição mudou.",
  },
  "kronecker-delta": {
    name: "Delta de Kronecker",
    meaning: "Delta de Kronecker: vale 1 quando os índices são iguais e 0 caso contrário; são as componentes da aplicação identidade.",
    usage: "Ele atua como uma substituição de índices, \\delta^i_j v^j = v^i, e o seu traço em n dimensões é \\delta^i_i = n. Também exprime a dualidade entre bases, e^i(e_j) = \\delta^i_j, e a relação com a métrica inversa, g^{ik} g_{kj} = \\delta^i_j. Como é simétrico, empilhar os índices como em \\delta^i_j não causa problema, ao contrário do que ocorre com tensores mistos em geral. Em contextos cartesianos, costuma ser escrito \\delta_{ij}, com os dois índices embaixo. Não o confunda com a função delta de Dirac \\delta(x).",
  },
  "levi-civita": {
    name: "Símbolo de Levi-Civita",
    meaning: "Símbolo de Levi-Civita em três dimensões: +1 para permutações pares de 123, -1 para as ímpares e 0 se algum índice se repete.",
    usage: "Ele exprime produtos vetoriais e rotacionais em notação indicial, (\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k, e determinantes como \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}. A identidade de contração \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} é usada o tempo todo em demonstrações de cálculo vetorial. Muitos autores preferem \\varepsilon_{ijk}, o épsilon curvo, para deixar \\epsilon livre para quantidades pequenas; escolha um e mantenha-o. Em espaços curvos, ele é uma densidade tensorial, e o tensor propriamente dito leva um fator \\sqrt{g}.",
  },
  "einstein-summation": {
    name: "Convenção de soma de Einstein",
    meaning: "Convenção de soma de Einstein: um índice repetido, uma vez em cima e outra embaixo, é somado, de modo que A^i B_i significa a soma sobre i.",
    usage: "A convenção permite que A^i B_i represente \\sum_i A^i B_i, o pareamento escalar de um vetor com um covetor, sem escrever o sinal de somatório. Cada índice somado deve aparecer exatamente uma vez em cima e uma vez embaixo; um índice que aparece três vezes indica um erro. Os índices livres devem coincidir nos dois lados de uma equação, como em v^i = T^i_j u^j. Se a convenção puder ser pouco familiar para os leitores, enuncie-a uma vez e dê a forma explícita com \\sum na primeira equação.",
  },
  "tensor-product": {
    name: "Produto tensorial",
    meaning: "Produto tensorial de A e B, que combina dois tensores ou espaços vetoriais num só, de ordem ou dimensão maior.",
    usage: "Para espaços vetoriais, \\dim(V \\otimes W) = \\dim V \\cdot \\dim W, e para tensores as componentes se multiplicam, (A \\otimes B)^{ij} = A^i B^j. Para matrizes, o mesmo símbolo denota o produto de Kronecker, uma matriz em blocos com entradas a_{ij}B. A mecânica quântica o usa para sistemas compostos, |\\psi\\rangle \\otimes |\\phi\\rangle. \\otimes é um operador binário com espaçamento automático; para um produto sobre um conjunto de índices, use o operador grande \\bigotimes_{i=1}^n V_i, e para fatores repetidos, V^{\\otimes k}.",
  },
  "contraction": {
    name: "Contração",
    meaning: "Contração de um tensor misto: a soma sobre um índice repetido, superior e inferior, que dá o seu traço.",
    usage: "Igualar um índice superior a um inferior e somar elimina os dois e reduz a ordem em duas unidades; para um tensor (1,1), o resultado T^i_i = \\operatorname{tr} T é um escalar. O tensor de Ricci é uma contração do tensor de Riemann, e a curvatura escalar contrai mais uma vez com a métrica, R = g^{ij}R_{ij}. Só se pode contrair um índice superior com um inferior; contrair dois índices inferiores exige a métrica. Escreva \\operatorname{tr} em vez de um tr simples, para que o traço fique reto e com espaçamento de operador.",
  },
  "metric-lowering": {
    name: "Abaixamento de índices pela métrica",
    meaning: "Abaixamento de índices: a métrica converte as componentes contravariantes v^j de um vetor nas componentes covariantes v_i.",
    usage: "Trata-se do isomorfismo musical bemol, muitas vezes escrito v^\\flat, que identifica vetores com covetores. No espaço euclidiano com coordenadas cartesianas, g_{ij} = \\delta_{ij}, e abaixar o índice não muda nada numericamente; no espaço de Minkowski com assinatura (-,+,+,+), troca o sinal da componente temporal. O índice livre i deve coincidir nos dois lados, enquanto j é somado. Para um tensor completo, abaixe cada índice separadamente, T_{ij} = g_{ik} T^k{}_j, prestando atenção à ordem das posições. O comando \\flat usado em v^\\flat é o bemol da notação musical, disponível no modo matemático padrão.",
  },
  "metric-raising": {
    name: "Levantamento de índices pela métrica",
    meaning: "Levantamento de índices: a métrica inversa transforma as componentes covariantes v_j de volta nas componentes contravariantes v^i.",
    usage: "O levantamento é o isomorfismo musical sustenido, \\alpha^\\sharp, e é assim que o vetor gradiente se obtém a partir da diferencial: (\\operatorname{grad} f)^i = g^{ij}\\partial_j f. Levantar e depois abaixar devolve as componentes originais, porque g^{ij} g_{jk} = \\delta^i_k. Em relatividade, p^\\mu = g^{\\mu\\nu} p_\\nu converte o covetor quadrimomento num vetor. Escreva a métrica inversa com índices superiores, nunca como g^{-1}_{ij}, que sugere a posição errada dos índices. O comando \\sharp dá o sustenido correspondente, e para uma métrica diagonal só sobrevive o termo j = i.",
  },
  "partial-derivative": {
    name: "Derivada parcial",
    meaning: "Abreviação da derivada parcial em relação à coordenada x^i, usada também para os vetores da base coordenada.",
    usage: "Escrever \\partial_i f em vez de \\frac{\\partial f}{\\partial x^i} mantém compactas as fórmulas carregadas de índices, e em geometria \\partial_i também denota o campo vetorial da base \\partial/\\partial x^i. A relatividade usa \\partial_\\mu no espaço-tempo, com o d'alembertiano \\partial_\\mu\\partial^\\mu. Derivadas parciais de componentes de tensores não são tensores em coordenadas curvilíneas; substitua \\partial_i por \\nabla_i para corrigir isso. Um subíndice com vírgula, f_{,i}, é o equivalente tradicional. Use \\partial, e não d nem \\delta, para derivadas parciais. As derivadas parciais comutam, \\partial_i\\partial_j = \\partial_j\\partial_i, e é por isso que os campos coordenados têm colchete de Lie nulo.",
  },
  "covariant-derivative": {
    name: "Derivada covariante",
    meaning: "Derivada covariante ao longo da i-ésima direção coordenada, a substituta tensorial da derivada parcial \\partial_i.",
    usage: "Sobre um vetor, ela acrescenta uma correção com símbolos de Christoffel, \\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k, e sobre um covetor o sinal se inverte, \\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k. A notação tradicional com ponto e vírgula escreve v^j{}_{;i} para a mesma coisa. A compatibilidade com a métrica significa \\nabla_k g_{ij} = 0, de modo que os índices podem ser levantados e abaixados através de \\nabla. Em geral, derivadas covariantes não comutam; o seu comutador aplicado a um vetor dá o tensor de Riemann. Textos de relatividade escrevem o mesmo operador como \\nabla_\\mu.",
  },
  "symmetrization": {
    name: "Simetrização",
    meaning: "Parte simétrica de um tensor nos índices i e j, indicada com parênteses em volta do par de índices.",
    usage: "Para dois índices, T_{(ij)} = \\tfrac12(T_{ij} + T_{ji}), e para n índices a soma percorre todas as permutações, dividida por n!. A notação com parênteses é padrão em relatividade geral, por exemplo na equação de Killing \\nabla_{(i}\\xi_{j)} = 0. Para excluir um índice da simetrização, isole-o com barras verticais, como em T_{(i|j|k)}. Parênteses dentro de um subíndice são caracteres comuns, então nenhum comando especial é necessário; só tome cuidado, pois os parênteses podem abrir e fechar em subíndices diferentes.",
  },
  "antisymmetrization": {
    name: "Antissimetrização",
    meaning: "Parte antissimétrica de um tensor em i e j, indicada com colchetes em volta dos índices.",
    usage: "Para dois índices, T_{[ij]} = \\tfrac12(T_{ij} - T_{ji}), e em geral é a soma com sinais sobre as permutações, dividida por n!. Todo tensor de dois índices se decompõe como T_{ij} = T_{(ij)} + T_{[ij]}. A primeira identidade de Bianchi se escreve R_{i[jkl]} = 0, e o tensor do campo eletromagnético satisfaz \\partial_{[\\mu}F_{\\nu\\lambda]} = 0. Alguns autores omitem o fator 1/n!, então declare a sua normalização. Colchetes num subíndice são caracteres comuns, sem necessidade de \\lbrack. Os tensores covariantes totalmente antissimétricos correspondem às formas diferenciais.",
  },
  "tensor-rank": {
    name: "Tipo de um tensor",
    meaning: "Tipo de um tensor: p índices contravariantes (superiores) e q covariantes (inferiores), às vezes chamado, de forma imprecisa, de sua ordem.",
    usage: "Um tensor (p, q) é um elemento de V^{\\otimes p} \\otimes (V^*)^{\\otimes q}, de modo que um vetor é (1, 0), um covetor (0, 1), uma aplicação linear (1, 1) e uma métrica (0, 2). A terminologia varia: alguns livros chamam p + q de posto ou ordem e reservam “tipo” para o par. A contração leva o tipo (p, q) em (p-1, q-1). Em LaTeX, o par é só um parêntese com vírgula; no modo matemático, o espaço fino depois da vírgula é automático, então não acrescente espaçamento extra.",
  },
  "basis-vector": {
    name: "Vetor da base",
    meaning: "Vetores da base de um espaço vetorial ou espaço tangente, indexados com índice inferior, para que as componentes levem índices superiores.",
    usage: "Um vetor se expande como v = v^i e_i, emparelhando o índice inferior da base com o índice superior das componentes. Em geometria, a base coordenada é e_i = \\partial_i, e num referencial ortonormal g(e_i, e_j) = \\delta_{ij}. Física e engenharia costumam escrever \\mathbf{e}_i em negrito ou \\hat{e}_i com acento circunflexo, e usam \\mathbf{e}_x, \\mathbf{e}_y para as direções cartesianas. Mantenha o índice embaixo; escrever e^i para vetores da base entra em conflito com a convenção da base dual. Numa mudança de base e'_i = A^j{}_i e_j, as componentes se transformam com a matriz inversa.",
  },
  "dual-basis": {
    name: "Base dual",
    meaning: "Covetores da base dual, definidos por e^i(e_j) = \\delta^i_j, usados para extrair as componentes de um vetor.",
    usage: "Aplicar e^i a um vetor seleciona a sua i-ésima componente, e^i(v) = v^i, e os covetores se expandem como \\alpha = \\alpha_i e^i. Para coordenadas, a base dual é e^i = dx^i, e no método de Cartan o correferencial ortonormal e^a dá a métrica como g = \\delta_{ab}\\, e^a \\otimes e^b. Como o índice é um sobrescrito, e^i pode ser lido como uma potência de e; se houver esse risco, avise o leitor ou use \\theta^i, uma alternativa comum para correferenciais.",
  },
  "component-transform": {
    name: "Transformação de componentes",
    meaning: "Lei de transformação de um tensor contravariante de ordem 2: cada índice superior recebe um fator da matriz de transformação.",
    usage: "Aqui \\Lambda^i_k é a matriz de transformação, uma transformação de Lorentz na relatividade restrita ou, em geral, a jacobiana \\partial x'^i/\\partial x^k, e as componentes com linha vivem no novo referencial. Um tensor é definido justamente por obedecer a essa lei, e os índices inferiores se transformam com a matriz inversa. O LaTeX junta a linha e o expoente em T'^{ij}, então não são necessárias chaves em volta da linha. Escalone os índices como \\Lambda^i{}_k quando a matriz não for simétrica, para que o leitor saiba qual posição é a linha.",
  },
};

export default text;
