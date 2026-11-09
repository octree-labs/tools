import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "加号",
    meaning: "表示两个量相加；作为二元运算符的加号，也可作一元符号表示正数。",
    usage:
      "在数学模式中输入 + 得到二元运算符，TeX 会自动在两侧各加一个中等间距，如 a + b。当加号位于表达式开头，或紧跟在另一个运算符或关系符之后时，如 -(+3) 或 x = +1，TeX 将其视为一元符号并去掉间距。在 multline 或 split 公式中如果在加号前断行，请在续行开头写 {}+ 以恢复二元运算符的间距。上标中的加号，如离子 Na^+ 或集合 \\mathbb{R}^+，不需要加花括号。除非表示直和或异或，否则不要使用 \\oplus，它是另一个符号。",
  },
  "subtraction": {
    name: "减号",
    meaning: "表示一个量减去另一个量；在数学模式中，连字符键会变成真正的减号，而不是连字符。",
    usage:
      "在数学模式中，连字符会被转换为正式的减号，它比正文中的连字符更长，并在 a - b 中获得二元运算符间距。在数学模式之外只能得到短连字符，所以正文中的负数仍应写成 $-5$，而不是直接输入。当减号为一元符号时，如 -x 或 e^{-t}，TeX 会自动去掉两侧间距。不要把它与表示集合差 A \\setminus B 的 \\setminus 混淆，也不要与表示范围的半角破折号（en dash）混淆。上标中的减号，如 x^{-1} 或 Cl^-，只有在后面跟多个字符时才需要花括号。",
  },
  "multiplication": {
    name: "乘号",
    meaning: "输出叉号 ×，用于乘法、向量叉积和笛卡儿积。",
    usage:
      "在算术中，\\times 用于书写 3 \\times 4 或科学记数法，如 6.02 \\times 10^{23}。在线性代数和物理中，它表示向量的叉积 \\mathbf{a} \\times \\mathbf{b}，也用于表示矩阵维数，如 m \\times n 矩阵。集合论用它表示笛卡儿积 A \\times B。相比之下，\\cdot 是点积和变量间乘法的常用写法，而星号 * 通常表示卷积。大型运算符 \\bigtimes 不在标准 LaTeX 中，因此对于带下标的笛卡儿积，许多作者改用 \\prod。",
  },
  "division": {
    name: "除号",
    meaning: "输出除号 ÷，即小学所学的、横线上下各有一点的除法符号。",
    usage:
      "除号 ÷ 出现在算术练习、计算器风格的表达式和一些表格中，如 12 \\div 4 = 3。数学研究中几乎不使用它，而是用 \\frac{12}{4} 写成分数、写成行内斜线 12/4，或用冒号表示比。有些国家完全不用这个符号，ISO 80000-2 也建议不要使用。由于 \\div 是二元运算符，TeX 会像 + 和 - 一样为它加间距。不要把它与 \\mid 或斜线 / 混淆，在数论和群论中它们分别表示整除和商，例如 G/N。",
  },
  "fraction": {
    name: "分数",
    meaning: "排版一个上下结构的分数，分子 a 在上、分母 b 在下，中间以横线分隔。",
    usage:
      "\\frac 接受两个参数：分子和分母，因此 \\frac{a}{b} 只是任意比值的占位写法，例如 \\frac{dy}{dx} 或 \\frac{n(n+1)}{2}。在行内公式中它会缩小到正文尺寸，可能显得拥挤；\\dfrac 强制使用行间公式尺寸，\\tfrac 强制使用正文尺寸。对于简单的行内比值，斜线 a/b 往往比上下叠放的分数更易读。二项式系数应使用 \\binom{n}{k}，而不是去掉横线的 \\frac。连分数用 \\cfrac 更美观，它让每一层都保持完整尺寸。当分数位于括号内时，请使用 \\left( 和 \\right)，让括号随分数高度伸长。",
  },
  "square-root": {
    name: "平方根",
    meaning: "在参数上方画出根号，得到 x 的算术平方根。",
    usage:
      "\\sqrt 会自动伸展根号以覆盖花括号中的全部内容，因此 \\sqrt{x^2 + y^2} 的顶部横线更长、根号更高。它是书写欧几里得范数、求根公式以及标准差 \\sqrt{\\operatorname{Var}(X)} 的标准方式。高度不同的参数上的根号可能显得参差不齐；在其中加入 \\vphantom{y} 或 \\mathstrut 可以让相邻根号对齐。对于立方根等带根指数的情形，请使用可选参数 \\sqrt[3]{x}。在行内文本中，对于高分数开方，x^{1/2} 有时比根号更清楚。",
  },
  "n-th-root": {
    name: "n 次方根",
    meaning: "表示 x 的 n 次方根，根指数 n 位于根号的弯折处。",
    usage:
      "根指数写在被开方数之前的方括号中，因此 \\sqrt[3]{8} = 2 是立方根，\\sqrt[n]{x} 表示 x^{1/n}。它出现在级数的根值判别法 \\limsup \\sqrt[n]{|a_n|} 中，也出现在几何平均数 \\sqrt[n]{x_1 x_2 \\cdots x_n} 中。TeX 有时会把根指数放得不太合适，尤其是较高的根指数；可用 \\leftroot{} 和 \\uproot{} 微调，如 \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}。根指数应尽量简短：对于复杂的指数，写成幂 x^{1/(k+1)} 比根号更易读。",
  },
  "summation": {
    name: "求和符号",
    meaning: "用大写希腊字母 Σ 形式的大型运算符，对指标 i 从 1 到 n 的一系列项求和。",
    usage:
      "\\sum 是大型运算符：在行间公式中，上下限 i=1 和 n 位于 Σ 的下方和上方；在行内公式中，它们移到侧面成为下标和上标。加 \\limits 可在行内强制上下限叠放，加 \\nolimits 可在行间公式中把上下限放在侧面，不过行内叠放的上下限可能打乱行距。Σ 下方的多行条件请用 \\substack{0 \\le i \\le m \\\\ 0 < j < n}。不要用希腊字母 \\Sigma 表示求和，它是更小的普通符号，没有运算符间距。典型用法包括级数、期望以及 \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}。",
  },
  "product": {
    name: "连乘符号",
    meaning: "用大写希腊字母 Π 形式的大型运算符，把 i 从 1 到 n 的一系列因子相乘。",
    usage:
      "\\prod 的行为与 \\sum 相同：在行间公式中上下限叠放在上方和下方，在行内文本中位于侧面。它可以把阶乘写成 n! = \\prod_{i=1}^{n} i，把似然函数写成 L(\\theta) = \\prod_{i} p(x_i \\mid \\theta)，也用于素数上的欧拉乘积。不要用希腊字母 \\Pi 代替，它是固定大小的普通符号。倒置的 \\coprod 在范畴论中表示余积。当连乘是之后要取对数的似然函数时，通常会明确写出转换为求和的过程，因为 \\log 会把 \\prod 变成 \\sum。",
  },
  "integral": {
    name: "积分号",
    meaning: "书写下限为 a、上限为 b 的定积分符号。",
    usage:
      "与 \\sum 不同，\\int 的上下限即使在行间公式中也默认位于侧面；如果你的排版风格要求叠放，请加 \\limits，如 \\int\\limits_a^b。在微分前加一个细空格 \\,，如 \\int_a^b f(x)\\,dx，有些作者还会通过 \\mathrm{d}x 使用直立的 d。多重积分有专门的命令 \\iint 和 \\iiint，它们的积分号间距比重复书写 \\int 更好。环路积分使用 \\oint。积分后的求值竖线可写成 \\Big|_a^b 或 \\left. F(x) \\right|_a^b。",
  },
  "limit": {
    name: "极限",
    meaning: "书写极限运算符，并把 x 趋于无穷放在“lim”下方。",
    usage:
      "\\lim 是预定义的运算符名，因此以直立罗马体输出，并且在行间公式中把下标 x \\to \\infty 放在正下方。在行内公式中，下标会移到侧面以保持行距整齐。其中的箭头是 \\to，它是 \\rightarrow 的简写。单侧极限写作 x \\to 0^+ 或 x \\downarrow 0。相关运算符 \\limsup 和 \\liminf 的用法相同。如果需要自定义一个类似极限、下标叠放的运算符名，请用 \\DeclareMathOperator*（星号使上下限生效）定义，而不要写 \\text{lim}。",
  },
  "infinity": {
    name: "无穷大",
    meaning: "输出双纽线 ∞，表示无界的量或无限增长的极限。",
    usage:
      "\\infty 出现在 x \\to \\infty 这样的极限、反常积分 \\int_0^\\infty e^{-x}\\,dx 以及级数上限 \\sum_{n=1}^{\\infty} 中。它也用于表示上确界范数 \\|f\\|_\\infty、空间 L^\\infty 以及光滑函数类 C^\\infty。书写 -\\infty 和 +\\infty 时让符号紧贴；TeX 会按一元符号正确处理间距。请记住 \\infty 不是实数，因此包含它的区间在该端应为开区间，如 [0, \\infty)。对于扩展实数，常用记号是 \\overline{\\mathbb{R}}。",
  },
  "approximately-equal": {
    name: "约等号",
    meaning: "表示两个值近似相等，例如数值估计或四舍五入后的常数。",
    usage:
      "\\approx 用于数值近似，如 \\pi \\approx 3.14159，以及一阶展开，如 x 很小时 \\sin x \\approx x。它是关系符，因此 TeX 会像 = 一样为它加较宽的间距。几个外形相似的符号含义不同：\\simeq 常表示渐近相等或同构，\\sim 表示渐近或“服从……分布”，\\cong 表示全等或同构，\\approxeq 则是较少见的变体。在金融和工程文献中，\\approx 通常标记四舍五入的结果；请说明精度，例如保留三位小数，让读者知道估计有多粗略。",
  },
  "not-equal": {
    name: "不等号",
    meaning: "表示两个量不相等；是等号的否定。",
    usage:
      "\\neq 和它的简写 \\ne 输出同一个带斜线的等号，两者都可以使用。它出现在 x \\neq 0 这样的条件、i \\neq j 这样的互异声明中，也在偏重编程的论文中表示不等判断。写成 \\not= 也可以，但斜线位置可能与专用字形略有不同。在计算机科学写作中，不要在数学模式中输入 !=，它会输出一个感叹号后跟一个等号。表示“不等价”或“不全等”时，请使用 \\not\\equiv 或 \\ncong，而不是 \\neq。",
  },
  "less-than-or-equal": {
    name: "小于等于号",
    meaning: "表示左边小于或等于右边。",
    usage:
      "\\leq 有更短的别名 \\le，两者输出相同的单横线字形。在数学模式中输入 <= 会得到两个独立的符号，所以务必使用命令。三角不等式 \\|x+y\\| \\leq \\|x\\|+\\|y\\| 和 0 \\leq p \\leq 1 这样的界是它的日常用途。在一些欧洲和俄罗斯传统中更偏好倾斜变体 \\leqslant，\\leqq 则带双横线。在序理论和格论中，\\leq 表示偏序，而 \\preceq 用于更一般的预序。",
  },
  "greater-than-or-equal": {
    name: "大于等于号",
    meaning: "表示左边大于或等于右边。",
    usage:
      "\\geq 和它的别名 \\ge 可以互换。在数学模式中输入 >= 会输出两个独立字符，所以请使用命令。常见场景有 n \\geq 1 这样的下界、算术–几何平均不等式（AM-GM 不等式），以及优化中的约束，如 x_i \\geq 0。有些期刊偏好倾斜形式 \\geqslant，\\geqq 则带双横线。在序理论中，反向关系 \\succeq 推广了 \\geq。尽可能让一串不等式朝同一方向，因为 a \\leq b \\leq c 比混用 \\leq 和 \\geq 更易读。",
  },
  "implies": {
    name: "蕴含符号",
    meaning: "输出用于逻辑蕴含的长双线箭头，表示左边的命题蕴含右边的命题。",
    usage:
      "\\implies 输出两侧带额外宽间距的 \\Longrightarrow，适合完整命题之间的蕴含，如 x > 2 \\implies x^2 > 4。对于逻辑表达式内部公式之间的蕴含，许多逻辑学家更喜欢不带宽间距的较短的 \\Rightarrow 或 \\to。它的逆向符号是 \\impliedby。在证明中，避免在一页里连续堆叠多个 \\implies；用带“因此”的完整句子往往更易读。在命题逻辑记号中，p \\to q 比 p \\implies q 更常见。",
  },
  "if-and-only-if": {
    name: "当且仅当符号",
    meaning: "输出用于逻辑等价的长双向双线箭头，读作“当且仅当”。",
    usage:
      "\\iff 输出两侧带额外宽间距的 \\Longleftrightarrow。它连接两个相互蕴含的命题，例如定理 n \\text{ is even} \\iff n^2 \\text{ is even}。逻辑学教材在公式内部通常更喜欢用 \\leftrightarrow 或 \\Leftrightarrow 表示双条件，而把 \\iff 留给文字叙述中的命题。由于有这些留白，\\iff 在紧凑的下标或集合构造式条件中显得过于松散。不要把它与 \\equiv 混淆，后者表示恒等或模 n 同余。",
  },
  "for-all": {
    name: "全称量词",
    meaning: "输出全称量词 ∀，读作“对所有”或“对任意”。",
    usage:
      "\\forall 用于开始全称量化的命题，如 ε-δ 定义中的 \\forall \\varepsilon > 0\\ \\exists \\delta > 0。TeX 把它当作普通符号，因此约束变量后不会自动加空格；请根据你的习惯加 \\, 或 \\ ，或使用冒号、句点等分隔符。在以文字为主的证明中，许多写作规范更推荐用文字写“对所有”，而不是 \\forall。在类型化 λ 演算和类型论中，它还用于引入多态类型，例如 \\forall \\alpha.\\, \\alpha \\to \\alpha。",
  },
  "exists": {
    name: "存在量词",
    meaning: "输出存在量词 ∃，读作“存在”或“对某个”。",
    usage:
      "\\exists 断言至少有一个元素满足某性质，如 \\exists x \\in \\mathbb{R} : x^2 = 2。唯一性写作 \\exists!（存在唯一），\\nexists 给出表示“不存在”的否定符号。与 \\forall 一样，它是普通符号，因此为了可读性，请在约束变量后加细空格或冒号。量词顺序很重要：\\forall x\\, \\exists y 与 \\exists y\\, \\forall x 含义不同，所以请保持预期的顺序。在形式逻辑写作中，用括号标明辖域，如 \\exists x\\,(P(x))，可以避免歧义。",
  },
  "element-of": {
    name: "属于符号",
    meaning: "表示隶属关系：左边的元素属于右边的集合。",
    usage:
      "\\in 是基本的集合隶属关系，如 x \\in \\mathbb{R} 或 n \\in \\mathbb{N}，并获得关系符间距。它的镜像 \\ni 读作“包含元素”，\\notin 是它的否定。不要把它与 \\epsilon 或 \\varepsilon 混淆，这两个希腊字母外形相似，但间距和含义都不同。在求和与集合构造式中，它用于约束指标，如 \\sum_{x \\in S} f(x) 或 \\{x \\in X : f(x) > 0\\}。两个集合之间的子集关系请用 \\subseteq，而不是 \\in。",
  },
  "not-element-of": {
    name: "不属于符号",
    meaning: "表示非隶属关系：左边的元素不属于给定集合。",
    usage:
      "\\notin 是 \\in 的专用带斜线版本，按关系符排版，如 \\sqrt{2} \\notin \\mathbb{Q}。写成 \\not\\in 效果相近，但 \\notin 的斜线位置更好，是标准选择。与它自然搭配的是 \\in 和 \\ni；否定的子集关系则用 \\not\\subset 或 \\nsubseteq。典型语境包括反证法以及对补集的描述，如 x \\in A^c \\iff x \\notin A。在量词中，\\forall x \\notin S 是可以接受的简写，但写明论域会更清楚。",
  },
  "subset": {
    name: "子集符号",
    meaning: "表示一个集合包含于另一个集合；常读作真子集。",
    usage:
      "约定各不相同：有些作者用 \\subset 表示任意子集，另一些作者只用它表示真子集，允许相等时用 \\subseteq。为避免歧义，许多论文用 \\subseteq 表示“子集或相等”，用 \\subsetneq 表示“真子集”，并在文中说明一次约定。反向关系是 \\supset。典型命题包括 \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} 以及线性代数中的子空间包含关系。否定形式 \\not\\subset 可以使用，而 \\nsubseteq 给出更整洁的“不是子集或相等”字形。无论采用哪种解读，都不要在同一文档中来回切换。",
  },
  "union": {
    name: "并集符号",
    meaning: "构成集合的并集：至少属于其中一个集合的所有元素。",
    usage:
      "\\cup 是二元运算符，如 A \\cup B，两侧有中等间距。对于带指标的集族的并，请使用大型运算符 \\bigcup，它在行间模式中叠放上下限：\\bigcup_{i=1}^{\\infty} A_i。不交并常写作 \\sqcup 或 \\dot\\cup。在概率论中，A \\cup B 对应事件“A 或 B”，由此有 P(A \\cup B) = P(A) + P(B) - P(A \\cap B)。不要用字母 U 或逻辑符号 \\lor 代替集合的并。",
  },
  "intersection": {
    name: "交集符号",
    meaning: "构成集合的交集：所有集合共有的元素。",
    usage:
      "\\cap 是写在集合之间的二元运算符，如 A \\cap B，而 \\bigcap 是用于集族的大型运算符版本，如 \\bigcap_{n} U_n。在概率论中它表示联合事件，因此 P(A \\cap B) = P(A)P(B) 定义了独立性。它在逻辑中的对应符号是 \\land（且），格论中的交 \\wedge 看起来相似，但是不同的字形。德摩根律把它与并集联系起来：(A \\cup B)^c = A^c \\cap B^c。若 A \\cap B = \\emptyset，则两个集合不相交。",
  },
  "empty-set": {
    name: "空集",
    meaning: "表示空集，即唯一不含任何元素的集合。",
    usage:
      "\\emptyset 输出默认的空集字形，即带斜线的圆。许多数学家更喜欢更圆的 \\varnothing，它与带斜线的零有明显区别，在现代文献中很常见。选定一种并始终如一地使用。典型用法有不相交 A \\cap B = \\emptyset 以及集合构造式的结果。不要把它与斯堪的纳维亚字母 Ø 或 \\phi、\\varphi 混淆。用 \\{\\} 表示空集也可以，但注意 \\{\\emptyset\\} 是含一个元素的集合。",
  },
  "partial-derivative": {
    name: "偏导数符号",
    meaning: "输出弯曲的 ∂，用于偏导数，也在拓扑中表示集合的边界。",
    usage:
      "\\partial 出现在 \\frac{\\partial f}{\\partial x} 这样的偏导数和混合偏导数 \\frac{\\partial^2 f}{\\partial x\\,\\partial y} 中。在拓扑和几何中，\\partial A 表示集合或流形的边界，例如斯托克斯定理 \\int_{\\partial M} \\omega = \\int_M d\\omega。在偏微分方程论文中，带下标的简写形式 \\partial_x f 和 \\partial_t u 很常见。不要把它与 \\delta（变分）或 d（全导数）混用。在分母的 \\partial 因子之间加细空格可以改善间距。",
  },
  "nabla": {
    name: "Nabla 算子",
    meaning: "输出 nabla 符号 ∇，即表示梯度、散度和旋度的向量微分算子。",
    usage:
      "\\nabla f 是梯度，\\nabla \\cdot \\mathbf{F} 是散度，\\nabla \\times \\mathbf{F} 是旋度，\\nabla^2 或 \\Delta 是拉普拉斯算子。在机器学习中，\\nabla_\\theta L(\\theta) 表示损失函数对参数的梯度，如梯度下降 \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L。微分几何学家用 \\nabla 表示联络或协变导数，如 \\nabla_X Y。它是普通符号，因此不会插入额外间距。有些作者用 \\boldsymbol{\\nabla} 将其加粗，以强调它是向量算子。",
  },
  "plus-minus": {
    name: "正负号",
    meaning: "输出正负号 ±，表示两种取值，或某个值上下的容差。",
    usage:
      "\\pm 出现在求根公式 x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} 以及测量不确定度中，如 9.81 \\pm 0.02。它的对应符号 \\mp（负正号）用于符号必须同步反转的情形，如 \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b。它是二元运算符，因此 TeX 会像 + 一样为它加间距。在实验结果表格中，以 \\pm 号为基准对齐数字可以提高可读性。金融文献用它表示范围，例如收益率 5\\% \\pm 2\\%。",
  },
  "dot-product": {
    name: "点乘号",
    meaning: "输出居中的点，用于点积和因子之间的乘法。",
    usage:
      "\\cdot 是位于数学轴上的二元运算符，如 \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i，以及 2 \\cdot 3 这样的乘积。它也用于标记占位参数，如 \\|\\cdot\\| 或 f(\\cdot)。不要使用位于基线上的句点，也不要使用更大的 \\bullet。相乘因子之间的省略号请用垂直居中的 \\cdots，列表中则用 \\ldots。叉积和科学记数法请用 \\times，把 \\cdot 留给数量积和内积。",
  },
};

export default text;
