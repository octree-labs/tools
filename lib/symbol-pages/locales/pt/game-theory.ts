import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/game-theory/<slug>. */
const text: SymbolPageTranslations = {
  "strategy": {
    name: "Estratégia",
    meaning: "Estratégia do jogador i: um plano de ação completo, escolhido no conjunto de estratégias S_i desse jogador.",
    usage: "Num jogo na forma normal, cada jogador escolhe s_i \\in S_i, e a escolha conjunta é um perfil s = (s_i, s_{-i}), em que s_{-i} reúne as estratégias de todos os demais. Em jogos na forma extensiva, uma estratégia pura especifica uma ação em cada conjunto de informação, mesmo nos que nunca são alcançados. O subscrito identifica o jogador, então use sobrescritos ou linhas, s_i', s_i^*, para estratégias alternativas do mesmo jogador. Escreva s_{-i} com chaves, pois s_-i coloca apenas o sinal de menos no subscrito.",
  },
  "strategy-set": {
    name: "Conjunto de estratégias",
    meaning: "Conjunto de estratégias do jogador i: todas as estratégias puras disponíveis para esse jogador.",
    usage: "O espaço de todos os perfis é o produto cartesiano S = S_1 \\times \\cdots \\times S_n = \\prod_i S_i, e S_{-i} = \\prod_{j \\ne i} S_j. Conjuntos S_i finitos dão jogos matriciais; subconjuntos convexos compactos de \\mathbb{R}^k aparecem na competição de Cournot e em outros jogos contínuos. As estratégias mistas vivem em \\Delta(S_i). Use maiúsculas para conjuntos de estratégias e minúsculas para estratégias. Em jogos cooperativos, S costuma designar uma coalizão, então evite misturar os dois usos no mesmo artigo.",
  },
  "strategy-profile": {
    name: "Perfil de estratégias",
    meaning: "Perfil de estratégias: uma lista com uma estratégia para cada um dos n jogadores do jogo.",
    usage: "Os payoffs são avaliados em perfis completos, u_i(s), e a análise de desvios divide um perfil em (s_i, s_{-i}). \\ldots coloca as reticências na linha de base, o correto entre vírgulas; \\cdots as centraliza, o que convém a somas como s_1 + \\cdots + s_n. Com o amsmath, o simples \\dots escolhe automaticamente conforme o contexto. Alguns textos escrevem perfis em negrito, \\mathbf{s}, para distingui-los da estratégia s_i de um único jogador. O perfil em que i muda para s_i' enquanto todos os outros mantêm sua estratégia é escrito (s_i', s_{-i}). A ordem dos jogadores fixa a tupla, então declare-a uma vez.",
  },
  "payoff-function": {
    name: "Função de payoff",
    meaning: "Função de payoff (utilidade) do jogador i, que atribui um número real a cada perfil de estratégias s.",
    usage: "Formalmente, u_i: S \\to \\mathbb{R}, e um jogo na forma normal é a tripla (N, (S_i), (u_i)). As estratégias mistas a estendem por meio da esperança, u_i(\\sigma) = \\sum_s \\sigma(s)\\, u_i(s). Desvios unilaterais são escritos u_i(s_i', s_{-i}). Algumas áreas usam \\pi_i ou v_i para os payoffs; em jogos cooperativos, v já denota a função característica, então u_i é a escolha mais segura nesse caso. Os payoffs só precisam ser utilidades de von Neumann-Morgenstern, de modo que transformações afins positivas não alteram os equilíbrios. Para dois jogadores, os payoffs costumam ser apresentados como uma bimatriz.",
  },
  "expected-payoff": {
    name: "Payoff esperado",
    meaning: "Payoff esperado do jogador i, a média de u_i ponderada pelas probabilidades sob estratégias mistas ou lances do acaso.",
    usage: "Com estratégias mistas independentes, \\mathbb{E}_\\sigma[u_i] = \\sum_{s} \\prod_j \\sigma_j(s_j)\\, u_i(s), a quantidade que os jogadores maximizam num equilíbrio de Nash misto. Indique a distribuição no subscrito, \\mathbb{E}_{s \\sim \\sigma}[u_i(s)], quando ela não for óbvia. O \\mathbb{E} em blackboard é um estilo; \\operatorname{E} e \\mathrm{E} dão um E vertical e são comuns em econometria. Para argumentos altos, ajuste os colchetes com \\left[ \\right] ou \\bigl[ \\bigr]. Quando a natureza joga, como em jogos bayesianos, a esperança também percorre os tipos, \\mathbb{E}_\\theta[u_i(s(\\theta), \\theta)]. Reserve os colchetes para a esperança e os parênteses para argumentos de funções.",
  },
  "best-response": {
    name: "Melhor resposta",
    meaning: "Correspondência de melhor resposta: o conjunto das estratégias que maximizam o payoff do jogador i diante das estratégias s_{-i} dos demais.",
    usage: "Ela é definida como BR_i(s_{-i}) = \\arg\\max_{s_i \\in S_i} u_i(s_i, s_{-i}), e um perfil é um equilíbrio de Nash exatamente quando s_i^* \\in BR_i(s^*_{-i}) para todo i. Em geral ela tem valores em conjuntos, e é por isso que o teorema do ponto fixo de Kakutani, e não o de Brouwer, prova a existência de equilíbrios mistos. Digitado como BR_i, o TeX compõe B e R como duas variáveis em itálico multiplicadas; escreva \\mathrm{BR}_i ou \\operatorname{BR}_i para obter letras verticais. Use \\operatorname*{arg\\,max} para o maximizador. Em jogos finitos, sempre existem melhores respostas puras.",
  },
  "nash-equilibrium": {
    name: "Equilíbrio de Nash",
    meaning: "Perfil de equilíbrio de Nash: nenhum jogador pode ganhar ao se afastar unilateralmente de sua estratégia s_i^*.",
    usage: "A condição que o define é u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) para todo jogador i e toda alternativa s_i. Nash provou que todo jogo finito tem um equilíbrio em estratégias mistas, escrito \\sigma^*. Os equilíbrios não precisam ser únicos nem eficientes, como mostra o dilema do prisioneiro. O asterisco é um sobrescrito, então s_1^* e s^*_1 são renderizados da mesma forma; use ^* em vez de ^\\star, que é uma estrela de cinco pontas. Num jogo bimatricial, um equilíbrio puro é uma célula em que o payoff de cada jogador é máximo dada a escolha do outro.",
  },
  "mixed-strategy": {
    name: "Estratégia mista",
    meaning: "Estratégia mista do jogador i: uma distribuição de probabilidade sobre as estratégias puras desse jogador.",
    usage: "Uma estratégia mista é \\sigma_i \\in \\Delta(S_i), com \\sigma_i(s_i) a probabilidade de jogar s_i, e o suporte de uma estratégia de equilíbrio contém apenas melhores respostas. No jogo de cara ou coroa (matching pennies), o único equilíbrio tem cada jogador misturando 1/2-1/2. Jogos na forma extensiva distinguem estratégias mistas de estratégias comportamentais, muitas vezes escritas b_i ou \\beta_i. Não confunda \\sigma_i com um desvio-padrão em artigos que também fazem estatística; \\varsigma é outro sigma, a forma final da letra, e não serve de substituto. Sob memória perfeita, o teorema de Kuhn torna equivalentes as estratégias mistas e as comportamentais.",
  },
  "probability-simplex": {
    name: "Simplex de probabilidade",
    meaning: "Conjunto das distribuições de probabilidade sobre S_i, que, para um conjunto finito, é um simplex de probabilidade.",
    usage: "Se S_i tem k elementos, \\Delta(S_i) é o simplex de dimensão (k-1) \\{x \\in \\mathbb{R}^k : x_j \\ge 0, \\sum_j x_j = 1\\}. Estratégias mistas, crenças e equilíbrios correlacionados vivem todos em conjuntos dessa forma. O \\Delta maiúsculo é vertical por padrão; \\varDelta dá uma versão em itálico, se o seu estilo exigir. Não o confunda com \\triangle, um triângulo geométrico, nem com \\nabla, o símbolo invertido usado para gradientes. Para duas estratégias puras, ele é simplesmente o intervalo [0, 1] das probabilidades atribuídas à primeira.",
  },
  "dominant-strategy": {
    name: "Estratégia dominante",
    meaning: "Estratégia dominante do jogador i: uma estratégia que é melhor resposta independentemente do que os outros jogadores façam.",
    usage: "Dominância estrita significa u_i(s_i^d, s_{-i}) > u_i(s_i, s_{-i}) para toda outra s_i e todo s_{-i}; no dilema do prisioneiro, delatar é estritamente dominante. Lançar o valor verdadeiro num leilão de segundo preço é fracamente dominante. O sobrescrito d é um rótulo, não um índice, então muitos autores o compõem em tipo vertical, s_i^{\\mathrm{d}}, para evitar que seja lido como variável. Colocar ^d antes ou depois de _i produz o mesmo resultado empilhado. Quando todo jogador tem uma estratégia dominante, o perfil resultante é um equilíbrio em estratégias dominantes e, portanto, um equilíbrio de Nash.",
  },
  "dominated-strategy": {
    name: "Estratégia dominada",
    meaning: "Relação de dominância: s_i \\prec s'_i indica que a estratégia s_i é dominada por s'_i, que sempre se sai pelo menos tão bem.",
    usage: "Estratégias estritamente dominadas nunca são jogadas por jogadores racionais, e sua eliminação iterada é um procedimento de solução padrão. \\prec é uma relação com o espaçamento adequado; para dominância fraca use \\preceq, e para o sentido inverso \\succ ou \\succeq. Alguns textos escrevem a relação com símbolos indexados pelo jogador, como \\prec_i. s'_i e s_i' são renderizados da mesma forma, porque a linha se junta à pilha do subscrito. As convenções de sentido variam, e alguns autores escrevem s'_i \\succ s_i para a mesma afirmação, então defina a sua. Uma estratégia dominada por uma estratégia mista também pode ser eliminada.",
  },
  "pareto-optimal": {
    name: "Ótimo de Pareto",
    meaning: "Resultado ótimo de Pareto: nenhum outro perfil melhora a situação de algum jogador sem piorar a de outro.",
    usage: "Um perfil s^{PO} é ótimo de Pareto se não existe s com u_i(s) \\ge u_i(s^{PO}) para todo i e desigualdade estrita para algum i. O dilema do prisioneiro mostra um equilíbrio de Nash que não é ótimo de Pareto. Escrito s^{PO}, o TeX compõe P e O como duas variáveis em itálico; um rótulo pede tipo vertical, s^{\\mathrm{PO}}, o que também evita que PO seja lido como produto. A mesma dica vale para rótulos como s^{\\mathrm{NE}}. A otimalidade de Pareto nada diz sobre justiça; ela apenas exclui melhorias inequívocas.",
  },
  "minimax": {
    name: "Operador minimax",
    meaning: "Operador minimax: minimizar em j o máximo em i, o valor de pior caso que um jogador minimizador consegue garantir.",
    usage: "Num jogo matricial de soma zero com payoff a_{ij} para o jogador das linhas, \\min_j \\max_i a_{ij} é a garantia do jogador das colunas e \\max_i \\min_j a_{ij} a do jogador das linhas; esta nunca excede aquela. O teorema minimax de von Neumann afirma que as duas coincidem em estratégias mistas. No estilo de destaque, os índices ficam embaixo; em linha, aparecem como subscritos, então acrescente \\limits se quiser que fiquem embaixo também no texto. Para mais espaço entre os operadores, insira \\, ou use \\min_{j}\\,\\max_{i}.",
  },
  "zero-sum": {
    name: "Jogo de soma zero",
    meaning: "Condição de soma zero: os payoffs dos dois jogadores sempre se anulam, de modo que o ganho de um é exatamente a perda do outro.",
    usage: "Um jogo assim é descrito inteiramente por uma única matriz A, com u_1 = x^\\top A y e u_2 = -x^\\top A y para estratégias mistas x e y. Jogos de soma constante, u_1 + u_2 = c, são estrategicamente equivalentes. O valor v = \\max_x \\min_y x^\\top A y pode ser calculado por programação linear. Para n jogadores, escreva \\sum_{i} u_i(s) = 0 para todos os perfis s. Use x^\\top ou x^T para a transposta, de forma consistente. O xadrez e o pôquer heads-up são exemplos clássicos.",
  },
  "cooperative-value": {
    name: "Função característica",
    meaning: "Função característica de um jogo cooperativo: o valor total que uma coalizão S consegue garantir por conta própria.",
    usage: "Um jogo com utilidade transferível é um par (N, v) com v: 2^N \\to \\mathbb{R} e v(\\emptyset) = 0. A superaditividade, v(S \\cup T) \\ge v(S) + v(T) para coalizões disjuntas, faz valer a pena formar a grande coalizão. O núcleo é o conjunto das alocações x com \\sum_{i \\in S} x_i \\ge v(S) para todo S. \\emptyset produz um círculo cortado por uma barra; \\varnothing dá a forma mais arredondada e moderna. Aqui S é uma coalizão, não um conjunto de estratégias, então deixe isso explícito.",
  },
  "shapley-value": {
    name: "Valor de Shapley",
    meaning: "Valor de Shapley: a parcela justa de v(N) que cabe ao jogador i, sua contribuição marginal média sobre todas as ordenações.",
    usage: "A fórmula é \\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!\\,(n-|S|-1)!}{n!}\\,(v(S \\cup \\{i\\}) - v(S)). Ele é a única alocação que satisfaz eficiência, simetria, a propriedade do jogador nulo e aditividade. O aprendizado de máquina o usa para atribuição de importância às variáveis, como no SHAP. Escolha entre \\phi e \\varphi deliberadamente; elas têm aparências bem diferentes. Dentro da diferença de conjuntos, escape as chaves como \\{i\\} para que sejam impressas. O cálculo exato soma sobre todas as 2^{n-1} coalizões para cada jogador, então aproximações por amostragem são comuns na prática. Num jogo simétrico, cada jogador recebe v(N)/n.",
  },
  "subgame-perfect": {
    name: "Equilíbrio perfeito em subjogos",
    meaning: "Equilíbrio perfeito em subjogos (SPE): um equilíbrio de Nash cuja restrição a cada subjogo também é um equilíbrio de Nash.",
    usage: "Selten introduziu o conceito para descartar ameaças não críveis, e em jogos finitos com informação perfeita a indução retroativa encontra o SPE. Digitado como SPE no modo matemático, as três letras viram variáveis em itálico multiplicadas, com kerning ruim; escreva \\mathrm{SPE} ou \\text{SPE} nas fórmulas e texto simples na prosa. Os conceitos de solução relacionados são escritos da mesma forma, \\mathrm{NE}, \\mathrm{PBE} para o equilíbrio bayesiano perfeito. Todo SPE é um equilíbrio de Nash, mas não o contrário. A barganha sequencial e os jogos repetidos dependem muito dele.",
  },
  "information-set": {
    name: "Conjunto de informação",
    meaning: "Conjunto de informação num jogo na forma extensiva: nós de decisão que um jogador não consegue distinguir quando chega sua vez.",
    usage: "Cada conjunto de informação h pertence a um único jogador, oferece as mesmas ações A(h) em todos os seus nós e captura informação imperfeita, como lances ocultos. As estratégias comportamentais atribuem uma distribuição \\sigma_i(h) \\in \\Delta(A(h)) a cada conjunto de informação do jogador. As convenções variam: muitos textos usam I ou I_i para conjuntos de informação e reservam h para histórias, então defina sua notação. Informação perfeita significa que cada h é um único nó. A memória perfeita exige que um jogador nunca esqueça lances ou informações anteriores.",
  },
  "action": {
    name: "Ação",
    meaning: "Ação do jogador i, uma escolha feita num único ponto de decisão, em oposição a uma estratégia completa.",
    usage: "Em jogos de uma rodada, ações e estratégias puras coincidem, então muitos textos escrevem perfis como a = (a_i, a_{-i}) com a_i \\in A_i. Em jogos extensivos e repetidos, as ações são lances locais, enquanto as estratégias associam ações a histórias ou conjuntos de informação. Artigos de aprendizado e de aprendizado por reforço multiagente usam a_i^t para a ação na rodada t. Acrescente linhas para alternativas, a_i', e chaves para o índice complementar, a_{-i}. Em jogos repetidos, uma história é uma sequência de perfis de ações, h^t = (a^0, \\ldots, a^{t-1}).",
  },
};

export default text;
