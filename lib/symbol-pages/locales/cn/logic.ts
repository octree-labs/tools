import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "不存在量词",
    meaning: "否定的存在量词：不存在具有所述性质的对象。",
    usage:
      "\\nexists x \\in \\mathbb{Q} : x^2 = 2 表示 2 没有有理平方根。该符号是专门设计的单个字形，即带斜线的 \\exists；\\not\\exists 也可以使用，但斜线位置可能不准。从逻辑上讲，它等价于 \\forall x\\, \\neg P(x)，许多逻辑学家为了清晰起见更喜欢写成 \\neg \\exists x。在约束变量之后加一个小间距或冒号，如 \\nexists x \\, P(x)。表示唯一存在的符号是 \\exists!。",
  },
  "negation": {
    name: "否定符号",
    meaning: "逻辑否定符号，一个 L 形的钩，放在公式前面表示“非”。",
    usage:
      "逻辑中写 \\neg p 表示非 p，在经典逻辑中有 \\neg\\neg p \\equiv p；\\lnot 是完全等价的别名。有些教材改用 \\sim p、上划线 \\bar{p} 或 p'，在布尔代数和数字电路中尤其常见。\\neg 是普通符号，因此它与其作用对象之间没有间距，这正是期望的效果。德摩根律 \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q 是典型的行间公式。在编程语境中，! 和 \\lnot 都有人使用。",
  },
  "logical-and": {
    name: "逻辑与（合取）",
    meaning: "逻辑与（合取），当且仅当两个运算对象都为真时为真。",
    usage:
      "\\land 是 \\wedge 的别名，在逻辑中选用它是为了提高可读性，如 p \\land q 或 \\forall x\\, (P(x) \\land Q(x))。由于 LaTeX 将其归类为二元运算符，p \\land q 两侧的间距会自动设置，不要手动添加 \\,。对多个公式取合取时，使用大型运算符 \\bigwedge_{i=1}^{n} p_i。在布尔代数中，“与”通常写成乘法形式 pq 或 p \\cdot q。逻辑中用 \\land、外代数中用 \\wedge，可以让源码含义清楚，尽管二者输出完全相同。",
  },
  "logical-or": {
    name: "逻辑或（析取）",
    meaning: "逻辑或（析取），至少有一个运算对象为真时为真。",
    usage:
      "\\lor 是 \\vee 的别名，用于命题逻辑和谓词逻辑：p \\lor \\neg p 是排中律。LaTeX 按二元运算符为它设置间距，因此 p \\lor q 不需要手动调整间距的命令。对多个析取项，使用大型运算符 \\bigvee_{i} p_i。异或是另一个符号：\\oplus 或 \\veebar。布尔代数和电路设计中常把“或”写作 +。逻辑公式中优先使用 \\lor，格论中使用 \\vee，可使源码更易读，尽管二者输出相同。",
  },
  "proves": {
    name: "推出符号（可证）",
    meaning: "十字转门符号，表示右侧公式可以从左侧的假设推导（证明）出来。",
    usage:
      "证明论用 \\Gamma \\vdash \\varphi 表示语法后承，类型论则在类型判断 \\Gamma \\vdash e : \\tau 中使用它。它不同于 \\models，后者表示语义后承（在所有模型中为真）；可靠性定理和完备性定理表明二者在一阶逻辑中一致。其否定形式是 \\nvdash。\\vdash 是关系符，间距会自动处理。对于推理规则，可用 \\frac 或专门的证明树宏包画出横线，上下两侧放含有 \\vdash 的判断。它的镜像符号是 \\dashv。",
  },
  "models": {
    name: "语义蕴涵符号（满足）",
    meaning: "双十字转门：语义蕴涵或满足关系，表示在每个模型中都为真。",
    usage:
      "\\mathcal{M} \\models \\varphi 表示结构 M 满足公式 \\varphi，\\Gamma \\models \\varphi 表示 \\Gamma 的每个模型都满足 \\varphi。它与表示语法可证性的 \\vdash 相对。其否定为 \\not\\models 或专用字形 \\nvDash。相似的 \\vDash 比例略有不同，在某些逻辑中使用，集合论中还与表示力迫的 \\Vdash 一同出现。作为关系符，它两侧都有间距。模型检测中写 s \\models \\phi 表示某个状态满足一个时序公式。",
  },
  "therefore": {
    name: "所以符号",
    meaning: "排成三角形的三个点，读作“所以”，用于引出结论。",
    usage:
      "\\therefore 常见于中小学数学和非正式推导：x + 2 = 5, \\therefore x = 3。正式论文通常更喜欢用“因此”等文字或蕴涵箭头 \\implies。它按关系符排版，因此表达式之间的间距是自动的。倒过来的版本 \\because 表示“因为”。在正文中它仍然必须放在数学模式里，例如 $\\therefore$，除非加载了相应的文本符号替代方案。由于大多数读者都清楚它的含义，它很适合用在篇幅紧张的幻灯片和习题解答中。",
  },
  "because": {
    name: "因为符号",
    meaning: "排成倒三角形的三个点，读作“因为”或“由于”，用于引出理由。",
    usage:
      "\\because 用于引出依据，通常出现在中小学的分步解答中：\\angle A = \\angle B \\quad \\because AB = AC。它是 \\therefore 的镜像，单个点在下方。正式写作通常直接写出“由于”，或用文字注释，如 \\text{(由引理 2)}。作为关系符，它两侧都有间距，在它前面加 \\quad 或 \\qquad 可以把理由与等式分开。在论文中应少用。在证明中，用文字写出理由通常对读者更友好。",
  },
  "contradiction-falsum-bottom": {
    name: "矛盾符号（恒假、底元）",
    meaning: "上钉（底）符号：在逻辑中表示恒假或矛盾，也表示格的最小元。",
    usage:
      "逻辑中用 \\bot 表示永远为假的命题，因此推出 \\bot 就证明了否定，\\neg p 可以定义为 p \\to \\bot。域论和格论用 \\bot 表示底元（最小元），类型论用它表示空类型。\\bot 是普通符号；字形相同但带关系符间距的是 \\perp，表示两个对象相互正交时应使用它。它的对偶是 \\top。在反证法中，有些作者会在出现矛盾的那一步末尾写 \\bot 或 \\Rightarrow\\Leftarrow。",
  },
  "tautology-verum-top": {
    name: "重言式符号（恒真、顶元）",
    meaning: "下钉（顶）符号：表示恒真命题，也表示格的最大元。",
    usage:
      "在逻辑中 \\top 表示重言式，是合取的单位元（p \\land \\top \\equiv p）。格论和域论用它表示顶元（最大元），类型论用它表示单位类型。它也广泛用作上标表示矩阵转置 A^\\top，可替代 A^T 或 A^\\intercal。\\top 是普通符号。不要把它与字母 T 混淆，后者位于基线上且比例不同。它的对偶是 \\bot。",
  },
  "not-equivalent": {
    name: "不等价符号（不同余）",
    meaning: "带斜线的三横线：表示模 n 不同余，或不恒等。",
    usage:
      "数论中当 n 不整除 a - b 时写 a \\not\\equiv b \\pmod{n}，例如费马小定理的条件 a \\not\\equiv 0 \\pmod{p}。前缀 \\not 会在关系符上叠加一条斜线，应紧挨着放在 \\equiv 之前。在某些字体中斜线看起来略微偏离中心，但常用符号字体中没有标准的专用字形，因此通常使用 \\not\\equiv。在逻辑中它表示逻辑上不等价。若只是表示不相等，请改用 \\neq。",
  },
};

export default text;
