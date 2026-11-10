import type { IntroLocale } from "../localized";
import { Cmd, IntroLink, IntroP } from "../ui";

/** Vietnamese (route locale `vi`). */
const vi: IntroLocale = {
  languageTag: "vi",
  labels: {
    symbol: "Ký hiệu",
    command: "Lệnh",
    use: "Cách dùng",
    package: "Gói",
    builtIn: "có sẵn",
    copy: "Sao chép",
  },
  intros: {
    arrows: {
      title: "Mũi tên trong LaTeX: cách viết mũi tên trong LaTeX",
      intro: (
        <IntroP>
          Mũi tên trong LaTeX là các lệnh ở chế độ toán, được đặt tên theo hướng của chúng: để viết
          mũi tên trong LaTeX, dùng <Cmd>{"$\\rightarrow$"}</Cmd> cho &rarr;,{" "}
          <Cmd>{"$\\leftarrow$"}</Cmd> cho &larr; và <Cmd>{"$\\Rightarrow$"}</Cmd> cho mũi tên kép
          &rArr;. Bảng dưới đây liệt kê 12 mũi tên thông dụng nhất cùng gói mà mỗi mũi tên cần;
          danh sách đầy đủ các ký hiệu mũi tên nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các mũi tên thông dụng nhất",
      use: {
        "\\rightarrow": "Mũi tên sang phải",
        "\\to": "Ánh xạ giữa các tập hợp, giới hạn (x \u2192 \u221e)",
        "\\leftarrow": "Mũi tên sang trái, phép gán",
        "\\leftrightarrow": "Mũi tên hai chiều (trái-phải)",
        "\\Rightarrow": "Kéo theo (mũi tên kép)",
        "\\Leftrightarrow": "Khi và chỉ khi",
        "\\mapsto": "Quy tắc của hàm, x \u21a6 x\u00b2",
        "\\longrightarrow": "Mũi tên dài sang phải",
        "\\uparrow": "Mũi tên lên trên",
        "\\downarrow": "Mũi tên xuống dưới",
        "\\hookrightarrow": "Đơn ánh, phép nhúng",
        "\\xrightarrow{f}": "Mũi tên có chữ phía trên, tự kéo dài theo chữ",
      },
      faqHeading: "Câu hỏi thường gặp về mũi tên trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết mũi tên trong LaTeX?",
          answer:
            "Mũi tên là ký hiệu toán học nên phải nằm trong chế độ toán: $\\rightarrow$ (hoặc dạng ngắn $\\to$) cho mũi tên sang phải, $\\leftarrow$ cho mũi tên sang trái và $\\leftrightarrow$ cho mũi tên hai chiều. Viết hoa chữ cái đầu sẽ cho phiên bản nét kép, ví dụ \\Rightarrow và \\Leftrightarrow. Không cần gói nào.",
        },
        {
          question: "Làm sao để viết mũi tên dài trong LaTeX?",
          answer:
            "Thêm tiền tố long vào tên lệnh: \\longrightarrow, \\longleftarrow và \\longleftrightarrow, hoặc \\Longrightarrow và \\Longleftrightarrow cho mũi tên kép, và \\longmapsto cho mũi tên ánh xạ dài. Nếu mũi tên cần dài ra theo nhãn, hãy dùng \\xrightarrow{...} của amsmath.",
        },
        {
          question: "Làm sao để đặt chữ phía trên mũi tên trong LaTeX?",
          answer:
            "Nạp amsmath rồi dùng \\xrightarrow{chữ} hoặc \\xleftarrow{chữ}; mũi tên sẽ tự kéo dài cho vừa nhãn. Một tham số tùy chọn đặt chữ bên dưới mũi tên: \\xrightarrow[dưới]{trên}. Với mũi tên có độ dài cố định, bạn cũng có thể viết \\overset{f}{\\rightarrow}.",
        },
        {
          question: "Làm sao để viết mũi tên kép trong LaTeX?",
          answer:
            "Dùng \\Rightarrow cho \u21d2, \\Leftarrow cho \u21d0 và \\Leftrightarrow cho \u21d4. Trong logic, \\implies (amsmath) và lệnh có sẵn \\iff cho cùng các mũi tên đó nhưng với khoảng cách rộng hơn. Để có hai mũi tên chồng lên nhau, dùng \\rightleftarrows (amssymb), hoặc \\rightleftharpoons cho cân bằng hóa học.",
        },
        {
          question: "Làm sao để dùng mũi tên ở chế độ văn bản trong LaTeX?",
          answer:
            "Gõ \\rightarrow bên ngoài chế độ toán sẽ gây lỗi \u201cMissing $ inserted\u201d. Bạn có thể bọc nó thành $\\rightarrow$ hoặc dùng các lệnh chế độ văn bản \\textrightarrow, \\textleftarrow, \\textuparrow và \\textdownarrow, vốn thuộc nhân LaTeX (textcomp) và dùng cùng phông chữ với văn bản xung quanh.",
        },
      ],
    },
    math: {
      title: "Ký hiệu toán học trong LaTeX: những điều cơ bản",
      intro: (
        <IntroP>
          Ký hiệu toán học trong LaTeX chỉ hoạt động ở chế độ toán, vì vậy hãy đặt chúng trong{" "}
          <Cmd>{"$...$"}</Cmd> cho công thức cùng dòng hoặc trong <Cmd>{"\\[...\\]"}</Cmd> cho
          phương trình hiển thị riêng. Các ký hiệu dùng hằng ngày đều có sẵn: <Cmd>{"\\pm"}</Cmd>,{" "}
          <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\div"}</Cmd> và <Cmd>{"\\cdot"}</Cmd> cho số học,{" "}
          <Cmd>{"\\neq"}</Cmd>, <Cmd>{"\\leq"}</Cmd>, <Cmd>{"\\geq"}</Cmd> và{" "}
          <Cmd>{"\\approx"}</Cmd> cho phép so sánh, cùng <Cmd>{"\\infty"}</Cmd>,{" "}
          <Cmd>{"\\sqrt{x}"}</Cmd> và <Cmd>{"\\frac{a}{b}"}</Cmd>. Chỉ số trên và chỉ số dưới dùng{" "}
          <Cmd>{"^"}</Cmd> và <Cmd>{"_"}</Cmd>, kèm dấu ngoặc nhọn khi có nhiều hơn một ký tự:{" "}
          <Cmd>{"x^{2n}"}</Cmd>. Các ký hiệu bổ sung như <Cmd>{"\\mathbb{R}"}</Cmd> và{" "}
          <Cmd>{"\\therefore"}</Cmd> đến từ amssymb. Bảng dưới đây liệt kê các ký hiệu toán học
          thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: ký hiệu toán học dùng hằng ngày",
      use: {
        "\\pm": "Cộng trừ",
        "\\times": "Phép nhân (dấu nhân)",
        "\\div": "Phép chia",
        "\\cdot": "Dấu chấm giữa, phép nhân",
        "\\neq": "Khác",
        "\\leq": "Nhỏ hơn hoặc bằng",
        "\\approx": "Xấp xỉ bằng",
        "\\infty": "Vô cùng",
        "\\sqrt{x}": "Căn bậc hai (\\sqrt[n]{x} cho căn bậc n)",
        "\\frac{a}{b}": "Phân số",
        "x^{2n}": "Chỉ số trên (số mũ)",
        "\\mathbb{R}": "Tập số thực",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu toán học trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu toán học trong LaTeX?",
          answer:
            "Đặt chúng trong chế độ toán: $...$ cho công thức cùng dòng và \\[...\\] hoặc môi trường equation cho công thức hiển thị riêng, rồi dùng lệnh của ký hiệu, ví dụ $a \\times b \\neq c$. Dùng lệnh toán bên ngoài chế độ toán sẽ gây lỗi Missing $ inserted.",
        },
        {
          question: "Cần những gói nào cho ký hiệu toán học trong LaTeX?",
          answer:
            "Phần lớn ký hiệu đều có sẵn. Thêm \\usepackage{amsmath} cho các môi trường như align và các lệnh như \\text và \\operatorname, và \\usepackage{amssymb} cho các ký hiệu bổ sung như \\mathbb{R}, \\therefore, \\nexists và \\varnothing. mathtools mở rộng amsmath với các bản sửa lỗi và công cụ bổ sung.",
        },
        {
          question: "Làm sao để tìm lệnh LaTeX của một ký hiệu?",
          answer:
            "Tìm kiếm trên trang này hoặc các trang danh mục và nhấp vào một thẻ để sao chép lệnh của nó. Nếu bạn chỉ biết ký hiệu trông như thế nào, Detexify cho phép bạn vẽ nó và gợi ý các lệnh khớp, còn Comprehensive LaTeX Symbol List bao quát hàng nghìn ký hiệu.",
        },
      ],
    },
    "set-theory": {
      title: "Ký hiệu lý thuyết tập hợp trong LaTeX: tập con, thuộc, hợp và tập rỗng",
      intro: (
        <IntroP>
          Ký hiệu lý thuyết tập hợp trong LaTeX hầu hết đều có sẵn. “Thuộc” là <Cmd>{"\\in"}</Cmd>{" "}
          (∈) và “không thuộc” là <Cmd>{"\\notin"}</Cmd>; “tập con” là <Cmd>{"\\subset"}</Cmd> (⊂)
          và “tập con hoặc bằng” là <Cmd>{"\\subseteq"}</Cmd> (⊆); phép hợp và phép giao là{" "}
          <Cmd>{"\\cup"}</Cmd> và <Cmd>{"\\cap"}</Cmd>, hiệu hai tập hợp là{" "}
          <Cmd>{"\\setminus"}</Cmd> và tập rỗng là <Cmd>{"\\emptyset"}</Cmd> (∅). Một vài ký hiệu
          bổ sung cần amssymb: tập rỗng tròn hơn <Cmd>{"\\varnothing"}</Cmd>, tập con thực sự{" "}
          <Cmd>{"\\subsetneq"}</Cmd> và các tập số như <Cmd>{"\\mathbb{N}"}</Cmd> và{" "}
          <Cmd>{"\\mathbb{R}"}</Cmd>. Dấu ngoặc nhọn phải được thoát, nên một tập hợp được viết là{" "}
          <Cmd>{"\\{1, 2, 3\\}"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu lý thuyết tập hợp thông
          dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các ký hiệu lý thuyết tập hợp thông dụng nhất",
      use: {
        "\\in": "Thuộc",
        "\\notin": "Không thuộc",
        "\\subset": "Tập con",
        "\\subseteq": "Tập con hoặc bằng",
        "\\subsetneq": "Tập con thực sự (không bằng)",
        "\\cup": "Phép hợp",
        "\\cap": "Phép giao",
        "A \\setminus B": "Hiệu hai tập hợp",
        "\\emptyset": "Tập rỗng (\\varnothing trong amssymb)",
        "\\mathbb{R}": "Tập số thực (cũng như \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q})",
        "\\{ x \\in A \\mid x > 0 \\}": "Cách viết tập hợp bằng tính chất đặc trưng",
        "\\mathcal{P}(A)": "Tập lũy thừa",
      },
      faqHeading: "Câu hỏi thường gặp về lý thuyết tập hợp trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu tập con trong LaTeX?",
          answer:
            "Dùng \\subset cho ⊂ và \\subseteq cho ⊆, cả hai đều có sẵn: $A \\subseteq B$. Với tập con thực sự loại trừ rõ ràng trường hợp bằng nhau, amssymb cung cấp \\subsetneq (⊊). Các phiên bản tập cha là \\supset, \\supseteq và \\supsetneq, còn \\not\\subset dùng để phủ định.",
        },
        {
          question: "Làm sao để viết ký hiệu thuộc trong LaTeX?",
          answer:
            "\\in cho ra ∈, như trong $x \\in A$, và \\notin cho ra ∉. Dạng ngược \\ni (∋) đọc là “chứa phần tử”. Cả ba đều có sẵn.",
        },
        {
          question: "Làm sao để viết tập rỗng trong LaTeX?",
          answer:
            "\\emptyset cho ra ∅ và có sẵn. Nhiều tác giả thích \\varnothing tròn hơn, vốn cần \\usepackage{amssymb}. Dù chọn cách nào, đừng dùng \\phi hay \\O, vì đó là một chữ cái Hy Lạp và một chữ cái Bắc Âu.",
        },
      ],
    },
    logic: {
      title: "Ký hiệu logic trong LaTeX",
      intro: (
        <>
          <IntroP>
            Các phép nối của logic mệnh đề là <Cmd>{"\\land"}</Cmd> (và), <Cmd>{"\\lor"}</Cmd>{" "}
            (hoặc) và <Cmd>{"\\lnot"}</Cmd> (không); <Cmd>{"\\wedge"}</Cmd>, <Cmd>{"\\vee"}</Cmd> và{" "}
            <Cmd>{"\\neg"}</Cmd> là các tên gọi khác hoàn toàn tương đương. Phép kéo theo và phép
            tương đương nên viết bằng <Cmd>{"\\implies"}</Cmd> (của amsmath) và{" "}
            <Cmd>{"\\iff"}</Cmd>, vốn thêm khoảng cách kiểu quan hệ quanh mũi tên;{" "}
            <Cmd>{"\\Rightarrow"}</Cmd> và <Cmd>{"\\Leftrightarrow"}</Cmd> đơn thuần cũng dùng
            được. Các lượng từ là <Cmd>{"\\forall"}</Cmd> và <Cmd>{"\\exists"}</Cmd>, với{" "}
            <Cmd>{"\\nexists"}</Cmd> cho &ldquo;không tồn tại&rdquo;, còn hằng đúng và hằng sai là{" "}
            <Cmd>{"\\top"}</Cmd> và <Cmd>{"\\bot"}</Cmd>.
          </IntroP>
          <IntroP>
            Lý thuyết chứng minh và ngữ nghĩa có các ký hiệu turnstile riêng:{" "}
            <Cmd>{"\\vdash"}</Cmd> nghĩa là &ldquo;chứng minh được&rdquo; hay hệ quả cú pháp,{" "}
            <Cmd>{"\\models"}</Cmd> (cũng là <Cmd>{"\\vDash"}</Cmd>) nghĩa là &ldquo;thỏa
            mãn&rdquo; hay hệ quả ngữ nghĩa, và <Cmd>{"\\nvdash"}</Cmd> phủ định ký hiệu đầu tiên.
            Các dấu suy luận <Cmd>{"\\therefore"}</Cmd> và <Cmd>{"\\because"}</Cmd> đến từ
            amssymb, giống như <Cmd>{"\\nexists"}</Cmd> và <Cmd>{"\\vDash"}</Cmd>. Sự tương đương
            logic giữa các công thức thường được viết là <Cmd>{"\\equiv"}</Cmd>, phép tuyển loại
            trừ là <Cmd>{"\\oplus"}</Cmd> và nét Sheffer (NAND) là <Cmd>{"\\uparrow"}</Cmd>. Các
            toán tử tình thái <Cmd>{"\\Box"}</Cmd> và <Cmd>{"\\Diamond"}</Cmd> nằm ở trang{" "}
            <IntroLink href="/vi/symbols/modal-logic">ký hiệu logic tình thái</IntroLink>.
          </IntroP>
          <IntroP>
            Tất cả các ký hiệu trên chỉ hoạt động ở chế độ toán, vì vậy hãy đặt chúng trong{" "}
            <Cmd>{"$...$"}</Cmd> và nạp <Cmd>{"\\usepackage{amsmath, amssymb}"}</Cmd> trong phần
            mở đầu. Một công thức điển hình: <Cmd>{"\\forall x\\, (P(x) \\implies Q(x))"}</Cmd>. Để
            xem chúng kết hợp với tập hợp, hàm và quan hệ ra sao, hãy đọc hướng dẫn của chúng tôi
            về{" "}
            <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
              biểu thức toán học trong LaTeX
            </IntroLink>
            .
          </IntroP>
        </>
      ),
    },
    physics: {
      title: "Ký hiệu cơ học lượng tử trong LaTeX",
      intro: (
        <IntroP>
          Các ký hiệu cơ học lượng tử mà nhà vật lý hay viết nhất đều có sẵn trong LaTeX: hằng số
          Planck rút gọn <Cmd>{"\\hbar"}</Cmd>, bra <Cmd>{"\\langle \\psi |"}</Cmd> và ket{" "}
          <Cmd>{"| \\psi \\rangle"}</Cmd>, các toán tử có dấu mũ như <Cmd>{"\\hat{H}"}</Cmd>, liên
          hợp <Cmd>{"A^\\dagger"}</Cmd>, toán tử Laplace <Cmd>{"\\nabla^2"}</Cmd> và đạo hàm theo
          thời gian <Cmd>{"\\partial_t"}</Cmd>. Để viết ký hiệu bra-ket gọn hơn, các gói braket và
          physics bổ sung <Cmd>{"\\bra{}"}</Cmd>, <Cmd>{"\\ket{}"}</Cmd> và{" "}
          <Cmd>{"\\braket{}"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu vật lý lượng tử thông dụng
          nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ các ký hiệu vật lý nằm ở phía dưới.
        </IntroP>
      ),
      use: {
        "\\hbar": "Hằng số Planck rút gọn (h gạch)",
        "\\langle \\psi |": "Bra, bằng lệnh cơ bản",
        "| \\psi \\rangle": "Ket, bằng lệnh cơ bản",
        "\\langle \\phi | \\psi \\rangle": "Tích trong (bra-ket)",
        "\\bra{\\psi}": "Bra",
        "\\ket{\\psi}": "Ket",
        "\\braket{\\phi|\\psi}": "Tích trong (physics: \\braket{\\phi}{\\psi})",
        "\\hat{H}": "Toán tử Hamilton",
        "A^\\dagger": "Liên hợp Hermite (dagger)",
        "\\nabla^2": "Toán tử Laplace",
        "\\partial_t \\psi": "Đạo hàm theo thời gian",
        "\\otimes": "Tích tensor của các trạng thái",
      },
      faqHeading: "Câu hỏi thường gặp",
      faq: [
        {
          question: "Làm sao để viết ký hiệu bra-ket trong LaTeX?",
          answer:
            "Không cần gói nào, hãy viết bra là \\langle \\psi |, ket là | \\psi \\rangle và tích trong là \\langle \\phi | \\psi \\rangle. Với \\usepackage{braket} bạn có thể viết \\bra{\\psi}, \\ket{\\psi} và \\braket{\\phi|\\psi}; với \\usepackage{physics}, tích trong lại nhận hai tham số, \\braket{\\phi}{\\psi}. Chỉ nạp một trong hai gói, vì cả hai đều định nghĩa các lệnh này.",
        },
        {
          question: "Làm sao để viết h gạch trong LaTeX?",
          answer:
            "Hằng số Planck rút gọn \u210f là \\hbar, có sẵn và được dùng trong chế độ toán: $\\hbar$. Khi đó phương trình Schr\u00f6dinger được viết là i\\hbar \\partial_t \\psi = \\hat{H} \\psi.",
        },
        {
          question: "Làm sao để viết toán tử và dấu dagger trong LaTeX?",
          answer:
            "Đánh dấu toán tử bằng dấu mũ, \\hat{H} hoặc \\hat{p}, và viết liên hợp Hermite bằng \\dagger ở chỉ số trên, A^\\dagger. Giá trị kỳ vọng là \\langle \\hat{A} \\rangle, hoặc \\expval{A} với gói physics, còn giao hoán tử là [\\hat{x}, \\hat{p}] = i\\hbar.",
        },
      ],
    },
    functions: {
      title: "Hợp thành hàm và đẳng cấu trong LaTeX",
      intro: (
        <IntroP>
          Phép hợp thành hàm trong LaTeX là <Cmd>{"\\circ"}</Cmd>, như trong{" "}
          <Cmd>{"g \\circ f"}</Cmd>, còn ký hiệu đẳng cấu trong LaTeX là <Cmd>{"\\cong"}</Cmd>{" "}
          (&cong;), với <Cmd>{"\\simeq"}</Cmd> cho một dạng tương đương yếu hơn; cả ba đều có sẵn.
          Một hàm được khai báo bằng <Cmd>{"f \\colon A \\to B"}</Cmd>, trong đó{" "}
          <Cmd>{"\\colon"}</Cmd> cho khoảng cách đúng, và quy tắc của nó bằng{" "}
          <Cmd>{"\\mapsto"}</Cmd>, như trong <Cmd>{"x \\mapsto x^2"}</Cmd>. Ánh xạ đồng nhất là{" "}
          <Cmd>{"\\operatorname{id}"}</Cmd> của amsmath. Bảng dưới đây liệt kê các lệnh về hàm và
          ánh xạ thông dụng nhất cùng gói mà mỗi lệnh cần; danh sách ký hiệu đầy đủ nằm ở phía
          dưới.
        </IntroP>
      ),
      use: {
        "f \\colon A \\to B": "Hàm từ A vào B",
        "x \\mapsto x^2": "Biến thành (quy tắc của hàm)",
        "g \\circ f": "Hợp thành, g sau f",
        "f^{-1}": "Hàm ngược",
        "\\cong": "Đẳng cấu với",
        "\\simeq": "Tương đương đồng luân, đẳng cấu yếu",
        "\\xrightarrow{\\sim}": "Mũi tên đẳng cấu",
        "\\operatorname{id}_A": "Ánh xạ đồng nhất",
        "\\hookrightarrow": "Đơn ánh, phép nhúng",
        "\\twoheadrightarrow": "Toàn ánh",
        "f|_A": "Thu hẹp trên A",
      },
      faqHeading: "Câu hỏi thường gặp",
      faq: [
        {
          question: "Làm sao để viết phép hợp thành hàm trong LaTeX?",
          answer:
            "Dùng \\circ, vốn có sẵn: $g \\circ f$ cho ra g ∘ f, đọc là \u201cg sau f\u201d. Viết (g \\circ f)(x) = g(f(x)) cho quy tắc. Đừng dùng chữ o thường hay \\cdot, vì chúng có kích thước và khoảng cách không đúng.",
        },
        {
          question: "Làm sao để viết ký hiệu đẳng cấu trong LaTeX?",
          answer:
            "Ký hiệu đẳng cấu chuẩn ≅ là \\cong, có sẵn: $G \\cong H$. Với tương đương đồng luân hoặc một khái niệm yếu hơn, dùng \\simeq (≃), còn với một mũi tên là đẳng cấu, dùng \\xrightarrow{\\sim} của amsmath, hoặc đặt \\cong lên mũi tên bằng \\xrightarrow{\\cong}.",
        },
        {
          question: "Làm sao để viết f: A → B trong LaTeX?",
          answer:
            "Viết f \\colon A \\to B. Lệnh \\colon cho khoảng cách của một dấu câu; dấu hai chấm thường được giãn cách như một quan hệ và để lại quá nhiều khoảng trống trước A. Dùng \\mapsto cho quy tắc, như trong x \\mapsto x^2.",
        },
      ],
    },
    chemistry: {
      title: "Ký hiệu hóa học trong LaTeX: mũi tên phản ứng, cân bằng và công thức",
      intro: (
        <IntroP>
          Với ký hiệu hóa học trong LaTeX, gói mhchem làm gần như mọi việc:{" "}
          <Cmd>{"\\ce{2H2 + O2 -> 2H2O}"}</Cmd> trình bày một phản ứng hoàn chỉnh với ký hiệu nguyên
          tố thẳng đứng, chỉ số dưới và mũi tên phản ứng. Không có mhchem, mũi tên phản ứng là{" "}
          <Cmd>{"\\rightarrow"}</Cmd>, ký hiệu cân bằng là <Cmd>{"\\rightleftharpoons"}</Cmd> và
          công thức được viết như <Cmd>{"\\mathrm{H_2O}"}</Cmd> trong chế độ toán để chữ cái của
          nguyên tố không bị in nghiêng. Điều kiện phản ứng đặt trên một mũi tên co giãn bằng{" "}
          <Cmd>{"\\xrightarrow{\\Delta}"}</Cmd> của amsmath. Bảng dưới đây liệt kê các ký hiệu hóa
          học thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: phản ứng, mũi tên và công thức",
      use: {
        "\\ce{2H2 + O2 -> 2H2O}": "Phản ứng hoàn chỉnh",
        "\\ce{A <=> B}": "Cân bằng trong mhchem",
        "\\rightarrow": "Tạo thành (mũi tên phản ứng)",
        "\\rightleftharpoons": "Ký hiệu cân bằng (mũi tên nửa)",
        "\\xrightarrow{\\Delta}": "Mũi tên có nhiệt hoặc điều kiện phía trên",
        "\\mathrm{H_2O}": "Công thức hóa học trong chế độ toán",
        "\\mathrm{Na^+}": "Điện tích của ion",
        "{}^{14}_{6}\\mathrm{C}": "Đồng vị (số khối và số hiệu nguyên tử)",
        "\\Delta H^\\circ": "Biến thiên enthalpy chuẩn",
        "\\uparrow": "Giải phóng khí",
        "\\downarrow": "Kết tủa",
        "\\ce{HC#CH}": "Liên kết ba (= cho liên kết đôi)",
      },
      faqHeading: "Câu hỏi thường gặp về hóa học trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết mũi tên phản ứng trong LaTeX?",
          answer:
            "Trong chế độ toán, mũi tên phản ứng là \\rightarrow, hoặc \\longrightarrow cho mũi tên dài hơn. Với mhchem, viết -> bên trong \\ce{...}, ví dụ \\ce{A + B -> C}. Để đặt điều kiện trên mũi tên, dùng \\xrightarrow{\\Delta} của amsmath, hoặc ->[\\Delta] bên trong \\ce.",
        },
        {
          question: "Làm sao để viết ký hiệu cân bằng trong LaTeX?",
          answer:
            "Ký hiệu cân bằng ⇌ là \\rightleftharpoons, vốn có sẵn: $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightleftharpoons 2\\mathrm{NH_3}$. Trong mhchem, viết <=> bên trong \\ce{...}; gói này cũng cung cấp <=>> và <<=> cho cân bằng lệch về bên phải hoặc bên trái.",
        },
        {
          question: "Làm sao để viết công thức hóa học có chỉ số dưới trong LaTeX?",
          answer:
            "Dùng \\ce{H2SO4} của mhchem, vốn tự đặt các chữ số thành chỉ số dưới và giữ chữ cái thẳng đứng. Không có mhchem, viết \\mathrm{H_2SO_4} trong chế độ toán; nếu chỉ viết H_2SO_4, các chữ cái sẽ bị in nghiêng như biến số.",
        },
      ],
    },
    probability: {
      title: "Ký hiệu xác suất và thống kê trong LaTeX",
      intro: (
        <IntroP>
          Ký hiệu xác suất trong LaTeX là <Cmd>{"\\Pr"}</Cmd> hoặc <Cmd>{"\\mathbb{P}"}</Cmd>, còn
          toán tử kỳ vọng là <Cmd>{"\\mathbb{E}[X]"}</Cmd>. Bảng dưới đây liệt kê tám lệnh thông
          dụng nhất cùng gói mà mỗi lệnh cần; danh sách đầy đủ các ký hiệu xác suất và thống kê
          nằm ở phía dưới.
        </IntroP>
      ),
      use: {
        "\\Pr(A)": "Toán tử xác suất (Pr thẳng đứng)",
        "\\mathbb{P}(A)": "Ký hiệu xác suất, kiểu chữ blackboard bold",
        "\\mathbb{E}[X]": "Toán tử kỳ vọng",
        "\\operatorname{Var}(X)": "Phương sai",
        "\\operatorname{Cov}(X, Y)": "Hiệp phương sai",
        "P(A \\mid B)": "Xác suất có điều kiện",
        "X \\sim \\mathcal{N}(\\mu, \\sigma^2)": "Có phân phối (chuẩn)",
        "\\binom{n}{k}": "Hệ số nhị thức",
      },
      faqHeading: "Câu hỏi thường gặp",
      faq: [
        {
          question: "Làm sao để viết ký hiệu xác suất trong LaTeX?",
          answer:
            "Dùng toán tử có sẵn \\Pr, như trong \\Pr(A), để có Pr thẳng đứng với khoảng cách của toán tử, hoặc kiểu chữ blackboard bold \\mathbb{P}(A) với \\usepackage{amssymb}. Với xác suất có điều kiện, viết P(A \\mid B); \\mid giãn cách dấu gạch đứng đúng cách, điều mà một dấu | đơn thuần không làm được.",
        },
        {
          question: "Làm sao để viết toán tử kỳ vọng trong LaTeX?",
          answer:
            "Viết \\mathbb{E}[X] (amssymb) cho chữ E kiểu blackboard bold, hoặc \\operatorname{E}[X] (amsmath) cho chữ E thẳng đứng. Để dùng lại nhiều lần, khai báo một lần trong phần mở đầu bằng \\DeclareMathOperator{\\E}{\\mathbb{E}} rồi viết \\E[X].",
        },
        {
          question: "Làm sao để viết phương sai trong LaTeX?",
          answer:
            "Phương sai không có lệnh có sẵn, vì vậy hãy viết \\operatorname{Var}(X) với amsmath, hoặc khai báo \\DeclareMathOperator{\\Var}{Var} trong phần mở đầu rồi dùng \\Var(X). Độ lệch chuẩn là \\sigma và phương sai cũng có thể viết là \\sigma^2.",
        },
      ],
    },
    greek: {
      title: "Chữ cái Hy Lạp trong LaTeX: toàn bộ bảng chữ cái Hy Lạp",
      intro: (
        <IntroP>
          Chữ cái Hy Lạp trong LaTeX được viết bằng dấu gạch chéo ngược và tên chữ cái trong chế độ
          toán: <Cmd>{"\\alpha"}</Cmd>, <Cmd>{"\\beta"}</Cmd>, <Cmd>{"\\gamma"}</Cmd>,{" "}
          <Cmd>{"\\pi"}</Cmd>. Viết hoa chữ cái đầu của tên để có dạng chữ hoa, như{" "}
          <Cmd>{"\\Gamma"}</Cmd>, <Cmd>{"\\Delta"}</Cmd> và <Cmd>{"\\Omega"}</Cmd>; những chữ hoa
          giống chữ Latinh, như Alpha và Beta, không có lệnh nên được viết là A và B. Một số chữ
          cái có dạng biến thể: <Cmd>{"\\varepsilon"}</Cmd>, <Cmd>{"\\vartheta"}</Cmd>,{" "}
          <Cmd>{"\\varphi"}</Cmd> và <Cmd>{"\\varsigma"}</Cmd>. Tất cả đều có sẵn. Bảng dưới đây
          liệt kê các chữ cái Hy Lạp thông dụng nhất; toàn bộ bảng chữ cái Hy Lạp trong LaTeX nằm ở
          phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các chữ cái Hy Lạp thông dụng nhất",
      use: {
        "\\alpha": "Alpha",
        "\\beta": "Beta",
        "\\gamma": "Gamma (chữ hoa \\Gamma)",
        "\\delta": "Delta (chữ hoa \\Delta)",
        "\\epsilon": "Epsilon ϵ (\\varepsilon cho ε)",
        "\\theta": "Theta (biến thể \\vartheta, chữ hoa \\Theta)",
        "\\lambda": "Lambda (chữ hoa \\Lambda)",
        "\\mu": "Mu",
        "\\pi": "Pi (chữ hoa \\Pi)",
        "\\sigma": "Sigma (chữ hoa \\Sigma)",
        "\\phi": "Phi ϕ (\\varphi cho φ, chữ hoa \\Phi)",
        "\\omega": "Omega (chữ hoa \\Omega)",
      },
      faqHeading: "Câu hỏi thường gặp về chữ cái Hy Lạp trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết chữ cái Hy Lạp trong LaTeX?",
          answer:
            "Gõ dấu gạch chéo ngược và tên chữ cái trong chế độ toán: $\\alpha$, $\\beta$, $\\gamma$, $\\theta$, $\\pi$. Với chữ hoa, viết hoa chữ cái đầu: \\Gamma, \\Delta, \\Theta, \\Lambda, \\Xi, \\Pi, \\Sigma, \\Upsilon, \\Phi, \\Psi, \\Omega. Không cần gói nào.",
        },
        {
          question: "Tại sao không có lệnh \\Alpha trong LaTeX?",
          answer:
            "Các chữ hoa Alpha, Beta, Epsilon, Zeta, Eta, Iota, Kappa, Mu, Nu, Omicron, Rho, Tau và Chi giống hệt chữ Latinh nên LaTeX không định nghĩa chúng; hãy viết A, B, E, v.v. Tương tự, chữ omicron thường chỉ đơn giản là o.",
        },
        {
          question: "Làm sao để in đậm chữ cái Hy Lạp trong LaTeX?",
          answer:
            "Dùng \\boldsymbol{\\alpha} của amsmath hoặc \\bm{\\alpha} của gói bm. \\mathbf chỉ tác động lên chữ Latinh, chữ số và chữ Hy Lạp hoa, nên \\mathbf{\\alpha} giữ nguyên chữ alpha.",
        },
      ],
    },
    quantifiers: {
      title: "Lượng từ trong LaTeX: với mọi, tồn tại và thuộc",
      intro: (
        <IntroP>
          Các lượng từ trong LaTeX là <Cmd>{"\\forall"}</Cmd> (với mọi, ∀) và{" "}
          <Cmd>{"\\exists"}</Cmd> (tồn tại, ∃), cả hai đều có sẵn; <Cmd>{"\\nexists"}</Cmd> cho
          “không tồn tại” đến từ amssymb, còn tồn tại duy nhất được viết là{" "}
          <Cmd>{"\\exists!"}</Cmd>. Các mệnh đề có lượng từ thường kết hợp chúng với quan hệ
          thuộc, <Cmd>{"\\in"}</Cmd>, và một dấu phân cách như dấu phẩy hoặc dấu hai chấm:{" "}
          <Cmd>{"\\forall x \\in \\mathbb{R},\\ x^2 \\geq 0"}</Cmd>. Phép phủ định là{" "}
          <Cmd>{"\\neg"}</Cmd>, còn phép kéo theo và phép tương đương là <Cmd>{"\\implies"}</Cmd> và{" "}
          <Cmd>{"\\iff"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu lượng từ thông dụng nhất cùng gói
          mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: lượng từ và phép nối",
      use: {
        "\\forall": "Với mọi",
        "\\exists": "Tồn tại",
        "\\nexists": "Không tồn tại",
        "\\exists!": "Tồn tại duy nhất",
        "\\forall x \\in A": "Với mọi x thuộc A",
        "\\in": "Thuộc",
        "\\notin": "Không thuộc",
        "\\neg": "Không (phủ định)",
        "\\land": "Và",
        "\\lor": "Hoặc",
        "\\implies": "Kéo theo",
        "\\iff": "Khi và chỉ khi",
      },
      faqHeading: "Câu hỏi thường gặp về lượng từ trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết “với mọi” trong LaTeX?",
          answer:
            "Dùng \\forall trong chế độ toán: $\\forall x \\in \\mathbb{R}$ cho ra ∀x ∈ ℝ. Lệnh này có sẵn. Thêm một dấu phân cách sau biến bị ràng buộc, ví dụ \\forall x,\\ P(x) hoặc \\forall x : P(x), để công thức dễ đọc.",
        },
        {
          question: "Làm sao để viết “tồn tại” và “không tồn tại” trong LaTeX?",
          answer:
            "“Tồn tại” là \\exists (∃), có sẵn. “Không tồn tại” là \\nexists (∄), cần \\usepackage{amssymb}; \\not\\exists cũng dùng được mà không cần gói, nhưng trông kém gọn hơn. Với tồn tại duy nhất, viết \\exists!.",
        },
        {
          question: "Làm sao để viết “sao cho” trong LaTeX?",
          answer:
            "Trong cách viết tập hợp bằng tính chất đặc trưng, dùng dấu gạch đứng hoặc dấu hai chấm: \\{ x \\in A \\mid x > 0 \\} hoặc \\{ x : x > 0 \\}; \\mid cho khoảng cách đúng. Trong một mệnh đề có lượng từ, thường dùng dấu phẩy hoặc \\text{ sao cho }, như trong \\exists x \\in A \\text{ sao cho } x > 0.",
        },
      ],
    },
    boolean: {
      title: "Ký hiệu đại số Boole trong LaTeX: AND, OR và XOR",
      intro: (
        <IntroP>
          Ký hiệu đại số Boole trong LaTeX dùng lại các phép nối logic: ký hiệu AND là{" "}
          <Cmd>{"\\land"}</Cmd> (&and;), ký hiệu OR là <Cmd>{"\\lor"}</Cmd> (&or;) và NOT là{" "}
          <Cmd>{"\\lnot"}</Cmd> (&not;). XOR trong LaTeX là <Cmd>{"\\oplus"}</Cmd> (&oplus;), hoặc{" "}
          <Cmd>{"\\veebar"}</Cmd> của amssymb. Phép kéo theo và phép tương đương là{" "}
          <Cmd>{"\\Rightarrow"}</Cmd> và <Cmd>{"\\iff"}</Cmd>, hằng đúng và hằng sai là{" "}
          <Cmd>{"\\top"}</Cmd> và <Cmd>{"\\bot"}</Cmd>, còn các lượng từ là{" "}
          <Cmd>{"\\forall"}</Cmd> và <Cmd>{"\\exists"}</Cmd>. Tất cả đều dùng trong chế độ toán.
          Bảng dưới đây liệt kê các lệnh thông dụng nhất cùng gói mà mỗi lệnh cần; danh sách đầy đủ
          các ký hiệu cổng logic nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các phép toán Boole",
      use: {
        "\\land": "AND, phép hội (tên khác \\wedge)",
        "\\lor": "OR, phép tuyển (tên khác \\vee)",
        "\\lnot": "NOT, phép phủ định (tên khác \\neg)",
        "\\overline{A}": "NOT, cách viết bằng gạch trên",
        "\\oplus": "XOR (hoặc loại trừ)",
        "\\veebar": "XOR, kiểu logic học",
        "\\barwedge": "NAND",
        "\\Rightarrow": "Kéo theo",
        "\\iff": "Khi và chỉ khi (tương đương)",
        "\\top": "Đúng, 1",
        "\\bot": "Sai, 0",
        "\\forall x \\, \\exists y": "Với mọi, tồn tại",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu Boole trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu AND và OR trong LaTeX?",
          answer:
            "AND (∧) là \\land hoặc tên khác \\wedge, còn OR (∨) là \\lor hoặc \\vee. Cả hai đều có sẵn và dùng trong chế độ toán: $A \\land B$, $A \\lor B$. NOT là \\lnot hoặc \\neg. Trong ký hiệu mạch điện, bạn cũng có thể viết A \\cdot B cho AND, A + B cho OR và \\overline{A} cho NOT.",
        },
        {
          question: "Làm sao để viết XOR trong LaTeX?",
          answer:
            "Dùng \\oplus (⊕), vốn có sẵn: $A \\oplus B$. Sách logic đôi khi dùng \\veebar (⊻), cần \\usepackage{amssymb}. XNOR thường được viết là \\odot hoặc \\overline{A \\oplus B}.",
        },
        {
          question: "Cần gói nào cho ký hiệu đại số Boole trong LaTeX?",
          answer:
            "Các ký hiệu thông dụng thì không cần gói nào: \\land, \\lor, \\lnot, \\oplus, \\Rightarrow, \\iff, \\top, \\bot, \\forall và \\exists đều có sẵn. Nạp amssymb cho \\veebar và \\barwedge, và amsmath cho \\implies.",
        },
      ],
    },
    brackets: {
      title: "Dấu ngoặc trong LaTeX: ngoặc nhọn, ngoặc góc, hàm sàn và chuẩn",
      intro: (
        <IntroP>
          Dấu phân cách trong LaTeX có hai loại: loại gõ trực tiếp, như <Cmd>{"("}</Cmd>,{" "}
          <Cmd>{")"}</Cmd>, <Cmd>{"["}</Cmd> và <Cmd>{"]"}</Cmd>, và loại cần một lệnh, như{" "}
          <Cmd>{"\\{"}</Cmd> và <Cmd>{"\\}"}</Cmd> cho ngoặc nhọn, <Cmd>{"\\langle"}</Cmd> và{" "}
          <Cmd>{"\\rangle"}</Cmd> cho ngoặc góc, <Cmd>{"\\lfloor"}</Cmd> và{" "}
          <Cmd>{"\\rfloor"}</Cmd> cho hàm sàn, và <Cmd>{"\\lVert"}</Cmd> và <Cmd>{"\\rVert"}</Cmd>{" "}
          cho chuẩn. Nếu đặt <Cmd>{"\\left"}</Cmd> và <Cmd>{"\\right"}</Cmd> trước một cặp ngoặc
          bất kỳ, LaTeX sẽ điều chỉnh kích thước dấu ngoặc theo nội dung bên trong, chẳng hạn một
          phân số. Ngoặc vuông kép cần gói stmaryrd. Bảng dưới đây liệt kê các dấu ngoặc và dấu
          phân cách thông dụng nhất cùng gói mà mỗi loại cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các dấu ngoặc thông dụng nhất",
      use: {
        "\\left( \\frac{a}{b} \\right)": "Ngoặc tròn tự co giãn theo nội dung",
        "\\{ x \\}": "Ngoặc nhọn (đã thoát)",
        "\\langle x \\rangle": "Ngoặc góc, tích vô hướng",
        "\\lfloor x \\rfloor": "Hàm sàn (phần nguyên)",
        "\\lceil x \\rceil": "Hàm trần",
        "\\lvert x \\rvert": "Giá trị tuyệt đối",
        "\\lVert x \\rVert": "Chuẩn",
        "\\llbracket x \\rrbracket": "Ngoặc vuông kép",
        "\\bigl( x \\bigr)": "Kích thước thủ công: \\big, \\Big, \\bigg, \\Bigg",
        "[a, b)": "Khoảng nửa mở",
        "\\underbrace{a + b}_{n}": "Ngoặc nhọn dưới biểu thức (\\overbrace ở trên)",
      },
      faqHeading: "Câu hỏi thường gặp về dấu ngoặc trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ngoặc nhọn trong LaTeX?",
          answer:
            "Ngoặc nhọn là ký tự nhóm của LaTeX, nên một dấu { hoặc } đơn thuần sẽ không được in ra. Hãy thoát chúng: \\{ và \\} dùng được cả trong văn bản lẫn chế độ toán, ví dụ $\\{1, 2, 3\\}$. Dùng \\left\\{ và \\right\\} cho ngoặc nhọn lớn dần theo nội dung; \\lbrace và \\rbrace là các lựa chọn thay thế có tên.",
        },
        {
          question: "Làm sao để viết ngoặc góc trong LaTeX?",
          answer:
            "Dùng \\langle và \\rangle, như trong $\\langle u, v \\rangle$. Đừng dùng phím < và >: đó là ký hiệu quan hệ với hình dạng và khoảng cách khác. Với nội dung cao, viết \\left\\langle ... \\right\\rangle.",
        },
        {
          question: "Làm sao để viết ngoặc vuông kép trong LaTeX?",
          answer:
            "Nạp \\usepackage{stmaryrd} và viết \\llbracket x \\rrbracket cho ngoặc vuông kép ⟦x⟧, vốn dùng trong ngữ nghĩa học và cho khoảng số nguyên. Không có gói này, [\\![ x ]\\!] mô phỏng chúng bằng cách ghép hai dấu ngoặc với một khoảng hẹp âm.",
        },
      ],
    },
    calculus: {
      title: "Ký hiệu giải tích trong LaTeX: đạo hàm, tích phân và giới hạn",
      intro: (
        <IntroP>
          Các ký hiệu giải tích cơ bản trong LaTeX đều có sẵn. Đạo hàm trong LaTeX là một phân số,{" "}
          <Cmd>{"\\frac{dy}{dx}"}</Cmd>, hoặc một dấu phẩy trên, <Cmd>{"f'(x)"}</Cmd>; đạo hàm riêng
          dùng <Cmd>{"\\partial"}</Cmd>, như trong <Cmd>{"\\frac{\\partial f}{\\partial x}"}</Cmd>;
          tích phân là <Cmd>{"\\int_a^b f(x)\\,dx"}</Cmd>; và giới hạn là{" "}
          <Cmd>{"\\lim_{x \\to 0}"}</Cmd>. Các tích phân bội như <Cmd>{"\\iint"}</Cmd> và{" "}
          <Cmd>{"\\iiint"}</Cmd> đến từ amsmath, còn gói physics bổ sung các lối tắt như{" "}
          <Cmd>{"\\dv"}</Cmd> và <Cmd>{"\\pdv"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu giải tích
          thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: đạo hàm, tích phân và giới hạn",
      use: {
        "\\frac{dy}{dx}": "Đạo hàm (ký hiệu Leibniz)",
        "f'(x)": "Đạo hàm (ký hiệu phẩy); f''(x) cho đạo hàm cấp hai",
        "\\frac{d^2 y}{dx^2}": "Đạo hàm cấp hai",
        "\\frac{\\partial f}{\\partial x}": "Đạo hàm riêng",
        "\\dot{x}": "Đạo hàm theo thời gian (dấu chấm Newton); \\ddot{x} cho cấp hai",
        "\\int_a^b f(x)\\,dx": "Tích phân xác định",
        "\\iint_D f\\,dA": "Tích phân kép (\\iiint cho tích phân bội ba)",
        "\\oint_C": "Tích phân đường khép kín",
        "\\lim_{x \\to 0}": "Giới hạn",
        "\\nabla f": "Gradient",
        "\\dv{f}{x}": "Lối tắt cho đạo hàm",
        "\\pdv{f}{x}": "Lối tắt cho đạo hàm riêng",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu giải tích trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết đạo hàm trong LaTeX?",
          answer:
            "Viết nó dưới dạng phân số trong chế độ toán: $\\frac{dy}{dx}$ cho dy/dx và $\\frac{d^2y}{dx^2}$ cho đạo hàm cấp hai. Ký hiệu phẩy là f'(x) và f''(x), còn ký hiệu chấm của Newton là \\dot{x} và \\ddot{x}. Tất cả đều có sẵn; gói physics bổ sung \\dv{y}{x} làm lối tắt.",
        },
        {
          question: "Làm sao để viết đạo hàm riêng trong LaTeX?",
          answer:
            "Dùng ký hiệu có sẵn \\partial bên trong một phân số: $\\frac{\\partial f}{\\partial x}$, và $\\frac{\\partial^2 f}{\\partial x \\partial y}$ cho đạo hàm riêng hỗn hợp cấp hai. Với \\usepackage{physics}, \\pdv{f}{x} và \\pdv{f}{x}{y} cho cùng kết quả.",
        },
        {
          question: "Làm sao để viết tích phân có cận trong LaTeX?",
          answer:
            "Dùng \\int với chỉ số dưới và chỉ số trên: $\\int_a^b f(x)\\,dx$. Thêm \\limits (\\int\\limits_a^b) để đặt cận ở trên và dưới dấu tích phân. Với tích phân kép và bội ba, nạp amsmath và dùng \\iint và \\iiint, vốn giãn cách các dấu tích phân đúng cách; \\oint cho tích phân đường khép kín.",
        },
      ],
    },
    combinatorics: {
      title: "Hệ số nhị thức và giai thừa trong LaTeX: ký hiệu tổ hợp",
      intro: (
        <IntroP>
          Để viết “tổ hợp chập k của n” trong LaTeX, nạp amsmath và dùng{" "}
          <Cmd>{"\\binom{n}{k}"}</Cmd>, lệnh này in hệ số nhị thức trong ngoặc tròn và tự điều chỉnh
          kích thước cho công thức cùng dòng hoặc hiển thị riêng; <Cmd>{"\\dbinom"}</Cmd> và{" "}
          <Cmd>{"\\tbinom"}</Cmd> buộc dùng kích thước lớn hoặc nhỏ. Giai thừa trong LaTeX không
          cần lệnh nào: <Cmd>{"n!"}</Cmd> chỉ là chữ cái kèm dấu chấm than, nên công thức hệ số nhị
          thức là <Cmd>{"\\frac{n!}{k!(n-k)!}"}</Cmd>. Bảng dưới đây liệt kê các lệnh tổ hợp thông
          dụng nhất cùng gói mà mỗi lệnh cần; danh sách ký hiệu đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: hệ số nhị thức và giai thừa",
      use: {
        "\\binom{n}{k}": "Tổ hợp chập k của n (hệ số nhị thức)",
        "\\dbinom{n}{k}": "Nhị thức cỡ hiển thị, kể cả trong dòng",
        "\\tbinom{n}{k}": "Nhị thức cỡ văn bản, kể cả trong công thức hiển thị",
        "{n \\choose k}": "\\choose của TeX thuần (tránh dùng với amsmath)",
        "n!": "Giai thừa",
        "n!!": "Giai thừa kép",
        "\\frac{n!}{k!(n-k)!}": "Công thức hệ số nhị thức",
        "\\binom{n}{k_1, k_2, \\ldots, k_m}": "Hệ số đa thức",
        "P(n, k) = \\frac{n!}{(n-k)!}": "Chỉnh hợp (chỉnh hợp chập k của n)",
        "n^{\\underline{k}}": "Giai thừa giảm",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu tổ hợp trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết “tổ hợp chập k của n” trong LaTeX?",
          answer:
            "Nạp amsmath và viết \\binom{n}{k}, lệnh này in n trên k trong ngoặc tròn và tự điều chỉnh kích thước cho công thức cùng dòng hoặc hiển thị riêng. Dùng \\dbinom{n}{k} để buộc dùng cỡ lớn của công thức hiển thị và \\tbinom{n}{k} cho cỡ văn bản nhỏ. Dạng TeX thuần {n \\choose k} vẫn dùng được, nhưng amsmath không khuyến khích.",
        },
        {
          question: "Làm sao để viết giai thừa trong LaTeX?",
          answer:
            "Giai thừa không cần lệnh nào: viết n! trong chế độ toán. Giai thừa kép là n!!, còn với một biểu thức, hãy đặt nó trong ngoặc, như (n+1)!. Công thức hệ số nhị thức là \\frac{n!}{k!(n-k)!}.",
        },
        {
          question: "Làm sao để viết hệ số đa thức trong LaTeX?",
          answer:
            "Dùng lại \\binom với một danh sách ở tham số dưới: \\binom{n}{k_1, k_2, \\ldots, k_m}. Hoặc viết đầy đủ thành \\frac{n!}{k_1!\\,k_2!\\cdots k_m!}.",
        },
      ],
    },
    complex: {
      title: "Ký hiệu tập số phức và số phức liên hợp trong LaTeX",
      intro: (
        <IntroP>
          Ký hiệu tập số phức là chữ C kiểu blackboard bold &#8450;, trong LaTeX được viết là{" "}
          <Cmd>{"\\mathbb{C}"}</Cmd> với gói amssymb. Số phức liên hợp trong LaTeX là{" "}
          <Cmd>{"\\bar{z}"}</Cmd> cho một chữ cái hoặc <Cmd>{"\\overline{z}"}</Cmd> cho cả một biểu
          thức, còn trong vật lý được viết là <Cmd>{"z^*"}</Cmd>. Phần thực và phần ảo là{" "}
          <Cmd>{"\\Re"}</Cmd> và <Cmd>{"\\Im"}</Cmd>, hoặc dạng thẳng đứng{" "}
          <Cmd>{"\\operatorname{Re}"}</Cmd>; mô-đun là <Cmd>{"|z|"}</Cmd> và argument là{" "}
          <Cmd>{"\\arg z"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu số phức thông dụng nhất cùng gói
          mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: ký hiệu số phức",
      use: {
        "\\mathbb{C}": "Tập số phức",
        "z = a + bi": "Dạng đại số",
        "\\bar{z}": "Số phức liên hợp (một chữ cái)",
        "\\overline{z + w}": "Liên hợp của một biểu thức",
        "z^*": "Liên hợp, ký hiệu vật lý",
        "\\Re(z)": "Phần thực, chữ ℜ kiểu Fraktur",
        "\\Im(z)": "Phần ảo, chữ ℑ kiểu Fraktur",
        "\\operatorname{Re}(z)": "Phần thực, chữ thẳng đứng (tương tự Im)",
        "|z|": "Mô-đun (giá trị tuyệt đối)",
        "\\arg z": "Argument",
        "re^{i\\theta}": "Dạng lượng giác (dạng mũ)",
        "\\mathrm{i}": "Đơn vị ảo viết thẳng đứng",
      },
      faqHeading: "Câu hỏi thường gặp về số phức trong LaTeX",
      faq: [
        {
          question: "Ký hiệu của tập số phức là gì?",
          answer:
            "Tập số phức là chữ C kiểu blackboard bold, ℂ. Trong LaTeX, viết \\mathbb{C} với \\usepackage{amssymb} (hoặc amsfonts), như trong z \\in \\mathbb{C}. Tập số thực là \\mathbb{R} theo cùng kiểu chữ.",
        },
        {
          question: "Làm sao để viết số phức liên hợp trong LaTeX?",
          answer:
            "Dùng \\bar{z} cho một chữ cái và \\overline{z + w} cho biểu thức dài hơn, vì \\overline trải dài trên toàn bộ tham số của nó. Trong vật lý và kỹ thuật thường viết z^*, còn ma trận chuyển vị liên hợp là A^\\dagger hoặc A^*.",
        },
        {
          question: "Làm sao để viết phần thực và phần ảo trong LaTeX?",
          answer:
            "Các lệnh có sẵn \\Re và \\Im in ra chữ Fraktur ℜ và ℑ. Với dạng thẳng đứng Re và Im mà hầu hết sách hiện nay dùng, viết \\operatorname{Re}(z) và \\operatorname{Im}(z) với amsmath, hoặc định nghĩa lại các lệnh gốc một lần bằng \\renewcommand{\\Re}{\\operatorname{Re}}.",
        },
      ],
    },
    "computer-science": {
      title: "Ký hiệu khoa học máy tính trong LaTeX: O lớn, hàm sàn và ký hiệu thuật toán",
      intro: (
        <IntroP>
          Phần lớn ký hiệu khoa học máy tính trong LaTeX là các lệnh toán thông thường. Ký hiệu O
          lớn trong LaTeX là <Cmd>{"O(n \\log n)"}</Cmd> hoặc, trong nhiều bài báo, dạng chữ viết
          tay <Cmd>{"\\mathcal{O}(n)"}</Cmd>; các ký hiệu liên quan là <Cmd>{"\\Omega(n)"}</Cmd>,{" "}
          <Cmd>{"\\Theta(n)"}</Cmd> và o nhỏ <Cmd>{"o(n)"}</Cmd>. Hàm sàn và hàm trần là{" "}
          <Cmd>{"\\lfloor x \\rfloor"}</Cmd> và <Cmd>{"\\lceil x \\rceil"}</Cmd>, XOR là{" "}
          <Cmd>{"\\oplus"}</Cmd>, phép gán trong mã giả là <Cmd>{"\\gets"}</Cmd>, và định nghĩa
          bằng := trông gọn hơn với <Cmd>{"\\coloneqq"}</Cmd> của mathtools. Bảng dưới đây liệt kê
          các ký hiệu khoa học máy tính thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy
          đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: độ phức tạp, làm tròn và thuật toán",
      use: {
        "O(n \\log n)": "O lớn (cận trên)",
        "\\mathcal{O}(n)": "O lớn, kiểu chữ viết tay",
        "\\Omega(n)": "Omega lớn (cận dưới)",
        "\\Theta(n^2)": "Theta lớn (cận chặt)",
        "o(n)": "o nhỏ",
        "\\lfloor \\log_2 n \\rfloor": "Sàn của logarit cơ số 2",
        "\\lceil n/2 \\rceil": "Hàm trần",
        "a \\bmod n": "Phép mod như toán tử hai ngôi",
        "\\oplus": "XOR",
        "x \\gets x + 1": "Phép gán trong mã giả",
        "\\coloneqq": "Được định nghĩa là (:=)",
        "\\{0,1\\}^*": "Mọi xâu nhị phân (sao Kleene)",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu khoa học máy tính trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu O lớn trong LaTeX?",
          answer:
            "Viết O(n) trong chế độ toán: $O(n \\log n)$. Nhiều tác giả thích dạng chữ viết tay $\\mathcal{O}(n)$, vốn không cần gói nào. Omega lớn và Theta lớn dùng chữ Hy Lạp hoa \\Omega(n) và \\Theta(n), còn o nhỏ là o(n). Hãy viết \\log thay vì log để tên hàm hiển thị thẳng đứng.",
        },
        {
          question: "Làm sao để viết hàm sàn và hàm trần trong LaTeX?",
          answer:
            "Dùng các dấu phân cách có sẵn \\lfloor x \\rfloor cho ⌊x⌋ và \\lceil x \\rceil cho ⌈x⌉. Với nội dung cao, thêm \\left và \\right phía trước, như trong \\left\\lfloor \\frac{n}{2} \\right\\rfloor, hoặc định nghĩa \\floor và \\ceil bằng \\DeclarePairedDelimiter của mathtools.",
        },
        {
          question: "Làm sao để viết mod trong LaTeX?",
          answer:
            "Dùng \\bmod cho toán tử hai ngôi, a \\bmod n, và \\pmod{n} cho đồng dư, như trong a \\equiv b \\pmod{n}, lệnh này in (mod n) với khoảng cách đúng. Cả hai đều có sẵn; amsmath bổ sung \\mod{n} và \\pod{n} cho các kiểu giãn cách khác.",
        },
      ],
    },
    "differential-geometry": {
      title: "Ký hiệu hình học vi phân trong LaTeX: dạng vi phân, liên thông và độ cong",
      intro: (
        <IntroP>
          Ký hiệu hình học vi phân trong LaTeX được xây dựng từ một vài lệnh có sẵn. Tích ngoài của
          các dạng vi phân là <Cmd>{"\\alpha \\wedge \\beta"}</Cmd>, với{" "}
          <Cmd>{"\\bigwedge^k V"}</Cmd> cho lũy thừa ngoài; đạo hàm ngoài là{" "}
          <Cmd>{"d\\omega"}</Cmd>; đạo hàm hiệp biến là <Cmd>{"\\nabla_X Y"}</Cmd>; và đạo hàm Lie
          là <Cmd>{"\\mathcal{L}_X"}</Cmd>. Ký hiệu Christoffel và tensor độ cong là các chữ cái có
          chỉ số, <Cmd>{"\\Gamma^k_{ij}"}</Cmd> và <Cmd>{"R^l{}_{ijk}"}</Cmd>, còn không gian tiếp
          xúc tại một điểm là <Cmd>{"T_pM"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu hình học vi
          phân thông dụng nhất; tất cả đều có sẵn, và danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: đa tạp, dạng vi phân và độ cong",
      use: {
        "T_pM": "Không gian tiếp xúc tại p",
        "T^*_pM": "Không gian đối tiếp xúc tại p",
        "\\nabla_X Y": "Đạo hàm hiệp biến (liên thông)",
        "\\Gamma^k_{ij}": "Ký hiệu Christoffel",
        "R^l{}_{ijk}": "Tensor độ cong Riemann",
        "g_{ij}": "Tensor metric",
        "\\alpha \\wedge \\beta": "Tích ngoài của các dạng vi phân",
        "\\bigwedge^k V": "Lũy thừa ngoài, k-dạng",
        "d\\omega": "Đạo hàm ngoài",
        "\\mathcal{L}_X": "Đạo hàm Lie",
        "[X, Y]": "Móc Lie của các trường vectơ",
        "\\star\\omega": "Toán tử sao Hodge",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu hình học vi phân trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết tích ngoài (wedge) trong LaTeX?",
          answer:
            "Dùng \\wedge giữa các dạng vi phân, $\\alpha \\wedge \\beta$; đây là toán tử hai ngôi với khoảng cách đúng. Với lũy thừa ngoài hoặc tích ngoài lớn trên một tập chỉ số, dùng toán tử lớn \\bigwedge, như trong \\bigwedge^k V hoặc \\bigwedge_{i=1}^{n} dx_i. Cả hai đều có sẵn.",
        },
        {
          question: "Làm sao để viết đạo hàm hiệp biến trong LaTeX?",
          answer:
            "Viết \\nabla với hướng ở chỉ số dưới: $\\nabla_X Y$, hoặc \\nabla_\\mu V^\\nu trong ký hiệu chỉ số. Đạo hàm riêng theo tọa độ được viết là \\partial_\\mu, và ký hiệu dấu chấm phẩy V^\\nu{}_{;\\mu} cũng phổ biến trong sách vật lý.",
        },
        {
          question: "Làm sao để viết đạo hàm Lie và đạo hàm ngoài trong LaTeX?",
          answer:
            "Đạo hàm Lie là chữ L viết tay có chỉ số dưới, \\mathcal{L}_X T. Đạo hàm ngoài là chữ d thường, d\\omega; một số tác giả viết nó thẳng đứng bằng \\mathrm{d}\\omega để phân biệt với một biến.",
        },
      ],
    },
    finance: {
      title: "Ký hiệu tiền tệ và tài chính trong LaTeX: đô la, euro và công thức",
      intro: (
        <IntroP>
          Ký hiệu tiền tệ trong LaTeX cần chú ý một chút vì dấu đô la mở chế độ toán. Hãy thoát nó
          thành <Cmd>{"\\$"}</Cmd> để in dấu đô la; ký hiệu bảng Anh là <Cmd>{"\\pounds"}</Cmd>,
          còn ký hiệu euro là <Cmd>{"\\texteuro"}</Cmd>, hoặc <Cmd>{"\\euro"}</Cmd> của gói eurosym
          cho mẫu chính thức. Phần trăm là <Cmd>{"\\%"}</Cmd> vì một dấu % chưa thoát sẽ mở đầu chú
          thích, và phần nghìn là <Cmd>{"\\textperthousand"}</Cmd>. Các công thức tài chính, như giá
          trị hiện tại ròng hay lãi kép, là toán học thông thường được xây dựng bằng{" "}
          <Cmd>{"\\sum"}</Cmd> và <Cmd>{"\\frac"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu tài
          chính thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: tiền tệ, phần trăm và công thức",
      use: {
        "\\$": "Dấu đô la",
        "\\pounds": "Bảng Anh",
        "\\texteuro": "Ký hiệu euro (textcomp, có sẵn)",
        "\\euro": "Ký hiệu euro chính thức",
        "\\textyen": "Ký hiệu yên (textcomp, có sẵn)",
        "\\%": "Phần trăm",
        "\\textperthousand": "Phần nghìn (textcomp, có sẵn)",
        "\\mathrm{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}": "Giá trị hiện tại ròng (NPV)",
        "A = P\\left(1 + \\frac{r}{n}\\right)^{nt}": "Lãi kép",
        "A = Pe^{rt}": "Lãi kép liên tục",
        "\\pm": "Cộng trừ",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu tài chính trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết dấu đô la trong LaTeX?",
          answer:
            "Hãy thoát nó: \\$ in ra $ cả trong chế độ văn bản lẫn chế độ toán, ví dụ \\$100. Một dấu $ chưa thoát sẽ mở hoặc đóng chế độ toán, vì vậy dấu đô la chưa thoát trong một mức giá sẽ gây lỗi hoặc biến phần còn lại của dòng thành công thức.",
        },
        {
          question: "Làm sao để viết ký hiệu euro trong LaTeX?",
          answer:
            "\\texteuro (của textcomp, nay đã thuộc nhân LaTeX) in ký hiệu euro của phông chữ hiện tại mà không cần gói bổ sung. Với mẫu chính thức của EU, nạp \\usepackage{eurosym} và viết \\euro. Với XeLaTeX hoặc LuaLaTeX, bạn cũng có thể gõ trực tiếp €.",
        },
        {
          question: "Làm sao để viết dấu phần trăm trong LaTeX?",
          answer:
            "Viết \\%. Một dấu % chưa thoát sẽ mở đầu chú thích, khiến mọi thứ phía sau trên dòng đó biến mất khỏi tài liệu. Với phần nghìn, dùng \\textperthousand, còn với số có đơn vị, gói siunitx cung cấp \\qty{5}{\\percent}.",
        },
      ],
    },
    "game-theory": {
      title: "Ký hiệu lý thuyết trò chơi trong LaTeX: chiến lược, phần thưởng và cân bằng",
      intro: (
        <IntroP>
          Ký hiệu lý thuyết trò chơi trong LaTeX chủ yếu là các chữ cái có chỉ số, nên điều cốt yếu
          là dùng chỉ số dưới nhất quán. Chiến lược của một người chơi là <Cmd>{"s_i"}</Cmd>, chiến
          lược của tất cả những người còn lại là <Cmd>{"s_{-i}"}</Cmd>, phần thưởng là{" "}
          <Cmd>{"u_i(s_i, s_{-i})"}</Cmd>, và cân bằng Nash được đánh dấu bằng dấu sao,{" "}
          <Cmd>{"s^*"}</Cmd>. Chiến lược hỗn hợp dùng <Cmd>{"\\sigma_i \\in \\Delta(S_i)"}</Cmd>, quan
          hệ ưa thích dùng <Cmd>{"\\succ"}</Cmd> và <Cmd>{"\\succeq"}</Cmd>, còn phản ứng tốt nhất
          nên viết bằng <Cmd>{"\\operatorname{BR}_i"}</Cmd> của amsmath. Ma trận phần thưởng là các
          bảng dựng bằng array. Bảng dưới đây liệt kê các ký hiệu lý thuyết trò chơi thông dụng nhất
          cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: chiến lược, phần thưởng và cân bằng",
      use: {
        "s_i \\in S_i": "Chiến lược của người chơi i",
        "s_{-i}": "Chiến lược của tất cả người chơi khác",
        "u_i(s_i, s_{-i})": "Phần thưởng (độ thỏa dụng) của người chơi i",
        "s^* = (s_1^*, \\ldots, s_n^*)": "Hồ sơ cân bằng Nash",
        "\\operatorname{BR}_i(s_{-i})": "Phản ứng tốt nhất",
        "\\sigma_i \\in \\Delta(S_i)": "Chiến lược hỗn hợp",
        "\\mathbb{E}[u_i(\\sigma)]": "Phần thưởng kỳ vọng",
        "a \\succ b": "Ưa thích chặt",
        "a \\succeq b": "Ưa thích yếu",
        "\\max_{s_i} \\min_{s_{-i}} u_i": "Giá trị maximin",
        "\\phi_i(v)": "Giá trị Shapley",
        "v(S)": "Giá trị của liên minh S",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu lý thuyết trò chơi trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ma trận phần thưởng trong LaTeX?",
          answer:
            "Dùng array bên trong một công thức hiển thị, với một đường kẻ dọc sau nhãn của các hàng: \\begin{array}{c|cc} & L & R \\\\ \\hline U & 3,3 & 0,5 \\\\ D & 5,0 & 1,1 \\end{array}. Với trò chơi dạng chuẩn tắc có tên người chơi, gói sgame cung cấp môi trường game.",
        },
        {
          question: "Làm sao để viết s trừ i trong LaTeX?",
          answer:
            "Đặt dấu trừ và chỉ số trong ngoặc nhọn: s_{-i}. Không có ngoặc nhọn, s_-i chỉ hạ dấu trừ xuống. Điều này cũng áp dụng cho các hồ sơ như (s_i', s_{-i}) và phản ứng tốt nhất như BR_i(s_{-i}).",
        },
        {
          question: "Làm sao để đánh dấu cân bằng Nash trong LaTeX?",
          answer:
            "Dùng dấu sao ở chỉ số trên: s^* cho hồ sơ và s_i^* cho chiến lược cân bằng của một người chơi. Điều kiện cân bằng là u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*) với mọi s_i \\in S_i.",
        },
      ],
    },
    geometry: {
      title: "Ký hiệu hình học trong LaTeX: vuông góc, song song, góc và tam giác",
      intro: (
        <IntroP>
          Ký hiệu hình học trong LaTeX phần lớn đều có sẵn. Vuông góc, cũng là ký hiệu trực giao,
          là <Cmd>{"\\perp"}</Cmd> (⊥), song song là <Cmd>{"\\parallel"}</Cmd> (∥), góc là{" "}
          <Cmd>{"\\angle ABC"}</Cmd> và tam giác là <Cmd>{"\\triangle ABC"}</Cmd>. Bằng nhau (tương
          đẳng) là <Cmd>{"\\cong"}</Cmd> và đồng dạng là <Cmd>{"\\sim"}</Cmd>. Đoạn thẳng có gạch
          trên, <Cmd>{"\\overline{AB}"}</Cmd>, tia hoặc vectơ có mũi tên,{" "}
          <Cmd>{"\\overrightarrow{AB}"}</Cmd>, và ký hiệu độ là một vòng tròn ở chỉ số trên,{" "}
          <Cmd>{"90^\\circ"}</Cmd>. Chỉ một vài ký hiệu bổ sung, như{" "}
          <Cmd>{"\\measuredangle"}</Cmd> và <Cmd>{"\\nparallel"}</Cmd>, cần amssymb. Bảng dưới đây
          liệt kê các ký hiệu hình học thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy
          đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các ký hiệu hình học thông dụng nhất",
      use: {
        "\\perp": "Vuông góc, trực giao",
        "\\parallel": "Song song",
        "\\nparallel": "Không song song",
        "\\angle ABC": "Góc",
        "\\measuredangle ABC": "Số đo góc",
        "\\triangle ABC": "Tam giác",
        "\\cong": "Bằng nhau (tương đẳng)",
        "\\sim": "Đồng dạng",
        "\\overline{AB}": "Đoạn thẳng",
        "\\overrightarrow{AB}": "Tia hoặc vectơ",
        "\\overleftrightarrow{AB}": "Đường thẳng đi qua A và B",
        "90^\\circ": "Ký hiệu độ",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu hình học trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu vuông góc hoặc trực giao trong LaTeX?",
          answer:
            "Dùng \\perp trong chế độ toán: $AB \\perp CD$ in ra AB ⊥ CD. Cùng lệnh này dùng cho vectơ trực giao, u \\perp v, và cho phần bù trực giao V^\\perp. Lệnh có sẵn nên không cần gói nào.",
        },
        {
          question: "Làm sao để viết ký hiệu tam giác trong LaTeX?",
          answer:
            "\\triangle in ra △, như trong $\\triangle ABC$, và không cần gói nào. amssymb bổ sung \\vartriangle nhỏ hơn và \\blacktriangle tô đặc.",
        },
        {
          question: "Làm sao để viết ký hiệu độ trong LaTeX?",
          answer:
            "Trong chế độ toán, viết một vòng tròn ở chỉ số trên: $90^\\circ$. Trong văn bản, \\textdegree in ra °, còn gói siunitx cho kết quả nhất quán với \\ang{45} hoặc \\qty{90}{\\degree}.",
        },
      ],
    },
    "graph-theory": {
      title: "Ký hiệu lý thuyết đồ thị trong LaTeX: đỉnh, cạnh, bậc và tô màu",
      intro: (
        <IntroP>
          Ký hiệu lý thuyết đồ thị trong LaTeX chủ yếu là chữ cái thông thường và các toán tử có
          sẵn. Một đồ thị là <Cmd>{"G = (V, E)"}</Cmd>, quan hệ kề là <Cmd>{"u \\sim v"}</Cmd>, bậc
          của một đỉnh là <Cmd>{"\\deg(v)"}</Cmd> (toán tử <Cmd>{"\\deg"}</Cmd> có sẵn), còn đồ thị
          đầy đủ và đồ thị hai phía đầy đủ là <Cmd>{"K_n"}</Cmd> và <Cmd>{"K_{m,n}"}</Cmd>. Các bất
          biến của đồ thị dùng chữ Hy Lạp: sắc số <Cmd>{"\\chi(G)"}</Cmd>, số clique{" "}
          <Cmd>{"\\omega(G)"}</Cmd>, số độc lập <Cmd>{"\\alpha(G)"}</Cmd>, và bậc lớn nhất, nhỏ
          nhất <Cmd>{"\\Delta(G)"}</Cmd> và <Cmd>{"\\delta(G)"}</Cmd>. Để vẽ chính đồ thị, hãy dùng
          TikZ. Bảng dưới đây liệt kê các ký hiệu lý thuyết đồ thị thông dụng nhất; tất cả đều có
          sẵn, và danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các ký hiệu lý thuyết đồ thị thông dụng nhất",
      use: {
        "G = (V, E)": "Đồ thị với tập đỉnh V và tập cạnh E",
        "u \\sim v": "u kề với v",
        "\\deg(v)": "Bậc của một đỉnh",
        "\\deg^{+}(v)": "Bán bậc ra (\\deg^{-} cho bán bậc vào)",
        "N(v)": "Lân cận của v",
        "K_n": "Đồ thị đầy đủ",
        "K_{m,n}": "Đồ thị hai phía đầy đủ",
        "\\chi(G)": "Sắc số",
        "\\omega(G)": "Số clique",
        "\\alpha(G)": "Số độc lập",
        "\\Delta(G)": "Bậc lớn nhất (\\delta(G) cho bậc nhỏ nhất)",
        "G \\cong H": "Hai đồ thị đẳng cấu",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu lý thuyết đồ thị trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết bậc của một đỉnh trong LaTeX?",
          answer:
            "Dùng toán tử có sẵn \\deg, lệnh này in deg thẳng đứng với khoảng cách đúng: $\\deg(v)$. Với đồ thị có hướng, \\deg^{+}(v) và \\deg^{-}(v) cho bán bậc ra và bán bậc vào, còn bổ đề bắt tay được viết là \\sum_{v \\in V} \\deg(v) = 2|E|.",
        },
        {
          question: "Làm sao để vẽ đồ thị trong LaTeX?",
          answer:
            "Nạp \\usepackage{tikz}, đặt các đỉnh bằng \\node[circle,draw] (a) at (0,0) {a}; và nối chúng bằng \\draw (a) -- (b);. Với đồ thị lớn hơn, thư viện graphs của TikZ và gói tkz-graph giúp cú pháp gọn hơn.",
        },
        {
          question: "Làm sao để viết sắc số trong LaTeX?",
          answer:
            "Sắc số là \\chi(G), với chữ Hy Lạp chi. Chỉ số sắc (sắc số cạnh) thường được viết là \\chi'(G), số clique là \\omega(G) và số độc lập là \\alpha(G). Tất cả đều có sẵn.",
        },
      ],
    },
    latin: {
      title: "Chữ cái Latinh trong LaTeX: chữ cái đặc biệt và dấu",
      intro: (
        <IntroP>
          Các chữ cái Latinh nằm ngoài A đến Z, như chữ ghép æ và œ, các chữ Bắc Âu ø và å, chữ ß
          của tiếng Đức và chữ ł của tiếng Ba Lan, mỗi chữ đều có một lệnh ngắn trong LaTeX:{" "}
          <Cmd>{"\\ae"}</Cmd>, <Cmd>{"\\oe"}</Cmd>, <Cmd>{"\\o"}</Cmd>, <Cmd>{"\\aa"}</Cmd>,{" "}
          <Cmd>{"\\ss"}</Cmd> và <Cmd>{"\\l"}</Cmd>, với các phiên bản chữ hoa như{" "}
          <Cmd>{"\\AE"}</Cmd> và <Cmd>{"\\O"}</Cmd>. Các chữ cái có dấu kết hợp một lệnh dấu với
          chữ cái gốc, ví dụ <Cmd>{"\\'e"}</Cmd> cho é và <Cmd>{"\\~n"}</Cmd> cho ñ. Tất cả đều có
          sẵn và hoạt động ở chế độ văn bản. Bảng dưới đây liệt kê các ký hiệu Latinh thông dụng
          nhất; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: chữ cái đặc biệt và dấu",
      use: {
        "\\ae": "Chữ ghép æ (\\AE cho Æ)",
        "\\oe": "Chữ ghép œ (\\OE cho Œ)",
        "\\o": "O gạch chéo ø (\\O cho Ø)",
        "\\aa": "A có vòng tròn å (\\AA cho Å)",
        "\\ss": "Chữ Eszett ß của tiếng Đức",
        "\\l": "Chữ ł của tiếng Ba Lan (\\L cho Ł)",
        "\\i": "Chữ i không chấm, làm gốc để thêm dấu",
        "\\'e": "Dấu sắc é",
        "\\\"o": "Dấu hai chấm (umlaut) ö",
        "\\~n": "Dấu ngã ñ",
        "\\c{c}": "Dấu móc dưới (cedilla) ç",
        "\\v{s}": "Dấu caron (háček) š",
      },
      faqHeading: "Câu hỏi thường gặp về chữ cái Latinh trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết các chữ Latinh đặc biệt như æ, ø và ß trong LaTeX?",
          answer:
            "Mỗi chữ đều có một lệnh chế độ văn bản có sẵn: \\ae và \\AE cho æ và Æ, \\oe và \\OE cho œ và Œ, \\o và \\O cho ø và Ø, \\aa và \\AA cho å và Å, \\ss cho ß, và \\l và \\L cho ł và Ł. Từ năm 2018, LaTeX cũng đọc UTF-8, nên bạn có thể gõ trực tiếp các chữ cái này.",
        },
        {
          question: "Làm sao để dùng các ký tự Latinh này trong chế độ toán?",
          answer:
            "Các lệnh này chỉ hoạt động ở chế độ văn bản, vì vậy hãy bọc chúng trong \\text{...} của amsmath, như trong $x_{\\text{\\ae}}$. Trong chế độ toán, các chữ cái không chấm có lệnh riêng là \\imath và \\jmath, dùng cho vectơ có dấu như \\hat{\\imath}.",
        },
        {
          question: "Tại sao chữ có dấu trong PDF của tôi không sao chép hay ngắt dòng đúng?",
          answer:
            "Với bảng mã phông OT1 mặc định, LaTeX ghép chữ có dấu từ hai phần. Thêm \\usepackage[T1]{fontenc} vào phần mở đầu để é, ö và ñ trở thành các glyph đơn, có thể ngắt âm tiết, tìm kiếm và sao chép đúng.",
        },
      ],
    },
    "linear-algebra": {
      title: "Ký hiệu đại số tuyến tính trong LaTeX: ma trận, vectơ, chuyển vị và chuẩn",
      intro: (
        <IntroP>
          Đại số tuyến tính trong LaTeX bắt đầu với các môi trường ma trận của amsmath:{" "}
          <Cmd>{"pmatrix"}</Cmd> cho ngoặc tròn, <Cmd>{"bmatrix"}</Cmd> cho ngoặc vuông và{" "}
          <Cmd>{"vmatrix"}</Cmd> cho định thức. Một vectơ là <Cmd>{"\\mathbf{v}"}</Cmd> hoặc{" "}
          <Cmd>{"\\vec{v}"}</Cmd>, chuyển vị là <Cmd>{"A^\\top"}</Cmd> (hoặc <Cmd>{"A^T"}</Cmd>),
          nghịch đảo là <Cmd>{"A^{-1}"}</Cmd>, chuyển vị liên hợp là <Cmd>{"A^\\dagger"}</Cmd> và
          chuẩn là <Cmd>{"\\|x\\|"}</Cmd>. Định thức <Cmd>{"\\det"}</Cmd> có sẵn, còn vết và hạng
          nên viết bằng <Cmd>{"\\operatorname{tr}"}</Cmd> và <Cmd>{"\\operatorname{rank}"}</Cmd>.
          Bảng dưới đây liệt kê các ký hiệu đại số tuyến tính thông dụng nhất cùng gói mà mỗi ký
          hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: ma trận, vectơ và phép toán",
      use: {
        "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}": "Ma trận trong ngoặc tròn",
        "\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}": "Ma trận trong ngoặc vuông",
        "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}": "Gạch đứng của định thức",
        "\\mathbf{v}": "Vectơ in đậm",
        "\\vec{v}": "Vectơ có mũi tên",
        "A^\\top": "Chuyển vị",
        "A^{-1}": "Nghịch đảo",
        "A^\\dagger": "Chuyển vị liên hợp",
        "\\det(A)": "Định thức",
        "\\operatorname{tr}(A)": "Vết",
        "\\|x\\|_2": "Chuẩn Euclid",
        "\\langle u, v \\rangle": "Tích vô hướng (tích trong)",
      },
      faqHeading: "Câu hỏi thường gặp về đại số tuyến tính trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ma trận trong LaTeX?",
          answer:
            "Nạp amsmath và dùng một môi trường ma trận trong chế độ toán, phân tách các cột bằng & và các hàng bằng \\\\: \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}. pmatrix cho ngoặc tròn, bmatrix ngoặc vuông, Bmatrix ngoặc nhọn, vmatrix gạch đứng đơn cho định thức và Vmatrix gạch đứng kép.",
        },
        {
          question: "Làm sao để viết ma trận chuyển vị trong LaTeX?",
          answer:
            "Viết A^\\top, lệnh này in một chữ T nhỏ, hoặc đơn giản là A^T, hoặc A^\\intercal của amssymb. Hãy chọn một dạng và dùng nhất quán; A^\\top phổ biến trong sách hiện nay vì không bị nhầm với biến T.",
        },
        {
          question: "Làm sao để viết vectơ trong LaTeX?",
          answer:
            "Dùng \\mathbf{v} cho vectơ in đậm hoặc \\vec{v} cho dấu mũi tên; \\boldsymbol{v} của amsmath cũng dùng được với chữ Hy Lạp. Vectơ cột là một ma trận chỉ có một cột: \\begin{pmatrix} x \\\\ y \\end{pmatrix}.",
        },
      ],
    },
    "machine-learning": {
      title: "Ký hiệu gradient trong LaTeX và các ký hiệu học máy khác",
      intro: (
        <IntroP>
          Ký hiệu gradient trong LaTeX là <Cmd>{"\\nabla"}</Cmd>, in ra &nabla; và không cần gói
          nào: viết <Cmd>{"\\nabla f"}</Cmd> cho gradient của <Cmd>{"f"}</Cmd>, hoặc{" "}
          <Cmd>{"\\nabla_\\theta \\mathcal{L}"}</Cmd> cho gradient của hàm mất mát theo các tham số.
          Đạo hàm riêng dùng <Cmd>{"\\partial"}</Cmd>, giá trị dự đoán là <Cmd>{"\\hat{y}"}</Cmd>,
          kỳ vọng là <Cmd>{"\\mathbb{E}"}</Cmd> và argmax là{" "}
          <Cmd>{"\\operatorname*{arg\\,max}"}</Cmd>. Bảng dưới đây liệt kê các lệnh thông dụng nhất
          để viết gradient trong LaTeX cùng gói mà mỗi lệnh cần; danh sách đầy đủ các ký hiệu học
          máy nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: gradient, hàm mất mát và tối ưu",
      use: {
        "\\nabla": "Ký hiệu gradient (nabla)",
        "\\nabla_\\theta \\mathcal{L}": "Gradient của hàm mất mát theo θ",
        "\\partial": "Đạo hàm riêng",
        "\\frac{\\partial \\mathcal{L}}{\\partial w}": "Đạo hàm riêng của hàm mất mát",
        "\\mathcal{L}": "Hàm mất mát",
        "\\theta": "Tham số của mô hình",
        "\\hat{y}": "Giá trị dự đoán, ước lượng",
        "\\mathbb{E}": "Kỳ vọng",
        "\\operatorname*{arg\\,max}_\\theta": "Argmax với chỉ số đặt bên dưới",
        "\\operatorname*{arg\\,min}_\\theta": "Argmin với chỉ số đặt bên dưới",
        "\\|w\\|_2": "Chuẩn L2 của trọng số",
        "\\odot": "Tích Hadamard (từng phần tử)",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu học máy trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu gradient trong LaTeX?",
          answer:
            "Ký hiệu gradient ∇ là \\nabla, có sẵn trong LaTeX và dùng trong chế độ toán: $\\nabla f$. Đặt biến lấy đạo hàm ở chỉ số dưới, như trong \\nabla_\\theta \\mathcal{L}(\\theta), và viết toán tử Laplace là \\nabla^2 f. Không cần gói nào.",
        },
        {
          question: "Làm sao để viết đạo hàm riêng trong LaTeX?",
          answer:
            "Dùng \\partial: \\frac{\\partial f}{\\partial x} cho đạo hàm cấp một và \\frac{\\partial^2 f}{\\partial x^2} cho đạo hàm cấp hai. Một thành phần của gradient cũng được viết theo cách đó, ví dụ \\frac{\\partial \\mathcal{L}}{\\partial w_i}.",
        },
        {
          question: "Làm sao để viết argmax và argmin trong LaTeX?",
          answer:
            "Với amsmath, viết \\operatorname*{arg\\,max}_\\theta f(\\theta); dấu sao đặt chỉ số xuống bên dưới trong công thức hiển thị. Nếu dùng thường xuyên, khai báo một lần trong phần mở đầu bằng \\DeclareMathOperator*{\\argmax}{arg\\,max} rồi viết \\argmax_\\theta. Lối tắt \\arg\\max_\\theta cũng dùng được, nhưng khi đó chỉ số chỉ nằm dưới max chứ không nằm dưới cả arg max.",
        },
        {
          question: "Làm sao để viết kỳ vọng và hàm mất mát trong LaTeX?",
          answer:
            "Kỳ vọng là chữ E kiểu blackboard bold \\mathbb{E}, cần \\usepackage{amssymb}, như trong \\mathbb{E}_{x \\sim p}[f(x)]. Hàm mất mát thường là chữ L viết tay, \\mathcal{L}, vốn có sẵn.",
        },
      ],
    },
    "modal-logic": {
      title: "Ký hiệu logic tình thái trong LaTeX: hộp, kim cương và ngữ nghĩa Kripke",
      intro: (
        <IntroP>
          Hai ký hiệu cơ bản của logic tình thái trong LaTeX là <Cmd>{"\\Box"}</Cmd> cho tính tất
          yếu (□) và <Cmd>{"\\Diamond"}</Cmd> cho tính khả năng (◇), cả hai đều của amssymb;{" "}
          <Cmd>{"\\Box p"}</Cmd> đọc là “tất yếu p” và <Cmd>{"\\Diamond p"}</Cmd> là “có thể p”.
          Ngữ nghĩa Kripke dùng <Cmd>{"\\models"}</Cmd> (có sẵn) hoặc <Cmd>{"\\Vdash"}</Cmd>, như
          trong <Cmd>{"\\mathcal{M}, w \\models p"}</Cmd>, với quan hệ khả tiếp cận{" "}
          <Cmd>{"wRv"}</Cmd>. Logic nhận thức viết tri thức là <Cmd>{"K_a p"}</Cmd>, còn logic thời
          gian bổ sung <Cmd>{"\\bigcirc p"}</Cmd> cho “tiếp theo” và{" "}
          <Cmd>{"p \\mathbin{\\mathcal{U}} q"}</Cmd> cho “cho đến khi”. Bảng dưới đây liệt kê các
          ký hiệu logic tình thái thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm
          ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: toán tử tình thái, nhận thức và thời gian",
      use: {
        "\\Box p": "Tất yếu p",
        "\\Diamond p": "Có thể p",
        "\\Box(p \\to q)": "Tính tất yếu của một phép kéo theo (tiên đề K)",
        "\\neg\\Box\\neg p": "Không tất yếu không p, tương đương \\Diamond p",
        "\\mathcal{M}, w \\models p": "p đúng tại thế giới w",
        "w \\Vdash p": "Cưỡng bức (forcing), thỏa mãn",
        "wRv": "Quan hệ khả tiếp cận",
        "K_a p": "Tác tử a biết p",
        "B_a p": "Tác tử a tin p",
        "C_G p": "Tri thức chung trong nhóm G",
        "\\bigcirc p": "Tiếp theo (logic thời gian)",
        "p \\mathbin{\\mathcal{U}} q": "Cho đến khi (logic thời gian)",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu logic tình thái trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu hộp và kim cương trong LaTeX?",
          answer:
            "Nạp \\usepackage{amssymb} và viết \\Box p cho tính tất yếu và \\Diamond p cho tính khả năng. Gói latexsym cũng cung cấp hai lệnh này. Lưu ý rằng lệnh có sẵn \\diamond là một toán tử hai ngôi nhỏ, không phải kim cương tình thái.",
        },
        {
          question: "Làm sao để viết ký hiệu thỏa mãn (double turnstile) trong LaTeX?",
          answer:
            "\\models có sẵn và in ra ⊨, như trong $\\mathcal{M}, w \\models \\varphi$. amssymb bổ sung \\vDash (⊨), \\Vdash (⊩) cho forcing và \\nvDash cho “không thỏa mãn”; \\vdash (⊢) cho tính suy diễn được thì có sẵn.",
        },
        {
          question: "Làm sao để viết “cho đến khi” và “tiếp theo” của logic thời gian trong LaTeX?",
          answer:
            "Dùng \\bigcirc p cho “tiếp theo”, và biến chữ U viết tay thành toán tử hai ngôi cho “cho đến khi”: p \\mathbin{\\mathcal{U}} q, cách này cho khoảng cách đúng. “Luôn luôn” và “cuối cùng” thường được viết là \\Box p và \\Diamond p, hoặc \\mathbf{G} p và \\mathbf{F} p.",
        },
      ],
    },
    "number-theory": {
      title: "Ký hiệu lý thuyết số trong LaTeX",
      intro: (
        <IntroP>
          Mô-đun và phép mod trong LaTeX có nhiều dạng: <Cmd>{"\\bmod"}</Cmd> cho số dư,{" "}
          <Cmd>{"\\pmod{n}"}</Cmd> sau một đồng dư thức, và <Cmd>{"\\lvert z \\rvert"}</Cmd> cho
          mô-đun (giá trị tuyệt đối) của một số. Bảng dưới đây liệt kê tám lệnh thông dụng nhất cùng
          gói mà mỗi lệnh cần; danh sách đầy đủ các ký hiệu lý thuyết số nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: chia hết và số học đồng dư",
      use: {
        "a \\bmod n": "Phép mod như phép toán hai ngôi",
        "a \\equiv b \\pmod{n}": "Đồng dư với (mod n)",
        "a \\equiv b \\mod{n}": "Đồng dư không có ngoặc",
        "\\lvert z \\rvert": "Mô-đun / giá trị tuyệt đối",
        "a \\mid b": "a chia hết b",
        "a \\nmid b": "a không chia hết b",
        "\\gcd(a, b)": "Ước chung lớn nhất",
        "\\operatorname{lcm}(a, b)": "Bội chung nhỏ nhất",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu lý thuyết số trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết mod (modulo) trong LaTeX?",
          answer:
            "Dùng \\bmod cho phép toán hai ngôi, như trong a \\bmod n, và \\pmod{n} sau một đồng dư thức: a \\equiv b \\pmod{n} tự thêm ngoặc và khoảng cách cho bạn. amsmath cũng cung cấp \\mod{n} (không ngoặc) và \\pod{n} (có ngoặc nhưng không có chữ mod).",
        },
        {
          question: "Làm sao để viết mô-đun (giá trị tuyệt đối) trong LaTeX?",
          answer:
            "Viết \\lvert z \\rvert với amsmath, hoặc \\left| z \\right| khi các gạch đứng cần cao theo nội dung. Nếu dùng thường xuyên, mathtools cho phép bạn khai báo \\DeclarePairedDelimiter{\\abs}{\\lvert}{\\rvert} rồi viết \\abs{z}.",
        },
        {
          question: "Làm sao để viết “chia hết” trong LaTeX?",
          answer:
            "Dùng \\mid, như trong a \\mid b, mà LaTeX giãn cách như một quan hệ; một dấu | đơn thuần trông quá chật. Phủ định \\nmid (a không chia hết b) cần \\usepackage{amssymb}.",
        },
      ],
    },
    operators: {
      title: "Toán tử trong LaTeX: cộng trong vòng tròn, nhân, chấm và toán tử lớn",
      intro: (
        <IntroP>
          Toán tử trong LaTeX chia thành hai nhóm. Toán tử hai ngôi nằm giữa hai số hạng với khoảng
          cách vừa phải: <Cmd>{"\\times"}</Cmd>, <Cmd>{"\\cdot"}</Cmd>, <Cmd>{"\\ast"}</Cmd>,{" "}
          <Cmd>{"\\circ"}</Cmd> và họ toán tử trong vòng tròn <Cmd>{"\\oplus"}</Cmd> (cộng trong
          vòng tròn, ⊕), <Cmd>{"\\otimes"}</Cmd> (⊗), <Cmd>{"\\odot"}</Cmd> (⊙) và{" "}
          <Cmd>{"\\ominus"}</Cmd>. Toán tử lớn nhận cận và to ra trong công thức hiển thị:{" "}
          <Cmd>{"\\sum"}</Cmd>, <Cmd>{"\\prod"}</Cmd>, <Cmd>{"\\bigoplus"}</Cmd>,{" "}
          <Cmd>{"\\bigotimes"}</Cmd> và <Cmd>{"\\bigcup"}</Cmd>. Tất cả đều có sẵn. Các toán tử có
          tên như <Cmd>{"\\max"}</Cmd>, <Cmd>{"\\sin"}</Cmd> và <Cmd>{"\\det"}</Cmd> đã được định
          nghĩa sẵn, và bạn có thể khai báo toán tử của riêng mình bằng{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> của amsmath. Bảng dưới đây liệt kê các toán tử LaTeX
          thông dụng nhất; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: toán tử hai ngôi và toán tử lớn",
      use: {
        "\\oplus": "Cộng trong vòng tròn: tổng trực tiếp, XOR",
        "\\otimes": "Nhân trong vòng tròn: tích tensor",
        "\\odot": "Chấm trong vòng tròn: tích Hadamard",
        "\\ominus": "Trừ trong vòng tròn",
        "\\oslash": "Gạch chéo trong vòng tròn",
        "\\times": "Tích có hướng, phép nhân",
        "\\cdot": "Dấu chấm giữa",
        "\\ast": "Toán tử dấu sao, tích chập",
        "\\circ": "Hợp thành",
        "\\star": "Toán tử ngôi sao",
        "\\bigoplus_{i=1}^{n} V_i": "Tổng trực tiếp theo một chỉ số",
        "\\bigotimes_{i=1}^{n} V_i": "Tích tensor theo một chỉ số",
      },
      faqHeading: "Câu hỏi thường gặp về toán tử trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết dấu cộng trong vòng tròn trong LaTeX?",
          answer:
            "Dùng \\oplus cho ⊕, dấu cộng trong vòng tròn dùng cho tổng trực tiếp và XOR. Đây là toán tử hai ngôi có sẵn: $A \\oplus B$. Với tổng trực tiếp của nhiều số hạng, dùng toán tử lớn \\bigoplus_{i=1}^{n} V_i.",
        },
        {
          question: "Làm sao để viết toán tử odot (chấm trong vòng tròn) trong LaTeX?",
          answer:
            "\\odot in ra ⊙ và được dùng cho tích Hadamard (từng phần tử), $A \\odot B$. Phiên bản lớn là \\bigodot. Cả hai đều có sẵn.",
        },
        {
          question: "Làm sao để định nghĩa một toán tử mới trong LaTeX?",
          answer:
            "Nạp amsmath và viết \\DeclareMathOperator{\\Tr}{Tr} trong phần mở đầu; khi đó \\Tr(A) in Tr thẳng đứng với khoảng cách của toán tử. Dùng \\DeclareMathOperator* khi cận cần nằm bên dưới, như với \\argmax. Để dùng một lần, \\operatorname{Tr} làm điều tương tự ngay trong công thức.",
        },
      ],
    },
    optimization: {
      title: "Ký hiệu tối ưu hóa trong LaTeX: argmax, argmin và ràng buộc",
      intro: (
        <IntroP>
          Ký hiệu tối ưu hóa trong LaTeX xoay quanh <Cmd>{"\\min"}</Cmd>, <Cmd>{"\\max"}</Cmd> và
          các phiên bản arg của chúng. <Cmd>{"\\min_{x}"}</Cmd> và <Cmd>{"\\max_{x}"}</Cmd> có sẵn
          và đặt biến bên dưới toán tử trong công thức hiển thị, nhưng không có{" "}
          <Cmd>{"\\argmax"}</Cmd> có sẵn: hãy viết <Cmd>{"\\operatorname*{arg\\,max}_x"}</Cmd> hoặc
          khai báo <Cmd>{"\\argmax"}</Cmd> một lần bằng <Cmd>{"\\DeclareMathOperator*"}</Cmd> của
          amsmath. Các ràng buộc đi sau <Cmd>{"\\text{s.t.}"}</Cmd> (“subject to”, tức “với ràng
          buộc”), hàm Lagrange là <Cmd>{"\\mathcal{L}(x, \\lambda)"}</Cmd>, nghiệm tối ưu là{" "}
          <Cmd>{"x^*"}</Cmd>, và ràng buộc nửa xác định dùng <Cmd>{"\\succeq 0"}</Cmd>. Bảng dưới
          đây liệt kê các ký hiệu tối ưu hóa thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách
          đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: hàm mục tiêu, ràng buộc và điều kiện tối ưu",
      use: {
        "\\operatorname*{arg\\,max}_{x} f(x)": "Argmax với biến đặt bên dưới",
        "\\operatorname*{arg\\,min}_{x} f(x)": "Argmin với biến đặt bên dưới",
        "\\min_{x \\in \\mathcal{X}} f(x)": "Cực tiểu hóa trên một tập",
        "\\max_{x} f(x)": "Cực đại hóa",
        "\\text{s.t.}": "Với ràng buộc (subject to)",
        "g_i(x) \\leq 0": "Ràng buộc bất đẳng thức",
        "h_j(x) = 0": "Ràng buộc đẳng thức",
        "\\mathcal{L}(x, \\lambda)": "Hàm Lagrange",
        "\\nabla f(x^*) = 0": "Điều kiện tối ưu bậc nhất",
        "\\nabla^2 f(x)": "Ma trận Hessian",
        "X \\succeq 0": "Nửa xác định dương",
        "\\lambda_i \\geq 0": "Biến đối ngẫu (nhân tử)",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu tối ưu hóa trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết argmax trong LaTeX?",
          answer:
            "Viết \\operatorname*{arg\\,max}_{x} f(x) với amsmath; dấu sao đặt x bên dưới toán tử trong công thức hiển thị. Để dùng lại, thêm \\DeclareMathOperator*{\\argmax}{arg\\,max} vào phần mở đầu và viết \\argmax_x f(x). \\arg\\max cũng in ra arg max, nhưng chỉ số dưới của nó chỉ gắn với max.",
        },
        {
          question: "Làm sao để viết bài toán tối ưu có ràng buộc trong LaTeX?",
          answer:
            "Đặt hàm mục tiêu và các ràng buộc trong môi trường aligned: \\min_{x} \\quad & f(x) \\\\ \\text{s.t.} \\quad & g(x) \\leq 0. Gói optidef cung cấp các môi trường mini và maxi, tự căn chỉnh hàm mục tiêu và ràng buộc cho bạn.",
        },
        {
          question: "Làm sao để viết “subject to” (với ràng buộc) trong LaTeX?",
          answer:
            "Dùng \\text{s.t.} hoặc \\text{subject to} của amsmath (hay \\text{với ràng buộc} nếu viết tiếng Việt) để chữ hiển thị thẳng đứng với khoảng cách bình thường. Nếu gõ trực tiếp s.t. trong chế độ toán, bạn sẽ được hai biến s và t in nghiêng.",
        },
      ],
    },
    order: {
      title: "Nhỏ hơn, lớn hơn và nhỏ hơn hoặc bằng trong LaTeX",
      intro: (
        <IntroP>
          Trong LaTeX, dấu nhỏ hơn và lớn hơn được gõ trực tiếp trong chế độ toán là{" "}
          <Cmd>{"<"}</Cmd> và <Cmd>{">"}</Cmd>. Nhỏ hơn hoặc bằng trong LaTeX là{" "}
          <Cmd>{"\\leq"}</Cmd> (hoặc tên khác <Cmd>{"\\le"}</Cmd>), lớn hơn hoặc bằng là{" "}
          <Cmd>{"\\geq"}</Cmd> (<Cmd>{"\\ge"}</Cmd>) và khác là <Cmd>{"\\neq"}</Cmd>; cả ba đều có
          sẵn, nên <Cmd>{"$a \\leq b$"}</Cmd> dùng được trong mọi tài liệu. Rất nhỏ hơn là{" "}
          <Cmd>{"\\ll"}</Cmd>, còn các dạng nghiêng, xấp xỉ và phủ định đến từ amssymb. Bảng dưới
          đây liệt kê các ký hiệu bất đẳng thức thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh
          sách đầy đủ các ký hiệu thứ tự nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: bất đẳng thức và thứ tự",
      use: {
        "<": "Nhỏ hơn (gõ trực tiếp)",
        ">": "Lớn hơn (gõ trực tiếp)",
        "\\leq": "Nhỏ hơn hoặc bằng (tên khác \\le)",
        "\\geq": "Lớn hơn hoặc bằng (tên khác \\ge)",
        "\\neq": "Khác (tên khác \\ne)",
        "\\ll": "Rất nhỏ hơn",
        "\\gg": "Rất lớn hơn",
        "\\leqslant": "Nhỏ hơn hoặc bằng, dạng nghiêng",
        "\\lesssim": "Nhỏ hơn hoặc xấp xỉ bằng",
        "\\not<": "Không nhỏ hơn",
        "\\nleq": "Không nhỏ hơn hoặc bằng",
        "\\prec": "Đứng trước (thứ tự bộ phận); \\succ cho “đứng sau”",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu bất đẳng thức trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết nhỏ hơn hoặc bằng trong LaTeX?",
          answer:
            "Viết \\leq, hoặc tên ngắn hơn \\le, trong chế độ toán: $a \\leq b$. Lớn hơn hoặc bằng là \\geq hoặc \\ge. Cả hai đều có sẵn. Với kiểu nghiêng phổ biến trong sách châu Âu, nạp amssymb và dùng \\leqslant và \\geqslant.",
        },
        {
          question: "Làm sao để viết ký hiệu nhỏ hơn trong LaTeX?",
          answer:
            "Trong chế độ toán, gõ trực tiếp <: $a < b$. Trong văn bản thường, ngoài chế độ toán, bảng mã phông OT1 mặc định in ra ¡ thay cho <, vì vậy hãy bọc nó thành $<$, dùng \\textless (và \\textgreater cho >) hoặc nạp \\usepackage[T1]{fontenc}.",
        },
        {
          question: "Làm sao để viết “không nhỏ hơn” hoặc “khác” trong LaTeX?",
          answer:
            "Khác là \\neq hoặc \\ne. Với các quan hệ khác, đặt \\not trước ký hiệu, như \\not<, hoặc nạp amssymb để dùng các phủ định riêng \\nless, \\ngtr, \\nleq và \\ngeq, trông gọn hơn một gạch chéo chồng lên.",
        },
        {
          question: "\\leq và \\le trong LaTeX khác nhau thế nào?",
          answer:
            "Không khác gì: \\le là tên khác của \\leq và cả hai đều in ra ≤, cũng như \\ge là tên khác của \\geq và \\ne là tên khác của \\neq. Dùng cái nào bạn thích, miễn là nhất quán.",
        },
      ],
    },
    relations: {
      title: "Ký hiệu quan hệ trong LaTeX: khác, xấp xỉ bằng và nhỏ hơn",
      intro: (
        <IntroP>
          Ký hiệu quan hệ trong LaTeX so sánh hai biểu thức, và những ký hiệu thông dụng đều có sẵn.
          Khác trong LaTeX là <Cmd>{"\\neq"}</Cmd> (≠), xấp xỉ bằng là <Cmd>{"\\approx"}</Cmd> (≈),
          nhỏ hơn và lớn hơn được gõ là <Cmd>{"<"}</Cmd> và <Cmd>{">"}</Cmd>, và nhỏ hơn hoặc bằng
          là <Cmd>{"\\leq"}</Cmd> (≤). Tương đương là <Cmd>{"\\equiv"}</Cmd>, đồng dạng là{" "}
          <Cmd>{"\\sim"}</Cmd>, tương đẳng là <Cmd>{"\\cong"}</Cmd> và tỉ lệ với là{" "}
          <Cmd>{"\\propto"}</Cmd>. Bạn có thể phủ định bất kỳ quan hệ nào bằng cách đặt{" "}
          <Cmd>{"\\not"}</Cmd> phía trước, hoặc nạp amssymb để dùng các dạng riêng như{" "}
          <Cmd>{"\\nleq"}</Cmd> và dạng nghiêng như <Cmd>{"\\leqslant"}</Cmd>. Bảng dưới đây liệt
          kê các quan hệ thông dụng nhất cùng gói mà mỗi quan hệ cần; danh sách đầy đủ nằm ở phía
          dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các ký hiệu quan hệ thông dụng nhất",
      use: {
        "\\neq": "Khác (tên khác \\ne)",
        "\\approx": "Xấp xỉ bằng",
        "<": "Nhỏ hơn",
        ">": "Lớn hơn",
        "\\leq": "Nhỏ hơn hoặc bằng",
        "\\geq": "Lớn hơn hoặc bằng",
        "\\equiv": "Tương đương, đồng nhất, đồng dư modulo n",
        "\\sim": "Đồng dạng, “có phân phối”",
        "\\cong": "Tương đẳng, đẳng cấu",
        "\\propto": "Tỉ lệ với",
        "\\ll": "Rất nhỏ hơn (\\gg cho rất lớn hơn)",
        "\\leqslant": "Nhỏ hơn hoặc bằng, dạng nghiêng",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu quan hệ trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết “khác” trong LaTeX?",
          answer:
            "Dùng \\neq (hoặc tên khác \\ne) trong chế độ toán: $a \\neq b$ in ra a ≠ b. Không cần gói nào. Với các quan hệ phủ định khác, đặt \\not phía trước, như \\not\\equiv, hoặc dùng các phiên bản riêng của amssymb như \\nleq và \\ncong.",
        },
        {
          question: "Làm sao để viết “xấp xỉ bằng” trong LaTeX?",
          answer:
            "\\approx in ra ≈ và là ký hiệu chuẩn cho xấp xỉ bằng: $\\pi \\approx 3.14$. Các ký hiệu gần gũi là \\simeq (≃), \\cong (≅), \\sim (∼) và \\doteq (≐), tất cả đều có sẵn, cùng \\approxeq (≊) của amssymb.",
        },
        {
          question: "Làm sao để viết “nhỏ hơn” trong LaTeX?",
          answer:
            "Trong chế độ toán, gõ trực tiếp < và >: $a < b$. Trong văn bản thường, ngoài chế độ toán, dùng \\textless và \\textgreater hoặc bọc dấu trong $...$, vì với bảng mã phông OT1 cũ, một dấu < đơn thuần có thể bị in thành dấu chấm than ngược.",
        },
      ],
    },
    "special-functions": {
      title: "Hàm đặc biệt trong LaTeX: gamma, beta, zeta, erf và Bessel",
      intro: (
        <IntroP>
          Hàm đặc biệt trong LaTeX được viết bằng chữ Hy Lạp hoặc tên thẳng đứng. Hàm gamma là{" "}
          <Cmd>{"\\Gamma(z)"}</Cmd>, hàm zeta Riemann là <Cmd>{"\\zeta(s)"}</Cmd>, hàm digamma là{" "}
          <Cmd>{"\\psi(x)"}</Cmd> và hàm delta Dirac là <Cmd>{"\\delta(x)"}</Cmd>. Các hàm mang tên
          bằng chữ Latinh phải viết thẳng đứng: không có <Cmd>{"\\erf"}</Cmd> có sẵn, vì vậy hãy
          viết <Cmd>{"\\operatorname{erf}(x)"}</Cmd> hoặc khai báo một lần bằng{" "}
          <Cmd>{"\\DeclareMathOperator"}</Cmd> của amsmath. Hàm Bessel và đa thức trực giao là các
          chữ cái có chỉ số, như <Cmd>{"J_n(x)"}</Cmd> và <Cmd>{"P_n(x)"}</Cmd>, còn hàm siêu bội
          là <Cmd>{"{}_2F_1(a, b; c; z)"}</Cmd>. Bảng dưới đây liệt kê các hàm đặc biệt thông dụng
          nhất cùng gói mà mỗi hàm cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các hàm đặc biệt thông dụng nhất",
      use: {
        "\\Gamma(z)": "Hàm gamma",
        "\\mathrm{B}(x, y)": "Hàm beta (chữ B hoa thẳng đứng)",
        "\\zeta(s)": "Hàm zeta Riemann",
        "\\operatorname{erf}(x)": "Hàm sai số",
        "\\operatorname{erfc}(x)": "Hàm sai số bù",
        "J_n(x)": "Hàm Bessel loại một",
        "Y_n(x)": "Hàm Bessel loại hai",
        "P_n(x)": "Đa thức Legendre",
        "H_n(x)": "Đa thức Hermite",
        "{}_2F_1(a, b; c; z)": "Hàm siêu bội Gauss",
        "\\psi(x)": "Hàm digamma",
        "\\delta(x)": "Hàm delta Dirac",
      },
      faqHeading: "Câu hỏi thường gặp về hàm đặc biệt trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết hàm gamma trong LaTeX?",
          answer:
            "Dùng chữ Hy Lạp hoa: $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$. Không cần gói nào. Hàm beta thường được viết bằng chữ B thẳng đứng, \\mathrm{B}(x, y), để không bị nhầm với một biến.",
        },
        {
          question: "Làm sao để viết hàm sai số erf trong LaTeX?",
          answer:
            "LaTeX không có lệnh \\erf. Dùng \\operatorname{erf}(x) của amsmath, hoặc thêm \\DeclareMathOperator{\\erf}{erf} vào phần mở đầu và viết \\erf(x). Như vậy erf hiển thị thẳng đứng với khoảng cách của toán tử, khác với erf gõ trực tiếp, vốn in ra ba biến in nghiêng.",
        },
        {
          question: "Làm sao để viết hàm siêu bội trong LaTeX?",
          answer:
            "Dùng một nhóm rỗng để đặt chỉ số dưới ở bên trái: {}_2F_1(a, b; c; z). Gói mathtools cũng cung cấp \\prescript{}{2}{F}_{1} cho chỉ số đứng trước, và dạng tổng quát {}_pF_q theo cùng một mẫu.",
        },
      ],
    },
    summation: {
      title: "Tổng trong LaTeX: ký hiệu sigma, tích và cận",
      intro: (
        <IntroP>
          Tổng trong LaTeX được viết bằng <Cmd>{"\\sum"}</Cmd>, lệnh này in chữ sigma hoa (Σ) như
          một toán tử lớn: <Cmd>{"\\sum_{i=1}^{n} a_i"}</Cmd> đặt chỉ số bên dưới và cận trên ở phía
          trên. Ký hiệu tích hoạt động tương tự với <Cmd>{"\\prod_{i=1}^{n}"}</Cmd>. Trong công thức
          hiển thị, các cận nằm trên và dưới dấu; trong công thức cùng dòng, chúng chuyển sang bên
          cạnh, trừ khi bạn thêm <Cmd>{"\\limits"}</Cmd> hoặc <Cmd>{"\\displaystyle"}</Cmd>. Điều
          kiện nhiều dòng dưới dấu tổng dùng <Cmd>{"\\substack"}</Cmd> của amsmath, và các toán tử
          tập hợp lớn <Cmd>{"\\bigcup"}</Cmd> và <Cmd>{"\\bigcap"}</Cmd> tuân theo cùng quy tắc.
          Bảng dưới đây liệt kê các ký hiệu tổng thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh
          sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: tổng, tích và cận",
      use: {
        "\\sum_{i=1}^{n} a_i": "Tổng (ký hiệu sigma)",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2}": "Chuỗi vô hạn",
        "\\prod_{i=1}^{n} x_i": "Tích",
        "\\coprod": "Đối tích",
        "\\sum\\limits_{i=1}^{n}": "Cận trên và dưới trong công thức cùng dòng",
        "\\displaystyle\\sum_{i=1}^{n}": "Tổng cỡ hiển thị trong công thức cùng dòng",
        "\\sum_{i=1}^{n} \\sum_{j=1}^{m} a_{ij}": "Tổng kép",
        "\\sum_{\\substack{i < j \\\\ i \\neq k}}": "Điều kiện trên nhiều dòng",
        "\\bigcup_{i \\in I} A_i": "Hợp theo một chỉ số",
        "\\bigcap_{i=1}^{n} A_i": "Giao theo một chỉ số",
        "\\sum_{k=0}^{n} \\binom{n}{k}": "Tổng các hệ số nhị thức",
      },
      faqHeading: "Câu hỏi thường gặp về tổng trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết tổng trong LaTeX?",
          answer:
            "Dùng \\sum với chỉ số dưới và chỉ số trên trong chế độ toán: $\\sum_{i=1}^{n} a_i$. Đặt các cận dài hơn một ký tự trong ngoặc nhọn. Trong phương trình hiển thị (\\[...\\]), các cận nằm trên và dưới chữ sigma; trong dòng, chúng nằm bên cạnh.",
        },
        {
          question: "Làm sao để đặt cận trên và dưới dấu tổng trong công thức cùng dòng?",
          answer:
            "Thêm \\limits sau toán tử, \\sum\\limits_{i=1}^{n}, hoặc cho cả tổng cỡ hiển thị bằng \\displaystyle\\sum_{i=1}^{n}. Hãy dùng tiết chế, vì cách này làm tăng khoảng cách dòng của đoạn văn.",
        },
        {
          question: "Làm sao để viết ký hiệu tích trong LaTeX?",
          answer:
            "\\prod in ra ký hiệu tích ∏ và nhận cận giống như \\sum: $\\prod_{i=1}^{n} x_i$. Đừng dùng \\Pi, vốn là chữ cái Hy Lạp: nó không to ra trong công thức hiển thị và không đặt cận đúng chỗ.",
        },
      ],
    },
    tensors: {
      title: "Ký hiệu tensor trong LaTeX: chỉ số, quy ước tổng Einstein và gói tensor",
      intro: (
        <IntroP>
          Ký hiệu tensor trong LaTeX được xây dựng từ chỉ số trên và chỉ số dưới:{" "}
          <Cmd>{"T^{ij}_{kl}"}</Cmd> cho tensor có hai chỉ số trên và hai chỉ số dưới,{" "}
          <Cmd>{"g_{\\mu\\nu}"}</Cmd> cho metric và <Cmd>{"\\delta^i_j"}</Cmd> cho delta Kronecker.
          Khi thứ tự của các chỉ số hỗn hợp quan trọng, hãy so le chúng bằng một nhóm rỗng,{" "}
          <Cmd>{"T^{i}{}_{j}"}</Cmd>, hoặc nạp gói tensor và viết{" "}
          <Cmd>{"\\tensor{T}{^i_j}"}</Cmd>. Ký hiệu Levi-Civita là <Cmd>{"\\epsilon_{ijk}"}</Cmd>,
          tích tensor là <Cmd>{"\\otimes"}</Cmd>, và quy ước tổng Einstein chỉ đơn giản là lặp lại
          một chỉ số, <Cmd>{"A^i B_i"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu tensor thông dụng
          nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: chỉ số và phép toán tensor",
      use: {
        "T^{ij}_{kl}": "Tensor có chỉ số trên và chỉ số dưới",
        "T^{i}{}_{j}": "Chỉ số so le (thứ tự quan trọng)",
        "\\tensor{T}{^i_j^k}": "Chỉ số so le một cách đơn giản",
        "g_{\\mu\\nu}": "Tensor metric",
        "\\delta^i_j": "Delta Kronecker",
        "\\epsilon_{ijk}": "Ký hiệu Levi-Civita",
        "A^i B_i": "Quy ước tổng Einstein (chỉ số lặp)",
        "A \\otimes B": "Tích tensor",
        "\\partial_\\mu": "Đạo hàm riêng theo một tọa độ",
        "\\nabla_\\mu T^{\\nu}": "Đạo hàm hiệp biến",
        "T_{(ij)}": "Đối xứng hóa",
        "T_{[ij]}": "Phản đối xứng hóa",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu tensor trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết tensor có chỉ số trên và dưới trong LaTeX?",
          answer:
            "Kết hợp chỉ số trên và chỉ số dưới: $T^{ij}_{kl}$. Nếu thứ tự ngang của các chỉ số quan trọng, chèn một nhóm rỗng để chúng không chồng lên nhau: T^{i}{}_{j} đặt j sau i. Gói tensor tự động hóa việc này với \\tensor{T}{^i_j} và T\\indices{^i_j}.",
        },
        {
          question: "Làm sao để viết delta Kronecker và ký hiệu Levi-Civita trong LaTeX?",
          answer:
            "Delta Kronecker là \\delta_{ij} hoặc \\delta^i_j, còn ký hiệu Levi-Civita là \\epsilon_{ijk} hoặc \\varepsilon_{ijk}, tùy dạng epsilon mà lĩnh vực của bạn dùng. Cả hai đều là chữ Hy Lạp có sẵn kèm chỉ số.",
        },
        {
          question: "Làm sao để viết quy ước tổng Einstein trong LaTeX?",
          answer:
            "Không có lệnh đặc biệt nào: lặp lại một chỉ số ở trên và ở dưới đã ngầm hiểu là lấy tổng, nên A^i B_i nghĩa là \\sum_i A^i B_i. Chỉ viết \\sum tường minh khi bạn muốn thể hiện nó, và dùng chỉ số Hy Lạp như \\mu và \\nu cho các thành phần không-thời gian.",
        },
      ],
    },
    topology: {
      title: "Ký hiệu tô pô trong LaTeX: bao đóng, biên, đồng phôi và aleph",
      intro: (
        <IntroP>
          Ký hiệu tô pô trong LaTeX phần lớn đều có sẵn. Bao đóng của một tập là{" "}
          <Cmd>{"\\overline{A}"}</Cmd>, biên của nó là <Cmd>{"\\partial A"}</Cmd> và phần trong là{" "}
          <Cmd>{"A^\\circ"}</Cmd> hoặc <Cmd>{"\\operatorname{int} A"}</Cmd>. Quan hệ đồng phôi
          thường được viết là <Cmd>{"\\cong"}</Cmd> (≅), tương đương đồng luân là{" "}
          <Cmd>{"\\simeq"}</Cmd>, nhóm cơ bản là <Cmd>{"\\pi_1(X)"}</Cmd> và đồng điều là{" "}
          <Cmd>{"H_n(X)"}</Cmd>. Ký hiệu tập hợp vẫn giữ nguyên: thuộc là <Cmd>{"\\in"}</Cmd> và tập
          con hoặc bằng là <Cmd>{"\\subseteq"}</Cmd>. Với bản số, <Cmd>{"\\aleph_0"}</Cmd> có sẵn
          còn <Cmd>{"\\beth"}</Cmd> đến từ amssymb. Bảng dưới đây liệt kê các ký hiệu tô pô thông
          dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: các ký hiệu tô pô thông dụng nhất",
      use: {
        "\\overline{A}": "Bao đóng",
        "\\partial A": "Biên",
        "A^\\circ": "Phần trong (cũng là \\operatorname{int} A)",
        "X \\cong Y": "Đồng phôi",
        "X \\simeq Y": "Tương đương đồng luân",
        "\\pi_1(X, x_0)": "Nhóm cơ bản",
        "H_n(X)": "Nhóm đồng điều thứ n",
        "\\mathcal{T}": "Tô pô trên một tập",
        "x \\in U \\subseteq X": "Thuộc, tập con hoặc bằng",
        "S^n": "Mặt cầu n chiều",
        "\\aleph_0": "Aleph không (bản số đếm được)",
        "\\beth_1": "Số beth",
      },
      faqHeading: "Câu hỏi thường gặp về ký hiệu tô pô trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết ký hiệu đồng phôi trong LaTeX?",
          answer:
            "Hầu hết sách dùng \\cong (≅): $X \\cong Y$. Một số tác giả dùng \\approx (≈) hoặc \\simeq (≃), dù \\simeq thường chỉ tương đương đồng luân. Cả ba đều có sẵn; hãy nêu quy ước của bạn một lần nếu có thể gây nhầm lẫn.",
        },
        {
          question: "Làm sao để viết ký hiệu beth trong LaTeX?",
          answer:
            "\\beth in ra ℶ và cần \\usepackage{amssymb}, gói này cũng cung cấp \\gimel và \\daleth. \\aleph (ℵ) có sẵn. Bản số mang chỉ số dưới như thường lệ: \\aleph_0, \\beth_1, và \\mathfrak{c} (amssymb) cho lực lượng continuum.",
        },
        {
          question: "Làm sao để viết bao đóng và phần trong của một tập trong LaTeX?",
          answer:
            "Bao đóng là \\overline{A}, hoặc \\bar{A} cho một chữ cái, hoặc \\operatorname{cl}(A). Phần trong là A^\\circ hoặc \\operatorname{int}(A) với amsmath, và biên là \\partial A. Dùng \\overline thay cho \\bar với mọi thứ dài hơn một chữ cái.",
        },
      ],
    },
    trigonometry: {
      title: "Lượng giác trong LaTeX: sin, cos, tan và hàm lượng giác ngược",
      intro: (
        <IntroP>
          Các hàm lượng giác trong LaTeX có lệnh riêng: <Cmd>{"\\sin"}</Cmd>, <Cmd>{"\\cos"}</Cmd>,{" "}
          <Cmd>{"\\tan"}</Cmd>, <Cmd>{"\\cot"}</Cmd>, <Cmd>{"\\sec"}</Cmd> và <Cmd>{"\\csc"}</Cmd>,
          cùng các hàm ngược <Cmd>{"\\arcsin"}</Cmd>, <Cmd>{"\\arccos"}</Cmd> và{" "}
          <Cmd>{"\\arctan"}</Cmd> và các hàm hyperbolic <Cmd>{"\\sinh"}</Cmd>,{" "}
          <Cmd>{"\\cosh"}</Cmd> và <Cmd>{"\\tanh"}</Cmd>. Luôn dùng lệnh thay vì gõ sin, vì lệnh
          đặt tên hàm thẳng đứng với khoảng cách đúng, còn sin gõ trực tiếp sẽ in ra ba biến in
          nghiêng. Lũy thừa đặt ngay sau tên hàm, <Cmd>{"\\sin^2 \\theta"}</Cmd>, và độ là một vòng
          tròn ở chỉ số trên, <Cmd>{"30^\\circ"}</Cmd>. Bảng dưới đây liệt kê các ký hiệu lượng giác
          thông dụng nhất cùng gói mà mỗi ký hiệu cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: hàm và đẳng thức lượng giác",
      use: {
        "\\sin \\theta": "Sin",
        "\\cos \\theta": "Cos",
        "\\tan \\theta": "Tan",
        "\\sec \\theta": "Sec (\\csc là cosec, \\cot là cot)",
        "\\arcsin x": "Arcsin",
        "\\arccos x": "Arccos",
        "\\arctan x": "Arctan",
        "\\sin^{-1} x": "Arcsin, ký hiệu lũy thừa",
        "\\sin^2 \\theta + \\cos^2 \\theta = 1": "Đẳng thức Pythagore",
        "\\sinh x": "Sin hyperbolic (\\cosh, \\tanh)",
        "30^\\circ": "Độ",
        "\\operatorname{arcsec} x": "Arcsec (không có sẵn)",
      },
      faqHeading: "Câu hỏi thường gặp về lượng giác trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết sin, cos và tan trong LaTeX?",
          answer:
            "Dùng các lệnh có sẵn trong chế độ toán: $\\sin x$, $\\cos x$, $\\tan x$, và \\cot, \\sec và \\csc cho các hàm nghịch đảo. Gõ sin không có gạch chéo ngược sẽ in ra tích in nghiêng s·i·n, và đó là lý do các lệnh này tồn tại.",
        },
        {
          question: "Làm sao để viết hàm lượng giác ngược như arcsin trong LaTeX?",
          answer:
            "\\arcsin, \\arccos và \\arctan có sẵn, cũng như \\sinh, \\cosh, \\tanh và \\coth. \\arcsec, \\arccsc, \\arccot, \\sech và \\csch thì không: hãy viết \\operatorname{arcsec} x, hoặc thêm \\DeclareMathOperator{\\arcsec}{arcsec} vào phần mở đầu với amsmath. Ký hiệu lũy thừa \\sin^{-1} x cũng dùng được.",
        },
        {
          question: "Làm sao để viết sin bình phương và độ trong LaTeX?",
          answer:
            "Đặt số mũ ngay sau lệnh: \\sin^2 \\theta. Với độ, dùng một vòng tròn ở chỉ số trên, $30^\\circ$, hoặc \\ang{30} của siunitx để định dạng nhất quán trong văn bản và bảng.",
        },
      ],
    },
    units: {
      title: "Đơn vị trong LaTeX: siunitx, ký hiệu độ và đơn vị SI",
      intro: (
        <IntroP>
          Đơn vị trong LaTeX dễ nhất khi dùng gói siunitx:{" "}
          <Cmd>{"\\qty{9.81}{\\metre\\per\\second\\squared}"}</Cmd> trình bày một số và đơn vị của
          nó với chữ thẳng đứng và khoảng cách đúng, <Cmd>{"\\unit{\\kilo\\gram}"}</Cmd> in một đơn
          vị riêng lẻ và <Cmd>{"\\num{6.022e23}"}</Cmd> định dạng một số. Không có siunitx, hãy
          đặt đơn vị thẳng đứng thủ công, như trong <Cmd>{"9.81\\,\\mathrm{m/s^2}"}</Cmd>, với một
          khoảng hẹp <Cmd>{"\\,"}</Cmd> giữa số và đơn vị. Ký hiệu độ là <Cmd>{"^\\circ"}</Cmd>{" "}
          trong chế độ toán hoặc <Cmd>{"\\qty{20}{\\degreeCelsius}"}</Cmd> với siunitx, còn
          ångström là <Cmd>{"\\AA"}</Cmd>. Bảng dưới đây liệt kê các lệnh đơn vị thông dụng nhất
          cùng gói mà mỗi lệnh cần; danh sách đầy đủ nằm ở phía dưới.
        </IntroP>
      ),
      quickRefHeading: "Tra cứu nhanh: đơn vị có và không có siunitx",
      use: {
        "\\qty{9.81}{\\metre\\per\\second\\squared}": "Đại lượng kèm đơn vị",
        "\\unit{\\kilo\\gram}": "Đơn vị riêng lẻ",
        "\\num{6.022e23}": "Số được định dạng",
        "\\qty{20}{\\degreeCelsius}": "Độ Celsius",
        "\\ang{45}": "Góc tính bằng độ",
        "\\qty{10}{\\micro\\metre}": "Tiền tố SI (micromet)",
        "\\qty{5}{\\kilo\\ohm}": "Kiloohm",
        "9.81\\,\\mathrm{m/s^2}": "Đơn vị viết tay, không cần gói",
        "^\\circ": "Ký hiệu độ trong chế độ toán",
        "\\AA": "Ångström (chế độ văn bản)",
        "\\textdegree": "Ký hiệu độ trong chế độ văn bản",
        "\\hbar": "Hằng số Planck rút gọn",
      },
      faqHeading: "Câu hỏi thường gặp về đơn vị trong LaTeX",
      faq: [
        {
          question: "Làm sao để viết đơn vị trong LaTeX?",
          answer:
            "Nạp \\usepackage{siunitx} và viết \\qty{3.0}{\\metre\\per\\second} cho một giá trị kèm đơn vị, \\unit{\\kilo\\gram} cho một đơn vị riêng lẻ và \\num{1.5e-3} cho một số. siunitx phiên bản 3 dùng \\qty và \\unit; các lệnh cũ \\SI và \\si vẫn hoạt động. Không có gói này, hãy viết 3.0\\,\\mathrm{m/s}.",
        },
        {
          question: "Làm sao để viết ký hiệu độ trong LaTeX?",
          answer:
            "Trong chế độ toán, dùng một vòng tròn ở chỉ số trên: $90^\\circ$, hoặc $20^\\circ\\mathrm{C}$ cho nhiệt độ. Trong văn bản, \\textdegree in ra °. Với siunitx, \\ang{90} và \\qty{20}{\\degreeCelsius} cho khoảng cách nhất quán ở mọi nơi.",
        },
        {
          question: "siunitx có xung đột với gói physics không?",
          answer:
            "Cả hai gói đều định nghĩa lệnh \\qty, nên nạp chúng cùng nhau sẽ gây xung đột. Nếu cần physics, hãy dùng dạng cũ của siunitx \\SI{9.81}{\\metre\\per\\second\\squared} cho đại lượng có đơn vị, vốn vẫn được siunitx phiên bản 3 hỗ trợ.",
        },
      ],
    },
    accents: {
      title: "Dấu và chữ cái đặc biệt trong LaTeX",
      intro: (
        <>
          <IntroP>
            Trong văn bản, LaTeX tạo chữ có dấu từ một lệnh và chữ cái gốc: dấu sắc{" "}
            <Cmd>{"\\'e"}</Cmd> (é), dấu huyền <Cmd>{"\\`e"}</Cmd> (è), dấu mũ <Cmd>{"\\^e"}</Cmd>{" "}
            (ê), dấu hai chấm (umlaut) <Cmd>{"\\\"o"}</Cmd> (ö), dấu ngã <Cmd>{"\\~n"}</Cmd> (ñ),
            dấu móc dưới (cedilla) <Cmd>{"\\c{c}"}</Cmd> (ç), dấu caron <Cmd>{"\\v{s}"}</Cmd> (š),
            dấu trăng (breve) <Cmd>{"\\u{a}"}</Cmd> (ă), dấu sắc kép tiếng Hungary{" "}
            <Cmd>{"\\H{o}"}</Cmd> (ő), dấu chấm trên <Cmd>{"\\.z"}</Cmd> (ż), dấu gạch ngang trên
            (macron) <Cmd>{"\\=a"}</Cmd> (ā), dấu chấm dưới <Cmd>{"\\d{a}"}</Cmd>, dấu gạch dưới{" "}
            <Cmd>{"\\b{a}"}</Cmd>, dấu vòng tròn <Cmd>{"\\r{a}"}</Cmd> (å) và dấu ogonek{" "}
            <Cmd>{"\\k{e}"}</Cmd> (ę). Một số chữ cái hoàn chỉnh có lệnh riêng:{" "}
            <Cmd>{"\\l"}</Cmd> (ł), <Cmd>{"\\o"}</Cmd> (ø), <Cmd>{"\\ae"}</Cmd> (æ) và{" "}
            <Cmd>{"\\ss"}</Cmd> (ß). Để thêm dấu cho i hoặc j, hãy dùng dạng không chấm{" "}
            <Cmd>{"\\i"}</Cmd> và <Cmd>{"\\j"}</Cmd>, như <Cmd>{"\\'{\\i}"}</Cmd> cho í, để dấu
            không chạm vào dấu chấm.
          </IntroP>
          <IntroP>
            Chế độ toán dùng một bộ dấu khác, đặt trên một biến chứ không phải trên chữ cái của văn
            bản: <Cmd>{"\\hat{x}"}</Cmd>, <Cmd>{"\\bar{x}"}</Cmd>, <Cmd>{"\\vec{v}"}</Cmd>,{" "}
            <Cmd>{"\\tilde{x}"}</Cmd>, <Cmd>{"\\dot{x}"}</Cmd> và <Cmd>{"\\ddot{x}"}</Cmd> cho đạo
            hàm, cùng <Cmd>{"\\acute"}</Cmd>, <Cmd>{"\\grave"}</Cmd>, <Cmd>{"\\breve"}</Cmd> và{" "}
            <Cmd>{"\\check"}</Cmd>. Với nhiều hơn một ký tự, LaTeX cơ bản cung cấp các dấu co giãn{" "}
            <Cmd>{"\\widehat{xy}"}</Cmd> và <Cmd>{"\\widetilde{xy}"}</Cmd>, cùng{" "}
            <Cmd>{"\\overline{z}"}</Cmd> cho số liên hợp và <Cmd>{"\\overrightarrow{AB}"}</Cmd> cho
            vectơ; không lệnh nào cần amsmath.
          </IntroP>
          <IntroP>
            Từ năm 2018, LaTeX mặc định đọc UTF-8, nên bạn có thể gõ trực tiếp é, ö hay ñ trong mã
            nguồn (các bản cài đặt cũ cần <Cmd>{"\\usepackage[utf8]{inputenc}"}</Cmd>). Thêm{" "}
            <Cmd>{"\\usepackage[T1]{fontenc}"}</Cmd> để chữ có dấu là các glyph đơn, có thể ngắt
            âm tiết và sao chép đúng, thay vì được ghép từ hai phần. Để xem ví dụ thực tế, hãy đọc
            hướng dẫn của chúng tôi về{" "}
            <IntroLink
              href="https://www.useoctree.com/blog/spanish-characters-latex-accents-special-letters"
              external
            >
              ký tự tiếng Tây Ban Nha và dấu trong LaTeX
            </IntroLink>
            , hoặc phần giới thiệu về{" "}
            <IntroLink href="https://www.useoctree.com/learn/special-characters" external>
              ký tự đặc biệt trong LaTeX
            </IntroLink>
            . Nhấp vào bất kỳ thẻ nào bên dưới để sao chép lệnh của nó.
          </IntroP>
        </>
      ),
    },
  },
};

export default vi;
