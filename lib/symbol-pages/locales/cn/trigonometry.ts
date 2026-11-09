import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "正弦",
    meaning: "正弦函数，作为命名运算符以直立体排版，并带有正确的间距。",
    usage:
      "务必输入 \\sin 而不是 sin：直接输入的字母会被排成三个相乘的斜体变量。该运算符会在参数前加一个细空格，因此单个符号的参数如 \\sin x 无需括号，而较长的参数可用 \\sin(2x) 或 \\sin\\left(\\frac{\\pi}{2}\\right) 分组。幂次紧跟在命令之后：\\sin^2 x + \\cos^2 x = 1。注意 \\sin^{-1} x 表示反函数，而不是倒数 \\csc x。常见公式包括二倍角公式 \\sin 2\\theta = 2\\sin\\theta\\cos\\theta 和泰勒级数 x - x^3/3! + \\cdots。",
  },
  "cosine": {
    name: "余弦",
    meaning: "余弦函数，与 \\sin 一样作为命名数学运算符以直立体排版。",
    usage:
      "\\cos 出现在余弦定理 c^2 = a^2 + b^2 - 2ab\\cos C、欧拉公式 e^{i\\theta} = \\cos\\theta + i\\sin\\theta 以及用夹角表示的点积中，机器学习中的余弦相似度正源于此。不加反斜杠输入 cos 会得到斜体字母和错误的间距。余弦的平方应写成 \\cos^2\\theta；\\cos\\theta^2 表示 theta 平方的余弦，是另一个量。该命令本身不接受参数，因此复合参数需用圆括号分组，如 \\cos(\\omega t + \\phi)。",
  },
  "tangent": {
    name: "正切",
    meaning: "正切函数，即正弦与余弦之比，以直立体排版。",
    usage:
      "正切定义为 \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}，在 \\cos\\theta = 0 处，即 \\pi/2 的奇数倍处无定义。几何中的斜率就是倾斜角的正切，而恒等式 1 + \\tan^2\\theta = \\sec^2\\theta 由勾股恒等式两边同除以 \\cos^2\\theta 得到。一些欧洲文献写作 tg，它没有内置命令；如需使用，请写 \\operatorname{tg}。两角和公式 \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} 是常见的行间公式。",
  },
  "cotangent": {
    name: "余切",
    meaning: "余切，即正切的倒数，写成直立体运算符。",
    usage:
      "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}，在 \\pi 的整数倍处有极点。它出现在恒等式 1 + \\cot^2\\theta = \\csc^2\\theta 中，也出现在 \\pi\\cot\\pi z 的经典部分分式展开中，该展开可用于求 \\sum 1/n^2。俄罗斯和部分欧洲文献写作 ctg，此时请用 \\operatorname{ctg}。其反函数通常写作 arccot，没有预定义命令。请记住 \\cot x 是正切的倒数，而不是反函数 \\tan^{-1} x。它的导数是 -\\csc^2 x。",
  },
  "secant": {
    name: "正割",
    meaning: "正割，即余弦的倒数，作为直立体命名运算符。",
    usage:
      "\\sec\\theta = 1/\\cos\\theta，其平方是正切的导数：\\frac{d}{dx}\\tan x = \\sec^2 x。积分 \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C 是微积分课程和墨卡托投影公式中的经典结果。不加反斜杠输入 sec 会留下斜体字母，并丢失参数前的空格。几何中的割线是另一种对象，用文字表述，而不是用这个命令。与其他三角函数命令一样，幂次直接紧跟命令，如 \\sec^2 x，参数放在其后。",
  },
  "cosecant": {
    name: "余割",
    meaning: "余割，即正弦的倒数，排版为直立体运算符。",
    usage:
      "\\csc\\theta = 1/\\sin\\theta，在 \\pi 的整数倍处无定义。其导数为 \\frac{d}{dx}\\csc x = -\\csc x\\cot x，而恒等式 1 + \\cot^2 x = \\csc^2 x 补齐了勾股恒等式三件套。一些书籍，尤其是较早的英国书籍，将其缩写为 cosec；这种写法需要 \\operatorname{cosec}。常见错误是想表示 \\csc x 时写成 \\sin^{-1} x：上标 -1 表示反函数反正弦，而不是倒数。幂次紧跟在命令之后，如 \\csc^2 x，参数放在其后。",
  },
  "arcsine": {
    name: "反正弦",
    meaning: "反正弦，即限制在 [-pi/2, pi/2] 上的正弦的反函数，作为直立体运算符。",
    usage:
      "对 [-1, 1] 中的 x，\\arcsin x 返回 [-\\pi/2, \\pi/2] 中正弦值为 x 的角。它是 \\sin^{-1} x 的无歧义替代写法，后者常被一些读者误读为 1/\\sin x。其导数 \\frac{1}{\\sqrt{1-x^2}} 给出标准积分 \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C，这是三角换元的基本内容。软件库中称之为 asin，但编程名称不应出现在排版的数学公式中；请始终使用带反斜杠的命令，使其以直立体排版并带有正确间距。复合参数请用圆括号分组。",
  },
  "arccosine": {
    name: "反余弦",
    meaning: "反余弦，返回 [0, pi] 中余弦等于给定值的角。",
    usage:
      "两个向量的夹角 \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert} 大概是它最常见的用法。它的值域是 [0, \\pi]，导数为 -\\frac{1}{\\sqrt{1-x^2}}，因此对 [-1, 1] 中的每个 x 都有 \\arcsin x + \\arccos x = \\frac{\\pi}{2}。\\cos^{-1} x 表示同一个函数，但 \\arccos 可避免与倒数混淆。为清晰起见，长参数可用 \\left( \\right) 括起来，因为该运算符本身不带括号。在计算几何中，通常先把参数截断到 [-1, 1]，以避免舍入误差。",
  },
  "arctangent": {
    name: "反正切",
    meaning: "反正切，给出 (-pi/2, pi/2) 中正切值为 x 的角。",
    usage:
      "\\arctan x 出现在 \\int \\frac{dx}{1+x^2} = \\arctan x + C 以及梅钦公式 \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239} 中。若要求点 (x, y) 在全部四个象限中的极角，程序员会用 atan2；在论文中可写 \\operatorname{atan2}(y, x) 或复数辐角 \\arg(x + iy)。\\tan^{-1} x 是公认的同义写法，在工程领域更常见。级数 \\arctan x = x - x^3/3 + x^5/5 - \\cdots 在 |x| \\le 1 时收敛，在 x = 1 处给出莱布尼茨级数。",
  },
  "arccotangent": {
    name: "反余切",
    meaning: "反余切，由于 LaTeX 没有内置的 \\arccot，这里通过 \\text 输入。",
    usage:
      "标准 LaTeX 定义了 \\arcsin、\\arccos 和 \\arctan，但没有 \\arccot，因此本条目用文本构造这个标签。更规范的做法是使用 \\operatorname{arccot} x，它会添加运算符间距；或在导言区写 \\DeclareMathOperator{\\arccot}{arccot}，使 \\arccot x 像内置的同类命令一样工作。其值域的约定不一：有的文献用 (0, \\pi)，有的用去掉 0 的 (-\\pi/2, \\pi/2]，因此请说明你采用哪一种。无论哪种约定，其导数都是 -\\frac{1}{1+x^2}。有些作者改写为 \\cot^{-1}。选定一种写法后请全文统一。",
  },
  "arcsecant": {
    name: "反正割",
    meaning: "反正割，由于 LaTeX 没有预定义 \\arcsec，这里用 \\text 书写。",
    usage:
      "它在 |x| \\ge 1 时有定义，\\text{arcsec}\\, x = \\arccos(1/x)。在通常的值域 [0, \\pi]（不含 \\pi/2）下，其导数为 \\frac{1}{|x|\\sqrt{x^2-1}}，学生作业中常常漏掉其中的绝对值。由于 \\text 不添加运算符间距，请在参数前插入 \\,，或改用 \\operatorname{arcsec}。在导言区声明一次 \\DeclareMathOperator{\\arcsec}{arcsec}，就可以像 \\arccos x 一样写 \\arcsec x。积分表用它来表示 \\int \\frac{dx}{x\\sqrt{x^2-1}}。现代论文很少使用它，往往将其改写为倒数的反余弦。",
  },
  "arccosecant": {
    name: "反余割",
    meaning: "反余割，由于不存在内置的 \\arccsc，这里用 \\text 拼出。",
    usage:
      "当 |x| \\ge 1 时，\\text{arccsc}\\, x = \\arcsin(1/x)，取值于 [-\\pi/2, \\pi/2] 且不含 0。其导数为 -\\frac{1}{|x|\\sqrt{x^2-1}}。它是六个反三角函数中最少用的一个，因此大多数作者在最终答案中会将其化为反正弦形式。要获得正确间距，请使用 \\operatorname{arccsc} 或在导言区将其声明为数学运算符，而不要依赖 \\text，后者在定理环境中还会变成斜体。有些书写作 \\csc^{-1} x，同样存在被误读为倒数的风险。",
  },
  "inverse-sine": {
    name: "正弦反函数",
    meaning: "用上标 -1 书写的正弦反函数，等同于反正弦。",
    usage:
      "计算器和许多工程教材把反正弦记作 \\sin^{-1}，于是 \\sin^{-1}(0.5) = \\frac{\\pi}{6}。这种记法与 \\sin^2 x = (\\sin x)^2 相冲突：类推之下，\\sin^{-1} x 可能被误读为 1/\\sin x，而那其实是 \\csc x。因此纯数学写作往往更偏好 \\arcsin。-1 外的花括号是必需的，LaTeX 会把上标紧接在运算符名称之后，所以 \\sin^{-1} x 显示时指数位于参数之前。无论选择哪种记法，都请在全文中保持一致。",
  },
  "inverse-cosine": {
    name: "余弦反函数",
    meaning: "用上标记法表示的余弦反函数，与 arccos 是同一个函数。",
    usage:
      "物理和工程中常用 \\cos^{-1} 表示角度，例如由两个向量的归一化点积求出的夹角。它不是倒数 1/\\cos x，那是 \\sec x；这里的上标 -1 表示反函数。其值域为 [0, \\pi]，因此 \\cos^{-1}(-1) = \\pi。纯数学论文通常选用 \\arccos 来避免歧义。如果你的文本中既用 \\cos^2 x 表示平方，又用 \\cos^{-1} x 表示反函数，请说明一次所用约定，免得读者猜测。",
  },
  "inverse-tangent": {
    name: "正切反函数",
    meaning: "写作 tan 的 -1 次方的正切反函数，等同于 arctan。",
    usage:
      "工程和物理中用 \\tan^{-1} 表示相位角，例如 RL 电路中的 \\phi = \\tan^{-1}(\\omega L / R)，也用它把斜率换算为角度。与其他反函数写法一样，它不是倒数 \\cot x。其值域为 (-\\pi/2, \\pi/2)，因此无法区分相对的象限；需要完整角度的论文应说明使用的是双参数版本。许多写作规范在数学中偏好 \\arctan，但在应用类文章中也接受 \\tan^{-1}，只要含义前后一致。",
  },
  "hyperbolic-sine": {
    name: "双曲正弦",
    meaning: "双曲正弦 (e^x - e^{-x})/2，排版为直立体运算符。",
    usage:
      "\\sinh x = \\frac{e^x - e^{-x}}{2} 与 \\cosh 一起参数化单位双曲线，这正是 \\cosh^2 x - \\sinh^2 x = 1 的由来。它出现在狭义相对论的快度中、悬链线问题中以及 y'' = y 的解中。它的导数是 \\cosh x，没有符号变化，这与圆函数正弦不同。其反函数常写作 \\operatorname{arsinh} 或 \\sinh^{-1}；LaTeX 没有为它提供内置命令。不加反斜杠输入 sinh 会得到四个斜体字母和糟糕的间距。",
  },
  "hyperbolic-cosine": {
    name: "双曲余弦",
    meaning: "双曲余弦 (e^x + e^{-x})/2，作为直立体命名运算符。",
    usage:
      "悬挂的链条呈悬链线形状 y = a\\cosh(x/a)，这是教科书中的典型应用。该函数是偶函数，取值始终不小于 1，并满足 \\cosh^2 x - \\sinh^2 x = 1 和 \\cosh(ix) = \\cos x。在狭义相对论中，洛伦兹因子等于快度的双曲余弦。与其他运算符一样，\\cosh 会在单个符号的参数前加细空格，所以 \\cosh x 不加括号也没问题。其反函数没有预定义命令；请用 \\operatorname{arcosh} 或 \\cosh^{-1}。",
  },
  "hyperbolic-tangent": {
    name: "双曲正切",
    meaning: "双曲正切，即 sinh 与 cosh 之比，取值在 -1 与 1 之间。",
    usage:
      "神经网络把 \\tanh 用作激活函数，并常通过 \\tanh x = 2\\sigma(2x) - 1 与逻辑斯谛 S 型函数比较。其导数为 1 - \\tanh^2 x，使反向传播公式保持简洁。在物理中，它出现在平均场磁化强度 m = \\tanh(\\beta J z m) 和相对论速度叠加中。其值域 (-1, 1) 便于压缩无界的量。其反函数 \\operatorname{artanh} 需要手写或自行声明，因为 LaTeX 没有为它提供内置命令。",
  },
  "inverse-hyperbolic-sine": {
    name: "反双曲正弦",
    meaning: "反双曲正弦，由于 LaTeX 没有为它提供内置命令，这里用 \\text 标注。",
    usage:
      "它等于 \\ln\\left(x + \\sqrt{x^2 + 1}\\right)，是 \\frac{1}{\\sqrt{x^2+1}} 的原函数。ISO 记法称之为 arsinh，意为“面积正弦”，因为其自变量是面积而不是弧长；许多作者仍写作 arcsinh 或 \\sinh^{-1}。无论选择哪个名称，\\operatorname{arsinh} 或在导言区使用 \\DeclareMathOperator 都比 \\text 的间距更好，后者还会继承定理环境的斜体。数据科学家把它用作方差稳定变换，因为与对数不同，它能处理零和负值。",
  },
  "degree-symbol": {
    name: "度数符号",
    meaning: "上标小圆圈，用于表示角度和温度的度数。",
    usage:
      "数学模式中常用的度数符号是 ^{\\circ}，如 90^{\\circ} 或 \\angle ABC = 45^{\\circ}；它把表示复合的小圆圈 \\circ 提升到上标大小。表示温度时请写 25^{\\circ}\\mathrm{C}，其中 C 为直立体。不要使用上标字母 o 或数字 0，它们形状不对；也不要把 \\circ 放在基线上，那表示函数复合。在文本模式中，\\textdegree 无需进入数学模式即可给出相匹配的符号。含有大量测量值的文档可以使用专门处理单位的宏，以统一控制间距和字体。",
  },
  "radians": {
    name: "弧度",
    meaning: "直立体的单位标签“rad”，表示以弧度为单位的角。",
    usage:
      "弧度是无量纲的，因此大多数数学文献省略单位，直接写 \\theta = \\pi/2；物理和工程则常常显式写出，如 \\omega = 2\\pi\\,\\text{rad/s}。在数字和单位之间加细空格 \\,，并让单位保持直立体；\\text 可以做到这一点，但 \\mathrm{rad} 更稳妥，因为 \\text 在斜体环境中会沿用周围的字体。换算公式为 \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180。注意 rad 在代数中还是理想的根（radical）的缩写，通常写作 \\operatorname{rad}(I)。",
  },
};

export default text;
