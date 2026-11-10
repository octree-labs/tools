import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/physics/<slug>. */
const text: SymbolPageTranslations = {
  "reduced-planck-constant-h-bar": {
    name: "Hằng số Planck rút gọn (h gạch)",
    meaning: "Hằng số Planck rút gọn ħ = h/2π, lượng tử của mômen động lượng xuất hiện khắp cơ học lượng tử.",
    usage: "Nó xuất hiện trong hệ thức giao hoán chính tắc [x, p] = i\\hbar, năng lượng photon E = \\hbar\\omega và hệ thức bất định \\Delta x\\, \\Delta p \\geq \\hbar/2. Giá trị của nó vào khoảng 1.055 \\times 10^{-34} J s. \\hslash là một biến thể với nét gạch xiên thay cho gạch ngang; hãy chọn một dạng và giữ nguyên. Chữ h thường, không có gạch, là hằng số chưa rút gọn trong E = h\\nu. Trong công trình lý thuyết, hệ đơn vị với \\hbar = 1 là chuẩn mực, vì vậy hãy nêu rõ lựa chọn này khi bạn lược nó khỏi các phương trình.",
  },
  "bra-vector": {
    name: "Vectơ bra",
    meaning: "Một bra trong ký hiệu Dirac: vectơ đối ngẫu (vectơ hàng), tức một phiếm hàm tuyến tính tác động lên các ket.",
    usage: "Bra \\langle \\psi | là chuyển vị liên hợp của ket |\\psi\\rangle, nên nó là thứ bạn đặt bên trái một tích trong hay một giá trị kỳ vọng. Hãy dùng \\langle, đừng bao giờ dùng dấu nhỏ hơn <, vốn là một quan hệ với khoảng cách rộng và hình dạng sai. Một dấu | đơn thuần là chấp nhận được ở đây, nhưng \\rvert cho khoảng cách đúng của dấu ngoặc đóng. Nếu dùng nhiều lần, hãy định nghĩa \\newcommand{\\bra}[1]{\\langle #1 \\rvert}. Khi nhãn trạng thái cao, \\left\\langle \\frac{\\psi}{2} \\right| co giãn đồng thời cả hai dấu ngoặc.",
  },
  "ket-vector": {
    name: "Vectơ ket",
    meaning: "Một ket trong ký hiệu Dirac, biểu diễn một trạng thái lượng tử dưới dạng vectơ cột trong không gian Hilbert.",
    usage: "Các trạng thái là ket: |0\\rangle và |1\\rangle cho một qubit, |n\\rangle cho các mức của dao động tử điều hòa, và các chồng chập như \\alpha|0\\rangle + \\beta|1\\rangle. Dấu ngoặc nhọn là \\rangle, không phải >. Viết \\lvert \\psi \\rangle cho TeX một dấu ngoặc mở tường minh, nhờ đó khoảng cách đúng ngay cả sau dấu trừ. Một macro như \\newcommand{\\ket}[1]{\\lvert #1 \\rangle} giữ cho hàng trăm ket nhất quán. Tích tenxơ được viết |\\psi\\rangle \\otimes |\\phi\\rangle hoặc gọn hơn là |\\psi\\phi\\rangle. Một ket nhân với một bra, |\\psi\\rangle\\langle\\psi|, là một toán tử chiếu hoặc một ma trận mật độ.",
  },
  "braket": {
    name: "Braket (tích bra-ket)",
    meaning: "Tích trong của hai trạng thái, nơi một bra gặp một ket; bình phương môđun của nó cho xác suất chuyển dời.",
    usage: "Biên độ \\langle \\phi | \\psi \\rangle có tính đối xứng liên hợp, \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*, và điều kiện chuẩn hóa là \\langle \\psi | \\psi \\rangle = 1. Phần tử ma trận kẹp một toán tử ở giữa: \\langle \\phi | \\hat{A} | \\psi \\rangle. Hãy dùng một dấu | đơn thuần ở giữa thay vì \\mid, vì khoảng cách quan hệ của nó đẩy hai nửa ra xa nhau. Với nội dung cao, \\left\\langle \\phi \\middle| \\psi \\right\\rangle làm cho cả thanh ở giữa cũng giãn theo. Các nhà toán học viết cùng một đại lượng là (\\phi, \\psi) hoặc \\langle \\phi, \\psi \\rangle với dấu phẩy.",
  },
  "laplacian": {
    name: "Toán tử Laplace",
    meaning: "Toán tử Laplace, tổng các đạo hàm riêng cấp hai; nó đo mức độ một hàm khác với giá trị trung bình cục bộ của nó.",
    usage: "Phương trình Laplace \\nabla^2 \\phi = 0, phương trình Poisson \\nabla^2 \\phi = -\\rho/\\varepsilon_0, phương trình truyền nhiệt và phương trình sóng đều dùng đến nó. Các nhà vật lý ưa \\nabla^2, nhắc rằng nó là divergence của gradient; các nhà toán học thường viết \\Delta, ký hiệu có thể trùng với \\Delta chỉ sai phân hữu hạn hay độ biến thiên. Trong tọa độ Descartes \\nabla^2 f = f_{xx} + f_{yy} + f_{zz}, nhưng trong tọa độ cong sẽ xuất hiện thêm các số hạng. Với toán tử Laplace vectơ của một trường, hãy in đậm đối tượng để báo hiệu ý nghĩa khác.",
  },
  "d-alembertian": {
    name: "Toán tử d'Alembert",
    meaning: "Ký hiệu hình vuông, toán tử sóng d'Alembert trong thuyết tương đối và toán tử tất yếu trong logic modal.",
    usage: "Trong thuyết tương đối hẹp \\Box = \\partial^\\mu \\partial_\\mu kết hợp đạo hàm theo thời gian và không gian, nên phương trình sóng là \\Box \\phi = 0 và phương trình Klein-Gordon là (\\Box + m^2)\\phi = 0. Quy ước dấu thay đổi theo chữ ký của mêtric, vì vậy hãy nêu rõ quy ước của bạn. Các nhà logic modal đọc \\Box p là “tất yếu p”, và \\Diamond p là “có thể p”. Một số tài liệu viết \\Box^2 cho toán tử này, tương tự \\nabla^2. Ký hiệu trông giống \\square thường được dùng làm dấu kết thúc chứng minh; hãy kiểm tra lớp tài liệu của bạn dùng glyph nào cho QED.",
  },
  "calligraphic-l-lagrangian": {
    name: "L hoa thư pháp (hàm Lagrange)",
    meaning: "Chữ L hoa thư pháp, ký hiệu chuẩn cho mật độ Lagrange và, trong học máy, cho hàm mất mát.",
    usage: "Lý thuyết trường viết tác dụng là S = \\int \\mathcal{L}\\, d^4x, với phương trình Euler-Lagrange \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} = \\frac{\\partial \\mathcal{L}}{\\partial \\phi}. Cơ học cổ điển thường dùng chữ L thường cho chính hàm Lagrange và dành \\mathcal{L} cho các mật độ. Các bài báo học máy dùng \\mathcal{L}(\\theta) cho hàm mất mát, còn kỹ sư dùng nó cho phép biến đổi Laplace \\mathcal{L}\\{f\\}(s). Trong tối ưu hóa, hàm Lagrange với các nhân tử cũng được viết \\mathcal{L}(x, \\lambda). Hãy giới thiệu tường minh ý nghĩa bạn cần. Đối tác của nó qua phép biến đổi Legendre là hàm Hamilton \\mathcal{H}.",
  },
  "calligraphic-h-hamiltonian": {
    name: "H hoa thư pháp (hàm Hamilton)",
    meaning: "Chữ H hoa thư pháp, dùng cho hàm Hamilton (hàm năng lượng) và thường dùng cho không gian Hilbert.",
    usage: "Trong cơ học cổ điển, các phương trình Hamilton là \\dot{q} = \\partial \\mathcal{H}/\\partial p và \\dot{p} = -\\partial \\mathcal{H}/\\partial q. Cơ học lượng tử thường viết toán tử Hamilton là \\hat{H} và dùng \\mathcal{H} cho không gian Hilbert các trạng thái, nên hai nghĩa thư pháp này có thể va chạm trong cùng một bài báo. Vật lý thống kê dùng \\mathcal{H} cho phiếm hàm Hamilton trong trọng số Boltzmann e^{-\\beta \\mathcal{H}}. Lý thuyết học dùng nó cho một lớp giả thuyết. Hãy chọn các chữ cái khác nhau nếu có nhiều hơn một nghĩa xuất hiện. Lưu ý rằng \\mathcal chỉ áp dụng cho chữ in hoa với các phông mặc định.",
  },
  "tensor": {
    name: "Tenxơ",
    meaning: "Một tenxơ phản biến hạng 2, chẳng hạn tenxơ năng lượng-xung lượng, được viết với hai chỉ số Hy Lạp ở trên.",
    usage: "Thuyết tương đối rộng liên kết hình học với vật chất qua G_{\\mu\\nu} = 8\\pi G\\, T_{\\mu\\nu}, và định luật bảo toàn là \\nabla_\\mu T^{\\mu\\nu} = 0. Dấu ngoặc nhọn gom cả hai chỉ số vào một chỉ số trên; T^\\mu\\nu sẽ đặt \\nu trên đường cơ sở. Với tenxơ hỗn hợp, hãy giữ thứ tự ngang rõ ràng bằng một nhóm rỗng: T^{\\mu}{}_{\\nu} đặt chỉ số dưới sau chỉ số trên chứ không ngay bên dưới nó. Các chỉ số lặp lại trên và dưới tuân theo quy ước tổng Einstein. Theo quy ước, chỉ số Hy Lạp chạy trên không-thời gian, còn chỉ số Latinh chỉ chạy trên không gian.",
  },
  "christoffel-symbol": {
    name: "Ký hiệu Christoffel",
    meaning: "Ký hiệu Christoffel loại hai, mô tả cách các vectơ cơ sở tọa độ thay đổi đối với liên thông Levi-Civita.",
    usage: "Nó được tính từ mêtric theo \\Gamma^\\lambda_{\\mu\\nu} = \\frac{1}{2} g^{\\lambda\\sigma}(\\partial_\\mu g_{\\sigma\\nu} + \\partial_\\nu g_{\\sigma\\mu} - \\partial_\\sigma g_{\\mu\\nu}) và xuất hiện trong phương trình trắc địa cũng như trong đạo hàm hiệp biến. Dù có ký hiệu chỉ số, nó không phải là một tenxơ. Viết chỉ số trên và chỉ số dưới trên cùng một ký tự gốc sẽ xếp chúng thẳng đứng, đây là kiểu thông dụng ở đây vì ký hiệu đối xứng theo cặp chỉ số dưới. Chữ Gamma hoa mặc định đứng thẳng; \\varGamma cho phiên bản nghiêng nếu quy cách của bạn yêu cầu.",
  },
  "partial-time": {
    name: "Đạo hàm riêng theo thời gian",
    meaning: "Toán tử đạo hàm riêng theo thời gian t, giữ cố định mọi biến không gian.",
    usage: "Nó chi phối các phương trình tiến hóa: phương trình truyền nhiệt \\frac{\\partial u}{\\partial t} = k \\nabla^2 u, phương trình liên tục và phương trình Schrödinger. Trong dòng văn bản, một \\frac đầy đủ trông chật chội, nên hãy viết \\partial u/\\partial t hoặc dạng gọn \\partial_t u; dạng chỉ số dưới là chuẩn trong các bài báo về phương trình đạo hàm riêng. Trong công thức hiển thị hãy dùng \\frac, và \\dfrac nếu nó nằm trong một phân số hay ma trận mà vẫn phải giữ kích thước đầy đủ. Hãy phân biệt nó với đạo hàm toàn phần d/dt và với đạo hàm vật chất D/Dt dùng trong cơ học chất lưu.",
  },
  "vector-field": {
    name: "Trường vectơ",
    meaning: "Dấu mũi tên phía trên một chữ cái đánh dấu nó là vectơ, ở đây là điện trường E.",
    usage: "Vật lý nhập môn viết vectơ bằng mũi tên, \\vec{E}, \\vec{F} = q\\vec{E}, trong khi phần lớn tạp chí và sách nâng cao ưa chữ đậm, \\mathbf{E}, hoặc với chữ Hy Lạp là \\boldsymbol{\\omega}. \\vec là một dấu ngắn có độ rộng cố định, vừa cho một ký tự; với vectơ nhiều chữ cái như đoạn AB, \\overrightarrow{AB} kéo dài phủ toàn bộ nhãn. Hãy chọn một kiểu vectơ cho cả tài liệu. Vectơ đơn vị thường đội mũ, \\hat{x}, và để có i và j không dấu chấm bên dưới dấu, hãy dùng \\imath và \\jmath.",
  },
  "divergence": {
    name: "Toán tử div (divergence)",
    meaning: "Toán tử divergence, tích vô hướng của nabla với một trường vectơ, cho thông lượng thực đi ra trên một đơn vị thể tích.",
    usage: "Định luật Gauss \\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0 và định luật không có đơn cực từ \\nabla \\cdot \\mathbf{B} = 0 là các ứng dụng nổi tiếng nhất của nó, và dòng chảy không nén được đòi hỏi \\nabla \\cdot \\mathbf{u} = 0. \\cdot mang khoảng cách của toán tử hai ngôi, đúng như hình thức mong đợi. Hãy dùng \\cdot, không dùng dấu chấm câu hay \\bullet. Một số sách toán ưa \\operatorname{div} \\mathbf{F}, cách viết tránh coi nabla như một vectơ. Định lý divergence liên hệ nó với thông lượng qua biên: \\int_V \\nabla \\cdot \\mathbf{F}\\, dV = \\oint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}.",
  },
  "curl": {
    name: "Rôta (curl)",
    meaning: "Toán tử rota, tích có hướng của nabla với một trường vectơ, đo độ xoáy cục bộ hay mật độ lưu số của trường.",
    usage: "Định luật Faraday \\nabla \\times \\mathbf{E} = -\\partial \\mathbf{B}/\\partial t và định luật Ampère với hiệu chỉnh của Maxwell được viết bằng nó, còn trong chất lưu \\nabla \\times \\mathbf{u} là độ xoáy. Có hai đồng nhất thức đáng nhớ: rota của một gradient bằng không và divergence của một rota bằng không. \\times là toán tử hai ngôi, nên khoảng cách được đặt tự động. Các sách châu Âu đôi khi viết \\operatorname{rot} \\mathbf{F}, còn những tài liệu khác dùng \\operatorname{curl}. Rota chỉ được định nghĩa theo cách này trong ba chiều.",
  },
};

export default text;
