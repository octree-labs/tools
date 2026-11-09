import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "空集（变体）",
    meaning: "空集符号的变体：带斜线的正圆，表示不含任何元素的集合。",
    usage:
      "\\varnothing 和 \\emptyset 含义相同，都表示空集，但外形不同：在 Computer Modern 字体中，\\emptyset 是窄而高、带斜线的零，而 \\varnothing 是带斜线的正圆，许多数学家更偏好后者。请始终如一地使用其中一种，例如用 A \\cap B = \\varnothing 表示两个集合不相交。它不是希腊字母 \\phi 或 \\varphi，也不是斯堪的纳维亚字母 \\O，因此不要用它们代替。有些作者在导言区把 \\emptyset 重定义为 \\varnothing，这样所有出现之处会一次性切换。",
  },
  "contains": {
    name: "包含元素符号",
    meaning: "反向的属于关系：左边的集合包含右边的元素。",
    usage:
      "A \\ni x 与 x \\in A 意思相同，只是集合在前，这在“邻域 U \\ni x”这类说法中读起来很自然。较早的文献和一些逻辑学家也用 \\ni 表示“使得”，不过现在标准写法是 \\mid 或冒号。\\owns 是 \\ni 的别名。用 \\not\\ni 表示其否定。不要把它与字母 epsilon 或手工翻转的 \\in 混淆；\\ni 是带有相应间距的正规关系符。",
  },
  "not-subset": {
    name: "非子集符号",
    meaning: "带斜线的子集符号：左边的集合不是右边集合的子集。",
    usage:
      "\\not\\subset 借助通用的 \\not 前缀在 \\subset 上叠加一条斜线。效果可以接受，但斜线有时不居中；专用字形 \\nsubseteq（不是子集或相等）以及某些符号宏包中的 \\nsubset 更美观。由于 \\subset 本身在真包含与非严格包含之间存在歧义，\\nsubseteq 往往是更清楚的否定形式。例如：\\mathbb{Q} \\not\\subset \\mathbb{Z}，因为 1/2 是有理数但不是整数。请把 \\not 紧贴在关系符之前，不要加空格或花括号，这样它才能正确组合。",
  },
  "big-union": {
    name: "大并集符号",
    meaning: "用于带指标集族之并的大型并集运算符，上下限位于其上方和下方。",
    usage:
      "\\bigcup_{i=1}^{\\infty} A_i 表示可数并，\\bigcup_{\\alpha \\in I} U_\\alpha 表示对某个指标集的并，例如开覆盖。它的行为与 \\sum 相同：在行间公式中上下限位于下方和上方，在行内位于侧面，\\limits 可在行内强制将其放在下方。不要在两个集合之间使用它；A \\cup B 使用二元运算符 \\cup。相关的大型运算符包括 \\bigcap、表示不交并的 \\bigsqcup，以及表示多重集并的 \\biguplus。德摩根律把它与 \\bigcap 和补集联系起来。",
  },
  "big-intersection": {
    name: "大交集符号",
    meaning: "用于对带指标的集族取交集的大型交集运算符。",
    usage:
      "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing 是一个标准例子，拓扑学中用 \\bigcap_{\\alpha} F_\\alpha 表示闭集的交。与其他大型运算符一样，它的上下限在行间模式中位于下方和上方，在行内位于旁边，并且在行间样式中会放大。两个集合的交请改用二元运算符 \\cap。闭区间套、康托尔集 \\bigcap_n C_n，以及把生成的 σ-代数定义为所有包含它的 σ-代数之交，都会用到它。",
  },
  "complement": {
    name: "补集符号",
    meaning: "补集符号，通常作为集合的上标，表示该集合之外的所有元素。",
    usage:
      "A^\\complement 表示 A 相对于全集的补集，因此 A \\cup A^\\complement = U。它是普通符号，形如风格化的 C。常见替代写法有 A^c、A' 和 \\overline{A}，但上横线可能与拓扑闭包混淆，撇号可能与导数混淆，因此 \\complement 没有歧义。请把它写成上标；单独使用的情况很少。德摩根律 (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement 是一个经典用例。",
  },
  "natural-numbers": {
    name: "自然数集",
    meaning: "空心粗体 N，表示自然数集 1, 2, 3 等的标准符号。",
    usage:
      "\\mathbb{N} 是否包含 0 并不统一：逻辑学和计算机科学通常从 0 开始，而数论常从 1 开始，所以请说明你的约定，或写成 \\mathbb{N}_0，或 \\mathbb{Z}_{\\ge 0} 与 \\mathbb{Z}_{>0}。\\mathbb 在标准空心粗体字体中只支持大写字母，因此 \\mathbb{1} 或小写字母在不加载其他字体宏包时无法按预期显示。许多作者会定义 \\newcommand{\\N}{\\mathbb{N}} 以简化书写。数列常写作 (a_n)_{n \\in \\mathbb{N}}。归纳法证明通常以“对所有 n \\in \\mathbb{N}”开头。",
  },
  "integers": {
    name: "整数集",
    meaning: "空心粗体 Z，表示全体整数（正整数、负整数和零）的集合。",
    usage:
      "Z 来自德语 Zahlen（数）。常见构造包括循环群 \\mathbb{Z}/n\\mathbb{Z}、p 进整数 \\mathbb{Z}_p（注意：有些作者用 \\mathbb{Z}_n 表示循环群）、格 \\mathbb{Z}^n，以及表示高斯整数的 \\mathbb{Z}[i]。子集用下标表示，如 \\mathbb{Z}_{\\ge 0}。在标准字体中，\\mathbb 只适用于大写字母。不要用粗体 \\mathbf{Z} 来模拟，那是较早的印刷惯例。在环论中，\\mathbb{Z} 是始环，每个阿贝尔群都是 \\mathbb{Z}-模。",
  },
  "rational-numbers": {
    name: "有理数集",
    meaning: "空心粗体 Q，表示有理数域（整数之比）。",
    usage:
      "Q 代表 quotient（商）。它出现在 \\mathbb{Q}(\\sqrt{2}) 这样的域扩张中，出现在“\\mathbb{Q} 在 \\mathbb{R} 中稠密”这样的稠密性命题中，也出现在代数数论中，用 \\overline{\\mathbb{Q}} 表示代数数。p 进数写作 \\mathbb{Q}_p。正有理数写作 \\mathbb{Q}_{>0} 或 \\mathbb{Q}^+。由于 \\mathbb 只支持大写字母，这里没有问题。在代数内容较多的文档中，定义 \\newcommand{\\Q}{\\mathbb{Q}} 可以减少输入。它的代数闭包是可数的，而它关于通常绝对值的完备化得到 \\mathbb{R}。曲线上的有理点写作 C(\\mathbb{Q})。",
  },
  "real-numbers": {
    name: "实数集",
    meaning: "空心粗体 R，表示构成连续数轴的实数集。",
    usage:
      "\\mathbb{R}^n 是欧几里得空间，f : \\mathbb{R} \\to \\mathbb{R} 是实函数，\\mathbb{R}_{\\ge 0} 或 \\mathbb{R}_+ 表示非负实数（\\mathbb{R}^+ 是否包含 0 各家约定不同）。矩阵空间写作 \\mathbb{R}^{m \\times n}。扩展实数写作 \\overline{\\mathbb{R}} 或 [-\\infty, \\infty]。避免使用 \\Re，它输出的是表示复数实部的哥特体 R，而不是实数集。许多作者会定义简写宏 \\R。它的完备性（每个有界集都有上确界）是它区别于 \\mathbb{Q} 之处。",
  },
  "complex-numbers": {
    name: "复数集",
    meaning: "空心粗体 C，表示形如 a + bi（a 和 b 为实数）的复数构成的域。",
    usage:
      "复分析研究函数 f : \\mathbb{C} \\to \\mathbb{C}，线性代数研究 \\mathbb{C}^n 以及 \\mathbb{C}^{n \\times n} 中的埃尔米特矩阵，代数几何研究多项式环 \\mathbb{C}[x]。去心平面写作 \\mathbb{C} \\setminus \\{0\\} 或 \\mathbb{C}^\\times，黎曼球面写作 \\hat{\\mathbb{C}} 或 \\mathbb{C} \\cup \\{\\infty\\}。代数基本定理指出 \\mathbb{C} 是代数闭域。不要使用 \\mathcal{C}，它通常表示范畴或函数类，例如 C^\\infty。复射影空间写作 \\mathbb{CP}^n 或 \\mathbb{P}^n_\\mathbb{C}。",
  },
  "power-set": {
    name: "幂集符号",
    meaning: "花体 P，幂集（一个集合的所有子集构成的集合）的常用记号。",
    usage:
      "\\mathcal{P}(A) 表示幂集，对有限集 A 有 |\\mathcal{P}(A)| = 2^{|A|}；康托尔定理指出不存在满射 A \\to \\mathcal{P}(A)。有些作者改用魏尔斯特拉斯 p 符号 \\wp，或写成 2^A。\\mathcal{P} 也用于表示概率测度、划分或计算复杂性理论中的 P 类，所以要结合上下文判断。花体字母表只包含大写字母。如果想要更接近手写体的 P，可以使用额外宏包提供的手写体命令，例如 \\mathscr。",
  },
  "cardinality": {
    name: "基数符号",
    meaning: "围住集合的竖线，表示其基数，即集合所含元素的个数。",
    usage:
      "对有限集，|A| 计数元素个数，如容斥公式 |A \\cup B| = |A| + |B| - |A \\cap B|；对无限集，它表示基数。同样的记号对数表示绝对值，对矩阵表示行列式，因此要由上下文决定。替代写法有 \\#A 和 \\operatorname{card}(A)。若希望间距能区分左右，请写 \\lvert A \\rvert；对于 \\mathcal{P}(\\mathbb{N}) 这样较高的内容，请使用 \\left| ... \\right|。在组合数学中，有限集的 |A| = |B| 常通过构造双射来证明。",
  },
  "aleph": {
    name: "阿列夫",
    meaning: "希伯来字母阿列夫，用于表示无限基数，从可数无穷阿列夫零开始。",
    usage:
      "\\aleph_0 是 \\mathbb{N} 的基数，\\aleph_1 是下一个基数，连续统假设断言 2^{\\aleph_0} = \\aleph_1。下标请写成 \\aleph_0，而不是 \\aleph0。数学中可用的其他希伯来字母包括 \\beth、\\gimel 和 \\daleth，其中 \\beth 数 \\beth_1 = 2^{\\aleph_0} 度量连续统。\\aleph 是普通符号。不要把它与 \\alpha 或表示自然数的 N 混淆。康托尔对角线论证表明实数不可数，因此实数集的基数严格大于 \\aleph_0。",
  },
};

export default text;
