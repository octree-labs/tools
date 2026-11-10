import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/summation/<slug>. */
const text: SymbolPageTranslations = {
  "summation": {
    name: "Ký hiệu tổng",
    meaning: "Toán tử tổng sigma hoa, dùng để cộng các số hạng của một dãy.",
    usage: "Gắn cận bằng _ và ^: \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}. Ở chế độ hiển thị, cận được căn giữa bên dưới và bên trên một chữ sigma phóng to, còn trong dòng chúng nằm bên cạnh và dấu tổng giữ cỡ nhỏ; \\limits và \\nolimits cho phép thay đổi cách đặt này. Hãy dùng \\sum thay vì \\Sigma, vốn chỉ là chữ cái Hy Lạp, không co giãn và không xếp cận chồng lên nhau. Với điều kiện nhiều dòng dưới dấu tổng, \\substack{0 \\le i \\le m \\\\ 0 < j < n} xếp chúng gọn gàng. Tổng chỉ có chỉ số dưới, \\sum_i, rất phổ biến trong vật lý và học máy khi miền lấy tổng đã rõ ràng.",
  },
  "summation-to-infinity": {
    name: "Tổng đến vô cùng",
    meaning: "Tổng có chỉ số chạy từ n = 0 đến vô cùng, dạng dùng cho chuỗi lũy thừa.",
    usage: "Bắt đầu từ không là điều tự nhiên với chuỗi lũy thừa và chuỗi Taylor: e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} và chuỗi hình học \\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r} với |r| < 1. Hãy kiểm tra kỹ chỉ số bắt đầu, vì chuyển từ n = 0 sang n = 1 làm mất số hạng đầu tiên và thay đổi biểu thức dạng đóng. Ở chế độ hiển thị, cận được xếp chồng; trong dòng, chúng chuyển sang bên cạnh chữ sigma. Khi cận trên là vô cùng, \\sum_{n \\ge 0} là cách viết gọn thay thế. Hàm sinh của một dãy a_n cũng được viết theo cách đó, \\sum_{n=0}^{\\infty} a_n x^n.",
  },
  "product": {
    name: "Ký hiệu tích",
    meaning: "Toán tử tích pi hoa, dùng để nhân các số hạng của một dãy.",
    usage: "Cận hoạt động như với \\sum: n! = \\prod_{k=1}^{n} k, và hàm hợp lý L(\\theta) = \\prod_{i=1}^{n} f(x_i \\mid \\theta) trong thống kê. Nó lớn hơn chữ cái \\Pi và đặt cận ở trên và dưới trong kiểu hiển thị, nên đừng thay nó bằng chữ Hy Lạp. Lấy logarit biến tích thành tổng, \\log\\prod_i a_i = \\sum_i \\log a_i, một bước có mặt trong hầu hết các phép suy ra ước lượng hợp lý cực đại. Tích Descartes của các tập hợp, \\prod_{i \\in I} X_i, dùng cùng lệnh này. Ký hiệu lộn ngược tương ứng của nó, \\coprod, biểu thị đối tích.",
  },
  "coproduct": {
    name: "Đối tích",
    meaning: "Dấu tích lộn ngược biểu thị đối tích, chẳng hạn hợp rời của các tập hợp.",
    usage: "Lý thuyết phạm trù và tô pô đại số dùng \\coprod_{i \\in I} X_i cho đối tích của một họ: hợp rời đối với tập hợp và không gian, tổng trực tiếp đối với nhóm abel hoặc môđun. Đây là một toán tử lớn như \\prod, nên cận được xếp dưới và trên nó trong kiểu hiển thị. Đừng nhầm nó với \\amalg, dạng hai ngôi cỡ nhỏ dành cho đúng hai đối tượng, X \\amalg Y. Hợp rời cũng được viết bằng \\bigsqcup, có hình dạng giống chiếc cốc; hãy chọn ký hiệu mà lĩnh vực của bạn dùng. Cấu trúc đối ngẫu, tích phạm trù, dùng \\prod.",
  },
  "big-union-with-index": {
    name: "Hợp lớn có chỉ số",
    meaning: "Hợp lớn trên một họ tập hợp có chỉ số, từ A_1 đến A_n.",
    usage: "Hợp hữu hạn và hợp đếm được, \\bigcup_{i=1}^{n} A_i hoặc \\bigcup_{n=1}^{\\infty} A_n, xuất hiện trong lý thuyết độ đo khi nói về tính cộng tính đếm được, trong bất đẳng thức hợp của xác suất và trong tô pô với các phủ mở. \\bigcup là toán tử lớn; \\cup là dạng hai ngôi cho hai tập hợp, A \\cup B. Cận được xếp dưới và trên trong chế độ hiển thị và chuyển sang bên cạnh khi viết trong dòng. Tập chỉ số không nhất thiết là số: \\bigcup_{\\alpha \\in \\Lambda} U_\\alpha thường dùng cho các phủ tùy ý. Với hợp của các tập đôi một rời nhau, hãy chuyển sang \\bigsqcup hoặc nói rõ tính rời nhau bằng lời.",
  },
  "big-intersection-with-index": {
    name: "Giao lớn có chỉ số",
    meaning: "Giao lớn trên một họ tập hợp có chỉ số, từ A_1 đến A_n.",
    usage: "Giao của các họ có chỉ số dùng để phát biểu những kết quả như nguyên lý đoạn thắt, \\bigcap_{n=1}^{\\infty} [a_n, b_n] \\neq \\varnothing, hoặc định nghĩa sigma-đại số sinh bởi một họ là giao của mọi sigma-đại số chứa họ đó. Dùng \\bigcap cho các họ và \\cap cho hai tập hợp, A \\cap B. Luật De Morgan liên kết hai toán tử lớn: \\left(\\bigcup_i A_i\\right)^c = \\bigcap_i A_i^c. Ở kiểu hiển thị, chỉ số nằm bên dưới và bên trên; trong dòng, chỉ thêm \\limits khi cần. Giao trên một họ chỉ số rỗng chỉ có nghĩa khi xét trong một tập nền, nên hãy nói rõ tập nền đó là gì.",
  },
  "big-wedge": {
    name: "Hội lớn",
    meaning: "Toán tử wedge cỡ lớn cho phép hội của nhiều mệnh đề hoặc cho lũy thừa ngoài.",
    usage: "Trong logic, \\bigwedge_{i=1}^{n} \\varphi_i là hội của n công thức, dạng n ngôi của \\wedge (hay \\land); dạng chuẩn hội là một \\bigwedge của các mệnh đề tuyển. Trong lý thuyết dàn, nó biểu thị phép gặp, tức cận dưới đúng, của một tập hợp, còn trong hình học vi phân \\bigwedge^k V là lũy thừa ngoài bậc k của một không gian vectơ. Cận hoạt động giống của \\sum: xếp chồng ở chế độ hiển thị, nằm cạnh dấu khi viết trong dòng. Đừng nhầm nó với \\Lambda, chữ hoa Hy Lạp mà một số tác giả dùng cho lũy thừa ngoài ở cỡ thường. Toán tử đối ngẫu của nó là \\bigvee.",
  },
  "big-vee": {
    name: "Tuyển lớn",
    meaning: "Toán tử vee cỡ lớn cho phép tuyển của nhiều mệnh đề hoặc phép nối trong dàn.",
    usage: "Logic dùng \\bigvee_{i=1}^{n} \\varphi_i cho phép tuyển n ngôi, tổng quát hóa \\vee (hay \\lor); dạng chuẩn tuyển đúng là một \\bigvee của các hạng tử \\bigwedge. Trong lý thuyết thứ tự và dàn, \\bigvee S là phép nối hay cận trên đúng của tập S. Là một toán tử lớn, cận của nó xếp chồng ở chế độ hiển thị và chuyển sang bên cạnh khi viết trong dòng. Tránh dùng chữ V hoặc \\vee kèm chỉ số dưới thay cho nó, vì chúng giữ cỡ nhỏ và không đặt cận đúng vị trí. Trong tô pô đại số, \\bigvee_{i} S^1 biểu thị tổng bó của các đường tròn, dán các không gian có điểm gốc tại điểm gốc của chúng.",
  },
  "big-direct-sum": {
    name: "Tổng trực tiếp lớn",
    meaning: "Dấu cộng trong vòng tròn cỡ lớn, biểu thị tổng trực tiếp của một họ không gian hoặc môđun.",
    usage: "Một toán tử chéo hóa được tách không gian của nó thành các không gian riêng, V = \\bigoplus_{\\lambda} E_\\lambda, và vành phân bậc được viết dưới dạng \\bigoplus_{n \\ge 0} R_n. \\oplus là dạng hai ngôi cho hai hạng tử, U \\oplus W. Trong khoa học máy tính và mật mã học, \\bigoplus_{i} x_i thường có nghĩa là phép XOR của nhiều bit, dùng lại cùng một glyph. Cận được xếp chồng trong kiểu hiển thị như \\sum. Lưu ý rằng tổng trực tiếp của vô hạn môđun khác với tích trực tiếp \\prod, vốn cho phép vô hạn thành phần khác không, vì vậy hãy chọn toán tử khớp với cấu trúc bạn xây dựng.",
  },
  "big-tensor-product": {
    name: "Tích tenxơ lớn",
    meaning: "Dấu nhân trong vòng tròn cỡ lớn, biểu thị tích tenxơ của một họ không gian hoặc toán tử.",
    usage: "Điện toán lượng tử viết không gian trạng thái của n qubit là \\bigotimes_{i=1}^{n} \\mathbb{C}^2, và đại số đa tuyến tính xây dựng đại số tenxơ T(V) = \\bigoplus_k V^{\\otimes k}. Dạng hai ngôi \\otimes ghép hai thừa số, A \\otimes B, và cũng biểu thị tích Kronecker của ma trận. Là một toán tử lớn, \\bigotimes nhận cận xếp chồng trong chế độ hiển thị. Hãy giữ dạng chỉ số trên V^{\\otimes n} cho lũy thừa tenxơ lặp lại của một không gian; nó gọn hơn một toán tử lớn có cận. Hãy nêu rõ vành hoặc trường cơ sở khi chưa hiển nhiên, như trong \\otimes_R.",
  },
  "big-circle-dot": {
    name: "Dấu chấm trong vòng tròn cỡ lớn",
    meaning: "Dấu chấm trong vòng tròn cỡ lớn, dùng cho tích từng phần tử hoặc tích đối xứng n ngôi.",
    usage: "\\bigodot là phiên bản toán tử lớn của \\odot. Trong học máy, \\odot là tích Hadamard hay tích từng phần tử, nên \\bigodot_{i=1}^{n} \\mathbf{v}_i có thể biểu thị tích từng phần tử của nhiều vectơ; các bài báo về phân tích tenxơ dùng \\odot cho tích Khatri-Rao, và một số giáo trình đại số dùng nó cho lũy thừa đối xứng. Vì ý nghĩa thay đổi theo lĩnh vực, hãy định nghĩa nó trong phần ký hiệu. Cận được xếp chồng giống của \\sum trong kiểu hiển thị. Đừng nhầm nó với \\bigcirc, một vòng tròn rỗng lớn có khoảng cách của toán tử hai ngôi, không phải toán tử lớn.",
  },
  "big-square-union": {
    name: "Hợp vuông lớn",
    meaning: "Ký hiệu hợp dạng vuông cỡ lớn, biểu thị hợp rời của một họ tập hợp có chỉ số.",
    usage: "Viết X = \\bigsqcup_{i \\in I} X_i cho biết vừa là một hợp vừa là các mảnh đôi một rời nhau, một quy ước phổ biến trong tô pô, lý thuyết độ đo và lý thuyết phạm trù. Dạng hai ngôi là \\sqcup, như trong A \\sqcup B. \\coprod là lựa chọn thay thế mà một số tác giả ưa dùng cho cùng cấu trúc phạm trù, còn riêng \\bigcup không nói gì về tính rời nhau. Trong lý thuyết miền và ngữ nghĩa biểu thị, \\bigsqcup lại biểu thị cận trên nhỏ nhất của một tập định hướng. Là một toán tử lớn, cận của nó xếp chồng trong chế độ hiển thị và nằm bên cạnh khi viết trong dòng.",
  },
  "double-sum": {
    name: "Tổng kép",
    meaning: "Hai tổng lồng nhau, theo i từ 1 đến m và theo j từ 1 đến n, như khi cộng các phần tử của một ma trận.",
    usage: "Tổng kép cộng mọi phần tử của một bảng m hàng n cột, như trong chuẩn Frobenius \\lVert A \\rVert_F^2 = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{ij}^2. LaTeX đặt hai toán tử cạnh nhau với khoảng cách phù hợp, nên không cần thêm khoảng trắng thủ công giữa chúng. Khi hai chỉ số có chung một điều kiện, một dấu duy nhất như \\sum_{i,j} hoặc \\sum_{1 \\le i < j \\le n} gọn hơn, và \\substack xếp nhiều điều kiện dưới một chữ sigma. Đổi thứ tự của tổng kép hữu hạn luôn hợp lệ, nhưng với tổng vô hạn thì cần hội tụ tuyệt đối hoặc các số hạng không âm.",
  },
  "indexed-sum": {
    name: "Tổng theo tập chỉ số",
    meaning: "Tổng trên mọi phần tử k của tập K thay vì trên một khoảng số.",
    usage: "Tổng theo tập chỉ số là tự nhiên khi tập chỉ số không phải là một khoảng: tổng trên các số nguyên tố \\sum_{p \\le x}, trên các ước \\sum_{d \\mid n}, hoặc trên các đỉnh trong bổ đề bắt tay \\sum_{v \\in V} \\deg v = 2|E|. Chúng có nghĩa với mọi tập hữu hạn, và với tập vô hạn khi chuỗi hội tụ tuyệt đối, vì không có thứ tự nào được ngầm định. Với nhiều điều kiện, hãy dùng \\substack, như trong \\sum_{\\substack{k \\in K \\\\ k \\ne 0}}. Ở chế độ hiển thị, điều kiện được căn giữa dưới chữ sigma, nên hãy giữ nó ngắn để tránh khoảng trống rộng quanh toán tử.",
  },
};

export default text;
