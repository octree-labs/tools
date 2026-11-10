import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/geometry/<slug>. */
const text: SymbolPageTranslations = {
  "angle": {
    name: "Ângulo",
    meaning: "Sinal de ângulo colocado antes dos rótulos dos vértices, como em ângulo ABC no vértice B.",
    usage: "Demonstrações de geometria escrevem \\angle ABC para o ângulo no vértice B e \\angle ABC \\cong \\angle DEF para ângulos congruentes. O símbolo é um símbolo matemático comum, então nenhum espaço extra é adicionado depois dele, o que combina com nomes como \\angle A. Livros didáticos norte-americanos costumam indicar medidas como m\\angle A = 60^{\\circ}, separando o ângulo da sua medida. Símbolos relacionados incluem \\measuredangle, que acrescenta um arco para indicar um ângulo medido ou orientado, e \\sphericalangle, para ângulos sobre uma esfera. Evite usá-lo como abreviação da palavra ângulo no texto corrido.",
  },
  "measured-angle": {
    name: "Ângulo medido",
    meaning: "Sinal de ângulo com um arco, usado com frequência para um ângulo medido ou orientado.",
    usage: "Alguns textos de geometria reservam \\angle para o ângulo como figura e \\measuredangle para sua medida numérica, escrevendo \\measuredangle ABC = 30^{\\circ}. Na geometria de olimpíadas, \\measuredangle costuma denotar ângulos orientados módulo 180^{\\circ}, o que torna os argumentos sobre quadriláteros cíclicos independentes da configuração do desenho: A, B, C, D são concíclicos exatamente quando \\measuredangle ABC = \\measuredangle ADC. Como as convenções variam, defina o que você quer dizer numa observação sobre a notação. Ele se comporta como um símbolo comum, então o espaçamento junto às letras é justo.",
  },
  "spherical-angle": {
    name: "Ângulo esférico",
    meaning: "Sinal de ângulo esférico, usado para ângulos entre arcos de círculos máximos sobre uma esfera.",
    usage: "A geometria esférica, a navegação e a astronomia o usam para ângulos formados por arcos sobre uma esfera, onde os ângulos de um triângulo somam mais de 180^{\\circ}. O teorema de Girard dá a área de um triângulo esférico como R^2(A + B + C - \\pi), o excesso esférico. Sua forma difere tanto de \\measuredangle quanto do simples \\angle, então não os troque livremente. Alguns autores o reaproveitam para ângulos sólidos ou orientados, por isso uma definição de uma linha ajuda os leitores. É um símbolo comum, então acrescente \\, se ele ficar muito próximo de um rótulo seguinte.",
  },
  "not-congruent": {
    name: "Sinal de não congruência",
    meaning: "Sinal de congruência cortado: duas figuras ou objetos não são congruentes ou não são isomorfos.",
    usage: "Em geometria, \\triangle ABC \\ncong \\triangle DEF afirma que os triângulos não são congruentes; em álgebra, \\cong muitas vezes significa isomorfo, então G \\ncong H afirma que dois grupos não são isomorfos. É uma relação, então o espaçamento é automático. Prefira este glifo pré-composto a \\not\\cong, que sobrepõe uma barra genérica que pode ficar descentralizada sobre o símbolo. Relações negadas afins incluem \\neq e \\nsim. Ao usar \\cong para isomorfismo, mencione a categoria ou a estrutura se não for óbvia, pois espaços podem ser homeomorfos sem serem isomorfos como grupos.",
  },
  "similar-or-equal": {
    name: "Sinal de semelhança ou igualdade",
    meaning: "Til sobre um único traço, lido como homotopicamente equivalente, assintoticamente igual ou isomorfo.",
    usage: "Seu significado depende da área: topólogos escrevem X \\simeq Y para equivalência homotópica, teóricos das categorias para equivalência de categorias, e físicos para igualdade aproximada. Compare-o com \\cong (til sobre dois traços), geralmente reservado para isomorfismo ou congruência, \\approx (dois tis) para aproximação numérica e \\sim para equivalência assintótica ou relações de equivalência. Como as convenções se sobrepõem, declare qual delas você usa. Como símbolo de relação, ele recebe automaticamente um espaçamento largo dos dois lados, então não são necessários espaços manuais.",
  },
  "arc": {
    name: "Arco",
    meaning: "Arco em forma de careta, às vezes colocado sobre letras para marcar um arco de circunferência.",
    usage: "Sozinho, \\frown é um arco da classe das relações, e os teóricos dos conjuntos o usam para a concatenação de sequências, s^\\frown t. Para o arco geométrico entre os pontos A e B, o símbolo precisa ficar sobre as letras; \\overset{\\frown}{AB} faz isso, embora o arco não se estique, e acentos de arco largo dedicados, vindos de fontes adicionais, ficam melhores em rótulos longos. Sua imagem espelhada é \\smile, e os dois se combinam em algumas notações para relações de compatibilidade. Como o símbolo simples tem espaçamento de relação, confira o resultado quando ele aparecer entre letras.",
  },
  "prime-feet-minutes": {
    name: "Plica (pés/minutos)",
    meaning: "Uma única plica, que marca pés, minutos de arco ou minutos de tempo depois de um número.",
    usage: "No modo matemático, o apóstrofo se transforma numa plica sobrescrita, então 5'\\,9'' se lê cinco pés e nove polegadas, e 12^{\\circ}\\,30' dá doze graus e trinta minutos de arco. Fora do modo matemático, o apóstrofo é uma simples aspa de fechamento e não se parece com uma plica, então coloque as medidas no modo matemático. O mesmo caractere produz as linhas de derivada, f'(x), e marca pontos ou variáveis transformados, A' e x'. Para coordenadas geográficas como 40^{\\circ}\\,26'\\,46'', insira espaços finos entre os componentes para que não fiquem colados.",
  },
  "double-prime-inches-seconds": {
    name: "Plica dupla (polegadas/segundos)",
    meaning: "Duas plicas, que marcam polegadas, segundos de arco ou segundos depois de um número.",
    usage: "No modo matemático, '' vira um único sobrescrito com duas plicas, então 6'' denota seis polegadas ou seis segundos de arco, e 2^{\\circ}\\,15'\\,30'' escreve um ângulo em graus, minutos e segundos. Digitar o caractere de aspas duplas produz um glifo diferente e deve ser evitado. No modo texto, dois apóstrofos formam uma aspa de fechamento, não uma plica, então as medidas pertencem ao modo matemático. A mesma construção escreve derivadas segundas, f''(x), e pontos transformados duas vezes, como A''. Os astrônomos a usam para segundos de arco, como numa resolução de 0.1''.",
  },
  "line-segment": {
    name: "Segmento de reta",
    meaning: "Barra sobre AB, a notação padrão para o segmento de reta entre os pontos A e B.",
    usage: "Textos de geometria escrevem \\overline{AB} para o segmento e simplesmente AB para seu comprimento, de modo que \\overline{AB} \\cong \\overline{CD} corresponde a AB = CD. A barra se estende sobre todo o argumento, ao contrário de \\bar{x}, que é um acento de largura fixa para uma única letra. Outros significados de \\overline incluem o conjugado complexo \\overline{z}, o fecho de um conjunto \\overline{A} e a negação na álgebra booleana, \\overline{A \\cdot B}. Semirretas e retas usam \\overrightarrow{AB} e \\overleftrightarrow{AB}, que indicam sentido ou extensão infinita.",
  },
};

export default text;
