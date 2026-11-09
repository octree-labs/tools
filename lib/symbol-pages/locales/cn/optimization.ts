import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "带下标的 argmax",
    meaning: "关于 x 的 argmax：使目标函数取得最大值的点 x。",
    usage:
      "在最优化教材中，f 在可行集上的最大值点写作 x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x)。如果输入 \\arg\\max_{x}，下标附着在 \\max 上，因此在行间公式中 x 居中位于 max 下方，而不是整个 arg max 下方。使用 \\operatorname*{arg\\,max}_{x} 或带星号声明的运算符，可以把下标放在完整名称的正下方。在行内公式中，下标无论如何都位于右下方。由于最大值点可能不唯一，严格来说 x^* \\in \\arg\\max 比等号更准确。对多个变量求最大值时，把它们一并列出：\\arg\\max_{x, y}。",
  },
  "argmin-subscript": {
    name: "带下标的 argmin",
    meaning: "关于 x 的 argmin：使目标函数取得最小值的点 x。",
    usage:
      "这种写法用于定义最小化问题的解，例如近端算子 \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big)。由于 \\arg 不能带上下限，下标属于 \\min，只有在行间公式中才会居中位于 min 下方；使用 \\operatorname*{arg\\,min} 可以修正位置。约束条件可以写在下标中，如 \\arg\\min_{x \\in C}；条件有多行时可放在 \\substack 中。要区分 argmin 与 \\min：前者返回一个点或点集，后者返回函数值；两者混用是学生作业中的常见错误。",
  },
  "minimize": {
    name: "最小化",
    meaning: "关于 x 的最小值：x 变化时表达式所取的最小值，x 写在 min 下方。",
    usage:
      "\\min 是预定义的、可以带上下限的运算符，因此在行间公式中 \\min_{x} 会把 x 放在单词下方，而在行内公式中则作为右侧下标。这是标准最优化问题的第一行：\\min_x f(x)，并附带约束条件。当最小值可能取不到时（例如在开集上），请改用 \\inf。若要在行内强制采用行间样式的位置，请写 \\min\\limits_{x}。min 下方的条件有多行时，请使用 \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}。它表示的是一个数值，而 argmin 返回的是最小值点。",
  },
  "maximize": {
    name: "最大化",
    meaning: "关于 x 的最大值：x 在定义域内变化时表达式取得的最大值。",
    usage:
      "\\max_{x} 的用法与 \\min_{x} 相同：这个预定义运算符在行间公式中把上下限放在下方，在行内公式中放在侧边。典型用途包括对偶函数、极小极大问题（如 GAN 训练中的 \\min_G \\max_D）以及支持向量机中的间隔最大化。当上确界可能取不到时，正确的运算符是 \\sup。组合使用多个运算符很常见，TeX 能很好地处理相邻的 \\min 和 \\max 上堆叠的上下限。可以用 \\limits 或 \\nolimits 覆盖默认位置，并在较长表达式的目标函数前加 \\, 或 \\; 留出空隙。",
  },
  "subject-to": {
    name: "约束条件缩写 s.t.",
    meaning: "“subject to”（满足、受约束于）的缩写，用于引出最优化问题的约束条件。",
    usage:
      "在问题表述中，s.t. 把目标函数与约束条件分隔开：\\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0。请使用 \\text，使字母保持直立并保留句点，并在两侧用 \\quad 留白，因为 \\text 本身不会添加间距。许多排版规范更喜欢完整短语 \\text{subject to}，尤其是在用 align 环境对齐的行间表述中，约束条件会逐行排列在第一条约束下方。不要在数学模式中直接输入 s.t.，否则 s 和 t 会被排成斜体变量，中间夹着一个句点。",
  },
  "constraint": {
    name: "不等式约束",
    meaning: "一般的不等式约束：函数 g 在可行点 x 处必须非正。",
    usage:
      "在凸优化中，惯例是把不等式约束写成标准形式 g_i(x) \\leq 0，因此像 x_1 + x_2 \\geq 1 这样的约束应改写为 1 - x_1 - x_2 \\leq 0。\\leq 有简写别名 \\le，两者字形相同；\\leqslant 下方是一条斜线，在一些欧洲排版传统中更受青睐。多个约束可编号为 g_i(x) \\leq 0，其中 i = 1, \\dots, m。在 KKT 分析中，每个不等式都对应一个乘子 \\lambda_i \\geq 0，并满足互补松弛条件 \\lambda_i g_i(x) = 0。排版问题时，用 & 将它们对齐。",
  },
  "equality-constraint": {
    name: "等式约束",
    meaning: "一般的等式约束：函数 h 在任意可行点 x 处必须为零。",
    usage:
      "在非线性规划的标准形式中，等式约束 h_j(x) = 0 与不等式约束 g_i(x) \\leq 0 互为补充。在凸优化中，等式约束必须是仿射的，因此常写作 Ax = b。在拉格朗日函数中，每个等式约束都对应一个乘子 \\nu_j 或 \\mu_j，与不等式约束的乘子不同，它的符号可以任意。字母 h 是惯用写法，但在某些领域会与步长或熵冲突；请选用不会混淆的字母。约束有多个时，用 j 编号，以便与不等式约束的编号 i 区分开。",
  },
  "lagrangian": {
    name: "拉格朗日函数",
    meaning: "拉格朗日函数，把目标函数与按乘子 λ 加权的约束条件结合在一起。",
    usage:
      "拉格朗日函数为 \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x)，对偶函数是它关于 x 的下确界。令 \\nabla_x \\mathcal{L} = 0 即得到平稳性条件，这在带约束的微积分问题和支持向量机推导中都会用到。\\mathcal 给出花体 L，并且只适用于大写字母。由于同一个 \\mathcal{L} 在机器学习中也表示损失函数，同时涉及两者的论文有时会把其中一个写成 L 或 \\Lambda。有些教材采用相反的符号约定 f - \\lambda g，因此请说明你采用的约定。",
  },
  "gradient": {
    name: "梯度",
    meaning: "f 在 x 处的梯度：由一阶偏导数组成的向量，指向函数上升最快的方向。",
    usage:
      "梯度 \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top 驱动着梯度下降等一阶方法，即 x_{k+1} = x_k - \\alpha \\nabla f(x_k)；梯度为零是无约束问题的一阶最优性条件。\\nabla 是倒三角符号，称为哈密顿算子或纳布拉算子。在向量分析中，同一算子还给出散度 \\nabla \\cdot \\mathbf{F} 和旋度 \\nabla \\times \\mathbf{F}。不要把它与 \\Delta 混淆，后者是正三角，用于表示拉普拉斯算子或有限差分。只对部分变量求导时，请加下标，如 \\nabla_x f。",
  },
  "hessian": {
    name: "黑塞矩阵",
    meaning: "f 在 x 处的黑塞矩阵：由二阶偏导数组成的矩阵，描述函数的局部曲率。",
    usage:
      "在最优化中，\\nabla^2 f(x) 表示黑塞矩阵，用于牛顿法 x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k) 以及二阶条件：若在驻点处黑塞矩阵正定，则该点是严格局部极小点。需要注意，在物理和偏微分方程中，\\nabla^2 f 表示拉普拉斯算子，它是一个标量，等于黑塞矩阵的迹，常写作 \\Delta f。请说明你指的是哪一个，或者用 H_f 或 \\nabla\\nabla^\\top f 表示矩阵。二阶可微函数为凸函数，当且仅当处处有 \\nabla^2 f(x) \\succeq 0。",
  },
  "optimal-value": {
    name: "最优解",
    meaning: "带星号上标的 x：最优化问题的最优解或最小值点。",
    usage:
      "星号标记最优点，因此 p^* = f(x^*) 是最优值，对偶最优解写作 \\lambda^*、\\nu^*。收敛速度通常用 f(x_k) - f(x^*) 或 \\|x_k - x^*\\| 来表述。^* 和 ^\\ast 生成相同的星号；^\\star 给出五角星，可避免与复共轭、伴随或克莱尼星号混淆，因为它们也使用星号。当 x 同时带有下标时，x_k^* 和 x^*_k 的显示效果相同。请把 x^* 与 \\hat{x} 区分开，后者通常表示估计值或近似解。",
  },
  "feasible-set": {
    name: "可行集",
    meaning: "花体 X，常用来命名最优化变量取值的可行集或定义域。",
    usage:
      "在最优化和机器学习中，常用花体大写字母命名集合：x \\in \\mathcal{X} 表示可行域，\\mathcal{Y} 表示标签集，\\mathcal{D} 表示数据分布，\\mathcal{H} 表示假设类。\\mathcal 只支持大写字母，小写参数会产生不可预料的字形。如果想要更华丽的手写体，\\mathscr 提供另一种风格；而 \\mathbb{X} 给出黑板粗体，更常用于数系。向该集合的投影写作 \\Pi_{\\mathcal{X}}(y)。请先明确定义一次该集合，例如 \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}。",
  },
  "kkt-conditions": {
    name: "KKT 条件",
    meaning: "KKT 条件组中的平稳性条件：目标函数的梯度与加权后的约束梯度相互平衡。",
    usage:
      "这一行是卡罗需-库恩-塔克（KKT）条件中的第一条；完整的条件组还包括原始可行性 g(x) \\leq 0、对偶可行性 \\lambda \\geq 0 以及互补松弛条件 \\lambda g(x) = 0。约束有多个时，它推广为 \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0。为便于阅读，请用 cases 或 aligned 环境排版整个条件组。符号约定各不相同：若拉格朗日函数写作 f - \\lambda g，加号就要变成减号，因此请与你的定义保持一致。明确写出在 x^* 处取值可以避免歧义。",
  },
  "positive-definite": {
    name: "正定性",
    meaning: "矩阵正定条件：A \\succ 0 表示对任意非零向量 x 都有 x^T A x > 0。",
    usage:
      "在矩阵分析和半定规划中，\\succ 表示勒夫纳序，因此 A \\succ B 表示 A - B 是正定矩阵。黑塞矩阵满足 \\nabla^2 f(x) \\succ 0 可以保证严格凸性，协方差矩阵满足 \\Sigma \\succ 0 则说明它可逆。\\succ 是关系符号，因此会自动获得关系符间距。不要对矩阵使用 >，它容易让人理解为逐元素比较。外观相近的符号有 \\succcurlyeq（一种弯曲变体，有些作者用它表示半正定情形）以及表示“远大于”的 \\gg。等价的集合写法是 A \\in \\mathbb{S}^n_{++}。",
  },
  "positive-semidefinite": {
    name: "半正定性",
    meaning: "半正定条件：A \\succeq 0 表示对所有向量 x 都有 x^T A x \\geq 0。",
    usage:
      "半定约束 X \\succeq 0 定义了半定规划，光滑函数为凸函数等价于 \\nabla^2 f(x) \\succeq 0。格拉姆矩阵和协方差矩阵总是半正定的。\\succeq 是下方带直线的“后于”符号；\\succcurlyeq 是下方为弧线的变体，有些最优化教材更喜欢它，因此请选定一种并始终保持一致。严格版本是 \\succ。这类矩阵构成的集合常写作 \\mathbb{S}^n_+，而舒尔补条件是以分块形式表述这类约束的常用方法。",
  },
};

export default text;
