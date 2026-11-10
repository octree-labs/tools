import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  "alpha": {
    name: "Alfa",
    meaning: "Alfa minúsculo, nome padrão para ângulos, níveis de significância, taxas de aprendizado e coeficientes.",
    usage: "Em estatística, \\alpha é o nível de significância de um teste, como em \\alpha = 0.05, e o parâmetro de forma das distribuições Beta e Gama. Físicos o usam para a constante de estrutura fina \\alpha \\approx 1/137 e para partículas alfa. A geometria o atribui a ângulos, muitas vezes ao lado de \\beta e \\gamma. Não existe comando \\Alpha, porque o alfa maiúsculo é idêntico ao A latino; escreva A ou \\mathrm{A}. Tome cuidado para não confundir \\alpha com o a latino ou com o sinal de proporcionalidade \\propto em fontes de estilo manuscrito.",
    example: "P(\\text{rejeitar } H_0 \\mid H_0 \\text{ verdadeira}) = \\alpha",
  },
  "beta": {
    name: "Beta",
    meaning: "Beta minúsculo, padrão para coeficientes de regressão, ângulos e o segundo parâmetro de uma distribuição.",
    usage: "Modelos de regressão escrevem y = \\beta_0 + \\beta_1 x + \\varepsilon, e \\hat{\\beta} marca os coeficientes estimados. Em testes de hipóteses, \\beta é a taxa de erro do tipo II, então o poder é 1 - \\beta. A física o usa para v/c na relatividade e para a temperatura inversa \\beta = 1/(k_B T). Em finanças, o beta de uma ação é medido em relação ao mercado. Não existe comando \\Beta, já que o beta maiúsculo se parece com o B latino. O s agudo alemão, ß, é outro caractere, escrito \\ss, e não deve substituir \\beta.",
  },
  "gamma": {
    name: "Gama",
    meaning: "Gama minúsculo, usado para a constante de Euler-Mascheroni, o fator de Lorentz e fatores de desconto.",
    usage: "\\gamma é o fator de Lorentz \\gamma = 1/\\sqrt{1 - v^2/c^2} na relatividade especial e a constante de Euler-Mascheroni \\gamma \\approx 0.5772 em análise. O aprendizado por reforço o usa como fator de desconto em \\sum_t \\gamma^t r_t, e a física o usa para raios gama e fótons. Em geometria, muitas vezes nomeia o terceiro ângulo de um triângulo, depois de \\alpha e \\beta, e em análise complexa \\gamma é uma curva ou contorno. Note que o maiúsculo \\Gamma, que é a função gama, é um comando separado; não escreva \\Gamma para a constante.",
  },
  "gamma-upper": {
    name: "Gama maiúsculo",
    meaning: "Gama maiúsculo, mais conhecido como a função gama Γ(z), que estende o fatorial.",
    usage: "\\Gamma(n) = (n-1)! para inteiros positivos, e \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt em geral. Ele também escreve os símbolos de Christoffel \\Gamma^k_{ij} em geometria diferencial, a distribuição Gama e um contexto de tipagem \\Gamma \\vdash e : \\tau em teoria dos tipos. Letras gregas maiúsculas são retas por padrão no LaTeX; para uma versão itálica use \\varGamma. Especialistas em teoria dos grafos às vezes usam \\Gamma(v) para a vizinhança de um vértice. Não o confunda com a letra latina L girada nem com \\gamma, a constante minúscula.",
  },
  "delta": {
    name: "Delta",
    meaning: "Delta minúsculo, usado para quantidades pequenas, a função delta de Dirac e o delta de Kronecker.",
    usage: "A análise o combina com épsilon nas definições de limite e continuidade, como em |x - a| < \\delta. O delta de Dirac \\delta(x) satisfaz \\int f(x)\\delta(x - a)\\,dx = f(a), e o delta de Kronecker \\delta_{ij} vale 1 quando i = j e 0 caso contrário. O cálculo das variações escreve \\delta S para uma variação, e a química usa \\delta+ e \\delta- para cargas parciais. Ele difere de \\partial, o sinal curvo da derivada parcial, e do maiúsculo \\Delta, usado para variações finitas.",
  },
  "delta-upper": {
    name: "Delta maiúsculo",
    meaning: "Delta maiúsculo, usado para a variação finita de uma grandeza, o laplaciano e discriminantes.",
    usage: "A física e a química escrevem \\Delta x para uma variação de posição e \\Delta H para a variação de entalpia, como em \\Delta G = \\Delta H - T\\Delta S. Em análise, \\Delta é o operador de Laplace \\Delta u = \\nabla^2 u, e em álgebra é o discriminante \\Delta = b^2 - 4ac. Geômetras o usam para um triângulo, embora \\triangle seja um símbolo separado, vazado, mais adequado para isso. Letras gregas maiúsculas são retas; use \\varDelta para uma versão itálica. Não confunda \\Delta com \\nabla, que é o mesmo triângulo invertido.",
  },
  "epsilon": {
    name: "Épsilon",
    meaning: "Épsilon minúsculo lunado ϵ, usado para quantidades positivas pequenas e termos de erro.",
    usage: "\\epsilon imprime a forma lunada ϵ, enquanto \\varepsilon dá a forma aberta e curva ε que muitos leitores associam ao épsilon manuscrito. Analistas usam qualquer uma para um número arbitrariamente pequeno em \\forall \\epsilon > 0, mas mantenha uma única forma ao longo do artigo. Muitos autores reservam \\epsilon para quantidades pequenas e usam \\varepsilon para termos de erro ou ruído. Não confunda nenhuma delas com o sinal de pertinência \\in, que se parece com ϵ mas é uma relação com espaçamento diferente. A física também usa \\epsilon_0 para a permissividade do vácuo.",
  },
  "epsilon-variant": {
    name: "Épsilon (variante)",
    meaning: "Variante do épsilon minúsculo ε, a forma aberta e curva muitas vezes preferida para termos de erro e números pequenos.",
    usage: "\\varepsilon produz a forma arredondada ε, mais próxima do épsilon manuscrito do que o lunado \\epsilon. A estatística escreve o termo de ruído de uma regressão como \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2), e muitos livros de análise preferem \\varepsilon nas demonstrações épsilon-delta. A física usa \\varepsilon_0 para a permissividade do vácuo e \\varepsilon_{ijk} para o símbolo de Levi-Civita. Como as duas formas se misturam facilmente por engano, considere redefinir uma delas no preâmbulo para digitar um único comando. Evite usá-lo no lugar do sinal de pertinência \\in.",
  },
  "zeta": {
    name: "Zeta",
    meaning: "Zeta minúsculo, mais conhecido pela função zeta de Riemann e pelo coeficiente de amortecimento.",
    usage: "A função zeta de Riemann \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} é o uso emblemático, com o resultado do problema de Basileia \\zeta(2) = \\pi^2/6. Engenheiros usam \\zeta como coeficiente de amortecimento de um sistema de segunda ordem, como em \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0. A análise complexa o usa como variável complexa muda, e a teoria dos números para raízes da unidade \\zeta_n = e^{2\\pi i/n}. Não existe comando \\Zeta, porque o zeta maiúsculo é igual ao Z latino. Sua forma manuscrita é fácil de confundir com \\xi, então verifique qual letra a fonte pretende.",
  },
  "eta": {
    name: "Eta",
    meaning: "Eta minúsculo, usado para taxas de aprendizado, rendimento, viscosidade e a métrica de Minkowski.",
    usage: "Em aprendizado de máquina, \\eta é a taxa de aprendizado convencional em atualizações como w \\leftarrow w - \\eta \\nabla L(w). A termodinâmica escreve o rendimento como \\eta = W/Q_h, a dinâmica dos fluidos o usa para a viscosidade dinâmica, e a relatividade escreve a métrica de Minkowski \\eta_{\\mu\\nu}. A estatística às vezes o usa para o preditor linear \\eta = X\\beta de um modelo linear generalizado. O eta maiúsculo se parece com o H latino, então não existe comando \\Eta. Não confunda \\eta com o n latino em slides com fonte sem serifa, onde a perna descendente pode ser difícil de ver.",
  },
  "theta": {
    name: "Teta",
    meaning: "Teta minúsculo, o nome usual para ângulos e para parâmetros de modelos em estatística e aprendizado de máquina.",
    usage: "A trigonometria e as coordenadas polares usam \\theta para ângulos, como em (r\\cos\\theta, r\\sin\\theta). A estatística e o aprendizado de máquina o usam para vetores de parâmetros, com \\hat{\\theta} para um estimador e \\theta^* para o ótimo. Limites de complexidade Big-Theta usam o maiúsculo \\Theta, não \\theta. A variante \\vartheta é uma forma cursiva usada ocasionalmente para um segundo ângulo ou na física. Ao escrever um estimador, \\hat{\\theta} centraliza melhor o chapéu do que \\widehat{\\theta}, que é feito para argumentos mais largos. Na notação bayesiana, \\theta também nomeia a quantidade desconhecida na posteriori p(\\theta \\mid x).",
  },
  "theta-upper": {
    name: "Teta maiúsculo",
    meaning: "Teta maiúsculo, padrão para limites assintóticos justos e espaços de parâmetros.",
    usage: "A análise de algoritmos escreve \\Theta(n \\log n) para um limite que vale tanto por cima quanto por baixo, ao lado de O e \\Omega. A estatística usa \\Theta para um espaço de parâmetros, como em \\theta \\in \\Theta. A física o usa para a função degrau de Heaviside \\Theta(x) e, em alguns textos, para a temperatura. Letras gregas maiúsculas são retas no LaTeX; \\varTheta dá uma forma itálica se o estilo pedir. Não confunda \\Theta com o glifo do conjunto vazio nem com o algarismo 0 cortado por uma barra.",
  },
  "iota": {
    name: "Iota",
    meaning: "Iota minúsculo, uma letra estreita sem pingo usada para aplicações de inclusão e notação de índices.",
    usage: "\\iota costuma nomear uma aplicação de inclusão ou mergulho, como em \\iota : A \\hookrightarrow X, e o produto interior \\iota_X \\omega em geometria diferencial. APL e algumas linguagens funcionais usam iota para um gerador de índices, o que aparece em textos de ciência da computação. Como ele lembra um i sem pingo, garanta que não seja confundido com \\imath, o i sem pingo usado sob acentos. Não existe comando \\Iota; o iota maiúsculo se parece com o I latino. Ele é raro o bastante para que uma definição de uma linha na primeira vez que for usado ajude o leitor.",
  },
  "kappa": {
    name: "Capa",
    meaning: "Capa minúsculo, usado para curvatura, números de condição e o kappa de Cohen.",
    usage: "A geometria diferencial escreve a curvatura de uma curva como \\kappa = |\\gamma''(s)|, e a análise numérica usa \\kappa(A) = \\|A\\|\\|A^{-1}\\| para o número de condição de uma matriz. A estatística tem o \\kappa de Cohen para a concordância entre avaliadores, e a física o usa para a condutividade térmica ou a constante dielétrica. A variante \\varkappa dá outro glifo, preferido por alguns autores. Não existe comando \\Kappa, porque o capa maiúsculo é idêntico ao K latino. Não troque \\kappa pelo k latino, já que muitas fórmulas usam os dois.",
  },
  "lambda": {
    name: "Lambda",
    meaning: "Lambda minúsculo, usado para autovalores, comprimentos de onda, taxas e intensidade de regularização.",
    usage: "A álgebra linear escreve Av = \\lambda v para um autovalor e um autovetor. A física usa \\lambda para o comprimento de onda em c = \\lambda f, a probabilidade o usa para a taxa de uma distribuição de Poisson ou exponencial, e a otimização o usa para multiplicadores de Lagrange e para o peso da penalidade em ridge ou lasso, \\lambda\\|w\\|^2. A ciência da computação escreve funções anônimas com o cálculo lambda, \\lambda x.\\, x + 1. Seu maiúsculo \\Lambda é um comando separado, com outros usos. Cronogramas de taxa de aprendizado e a suavização exponencial também tomam \\lambda emprestado para fatores de decaimento.",
  },
  "lambda-upper": {
    name: "Lambda maiúsculo",
    meaning: "Lambda maiúsculo, comum para matrizes diagonais de autovalores e para a constante cosmológica.",
    usage: "A decomposição espectral A = Q\\Lambda Q^{-1} usa \\Lambda para a matriz diagonal de autovalores. A cosmologia escreve a constante cosmológica como \\Lambda, e o modelo padrão da cosmologia se compõe \\Lambda\\text{CDM}. A física de partículas o usa para o bárion Lambda, e a teoria dos reticulados ou a teoria dos números podem usar \\Lambda para um reticulado ou para a função de von Mangoldt \\Lambda(n). O grego maiúsculo é reto no LaTeX; use \\varLambda para uma forma itálica. Não o confunda com o «e» lógico \\wedge, um glifo diferente com espaçamento de operador.",
  },
  "mu": {
    name: "Mi",
    meaning: "Mi minúsculo, padrão para a média, medidas, coeficientes de atrito e o prefixo micro.",
    usage: "A probabilidade escreve a média como \\mu = E[X], de modo que uma distribuição normal é \\mathcal{N}(\\mu, \\sigma^2). A teoria da medida usa \\mu para uma medida, e a física o usa para o coeficiente de atrito, a permeabilidade magnética \\mu_0 e a massa reduzida. Como prefixo de unidade em \\mu m ou \\mu s, ele sai em itálico matemático, enquanto as normas tipográficas pedem um sinal de micro reto, e envolvê-lo em \\mathrm não muda a forma de uma letra grega. A otimização usa \\mu para parâmetros de barreira em métodos de pontos interiores.",
  },
  "nu": {
    name: "Ni",
    meaning: "Ni minúsculo, usado para frequência, graus de liberdade e viscosidade cinemática.",
    usage: "A física escreve a energia do fóton como E = h\\nu, em que \\nu é a frequência, e a dinâmica dos fluidos usa \\nu para a viscosidade cinemática. A estatística usa \\nu para os graus de liberdade da distribuição t de Student, e a física de partículas escreve neutrinos como \\nu_e, \\nu_\\mu. A relatividade usa índices gregos \\mu\\nu para componentes de tensores, como em g_{\\mu\\nu}. Em muitas fontes, \\nu se parece muito com o v latino, então evite usar as duas letras na mesma fórmula. Não existe comando \\Nu; o ni maiúsculo é o N latino.",
  },
  "xi": {
    name: "Csi",
    meaning: "Csi minúsculo, uma letra sinuosa usada para variáveis aleatórias, variáveis mudas e amortecimento.",
    usage: "Textos de probabilidade muitas vezes usam \\xi para uma variável aleatória ou um termo de ruído, e a análise o usa para um ponto intermediário, como no teorema do valor médio f(b) - f(a) = f'(\\xi)(b - a). A análise de Fourier escreve variáveis de frequência como \\xi em \\hat{f}(\\xi). Alguns textos de engenharia usam \\xi para o coeficiente de amortecimento em vez de \\zeta. Como \\xi e \\zeta são difíceis de distinguir à mão, verifique qual letra a fonte pretende. Sua forma maiúscula \\Xi é um comando separado.",
  },
  "xi-upper": {
    name: "Csi maiúsculo",
    meaning: "Csi maiúsculo, uma letra de três barras usada para o bárion Xi e algumas funções especiais.",
    usage: "\\Xi é relativamente raro em matemática. Físicos de partículas o usam para os bárions Xi, escritos \\Xi^0 e \\Xi^-, e às vezes ele nomeia a função xi de Riemann \\Xi(t) na teoria analítica dos números. A mecânica estatística ocasionalmente escreve a função de partição grande canônica como \\Xi. Como as demais letras gregas maiúsculas no LaTeX, ele é reto; \\varXi dá a forma itálica. Não o confunda com o sinal de equivalência \\equiv, que tem três barras de mesmo comprimento e espaçamento de relação.",
  },
  "pi": {
    name: "Pi",
    meaning: "Pi minúsculo, a constante do círculo 3,14159…, também usado para permutações e políticas.",
    usage: "\\pi é a razão entre o comprimento de uma circunferência e seu diâmetro e aparece em A = \\pi r^2, e^{i\\pi} + 1 = 0 e em ângulos em radianos como \\pi/2. O aprendizado por reforço usa \\pi para uma política \\pi(a \\mid s), a combinatória o usa para uma permutação, e a teoria dos números escreve \\pi(x) para a função de contagem de primos. A variante \\varpi é outro glifo. Quando pi é uma constante, alguns guias de estilo preferem uma forma reta, mas o LaTeX padrão dá um \\pi itálico. Não use o operador grande \\prod no lugar de \\pi, nem o contrário.",
  },
  "pi-upper": {
    name: "Pi maiúsculo",
    meaning: "Pi maiúsculo, uma letra comum usada para projeções, lucro e pressão osmótica.",
    usage: "\\Pi é uma letra de tamanho fixo, não o operador de produto; para produtos sobre um índice use \\prod, que se ajusta e posiciona os limites. Como letra, \\Pi nomeia aplicações de projeção, a função lucro em economia, a pressão osmótica e o cálculo pi em ciência da computação. A teoria dos tipos escreve tipos de funções dependentes como \\Pi_{x:A} B(x). A teoria da complexidade usa \\Pi_k para níveis da hierarquia polinomial. Letras gregas maiúsculas são retas por padrão, e \\varPi dá uma variante itálica se necessário.",
  },
  "rho": {
    name: "Rô",
    meaning: "Rô minúsculo, usado para densidade, coeficientes de correlação e densidade de carga.",
    usage: "A física usa \\rho para a massa específica, \\rho = m/V, e para a densidade de carga nas equações de Maxwell \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0. A estatística escreve a correlação de Pearson como \\rho_{XY} e a correlação de postos de Spearman como \\rho. A teoria das representações usa \\rho para uma representação, e a mecânica quântica o usa para uma matriz densidade. A variante \\varrho tem uma cauda curva que alguns autores usam para separar dois significados. Não confunda \\rho com o p latino, que se parece com ele em muitas fontes.",
  },
  "sigma": {
    name: "Sigma",
    meaning: "Sigma minúsculo: o desvio-padrão, funções de ativação e a sigma-álgebra.",
    usage: "A estatística escreve o desvio-padrão como \\sigma e a variância como \\sigma^2. O aprendizado de máquina usa \\sigma(x) = 1/(1 + e^{-x}) para a sigmoide logística e \\sigma para uma função de ativação genérica. A teoria da medida fala de \\sigma-álgebras, a física usa \\sigma para seções de choque, condutividade e matrizes de Pauli \\sigma_x, e a álgebra linear usa \\sigma_i para valores singulares. A variante de sigma final \\varsigma se parece com um s latino e é raramente usada em matemática. Não use o maiúsculo \\Sigma para somatórios; para isso existe \\sum.",
  },
  "sigma-upper": {
    name: "Sigma maiúsculo",
    meaning: "Sigma maiúsculo como letra, usado principalmente para matrizes de covariância e alfabetos.",
    usage: "Em estatística, \\Sigma denota uma matriz de covariância, como em \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), e a SVD escreve A = U\\Sigma V^\\top. A teoria das linguagens formais usa \\Sigma para um alfabeto e \\Sigma^* para todas as cadeias sobre ele. Para somatórios, use \\sum: \\Sigma é uma letra comum de tamanho fixo, que não cresce em fórmulas destacadas nem leva limites. A teoria da complexidade usa \\Sigma_k^p para a hierarquia polinomial. Letras gregas maiúsculas são retas; \\varSigma é a variante itálica.",
  },
  "tau": {
    name: "Tau",
    meaning: "Tau minúsculo, usado para constantes de tempo, torque, tempo próprio e a correlação de postos de Kendall.",
    usage: "A física escreve o torque como \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, uma constante de tempo em e^{-t/\\tau} e o tempo próprio \\tau na relatividade. A estatística tem o \\tau de Kendall, e alguns autores usam \\tau = 2\\pi como constante do círculo. A teoria dos números usa \\tau(n) para o número de divisores, e as formas modulares usam \\tau para um ponto do semiplano superior. A teoria dos tipos costuma escrever tipos como \\tau e \\sigma. Não existe comando \\Tau, já que o tau maiúsculo é igual ao T latino. Em algumas fontes \\tau lembra um t pequeno, então escolha nomes distintos para variáveis próximas.",
  },
  "upsilon": {
    name: "Ípsilon",
    meaning: "Ípsilon minúsculo, uma letra raramente usada que se parece muito com o u ou o v latinos.",
    usage: "O \\upsilon minúsculo é incomum em matemática, em grande parte porque é facilmente confundido com u e com \\nu. Ele aparece na física de partículas, para o méson Upsilon, em geral escrito em maiúscula, e ocasionalmente como velocidade ou variável de índice genérica. Se precisar de uma nova variável, uma letra menos ambígua costuma ser melhor escolha. Quando o usar, defina-o explicitamente. O \\upsilon do LaTeX é itálico como as demais letras gregas minúsculas, enquanto o maiúsculo \\Upsilon tem seu próprio comando.",
  },
  "upsilon-upper": {
    name: "Ípsilon maiúsculo",
    meaning: "Ípsilon maiúsculo, mais conhecido pelo méson Upsilon na física de partículas.",
    usage: "\\Upsilon denota a família de mésons do bottomônio, \\Upsilon(1S), \\Upsilon(2S), na física de partículas. Em matemática é raro, às vezes nomeando uma função ou um conjunto quando outras letras já estão ocupadas. Ao contrário do alfa ou do beta maiúsculos, o ípsilon maiúsculo tem uma forma própria no Computer Modern, com braços curvos, então não é apenas um Y latino e tem seu próprio comando. Como as demais letras gregas maiúsculas, é reto; \\varUpsilon dá a forma itálica. Atenção à legibilidade em slides, onde pode parecer um Y.",
  },
  "phi": {
    name: "Fi",
    meaning: "Fi minúsculo, usado para ângulos, a razão áurea, a função totiente de Euler e mapas de atributos.",
    usage: "\\phi dá a forma fechada, com traço, enquanto \\varphi dá a forma aberta, em laço; muitos autores escolhem \\varphi para funções e mantêm \\phi para ângulos. A teoria dos números escreve a função totiente de Euler como \\varphi(n) ou \\phi(n), a razão áurea é \\phi = (1 + \\sqrt{5})/2, e as coordenadas esféricas usam \\phi para um ângulo. O aprendizado de máquina usa \\phi(x) para um mapa de atributos em métodos de kernel, e a física o usa para potenciais escalares e funções de onda. Não confunda \\phi com \\emptyset nem com o Ø escandinavo.",
  },
  "phi-upper": {
    name: "Fi maiúsculo",
    meaning: "Fi maiúsculo, usado para a função de distribuição acumulada da normal padrão, o fluxo magnético e potenciais.",
    usage: "A estatística escreve a função de distribuição acumulada da normal padrão como \\Phi(z), com o minúsculo \\phi(z) para a densidade. A física usa \\Phi_B para o fluxo magnético e \\Phi para o potencial elétrico, enquanto a engenharia o usa para fluxo em geral. Em álgebra linear e otimização, \\Phi pode nomear uma matriz de projeto formada por funções de base. O grego maiúsculo é reto no LaTeX; \\varPhi dá a variante itálica. Não confunda \\Phi com \\emptyset nem com o \\oslash circulado. Sua inversa \\Phi^{-1} dá os quantis da normal, como z_{0.975} \\approx 1.96.",
  },
  "chi": {
    name: "Qui",
    meaning: "Qui minúsculo, usado para a distribuição qui-quadrado, funções características e susceptibilidade.",
    usage: "A estatística qui-quadrado \\chi^2 = \\sum (O_i - E_i)^2/E_i é seu uso mais conhecido, junto com \\chi^2_k para a distribuição com k graus de liberdade. A teoria dos conjuntos e a probabilidade escrevem a função indicadora ou característica de um conjunto como \\chi_A. A topologia usa \\chi(M) para a característica de Euler, a teoria dos grafos usa \\chi(G) para o número cromático, e a física usa \\chi para a susceptibilidade magnética. Note que \\chi desce abaixo da linha de base, então verifique a posição dos subscritos. Não o confunda com o x latino nem com o operador \\times.",
  },
  "psi": {
    name: "Psi",
    meaning: "Psi minúsculo, a letra convencional para uma função de onda quântica e para a função digama.",
    usage: "A mecânica quântica escreve funções de onda como \\psi(x, t) e estados como |\\psi\\rangle na notação de Dirac, com a equação de Schrödinger i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi. As funções especiais usam \\psi(x) = \\Gamma'(x)/\\Gamma(x) para a função digama. A dinâmica dos fluidos usa \\psi para a função de corrente, e a análise de wavelets usa \\psi para uma wavelet-mãe. Na notação bra-ket, \\langle \\psi | \\phi \\rangle usa \\langle e \\rangle, não os sinais de menor e maior. O maiúsculo \\Psi é um comando separado. A normalização exige \\int |\\psi|^2\\,dx = 1.",
  },
  "psi-upper": {
    name: "Psi maiúsculo",
    meaning: "Psi maiúsculo, muitas vezes uma função de onda de muitos corpos ou um estado na mecânica quântica.",
    usage: "A física usa \\Psi para uma função de onda total ou de muitas partículas e reserva \\psi para estados de uma partícula, como na equação de Schrödinger dependente do tempo para \\Psi(\\mathbf{r}, t). A física de partículas escreve o méson J/\\psi em minúscula, mas \\Psi é usado para alguns estados do charmônio. Em matemática, pode nomear uma função ou um funtor quando outras letras já estão ocupadas. Letras gregas maiúsculas são retas; \\varPsi dá uma versão itálica. A psicologia também usa o símbolo como emblema, mas esse uso raramente aparece em fórmulas.",
  },
  "omega": {
    name: "Ômega",
    meaning: "Ômega minúsculo, usado para frequência angular, resultados amostrais e o primeiro ordinal infinito.",
    usage: "A física escreve a frequência angular como \\omega = 2\\pi f, de modo que um oscilador harmônico é x(t) = A\\cos(\\omega t + \\varphi). A probabilidade usa \\omega \\in \\Omega para um resultado no espaço amostral, e a teoria dos conjuntos usa \\omega para o primeiro ordinal infinito. A teoria da complexidade escreve o ômega minúsculo \\omega(n) para limites inferiores estritos, e a geometria diferencial usa \\omega para formas diferenciais. A teoria dos números tem \\omega(n), o número de fatores primos distintos. Cuidado para não confundir \\omega com o w latino em anotações manuscritas.",
  },
  "omega-upper": {
    name: "Ômega maiúsculo",
    meaning: "Ômega maiúsculo, usado para a unidade ohm, espaços amostrais e limites inferiores assintóticos.",
    usage: "Como unidade, \\Omega é o ohm, então um resistor é 10\\,\\mathrm{k}\\Omega; separe o número da unidade com um espaço fino. A probabilidade escreve o espaço amostral como \\Omega na tripla (\\Omega, \\mathcal{F}, P). A análise de algoritmos usa \\Omega(n \\log n) para um limite inferior, ao lado de O e \\Theta. A análise costuma escrever um domínio aberto como \\Omega \\subset \\mathbb{R}^n. Letras gregas maiúsculas são retas, e \\varOmega dá uma variante itálica. Não confunda \\Omega com o mho, um ômega invertido usado antigamente para o siemens.",
  },
};

export default text;
