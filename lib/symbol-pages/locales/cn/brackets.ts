import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "左尖括号",
    meaning: "左尖括号，用于内积、期望值和生成子群。",
    usage:
      "左尖括号用来开启多种记号，例如内积 \\langle u, v \\rangle、左右矢 \\langle \\psi | \\phi \\rangle、子群 \\langle g \\rangle 或时间平均 \\langle x \\rangle。切勿用小于号 < 代替：它是关系符，间距较宽，形状也不对。它可以配合 \\left 和 \\right 自动调整大小，也可以用 \\big、\\Big 等手动指定尺寸。务必与 \\rangle 配对使用；如果只需显示一侧，请用 \\left. 或 \\right. 作为不可见的另一半。",
  },
  "angle-bracket-right": {
    name: "右尖括号",
    meaning: "右尖括号，用于结束内积、右矢、平均值及其他尖括号记号。",
    usage:
      "\\rangle 闭合由 \\langle 开启的内容：希尔伯特空间中的 \\langle f, g \\rangle、狄拉克右矢 |\\psi\\rangle，以及 \\langle a, b \\mid a^2 = b^3 \\rangle 这样的群表示。大于号 > 不能替代它，因为它是关系符，两侧有额外间距，角度也更平。内容较高时（如分式或求和），请使用 \\left\\langle ... \\right\\rangle，让两侧一起变大。单独使用的右矢写作 |\\psi\\rangle，不需要配对的 \\langle。",
  },
  "angle-brackets": {
    name: "尖括号对",
    meaning: "用尖括号包围表达式，表示平均值、内积或由生成元张成的结构。",
    usage:
      "这对括号在物理学中用于期望值 \\langle E \\rangle，也用于内积 \\langle x, y \\rangle，以及由元素生成的子群或理想 \\langle a \\rangle。参数较高时请改用 \\left\\langle \\frac{a}{b} \\right\\rangle。如果经常书写内积，可以定义一个宏（例如借助成对定界符工具），使尺寸保持一致。在狄拉克记号中，许多人更喜欢专门的左右矢宏集，因为 \\langle \\phi | \\psi \\rangle 中竖线两侧的间距可能不均匀；\\mid 会加上关系符间距，而 | 不加任何间距。",
  },
  "ceiling-left": {
    name: "左上取整括号",
    meaning: "左上取整括号，即向上取整函数记号的开头一半。",
    usage:
      "\\lceil 开启上取整记号 \\lceil x \\rceil，表示不小于 x 的最小整数。它是定界符，因此可以用 \\left\\lceil ... \\right\\rceil 包围 \\frac{n}{2} 这样较高的内容，也可以用 \\big 系列命令调整尺寸。上取整括号的横笔在顶部，而下取整括号 \\lfloor 的横笔在底部，校对时很容易混淆。有些作者还把 \\lceil 和 \\rceil 用作哥德尔编码中的角引号，此时也可使用 \\ulcorner。",
  },
  "ceiling-right": {
    name: "右上取整括号",
    meaning: "右上取整括号，用于闭合向上取整的函数记号。",
    usage:
      "将 \\rceil 与 \\lceil 配对，可写出 \\lceil \\log_2 n \\rceil（许多算法中所需的比特数），或 \\lceil n/k \\rceil（覆盖 n 个元素所需的大小为 k 的块数）。与圆括号不同，上取整括号没有对应的 ASCII 字符，因此只能用命令得到这个符号。当匹配的左括号用 \\left 设置时，请使用 \\right\\rceil。如果经常书写上取整，像 \\ceil{x} 这样的成对定界符宏可以使整篇文档的尺寸保持一致。",
  },
  "ceiling": {
    name: "上取整函数",
    meaning: "把 x 向上取整为大于或等于它的最小整数，即上取整函数。",
    usage:
      "上取整出现在算法分析中（\\lceil \\log_2 n \\rceil 次比较、归并排序中的 \\lceil n/2 \\rceil）、数论中，以及鸽巢原理之类的计数问题中，其中某个盒子至少装有 \\lceil n/k \\rceil 个物品。对于负数输入，请记住 \\lceil -2.5 \\rceil = -2。当参数是分式或较高的表达式时，请使用 \\left\\lceil ... \\right\\rceil，让括号随之变大。不要用方括号 [x] 代替：较早的文献用 [x] 表示下取整，因此会产生歧义。",
  },
  "floor-left": {
    name: "左下取整括号",
    meaning: "左下取整括号，即向下取整函数记号的开头一半。",
    usage:
      "\\lfloor 用于开启 \\lfloor x \\rfloor 和 \\lfloor n/2 \\rfloor 这样的记号。下取整括号的横笔在底部，而 \\lceil 的横笔在顶部。作为定界符，它可以用 \\left\\lfloor 或 \\bigl\\lfloor 调整尺寸。在数论中，同样的括号出现在勒让德公式等式子中，该公式给出整除 n! 的素数的幂次。如果字体或渲染器显示的是普通方括号，请检查输入的是否是 \\lfloor 而不是 [，后者是另一个字形。",
  },
  "floor-right": {
    name: "右下取整括号",
    meaning: "右下取整括号，用于闭合向下取整的函数记号。",
    usage:
      "每个 \\lfloor 都要用 \\rfloor 闭合，例如 \\lfloor x \\rfloor，或许多编程语言对正操作数实现的整数除法 \\lfloor a/b \\rfloor。当左括号用 \\left\\lfloor 设置时，右括号必须在同一数学组中写成 \\right\\rfloor，否则 LaTeX 会报告缺少 \\right。这对括号还可以通过 \\lfloor x + 1/2 \\rfloor 实现四舍五入到最近的整数。在长文档中，像 \\floor{x} 这样的成对定界符宏可以保持记号一致。",
  },
  "floor": {
    name: "下取整函数",
    meaning: "把 x 向下取整为小于或等于它的最大整数，即下取整函数。",
    usage:
      "下取整出现在整数除法、小数部分 \\{x\\} = x - \\lfloor x \\rfloor、二分查找的中点 \\lfloor (lo + hi)/2 \\rfloor，以及勒让德公式等数论求和中。对于负数，它朝远离零的方向取整：\\lfloor -2.5 \\rfloor = -3，这与截断不同。较早的文献用 [x] 表示下取整（高斯括号），但如今更推荐使用这种括号记号，因为它没有歧义。对分式请使用 \\left\\lfloor ... \\right\\rfloor，让括号与内容高度相匹配。",
  },
  "double-vertical-bar": {
    name: "双竖线",
    meaning: "双竖线，是范数的定界符，在某些语境中也是平行符号。",
    usage:
      "\\| 输出两条竖线，主要成对用于范数 \\|x\\|。作为普通符号，它的间距是普通原子间距，因此要表达“平行于”这一关系时，请使用 \\parallel，它会添加关系符间距。对于范数，推荐使用 \\lVert 和 \\rVert，因为它们告诉 LaTeX 哪一侧是开、哪一侧是闭，从而在运算符和负号旁边得到正确的间距。它可以用 \\left\\| ... \\right\\| 或 \\big\\| 调整尺寸。在正文模式中 \\| 不会输出双竖线；请使用 \\textbardbl 或切换到数学模式。",
  },
  "norm": {
    name: "范数",
    meaning: "用双竖线包围向量或函数，表示它的范数，即长度或大小。",
    usage:
      "范数在分析和线性代数中随处可见：欧几里得范数 \\|x\\|_2、上确界范数 \\|f\\|_\\infty、弗罗贝尼乌斯范数 \\|A\\|_F，以及三角不等式 \\|x + y\\| \\le \\|x\\| + \\|y\\|。闭合竖线后的下标指明是哪种范数。用 \\lVert x \\rVert 代替 \\| x \\| 可以在 \\|{-x}\\| 这样的表达式中得到更好的间距，因为此时 LaTeX 知道每条竖线的作用。对于较高的内容（例如范数内的分式），请使用 \\left\\| ... \\right\\|。单竖线 |x| 专用于绝对值。",
  },
  "double-bracket-left": {
    name: "左双方括号",
    meaning: "左双（空心）方括号，用于语义括号、整数区间和艾佛森记号。",
    usage:
      "在程序设计语言语义学中，\\llbracket e \\rrbracket 表示表达式的含义，例如在指称语义中。法国传统的教材和组合数学用 \\llbracket 1, n \\rrbracket 表示整数区间 \\{1, \\dots, n\\}，有些作者也用它表示艾佛森括号。该命令不在 LaTeX 核心或 AMS 符号字体中，因此需要一个提供它的符号宏包；KaTeX 直接支持它。只有在宏包提供可伸缩版本时它才会变大，因此对较高的内容请检查你的配置。请与 \\rrbracket 配对使用。",
  },
  "double-bracket-right": {
    name: "右双方括号",
    meaning: "右双方括号，用于闭合语义括号或整数区间记号。",
    usage:
      "用 \\rrbracket 闭合 \\llbracket，可写出 \\llbracket P \\rrbracket_\\sigma（程序 P 在状态 \\sigma 下的含义）或整数范围 \\llbracket a, b \\rrbracket。不要用 ]] 或 ]\\!] 冒充它，这两者的形状和间距都与空心括号字形不同。大量使用语义括号的作者常定义 \\sem{e} 这样的宏，以便在一处统一修改括号样式，例如在缺少双方括号字体时换成 [\\![ e ]\\!]。",
  },
  "double-brackets": {
    name: "双方括号对",
    meaning: "用双方括号包围表达式，用于指称语义或整数区间。",
    usage:
      "这对括号在形式语义学中表示语义函数，例如 \\llbracket x \\rrbracket_\\rho 表示 x 在环境 \\rho 中的值；在组合数学中表示离散区间 \\llbracket m, n \\rrbracket。它还出现在艾佛森括号中，以及数值偏微分方程中表示间断处跳跃的记号 \\llbracket u \\rrbracket = u^+ - u^-。由于该字形不在默认字体中，源文件需要加载符号宏包；请查看本页的宏包说明。空心的笔画使它与嵌套的普通方括号在视觉上明显不同。",
  },
  "parentheses": {
    name: "自动伸缩圆括号",
    meaning: "能自动增高到所包围内容高度的圆括号。",
    usage:
      "\\left( 和 \\right) 会测量内容并选择匹配的尺寸，因此 \\left( \\frac{a}{b} \\right)^2 会得到较高的圆括号，而普通的 (x) 保持较小。每个 \\left 都需要在同一组中有一个 \\right，align 中的换行也不能把它们分开。过度使用会让简单表达式显得笨重，而且 \\left...\\right 作为内部原子会多加一点间距，可能使 f\\left(x\\right) 显得松散；对于函数参数，\\bigl( ... \\bigr) 或普通圆括号通常更好。它们会按最高的元素调整尺寸，包括求和号的上下限。",
  },
  "square-brackets": {
    name: "自动伸缩方括号",
    meaning: "能随内容缩放的方括号，用于分组、对易子或闭区间。",
    usage:
      "方括号可用作圆括号外层的下一级分组，也用于闭区间 [a, b]、对易子 [A, B] = AB - BA、期望 \\mathbb{E}[X] 以及矩阵。使用 \\left[ ... \\right] 时，方括号会围绕分式、积分或矩阵伸长，例如求原函数值时的 \\left[ \\frac{x^2}{2} \\right]_0^1。在 bmatrix 环境中方括号已经提供，不必自己写 \\left[。对于长表达式中的嵌套括号，\\Bigl[ ... \\Bigr] 这样的手动尺寸可以提供更精细的控制。",
  },
  "curly-braces": {
    name: "自动伸缩花括号",
    meaning: "能伸长到内容高度的花括号，用于集合构造记号和分组定义。",
    usage:
      "花括号必须转义为 \\{ 和 \\}，因为裸花括号是 LaTeX 的分组字符，不会输出任何内容。使用 \\left\\{ ... \\right\\} 时，它们会围绕较高的内容变大，例如 \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}。若集合构造记号中的竖线也要随之变大，请在中间使用 \\middle|。对于分段定义，cases 环境已经画出左花括号，不需要手动写 \\left\\{ ... \\right.。在正文模式中，请使用 \\textbraceleft，或在数学模式中直接用 \\{。",
  },
  "vertical-bar": {
    name: "自动伸缩竖线",
    meaning: "能随内容调整尺寸的竖线，用于绝对值和行列式。",
    usage:
      "当绝对值内包含分式或求和时，例如 \\left| \\frac{a}{b} \\right|，或表示较高矩阵的行列式时（不过 vmatrix 更简单），请使用 \\left| ... \\right|。普通的 | 对 LaTeX 来说有歧义：它无法区分开竖线和闭竖线，这可能破坏开头负号周围的间距。若要得到一致的结果，请用 \\lvert 和 \\rvert 定义一个宏，或使用 \\left\\lvert ... \\right\\rvert。对于集合构造记号中的分隔符和条件概率，请改用 \\mid 或 \\middle|。",
  },
  "big-parentheses": {
    name: "大号圆括号",
    meaning: "固定在第二级尺寸的圆括号，比 \\big 大，但比 \\bigg 小。",
    usage:
      "TeX 提供四种手动尺寸：\\big、\\Big、\\bigg 和 \\Bigg。\\Big( 适合包围单个分式或上下限较小的求和；与 \\left 不同，它不会扫描内容，因此可以在多行环境中跨越换行，结果也可预测。为了得到正确的间距，请用 \\Bigl( 开启、\\Bigr) 闭合，因为单独的 \\Big 会生成普通原子。在函数参数中，手动尺寸往往比 \\left...\\right 更合适，因为 \\left 会增加额外间距。尺寸是固定的，因此在下标中不会缩小。",
  },
  "bigg-parentheses": {
    name: "特大号圆括号",
    meaning: "TeX 四种手动定界符尺寸中最大的一种，用于嵌套分式等非常高的内容。",
    usage:
      "\\Bigg( 生成的圆括号约为正常尺寸的两倍半，适合包围叠放的分式、带上下限的大积分或分式之和。由于尺寸固定，它在 align 的各行之间表现一致，而 \\left 和 \\right 不能跨行拆开。请使用 \\Biggl 和 \\Biggr 来获得正确的开、闭间距。若内容更高，\\left( ... \\right) 可以利用可伸缩部件长得比 \\Bigg 更大。从小到大的顺序是 \\big、\\Big、\\bigg、\\Bigg。",
  },
  "left-delimiter-with-invisible-right": {
    name: "左定界符配不可见右定界符",
    meaning: "只显示一个可调尺寸的左圆括号；\\right. 是不可见的闭合定界符，用来满足配对要求。",
    usage:
      "每个 \\left 都必须由一个 \\right 匹配，句点形式 \\right. 让你在不输出任何内容的情况下闭合该组。这在括号表达式延续到 align 的下一行时很有用（在一行用 \\left( 开启、用 \\right. 闭合，在下一行用 \\left. ... \\right) 重新开始），也可用于单侧花括号。两半的尺寸是独立计算的，因此请加入较高内容的 \\vphantom 使它们等高。对于分段函数，cases 环境比 \\left\\{ ... \\right. 更简洁。",
  },
  "right-delimiter-with-invisible-left": {
    name: "右定界符配不可见左定界符",
    meaning: "只输出一个可调尺寸的右圆括号；\\left. 充当不可见的开启定界符。",
    usage:
      "\\left. 是不可见的开启符，让 \\right) 能够按内容调整尺寸。一个常见用法是求值竖线 \\left. \\frac{df}{dx} \\right|_{x=0}，其中只应显示右侧的竖线并让它伸长。它也可以闭合在多行公式前一行中开启的括号。由于两半是分别确定尺寸的，请插入 \\vphantom{...}，放入另一行中最高的部分来匹配高度。句点本身不会输出，但会增加一小段空定界符间距。",
  },
  "half-open-interval-brackets": {
    name: "半开区间括号",
    meaning: "将左方括号与右圆括号配对，是半开区间的记号。",
    usage:
      "\\left 和 \\right 的形状不必相同，因此 \\left[ ... \\right) 可以写出半开区间 [a, b)，在 a 处闭、在 b 处开；它常见于概率论（累积分布函数在 [x, \\infty) 上右连续）和测度论。不匹配的配对也能处理 (a, b]，写作 \\left( ... \\right]。对于简单的区间，直接写 [0, 1) 而不用 \\left/\\right 就足够了，也更简洁。有些欧洲教材改用反向括号，例如 [a, b[，可以直接输入。",
  },
};

export default text;
