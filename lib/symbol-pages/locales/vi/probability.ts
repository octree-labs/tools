import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/probability/<slug>. */
const text: SymbolPageTranslations = {
  "probability": {
    name: "Độ đo xác suất",
    meaning: "Chữ P kiểu bảng đen (blackboard bold), độ đo xác suất áp dụng lên các biến cố.",
    usage: "Xác suất theo lý thuyết độ đo viết \\mathbb{P}(A) cho xác suất của biến cố A, với các tiên đề như \\mathbb{P}(\\Omega) = 1. Kiểu chữ bảng đen tách độ đo khỏi chữ P thường, vốn có thể là tên một ma trận, một đa thức hay một phân hoạch. Với các phông chuẩn, \\mathbb chỉ hoạt động trên chữ in hoa, nên đầu vào chữ thường cho ra glyph sai. Hãy kết hợp nó với \\mathbb{E} và Var đứng để có phong cách nhất quán. Một không gian xác suất là bộ ba (\\Omega, \\mathcal{F}, \\mathbb{P}), với chữ F thư pháp cho sigma-đại số. Một số tác giả dùng \\Pr, một toán tử đứng định nghĩa sẵn, thay thế.",
  },
  "probability-of-a": {
    name: "Xác suất của A",
    meaning: "Xác suất của biến cố A, viết bằng chữ P hoa nghiêng thông thường.",
    usage: "Sách nhập môn viết P(A) cho khả năng A xảy ra, với 0 \\le P(A) \\le 1 và quy tắc biến cố đối P(A^c) = 1 - P(A). Chữ P nghiêng thường là ổn khi không có gì khác trong tài liệu dùng chữ cái đó; nếu không, \\Pr(A), một toán tử đứng định nghĩa sẵn, hoặc \\mathbb{P}(A) tránh được sự trùng lặp. Với đối số lớn, hãy để dấu ngoặc giãn theo: P\\left(\\bigcup_i A_i\\right). Gõ Pr(A) không có dấu gạch chéo ngược cho ra P và r nghiêng như hai biến nhân với nhau. Xác suất có điều kiện đặt \\mid bên trong dấu ngoặc, P(A \\mid B), thay vì một thanh dọc trần.",
  },
  "expectation": {
    name: "Kỳ vọng",
    meaning: "Giá trị kỳ vọng của biến ngẫu nhiên X, viết bằng chữ E kiểu bảng đen.",
    usage: "Kỳ vọng là trung bình của X có trọng số theo phân phối của nó, \\mathbb{E}[X] = \\sum_x x\\,p(x) hoặc \\int x f(x)\\,dx. Các bài báo học máy dùng nó khắp nơi, thường với chỉ số dưới nêu tên phân phối: \\mathbb{E}_{x \\sim p}[\\ell(x)]. Dấu ngoặc vuông là quy ước, và \\left[ \\right] hoặc \\bigl[ \\bigr] giúp ích khi đối số chứa phân số. Chữ E bảng đen tách toán tử khỏi năng lượng E hay tập cạnh E. Tính tuyến tính, \\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y], đúng ngay cả khi không độc lập, đó là lý do nó được dùng thoải mái như vậy.",
  },
  "expectation-e": {
    name: "Kỳ vọng (E)",
    meaning: "Kỳ vọng của X viết bằng chữ E nghiêng thường, trung bình của phân phối của nó.",
    usage: "Nhiều giáo trình thống kê viết E[X] hoặc E(X) cho giá trị kỳ vọng, với đồng nhất thức phương sai \\operatorname{Var}(X) = E[X^2] - (E[X])^2 là một ví dụ chuẩn. Chữ E nghiêng có thể trùng với các nghĩa khác như năng lượng hay một biến cố tên E, vì thế \\mathbb{E} hoặc \\mathrm{E} đứng phổ biến trong các bài báo nghiên cứu. Nếu chọn dạng đứng, hãy định nghĩa \\DeclareMathOperator{\\E}{E} để khoảng cách và phông đồng nhất ở mọi nơi. Kỳ vọng có điều kiện theo cùng phong cách, E[X \\mid Y]. Dù chọn dạng nào, hãy dùng nhất quán từ đầu đến cuối.",
  },
  "variance": {
    name: "Phương sai",
    meaning: "Phương sai của X, kỳ vọng của bình phương độ lệch khỏi trung bình, với nhãn in đứng.",
    usage: "Các đồng nhất thức quen thuộc là \\text{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\mathbb{E}[X^2] - \\mu^2 và \\text{Var}(aX + b) = a^2\\text{Var}(X). \\text{Var} trông đúng ở hầu hết mọi nơi, nhưng trong văn bản định lý in nghiêng, nhãn cũng chuyển sang nghiêng, vì \\text sao chép phông xung quanh. \\operatorname{Var} hoặc khai báo \\DeclareMathOperator{\\Var}{Var} ở phần mở đầu thì chắc chắn hơn và cho khoảng cách đúng. Một số tác giả viết \\mathbb{V}, \\sigma^2 hoặc \\mathrm{Var}. Với các biến độc lập, phương sai cộng lại: \\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y), còn trường hợp tổng quát cộng thêm hai lần hiệp phương sai.",
  },
  "covariance": {
    name: "Hiệp phương sai",
    meaning: "Hiệp phương sai của X và Y, đo mức độ hai biến ngẫu nhiên cùng biến thiên với nhau.",
    usage: "Được định nghĩa bởi \\text{Cov}(X,Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y], nó là nền tảng của hệ số tương quan \\rho = \\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y) và của ma trận hiệp phương sai, thường viết \\Sigma. Các biến độc lập có hiệp phương sai bằng không, dù điều ngược lại nói chung không đúng. Cũng như với Var, \\operatorname{Cov} hoặc một toán tử được khai báo cho kết quả vững chắc hơn \\text{Cov}, vốn bị nghiêng trong phát biểu định lý. Thêm một khoảng trắng hẹp sau dấu phẩy, (X,\\,Y), nếu các đối số trông chật. Với một vectơ ngẫu nhiên, \\operatorname{Cov}(\\mathbf{X}) chỉ toàn bộ ma trận hiệp phương sai. Giá trị dương nghĩa là các biến có xu hướng thay đổi cùng chiều.",
  },
  "normal-distribution": {
    name: "Phân phối chuẩn",
    meaning: "Phân phối chuẩn (Gauss) với trung bình mu và phương sai sigma bình phương.",
    usage: "Viết X \\sim \\mathcal{N}(\\mu, \\sigma^2) để phát biểu rằng X có phân phối chuẩn; tham số thứ hai là phương sai, không phải độ lệch chuẩn, một nguồn nhầm lẫn thường gặp khi đọc tài liệu phần mềm. Dạng nhiều chiều là \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma) với một ma trận hiệp phương sai. \\mathcal cho chữ N kiểu viết tay và chỉ hoạt động với chữ in hoa. Hàm mật độ \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x-\\mu)^2/(2\\sigma^2)} thường theo sau trong một công thức hiển thị. Phân phối chuẩn tắc là \\mathcal{N}(0, 1), và hàm phân phối tích lũy của nó thường được viết \\Phi.",
  },
  "independence-symbol-double-perp": {
    name: "Ký hiệu độc lập (perp kép)",
    meaning: "Hai dấu \\perp chồng lên nhau nhờ khoảng trắng âm, ký hiệu tự dựng thông dụng cho tính độc lập thống kê.",
    usage: "Các nhà xác suất viết X \\perp\\!\\!\\!\\perp Y cho các biến ngẫu nhiên độc lập và X \\perp\\!\\!\\!\\perp Y \\mid Z cho độc lập có điều kiện, ký hiệu được phổ biến bởi mô hình đồ thị và suy luận nhân quả. Ba khoảng trắng hẹp âm \\! kéo dấu \\perp thứ hai gần như đè lên dấu thứ nhất, tạo thành chữ T ngược có hai thân. Vì được ghép thủ công, hình dạng chính xác của nó thay đổi đôi chút giữa các phông; hãy định nghĩa một macro như \\newcommand{\\indep}{\\mathrel{\\perp\\!\\!\\!\\perp}} để nó cũng có khoảng cách quan hệ. Một dấu \\perp đơn được dùng cho tính độc lập trong một số sách, nhưng nó trùng với ký hiệu trực giao.",
  },
  "conditional": {
    name: "Dấu gạch đứng điều kiện",
    meaning: "Thanh dọc với khoảng cách quan hệ, đọc là “với điều kiện”, “sao cho” hoặc “chia hết”.",
    usage: "Khác với dấu | trơn, \\mid thêm khoảng trắng ở cả hai bên, đúng như xác suất có điều kiện P(A \\mid B), ký hiệu tập hợp theo tính chất \\{x \\mid x > 0\\} và quan hệ chia hết 3 \\mid 12 cần. Hãy dùng | hoặc \\vert cho giá trị tuyệt đối, nơi không cần thêm khoảng trắng, và \\lvert ... \\rvert khi thanh bao quanh một biểu thức. Trong ký hiệu tập hợp với nội dung cao, \\middle| giữa \\left\\{ và \\right\\} làm thanh giãn cho vừa. Phủ định của nó là \\nmid, nghĩa là không chia hết. Nhiều tác giả dùng dấu hai chấm trong ký hiệu tập hợp, cách này tránh nhầm lẫn khi quan hệ chia hết cũng xuất hiện.",
  },
  "given": {
    name: "Xác suất có điều kiện",
    meaning: "Xác suất có điều kiện của A khi biết biến cố B đã xảy ra.",
    usage: "Được định nghĩa bởi P(A \\mid B) = P(A \\cap B)/P(B) với P(B) > 0, nó là viên gạch nền của định lý Bayes. Luôn dùng \\mid thay vì |: thanh trần không có khoảng trắng xung quanh và biểu thức trông chật chội. Với đối số cao, hãy viết P\\left(A \\,\\middle|\\, B\\right) để thanh giãn theo dấu ngoặc. Chuỗi điều kiện, P(A \\mid B, C), đặt dấu phẩy sau thanh thay vì một thanh thứ hai. Trong ký hiệu hàm hợp lý, p(x \\mid \\theta) theo cùng quy ước, và một số nhà thống kê dùng dấu chấm phẩy, p(x; \\theta), khi \\theta là một tham số cố định chứ không phải biến ngẫu nhiên.",
  },
  "chi-squared": {
    name: "Khi bình phương",
    meaning: "Khi bình phương: chữ Hy Lạp chi được bình phương, tên của một phân phối và một thống kê kiểm định.",
    usage: "Thống kê Pearson \\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i} so sánh tần số quan sát và tần số kỳ vọng, và \\chi^2_k chỉ phân phối với k bậc tự do. Lưu ý rằng \\chi là chữ Hy Lạp chi; đừng gõ chữ x, trông khá giống nhưng là một glyph khác và nằm khác trên đường cơ sở. Để gắn cả bậc tự do lẫn số mũ bình phương, hãy viết \\chi^2_{k} hoặc \\chi_{k}^{2}; LaTeX xếp chúng giống hệt nhau theo cả hai cách. Trong phần kết quả, hãy báo cáo kiểm định dưới dạng \\chi^2(2) = 6.1, p = 0.047, theo quy chuẩn trình bày của lĩnh vực bạn.",
  },
  "binomial-coefficient": {
    name: "Hệ số nhị thức",
    meaning: "Hệ số nhị thức n chọn k, số tập con k phần tử của một tập n phần tử.",
    usage: "Nó xuất hiện trong định lý nhị thức (x+y)^n = \\sum_k \\binom{n}{k} x^k y^{n-k}, trong quy tắc Pascal và trong phân phối nhị thức P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}. \\binom tự điều chỉnh cỡ theo kiểu hiện hành; ép dạng lớn bằng \\dbinom trong dòng văn bản hoặc dạng nhỏ bằng \\tbinom trong công thức hiển thị. Cú pháp cũ {n \\choose k} vẫn hoạt động theo kiểu plain TeX nhưng không được khuyến khích trong tài liệu LaTeX. Một số sách viết C(n,k) hoặc dạng tiền tố nCk; dạng xếp chồng trong ngoặc là chuẩn trong văn bản nghiên cứu.",
  },
  "factorial": {
    name: "Giai thừa",
    meaning: "Giai thừa của n, tích của tất cả các số nguyên dương đến n.",
    usage: "Gõ n! không cần lệnh nào: dấu chấm than in trực tiếp trong chế độ toán, với 0! = 1 theo quy ước. Giai thừa có mặt khắp tổ hợp và giải tích, từ \\binom{n}{k} = \\frac{n!}{k!(n-k)!} đến các hệ số Taylor \\frac{f^{(n)}(a)}{n!}. Chú ý khoảng cách trong các tích như n!\\,m!, nơi một khoảng trắng hẹp giữ cho dấu chấm than không chen vào chữ tiếp theo, và đặt ngoặc cho đối số phức hợp, (n+1)!. Đừng nhầm ký tự này với \\!, một khoảng trắng hẹp âm. Các ký hiệu liên quan gồm giai thừa kép n!! và xấp xỉ Stirling n! \\approx \\sqrt{2\\pi n}\\,(n/e)^n.",
  },
};

export default text;
