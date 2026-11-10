import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "Combinação (nCr)",
    meaning: "Número de maneiras de escolher k elementos entre n sem levar em conta a ordem; lê-se combinação de n, k a k.",
    usage: "O valor é C(n, k) = \\frac{n!}{k!(n-k)!}, idêntico ao coeficiente binomial \\binom{n}{k}, que é a notação preferida na maior parte da matemática. O \\binom adapta seu tamanho ao contexto; \\dbinom força o tamanho de destaque e \\tbinom o tamanho de texto. Evite no LaTeX a sintaxe do TeX puro {n \\choose k}, contra a qual o amsmath adverte. Outras notações incluem nCr, {}^nC_k e C^k_n, esta última comum em textos franceses com os índices trocados, então verifique a convenção. A relação de Stifel, C(n, k) = C(n-1, k-1) + C(n-1, k), gera o triângulo de Pascal.",
  },
  "permutation-npr": {
    name: "Arranjo (nPr)",
    meaning: "Número de disposições ordenadas de k elementos escolhidos entre n elementos distintos, ou seja, o arranjo de n elementos tomados k a k.",
    usage: "Os arranjos contam seleções ordenadas: P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1), de modo que P(5, 2) = 20. O valor coincide com o fatorial decrescente (n)_k ou n^{\\underline{k}} e se relaciona com as combinações por P(n, k) = k!\\,C(n, k). Outras notações encontradas são nPr, {}^nP_k e A^k_n (arranjos), comum em textos franceses e chineses, além de A_{n,k} nos livros brasileiros. Como P(\\cdot) também denota probabilidade, o leitor pode interpretar mal P(n, k) num capítulo de probabilidade; usar (n)_k ou n^{\\underline{k}} evita isso. Use \\cdots entre os fatores de um produto.",
  },
  "multinomial": {
    name: "Coeficiente multinomial",
    meaning: "Coeficiente multinomial: número de maneiras de dividir n elementos em grupos de tamanhos k_1 a k_m, cuja soma é n.",
    usage: "O valor é n! / (k_1!\\,k_2!\\cdots k_m!), com k_1 + \\cdots + k_m = n, e fornece os coeficientes do teorema multinomial, (x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}. Ele conta os anagramas distintos de uma palavra com letras repetidas, por exemplo 11!/(4!\\,4!\\,2!\\,1!) para MISSISSIPPI. A construção reaproveita \\binom com uma lista separada por vírgulas na posição inferior; o binomial \\binom{n}{k} é o caso particular \\binom{n}{k, n-k}. Use \\ldots entre vírgulas, e não \\cdots.",
  },
  "falling-factorial": {
    name: "Fatorial decrescente",
    meaning: "Fatorial decrescente em notação combinatória: n(n-1)...(n-k+1), o produto de k fatores decrescentes.",
    usage: "(n)_k conta as funções injetoras de um conjunto com k elementos em um conjunto com n elementos e vale n!/(n-k)! para inteiros. Atenção: essa notação no estilo de Pochhammer é ambígua, pois em funções especiais (a)_n designa o fatorial crescente. A notação de Knuth, n^{\\underline{k}} para o decrescente e n^{\\overline{k}} para o crescente, elimina a ambiguidade e é usada em Concrete Mathematics; ela é digitada com \\underline e \\overline no expoente. Os fatoriais decrescentes se convertem em potências usuais por meio dos números de Stirling: x^n = \\sum_k S(n,k)(x)_k. Defina explicitamente sua notação no artigo.",
  },
  "rising-factorial": {
    name: "Fatorial crescente",
    meaning: "Fatorial crescente escrito com um expoente entre parênteses: n(n+1)...(n+k-1).",
    usage: "Essa notação, comum em combinatória e probabilidade, designa o fatorial crescente n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n). Ela é ambígua: em cálculo, f^{(k)} é a k-ésima derivada, e alguns autores usam x^{(k)} para o fatorial decrescente. O n^{\\overline{k}} de Knuth ou o símbolo de Pochhammer (n)_k das funções especiais são alternativas, embora este último conflite com o fatorial decrescente combinatório. Os parênteses devem ficar dentro das chaves do expoente, ^{(k)}. Os fatoriais crescentes contam as disposições ordenadas de k bolas em n tubos ordenados.",
  },
  "stirling-first-kind": {
    name: "Número de Stirling de primeira espécie",
    meaning: "Número de Stirling de primeira espécie sem sinal: permutações de n elementos com exatamente k ciclos, em notação de colchetes.",
    usage: "O \\genfrac recebe seis argumentos: delimitador esquerdo, delimitador direito, espessura do traço, estilo, numerador e denominador. Definir a espessura como 0pt remove o traço de fração, produzindo a notação de colchetes empilhados de Concrete Mathematics. Esses números satisfazem a recorrência {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1} e sua soma sobre k é n!. Em vez de repetir a chamada de seis argumentos, defina uma macro como \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}. O quarto argumento vazio faz o tamanho seguir o contexto; use 0 para o estilo de destaque ou 1 para o estilo de texto.",
  },
  "stirling-second-kind": {
    name: "Número de Stirling de segunda espécie",
    meaning: "Número de Stirling de segunda espécie: maneiras de particionar um conjunto de n elementos em k blocos não vazios, em notação de chaves.",
    usage: "Aqui o \\genfrac desenha as chaves escapadas \\{ e \\} como delimitadores, com traço de 0pt, produzindo a notação de chaves popularizada por Knuth. Esses números obedecem a S(n+1, k) = k\\,S(n, k) + S(n, k-1), sua soma sobre k é o número de Bell B_n e convertem potências em fatoriais decrescentes: x^n = \\sum_k {n \\brace k}(x)_k. Como as chaves precisam ser escapadas, a falta de uma barra invertida é o erro de compilação mais comum. Encapsule a notação numa macro como \\stirlingII{n}{k}. A notação alternativa S(n, k) é mais simples de digitar e comum em textos de ciência da computação.",
  },
  "bell-number": {
    name: "Número de Bell",
    meaning: "Número de Bell B_n: o número total de maneiras de particionar um conjunto de n elementos em blocos não vazios.",
    usage: "Os números de Bell começam por 1, 1, 2, 5, 15, 52, 203 e são iguais à soma dos números de Stirling de segunda espécie, B_n = \\sum_k S(n, k). Eles satisfazem B_{n+1} = \\sum_k \\binom{n}{k} B_k e a fórmula de Dobinski B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}. Um conflito de notação a observar: B_n também designa os números de Bernoulli, que aparecem na fórmula de Euler-Maclaurin e nos valores da função zeta, então analistas talvez precisem renomear um deles. As chaves são obrigatórias quando o índice é uma expressão, como em B_{n+1}. Eles são os momentos de uma distribuição de Poisson de média 1.",
  },
  "fibonacci": {
    name: "Número de Fibonacci",
    meaning: "Número de Fibonacci F_n, definido por F_0 = 0, F_1 = 1 e F_n = F_{n-1} + F_{n-2}.",
    usage: "Os números de Fibonacci começam por 0, 1, 1, 2, 3, 5, 8, 13 e têm a forma fechada F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}, a fórmula de Binet, em que \\varphi = (1+\\sqrt5)/2 é a razão áurea. Eles contam os ladrilhamentos de um tabuleiro 1 \\times n com quadrados e dominós (são F_{n+1} ladrilhamentos) e aparecem na análise do algoritmo de Euclides e dos heaps de Fibonacci. Alguns textos começam a indexação em F_1 = F_2 = 1, então indique seus valores iniciais. Use \\varphi para a razão áurea, como faz a maioria dos autores; \\phi é a variante reta. As chaves são necessárias em F_{n-1}.",
  },
  "partition": {
    name: "Função partição",
    meaning: "Função partição p(n): o número de maneiras de escrever n como soma de inteiros positivos, sem levar em conta a ordem.",
    usage: "Por exemplo, p(4) = 5, pois 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. A função geradora de Euler é \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}, e Hardy e Ramanujan obtiveram a assintótica p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}. As congruências de Ramanujan incluem p(5k+4) \\equiv 0 \\pmod 5. O p minúsculo conflita com a notação de densidade de probabilidade e com os números primos, então defina-o em contextos mistos. As versões restritas são escritas p_k(n) ou p(n, k), para partições em no máximo k partes.",
  },
  "derangement": {
    name: "Permutação caótica (desarranjo)",
    meaning: "Número de permutações caóticas (desarranjos) D_n: permutações de n elementos nas quais nenhum elemento permanece em sua posição original.",
    usage: "D_n conta as permutações sem pontos fixos e começa por 1, 0, 1, 2, 9, 44, 265. O princípio da inclusão-exclusão fornece D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}, então D_n é o inteiro mais próximo de n!/e, e a probabilidade de uma permutação aleatória ser caótica tende a 1/e. Entre as recorrências está D_n = (n-1)(D_{n-1} + D_{n-2}). O exemplo clássico é o problema dos chapéus trocados. O mesmo número também é escrito !n, o subfatorial; D_n é mais legível no texto corrido. Note que D_n também denomina o grupo diedral em álgebra, então esclareça se ambos aparecerem.",
  },
  "double-factorial": {
    name: "Fatorial duplo",
    meaning: "Fatorial duplo: o produto de todos os inteiros de n até 1 ou 2 que têm a mesma paridade de n.",
    usage: "Para n ímpar, n!! = n(n-2)\\cdots 3 \\cdot 1, logo 7!! = 105; para n par, o produto termina em 2, logo 8!! = 384. Não se trata de (n!)!, uma leitura equivocada frequente, então uma breve definição ajuda. Entre as identidades estão (2n)!! = 2^n n! e (2n-1)!! = \\frac{(2n)!}{2^n n!}, que conta os emparelhamentos perfeitos de 2n pontos e aparece nos momentos gaussianos, \\mathbb{E}[X^{2n}] = (2n-1)!! para uma normal padrão. No TeX, ! é um símbolo de fechamento, então n!! não precisa de espaçamento especial. Por convenção, 0!! = (-1)!! = 1.",
  },
  "subfactorial": {
    name: "Subfatorial",
    meaning: "Subfatorial de n, uma notação com ponto de exclamação prefixado para o número de permutações caóticas de n objetos.",
    usage: "!n é igual a D_n, o número de permutações sem pontos fixos: !4 = 9 e !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor para n \\geq 1. O ponto de exclamação prefixado é compacto, mas fácil de interpretar mal, sobretudo depois de uma variável, onde m!n parece m fatorial vezes n. Escrever D_n, ou acrescentar um agrupamento explícito, evita isso. No TeX, o ponto de exclamação pertence à classe de fechamento, então depois de uma relação binária como = ele é composto sem espaço extra, como se deseja. Alguns autores usam o ponto de exclamação invertido, n\\text{¡}, mas essa notação é rara.",
  },
  "pochhammer": {
    name: "Símbolo de Pochhammer",
    meaning: "Símbolo de Pochhammer: em funções especiais, o fatorial crescente a(a+1)...(a+n-1).",
    usage: "Na literatura de funções hipergeométricas e especiais, (a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a), com (a)_0 = 1. Ele é o componente básico da série {}_pF_q, por exemplo {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}. Os combinatoristas usam o mesmo (x)_n para o fatorial decrescente, o que faz disso um dos conflitos de notação mais notórios; o DLMF e a maioria das referências de funções especiais usam o sentido crescente. O a^{\\overline{n}} de Knuth não tem ambiguidade se o público for misto. Os parênteses aqui são comuns, dimensionados de acordo com o argumento.",
  },
};

export default text;
