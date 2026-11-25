import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "这个 Beamer 模板能在 Overleaf 中使用吗？",
    answer:
      "可以。它只使用 beamer 文档类、内置的 Madrid 主题和默认颜色主题，不加载任何额外宏包。把源码粘贴到空白的 Overleaf 项目、Octree，或任意 TeX Live / MiKTeX 环境中，用 pdfLaTeX（Overleaf 的默认编译器）即可直接编译，无需任何修改。",
  },
  {
    question: "如何把幻灯片从 4:3 改成 16:9？",
    answer:
      "在文档类那一行加上 aspectratio 选项：\\documentclass[aspectratio=169]{beamer}。Beamer 默认是 4:3（128 × 96 mm）；169 对应 160 × 90 mm，能铺满现代投影仪和视频会议画面。也可以使用 1610 和 43。",
  },
  {
    question: "除了 Madrid，还能用哪些 Beamer 主题？",
    answer:
      "beamer 自带的任何主题都可以，只需修改 \\usetheme{Madrid}：常见的有 AnnArbor、Berlin、Boadilla、CambridgeUS、Copenhagen、Darmstadt、Frankfurt、Singapore 和 Warsaw。beaver、crane、dolphin、seahorse、whale 等颜色主题写在 \\usecolortheme{...} 中。第三方的 metropolis 主题也能用，但它围绕 Fira 字体设计，配合 XeLaTeX 或 LuaLaTeX 效果最好。",
  },
  {
    question: "为什么页脚会显示很长的标题或完整的大学名称？",
    answer:
      "Madrid 会在页脚中显示作者、机构、标题和日期，使用的是这些字段的简写形式。给每个字段在方括号里提供简写即可，例如 \\title[Short title]{Full Presentation Title} 和 \\institute[ABC]{Alpha Beta College}，这样页脚显示简写，标题页仍保留完整内容。",
  },
  {
    question: "如何把幻灯片做成可打印的讲义？",
    answer:
      "在文档类选项中加入 handout（\\documentclass[handout]{beamer}）。由 \\pause 和 <2-> 等覆盖层规格产生的分步效果会合并成每帧一页。若要在一张纸上打印多帧，可在导言区加入 \\usepackage{pgfpages} 和 \\pgfpagesuselayout{4 on 1}[a4paper,border shrink=5mm]。",
  },
];

export default function BeamerPresentationGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">适用于 LaTeX 和 Overleaf 的 Beamer 演示文稿模板</GuideH2>
      <GuideP>
        这是一个适用于 LaTeX 和 Overleaf 的 Beamer 演示文稿模板：一份简洁的入门幻灯片，基于标准的{" "}
        <GuideCode>beamer</GuideCode> 文档类，使用内置的{" "}
        <GuideCode>Madrid</GuideCode> 主题和默认颜色主题。Madrid 是学术报告中最常用的 Beamer 模板之一，因为它无需任何设置就能提供彩色的帧标题栏、圆角区块，以及显示作者、标题和页码的三段式页脚。
      </GuideP>
      <GuideP>
        模板除 Beamer 本身外不加载任何宏包，因此在实际意义上就是一个 Overleaf Beamer 模板：粘贴到空白的 Overleaf 项目、在 Octree 中打开，或在任意 TeX Live / MiKTeX 环境中编译，pdfLaTeX 第一次就能成功构建。示例幻灯片包含标题页、由{" "}
        <GuideCode>\section</GuideCode> 命令自动生成的目录，以及引言（Introduction）、主要内容（Main
        Content）和结论（Conclusion）几帧，你可以替换成自己的内容。
      </GuideP>
      <GuideP>
        如果你正在比较各种 Beamer 模板：当你需要会议报告、论文答辩或课堂讲授中评审和答辩委员会所期待的常规外观时，就从这里开始。如需深色幻灯片，请参阅{" "}
        <GuideLink href="/templates/beamer-dark">Beamer 深色主题</GuideLink>；如需用 Beamer 制作 A0 海报，请参阅{" "}
        <GuideLink href="/templates/conference-poster">会议海报</GuideLink>{" "}
        模板。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass{beamer}"}</GuideCode>，配合{" "}
          <GuideCode>{"\\usetheme{Madrid}"}</GuideCode> 和{" "}
          <GuideCode>{"\\usecolortheme{default}"}</GuideCode>
        </li>
        <li>
          由 <GuideCode>\title</GuideCode>、<GuideCode>\author</GuideCode>、
          <GuideCode>\institute</GuideCode> 和 <GuideCode>\date</GuideCode> 生成的标题页
        </li>
        <li>自动生成的目录帧</li>
        <li>三个节（Introduction、Main Content、Conclusion），每节各有一帧</li>
        <li>一个 itemize 列表帧，可复制用于要点式幻灯片</li>
        <li>不依赖外部宏包、字体或图片，在任何环境下都能编译</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑并实时预览 PDF，或点击{" "}
          <em>View Source</em>，把代码粘贴到新的 Overleaf 项目或本地的{" "}
          <GuideCode>slides.tex</GuideCode> 中。
        </li>
        <li>
          使用 pdfLaTeX 编译（<GuideCode>latexmk -pdf slides.tex</GuideCode>）。XeLaTeX 和 LuaLaTeX 同样可用；只有在通过{" "}
          <GuideCode>fontspec</GuideCode> 切换到系统字体或使用 metropolis 主题时才需要它们。
        </li>
        <li>
          编辑文件顶部的标题信息：<GuideCode>\title</GuideCode>、
          <GuideCode>\author</GuideCode>、<GuideCode>\institute</GuideCode> 和{" "}
          <GuideCode>\date</GuideCode> 会同时填充标题页和页脚。
        </li>
        <li>
          复制一个 <GuideCode>{"\\begin{frame} ... \\end{frame}"}</GuideCode>{" "}
          代码块即可新增一页幻灯片。在一组帧之前加上 <GuideCode>\section</GuideCode>，它就会出现在目录中。
        </li>
        <li>编译两次，使目录和页码保持最新。</li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>更换主题和颜色。</strong>文档类之后的两行决定了整体外观。布局主题和颜色主题可以分别替换；还可以去掉右下角的导航符号，大多数演讲者从来不会用到它们：
      </GuideP>
      <GuidePre>{`\\documentclass[aspectratio=169]{beamer}
\\usetheme{Madrid}
\\usecolortheme{beaver}   % 或 crane、dolphin、seahorse、whale
\\setbeamertemplate{navigation symbols}{}`}</GuidePre>
      <GuideP>
        <strong>为页脚提供简写字段。</strong>Madrid 会在页脚中显示作者、机构和标题，名称过长就会溢出。请使用可选的简写形式：
      </GuideP>
      <GuidePre>{`\\title[Short Title]{A Much Longer Presentation Title}
\\author[A.~Author]{Alice Author}
\\institute[UoX]{University of Example}`}</GuidePre>
      <GuideP>
        <strong>在每一节开头显示大纲。</strong>把以下代码放入导言区，每当新的{" "}
        <GuideCode>\section</GuideCode> 开始时，Beamer 都会插入一帧大纲并高亮当前所在的节：
      </GuideP>
      <GuidePre>{`\\AtBeginSection[]{
  \\begin{frame}
    \\frametitle{Outline}
    \\tableofcontents[currentsection]
  \\end{frame}
}`}</GuidePre>

      <GuideH2 id="comparison">相关 Beamer 模板</GuideH2>
      <GuideTable
        headers={["模板", "外观", "编译器"]}
        rows={[
          [<strong key="b">Beamer 演示文稿</strong>, "Madrid，浅色，4:3", "pdfLaTeX"],
          [
            <GuideLink key="d" href="/templates/beamer-dark">
              Beamer 深色主题
            </GuideLink>,
            "Madrid 深色配色，16:9",
            "pdfLaTeX",
          ],
          [
            <GuideLink key="p" href="/templates/conference-poster">
              会议海报
            </GuideLink>,
            "A0 beamerposter",
            "pdfLaTeX",
          ],
        ]}
      />

      <GuideH2 id="faq">Beamer 模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
