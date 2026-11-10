import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/complex/<slug>. */
const text: SymbolPageTranslations = {
  "imaginary-unit": {
    name: "Đơn vị ảo",
    meaning: "Đơn vị ảo, số có bình phương bằng −1; nền tảng của số học phức.",
    usage: "Các nhà toán học và vật lý viết i cho căn bậc hai của -1, cho ra z = a + bi và đại lượng i\\hbar trong phương trình Schrödinger. Trong chế độ toán, chữ i thường được in nghiêng, giống hệt một biến chỉ số, nên trong bài viết cũng có tổng theo i thì an toàn hơn khi dùng chữ đứng \\mathrm{i}, đúng như chuẩn trình bày ISO khuyến nghị; một macro như \\newcommand{\\iu}{\\mathrm{i}} giúp giữ nhất quán. Đừng dùng \\imath cho đơn vị ảo: đó là chữ i không dấu chấm, dùng để đặt dấu phụ như \\hat{\\imath} cho vectơ đơn vị. Trong lý thuyết trò chơi, i còn là chỉ số người chơi.",
  },
  "imaginary-unit-engineering": {
    name: "Đơn vị ảo trong kỹ thuật",
    meaning: "Ký hiệu kỹ thuật cho đơn vị ảo, được chọn vì chữ i đã dành cho cường độ dòng điện.",
    usage: "Kỹ sư điện viết trở kháng dưới dạng Z = R + jX và phasơ dưới dạng V e^{j\\omega t}, và Python cũng dùng j cho hằng số phức vì cùng lý do lịch sử. Sách xử lý tín hiệu cũng theo cách này, viết biến đổi Fourier với e^{-j\\omega t}. Cũng như với i, chữ đứng \\mathrm{j} phân biệt hằng số với biến chỉ số j. \\jmath, chữ j không dấu chấm, dùng để đặt dấu phụ như \\hat{\\jmath}, không dùng cho đơn vị ảo. Lưu ý nhiều giáo trình đặt j trước số, viết j5 thay vì 5j.",
  },
  "complex-number": {
    name: "Số phức",
    meaning: "Dạng đại số (dạng Descartes) của số phức, với phần thực a và phần ảo b.",
    usage: "Mọi số phức đều viết được dưới dạng a + bi với a và b thực; dạng này thuận tiện nhất cho phép cộng và để đọc ra \\Re z = a và \\Im z = b. Phép nhân và lũy thừa thường dễ hơn ở dạng cực r e^{i\\theta}. Viết bi, với đơn vị ảo đứng sau, là quy ước phổ biến, dù kỹ sư thường viết a + jb. Nếu tài liệu của bạn in i bằng chữ đứng, hãy giữ chữ đứng cả ở đây: a + b\\mathrm{i}. Khi b âm, hãy viết a - bi thay vì a + (-b)i, và với số cụ thể hãy đặt i sau chữ số, như 3 + 4i.",
  },
  "real-part": {
    name: "Phần thực",
    meaning: "Phần thực của số phức z: với z = a + bi, kết quả là số thực a.",
    usage: "Lệnh có sẵn \\Re in ra chữ R hoa kiểu Fraktur, ký hiệu truyền thống cho phần thực, nhưng nhiều tác giả hiện đại thấy nó khó đọc và viết \\operatorname{Re}(z) thay thế, cho ra chữ đứng 'Re' với khoảng cách toán tử. Dù chọn cách nào, \\Re chỉ là một ký hiệu, không phải toán tử, nên TeX không thêm khoảng trắng trước đối số; hãy dùng dấu ngoặc tròn hoặc một khoảng trắng hẹp. Một đẳng thức hữu ích là \\Re z = (z + \\bar{z})/2. Trong xử lý tín hiệu, \\Re\\{\\cdot\\} với ngoặc nhọn thường dùng để lấy tín hiệu vật lý từ một phasơ.",
  },
  "imaginary-part": {
    name: "Phần ảo",
    meaning: "Phần ảo của z, tức hệ số thực b trong z = a + bi (không phải số hạng bi).",
    usage: "Một lỗi thường gặp của sinh viên là nghĩ \\Im(3 + 4i) = 4i; thực ra nó bằng 4, một số thực. Ký hiệu này là chữ I kiểu Fraktur, và cũng như \\Re nó có thể khó nhận ra, nên \\operatorname{Im}(z) là lựa chọn thay thế phổ biến và dễ đọc hơn. Lưu ý Im còn là viết tắt của ảnh của một ánh xạ trong đại số; nếu cả hai nghĩa cùng xuất hiện, hãy viết \\operatorname{im} f cho ảnh để tránh xung đột. Các kết quả hữu ích gồm \\Im z = (z - \\bar{z})/(2i) và nửa mặt phẳng trên là tập hợp các điểm có \\Im z > 0.",
  },
  "complex-conjugate": {
    name: "Số phức liên hợp",
    meaning: "Số phức liên hợp của z, phép đối xứng qua trục thực: liên hợp của a + bi là a − bi.",
    usage: "Các nhà toán học viết \\bar{z}, và những đẳng thức như z\\bar{z} = |z|^2 khiến nó trở nên then chốt trong phép chia số phức. \\bar là dấu phụ có độ rộng cố định dành cho một ký tự; với liên hợp của cả một biểu thức hãy dùng \\overline{z + w}, dấu gạch này kéo dài trên toàn bộ đối số và giúp đẳng thức \\overline{z + w} = \\bar{z} + \\bar{w} dễ đọc. Các nhà vật lý thường viết z^* hơn và để dành dấu gạch ngang cho mục đích khác, như liên hợp Dirac \\bar{\\psi}. Trong phép tính Wirtinger, \\partial / \\partial \\bar{z} coi \\bar{z} như một biến độc lập.",
  },
  "complex-conjugate-star": {
    name: "Ký hiệu dấu sao của số phức liên hợp",
    meaning: "Ký hiệu dấu sao cho số phức liên hợp, chuẩn mực trong vật lý và kỹ thuật điện.",
    usage: "Cơ học lượng tử viết xác suất dưới dạng \\psi^* \\psi và tích vô hướng với các thành phần được lấy liên hợp, nên z^* là cách viết chuẩn ở đó. Ở chỉ số trên, dấu sao gõ trực tiếp là được; z^{\\ast} cho ra cùng một ký tự. Với ma trận, trong toán học A^* thường là ma trận chuyển vị liên hợp, còn các nhà vật lý viết A^\\dagger cho khái niệm đó và giữ A^* cho phép liên hợp từng phần tử, nên hãy nêu rõ quy ước của bạn. Dấu sao còn có thể đánh dấu nghiệm tối ưu (x^*) hoặc không gian đối ngẫu (V^*), nên tránh ký hiệu này nếu các nghĩa đó xuất hiện gần đó.",
  },
  "modulus": {
    name: "Môđun của số phức",
    meaning: "Môđun (giá trị tuyệt đối) của z, khoảng cách từ z đến gốc tọa độ: √(a² + b²) với z = a + bi.",
    usage: "Hai gạch đứng trơn dùng được trong trường hợp đơn giản nhưng gây nhập nhằng cho TeX, vì nó không phân biệt được gạch mở và gạch đóng; điều đó gây ra khoảng cách sai trong các biểu thức như |-z|. Hãy dùng \\lvert z \\rvert, hoặc định nghĩa một macro, để có khoảng cách đúng, và \\left| \\frac{z}{w} \\right| khi nội dung cao. Đừng bao giờ dùng \\mid ở đây: đó là một quan hệ với khoảng cách rộng. Các tính chất chính là |zw| = |z||w| và bất đẳng thức tam giác |z + w| \\leq |z| + |w|. Trong ngữ cảnh vectơ, hai gạch đôi \\| \\| lại ký hiệu chuẩn.",
  },
  "argument": {
    name: "Acgumen của số phức",
    meaning: "Acgumen của z: góc từ chiều dương trục thực đến z, xác định sai khác bội của 2π.",
    usage: "\\arg là tên toán tử có sẵn, nên nó in chữ đứng và đặt khoảng cách đúng; gõ arg không có dấu gạch chéo ngược sẽ cho ra các chữ nghiêng. Vì góc này đa trị, \\arg z thường được xem là một tập hợp \\{\\theta + 2\\pi k\\}, và \\arg(zw) = \\arg z + \\arg w chỉ đúng theo môđun 2\\pi. Với giá trị chính đơn trị, người ta viết \\operatorname{Arg} z với chữ hoa. Đừng nhầm \\arg với các toán tử kiểu argmax, vốn trả về điểm đạt cực trị và cần được khai báo riêng.",
  },
  "principal-argument": {
    name: "Acgumen chính",
    meaning: "Giá trị chính của acgumen, góc duy nhất trong (−π, π] mà z tạo với chiều dương trục thực.",
    usage: "Chữ hoa phân biệt Arg đơn trị này với \\arg đa trị. Lát cắt nhánh nằm dọc nửa âm của trục thực, vì thế \\text{Arg}(-1) = \\pi nhưng các giá trị ngay dưới lát cắt tiến tới -\\pi. Một số sách dùng [0, 2\\pi) thay thế, nên hãy nói rõ khoảng bạn dùng. LaTeX không có lệnh \\Arg; \\text{Arg} dùng được nhưng sẽ bị in nghiêng trong môi trường định lý. \\operatorname{Arg} hoặc \\DeclareMathOperator{\\Arg}{Arg} ổn định hơn và cho khoảng cách đúng trước đối số. Chẳng hạn, \\text{Arg}(i) = \\pi/2 trong khi \\arg i là cả tập hợp \\pi/2 + 2\\pi k.",
  },
  "polar-form": {
    name: "Dạng cực của số phức",
    meaning: "Dạng cực (dạng mũ) của số phức: môđun r nhân với một số phức đơn vị có góc θ.",
    usage: "Nhân ở dạng cực chỉ đơn giản là nhân các môđun và cộng các góc, nên (r e^{i\\theta})^n = r^n e^{in\\theta}, chính là công thức De Moivre dưới dạng gọn. Các căn bậc n của đơn vị e^{2\\pi i k/n} và phasơ A e^{i\\omega t} đến trực tiếp từ ký hiệu này. Hãy đặt toàn bộ số mũ trong ngoặc nhọn; e^i\\theta sẽ chỉ nâng e lên lũy thừa i. Khi số mũ trở nên rườm rà, \\exp(i\\theta) dễ đọc hơn một chỉ số trên nhỏ xíu. Một số quy chuẩn trình bày đặt hằng số e bằng chữ đứng \\mathrm{e} để phân biệt với biến.",
  },
  "euler-s-formula": {
    name: "Công thức Euler",
    meaning: "Công thức Euler, liên hệ hàm mũ phức với cosin và sin; nó đặt e^{iθ} trên đường tròn đơn vị.",
    usage: "Đặt \\theta = \\pi cho ra đẳng thức Euler e^{i\\pi} + 1 = 0, và giải công thức theo cosin cho \\cos\\theta = (e^{i\\theta} + e^{-i\\theta})/2. Lưu ý \\cos và \\sin là các lệnh toán tử: chúng in chữ đứng và thêm một khoảng trắng hẹp trước \\theta, còn gõ cos sẽ cho ra ba chữ nghiêng. Không cần dấu ngoặc cho đối số là một ký hiệu đơn như \\theta, nhưng hãy dùng chúng cho đối số phức hợp, \\sin(2\\theta). Trong ngữ cảnh kỹ thuật, cùng đẳng thức này được viết với j thay cho i.",
  },
  "complex-exponential": {
    name: "Hàm mũ phức",
    meaning: "Hàm mũ tính tại số phức z = x + iy, bằng eˣ(cos y + i sin y).",
    usage: "Hàm mũ phức là hàm nguyên, không bao giờ bằng không, và tuần hoàn với chu kỳ 2\\pi i, đó là lý do hàm ngược của nó, logarit, là đa trị. Với số mũ ngắn, e^{z} là ổn; với biểu thức như e^{-(x - \\mu)^2/2\\sigma^2}, chỉ số trên trở nên quá nhỏ và \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right) dễ đọc hơn. \\exp là toán tử được định nghĩa sẵn. Luôn đặt số mũ gồm nhiều ký hiệu trong ngoặc nhọn. Một số nhà xuất bản yêu cầu hằng số viết bằng chữ đứng \\mathrm{e}, để phân biệt với biến e. Đạo hàm của nó bằng chính nó, điều khiến nó trở thành thành phần cơ bản trong nghiệm của phương trình vi phân tuyến tính.",
  },
  "complex-logarithm": {
    name: "Logarit phức",
    meaning: "Logarit phức của z, hàm ngược đa trị của hàm mũ: ln|z| + i arg z.",
    usage: "Vì hàm mũ lặp lại sau mỗi 2\\pi i, \\log z có vô số giá trị sai khác nhau 2\\pi i k. Nhánh chính thường được viết với chữ hoa, \\operatorname{Log} z = \\ln|z| + i \\operatorname{Arg} z, và giải tích ngoài lát cắt nhánh trên nửa âm của trục thực. \\log và \\ln đều là toán tử có sẵn; các nhà giải tích thường viết \\log cho logarit tự nhiên, còn \\ln làm rõ cơ số. Một khoảng trắng hẹp tự động xuất hiện sau \\log, nên \\log z không cần dấu ngoặc với một biến đơn.",
  },
  "complex-power": {
    name: "Lũy thừa phức",
    meaning: "Lũy thừa phức z mũ w, định nghĩa bằng exp(w log z) và nói chung là đa trị.",
    usage: "Kết quả bất ngờ i^i = e^{-\\pi/2} (trên nhánh chính) xuất phát từ định nghĩa này. Vì \\log z đa trị, z^w có nhiều giá trị trừ khi w là số nguyên, và các quy tắc như (z^a)^b = z^{ab} có thể sai. Hãy đặt số mũ gồm nhiều ký hiệu trong ngoặc nhọn: z^{w+1}, không phải z^w+1. Với tháp lũy thừa như z^{w^v}, TeX thu nhỏ mỗi tầng, nên hãy cân nhắc dùng ký hiệu \\exp cho dễ đọc. Hãy nêu rõ nhánh khi bạn dựa vào một giá trị cụ thể, chẳng hạn bằng cách viết \\exp(w \\operatorname{Log} z).",
  },
  "unit-circle": {
    name: "Đường tròn đơn vị",
    meaning: "Phương trình đường tròn đơn vị trong mặt phẳng phức: tất cả các số phức có khoảng cách 1 đến gốc tọa độ.",
    usage: "Các điểm trên đường tròn đơn vị chính là các số e^{i\\theta}, và các căn bậc n của đơn vị nằm trên nó. Nó thường được ký hiệu là \\mathbb{T} hoặc S^1, và với phép nhân nó là nhóm đường tròn dùng trong giải tích Fourier. Tích phân đường trên nó được viết \\oint_{|z|=1} với điều kiện đặt ở chỉ số dưới. Trên đường tròn, phép liên hợp thỏa mãn \\bar{z} = 1/z, một cách rút gọn tiện lợi. Nếu khoảng cách quanh các gạch đứng trông không ổn trong ngữ cảnh, hãy dùng \\lvert z \\rvert; hình tròn mở |z| < 1 và hình tròn đóng |z| \\le 1 cũng theo cùng cách viết.",
  },
  "upper-half-plane": {
    name: "Nửa mặt phẳng trên",
    meaning: "Chữ H nét kép, thường nhất là nửa mặt phẳng trên {z : Im z > 0}; cũng là tập quaternion.",
    usage: "Trong giải tích phức và lý thuyết số, \\mathbb{H} là miền xác định của dạng modula, chịu tác động của SL_2(\\mathbb{Z}) qua các phép biến đổi Möbius, và mang mêtric hypebolic. Trong đại số cùng chữ này ký hiệu tập quaternion của Hamilton, đặt theo tên ông, nên nếu cả hai cùng xuất hiện, hãy viết \\mathcal{H} hoặc nói rõ bạn muốn chỉ cái nào. \\mathbb chỉ cung cấp chữ hoa với các phông chữ chuẩn; đối số chữ thường sẽ cho ra ký tự vô nghĩa hoặc lỗi. Các tập liên quan được viết cùng cách: \\mathbb{C}, \\mathbb{R}, \\mathbb{Z}. Biên của nó là trục thực cùng với một điểm ở vô cực.",
  },
};

export default text;
