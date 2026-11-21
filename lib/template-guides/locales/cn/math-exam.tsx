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
    question: "如何用 LaTeX 制作数学试卷？",
    answer:
      "从这个模板开始即可：它已经包含写有课程和学期的页眉、姓名和学号填写栏、考试说明列表、分值表，以及带有答题空白的编号题目。修改页眉后，把每道题写成一个带分值的 \\textbf{Problem N.} 段落，再用 \\vspace 设置答题空间。",
  },
  {
    question: "分值表会自动求和吗？",
    answer:
      "不会。分值表只是一个普通的 tabular，所以增加、删除题目或调整分值时，需要手动更新 Problem、Points 和 Total 这几行以及说明中的相应文字。如果想要自动计算总分，可以使用 exam 文档类（TeX Live 自带）：它提供 \\question[points]，在导言区加入 \\addpoints 之后，还可以用 \\gradetable 自动汇总分值。",
  },
  {
    question: "如何给学生留出更多答题空间？",
    answer:
      "加大每道题后面的 \\vspace，例如 \\vspace{8cm}，或者用 \\newpage 让某道题从新的一页开始。在示例中，第 1、2 题后留 4 cm，第 3 题后分页，第 4 题后留 6 cm。",
  },
  {
    question: "可以在 Overleaf 中打印这份试卷吗？",
    answer:
      "可以。模板使用 article 文档类，配合 geometry、amsmath、amssymb、amsthm 和 fancyhdr 宏包，因此在 Overleaf、Octree 或本地 TeX 环境中都能用 pdfLaTeX 编译。下载 PDF 后按 100% 比例在 Letter 纸上打印即可；如需 A4 纸，在 geometry 的选项中加入 a4paper。",
  },
];

export default function MathExamGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">LaTeX 数学试卷模板</GuideH2>
      <GuideP>
        这个数学试卷 LaTeX 模板可以生成一份正式、可直接打印的数学测验，封面所需的元素一应俱全：每页都有写着课程、考试名称和学期的页眉，有学生姓名和学号的填写栏、一份简短的考试说明，以及一张留有空白得分栏、方便阅卷的分值表。示例是一份入门课程的期末考试，共五道题、满分
        100 分，内容包括一元二次方程、用商法则求导、换元积分、一个关于偶数的简短证明，以及一道三角函数极限题。
      </GuideP>
      <GuideP>
        每道题都由加粗的“Problem N.”标签、括号中的分值、题目本身和一块固定高度的答题空白组成，学生可以直接在试卷上作答。源代码使用标准的{" "}
        <GuideCode>article</GuideCode> 文档类，字号 12 pt，页边距一英寸，用{" "}
        <GuideCode>fancyhdr</GuideCode> 设置页眉和页码，用{" "}
        <GuideCode>amsmath</GuideCode>/<GuideCode>amssymb</GuideCode> 排版数学公式，因此它可以作为试卷模板用于 Overleaf、Octree 或任何本地 TeX 环境。由于没有使用专门的试卷文档类，每个元素都是易于调整的普通
        LaTeX：改好页眉、重写题目、调整答题空间，一份随堂测验、期中或期末考试就可以打印了。
      </GuideP>

      <GuideH2 id="included">模板包含的内容</GuideH2>
      <GuideUl>
        <li>包含课程、考试名称和学期的页眉；页脚显示页码</li>
        <li>姓名和学号填写栏</li>
        <li>考试说明列表（题目数量、分值、时长、允许携带的物品）</li>
        <li>包含 Problem、Points 和 Score 三列的分值表</li>
        <li>五道带答题空白的示例题目</li>
      </GuideUl>

      <GuideH2 id="how-to-use">使用方法</GuideH2>
      <GuideOl>
        <li>
          点击 <em>Open as Template</em> 在 Octree 中编辑，或点击 <em>View Source</em>，把代码粘贴到 Overleaf 或本地的{" "}
          <GuideCode>exam.tex</GuideCode> 中。
        </li>
        <li>使用 pdfLaTeX 编译，编译一次即可。</li>
        <li>
          修改 <GuideCode>\lhead</GuideCode>、<GuideCode>\chead</GuideCode> 和{" "}
          <GuideCode>\rhead</GuideCode>、居中的标题以及考试说明。
        </li>
        <li>重写题目，然后更新分值表，使各行和总分与题目一致。</li>
      </GuideOl>

      <GuideH2 id="customise">自定义模板</GuideH2>
      <GuideP>
        <strong>添加题目。</strong>复制一个题目块，修改题号和分值，并在表格中{" "}
        <GuideCode>\textbf{"{Total}"}</GuideCode> 之前加上对应的一行：
      </GuideP>
      <GuidePre>{`\\noindent
\\textbf{Problem 6.} (10 points) Find all real solutions of
\\[
|2x - 3| = 5
\\]

\\vspace{4cm}`}</GuidePre>
      <GuideP>
        <strong>控制分页。</strong>示例用 <GuideCode>\newpage</GuideCode> 强制第 4 题从新的一页开始。如果某道题会和它的答题空白被分到两页上，就在这道题前面加上同样的命令。
      </GuideP>
      <GuideP>
        <strong>改用 exam 文档类自动计算总分。</strong>如果你经常出试卷，<GuideCode>exam</GuideCode>{" "}
        文档类可以自动统计分值并生成评分表：
      </GuideP>
      <GuidePre>{`\\documentclass[12pt]{exam}
\\usepackage{amsmath,amssymb}
\\addpoints
\\begin{document}
\\begin{center}
\\gradetable[h][questions]
\\end{center}
\\begin{questions}
\\question[20] Solve $3x^2 - 7x + 2 = 0$.
\\vspace{4cm}
\\question[20] Find the derivative of $f(x) = \\frac{\\sin x}{x^2+1}$.
\\vspace{4cm}
\\end{questions}
\\end{document}`}</GuidePre>

      <GuideP>
        相关模板：<GuideLink href="/templates/quiz-template">随堂测验</GuideLink>、
        <GuideLink href="/templates/math-problem-set">数学习题集</GuideLink>和
        <GuideLink href="/templates/grading-rubric">评分量规</GuideLink>。
      </GuideP>

      <GuideH2 id="faq">数学试卷模板常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
