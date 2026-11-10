import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "研究计划书应该写多长？",
    answer:
      "硕士或博士的学位论文开题报告通常为 5 到 15 页；申请资助的研究计划书则以招标指南的要求为准，常见的是 2 到 5 页正文外加一份预算。本模板中的示例以 11pt 字号、一英寸页边距编译后共三页，作为课程作业或发给导师的初稿，这个篇幅比较合适。如果需要更多篇幅，优先扩充文献综述和研究方法，其余部分应保持简短。",
  },
  {
    question: "研究计划书和学位论文开题报告有什么区别？",
    answer:
      "开题报告是写给学位委员会的研究计划书：它要论证这个课题能由一名学生在规定时间内完成，通常还会附上章节大纲和指导计划。基金或资助申请书则是写给资助方的，需要增加预算说明、预期成果和影响陈述。两者的核心部分（研究背景、研究问题、文献综述、研究方法、时间安排、参考文献）是相同的，因此本模板两种场景都适用。",
  },
  {
    question: "这个研究计划书模板可以用于博士申请吗？",
    answer:
      "可以。很多博士项目要求提交一份 1,500 到 3,000 词的研究计划，结构与本模板基本一致。替换示例课题，保持研究问题明确列出，并确保时间安排覆盖整个培养周期（三到四年，而不是十二个月）。请查阅院系的具体要求，看是否必须包含 Training Needs 或 Supervision 之类的标题，如有需要，用新的 \\section 命令添加即可。",
  },
  {
    question: "研究计划书中如何引用文献？",
    answer:
      "模板以 round 选项加载 natbib，因此 \\citet{key} 输出 Cepeda et al. (2006)，\\citep{key} 输出 (Cepeda et al., 2006)。参考文献放在文件末尾的 thebibliography 环境中：每个条目都以 \\bibitem[Author(Year)]{key} 开头，natbib 据此生成“作者-年份”标签。如果你已经有 .bib 文件，删除该环境，加上 \\bibliographystyle{plainnat} 和 \\bibliography{references}，再运行 BibTeX 即可。",
  },
  {
    question: "研究计划书需要写预算吗？",
    answer:
      "只有在申请经费时才需要。资助和基金申请书一定会包含预算，通常是一张表格加简短说明，模板中的 Budget 部分给出了一个紧凑的 booktabs 版本。学位论文的开题报告一般不写预算，除非田野调查、设备或被试报酬需要院系审批；这种情况下保留表格，删去用不到的行即可。",
  },
];

export default function ResearchProposalGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">什么是研究计划书？</GuideH2>
      <GuideP>
        研究计划书是在开展研究之前论证其价值的一份简短文件：你要回答什么问题、这个问题为什么重要、已有研究知道了什么、你打算如何开展工作，以及需要投入多少时间和经费。导师、学位委员会和资助机构据此判断这个课题是否值得做、你是否有能力完成。这个免费的 LaTeX 研究计划书模板提供了标准结构，并附带一份完整的研究计划书示例（一项针对第二语言学习者的间隔重复实验），让你在替换成自己的内容之前，先看到每个部分写完后的样子。
      </GuideP>

      <GuideH2 id="format">研究计划书格式：各部分写什么</GuideH2>
      <GuideP>
        下列各部分按照大多数高校指南采用的顺序排列；如果资助方的申请指南规定了自己的标题，以指南为准。表中的篇幅针对三到十页的计划书；如果是完整的学位论文开题报告，请按比例放大。
      </GuideP>
      <GuideTable
        headers={["部分", "内容", "常见篇幅"]}
        rows={[
          [
            "标题区",
            "一个点明研究变量或现象的具体标题，以及你的姓名、导师、院系和提交日期。",
            "半页",
          ],
          [
            "摘要",
            "用一段话说明研究问题、研究空白、研究方法和预期贡献。",
            "100 到 200 词",
          ],
          [
            "引言与研究背景",
            "课题为什么重要、核心概念，以及现有知识中的空白，引用两三篇文献。",
            "一到两页",
          ],
          [
            "研究问题与假设",
            "两到四个编号的研究问题，每个都配有可检验的假设或预期答案。",
            "半页",
          ],
          [
            "文献综述",
            "以往研究发现了什么、彼此在哪里存在分歧，以及还有什么是尚无人做过的。",
            "一到三页",
          ],
          [
            "研究方法",
            "研究设计、被试或数据、材料、流程和分析方案，详细程度要足以判断可行性。",
            "一到三页",
          ],
          [
            "时间安排",
            "以表格或甘特图列出各阶段对应的月份或季度；模板将其放在研究方法一节的末尾。",
            "四分之一页",
          ],
          [
            "预期成果与意义",
            "你预期会发现什么，以及谁会受益：学术领域、实践者或政策制定。",
            "半页",
          ],
          [
            "预算",
            "逐项列出费用并给出合计；仅资助申请需要。",
            "四分之一页",
          ],
          [
            "参考文献",
            "所有引用过的文献，采用院系或资助方要求的格式。",
            "按需",
          ],
        ]}
      />

      <GuideH2 id="thesis-vs-grant">学位论文开题报告与基金申请书</GuideH2>
      <GuideP>
        同一个模板两者都能用，但侧重点不同。写开题报告时，应扩充文献综述和研究方法，把时间安排延长到整个学位周期，加上章节大纲，并且除非院系要求，否则删去预算。写资助申请时，研究背景要精炼，加上预算说明和预期成果清单，并严格遵守资助方的页数限制和标题名称。如果申请经费才是这份文件的重点，请改用{" "}
        <GuideLink href="/templates/grant-proposal">基金申请书模板</GuideLink>，它围绕具体研究目标和预算说明来组织内容；如果你已经开始撰写学位论文，
        <GuideLink href="/templates/thesis">学位论文模板</GuideLink>{" "}
        可以接着这份计划书继续往下写。
      </GuideP>

      <GuideH2 id="customise">如何定制研究计划书模板</GuideH2>
      <GuideH3>标题区与导师信息</GuideH3>
      <GuideP>
        申请人、导师和院系信息都写在 <GuideCode>\author</GuideCode> 命令中。保留{" "}
        <GuideCode>\normalsize</GuideCode> 这几行，使单位信息的字号小于你的姓名；正式提交时，把 <GuideCode>\date</GuideCode> 改成一个固定日期。
      </GuideP>
      <GuidePre>{`\\author{Your Name \\\\[4pt]
  \\normalsize Supervisor: Dr.\\ Supervisor Name \\\\
  \\normalsize Department of Linguistics, University Name \\\\
  \\normalsize \\texttt{your.email@university.edu}}
\\date{Submitted: 15 March 2026}`}</GuidePre>

      <GuideH3>时间安排表</GuideH3>
      <GuideP>
        时间安排是一张 <GuideCode>booktabs</GuideCode> 表格，每个季度占一列，进行中的单元格里放一个实心方块（来自
        <GuideCode>amssymb</GuideCode> 的 <GuideCode>$\blacksquare$</GuideCode>）。周期较短的项目可以按月设列，也可以为每个工作包单独设一行。三年制博士项目可以用学年或学期作为列。
      </GuideP>
      <GuidePre>{`\\begin{tabular}{c >{\\raggedright\\arraybackslash}p{6.4cm} c c c c}
  \\toprule
  Phase & Activity & Y1 & Y2 & Y3 & Y4 \\\\
  \\midrule
  1 & Literature review and ethics approval & $\\blacksquare$ & & & \\\\
  2 & Data collection & & $\\blacksquare$ & $\\blacksquare$ & \\\\
  3 & Analysis and writing up & & & $\\blacksquare$ & $\\blacksquare$ \\\\
  \\bottomrule
\\end{tabular}`}</GuidePre>

      <GuideH3>引用与参考文献</GuideH3>
      <GuideUl>
        <li>
          <GuideCode>{"\\citet{key}"}</GuideCode> 用于句中引用（Nakata (2015) 发现……），<GuideCode>{"\\citep{key}"}</GuideCode> 用于括号引用。
        </li>
        <li>
          每个 <GuideCode>\bibitem</GuideCode> 都带有{" "}
          <GuideCode>[Author(Year)]</GuideCode> 标签，因此 natbib 无需 BibTeX
          就能排出“作者-年份”格式的引用；文件只需运行一次 pdflatex，再运行一次以解析交叉引用。
        </li>
        <li>
          如果要改用 <GuideCode>.bib</GuideCode> 文件，把{" "}
          <GuideCode>thebibliography</GuideCode> 环境替换为{" "}
          <GuideCode>{"\\bibliographystyle{plainnat}"}</GuideCode> 和{" "}
          <GuideCode>{"\\bibliography{references}"}</GuideCode>；如果院系要求 APA 格式，也可以使用 <GuideCode>apacite</GuideCode> 宏包。
        </li>
      </GuideUl>

      <GuideH2 id="faq">研究计划书模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
