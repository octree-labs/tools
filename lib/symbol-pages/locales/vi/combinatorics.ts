import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/combinatorics/<slug>. */
const text: SymbolPageTranslations = {
  "combination-ncr": {
    name: "Tổ hợp chập k của n",
    meaning: "Số cách chọn k phần tử từ n phần tử mà không kể thứ tự, đọc là tổ hợp chập k của n.",
    usage: "Giá trị của nó là C(n, k) = \\frac{n!}{k!(n-k)!}, trùng với hệ số nhị thức \\binom{n}{k}, ký hiệu được ưa dùng trong phần lớn tài liệu toán học. \\binom tự điều chỉnh kích thước theo ngữ cảnh; \\dbinom buộc cỡ hiển thị còn \\tbinom buộc cỡ trong dòng. Tránh cú pháp TeX thuần {n \\choose k} trong LaTeX, vì amsmath cảnh báo không nên dùng nó. Các ký hiệu khác gồm nCr, {}^nC_k và C^k_n; ký hiệu cuối phổ biến trong sách Pháp và sách giáo khoa Việt Nam với hai chỉ số đổi chỗ, nên hãy kiểm tra quy ước. Quy tắc Pascal, C(n, k) = C(n-1, k-1) + C(n-1, k), sinh ra tam giác Pascal.",
  },
  "permutation-npr": {
    name: "Chỉnh hợp chập k của n",
    meaning: "Số cách sắp xếp có thứ tự k phần tử được chọn từ n phần tử phân biệt, đọc là chỉnh hợp chập k của n.",
    usage: "Chỉnh hợp đếm các cách chọn có thứ tự: P(n, k) = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1), nên P(5, 2) = 20. Nó bằng giai thừa giảm (n)_k hay n^{\\underline{k}}, và liên hệ với tổ hợp qua P(n, k) = k!\\,C(n, k). Các ký hiệu thay thế thường gặp gồm nPr, {}^nP_k và A^k_n, ký hiệu cuối dùng trong sách Pháp, Trung Quốc và sách giáo khoa Việt Nam. Vì P(\\cdot) cũng ký hiệu xác suất, người đọc có thể hiểu nhầm P(n, k) trong một chương về xác suất; chuyển sang (n)_k hoặc n^{\\underline{k}} sẽ tránh được điều đó. Dùng \\cdots giữa các thừa số trong một tích.",
  },
  "multinomial": {
    name: "Hệ số đa thức",
    meaning: "Hệ số đa thức: số cách chia n phần tử thành các nhóm có kích thước từ k_1 đến k_m, trong đó tổng các kích thước bằng n.",
    usage: "Giá trị của nó là n! / (k_1!\\,k_2!\\cdots k_m!), với k_1 + \\cdots + k_m = n, và nó cho các hệ số trong định lý đa thức, (x_1 + \\cdots + x_m)^n = \\sum \\binom{n}{k_1, \\ldots, k_m} x_1^{k_1}\\cdots x_m^{k_m}. Nó đếm số cách sắp xếp khác nhau các chữ cái của một từ có chữ cái lặp lại, chẳng hạn 11!/(4!\\,4!\\,2!\\,1!) với từ MISSISSIPPI. Cấu trúc này dùng lại \\binom với một danh sách phân cách bằng dấu phẩy ở vị trí dưới; hệ số nhị thức \\binom{n}{k} là trường hợp riêng \\binom{n}{k, n-k}. Dùng \\ldots giữa các dấu phẩy, không dùng \\cdots.",
  },
  "falling-factorial": {
    name: "Giai thừa giảm",
    meaning: "Giai thừa giảm theo ký hiệu tổ hợp: n(n-1)...(n-k+1), tích của k thừa số giảm dần.",
    usage: "(n)_k đếm số đơn ánh từ một tập k phần tử vào một tập n phần tử và bằng n!/(n-k)! với n, k nguyên. Lưu ý: ký hiệu kiểu Pochhammer này có tính nhập nhằng, vì trong lý thuyết hàm đặc biệt (a)_n lại là giai thừa tăng. Ký hiệu của Knuth, n^{\\underline{k}} cho giai thừa giảm và n^{\\overline{k}} cho giai thừa tăng, loại bỏ sự nhập nhằng và được dùng trong cuốn Concrete Mathematics; nó được gõ bằng \\underline và \\overline ở số mũ. Giai thừa giảm chuyển sang lũy thừa thông thường nhờ số Stirling: x^n = \\sum_k S(n,k)(x)_k. Hãy định nghĩa rõ ký hiệu của bạn trong bài báo.",
  },
  "rising-factorial": {
    name: "Giai thừa tăng",
    meaning: "Giai thừa tăng viết bằng chỉ số trên đặt trong ngoặc tròn: n(n+1)...(n+k-1).",
    usage: "Ký hiệu này, phổ biến trong tổ hợp và xác suất, biểu thị giai thừa tăng n^{(k)} = n(n+1)\\cdots(n+k-1) = \\Gamma(n+k)/\\Gamma(n). Nó có tính nhập nhằng: trong giải tích f^{(k)} là đạo hàm cấp k, và một số tác giả lại dùng x^{(k)} cho giai thừa giảm. Ký hiệu n^{\\overline{k}} của Knuth hoặc ký hiệu Pochhammer (n)_k của lý thuyết hàm đặc biệt là các lựa chọn thay thế, dù ký hiệu sau xung đột với giai thừa giảm trong tổ hợp. Dấu ngoặc tròn phải nằm bên trong cặp ngoặc nhọn của chỉ số trên, ^{(k)}. Giai thừa tăng đếm số cách đặt có thứ tự k quả bóng vào n ống được sắp thứ tự.",
  },
  "stirling-first-kind": {
    name: "Số Stirling loại một",
    meaning: "Số Stirling loại một không dấu: số hoán vị của n phần tử có đúng k chu trình, viết bằng ký hiệu ngoặc vuông.",
    usage: "\\genfrac nhận sáu đối số: dấu ngoặc trái, dấu ngoặc phải, độ dày gạch phân số, kiểu cỡ chữ, tử số, mẫu số. Đặt độ dày bằng 0pt sẽ bỏ gạch phân số, cho ra ký hiệu ngoặc vuông xếp chồng của cuốn Concrete Mathematics. Các số này thỏa mãn hệ thức truy hồi {n+1 \\brack k} = n {n \\brack k} + {n \\brack k-1} và có tổng theo k bằng n!. Thay vì lặp lại lời gọi sáu đối số, hãy định nghĩa một macro như \\newcommand{\\stirlingI}[2]{\\genfrac{[}{]}{0pt}{}{#1}{#2}}. Đối số thứ tư để trống cho phép cỡ chữ theo ngữ cảnh; dùng 0 cho cỡ hiển thị hoặc 1 cho cỡ trong dòng.",
  },
  "stirling-second-kind": {
    name: "Số Stirling loại hai",
    meaning: "Số Stirling loại hai: số cách phân hoạch một tập n phần tử thành k khối khác rỗng, viết bằng ký hiệu ngoặc nhọn.",
    usage: "Ở đây \\genfrac dùng các dấu ngoặc nhọn đã được thoát \\{ và \\} làm dấu ngoặc với gạch dày 0pt, tạo ra ký hiệu ngoặc nhọn do Knuth phổ biến. Các số này thỏa mãn S(n+1, k) = k\\,S(n, k) + S(n, k-1), có tổng theo k bằng số Bell B_n, và chuyển lũy thừa sang giai thừa giảm: x^n = \\sum_k {n \\brace k}(x)_k. Vì dấu ngoặc nhọn phải được thoát, thiếu dấu gạch chéo ngược là lỗi biên dịch thường gặp. Hãy bọc nó trong một macro như \\stirlingII{n}{k}. Ký hiệu thay thế S(n, k) dễ gõ hơn và phổ biến trong sách khoa học máy tính.",
  },
  "bell-number": {
    name: "Số Bell",
    meaning: "Số Bell B_n: tổng số cách phân hoạch một tập n phần tử thành các khối khác rỗng.",
    usage: "Dãy số Bell bắt đầu bằng 1, 1, 2, 5, 15, 52, 203 và mỗi số bằng tổng các số Stirling loại hai, B_n = \\sum_k S(n, k). Chúng thỏa mãn B_{n+1} = \\sum_k \\binom{n}{k} B_k và công thức Dobinski B_n = \\frac{1}{e}\\sum_{k \\geq 0} \\frac{k^n}{k!}. Một xung đột ký hiệu cần lưu ý: B_n cũng ký hiệu số Bernoulli, xuất hiện trong công thức Euler-Maclaurin và các giá trị của hàm zeta, nên người làm giải tích có thể phải đổi tên một trong hai. Cần dấu ngoặc nhọn khi chỉ số là một biểu thức, như B_{n+1}. Số Bell là các mômen của phân phối Poisson có kỳ vọng bằng 1.",
  },
  "fibonacci": {
    name: "Số Fibonacci",
    meaning: "Số Fibonacci F_n, xác định bởi F_0 = 0, F_1 = 1 và F_n = F_{n-1} + F_{n-2}.",
    usage: "Dãy Fibonacci bắt đầu bằng 0, 1, 1, 2, 3, 5, 8, 13 và có công thức dạng đóng F_n = (\\varphi^n - \\psi^n)/\\sqrt{5}, tức công thức Binet, trong đó \\varphi = (1+\\sqrt5)/2 là tỉ lệ vàng. Chúng đếm số cách lát một bảng 1 \\times n bằng ô vuông và quân domino (có F_{n+1} cách) và xuất hiện trong phân tích thuật toán Euclid cũng như đống Fibonacci. Một số sách bắt đầu đánh chỉ số từ F_1 = F_2 = 1, nên hãy nêu rõ các giá trị ban đầu. Dùng \\varphi cho tỉ lệ vàng như phần lớn tác giả; \\phi là biến thể nét thẳng. Cần dấu ngoặc nhọn cho F_{n-1}.",
  },
  "partition": {
    name: "Hàm phân hoạch",
    meaning: "Hàm phân hoạch p(n): số cách viết n thành tổng các số nguyên dương, không kể thứ tự.",
    usage: "Chẳng hạn, p(4) = 5 vì 4 = 3+1 = 2+2 = 2+1+1 = 1+1+1+1. Hàm sinh của Euler là \\sum_n p(n) x^n = \\prod_{k \\geq 1} \\frac{1}{1 - x^k}, và Hardy cùng Ramanujan tìm ra công thức tiệm cận p(n) \\sim \\frac{1}{4n\\sqrt{3}} e^{\\pi\\sqrt{2n/3}}. Các đồng dư Ramanujan bao gồm p(5k+4) \\equiv 0 \\pmod 5. Chữ p thường xung đột với ký hiệu hàm mật độ xác suất và với số nguyên tố, nên hãy định nghĩa nó trong ngữ cảnh hỗn hợp. Các phiên bản hạn chế được viết p_k(n) hoặc p(n, k) cho số phân hoạch thành nhiều nhất k phần.",
  },
  "derangement": {
    name: "Số mất thứ tự",
    meaning: "Số mất thứ tự D_n: số hoán vị của n phần tử trong đó không phần tử nào ở lại vị trí ban đầu.",
    usage: "D_n đếm các hoán vị không có điểm bất động, với các giá trị đầu là 1, 0, 1, 2, 9, 44, 265. Nguyên lý bao hàm và loại trừ cho D_n = n! \\sum_{k=0}^{n} \\frac{(-1)^k}{k!}, nên D_n là số nguyên gần n!/e nhất và xác suất để một hoán vị ngẫu nhiên là mất thứ tự dần tới 1/e. Các hệ thức truy hồi gồm D_n = (n-1)(D_{n-1} + D_{n-2}). Câu chuyện kinh điển là bài toán trả nhầm mũ. Cùng số này còn được viết là !n, gọi là giai thừa con; D_n dễ đọc hơn trong văn bản. Lưu ý D_n còn là tên của nhóm nhị diện trong đại số, nên hãy làm rõ nếu cả hai cùng xuất hiện.",
  },
  "double-factorial": {
    name: "Giai thừa kép",
    meaning: "Giai thừa kép: tích của tất cả các số nguyên từ n giảm dần tới 1 hoặc 2 có cùng tính chẵn lẻ với n.",
    usage: "Với n lẻ, n!! = n(n-2)\\cdots 3 \\cdot 1, nên 7!! = 105; với n chẵn, tích dừng ở 2, nên 8!! = 384. Nó không phải là (n!)!, một cách hiểu nhầm thường gặp, nên một định nghĩa ngắn sẽ hữu ích. Các đẳng thức gồm (2n)!! = 2^n n! và (2n-1)!! = \\frac{(2n)!}{2^n n!}; số sau đếm các cặp ghép hoàn hảo trên 2n điểm và xuất hiện trong các mômen của phân phối Gauss, \\mathbb{E}[X^{2n}] = (2n-1)!! với phân phối chuẩn tắc. Trong TeX, ! là ký hiệu đóng, nên n!! không cần khoảng cách đặc biệt. Theo quy ước 0!! = (-1)!! = 1.",
  },
  "subfactorial": {
    name: "Giai thừa con",
    meaning: "Giai thừa con của n, ký hiệu với dấu chấm than đặt trước, chỉ số cách sắp xếp mất thứ tự của n đối tượng.",
    usage: "!n bằng D_n, số hoán vị không có điểm bất động: !4 = 9 và !n = \\left\\lfloor n!/e + 1/2 \\right\\rfloor với n \\geq 1. Dấu chấm than đặt trước tuy gọn nhưng dễ đọc nhầm, nhất là khi đứng sau một biến, lúc đó m!n trông như m giai thừa nhân với n. Viết D_n, hoặc thêm dấu nhóm rõ ràng, sẽ tránh được điều này. Trong TeX dấu chấm than thuộc lớp ký hiệu đóng, nên sau một quan hệ hai ngôi như = nó được dàn trang không có khoảng trắng thừa, đúng như mong muốn. Một số tác giả dùng dấu chấm than ngược hoặc n\\text{¡}, nhưng ký hiệu này hiếm gặp.",
  },
  "pochhammer": {
    name: "Ký hiệu Pochhammer",
    meaning: "Ký hiệu Pochhammer: trong lý thuyết hàm đặc biệt, đó là giai thừa tăng a(a+1)...(a+n-1).",
    usage: "Trong tài liệu về hàm siêu bội và hàm đặc biệt, (a)_n = a(a+1)\\cdots(a+n-1) = \\Gamma(a+n)/\\Gamma(a), với (a)_0 = 1. Nó là thành phần cơ bản của chuỗi {}_pF_q, chẳng hạn {}_2F_1(a,b;c;z) = \\sum_n \\frac{(a)_n (b)_n}{(c)_n} \\frac{z^n}{n!}. Người làm tổ hợp dùng cùng ký hiệu (x)_n cho giai thừa giảm, nên đây là một trong những xung đột ký hiệu nổi tiếng nhất; DLMF và phần lớn tài liệu tham khảo về hàm đặc biệt dùng nghĩa giai thừa tăng. Ký hiệu a^{\\overline{n}} của Knuth không gây nhập nhằng nếu độc giả đến từ nhiều lĩnh vực. Dấu ngoặc tròn ở đây là ngoặc thông thường, có cỡ theo đối số.",
  },
};

export default text;
