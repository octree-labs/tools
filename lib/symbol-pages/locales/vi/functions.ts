import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/functions/<slug>. */
const text: SymbolPageTranslations = {
  "function": {
    name: "Hàm số",
    meaning: "Hàm số f áp dụng lên đối số x, ký hiệu cơ bản cho giá trị của hàm.",
    usage: "Các tên một chữ cái như f, g và h được in nghiêng, điều này đúng với những ký hiệu đại diện cho hàm. Các hàm có tên nhiều chữ cái thì khác: hãy viết \\sin x hay \\log x, và với tên tự đặt hãy dùng \\operatorname{softmax}(z) để chúng in đứng thay vì thành tích của các chữ nghiêng. Trong tối ưu hóa, f(x) thường là hàm mục tiêu, như trong \\min_x f(x) với các ràng buộc. Khi đối số cao, hãy dùng \\left( \\right) hoặc \\bigl( \\bigr) để chỉnh cỡ dấu ngoặc. Với đối số là vectơ, cách viết f(\\mathbf{x}) với x in đậm là phổ biến.",
  },
  "function-definition": {
    name: "Định nghĩa hàm số",
    meaning: "Khai báo f là một hàm từ tập xác định A vào tập đích B.",
    usage: "Dòng khai báo này mở đầu phần lớn các định nghĩa trong giải tích và đại số, thường đi kèm quy tắc theo phần tử x \\mapsto x^2. Gõ dấu hai chấm trần cho khoảng cách quan hệ ở cả hai bên, trông quá rộng; \\colon cho khoảng cách dấu câu chặt đúng chuẩn, f\\colon A \\to B. \\to và \\rightarrow cho cùng một mũi tên; \\longrightarrow tạo điểm nhấn trong công thức hiển thị. Hãy kết hợp với \\mapsto cho quy tắc theo phần tử: f\\colon \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^2. Các sơ đồ có nhiều ánh xạ giữa nhiều đối tượng nên được vẽ bằng một môi trường chuyên dụng cho sơ đồ giao hoán.",
  },
  "composition": {
    name: "Hợp của hai hàm",
    meaning: "Hợp của f với g, nghĩa là áp dụng g trước rồi áp dụng f lên kết quả.",
    usage: "Phép hợp được đọc từ phải sang trái: (f \\circ g)(x) = f(g(x)), và nó có tính kết hợp nhưng thường không giao hoán. \\circ là toán tử hai ngôi, nên khoảng cách xung quanh được đặt tự động. Đừng dùng \\circ ở đường cơ sở cho độ, vốn cần ^{\\circ}, và đừng nhầm nó với \\cdot hay \\bullet, những ký hiệu gợi ý phép nhân. Phép hợp lặp thường được viết f^{\\circ n} để tránh nhầm với lũy thừa f^n. Quy tắc dây chuyền là công thức kinh điển liên quan đến nó: (f \\circ g)'(x) = f'(g(x))\\,g'(x), với đạo hàm của hàm trong ở bên phải.",
  },
  "inverse-function": {
    name: "Hàm ngược",
    meaning: "Hàm ngược của f, ánh xạ hoàn tác f sao cho f^{-1}(f(x)) = x.",
    usage: "Chỉ các song ánh mới có hàm ngược trên toàn bộ tập đích, nhưng f^{-1}(B) cũng được dùng cho tạo ảnh ngược của một tập B qua bất kỳ hàm nào, một khái niệm khác hẳn không đòi hỏi tính khả nghịch. Chỉ số trên -1 không có nghĩa là nghịch đảo số học: f^{-1}(x) khác 1/f(x), một nhầm lẫn phổ biến của sinh viên cũng ảnh hưởng đến \\sin^{-1}. Cần dấu ngoặc nhọn vì -1 gồm hai token. Định lý hàm ngược cho đạo hàm (f^{-1})'(y) = 1/f'(x) với y = f(x), miễn là f'(x) \\neq 0.",
  },
  "image": {
    name: "Ảnh của hàm số",
    meaning: "Ảnh của f, tập hợp tất cả các giá trị mà f thực sự nhận, được viết bằng chữ “Im” đứng.",
    usage: "Trong đại số tuyến tính, \\text{Im}(T) là không gian cột của ánh xạ, và định lý hạng-số chiều hạt nhân phát biểu \\dim\\ker T + \\dim \\text{Im}\\, T = \\dim V. Lưu ý rằng \\Im là một lệnh khác: nó cho chữ I kiểu Fraktur dùng cho phần ảo của số phức. Nhiều tác giả viết \\operatorname{im} bằng chữ thường hoặc khai báo \\DeclareMathOperator{\\im}{im}, cách này cho khoảng cách đúng và không bị nhiễm chữ nghiêng của môi trường định lý như \\text. Ký hiệu tập hợp f(A) là một lựa chọn khác khi bạn muốn ảnh của một tập con cụ thể thay vì toàn bộ tập xác định.",
  },
  "kernel": {
    name: "Hạt nhân (kernel)",
    meaning: "Hạt nhân của f: mọi phần tử mà f biến thành không, là một không gian con hoặc một nhóm con chuẩn tắc.",
    usage: "\\ker là toán tử định nghĩa sẵn, nên nó in đứng với khoảng cách đúng: \\ker T = \\{v \\in V \\mid T(v) = 0\\}. Một đồng cấu là đơn ánh khi và chỉ khi hạt nhân của nó tầm thường, và định lý đẳng cấu thứ nhất phát biểu G/\\ker\\varphi \\cong \\operatorname{im}\\varphi. Dấu ngoặc là tùy chọn với một ký hiệu đơn, \\ker A. Trong đại số tuyến tính, hạt nhân còn được gọi là không gian không, đôi khi viết N(A) hoặc \\operatorname{null}(A). Không có toán tử định nghĩa sẵn cho ảnh để đi cặp với nó, vì vậy hãy khai báo \\im hoặc dùng \\operatorname{im}.",
  },
  "domain": {
    name: "Tập xác định",
    meaning: "Tập xác định của f, tập các giá trị đầu vào mà trên đó hàm được định nghĩa.",
    usage: "Giải tích lồi dùng nó rất nhiều: \\operatorname{dom} f = \\{x \\mid f(x) < \\infty\\} là tập xác định hữu hiệu của một hàm lồi nhận giá trị mở rộng. \\text{dom} in đứng nhưng có thể bị nghiêng trong môi trường định lý và thiếu khoảng cách của toán tử; \\operatorname{dom} tránh được cả hai vấn đề. Trong khai báo f\\colon A \\to B, A đã là tập xác định, nên \\text{dom}(f) hữu ích nhất khi tập xác định là ngầm định hoặc chỉ là một phần, như với các toán tử không bị chặn trên không gian Hilbert. Một số sách dùng D(f) hoặc D_f, vì vậy hãy theo quy ước của lĩnh vực bạn.",
  },
  "codomain": {
    name: "Tập đích",
    meaning: "Tập đích của f, tập được khai báo làm nơi chứa các giá trị đầu ra của hàm.",
    usage: "Trong f\\colon A \\to B tập đích là B, có thể lớn hơn ảnh; f là toàn ánh khi và chỉ khi \\text{Im}(f) = \\text{cod}(f). Lý thuyết phạm trù viết \\operatorname{cod} f cùng với \\operatorname{dom} f cho đích và nguồn của một cấu xạ. Cũng như các nhãn dạng chữ khác, \\operatorname{cod} cho khoảng cách tốt hơn và tránh rò rỉ chữ nghiêng trong phát biểu định lý. Một số tác giả viết đầy đủ \\operatorname{codom} cho rõ ràng. Việc phân biệt tập đích với miền giá trị là quan trọng, vì có sách dùng từ miền giá trị (range) để chỉ tập đích, có sách lại để chỉ ảnh.",
  },
  "range": {
    name: "Miền giá trị",
    meaning: "Miền giá trị của f, thường hiểu là tập các giá trị mà f thực sự đạt được.",
    usage: "Từ này mơ hồ: phần lớn sách hiện đại coi miền giá trị là ảnh, nhưng một số sách cũ dùng nó cho tập đích, vì vậy hãy nêu rõ định nghĩa của bạn. Trong đại số tuyến tính, \\text{range}(A) là không gian cột, và định lý cơ bản của đại số tuyến tính nói rằng nó là phần bù trực giao của không gian không của A^{\\top}. Viết bằng \\operatorname{range} cho chữ đứng với khoảng cách toán tử; các nhà lý thuyết toán tử thường viết \\mathcal{R}(A) hoặc \\operatorname{ran} T. \\text{range} vẫn dùng được, nhưng nó theo phông chữ văn bản xung quanh, kể cả chữ nghiêng.",
  },
  "surjective": {
    name: "Toàn ánh",
    meaning: "Mũi tên có hai đầu nhọn, đánh dấu một ánh xạ hay cấu xạ toàn ánh.",
    usage: "Các nhà đại số viết f\\colon A \\twoheadrightarrow B để nói f là toàn ánh, chẳng hạn ánh xạ thương G \\twoheadrightarrow G/N. Nó đi cặp với \\hookrightarrow cho đơn ánh, nên một dãy khớp ngắn 0 \\to A \\hookrightarrow B \\twoheadrightarrow C \\to 0 thể hiện cả hai chỉ trong một cái nhìn. Có phiên bản hướng trái, \\twoheadleftarrow, cho các ánh xạ vẽ theo chiều ngược lại. Mũi tên là một quan hệ, nên khoảng cách xung quanh được đặt tự động. Tránh dùng nó để chỉ sự hội tụ hay phép kéo theo; ở đó \\to và \\implies là chuẩn.",
  },
  "restriction": {
    name: "Thu hẹp của hàm số",
    meaning: "Thu hẹp của f lên một tập con A, giữ nguyên quy tắc nhưng thu nhỏ tập xác định.",
    usage: "Thu hẹp f|_A giữ nguyên quy tắc nhưng thu nhỏ tập xác định, nên f|_A\\colon A \\to B. Một thanh dọc trơn thì ngắn và chỉ số dưới có thể trông tách rời khỏi nó; nhiều tác giả viết f\\big|_A cho thanh cao hơn, hoặc dùng mũi tên \\restriction, trông như nửa mũi tên móc. Đừng nhầm điều này với thanh tính giá trị, F(x)\\big|_a^b, có cùng hình dạng nhưng mục đích khác. Thu hẹp phổ biến trong tô pô, nơi kiểm tra tính liên tục của f|_U trên các tập mở, và trong lý thuyết bó, nơi s|_U thu hẹp một nhát cắt lên một tập mở nhỏ hơn.",
  },
  "function-evaluation": {
    name: "Giá trị của hàm số",
    meaning: "Phát biểu rằng hàm f biến đầu vào x thành giá trị đầu ra y.",
    usage: "Đẳng thức này là cách đọc hàm số theo phần tử: y là ảnh của x, cũng được viết x \\mapsto y. Trong các khóa đại số, giải f(x) = y theo x là cách tìm hàm ngược, cho x = f^{-1}(y). Khoảng cách quanh dấu = được đặt tự động, nên tránh thêm khoảng trắng thủ công. Với một danh sách giá trị, hãy căn thẳng nhiều đẳng thức bằng môi trường align, đặt & trước mỗi dấu bằng. Khi tên hàm có nhiều chữ cái, hãy dùng \\operatorname để nó không bị nghiêng: \\operatorname{relu}(x) = y thay vì relu(x) = y.",
  },
  "piecewise-function": {
    name: "Hàm số từng khúc",
    meaning: "Định nghĩa từng khúc bằng môi trường cases, cho các quy tắc khác nhau trên các khoảng khác nhau.",
    usage: "Trong cases, mỗi hàng chứa một giá trị, một dấu &, rồi điều kiện của nó, và các hàng kết thúc bằng \\; LaTeX tự động thêm dấu ngoặc nhọn bên trái và không có dấu đóng bên phải. Các ứng dụng điển hình là giá trị tuyệt đối, hàm kích hoạt ReLU, hàm dấu và hàm bậc thang Heaviside. Hãy bọc chữ trong \\text{}, như \\text{if } x > 0, để chúng in đứng với khoảng cách bình thường. Phân số trong các hàng mặc định được đặt ở kiểu văn bản, nên hãy dùng \\dfrac khi chúng trông quá nhỏ. Đảm bảo các điều kiện phủ kín tập xác định mà không chồng lấn, thường kết thúc bằng một hàng \\text{otherwise}.",
  },
};

export default text;
