import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  "alpha": {
    name: "希腊字母 α（alpha）",
    meaning: "小写希腊字母 alpha，常用来表示角度、显著性水平、学习率和系数。",
    usage:
      "在统计学中，\\alpha 表示检验的显著性水平，如 \\alpha = 0.05，也是 Beta 分布和 Gamma 分布的形状参数。物理学用它表示精细结构常数 \\alpha \\approx 1/137 以及 α 粒子。几何中它常用来命名角，通常与 \\beta 和 \\gamma 一起出现。LaTeX 没有大写的 \\Alpha 命令，因为大写 alpha 与拉丁字母 A 完全相同，请直接写 A 或 \\mathrm{A}。在手写风格的字体中，注意不要把 \\alpha 与拉丁字母 a 或正比符号 \\propto 混淆。",
  },
  "beta": {
    name: "希腊字母 β（beta）",
    meaning: "小写希腊字母 beta，是回归系数、角度以及分布第二个参数的标准记号。",
    usage:
      "回归模型写作 y = \\beta_0 + \\beta_1 x + \\varepsilon，用 \\hat{\\beta} 表示系数的估计值。在假设检验中，\\beta 是第二类错误的概率，因此检验功效为 1 - \\beta。物理学在相对论中用它表示 v/c，并用 \\beta = 1/(k_B T) 表示逆温度。金融学中的 beta 衡量股票相对于市场的波动。由于大写 beta 与拉丁字母 B 相同，LaTeX 没有 \\Beta 命令。德语的 sharp s（ß）是另一个字符，写作 \\ss，不能用它代替 \\beta。",
  },
  "gamma": {
    name: "希腊字母 γ（gamma）",
    meaning: "小写希腊字母 gamma，用于表示欧拉-马歇罗尼常数、洛伦兹因子和折扣因子。",
    usage:
      "在狭义相对论中，\\gamma 是洛伦兹因子 \\gamma = 1/\\sqrt{1 - v^2/c^2}；在分析学中，它是欧拉-马歇罗尼常数 \\gamma \\approx 0.5772。强化学习在 \\sum_t \\gamma^t r_t 中用它作折扣因子，物理学用它表示伽马射线和光子。几何中它常命名三角形的第三个角，排在 \\alpha 和 \\beta 之后；复分析中 \\gamma 表示曲线或围道。注意大写的 \\Gamma 是伽马函数，是另一个命令，不要用 \\Gamma 表示这个常数。",
  },
  "gamma-upper": {
    name: "大写希腊字母 Γ（Gamma）",
    meaning: "大写希腊字母 Gamma，最常见的用途是推广阶乘的伽马函数 Γ(z)。",
    usage:
      "对正整数有 \\Gamma(n) = (n-1)!，一般情形下 \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt。它还用于微分几何中的克里斯托费尔符号 \\Gamma^k_{ij}、Gamma 分布，以及类型论中的类型上下文 \\Gamma \\vdash e : \\tau。LaTeX 中的大写希腊字母默认是直立体；如需斜体，请用 \\varGamma。图论学者有时用 \\Gamma(v) 表示顶点的邻域。不要把它与旋转的拉丁字母 L 混淆，也不要与小写常数 \\gamma 混淆。",
  },
  "delta": {
    name: "希腊字母 δ（delta）",
    meaning: "小写希腊字母 delta，用于表示微小量、狄拉克 δ 函数和克罗内克 δ。",
    usage:
      "分析学在极限与连续性的定义中把它与 epsilon 搭配使用，如 |x - a| < \\delta。狄拉克 δ 函数 \\delta(x) 满足 \\int f(x)\\delta(x - a)\\,dx = f(a)，克罗内克 δ 记号 \\delta_{ij} 在 i = j 时为 1，否则为 0。变分法用 \\delta S 表示变分，化学用 \\delta+ 和 \\delta- 表示部分电荷。它不同于弯曲的偏导数符号 \\partial，也不同于表示有限变化量的大写 \\Delta。",
  },
  "delta-upper": {
    name: "大写希腊字母 Δ（Delta）",
    meaning: "大写希腊字母 Delta，用于表示量的有限变化、拉普拉斯算子和判别式。",
    usage:
      "物理和化学用 \\Delta x 表示位置的变化，用 \\Delta H 表示焓变，如 \\Delta G = \\Delta H - T\\Delta S。在分析学中，\\Delta 是拉普拉斯算子 \\Delta u = \\nabla^2 u；在代数中，它是判别式 \\Delta = b^2 - 4ac。几何学者也用它表示三角形，不过另一个空心符号 \\triangle 更适合这一用途。大写希腊字母为直立体，需要斜体时用 \\varDelta。不要把 \\Delta 与倒三角 \\nabla 混淆。",
  },
  "epsilon": {
    name: "希腊字母 ϵ（epsilon）",
    meaning: "小写月牙形 epsilon ϵ，用于表示小正数和误差项。",
    usage:
      "\\epsilon 输出月牙形的 ϵ，而 \\varepsilon 输出开口、弯曲的 ε，许多读者更熟悉后者这种手写形式。分析学在 \\forall \\epsilon > 0 中用任意一种表示任意小的数，但整篇论文应保持同一种写法。许多作者用 \\epsilon 表示小量，用 \\varepsilon 表示误差项或噪声。不要把两者与集合属于符号 \\in 混淆：\\in 看起来像 ϵ，但它是关系符，间距不同。物理学还用 \\epsilon_0 表示真空介电常数。",
  },
  "epsilon-variant": {
    name: "epsilon 变体（ε）",
    meaning: "小写 epsilon 的变体 ε，这种开口弯曲的写法常用于误差项和小量。",
    usage:
      "\\varepsilon 输出圆润的 ε，比月牙形的 \\epsilon 更接近手写的 epsilon。统计学把回归的噪声项写作 \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2)，许多分析学教材在 epsilon-delta 证明中也偏好 \\varepsilon。物理学用 \\varepsilon_0 表示真空介电常数，用 \\varepsilon_{ijk} 表示列维-奇维塔符号。由于两种写法容易不小心混用，可以考虑在导言区重定义其中一个，这样只需输入一个命令。不要用它代替集合属于符号 \\in。",
  },
  "zeta": {
    name: "希腊字母 ζ（zeta）",
    meaning: "小写希腊字母 zeta，最著名的用途是黎曼 ζ 函数和阻尼比。",
    usage:
      "黎曼 ζ 函数 \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} 是它的标志性用法，著名的巴塞尔问题结果为 \\zeta(2) = \\pi^2/6。工程师用 \\zeta 表示二阶系统的阻尼比，如 \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0。复分析用它作复变量的哑变量，数论用它表示单位根 \\zeta_n = e^{2\\pi i/n}。由于大写 zeta 与拉丁字母 Z 相同，LaTeX 没有 \\Zeta 命令。它的手写形式容易与 \\xi 混淆，请确认原文使用的是哪个字母。",
  },
  "eta": {
    name: "希腊字母 η（eta）",
    meaning: "小写希腊字母 eta，用于表示学习率、效率、黏度和闵可夫斯基度规。",
    usage:
      "在机器学习中，\\eta 是学习率的惯用记号，如更新式 w \\leftarrow w - \\eta \\nabla L(w)。热力学把效率写作 \\eta = W/Q_h，流体力学用它表示动力黏度，相对论用 \\eta_{\\mu\\nu} 表示闵可夫斯基度规。统计学有时用它表示广义线性模型的线性预测量 \\eta = X\\beta。大写 eta 与拉丁字母 H 相同，因此没有 \\Eta 命令。在使用无衬线字体的幻灯片中，下伸部分可能不明显，注意不要把 \\eta 与拉丁字母 n 混淆。",
  },
  "theta": {
    name: "希腊字母 θ（theta）",
    meaning: "小写希腊字母 theta，通常用来表示角度，以及统计学和机器学习中的模型参数。",
    usage:
      "三角学和极坐标用 \\theta 表示角度，如 (r\\cos\\theta, r\\sin\\theta)。统计学和机器学习用它表示参数向量，用 \\hat{\\theta} 表示估计量，用 \\theta^* 表示最优值。表示紧确复杂度界的大 Θ 记号用大写的 \\Theta，而不是 \\theta。变体 \\vartheta 是一种类似手写体的形式，偶尔用于第二个角度或物理学中。书写估计量时，\\hat{\\theta} 的帽子比 \\widehat{\\theta} 更居中，后者是为较宽的参数设计的。在贝叶斯记号中，\\theta 也表示后验分布 p(\\theta \\mid x) 中的未知量。",
  },
  "theta-upper": {
    name: "大写希腊字母 Θ（Theta）",
    meaning: "大写希腊字母 Theta，是紧确渐近界和参数空间的标准记号。",
    usage:
      "算法分析用 \\Theta(n \\log n) 表示同时作为上界和下界的界，与 O 和 \\Omega 并列使用。统计学用 \\Theta 表示参数空间，如 \\theta \\in \\Theta。物理学用它表示亥维赛阶跃函数 \\Theta(x)，部分教材也用它表示温度。LaTeX 中的大写希腊字母为直立体；如果排版风格需要斜体，可用 \\varTheta。不要把 \\Theta 与空集符号或带横线的数字 0 混淆。",
  },
  "iota": {
    name: "希腊字母 ι（iota）",
    meaning: "小写希腊字母 iota，一个没有点的窄字母，用于表示包含映射和指标记号。",
    usage:
      "\\iota 常用来命名包含映射或嵌入映射，如 \\iota : A \\hookrightarrow X，在微分几何中还表示内积 \\iota_X \\omega。APL 和一些函数式语言用 iota 表示生成下标序列的函数，因此在计算机科学文献中也会出现。由于它很像无点的 i，请注意不要与 \\imath 混淆，后者是放在重音符号下方的无点 i。LaTeX 没有 \\Iota 命令，因为大写 iota 与拉丁字母 I 相同。这个字母很少见，第一次使用时用一句话定义它会对读者有帮助。",
  },
  "kappa": {
    name: "希腊字母 κ（kappa）",
    meaning: "小写希腊字母 kappa，用于表示曲率、条件数和 Cohen's kappa 系数。",
    usage:
      "微分几何把曲线的曲率写作 \\kappa = |\\gamma''(s)|，数值分析用 \\kappa(A) = \\|A\\|\\|A^{-1}\\| 表示矩阵的条件数。统计学用 Cohen's \\kappa 衡量评分者间的一致性，物理学用它表示热导率或介电常数。变体 \\varkappa 是另一种字形，部分作者更喜欢使用。由于大写 kappa 与拉丁字母 K 相同，没有 \\Kappa 命令。不要把 \\kappa 与拉丁字母 k 互换，因为许多公式同时使用两者。",
  },
  "lambda": {
    name: "希腊字母 λ（lambda）",
    meaning: "小写希腊字母 lambda，用于表示特征值、波长、速率和正则化强度。",
    usage:
      "线性代数用 Av = \\lambda v 表示特征值与特征向量。物理学在 c = \\lambda f 中用 \\lambda 表示波长，概率论用它表示泊松分布或指数分布的速率，最优化用它表示拉格朗日乘子以及岭回归或 lasso 中的惩罚权重 \\lambda\\|w\\|^2。计算机科学用 lambda 演算写匿名函数，如 \\lambda x.\\, x + 1。大写 \\Lambda 是另一个命令，用途也不同。学习率调度和指数平滑也借用 \\lambda 表示衰减因子。",
  },
  "lambda-upper": {
    name: "大写希腊字母 Λ（Lambda）",
    meaning: "大写希腊字母 Lambda，常用于表示特征值对角矩阵和宇宙学常数。",
    usage:
      "谱分解 A = Q\\Lambda Q^{-1} 用 \\Lambda 表示特征值组成的对角矩阵。宇宙学把宇宙学常数写作 \\Lambda，标准宇宙学模型排版为 \\Lambda\\text{CDM}。粒子物理用它表示 Λ 重子，格论或数论可能用 \\Lambda 表示格或冯·曼戈尔特函数 \\Lambda(n)。LaTeX 中的大写希腊字母为直立体，需要斜体时用 \\varLambda。不要把它误认为逻辑与符号 \\wedge，后者是带运算符间距的另一个字形。",
  },
  "mu": {
    name: "希腊字母 μ（mu）",
    meaning: "小写希腊字母 mu，是均值、测度、摩擦系数和“微”前缀的标准记号。",
    usage:
      "概率论把均值写作 \\mu = E[X]，因此正态分布写作 \\mathcal{N}(\\mu, \\sigma^2)。测度论用 \\mu 表示测度，物理学用它表示摩擦系数、磁导率 \\mu_0 和约化质量。作为单位前缀，如 \\mu m 或 \\mu s，它会排成数学斜体，而排版规范要求使用直立的微符号；用 \\mathrm 包裹并不会改变希腊字母的字形。最优化在内点法中用 \\mu 表示障碍参数。",
  },
  "nu": {
    name: "希腊字母 ν（nu）",
    meaning: "小写希腊字母 nu，用于表示频率、自由度和运动黏度。",
    usage:
      "物理学把光子能量写作 E = h\\nu，其中 \\nu 是频率；流体力学用 \\nu 表示运动黏度。统计学用 \\nu 表示学生 t 分布的自由度，粒子物理把中微子写作 \\nu_e、\\nu_\\mu。相对论用希腊字母指标 \\mu\\nu 表示张量分量，如 g_{\\mu\\nu}。在许多字体中 \\nu 与拉丁字母 v 非常相似，因此避免在同一公式中同时使用这两个字母。LaTeX 没有 \\Nu 命令，大写 nu 就是拉丁字母 N。",
  },
  "xi": {
    name: "希腊字母 ξ（xi）",
    meaning: "小写希腊字母 xi，一个弯弯曲曲的字母，用于表示随机变量、哑变量和阻尼。",
    usage:
      "概率论教材常用 \\xi 表示随机变量或噪声项，分析学用它表示中间点，如中值定理 f(b) - f(a) = f'(\\xi)(b - a)。傅里叶分析在 \\hat{f}(\\xi) 中用 \\xi 表示频率变量。部分工程教材用 \\xi 而不是 \\zeta 表示阻尼比。由于 \\xi 和 \\zeta 手写时很难区分，请确认原文使用的是哪个字母。它的大写形式 \\Xi 是另一个命令。",
  },
  "xi-upper": {
    name: "大写希腊字母 Ξ（Xi）",
    meaning: "大写希腊字母 Xi，由三条横线组成，用于表示 Ξ 重子和一些特殊函数。",
    usage:
      "\\Xi 在数学中相对少见。粒子物理学家用它表示 Ξ 重子，写作 \\Xi^0 和 \\Xi^-；在解析数论中，它有时表示黎曼 ξ 函数 \\Xi(t)。统计力学偶尔把巨正则配分函数写作 \\Xi。与 LaTeX 中其他大写希腊字母一样，它是直立体；\\varXi 给出斜体形式。不要把它与恒等符号 \\equiv 混淆，后者的三条横线等长，并带有关系符间距。",
  },
  "pi": {
    name: "希腊字母 π（pi）",
    meaning: "小写希腊字母 pi，即圆周率 3.14159…，也用于表示置换和策略。",
    usage:
      "\\pi 是圆的周长与直径之比，出现在 A = \\pi r^2、e^{i\\pi} + 1 = 0 以及 \\pi/2 这样的弧度角中。强化学习用 \\pi 表示策略 \\pi(a \\mid s)，组合数学用它表示置换，数论用 \\pi(x) 表示素数计数函数。变体 \\varpi 是另一种字形。当 pi 作为常数时，部分排版规范倾向使用直立体，但标准 LaTeX 输出的是斜体 \\pi。不要用大型运算符 \\prod 代替 \\pi，反之亦然。",
  },
  "pi-upper": {
    name: "大写希腊字母 Π（Pi）",
    meaning: "大写希腊字母 Pi，作为普通字母用于表示投影、利润和渗透压。",
    usage:
      "\\Pi 是固定大小的字母，而不是连乘运算符；对下标求积请用 \\prod，它会自动缩放并放置上下限。作为字母，\\Pi 用于命名投影映射、经济学中的利润函数、渗透压以及计算机科学中的 pi 演算。类型论把依赖函数类型写作 \\Pi_{x:A} B(x)。复杂度理论用 \\Pi_k 表示多项式层级的各层。大写希腊字母默认为直立体，需要时可用 \\varPi 得到斜体。",
  },
  "rho": {
    name: "希腊字母 ρ（rho）",
    meaning: "小写希腊字母 rho，用于表示密度、相关系数和电荷密度。",
    usage:
      "物理学用 \\rho 表示质量密度 \\rho = m/V，以及麦克斯韦方程组 \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 中的电荷密度。统计学把皮尔逊相关系数写作 \\rho_{XY}，斯皮尔曼等级相关系数也写作 \\rho。表示论用 \\rho 表示表示，量子力学用它表示密度矩阵。变体 \\varrho 带有弯曲的尾巴，部分作者用它来区分两种含义。不要把 \\rho 与拉丁字母 p 混淆，它们在许多字体中很相似。",
  },
  "sigma": {
    name: "希腊字母 σ（sigma）",
    meaning: "小写希腊字母 sigma，用于表示标准差、激活函数和 σ-代数。",
    usage:
      "统计学把标准差写作 \\sigma，方差写作 \\sigma^2。机器学习用 \\sigma(x) = 1/(1 + e^{-x}) 表示 logistic sigmoid 函数，并用 \\sigma 泛指激活函数。测度论讨论 \\sigma-代数，物理学用 \\sigma 表示截面、电导率和泡利矩阵 \\sigma_x，线性代数用 \\sigma_i 表示奇异值。词尾 sigma 变体 \\varsigma 形似拉丁字母 s，在数学中很少使用。求和不要用大写的 \\Sigma，而应使用 \\sum。",
  },
  "sigma-upper": {
    name: "大写希腊字母 Σ（Sigma）",
    meaning: "作为字母的大写希腊字母 Sigma，主要用于表示协方差矩阵和字母表。",
    usage:
      "在统计学中，\\Sigma 表示协方差矩阵，如 \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma)，奇异值分解写作 A = U\\Sigma V^\\top。形式语言理论用 \\Sigma 表示字母表，用 \\Sigma^* 表示其上所有字符串。求和请改用 \\sum：\\Sigma 是固定大小的普通字母，在行间公式中不会变大，也不能带上下限。复杂度理论用 \\Sigma_k^p 表示多项式层级。大写希腊字母为直立体；\\varSigma 是斜体变体。",
  },
  "tau": {
    name: "希腊字母 τ（tau）",
    meaning: "小写希腊字母 tau，用于表示时间常数、力矩、固有时和肯德尔等级相关系数。",
    usage:
      "物理学把力矩写作 \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}，用 e^{-t/\\tau} 中的 \\tau 表示时间常数，在相对论中用 \\tau 表示固有时。统计学有肯德尔 \\tau，部分作者还把 \\tau = 2\\pi 作为圆常数。数论用 \\tau(n) 表示因数个数，模形式理论用 \\tau 表示上半平面中的点。类型论常把类型写作 \\tau 和 \\sigma。由于大写 tau 与拉丁字母 T 相同，没有 \\Tau 命令。在某些字体中 \\tau 很像小写 t，因此相邻变量请选用易于区分的名称。",
  },
  "upsilon": {
    name: "希腊字母 υ（upsilon）",
    meaning: "小写希腊字母 upsilon，一个很少使用的字母，与拉丁字母 u 或 v 非常相似。",
    usage:
      "小写 \\upsilon 在数学中并不常见，主要因为它容易与 u 和 \\nu 混淆。它出现在粒子物理中（Υ 介子通常用大写表示），偶尔也用作速度或一般的指标变量。如果需要一个新变量，选择不易混淆的字母通常更好。确实要使用时，请明确给出定义。LaTeX 的 \\upsilon 与其他小写希腊字母一样是斜体，而大写 \\Upsilon 有自己的命令。",
  },
  "upsilon-upper": {
    name: "大写希腊字母 Υ（Upsilon）",
    meaning: "大写希腊字母 Upsilon，最著名的用途是粒子物理中的 Υ 介子。",
    usage:
      "在粒子物理中，\\Upsilon 表示底夸克偶素介子族，如 \\Upsilon(1S)、\\Upsilon(2S)。在数学中它很少见，偶尔在其他字母已被占用时用来命名函数或集合。与大写 alpha 或 beta 不同，大写 upsilon 在 Computer Modern 字体中有独特的弯臂形状，并不只是拉丁字母 Y，因此有自己的命令。与其他大写希腊字母一样，它是直立体；\\varUpsilon 给出斜体形式。在幻灯片上注意它的可读性，它可能看起来像 Y。",
  },
  "phi": {
    name: "希腊字母 φ（phi）",
    meaning: "小写希腊字母 phi，用于表示角度、黄金比例、欧拉函数和特征映射。",
    usage:
      "\\phi 输出带竖笔的闭合形式，而 \\varphi 输出开口的环形形式；许多作者用 \\varphi 表示函数，用 \\phi 表示角度。数论把欧拉函数写作 \\varphi(n) 或 \\phi(n)，黄金比例为 \\phi = (1 + \\sqrt{5})/2，球坐标用 \\phi 表示一个角。机器学习在核方法中用 \\phi(x) 表示特征映射，物理学用它表示标量势和波函数。不要把 \\phi 与 \\emptyset 或北欧字母 Ø 混淆。",
  },
  "phi-upper": {
    name: "大写希腊字母 Φ（Phi）",
    meaning: "大写希腊字母 Phi，用于表示标准正态分布函数、磁通量和势。",
    usage:
      "统计学把标准正态累积分布函数写作 \\Phi(z)，用小写 \\phi(z) 表示密度函数。物理学用 \\Phi_B 表示磁通量，用 \\Phi 表示电势，工程中则泛指各种通量。在线性代数和最优化中，\\Phi 可以表示由基函数构成的设计矩阵。LaTeX 中的大写希腊字母为直立体；\\varPhi 给出斜体变体。不要把 \\Phi 与 \\emptyset 或带圈斜线 \\oslash 混淆。其反函数 \\Phi^{-1} 给出正态分位数，如 z_{0.975} \\approx 1.96。",
  },
  "chi": {
    name: "希腊字母 χ（chi）",
    meaning: "小写希腊字母 chi，用于表示卡方分布、特征函数和磁化率。",
    usage:
      "最常见的用法是卡方统计量 \\chi^2 = \\sum (O_i - E_i)^2/E_i，以及表示自由度为 k 的卡方分布 \\chi^2_k。集合论和概率论把集合的示性函数（特征函数）写作 \\chi_A。拓扑学用 \\chi(M) 表示欧拉示性数，图论用 \\chi(G) 表示色数，物理学用 \\chi 表示磁化率。注意 \\chi 会下伸到基线以下，请检查下标位置。不要把它与拉丁字母 x 或乘号 \\times 混淆。",
  },
  "psi": {
    name: "希腊字母 ψ（psi）",
    meaning: "小写希腊字母 psi，是量子波函数和双伽马函数的惯用记号。",
    usage:
      "量子力学把波函数写作 \\psi(x, t)，在狄拉克记号中把态写作 |\\psi\\rangle，薛定谔方程为 i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi。特殊函数中用 \\psi(x) = \\Gamma'(x)/\\Gamma(x) 表示双伽马函数。流体力学用 \\psi 表示流函数，小波分析用 \\psi 表示母小波。在左矢-右矢记号中，\\langle \\psi | \\phi \\rangle 使用 \\langle 和 \\rangle，而不是小于号和大于号。大写 \\Psi 是另一个命令。归一化条件为 \\int |\\psi|^2\\,dx = 1。",
  },
  "psi-upper": {
    name: "大写希腊字母 Ψ（Psi）",
    meaning: "大写希腊字母 Psi，常表示量子力学中的多体波函数或量子态。",
    usage:
      "物理学用 \\Psi 表示总波函数或多粒子波函数，而用 \\psi 表示单粒子态，如含时薛定谔方程中的 \\Psi(\\mathbf{r}, t)。粒子物理中 J/\\psi 介子用小写书写，但部分粲偶素态用 \\Psi 表示。在数学中，当其他字母已被占用时，它可以命名函数或函子。大写希腊字母为直立体；\\varPsi 给出斜体形式。心理学也把这个符号作为标志，但这种用法很少出现在公式中。",
  },
  "omega": {
    name: "希腊字母 ω（omega）",
    meaning: "小写希腊字母 omega，用于表示角频率、样本点和第一个无穷序数。",
    usage:
      "物理学把角频率写作 \\omega = 2\\pi f，因此谐振子为 x(t) = A\\cos(\\omega t + \\varphi)。概率论用 \\omega \\in \\Omega 表示样本空间中的一个结果，集合论用 \\omega 表示第一个无穷序数。复杂度理论用小 omega 记号 \\omega(n) 表示严格下界，微分几何用 \\omega 表示微分形式。数论中 \\omega(n) 表示不同素因子的个数。在手写笔记中注意不要把 \\omega 与拉丁字母 w 混淆。",
  },
  "omega-upper": {
    name: "大写希腊字母 Ω（Omega）",
    meaning: "大写希腊字母 Omega，用于表示欧姆单位、样本空间和渐近下界。",
    usage:
      "作为单位，\\Omega 是欧姆，因此电阻写作 10\\,\\mathrm{k}\\Omega；数值与单位之间用细空格隔开。概率论在三元组 (\\Omega, \\mathcal{F}, P) 中用 \\Omega 表示样本空间。算法分析用 \\Omega(n \\log n) 表示下界，与 O 和 \\Theta 并列使用。分析学常把开区域写作 \\Omega \\subset \\mathbb{R}^n。大写希腊字母为直立体，\\varOmega 给出斜体变体。不要把 \\Omega 与姆欧（mho）混淆，后者是倒置的 omega，曾用作西门子的单位符号。",
  },
};

export default text;
