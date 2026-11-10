import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/units/<slug>. */
const text: SymbolPageTranslations = {
  "angstrom-a": {
    name: "Ångström (Å)",
    meaning: "Ångström, unidade igual a 10⁻¹⁰ metro (0,1 nm), usada para raios atômicos, comprimentos de ligação e comprimentos de onda de raios X.",
    usage: "\\AA é um comando do modo texto, então em fórmulas precisa estar dentro de \\text, como mostrado; usá-lo sozinho no modo matemático gera um aviso e uma saída incorreta. Cristalógrafos e biólogos estruturais ainda citam distâncias como 1.54\\,\\text{\\AA} para o comprimento de onda K-alfa do cobre, embora o SI prefira nanômetros ou picômetros. O parecido \\mathring{A} funciona no modo matemático, mas é uma variável acentuada, não o símbolo da unidade. Coloque um espaço fino entre o número e a unidade. O minúsculo \\aa dá a letra escandinava, não a unidade.",
  },
  "degrees-fahrenheit": {
    name: "Grau Fahrenheit",
    meaning: "Grau Fahrenheit, unidade de temperatura; a água congela a 32 °F e ferve a 212 °F à pressão normal.",
    usage: "A conversão é T_F = \\frac{9}{5} T_C + 32, e uma diferença de temperatura de um grau Fahrenheit equivale a 5/9 de kelvin. A construção espelha a do Celsius: um \\circ sobrescrito seguido de um F reto, com um espaço fino entre o número e o sinal de grau. Dados meteorológicos dos Estados Unidos, climatização e algumas normas de engenharia ainda a usam, mas as revistas científicas quase sempre esperam o SI. Evite escrever o grau com um o minúsculo ou com \\degree, a menos que esse comando esteja definido na sua configuração.",
  },
  "kelvin": {
    name: "Kelvin",
    meaning: "Kelvin, a unidade de base do SI para temperatura termodinâmica, com o zero no zero absoluto.",
    usage: "Desde 1967 a unidade se escreve K, sem sinal de grau: 300 K, e não 300 °K. O zero absoluto é 0 K, o ponto triplo da água é 273,16 K e T(\\text{K}) = T(^{\\circ}\\text{C}) + 273.15. Os símbolos de unidades devem ser retos, o que \\text garante; um K itálico é uma variável, como uma constante de equilíbrio ou uma rigidez. Deixe um espaço fino entre o número e a unidade, 4.2\\,\\text{K}. Em textos de teorema em itálico, \\mathrm{K} é mais seguro, pois \\text acompanharia a fonte itálica.",
  },
  "meter": {
    name: "Metro",
    meaning: "Metro, a unidade de base do SI para comprimento, definida a partir da velocidade da luz no vácuo.",
    usage: "Um m reto é a unidade, enquanto um m itálico costuma significar massa, então \\text{m} ou \\mathrm{m} é essencial: compare m = 2\\,\\text{kg} com h = 2\\,\\text{m}. O estilo do SI coloca um espaço entre o valor e a unidade e nunca põe o símbolo no plural. As unidades derivadas se combinam com potências, \\text{m}^2 e \\text{m}^3, e os prefixos se ligam diretamente, \\text{km}, \\text{mm}. A velocidade se escreve \\text{m/s} ou \\text{m}\\,\\text{s}^{-1}; as revistas variam, então confira o estilo da casa. Não confunda o símbolo com o prefixo mili, que também usa m.",
  },
  "kilogram": {
    name: "Quilograma",
    meaning: "Quilograma, a unidade de base do SI para massa, hoje fixada pela constante de Planck e não por um protótipo físico.",
    usage: "É a única unidade de base do SI que já traz um prefixo, então os múltiplos e submúltiplos se formam a partir do grama: escreva \\text{mg}, e não \\mu\\text{kg}. As densidades se dão em \\text{kg}/\\text{m}^3 ou \\text{kg}\\,\\text{m}^{-3}; a da água é cerca de 1000\\,\\text{kg}\\,\\text{m}^{-3}. Mantenha o símbolo em minúsculas, pois Kg e KG estão incorretos. As unidades ficam retas, então envolva-as com \\text ou \\mathrm, e acrescente \\, entre o número e kg. Em unidades derivadas como o newton, kg vem primeiro por convenção, \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}. O símbolo fica sempre em minúsculas, e o nome da unidade também, salvo no início de uma frase.",
  },
  "second": {
    name: "Segundo",
    meaning: "Segundo, a unidade de base do SI para tempo, definida pela frequência da transição hiperfina do césio-133.",
    usage: "Um s reto é a unidade; um s itálico costuma representar deslocamento ou comprimento de arco, então a formatação carrega significado em s = 5\\,\\text{m} versus t = 5\\,\\text{s}. Evite abreviações como seg em textos técnicos. O inverso do segundo, \\text{s}^{-1}, mede taxas e equivale ao hertz quando descreve frequência. As formas com prefixo incluem \\text{ms}, \\mu\\text{s} e \\text{ns}; para o prefixo micro, o estilo do SI prefere um mi reto, que o \\mu simples não fornece nas fontes padrão.",
  },
  "ampere": {
    name: "Ampere",
    meaning: "Ampere, a unidade de base do SI para corrente elétrica, definida a partir da carga elementar.",
    usage: "Os circuitos estão cheios de A: I = 2\\,\\text{A}, a densidade de corrente em \\text{A}/\\text{m}^2, e a carga, já que um coulomb é igual a um ampere-segundo. Um A itálico costuma significar área ou um potencial vetor, então a formatação reta distingue a unidade. Formas com prefixo como \\text{mA} e \\mu\\text{A} são comuns em eletrônica. Escreva o número, um espaço fino e depois o símbolo. Em texto corrido, o nome da unidade fica em minúsculas, ampere, embora o símbolo seja maiúsculo por homenagear André-Marie Ampère. Um miliampere é um milésimo, escrito 5\\,\\text{mA}.",
  },
  "volt": {
    name: "Volt",
    meaning: "Volt, a unidade do SI de diferença de potencial elétrico: um joule de energia por coulomb de carga.",
    usage: "A lei de Ohm V = IR usa um V itálico para a grandeza tensão, enquanto a unidade em si é reta, como em 230\\,\\text{V}; misturar os dois é um deslize tipográfico comum. O V itálico também denota volume em termodinâmica, outro motivo para manter as unidades retas. Expressões equivalentes incluem \\text{J}/\\text{C} e \\text{W}/\\text{A}. A intensidade do campo elétrico se mede em \\text{V}/\\text{m}. As versões com prefixo, \\text{mV} e \\text{kV}, se ligam diretamente, sem espaço, enquanto o número e a unidade ficam separados por \\,. As pilhas e baterias, por exemplo, são especificadas em 1.5\\,\\text{V} ou 9\\,\\text{V}.",
  },
  "watt": {
    name: "Watt",
    meaning: "Watt, a unidade do SI de potência: um joule transferido por segundo.",
    usage: "A potência aparece em P = VI, P = I^2 R e no fluxo radiativo em \\text{W}/\\text{m}^2, como na constante solar de cerca de 1361\\,\\text{W}\\,\\text{m}^{-2}. A letra itálica W costuma significar trabalho, então a unidade reta e a grandeza itálica podem aparecer lado a lado: W = 10\\,\\text{J} em 2\\,\\text{s} dá 5\\,\\text{W}. As contas de energia usam quilowatts-hora, escritos \\text{kW}\\,\\text{h} ou \\text{kWh}. Não escreva W/s para energia; o watt já é uma taxa. Grandes usinas são especificadas em megawatts, \\text{MW}, e as perdas na transmissão se calculam como I^2 R.",
  },
  "joule": {
    name: "Joule",
    meaning: "Joule, a unidade do SI de energia, trabalho e calor, igual a um newton-metro ou kg·m²/s².",
    usage: "A energia cinética \\frac{1}{2}mv^2 sai em joules quando se usam unidades do SI, e as grandezas molares usam \\text{kJ}/\\text{mol}. O torque também tem dimensão de N m, mas por convenção se escreve \\text{N}\\,\\text{m}, e não J, para indicar que não é energia. A formatação reta mantém a unidade distinta do J itálico, que pode ser densidade de corrente, momento de inércia ou um jacobiano. Escreva a multiplicação de unidades com um espaço fino ou com \\cdot, como em \\text{kg}\\cdot\\text{m}^2\\,\\text{s}^{-2}. A energia dos alimentos em quilocalorias se converte por 1\\,\\text{kcal} = 4184\\,\\text{J}.",
  },
  "newton": {
    name: "Newton",
    meaning: "Newton, a unidade do SI de força: a força que imprime a um quilograma a aceleração de um metro por segundo ao quadrado.",
    usage: "Pesos e forças são dados em newtons, então uma massa de 1 kg pesa cerca de 9.81\\,\\text{N} na superfície da Terra. Tensão mecânica e pressão dividem por uma área, \\text{N}/\\text{m}^2, que é o pascal. Um N reto é a unidade; um N itálico costuma ser uma força normal, uma contagem ou um número ligado a Avogadro, e o \\mathbb{N} em negrito de quadro-negro são os números naturais. Mantenha um espaço fino entre o número e a unidade. As constantes elásticas de molas se medem em \\text{N}/\\text{m}. A unidade homenageia Isaac Newton, por isso o símbolo é maiúsculo, mas o nome da unidade não.",
  },
  "pascal": {
    name: "Pascal",
    meaning: "Pascal, a unidade do SI de pressão e tensão mecânica, igual a um newton por metro quadrado.",
    usage: "Como o pascal é minúsculo, os valores práticos usam prefixos: a pressão atmosférica é de cerca de 101.325\\,\\text{kPa}, os mapas meteorológicos usam hectopascais (hPa) e as resistências dos materiais se dão em MPa ou GPa. O módulo de Young do aço fica em torno de 200\\,\\text{GPa}. O símbolo tem P maiúsculo e a minúsculo, que devem ficar retos; \\text{Pa} garante isso. A pressão em si é um p ou P itálico. Escrever a unidade como \\text{N}/\\text{m}^2 é equivalente, mas menos comum em textos modernos. As pressões manométrica e absoluta diferem em cerca de uma atmosfera, então diga qual delas você usa.",
  },
  "hertz": {
    name: "Hertz",
    meaning: "Hertz, a unidade do SI de frequência: um ciclo por segundo, dimensionalmente igual ao inverso do segundo.",
    usage: "Processamento de sinais e acústica citam frequências como 440\\,\\text{Hz} para o lá de concerto e taxas de amostragem como 44.1\\,\\text{kHz}; os processadores funcionam em GHz. A frequência angular \\omega = 2\\pi f é dada por costume em \\text{rad}/\\text{s}, e não em hertz, para evitar uma confusão por um fator 2\\pi. Mantenha o H maiúsculo e o z minúsculo. Os prefixos se ligam diretamente, \\text{MHz}, e o número leva um espaço fino antes da unidade. Para a atividade radioativa, a mesma dimensão recebe o nome de becquerel. O período é o inverso, T = 1/f.",
  },
  "per-slash-in-units": {
    name: "Barra oblíqua nas unidades (“por”)",
    meaning: "Barra oblíqua usada com o sentido de “por” em unidades compostas como m/s, dividindo uma unidade por outra.",
    usage: "No modo matemático, / é um símbolo comum, sem espaçamento extra, o que dá a aparência compacta de \\text{m}/\\text{s} de que as unidades precisam. As regras do SI permitem só uma barra oblíqua por unidade, então a aceleração é \\text{m}/\\text{s}^2 e nunca m/s/s; para unidades complicadas, expoentes negativos como \\text{J}\\,\\text{kg}^{-1}\\,\\text{K}^{-1} são mais claros. Use parênteses quando o denominador tiver vários fatores: \\text{W}/(\\text{m}^2\\,\\text{K}). Para frações em geral em equações destacadas, \\frac costuma ser melhor que a barra, mas no texto corrido a barra evita números empilhados e apertados.",
  },
  "squared": {
    name: "Quadrado (segunda potência)",
    meaning: "Expoente 2, que eleva uma grandeza ou unidade à segunda potência, como em x² ou metros quadrados.",
    usage: "Digitar ^2 transforma o próximo elemento isolado em sobrescrito; para expoentes mais longos são necessárias chaves, x^{12}, já que x^12 daria x^1 seguido de um 2. Unidades ao quadrado, como \\text{m}^2, descrevem áreas, e \\text{s}^2 aparece na aceleração. Aplicado a funções, \\sin^2 x significa (\\sin x)^2, uma convenção que não se estende a \\sin^{-1}, que denota a inversa. Expoentes duplos como x^2^3 produzem um erro; escreva x^{2^3} ou (x^2)^3, conforme o que você quer dizer. Use \\text{m}^2 em vez de abreviações como m2 em textos científicos.",
  },
  "cubed": {
    name: "Cubo (terceira potência)",
    meaning: "Expoente 3 para elevar ao cubo: terceiras potências de números ou variáveis e unidades cúbicas de volume.",
    usage: "Os volumes se exprimem em \\text{m}^3, \\text{cm}^3 ou litros (1\\,\\text{L} = 10^{-3}\\,\\text{m}^3), e as densidades usam unidades por volume, \\text{kg}/\\text{m}^3. Em álgebra, os cubos aparecem em identidades como a^3 - b^3 = (a - b)(a^2 + ab + b^2). O sobrescrito se aplica só ao elemento anterior, então uma unidade com prefixo é elevada ao cubo como um todo, \\text{cm}^3, o que significa (cm) ao cubo, e não c vezes m ao cubo. Coloque entre chaves os expoentes com vários elementos: x^{3n}. A raiz cúbica se escreve \\sqrt[3]{x}. Escreva \\text{m}^3, e não abreviações como m3, em textos científicos.",
  },
};

export default text;
