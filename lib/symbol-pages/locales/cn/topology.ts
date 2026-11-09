import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "阿列夫零",
    meaning: "阿列夫零：自然数集的基数，也是最小的无穷基数。",
    usage:
      "任何能排成一个序列的集合，例如 \\mathbb{Z} 或 \\mathbb{Q}，其基数都是 \\aleph_0，而 \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 这样的运算说明了无穷基数的“吸收”性质。康托尔对角线论证证明了 2^{\\aleph_0} > \\aleph_0，因此实数集严格更大。\\aleph 无需额外宏包即可使用，并且是普通符号，下标可以直接附加。一些较早的文献用 \\omega 表示对应的序数；在你的记号中应把基数和序数区分开。",
  },
  "aleph-one": {
    name: "阿列夫一",
    meaning: "阿列夫一：第一个不可数基数，即可数之后的下一个无穷大小。",
    usage:
      "连续统假设断言 2^{\\aleph_0} = \\aleph_1，即不存在大小严格介于整数集和实数集之间的集合；哥德尔和科恩证明了它独立于 ZFC。不要把 |\\mathbb{R}| = \\aleph_1 当作事实写出，因为这正是尚待假设的命题；表示连续统时请用 \\mathfrak{c} 或 2^{\\aleph_0}。\\aleph_1 也是 \\omega_1（全体可数序数构成的集合）的基数。更大的阿列夫数遵循 \\aleph_\\alpha 的模式，以序数为下标；下标若超过一个记号，需要加花括号。",
  },
  "beth": {
    name: "贝特数符号",
    meaning: "希伯来字母 beth，用于贝特数：从可数基数出发反复取幂集得到的基数。",
    usage:
      "贝特序列由 \\beth_0 = \\aleph_0 和 \\beth_{\\alpha+1} = 2^{\\beth_\\alpha} 定义，因此 \\beth_1 是实数集的基数，\\beth_2 是全体实函数集合的基数。广义连续统假设就是对每个序数都有 \\aleph_\\alpha = \\beth_\\alpha。除 \\aleph 之外，LaTeX 的扩展符号集还提供 \\beth、\\gimel 和 \\daleth，即希伯来字母表的第二到第四个字母。与 \\aleph 一样，它是普通符号，下标可以直接附加；在集合论之外很少见到。",
  },
  "weierstrass-p": {
    name: "魏尔斯特拉斯 p 符号",
    meaning: "表示魏尔斯特拉斯椭圆函数的手写体 p，该函数是双周期亚纯函数。",
    usage:
      "魏尔斯特拉斯函数 \\wp(z) 满足 (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3，这正是它能参数化椭圆曲线的原因。这个字形是一个特殊的手写体 p，与任何字体族都无关，因此 \\mathcal{P} 或 \\mathscr{P} 是不同的符号。有些作者用 \\wp 表示幂集，但 \\mathcal{P}(X) 更常见，也能避免与椭圆函数冲突。注意撇号记法照常可用，如 \\wp'(z)；该符号像下伸字母一样略低于基线。",
  },
  "fraktur-r-real-part-symbol": {
    name: "哥特体 R（实部符号）",
    meaning: "哥特体大写 R，是表示取复数实部的经典符号。",
    usage:
      "\\Re 本身只是一个字形而不是运算符，因此在参数前不会自动加间距；请在其后加圆括号或花括号，例如用 \\Re(s) > 1 表示黎曼 zeta 级数收敛的半平面。解析数论学者正是使用这种写法。如果想换一种外观，可以在导言区用 \\renewcommand{\\Re}{\\operatorname{Re}} 重定义，所有出现之处会一次性改变。注意 \\Re 与 \\mathfrak{R} 不同，后者取自另一种字体的哥特体 R，外观略有差别。",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "哥特体 I（虚部符号）",
    meaning: "哥特体大写 I，是表示复数虚部的传统字形。",
    usage:
      "围道积分和谱理论用 \\Im 来拆分量：格林函数的虚部给出态密度，而 \\Im \\tau > 0 定义了模形式的上半平面。与 \\Re 一样，该命令只输出符号，因此应自行加上圆括号。许多读者觉得哥特体字母容易看错，用 \\renewcommand{\\Im}{\\operatorname{Im}} 重定义后会改为直立的“Im”。如果文中还要表示同态的像，请用小写的 \\operatorname{im}，以便两者区分。",
  },
  "calligraphic-o": {
    name: "花体 O",
    meaning: "花体 O，在拓扑学中表示开集族，也用于其他多种结构。",
    usage:
      "拓扑空间常写作 (X, \\mathcal{O})，其中 \\mathcal{O} 是开集的全体，不过 \\tau 也同样常见。这个字母还有许多其他用途：大 O 渐近记号 \\mathcal{O}(n \\log n)、代数几何中的结构层 \\mathcal{O}_X，以及数域的整数环 \\mathcal{O}_K。在标准字体中，\\mathcal 只支持大写字母。对于渐近记号，许多排版规范更推荐普通的斜体 O，因此请选定一种并全文统一。",
  },
  "interior": {
    name: "内部",
    meaning: "A 的内部，即 A 所含全部开集的并；用上标小圆圈表示。",
    usage:
      "内部是 A 的最大开子集，它与闭包通过 \\partial A = \\overline{A} \\setminus A^{\\circ} 相联系。上标 \\circ 是置于高处的复合运算圆圈，不要与单位中的度数符号混淆。其他常见记法有 \\operatorname{int} A 和 \\mathring{A}，后者把圆圈直接放在字母正上方；对于带下标的单个字母（如 U_1），\\mathring 更合适。对闭区间有 [a, b]^{\\circ} = (a, b)。",
  },
  "exterior": {
    name: "外部",
    meaning: "集合 A 的外部：其补集的内部，由存在一个与 A 不相交的邻域的点组成。",
    usage:
      "任何空间都可分成三个互不相交的部分：A 的内部、边界和外部，并且 \\text{ext}(A) = (X \\setminus A)^{\\circ}。在数学模式中直接输入 ext 而不加包装，会得到斜体字母 e、x、t 相乘，因此必须加某种包装。\\text 会继承周围的字体，在定理环境中会变成斜体；\\operatorname{ext} 保持直立并带有运算符间距，而 \\DeclareMathOperator{\\ext}{ext} 可以让它重复使用。注意 ext 也是外代数以及同调代数中 Ext 群的缩写。",
  },
  "boundary-operator": {
    name: "边界算子",
    meaning: "A 的边界：其每个邻域都同时与 A 及其补集相交的点。",
    usage:
      "圆盘的边界是它的圆周，而有理数集在实数中的边界是全体实数，即 \\partial \\mathbb{Q} = \\mathbb{R}。同一个 \\partial 符号在代数拓扑中是边界算子 \\partial_n : C_n \\to C_{n-1}，满足 \\partial \\circ \\partial = 0，它也出现在斯托克斯定理 \\int_{\\partial M} \\omega = \\int_M d\\omega 中。有些文献改写作 \\operatorname{Fr} A 或 \\operatorname{bd} A。由于 \\partial 是普通符号，它与集合名之间没有间隔；这种紧凑的样子正是惯例。",
  },
  "direct-limit": {
    name: "正向极限",
    meaning: "有向系统的正向极限（余极限），排版为下方带向右箭头的“lim”。",
    usage:
      "正向极限可用于构造各种对象，例如 \\mathbb{Q} = \\varinjlim \\frac{1}{n}\\mathbb{Z}，或层的茎 \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U)。在行间公式中，指标集位于箭头下方；在行内则位于旁边。amsmath 宏包集还提供 \\injlim，它以文字形式输出“inj lim”，请选用你所在领域惯用的形式。范畴论学者常改写作 \\operatorname*{colim}，因为正向极限是余极限的特例。对应于逆向系统的命令是 \\varprojlim。",
  },
  "inverse-limit": {
    name: "逆向极限",
    meaning: "系统的逆向（投射）极限，显示为下方带向左箭头的“lim”。",
    usage:
      "p 进整数是经典例子，\\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}，而伽罗瓦群这样的投射有限群是有限群的逆向极限。与 \\lim 一样，在行间样式中下标位于下方。另一种写法 \\projlim 输出文字“proj lim”，不带箭头。范畴论把它推广为一般的极限，通常写作 \\lim。务必让箭头方向正确：\\varprojlim 带向左箭头，对应沿系统向下的映射；\\varinjlim 则带向右箭头。",
  },
  "quotient": {
    name: "商",
    meaning: "A 对 B 的商：将 B 塌缩或商掉后得到的群、环、模或空间。",
    usage:
      "商出现在 \\mathbb{Z}/n\\mathbb{Z}、表示陪集的 G/H，以及把子空间塌缩为一点的 X/A 中。在数学模式中，/ 是普通符号，两侧没有空白，这正是标准外观。对于按等价关系取商，请给波浪号加花括号，写成 X/{\\sim}，否则 \\sim 会获得关系符间距并留下空隙。操作数较高时，\\big/ 或 \\left. \\middle/ \\right. 结构能让斜线保持相称。这里不要用 \\setminus，那是集合差，是另一种运算。请说明商带有哪种结构，因为只有当 H 是正规子群时 G/H 才是群。",
  },
  "fundamental-group": {
    name: "基本群",
    meaning: "空间的基本群：在基点处的回路的同伦类，以回路的连接作为乘法。",
    usage:
      "标准计算 \\pi_1(S^1) \\cong \\mathbb{Z} 统计了回路绕圆周的圈数，\\pi_1 平凡的空间称为单连通空间。基点重要时请明确写出，即 \\pi_1(X, x_0)；对于道路连通空间，常常省略基点。高阶同伦群遵循同样的模式，即 \\pi_n(X)。表示同构请用 \\cong 而不是 =。如果同一文档中 \\pi 还表示圆周率或投影，请考虑读者是否会混淆。",
  },
  "homology": {
    name: "同调群",
    meaning: "空间或链复形的第 n 个同调群，用于度量 n 维的“洞”。",
    usage:
      "对于球面有 H_n(S^n) \\cong \\mathbb{Z}，而当 0 < k < n 时 H_k(S^n) = 0；欧拉示性数是各 H_n 秩的交错和。系数写在分号之后，如 H_n(X; \\mathbb{Z}/2)，相对同调写作 H_n(X, A)。下标表示同调，上标表示上同调，请不要弄混。各种变体用修饰符标记：约化同调 \\tilde{H}_n，奇异同调 H_n^{\\mathrm{sing}}。在同调代数中，它定义为 \\ker \\partial_n / \\operatorname{im} \\partial_{n+1}。这些群的长正合列通常画成交换图。",
  },
  "cohomology": {
    name: "上同调群",
    meaning: "第 n 个上同调群：同调的对偶理论，通过杯积带有环结构。",
    usage:
      "德拉姆上同调 H^n_{\\mathrm{dR}}(M) 对闭微分形式模去恰当形式进行分类，而杯积 \\smile 使 H^\\ast(X) 成为分次环。像 H^n_{\\mathrm{dR}} 这样同时使用上标和下标，会整齐地上下叠放；对于是单词而非变量的标签，请用 \\mathrm。上标指标把它与同调 H_n 区分开来，这一惯例值得遵守。群上同调 H^n(G, M) 和层上同调 H^n(X, \\mathcal{F}) 使用同一个符号，只是参数不同。庞加莱对偶在闭的可定向 n 维流形上联系 H^k 与 H_{n-k}，这说明了为什么两种记号常常一起出现。",
  },
  "calligraphic-c-category": {
    name: "花体 C（范畴）",
    meaning: "花体 C，是任意范畴的默认名称；也用于约束集或可行集。",
    usage:
      "范畴论把对象写作 X \\in \\mathcal{C}，把态射集写作 \\operatorname{Hom}_{\\mathcal{C}}(X, Y)，第二个范畴通常记为 \\mathcal{D}。具体范畴常用粗体或无衬线体排版，例如 \\mathbf{Set} 或 \\mathsf{Grp}，以便把名称与变量区分开。最优化中用 \\mathcal{C} 表示凸可行集，如 \\min_{x \\in \\mathcal{C}} f(x)。在默认字体中 \\mathcal 只提供大写字母；如需第二套字母，\\mathscr 提供更卷曲的手写体风格。",
  },
  "calligraphic-f-functor": {
    name: "花体 F（函子）",
    meaning: "花体 F，常用来命名范畴之间的函子、层、σ 代数或某种变换。",
    usage:
      "函子 \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} 映射对象和态射，并保持复合。在范畴论之外，同一个字母可以表示层 \\mathcal{F}(U)、σ 代数或滤链（概率论中的 \\mathcal{F}_t），或者傅里叶变换 \\mathcal{F}\\{f\\}。由于含义繁多，请明确引入这个字母。书写函子的签名时请用 \\colon 而不是 :，以获得标点间距。许多作者把普通斜体的 F、G 留给函子，而把花体字母留给层。两个函子之间的自然变换常写作 \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}。",
  },
};

export default text;
