import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "Colchete angular esquerdo",
    meaning: "Colchete angular de abertura, usado para produtos internos, valores esperados e subgrupos gerados.",
    usage: "O colchete angular esquerdo inicia notações como o produto interno \\langle u, v \\rangle, um bra-ket \\langle \\psi | \\phi \\rangle, o subgrupo \\langle g \\rangle ou uma média temporal \\langle x \\rangle. Nunca use o sinal de menor que < para isso: é uma relação com espaçamento largo e forma errada. Funciona com \\left e \\right para dimensionamento automático, e com \\big, \\Big e similares para tamanhos manuais. Sempre o combine com \\rangle; se você precisar que só um lado apareça, use \\left. ou \\right. como par invisível.",
  },
  "angle-bracket-right": {
    name: "Colchete angular direito",
    meaning: "Colchete angular de fechamento, que encerra produtos internos, kets, médias e outras notações com colchetes angulares.",
    usage: "\\rangle fecha o que \\langle abre: \\langle f, g \\rangle em espaços de Hilbert, o ket de Dirac |\\psi\\rangle e apresentações como \\langle a, b \\mid a^2 = b^3 \\rangle. O sinal de maior que > não serve como substituto, pois é uma relação com espaço extra ao redor e um ângulo mais achatado. Quando o conteúdo é alto, como em frações ou somatórios, use \\left\\langle ... \\right\\rangle para que os dois lados cresçam juntos. Um ket isolado é escrito |\\psi\\rangle e não precisa de um \\langle correspondente.",
  },
  "angle-brackets": {
    name: "Colchetes angulares",
    meaning: "Envolve uma expressão em colchetes angulares, para médias, produtos internos ou o subespaço gerado por geradores.",
    usage: "Esse par é usado para valores esperados em física, \\langle E \\rangle, para produtos internos \\langle x, y \\rangle e para o subgrupo ou ideal gerado por elementos, \\langle a \\rangle. Para argumentos altos, passe a \\left\\langle \\frac{a}{b} \\right\\rangle. Se você escreve produtos internos com frequência, defina uma macro, por exemplo com uma ferramenta de delimitadores pareados, para que o tamanho fique consistente. Na notação de Dirac, muitos preferem um conjunto de macros próprio para bra-kets, porque o espaçamento em torno da barra vertical dentro de \\langle \\phi | \\psi \\rangle pode ficar irregular; \\mid acrescenta espaçamento de relação, enquanto | não acrescenta nenhum.",
  },
  "ceiling-left": {
    name: "Colchete de teto esquerdo",
    meaning: "Colchete de teto esquerdo, a metade de abertura da função teto, que arredonda para cima até um inteiro.",
    usage: "\\lceil abre a notação de teto \\lceil x \\rceil, o menor inteiro maior ou igual a x. É um delimitador, então funciona com \\left\\lceil ... \\right\\rceil para conteúdo alto como \\frac{n}{2}, e com tamanhos no estilo de \\big. O colchete de teto tem o traço horizontal em cima, enquanto o colchete de piso \\lfloor o tem embaixo, um par fácil de trocar na revisão. Alguns autores também usam \\lceil e \\rceil como aspas de canto na numeração de Gödel, para a qual \\ulcorner é uma alternativa.",
  },
  "ceiling-right": {
    name: "Colchete de teto direito",
    meaning: "Colchete de teto direito, que fecha a notação da função teto para arredondamento para cima.",
    usage: "Combine \\rceil com \\lceil para escrever \\lceil \\log_2 n \\rceil, o número de bits necessário em muitos algoritmos, ou \\lceil n/k \\rceil para o número de blocos de tamanho k necessários para cobrir n itens. Ao contrário dos parênteses, o teto não tem equivalente ASCII, então o comando é a única forma de obter o símbolo. Use \\right\\rceil quando o colchete esquerdo correspondente foi composto com \\left. Se você escreve tetos com frequência, uma macro de delimitadores pareados como \\ceil{x} mantém os tamanhos consistentes ao longo do documento.",
    example: "\\text{blocos} = \\lceil n / k \\rceil",
  },
  "ceiling": {
    name: "Função teto",
    meaning: "Arredonda x para cima até o menor inteiro maior ou igual a ele: a função teto.",
    usage: "Tetos aparecem na análise de algoritmos (\\lceil \\log_2 n \\rceil comparações, \\lceil n/2 \\rceil na ordenação por intercalação), na teoria dos números e em problemas de contagem como o princípio da casa dos pombos, em que alguma caixa contém pelo menos \\lceil n/k \\rceil itens. Para entradas negativas, lembre que \\lceil -2.5 \\rceil = -2. Quando o argumento é uma fração ou uma expressão alta, use \\left\\lceil ... \\right\\rceil para que os colchetes cresçam. Não substitua por colchetes retos [x]: textos antigos usavam [x] para o piso, o que torna a notação ambígua.",
  },
  "floor-left": {
    name: "Colchete de piso esquerdo",
    meaning: "Colchete de piso esquerdo, a metade de abertura da função piso, que arredonda para baixo até um inteiro.",
    usage: "\\lfloor inicia notações como \\lfloor x \\rfloor e \\lfloor n/2 \\rfloor. O colchete de piso tem o traço embaixo, ao contrário de \\lceil, cujo traço fica em cima. Como delimitador, pode ser dimensionado com \\left\\lfloor ou \\bigl\\lfloor. Na teoria dos números, o mesmo colchete aparece em fórmulas como a fórmula de Legendre para a potência de um primo que divide n!. Se sua fonte ou renderizador mostrar um colchete reto comum, verifique se você digitou \\lfloor e não [, que é outro glifo.",
  },
  "floor-right": {
    name: "Colchete de piso direito",
    meaning: "Colchete de piso direito, que fecha a notação da função piso para arredondamento para baixo.",
    usage: "Feche todo \\lfloor com \\rfloor, por exemplo em \\lfloor x \\rfloor ou na divisão inteira \\lfloor a/b \\rfloor, que muitas linguagens de programação implementam para operandos positivos. Quando o colchete esquerdo foi composto com \\left\\lfloor, o direito deve ser \\right\\rfloor no mesmo grupo matemático, ou o LaTeX acusa a falta de um \\right. O par também é usado para arredondar ao inteiro mais próximo por meio de \\lfloor x + 1/2 \\rfloor. Uma macro de delimitadores pareados como \\floor{x} mantém a notação consistente em documentos longos.",
  },
  "floor": {
    name: "Função piso",
    meaning: "Arredonda x para baixo até o maior inteiro menor ou igual a ele: a função piso.",
    usage: "O piso aparece na divisão inteira, na parte fracionária \\{x\\} = x - \\lfloor x \\rfloor, no ponto médio da busca binária \\lfloor (lo + hi)/2 \\rfloor e em somas da teoria dos números como a fórmula de Legendre. Para números negativos, arredonda para longe de zero: \\lfloor -2.5 \\rfloor = -3, o que difere do truncamento. A literatura antiga escrevia [x] para o piso (o colchete de Gauss), mas hoje se prefere a notação com colchetes de piso, por ser inequívoca. Use \\left\\lfloor ... \\right\\rfloor em torno de frações para que os colchetes acompanhem a altura do conteúdo.",
  },
  "double-vertical-bar": {
    name: "Barra vertical dupla",
    meaning: "Barra vertical dupla, o delimitador das normas e, em alguns contextos, o símbolo de paralelismo.",
    usage: "\\| imprime duas linhas verticais e é usado sobretudo em pares para normas, \\|x\\|. Como símbolo isolado tem espaçamento comum, então, quando você quer dizer a relação “é paralelo a”, use \\parallel, que acrescenta espaçamento de relação. Para normas, recomenda-se \\lVert e \\rVert, porque indicam ao LaTeX qual lado abre e qual fecha, o que dá o espaçamento correto ao lado de operadores e sinais de menos. Pode ser dimensionada com \\left\\| ... \\right\\| ou \\big\\|. No modo texto, \\| não produz as barras; use \\textbardbl ou passe ao modo matemático.",
  },
  "norm": {
    name: "Norma",
    meaning: "Envolve um vetor ou uma função em barras duplas para denotar sua norma, isto é, seu comprimento ou tamanho.",
    usage: "Normas estão em toda parte na análise e na álgebra linear: a norma euclidiana \\|x\\|_2, a norma do supremo \\|f\\|_\\infty, a norma de Frobenius \\|A\\|_F e a desigualdade triangular \\|x + y\\| \\le \\|x\\| + \\|y\\|. Um índice após a barra de fechamento indica de qual norma se trata. Escrever \\lVert x \\rVert em vez de \\| x \\| dá melhor espaçamento em expressões como \\|{-x}\\|, pois o LaTeX passa a saber o papel de cada barra. Para conteúdo alto, como frações dentro da norma, use \\left\\| ... \\right\\|. As barras simples |x| ficam reservadas para o valor absoluto.",
  },
  "double-bracket-left": {
    name: "Colchete duplo esquerdo",
    meaning: "Colchete duplo (vazado) esquerdo, usado para colchetes semânticos, intervalos de inteiros e a notação de Iverson.",
    usage: "Na semântica de linguagens de programação, \\llbracket e \\rrbracket denota o significado de uma expressão, como na semântica denotacional. Textos de tradição francesa e a combinatória escrevem \\llbracket 1, n \\rrbracket para o intervalo de inteiros \\{1, \\dots, n\\}, e alguns autores o usam para o colchete de Iverson. O comando não está no LaTeX básico nem nas fontes de símbolos da AMS, então requer um pacote de símbolos que o forneça; o KaTeX o suporta diretamente. Ele só cresce com pacotes que oferecem versões extensíveis, então, para conteúdo alto, verifique sua configuração. Combine-o com \\rrbracket.",
  },
  "double-bracket-right": {
    name: "Colchete duplo direito",
    meaning: "Colchete duplo direito, que fecha a notação de colchete semântico ou de intervalo de inteiros.",
    usage: "Feche \\llbracket com \\rrbracket para escrever \\llbracket P \\rrbracket_\\sigma, o significado do programa P no estado \\sigma, ou o intervalo de inteiros \\llbracket a, b \\rrbracket. Não o imite com ]] ou com ]\\!], que dão forma e espaçamento diferentes do glifo de colchete vazado. Autores com muitos colchetes semânticos costumam definir uma macro como \\sem{e} para que o estilo do colchete possa ser alterado num só lugar, por exemplo trocando para [\\![ e ]\\!] se a fonte de colchetes duplos não estiver disponível.",
  },
  "double-brackets": {
    name: "Colchetes duplos",
    meaning: "Envolve uma expressão em colchetes duplos, para a semântica denotacional ou intervalos de inteiros.",
    usage: "Esse par de colchetes dá a função semântica na semântica formal, \\llbracket x \\rrbracket_\\rho para o valor de x no ambiente \\rho, e o intervalo discreto \\llbracket m, n \\rrbracket na combinatória. Também aparece no colchete de Iverson e na notação de salto para descontinuidades em métodos numéricos para EDPs, \\llbracket u \\rrbracket = u^+ - u^-. Como o glifo não está nas fontes padrão, o código-fonte precisa de um pacote de símbolos; veja a nota sobre pacotes nesta página. Os traços vazados o tornam visualmente distinto de colchetes comuns aninhados.",
  },
  "parentheses": {
    name: "Parênteses",
    meaning: "Parênteses que crescem automaticamente até a altura do que envolvem.",
    usage: "\\left( e \\right) medem o conteúdo e escolhem um tamanho correspondente, então \\left( \\frac{a}{b} \\right)^2 recebe parênteses altos, enquanto um (x) simples continua pequeno. Todo \\left precisa de um \\right no mesmo grupo, e uma quebra de linha dentro de align não pode separá-los. Usá-los em excesso deixa expressões simples pesadas, e \\left...\\right acrescenta um pouco de espaço extra como átomo interno, o que pode deixar f\\left(x\\right) folgado; para argumentos de funções, \\bigl( ... \\bigr) ou parênteses simples costumam ser melhores. Eles se ajustam ao item mais alto, incluindo os limites de somatórios.",
  },
  "square-brackets": {
    name: "Colchetes",
    meaning: "Colchetes que se ajustam ao conteúdo, para agrupamento, comutadores ou intervalos fechados.",
    usage: "Os colchetes servem como o nível de agrupamento seguinte aos parênteses, para o intervalo fechado [a, b], o comutador [A, B] = AB - BA, a esperança \\mathbb{E}[X] e matrizes. Com \\left[ ... \\right], os colchetes se esticam em torno de frações, integrais ou matrizes, como em \\left[ \\frac{x^2}{2} \\right]_0^1 para primitivas avaliadas. Dentro de um ambiente bmatrix, os colchetes já são fornecidos, então você não precisa escrever \\left[. Para colchetes aninhados numa expressão longa, tamanhos manuais como \\Bigl[ ... \\Bigr] dão um controle mais fino.",
  },
  "curly-braces": {
    name: "Chaves",
    meaning: "Chaves que se esticam até a altura do conteúdo, para a notação de conjuntos por compreensão e definições agrupadas.",
    usage: "As chaves precisam ser escapadas como \\{ e \\}, pois chaves simples são caracteres de agrupamento do LaTeX e não imprimem nada. Com \\left\\{ ... \\right\\}, elas crescem em torno de conteúdo alto, como \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}. Para uma barra separadora de conjunto por compreensão que também cresça, use \\middle| entre elas. Para definições por partes, o ambiente cases já desenha a chave esquerda, então você não precisa de \\left\\{ ... \\right. à mão. No modo texto, use \\textbraceleft ou simplesmente \\{ dentro do modo matemático.",
  },
  "vertical-bar": {
    name: "Barras verticais",
    meaning: "Barras verticais que se redimensionam conforme o conteúdo, para valores absolutos e determinantes.",
    usage: "Use \\left| ... \\right| quando um valor absoluto contém uma fração ou um somatório, como em \\left| \\frac{a}{b} \\right|, e para determinantes de matrizes altas (embora vmatrix seja mais simples). O | simples é ambíguo para o LaTeX: ele não distingue uma barra de abertura de uma de fechamento, o que pode estragar o espaçamento em torno de um sinal de menos inicial. Para resultados consistentes, defina uma macro com \\lvert e \\rvert, ou use \\left\\lvert ... \\right\\rvert. Para separadores de conjuntos por compreensão e probabilidades condicionais, use \\mid ou \\middle|.",
  },
  "big-parentheses": {
    name: "Parênteses grandes",
    meaning: "Parênteses fixados no segundo degrau de tamanho, maiores que \\big, mas menores que \\bigg.",
    usage: "O TeX oferece quatro tamanhos manuais: \\big, \\Big, \\bigg e \\Bigg. \\Big( cabe em torno de frações simples ou de somatórios com limites pequenos e, ao contrário de \\left, não examina o conteúdo, então pode atravessar quebras de linha em ambientes de várias linhas e dá resultados previsíveis. Para o espaçamento correto, use \\Bigl( para abrir e \\Bigr) para fechar, já que um \\Big isolado produz um átomo comum. Tamanhos manuais costumam ser preferíveis a \\left...\\right dentro de argumentos de funções, onde \\left acrescenta espaço extra. Os tamanhos são fixos, então não diminuem em índices.",
  },
  "bigg-parentheses": {
    name: "Parênteses enormes",
    meaning: "O maior dos quatro tamanhos manuais de delimitadores do TeX, para conteúdo muito alto, como frações aninhadas.",
    usage: "\\Bigg( produz parênteses com cerca de duas vezes e meia o tamanho normal, adequados em torno de frações empilhadas, integrais grandes com limites ou somas de frações. Como o tamanho é fixo, ele é previsível entre as linhas de um align, onde \\left e \\right não podem ser separados. Use \\Biggl e \\Biggr para o espaçamento correto de abertura e fechamento. Se o conteúdo for ainda mais alto, \\left( ... \\right) pode crescer além de \\Bigg usando peças extensíveis. A sequência do menor para o maior é \\big, \\Big, \\bigg, \\Bigg.",
  },
  "left-delimiter-with-invisible-right": {
    name: "Delimitador esquerdo com direito invisível",
    meaning: "Mostra apenas um parêntese esquerdo redimensionável; \\right. é um delimitador de fechamento invisível que completa o par.",
    usage: "Todo \\left deve ser correspondido por um \\right, e a forma com ponto \\right. permite fechar o grupo sem imprimir nada. Isso é útil quando uma expressão entre parênteses continua noutra linha de um align (abra com \\left( numa linha, feche com \\right. e recomece com \\left. ... \\right) na seguinte), ou para chaves de um lado só. Os tamanhos das duas metades são calculados de forma independente, então acrescente um \\vphantom do conteúdo alto para mantê-los iguais. Para funções definidas por partes, o ambiente cases é uma escolha mais limpa que \\left\\{ ... \\right.",
  },
  "right-delimiter-with-invisible-left": {
    name: "Delimitador direito com esquerdo invisível",
    meaning: "Imprime apenas um parêntese de fechamento redimensionável; \\left. funciona como par de abertura invisível.",
    usage: "\\left. é o delimitador de abertura invisível que permite a \\right) ajustar seu tamanho ao conteúdo. Um uso comum é a barra de avaliação \\left. \\frac{df}{dx} \\right|_{x=0}, em que só a linha vertical da direita deve aparecer e se esticar. Também completa um parêntese aberto numa linha anterior de uma equação de várias linhas. Como cada metade é dimensionada separadamente, insira \\vphantom{...} com a parte mais alta da outra linha para igualar as alturas. O ponto em si não é impresso, mas acrescenta o pequeno espaço do delimitador nulo.",
  },
  "half-open-interval-brackets": {
    name: "Delimitadores de intervalo semiaberto",
    meaning: "Combina um colchete esquerdo com um parêntese direito, a notação de um intervalo semiaberto.",
    usage: "\\left e \\right não precisam ter a mesma forma, então \\left[ ... \\right) escreve o intervalo semiaberto [a, b), fechado em a e aberto em b, comum em probabilidade (funções de distribuição acumulada são contínuas à direita em [x, \\infty)) e em teoria da medida. Pares diferentes também resolvem (a, b], escrito \\left( ... \\right]. Para intervalos simples, [0, 1) sem \\left/\\right basta e fica mais limpo. Alguns textos europeus usam colchetes invertidos, como em [a, b[, que podem ser digitados diretamente.",
  },
};

export default text;
