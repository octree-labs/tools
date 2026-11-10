import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "Vetor em negrito",
    meaning: "Letra reta em negrito, a convenção tipográfica usual para um vetor, como x em R^n.",
    usage: "Textos de álgebra linear e artigos de física marcam vetores em negrito, como em A\\mathbf{x} = \\mathbf{b}. \\mathbf só afeta letras latinas e algarismos; letras gregas como \\alpha não mudam, então use \\boldsymbol{\\alpha} para elas. Observe que \\mathbf dá negrito reto, enquanto \\boldsymbol{x} dá negrito itálico; o estilo ISO prefere negrito itálico para vetores, ao passo que muitos livros usam o reto. Alternativas incluem \\vec{x} com uma seta, comum na física introdutória, e um sublinhado em notas no estilo manuscrito. Escolha uma convenção e aplique-a de forma consistente, de preferência por meio de uma macro, para poder mudá-la em um só lugar.",
  },
  "transpose": {
    name: "Matriz transposta",
    meaning: "Transposta da matriz A escrita com o símbolo \\top, que troca linhas por colunas.",
    usage: "Usar \\top como expoente dá uma marca reta e limpa em forma de T que não se confunde com uma variável chamada T, e por isso muitos artigos de aprendizado de máquina e estatística escrevem \\mathbf{x}^{\\top}\\mathbf{y} ou (AB)^{\\top} = B^{\\top}A^{\\top}. A^T parece semelhante, mas usa um T itálico, e \\intercal é uma terceira opção, mais baixa e mais estreita. Seja qual for a escolha, defina uma macro curta para ela, para que trocar de estilo depois seja uma edição de uma linha. Para matrizes complexas, a transposta conjugada costuma ser A^{*} ou A^{H}, com \\dagger comum na física.",
  },
  "transpose-t": {
    name: "Transposta (T)",
    meaning: "Transposta de A marcada com um T itálico sobrescrito, a forma mais comum nos livros-texto.",
    usage: "Escrever A^T é rápido e universalmente entendido: as equações normais de mínimos quadrados A^T A\\mathbf{x} = A^T\\mathbf{b} aparecem assim na maioria dos livros de álgebra linear. A desvantagem é a ambiguidade quando T também é uma variável, como um horizonte de tempo ou uma temperatura, pois A^T poderia então ser lido como uma potência. Nessa situação, passe para A^{\\top} ou para o reto A^{\\mathsf{T}}. As chaves são necessárias assim que o expoente tem mais de um elemento, então a transposta da inversa é A^{-T}, não A^-T. Uma matriz simétrica é aquela com A^T = A.",
  },
  "inverse": {
    name: "Matriz inversa",
    meaning: "Inversa da matriz quadrada A, a matriz cujo produto com A é a identidade.",
    usage: "Ela satisfaz AA^{-1} = A^{-1}A = I e só existe quando \\det(A) \\neq 0. As chaves são obrigatórias: A^-1 sobrescreveria apenas o sinal de menos e deixaria o 1 na linha de base. Para uma matriz 2 por 2, a fórmula explícita com \\frac{1}{ad-bc} vezes a adjunta costuma ser escrita por extenso com bmatrix. Em artigos numéricos, os leitores sabem que a inversa raramente é calculada explicitamente, então escrever \\mathbf{x} = A^{-1}\\mathbf{b} é aceitável como notação. Pseudoinversas usam A^{+} ou A^{\\dagger}, e (AB)^{-1} = B^{-1}A^{-1} inverte a ordem.",
  },
  "determinant": {
    name: "Determinante",
    meaning: "Determinante de uma matriz quadrada A, o escalar que dá o seu fator de escala de volume com sinal.",
    usage: "\\det é um operador predefinido, por isso sai em fonte reta com o espaçamento correto; digitar det(A) poria em itálico três variáveis separadas. Identidades importantes são \\det(AB) = \\det(A)\\det(B) e \\det(A^{-1}) = 1/\\det(A). Ao contrário de \\sin, \\det pode receber limites embaixo no modo display, como \\lim. Para uma matriz explícita, o ambiente vmatrix desenha as barras verticais diretamente, então \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc se lê naturalmente. Os parênteses são opcionais quando o argumento é uma única letra, \\det A, como em outros operadores.",
  },
  "trace": {
    name: "Traço",
    meaning: "Traço de A, a soma dos elementos da diagonal, escrito com o rótulo reto \"tr\".",
    usage: "O traço aparece em identidades como \\operatorname{tr}(AB) = \\operatorname{tr}(BA) e na norma de Frobenius \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A). Usar \\text{tr} dá letras retas, mas herda a fonte do texto ao redor, ficando itálico dentro de um teorema, e não acrescenta espaçamento de operador. A escolha mais robusta é \\operatorname{tr}, ou um \\DeclareMathOperator{\\tr}{tr} global no preâmbulo, para que \\tr A tenha o espaçamento correto sem parênteses. Físicos costumam escrever Tr com maiúscula, sobretudo para matrizes densidade. O traço também é igual à soma dos autovalores contados com multiplicidade.",
  },
  "rank": {
    name: "Posto",
    meaning: "Posto de A: a dimensão do seu espaço coluna, escrito com um rótulo reto.",
    usage: "O teorema do núcleo e da imagem se escreve \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n, e uma matriz quadrada é invertível exatamente quando tem posto completo. \\text{rank} dá letras retas, mas o itálico de um ambiente de teorema pode vazar para dentro dele, e não há espaçamento de operador. Prefira \\operatorname{rank}(A), ou declare \\DeclareMathOperator{\\rank}{rank} uma vez e escreva \\rank A. Não existe um comando \\rank embutido, então digitá-lo sem definição causa um erro de sequência de controle indefinida. A aproximação de posto baixo pela SVD truncada é um lugar comum em que você vai escrever isso.",
  },
  "norm": {
    name: "Norma",
    meaning: "Barras verticais duplas em torno de x, que denotam sua norma, comprimento ou magnitude.",
    usage: "Usar \\lVert e \\rVert em vez de \\| dos dois lados diz ao LaTeX qual barra abre e qual fecha, o que dá o espaçamento correto em expressões como \\lVert -x \\rVert, em que \\|-x\\| trataria o menos como operador binário. Índices escolhem a norma: \\lVert x \\rVert_2 para a euclidiana, \\lVert x \\rVert_1, \\lVert x \\rVert_\\infty ou \\lVert A \\rVert_F para a de Frobenius. Para conteúdos altos, use \\left\\lVert ... \\right\\rVert. A desigualdade triangular \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert é um uso típico, e uma macro \\norm economiza muita digitação em artigos longos.",
  },
  "inner-product": {
    name: "Produto interno",
    meaning: "Colchetes angulares em torno de dois vetores, que denotam seu produto interno.",
    usage: "O produto interno generaliza o produto escalar: \\langle x, y \\rangle = \\sum_i x_i y_i em R^n, e a desigualdade de Cauchy-Schwarz |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert é o exemplo clássico. Nunca digite os sinais de menor e maior no lugar; < e > são relações com espaçamento largo e ângulo errado. Para argumentos grandes, \\left\\langle ... \\right\\rangle redimensiona os colchetes. Na mecânica quântica os mesmos colchetes formam a notação bra-ket, \\langle \\psi | \\phi \\rangle, com uma barra no meio. Alguns livros escrevem (x, y) ou x \\cdot y para a mesma grandeza.",
  },
  "kronecker-delta": {
    name: "Delta de Kronecker",
    meaning: "Delta de Kronecker: vale 1 quando os índices i e j coincidem e 0 caso contrário.",
    usage: "Ele descreve a matriz identidade elemento a elemento, I_{ij} = \\delta_{ij}, e expressa a ortonormalidade de uma base, \\langle e_i, e_j \\rangle = \\delta_{ij}. Na notação de índices ele age como um operador de substituição: \\sum_j \\delta_{ij} a_j = a_i, o que simplifica cálculos tensoriais. Não o confunda com o delta de Dirac \\delta(x), uma distribuição em variáveis contínuas, embora ambos usem o \\delta minúsculo. Chaves em torno de ij mantêm os dois índices no subscrito; \\delta_ij abaixaria só o i e deixaria o j na linha de base. Em cálculos tensoriais com índices mistos, escreva \\delta^i_j.",
  },
  "identity-matrix": {
    name: "Matriz identidade",
    meaning: "A matriz identidade n por n, com uns na diagonal e zeros nas demais posições.",
    usage: "O índice registra o tamanho, de modo que, para uma matriz A m por n, valem AI_n = A e I_m A = A, com identidades diferentes de cada lado. Quando a dimensão é óbvia, um I simples basta; alguns autores preferem o negrito \\mathbf{I} ou escrevem E, sobretudo em textos europeus mais antigos. Para tamanhos com mais de um caractere, acrescente chaves: I_{n+1} ou I_{10}, porque I_10 abaixaria só o 1. O polinômio característico \\det(A - \\lambda I_n) é o lugar típico em que ela aparece, e \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} escreve I_2 explicitamente.",
  },
  "zero-matrix": {
    name: "Matriz nula",
    meaning: "Zero em negrito, que denota o vetor nulo ou a matriz nula, em oposição ao escalar 0.",
    usage: "O negrito distingue o elemento neutro da adição de um espaço vetorial do número zero, como em A\\mathbf{x} = \\mathbf{0} para um sistema homogêneo ou \\mathbf{v} + \\mathbf{0} = \\mathbf{v}. \\mathbf funciona com algarismos, então esta é a forma mais simples; \\boldsymbol{0} dá o mesmo resultado na maioria das fontes. Para uma matriz nula de tamanho explícito, escreva \\mathbf{0}_{m \\times n} ou um O maiúsculo, O_{m \\times n}. Muitos artigos dispensam o negrito e escrevem 0 quando o contexto deixa o tipo claro, o que é aceitável se for consistente. Siga o mesmo estilo de negrito que você usa para os demais vetores.",
  },
  "matrix": {
    name: "Matriz",
    meaning: "Ambiente bmatrix, que compõe uma matriz entre colchetes, com & entre as colunas.",
    usage: "Os elementos de uma linha são separados por &, as linhas terminam com \\\\, e os colchetes se ajustam ao conteúdo, então nenhum \\left[ é necessário. Os ambientes irmãos mudam apenas os delimitadores: pmatrix usa parênteses, vmatrix barras verticais para determinantes, Vmatrix barras duplas, e o matrix simples nenhum. O ambiente array é a alternativa mais antiga; ele exige uma especificação de colunas como {cc}, mas permite linhas verticais e alinhamento por coluna. Para matrizes genéricas, preencha as lacunas com \\cdots, \\vdots e \\ddots, como em a_{11} & \\cdots & a_{1n}. No meio do texto, smallmatrix dentro de \\bigl[ \\bigr] evita esticar a linha.",
  },
  "column-vector": {
    name: "Vetor coluna",
    meaning: "Um pmatrix de uma só coluna, que empilha x sobre y como vetor coluna entre parênteses.",
    usage: "Cada \\\\ inicia uma nova linha, então uma única coluna de elementos vira um vetor vertical, a forma usual de escrever coordenadas em R^2 ou o lado direito de um sistema linear. Parênteses (pmatrix) e colchetes (bmatrix) são igualmente padrão; escolha um estilo para o documento inteiro. Para economizar espaço vertical no texto corrido, escreva uma linha transposta, (x, y)^{\\top}. Para vetores longos, use \\vdots em uma linha do meio, como em x_1 \\\\ \\vdots \\\\ x_n. Vetores coluna no meio do texto ficam apertados e afastam as linhas; smallmatrix é a alternativa compacta quando um deles é inevitável.",
  },
};

export default text;
