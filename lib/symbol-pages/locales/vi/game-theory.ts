import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/game-theory/<slug>. */
const text: SymbolPageTranslations = {
  "strategy": {
    name: "Chiến lược",
    meaning: "Chiến lược của người chơi i: một kế hoạch hành động đầy đủ được chọn từ tập chiến lược S_i của người chơi đó.",
    usage: "Trong trò chơi dạng chuẩn, mỗi người chơi chọn s_i \\in S_i, và lựa chọn chung là một bộ chiến lược s = (s_i, s_{-i}), trong đó s_{-i} gom chiến lược của tất cả những người còn lại. Trong trò chơi dạng mở rộng, một chiến lược thuần chỉ định một hành động tại mọi tập thông tin, kể cả những tập không bao giờ được đi tới. Chỉ số dưới gọi tên người chơi, nên hãy dùng chỉ số trên hoặc dấu phẩy trên, s_i', s_i^*, cho các chiến lược khác của cùng người chơi. Viết s_{-i} có ngoặc nhọn, vì s_-i chỉ đưa dấu trừ vào chỉ số dưới.",
  },
  "strategy-set": {
    name: "Tập chiến lược",
    meaning: "Tập chiến lược của người chơi i: mọi chiến lược thuần mà người chơi đó có thể dùng.",
    usage: "Không gian mọi bộ chiến lược là tích Descartes S = S_1 \\times \\cdots \\times S_n = \\prod_i S_i, và S_{-i} = \\prod_{j \\ne i} S_j. Các tập S_i hữu hạn cho ra trò chơi ma trận; các tập con lồi compact của \\mathbb{R}^k xuất hiện trong cạnh tranh Cournot và các trò chơi liên tục khác. Chiến lược hỗn hợp nằm trong \\Delta(S_i). Hãy viết tập chiến lược bằng chữ hoa và chiến lược bằng chữ thường. Trong trò chơi hợp tác, S thường lại chỉ một liên minh, nên tránh dùng lẫn cả hai nghĩa trong cùng một bài báo.",
  },
  "strategy-profile": {
    name: "Bộ chiến lược",
    meaning: "Bộ chiến lược: một danh sách gồm đúng một chiến lược cho mỗi người trong n người chơi của trò chơi.",
    usage: "Lợi ích được tính trên toàn bộ bộ chiến lược, u_i(s), và phân tích độ lệch tách một bộ chiến lược thành (s_i, s_{-i}). \\ldots đặt các dấu chấm trên đường cơ sở, đúng khi nằm giữa các dấu phẩy; \\cdots đặt chúng ở giữa, phù hợp với tổng như s_1 + \\cdots + s_n. Với amsmath, \\dots tự chọn theo ngữ cảnh. Một số giáo trình viết bộ chiến lược bằng chữ đậm, \\mathbf{s}, để phân biệt với chiến lược s_i của một người chơi. Bộ chiến lược trong đó i chuyển sang s_i' còn những người khác giữ nguyên được viết là (s_i', s_{-i}). Thứ tự người chơi xác định bộ, nên hãy nêu rõ một lần.",
  },
  "payoff-function": {
    name: "Hàm lợi ích",
    meaning: "Hàm lợi ích (hàm thỏa dụng) của người chơi i, gán một số thực cho mỗi bộ chiến lược s.",
    usage: "Về hình thức, u_i: S \\to \\mathbb{R}, và một trò chơi dạng chuẩn là bộ ba (N, (S_i), (u_i)). Chiến lược hỗn hợp mở rộng nó bằng kỳ vọng, u_i(\\sigma) = \\sum_s \\sigma(s)\\, u_i(s). Độ lệch đơn phương được viết u_i(s_i', s_{-i}). Một số lĩnh vực dùng \\pi_i hoặc v_i cho lợi ích; trong trò chơi hợp tác v đã chỉ hàm đặc trưng, nên u_i là lựa chọn an toàn hơn ở đó. Lợi ích chỉ cần là hàm thỏa dụng von Neumann-Morgenstern, nên các phép biến đổi affine dương không làm thay đổi điểm cân bằng. Với hai người chơi, lợi ích thường được trình bày dưới dạng song ma trận.",
  },
  "expected-payoff": {
    name: "Lợi ích kỳ vọng",
    meaning: "Lợi ích kỳ vọng của người chơi i, trung bình có trọng số xác suất của u_i dưới các chiến lược hỗn hợp hoặc nước đi ngẫu nhiên.",
    usage: "Với các chiến lược hỗn hợp độc lập, \\mathbb{E}_\\sigma[u_i] = \\sum_{s} \\prod_j \\sigma_j(s_j)\\, u_i(s), đại lượng mà người chơi tối đa hóa tại cân bằng Nash hỗn hợp. Hãy ghi phân phối ở chỉ số dưới, \\mathbb{E}_{s \\sim \\sigma}[u_i(s)], khi nó không hiển nhiên. Chữ bảng đen \\mathbb{E} là một kiểu viết; \\operatorname{E} và \\mathrm{E} cho chữ E đứng và phổ biến trong kinh tế lượng. Với đối số cao, hãy co giãn dấu ngoặc bằng \\left[ \\right] hoặc \\bigl[ \\bigr]. Khi có nước đi của tự nhiên, như trong trò chơi Bayes, kỳ vọng cũng lấy theo các kiểu người chơi, \\mathbb{E}_\\theta[u_i(s(\\theta), \\theta)]. Hãy dùng ngoặc vuông cho kỳ vọng và ngoặc tròn cho đối số của hàm.",
  },
  "best-response": {
    name: "Phản ứng tốt nhất",
    meaning: "Tương ứng phản ứng tốt nhất: tập các chiến lược tối đa hóa lợi ích của người chơi i trước chiến lược s_{-i} của những người khác.",
    usage: "Nó được định nghĩa là BR_i(s_{-i}) = \\arg\\max_{s_i \\in S_i} u_i(s_i, s_{-i}), và một bộ chiến lược là cân bằng Nash khi và chỉ khi s_i^* \\in BR_i(s^*_{-i}) với mọi i. Nói chung nó có giá trị là tập hợp, vì thế định lý điểm bất động Kakutani, chứ không phải Brouwer, chứng minh sự tồn tại của cân bằng hỗn hợp. Nếu gõ BR_i, TeX sẽ đặt B và R như hai biến nghiêng nhân với nhau; hãy viết \\mathrm{BR}_i hoặc \\operatorname{BR}_i để có chữ đứng. Dùng \\operatorname*{arg\\,max} cho điểm cực đại. Trong trò chơi hữu hạn, phản ứng tốt nhất thuần luôn tồn tại.",
  },
  "nash-equilibrium": {
    name: "Cân bằng Nash",
    meaning: "Bộ chiến lược cân bằng Nash: không người chơi nào có lợi hơn khi đơn phương rời bỏ chiến lược s_i^* của mình.",
    usage: "Điều kiện định nghĩa là u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) với mọi người chơi i và mọi chiến lược thay thế s_i. Nash đã chứng minh mọi trò chơi hữu hạn đều có cân bằng trong chiến lược hỗn hợp, viết là \\sigma^*. Điểm cân bằng không nhất thiết duy nhất hay hiệu quả, như thế lưỡng nan của người tù cho thấy. Dấu sao là chỉ số trên, nên s_1^* và s^*_1 hiển thị giống nhau; hãy dùng ^* thay vì ^\\star, vì cái sau là ngôi sao năm cánh. Trong trò chơi song ma trận, một cân bằng thuần là một ô mà lợi ích của mỗi người chơi là lớn nhất khi biết lựa chọn của người kia.",
  },
  "mixed-strategy": {
    name: "Chiến lược hỗn hợp",
    meaning: "Chiến lược hỗn hợp của người chơi i: một phân phối xác suất trên các chiến lược thuần của người chơi đó.",
    usage: "Một chiến lược hỗn hợp là \\sigma_i \\in \\Delta(S_i), với \\sigma_i(s_i) là xác suất chơi s_i, và giá của một chiến lược cân bằng chỉ chứa các phản ứng tốt nhất. Trong trò chơi tung đồng xu khớp mặt, cân bằng duy nhất là mỗi người chơi trộn 1/2-1/2. Trò chơi dạng mở rộng phân biệt chiến lược hỗn hợp với chiến lược hành vi, thường viết là b_i hoặc \\beta_i. Đừng nhầm \\sigma_i với độ lệch chuẩn trong các bài báo có cả thống kê; \\varsigma là một dạng sigma cuối từ khác, không phải để thay thế. Với trí nhớ hoàn hảo, định lý Kuhn khiến chiến lược hỗn hợp và chiến lược hành vi tương đương nhau.",
  },
  "probability-simplex": {
    name: "Đơn hình xác suất",
    meaning: "Tập các phân phối xác suất trên S_i, với tập hữu hạn thì đó là một đơn hình xác suất.",
    usage: "Nếu S_i có k phần tử, \\Delta(S_i) là đơn hình (k-1) chiều \\{x \\in \\mathbb{R}^k : x_j \\ge 0, \\sum_j x_j = 1\\}. Chiến lược hỗn hợp, niềm tin và cân bằng tương quan đều nằm trong các tập dạng này. Chữ hoa \\Delta mặc định là chữ đứng; \\varDelta cho phiên bản nghiêng nếu quy cách của bạn yêu cầu. Đừng nhầm nó với \\triangle, tam giác hình học, hay với \\nabla, ký hiệu lộn ngược dùng cho gradient. Với hai chiến lược thuần, nó chỉ là đoạn [0, 1] các xác suất cho chiến lược thứ nhất.",
  },
  "dominant-strategy": {
    name: "Chiến lược trội",
    meaning: "Chiến lược trội của người chơi i: chiến lược là phản ứng tốt nhất bất kể những người chơi khác làm gì.",
    usage: "Trội chặt nghĩa là u_i(s_i^d, s_{-i}) > u_i(s_i, s_{-i}) với mọi s_i khác và mọi s_{-i}; trong thế lưỡng nan của người tù, phản bội là chiến lược trội chặt. Đặt giá trung thực trong đấu giá giá thứ hai là trội yếu. Chỉ số trên d là nhãn, không phải chỉ số, nên nhiều tác giả viết đứng, s_i^{\\mathrm{d}}, để tránh bị đọc như một biến. Đặt ^d trước hay sau _i đều cho cùng kết quả xếp chồng. Khi mọi người chơi đều có chiến lược trội, bộ chiến lược thu được là cân bằng chiến lược trội và do đó là một cân bằng Nash.",
  },
  "dominated-strategy": {
    name: "Chiến lược bị trội",
    meaning: "Quan hệ trội: s_i \\prec s'_i cho biết chiến lược s_i bị trội bởi s'_i, chiến lược luôn cho kết quả ít nhất là tốt bằng.",
    usage: "Người chơi lý trí không bao giờ dùng các chiến lược bị trội chặt, và loại bỏ lặp các chiến lược đó là một thủ tục giải chuẩn. \\prec là một quan hệ với khoảng cách đúng; với trội yếu hãy dùng \\preceq, và cho chiều ngược lại dùng \\succ hoặc \\succeq. Một số giáo trình viết quan hệ bằng ký hiệu có chỉ số người chơi như \\prec_i. s'_i và s_i' hiển thị giống nhau vì dấu phẩy trên hợp vào khối chỉ số. Quy ước về chiều khác nhau, và một số tác giả viết s'_i \\succ s_i cho cùng một mệnh đề, nên hãy định nghĩa rõ. Chiến lược bị trội bởi một chiến lược hỗn hợp cũng có thể bị loại bỏ.",
  },
  "pareto-optimal": {
    name: "Tối ưu Pareto",
    meaning: "Kết cục tối ưu Pareto: không có bộ chiến lược nào khác làm một người chơi tốt hơn mà không làm người khác tệ đi.",
    usage: "Một bộ chiến lược s^{PO} là tối ưu Pareto nếu không có s nào với u_i(s) \\ge u_i(s^{PO}) cho mọi i và bất đẳng thức chặt cho một i nào đó. Thế lưỡng nan của người tù cho thấy một cân bằng Nash không tối ưu Pareto. Khi viết s^{PO}, TeX đặt P và O như hai biến nghiêng; một nhãn nên viết bằng chữ đứng, s^{\\mathrm{PO}}, điều này cũng ngăn PO bị đọc như một tích. Mẹo này cũng áp dụng cho các nhãn như s^{\\mathrm{NE}}. Tối ưu Pareto không nói gì về sự công bằng; nó chỉ loại trừ các cải thiện rõ ràng.",
  },
  "minimax": {
    name: "Minimax",
    meaning: "Toán tử minimax: cực tiểu theo j của cực đại theo i, giá trị trong trường hợp xấu nhất mà người chơi cực tiểu hóa có thể bảo đảm.",
    usage: "Trong trò chơi ma trận tổng bằng không với lợi ích a_{ij} cho người chơi hàng, \\min_j \\max_i a_{ij} là mức bảo đảm của người chơi cột và \\max_i \\min_j a_{ij} là mức của người chơi hàng; giá trị sau không bao giờ vượt giá trị trước. Định lý minimax của von Neumann nói rằng hai giá trị trùng nhau trong chiến lược hỗn hợp. Ở kiểu hiển thị, các chỉ số nằm bên dưới; trong dòng chúng xuất hiện như chỉ số dưới, nên hãy thêm \\limits nếu bạn muốn chúng nằm bên dưới cả trong văn bản. Để có thêm khoảng cách giữa các toán tử, chèn \\, hoặc dùng \\min_{j}\\,\\max_{i}.",
  },
  "zero-sum": {
    name: "Trò chơi tổng bằng không",
    meaning: "Điều kiện tổng bằng không: lợi ích của hai người chơi luôn triệt tiêu nhau, nên cái được của người này đúng bằng cái mất của người kia.",
    usage: "Một trò chơi như vậy được mô tả hoàn toàn bởi một ma trận A, với u_1 = x^\\top A y và u_2 = -x^\\top A y cho các chiến lược hỗn hợp x và y. Các trò chơi tổng không đổi, u_1 + u_2 = c, tương đương về mặt chiến lược. Giá trị v = \\max_x \\min_y x^\\top A y có thể tính bằng quy hoạch tuyến tính. Với n người chơi, hãy viết \\sum_{i} u_i(s) = 0 cho mọi bộ chiến lược s. Dùng x^\\top hoặc x^T cho phép chuyển vị, một cách nhất quán. Cờ vua và poker đối đầu hai người là các ví dụ kinh điển.",
  },
  "cooperative-value": {
    name: "Hàm đặc trưng của trò chơi hợp tác",
    meaning: "Hàm đặc trưng của trò chơi hợp tác: tổng giá trị mà một liên minh S có thể tự bảo đảm.",
    usage: "Một trò chơi với lợi ích chuyển nhượng được là cặp (N, v) với v: 2^N \\to \\mathbb{R} và v(\\emptyset) = 0. Tính siêu cộng tính, v(S \\cup T) \\ge v(S) + v(T) với các liên minh rời nhau, khiến việc thành lập đại liên minh là đáng giá. Lõi là tập các phân bổ x với \\sum_{i \\in S} x_i \\ge v(S) cho mọi S. \\emptyset cho hình tròn có gạch chéo; \\varnothing cho dạng tròn hơn, hiện đại hơn. Ở đây S là một liên minh, không phải tập chiến lược, nên hãy nói rõ điều đó.",
  },
  "shapley-value": {
    name: "Giá trị Shapley",
    meaning: "Giá trị Shapley: phần chia công bằng của người chơi i trong v(N), bằng đóng góp biên trung bình của người đó trên mọi thứ tự.",
    usage: "Công thức là \\phi_i(v) = \\sum_{S \\subseteq N \\setminus \\{i\\}} \\frac{|S|!\\,(n-|S|-1)!}{n!}\\,(v(S \\cup \\{i\\}) - v(S)). Đây là phân bổ duy nhất thỏa mãn tính hiệu quả, tính đối xứng, tính chất người chơi vô hiệu và tính cộng tính. Học máy dùng nó để quy công cho đặc trưng, như trong SHAP. Hãy chọn giữa \\phi và \\varphi một cách có chủ ý; chúng trông khá khác nhau. Bên trong hiệu tập hợp, thoát dấu ngoặc nhọn thành \\{i\\} để chúng được in ra. Tính chính xác đòi hỏi cộng trên tất cả 2^{n-1} liên minh cho mỗi người chơi, nên các phép xấp xỉ bằng lấy mẫu phổ biến trong thực tế. Trong trò chơi đối xứng, mỗi người chơi nhận v(N)/n.",
  },
  "subgame-perfect": {
    name: "Cân bằng hoàn hảo trò chơi con",
    meaning: "Cân bằng hoàn hảo trò chơi con: một cân bằng Nash mà phần thu hẹp của nó trên mọi trò chơi con cũng là một cân bằng Nash.",
    usage: "Selten đưa ra khái niệm này để loại bỏ những lời đe dọa không đáng tin, và trong trò chơi hữu hạn có thông tin hoàn hảo, quy nạp ngược tìm ra SPE. Nếu gõ SPE trong chế độ toán, ba chữ cái thành các biến nghiêng nhân với nhau, với khoảng cách chữ kém; hãy viết \\mathrm{SPE} hoặc \\text{SPE} trong công thức, và chữ thường trong văn xuôi. Các khái niệm nghiệm liên quan được viết theo cùng cách, \\mathrm{NE}, \\mathrm{PBE} cho cân bằng Bayes hoàn hảo. Mọi SPE đều là cân bằng Nash, nhưng điều ngược lại không đúng. Mặc cả tuần tự và trò chơi lặp phụ thuộc nhiều vào khái niệm này.",
  },
  "information-set": {
    name: "Tập thông tin",
    meaning: "Tập thông tin trong trò chơi dạng mở rộng: các nút quyết định mà người chơi không phân biệt được khi đến lượt mình.",
    usage: "Mỗi tập thông tin h thuộc về một người chơi, cung cấp cùng các hành động A(h) tại mọi nút trong đó, và thể hiện thông tin không hoàn hảo như các nước đi bị ẩn. Chiến lược hành vi gán một phân phối \\sigma_i(h) \\in \\Delta(A(h)) cho mỗi tập thông tin của người chơi. Quy ước khác nhau: nhiều giáo trình dùng I hoặc I_i cho tập thông tin và dành h cho lịch sử, nên hãy định nghĩa ký hiệu của bạn. Thông tin hoàn hảo nghĩa là mỗi h là một nút đơn. Trí nhớ hoàn hảo đòi hỏi người chơi không bao giờ quên các nước đi hay thông tin trước đó.",
  },
  "action": {
    name: "Hành động",
    meaning: "Hành động của người chơi i, một lựa chọn tại một điểm quyết định duy nhất, khác với một chiến lược đầy đủ.",
    usage: "Trong trò chơi một lần, hành động và chiến lược thuần trùng nhau, nên nhiều giáo trình viết bộ hành động là a = (a_i, a_{-i}) với a_i \\in A_i. Trong trò chơi dạng mở rộng và trò chơi lặp, hành động là các nước đi cục bộ, còn chiến lược ánh xạ lịch sử hoặc tập thông tin sang hành động. Các bài báo về học và học tăng cường đa tác tử dùng a_i^t cho hành động ở vòng t. Thêm dấu phẩy trên cho các phương án khác, a_i', và ngoặc nhọn cho chỉ số phần bù, a_{-i}. Trong trò chơi lặp, một lịch sử là một dãy các bộ hành động, h^t = (a^0, \\ldots, a^{t-1}).",
  },
};

export default text;
