import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "弯曲先于或等于号",
    meaning: "弯曲形式的“先于或等于”关系，用于非严格序以及不同于普通数值 ≤ 的偏好关系。",
    usage:
      "当抽象的预序需要一个明显区别于 \\leq 的符号时，序理论学者和经济学家会选用 \\preccurlyeq，例如消费者的弱偏好 x \\preccurlyeq y，或整数分拆上的优势序。它对应的严格关系是 \\prec，镜像符号是 \\succcurlyeq。不要把它与 \\preceq 混淆，后者下方是直线而不是弧线；有些作者会在同一篇论文中同时使用两者，以标记两种不同的序。由于它是关系符，TeX 会自动在两侧加上较宽的间距，因此不要再手动用 \\, 或 \; 命令补空。",
  },
  "curly-succeeds": {
    name: "弯曲后于或等于号",
    meaning: "弯曲形式的“后于或等于”关系，是 \\preccurlyeq 的反向关系，用于弱序、偏好和优超。",
    usage:
      "在微观经济学中，x \\succcurlyeq y 读作“x 弱偏好于 y”；在线性代数中，它有时表示优超关系或广义不等式。下方为直线的 \\succeq 外观相似，是表示半正定矩阵（A \\succeq 0）时更常用的选择，因此请选定一种约定并在全文中保持一致。严格版本是 \\succ。由于用 \\not 否定关系符的效果可能不佳，请检查输出：直线形式有专门的否定符号，如 \\nsucceq，通常比 \\not\\succcurlyeq 更美观。",
  },
  "not-less-than": {
    name: "不小于号",
    meaning: "带否定斜线的小于号：表示一个量并不严格小于另一个量。",
    usage:
      "在全序中，a \\nless b 在逻辑上等同于 a \\geq b，但在偏序中两者含义不同，这正是 \\nless 的用武之地：两个不可比较的元素同时满足 a \\nless b 和 b \\nless a。该字形是一个带斜线的预组合符号，因此比 \\not< 更整洁，后者的斜线可能偏离中心。表示另一方向的配套符号是 \\ngtr。否定非严格不等号时，请使用 \\nleq 或 \\nleqslant，而不要叠加 \\not。",
  },
  "not-greater-than": {
    name: "不大于号",
    meaning: "带否定斜线的大于号，表示左边并不严格大于右边。",
    usage:
      "这个命令名省略了 greater 中的元音（是 \\ngtr，而不是 \\ngt 或 \\ngreater），凭记忆输入时很容易出错。在线性序中，x \\ngtr y 就是 x \\leq y，因此大多数作者更喜欢用肯定形式；\\ngtr 更适合用于偏序、格，或用来陈述某个假设不成立，例如某个数列并非最终大于某个界。与之配套的反方向符号是 \\nless，否定的非严格版本是 \\ngeq。它与 > 本身一样采用关系符间距。",
  },
  "not-less-or-equal": {
    name: "不小于等于号",
    meaning: "不小于或等于：在单横线形式的 ≤ 上加斜线表示否定。",
    usage:
      "当需要说明某个不等式不成立时使用 \\nleq，例如在反例中，或在偏序集中 x \\nleq y 并不意味着 y \\leq x。有三个相关字形：\\nleq 否定单横线的 \\leq，\\nleqslant 否定斜横线的 \\leqslant，\\nleqq 否定双横线的 \\leqq。请让否定形式与文中其余部分使用的未否定样式相匹配，使这些符号看起来属于同一家族。预组合的 \\nleq 优于 \\not\\leq，后者放置的通用斜线可能与横线对不齐。",
  },
  "not-greater-or-equal": {
    name: "不大于等于号",
    meaning: "不大于或等于：≥ 加斜线的形式，表示该不等式不成立。",
    usage:
      "在实分析中，x \\ngeq 0 就是 x < 0，但在向量或矩阵的序中它的含义更弱：一个向量可以不满足逐分量非负，却也不是负向量，因此在这种情况下 \\ngeq 才是准确的符号。它与 \\nleq、\\ngeqslant 和 \\ngeqq 属于同一组，应选用其未否定形式在文中出现的那个版本。如果注重外观，请避免使用 \\not\\geq，因为通用斜线是按 = 的位置设计的，可能显得错位。与所有关系符一样，它会自动获得较宽的间距。",
  },
  "minimum": {
    name: "最小值",
    meaning: "最小值运算符，给出有限集合中的最小元素，或函数所能取到的最小值。",
    usage:
      "\\min 是预定义的运算符名称：它输出直立的 min 并带有正确间距，在行间公式中下标位于下方，如 \\min_{x \\in S} f(x)。在行内公式中，下标会移到侧边以节省行高；如果确实需要，可以用 \\min\\limits_{x} 强制放到下方。在数学模式中直接输入 min，会得到三个相乘的斜体变量，这是常见错误。表示最小值点没有内置命令，因此请在导言区定义 \\DeclareMathOperator*{\\argmin}{arg\\,min}。请区分 \\min 和 \\inf，后者不一定能取到。",
  },
  "maximum": {
    name: "最大值",
    meaning: "最大值运算符：集合中的最大元素，或函数在定义域上所能达到的最大值。",
    usage:
      "最优化问题、最大范数 \\|x\\|_\\infty = \\max_i |x_i| 以及 ReLU 激活函数 \\max(0, x) 都离不开 \\max。它在上下限方面的行为与 \\sum 相同：行间公式中位于运算符下方，行内公式中位于旁边。其后的括号不会自动调整大小，因此当参数中含有分数时，请写 \\max\\left( a, b \\right) 或 \\max\\bigl( \\dots \\bigr)。当最大值可能不存在时，请改用 \\sup。如需 argmax 运算符，请用带星号的 \\DeclareMathOperator* 声明，使其下标在行间公式中同样位于下方。",
  },
  "infimum": {
    name: "下确界",
    meaning: "下确界，即实数集合的最大下界；即使最小值不存在，下确界也存在。",
    usage:
      "集合 \\{1/n : n \\in \\mathbb{N}\\} 的 \\inf 等于 0，但没有最小值，这是说明分析学为何需要 \\inf 而非 \\min 的经典例子。该命令输出直立的 inf，带有运算符间距，并在行间样式中把上下限放在下方，因此 \\inf_{n \\ge 1} a_n 在 equation 环境中显示正确。常见的失误是把 \\inf 与表示无穷符号的 \\infty 混淆。相关运算符包括已有现成命令的 \\liminf，以及需要自行定义的本性下确界，例如使用 \\operatorname*{ess\\,inf}。",
  },
  "supremum": {
    name: "上确界",
    meaning: "上确界：集合的最小上界，是实数完备性和范数定义的核心概念。",
    usage:
      "算子范数写作 \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|，函数的一致范数为 \\sup_x |f(x)|。该命令与 \\lim 一样，在行间公式中把下标放在下方，在行内公式中放在右侧。表示上极限请使用 \\limsup，而不要手动组合 \\lim 和 \\sup；还要记住，实数的每个有上界的非空子集都有 \\sup，而 \\max 则不一定存在。当下标条件较长时，请用 \\substack{...} 在运算符下方分行堆叠，而不要挤成一个很宽的下标。",
  },
  "least-upper-bound": {
    name: "最小上界",
    meaning: "缩写 lub，即最小上界，是上确界的旧称，常见于序理论和格论。",
    usage:
      "关于偏序集和格的教材有时写 \\text{lub}\\, S 而不是 \\sup S，并且并运算 a \\vee b 就是两个元素的 lub。用 \\text 排版虽然可行，但有两个缺点：\\text 会沿用周围的字体，因此在斜体的定理环境中会变成斜体；而且它不会在参数前提供运算符间距。更规范的做法是使用 \\operatorname{lub}，或在导言区写一行 \\DeclareMathOperator{\\lub}{lub}，这样它会保持直立，并像 \\sup 一样带有间距。如果希望在行间公式中把下标放在下方，请使用带星号的声明。",
  },
  "greatest-lower-bound": {
    name: "最大下界",
    meaning: "缩写 glb，即最大下界，是集合下确界在序理论中的名称。",
    usage:
      "在格论中，交 a \\wedge b 定义为 a 和 b 的 glb，而完备格是每个子集都有 glb 和 lub 的格。由于 LaTeX 没有内置的 \\glb，人们常写 \\text{glb}，它在普通正文中显示为直立体，但在定理环境中会继承斜体，并且缺少运算符应有的细间距。为获得一致的效果，请优先使用 \\operatorname{glb} 或 \\DeclareMathOperator{\\glb}{glb}。如果你的读者来自分析学而非序理论背景，那么 \\inf 可能是表示同一概念的更熟悉的记号。",
  },
};

export default text;
