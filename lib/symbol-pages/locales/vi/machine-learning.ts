import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/machine-learning/<slug>. */
const text: SymbolPageTranslations = {
  "expectation": {
    name: "Kỳ vọng",
    meaning: "Chữ E kiểu bảng đen, ký hiệu chuẩn cho giá trị kỳ vọng của một biến ngẫu nhiên.",
    usage: "Kỳ vọng xuất hiện khắp nơi trong xác suất và học máy: \\mathbb{E}[X] = \\sum_x x\\,p(x), rủi ro \\mathbb{E}_{(x,y)\\sim\\mathcal{D}}[\\ell(f(x),y)], hay phương sai dưới dạng \\mathbb{E}[X^2] - \\mathbb{E}[X]^2. Hãy đặt phân phối ở chỉ số dưới để làm rõ nguồn gốc của tính ngẫu nhiên. Các sách cũ dùng chữ E thẳng thông thường hoặc \\operatorname{E}; cả hai đều ổn nếu dùng nhất quán. Lưu ý rằng \\mathbb chỉ cung cấp chữ hoa, nên \\mathbb{e} cho ra ký tự vô nghĩa. Dùng ngoặc vuông cho đối số và \\left[ \\right] khi bên trong có phân số cao. Định nghĩa một macro như \\newcommand{\\E}{\\mathbb{E}} giúp ký hiệu đồng nhất.",
  },
  "kl-divergence": {
    name: "Độ phân kỳ KL",
    meaning: "Độ phân kỳ Kullback-Leibler của Q so với P: lượng mất mát log kỳ vọng tăng thêm khi dùng Q thay cho phân phối thực P.",
    usage: "Độ phân kỳ KL là D_{\\text{KL}}(P \\| Q) = \\sum_x P(x) \\log \\frac{P(x)}{Q(x)}, đóng vai trò trung tâm trong suy luận biến phân, ELBO và điều chuẩn chính sách trong học tăng cường. Nó không đối xứng, nên thứ tự của P và Q là quan trọng, và thanh kép ngăn cách chúng. \\| là một ký hiệu thông thường không có khoảng trắng xung quanh, có thể trông chật chội; nhiều tác giả viết \\parallel, vốn có khoảng cách quan hệ, hoặc thêm \\, ở hai bên. \\text{KL} ở chỉ số dưới kế thừa phông chữ xung quanh, nên \\mathrm{KL} an toàn hơn bên trong văn bản định lý in nghiêng. Với phân số lớn bên trong, dùng \\left( \\right).",
  },
  "kl-divergence-short-form": {
    name: "Độ phân kỳ KL (dạng rút gọn)",
    meaning: "Ký hiệu rút gọn cho độ phân kỳ Kullback-Leibler giữa hai phân phối P và Q, không có tiền tố D.",
    usage: "Nhiều bài báo học máy bỏ chữ D và viết \\text{KL}(P \\| Q), đặc biệt trong các hàm mất mát như mục tiêu của VAE với số hạng \\text{KL}(q_\\phi(z|x) \\| p(z)). Nó có nghĩa hoàn toàn giống D_{\\text{KL}}(P \\| Q), kể cả tính bất đối xứng: KL thuận có xu hướng bao phủ khối lượng, KL nghịch có xu hướng bám theo mode. Vì \\text{} sao chép phông chữ của văn bản xung quanh, KL có thể bị in nghiêng bên trong một định lý; \\operatorname{KL} hoặc \\mathrm{KL} khắc phục điều đó, và \\operatorname còn thêm khoảng cách phù hợp trước dấu ngoặc. Hãy cân nhắc \\,\\|\\, hoặc \\parallel để các thanh thoáng hơn.",
  },
  "argmax": {
    name: "Argmax",
    meaning: "Đối số của cực đại: giá trị đầu vào tại đó hàm số đạt giá trị lớn nhất.",
    usage: "Viết dưới dạng \\arg\\max, nó kết hợp hai toán tử định nghĩa sẵn: \\arg, không bao giờ nhận cận, và \\max, có nhận cận. Kết quả là ở chế độ hiển thị, chỉ số dưới chỉ nằm dưới max, nên ràng buộc bị lệch tâm. Cách gọn hơn là \\operatorname*{arg\\,max}, hoặc định nghĩa \\DeclareMathOperator*{\\argmax}{arg\\,max} trong phần mở đầu, để chỉ số dưới nằm chính giữa bên dưới cả từ. Nó xuất hiện trong các quy tắc phân loại như \\hat{y} = \\arg\\max_k p(k|x), trong ước lượng hợp lý cực đại và trong các chính sách tham lam của học tăng cường. Lưu ý rằng nó trả về một tập hợp khi điểm cực đại không duy nhất.",
  },
  "argmin": {
    name: "Argmin",
    meaning: "Đối số của cực tiểu: giá trị đầu vào tại đó hàm số đạt giá trị nhỏ nhất.",
    usage: "\\arg\\min là cách hầu hết các bài toán tối ưu và học máy định nghĩa nghiệm, chẳng hạn bình phương tối thiểu \\hat{\\beta} = \\arg\\min_\\beta \\|y - X\\beta\\|_2^2 hay phép gán cụm trong k-means. Gõ theo cách này, nó là \\arg theo sau bởi \\min, nên trong toán hiển thị chỉ số dưới nằm giữa min thay vì giữa cả cụm từ. Để chỉ số dưới nằm chính giữa, dùng \\operatorname*{arg\\,min} hoặc khai báo một toán tử có dấu sao trong phần mở đầu. Một số tác giả viết argmin liền một từ không có khoảng trắng; khoảng hẹp trong arg\\,min theo kiểu phổ biến nhất. Hãy nhớ kết quả có thể là một tập hợp nếu điểm cực tiểu không duy nhất.",
  },
  "argmax-subscript": {
    name: "Argmax có chỉ số dưới",
    meaning: "Argmax với biến tối ưu theta ở chỉ số dưới: giá trị tham số làm cực đại một hàm mục tiêu.",
    usage: "Dạng này nêu rõ biến được tối ưu, cách chuẩn để viết ước lượng hợp lý cực đại, \\hat{\\theta}_{\\text{MLE}} = \\arg\\max_\\theta \\sum_i \\log p(x_i|\\theta), và ước lượng MAP. Vì chỉ số dưới chỉ gắn với \\max, ở chế độ hiển thị theta nằm dưới max chứ không nằm giữa toàn bộ arg max. Thay bằng \\operatorname*{arg\\,max}_{\\theta} hoặc một \\argmax đã khai báo cho vị trí chính giữa, và đó là điều hầu hết các tạp chí mong đợi. Trong toán nội dòng, chỉ số dưới luôn nằm bên phải. Bạn cũng có thể liệt kê ràng buộc ở chỉ số dưới, như \\theta \\in \\Theta, dùng \\substack cho nhiều dòng.",
  },
  "argmin-subscript": {
    name: "Argmin có chỉ số dưới",
    meaning: "Argmin theo theta: giá trị tham số làm cực tiểu một hàm mất mát hay hàm mục tiêu.",
    usage: "Đây là cách thường viết bài toán cực tiểu hóa rủi ro thực nghiệm: \\theta^* = \\arg\\min_\\theta \\frac{1}{N}\\sum_i \\ell(f_\\theta(x_i), y_i). Ở chế độ hiển thị, chỉ số dưới chỉ nằm dưới min, trông hơi lệch tâm; \\operatorname*{arg\\,min}_{\\theta} khắc phục điều đó và giữ khoảng cách nhất quán. Nếu bạn viết nó thường xuyên, một macro trong phần mở đầu giúp tiết kiệm công gõ và bảo đảm kết quả giống hệt nhau. Các hàm mục tiêu có điều chuẩn thường thêm một số hạng phạt, như trong hồi quy ridge hoặc lasso. Khi điểm cực tiểu duy nhất, dấu bằng là ổn; nếu không, \\in là quan hệ chính xác hơn vì argmin trả về một tập hợp.",
  },
  "softmax": {
    name: "Hàm softmax",
    meaning: "Tên hàm softmax: biến một vectơ logit thành một phân phối xác suất bằng cách lấy mũ rồi chuẩn hóa.",
    usage: "Softmax được định nghĩa theo từng thành phần là \\text{softmax}(z)_i = e^{z_i} / \\sum_j e^{z_j}, và nó khép lại gần như mọi bộ phân loại cũng như cơ chế chú ý, với \\text{softmax}(QK^\\top/\\sqrt{d_k})V. Vì \\text{} dùng phông chữ văn bản xung quanh, nó bị in nghiêng bên trong môi trường định lý hoặc nhấn mạnh. \\operatorname{softmax} thường là lựa chọn tốt hơn: nó luôn là chữ đứng và thêm khoảng cách toán tử trước dấu ngoặc, giống như \\sin. Tham số nhiệt độ được viết là \\text{softmax}(z/T). Dùng \\left( \\right) khi đối số chứa phân số. Trong các bài báo nặng về mã nguồn, hãy nói rõ softmax chuẩn hóa theo trục nào, chẳng hạn chiều lớp.",
  },
  "relu": {
    name: "Hàm ReLU",
    meaning: "Tên hàm kích hoạt đơn vị tuyến tính chỉnh lưu, cho đầu ra max(0, x) và triệt tiêu các đầu vào âm.",
    usage: "ReLU được định nghĩa là \\text{ReLU}(x) = \\max(0, x), với đạo hàm bằng 1 cho đầu vào dương và 0 cho đầu vào âm. Đây là hàm kích hoạt mặc định cho các lớp ẩn trong mạng hiện đại; các biến thể gồm Leaky ReLU, \\max(\\alpha x, x), và GELU. Viết \\text{ReLU} vẫn được, nhưng nó theo kiểu văn bản xung quanh, nên trong môi trường in nghiêng nó sẽ bị nghiêng; \\operatorname{ReLU} hoặc \\mathrm{ReLU} luôn đứng thẳng, và \\operatorname còn xử lý khoảng cách trước đối số. Khi áp dụng cho một vectơ, hãy nói rõ nó tác động theo từng phần tử, như trong \\text{ReLU}(\\mathbf{W}\\mathbf{x} + \\mathbf{b}).",
  },
  "gradient-of-l": {
    name: "Gradient của hàm mất mát",
    meaning: "Gradient của hàm mất mát L theo các tham số theta: vectơ các đạo hàm riêng dùng trong huấn luyện.",
    usage: "Đây là đại lượng mà lan truyền ngược tính toán, và nó điều khiển bước cập nhật hạ gradient \\theta \\leftarrow \\theta - \\eta \\nabla_\\theta \\mathcal{L}. Chỉ số dưới của \\nabla cho biết lấy đạo hàm theo biến nào, điều quan trọng khi hàm mất mát phụ thuộc cả vào tham số lẫn đầu vào, chẳng hạn \\nabla_x \\mathcal{L} trong các tấn công đối kháng. \\mathcal cho chữ L dạng viết tay và chỉ hỗ trợ chữ hoa. Trong văn bản nội dòng, chỉ số dưới nằm ở góc dưới bên phải của nabla, đó là cách chuẩn. Với các ước lượng ngẫu nhiên, dấu mũ rất hữu ích: \\hat{\\nabla}_\\theta \\mathcal{L} hoặc \\tilde{g}.",
  },
  "partial-derivative": {
    name: "Đạo hàm riêng",
    meaning: "Đạo hàm riêng của hàm mất mát L theo tham số theta, độ nhạy của hàm mất mát đối với từng tham số.",
    usage: "Phân số này là khối xây dựng vô hướng của lan truyền ngược; quy tắc dây chuyền trở thành \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\frac{\\partial a}{\\partial w}. Dùng \\partial, chữ d cong, cho đạo hàm riêng và chữ d thường cho đạo hàm toàn phần. Trong văn bản, \\frac co lại cho vừa dòng, thường khó đọc; \\tfrac, dạng gạch chéo \\partial \\mathcal{L}/\\partial \\theta, hoặc \\dfrac ở chế độ hiển thị có thể tốt hơn. Khi dùng lặp lại, một macro hoặc lệnh \\pdv kiểu gói physics giúp gõ ngắn gọn. Khi theta là một vectơ, nhiều tác giả chuyển sang \\nabla_\\theta \\mathcal{L}.",
  },
  "theta-star": {
    name: "Tham số tối ưu theta sao",
    meaning: "Theta với dấu sao ở chỉ số trên: giá trị tham số tối ưu, thường là điểm cực tiểu của hàm mất mát.",
    usage: "Ký hiệu có dấu sao đánh dấu điểm tối ưu, như trong \\theta^* = \\arg\\min_\\theta \\mathcal{L}(\\theta), và các kết quả hội tụ chặn \\|\\theta_t - \\theta^*\\|. Gõ ^* nâng một dấu sao cỡ chỉ số trên. Các lựa chọn khác là ^\\ast, giống hệt, và ^\\star, cho ngôi sao năm cánh mà một số tác giả ưa dùng vì dấu sao có thể bị nhầm với liên hợp hoặc toán tử liên hợp. Hãy phân biệt nó với \\hat{\\theta}, theo quy ước là một ước lượng từ dữ liệu chứ không phải điểm tối ưu thực. Nếu theta còn mang chỉ số dưới, thứ tự nào cũng được, vì \\theta^*_t và \\theta_t^* hiển thị như nhau.",
  },
  "weight-matrix": {
    name: "Ma trận trọng số",
    meaning: "Chữ W in đậm đứng, ký hiệu quy ước cho ma trận trọng số trong một lớp mạng nơ-ron.",
    usage: "Chữ hoa in đậm biểu thị ma trận và chữ thường in đậm biểu thị vectơ, nên một lớp kết nối đầy đủ là \\mathbf{y} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, với trọng số riêng cho từng lớp viết là \\mathbf{W}^{(l)} hoặc \\mathbf{W}_l. \\mathbf tạo chữ Latinh đậm đứng; nó không làm đậm chữ Hy Lạp hay hầu hết các ký hiệu, nên hãy dùng \\boldsymbol hoặc \\bm cho \\boldsymbol{\\Sigma} hay một \\theta in đậm. Nhiều bài báo học sâu bỏ hẳn chữ đậm và viết W; hãy chọn một quy ước và giữ nguyên xuyên suốt. Chuyển vị thường viết là \\mathbf{W}^\\top, dễ đọc hơn ^T.",
  },
  "bias-vector": {
    name: "Vectơ độ lệch",
    meaning: "Chữ b thường in đậm, ký hiệu thông dụng cho vectơ độ lệch được cộng thêm sau một phép biến đổi tuyến tính.",
    usage: "Độ lệch dịch chuyển giá trị tiền kích hoạt của mỗi nơ-ron, như trong \\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}, và phiên bản theo từng lớp được viết là \\mathbf{b}^{(l)}. Chữ thường in đậm theo quy ước báo hiệu một vectơ cột. \\mathbf cho chữ đậm đứng; nếu bạn muốn vectơ đậm nghiêng như một số tạp chí vật lý, hãy dùng \\boldsymbol{b} hoặc \\bm{b}. Hãy nhất quán về chỉ số: phần tử độ lệch thứ i là b_i in nghiêng thường, không đậm, vì nó là một số vô hướng. Trong các mô hình tuyến tính, hệ số chặn thường viết là b hoặc w_0 thay vì một vectơ in đậm.",
  },
  "cross-entropy": {
    name: "Entropy chéo",
    meaning: "Entropy chéo giữa phân phối thực p và mô hình q: độ dài mã kỳ vọng khi mã hóa p bằng q.",
    usage: "Entropy chéo là H(p, q) = -\\sum_x p(x) \\log q(x), và nó chính là hàm mất mát cho bài toán phân loại: với nhãn one-hot, nó rút gọn thành -\\log q(y). Nó phân tách thành H(p, q) = H(p) + D_{\\text{KL}}(p \\| q), điều này giải thích vì sao cực tiểu hóa nó theo q cũng cực tiểu hóa độ phân kỳ KL. Hãy cẩn thận với xung đột ký hiệu: H(X, Y) với biến ngẫu nhiên thường có nghĩa là entropy đồng thời, nên một số tác giả viết H_\\times(p, q) hoặc \\mathrm{CE}(p, q) cho rõ ràng. Dấu phẩy có khoảng cách dấu câu bình thường, nên không cần chỉnh tay.",
  },
  "entropy": {
    name: "Entropy",
    meaning: "Entropy Shannon của biến ngẫu nhiên X: độ bất định trung bình, hay lượng thông tin, của các kết quả của nó.",
    usage: "Entropy là H(X) = -\\sum_x p(x) \\log p(x), đo bằng bit với \\log_2 và bằng nat với \\ln. Nó đạt cực đại ở phân phối đều, khi H(X) = \\log |\\mathcal{X}|, và xuất hiện trong việc chia nhánh cây quyết định qua độ lợi thông tin cũng như trong học tăng cường entropy cực đại. Các đại lượng liên quan dùng chung chữ cái: entropy có điều kiện H(Y|X), entropy đồng thời H(X, Y), và entropy vi phân h(X) cho biến liên tục, thường viết chữ thường. Một số bài báo viết \\mathbb{H}[X] để tránh nhầm với ma trận Hessian H hay một lớp giả thuyết.",
  },
  "mutual-information": {
    name: "Thông tin tương hỗ",
    meaning: "Thông tin tương hỗ giữa X và Y: mức độ mà việc biết một biến ngẫu nhiên làm giảm độ bất định về biến kia.",
    usage: "Thông tin tương hỗ là I(X; Y) = H(X) - H(X \\mid Y) = D_{\\text{KL}}(p(x,y) \\| p(x)p(y)), và nó bằng không khi và chỉ khi X và Y độc lập. Dấu chấm phẩy là quy ước và ngăn cách hai đối số, bản thân chúng có thể là danh sách, như trong I(X_1, X_2; Y); dấu phẩy sẽ gây mơ hồ. TeX coi ; là dấu câu và tự động thêm một khoảng hẹp sau nó. Thông tin tương hỗ có điều kiện được viết là I(X; Y \\mid Z). Nó là nền tảng của nút thắt thông tin, các hàm mất mát tương phản InfoNCE và việc chọn đặc trưng.",
  },
  "log-likelihood": {
    name: "Log hợp lý",
    meaning: "Log hợp lý của dữ liệu x theo các tham số theta, đại lượng được cực đại hóa trong ước lượng hợp lý cực đại.",
    usage: "Lấy logarit biến tích các hàm hợp lý độc lập thành tổng, \\log \\prod_i p(x_i|\\theta) = \\sum_i \\log p(x_i|\\theta), dễ lấy đạo hàm hơn và ổn định về mặt số học. Giá trị đối của nó là hàm mất mát NLL quen thuộc. Một mẹo trình bày: thanh | trần là ký hiệu thông thường, nên không có khoảng trắng ở hai bên; \\mid là một quan hệ và thêm khoảng cách cân đối, cho ra p(x \\mid \\theta). Một số tác giả dùng dấu chấm phẩy, p(x; \\theta), để báo hiệu theta là một tham số cố định chứ không phải biến ngẫu nhiên được lấy điều kiện, đó là cách hiểu theo trường phái tần suất.",
  },
  "probability-distribution": {
    name: "Phân phối xác suất",
    meaning: "Xác suất (mật độ hoặc khối lượng) của x theo phân phối p, ký hiệu cơ bản cho một phân phối trong học máy.",
    usage: "Chữ thường p(x) biểu thị hàm mật độ hoặc hàm khối lượng, còn chữ hoa P(X = x) hoặc \\Pr thường dành cho xác suất của các biến cố. Học máy dùng chồng chữ p thoải mái, để đối số quyết định phân phối nào được nói đến, như p(x) so với p(z); khi điều này gây nhầm lẫn, hãy thêm chỉ số dưới như p_\\theta(x) hoặc p_{\\text{data}}(x). Điều kiện chuẩn hóa đòi hỏi \\sum_x p(x) = 1 hoặc \\int p(x)\\,dx = 1, với một khoảng hẹp \\, trước dx. Việc lấy mẫu được viết là x \\sim p(x), dùng \\sim.",
  },
  "conditional-probability": {
    name: "Xác suất có điều kiện",
    meaning: "Xác suất có điều kiện của y khi biết x, chẳng hạn phân phối nhãn mà một bộ phân loại dự đoán cho một đầu vào.",
    usage: "Mô hình phân biệt học trực tiếp p(y | x), còn mô hình sinh học p(x | y) và p(y) rồi áp dụng quy tắc Bayes, p(y|x) = p(x|y)p(y)/p(x). Thanh dọc trần gõ bằng | là ký tự thông thường và không có khoảng trắng xung quanh; \\mid là một quan hệ và cho ra p(y \\mid x), dễ đọc hơn và là điều mà hầu hết các hướng dẫn trình bày khuyến nghị. Với biểu thức điều kiện cao, \\middle| giữa \\left( và \\right) co giãn thanh dọc theo dấu ngoặc. Chỉ số dưới như p_\\theta(y \\mid x) cho biết các tham số của mô hình.",
  },
  "sum-over-classes": {
    name: "Tổng theo các lớp",
    meaning: "Phép tổng theo các lớp c từ 1 đến C, dùng trong các hàm mất mát đa lớp và trong chuẩn hóa xác suất.",
    usage: "Tổng theo các lớp xuất hiện trong entropy chéo phân loại, -\\sum_{c=1}^{C} y_c \\log \\hat{y}_c, và ở mẫu số của softmax. Trong toán hiển thị, các cận nằm trên và dưới chữ sigma lớn; trong dòng văn bản chúng nằm bên phải với cỡ chữ nhỏ hơn, giúp tiết kiệm chiều cao dòng. Ép vị trí kiểu hiển thị trong dòng bằng \\sum\\limits, hoặc ngược lại bằng \\nolimits. Dùng C cho số lớp và c cho chỉ số là quy ước phổ biến; chỉ cần đừng dùng lại C cho chi phí hay hằng số trong cùng phương trình. Ký hiệu \\Sigma là một chữ cái Hy Lạp và không nên thay cho \\sum.",
  },
  "product-over-samples": {
    name: "Tích theo các mẫu",
    meaning: "Phép tích theo các mẫu i từ 1 đến N, thường là hàm hợp lý của một tập dữ liệu độc lập cùng phân phối.",
    usage: "Với các mẫu độc lập, hàm hợp lý phân tích thành \\prod_{i=1}^{N} p(x_i \\mid \\theta), và lấy logarit sẽ biến nó thành một tổng. \\prod là toán tử lớn pi hoa, có kích thước cho chế độ hiển thị; đừng thay bằng \\Pi, chữ cái Hy Lạp, vốn nhỏ và không có cận. Toán hiển thị đặt cận ở trên và dưới, còn văn bản nội dòng đặt chúng sang bên; \\prod\\limits ghi đè điều đó. Với đối tích, \\coprod là ký hiệu lộn ngược tương ứng. Trên thực tế, các tích dài không ổn định về mặt số học, đó là thêm một lý do khiến các bài báo thường chuyển sang dạng logarit.",
  },
  "l1-norm": {
    name: "Chuẩn L1",
    meaning: "Chuẩn L1 của theta: tổng các giá trị tuyệt đối của các phần tử.",
    usage: "Chuẩn L1, \\|\\theta\\|_1 = \\sum_i |\\theta_i|, là số hạng phạt của lasso và thúc đẩy nghiệm thưa vì quả cầu đơn vị của nó có các góc nằm trên các trục. \\| cho thanh kép nhưng coi chúng là ký hiệu thông thường, nên khoảng cách có thể sai khi theo sau là dấu trừ; \\lVert \\theta \\rVert_1 đánh dấu chúng là dấu bao trái và phải, cho khoảng cách đúng. Với đối số cao, dùng \\left\\| ... \\right\\| để co giãn. Nhiều bài báo định nghĩa một macro \\norm qua \\DeclarePairedDelimiter của gói mathtools để nhất quán. Đừng nhầm với |\\theta|, ký hiệu giá trị tuyệt đối hoặc lực lượng.",
  },
  "l2-norm": {
    name: "Chuẩn L2",
    meaning: "Chuẩn Euclid (L2) của theta: căn bậc hai của tổng bình phương các phần tử.",
    usage: "Chuẩn L2 \\|\\theta\\|_2 = \\sqrt{\\sum_i \\theta_i^2} đo độ dài, và bình phương của nó xuất hiện dưới dạng số hạng phạt ridge hay suy giảm trọng số \\lambda\\|\\theta\\|_2^2. Lưu ý thứ tự các chỉ số: \\|\\theta\\|_2^2 là bình phương của chuẩn, và TeX xếp chỉ số dưới và chỉ số trên chồng lên nhau gọn gàng. Nhiều tác giả bỏ chỉ số 2 khi ngữ cảnh đã rõ. Để có khoảng cách dấu bao tốt hơn, dùng \\lVert và \\rVert thay cho \\|, và \\left\\| \\right\\| cho nội dung cao như phân số. Với ma trận, \\|A\\|_2 thường có nghĩa là chuẩn phổ, không phải chuẩn theo từng phần tử, vốn là chuẩn Frobenius.",
  },
  "frobenius-norm": {
    name: "Chuẩn Frobenius",
    meaning: "Chuẩn Frobenius của ma trận W: căn bậc hai của tổng bình phương tất cả các phần tử.",
    usage: "Chuẩn Frobenius là \\|\\mathbf{W}\\|_F = \\sqrt{\\sum_{i,j} w_{ij}^2} = \\sqrt{\\operatorname{tr}(\\mathbf{W}^\\top \\mathbf{W})}, phiên bản ma trận của chuẩn L2 cho vectơ. Nó được dùng cho suy giảm trọng số trên ma trận, sai số xấp xỉ hạng thấp và các hàm mục tiêu phân tích ma trận. Nó khác với chuẩn phổ \\|\\mathbf{W}\\|_2, tức giá trị kỳ dị lớn nhất. Chỉ số dưới F là một chữ nghiêng thông thường; một số người viết \\mathrm{F}. Cũng như với chuẩn vectơ, \\lVert và \\rVert cho khoảng cách tốt hơn \\|, đặc biệt khi chuẩn được bình phương hoặc có hệ số đứng trước.",
  },
};

export default text;
