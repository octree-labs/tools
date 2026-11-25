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
    question: "如何用 LaTeX 制作学术海报？",
    answer:
      "使用 tikzposter 这类海报文档类，本模板正是基于它构建的。在 \\documentclass 中设置纸张尺寸和方向，在导言区填写标题、作者和机构，然后把内容写成 \\block{Title}{Text} 区块，放在 \\begin{columns} 中并用 \\column{width} 排列。标题栏、区块样式和间距都由文档类自动处理。",
  },
  {
    question: "如何更换海报主题？",
    answer:
      "在 \\documentclass 之后添加主题命令，例如 \\usetheme{Rays}。tikzposter 自带多种内置主题，包括 Default、Rays、Basic、Simple、Envelope、Wave、Board、Autumn 和 Desert，另外还有可以通过 \\usecolorstyle 单独设置的配色方案。",
  },
  {
    question: "如何修改海报尺寸或改为横版？",
    answer:
      "修改文档类选项即可。tikzposter 支持 a0paper、a1paper 和 a2paper，以及 portrait 或 landscape 关键字，例如 \\documentclass[25pt,a1paper,landscape]{tikzposter}。25pt 选项是基础字号；tikzposter 接受 12pt 到 25pt。",
  },
  {
    question: "这个 tikzposter 模板能在 Overleaf 中编译吗？",
    answer:
      "能。tikzposter 包含在 TeX Live 中，因此无需任何额外文件，就能在 Overleaf、Octree 或本地环境中用 pdfLaTeX 编译。包含大量图片的大幅海报，编译时间可能比普通文档更长。",
  },
];

export default function PosterGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX 学术海报模板（tikzposter）</GuideH2>
      <GuideP>
        这个学术海报 LaTeX 模板使用 <GuideCode>tikzposter</GuideCode>{" "}
        文档类，生成 A0 尺寸、竖版的会议或科研海报，基础字号为 25 pt（该文档类提供的最大字号），因此在几米之外也能看清文字。顶部的标题栏会显示你在导言区设置的{" "}
        <GuideCode>\title</GuideCode>、<GuideCode>\author</GuideCode> 和{" "}
        <GuideCode>\institute</GuideCode>，其下的所有内容都由{" "}
        <GuideCode>\block</GuideCode> 区块构成。
      </GuideP>
      <GuideP>
        示例布局遵循大多数海报展示环节的惯用顺序：先是一个通栏的 Abstract 区块，然后是等宽的两栏，左栏为 Introduction 和 Methods，右栏为 Results 和 Conclusion，底部是通栏的 References 区块。分栏用{" "}
        <GuideCode>{"\\begin{columns}"}</GuideCode> 和{" "}
        <GuideCode>{"\\column{0.5}"}</GuideCode> 声明，其中的数字表示占海报宽度的比例，所以要做三栏布局，只需写三次{" "}
        <GuideCode>{"\\column{0.33}"}</GuideCode>。模板使用 tikzposter 的默认主题，在文档类之外只加载了{" "}
        <GuideCode>amsmath</GuideCode>。tikzposter 包含在 TeX Live 中，因此这份海报模板可用于 Overleaf、Octree 或任何本地环境。如果想要基于 beamer、采用三栏科研布局的替代方案，请参阅会议海报模板。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>A0 竖版、25 pt 的 <GuideCode>tikzposter</GuideCode></li>
        <li>包含标题、作者和机构的标题栏</li>
        <li>通栏的 Abstract 和 References 区块</li>
        <li>两栏正文：Introduction、Methods、Results 和 Conclusion</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>，把代码粘贴到 Overleaf 或本地的{" "}
          <GuideCode>poster.tex</GuideCode> 中。
        </li>
        <li>使用 pdfLaTeX 编译。</li>
        <li>
          修改 <GuideCode>\title</GuideCode>、<GuideCode>\author</GuideCode> 和{" "}
          <GuideCode>\institute</GuideCode>，然后修改每个{" "}
          <GuideCode>{"\\block{...}{...}"}</GuideCode> 中的文字。
        </li>
        <li>确认会议要求的海报尺寸，并在添加图片之前在文档类选项中设置好。</li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>选择主题。</strong>在 <GuideCode>\documentclass</GuideCode>{" "}
        之后加一行，就能改变标题栏和所有区块的样式：
      </GuideP>
      <GuidePre>{`\\documentclass[25pt,a0paper,portrait]{tikzposter}
\\usetheme{Rays}
\\usecolorstyle{Denmark}`}</GuidePre>
      <GuideP>
        <strong>在区块中插入图片。</strong>在导言区加载{" "}
        <GuideCode>graphicx</GuideCode>，并使用 tikzposter 的{" "}
        <GuideCode>tikzfigure</GuideCode> 环境，它会添加带编号的图注；宽度通过{" "}
        <GuideCode>\linewidth</GuideCode> 相对于区块设置：
      </GuideP>
      <GuidePre>{`\\block{Results}{
  Key findings and data visualization.
  \\begin{tikzfigure}[Accuracy on the test set]
    \\includegraphics[width=0.9\\linewidth]{results}
  \\end{tikzfigure}
}`}</GuidePre>
      <GuideP>
        <strong>不等宽分栏。</strong>各栏宽度不必相同；如果需要一个较宽的结果栏，可以使用{" "}
        <GuideCode>{"\\column{0.4}"}</GuideCode> 和{" "}
        <GuideCode>{"\\column{0.6}"}</GuideCode>。
      </GuideP>

      <GuideP>
        相关模板：<GuideLink href="/templates/conference-poster">会议海报（beamerposter）</GuideLink>、
        <GuideLink href="/templates/beamer-presentation">Beamer 演示文稿</GuideLink>和
        <GuideLink href="/templates/research-paper">研究论文</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">学术海报模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
