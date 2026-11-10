import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/tensors/<slug>. */
const text: SymbolPageTranslations = {
  "tensor": {
    name: "Tenxơ tổng quát",
    meaning: "Một tenxơ tổng quát loại (2,2), với hai chỉ số trên (phản biến) và hai chỉ số dưới (hiệp biến).",
    usage: "Mỗi chỉ số trên biến đổi theo ma trận Jacobi và mỗi chỉ số dưới theo ma trận nghịch đảo của nó, nên khi co một chỉ số trên với một chỉ số dưới ta được kết quả không phụ thuộc hệ tọa độ. Khi viết T^{ij}_{kl}, các chỉ số dưới nằm ngay dưới các chỉ số trên, làm mất thông tin về thứ tự chỉ số; với tenxơ không đối xứng, hãy viết T^{ij}{}_{kl} để khối chỉ số dưới bắt đầu sau khối chỉ số trên. Tenxơ Riemann R^i{}_{jkl} và tenxơ đàn hồi C_{ijkl} là những ví dụ thường gặp. Chỉ số mặc định in nghiêng; hãy giữ nguyên như vậy trừ khi chúng là nhãn chứ không phải vị trí của tenxơ.",
  },
  "covariant-index": {
    name: "Chỉ số hiệp biến",
    meaning: "Tenxơ có hai chỉ số dưới, tức tenxơ hiệp biến hạng 2, chẳng hạn một metric, một tenxơ ứng suất hoặc một dạng song tuyến tính.",
    usage: "Chỉ số dưới biến đổi theo ma trận Jacobi nghịch đảo, T'_{ij} = \\frac{\\partial x^k}{\\partial x'^i}\\frac{\\partial x^l}{\\partial x'^j} T_{kl}, cùng quy tắc như gradient. Các ví dụ gồm metric g_{ij}, tenxơ Ricci R_{ij} và ứng suất Cauchy \\sigma_{ij}. Một tenxơ hiệp biến hạng 2 tác động lên hai vectơ để cho một số, T_{ij} u^i v^j. Trong không gian Euclid với tọa độ Descartes, sự phân biệt chỉ số trên và dưới biến mất, vì thế các giáo trình kỹ thuật thường viết mọi chỉ số ở dưới. Mọi tenxơ như vậy tách thành phần đối xứng và phần phản đối xứng, T_{ij} = T_{(ij)} + T_{[ij]}.",
  },
  "contravariant-index": {
    name: "Chỉ số phản biến",
    meaning: "Tenxơ có hai chỉ số trên: một tenxơ phản biến hạng 2 như metric nghịch đảo hoặc tenxơ năng lượng - động lượng.",
    usage: "Chỉ số trên biến đổi giống các thành phần của vectơ, T'^{ij} = \\frac{\\partial x'^i}{\\partial x^k}\\frac{\\partial x'^j}{\\partial x^l} T^{kl}. Tenxơ năng lượng - động lượng T^{\\mu\\nu} là ví dụ chuẩn trong vật lý, với định luật bảo toàn \\partial_\\mu T^{\\mu\\nu} = 0 trong không - thời gian phẳng. Đặt cả hai chỉ số trong một cặp ngoặc nhọn, T^{ij}; viết T^i^j gây lỗi chỉ số trên kép. Khi cần thêm dấu phẩy trên, T'^{ij} vẫn hoạt động vì LaTeX gộp dấu phẩy trên với chỉ số trên theo sau. Co với hai đối vectơ, T^{ij}\\alpha_i\\beta_j, cho ra một vô hướng, và metric nghịch đảo g^{ij} là ví dụ phổ biến nhất trong hình học.",
  },
  "mixed-tensor": {
    name: "Tenxơ hỗn hợp",
    meaning: "Tenxơ hỗn hợp loại (1,1), với một chỉ số trên và một chỉ số dưới, tương đương với một ánh xạ tuyến tính trên các vectơ.",
    usage: "Một tenxơ (1,1) biến vectơ v^j thành T^i_j v^j, nên trong một cơ sở nó chỉ là một ma trận, và vết T^i_i của nó không phụ thuộc hệ tọa độ. Với T^i_j, hai chỉ số được xếp chồng theo chiều dọc, điều này ổn với delta Kronecker nhưng gây mơ hồ trong các trường hợp khác, vì T^i{}_j và T_j{}^i khác nhau sau khi hạ chỉ số bằng metric. Mẹo dùng nhóm rỗng {} giúp đặt chúng so le. Hạ chỉ số trên bằng metric cho ra một tenxơ (0,2), T_{kj} = g_{ki} T^i{}_j, và dạng so le cho thấy vị trí nào đã được dịch chuyển.",
  },
  "kronecker-delta": {
    name: "Delta Kronecker",
    meaning: "Delta Kronecker: bằng 1 khi hai chỉ số bằng nhau và bằng 0 trong trường hợp ngược lại, là các thành phần của ánh xạ đồng nhất.",
    usage: "Nó hoạt động như một phép thay chỉ số, \\delta^i_j v^j = v^i, và vết của nó trong n chiều là \\delta^i_i = n. Nó cũng biểu diễn tính đối ngẫu của các cơ sở, e^i(e_j) = \\delta^i_j, và hệ thức của metric nghịch đảo g^{ik} g_{kj} = \\delta^i_j. Vì nó đối xứng, việc xếp chồng chỉ số như \\delta^i_j không gây hại, khác với tenxơ hỗn hợp tổng quát. Trong hệ tọa độ Descartes, nó thường được viết \\delta_{ij} với cả hai chỉ số ở dưới. Đừng nhầm nó với hàm delta Dirac \\delta(x).",
  },
  "levi-civita": {
    name: "Ký hiệu Levi-Civita",
    meaning: "Ký hiệu Levi-Civita trong ba chiều: +1 với hoán vị chẵn của 123, -1 với hoán vị lẻ, 0 nếu có chỉ số lặp lại.",
    usage: "Nó biểu diễn tích có hướng và rôta dưới dạng chỉ số, (\\mathbf{a} \\times \\mathbf{b})_i = \\epsilon_{ijk} a_j b_k, và định thức dưới dạng \\det A = \\epsilon_{ijk} A_{1i} A_{2j} A_{3k}. Đồng nhất thức co \\epsilon_{ijk}\\epsilon_{imn} = \\delta_{jm}\\delta_{kn} - \\delta_{jn}\\delta_{km} được dùng liên tục trong các chứng minh của giải tích vectơ. Nhiều tác giả ưa dùng \\varepsilon_{ijk}, chữ epsilon cong, để dành \\epsilon cho các đại lượng nhỏ; hãy chọn một và dùng nhất quán. Trên không gian cong, nó là một mật độ tenxơ, và tenxơ thực sự mang thêm thừa số \\sqrt{g}.",
  },
  "einstein-summation": {
    name: "Quy ước tổng Einstein",
    meaning: "Quy ước lấy tổng Einstein: một chỉ số lặp lại ở trên và ở dưới được hiểu là lấy tổng, nên A^i B_i có nghĩa là tổng theo i.",
    usage: "Quy ước này cho phép A^i B_i thay cho \\sum_i A^i B_i, phép ghép vô hướng của một vectơ với một đối vectơ, mà không cần viết dấu tổng. Mỗi chỉ số lấy tổng phải xuất hiện đúng một lần ở trên và một lần ở dưới; một chỉ số xuất hiện ba lần là dấu hiệu có lỗi. Các chỉ số tự do phải khớp ở hai vế của phương trình, như trong v^i = T^i_j u^j. Khi người đọc có thể chưa quen với quy ước này, hãy phát biểu nó một lần và viết dạng \\sum tường minh trong phương trình đầu tiên.",
  },
  "tensor-product": {
    name: "Tích tenxơ",
    meaning: "Tích tenxơ của A và B, kết hợp hai tenxơ hoặc hai không gian vectơ thành một đối tượng có hạng hoặc số chiều cao hơn.",
    usage: "Với không gian vectơ, \\dim(V \\otimes W) = \\dim V \\cdot \\dim W, còn với tenxơ thì các thành phần nhân với nhau, (A \\otimes B)^{ij} = A^i B^j. Với ma trận, cùng ký hiệu này biểu thị tích Kronecker, một ma trận khối có các khối a_{ij}B. Cơ học lượng tử dùng nó cho các hệ phức hợp, |\\psi\\rangle \\otimes |\\phi\\rangle. \\otimes là toán tử hai ngôi với khoảng cách tự động; với tích trên một tập chỉ số, hãy dùng toán tử lớn \\bigotimes_{i=1}^n V_i, và với các thừa số lặp lại thì dùng V^{\\otimes k}.",
  },
  "contraction": {
    name: "Phép co tenxơ",
    meaning: "Phép co một tenxơ hỗn hợp: lấy tổng theo một chỉ số lặp lại ở trên và ở dưới, cho ra vết của nó.",
    usage: "Cho một chỉ số trên bằng một chỉ số dưới rồi lấy tổng sẽ loại bỏ cả hai, làm hạng giảm đi hai; với tenxơ (1,1), kết quả T^i_i = \\operatorname{tr} T là một vô hướng. Tenxơ Ricci là phép co của tenxơ Riemann, và độ cong vô hướng lại co tiếp với metric, R = g^{ij}R_{ij}. Chỉ có thể co một chỉ số trên với một chỉ số dưới; co hai chỉ số dưới cần đến metric. Hãy viết \\operatorname{tr} thay vì tr thông thường để vết được in đứng với khoảng cách của toán tử.",
  },
  "metric-lowering": {
    name: "Hạ chỉ số bằng metric",
    meaning: "Phép hạ chỉ số: metric chuyển các thành phần phản biến v^j của một vectơ thành các thành phần hiệp biến v_i.",
    usage: "Đây là đẳng cấu âm nhạc giáng, thường viết v^\\flat, đồng nhất vectơ với đối vectơ. Trong không gian Euclid với tọa độ Descartes, g_{ij} = \\delta_{ij}, nên việc hạ chỉ số không làm thay đổi giá trị số; trong không gian Minkowski với dấu (-,+,+,+), nó đổi dấu thành phần thời gian. Chỉ số tự do i phải khớp ở hai vế, còn j được lấy tổng. Với một tenxơ đầy đủ, hạ từng chỉ số riêng rẽ, T_{ij} = g_{ik} T^k{}_j, và chú ý thứ tự các vị trí. Lệnh \\flat dùng trong v^\\flat là dấu giáng trong âm nhạc, có sẵn trong chế độ toán tiêu chuẩn.",
  },
  "metric-raising": {
    name: "Nâng chỉ số bằng metric",
    meaning: "Phép nâng chỉ số: metric nghịch đảo đưa các thành phần hiệp biến v_j trở lại thành các thành phần phản biến v^i.",
    usage: "Nâng chỉ số là đẳng cấu âm nhạc thăng, \\alpha^\\sharp, và đó là cách dựng vectơ gradient từ vi phân: (\\operatorname{grad} f)^i = g^{ij}\\partial_j f. Nâng rồi hạ chỉ số trả lại các thành phần ban đầu vì g^{ij} g_{jk} = \\delta^i_k. Trong thuyết tương đối, p^\\mu = g^{\\mu\\nu} p_\\nu chuyển đối vectơ bốn-động lượng thành vectơ. Hãy viết metric nghịch đảo với chỉ số trên, không bao giờ viết g^{-1}_{ij}, vì cách viết đó gợi ý sai vị trí chỉ số. Lệnh \\sharp cho dấu thăng tương ứng, và với metric chéo thì chỉ còn lại số hạng j = i.",
  },
  "partial-derivative": {
    name: "Đạo hàm riêng",
    meaning: "Cách viết tắt của đạo hàm riêng theo tọa độ x^i, cũng dùng cho các vectơ cơ sở tọa độ.",
    usage: "Viết \\partial_i f thay vì \\frac{\\partial f}{\\partial x^i} giúp các công thức nhiều chỉ số gọn hơn, và trong hình học \\partial_i còn biểu thị trường vectơ cơ sở \\partial/\\partial x^i. Thuyết tương đối dùng \\partial_\\mu trên không - thời gian, với toán tử d'Alembert \\partial_\\mu\\partial^\\mu. Đạo hàm riêng của các thành phần tenxơ không phải là tenxơ trong tọa độ cong; hãy thay \\partial_i bằng \\nabla_i để khắc phục. Chỉ số dưới có dấu phẩy, f_{,i}, là cách viết tương đương truyền thống. Hãy dùng \\partial, không dùng d hay \\delta, cho đạo hàm riêng. Các đạo hàm riêng giao hoán với nhau, \\partial_i\\partial_j = \\partial_j\\partial_i, đó là lý do các trường tọa độ có móc Lie bằng không.",
  },
  "covariant-derivative": {
    name: "Đạo hàm hiệp biến",
    meaning: "Đạo hàm hiệp biến theo hướng tọa độ thứ i, phiên bản mang tính tenxơ thay cho đạo hàm riêng \\partial_i.",
    usage: "Trên một vectơ, nó thêm số hạng hiệu chỉnh Christoffel, \\nabla_i v^j = \\partial_i v^j + \\Gamma^j_{ik} v^k, còn trên một đối vectơ thì dấu đổi ngược, \\nabla_i w_j = \\partial_i w_j - \\Gamma^k_{ij} w_k. Ký hiệu dấu chấm phẩy truyền thống viết v^j{}_{;i} cho cùng đại lượng đó. Tính tương thích với metric nghĩa là \\nabla_k g_{ij} = 0, nên có thể nâng và hạ chỉ số qua \\nabla. Các đạo hàm hiệp biến nói chung không giao hoán; giao hoán tử của chúng trên một vectơ cho ra tenxơ Riemann. Các sách về thuyết tương đối viết cùng toán tử này là \\nabla_\\mu.",
  },
  "symmetrization": {
    name: "Phép đối xứng hóa",
    meaning: "Phần đối xứng của một tenxơ theo các chỉ số i và j, viết bằng ngoặc tròn quanh cặp chỉ số.",
    usage: "Với hai chỉ số, T_{(ij)} = \\tfrac12(T_{ij} + T_{ji}), và với n chỉ số thì tổng chạy trên mọi hoán vị rồi chia cho n!. Ký hiệu ngoặc là chuẩn trong thuyết tương đối rộng, ví dụ phương trình Killing \\nabla_{(i}\\xi_{j)} = 0. Để loại một chỉ số khỏi phép đối xứng hóa, hãy tách nó bằng các vạch đứng, như trong T_{(i|j|k)}. Dấu ngoặc tròn trong chỉ số dưới là ký tự thông thường, nên không cần lệnh đặc biệt nào; chỉ cần lưu ý rằng ngoặc có thể mở và đóng ở những chỉ số dưới khác nhau.",
  },
  "antisymmetrization": {
    name: "Phép phản đối xứng hóa",
    meaning: "Phần phản đối xứng của một tenxơ theo i và j, viết bằng ngoặc vuông quanh các chỉ số.",
    usage: "Với hai chỉ số, T_{[ij]} = \\tfrac12(T_{ij} - T_{ji}), và tổng quát là tổng có dấu trên các hoán vị chia cho n!. Mọi tenxơ hai chỉ số đều tách thành T_{ij} = T_{(ij)} + T_{[ij]}. Đồng nhất thức Bianchi thứ nhất viết là R_{i[jkl]} = 0, và tenxơ trường điện từ thỏa mãn \\partial_{[\\mu}F_{\\nu\\lambda]} = 0. Một số tác giả bỏ thừa số 1/n!, nên hãy nêu rõ cách chuẩn hóa của bạn. Ngoặc vuông trong chỉ số dưới là ký tự thông thường, không cần \\lbrack. Các tenxơ hiệp biến phản đối xứng hoàn toàn tương ứng với các dạng vi phân.",
  },
  "tensor-rank": {
    name: "Loại và hạng của tenxơ",
    meaning: "Loại của một tenxơ: p chỉ số phản biến (trên) và q chỉ số hiệp biến (dưới), đôi khi được gọi một cách không chặt chẽ là hạng của nó.",
    usage: "Một tenxơ (p, q) là một phần tử của V^{\\otimes p} \\otimes (V^*)^{\\otimes q}, nên vectơ có loại (1, 0), đối vectơ (0, 1), ánh xạ tuyến tính (1, 1) và metric (0, 2). Thuật ngữ không thống nhất: một số sách gọi p + q là hạng hoặc bậc và dành từ loại cho cặp số. Phép co biến loại (p, q) thành (p-1, q-1). Trong LaTeX, cặp số chỉ là dấu ngoặc tròn với dấu phẩy; khoảng trắng mảnh sau dấu phẩy được thêm tự động trong chế độ toán, nên đừng thêm khoảng cách.",
  },
  "basis-vector": {
    name: "Vectơ cơ sở",
    meaning: "Các vectơ cơ sở của một không gian vectơ hoặc không gian tiếp xúc, đánh chỉ số dưới để các thành phần mang chỉ số trên.",
    usage: "Một vectơ được khai triển thành v = v^i e_i, ghép chỉ số dưới của cơ sở với chỉ số trên của các thành phần. Trong hình học, cơ sở tọa độ là e_i = \\partial_i, và trong một mục tiêu trực chuẩn g(e_i, e_j) = \\delta_{ij}. Vật lý và kỹ thuật thường viết in đậm \\mathbf{e}_i hoặc có mũ \\hat{e}_i, và dùng \\mathbf{e}_x, \\mathbf{e}_y cho các hướng Descartes. Hãy giữ chỉ số ở dưới; viết e^i cho vectơ cơ sở sẽ xung đột với quy ước cơ sở đối ngẫu. Khi đổi cơ sở e'_i = A^j{}_i e_j, các thành phần biến đổi theo ma trận nghịch đảo.",
  },
  "dual-basis": {
    name: "Cơ sở đối ngẫu",
    meaning: "Các đối vectơ của cơ sở đối ngẫu, xác định bởi e^i(e_j) = \\delta^i_j, dùng để lấy ra các thành phần của một vectơ.",
    usage: "Áp dụng e^i lên một vectơ sẽ lấy ra thành phần thứ i của nó, e^i(v) = v^i, và đối vectơ được khai triển thành \\alpha = \\alpha_i e^i. Với tọa độ, cơ sở đối ngẫu là e^i = dx^i, và trong phương pháp Cartan, đối mục tiêu trực chuẩn e^a cho metric dưới dạng g = \\delta_{ab}\\, e^a \\otimes e^b. Vì chỉ số là chỉ số trên, e^i có thể bị đọc nhầm thành lũy thừa của e; nếu có nguy cơ đó, hãy nói rõ hoặc dùng \\theta^i, một lựa chọn phổ biến cho đối mục tiêu.",
  },
  "component-transform": {
    name: "Quy luật biến đổi thành phần",
    meaning: "Quy luật biến đổi của tenxơ phản biến hạng 2: mỗi chỉ số trên nhận thêm một thừa số của ma trận biến đổi.",
    usage: "Ở đây \\Lambda^i_k là ma trận biến đổi, một phép biến đổi Lorentz trong thuyết tương đối hẹp hoặc ma trận Jacobi \\partial x'^i/\\partial x^k trong trường hợp tổng quát, và các thành phần có dấu phẩy trên thuộc về hệ quy chiếu mới. Tenxơ được định nghĩa là đối tượng tuân theo quy luật này, còn các chỉ số dưới thì biến đổi theo ma trận nghịch đảo. LaTeX gộp dấu phẩy trên và chỉ số trên trong T'^{ij}, nên không cần ngoặc nhọn quanh dấu phẩy trên. Hãy đặt chỉ số so le như \\Lambda^i{}_k khi ma trận không đối xứng, để người đọc biết vị trí nào là hàng.",
  },
};

export default text;
