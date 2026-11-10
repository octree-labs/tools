import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/math/<slug>. */
const text: SymbolPageTranslations = {
  "addition": {
    name: "Phép cộng",
    meaning: "Cộng hai đại lượng; dấu cộng hai ngôi, cũng được dùng như dấu một ngôi cho số dương.",
    usage: "Gõ + trong chế độ toán cho ra một toán tử hai ngôi, nên TeX tự động đặt khoảng trắng vừa ở mỗi bên, như trong a + b. Khi dấu cộng mở đầu một biểu thức hoặc đứng sau một toán tử hay quan hệ khác, như trong -(+3) hoặc x = +1, TeX coi nó là dấu một ngôi và bỏ khoảng trắng. Trong phương trình multline hoặc split ngắt dòng trước dấu cộng, hãy viết {}+ ở đầu dòng tiếp theo để khôi phục khoảng cách hai ngôi. Với dấu cộng ở chỉ số trên, như ion Na^+ hay tập \\mathbb{R}^+, không cần dấu ngoặc nhọn. Tránh dùng \\oplus trừ khi bạn muốn nói tổng trực tiếp hoặc XOR, đó là một ký hiệu khác.",
  },
  "subtraction": {
    name: "Phép trừ",
    meaning: "Trừ một đại lượng khỏi đại lượng khác; trong chế độ toán, phím gạch nối trở thành dấu trừ thực sự chứ không phải gạch nối.",
    usage: "Trong chế độ toán, ký tự gạch nối được chuyển thành dấu trừ đúng chuẩn, dài hơn gạch nối văn bản và có khoảng cách toán tử hai ngôi trong a - b. Ngoài chế độ toán bạn chỉ nhận được gạch nối ngắn, nên số âm trong văn bản vẫn nên viết là $-5$ thay vì gõ trực tiếp. Khi dấu trừ là một ngôi, như trong -x hoặc e^{-t}, TeX tự động bỏ khoảng trắng xung quanh. Đừng nhầm nó với \\setminus, ký hiệu hiệu tập hợp A \\setminus B, hay với gạch ngang en dùng cho khoảng giá trị. Với dấu trừ ở chỉ số trên, như x^{-1} hoặc Cl^-, chỉ cần dấu ngoặc nhọn khi theo sau có nhiều hơn một ký tự.",
  },
  "multiplication": {
    name: "Phép nhân",
    meaning: "Tạo dấu nhân chéo ×, dùng cho phép nhân, tích có hướng của vectơ và tích Descartes.",
    usage: "Trong số học, \\times dùng để viết 3 \\times 4 hoặc ký hiệu khoa học như 6.02 \\times 10^{23}. Trong đại số tuyến tính và vật lý, nó là tích có hướng của vectơ, \\mathbf{a} \\times \\mathbf{b}, và cũng dùng cho kích thước ma trận như ma trận m \\times n. Lý thuyết tập hợp dùng nó cho tích Descartes A \\times B. Hãy so sánh với \\cdot, lựa chọn thường dùng cho tích vô hướng và phép nhân giữa các biến, và dấu sao *, thường có nghĩa là tích chập. Toán tử lớn \\bigtimes không có trong LaTeX chuẩn, nên với tích Descartes có chỉ số, nhiều tác giả viết \\prod thay thế.",
  },
  "division": {
    name: "Phép chia",
    meaning: "Tạo dấu obelus ÷, dấu chia ở bậc tiểu học với một chấm ở trên và một chấm ở dưới gạch ngang.",
    usage: "Dấu obelus xuất hiện trong phiếu bài tập số học, biểu thức kiểu máy tính bỏ túi và một số bảng, như 12 \\div 4 = 3. Toán học nghiên cứu gần như không bao giờ dùng nó; thay vào đó hãy viết phân số \\frac{12}{4}, gạch chéo trong dòng 12/4, hoặc dấu hai chấm cho tỉ số. Ở một số nước, dấu obelus hoàn toàn không được dùng, và ISO 80000-2 khuyến nghị không dùng nó. Vì \\div là toán tử hai ngôi, TeX đặt khoảng cách cho nó như + và -. Đừng nhầm nó với \\mid hay gạch chéo /, lần lượt có nghĩa là “chia hết” và thương trong lý thuyết số và lý thuyết nhóm, chẳng hạn G/N.",
  },
  "fraction": {
    name: "Phân số",
    meaning: "Dàn trang một phân số dạng chồng, với tử số a trên mẫu số b, ngăn cách bởi một gạch ngang.",
    usage: "\\frac nhận hai đối số là tử số và mẫu số, nên \\frac{a}{b} chỉ là khuôn mẫu cho mọi tỉ số như \\frac{dy}{dx} hay \\frac{n(n+1)}{2}. Trong công thức trong dòng, nó thu nhỏ về cỡ văn bản và có thể bị chật; \\dfrac buộc dùng cỡ hiển thị, còn \\tfrac buộc dùng cỡ văn bản. Với tỉ số đơn giản trong dòng, gạch chéo a/b thường dễ đọc hơn phân số chồng. Hệ số nhị thức dùng \\binom{n}{k}, không phải \\frac bỏ gạch ngang. Liên phân số trông gọn hơn với \\cfrac, lệnh giữ mọi tầng ở cỡ đầy đủ. Khi phân số nằm trong dấu ngoặc, hãy dùng \\left( và \\right) để ngoặc giãn theo chiều cao của nó.",
  },
  "square-root": {
    name: "Căn bậc hai",
    meaning: "Vẽ dấu căn phủ lên đối số, cho căn bậc hai chính của x.",
    usage: "\\sqrt tự động kéo giãn dấu căn để phủ mọi thứ bạn đặt trong ngoặc nhọn, nên \\sqrt{x^2 + y^2} có gạch trên dài hơn và dấu căn cao hơn. Đây là cách chuẩn để viết chuẩn Euclid, công thức nghiệm bậc hai và độ lệch chuẩn \\sqrt{\\operatorname{Var}(X)}. Dấu căn trên các đối số có chiều cao khác nhau có thể trông không đều; thêm \\vphantom{y} hoặc \\mathstrut vào bên trong giúp các căn cạnh nhau khớp nhau. Với chỉ số như căn bậc ba, dùng đối số tùy chọn \\sqrt[3]{x}. Trong văn bản, x^{1/2} đôi khi rõ hơn một dấu căn phủ lên phân số cao.",
  },
  "n-th-root": {
    name: "Căn bậc n",
    meaning: "Viết căn bậc n của x, với chỉ số n đặt ở góc của dấu căn.",
    usage: "Chỉ số đặt trong ngoặc vuông trước biểu thức dưới căn, nên \\sqrt[3]{8} = 2 là căn bậc ba và \\sqrt[n]{x} chỉ x^{1/n}. Nó xuất hiện trong tiêu chuẩn căn cho chuỗi, \\limsup \\sqrt[n]{|a_n|}, và trong trung bình nhân \\sqrt[n]{x_1 x_2 \\cdots x_n}. TeX đôi khi đặt chỉ số không khéo, nhất là với chỉ số cao; \\leftroot{} và \\uproot{} giúp dịch chuyển nó, như trong \\sqrt[\\leftroot{-2}\\uproot{2}n]{x}. Hãy giữ chỉ số ngắn: với số mũ phức tạp, viết lũy thừa x^{1/(k+1)} dễ đọc hơn dấu căn.",
  },
  "summation": {
    name: "Ký hiệu tổng (sigma)",
    meaning: "Cộng một dãy số hạng khi chỉ số i chạy từ 1 đến n, dùng toán tử lớn sigma hoa.",
    usage: "\\sum là toán tử lớn: trong công thức hiển thị, các cận i=1 và n nằm dưới và trên chữ sigma, còn trong công thức trong dòng chúng chuyển sang bên cạnh thành chỉ số dưới và trên. Thêm \\limits để buộc cận xếp chồng trong dòng, hoặc \\nolimits để đặt cận bên cạnh khi hiển thị, dù cận xếp chồng trong dòng có thể làm xáo trộn khoảng cách dòng. Với điều kiện nhiều dòng dưới sigma, dùng \\substack{0 \\le i \\le m \\\\ 0 < j < n}. Đừng dùng chữ Hy Lạp \\Sigma cho phép lấy tổng; đó là ký hiệu thường nhỏ hơn và không có khoảng cách toán tử. Các ứng dụng điển hình gồm chuỗi, kỳ vọng và \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}.",
  },
  "product": {
    name: "Ký hiệu tích (pi)",
    meaning: "Nhân một dãy thừa số với i từ 1 đến n, dùng toán tử lớn pi hoa.",
    usage: "\\prod hoạt động giống \\sum: cận xếp chồng trên và dưới ở kiểu hiển thị và nằm bên cạnh trong văn bản. Nó dùng để viết giai thừa n! = \\prod_{i=1}^{n} i, hàm hợp lý L(\\theta) = \\prod_{i} p(x_i \\mid \\theta) và tích Euler trên các số nguyên tố. Đừng thay bằng chữ Hy Lạp \\Pi, vốn là ký hiệu thường có kích thước cố định. Phiên bản lộn ngược \\coprod chỉ đối tích trong lý thuyết phạm trù. Khi tích là một hàm hợp lý mà bạn sẽ lấy logarit, người ta thường trình bày rõ việc chuyển sang tổng, vì \\log biến \\prod thành \\sum.",
  },
  "integral": {
    name: "Tích phân",
    meaning: "Viết dấu tích phân xác định với cận dưới a và cận trên b.",
    usage: "Khác với \\sum, cận của \\int mặc định nằm bên cạnh ngay cả trong công thức hiển thị; thêm \\limits, như \\int\\limits_a^b, nếu quy cách của bạn đòi hỏi xếp chồng. Đặt một khoảng hẹp \\, trước vi phân, như \\int_a^b f(x)\\,dx, và một số tác giả dùng chữ d đứng qua \\mathrm{d}x. Tích phân bội có các lệnh riêng \\iint và \\iiint, đặt khoảng cách giữa các dấu tốt hơn việc lặp lại \\int. Tích phân đường khép kín dùng \\oint. Với gạch thế cận sau khi lấy tích phân, viết \\Big|_a^b hoặc \\left. F(x) \\right|_a^b.",
  },
  "limit": {
    name: "Giới hạn",
    meaning: "Viết toán tử giới hạn với x tiến tới vô cùng đặt bên dưới chữ “lim”.",
    usage: "\\lim là tên toán tử định nghĩa sẵn, nên in bằng chữ roman đứng và, trong công thức hiển thị, đặt chỉ số dưới x \\to \\infty ngay bên dưới. Trong dòng, chỉ số dưới chuyển sang bên cạnh để giữ khoảng cách dòng gọn gàng. Mũi tên bên trong là \\to, bí danh ngắn của \\rightarrow. Giới hạn một phía được viết x \\to 0^+ hoặc x \\downarrow 0. Các toán tử liên quan \\limsup và \\liminf hoạt động tương tự. Nếu cần một từ kiểu giới hạn tùy chỉnh với chỉ số xếp chồng, hãy định nghĩa bằng \\DeclareMathOperator* (dấu sao bật chế độ cận) thay vì viết \\text{lim}.",
  },
  "infinity": {
    name: "Vô cùng",
    meaning: "Vẽ hình lemniscate ∞, biểu thị một đại lượng không bị chặn hoặc một giới hạn tăng không giới hạn.",
    usage: "Bạn sẽ gặp \\infty trong giới hạn như x \\to \\infty, tích phân suy rộng \\int_0^\\infty e^{-x}\\,dx và cận của chuỗi \\sum_{n=1}^{\\infty}. Nó cũng có mặt trong chuẩn sup \\|f\\|_\\infty, không gian L^\\infty và lớp hàm trơn C^\\infty. Viết -\\infty và +\\infty với dấu đi liền; TeX đặt khoảng cách đúng cho dấu một ngôi. Hãy nhớ \\infty không phải là số thực, nên khoảng chứa nó phải mở ở đầu đó, như [0, \\infty). Với tập số thực mở rộng, \\overline{\\mathbb{R}} là ký hiệu phổ biến.",
  },
  "approximately-equal": {
    name: "Dấu xấp xỉ bằng",
    meaning: "Khẳng định hai giá trị xấp xỉ bằng nhau, chẳng hạn một ước lượng số hoặc một hằng số đã làm tròn.",
    usage: "Dùng \\approx cho xấp xỉ số như \\pi \\approx 3.14159 và cho khai triển bậc nhất như \\sin x \\approx x khi x nhỏ. Đây là quan hệ, nên TeX đặt khoảng cách dày như với =. Một số ký hiệu trông giống mang nghĩa khác: \\simeq thường nghĩa là tương đương tiệm cận hoặc đẳng cấu, \\sim nghĩa là tiệm cận hoặc “có phân phối”, \\cong chỉ tương đẳng hoặc đẳng cấu, và \\approxeq là biến thể ít gặp hơn. Trong tài liệu tài chính và kỹ thuật, \\approx thường đánh dấu kết quả đã làm tròn; hãy nêu độ chính xác, ví dụ đến ba chữ số thập phân, để người đọc biết ước lượng sai lệch đến đâu.",
  },
  "not-equal": {
    name: "Dấu khác (không bằng)",
    meaning: "Nói rằng hai đại lượng không bằng nhau; phủ định của dấu bằng.",
    usage: "\\neq và bí danh ngắn \\ne tạo ra cùng một dấu bằng có gạch chéo, dùng lệnh nào cũng được. Nó xuất hiện trong điều kiện như x \\neq 0, trong khẳng định phân biệt i \\neq j, và trong các bài báo thiên về lập trình như phép kiểm tra khác. Viết \\not= cũng được nhưng vị trí gạch chéo có thể hơi khác glyph chuyên dụng. Khi viết về khoa học máy tính, tránh gõ != trong chế độ toán; nó in ra dấu chấm than rồi đến dấu bằng. Với “không tương đương” hoặc “không tương đẳng”, dùng \\not\\equiv hoặc \\ncong thay vì \\neq.",
  },
  "less-than-or-equal": {
    name: "Dấu nhỏ hơn hoặc bằng",
    meaning: "Biểu thị vế trái nhỏ hơn hoặc bằng vế phải.",
    usage: "\\leq có bí danh ngắn hơn là \\le, cả hai in cùng một glyph với một gạch ngang. Gõ <= trong chế độ toán cho ra hai ký hiệu riêng biệt, nên hãy luôn dùng lệnh. Các bất đẳng thức như bất đẳng thức tam giác \\|x+y\\| \\leq \\|x\\|+\\|y\\| và các cận như 0 \\leq p \\leq 1 là công việc hằng ngày của nó. Biến thể nghiêng \\leqslant được ưa dùng trong một số truyền thống châu Âu và Nga, còn \\leqq có gạch kép. Trong lý thuyết thứ tự và dàn, \\leq chỉ một thứ tự bộ phận, còn \\preceq dùng cho các tiền thứ tự tổng quát hơn.",
  },
  "greater-than-or-equal": {
    name: "Dấu lớn hơn hoặc bằng",
    meaning: "Biểu thị vế trái lớn hơn hoặc bằng vế phải.",
    usage: "\\geq và bí danh \\ge có thể thay thế cho nhau. Gõ >= trong chế độ toán in ra hai ký tự riêng biệt, nên hãy dùng lệnh. Các ngữ cảnh thường gặp là cận dưới như n \\geq 1, bất đẳng thức AM-GM và ràng buộc trong tối ưu hóa như x_i \\geq 0. Dạng nghiêng \\geqslant được một số tạp chí ưa chuộng, còn \\geqq có gạch kép. Trong lý thuyết thứ tự, quan hệ ngược \\succeq tổng quát hóa \\geq. Khi có thể, hãy giữ chuỗi bất đẳng thức theo một chiều, vì a \\leq b \\leq c dễ đọc hơn việc trộn \\leq và \\geq.",
  },
  "implies": {
    name: "Phép kéo theo",
    meaning: "Viết mũi tên kép dài cho phép kéo theo logic, nghĩa là mệnh đề bên trái kéo theo mệnh đề bên phải.",
    usage: "\\implies tạo ra \\Longrightarrow kèm khoảng trắng dày bổ sung, phù hợp cho phép kéo theo giữa các mệnh đề hoàn chỉnh, như x > 2 \\implies x^2 > 4. Với phép kéo theo giữa các công thức bên trong một biểu thức logic, nhiều nhà logic thích dùng \\Rightarrow ngắn hơn hoặc \\to, không có khoảng hở rộng. Chiều ngược lại của nó là \\impliedby. Trong chứng minh, tránh xếp nhiều \\implies liên tiếp suốt trang; các câu đầy đủ với “do đó” thường dễ đọc hơn. Trong ký hiệu logic mệnh đề, p \\to q phổ biến hơn p \\implies q.",
  },
  "if-and-only-if": {
    name: "Phép tương đương (khi và chỉ khi)",
    meaning: "Viết mũi tên kép hai đầu dài cho tương đương logic, đọc là “khi và chỉ khi”.",
    usage: "\\iff tạo ra \\Longleftrightarrow với khoảng trắng dày bổ sung ở hai bên. Nó nối hai mệnh đề kéo theo lẫn nhau, như trong một định lý dạng n \\text{ is even} \\iff n^2 \\text{ is even}. Sách logic thường ưa dùng \\leftrightarrow hoặc \\Leftrightarrow cho phép tương đương bên trong công thức, và dành \\iff cho các mệnh đề trong văn xuôi. Do phần đệm đó, \\iff trông quá thưa trong chỉ số dưới gọn hoặc điều kiện của tập hợp. Đừng nhầm nó với \\equiv, nghĩa là đồng nhất bằng nhau hoặc đồng dư modulo n.",
  },
  "for-all": {
    name: "Lượng từ với mọi",
    meaning: "Cho lượng từ với mọi ∀, đọc là “với mọi” hoặc “với mỗi”.",
    usage: "\\forall mở đầu các mệnh đề có lượng từ phổ quát, như trong định nghĩa epsilon-delta \\forall \\varepsilon > 0\\ \\exists \\delta > 0. TeX coi nó là ký hiệu thường, nên không có khoảng trắng tự động sau biến bị ràng buộc; hãy thêm \\, hoặc \\ hay một dấu phân cách như dấu hai chấm hoặc dấu chấm tùy quy ước của bạn. Trong các chứng minh nhiều văn xuôi, nhiều hướng dẫn trình bày khuyên viết “với mọi” bằng chữ thay vì \\forall. Trong phép tính lambda có kiểu và lý thuyết kiểu, nó còn dùng để đưa vào kiểu đa hình, ví dụ \\forall \\alpha.\\, \\alpha \\to \\alpha.",
  },
  "exists": {
    name: "Lượng từ tồn tại",
    meaning: "Cho lượng từ tồn tại ∃, đọc là “tồn tại” hoặc “với một số”.",
    usage: "\\exists khẳng định có ít nhất một phần tử thỏa mãn một tính chất, như trong \\exists x \\in \\mathbb{R} : x^2 = 2. Tính duy nhất được viết \\exists! (tồn tại đúng một), và \\nexists cho ký hiệu phủ định “không tồn tại”. Giống \\forall, nó là ký hiệu thường, nên hãy chèn một khoảng hẹp hoặc dấu hai chấm sau biến bị ràng buộc cho dễ đọc. Thứ tự lượng từ rất quan trọng: \\forall x\\, \\exists y khác với \\exists y\\, \\forall x, nên hãy giữ đúng trình tự mong muốn. Trong văn viết logic hình thức, dấu ngoặc bao phạm vi, \\exists x\\,(P(x)), giúp tránh mơ hồ.",
  },
  "element-of": {
    name: "Ký hiệu thuộc (phần tử của)",
    meaning: "Biểu thị quan hệ thuộc: phần tử bên trái thuộc tập hợp bên phải.",
    usage: "\\in là quan hệ thuộc cơ bản của tập hợp, như trong x \\in \\mathbb{R} hoặc n \\in \\mathbb{N}, và có khoảng cách của quan hệ. Ảnh gương của nó \\ni đọc là “chứa phần tử”, còn \\notin là phủ định. Đừng nhầm nó với \\epsilon hay \\varepsilon, những chữ cái Hy Lạp trông giống nhưng có khoảng cách và ý nghĩa khác. Trong tổng và cách viết tập hợp theo tính chất, nó ràng buộc chỉ số, như \\sum_{x \\in S} f(x) hoặc \\{x \\in X : f(x) > 0\\}. Với quan hệ tập con giữa hai tập hợp, dùng \\subseteq chứ không phải \\in.",
  },
  "not-element-of": {
    name: "Ký hiệu không thuộc",
    meaning: "Biểu thị quan hệ không thuộc: phần tử bên trái không thuộc tập hợp đã cho.",
    usage: "\\notin là phiên bản có gạch chéo chuyên dụng của \\in, dàn trang như một quan hệ, như trong \\sqrt{2} \\notin \\mathbb{Q}. Viết \\not\\in cho kết quả tương tự, nhưng \\notin đặt gạch chéo đẹp hơn và là lựa chọn chuẩn. Các ký hiệu đi kèm tự nhiên là \\in và \\ni, còn với phủ định tập con bạn sẽ dùng \\not\\subset hoặc \\nsubseteq. Các câu điển hình gồm chứng minh phản chứng và mô tả phần bù, như x \\in A^c \\iff x \\notin A. Trong lượng từ, \\forall x \\notin S là cách viết tắt chấp nhận được nhưng nêu rõ miền thì rõ ràng hơn.",
  },
  "subset": {
    name: "Tập con",
    meaning: "Cho thấy một tập hợp được chứa trong tập hợp khác; thường được hiểu là tập con thực sự.",
    usage: "Các quy ước khác nhau: một số tác giả dùng \\subset cho mọi tập con, số khác dành nó cho tập con thực sự và dùng \\subseteq khi cho phép bằng nhau. Để không mơ hồ, nhiều bài báo viết \\subseteq cho “tập con hoặc bằng” và \\subsetneq cho “tập con thực sự”, rồi nêu quy ước một lần. Quan hệ ngược là \\supset. Các khẳng định điển hình gồm \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} và bao hàm giữa các không gian con trong đại số tuyến tính. Phủ định \\not\\subset dùng được, còn \\nsubseteq cho glyph “không phải tập con hoặc bằng” gọn hơn. Dù chọn cách hiểu nào, hãy tránh chuyển đổi giữa hai cách trong cùng một tài liệu.",
  },
  "union": {
    name: "Phép hợp",
    meaning: "Tạo hợp của các tập hợp: mọi phần tử thuộc ít nhất một trong số chúng.",
    usage: "\\cup là toán tử hai ngôi, như trong A \\cup B, và có khoảng cách vừa ở hai bên. Với hợp trên một họ có chỉ số, dùng toán tử lớn \\bigcup, xếp chồng cận ở chế độ hiển thị: \\bigcup_{i=1}^{\\infty} A_i. Hợp rời thường được viết \\sqcup hoặc \\dot\\cup. Trong xác suất, A \\cup B tương ứng với biến cố “A hoặc B”, cho P(A \\cup B) = P(A) + P(B) - P(A \\cap B). Đừng dùng chữ U hay phép tuyển logic \\lor thay cho phép hợp tập hợp.",
  },
  "intersection": {
    name: "Phép giao",
    meaning: "Tạo giao của các tập hợp: các phần tử chung của tất cả chúng.",
    usage: "\\cap là toán tử hai ngôi viết giữa các tập hợp, như A \\cap B, còn \\bigcap là phiên bản toán tử lớn cho các họ, \\bigcap_{n} U_n. Trong xác suất, nó biểu thị biến cố đồng thời, nên P(A \\cap B) = P(A)P(B) định nghĩa tính độc lập. Đối tác logic của nó là \\land (và), còn phép meet trong lý thuyết dàn \\wedge trông giống nhưng là một glyph khác. Các luật De Morgan ghép nó với phép hợp: (A \\cup B)^c = A^c \\cap B^c. Nếu A \\cap B = \\emptyset, hai tập hợp rời nhau.",
  },
  "empty-set": {
    name: "Tập rỗng",
    meaning: "Ký hiệu tập rỗng, tập hợp duy nhất không chứa phần tử nào.",
    usage: "\\emptyset in glyph tập rỗng mặc định, một vòng tròn có gạch chéo. Nhiều nhà toán học thích dạng tròn hơn \\varnothing, dễ phân biệt với số không có gạch chéo và phổ biến trong các sách hiện đại. Hãy chọn một và dùng nhất quán. Các ứng dụng điển hình là tính rời nhau A \\cap B = \\emptyset và kết quả của cách viết tập hợp theo tính chất. Đừng nhầm nó với chữ Bắc Âu Ø hay với \\phi và \\varphi. Viết \\{\\} cho tập rỗng cũng chấp nhận được, nhưng lưu ý \\{\\emptyset\\} là tập hợp có một phần tử.",
  },
  "partial-derivative": {
    name: "Đạo hàm riêng",
    meaning: "Viết ký hiệu ∂ cong cho đạo hàm riêng, và cho biên của tập hợp trong tô pô.",
    usage: "\\partial xuất hiện trong đạo hàm riêng như \\frac{\\partial f}{\\partial x} và đạo hàm riêng hỗn hợp \\frac{\\partial^2 f}{\\partial x\\,\\partial y}. Trong tô pô và hình học, \\partial A là biên của một tập hợp hoặc đa tạp, dùng trong định lý Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Với dạng rút gọn có chỉ số dưới, \\partial_x f và \\partial_t u phổ biến trong các bài báo về phương trình đạo hàm riêng. Đừng nhầm nó với \\delta (biến phân) hay d (đạo hàm toàn phần). Đặt một khoảng hẹp giữa các thừa số \\partial ở mẫu số giúp khoảng cách đẹp hơn.",
  },
  "nabla": {
    name: "Nabla",
    meaning: "Viết ký hiệu nabla ∇, toán tử vi phân vectơ cho gradient, divergence và rotation.",
    usage: "\\nabla f là gradient, \\nabla \\cdot \\mathbf{F} là divergence, \\nabla \\times \\mathbf{F} là rotation, và \\nabla^2 hoặc \\Delta là toán tử Laplace. Trong học máy, \\nabla_\\theta L(\\theta) chỉ gradient của hàm mất mát theo các tham số, như trong thuật toán giảm gradient \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L. Các nhà hình học vi phân dùng \\nabla cho liên thông hoặc đạo hàm hiệp biến, \\nabla_X Y. Đây là ký hiệu thường, nên không có khoảng trắng bổ sung. Một số tác giả in đậm nó bằng \\boldsymbol{\\nabla} để nhấn mạnh đó là toán tử vectơ.",
  },
  "plus-minus": {
    name: "Dấu cộng trừ",
    meaning: "Cho dấu cộng trừ ±, dùng cho hai khả năng hoặc một dung sai quanh một giá trị.",
    usage: "\\pm xuất hiện trong công thức nghiệm bậc hai x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} và trong sai số đo như 9.81 \\pm 0.02. Ký hiệu đối ứng \\mp (trừ cộng) dùng khi các dấu phải đổi đồng thời, như trong \\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b. Đây là toán tử hai ngôi, nên TeX đặt khoảng cách như với +. Trong bảng kết quả thực nghiệm, hãy căn các số quanh dấu \\pm cho dễ đọc. Tài liệu tài chính dùng nó cho khoảng dao động như lợi suất 5\\% \\pm 2\\%.",
  },
  "dot-product": {
    name: "Tích vô hướng (dấu chấm giữa)",
    meaning: "Đặt một dấu chấm ở giữa, dùng cho tích vô hướng và phép nhân giữa các thừa số.",
    usage: "\\cdot là toán tử hai ngôi nằm trên trục toán học, như trong \\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i và trong các tích như 2 \\cdot 3. Nó cũng đánh dấu chỗ trống cho đối số, như \\|\\cdot\\| hoặc f(\\cdot). Đừng dùng dấu chấm câu, vốn nằm trên đường cơ sở, hay \\bullet, vốn lớn hơn. Với dấu ba chấm giữa các thừa số nhân, dùng \\cdots, căn giữa theo chiều dọc, còn \\ldots dành cho danh sách. Dùng \\times cho tích có hướng và ký hiệu khoa học, giữ \\cdot cho tích vô hướng và tích trong.",
  },
};

export default text;
