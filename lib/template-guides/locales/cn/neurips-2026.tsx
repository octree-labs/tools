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
    question: "这是 NeurIPS 2026 的官方样式文件吗？",
    answer:
      "不是。这是一份 NeurIPS 风格的草稿模板，基于标准 article 文档类，使用 Times 字体、1 英寸页边距和 natbib，因此无需额外文件即可在任何环境中编译。正式投稿必须使用 neurips.cc 征稿通知中链接的官方样式包（style kit）里的样式文件。由于正文使用的是相同的命令（\\title、\\author、abstract、各节、\\bibliographystyle{plainnat}），切换时主要只需修改导言区。",
  },
  {
    question: "这个 NeurIPS 模板能在 Overleaf 中使用吗？",
    answer:
      "可以。它使用 Overleaf 默认的 pdfLaTeX 编译，只用到 TeX Live 自带的宏包。由于模板末尾是 \\bibliography{references}，请在 .tex 文件旁边添加一个 references.bib 文件。",
  },
  {
    question: "NeurIPS 论文清单（paper checklist）放在哪里？",
    answer:
      "在本模板中，它是位于参考文献和 \\appendix 之后的一节，这正是 NeurIPS 要求的位置。这里的六个条目只用于展示作答格式。请从官方 NeurIPS 2026 样式包中复制完整的最新清单，并回答每一个问题。",
  },
  {
    question: "NeurIPS 2026 的页数限制是多少？",
    answer:
      "本模板的示例摘要中提到正文九页、参考文献和清单不计入页数，这与近几年 NeurIPS 的征稿要求一致。页数限制每年都可能变化，投稿前请在官方 NeurIPS 2026 征稿通知中确认具体数字。",
  },
  {
    question: "应该用 \\citep 还是 \\citet？",
    answer:
      "由于加载了 natbib，两者都可以用。\\citet{key} 生成文本式引用（“Smith et al. (2024)”），可作为句子的一部分；\\citep{key} 生成括号式引用。plainnat 参考文献样式两者都支持。",
  },
];

export default function Neurips2026GuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">用于撰写草稿的 NeurIPS 2026 LaTeX 模板</GuideH2>
      <GuideP>
        这个 NeurIPS 模板提供一篇 NeurIPS 风格的机器学习论文，可在 Overleaf、Octree 或任何 TeX Live 环境中直接编译。它是草稿模板，而不是官方样式文件：它使用标准的{" "}
        <GuideCode>article</GuideCode> 文档类，11 pt 字号，搭配{" "}
        <GuideCode>times</GuideCode> 字体、1 英寸页边距、段落不缩进，并加载了大多数 NeurIPS 论文都会用到的宏包（<GuideCode>hyperref</GuideCode>、
        <GuideCode>booktabs</GuideCode>、<GuideCode>amsmath</GuideCode>、
        <GuideCode>nicefrac</GuideCode>、<GuideCode>microtype</GuideCode> 和{" "}
        <GuideCode>natbib</GuideCode>）。
      </GuideP>
      <GuideP>
        示例论文遵循审稿人熟悉的结构：标题和单个作者信息块（附{" "}
        <GuideCode>\thanks</GuideCode> 脚注）、摘要、引言（Introduction）、相关工作（Related
        Work）、带编号公式的方法（Method）、带{" "}
        <GuideCode>booktabs</GuideCode> 结果表的实验（Experiments）、结论（Conclusion）、
        <GuideCode>plainnat</GuideCode> 参考文献，以及位于{" "}
        <GuideCode>\appendix</GuideCode> 之后的 NeurIPS Paper Checklist 一节。先在这里写好内容，再把它迁移到{" "}
        <GuideLink href="https://neurips.cc" external>
          neurips.cc
        </GuideLink>{" "}
        提供的官方 NeurIPS 2026 样式包中生成投稿 PDF；由于命令相同，这只需要几分钟。下一年的版本请见{" "}
        <GuideLink href="/templates/neurips-2027">NeurIPS 2027 模板</GuideLink>。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>标题、包含单位和邮箱的作者信息块，以及作者脚注</li>
        <li>摘要和五个带编号的节</li>
        <li>一个使用 <GuideCode>amsfonts</GuideCode> 黑板粗体的行间公式</li>
        <li>一个使用 <GuideCode>\toprule</GuideCode>、<GuideCode>\midrule</GuideCode> 和 <GuideCode>\bottomrule</GuideCode> 的结果表</li>
        <li>natbib，搭配 <GuideCode>plainnat</GuideCode> 样式</li>
        <li>NeurIPS Paper Checklist 一节，附六个示例回答</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>，把代码粘贴到 Overleaf 或本地的 <GuideCode>paper.tex</GuideCode> 中。
        </li>
        <li>
          在同一目录下创建 <GuideCode>references.bib</GuideCode> 并写入 BibTeX 条目，然后用 <GuideCode>\citet</GuideCode> 或{" "}
          <GuideCode>\citep</GuideCode> 引用。
        </li>
        <li>
          使用 pdfLaTeX 和 BibTeX 编译，例如{" "}
          <GuideCode>latexmk -pdf paper.tex</GuideCode>。这里不需要 Unicode 字体，因此 XeLaTeX 和 LuaLaTeX 并无优势。
        </li>
        <li>
          编辑导言区顶部的 <GuideCode>\title</GuideCode> 和 <GuideCode>\author</GuideCode>；用于匿名评审的版本，请把作者信息块替换为 <GuideCode>Anonymous Author(s)</GuideCode>。
        </li>
        <li>
          投稿前，把内容迁移到官方样式文件中，并粘贴官方样式包中的完整清单。
        </li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>添加更多作者。</strong>模板中只有一位作者。官方样式用{" "}
        <GuideCode>\And</GuideCode> 分隔作者信息块；在这份基于 article 文档类的草稿中，请改用标准的{" "}
        <GuideCode>\and</GuideCode>：
      </GuideP>
      <GuidePre>{`\\author{
  First Author \\\\ University A \\\\ \\texttt{first@a.edu}
  \\and
  Second Author \\\\ Lab B \\\\ \\texttt{second@b.org}
}`}</GuidePre>
      <GuideP>
        <strong>添加图片。</strong><GuideCode>graphicx</GuideCode> 已经加载。NeurIPS 论文的图题放在图片下方、表题放在表格上方，与示例表格一致：
      </GuideP>
      <GuidePre>{`\\begin{figure}[t]
  \\centering
  \\includegraphics[width=0.8\\linewidth]{example-image}
  \\caption{Training loss over time.}
  \\label{fig:loss}
\\end{figure}`}</GuidePre>
      <GuideP>
        <strong>认真回答清单。</strong>每个条目都需要一个回答和简短的理由说明。保持示例条目的格式，并在同一行写上理由：
      </GuideP>
      <GuidePre>{`\\item \\textbf{Limitations:} Did you describe the limitations of your work?
  \\textbf{[Yes]} Justification: see Section~5.`}</GuidePre>

      <GuideH2 id="comparison">相关会议模板</GuideH2>
      <GuideTable
        headers={["模板", "版式"]}
        rows={[
          [<strong key="n">NeurIPS 2026</strong>, "单栏，natbib，清单"],
          [
            <GuideLink key="n7" href="/templates/neurips-2027">
              NeurIPS 2027
            </GuideLink>,
            "单栏，更贴近 NeurIPS 官方版式",
          ],
          [
            <GuideLink key="i" href="/templates/icml-2026">
              ICML 2026
            </GuideLink>,
            "双栏，algorithm 环境",
          ],
          [
            <GuideLink key="l" href="/templates/iclr-2026">
              ICLR 2026
            </GuideLink>,
            "单栏，可复现性声明",
          ],
        ]}
      />
      <GuideP>
        投稿日期请参阅{" "}
        <GuideLink href="/conference-deadlines">会议截止日期页面</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">NeurIPS 模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
