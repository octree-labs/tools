import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "虚数单位",
    meaning: "虚数单位，即平方等于 −1 的数，是复数运算的基础。",
    usage:
      "数学家和物理学家用 i 表示 -1 的平方根，由此有 z = a + bi 以及薛定谔方程中的 i\\hbar。在数学模式中，普通的 i 是斜体，与下标变量相同，因此在同样对 i 求和的论文中，使用直立的 \\mathrm{i} 更为稳妥，这也是 ISO 排版标准所推荐的；定义一个宏如 \\newcommand{\\iu}{\\mathrm{i}} 可保持写法统一。不要用 \\imath 表示虚数单位：它是无点的 i，用于添加重音符号，如表示单位向量的 \\hat{\\imath}。博弈论学者也用 i 表示参与者编号。",
  },
  "imaginary-unit-engineering": {
    name: "虚数单位（工程记法）",
    meaning: "虚数单位的工程记号，之所以选用它，是因为 i 已留作表示电流。",
    usage:
      "电气工程师把阻抗写作 Z = R + jX，把相量写作 V e^{j\\omega t}，Python 出于同样的历史原因用 j 表示复数字面量。信号处理教材也沿用这一记法，把傅里叶变换写成 e^{-j\\omega t}。与 i 一样，直立的 \\mathrm{j} 可以把常数与下标变量 j 区分开。无点的 j，即 \\jmath，用于 \\hat{\\jmath} 这样的重音符号，而不是表示虚数单位。注意许多教材把 j 写在数字前面，写作 j5 而不是 5j。",
  },
  "complex-number": {
    name: "复数",
    meaning: "复数的直角坐标（笛卡儿）形式，实部为 a，虚部为 b。",
    usage:
      "每个复数都可写成 a + bi，其中 a 和 b 为实数；这种形式最适合做加法，也便于读出 \\Re z = a 和 \\Im z = b。乘法和乘方通常用极坐标形式 r e^{i\\theta} 更方便。把单位写在后面的 bi 是通行约定，不过工程师常写成 a + jb。如果文档把 i 排成直立体，这里也应保持直立：a + b\\mathrm{i}。b 为负数时，请写成 a - bi 而不是 a + (-b)i；对具体数字，把 i 放在数字之后，如 3 + 4i。",
  },
  "real-part": {
    name: "实部",
    meaning: "复数 z 的实部：对 z = a + bi，它给出实数 a。",
    usage:
      "内置的 \\Re 输出哥特体（Fraktur）大写 R，即传统的实部符号，但许多现代作者觉得它难以辨认，改写为 \\operatorname{Re}(z)，它以直立的“Re”显示并带有运算符间距。无论哪种写法，\\Re 都只是一个符号而非运算符，因此 TeX 不会在参数前加空格；请使用括号或细空格。一个有用的恒等式是 \\Re z = (z + \\bar{z})/2。在信号处理中，常用带花括号的 \\Re\\{\\cdot\\} 从相量中提取物理信号。",
  },
  "imaginary-part": {
    name: "虚部",
    meaning: "z 的虚部，即 z = a + bi 中的实系数 b（而不是 bi 这一项本身）。",
    usage:
      "学生常犯的错误是认为 \\Im(3 + 4i) = 4i；实际上它是实数 4。该符号是哥特体的 I，与 \\Re 一样可能显得晦涩，因此 \\operatorname{Im}(z) 是一种流行且更易辨认的替代写法。注意在代数中 Im 也是映射的像的缩写；若两种含义同时出现，请用 \\operatorname{im} f 表示像，以免冲突。有用的事实包括 \\Im z = (z - \\bar{z})/(2i)，以及上半平面就是满足 \\Im z > 0 的点集。",
  },
  "complex-conjugate": {
    name: "共轭复数",
    meaning: "z 的共轭复数，即 z 关于实轴的对称点：a + bi 的共轭是 a − bi。",
    usage:
      "数学家写作 \\bar{z}，z\\bar{z} = |z|^2 等恒等式使它成为复数除法的核心。\\bar 是固定宽度的重音符号，只适用于单个字符；对表达式取共轭时请用 \\overline{z + w}，它会延伸覆盖整个参数，使 \\overline{z + w} = \\bar{z} + \\bar{w} 清晰易读。物理学家更常写作 z^*，把横线留作他用，如狄拉克共轭 \\bar{\\psi}。在 Wirtinger 微积分中，\\partial / \\partial \\bar{z} 把 \\bar{z} 视为独立变量。",
  },
  "complex-conjugate-star": {
    name: "共轭复数（星号记法）",
    meaning: "用星号表示共轭复数的记法，是物理学和电气工程中的标准写法。",
    usage:
      "量子力学把概率写作 \\psi^* \\psi，内积中也对分量取共轭，因此 z^* 在那里是惯例。在上标中直接输入星号即可；z^{\\ast} 得到的字形相同。对矩阵而言，数学中 A^* 常表示共轭转置，而物理学家用 A^\\dagger 表示共轭转置，把 A^* 留给单纯的逐元素共轭，因此请说明所用约定。星号还可以表示最优解（x^*）或对偶空间（V^*），若附近出现这些含义，请避免使用这一记法。",
  },
  modulus: {
    name: "复数的模",
    meaning: "z 的模（绝对值），即它到原点的距离：对 z = a + bi，为 √(a² + b²)。",
    usage:
      "简单情况下直接用竖线即可，但对 TeX 而言竖线有歧义，它无法区分左右竖线，这会导致 |-z| 这类表达式的间距出错。请使用 \\lvert z \\rvert 或定义一个宏以获得正确间距，内容较高时用 \\left| \\frac{z}{w} \\right|。这里切勿使用 \\mid：它是间距较宽的关系符。主要性质有 |zw| = |z||w| 以及三角不等式 |z + w| \\leq |z| + |w|。在向量语境中，双竖线 \\| \\| 则表示范数。",
  },
  argument: {
    name: "辐角",
    meaning: "z 的辐角：从正实轴到 z 的角度，在相差 2π 整数倍的意义下确定。",
    usage:
      "\\arg 是内置的运算符名，因此以直立体输出并设置正确的间距；不加反斜杠输入 arg 会得到斜体字母。由于该角度是多值的，\\arg z 常被视为集合 \\{\\theta + 2\\pi k\\}，而 \\arg(zw) = \\arg z + \\arg w 只在模 2\\pi 意义下成立。单值的主值则用大写字母写作 \\operatorname{Arg} z。不要把 \\arg 与 argmax 这类运算符混淆，后者返回取得最优值的输入，需要单独声明。",
  },
  "principal-argument": {
    name: "辐角主值",
    meaning: "辐角的主值，即 z 与正实轴所成的、位于 (−π, π] 内的唯一角度。",
    usage:
      "大写字母把单值的 Arg 与多值的 \\arg 区分开。割线沿负实轴，因此 \\text{Arg}(-1) = \\pi，而割线正下方的值则趋于 -\\pi。有些书改用 [0, 2\\pi)，因此请说明所指的区间。LaTeX 没有 \\Arg 命令；\\text{Arg} 可以用，但在定理环境中会变成斜体。\\operatorname{Arg} 或 \\DeclareMathOperator{\\Arg}{Arg} 更为稳健，并能在参数前给出合适的间距。例如 \\text{Arg}(i) = \\pi/2，而 \\arg i 是整个集合 \\pi/2 + 2\\pi k。",
  },
  "polar-form": {
    name: "复数的极坐标形式",
    meaning: "复数的极坐标（指数）形式：模 r 乘以辐角为 θ 的单位复数。",
    usage:
      "在极坐标形式下做乘法只需模相乘、辐角相加，因此 (r e^{i\\theta})^n = r^n e^{in\\theta}，这正是棣莫弗定理的紧凑表述。单位根 e^{2\\pi i k/n} 和相量 A e^{i\\omega t} 都直接来自这一记法。请把整个指数放进花括号；e^i\\theta 只会把 e 升到 i 次幂。指数较拥挤时，\\exp(i\\theta) 比很小的上标更易阅读。有些格式规范把常数排成直立的 \\mathrm{e}，以区别于变量。",
  },
  "euler-s-formula": {
    name: "欧拉公式",
    meaning: "欧拉公式，把复指数与余弦和正弦联系起来；它把 e^{iθ} 放在单位圆上。",
    usage:
      "令 \\theta = \\pi 即得欧拉恒等式 e^{i\\pi} + 1 = 0，从公式中解出余弦则得 \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2。注意 \\cos 和 \\sin 是运算符命令：它们以直立体输出，并在 \\theta 前加细空格，而直接输入 cos 会得到三个斜体字母。像 \\theta 这样的单个符号参数不需要括号，但复合参数要加括号，如 \\sin(2\\theta)。在工程语境中，同一恒等式用 j 代替 i 书写。",
  },
  "complex-exponential": {
    name: "复指数函数",
    meaning: "在复数 z = x + iy 处取值的指数函数，等于 eˣ(cos y + i sin y)。",
    usage:
      "复指数函数是整函数，从不为零，且以 2\\pi i 为周期，这就是其反函数（对数）为多值函数的原因。指数较短时 e^{z} 就可以；对于 e^{-(x - \\mu)^2/2\\sigma^2} 这样的式子，上标会变得很小，改用 \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) 更易阅读。\\exp 是预定义的运算符。多记号的指数一定要加花括号。有些出版商要求把常数排成直立的 \\mathrm{e}，以区别于变量 e。它的导数就是它本身，这使它成为线性常微分方程解的基本构件。",
  },
  "complex-logarithm": {
    name: "复对数",
    meaning: "z 的复对数，是指数函数的多值反函数：ln|z| + i arg z。",
    usage:
      "由于指数函数每隔 2\\pi i 重复一次，\\log z 有无穷多个值，彼此相差 2\\pi i k。主支常用大写字母写作 \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z，它在负实轴上的割线以外处处解析。\\log 和 \\ln 都是内置运算符；分析学家常用 \\log 表示自然对数，而 \\ln 则明确表示以 e 为底。\\log 之后会自动加细空格，因此对单个变量，\\log z 不需要括号。",
  },
  "complex-power": {
    name: "复数幂",
    meaning: "复数 z 的 w 次幂，定义为 exp(w log z)，一般是多值的。",
    usage:
      "令人惊讶的事实 i^i = e^{-\\pi/2}（取主支）就来自这一定义。由于 \\log z 是多值的，除非 w 是整数，否则 z^w 有多个值，(z^a)^b = z^{ab} 这类法则也可能不成立。多于一个记号的指数要加花括号：写 z^{w+1}，而不是 z^w+1。对于 z^{w^v} 这样的幂塔，TeX 会逐层缩小，因此可考虑用 \\exp 记法提高可读性。依赖某个特定值时，请明确说明所取的分支，例如写成 \\exp(w \\operatorname{Log} z)。",
  },
  "unit-circle": {
    name: "单位圆",
    meaning: "复平面上单位圆的方程：到原点距离为 1 的全体复数。",
    usage:
      "单位圆上的点恰好是 e^{i\\theta}，n 次单位根也都在它上面。它常记作 \\mathbb{T} 或 S^1，作为乘法群，它就是傅里叶分析中使用的圆周群。沿它的围道积分写作 \\oint_{|z|=1}，条件放在下标中。在圆上取共轭有 \\bar{z} = 1/z，这是一个方便的化简。若竖线周围的间距在上下文中显得不对，请用 \\lvert z \\rvert；开圆盘 |z| < 1 与闭圆盘 |z| \\le 1 也按同样方式书写。",
  },
  "upper-half-plane": {
    name: "上半平面",
    meaning: "黑板粗体 H，最常表示上半平面 {z : Im z > 0}；也表示四元数。",
    usage:
      "在复分析和数论中，\\mathbb{H} 是模形式的定义域，SL_2(\\mathbb{Z}) 通过莫比乌斯变换作用于其上，它还带有双曲度量。在代数中，同一字母表示哈密顿四元数，以他的名字命名，因此若两者同时出现，请写作 \\mathcal{H} 或明确说明所指。使用标准字体时 \\mathbb 只提供大写字母；小写参数会产生乱码或报错。相关集合的排版方式相同：\\mathbb{C}、\\mathbb{R}、\\mathbb{Z}。它的边界是实轴加上一个无穷远点。",
  },
};

export default text;
