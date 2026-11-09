import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "粗体向量",
    meaning: "直立粗体字母，印刷中表示向量（例如 R^n 中的 x）的惯用写法。",
    usage:
      "线性代数教材和物理论文用粗体标记向量，例如 A\\mathbf{x} = \\mathbf{b}。\\mathbf 只作用于拉丁字母和数字；\\alpha 等希腊字母不受影响，因此对它们请使用 \\boldsymbol{\\alpha}。注意 \\mathbf 给出直立粗体，而 \\boldsymbol{x} 给出粗斜体；ISO 规范偏好用粗斜体表示向量，而许多教材使用直立体。其他写法包括带箭头的 \\vec{x}（常见于入门物理），以及手写风格笔记中的下划线。请选定一种约定并始终如一地使用，最好通过宏来实现，这样只需改一处即可整体切换。",
  },
  "transpose": {
    name: "转置",
    meaning: "用 \\top 符号表示的矩阵 A 的转置，即交换行与列。",
    usage:
      "用 \\top 作上标会得到一个干净的直立 T 形记号，不会与名为 T 的变量混淆，因此许多机器学习和统计论文写作 \\mathbf{x}^{\\top}\\mathbf{y} 或 (AB)^{\\top} = B^{\\top}A^{\\top}。A^T 看起来相似，但用的是斜体 T；\\intercal 是第三种选择，位置更低、也更窄。无论选择哪种，都请为它定义一个简短的宏，以后切换风格只需修改一行。对于复矩阵，共轭转置通常写作 A^{*} 或 A^{H}，物理学中常用 \\dagger。",
  },
  "transpose-t": {
    name: "转置（T 上标）",
    meaning: "用上标斜体 T 标记的 A 的转置，是教科书中最常见的形式。",
    usage:
      "A^T 写起来快捷，且人人都能看懂：大多数线性代数书中最小二乘的正规方程都写成 A^T A\\mathbf{x} = A^T\\mathbf{b}。缺点是当 T 同时是变量（例如时间跨度或温度）时会产生歧义，因为 A^T 可能被理解为幂。这种情况下请改用 A^{\\top} 或直立的 A^{\\mathsf{T}}。上标多于一个记号时需要花括号，因此逆矩阵的转置写作 A^{-T}，而不是 A^-T。满足 A^T = A 的矩阵称为对称矩阵。",
  },
  "inverse": {
    name: "逆矩阵",
    meaning: "方阵 A 的逆矩阵，即与 A 相乘得到单位矩阵的矩阵。",
    usage:
      "它满足 AA^{-1} = A^{-1}A = I，且仅当 \\det(A) \\neq 0 时存在。花括号是必需的：A^-1 只会把负号作为上标，而把 1 留在基线上。对于 2×2 矩阵，常用 bmatrix 完整排出显式公式，即 \\frac{1}{ad-bc} 乘以伴随矩阵。在数值计算论文中，读者明白逆矩阵很少被显式计算，因此把 \\mathbf{x} = A^{-1}\\mathbf{b} 作为记号是没问题的。伪逆写作 A^{+} 或 A^{\\dagger}，而 (AB)^{-1} = B^{-1}A^{-1} 会颠倒顺序。",
  },
  "determinant": {
    name: "行列式",
    meaning: "方阵 A 的行列式，即表示其有向体积缩放因子的标量。",
    usage:
      "\\det 是预定义算子，因此以直立字体和正确间距输出；直接输入 det(A) 会把它排成三个独立的斜体变量。关键恒等式包括 \\det(AB) = \\det(A)\\det(B) 和 \\det(A^{-1}) = 1/\\det(A)。与 \\sin 不同，\\det 在行间样式中可以像 \\lim 一样把极限放在下方。对于显式矩阵，vmatrix 环境会直接画出竖线，因此 \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc 读起来很自然。与其他算子一样，当参数是单个字母时可以省略括号，写作 \\det A。",
  },
  "trace": {
    name: "迹",
    meaning: "A 的迹，即其对角元之和，用直立的“tr”标记。",
    usage:
      "迹出现在 \\operatorname{tr}(AB) = \\operatorname{tr}(BA) 等恒等式中，以及弗罗贝尼乌斯范数 \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A) 中。用 \\text{tr} 可以得到直立字母，但它会继承周围正文的字体，在定理环境中变成斜体，而且没有算子间距。更稳妥的选择是 \\operatorname{tr}，或在导言区全局声明 \\DeclareMathOperator{\\tr}{tr}，这样 \\tr A 不加括号也能正确设置间距。物理学家常写成首字母大写的 Tr，尤其是对密度矩阵。迹也等于按重数计的全部特征值之和。",
  },
  "rank": {
    name: "秩",
    meaning: "A 的秩：其列空间的维数，用直立标记书写。",
    usage:
      "秩–零化度定理写作 \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n，方阵可逆当且仅当它满秩。\\text{rank} 能得到直立字母，但定理环境的斜体可能渗入其中，而且它没有算子间距。更推荐 \\operatorname{rank}(A)，或者一次性声明 \\DeclareMathOperator{\\rank}{rank}，然后写 \\rank A。LaTeX 没有内置的 \\rank 命令，因此未定义就直接输入会导致“undefined control sequence”错误。通过截断 SVD 进行低秩近似是常需要排版这一记号的场合。",
  },
  "norm": {
    name: "范数",
    meaning: "x 两侧的双竖线，表示其范数、长度或大小。",
    usage:
      "两侧用 \\lVert 和 \\rVert 而不是 \\|，可以告诉 LaTeX 哪条竖线是开、哪条是闭，从而在 \\lVert -x \\rVert 这类表达式中得到正确间距，而 \\|-x\\| 会把负号当作二元运算符。下标用于指定范数：欧几里得范数 \\lVert x \\rVert_2，以及 \\lVert x \\rVert_1、\\lVert x \\rVert_\\infty，或弗罗贝尼乌斯范数 \\lVert A \\rVert_F。内容较高时，请使用 \\left\\lVert ... \\right\\rVert。三角不等式 \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert 是典型用法；在长篇论文中，定义一个 \\norm 宏能省去大量输入。",
  },
  "inner-product": {
    name: "内积",
    meaning: "两个向量两侧的尖括号，表示它们的内积。",
    usage:
      "内积推广了点积：在 R^n 中 \\langle x, y \\rangle = \\sum_i x_i y_i，柯西–施瓦茨不等式 |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert 是经典例子。切勿用小于号和大于号代替；< 和 > 是关系符，间距很宽，角度也不对。参数较大时，用 \\left\\langle ... \\right\\rangle 让括号自动缩放。在量子力学中，同样的尖括号用于构成狄拉克符号 \\langle \\psi | \\phi \\rangle，中间带一条竖线。有些书把同一个量写作 (x, y) 或 x \\cdot y。",
  },
  "kronecker-delta": {
    name: "克罗内克δ",
    meaning: "克罗内克δ：当指标 i 与 j 相同时取 1，否则取 0。",
    usage:
      "它逐元素地表示单位矩阵，I_{ij} = \\delta_{ij}，并表达基的标准正交性，\\langle e_i, e_j \\rangle = \\delta_{ij}。在指标记号中它起替换算子的作用：\\sum_j \\delta_{ij} a_j = a_i，从而简化张量计算。不要把它与狄拉克δ函数 \\delta(x) 混淆，后者是连续变量上的广义函数，尽管二者都用小写 \\delta。给 ij 加花括号才能让两个指标都在下标中；\\delta_ij 只会降低 i，而把 j 留在基线上。在含混合指标的张量计算中，请改写为 \\delta^i_j。",
  },
  "identity-matrix": {
    name: "单位矩阵",
    meaning: "n×n 单位矩阵，对角线上为 1，其余位置为 0。",
    usage:
      "下标记录矩阵的大小，因此对于 m×n 矩阵 A，AI_n = A 和 I_m A = A 同时成立，两侧的单位矩阵不同。维数显而易见时，单写 I 就够了；有些作者更喜欢粗体 \\mathbf{I}，或写作 E，在较早的欧洲文献中尤为常见。多字符的大小需要加花括号：I_{n+1} 或 I_{10}，因为 I_10 只会降低 1。特征多项式 \\det(A - \\lambda I_n) 是它最常出现的地方，而 \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} 则显式写出了 I_2。",
  },
  "zero-matrix": {
    name: "零矩阵",
    meaning: "粗体零，表示零向量或零矩阵，以区别于标量 0。",
    usage:
      "粗体把向量空间的加法单位元与数字零区分开来，例如齐次方程组 A\\mathbf{x} = \\mathbf{0}，或 \\mathbf{v} + \\mathbf{0} = \\mathbf{v}。\\mathbf 对数字有效，因此这是最简单的形式；在大多数字体中 \\boldsymbol{0} 的效果相同。对于大小明确的零矩阵，可写作 \\mathbf{0}_{m \\times n} 或大写的 O_{m \\times n}。上下文足以表明类型时，许多论文省去粗体直接写 0，只要前后一致即可。请与其他向量所用的粗体风格保持一致。",
  },
  "matrix": {
    name: "矩阵",
    meaning: "bmatrix 环境，用方括号排版矩阵，各列之间用 & 分隔。",
    usage:
      "同一行中的元素用 & 分隔，每行以 \\\\ 结束，括号会根据内容自动调整大小，因此不需要 \\left[。同类环境只改变定界符：pmatrix 用圆括号，vmatrix 用竖线表示行列式，Vmatrix 用双竖线，而普通的 matrix 不带任何定界符。array 环境是较早的替代方案；它需要 {cc} 这样的列格式说明，但支持竖线分隔和逐列对齐。对于一般矩阵，用 \\cdots、\\vdots 和 \\ddots 填补空缺，例如 a_{11} & \\cdots & a_{1n}。在行内，把 smallmatrix 放在 \\bigl[ \\bigr] 中可避免撑高行距。",
  },
  "column-vector": {
    name: "列向量",
    meaning: "只有一列的 pmatrix，把 x 叠在 y 之上，构成带圆括号的列向量。",
    usage:
      "每个 \\\\ 开始新的一行，因此单列元素就形成竖直向量，这是书写 R^2 中坐标或线性方程组右端项的常用方式。圆括号（pmatrix）和方括号（bmatrix）同样标准；请在整篇文档中统一使用一种。为节省正文中的竖直空间，可改写为转置的行向量 (x, y)^{\\top}。对于较长的向量，在中间一行使用 \\vdots，例如 x_1 \\\\ \\vdots \\\\ x_n。行内列向量显得拥挤，还会撑开行距；确实无法避免时，smallmatrix 是更紧凑的选择。",
  },
};

export default text;
