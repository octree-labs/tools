import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
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
    question: "IEEE 论文格式是什么样的？",
    answer:
      "IEEE 会议论文使用美国信纸（US letter），正文为双栏 10 pt Times 字体，标题为居中的 24 pt，作者信息块位于标题下方，摘要（Abstract）和索引词（Index Terms）以粗体引导词开头，各节用罗马数字编号、标题为小型大写字母，引用以方括号编号，且不加页码。IEEEtran LaTeX 文档类的 conference 模式会自动完成上述所有排版，你只需提供内容。",
  },
  {
    question: "IEEEtran 是 IEEE 官方模板吗？",
    answer:
      "是的。IEEEtran.cls 是 IEEE 为其汇刊（transactions）、期刊和会议发布的文档类，conference 选项与 IEEE 作者中心（IEEE author centre）上的会议模板一致。它已包含在 TeX Live 和 MiKTeX 中，无需另行下载。有些会议会在征稿通知中附带一份该文档类，通常就是同一个文件。",
  },
  {
    question: "可以列出多少位作者？多位作者共享同一单位时怎么写？",
    answer:
      "没有数量限制。每对 \\IEEEauthorblockN / \\IEEEauthorblockA 构成一个信息块，块之间用 \\and 分隔；IEEEtran 每行最多排三个。作者较多且共享单位时，请使用模板中被注释掉的替代写法：每个姓名只列一次并加上 \\IEEEauthorrefmark{1} 标记，每个单位各写一行 \\IEEEauthorblockA。",
  },
  {
    question: "这个模板可以使用 BibTeX 吗？",
    answer:
      "可以。模板自带手写的 thebibliography，因此可以独立编译。删除该环境，保留 \\bibliographystyle{IEEEtran}，并添加指向你的 .bib 文件的 \\bibliography{refs} 即可；IEEEtran.bst 随文档类一同提供。已加载的 cite 宏包会把连续编号合并为范围。",
  },
  {
    question: "为什么不能修改页边距？",
    answer:
      "IEEE PDF eXpress 和会议主席会检查页面版式。IEEEtran 已按 IEEE 规范设置好页边距、栏宽和栏间距；加载 geometry 或修改 \\textwidth 会导致论文无法通过合规检查。如果论文超长，请删减文字或图表。",
  },
];

export default function IeeeConferenceGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">这个 IEEE 会议模板是什么？</GuideH2>
      <GuideP>
        本模板完整呈现了由{" "}
        <GuideCode>\documentclass[conference]{"{IEEEtran}"}</GuideCode> 生成的官方 IEEE 会议论文格式。该文档类由 IEEE 为其会议发布，并且已预装在所有 TeX 发行版中。模板包含一份完整投稿所需的全部内容：通过 <GuideCode>\thanks</GuideCode> 添加基金脚注的标题，使用 <GuideCode>\IEEEauthorblockN</GuideCode> 和{" "}
        <GuideCode>\IEEEauthorblockA</GuideCode> 的三位作者信息块，粗体引导的摘要和索引词，使用 <GuideCode>\IEEEPARstart</GuideCode> 实现首字下沉的引言，一个带编号的公式，一段 <GuideCode>algorithmic</GuideCode> 伪代码，一个表题在上方的{" "}
        <GuideCode>booktabs</GuideCode> 表格，一个图题在下方的图，致谢（Acknowledgment）一节，以及 IEEE 风格的参考文献列表。
      </GuideP>
      <GuideP>
        较短的{" "}
        <GuideLink href="/templates/research-paper">研究论文（Research Paper）</GuideLink>{" "}
        模板同样使用 IEEEtran；本模板的不同之处在于覆盖了完整格式：包含院系、机构、城市和邮箱的规范作者信息块，关键词，致谢，带有规范 IEEE 题注的表格和图，以及五条已排好格式的参考文献。撰写正式投稿时请使用本模板。
      </GuideP>

      <GuideH2 id="format">文档类强制执行的 IEEE 格式规则</GuideH2>
      <GuideUl>
        <li>美国信纸，双栏，10 pt 类 Times 正文字体。</li>
        <li>24 pt 标题，11 pt 作者姓名，10 pt 单位信息，均居中。</li>
        <li>
          两栏各 3.5 英寸，栏间距 12 pt，页边距由文档类设定。不要加载 <GuideCode>geometry</GuideCode>，也不要修改 <GuideCode>\textwidth</GuideCode>。
        </li>
        <li>摘要和索引词为粗体，标题与正文接排。</li>
        <li>
          节标题用罗马数字编号并使用小型大写字母，小节用字母编号并使用斜体。
        </li>
        <li>
          表题位于表格上方，使用小型大写字母（“TABLE I”）；图题位于图下方（“Fig. 1.”）。
        </li>
        <li>
          引用以方括号编号，连续编号由 <GuideCode>cite</GuideCode> 宏包合并。
        </li>
        <li>不加页码；会议在制作论文集时统一添加。</li>
      </GuideUl>

      <GuideH2 id="walkthrough">逐步讲解</GuideH2>
      <GuideH3>作者信息块</GuideH3>
      <GuidePre>{`\\author{%
  \\IEEEauthorblockN{1\\textsuperscript{st} Given Name Surname}
  \\IEEEauthorblockA{\\textit{Dept. of Electrical Engineering} \\\\
    \\textit{Example University}\\\\
    City, Country \\\\
    first.author@example.edu}
  \\and
  ...
}`}</GuidePre>
      <GuideP>
        每位作者一对 N/A 命令，用 <GuideCode>\and</GuideCode> 分隔；IEEEtran 每行最多放三个信息块。序数前缀（1st、2nd）是当前 IEEE 会议模板的惯例，可以删除。如果有六位或更多作者共享机构，请使用源码中以注释形式保留的{" "}
        <GuideCode>\IEEEauthorrefmark</GuideCode> 写法。
      </GuideP>
      <GuideH3>摘要、关键词和引言</GuideH3>
      <GuideP>
        <GuideCode>abstract</GuideCode> 和 <GuideCode>IEEEkeywords</GuideCode> 必须位于 <GuideCode>\maketitle</GuideCode> 之后。摘要控制在 150 到 250 词，并按字母顺序给出三到六个以逗号分隔的索引词。
        <GuideCode>\IEEEPARstart{"{D}{eep}"}</GuideCode> 用于生成 IEEE 论文开头的首字下沉效果，可选。
      </GuideP>
      <GuideH3>公式、算法、表格和图</GuideH3>
      <GuideP>
        示例在 <GuideCode>equation</GuideCode> 中使用 <GuideCode>aligned</GuideCode> 块，使较长的优化问题能放进一栏；用 <GuideCode>algorithmic</GuideCode> 描述方法；表格和图使用{" "}
        <GuideCode>[htbp]</GuideCode> 浮动位置。图是用 TikZ 绘制的柱状图，因此模板无需图片文件即可编译；可将其替换为{" "}
        <GuideCode>\includegraphics[width=\columnwidth]{"{energy.pdf}"}</GuideCode>。需要横跨两栏的宽表或宽图请使用{" "}
        <GuideCode>table*</GuideCode> 和 <GuideCode>figure*</GuideCode>。
      </GuideP>
      <GuideH3>参考文献</GuideH3>
      <GuideP>
        IEEE 样式中作者写作“名字首字母 + 姓氏”，标题加引号，出版物名称使用缩写并设为斜体，年份放在最后。使用 BibTeX 时，删除{" "}
        <GuideCode>thebibliography</GuideCode> 块，改用{" "}
        <GuideCode>\bibliographystyle{"{IEEEtran}"}</GuideCode> 加{" "}
        <GuideCode>\bibliography{"{refs}"}</GuideCode>。
      </GuideP>

      <GuideH2 id="customize">在不同 IEEE 格式之间切换</GuideH2>
      <GuideTable
        headers={["目标", "文档类声明", "说明"]}
        rows={[
          [
            "会议论文",
            <GuideCode key="c">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "即本模板",
          ],
          [
            "汇刊 / 期刊",
            <GuideCode key="j">\documentclass[journal]{"{IEEEtran}"}</GuideCode>,
            "增加页眉、作者简介和单栏摘要",
          ],
          [
            "双盲评审",
            <GuideCode key="r">\documentclass[conference]{"{IEEEtran}"}</GuideCode>,
            "把作者信息块替换为一个匿名块，并删除 \\thanks",
          ],
          [
            "加大行距的草稿",
            <GuideCode key="d">\documentclass[conference,draftcls,onecolumn]{"{IEEEtran}"}</GuideCode>,
            "用于传阅易读的草稿；切勿以此格式投稿",
          ],
        ]}
      />

      <GuideH2 id="errors">常见错误</GuideH2>
      <GuideUl>
        <li>
          <strong>“Command \thanks already defined”或 \thanks 不生效。</strong>{" "}
          像模板中那样，把 <GuideCode>\IEEEoverridecommandlockouts</GuideCode> 紧跟在 documentclass 那一行之后。
        </li>
        <li>
          <strong>公式溢出（overfull）。</strong>用{" "}
          <GuideCode>aligned</GuideCode> 或 <GuideCode>split</GuideCode> 拆分公式；IEEE 每栏只有 3.5 英寸宽。
        </li>
        <li>
          <strong>图浮动到了文末。</strong>使用{" "}
          <GuideCode>[!t]</GuideCode> 将其放在页面顶部，并确保图的宽度小于 <GuideCode>\columnwidth</GuideCode>。
        </li>
        <li>
          <strong>论文超出页数限制。</strong>大多数 IEEE 会议允许六页正文，另可付费增加一到两页；请删减内容，而不是压缩间距，因为间距会被检查。
        </li>
      </GuideUl>

      <GuideH2 id="compile">如何编译</GuideH2>
      <GuideOl>
        <li>
          <strong>在 Octree 中：</strong>点击 <em>Open as template</em>，一边写作一边查看实时的双栏预览。
        </li>
        <li>
          <strong>在 Overleaf 中：</strong>粘贴到新项目即可；pdfLaTeX 是默认编译器，IEEEtran 已预装。
        </li>
        <li>
          <strong>在本地：</strong>运行两次 <GuideCode>pdflatex paper.tex</GuideCode> 以更新交叉引用，或使用 <GuideCode>latexmk -pdf paper.tex</GuideCode>。
        </li>
      </GuideOl>
      <GuideP>
        要投稿 ICASSP、CVPR 或其他采用 IEEE 风格的会议？典型的投稿时间窗口请参阅
        <GuideLink href="/conference-deadlines">会议截止日期页面</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
