import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/brackets/<slug>. */
const text: SymbolPageTranslations = {
  "angle-bracket-left": {
    name: "Ngoặc góc trái",
    meaning: "Dấu ngoặc góc mở, dùng cho tích vô hướng, giá trị kỳ vọng và nhóm con sinh bởi phần tử.",
    usage: "Ngoặc góc trái mở đầu các ký hiệu như tích vô hướng \\langle u, v \\rangle, cặp bra và ket \\langle \\psi | \\phi \\rangle, nhóm con \\langle g \\rangle, hoặc trung bình theo thời gian \\langle x \\rangle. Đừng bao giờ dùng dấu nhỏ hơn < thay thế: đó là một quan hệ có khoảng cách rộng và hình dạng sai. Ngoặc này dùng được với \\left và \\right để tự động chỉnh cỡ, và với \\big, \\Big cùng các lệnh tương tự để chỉnh cỡ thủ công. Luôn ghép nó với \\rangle; nếu chỉ cần hiện một phía, hãy dùng \\left. hoặc \\right. làm vế đối ứng vô hình.",
  },
  "angle-bracket-right": {
    name: "Ngoặc góc phải",
    meaning: "Dấu ngoặc góc đóng, kết thúc tích vô hướng, ket, giá trị trung bình và các ký hiệu ngoặc góc khác.",
    usage: "\\rangle đóng những gì \\langle mở: \\langle f, g \\rangle trong không gian Hilbert, ket Dirac |\\psi\\rangle, và biểu diễn nhóm bằng phần tử sinh và hệ thức như \\langle a, b \\mid a^2 = b^3 \\rangle. Dấu lớn hơn > không thể thay thế, vì nó là một quan hệ có thêm khoảng trắng xung quanh và góc dẹt hơn. Khi nội dung cao, như có phân số hoặc tổng, hãy dùng \\left\\langle ... \\right\\rangle để hai bên cùng giãn. Một ket đứng riêng được viết |\\psi\\rangle, không cần \\langle tương ứng.",
  },
  "angle-brackets": {
    name: "Cặp ngoặc góc",
    meaning: "Bao một biểu thức trong cặp ngoặc góc, dùng cho giá trị trung bình, tích vô hướng hoặc bao tuyến tính của các phần tử sinh.",
    usage: "Cặp ngoặc này được dùng cho giá trị kỳ vọng trong vật lý, \\langle E \\rangle, cho tích vô hướng \\langle x, y \\rangle, và cho nhóm con hay iđêan sinh bởi các phần tử, \\langle a \\rangle. Với đối số cao, hãy chuyển sang \\left\\langle \\frac{a}{b} \\right\\rangle. Nếu thường xuyên viết tích vô hướng, hãy định nghĩa một macro, chẳng hạn bằng công cụ tạo cặp dấu phân cách, để kích thước luôn nhất quán. Với ký hiệu Dirac, nhiều người chọn một bộ macro chuyên dụng vì khoảng cách quanh gạch đứng bên trong \\langle \\phi | \\psi \\rangle có thể không đều; \\mid thêm khoảng cách quan hệ, còn | thì không thêm gì.",
  },
  "ceiling-left": {
    name: "Ngoặc trần trái",
    meaning: "Ngoặc trần bên trái, nửa mở đầu của ký hiệu hàm trần, làm tròn lên thành số nguyên.",
    usage: "\\lceil mở đầu ký hiệu hàm trần \\lceil x \\rceil, số nguyên nhỏ nhất không nhỏ hơn x. Đây là một dấu phân cách, nên dùng được với \\left\\lceil ... \\right\\rceil cho nội dung cao như \\frac{n}{2}, và với các lệnh chỉnh cỡ kiểu \\big. Ngoặc trần có nét ngang ở trên, còn ngoặc sàn \\lfloor có nét ngang ở dưới, một cặp dễ bị nhầm khi soát bản in. Một số tác giả cũng dùng \\lceil và \\rceil làm dấu ngoặc góc cho phép đánh số Gödel, trong đó \\ulcorner là một lựa chọn thay thế.",
  },
  "ceiling-right": {
    name: "Ngoặc trần phải",
    meaning: "Ngoặc trần bên phải, đóng ký hiệu hàm trần dùng để làm tròn lên.",
    usage: "Ghép \\rceil với \\lceil để viết \\lceil \\log_2 n \\rceil, số bit cần thiết trong nhiều thuật toán, hoặc \\lceil n/k \\rceil cho số khối kích thước k cần để chứa n phần tử. Khác với dấu ngoặc tròn, ngoặc trần không có ký tự ASCII tương đương, nên lệnh này là cách duy nhất để có ký hiệu. Hãy dùng \\right\\rceil khi ngoặc trái tương ứng được đặt bằng \\left. Nếu thường viết hàm trần, một macro cặp dấu phân cách như \\ceil{x} giúp giữ kích thước nhất quán trong toàn tài liệu.",
  },
  "ceiling": {
    name: "Hàm trần",
    meaning: "Làm tròn x lên thành số nguyên nhỏ nhất lớn hơn hoặc bằng x: hàm trần.",
    usage: "Hàm trần xuất hiện trong phân tích thuật toán (\\lceil \\log_2 n \\rceil phép so sánh, \\lceil n/2 \\rceil trong sắp xếp trộn), trong lý thuyết số, và trong các bài toán đếm như nguyên lý Dirichlet, khi có một hộp chứa ít nhất \\lceil n/k \\rceil vật. Với số âm, hãy nhớ rằng \\lceil -2.5 \\rceil = -2. Khi đối số là phân số hoặc biểu thức cao, hãy dùng \\left\\lceil ... \\right\\rceil để ngoặc giãn theo. Đừng thay bằng ngoặc vuông [x]: các sách cũ dùng [x] cho phần nguyên (hàm sàn), nên ký hiệu này dễ gây nhầm lẫn.",
  },
  "floor-left": {
    name: "Ngoặc sàn trái",
    meaning: "Ngoặc sàn bên trái, nửa mở đầu của ký hiệu hàm sàn, làm tròn xuống thành số nguyên.",
    usage: "\\lfloor mở đầu các ký hiệu như \\lfloor x \\rfloor và \\lfloor n/2 \\rfloor. Ngoặc sàn có nét ngang ở dưới, trái với \\lceil có nét ngang ở trên. Là một dấu phân cách, nó có thể chỉnh cỡ bằng \\left\\lfloor hoặc \\bigl\\lfloor. Trong lý thuyết số, cùng loại ngoặc này xuất hiện trong các công thức như công thức Legendre cho số mũ của một số nguyên tố trong phân tích n!. Nếu phông chữ hoặc trình hiển thị chỉ cho ra ngoặc vuông thường, hãy kiểm tra xem bạn đã gõ \\lfloor chứ không phải [, vốn là một ký tự khác.",
  },
  "floor-right": {
    name: "Ngoặc sàn phải",
    meaning: "Ngoặc sàn bên phải, đóng ký hiệu hàm sàn dùng để làm tròn xuống.",
    usage: "Đóng mọi \\lfloor bằng \\rfloor, ví dụ trong \\lfloor x \\rfloor hoặc phép chia nguyên \\lfloor a/b \\rfloor mà nhiều ngôn ngữ lập trình cài đặt cho toán hạng dương. Khi ngoặc trái được đặt bằng \\left\\lfloor, ngoặc phải phải là \\right\\rfloor trong cùng nhóm toán học, nếu không LaTeX sẽ báo thiếu \\right. Cặp ngoặc này cũng dùng để làm tròn đến số nguyên gần nhất qua \\lfloor x + 1/2 \\rfloor. Một macro cặp dấu phân cách như \\floor{x} giúp ký hiệu nhất quán trong tài liệu dài.",
  },
  "floor": {
    name: "Hàm sàn",
    meaning: "Làm tròn x xuống thành số nguyên lớn nhất nhỏ hơn hoặc bằng x: hàm sàn.",
    usage: "Hàm sàn xuất hiện trong phép chia nguyên, trong phần lẻ \\{x\\} = x - \\lfloor x \\rfloor, trong điểm giữa của tìm kiếm nhị phân \\lfloor (lo + hi)/2 \\rfloor, và trong các tổng của lý thuyết số như công thức Legendre. Với số âm, nó làm tròn ra xa số không: \\lfloor -2.5 \\rfloor = -3, khác với phép cắt bỏ phần thập phân. Tài liệu cũ viết [x] cho hàm sàn (ngoặc Gauss), nhưng ký hiệu ngoặc sàn ngày nay được ưa chuộng hơn vì không gây nhầm lẫn. Hãy dùng \\left\\lfloor ... \\right\\rfloor quanh phân số để ngoặc khớp với chiều cao nội dung.",
  },
  "double-vertical-bar": {
    name: "Gạch đứng kép",
    meaning: "Gạch đứng kép, dấu phân cách cho chuẩn và ký hiệu song song trong một số ngữ cảnh.",
    usage: "\\| in ra hai vạch đứng và chủ yếu được dùng theo cặp cho chuẩn, \\|x\\|. Là một ký hiệu đơn lẻ, nó có khoảng cách của nguyên tố thường, nên khi muốn nói quan hệ song song, hãy dùng \\parallel, vốn thêm khoảng cách quan hệ. Với chuẩn, nên dùng \\lVert và \\rVert, vì chúng cho LaTeX biết bên nào mở và bên nào đóng, cho khoảng cách đúng cạnh các toán tử và dấu trừ. Có thể chỉnh cỡ bằng \\left\\| ... \\right\\| hoặc \\big\\|. Trong chế độ văn bản, \\| không cho ra hai vạch; hãy dùng \\textbardbl hoặc chuyển sang chế độ toán.",
  },
  "norm": {
    name: "Chuẩn",
    meaning: "Bao một vectơ hoặc hàm số trong hai gạch đứng kép để ký hiệu chuẩn của nó, tức độ dài hay độ lớn.",
    usage: "Chuẩn có mặt khắp nơi trong giải tích và đại số tuyến tính: chuẩn Euclid \\|x\\|_2, chuẩn vô cùng \\|f\\|_\\infty, chuẩn Frobenius \\|A\\|_F, và bất đẳng thức tam giác \\|x + y\\| \\le \\|x\\| + \\|y\\|. Chỉ số dưới sau vạch đóng cho biết đó là chuẩn nào. Viết \\lVert x \\rVert thay cho \\| x \\| cho khoảng cách tốt hơn trong các biểu thức như \\|{-x}\\|, vì khi đó LaTeX biết vai trò của từng vạch. Với nội dung cao, như phân số bên trong chuẩn, hãy dùng \\left\\| ... \\right\\|. Gạch đứng đơn |x| được dành cho giá trị tuyệt đối.",
  },
  "double-bracket-left": {
    name: "Ngoặc vuông kép trái",
    meaning: "Ngoặc vuông kép (rỗng) bên trái, dùng cho ngoặc ngữ nghĩa, khoảng số nguyên và ký hiệu Iverson.",
    usage: "Trong ngữ nghĩa ngôn ngữ lập trình, \\llbracket e \\rrbracket ký hiệu nghĩa của một biểu thức, như trong ngữ nghĩa biểu thị. Các sách theo truyền thống Pháp và tổ hợp viết \\llbracket 1, n \\rrbracket cho khoảng số nguyên \\{1, \\dots, n\\}, và một số tác giả dùng nó cho ngoặc Iverson. Lệnh này không có trong LaTeX lõi hay các phông ký hiệu AMS, nên cần một gói ký hiệu cung cấp nó; KaTeX hỗ trợ trực tiếp. Nó chỉ giãn được với các gói cung cấp phiên bản co giãn, nên với nội dung cao hãy kiểm tra cấu hình của bạn. Ghép nó với \\rrbracket.",
  },
  "double-bracket-right": {
    name: "Ngoặc vuông kép phải",
    meaning: "Ngoặc vuông kép bên phải, đóng ký hiệu ngoặc ngữ nghĩa hoặc khoảng số nguyên.",
    usage: "Đóng \\llbracket bằng \\rrbracket để viết \\llbracket P \\rrbracket_\\sigma, nghĩa của chương trình P ở trạng thái \\sigma, hoặc đoạn số nguyên \\llbracket a, b \\rrbracket. Đừng giả lập bằng ]] hoặc ]\\!], vì chúng cho hình dạng và khoảng cách khác với ký tự ngoặc rỗng. Các tác giả dùng nhiều ngoặc ngữ nghĩa thường định nghĩa một macro như \\sem{e} để có thể đổi kiểu ngoặc ở một chỗ, chẳng hạn chuyển sang [\\![ e ]\\!] nếu không có phông ngoặc kép.",
  },
  "double-brackets": {
    name: "Cặp ngoặc vuông kép",
    meaning: "Bao một biểu thức trong cặp ngoặc vuông kép, dùng cho ngữ nghĩa biểu thị hoặc khoảng số nguyên.",
    usage: "Cặp ngoặc này biểu diễn hàm ngữ nghĩa trong ngữ nghĩa hình thức, \\llbracket x \\rrbracket_\\rho cho giá trị của x trong môi trường \\rho, và đoạn rời rạc \\llbracket m, n \\rrbracket trong tổ hợp. Nó cũng xuất hiện trong ngoặc Iverson và trong ký hiệu bước nhảy cho các điểm gián đoạn trong giải số phương trình đạo hàm riêng, \\llbracket u \\rrbracket = u^+ - u^-. Vì ký tự này không có trong phông mặc định, mã nguồn cần một gói ký hiệu; hãy xem ghi chú về gói trên trang này. Các nét rỗng giúp nó dễ phân biệt với các ngoặc thường lồng nhau.",
  },
  "parentheses": {
    name: "Ngoặc tròn co giãn",
    meaning: "Dấu ngoặc tròn tự động giãn theo chiều cao của nội dung bên trong.",
    usage: "\\left( và \\right) đo nội dung và chọn kích thước phù hợp, nên \\left( \\frac{a}{b} \\right)^2 có ngoặc cao, còn (x) thường vẫn nhỏ. Mỗi \\left cần một \\right trong cùng nhóm, và một lần ngắt dòng trong align không thể tách chúng. Lạm dụng chúng khiến biểu thức đơn giản trông nặng nề, và \\left...\\right thêm một chút khoảng trắng như một nguyên tố bên trong, có thể làm f\\left(x\\right) trông lỏng lẻo; với đối số hàm số, \\bigl( ... \\bigr) hoặc ngoặc thường thường tốt hơn. Chúng giãn theo phần tử cao nhất, kể cả cận của tổng.",
  },
  "square-brackets": {
    name: "Ngoặc vuông co giãn",
    meaning: "Dấu ngoặc vuông giãn vừa với nội dung, dùng để nhóm, cho hoán tử hoặc đoạn.",
    usage: "Ngoặc vuông là cấp nhóm tiếp theo bên ngoài ngoặc tròn, ký hiệu đoạn [a, b], hoán tử [A, B] = AB - BA, kỳ vọng \\mathbb{E}[X], và ma trận. Với \\left[ ... \\right], ngoặc giãn quanh phân số, tích phân hoặc ma trận, như trong \\left[ \\frac{x^2}{2} \\right]_0^1 khi thế cận nguyên hàm. Bên trong môi trường bmatrix, ngoặc đã có sẵn nên bạn không cần tự viết \\left[. Với ngoặc lồng nhau trong biểu thức dài, các kích thước thủ công như \\Bigl[ ... \\Bigr] cho khả năng kiểm soát tinh hơn.",
  },
  "curly-braces": {
    name: "Ngoặc nhọn co giãn",
    meaning: "Dấu ngoặc nhọn giãn theo chiều cao nội dung, dùng để mô tả tập hợp bằng tính chất đặc trưng và cho các định nghĩa nhóm lại.",
    usage: "Ngoặc nhọn phải được thoát thành \\{ và \\} vì ngoặc nhọn trần là ký tự nhóm của LaTeX và không in ra gì. Với \\left\\{ ... \\right\\}, chúng giãn quanh nội dung cao như \\left\\{ \\frac{p}{q} : q \\neq 0 \\right\\}. Để gạch đứng phân cách trong cách viết tập hợp cũng giãn theo, hãy dùng \\middle| ở giữa. Với định nghĩa hàm từng khúc, môi trường cases đã vẽ sẵn ngoặc nhọn bên trái, nên không cần tự viết \\left\\{ ... \\right. bằng tay. Trong chế độ văn bản, hãy dùng \\textbraceleft hoặc đơn giản là \\{ bên trong chế độ toán.",
  },
  "vertical-bar": {
    name: "Gạch đứng co giãn",
    meaning: "Gạch đứng tự chỉnh cỡ theo nội dung, dùng cho giá trị tuyệt đối và định thức.",
    usage: "Dùng \\left| ... \\right| khi giá trị tuyệt đối chứa phân số hoặc tổng, như trong \\left| \\frac{a}{b} \\right|, và cho định thức của ma trận cao (dù vmatrix đơn giản hơn). Ký tự | thường gây mơ hồ cho LaTeX: nó không phân biệt được vạch mở với vạch đóng, có thể làm hỏng khoảng cách quanh dấu trừ đứng đầu. Để có kết quả nhất quán, hãy định nghĩa một macro với \\lvert và \\rvert, hoặc dùng \\left\\lvert ... \\right\\rvert. Với dấu phân cách trong cách viết tập hợp và xác suất có điều kiện, hãy dùng \\mid hoặc \\middle|.",
  },
  "big-parentheses": {
    name: "Ngoặc tròn cỡ lớn",
    meaning: "Dấu ngoặc tròn cố định ở bậc kích thước thứ hai, lớn hơn \\big nhưng nhỏ hơn \\bigg.",
    usage: "TeX cung cấp bốn kích thước thủ công: \\big, \\Big, \\bigg và \\Bigg. \\Big( vừa quanh một phân số đơn hoặc tổng có cận nhỏ, và khác với \\left, nó không quét nội dung, nên có thể trải qua các lần ngắt dòng trong môi trường nhiều dòng và cho kết quả dễ đoán. Để có khoảng cách đúng, hãy dùng \\Bigl( để mở và \\Bigr) để đóng, vì \\Big trần tạo ra một nguyên tố thường. Kích thước thủ công thường tốt hơn \\left...\\right bên trong đối số hàm, nơi \\left thêm khoảng trắng thừa. Kích thước là cố định, nên chúng không thu nhỏ trong chỉ số dưới.",
  },
  "bigg-parentheses": {
    name: "Ngoặc tròn cỡ rất lớn",
    meaning: "Kích thước lớn nhất trong bốn cỡ dấu phân cách thủ công của TeX, dành cho nội dung rất cao như phân số lồng nhau.",
    usage: "\\Bigg( tạo ngoặc tròn lớn khoảng hai lần rưỡi cỡ thường, phù hợp quanh các phân số chồng tầng, tích phân lớn có cận, hoặc tổng các phân số. Vì kích thước cố định, nó cho kết quả dễ đoán qua các dòng của align, nơi \\left và \\right không thể bị tách ra. Dùng \\Biggl và \\Biggr để có khoảng cách mở và đóng đúng. Nếu nội dung còn cao hơn nữa, \\left( ... \\right) có thể giãn vượt quá \\Bigg nhờ các mảnh ghép co giãn. Thứ tự từ nhỏ đến lớn là \\big, \\Big, \\bigg, \\Bigg.",
  },
  "left-delimiter-with-invisible-right": {
    name: "Dấu ngoặc trái với ngoặc phải ẩn",
    meaning: "Chỉ hiện một ngoặc tròn trái co giãn; \\right. là dấu phân cách đóng vô hình để thỏa điều kiện ghép cặp.",
    usage: "Mỗi \\left phải được ghép với một \\right, và dạng có dấu chấm \\right. cho phép đóng nhóm mà không in ra gì. Điều này hữu ích khi một biểu thức trong ngoặc tiếp tục sang dòng khác của align (mở bằng \\left( ở một dòng, đóng bằng \\right. rồi bắt đầu lại bằng \\left. ... \\right) ở dòng sau), hoặc cho các ngoặc nhọn một phía. Kích thước hai nửa được tính độc lập, nên hãy thêm \\vphantom của nội dung cao để giữ chúng bằng nhau. Với hàm từng khúc, môi trường cases là lựa chọn gọn gàng hơn so với \\left\\{ ... \\right.",
  },
  "right-delimiter-with-invisible-left": {
    name: "Dấu ngoặc phải với ngoặc trái ẩn",
    meaning: "Chỉ in một ngoặc tròn đóng co giãn; \\left. đóng vai trò vế mở vô hình.",
    usage: "\\left. là vế mở vô hình cho phép \\right) tự chỉnh cỡ theo nội dung. Một ứng dụng thường gặp là gạch thế giá trị \\left. \\frac{df}{dx} \\right|_{x=0}, khi chỉ vạch đứng bên phải cần hiện ra và giãn theo. Nó cũng dùng để kết thúc một ngoặc đã mở ở dòng trước của phương trình nhiều dòng. Vì mỗi nửa được chỉnh cỡ riêng, hãy chèn \\vphantom{...} với phần cao nhất từ dòng kia để khớp chiều cao. Bản thân dấu chấm không được in ra, nhưng nó vẫn thêm khoảng trắng nhỏ của dấu phân cách rỗng.",
  },
  "half-open-interval-brackets": {
    name: "Cặp ngoặc nửa khoảng",
    meaning: "Ghép một ngoặc vuông trái với một ngoặc tròn phải, ký hiệu cho nửa khoảng.",
    usage: "\\left và \\right không cần cùng hình dạng, nên \\left[ ... \\right) viết nửa khoảng [a, b), đóng tại a và mở tại b, thường gặp trong xác suất (hàm phân phối tích lũy liên tục phải trên [x, \\infty)) và trong lý thuyết độ đo. Các cặp không cùng dạng cũng xử lý được (a, b], viết là \\left( ... \\right]. Với khoảng đơn giản, viết [0, 1) không cần \\left/\\right là đủ và gọn hơn. Một số sách châu Âu dùng ngoặc ngược thay thế, như [a, b[, có thể gõ trực tiếp.",
  },
};

export default text;
