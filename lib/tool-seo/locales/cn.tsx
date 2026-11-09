import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
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
};

export default translations;
