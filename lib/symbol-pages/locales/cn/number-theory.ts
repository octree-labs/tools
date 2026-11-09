import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "不整除符号",
    meaning: "带斜线的竖线，表示一个整数不整除另一个整数。",
    usage:
      "数论学者写 3 \\nmid 10，并在条件中使用它，例如费马小定理：若 p \\nmid a，则 a^{p-1} \\equiv 1 \\pmod p。它是 \\mid 的否定，具有相同的关系符间距；\\not\\mid 产生的斜线位置往往不佳，因此优先使用 \\nmid。避免在普通的 | 上手工加斜线。在计算机科学中，它出现在关于步长、周期和哈希表大小的条件中，如 k \\nmid n。相关的预组合否定符号还有 \\nparallel 和 \\nleq。",
  },
  "gcd": {
    name: "最大公约数",
    meaning: "a 与 b 的最大公约数，即同时整除二者的最大整数。",
    usage:
      "\\gcd 是预定义算子，因此以正体输出，并且与 \\lim 一样，在行间公式中可以在其下方放置上下限。裴蜀定理指出，存在整数 x 和 y 使得 \\gcd(a, b) = ax + by；当 \\gcd(a, b) = 1 时，称 a 与 b 互素。许多数论论文省去函数名，直接写 (a, b)，这样很简洁，但会与有序对和开区间冲突。辗转相除法（欧几里得算法）基于 \\gcd(a, b) = \\gcd(b, a \\bmod b)，其中 \\bmod 提供二元运算符间距。最小公倍数没有对应的内置命令。",
  },
  "lcm": {
    name: "最小公倍数",
    meaning: "a 与 b 的最小公倍数，即能被二者同时整除的最小正整数。",
    usage:
      "与 \\gcd 不同，LaTeX 没有内置的 \\lcm 命令，所以本条目使用 \\text。在导言区写一行 \\DeclareMathOperator{\\lcm}{lcm} 可得到间距匹配的正规算子，或在行内使用 \\operatorname{lcm}。恒等式 \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| 把二者联系起来。最小公倍数出现在异分母分数相加、多个循环合并后的周期以及直积群中元素的阶等场合。有些教材用 [a, b] 表示最小公倍数，与用 (a, b) 表示最大公约数相对应。",
  },
  "modulo": {
    name: "模运算记号",
    meaning: "同余式后面带括号的“mod n”，用于给出模数。",
    usage:
      "写 a \\equiv b \\pmod{n} 表示 n 整除 a - b。\\pmod 会加上括号并在其前面留出较大的间距，适合行间的同余式。它的几个同类命令各有用途：\\bmod 是表示取余的二元运算符，如 a \\bmod n = r；\\mod 给出不带括号的 mod 字样；\\pod 只给出括号。在行内文本中，\\pmod 插入的大间距可能显得过多，因此有些作者改用 \\bmod 或自定义宏。中国剩余定理的表述会把多个不同模数的同余式连在一起。",
  },
  "euler-phi": {
    name: "欧拉函数",
    meaning: "欧拉函数：1 到 n 中与 n 互素的整数个数，使用弯曲形的 phi。",
    usage:
      "欧拉定理 a^{\\varphi(n)} \\equiv 1 \\pmod n（其中 \\gcd(a, n) = 1）以及乘积公式 \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) 是它的典型出现场合。\\varphi 给出带圈的开口形式，\\phi 给出圆圈中穿过一条直竖线的形式；两者表示同一个函数，选择哪一个取决于排版风格。许多数论教材选用 \\varphi，以便把 \\phi 留作他用，如黄金比或角度。RSA 密钥生成用到 \\varphi(pq) = (p-1)(q-1)。",
  },
  "phi-function": {
    name: "phi 函数（直竖线形式）",
    meaning: "用直竖线形式的 phi 而非弯曲变体书写的欧拉函数。",
    usage:
      "许多教科书把欧拉函数写作 \\phi(n)，例如对素数 p 有 \\phi(p) = p - 1，以及 \\phi(p^k) = p^k - p^{k-1}。在默认的 Computer Modern 字体中，\\phi 是一个被竖线穿过的圆圈，而 \\varphi 是带圈的形式。二者表示同一个函数，因此选定一种并保持一致即可。如果文中还出现黄金比、角度或势函数，请把 \\phi 留给其中一种含义，\\varphi 留给另一种。积性 \\phi(mn) = \\phi(m)\\phi(n)（m 与 n 互素）是常见的行间公式。",
  },
  "prime": {
    name: "素数记号",
    meaning: "小写斜体 p，数论中表示素数的惯用字母。",
    usage:
      "按照惯例，p（以及表示第二个素数的 q）表示素数，因此像“对每个素数 p”这样的表述，或以 p 为下标的求和与求积，几乎无需进一步说明。欧拉乘积 \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} 是下标隐含地遍历所有素数的经典例子。在数学模式中输入 p 会得到斜体字母；在正文中也要放在数学模式里，使之与行间公式一致。为避免与概率或 p 值混淆，应尽早说明这一约定。素数幂写作 p^k，p 进数写作 \\mathbb{Q}_p。",
  },
  "prime-notation": {
    name: "第 n 个素数记号",
    meaning: "带下标的 p_n，表示第 n 个素数，因此 p_1 = 2，p_2 = 3，p_3 = 5。",
    usage:
      "素数序列就是这样编号的，见于欧几里得的证明（其中 p_1 p_2 \\cdots p_n + 1 有一个不在列表中的素因子），以及素数定理给出的渐近式 p_n \\sim n\\ln n。多字符下标需要花括号，写成 p_{n+1}，否则只有 n 会被降为下标。伯特兰公设可写为 p_{n+1} < 2p_n。素数阶乘，即前 n 个素数之积，常写作 p_n\\#。素数计数函数 \\pi(x) 本质上是 n \\mapsto p_n 的反函数。",
  },
  "legendre-symbol": {
    name: "勒让德符号",
    meaning: "勒让德符号 (a/p)：根据 a 是否为模 p 的二次剩余，取值为 1、-1 或 0。",
    usage:
      "对奇素数 p，若 a 是模 p 的非零平方数，则 \\left(\\frac{a}{p}\\right) 等于 1；若不是，则等于 -1；若 p \\mid a，则等于 0。二次互反律是著名的恒等式，它通过符号 (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}} 把 \\left(\\frac{p}{q}\\right) 与 \\left(\\frac{q}{p}\\right) 联系起来。\\left( \\right) 会根据分式自动调整括号大小。不要使用 \\binom，它省略了该符号所需的分数线；\\genfrac{(}{)}{}{}{a}{p} 是等价的替代写法。欧拉判别法把它计算为 a^{(p-1)/2} 模 p。",
  },
  "integer-part": {
    name: "整数部分",
    meaning: "x 外加方括号，是表示 x 的整数部分或下取整的旧式记号。",
    usage:
      "经典数论和许多奥数教材用 [x] 表示不超过 x 的最大整数，例如在计算 n! 中 p 的幂次的勒让德公式中，对 k \\ge 1 求 [n/p^k] 的和。现代写法更倾向于 \\lfloor x \\rfloor，它没有歧义，因为方括号还用于分组表达式、表示闭区间以及作为艾弗森括号。如果保留 [x]，请明确定义它。对于负数，下取整与截断不同：\\lfloor -2.5 \\rfloor = -3，而向零截断得到 -2。",
  },
  "fractional-part": {
    name: "小数部分",
    meaning: "x 的小数部分，定义为 x 减去其下取整，用转义的花括号书写。",
    usage:
      "由于在 LaTeX 中单独的花括号只起分组作用，可见的花括号必须转义为 \\{ 和 \\}。小数部分满足 x = \\lfloor x \\rfloor + \\{x\\} 且 0 \\le \\{x\\} < 1，它出现在等分布理论的结果中，例如外尔定理：对无理数 \\alpha，\\{n\\alpha\\} 是均匀分布的。同样的花括号也表示集合，因此 \\{x\\} 可能被理解为只含 x 的单元素集；请定义该记号，或写成 \\operatorname{frac}(x)。内容较高时，使用 \\left\\{ ... \\right\\}。",
  },
  "sum-of-divisors": {
    name: "因数和函数",
    meaning: "因数和函数：n 的所有正因数之和。",
    usage:
      "\\sigma(n) = \\sum_{d \\mid n} d，因此 \\sigma(6) = 1 + 2 + 3 + 6 = 12。一个数是完全数当且仅当 \\sigma(n) = 2n；一般形式 \\sigma_k(n) = \\sum_{d \\mid n} d^k 把因数个数作为 \\sigma_0 包含在内。该函数是积性函数，对素数幂有 \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1}，因此可以由质因数分解算出。小写 \\sigma 也表示标准差，所以在跨学科的文章中最好简单说明一下。大写 \\Sigma 在这里与之无关。",
  },
  "mobius-function": {
    name: "默比乌斯函数",
    meaning: "默比乌斯函数：若 n 被某个素数的平方整除则为 0，否则对 k 个素因子取 (-1)^k。",
    usage:
      "它的主要作用是默比乌斯反演：若 g(n) = \\sum_{d \\mid n} f(d)，则 f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d)。它还满足当 n > 1 时 \\sum_{d \\mid n} \\mu(d) = 0，其狄利克雷级数是 zeta 函数的倒数，\\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}。字母 \\mu 含义繁多，在统计中表示均值，在分析中表示测度，因此要明确引入。在数学模式中请使用希腊字母 \\mu，切勿用外形相似的拉丁字母 u 代替。",
  },
  "number-of-divisors": {
    name: "因数个数函数",
    meaning: "因数个数函数：n 的正因数的个数。",
    usage:
      "d(n) = \\sum_{d \\mid n} 1，因此 d(12) = 6。对 n = p_1^{a_1}\\cdots p_k^{a_k}，公式 d(n) = (a_1+1)\\cdots(a_k+1) 表明它是积性函数。其他常见记法有 \\tau(n) 和 \\sigma_0(n)，请确认你的参考文献用的是哪一种。狄利克雷除数问题研究它的平均阶，\\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x})。注意：字母 d 通常也是这类求和式中的因数变量，因此当两者会出现在同一个公式中时，优先使用 \\tau(n)。",
  },
};

export default text;
