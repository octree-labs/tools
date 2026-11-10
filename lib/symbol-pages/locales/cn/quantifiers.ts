import type { SymbolPageTranslations } from "../types";

/** Simplified Chinese copy for /cn/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "唯一存在量词",
    meaning: "恰好存在一个：在存在量词后加感叹号，以表示唯一性。",
    usage:
      "唯一性命题，例如初值问题存在唯一解，或群中存在唯一的单位元，都写作 \\exists! x。感叹号在 TeX 数学模式中是闭符号，所以 \\exists! x 的间距较为合理，不过有些作者会在变量前加 \\, 使其更清晰。形式上，\\exists! x\\, P(x) 是 \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)) 的缩写。避免使用 \\exists_1，因为有些读者会把它理解为带下标的变量。在正文中，“存在唯一的”往往比符号读起来更顺。",
  },
  "for-all-x": {
    name: "对所有 x 的全称量词",
    meaning: "作用于 x 的全称量词，断言其后的命题对 x 的每一个取值都成立。",
    usage:
      "连续性的定义、群公理和归纳原理都以 \\forall x 开头。\\forall 是普通数学符号，因此 TeX 不会在变量之后插入空格；加上 \\, 或冒号，如 \\forall x\\, P(x) 或 \\forall x : P(x)，能让长公式易读得多。有些作者把量词放在命题之后并用文字表述（“对所有 x”），这在正文中更为温和。除非读者习惯这种简写，否则不要在行文句子中用 \\forall 作为“对所有”的缩写。",
  },
  "exists-x": {
    name: "存在 x 的存在量词",
    meaning: "约束 x 的存在量词，断言至少有一个 x 的取值使该命题为真。",
    usage:
      "典型用法包括极限的定义（\\exists \\delta > 0）、满射（\\forall y\\, \\exists x : f(x) = y）以及逻辑中的见证元。顺序很重要：\\forall y \\exists x 与 \\exists x \\forall y 不同，因此书写量词串时要小心。它的否定形式 \\nexists 是一个独立符号，表示“不存在”。与 \\forall 一样，\\exists 不会在约束变量后自动加空格，因此请在谓词前加一个细空格或冒号。若要表示唯一性，加上感叹号得到 \\exists!。",
  },
  "for-all-in-set": {
    name: "集合上的全称量词",
    meaning: "有界全称量词：命题必须对集合 A 的每个元素 x 都成立。",
    usage:
      "把量词限制在某个集合上，如 \\forall x \\in A，是 \\forall x\\,(x \\in A \\to P(x)) 的简写，也是大多数数学家实际的写法。\\in 具有关系符间距，所以这个短语会自动排好间距；只需用逗号、冒号或 \\; 把它与谓词隔开以便阅读。有多个变量时，可以写 \\forall x, y \\in A，而不必重复量词。不要把 \\in 与 \\epsilon 或 \\varepsilon 混淆，它们在某些字体中看起来相似，但它们是字母，而不是属于关系。",
  },
  "exists-in-set": {
    name: "集合上的存在量词",
    meaning: "有界存在量词：A 中某个元素 x 满足其后的条件。",
    usage:
      "这种紧凑写法取代了 \\exists x\\,(x \\in A \\wedge P(x))，在分析学中随处可见，例如有理数的稠密性：任意两个实数之间 \\exists q \\in \\mathbb{Q}。\\exists x \\in A\\, P(x) 的否定是 \\forall x \\in A\\, \\neg P(x)，在对定义取否定时值得牢记这条规则。用 \\nexists x \\in A 表示“A 中没有任何元素”。在谓词前加冒号、“使得”或 \\;，让读者看清量词在哪里结束。",
  },
  "such-that-colon": {
    name: "表示“使得”的冒号",
    meaning: "在量化命题和集合构造记号中读作“使得”的冒号，用来分隔变量与其条件。",
    usage:
      "在数学模式中，普通冒号被视为关系符，两侧获得相等的宽空格，这适合 \\{x : x > 0\\} 和 \\forall x : P(x)。函数签名则应改用 \\colon，因为它具有标点间距：f\\colon A \\to B 看起来正确，而 f : A \\to B 会在冒号前留下空隙。对于定义，由两个字符拼成的 := 在垂直方向上可能显得不对齐；扩展宏包中的专用定义符号可以解决这个问题。有些作者在集合构造记号中更喜欢用 \\mid 或竖线；选定一种并保持一致。",
  },
  "set-builder": {
    name: "集合构造记号",
    meaning: "集合构造记号：所有使性质 P(x) 成立的 x 组成的集合，用花括号和分隔符书写。",
    usage:
      "在数学模式中花括号必须转义为 \\{ 和 \\}，否则它们只起分组作用，不会出现在输出中。\\mid 是关系符，两侧会获得适当的空格，而单独的 | 是普通符号，会让字母挤在一起。当条件中含有分式或较高的内容时，应统一调整大小：\\left\\{ x \\;\\middle|\\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}。冒号作为分隔符同样适用，并且在条件本身含有绝对值时可以避免混淆。",
  },
  "quantified-statement": {
    name: "嵌套量词命题",
    meaning: "嵌套量词语句：对每个 x 都存在某个 y 使 P(x, y) 为真，且 y 可以依赖于 x。",
    usage:
      "这一模式是 epsilon-delta 定义以及“每个整数都有后继”之类命题的基础。把顺序交换为 \\exists y \\forall x 会得到强得多的断言，即单个 y 对所有 x 都成立，混淆两者是证明中的经典错误。冒号把量词前缀与母式公式分开；如果你的冒号约定与其他地方的函数记号冲突，可以改用句点或括号。为了让较长的前缀更易读，可在量词块之间加 \\,，或把每个量词写成单独的短语：对所有 x，存在 y。",
  },
};

export default text;
