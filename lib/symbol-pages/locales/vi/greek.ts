import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/greek/<slug>. */
const text: SymbolPageTranslations = {
  "alpha": {
    name: "Alpha",
    meaning: "Chữ alpha Hy Lạp thường, tên mặc định cho góc, mức ý nghĩa, tốc độ học và hệ số.",
    usage: "Trong thống kê, \\alpha là mức ý nghĩa của một kiểm định, như \\alpha = 0.05, và là tham số hình dạng của phân phối Beta và Gamma. Các nhà vật lý dùng nó cho hằng số cấu trúc tinh tế \\alpha \\approx 1/137 và cho hạt alpha. Hình học dùng nó cho góc, thường cùng với \\beta và \\gamma. Không có lệnh \\Alpha cho chữ hoa, vì alpha hoa giống hệt chữ A Latinh; hãy viết A hoặc \\mathrm{A}. Cẩn thận đừng để \\alpha bị nhầm với chữ a Latinh hay dấu tỉ lệ \\propto trong các phông kiểu viết tay.",
  },
  "beta": {
    name: "Beta",
    meaning: "Chữ beta Hy Lạp thường, chuẩn cho hệ số hồi quy, góc và tham số thứ hai của một phân phối.",
    usage: "Các mô hình hồi quy viết y = \\beta_0 + \\beta_1 x + \\varepsilon, và \\hat{\\beta} đánh dấu các hệ số ước lượng. Trong kiểm định giả thuyết, \\beta là xác suất sai lầm loại II, nên lực kiểm định là 1 - \\beta. Vật lý dùng nó cho v/c trong thuyết tương đối và cho nghịch đảo nhiệt độ \\beta = 1/(k_B T). Tài chính dùng hệ số beta của một cổ phiếu so với thị trường. Không tồn tại lệnh \\Beta vì beta hoa trông như chữ B Latinh. Chữ ß của tiếng Đức là một ký tự khác, viết bằng \\ss, và không được dùng thay cho \\beta.",
  },
  "gamma": {
    name: "Gamma",
    meaning: "Chữ gamma Hy Lạp thường, dùng cho hằng số Euler-Mascheroni, hệ số Lorentz và hệ số chiết khấu.",
    usage: "\\gamma là hệ số Lorentz \\gamma = 1/\\sqrt{1 - v^2/c^2} trong thuyết tương đối hẹp và hằng số Euler-Mascheroni \\gamma \\approx 0.5772 trong giải tích. Học tăng cường dùng nó làm hệ số chiết khấu trong \\sum_t \\gamma^t r_t, và vật lý dùng nó cho tia gamma và photon. Trong hình học, nó thường đặt tên cho góc thứ ba của tam giác sau \\alpha và \\beta, còn trong giải tích phức \\gamma là một đường cong hay chu tuyến. Lưu ý rằng chữ hoa \\Gamma, tức hàm gamma, là một lệnh riêng; đừng viết \\Gamma cho hằng số.",
  },
  "gamma-upper": {
    name: "Gamma hoa",
    meaning: "Chữ Gamma Hy Lạp hoa, nổi tiếng nhất là hàm gamma Γ(z) mở rộng giai thừa.",
    usage: "\\Gamma(n) = (n-1)! với số nguyên dương, và \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt trong trường hợp tổng quát. Nó cũng dùng để viết ký hiệu Christoffel \\Gamma^k_{ij} trong hình học vi phân, phân phối Gamma, và ngữ cảnh kiểu \\Gamma \\vdash e : \\tau trong lý thuyết kiểu. Chữ Hy Lạp hoa mặc định in đứng trong LaTeX; để có phiên bản nghiêng hãy dùng \\varGamma. Các nhà lý thuyết đồ thị đôi khi dùng \\Gamma(v) cho lân cận của một đỉnh. Đừng nhầm nó với chữ L Latinh bị xoay hay với \\gamma, hằng số viết thường.",
  },
  "delta": {
    name: "Delta",
    meaning: "Chữ delta Hy Lạp thường, dùng cho đại lượng nhỏ, hàm delta Dirac và delta Kronecker.",
    usage: "Giải tích ghép nó với epsilon trong định nghĩa giới hạn và tính liên tục, như |x - a| < \\delta. Delta Dirac \\delta(x) thỏa mãn \\int f(x)\\delta(x - a)\\,dx = f(a), và delta Kronecker \\delta_{ij} bằng 1 khi i = j và bằng 0 trong trường hợp còn lại. Phép tính biến phân viết \\delta S cho một biến phân, và hóa học dùng \\delta+ và \\delta- cho điện tích riêng phần. Nó khác với \\partial, dấu đạo hàm riêng uốn cong, và với chữ hoa \\Delta dùng cho các biến thiên hữu hạn.",
  },
  "delta-upper": {
    name: "Delta hoa",
    meaning: "Chữ Delta Hy Lạp hoa, dùng cho biến thiên hữu hạn của một đại lượng, toán tử Laplace và biệt thức.",
    usage: "Vật lý và hóa học viết \\Delta x cho độ dời và \\Delta H cho biến thiên enthalpy, như trong \\Delta G = \\Delta H - T\\Delta S. Trong giải tích, \\Delta là toán tử Laplace \\Delta u = \\nabla^2 u, và trong đại số nó là biệt thức \\Delta = b^2 - 4ac. Các nhà hình học dùng nó cho tam giác, dù \\triangle là một ký hiệu riêng, rỗng ruột, phù hợp hơn cho việc đó. Chữ Hy Lạp hoa in đứng; hãy dùng \\varDelta cho phiên bản nghiêng. Đừng nhầm \\Delta với \\nabla, chính là tam giác đó lộn ngược.",
  },
  "epsilon": {
    name: "Epsilon",
    meaning: "Chữ epsilon thường dạng lưỡi liềm ϵ, dùng cho đại lượng dương nhỏ và số hạng sai số.",
    usage: "\\epsilon in dạng lưỡi liềm ϵ, còn \\varepsilon cho dạng mở, uốn cong ε mà nhiều người đọc liên tưởng với epsilon viết tay. Các nhà giải tích dùng dạng nào cũng được cho một số nhỏ tùy ý trong \\forall \\epsilon > 0, nhưng hãy giữ một dạng nhất quán trong suốt bài báo. Nhiều tác giả dành \\epsilon cho đại lượng nhỏ và dùng \\varepsilon cho số hạng sai số hay nhiễu. Đừng nhầm dạng nào với dấu thuộc \\in, trông giống ϵ nhưng là một quan hệ có khoảng cách khác. Vật lý còn dùng \\epsilon_0 cho hằng số điện môi chân không.",
  },
  "epsilon-variant": {
    name: "Epsilon (biến thể)",
    meaning: "Biến thể epsilon thường ε, dạng mở uốn cong thường được ưa dùng cho số hạng sai số và số nhỏ.",
    usage: "\\varepsilon cho hình dạng ε tròn, gần với epsilon viết tay hơn \\epsilon dạng lưỡi liềm. Thống kê viết số hạng nhiễu của hồi quy là \\varepsilon_i \\sim \\mathcal{N}(0, \\sigma^2), và nhiều giáo trình giải tích ưa \\varepsilon trong các chứng minh epsilon-delta. Vật lý dùng \\varepsilon_0 cho hằng số điện môi chân không và \\varepsilon_{ijk} cho ký hiệu Levi-Civita. Vì hai dạng dễ bị trộn lẫn do sơ ý, hãy cân nhắc định nghĩa lại một trong hai ở phần mở đầu để bạn chỉ phải gõ một lệnh. Tránh dùng nó thay cho dấu thuộc \\in.",
  },
  "zeta": {
    name: "Zeta",
    meaning: "Chữ zeta Hy Lạp thường, nổi tiếng nhất với hàm zeta Riemann và hệ số tắt dần.",
    usage: "Hàm zeta Riemann \\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s} là ứng dụng tiêu biểu, với kết quả bài toán Basel \\zeta(2) = \\pi^2/6. Kỹ sư dùng \\zeta làm hệ số tắt dần của hệ bậc hai, như trong \\ddot{x} + 2\\zeta\\omega_n \\dot{x} + \\omega_n^2 x = 0. Giải tích phức dùng nó cho một biến phức câm, và lý thuyết số dùng cho căn của đơn vị \\zeta_n = e^{2\\pi i/n}. Không có lệnh \\Zeta vì zeta hoa giống chữ Z Latinh. Dạng viết tay của nó dễ bị nhầm với \\xi, nên hãy kiểm tra xem tài liệu nguồn muốn nói chữ nào.",
  },
  "eta": {
    name: "Eta",
    meaning: "Chữ eta Hy Lạp thường, dùng cho tốc độ học, hiệu suất, độ nhớt và mêtric Minkowski.",
    usage: "Trong học máy, \\eta là tốc độ học theo quy ước trong các bước cập nhật như w \\leftarrow w - \\eta \\nabla L(w). Nhiệt động lực học viết hiệu suất là \\eta = W/Q_h, động lực học chất lưu dùng nó cho độ nhớt động lực, và thuyết tương đối viết mêtric Minkowski \\eta_{\\mu\\nu}. Thống kê đôi khi dùng nó cho bộ dự báo tuyến tính \\eta = X\\beta của mô hình tuyến tính tổng quát hóa. Eta hoa trông như chữ H Latinh, nên không có lệnh \\Eta. Đừng nhầm \\eta với chữ n Latinh trên các trang trình chiếu phông không chân, nơi phần đuôi dưới có thể khó nhìn thấy.",
  },
  "theta": {
    name: "Theta",
    meaning: "Chữ theta Hy Lạp thường, tên thông dụng cho góc và cho tham số mô hình trong thống kê và học máy.",
    usage: "Lượng giác và tọa độ cực dùng \\theta cho góc, như trong (r\\cos\\theta, r\\sin\\theta). Thống kê và học máy dùng nó cho vectơ tham số, với \\hat{\\theta} cho ước lượng và \\theta^* cho giá trị tối ưu. Các cận độ phức tạp Big-Theta dùng chữ hoa \\Theta, không phải \\theta. Biến thể \\vartheta là một dạng kiểu viết tay đôi khi dùng cho góc thứ hai hoặc trong vật lý. Khi viết một ước lượng, \\hat{\\theta} giữ dấu mũ cân giữa tốt hơn \\widehat{\\theta}, vốn dành cho đối số rộng hơn. Trong ký hiệu Bayes, \\theta cũng là tên đại lượng chưa biết trong phân phối hậu nghiệm p(\\theta \\mid x).",
  },
  "theta-upper": {
    name: "Theta hoa",
    meaning: "Chữ Theta Hy Lạp hoa, chuẩn cho các cận tiệm cận chặt và không gian tham số.",
    usage: "Phân tích thuật toán viết \\Theta(n \\log n) cho một cận đúng cả từ trên lẫn từ dưới, cùng với O và \\Omega. Thống kê dùng \\Theta cho không gian tham số, như trong \\theta \\in \\Theta. Vật lý dùng nó cho hàm bậc thang Heaviside \\Theta(x) và trong một số sách cho nhiệt độ. Chữ Hy Lạp hoa in đứng trong LaTeX; \\varTheta cho dạng nghiêng nếu quy cách yêu cầu. Đừng nhầm \\Theta với glyph tập rỗng hay với số 0 có gạch ngang.",
  },
  "iota": {
    name: "Iota",
    meaning: "Chữ iota Hy Lạp thường, một chữ hẹp không có dấu chấm, dùng cho ánh xạ bao hàm và ký hiệu chỉ số.",
    usage: "\\iota thường đặt tên cho một ánh xạ bao hàm hay phép nhúng, như \\iota : A \\hookrightarrow X, và cho tích trong \\iota_X \\omega trong hình học vi phân. APL và một số ngôn ngữ hàm dùng iota cho bộ sinh chỉ số, điều này xuất hiện trong các bài viết khoa học máy tính. Vì nó giống chữ i không dấu chấm, hãy đảm bảo không nhầm với \\imath, chữ i không dấu chấm dùng dưới các dấu. Không có lệnh \\Iota; iota hoa trông như chữ I Latinh. Nó hiếm đến mức một định nghĩa một dòng ở lần dùng đầu tiên sẽ giúp ích cho người đọc.",
  },
  "kappa": {
    name: "Kappa",
    meaning: "Chữ kappa Hy Lạp thường, dùng cho độ cong, số điều kiện và hệ số kappa của Cohen.",
    usage: "Hình học vi phân viết độ cong của một đường cong là \\kappa = |\\gamma''(s)|, và giải tích số dùng \\kappa(A) = \\|A\\|\\|A^{-1}\\| cho số điều kiện của một ma trận. Thống kê có \\kappa của Cohen cho mức độ đồng thuận giữa những người đánh giá, và vật lý dùng nó cho hệ số dẫn nhiệt hay hằng số điện môi. Biến thể \\varkappa cho một glyph khác mà một số tác giả ưa dùng. Không có lệnh \\Kappa vì kappa hoa giống hệt chữ K Latinh. Đừng hoán đổi \\kappa với chữ k Latinh, vì nhiều công thức dùng cả hai.",
  },
  "lambda": {
    name: "Lambda",
    meaning: "Chữ lambda Hy Lạp thường, dùng cho trị riêng, bước sóng, cường độ và mức chính quy hóa.",
    usage: "Đại số tuyến tính viết Av = \\lambda v cho trị riêng và vectơ riêng. Vật lý dùng \\lambda cho bước sóng trong c = \\lambda f, xác suất dùng nó cho tham số cường độ của phân phối Poisson hay phân phối mũ, và tối ưu hóa dùng nó cho nhân tử Lagrange và trọng số phạt trong ridge hay lasso, \\lambda\\|w\\|^2. Khoa học máy tính viết hàm vô danh bằng phép tính lambda, \\lambda x.\\, x + 1. Chữ hoa \\Lambda là một lệnh riêng với các công dụng khác. Lịch trình tốc độ học và làm trơn mũ cũng mượn \\lambda cho hệ số suy giảm.",
  },
  "lambda-upper": {
    name: "Lambda hoa",
    meaning: "Chữ Lambda Hy Lạp hoa, thông dụng cho ma trận đường chéo các trị riêng và hằng số vũ trụ.",
    usage: "Phân tích phổ A = Q\\Lambda Q^{-1} dùng \\Lambda cho ma trận đường chéo các trị riêng. Vũ trụ học viết hằng số vũ trụ là \\Lambda, và mô hình chuẩn của vũ trụ học được dàn trang là \\Lambda\\text{CDM}. Vật lý hạt dùng nó cho baryon Lambda, còn lý thuyết dàn hay lý thuyết số có thể dùng \\Lambda cho một dàn hay hàm von Mangoldt \\Lambda(n). Chữ Hy Lạp hoa in đứng trong LaTeX; hãy dùng \\varLambda cho dạng nghiêng. Đừng nhầm nó với phép hội logic \\wedge, một glyph khác với khoảng cách toán tử.",
  },
  "mu": {
    name: "Mu",
    meaning: "Chữ mu Hy Lạp thường, chuẩn cho trung bình, độ đo, hệ số ma sát và tiền tố micro.",
    usage: "Xác suất viết trung bình là \\mu = E[X], nên một phân phối chuẩn là \\mathcal{N}(\\mu, \\sigma^2). Lý thuyết độ đo dùng \\mu cho một độ đo, và vật lý dùng nó cho hệ số ma sát, độ từ thẩm \\mu_0 và khối lượng rút gọn. Làm tiền tố đơn vị trong \\mu m hay \\mu s, nó hiển thị nghiêng kiểu toán, trong khi các chuẩn mực trình bày yêu cầu ký hiệu micro đứng, và bọc nó trong \\mathrm không thay đổi hình dạng của một chữ Hy Lạp. Tối ưu hóa dùng \\mu cho tham số rào cản trong các phương pháp điểm trong.",
  },
  "nu": {
    name: "Nu",
    meaning: "Chữ nu Hy Lạp thường, dùng cho tần số, bậc tự do và độ nhớt động học.",
    usage: "Vật lý viết năng lượng photon là E = h\\nu, trong đó \\nu là tần số, và động lực học chất lưu dùng \\nu cho độ nhớt động học. Thống kê dùng \\nu cho bậc tự do trong phân phối t Student, và vật lý hạt viết neutrino là \\nu_e, \\nu_\\mu. Thuyết tương đối dùng chỉ số Hy Lạp \\mu\\nu cho các thành phần tenxơ, như trong g_{\\mu\\nu}. Trong nhiều phông, \\nu trông rất giống chữ v Latinh, nên tránh dùng cả hai chữ trong cùng một công thức. Không có lệnh \\Nu; nu hoa là chữ N Latinh.",
  },
  "xi": {
    name: "Xi",
    meaning: "Chữ xi Hy Lạp thường, một chữ ngoằn ngoèo dùng cho biến ngẫu nhiên, biến câm và sự tắt dần.",
    usage: "Các sách xác suất thường dùng \\xi cho một biến ngẫu nhiên hay số hạng nhiễu, và giải tích dùng nó cho một điểm trung gian, như trong định lý giá trị trung bình f(b) - f(a) = f'(\\xi)(b - a). Giải tích Fourier viết biến tần số là \\xi trong \\hat{f}(\\xi). Một số sách kỹ thuật dùng \\xi cho hệ số tắt dần thay vì \\zeta. Vì \\xi và \\zeta khó phân biệt khi viết tay, hãy kiểm tra xem tài liệu nguồn muốn nói chữ nào. Dạng hoa \\Xi của nó là một lệnh riêng.",
  },
  "xi-upper": {
    name: "Xi hoa",
    meaning: "Chữ Xi Hy Lạp hoa, một chữ có ba gạch, dùng cho baryon Xi và một số hàm đặc biệt.",
    usage: "\\Xi tương đối hiếm trong toán học. Các nhà vật lý hạt dùng nó cho các baryon Xi, viết là \\Xi^0 và \\Xi^-, và đôi khi nó đặt tên cho hàm xi của Riemann \\Xi(t) trong lý thuyết số giải tích. Cơ học thống kê thỉnh thoảng viết hàm tổng thống kê chính tắc lớn là \\Xi. Giống các chữ Hy Lạp hoa khác trong LaTeX, nó in đứng; \\varXi cho dạng nghiêng. Đừng nhầm nó với dấu tương đương \\equiv, có ba gạch dài bằng nhau và khoảng cách quan hệ.",
  },
  "pi": {
    name: "Pi",
    meaning: "Chữ pi Hy Lạp thường, hằng số đường tròn 3.14159…, cũng dùng cho hoán vị và chính sách.",
    usage: "\\pi là tỉ số giữa chu vi và đường kính của một đường tròn, xuất hiện trong A = \\pi r^2, e^{i\\pi} + 1 = 0 và các góc radian như \\pi/2. Học tăng cường dùng \\pi cho chính sách \\pi(a \\mid s), tổ hợp dùng nó cho một hoán vị, và lý thuyết số viết \\pi(x) cho hàm đếm số nguyên tố. Biến thể \\varpi là một glyph khác. Khi pi là hằng số, một số quy chuẩn trình bày ưa dạng đứng, nhưng LaTeX chuẩn cho \\pi nghiêng. Đừng dùng toán tử lớn \\prod thay cho \\pi, hay ngược lại.",
  },
  "pi-upper": {
    name: "Pi hoa",
    meaning: "Chữ Pi Hy Lạp hoa, một chữ cái thông thường dùng cho phép chiếu, lợi nhuận và áp suất thẩm thấu.",
    usage: "\\Pi là một chữ cái có kích thước cố định, không phải toán tử tích; với tích theo chỉ số hãy dùng \\prod, toán tử này co giãn và đặt cận đúng chỗ. Như một chữ cái, \\Pi đặt tên cho các ánh xạ chiếu, hàm lợi nhuận trong kinh tế học, áp suất thẩm thấu và phép tính pi trong khoa học máy tính. Lý thuyết kiểu viết kiểu hàm phụ thuộc là \\Pi_{x:A} B(x). Lý thuyết độ phức tạp dùng \\Pi_k cho các tầng của phân cấp đa thức. Chữ Hy Lạp hoa mặc định in đứng, và \\varPi cho biến thể nghiêng khi cần.",
  },
  "rho": {
    name: "Rho",
    meaning: "Chữ rho Hy Lạp thường, dùng cho khối lượng riêng, hệ số tương quan và mật độ điện tích.",
    usage: "Vật lý dùng \\rho cho khối lượng riêng, \\rho = m/V, và mật độ điện tích trong phương trình Maxwell \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0. Thống kê viết tương quan Pearson là \\rho_{XY} và tương quan hạng Spearman là \\rho. Lý thuyết biểu diễn dùng \\rho cho một biểu diễn, và cơ học lượng tử dùng nó cho ma trận mật độ. Biến thể \\varrho có đuôi cong mà một số tác giả dùng để tách hai nghĩa. Đừng nhầm \\rho với chữ p Latinh, trông giống trong nhiều phông.",
  },
  "sigma": {
    name: "Sigma",
    meaning: "Chữ sigma Hy Lạp thường: độ lệch chuẩn, hàm kích hoạt và sigma-đại số.",
    usage: "Thống kê viết độ lệch chuẩn là \\sigma và phương sai là \\sigma^2. Học máy dùng \\sigma(x) = 1/(1 + e^{-x}) cho hàm sigmoid logistic và \\sigma cho một hàm kích hoạt tổng quát. Lý thuyết độ đo nói về các \\sigma-đại số, vật lý dùng \\sigma cho tiết diện tán xạ, độ dẫn điện và ma trận Pauli \\sigma_x, còn đại số tuyến tính dùng \\sigma_i cho giá trị kỳ dị. Biến thể sigma cuối từ \\varsigma giống chữ s Latinh và hiếm khi dùng trong toán. Đừng dùng chữ hoa \\Sigma cho phép lấy tổng; đó là \\sum.",
  },
  "sigma-upper": {
    name: "Sigma hoa",
    meaning: "Chữ Sigma Hy Lạp hoa với tư cách một chữ cái, chủ yếu dùng cho ma trận hiệp phương sai và bảng chữ cái.",
    usage: "Trong thống kê, \\Sigma chỉ ma trận hiệp phương sai, như trong \\mathbf{x} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\Sigma), và phân tích SVD viết A = U\\Sigma V^\\top. Lý thuyết ngôn ngữ hình thức dùng \\Sigma cho một bảng chữ cái và \\Sigma^* cho mọi xâu trên nó. Để lấy tổng, hãy dùng \\sum: \\Sigma là một chữ cái thông thường có kích thước cố định, không lớn lên trong công thức hiển thị và không mang cận. Lý thuyết độ phức tạp dùng \\Sigma_k^p cho phân cấp đa thức. Chữ Hy Lạp hoa in đứng; \\varSigma là biến thể nghiêng.",
  },
  "tau": {
    name: "Tau",
    meaning: "Chữ tau Hy Lạp thường, dùng cho hằng số thời gian, mômen lực, thời gian riêng và tương quan hạng Kendall.",
    usage: "Vật lý viết mômen lực là \\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}, hằng số thời gian trong e^{-t/\\tau}, và thời gian riêng \\tau trong thuyết tương đối. Thống kê có \\tau của Kendall, và một số tác giả dùng \\tau = 2\\pi làm hằng số đường tròn. Lý thuyết số dùng \\tau(n) cho số các ước, và dạng modular dùng \\tau cho một điểm trong nửa mặt phẳng trên. Lý thuyết kiểu thường viết các kiểu là \\tau và \\sigma. Không có lệnh \\Tau, vì tau hoa giống chữ T Latinh. Trong một số phông, \\tau giống chữ t nhỏ, nên hãy chọn tên khác biệt cho các biến gần nhau.",
  },
  "upsilon": {
    name: "Upsilon",
    meaning: "Chữ upsilon Hy Lạp thường, một chữ hiếm dùng, trông rất giống chữ u hoặc v Latinh.",
    usage: "Chữ thường \\upsilon ít gặp trong toán học, chủ yếu vì nó dễ bị nhầm với u và với \\nu. Nó xuất hiện trong vật lý hạt, với meson Upsilon thường viết bằng chữ hoa, và đôi khi làm vận tốc hay một biến chỉ số tổng quát. Nếu cần một biến mới, một chữ cái ít mơ hồ hơn thường là lựa chọn tốt hơn. Khi thực sự dùng nó, hãy định nghĩa rõ ràng. \\upsilon của LaTeX in nghiêng như các chữ Hy Lạp thường khác, còn chữ hoa \\Upsilon có lệnh riêng.",
  },
  "upsilon-upper": {
    name: "Upsilon hoa",
    meaning: "Chữ Upsilon Hy Lạp hoa, nổi tiếng nhất với meson Upsilon trong vật lý hạt.",
    usage: "\\Upsilon chỉ họ meson bottomonium, \\Upsilon(1S), \\Upsilon(2S), trong vật lý hạt. Trong toán học nó hiếm gặp, đôi khi đặt tên cho một hàm hay một tập khi các chữ khác đã được dùng. Khác với alpha hay beta hoa, upsilon hoa có hình dạng riêng trong Computer Modern với hai nhánh uốn cong, nên nó không chỉ là chữ Y Latinh và có lệnh riêng. Giống các chữ Hy Lạp hoa khác, nó in đứng; \\varUpsilon cho dạng nghiêng. Hãy chú ý độ dễ đọc trên trang trình chiếu, nơi nó có thể trông như chữ Y.",
  },
  "phi": {
    name: "Phi",
    meaning: "Chữ phi Hy Lạp thường, dùng cho góc, tỉ lệ vàng, hàm phi Euler và ánh xạ đặc trưng.",
    usage: "\\phi cho dạng khép kín có nét gạch, còn \\varphi cho dạng mở có vòng; nhiều tác giả chọn \\varphi cho hàm và giữ \\phi cho góc. Lý thuyết số viết hàm phi Euler là \\varphi(n) hoặc \\phi(n), tỉ lệ vàng là \\phi = (1 + \\sqrt{5})/2, và tọa độ cầu dùng \\phi cho một góc. Học máy dùng \\phi(x) cho ánh xạ đặc trưng trong các phương pháp hạt nhân, và vật lý dùng nó cho thế vô hướng và hàm sóng. Đừng nhầm \\phi với \\emptyset hay chữ Ø của các ngôn ngữ Bắc Âu.",
  },
  "phi-upper": {
    name: "Phi hoa",
    meaning: "Chữ Phi Hy Lạp hoa, dùng cho hàm phân phối tích lũy chuẩn tắc, từ thông và các thế.",
    usage: "Thống kê viết hàm phân phối tích lũy của phân phối chuẩn tắc là \\Phi(z), với chữ thường \\phi(z) cho hàm mật độ. Vật lý dùng \\Phi_B cho từ thông và \\Phi cho điện thế, còn kỹ thuật dùng nó cho thông lượng nói chung. Trong đại số tuyến tính và tối ưu hóa, \\Phi có thể đặt tên cho ma trận thiết kế gồm các hàm cơ sở. Chữ Hy Lạp hoa in đứng trong LaTeX; \\varPhi cho biến thể nghiêng. Đừng nhầm \\Phi với \\emptyset hay với dấu khoanh tròn \\oslash. Nghịch đảo của nó \\Phi^{-1} cho các phân vị chuẩn như z_{0.975} \\approx 1.96.",
  },
  "chi": {
    name: "Chi (khi)",
    meaning: "Chữ chi Hy Lạp thường, dùng cho phân phối khi bình phương, hàm đặc trưng và độ cảm từ.",
    usage: "Thống kê khi bình phương \\chi^2 = \\sum (O_i - E_i)^2/E_i là ứng dụng nổi tiếng nhất của nó, cùng với \\chi^2_k cho phân phối với k bậc tự do. Lý thuyết tập hợp và xác suất viết hàm chỉ thị hay hàm đặc trưng của một tập là \\chi_A. Tô pô dùng \\chi(M) cho đặc trưng Euler, lý thuyết đồ thị dùng \\chi(G) cho sắc số, và vật lý dùng \\chi cho độ cảm từ. Lưu ý rằng \\chi thò xuống dưới đường cơ sở, nên hãy kiểm tra vị trí chỉ số dưới. Đừng nhầm nó với chữ x Latinh hay toán tử \\times.",
  },
  "psi": {
    name: "Psi",
    meaning: "Chữ psi Hy Lạp thường, chữ cái quy ước cho hàm sóng lượng tử và hàm digamma.",
    usage: "Cơ học lượng tử viết hàm sóng là \\psi(x, t) và trạng thái là |\\psi\\rangle trong ký hiệu Dirac, với phương trình Schrödinger i\\hbar\\,\\partial_t \\psi = \\hat{H}\\psi. Các hàm đặc biệt dùng \\psi(x) = \\Gamma'(x)/\\Gamma(x) cho hàm digamma. Động lực học chất lưu dùng \\psi cho hàm dòng, và giải tích wavelet dùng \\psi cho wavelet mẹ. Trong ký hiệu bra-ket, \\langle \\psi | \\phi \\rangle dùng \\langle và \\rangle, không dùng dấu nhỏ hơn và lớn hơn. Chữ hoa \\Psi là một lệnh riêng. Điều kiện chuẩn hóa đòi hỏi \\int |\\psi|^2\\,dx = 1.",
  },
  "psi-upper": {
    name: "Psi hoa",
    meaning: "Chữ Psi Hy Lạp hoa, thường là hàm sóng nhiều hạt hoặc một trạng thái trong cơ học lượng tử.",
    usage: "Vật lý dùng \\Psi cho hàm sóng toàn phần hay hàm sóng nhiều hạt và giữ \\psi cho trạng thái một hạt, như trong phương trình Schrödinger phụ thuộc thời gian cho \\Psi(\\mathbf{r}, t). Vật lý hạt viết meson J/\\psi bằng chữ thường, nhưng \\Psi được dùng cho một số trạng thái charmonium. Trong toán học, nó có thể đặt tên cho một hàm hay một hàm tử khi các chữ khác đã được dùng. Chữ Hy Lạp hoa in đứng; \\varPsi cho phiên bản nghiêng. Tâm lý học cũng dùng ký hiệu này làm biểu tượng, nhưng cách dùng đó hiếm khi xuất hiện trong công thức.",
  },
  "omega": {
    name: "Omega",
    meaning: "Chữ omega Hy Lạp thường, dùng cho tần số góc, kết quả mẫu và số thứ tự vô hạn đầu tiên.",
    usage: "Vật lý viết tần số góc là \\omega = 2\\pi f, nên một dao động tử điều hòa là x(t) = A\\cos(\\omega t + \\varphi). Xác suất dùng \\omega \\in \\Omega cho một kết quả trong không gian mẫu, và lý thuyết tập hợp dùng \\omega cho số thứ tự vô hạn đầu tiên. Lý thuyết độ phức tạp viết omega nhỏ \\omega(n) cho các cận dưới chặt, và hình học vi phân dùng \\omega cho các dạng vi phân. Lý thuyết số có \\omega(n), số các ước nguyên tố phân biệt. Cẩn thận đừng nhầm \\omega với chữ w Latinh trong ghi chép viết tay.",
  },
  "omega-upper": {
    name: "Omega hoa",
    meaning: "Chữ Omega Hy Lạp hoa, dùng cho đơn vị ohm, không gian mẫu và cận dưới tiệm cận.",
    usage: "Là đơn vị, \\Omega là ohm, nên một điện trở là 10\\,\\mathrm{k}\\Omega; hãy tách số và đơn vị bằng một khoảng trắng hẹp. Xác suất viết không gian mẫu là \\Omega trong bộ ba (\\Omega, \\mathcal{F}, P). Phân tích thuật toán dùng \\Omega(n \\log n) cho cận dưới, cùng với O và \\Theta. Giải tích thường viết một miền mở là \\Omega \\subset \\mathbb{R}^n. Chữ Hy Lạp hoa in đứng, và \\varOmega cho biến thể nghiêng. Đừng nhầm \\Omega với mho, chữ omega lộn ngược từng được dùng cho đơn vị siemens.",
  },
};

export default text;
