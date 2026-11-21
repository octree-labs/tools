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
    question: "这个求职信模板可以在 Overleaf 中使用吗？",
    answer:
      "可以。它使用标准的 letter 文档类，只加载 geometry 和 hyperref 两个宏包，二者都包含在所有 TeX 发行版中。把源码粘贴到空白的 Overleaf 项目、Octree，或本地安装的 TeX Live / MiKTeX 中，用 pdfLaTeX 即可直接编译，无需任何修改。",
  },
  {
    question: "这是求职信模板还是申请信模板？",
    answer:
      "两者皆可。求职信（cover letter）和职位申请信的结构完全相同：你的地址、日期、收件人、称呼、三到四段正文以及结尾敬语。同一个模板同样适用于学术职位申请、实习、研究生申请和动机信，只需改写段落内容即可。",
  },
  {
    question: "如何修改或删除日期？",
    answer:
      "letter 文档类会在你的地址下方打印 \\today。若要固定日期，请在导言区添加 \\date{12 March 2027}；若要删除日期，则改用 \\date{}。",
  },
  {
    question: "如何注明随信附上简历？",
    answer:
      "在 \\closing{Sincerely,} 之后添加 \\encl{Resume}，信件就会在签名下方打印一行“encl:”。\\cc{Name} 以同样的方式添加抄送行，\\ps{P.S. ...} 则用于添加附言。",
  },
  {
    question: "如何把求职信控制在一页以内？",
    answer:
      "正文保持三到四个简短段落即可，这本来也是招聘经理期望的篇幅。如果仍然超出一页，可以把 \\usepackage[margin=1in]{geometry} 中的页边距缩小到 0.8in，或把文档类选项从 11pt 改为 10pt。",
  },
];

export default function CoverLetterGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX 求职信模板</GuideH2>
      <GuideP>
        这是一个 LaTeX 求职信模板，同时也可以作为 LaTeX 申请信模板，用于求职、实习、研究生申请和学术职位申请。它基于标准的{" "}
        <GuideCode>letter</GuideCode> 文档类，自动处理正式信件所需的版式：右上角是你的回信地址和日期，左侧是收件人地址栏，随后是称呼、正文，以及结尾敬语和下方打印的姓名。
      </GuideP>
      <GuideP>
        由于模板只加载了 <GuideCode>geometry</GuideCode> 和{" "}
        <GuideCode>hyperref</GuideCode>，它无需任何修改即可在 Overleaf、Octree 或任何本地 TeX 环境中用 pdfLaTeX 编译。正文是一封四段式申请信，使用方括号占位符，例如{" "}
        <GuideCode>[Position Title]</GuideCode> 和 <GuideCode>[Company Name]</GuideCode>：开头一段点明应聘职位，第二段列出具体成就，第三段说明你为什么想加入这家雇主，最后用简短的结尾请求面试机会。
      </GuideP>
      <GuideP>
        如果你的简历也是用 LaTeX 写的，那么用 LaTeX 写求职信最为合适：字体、页边距和页眉都能保持一致，而且每次申请都可以单独保存一个信件文件并纳入版本控制。可以搭配{" "}
        <GuideLink href="/templates/resume">LaTeX 简历模板</GuideLink>或{" "}
        <GuideLink href="/templates/jakes-resume">Jake&apos;s Resume</GuideLink> 一起使用。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>
          <GuideCode>{"\\documentclass[11pt]{letter}"}</GuideCode>，页边距为 1 英寸
        </li>
        <li>
          由 <GuideCode>\address</GuideCode> 生成的寄件人信息栏（地址、电话、邮箱）以及自动日期
        </li>
        <li>
          位于 <GuideCode>{"\\begin{letter}{...}"}</GuideCode> 中的收件人信息栏
        </li>
        <li>
          <GuideCode>\opening</GuideCode> 称呼，以及带有 <GuideCode>\signature</GuideCode>{" "}
          中姓名的 <GuideCode>\closing</GuideCode> 结尾
        </li>
        <li>四个用于求职申请的占位段落</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>{" "}
          把代码粘贴到 Overleaf 或本地的 <GuideCode>letter.tex</GuideCode> 中。
        </li>
        <li>
          使用 pdfLaTeX 编译。只有当你为了与使用系统字体排版的简历保持一致而添加{" "}
          <GuideCode>fontspec</GuideCode> 时，才需要 XeLaTeX 或 LuaLaTeX。
        </li>
        <li>
          在导言区中，把 <GuideCode>\signature</GuideCode> 设为你的姓名，把{" "}
          <GuideCode>\address</GuideCode> 设为你的联系方式，各行之间用{" "}
          <GuideCode>\\</GuideCode> 分隔。
        </li>
        <li>
          替换 <GuideCode>{"\\begin{letter}{...}"}</GuideCode> 中的收件人信息，以及{" "}
          <GuideCode>\opening</GuideCode> 中的称呼姓名。
        </li>
        <li>
          填写所有方括号占位符，然后在文件中搜索 <GuideCode>[</GuideCode>，确认没有遗漏。
        </li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>让邮箱和作品集链接可点击。</strong>模板已经加载了 hyperref，因此可以在地址栏中使用{" "}
        <GuideCode>\href</GuideCode>，并隐藏彩色的链接边框：
      </GuideP>
      <GuidePre>{`\\hypersetup{hidelinks}
\\address{Your Name\\\\City, State ZIP\\\\
  \\href{mailto:you@example.com}{you@example.com}\\\\
  \\url{https://example.com}}`}</GuidePre>
      <GuideP>
        <strong>添加附件说明并固定日期。</strong>letter 文档类为签名之后的各行提供了专门的命令：
      </GuideP>
      <GuidePre>{`\\date{12 March 2027}   % 放在导言区；\\date{} 可删除日期

% ……放在 \\closing{Sincerely,} 之后
\\encl{Resume, transcript}
\\cc{Dr.~Jane Smith}`}</GuidePre>
      <GuideP>
        <strong>一个文件用于多次申请。</strong>在导言区中只定义一次公司名称和职位，然后在正文中使用这些宏，这样每次新的申请只需修改两行：
      </GuideP>
      <GuidePre>{`\\newcommand{\\company}{Acme Corp}
\\newcommand{\\role}{Data Scientist}

% 在正文中
I am applying for the \\role{} position at \\company.`}</GuidePre>

      <GuideH2 id="faq">求职信模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
