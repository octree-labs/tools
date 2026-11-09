import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "约化普朗克常数",
    meaning: "约化普朗克常数 ħ = h/2π，是角动量的量子，贯穿整个量子力学。",
    usage:
      "它出现在正则对易关系 [x, p] = i\\hbar、光子能量 E = \\hbar\\omega 以及不确定关系 \\Delta x\\, \\Delta p \\geq \\hbar/2 中。其数值约为 1.055 \\times 10^{-34} J s。\\hslash 是一个变体，用斜线代替了水平短横；请选定一种并保持一致。不带横杠的普通 h 是未约化的普朗克常数，出现在 E = h\\nu 中。在理论工作中，取 \\hbar = 1 的单位制是标准做法，因此在方程中省略它时请加以说明。",
  },
  "bra-vector": {
    name: "左矢",
    meaning: "狄拉克符号中的左矢：对偶（行）向量，即作用于右矢的线性泛函。",
    usage:
      "左矢 \\langle \\psi | 是右矢 |\\psi\\rangle 的共轭转置，因此在内积或期望值中它位于左侧。请使用 \\langle，绝不要用小于号 <，后者是关系符，间距较宽且形状不对。这里直接用 | 也可以，但 \\rvert 能给出正确的右定界符间距。需要反复使用时，可以定义 \\newcommand{\\bra}[1]{\\langle #1 \\rvert}。当态的标签较高时，\\left\\langle \\frac{\\psi}{2} \\right| 可以让两侧定界符一起伸缩。",
  },
  "ket-vector": {
    name: "右矢",
    meaning: "狄拉克符号中的右矢，把量子态表示为希尔伯特空间中的列向量。",
    usage:
      "量子态用右矢表示：量子比特的 |0\\rangle 和 |1\\rangle，谐振子能级 |n\\rangle，以及叠加态 \\alpha|0\\rangle + \\beta|1\\rangle。尖括号应使用 \\rangle，而不是 >。写成 \\lvert \\psi \\rangle 可以为 TeX 提供明确的左定界符，即使出现在减号之后，间距也正确。定义 \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} 这样的宏，可以让成百上千个右矢保持一致。张量积写作 |\\psi\\rangle \\otimes |\\phi\\rangle，或简写为 |\\psi\\phi\\rangle。右矢乘以左矢，即 |\\psi\\rangle\\langle\\psi|，是一个投影算子或密度矩阵。",
  },
  "braket": {
    name: "狄拉克括号（内积）",
    meaning: "两个态的内积，即左矢与右矢相遇；其模的平方给出跃迁概率。",
    usage:
      "概率幅 \\langle \\phi | \\psi \\rangle 具有共轭对称性，即 \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*，归一化条件为 \\langle \\psi | \\psi \\rangle = 1。矩阵元把算子夹在中间：\\langle \\phi | \\hat{A} | \\psi \\rangle。中间请使用普通的 |，而不要用 \\mid，后者的关系符间距会把两半推开。内容较高时，\\left\\langle \\phi \\middle| \\psi \\right\\rangle 能让中间的竖线也随之伸长。数学家把同一个量写作 (\\phi, \\psi) 或用逗号分隔的 \\langle \\phi, \\psi \\rangle。",
  },
  "laplacian": {
    name: "拉普拉斯算子",
    meaning: "拉普拉斯算子，即各二阶偏导数之和；它衡量函数值与其局部平均值的差异。",
    usage:
      "拉普拉斯方程 \\nabla^2 \\phi = 0、泊松方程 \\nabla^2 \\phi = -\\rho/\\varepsilon_0、热传导方程和波动方程都会用到它。物理学家偏爱 \\nabla^2，它提示该算子是梯度的散度；数学家则常写作 \\Delta，但这可能与表示有限差分或变化量的 \\Delta 冲突。在笛卡儿坐标系中 \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}，但在曲线坐标系中会出现额外的项。对向量场使用向量拉普拉斯算子时，请把作用对象加粗，以表明含义不同。",
  },
  "d-alembertian": {
    name: "达朗贝尔算子",
    meaning: "方框符号，在相对论中表示达朗贝尔波动算子，在模态逻辑中表示必然算子。",
    usage:
      "在狭义相对论中，\\Box = \\partial^\\mu \\partial_\\mu 把时间导数和空间导数结合在一起，因此波动方程为 \\Box \\phi = 0，克莱因-戈尔登方程为 (\\Box + m^2)\\phi = 0。符号约定随度规符号差而不同，请说明你采用的约定。模态逻辑学家把 \\Box p 读作“必然 p”，并用 \\Diamond p 表示“可能 p”。有些教材类比 \\nabla^2 把该算子写作 \\Box^2。外观相似的 \\square 常用作证明结束标记；请检查你的文档类使用哪个字形作为 QED 符号。",
  },
  "calligraphic-l-lagrangian": {
    name: "花体 L（拉格朗日量）",
    meaning: "花体 L，是拉格朗日密度的标准符号，在机器学习中也表示损失函数。",
    usage:
      "场论把作用量写作 S = \\int \\mathcal{L}\\, d^4x，欧拉-拉格朗日方程为 \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}。经典力学通常用普通的 L 表示拉格朗日量本身，而把 \\mathcal{L} 留给密度。机器学习论文用 \\mathcal{L}(\\theta) 表示损失函数，工程师则用它表示拉普拉斯变换 \\mathcal{L}\\{f\\}(s)。在最优化中，带乘子的拉格朗日函数也写作 \\mathcal{L}(x, \\lambda)。无论采用哪种含义，都请明确加以说明。通过勒让德变换与之对应的是哈密顿量 \\mathcal{H}。",
  },
  "calligraphic-h-hamiltonian": {
    name: "花体 H（哈密顿量）",
    meaning: "花体 H，用于表示哈密顿量（能量函数），也常用来表示希尔伯特空间。",
    usage:
      "在经典力学中，哈密顿正则方程为 \\dot{q} = \\partial \\mathcal{H}/\\partial p 和 \\dot{p} = -\\partial \\mathcal{H}/\\partial q。量子力学通常把哈密顿算符写作 \\hat{H}，而用 \\mathcal{H} 表示态所在的希尔伯特空间，因此在同一篇论文中两种花体含义可能发生冲突。统计物理在玻尔兹曼权重 e^{-\\beta \\mathcal{H}} 中用 \\mathcal{H} 表示哈密顿泛函。学习理论则用它表示假设类。如果文中出现不止一种含义，请选用不同的字母。注意，在默认字体中 \\mathcal 只支持大写字母。",
  },
  "tensor": {
    name: "张量",
    meaning: "二阶逆变张量，如能量-动量张量，用两个希腊字母上标表示。",
    usage:
      "广义相对论通过 G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu} 把几何与物质联系起来，守恒律为 \\nabla_\\mu T^{\\mu\\nu} = 0。花括号把两个指标合成一个上标；写成 T^\\mu\\nu 会把 \\nu 放到基线上。对于混合张量，可用空组保持指标的水平顺序：T^{\\mu}{}_{\\nu} 会把下指标放在上指标之后，而不是正下方。重复出现的上下指标遵循爱因斯坦求和约定。按照惯例，希腊字母指标遍历时空维度，拉丁字母指标只遍历空间维度。",
  },
  "christoffel-symbol": {
    name: "克里斯托费尔符号",
    meaning: "第二类克里斯托费尔符号，描述在列维-奇维塔联络下坐标基向量如何变化。",
    usage:
      "它由度规计算得到：\\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu})，并出现在测地线方程和协变导数中。尽管采用指标记号，它并不是张量。在同一个底座上同时写上标和下标会使它们竖直堆叠，这是此处的常见写法，因为该符号关于两个下指标对称。大写 Gamma 默认是直立体；如果排版风格要求斜体，可以用 \\varGamma。",
  },
  "partial-time": {
    name: "对时间的偏导数",
    meaning: "对时间 t 求偏导的算子，求导时所有空间变量保持不变。",
    usage:
      "它是各类演化方程的核心：热传导方程 \\frac{\\partial u}{\\partial t} = k \\nabla^2 u、连续性方程以及薛定谔方程。在行内公式中，完整的 \\frac 显得拥挤，因此可写作 \\partial u/\\partial t 或紧凑的 \\partial_t u；下标形式是偏微分方程论文中的标准写法。在行间公式中使用 \\frac；如果它出现在分数或矩阵内部而又必须保持完整尺寸，则使用 \\dfrac。请把它与全导数 d/dt 以及流体力学中使用的物质导数 D/Dt 区分开。",
  },
  "vector-field": {
    name: "向量场",
    meaning: "字母上方的箭头重音，表示该字母是向量，此处为电场 E。",
    usage:
      "入门物理用箭头表示向量，如 \\vec{E}、\\vec{F} = q\\vec{E}，而大多数期刊和高级教材更偏爱粗体 \\mathbf{E}，希腊字母则用 \\boldsymbol{\\omega}。\\vec 是一个宽度固定的短重音，只适合单个字符；对于由多个字母组成的向量，如线段 AB，\\overrightarrow{AB} 会横跨整个标签。整篇文档请统一使用一种向量样式。单位向量通常加尖帽，如 \\hat{x}；在重音下需要无点的 i 和 j 时，请使用 \\imath 和 \\jmath。",
  },
  "divergence": {
    name: "散度",
    meaning: "散度算子，即纳布拉算子与向量场的点积，给出单位体积的净向外通量。",
    usage:
      "最著名的用例是高斯定律 \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 和无磁单极定律 \\nabla \\cdot \\mathbf{B} = 0，不可压缩流动则要求 \\nabla \\cdot \\mathbf{u} = 0。\\cdot 带有二元运算符间距，这正是期望的效果。请使用 \\cdot，而不要用句点或 \\bullet。有些数学教材更喜欢写 \\operatorname{div} \\mathbf{F}，以避免把纳布拉算子当作向量。散度定理把它与边界通量联系起来：\\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}。",
  },
  "curl": {
    name: "旋度",
    meaning: "旋度算子，即纳布拉算子与向量场的叉积，衡量场的局部旋转程度或环量密度。",
    usage:
      "法拉第定律 \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t 以及带麦克斯韦修正项的安培定律都用它来书写；在流体力学中，\\nabla \\times \\mathbf{u} 就是涡量。有两个恒等式值得记住：梯度的旋度为零，旋度的散度也为零。\\times 是二元运算符，因此间距会自动处理。欧洲教材有时改写为 \\operatorname{rot} \\mathbf{F}，另一些教材则使用 \\operatorname{curl}。这种定义方式只适用于三维空间。",
  },
};

export default text;
