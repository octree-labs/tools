import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/trigonometry/<slug>. */
const text: SymbolPageTranslations = {
  "sine": {
    name: "Hàm sin",
    meaning: "Hàm sin, in đứng như một toán tử có tên với khoảng cách đúng.",
    usage: "Luôn gõ \\sin thay vì sin; các chữ cái trần sẽ được dàn thành ba biến nghiêng nhân với nhau. Toán tử này thêm một khoảng trắng mảnh trước đối số, nên \\sin x không cần ngoặc khi đối số chỉ là một ký hiệu, còn \\sin(2x) hoặc \\sin\\left(\\frac{\\pi}{2}\\right) nhóm các đối số dài hơn. Số mũ đặt ngay sau lệnh: \\sin^2 x + \\cos^2 x = 1. Lưu ý \\sin^{-1} x là hàm ngược, không phải nghịch đảo \\csc x. Các công thức thường gặp gồm công thức nhân đôi \\sin 2\\theta = 2\\sin\\theta\\cos\\theta và chuỗi Taylor x - x^3/3! + \\cdots.",
  },
  "cosine": {
    name: "Hàm côsin",
    meaning: "Hàm côsin, được dàn chữ đứng như một toán tử toán học có tên, giống \\sin.",
    usage: "\\cos xuất hiện trong định lý côsin c^2 = a^2 + b^2 - 2ab\\cos C, trong công thức Euler e^{i\\theta} = \\cos\\theta + i\\sin\\theta, và trong dạng góc của tích vô hướng, nguồn gốc của độ tương đồng côsin trong học máy. Gõ cos không có dấu gạch chéo ngược sẽ cho chữ nghiêng và khoảng cách sai. Viết \\cos^2\\theta cho bình phương của côsin; \\cos\\theta^2 có nghĩa là côsin của theta bình phương, một đại lượng khác. Bản thân lệnh không nhận đối số, nên hãy nhóm các đối số phức hợp bằng ngoặc tròn, như trong \\cos(\\omega t + \\phi).",
  },
  "tangent": {
    name: "Hàm tang",
    meaning: "Hàm tang, tỉ số giữa sin và côsin, được dàn chữ đứng.",
    usage: "Được định nghĩa là \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, nó không xác định khi \\cos\\theta = 0, tức tại các bội lẻ của \\pi/2. Hệ số góc trong hình học là tang của góc nghiêng, và đồng nhất thức 1 + \\tan^2\\theta = \\sec^2\\theta có được khi chia đồng nhất thức Pythagore cho \\cos^2\\theta. Một số sách châu Âu viết tg, không có lệnh dựng sẵn; hãy dùng \\operatorname{tg} nếu cần. Công thức cộng \\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} là một phương trình hiển thị thường gặp.",
  },
  "cotangent": {
    name: "Hàm côtang",
    meaning: "Hàm côtang, nghịch đảo của tang, viết như một toán tử chữ đứng.",
    usage: "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta} = \\frac{1}{\\tan\\theta}, có cực điểm tại các bội nguyên của \\pi. Nó xuất hiện trong đồng nhất thức 1 + \\cot^2\\theta = \\csc^2\\theta và trong khai triển phân thức đơn giản kinh điển của \\pi\\cot\\pi z dùng để tính tổng \\sum 1/n^2. Sách Nga và một số sách châu Âu viết ctg; hãy dùng \\operatorname{ctg} cho cách viết đó. Hàm ngược của nó thường được viết arccot, không có lệnh định nghĩa sẵn. Hãy nhớ rằng \\cot x là nghịch đảo của tang, không phải hàm ngược \\tan^{-1} x. Đạo hàm của nó là -\\csc^2 x.",
  },
  "secant": {
    name: "Hàm sec",
    meaning: "Hàm sec, nghịch đảo của côsin, là một toán tử có tên in đứng.",
    usage: "\\sec\\theta = 1/\\cos\\theta, và bình phương của nó xuất hiện như đạo hàm của tang, \\frac{d}{dx}\\tan x = \\sec^2 x. Tích phân \\int \\sec x\\,dx = \\ln|\\sec x + \\tan x| + C là một kết quả kinh điển của các khóa giải tích và của công thức phép chiếu Mercator. Gõ sec không có dấu gạch chéo ngược sẽ để lại chữ nghiêng và mất khoảng trắng trước đối số. Trong hình học, cát tuyến là một đối tượng khác, được gọi bằng lời chứ không dùng lệnh này. Giống các lệnh lượng giác khác, số mũ gắn trực tiếp, \\sec^2 x, với đối số theo sau.",
  },
  "cosecant": {
    name: "Hàm côsec",
    meaning: "Hàm côsec, nghịch đảo của sin, dàn như một toán tử chữ đứng.",
    usage: "\\csc\\theta = 1/\\sin\\theta, không xác định tại các bội nguyên của \\pi. Đạo hàm của nó là \\frac{d}{dx}\\csc x = -\\csc x\\cot x, và đồng nhất thức 1 + \\cot^2 x = \\csc^2 x hoàn tất bộ ba đồng nhất thức Pythagore. Một số sách, đặc biệt là sách Anh cũ, viết tắt là cosec; dạng đó cần \\operatorname{cosec}. Một lỗi thường gặp là viết \\sin^{-1} x khi muốn nói \\csc x: chỉ số trên -1 biểu thị hàm ngược arcsin, không phải nghịch đảo. Số mũ gắn ngay sau lệnh, như trong \\csc^2 x, với đối số theo sau.",
  },
  "arcsine": {
    name: "Hàm arcsin",
    meaning: "Hàm arcsin, hàm ngược của sin thu hẹp trên [-pi/2, pi/2], là một toán tử chữ đứng.",
    usage: "\\arcsin x trả về góc trong [-\\pi/2, \\pi/2] có sin bằng x, với x trong [-1, 1]. Đây là cách viết không mơ hồ thay cho \\sin^{-1} x, vốn bị một số người đọc hiểu nhầm thành 1/\\sin x. Đạo hàm \\frac{1}{\\sqrt{1-x^2}} của nó cho tích phân chuẩn \\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C, nền tảng của phép đổi biến lượng giác. Các thư viện phần mềm gọi nó là asin, nhưng tên trong lập trình không nên xuất hiện trong công thức toán đã dàn trang; luôn dùng lệnh có dấu gạch chéo ngược để nó được in đứng và có khoảng cách. Nhóm các đối số phức hợp bằng ngoặc tròn.",
  },
  "arccosine": {
    name: "Hàm arccos",
    meaning: "Hàm arccos, trả về góc trong [0, pi] có côsin bằng một giá trị cho trước.",
    usage: "Góc giữa hai vectơ, \\theta = \\arccos\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{\\lVert\\mathbf{a}\\rVert\\lVert\\mathbf{b}\\rVert}, có lẽ là cách dùng phổ biến nhất của nó. Tập giá trị của nó là [0, \\pi] và đạo hàm là -\\frac{1}{\\sqrt{1-x^2}}, đó là lý do \\arcsin x + \\arccos x = \\frac{\\pi}{2} với mọi x trong [-1, 1]. \\cos^{-1} x có cùng nghĩa, nhưng \\arccos tránh nhầm lẫn với nghịch đảo. Bọc các đối số dài trong \\left( \\right) cho rõ ràng, vì toán tử không tự thêm dấu ngoặc. Trong hình học tính toán, đối số thường được giới hạn vào [-1, 1] trước để tránh lỗi làm tròn.",
  },
  "arctangent": {
    name: "Hàm arctan",
    meaning: "Hàm arctan, cho góc trong (-pi/2, pi/2) có tang bằng x.",
    usage: "\\arctan x xuất hiện trong \\int \\frac{dx}{1+x^2} = \\arctan x + C và trong công thức Machin \\frac{\\pi}{4} = 4\\arctan\\frac{1}{5} - \\arctan\\frac{1}{239}. Để lấy góc cực của điểm (x, y) trong cả bốn góc phần tư, lập trình viên dùng atan2; trong bài báo, hãy viết \\operatorname{atan2}(y, x) hoặc acgumen phức \\arg(x + iy). \\tan^{-1} x là cách viết đồng nghĩa được chấp nhận, phổ biến hơn trong kỹ thuật. Chuỗi \\arctan x = x - x^3/3 + x^5/5 - \\cdots hội tụ khi |x| \\le 1 và cho chuỗi Leibniz tại x = 1.",
  },
  "arccotangent": {
    name: "Hàm arccot",
    meaning: "Hàm côtang ngược, gõ qua \\text vì LaTeX không có sẵn lệnh \\arccot.",
    usage: "LaTeX chuẩn định nghĩa \\arcsin, \\arccos và \\arctan nhưng không có \\arccot, nên mục này dựng nhãn từ văn bản. Cách gọn hơn là \\operatorname{arccot} x, có thêm khoảng cách toán tử, hoặc \\DeclareMathOperator{\\arccot}{arccot} trong phần preamble để \\arccot x hoạt động như các lệnh dựng sẵn cùng họ. Quy ước về tập giá trị không thống nhất: một số sách dùng (0, \\pi), số khác dùng (-\\pi/2, \\pi/2] bỏ đi 0, nên hãy nói rõ bạn dùng quy ước nào. Đạo hàm của nó là -\\frac{1}{1+x^2} với cả hai lựa chọn. Một số tác giả viết \\cot^{-1}. Hãy chọn một dạng và dùng xuyên suốt.",
  },
  "arcsecant": {
    name: "Hàm arcsec",
    meaning: "Hàm sec ngược, viết bằng \\text vì LaTeX không có sẵn lệnh \\arcsec.",
    usage: "Xác định khi |x| \\ge 1, \\text{arcsec}\\, x = \\arccos(1/x). Đạo hàm của nó là \\frac{1}{|x|\\sqrt{x^2-1}} với tập giá trị thông thường [0, \\pi] bỏ đi \\pi/2, và dấu giá trị tuyệt đối thường bị học sinh bỏ sót. Vì \\text không thêm khoảng cách toán tử, hãy chèn \\, trước đối số hoặc chuyển sang \\operatorname{arcsec}. Khai báo \\DeclareMathOperator{\\arcsec}{arcsec} một lần cho phép viết \\arcsec x giống như \\arccos x. Các bảng tích phân biểu diễn \\int \\frac{dx}{x\\sqrt{x^2-1}} qua hàm này. Nó hiếm khi được dùng trong các bài báo hiện đại, vốn có xu hướng viết lại thành arccos của nghịch đảo.",
  },
  "arccosecant": {
    name: "Hàm arccosec",
    meaning: "Hàm côsec ngược, ghép bằng \\text vì không có lệnh dựng sẵn \\arccsc.",
    usage: "Với |x| \\ge 1, \\text{arccsc}\\, x = \\arcsin(1/x), với giá trị trong [-\\pi/2, \\pi/2] bỏ đi 0. Đạo hàm của nó là -\\frac{1}{|x|\\sqrt{x^2-1}}. Đây là hàm ít được dùng nhất trong sáu hàm lượng giác ngược, nên phần lớn người viết chuyển nó về dạng arcsin trong đáp số cuối cùng. Để có khoảng cách đúng, hãy dùng \\operatorname{arccsc} hoặc khai báo nó là toán tử toán học trong phần preamble thay vì dựa vào \\text, lệnh này còn chuyển sang chữ nghiêng bên trong môi trường định lý. Một số sách viết \\csc^{-1} x, với nguy cơ thường thấy là bị đọc thành nghịch đảo.",
  },
  "inverse-sine": {
    name: "Hàm sin ngược",
    meaning: "Hàm sin ngược viết với chỉ số trên -1, tương đương với arcsin.",
    usage: "Máy tính bỏ túi và nhiều giáo trình kỹ thuật ghi arcsin là \\sin^{-1}, nên \\sin^{-1}(0.5) = \\frac{\\pi}{6}. Ký hiệu này xung đột với \\sin^2 x = (\\sin x)^2: theo phép tương tự, \\sin^{-1} x có thể bị đọc nhầm thành 1/\\sin x, mà thực ra là \\csc x. Vì lý do đó, các bài viết toán học thuần túy thường ưa dùng \\arcsin. Ngoặc nhọn quanh -1 là bắt buộc, và LaTeX đặt chỉ số trên ngay sau tên toán tử, nên \\sin^{-1} x hiển thị số mũ trước đối số. Dù chọn ký hiệu nào, hãy dùng nhất quán trong toàn bộ tài liệu.",
  },
  "inverse-cosine": {
    name: "Hàm côsin ngược",
    meaning: "Hàm côsin ngược viết bằng chỉ số trên, cùng một hàm với arccos.",
    usage: "Vật lý và kỹ thuật thường viết \\cos^{-1} cho các góc, chẳng hạn góc giữa hai vectơ tính từ tích vô hướng đã chuẩn hóa của chúng. Nó không phải nghịch đảo 1/\\cos x, tức là \\sec x; chỉ số trên -1 ở đây nghĩa là hàm ngược. Tập giá trị là [0, \\pi], nên \\cos^{-1}(-1) = \\pi. Các bài báo toán học thuần túy thường chọn \\arccos để tránh mơ hồ. Nếu văn bản của bạn dùng lẫn \\cos^2 x cho bình phương và \\cos^{-1} x cho hàm ngược, hãy nêu quy ước một lần để người đọc không phải đoán.",
  },
  "inverse-tangent": {
    name: "Hàm tang ngược",
    meaning: "Hàm tang ngược viết thành tan mũ -1, tương đương với arctan.",
    usage: "Kỹ thuật và vật lý dùng \\tan^{-1} cho góc pha, như trong \\phi = \\tan^{-1}(\\omega L / R) của mạch RL, và để chuyển hệ số góc thành góc. Cũng như các dạng ngược khác, nó không phải \\cot x, tức nghịch đảo. Tập giá trị của nó là (-\\pi/2, \\pi/2), nên nó không phân biệt được các góc phần tư đối nhau; các bài báo cần góc đầy đủ nên nói rõ rằng họ dùng phiên bản hai đối số. Nhiều hướng dẫn trình bày ưa dùng \\arctan trong toán học nhưng chấp nhận \\tan^{-1} trong các ứng dụng, miễn là ý nghĩa được dùng nhất quán.",
  },
  "hyperbolic-sine": {
    name: "Hàm sin hyperbolic",
    meaning: "Hàm sin hyperbolic, (e^x - e^{-x})/2, dàn như một toán tử chữ đứng.",
    usage: "\\sinh x = \\frac{e^x - e^{-x}}{2} cùng với \\cosh tham số hóa hyperbol đơn vị, đó là lý do \\cosh^2 x - \\sinh^2 x = 1. Nó xuất hiện trong thuyết tương đối hẹp qua độ nhanh, trong các bài toán dây xích và trong nghiệm của y'' = y. Đạo hàm của nó là \\cosh x không đổi dấu, khác với hàm sin lượng giác. Hàm ngược thường được viết \\operatorname{arsinh} hoặc \\sinh^{-1}; LaTeX không có lệnh dựng sẵn cho nó. Gõ sinh không có dấu gạch chéo ngược sẽ cho bốn chữ nghiêng và khoảng cách kém.",
  },
  "hyperbolic-cosine": {
    name: "Hàm côsin hyperbolic",
    meaning: "Hàm côsin hyperbolic, (e^x + e^{-x})/2, là một toán tử có tên in đứng.",
    usage: "Một sợi xích treo có dạng đường dây xích, y = a\\cosh(x/a), ứng dụng kinh điển trong sách giáo khoa. Hàm này chẵn, luôn lớn hơn hoặc bằng 1, và thỏa mãn \\cosh^2 x - \\sinh^2 x = 1 cùng \\cosh(ix) = \\cos x. Trong thuyết tương đối hẹp, hệ số Lorentz bằng côsin hyperbolic của độ nhanh. Giống các toán tử khác, \\cosh thêm một khoảng trắng mảnh trước đối số là một ký hiệu đơn, nên \\cosh x không cần ngoặc. Hàm ngược của nó không có lệnh định nghĩa sẵn; hãy dùng \\operatorname{arcosh} hoặc \\cosh^{-1}.",
  },
  "hyperbolic-tangent": {
    name: "Hàm tang hyperbolic",
    meaning: "Hàm tang hyperbolic, sinh chia cosh, với giá trị nằm giữa -1 và 1.",
    usage: "Mạng nơ-ron dùng \\tanh làm hàm kích hoạt, thường được so sánh với hàm sigmoid logistic qua \\tanh x = 2\\sigma(2x) - 1. Đạo hàm của nó là 1 - \\tanh^2 x, giúp các công thức lan truyền ngược gọn gàng. Trong vật lý, nó xuất hiện trong độ từ hóa trường trung bình, m = \\tanh(\\beta J z m), và trong phép cộng vận tốc tương đối tính. Tập giá trị (-1, 1) khiến nó tiện lợi để nén các đại lượng không bị chặn. Hàm ngược \\operatorname{artanh} của nó phải viết thủ công hoặc khai báo, vì LaTeX không có lệnh dựng sẵn.",
  },
  "inverse-hyperbolic-sine": {
    name: "Hàm sin hyperbolic ngược",
    meaning: "Hàm sin hyperbolic ngược, ghi nhãn bằng \\text vì LaTeX không có lệnh dựng sẵn cho nó.",
    usage: "Nó bằng \\ln\\left(x + \\sqrt{x^2 + 1}\\right) và là nguyên hàm của \\frac{1}{\\sqrt{x^2+1}}. Ký hiệu ISO gọi nó là arsinh, với tiền tố “ar” chỉ diện tích, vì đối số của nó là một diện tích chứ không phải một cung; nhiều tác giả vẫn viết arcsinh hoặc \\sinh^{-1}. Dù chọn tên nào, \\operatorname{arsinh} hoặc một khai báo \\DeclareMathOperator trong phần preamble cho khoảng cách tốt hơn \\text, lệnh vốn còn kế thừa chữ nghiêng của định lý. Các nhà khoa học dữ liệu dùng nó làm phép biến đổi ổn định phương sai vì, khác với logarit, nó xử lý được giá trị không và giá trị âm.",
  },
  "degree-symbol": {
    name: "Ký hiệu độ",
    meaning: "Vòng tròn ở chỉ số trên đánh dấu độ, dùng cho góc và nhiệt độ.",
    usage: "Dấu độ thông dụng trong chế độ toán là ^{\\circ}, như trong 90^{\\circ} hoặc \\angle ABC = 45^{\\circ}; nó nâng \\circ, vòng tròn của phép hợp thành, lên cỡ chỉ số trên. Với nhiệt độ, hãy viết 25^{\\circ}\\mathrm{C} với chữ C đứng. Đừng dùng chữ o hoặc chữ số 0 ở chỉ số trên, vốn có hình dạng sai, hay \\circ trên đường cơ sở, vốn có nghĩa là phép hợp thành hàm số. Trong chế độ văn bản, \\textdegree cho dấu tương ứng mà không cần vào chế độ toán. Tài liệu có nhiều số đo nên dùng một macro hỗ trợ đơn vị để xử lý khoảng cách và phông chữ nhất quán.",
  },
  "radians": {
    name: "Đơn vị radian",
    meaning: "Nhãn đơn vị “rad” in đứng, đánh dấu một góc được đo bằng radian.",
    usage: "Radian không có thứ nguyên, nên phần lớn tài liệu toán học bỏ đơn vị và viết \\theta = \\pi/2; vật lý và kỹ thuật thường ghi rõ, như trong \\omega = 2\\pi\\,\\text{rad/s}. Đặt một khoảng trắng mảnh \\, giữa số và đơn vị và giữ đơn vị in đứng; \\text làm được điều này, dù \\mathrm{rad} an toàn hơn vì \\text sao chép phông xung quanh trong ngữ cảnh chữ nghiêng. Công thức chuyển đổi là \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\cdot \\pi/180. Lưu ý rằng rad cũng là viết tắt của căn của một iđêan trong đại số, thường viết \\operatorname{rad}(I).",
  },
};

export default text;
