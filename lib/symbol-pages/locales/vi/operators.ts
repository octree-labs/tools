import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/operators/<slug>. */
const text: SymbolPageTranslations = {
  "direct-sum": {
    name: "Tổng trực tiếp",
    meaning: "Dấu cộng trong vòng tròn, dùng cho tổng trực tiếp của các không gian hoặc môđun và cho phép tuyển loại trừ (XOR) trong đại số Boole.",
    usage: "Đại số tuyến tính viết V = U \\oplus W khi mỗi vectơ tách được duy nhất thành các phần thuộc U và W, còn lý thuyết môđun xây dựng \\mathbb{Z} \\oplus \\mathbb{Z}. Trong tin học và mật mã học, a \\oplus b là phép XOR theo bit, như trong mật mã sổ dùng một lần c = m \\oplus k. Đây là toán tử hai ngôi nên có khoảng cách vừa. Với tổng trực tiếp theo một tập chỉ số, hãy dùng toán tử lớn \\bigoplus_{i \\in I} V_i, nhận cận giống như \\sum. Đừng nhầm nó với \\pm hay dấu + thông thường; trong một số đại số, \\oplus còn chỉ một phép cộng biến dạng.",
  },
  "tensor-product": {
    name: "Tích tenxơ",
    meaning: "Dấu nhân trong vòng tròn, chỉ tích tenxơ của các vectơ, không gian, môđun hoặc ma trận (tích Kronecker).",
    usage: "Đại số đa tuyến tính viết V \\otimes W, cơ học lượng tử viết trạng thái hợp |\\psi\\rangle \\otimes |\\phi\\rangle, và đại số ma trận dùng A \\otimes B cho tích Kronecker. Trong học máy, nó đôi khi xuất hiện để chỉ tích ngoài. Đây là toán tử hai ngôi với khoảng cách vừa. Với tích lặp, hãy dùng toán tử lớn \\bigotimes_{i=1}^n V_i, còn với tích tenxơ trên một vành thì đặt vành làm chỉ số dưới, M \\otimes_R N. Đừng dùng \\times, vốn là tích Descartes hoặc tích có hướng.",
  },
  "circle-dot": {
    name: "Dấu chấm trong vòng tròn",
    meaning: "Dấu chấm trong vòng tròn, thường dùng cho tích từng phần tử (tích Hadamard) của vectơ hoặc ma trận.",
    usage: "Các bài báo học sâu viết h_t = o_t \\odot \\tanh(c_t) cho tích từng phần tử trong mạng LSTM và mặt nạ chú ý, còn đại số tuyến tính số dùng A \\odot B cho tích Hadamard, thường song song với \\circ cùng nghĩa. Hình vẽ vật lý dùng chấm trong vòng tròn cho vectơ hướng ra khỏi trang giấy, nhưng khi đó nó là ký hiệu chứ không phải toán tử. Đây là toán tử hai ngôi với khoảng cách vừa; dạng lớn \\bigodot cũng tồn tại. Hãy nêu rõ trong phần ký hiệu rằng \\odot là tích Hadamard, vì một số tác giả dùng nó cho XNOR hoặc phép toán khác.",
  },
  "circle-minus": {
    name: "Dấu trừ trong vòng tròn",
    meaning: "Dấu trừ trong vòng tròn, dùng cho phần bù trực giao trong một không gian và một số phép toán kiểu hiệu.",
    usage: "Trong lý thuyết không gian Hilbert, H \\ominus K chỉ phần bù trực giao của không gian con đóng K trong H, là đối ứng của \\oplus. Xử lý ảnh hình thái học dùng A \\ominus B cho phép co, và một số sách lý thuyết tập hợp dùng nó cho hiệu đối xứng, dù ở đó \\triangle phổ biến hơn. Đây là toán tử hai ngôi nên khoảng cách được đặt tự động. Vì nghĩa của nó thay đổi, hãy định nghĩa nó một lần trong bài. Không có phiên bản toán tử lớn chuẩn. Khi dùng cho hiệu đối xứng, A \\ominus B bằng (A \\setminus B) \\cup (B \\setminus A).",
  },
  "circle-slash": {
    name: "Dấu gạch chéo trong vòng tròn",
    meaning: "Dấu gạch chéo trong vòng tròn, thường chỉ phép chia từng phần tử (chia Hadamard) của vectơ hoặc ma trận.",
    usage: "Các sách tính toán ma trận và học máy viết A \\oslash B cho phép chia từng phần tử, đi kèm \\odot cho phép nhân từng phần tử, như trong các bước cập nhật chuẩn hóa x \\oslash \\sqrt{v}. LaTeX coi nó là toán tử hai ngôi, nên nó có cùng khoảng cách vừa như \\odot và \\otimes. Lưu ý nó khác với \\varnothing và \\emptyset, trông như vòng tròn có gạch chéo nhưng là ký hiệu thường cho tập rỗng, và khác với chữ cái Bắc Âu \\o. Vì nó không được biết đến rộng rãi, hãy giới thiệu nó trong phần ký hiệu.",
  },
  "star": {
    name: "Dấu sao năm cánh",
    meaning: "Toán tử hai ngôi hình ngôi sao năm cánh, dùng cho tích chập, đối ngẫu Hodge và các tích tự định nghĩa.",
    usage: "Xử lý tín hiệu đôi khi viết tương quan chéo là f \\star g, hình học vi phân dùng \\star cho toán tử sao Hodge, và các nhà đại số dùng nó cho phép toán hai ngôi tổng quát hoặc tích sao Moyal. Giá trị tối ưu trong tối ưu hóa được viết x^\\star, thay cho x^*. \\star là toán tử hai ngôi, khác với \\ast (dấu hoa thị) và với ký hiệu do \\bigstar tạo ra. Vì nó có khoảng cách của toán tử hai ngôi, khi dùng như toán tử tiền tố, chẳng hạn sao Hodge, có thể cần dấu ngoặc nhọn: {\\star}\\omega.",
  },
  "asterisk": {
    name: "Dấu hoa thị",
    meaning: "Dấu hoa thị dùng như toán tử hai ngôi, thường cho tích chập hoặc một phép toán nhóm tổng quát.",
    usage: "Trong chế độ toán, \\ast là cùng một glyph với việc gõ *, một toán tử hai ngôi có khoảng cách vừa, dùng cho tích chập (f \\ast g)(t) = \\int f(\\tau) g(t - \\tau)\\,d\\tau và cho các phép toán hai ngôi tổng quát trong đại số. Ở chỉ số trên, A^* hay A^\\ast chỉ toán tử liên hợp, chuyển vị liên hợp, không gian đối ngẫu hoặc bao đóng Kleene tùy lĩnh vực. Nó nằm chính giữa trục toán, khác với dấu hoa thị văn bản nằm cao. Với giá trị tối ưu có dấu sao x^\\star, một số tác giả chọn \\star để tách bạch các nghĩa.",
  },
  "composition": {
    name: "Phép hợp thành",
    meaning: "Toán tử vòng tròn nhỏ, chuẩn cho phép hợp thành hàm số và cũng dùng cho độ.",
    usage: "(f \\circ g)(x) = f(g(x)) là cách dùng chính. Ở chỉ số trên, 90^\\circ cho ký hiệu độ, dù ký hiệu độ riêng từ phông bổ trợ văn bản có thể trông đẹp hơn, còn A^\\circ thường chỉ phần trong hoặc tập cực. Một số tác giả dùng \\circ cho tích Hadamard, trong khi \\odot là lựa chọn rõ ràng hơn. \\circ là toán tử hai ngôi nên có khoảng cách vừa; \\bigcirc là vòng tròn lớn hơn và \\cdot là chấm đặc. Tránh dùng chữ o cho phép hợp thành.",
  },
  "bullet": {
    name: "Dấu chấm tròn đặc",
    meaning: "Chấm tròn đặc dùng như toán tử hai ngôi, cho vị trí giữ chỗ, các tích tổng quát và đối tượng phân bậc.",
    usage: "Lý thuyết phạm trù và đại số đồng điều dùng \\bullet làm chỉ số giữ chỗ, như C_\\bullet cho một phức xích và H^\\bullet cho đối đồng điều toàn phần. Nó cũng là đối số giữ chỗ, f(\\bullet, y), và là ký hiệu phép toán trong đại số. Dấu đầu dòng trong danh sách itemize được tạo bởi \\textbullet, không phải \\bullet của chế độ toán. So với \\cdot, nó lớn và đậm hơn; \\cdot là lựa chọn đúng cho phép nhân thông thường hay tích vô hướng. Là toán tử hai ngôi, nó có khoảng cách vừa, nên khi giữ chỗ trong f(\\bullet) khoảng cách vẫn ổn vì không có toán hạng bên trái.",
  },
  "diamond": {
    name: "Dấu hình thoi",
    meaning: "Toán tử hai ngôi hình thoi nhỏ, dùng cho các phép toán tổng quát và một số ký hiệu trong logic tình thái và đại số.",
    usage: "\\diamond xuất hiện như một phép toán hai ngôi tùy ý (a \\diamond b), trong tích kim cương của lý thuyết Lie và trong lý thuyết ôtômat. Logic tình thái viết tính khả năng bằng hình thoi lớn hơn, thường là \\Diamond hoặc \\lozenge, chứ không phải phiên bản toán tử hai ngôi nhỏ này. Vì \\diamond là toán tử hai ngôi, dùng nó như toán tử tiền tố trước một công thức sẽ cho khoảng cách lạ; hãy dùng \\Diamond hoặc bọc nó thành {\\diamond}p. Nó khác với \\diamondsuit, chất rô trong bộ bài, vốn là ký hiệu thường.",
  },
  "big-circle": {
    name: "Vòng tròn lớn",
    meaning: "Toán tử hai ngôi hình vòng tròn rỗng cỡ lớn, lớn hơn \\circ, dùng cho các tích đặc biệt và sơ đồ.",
    usage: "\\bigcirc chủ yếu được chọn làm ký hiệu cho các phép toán tự định nghĩa, chẳng hạn một tích kiểu hộp, hoặc trong logic thời gian, nơi vòng tròn chỉ toán tử thời điểm kế tiếp, \\bigcirc p. Đây là toán tử hai ngôi, không phải toán tử lớn có cận, nên nó không phóng to ở chế độ hiển thị như \\bigcup. Để khoanh tròn một ký hiệu, chồng \\bigcirc lên là bất tiện; một nút tròn của gói vẽ hình hoặc \\textcircled cho kết quả tốt hơn. Với phép hợp thành, \\circ nhỏ hơn là chuẩn. Với toán tử trong vòng tròn như \\oplus hay \\otimes, các lệnh riêng phù hợp hơn cách chồng ký hiệu.",
  },
  "triangle-up": {
    name: "Tam giác hướng lên",
    meaning: "Tam giác rỗng hướng lên, dùng cho tam giác trong hình học, hiệu đối xứng và toán tử Laplace.",
    usage: "Hình học viết \\triangle ABC cho một tam giác, lý thuyết tập hợp viết A \\triangle B cho hiệu đối xứng, và một số sách dùng nó cho toán tử Laplace, dù \\Delta hoặc \\nabla^2 thông dụng hơn. Trong LaTeX chuẩn, \\triangle là ký hiệu thường chứ không phải toán tử hai ngôi, nên trong A \\triangle B bạn có thể cần \\mathbin{\\triangle} để có khoảng cách đúng, hoặc dùng \\bigtriangleup, vốn đã là toán tử hai ngôi. Nó lớn hơn và có hình dạng khác chữ Hy Lạp hoa \\Delta.",
  },
  "triangle-down": {
    name: "Tam giác hướng xuống",
    meaning: "Tam giác rỗng nhỏ hướng xuống, là ký hiệu thường chứ không phải toán tử.",
    usage: "\\triangledown là tam giác hướng xuống nhỏ hơn với khoảng cách thường, dùng làm trang trí hoặc dấu đánh dấu trong một số hệ ký hiệu. Nó không giống \\nabla, toán tử gradient, có hình dạng khác và là thứ bạn cần cho \\nabla f; nó cũng không phải \\bigtriangledown, một toán tử hai ngôi lớn hơn. Nếu dùng \\triangledown như một phép toán, hãy bọc nó trong \\mathbin để có khoảng cách toán tử. Phiên bản tô đặc là \\blacktriangledown. Trong các bài báo hoàn chỉnh nó hiếm khi xuất hiện, chủ yếu để chỉ ký hiệu điểm của đồ thị trong chú thích hình hoặc làm phép toán tự định nghĩa.",
  },
  "square": {
    name: "Hình vuông",
    meaning: "Ký hiệu hình vuông rỗng, dùng cho toán tử d'Alembert, tính tất yếu trong logic tình thái và dấu kết thúc chứng minh.",
    usage: "Các nhà vật lý viết \\square cho toán tử sóng d'Alembert, \\square = \\partial_t^2/c^2 - \\nabla^2, logic tình thái dùng \\square p cho “tất yếu p” (thường viết \\Box), và hình vuông rỗng làm dấu kết thúc ở cuối chứng minh. Trong các chứng minh của amsthm, dấu này được đặt tự động qua \\qedsymbol, nên bạn hiếm khi tự gõ nó. \\square là ký hiệu thường; \\blacksquare cho phiên bản tô đặc. Nhiều sách logic viết \\Box cho tính tất yếu; hai glyph gần như giống hệt nhau. Khi dùng như toán tử đứng trước một trường, không cần thêm khoảng cách.",
  },
  "wedge": {
    name: "Dấu nêm",
    meaning: "Toán tử hai ngôi hình nêm, cho phép hội logic, tích ngoài (tích nêm) và cận dưới đúng trong dàn.",
    usage: "Hình học vi phân xây dựng các dạng vi phân như dx \\wedge dy, với \\omega \\wedge \\eta = (-1)^{kl} \\eta \\wedge \\omega. Logic dùng p \\wedge q cho phép hội (\\land là bí danh), lý thuyết dàn viết a \\wedge b cho cận dưới lớn nhất; các nhà xác suất viết s \\wedge t cho \\min(s, t). Đây là toán tử hai ngôi với khoảng cách vừa. Với phép hội theo một tập chỉ số, hãy dùng toán tử lớn \\bigwedge. Trong tô pô, X \\wedge Y là tích smash của các không gian có điểm gốc. Đừng nhầm nó với dấu mũ \\hat hay \\widehat.",
  },
  "vee": {
    name: "Dấu chữ V",
    meaning: "Toán tử hai ngôi hình chữ V, cho phép tuyển logic, cận trên đúng trong dàn và tổng nêm của các không gian.",
    usage: "Logic viết p \\vee q cho phép tuyển bao hàm, và \\lor là bí danh giống hệt. Lý thuyết dàn dùng a \\vee b cho cận trên nhỏ nhất, xác suất viết s \\vee t cho \\max(s, t), và tô pô dùng X \\vee Y cho tổng nêm, dán các không gian tại một điểm gốc. Với nhiều số hạng, hãy dùng \\bigvee_{i} p_i. Nó khác với chữ v và với \\veebar, mà một số sách dùng cho phép tuyển loại trừ. Ký hiệu này có khoảng cách của toán tử hai ngôi.",
  },
  "amalgamation": {
    name: "Phép hợp nhất",
    meaning: "Toán tử hợp nhất, dùng cho hợp rời và đối tích.",
    usage: "Lý thuyết phạm trù và tô pô viết X \\amalg Y cho đối tích hoặc hợp rời, còn lý thuyết nhóm dùng G \\ast_H K cho tích tự do hợp nhất, một số sách dùng \\amalg. \\amalg là toán tử hai ngôi. Với phiên bản có chỉ số và cận, hãy dùng toán tử lớn \\coprod_{i \\in I} X_i, trông giống vậy nhưng phóng to ở kiểu hiển thị. Các lựa chọn khác cho hợp rời gồm \\sqcup và \\bigsqcup, có hình dẹt hơn và phổ biến hơn trong lý thuyết tập hợp.",
  },
  "dagger": {
    name: "Dấu thập",
    meaning: "Ký hiệu dấu thập (dao găm), chủ yếu dùng ở chỉ số trên cho toán tử liên hợp và liên hợp Hermite.",
    usage: "Cơ học lượng tử viết A^\\dagger cho liên hợp Hermite, nên a^\\dagger là toán tử sinh, và một số sách đại số tuyến tính dùng A^\\dagger cho giả nghịch đảo Moore-Penrose (A^+ là cách viết khác). Dấu thập cũng đánh dấu chú thích cuối trang hoặc mục đặc biệt trong bảng. Trong toán nó là toán tử hai ngôi, nhưng ở chỉ số trên khoảng cách không quan trọng. Trong chế độ văn bản, hãy dùng \\textdagger. Phiên bản kép \\ddagger dùng cho chú thích cấp hai và một số ký hiệu đặc biệt. Lý thuyết trường lượng tử dùng nó liên tục cho toán tử sinh và toán tử hủy.",
  },
  "double-dagger": {
    name: "Dấu thập kép",
    meaning: "Ký hiệu dấu thập kép, dùng làm dấu chú thích và đôi khi làm trang trí ở chỉ số trên.",
    usage: "\\ddagger là ký hiệu chú thích thứ hai sau \\dagger trong nhiều kiểu trình bày, đánh dấu đơn vị công tác hoặc ghi chú trong bảng. Trong toán, nó đôi khi trang trí cho toán tử, chẳng hạn trạng thái chuyển tiếp X^\\ddagger trong động học hóa học (năng lượng hoạt hóa \\Delta G^\\ddagger). Là lệnh toán, nó là toán tử hai ngôi, nhưng ở chỉ số trên khoảng cách không quan trọng. Trong chế độ văn bản, hãy dùng \\textdaggerdbl. Vì nghĩa của nó không được chuẩn hóa, hãy giải thích ở lần dùng đầu tiên. Đặt ở chỉ số trên, nó không cần dấu ngoặc nhọn: X^\\ddagger dùng được trực tiếp.",
  },
  "wreath-product": {
    name: "Tích vòng hoa",
    meaning: "Toán tử vòng hoa, viết giữa hai nhóm để chỉ tích vòng hoa.",
    usage: "Lý thuyết nhóm viết G \\wr H cho tích vòng hoa, ví dụ nhóm siêu bát diện \\mathbb{Z}_2 \\wr S_n, và các nhóm con Sylow của nhóm đối xứng là tích vòng hoa lặp. Ký hiệu là một nét lượn sóng đứng nhỏ, đặt như toán tử hai ngôi. Nó trông hơi giống dấu ngã xoay, nhưng khác với quan hệ \\sim, nó mang khoảng cách của toán tử hai ngôi. Một số tác giả viết các nhân tử theo thứ tự ngược lại, nên hãy nêu rõ nhóm nào tác động. Nhóm khối Rubik và nhóm tự đẳng cấu của cây là các ví dụ chuẩn nơi tích vòng hoa xuất hiện.",
  },
  "set-minus": {
    name: "Hiệu tập hợp",
    meaning: "Toán tử hiệu tập hợp: A \\setminus B là tập các phần tử của A không thuộc B.",
    usage: "Dùng \\setminus cho hiệu tập hợp, A \\setminus B, và cho việc loại bỏ phần tử, \\mathbb{R} \\setminus \\{0\\}. Đây là toán tử hai ngôi với khoảng cách đúng, còn \\backslash trông giống vậy nhưng là ký hiệu thường dùng cho thương như G \\backslash X (lớp kề trái). Biến thể nhỏ hơn \\smallsetminus hợp với một số phông hơn. Một số tác giả viết A - B, nhưng \\setminus tránh nhầm với phép trừ. Kết hợp với \\complement: A \\setminus B = A \\cap B^\\complement. Trong các phân số như G \\backslash X / H cho lớp kề kép, hãy giữ \\backslash cho phép lấy thương.",
  },
};

export default text;
