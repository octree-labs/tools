import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  "function": {
    name: "函数记号",
    meaning: "函数 f 作用于自变量 x，这是表示函数值的基本记号。",
    usage:
      "f、g、h 这样的单字母函数名排成意大利体，这对代表函数的符号来说是正确的。多字母的具名函数则不同：应写成 \\sin x 或 \\log x，自定义名称则用 \\operatorname{softmax}(z)，使其直立排印，而不是被排成若干意大利体字母的乘积。在最优化中，f(x) 常常是目标函数，例如在约束条件下求 \\min_x f(x)。当自变量较高时，请用 \\left( \\right) 或 \\bigl( \\bigr) 调整括号大小。对于向量自变量，常见写法是用粗体 x 写成 f(\\mathbf{x})。",
  },
  "function-definition": {
    name: "函数定义",
    meaning: "声明 f 是从定义域 A 到陪域 B 的函数。",
    usage:
      "这种签名式写法是分析和代数中大多数定义的开头，后面常跟着元素层面的对应规则 x \\mapsto x^2。直接输入冒号会在两侧产生关系符间距，显得过宽；\\colon 给出恰当的紧凑标点间距，即 f\\colon A \\to B。\\to 和 \\rightarrow 产生同一个箭头；\\longrightarrow 在行间公式中更为醒目。可以搭配 \\mapsto 写出元素层面的规则：f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2。若有多个对象之间的多个映射，最好用专门的交换图环境来绘制。",
  },
  "composition": {
    name: "复合函数",
    meaning: "f 与 g 的复合，表示先作用 g，再把 f 作用于其结果。",
    usage:
      "复合从右往左读：(f \\circ g)(x) = f(g(x))，它满足结合律，但通常不满足交换律。\\circ 是二元运算符，因此其两侧间距会自动处理。不要用位于基线上的 \\circ 表示度数，度数需要写成 ^{\\circ}；也不要把它与暗示乘法的 \\cdot 或 \\bullet 混淆。重复复合常写作 f^{\\circ n}，以免与幂 f^n 混淆。涉及复合的经典公式是链式法则：(f \\circ g)'(x) = f'(g(x))\\,g'(x)，内层函数的导数在右边。",
  },
  "inverse-function": {
    name: "反函数",
    meaning: "f 的反函数，即撤销 f 作用的映射，满足 f^{-1}(f(x)) = x。",
    usage:
      "只有双射才在整个陪域上存在反函数，但 f^{-1}(B) 也用来表示任意函数下集合 B 的原像，这是另一个概念，不要求可逆。上标 -1 并不表示倒数：f^{-1}(x) 不同于 1/f(x)，这是学生常见的混淆，\\sin^{-1} 也同样受此影响。由于 -1 是两个记号，必须加花括号。反函数定理给出导数 (f^{-1})'(y) = 1/f'(x)，其中 y = f(x)，前提是 f'(x) \\neq 0。",
  },
  "image": {
    name: "像",
    meaning: "f 的像，即 f 实际取到的所有输出值组成的集合，用直立的“Im”表示。",
    usage:
      "在线性代数中，\\text{Im}(T) 是该映射的列空间，秩–零化度定理写作 \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V。注意 \\Im 是另一个命令：它给出哥特体的 I，用于表示复数的虚部。许多作者使用小写的 \\operatorname{im}，或声明 \\DeclareMathOperator{\\im}{im}，这样间距正确，也不会像 \\text 那样继承定理正文中的意大利体。如果想表示某个特定子集而不是整个定义域的像，可以改用集合记号 f(A)。",
  },
  "kernel": {
    name: "核",
    meaning: "f 的核：被 f 映为零的全体元素，构成一个子空间或正规子群。",
    usage:
      "\\ker 是预定义的算子，因此会以直立体和正确间距排印：\\ker T = \\{v \\in V \\mid T(v) = 0\\}。同态是单射当且仅当其核是平凡的，第一同构定理表述为 G/\\ker\\varphi \\cong \\operatorname{im}\\varphi。对单个符号，括号可有可无，如 \\ker A。在线性代数中，核也称为零空间，有时写作 N(A) 或 \\operatorname{null}(A)。没有与之配对的内置“像”算子，因此请声明 \\im 或使用 \\operatorname{im}。",
  },
  "domain": {
    name: "定义域",
    meaning: "f 的定义域，即函数有定义的输入值组成的集合。",
    usage:
      "凸分析大量使用它：\\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} 是广义实值凸函数的有效定义域。\\text{dom} 排成直立体，但在定理环境中可能变成意大利体，并且缺少算子间距；\\operatorname{dom} 可以同时避免这两个问题。在签名 f\\colon A \\to B 中，A 已经是定义域，因此当定义域是隐含的或函数是部分函数时（例如希尔伯特空间上的无界算子），\\text{dom}(f) 最有用。有些教材改用 D(f) 或 D_f，请遵循所在领域的惯例。",
  },
  "codomain": {
    name: "陪域",
    meaning: "f 的陪域，即为函数输出值声明的目标集合。",
    usage:
      "在 f\\colon A \\to B 中陪域是 B，它可能比像更大；f 是满射当且仅当 \\text{Im}(f) = \\text{cod}(f)。范畴论中把 \\operatorname{cod} f 与 \\operatorname{dom} f 并用，分别表示态射的目标与源。与其他基于文本的标签一样，\\operatorname{cod} 间距更好，也能避免定理陈述中意大利体的渗入。有些作者为清晰起见写成 \\operatorname{codom}。区分陪域和值域很重要，因为有的书用“值域”一词指陪域，有的则指像。",
  },
  "range": {
    name: "值域",
    meaning: "f 的值域，通常指 f 实际取到的值组成的集合。",
    usage:
      "这个词有歧义：多数现代教材把值域视为像，但有些较早的教材用它指陪域，因此请说明你的定义。在线性代数中，\\text{range}(A) 是列空间，线性代数基本定理指出它是 A^{\\top} 零空间的正交补。用 \\operatorname{range} 排版可以得到带算子间距的直立字母；算子理论学者常改写为 \\mathcal{R}(A) 或 \\operatorname{ran} T。\\text{range} 也可以用，但它会跟随周围文本的字体，包括意大利体。",
  },
  "surjective": {
    name: "满射箭头",
    meaning: "双头箭头，表示满射（映上）映射或满态射。",
    usage:
      "代数学家写 f\\colon A \\twoheadrightarrow B 表示 f 是满射，例如商映射 G \\twoheadrightarrow G/N。它与表示单射的 \\hookrightarrow 搭配使用，因此短正合列 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 能让两者一目了然。还有向左的版本 \\twoheadleftarrow，用于反方向绘制的映射。该箭头是关系符，因此两侧间距自动处理。不要用它表示收敛或蕴含；那些场合的标准写法是 \\to 和 \\implies。",
  },
  "restriction": {
    name: "函数的限制",
    meaning: "f 在子集 A 上的限制：保持对应规则不变，但缩小定义域。",
    usage:
      "限制 f|_A 保持对应规则不变但缩小定义域，因此 f|_A\\colon A \\to B。普通竖线较短，下标看起来可能与它脱节；许多作者写成 f\\big|_A 以获得更高的竖线，或使用形似半边鱼叉的 \\restriction 箭头。不要把它与求值竖线 F(x)\\big|_a^b 混淆，后者形状相同但用途不同。限制在拓扑学中很常见，用来检验 f|_U 在开集上的连续性；在层论中，s|_U 把截面限制到更小的开集上。",
  },
  "function-evaluation": {
    name: "函数求值",
    meaning: "表示函数 f 把输入 x 映为输出值 y。",
    usage:
      "这个等式是从元素层面理解函数：y 是 x 的像，也可写作 x \\mapsto y。在代数课程中，通过对 x 解 f(x) = y 来求反函数，得到 x = f^{-1}(y)。= 两侧的间距会自动处理，因此不要手动添加空格。若要列出一组函数值，可以用 align 环境对齐多个等式，在每个等号前放置 &。当函数名有多个字母时，请使用 \\operatorname 避免意大利体：写 \\operatorname{relu}(x) = y，而不是 relu(x) = y。",
  },
  "piecewise-function": {
    name: "分段函数",
    meaning: "用 cases 环境给出的分段定义，在不同区间上采用不同的规则。",
    usage:
      "在 cases 中，每一行依次是一个值、一个 & 和对应的条件，各行以 \\\\ 结尾；LaTeX 会自动添加左花括号，右侧不加定界符。典型用途包括绝对值、ReLU 激活函数、符号函数和 Heaviside 阶跃函数。请把文字包在 \\text{} 中，例如 \\text{若 } x > 0，使其直立排印并具有正常间距。行内的分式默认以文本样式排版，若显得太小，请使用 \\dfrac。请确保各条件覆盖整个定义域且互不重叠，最后常以 \\text{其他情况} 一行收尾。",
  },
};

export default text;
