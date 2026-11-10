import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/differential-geometry/<slug>. */
const text: SymbolPageTranslations = {
  "manifold": {
    name: "Đa tạp",
    meaning: "Chữ M viết tay, cách chuẩn để đặt tên một đa tạp trơn trong các bài báo hình học vi phân và tôpô.",
    usage: "Viết \\mathcal{M} thay vì chữ M nghiêng thông thường cho thấy đối tượng là một không gian chứ không phải ma trận hay một số, điều này hữu ích khi M đã được dùng. Bản đồ được viết \\varphi: U \\subseteq \\mathcal{M} \\to \\mathbb{R}^n và số chiều là \\dim \\mathcal{M} = n. Cùng chữ cái này còn dùng để đặt tên mô hình Kripke trong logic và không gian moduli trong hình học đại số, nên hãy định nghĩa nó một lần trong văn bản. \\mathcal chỉ có ký tự đáng tin cậy cho chữ Latinh hoa; muốn có chữ M kiểu thư pháp uốn lượn hơn, hãy dùng \\mathscr{M}, và giữ một kiểu chữ duy nhất trong toàn bài.",
  },
  "tangent-space": {
    name: "Không gian tiếp xúc",
    meaning: "Không gian tiếp xúc của đa tạp M tại điểm p: không gian vectơ gồm mọi vectơ vận tốc của các đường cong đi qua p.",
    usage: "Với đa tạp n chiều, T_p M là một không gian vectơ thực n chiều với cơ sở tọa độ \\partial/\\partial x^i tại p. Vi phân của một ánh xạ trơn được viết dF_p: T_p M \\to T_{F(p)} N, và một trường vectơ gán cho mỗi p một phần tử của T_p M. Trong chế độ toán, khoảng trắng giữa T_p và M bị bỏ qua, nên kết quả luôn là dạng gọn T_pM; hãy thêm \\, nếu muốn có khoảng cách nhìn thấy được. Nếu đa tạp được đặt tên \\mathcal{M}, hãy viết T_p\\mathcal{M} cho nhất quán.",
  },
  "cotangent-space": {
    name: "Không gian đối tiếp xúc",
    meaning: "Không gian đối tiếp xúc tại p: không gian đối ngẫu của T_p M, gồm các phiếm hàm tuyến tính (đối vectơ) trên các vectơ tiếp xúc tại p.",
    usage: "Các phần tử của T^*_p M là đối vectơ, chẳng hạn vi phân df_p, và các vi phân tọa độ dx^i tạo thành cơ sở đối ngẫu với \\partial/\\partial x^i. Đặt dấu sao trước hay sau chỉ số dưới (T^*_p M so với T_p^* M) cho cùng một kết quả, vì TeX xếp chồng chỉ số trên và chỉ số dưới bất kể thứ tự. Dùng ^* thay cho ^{\\ast} chỉ để viết ngắn gọn; cả hai cho cùng một dấu sao. Mêtric đồng nhất T_p M với T^*_p M bằng cách hạ chỉ số, đó là cách gradient trở thành đối vectơ.",
  },
  "tangent-bundle": {
    name: "Phân thớ tiếp xúc",
    meaning: "Phân thớ tiếp xúc: hợp rời của mọi không gian tiếp xúc T_p M, bản thân nó là một đa tạp có số chiều gấp đôi M.",
    usage: "Một điểm của TM là một cặp (p, v) với v \\in T_p M, và phép chiếu \\pi: TM \\to M bỏ đi vectơ. Một trường vectơ chính là một nhát cắt trơn X: M \\to TM với \\pi \\circ X = \\mathrm{id}. Ánh xạ đẩy tới của F: M \\to N thường được viết TF hoặc dF: TM \\to TN. Vì TeX đặt hai chữ nghiêng sát nhau, TM được đọc đúng như một tên duy nhất; nếu có thể nhầm với tích T \\cdot M, hãy nói rõ trong lời văn.",
  },
  "cotangent-bundle": {
    name: "Phân thớ đối tiếp xúc",
    meaning: "Phân thớ đối tiếp xúc: phân thớ gồm mọi không gian đối tiếp xúc của M, không gian pha tự nhiên của cơ học Hamilton.",
    usage: "Các điểm của T^*M là các cặp (q, p) gồm một vị trí và một đối vectơ, vì thế cơ học cổ điển diễn ra ở đây. Nó mang một dạng symplectic chính tắc \\omega = dq^i \\wedge dp_i, và các 1-dạng trên M là các nhát cắt của T^*M. Các dạng bậc cao hơn là nhát cắt của \\Lambda^k T^*M, viết bằng \\Lambda hoặc \\bigwedge^k. Dấu sao là chỉ số trên, nên T^*M và T^{*}M hiển thị như nhau; tránh viết T*M không có dấu mũ, vì nó đặt một dấu sao kiểu toán tử hai ngôi trên đường cơ sở.",
  },
  "covariant-derivative": {
    name: "Đạo hàm hiệp biến",
    meaning: "Đạo hàm hiệp biến của trường vectơ Y theo hướng X, được xác định bởi một liên thông afin \\nabla.",
    usage: "Một liên thông afin tuyến tính theo các hàm ở biến X và thỏa mãn quy tắc Leibniz \\nabla_X(fY) = (Xf)Y + f\\nabla_X Y. Liên thông Levi-Civita là liên thông duy nhất không xoắn và tương thích với mêtric, cho ta \\nabla_X Y - \\nabla_Y X = [X, Y]. Trong tọa độ nó rút gọn thành \\nabla_i Y^k = \\partial_i Y^k + \\Gamma^k_{ij} Y^j. Hướng ở chỉ số dưới được in nhỏ; với biểu thức dài như \\nabla_{\\dot\\gamma}\\dot\\gamma, hãy bọc chỉ số dưới trong ngoặc nhọn để dấu chấm vẫn gắn đúng chỗ.",
  },
  "christoffel-symbol": {
    name: "Ký hiệu Christoffel",
    meaning: "Ký hiệu Christoffel: các hệ số liên thông cho biết các vectơ cơ sở tọa độ thay đổi thế nào từ điểm này sang điểm khác.",
    usage: "Với liên thông Levi-Civita, chúng được tính từ mêtric theo \\Gamma^k_{ij} = \\tfrac12 g^{kl}(\\partial_i g_{jl} + \\partial_j g_{il} - \\partial_l g_{ij}), và đối xứng theo i và j. Chúng không phải là thành phần của một tenxơ, vì thế chúng có thể triệt tiêu tại một điểm trong tọa độ chuẩn tắc. Chữ Hy Lạp hoa mặc định là chữ đứng trong LaTeX; nếu quy chuẩn của bạn muốn chữ nghiêng, hãy dùng \\varGamma. Một số sách cũ viết ký hiệu loại hai bằng dấu ngoặc nhọn, nhưng dạng \\Gamma là chuẩn ngày nay.",
  },
  "riemann-curvature": {
    name: "Tenxơ độ cong Riemann",
    meaning: "Các thành phần của tenxơ độ cong Riemann, đo mức độ phép chuyển dời song song quanh một vòng kín nhỏ không đưa vectơ trở về như cũ.",
    usage: "Theo một quy ước phổ biến, R^l_{ijk} = \\partial_j \\Gamma^l_{ik} - \\partial_k \\Gamma^l_{ij} + \\Gamma^l_{jm}\\Gamma^m_{ik} - \\Gamma^l_{km}\\Gamma^m_{ij}, nhưng dấu và thứ tự chỉ số khác nhau giữa các giáo trình, nên hãy nêu rõ quy ước của bạn. Khi viết R^l_{ijk}, TeX xếp l thẳng trên i, che mất vị trí nào được nâng lên; để so le các chỉ số hãy dùng R^l{}_{ijk}, trong đó nhóm rỗng đẩy chỉ số dưới sang phải. Hạ chỉ số đầu tiên cho R_{lijk}, phản đối xứng theo cặp vị trí đầu và theo cặp vị trí cuối theo các quy ước thông thường, nhưng hãy kiểm tra cách đặt chỉ số của nguồn tài liệu trước khi trích dẫn các đẳng thức.",
  },
  "ricci-tensor": {
    name: "Tenxơ Ricci",
    meaning: "Tenxơ Ricci: vết của tenxơ Riemann theo một cặp chỉ số, một đại lượng độ cong đối xứng hai chỉ số.",
    usage: "Nó thu được bằng phép co, R_{ij} = R^k_{ikj} theo một quy ước phổ biến, và chi phối sự biến dạng thể tích dọc các đường trắc địa. Phương trình trường Einstein có dạng R_{\\mu\\nu} - \\tfrac12 R g_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}, và đa tạp có R_{ij} = \\lambda g_{ij} được gọi là đa tạp Einstein. Các nhà vật lý thường đánh chỉ số bằng chữ Hy Lạp \\mu\\nu, các nhà toán học bằng chữ Latinh ij. Ricci phẳng nghĩa là R_{ij} = 0, điều kiện xác định các mêtric Calabi-Yau. Một số tác giả viết \\mathrm{Ric} cho tenxơ không phụ thuộc tọa độ; \\operatorname{Ric} cho cùng chữ đứng đó kèm khoảng cách toán tử.",
  },
  "scalar-curvature": {
    name: "Độ cong vô hướng",
    meaning: "Độ cong vô hướng: vết toàn phần của tenxơ Ricci, một số duy nhất tại mỗi điểm của đa tạp Riemann.",
    usage: "Nó được định nghĩa bởi R = g^{ij} R_{ij}, và trong hai chiều nó bằng hai lần độ cong Gauss K. Tác dụng Einstein-Hilbert lấy tích phân của nó, S = \\int R \\sqrt{-g}\\, d^4x, và bài toán Yamabe tìm một mêtric bảo giác có R không đổi. Vì chữ R trơn còn dùng cho tập số thực, một quan hệ hay một bán kính, nhiều tác giả viết \\mathrm{Scal} hoặc s thay thế; đừng bao giờ dùng R thay cho \\mathbb{R} trong cùng một bài. Hãy viết nó bằng chữ R nghiêng thông thường trong chế độ toán.",
  },
  "metric-tensor": {
    name: "Tenxơ mêtric",
    meaning: "Các thành phần của tenxơ mêtric, dạng song tuyến tính đối xứng xác định dương dùng để định nghĩa độ dài và góc trên một đa tạp.",
    usage: "Phần tử đường được viết ds^2 = g_{ij}\\, dx^i dx^j với quy ước lấy tổng ngầm định, và độ dài của một đường cong là \\int \\sqrt{g_{ij}\\dot x^i \\dot x^j}\\, dt. Trong thuyết tương đối mêtric là Lorentz và được đánh chỉ số g_{\\mu\\nu}, chẳng hạn mêtric Minkowski \\eta_{\\mu\\nu}. Định thức của nó xuất hiện trong dạng thể tích \\sqrt{\\det g}\\, dx^1 \\cdots dx^n, thường viết tắt là \\sqrt{g}. Hãy thêm khoảng trắng hẹp bằng \\, giữa mêtric và các vi phân để ds^2 = g_{ij}\\,dx^i\\,dx^j không bị chen chúc. Ở dạng ma trận nó thường được viết (g_{ij}) hoặc đơn giản là g.",
  },
  "inverse-metric": {
    name: "Mêtric nghịch đảo",
    meaning: "Mêtric nghịch đảo: ma trận nghịch đảo của g_{ij}, dùng để nâng chỉ số và tạo vết cũng như gradient.",
    usage: "Nó được định nghĩa bởi g^{ij} g_{jk} = \\delta^i_k, nên trong một mục tiêu trực chuẩn nó bằng ma trận đơn vị. Việc nâng chỉ số dùng trực tiếp nó, v^i = g^{ij} v_j, và gradient của một hàm có các thành phần (\\nabla f)^i = g^{ij}\\partial_j f. Toán tử Laplace-Beltrami là \\frac{1}{\\sqrt{g}}\\partial_i(\\sqrt{g}\\, g^{ij}\\partial_j f). Đừng nhầm g^{ij} với nghịch đảo của một thành phần đơn lẻ; nó là một phần tử của ma trận nghịch đảo, nên g^{11} \\ne 1/g_{11} trừ khi mêtric có dạng đường chéo.",
  },
  "exterior-derivative": {
    name: "Đạo hàm ngoài",
    meaning: "Đạo hàm ngoài của dạng vi phân \\omega, tăng bậc của nó lên một và tổng quát hóa gradient, rota và divergence.",
    usage: "Toán tử này thỏa mãn d \\circ d = 0 và quy tắc Leibniz phân bậc d(\\alpha \\wedge \\beta) = d\\alpha \\wedge \\beta + (-1)^k \\alpha \\wedge d\\beta với \\alpha là một k-dạng. Định lý Stokes trở thành \\int_M d\\omega = \\int_{\\partial M} \\omega, và một dạng là đóng khi d\\omega = 0 và khớp khi \\omega = d\\eta. Nhiều quy chuẩn đặt toán tử bằng chữ đứng \\mathrm{d}\\omega để phân biệt với một biến d; dù chọn cách nào, hãy dùng nhất quán, kể cả trong tích phân như \\int f\\, dx.",
  },
  "wedge-product": {
    name: "Tích ngoài",
    meaning: "Tích ngoài của hai dạng vi phân, một phép nhân phản đối xứng dùng để xây dựng các dạng bậc cao hơn.",
    usage: "Với \\alpha là một k-dạng và \\beta là một l-dạng, tích này giao hoán phân bậc, \\alpha \\wedge \\beta = (-1)^{kl} \\beta \\wedge \\alpha, nên tích ngoài của một 1-dạng với chính nó bằng không. Dạng thể tích được viết dx^1 \\wedge \\cdots \\wedge dx^n. \\wedge là toán tử hai ngôi, nên TeX thêm khoảng trắng vừa ở hai bên; \\land cho ra ký tự y hệt và nên dành cho phép hội logic. Với lũy thừa ngoài hoặc tích ngoài lớn trên một tập chỉ số, hãy dùng \\bigwedge, như trong \\bigwedge^k V.",
  },
  "lie-derivative": {
    name: "Đạo hàm Lie",
    meaning: "Đạo hàm Lie dọc theo trường vectơ X, đo sự thay đổi của một tenxơ dưới dòng sinh bởi X.",
    usage: "Trên các hàm nó đơn giản là \\mathcal{L}_X f = Xf, trên trường vectơ nó là móc Lie \\mathcal{L}_X Y = [X, Y], và trên các dạng, công thức kỳ diệu của Cartan cho \\mathcal{L}_X = d\\iota_X + \\iota_X d. Khác với \\nabla_X, nó không cần liên thông hay mêtric. Một trường vectơ Killing thỏa mãn \\mathcal{L}_X g = 0. Chữ L viết tay là lựa chọn thông dụng; \\pounds_X xuất hiện trong một số sách về thuyết tương đối, nhưng \\mathcal{L} rõ ràng hơn. Tránh nhầm nó với hàm Lagrange \\mathcal{L} trong các bài báo vật lý dùng cả hai.",
  },
  "lie-bracket": {
    name: "Móc Lie",
    meaning: "Móc Lie của hai trường vectơ: trường vectơ tác động lên các hàm theo X(Yf) - Y(Xf).",
    usage: "Móc này song tuyến tính, phản đối xứng và thỏa mãn đồng nhất thức Jacobi [X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0, khiến các trường vectơ tạo thành một đại số Lie. Trong tọa độ các thành phần của nó là X^j\\partial_j Y^i - Y^j\\partial_j X^i. Cùng ký hiệu ngoặc vuông này là giao hoán tử AB - BA của ma trận hoặc toán tử lượng tử. Dấu [ và ] trơn dùng được cho đối số ngắn; với nội dung cao hãy dùng \\left[ \\right] hoặc \\bigl[ \\bigr] để ngoặc co giãn theo. Nó đo mức độ các dòng của X và Y không giao hoán, và các trường vectơ tọa độ luôn thỏa mãn [\\partial_i, \\partial_j] = 0.",
  },
  "connection-form": {
    name: "Dạng liên thông",
    meaning: "Các 1-dạng liên thông: một ma trận các 1-dạng mô tả một liên thông đối với một mục tiêu đã chọn của phân thớ.",
    usage: "Trong phương pháp mục tiêu động của Cartan với đối mục tiêu e^i, phương trình cấu trúc thứ nhất cho liên thông không xoắn là de^i = -\\omega^i_j \\wedge e^j. Với liên thông mêtric trong một mục tiêu trực chuẩn, ma trận này phản đối xứng, \\omega_{ij} = -\\omega_{ji}. Các nhà vật lý gọi cùng đối tượng này là liên thông spin \\omega^a{}_b. Hãy dùng \\omega^i{}_j để so le các chỉ số khi thứ tự của chúng quan trọng, và đừng nhầm với dạng symplectic hay dạng Kähler, cũng được viết là \\omega. Khi đổi mục tiêu nó biến đổi không thuần nhất, nên giống ký hiệu Christoffel, nó không phải là tenxơ.",
  },
  "curvature-form": {
    name: "Dạng độ cong",
    meaning: "Các 2-dạng độ cong: một ma trận các 2-dạng mã hóa độ cong của một liên thông trong một mục tiêu cho trước.",
    usage: "Phương trình cấu trúc thứ hai của Cartan định nghĩa chúng là \\Omega^i_j = d\\omega^i_j + \\omega^i_k \\wedge \\omega^k_j, hay gọn hơn là \\Omega = d\\omega + \\omega \\wedge \\omega. Khai triển theo đối mục tiêu sẽ thu lại tenxơ Riemann, \\Omega^i_j = \\tfrac12 R^i_{jkl}\\, e^k \\wedge e^l. Lý thuyết Chern-Weil xây dựng các lớp đặc trưng như \\operatorname{tr}(\\Omega \\wedge \\Omega) từ các dạng này. Chữ hoa \\Omega mặc định là chữ đứng; \\varOmega cho một phiên bản nghiêng. Cùng chữ này còn ký hiệu không gian các dạng \\Omega^k(M), nên ngữ cảnh cần làm rõ nghĩa.",
  },
  "geodesic": {
    name: "Đường trắc địa",
    meaning: "Một đường cong trên đa tạp với tham số t; trong ngữ cảnh này là đường trắc địa, đường cong có gia tốc hiệp biến bằng không.",
    usage: "Đường trắc địa thỏa mãn \\nabla_{\\dot\\gamma}\\dot\\gamma = 0, trong tọa độ là \\ddot\\gamma^k + \\Gamma^k_{ij}\\dot\\gamma^i\\dot\\gamma^j = 0. Dữ kiện ban đầu \\gamma(0) = p và \\dot\\gamma(0) = v xác định ánh xạ mũ \\exp_p(v) = \\gamma(1). Dùng \\dot{\\gamma} và \\ddot{\\gamma} cho đạo hàm theo thời gian; \\gamma'(t) là lựa chọn thay thế khi t không phải thời gian. Hãy viết \\dot\\gamma^k thay vì \\dot{\\gamma^k} để dấu chấm chỉ nằm trên chữ cái, và giữ \\gamma ở dạng chữ thường, vì \\Gamma đã dành cho ký hiệu Christoffel. Trên mặt cầu tròn, các đường trắc địa là các cung của đường tròn lớn.",
  },
  "parallel-transport": {
    name: "Phép chuyển dời song song",
    meaning: "Phép chuyển dời song song dọc đường cong \\gamma: ánh xạ tuyến tính di chuyển vectơ giữa các không gian tiếp xúc mà không làm chúng xoay.",
    usage: "Nó là ánh xạ P_\\gamma: T_{\\gamma(0)}M \\to T_{\\gamma(1)}M, và với liên thông tương thích mêtric nó là một phép đẳng cự. Chuyển dời quanh các vòng kín sinh ra nhóm holonomy, và việc nhóm này không tầm thường phản ánh độ cong. Một số sách viết \\tau_\\gamma, \\Pi_\\gamma hoặc P^\\gamma_{t \\leftarrow s} để ghi lại các điểm đầu mút. Với chỉ số dưới một chữ cái, dấu ngoặc nhọn trong P_{\\gamma} là tùy chọn, nhưng hãy giữ chúng khi chỉ số dài ra, như P_{\\gamma|[0,t]}. Một trường vectơ V là song song dọc \\gamma khi \\nabla_{\\dot\\gamma} V = 0, và P_\\gamma đưa V(0) tới V(1). Quanh một vòng kín nhỏ, phép chuyển dời khác ánh xạ đồng nhất một số hạng tỉ lệ với độ cong.",
  },
};

export default text;
