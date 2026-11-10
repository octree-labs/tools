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
    question: "如何用 LaTeX 记数学笔记？",
    answer:
      "使用像本模板这样已经定义好定理类环境的模板，你只需输入 \\begin{theorem}、\\begin{definition} 或 \\begin{proof}，编号和格式都会自动生成。为常用符号定义快捷命令，例如 \\newcommand{\\R}{\\mathbb{R}}，就能跟上课堂的节奏。",
  },
  {
    question: "模板定义了哪些定理环境？",
    answer:
      "共八个：theorem、lemma、proposition 和 corollary 使用斜体的 plain 样式；definition 和 example 使用直立的 definition 样式；remark 和 note 使用更轻的 remark 样式。它们共用一个按节编号的计数器，因此会得到 Definition 2.1、Theorem 2.2、Example 2.3 这样的编号。proof 环境由 amsthm 提供。",
  },
  {
    question: "如何按编号引用一个定理？",
    answer:
      "在定理内部加上 \\label{thm:closed}，然后在正文中写 Theorem~\\ref{thm:closed}。LaTeX 会自动填入编号；编译两次，引用才能正确解析。",
  },
  {
    question: "可以在 Overleaf 中使用这份数学笔记模板吗？",
    answer:
      "可以。模板使用 article 文档类，配合 geometry、amsmath、amssymb、amsthm、fancyhdr 和 xcolor 宏包，它们都包含在 TeX Live 中，因此在 Overleaf、Octree 或本地环境中都能用 pdfLaTeX 编译。",
  },
];

export default function MathNotesGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX 数学笔记模板</GuideH2>
      <GuideP>
        这个数学笔记 LaTeX 模板适合整理数学课的讲义或你自己的学习笔记，并为各项结论自动编号。它定义了数学课程中常用的全部陈述类型（定理、引理、命题、推论、定义、例子、注记和附注），它们共用一个按节编号的计数器，因此在整套笔记中，“Lemma
        3.4”这样的引用都不会产生歧义。定理用斜体，定义和例子用直立体，注记使用更轻的 remark 样式，遵循常见的{" "}
        <GuideCode>amsthm</GuideCode> 惯例。
      </GuideP>
      <GuideP>
        示例讲义是一小段点集拓扑：用开集定义的连续性、“从紧空间到 Hausdorff 空间的连续映射是闭映射”这一定理、一个证明框架、一个例子、一条注记、一个关于紧集像的引理，以及两道练习题。文档采用标准的{" "}
        <GuideCode>article</GuideCode> 文档类，字号 11 pt，页边距一英寸。
        <GuideCode>fancyhdr</GuideCode> 在每页顶部印出课程名称、“Lecture
        Notes”和日期，底部印出页码；另外还加载了 <GuideCode>xcolor</GuideCode>{" "}
        用于高亮。它可以作为数学笔记模板用于 Overleaf、Octree 或任何本地 TeX 发行版，只需添加章节，就能从一次课的讲义扩展成整门课程的笔记。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>八个定理类环境，共用一个按节编号的计数器</li>
        <li>三种定理样式：plain、definition 和 remark</li>
        <li>显示课程、标题和日期的页眉；页脚显示页码</li>
        <li>包含定义、定理、证明、例子和练习的拓扑学示例讲义</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>，把代码粘贴到 Overleaf 或本地的{" "}
          <GuideCode>notes.tex</GuideCode> 中。
        </li>
        <li>使用 pdfLaTeX 编译。如果用到了 <GuideCode>\ref</GuideCode>，需要编译两次。</li>
        <li>
          用 <GuideCode>\lhead</GuideCode>（课程）和{" "}
          <GuideCode>\rhead</GuideCode>（日期）设置页眉，在{" "}
          <GuideCode>\title</GuideCode> 中填写本讲标题。
        </li>
        <li>
          用这些环境书写结论，例如{" "}
          <GuideCode>{"\\begin{proposition} ... \\end{proposition}"}</GuideCode>。
        </li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>添加记号快捷命令。</strong>把下面几行放进导言区，就可以输入{" "}
        <GuideCode>\R</GuideCode> 来代替 <GuideCode>{"\\mathbb{R}"}</GuideCode>：
      </GuideP>
      <GuidePre>{`\\newcommand{\\R}{\\mathbb{R}}
\\newcommand{\\N}{\\mathbb{N}}
\\DeclareMathOperator{\\interior}{int}`}</GuidePre>
      <GuideP>
        <strong>为定理加底色。</strong>在 <GuideCode>\newtheorem</GuideCode> 那几行之后加载{" "}
        <GuideCode>tcolorbox</GuideCode>，就能把某个环境放进彩色框中，而书写方式完全不变：
      </GuideP>
      <GuidePre>{`\\usepackage{tcolorbox}
\\tcolorboxenvironment{theorem}{colback=blue!5,colframe=blue!50!black}`}</GuidePre>
      <GuideP>
        <strong>突出关键思想。</strong>模板已经加载了 <GuideCode>xcolor</GuideCode>，所以可以用{" "}
        <GuideCode>{"\\textcolor{red}{...}"}</GuideCode> 在行内标出警示或常见错误。
      </GuideP>

      <GuideP>
        相关模板：<GuideLink href="/templates/lecture-notes">讲义</GuideLink>、
        <GuideLink href="/templates/mathematical-document">数学文档</GuideLink>和
        <GuideLink href="/templates/math-cheat-sheet">数学速查表</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">数学笔记模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
