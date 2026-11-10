import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/computer-science/<slug>. */
const text: SymbolPageTranslations = {
  "big-o": {
    name: "Ký hiệu O lớn",
    meaning: "Cận trên tiệm cận: f(n) = O(n) nghĩa là f tăng không nhanh hơn một hằng số nhân với n khi n đủ lớn.",
    usage: "O lớn là công cụ chủ lực của phân tích thuật toán: tìm kiếm tuyến tính chạy trong O(n), sắp xếp trộn trong O(n \\log n), nhân ma trận thông thường trong O(n^3). Nói chặt chẽ, O(g) là một tập hợp hàm, nên f \\in O(g) là cách viết chính xác, dù f(n) = O(g(n)) là quy ước gần như phổ quát. Một số tác giả thích dùng chữ viết tay \\mathcal{O}(n) để phân biệt toán tử với một biến tên O; hãy chọn một cách và giữ nhất quán trong toàn bài. Hãy đặt toàn bộ chi phí thực vào trong đối số, như O(n^2 \\log n), thay vì O(n^2) \\cdot \\log n, và nhớ rằng O chỉ chặn từ phía trên, nên nó không khẳng định cận là chặt.",
  },
  "big-omega": {
    name: "Ký hiệu Omega lớn",
    meaning: "Cận dưới tiệm cận: f(n) = Omega(n) nghĩa là f tăng ít nhất nhanh bằng một hằng số nhân với n khi n đủ lớn.",
    usage: "Omega hoa dùng để phát biểu cận dưới, nổi tiếng nhất là mọi thuật toán sắp xếp dựa trên so sánh cần \\Omega(n \\log n) phép so sánh trong trường hợp xấu nhất. Nó được gõ bằng chữ Hy Lạp hoa đứng \\Omega; amsmath còn cung cấp \\varOmega cho dạng nghiêng, mà một số nhà trình bày ưa dùng cho biến nhưng trông lạ khi làm toán tử. Lưu ý lý thuyết số giải tích dùng nghĩa cũ hơn của Hardy và Littlewood, trong đó \\Omega nghĩa là cận không phải o(g), nên hãy kiểm tra nguồn tài liệu theo định nghĩa nào. Hãy kết hợp nó với O để kẹp thời gian chạy, và chuyển sang \\Theta khi hai phía khớp nhau.",
  },
  "big-theta": {
    name: "Ký hiệu Theta lớn",
    meaning: "Cận tiệm cận chặt: f(n) = Theta(n) nghĩa là f bị chặn trên và chặn dưới bởi các hằng số nhân với n.",
    usage: "Theta là khẳng định đúng khi bạn đã chứng minh được cận trên và cận dưới khớp nhau: tìm kiếm nhị phân là \\Theta(\\log n), và trường hợp giữa của định lý thợ cho \\Theta(n^{\\log_b a} \\log n). Về hình thức, f \\in \\Theta(g) khi và chỉ khi f \\in O(g) và f \\in \\Omega(g). Nhiều bài báo viết O ở chỗ cần \\Theta; người phản biện ở các hội nghị lý thuyết sẽ nhận ra, nên hãy dùng \\Theta khi tính chặt là điểm chính. Chữ hoa \\Theta mặc định là chữ đứng; đừng nhầm nó với chữ thường \\theta, thường dùng cho góc hoặc vectơ tham số, và tránh \\vartheta, một biến thể của chữ thường.",
  },
  "little-o": {
    name: "Ký hiệu o nhỏ",
    meaning: "Cận trên tiệm cận ngặt: f(n) = o(n) nghĩa là f(n)/n tiến tới 0 khi n tăng.",
    usage: "O nhỏ diễn tả rằng một hàm là không đáng kể so với hàm khác, như \\log n = o(n) hoặc n = o(n^2). Nó mạnh hơn hẳn O lớn: mọi hàm o(g) đều là O(g), nhưng n là O(n) mà không phải o(n). Các nhà giải tích dùng nó thường xuyên trong khai triển Taylor, như \\sin x = x + o(x) khi x \\to 0, nên luôn nêu rõ điểm giới hạn khi đó không phải là vô cực. Vì đây chỉ là chữ o nghiêng, không có lệnh riêng nào; hãy đảm bảo người đọc không nhầm nó với số không, và giữ chữ thường để tránh trùng với O lớn.",
  },
  "little-omega": {
    name: "Ký hiệu omega nhỏ",
    meaning: "Cận dưới tiệm cận ngặt: f(n) = omega(n) nghĩa là f(n)/n tăng không bị chặn.",
    usage: "Omega nhỏ là ảnh đối xứng của o nhỏ: f = \\omega(g) khi và chỉ khi g = o(f), nên n^2 = \\omega(n) và n \\log n = \\omega(n). Nó ít xuất hiện hơn \\Omega, chủ yếu trong chứng minh cận dưới và thuật toán ngẫu nhiên, nơi một đại lượng phải tăng nhanh hơn hẳn tuyến tính. Hãy dùng chữ Hy Lạp thường \\omega, không phải chữ Latinh w, vốn trông giống trong một số phông chữ. Lưu ý cùng ký hiệu này mang nhiều nghĩa: trong lý thuyết đồ thị \\omega(G) là kích thước của đồ thị con đầy đủ lớn nhất, còn trong lý thuyết số \\omega(n) đếm số ước nguyên tố phân biệt, nên hãy định nghĩa cách dùng của bạn khi ngữ cảnh pha trộn.",
  },
  "modulo": {
    name: "Phép toán modulo",
    meaning: "Toán tử modulo hai ngôi: in chữ 'mod' giữa hai toán hạng, như a mod n, với khoảng cách toán tử.",
    usage: "Dùng \\bmod cho phép lấy số dư bên trong một biểu thức, như 17 \\bmod 5 = 2 hoặc hàm băm h(k) = k \\bmod m. Nó in chữ đứng mod với khoảng cách vừa ở hai bên, giống một toán tử hai ngôi. Với đồng dư thức, hãy dùng \\pmod: a \\equiv b \\pmod{n} in dạng có ngoặc tròn với khoảng trắng rộng hơn phía trước. amsmath còn định nghĩa \\mod{n}, cho khoảng cách rộng hơn và không có ngoặc, và \\pod{n}, giữ ngoặc nhưng bỏ chữ mod. Gõ trực tiếp các chữ mod sẽ in nghiêng chúng như tích của các biến, nên luôn dùng một trong các lệnh này.",
  },
  "logarithm": {
    name: "Logarit",
    meaning: "In tên hàm logarit bằng chữ đứng với khoảng cách đúng trước đối số.",
    usage: "\\log là một trong các tên hàm định nghĩa sẵn của LaTeX, nên nó in chữ đứng log và chèn một khoảng trắng hẹp trước đối số, khác với gõ log, vốn in nghiêng như ba biến. Thêm cơ số bằng chỉ số dưới, như \\log_2 n cho logarit cơ số hai; trong phân tích thuật toán \\log không có chỉ số thường là cơ số 2, còn trong toán học nó thường là logarit tự nhiên, nên hãy nêu rõ quy ước. LaTeX còn định nghĩa sẵn \\lg cho logarit cơ số 2 và \\ln cho logarit tự nhiên. Khi đối số gồm nhiều hơn một ký hiệu, hãy thêm dấu ngoặc tròn, chẳng hạn \\log(n+1), và dùng \\left( \\right) cho đối số cao.",
  },
  "natural-log": {
    name: "Logarit tự nhiên",
    meaning: "In tên logarit tự nhiên, ln, bằng chữ đứng với khoảng cách toán tử.",
    usage: "\\ln là lệnh định nghĩa sẵn cho logarit cơ số e, cho ra chữ đứng ln kèm khoảng cách phù hợp, giống như \\sin hay \\exp. Nó xuất hiện trong các đẳng thức giải tích như \\frac{d}{dx}\\ln x = \\frac{1}{x}, trong lý thuyết thông tin khi entropy được đo bằng nat, và trong hàm logarit hợp lý. Nhiều nhà toán học viết \\log để chỉ logarit tự nhiên, trong khi kỹ sư và nhà khoa học máy tính dành \\ln cho cơ số e và \\log cho cơ số 10 hoặc 2, nên hãy chọn nhất quán. Với đối số là phân số, hãy bao nó bằng \\left( và \\right) để dấu ngoặc co giãn theo.",
  },
};

export default text;
