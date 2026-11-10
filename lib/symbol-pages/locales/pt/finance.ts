import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/finance/<slug>. */
const text: SymbolPageTranslations = {
  "dollar-sign": {
    name: "Cifrão",
    meaning: "Cifrão escapado: imprime um $ literal em vez de abrir ou fechar o modo matemático.",
    usage: "Um $ sem escape alterna o modo matemático no LaTeX, então preços precisam de \\$, como em \\$19.99. Ele funciona tanto no modo texto quanto no modo matemático, o que torna simples fórmulas como \\$100 \\times 1.05 = \\$105. Em ferramentas baseadas em Markdown e em renderizadores KaTeX vale o mesmo escape. Em tabelas cheias de valores monetários, o pacote siunitx pode alinhar os números pela vírgula decimal enquanto o símbolo fica no cabeçalho da coluna. Escrever USD evita ambiguidade quando várias moedas chamadas dólar, como o dólar canadense ou o australiano, aparecem no mesmo documento.",
  },
  "euro-sign": {
    name: "Símbolo do euro",
    meaning: "Símbolo da moeda euro inserido como caractere literal dentro de \\text, para preços e valores financeiros em euros.",
    usage: "Colar o caractere € dentro de \\text funciona quando o documento está em UTF-8 e a fonte tem o glifo, o que acontece na maioria das configurações modernas. Com o pdfLaTeX, \\texteuro é a forma em comando, e \\euro produz o desenho oficial, de geometria fixa. A posição do símbolo do euro varia conforme o país: na Alemanha e na França escreve-se 10 €, enquanto na Irlanda e nos Países Baixos ele costuma vir antes. Em tabelas, considere colocar os valores numa coluna cujo cabeçalho traga o símbolo, em vez de repeti-lo em cada célula. No XeLaTeX e no LuaLaTeX, o caractere vem diretamente da fonte escolhida.",
  },
  "pound-sterling-sign": {
    name: "Símbolo da libra esterlina",
    meaning: "Símbolo da libra esterlina como caractere literal em \\text, usado para valores em libras britânicas.",
    usage: "Digitar o caractere £ diretamente dentro de \\text funciona em documentos UTF-8. O LaTeX também tem o comando embutido \\pounds, que funciona em texto e no modo matemático, mas com as fontes Computer Modern padrão ele vem da fonte itálica e sai inclinado, o que surpreende muitos usuários; trocar a codificação da fonte produz um glifo vertical. Na convenção britânica, o símbolo precede o valor sem espaço, como em £1,500. O mesmo glifo serve para várias outras moedas chamadas libra. Em tabelas financeiras, alinhe pelo separador decimal e deixe o símbolo no cabeçalho para reduzir a poluição visual.",
  },
  "yen-sign": {
    name: "Símbolo do iene",
    meaning: "Símbolo do iene ou do yuan inserido como caractere literal dentro de \\text, para valores em ienes japoneses e yuans chineses.",
    usage: "O mesmo glifo serve tanto para o iene japonês quanto para o yuan renminbi chinês, e por isso os artigos costumam acrescentar JPY ou CNY para eliminar a ambiguidade. Digitar ¥ dentro de \\text funciona em documentos UTF-8 com uma fonte que contenha o caractere; \\textyen é a alternativa em comando no pdfLaTeX. Valores em ienes raramente têm casas decimais, já que a moeda não tem subdivisão no uso cotidiano, então \\text{¥}1{,}200 é o típico. Algumas fontes desenham o símbolo com um traço horizontal e outras com dois; ambas as formas são aceitas, mas mantenha a mesma fonte ao longo do documento.",
  },
  "indian-rupee-sign": {
    name: "Símbolo da rupia indiana",
    meaning: "Símbolo da rupia indiana como caractere literal em \\text, usado para valores em rupias indianas.",
    usage: "O símbolo da rupia foi adotado pela Índia em 2010, então muitas fontes mais antigas não o têm, inclusive a Computer Modern padrão; com o pdfLaTeX ele frequentemente não imprime nada. Compilar com XeLaTeX ou LuaLaTeX e uma fonte que inclua o glifo, como a Noto Sans ou uma fonte de sistema recente, é o caminho mais confiável. Se o glifo não estiver disponível, Rs. ou INR são alternativas textuais aceitas. A numeração indiana agrupa os dígitos em lakhs e crores, por exemplo 1,00,000; use {,} no modo matemático para que a vírgula não acrescente um espaço indesejado depois dela.",
  },
  "bitcoin-sign": {
    name: "Símbolo do bitcoin",
    meaning: "Símbolo do bitcoin inserido como caractere literal dentro de \\text, para valores denominados em bitcoin.",
    usage: "O glifo do bitcoin é mais recente que a maioria das fontes, então o pdfLaTeX com fontes padrão geralmente não consegue imprimi-lo; o XeLaTeX ou o LuaLaTeX com uma fonte que o inclua, ou uma fonte de ícones, é o caminho prático. Muitos artigos de finanças e economia simplesmente escrevem BTC, que nunca dá problema de fonte, e usam sat para a menor unidade, sendo 1 BTC igual a 100,000,000 satoshis. Valores em bitcoin costumam ter até oito casas decimais, então o alinhamento decimal em tabelas importa mais do que o habitual. Confira o PDF com atenção, pois um glifo ausente muitas vezes falha em silêncio, deixando apenas um aviso no log.",
  },
  "percent-sign": {
    name: "Sinal de porcentagem",
    meaning: "Sinal de porcentagem escapado: imprime % em vez de iniciar um comentário do LaTeX.",
    usage: "No LaTeX, um % sem escape transforma o resto da linha em comentário, uma causa clássica de texto que desaparece, então toda porcentagem precisa de \\%. Ele funciona no modo texto e no modo matemático, como em uma taxa de juros de 5\\% ou r = 3.5\\%. O espaçamento varia conforme o estilo: o inglês costuma escrever 5% sem espaço, enquanto algumas convenções europeias e do SI inserem um espaço fino, 5\\,\\%. O siunitx trata isso de forma consistente se você compõe muitas grandezas. Ao discutir pontos percentuais, escreva p.p. ou pontos percentuais para distinguir um aumento de 4% para 5% de uma variação relativa de 1%.",
  },
  "per-mille-sign": {
    name: "Símbolo de por mil",
    meaning: "Símbolo de por mil, que indica partes por mil, inserido como caractere literal dentro de \\text.",
    usage: "O por mil expressa taxas em partes por mil, então 5‰ equivale a 0,5%. Ele aparece em tábuas de seguros e de mortalidade, na salinidade e em razões isotópicas como \\delta^{13}C na geoquímica, e nos limites de álcool no sangue de vários países. A forma em comando no pdfLaTeX é \\textperthousand; no modo matemático, envolva-o em \\text, como aqui. Não o confunda com o ponto-base, que corresponde a partes por dez mil e tem um glifo próprio raramente suportado. Se a fonte do leitor puder não ter o símbolo, escrever por mil ou partes por mil é uma alternativa sem ambiguidade.",
  },
  "basis-point": {
    name: "Ponto-base",
    meaning: "Abreviação de ponto-base: um centésimo de ponto percentual, usado para taxas de juros e spreads.",
    usage: "Um ponto-base vale 0,01%, então uma taxa que sobe de 4,25% para 4,50% variou 25 bp. Spreads de títulos, decisões de bancos centrais e taxas de fundos são cotados assim porque variações percentuais sobre taxas são ambíguas. Envolver bp em \\text o mantém vertical e impede que o TeX leia b e p como duas variáveis em itálico multiplicadas. Separe o número da unidade com um espaço fino, \\, como em 25\\,\\text{bp}. Alguns autores usam bps ou bips. Curiosamente, bp também é a unidade do próprio TeX para o big point do PostScript, 1/72 de polegada, mas o contexto evita a confusão.",
  },
  "npv": {
    name: "Valor presente líquido",
    meaning: "Valor presente líquido (VPL, NPV em inglês): a soma dos fluxos de caixa futuros descontados menos o investimento inicial.",
    usage: "O VPL é calculado como \\text{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}, em que C_0 normalmente é o desembolso inicial negativo e r a taxa de desconto. Um projeto é aceito quando NPV > 0. Envolver a sigla em \\text a mantém vertical e impede que o TeX a trate como N vezes P vezes V com espaçamento itálico. \\mathrm{NPV} dá a mesma aparência, mas ignora o estilo do texto ao redor, o que é mais seguro dentro de teoremas. Se você a usar como função, como em \\text{NPV}(r), \\operatorname{NPV} acrescenta o espaçamento adequado antes do parêntese.",
  },
  "irr": {
    name: "Taxa interna de retorno",
    meaning: "Taxa interna de retorno (TIR, IRR em inglês): a taxa de desconto na qual o valor presente líquido de um projeto é igual a zero.",
    usage: "A TIR é definida implicitamente por 0 = \\sum_{t=0}^{n} C_t / (1 + \\text{IRR})^t, então em geral não tem forma fechada e é resolvida numericamente. Um projeto é atraente quando sua TIR supera o custo de capital. Fluxos de caixa que mudam de sinal mais de uma vez podem gerar várias TIRs, uma fraqueza conhecida em comparação com o VPL. Use \\text ou \\mathrm para que a sigla fique vertical; digitar IRR diretamente no modo matemático produz três variáveis em itálico com espaçamento de produto. Quando ela aparece num denominador, use \\left( \\right) para que os parênteses se ajustem bem à fração.",
  },
  "roi": {
    name: "Retorno sobre o investimento",
    meaning: "Retorno sobre o investimento (ROI): o ganho de um investimento em relação ao seu custo, geralmente expresso em porcentagem.",
    usage: "O ROI é calculado como \\text{ROI} = (\\text{gain} - \\text{cost}) / \\text{cost}, muitas vezes multiplicado por 100\\% para exibição. Ao contrário da TIR, ele ignora o momento em que ocorrem os fluxos de caixa, então variantes anualizadas são usadas em comparações de vários anos. Compor a sigla com \\text mantém as letras verticais e espaçadas como uma palavra; digitadas diretamente no modo matemático, R, O e I viram variáveis em itálico, e o O pode ser confundido com um zero. Em frações, use \\frac com partes em \\text no numerador e no denominador, ou \\dfrac em parágrafos para manter a legibilidade.",
    example: "\\text{ROI} = \\frac{\\text{ganho} - \\text{custo}}{\\text{custo}} \\times 100\\%",
  },
  "summation": {
    name: "Somatório sobre os períodos",
    meaning: "Somatório sobre os períodos t de 1 a n, a forma padrão de agregar fluxos de caixa ao longo dos períodos.",
    usage: "As fórmulas de finanças somam sobre períodos: o valor presente de uma anuidade, \\sum_{t=1}^{n} \\frac{C}{(1+r)^t}, o preço de um título com cupons mais o valor de face, e o VPL, que começa em t = 0 para incluir o desembolso inicial. Na matemática em destaque, os limites ficam acima e abaixo do sigma; em linha, eles se deslocam para a direita em tamanho menor. Use \\sum\\limits para forçar os limites empilhados dentro de um parágrafo. Escolha o índice inicial com cuidado, pois começar em 0 ou em 1 muda o resultado. Em tempo contínuo, o análogo é uma integral com desconto e^{-rt}.",
  },
  "present-value": {
    name: "Valor presente",
    meaning: "Valor presente de um único fluxo de caixa C recebido no instante t, descontado à taxa r por período.",
    usage: "Descontar divide um valor futuro pelo fator de crescimento (1+r)^t, então 1,000 recebidos daqui a 3 anos a 5% valem cerca de 863.84 hoje. Somar esse termo ao longo dos períodos dá o VPL e o preço de títulos. Na matemática em destaque, \\frac desenha uma fração em tamanho cheio; no texto em linha ela encolhe, então \\tfrac ou a forma com barra C/(1+r)^t pode ficar mais legível. Se o denominador ficar complexo, por exemplo com uma taxa variável (1 + r_t), use \\prod ou mantenha o expoente entre chaves: ^{t} faz diferença quando t tem mais de um caractere, como ^{t-1}.",
  },
  "compound-interest": {
    name: "Juros compostos",
    meaning: "Fórmula dos juros compostos: o montante A após t anos quando o principal P rende à taxa r capitalizada n vezes por ano.",
    usage: "Aqui P é o principal, r a taxa nominal anual, n o número de períodos de capitalização por ano e t o número de anos; a capitalização mensal usa n = 12. À medida que n cresce, o montante se aproxima da fórmula contínua Pe^{rt}. O expoente precisa estar entre chaves, ^{nt}; caso contrário, apenas n é elevado. A barra em linha r/n mantém a expressão compacta; em equações em destaque, \\left(1 + \\frac{r}{n}\\right)^{nt} é mais comum, e o par \\left( \\right) faz os parênteses crescerem até caber a fração. Não escreva \\frac dentro de parênteses sem ajuste, pois eles ficam visivelmente curtos demais.",
  },
  "continuous-compounding": {
    name: "Capitalização contínua",
    meaning: "Fórmula da capitalização contínua: o principal P cresce até Pe^{rt} após o tempo t, à taxa r capitalizada continuamente.",
    usage: "Esse é o limite dos juros compostos quando a capitalização se torna infinitamente frequente, já que (1 + r/n)^{nt} \\to e^{rt}. Ela é usada em toda a precificação de derivativos, como no fator de desconto e^{-rT} da fórmula de Black-Scholes. Coloque o expoente entre chaves, e^{rt}, para que as duas letras sejam elevadas. Alguns estilos compõem o número de Euler em tipo vertical, \\mathrm{e}^{rt}, para distingui-lo de uma variável chamada e; as duas formas são aceitas, desde que usadas de modo consistente. Para expoentes longos, \\exp(rt) é mais legível que um sobrescrito minúsculo, sobretudo com frações no expoente.",
  },
};

export default text;
