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
    question: "这是 ICML 2026 的官方样式文件吗？",
    answer:
      "不是。这是一份 ICML 风格的双栏草稿，基于标准 article 文档类，使用 Times 字体和 0.75 英寸页边距，因此无需额外文件即可在任何环境中编译。ICML 投稿必须使用 icml.cc 征稿通知中链接的作者工具包（author kit）里的官方样式文件和示例论文，其标题和作者命令与本模板不同。先在这里撰写和迭代，再把各节迁移到官方工具包中。",
  },
  {
    question: "这个 ICML 模板能在 Overleaf 中编译吗？",
    answer:
      "可以，使用 Overleaf 默认的 pdfLaTeX 即可。由于模板末尾是 \\bibliography{references}，请在 .tex 文件旁边添加一个 references.bib 文件。所有宏包都随 TeX Live 提供，包括较旧的 subfigure 宏包。",
  },
  {
    question: "如何让图或表横跨两栏？",
    answer:
      "使用带星号的环境：\\begin{figure*}[t] ... \\end{figure*} 或 \\begin{table*}[t] ... \\end{table*}，宽度以 \\textwidth 为基准设置。跨双栏的浮动体只能放在页面顶部或单独的浮动页上，通常出现在定义它的那一页的下一页。",
  },
  {
    question: "ICML 2026 的页数限制是多少？",
    answer:
      "本模板的示例摘要中提到正文八页、参考文献和附录不限页数，这与近几年 ICML 的征稿要求一致。具体限制以及终稿（camera-ready）的规则，请以官方 ICML 2026 征稿通知为准。",
  },
  {
    question: "标题和作者是如何横跨两栏的？",
    answer:
      "模板重新定义了 \\maketitle，把标题信息块放在 \\twocolumn[...] 中排版，使其占满整个页面宽度。随后摘要从左栏开始，与 ICML 论文的版式一致。",
  },
];

export default function Icml2026GuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">用于撰写草稿的 ICML 2026 LaTeX 模板</GuideH2>
      <GuideP>
        这个 ICML 2026 模板是一篇双栏机器学习论文，可在 Overleaf、Octree 或任何 TeX Live 环境中直接编译。它是草稿模板，而不是官方样式文件：它使用标准的{" "}
        <GuideCode>article</GuideCode> 文档类，加上 <GuideCode>twocolumn</GuideCode>{" "}
        选项，10 pt 字号，<GuideCode>times</GuideCode> 字体和 0.75 英寸页边距，并重新定义了{" "}
        <GuideCode>\maketitle</GuideCode>，使标题和作者信息块像 ICML 论文那样在摘要上方横跨两栏。
      </GuideP>
      <GuideP>
        导言区加载了 ICML 论文通常需要的宏包：用于伪代码的{" "}
        <GuideCode>algorithm</GuideCode> 和 <GuideCode>algorithmic</GuideCode>、用于表格的{" "}
        <GuideCode>booktabs</GuideCode>、用于并排子图的{" "}
        <GuideCode>subfigure</GuideCode>，以及{" "}
        <GuideCode>amsmath</GuideCode> 和 <GuideCode>hyperref</GuideCode>。示例论文包含三位作者的信息块（带编号的单位和同等贡献说明）、摘要、引言（Introduction）、相关工作（Related Work）、含正则化损失函数的方法（Method）一节、实验（Experiments）表格、可访问性与可复现性（Accessibility and Reproducibility）一节，以及使用{" "}
        <GuideCode>plain</GuideCode> 样式的 BibTeX 参考文献。先在这里起草，再把各节迁移到{" "}
        <GuideLink href="https://icml.cc" external>
          icml.cc
        </GuideLink>{" "}
        提供的官方 ICML 2026 作者工具包中生成投稿 PDF。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>双栏 10 pt 版式，标题信息块占满整页宽度</li>
        <li>三位作者，带上标单位编号和同等贡献标记</li>
        <li>摘要和六个节，包括 Accessibility and Reproducibility</li>
        <li>一个行间公式和一个 <GuideCode>booktabs</GuideCode> 结果表</li>
        <li>
          已加载 <GuideCode>algorithm</GuideCode>/<GuideCode>algorithmic</GuideCode>，可用于编写伪代码
        </li>
        <li>BibTeX，搭配 <GuideCode>plain</GuideCode> 样式</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>，把代码粘贴到 Overleaf 或本地的 <GuideCode>paper.tex</GuideCode> 中。
        </li>
        <li>
          在文件旁边创建 <GuideCode>references.bib</GuideCode>，并用 <GuideCode>\cite</GuideCode> 引用其中的条目。
        </li>
        <li>
          使用 pdfLaTeX 和 BibTeX 编译（<GuideCode>latexmk -pdf paper.tex</GuideCode>）。模板不需要系统字体，因此无需 XeLaTeX 或 LuaLaTeX。
        </li>
        <li>
          编辑导言区中的 <GuideCode>\title</GuideCode> 和 <GuideCode>\author</GuideCode> 信息块。用于双盲评审的版本，请删除姓名和单位。
        </li>
        <li>
          投稿前，把各节复制到官方 ICML 2026 示例论文中，并使用其参考文献样式。
        </li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>编写伪代码。</strong><GuideCode>algorithmic</GuideCode>{" "}
        宏包使用大写命令。下面是一个可放进单栏的浮动算法：
      </GuideP>
      <GuidePre>{`\\begin{algorithm}[tb]
  \\caption{SGD with weight decay}
  \\label{alg:sgd}
  \\begin{algorithmic}
    \\STATE {\\bfseries Input:} data $\\{(x_i, y_i)\\}_{i=1}^{n}$, step size $\\eta$
    \\FOR{$t = 1$ {\\bfseries to} $T$}
      \\STATE Sample $i$ uniformly from $\\{1, \\dots, n\\}$
      \\STATE $\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\ell(f_\\theta(x_i), y_i)$
    \\ENDFOR
  \\end{algorithmic}
\\end{algorithm}`}</GuidePre>
      <GuideP>
        <strong>用 subcaption 替换 subfigure。</strong><GuideCode>subfigure</GuideCode>{" "}
        已经过时。删除 <GuideCode>{"\\usepackage{subfigure}"}</GuideCode>（两者不能同时加载），添加 <GuideCode>{"\\usepackage{subcaption}"}</GuideCode>，然后这样编写子图：
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-a}
    \\caption{Dataset A}
  \\end{subfigure}\\hfill
  \\begin{subfigure}{0.48\\columnwidth}
    \\includegraphics[width=\\linewidth]{example-image-b}
    \\caption{Dataset B}
  \\end{subfigure}
  \\caption{Accuracy on both datasets.}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>保持标题信息块同步。</strong>作者和单位是写在 <GuideCode>\author</GuideCode> 中的纯文本，用{" "}
        <GuideCode>\quad</GuideCode> 分隔，上标写作{" "}
        <GuideCode>{"$^{1}$"}</GuideCode>。要添加作者，复制一条{" "}
        <GuideCode>{"Firstname Lastname$^{1}$"}</GuideCode> 条目并新增一行单位；用 <GuideCode>{"$^{*}$"}</GuideCode> 标记同等贡献。
      </GuideP>

      <GuideP>
        相关模板：
        <GuideLink href="/templates/neurips-2026">NeurIPS 2026</GuideLink>、
        <GuideLink href="/templates/iclr-2026">ICLR 2026</GuideLink> 和{" "}
        <GuideLink href="/templates/aaai-2027">AAAI 2027</GuideLink>。日期请参阅
        <GuideLink href="/conference-deadlines">会议截止日期页面</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">ICML 模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
