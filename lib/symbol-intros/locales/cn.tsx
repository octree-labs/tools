import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** Simplified Chinese (route locale `cn`, language tag `zh`). */
const cn: IntroLocale = {
  languageTag: "zh",
  labels: {
    symbol: "符号",
    command: "命令",
    use: "用途",
    package: "宏包",
    builtIn: "内置",
    copy: "复制",
  },
  intros: {
    arrows: {
      title: "LaTeX 箭头：如何在 LaTeX 中输入箭头",
      intro: (
        <IntroP>
          LaTeX 中的箭头是按方向命名的数学模式命令：输入 <Cmd>$\rightarrow$</Cmd> 得到 &rarr;，
          <Cmd>$\leftarrow$</Cmd> 得到 &larr;，<Cmd>$\Rightarrow$</Cmd> 得到双线箭头
          &rArr;。下表列出了最常用的 12 个箭头及各自所需的宏包；完整的箭头符号列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的箭头",
      use: {
        "\\rightarrow": "右箭头",
        "\\to": "映射到集合、极限（x → ∞）",
        "\\leftarrow": "左箭头、赋值",
        "\\leftrightarrow": "左右双向箭头",
        "\\Rightarrow": "蕴含（双线箭头）",
        "\\Leftrightarrow": "当且仅当",
        "\\mapsto": "函数对应法则，x ↦ x²",
        "\\longrightarrow": "长右箭头",
        "\\uparrow": "上箭头",
        "\\downarrow": "下箭头",
        "\\hookrightarrow": "单射、包含映射",
        "\\xrightarrow{f}": "上方带文字的箭头，长度随文字伸缩",
      },
      faqHeading: "关于 LaTeX 箭头的常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入箭头？",
          answer:
            "箭头是数学符号，需要放在数学模式中：$\\rightarrow$（或简写 $\\to$）得到右箭头，$\\leftarrow$ 得到左箭头，$\\leftrightarrow$ 得到左右箭头。把命令首字母大写即得到双线版本，例如 \\Rightarrow 和 \\Leftrightarrow。这些命令都不需要额外宏包。",
        },
        {
          question: "如何在 LaTeX 中输入长箭头？",
          answer:
            "在命令名前加 long：\\longrightarrow、\\longleftarrow 和 \\longleftrightarrow；双线长箭头用 \\Longrightarrow 和 \\Longleftrightarrow，长的映射箭头用 \\longmapsto。如果箭头需要随标注文字伸长，请改用 amsmath 提供的 \\xrightarrow{...}。",
        },
        {
          question: "如何在 LaTeX 中给箭头上方加文字？",
          answer:
            "加载 amsmath 后使用 \\xrightarrow{text} 或 \\xleftarrow{text}，箭头会自动伸长以容纳标注。可选参数用于在箭头下方加文字：\\xrightarrow[below]{above}。如果只需要固定长度的箭头，也可以写 \\overset{f}{\\rightarrow}。",
        },
        {
          question: "如何在 LaTeX 中输入双线箭头？",
          answer:
            "\\Rightarrow 得到 ⇒，\\Leftarrow 得到 ⇐，\\Leftrightarrow 得到 ⇔。在逻辑公式中，amsmath 的 \\implies 和内置的 \\iff 给出同样的箭头，但两侧间距更宽。如需上下叠放的两个箭头，可用 \\rightleftarrows（amssymb），化学平衡则用 \\rightleftharpoons。",
        },
        {
          question: "如何在文本模式中使用箭头？",
          answer:
            "在数学模式之外直接写 \\rightarrow 会报“Missing $ inserted”错误。可以写成 $\\rightarrow$，或者使用文本模式命令 \\textrightarrow、\\textleftarrow、\\textuparrow 和 \\textdownarrow，它们属于 LaTeX 内核（textcomp），并与周围正文字体一致。",
        },
      ],
    },
    math: {
      title: "LaTeX 数学符号：基础必备",
      intro: (
        <IntroP>
          LaTeX 数学符号只能在数学模式中使用，行内公式用 <Cmd>{"$...$"}</Cmd> 包裹，独立显示的公式用{" "}
          <Cmd>{"\\[...\\]"}</Cmd>。日常符号都是内置的：算术运算有 <Cmd>{"\\pm"}</Cmd>、<Cmd>{"\\times"}</Cmd>、
          <Cmd>{"\\div"}</Cmd> 和 <Cmd>{"\\cdot"}</Cmd>，比较关系有 <Cmd>{"\\neq"}</Cmd>、<Cmd>{"\\leq"}</Cmd>、
          <Cmd>{"\\geq"}</Cmd> 和 <Cmd>{"\\approx"}</Cmd>，此外还有 <Cmd>{"\\infty"}</Cmd>、
          <Cmd>{"\\sqrt{x}"}</Cmd> 和 <Cmd>{"\\frac{a}{b}"}</Cmd>。上标和下标分别用 <Cmd>{"^"}</Cmd> 和{" "}
          <Cmd>{"_"}</Cmd>，多于一个字符时要加花括号：<Cmd>{"x^{2n}"}</Cmd>。<Cmd>{"\\mathbb{R}"}</Cmd> 和{" "}
          <Cmd>{"\\therefore"}</Cmd> 等额外符号来自 amssymb 宏包。下表列出了最常用的数学符号及各自所需的宏包；完整列表见下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：常用数学符号",
      use: {
        "\\pm": "正负号",
        "\\times": "乘号（叉乘）",
        "\\div": "除号",
        "\\cdot": "居中点，乘法",
        "\\neq": "不等于",
        "\\leq": "小于或等于",
        "\\approx": "约等于",
        "\\infty": "无穷大",
        "\\sqrt{x}": "平方根（n 次方根用 \\sqrt[n]{x}）",
        "\\frac{a}{b}": "分数",
        "x^{2n}": "上标（指数）",
        "\\mathbb{R}": "实数集",
      },
      faqHeading: "关于 LaTeX 数学符号的常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入数学符号？",
          answer:
            "把它们放进数学模式：行内公式用 $...$，独立公式用 \\[...\\] 或 equation 环境，然后写出符号对应的命令，例如 $a \\times b \\neq c$。在数学模式之外使用数学命令会报 Missing $ inserted 错误。",
        },
        {
          question: "LaTeX 数学符号需要加载哪些宏包？",
          answer:
            "大多数符号是内置的。\\usepackage{amsmath} 提供 align 等环境以及 \\text、\\operatorname 等命令，\\usepackage{amssymb} 提供 \\mathbb{R}、\\therefore、\\nexists 和 \\varnothing 等额外符号。mathtools 在 amsmath 的基础上做了修正并增加了更多工具。",
        },
        {
          question: "如何查找某个符号的 LaTeX 命令？",
          answer:
            "在本页或各分类页面中搜索，点击卡片即可复制命令。如果只知道符号的样子，可以用 Detexify 手绘符号来获得匹配的命令；Comprehensive LaTeX Symbol List 则收录了数千个符号。",
        },
      ],
    },
    "set-theory": {
      title: "LaTeX 集合论符号：子集、属于、并集与空集",
      intro: (
        <IntroP>
          LaTeX 的集合论符号大多是内置的。属于是 <Cmd>{"\\in"}</Cmd>（∈），不属于是 <Cmd>{"\\notin"}</Cmd>；子集是{" "}
          <Cmd>{"\\subset"}</Cmd>（⊂），子集或相等是 <Cmd>{"\\subseteq"}</Cmd>（⊆）；并集和交集是 <Cmd>{"\\cup"}</Cmd> 和{" "}
          <Cmd>{"\\cap"}</Cmd>，差集是 <Cmd>{"\\setminus"}</Cmd>，空集是 <Cmd>{"\\emptyset"}</Cmd>（∅）。少数符号需要 amssymb：更圆的空集{" "}
          <Cmd>{"\\varnothing"}</Cmd>、真子集 <Cmd>{"\\subsetneq"}</Cmd>，以及 <Cmd>{"\\mathbb{N}"}</Cmd> 和{" "}
          <Cmd>{"\\mathbb{R}"}</Cmd> 等数集。花括号必须转义，因此集合写作 <Cmd>{"\\{1, 2, 3\\}"}</Cmd>。下表列出了最常用的集合论符号及各自所需的宏包；完整列表见下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的集合论符号",
      use: {
        "\\in": "属于",
        "\\notin": "不属于",
        "\\subset": "子集",
        "\\subseteq": "子集或相等",
        "\\subsetneq": "真子集（不相等）",
        "\\cup": "并集",
        "\\cap": "交集",
        "A \\setminus B": "差集",
        "\\emptyset": "空集（amssymb 中的 \\varnothing）",
        "\\mathbb{R}": "实数集（另有 \\mathbb{N}、\\mathbb{Z}、\\mathbb{Q}）",
        "\\{ x \\in A \\mid x > 0 \\}": "集合构造记号（描述法）",
        "\\mathcal{P}(A)": "幂集",
      },
      faqHeading: "关于 LaTeX 集合论符号的常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入子集符号？",
          answer:
            "\\subset 得到 ⊂，\\subseteq 得到 ⊆，两者都是内置的：$A \\subseteq B$。若要表示明确排除相等的真子集，amssymb 提供 \\subsetneq（⊊）。对应的超集命令是 \\supset、\\supseteq 和 \\supsetneq，用 \\not\\subset 表示否定。",
        },
        {
          question: "如何在 LaTeX 中输入属于符号？",
          answer:
            "\\in 输出 ∈，例如 $x \\in A$；\\notin 输出 ∉。反向的 \\ni（∋）表示“包含某元素”。这三个命令都是内置的。",
        },
        {
          question: "如何在 LaTeX 中输入空集符号？",
          answer:
            "\\emptyset 输出 ∅，是内置命令。很多作者更喜欢形状更圆的 \\varnothing，它需要 \\usepackage{amssymb}。无论哪种，都不要用 \\phi 或 \\O，它们分别是希腊字母和北欧字母。",
        },
      ],
    },
    logic: {
      title: "LaTeX 中的逻辑符号",
      intro: (
        <>
          <IntroP>
            命题逻辑的联结词是 <Cmd>\land</Cmd>（与）、<Cmd>\lor</Cmd>（或）和 <Cmd>\lnot</Cmd>（非）；
            <Cmd>\wedge</Cmd>、<Cmd>\vee</Cmd> 和 <Cmd>\neg</Cmd> 是完全等价的别名。蕴含和等价最好用{" "}
            <Cmd>\implies</Cmd>（来自 amsmath）和 <Cmd>\iff</Cmd> 表示，它们会在箭头两侧加上关系符间距；直接用{" "}
            <Cmd>\Rightarrow</Cmd> 和 <Cmd>\Leftrightarrow</Cmd> 也可以。量词是 <Cmd>\forall</Cmd> 和{" "}
            <Cmd>\exists</Cmd>，<Cmd>\nexists</Cmd> 表示“不存在”，真和假这两个常量是 <Cmd>\top</Cmd> 和{" "}
            <Cmd>\bot</Cmd>。
          </IntroP>
          <IntroP>
            证明论和语义学有各自的推导符号：<Cmd>\vdash</Cmd> 表示“可证”即语法蕴涵，<Cmd>\models</Cmd>（也可写作{" "}
            <Cmd>\vDash</Cmd>）表示“满足”即语义蕴涵，<Cmd>\nvdash</Cmd> 是前者的否定。推理标记{" "}
            <Cmd>\therefore</Cmd> 和 <Cmd>\because</Cmd> 来自 amssymb，<Cmd>\nexists</Cmd> 和 <Cmd>\vDash</Cmd> 也是。公式之间的逻辑等价常用{" "}
            <Cmd>\equiv</Cmd> 表示，异或是 <Cmd>\oplus</Cmd>，谢费尔竖线（与非）是 <Cmd>\uparrow</Cmd>。模态算子{" "}
            <Cmd>\Box</Cmd> 和 <Cmd>\Diamond</Cmd> 列在<IntroLink href="/cn/symbols/modal-logic">模态逻辑符号</IntroLink>页面。
          </IntroP>
          <IntroP>
            这些符号都只能用于数学模式，所以要用 <Cmd>$...$</Cmd> 包裹，并在导言区加载{" "}
            <Cmd>\usepackage{"{amsmath, amssymb}"}</Cmd>。一个典型的公式：<Cmd>\forall x\, (P(x) \implies Q(x))</Cmd>。想了解它们如何与集合、函数和关系配合使用，请阅读我们的{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              LaTeX 数学表达式指南
            </IntroLink>
            。
          </IntroP>
        </>
      ),
    },
    physics: {
      title: "LaTeX 中的量子力学符号",
      intro: (
        <IntroP>
          物理学家最常输入的量子力学符号都内置于 LaTeX：约化普朗克常数 <Cmd>\hbar</Cmd>、左矢{" "}
          <Cmd>\langle \psi |</Cmd> 和右矢 <Cmd>| \psi \rangle</Cmd>、带帽子的算符如 <Cmd>\hat{"{H}"}</Cmd>、伴随{" "}
          <Cmd>A^\dagger</Cmd>、拉普拉斯算子 <Cmd>\nabla^2</Cmd> 以及时间导数 <Cmd>\partial_t</Cmd>。若想更简洁地书写狄拉克符号，braket 和 physics 宏包提供了{" "}
          <Cmd>\bra{"{}"}</Cmd>、<Cmd>\ket{"{}"}</Cmd> 和 <Cmd>\braket{"{}"}</Cmd>。下表列出了最常用的量子物理符号及各自所需的宏包；完整的物理符号列表见下方。
        </IntroP>
      ),
      use: {
        "\\hbar": "约化普朗克常数（h-bar）",
        "\\langle \\psi |": "左矢（bra），用基本命令构成",
        "| \\psi \\rangle": "右矢（ket），用基本命令构成",
        "\\langle \\phi | \\psi \\rangle": "内积（bra-ket）",
        "\\bra{\\psi}": "左矢（bra）",
        "\\ket{\\psi}": "右矢（ket）",
        "\\braket{\\phi|\\psi}": "内积（physics 宏包写作 \\braket{\\phi}{\\psi}）",
        "\\hat{H}": "哈密顿算符",
        "A^\\dagger": "厄米共轭（dagger）",
        "\\nabla^2": "拉普拉斯算子",
        "\\partial_t \\psi": "时间导数",
        "\\otimes": "态的张量积",
      },
      faqHeading: "常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中书写狄拉克（bra-ket）符号？",
          answer:
            "不用任何宏包时，左矢写作 \\langle \\psi |，右矢写作 | \\psi \\rangle，内积写作 \\langle \\phi | \\psi \\rangle。加载 \\usepackage{braket} 后可以写 \\bra{\\psi}、\\ket{\\psi} 和 \\braket{\\phi|\\psi}；加载 \\usepackage{physics} 时内积改为两个参数：\\braket{\\phi}{\\psi}。两个宏包都定义了这些命令，只能加载其中一个。",
        },
        {
          question: "如何在 LaTeX 中输入 h-bar（约化普朗克常数）？",
          answer:
            "约化普朗克常数 \u210f 的命令是 \\hbar，它是内置的，需在数学模式中使用：$\\hbar$。这样薛定谔方程可写作 i\\hbar \\partial_t \\psi = \\hat{H} \\psi。",
        },
        {
          question: "如何在 LaTeX 中书写算符和 dagger？",
          answer:
            "用帽子标记算符，例如 \\hat{H} 或 \\hat{p}；厄米共轭用上标 \\dagger 表示：A^\\dagger。期望值写作 \\langle \\hat{A} \\rangle，或使用 physics 宏包的 \\expval{A}；对易子写作 [\\hat{x}, \\hat{p}] = i\\hbar。",
        },
      ],
    },
    functions: {
      title: "LaTeX 中的函数复合与同构符号",
      intro: (
        <IntroP>
          LaTeX 中的函数复合符号是 <Cmd>\circ</Cmd>，例如 <Cmd>g \circ f</Cmd>；同构符号是 <Cmd>\cong</Cmd>（&cong;），较弱的等价关系用{" "}
          <Cmd>\simeq</Cmd>，这三个命令都是内置的。函数的声明写作 <Cmd>f \colon A \to B</Cmd>，其中{" "}
          <Cmd>\colon</Cmd> 能给出正确的间距；对应法则用 <Cmd>\mapsto</Cmd>，例如 <Cmd>x \mapsto x^2</Cmd>。恒等映射是 amsmath 中的{" "}
          <Cmd>\operatorname{"{id}"}</Cmd>。下表列出了最常用的函数与映射命令及各自所需的宏包；完整的符号列表见下方。
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "从 A 到 B 的函数",
        "x \\mapsto x^2": "映射到（对应法则）",
        "g \\circ f": "复合，先 f 后 g",
        "f^{-1}": "反函数",
        "\\cong": "同构于",
        "\\simeq": "同伦等价、弱同构",
        "\\xrightarrow{\\sim}": "同构箭头",
        "\\operatorname{id}_A": "恒等映射",
        "\\hookrightarrow": "单射、包含映射",
        "\\twoheadrightarrow": "满射",
        "f|_A": "在 A 上的限制",
      },
      faqHeading: "常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中书写函数复合？",
          answer:
            "使用内置的 \\circ：$g \\circ f$ 输出 g ∘ f，读作“g 复合 f”（先 f 后 g）。对应法则写作 (g \\circ f)(x) = g(f(x))。不要用小写字母 o 或 \\cdot，它们的大小和间距都不对。",
        },
        {
          question: "如何在 LaTeX 中输入同构符号？",
          answer:
            "标准的同构符号 ≅ 是内置的 \\cong：$G \\cong H$。同伦等价或更弱的概念用 \\simeq（≃）；表示同构的箭头用 amsmath 中的 \\xrightarrow{\\sim}，或者用 \\xrightarrow{\\cong} 把 \\cong 放在箭头上方。",
        },
        {
          question: "如何在 LaTeX 中写出 f: A → B？",
          answer:
            "写作 f \\colon A \\to B。\\colon 命令采用标点符号的间距；普通冒号按关系符处理，会在 A 前留下过大的空白。对应法则用 \\mapsto，例如 x \\mapsto x^2。",
        },
      ],
    },
    chemistry: {
      title: "LaTeX 中的化学符号：反应箭头、化学平衡与化学式",
      intro: (
        <IntroP>
          在 LaTeX 中输入化学符号，大部分工作可以交给 mhchem 宏包：<Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> 就能排出一整个反应式，元素符号保持直立，下标和生成箭头也自动处理。不用 mhchem 时，生成箭头是{" "}
          <Cmd>{"\\rightarrow"}</Cmd>，平衡符号是 <Cmd>{"\\rightleftharpoons"}</Cmd>，化学式在数学模式中写作{" "}
          <Cmd>{"\\mathrm{H_2O}"}</Cmd>，以保证元素字母直立。反应条件可以用 amsmath 的{" "}
          <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> 写在可伸缩的箭头上方。下表列出了最常用的化学符号及各自所需的宏包；完整列表见下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：反应式、箭头与化学式",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "完整的反应式",
        "\\ce{A <=> B}": "mhchem 中的化学平衡",
        "\\rightarrow": "生成（反应箭头）",
        "\\rightleftharpoons": "平衡符号（鱼叉箭头）",
        "\\xrightarrow{\\Delta}": "上方标注加热或反应条件的箭头",
        "\\mathrm{H_2O}": "数学模式中的化学式",
        "\\mathrm{Na^+}": "离子电荷",
        "{}^{14}_{6}\\mathrm{C}": "同位素（质量数和原子序数）",
        "\\Delta H^\\circ": "标准焓变",
        "\\uparrow": "生成气体",
        "\\downarrow": "生成沉淀",
        "\\ce{HC#CH}": "三键（双键用 =）",
      },
      faqHeading: "关于 LaTeX 化学符号的常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入反应生成箭头？",
          answer:
            "在数学模式中，生成箭头是 \\rightarrow，更长的用 \\longrightarrow。使用 mhchem 时，在 \\ce{...} 中输入 -> 即可，例如 \\ce{A + B -> C}。要在箭头上方标注反应条件，可用 amsmath 的 \\xrightarrow{\\Delta}，或在 \\ce 中写 ->[\\Delta]。",
        },
        {
          question: "如何在 LaTeX 中输入化学平衡符号？",
          answer:
            "平衡符号 ⇌ 是内置的 \\rightleftharpoons：$\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$。在 mhchem 中，在 \\ce{...} 里写 <=>；它还提供 <=>> 和 <<=>，分别表示平衡偏向右侧或左侧。",
        },
        {
          question: "如何在 LaTeX 中书写带下标的化学式？",
          answer:
            "使用 mhchem 的 \\ce{H2SO4}，它会把数字排成下标并保持字母直立。不用 mhchem 时，在数学模式中写 \\mathrm{H_2SO_4}；直接写 H_2SO_4 会把字母排成斜体，看起来像变量。",
        },
      ],
    },
    probability: {
      title: "LaTeX 中的概率与统计符号",
      intro: (
        <IntroP>
          LaTeX 中的概率符号是 <Cmd>\Pr</Cmd> 或 <Cmd>\mathbb{"{P}"}</Cmd>，期望算子是{" "}
          <Cmd>\mathbb{"{E}"}[X]</Cmd>。下表列出了最常用的 8 个命令及各自所需的宏包；完整的概率与统计符号列表见下方。
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "概率算子（直立的 Pr）",
        "\\mathbb{P}(A)": "概率符号，黑板粗体",
        "\\mathbb{E}[X]": "期望算子",
        "\\operatorname{Var}(X)": "方差",
        "\\operatorname{Cov}(X, Y)": "协方差",
        "P(A \\mid B)": "条件概率",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "服从某分布（正态分布）",
        "\\binom{n}{k}": "二项式系数",
      },
      faqHeading: "常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入概率符号？",
          answer:
            "使用内置算子 \\Pr，例如 \\Pr(A)，得到带算子间距的直立 Pr；或者在加载 \\usepackage{amssymb} 后使用黑板粗体 \\mathbb{P}(A)。条件概率写作 P(A \\mid B)；\\mid 能给竖线正确的间距，普通的 | 则不能。",
        },
        {
          question: "如何在 LaTeX 中输入期望算子？",
          answer:
            "写 \\mathbb{E}[X]（amssymb）得到黑板粗体 E，或写 \\operatorname{E}[X]（amsmath）得到直立 E。若要重复使用，可在导言区用 \\DeclareMathOperator{\\E}{\\mathbb{E}} 声明一次，之后直接写 \\E[X]。",
        },
        {
          question: "如何在 LaTeX 中书写方差？",
          answer:
            "方差没有内置命令，可以借助 amsmath 写 \\operatorname{Var}(X)，或在导言区声明 \\DeclareMathOperator{\\Var}{Var} 后使用 \\Var(X)。标准差是 \\sigma，方差也可以写作 \\sigma^2。",
        },
      ],
    },
    greek: {
      title: "LaTeX 中的希腊字母：完整的希腊字母表",
      intro: (
        <IntroP>
          在 LaTeX 中，希腊字母在数学模式下写作反斜杠加字母名称：<Cmd>{"\\alpha"}</Cmd>、<Cmd>{"\\beta"}</Cmd>、
          <Cmd>{"\\gamma"}</Cmd>、<Cmd>{"\\pi"}</Cmd>。把名称首字母大写即得到大写形式，例如 <Cmd>{"\\Gamma"}</Cmd>、
          <Cmd>{"\\Delta"}</Cmd> 和 <Cmd>{"\\Omega"}</Cmd>；与拉丁字母同形的大写字母（如 Alpha 和 Beta）没有对应命令，直接输入 A 和 B 即可。有几个字母带有变体字形：
          <Cmd>{"\\varepsilon"}</Cmd>、<Cmd>{"\\vartheta"}</Cmd>、<Cmd>{"\\varphi"}</Cmd> 和 <Cmd>{"\\varsigma"}</Cmd>。这些命令都是内置的。下表列出了最常用的希腊字母；完整的 LaTeX 希腊字母表见下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的希腊字母",
      use: {
        "\\alpha": "Alpha",
        "\\beta": "Beta",
        "\\gamma": "Gamma（大写为 \\Gamma）",
        "\\delta": "Delta（大写为 \\Delta）",
        "\\epsilon": "Epsilon ϵ（ε 用 \\varepsilon）",
        "\\theta": "Theta（变体 \\vartheta，大写为 \\Theta）",
        "\\lambda": "Lambda（大写为 \\Lambda）",
        "\\mu": "Mu",
        "\\pi": "Pi（大写为 \\Pi）",
        "\\sigma": "Sigma（大写为 \\Sigma）",
        "\\phi": "Phi ϕ（φ 用 \\varphi，大写为 \\Phi）",
        "\\omega": "Omega（大写为 \\Omega）",
      },
      faqHeading: "关于 LaTeX 希腊字母的常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入希腊字母？",
          answer:
            "在数学模式中输入反斜杠加字母名称：$\\alpha$、$\\beta$、$\\gamma$、$\\theta$、$\\pi$。大写形式只需把首字母大写：\\Gamma、\\Delta、\\Theta、\\Lambda、\\Xi、\\Pi、\\Sigma、\\Upsilon、\\Phi、\\Psi、\\Omega。不需要任何宏包。",
        },
        {
          question: "为什么 LaTeX 中没有 \\Alpha 命令？",
          answer:
            "大写的 Alpha、Beta、Epsilon、Zeta、Eta、Iota、Kappa、Mu、Nu、Omicron、Rho、Tau 和 Chi 与拉丁字母外形相同，因此 LaTeX 没有定义它们，直接输入 A、B、E 等即可。小写的 omicron 同样就是 o。",
        },
        {
          question: "如何在 LaTeX 中输入粗体希腊字母？",
          answer:
            "使用 amsmath 的 \\boldsymbol{\\alpha} 或 bm 宏包的 \\bm{\\alpha}。\\mathbf 只对拉丁字母、数字和大写希腊字母起作用，所以 \\mathbf{\\alpha} 不会改变 alpha 的样子。",
        },
      ],
    },
    quantifiers: {
      title: "LaTeX 中的量词：任意、存在与属于",
      intro: (
        <IntroP>
          LaTeX 中的量词是 <Cmd>{"\\forall"}</Cmd>（任意，∀）和 <Cmd>{"\\exists"}</Cmd>（存在，∃），两者都是内置的；表示“不存在”的{" "}
          <Cmd>{"\\nexists"}</Cmd> 来自 amssymb，唯一存在写作 <Cmd>{"\\exists!"}</Cmd>。量化命题通常把它们与属于符号{" "}
          <Cmd>{"\\in"}</Cmd> 以及逗号或冒号等分隔符组合使用：<Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>。否定是{" "}
          <Cmd>{"\\neg"}</Cmd>，蕴含和等价是 <Cmd>{"\\implies"}</Cmd> 和 <Cmd>{"\\iff"}</Cmd>。下表列出了最常用的量词符号及各自所需的宏包；完整列表见下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：量词与逻辑联结词",
      use: {
        "\\forall": "任意（对所有）",
        "\\exists": "存在",
        "\\nexists": "不存在",
        "\\exists!": "存在唯一",
        "\\forall x \\in A": "对 A 中所有 x",
        "\\in": "属于",
        "\\notin": "不属于",
        "\\neg": "非",
        "\\land": "与",
        "\\lor": "或",
        "\\implies": "蕴含",
        "\\iff": "当且仅当",
      },
      faqHeading: "关于 LaTeX 量词的常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入任意量词（for all）？",
          answer:
            "在数学模式中使用 \\forall：$\\forall x \\in \\mathbb{R}$ 输出 ∀x ∈ ℝ。它是内置命令。在约束变量后加一个分隔符，例如 \\forall x,\\ P(x) 或 \\forall x : P(x)，可以让公式更易读。",
        },
        {
          question: "如何在 LaTeX 中输入存在和不存在？",
          answer:
            "存在是内置的 \\exists（∃）。不存在是 \\nexists（∄），需要 \\usepackage{amssymb}；\\not\\exists 不需要宏包也能用，但效果没那么美观。唯一存在写作 \\exists!。",
        },
        {
          question: "如何在 LaTeX 中表示“使得”（such that）？",
          answer:
            "在集合构造记号中用竖线或冒号：\\{ x \\in A \\mid x > 0 \\} 或 \\{ x : x > 0 \\}；\\mid 能给出正确的间距。在量化命题中常用逗号或 \\text{ s.t. }，例如 \\exists x \\in A \\text{ s.t. } x > 0。",
        },
      ],
    },
  },
};

export default cn;
