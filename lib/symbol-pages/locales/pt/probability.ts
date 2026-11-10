import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  "probability": {
    name: "Probabilidade",
    meaning: "P em negrito de quadro (blackboard bold), a medida de probabilidade aplicada a eventos.",
    usage: "A probabilidade baseada em teoria da medida escreve \\mathbb{P}(A) para a probabilidade do evento A, com axiomas como \\mathbb{P}(\\Omega) = 1. O estilo de quadro separa a medida de um P simples que poderia nomear uma matriz, um polinômio ou uma partição. Com as fontes padrão, \\mathbb funciona apenas com letras maiúsculas, e entradas minúsculas produzem glifos errados. Combine-o com \\mathbb{E} e um Var reto para um estilo consistente. Um espaço de probabilidade é a tripla (\\Omega, \\mathcal{F}, \\mathbb{P}), com F caligráfico para a sigma-álgebra. Alguns autores usam \\Pr, um operador reto predefinido.",
  },
  "probability-of-a": {
    name: "Probabilidade de A",
    meaning: "Probabilidade do evento A, escrita com um P maiúsculo itálico comum.",
    usage: "Textos introdutórios escrevem P(A) para a chance de A ocorrer, com 0 \\le P(A) \\le 1 e a regra do complementar P(A^c) = 1 - P(A). O P itálico simples serve quando nada mais no documento usa essa letra; caso contrário, \\Pr(A), um operador reto predefinido, ou \\mathbb{P}(A) evitam o conflito. Para argumentos grandes, deixe os parênteses crescerem: P\\left(\\bigcup_i A_i\\right). Digitar Pr(A) sem barra invertida dá P e r em itálico, como duas variáveis multiplicadas. A probabilidade condicional põe \\mid dentro dos parênteses, P(A \\mid B), em vez de uma barra vertical simples.",
  },
  "expectation": {
    name: "Valor esperado",
    meaning: "Valor esperado de uma variável aleatória X, escrito com um E em negrito de quadro.",
    usage: "O valor esperado é a média de X ponderada pela sua distribuição, \\mathbb{E}[X] = \\sum_x x\\,p(x) ou \\int x f(x)\\,dx. Artigos de aprendizado de máquina o usam em toda parte, muitas vezes com um subscrito que indica a distribuição: \\mathbb{E}_{x \\sim p}[\\ell(x)]. Os colchetes são convencionais, e \\left[ \\right] ou \\bigl[ \\bigr] ajudam quando o argumento contém frações. O E de quadro distingue o operador de uma energia E ou de um conjunto de arestas E. A linearidade, \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y], vale mesmo sem independência, e por isso ele é usado tão livremente.",
  },
  "expectation-e": {
    name: "Valor esperado (E)",
    meaning: "Valor esperado de X com um E itálico simples, a média da sua distribuição.",
    usage: "Muitos livros de estatística escrevem E[X] ou E(X) para o valor esperado, com a identidade da variância \\operatorname{Var}(X) = E[X^2] - (E[X])^2 como exemplo clássico. Um E itálico pode colidir com outros significados, como energia ou um evento chamado E, e por isso \\mathbb{E} ou um \\mathrm{E} reto são comuns em artigos de pesquisa. Se optar pelo reto, defina \\DeclareMathOperator{\\E}{E} para que o espaçamento e a fonte fiquem uniformes em todo lugar. A esperança condicional segue o mesmo estilo, E[X \\mid Y]. Qualquer que seja a forma escolhida, use-a de forma consistente do início ao fim.",
  },
  "variance": {
    name: "Variância",
    meaning: "Variância de X, o desvio quadrático esperado em relação à média, com um rótulo reto.",
    usage: "As identidades usuais são \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 e \\text{Var}(aX + b) = a^2\\text{Var}(X). \\text{Var} fica bem na maioria dos lugares, mas dentro do texto itálico de um teorema o rótulo também fica itálico, porque \\text copia a fonte ao redor. \\operatorname{Var} ou um \\DeclareMathOperator{\\Var}{Var} no preâmbulo é mais robusto e tem o espaçamento correto. Alguns autores escrevem \\mathbb{V}, \\sigma^2 ou \\mathrm{Var}. Para variáveis independentes, as variâncias se somam: \\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y), enquanto no caso geral se soma o dobro da covariância.",
  },
  "covariance": {
    name: "Covariância",
    meaning: "Covariância de X e Y, que mede como as duas variáveis aleatórias variam em conjunto.",
    usage: "Definida por \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y], ela está na base da correlação \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) e das matrizes de covariância, em geral escritas \\Sigma. Variáveis independentes têm covariância zero, embora a recíproca falhe em geral. Assim como no caso de Var, \\operatorname{Cov} ou um operador declarado dá um resultado mais robusto que \\text{Cov}, que pega o itálico em enunciados de teoremas. Acrescente um espaço fino depois da vírgula, (X,\\,Y), se os argumentos parecerem apertados. Para um vetor aleatório, \\operatorname{Cov}(\\mathbf{X}) denota a matriz de covariância completa. Um valor positivo significa que as variáveis tendem a se mover no mesmo sentido.",
  },
  "normal-distribution": {
    name: "Distribuição normal",
    meaning: "Distribuição normal (gaussiana) com média mi e variância sigma ao quadrado.",
    usage: "Escreva X \\sim \\mathcal{N}(\\mu, \\sigma^2) para afirmar que X tem distribuição normal; o segundo parâmetro é a variância, não o desvio-padrão, uma fonte frequente de confusão ao ler documentação de software. A forma multivariada é \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), com uma matriz de covariância. \\mathcal dá o N caligráfico e funciona apenas com letras maiúsculas. A densidade \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)} costuma vir em seguida numa fórmula destacada. A normal padrão é \\mathcal{N}(0, 1), e sua função de distribuição acumulada costuma ser escrita \\Phi.",
  },
  "independence-symbol-double-perp": {
    name: "Símbolo de independência (duplo perp)",
    meaning: "Dois sinais \\perp sobrepostos com espaços negativos, o símbolo montado à mão usual para a independência estatística.",
    usage: "Probabilistas escrevem X \\perp\\!\\!\\!\\perp Y para variáveis aleatórias independentes e X \\perp\\!\\!\\!\\perp Y \\mid Z para independência condicional, notação popularizada pelos modelos gráficos e pela inferência causal. Três espaços finos negativos \\! puxam o segundo \\perp quase sobre o primeiro, criando um T invertido de haste dupla. Como é montado à mão, sua aparência exata varia um pouco entre fontes; defina uma macro como \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}} para que ele também receba espaçamento de relação. Alguns textos usam um único \\perp para independência, mas ele colide com a ortogonalidade.",
  },
  "conditional": {
    name: "Barra condicional",
    meaning: "Barra vertical com espaçamento de relação, lida como «dado», «tal que» ou «divide».",
    usage: "Ao contrário de uma | simples, \\mid acrescenta espaço dos dois lados, exatamente o que precisam a probabilidade condicional P(A \\mid B), a notação de conjunto por compreensão \\{x \\mid x > 0\\} e a divisibilidade 3 \\mid 12. Use | ou \\vert para valores absolutos, onde não se quer espaço extra, e \\lvert ... \\rvert quando a barra delimita algo. Na notação de conjuntos com conteúdo alto, \\middle| entre \\left\\{ e \\right\\} faz a barra crescer junto. Sua negação é \\nmid, para «não divide». Muitos autores usam dois-pontos na notação de conjuntos, o que evita confusão quando a divisibilidade também aparece.",
  },
  "given": {
    name: "Probabilidade condicional (dado)",
    meaning: "Probabilidade condicional de A dado que o evento B já ocorreu.",
    usage: "Definida por P(A \\mid B) = P(A \\cap B)/P(B) para P(B) > 0, ela é a peça básica do teorema de Bayes. Use sempre \\mid em vez de |: a barra simples não recebe espaço em volta e a expressão fica apertada. Para argumentos altos, escreva P\\left(A \\,\\middle|\\, B\\right) para que a barra acompanhe os parênteses. Encadeamentos de condições, P(A \\mid B, C), usam uma vírgula depois da barra, e não uma segunda barra. Na notação de verossimilhança, p(x \\mid \\theta) segue a mesma convenção, e alguns estatísticos usam ponto e vírgula, p(x; \\theta), quando \\theta é um parâmetro fixo e não uma variável aleatória.",
  },
  "chi-squared": {
    name: "Qui-quadrado",
    meaning: "Qui-quadrado: a letra grega qui ao quadrado, que nomeia uma distribuição e uma estatística de teste.",
    usage: "A estatística de Pearson \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} compara contagens observadas e esperadas, e \\chi^2_k denota a distribuição com k graus de liberdade. Note que \\chi é a letra grega qui; não digite um x, que se parece um pouco mas é outro glifo e fica de outro jeito em relação à linha de base. Para colocar tanto os graus de liberdade quanto o quadrado, escreva \\chi^2_{k} ou \\chi_{k}^{2}; o LaTeX os empilha da mesma forma nos dois casos. Nas seções de resultados, relate os testes como \\chi^2(2) = 6.1, p = 0.047, seguindo o guia de estilo da sua área.",
  },
  "binomial-coefficient": {
    name: "Coeficiente binomial",
    meaning: "Coeficiente binomial n escolhe k, o número de subconjuntos de k elementos de um conjunto de n elementos.",
    usage: "Ele aparece no teorema binomial (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}, na regra de Pascal e na distribuição binomial P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}. \\binom se ajusta ao estilo atual; force a forma grande com \\dbinom no meio do texto ou a pequena com \\tbinom em fórmulas destacadas. A sintaxe antiga {n \\choose k} ainda funciona no estilo do TeX puro, mas é desaconselhada em documentos LaTeX. Alguns textos escrevem C(n,k) ou um nCk prefixado; o empilhamento entre parênteses é o padrão na escrita científica.",
  },
  "factorial": {
    name: "Fatorial",
    meaning: "Fatorial de n, o produto de todos os inteiros positivos até n.",
    usage: "Digitar n! não exige comando: o ponto de exclamação sai diretamente no modo matemático, com 0! = 1 por convenção. Fatoriais estão por toda a combinatória e a análise, de \\binom{n}{k} = \\frac{n!}{k!(n-k)!} aos coeficientes de Taylor \\frac{f^{(n)}(a)}{n!}. Cuidado com o espaçamento em produtos como n!\\,m!, onde um espaço fino evita que os sinais encostem na letra seguinte, e coloque argumentos compostos entre parênteses, (n+1)!. Não confunda o caractere com \\!, que é um espaço fino negativo. Notações relacionadas incluem o duplo fatorial n!! e a aproximação de Stirling n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n.",
  },
};

export default text;
