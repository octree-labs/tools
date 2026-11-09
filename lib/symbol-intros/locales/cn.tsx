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
        "\\times": "乘号",
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
    boolean: {
      title: "LaTeX 中的布尔代数符号：与、或、异或",
      intro: (
        <IntroP>
          LaTeX 中的布尔代数符号沿用了逻辑联结词：与（AND）是 <Cmd>{"\\land"}</Cmd>（&and;），或（OR）是{" "}
          <Cmd>{"\\lor"}</Cmd>（&or;），非（NOT）是 <Cmd>{"\\lnot"}</Cmd>（&not;）。异或（XOR）写作{" "}
          <Cmd>{"\\oplus"}</Cmd>（&oplus;），也可以用 amssymb 中的 <Cmd>{"\\veebar"}</Cmd>。蕴含和等价是{" "}
          <Cmd>{"\\Rightarrow"}</Cmd> 和 <Cmd>{"\\iff"}</Cmd>，真、假两个常量是 <Cmd>{"\\top"}</Cmd> 和{" "}
          <Cmd>{"\\bot"}</Cmd>，量词是 <Cmd>{"\\forall"}</Cmd> 和 <Cmd>{"\\exists"}</Cmd>。它们都只能用于数学模式。下表列出了最常用的命令及各自所需的宏包；完整的逻辑门符号列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的布尔运算符号",
      use: {
        "\\land": "与（别名 \\wedge）",
        "\\lor": "或（别名 \\vee）",
        "\\lnot": "非（别名 \\neg）",
        "\\overline{A}": "非，上划线记法",
        "\\oplus": "异或",
        "\\veebar": "异或，逻辑学写法",
        "\\barwedge": "与非",
        "\\Rightarrow": "蕴含",
        "\\iff": "当且仅当（等价）",
        "\\top": "真，1",
        "\\bot": "假，0",
        "\\forall x \\, \\exists y": "对所有、存在",
      },
      faqHeading: "LaTeX 布尔代数符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入与和或符号？",
          answer:
            "与（∧）是 \\land 或其别名 \\wedge，或（∨）是 \\lor 或 \\vee。二者都是内置命令，需放在数学模式中：$A \\land B$、$A \\lor B$。非是 \\lnot 或 \\neg。在电路记法中，也可以用 A \\cdot B 表示与，A + B 表示或，\\overline{A} 表示非。",
        },
        {
          question: "如何在 LaTeX 中输入异或？",
          answer:
            "使用内置的 \\oplus（⊕）：$A \\oplus B$。逻辑学教材有时用 \\veebar（⊻），它需要 \\usepackage{amssymb}。同或通常写作 \\odot 或 \\overline{A \\oplus B}。",
        },
        {
          question: "LaTeX 中的布尔代数符号需要哪个宏包？",
          answer:
            "常用符号都不需要：\\land、\\lor、\\lnot、\\oplus、\\Rightarrow、\\iff、\\top、\\bot、\\forall 和 \\exists 都是内置命令。\\veebar 和 \\barwedge 需要加载 amssymb，\\implies 需要 amsmath。",
        },
      ],
    },
    brackets: {
      title: "LaTeX 括号：花括号、尖括号、取整与范数",
      intro: (
        <IntroP>
          LaTeX 中的括号分为两类：一类可以直接输入，如 <Cmd>{"("}</Cmd>、<Cmd>{")"}</Cmd>、<Cmd>{"["}</Cmd> 和{" "}
          <Cmd>{"]"}</Cmd>；另一类需要命令，如花括号 <Cmd>{"\\{"}</Cmd> 和 <Cmd>{"\\}"}</Cmd>，尖括号{" "}
          <Cmd>{"\\langle"}</Cmd> 和 <Cmd>{"\\rangle"}</Cmd>，向下取整 <Cmd>{"\\lfloor"}</Cmd> 和{" "}
          <Cmd>{"\\rfloor"}</Cmd>，以及范数 <Cmd>{"\\lVert"}</Cmd> 和 <Cmd>{"\\rVert"}</Cmd>。在任意一对括号前加上{" "}
          <Cmd>{"\\left"}</Cmd> 和 <Cmd>{"\\right"}</Cmd>，LaTeX 就会按内容（例如分式）自动调整括号大小。双方括号需要 stmaryrd 宏包。下表列出了最常用的括号和定界符及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的括号",
      use: {
        "\\left( \\frac{a}{b} \\right)": "随内容自动伸缩的圆括号",
        "\\{ x \\}": "花括号（需转义）",
        "\\langle x \\rangle": "尖括号、内积",
        "\\lfloor x \\rfloor": "向下取整",
        "\\lceil x \\rceil": "向上取整",
        "\\lvert x \\rvert": "绝对值",
        "\\lVert x \\rVert": "范数",
        "\\llbracket x \\rrbracket": "双方括号",
        "\\bigl( x \\bigr)": "手动指定大小：\\big、\\Big、\\bigg、\\Bigg",
        "[a, b)": "半开区间",
        "\\underbrace{a + b}_{n}": "表达式下方的花括号（上方用 \\overbrace）",
      },
      faqHeading: "LaTeX 括号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入花括号？",
          answer:
            "花括号是 LaTeX 的分组字符，直接输入 { 或 } 不会显示出来。需要转义：\\{ 和 \\} 在文本和数学模式中都可用，例如 $\\{1, 2, 3\\}$。若要花括号随内容伸缩，使用 \\left\\{ 和 \\right\\}；\\lbrace 和 \\rbrace 是对应的命名命令。",
        },
        {
          question: "如何在 LaTeX 中输入尖括号？",
          answer:
            "使用 \\langle 和 \\rangle，例如 $\\langle u, v \\rangle$。不要用键盘上的 < 和 >：它们是关系符号，形状和间距都不同。内容较高时写 \\left\\langle ... \\right\\rangle。",
        },
        {
          question: "如何在 LaTeX 中输入双方括号？",
          answer:
            "加载 \\usepackage{stmaryrd}，然后写 \\llbracket x \\rrbracket，得到语义学和整数区间中使用的双方括号 ⟦x⟧。不用宏包时，可以写 [\\![ x ]\\!]，用负的细间距把两个方括号挤在一起来模拟。",
        },
      ],
    },
    calculus: {
      title: "LaTeX 中的微积分符号：导数、积分与极限",
      intro: (
        <IntroP>
          LaTeX 中的核心微积分符号都是内置的。导数写成分式 <Cmd>{"\\frac{dy}{dx}"}</Cmd> 或撇号形式{" "}
          <Cmd>{"f'(x)"}</Cmd>；偏导数使用 <Cmd>{"\\partial"}</Cmd>，例如{" "}
          <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>；积分是 <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>；极限是{" "}
          <Cmd>{"\\lim_{x \\to 0}"}</Cmd>。<Cmd>{"\\iint"}</Cmd> 和 <Cmd>{"\\iiint"}</Cmd> 等重积分来自 amsmath，physics 宏包还提供了{" "}
          <Cmd>{"\\dv"}</Cmd> 和 <Cmd>{"\\pdv"}</Cmd> 等快捷命令。下表列出了最常用的微积分符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：导数、积分与极限",
      use: {
        "\\frac{dy}{dx}": "导数（莱布尼茨记法）",
        "f'(x)": "导数（撇号记法）；二阶导数写 f''(x)",
        "\\frac{d^2 y}{dx^2}": "二阶导数",
        "\\frac{\\partial f}{\\partial x}": "偏导数",
        "\\dot{x}": "对时间的导数（牛顿点记法）；二阶写 \\ddot{x}",
        "\\int_a^b f(x)\\,dx": "定积分",
        "\\iint_D f\\,dA": "二重积分（三重积分用 \\iiint）",
        "\\oint_C": "围道积分（闭合曲线积分）",
        "\\lim_{x \\to 0}": "极限",
        "\\nabla f": "梯度",
        "\\dv{f}{x}": "导数快捷命令",
        "\\pdv{f}{x}": "偏导数快捷命令",
      },
      faqHeading: "LaTeX 微积分符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入导数？",
          answer:
            "在数学模式中把它写成分式：dy/dx 写作 $\\frac{dy}{dx}$，二阶导数写作 $\\frac{d^2y}{dx^2}$。撇号记法是 f'(x) 和 f''(x)，牛顿点记法是 \\dot{x} 和 \\ddot{x}。这些都是内置的；physics 宏包另外提供 \\dv{y}{x} 作为快捷写法。",
        },
        {
          question: "如何在 LaTeX 中输入偏导数？",
          answer:
            "在分式中使用内置的 \\partial 符号：$\\frac{\\partial f}{\\partial x}$；二阶混合偏导数写作 $\\frac{\\partial^2 f}{\\partial x \\partial y}$。加载 \\usepackage{physics} 后，\\pdv{f}{x} 和 \\pdv{f}{x}{y} 会得到相同的输出。",
        },
        {
          question: "如何在 LaTeX 中输入带上下限的积分？",
          answer:
            "给 \\int 加上下标和上标：$\\int_a^b f(x)\\,dx$。加上 \\limits（\\int\\limits_a^b）可以把上下限放在积分号的正上方和正下方。二重和三重积分请加载 amsmath 并使用 \\iint 和 \\iiint，它们能正确处理积分号之间的间距；\\oint 输出闭合围道积分。",
        },
      ],
    },
    combinatorics: {
      title: "LaTeX 中的组合数与阶乘：组合数学符号",
      intro: (
        <IntroP>
          要在 LaTeX 中输入“从 n 个中选 k 个”的组合数，请加载 amsmath 并使用 <Cmd>{"\\binom{n}{k}"}</Cmd>，它会把二项式系数放在圆括号中输出，并根据行内或独立公式自动调整大小；<Cmd>{"\\dbinom"}</Cmd> 和{" "}
          <Cmd>{"\\tbinom"}</Cmd> 分别强制使用大号和小号。阶乘在 LaTeX 中完全不需要命令：<Cmd>{"n!"}</Cmd> 就是字母加感叹号，所以二项式系数公式写作{" "}
          <Cmd>{"\\frac{n!}{k!(n-k)!}"}</Cmd>。下表列出了最常用的组合数学命令及各自所需的宏包；完整的符号列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：组合数、阶乘与排列",
      use: {
        "\\binom{n}{k}": "n 选 k（二项式系数）",
        "\\dbinom{n}{k}": "独立公式大小的二项式系数，行内也适用",
        "\\tbinom{n}{k}": "文本大小的二项式系数，独立公式中也适用",
        "{n \\choose k}": "Plain TeX 的组合数写法（使用 amsmath 时应避免）",
        "n!": "阶乘",
        "n!!": "双阶乘",
        "\\frac{n!}{k!(n-k)!}": "二项式系数公式",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "多项式系数",
        "P(n, k) = \\frac{n!}{(n-k)!}": "排列数（nPr）",
        "n^{\\underline{k}}": "下降阶乘",
      },
      faqHeading: "LaTeX 组合数学符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入组合数 n 选 k？",
          answer:
            "加载 amsmath 并写 \\binom{n}{k}，它会输出圆括号中上下排列的 n 和 k，并根据行内或独立公式自动调整大小。用 \\dbinom{n}{k} 强制使用大号的独立公式尺寸，用 \\tbinom{n}{k} 使用小号的文本尺寸。Plain TeX 写法 {n \\choose k} 也能用，但 amsmath 会对此发出警告。",
        },
        {
          question: "如何在 LaTeX 中输入阶乘？",
          answer:
            "阶乘不需要任何命令：在数学模式中直接写 n!。双阶乘是 n!!；对于表达式，先用圆括号括起来，例如 (n+1)!。二项式系数公式写作 \\frac{n!}{k!(n-k)!}。",
        },
        {
          question: "如何在 LaTeX 中输入多项式系数？",
          answer:
            "沿用 \\binom，在下方参数中写一个列表：\\binom{n}{k_1, k_2, \\ldots, k_m}。也可以展开写成 \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}。",
        },
      ],
    },
    complex: {
      title: "LaTeX 中的复数符号与共轭",
      intro: (
        <IntroP>
          复数集的符号是黑板粗体 &#8450;，在 LaTeX 中借助 amssymb 宏包写作 <Cmd>{"\\mathbb{C}"}</Cmd>。共轭复数对单个字母写作{" "}
          <Cmd>{"\\bar{z}"}</Cmd>，对整个表达式写作 <Cmd>{"\\overline{z}"}</Cmd>，物理学中则常写 <Cmd>{"z^*"}</Cmd>。实部和虚部是{" "}
          <Cmd>{"\\Re"}</Cmd> 和 <Cmd>{"\\Im"}</Cmd>，或者直立体的 <Cmd>{"\\operatorname{Re}"}</Cmd>；模是{" "}
          <Cmd>{"|z|"}</Cmd>，辐角是 <Cmd>{"\\arg z"}</Cmd>。下表列出了最常用的复数符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的复数符号",
      use: {
        "\\mathbb{C}": "复数集",
        "z = a + bi": "代数形式（直角坐标形式）",
        "\\bar{z}": "共轭复数（单个字母）",
        "\\overline{z + w}": "表达式的共轭",
        "z^*": "共轭，物理学记法",
        "\\Re(z)": "实部，哥特体 ℜ",
        "\\Im(z)": "虚部，哥特体 ℑ",
        "\\operatorname{Re}(z)": "实部，直立体（虚部同理用 Im）",
        "|z|": "模（绝对值）",
        "\\arg z": "辐角",
        "re^{i\\theta}": "极坐标形式（指数形式）",
        "\\mathrm{i}": "直立体虚数单位",
      },
      faqHeading: "LaTeX 复数符号常见问题",
      faq: [
        {
          question: "复数集用什么符号表示？",
          answer:
            "复数集用黑板粗体 C 表示，即 ℂ。在 LaTeX 中加载 \\usepackage{amssymb}（或 amsfonts）后写 \\mathbb{C}，例如 z \\in \\mathbb{C}。实数集用同样的字体写作 \\mathbb{R}。",
        },
        {
          question: "如何在 LaTeX 中输入共轭复数？",
          answer:
            "单个字母用 \\bar{z}，较长的表达式用 \\overline{z + w}，因为 \\overline 会延伸覆盖整个参数。物理学家和工程师常写 z^*，矩阵的共轭转置则写作 A^\\dagger 或 A^*。",
        },
        {
          question: "如何在 LaTeX 中输入实部和虚部？",
          answer:
            "内置的 \\Re 和 \\Im 输出哥特体字母 ℜ 和 ℑ。若要使用大多数现代教材采用的直立体 Re 和 Im，请借助 amsmath 写 \\operatorname{Re}(z) 和 \\operatorname{Im}(z)，或者用 \\renewcommand{\\Re}{\\operatorname{Re}} 一次性重新定义原命令。",
        },
      ],
    },
    "computer-science": {
      title: "LaTeX 中的计算机科学符号：大 O、取整与算法记号",
      intro: (
        <IntroP>
          LaTeX 中的大多数计算机科学符号都是普通的数学命令。大 O 记号写作 <Cmd>{"O(n \\log n)"}</Cmd>，许多论文也使用花体的{" "}
          <Cmd>{"\\mathcal{O}(n)"}</Cmd>；与之相关的有 <Cmd>{"\\Omega(n)"}</Cmd>、<Cmd>{"\\Theta(n)"}</Cmd> 和小 o 记号{" "}
          <Cmd>{"o(n)"}</Cmd>。向下取整和向上取整是 <Cmd>{"\\lfloor x \\rfloor"}</Cmd> 和{" "}
          <Cmd>{"\\lceil x \\rceil"}</Cmd>，异或是 <Cmd>{"\\oplus"}</Cmd>，伪代码中的赋值是 <Cmd>{"\\gets"}</Cmd>，而用 := 表示的定义最好使用 mathtools 中的{" "}
          <Cmd>{"\\coloneqq"}</Cmd>。下表列出了最常用的计算机科学符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：复杂度、取整与算法",
      use: {
        "O(n \\log n)": "大 O（上界）",
        "\\mathcal{O}(n)": "大 O，花体写法",
        "\\Omega(n)": "大 Ω（下界）",
        "\\Theta(n^2)": "大 Θ（紧确界）",
        "o(n)": "小 o",
        "\\lfloor \\log_2 n \\rfloor": "以 2 为底的对数向下取整",
        "\\lceil n/2 \\rceil": "向上取整",
        "a \\bmod n": "作为二元运算符的取模",
        "\\oplus": "异或",
        "x \\gets x + 1": "伪代码中的赋值",
        "\\coloneqq": "定义为（:=）",
        "\\{0,1\\}^*": "所有二进制串（克莱尼星号）",
      },
      faqHeading: "LaTeX 计算机科学符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入大 O 记号？",
          answer:
            "在数学模式中直接写 O(n)：$O(n \\log n)$。许多作者更喜欢花体形式 $\\mathcal{O}(n)$，它不需要任何宏包。大 Ω 和大 Θ 使用希腊大写字母 \\Omega(n) 和 \\Theta(n)，小 o 写作 o(n)。对数要写 \\log 而不是 log，这样函数名才会是直立体。",
        },
        {
          question: "如何在 LaTeX 中输入向下取整和向上取整？",
          answer:
            "使用内置定界符：\\lfloor x \\rfloor 得到 ⌊x⌋，\\lceil x \\rceil 得到 ⌈x⌉。内容较高时在前面加 \\left 和 \\right，例如 \\left\\lfloor \\frac{n}{2} \\right\\rfloor；也可以用 mathtools 的 \\DeclarePairedDelimiter 定义 \\floor 和 \\ceil 命令。",
        },
        {
          question: "如何在 LaTeX 中输入取模 mod？",
          answer:
            "二元运算符用 \\bmod，如 a \\bmod n；同余式用 \\pmod{n}，如 a \\equiv b \\pmod{n}，它会以正确的间距输出 (mod n)。两者都是内置命令；amsmath 还提供了 \\mod{n} 和 \\pod{n}，对应其他间距风格。",
        },
      ],
    },
    "differential-geometry": {
      title: "LaTeX 中的微分几何符号：微分形式、联络与曲率",
      intro: (
        <IntroP>
          LaTeX 中的微分几何符号建立在少数几个内置命令之上。微分形式的楔积是{" "}
          <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>，外幂用 <Cmd>{"\\bigwedge^k V"}</Cmd>；外微分是{" "}
          <Cmd>{"d\\omega"}</Cmd>；协变导数是 <Cmd>{"\\nabla_X Y"}</Cmd>；李导数是 <Cmd>{"\\mathcal{L}_X"}</Cmd>。克里斯托费尔符号和曲率张量是带指标的字母，即{" "}
          <Cmd>{"\\Gamma^k_{ij}"}</Cmd> 和 <Cmd>{"R^l{}_{ijk}"}</Cmd>，点 p 处的切空间是 <Cmd>{"T_pM"}</Cmd>。下表列出了最常用的微分几何符号，它们全部是内置命令；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：流形、微分形式与曲率",
      use: {
        "T_pM": "点 p 处的切空间",
        "T^*_pM": "点 p 处的余切空间",
        "\\nabla_X Y": "协变导数（联络）",
        "\\Gamma^k_{ij}": "克里斯托费尔符号",
        "R^l{}_{ijk}": "黎曼曲率张量",
        "g_{ij}": "度量张量",
        "\\alpha \\wedge \\beta": "微分形式的楔积",
        "\\bigwedge^k V": "外幂，k 形式",
        "d\\omega": "外微分",
        "\\mathcal{L}_X": "李导数",
        "[X, Y]": "向量场的李括号",
        "\\star\\omega": "霍奇星算子",
      },
      faqHeading: "LaTeX 微分几何符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入楔积？",
          answer:
            "在微分形式之间使用 \\wedge，如 $\\alpha \\wedge \\beta$；它是二元运算符，间距正确。外幂或对指标集取的大楔积请用大型运算符 \\bigwedge，例如 \\bigwedge^k V 或 \\bigwedge_{i=1}^{n} dx_i。两者都是内置命令。",
        },
        {
          question: "如何在 LaTeX 中输入协变导数？",
          answer:
            "写 \\nabla，并把方向作为下标：$\\nabla_X Y$，在指标记法中写作 \\nabla_\\mu V^\\nu。沿坐标方向的偏导数写作 \\partial_\\mu，物理教材中也常见分号记法 V^\\nu{}_{;\\mu}。",
        },
        {
          question: "如何在 LaTeX 中输入李导数和外微分？",
          answer:
            "李导数是带下标的花体 L：\\mathcal{L}_X T。外微分就是普通的 d，如 d\\omega；有些作者用 \\mathrm{d}\\omega 把它设为直立体，以便与变量区分。",
        },
      ],
    },
    finance: {
      title: "LaTeX 中的货币与金融符号：美元、欧元与公式",
      intro: (
        <IntroP>
          在 LaTeX 中输入货币符号需要稍加注意，因为美元符号会开启数学模式。要输出美元符号，请转义为{" "}
          <Cmd>{"\\$"}</Cmd>；英镑符号是 <Cmd>{"\\pounds"}</Cmd>，欧元符号是 <Cmd>{"\\texteuro"}</Cmd>，若要官方设计的欧元符号，可用 eurosym 宏包中的{" "}
          <Cmd>{"\\euro"}</Cmd>。百分号要写 <Cmd>{"\\%"}</Cmd>，因为单独的 % 会开始一段注释；千分号是{" "}
          <Cmd>{"\\textperthousand"}</Cmd>。净现值、复利等金融公式就是由 <Cmd>{"\\sum"}</Cmd> 和{" "}
          <Cmd>{"\\frac"}</Cmd> 构成的普通数学公式。下表列出了最常用的金融符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：货币、百分号与公式",
      use: {
        "\\$": "美元符号",
        "\\pounds": "英镑",
        "\\texteuro": "欧元符号（textcomp，内置）",
        "\\euro": "官方欧元符号",
        "\\textyen": "日元符号（textcomp，内置）",
        "\\%": "百分号",
        "\\textperthousand": "千分号（textcomp，内置）",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "净现值",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "复利",
        "A = Pe^{rt}": "连续复利",
        "\\pm": "正负号",
      },
      faqHeading: "LaTeX 货币与金融符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入美元符号？",
          answer:
            "需要转义：\\$ 在文本和数学模式中都输出 $，例如 \\$100。单独的 $ 会开启或结束数学模式，所以价格中未转义的美元符号会导致报错，或把该行剩余部分变成数学公式。",
        },
        {
          question: "如何在 LaTeX 中输入欧元符号？",
          answer:
            "\\texteuro（来自 textcomp，现已并入 LaTeX 内核）无需额外宏包即可输出当前字体的欧元符号。若要欧盟官方设计，请加载 \\usepackage{eurosym} 并写 \\euro。使用 XeLaTeX 或 LuaLaTeX 时，也可以直接输入 €。",
        },
        {
          question: "如何在 LaTeX 中输入百分号？",
          answer:
            "写 \\%。单独的 % 会开始一段注释，该行之后的内容都不会出现在输出中。千分号用 \\textperthousand；带单位的数值可以使用 siunitx 宏包的 \\qty{5}{\\percent}。",
        },
      ],
    },
    "game-theory": {
      title: "LaTeX 中的博弈论符号：策略、收益与均衡",
      intro: (
        <IntroP>
          LaTeX 中的博弈论记号大多是带下标的字母，所以关键在于下标写法保持一致。参与者的策略是{" "}
          <Cmd>{"s_i"}</Cmd>，其他所有参与者的策略是 <Cmd>{"s_{-i}"}</Cmd>，收益是{" "}
          <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>，纳什均衡用星号标记，即 <Cmd>{"s^*"}</Cmd>。混合策略写作{" "}
          <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>，偏好关系用 <Cmd>{"\\succ"}</Cmd> 和{" "}
          <Cmd>{"\\succeq"}</Cmd>，最优反应最好用 amsmath 的 <Cmd>{"\\operatorname{BR}_i"}</Cmd> 来写。收益矩阵是用 array 构建的表格。下表列出了最常用的博弈论符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：策略、收益与均衡",
      use: {
        "s_i \\in S_i": "参与者 i 的策略",
        "s_{-i}": "其他所有参与者的策略",
        "u_i(s_i, s_{-i})": "参与者 i 的收益（效用）",
        "s^* = (s_1^*, \\ldots, s_n^*)": "纳什均衡策略组合",
        "\\operatorname{BR}_i(s_{-i})": "最优反应",
        "\\sigma_i \\in \\Delta(S_i)": "混合策略",
        "\\mathbb{E}[u_i(\\sigma)]": "期望收益",
        "a \\succ b": "严格偏好",
        "a \\succeq b": "弱偏好",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "最大最小值",
        "\\phi_i(v)": "沙普利值",
        "v(S)": "联盟 S 的值",
      },
      faqHeading: "LaTeX 博弈论符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入收益矩阵？",
          answer:
            "在独立公式中使用 array，并在行标签后加一条竖线：\\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}。如果是带参与者名称的策略式博弈，sgame 宏包提供了 game 环境。",
        },
        {
          question: "如何在 LaTeX 中输入 s 下标 -i？",
          answer:
            "把负号和指标一起放进花括号：s_{-i}。不加花括号时，s_-i 只会把负号降为下标。策略组合 (s_i', s_{-i}) 和最优反应 BR_i(s_{-i}) 也是同样的写法。",
        },
        {
          question: "如何在 LaTeX 中标记纳什均衡？",
          answer:
            "使用上标星号：策略组合写 s^*，单个参与者的均衡策略写 s_i^*。均衡条件写作：对所有 s_i \\in S_i，有 u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*)。",
        },
      ],
    },
    geometry: {
      title: "LaTeX 中的几何符号：垂直、平行、角与三角形",
      intro: (
        <IntroP>
          LaTeX 中的几何符号大多是内置的。垂直（也是正交符号）是 <Cmd>{"\\perp"}</Cmd>（⊥），平行是{" "}
          <Cmd>{"\\parallel"}</Cmd>（∥），角是 <Cmd>{"\\angle ABC"}</Cmd>，三角形是 <Cmd>{"\\triangle ABC"}</Cmd>。全等是{" "}
          <Cmd>{"\\cong"}</Cmd>，相似是 <Cmd>{"\\sim"}</Cmd>。线段上方加横线，即 <Cmd>{"\\overline{AB}"}</Cmd>；射线或向量上方加箭头，即{" "}
          <Cmd>{"\\overrightarrow{AB}"}</Cmd>；度数符号是上标圆圈，即 <Cmd>{"90^\\circ"}</Cmd>。只有少数几个额外符号，如{" "}
          <Cmd>{"\\measuredangle"}</Cmd> 和 <Cmd>{"\\nparallel"}</Cmd>，需要 amssymb。下表列出了最常用的几何符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的几何符号",
      use: {
        "\\perp": "垂直、正交",
        "\\parallel": "平行",
        "\\nparallel": "不平行",
        "\\angle ABC": "角",
        "\\measuredangle ABC": "有向角（角的度量）",
        "\\triangle ABC": "三角形",
        "\\cong": "全等",
        "\\sim": "相似",
        "\\overline{AB}": "线段",
        "\\overrightarrow{AB}": "射线或向量",
        "\\overleftrightarrow{AB}": "过 A、B 两点的直线",
        "90^\\circ": "度数符号",
      },
      faqHeading: "LaTeX 几何符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入垂直或正交符号？",
          answer:
            "在数学模式中使用 \\perp：$AB \\perp CD$ 输出 AB ⊥ CD。正交向量 u \\perp v 和正交补 V^\\perp 也用同一个命令。它是内置命令，不需要任何宏包。",
        },
        {
          question: "如何在 LaTeX 中输入三角形符号？",
          answer:
            "\\triangle 输出 △，例如 $\\triangle ABC$，不需要宏包。amssymb 还提供了较小的 \\vartriangle 和实心的 \\blacktriangle。",
        },
        {
          question: "如何在 LaTeX 中输入度数符号？",
          answer:
            "在数学模式中写上标圆圈：$90^\\circ$。在文本中，\\textdegree 输出 °；siunitx 宏包的 \\ang{45} 或 \\qty{90}{\\degree} 能保证输出格式一致。",
        },
      ],
    },
    "graph-theory": {
      title: "LaTeX 中的图论符号：顶点、边、度与着色",
      intro: (
        <IntroP>
          LaTeX 中的图论记号大多是标准字母和内置运算符。图写作 <Cmd>{"G = (V, E)"}</Cmd>，相邻关系是{" "}
          <Cmd>{"u \\sim v"}</Cmd>，顶点的度是 <Cmd>{"\\deg(v)"}</Cmd>（<Cmd>{"\\deg"}</Cmd> 运算符是内置的），完全图和完全二部图分别是{" "}
          <Cmd>{"K_n"}</Cmd> 和 <Cmd>{"K_{m,n}"}</Cmd>。图的不变量使用希腊字母：色数 <Cmd>{"\\chi(G)"}</Cmd>、团数{" "}
          <Cmd>{"\\omega(G)"}</Cmd>、独立数 <Cmd>{"\\alpha(G)"}</Cmd>，以及最大度和最小度 <Cmd>{"\\Delta(G)"}</Cmd> 和{" "}
          <Cmd>{"\\delta(G)"}</Cmd>。要画出图本身，请使用 TikZ。下表列出了最常用的图论符号，它们全部是内置命令；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的图论符号",
      use: {
        "G = (V, E)": "顶点集为 V、边集为 E 的图",
        "u \\sim v": "u 与 v 相邻",
        "\\deg(v)": "顶点的度",
        "\\deg^{+}(v)": "出度（入度用 \\deg^{-}）",
        "N(v)": "v 的邻域",
        "K_n": "完全图",
        "K_{m,n}": "完全二部图",
        "\\chi(G)": "色数",
        "\\omega(G)": "团数",
        "\\alpha(G)": "独立数",
        "\\Delta(G)": "最大度（最小度用 \\delta(G)）",
        "G \\cong H": "同构的图",
      },
      faqHeading: "LaTeX 图论符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入顶点的度？",
          answer:
            "使用内置运算符 \\deg，它会以正确的间距输出直立体的 deg：$\\deg(v)$。对于有向图，\\deg^{+}(v) 和 \\deg^{-}(v) 分别表示出度和入度；握手定理写作 \\sum_{v \\in V} \\deg(v) = 2|E|。",
        },
        {
          question: "如何在 LaTeX 中画图？",
          answer:
            "加载 \\usepackage{tikz}，用 \\node[circle,draw] (a) at (0,0) {a}; 放置顶点，再用 \\draw (a) -- (b); 把它们连接起来。对于较大的图，TikZ 的 graphs 库和 tkz-graph 宏包可以简化语法。",
        },
        {
          question: "如何在 LaTeX 中输入色数？",
          answer:
            "色数写作 \\chi(G)，即希腊字母 chi。边色数常写作 \\chi'(G)，团数写作 \\omega(G)，独立数写作 \\alpha(G)。这些都是内置命令。",
        },
      ],
    },
    latin: {
      title: "LaTeX 中的拉丁字母：特殊字母与重音符号",
      intro: (
        <IntroP>
          A 到 Z 之外的拉丁字母，例如连字 æ 和 œ、北欧语言的 ø 和 å、德语的 ß 以及波兰语的 ł，都有对应的简短 LaTeX 命令：
          <Cmd>{"\\ae"}</Cmd>、<Cmd>{"\\oe"}</Cmd>、<Cmd>{"\\o"}</Cmd>、<Cmd>{"\\aa"}</Cmd>、<Cmd>{"\\ss"}</Cmd> 和{" "}
          <Cmd>{"\\l"}</Cmd>，大写形式如 <Cmd>{"\\AE"}</Cmd> 和 <Cmd>{"\\O"}</Cmd>。带重音的字母由重音命令加基础字母组成，例如{" "}
          <Cmd>{"\\'e"}</Cmd> 得到 é，<Cmd>{"\\~n"}</Cmd> 得到 ñ。这些命令都是内置的，用于文本模式。下表列出了最常用的拉丁字母符号；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的特殊字母与重音",
      use: {
        "\\ae": "连字 æ（\\AE 得到 Æ）",
        "\\oe": "连字 œ（\\OE 得到 Œ）",
        "\\o": "带斜线的 o，即 ø（\\O 得到 Ø）",
        "\\aa": "带圆圈的 a，即 å（\\AA 得到 Å）",
        "\\ss": "德语 ß",
        "\\l": "波兰语 ł（\\L 得到 Ł）",
        "\\i": "无点 i，用作重音的基础字母",
        "\\'e": "尖音符 é",
        "\\\"o": "分音符（变音）ö",
        "\\~n": "波浪符 ñ",
        "\\c{c}": "软音符 ç",
        "\\v{s}": "抑扬符（háček）š",
      },
      faqHeading: "LaTeX 拉丁字母常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入 æ、ø、ß 等特殊拉丁字母？",
          answer:
            "每个字母都有内置的文本模式命令：\\ae 和 \\AE 对应 æ 和 Æ，\\oe 和 \\OE 对应 œ 和 Œ，\\o 和 \\O 对应 ø 和 Ø，\\aa 和 \\AA 对应 å 和 Å，\\ss 对应 ß，\\l 和 \\L 对应 ł 和 Ł。自 2018 年起 LaTeX 也默认读取 UTF-8，因此可以直接输入这些字母。",
        },
        {
          question: "如何在数学模式中使用这些拉丁字母？",
          answer:
            "这些命令只能用于文本模式，所以要用 amsmath 的 \\text{...} 包裹，例如 $x_{\\text{\\ae}}$。在数学模式中，无点字母有专门的命令 \\imath 和 \\jmath，用于带重音的向量，例如 \\hat{\\imath}。",
        },
        {
          question: "为什么 PDF 中带重音的字母无法正确复制或断词？",
          answer:
            "在默认的 OT1 字体编码下，LaTeX 用两个部分拼出带重音的字母。在导言区加入 \\usepackage[T1]{fontenc}，é、ö 和 ñ 就会变成单个字形，能够正确断词、搜索和复制。",
        },
      ],
    },
    "linear-algebra": {
      title: "LaTeX 中的线性代数符号：矩阵、向量、转置与范数",
      intro: (
        <IntroP>
          在 LaTeX 中书写线性代数，首先要用到 amsmath 的矩阵环境：<Cmd>{"pmatrix"}</Cmd> 用圆括号，<Cmd>{"bmatrix"}</Cmd> 用方括号，
          <Cmd>{"vmatrix"}</Cmd> 用于行列式。向量写作 <Cmd>{"\\mathbf{v}"}</Cmd> 或 <Cmd>{"\\vec{v}"}</Cmd>，转置是{" "}
          <Cmd>{"A^\\top"}</Cmd>（或 <Cmd>{"A^T"}</Cmd>），逆矩阵是 <Cmd>{"A^{-1}"}</Cmd>，共轭转置是{" "}
          <Cmd>{"A^\\dagger"}</Cmd>，范数是 <Cmd>{"\\|x\\|"}</Cmd>。行列式 <Cmd>{"\\det"}</Cmd> 是内置的，而迹和秩最好写作{" "}
          <Cmd>{"\\operatorname{tr}"}</Cmd> 和 <Cmd>{"\\operatorname{rank}"}</Cmd>。下表列出了最常用的线性代数符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：矩阵、向量与运算",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "圆括号矩阵",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "方括号矩阵",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "行列式竖线",
        "\\mathbf{v}": "粗体向量",
        "\\vec{v}": "带箭头的向量",
        "A^\\top": "转置",
        "A^{-1}": "逆矩阵",
        "A^\\dagger": "共轭转置",
        "\\det(A)": "行列式",
        "\\operatorname{tr}(A)": "迹",
        "\\|x\\|_2": "欧几里得范数",
        "\\langle u, v \\rangle": "内积",
      },
      faqHeading: "LaTeX 线性代数符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入矩阵？",
          answer:
            "加载 amsmath，在数学模式中使用矩阵环境，用 & 分隔列、用 \\\\ 分隔行：\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}。pmatrix 输出圆括号，bmatrix 输出方括号，Bmatrix 输出花括号，vmatrix 输出表示行列式的单竖线，Vmatrix 输出双竖线。",
        },
        {
          question: "如何在 LaTeX 中输入转置？",
          answer:
            "写 A^\\top，它会输出一个小号的 T；也可以直接写 A^T，或使用 amssymb 的 A^\\intercal。选定一种后请保持一致；A^\\top 在现代教材中很常见，因为它不会与变量 T 混淆。",
        },
        {
          question: "如何在 LaTeX 中输入向量？",
          answer:
            "粗体向量用 \\mathbf{v}，带箭头的向量用 \\vec{v}；amsmath 的 \\boldsymbol{v} 也适用于希腊字母。列向量就是只有一列的矩阵：\\begin{pmatrix} x \\\\ y \\end{pmatrix}。",
        },
      ],
    },
    "machine-learning": {
      title: "LaTeX 中的梯度符号及其他机器学习记号",
      intro: (
        <IntroP>
          LaTeX 中的梯度符号是 <Cmd>{"\\nabla"}</Cmd>，输出 &nabla;，不需要宏包：<Cmd>{"\\nabla f"}</Cmd> 表示{" "}
          <Cmd>{"f"}</Cmd> 的梯度，<Cmd>{"\\nabla_\\theta \\mathcal{L}"}</Cmd> 表示损失函数对参数的梯度。偏导数使用{" "}
          <Cmd>{"\\partial"}</Cmd>，预测值是 <Cmd>{"\\hat{y}"}</Cmd>，期望是 <Cmd>{"\\mathbb{E}"}</Cmd>，argmax 写作{" "}
          <Cmd>{"\\operatorname*{arg\\,max}"}</Cmd>。下表列出了在 LaTeX 中书写梯度时最常用的命令及各自所需的宏包；完整的机器学习符号列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：梯度、损失与期望",
      use: {
        "\\nabla": "梯度符号（nabla 算子）",
        "\\nabla_\\theta \\mathcal{L}": "损失函数对 θ 的梯度",
        "\\partial": "偏导数",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "损失函数的偏导数",
        "\\mathcal{L}": "损失函数",
        "\\theta": "模型参数",
        "\\hat{y}": "预测值、估计值",
        "\\mathbb{E}": "期望",
        "\\operatorname*{arg\\,max}_\\theta": "下方带变量的 argmax",
        "\\operatorname*{arg\\,min}_\\theta": "下方带变量的 argmin",
        "\\|w\\|_2": "权重的 L2 范数",
        "\\odot": "哈达玛积（逐元素乘积）",
      },
      faqHeading: "LaTeX 机器学习符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入梯度符号？",
          answer:
            "梯度符号 ∇ 是 \\nabla，它是 LaTeX 内置命令，用于数学模式：$\\nabla f$。把求导所针对的变量写成下标，例如 \\nabla_\\theta \\mathcal{L}(\\theta)；拉普拉斯算子写作 \\nabla^2 f。不需要任何宏包。",
        },
        {
          question: "如何在 LaTeX 中输入偏导数？",
          answer:
            "使用 \\partial：一阶偏导数写 \\frac{\\partial f}{\\partial x}，二阶偏导数写 \\frac{\\partial^2 f}{\\partial x^2}。梯度的单个分量也用同样的写法，例如 \\frac{\\partial \\mathcal{L}}{\\partial w_i}。",
        },
        {
          question: "如何在 LaTeX 中输入 argmax 和 argmin？",
          answer:
            "借助 amsmath 写 \\operatorname*{arg\\,max}_\\theta f(\\theta)；星号会让下标在独立公式中位于运算符正下方。如需反复使用，可在导言区用 \\DeclareMathOperator*{\\argmax}{arg\\,max} 声明一次，之后写 \\argmax_\\theta。简写 \\arg\\max_\\theta 也能用，但下标只会位于 max 下方，而不是整个 arg max 下方。",
        },
        {
          question: "如何在 LaTeX 中输入期望和损失函数？",
          answer:
            "期望用黑板粗体 \\mathbb{E}，需要 \\usepackage{amssymb}，例如 \\mathbb{E}_{x \\sim p}[f(x)]。损失函数通常用花体 L，即内置的 \\mathcal{L}。",
        },
      ],
    },
    "modal-logic": {
      title: "LaTeX 中的模态逻辑符号：方框、菱形与克里普克语义",
      intro: (
        <IntroP>
          LaTeX 中两个核心的模态逻辑符号是表示必然的 <Cmd>{"\\Box"}</Cmd>（□）和表示可能的{" "}
          <Cmd>{"\\Diamond"}</Cmd>（◇），二者都来自 amssymb；<Cmd>{"\\Box p"}</Cmd> 读作“p 是必然的”，
          <Cmd>{"\\Diamond p"}</Cmd> 读作“p 是可能的”。克里普克语义使用 <Cmd>{"\\models"}</Cmd>（内置）或{" "}
          <Cmd>{"\\Vdash"}</Cmd>，例如 <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>，可达关系写作 <Cmd>{"wRv"}</Cmd>。认知逻辑把知识写作{" "}
          <Cmd>{"K_a p"}</Cmd>，时态逻辑还用 <Cmd>{"\\bigcirc p"}</Cmd> 表示“下一时刻”，用{" "}
          <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> 表示“直到”。下表列出了最常用的模态逻辑符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：模态、认知与时态算子",
      use: {
        "\\Box p": "必然 p",
        "\\Diamond p": "可能 p",
        "\\Box(p \\to q)": "蕴含式的必然性（公理 K）",
        "\\neg\\Box\\neg p": "并非必然非 p，等同于 \\Diamond p",
        "\\mathcal{M}, w \\models p": "p 在世界 w 中为真",
        "w \\Vdash p": "力迫、满足",
        "wRv": "可达关系",
        "K_a p": "主体 a 知道 p",
        "B_a p": "主体 a 相信 p",
        "C_G p": "群体 G 中的公共知识",
        "\\bigcirc p": "下一时刻（时态逻辑）",
        "p \\mathbin{\\mathcal{U}} q": "直到（时态逻辑）",
      },
      faqHeading: "LaTeX 模态逻辑符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入方框和菱形符号？",
          answer:
            "加载 \\usepackage{amssymb}，必然性写 \\Box p，可能性写 \\Diamond p。latexsym 宏包也提供这两个命令。注意内置的 \\diamond 是一个小型二元运算符，并不是模态菱形。",
        },
        {
          question: "如何在 LaTeX 中输入满足（双十字转门）符号？",
          answer:
            "\\models 是内置命令，输出 ⊨，例如 $\\mathcal{M}, w \\models \\varphi$。amssymb 另外提供 \\vDash（⊨）、表示力迫的 \\Vdash（⊩）以及表示“不满足”的 \\nvDash；表示可证的 \\vdash（⊢）是内置的。",
        },
        {
          question: "如何在 LaTeX 中输入时态逻辑的“直到”和“下一时刻”？",
          answer:
            "“下一时刻”用 \\bigcirc p；“直到”则把花体 U 包装成二元运算符：p \\mathbin{\\mathcal{U}} q，这样间距才正确。“总是”和“最终”通常写作 \\Box p 和 \\Diamond p，或 \\mathbf{G} p 和 \\mathbf{F} p。",
        },
      ],
    },
    "number-theory": {
      title: "LaTeX 中的数论符号",
      intro: (
        <IntroP>
          LaTeX 中的取模和模有几种写法：<Cmd>{"\\bmod"}</Cmd> 表示求余，<Cmd>{"\\pmod{n}"}</Cmd> 用在同余式之后，
          <Cmd>{"\\lvert z \\rvert"}</Cmd> 表示数的模（绝对值）。下表列出了最常用的 8 个命令及各自所需的宏包；完整的数论符号列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：取模、整除与最大公约数",
      use: {
        "a \\bmod n": "作为二元运算的取模",
        "a \\equiv b \\pmod{n}": "带 (mod n) 的同余",
        "a \\equiv b \\mod{n}": "不带圆括号的同余",
        "\\lvert z \\rvert": "模 / 绝对值",
        "a \\mid b": "a 整除 b",
        "a \\nmid b": "a 不整除 b",
        "\\gcd(a, b)": "最大公约数",
        "\\operatorname{lcm}(a, b)": "最小公倍数",
      },
      faqHeading: "LaTeX 数论符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入取模 mod？",
          answer:
            "二元运算用 \\bmod，例如 a \\bmod n；同余式之后用 \\pmod{n}：a \\equiv b \\pmod{n} 会自动加上圆括号和间距。amsmath 还提供 \\mod{n}（不带圆括号）和 \\pod{n}（只有圆括号，没有 mod 字样）。",
        },
        {
          question: "如何在 LaTeX 中输入模（绝对值）？",
          answer:
            "借助 amsmath 写 \\lvert z \\rvert；若竖线需要随较高的内容伸缩，则写 \\left| z \\right|。如需频繁使用，可以用 mathtools 声明 \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert}，然后写 \\abs{z}。",
        },
        {
          question: "如何在 LaTeX 中输入整除符号？",
          answer:
            "使用 \\mid，例如 a \\mid b，LaTeX 会按关系符设置间距；直接输入 | 会显得太紧。其否定形式 \\nmid（a 不整除 b）需要 \\usepackage{amssymb}。",
        },
      ],
    },
    operators: {
      title: "LaTeX 运算符：圆圈加号、乘号、点乘与大型运算符",
      intro: (
        <IntroP>
          LaTeX 运算符分为两类。二元运算符位于两项之间，带有中等间距：<Cmd>{"\\times"}</Cmd>、<Cmd>{"\\cdot"}</Cmd>、
          <Cmd>{"\\ast"}</Cmd>、<Cmd>{"\\circ"}</Cmd>，以及带圆圈的一族：<Cmd>{"\\oplus"}</Cmd>（圆圈加号，⊕）、
          <Cmd>{"\\otimes"}</Cmd>（⊗）、<Cmd>{"\\odot"}</Cmd>（⊙）和 <Cmd>{"\\ominus"}</Cmd>。大型运算符可以带上下限，并在独立公式中变大：
          <Cmd>{"\\sum"}</Cmd>、<Cmd>{"\\prod"}</Cmd>、<Cmd>{"\\bigoplus"}</Cmd>、<Cmd>{"\\bigotimes"}</Cmd> 和{" "}
          <Cmd>{"\\bigcup"}</Cmd>。这些都是内置命令。<Cmd>{"\\max"}</Cmd>、<Cmd>{"\\sin"}</Cmd> 和 <Cmd>{"\\det"}</Cmd> 等命名运算符是预定义的，你也可以用 amsmath 的{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> 声明自己的运算符。下表列出了最常用的 LaTeX 运算符；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：二元运算符与大型运算符",
      use: {
        "\\oplus": "圆圈加号：直和、异或",
        "\\otimes": "圆圈乘号：张量积",
        "\\odot": "圆圈点：哈达玛积",
        "\\ominus": "圆圈减号",
        "\\oslash": "圆圈斜线",
        "\\times": "叉积、乘法",
        "\\cdot": "居中的点",
        "\\ast": "星号运算符、卷积",
        "\\circ": "复合",
        "\\star": "星形运算符",
        "\\bigoplus_{i=1}^{n} V_i": "按指标求直和",
        "\\bigotimes_{i=1}^{n} V_i": "按指标求张量积",
      },
      faqHeading: "LaTeX 运算符常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入圆圈加号？",
          answer:
            "使用 \\oplus 得到 ⊕，即用于直和与异或的圆圈加号。它是内置的二元运算符：$A \\oplus B$。对多项求直和时，使用大型运算符 \\bigoplus_{i=1}^{n} V_i。",
        },
        {
          question: "如何在 LaTeX 中输入圆圈点（odot）运算符？",
          answer:
            "\\odot 输出 ⊙，用于哈达玛积（逐元素乘积），例如 $A \\odot B$。其大型版本是 \\bigodot。两者都是内置命令。",
        },
        {
          question: "如何在 LaTeX 中定义新的运算符？",
          answer:
            "加载 amsmath，在导言区写 \\DeclareMathOperator{\\Tr}{Tr}；之后 \\Tr(A) 就会以运算符间距输出直立体的 Tr。若上下限需要放在下方（如 \\argmax），请使用 \\DeclareMathOperator*。如果只用一次，行内写 \\operatorname{Tr} 效果相同。",
        },
      ],
    },
    optimization: {
      title: "LaTeX 中的优化符号：argmax、argmin 与约束",
      intro: (
        <IntroP>
          LaTeX 中的优化记号以 <Cmd>{"\\min"}</Cmd>、<Cmd>{"\\max"}</Cmd> 及其 arg 版本为核心。<Cmd>{"\\min_{x}"}</Cmd> 和{" "}
          <Cmd>{"\\max_{x}"}</Cmd> 是内置的，在独立公式中会把变量放在运算符下方，但 LaTeX 没有内置的{" "}
          <Cmd>{"\\argmax"}</Cmd>：可以写 <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd>，或用 amsmath 的{" "}
          <Cmd>{"\\DeclareMathOperator*"}</Cmd> 一次性声明 <Cmd>{"\\argmax"}</Cmd>。约束条件写在{" "}
          <Cmd>{"\\text{s.t.}"}</Cmd> 之后，拉格朗日函数是 <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>，最优解是{" "}
          <Cmd>{"x^*"}</Cmd>，半正定约束使用 <Cmd>{"\\succeq 0"}</Cmd>。下表列出了最常用的优化符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：目标函数、约束与最优性",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "变量位于下方的 argmax",
        "\\operatorname*{arg\\,min}_{x} f(x)": "变量位于下方的 argmin",
        "\\min_{x \\in \\mathcal{X}} f(x)": "在集合上求最小值",
        "\\max_{x} f(x)": "求最大值",
        "\\text{s.t.}": "约束条件（使得）",
        "g_i(x) \\leq 0": "不等式约束",
        "h_j(x) = 0": "等式约束",
        "\\mathcal{L}(x, \\lambda)": "拉格朗日函数",
        "\\nabla f(x^*) = 0": "一阶最优性条件",
        "\\nabla^2 f(x)": "黑塞矩阵",
        "X \\succeq 0": "半正定",
        "\\lambda_i \\geq 0": "对偶变量（拉格朗日乘子）",
      },
      faqHeading: "LaTeX 优化符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入 argmax？",
          answer:
            "借助 amsmath 写 \\operatorname*{arg\\,max}_{x} f(x)；星号会让 x 在独立公式中位于运算符下方。如需重复使用，在导言区加入 \\DeclareMathOperator*{\\argmax}{arg\\,max}，然后写 \\argmax_x f(x)。\\arg\\max 也能输出 arg max，但其下标只附在 max 上。",
        },
        {
          question: "如何在 LaTeX 中书写带约束的优化问题？",
          answer:
            "把目标函数和约束放进 aligned 环境：\\min_{x} \\quad & f(x) \\\\ \\text{s.t.} \\quad & g(x) \\leq 0。optidef 宏包提供 mini 和 maxi 环境，可以自动对齐目标函数和约束条件。",
        },
        {
          question: "如何在 LaTeX 中输入“约束于”（s.t.）？",
          answer:
            "使用 amsmath 的 \\text{s.t.} 或 \\text{subject to}，这样文字会以直立体和正常间距排版；中文文档中也可以写 \\text{满足}。如果直接在数学模式中写 s.t.，会输出斜体的变量 s 和 t。",
        },
      ],
    },
    order: {
      title: "LaTeX 中的小于、大于与小于等于",
      intro: (
        <IntroP>
          在 LaTeX 中，小于号和大于号可以在数学模式中直接输入 <Cmd>{"<"}</Cmd> 和 <Cmd>{">"}</Cmd>。小于等于是{" "}
          <Cmd>{"\\leq"}</Cmd>（或别名 <Cmd>{"\\le"}</Cmd>），大于等于是 <Cmd>{"\\geq"}</Cmd>（<Cmd>{"\\ge"}</Cmd>），不等于是{" "}
          <Cmd>{"\\neq"}</Cmd>；这三个都是内置命令，所以 <Cmd>{"$a \\leq b$"}</Cmd> 在任何文档中都能使用。远小于是{" "}
          <Cmd>{"\\ll"}</Cmd>，倾斜样式、近似和否定形式则来自 amssymb。下表列出了最常用的不等号及各自所需的宏包；完整的序关系符号列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的不等号",
      use: {
        "<": "小于（直接输入）",
        ">": "大于（直接输入）",
        "\\leq": "小于等于（别名 \\le）",
        "\\geq": "大于等于（别名 \\ge）",
        "\\neq": "不等于（别名 \\ne）",
        "\\ll": "远小于",
        "\\gg": "远大于",
        "\\leqslant": "小于等于，倾斜样式",
        "\\lesssim": "小于或约等于",
        "\\not<": "不小于",
        "\\nleq": "不小于等于",
        "\\prec": "先于（偏序）；后于用 \\succ",
      },
      faqHeading: "LaTeX 不等号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入小于等于号？",
          answer:
            "在数学模式中写 \\leq 或其简短别名 \\le：$a \\leq b$。大于等于是 \\geq 或 \\ge。两者都是内置命令。若要欧洲教材中常见的倾斜样式，请加载 amssymb 并使用 \\leqslant 和 \\geqslant。",
        },
        {
          question: "如何在 LaTeX 中输入小于号？",
          answer:
            "在数学模式中直接输入 <：$a < b$。在数学模式之外的正文中，默认的 OT1 字体编码会把 < 输出为 ¡，所以要么用 $<$ 包裹，要么使用 \\textless（大于号用 \\textgreater），或者加载 \\usepackage[T1]{fontenc}。",
        },
        {
          question: "如何在 LaTeX 中输入“不小于”或“不等于”？",
          answer:
            "不等于是 \\neq 或 \\ne。对于其他关系，在符号前加 \\not，例如 \\not<；或者加载 amssymb，使用专门的否定符号 \\nless、\\ngtr、\\nleq 和 \\ngeq，它们比叠加的斜线更美观。",
        },
        {
          question: "LaTeX 中 \\leq 和 \\le 有什么区别？",
          answer:
            "没有区别：\\le 是 \\leq 的别名，二者都输出 ≤；同样，\\ge 是 \\geq 的别名，\\ne 是 \\neq 的别名。按个人习惯选用即可，但要保持一致。",
        },
      ],
    },
    relations: {
      title: "LaTeX 中的关系符号：不等于、约等于与小于",
      intro: (
        <IntroP>
          LaTeX 中的关系符号用于比较两个表达式，常用的都是内置命令。不等于是 <Cmd>{"\\neq"}</Cmd>（≠），约等于是{" "}
          <Cmd>{"\\approx"}</Cmd>（≈），小于和大于直接输入 <Cmd>{"<"}</Cmd> 和 <Cmd>{">"}</Cmd>，小于等于是{" "}
          <Cmd>{"\\leq"}</Cmd>（≤）。等价是 <Cmd>{"\\equiv"}</Cmd>，相似是 <Cmd>{"\\sim"}</Cmd>，全等是{" "}
          <Cmd>{"\\cong"}</Cmd>，正比于是 <Cmd>{"\\propto"}</Cmd>。在任意关系符前加 <Cmd>{"\\not"}</Cmd> 即可取否定，也可以加载 amssymb 使用专门的否定形式（如{" "}
          <Cmd>{"\\nleq"}</Cmd>）和倾斜形式（如 <Cmd>{"\\leqslant"}</Cmd>）。下表列出了最常用的关系符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的关系符号",
      use: {
        "\\neq": "不等于（别名 \\ne）",
        "\\approx": "约等于",
        "<": "小于",
        ">": "大于",
        "\\leq": "小于等于",
        "\\geq": "大于等于",
        "\\equiv": "等价、恒等、模 n 同余",
        "\\sim": "相似、服从（某分布）",
        "\\cong": "全等、同构",
        "\\propto": "正比于",
        "\\ll": "远小于（远大于用 \\gg）",
        "\\leqslant": "倾斜样式的小于等于",
      },
      faqHeading: "LaTeX 关系符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入不等于号？",
          answer:
            "在数学模式中使用 \\neq（或其别名 \\ne）：$a \\neq b$ 输出 a ≠ b，不需要宏包。其他关系的否定可以在前面加 \\not，例如 \\not\\equiv，或使用 amssymb 中的专用符号，如 \\nleq 和 \\ncong。",
        },
        {
          question: "如何在 LaTeX 中输入约等于号？",
          answer:
            "\\approx 输出 ≈，是标准的约等于符号：$\\pi \\approx 3.14$。与之相近的有 \\simeq（≃）、\\cong（≅）、\\sim（∼）和 \\doteq（≐），都是内置命令，另外还有 amssymb 中的 \\approxeq（≊）。",
        },
        {
          question: "如何在 LaTeX 中输入小于号？",
          answer:
            "在数学模式中直接输入 < 和 >：$a < b$。在数学模式之外的正文中，请使用 \\textless 和 \\textgreater，或用 $...$ 包裹符号，因为在旧的 OT1 字体编码下，单独的 < 可能会被输出为倒置的感叹号。",
        },
      ],
    },
    "special-functions": {
      title: "LaTeX 中的特殊函数：Gamma、Beta、zeta、erf 与贝塞尔函数",
      intro: (
        <IntroP>
          LaTeX 中的特殊函数用希腊字母或直立体名称书写。伽马函数是 <Cmd>{"\\Gamma(z)"}</Cmd>，黎曼 zeta 函数是{" "}
          <Cmd>{"\\zeta(s)"}</Cmd>，双伽马函数是 <Cmd>{"\\psi(x)"}</Cmd>，狄拉克 δ 函数是 <Cmd>{"\\delta(x)"}</Cmd>。以拉丁字母命名的函数应使用直立体：LaTeX 没有内置的{" "}
          <Cmd>{"\\erf"}</Cmd>，所以要写 <Cmd>{"\\operatorname{erf}(x)"}</Cmd>，或用 amsmath 的{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> 一次性声明。贝塞尔函数和正交多项式是带下标的字母，例如{" "}
          <Cmd>{"J_n(x)"}</Cmd> 和 <Cmd>{"P_n(x)"}</Cmd>，超几何函数写作 <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>。下表列出了最常用的特殊函数及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的特殊函数",
      use: {
        "\\Gamma(z)": "伽马函数",
        "\\mathrm{B}(x, y)": "贝塔函数（直立体大写 B）",
        "\\zeta(s)": "黎曼 zeta 函数",
        "\\operatorname{erf}(x)": "误差函数",
        "\\operatorname{erfc}(x)": "互补误差函数",
        "J_n(x)": "第一类贝塞尔函数",
        "Y_n(x)": "第二类贝塞尔函数",
        "P_n(x)": "勒让德多项式",
        "H_n(x)": "埃尔米特多项式",
        "{}_2F_1(a, b; c; z)": "高斯超几何函数",
        "\\psi(x)": "双伽马函数",
        "\\delta(x)": "狄拉克 δ 函数",
      },
      faqHeading: "LaTeX 特殊函数常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入伽马函数？",
          answer:
            "使用大写希腊字母：$\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$，不需要宏包。贝塔函数通常用直立体 B 表示，即 \\mathrm{B}(x, y)，以免被误认为变量。",
        },
        {
          question: "如何在 LaTeX 中输入误差函数 erf？",
          answer:
            "LaTeX 没有 \\erf 命令。请使用 amsmath 的 \\operatorname{erf}(x)，或在导言区加入 \\DeclareMathOperator{\\erf}{erf} 后写 \\erf(x)。这样 erf 会以直立体和运算符间距排版；而直接写 erf 则会输出三个斜体变量。",
        },
        {
          question: "如何在 LaTeX 中输入超几何函数？",
          answer:
            "用一个空的分组来添加左下标：{}_2F_1(a, b; c; z)。mathtools 宏包还提供了用于前置上下标的 \\prescript{}{2}{F}_{1}，广义超几何函数 {}_pF_q 也按同样方式书写。",
        },
      ],
    },
    summation: {
      title: "LaTeX 中的求和：Sigma 记号、连乘与上下限",
      intro: (
        <IntroP>
          LaTeX 中的求和用 <Cmd>{"\\sum"}</Cmd> 书写，它把大写 sigma（Σ）作为大型运算符输出：
          <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> 把求和指标放在下方，把上限放在上方。连乘符号的用法相同，即{" "}
          <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>。在独立公式中，上下限位于符号的上方和下方；在行内公式中，它们会移到符号右侧，除非加上{" "}
          <Cmd>{"\\limits"}</Cmd> 或 <Cmd>{"\\displaystyle"}</Cmd>。求和号下的多行条件使用 amsmath 的{" "}
          <Cmd>{"\\substack"}</Cmd>，大型集合运算符 <Cmd>{"\\bigcup"}</Cmd> 和 <Cmd>{"\\bigcap"}</Cmd> 也遵循同样的规则。下表列出了最常用的求和符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：求和、连乘与上下限",
      use: {
        "\\sum_{i=1}^{n} a_i": "求和（Sigma 记号）",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}": "无穷级数",
        "\\prod_{i=1}^{n} x_i": "连乘",
        "\\coprod": "余积",
        "\\sum\\limits_{i=1}^{n}": "在行内公式中把上下限放在上方和下方",
        "\\displaystyle\\sum_{i=1}^{n}": "在行内公式中使用独立公式大小的求和号",
        "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}": "二重求和",
        "\\sum_{\\substack{i < j \\\\ i \\neq k}}": "多行求和条件",
        "\\bigcup_{i \\in I} A_i": "按指标求并集",
        "\\bigcap_{i=1}^{n} A_i": "按指标求交集",
        "\\sum_{k=0}^{n} \\binom{n}{k}": "二项式系数求和",
      },
      faqHeading: "LaTeX 求和符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入求和式？",
          answer:
            "在数学模式中给 \\sum 加上下标和上标：$\\sum_{i=1}^{n} a_i$。多个字符的上下限要用花括号括起来。在独立公式（\\[...\\]）中，上下限位于 sigma 的上方和下方；在行内公式中则位于右侧。",
        },
        {
          question: "如何在行内公式中把上下限放在求和号的上方和下方？",
          answer:
            "在运算符后加 \\limits，即 \\sum\\limits_{i=1}^{n}，或用 \\displaystyle\\sum_{i=1}^{n} 把整个求和式设为独立公式大小。请谨慎使用，因为这会增大该段落的行距。",
        },
        {
          question: "如何在 LaTeX 中输入连乘符号？",
          answer:
            "\\prod 输出连乘符号 ∏，上下限的写法与 \\sum 相同：$\\prod_{i=1}^{n} x_i$。不要用 \\Pi，它是希腊字母，在独立公式中不会变大，上下限的位置也不正确。",
        },
      ],
    },
    tensors: {
      title: "LaTeX 中的张量记号：指标、爱因斯坦求和约定与 tensor 宏包",
      intro: (
        <IntroP>
          LaTeX 中的张量记号由上标和下标构成：<Cmd>{"T^{ij}_{kl}"}</Cmd> 表示带两个上指标和两个下指标的张量，
          <Cmd>{"g_{\\mu\\nu}"}</Cmd> 表示度规，<Cmd>{"\\delta^i_j"}</Cmd> 表示克罗内克 δ。当混合指标的顺序很重要时，用空分组把它们错开，即{" "}
          <Cmd>{"T^{i}{}_{j}"}</Cmd>，或加载 tensor 宏包并写 <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>。列维-奇维塔符号是{" "}
          <Cmd>{"\\epsilon_{ijk}"}</Cmd>，张量积是 <Cmd>{"\\otimes"}</Cmd>，爱因斯坦求和约定只需重复一个指标，即{" "}
          <Cmd>{"A^i B_i"}</Cmd>。下表列出了最常用的张量符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：指标与张量运算",
      use: {
        "T^{ij}_{kl}": "带上指标和下指标的张量",
        "T^{i}{}_{j}": "错开的指标（顺序有意义）",
        "\\tensor{T}{^i_j^k}": "轻松书写错开的指标",
        "g_{\\mu\\nu}": "度规张量",
        "\\delta^i_j": "克罗内克 δ",
        "\\epsilon_{ijk}": "列维-奇维塔符号",
        "A^i B_i": "爱因斯坦求和约定（重复指标）",
        "A \\otimes B": "张量积",
        "\\partial_\\mu": "沿坐标方向的偏导数",
        "\\nabla_\\mu T^{\\nu}": "协变导数",
        "T_{(ij)}": "对称化",
        "T_{[ij]}": "反对称化",
      },
      faqHeading: "LaTeX 张量记号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入带上下指标的张量？",
          answer:
            "把上标和下标组合起来：$T^{ij}_{kl}$。如果指标的水平顺序很重要，就插入一个空分组，避免它们上下叠放：T^{i}{}_{j} 会把 j 放在 i 之后。tensor 宏包用 \\tensor{T}{^i_j} 和 T\\indices{^i_j} 自动完成这一点。",
        },
        {
          question: "如何在 LaTeX 中输入克罗内克 δ 和列维-奇维塔符号？",
          answer:
            "克罗内克 δ 写作 \\delta_{ij} 或 \\delta^i_j；列维-奇维塔符号写作 \\epsilon_{ijk} 或 \\varepsilon_{ijk}，取决于你所在领域习惯哪种 epsilon 字形。二者都是带指标的内置希腊字母。",
        },
        {
          question: "如何在 LaTeX 中书写爱因斯坦求和约定？",
          answer:
            "不需要专门的命令：一个指标在上、下各出现一次即表示求和，所以 A^i B_i 的意思是 \\sum_i A^i B_i。只有在需要明确写出时才使用 \\sum；时空分量请使用 \\mu 和 \\nu 等希腊字母指标。",
        },
      ],
    },
    topology: {
      title: "LaTeX 中的拓扑符号：闭包、边界、同胚与阿列夫",
      intro: (
        <IntroP>
          LaTeX 中的拓扑符号大多是内置的。集合的闭包是 <Cmd>{"\\overline{A}"}</Cmd>，边界是 <Cmd>{"\\partial A"}</Cmd>，内部是{" "}
          <Cmd>{"A^\\circ"}</Cmd> 或 <Cmd>{"\\operatorname{int} A"}</Cmd>。同胚通常写作 <Cmd>{"\\cong"}</Cmd>（≅），同伦等价写作{" "}
          <Cmd>{"\\simeq"}</Cmd>，基本群是 <Cmd>{"\\pi_1(X)"}</Cmd>，同调群是 <Cmd>{"H_n(X)"}</Cmd>。集合论记号同样适用：属于是{" "}
          <Cmd>{"\\in"}</Cmd>，包含于（子集或相等）是 <Cmd>{"\\subseteq"}</Cmd>。表示基数时，<Cmd>{"\\aleph_0"}</Cmd> 是内置的，
          <Cmd>{"\\beth"}</Cmd> 则来自 amssymb。下表列出了最常用的拓扑符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：最常用的拓扑符号",
      use: {
        "\\overline{A}": "闭包",
        "\\partial A": "边界",
        "A^\\circ": "内部（也写作 \\operatorname{int} A）",
        "X \\cong Y": "同胚",
        "X \\simeq Y": "同伦等价",
        "\\pi_1(X, x_0)": "基本群",
        "H_n(X)": "第 n 个同调群",
        "\\mathcal{T}": "集合上的拓扑",
        "x \\in U \\subseteq X": "属于、包含于（子集或相等）",
        "S^n": "n 维球面",
        "\\aleph_0": "阿列夫零（可数基数）",
        "\\beth_1": "贝特数",
      },
      faqHeading: "LaTeX 拓扑符号常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入同胚符号？",
          answer:
            "大多数教材使用 \\cong（≅）：$X \\cong Y$。也有作者使用 \\approx（≈）或 \\simeq（≃），不过 \\simeq 通常表示同伦等价。三者都是内置命令；如果可能产生歧义，请先说明你采用的约定。",
        },
        {
          question: "如何在 LaTeX 中输入贝特符号？",
          answer:
            "\\beth 输出 ℶ，需要 \\usepackage{amssymb}，该宏包还提供 \\gimel 和 \\daleth。\\aleph（ℵ）是内置的。基数照常加下标：\\aleph_0、\\beth_1；连续统的基数用 \\mathfrak{c}（amssymb）。",
        },
        {
          question: "如何在 LaTeX 中输入集合的闭包和内部？",
          answer:
            "闭包写作 \\overline{A}，单个字母也可写 \\bar{A}，或写 \\operatorname{cl}(A)。内部写作 A^\\circ，或借助 amsmath 写 \\operatorname{int}(A)；边界是 \\partial A。超过一个字母时请用 \\overline 而不是 \\bar。",
        },
      ],
    },
    trigonometry: {
      title: "LaTeX 三角函数：sin、cos、tan 与反三角函数",
      intro: (
        <IntroP>
          LaTeX 中的三角函数都有专门的命令：<Cmd>{"\\sin"}</Cmd>、<Cmd>{"\\cos"}</Cmd>、<Cmd>{"\\tan"}</Cmd>、<Cmd>{"\\cot"}</Cmd>、
          <Cmd>{"\\sec"}</Cmd> 和 <Cmd>{"\\csc"}</Cmd>，反三角函数 <Cmd>{"\\arcsin"}</Cmd>、<Cmd>{"\\arccos"}</Cmd> 和{" "}
          <Cmd>{"\\arctan"}</Cmd>，以及双曲函数 <Cmd>{"\\sinh"}</Cmd>、<Cmd>{"\\cosh"}</Cmd> 和 <Cmd>{"\\tanh"}</Cmd>。请始终使用命令，而不是直接输入 sin：命令会以直立体和正确的间距排版函数名，而直接输入的 sin 会被当作三个斜体变量。幂次紧跟在函数名之后，如{" "}
          <Cmd>{"\\sin^2 \\theta"}</Cmd>；角度是上标圆圈，如 <Cmd>{"30^\\circ"}</Cmd>。下表列出了最常用的三角函数符号及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：三角函数与恒等式",
      use: {
        "\\sin \\theta": "正弦",
        "\\cos \\theta": "余弦",
        "\\tan \\theta": "正切",
        "\\sec \\theta": "正割（\\csc 余割，\\cot 余切）",
        "\\arcsin x": "反正弦",
        "\\arccos x": "反余弦",
        "\\arctan x": "反正切",
        "\\sin^{-1} x": "反正弦，幂次记法",
        "\\sin^2 \\theta + \\cos^2 \\theta = 1": "勾股恒等式",
        "\\sinh x": "双曲正弦（\\cosh、\\tanh）",
        "30^\\circ": "角度（度）",
        "\\operatorname{arcsec} x": "反正割（非内置）",
      },
      faqHeading: "LaTeX 三角函数常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中输入 sin、cos 和 tan？",
          answer:
            "在数学模式中使用内置命令：$\\sin x$、$\\cos x$、$\\tan x$，倒数函数用 \\cot、\\sec 和 \\csc。不加反斜杠直接输入 sin 会输出斜体的乘积 s·i·n，这正是这些命令存在的原因。",
        },
        {
          question: "如何在 LaTeX 中输入 arcsin 等反三角函数？",
          answer:
            "\\arcsin、\\arccos 和 \\arctan 是内置的，\\sinh、\\cosh、\\tanh 和 \\coth 也是。\\arcsec、\\arccsc、\\arccot、\\sech 和 \\csch 则不是：请写 \\operatorname{arcsec} x，或借助 amsmath 在导言区加入 \\DeclareMathOperator{\\arcsec}{arcsec}。幂次记法 \\sin^{-1} x 同样可用。",
        },
        {
          question: "如何在 LaTeX 中输入正弦的平方和角度？",
          answer:
            "把指数紧跟在命令之后：\\sin^2 \\theta。角度使用上标圆圈 $30^\\circ$，或用 siunitx 的 \\ang{30}，使正文和表格中的格式保持一致。",
        },
      ],
    },
    units: {
      title: "LaTeX 中的单位：siunitx、度数符号与国际单位制",
      intro: (
        <IntroP>
          在 LaTeX 中书写单位，最简单的方法是使用 siunitx 宏包：<Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> 会以直立体字母和正确的间距排版数值及其单位，
          <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd> 单独输出单位，<Cmd>{"\\num{6.022e23}"}</Cmd> 用于格式化数字。不用 siunitx 时，要手动把单位设为直立体，例如{" "}
          <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>，并在数值和单位之间加细间距 <Cmd>{"\\,"}</Cmd>。度数符号在数学模式中是{" "}
          <Cmd>{"^\\circ"}</Cmd>，使用 siunitx 时写 <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd>，埃是 <Cmd>{"\\AA"}</Cmd>。下表列出了最常用的单位命令及各自所需的宏包；完整列表见页面下方。
        </IntroP>
      ),
      quickRefHeading: "速查表：使用与不使用 siunitx 的单位写法",
      use: {
        "\\qty{9.81}{\\metre\\per\\second\\squared}": "带单位的物理量",
        "\\unit{\\kilo\\gram}": "单独的单位",
        "\\num{6.022e23}": "格式化的数字",
        "\\qty{20}{\\degreeCelsius}": "摄氏度",
        "\\ang{45}": "以度为单位的角",
        "\\qty{10}{\\micro\\metre}": "国际单位制词头（微米）",
        "\\qty{5}{\\kilo\\ohm}": "千欧",
        "9.81\\,\\mathrm{m/s^2}": "手动书写单位，无需宏包",
        "^\\circ": "数学模式中的度数符号",
        "\\AA": "埃（文本模式）",
        "\\textdegree": "文本模式中的度数符号",
        "\\hbar": "约化普朗克常数",
      },
      faqHeading: "LaTeX 单位常见问题",
      faq: [
        {
          question: "如何在 LaTeX 中书写单位？",
          answer:
            "加载 \\usepackage{siunitx}，带单位的数值写 \\qty{3.0}{\\metre\\per\\second}，单独的单位写 \\unit{\\kilo\\gram}，数字写 \\num{1.5e-3}。siunitx 第 3 版使用 \\qty 和 \\unit；旧的 \\SI 和 \\si 仍然可用。不用宏包时写 3.0\\,\\mathrm{m/s}。",
        },
        {
          question: "如何在 LaTeX 中输入度数符号？",
          answer:
            "在数学模式中使用上标圆圈：$90^\\circ$，温度写 $20^\\circ\\mathrm{C}$。在文本中，\\textdegree 输出 °。使用 siunitx 时，\\ang{90} 和 \\qty{20}{\\degreeCelsius} 能在各处保持一致的间距。",
        },
        {
          question: "siunitx 与 physics 宏包会冲突吗？",
          answer:
            "两个宏包都定义了 \\qty 命令，同时加载会产生冲突。如果需要使用 physics，请用 siunitx 的旧写法 \\SI{9.81}{\\metre\\per\\second\\squared} 来书写带单位的物理量，siunitx 第 3 版仍然支持这种写法。",
        },
      ],
    },
    accents: {
      title: "LaTeX 中的重音符号与特殊字母",
      intro: (
        <>
          <IntroP>
            在文本中，LaTeX 用命令加基础字母来构造带重音的字母：尖音符 <Cmd>{"\\'e"}</Cmd>（é）、钝音符{" "}
            <Cmd>{"\\`e"}</Cmd>（è）、扬抑符 <Cmd>{"\\^e"}</Cmd>（ê）、分音符（变音）<Cmd>{"\\\"o"}</Cmd>（ö）、波浪符{" "}
            <Cmd>{"\\~n"}</Cmd>（ñ）、软音符 <Cmd>{"\\c{c}"}</Cmd>（ç）、抑扬符 <Cmd>{"\\v{s}"}</Cmd>（š）、短音符{" "}
            <Cmd>{"\\u{a}"}</Cmd>（ă）、匈牙利双尖音符 <Cmd>{"\\H{o}"}</Cmd>（ő）、上点 <Cmd>{"\\.z"}</Cmd>（ż）、长音符{" "}
            <Cmd>{"\\=a"}</Cmd>（ā）、下点 <Cmd>{"\\d{a}"}</Cmd>、下横线 <Cmd>{"\\b{a}"}</Cmd>、上圆圈 <Cmd>{"\\r{a}"}</Cmd>（å）以及反尾形符{" "}
            <Cmd>{"\\k{e}"}</Cmd>（ę）。整个字母也有各自的命令：<Cmd>{"\\l"}</Cmd>（ł）、<Cmd>{"\\o"}</Cmd>（ø）、
            <Cmd>{"\\ae"}</Cmd>（æ）和 <Cmd>{"\\ss"}</Cmd>（ß）。要给 i 或 j 加重音，请使用无点形式 <Cmd>{"\\i"}</Cmd> 和{" "}
            <Cmd>{"\\j"}</Cmd>，例如用 <Cmd>{"\\'{\\i}"}</Cmd> 得到 í，这样重音就不会与字母上的点重叠。
          </IntroP>
          <IntroP>
            数学模式使用另一套重音命令，它们加在变量而不是字母之上：<Cmd>{"\\hat{x}"}</Cmd>、<Cmd>{"\\bar{x}"}</Cmd>、
            <Cmd>{"\\vec{v}"}</Cmd>、<Cmd>{"\\tilde{x}"}</Cmd>，表示导数的 <Cmd>{"\\dot{x}"}</Cmd> 和 <Cmd>{"\\ddot{x}"}</Cmd>，以及{" "}
            <Cmd>{"\\acute"}</Cmd>、<Cmd>{"\\grave"}</Cmd>、<Cmd>{"\\breve"}</Cmd> 和 <Cmd>{"\\check"}</Cmd>。对于多个字符，基础 LaTeX 提供可伸缩的{" "}
            <Cmd>{"\\widehat{xy}"}</Cmd> 和 <Cmd>{"\\widetilde{xy}"}</Cmd>，还有用于共轭的 <Cmd>{"\\overline{z}"}</Cmd> 和用于向量的{" "}
            <Cmd>{"\\overrightarrow{AB}"}</Cmd>；这些都不需要 amsmath。
          </IntroP>
          <IntroP>
            自 2018 年起，LaTeX 默认读取 UTF-8，因此可以在源文件中直接输入 é、ö 或 ñ（较旧的环境需要{" "}
            <Cmd>{"\\usepackage[utf8]{inputenc}"}</Cmd>）。再加上 <Cmd>{"\\usepackage[T1]{fontenc}"}</Cmd>，带重音的字母就会成为单个字形，能够正确断词和复制，而不是由两个部分拼合而成。完整示例请参阅我们的{" "}
            <IntroLink
              href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
              external
            >
              LaTeX 西班牙语字符与重音指南
            </IntroLink>
            ，或{" "}
            <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
              LaTeX 特殊字符概览
            </IntroLink>
            。点击下方任意卡片即可复制其命令。
          </IntroP>
        </>
      ),
    },
  },
};

export default cn;
