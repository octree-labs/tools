import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "直和符号",
    meaning: "圆圈加号，用于表示空间或模的直和，在布尔代数中也表示异或（XOR）。",
    usage:
      "在线性代数中，若每个向量都能唯一地分解为 U 和 W 中的分量，就写作 V = U \\oplus W；模论中则构造 \\mathbb{Z} \\oplus \\mathbb{Z}。在计算机与密码学中，a \\oplus b 表示按位异或，例如一次一密中的 c = m \\oplus k。它是二元运算符，因此两侧有中等间距。对指标集求直和时，请使用大型运算符 \\bigoplus_{i \\in I} V_i，它像 \\sum 一样可以带上下限。不要把它与 \\pm 或普通的 + 混淆；在某些代数中，\\oplus 也表示一种变形的加法。",
  },
  "tensor-product": {
    name: "张量积符号",
    meaning: "圆圈乘号，表示向量、空间、模或矩阵的张量积（克罗内克积）。",
    usage:
      "多重线性代数写作 V \\otimes W，量子力学用 |\\psi\\rangle \\otimes |\\phi\\rangle 表示复合态，矩阵代数用 A \\otimes B 表示克罗内克积。在机器学习中，它有时也用于表示外积。它是二元运算符，两侧有中等间距。多个因子连续相乘时请使用大型运算符 \\bigotimes_{i=1}^n V_i；表示环上的张量积时，把环写成下标，如 M \\otimes_R N。不要使用 \\times，它表示笛卡儿积或叉积。",
  },
  "circle-dot": {
    name: "圆圈点",
    meaning: "圆圈中带点的符号，常用于表示向量或矩阵的逐元素乘积（阿达马积）。",
    usage:
      "深度学习论文中用 h_t = o_t \\odot \\tanh(c_t) 表示 LSTM 和注意力掩码中的逐元素乘积，数值线性代数则用 A \\odot B 表示阿达马积，同一含义也常写作 \\circ。物理示意图中用圆圈点表示垂直纸面向外的向量，但那里它是一个普通符号而非运算符。它是二元运算符，两侧有中等间距；另有大型形式 \\bigodot。请在记号说明部分注明 \\odot 表示阿达马积，因为有些作者用它表示同或（XNOR）或其他运算。",
  },
  "circle-minus": {
    name: "圆圈减号",
    meaning: "圆圈中带减号的符号，用于表示空间内的正交补以及某些差类运算。",
    usage:
      "在希尔伯特空间理论中，H \\ominus K 表示闭子空间 K 在 H 中的正交补，与 \\oplus 相对应。形态学图像处理用 A \\ominus B 表示腐蚀运算，一些集合论教材也用它表示对称差，不过那里更常用 \\triangle。它是二元运算符，因此间距会自动处理。由于其含义因领域而异，请在论文中先给出定义。它没有标准的大型运算符版本。用作对称差时，A \\ominus B 等于 (A \\setminus B) \\cup (B \\setminus A)。",
  },
  "circle-slash": {
    name: "圆圈斜线",
    meaning: "圆圈中带斜线的符号，通常表示向量或矩阵的逐元素（阿达马）除法。",
    usage:
      "矩阵计算和机器学习教材用 A \\oslash B 表示逐元素除法，并与表示逐元素乘法的 \\odot 搭配使用，例如归一化更新 x \\oslash \\sqrt{v}。LaTeX 将它视为二元运算符，因此它与 \\odot 和 \\otimes 一样两侧有中等间距。注意它不同于 \\varnothing 和 \\emptyset，后两者看起来也像带斜线的圆圈，但只是表示空集的普通符号；它也不同于斯堪的纳维亚字母 \\o。由于这个符号并非人人熟悉，请在记号说明部分加以介绍。",
  },
  "star": {
    name: "星号运算符",
    meaning: "五角星形的二元运算符，用于卷积、霍奇对偶以及自定义乘积。",
    usage:
      "信号处理中有时把互相关写作 f \\star g，微分几何用 \\star 表示霍奇星算子，代数学家则用它表示一般的二元运算或 Moyal 星积。在最优化中，最优值写作 x^\\star，作为 x^* 的另一种写法。\\star 是二元运算符，不同于 \\ast（星号）和 \\bigstar 生成的文本符号。由于它采用二元运算符间距，像霍奇星算子这样用作前缀算子时可能需要加花括号：{\\star}\\omega。",
  },
  "asterisk": {
    name: "星号",
    meaning: "作为二元运算符的星号，通常表示卷积或一般的群运算。",
    usage:
      "在数学模式中，\\ast 与直接输入 * 得到的字形相同，是两侧有中等间距的二元运算符，用于卷积 (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau，以及代数中的一般二元运算。作为上标时，A^* 或 A^\\ast 依领域不同可表示伴随、共轭转置、对偶空间或克莱尼星号。它位于数学轴的中央，不同于正文中位置较高的星号。对于带星的最优值 x^\\star，有些作者更喜欢用 \\star，以便区分不同含义。",
  },
  "composition": {
    name: "复合运算符",
    meaning: "小圆圈运算符，是函数复合的标准记号，也用于表示角度的度。",
    usage:
      "最主要的用法是 (f \\circ g)(x) = f(g(x))。作为上标时，90^\\circ 表示度数，不过文本配套字体中的专用度数符号可能更美观；A^\\circ 则常表示内部或极集。有些作者用 \\circ 表示阿达马积，此时 \\odot 是更清晰的选择。\\circ 是二元运算符，两侧有中等间距；\\bigcirc 是更大的圆圈，\\cdot 则是实心点。不要用字母 o 表示复合。",
  },
  "bullet": {
    name: "实心圆点",
    meaning: "作为二元运算符的实心圆点，用于占位符、一般乘积以及分次对象。",
    usage:
      "范畴论和同调代数用 \\bullet 作为指标占位符，如链复形 C_\\bullet 和全上同调 H^\\bullet。它也可作为占位参数，如 f(\\bullet, y)，或在代数中作为运算符号。itemize 列表中的项目符号由 \\textbullet 生成，而不是数学模式中的 \\bullet。与 \\cdot 相比，它更大、更粗；普通乘法或点积应使用 \\cdot。它作为二元运算符有中等间距，但在 f(\\bullet) 中作占位符时，由于左侧没有操作数，间距并无问题。",
  },
  "diamond": {
    name: "菱形运算符",
    meaning: "小菱形二元运算符，用于一般运算以及某些模态和代数记号。",
    usage:
      "\\diamond 可表示任意的二元运算（a \\diamond b），也出现在李理论的菱形积和自动机理论中。模态逻辑中的“可能”通常用较大的菱形 \\Diamond 或 \\lozenge 表示，而不是这个小号的二元运算符版本。由于 \\diamond 是二元运算符，把它作为前缀算子放在公式前面会导致间距异常；请改用 \\Diamond，或写成 {\\diamond}p。它不同于表示扑克牌花色的 \\diamondsuit，后者是普通符号。",
  },
  "big-circle": {
    name: "大圆圈",
    meaning: "比 \\circ 更大的空心圆圈二元运算符，用于特殊乘积和图示。",
    usage:
      "\\bigcirc 主要用作自定义运算的符号，例如某种盒状乘积，或在时序逻辑中用圆圈表示“下一时刻”算子 \\bigcirc p。它是二元运算符，而不是带上下限的大型运算符，因此在行间公式中不会像 \\bigcup 那样变大。用 \\bigcirc 叠加来给符号画圈并不方便，使用绘图宏包中的圆形节点或 \\textcircled 效果更好。表示复合时，标准写法是较小的 \\circ。对于 \\oplus 或 \\otimes 这类带圈运算符，使用专用命令比叠加更合适。",
  },
  "triangle-up": {
    name: "上三角",
    meaning: "开口朝上的空心三角形，用于几何中的三角形、对称差以及拉普拉斯算子。",
    usage:
      "几何中用 \\triangle ABC 表示三角形，集合论用 A \\triangle B 表示对称差，一些教材也用它表示拉普拉斯算子，但更常见的是 \\Delta 或 \\nabla^2。在标准 LaTeX 中，\\triangle 是普通符号而非二元运算符，因此在 A \\triangle B 中可以用 \\mathbin{\\triangle} 获得正确间距，或者改用本身就是二元运算符的 \\bigtriangleup。它比希腊大写字母 \\Delta 更大，形状也不同。",
  },
  "triangle-down": {
    name: "下三角",
    meaning: "开口朝下的小空心三角形，是普通符号而非运算符。",
    usage:
      "\\triangledown 是一个较小、采用普通间距的倒三角，在某些记号中用作装饰或标记。它不同于梯度算子 \\nabla，后者形状不同，书写 \\nabla f 时应使用 \\nabla；它也不同于更大的二元运算符 \\bigtriangledown。如果把 \\triangledown 用作运算，请用 \\mathbin 包裹以获得运算符间距。实心版本可使用 \\blacktriangledown。在正式论文中它很少出现，主要用于图注中指代绘图标记，或作为自定义运算。",
  },
  "square": {
    name: "空心方框",
    meaning: "空心正方形符号，用于达朗贝尔算子、模态逻辑中的必然以及证明结束标记。",
    usage:
      "物理学家用 \\square 表示达朗贝尔波动算子，\\square = \\partial_t^2/c^2 - \\nabla^2；模态逻辑用 \\square p 表示“必然 p”（常写作 \\Box）；空心方框还用作证明末尾的 QED 墓碑符号。在 amsthm 的证明环境中，墓碑符号会通过 \\qedsymbol 自动放置，因此很少需要手动输入。\\square 是普通符号；\\blacksquare 给出实心版本。许多逻辑教材用 \\Box 表示必然，两者字形几乎相同。把它用作作用于场的算子时，不需要额外加间距。",
  },
  "wedge": {
    name: "楔积符号",
    meaning: "楔形二元运算符，表示逻辑与、外积（楔积）以及格中的交。",
    usage:
      "微分几何用它构造微分形式，如 dx \\wedge dy，并有 \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega。逻辑学用 p \\wedge q 表示合取（\\land 是其别名），格论用 a \\wedge b 表示最大下界，概率论则用 s \\wedge t 表示 \\min(s, t)。它是两侧有中等间距的二元运算符。对指标集上的合取，请使用大型运算符 \\bigwedge。在拓扑学中，X \\wedge Y 表示带基点空间的粉碎积。不要把它与尖帽重音 \\hat 或 \\widehat 混淆。",
  },
  "vee": {
    name: "析取符号",
    meaning: "V 形二元运算符，表示逻辑或、格中的并以及空间的楔和。",
    usage:
      "逻辑学用 p \\vee q 表示相容析取，\\lor 是完全相同的别名。格论用 a \\vee b 表示最小上界，概率论用 s \\vee t 表示 \\max(s, t)，拓扑学则用 X \\vee Y 表示楔和，即在基点处把空间粘合起来。项数较多时，请使用 \\bigvee_{i} p_i。它不同于字母 v，也不同于一些教材用来表示异或的 \\veebar。该符号采用二元运算符间距。",
  },
  "amalgamation": {
    name: "融合积符号",
    meaning: "融合运算符，用于表示不交并和余积。",
    usage:
      "范畴论和拓扑学用 X \\amalg Y 表示余积或不交并，群论则用 G \\ast_H K 表示融合自由积，有些教材中也用 \\amalg。\\amalg 是二元运算符。需要带上下限的指标形式时，请使用大型运算符 \\coprod_{i \\in I} X_i，它外观相同，但在行间公式中会放大。表示不交并的其他写法有 \\sqcup 和 \\bigsqcup，它们形状更扁平，在集合论中更常见。",
  },
  "dagger": {
    name: "剑号",
    meaning: "剑号，主要用于上标，表示伴随和厄米共轭。",
    usage:
      "量子力学用 A^\\dagger 表示厄米伴随，因此 a^\\dagger 是产生算子；部分线性代数教材用 A^\\dagger 表示摩尔-彭罗斯伪逆（另一种写法是 A^+）。剑号也用于标记脚注或表格中的特殊条目。在数学模式中它是二元运算符，但作为上标时间距无关紧要。在文本模式中请使用 \\textdagger。双剑号 \\ddagger 用于第二级脚注和一些特殊记号。量子场论中，它被频繁用于产生算子和湮灭算子。",
  },
  "double-dagger": {
    name: "双剑号",
    meaning: "双剑号，用作脚注标记，偶尔也作为上标装饰。",
    usage:
      "在许多样式中，\\ddagger 是继 \\dagger 之后的第二个脚注符号，用于标记作者单位或表格注释。在数学中，它有时用来修饰符号，例如化学动力学中的过渡态 X^\\ddagger（活化能 \\Delta G^\\ddagger）。作为数学命令，它是二元运算符，但作为上标时间距无关紧要。在文本模式中请使用 \\textdaggerdbl。由于其含义没有统一标准，请在首次使用时加以说明。作为上标时无需花括号：直接写 X^\\ddagger 即可。",
  },
  "wreath-product": {
    name: "圈积符号",
    meaning: "圈积运算符，写在两个群之间表示圈积。",
    usage:
      "群论用 G \\wr H 表示圈积，例如超八面体群 \\mathbb{Z}_2 \\wr S_n，对称群的西罗子群就是多重圈积。该符号是一条细小的竖直波浪线，按二元运算符排版。它看起来有点像旋转后的波浪号，但与关系符 \\sim 不同，它采用二元运算符间距。有些作者把两个因子的顺序反过来写，因此请说明是哪个群在作用。魔方群和树的自同构群是出现圈积的典型例子。",
  },
  "set-minus": {
    name: "集合差符号",
    meaning: "集合差运算符：A \\setminus B 是属于 A 但不属于 B 的元素构成的集合。",
    usage:
      "用 \\setminus 表示集合差 A \\setminus B，以及去掉某些元素，如 \\mathbb{R} \\setminus \\{0\\}。它是带有正确间距的二元运算符，而外观相同的 \\backslash 是普通符号，用于商，如 G \\backslash X（左陪集）。较小的变体 \\smallsetminus 在某些字体下效果更好。有些作者写作 A - B，但 \\setminus 可以避免与减法混淆。结合 \\complement 可得：A \\setminus B = A \\cap B^\\complement。在表示双陪集的 G \\backslash X / H 这类商式中，请保留 \\backslash 表示商。",
  },
};

export default text;
