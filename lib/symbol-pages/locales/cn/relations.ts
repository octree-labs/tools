import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "小于号",
    meaning: "小于关系，表示左边的量严格小于右边的量。",
    usage: "在数学模式中直接输入 < 即成为关系符，两侧会自动加上合适的间距，例如 0 < x < 1，或 epsilon-delta 证明中的严格不等式。不要把它当作内积的尖括号，那应该用 \\langle。在文本模式下，若使用旧的默认字体编码，< 可能会印成倒置的感叹号，因此请写 \\textless 或改用数学模式。它的非严格形式是 \\leq（或 \\le），否定形式是 \\not< 或 \\nless。MathJax 等网页渲染器也接受 \\lt，这在 HTML 中很有用。",
  },
  "greater-than": {
    name: "大于号",
    meaning: "大于关系，表示左边的量严格大于右边的量。",
    usage: "在数学模式中，> 是关系符，会自动获得关系符间距，因此 x > 0 无需手动加空格。它用于写出严格不等式，如 \\lambda_{\\max} > 0，或极限定义中的条件 n > N。不应把它用作右尖括号，那应该用 \\rangle。在文本模式下，若使用旧字体编码，这个字符可能印成倒置的问号，因此请用 \\textgreater 或数学模式。相关命令有 \\geq（或 \\ge）、表示“远大于”的 \\gg，以及表示其否定的 \\ngtr。",
  },
  "equivalent": {
    name: "恒等号",
    meaning: "三横线关系符，表示恒等、模 n 同余或逻辑等价。",
    usage: "数论用 a \\equiv b \\pmod{n} 表示同余，分析用 f \\equiv 0 表示函数处处为零，逻辑学则用它表示公式之间的逻辑等价。与 \\pmod{n} 搭配可得带括号的模数，与 \\bmod 搭配可得二元形式 a \\bmod n。它不同于 \\cong（同构或几何全等），也不同于 \\triangleq 或 :=（定义），尽管有些作者也用它表示定义。用 \\not\\equiv 表示其否定。在物理学中，\\equiv 常用来引入简写：\\omega \\equiv 2\\pi f。",
  },
  "proportional-to": {
    name: "正比符号",
    meaning: "表示一个量与另一个量成正比，即两者只差一个常数因子。",
    usage: "物理学用 F \\propto 1/r^2 表示平方反比定律，贝叶斯统计更是频繁使用它：p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta)，省去了归一化常数。它是关系符，间距会自动处理。不要把它与希腊字母 \\alpha 混淆，后者在某些字体中外形相似，但没有关系符间距。变体 \\varpropto 的形状略有不同。在算法分析中表示增长阶时，\\sim 或 \\Theta 通常更清楚。只有当常数重要时才把它写出来；否则 \\propto 的意义正在于将其隐去。",
  },
  "similar-to": {
    name: "波浪号关系符",
    meaning: "波浪形关系符，表示“服从分布”“渐近相等”“相似”或“在某关系下等价”。",
    usage: "在概率论中，X \\sim \\mathcal{N}(0, 1) 读作“X 服从标准正态分布”。在渐近分析中，f \\sim g 表示 f/g \\to 1，如斯特林公式。代数中用 x \\sim y 表示等价关系，几何中用它表示相似三角形。作为关系符，它两侧都有间距；若要在字母上加波浪号重音，请用 \\tilde{x}。相近的符号有 \\simeq（渐近相等或同伦等价）、\\approx（约等于）以及更粗的 \\thicksim。作为表示“大约”的前缀时，如 \\sim 10^3，间距可能显得别扭，可写成 {\\sim}10^3。",
  },
  "congruent": {
    name: "同构号",
    meaning: "等号上加波浪线，表示结构之间的同构或几何图形的全等。",
    usage: "代数学家用 G \\cong H 表示群同构，用 V \\cong V^{**} 表示有限维空间与其二次对偶同构，几何中则用 \\triangle ABC \\cong \\triangle DEF 表示三角形全等。有些物理和工程文献用它表示“约等于”，但这时 \\approx 更清楚。它不同于 \\simeq（单横线，用于同伦等价或渐近相等），也不同于 \\equiv（三横线）。若要标出映射，可用 \\overset{\\phi}{\\cong} 把它放在符号上方，或使用 \\xrightarrow{\\sim} 这样的箭头。",
  },
  "subset-or-equal": {
    name: "子集或等于符号",
    meaning: "表示左边集合的每个元素也都属于右边集合；两个集合可以相等。",
    usage: "\\subseteq 用于允许相等的包含关系，如 A \\subseteq A，也见于拓扑对子族的并封闭这类定义，其中子族 \\mathcal{U} \\subseteq \\tau。许多作者直接用 \\subset 表示同样的意思，另一些作者则把 \\subset 留给真包含，因此最好说明你的约定。若要无歧义地表示真包含，请用 \\subsetneq。其否定为 \\nsubseteq 或 \\not\\subseteq。证明两个集合相等的标准方法是分别证明 A \\subseteq B 和 B \\subseteq A。",
  },
  "proper-subset": {
    name: "真子集符号",
    meaning: "下方横线带斜杠的子集符号：左边集合包含于右边集合，但二者不相等。",
    usage: "\\subsetneq 明确表示真包含，消除了 \\subset 的歧义（有些文献把 \\subset 视为非严格包含）。它出现在 \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} 这样的链中，以及关于理想的极大性论证中。变体包括 \\subsetneqq（带斜杠的双横线）和 \\varsubsetneq（斜杠只穿过横线）。不要把它与 \\nsubseteq 混淆，后者表示根本不是子集。它对应的超集符号是 \\supsetneq。它是关系符，两侧间距会自动处理。证明包含是严格的时，先证明 A \\subseteq B，再举出 B 中一个不属于 A 的元素。",
  },
  "superset": {
    name: "超集符号",
    meaning: "超集关系：左边集合包含右边集合（视约定而定，常表示严格包含）。",
    usage: "\\supset 是 \\subset 的镜像，A \\supset B 表示 B 包含于 A。与 \\subset 一样，作者们对它是否允许相等看法不一；请说明你的约定，或用 \\supseteq 和 \\supsetneq 消除疑问。较早传统的逻辑学文献（包括《数学原理》）用 \\supset 表示实质蕴涵，因此在哲学论文中可能会见到 p \\supset q。在新写的文字中，用 \\to 或 \\implies 表示蕴涵更清楚。其否定为 \\not\\supset，非严格形式的否定则用 \\nsupseteq。",
  },
  "superset-or-equal": {
    name: "超集或等于符号",
    meaning: "超集或等于关系：左边集合包含右边集合的所有元素。",
    usage: "A \\supseteq B 读作“A 包含 B”，可能相等。当较大的集合是叙述主体时，用它很自然，例如闭包的 \\overline{A} \\supseteq A，或正合列论证中的 \\ker f \\supseteq \\operatorname{im} g。它只是反方向读的 \\subseteq，因此选择能把重要集合放在前面的写法即可。严格形式是 \\supsetneq，否定形式是 \\nsupseteq。在格论和序理论中，它也表示集族上的反向包含序。",
  },
  "perpendicular": {
    name: "垂直符号",
    meaning: "垂直关系，表示直线、向量或子空间相互正交，也表示随机变量相互独立。",
    usage: "几何中写 AB \\perp CD；线性代数中当 \\langle u, v \\rangle = 0 时写 u \\perp v，并用 W^\\perp 表示正交补；数论有时用 a \\perp b 表示两个整数互素。概率论学者用 X \\perp Y 表示独立，常写成双重形式 X \\perp\\!\\!\\!\\perp Y 来模仿专用的独立符号。\\perp 是两侧带间距的关系符，而 \\bot 形状相同但只有普通间距，适合表示逻辑上的“假”或最小元。在 W^\\perp 这样的上标中两者都可以，因为那里的间距会被取消。",
  },
  "parallel": {
    name: "平行符号",
    meaning: "表示直线、平面或向量“平行于”的关系符；也用作并行组合运算符。",
    usage: "几何中写 \\ell_1 \\parallel \\ell_2，物理中写 F_\\parallel 这样的分量（常借助 \\|），电气工程用 R_1 \\parallel R_2 表示电阻并联。进程演算用它表示并行组合，P \\parallel Q。其字形与 \\| 相同，但 \\parallel 带有关系符间距，因此在两个对象之间用它，而范数定界符用 \\|（或 \\lVert、\\rVert）。其否定为 \\nparallel。对于 KL 散度 D(P \\parallel Q)，通常使用关系符间距，不过也有人偏好 \\|。",
  },
  "not-parallel": {
    name: "不平行符号",
    meaning: "平行关系的否定，表示两条直线或两个向量不平行。",
    usage: "\\nparallel 在双竖线上加一道斜线，用于几何题中，如 \\ell_1 \\nparallel \\ell_2，意味着两直线相交（在平面内）或异面（在空间中）。它是关系符，间距与 \\parallel 相同。写 \\not\\parallel 也行，但叠加的斜线往往不够居中，因此专用字形更美观。另有更短的变体 \\nshortparallel。在物理学中，不平行的分量更常用 \\perp 表示。",
  },
  "much-less-than": {
    name: "远小于号",
    meaning: "远小于关系，表示左边的量比右边的量小若干个数量级。",
    usage: "物理和工程中用 \\ll 表示近似适用的范围：v \\ll c 表示非相对论运动，x \\ll 1 则用来论证 \\sin x \\approx x。解析数论使用维诺格拉多夫记号 f \\ll g，表示 f = O(g)；测度论则用 \\mu \\ll \\nu 表示绝对连续。它是单个字形，因此不要输入 << 或 < <，那样会得到两个分开的关系符，间距也不对。还有三重形式 \\lll，表示更强的不等关系。",
  },
  "much-greater-than": {
    name: "远大于号",
    meaning: "远大于关系，表示一个量远远超过另一个量。",
    usage: "在渐近或物理推理中使用 \\gg，例如大样本近似中的 n \\gg 1、经典极限中的 kT \\gg \\hbar\\omega，或维诺格拉多夫记号 f \\gg g（表示 g = O(f)）。它是带关系符间距的单个符号；输入 >> 会得到两个分开的关系符。还有更强的 \\ggg。由于 \\gg 并不定量，论文常在其后给出精确表述，例如 n \\gg \\log(1/\\delta) 并附上所涉及的常数。物理中的渐近论证往往先声明一次适用范围，例如 L \\gg \\lambda，然后略去小项。",
  },
  "precedes": {
    name: "严格前序符号",
    meaning: "“先于”关系，用于并非普通数值小于的严格序。",
    usage: "\\prec 用于书写抽象的严格序：经济学中的偏好（x \\prec y 表示 y 被严格偏好）、矩阵分析中的优超、分拆上的支配序，以及分布式系统中的“先发生于”关系。它的弯曲外形表明这个序不是数值上的 <。非严格形式是 \\preceq，\\preccurlyeq 则是某些文献偏爱的弯横线变体。线性代数用 A \\prec B 表示 Loewner 序，即 B - A 正定。其否定形式包括 \\nprec。",
  },
  "succeeds": {
    name: "严格后序符号",
    meaning: "“后于”关系，\\prec 的反向，用于抽象的严格序。",
    usage: "\\succ 读作“后于”或“优于”：在微观经济学中 x \\succ y 表示 x 被严格偏好于 y，在矩阵分析中 A \\succ 0 表示 A 正定（Loewner 序）。优化论文在半定约束中使用它。它是关系符，间距会自动处理。非严格形式是 \\succeq，弯横线形式是 \\succcurlyeq，否定为 \\nsucc。这类序不要用 >，否则读者会把它理解为数值比较。",
  },
  "precedes-or-equal": {
    name: "前序或等于符号",
    meaning: "“先于或等于”关系，\\prec 的非严格形式，用于偏序和偏好序。",
    usage: "序理论用 x \\preceq y 表示一般的偏序，而把 \\le 留给数。经济学家用它表示弱偏好，矩阵分析学者在 B - A 半正定时写 A \\preceq B。在凸优化中，广义不等式 x \\preceq_K y 用下标标出锥。\\preccurlyeq 外形相近，下方横线是弯曲的，有些作者偏爱它以避免与 \\leq 混淆。其反向为 \\succeq，否定为 \\npreceq。",
  },
  "succeeds-or-equal": {
    name: "后序或等于符号",
    meaning: "“后于或等于”关系，最常见于表示半正定矩阵的 A \\succeq 0。",
    usage: "半定规划的约束写作 X \\succeq 0，表示 X 是对称半正定矩阵；Loewner 序则以 A \\succeq B 比较矩阵。经济学家用 \\succeq 表示弱偏好，读作“至少一样好”。它是带标准间距的关系符。严格形式是 \\succ，弯横线变体是 \\succcurlyeq，否定为 \\nsucceq。数值比较请坚持用 \\geq，以免读者去寻找某种非标准的序。在半定规划中，约束通常单独成行，写在 s.t.（“约束于”）之后。",
  },
  "asymptotic": {
    name: "同阶符号",
    meaning: "渐近同阶关系：两个函数在相差常数因子的意义下以相同速度增长。",
    usage: "在分析和数论中，f \\asymp g 表示存在常数 c, C > 0，使得自变量充分大时 c g \\le f \\le C g，等价于计算机科学中的 f = \\Theta(g)。它比 f \\sim g 弱，后者要求比值趋于 1。其字形是一对相对的弧线，不要与 \\approx 或 \\smile、\\frown 混淆。它是关系符，间距会自动处理。有些物理文献也宽泛地用它表示“渐近相等”，因此若需要精确，请先给出定义。",
  },
  "defined-as": {
    name: "定义等号",
    meaning: "冒号等号，即定义式赋值：左边被定义为等于右边。",
    usage: "写 f(x) := x^2 + 1 表示这是一个定义，而不是关于相等的断言，冒号位于被定义对象的一侧（=: 则方向相反）。直接输入时，冒号和等号都是关系符，所以 TeX 把它们紧挨着排在一起，但冒号相对等号并未垂直居中，这让一些排版者感到别扭。数学工具宏包中的 \\coloneqq 命令可以修正这种对齐。在伪代码中它也表示赋值，x := x + 1。其他写法包括 \\triangleq 和 \\stackrel{\\text{def}}{=}。",
  },
  "triangle-equal": {
    name: "三角等号",
    meaning: "上方带小三角形的等号，读作“定义为”。",
    usage: "信号处理、控制理论和信息论的论文常偏好用 \\triangleq 表示定义，如 H(X) \\triangleq -\\sum p(x) \\log p(x)。它的作用与 := 相同，但形状对称，因此不表明哪一边是新引入的。有些读者对它不熟悉，所以请在记号说明部分提一次这个约定。其他写法有 \\stackrel{\\text{def}}{=} 或 \\overset{\\mathrm{def}}{=}，物理中还有 \\equiv。它是关系符，间距会自动处理。对于本领域以外的读者，请明确说明这一约定。",
  },
};

export default text;
