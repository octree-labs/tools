import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/topology/<slug>. */
const text: SymbolPageTranslations = {
  "aleph-null": {
    name: "Aleph không",
    meaning: "Aleph không, lực lượng của tập số tự nhiên và là bản số vô hạn nhỏ nhất.",
    usage: "Mọi tập hợp có thể liệt kê thành một dãy, như \\mathbb{Z} hoặc \\mathbb{Q}, đều có lực lượng \\aleph_0, và các phép tính như \\aleph_0 + \\aleph_0 = \\aleph_0 \\cdot \\aleph_0 = \\aleph_0 cho thấy bản số vô hạn hấp thụ như thế nào. Phương pháp đường chéo của Cantor chứng minh 2^{\\aleph_0} > \\aleph_0, nên tập số thực lớn hơn hẳn. \\aleph có sẵn mà không cần gói bổ sung và hoạt động như một ký hiệu thông thường, nên chỉ số dưới gắn trực tiếp vào. Một số sách cũ viết \\omega cho số thứ tự tương ứng; hãy phân biệt rõ bản số và số thứ tự trong ký hiệu của bạn.",
  },
  "aleph-one": {
    name: "Aleph một",
    meaning: "Aleph một, bản số không đếm được đầu tiên: kích thước vô hạn kế tiếp sau đếm được.",
    usage: "Giả thuyết continuum khẳng định 2^{\\aleph_0} = \\aleph_1, nghĩa là không có tập hợp nào có kích thước nằm hẳn giữa tập số nguyên và tập số thực; Gödel và Cohen đã chỉ ra rằng nó độc lập với ZFC. Đừng viết |\\mathbb{R}| = \\aleph_1 như một sự thật, vì đó chính là giả thiết còn bỏ ngỏ; hãy dùng \\mathfrak{c} hoặc 2^{\\aleph_0} cho lực lượng continuum. \\aleph_1 cũng là lực lượng của \\omega_1, tập các số thứ tự đếm được. Các aleph lớn hơn theo cùng mẫu \\aleph_\\alpha với chỉ số là số thứ tự, và chỉ số cần ngoặc nhọn nếu dài hơn một ký hiệu.",
  },
  "beth": {
    name: "Chữ beth",
    meaning: "Chữ cái Do Thái beth, dùng cho các số beth: lặp lại phép lấy tập lũy thừa bắt đầu từ bản số đếm được.",
    usage: "Dãy beth được định nghĩa bởi \\beth_0 = \\aleph_0 và \\beth_{\\alpha+1} = 2^{\\beth_\\alpha}, nên \\beth_1 là lực lượng của tập số thực và \\beth_2 là lực lượng của tập mọi hàm thực. Giả thuyết continuum tổng quát là mệnh đề \\aleph_\\alpha = \\beth_\\alpha với mọi số thứ tự. Bên cạnh \\aleph, bộ ký hiệu mở rộng của LaTeX cung cấp \\beth, \\gimel và \\daleth, các chữ cái Do Thái thứ hai đến thứ tư. Giống \\aleph, nó là một ký hiệu thông thường, nên chỉ số dưới gắn trực tiếp; hiếm khi thấy nó ngoài lý thuyết tập hợp.",
  },
  "weierstrass-p": {
    name: "Chữ p Weierstrass",
    meaning: "Chữ p kiểu viết tay dùng cho hàm elliptic Weierstrass, một hàm phân hình tuần hoàn kép.",
    usage: "Hàm Weierstrass \\wp(z) thỏa mãn (\\wp')^2 = 4\\wp^3 - g_2 \\wp - g_3, đó là lý do nó tham số hóa các đường cong elliptic. Glyph này là một chữ p viết tay đặc biệt không thuộc họ phông nào, nên \\mathcal{P} hay \\mathscr{P} là những ký hiệu khác. Một số tác giả dùng \\wp cho tập lũy thừa, nhưng \\mathcal{P}(X) là lựa chọn phổ biến hơn và tránh trùng với hàm elliptic. Lưu ý rằng ký hiệu đạo hàm bằng dấu phẩy trên hoạt động như thường, \\wp'(z), và ký hiệu này nằm hơi thấp hơn đường cơ sở giống như một nét thả xuống.",
  },
  "fraktur-r-real-part-symbol": {
    name: "Chữ R Fraktur (ký hiệu phần thực)",
    meaning: "Chữ R hoa kiểu Fraktur, ký hiệu cổ điển để lấy phần thực của một đại lượng phức.",
    usage: "Bản thân \\Re chỉ là một glyph, không phải toán tử, nên không có khoảng cách tự động trước đối số; hãy viết tiếp bằng ngoặc tròn hoặc ngoặc nhọn, như trong \\Re(s) > 1 cho nửa mặt phẳng nơi chuỗi zeta Riemann hội tụ. Các nhà lý thuyết số giải tích dùng đúng kiểu này. Nếu muốn một kiểu hiển thị khác, hãy định nghĩa lại bằng \\renewcommand{\\Re}{\\operatorname{Re}} trong phần preamble để mọi chỗ xuất hiện đều đổi cùng lúc. Lưu ý rằng \\Re khác với \\mathfrak{R}, lệnh cho ra chữ R Fraktur từ một phông khác và trông hơi khác.",
  },
  "fraktur-i-imaginary-part-symbol": {
    name: "Chữ I Fraktur (ký hiệu phần ảo)",
    meaning: "Chữ I hoa kiểu Fraktur, glyph truyền thống cho phần ảo của một số phức.",
    usage: "Tích phân đường và lý thuyết phổ dùng \\Im để tách các đại lượng: phần ảo của hàm Green cho mật độ trạng thái, và \\Im \\tau > 0 xác định nửa mặt phẳng trên trong lý thuyết modular. Cũng như \\Re, lệnh này chỉ in ra một ký hiệu, nên bạn cần tự thêm ngoặc. Nhiều người đọc thấy chữ Fraktur dễ đọc nhầm, và định nghĩa lại bằng \\renewcommand{\\Im}{\\operatorname{Im}} sẽ chuyển sang chữ đứng “Im”. Nếu văn bản của bạn cũng dùng ảnh của một đồng cấu, hãy viết nó là \\operatorname{im} bằng chữ thường để phân biệt hai khái niệm.",
  },
  "calligraphic-o": {
    name: "Chữ O thư pháp",
    meaning: "Chữ O thư pháp, dùng cho họ các tập mở trong tô pô và cho nhiều cấu trúc khác.",
    usage: "Một không gian tô pô thường được viết là (X, \\mathcal{O}), với \\mathcal{O} là họ các tập mở, dù \\tau cũng phổ biến không kém. Cùng chữ cái này còn nhiều vai trò khác: ký hiệu O lớn trong tiệm cận \\mathcal{O}(n \\log n), bó cấu trúc \\mathcal{O}_X trong hình học đại số, và vành số nguyên \\mathcal{O}_K của một trường số. \\mathcal chỉ hỗ trợ chữ in hoa trong các phông tiêu chuẩn. Với ký hiệu tiệm cận, nhiều hướng dẫn trình bày ưa dùng chữ O nghiêng thường, nên hãy chọn một cách và áp dụng xuyên suốt.",
  },
  "interior": {
    name: "Phần trong",
    meaning: "Phần trong của A, hợp của mọi tập mở chứa trong A; viết bằng một vòng tròn nhỏ ở chỉ số trên.",
    usage: "Phần trong là tập con mở lớn nhất của A, và nó đi cặp với bao đóng qua \\partial A = \\overline{A} \\setminus A^{\\circ}. Chỉ số trên \\circ là vòng tròn của phép hợp thành được đặt cao lên; không nên nhầm nó với dấu độ trong đơn vị. Các ký hiệu phổ biến khác là \\operatorname{int} A và \\mathring{A}, ký hiệu sau đặt vòng tròn ngay trên chữ cái; \\mathring phù hợp hơn với chữ cái đơn có chỉ số dưới như U_1. Với một đoạn đóng, [a, b]^{\\circ} = (a, b).",
  },
  "exterior": {
    name: "Phần ngoài",
    meaning: "Phần ngoài của tập A: phần trong của phần bù của nó, gồm các điểm có một lân cận không giao với A.",
    usage: "Mọi không gian đều tách thành ba phần rời nhau, phần trong, biên và phần ngoài của A, và \\text{ext}(A) = (X \\setminus A)^{\\circ}. Gõ ext trong chế độ toán mà không bọc lại sẽ cho các chữ nghiêng e, x, t nhân với nhau, nên cần có một lệnh bọc. \\text kế thừa phông xung quanh, khiến nó thành chữ nghiêng bên trong một định lý; \\operatorname{ext} luôn đứng và cho khoảng cách toán tử, còn \\DeclareMathOperator{\\ext}{ext} giúp dùng lại nhiều lần. Lưu ý rằng ext cũng là viết tắt của đại số ngoài và của các nhóm Ext trong đại số đồng điều.",
  },
  "boundary-operator": {
    name: "Toán tử biên",
    meaning: "Biên của A: các điểm mà mọi lân cận của chúng đều giao với cả A và phần bù của A.",
    usage: "Biên của một hình tròn là đường tròn của nó, và biên của tập số hữu tỉ trong tập số thực là toàn bộ, \\partial \\mathbb{Q} = \\mathbb{R}. Cùng ký hiệu \\partial là toán tử bờ trong tô pô đại số, \\partial_n : C_n \\to C_{n-1} với \\partial \\circ \\partial = 0, và xuất hiện trong định lý Stokes \\int_{\\partial M} \\omega = \\int_M d\\omega. Một số sách viết \\operatorname{Fr} A hoặc \\operatorname{bd} A thay thế. Vì \\partial là một ký hiệu thông thường, không có gì tách nó khỏi tên tập hợp; dáng viết sát nhau đó chính là quy ước mong muốn.",
  },
  "direct-limit": {
    name: "Giới hạn thuận",
    meaning: "Giới hạn thuận (đối giới hạn) của một hệ định hướng, in thành “lim” với mũi tên chỉ sang phải bên dưới.",
    usage: "Giới hạn thuận dựng nên các đối tượng như \\mathbb{Q} dưới dạng \\varinjlim \\frac{1}{n}\\mathbb{Z} hoặc thớ của một bó, \\mathcal{F}_x = \\varinjlim_{U \\ni x} \\mathcal{F}(U). Trong chế độ hiển thị, tập chỉ số nằm dưới mũi tên; trong dòng, nó nằm bên cạnh. Bộ amsmath còn có \\injlim, in ra chữ “inj lim”, nên hãy chọn dạng mà lĩnh vực của bạn dùng. Các nhà lý thuyết phạm trù thường viết \\operatorname*{colim}, vì giới hạn thuận là trường hợp riêng của đối giới hạn. Đối ứng của nó cho các hệ ngược là \\varprojlim.",
  },
  "inverse-limit": {
    name: "Giới hạn ngược",
    meaning: "Giới hạn ngược (giới hạn xạ ảnh) của một hệ, hiển thị thành “lim” với mũi tên chỉ sang trái bên dưới.",
    usage: "Số nguyên p-adic là ví dụ kinh điển, \\mathbb{Z}_p = \\varprojlim \\mathbb{Z}/p^n\\mathbb{Z}, và các nhóm hữu hạn xạ ảnh như nhóm Galois là giới hạn ngược của các nhóm hữu hạn. Giống như \\lim, chỉ số dưới nằm bên dưới trong kiểu hiển thị. Lựa chọn thay thế \\projlim in ra chữ “proj lim” không có mũi tên. Lý thuyết phạm trù tổng quát hóa điều này thành giới hạn tùy ý, thường viết là \\lim. Hãy bảo đảm mũi tên chỉ đúng hướng: \\varprojlim có mũi tên sang trái và ứng với các ánh xạ đi xuống trong hệ, còn \\varinjlim có mũi tên sang phải.",
  },
  "quotient": {
    name: "Thương",
    meaning: "Thương của A theo B: một nhóm, vành, môđun hoặc không gian trong đó B được co lại hoặc được chia ra.",
    usage: "Thương xuất hiện dưới dạng \\mathbb{Z}/n\\mathbb{Z}, G/H cho các lớp ghép, và X/A khi co một không gian con thành một điểm. Trong chế độ toán, / là ký hiệu thông thường không có khoảng trắng xung quanh, đó là kiểu trình bày chuẩn. Với thương theo một quan hệ tương đương, hãy đặt dấu ngã trong ngoặc nhọn, X/{\\sim}, nếu không \\sim sẽ nhận khoảng cách của quan hệ và để lại khoảng trống. Với các toán hạng cao, cấu trúc \\big/ hoặc \\left. \\middle/ \\right. giữ dấu gạch chéo cân đối. Đừng dùng \\setminus ở đây; đó là hiệu tập hợp, một phép toán khác. Hãy nói rõ thương mang cấu trúc gì, vì G/H chỉ là một nhóm khi H là nhóm con chuẩn tắc.",
  },
  "fundamental-group": {
    name: "Nhóm cơ bản",
    meaning: "Nhóm cơ bản của một không gian: các lớp đồng luân của vòng lặp tại một điểm gốc, với phép nối làm phép nhân.",
    usage: "Phép tính chuẩn \\pi_1(S^1) \\cong \\mathbb{Z} đếm số lần một vòng lặp quấn quanh đường tròn, và không gian có \\pi_1 tầm thường được gọi là đơn liên. Hãy viết rõ điểm gốc, \\pi_1(X, x_0), khi điều đó quan trọng; với không gian liên thông đường, nó thường được bỏ qua. Các nhóm đồng luân bậc cao theo cùng mẫu, \\pi_n(X). Dùng \\cong cho đẳng cấu thay vì =. Nếu \\pi cũng biểu thị con số pi hoặc một phép chiếu trong cùng tài liệu, hãy cân nhắc liệu người đọc có thể nhầm lẫn hay không.",
  },
  "homology": {
    name: "Nhóm đồng điều",
    meaning: "Nhóm đồng điều thứ n của một không gian hoặc phức xích, đo các lỗ hổng n chiều.",
    usage: "Với các mặt cầu, H_n(S^n) \\cong \\mathbb{Z} còn H_k(S^n) = 0 với 0 < k < n, và đặc trưng Euler là tổng đan dấu các hạng của H_n. Hệ số được viết sau dấu chấm phẩy, H_n(X; \\mathbb{Z}/2), và đồng điều tương đối là H_n(X, A). Chỉ số dưới đánh dấu đồng điều, chỉ số trên đánh dấu đối đồng điều, nên hãy giữ chúng cho đúng. Các biến thể được đánh dấu bằng ký hiệu trang trí: đồng điều rút gọn \\tilde{H}_n, đồng điều kỳ dị H_n^{\\mathrm{sing}}. Trong đại số đồng điều, nó được định nghĩa là \\ker \\partial_n / \\operatorname{im} \\partial_{n+1}. Các dãy khớp dài của những nhóm này thường được vẽ thành biểu đồ giao hoán.",
  },
  "cohomology": {
    name: "Nhóm đối đồng điều",
    meaning: "Nhóm đối đồng điều thứ n, lý thuyết đối ngẫu với đồng điều, mang cấu trúc vành nhờ tích cup.",
    usage: "Đối đồng điều de Rham H^n_{\\mathrm{dR}}(M) phân loại các dạng vi phân đóng theo modulo các dạng khớp, và tích cup \\smile biến H^\\ast(X) thành một vành phân bậc. Kết hợp chỉ số trên và chỉ số dưới, như trong H^n_{\\mathrm{dR}}, xếp chồng chúng gọn gàng; hãy dùng \\mathrm cho các nhãn là từ ngữ chứ không phải biến. Chỉ số trên phân biệt nó với đồng điều H_n, một quy ước đáng tôn trọng. Đối đồng điều nhóm H^n(G, M) và đối đồng điều bó H^n(X, \\mathcal{F}) dùng cùng ký hiệu với các đối số khác nhau. Đối ngẫu Poincaré liên hệ H^k và H_{n-k} trên các đa tạp n chiều đóng có định hướng, điều này giải thích vì sao cả hai ký hiệu thường xuất hiện cùng nhau.",
  },
  "calligraphic-c-category": {
    name: "Chữ C thư pháp (phạm trù)",
    meaning: "Chữ C thư pháp, tên mặc định cho một phạm trù tùy ý; cũng dùng cho tập ràng buộc hoặc tập chấp nhận được.",
    usage: "Lý thuyết phạm trù viết các vật là X \\in \\mathcal{C} và tập các cấu xạ là \\operatorname{Hom}_{\\mathcal{C}}(X, Y), với phạm trù thứ hai thường gọi là \\mathcal{D}. Các phạm trù cụ thể thường được in đậm hoặc không chân, như \\mathbf{Set} hay \\mathsf{Grp}, để phân biệt tên với biến. Tối ưu hóa dùng \\mathcal{C} cho tập chấp nhận được lồi, như trong \\min_{x \\in \\mathcal{C}} f(x). \\mathcal chỉ cung cấp chữ in hoa trong các phông mặc định; \\mathscr cho kiểu chữ viết tay uốn lượn hơn nếu bạn cần một họ thứ hai.",
  },
  "calligraphic-f-functor": {
    name: "Chữ F thư pháp (hàm tử)",
    meaning: "Chữ F thư pháp, thường dùng để đặt tên một hàm tử giữa các phạm trù, một bó, một sigma-đại số hoặc một phép biến đổi.",
    usage: "Một hàm tử \\mathcal{F} \\colon \\mathcal{C} \\to \\mathcal{D} biến các vật và cấu xạ trong khi bảo toàn phép hợp thành. Ngoài lý thuyết phạm trù, cùng chữ cái này là một bó \\mathcal{F}(U), một sigma-đại số hay một lọc (\\mathcal{F}_t trong xác suất), hoặc phép biến đổi Fourier \\mathcal{F}\\{f\\}. Vì bị dùng cho nhiều nghĩa như vậy, hãy giới thiệu chữ cái này một cách tường minh. Dùng \\colon thay vì : khi viết miền và đối miền của hàm tử, để có khoảng cách của dấu câu. Nhiều tác giả dành chữ nghiêng thường F, G cho hàm tử và giữ chữ thư pháp cho bó. Một phép biến đổi tự nhiên giữa hai hàm tử thường được viết \\eta \\colon \\mathcal{F} \\Rightarrow \\mathcal{G}.",
  },
};

export default text;
