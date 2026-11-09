import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "左箭头",
    meaning: "输出向左的短单线箭头，用于算法中的赋值和反向书写的映射。",
    usage:
      "伪代码把赋值写成 x \\leftarrow x + 1，而 \\gets 正是这个箭头的内置别名，在算法清单中读起来更自然。在数学中，它有时表示从右往左书写的映射 B \\leftarrow A，在较早的文献中也表示从右侧趋近的极限。机器学习论文用它表示参数更新，如 \\theta \\leftarrow \\theta - \\eta g。它是关系符，因此 TeX 会在两侧加较宽的间距。需要更长的箭头时用 \\longleftarrow，需要带标注的箭头时用可伸缩的 \\xleftarrow{text}。",
  },
  "right-arrow": {
    name: "右箭头",
    meaning: "输出向右的短单线箭头，用于函数签名、极限和化学反应箭头。",
    usage:
      "\\rightarrow 有更短的别名 \\to，在 f : A \\to B 和极限 x \\to 0 中通常用它。描述单个元素的去向时请改用 \\mapsto，如 x \\mapsto x^2。在逻辑中，p \\rightarrow q 表示实质蕴含，与用于命题之间的双线箭头 \\Rightarrow 不同。化学家用它书写简单的反应式，图论学者用它表示有向边 u \\rightarrow v。需要在箭头上方加标注时，可伸缩的 \\xrightarrow{\\text{label}} 会随标注伸长。",
  },
  "up-arrow": {
    name: "上箭头",
    meaning: "输出向上的箭头，用于递增极限、自旋向上、气体逸出以及高德纳记号。",
    usage:
      "分析学用 x_n \\uparrow x 表示单调递增趋于极限的数列，如单调收敛定理中那样。物理学用它表示自旋向上 |\\uparrow\\rangle，化学则在生成物后加上箭头标记气体逸出。高德纳的箭号表示法用于表示极大的数，把迭代幂次写成 3 \\uparrow\\uparrow 3。\\uparrow 也可作定界符，因此 \\big\\uparrow 或 \\left\\uparrow ... \\right. 可以得到更高的版本。双线的 \\Uparrow 是另一个符号。",
  },
  "long-left-arrow": {
    name: "长左箭头",
    meaning: "输出向左的长单线箭头，是 \\leftarrow 的加长版，用于较宽或需要强调的映射。",
    usage:
      "\\longleftarrow 是固定长度的长箭头，长度约为 \\leftarrow 的两倍，由减号和箭头组合而成。当箭头连接较长的表达式，或在行内图示中从右往左书写正合列时，它很有用。若要在箭头上方加文字，可伸缩的 \\xleftarrow{f} 更合适，因为它会随标注伸长。算法中的赋值通常使用短的 \\gets。它的双线对应符号是 \\Longleftarrow，也是“被蕴含”符号 \\impliedby 的基础。",
  },
  "long-right-arrow": {
    name: "长右箭头",
    meaning: "输出向右的长单线箭头，常用于收敛命题以及较长表达式之间的箭头。",
    usage:
      "当短的 \\to 显得局促时，作者会改用 \\longrightarrow，例如 a_n \\longrightarrow L，或在归约中连接两个较长的项。箭头下方的条件可以用会随标注伸长的 \\xrightarrow[n \\to \\infty]{} 添加，也可以用 \\underset{n\\to\\infty}{\\longrightarrow}。化学用长箭头书写在上方注明条件的反应。与可伸缩箭头不同，它是固定长度的符号。双线版本是 \\Longrightarrow，也就是 \\implies 加上额外间距后输出的符号。",
  },
  "down-arrow": {
    name: "下箭头",
    meaning: "输出向下的箭头，用于递减极限、自旋向下、沉淀以及大步归约。",
    usage:
      "单调递减趋于极限的数列写作 x_n \\downarrow x，单侧极限写作 t \\downarrow 0。物理学家把自旋向下写作 |\\downarrow\\rangle，化学家在固体沉淀后加上箭头。在域理论和程序设计语言语义学中，e\\downarrow 表示计算收敛。与 \\uparrow 一样，它是定界符，因此 \\Big\\downarrow 可以得到更高的箭头，在纵向示意图中很方便。双线版本是 \\Downarrow。一些拓扑学和序理论文献还用 {\\downarrow}x 表示元素的下集。",
  },
  "left-arrow-double": {
    name: "双线左箭头",
    meaning: "输出向左的短双线箭头，读作“被……蕴含”，或标记证明中的逆向部分。",
    usage:
      "在等价性证明中，作者把两个方向标为 (\\Rightarrow) 和 (\\Leftarrow)，后者证明逆命题。在公式之间，A \\Leftarrow B 表示 B 蕴含 A。若要在完整命题之间使用带间距的长箭头，\\impliedby 给出带额外间距的 \\Longleftarrow，与 \\implies 相对应。快速阅读时注意不要把 \\Leftarrow 与 \\leq 混淆，有些读者会看错形状。逻辑学教材更常调整顺序以使用右箭头，因此请把 \\Leftarrow 留给逆向证明。",
  },
  "right-arrow-double": {
    name: "双线右箭头",
    meaning: "输出向右的短双线箭头，是公式之间标准的蕴含符号。",
    usage:
      "\\Rightarrow 表示一个公式蕴含另一个公式，如 p \\Rightarrow q，并在等价性证明中标记正向 (\\Rightarrow)。\\implies 输出更长的 \\Longrightarrow 并加上额外宽间距，适合完整命题之间的蕴含。概率论用 X_n \\Rightarrow X 表示分布的弱收敛，项重写系统用它表示一步归约。布尔代数用它表示条件运算。当对象是命题而不是集合或函数时，优先用它而不是单线箭头 \\to。",
  },
  "up-arrow-double": {
    name: "双线上箭头",
    meaning: "输出向上的双线箭头，这是一个少见的符号，也可用作可伸缩定界符。",
    usage:
      "\\Uparrow 在数学中没有统一的标准含义。它偶尔出现在图示、一些逻辑学和证明论文献中，物理学中有时用它表示强极化态。由于它是定界符，\\Big\\Uparrow 和 \\left\\Uparrow ... \\right. 可以在竖直方向放大它。如果只需要表示向上的方向，通常使用 \\uparrow。如果你用 \\Uparrow 表示自定义关系，请在它首次出现时在正文中定义，免得读者去猜。",
  },
  "long-left-arrow-double": {
    name: "双线长左箭头",
    meaning: "输出向左的长双线箭头；加上间距后就是“被蕴含”符号。",
    usage:
      "\\Longleftarrow 是 \\impliedby 背后的字形，\\impliedby 在其两侧加上较宽的间距，用于完整命题之间。若想要不带这些留白的长箭头，例如在表格中紧凑的推导链里，请直接使用 \\Longleftarrow。在证明中它可以引出逆向部分 (\\Longleftarrow)。它向右的孪生符号 \\Longrightarrow 是 \\implies 的基础，双向的 \\Longleftrightarrow 是 \\iff 的基础。避免在同一个证明中混用短箭头和长箭头。当较强的假设位于右侧时，逆向箭头读起来最自然。",
  },
  "long-right-arrow-double": {
    name: "双线长右箭头",
    meaning: "输出向右的长双线箭头；两侧加上间距后就是 \\implies 符号。",
    usage:
      "\\Longrightarrow 是 \\implies 所用的原始字形，不带额外的宽间距。当需要在狭小空间（如下标、矩阵单元格或紧凑表格）中表示蕴含时选用 \\Longrightarrow，在行间公式的完整分句之间则用 \\implies。它也用于重写系统中的多步归约，以及一些概率论文献中的收敛。在简短公式之间，短的 \\Rightarrow 更合适。逆向请用 \\Longleftarrow。在一系列行间推导步骤中，请用 align 环境对齐箭头，使每一步从同一列开始。",
  },
  "down-arrow-double": {
    name: "双线下箭头",
    meaning: "输出向下的双线箭头，用于程序设计语言语义学中的大步求值。",
    usage:
      "操作语义学用 e \\Downarrow v 表示在大步风格下表达式 e 求值为值 v，这是该符号最主要的技术用途。在图示和逻辑证明中，它可以标记竖直方向的推理步骤。与其他竖直箭头一样，\\Downarrow 是定界符，因此 \\Big\\Downarrow 可以得到更高的版本。不要把它与 \\downarrow 混淆，在同一套语义中后者可能表示终止。引入该判断时请说明你的约定。相比之下，小步语义用 \\to 或 \\longrightarrow 表示单步归约，用 \\to^* 表示其自反传递闭包。",
  },
  "left-right-arrow": {
    name: "左右箭头",
    meaning: "输出短的双向箭头，用于对应关系、双条件以及共振结构。",
    usage:
      "逻辑学在公式内部用 p \\leftrightarrow q 表示双条件联结词，而完整命题之间更常用 \\Leftrightarrow 和 \\iff。在组合数学中，它描述对象之间的双射对应；化学用它连接共振结构，而不是表示平衡，平衡用 \\rightleftharpoons。图论可能用它表示无向边或双向边。它是关系符，两侧有较宽的间距。需要更长的版本时用 \\longleftrightarrow。在讨论真值表时，它等价于同或（XNOR），当且仅当两边取值相同时为真。",
  },
  "long-left-right-arrow": {
    name: "长左右箭头",
    meaning: "输出长的单线双向箭头，是 \\leftrightarrow 的加长版，用于较长表达式之间的对应。",
    usage:
      "\\longleftrightarrow 适合表示两个较长对象之间的对应，例如子集与二进制串之间的双射，此时短箭头显得不起眼。它是固定长度的符号，因此添加标注需要 \\overset 或叠放结构。注意 \\iff 是由双线的 \\Longleftrightarrow 构成的，而不是这个单线版本，所以不要在证明中用 \\longleftrightarrow 表示逻辑等价。物理学用它表示两种理论之间的对偶。额外的长度在箭头上方叠放文字时也有帮助。",
  },
  "up-down-arrow": {
    name: "上下箭头",
    meaning: "输出竖直的双向箭头，主要用作可伸缩定界符或用于图示。",
    usage:
      "\\updownarrow 同时指向上方和下方，因此在纵向图示中表示行与行之间的双向关系很方便。作为定界符，它可以用 \\big、\\Big 或 \\left 与 \\right 放大。在物理学中，它偶尔表示自旋态的叠加或竖直方向的振动。它的双线变体是 \\Updownarrow。如果要绘制完整的交换图，专用的图表环境会比手工放置 \\updownarrow 更好地对齐竖直箭头。现代论文中很少需要它，但在讲义中很有用。",
  },
  "left-right-arrow-double": {
    name: "双线左右箭头",
    meaning: "输出短的双线双向箭头，用于公式之间的逻辑等价。",
    usage:
      "\\Leftrightarrow 表示两个公式相互蕴含，如 A \\Leftrightarrow B。对于行间公式中完整命题之间的等价，\\iff 给出带额外间距的更长的 \\Longleftrightarrow。布尔代数用它表示同或（XNOR）或双条件。在一串等价方程中，用 align 对齐一列 \\Leftrightarrow 是习题解答中的常见写法。不要把它与 \\equiv 混淆，后者表示恒等或同余，而不是逻辑等价。只有在每一步确实可逆时才写它；例如两边平方就会破坏等价性。",
  },
  "long-left-right-arrow-double": {
    name: "双线长左右箭头",
    meaning: "输出长的双线双向箭头，与 \\iff 使用的是同一个字形。",
    usage:
      "\\Longleftrightarrow 输出与 \\iff 相同的箭头，但没有 \\iff 额外添加的宽间距。因此在下标、表格或紧凑的行内文本中它是更好的选择，而 \\iff 在行间的定理陈述中读起来更好。它也出现在同时论证两个方向的证明中。在简短公式之间，更推荐短的 \\Leftrightarrow。请在整篇文档中保持一致的选择，尤其是在定理陈述中。它还用于在 align 环境中对齐的一串可逆代数步骤，额外的长度能在视觉上把较长的方程分隔开。与其他箭头一样，它是关系符，因此 TeX 会在两侧加较宽的间距。",
  },
  "up-down-arrow-double": {
    name: "双线上下箭头",
    meaning: "输出竖直的双线双向箭头，可用作定界符，表示竖直方向上的等价。",
    usage:
      "\\Updownarrow 主要用于纵向排版，例如 array 中上下叠放的两个等价命题，此时它相当于把 \\Leftrightarrow 竖过来。它是定界符，因此 \\Big\\Updownarrow 以及 \\left ... \\right 版本可以在竖直方向伸长。在这类图示之外，它没有广泛公认的含义。如果需要单线版本，请用 \\updownarrow。一个带居中列的普通 array 就能让命题和箭头保持对齐。在讲课幻灯片中，它也可以表示上下叠放的两个定义可以互换。当同一等价关系在其他地方也以水平方向出现时，请将它与 \\Leftrightarrow 搭配使用。",
  },
  "maps-to": {
    name: "映射箭头",
    meaning: "输出带竖线尾的箭头，表示函数把单个元素映到何处，如 x ↦ x²。",
    usage:
      "对元素用 \\mapsto，对集合用 \\to：f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 同时给出了定义域、陪域和对应法则。λ 演算和函数式编程论文用它表示匿名函数，语义学则把替换或环境更新写成 [x \\mapsto v]。它与 \\to 的区别只在于尾部的小竖线，所以请确保它在小字号下也能清晰显示。对于较长的表达式，请使用 \\longmapsto。在交换图中，元素层面的箭头也画成带竖线尾的形式。",
  },
  "long-maps-to": {
    name: "长映射箭头",
    meaning: "输出带竖线尾的长箭头，把元素映到其像，用于比 \\mapsto 更宽的表达式。",
    usage:
      "当输入或输出较长时，\\longmapsto 提供更多空间，如 (x, y) \\longmapsto x^2 + y^2；当你希望元素对应法则与上一行的 \\longrightarrow 对齐时也很有用。它的读法与 \\mapsto 相同，应与说明定义域和陪域那一行中的 \\to 或 \\longrightarrow 搭配使用。由于长度固定，在上方加标注仍需 \\overset。在行间的函数定义中始终使用它，可以得到整洁的两行格式。",
  },
  "northeast-arrow": {
    name: "东北箭头",
    meaning: "输出指向右上方的斜箭头，用于表示递增趋势和图示中的边。",
    usage:
      "\\nearrow 常非正式地表示“递增趋于”，如 a_n \\nearrow a，是 \\uparrow 的斜向对应。它也用于连接手工绘制的图示、矩阵示意图和哈斯图式草图中的元素。它与 \\searrow、\\swarrow 和 \\nwarrow 构成完整的一组斜箭头。这些箭头不能伸长，因此较长的斜箭头更适合用绘图工具。在经济学和数据分析笔记中，它可以在表格单元格中概括上升趋势。请先定义一次其含义，因为它只是一种记号，而不是正式符号。",
  },
  "hook-left-arrow": {
    name: "左钩箭头",
    meaning: "输出尾部带钩的左箭头，是包含映射箭头的反向形式。",
    usage:
      "\\hookleftarrow 是 \\hookrightarrow 的镜像，用于从右往左画出包含映射或单射的情形，例如反向书写的正合列，或目标位于左侧的图示。除此之外它很少使用。在键盘文档中，类似的字形代表回车键，但那是另一种含义。如果你的箭头大多指向右方，改用 \\hookrightarrow 重写命题通常更清楚。它与其他箭头一样具有关系符间距。它的长度与 \\hookrightarrow 相同，因此镜像对称的图示能保持平衡。当需要大量此类箭头时，专用的图表环境会自动处理钩子。",
  },
  "hook-right-arrow": {
    name: "右钩箭头",
    meaning: "输出尾部带钩的右箭头，是表示单射、包含映射或嵌入的标准符号。",
    usage:
      "写下 \\iota : A \\hookrightarrow X 就告诉读者这个映射是包含映射或单射，无需再用文字说明。分析学用它表示函数空间的连续嵌入，如 H^1(\\Omega) \\hookrightarrow L^2(\\Omega)，紧嵌入有时还会加上额外的修饰。范畴论用它表示单态射。对应的满射符号是 \\twoheadrightarrow。钩子让箭头比 \\to 更长，所以请检查图示中的对齐。它是关系符，因此 TeX 会在两侧加较宽的间距。",
  },
  "southeast-arrow": {
    name: "东南箭头",
    meaning: "输出指向右下方的斜箭头，用于表示递减趋势和图示中的边。",
    usage:
      "\\searrow 常作为“递减趋于”的简写，如 \\varepsilon_n \\searrow 0 表示单调递减数列。它与 \\nearrow、\\swarrow 和 \\nwarrow 一起用于非正式的图示，例如 2×2 的对象网格。物理学家在能级或衰变链的草图中使用它。这些箭头大小固定，因此适合快速的行内使用，而不适合精致的图示。它的名称代表 southeast（东南），而不是 search（搜索）。初次见到的读者可能会以为是搜索图标，因此简短定义一下会有帮助。在总结单调性的表格中，\\nearrow 和 \\searrow 能提供紧凑的视觉提示。",
  },
  "left-harpoon-up": {
    name: "左鱼叉箭头（倒钩朝上）",
    meaning: "输出向左的鱼叉箭头，倒钩在上方，即向左箭头头部的一半。",
    usage:
      "\\leftharpoonup 主要用作构件或用于专门记号。有些物理教材在向量上方加鱼叉箭头；把 \\rightharpoonup 叠放在 \\leftharpoondown 上方可以重现平衡箭头，不过 \\rightleftharpoons 已经存在。它也可能出现在反应示意图中。由于鱼叉箭头在小字号下看起来很相似，请有意识地选择倒钩方向并保持一致。在大多数文档中，它出现在其他结构内部，而不是单独使用。它的同类符号是 \\rightharpoonup、\\leftharpoondown 和 \\rightharpoondown，区别仅在于方向和倒钩所在的一侧。与其他箭头一样，它具有关系符间距。",
  },
  "right-harpoon-up": {
    name: "右鱼叉箭头（倒钩朝上）",
    meaning: "输出向右的鱼叉箭头，倒钩在上方，是表示弱收敛的常用符号。",
    usage:
      "泛函分析用 u_n \\rightharpoonup u 表示弱收敛，以区别于强收敛 u_n \\to u。弱星收敛常写作 \\overset{*}{\\rightharpoonup}。物理学中偶尔用右鱼叉箭头作为向量重音符号。它也构成化学平衡符号 \\rightleftharpoons 的上半部分。请把 \\rightharpoonup 与倒钩在下方的 \\rightharpoondown 区分开，因为读者可能把它们视为不同的记号。在 KaTeX 和 LaTeX 中，该字形具有关系符间距，因此 u_n \\rightharpoonup u 的间距与等号相同。书写时请说明在哪个空间中弱收敛，如示例所示。",
  },
  "southwest-arrow": {
    name: "西南箭头",
    meaning: "输出指向左下方的斜箭头，主要用于图示和流程草图。",
    usage:
      "\\swarrow 表示向左下方的一步，例如手工绘制的对象网格，或说明矩阵行列式中各项如何组合。它与 \\nearrow、\\searrow 和 \\nwarrow 一起覆盖四个斜向方向。它不能伸长，因此较长的斜箭头需要绘图工具。它偶尔在表格中标记趋势，但表示递减值时 \\searrow 更常见。在 array 中配合 \\quad 间距可以把它放到正确位置。",
  },
  "left-harpoon-down": {
    name: "左鱼叉箭头（倒钩朝下）",
    meaning: "输出向左的鱼叉箭头，倒钩在下方，即分开的箭头头部的下半部分。",
    usage:
      "\\leftharpoondown 是平衡符号 \\rightleftharpoons 的下半部分，位于 \\rightharpoonup 下方。单独使用时很少见，只出现在一些反应示意图中，或作为反向的弱收敛标记。如果需要平衡箭头，请直接使用 \\rightleftharpoons，而不要手工叠放鱼叉箭头。注意鱼叉箭头与 \\leftarrow 不同，不应随意互换。它与普通箭头一样具有关系符间距。它的同类符号是 \\leftharpoonup、\\rightharpoonup 和 \\rightharpoondown。在大多数论文中你完全用不到它，因为普通箭头能更清楚地表达同样的意思。",
  },
  "right-harpoon-down": {
    name: "右鱼叉箭头（倒钩朝下）",
    meaning: "输出向右的鱼叉箭头，倒钩在下方，是半箭头的下倒钩变体。",
    usage:
      "\\rightharpoondown 在倒钩位置上与 \\rightharpoonup 互为镜像，出现在一些平衡记号和向量重音符号中。由于 \\rightharpoonup 是公认的弱收敛符号，用 \\rightharpoondown 表示弱收敛会让读者困惑。它有时与 \\leftharpoonup 组合成 \\leftrightharpoons，即反向的平衡排列。与所有鱼叉箭头一样，请检查在所选字号下最终 PDF 中倒钩是否清晰可见。它的同类符号 \\leftharpoonup 和 \\leftharpoondown 共同构成完整的四个鱼叉箭头。与其他箭头一样，它具有关系符间距。",
  },
  "northwest-arrow": {
    name: "西北箭头",
    meaning: "输出指向左上方的斜箭头，主要用于图示和插图。",
    usage:
      "\\nwarrow 是四个斜箭头中最不常用的一个。它出现在手工构建、展示元素之间关系的 array 中，例如动态规划表中某个单元格依赖其左上方相邻单元格的依赖关系。与 \\nearrow、\\searrow 和 \\swarrow 组合，无需绘图宏包就能画出小型图示。对于精致的交换图，专用的图表环境能提供合适的箭头长度和标注。它大小固定并具有关系符间距，因此方便在 array 和表格中使用。把四个斜箭头按罗盘方向理解（northeast 东北、southeast 东南、southwest 西南、northwest 西北）有助于记住它们的名称。",
  },
};

export default text;
