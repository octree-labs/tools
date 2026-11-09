import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "张量",
    meaning: "一般的 (2,2) 型张量，带有两个上指标（逆变）和两个下指标（协变）。",
    usage:
      "每个上指标按雅可比矩阵变换，每个下指标按其逆矩阵变换，因此把一个上指标与一个下指标缩并会得到与坐标无关的结果。写成 T^{ij}_{kl} 时，下指标正好排在上指标的正下方，看不出指标的先后顺序；对于非对称张量，应写成 T^{ij}{}_{kl}，让下指标组从上指标组之后开始。黎曼张量 R^i{}_{jkl} 和弹性张量 C_{ijkl} 是常见的例子。指标默认是斜体；除非它们是标签而不是张量的槽位，否则请保持斜体。",
  },
  "covariant-index": {
    name: "协变指标",
    meaning: "带两个下指标的张量，即二阶协变张量，例如度规、应力张量或双线性形式。",
    usage:
      "下指标按逆雅可比矩阵变换，T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}，与梯度的变换规则相同。例子包括度规 g_{ij}、里奇张量 R_{ij} 和柯西应力 \\sigma_{ij}。二阶协变张量作用于两个向量得到一个数，T_{ij} u^i v^j。在使用笛卡儿坐标的欧几里得空间中，上下指标的区别消失，这就是工程教材常把所有指标都写在下方的原因。任何这样的张量都可以分解为对称部分和反对称部分，T_{ij} = T_{(ij)} + T_{[ij]}。",
  },
  "contravariant-index": {
    name: "逆变指标",
    meaning: "带两个上指标的张量：二阶逆变张量，例如逆度规或能量-动量张量。",
    usage:
      "上指标像向量分量一样变换，T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}。能量-动量张量 T^{\\mu\\nu} 是物理中的典型例子，在平直时空中满足守恒律 \\partial_\\mu T^{\\mu\\nu} = 0。把两个指标放在同一个花括号组里，写成 T^{ij}；T^i^j 会引发双重上标错误。如果还需要撇号，T'^{ij} 可以正常工作，因为 LaTeX 会把撇号与后面的上标合并。与两个余向量缩并，T^{ij}\\alpha_i\\beta_j，得到一个标量；逆度规 g^{ij} 是几何中最常见的例子。",
  },
  "mixed-tensor": {
    name: "混合张量",
    meaning: "(1,1) 型混合张量，带一个上指标和一个下指标，等价于向量上的线性映射。",
    usage:
      "(1,1) 张量把向量 v^j 映为 T^i_j v^j，因此在一组基下它就是一个矩阵，其迹 T^i_i 与坐标无关。写成 T^i_j 时两个指标上下竖直对齐，这对克罗内克 δ 没问题，但在其他情况下会产生歧义，因为用度规降指标后 T^i{}_j 与 T_j{}^i 并不相同。空组 {} 的技巧可以让指标错开。用度规降低上指标得到 (0,2) 张量，T_{kj} = g_{ki} T^i{}_j，错开的写法能显示是哪个槽位移动了。",
  },
  "kronecker-delta": {
    name: "克罗内克 δ",
    meaning: "克罗内克 δ：两个指标相等时为 1，否则为 0，即恒等映射的分量。",
    usage:
      "它起到替换指标的作用，\\delta^i_j v^j = v^i，在 n 维中其迹为 \\delta^i_i = n。它还表达基的对偶关系 e^i(e_j) = \\delta^i_j，以及逆度规关系 g^{ik} g_{kj} = \\delta^i_j。由于它是对称的，把指标竖直叠放成 \\delta^i_j 并无害处，这一点与一般的混合张量不同。在笛卡儿情形下常写作两个指标都在下方的 \\delta_{ij}。不要把它与狄拉克 δ 函数 \\delta(x) 混淆。",
  },
  "levi-civita": {
    name: "列维-奇维塔符号",
    meaning: "三维列维-奇维塔符号：对 123 的偶排列取 +1，奇排列取 -1，有指标重复时取 0。",
    usage:
      "它可以用指标形式表示叉积和旋度，(\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k，并把行列式写成 \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}。缩并恒等式 \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} 在向量分析的证明中经常用到。许多作者更喜欢用弯曲的 epsilon \\varepsilon_{ijk}，以便把 \\epsilon 留给小量；选定一种并始终使用。在弯曲空间中它是张量密度，真正的张量要乘上因子 \\sqrt{g}。",
  },
  "einstein-summation": {
    name: "爱因斯坦求和约定",
    meaning: "爱因斯坦求和约定：重复出现的一上一下指标表示求和，因此 A^i B_i 表示对 i 求和。",
    usage:
      "按照这一约定，A^i B_i 代表 \\sum_i A^i B_i，即向量与余向量的标量配对，无需写出求和号。每个求和指标必须恰好出现一次在上、一次在下；某个指标出现三次就说明有错误。自由指标在等式两边必须一致，例如 v^i = T^i_j u^j。如果读者可能不熟悉这一约定，请先说明一次，并在第一个公式中给出显式的 \\sum 形式。",
  },
  "tensor-product": {
    name: "张量积",
    meaning: "A 与 B 的张量积，把两个张量或向量空间合成一个阶数或维数更高的对象。",
    usage:
      "对向量空间有 \\dim(V \\otimes W) = \\dim V \\cdot \\dim W，对张量则分量相乘，(A \\otimes B)^{ij} = A^i B^j。对矩阵而言，同一符号表示克罗内克积，即元素为 a_{ij}B 的分块矩阵。量子力学用它描述复合系统，|\\psi\\rangle \\otimes |\\phi\\rangle。\\otimes 是二元运算符，会自动添加间距；对指标集上的乘积请使用大型运算符 \\bigotimes_{i=1}^n V_i，重复因子则写作 V^{\\otimes k}。",
  },
  "contraction": {
    name: "张量缩并",
    meaning: "混合张量的缩并：对重复的一上一下指标求和，得到其迹。",
    usage:
      "令一个上指标等于一个下指标并求和，就会消去这两个指标，使阶数降低二；对 (1,1) 张量，结果 T^i_i = \\operatorname{tr} T 是一个标量。里奇张量是黎曼张量的缩并，标量曲率再与度规缩并得到，R = g^{ij}R_{ij}。只有上指标才能与下指标缩并；缩并两个下指标需要借助度规。请写 \\operatorname{tr} 而不是普通的 tr，这样迹符号是直立体并带有算子间距。",
  },
  "metric-lowering": {
    name: "用度规降指标",
    meaning: "降指标：度规把向量的逆变分量 v^j 转换为协变分量 v_i。",
    usage:
      "这就是降号音乐同构，常写作 v^\\flat，它把向量与余向量等同起来。在使用笛卡儿坐标的欧几里得空间中 g_{ij} = \\delta_{ij}，因此降指标在数值上不改变任何东西；在符号差为 (-,+,+,+) 的闵可夫斯基空间中，它会改变时间分量的符号。自由指标 i 在两边必须一致，而 j 被求和。对完整的张量，要逐个降低每个指标，T_{ij} = g_{ik} T^k{}_j，并注意槽位顺序。v^\\flat 中使用的 \\flat 命令是音乐中的降号，在标准数学模式下即可使用。",
  },
  "metric-raising": {
    name: "用度规升指标",
    meaning: "升指标：逆度规把协变分量 v_j 变回逆变分量 v^i。",
    usage:
      "升指标是升号音乐同构 \\alpha^\\sharp，梯度向量就是这样由微分构造出来的：(\\operatorname{grad} f)^i = g^{ij}\\partial_j f。先升后降会回到原来的分量，因为 g^{ij} g_{jk} = \\delta^i_k。在相对论中，p^\\mu = g^{\\mu\\nu} p_\\nu 把四维动量余向量转换为向量。逆度规要用上指标书写，绝不要写成 g^{-1}_{ij}，那样会暗示错误的指标位置。\\sharp 命令给出相应的升号；对于对角度规，只有 j = i 的项保留下来。",
  },
  "partial-derivative": {
    name: "偏导数",
    meaning: "对坐标 x^i 求偏导数的简写，也用来表示坐标基向量。",
    usage:
      "用 \\partial_i f 代替 \\frac{\\partial f}{\\partial x^i} 可以让指标繁多的公式保持紧凑；在几何中，\\partial_i 也表示基向量场 \\partial/\\partial x^i。相对论在时空上使用 \\partial_\\mu，达朗贝尔算子写作 \\partial_\\mu\\partial^\\mu。在弯曲坐标中，张量分量的偏导数不是张量；要解决这个问题，请把 \\partial_i 换成 \\nabla_i。逗号下标 f_{,i} 是传统的等价写法。偏导数请用 \\partial，不要用 d 或 \\delta。偏导数可以交换次序，\\partial_i\\partial_j = \\partial_j\\partial_i，这就是坐标向量场的李括号为零的原因。",
  },
  "covariant-derivative": {
    name: "协变导数",
    meaning: "沿第 i 个坐标方向的协变导数，是偏导数 \\partial_i 的张量化替代。",
    usage:
      "作用于向量时它加上一个克里斯托费尔修正项，\\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k，作用于余向量时符号相反，\\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k。传统的分号记法把同一个量写成 v^j{}_{;i}。度规相容性意味着 \\nabla_k g_{ij} = 0，因此可以在 \\nabla 内外自由升降指标。协变导数一般不可交换；它们作用于向量的对易子给出黎曼张量。相对论教材把同一个算子写作 \\nabla_\\mu。",
  },
  "symmetrization": {
    name: "对称化",
    meaning: "张量关于指标 i 和 j 的对称部分，用圆括号把这对指标括起来表示。",
    usage:
      "对两个指标有 T_{(ij)} = \\tfrac12(T_{ij} + T_{ji})；对 n 个指标，则对所有排列求和再除以 n!。括号记法在广义相对论中是标准写法，例如基灵方程 \\nabla_{(i}\\xi_{j)} = 0。若要把某个指标排除在对称化之外，用竖线把它隔开，如 T_{(i|j|k)}。下标中的圆括号是普通字符，不需要特殊命令；只需注意括号可以在不同的下标中开启和闭合。",
  },
  "antisymmetrization": {
    name: "反对称化",
    meaning: "张量关于 i 和 j 的反对称部分，用方括号把指标括起来表示。",
    usage:
      "对两个指标有 T_{[ij]} = \\tfrac12(T_{ij} - T_{ji})，一般情况下则是对所有排列的带符号求和再除以 n!。任何双指标张量都可分解为 T_{ij} = T_{(ij)} + T_{[ij]}。第一比安基恒等式写作 R_{i[jkl]} = 0，电磁场张量满足 \\partial_{[\\mu}F_{\\nu\\lambda]} = 0。有些作者省略 1/n! 因子，因此请说明你采用的归一化。下标中的方括号是普通字符，无需使用 \\lbrack。完全反对称的协变张量对应于微分形式。",
  },
  "tensor-rank": {
    name: "张量的型",
    meaning: "张量的型：p 个逆变（上）指标和 q 个协变（下）指标，有时也被笼统地称为张量的阶。",
    usage:
      "(p, q) 型张量是 V^{\\otimes p} \\otimes (V^*)^{\\otimes q} 的元素，因此向量是 (1, 0) 型，余向量是 (0, 1) 型，线性映射是 (1, 1) 型，度规是 (0, 2) 型。术语并不统一：有些书把 p + q 称为阶或秩，而把“型”留给这一对数。缩并把 (p, q) 型映为 (p-1, q-1) 型。在 LaTeX 中这对数只是带逗号的圆括号；数学模式下逗号后会自动加细空格，所以不要再额外加间距。",
  },
  "basis-vector": {
    name: "基向量",
    meaning: "向量空间或切空间的基向量，用下指标标记，使分量带上指标。",
    usage:
      "向量展开为 v = v^i e_i，基上的下指标与分量上的上指标配对。在几何中，坐标基为 e_i = \\partial_i；在正交归一标架中 g(e_i, e_j) = \\delta_{ij}。物理和工程中常写成粗体 \\mathbf{e}_i 或带帽的 \\hat{e}_i，并用 \\mathbf{e}_x、\\mathbf{e}_y 表示笛卡儿方向。请保持指标在下方；把基向量写成 e^i 会与对偶基的约定冲突。在基变换 e'_i = A^j{}_i e_j 下，分量按逆矩阵变换。",
  },
  "dual-basis": {
    name: "对偶基",
    meaning: "由 e^i(e_j) = \\delta^i_j 定义的对偶基余向量，用于提取向量的分量。",
    usage:
      "把 e^i 作用于向量即可取出其第 i 个分量，e^i(v) = v^i，余向量则展开为 \\alpha = \\alpha_i e^i。对坐标而言，对偶基为 e^i = dx^i；在嘉当方法中，正交归一余标架 e^a 给出度规 g = \\delta_{ab}\\, e^a \\otimes e^b。由于指标是上标，e^i 可能被误读为 e 的幂；如有这种风险，请加以说明，或改用余标架的常见替代写法 \\theta^i。",
  },
  "component-transform": {
    name: "分量变换律",
    meaning: "二阶逆变张量的变换律：每个上指标都乘上一个变换矩阵因子。",
    usage:
      "这里 \\Lambda^i_k 是变换矩阵，在狭义相对论中是洛伦兹变换，一般情况下则是雅可比矩阵 \\partial x'^i/\\partial x^k，带撇的分量位于新标架中。张量正是由遵守这一变换律来定义的，而下指标则按逆矩阵变换。LaTeX 会把 T'^{ij} 中的撇号与上标合并，因此撇号周围不需要花括号。当矩阵不对称时，把指标错开写成 \\Lambda^i{}_k，让读者知道哪个槽位是行。",
  },
};

export default text;
