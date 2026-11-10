import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/special-functions/<slug>. */
const text: SymbolPageTranslations = {
  "gamma-function": {
    name: "Função gama",
    meaning: "Função gama, a extensão do fatorial aos números complexos, com Gamma(n) = (n-1)!.",
    usage: "Definida por \\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt para \\operatorname{Re} z > 0, ela satisfaz \\Gamma(z+1) = z\\Gamma(z) e \\Gamma(1/2) = \\sqrt{\\pi}. A fórmula de reflexão \\Gamma(z)\\Gamma(1-z) = \\pi/\\sin(\\pi z) e a aproximação de Stirling são ferramentas clássicas. \\Gamma compõe um gama maiúsculo reto, o estilo habitual; \\varGamma dá uma variante itálica. Ela aparece nas constantes de normalização das distribuições gama, beta, qui-quadrado e t de Student. Use \\, antes de dt na integral. Não confunda a função com \\gamma, a constante de Euler-Mascheroni.",
  },
  "beta-function": {
    name: "Função beta",
    meaning: "Função beta B(x, y), uma integral sobre [0, 1] intimamente ligada à função gama.",
    usage: "A função beta é B(x, y) = \\int_0^1 t^{x-1}(1-t)^{y-1}\\,dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)} e normaliza a distribuição beta na estatística bayesiana. A rigor, o símbolo é um beta grego maiúsculo, mas o LaTeX não tem o comando \\Beta, pois ele é idêntico ao B latino; portanto B está correto, e alguns autores escrevem \\mathrm{B} para marcá-lo como função. Ela é simétrica, B(x, y) = B(y, x). A versão incompleta é B(z; a, b), e a forma regularizada é I_z(a, b). Evite conflito com os números de Bell ou de Bernoulli B_n.",
  },
  "riemann-zeta-function": {
    name: "Função zeta de Riemann",
    meaning: "Função zeta de Riemann, definida para Re s > 1 pela soma da série de 1/n^s e estendida ao plano complexo.",
    usage: "\\zeta(s) = \\sum_{n=1}^\\infty n^{-s} liga a análise aos números primos por meio do produto de Euler \\prod_p (1 - p^{-s})^{-1}. Valores famosos incluem \\zeta(2) = \\pi^2/6 (o problema de Basileia) e \\zeta(-1) = -1/12 por continuação analítica. A hipótese de Riemann afirma que os zeros não triviais estão sobre \\operatorname{Re} s = 1/2. Use \\zeta, que pode se parecer com \\xi na escrita à mão, mas é distinto no impresso. Por convenção, a variável é s = \\sigma + it. A zeta de Hurwitz é \\zeta(s, a), e em física \\zeta aparece com frequência em integrais de Bose-Einstein.",
  },
  "error-function": {
    name: "Função erro",
    meaning: "Função erro: a integral normalizada da gaussiana e^{-t^2} de 0 a x, usada para probabilidades da distribuição normal.",
    usage: "A definição é \\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2}\\,dt, com limites \\pm 1 em \\pm\\infty. A função de distribuição acumulada da normal padrão é \\Phi(x) = \\frac{1}{2}\\big[1 + \\text{erf}(x/\\sqrt{2})\\big], e erf resolve a equação do calor para uma condição inicial em degrau. \\text{erf} é impresso em tipo reto, mas segue a fonte ao redor, então fica itálico dentro de teoremas; \\operatorname{erf}, ou um \\DeclareMathOperator no preâmbulo, é mais robusto e acrescenta o espaçamento correto. Ela é ímpar: \\text{erf}(-x) = -\\text{erf}(x). A inversa é \\text{erf}^{-1}, usada para calcular quantis da normal.",
  },
  "complementary-error": {
    name: "Função erro complementar",
    meaning: "Função erro complementar, 1 - erf(x): a integral normalizada da cauda gaussiana de x ao infinito.",
    usage: "\\text{erfc}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_x^\\infty e^{-t^2}\\,dt = 1 - \\text{erf}(x), e é a forma preferida para probabilidades de cauda pequenas, pois calcular 1 - \\text{erf}(x) numericamente perde precisão para x grande. Ela dá as taxas de erro de bit em comunicações, Q(x) = \\frac{1}{2}\\text{erfc}(x/\\sqrt{2}), e os perfis de difusão em transferência de calor. A versão escalonada \\text{erfcx}(x) = e^{x^2}\\text{erfc}(x) evita o subfluxo numérico. Como no caso de erf, \\operatorname{erfc} permanece reto em contextos itálicos e se espaça corretamente, por isso é a escolha mais segura. Para x grande, ela se comporta aproximadamente como e^{-x^2}/(x\\sqrt{\\pi}).",
  },
  "bessel-j": {
    name: "Função de Bessel J",
    meaning: "Função de Bessel de primeira espécie de ordem n, a solução da equação de Bessel que é finita na origem.",
    usage: "J_n resolve x^2 y'' + x y' + (x^2 - n^2) y = 0 e tem a série \\sum_m \\frac{(-1)^m}{m!\\,\\Gamma(m+n+1)} (x/2)^{2m+n}. Ela descreve membranas de tambor vibrantes, guias de onda cilíndricos e a difração por uma abertura circular, em que o padrão de Airy envolve J_1. Para ordem não inteira, escreva J_\\nu(x), com \\nu por convenção. A função geradora é e^{(x/2)(t - 1/t)} = \\sum_n J_n(x) t^n. Ordens compostas exigem chaves, J_{n+1}(x). Seus zeros costumam ser escritos j_{n,k} e determinam as frequências de ressonância de uma membrana circular.",
  },
  "bessel-y": {
    name: "Função de Bessel Y",
    meaning: "Função de Bessel de segunda espécie de ordem n, a solução da equação de Bessel singular na origem.",
    usage: "Y_n, também chamada de função de Weber ou de Neumann e escrita N_n em alguns textos de física, é a segunda solução independente da equação de Bessel, com Y_n(x) \\to -\\infty quando x \\to 0^+. Para \\nu não inteiro, Y_\\nu(x) = \\frac{J_\\nu(x)\\cos(\\nu\\pi) - J_{-\\nu}(x)}{\\sin(\\nu\\pi)}, e as ordens inteiras são definidas por um limite. Em problemas de contorno em um disco completo, o termo Y_n é descartado para garantir a regularidade no centro, mas é mantido em uma coroa circular. As funções de Hankel combinam as duas: H_n^{(1)} = J_n + iY_n.",
  },
  "modified-bessel-i": {
    name: "Função de Bessel modificada I",
    meaning: "Função de Bessel modificada de primeira espécie, uma solução da equação de Bessel modificada que cresce exponencialmente.",
    usage: "I_n resolve x^2 y'' + x y' - (x^2 + n^2) y = 0 e se relaciona com J_n por I_n(x) = i^{-n} J_n(ix). Ao contrário de J_n, não oscila; cresce como e^x/\\sqrt{2\\pi x}. Aparece na condução de calor em cilindros, na constante de normalização 2\\pi I_0(\\kappa) da distribuição de von Mises e na distribuição de Rice. Use \\nu para a ordem geral, I_\\nu(x). Não a confunda com a matriz identidade I_n nem com a medida de informação I(X; Y); o argumento entre parênteses geralmente desfaz a ambiguidade, mas uma definição ajuda.",
  },
  "modified-bessel-k": {
    name: "Função de Bessel modificada K",
    meaning: "Função de Bessel modificada de segunda espécie, a solução decrescente da equação de Bessel modificada.",
    usage: "K_n, às vezes chamada de função de Macdonald, decai como \\sqrt{\\pi/(2x)}\\,e^{-x} para x grande e diverge na origem. Forma par com I_n como as duas soluções independentes da equação de Bessel modificada. Aparece no núcleo de covariância de Matérn usado em processos gaussianos, no potencial de Yukawa em duas dimensões e nas constantes de normalização das distribuições gaussianas inversas generalizadas. Cuidado: K(k) também indica a integral elíptica completa e K_n o grafo completo, então especifique de qual K se trata quando as áreas se sobrepõem.",
  },
  "legendre-p": {
    name: "Polinômio de Legendre P",
    meaning: "Polinômio de Legendre de grau n, ortogonal em [-1, 1] com peso 1.",
    usage: "Os polinômios de Legendre começam com P_0 = 1, P_1 = x, P_2 = \\frac{1}{2}(3x^2 - 1) e seguem a fórmula de Rodrigues P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n. A ortogonalidade se escreve \\int_{-1}^1 P_m P_n\\,dx = \\frac{2}{2n+1}\\delta_{mn}. Eles aparecem em expansões multipolares, em harmônicos esféricos e nos nós da quadratura de Gauss-Legendre. As funções associadas de Legendre são escritas P_n^m(x) ou P_\\ell^m(\\cos\\theta). Os físicos costumam usar \\ell para o grau. Não confunda com o grafo caminho P_n nem com a probabilidade P; o argumento x geralmente indica o polinômio.",
  },
  "legendre-q": {
    name: "Função de Legendre Q",
    meaning: "Função de Legendre de segunda espécie, a segunda solução da equação de Legendre, singular em x = 1 e -1.",
    usage: "Q_n resolve a mesma equação que P_n, (1 - x^2) y'' - 2x y' + n(n+1) y = 0, mas não é um polinômio: por exemplo, Q_0(x) = \\frac{1}{2}\\ln\\frac{1+x}{1-x} e Q_1(x) = x Q_0(x) - 1. Por causa das singularidades logarítmicas em \\pm 1, costuma ser descartada em problemas na esfera completa e mantida apenas quando o domínio exclui os polos, como um cone ou a região exterior a um esferoide prolato. As versões associadas são Q_n^m(x). Use \\ln com \\frac para o logaritmo, e \\left( \\right) se o argumento ficar alto.",
  },
  "hermite-polynomial": {
    name: "Polinômio de Hermite",
    meaning: "Polinômio de Hermite de grau n, ortogonal na reta real com peso gaussiano.",
    usage: "Os polinômios de Hermite dos físicos seguem H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}, começando por 1, 2x, 4x^2 - 2, e dão as autofunções do oscilador harmônico quântico \\psi_n \\propto H_n(x) e^{-x^2/2}. Os probabilistas usam outra normalização, escrita He_n(x), com peso e^{-x^2/2}; as duas se relacionam por uma mudança de escala, então indique de qual família se trata. A recorrência é H_{n+1} = 2x H_n - 2n H_{n-1}. H também designa a entropia, o degrau de Heaviside e hamiltonianos, então uma breve definição ajuda os leitores.",
  },
  "laguerre-polynomial": {
    name: "Polinômio de Laguerre",
    meaning: "Polinômio de Laguerre de grau n, ortogonal em [0, ∞) com peso e^{-x}.",
    usage: "Os polinômios de Laguerre satisfazem a fórmula de Rodrigues L_n(x) = \\frac{e^x}{n!} \\frac{d^n}{dx^n}(e^{-x} x^n), começam com L_0 = 1 e L_1 = 1 - x e resolvem x y'' + (1 - x) y' + n y = 0. A forma generalizada L_n^{(\\alpha)}(x), com o sobrescrito entre parênteses, dá as funções de onda radiais do átomo de hidrogênio. Textos de física mais antigos usam outra normalização, que difere por um fator n!, então confira as fontes antes de misturar fórmulas. Eles também definem a quadratura de Gauss-Laguerre para integrais com peso e^{-x}. Evite confusão com um lagrangiano ou com uma função de perda L.",
  },
  "chebyshev-t": {
    name: "Polinômio de Chebyshev T",
    meaning: "Polinômio de Chebyshev de primeira espécie, definido por T_n(cos θ) = cos(nθ).",
    usage: "Os polinômios de Chebyshev T seguem T_0 = 1, T_1 = x e T_{n+1} = 2x T_n - T_{n-1}, o que dá T_2 = 2x^2 - 1. São ortogonais em [-1, 1] com peso 1/\\sqrt{1 - x^2} e, entre os polinômios mônicos de grau n, 2^{1-n} T_n tem o menor máximo nesse intervalo. Essa propriedade minimax fundamenta os nós de Chebyshev para interpolação, que evitam o fenômeno de Runge, e os métodos espectrais de Chebyshev. A letra T às vezes colide com temperatura, período ou transposição, então defina-a quando necessário; use ^\\top para transpostas, para manter tudo claro.",
  },
  "chebyshev-u": {
    name: "Polinômio de Chebyshev U",
    meaning: "Polinômio de Chebyshev de segunda espécie, com U_n(cos θ) sin θ = sin((n+1)θ).",
    usage: "Os polinômios U compartilham a recorrência U_{n+1} = 2x U_n - U_{n-1} com T_n, mas começam com U_0 = 1, U_1 = 2x. São ortogonais em [-1, 1] com peso \\sqrt{1 - x^2} e se relacionam com os de primeira espécie por T_n'(x) = n U_{n-1}(x). U_n aparece nos polinômios característicos de grafos caminho, em problemas de autovalores de matrizes de Toeplitz tridiagonais e na quadratura de Gauss-Chebyshev de segunda espécie. Escreva a identidade de definição com \\frac e \\sin como mostrado abaixo, usando \\theta em vez de t para seguir a convenção trigonométrica.",
  },
  "hypergeometric": {
    name: "Função hipergeométrica",
    meaning: "Função hipergeométrica de Gauss: a série de potências em z com coeficientes formados por símbolos de Pochhammer de a, b, c.",
    usage: "Ela é definida como {}_2F_1(a,b;c;z) = \\sum_{n \\geq 0} \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!} para |z| < 1 e se reduz a muitas funções elementares e especiais, por exemplo \\ln(1+z) = z\\,{}_2F_1(1,1;2;-z). O grupo vazio {} dá ao subscrito à esquerda 2 algo a que se prender, o truque padrão para prefixos; o comando \\prescript oferece um controle mais fino. Os pontos e vírgulas separam os parâmetros do numerador, os do denominador e o argumento. A forma geral {}_pF_q segue o mesmo padrão, e o teorema de Gauss dá seu valor em z = 1.",
  },
  "digamma": {
    name: "Função digama",
    meaning: "Função digama, a derivada logarítmica da função gama: Gamma'(x)/Gamma(x).",
    usage: "\\psi(x) = \\frac{d}{dx}\\ln\\Gamma(x) satisfaz \\psi(x+1) = \\psi(x) + 1/x, de modo que \\psi(n+1) = H_n - \\gamma, com H_n o número harmônico e \\gamma a constante de Euler-Mascheroni, e \\psi(1) = -\\gamma. Ela aparece na inferência variacional bayesiana para distribuições de Dirichlet, em que \\mathbb{E}[\\ln \\theta_k] = \\psi(\\alpha_k) - \\psi(\\sum_j \\alpha_j). O \\psi grego é o padrão; alguns textos escrevem F(x). Não use \\digamma, que imprime a letra grega arcaica digama e não a função. Na mecânica quântica, \\psi é a função de onda, então defina-a.",
  },
  "polygamma": {
    name: "Função poligama",
    meaning: "Função poligama de ordem n: a derivada de ordem n+1 de ln Gamma(x), ou a derivada de ordem n da digama.",
    usage: "\\psi^{(n)}(x) = \\frac{d^{n+1}}{dx^{n+1}} \\ln \\Gamma(x), com \\psi^{(0)} = \\psi a digama e \\psi^{(1)} a função trigama. Valores notáveis: \\psi^{(1)}(1) = \\pi^2/6 e, em geral, \\psi^{(n)}(1) = (-1)^{n+1} n!\\,\\zeta(n+1). A trigama dá a informação de Fisher e termos de variância para modelos gama e de Dirichlet. O sobrescrito entre parênteses marca a ordem da derivada, não uma potência; escrever apenas ^n seria lido como exponenciação. As chaves em volta de (n) são necessárias para que todo o grupo seja elevado. Muitos autores escrevem a trigama simplesmente como \\psi'(x), o que é igualmente padrão.",
  },
  "elliptic-integral-k": {
    name: "Integral elíptica K",
    meaning: "Integral elíptica completa de primeira espécie, a integral de 1/√(1 - k^2 sin^2 θ) sobre um quarto de período.",
    usage: "K(k) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - k^2 \\sin^2\\theta}}, com K(0) = \\pi/2 e divergência logarítmica quando k \\to 1. Ela dá o período exato de um pêndulo, T = 4\\sqrt{L/g}\\,K(\\sin(\\theta_0/2)). A maior armadilha é a convenção do argumento: alguns textos e programas usam o parâmetro m = k^2, escrevendo K(m), então K(0.5) pode significar dois números diferentes. Indique se usa o módulo k ou o parâmetro m. A versão incompleta é F(\\phi, k). A média aritmético-geométrica dá uma fórmula rápida: K(k) = \\frac{\\pi}{2\\,\\mathrm{AGM}(1, \\sqrt{1-k^2})}.",
  },
  "elliptic-integral-e": {
    name: "Integral elíptica E",
    meaning: "Integral elíptica completa de segunda espécie, a integral de √(1 - k^2 sin^2 θ) sobre um quarto de período.",
    usage: "E(k) = \\int_0^{\\pi/2} \\sqrt{1 - k^2 \\sin^2\\theta}\\,d\\theta, com E(0) = \\pi/2 e E(1) = 1. O perímetro de uma elipse de semieixo maior a e excentricidade e é 4a\\,E(e), que não tem forma fechada elementar. A relação de Legendre a liga a K: E K' + E' K - K K' = \\pi/2, em que as linhas indicam o módulo complementar. Como no caso de K, verifique se uma fonte usa o módulo k ou o parâmetro m = k^2. A letra E sozinha conflita com energia, esperança e conjuntos de arestas, então defina-a cedo.",
  },
  "dirac-delta-function": {
    name: "Função delta de Dirac",
    meaning: "Delta de Dirac: uma distribuição nula fora de 0 e de integral 1, que seleciona f(0) sob uma integral.",
    usage: "Sua propriedade definidora é a identidade de filtragem \\int f(x)\\,\\delta(x - a)\\,dx = f(a). É uma distribuição, não uma função comum, e é a derivada do degrau de Heaviside, H'(x) = \\delta(x). Em processamento de sinais, modela um impulso; sua transformada de Fourier é 1. A mudança de escala obedece a \\delta(ax) = \\delta(x)/|a|. Não a confunda com o delta de Kronecker \\delta_{ij}, um símbolo discreto igual a 1 quando i = j. O \\delta minúsculo é distinto de \\Delta (laplaciano ou diferença) e de \\partial.",
  },
  "heaviside-step-function": {
    name: "Função degrau de Heaviside",
    meaning: "Função degrau de Heaviside: 0 para x negativo e 1 para x positivo, ligando-se na origem.",
    usage: "O degrau de Heaviside H(x) modela um sinal ligado no instante zero, e sua derivada no sentido das distribuições é o delta de Dirac: H'(x) = \\delta(x). O valor em 0 é uma convenção: comumente 1/2 em análise de Fourier, 1 em teoria de controle e às vezes deixado indefinido. Notações alternativas incluem \\theta(x) em física, u(t) em engenharia e a indicadora \\mathbf{1}_{x \\geq 0}. Defina-a com um ambiente cases, para maior clareza. Como H também designa a entropia, os polinômios de Hermite e hamiltonianos, uma breve definição no primeiro uso evita confusão para os leitores. Sua transformada de Laplace é 1/s.",
  },
};

export default text;
