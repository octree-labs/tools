import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/logic/<slug>. */
const text: SymbolPageTranslations = {
  "not-exists": {
    name: "Lượng từ tồn tại phủ định",
    meaning: "Lượng từ tồn tại bị phủ định: không tồn tại đối tượng nào có tính chất đã nêu.",
    usage: "\\nexists x \\in \\mathbb{Q} : x^2 = 2 khẳng định 2 không có căn bậc hai hữu tỉ. Ký hiệu này là \\exists có gạch chéo, được thiết kế thành một glyph duy nhất; \\not\\exists cũng dùng được nhưng gạch chéo có thể bị lệch. Về mặt logic, nó tương đương với \\forall x\\, \\neg P(x), và nhiều nhà logic thích viết \\neg \\exists x cho rõ ràng. Thêm một khoảng hẹp hoặc dấu hai chấm sau biến bị ràng buộc, như trong \\nexists x \\, P(x). Với tồn tại duy nhất, ký hiệu là \\exists!.",
  },
  "negation": {
    name: "Phép phủ định",
    meaning: "Dấu phủ định logic, một móc hình chữ L đặt trước công thức với nghĩa “không”.",
    usage: "Trong logic, viết \\neg p cho “không p”, và \\neg\\neg p \\equiv p trong logic cổ điển; \\lnot là bí danh hoàn toàn tương đương. Một số tài liệu dùng \\sim p, gạch ngang trên \\bar{p} hoặc p' thay thế, nhất là trong đại số Boole và mạch số. \\neg là ký hiệu thường, nên không có khoảng trắng giữa nó và toán hạng, đó đúng là hình thức mong muốn. Các luật De Morgan, \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q, là một công thức hiển thị điển hình. Trong ngữ cảnh lập trình, cả ! lẫn \\lnot đều được dùng.",
  },
  "logical-and": {
    name: "Phép hội logic",
    meaning: "Phép VÀ logic (phép hội), đúng khi và chỉ khi cả hai toán hạng đều đúng.",
    usage: "\\land là bí danh của \\wedge, được chọn để dễ đọc trong logic, như p \\land q hay \\forall x\\, (P(x) \\land Q(x)). Vì LaTeX xếp nó vào loại toán tử hai ngôi, khoảng trắng quanh p \\land q được đặt tự động; đừng tự thêm \\,. Với phép hội của nhiều công thức, hãy dùng toán tử lớn \\bigwedge_{i=1}^{n} p_i. Trong đại số Boole, phép VÀ thường được viết như phép nhân, pq hoặc p \\cdot q. Dùng \\land trong logic và \\wedge trong đại số ngoài để mã nguồn dễ đọc, dù hai lệnh in ra giống hệt nhau.",
  },
  "logical-or": {
    name: "Phép tuyển logic",
    meaning: "Phép HOẶC logic (phép tuyển), đúng khi có ít nhất một toán hạng đúng.",
    usage: "\\lor là bí danh của \\vee, dùng trong logic mệnh đề và logic vị từ: p \\lor \\neg p là luật bài trung. LaTeX đặt khoảng cách cho nó như toán tử hai ngôi, nên p \\lor q không cần lệnh khoảng trắng thủ công. Với nhiều thành phần tuyển, \\bigvee_{i} p_i là toán tử lớn. Phép tuyển loại trừ là một ký hiệu khác: \\oplus hoặc \\veebar. Đại số Boole và thiết kế mạch thường viết phép HOẶC là +. Nên dùng \\lor trong công thức logic và \\vee trong lý thuyết dàn để mã nguồn dễ đọc, dù cả hai hiển thị giống nhau.",
  },
  "proves": {
    name: "Ký hiệu suy diễn (turnstile)",
    meaning: "Ký hiệu turnstile, nghĩa là công thức bên phải suy diễn được (chứng minh được) từ các giả thiết bên trái.",
    usage: "Lý thuyết chứng minh viết \\Gamma \\vdash \\varphi cho hệ quả cú pháp, và lý thuyết kiểu dùng nó trong các phán đoán kiểu \\Gamma \\vdash e : \\tau. Nó khác với \\models, ký hiệu hệ quả ngữ nghĩa (đúng trong mọi mô hình); tính đúng đắn và tính đầy đủ khẳng định hai khái niệm trùng nhau trong logic bậc nhất. Phủ định bằng \\nvdash. \\vdash là quan hệ, nên khoảng cách được đặt tự động. Với các quy tắc suy diễn, \\frac hoặc một gói cây chứng minh chuyên dụng tạo ra đường kẻ ngang, với các phán đoán chứa \\vdash ở trên và dưới. Ký hiệu đối xứng gương là \\dashv.",
  },
  "models": {
    name: "Hệ quả ngữ nghĩa (models)",
    meaning: "Turnstile kép: hệ quả ngữ nghĩa hoặc quan hệ thỏa mãn, nghĩa là đúng trong mọi mô hình.",
    usage: "\\mathcal{M} \\models \\varphi nói cấu trúc M thỏa mãn công thức \\varphi, còn \\Gamma \\models \\varphi nói mọi mô hình của \\Gamma đều thỏa mãn \\varphi. Nó đối lập với \\vdash, tức tính chứng minh được theo cú pháp. Phủ định của nó là \\not\\models hoặc glyph riêng \\nvDash. Ký hiệu tương tự \\vDash có tỉ lệ hơi khác và được dùng trong một số hệ logic, cùng với \\Vdash cho phép forcing trong lý thuyết tập hợp. Là một quan hệ, nó có khoảng trắng ở hai bên. Kiểm chứng mô hình viết s \\models \\phi cho một trạng thái thỏa mãn công thức thời gian.",
  },
  "therefore": {
    name: "Dấu “vì vậy”",
    meaning: "Ba dấu chấm xếp thành tam giác, đọc là “vì vậy”, dùng để dẫn ra kết luận.",
    usage: "\\therefore phổ biến trong toán phổ thông và các phép biến đổi không chính thức: x + 2 = 5, \\therefore x = 3. Các bài báo chính thức thường dùng lời như “do đó” hoặc mũi tên kéo theo \\implies. Nó được đặt như một quan hệ, nên khoảng cách giữa các biểu thức là tự động. Phiên bản lộn ngược, \\because, có nghĩa là “vì”. Trong văn bản, nó vẫn phải nằm trong chế độ toán, ví dụ $\\therefore$, trừ khi bạn nạp một ký hiệu văn bản thay thế. Vì ý nghĩa của nó rõ ràng với hầu hết người đọc, nó rất hợp với slide và lời giải chi tiết khi thiếu chỗ.",
  },
  "because": {
    name: "Dấu “vì”",
    meaning: "Ba dấu chấm tạo thành tam giác ngược, đọc là “vì” hoặc “do”, dùng để dẫn ra lý do.",
    usage: "\\because dẫn ra một lý giải, thường gặp trong lời giải từng bước ở trường phổ thông: \\angle A = \\angle B \\quad \\because AB = AC. Nó là ảnh gương của \\therefore, với một dấu chấm duy nhất ở dưới. Văn viết chính thức thường viết rõ “vì” hoặc dùng chú thích bằng chữ như \\text{(by Lemma 2)}. Là một ký hiệu quan hệ, nó có khoảng trắng ở hai bên, và \\quad hoặc \\qquad đặt trước nó tách lý do khỏi phương trình. Hãy dùng nó dè dặt trong bài báo. Trong chứng minh, viết lý do bằng lời thường thân thiện với người đọc hơn.",
  },
  "contradiction-falsum-bottom": {
    name: "Mâu thuẫn (falsum, bottom)",
    meaning: "Ký hiệu up tack (bottom): falsum hay mâu thuẫn trong logic, và phần tử nhỏ nhất của một dàn.",
    usage: "Logic dùng \\bot cho một mệnh đề luôn sai, nên suy ra được \\bot là chứng minh được phủ định, và \\neg p có thể định nghĩa là p \\to \\bot. Lý thuyết miền và lý thuyết dàn dùng \\bot cho phần tử đáy, còn lý thuyết kiểu dùng nó cho kiểu rỗng. \\bot là ký hiệu thường; cùng glyph đó nhưng có khoảng cách quan hệ là \\perp, lệnh bạn cần cho quan hệ trực giao giữa hai đối tượng. Đối ngẫu của nó là \\top. Trong chứng minh phản chứng, một số tác giả viết \\bot hoặc \\Rightarrow\\Leftarrow ở cuối bước dẫn đến mâu thuẫn.",
  },
  "tautology-verum-top": {
    name: "Hằng đúng (verum, top)",
    meaning: "Ký hiệu down tack (top): verum, mệnh đề luôn đúng, và phần tử lớn nhất của một dàn.",
    usage: "Trong logic, \\top là một hằng đúng, phần tử đơn vị của phép hội (p \\land \\top \\equiv p). Lý thuyết dàn và lý thuyết miền dùng nó cho phần tử đỉnh, còn lý thuyết kiểu dùng nó cho kiểu đơn vị. Nó cũng được dùng rộng rãi làm chỉ số trên cho ma trận chuyển vị, A^\\top, thay cho A^T hoặc A^\\intercal. \\top là ký hiệu thường. Đừng nhầm nó với chữ T, vốn nằm trên đường cơ sở và có tỉ lệ khác. Đối ngẫu của nó là \\bot.",
  },
  "not-equivalent": {
    name: "Ký hiệu không tương đương",
    meaning: "Ba gạch có gạch chéo: không đồng dư modulo n, hoặc không đồng nhất bằng nhau.",
    usage: "Lý thuyết số viết a \\not\\equiv b \\pmod{n} khi n không chia hết a - b, chẳng hạn trong giả thiết của định lý Fermat nhỏ a \\not\\equiv 0 \\pmod{p}. Tiền tố \\not chồng một gạch chéo lên quan hệ; hãy đặt nó ngay trước \\equiv. Trong một số phông chữ gạch chéo trông hơi lệch tâm, nhưng không có glyph chuyên dụng chuẩn nào trong các phông ký hiệu thông dụng, nên \\not\\equiv là lựa chọn thường dùng. Trong logic, nó có nghĩa là không tương đương logic. Với phép khác đơn thuần, hãy dùng \\neq.",
  },
};

export default text;
