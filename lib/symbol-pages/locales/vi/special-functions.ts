import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/special-functions/<slug>. */
const text: SymbolPageTranslations = {
  "gamma-function": {
    name: "Hàm Gamma",
    meaning: "Hàm Gamma, mở rộng của giai thừa sang số phức với Gamma(n) = (n-1)!.",
    usage: "Được định nghĩa bởi \\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt với \\operatorname{Re} z > 0, hàm này thỏa mãn \\Gamma(z+1) = z\\Gamma(z) và \\Gamma(1/2) = \\sqrt{\\pi}. Công thức phản xạ \\Gamma(z)\\Gamma(1-z) = \\pi/\\sin(\\pi z) và công thức xấp xỉ Stirling là các công cụ chuẩn. \\Gamma in chữ gamma hoa đứng thẳng, kiểu thông dụng; \\varGamma cho biến thể nghiêng. Nó xuất hiện trong hằng số chuẩn hóa của các phân phối gamma, beta, khi bình phương và Student t. Hãy dùng \\, trước dt trong tích phân. Đừng nhầm hàm này với \\gamma, hằng số Euler-Mascheroni.",
  },
  "beta-function": {
    name: "Hàm Beta",
    meaning: "Hàm Beta B(x, y), một tích phân trên [0, 1] gắn chặt với hàm Gamma.",
    usage: "Hàm Beta là B(x, y) = \\int_0^1 t^{x-1}(1-t)^{y-1}\\,dt = \\frac{\\Gamma(x)\\Gamma(y)}{\\Gamma(x+y)}, và nó chuẩn hóa phân phối beta trong thống kê Bayes. Nói chặt chẽ, ký hiệu này là chữ beta hoa của Hy Lạp, nhưng LaTeX không có lệnh \\Beta vì nó trông giống hệt chữ B Latinh, nên B là đúng; một số tác giả viết \\mathrm{B} để đánh dấu đây là hàm. Hàm có tính đối xứng, B(x, y) = B(y, x). Phiên bản không đầy đủ là B(z; a, b) và dạng chính quy hóa là I_z(a, b). Tránh trùng với số Bell hoặc số Bernoulli B_n.",
  },
  "riemann-zeta-function": {
    name: "Hàm zeta Riemann",
    meaning: "Hàm zeta Riemann, định nghĩa với Re s > 1 bằng tổng chuỗi 1/n^s và được thác triển ra toàn mặt phẳng phức.",
    usage: "\\zeta(s) = \\sum_{n=1}^\\infty n^{-s} nối giải tích với số nguyên tố qua tích Euler \\prod_p (1 - p^{-s})^{-1}. Các giá trị nổi tiếng gồm \\zeta(2) = \\pi^2/6 (bài toán Basel) và \\zeta(-1) = -1/12 theo thác triển giải tích. Giả thuyết Riemann nói rằng các không điểm không tầm thường nằm trên đường \\operatorname{Re} s = 1/2. Hãy dùng \\zeta, có thể trông giống \\xi khi viết tay nhưng phân biệt rõ khi in. Theo quy ước, biến là s = \\sigma + it. Hàm zeta Hurwitz là \\zeta(s, a), và trong vật lý \\zeta thường xuất hiện trong các tích phân Bose-Einstein.",
  },
  "error-function": {
    name: "Hàm sai số",
    meaning: "Hàm sai số: tích phân có hệ số chuẩn hóa của hàm Gauss e^{-t^2} từ 0 đến x, dùng cho xác suất của phân phối chuẩn.",
    usage: "Định nghĩa là \\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2}\\,dt, với giới hạn \\pm 1 tại \\pm\\infty. Hàm phân phối tích lũy chuẩn tắc là \\Phi(x) = \\frac{1}{2}\\big[1 + \\text{erf}(x/\\sqrt{2})\\big], và erf giải phương trình truyền nhiệt với điều kiện ban đầu dạng bậc thang. \\text{erf} in đứng thẳng, nhưng nó theo phông chữ xung quanh, nên sẽ nghiêng bên trong các định lý; \\operatorname{erf}, hoặc một \\DeclareMathOperator trong preamble, ổn định hơn và thêm khoảng cách đúng. Đây là hàm lẻ: \\text{erf}(-x) = -\\text{erf}(x). Hàm ngược là \\text{erf}^{-1}, dùng để tính phân vị của phân phối chuẩn.",
  },
  "complementary-error": {
    name: "Hàm sai số bù",
    meaning: "Hàm sai số bù, 1 - erf(x): tích phân đuôi Gauss có hệ số chuẩn hóa từ x đến vô cùng.",
    usage: "\\text{erfc}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_x^\\infty e^{-t^2}\\,dt = 1 - \\text{erf}(x), và đây là dạng được ưu tiên cho các xác suất đuôi nhỏ, vì tính 1 - \\text{erf}(x) bằng số bị mất độ chính xác khi x lớn. Nó cho tỉ lệ lỗi bit trong viễn thông, Q(x) = \\frac{1}{2}\\text{erfc}(x/\\sqrt{2}), và các phân bố khuếch tán trong truyền nhiệt. Phiên bản nhân tỉ lệ \\text{erfcx}(x) = e^{x^2}\\text{erfc}(x) tránh hiện tượng tràn dưới. Giống erf, \\operatorname{erfc} vẫn đứng thẳng trong ngữ cảnh in nghiêng và tự đặt khoảng cách đúng, nên là lựa chọn an toàn hơn. Khi x lớn, nó xấp xỉ e^{-x^2}/(x\\sqrt{\\pi}).",
  },
  "bessel-j": {
    name: "Hàm Bessel loại một",
    meaning: "Hàm Bessel loại một cấp n, nghiệm của phương trình Bessel hữu hạn tại gốc tọa độ.",
    usage: "J_n là nghiệm của x^2 y'' + x y' + (x^2 - n^2) y = 0 và có khai triển chuỗi \\sum_m \\frac{(-1)^m}{m!\\,\\Gamma(m+n+1)} (x/2)^{2m+n}. Nó mô tả mặt trống dao động, ống dẫn sóng hình trụ và nhiễu xạ qua lỗ tròn, nơi vân Airy chứa J_1. Với cấp không nguyên, theo quy ước viết J_\\nu(x) với \\nu. Hàm sinh là e^{(x/2)(t - 1/t)} = \\sum_n J_n(x) t^n. Cần dấu ngoặc nhọn cho các cấp phức hợp, J_{n+1}(x). Các không điểm của nó thường được viết j_{n,k} và xác định các tần số cộng hưởng của màng tròn.",
  },
  "bessel-y": {
    name: "Hàm Bessel loại hai",
    meaning: "Hàm Bessel loại hai cấp n, nghiệm của phương trình Bessel có kỳ dị tại gốc tọa độ.",
    usage: "Y_n, còn gọi là hàm Weber hoặc hàm Neumann và được viết N_n trong một số sách vật lý, là nghiệm độc lập thứ hai của phương trình Bessel, với Y_n(x) \\to -\\infty khi x \\to 0^+. Với \\nu không nguyên, Y_\\nu(x) = \\frac{J_\\nu(x)\\cos(\\nu\\pi) - J_{-\\nu}(x)}{\\sin(\\nu\\pi)}, còn các cấp nguyên được định nghĩa bằng giới hạn. Trong bài toán biên trên toàn bộ hình tròn, số hạng Y_n bị loại bỏ để bảo đảm tính chính quy tại tâm, nhưng được giữ lại trên hình vành khăn. Các hàm Hankel kết hợp cả hai: H_n^{(1)} = J_n + iY_n.",
  },
  "modified-bessel-i": {
    name: "Hàm Bessel biến dạng loại một",
    meaning: "Hàm Bessel biến dạng loại một, nghiệm của phương trình Bessel biến dạng tăng theo hàm mũ.",
    usage: "I_n là nghiệm của x^2 y'' + x y' - (x^2 + n^2) y = 0 và liên hệ với J_n qua I_n(x) = i^{-n} J_n(ix). Khác với J_n, nó không dao động; nó tăng như e^x/\\sqrt{2\\pi x}. Nó xuất hiện trong dẫn nhiệt trong hình trụ, trong hằng số chuẩn hóa 2\\pi I_0(\\kappa) của phân phối von Mises, và trong phân phối Rice. Hãy dùng \\nu cho cấp tổng quát, I_\\nu(x). Đừng nhầm nó với ma trận đơn vị I_n hay đại lượng thông tin I(X; Y); đối số trong ngoặc thường giúp phân biệt, nhưng một định nghĩa sẽ hữu ích.",
  },
  "modified-bessel-k": {
    name: "Hàm Bessel biến dạng loại hai",
    meaning: "Hàm Bessel biến dạng loại hai, nghiệm tắt dần của phương trình Bessel biến dạng.",
    usage: "K_n, đôi khi gọi là hàm Macdonald, tắt dần như \\sqrt{\\pi/(2x)}\\,e^{-x} khi x lớn và tiến ra vô cùng tại gốc tọa độ. Nó đi cặp với I_n thành hai nghiệm độc lập của phương trình Bessel biến dạng. Nó xuất hiện trong hạt nhân hiệp phương sai Matern dùng trong quá trình Gauss, trong thế Yukawa hai chiều, và trong hằng số chuẩn hóa của phân phối Gauss nghịch đảo suy rộng. Cần cẩn thận: K(k) cũng chỉ tích phân elliptic đầy đủ và K_n chỉ đồ thị đầy đủ, nên hãy nói rõ K nào khi các lĩnh vực chồng lấn.",
  },
  "legendre-p": {
    name: "Đa thức Legendre",
    meaning: "Đa thức Legendre bậc n, trực giao trên [-1, 1] với trọng số 1.",
    usage: "Các đa thức Legendre bắt đầu bằng P_0 = 1, P_1 = x, P_2 = \\frac{1}{2}(3x^2 - 1) và tuân theo công thức Rodrigues P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n}(x^2 - 1)^n. Tính trực giao được viết \\int_{-1}^1 P_m P_n\\,dx = \\frac{2}{2n+1}\\delta_{mn}. Chúng xuất hiện trong khai triển đa cực, hàm điều hòa cầu và các nút cầu phương Gauss-Legendre. Các hàm Legendre liên kết được viết P_n^m(x) hoặc P_\\ell^m(\\cos\\theta). Các nhà vật lý thường dùng \\ell cho bậc. Đừng nhầm với đồ thị đường P_n hay xác suất P; đối số x thường báo hiệu đó là đa thức.",
  },
  "legendre-q": {
    name: "Hàm Legendre loại hai",
    meaning: "Hàm Legendre loại hai, nghiệm thứ hai của phương trình Legendre, có kỳ dị tại x = 1 và -1.",
    usage: "Q_n là nghiệm của cùng phương trình với P_n, (1 - x^2) y'' - 2x y' + n(n+1) y = 0, nhưng không phải đa thức: chẳng hạn Q_0(x) = \\frac{1}{2}\\ln\\frac{1+x}{1-x} và Q_1(x) = x Q_0(x) - 1. Do các kỳ dị logarit tại \\pm 1, nó thường bị loại bỏ trong các bài toán trên toàn mặt cầu và chỉ được giữ khi miền không chứa các cực, như hình nón hoặc miền bên ngoài một elipxoit tròn xoay dẹt dài. Các phiên bản liên kết là Q_n^m(x). Hãy dùng \\ln với \\frac cho logarit, và \\left( \\right) nếu đối số cao.",
  },
  "hermite-polynomial": {
    name: "Đa thức Hermite",
    meaning: "Đa thức Hermite bậc n, trực giao trên đường thẳng thực với trọng số Gauss.",
    usage: "Đa thức Hermite theo quy ước vật lý tuân theo H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}, bắt đầu bằng 1, 2x, 4x^2 - 2, và cho các hàm riêng của dao động tử điều hòa lượng tử \\psi_n \\propto H_n(x) e^{-x^2/2}. Các nhà xác suất dùng cách chuẩn hóa khác, viết He_n(x), với trọng số e^{-x^2/2}; hai họ liên hệ qua phép đổi tỉ lệ, nên hãy ghi rõ bạn dùng họ nào. Công thức truy hồi là H_{n+1} = 2x H_n - 2n H_{n-1}. Chữ H còn dùng cho entropy, hàm bậc thang Heaviside và Hamiltonian, nên một định nghĩa ngắn giúp ích cho người đọc.",
  },
  "laguerre-polynomial": {
    name: "Đa thức Laguerre",
    meaning: "Đa thức Laguerre bậc n, trực giao trên [0, vô cùng) với trọng số e^{-x}.",
    usage: "Các đa thức Laguerre thỏa mãn công thức Rodrigues L_n(x) = \\frac{e^x}{n!} \\frac{d^n}{dx^n}(e^{-x} x^n), bắt đầu bằng L_0 = 1 và L_1 = 1 - x, và là nghiệm của x y'' + (1 - x) y' + n y = 0. Dạng suy rộng L_n^{(\\alpha)}(x), với chỉ số trên trong ngoặc đơn, cho các hàm sóng xuyên tâm của nguyên tử hydro. Các sách vật lý cũ dùng cách chuẩn hóa khác, sai khác một thừa số n!, nên hãy kiểm tra nguồn trước khi trộn công thức. Chúng cũng định nghĩa cầu phương Gauss-Laguerre cho các tích phân có trọng số e^{-x}. Tránh nhầm với hàm Lagrange hay hàm mất mát L.",
  },
  "chebyshev-t": {
    name: "Đa thức Chebyshev loại một",
    meaning: "Đa thức Chebyshev loại một, định nghĩa bởi T_n(cos theta) = cos(n theta).",
    usage: "Các đa thức Chebyshev T tuân theo T_0 = 1, T_1 = x và T_{n+1} = 2x T_n - T_{n-1}, cho T_2 = 2x^2 - 1. Chúng trực giao trên [-1, 1] với trọng số 1/\\sqrt{1 - x^2}, và trong các đa thức monic bậc n, 2^{1-n} T_n có giá trị lớn nhất nhỏ nhất trên đoạn đó. Tính chất minimax này là nền tảng của các nút Chebyshev trong nội suy, giúp tránh hiện tượng Runge, và của các phương pháp phổ Chebyshev. Chữ T đôi khi trùng với nhiệt độ, chu kỳ hoặc phép chuyển vị, nên hãy định nghĩa khi cần; dùng ^\\top cho chuyển vị để rõ ràng.",
  },
  "chebyshev-u": {
    name: "Đa thức Chebyshev loại hai",
    meaning: "Đa thức Chebyshev loại hai, với U_n(cos theta) sin theta = sin((n+1) theta).",
    usage: "Các đa thức U có chung công thức truy hồi U_{n+1} = 2x U_n - U_{n-1} với T_n nhưng bắt đầu từ U_0 = 1, U_1 = 2x. Chúng trực giao trên [-1, 1] với trọng số \\sqrt{1 - x^2} và liên hệ với loại một qua T_n'(x) = n U_{n-1}(x). U_n xuất hiện trong đa thức đặc trưng của đồ thị đường, trong các bài toán trị riêng Toeplitz ba đường chéo, và trong cầu phương Gauss-Chebyshev loại hai. Hãy viết đẳng thức định nghĩa bằng \\frac và \\sin như dưới đây, dùng \\theta thay vì t để khớp với quy ước lượng giác.",
  },
  "hypergeometric": {
    name: "Hàm siêu bội",
    meaning: "Hàm siêu bội Gauss: chuỗi lũy thừa theo z với hệ số được xây dựng từ các ký hiệu Pochhammer của a, b, c.",
    usage: "Hàm được định nghĩa là {}_2F_1(a,b;c;z) = \\sum_{n \\geq 0} \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!} với |z| < 1, và nó trở thành nhiều hàm sơ cấp và hàm đặc biệt trong các trường hợp riêng, ví dụ \\ln(1+z) = z\\,{}_2F_1(1,1;2;-z). Nhóm rỗng {} cho chỉ số dưới bên trái 2 một chỗ để gắn vào, đây là mẹo chuẩn cho chỉ số đặt trước; lệnh \\prescript cho phép điều khiển tinh hơn. Dấu chấm phẩy ngăn cách các tham số ở tử, các tham số ở mẫu và đối số. Dạng tổng quát {}_pF_q theo cùng mẫu, và định lý Gauss cho giá trị của nó tại z = 1.",
  },
  "digamma": {
    name: "Hàm digamma",
    meaning: "Hàm digamma, đạo hàm logarit của hàm Gamma: Gamma'(x)/Gamma(x).",
    usage: "\\psi(x) = \\frac{d}{dx}\\ln\\Gamma(x) thỏa mãn \\psi(x+1) = \\psi(x) + 1/x, nên \\psi(n+1) = H_n - \\gamma với H_n là số điều hòa và \\gamma là hằng số Euler-Mascheroni, và \\psi(1) = -\\gamma. Nó xuất hiện trong suy luận Bayes biến phân cho phân phối Dirichlet, nơi \\mathbb{E}[\\ln \\theta_k] = \\psi(\\alpha_k) - \\psi(\\sum_j \\alpha_j). Chữ Hy Lạp \\psi là chuẩn; một số sách viết F(x). Đừng dùng \\digamma, lệnh này in chữ cái Hy Lạp cổ digamma chứ không phải hàm. Trong cơ học lượng tử, \\psi là hàm sóng, nên hãy định nghĩa nó.",
  },
  "polygamma": {
    name: "Hàm polygamma",
    meaning: "Hàm polygamma cấp n: đạo hàm cấp (n+1) của ln Gamma(x), hay đạo hàm cấp n của hàm digamma.",
    usage: "\\psi^{(n)}(x) = \\frac{d^{n+1}}{dx^{n+1}} \\ln \\Gamma(x), với \\psi^{(0)} = \\psi là hàm digamma và \\psi^{(1)} là hàm trigamma. Các giá trị đáng chú ý: \\psi^{(1)}(1) = \\pi^2/6, và tổng quát \\psi^{(n)}(1) = (-1)^{n+1} n!\\,\\zeta(n+1). Hàm trigamma cho thông tin Fisher và các số hạng phương sai trong mô hình gamma và Dirichlet. Chỉ số trên trong ngoặc đơn đánh dấu cấp đạo hàm, không phải lũy thừa; chỉ viết ^n sẽ bị đọc là phép lũy thừa. Cần dấu ngoặc nhọn quanh (n) để cả nhóm được nâng lên. Nhiều tác giả viết hàm trigamma đơn giản là \\psi'(x), cũng chuẩn như vậy.",
  },
  "elliptic-integral-k": {
    name: "Tích phân elliptic đầy đủ loại một",
    meaning: "Tích phân elliptic đầy đủ loại một, tích phân của 1/sqrt(1 - k^2 sin^2 theta) trên một phần tư chu kỳ.",
    usage: "K(k) = \\int_0^{\\pi/2} \\frac{d\\theta}{\\sqrt{1 - k^2 \\sin^2\\theta}}, với K(0) = \\pi/2 và tăng ra vô cùng theo kiểu logarit khi k \\to 1. Nó cho chu kỳ chính xác của con lắc, T = 4\\sqrt{L/g}\\,K(\\sin(\\theta_0/2)). Cạm bẫy lớn nhất là quy ước đối số: một số sách và phần mềm dùng tham số m = k^2, viết K(m), nên K(0.5) có thể chỉ hai số khác nhau. Hãy nêu rõ bạn dùng môđun k hay tham số m. Phiên bản không đầy đủ là F(\\phi, k). Trung bình cộng-nhân (AGM) cho một công thức tính nhanh: K(k) = \\frac{\\pi}{2\\,\\mathrm{AGM}(1, \\sqrt{1-k^2})}.",
  },
  "elliptic-integral-e": {
    name: "Tích phân elliptic đầy đủ loại hai",
    meaning: "Tích phân elliptic đầy đủ loại hai, tích phân của sqrt(1 - k^2 sin^2 theta) trên một phần tư chu kỳ.",
    usage: "E(k) = \\int_0^{\\pi/2} \\sqrt{1 - k^2 \\sin^2\\theta}\\,d\\theta, với E(0) = \\pi/2 và E(1) = 1. Chu vi của elip có bán trục lớn a và tâm sai e là 4a\\,E(e), không có dạng đóng sơ cấp. Hệ thức Legendre liên hệ nó với K: E K' + E' K - K K' = \\pi/2, trong đó dấu phẩy trên chỉ môđun bù. Giống K, hãy kiểm tra xem nguồn dùng môđun k hay tham số m = k^2. Chữ E đơn thuần trùng với năng lượng, kỳ vọng và tập cạnh, nên hãy định nghĩa nó sớm.",
  },
  "dirac-delta-function": {
    name: "Hàm delta Dirac",
    meaning: "Hàm delta Dirac: một phân bố bằng không ở ngoài điểm 0 và có tích phân bằng 1, chọn ra f(0) dưới dấu tích phân.",
    usage: "Tính chất định nghĩa của nó là đẳng thức chọn lọc \\int f(x)\\,\\delta(x - a)\\,dx = f(a). Đây là một hàm suy rộng (phân bố), không phải hàm thông thường, và là đạo hàm của hàm bậc thang Heaviside, H'(x) = \\delta(x). Trong xử lý tín hiệu, nó mô hình hóa một xung đơn vị; biến đổi Fourier của nó bằng 1. Phép đổi tỉ lệ tuân theo \\delta(ax) = \\delta(x)/|a|. Đừng nhầm nó với ký hiệu Kronecker \\delta_{ij}, một ký hiệu rời rạc bằng 1 khi i = j. Chữ thường \\delta khác với \\Delta (toán tử Laplace hoặc sai phân) và \\partial.",
  },
  "heaviside-step-function": {
    name: "Hàm bậc thang Heaviside",
    meaning: "Hàm bậc thang Heaviside: bằng 0 khi x âm và bằng 1 khi x dương, chuyển trạng thái tại gốc tọa độ.",
    usage: "Hàm bậc thang Heaviside H(x) mô hình hóa một tín hiệu được bật tại thời điểm không, và đạo hàm theo nghĩa phân bố của nó là delta Dirac: H'(x) = \\delta(x). Giá trị tại 0 là một quy ước, thường là 1/2 trong giải tích Fourier, 1 trong lý thuyết điều khiển, đôi khi để không xác định. Các ký hiệu thay thế gồm \\theta(x) trong vật lý, u(t) trong kỹ thuật, và hàm chỉ thị \\mathbf{1}_{x \\geq 0}. Hãy định nghĩa nó bằng môi trường cases cho rõ ràng. Vì H còn dùng cho entropy, đa thức Hermite và Hamiltonian, một định nghĩa ngắn ở lần dùng đầu giúp người đọc khỏi nhầm lẫn. Biến đổi Laplace của nó là 1/s.",
  },
};

export default text;
