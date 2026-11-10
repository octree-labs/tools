import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/number-theory/<slug>. */
const text: SymbolPageTranslations = {
  "does-not-divide": {
    name: "Quan hệ không chia hết",
    meaning: "Thanh dọc bị gạch chéo, khẳng định một số nguyên không chia hết một số nguyên khác.",
    usage: "Các nhà số học viết 3 \\nmid 10 và dùng nó trong các giả thiết như định lý Fermat nhỏ: nếu p \\nmid a thì a^{p-1} \\equiv 1 \\pmod p. Nó là phủ định của \\mid và có cùng khoảng cách quan hệ; \\not\\mid tạo ra dấu gạch thường đặt không đẹp, nên hãy ưu tiên \\nmid. Tránh dùng thanh | thường kèm dấu gạch tự gõ. Trong khoa học máy tính, nó xuất hiện trong các điều kiện về bước nhảy, chu kỳ và kích thước bảng băm, như k \\nmid n. Các phủ định dựng sẵn liên quan gồm \\nparallel và \\nleq.",
  },
  "gcd": {
    name: "Ước chung lớn nhất",
    meaning: "Ước chung lớn nhất của a và b, số nguyên lớn nhất chia hết cả hai.",
    usage: "\\gcd là toán tử được định nghĩa sẵn, nên nó in chữ đứng, và giống như \\lim, nó nhận cận đặt bên dưới ở chế độ hiển thị. Đẳng thức Bézout nói rằng \\gcd(a, b) = ax + by với các số nguyên x và y nào đó, và a và b nguyên tố cùng nhau khi \\gcd(a, b) = 1. Nhiều bài báo số học bỏ tên hàm và viết (a, b), gọn nhưng trùng với cặp có thứ tự và khoảng mở. Thuật toán Euclid dựa trên \\gcd(a, b) = \\gcd(b, a \\bmod b), trong đó \\bmod cho khoảng cách toán tử hai ngôi. Không có lệnh dựng sẵn tương ứng cho bội chung nhỏ nhất.",
  },
  "lcm": {
    name: "Bội chung nhỏ nhất",
    meaning: "Bội chung nhỏ nhất của a và b, số nguyên dương nhỏ nhất chia hết cho cả hai.",
    usage: "Khác với \\gcd, không có lệnh \\lcm dựng sẵn, đó là lý do mục này dùng \\text. Một dòng \\DeclareMathOperator{\\lcm}{lcm} trong phần mở đầu cho một toán tử đúng nghĩa với khoảng cách tương ứng, hoặc dùng \\operatorname{lcm} trực tiếp. Đẳng thức \\gcd(a, b)\\cdot\\text{lcm}(a, b) = |ab| liên kết hai khái niệm. Bội chung nhỏ nhất xuất hiện khi cộng các phân số khác mẫu, trong chu kỳ của các vòng lặp kết hợp, và trong cấp của một phần tử trong nhóm tích. Một số sách viết [a, b] cho BCNN, tương ứng với (a, b) cho ƯCLN.",
  },
  "modulo": {
    name: "Đồng dư theo môđun",
    meaning: "Cụm 'mod n' trong ngoặc đơn đặt sau một đồng dư thức, cho biết môđun.",
    usage: "Viết a \\equiv b \\pmod{n} để phát biểu rằng n chia hết a - b. \\pmod thêm dấu ngoặc đơn và khoảng trắng rộng phía trước, phù hợp với các đồng dư thức hiển thị. Các lệnh anh em phục vụ những trường hợp khác: \\bmod là toán tử hai ngôi cho phép lấy dư, như trong a \\bmod n = r; \\mod cho chữ mod không có ngoặc; và \\pod chỉ cho dấu ngoặc. Trong văn bản nội dòng, khoảng trắng lớn mà \\pmod chèn vào có thể trông quá mức, nên một số tác giả chuyển sang \\bmod hoặc một macro riêng. Các phát biểu của định lý số dư Trung Hoa nối nhiều đồng dư thức với các môđun khác nhau.",
  },
  "euler-phi": {
    name: "Phi hàm Euler",
    meaning: "Phi hàm Euler: số các số nguyên từ 1 đến n nguyên tố cùng nhau với n, dùng chữ phi cong.",
    usage: "Định lý Euler a^{\\varphi(n)} \\equiv 1 \\pmod n với \\gcd(a, n) = 1 và công thức tích \\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p) là những chỗ xuất hiện điển hình. \\varphi cho dạng mở có vòng, còn \\phi cho dạng có nét thẳng xuyên qua một vòng tròn; cả hai cùng chỉ một hàm, và lựa chọn là theo quy cách trình bày. Nhiều sách số học chọn \\varphi để \\phi dành cho việc khác, như tỉ lệ vàng hay một góc. Việc sinh khóa RSA dùng \\varphi(pq) = (p-1)(q-1).",
  },
  "phi-function": {
    name: "Hàm phi",
    meaning: "Phi hàm Euler viết bằng chữ phi có nét thẳng thay vì biến thể cong.",
    usage: "Nhiều giáo trình viết phi hàm Euler là \\phi(n), chẳng hạn \\phi(p) = p - 1 với số nguyên tố p và \\phi(p^k) = p^k - p^{k-1}. Trong phông Computer Modern mặc định, \\phi là một vòng tròn có nét dọc cắt qua, còn \\varphi là dạng có vòng. Cả hai cùng chỉ một hàm, nên hãy chọn một và giữ nhất quán. Nếu tỉ lệ vàng, một góc hay một thế năng cũng xuất hiện, hãy dành \\phi cho một nghĩa và \\varphi cho nghĩa kia. Tính nhân, \\phi(mn) = \\phi(m)\\phi(n) với m và n nguyên tố cùng nhau, là một công thức hiển thị thường gặp.",
  },
  "prime": {
    name: "Số nguyên tố",
    meaning: "Chữ p thường in nghiêng, chữ cái quy ước cho một số nguyên tố trong số học.",
    usage: "Theo quy ước, p, và q cho số nguyên tố thứ hai, biểu thị các số nguyên tố, nên những phát biểu như 'với mọi số nguyên tố p' hay các tổng và tích đánh chỉ số theo p hầu như không cần giải thích thêm. Tích Euler \\zeta(s) = \\prod_p (1 - p^{-s})^{-1} là trường hợp kinh điển, trong đó chỉ số ngầm chạy qua các số nguyên tố. Gõ p trong chế độ toán cho chữ nghiêng; hãy giữ nó trong chế độ toán cả khi ở trong văn bản để khớp với công thức hiển thị. Để tránh nhầm với xác suất hay giá trị p, hãy nêu quy ước sớm. Lũy thừa của số nguyên tố được viết là p^k, và các số p-adic là \\mathbb{Q}_p.",
  },
  "prime-notation": {
    name: "Số nguyên tố thứ n",
    meaning: "p_n có chỉ số dưới chỉ số nguyên tố thứ n, nên p_1 = 2, p_2 = 3, p_3 = 5.",
    usage: "Dãy các số nguyên tố được đánh chỉ số theo cách này trong các kết quả như chứng minh của Euclid, nơi p_1 p_2 \\cdots p_n + 1 có một ước nguyên tố nằm ngoài danh sách, và trong tiệm cận p_n \\sim n\\ln n từ định lý số nguyên tố. Chỉ số dưới nhiều ký tự cần dấu ngoặc nhọn, p_{n+1}, nếu không chỉ chữ n bị hạ xuống. Định đề Bertrand trở thành p_{n+1} < 2p_n. Giai thừa nguyên tố, tích của n số nguyên tố đầu tiên, thường được viết là p_n\\#. Hàm đếm số nguyên tố \\pi(x) về cơ bản là nghịch đảo của n \\mapsto p_n.",
  },
  "legendre-symbol": {
    name: "Ký hiệu Legendre",
    meaning: "Ký hiệu Legendre (a/p): bằng 1, -1 hoặc 0 tùy theo a có phải là thặng dư bậc hai theo môđun p hay không.",
    usage: "Với số nguyên tố lẻ p, \\left(\\frac{a}{p}\\right) bằng 1 nếu a là một số chính phương khác không theo môđun p, bằng -1 nếu không phải, và bằng 0 nếu p \\mid a. Luật thuận nghịch bậc hai là đẳng thức nổi tiếng liên hệ \\left(\\frac{p}{q}\\right) và \\left(\\frac{q}{p}\\right) qua dấu (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}. \\left( \\right) tự động co giãn dấu ngoặc theo phân số. Đừng dùng \\binom, vì nó bỏ mất gạch phân số mà ký hiệu này cần; \\genfrac{(}{)}{}{}{a}{p} là một lựa chọn tương đương. Tiêu chuẩn Euler tính nó bằng a^{(p-1)/2} theo môđun p.",
  },
  "integer-part": {
    name: "Phần nguyên",
    meaning: "Cặp ngoặc vuông bao quanh x, ký hiệu cũ cho phần nguyên hay hàm sàn của x.",
    usage: "Số học cổ điển và nhiều tài liệu thi Olympic viết [x] cho số nguyên lớn nhất không vượt quá x, như trong công thức Legendre cho số mũ của p trong n!, lấy tổng [n/p^k] theo k \\ge 1. Cách viết hiện đại ưu tiên \\lfloor x \\rfloor, không gây mơ hồ, vì ngoặc vuông còn dùng để nhóm biểu thức, ký hiệu khoảng đóng và làm ngoặc Iverson. Nếu bạn giữ [x], hãy định nghĩa nó rõ ràng. Với số âm, hàm sàn và phép cắt cụt khác nhau: \\lfloor -2.5 \\rfloor = -3, trong khi cắt cụt về phía không cho -2.",
  },
  "fractional-part": {
    name: "Phần lẻ",
    meaning: "Phần lẻ của x, định nghĩa là x trừ đi phần nguyên của nó, viết bằng dấu ngoặc nhọn có thoát ký tự.",
    usage: "Vì dấu ngoặc nhọn trần trong LaTeX chỉ dùng để nhóm, các dấu ngoặc hiển thị phải được thoát thành \\{ và \\}. Phần lẻ thỏa mãn x = \\lfloor x \\rfloor + \\{x\\} với 0 \\le \\{x\\} < 1, và xuất hiện trong các kết quả về phân bố đều như định lý Weyl rằng \\{n\\alpha\\} phân bố đều với \\alpha vô tỉ. Cùng cặp ngoặc này còn ký hiệu tập hợp, nên \\{x\\} có thể bị đọc thành tập một phần tử chứa x; hãy định nghĩa ký hiệu hoặc viết \\operatorname{frac}(x). Với nội dung cao hơn, dùng \\left\\{ ... \\right\\}.",
  },
  "sum-of-divisors": {
    name: "Tổng các ước",
    meaning: "Hàm tổng các ước: tổng của tất cả các ước dương của n.",
    usage: "\\sigma(n) = \\sum_{d \\mid n} d, nên \\sigma(6) = 1 + 2 + 3 + 6 = 12. Một số là số hoàn hảo khi và chỉ khi \\sigma(n) = 2n, và dạng tổng quát \\sigma_k(n) = \\sum_{d \\mid n} d^k bao gồm cả hàm đếm ước dưới dạng \\sigma_0. Hàm này có tính nhân, với \\sigma(p^k) = \\frac{p^{k+1}-1}{p-1} cho lũy thừa của số nguyên tố, nên có thể tính nó từ phân tích thừa số. Chữ thường \\sigma còn có nghĩa là độ lệch chuẩn, nên một ghi chú ngắn sẽ hữu ích trong các công trình liên ngành. Chữ hoa \\Sigma không liên quan ở đây.",
  },
  "mobius-function": {
    name: "Hàm Möbius",
    meaning: "Hàm Möbius: bằng 0 nếu bình phương của một số nguyên tố chia hết n, ngược lại bằng (-1)^k với k là số ước nguyên tố.",
    usage: "Vai trò chính của nó là phép nghịch đảo Möbius: nếu g(n) = \\sum_{d \\mid n} f(d) thì f(n) = \\sum_{d \\mid n} \\mu(d)\\, g(n/d). Nó cũng thỏa mãn \\sum_{d \\mid n} \\mu(d) = 0 với n > 1, và chuỗi Dirichlet của nó là nghịch đảo của hàm zeta, \\frac{1}{\\zeta(s)} = \\sum_{n \\ge 1} \\frac{\\mu(n)}{n^s}. Chữ \\mu bị dùng chồng rất nhiều, chỉ giá trị trung bình trong thống kê và độ đo trong giải tích, nên hãy giới thiệu nó rõ ràng. Trong chế độ toán, dùng chữ Hy Lạp \\mu, đừng bao giờ dùng chữ u Latinh trông giống thay thế.",
  },
  "number-of-divisors": {
    name: "Số các ước",
    meaning: "Hàm đếm ước: số lượng ước dương của n.",
    usage: "d(n) = \\sum_{d \\mid n} 1, nên d(12) = 6. Với n = p_1^{a_1}\\cdots p_k^{a_k}, công thức d(n) = (a_1+1)\\cdots(a_k+1) cho thấy nó có tính nhân. Các tên gọi phổ biến khác là \\tau(n) và \\sigma_0(n), nên hãy kiểm tra tài liệu tham khảo của bạn dùng tên nào. Bài toán ước của Dirichlet nghiên cứu cấp trung bình, \\sum_{n \\le x} d(n) = x\\ln x + (2\\gamma - 1)x + O(\\sqrt{x}). Hãy cẩn thận: chữ d cũng là biến ước thông dụng bên trong các tổng như vậy, nên hãy ưu tiên \\tau(n) khi cả hai cùng xuất hiện trong một công thức.",
  },
};

export default text;
