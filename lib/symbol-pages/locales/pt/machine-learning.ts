import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  "expectation": {
    name: "Esperança",
    meaning: "E em negrito de quadro-negro, a notação padrão para o valor esperado de uma variável aleatória.",
    usage: "A esperança aparece em toda parte em probabilidade e aprendizado de máquina: \\mathbb{E}[X] = \\sum_x x\\,p(x), o risco \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)] ou a variância como \\mathbb{E}[X^2] - \\mathbb{E}[X]^2. Ponha a distribuição no índice para deixar explícita a fonte de aleatoriedade. Textos mais antigos usam um E romano simples ou \\operatorname{E}; ambos servem se usados de forma consistente. Observe que \\mathbb só oferece letras maiúsculas, então \\mathbb{e} dá um resultado sem sentido. Use colchetes para o argumento e \\left[ \\right] quando ele contiver frações altas. Definir uma macro como \\newcommand{\\E}{\\mathbb{E}} mantém a notação uniforme.",
  },
  "kl-divergence": {
    name: "Divergência de Kullback-Leibler",
    meaning: "Divergência de Kullback-Leibler de Q em relação a P: a perda logarítmica extra esperada ao usar Q no lugar da distribuição verdadeira P.",
    usage: "A divergência KL é D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}, central na inferência variacional, no ELBO e na regularização de políticas em aprendizado por reforço. Ela não é simétrica, então a ordem de P e Q importa, e a barra dupla as separa. \\| é um símbolo comum, sem espaço ao redor, o que pode parecer apertado; muitos autores escrevem \\parallel, que recebe espaçamento de relação, ou acrescentam \\, dos dois lados. \\text{KL} no índice herda a fonte ao redor, então \\mathrm{KL} é mais seguro dentro do texto em itálico de um teorema. Para frações grandes dentro, use \\left( \\right).",
  },
  "kl-divergence-short-form": {
    name: "Divergência KL (forma abreviada)",
    meaning: "Notação abreviada da divergência de Kullback-Leibler entre as distribuições P e Q, sem o prefixo D.",
    usage: "Muitos artigos de aprendizado de máquina omitem o D e escrevem \\text{KL}(P \\| Q), sobretudo em funções de perda como o objetivo do VAE, com um termo \\text{KL}(q_\\phi(z|x) \\| p(z)). Significa exatamente o mesmo que D_{\\text{KL}}(P \\| Q), inclusive a assimetria: a KL direta tende a cobrir toda a massa, a KL reversa tende a buscar uma moda. Como \\text{} copia a fonte do texto ao redor, KL pode sair em itálico dentro de um teorema; \\operatorname{KL} ou \\mathrm{KL} resolvem isso, e \\operatorname ainda acrescenta o espaço correto antes do parêntese. Considere \\,\\|\\, ou \\parallel para dar mais folga em torno das barras.",
  },
  "argmax": {
    name: "Argmax",
    meaning: "O argumento do máximo: o valor de entrada em que uma função atinge seu maior valor.",
    usage: "Escrito como \\arg\\max, ele combina dois operadores predefinidos: \\arg, que nunca recebe limites, e \\max, que recebe. O resultado é que, no modo display, um índice fica só embaixo de max, e a restrição fica descentralizada. Uma abordagem mais limpa é \\operatorname*{arg\\,max}, ou definir \\DeclareMathOperator*{\\argmax}{arg\\,max} no preâmbulo, o que centraliza o índice sob a palavra inteira. Ele aparece em regras de classificação como \\hat{y} = \\arg\\max_k p(k|x), na estimação por máxima verossimilhança e em políticas gulosas no aprendizado por reforço. Observe que ele devolve um conjunto quando o maximizador não é único.",
  },
  "argmin": {
    name: "Argmin",
    meaning: "O argumento do mínimo: a entrada em que uma função atinge seu menor valor.",
    usage: "\\arg\\min é como a maioria dos problemas de otimização e de aprendizado define uma solução, por exemplo os mínimos quadrados \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 ou a atribuição de grupos no k-means. Digitado assim, é \\arg seguido de \\min, então em fórmulas em destaque o índice se centraliza sob min, e não sob a expressão inteira. Para um índice centralizado, use \\operatorname*{arg\\,min} ou declare um operador com asterisco no preâmbulo. Alguns autores escrevem argmin como uma só palavra, sem espaço; o espaço fino em arg\\,min segue o estilo mais comum. Lembre que o resultado pode ser um conjunto se os minimizadores não forem únicos.",
  },
  "argmax-subscript": {
    name: "Argmax com índice",
    meaning: "Argmax com a variável de otimização teta no índice: o valor do parâmetro que maximiza um objetivo.",
    usage: "Esta forma nomeia a variável otimizada, a maneira padrão de escrever a máxima verossimilhança, \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta), e a estimação MAP. Como o índice se liga apenas a \\max, no modo display o teta fica sob max, e não centralizado sob o arg max inteiro. Substituí-lo por \\operatorname*{arg\\,max}_{\\theta} ou por um \\argmax declarado dá um posicionamento centralizado e é o que a maioria das revistas espera. Em fórmulas no meio do texto, o índice aparece à direita de qualquer forma. Você também pode listar restrições no índice, como \\theta \\in \\Theta, usando \\substack para várias linhas.",
  },
  "argmin-subscript": {
    name: "Argmin com índice",
    meaning: "Argmin sobre teta: o valor do parâmetro que minimiza uma perda ou função objetivo.",
    usage: "É assim que a minimização do risco empírico costuma ser escrita: \\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i). No modo display o índice fica só sob min, o que parece um pouco descentralizado; \\operatorname*{arg\\,min}_{\\theta} corrige isso e mantém o espaçamento consistente. Se você o escreve com frequência, uma macro no preâmbulo economiza digitação e garante um resultado idêntico. Objetivos regularizados costumam acrescentar um termo de penalidade, como na regressão ridge ou no lasso. Quando o minimizador é único, o sinal de igual serve; caso contrário, \\in é a relação mais precisa, porque o argmin devolve um conjunto.",
  },
  "softmax": {
    name: "Softmax",
    meaning: "Nome da função softmax: transforma um vetor de logits em uma distribuição de probabilidade por exponenciação e normalização.",
    usage: "A softmax é definida componente a componente como \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j} e fecha quase todo classificador e o mecanismo de atenção, em que \\text{softmax}(QK^\\top/\\sqrt{d_k})V. Como \\text{} usa a fonte do texto ao redor, ela fica em itálico dentro de ambientes de teorema ou de ênfase. \\operatorname{softmax} costuma ser a melhor escolha: sai sempre reta e acrescenta espaçamento de operador antes do parêntese, assim como \\sin. Um parâmetro de temperatura se escreve \\text{softmax}(z/T). Use \\left( \\right) quando o argumento contiver uma fração. Em artigos com muito código, diga ao longo de qual eixo a softmax normaliza, como a dimensão das classes.",
  },
  "relu": {
    name: "ReLU",
    meaning: "Nome da função de ativação unidade linear retificada, que devolve max(0, x) e zera as entradas negativas.",
    usage: "A ReLU é definida como \\text{ReLU}(x) = \\max(0, x), com derivada 1 para entradas positivas e 0 para negativas. É a ativação padrão das camadas ocultas nas redes modernas; variantes incluem a Leaky ReLU, \\max(\\alpha x, x), e a GELU. Escrever \\text{ReLU} funciona, mas segue o estilo do texto ao redor, então inclina em um ambiente itálico; \\operatorname{ReLU} ou \\mathrm{ReLU} permanecem retos, e \\operatorname também cuida do espaçamento antes do argumento. Ao aplicá-la a um vetor, diga que ela age elemento a elemento, como em \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b}).",
  },
  "gradient-of-l": {
    name: "Gradiente de L",
    meaning: "Gradiente da perda L em relação aos parâmetros teta: o vetor de derivadas parciais usado no treinamento.",
    usage: "É a grandeza que a retropropagação calcula, e ela conduz a atualização do gradiente descendente \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}. O índice em \\nabla indica em relação a quais variáveis você deriva, o que importa quando a perda depende tanto dos parâmetros quanto das entradas, por exemplo \\nabla_x \\mathcal{L} em ataques adversariais. \\mathcal dá o L caligráfico e só aceita letras maiúsculas. No meio do texto, o índice fica à direita, embaixo do nabla, o que é padrão. Para estimativas estocásticas, um chapéu ajuda: \\hat{\\nabla}_\\theta \\mathcal{L} ou \\tilde{g}.",
  },
  "partial-derivative": {
    name: "Derivada parcial",
    meaning: "Derivada parcial da perda L em relação a um parâmetro teta, a sensibilidade da perda a cada parâmetro.",
    usage: "Esta fração é o bloco escalar básico da retropropagação; a regra da cadeia fica \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}. Use \\partial, o d curvo, para derivadas parciais e um d simples para derivadas totais. No texto corrido, \\frac encolhe para caber, o que muitas vezes fica difícil de ler; \\tfrac, a forma com barra \\partial \\mathcal{L}/\\partial \\theta ou um \\dfrac em destaque podem funcionar melhor. Para uso repetido, uma macro ou o comando \\pdv do pacote physics encurta a digitação. Quando teta é um vetor, muitos autores passam a escrever \\nabla_\\theta \\mathcal{L}.",
  },
  "theta-star": {
    name: "Teta com asterisco",
    meaning: "Teta com um asterisco sobrescrito: o valor ótimo do parâmetro, tipicamente o minimizador de uma perda.",
    usage: "Um símbolo com asterisco marca o ótimo, como em \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta), e resultados de convergência limitam \\|\\theta_t - \\theta^*\\|. Digitar ^* eleva um asterisco em tamanho de expoente. Alternativas são ^\\ast, que é idêntico, e ^\\star, que dá uma estrela de cinco pontas preferida por alguns autores, porque o asterisco pode ser confundido com um conjugado ou adjunto. Distinga-o de \\hat{\\theta}, que por convenção denota uma estimativa a partir dos dados, e não o ótimo verdadeiro. Se teta também tiver um índice, qualquer ordem funciona: \\theta^*_t e \\theta_t^* saem iguais.",
  },
  "weight-matrix": {
    name: "Matriz de pesos",
    meaning: "W reto em negrito, a notação convencional para a matriz de pesos de uma camada de rede neural.",
    usage: "Maiúsculas em negrito denotam matrizes e minúsculas em negrito denotam vetores, então uma camada densa é \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, com os pesos de cada camada escritos \\mathbf{W}^{(l)} ou \\mathbf{W}_l. \\mathbf produz letras latinas retas em negrito; não põe em negrito letras gregas nem a maioria dos símbolos, então use \\boldsymbol ou \\bm para \\boldsymbol{\\Sigma} ou um \\theta em negrito. Muitos artigos de aprendizado profundo dispensam o negrito e escrevem W; escolha uma convenção e mantenha-a do começo ao fim. A transposta costuma ser \\mathbf{W}^\\top, que se lê melhor do que ^T.",
  },
  "bias-vector": {
    name: "Vetor de viés",
    meaning: "b minúsculo em negrito, a notação usual para o vetor de viés somado depois de uma transformação linear.",
    usage: "O viés desloca a pré-ativação de cada neurônio, como em \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, e as versões por camada se escrevem \\mathbf{b}^{(l)}. Por convenção, minúscula em negrito indica um vetor coluna. \\mathbf dá negrito reto; se você quiser vetores em negrito itálico, como fazem algumas revistas de física, use \\boldsymbol{b} ou \\bm{b}. Seja consistente com os índices: o i-ésimo elemento do viés é b_i em itálico simples, não em negrito, já que é um escalar. Em modelos lineares, o intercepto costuma ser escrito b ou w_0 em vez de um vetor em negrito.",
  },
  "cross-entropy": {
    name: "Entropia cruzada",
    meaning: "Entropia cruzada entre uma distribuição verdadeira p e um modelo q: o comprimento de código esperado ao codificar p com q.",
    usage: "A entropia cruzada é H(p, q) = -\\sum_x p(x) \\log q(x), e é a perda de classificação: com rótulos one-hot ela se reduz a -\\log q(y). Ela se decompõe como H(p, q) = H(p) + D_{\\text{KL}}(p \\| q), o que explica por que minimizá-la em q também minimiza a divergência KL. Cuidado com o conflito de notação: H(X, Y) com variáveis aleatórias costuma significar entropia conjunta, por isso alguns autores escrevem H_\\times(p, q) ou \\mathrm{CE}(p, q) para maior clareza. A vírgula tem o espaçamento normal de pontuação, então nenhum ajuste manual é necessário.",
  },
  "entropy": {
    name: "Entropia",
    meaning: "Entropia de Shannon de uma variável aleatória X: a incerteza média, ou conteúdo de informação, de seus resultados.",
    usage: "A entropia é H(X) = -\\sum_x p(x) \\log p(x), medida em bits com \\log_2 e em nats com \\ln. Ela é máxima para a distribuição uniforme, em que H(X) = \\log |\\mathcal{X}|, e aparece na divisão de árvores de decisão pelo ganho de informação e no aprendizado por reforço de máxima entropia. Grandezas relacionadas compartilham a letra: a entropia condicional H(Y|X), a entropia conjunta H(X, Y) e a entropia diferencial h(X) para variáveis contínuas, geralmente em minúscula. Alguns artigos escrevem \\mathbb{H}[X] para evitar confusão com uma hessiana H ou com uma classe de hipóteses.",
  },
  "mutual-information": {
    name: "Informação mútua",
    meaning: "Informação mútua entre X e Y: quanto conhecer uma variável aleatória reduz a incerteza sobre a outra.",
    usage: "A informação mútua é I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y)), e é zero exatamente quando X e Y são independentes. O ponto e vírgula é convencional e separa os dois argumentos, que podem ser listas, como em I(X_1, X_2; Y); uma vírgula seria ambígua. O TeX trata ; como pontuação e acrescenta automaticamente um espaço fino depois dele. A informação mútua condicional se escreve I(X; Y \\mid Z). Ela é a base do gargalo de informação, das perdas contrastivas InfoNCE e da seleção de atributos.",
  },
  "log-likelihood": {
    name: "Log-verossimilhança",
    meaning: "Log-verossimilhança dos dados x sob os parâmetros teta, a grandeza maximizada na estimação por máxima verossimilhança.",
    usage: "Tomar logaritmos transforma produtos de verossimilhanças independentes em somas, \\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta), o que é mais fácil de derivar e numericamente estável. O seu negativo é a conhecida perda NLL. Uma dica tipográfica: uma barra | simples é um símbolo comum, então não recebe espaço de nenhum lado; \\mid é uma relação e acrescenta espaçamento equilibrado, dando p(x \\mid \\theta). Alguns autores usam ponto e vírgula, p(x; \\theta), para indicar que teta é um parâmetro fixo, e não uma variável aleatória em que se condiciona, que é a leitura frequentista.",
  },
  "probability-distribution": {
    name: "Distribuição de probabilidade",
    meaning: "Probabilidade (densidade ou massa) de x sob uma distribuição p, a notação básica para uma distribuição em aprendizado de máquina.",
    usage: "O p(x) minúsculo denota uma função de densidade ou de massa, enquanto o maiúsculo P(X = x) ou \\Pr costuma ser reservado a probabilidades de eventos. O aprendizado de máquina sobrecarrega p livremente, deixando o argumento decidir de qual distribuição se trata, como em p(x) versus p(z); quando isso ficar confuso, acrescente índices como p_\\theta(x) ou p_{\\text{data}}(x). A normalização exige \\sum_x p(x) = 1 ou \\int p(x)\\,dx = 1, com um espaço fino \\, antes de dx. A amostragem se escreve x \\sim p(x), usando \\sim.",
  },
  "conditional-probability": {
    name: "Probabilidade condicional",
    meaning: "Probabilidade condicional de y dado x, como a distribuição de rótulos prevista por um classificador para uma entrada.",
    usage: "Modelos discriminativos aprendem p(y | x) diretamente, enquanto modelos generativos aprendem p(x | y) e p(y) e aplicam a regra de Bayes, p(y|x) = p(x|y)p(y)/p(x). A barra vertical digitada como | é um caractere comum e não recebe espaço ao redor; \\mid é uma relação e produz p(y \\mid x), que se lê melhor e é o que a maioria dos guias de estilo recomenda. Para uma condição alta, \\middle| entre \\left( e \\right) ajusta a barra à altura dos parênteses. Índices como p_\\theta(y \\mid x) indicam os parâmetros do modelo.",
  },
  "sum-over-classes": {
    name: "Soma sobre as classes",
    meaning: "Somatório sobre as classes c de 1 a C, usado em perdas multiclasse e na normalização de probabilidades.",
    usage: "Somas sobre classes aparecem na entropia cruzada categórica, -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c, e no denominador da softmax. Em fórmulas em destaque os limites ficam acima e abaixo do sigma grande; no meio do texto ficam à direita, em tamanho menor, o que economiza altura de linha. Force a posição de destaque no texto com \\sum\\limits, ou o contrário com \\nolimits. Usar C para o número de classes e c para o índice é uma convenção comum; só não reutilize C para um custo ou uma constante na mesma equação. O símbolo \\Sigma é uma letra grega e não deve substituir \\sum.",
  },
  "product-over-samples": {
    name: "Produto sobre as amostras",
    meaning: "Produtório sobre as amostras i de 1 a N, tipicamente a verossimilhança de um conjunto de dados i.i.d.",
    usage: "Para amostras independentes, a verossimilhança se fatora como \\prod_{i=1}^{N} p(x_i \\mid \\theta), e tomar o logaritmo a converte em uma soma. \\prod é o pi maiúsculo de operador grande, dimensionado para fórmulas em destaque; não o substitua por \\Pi, a letra grega, que continua pequena e não tem limites. Em fórmulas em destaque os limites ficam acima e abaixo, enquanto no texto ficam ao lado; \\prod\\limits muda isso. Para um coproduto, \\coprod é a contraparte invertida. Produtos longos são numericamente instáveis na prática, outro motivo pelo qual os artigos costumam passar para a forma logarítmica.",
  },
  "l1-norm": {
    name: "Norma L1",
    meaning: "Norma L1 de teta: a soma dos valores absolutos de seus elementos.",
    usage: "A norma L1, \\|\\theta\\|_1 = \\sum_i |\\theta_i|, é a penalidade do lasso e favorece soluções esparsas, porque sua bola unitária tem bicos sobre os eixos. \\| dá barras duplas, mas as trata como símbolos comuns, então o espaçamento pode sair errado quando segue um sinal de menos; \\lVert \\theta \\rVert_1 as marca como delimitadores esquerdo e direito e espaça corretamente. Para argumentos altos, use \\left\\| ... \\right\\| para redimensionar. Muitos artigos definem uma macro \\norm com o \\DeclarePairedDelimiter do pacote mathtools, por consistência. Não a confunda com |\\theta|, que denota um valor absoluto ou uma cardinalidade.",
  },
  "l2-norm": {
    name: "Norma L2",
    meaning: "Norma euclidiana (L2) de teta: a raiz quadrada da soma dos quadrados de seus elementos.",
    usage: "A norma L2 \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} mede comprimento, e seu quadrado aparece como a penalidade ridge, ou de decaimento de pesos, \\lambda\\|\\theta\\|_2^2. Observe a ordem dos índices: \\|\\theta\\|_2^2 é a norma ao quadrado, e o TeX empilha o subscrito e o sobrescrito com capricho. Muitos autores omitem o índice 2 quando o contexto é claro. Para um espaçamento melhor dos delimitadores, use \\lVert e \\rVert em vez de \\|, e \\left\\| \\right\\| para conteúdos altos como frações. Para matrizes, \\|A\\|_2 costuma significar a norma espectral, não a norma elemento a elemento, que é a norma de Frobenius.",
  },
  "frobenius-norm": {
    name: "Norma de Frobenius",
    meaning: "Norma de Frobenius da matriz W: a raiz quadrada da soma dos quadrados de todos os seus elementos.",
    usage: "A norma de Frobenius é \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}, o análogo matricial da norma L2 de vetores. Ela é usada no decaimento de pesos de matrizes, no erro de aproximação de posto baixo e em objetivos de fatoração de matrizes. Ela difere da norma espectral \\|\\mathbf{W}\\|_2, que é o maior valor singular. O índice F é uma letra itálica simples; alguns escrevem \\mathrm{F}. Assim como nas normas de vetores, \\lVert e \\rVert dão um espaçamento melhor do que \\|, sobretudo quando a norma está ao quadrado ou é precedida por um coeficiente.",
  },
};

export default text;
