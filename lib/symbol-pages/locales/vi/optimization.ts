import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/optimization/<slug>. */
const text: SymbolPageTranslations = {
  "argmax-subscript": {
    name: "Argmax có chỉ số dưới",
    meaning: "Argmax theo x: điểm x tại đó hàm mục tiêu đạt giá trị lớn nhất.",
    usage: "Trong sách tối ưu hóa, điểm cực đại của f trên một tập chấp nhận được được viết x^* = \\arg\\max_{x \\in \\mathcal{X}} f(x). Khi gõ \\arg\\max_{x}, chỉ số dưới gắn vào \\max, nên ở kiểu hiển thị x nằm chính giữa dưới chữ max chứ không dưới toàn bộ arg max. \\operatorname*{arg\\,max}_{x} hoặc một toán tử khai báo có dấu sao sẽ đặt nó dưới toàn bộ tên. Trong công thức nội dòng, chỉ số dưới luôn nằm ở phía dưới bên phải. Vì cực đại có thể không duy nhất, x^* \\in \\arg\\max chính xác hơn về mặt kỹ thuật so với dấu bằng. Khi cực đại hóa theo nhiều biến, hãy liệt kê chúng: \\arg\\max_{x, y}.",
  },
  "argmin-subscript": {
    name: "Argmin có chỉ số dưới",
    meaning: "Argmin theo x: điểm x làm cực tiểu hàm mục tiêu.",
    usage: "Dạng này định nghĩa nghiệm của một bài toán cực tiểu hóa, như trong toán tử gần kề \\operatorname{prox}_f(v) = \\arg\\min_x \\big(f(x) + \\frac{1}{2}\\|x - v\\|_2^2\\big). Vì \\arg không nhận cận, chỉ số dưới thuộc về \\min, nên nó chỉ nằm chính giữa dưới chữ min ở chế độ hiển thị; \\operatorname*{arg\\,min} khắc phục vị trí này. Ràng buộc có thể đặt ở chỉ số dưới, \\arg\\min_{x \\in C}, hoặc trong \\substack nếu có nhiều dòng. Hãy phân biệt argmin, trả về một điểm hoặc một tập, với \\min, trả về giá trị; lẫn lộn hai thứ là lỗi thường gặp trong bài làm của sinh viên.",
  },
  "minimize": {
    name: "Cực tiểu hóa",
    meaning: "Giá trị nhỏ nhất theo x: giá trị bé nhất mà một biểu thức đạt được khi x thay đổi, viết với x dưới chữ min.",
    usage: "\\min là toán tử định nghĩa sẵn có nhận cận, nên trong công thức hiển thị \\min_{x} đặt x bên dưới chữ, còn trong dòng nó xuất hiện như chỉ số dưới bên phải. Đây là dòng mở đầu của một bài toán tối ưu chuẩn: \\min_x f(x) với các ràng buộc. Khi giá trị nhỏ nhất có thể không đạt được, như trên tập mở, hãy dùng \\inf. Để buộc vị trí kiểu hiển thị trong dòng, hãy viết \\min\\limits_{x}. Với điều kiện nhiều dòng dưới min, hãy dùng \\substack{x \\in \\mathbb{R}^n \\\\ Ax = b}. Giá trị nó biểu thị là một số, khác với argmin, trả về điểm cực tiểu.",
  },
  "maximize": {
    name: "Cực đại hóa",
    meaning: "Giá trị lớn nhất theo x: giá trị lớn nhất mà biểu thức đạt được khi x chạy trên miền xác định.",
    usage: "\\max_{x} hoạt động như \\min_{x}: toán tử định nghĩa sẵn đặt cận bên dưới ở kiểu hiển thị và bên cạnh trong dòng. Các ứng dụng điển hình là hàm đối ngẫu, bài toán minimax như \\min_G \\max_D khi huấn luyện GAN, và cực đại hóa lề trong SVM. Khi cận trên đúng có thể không đạt được, \\sup là toán tử đúng. Kết hợp các toán tử là chuyện thường, và TeX xử lý tốt các cận xếp chồng trên \\min và \\max kề nhau. Bạn có thể ghi đè vị trí bằng \\limits hoặc \\nolimits, và thêm \\, hoặc \\; trước hàm mục tiêu cho thoáng trong các biểu thức dài.",
  },
  "subject-to": {
    name: "Ký hiệu “với điều kiện” (s.t.)",
    meaning: "Chữ viết tắt mang nghĩa “với điều kiện”, mở đầu phần ràng buộc của một bài toán tối ưu.",
    usage: "Trong phát biểu bài toán, s.t. ngăn cách hàm mục tiêu với các ràng buộc: \\min_x f(x) \\quad \\text{s.t.} \\quad g_i(x) \\leq 0. Hãy dùng \\text để các chữ đứng thẳng và giữ dấu chấm, và đệm \\quad ở hai bên, vì \\text không tự thêm khoảng cách. Nhiều hướng dẫn trình bày ưa dùng cụm đầy đủ \\text{subject to}, nhất là trong các công thức hiển thị căn bằng môi trường align, nơi các ràng buộc xếp chồng ở các dòng tiếp theo dưới dòng đầu tiên. Đừng gõ s.t. trực tiếp trong chế độ toán; nó sẽ in s và t nghiêng như các biến kèm một dấu chấm.",
  },
  "constraint": {
    name: "Ràng buộc bất đẳng thức",
    meaning: "Ràng buộc bất đẳng thức tổng quát: hàm g phải không dương tại một điểm chấp nhận được x.",
    usage: "Viết ràng buộc bất đẳng thức ở dạng chuẩn g_i(x) \\leq 0 là quy ước trong tối ưu lồi, nên ràng buộc như x_1 + x_2 \\geq 1 trở thành 1 - x_1 - x_2 \\leq 0. \\leq có bí danh ngắn \\le, cả hai cho cùng glyph; \\leqslant vẽ vạch nghiêng được ưa chuộng trong một số truyền thống in ấn châu Âu. Đánh chỉ số nhiều ràng buộc thành g_i(x) \\leq 0 với i = 1, \\dots, m. Trong phân tích KKT, mỗi bất đẳng thức có một nhân tử \\lambda_i \\geq 0 với điều kiện bù \\lambda_i g_i(x) = 0. Khi trình bày bài toán, hãy căn chúng bằng &.",
  },
  "equality-constraint": {
    name: "Ràng buộc đẳng thức",
    meaning: "Ràng buộc đẳng thức tổng quát: hàm h phải triệt tiêu tại mọi điểm chấp nhận được x.",
    usage: "Ràng buộc đẳng thức h_j(x) = 0 bổ sung cho ràng buộc bất đẳng thức g_i(x) \\leq 0 trong dạng chuẩn của một bài toán quy hoạch phi tuyến. Trong tối ưu lồi chúng phải là hàm afin, nên thường được viết Ax = b. Trong hàm Lagrange, mỗi ràng buộc có một nhân tử \\nu_j hoặc \\mu_j mà, khác với nhân tử của bất đẳng thức, có thể mang dấu bất kỳ. Chữ h là quy ước, nhưng trong một số lĩnh vực nó trùng với bước nhảy hoặc entropy; hãy chọn chữ không gây xung đột. Với nhiều ràng buộc, hãy đánh chỉ số bằng j để tách biệt với chỉ số i của bất đẳng thức.",
  },
  "lagrangian": {
    name: "Hàm Lagrange",
    meaning: "Hàm Lagrange kết hợp hàm mục tiêu với các ràng buộc được nhân với các nhân tử lambda.",
    usage: "Hàm Lagrange là \\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x), và hàm đối ngẫu là cận dưới đúng của nó theo x. Đặt \\nabla_x \\mathcal{L} = 0 cho điều kiện dừng dùng trong các bài toán giải tích có ràng buộc và khi dẫn xuất SVM. \\mathcal cho chữ L kiểu viết tay và chỉ dùng được với chữ in hoa. Vì cùng \\mathcal{L} cũng chỉ hàm mất mát trong học máy, các bài báo dùng cả hai đôi khi viết L hoặc \\Lambda cho một trong hai. Một số giáo trình dùng quy ước dấu ngược lại, f - \\lambda g, nên hãy nêu rõ quy ước của bạn.",
  },
  "gradient": {
    name: "Gradient",
    meaning: "Gradient của f tại x: vectơ các đạo hàm riêng cấp một, chỉ theo hướng tăng nhanh nhất.",
    usage: "Gradient \\nabla f(x) = (\\partial f/\\partial x_1, \\dots, \\partial f/\\partial x_n)^\\top là nền tảng của các phương pháp bậc một như hạ gradient, x_{k+1} = x_k - \\alpha \\nabla f(x_k), và việc nó triệt tiêu là điều kiện tối ưu bậc một cho bài toán không ràng buộc. \\nabla là tam giác ngược, đôi khi gọi là del hoặc nabla. Cùng toán tử đó cho divergence, \\nabla \\cdot \\mathbf{F}, và rota, \\nabla \\times \\mathbf{F}, trong giải tích vectơ. Đừng nhầm nó với \\Delta, tam giác hướng lên dùng cho toán tử Laplace hoặc sai phân hữu hạn. Thêm chỉ số dưới, \\nabla_x f, khi chỉ lấy đạo hàm theo một số biến.",
  },
  "hessian": {
    name: "Ma trận Hessian",
    meaning: "Ma trận Hessian của f tại x: ma trận các đạo hàm riêng cấp hai, mô tả độ cong cục bộ.",
    usage: "Trong tối ưu hóa, \\nabla^2 f(x) là ma trận Hessian, dùng trong phương pháp Newton, x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k), và trong điều kiện bậc hai: ma trận Hessian xác định dương tại một điểm dừng nghĩa là cực tiểu địa phương chặt. Cần cẩn thận: trong vật lý và phương trình đạo hàm riêng, \\nabla^2 f nghĩa là toán tử Laplace, một đại lượng vô hướng bằng vết của ma trận Hessian, thường viết \\Delta f. Hãy làm rõ bạn muốn nói gì, hoặc dùng H_f hay \\nabla\\nabla^\\top f cho ma trận. Tính lồi của một hàm khả vi hai lần tương đương với \\nabla^2 f(x) \\succeq 0 ở mọi nơi.",
  },
  "optimal-value": {
    name: "Nghiệm tối ưu",
    meaning: "x có dấu sao ở chỉ số trên: nghiệm tối ưu hay điểm cực tiểu của một bài toán tối ưu.",
    usage: "Dấu sao đánh dấu điểm tối ưu, nên p^* = f(x^*) là giá trị tối ưu, và nghiệm tối ưu đối ngẫu được viết \\lambda^*, \\nu^*. Tốc độ hội tụ được phát biểu theo f(x_k) - f(x^*) hoặc \\|x_k - x^*\\|. ^* và ^\\ast cho cùng một dấu hoa thị; ^\\star cho dấu sao năm cánh, tránh nhầm với liên hợp phức, toán tử liên hợp hay bao đóng Kleene, vốn cũng dùng dấu hoa thị. Khi x có thêm chỉ số dưới, x_k^* và x^*_k hiển thị như nhau. Hãy phân biệt x^* với \\hat{x}, thường chỉ một ước lượng hoặc nghiệm xấp xỉ.",
  },
  "feasible-set": {
    name: "Tập chấp nhận được",
    meaning: "Chữ X viết tay, thường dùng để đặt tên cho tập chấp nhận được hoặc miền mà biến tối ưu chạy trên đó.",
    usage: "Chữ hoa viết tay đặt tên cho các tập hợp trong tối ưu hóa và học máy: x \\in \\mathcal{X} cho miền chấp nhận được, \\mathcal{Y} cho nhãn, \\mathcal{D} cho phân phối dữ liệu, \\mathcal{H} cho lớp giả thuyết. \\mathcal chỉ hỗ trợ chữ in hoa; đối số chữ thường cho glyph không lường trước được. Nếu muốn kiểu chữ viết tay hoa mỹ hơn, \\mathscr cho một phong cách khác, còn \\mathbb{X} cho chữ blackboard bold, thường dùng cho các hệ số hơn. Phép chiếu lên tập hợp được viết \\Pi_{\\mathcal{X}}(y). Hãy định nghĩa tập hợp tường minh một lần, ví dụ \\mathcal{X} = \\{x : g_i(x) \\leq 0\\}.",
  },
  "kkt-conditions": {
    name: "Điều kiện KKT",
    meaning: "Điều kiện dừng của hệ KKT: gradient của hàm mục tiêu được cân bằng bởi tổ hợp có trọng số của các gradient ràng buộc.",
    usage: "Dòng này là điều kiện đầu tiên trong các điều kiện Karush-Kuhn-Tucker; hệ đầy đủ còn thêm tính chấp nhận được của bài toán gốc g(x) \\leq 0, tính chấp nhận được của bài toán đối ngẫu \\lambda \\geq 0 và điều kiện bù \\lambda g(x) = 0. Với nhiều ràng buộc, nó tổng quát thành \\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) + \\sum_j \\nu_j \\nabla h_j(x^*) = 0. Hãy trình bày toàn bộ hệ trong môi trường cases hoặc aligned cho dễ đọc. Quy ước dấu khác nhau: nếu hàm Lagrange được viết f - \\lambda g, dấu cộng thành dấu trừ, nên hãy khớp với định nghĩa của bạn. Ghi rõ việc tính tại x^* giúp tránh mơ hồ.",
  },
  "positive-definite": {
    name: "Ma trận xác định dương",
    meaning: "Điều kiện ma trận xác định dương: A \\succ 0 nghĩa là x^T A x > 0 với mọi vectơ x khác không.",
    usage: "Trong giải tích ma trận và quy hoạch nửa xác định, \\succ biểu thị thứ tự Loewner, nên A \\succ B nghĩa là A - B xác định dương. Ma trận Hessian \\nabla^2 f(x) \\succ 0 bảo đảm tính lồi chặt, và ma trận hiệp phương sai \\Sigma \\succ 0 khả nghịch. \\succ là ký hiệu quan hệ nên tự động có khoảng cách quan hệ. Tránh dùng > cho ma trận, vì nó gợi ý so sánh từng phần tử. Các ký hiệu trông giống gồm \\succcurlyeq, biến thể cong mà một số tác giả dùng cho trường hợp nửa xác định, và \\gg, nghĩa là lớn hơn rất nhiều. Có thể viết tương đương bằng ký hiệu tập hợp A \\in \\mathbb{S}^n_{++}.",
  },
  "positive-semidefinite": {
    name: "Ma trận nửa xác định dương",
    meaning: "Điều kiện nửa xác định dương: A \\succeq 0 nghĩa là x^T A x \\geq 0 với mọi vectơ x.",
    usage: "Ràng buộc nửa xác định X \\succeq 0 định nghĩa các bài toán quy hoạch nửa xác định, và tính lồi của một hàm trơn tương đương với \\nabla^2 f(x) \\succeq 0. Ma trận Gram và ma trận hiệp phương sai luôn nửa xác định dương. \\succeq vẽ ký hiệu “đứng sau” với một vạch thẳng bên dưới; \\succcurlyeq là biến thể vạch cong mà một số sách tối ưu ưa dùng, nên hãy chọn một và dùng nhất quán. Phiên bản chặt là \\succ. Tập các ma trận như vậy thường được viết \\mathbb{S}^n_+, và điều kiện phần bù Schur là cách phổ biến để phát biểu các ràng buộc này ở dạng khối.",
  },
};

export default text;
