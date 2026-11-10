import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  manifold: {
    name: "流形",
    meaning: "花体 M，是微分几何与拓扑学论文中命名光滑流形的标准方式。",
    usage:
      "用 \\mathcal{M} 代替普通的斜体 M，可以表明该对象是一个空间而不是矩阵或数，在 M 已被占用时很有帮助。坐标卡写作 \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n，维数写作 \\dim \\mathcal{M} = n。同一字母在逻辑学中也表示 Kripke 模型，在代数几何中表示模空间，因此请在正文中定义一次。\\mathcal 只对大写拉丁字母有可靠的字形；若想要更花哨的手写体 M，请用 \\mathscr{M}，并在整篇论文中保持同一种风格。",
  },
  "tangent-space": {
    name: "切空间",
    meaning: "流形 M 在点 p 处的切空间：由经过 p 的所有曲线的速度向量构成的向量空间。",
    usage:
      "对于 n 维流形，T_p M 是一个 n 维实向量空间，在 p 处以 \\partial/\\partial x^i 为坐标基。光滑映射的微分写作 dF_p: T_p M \\to T_{F(p)} N，而向量场为每个 p 指定 T_p M 中的一个元素。在数学模式中，T_p 与 M 之间的空格会被忽略，因此无论怎样输入，输出都是紧凑的 T_pM；若想要可见的间隔，请加 \\,。如果流形命名为 \\mathcal{M}，为保持一致请写作 T_p\\mathcal{M}。",
  },
  "cotangent-space": {
    name: "余切空间",
    meaning: "p 处的余切空间：T_p M 的对偶空间，由 p 处切向量上的线性泛函（余向量）构成。",
    usage:
      "T^*_p M 的元素是余向量，如微分 df_p，坐标微分 dx^i 构成与 \\partial/\\partial x^i 对偶的基。星号放在下标之前或之后（T^*_p M 与 T_p^* M）输出相同，因为无论顺序如何，TeX 都会把上标和下标上下堆叠。用 ^* 而不用 ^{\\ast} 只是为了简洁；两者给出相同的星号。度量通过降指标把 T_p M 与 T^*_p M 等同起来，梯度正是由此变成余向量的。",
  },
  "tangent-bundle": {
    name: "切丛",
    meaning: "切丛：所有切空间 T_p M 的不交并，它本身是一个维数为 M 两倍的流形。",
    usage:
      "TM 中的点是满足 v \\in T_p M 的二元组 (p, v)，投影 \\pi: TM \\to M 会舍去向量。向量场恰好是满足 \\pi \\circ X = \\mathrm{id} 的光滑截面 X: M \\to TM。F: M \\to N 的推前映射常写作 TF 或 dF: TM \\to TN。由于 TeX 排两个斜体字母时不留间隙，TM 能正确地读作一个名称；如果可能与乘积 T \\cdot M 混淆，请在正文中加以说明。",
  },
  "cotangent-bundle": {
    name: "余切丛",
    meaning: "余切丛：M 的所有余切空间构成的丛，是哈密顿力学的自然相空间。",
    usage:
      "T^*M 中的点是由位置和余向量组成的二元组 (q, p)，这正是经典力学在此展开的原因。它带有典范辛形式 \\omega = dq^i \\wedge dp_i，M 上的 1-形式就是 T^*M 的截面。更高次的形式是 \\Lambda^k T^*M 的截面，用 \\Lambda 或 \\bigwedge^k 书写。星号是上标，因此 T^*M 与 T^{*}M 显示相同；避免使用不带脱字符的 T*M，它会把一个二元运算符式的星号放在基线上。",
  },
  "covariant-derivative": {
    name: "协变导数",
    meaning: "向量场 Y 沿方向 X 的协变导数，由仿射联络 \\nabla 定义。",
    usage:
      "仿射联络关于 X 是函数线性的，并满足莱布尼茨法则 \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y。列维-奇维塔联络是唯一与度量相容的无挠联络，它给出 \\nabla_X Y - \\nabla_Y X = [X, Y]。在坐标下它化为 \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j。作为下标的方向以小字号排出；对于 \\nabla_{\\dot\\gamma}\\dot\\gamma 这样较长的表达式，请把下标放进花括号，使上方的点保持附着。",
  },
  "christoffel-symbol": {
    name: "克里斯托费尔符号",
    meaning: "克里斯托费尔符号：联络系数，描述坐标基向量如何随点变化。",
    usage:
      "对于列维-奇维塔联络，它们由度量算出：\\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij})，并且关于 i 和 j 对称。它们不是张量的分量，因此在法坐标下可以在某一点处为零。在 LaTeX 中大写希腊字母默认是直立的；如果你的格式要求斜体，请用 \\varGamma。一些较早的教材把第二类克里斯托费尔符号写成花括号符号，但如今 \\Gamma 形式是标准写法。",
  },
  "riemann-curvature": {
    name: "黎曼曲率张量",
    meaning: "黎曼曲率张量的分量，衡量向量沿小闭路平行移动一周后无法回到原样的程度。",
    usage:
      "按一种常见约定，R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}，但符号和指标顺序因教材而异，因此请说明你采用的约定。写成 R^l_{ijk} 时，TeX 会把 l 直接堆在 i 的正上方，看不出升起的是哪个位置；要让指标错开，请用 R^l{}_{ijk}，其中空组把下标推向右侧。降下第一个指标得到 R_{lijk}，在通常约定下它关于前一对和后一对指标都是反对称的，但在引用恒等式之前，请核实所引文献的指标位置。",
  },
  "ricci-tensor": {
    name: "里奇张量",
    meaning: "里奇张量：黎曼张量对一对指标求迹的结果，是一个对称的二指标曲率量。",
    usage:
      "它通过缩并得到，按一种常见约定为 R_{ij} = R^k_{ikj}，并支配沿测地线的体积畸变。爱因斯坦场方程为 R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}，满足 R_{ij} = \\lambda g_{ij} 的流形称为爱因斯坦流形。物理学家通常用希腊字母 \\mu\\nu 作指标，数学家则用拉丁字母 ij。里奇平坦指 R_{ij} = 0，这是定义卡拉比-丘度量的条件。有些作者用 \\mathrm{Ric} 表示与坐标无关的张量；\\operatorname{Ric} 给出同样的直立文字，并带有运算符间距。",
  },
  "scalar-curvature": {
    name: "数量曲率",
    meaning: "数量曲率（标量曲率）：里奇张量的完全迹，在黎曼流形的每一点都是一个数。",
    usage:
      "它定义为 R = g^{ij} R_{ij}，在二维情形下等于高斯曲率 K 的两倍。爱因斯坦-希尔伯特作用量对它积分，S = \\int R \\sqrt{-g}\\, d^4x，而山边问题寻求具有常数 R 的共形度量。由于单独的 R 也表示实数集、关系或半径，许多作者改写为 \\mathrm{Scal} 或 s；切勿在同一篇论文中用 R 表示 \\mathbb{R}。在数学模式中把它排成普通斜体 R 即可。",
  },
  "metric-tensor": {
    name: "度量张量",
    meaning: "度量张量的分量，即在流形上定义长度和角度的对称正定形式。",
    usage:
      "线元写作 ds^2 = g_{ij}\\, dx^i dx^j，其中隐含求和，曲线的长度为 \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt。在相对论中度量是洛伦兹度量，指标写作 g_{\\mu\\nu}，例如闵可夫斯基度量 \\eta_{\\mu\\nu}。它的行列式出现在体积形式 \\sqrt{\\det g}\\, dx^1 \\cdots dx^n 中，常简写为 \\sqrt{g}。在度量与微分之间用 \\, 加入细空格，使 ds^2 = g_{ij}\\,dx^i\\,dx^j 不显拥挤。写成矩阵形式时常记作 (g_{ij}) 或简写为 g。",
  },
  "inverse-metric": {
    name: "逆度量",
    meaning: "逆度量：g_{ij} 的逆矩阵，用于升指标以及构造迹和梯度。",
    usage:
      "它由 g^{ij} g_{jk} = \\delta^i_k 定义，因此在正交标架中等于单位矩阵。升指标时直接使用它，v^i = g^{ij} v_j，函数梯度的分量为 (\\nabla f)^i = g^{ij}\\partial_j f。拉普拉斯-贝尔特拉米算子为 \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f)。不要把 g^{ij} 与单个分量的倒数混淆；它是逆矩阵的元素，因此除非度量是对角的，否则 g^{11} \\ne 1/g_{11}。",
  },
  "exterior-derivative": {
    name: "外微分",
    meaning: "微分形式 \\omega 的外微分，它把形式的次数加一，并推广了梯度、旋度和散度。",
    usage:
      "该算子满足 d \\circ d = 0 以及分次莱布尼茨法则：对 k-形式 \\alpha，有 d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta。斯托克斯定理成为 \\int_M d\\omega = \\int_{\\partial M} \\omega；当 d\\omega = 0 时形式称为闭形式，当 \\omega = d\\eta 时称为恰当形式。许多格式把该算子排成直立的 \\mathrm{d}\\omega，以区别于变量 d；无论选择哪种，都要保持一致，包括 \\int f\\, dx 这样的积分中。",
  },
  "wedge-product": {
    name: "楔积",
    meaning: "两个微分形式的楔积（外积），这是一种反对称乘积，用于构造更高次的形式。",
    usage:
      "对 k-形式 \\alpha 和 l-形式 \\beta，楔积是分次交换的：\\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha，因此 1-形式与自身的楔积为零。体积形式写作 dx^1 \\wedge \\cdots \\wedge dx^n。\\wedge 是二元运算符，因此 TeX 会在两侧加中等间距；\\land 输出完全相同的字形，最好留作逻辑与使用。表示外幂或对指标集取的大楔积时，请用 \\bigwedge，如 \\bigwedge^k V。",
  },
  "lie-derivative": {
    name: "李导数",
    meaning: "沿向量场 X 的李导数，衡量张量在 X 生成的流作用下如何变化。",
    usage:
      "作用于函数时它就是 \\mathcal{L}_X f = Xf，作用于向量场时它是李括号 \\mathcal{L}_X Y = [X, Y]，作用于形式时由嘉当魔术公式得 \\mathcal{L}_X = d\\iota_X + \\iota_X d。与 \\nabla_X 不同，它不需要联络或度量。基灵向量场满足 \\mathcal{L}_X g = 0。花体 L 是通常的选择；一些相对论教材用 \\pounds_X，但 \\mathcal{L} 更清晰。在同时使用两者的物理论文中，注意不要与拉格朗日量 \\mathcal{L} 混淆。",
  },
  "lie-bracket": {
    name: "李括号",
    meaning: "两个向量场的李括号：以 X(Yf) - Y(Xf) 作用于函数的向量场。",
    usage:
      "李括号是双线性、反对称的，并满足雅可比恒等式 [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0，使向量场构成李代数。在坐标下，其分量为 X^j\\partial_j Y^i - Y^j\\partial_j X^i。同样的方括号记法也表示矩阵或量子算符的对易子 AB - BA。参数较短时直接用 [ 和 ] 即可；内容较高时请用 \\left[ \\right] 或 \\bigl[ \\bigr]，使括号随之缩放。它衡量 X 与 Y 的流不可交换的程度，坐标向量场总满足 [\\partial_i, \\partial_j] = 0。",
  },
  "connection-form": {
    name: "联络形式",
    meaning: "联络 1-形式：由 1-形式构成的矩阵，相对于丛的选定标架描述联络。",
    usage:
      "在嘉当活动标架法中，取余标架 e^i，无挠联络的第一结构方程为 de^i = -\\omega^i_j \\wedge e^j。对于正交标架中的度量联络，该矩阵是反对称的，\\omega_{ij} = -\\omega_{ji}。物理学家把同一对象称为自旋联络 \\omega^a{}_b。指标顺序重要时，请用 \\omega^i{}_j 让指标错开，并且不要与同样记作 \\omega 的辛形式或凯勒形式混淆。在标架变换下它按非齐次方式变换，因此与克里斯托费尔符号一样，它不是张量。",
  },
  "curvature-form": {
    name: "曲率形式",
    meaning: "曲率 2-形式：由 2-形式构成的矩阵，在给定标架下编码联络的曲率。",
    usage:
      "嘉当第二结构方程把它们定义为 \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j，简写为 \\Omega = d\\omega + \\omega \\wedge \\omega。在余标架下展开即可还原黎曼张量，\\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l。陈-韦伊理论由这些形式构造示性类，如 \\operatorname{tr}(\\Omega \\wedge \\Omega)。大写 \\Omega 默认是直立的；\\varOmega 给出斜体版本。同一字母也表示形式空间 \\Omega^k(M)，因此应由上下文明确其含义。",
  },
  geodesic: {
    name: "测地线",
    meaning: "流形上以 t 为参数的曲线；在此语境中指测地线，即协变加速度为零的曲线。",
    usage:
      "测地线满足 \\nabla_{\\dot\\gamma}\\dot\\gamma = 0，在坐标下即 \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0。初始条件 \\gamma(0) = p 和 \\dot\\gamma(0) = v 定义了指数映射 \\exp_p(v) = \\gamma(1)。对时间求导用 \\dot{\\gamma} 和 \\ddot{\\gamma}；当 t 不是时间时，可改用 \\gamma'(t)。请写 \\dot\\gamma^k 而不是 \\dot{\\gamma^k}，使点只位于字母上方，并保持 \\gamma 为小写，因为 \\Gamma 专用于克里斯托费尔符号。在圆球面上，测地线就是大圆的弧。",
  },
  "parallel-transport": {
    name: "平行移动",
    meaning: "沿曲线 \\gamma 的平行移动：在切空间之间移动向量而不使其转动的线性映射。",
    usage:
      "它是映射 P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M，对于与度量相容的联络，它是等距映射。沿闭路的平行移动生成和乐群，和乐群非平凡反映了曲率的存在。有些教材写作 \\tau_\\gamma、\\Pi_\\gamma 或 P^\\gamma_{t \\leftarrow s}，以记录端点。对单字母下标，P_{\\gamma} 中的花括号可以省略，但下标变长时请保留，如 P_{\\gamma|[0,t]}。当 \\nabla_{\\dot\\gamma} V = 0 时，称向量场 V 沿 \\gamma 平行，P_\\gamma 把 V(0) 送到 V(1)。沿小闭路平行移动的结果与恒等映射相差一个与曲率成正比的项。",
  },
};

export default text;
