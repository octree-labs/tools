import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  "possibly": {
    name: "可能算子",
    meaning: "可能算子：\\Diamond p 读作“可能 p”，若 p 在某个可达世界中成立，则它在该世界为真。",
    usage:
      "它是必然算子的对偶，\\Diamond p \\leftrightarrow \\neg\\Box\\neg p，在系统 T 中有 p \\to \\Diamond p。时序逻辑把它读作“最终”，动态逻辑则用 \\langle a \\rangle p 表示同样的意思。\\Diamond 是较大的普通符号；\\diamond 是较小的二元运算符，\\lozenge 是窄菱形，不要相互替换。TeX 把 \\Diamond 当作普通符号，因此 \\Diamond p 之间没有空隙；只有在排版规范要求留空时才加 \\,。",
  },
  "not-necessary": {
    name: "非必然算子",
    meaning: "否定的必然：\\neg\\Box p 表示 p 不是必然的，等价于 \\Diamond\\neg p。",
    usage:
      "利用对偶关系 \\neg\\Box p \\leftrightarrow \\Diamond\\neg p 可以把否定向内推移，这是量词德摩根律在模态逻辑中的对应。在语义上，当某个可达世界使 p 为假时它成立。\\neg 是普通符号，因此 \\neg\\Box p 排得很紧凑；如果愿意也可以写 \\lnot，它是别名。带删除线的方框没有标准的单一命令，而且组合字形会让读者困惑，所以请保留两个符号的写法。在认知解读中，\\neg K_a p 表示主体不知道 p，这比知道 \\neg p 更弱。",
  },
  "not-possible": {
    name: "不可能算子",
    meaning: "否定的可能：\\neg\\Diamond p 表示 p 不可能，等价于 \\Box\\neg p。",
    usage:
      "不可能就是否定的必然，\\neg\\Diamond p \\leftrightarrow \\Box\\neg p，当没有任何可达世界满足 p 时它在该世界成立。在每个正规模态逻辑中矛盾都是不可能的，即 \\neg\\Diamond\\bot。在认知解读中，它表示主体认为 p 已被排除。命令 \\neg 可以换成 \\lnot，输出完全相同。不要用 \\not\\Diamond 临时拼出带斜线的菱形，\\not 是为关系符设计的，斜线位置会很差。把否定移到里面得到 \\Diamond\\neg p，含义不同：表示 p 可能不成立。",
  },
  "necessary-implication": {
    name: "必然蕴涵（严格蕴涵）",
    meaning: "被必然化的蕴涵：\\Box(p \\to q) 表示在每个可达世界中 p 都蕴涵 q（严格蕴涵）。",
    usage:
      "这是分配公理 K 的前件，\\Box(p \\to q) \\to (\\Box p \\to \\Box q)，每个正规模态逻辑都包含该公理。C. I. 刘易斯引入的严格蕴涵正是这个公式，因此 \\Box(p \\to q) 常读作 p 严格蕴涵 q。\\to 和 \\rightarrow 输出同一个箭头；\\implies 是带额外间距的长箭头，更适合元层面的推理，而不是对象语言中的联结词。括号是必需的，因为 \\Box 的结合优先级高于 \\to。利用必然化规则，可以从任意定理 p \\to q 推出 \\Box(p \\to q)。",
  },
  "possible-conjunction": {
    name: "合取的可能性",
    meaning: "可能的合取：\\Diamond(p \\land q) 表示存在一个可达世界，在其中 p 和 q 同时成立。",
    usage:
      "它蕴涵 \\Diamond p \\land \\Diamond q，但反之不成立，因为 p 和 q 可能在不同的世界中成立；这种不对称是考试中的常见考点。它的对偶是 \\Box(\\neg p \\lor \\neg q)。\\land 和 \\wedge 输出同一个符号；在逻辑论文中 \\land 可读性更好。请保留括号，因为 \\Diamond p \\land q 会被解析为 (\\Diamond p) \\land q。按克里普克语义，必须有同一个见证世界同时满足两个合取项。例如，下雨是可能的，不下雨也是可能的，但既下雨又不下雨却不可能。",
  },
  "knows": {
    name: "知识算子",
    meaning: "认知逻辑中的知识算子：K_a p 读作“主体 a 知道 p”。",
    usage:
      "认知逻辑通常用 S5 刻画知识：真理公理 K_a p \\to p、正内省 K_a p \\to K_a K_a p 以及负内省。在语义上，当 p 在主体 a 无法与现实世界区分开的每个世界中都为真时，K_a p 成立。对偶算子 \\hat{K}_a p 或 M_a p 表示 a 认为 p 是可能的。如果斜体 K 与名为 K 的逻辑系统冲突，请使用正体 K，即 \\mathsf{K}_a 或 \\mathrm{K}_a；下标中由多个字母组成的主体名应写成 \\text{Alice}。",
  },
  "believes": {
    name: "信念算子",
    meaning: "信念算子：B_a p 读作“主体 a 相信 p”，与知识不同，信念可以是假的。",
    usage:
      "信念逻辑通常采用 KD45：一致性公理 B_a p \\to \\neg B_a\\neg p 以及两条内省公理，但没有真理公理，因此 B_a p \\to p 不成立。知识与信念之间的联系 K_a p \\to B_a p 是常用的桥接原则。信念修正方面的论文用 B_a(p \\mid q) 表示条件信念。与 K_a 一样，如果斜体 B 另有他用，可以考虑使用正体 \\mathsf{B}，并且不要把它与表示一般必然算子的方框 \\Box 混淆。",
  },
  "common-knowledge": {
    name: "公共知识",
    meaning: "群体 G 中的公共知识：每个人都知道 p，每个人都知道每个人都知道 p，如此无穷递推。",
    usage:
      "若用 E_G p 表示 G 中每个人都知道 p，则公共知识是无穷合取 E_G p \\land E_G E_G p \\land \\cdots，并满足不动点公理 C_G p \\leftrightarrow E_G(p \\land C_G p)。泥孩子谜题和协同进攻问题的关键都在于 E_G 与 C_G 之间的差别。分布式知识记作 D_G p。G 是主体的集合，因此应写成大写斜体字母并明确给出定义。",
  },
  "always-temporal-box": {
    name: "总是算子（时序方框）",
    meaning: "时序意义上的“总是”：\\Box p 表示 p 在当前以及运行中的每个未来时刻都成立。",
    usage:
      "在线性时序逻辑中，\\Box 常写作 G（全局），安全性性质的形式为 \\Box\\neg\\mathit{bad}。它与“最终”互为对偶，\\Box p \\leftrightarrow \\neg\\Diamond\\neg p，而 \\Box\\Diamond p 表示 p 无穷多次发生。同一个方框在真势模态逻辑中表示必然，因此要说明采用哪种解读。\\Box 和 \\square 输出几乎相同的方块；\\Box 是惯用的模态算子，并且它与 p 之间不会自动加间距。CTL 在它前面加路径量词，如 AG p。",
  },
  "eventually-temporal-diamond": {
    name: "最终算子（时序菱形）",
    meaning: "时序意义上的“最终”：\\Diamond p 表示 p 在当前或某个未来时刻成立。",
    usage:
      "线性时序逻辑也把它写作 F p（未来），并可以由“直到”定义为 \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p。活性性质通常具有这种形式，例如 \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant})。\\Diamond\\Box p 表示 p 最终会永远成立。在真势模态逻辑中同一个菱形表示“可能”，因此请说明是时序解读。请使用 \\Diamond，而不是 \\diamond，后者是较小的二元运算符。在计算树逻辑中，它前面要加路径量词，如 AF p 或 EF p。",
  },
  "until": {
    name: "直到算子",
    meaning: "时序逻辑中的“直到”算子：当 q 最终成立且在此之前的每个时刻 p 都成立时，p \\mathcal{U} q 成立。",
    usage:
      "强直到要求 q 一定发生；弱直到 p \\mathcal{W} q 还允许 p 永远成立。“最终”可以由它导出：\\Diamond q \\equiv \\top \\mathcal{U} q。直接书写时 \\mathcal{U} 是普通符号，因此 p\\mathcal{U}q 中 U 两侧没有间距；写成 p \\mathbin{\\mathcal{U}} q 可获得二元运算符间距，也可以定义 \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}。许多 LTL 论文使用正体 U，即 \\mathbin{\\mathsf{U}}，而不是花体字母。过去时逻辑还增加了“自从”算子，它是向后看的镜像。",
  },
  "next": {
    name: "下一时刻算子",
    meaning: "时序逻辑中的“下一时刻”算子：\\bigcirc p 表示 p 在紧接着的下一个状态中成立。",
    usage:
      "它是 LTL 中唯一与离散时间步相关的算子，也写作 X p。展开律 p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) 利用它把“直到”逐步展开。\\bigcirc 是大圆圈，大小与 \\Box 和 \\Diamond 相当，因此视觉上与它们匹配；\\circ 是表示复合的小运算符，在这里使用是错误的。有些论文为了在大量纯文本的规约中更清楚，更喜欢使用 \\mathsf{X}。",
  },
  "accessibility": {
    name: "可达关系",
    meaning: "克里普克语义中的可达关系：w R v 表示从世界 w 可以到达（认为可能）世界 v。",
    usage:
      "R 的性质与模态公理相对应：自反性对应 T（\\Box p \\to p），传递性对应 4（\\Box p \\to \\Box\\Box p），等价关系对应 S5。\\Box p 在 w 处为真，要求 p 在每个满足 wRv 的 v 处为真。如果直接输入 w R v，TeX 会把 R 当作普通字母，空格消失，得到 wRv；请用 w \\mathrel{R} v 获得关系符间距，或定义一个宏。有些作者改写为 R(w, v) 或 w \\to v。",
  },
  "kripke-model": {
    name: "克里普克模型",
    meaning: "克里普克模型中的满足关系：公式 p 在模型 \\mathcal{M} 的世界 w 处为真。",
    usage:
      "克里普克模型 \\mathcal{M} = (W, R, V) 由世界集、可达关系和赋值组成，真值逐个世界定义，例如 \\mathcal{M}, w \\models \\Box p 当且仅当 p 在所有 R 后继处成立。\\models 是带有恰当间距的关系符；\\vDash 给出相似的双十字转门字形，其否定为 \\not\\models 或 \\nvDash。不要使用 \\vdash，它表示可证性而非真。当模型固定时，作者会简写为 w \\models p 或 w \\Vdash p。",
  },
  "possible-world": {
    name: "可能世界",
    meaning: "可能世界：克里普克框架中的一个点，公式在该点上被赋值为真或假。",
    usage:
      "世界取自集合 W，框架是二元组 (W, R)，其中带有一个可达关系。根据所用逻辑的不同，一个世界可以代表程序的一个状态、一个时间点或一种认知上的备选情形。惯例上用小写的 w、v、u 表示世界，用 w_0 表示现实世界。由于单独的斜体 w 非常常见，应明确引入它，最好在第一个公式中写 w \\in W 以确定其含义。",
  },
  "deontic-ought": {
    name: "道义义务算子",
    meaning: "道义义务：O p 读作“应当 p”或“p 是义务性的”。",
    usage:
      "标准道义逻辑是正规模态逻辑 KD，其公理 D 为 O p \\to P p，表示义务之间是一致的，而真理公理 O p \\to p 被刻意排除。齐硕姆悖论等反义务谜题揭示了它的局限，并促使人们引入二元义务 O(p \\mid q)。在数学模式中 O p 会排成没有空格的 Op，因此请写 O\\,p，或使用正体 \\mathbf{O} 或 \\mathsf{O}，以免被读成大 O 记号。",
  },
  "deontic-permitted": {
    name: "道义允许算子",
    meaning: "道义允许：P p 读作“p 是被允许的”，是义务的对偶。",
    usage:
      "允许定义为 P p \\leftrightarrow \\neg O\\neg p，禁止定义为 F p \\leftrightarrow O\\neg p。在标准道义逻辑中，每个义务都是被允许的，即 O p \\to P p。自由选择允许，即 P(p \\lor q) 应当蕴涵 P p，是一个著名谜题，标准系统并不认可它。斜体 P 会与概率记号冲突，所以许多作者使用 \\mathsf{P} 或 \\mathbf{P}；并在其后加 \\, 把算子与公式分开。",
  },
};

export default text;
