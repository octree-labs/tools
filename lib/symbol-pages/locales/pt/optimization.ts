import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "Argmax com subscrito",
    meaning: "Argmax em x: o ponto x em que a função objetivo é máxima.",
    usage: "Em textos de otimização, o maximizador de f sobre um conjunto viável escreve-se x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x). Digitado como \\arg\\max_{x}, o subscrito se liga a \\max, de modo que no estilo de exibição o x aparece centralizado sob max, e não sob o arg max inteiro. \\operatorname*{arg\\,max}_{x} ou um operador declarado com asterisco o coloca sob o nome completo. No texto corrido, o subscrito fica embaixo à direita de qualquer forma. Como os máximos podem não ser únicos, x^* \\in \\arg\\max é tecnicamente mais preciso que a igualdade. Para maximizar em várias variáveis, liste-as: \\arg\\max_{x, y}.",
  },
  "argmin-subscript": {
    name: "Argmin com subscrito",
    meaning: "Argmin em x: o ponto x que minimiza a função objetivo.",
    usage: "Esta forma define a solução de um problema de minimização, como no operador proximal \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big). Como \\arg não aceita limites, o subscrito pertence a \\min, que o centraliza sob min apenas em modo de exibição; \\operatorname*{arg\\,min} corrige o posicionamento. As restrições podem ir no subscrito, \\arg\\min_{x \\in C}, ou, para várias linhas, dentro de \\substack. Distinga argmin, que devolve um ponto ou conjunto, de \\min, que devolve o valor; misturá-los é um erro comum em trabalhos de estudantes.",
  },
  "minimize": {
    name: "Minimização",
    meaning: "Mínimo em x: o menor valor que uma expressão assume quando x varia, escrito com x sob min.",
    usage: "\\min é um operador predefinido que aceita limites, então em modo de exibição \\min_{x} coloca x sob a palavra, enquanto no texto corrido ele aparece como subscrito à direita. Esta é a linha de abertura de um problema de otimização padrão: \\min_x f(x) sujeito a restrições. Quando o mínimo pode não ser atingido, como em conjuntos abertos, use \\inf. Para forçar o posicionamento de exibição no texto corrido, escreva \\min\\limits_{x}. Para condições de várias linhas sob min, use \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}. O que ele denota é um número, ao contrário de argmin, que devolve o minimizador.",
  },
  "maximize": {
    name: "Maximização",
    meaning: "Máximo em x: o maior valor que a expressão atinge quando x percorre seu domínio.",
    usage: "\\max_{x} funciona como \\min_{x}: o operador predefinido coloca os limites embaixo no estilo de exibição e ao lado no texto corrido. Usos típicos são a função dual, problemas minimax como \\min_G \\max_D no treinamento de GANs e a maximização da margem em SVMs. Quando o supremo pode não ser atingido, \\sup é o operador correto. Combinar operadores é comum, e o TeX lida bem com limites empilhados em \\min e \\max adjacentes. É possível mudar o posicionamento com \\limits ou \\nolimits e acrescentar \\, ou \\; antes do objetivo para dar respiro em expressões longas.",
  },
  "subject-to": {
    name: "Abreviatura s.t. (sujeito a)",
    meaning: "Abreviatura do inglês “subject to” (sujeito a), que introduz as restrições de um problema de otimização.",
    usage: "No enunciado de um problema, s.t. separa o objetivo das restrições: \\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0. Use \\text para que as letras fiquem retas e o ponto se mantenha, e cerque-o com \\quad dos dois lados, pois \\text não acrescenta espaçamento próprio. Muitos guias de estilo preferem a expressão completa (em português, \\text{sujeito a} ou a abreviatura s.a.), especialmente em formulações de exibição alinhadas com o ambiente align, em que as restrições se empilham nas linhas seguintes sob a primeira. Não digite s.t. diretamente em modo matemático; isso imprimiria s e t em itálico como variáveis, com um ponto.",
  },
  "constraint": {
    name: "Restrição de desigualdade",
    meaning: "Restrição de desigualdade genérica: a função g deve ser não positiva num ponto viável x.",
    usage: "Escrever as restrições de desigualdade na forma padrão g_i(x) \\leq 0 é a convenção em otimização convexa, então uma restrição como x_1 + x_2 \\geq 1 passa a ser 1 - x_1 - x_2 \\leq 0. \\leq tem o apelido curto \\le, e ambos dão o mesmo glifo; \\leqslant desenha um traço inclinado preferido em parte da tipografia europeia. Indexe várias restrições como g_i(x) \\leq 0 para i = 1, \\dots, m. Na análise KKT, cada desigualdade recebe um multiplicador \\lambda_i \\geq 0 com folga complementar \\lambda_i g_i(x) = 0. Na disposição do problema, alinhe-as com &.",
  },
  "equality-constraint": {
    name: "Restrição de igualdade",
    meaning: "Restrição de igualdade genérica: a função h deve se anular em qualquer ponto viável x.",
    usage: "As restrições de igualdade h_j(x) = 0 complementam as restrições de desigualdade g_i(x) \\leq 0 na forma padrão de um programa não linear. Em otimização convexa elas precisam ser afins, por isso costumam ser escritas Ax = b. No lagrangiano, cada uma recebe um multiplicador \\nu_j ou \\mu_j que, ao contrário dos multiplicadores de desigualdade, pode ter qualquer sinal. A letra h é convencional, mas colide com o tamanho do passo ou a entropia em algumas áreas; escolha letras que não entrem em conflito. Para várias restrições, indexe-as com j, para separá-las do índice de desigualdade i.",
  },
  "lagrangian": {
    name: "Lagrangiano",
    meaning: "Função lagrangiana, que combina um objetivo com suas restrições ponderadas pelos multiplicadores lambda.",
    usage: "O lagrangiano é \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x), e a função dual é seu ínfimo em x. Impor \\nabla_x \\mathcal{L} = 0 dá a condição de estacionariedade usada em problemas de cálculo com restrições e nas deduções de SVM. \\mathcal produz o L caligráfico e só funciona com letras maiúsculas. Como o mesmo \\mathcal{L} também denota funções de perda em aprendizado de máquina, artigos que misturam os dois às vezes escrevem L ou \\Lambda para um deles. Alguns livros usam a convenção de sinal oposta, f - \\lambda g, então declare a sua.",
  },
  "gradient": {
    name: "Gradiente",
    meaning: "Gradiente de f em x: o vetor das derivadas parciais de primeira ordem, que aponta na direção de maior crescimento.",
    usage: "O gradiente \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top move os métodos de primeira ordem, como o gradiente descendente, x_{k+1} = x_k - \\alpha \\nabla f(x_k), e sua anulação é a condição de otimalidade de primeira ordem em problemas sem restrições. \\nabla é o triângulo invertido, também chamado nabla. O mesmo operador dá o divergente, \\nabla \\cdot \\mathbf{F}, e o rotacional, \\nabla \\times \\mathbf{F}, no cálculo vetorial. Não o confunda com \\Delta, o triângulo em pé usado para o laplaciano ou para diferenças finitas. Acrescente um subscrito, \\nabla_x f, quando derivar só em relação a algumas variáveis.",
  },
  "hessian": {
    name: "Matriz hessiana",
    meaning: "Hessiana de f em x: a matriz das derivadas parciais de segunda ordem, que descreve a curvatura local.",
    usage: "Em otimização, \\nabla^2 f(x) é a hessiana, usada no método de Newton, x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k), e nas condições de segunda ordem: uma hessiana definida positiva num ponto estacionário indica um mínimo local estrito. Cuidado: em física e em EDPs, \\nabla^2 f significa o laplaciano, um escalar igual ao traço da hessiana, muitas vezes escrito \\Delta f. Deixe claro qual dos dois você quer dizer, ou use H_f ou \\nabla\\nabla^\\top f para a matriz. A convexidade de uma função duas vezes diferenciável equivale a \\nabla^2 f(x) \\succeq 0 em todo ponto.",
  },
  "optimal-value": {
    name: "Solução ótima",
    meaning: "x com asterisco sobrescrito: a solução ótima ou o minimizador de um problema de otimização.",
    usage: "O asterisco marca o ponto ótimo, então p^* = f(x^*) é o valor ótimo, e os ótimos duais escrevem-se \\lambda^*, \\nu^*. As taxas de convergência são enunciadas em termos de f(x_k) - f(x^*) ou \\|x_k - x^*\\|. ^* e ^\\ast produzem o mesmo asterisco; ^\\star dá uma estrela que evita confusão com conjugados complexos, adjuntos ou o fecho de Kleene, que também usam asterisco. Quando x também tem subscrito, x_k^* e x^*_k saem idênticos. Distinga x^* de \\hat{x}, que normalmente denota uma estimativa ou solução aproximada.",
  },
  "feasible-set": {
    name: "Conjunto viável",
    meaning: "X caligráfico, comumente usado para nomear o conjunto viável ou domínio em que uma variável de otimização varia.",
    usage: "Maiúsculas caligráficas nomeiam conjuntos em otimização e aprendizado: x \\in \\mathcal{X} para a região viável, \\mathcal{Y} para os rótulos, \\mathcal{D} para uma distribuição de dados, \\mathcal{H} para uma classe de hipóteses. \\mathcal só aceita letras maiúsculas; argumentos minúsculos dão glifos imprevisíveis. Se quiser uma letra cursiva mais ornamentada, \\mathscr oferece outro estilo, enquanto \\mathbb{X} dá o negrito de quadro-negro, mais usado para conjuntos numéricos. A projeção sobre o conjunto escreve-se \\Pi_{\\mathcal{X}}(y). Defina o conjunto explicitamente uma vez, por exemplo \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}.",
  },
  "kkt-conditions": {
    name: "Condições de Karush-Kuhn-Tucker (KKT)",
    meaning: "Condição de estacionariedade do sistema KKT: o gradiente do objetivo é equilibrado pelos gradientes ponderados das restrições.",
    usage: "Esta linha é a primeira das condições de Karush-Kuhn-Tucker; o conjunto completo acrescenta a viabilidade primal g(x) \\leq 0, a viabilidade dual \\lambda \\geq 0 e a folga complementar \\lambda g(x) = 0. Com várias restrições, ela se generaliza para \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0. Componha o sistema inteiro num ambiente cases ou aligned para facilitar a leitura. As convenções de sinal variam: se o lagrangiano for escrito f - \\lambda g, o mais vira menos, então ajuste-o à sua definição. Avaliar explicitamente em x^* evita ambiguidade.",
  },
  "positive-definite": {
    name: "Matriz definida positiva",
    meaning: "Condição de matriz definida positiva: A \\succ 0 significa x^T A x > 0 para todo vetor x não nulo.",
    usage: "Em análise matricial e programação semidefinida, \\succ expressa a ordem de Loewner, então A \\succ B significa que A - B é definida positiva. Uma hessiana \\nabla^2 f(x) \\succ 0 garante convexidade estrita, e uma matriz de covariância \\Sigma \\succ 0 é invertível. \\succ é um símbolo de relação, então recebe automaticamente espaçamento de relação. Evite usar > para matrizes, pois sugere comparação elemento a elemento. Entre os símbolos parecidos estão \\succcurlyeq, uma variante curva que alguns autores usam para o caso semidefinido, e \\gg, que significa muito maior que. A \\in \\mathbb{S}^n_{++} é a notação de conjunto equivalente.",
    example: "\\Sigma \\succ 0 \\implies \\Sigma^{-1} \\text{ existe}",
  },
  "positive-semidefinite": {
    name: "Matriz semidefinida positiva",
    meaning: "Condição semidefinida positiva: A \\succeq 0 significa x^T A x \\geq 0 para todo vetor x.",
    usage: "Restrições semidefinidas X \\succeq 0 definem programas semidefinidos, e a convexidade de uma função suave equivale a \\nabla^2 f(x) \\succeq 0. Matrizes de Gram e de covariância são sempre semidefinidas positivas. \\succeq desenha o sinal de sucede com um traço reto embaixo; \\succcurlyeq é uma variante de traço curvo que alguns textos de otimização preferem, então escolha uma e mantenha-a. A versão estrita é \\succ. O conjunto dessas matrizes costuma ser escrito \\mathbb{S}^n_+, e condições de complemento de Schur são uma forma comum de enunciar essas restrições em forma de blocos.",
    example: "\\min_{X} \\operatorname{tr}(CX) \\quad \\text{s.a.} \\quad X \\succeq 0",
  },
};

export default text;
