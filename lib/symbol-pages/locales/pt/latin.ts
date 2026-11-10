import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/latin/<slug>. */
const text: SymbolPageTranslations = {
  "o-with-umlaut-diaeresis": {
    name: "O com trema",
    meaning: "Coloca dois pontos sobre o o, produzindo ö como acento matemático; no texto corrido, a mesma letra se escreve \\\"o.",
    usage: "\\ddot é um acento do modo matemático, então \\ddot{o} produz um o em itálico com dois pontos, adequado dentro de fórmulas, mas não para palavras. Para palavras em alemão, sueco, finlandês, turco ou húngaro, como Köln ou Gödel, use o acento de texto \\\"{o} ou digite ö diretamente num código-fonte UTF-8. Em matemática e física, \\ddot{x} é a notação de Newton para a derivada segunda em relação ao tempo, e \\dddot{x} dá a terceira. A versão com um só ponto, \\dot{x}, marca a derivada primeira. Escrever \\ddot no texto corrido causa um erro de cifrão ausente, um engano comum de iniciantes ao copiar nomes acentuados.",
  },
  "o-with-grave-accent": {
    name: "O com acento grave",
    meaning: "Coloca um acento grave sobre o o, produzindo ò como acento matemático; para palavras, usa-se o comando de texto \\`o.",
    usage: "O acento grave marca a tonicidade ou a qualidade da vogal em italiano (però, città), catalão e vietnamita, e aparece em palavras francesas como où. Num documento, escreva essas palavras com \\`{o} ou digitando a letra acentuada, pois \\grave só funciona no modo matemático e compõe a letra em itálico matemático. O uso matemático de \\grave é raro; às vezes um autor o usa para decorar uma variável quando \\hat, \\tilde e \\bar já estão ocupados. Não confunda o acento grave com o acento agudo \\acute, que se inclina para o outro lado.",
    example: "\\grave{o} \\quad \\text{compare com o acento de texto em } \\text{per\\`{o}}",
  },
  "o-with-acute-accent": {
    name: "O com acento agudo",
    meaning: "Coloca um acento agudo sobre o o, produzindo ó como acento matemático; em palavras, usa-se a forma de texto \\'o.",
    usage: "O acento agudo aparece em espanhol (canción, José), português, polonês (o ó de Kraków), islandês e húngaro. Para qualquer dessas palavras, escreva \\'{o} ou digite ó diretamente, pois \\acute{o} só funciona no modo matemático e produz uma letra em itálico. Em matemática, \\acute é uma decoração pouco usada, às vezes empregada para distinguir uma variável transformada. Lembre-se de que uma linha, x', é diferente de um acento agudo. O ő longo do húngaro usa o duplo acento agudo \\H{o}, e não dois acentos agudos.",
    example: "\\acute{o} \\quad \\text{compare com } \\text{Krak\\'{o}w}",
  },
  "o-with-circumflex": {
    name: "O com acento circunflexo",
    meaning: "Coloca um acento circunflexo sobre o o, produzindo ô; em matemática, o mesmo comando \\hat marca estimadores e vetores unitários.",
    usage: "Para palavras em francês, português ou vietnamita, como hôtel ou côte, use o acento de texto \\^{o} ou digite ô diretamente; \\hat só funciona no modo matemático. Em matemática, \\hat está em toda parte: \\hat{\\theta} para um estimador, \\hat{y} para uma previsão, \\hat{\\mathbf{x}} para um vetor unitário, \\hat{H} para um operador quântico e \\hat{f} para uma transformada de Fourier. Para acentos sobre vários caracteres, use \\widehat{AB}, que se estica. Ao colocar um circunflexo sobre i ou j, use \\hat{\\imath} para que o pingo seja removido.",
  },
  "o-with-tilde": {
    name: "O com til",
    meaning: "Coloca um til sobre o o, produzindo õ; como acento matemático, \\tilde também decora variáveis, como \\tilde{x}.",
    usage: "Em português (põe, Camões) e em estoniano (em que õ é uma letra própria), o comando de texto \\~{o} ou um õ digitado é a escolha certa na prosa. No modo matemático, \\tilde marca uma grandeza transformada, aproximada ou alternativa, como uma variável normalizada \\tilde{x} ou a notação soft-O \\tilde{O}(n). Para argumentos largos, \\widetilde{AB} se estende sobre a expressão inteira. Não confunda o acento com \\sim, a relação til isolada que significa \"tem distribuição\" ou \"é assintótico a\". Tis sobre maiúsculas podem ficar altos, então confira o espaçamento entre linhas.",
  },
  "o-with-macron": {
    name: "O com mácron",
    meaning: "Coloca uma barra de mácron sobre o o, produzindo ō; o mesmo acento \\bar denota médias e conjugados complexos em matemática.",
    usage: "Os mácrons marcam vogais longas em dicionários de latim, na romanização do japonês (Tōkyō, Ōsaka), em maori e em havaiano; no texto, use \\={o} ou digite ō. Em matemática, \\bar{x} é uma média amostral, \\bar{z} um conjugado complexo e \\bar{A} às vezes um fecho ou um complemento. A barra de \\bar tem largura curta fixa, então, para expressões mais longas, use \\overline{A \\cup B}, que cobre todo o argumento. Alguns autores preferem \\overline até para letras isoladas, para que conjugados e fechos tenham aparência uniforme.",
  },
  "o-with-dot-above": {
    name: "O com ponto superior",
    meaning: "Coloca um único ponto sobre o o, produzindo ȯ; em matemática, o acento \\dot é a notação de Newton para uma derivada em relação ao tempo.",
    usage: "Como letra, ȯ é incomum; aparece em algumas transliterações e no livônio. No texto, use o acento \\.{o} ou um caractere digitado, pois \\dot só funciona no modo matemático. Em física e engenharia, \\dot{x} denota dx/dt, então a velocidade é \\dot{\\mathbf{r}} e um modelo em espaço de estados se escreve \\dot{\\mathbf{x}} = A\\mathbf{x} + B\\mathbf{u}. Dois pontos, \\ddot{x}, dão a derivada segunda. Não confunda o acento com \\cdot, que é um ponto de multiplicação centralizado no eixo matemático, e não acima de uma letra.",
  },
  "o-with-breve": {
    name: "O com breve",
    meaning: "Coloca uma breve, uma pequena concha, sobre o o, produzindo ŏ; para palavras, usa-se o acento de texto \\u{o}.",
    usage: "A breve marca vogais breves na prosódia latina e aparece na romanização McCune-Reischauer do coreano, como em Chŏng. O ă romeno e o ğ turco usam a mesma marca sobre outras letras. Na prosa, escreva \\u{o} ou digite ŏ; \\breve só funciona no modo matemático e compõe a letra em itálico. O uso matemático é raro, geralmente como mais uma decoração para uma variável modificada depois dos circunflexos e tis. Não confunda a breve com o háček \\check, que é pontiagudo em vez de arredondado.",
    example: "\\breve{o} \\quad \\text{compare com } \\text{Ch\\u{o}ng}",
  },
  "o-with-caron-hacek": {
    name: "O com caron (háček)",
    meaning: "Coloca um caron, ou háček, sobre o o, produzindo ǒ; na prosa, a mesma marca se escreve com \\v{o}.",
    usage: "No pinyin Hanyu, ǒ marca o terceiro tom, como em wǒ, e o háček é central na ortografia tcheca, eslovaca e de outras línguas eslavas, em letras como č e š. Use \\v{o} ou um ǒ digitado no texto; \\check é o acento do modo matemático. Os matemáticos usam \\check para a cohomologia de Čech \\check{H}, para transformadas de Fourier inversas \\check{f} e para objetos duais. Ele é pontiagudo, ao contrário da breve arredondada \\breve, e aponta para baixo, ao contrário do circunflexo \\hat. Para argumentos largos, \\widecheck não é padrão, então reserve \\check para letras isoladas.",
  },
  "o-with-double-acute": {
    name: "O com duplo acento agudo",
    meaning: "Escreve o ő longo do húngaro, com duplo acento agudo, um comando do modo texto para nomes como Erdős.",
    usage: "\\H é um acento de texto, não um acento matemático, então use-o na prosa ou dentro de \\text{...}; no modo matemático puro ele gera um erro. O húngaro distingue ö de ő e ü de ű, então o nome do matemático é Erdős, e não Erdös, e acertá-lo numa bibliografia é uma cortesia que vale o comando extra. No BibTeX, envolva o acento em chaves, {\\H{o}}, para que a ordenação e as mudanças de caixa não o estraguem. Não tente imitá-lo com dois acentos agudos.",
    example: "\\text{n\\'umero de Erd\\H{o}s } = 1",
  },
  "o-with-cedilla": {
    name: "O com cedilha",
    meaning: "Escreve o o com um gancho de cedilha embaixo, uma letra rara que o LaTeX normalmente produz com o acento de texto \\c{o}.",
    usage: "A cedilha é familiar no ç do francês e do português, mas sobre o o é incomum; aparece na ortografia do marshalês e em alguns sistemas de transcrição. Digitar o caractere pré-composto dentro de \\text funciona em muitos renderizadores web, mas uma compilação LaTeX clássica pode não conhecer a cedilha combinante, então \\c{o} no texto é a forma de código-fonte confiável. Não confunda a cedilha com o ogonek, o gancho do ą e do ę poloneses, que se curva para o outro lado e se escreve \\k. Nenhum dos dois funciona no modo matemático sem \\text.",
  },
  "o-with-dot-below": {
    name: "O com ponto inferior",
    meaning: "Escreve o o com um ponto embaixo, ọ, usado em iorubá e vietnamita e escrito \\d{o} no texto LaTeX.",
    usage: "O iorubá usa ọ como uma vogal distinta (como em palavras iorubás como ọjọ́), e o vietnamita usa o ponto inferior como marca do tom pesado. Num código-fonte LaTeX, o acento de texto \\d{o} produz essa letra, e digitar ọ diretamente também funciona com uma fonte que tenha o glifo. Como outros acentos de texto, \\d é inválido no modo matemático puro; envolva as palavras em \\text. Não use \\dot, que coloca o ponto acima e é um acento matemático para derivadas. Combinar tons com o ponto inferior pode exigir uma fonte com glifos pré-compostos.",
  },
  "o-with-underline": {
    name: "O sublinhado",
    meaning: "Sublinha o o; em matemática, \\underline marca vetores, cotas inferiores ou símbolos enfatizados.",
    usage: "\\underline funciona tanto no modo texto quanto no matemático e traça um fio sob todo o seu argumento, então \\underline{o} produz um o sublinhado. Alguns textos de engenharia e mecânica usam \\underline{u} para vetores em vez do negrito, e artigos de otimização escrevem \\underline{x} para uma cota inferior, em par com \\overline{x} para uma cota superior. Em transliterações, o mácron inferior é um acento de texto distinto, \\b{o}, mais curto e centralizado sob a letra. Para dar ênfase na prosa, prefira \\emph ao sublinhado, pois os sublinhados não quebram entre linhas.",
  },
  "linked-o-o-two-o-s-joined-by-a-dash": {
    name: "O-o ligados (dois os unidos por um traço)",
    meaning: "Une dois os com um sinal de menos apertado por espaços negativos, imitando um glifo o-o ligado.",
    usage: "Esta construção não é um comando padrão: cada \\! insere um espaço fino negativo, então o\\!\\!-\\!\\!o puxa um sinal de menos matemático contra as duas letras, e o resultado parece dois anéis ligados. Como é montada no modo matemático, os os ficam em itálico e o espaçamento depende da fonte. Se você precisa da ligadura medieval oo ou de uma letra histórica semelhante, uma fonte que inclua esse caractere é mais limpa que este truque. Para desenhar uma ligação ou um elo em forma de haltere, uma ferramenta de diagramas adequada dá mais controle. Use-a apenas para um efeito visual rápido.",
  },
  "oe-ligature-lowercase": {
    name: "Ligadura oe (minúscula)",
    meaning: "Escreve a ligadura minúscula œ, usada em palavras francesas como cœur e œuvre; no LaTeX, é \\oe.",
    usage: "A ortografia francesa exige a ligadura em palavras como sœur, cœur e œil, então escrever oe é um erro de grafia, e não apenas uma escolha tipográfica. No código-fonte LaTeX, use \\oe ou digite œ diretamente; \\oe é um comando de texto, então use \\text dentro da matemática. O inglês a usa em grafias antigas ou britânicas, como fœtus. Ao contrário das ligaduras ff ou fi, que o TeX forma automaticamente, œ é uma letra à parte e nunca é criada a partir da digitação de oe. Lembre-se de deixar um espaço depois de \\oe, como em c\\oe ur, ou use chaves, como em c{\\oe}ur.",
  },
  "oe-ligature-uppercase": {
    name: "Ligadura OE (maiúscula)",
    meaning: "Escreve a ligadura maiúscula Œ, usada em francês, como em Œuvres complètes; no LaTeX, é \\OE.",
    usage: "O Œ maiúsculo aparece no início de palavras francesas e em títulos em caixa-alta, então se escreve ŒUVRES, e não OEUVRES. Digite o caractere diretamente ou use \\OE no modo texto; dentro da matemática, ele precisa estar em \\text. Em versaletes ou títulos em maiúsculas, verifique se \\MakeUppercase transforma \\oe em \\OE, o que o LaTeX faz corretamente. Não o confunda com Æ, o ash, que usa um a em vez de um o. Grafias inglesas antigas, como Œdipus, também o usam.",
  },
  "ae-ligature-lowercase-ash": {
    name: "Ligadura ae (minúscula)",
    meaning: "Escreve o æ minúsculo, chamado ash, uma letra do dinamarquês, do norueguês, do islandês e do inglês antigo; no LaTeX, é \\ae.",
    usage: "Em dinamarquês e norueguês, æ é uma letra plena do alfabeto, ordenada depois do z, então nunca deve ser substituída por ae em nomes. O inglês o usa em grafias estilizadas como encyclopædia e Cæsar, e o símbolo æ do AFI marca a vogal de cat. No LaTeX, use \\ae ou digite æ diretamente; é um comando de texto, então envolva-o em \\text dentro da matemática. Separe uma letra seguinte com chaves ou um espaço, como em \\ae{}ble. Ele é distinto de œ, que junta o e e.",
  },
  "ae-ligature-uppercase": {
    name: "Ligadura AE (maiúscula)",
    meaning: "Escreve o Æ maiúsculo, o ash maiúsculo usado em dinamarquês, norueguês, islandês e inglês antigo.",
    usage: "O Æ maiúsculo inicia palavras dinamarquesas e norueguesas e aparece em nomes do inglês antigo, como Ælfred. O LaTeX oferece \\AE no modo texto, ou você pode digitar Æ diretamente. Em títulos em caixa-alta, a conversão para maiúsculas do LaTeX transforma \\ae em \\AE automaticamente. Bibliografias com nomes escandinavos devem manter a letra como está, pois as regras de ordenação a colocam perto do fim do alfabeto. Não a confunda com Œ, que junta O e E e pertence à ortografia francesa. Digitá-la diretamente num arquivo UTF-8 é hoje a opção mais simples.",
  },
  "a-with-ring-above": {
    name: "A com anel",
    meaning: "Escreve å, o a com anel, uma letra do sueco, do dinamarquês, do norueguês e do finlandês; no texto LaTeX, é \\aa.",
    usage: "Nas línguas escandinavas, å é uma vogal à parte, ordenada no fim do alfabeto, como em på ou Århus. O LaTeX a escreve com \\aa ou com o acento de anel geral \\r{a}, ou você pode digitar å diretamente. Esses são comandos de texto, então envolva-os em \\text na matemática. Não use o acento matemático \\mathring{a}, que coloca um anel sobre uma letra matemática em itálico e se destina a coisas como o interior de um conjunto. Os programas de bibliografia devem tratar {\\aa} como uma única letra na ordenação.",
  },
  "a-with-ring-above-angstrom": {
    name: "A maiúsculo com anel (ångström)",
    meaning: "Escreve o Å maiúsculo, usado em palavras escandinavas e como símbolo da unidade ångström (10^{-10} m).",
    usage: "Físicos e químicos escrevem comprimentos de ligação e de onda em ångströms, como em 1.54 Å, e o comando \\AA do LaTeX dá o glifo correto no modo texto. Na matemática, escreva \\text{\\AA} ou use uma macro de unidades dedicada, pois \\AA sozinho é um comando de texto. Como letra, ele inicia nomes de lugares suecos e dinamarqueses, como Åland. O sinal de ångström separado do Unicode é normalizado para esta mesma letra, então usar Å é correto. Coloque um espaço fino entre o número e a unidade, como em 1.54\\,\\text{Å}.",
  },
  "o-with-stroke-lowercase": {
    name: "O cortado (minúsculo)",
    meaning: "Escreve ø, o o cortado do dinamarquês, do norueguês e do feroês; no LaTeX, é o comando de texto \\o.",
    usage: "ø é uma vogal plena em dinamarquês e norueguês, como em København ou Søren Kierkegaard, e não deve ser substituída por o ou oe em nomes. Use \\o ou digite ø diretamente; é um comando de texto, então use \\text na matemática. Ele se parece com os símbolos de conjunto vazio \\emptyset e \\varnothing e com o sinal de diâmetro, mas esses são caracteres diferentes, com significados diferentes, então não use ø para o conjunto vazio. A transcrição fonética também usa ø para uma vogal anterior arredondada.",
  },
  "o-with-stroke-uppercase": {
    name: "O cortado (maiúsculo)",
    meaning: "Escreve o Ø maiúsculo, como em Øresund, o O cortado maiúsculo escrito \\O no texto LaTeX.",
    usage: "O Ø maiúsculo inicia palavras dinamarquesas e norueguesas como Øresund e Østergaard. No LaTeX, use \\O no modo texto ou digite Ø diretamente; \\O não está definido na matemática sem \\text. Como ele lembra o conjunto vazio \\emptyset e o símbolo de diâmetro, é tentador reaproveitá-lo, mas esses são caracteres distintos, e leitores de tela e mecanismos de busca os tratam de forma diferente. Na ordenação dos alfabetos norueguês e dinamarquês, Ø vem depois de Æ e antes de Å.",
  },
  "l-with-stroke-lowercase": {
    name: "L cortado (minúsculo)",
    meaning: "Escreve ł, o l cortado do polonês, pronunciado como o w do inglês; no texto LaTeX, é \\l.",
    usage: "O polonês usa ł em muitas palavras e nomes comuns, como złoty, Wrocław e Łukasiewicz, o lógico por trás da notação polonesa. Num código-fonte LaTeX, escreva \\l ou digite ł diretamente; é um comando de texto, então use \\text na matemática. Quando uma letra vem logo depois, separe-a com chaves, como em z\\l{}oty. Algumas fontes não têm ł, o que pode resultar num glifo ausente em vez de um aviso, então confira o PDF. Ele é distinto do lambda minúsculo cortado ƛ.",
  },
  "l-with-stroke-uppercase": {
    name: "L cortado (maiúsculo)",
    meaning: "Escreve o Ł maiúsculo, como em Łódź, o L cortado maiúsculo do polonês, escrito \\L no LaTeX.",
    usage: "O Ł maiúsculo inicia nomes como Łódź e Łukasiewicz, então bibliografias que citam autores poloneses precisam dele para grafar os nomes corretamente. Use \\L no modo texto ou digite Ł diretamente; envolva-o em \\text dentro da matemática. No BibTeX, mantenha-o entre chaves, {\\L}ukasiewicz, para que as mudanças de caixa e a ordenação funcionem. Não confunda \\L com \\pounds, o símbolo da libra esterlina, que é um símbolo diferente, embora ambos tenham um traço sobre uma forma parecida com L. Digitar Ł diretamente num código-fonte UTF-8 é a opção mais simples nas configurações modernas.",
  },
  "dotless-i-math": {
    name: "I sem pingo (matemático)",
    meaning: "Produz um i itálico matemático sem pingo, para que acentos como \\hat ou \\vec fiquem sobre ele sem um pingo conflitante.",
    usage: "O principal motivo para usar \\imath é o posicionamento de acentos: \\hat{\\imath} dá o vetor unitário i-chapéu da física sem um pingo sob o circunflexo, enquanto \\hat{i} mantém o pingo. Ele também aparece como \\vec{\\imath} no cálculo vetorial e às vezes como unidade imaginária composta. No texto, o i sem pingo é \\i, que você usaria em palavras turcas como ılık ou para o i acentuado em codificações antigas. Não confunda \\imath com \\iota, que é a letra grega e tem outra forma.",
  },
  "dotless-j-math": {
    name: "J sem pingo (matemático)",
    meaning: "Produz um j itálico matemático sem pingo, usado sob acentos, como no vetor unitário j-chapéu.",
    usage: "A física e a engenharia escrevem os vetores unitários cartesianos como \\hat{\\imath}, \\hat{\\jmath}, \\hat{k}, e \\jmath remove o pingo para que o circunflexo fique limpo. Engenheiros eletricistas que usam j para a unidade imaginária às vezes também colocam acentos sobre ele. No modo texto, o comando correspondente é \\j. Não há motivo padrão para usar \\jmath em outros contextos sem acento, então reserve-o para as formas acentuadas. Observe que \\vec{\\jmath} e \\hat{\\jmath} posicionam o acento de modo ligeiramente diferente, então confira o espaçamento.",
  },
  "inverted-question-mark": {
    name: "Ponto de interrogação invertido",
    meaning: "Escreve ¿, o ponto de interrogação invertido que abre uma pergunta em espanhol; o LaTeX também aceita ?` para ele.",
    usage: "O espanhol coloca ¿ no início de uma pergunta e ? no fim, como em ¿Dónde está? No LaTeX, a ligadura ?` (ponto de interrogação seguido de um acento grave) produz o sinal invertido nas fontes padrão, e \\textquestiondown é o comando nomeado. Digitar ¿ diretamente também funciona com entrada UTF-8. É um caractere de texto, então coloque-o dentro de \\text na matemática. O galego e o asturiano também o usam, enquanto o catalão geralmente não. Como ?` é uma ligadura, um acento grave perdido depois de um ponto de interrogação pode criar acidentalmente o glifo invertido, então confira frases que terminam numa pergunta seguida de aspas.",
  },
  "inverted-exclamation-mark": {
    name: "Ponto de exclamação invertido",
    meaning: "Escreve ¡, o ponto de exclamação invertido que abre uma exclamação em espanhol; o LaTeX também aceita !` para ele.",
    usage: "O espanhol delimita as exclamações com ¡ e !, como em ¡Hola!, e o mesmo par vale até no meio da frase. O LaTeX o produz a partir da ligadura !` (ponto de exclamação seguido de um acento grave) ou do comando nomeado \\textexclamdown, e digitar ¡ num arquivo UTF-8 também funciona. Na matemática, ele precisa ficar dentro de \\text. Não o confunda com o i minúsculo nem com a barra vertical |, que podem parecer semelhantes em algumas fontes sem serifa. Assim como na ligadura do ponto de interrogação, uma sequência literal !` no seu código-fonte vira ¡, o que às vezes surpreende autores que citam código.",
  },
};

export default text;
