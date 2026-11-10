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
    question: "这个研究论文模板使用的是哪个文档类？",
    answer:
      "使用带 conference 选项的 IEEEtran，即 IEEE 官方的 LaTeX 文档类。它提供 IEEE 会议论文的双栏版式、Times 风格字体、IEEE 作者信息栏命令以及 IEEE 风格的章节标题。该文档类包含在 TeX Live 中，因此不需要任何额外文件。",
  },
  {
    question: "如何添加一张适应栏宽的图片？",
    answer:
      "示例图片只有标题。请在 figure 环境中的 \\caption 之前添加 \\includegraphics[width=\\columnwidth]{results}；graphicx 宏包已经加载。如果图片需要跨越两栏，请使用 figure* 并设置 width=\\textwidth。",
  },
  {
    question: "如何在这个模板中引用参考文献？",
    answer:
      "在正文中写 \\cite{ref1}；cite 宏包会对数字引用进行排序和压缩，例如显示为 [1]-[3]。参考文献是位于文末的 thebibliography 列表。如果想改用 .bib 文件，请把该列表替换为 \\bibliographystyle{IEEEtran} 和 \\bibliography{refs}，然后运行 BibTeX。",
  },
  {
    question: "这个研究论文模板可以在 Overleaf 中使用吗？",
    answer:
      "可以。IEEEtran、amsmath、amssymb、graphicx 和 cite 都随 TeX Live 一起提供，因此可以在 Overleaf、Octree 或本地环境中用 pdfLaTeX 编译。向特定会议投稿之前，请查看其作者须知；部分 IEEE 会议会提供自己的模板文件。",
  },
];

export default function ResearchPaperGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX 研究论文模板（IEEE 格式）</GuideH2>
      <GuideP>
        这个研究论文 LaTeX 模板简洁精炼，是撰写双栏 IEEE 会议格式科技或工程论文的理想起点。它基于 IEEE 官方文档类{" "}
        <GuideCode>IEEEtran</GuideCode>，并以 <GuideCode>conference</GuideCode>{" "}
        选项加载，因此标题区、分栏版式、字体和标题样式都与 IEEE 会议的要求一致。它非常适合课程论文、研讨会（workshop）投稿，或者先写初稿、之后再迁移到会议官方模板包中的场景。
      </GuideP>
      <GuideP>
        示例论文包含几乎所有研究论文都需要的部分：标题和 IEEE 作者信息栏（姓名、院系、大学和邮箱）、摘要，接着是引言（Introduction）、相关工作（Related Work）、方法（Methodology）、结果（Results）和结论（Conclusion），以及带编号的参考文献列表。结果部分包含一个带标题的占位{" "}
        <GuideCode>figure</GuideCode>，用于放置你的图表。除文档类之外，导言区还加载了用于公式的{" "}
        <GuideCode>amsmath</GuideCode> 和 <GuideCode>amssymb</GuideCode>、用于插图的{" "}
        <GuideCode>graphicx</GuideCode>，以及用于压缩数字引用的 <GuideCode>cite</GuideCode>。这些宏包都随 TeX Live 提供，因此它既可以作为 Overleaf 的研究论文模板，也可以在 Octree 或本地环境中使用。源码刻意保持精简；如果需要包含多位作者、公式、表格和关键词的完整 IEEE 示例，请参阅 IEEE 会议论文模板。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li><GuideCode>IEEEtran</GuideCode> 双栏会议版式</li>
        <li>包含姓名、单位和邮箱的 IEEE 作者信息栏</li>
        <li>摘要和五个标准章节</li>
        <li>图片占位符和 <GuideCode>thebibliography</GuideCode> 参考文献列表</li>
        <li><GuideCode>amsmath</GuideCode>、<GuideCode>amssymb</GuideCode>、<GuideCode>graphicx</GuideCode> 和 <GuideCode>cite</GuideCode></li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>{" "}
          把代码粘贴到 Overleaf 或本地的 <GuideCode>paper.tex</GuideCode> 中。
        </li>
        <li>使用 pdfLaTeX 编译；引用参考文献后需要编译两次。</li>
        <li>
          修改 <GuideCode>\title</GuideCode>，以及 <GuideCode>\author</GuideCode> 中的{" "}
          <GuideCode>\IEEEauthorblockN</GuideCode>/<GuideCode>\IEEEauthorblockA</GuideCode>{" "}
          这一对命令。
        </li>
        <li>把各章节中方括号内的占位内容替换为你自己的内容。</li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>添加合著者。</strong>重复作者信息栏，并在各栏之间用{" "}
        <GuideCode>\and</GuideCode> 分隔；IEEEtran 会将它们并排排列：
      </GuideP>
      <GuidePre>{`\\author{\\IEEEauthorblockN{First Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\first@university.edu}
\\and
\\IEEEauthorblockN{Second Author}
\\IEEEauthorblockA{Department\\\\University Name\\\\second@university.edu}}`}</GuidePre>
      <GuideP>
        <strong>在结果部分放入真实图片。</strong>将其宽度设为栏宽：
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
\\centering
\\includegraphics[width=\\columnwidth]{results}
\\caption{Results visualization}
\\label{fig:results}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>改用 BibTeX。</strong>把 <GuideCode>thebibliography</GuideCode> 部分替换为{" "}
        <GuideCode>{"\\bibliographystyle{IEEEtran}"}</GuideCode> 和{" "}
        <GuideCode>{"\\bibliography{refs}"}</GuideCode>，将文献条目放入{" "}
        <GuideCode>refs.bib</GuideCode>，然后依次运行 pdfLaTeX、BibTeX，再运行两次 pdfLaTeX（或直接使用{" "}
        <GuideCode>latexmk -pdf paper.tex</GuideCode>）。
      </GuideP>

      <GuideP>
        相关模板：<GuideLink href="/templates/ieee-conference">IEEE 会议论文</GuideLink>、
        <GuideLink href="/templates/journal-article">期刊论文</GuideLink>和{" "}
        <GuideLink href="/templates/article-template">article 文章</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">研究论文模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
