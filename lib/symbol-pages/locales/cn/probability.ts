import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  "probability": {
    name: "概率",
    meaning: "黑板粗体 P，作用于事件的概率测度。",
    usage:
      "测度论概率中用 \\mathbb{P}(A) 表示事件 A 的概率，公理如 \\mathbb{P}(\\Omega) = 1。黑板粗体把概率测度与普通的 P 区分开来，后者可能表示矩阵、多项式或划分。在标准字体下，\\mathbb 只对大写字母有效，输入小写字母会得到错误的字形。可与 \\mathbb{E} 和直立的 Var 搭配，以保持风格统一。概率空间是三元组 (\\Omega, \\mathcal{F}, \\mathbb{P})，其中花体 F 表示 σ-代数。也有作者改用 \\Pr，这是一个预定义的直立运算符。",
  },
  "probability-of-a": {
    name: "事件 A 的概率",
    meaning: "事件 A 的概率，用普通的斜体大写 P 书写。",
    usage:
      "入门教材用 P(A) 表示 A 发生的概率，满足 0 \\le P(A) \\le 1 以及补事件法则 P(A^c) = 1 - P(A)。如果文档中没有其他地方用到这个字母，普通斜体 P 就足够；否则可用预定义的直立运算符 \\Pr(A) 或 \\mathbb{P}(A) 避免冲突。参数较大时，让括号随之伸缩：P\\left(\\bigcup_i A_i\\right)。不加反斜杠直接输入 Pr(A)，会得到斜体的 P 和 r，看起来像两个变量相乘。条件概率要在括号内使用 \\mid，写成 P(A \\mid B)，而不是直接用竖线。",
  },
  "expectation": {
    name: "期望",
    meaning: "随机变量 X 的期望值，用黑板粗体 E 书写。",
    usage:
      "期望是 X 按其分布加权的平均值，\\mathbb{E}[X] = \\sum_x x\\,p(x) 或 \\int x f(x)\\,dx。机器学习论文中随处可见，常带一个标明分布的下标：\\mathbb{E}_{x \\sim p}[\\ell(x)]。习惯上使用方括号，参数中含分数时，\\left[ \\right] 或 \\bigl[ \\bigr] 会更美观。黑板粗体 E 把这个运算符与能量 E 或边集 E 区分开来。线性性 \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y] 即使不独立也成立，因此它被如此广泛地使用。",
  },
  "expectation-e": {
    name: "期望（E）",
    meaning: "用普通斜体 E 表示的 X 的期望，即其分布的均值。",
    usage:
      "许多统计学教材用 E[X] 或 E(X) 表示期望值，典型例子是方差恒等式 \\operatorname{Var}(X) = E[X^2] - (E[X])^2。斜体 E 可能与能量或名为 E 的事件等其他含义冲突，因此研究论文中常用 \\mathbb{E} 或直立的 \\mathrm{E}。如果选用直立体，请定义 \\DeclareMathOperator{\\E}{E}，使间距和字体处处一致。条件期望沿用同样的写法，E[X \\mid Y]。无论选择哪种形式，都要从头到尾保持一致。",
  },
  "variance": {
    name: "方差",
    meaning: "X 的方差，即偏离均值的平方的期望，用直立标记表示。",
    usage:
      "常用恒等式有 \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 和 \\text{Var}(aX + b) = a^2\\text{Var}(X)。\\text{Var} 在大多数地方显示正常，但在斜体的定理正文中，这个标记也会变成斜体，因为 \\text 会沿用周围的字体。\\operatorname{Var} 或在导言区写 \\DeclareMathOperator{\\Var}{Var} 更稳妥，间距也正确。也有作者改写为 \\mathbb{V}、\\sigma^2 或 \\mathrm{Var}。对于独立变量，方差可以相加：\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)，一般情况下还要再加上两倍的协方差。",
  },
  "covariance": {
    name: "协方差",
    meaning: "X 与 Y 的协方差，衡量两个随机变量如何共同变化。",
    usage:
      "它由 \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y] 定义，是相关系数 \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) 和协方差矩阵（通常记作 \\Sigma）的基础。独立变量的协方差为零，但反过来一般不成立。与 Var 一样，\\operatorname{Cov} 或声明的运算符比 \\text{Cov} 更稳妥，后者在定理陈述中会变成斜体。如果参数显得拥挤，可在逗号后加一个细空格，(X,\\,Y)。对于随机向量，\\operatorname{Cov}(\\mathbf{X}) 表示完整的协方差矩阵。正值表示两个变量倾向于同向变化。",
  },
  "normal-distribution": {
    name: "正态分布",
    meaning: "均值为 mu、方差为 sigma 平方的正态（高斯）分布。",
    usage:
      "用 X \\sim \\mathcal{N}(\\mu, \\sigma^2) 表示 X 服从正态分布；第二个参数是方差而不是标准差，阅读软件文档时这一点经常引起混淆。多元形式是 \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma)，带协方差矩阵。\\mathcal 给出花体 N，且只对大写字母有效。其后常在行间公式中给出密度 \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)}。标准正态分布是 \\mathcal{N}(0, 1)，其累积分布函数通常记作 \\Phi。",
  },
  "independence-symbol-double-perp": {
    name: "独立符号",
    meaning: "用负间距把两个 \\perp 叠在一起，这是表示统计独立的常用手工拼合符号。",
    usage:
      "概率论学者用 X \\perp\\!\\!\\!\\perp Y 表示随机变量相互独立，用 X \\perp\\!\\!\\!\\perp Y \\mid Z 表示条件独立，这一记法因图模型和因果推断而流行。三个负细空格 \\! 把第二个 \\perp 拉到几乎与第一个重叠，形成一个双竖线的倒 T。由于是手工拼合的，其具体外观在不同字体间略有差异；可定义一个宏，例如 \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}}，让它同时获得关系符的间距。有些文献用单个 \\perp 表示独立，但它与正交符号冲突。",
  },
  "conditional": {
    name: "条件竖线",
    meaning: "带关系符间距的竖线，读作“给定”“使得”或“整除”。",
    usage:
      "与普通的 | 不同，\\mid 会在两侧加空格，这正是条件概率 P(A \\mid B)、集合构造记号 \\{x \\mid x > 0\\} 和整除 3 \\mid 12 所需要的。绝对值不需要额外空格，应使用 | 或 \\vert；竖线用来括住内容时用 \\lvert ... \\rvert。在内容较高的集合构造记号中，放在 \\left\\{ 与 \\right\\} 之间的 \\middle| 会让竖线随之伸长。它的否定是 \\nmid，表示“不整除”。许多作者在集合构造记号中改用冒号，这样在同时出现整除时就不会混淆。",
  },
  "given": {
    name: "条件概率",
    meaning: "在事件 B 已经发生的条件下 A 的条件概率。",
    usage:
      "它由 P(A \\mid B) = P(A \\cap B)/P(B)（P(B) > 0）定义，是贝叶斯定理的基础。始终使用 \\mid 而不是 |：单独的竖线两侧没有空格，表达式会显得拥挤。参数较高时，写成 P\\left(A \\,\\middle|\\, B\\right)，让竖线随括号缩放。多个条件 P(A \\mid B, C) 在竖线后用逗号分隔，而不是再加一条竖线。在似然记号中，p(x \\mid \\theta) 遵循同样的约定；当 \\theta 是固定参数而非随机变量时，有些统计学家改用分号，写成 p(x; \\theta)。",
  },
  "chi-squared": {
    name: "卡方",
    meaning: "卡方：希腊字母 chi 的平方，既是一种分布的名称，也是一种检验统计量。",
    usage:
      "Pearson 统计量 \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} 比较观测频数与期望频数，\\chi^2_k 表示自由度为 k 的分布。注意 \\chi 是希腊字母 chi；不要输入 x，它们看起来有些相似，但字形不同，在基线上的位置也不同。若要同时加上自由度和平方，写 \\chi^2_{k} 或 \\chi_{k}^{2}，两种写法 LaTeX 的排列完全相同。在结果部分，按所在领域的格式规范把检验报告为 \\chi^2(2) = 6.1, p = 0.047。",
  },
  "binomial-coefficient": {
    name: "二项式系数",
    meaning: "二项式系数“n 选 k”，即 n 元集合的 k 元子集个数。",
    usage:
      "它出现在二项式定理 (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}、帕斯卡法则以及二项分布 P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k} 中。\\binom 会根据当前样式自动调整大小；行内可用 \\dbinom 强制使用大号形式，行间公式中可用 \\tbinom 强制使用小号形式。旧的 {n \\choose k} 语法在 plain TeX 风格下仍然可用，但在 LaTeX 文档中不推荐使用。有些教材写作 C(n,k) 或带前缀的 nCk；在学术写作中，括号内上下堆叠的形式是标准写法。",
  },
  "factorial": {
    name: "阶乘",
    meaning: "n 的阶乘，即从 1 到 n 所有正整数的乘积。",
    usage:
      "输入 n! 不需要任何命令：感叹号在数学模式下直接输出，并约定 0! = 1。阶乘在组合数学和分析中随处可见，从 \\binom{n}{k} = \\frac{n!}{k!(n-k)!} 到泰勒系数 \\frac{f^{(n)}(a)}{n!}。注意 n!\\,m! 这类乘积中的间距，细空格可以避免感叹号紧贴下一个字母；复合参数要加括号，如 (n+1)!。不要把这个字符与 \\! 混淆，后者是负细空格。相关记号包括双阶乘 n!! 和斯特林近似 n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n。",
  },
};

export default text;
