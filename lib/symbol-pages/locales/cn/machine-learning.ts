import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  "expectation": {
    name: "数学期望",
    meaning: "黑板粗体 E，表示随机变量期望值的标准记号。",
    usage:
      "期望在概率论和机器学习中随处可见：\\mathbb{E}[X] = \\sum_x x\\,p(x)，风险 \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)]，或把方差写成 \\mathbb{E}[X^2] - \\mathbb{E}[X]^2。把分布写在下标中，可以明确随机性的来源。较早的教材使用普通正体 E 或 \\operatorname{E}；只要前后一致，两者都可以。注意 \\mathbb 只提供大写字母，因此 \\mathbb{e} 会输出乱码。参数用方括号括起，当其中含有较高的分式时使用 \\left[ \\right]。定义一个宏，如 \\newcommand{\\E}{\\mathbb{E}}，可以保持记号统一。",
  },
  "kl-divergence": {
    name: "KL 散度",
    meaning: "Q 相对于 P 的 Kullback-Leibler 散度：用 Q 代替真实分布 P 时多出的期望对数损失。",
    usage:
      "KL 散度为 D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}，是变分推断、ELBO（证据下界）以及强化学习中策略正则化的核心。它不对称，因此 P 和 Q 的顺序很重要，二者之间用双竖线分隔。\\| 是普通符号，两侧没有间距，看起来可能拥挤；许多作者改写 \\parallel，它带有关系符间距，或者在两侧加 \\,。下标中的 \\text{KL} 会继承周围的字体，因此在斜体的定理文本中用 \\mathrm{KL} 更稳妥。若其中含有较大的分式，请使用 \\left( \\right)。",
  },
  "kl-divergence-short-form": {
    name: "KL 散度（简写形式）",
    meaning: "分布 P 与 Q 之间 Kullback-Leibler 散度的简写记号，省略了前缀 D。",
    usage:
      "许多机器学习论文省去 D，直接写 \\text{KL}(P \\| Q)，在损失函数中尤其常见，例如 VAE 目标函数中的 \\text{KL}(q_\\phi(z|x) \\| p(z)) 项。它与 D_{\\text{KL}}(P \\| Q) 含义完全相同，同样不对称：前向 KL 倾向于覆盖全部概率质量，反向 KL 倾向于寻找众数。由于 \\text{} 会沿用周围文本的字体，在定理环境中 KL 可能变成斜体；\\operatorname{KL} 或 \\mathrm{KL} 可以解决这个问题，而且 \\operatorname 还会在括号前加上合适的间距。可以考虑使用 \\,\\|\\, 或 \\parallel，让双竖线周围更宽松。",
  },
  "argmax": {
    name: "最大值点（argmax）",
    meaning: "最大值点：函数取得最大值时的自变量取值。",
    usage:
      "写成 \\arg\\max 时，它组合了两个预定义算子：从不带上下限的 \\arg 和带上下限的 \\max。结果是在行间公式中下标只落在 max 下方，约束条件偏离中心。更好的做法是使用 \\operatorname*{arg\\,max}，或在导言区定义 \\DeclareMathOperator*{\\argmax}{arg\\,max}，使下标居中位于整个词下方。它出现在分类规则 \\hat{y} = \\arg\\max_k p(k|x)、最大似然估计以及强化学习的贪心策略中。注意当最大值点不唯一时，它返回的是一个集合。",
  },
  "argmin": {
    name: "最小值点（argmin）",
    meaning: "最小值点：函数取得最小值时的自变量。",
    usage:
      "大多数优化和学习问题都用 \\arg\\min 来定义解，例如最小二乘 \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2，或 k-means 的簇分配。这样输入时，它是 \\arg 后接 \\min，因此在行间公式中下标居中于 min 而不是整个词组下方。若要使下标居中，请使用 \\operatorname*{arg\\,min}，或在导言区声明一个带星号的算子。有些作者把 argmin 写成一个不带空格的词；arg\\,min 中的细空格遵循最常见的写法。记住，当最小值点不唯一时，结果可能是一个集合。",
  },
  "argmax-subscript": {
    name: "带下标的 argmax",
    meaning: "下标为优化变量 θ 的 argmax：使目标函数最大的参数值。",
    usage:
      "这种形式写明了被优化的变量，是书写最大似然估计 \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta) 和最大后验（MAP）估计的标准方式。由于下标只附在 \\max 上，在行间公式中 θ 位于 max 下方，而不是居中于整个 arg max 下方。改用 \\operatorname*{arg\\,max}_{\\theta} 或已声明的 \\argmax 可以让下标居中，这也是大多数期刊的要求。在行内公式中，下标无论如何都出现在右侧。也可以在下标中列出约束，例如 \\theta \\in \\Theta，多行时使用 \\substack。",
  },
  "argmin-subscript": {
    name: "带下标的 argmin",
    meaning: "关于 θ 的 argmin：使损失函数或目标函数最小的参数值。",
    usage:
      "经验风险最小化通常这样书写：\\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i)。在行间公式中，下标只位于 min 下方，看起来略微偏离中心；\\operatorname*{arg\\,min}_{\\theta} 可以解决这个问题并保持间距一致。如果经常使用，在导言区定义宏既省事又能保证输出一致。正则化目标函数通常会加上惩罚项，如岭回归或 lasso。当最小值点唯一时，用等号即可；否则，由于 argmin 返回的是集合，用 \\in 这一关系更准确。",
  },
  "softmax": {
    name: "softmax 函数",
    meaning: "softmax 函数名：通过取指数并归一化，把 logits 向量映射为概率分布。",
    usage:
      "softmax 按分量定义为 \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j}，几乎每个分类器的最后一层以及注意力机制都会用到它，后者写作 \\text{softmax}(QK^\\top/\\sqrt{d_k})V。由于 \\text{} 使用周围文本的字体，在定理或强调环境中它会变成斜体。\\operatorname{softmax} 通常是更好的选择：它始终为正体，并像 \\sin 一样在括号前添加算子间距。温度参数写作 \\text{softmax}(z/T)。当参数中含有分式时，请使用 \\left( \\right)。在侧重代码的论文中，要说明 softmax 沿哪个维度归一化，例如类别维度。",
  },
  "relu": {
    name: "ReLU 激活函数",
    meaning: "线性整流单元激活函数的名称，输出 max(0, x)，将负输入置零。",
    usage:
      "ReLU 定义为 \\text{ReLU}(x) = \\max(0, x)，正输入处导数为 1，负输入处导数为 0。它是现代神经网络隐藏层的默认激活函数；变体包括 Leaky ReLU \\max(\\alpha x, x) 和 GELU。写 \\text{ReLU} 可以，但它会跟随周围文本的样式，在斜体环境中会倾斜；\\operatorname{ReLU} 或 \\mathrm{ReLU} 保持正体，而且 \\operatorname 还会处理参数前的间距。作用于向量时，要说明它是逐元素作用的，如 \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b})。",
  },
  "gradient-of-l": {
    name: "损失函数 L 的梯度",
    meaning: "损失 L 关于参数 θ 的梯度：训练中使用的偏导数向量。",
    usage:
      "这正是反向传播所计算的量，它驱动梯度下降的更新 \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}。\\nabla 的下标说明对哪些变量求导，当损失同时依赖参数和输入时这一点很重要，例如对抗攻击中的 \\nabla_x \\mathcal{L}。\\mathcal 给出花体 L，且只支持大写字母。在行内文本中，下标位于 ∇ 的右下方，这是标准写法。对于随机估计，加上帽子符号会有帮助：\\hat{\\nabla}_\\theta \\mathcal{L} 或 \\tilde{g}。",
  },
  "partial-derivative": {
    name: "偏导数",
    meaning: "损失 L 关于参数 θ 的偏导数，即损失对每个参数的敏感度。",
    usage:
      "这个分式是反向传播的标量基本单元；链式法则写作 \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}。偏导数用弯曲的 d 即 \\partial，全导数用普通的 d。在正文中，\\frac 会缩小以适应行高，往往难以阅读；\\tfrac、斜线形式 \\partial \\mathcal{L}/\\partial \\theta，或在行间公式中使用 \\dfrac 效果可能更好。如需反复使用，宏或 physics 宏包风格的 \\pdv 命令可以减少输入。当 θ 是向量时，许多作者改用 \\nabla_\\theta \\mathcal{L}。",
  },
  "theta-star": {
    name: "最优参数 θ*",
    meaning: "带星号上标的 θ：最优参数值，通常是损失函数的最小值点。",
    usage:
      "带星号的符号表示最优值，如 \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta)，收敛性结果会给出 \\|\\theta_t - \\theta^*\\| 的界。输入 ^* 会得到上标大小的星号。替代写法有 ^\\ast（效果相同）和 ^\\star（五角星），有些作者偏好后者，因为星号可能与共轭或伴随混淆。要把它与 \\hat{\\theta} 区分开，后者通常表示由数据得到的估计值，而不是真正的最优值。如果 θ 还带有下标，两种顺序都可以，\\theta^*_t 和 \\theta_t^* 的输出相同。",
  },
  "weight-matrix": {
    name: "权重矩阵",
    meaning: "粗体正体 W，神经网络层中权重矩阵的惯用记号。",
    usage:
      "粗体大写字母表示矩阵，粗体小写字母表示向量，因此全连接层写作 \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}，各层的权重写作 \\mathbf{W}^{(l)} 或 \\mathbf{W}_l。\\mathbf 生成正体粗体拉丁字母；它不能加粗希腊字母和大多数符号，因此 \\boldsymbol{\\Sigma} 或粗体 \\theta 要用 \\boldsymbol 或 \\bm。许多深度学习论文完全不用粗体，直接写 W；选定一种约定并贯穿全文。转置通常写作 \\mathbf{W}^\\top，比 ^T 更清晰。",
  },
  "bias-vector": {
    name: "偏置向量",
    meaning: "粗体小写 b，线性变换之后所加偏置向量的常用记号。",
    usage:
      "偏置使每个神经元的预激活值发生平移，如 \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}，各层的偏置写作 \\mathbf{b}^{(l)}。按照惯例，粗体小写表示列向量。\\mathbf 给出正体粗体；如果想要粗斜体向量（一些物理期刊如此），请改用 \\boldsymbol{b} 或 \\bm{b}。下标要保持一致：第 i 个偏置分量是标量，应写成普通斜体 b_i，而不是粗体。在线性模型中，截距通常写作 b 或 w_0，而不是粗体向量。",
  },
  "cross-entropy": {
    name: "交叉熵",
    meaning: "真实分布 p 与模型 q 之间的交叉熵：用 q 对 p 编码时的期望码长。",
    usage:
      "交叉熵为 H(p, q) = -\\sum_x p(x) \\log q(x)，是分类问题的损失函数：使用 one-hot 标签时它化简为 -\\log q(y)。它可以分解为 H(p, q) = H(p) + D_{\\text{KL}}(p \\| q)，这解释了为什么关于 q 最小化交叉熵也就最小化了 KL 散度。注意记号冲突：以随机变量为参数的 H(X, Y) 通常表示联合熵，因此有些作者写 H_\\times(p, q) 或 \\mathrm{CE}(p, q) 以示区分。逗号带有正常的标点间距，无需手动调整。",
  },
  "entropy": {
    name: "信息熵",
    meaning: "随机变量 X 的香农熵：其取值的平均不确定性，即平均信息量。",
    usage:
      "熵为 H(X) = -\\sum_x p(x) \\log p(x)，用 \\log_2 时单位为比特，用 \\ln 时单位为奈特。均匀分布使熵最大，此时 H(X) = \\log |\\mathcal{X}|；它出现在决策树通过信息增益进行划分以及最大熵强化学习中。相关的量使用同一个字母：条件熵 H(Y|X)、联合熵 H(X, Y)，以及连续变量的微分熵 h(X)，后者通常用小写。有些论文写 \\mathbb{H}[X]，以免与黑塞矩阵 H 或假设类混淆。",
  },
  "mutual-information": {
    name: "互信息",
    meaning: "X 与 Y 之间的互信息：知道其中一个随机变量后，对另一个的不确定性减少了多少。",
    usage:
      "互信息为 I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y))，当且仅当 X 与 Y 独立时它等于零。分号是惯用写法，用于分隔两个参数，而参数本身可能是列表，如 I(X_1, X_2; Y)；用逗号会产生歧义。TeX 把 ; 视为标点，会自动在其后加一个细空格。条件互信息写作 I(X; Y \\mid Z)。它是信息瓶颈、InfoNCE 对比损失以及特征选择的理论基础。",
  },
  "log-likelihood": {
    name: "对数似然",
    meaning: "数据 x 在参数 θ 下的对数似然，是最大似然估计中要最大化的量。",
    usage:
      "取对数把独立似然的乘积变为求和，\\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta)，更容易求导且数值上更稳定。它的相反数就是常见的负对数似然（NLL）损失。排版提示：单独的 | 是普通符号，两侧都没有间距；\\mid 是关系符，会添加均衡的间距，得到 p(x \\mid \\theta)。有些作者使用分号 p(x; \\theta)，表示 θ 是固定参数而不是被条件化的随机变量，这是频率学派的解读。",
  },
  "probability-distribution": {
    name: "概率分布",
    meaning: "x 在分布 p 下的概率（密度或质量），是机器学习中表示分布的基本记号。",
    usage:
      "小写 p(x) 表示概率密度函数或概率质量函数，而大写 P(X = x) 或 \\Pr 通常留给事件的概率。机器学习会随意重载 p，由参数决定指的是哪个分布，如 p(x) 与 p(z)；当这样容易混淆时，可添加下标，如 p_\\theta(x) 或 p_{\\text{data}}(x)。归一化要求 \\sum_x p(x) = 1 或 \\int p(x)\\,dx = 1，在 dx 之前加细空格 \\,。采样写作 x \\sim p(x)，使用 \\sim。",
  },
  "conditional-probability": {
    name: "条件概率",
    meaning: "给定 x 时 y 的条件概率，例如分类器对某个输入预测的标签分布。",
    usage:
      "判别模型直接学习 p(y | x)，而生成模型学习 p(x | y) 和 p(y)，再应用贝叶斯公式 p(y|x) = p(x|y)p(y)/p(x)。直接输入的竖线 | 是普通字符，两侧没有间距；\\mid 是关系符，得到 p(y \\mid x)，可读性更好，也是大多数排版规范推荐的写法。当条件部分较高时，在 \\left( 与 \\right) 之间使用 \\middle|，可让竖线随括号一起伸缩。p_\\theta(y \\mid x) 这样的下标表示模型的参数。",
  },
  "sum-over-classes": {
    name: "对类别求和",
    meaning: "对类别 c 从 1 到 C 求和，用于多分类损失和概率归一化。",
    usage:
      "对类别求和出现在分类交叉熵 -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c 以及 softmax 的分母中。在行间公式中，上下限位于大求和号的上方和下方；在行内则以较小字号位于右侧，以节省行高。用 \\sum\\limits 可在行内强制使用行间式的上下限位置，反之则用 \\nolimits。用 C 表示类别数、c 表示下标是常见约定；只是不要在同一个式子中再用 C 表示代价或常数。符号 \\Sigma 是希腊字母，不应替代 \\sum。",
  },
  "product-over-samples": {
    name: "对样本求积",
    meaning: "对样本 i 从 1 到 N 求积，通常表示独立同分布数据集的似然。",
    usage:
      "对于独立样本，似然可分解为 \\prod_{i=1}^{N} p(x_i \\mid \\theta)，取对数后转化为求和。\\prod 是大型运算符形式的大写 pi，尺寸适合行间公式；不要用希腊字母 \\Pi 代替，它保持小尺寸且没有上下限。行间公式把上下限放在上方和下方，行内文本则放在侧面；\\prod\\limits 可以改变这一行为。余积使用 \\coprod，它是上下颠倒的对应符号。在实践中，很长的连乘在数值上不稳定，这也是论文常常改用对数形式的另一个原因。",
  },
  "l1-norm": {
    name: "L1 范数",
    meaning: "θ 的 L1 范数：各分量绝对值之和。",
    usage:
      "L1 范数 \\|\\theta\\|_1 = \\sum_i |\\theta_i| 是 lasso 的惩罚项，由于其单位球在坐标轴上有尖角，它会促使解稀疏。\\| 给出双竖线，但把它们当作普通符号，因此后面紧跟减号时间距可能不对；\\lVert \\theta \\rVert_1 把它们标记为左、右定界符，间距正确。对于较高的参数，使用 \\left\\| ... \\right\\| 使其伸缩。许多论文为保持一致，通过 mathtools 宏包的 \\DeclarePairedDelimiter 定义一个 \\norm 宏。不要把它与 |\\theta| 混淆，后者表示绝对值或集合的基数。",
  },
  "l2-norm": {
    name: "L2 范数",
    meaning: "θ 的欧几里得（L2）范数：各分量平方和的平方根。",
    usage:
      "L2 范数 \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} 度量长度，它的平方出现在岭回归或权重衰减的惩罚项 \\lambda\\|\\theta\\|_2^2 中。注意上下标的顺序：\\|\\theta\\|_2^2 表示范数的平方，TeX 会把下标和上标整齐地叠放。在上下文明确时，许多作者会省略下标 2。为了获得更好的定界符间距，请用 \\lVert 和 \\rVert 代替 \\|，内容较高（如分式）时用 \\left\\| \\right\\|。对于矩阵，\\|A\\|_2 通常表示谱范数，而不是逐元素的范数，后者是 Frobenius 范数。",
  },
  "frobenius-norm": {
    name: "Frobenius 范数",
    meaning: "矩阵 W 的 Frobenius 范数：所有元素平方和的平方根。",
    usage:
      "Frobenius 范数为 \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}，是向量 L2 范数在矩阵上的推广。它用于矩阵的权重衰减、低秩逼近误差以及矩阵分解的目标函数。它不同于谱范数 \\|\\mathbf{W}\\|_2，后者是最大奇异值。下标 F 是普通斜体字母；有些人写作 \\mathrm{F}。与向量范数一样，\\lVert 和 \\rVert 的间距比 \\| 更好，尤其是在范数取平方或前面带系数时。",
  },
};

export default text;
