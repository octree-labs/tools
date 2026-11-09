import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "求和符号",
    meaning: "大写希腊字母 sigma 形式的求和运算符，用于把一个数列的各项相加。",
    usage: "用 _ 和 ^ 添加上下限：\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}。在行间公式中，上下限居中放在放大的 sigma 下方和上方；在行内公式中，上下限位于符号右侧，符号也保持较小；可用 \\limits 和 \\nolimits 改变这一行为。请使用 \\sum 而不是 \\Sigma，后者只是希腊字母，既不会放大，也不会堆叠上下限。若求和号下方有多行条件，\\substack{0 \\le i \\le m \\\\ 0 < j < n} 可以将它们整齐地堆叠起来。只带下标的求和 \\sum_i 在物理和机器学习中很常见，适用于求和范围不言自明的情形。",
  },
  "summation-to-infinity": {
    name: "无穷求和",
    meaning: "下标从 n = 0 到无穷的求和，是幂级数的常用写法。",
    usage: "从零开始对幂级数和泰勒级数来说很自然：e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}，以及几何级数 \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}（|r| < 1）。请仔细核对起始下标，因为从 n = 0 改为 n = 1 会丢掉第一项并改变闭式结果。在行间模式中上下限堆叠排列，在行内则移到 sigma 旁边。当上限为无穷时，\\sum_{n \\ge 0} 是一种紧凑的替代写法。数列 a_n 的生成函数也用同样方式书写：\\sum_{n=0}^{\\infty} a_n x^n。",
  },
  "product": {
    name: "连乘积符号",
    meaning: "大写希腊字母 pi 形式的连乘运算符，用于把一个数列的各项相乘。",
    usage: "上下限的用法与 \\sum 相同：n! = \\prod_{k=1}^{n} k，统计学中的似然函数 L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta) 也是如此。它比字母 \\Pi 更大，并且在行间样式中把上下限放在上方和下方，所以不要用希腊字母代替。取对数可以把乘积变成求和，\\log\\prod_i a_i = \\sum_i \\log a_i，这一步几乎出现在每个最大似然推导中。集合的笛卡尔积 \\prod_{i \\in I} X_i 也使用同一命令。它的倒置版本 \\coprod 表示余积。",
  },
  "coproduct": {
    name: "余积符号",
    meaning: "倒置的连乘积符号，表示余积，例如集合的不交并。",
    usage: "范畴论和代数拓扑用 \\coprod_{i \\in I} X_i 表示一族对象的余积：对集合和空间而言是不交并，对阿贝尔群或模而言是直和。它和 \\prod 一样是大型运算符，因此在行间样式中上下限堆叠在其下方和上方。不要把它与 \\amalg 混淆，后者是仅用于两个对象的小型二元版本，如 X \\amalg Y。不交并也可以写作 \\bigsqcup，其形状类似杯形；按照你所在领域的习惯选择即可。对偶构造，即范畴积，使用 \\prod。",
  },
  "big-union-with-index": {
    name: "带指标的大并集",
    meaning: "对一个带指标的集合族（从 A_1 到 A_n）取的大并集。",
    usage: "有限并和可数并，如 \\bigcup_{i=1}^{n} A_i 或 \\bigcup_{n=1}^{\\infty} A_n，出现在测度论的可数可加性、概率论的并集上界（union bound）以及拓扑学的开覆盖中。\\bigcup 是大型运算符；\\cup 是用于两个集合的二元版本，如 A \\cup B。在行间公式中上下限堆叠在符号下方和上方，在行内公式中则移到旁边。指标集不必是数字：对任意覆盖常写作 \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha。若是两两不交的集合之并，请改用 \\bigsqcup，或用文字说明不交性。",
  },
  "big-intersection-with-index": {
    name: "带指标的大交集",
    meaning: "对一个带指标的集合族（A_1 到 A_n）取的大交集。",
    usage: "带指标集合族的交集可用来表述闭区间套性质 \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing 这类结论，或把由一族集合生成的 sigma 代数定义为包含它的所有 sigma 代数之交。集合族用 \\bigcap，两个集合用 \\cap，如 A \\cap B。德摩根律把这两个大型运算符联系起来：\\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c。在行间样式中指标位于下方和上方；在行内，仅在需要时加上 \\limits。对空指标族取交集只有相对于某个全集才有意义，因此请说明该全集是什么。",
  },
  "big-wedge": {
    name: "大合取符号",
    meaning: "大型楔形运算符，表示多个命题的合取或外幂。",
    usage: "在逻辑中，\\bigwedge_{i=1}^{n} \\varphi_i 是 n 个公式的合取，即 \\wedge（也写作 \\land）的 n 元形式；合取范式就是若干子句的 \\bigwedge。在格论中它表示一个集合的交（meet），即下确界；在微分几何中，\\bigwedge^k V 是向量空间的 k 次外幂。上下限的行为与 \\sum 相同：行间时堆叠，行内时位于符号旁边。不要把它与希腊大写字母 \\Lambda 混淆，有些作者用普通大小的 \\Lambda 表示外幂。它的对偶运算符是 \\bigvee。",
  },
  "big-vee": {
    name: "大析取符号",
    meaning: "大型 vee 运算符，表示多个命题的析取或格中的并（join）。",
    usage: "逻辑中用 \\bigvee_{i=1}^{n} \\varphi_i 表示 n 重析取，是 \\vee（也写作 \\lor）的推广；析取范式正是由若干 \\bigwedge 项构成的 \\bigvee。在序理论和格论中，\\bigvee S 表示集合 S 的并（join），即上确界。作为大型运算符，它的上下限在行间公式中堆叠，在行内则移到旁边。不要用字母 V 或带下标的 \\vee 代替它，因为它们保持小尺寸，也不会正确放置上下限。在代数拓扑中，\\bigvee_{i} S^1 表示若干圆周的楔和，即把带基点空间在基点处粘合。",
  },
  "big-direct-sum": {
    name: "大直和符号",
    meaning: "大型带圈加号，表示一族空间或模的直和。",
    usage: "可对角化算子把其空间分解为特征子空间，V = \\bigoplus_{\\lambda} E_\\lambda；分次环写作 \\bigoplus_{n \\ge 0} R_n。\\oplus 是用于两个直和项的二元形式，如 U \\oplus W。在计算机科学和密码学中，\\bigoplus_{i} x_i 常表示多个比特的异或（XOR），沿用同一个字形。在行间样式中上下限像 \\sum 一样堆叠。注意无穷多个模的直和不同于直积 \\prod，后者允许无穷多个非零分量，因此请选择与你的构造相符的运算符。",
  },
  "big-tensor-product": {
    name: "大张量积符号",
    meaning: "大型带圈乘号，表示一族空间或算子的张量积。",
    usage: "量子计算把 n 个量子比特的状态空间写作 \\bigotimes_{i=1}^{n} \\mathbb{C}^2，多重线性代数则构造张量代数 T(V) = \\bigoplus_k V^{\\otimes k}。二元形式 \\otimes 连接两个因子，如 A \\otimes B，也表示矩阵的克罗内克积。作为大型运算符，\\bigotimes 在行间公式中的上下限堆叠排列。对同一空间的重复张量幂，保留上标写法 V^{\\otimes n}，它比带上下限的大型运算符更紧凑。当基环或基域不明显时，请注明，如 \\otimes_R。",
  },
  "big-circle-dot": {
    name: "大圈点符号",
    meaning: "大型带圈圆点，用于表示 n 元逐元素积或对称积。",
    usage: "\\bigodot 是 \\odot 的大型运算符版本。在机器学习中，\\odot 表示 Hadamard 积（逐元素积），因此 \\bigodot_{i=1}^{n} \\mathbf{v}_i 可以表示多个向量的逐元素积；张量分解论文用 \\odot 表示 Khatri-Rao 积，一些代数教材则用它表示对称幂。由于其含义因领域而异，请在记号说明部分给出定义。在行间样式中，上下限像 \\sum 一样堆叠。不要把它与 \\bigcirc 混淆，后者是一个大的空心圆，具有二元运算符间距，而不是大型运算符。",
  },
  "big-square-union": {
    name: "大方形并符号",
    meaning: "大型方形杯符号，表示一个带指标集合族的不交并。",
    usage: "写成 X = \\bigsqcup_{i \\in I} X_i 既表示并集，也表明各部分两两不交，这一约定在拓扑学、测度论和范畴论中很常见。二元形式是 \\sqcup，如 A \\sqcup B。对于同一个范畴构造，有些作者更喜欢用 \\coprod，而单独的 \\bigcup 并不说明是否不交。在域理论和指称语义中，\\bigsqcup 则表示有向集的最小上界。作为大型运算符，它的上下限在行间公式中堆叠，在行内位于旁边。",
  },
  "double-sum": {
    name: "二重求和",
    meaning: "两个嵌套的求和，i 从 1 到 m，j 从 1 到 n，例如对矩阵的所有元素求和。",
    usage: "二重求和把 m×n 数组的每个元素相加，例如 Frobenius 范数 \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2。LaTeX 会以合适的间距把两个运算符并排放置，所以不需要在它们之间手动加空格。当两个指标共享一个条件时，单个求和号如 \\sum_{i,j} 或 \\sum_{1 \\le i < j \\le n} 更紧凑，而 \\substack 可以在一个 sigma 下堆叠多个条件。交换有限二重求和的次序总是成立的，但无穷二重求和需要绝对收敛或各项非负。",
  },
  "indexed-sum": {
    name: "按指标集求和",
    meaning: "对集合 K 中每个元素 k 求和，而不是对一个数值范围求和。",
    usage: "当指标集不是区间时，按集合索引的求和很自然：对素数求和 \\sum_{p \\le x}，对因数求和 \\sum_{d \\mid n}，或在握手引理中对顶点求和 \\sum_{v \\in V} \\deg v = 2|E|。它对任何有限集都有意义；对无限集，只要级数绝对收敛也有意义，因为这里不隐含任何顺序。若有多个条件，请使用 \\substack，如 \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}。在行间模式中，条件居中放在 sigma 下方，因此请保持简短，以免运算符周围出现过宽的空白。",
  },
};

export default text;
