import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "Editor LaTeX online: compilador LaTeX grátis e visualizador de PDF",
    intro: (
      <>
        <p>
          Esta página reúne um editor, um compilador e um visualizador LaTeX online. Escreva o
          documento à esquerda e o PDF compilado aparece à direita. A compilação roda em uma
          distribuição TeX Live completa no serviço de compilação do Octree: amsmath, TikZ,
          pgfplots, beamer, geometry, hyperref e o restante do TeX Live funcionam sem instalar
          nada.
        </p>
        <p>
          O pdfLaTeX é o motor padrão; o serviço muda para XeLaTeX quando você usa fontspec e
          fontes do sistema, e para LuaLaTeX quando há código Lua. Não é preciso ter conta. O
          editor comporta um único arquivo: imagens, arquivos .bib e projetos com vários arquivos
          ficam no editor do Octree, onde uma conta gratuita também salva o seu trabalho. O shell
          escape está desativado, então o minted não está disponível.
        </p>
      </>
    ),
    stepsHeading: "Como usar o editor LaTeX online",
    steps: [
      {
        title: "Escreva ou cole um documento completo",
        body: (
          <>
            Substitua o exemplo pelo seu próprio código LaTeX, de <Cmd>\documentclass</Cmd> até{" "}
            <Cmd>\end{"{document}"}</Cmd>. O editor destaca a sintaxe LaTeX e completa os comandos
            mais comuns.
          </>
        ),
      },
      {
        title: "Veja o PDF se atualizar",
        body: "A visualização é recompilada cerca de um segundo depois da última tecla digitada. Se a compilação falhar, uma janela mostra a mensagem de erro e o log.",
      },
      {
        title: "Guarde o resultado",
        body: "Clique em “Abrir no Octree” para salvar o documento como projeto, adicionar imagens e arquivos .bib ou pedir à IA que faça alterações.",
      },
    ],
    tipsHeading: "Erros comuns de LaTeX e como corrigi-los",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            Um pacote carregado com <Cmd>\usepackage</Cmd> está com o nome errado ou não faz
            parte do TeX Live. Confira o nome; todos os pacotes do CTAN incluídos no TeX Live
            estão instalados.
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            Um comando que só funciona em modo matemático, como <Cmd>^</Cmd>, <Cmd>_</Cmd> ou{" "}
            <Cmd>\alpha</Cmd>, aparece fora dele. Coloque-o entre <Cmd>$...$</Cmd> ou escape um
            sublinhado literal com <Cmd>\_</Cmd>.
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            Um comando está escrito errado ou o pacote dele não foi carregado, por exemplo{" "}
            <Cmd>\mathbb</Cmd> sem <Cmd>amssymb</Cmd>. O log indica a linha do problema.
          </>
        ),
      },
      {
        title: "Não encontra o erro",
        body: "Clique em “Fix this error with AI in Octree” na janela de erro. O Octree abre o documento com o log de erros anexado, e a IA sabe exatamente o que corrigir.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre o editor LaTeX online",
    faq: [
      {
        question: "Dá para editar LaTeX online sem instalar nada?",
        answer:
          "Sim. Digite ou cole LaTeX no editor desta página e o PDF aparece ao lado. A compilação roda em uma instalação completa do TeX Live nos servidores do Octree, então você não precisa de uma distribuição TeX local.",
      },
      {
        question: "Este visualizador LaTeX é gratuito? Preciso de conta?",
        answer:
          "É gratuito e não exige conta. Nada é salvo nesta página: copie o código antes de sair ou abra-o no Octree com uma conta gratuita para guardá-lo como projeto.",
      },
      {
        question: "Qual compilador LaTeX a visualização online usa?",
        answer:
          "pdfLaTeX por padrão. O serviço de compilação muda para XeLaTeX quando o documento carrega fontspec, polyglossia, unicode-math ou xeCJK, e para LuaLaTeX quando usa \\directlua ou luacode.",
      },
      {
        question: "Posso enviar imagens ou uma bibliografia .bib?",
        answer:
          "Não nesta página: ela compila um único arquivo main.tex. Um ambiente thebibliography funciona, mas arquivos de imagem e arquivos .bib exigem o editor do Octree, que trabalha com projetos de vários arquivos.",
      },
      {
        question: "Por que um pacote como o minted não compila?",
        answer:
          "O minted e outros pacotes que precisam de shell escape (\\write18) estão desativados por segurança. Para código, use o pacote listings ou verbatim.",
      },
    ],
    related: (
      <>
        Começando no LaTeX? Leia a{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introdução ao LaTeX
        </IntroLink>
        , navegue pelos <IntroLink href="/templates">modelos LaTeX</IntroLink> prontos para usar
        ou descreva um documento e deixe o{" "}
        <IntroLink href="/tools/ai-latex-generator">gerador de LaTeX com IA</IntroLink> escrevê-lo.
      </>
    ),
  },

  "math-to-latex": {
    heading: "Converter matemática manuscrita em LaTeX online",
    intro: (
      <>
        <p>
          Este conversor de matemática para LaTeX transforma uma imagem de matemática manuscrita
          ou impressa em código LaTeX. Envie uma foto, um escaneamento ou uma captura de tela de
          uma equação: um modelo de IA com visão transcreve frações, raízes, somatórios,
          integrais, matrizes e letras gregas em notação amsmath padrão.
        </p>
        <p>
          O resultado é um documento LaTeX completo, que a visualização compila com pdfLaTeX em
          uma distribuição TeX Live completa no serviço de compilação do Octree. Não é preciso ter
          conta. A ferramenta funciona melhor com uma equação ou poucas linhas por vez; páginas
          longas de cálculos devem ser divididas em várias imagens.
        </p>
      </>
    ),
    stepsHeading: "Como converter matemática em LaTeX",
    steps: [
      {
        title: "Tire uma imagem nítida",
        body: "Fotografe ou capture a tela com a matemática: uma linha do caderno, um quadro branco, uma anotação no tablet ou uma fórmula de livro. Recorte só a parte que interessa.",
      },
      {
        title: "Envie a imagem",
        body: "Solte o arquivo JPEG ou PNG na área de upload. O LaTeX vai aparecendo no painel de código enquanto a IA lê a imagem.",
      },
      {
        title: "Confira a visualização e copie",
        body: "Abra a aba de visualização para comparar o resultado compilado com o original e depois copie o código, baixe-o ou abra-o no Octree para continuar editando.",
      },
    ],
    tipsHeading: "Dicas para conversões precisas",
    tips: [
      {
        title: "Uma expressão ou um bloco curto por imagem",
        body: "O conversor foi pensado para equações e deduções curtas; divida uma página inteira de cálculos em vários envios.",
      },
      {
        title: "Escreva com clareza e bom contraste",
        body: "Tinta escura em papel liso, iluminação uniforme e foto bem de frente reduzem confusões entre símbolos como 1 e l, ou x e ×.",
      },
      {
        title: "Sempre confira os símbolos",
        body: "O reconhecimento de escrita à mão comete erros. Verifique índices, expoentes e letras gregas na visualização antes de usar o código.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre matemática para LaTeX",
    faq: [
      {
        question: "Como converto matemática manuscrita em LaTeX?",
        answer:
          "Envie uma foto ou um escaneamento da matemática manuscrita em JPEG ou PNG. A IA lê a imagem e devolve o LaTeX em um documento completo que carrega amsmath e amssymb, e a visualização compila o resultado para você conferir cada símbolo.",
      },
      {
        question: "Este conversor de LaTeX online é gratuito?",
        answer:
          "Sim. Converter, visualizar, copiar e baixar são gratuitos e não exigem conta. Uma conta gratuita do Octree só é necessária para salvar o resultado como projeto.",
      },
      {
        question: "Funciona com escrita à mão no iPad ou em tablet?",
        answer:
          "Sim. Exporte a página ou uma captura de tela do GoodNotes, Notability, OneNote ou de um aplicativo parecido como imagem, recorte a equação e envie.",
      },
      {
        question: "Posso digitar a matemática em vez de enviar uma imagem?",
        answer:
          "Esta página converte imagens. Para converter matemática digitada ou uma descrição em linguagem comum, como “integral de x ao quadrado de 0 a 1”, use o conversor de equações para LaTeX.",
      },
      {
        question: "O LaTeX gerado compila no Overleaf?",
        answer:
          "Sim. O resultado usa a notação amsmath padrão e compila com pdfLaTeX em qualquer distribuição TeX, incluindo Overleaf e Octree. A visualização desta página compila o código com um TeX Live completo.",
      },
    ],
    related: (
      <>
        Entenda como a matemática funciona em LaTeX no{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guia de expressões matemáticas
        </IntroLink>
        , converta matemática digitada com o{" "}
        <IntroLink href="/tools/equation-to-latex">conversor de equações para LaTeX</IntroLink> ou
        procure um comando na{" "}
        <IntroLink href="/symbols">referência de símbolos LaTeX</IntroLink>.
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "Converter PDF para LaTeX online",
    intro: (
      <>
        <p>
          Um PDF contém as páginas finais, não o LaTeX que as gerou; por isso, converter PDF para
          LaTeX significa recriar o texto e a matemática como código-fonte editável. O caminho
          depende da origem do PDF: artigos do arXiv costumam vir com o código-fonte original, e
          para todo o resto o conversor desta página recria o LaTeX com IA.
        </p>
        <p>
          Envie um PDF de até 3 MB e 20 páginas e receba um documento LaTeX completo, compilado em
          uma distribuição TeX Live completa no serviço de compilação do Octree para que você possa
          conferi-lo. Não é preciso ter conta. O resultado não mantém as fontes, o layout nem as
          imagens originais, e documentos longos convertem melhor uma seção por vez.
        </p>
      </>
    ),
    stepsHeading: "Como converter PDF para LaTeX",
    steps: [
      {
        title: "Confira o arXiv primeiro",
        body: "Se o PDF for um artigo do arXiv, o código-fonte LaTeX original dos autores geralmente está disponível. Baixe-o pelo link “TeX Source” na página do artigo no arXiv em vez de converter o PDF.",
      },
      {
        title: "Envie o PDF",
        body: "Solte um PDF de até 3 MB e 20 páginas no conversor acima. A IA lê o texto e a matemática e devolve um documento LaTeX completo que carrega amsmath; a visualização o compila para você comparar com o original.",
      },
      {
        title: "Converta arquivos longos em partes",
        body: "Para um PDF longo, extraia só as páginas de que precisa, ou faça uma captura de tela de um bloco de equações e use o conversor de matemática para LaTeX.",
      },
      {
        title: "Junte e edite",
        body: "Cole as partes no editor LaTeX online para corrigi-las com visualização do PDF em tempo real, ou abra-as no Octree para salvar o documento como projeto.",
      },
    ],
    tipsHeading: "Dicas antes de converter",
    tips: [
      {
        title: "As figuras não são extraídas",
        body: "As imagens e os gráficos do PDF não são recriados em LaTeX. Insira-os de novo com \\includegraphics ou redesenhe os diagramas com a ferramenta de imagem para TikZ.",
      },
      {
        title: "Revise a matemática",
        body: "O reconhecimento erra em fórmulas e tabelas densas. Compare índices, sinais e alinhamentos com o original.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre PDF para LaTeX",
    faq: [
      {
        question: "Como converto um PDF para LaTeX?",
        answer:
          "Um PDF não contém o código-fonte LaTeX, então o texto e a matemática precisam ser recriados. Para artigos do arXiv, baixe o código-fonte original pelo link “TeX Source” na página do artigo no arXiv. Para outros PDFs, envie o arquivo (até 3 MB e 20 páginas) para o conversor desta página e compare a visualização compilada com o original.",
      },
      {
        question: "Converter PDF para LaTeX é gratuito?",
        answer:
          "Sim. O conversor de PDF, o conversor de matemática para LaTeX e o editor LaTeX online não exigem conta. Uma conta gratuita do Octree só é necessária para salvar o resultado como projeto.",
      },
      {
        question: "Posso converter um artigo inteiro ou uma tese?",
        answer:
          "O conversor aceita PDFs de até 3 MB e 20 páginas, e o tamanho do resultado é limitado em cada conversão, então converta uma tese capítulo por capítulo. Para artigos publicados no arXiv, baixe o código-fonte original.",
      },
      {
        question: "O resultado mantém o layout exato do PDF?",
        answer:
          "Não. O texto, os títulos e a matemática são recriados como LaTeX limpo e editável; fontes, espaçamentos, layout e imagens não são copiados.",
      },
      {
        question: "Dá para converter um PDF escaneado?",
        answer:
          "Escaneamentos nítidos de páginas impressas ou escritas à mão com capricho podem funcionar. Escaneamentos em baixa resolução, tortos ou com pouco contraste geram erros de símbolos, então confira o resultado com atenção.",
      },
    ],
    related: (
      <>
        Converta capturas de tela de equações com o{" "}
        <IntroLink href="/tools/math-to-latex">conversor de matemática para LaTeX</IntroLink>, edite
        o resultado no <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink> ou
        leia o{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guia de matemática em LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "image-to-tikz": {
    heading: "Converter imagem em TikZ: transforme um diagrama em LaTeX editável",
    intro: (
      <>
        <p>
          Este conversor de imagem para TikZ transforma a imagem de um diagrama em código TikZ que
          você pode editar e compilar. Envie um fluxograma, um diagrama de blocos, uma árvore, um
          grafo ou um esboço: um modelo de IA com visão o reconstrói como nós e caminhos em um
          documento LaTeX independente, mantendo os rótulos e as cores sempre que possível.
        </p>
        <p>
          A visualização compila o resultado com pdfLaTeX em uma distribuição TeX Live completa no
          serviço de compilação do Octree. Não é preciso ter conta. O resultado é uma reprodução
          fiel, não um decalque pixel a pixel: conte com alguns ajustes manuais nas figuras que
          precisam ficar idênticas.
        </p>
      </>
    ),
    stepsHeading: "Como converter uma imagem em TikZ",
    steps: [
      {
        title: "Envie o diagrama",
        body: "Solte uma captura de tela, uma exportação ou uma foto do diagrama em JPEG, PNG, GIF ou WebP, com até 20 MB.",
      },
      {
        title: "Deixe a IA redesenhá-lo em TikZ",
        body: (
          <>
            O modelo lê as formas, as setas, os rótulos e as cores e escreve um documento LaTeX
            independente com um <Cmd>tikzpicture</Cmd>, usando bibliotecas como positioning,
            arrows e shapes.geometric.
          </>
        ),
      },
      {
        title: "Compare e refine",
        body: "Abra a aba de visualização para comparar o diagrama compilado com a sua imagem. Copie ou baixe o código, ou abra-o no Octree para ajustá-lo com a IA.",
      },
    ],
    tipsHeading: "Dicas para uma conversão melhor",
    tips: [
      {
        title: "Recorte só o diagrama",
        body: "Remova legendas, texto da página e outras figuras; um único diagrama por imagem dá os melhores resultados.",
      },
      {
        title: "Prefira fontes limpas",
        body: "Exportações e capturas de tela funcionam melhor que fotos. Para um esboço à mão, use tinta escura em papel liso e fotografe bem de frente.",
      },
      {
        title: "Gráficos de dados ficam com o pgfplots",
        body: "O conversor redesenha formas; ele não recupera pontos de dados. Para gráficos feitos a partir de números, use o gerador de pgfplots.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre imagem para TikZ",
    faq: [
      {
        question: "Como converto uma imagem em TikZ?",
        answer:
          "Envie o diagrama em JPEG, PNG, GIF ou WebP. A IA devolve um documento LaTeX completo com um tikzpicture que o redesenha, e a visualização compila esse código para você comparar com o original.",
      },
      {
        question: "O código TikZ é uma cópia exata da minha imagem?",
        answer:
          "Não. É uma reprodução com nós e caminhos editáveis, não um decalque. O layout, os rótulos e as setas costumam ser mantidos, mas espaçamentos, curvas e cores podem variar; espere ajustar coordenadas em uma figura para publicação.",
      },
      {
        question: "Quais diagramas convertem melhor?",
        answer:
          "Fluxogramas, diagramas de blocos, árvores, grafos, máquinas de estados e figuras geométricas simples. Figuras densas com muitos elementos sobrepostos, fotografias e gráficos de dados convertem mal.",
      },
      {
        question: "Posso converter um esboço à mão ou uma foto de quadro branco?",
        answer:
          "Sim, desde que os traços e os rótulos estejam legíveis. Recorte a foto no diagrama e cuide da iluminação; lápis fraco ou um ângulo torto reduzem a precisão.",
      },
      {
        question: "O conversor de imagem para TikZ é gratuito?",
        answer:
          "Sim, e não exige conta. O código gerado compila com pdfLaTeX e TeX Live, então funciona no Overleaf, no Octree ou em uma instalação LaTeX local.",
      },
    ],
    related: (
      <>
        Aprenda os comandos do resultado com o{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guia de TikZ
        </IntroLink>
        . Não tem uma imagem de partida? Descreva o diagrama para o{" "}
        <IntroLink href="/tools/tikz-generator">gerador de TikZ</IntroLink> ou trace dados com o{" "}
        <IntroLink href="/tools/pgfplots-generator">gerador de pgfplots</IntroLink>.
      </>
    ),
  },

  "tikz-generator": {
    heading: "Gerador de TikZ online: crie diagramas TikZ a partir de uma descrição",
    intro: (
      <>
        <p>
          Este gerador de TikZ escreve código TikZ a partir de uma descrição do diagrama em
          linguagem comum. Ele produz um documento LaTeX completo com um tikzpicture comentado e
          as bibliotecas necessárias, como positioning, arrows.meta e shapes, para você começar de
          uma base que funciona em vez de uma página em branco.
        </p>
        <p>
          A visualização compila o código com pdfLaTeX em uma distribuição TeX Live completa no
          serviço de compilação do Octree. Não é preciso ter conta. Aqui o código gerado é somente
          leitura; para um editor TikZ online com visualização em tempo real, cole-o no editor
          LaTeX ou abra-o no Octree, onde uma conta gratuita o salva.
        </p>
      </>
    ),
    stepsHeading: "Como criar um diagrama TikZ online",
    steps: [
      {
        title: "Descreva o diagrama",
        body: "Diga quais são os nós, como se conectam e qual é o layout, por exemplo “um fluxograma com Início, Processamento e Fim ligados da esquerda para a direita”.",
      },
      {
        title: "Gere o TikZ",
        body: "A IA escreve um documento LaTeX completo com um tikzpicture comentado e as bibliotecas TikZ de que ele precisa.",
      },
      {
        title: "Visualize e edite",
        body: "Confira o diagrama compilado na aba de visualização. Para editar o código à mão, cole-o no editor LaTeX online ou abra-o no Octree.",
      },
    ],
    tipsHeading: "Dicas para diagramas TikZ melhores",
    tips: [
      {
        title: "Seja específico",
        body: "Informe os rótulos dos nós, as formas, a direção das setas e as cores. Dizer “da esquerda para a direita” ou “de cima para baixo” resolve a maioria dos problemas de layout.",
      },
      {
        title: "Avance em pequenos passos",
        body: "Gere primeiro uma versão simples e depois peça uma alteração por vez no Octree, em vez de reescrever o pedido do zero.",
      },
      {
        title: "Use pgfplots para gráficos de funções",
        body: "Para eixos, curvas de funções e gráficos de dados, o gerador de pgfplots produz um código mais limpo que TikZ puro.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre o gerador de TikZ",
    faq: [
      {
        question: "Dá para usar TikZ online sem instalar o LaTeX?",
        answer:
          "Sim. O gerador de TikZ escreve o código e o compila nos servidores do Octree com uma distribuição TeX Live completa, então a visualização do diagrama funciona no navegador sem instalar nada.",
      },
      {
        question: "Existe um editor TikZ online com visualização em tempo real?",
        answer:
          "O código gerado é somente leitura nesta página. Cole-o no editor LaTeX online gratuito em tools.useoctree.com/tools/latex-preview, que recompila enquanto você digita, ou abra-o no Octree para editá-lo com IA e salvá-lo como projeto.",
      },
      {
        question: "Que tipos de diagramas TikZ ele gera?",
        answer:
          "Fluxogramas, árvores, grafos e redes, diagramas de blocos, máquinas de estados, esboços de redes neurais, diagramas de Venn, diagramas comutativos e figuras geométricas. Desenhos técnicos muito detalhados geralmente precisam de ajustes manuais depois.",
      },
      {
        question: "O gerador de TikZ é gratuito?",
        answer:
          "Sim. Gerar, visualizar, copiar e baixar o código não exige conta. Uma conta gratuita do Octree só é necessária para salvar o diagrama como projeto.",
      },
      {
        question: "O código funciona no Overleaf?",
        answer:
          "Sim. O resultado é um documento LaTeX padrão que carrega o tikz e bibliotecas TikZ padrão e compila com pdfLaTeX, então funciona no Overleaf, no Octree e em distribuições TeX locais.",
      },
    ],
    related: (
      <>
        Aprenda a sintaxe no{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guia de TikZ
        </IntroLink>
        , edite código TikZ no <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>{" "}
        ou transforme uma imagem existente em código com{" "}
        <IntroLink href="/tools/image-to-tikz">imagem para TikZ</IntroLink>.
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "Gerador de LaTeX com IA: transforme uma descrição em código LaTeX",
    intro: (
      <>
        <p>
          Este gerador de LaTeX com IA escreve código LaTeX a partir de uma descrição em linguagem
          comum. Peça uma apresentação beamer, um relatório de laboratório, um artigo em duas
          colunas ou uma tabela: ele devolve um documento completo com a classe de documento
          certa, pacotes como amsmath, amssymb e graphicx e uma estrutura de seções para
          preencher.
        </p>
        <p>
          A visualização compila o código com uma distribuição TeX Live completa no serviço de
          compilação do Octree: pdfLaTeX por padrão, XeLaTeX ou LuaLaTeX quando o código exige.
          Não é preciso ter conta; cadastre-se gratuitamente só se quiser salvar o resultado como
          projeto.
        </p>
      </>
    ),
    stepsHeading: "Como gerar LaTeX com IA",
    steps: [
      {
        title: "Descreva o que você precisa",
        body: "Escreva uma ou duas frases: o tipo de documento, as seções e qualquer elemento especial, como uma tabela, uma equação ou um layout em duas colunas.",
      },
      {
        title: "Gere o código LaTeX",
        body: "Clique em “Gerar LaTeX”. O código vai aparecendo como um documento completo, com a classe de documento, os pacotes e a estrutura já prontos.",
      },
      {
        title: "Visualize e depois copie ou continue editando",
        body: "Passe para a aba de visualização para ver o PDF compilado. Copie o código, baixe-o em .tex ou PDF, ou abra-o no Octree para continuar trabalhando nele.",
      },
    ],
    tipsHeading: "Dicas para um resultado LaTeX melhor",
    tips: [
      {
        title: "Diga a classe de documento",
        body: "Especifique article, report, slides beamer ou letter e liste as seções que deseja; um pedido vago gera um documento genérico.",
      },
      {
        title: "Peça uma coisa de cada vez",
        body: "Uma única tabela, um layout de figuras ou um conjunto de slides sai mais limpo que uma tese inteira em um só pedido. Pedidos longos podem ser cortados.",
      },
      {
        title: "Substitua o texto de exemplo",
        body: "O gerador escreve a estrutura e um conteúdo de exemplo, não a sua pesquisa. Confira cada equação e nunca mantenha uma citação que você não verificou.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre o gerador de LaTeX com IA",
    faq: [
      {
        question: "O que é um gerador de LaTeX com IA?",
        answer:
          "Ele transforma uma descrição em linguagem comum em código LaTeX. Você descreve o documento e o gerador escreve um arquivo .tex completo com a classe de documento, os pacotes necessários, as seções e um conteúdo de exemplo para você editar.",
      },
      {
        question: "O gerador de código LaTeX é gratuito?",
        answer:
          "Sim. Você pode gerar, visualizar, copiar e baixar LaTeX sem conta. Uma conta gratuita do Octree só é necessária se quiser salvar o documento como projeto e continuar editando.",
      },
      {
        question: "O LaTeX gerado compila?",
        answer:
          "A visualização o compila com um TeX Live completo no serviço de compilação do Octree (pdfLaTeX por padrão, XeLaTeX ou LuaLaTeX quando o código precisa). Se falhar, a janela de erro oferece abrir o documento no Octree para que a IA corrija o erro a partir do log.",
      },
      {
        question: "Ele consegue escrever um artigo inteiro para mim?",
        answer:
          "Ele escreve o esqueleto de um artigo: a classe de documento, os pacotes, as seções e um conteúdo de exemplo, como uma equação ou uma tabela típica. Esse conteúdo é provisório, e documentos muito longos podem ser cortados; trate o resultado como ponto de partida.",
      },
      {
        question: "Que tipos de documentos ele gera?",
        answer:
          "Artigos, relatórios, apresentações beamer, cartas, currículos, listas de exercícios, tabelas e equações avulsas são pedidos comuns. Se o documento precisar de um pacote específico, mencione-o na descrição.",
      },
    ],
    related: (
      <>
        Quer entender o código que ele escreve? Leia a{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introdução ao LaTeX
        </IntroLink>{" "}
        ou cole qualquer código LaTeX no{" "}
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink> para editá-lo com
        visualização do PDF em tempo real.
      </>
    ),
  },

  "table-to-latex": {
    heading: "Converter tabela em LaTeX: gerador de tabelas LaTeX a partir de CSV",
    intro: (
      <>
        <p>
          Este gerador de tabelas LaTeX transforma um arquivo CSV em uma tabela LaTeX formatada.
          Envie um .csv exportado do Excel, do Google Sheets ou de qualquer planilha: um modelo de
          IA (OpenAI gpt-4o-mini) escreve um documento LaTeX completo em torno de um ambiente{" "}
          <Cmd>tabular</Cmd>, carrega o booktabs para linhas horizontais limpas e ajusta a linha
          de cabeçalho e o alinhamento das colunas. É o jeito mais rápido de converter Excel em
          LaTeX: salve a planilha como CSV primeiro, porque arquivos .xlsx não são lidos
          diretamente.
        </p>
        <p>
          A aba “Visualização” compila a tabela com uma distribuição TeX Live completa no serviço
          de compilação do Octree, para você ver o resultado antes de exportar o arquivo .tex, um
          PDF ou uma imagem JPG. O arquivo é lido no seu navegador e enviado como texto, e cada
          conversão devolve cerca de 2.000 tokens de LaTeX, o suficiente para uma tabela de
          resultados com algumas dezenas de linhas. A ferramenta é gratuita e não exige conta.
        </p>
      </>
    ),
    stepsHeading: "Como converter um arquivo CSV em tabela LaTeX",
    steps: [
      {
        title: "Salve a tabela como CSV",
        body: "No Excel, escolha Arquivo > Salvar como > CSV UTF-8 (delimitado por vírgulas); no Google Sheets, Arquivo > Fazer download > Valores separados por vírgula. Mantenha o cabeçalho na primeira linha.",
      },
      {
        title: "Envie o arquivo .csv",
        body: "Solte o arquivo na área de upload ou clique para escolhê-lo. A tabela LaTeX vai aparecendo na aba “Código” como um documento completo.",
      },
      {
        title: "Visualize e exporte",
        body: "Abra a aba “Visualização” para compilar a tabela em PDF e depois exporte o arquivo .tex, o PDF ou uma imagem JPG, ou abra-a no Octree para colocar a tabela no seu artigo.",
      },
    ],
    tipsHeading: "Problemas comuns com tabelas e como corrigi-los",
    tips: [
      {
        title: "Caracteres especiais quebram a tabela",
        body: (
          <>
            <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> e <Cmd>_</Cmd> nas células
            precisam ser escapados como <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>,{" "}
            <Cmd>\#</Cmd> e <Cmd>\_</Cmd>. Se a visualização falhar, o log indica a linha a
            corrigir.
          </>
        ),
      },
      {
        title: "A tabela sai da página",
        body: (
          <>
            Tabelas largas ultrapassam a largura do texto. Use páginas em paisagem, uma fonte
            menor como <Cmd>\small</Cmd> ou coloque o tabular dentro de{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> do graphicx.
          </>
        ),
      },
      {
        title: "Planilhas grandes são cortadas",
        body: "Cada conversão devolve cerca de 2.000 tokens de LaTeX, o equivalente a uma tabela de algumas dezenas de linhas. Divida planilhas maiores em vários arquivos CSV ou mantenha só as linhas que entram no artigo.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre o gerador de tabelas LaTeX",
    faq: [
      {
        question: "Como converto uma tabela do Excel em LaTeX?",
        answer:
          "Salve a planilha como arquivo CSV no Excel (Arquivo > Salvar como > CSV) e envie o .csv aqui. A ferramenta não lê arquivos .xlsx diretamente, mas uma exportação CSV da planilha tem os mesmos valores das células. Você recebe uma tabela booktabs dentro de um documento LaTeX completo, que pode visualizar, baixar e colar no seu artigo.",
      },
      {
        question: "Quais formatos de arquivo o gerador de tabelas LaTeX aceita?",
        answer:
          "Somente arquivos .csv. Excel, Google Sheets, LibreOffice Calc e Numbers exportam planilhas como CSV. JSON, arquivos .xlsx e tabelas coladas não são aceitos nesta página.",
      },
      {
        question: "O resultado usa booktabs?",
        answer:
          "Sim. O documento gerado carrega o booktabs, e a tabela normalmente usa as linhas \\toprule, \\midrule e \\bottomrule dele. Copie o ambiente tabular ou table para o seu documento e adicione \\usepackage{booktabs} ao preâmbulo.",
      },
      {
        question: "O conversor de CSV para LaTeX é gratuito?",
        answer:
          "Sim, é gratuito e não exige conta. A tabela é escrita por um modelo de IA (OpenAI gpt-4o-mini), então confira os números e o alinhamento das colunas na visualização antes de usá-la.",
      },
    ],
    related: (
      <>
        Aprenda tabular, multirow e os tipos de coluna no{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guia de tabelas LaTeX
        </IntroLink>
        , trace os mesmos dados com o{" "}
        <IntroLink href="/tools/pgfplots-generator">gerador de PGFPlots</IntroLink> ou veja todos
        os <IntroLink href="/tools/latex-converter">conversores LaTeX</IntroLink>.
      </>
    ),
  },

  "equation-to-latex": {
    heading: "Converter equação em LaTeX: como o conversor funciona",
    intro: (
      <p>
        Converta qualquer equação matemática em LaTeX em três passos. A ferramenta aceita equações
        digitadas, capturas de tela e equações manuscritas, e gera LaTeX para colar direto em um
        artigo, um trabalho ou suas anotações de aula.
      </p>
    ),
    stepsHeading: "Converta uma equação em LaTeX em três passos",
    steps: [
      {
        title: "Digite ou envie a equação",
        body: "Digite a equação em linguagem comum (“integral de x ao quadrado de 0 a 1”), cole-a em qualquer notação ou solte uma imagem: uma captura de uma fórmula de livro, uma foto do quadro branco ou uma equação escrita à mão no iPad ou no celular.",
      },
      {
        title: "Converta para LaTeX",
        body: "Clique em “Converter para LaTeX”. A IA lê a equação, reconhece frações, raízes, somatórios, integrais, matrizes e letras gregas e escreve LaTeX padrão com amsmath, que compila no Overleaf, no Octree ou em qualquer distribuição TeX.",
      },
      {
        title: "Confira a visualização e copie o código",
        body: "A equação renderizada aparece ao lado do código para você conferir cada símbolo. Copie o LaTeX, baixe-o como arquivo .tex ou PDF, ou abra-o no Octree para continuar editando.",
      },
    ],
    tipsHeading: "Para que serve?",
    tips: [
      {
        title: "Tarefas e listas de exercícios",
        body: "Transforme uma solução escrita à mão em um trabalho digitado sem precisar aprender todos os comandos LaTeX antes.",
      },
      {
        title: "Artigos científicos e teses",
        body: "Leve equações das suas anotações, slides ou PDFs antigos para o manuscrito como LaTeX limpo e editável.",
      },
      {
        title: "Anotações de aula",
        body: "Fotografe o quadro ou o caderno depois da aula e converta cada fórmula em LaTeX para as suas anotações.",
      },
      {
        title: "Capturas de fórmulas de livros",
        body: "Envie um recorte de uma página de livro ou de revista e receba o LaTeX da fórmula em vez de digitá-la de novo.",
      },
      {
        title: "Escrita à mão no iPad ou tablet",
        body: "Exporte suas equações manuscritas do GoodNotes, Notability ou OneNote como imagens e converta-as em um único passo.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre equação para LaTeX",
    faq: [
      {
        question: "Como converto uma equação em LaTeX?",
        answer:
          "Digite a equação em texto simples ou notação matemática, ou envie uma imagem dela, e clique em “Converter para LaTeX”. O conversor devolve código LaTeX com amsmath e mostra uma visualização renderizada para você conferir antes de copiá-lo para o documento.",
      },
      {
        question: "Posso converter uma equação manuscrita em LaTeX?",
        answer:
          "Sim. Envie uma foto ou um escaneamento de uma equação escrita à mão em JPEG, PNG, GIF ou WebP, incluindo escrita exportada de um aplicativo de iPad ou tablet. Imagens nítidas e com bom contraste, com uma equação por imagem, dão o LaTeX mais preciso.",
      },
      {
        question: "O conversor de equações para LaTeX é gratuito?",
        answer:
          "Sim. O conversor é gratuito e não exige conta. Você pode copiar o LaTeX, baixar um arquivo .tex ou um PDF compilado, ou abrir o resultado no editor do Octree.",
      },
      {
        question: "Quais pacotes LaTeX o resultado exige?",
        answer:
          "O código gerado usa notação matemática padrão, que compila com os pacotes amsmath, amssymb e amsfonts. Se você baixar o arquivo .tex, o preâmbulo já os inclui, e o resultado funciona no Overleaf e em todas as distribuições TeX comuns.",
      },
    ],
    related: (
      <>
        Procurando os comandos por trás do resultado? Consulte a{" "}
        <IntroLink href="/symbols">referência de símbolos LaTeX</IntroLink>. Matemática em texto
        simples pode ser digitada direto no campo acima; para continuar editando o resultado como
        documento completo, use o{" "}
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>.
      </>
    ),
  },

  "arxiv-to-latex": {
    heading: "arXiv para LaTeX: baixe o código-fonte LaTeX de qualquer artigo",
    intro: (
      <>
        <p>
          A maioria dos artigos do arXiv foi escrita em LaTeX, e o arXiv guarda o código-fonte
          enviado pelos autores: os arquivos .tex, a bibliografia, os arquivos de estilo e as
          figuras. Esta ferramenta busca esse código-fonte LaTeX do arXiv para você. Cole um
          identificador ou um link para navegar pelos arquivos, ler o arquivo .tex principal e
          baixar o código-fonte do arXiv em .zip, sem precisar descompactar um .tar.gz você mesmo.
        </p>
        <p>
          Os downloads vêm direto do serviço de e-prints do arXiv e nada é armazenado. São
          aceitos códigos-fonte de até 30 MB e 200 arquivos. Artigos enviados só em PDF não têm
          TeX para baixar; a ferramenta avisa e indica um conversor no lugar.
        </p>
      </>
    ),
    stepsHeading: "Como baixar o código-fonte TeX de um artigo do arXiv",
    steps: [
      {
        title: "Cole o identificador ou o link do arXiv",
        body: "Digite um identificador como 2401.12345, um identificador no formato antigo como hep-th/9711200 ou qualquer link arxiv.org/abs ou arxiv.org/pdf. Acrescente uma versão (2401.12345v2) para obter aquela revisão exata; sem versão, você recebe a mais recente.",
      },
      {
        title: "Navegue pelo código-fonte LaTeX",
        body: "A ferramenta baixa o e-print do artigo no arXiv, descompacta e lista todos os arquivos. O arquivo .tex principal, aquele que contém \\documentclass e \\begin{document}, abre no visualizador; clique em qualquer outro arquivo .tex, .bib ou .sty para lê-lo.",
      },
      {
        title: "Baixe ou edite",
        body: "Baixe o código-fonte do arXiv em .zip ou abra o arquivo principal no Octree com os arquivos de \\input e \\include incorporados. Depois envie as figuras do .zip para compilá-lo com as imagens.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre o código-fonte LaTeX de artigos do arXiv",
    faq: [
      {
        question: "Como baixo o código-fonte LaTeX de um artigo do arXiv?",
        answer:
          "Cole o identificador ou a URL do arXiv do artigo na ferramenta desta página. Ela busca no arXiv o código-fonte enviado pelos autores, lista todos os arquivos, mostra o arquivo .tex principal e permite baixar tudo em .zip. No arxiv.org, os mesmos arquivos ficam no link “TeX Source” da página de resumo do artigo, como um arquivo .tar.gz.",
      },
      {
        question: "Por que um artigo diz que não tem código-fonte LaTeX?",
        answer:
          "Alguns autores enviam só um PDF ao arXiv, então não há arquivo .tex para baixar. Para esses artigos, o conversor de PDF para LaTeX consegue recriar o texto e a matemática como LaTeX editável, mas não recupera o código-fonte original.",
      },
      {
        question: "Qual é o arquivo .tex principal?",
        answer:
          "Os códigos-fonte do arXiv costumam ter vários arquivos .tex. A ferramenta escolhe o que o arquivo 00README do arXiv indica como arquivo de nível superior, se existir; caso contrário, o arquivo que contém \\documentclass e \\begin{document} e que nenhum outro arquivo inclui com \\input. Seções carregadas com \\input ou \\include aparecem como arquivos separados na árvore.",
      },
      {
        question: "Posso reutilizar o código-fonte LaTeX de um artigo do arXiv?",
        answer:
          "O código-fonte é útil para ver como um artigo foi diagramado, conferir uma equação ou aproveitar uma macro. A reutilização do texto, das figuras ou do artigo inteiro depende da licença escolhida pelos autores no arXiv, indicada na página de resumo; em todo caso, cite os autores.",
      },
    ],
    related: (
      <>
        Sem código-fonte no arXiv? Experimente o{" "}
        <IntroLink href="/tools/pdf-to-latex">conversor de PDF para LaTeX</IntroLink>. Edite e
        compile o código no <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>{" "}
        ou conte as palavras com o{" "}
        <IntroLink href="/tools/latex-word-counter">contador de palavras LaTeX</IntroLink>.
      </>
    ),
  },

  "citation-generator": {
    heading: "Gerador de citações BibTeX para LaTeX",
    intro: (
      <>
        <p>
          Este gerador de citações BibTeX transforma os dados de um livro, artigo de periódico,
          trabalho de conferência ou página da web em uma entrada BibTeX para colar em um arquivo
          .bib e citar no LaTeX. Cole campos estruturados ou uma referência em texto livre: o
          gerador escreve uma entrada com tipo, chave de citação e os campos que conseguir
          identificar (author, title, year, journal ou booktitle, volume, pages, publisher e DOI).
        </p>
        <p>
          Um modelo de IA (OpenAI gpt-4o-mini) escreve as entradas a partir do texto colado. Ele
          não consulta o Crossref, o PubMed nem um catálogo de biblioteca, então um DOI ou uma URL
          sozinhos não garantem um resultado confiável. Informe o título e os autores e compare o
          resultado com a fonte. A ferramenta é gratuita, não exige conta e exporta um arquivo
          references.bib compatível com BibTeX, natbib e biblatex.
        </p>
      </>
    ),
    stepsHeading: "Como gerar uma citação BibTeX",
    steps: [
      {
        title: "Descreva a fonte",
        body: "Cole o título, os autores, o ano e o veículo (periódico, conferência ou editora) de um livro, artigo ou trabalho, em qualquer ordem ou como referência em texto livre. Você também pode incluir um DOI ou uma URL, mas informe todos os dados que tiver: o gerador não os busca.",
      },
      {
        title: "Gere a entrada BibTeX",
        body: (
          <>
            Clique em “Gerar BibTeX”. A IA escolhe o tipo de entrada (<Cmd>@article</Cmd>,{" "}
            <Cmd>@book</Cmd>, <Cmd>@inproceedings</Cmd> etc.), escreve uma chave de citação como{" "}
            <Cmd>goodfellow2016deep</Cmd> e preenche os campos que consegue identificar.
          </>
        ),
      },
      {
        title: "Confira e salve",
        body: (
          <>
            Compare os campos com a página da editora e depois copie a entrada ou clique em
            “Exportar como .bib” para baixar <Cmd>references.bib</Cmd>. A aba “Visualização” abre
            no Octree um documento de teste com natbib que cita todas as chaves.
          </>
        ),
      },
    ],
    tipsHeading: "Erros comuns de BibTeX e como corrigi-los",
    tips: [
      {
        title: "Citation undefined",
        body: (
          <>
            A chave usada em <Cmd>\cite{"{...}"}</Cmd> precisa ser idêntica à que vem depois de{" "}
            <Cmd>@article{"{"}</Cmd>, e o documento precisa ter{" "}
            <Cmd>\bibliography{"{references}"}</Cmd> com um estilo como{" "}
            <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Rode o BibTeX e depois o LaTeX duas vezes.
          </>
        ),
      },
      {
        title: "Nomes na ordem errada",
        body: (
          <>
            Separe os autores com <Cmd>and</Cmd>, não com vírgulas:{" "}
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>. Uma vírgula dentro de um nome
            indica a ordem Sobrenome, Nome.
          </>
        ),
      },
      {
        title: "As maiúsculas somem",
        body: (
          <>
            Muitos estilos passam os títulos para minúsculas. Coloque siglas e nomes próprios
            entre chaves, por exemplo <Cmd>{"{BERT}"}</Cmd> ou <Cmd>{"{Bayesian}"}</Cmd>, para
            manter as maiúsculas.
          </>
        ),
      },
    ],
    faqHeading: "Perguntas frequentes sobre o gerador de citações BibTeX",
    faq: [
      {
        question: "Como gero uma citação BibTeX?",
        answer:
          "Cole os dados da fonte (título, autores, ano, periódico ou editora) no campo e clique em “Gerar BibTeX”. A ferramenta devolve uma entrada BibTeX completa, com tipo de entrada, chave de citação e os campos correspondentes, que você pode copiar ou baixar como arquivo references.bib.",
      },
      {
        question: "Ele cria uma entrada BibTeX a partir de um DOI ou URL?",
        answer:
          "Você pode colar um DOI ou uma URL, mas o gerador não os consulta no Crossref nem na web: um modelo de IA escreve a entrada a partir do texto fornecido. Para um artigo conhecido, ele costuma preencher os campos corretamente, mas pode errar; confira cada campo ou cole o título, os autores e o veículo junto com o DOI.",
      },
      {
        question: "Ele formata citações em APA, MLA ou IEEE?",
        answer:
          "Ele gera apenas BibTeX. O estilo de citação é escolhido no documento LaTeX, por exemplo com \\bibliographystyle{IEEEtran} ou \\bibliographystyle{apalike}, ou com biblatex e style=apa, então a mesma entrada .bib pode ser impressa em qualquer estilo.",
      },
      {
        question: "O gerador de BibTeX é gratuito?",
        answer:
          "Sim. É gratuito e não exige conta. Nada é salvo nesta página, então copie a entrada ou exporte o arquivo .bib antes de sair.",
      },
    ],
    related: (
      <>
        Veja exemplos comentados no{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          guia de bibliografias LaTeX
        </IntroLink>
        , comece um artigo a partir dos <IntroLink href="/templates">modelos LaTeX</IntroLink> ou
        compile seu documento no{" "}
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>.
      </>
    ),
  },

  "html-to-latex": {
    heading: "Converter HTML para LaTeX online",
    intro: (
      <>
        <p>
          Este conversor de HTML para LaTeX transforma marcação web em um documento LaTeX completo
          e compilável. Cole HTML no editor: um modelo de IA (OpenAI gpt-4o-mini) associa cada
          elemento ao equivalente em LaTeX. Os títulos <Cmd>{"<h1>"}</Cmd> a{" "}
          <Cmd>{"<h3>"}</Cmd> viram seções, <Cmd>{"<ul>"}</Cmd> e <Cmd>{"<ol>"}</Cmd> viram
          itemize e enumerate, <Cmd>{"<table>"}</Cmd> vira tabular, e <Cmd>{"<strong>"}</Cmd>,{" "}
          <Cmd>{"<em>"}</Cmd>, <Cmd>{"<code>"}</Cmd> e os links viram os comandos LaTeX
          correspondentes, com amsmath, amssymb e hyperref no preâmbulo.
        </p>
        <p>
          A aba “Visualização” compila o resultado com uma distribuição TeX Live completa no
          serviço de compilação do Octree, para você ver o PDF antes de baixar o arquivo .tex. A
          ferramenta recebe marcação colada, não uma URL, e cada conversão devolve cerca de 2.000
          tokens de LaTeX, então páginas longas convertem melhor em várias partes. Ela é gratuita
          e não exige conta.
        </p>
      </>
    ),
    stepsHeading: "Como converter HTML para LaTeX",
    steps: [
      {
        title: "Cole o seu HTML",
        body: "Substitua o exemplo pela sua própria marcação: uma página completa, um trecho de artigo ou o código-fonte de uma tabela copiado de um site ou de uma exportação de CMS.",
      },
      {
        title: "Converta para LaTeX",
        body: (
          <>
            Clique em “Converter para LaTeX”. O LaTeX vai aparecendo na aba “Código” como um
            documento completo, de <Cmd>\documentclass{"{article}"}</Cmd> até{" "}
            <Cmd>\end{"{document}"}</Cmd>.
          </>
        ),
      },
      {
        title: "Visualize e exporte",
        body: "Abra a aba “Visualização” para compilar o documento em PDF e depois exporte-o como arquivo .tex ou PDF, ou abra-o no Octree para continuar editando.",
      },
    ],
    tipsHeading: "Dicas para uma conversão limpa",
    tips: [
      {
        title: "Tire o que o LaTeX não usa",
        body: "Remova scripts, estilos inline, navegação e anúncios antes de converter. O CSS aplicado aos parágrafos, como cores e fontes, não tem equivalente direto em LaTeX, e uma entrada mais curta deixa mais espaço para o conteúdo.",
      },
      {
        title: "Imagens viram marcadores de posição",
        body: (
          <>
            Uma tag <Cmd>{"<img>"}</Cmd> só pode virar uma linha <Cmd>\includegraphics</Cmd>; o
            arquivo de imagem em si não é baixado, então a visualização não consegue mostrá-lo.
            Adicione os arquivos no Octree ou comente essas linhas.
          </>
        ),
      },
      {
        title: "Caracteres especiais",
        body: (
          <>
            Se a compilação falhar em um símbolo, confira se <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>,{" "}
            <Cmd>#</Cmd> e <Cmd>_</Cmd> do texto foram escapados como <Cmd>\&amp;</Cmd>,{" "}
            <Cmd>\%</Cmd>, <Cmd>\#</Cmd> e <Cmd>\_</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "Perguntas frequentes sobre HTML para LaTeX",
    faq: [
      {
        question: "Como converto HTML para LaTeX?",
        answer:
          "Cole o HTML no editor desta página e clique em “Converter para LaTeX”. Os títulos viram comandos \\section, as listas viram itemize ou enumerate, as tabelas viram tabular, e negrito, itálico e links viram \\textbf, \\emph e \\href. Confira o resultado na aba “Visualização” e baixe o .tex ou o PDF.",
      },
      {
        question: "Esta ferramenta converte LaTeX para HTML?",
        answer:
          "Não, ela só converte HTML para LaTeX. Para ir de LaTeX para HTML, o caminho comum é uma ferramenta TeX local como make4ht ou htlatex do TeX4ht, ou o Pandoc (pandoc paper.tex -o paper.html). Para publicar na web, o conversor de LaTeX para Markdown deste site é outra opção.",
      },
      {
        question: "Quanto HTML posso converter?",
        answer:
          "Não há limite fixo de entrada, mas cada conversão devolve cerca de 2.000 tokens de LaTeX, ou seja, algumas páginas. Converta uma página longa seção por seção, ou remova antes scripts, estilos e navegação para enviar só o conteúdo.",
      },
      {
        question: "O conversor de HTML para LaTeX é gratuito?",
        answer:
          "Sim, é gratuito e não exige conta. A conversão usa um modelo de IA (OpenAI gpt-4o-mini), então revise o resultado, principalmente tabelas com células mescladas.",
      },
    ],
    related: (
      <>
        Precisa de outro formato? Veja todos os{" "}
        <IntroLink href="/tools/latex-converter">conversores LaTeX</IntroLink>, converta{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown para LaTeX</IntroLink> ou aprenda o
        básico com o{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          guia de tabelas LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-to-word": {
    heading: "Converter LaTeX para Word (DOCX) online",
    intro: (
      <>
        <p>
          Este conversor de LaTeX para Word transforma um documento .tex em um arquivo Microsoft
          Word .docx editável. Ele trabalha em duas etapas. Primeiro, um modelo de IA (OpenAI
          gpt-4o-mini) lê o seu LaTeX e o reescreve como HTML semântico limpo: mantém os títulos{" "}
          <GuideCode>\section</GuideCode>, as listas, as tabelas <GuideCode>tabular</GuideCode>, o
          negrito e o itálico, os links e as notas de rodapé, e descarta o preâmbulo e os comandos
          de layout, que não fazem sentido no Word. Depois, esse HTML é convertido de forma
          determinística em elementos nativos do Word: estilos Título 1 a Título 6, listas com
          marcadores e numeradas, tabelas com linha de cabeçalho e trechos de texto formatados.
        </p>
        <p>
          O resultado é um arquivo .docx de verdade: controle de alterações, comentários e sumário
          funcionam como em qualquer arquivo do Word. A matemática é escrita como texto Unicode
          legível em vez de equações do Word, as figuras são substituídas pelas legendas e a
          entrada é limitada a 60.000 caracteres. O conversor é gratuito, não exige conta e não
          guarda nada depois de devolver o arquivo.
        </p>
        <GuideTable
          headers={["LaTeX", "Resultado no Word"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Estilos Título, Título 1, Título 2"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Listas com marcadores e numeradas, com os níveis de aninhamento mantidos"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Tabela do Word com linha de cabeçalho em negrito; legenda acima"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Texto em negrito, itálico, sublinhado e monoespaçado"],
            [<GuideCode key="5">$inline math$</GuideCode>, "Texto legível com símbolos Unicode, sobrescritos e subscritos"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Um parágrafo centralizado por linha da equação, com o número"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Hiperlink clicável; texto da nota entre parênteses"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "Marcadores [key] e uma seção “References” numerada"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Só a legenda (os arquivos de imagem não são enviados)"],
          ]}
        />
      </>
    ),
    stepsHeading: "Como converter LaTeX para Word",
    steps: [
      {
        title: "Cole o seu LaTeX",
        body: "Cole o conteúdo do seu arquivo .tex, um documento completo ou um trecho, com até 60.000 caracteres.",
      },
      {
        title: "Converta para Word",
        body: "Clique em “Convert to Word”. Quando a conversão termina, document.docx é baixado automaticamente; o botão de download continua na tela caso você queira outra cópia.",
      },
      {
        title: "Abra o arquivo no Word",
        body: "Abra o arquivo no Microsoft Word, Google Docs, LibreOffice ou Pages. Os títulos usam os estilos de título do próprio Word (Título 1, Título 2 e assim por diante), então o painel de navegação e o sumário funcionam na hora.",
      },
    ],
    tipsHeading: "Limitações e como contorná-las",
    tips: [
      {
        title: "As equações viram texto simples",
        body: (
          <>
            A matemática vira texto Unicode legível como x² + y² = r², não equações editáveis do
            Word. Para equações nativas do Word (OMML), rode o Pandoc localmente:{" "}
            <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>, ou
            renderize uma fórmula importante como imagem com o{" "}
            <IntroLink href="/tools/latex-to-png">conversor de LaTeX para PNG</IntroLink>.
          </>
        ),
      },
      {
        title: "As figuras aparecem como legendas",
        body: "Os arquivos de imagem não são enviados com o texto, então cada figura é substituída pela legenda. Insira as imagens no Word depois.",
      },
      {
        title: "O texto é longo demais",
        body: "O limite é de 60.000 caracteres. Converta uma tese capítulo por capítulo e cole as partes em um único arquivo do Word.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre LaTeX para Word",
    faq: [
      {
        question: "Como converto um arquivo LaTeX para Word?",
        answer:
          "Cole o conteúdo do seu arquivo .tex no editor e clique em “Convert to Word”. O conversor lê a estrutura do LaTeX, reconstrói tudo como documento do Word com títulos, listas, tabelas e formatação de texto de verdade e baixa document.docx no seu computador. Abra-o no Microsoft Word, Google Docs, LibreOffice ou Pages.",
      },
      {
        question: "O que acontece com as equações ao converter LaTeX para Word?",
        answer:
          "A matemática inline e em destaque é convertida em texto simples legível com símbolos Unicode (por exemplo x² + y² = r² ou ∫ f(x) dx), com as equações em destaque centralizadas na própria linha. Elas não são objetos de equação nativos do Word. Se você precisa de equações editáveis do Word (OMML), rode o Pandoc localmente: pandoc paper.tex -o paper.docx. Para uma fórmula com aparência perfeita, renderize-a como imagem com a ferramenta de LaTeX para PNG e cole a imagem.",
      },
      {
        question: "Tabelas, listas e bibliografias são mantidas?",
        answer:
          "As tabelas (tabular, booktabs, longtable) viram tabelas do Word de verdade com linha de cabeçalho; itemize e enumerate viram listas com marcadores e numeradas; negrito, itálico, sublinhado, monoespaçado, links e notas de rodapé são mantidos. As citações aparecem como [key] ou em texto autor-ano, e um ambiente thebibliography vira uma seção “References” numerada. As figuras são substituídas pelas legendas, porque o conversor não tem acesso aos arquivos de imagem.",
      },
      {
        question: "Converter LaTeX para Word é gratuito? Meu documento fica armazenado?",
        answer:
          "O conversor é gratuito e não exige cadastro. Seu LaTeX é enviado ao nosso servidor para a conversão; o arquivo do Word é gerado na memória e transmitido de volta ao seu navegador, e nada é guardado depois que a resposta é enviada. São aceitos documentos de até 60.000 caracteres, o que cobre um artigo ou um capítulo de tese típico.",
      },
    ],
    related: (
      <>
        Precisa de Markdown para Notion ou GitHub? Use o{" "}
        <IntroLink href="/tools/latex-to-markdown">conversor de LaTeX para Markdown</IntroLink>,
        compile um PDF no <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink> ou
        veja todos os <IntroLink href="/tools/latex-converter">conversores LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-png": {
    heading: "Converter LaTeX para PNG: suas equações como imagem",
    intro: (
      <>
        <p>
          Este conversor de LaTeX para PNG renderiza uma equação, uma figura TikZ ou a primeira
          página de um documento como imagem PNG. Seu código é compilado com uma instalação
          completa do TeX Live no serviço de compilação do Octree, o mesmo usado pelo{" "}
          <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>, então todos os
          pacotes que você usaria localmente estão disponíveis. O PDF volta ao seu navegador, onde
          o pdf.js rasteriza a primeira página na resolução (DPI) escolhida e gera um PNG com fundo
          transparente ou branco. Nenhuma IA participa, e nada fica armazenado depois da
          compilação.
        </p>
        <p>
          Para uma fórmula avulsa, a classe <GuideCode>standalone</GuideCode> com a opção{" "}
          <GuideCode>preview</GuideCode> recorta a página na equação, e{" "}
          <GuideCode>border=4pt</GuideCode> acrescenta uma pequena margem. Use a imagem em slides,
          no Word e no Google Docs, em arquivos README, no Notion, no Slack ou em e-mails: em
          qualquer lugar onde não dá para diagramar matemática. A ferramenta é gratuita e não
          exige conta.
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "Como converter LaTeX para PNG",
    steps: [
      {
        title: "Escreva a equação ou o documento",
        body: (
          <>
            Edite o exemplo, que usa{" "}
            <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd> para recortar a imagem na
            fórmula, ou cole qualquer documento completo.
          </>
        ),
      },
      {
        title: "Escolha a resolução e o fundo",
        body: "Escolha 1× (96 DPI), 2× (192 DPI) ou 4× (384 DPI) e deixe “Transparent background” marcado para slides e temas escuros, ou desmarque para ter fundo branco.",
      },
      {
        title: "Converta e salve",
        body: "Clique em “Convert to PNG”. Baixe latex.png ou copie a imagem para a área de transferência e cole no PowerPoint, Google Docs, Notion ou Slack.",
      },
    ],
    tipsHeading: "Dicas para imagens melhores",
    tips: [
      {
        title: "A fórmula encosta na borda",
        body: (
          <>
            Aumente <Cmd>border=4pt</Cmd> nas opções da classe de documento. Use{" "}
            <Cmd>$\displaystyle ...$</Cmd> inline em vez de <Cmd>\[ ... \]</Cmd>, que ocupa toda a
            largura da linha.
          </>
        ),
      },
      {
        title: "Uma imagem para um slide escuro",
        body: (
          <>
            Carregue <Cmd>xcolor</Cmd> e escreva <Cmd>\color{"{white}"}</Cmd> antes da fórmula;
            com fundo transparente, o texto branco se destaca em qualquer tema escuro.
          </>
        ),
      },
      {
        title: "Só aparece uma página",
        body: "Apenas a primeira página do PDF é renderizada. Faça uma conversão por equação, ou compile um documento de várias páginas em PDF no editor LaTeX online.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre LaTeX para PNG",
    faq: [
      {
        question: "Como converto uma equação LaTeX em imagem PNG?",
        answer:
          "Coloque a equação em um documento standalone (o exemplo padrão usa \\documentclass[preview,border=4pt]{standalone}), escolha uma resolução e clique em “Convert to PNG”. O LaTeX é compilado em PDF no nosso servidor, a primeira página é renderizada no seu navegador e você pode baixar o PNG ou copiá-lo direto para a área de transferência.",
      },
      {
        question: "Dá para gerar um PNG de LaTeX com fundo transparente?",
        answer:
          "Sim. Deixe a opção “Transparent background” marcada. Como a classe standalone não pinta cor de página, todos os pixels fora da fórmula ficam transparentes, e a imagem se encaixa bem em slides escuros, fundos coloridos e páginas web. Desmarque a opção para um fundo branco opaco.",
      },
      {
        question: "Que resolução devo usar para slides ou impressão?",
        answer:
          "1× (96 DPI) basta para uma prévia rápida ou uma mensagem de chat. Escolha 2× (192 DPI) para Google Slides, PowerPoint, Word, Google Docs e Notion, onde a imagem aparece mais ou menos no tamanho natural em telas de alta densidade. Escolha 4× (384 DPI) se a imagem for impressa ou ampliada.",
      },
      {
        question: "Funciona com um documento LaTeX completo, não só com uma equação?",
        answer:
          "Sim. Qualquer documento que compile com pdflatex funciona, incluindo um artigo, uma apresentação beamer ou uma figura TikZ. Só a primeira página é renderizada como PNG; para um documento de várias páginas, use a ferramenta de visualização LaTeX para compilar e baixar o PDF completo.",
      },
    ],
    related: (
      <>
        Precisa do documento inteiro? Compile-o no{" "}
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink>, transforme-o em{" "}
        <IntroLink href="/tools/latex-to-word">arquivo do Word</IntroLink> ou procure comandos no{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guia de matemática em LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Converter Markdown para LaTeX online",
    intro: (
      <>
        <p>
          Este conversor de Markdown para LaTeX transforma texto .md em um documento LaTeX completo
          e compilável. Um modelo de IA (OpenAI gpt-4o-mini) reescreve os títulos como seções, o
          negrito e o itálico como <Cmd>\textbf</Cmd> e <Cmd>\textit</Cmd>, as listas com
          marcadores e numeradas como itemize e enumerate, as tabelas como tabular, os blocos de
          código delimitados como listagens de código e os links como hiperlinks. Ele carrega
          pacotes como booktabs, listings e hyperref e mantém a matemática inline e em destaque
          como matemática LaTeX.
        </p>
        <p>
          A aba “Visualização” compila o resultado com uma distribuição TeX Live completa no
          serviço de compilação do Octree, para você ver o PDF antes de baixar o arquivo .tex. A
          entrada é texto colado, e cada conversão devolve cerca de 2.000 tokens de LaTeX, o
          suficiente para algumas páginas; divida arquivos maiores. A ferramenta é gratuita, não
          exige conta e serve para arquivos README, anotações de aula e rascunhos escritos no
          Obsidian, Notion ou Typora que precisam virar um artigo ou um capítulo de tese.
        </p>
      </>
    ),
    stepsHeading: "Como converter Markdown para LaTeX",
    steps: [
      {
        title: "Cole o seu Markdown",
        body: "Substitua o exemplo pelo seu próprio conteúdo .md: notas do Obsidian ou do Notion, um README ou um rascunho com títulos, listas, tabelas, blocos de código e matemática.",
      },
      {
        title: "Converta para LaTeX",
        body: (
          <>
            Clique em “Converter para LaTeX”. Um documento completo vai aparecendo na aba
            “Código”, com os títulos <Cmd>#</Cmd> como <Cmd>\section</Cmd>, as listas como itemize
            e enumerate e a matemática <Cmd>$...$</Cmd> e <Cmd>$$...$$</Cmd> mantida como
            matemática LaTeX.
          </>
        ),
      },
      {
        title: "Visualize e exporte",
        body: "Abra a aba “Visualização” para compilar o documento em PDF e depois exporte o arquivo .tex ou o PDF, ou abra-o no Octree para continuar escrevendo.",
      },
    ],
    tipsHeading: "Problemas comuns e como corrigi-los",
    tips: [
      {
        title: "Undefined control sequence na matemática",
        body: (
          <>
            A matemática do Markdown é repassada sem alterações, então comandos exclusivos do
            KaTeX ou um <Cmd>\mathbb</Cmd> sem amssymb podem falhar. O log indica a linha; corrija
            o comando ou adicione o pacote.
          </>
        ),
      },
      {
        title: "As imagens não aparecem",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> vira uma linha <Cmd>\includegraphics</Cmd>, mas o arquivo
            de imagem não é enviado. Envie-o no Octree ou comente a linha para compilar.
          </>
        ),
      },
      {
        title: "Documentos longos param antes do fim",
        body: "Cada conversão devolve cerca de 2.000 tokens de LaTeX. Converta um arquivo longo um capítulo ou uma seção por vez e depois junte as partes.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre Markdown para LaTeX",
    faq: [
      {
        question: "Como converto Markdown para LaTeX online?",
        answer:
          "Cole o seu Markdown no editor desta página e clique em “Converter para LaTeX”. A ferramenta devolve um documento LaTeX completo com os pacotes necessários, que você pode visualizar em PDF e baixar como arquivo .tex. Não é preciso instalar nada nem ter conta.",
      },
      {
        question: "As equações matemáticas são mantidas?",
        answer:
          "Sim. A matemática inline entre $...$ e em destaque entre $$...$$ é mantida como matemática LaTeX, e amsmath e amssymb são carregados no preâmbulo, então equações escritas para MathJax ou KaTeX geralmente compilam sem alterações.",
      },
      {
        question: "Qual é a diferença em relação ao Pandoc?",
        answer:
          "O Pandoc (pandoc notes.md -o notes.tex) é um conversor determinístico de linha de comando que precisa ser instalado localmente. Esta ferramenta roda no navegador, usa um modelo de IA (OpenAI gpt-4o-mini) para escrever o LaTeX e compila na hora uma visualização em PDF. Revise o resultado, porque a IA pode reformular ou reestruturar o conteúdo.",
      },
      {
        question: "Posso converter um arquivo .md em .tex?",
        answer:
          "Abra o arquivo .md em qualquer editor de texto, copie o conteúdo para o conversor e clique em “Converter para LaTeX”; depois use “Exportar” para baixar document.tex. A página aceita texto colado, não upload de arquivos.",
      },
    ],
    related: (
      <>
        Quer fazer o caminho inverso? Use o{" "}
        <IntroLink href="/tools/latex-to-markdown">conversor de LaTeX para Markdown</IntroLink>,
        veja todos os <IntroLink href="/tools/latex-converter">conversores LaTeX</IntroLink> ou
        leia a{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introdução ao LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-converter": {
    heading: "Conversores LaTeX: converta para e a partir de LaTeX online",
    intro: (
      <>
        <p>
          Os conversores LaTeX do Octree cobrem os formatos que mais se precisa levar para o
          LaTeX ou tirar dele. Para LaTeX: Markdown, HTML, MathML e diagramas Mermaid, tabelas CSV
          do Excel ou do Google Sheets, PDFs, fotos de equações, imagens de diagramas e artigos do
          arXiv. A partir de LaTeX: Markdown para GitHub e Notion, Word .docx para revisores e
          sistemas de submissão, imagens PNG para slides e PDF pelo editor LaTeX online.
        </p>
        <p>
          Todos os conversores são gratuitos, funcionam no navegador e não exigem conta. A maioria
          usa um modelo de IA, porque passar de um formato a outro exige julgamento; os resultados
          em LaTeX são compilados com uma distribuição TeX Live completa no serviço de compilação
          do Octree, para você conferir o PDF antes de baixar. arXiv para LaTeX, LaTeX para PNG e
          LaTeX para PDF não usam IA. A tabela acima lista cada conversor com a entrada, a saída e
          o melhor uso.
        </p>
      </>
    ),
    stepsHeading: "Como usar os conversores LaTeX",
    steps: [
      {
        title: "Comece pelo que você tem",
        body: "Escolha o cartão que corresponde à sua entrada: Markdown, HTML, MathML, Mermaid, um arquivo CSV, um PDF, uma imagem ou um identificador do arXiv para obter LaTeX, ou um documento LaTeX para obter Markdown, um arquivo do Word, uma imagem PNG ou um PDF.",
      },
      {
        title: "Cole ou envie e converta",
        body: "Cada conversor abre na própria página. Cole o conteúdo ou envie o arquivo e inicie a conversão; os conversores com IA mostram o resultado à medida que ele é escrito.",
      },
      {
        title: "Confira o resultado e exporte",
        body: "Os resultados em LaTeX vêm com uma visualização do PDF compilado, para você conferir antes de baixar o arquivo .tex. Abra um resultado LaTeX no Octree para continuar editando.",
      },
    ],
    tipsHeading: "Dicas para conversões melhores",
    tips: [
      {
        title: "Revise o resultado da IA",
        body: "Os conversores com IA lidam com entradas bagunçadas e pacotes incomuns, mas podem reformular ou omitir conteúdo. Compare a visualização com a fonte antes de enviar qualquer coisa.",
      },
      {
        title: "Converta documentos longos em partes",
        body: "Os conversores de Markdown, HTML, Mermaid, CSV e LaTeX para Markdown devolvem cerca de 2.000 tokens por conversão, ou seja, algumas páginas, e o LaTeX para Word aceita até 60.000 caracteres. Divida uma tese por capítulos.",
      },
      {
        title: "As figuras viajam separadas",
        body: "Nenhum conversor envia arquivos de imagem junto com o texto. As figuras viram linhas \\includegraphics, links de imagem ou legendas; adicione os arquivos depois.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre os conversores LaTeX",
    faq: [
      {
        question: "O que é um conversor LaTeX?",
        answer:
          "Um conversor LaTeX traduz entre código-fonte LaTeX e outro formato. Os conversores para LaTeX recebem Markdown, HTML, MathML, Mermaid, tabelas CSV, PDFs ou imagens e geram código .tex; os conversores a partir de LaTeX recebem código .tex e geram Markdown, imagens PNG, documentos do Word ou PDFs. Esta página reúne todos os conversores gratuitos do Octree, nos dois sentidos.",
      },
      {
        question: "Quais conversores usam IA e quais são determinísticos?",
        answer:
          "Markdown, HTML, MathML, Mermaid, tabela (CSV), PDF, imagem e equação para LaTeX, além de LaTeX para Markdown, usam um modelo de IA. LaTeX para Word usa IA em uma primeira etapa e depois monta o .docx de forma determinística. arXiv para LaTeX, LaTeX para PNG e LaTeX para PDF não usam IA: eles baixam ou compilam a sua entrada como está.",
      },
      {
        question: "Como converto LaTeX para Word ou PDF de graça?",
        answer:
          "Para Word, abra o conversor de LaTeX para Word, cole o documento e baixe document.docx. Para PDF, abra o editor LaTeX online, cole o documento e baixe o PDF compilado. Os dois são gratuitos e não exigem conta.",
      },
      {
        question: "Existe limite de tamanho para os documentos?",
        answer:
          "LaTeX para Word aceita até 60.000 caracteres, e PDF para LaTeX aceita PDFs de até 3 MB e 20 páginas. Os conversores de Markdown, HTML, Mermaid, CSV e LaTeX para Markdown devolvem cerca de 2.000 tokens por conversão, ou seja, algumas páginas, então converta documentos longos em partes. As ferramentas baseadas em compilação aceitam qualquer documento que compile dentro do limite de tempo do servidor.",
      },
    ],
    related: (
      <>
        Começando no LaTeX? Leia a{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          introdução ao LaTeX
        </IntroLink>
        , edite um documento no{" "}
        <IntroLink href="/tools/latex-preview">editor LaTeX online</IntroLink> ou veja a{" "}
        <IntroLink href="/">lista completa de ferramentas LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-markdown": {
    heading: "Converter LaTeX para Markdown online",
    intro: (
      <>
        <p>
          Este conversor de LaTeX para Markdown transforma um documento ou trecho .tex em Markdown
          padrão e limpo. Um modelo de IA (OpenAI gpt-4o-mini) reescreve as seções como títulos{" "}
          <Cmd>#</Cmd>, itemize e enumerate como listas, tabelas tabular e booktabs como tabelas
          Markdown, <Cmd>\textbf</Cmd> e <Cmd>\emph</Cmd> como negrito e itálico, ambientes de
          código como blocos de código delimitados e <Cmd>\href</Cmd> como links. A matemática
          continua em LaTeX entre <Cmd>$...$</Cmd> e <Cmd>$$...$$</Cmd>, que o GitHub, o Obsidian
          e outros renderizadores com KaTeX ou MathJax exibem.
        </p>
        <p>
          A ferramenta é gratuita, não exige conta e recebe texto colado. Cada conversão devolve
          cerca de 2.000 tokens de Markdown, então converta artigos longos em partes. As figuras
          viram links de imagem quando possível e as citações não são resolvidas a partir de um
          arquivo .bib, então conte com corrigi-las à mão. Use-a para publicar um artigo em um
          blog, transformar anotações de aula em um README ou levar notas em LaTeX para o Notion
          ou o Obsidian.
        </p>
      </>
    ),
    stepsHeading: "Como converter LaTeX para Markdown",
    steps: [
      {
        title: "Cole o seu LaTeX",
        body: "Cole um documento .tex completo ou só um trecho, como uma seção, uma tabela ou uma lista. O preâmbulo não é necessário.",
      },
      {
        title: "Converta para Markdown",
        body: "Clique em “Converter para Markdown”. O Markdown vai aparecendo no editor de saída à medida que é escrito.",
      },
      {
        title: "Copie ou baixe",
        body: "Copie o Markdown do editor de saída ou use “Exportar como Markdown” para baixar document.md para GitHub, Obsidian, Notion ou um site estático.",
      },
    ],
    tipsHeading: "Dicas para uma conversão limpa",
    tips: [
      {
        title: "A matemática precisa de um renderizador",
        body: (
          <>
            As equações ficam como <Cmd>$...$</Cmd> e <Cmd>$$...$$</Cmd>. GitHub, Obsidian,
            Jupyter e a maioria dos geradores de sites estáticos com KaTeX ou MathJax as exibem;
            visualizadores de Markdown básicos mostram o LaTeX cru.
          </>
        ),
      },
      {
        title: "Macros personalizadas",
        body: (
          <>
            Comandos definidos com <Cmd>\newcommand</Cmd> não têm equivalente em Markdown. Inclua
            as definições na entrada para que o conversor possa expandi-las e confira o resultado.
          </>
        ),
      },
      {
        title: "Figuras e citações",
        body: (
          <>
            As figuras viram, quando possível, links de imagem Markdown apontando para os nomes de
            arquivo originais, e as chaves de <Cmd>\cite</Cmd> não são resolvidas a partir de um
            arquivo .bib. Coloque as imagens ao lado do arquivo .md e corrija as referências à mão.
          </>
        ),
      },
    ],
    faqHeading: "Perguntas frequentes sobre LaTeX para Markdown",
    faq: [
      {
        question: "Como converto LaTeX para Markdown?",
        answer:
          "Cole o seu LaTeX no editor da esquerda e clique em “Converter para Markdown”. As seções viram títulos #, itemize e enumerate viram listas, tabular vira tabela Markdown, \\textbf e \\emph viram negrito e itálico, e os ambientes de código viram blocos de código delimitados. Copie o resultado ou exporte document.md.",
      },
      {
        question: "As equações são mantidas?",
        answer:
          "Sim. A matemática inline fica entre $...$ e a matemática em destaque entre $$...$$, escritas em LaTeX, então elas aparecem em qualquer lugar onde o Markdown é renderizado com MathJax ou KaTeX, incluindo GitHub, Obsidian e notebooks Jupyter.",
      },
      {
        question: "Quanto LaTeX posso converter?",
        answer:
          "Não há limite fixo de entrada, mas cada conversão devolve cerca de 2.000 tokens de Markdown, ou seja, algumas páginas. Converta uma tese ou um artigo longo um capítulo ou uma seção por vez.",
      },
      {
        question: "É gratuito? É melhor que o Pandoc?",
        answer:
          "É gratuito e não exige conta. A ferramenta usa um modelo de IA (OpenAI gpt-4o-mini), que lida bem com pacotes incomuns e código-fonte bagunçado, mas o resultado precisa ser revisado. O Pandoc (pandoc paper.tex -o paper.md) é determinístico e mais adequado a documentos muito longos, mas precisa ser instalado localmente.",
      },
    ],
    related: (
      <>
        Quer fazer o caminho inverso? Use o{" "}
        <IntroLink href="/tools/markdown-to-latex">conversor de Markdown para LaTeX</IntroLink>,
        exporte para <IntroLink href="/tools/latex-to-word">Word</IntroLink> ou veja todos os{" "}
        <IntroLink href="/tools/latex-converter">conversores LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-word-counter": {
    heading: "Contar palavras de um documento LaTeX online",
    intro: (
      <p>
        Contar palavras em LaTeX é mais difícil que em um processador de texto: uma contagem
        simples das palavras de um arquivo .tex inclui também comandos como{" "}
        <Cmd>\begin{"{itemize}"}</Cmd>, rótulos e equações. Este contador de palavras LaTeX gratuito
        lê o código-fonte como deve fazer uma ferramenta que entende TeX, ignorando a marcação e a
        matemática, e informa quantas palavras tem o texto que o leitor realmente vê.
      </p>
    ),
    stepsHeading: "Como contar palavras em LaTeX",
    steps: [
      {
        title: "Cole o seu código-fonte LaTeX",
        body: "Cole no editor o arquivo .tex inteiro, com preâmbulo, ou só a seção que você quer medir.",
      },
      {
        title: "Deixe-o contar",
        body: "A contagem de palavras é atualizada automaticamente enquanto você digita. O código passa pelo texcount, o contador incluído no TeX Live e usado pelo Overleaf, então comandos e marcação são removidos corretamente.",
      },
      {
        title: "Leia a divisão",
        body: "Veja o total de palavras e os números separados para o corpo do texto, os títulos e as legendas, e use aquele que a sua revista, disciplina ou programa de pós-graduação exige.",
      },
    ],
    tipsHeading: "O que é contado",
    tips: [
      {
        title: "Corpo do texto",
        body: "Palavras em parágrafos, listas e notas de rodapé, incluindo o texto dentro de comandos de formatação como \\textbf{...} e \\emph{...}. É o número principal ao qual a maioria dos limites de palavras se refere.",
      },
      {
        title: "Títulos",
        body: "Palavras em títulos \\section, \\subsection, \\chapter e semelhantes, contadas à parte para que você possa incluí-las ou excluí-las.",
      },
      {
        title: "Legendas",
        body: "Palavras nas legendas de figuras e tabelas escritas com \\caption{...}, também contadas à parte.",
      },
      {
        title: "O que não é contado",
        body: "Comandos e suas opções, rótulos, referências cruzadas e chaves de citação (\\label, \\ref, \\cite), comentários depois de % e a matemática: fórmulas inline $...$ e equações em destaque não são palavras, então uma equação nunca infla o total.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre a contagem de palavras em LaTeX",
    faq: [
      {
        question: "Como vejo a contagem de palavras de um documento LaTeX?",
        answer:
          "Cole o código-fonte .tex no contador de palavras LaTeX acima: a contagem aparece na hora, com totais separados para o corpo do texto, os títulos e as legendas. Offline, rode o texcount no arquivo pela linha de comando: texcount -inc -total main.tex.",
      },
      {
        question: "A contagem de palavras do LaTeX inclui as equações?",
        answer:
          "Não. Matemática inline como $E = mc^2$ e equações em destaque são tratadas como fórmulas, não como palavras, então não entram na contagem.",
      },
      {
        question: "Como ele se compara ao texcount e à contagem de palavras do Overleaf?",
        answer:
          "Ele roda o texcount, o script Perl incluído no TeX Live e no MiKTeX, então os números batem com texcount -total na sua máquina. A contagem de palavras do Overleaf também usa o texcount, então os totais devem ficar muito próximos. A diferença é que você não precisa de instalação TeX local nem de conta.",
      },
      {
        question: "A bibliografia e os comentários entram na contagem?",
        answer:
          "Não. Comentários depois de % são ignorados, e o texcount ignora a bibliografia por padrão, então as referências de \\bibliography ou de um ambiente thebibliography não são contadas. As chaves de citação dentro de \\cite{...} também não contam como palavras.",
      },
    ],
    related: (
      <>
        Precisa do documento em outro formato? Experimente o{" "}
        <IntroLink href="/tools/latex-to-word">conversor de LaTeX para Word</IntroLink> se a
        submissão exige um .docx, ou consulte a{" "}
        <IntroLink href="/symbols">referência de símbolos LaTeX</IntroLink>.
      </>
    ),
  },

  "mathml-to-latex": {
    heading: "Converter MathML para LaTeX online",
    intro: (
      <>
        <p>
          Este conversor de MathML para LaTeX transforma marcação MathML em matemática LaTeX para
          colar em um artigo. Cole um elemento <Cmd>{"<math>"}</Cmd>: um modelo de IA (OpenAI
          gpt-4o-mini) reescreve a árvore como código amsmath. <Cmd>{"<mfrac>"}</Cmd> vira{" "}
          <Cmd>\frac</Cmd>, <Cmd>{"<msqrt>"}</Cmd> vira <Cmd>\sqrt</Cmd>, <Cmd>{"<msup>"}</Cmd> e{" "}
          <Cmd>{"<msub>"}</Cmd> viram sobrescritos e subscritos, e <Cmd>{"<mtable>"}</Cmd> vira
          uma matriz ou um bloco alinhado. Letras gregas e operadores escritos como caracteres
          Unicode geralmente voltam como comandos LaTeX.
        </p>
        <p>
          O resultado é um documento LaTeX completo, e a aba “Visualização” o compila com uma
          distribuição TeX Live completa no serviço de compilação do Octree, para você conferir
          cada símbolo. O editor destaca a sintaxe XML, então também funciona como um editor
          MathML online simples. Cada conversão devolve até cerca de 1.500 tokens de LaTeX, o
          suficiente para algumas equações. A ferramenta é gratuita e não exige conta.
        </p>
      </>
    ),
    stepsHeading: "Como converter MathML para LaTeX",
    steps: [
      {
        title: "Cole o MathML",
        body: (
          <>
            Cole um elemento <Cmd>{"<math>"}</Cmd> copiado de uma página web, de uma exportação do
            Word ou do MathType, ou MathML retirado de um arquivo EPUB ou JATS XML.
          </>
        ),
      },
      {
        title: "Converta para LaTeX",
        body: "Clique em “Converter para LaTeX”. A equação volta em um documento LaTeX completo que carrega amsmath e amssymb.",
      },
      {
        title: "Confira a visualização",
        body: "Abra a aba “Visualização” para compilar o documento e comparar a equação diagramada com o original; depois copie a matemática, exporte o arquivo .tex ou o PDF, ou abra-o no Octree.",
      },
    ],
    tipsHeading: "Dicas para converter MathML",
    tips: [
      {
        title: "Copie o elemento math inteiro",
        body: (
          <>
            Inclua tudo, de <Cmd>{"<math>"}</Cmd> até <Cmd>{"</math>"}</Cmd>. Um fragmento que
            começa no meio de um <Cmd>{"<mrow>"}</Cmd> pode perder parênteses ou termos.
          </>
        ),
      },
      {
        title: "MathML a partir do Word",
        body: "O Word salva as equações em OMML, não em MathML. No Word para Windows, ative Opções de Equação > “Copiar MathML para a área de transferência como texto sem formatação”, depois copie a equação e cole aqui.",
      },
      {
        title: "Quer só a equação",
        body: (
          <>
            Copie as linhas entre <Cmd>\begin{"{document}"}</Cmd> e{" "}
            <Cmd>\end{"{document}"}</Cmd> para o seu próprio arquivo; o preâmbulo só precisa de{" "}
            <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "Perguntas frequentes sobre MathML para LaTeX",
    faq: [
      {
        question: "Como converto MathML para LaTeX?",
        answer:
          "Cole a marcação MathML no editor e clique em “Converter para LaTeX”. Elementos como mfrac, msqrt, msup, msub, mover e mtable são reescritos como \\frac, \\sqrt, sobrescritos, subscritos, acentos e matrizes, e o resultado aparece como um documento LaTeX completo que você pode compilar na aba “Visualização”.",
      },
      {
        question: "O Content MathML é suportado?",
        answer:
          "A ferramenta foi feita para o Presentation MathML, que é o que navegadores, Word e MathType exportam. O Content MathML (apply, ci, cn) geralmente também é convertido, já que um modelo de IA lê a marcação, mas confira o resultado na visualização.",
      },
      {
        question: "Posso converter várias equações de uma vez?",
        answer:
          "Sim. Cole vários elementos math em sequência e eles serão convertidos em um único documento. Cada conversão devolve até cerca de 1.500 tokens de LaTeX, então divida arquivos muito longos.",
      },
      {
        question: "O conversor de MathML para LaTeX é gratuito?",
        answer:
          "Sim, é gratuito e não exige conta. A conversão usa o OpenAI gpt-4o-mini, e a visualização compila com uma distribuição TeX Live completa, então você pode conferir a equação antes de usá-la.",
      },
    ],
    related: (
      <>
        Escreva equações à mão com o{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          guia de matemática em LaTeX
        </IntroLink>
        , converta uma foto de equação com a ferramenta{" "}
        <IntroLink href="/tools/math-to-latex">matemática para LaTeX</IntroLink> ou veja todos os{" "}
        <IntroLink href="/tools/latex-converter">conversores LaTeX</IntroLink>.
      </>
    ),
  },

  "mermaid-to-latex": {
    heading: "Converter diagramas Mermaid em TikZ para LaTeX",
    intro: (
      <>
        <p>
          Este conversor transforma o código de um diagrama Mermaid em TikZ, para que um
          fluxograma esboçado em um arquivo Markdown, em um README do GitHub ou no Notion entre em
          um artigo LaTeX como gráfico vetorial nativo. Cole a definição Mermaid: um modelo de IA
          (OpenAI gpt-4o-mini) reescreve cada nó, rótulo e seta em um <Cmd>tikzpicture</Cmd>, com
          posições explícitas para que os nós não se sobreponham, dentro de um documento
          standalone ou article completo que carrega o tikz e as bibliotecas necessárias.
        </p>
        <p>
          A aba “Visualização” compila o diagrama com uma distribuição TeX Live completa no
          serviço de compilação do Octree, para você conferir o layout antes de exportar o arquivo
          .tex ou o PDF. O Mermaid organiza os diagramas automaticamente, o TikZ não, então
          diagramas grandes podem precisar de ajustes de espaçamento. Fluxogramas dão os melhores
          resultados; cada conversão devolve até cerca de 2.000 tokens de LaTeX. A ferramenta é
          gratuita e não exige conta.
        </p>
      </>
    ),
    stepsHeading: "Como converter Mermaid em TikZ",
    steps: [
      {
        title: "Cole o código Mermaid",
        body: (
          <>
            Cole a definição do diagrama começando pelo tipo, como <Cmd>graph TD</Cmd>,{" "}
            <Cmd>flowchart LR</Cmd> ou <Cmd>sequenceDiagram</Cmd>, sem o bloco{" "}
            <Cmd>```mermaid</Cmd> em volta.
          </>
        ),
      },
      {
        title: "Converta para TikZ",
        body: "Clique em “Converter para LaTeX”. A IA reescreve os nós, os rótulos e as setas em um tikzpicture dentro de um documento LaTeX completo.",
      },
      {
        title: "Visualize, ajuste e exporte",
        body: "Abra a aba “Visualização” para compilar o diagrama em PDF. Se algo se sobrepuser, altere as distâncias ou as posições dos nós no código e depois exporte diagram.tex ou diagram.pdf, ou abra-o no Octree.",
      },
    ],
    tipsHeading: "Problemas comuns e como corrigi-los",
    tips: [
      {
        title: "Os nós se sobrepõem",
        body: (
          <>
            Aumente <Cmd>node distance</Cmd> nas opções do tikzpicture ou mude o posicionamento de
            um nó, por exemplo de <Cmd>below of=</Cmd> para <Cmd>right of=</Cmd>. O TikZ não
            organiza grafos automaticamente como o Mermaid.
          </>
        ),
      },
      {
        title: "Biblioteca não carregada",
        body: (
          <>
            Um erro sobre uma ponta de seta ou uma forma desconhecida geralmente significa que
            falta um <Cmd>\usetikzlibrary</Cmd>, por exemplo <Cmd>arrows.meta</Cmd>,{" "}
            <Cmd>shapes</Cmd> ou <Cmd>positioning</Cmd>. Adicione-o ao preâmbulo.
          </>
        ),
      },
      {
        title: "Comece pequeno",
        body: "Fluxogramas são os que convertem com mais confiabilidade. Para diagramas grandes ou complexos, converta uma parte por vez e junte os tikzpictures.",
      },
    ],
    faqHeading: "Perguntas frequentes sobre Mermaid para LaTeX",
    faq: [
      {
        question: "Como uso um diagrama Mermaid no LaTeX?",
        answer:
          "O LaTeX não renderiza Mermaid diretamente. Cole o código Mermaid neste conversor, que reescreve o diagrama em TikZ, o pacote de desenho nativo do LaTeX. Copie o tikzpicture para o seu documento e carregue o pacote tikz, ou exporte o arquivo .tex completo.",
      },
      {
        question: "Quais tipos de diagrama Mermaid são suportados?",
        answer:
          "Fluxogramas e grafos (graph e flowchart) são os que convertem com mais confiabilidade. Diagramas de sequência, de estados e de classes também podem ser convertidos, já que um modelo de IA lê o código, mas espere ajustar posições no TikZ gerado.",
      },
      {
        question: "Por que converter Mermaid em TikZ em vez de usar uma imagem?",
        answer:
          "Um diagrama TikZ é um gráfico vetorial desenhado pelo próprio LaTeX: usa a mesma fonte do texto, fica nítido em qualquer zoom e pode ser editado no código-fonte. Um PNG ou SVG exportado não pode ser alterado sem voltar ao Mermaid.",
      },
      {
        question: "O conversor de Mermaid para LaTeX é gratuito?",
        answer:
          "Sim, é gratuito e não exige conta. A conversão usa o OpenAI gpt-4o-mini e devolve até cerca de 2.000 tokens de LaTeX, e a visualização compila com uma distribuição TeX Live completa.",
      },
    ],
    related: (
      <>
        Aprenda os comandos de desenho com o{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          guia de TikZ
        </IntroLink>
        , descreva um diagrama em palavras com o{" "}
        <IntroLink href="/tools/tikz-generator">gerador de TikZ</IntroLink> ou redesenhe um esboço
        com a ferramenta <IntroLink href="/tools/image-to-tikz">imagem para TikZ</IntroLink>.
      </>
    ),
  },

  "pgfplots-generator": {
    heading: "Gerador de PGFPlots: crie gráficos pgfplots em LaTeX",
    intro: (
      <>
        <p>
          Este gerador de PGFPlots transforma a descrição de um gráfico em linguagem comum em
          código pgfplots. Descreva uma função, um conjunto de pontos ou um tipo de gráfico: um
          modelo de IA (OpenAI GPT-5) escreve um documento LaTeX completo com um ambiente{" "}
          <Cmd>tikzpicture</Cmd> e <Cmd>axis</Cmd> comentado. Curvas de funções e gráficos de
          linhas, gráficos de barras, gráficos de dispersão, histogramas e superfícies 3D, com os
          rótulos dos eixos, os intervalos, a legenda e as cores que você pedir.
        </p>
        <p>
          A aba “Visualização” compila o gráfico com uma distribuição TeX Live completa no serviço
          de compilação do Octree, para você ver o PDF antes de exportar o arquivo .tex. Como o
          gráfico é desenhado pelo LaTeX, ele usa a fonte do documento e fica nítido em qualquer
          tamanho, ao contrário de uma imagem colada de uma planilha. O gerador é gratuito e não
          exige conta; o código gerado é seu e pode ser editado livremente, dos rótulos das marcas
          aos estilos das curvas.
        </p>
      </>
    ),
    stepsHeading: "Como gerar um gráfico pgfplots",
    steps: [
      {
        title: "Descreva o gráfico",
        body: "Diga o que traçar: a função ou os pontos de dados, o tipo de gráfico (linha, barras, dispersão, área, histograma ou superfície 3D), os intervalos dos eixos, os rótulos, a legenda e as cores. Você também pode colar uma pequena tabela de valores.",
      },
      {
        title: "Gere o código",
        body: (
          <>
            Clique em “Gerar gráfico”. A IA escreve um documento completo com{" "}
            <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> e um ambiente <Cmd>axis</Cmd> comentado.
          </>
        ),
      },
      {
        title: "Visualize e exporte",
        body: "Abra a aba “Visualização” para compilar o gráfico em PDF. Edite o código para refiná-lo e depois exporte pgfplot.tex ou pgfplot.pdf, ou abra-o no Octree.",
      },
    ],
    tipsHeading: "Erros comuns do pgfplots e como corrigi-los",
    tips: [
      {
        title: "Dimension too large",
        body: (
          <>
            Uma função que cresce muito rápido, como <Cmd>exp(x)</Cmd> em um domínio amplo, excede
            a capacidade da aritmética do TeX. Reduza o <Cmd>domain</Cmd>, adicione{" "}
            <Cmd>restrict y to domain</Cmd> ou use um eixo logarítmico.
          </>
        ),
      },
      {
        title: "Curvas serrilhadas",
        body: (
          <>
            Aumente <Cmd>samples</Cmd>, por exemplo <Cmd>samples=200</Cmd>, para curvas suaves.
            Mantenha um valor mais baixo em gráficos 3D, que são bem mais lentos para compilar.
          </>
        ),
      },
      {
        title: "Traçar os seus próprios dados",
        body: (
          <>
            Substitua as coordenadas geradas pelos seus valores com <Cmd>\addplot table</Cmd> ou{" "}
            <Cmd>\addplot coordinates</Cmd>; o estilo dos eixos continua o mesmo.
          </>
        ),
      },
    ],
    faqHeading: "Perguntas frequentes sobre o gerador de PGFPlots",
    faq: [
      {
        question: "O que é um gerador de PGFPlots?",
        answer:
          "Ele escreve o código pgfplots por você. O pgfplots é o pacote LaTeX que desenha gráficos com TikZ; em vez de aprender as opções de eixo dele, você descreve o gráfico em linguagem comum e recebe um documento completo para compilar, editar e colar em um artigo.",
      },
      {
        question: "Que tipos de gráfico ele cria?",
        answer:
          "Tudo o que o pgfplots desenha: curvas de funções, gráficos de linhas, gráficos de barras, gráficos de dispersão, histogramas, barras de erro, gráficos de área e superfícies ou malhas 3D. Descreva os dados, os eixos e o estilo que você quer, e o código segue a descrição.",
      },
      {
        question: "Como coloco o gráfico no meu documento LaTeX?",
        answer:
          "Adicione \\usepackage{pgfplots} e \\pgfplotsset{compat=1.18} ao preâmbulo e copie o ambiente tikzpicture do código gerado para o seu documento, normalmente dentro de um ambiente figure com legenda.",
      },
      {
        question: "O gerador de PGFPlots é gratuito?",
        answer:
          "Sim, é gratuito e não exige conta. O código é escrito por um modelo de IA (OpenAI GPT-5) e compilado com uma distribuição TeX Live completa, então confira na visualização se ele corresponde ao que você pediu.",
      },
    ],
    related: (
      <>
        Aprenda as opções de eixo com o{" "}
        <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
          guia de pgfplots
        </IntroLink>
        , desenhe diagramas com o{" "}
        <IntroLink href="/tools/tikz-generator">gerador de TikZ</IntroLink> ou transforme um CSV
        em tabela com o{" "}
        <IntroLink href="/tools/table-to-latex">gerador de tabelas LaTeX</IntroLink>.
      </>
    ),
  },
};

export default translations;
