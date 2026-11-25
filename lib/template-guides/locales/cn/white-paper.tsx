import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "白皮书的结构是怎样的？",
    answer:
      "一份白皮书通常包括标题页、执行摘要、问题陈述、拟议解决方案、收益、案例研究等佐证，以及带有行动号召的结论。本模板正是按这个顺序组织的：Executive Summary、The Challenge、The Solution、Benefits、Case Study 和 Conclusion；在它们之前还有一个标题页，并在框中预先展示执行摘要。",
  },
  {
    question: "模板中的统计数据是真实的吗？",
    answer:
      "不是。像成本降低 40%、案例研究节省 500 万美元（$5M）这样的数字都只是占位符，用来说明数字应该放在哪里。请把它们替换为你自己的实测结果或有出处的数据；如果引用了第三方数据，还应添加参考文献部分。",
  },
  {
    question: "如何修改白皮书的配色？",
    answer:
      "模板只定义了一种颜色 primarycolor：\\definecolor{primarycolor}{RGB}{0,51,102}，它被用于标题、章节标题（通过 titlesec）以及摘要框的边框。把 RGB 值改成你的品牌色，所有地方都会随之更新。",
  },
  {
    question: "这个白皮书模板可以在 Overleaf 中使用吗？",
    answer:
      "可以。它使用 article 文档类，配合 geometry、graphicx、xcolor、titlesec、hyperref 和 tcolorbox 宏包，它们都包含在 TeX Live 中，因此在 Overleaf、Octree 或本地环境中都能用 pdfLaTeX 编译。",
  },
];

export default function WhitePaperGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX 白皮书模板</GuideH2>
      <GuideP>
        这个白皮书 LaTeX 模板可以生成一份精致、带有品牌风格的报告，也就是企业用来阐述某个问题并论证自身解决思路的那类文档：产品白皮书、技术立场文件，以及用于市场推广或销售的思想领导力文章。标题页上有品牌色的两行大标题、斜体副标题、公司名称和日期，页面底部还有一个带边框的 Executive Summary 框，让读者在翻页之前就能抓住要点。
      </GuideP>
      <GuideP>
        正文采用经典的“问题—解决方案”结构，分为六个编号章节：Executive Summary、The Challenge、The Solution、Benefits（以项目符号列出成效）、Case Study 和 Conclusion。示例是为一个虚构的 AI 平台撰写的，其中的百分比和节省金额都是占位符，需要替换为真实且有出处的数字。源代码使用标准的{" "}
        <GuideCode>article</GuideCode> 文档类，字号 11 pt，页边距一英寸。
        <GuideCode>titlesec</GuideCode> 把章节标题设置为大号粗体，并统一使用品牌色{" "}
        <GuideCode>primarycolor</GuideCode>；<GuideCode>tcolorbox</GuideCode> 绘制摘要框；
        <GuideCode>hyperref</GuideCode> 让 PDF 中的链接可以点击；另外还加载了{" "}
        <GuideCode>graphicx</GuideCode> 用于插入图表和示意图。段落首行缩进被关闭，呈现出现代商务文档的风格。所有宏包都随 TeX Live 提供，因此这份白皮书模板可以在 Overleaf、Octree 或任何本地环境中编译。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>带有副标题、公司名称、日期和执行摘要框的品牌化标题页</li>
        <li>按“问题—解决方案”结构组织的六个编号章节</li>
        <li>通过 <GuideCode>titlesec</GuideCode> 设置的彩色章节标题</li>
        <li>全文统一使用的品牌色 <GuideCode>primarycolor</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>，把代码粘贴到 Overleaf 或本地的{" "}
          <GuideCode>whitepaper.tex</GuideCode> 中。
        </li>
        <li>使用 pdfLaTeX 编译，编译一次即可。</li>
        <li>
          在 <GuideCode>\definecolor</GuideCode> 这一行设置你的品牌色，然后修改标题页上的标题、副标题、公司名称和日期。
        </li>
        <li>重写摘要框和各个章节；执行摘要控制在几句话以内。</li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>用空行分隔段落。</strong>模板把{" "}
        <GuideCode>\parindent</GuideCode> 设为零，但没有增加段间距，因此相邻段落会连在一起。把{" "}
        <GuideCode>\setlength</GuideCode> 这一行替换为：
      </GuideP>
      <GuidePre>{`\\usepackage{parskip}`}</GuidePre>
      <GuideP>
        <strong>突出关键结果。</strong>在正文中复用标题页的框样式，用来展示某个统计数字或引语：
      </GuideP>
      <GuidePre>{`\\begin{tcolorbox}[colback=primarycolor!5,colframe=primarycolor,title=Key result]
Company XYZ cut [metric] by [amount] within [time period].
\\end{tcolorbox}`}</GuidePre>
      <GuideP>
        <strong>每页都带上品牌标识。</strong>使用 <GuideCode>fancyhdr</GuideCode>{" "}
        添加包含公司名称和页码的页脚：
        <GuideCode>{"\\usepackage{fancyhdr} \\pagestyle{fancy} \\fancyhf{} \\lfoot{TechCorp Industries} \\rfoot{\\thepage} \\renewcommand{\\headrulewidth}{0pt}"}</GuideCode>。
      </GuideP>

      <GuideP>
        相关模板：<GuideLink href="/templates/business-report">商业报告</GuideLink>、
        <GuideLink href="/templates/technical-report">技术报告</GuideLink>和
        <GuideLink href="/templates/business-plan">商业计划书</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">白皮书模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
