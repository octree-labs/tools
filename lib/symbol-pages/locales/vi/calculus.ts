import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/calculus/<slug>. */
const text: SymbolPageTranslations = {
  "integral": {
    name: "Tích phân",
    meaning: "Vẽ dấu tích phân, dùng cho nguyên hàm và tích phân xác định, chẳng hạn diện tích dưới một đường cong.",
    usage: "Viết cận dưới dạng chỉ số dưới và chỉ số trên: \\int_a^b f(x)\\,dx cho một tích phân xác định, và theo mặc định các cận nằm bên cạnh dấu ở kiểu hiển thị. Thêm \\limits ngay sau \\int để xếp cận lên trên và xuống dưới, kiểu trình bày mà một số sách vật lý ưa dùng. Đặt khoảng trắng hẹp \\, trước vi phân để dx không dính vào hàm dưới dấu tích phân. Với tích phân lặp, \\int\\int để lại khoảng hở vụng về; hãy dùng \\iint hoặc \\iiint, vốn tự động thu hẹp khoảng cách. Trong công thức cùng dòng, dấu tích phân nhỏ đi đáng kể, nên tích phân dài hoặc lồng nhau thường dễ đọc hơn trong môi trường hiển thị riêng dòng.",
  },
  "double-integral": {
    name: "Tích phân kép",
    meaning: "Dấu tích phân kép để lấy tích phân một hàm hai biến trên một miền phẳng.",
    usage: "Tích phân kép xuất hiện mỗi khi lấy tích phân trên một diện tích, như \\iint_D f(x,y)\\,dA cho khối lượng, cho xác suất theo một mật độ đồng thời, hoặc cho thông lượng qua một mặt. Gõ \\int\\int bằng tay cho ra hai dấu cách nhau quá xa; \\iint ghép chúng thành một cặp sát nhau. Hãy đặt miền lấy tích phân vào một chỉ số dưới duy nhất, \\iint_{D}, thay vì chia cận cho cả hai dấu. Nếu cần cận riêng cho từng biến, hãy viết \\int_a^b\\!\\int_c^d, vì lệnh gộp chỉ nhận một bộ cận. Khoảng trắng hẹp âm \\! giữ cho các cặp ghép tay như vậy không bị tách xa nhau.",
  },
  "triple-integral": {
    name: "Tích phân bội ba",
    meaning: "Dấu tích phân bội ba, dùng để lấy tích phân trên một miền khối trong không gian ba chiều.",
    usage: "Các tích phân thể tích như \\iiint_V \\rho\\,dV cho tổng khối lượng, hoặc vế trái của định lý Gauss-Ostrogradsky \\iiint_V \\nabla\\cdot\\mathbf{F}\\,dV, đều dùng ký hiệu này. Giống \\iint, nó đặt ba dấu sát nhau hơn so với \\int\\int\\int, nên kết quả đọc như một toán tử duy nhất. Miền lấy tích phân đặt trong một chỉ số dưới duy nhất; nếu cần cận lặp tường minh cho từng biến, hãy nối các lệnh \\int riêng biệt. Ngoài ra còn có \\iiiint cho bốn dấu và \\idotsint, vẽ hai dấu cách nhau bởi dấu ba chấm cho tích phân bội n. Trong tọa độ cầu, hãy nhớ định thức Jacobi: dV = r^2\\sin\\theta\\,dr\\,d\\theta\\,d\\phi.",
  },
  "contour-integral": {
    name: "Tích phân đường khép kín",
    meaning: "Dấu tích phân có một vòng tròn nhỏ, chỉ phép lấy tích phân dọc một đường cong khép kín.",
    usage: "Giải tích phức dựa rất nhiều vào nó: định lý tích phân Cauchy nói rằng \\oint_\\gamma f(z)\\,dz = 0 với f chỉnh hình, và định lý thặng dư tính các tích phân như vậy bằng 2\\pi i nhân với tổng các thặng dư. Trong vật lý, nó xuất hiện trong lưu số và trong các định luật Ampère và Faraday, ví dụ \\oint_C \\mathbf{B}\\cdot d\\boldsymbol{\\ell}. Ghi tên chu tuyến ở chỉ số dưới; \\oint_{\\partial S} chỉ biên của một mặt. Tích phân mặt kín với vòng tròn vẽ trên hai dấu không thuộc bộ lệnh chuẩn, nên nhiều tác giả chỉ viết \\iint_{\\partial V} và nói rõ rằng mặt là mặt kín.",
  },
  "derivative": {
    name: "Đạo hàm",
    meaning: "Ký hiệu Leibniz cho toán tử đạo hàm theo x, dựng từ một phân số.",
    usage: "Viết \\frac{d}{dx} cho dạng toán tử dùng trong các quy tắc như \\frac{d}{dx}\\sin x = \\cos x, còn \\frac{dy}{dx} chỉ đạo hàm của một biến phụ thuộc. Nhiều quy chuẩn trình bày đặt chữ vi phân d ở dạng đứng, \\mathrm{d}, để phân biệt với một biến tên d; một macro như \\newcommand{\\diff}{\\mathrm{d}} giữ cho cách viết nhất quán. Trong văn bản cùng dòng, \\frac thu nhỏ thành cỡ chữ chỉ số rất bé, nên ở đó hãy dùng \\tfrac hoặc dạng gạch chéo dy/dx. Với đạo hàm cấp cao, viết \\frac{d^2y}{dx^2}, với số mũ đặt trên d ở tử số nhưng đặt trên x ở mẫu số.",
  },
  "partial-derivative-operator": {
    name: "Toán tử đạo hàm riêng",
    meaning: "Toán tử đạo hàm riêng theo x, giữ cố định mọi biến khác.",
    usage: "Giải tích nhiều biến và phương trình đạo hàm riêng dùng nó khắp nơi: phương trình truyền nhiệt \\frac{\\partial u}{\\partial t} = k\\frac{\\partial^2 u}{\\partial x^2}, gradien và ma trận Jacobi đều dùng ký hiệu này. Chữ d cong \\partial phân biệt nó với chữ d thường của \\frac{d}{dx}, vốn dành cho hàm một biến. Đạo hàm riêng hỗn hợp được viết \\frac{\\partial^2 f}{\\partial x\\,\\partial y}, với một khoảng trắng hẹp giữa các thừa số ở mẫu số. Khi phân số quá chật, cách viết chỉ số dưới \\partial_x f hoặc f_x là lựa chọn gọn, phổ biến trong vật lý và trong các hệ phương trình đạo hàm riêng dài, nơi phân số chồng tầng sẽ làm tăng vọt chiều cao dòng.",
  },
  "limit": {
    name: "Giới hạn",
    meaning: "Toán tử giới hạn với điều kiện tiến tới x \\to a viết bên dưới.",
    usage: "Vì \\lim là một toán tử định nghĩa sẵn, nó được in bằng chữ đứng và đặt chỉ số dưới ngay bên dưới trong công thức hiển thị, như \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1. Trong công thức cùng dòng, chỉ số dưới chuyển sang bên cạnh để tiết kiệm chiều cao dòng; chỉ ép nó xuống dưới bằng \\lim\\limits_{x\\to a} khi chấp nhận được chiều cao tăng thêm. Giới hạn một phía dùng x \\to a^+ hoặc x \\to a^-, và giới hạn tại vô cực dùng x \\to \\infty. Các toán tử liên quan \\limsup và \\liminf hoạt động tương tự. Hãy dùng \\to cho mũi tên thay vì dấu gạch nối và dấu lớn hơn, vốn sẽ in ra thành hai ký hiệu riêng biệt.",
  },
  "summation": {
    name: "Phép lấy tổng",
    meaning: "Dấu tổng với chỉ số bắt đầu từ n = 1 và chạy đến vô cùng, dạng của một chuỗi vô hạn.",
    usage: "Các chuỗi vô hạn như bài toán Basel \\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6} hay chuỗi điều hòa phân kỳ được viết theo cách này. Trong công thức hiển thị, các cận xếp trên và dưới một chữ sigma lớn; trong dòng văn bản chúng dịch sang bên phải một chữ sigma nhỏ hơn, giúp khoảng cách dòng đều đặn. Thêm \\limits nếu cần cận xếp tầng trong dòng, hoặc dùng \\displaystyle một cách tiết chế. Đừng dùng chữ Hy Lạp \\Sigma thay thế: đó là một chữ cái cỡ thường, không phải toán tử, và không nhận cận đúng cách. Sự hội tụ thường được phát biểu qua tổng riêng, S_N = \\sum_{n=1}^{N} a_n.",
  },
  "product": {
    name: "Phép lấy tích",
    meaning: "Toán tử tích theo n từ 1 đến vô cùng, dùng để viết tích vô hạn.",
    usage: "Các kết quả kinh điển như tích Euler của hàm zeta và tích Wallis cho \\pi đều được viết bằng nó. Giống \\sum, các cận nằm dưới và trên toán tử ở kiểu hiển thị và bên cạnh khi ở trong dòng. Đừng nhầm với \\Pi, chữ Hy Lạp viết hoa có hình dạng tương tự nhưng giữ cỡ thường và nhận cận như chỉ số dưới thông thường. Một tích vô hạn được gọi là hội tụ khi các tích riêng tiến tới một giới hạn khác không, nên các tác giả thường viết \\prod_{n=1}^{\\infty}(1+a_n) kèm điều kiện \\sum |a_n| < \\infty, vốn bảo đảm sự hội tụ.",
  },
  "differential": {
    name: "Vi phân",
    meaning: "Vi phân của x, kết thúc một tích phân và chỉ rõ biến lấy tích phân.",
    usage: "Khi gõ dx thông thường, chữ d bị in nghiêng và dính sát vào hàm dưới dấu tích phân, nên cách sửa thông dụng là thêm một khoảng trắng hẹp: \\int f(x)\\,dx. Chuẩn ISO và nhiều tạp chí in chữ d đứng bằng \\mathrm{d}x; một macro như \\newcommand{\\dd}{\\mathrm{d}} giữ cho cách viết nhất quán trong cả bài báo. Trong tích phân bội, hãy tách các vi phân bằng khoảng trắng hẹp, dx\\,dy, hoặc viết gọn thành dA hay dV. Cùng vi phân này xuất hiện trong đạo hàm Leibniz \\frac{dy}{dx} và trong dạng vi phân, nơi tích được viết dx \\wedge dy và thứ tự có ý nghĩa vì tích ngoài là phản đối xứng.",
  },
  "prime-derivative": {
    name: "Đạo hàm ký hiệu phẩy",
    meaning: "Ký hiệu dấu phẩy của Lagrange cho đạo hàm cấp một của f tại x.",
    usage: "Gõ dấu nháy đơn trong chế độ toán tạo ra dấu phẩy ở vị trí chỉ số trên, nên f' là cách viết tắt của f^{\\prime}. Ký hiệu dấu phẩy gọn gàng cho hàm một biến, như trong định lý giá trị trung bình f'(c) = \\frac{f(b)-f(a)}{b-a}. Nếu cũng cần số mũ, hãy viết f'^2, gộp cả hai vào một chỉ số trên, hoặc nhóm thành (f'(x))^2; viết f^2' sẽ gây lỗi chỉ số trên kép. Tránh dán ký tự nháy cong, vốn không trở thành dấu phẩy, và tránh dùng \\prime trần ngoài chỉ số trên, vì nó sẽ in cỡ đầy đủ trên đường chân chữ. Trong vật lý, dấu phẩy cũng có thể đánh dấu một tọa độ đã biến đổi như x'.",
  },
  "double-prime": {
    name: "Đạo hàm cấp hai ký hiệu hai phẩy",
    meaning: "Đạo hàm cấp hai của f tại x theo ký hiệu dấu phẩy, mô tả tính lồi lõm hoặc gia tốc.",
    usage: "Hai dấu nháy đơn trong chế độ toán gộp thành một chỉ số trên có hai dấu phẩy, tương đương f^{\\prime\\prime}. Phép thử đạo hàm cấp hai dùng nó: nếu f'(c) = 0 và f''(c) > 0 thì c là điểm cực tiểu địa phương. Trong cơ học, x''(t) cho gia tốc, dù dạng dấu chấm \\ddot{x} được ưa dùng hơn cho đạo hàm theo thời gian. Ba dấu phẩy f''' vẫn dễ đọc, nhưng cao hơn nữa hãy chuyển sang f^{(4)}(x), với cấp đạo hàm trong ngoặc tròn để không bị nhầm với lũy thừa. Đừng bao giờ gõ ký tự nháy kép thay cho hai dấu nháy đơn; nó hiển thị thành một ký tự hoàn toàn khác.",
  },
  "approaches": {
    name: "Ký hiệu tiến tới",
    meaning: "Mũi tên hướng phải, đọc là “tiến tới” trong giới hạn hoặc “ánh xạ vào” giữa các tập hợp.",
    usage: "Nó đảm nhận hai vai trò: trong giới hạn, x \\to 0 hoặc n \\to \\infty; trong khai báo hàm số, f\\colon X \\to Y. \\to chỉ là một tên khác của \\rightarrow, nên kết quả in ra giống hệt; hãy chọn lệnh nào đọc dễ hơn trong mã nguồn. Đừng nhầm với \\mapsto, chỉ nơi một phần tử cụ thể được ánh xạ tới (x \\mapsto x^2), hay \\longrightarrow, mũi tên dài hơn cho công thức hiển thị. Với các kiểu hội tụ, hãy trang trí thêm: \\xrightarrow{d} cho hội tụ theo phân phối, hoặc đặt nhãn phía trên bằng \\overset{p}{\\to}. Nó có khoảng cách quan hệ, nên không cần thêm khoảng trắng thủ công xung quanh.",
  },
  "evaluated-at": {
    name: "Ký hiệu thế cận",
    meaning: "Gạch đứng thế cận kèm các cận, chỉ nguyên hàm được tính giá trị từ a đến b.",
    usage: "Sau khi lấy nguyên hàm, viết F(x)\\Big|_{a}^{b} = F(b) - F(a) là cách viết tắt chuẩn từ định lý cơ bản của giải tích. \\Big cố định gạch đứng ở một cỡ phóng to, phù hợp với phân số thông thường; với biểu thức cao hơn hãy dùng \\bigg| hoặc ghép \\left. với \\right|_{a}^{b} để gạch đứng giãn khớp với phần đứng trước. Một số tác giả ưa dùng ngoặc vuông, \\Big[ F(x) \\Big]_a^b, không để lại nghi ngờ về phần nào được thế cận. Ký tự | thường không chỉnh cỡ thì quá ngắn và khiến các cận chen sát nguyên hàm, nhất là sau một phân số.",
  },
};

export default text;
