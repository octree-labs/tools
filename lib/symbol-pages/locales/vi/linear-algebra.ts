import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/linear-algebra/<slug>. */
const text: SymbolPageTranslations = {
  "bold-vector": {
    name: "Vectơ in đậm",
    meaning: "Chữ cái in đậm đứng, quy ước in ấn thông dụng cho một vectơ như x trong R^n.",
    usage: "Sách đại số tuyến tính và bài báo vật lý đánh dấu vectơ bằng chữ đậm, như trong A\\mathbf{x} = \\mathbf{b}. \\mathbf chỉ tác động lên chữ cái Latinh và chữ số; các chữ Hy Lạp như \\alpha vẫn giữ nguyên, nên hãy dùng \\boldsymbol{\\alpha} cho chúng. Lưu ý rằng \\mathbf cho chữ đậm đứng, còn \\boldsymbol{x} cho chữ đậm nghiêng; chuẩn ISO ưu tiên chữ đậm nghiêng cho vectơ, trong khi nhiều giáo trình dùng chữ đứng. Các lựa chọn khác gồm \\vec{x} với mũi tên, phổ biến trong vật lý nhập môn, và gạch dưới trong ghi chép kiểu viết tay. Hãy chọn một quy ước và áp dụng nhất quán, tốt nhất là qua một macro để có thể thay đổi ở một chỗ duy nhất.",
  },
  "transpose": {
    name: "Ma trận chuyển vị",
    meaning: "Chuyển vị của ma trận A, viết bằng ký hiệu \\top, đổi hàng thành cột.",
    usage: "Dùng \\top làm chỉ số trên cho một dấu hình chữ T đứng, gọn gàng, không thể nhầm với một biến tên T; vì vậy nhiều bài báo học máy và thống kê viết \\mathbf{x}^{\\top}\\mathbf{y} hoặc (AB)^{\\top} = B^{\\top}A^{\\top}. A^T trông tương tự nhưng dùng chữ T nghiêng, và \\intercal là lựa chọn thứ ba, nằm thấp hơn và hẹp hơn. Dù chọn cách nào, hãy định nghĩa một macro ngắn để sau này đổi kiểu chỉ cần sửa một dòng. Với ma trận phức, chuyển vị liên hợp thường viết là A^{*} hoặc A^{H}, còn trong vật lý hay dùng \\dagger.",
  },
  "transpose-t": {
    name: "Ma trận chuyển vị (chữ T)",
    meaning: "Chuyển vị của A được đánh dấu bằng chữ T nghiêng ở chỉ số trên, dạng phổ biến nhất trong giáo trình.",
    usage: "Viết A^T nhanh và ai cũng hiểu: hệ phương trình chuẩn của bình phương tối thiểu A^T A\\mathbf{x} = A^T\\mathbf{b} xuất hiện theo cách này trong hầu hết sách đại số tuyến tính. Nhược điểm là sự mơ hồ khi T cũng là một biến, chẳng hạn mốc thời gian hay nhiệt độ, vì khi đó A^T có thể bị đọc thành một lũy thừa. Trong trường hợp đó, hãy chuyển sang A^{\\top} hoặc chữ đứng A^{\\mathsf{T}}. Cần dấu ngoặc nhọn khi chỉ số trên có nhiều hơn một ký hiệu, nên nghịch đảo của chuyển vị là A^{-T}, không phải A^-T. Ma trận đối xứng là ma trận thỏa mãn A^T = A.",
  },
  "inverse": {
    name: "Ma trận nghịch đảo",
    meaning: "Nghịch đảo của ma trận vuông A, tức ma trận mà tích của nó với A là ma trận đơn vị.",
    usage: "Nó thỏa mãn AA^{-1} = A^{-1}A = I và chỉ tồn tại khi \\det(A) \\neq 0. Dấu ngoặc nhọn là bắt buộc: A^-1 sẽ chỉ nâng dấu trừ lên chỉ số trên và để số 1 nằm trên dòng cơ sở. Với ma trận 2 x 2, công thức tường minh gồm \\frac{1}{ad-bc} nhân với ma trận phụ hợp thường được viết đầy đủ bằng bmatrix. Trong các bài báo về tính toán số, người đọc hiểu rằng nghịch đảo hiếm khi được tính tường minh, nên viết \\mathbf{x} = A^{-1}\\mathbf{b} như một ký hiệu là hoàn toàn ổn. Giả nghịch đảo dùng A^{+} hoặc A^{\\dagger}, và (AB)^{-1} = B^{-1}A^{-1} đảo ngược thứ tự.",
  },
  "determinant": {
    name: "Định thức",
    meaning: "Định thức của ma trận vuông A, đại lượng vô hướng cho biết hệ số co giãn thể tích có dấu của nó.",
    usage: "\\det là toán tử được định nghĩa sẵn, nên nó in chữ đứng với khoảng cách đúng; gõ det(A) sẽ in nghiêng ba biến riêng biệt. Các đẳng thức quan trọng gồm \\det(AB) = \\det(A)\\det(B) và \\det(A^{-1}) = 1/\\det(A). Khác với \\sin, \\det có thể nhận cận đặt bên dưới ở chế độ hiển thị, giống như \\lim. Với một ma trận tường minh, môi trường vmatrix vẽ trực tiếp các thanh dọc, nên \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc đọc rất tự nhiên. Dấu ngoặc đơn là tùy chọn khi đối số là một chữ cái, \\det A, như với các toán tử khác.",
  },
  "trace": {
    name: "Vết của ma trận",
    meaning: "Vết của A, tổng các phần tử trên đường chéo chính, viết với nhãn 'tr' chữ đứng.",
    usage: "Vết xuất hiện trong các đẳng thức như \\operatorname{tr}(AB) = \\operatorname{tr}(BA) và trong chuẩn Frobenius \\lVert A \\rVert_F^2 = \\operatorname{tr}(A^{\\top}A). Dùng \\text{tr} cho chữ đứng, nhưng nó kế thừa phông chữ văn bản xung quanh, thành chữ nghiêng bên trong một định lý, và không thêm khoảng cách toán tử. Lựa chọn chắc chắn hơn là \\operatorname{tr}, hoặc khai báo toàn cục \\DeclareMathOperator{\\tr}{tr} trong phần mở đầu, để \\tr A có khoảng cách đúng mà không cần dấu ngoặc. Các nhà vật lý thường viết Tr với chữ hoa, đặc biệt cho ma trận mật độ. Vết cũng bằng tổng các giá trị riêng tính cả bội.",
  },
  "rank": {
    name: "Hạng của ma trận",
    meaning: "Hạng của A: số chiều của không gian cột, viết với nhãn chữ đứng.",
    usage: "Định lý hạng - số chiều hạch được viết là \\operatorname{rank}(A) + \\operatorname{nullity}(A) = n, và một ma trận vuông khả nghịch khi và chỉ khi nó có hạng đầy đủ. \\text{rank} cho chữ đứng, nhưng chữ nghiêng của môi trường định lý có thể lọt vào và nó không có khoảng cách toán tử. Hãy ưu tiên \\operatorname{rank}(A), hoặc khai báo một lần \\DeclareMathOperator{\\rank}{rank} rồi viết \\rank A. Không có lệnh \\rank dựng sẵn, nên gõ nó khi chưa định nghĩa sẽ gây lỗi undefined control sequence. Xấp xỉ hạng thấp bằng SVD cắt cụt là nơi bạn thường phải viết ký hiệu này.",
  },
  "norm": {
    name: "Chuẩn",
    meaning: "Hai thanh dọc kép bao quanh x, biểu thị chuẩn, độ dài hay độ lớn của nó.",
    usage: "Dùng \\lVert và \\rVert thay cho \\| ở hai bên giúp LaTeX biết thanh nào mở và thanh nào đóng, cho khoảng cách đúng trong các biểu thức như \\lVert -x \\rVert, trong khi \\|-x\\| sẽ coi dấu trừ là toán tử hai ngôi. Chỉ số dưới chọn loại chuẩn: \\lVert x \\rVert_2 cho chuẩn Euclid, \\lVert x \\rVert_1, \\lVert x \\rVert_\\infty, hoặc \\lVert A \\rVert_F cho chuẩn Frobenius. Với nội dung cao, dùng \\left\\lVert ... \\right\\rVert. Bất đẳng thức tam giác \\lVert x+y \\rVert \\le \\lVert x \\rVert + \\lVert y \\rVert là một ví dụ điển hình, và một macro \\norm giúp tiết kiệm nhiều công gõ trong các bài báo dài.",
  },
  "inner-product": {
    name: "Tích trong",
    meaning: "Cặp ngoặc nhọn bao quanh hai vectơ, biểu thị tích trong của chúng.",
    usage: "Tích trong tổng quát hóa tích vô hướng: \\langle x, y \\rangle = \\sum_i x_i y_i trong R^n, và bất đẳng thức Cauchy-Schwarz |\\langle x, y \\rangle| \\le \\lVert x \\rVert \\lVert y \\rVert là ví dụ kinh điển. Đừng bao giờ gõ dấu nhỏ hơn và lớn hơn thay thế; < và > là quan hệ với khoảng cách rộng và góc sai. Với đối số lớn, \\left\\langle ... \\right\\rangle co giãn dấu ngoặc. Trong cơ học lượng tử, cùng cặp ngoặc này tạo nên ký hiệu bra-ket, \\langle \\psi | \\phi \\rangle, với một thanh dọc ở giữa. Một số sách viết (x, y) hoặc x \\cdot y cho cùng đại lượng.",
  },
  "kronecker-delta": {
    name: "Ký hiệu delta Kronecker",
    meaning: "Delta Kronecker: bằng 1 khi hai chỉ số i và j trùng nhau và bằng 0 trong trường hợp ngược lại.",
    usage: "Nó mô tả ma trận đơn vị theo từng phần tử, I_{ij} = \\delta_{ij}, và biểu diễn tính trực chuẩn của một cơ sở, \\langle e_i, e_j \\rangle = \\delta_{ij}. Trong ký hiệu chỉ số, nó đóng vai trò toán tử thay thế: \\sum_j \\delta_{ij} a_j = a_i, giúp đơn giản hóa các phép tính tenxơ. Đừng nhầm nó với delta Dirac \\delta(x), một phân bố trên biến liên tục, dù cả hai đều dùng chữ thường \\delta. Dấu ngoặc nhọn quanh ij giữ cả hai chỉ số trong chỉ số dưới; \\delta_ij sẽ chỉ hạ chữ i và để j trên dòng cơ sở. Khi làm việc với tenxơ có chỉ số hỗn hợp, hãy viết \\delta^i_j.",
  },
  "identity-matrix": {
    name: "Ma trận đơn vị",
    meaning: "Ma trận đơn vị cỡ n x n, với các số một trên đường chéo và số không ở mọi vị trí khác.",
    usage: "Chỉ số dưới ghi lại kích thước, nên với ma trận A cỡ m x n thì cả AI_n = A và I_m A = A đều đúng, với ma trận đơn vị khác nhau ở mỗi bên. Khi số chiều đã rõ, chỉ cần I; một số tác giả thích chữ đậm \\mathbf{I} hoặc viết E, đặc biệt trong các sách châu Âu cũ. Với kích thước nhiều ký tự, hãy thêm dấu ngoặc nhọn: I_{n+1} hoặc I_{10}, vì I_10 sẽ chỉ hạ chữ số 1. Đa thức đặc trưng \\det(A - \\lambda I_n) là nơi nó xuất hiện điển hình, và \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} viết tường minh I_2.",
  },
  "zero-matrix": {
    name: "Ma trận không",
    meaning: "Số không in đậm, biểu thị vectơ không hoặc ma trận không, phân biệt với số vô hướng 0.",
    usage: "Chữ đậm phân biệt phần tử trung hòa của phép cộng trong không gian vectơ với số không, như trong A\\mathbf{x} = \\mathbf{0} cho hệ thuần nhất hoặc \\mathbf{v} + \\mathbf{0} = \\mathbf{v}. \\mathbf áp dụng được cho chữ số, nên đây là dạng đơn giản nhất; \\boldsymbol{0} cho kết quả giống hệt trong hầu hết phông chữ. Với ma trận không có kích thước tường minh, viết \\mathbf{0}_{m \\times n} hoặc chữ hoa O_{m \\times n}. Nhiều bài báo bỏ chữ đậm và viết 0 khi ngữ cảnh đã rõ kiểu, điều này chấp nhận được nếu nhất quán. Hãy dùng cùng kiểu chữ đậm như các vectơ khác.",
  },
  "matrix": {
    name: "Ma trận",
    meaning: "Môi trường bmatrix viết một ma trận trong ngoặc vuông, với & ngăn cách các cột.",
    usage: "Các phần tử trong một hàng được ngăn cách bởi &, mỗi hàng kết thúc bằng \\\\, và dấu ngoặc tự co giãn theo nội dung, nên không cần \\left[. Các môi trường anh em chỉ thay đổi dấu bao: pmatrix dùng ngoặc đơn, vmatrix dùng thanh dọc cho định thức, Vmatrix dùng thanh kép, còn matrix thì không có dấu bao nào. Môi trường array là lựa chọn cũ hơn; nó cần đặc tả cột như {cc} nhưng cho phép đường kẻ dọc và căn lề theo từng cột. Với ma trận tổng quát, lấp chỗ trống bằng \\cdots, \\vdots và \\ddots, như trong a_{11} & \\cdots & a_{1n}. Trong dòng văn bản, smallmatrix bên trong \\bigl[ \\bigr] tránh làm giãn dòng.",
  },
  "column-vector": {
    name: "Vectơ cột",
    meaning: "pmatrix với một cột, xếp x trên y thành một vectơ cột trong ngoặc đơn.",
    usage: "Mỗi \\\\ bắt đầu một hàng mới, nên một cột phần tử duy nhất trở thành vectơ dọc, cách thông thường để viết tọa độ trong R^2 hoặc vế phải của một hệ phương trình tuyến tính. Ngoặc đơn (pmatrix) và ngoặc vuông (bmatrix) đều chuẩn như nhau; hãy chọn một kiểu cho toàn bộ tài liệu. Để tiết kiệm không gian dọc trong văn bản, hãy viết một hàng chuyển vị, (x, y)^{\\top}. Với vectơ dài, dùng \\vdots ở hàng giữa, như trong x_1 \\\\ \\vdots \\\\ x_n. Vectơ cột trong dòng trông chật chội và đẩy các dòng ra xa nhau; smallmatrix là lựa chọn gọn khi không thể tránh.",
  },
};

export default text;
