import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "在线编辑 LaTeX：免费的 LaTeX 编译器与 PDF 预览",
    intro: (
      <>
        <p>
          本页集在线 LaTeX 编辑器、编译器和 PDF 预览于一体。在左侧编写文档，右侧即可看到编译后的
          PDF。文档由 Octree 编译服务上的完整 TeX Live 发行版编译，amsmath、TikZ、pgfplots、beamer、geometry、hyperref
          以及 TeX Live 中的其他宏包都能直接使用，无需安装任何软件。
        </p>
        <p>
          默认编译引擎是 pdfLaTeX；使用 fontspec 和系统字体时服务会切换到 XeLaTeX，包含 Lua 代码时切换到
          LuaLaTeX。无需注册账号。编辑器只容纳一个文件，图片、.bib 文件和多文件项目请在 Octree
          编辑器中处理，免费账号还能保存你的文档。shell escape 已关闭，因此无法使用 minted。
        </p>
      </>
    ),
    stepsHeading: "如何使用在线 LaTeX 编辑器",
    steps: [
      {
        title: "编写或粘贴完整文档",
        body: (
          <>
            把示例替换成你自己的 LaTeX 代码，从 <Cmd>\documentclass</Cmd> 一直到{" "}
            <Cmd>\end{"{document}"}</Cmd>。编辑器支持 LaTeX 语法高亮，并能补全常用命令。
          </>
        ),
      },
      {
        title: "实时查看 PDF 更新",
        body: "停止输入约一秒后，预览会自动重新编译。如果编译失败，会弹出对话框显示错误信息和日志。",
      },
      {
        title: "保存结果",
        body: "点击“在 Octree 中打开”，即可把文档保存为项目、添加图片和 .bib 文件，或让 AI 帮你修改。",
      },
    ],
    tipsHeading: "常见 LaTeX 错误及解决方法",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            <Cmd>\usepackage</Cmd> 中的宏包名拼写错误，或者该宏包不在 TeX Live 中。请检查宏包名；CTAN
            上随 TeX Live 发布的宏包均已安装。
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            <Cmd>^</Cmd>、<Cmd>_</Cmd> 或 <Cmd>\alpha</Cmd> 等只能在数学模式中使用的命令出现在了数学模式之外。用{" "}
            <Cmd>$...$</Cmd> 把它括起来；如果要输出下划线本身，请写成 <Cmd>\_</Cmd>。
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            命令拼写错误或对应宏包未加载，例如使用了 <Cmd>\mathbb</Cmd> 却没有加载{" "}
            <Cmd>amssymb</Cmd>。日志中会指出出错的行号。
          </>
        ),
      },
      {
        title: "不知道哪里出错了",
        body: "在错误对话框中点击 Fix this error with AI in Octree（在 Octree 中用 AI 修复此错误）。Octree 会打开文档并附上错误日志，AI 修改时就能准确知道该修复什么。",
      },
    ],
    faqHeading: "LaTeX 在线编辑器常见问题",
    faq: [
      {
        question: "不安装任何软件，可以在线编辑 LaTeX 吗？",
        answer:
          "可以。在本页编辑器中输入或粘贴 LaTeX 代码，旁边就会显示 PDF。编译在 Octree 服务器上的完整 TeX Live 环境中进行，因此本地无需安装 TeX 发行版。",
      },
      {
        question: "这个 LaTeX 预览工具免费吗？需要注册账号吗？",
        answer:
          "完全免费，无需账号。本页不会保存任何内容，离开前请复制好代码；或者用免费账号在 Octree 中打开，将其保存为项目。",
      },
      {
        question: "在线预览使用哪个 LaTeX 编译器？",
        answer:
          "默认使用 pdfLaTeX。当文档加载 fontspec、polyglossia、unicode-math 或 xeCJK 时，编译服务会切换到 XeLaTeX；使用 \\directlua 或 luacode 时切换到 LuaLaTeX。",
      },
      {
        question: "可以上传图片或 .bib 参考文献文件吗？",
        answer:
          "本页不行：它只编译单个 main.tex 文件。thebibliography 环境可以正常使用，但图片文件和 .bib 文件需要在支持多文件项目的 Octree 编辑器中使用。",
      },
      {
        question: "为什么 minted 之类的宏包编译失败？",
        answer:
          "出于安全考虑，minted 等需要 shell escape（\\write18）的宏包已被禁用。排版代码请改用 listings 宏包或 verbatim 环境。",
      },
    ],
    related: (
      <>
        刚接触 LaTeX？可以先阅读{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          LaTeX 入门介绍
        </IntroLink>
        ，浏览现成的 <IntroLink href="/templates">LaTeX 模板</IntroLink>，或者描述你想要的文档，让{" "}
        <IntroLink href="/tools/ai-latex-generator">AI LaTeX 生成器</IntroLink>帮你写出来。
      </>
    ),
  },

  "math-to-latex": {
    heading: "图片转 LaTeX：在线将手写数学公式转换为 LaTeX",
    intro: (
      <>
        <p>
          这款数学公式转 LaTeX 工具可以把手写或印刷数学公式的图片转换成 LaTeX 代码。上传公式的照片、扫描件或截图，视觉
          AI 模型会将其中的分式、根号、求和、积分、矩阵和希腊字母识别为标准的 amsmath 写法。
        </p>
        <p>
          输出结果是一份完整的 LaTeX 文档，预览由 Octree 编译服务上的完整 TeX Live 发行版使用 pdfLaTeX
          编译。无需注册账号。每次识别一个公式或几行内容效果最好；整页的推导过程最好拆成多张图片。
        </p>
      </>
    ),
    stepsHeading: "如何将数学公式转换为 LaTeX",
    steps: [
      {
        title: "拍一张清晰的图片",
        body: "拍照或截图你需要的数学内容：笔记本上的一行公式、白板、平板上的手写笔记或教材中的公式。裁剪到只保留需要的部分。",
      },
      {
        title: "上传图片",
        body: "把 JPEG 或 PNG 文件拖到上传框中。AI 读取图片的同时，LaTeX 代码会逐步输出到代码面板。",
      },
      {
        title: "检查预览并复制",
        body: "打开预览标签页，将编译结果与原图对照，然后复制或下载代码，或在 Octree 中打开继续编辑。",
      },
    ],
    tipsHeading: "提高识别准确率的技巧",
    tips: [
      {
        title: "每张图片只放一个表达式或一小段",
        body: "该工具专为单个公式和简短推导设计；整页的演算过程请拆成多次上传。",
      },
      {
        title: "书写清晰，保持高对比度",
        body: "在白纸上用深色笔书写、光线均匀、正对拍摄，可以减少 1 与 l、x 与 × 之类符号的误识别。",
      },
      {
        title: "务必核对符号",
        body: "手写识别难免出错。使用代码前，请在预览中核对下标、指数和希腊字母。",
      },
    ],
    faqHeading: "数学公式转 LaTeX 常见问题",
    faq: [
      {
        question: "如何把手写数学公式转换成 LaTeX？",
        answer:
          "将手写公式的照片或扫描件以 JPEG 或 PNG 格式上传。AI 会识别内容并返回一份加载了 amsmath 和 amssymb 的完整 LaTeX 文档，预览会将其编译出来，方便你逐个核对符号。",
      },
      {
        question: "这个在线 LaTeX 转换工具免费吗？",
        answer:
          "免费。转换、预览、复制和下载都无需账号。只有想把结果保存为项目时，才需要一个免费的 Octree 账号。",
      },
      {
        question: "支持 iPad 和平板上的手写内容吗？",
        answer:
          "支持。从 GoodNotes、Notability、OneNote 或类似应用中把页面导出为图片或直接截图，裁剪到公式部分后上传即可。",
      },
      {
        question: "可以直接输入公式而不上传图片吗？",
        answer:
          "本页只转换图片。如果要转换键入的数学式或“x 平方从 0 到 1 的积分”这样的自然语言描述，请使用公式转 LaTeX 工具。",
      },
      {
        question: "生成的 LaTeX 能在 Overleaf 中编译吗？",
        answer:
          "能。输出使用标准的 amsmath 写法，可在任何 TeX 发行版（包括 Overleaf 和 Octree）中用 pdfLaTeX 编译。本页的预览使用完整的 TeX Live 进行编译。",
      },
    ],
    related: (
      <>
        在{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          数学表达式指南
        </IntroLink>
        中了解 LaTeX 数学公式的写法，用{" "}
        <IntroLink href="/tools/equation-to-latex">公式转 LaTeX 工具</IntroLink>转换键入的公式，或在{" "}
        <IntroLink href="/symbols">LaTeX 符号大全</IntroLink>中查找命令。
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "PDF 转 LaTeX：在线将 PDF 转换为 LaTeX",
    intro: (
      <>
        <p>
          PDF 保存的是排版完成的页面，而不是生成这些页面的 LaTeX 源码，因此把 PDF 转换为 LaTeX，实际上是把其中的文字和公式重新还原为可编辑的源码。具体做法取决于
          PDF 的来源：arXiv 论文通常附有原始源码；其他 PDF 则可以用本页的转换工具借助 AI 重建 LaTeX。
        </p>
        <p>
          上传不超过 3 MB、20 页的 PDF，即可得到一份完整的 LaTeX 文档，并由 Octree 编译服务上的完整 TeX Live
          发行版编译，方便你核对。无需注册账号。转换结果不会保留原文的字体、页面版式和图片；较长的文档最好按章节分段转换。
        </p>
      </>
    ),
    stepsHeading: "如何将 PDF 转换为 LaTeX",
    steps: [
      {
        title: "先查一下 arXiv",
        body: "如果这份 PDF 是 arXiv 论文，作者的原始 LaTeX 源码通常可以直接获取。请在论文的 arXiv 页面通过 TeX Source 链接下载，而不必转换 PDF。",
      },
      {
        title: "上传 PDF",
        body: "把不超过 3 MB、20 页的 PDF 拖入上方的转换工具。AI 会识别文字和公式，返回一份加载了 amsmath 的完整 LaTeX 文档，预览会将其编译出来，方便与原文对照。",
      },
      {
        title: "长文件分段转换",
        body: "对于较长的 PDF，请拆分出你需要的页面，或者截取单个公式块，使用数学公式转 LaTeX 工具。",
      },
      {
        title: "整合并编辑",
        body: "把各部分粘贴到在线 LaTeX 编辑器中，借助实时 PDF 预览进行修改；或在 Octree 中打开，将文档保存为项目。",
      },
    ],
    tipsHeading: "转换前须知",
    tips: [
      {
        title: "不会提取图片",
        body: "PDF 中的图片和图表不会被重建为 LaTeX。请用 \\includegraphics 重新插入，或用图片转 TikZ 工具重绘示意图。",
      },
      {
        title: "仔细校对公式",
        body: "复杂公式和表格容易识别出错。请对照原文核对下标、正负号和对齐方式。",
      },
    ],
    faqHeading: "PDF 转 LaTeX 常见问题",
    faq: [
      {
        question: "如何把 PDF 转换成 LaTeX？",
        answer:
          "PDF 中不包含 LaTeX 源码，因此文字和公式需要重新还原。如果是 arXiv 论文，请在论文的 arXiv 页面通过 TeX Source 链接下载原始源码。其他 PDF 可以上传到本页的转换工具（不超过 3 MB、20 页），然后对照原文检查编译后的预览。",
      },
      {
        question: "PDF 转 LaTeX 免费吗？",
        answer:
          "免费。PDF 转换工具、数学公式转 LaTeX 工具和在线 LaTeX 编辑器都无需账号。只有想把结果保存为项目时，才需要一个免费的 Octree 账号。",
      },
      {
        question: "可以转换整篇论文或学位论文吗？",
        answer:
          "转换工具支持不超过 3 MB、20 页的 PDF，且每次转换的输出长度有限，因此学位论文最好逐章转换。arXiv 上的论文最好直接下载原始源码。",
      },
      {
        question: "转换结果能完全保留 PDF 的版式吗？",
        answer:
          "不能。文字、标题和公式会被重建为干净、可编辑的 LaTeX；字体、间距、页面版式和图片不会被复制。",
      },
      {
        question: "扫描版 PDF 能转换吗？",
        answer:
          "印刷页面或字迹工整的手写页面，只要扫描清晰就可以。低分辨率、歪斜或字迹模糊的扫描件会导致符号识别错误，请仔细检查结果。",
      },
    ],
    related: (
      <>
        用 <IntroLink href="/tools/math-to-latex">数学公式转 LaTeX 工具</IntroLink>转换公式截图，在{" "}
        <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中修改结果，或阅读{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          LaTeX 数学公式指南
        </IntroLink>
        。
      </>
    ),
  },

  "image-to-tikz": {
    heading: "图片转 TikZ：把示意图转换为可编辑的 LaTeX",
    intro: (
      <>
        <p>
          这款图片转 TikZ 工具可以把示意图的图片转换为可编辑、可编译的 TikZ 代码。上传流程图、框图、树、图论图或手绘草图，视觉
          AI 模型会在一份 standalone LaTeX 文档中用节点和路径重建它，并尽可能保留文字标签和颜色。
        </p>
        <p>
          预览由 Octree 编译服务上的完整 TeX Live 发行版使用 pdfLaTeX
          编译。无需注册账号。输出是高度还原的重绘，而不是逐像素的描摹，因此对于必须完全一致的图，需要预留一些手动微调的时间。
        </p>
      </>
    ),
    stepsHeading: "如何将图片转换为 TikZ",
    steps: [
      {
        title: "上传示意图",
        body: "拖入示意图的截图、导出图或照片，支持 JPEG、PNG、GIF 或 WebP，最大 20 MB。",
      },
      {
        title: "让 AI 用 TikZ 重绘",
        body: (
          <>
            模型会识别图中的形状、箭头、标签和颜色，并编写一份包含 <Cmd>tikzpicture</Cmd> 的 standalone LaTeX
            文档，使用 positioning、arrows 和 shapes.geometric 等库。
          </>
        ),
      },
      {
        title: "对照后再调整",
        body: "打开预览标签页，将编译出的图与原图对照。复制或下载代码，或在 Octree 中打开，让 AI 帮你调整。",
      },
    ],
    tipsHeading: "提高转换效果的技巧",
    tips: [
      {
        title: "裁剪到只剩示意图",
        body: "去掉图注、正文和其他图；每张图片只包含一个示意图时转换效果最好。",
      },
      {
        title: "优先使用清晰的源图",
        body: "导出图和截图优于照片。手绘草图请在白纸上用深色笔绘制，并正对着拍摄。",
      },
      {
        title: "数据图请用 pgfplots",
        body: "该工具重绘的是形状，无法还原数据点。要根据数值绘制图表，请使用 pgfplots 生成器。",
      },
    ],
    faqHeading: "图片转 TikZ 常见问题",
    faq: [
      {
        question: "如何把图片转换成 TikZ 代码？",
        answer:
          "上传示意图的 JPEG、PNG、GIF 或 WebP 文件。AI 会返回一份完整的 LaTeX 文档，其中的 tikzpicture 会重绘这张图，预览会编译这段代码，方便你与原图对照。",
      },
      {
        question: "生成的 TikZ 和原图完全一样吗？",
        answer:
          "不完全一样。它是由可编辑的节点和路径构成的重绘，而不是描摹。布局、标签和箭头通常都能保留，但间距、曲线和颜色可能有差异，用于论文插图时需要调整坐标。",
      },
      {
        question: "哪些示意图转换效果最好？",
        answer:
          "流程图、框图、树、图论图、状态机和简单几何图形。元素密集、大量重叠的图，以及照片和数据图，转换效果较差。",
      },
      {
        question: "可以转换手绘草图或白板照片吗？",
        answer:
          "可以，只要线条和标签清晰可辨。请把照片裁剪到示意图部分并保证光线充足；铅笔字迹过淡或拍摄角度歪斜都会降低准确率。",
      },
      {
        question: "图片转 TikZ 工具免费吗？",
        answer:
          "免费，而且无需账号。生成的代码可用 pdfLaTeX 和 TeX Live 编译，因此在 Overleaf、Octree 或本地 LaTeX 环境中都能使用。",
      },
    ],
    related: (
      <>
        通过{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          TikZ 指南
        </IntroLink>
        了解输出中用到的命令。手头没有图片？可以向{" "}
        <IntroLink href="/tools/tikz-generator">TikZ 生成器</IntroLink>描述示意图，或用{" "}
        <IntroLink href="/tools/pgfplots-generator">pgfplots 生成器</IntroLink>绘制数据图。
      </>
    ),
  },

  "tikz-generator": {
    heading: "TikZ 生成器：根据文字描述在线生成 TikZ 图",
    intro: (
      <>
        <p>
          这款 TikZ 生成器可以根据对示意图的自然语言描述编写 TikZ 代码。它会生成一份完整的 LaTeX 文档，其中包含带注释的
          tikzpicture 以及所需的库，例如 positioning、arrows.meta 和 shapes，让你从一个能直接编译的起点开始，而不是面对一张白纸。
        </p>
        <p>
          预览由 Octree 编译服务上的完整 TeX Live 发行版使用 pdfLaTeX
          编译。无需注册账号。生成的代码在本页是只读的；如果需要带实时预览的在线 TikZ 编辑器，请把代码粘贴到 LaTeX 编辑器中，或在
          Octree 中打开，免费账号即可保存。
        </p>
      </>
    ),
    stepsHeading: "如何在线绘制 TikZ 图",
    steps: [
      {
        title: "描述示意图",
        body: "说明有哪些节点、它们如何连接以及整体布局，例如“一个从左到右依次连接 Start、Process 和 End 的流程图”。",
      },
      {
        title: "生成 TikZ",
        body: "AI 会编写一份完整的 LaTeX 文档，包含带注释的 tikzpicture 以及所需的 TikZ 库。",
      },
      {
        title: "预览并编辑",
        body: "在预览标签页中查看编译后的图。如需手动修改代码，请粘贴到在线 LaTeX 编辑器中，或在 Octree 中打开。",
      },
    ],
    tipsHeading: "画好 TikZ 图的技巧",
    tips: [
      {
        title: "描述要具体",
        body: "给出节点标签、形状、箭头方向和颜色。写明“从左到右”或“从上到下”，大多数布局问题就能解决。",
      },
      {
        title: "小步迭代",
        body: "先生成一个简单版本，再在 Octree 中每次提出一处修改，而不是从头重写提示词。",
      },
      {
        title: "函数图像请用 pgfplots",
        body: "绘制坐标轴、函数图像和数据图表时，pgfplots 生成器产出的代码比纯 TikZ 更简洁。",
      },
    ],
    faqHeading: "TikZ 生成器常见问题",
    faq: [
      {
        question: "不安装 LaTeX，可以在线使用 TikZ 吗？",
        answer:
          "可以。TikZ 生成器会编写代码，并在 Octree 服务器上用完整的 TeX Live 发行版编译，因此无需安装任何软件，就能在浏览器中预览示意图。",
      },
      {
        question: "有没有带实时预览的在线 TikZ 编辑器？",
        answer:
          "本页生成的代码是只读的。你可以把它粘贴到 tools.useoctree.com/tools/latex-preview 的免费在线 LaTeX 编辑器中，边输入边重新编译；或者在 Octree 中打开，用 AI 编辑并保存为项目。",
      },
      {
        question: "它能生成哪些类型的 TikZ 图？",
        answer:
          "流程图、树、图论图与网络图、框图、状态机、神经网络示意图、韦恩图、交换图和几何图形。非常精细的工程图通常需要事后手动修改。",
      },
      {
        question: "TikZ 生成器免费吗？",
        answer:
          "免费。生成、预览、复制和下载代码都无需账号。只有想把示意图保存为项目时，才需要一个免费的 Octree 账号。",
      },
      {
        question: "生成的代码能在 Overleaf 中使用吗？",
        answer:
          "能。输出是一份加载 tikz 和标准 TikZ 库的标准 LaTeX 文档，可用 pdfLaTeX 编译，因此在 Overleaf、Octree 和本地 TeX 发行版中都能使用。",
      },
    ],
    related: (
      <>
        在{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          TikZ 指南
        </IntroLink>
        中学习语法，在 <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中编辑 TikZ
        代码，或用 <IntroLink href="/tools/image-to-tikz">图片转 TikZ</IntroLink> 把现有图片转换为代码。
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "AI LaTeX 生成器：把文字描述变成 LaTeX 代码",
    intro: (
      <>
        <p>
          这款 AI LaTeX 生成器可以根据自然语言描述编写 LaTeX 代码。无论你需要 beamer 幻灯片、实验报告、双栏文章还是表格，它都会返回一份完整的文档，包含合适的文档类、amsmath、amssymb
          和 graphicx 等宏包，以及可供填写的章节结构。
        </p>
        <p>
          预览由 Octree 编译服务上的完整 TeX Live 发行版编译：默认使用 pdfLaTeX，代码需要时使用 XeLaTeX 或
          LuaLaTeX。无需注册账号；只有想把结果保存为项目时，才需要免费注册。
        </p>
      </>
    ),
    stepsHeading: "如何用 AI 生成 LaTeX",
    steps: [
      {
        title: "描述你的需求",
        body: "写一两句话：文档类型、包含哪些章节，以及任何具体要求，例如一张表格、一个公式或双栏排版。",
      },
      {
        title: "生成 LaTeX 代码",
        body: "点击“生成 LaTeX”。代码会以完整文档的形式逐步输出，文档类、宏包和结构都已就绪。",
      },
      {
        title: "预览后复制或继续编辑",
        body: "切换到预览标签页查看编译后的 PDF。复制代码、下载为 .tex 或 PDF，或在 Octree 中打开继续编辑。",
      },
    ],
    tipsHeading: "获得更好 LaTeX 输出的技巧",
    tips: [
      {
        title: "指明文档类",
        body: "说明是 article、report、beamer 幻灯片还是 letter，并列出需要的章节；描述含糊只会得到泛泛的文档。",
      },
      {
        title: "一次只提一个需求",
        body: "单独一张表格、一种图片排版或一组幻灯片，生成效果比一次性要整篇学位论文更好。过长的请求可能会被截断。",
      },
      {
        title: "替换占位文本",
        body: "生成器写的是结构和示例内容，而不是你的研究成果。请检查每一个公式，并且绝不要保留未经核实的引用。",
      },
    ],
    faqHeading: "AI LaTeX 生成器常见问题",
    faq: [
      {
        question: "什么是 AI LaTeX 生成器？",
        answer:
          "它能把自然语言描述转换成 LaTeX 代码。你描述想要的文档，生成器会写出一个完整的 .tex 文件，包含文档类、所需宏包、章节和占位内容，之后由你进行编辑。",
      },
      {
        question: "这个 LaTeX 代码生成器免费吗？",
        answer:
          "免费。无需账号即可生成、预览、复制和下载 LaTeX。只有想把文档保存为项目并继续编辑时，才需要一个免费的 Octree 账号。",
      },
      {
        question: "生成的 LaTeX 能编译通过吗？",
        answer:
          "预览会在 Octree 编译服务上用完整的 TeX Live 编译（默认 pdfLaTeX，代码需要时使用 XeLaTeX 或 LuaLaTeX）。如果编译失败，错误对话框会提供在 Octree 中打开文档的选项，让 AI 根据日志修复错误。",
      },
      {
        question: "它能帮我写一整篇论文吗？",
        answer:
          "它写的是论文的骨架：文档类、宏包、章节，以及示例公式或表格等占位内容。这些内容只是占位文本，而且很长的文档可能会被截断，因此请把输出当作起点。",
      },
      {
        question: "它能生成哪些类型的文档？",
        answer:
          "常见的需求包括文章、报告、beamer 演示文稿、信件、简历、作业、表格和独立公式。如果文档需要特定宏包，请在描述中注明。",
      },
    ],
    related: (
      <>
        想看懂它写的代码？阅读{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          LaTeX 入门介绍
        </IntroLink>
        ，或把任意 LaTeX 代码粘贴到 <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>
        中，借助实时 PDF 预览进行编辑。
      </>
    ),
  },

  "table-to-latex": {
    heading: "表格转 LaTeX：从 CSV 生成 LaTeX 表格",
    intro: (
      <>
        <p>
          这款 LaTeX 表格生成器可以把 CSV 文件转换为排版好的 LaTeX 表格。上传从 Excel、Google Sheets 或其他电子表格导出的
          .csv 文件，AI 模型（OpenAI gpt-4o-mini）会围绕 <Cmd>tabular</Cmd>{" "}
          环境写出一份完整的 LaTeX 文档，加载 booktabs 以获得简洁的横线，并设置好表头行和列对齐方式。这是把 Excel 转成
          LaTeX 最快的方法：先把工作表另存为 CSV，因为工具不能直接读取 .xlsx 文件。
        </p>
        <p>
          “预览”标签页会用 Octree 编译服务上的完整 TeX Live 发行版编译表格，让你在导出 .tex 文件、PDF 或 JPG
          图片之前先看到效果。文件在浏览器中读取并以文本形式发送，每次转换返回约 2,000 个 token 的 LaTeX，足以容纳几十行的结果表。完全免费，无需账号。
        </p>
      </>
    ),
    stepsHeading: "如何将 CSV 文件转换为 LaTeX 表格",
    steps: [
      {
        title: "将表格保存为 CSV",
        body: "在 Excel 中选择“文件 > 另存为 > CSV UTF-8(逗号分隔)”；在 Google 表格中选择“文件 > 下载 > 逗号分隔值 (.csv)”。请保持表头行位于第一行。",
      },
      {
        title: "上传 .csv 文件",
        body: "把文件拖到上传区域，或点击选择文件。LaTeX 表格会以完整文档的形式逐步输出到 “代码”标签页。",
      },
      {
        title: "预览并导出",
        body: "打开“预览”标签页把表格编译为 PDF，然后导出 .tex 文件、PDF 或 JPG 图片，或在 Octree 中打开，把表格放进你的论文。",
      },
    ],
    tipsHeading: "常见表格问题及解决方法",
    tips: [
      {
        title: "特殊字符导致表格出错",
        body: (
          <>
            单元格中的 <Cmd>&amp;</Cmd>、<Cmd>%</Cmd>、<Cmd>$</Cmd>、<Cmd>#</Cmd> 和 <Cmd>_</Cmd> 必须转义为{" "}
            <Cmd>\&amp;</Cmd>、<Cmd>\%</Cmd>、<Cmd>\$</Cmd>、<Cmd>\#</Cmd> 和 <Cmd>\_</Cmd>。如果预览失败，日志会指出需要修改的行。
          </>
        ),
      },
      {
        title: "表格超出页面",
        body: (
          <>
            过宽的表格会超出正文宽度。可以使用横向页面、改用 <Cmd>\small</Cmd> 等较小字号，或用 graphicx 的{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> 包裹 tabular。
          </>
        ),
      },
      {
        title: "大型表格会被截断",
        body: "每次转换返回约 2,000 个 token 的 LaTeX，能容纳几十行的表格。更大的表请拆分为多个 CSV 文件，或只保留论文需要的行。",
      },
    ],
    faqHeading: "LaTeX 表格生成器常见问题",
    faq: [
      {
        question: "如何把 Excel 表格转换成 LaTeX？",
        answer:
          "在 Excel 中把工作表另存为 CSV 文件（文件 > 另存为 > CSV），然后在这里上传 .csv 文件。本工具不能直接读取 .xlsx 文件，但工作表导出的 CSV 包含相同的单元格数值。你会得到一份完整 LaTeX 文档中的 booktabs 表格，可以预览、下载并粘贴到论文中。",
      },
      {
        question: "LaTeX 表格生成器支持哪些文件格式？",
        answer:
          "只支持 .csv 文件。Excel、Google Sheets、LibreOffice Calc 和 Numbers 都能把工作表导出为 CSV。本页不接受 JSON、.xlsx 或直接粘贴的表格。",
      },
      {
        question: "输出的表格使用 booktabs 吗？",
        answer:
          "使用。生成的文档会加载 booktabs，表格通常使用它的 \\toprule、\\midrule 和 \\bottomrule 横线。把 tabular 或 table 环境复制到你自己的文档中，并在导言区添加 \\usepackage{booktabs} 即可。",
      },
      {
        question: "CSV 转 LaTeX 工具免费吗？",
        answer:
          "免费，而且无需账号。表格由 AI 模型（OpenAI gpt-4o-mini）生成，使用前请在预览中核对数字和列对齐。",
      },
    ],
    related: (
      <>
        在{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          LaTeX 表格指南
        </IntroLink>
        中学习 tabular、multirow 和列格式，用{" "}
        <IntroLink href="/tools/pgfplots-generator">PGFPlots 生成器</IntroLink>为同一组数据绘图，或查看所有{" "}
        <IntroLink href="/tools/latex-converter">LaTeX 转换工具</IntroLink>。
      </>
    ),
  },

  "equation-to-latex": {
    heading: "公式转 LaTeX：在线公式转换工具的使用方法",
    intro: (
      <p>
        只需三步，即可把任何数学公式转换为 LaTeX。本工具支持键入的公式、截图和手写公式，生成的 LaTeX
        可以直接粘贴到论文、作业或笔记中。
      </p>
    ),
    stepsHeading: "三步将公式转换为 LaTeX",
    steps: [
      {
        title: "输入或上传公式",
        body: "用自然语言输入公式（如“x 平方从 0 到 1 的积分”），粘贴任意写法的数学式，或者拖入一张图片：教材公式的截图、白板照片，或是 iPad、手机上的手写公式。",
      },
      {
        title: "转换为 LaTeX",
        body: "点击“转换为 LaTeX”。AI 会识别公式中的分式、根号、求和、积分、矩阵和希腊字母，并使用 amsmath 写出标准 LaTeX，输出可在 Overleaf、Octree 或任何 TeX 发行版中编译。",
      },
      {
        title: "检查预览并复制代码",
        body: "渲染后的公式会显示在代码旁边，方便你逐个确认符号。复制 LaTeX 代码、下载为 .tex 文件或 PDF，或在 Octree 中打开继续编辑。",
      },
    ],
    tipsHeading: "常见用途",
    tips: [
      {
        title: "作业和习题",
        body: "无需先学会每一条 LaTeX 命令，就能把手写解答变成打字版提交。",
      },
      {
        title: "学术论文和学位论文",
        body: "把笔记、幻灯片或旧 PDF 中的公式整理成干净、可编辑的 LaTeX，放进你的稿件。",
      },
      {
        title: "课堂笔记",
        body: "下课后拍下黑板或笔记本，把每个公式转换成 LaTeX 写进笔记。",
      },
      {
        title: "教材公式截图",
        body: "上传教材或期刊页面的截图片段，直接得到公式背后的 LaTeX，无需重新输入。",
      },
      {
        title: "iPad 或平板上的手写",
        body: "从 GoodNotes、Notability 或 OneNote 中把手写公式导出为图片，一步完成转换。",
      },
    ],
    faqHeading: "公式转 LaTeX 常见问题",
    faq: [
      {
        question: "如何把公式转换成 LaTeX？",
        answer:
          "以纯文本或数学写法输入公式，或上传公式图片，然后点击“转换为 LaTeX”。转换工具会返回使用 amsmath 的 LaTeX 代码，并显示渲染预览，方便你在复制到文档之前检查。",
      },
      {
        question: "可以把手写公式转换成 LaTeX 吗？",
        answer:
          "可以。以 JPEG、PNG、GIF 或 WebP 格式上传手写公式的照片或扫描件，包括从 iPad 或平板应用导出的手写内容。图片清晰、对比度高、每张只包含一个公式时，得到的 LaTeX 最准确。",
      },
      {
        question: "公式转 LaTeX 工具免费吗？",
        answer:
          "免费。转换工具可免费使用，无需账号。你可以复制 LaTeX 代码、下载 .tex 文件或编译好的 PDF，或在 Octree 编辑器中打开结果。",
      },
      {
        question: "输出的代码需要哪些 LaTeX 宏包？",
        answer:
          "生成的代码使用标准数学写法，配合 amsmath、amssymb 和 amsfonts 宏包即可编译。如果下载 .tex 文件，导言区已经包含这些宏包，输出可在 Overleaf 和所有常见 TeX 发行版中使用。",
      },
    ],
    related: (
      <>
        想了解输出中用到的命令？浏览 <IntroLink href="/symbols">LaTeX 符号大全</IntroLink>。纯文本数学写法直接输入上方的输入框即可；如需把结果当作完整文档继续编辑，请使用
        <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>。
      </>
    ),
  },
  "arxiv-to-latex": {
    heading: "arXiv 转 LaTeX：下载任意 arXiv 论文的 LaTeX 源码",
    intro: (
      <>
        <p>
          arXiv 上的大多数论文都是用 LaTeX 写成的，而 arXiv 会保存作者上传的源码：.tex 文件、参考文献、样式文件和图片。本工具帮你获取这份 arXiv LaTeX 源码。粘贴论文编号或链接，即可浏览全部文件、阅读主 .tex 文件，并把 arXiv 源码打包为 .zip 下载，无需自己解压 .tar.gz。
        </p>
        <p>
          文件直接从 arXiv 的 e-print 服务下载，不会保存任何内容。支持最大 30 MB、最多 200 个文件的源码。只以 PDF 形式提交的论文没有可下载的 TeX 源码；遇到这种情况，工具会给出提示，并引导你改用转换工具。
        </p>
      </>
    ),
    stepsHeading: "如何下载 arXiv 的 TeX 源码",
    steps: [
      {
        title: "粘贴 arXiv 编号或链接",
        body: "输入 2401.12345 这样的编号、hep-th/9711200 这样的旧式编号，或任意 arxiv.org/abs、arxiv.org/pdf 链接。加上版本号（如 2401.12345v2）即可获取该版本；不加版本号则获取最新版本。",
      },
      {
        title: "浏览 LaTeX 源码",
        body: "工具会从 arXiv 下载论文的 e-print 文件，解压后列出所有文件。主 .tex 文件（即包含 \\documentclass 和 \\begin{document} 的文件）会在查看器中打开；点击其他任意 .tex、.bib 或 .sty 文件即可阅读。",
      },
      {
        title: "下载或编辑源码",
        body: "把 arXiv 源码下载为 .zip，或在 Octree 中打开主文件，其中通过 \\input 和 \\include 引入的文件会被内联进来。上传 .zip 中的图片后，即可连同图片一起编译。",
      },
    ],
    faqHeading: "arXiv LaTeX 源码常见问题",
    faq: [
      {
        question: "如何下载 arXiv 论文的 LaTeX 源码？",
        answer:
          "把论文的 arXiv 编号或网址粘贴到本页的工具中。它会获取作者上传到 arXiv 的源码，列出所有文件，显示主 .tex 文件，并可将全部文件打包为 .zip 下载。在 arxiv.org 上，同样的文件位于论文摘要页的 TeX Source 链接后面，以 .tar.gz 格式打包。",
      },
      {
        question: "为什么有的论文显示没有 LaTeX 源码？",
        answer:
          "有些作者只向 arXiv 提交了 PDF，因此没有可下载的 .tex 文件。对于这类论文，可以用 PDF 转 LaTeX 工具把文字和公式重建为可编辑的 LaTeX，但它无法恢复原始源码。",
      },
      {
        question: "哪个文件是主 .tex 文件？",
        answer:
          "arXiv 源码中常常有多个 .tex 文件。如果 arXiv 的 00README 标明了顶层文件，工具就选择它；否则选择包含 \\documentclass 和 \\begin{document}、且没有被其他文件 \\input 的那个文件。通过 \\input 或 \\include 引入的章节会在文件树中作为单独的文件显示。",
      },
      {
        question: "可以复用 arXiv 论文的 LaTeX 源码吗？",
        answer:
          "源码可以用来研究论文是如何排版的、核对公式或借用宏定义。至于能否复用其中的文字、图片乃至整篇论文，取决于作者在 arXiv 上选择的许可协议（显示在摘要页上）；无论哪种情况，都请注明作者。",
      },
    ],
    related: (
      <>
        arXiv 上没有源码？试试 <IntroLink href="/tools/pdf-to-latex">PDF 转 LaTeX 工具</IntroLink>
        。在 <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中编辑和编译源码，或用{" "}
        <IntroLink href="/tools/latex-word-counter">LaTeX 字数统计工具</IntroLink>统计字数。
      </>
    ),
  },

  "citation-generator": {
    heading: "BibTeX 引用生成器：在线生成 LaTeX 参考文献条目",
    intro: (
      <>
        <p>
          这款 BibTeX 引用生成器可以把图书、期刊文章、会议论文或网页的信息转换为 BibTeX 条目，粘贴到 .bib 文件中即可在 LaTeX 中引用。粘贴结构化字段或自由格式的参考文献，生成器就会写出一个条目，包含条目类型、引用键，以及它能识别的字段：author、title、year、journal 或 booktitle、volume、pages、publisher 和 DOI。
        </p>
        <p>
          条目由 AI 模型（OpenAI gpt-4o-mini）根据你粘贴的文字编写。它不会查询 Crossref、PubMed 或图书馆目录，因此只给出 DOI 或 URL 不足以得到可靠的结果：请附上标题和作者，并对照原始文献核对输出。本工具免费、无需账号，可导出适用于 BibTeX、natbib 和 biblatex 的 references.bib 文件。
        </p>
      </>
    ),
    stepsHeading: "如何生成 BibTeX 引用",
    steps: [
      {
        title: "描述文献信息",
        body: "粘贴图书、文章或会议论文的标题、作者、年份和发表刊物或会议，顺序不限，也可以直接粘贴一条自由格式的参考文献。DOI 或 URL 也可以填进去，但请同时补充你掌握的其他信息，因为生成器不会去抓取这些信息。",
      },
      {
        title: "生成 BibTeX 条目",
        body: (
          <>
            点击“生成 BibTeX”。AI 会选择条目类型（<Cmd>@article</Cmd>、<Cmd>@book</Cmd>、
            <Cmd>@inproceedings</Cmd> 等），编写 <Cmd>goodfellow2016deep</Cmd> 这样的引用键，并填写它能识别的字段。
          </>
        ),
      },
      {
        title: "核对并保存",
        body: (
          <>
            将各字段与出版商页面对照，然后复制条目，或点击“导出为 .bib”下载 <Cmd>references.bib</Cmd>
            。“预览”标签页会在 Octree 中打开一份引用了所有键的 natbib 测试文档。
          </>
        ),
      },
    ],
    tipsHeading: "常见 BibTeX 错误及解决方法",
    tips: [
      {
        title: "Citation undefined（引用未定义）",
        body: (
          <>
            <Cmd>\cite{"{...}"}</Cmd> 中的键必须与 <Cmd>@article{"{"}</Cmd> 后面的键完全一致，而且文档中需要有
            <Cmd>\bibliography{"{references}"}</Cmd>，以及 <Cmd>\bibliographystyle{"{plain}"}</Cmd>
            之类的样式。先运行 BibTeX，再运行两次 LaTeX。
          </>
        ),
      },
      {
        title: "作者姓名顺序错误",
        body: (
          <>
            多位作者之间用 <Cmd>and</Cmd> 分隔，而不是逗号：
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>
            。单个姓名内部的逗号表示“姓, 名”（Last, First）的顺序。
          </>
        ),
      },
      {
        title: "大写字母消失",
        body: (
          <>
            许多样式会把标题转为小写。用花括号包住缩写词和专有名词，例如 <Cmd>{"{BERT}"}</Cmd> 或{" "}
            <Cmd>{"{Bayesian}"}</Cmd>，即可保留其中的大写字母。
          </>
        ),
      },
    ],
    faqHeading: "BibTeX 引用生成器常见问题",
    faq: [
      {
        question: "如何生成 BibTeX 引用？",
        answer:
          "把文献信息（标题、作者、年份、期刊或出版社）粘贴到输入框中，然后点击“生成 BibTeX”。工具会返回一个完整的 BibTeX 条目，包含条目类型、引用键和相应字段，你可以复制它，或下载为 references.bib。",
      },
      {
        question: "可以根据 DOI 或 URL 生成 BibTeX 条目吗？",
        answer:
          "可以粘贴 DOI 或 URL，但生成器不会在 Crossref 或网上查询：条目是 AI 模型根据你提供的文字写出来的。对于知名论文，它通常能正确填写各字段，但也可能出错，因此请逐一核对每个字段，或在 DOI 之外一并粘贴标题、作者和发表刊物或会议。",
      },
      {
        question: "它能生成 APA、MLA 或 IEEE 格式的引用吗？",
        answer:
          "它只输出 BibTeX。引用格式在你的 LaTeX 文档中选择，例如 \\bibliographystyle{IEEEtran} 或 \\bibliographystyle{apalike}，或者使用 biblatex 并设置 style=apa，因此同一个 .bib 条目可以按任意格式输出。",
      },
      {
        question: "BibTeX 生成器免费吗？",
        answer:
          "免费，而且无需账号。本页不会保存任何内容，离开前请复制条目或导出 .bib 文件。",
      },
    ],
    related: (
      <>
        在{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          LaTeX 参考文献指南
        </IntroLink>
        中查看完整示例，从 <IntroLink href="/templates">LaTeX 模板</IntroLink>开始写论文，或在{" "}
        <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中编译文档。
      </>
    ),
  },

  "html-to-latex": {
    heading: "HTML 转 LaTeX：在线 HTML 转 LaTeX 转换器",
    intro: (
      <>
        <p>
          这款 HTML 转 LaTeX 转换器可以把网页标记转换为一份完整、可编译的 LaTeX 文档。把 HTML 粘贴到编辑器中，AI 模型（OpenAI gpt-4o-mini）会把每个元素映射为对应的 LaTeX 写法：
          <Cmd>{"<h1>"}</Cmd> 到 <Cmd>{"<h3>"}</Cmd> 标题转为章节，<Cmd>{"<ul>"}</Cmd> 和 <Cmd>{"<ol>"}</Cmd>
          转为 itemize 和 enumerate，<Cmd>{"<table>"}</Cmd> 转为 tabular，<Cmd>{"<strong>"}</Cmd>、
          <Cmd>{"<em>"}</Cmd>、<Cmd>{"<code>"}</Cmd>
          和链接转为相应的 LaTeX 命令，并在导言区加载 amsmath、amssymb 和 hyperref。
        </p>
        <p>
          “预览”标签页会用 Octree 编译服务上的完整 TeX Live 发行版编译结果，让你在下载 .tex 文件之前先看到 PDF。本工具接受粘贴的标记，不接受 URL；每次转换返回约 2,000 个 token 的 LaTeX，因此较长的网页最好分段转换。完全免费，无需账号。
        </p>
      </>
    ),
    stepsHeading: "如何将 HTML 转换为 LaTeX",
    steps: [
      {
        title: "粘贴 HTML",
        body: "用你自己的标记替换示例：可以是整个网页、一段文章片段，或是从网站、CMS 导出内容中复制的表格源码。",
      },
      {
        title: "转换为 LaTeX",
        body: (
          <>
            点击“转换为 LaTeX”。LaTeX 会以完整文档的形式逐步输出到“代码”标签页，从
            <Cmd>\documentclass{"{article}"}</Cmd> 一直到 <Cmd>\end{"{document}"}</Cmd>。
          </>
        ),
      },
      {
        title: "预览并导出",
        body: "打开“预览”标签页把文档编译为 PDF，然后导出为 .tex 文件或 PDF，或在 Octree 中打开继续编辑。",
      },
    ],
    tipsHeading: "让转换结果更干净的技巧",
    tips: [
      {
        title: "去掉 LaTeX 用不上的内容",
        body: "转换前请删除脚本、内联样式、导航栏和广告。颜色、字体等段落级 CSS 在 LaTeX 中没有直接对应的写法，而且输入越短，留给正文内容的空间就越多。",
      },
      {
        title: "图片会变成占位行",
        body: (
          <>
            <Cmd>{"<img>"}</Cmd> 标签只能转换为一行 <Cmd>\includegraphics</Cmd>
            ；图片文件本身不会被下载，因此预览无法显示图片。请在 Octree 中添加图片文件，或把这些行注释掉。
          </>
        ),
      },
      {
        title: "特殊字符",
        body: (
          <>
            如果编译在某个符号处失败，请检查正文中的 <Cmd>&amp;</Cmd>、<Cmd>%</Cmd>、<Cmd>#</Cmd> 和 <Cmd>_</Cmd>
            是否已转义为 <Cmd>\&amp;</Cmd>、<Cmd>\%</Cmd>、<Cmd>\#</Cmd> 和 <Cmd>\_</Cmd>。
          </>
        ),
      },
    ],
    faqHeading: "HTML 转 LaTeX 常见问题",
    faq: [
      {
        question: "如何把 HTML 转换成 LaTeX？",
        answer:
          "把 HTML 粘贴到本页的编辑器中，然后点击“转换为 LaTeX”。标题会转为 \\section 命令，列表转为 itemize 或 enumerate，表格转为 tabular，粗体、斜体和链接分别转为 \\textbf、\\emph 和 \\href。在“预览”标签页中检查结果，然后下载 .tex 或 PDF。",
      },
      {
        question: "这个工具能把 LaTeX 转换成 HTML 吗？",
        answer:
          "不能，它只能把 HTML 转换为 LaTeX。要把 LaTeX 转换为 HTML，通常的做法是使用本地 TeX 工具，例如 TeX4ht 中的 make4ht 或 htlatex，或者使用 Pandoc（pandoc paper.tex -o paper.html）。如果是为了网页发布，也可以使用本站的 LaTeX 转 Markdown 工具。",
      },
      {
        question: "HTML 最长可以有多长？",
        answer:
          "输入长度没有固定上限，但每次转换返回约 2,000 个 token 的 LaTeX，大约相当于几页内容。较长的网页请分段转换，或先删除脚本、样式和导航栏，只发送正文内容。",
      },
      {
        question: "HTML 转 LaTeX 转换器免费吗？",
        answer:
          "免费，而且无需账号。转换使用 AI 模型（OpenAI gpt-4o-mini），请校对输出，尤其是包含合并单元格的表格。",
      },
    ],
    related: (
      <>
        需要其他格式？查看所有 <IntroLink href="/tools/latex-converter">LaTeX 转换工具</IntroLink>，把{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown 转换为 LaTeX</IntroLink>，或在{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          LaTeX 表格指南
        </IntroLink>
        中学习基础知识。
      </>
    ),
  },

  "latex-to-word": {
    heading: "LaTeX 转 Word：在线将 LaTeX 转换为 DOCX",
    intro: (
      <>
        <p>
          这款 LaTeX 转 Word 工具可以把 .tex 文档转换为可编辑的 Microsoft Word .docx 文件。转换分两步进行。第一步，AI 模型（OpenAI gpt-4o-mini）读取你的 LaTeX，将其改写为干净的语义化 HTML，保留
          <GuideCode>\section</GuideCode> 标题、列表、<GuideCode>tabular</GuideCode>
          表格、粗体和斜体文字、链接以及脚注，同时丢弃导言区和在 Word 中没有意义的版式命令。第二步，这份 HTML 会按固定规则映射为 Word 自身的构件：“标题 1”到“标题 6”样式、项目符号列表和编号列表、带标题行的表格，以及带格式的文本。
        </p>
        <p>
          生成的是原生 .docx 文件，因此修订、批注和目录都能像在任何 Word 文件中一样使用。数学公式会写成可读的 Unicode 文本，而不是 Word 公式；图片会变成对应的图注；输入上限为 60,000 个字符。本转换工具免费、无需账号，文件发回后不会保留任何内容。
        </p>
        <GuideTable
          headers={["LaTeX", "Word 输出"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "“标题”“标题 1”“标题 2”样式"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "项目符号列表和编号列表，保留嵌套层级"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "标题行加粗的 Word 表格；题注位于表格上方"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "粗体、斜体、下划线、等宽字体文本"],
            [<GuideCode key="5">$inline math$</GuideCode>, "带 Unicode 符号、上标和下标的可读文本"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "每行公式一个居中段落，保留公式编号"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "可点击的超链接；脚注文字放在括号中"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "[key] 占位符和带编号的 References（参考文献）部分"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "仅保留图注（图片文件不会上传）"],
          ]}
        />
      </>
    ),
    stepsHeading: "如何将 LaTeX 转换为 Word",
    steps: [
      {
        title: "粘贴 LaTeX 代码",
        body: "粘贴 .tex 文件的内容，可以是完整文档，也可以是片段，最多 60,000 个字符。",
      },
      {
        title: "转换为 Word",
        body: "点击“Convert to Word”。转换完成后，document.docx 会自动下载；下载按钮会一直保留，方便再下载一份。",
      },
      {
        title: "在 Word 中打开",
        body: "用 Microsoft Word、Google 文档、LibreOffice 或 Pages 打开文件。标题使用的是 Word 内置的“标题”样式，因此导航窗格和目录可以直接使用。",
      },
    ],
    tipsHeading: "转换限制及应对方法",
    tips: [
      {
        title: "公式会变成纯文本",
        body: (
          <>
            数学公式会变成 x² + y² = r² 这样的可读 Unicode 文本，而不是可编辑的 Word 公式。如需原生 Word（OMML）公式，请在本地运行
            Pandoc：<Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>，或用{" "}
            <IntroLink href="/tools/latex-to-png">LaTeX 转 PNG 工具</IntroLink>渲染关键公式。
          </>
        ),
      },
      {
        title: "图片只保留图注",
        body: "图片文件不会随文本一起上传，因此每张图片只会保留它的图注。请之后在 Word 中插入图片。",
      },
      {
        title: "输入内容过长",
        body: "上限为 60,000 个字符。学位论文请逐章转换，再把各部分粘贴到同一个 Word 文件中。",
      },
    ],
    faqHeading: "LaTeX 转 Word 常见问题",
    faq: [
      {
        question: "如何把 LaTeX 文件转换成 Word？",
        answer:
          "把 .tex 文件的内容粘贴到编辑器中，然后点击“Convert to Word”。转换工具会读取 LaTeX 的结构，将其重建为包含真正的标题、列表、表格和文本格式的 Word 文档，并把 document.docx 下载到你的电脑。可以用 Microsoft Word、Google 文档、LibreOffice 或 Pages 打开。",
      },
      {
        question: "LaTeX 转 Word 时，公式会怎样处理？",
        answer:
          "行内公式和行间公式会转换为带 Unicode 符号的可读纯文本（例如 x² + y² = r² 或 ∫ f(x) dx），行间公式单独成行并居中。它们不是 Word 原生的公式对象。如果需要可编辑的 Word 公式（OMML），请在本地运行 Pandoc：pandoc paper.tex -o paper.docx。如果想让公式与排版效果完全一致，可以用 LaTeX 转 PNG 工具渲染后粘贴图片。",
      },
      {
        question: "表格、列表和参考文献会保留吗？",
        answer:
          "表格（tabular、booktabs、longtable）会变成带标题行的真正 Word 表格；itemize 和 enumerate 会变成项目符号列表和编号列表；粗体、斜体、下划线、等宽字体、链接和脚注都会保留。引用会显示为 [key] 或“作者-年份”形式的文本，thebibliography 环境会变成带编号的 References（参考文献）部分。由于转换工具拿不到图片文件，图片会被替换为图注。",
      },
      {
        question: "LaTeX 转 Word 免费吗？会保存我的文档吗？",
        answer:
          "转换工具免费，无需注册。你的 LaTeX 会发送到我们的服务器进行转换，Word 文件在内存中生成并以流式方式传回你的浏览器；响应发送后不会保留任何内容。支持最多 60,000 个字符的文档，足以容纳一篇典型论文或学位论文的一章。",
      },
    ],
    related: (
      <>
        需要用于 Notion 或 GitHub 的 Markdown？请使用{" "}
        <IntroLink href="/tools/latex-to-markdown">LaTeX 转 Markdown 工具</IntroLink>，在{" "}
        <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中编译 PDF，或查看所有{" "}
        <IntroLink href="/tools/latex-converter">LaTeX 转换工具</IntroLink>。
      </>
    ),
  },

  "latex-to-png": {
    heading: "LaTeX 转 PNG 在线：把公式渲染为高清透明背景图片",
    intro: (
      <>
        <p>
          这款 LaTeX 转 PNG 工具可以把公式、TikZ 图或文档的第一页渲染为 PNG 图片。代码由 Octree 编译服务上的完整 TeX Live 发行版编译，与
          <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>
          使用的是同一个服务，因此你在本地会用到的宏包这里都有。PDF 返回浏览器后，pdf.js 会按你选择的 DPI 将其第一页栅格化，生成透明或白色背景的 PNG。整个过程不涉及 AI，编译完成后不会保存任何内容。
        </p>
        <p>
          对于单个公式，带 <GuideCode>preview</GuideCode> 选项的 <GuideCode>standalone</GuideCode>
          文档类会把页面裁剪到公式大小，<GuideCode>border=4pt</GuideCode>
          会在公式四周留出少许空白。生成的图片可用于幻灯片、Word 和 Google 文档、README 文件、Notion、Slack 或电子邮件等任何无法排版数学公式的地方。完全免费，无需账号。
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "如何将 LaTeX 转换为 PNG",
    steps: [
      {
        title: "编写公式或文档",
        body: (
          <>
            编辑示例，它使用 <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd>
            ，让图片裁剪到公式大小；也可以粘贴任意完整文档。
          </>
        ),
      },
      {
        title: "选择分辨率和背景",
        body: "在“Resolution”中选择 1× (96 DPI)、2× (192 DPI) 或 4× (384 DPI)。用于幻灯片和深色主题时保持勾选“Transparent background”（透明背景），需要白色背景时取消勾选。",
      },
      {
        title: "转换并保存",
        body: "点击“Convert to PNG”。下载 latex.png，或把图片复制到剪贴板，再粘贴到 PowerPoint、Google 文档、Notion 或 Slack 中。",
      },
    ],
    tipsHeading: "生成更好图片的技巧",
    tips: [
      {
        title: "公式紧贴图片边缘",
        body: (
          <>
            在文档类选项中增大 <Cmd>border=4pt</Cmd>。使用行内的 <Cmd>$\displaystyle ...$</Cmd>，而不是会占满整行宽度的{" "}
            <Cmd>\[ ... \]</Cmd>。
          </>
        ),
      },
      {
        title: "用于深色幻灯片的图片",
        body: (
          <>
            加载 <Cmd>xcolor</Cmd>，并在公式前写上 <Cmd>\color{"{white}"}</Cmd>
            ；配合透明背景，白色文字可以放在任何深色主题上。
          </>
        ),
      },
      {
        title: "只显示了一页",
        body: "只会渲染 PDF 的第一页。请把每个公式单独转换，或在在线 LaTeX 编辑器中把多页文档编译为 PDF。",
      },
    ],
    faqHeading: "LaTeX 转 PNG 常见问题",
    faq: [
      {
        question: "如何把 LaTeX 公式转换为 PNG 图片？",
        answer:
          "把公式放进一个 standalone 文档中（默认示例使用 \\documentclass[preview,border=4pt]{standalone}），选择分辨率，然后点击“Convert to PNG”。LaTeX 会在我们的服务器上编译为 PDF，第一页在你的浏览器中渲染，之后你可以下载 PNG，或直接复制到剪贴板。",
      },
      {
        question: "可以生成透明背景的 LaTeX PNG 吗？",
        answer:
          "可以。保持勾选“Transparent background”（透明背景）选项即可。由于 standalone 文档类不会绘制页面底色，公式以外的所有像素都保持透明，因此图片可以干净地放在深色幻灯片、彩色背景和网页上。取消勾选即可得到不透明的白色背景。",
      },
      {
        question: "用于幻灯片或打印时，应该选择哪个分辨率？",
        answer:
          "1×（96 DPI）适合快速预览或聊天消息。用于 Google 幻灯片、PowerPoint、Word、Google 文档和 Notion 时选择 2×（192 DPI），在这些场景中，图片在高分辨率屏幕上大致按原始尺寸显示。图片需要打印或放大时选择 4×（384 DPI）。",
      },
      {
        question: "除了公式，它也支持完整的 LaTeX 文档吗？",
        answer:
          "支持。任何能用 pdflatex 编译的文档都可以，包括 article、beamer 或 TikZ 图。只有第一页会被渲染为 PNG；多页文档请使用 LaTeX 预览工具编译并下载完整的 PDF。",
      },
    ],
    related: (
      <>
        需要整篇文档？在 <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中编译，把它转换为{" "}
        <IntroLink href="/tools/latex-to-word">Word 文件</IntroLink>，或在{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          LaTeX 数学公式指南
        </IntroLink>
        中查找命令。
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Markdown 转 LaTeX：在线转换 Markdown 文档",
    intro: (
      <>
        <p>
          这款 Markdown 转 LaTeX 转换器可以把 .md 文本转换为一份完整、可编译的 LaTeX 文档。AI 模型（OpenAI gpt-4o-mini）会把标题改写为章节，把粗体和斜体改写为
          <Cmd>\textbf</Cmd> 和 <Cmd>\textit</Cmd>
          ，把无序列表和编号列表改写为 itemize 和 enumerate，把表格改写为 tabular，把围栏代码块改写为代码清单，把链接改写为超链接，并加载 booktabs、listings 和 hyperref 等宏包，同时把行内公式和行间公式保留为 LaTeX 数学公式。
        </p>
        <p>
          “预览”标签页会用 Octree 编译服务上的完整 TeX Live 发行版编译结果，让你在下载 .tex 文件之前先看到 PDF。输入方式为粘贴文本，每次转换返回约 2,000 个 token 的 LaTeX，足够几页内容；更长的文件请拆分转换。本工具免费、无需账号，适用于 README 文件、课堂笔记，以及在 Obsidian、Notion 或 Typora 中写成、需要变成论文或学位论文章节的草稿。
        </p>
      </>
    ),
    stepsHeading: "如何将 Markdown 转换为 LaTeX",
    steps: [
      {
        title: "粘贴 Markdown",
        body: "用你自己的 .md 内容替换示例：可以是来自 Obsidian 或 Notion 的笔记、README，或包含标题、列表、表格、代码块和数学公式的草稿。",
      },
      {
        title: "转换为 LaTeX",
        body: (
          <>
            点击“转换为 LaTeX”。一份完整文档会逐步输出到“代码”标签页：<Cmd>#</Cmd> 标题变为 <Cmd>\section</Cmd>
            ，列表变为 itemize 和 enumerate，<Cmd>$...$</Cmd> 和 <Cmd>$$...$$</Cmd> 公式保留为 LaTeX 数学公式。
          </>
        ),
      },
      {
        title: "预览并导出",
        body: "打开“预览”标签页把文档编译为 PDF，然后导出 .tex 文件或 PDF，或在 Octree 中打开继续写作。",
      },
    ],
    tipsHeading: "常见错误及解决方法",
    tips: [
      {
        title: "数学公式中出现 Undefined control sequence",
        body: (
          <>
            Markdown 中的公式会原样保留，因此仅 KaTeX 支持的命令，或在没有加载 amssymb 时使用的 <Cmd>\mathbb</Cmd>
            ，都可能导致编译失败。日志会指出出错的行；修改命令或添加相应宏包即可。
          </>
        ),
      },
      {
        title: "图片没有显示",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> 会变成一行 <Cmd>\includegraphics</Cmd>
            ，但图片文件不会被上传。请在 Octree 中上传图片，或把这一行注释掉再编译。
          </>
        ),
      },
      {
        title: "长文档转换提前中断",
        body: "每次转换返回约 2,000 个 token 的 LaTeX。请把长文件按章或按节逐次转换，再把各部分拼接起来。",
      },
    ],
    faqHeading: "Markdown 转 LaTeX 常见问题",
    faq: [
      {
        question: "如何在线把 Markdown 转换成 LaTeX？",
        answer:
          "把 Markdown 粘贴到本页的编辑器中，然后点击“转换为 LaTeX”。工具会返回一份加载了所需宏包的完整 LaTeX 文档，你可以将其预览为 PDF，并下载为 .tex 文件。无需安装任何软件，也无需账号。",
      },
      {
        question: "数学公式会保留吗？",
        answer:
          "会。$...$ 中的行内公式和 $$...$$ 中的行间公式都会保留为 LaTeX 数学公式，导言区也会加载 amsmath 和 amssymb，因此为 MathJax 或 KaTeX 编写的公式通常无需修改就能编译。",
      },
      {
        question: "它和 Pandoc 有什么区别？",
        answer:
          "Pandoc（pandoc notes.md -o notes.tex）是需要在本地安装的确定性命令行转换工具。本工具在浏览器中运行，借助 AI 模型（OpenAI gpt-4o-mini）编写 LaTeX，并立即编译出 PDF 预览。由于 AI 可能改写措辞或调整结构，请校对输出。",
      },
      {
        question: "可以把 .md 文件转换为 .tex 吗？",
        answer:
          "用任意文本编辑器打开 .md 文件，把内容复制到转换工具中并点击“转换为 LaTeX”，然后通过“导出”下载 document.tex。本页接受粘贴的文本，不支持上传文件。",
      },
    ],
    related: (
      <>
        需要反向转换？请使用 <IntroLink href="/tools/latex-to-markdown">LaTeX 转 Markdown 工具</IntroLink>，查看所有{" "}
        <IntroLink href="/tools/latex-converter">LaTeX 转换工具</IntroLink>，或阅读{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          LaTeX 入门介绍
        </IntroLink>
        。
      </>
    ),
  },

  "latex-converter": {
    heading: "LaTeX 转换器：在线在 LaTeX 与其他格式之间互相转换",
    intro: (
      <>
        <p>
          Octree 的 LaTeX 转换器覆盖了人们最常需要转入和转出 LaTeX 的格式。转为 LaTeX：Markdown、HTML、MathML 和 Mermaid 图，Excel 或 Google 表格中的 CSV 表格，PDF，公式照片，示意图图片以及 arXiv 论文。从 LaTeX 转出：用于 GitHub 和 Notion 的 Markdown，供审稿人和投稿系统使用的 Word .docx，用于幻灯片的 PNG 图片，以及通过在线 LaTeX 编辑器得到的 PDF。
        </p>
        <p>
          每个转换工具都免费、在浏览器中运行、无需账号。其中大多数使用 AI 模型，因为把一种格式映射到另一种格式需要判断；输出为 LaTeX 的结果会由 Octree 编译服务上的完整 TeX Live 发行版编译，让你在下载前先核对 PDF。arXiv 转 LaTeX、LaTeX 转 PNG 和 LaTeX 转 PDF 完全不使用 AI。上方的表格列出了每个转换工具的输入、输出和最佳用途。
        </p>
      </>
    ),
    stepsHeading: "如何使用 LaTeX 转换工具",
    steps: [
      {
        title: "从你手头的格式开始",
        body: "选择与输入相符的卡片：从 Markdown、HTML、MathML、Mermaid、CSV 文件、PDF、图片或 arXiv 编号得到 LaTeX，或从 LaTeX 文档得到 Markdown、Word、PNG 或 PDF。",
      },
      {
        title: "粘贴或上传后转换",
        body: "每个转换工具都有独立的页面。粘贴内容或上传文件后点击转换按钮；AI 转换工具会边生成边逐步输出结果。",
      },
      {
        title: "检查结果并导出",
        body: "输出为 LaTeX 的结果都附有编译好的 PDF 预览，方便你在下载 .tex 文件前检查。在 Octree 中打开 LaTeX 结果即可继续编辑。",
      },
    ],
    tipsHeading: "提高转换效果的技巧",
    tips: [
      {
        title: "校对 AI 的输出",
        body: "AI 转换工具能处理杂乱的输入和不常见的宏包，但可能改写或遗漏内容。提交任何内容之前，请将预览与原文对照。",
      },
      {
        title: "长文档分段转换",
        body: "Markdown、HTML、Mermaid、CSV 转 LaTeX 以及 LaTeX 转 Markdown 工具每次转换返回约 2,000 个 token，大约几页内容；LaTeX 转 Word 最多接受 60,000 个字符。学位论文请按章拆分。",
      },
      {
        title: "图片需要单独处理",
        body: "所有转换工具都不会随文本上传图片文件。图片会变成 \\includegraphics 行、图片链接或图注，之后请另行添加图片文件。",
      },
    ],
    faqHeading: "LaTeX 转换器常见问题",
    faq: [
      {
        question: "什么是 LaTeX 转换器？",
        answer:
          "LaTeX 转换器用于在 LaTeX 源码和其他格式之间进行转换。转为 LaTeX 的工具接受 Markdown、HTML、MathML、Mermaid、CSV 表格、PDF 或图片，生成 .tex 代码；从 LaTeX 转出的工具接受 .tex 源码，生成 Markdown、PNG 图片、Word 文档或 PDF。本页汇集了 Octree 所有双向的免费转换工具。",
      },
      {
        question: "哪些转换工具使用 AI，哪些是确定性的？",
        answer:
          "Markdown、HTML、MathML、Mermaid、表格（CSV）、PDF、图片和公式转 LaTeX，以及 LaTeX 转 Markdown，都使用 AI 模型。LaTeX 转 Word 先用 AI 完成第一步，再以确定性的方式生成 .docx。arXiv 转 LaTeX、LaTeX 转 PNG 和 LaTeX 转 PDF 不使用 AI：它们会如实下载或编译你的输入。",
      },
      {
        question: "如何免费把 LaTeX 转换为 Word 或 PDF？",
        answer:
          "转 Word：打开 LaTeX 转 Word 工具，粘贴文档并下载 document.docx。转 PDF：打开在线 LaTeX 编辑器，粘贴文档并下载编译好的 PDF。两者都免费，无需账号。",
      },
      {
        question: "文档大小有限制吗？",
        answer:
          "LaTeX 转 Word 最多接受 60,000 个字符，PDF 转 LaTeX 接受不超过 3 MB、20 页的 PDF。Markdown、HTML、Mermaid、CSV 转 LaTeX 以及 LaTeX 转 Markdown 工具每次转换输出约 2,000 个 token，大约几页内容，因此长文档请分段转换。基于编译的工具接受任何能在服务器时间限制内编译完成的文档。",
      },
    ],
    related: (
      <>
        刚接触 LaTeX？阅读{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          LaTeX 入门介绍
        </IntroLink>
        ，在 <IntroLink href="/tools/latex-preview">在线 LaTeX 编辑器</IntroLink>中编辑文档，或浏览{" "}
        <IntroLink href="/">全部 LaTeX 工具</IntroLink>。
      </>
    ),
  },

  "latex-to-markdown": {
    heading: "LaTeX 转 Markdown：在线 LaTeX 转 Markdown 转换器",
    intro: (
      <>
        <p>
          这款 LaTeX 转 Markdown 转换器可以把 .tex 文档或代码片段转换为干净、标准的 Markdown。AI 模型（OpenAI gpt-4o-mini）会把章节改写为 <Cmd>#</Cmd>
          标题，把 itemize 和 enumerate 改写为列表，把 tabular 和 booktabs 表格改写为 Markdown 表格，把 <Cmd>\textbf</Cmd> 和 <Cmd>\emph</Cmd>
          改写为粗体和斜体，把代码环境改写为围栏代码块，把 <Cmd>\href</Cmd> 改写为链接。数学公式保留为 <Cmd>$...$</Cmd> 和 <Cmd>$$...$$</Cmd>
          之间的 LaTeX，GitHub、Obsidian 以及其他使用 KaTeX 或 MathJax 的渲染器都能显示。
        </p>
        <p>
          本工具免费、无需账号，接受粘贴的文本。每次转换返回约 2,000 个 token 的 Markdown，因此长论文请分段转换。图片会尽可能转换为图片链接，引用不会根据 .bib 文件解析，这些地方需要手动修改。你可以用它把论文发到博客、把课堂笔记变成 README，或把 LaTeX 笔记搬进 Notion 或 Obsidian。
        </p>
      </>
    ),
    stepsHeading: "如何将 LaTeX 转换为 Markdown",
    steps: [
      {
        title: "粘贴 LaTeX 代码",
        body: "粘贴完整的 .tex 文档，或只粘贴一个片段，例如一个章节、一张表格或一个列表。不需要导言区。",
      },
      {
        title: "转换为 Markdown",
        body: "点击“转换为 Markdown”。Markdown 会边生成边逐步输出到输出编辑器中。",
      },
      {
        title: "复制或下载",
        body: "从输出编辑器中复制 Markdown，或使用“导出为 Markdown”下载 document.md，用于 GitHub、Obsidian、Notion 或静态网站。",
      },
    ],
    tipsHeading: "让转换结果更干净的技巧",
    tips: [
      {
        title: "公式需要渲染器",
        body: (
          <>
            公式会保留为 <Cmd>$...$</Cmd> 和 <Cmd>$$...$$</Cmd>。GitHub、Obsidian、Jupyter 以及大多数配置了 KaTeX 或 MathJax 的静态网站生成器都能渲染它们；普通的 Markdown 查看器则会显示原始 LaTeX。
          </>
        ),
      },
      {
        title: "自定义宏",
        body: (
          <>
            用 <Cmd>\newcommand</Cmd> 定义的命令在 Markdown 中没有对应写法。请把这些定义一并放进输入，让转换工具可以展开它们，并检查结果。
          </>
        ),
      },
      {
        title: "图片和引用",
        body: (
          <>
            图片会尽可能转换为指向原始文件名的 Markdown 图片链接，<Cmd>\cite</Cmd>
            的键也不会根据 .bib 文件解析。请把图片上传到 .md 文件旁边，并手动修正参考文献。
          </>
        ),
      },
    ],
    faqHeading: "LaTeX 转 Markdown 常见问题",
    faq: [
      {
        question: "如何把 LaTeX 转换成 Markdown？",
        answer:
          "把 LaTeX 粘贴到左侧编辑器中，然后点击“转换为 Markdown”。章节会变成 # 标题，itemize 和 enumerate 变成列表，tabular 变成 Markdown 表格，\\textbf 和 \\emph 变成粗体和斜体，代码环境变成围栏代码块。复制结果，或导出 document.md。",
      },
      {
        question: "公式会保留吗？",
        answer:
          "会。行内公式保留为 $...$，行间公式保留为 $$...$$，内容仍是 LaTeX 写法，因此在任何用 MathJax 或 KaTeX 显示 Markdown 的地方都能渲染，包括 GitHub、Obsidian 和 Jupyter 笔记本。",
      },
      {
        question: "LaTeX 输入最长可以有多长？",
        answer:
          "输入长度没有固定上限，但每次转换返回约 2,000 个 token 的 Markdown，大约几页内容。学位论文或长篇论文请按章或按节逐次转换。",
      },
      {
        question: "它免费吗？比 Pandoc 更好吗？",
        answer:
          "免费，而且无需账号。它使用 AI 模型（OpenAI gpt-4o-mini），能应对不常见的宏包和杂乱的源码，但输出需要校对。Pandoc（pandoc paper.tex -o paper.md）是确定性的，更适合很长的文档，但需要在本地安装。",
      },
    ],
    related: (
      <>
        需要反向转换？请使用 <IntroLink href="/tools/markdown-to-latex">Markdown 转 LaTeX 工具</IntroLink>，导出为{" "}
        <IntroLink href="/tools/latex-to-word">Word</IntroLink>，或查看所有{" "}
        <IntroLink href="/tools/latex-converter">LaTeX 转换工具</IntroLink>。
      </>
    ),
  },

  "latex-word-counter": {
    heading: "LaTeX 字数统计：在线统计 LaTeX 文档字数",
    intro: (
      <p>
        统计 LaTeX 的字数比在文字处理软件中更难：直接统计 .tex 文件，会把 <Cmd>\begin{"{itemize}"}</Cmd>
        这样的命令、标签和公式也算进去。这款免费的 LaTeX 字数统计工具会像懂 TeX 的工具那样读取源码，忽略标记和数学公式，统计读者实际看到的文字。
      </p>
    ),
    stepsHeading: "如何统计 LaTeX 字数",
    steps: [
      {
        title: "粘贴 LaTeX 源码",
        body: "把整个 .tex 文件（包括导言区）粘贴到编辑器中，或只粘贴你想统计的那一节。",
      },
      {
        title: "自动统计",
        body: "字数会随着输入自动更新。你的源码会交给 texcount 处理，这是 TeX Live 自带、Overleaf 也在使用的统计工具，因此命令和标记都能被正确剔除。",
      },
      {
        title: "查看分类统计",
        body: "查看总字数，以及正文、标题和图注各自的字数，按期刊、课程或学位论文管理部门的要求取用相应的数字。",
      },
    ],
    tipsHeading: "统计哪些内容",
    tips: [
      {
        title: "正文",
        body: "段落、列表和脚注中的文字，包括 \\textbf{...}、\\emph{...} 等格式命令内部的文字。大多数字数限制指的就是这个数字。",
      },
      {
        title: "标题",
        body: "\\section、\\subsection、\\chapter 等标题中的文字，单独列出，方便你决定计入还是排除。",
      },
      {
        title: "图注",
        body: "用 \\caption{...} 编写的图表标题中的文字，同样单独列出。",
      },
      {
        title: "不计入的内容",
        body: "命令及其选项、标签、交叉引用和引用键（\\label、\\ref、\\cite）、% 之后的注释，以及数学公式：行内 $...$ 和行间公式属于公式而不是文字，因此公式不会让总字数虚高。",
      },
    ],
    faqHeading: "LaTeX 字数统计常见问题",
    faq: [
      {
        question: "如何统计 LaTeX 文档的字数？",
        answer:
          "把 .tex 源码粘贴到上方的 LaTeX 字数统计工具中，字数会立即显示，并分别给出正文、标题和图注的统计。离线时可以在命令行中对文件运行 texcount：texcount -inc -total main.tex。",
      },
      {
        question: "LaTeX 字数统计包括公式吗？",
        answer:
          "不包括。$E = mc^2$ 这样的行内公式和行间公式都被视为公式而不是文字，因此不会计入字数。",
      },
      {
        question: "它和 texcount 以及 Overleaf 的字数统计相比如何？",
        answer:
          "它运行的就是 texcount，即 TeX Live 和 MiKTeX 自带的 Perl 脚本，因此结果与你在本机运行 texcount -total 一致；Overleaf 的字数统计同样基于 texcount，所以总数应该非常接近。区别在于你无需在本地安装 TeX，也无需账号。",
      },
      {
        question: "参考文献和注释会计入字数吗？",
        answer:
          "不会。% 之后的注释会被忽略，texcount 默认也会跳过参考文献，因此 \\bibliography 或 thebibliography 环境中的参考文献不会被统计。\\cite{...} 中的引用键同样不算作文字。",
      },
    ],
    related: (
      <>
        需要把文档转换为其他格式？如果投稿需要 .docx，可以试试{" "}
        <IntroLink href="/tools/latex-to-word">LaTeX 转 Word 工具</IntroLink>，或浏览{" "}
        <IntroLink href="/symbols">LaTeX 符号大全</IntroLink>。
      </>
    ),
  },

  "mathml-to-latex": {
    heading: "MathML 转 LaTeX：在线转换 MathML 公式",
    intro: (
      <>
        <p>
          这款 MathML 转 LaTeX 转换器可以把 MathML 标记转换为能直接粘贴到论文中的 LaTeX 数学公式。粘贴一个 <Cmd>{"<math>"}</Cmd>
          元素，AI 模型（OpenAI gpt-4o-mini）就会把整棵树改写为 amsmath 代码：<Cmd>{"<mfrac>"}</Cmd> 变为 <Cmd>\frac</Cmd>，
          <Cmd>{"<msqrt>"}</Cmd> 变为 <Cmd>\sqrt</Cmd>，<Cmd>{"<msup>"}</Cmd> 和 <Cmd>{"<msub>"}</Cmd>
          变为上标和下标，<Cmd>{"<mtable>"}</Cmd>
          变为矩阵或对齐块。以 Unicode 字符给出的希腊字母和运算符通常会转换为对应的 LaTeX 命令。
        </p>
        <p>
          输出是一份完整的 LaTeX 文档，“预览”标签页会用 Octree 编译服务上的完整 TeX Live 发行版编译它，方便你核对每个符号。编辑器支持 XML 高亮，因此也可以当作简单的在线 MathML 编辑器使用。每次转换最多返回约 1,500 个 token 的 LaTeX，足够容纳几个公式。完全免费，无需账号。
        </p>
      </>
    ),
    stepsHeading: "如何将 MathML 转换为 LaTeX",
    steps: [
      {
        title: "粘贴 MathML",
        body: (
          <>
            粘贴从网页复制的 <Cmd>{"<math>"}</Cmd> 元素、从 Word 或 MathType 导出的内容，或 EPUB、JATS XML 文件中的 MathML。
          </>
        ),
      },
      {
        title: "转换为 LaTeX",
        body: "点击“转换为 LaTeX”。公式会放在一份加载了 amsmath 和 amssymb 的完整 LaTeX 文档中返回。",
      },
      {
        title: "检查预览",
        body: "打开“预览”标签页编译文档，把排版后的公式与原式对照，然后复制公式、导出 .tex 文件或 PDF，或在 Octree 中打开。",
      },
    ],
    tipsHeading: "MathML 转换技巧",
    tips: [
      {
        title: "复制完整的 math 元素",
        body: (
          <>
            请包含从 <Cmd>{"<math>"}</Cmd> 到 <Cmd>{"</math>"}</Cmd> 的全部内容。从 <Cmd>{"<mrow>"}</Cmd>
            中间开始的片段可能会丢失括号或某些项。
          </>
        ),
      },
      {
        title: "从 Word 中获取 MathML",
        body: "Word 以 OMML 而不是 MathML 存储公式。在 Windows 版 Word 中，打开“公式选项”，启用“将 MathML 以纯文本形式复制到剪贴板”，然后复制公式并粘贴到这里。",
      },
      {
        title: "只需要公式本身",
        body: (
          <>
            把 <Cmd>\begin{"{document}"}</Cmd> 和 <Cmd>\end{"{document}"}</Cmd>
            之间的内容复制到你自己的文件中；导言区只需要 <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>。
          </>
        ),
      },
    ],
    faqHeading: "MathML 转 LaTeX 常见问题",
    faq: [
      {
        question: "如何把 MathML 转换成 LaTeX？",
        answer:
          "把 MathML 标记粘贴到编辑器中，然后点击“转换为 LaTeX”。mfrac、msqrt、msup、msub、mover 和 mtable 等元素会被改写为 \\frac、\\sqrt、上标、下标、重音符号和矩阵，结果以完整 LaTeX 文档的形式显示，可以在“预览”标签页中编译。",
      },
      {
        question: "支持 Content MathML 吗？",
        answer:
          "本工具是为 Presentation MathML 设计的，也就是浏览器、Word 和 MathType 导出的那种。Content MathML（apply、ci、cn）通常也能转换，因为读取标记的是 AI 模型，但请在预览中检查结果。",
      },
      {
        question: "可以一次转换多个公式吗？",
        answer:
          "可以。把多个 math 元素依次粘贴进来，它们会被转换到同一份文档中。每次转换最多返回约 1,500 个 token 的 LaTeX，因此很长的文件请拆分转换。",
      },
      {
        question: "MathML 转 LaTeX 转换器免费吗？",
        answer:
          "免费，而且无需账号。转换使用 OpenAI gpt-4o-mini，预览使用完整的 TeX Live 发行版编译，因此你可以在使用前确认公式无误。",
      },
    ],
    related: (
      <>
        借助{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          LaTeX 数学公式指南
        </IntroLink>
        手写公式，用 <IntroLink href="/tools/math-to-latex">数学公式转 LaTeX</IntroLink>
        转换公式图片，或查看所有 <IntroLink href="/tools/latex-converter">LaTeX 转换工具</IntroLink>。
      </>
    ),
  },

  "mermaid-to-latex": {
    heading: "Mermaid 转 TikZ：把 Mermaid 图转换为 LaTeX",
    intro: (
      <>
        <p>
          这款转换工具可以把 Mermaid 图代码转换为 TikZ，让你在 Markdown 文件、GitHub README 或 Notion 中画好的流程图，以原生矢量图形的形式放进 LaTeX 论文。粘贴 Mermaid 定义，AI 模型（OpenAI gpt-4o-mini）会把每个节点、标签和箭头改写为一个
          <Cmd>tikzpicture</Cmd>
          ，并给出明确的位置以避免节点重叠，整体放在一份加载了 tikz 及所需库的完整 standalone 或 article 文档中。
        </p>
        <p>
          “预览”标签页会用 Octree 编译服务上的完整 TeX Live 发行版编译该图，让你在导出 .tex 文件或 PDF 之前检查布局。Mermaid 会自动排布图形而 TikZ 不会，因此大型图可能需要调整间距。流程图的效果最好；每次转换最多返回约 2,000 个 token 的 LaTeX。完全免费，无需账号。
        </p>
      </>
    ),
    stepsHeading: "如何将 Mermaid 转换为 TikZ",
    steps: [
      {
        title: "粘贴 Mermaid 代码",
        body: (
          <>
            粘贴以图类型开头的图定义，例如 <Cmd>graph TD</Cmd>、<Cmd>flowchart LR</Cmd> 或 <Cmd>sequenceDiagram</Cmd>
            ，不要包含外层的 <Cmd>```mermaid</Cmd> 代码围栏。
          </>
        ),
      },
      {
        title: "转换为 TikZ",
        body: "点击“转换为 LaTeX”。AI 会把节点、标签和箭头改写为一个 tikzpicture，放在完整的 LaTeX 文档中。",
      },
      {
        title: "预览、调整并导出",
        body: "打开“预览”标签页把图编译为 PDF。如有重叠，在代码中修改节点间距或位置，然后导出 diagram.tex 或 diagram.pdf，或在 Octree 中打开。",
      },
    ],
    tipsHeading: "常见问题及解决方法",
    tips: [
      {
        title: "节点重叠",
        body: (
          <>
            在 tikzpicture 选项中增大 <Cmd>node distance</Cmd>，或修改节点的放置方式，例如把 <Cmd>below of=</Cmd> 改为{" "}
            <Cmd>right of=</Cmd>。TikZ 不会像 Mermaid 那样自动排布图形。
          </>
        ),
      },
      {
        title: "未加载所需的库",
        body: (
          <>
            出现未知箭头或形状的错误，通常意味着缺少 <Cmd>\usetikzlibrary</Cmd>，例如 <Cmd>arrows.meta</Cmd>、<Cmd>shapes</Cmd> 或{" "}
            <Cmd>positioning</Cmd>。把它添加到导言区即可。
          </>
        ),
      },
      {
        title: "从小图开始",
        body: "流程图的转换最可靠。对于大型或复杂的图，请一次转换一部分，再把各个 tikzpicture 组合起来。",
      },
    ],
    faqHeading: "Mermaid 转 LaTeX 常见问题",
    faq: [
      {
        question: "如何在 LaTeX 中使用 Mermaid 图？",
        answer:
          "LaTeX 无法直接渲染 Mermaid。把 Mermaid 代码粘贴到本转换工具中，它会把图改写为 TikZ，也就是 LaTeX 原生使用的绘图宏包。把 tikzpicture 复制到你的文档中并加载 tikz 宏包，或者导出完整的 .tex 文件。",
      },
      {
        question: "支持哪些 Mermaid 图类型？",
        answer:
          "流程图和图（graph 和 flowchart）的转换最可靠。时序图、状态图和类图也能转换，因为读取代码的是 AI 模型，但 TikZ 输出中的位置可能需要调整。",
      },
      {
        question: "为什么要把 Mermaid 转换为 TikZ，而不是直接用图片？",
        answer:
          "TikZ 图是由 LaTeX 自己绘制的矢量图形，因此与正文字体相同，任意缩放都保持清晰，并且可以在源码中编辑。导出的 PNG 或 SVG 则必须回到 Mermaid 才能修改。",
      },
      {
        question: "Mermaid 转 LaTeX 转换器免费吗？",
        answer:
          "免费，而且无需账号。转换使用 OpenAI gpt-4o-mini，每次最多返回约 2,000 个 token 的 LaTeX，预览使用完整的 TeX Live 发行版编译。",
      },
    ],
    related: (
      <>
        在{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          TikZ 指南
        </IntroLink>
        中学习绘图命令，用 <IntroLink href="/tools/tikz-generator">TikZ 生成器</IntroLink>根据文字描述绘图，或用{" "}
        <IntroLink href="/tools/image-to-tikz">图片转 TikZ</IntroLink> 重绘草图。
      </>
    ),
  },

  "pgfplots-generator": {
    heading: "PGFPlots 生成器：用文字描述在线生成 LaTeX 图表",
    intro: (
      <>
        <p>
          这款 PGFPlots 生成器可以把对图表的自然语言描述转换为 pgfplots 代码。描述一个函数、一组数据点或一种图表类型，AI 模型（OpenAI GPT-5）就会写出一份完整的 LaTeX 文档，其中包含带注释的
          <Cmd>tikzpicture</Cmd> 和 <Cmd>axis</Cmd>
          环境：折线图和函数图、柱状图、散点图、直方图以及三维曲面图，并按你的要求设置坐标轴标签、范围、图例和颜色。
        </p>
        <p>
          “预览”标签页会用 Octree 编译服务上的完整 TeX Live 发行版编译图表，让你在导出 .tex 文件之前先看到 PDF。由于图表由 LaTeX 绘制，它与文档使用相同的字体，并且在任意尺寸下都保持清晰，这一点是从电子表格粘贴过来的图片做不到的。生成器免费、无需账号；生成的代码完全归你修改，从刻度标签到绘图样式都可以调整。
        </p>
      </>
    ),
    stepsHeading: "如何生成 pgfplots 图表",
    steps: [
      {
        title: "描述图表",
        body: "说明要画什么：函数或数据点、图表类型（折线图、柱状图、散点图、面积图、直方图或三维曲面图）、坐标轴范围、标签、图例和颜色。直接粘贴一小张数据表也可以。",
      },
      {
        title: "生成代码",
        body: (
          <>
            点击“生成图表”。AI 会写出一份完整的文档，包含 <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> 和一个带注释的{" "}
            <Cmd>axis</Cmd> 环境。
          </>
        ),
      },
      {
        title: "预览并导出",
        body: "打开“预览”标签页把图表编译为 PDF。修改代码进行微调，然后导出 pgfplot.tex 或 pgfplot.pdf，或在 Octree 中打开。",
      },
    ],
    tipsHeading: "常见 pgfplots 错误及解决方法",
    tips: [
      {
        title: "Dimension too large",
        body: (
          <>
            增长极快的函数，例如定义域很宽的 <Cmd>exp(x)</Cmd>，会导致 TeX 运算溢出。请缩小 <Cmd>domain</Cmd>、设置{" "}
            <Cmd>restrict y to domain</Cmd>，或使用对数坐标轴。
          </>
        ),
      },
      {
        title: "曲线呈锯齿状",
        body: (
          <>
            提高 <Cmd>samples</Cmd>，例如设为 <Cmd>samples=200</Cmd>
            ，即可得到平滑的曲线。三维图的编译要慢得多，请保持较低的取值。
          </>
        ),
      },
      {
        title: "绘制你自己的数据",
        body: (
          <>
            用 <Cmd>\addplot table</Cmd> 或 <Cmd>\addplot coordinates</Cmd>
            把生成的坐标替换为你的数值；坐标轴样式保持不变。
          </>
        ),
      },
    ],
    faqHeading: "PGFPlots 生成器常见问题",
    faq: [
      {
        question: "什么是 PGFPlots 生成器？",
        answer:
          "它会替你编写 pgfplots 代码。pgfplots 是基于 TikZ 绘制图表的 LaTeX 宏包；你无需学习它的坐标轴选项，只要用自然语言描述图表，就能得到一份可以编译、编辑并粘贴到论文中的完整文档。",
      },
      {
        question: "它能生成哪些类型的图表？",
        answer:
          "凡是 pgfplots 能画的都可以：函数图、折线图、柱状图、散点图、直方图、误差棒、面积图以及三维曲面图或网格图。描述你想要的数据、坐标轴和样式，代码就会相应体现。",
      },
      {
        question: "如何把图表放进我的 LaTeX 文档？",
        answer:
          "在导言区添加 \\usepackage{pgfplots} 和 \\pgfplotsset{compat=1.18}，然后把生成代码中的 tikzpicture 环境复制到文档中，通常放在带图注的 figure 环境里。",
      },
      {
        question: "PGFPlots 生成器免费吗？",
        answer:
          "免费，而且无需账号。代码由 AI 模型（OpenAI GPT-5）编写，并用完整的 TeX Live 发行版编译，因此请对照你的要求检查预览。",
      },
    ],
    related: (
      <>
        在{" "}
        <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
          pgfplots 指南
        </IntroLink>
        中学习坐标轴选项，用 <IntroLink href="/tools/tikz-generator">TikZ 生成器</IntroLink>绘制示意图，或用{" "}
        <IntroLink href="/tools/table-to-latex">LaTeX 表格生成器</IntroLink>把 CSV 转换为表格。
      </>
    ),
  },

};

export default translations;
