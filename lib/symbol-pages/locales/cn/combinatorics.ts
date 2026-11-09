import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "组合数（nCr）",
    meaning: "从 n 个元素中不计顺序地选出 k 个的方法数，读作“n 选 k”。",
    usage:
      "其值为 C(n, k) = \\frac{n!}{k!(n-k)!}，与二项式系数 \\binom{n}{k} 相同，后者是大多数数学文献中的首选记法。\\binom 会根据上下文调整大小；\\dbinom 强制使用陈列样式大小，\\tbinom 强制使用行内样式大小。在 LaTeX 中避免使用 plain TeX 的 {n \\choose k} 语法，amsmath 会对此发出警告。其他记法还有 nCr、{}^nC_k 和 C^k_n，最后一种在法语文献中常见，上下标位置是对调的，因此请确认所用约定。帕斯卡法则 C(n, k) = C(n-1, k-1) + C(n-1, k) 可生成杨辉三角（帕斯卡三角）。",
  },
  "permutation-npr": {
    name: "排列数（nPr）",
    meaning: "从 n 个不同元素中选出 k 个并排成一列的有序排列数，读作“n 取 k 的排列”。",
    usage:
      "排列计数的是有序选取：P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)，因此 P(5, 2) = 20。它等于下降阶乘 (n)_k 或 n^{\\underline{k}}，与组合数的关系为 P(n, k) = k!\\,C(n, k)。你还会见到 nPr、{}^nP_k，以及法语和中文教材中的 A^k_n（取自 arrangement）等写法。由于 P(\\cdot) 也表示概率，在概率章节中读者可能误读 P(n, k)；改用 (n)_k 或 n^{\\underline{k}} 可避免这一问题。乘积的因子之间请使用 \\cdots。",
  },
  multinomial: {
    name: "多项式系数",
    meaning: "多项式系数：把 n 个元素分成大小分别为 k_1 至 k_m 的若干组的方法数，各组大小之和为 n。",
    usage:
      "其值为 n! / (k_1!\\,k_2!\\cdots k_m!)，其中 k_1 + \\cdots + k_m = n，它给出多项式定理中的系数：(x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}。它计数含重复字母的单词的不同排列，例如 MISSISSIPPI 的排列数为 11!/(4!\\,4!\\,2!\\,1!)。这一构造复用 \\binom，在下方位置填入逗号分隔的列表；二项式情形 \\binom{n}{k} 是 \\binom{n}{k, n-k} 的特例。逗号之间请用 \\ldots，而不是 \\cdots。",
  },
  "falling-factorial": {
    name: "下降阶乘",
    meaning: "组合学记法中的下降阶乘：n(n-1)...(n-k+1)，即 k 个递减因子的乘积。",
    usage:
      "(n)_k 计数从 k 元集到 n 元集的单射个数，对整数而言等于 n!/(n-k)!。注意：这种 Pochhammer 式记法有歧义，因为在特殊函数中 (a)_n 表示上升阶乘。高德纳的记法用 n^{\\underline{k}} 表示下降阶乘、n^{\\overline{k}} 表示上升阶乘，消除了歧义，并用于《具体数学》（Concrete Mathematics）；在指数中用 \\underline 和 \\overline 输入。下降阶乘可通过斯特林数与普通幂互相转换：x^n = \\sum_k S(n,k)(x)_k。请在论文中明确定义所用记法。",
  },
  "rising-factorial": {
    name: "上升阶乘",
    meaning: "以带括号的上标表示的上升阶乘：n(n+1)...(n+k-1)。",
    usage:
      "这种记法在组合学和概率论中很常见，表示上升阶乘 n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n)。它有歧义：在微积分中 f^{(k)} 表示 k 阶导数，还有些作者用 x^{(k)} 表示下降阶乘。高德纳的 n^{\\overline{k}} 或特殊函数中的 Pochhammer 符号 (n)_k 都是替代写法，不过后者与组合学中的下降阶乘冲突。括号必须放在上标的花括号之内，即 ^{(k)}。上升阶乘计数把 k 个球放入 n 根有序管子中的有序放置方式数。",
  },
  "stirling-first-kind": {
    name: "第一类斯特林数",
    meaning: "无符号第一类斯特林数：n 个元素恰好含 k 个轮换的排列数，以方括号记法表示。",
    usage:
      "\\genfrac 接受六个参数：左定界符、右定界符、分数线粗细、样式、分子、分母。把粗细设为 0pt 即可去掉分数线，得到《具体数学》中的上下堆叠方括号记法。这些数满足递推关系 {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1}，对 k 求和等于 n!。与其反复写六个参数，不如定义一个宏，如 \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}。第四个参数留空可让大小随上下文变化；填 0 为陈列样式，填 1 为行内样式。",
  },
  "stirling-second-kind": {
    name: "第二类斯特林数",
    meaning: "第二类斯特林数：把 n 元集划分为 k 个非空块的方法数，以花括号记法表示。",
    usage:
      "这里 \\genfrac 以转义的花括号 \\{ 和 \\} 作定界符，并配合 0pt 的分数线，生成由高德纳推广的花括号记法。这些数满足 S(n+1, k) = k\\,S(n, k) + S(n, k-1)，对 k 求和得到贝尔数 B_n，并可把幂转换为下降阶乘：x^n = \\sum_k {n \\brace k}(x)_k。由于花括号必须转义，漏写反斜杠是常见的编译错误。可将其封装为宏，如 \\stirlingII{n}{k}。另一种记法 S(n, k) 输入更简单，在计算机科学文献中很常见。",
  },
  "bell-number": {
    name: "贝尔数",
    meaning: "贝尔数 B_n：把 n 元集划分为若干非空块的方法总数。",
    usage:
      "贝尔数开头为 1, 1, 2, 5, 15, 52, 203，等于第二类斯特林数之和 B_n = \\sum_k S(n, k)。它们满足 B_{n+1} = \\sum_k \\binom{n}{k} B_k 和多宾斯基公式 B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}。需要注意一个记法冲突：B_n 也表示伯努利数，后者出现在欧拉-麦克劳林公式和 zeta 函数值中，因此做分析的作者可能需要给其中之一改名。下标是表达式时必须加花括号，如 B_{n+1}。贝尔数是均值为 1 的泊松分布的各阶矩。",
  },
  fibonacci: {
    name: "斐波那契数",
    meaning: "斐波那契数 F_n，由 F_0 = 0、F_1 = 1 和 F_n = F_{n-1} + F_{n-2} 定义。",
    usage:
      "斐波那契数开头为 0, 1, 1, 2, 3, 5, 8, 13，其闭式为比内公式 F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}，其中 \\varphi = (1+\\sqrt5)/2 是黄金比例。它们计数用正方形和多米诺骨牌铺满 1 \\times n 棋盘的方式（共 F_{n+1} 种），并出现在欧几里得算法和斐波那契堆的分析中。有些教材从 F_1 = F_2 = 1 开始编号，因此请说明初始值。黄金比例请像大多数作者那样用 \\varphi；\\phi 是竖直笔画的变体。F_{n-1} 需要加花括号。",
  },
  partition: {
    name: "整数分拆函数",
    meaning: "分拆函数 p(n)：把 n 写成若干正整数之和（不计顺序）的方法数。",
    usage:
      "例如 p(4) = 5，因为 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1。欧拉的生成函数为 \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}，哈代与拉马努金给出了渐近式 p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}。拉马努金同余式包括 p(5k+4) \\equiv 0 \\pmod 5。小写 p 与概率密度记法以及素数记号冲突，因此在混合语境中请先定义。受限版本写作 p_k(n) 或 p(n, k)，表示分成至多 k 个部分的分拆数。",
  },
  derangement: {
    name: "错排数",
    meaning: "错排数 D_n：n 个元素的排列中没有任何元素留在原位的排列数。",
    usage:
      "D_n 计数没有不动点的排列，开头为 1, 0, 1, 2, 9, 44, 265。由容斥原理得 D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}，因此 D_n 是最接近 n!/e 的整数，随机排列为错排的概率趋于 1/e。递推关系包括 D_n = (n-1)(D_{n-1} + D_{n-2})。经典的故事是寄存帽子问题。同一个数也写作 !n，即子阶乘；在正文中 D_n 更易阅读。注意在代数中 D_n 也表示二面体群，两者同时出现时请加以说明。",
  },
  "double-factorial": {
    name: "双阶乘",
    meaning: "双阶乘：从 n 往下到 1 或 2、与 n 奇偶性相同的所有整数之积。",
    usage:
      "n 为奇数时，n!! = n(n-2)\\cdots 3 \\cdot 1，因此 7!! = 105；n 为偶数时，乘到 2 为止，因此 8!! = 384。它不是 (n!)!，这是常见的误读，因此最好给出简短定义。相关恒等式有 (2n)!! = 2^n n! 和 (2n-1)!! = \\frac{(2n)!}{2^n n!}，后者计数 2n 个点上的完美匹配数，并出现在高斯分布的矩中：对标准正态分布有 \\mathbb{E}[X^{2n}] = (2n-1)!!。在 TeX 中，! 属于闭符号类，因此 n!! 不需要特殊间距。按照约定，0!! = (-1)!! = 1。",
  },
  subfactorial: {
    name: "子阶乘",
    meaning: "n 的子阶乘，用前置感叹号表示 n 个对象的错排数。",
    usage:
      "!n 等于 D_n，即没有不动点的排列数：!4 = 9，且对 n \\geq 1 有 !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor。前置感叹号虽然简洁，但容易误读，尤其是跟在变量之后时，m!n 看起来像 m 的阶乘乘以 n。改写为 D_n 或加上明确的括号可以避免这一问题。在 TeX 中感叹号属于闭符号类，因此在 = 这样的二元关系符之后排版时不会有额外间距，这正符合需要。有些作者使用倒感叹号，即 n\\text{¡}，但这种记法很少见。",
  },
  pochhammer: {
    name: "Pochhammer 符号",
    meaning: "Pochhammer 符号：在特殊函数中表示上升阶乘 a(a+1)...(a+n-1)。",
    usage:
      "在超几何函数和特殊函数文献中，(a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a)，且 (a)_0 = 1。它是级数 {}_pF_q 的基本构件，例如 {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}。组合学家用同样的 (x)_n 表示下降阶乘，因此这是最臭名昭著的记法冲突之一；DLMF 和大多数特殊函数参考书采用上升阶乘的含义。如果读者背景各异，高德纳的 a^{\\overline{n}} 不会产生歧义。这里的括号是普通括号，大小随参数而定。",
  },
};

export default text;
