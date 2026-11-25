import {
  GuideCode,
  GuideFaq,
  GuideH2,
  GuideH3,
  GuideLink,
  GuideOl,
  GuideP,
  GuidePre,
  GuideTable,
  GuideUl,
  type GuideFaqItem,
} from "../../ui";

const faq: GuideFaqItem[] = [
  {
    question: "推荐信应该写多长？",
    answer:
      "通常以写满一页为宜，研究生申请或教职推荐信最多不超过两页。少于三段左右的推荐信会显得态度平淡，因为评审委员会默认：对候选人有很多话可说的推荐人自然会写得更多。填好占位内容后，本模板在 11pt 字号、1 英寸页边距下大约为一页；如果写到了第三页，可以删去 Personal Qualities 部分或缩短示例。",
  },
  {
    question: "推荐信的第一段应该写什么？",
    answer:
      "说明你推荐的是谁、推荐其申请什么、你们如何相识、你以什么身份认识对方以及认识了多久，并表明你的总体推荐力度。模板的开头段正是这样写的：点明申请的项目、相识的时长、你的角色（教授、导师或主管），并给出一句比较性陈述，说明候选人在你教过的学生中处于什么水平。",
  },
  {
    question: "如何在 LaTeX 信件中添加信头或标志？",
    answer:
      "加载 graphicx 宏包，并在 \\address 命令中放入 \\includegraphics，letter 文档类会把它打印在第一页的右上角：\\address{\\includegraphics[height=1.5cm]{logo.png}\\\\Department Name\\\\University Name\\\\...}。如果需要通栏的预印信头，可以使用 eso-pic 宏包把 PDF 或图片放在第一页的背景中，或者直接用印有信头的信纸打印。",
  },
  {
    question: "如何插入扫描的签名？",
    answer:
      "把图片放在 \\signature 的参数中：\\signature{\\includegraphics[height=1.2cm]{signature.png}\\\\Professor Name\\\\Title\\\\Department}。letter 文档类默认会在 \\closing 之后留出用于手写签名的竖直空白；使用图片时，可以在 \\signature 参数开头加一个负值的 \\vspace 来缩小这段空白（\\longindentation 只会水平移动签名块）。",
  },
  {
    question: "推荐信需要写日期并写明收信人吗？",
    answer:
      "需要。letter 文档类会自动在寄件人地址下方打印 \\today；如果需要特定日期，可以用 \\date{March 3, 2026} 覆盖。如果知道具体的收信人或委员会，请写明（模板使用的是该项目的招生委员会 Admissions Committee），并以“Dear Members of the Admissions Committee”或“Dear Dr. Name”开头。“To Whom It May Concern”只适用于通用推荐信。",
  },
];

export default function LetterOfRecommendationGuideCn() {
  return (
    <article>
      <GuideH2 id="what-is-it">这个推荐信模板是什么？</GuideH2>
      <GuideP>
        这是一个免费的 LaTeX 推荐信模板，以教授或导师的口吻撰写，用于推荐学生申请研究生项目。它使用标准的{" "}
        <GuideCode>letter</GuideCode> 文档类，字号为 11pt，并通过 <GuideCode>geometry</GuideCode>{" "}
        设置 1 英寸页边距，同时加载了 <GuideCode>hyperref</GuideCode>（已加载但未使用，邮箱为纯文本）。正文分为四个以粗体起头的部分：Academic Excellence（学业表现）、Research Capabilities（科研能力）、Personal Qualities（个人品质）和 Recommendation（推荐意见），每部分的占位文字都会提示你应当提供哪类证据。填入姓名、日期和具体事例后编译，就能得到一封整洁、版式规范的信件：寄件人地址、日期、收件人信息栏、称呼、结尾敬语和签名都位于读者预期的位置。
      </GuideP>
      <GuideP>
        由于版式由 <GuideCode>letter</GuideCode>{" "}
        文档类负责处理，这个模板同样适用于学术推荐、求职推荐、奖学金推荐、实习推荐和品格推荐，只需更换标题和证据即可。
      </GuideP>

      <GuideH2 id="structure">一封有力推荐信的结构</GuideH2>
      <GuideP>
        招生委员会和招聘经理要阅读成百上千封推荐信。真正能帮到候选人的推荐信都有相似的结构，本模板也遵循这一结构：
      </GuideP>
      <GuideOl>
        <li>
          <strong>开头：关系与结论。</strong>说明你推荐的是谁、推荐其申请什么、你认识对方多久、以什么身份认识，并用一句话给出总体评价。模板的第一段就是这样写的，并且加了一句比较性陈述（“one of the most outstanding students I have encountered in my X years of teaching”）。比较是推荐信中最有价值的内容，因为它能让你的赞扬有据可依、便于衡量。
        </li>
        <li>
          <strong>两到三个具体事例。</strong>中间的每个部分都应当包含一个具体的故事：一个项目、一项成果、候选人做出的一个决定及其结果。“分析能力出色”只是论断；“发现了两位博士后都没有注意到的抽样设计缺陷，并提出了我们在已发表论文中采用的修正方案”才是证据。
        </li>
        <li>
          <strong>比较性和背景性陈述。</strong>在能够如实评价的地方给候选人排名（“在我教过的约 400 名学生中排名前 5%”），并解释该成绩或成就在你的课程或实验室中意味着什么。
        </li>
        <li>
          <strong>个人品质。</strong>成熟度、协作能力、领导力、毅力，每项配一个例子。篇幅保持简短。
        </li>
        <li>
          <strong>结尾：毫无保留的推荐并提供联系方式。</strong>重申推荐意见，说明候选人为何适合这个项目或职位，并附上邮箱和电话，欢迎读者与你联系。
        </li>
      </GuideOl>

      <GuideH2 id="walkthrough">逐部分解读模板</GuideH2>
      <GuideH3>导言区：\signature 和 \address</GuideH3>
      <GuidePre>{`\\signature{Professor Name\\\\Title\\\\Department}
\\address{Department Name\\\\University Name\\\\Address\\\\City, State ZIP\\\\Email: professor@university.edu}`}</GuidePre>
      <GuideP>
        在 <GuideCode>letter</GuideCode> 文档类中，<GuideCode>\address</GuideCode> 是<em>寄件人</em>的地址，打印在第一页的右上角，下方是日期。<GuideCode>\signature</GuideCode>{" "}
        是打印在结尾敬语下方的文字，中间留有手写签名的空白。二者都只需在导言区定义一次，文件中的每个{" "}
        <GuideCode>letter</GuideCode> 环境都会复用它们，因此可以很方便地在一个文档中为同一名学生生成多封推荐信。
      </GuideP>
      <GuideH3>letter 环境与 \opening</GuideH3>
      <GuideP>
        <GuideCode>\begin{"{letter}{Admissions Committee\\\\Graduate Program Name\\\\...}"}</GuideCode>{" "}
        以<em>收件人</em>的地址为参数，并将其打印在称呼上方的左侧。<GuideCode>\opening{"{Dear Members of the Admissions Committee,}"}</GuideCode>{" "}
        打印称呼并开始正文。这两个命令都是必需的：缺少 <GuideCode>\opening</GuideCode>{" "}
        的信件会悄无声息地丢掉地址、日期和称呼。
      </GuideP>
      <GuideH3>正文段落</GuideH3>
      <GuideP>
        正文就是用空行分隔的普通段落，<GuideCode>\textbf{"{Academic Excellence}"}</GuideCode>{" "}
        和其他三个标题都单独成行并以粗体显示。<GuideCode>letter</GuideCode>{" "}
        文档类不会缩进段落，并会在段落之间加一点间距，这正是书信的惯用格式。请替换所有占位内容，包括 he/she/they 这类代词选项，改为候选人的姓名和代词；信中仍然写着“Student Name”或“his/her”，是模板没有改完的典型标志。
      </GuideP>
      <GuideH3>\closing</GuideH3>
      <GuideP>
        <GuideCode>\closing{"{Sincerely,}"}</GuideCode> 会打印结尾敬语，留出签名空间，并打印{" "}
        <GuideCode>\signature</GuideCode> 中的内容。在它之后，你还可以添加{" "}
        <GuideCode>\encl{"{Transcript}"}</GuideCode>、<GuideCode>\cc{"{Graduate Coordinator}"}</GuideCode>{" "}
        或用于附言的 <GuideCode>\ps{"{...}"}</GuideCode>。
      </GuideP>

      <GuideH2 id="variants">学术推荐信与职业推荐信</GuideH2>
      <GuideUl>
        <li>
          <strong>研究生申请（模板默认）：</strong>重点突出科研能力、独立思考能力、写作和分析能力，并结合背景说明成绩。保留四个标题。
        </li>
        <li>
          <strong>求职：</strong>把标题改为 Performance and Results、Skills、Teamwork and Character 和 Recommendation。使用雇主关心的成果：交付的项目、创造的收入、可靠程度、如何应对挫折。在开头注明任职起止日期和职位名称。
        </li>
        <li>
          <strong>奖学金或研究资助：</strong>把每个事例都与该奖项的评选标准（领导力、服务精神、发展潜力）对应起来，并明确说明为什么这位候选人值得获得这个奖项。
        </li>
        <li>
          <strong>品格推荐：</strong>删去学术部分，保留 Personal Qualities，并清楚说明你是如何认识对方的，以及你们的关系并不仅限于工作。
        </li>
      </GuideUl>

      <GuideH2 id="customize">如何自定义：信头、签名、日期和篇幅</GuideH2>
      <GuideUl>
        <li>
          <strong>信头或标志。</strong>添加 <GuideCode>\usepackage{"{graphicx}"}</GuideCode>，并把{" "}
          <GuideCode>\includegraphics[height=1.5cm]{"{logo.png}"}</GuideCode> 作为{" "}
          <GuideCode>\address</GuideCode> 的第一行。如果使用整页预印信头 PDF，请在第一页使用{" "}
          <GuideCode>eso-pic</GuideCode> 宏包的 <GuideCode>\AddToShipoutPictureBG*</GuideCode>。
        </li>
        <li>
          <strong>签名图片。</strong>
          <GuideCode>\signature{"{\\includegraphics[height=1.2cm]{sig.png}\\\\Professor Name\\\\Title}"}</GuideCode>
          。用黑色墨水在白纸上签名后扫描，并紧贴边缘裁剪。
        </li>
        <li>
          <strong>结尾左对齐。</strong>该文档类默认将结尾敬语和签名缩进到页面中间。在导言区添加{" "}
          <GuideCode>\longindentation=0pt</GuideCode> 可以把它们移到左页边，这是更常见的现代版式。
        </li>
        <li>
          <strong>日期。</strong><GuideCode>\today</GuideCode> 会自动打印；如需固定日期，请在{" "}
          <GuideCode>\begin{"{document}"}</GuideCode> 之前使用 <GuideCode>\date{"{March 3, 2026}"}</GuideCode>。
        </li>
        <li>
          <strong>联系方式。</strong>可以使用 <GuideCode>\telephone{"{...}"}</GuideCode>，但默认的{" "}
          <GuideCode>letter</GuideCode> 文档类只在 <GuideCode>\address</GuideCode>{" "}
          为空时才会打印它；更简单的做法是把电话号码直接写进 <GuideCode>\address</GuideCode>。
        </li>
        <li>
          <strong>字体和字号。</strong>把 <GuideCode>11pt</GuideCode> 改为 <GuideCode>12pt</GuideCode>{" "}
          可获得更传统的外观，或添加 <GuideCode>\usepackage{"{newtxtext}"}</GuideCode> 使用 Times 字体。在文档类选项中加入{" "}
          <GuideCode>a4paper</GuideCode> 可以切换纸张大小。
        </li>
        <li>
          <strong>篇幅。</strong>以一页为目标，绝不超过两页。删减时先删示例，再考虑删比较性陈述。
        </li>
      </GuideUl>

      <GuideH2 id="errors">常见错误及解决方法</GuideH2>
      <GuideUl>
        <li>
          <strong>“LaTeX Error: \opening missing”</strong>或顶部间距异常。每个{" "}
          <GuideCode>letter</GuideCode> 环境都必须在正文之前包含 <GuideCode>\opening</GuideCode>。
        </li>
        <li>
          <strong>“Undefined control sequence \includegraphics”。</strong>在导言区添加{" "}
          <GuideCode>\usepackage{"{graphicx}"}</GuideCode>。
        </li>
        <li>
          <strong>“Misplaced alignment tab character &amp;”。</strong>院系名称中出现了未转义的 &amp; 符号，例如“Research &amp; Development”。应写作{" "}
          <GuideCode>\&amp;</GuideCode>。
        </li>
        <li>
          <strong>地址各行挤在一起。</strong><GuideCode>\address</GuideCode>、<GuideCode>\signature</GuideCode>{" "}
          和收件人参数中的各行要用 <GuideCode>\\</GuideCode> 分隔，而不是用空行。
        </li>
        <li>
          <strong>寄件人地址缺失，只显示日期。</strong>你把 <GuideCode>\address</GuideCode>{" "}
          留空了，或者在 <GuideCode>\opening</GuideCode> 之后才定义它。请像模板一样把它放在导言区。
        </li>
        <li>
          <strong>第二页没有页眉。</strong>这是该文档类的默认行为。添加{" "}
          <GuideCode>\pagestyle{"{headings}"}</GuideCode>{" "}
          即可在续页上打印收件人姓名、日期和页码。
        </li>
      </GuideUl>

      <GuideH2 id="compile">如何编译这封信</GuideH2>
      <GuideOl>
        <li>
          <strong>在 Octree 中：</strong>点击 <em>Open as template</em>。在编辑器中填写占位内容并实时预览，或者粘贴你对这名学生的记录，让 AI 助手为各部分起草内容。
        </li>
        <li>
          <strong>在 Overleaf 中：</strong>把源码粘贴到空白项目中，用 pdfLaTeX 编译。把标志或签名图片上传到项目根目录。
        </li>
        <li>
          <strong>在本地：</strong>保存为 <GuideCode>letter.tex</GuideCode> 并运行{" "}
          <GuideCode>pdflatex letter.tex</GuideCode>。编译一次即可。
        </li>
      </GuideOl>

      <GuideH2 id="comparison">相关信件模板</GuideH2>
      <GuideTable
        headers={["模板", "适用场景", "文档类", "结构"]}
        rows={[
          [
            <strong key="r">推荐信</strong>,
            "教授、导师和主管为候选人撰写",
            <GuideCode key="c1">letter</GuideCode>,
            "四个带标题的部分：学业表现、科研能力、个人品质、推荐意见",
          ],
          [
            <GuideLink key="l" href="/templates/letter">
              正式信函
            </GuideLink>,
            "一般商务和公务往来信函",
            <GuideCode key="c2">letter</GuideCode>,
            "普通正文，包含寄件人、收件人、称呼和结尾敬语",
          ],
          [
            <GuideLink key="c" href="/templates/cover-letter">
              求职信
            </GuideLink>,
            "申请人为求职或申请项目介绍自己",
            <GuideCode key="c3">letter</GuideCode>,
            "三到四段，将个人经历与职位要求相对应",
          ],
        ]}
      />
      <GuideP>
        如果你是申请人而不是推荐人，<GuideLink href="/templates/motivation-letter">动机信</GuideLink>和
        <GuideLink href="/templates/statement-of-purpose">个人陈述（Statement of Purpose）</GuideLink>{" "}
        模板涵盖了需要你自己撰写的文书。
      </GuideP>

      <GuideH2 id="faq">常见问题</GuideH2>
      <GuideFaq items={faq} inLanguage="zh" />
    </article>
  );
}
