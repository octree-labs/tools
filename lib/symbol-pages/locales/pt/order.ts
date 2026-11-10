import type { SymbolPageTranslations } from "../types";

/** Portuguese copy for /pt/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "Precedência curva",
    meaning: "Relação curva “precede ou é igual a”, usada em ordens não estritas e em relações de preferência que não são o ≤ numérico usual.",
    usage: "Teóricos da ordem e economistas recorrem a \\preccurlyeq quando uma pré-ordem abstrata precisa de um símbolo visivelmente diferente de \\leq, por exemplo a preferência fraca de um consumidor x \\preccurlyeq y ou a ordem de dominância em partições. Sua versão estrita é \\prec, e seu espelho é \\succcurlyeq. Não o confunda com \\preceq, que tem um traço reto embaixo em vez do curvo; alguns autores usam os dois no mesmo artigo para marcar duas ordens distintas. Como é uma relação, o TeX o cerca automaticamente de espaços grossos, então nunca o acolchoe manualmente com \\, ou \;.",
    example: "x \\preccurlyeq y \\text{ e } y \\preccurlyeq z \\implies x \\preccurlyeq z",
  },
  "curly-succeeds": {
    name: "Sucessão curva",
    meaning: "Relação curva “sucede ou é igual a”, o inverso de \\preccurlyeq para ordens fracas, preferências e majorização.",
    usage: "Em microeconomia, x \\succcurlyeq y se lê “x é fracamente preferido a y”, e em álgebra linear às vezes indica majorização ou uma desigualdade generalizada. O \\succeq de traço reto é parecido e é a escolha mais comum para matrizes semidefinidas positivas (A \\succeq 0), então escolha uma convenção e mantenha-a em todo o artigo. A versão estrita é \\succ. Como negar um símbolo de relação com \\not pode ficar desajeitado, confira o resultado: negações dedicadas como \\nsucceq existem para a forma de traço reto e costumam ficar melhores que \\not\\succcurlyeq.",
  },
  "not-less-than": {
    name: "Sinal de não menor que",
    meaning: "Sinal de menor que negado: afirma que uma quantidade não é estritamente menor que outra.",
    usage: "Escrever a \\nless b equivale logicamente a a \\geq b numa ordem total, mas numa ordem parcial as duas coisas dizem coisas diferentes, e é justamente aí que \\nless se justifica: dois elementos incomparáveis satisfazem tanto a \\nless b quanto b \\nless a. O glifo é um único símbolo pré-composto com uma barra, por isso fica mais limpo que \\not<, cuja barra pode ficar descentralizada. Seu companheiro para o outro sentido é \\ngtr. Para as versões não estritas negadas, use \\nleq ou \\nleqslant em vez de empilhar \\not.",
    example: "a \\nless b \\text{ e } b \\nless a \\text{ (incomparaveis)}",
  },
  "not-greater-than": {
    name: "Sinal de não maior que",
    meaning: "Sinal de maior que negado, que afirma que o lado esquerdo não é estritamente maior que o direito.",
    usage: "O nome do comando omite as vogais de “greater” (\\ngtr, e não \\ngt nem \\ngreater), o que confunde quem digita de memória. Numa ordem linear, x \\ngtr y significa simplesmente x \\leq y, por isso a maioria prefere a forma positiva; \\ngtr é mais natural em ordens parciais, reticulados ou ao enunciar a falha de uma hipótese, como uma sequência que não é eventualmente maior que uma cota. Combine-o com \\nless para o sentido oposto e com \\ngeq para a versão não estrita negada. Tem o mesmo espaçamento de relação que o próprio >.",
    example: "f(n) \\ngtr g(n) \\quad \\text{para infinitos } n",
  },
  "not-less-or-equal": {
    name: "Sinal de não menor ou igual",
    meaning: "Não menor ou igual a: negação de ≤, com uma barra cortando a forma de traço horizontal.",
    usage: "Use \\nleq para afirmar que uma desigualdade falha, por exemplo em contraexemplos ou em conjuntos parcialmente ordenados, onde x \\nleq y não implica y \\leq x. Há três glifos relacionados: \\nleq nega o \\leq de traço simples, \\nleqslant nega o inclinado \\leqslant e \\nleqq nega o de traço duplo \\leqq. Combine a negação com o estilo não negado usado no resto do documento, para que os símbolos pareçam uma família. Um \\nleq pré-composto é preferível a \\not\\leq, que coloca uma barra genérica que pode não se alinhar com o traço.",
    example: "\\exists\\, x, y \\in P : x \\nleq y \\text{ e } y \\nleq x",
  },
  "not-greater-or-equal": {
    name: "Sinal de não maior ou igual",
    meaning: "Não maior ou igual a: a forma cortada de ≥, que indica que a desigualdade falha.",
    usage: "Em análise real, x \\ngeq 0 é apenas x < 0, mas em ordens de vetores ou matrizes é mais fraco: um vetor pode deixar de ser não negativo componente a componente sem ser negativo, então \\ngeq é ali o símbolo honesto. Ele pertence ao mesmo grupo que \\nleq, \\ngeqslant e \\ngeqq, e convém escolher a versão cujo gêmeo não negado aparece no seu texto. Evite \\not\\geq se a aparência importa, pois a barra genérica é posicionada para o = e pode parecer fora do lugar. Como toda relação, recebe espaçamento grosso automaticamente.",
    example: "\\mathbf{v} \\ngeq \\mathbf{0} \\text{ embora } v_1 > 0",
  },
  "minimum": {
    name: "Mínimo",
    meaning: "Operador mínimo, que dá o menor valor de um conjunto finito ou o menor valor atingido por uma função.",
    usage: "\\min é um nome de operador predefinido: imprime “min” em tipo reto com o espaçamento correto e, em modo de exibição, um subscrito vai embaixo, como em \\min_{x \\in S} f(x). No texto corrido, o subscrito vai para o lado para poupar altura de linha; force-o para baixo com \\min\\limits_{x} se realmente precisar. Digitar min simples em modo matemático produz três variáveis em itálico multiplicadas, um erro frequente. Para o argumento minimizador não há comando embutido, então defina \\DeclareMathOperator*{\\argmin}{arg\\,min} no preâmbulo. Distinga \\min de \\inf, que não precisa ser atingido.",
  },
  "maximum": {
    name: "Máximo",
    meaning: "Operador máximo: o maior elemento de um conjunto ou o maior valor que uma função atinge em seu domínio.",
    usage: "Problemas de otimização, a norma do máximo \\|x\\|_\\infty = \\max_i |x_i| e as ativações ReLU \\max(0, x) dependem de \\max. Ele se comporta como \\sum quanto aos limites: embaixo do operador em estilo de exibição, ao lado no texto corrido. Os parênteses depois dele não são redimensionados automaticamente, então escreva \\max\\left( a, b \\right) ou \\max\\bigl( \\dots \\bigr) quando o argumento contiver frações. Quando o máximo pode não existir, use \\sup. Para um operador argmax, declare um com a versão com asterisco \\DeclareMathOperator*, para que o subscrito também fique embaixo em exibições.",
  },
  "infimum": {
    name: "Ínfimo",
    meaning: "Ínfimo, a maior cota inferior de um conjunto de reais, que existe mesmo quando não há mínimo.",
    usage: "O conjunto \\{1/n : n \\in \\mathbb{N}\\} tem \\inf igual a 0, mas nenhum mínimo, o exemplo clássico de por que a análise precisa de \\inf em vez de \\min. O comando compõe “inf” em tipo reto com espaçamento de operador e limites embaixo em exibição, então \\inf_{n \\ge 1} a_n fica correto num ambiente de equação. Um deslize comum é confundir \\inf com \\infty, que é o símbolo de infinito. Entre os operadores relacionados estão \\liminf, que já existe como comando, e o ínfimo essencial, que você mesmo definiria, por exemplo com \\operatorname*{ess\\,inf}.",
  },
  "supremum": {
    name: "Supremo",
    meaning: "Supremo: a menor cota superior de um conjunto, central para a completude dos reais e para definições de normas.",
    usage: "Normas de operadores escrevem-se \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|, e a norma uniforme de uma função é \\sup_x |f(x)|. O comando coloca o subscrito embaixo em modo de exibição e à direita no texto corrido, assim como \\lim. Use \\limsup para o limite superior em vez de combinar \\lim e \\sup à mão, e lembre que \\sup existe para todo subconjunto não vazio e limitado dos reais, enquanto \\max pode não existir. Quando a condição do subscrito for longa, empilhe linhas com \\substack{...} sob o operador em vez de espremer um subscrito largo.",
  },
  "least-upper-bound": {
    name: "Menor cota superior",
    meaning: "Abreviatura “lub” de menor cota superior (do inglês least upper bound), sinônimo antigo de supremo, comum em teoria da ordem e reticulados.",
    usage: "Livros sobre conjuntos parcialmente ordenados e reticulados às vezes escrevem \\text{lub}\\, S em vez de \\sup S, e o supremo a \\vee b é o lub de um par. Compô-lo com \\text funciona, mas tem duas desvantagens: \\text copia a fonte ao redor, então dentro de um teorema em itálico fica itálico, e não dá espaçamento de operador antes do argumento. A abordagem mais limpa é \\operatorname{lub} ou uma linha no preâmbulo \\DeclareMathOperator{\\lub}{lub}, que o mantém reto e espaçado como \\sup. Use a declaração com asterisco se quiser os subscritos embaixo em exibições.",
  },
  "greatest-lower-bound": {
    name: "Maior cota inferior",
    meaning: "Abreviatura “glb” de maior cota inferior (do inglês greatest lower bound), o nome da teoria da ordem para o ínfimo de um conjunto.",
    usage: "Em teoria dos reticulados, o ínfimo a \\wedge b é definido como o glb de a e b, e os reticulados completos são aqueles em que todo subconjunto tem glb e lub. Como o LaTeX não tem um \\glb embutido, escreve-se \\text{glb}, que sai reto no texto normal, mas herda o itálico dentro de ambientes de teorema e não tem o espaço fino que um operador deveria ter. Prefira \\operatorname{glb} ou \\DeclareMathOperator{\\glb}{glb} para resultados consistentes. Se seus leitores vêm da análise e não da teoria da ordem, \\inf pode ser a notação mais familiar para o mesmo conceito.",
  },
};

export default text;
