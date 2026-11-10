import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/set-theory/<slug>. */
const text: SymbolPageTranslations = {
  "empty-set-variant": {
    name: "Tập rỗng (biến thể)",
    meaning: "Ký hiệu tập rỗng dạng biến thể: một vòng tròn có gạch chéo, chỉ tập hợp không có phần tử nào.",
    usage: "\\varnothing và \\emptyset cùng có nghĩa là tập rỗng nhưng trông khác nhau: \\emptyset trong Computer Modern là số không hẹp và cao có gạch chéo, còn \\varnothing là vòng tròn có gạch chéo mà nhiều nhà toán học ưa dùng hơn. Hãy dùng nhất quán một ký hiệu, ví dụ A \\cap B = \\varnothing cho hai tập rời nhau. Nó không phải chữ Hy Lạp \\phi hay \\varphi, cũng không phải chữ Bắc Âu \\O, nên tránh dùng chúng thay thế. Một số tác giả định nghĩa lại \\emptyset thành \\varnothing trong phần preamble để mọi chỗ xuất hiện đều đổi cùng lúc.",
  },
  "contains": {
    name: "Ký hiệu chứa phần tử",
    meaning: "Quan hệ thuộc viết ngược: tập hợp bên trái chứa phần tử bên phải.",
    usage: "A \\ni x có cùng nghĩa với x \\in A nhưng tập hợp đứng trước, đọc tự nhiên trong các cụm như lân cận U \\ni x. Các tài liệu cũ và một số nhà logic còn dùng \\ni với nghĩa “sao cho”, dù nay \\mid hoặc dấu hai chấm mới là chuẩn. \\owns là bí danh của \\ni. Phủ định bằng \\not\\ni. Đừng nhầm nó với chữ epsilon hay với \\in tự lật ngược; \\ni là một quan hệ thực sự với khoảng cách tương ứng.",
  },
  "not-subset": {
    name: "Ký hiệu không là tập con",
    meaning: "Dấu tập con có gạch chéo: tập hợp bên trái không phải là tập con của tập hợp bên phải.",
    usage: "\\not\\subset chồng một gạch chéo lên \\subset bằng tiền tố chung \\not. Kết quả chấp nhận được, dù gạch chéo đôi khi lệch tâm; các glyph riêng \\nsubseteq (không phải tập con hoặc bằng) và \\nsubset trong một số gói ký hiệu trông đẹp hơn. Vì bản thân \\subset mơ hồ giữa bao hàm thực sự và bao hàm không chặt, \\nsubseteq thường là phủ định rõ ràng hơn. Ví dụ: \\mathbb{Q} \\not\\subset \\mathbb{Z}, vì 1/2 là số hữu tỉ nhưng không phải số nguyên. Đặt \\not ngay trước quan hệ, không có khoảng trắng hay dấu ngoặc, để nó ghép đúng.",
  },
  "big-union": {
    name: "Hợp lớn",
    meaning: "Toán tử hợp cỡ lớn cho hợp của một họ tập hợp có chỉ số, với cận ở trên và dưới.",
    usage: "\\bigcup_{i=1}^{\\infty} A_i viết một hợp đếm được, và \\bigcup_{\\alpha \\in I} U_\\alpha là hợp theo một tập chỉ số, như trong các phủ mở. Nó hoạt động giống \\sum: ở kiểu hiển thị, cận nằm dưới và trên; trong dòng, cận nằm bên cạnh, và \\limits buộc chúng xuống dưới ngay cả trong dòng. Đừng dùng nó giữa hai tập hợp; A \\cup B dùng phép toán hai ngôi \\cup. Các toán tử lớn liên quan gồm \\bigcap, \\bigsqcup cho hợp rời và \\biguplus cho hợp đa tập. Các luật De Morgan ghép nó với \\bigcap và phần bù.",
  },
  "big-intersection": {
    name: "Giao lớn",
    meaning: "Toán tử giao cỡ lớn để lấy giao của một họ tập hợp có chỉ số.",
    usage: "\\bigcap_{n=1}^{\\infty} (0, 1/n) = \\varnothing là một ví dụ chuẩn, và tô pô viết \\bigcap_{\\alpha} F_\\alpha cho giao của các tập đóng. Giống các toán tử lớn khác, cận của nó nằm dưới và trên ở chế độ hiển thị, nằm bên cạnh trong dòng, và nó phóng to ở kiểu hiển thị. Với hai tập hợp, hãy dùng phép toán hai ngôi \\cap. Các khoảng lồng nhau, tập Cantor \\bigcap_n C_n và định nghĩa sigma-đại số sinh bởi một họ như giao của mọi sigma-đại số chứa nó đều dùng ký hiệu này.",
  },
  "complement": {
    name: "Phần bù",
    meaning: "Ký hiệu phần bù, thường là chỉ số trên của một tập hợp để chỉ mọi phần tử nằm ngoài nó.",
    usage: "A^\\complement là phần bù của A so với một tập vũ trụ, nên A \\cup A^\\complement = U. Đây là ký hiệu thường, trông như chữ C cách điệu. Các cách viết thay thế phổ biến là A^c, A' và \\overline{A}, nhưng gạch trên dễ nhầm với bao đóng tô pô và dấu phẩy trên dễ nhầm với đạo hàm, nên \\complement không gây nhầm lẫn. Hãy viết nó dưới dạng chỉ số trên; đứng một mình nó hiếm khi xuất hiện. Luật De Morgan, (A \\cup B)^\\complement = A^\\complement \\cap B^\\complement, là ứng dụng kinh điển.",
  },
  "natural-numbers": {
    name: "Tập số tự nhiên",
    meaning: "Chữ N kiểu blackboard bold, ký hiệu chuẩn cho tập hợp các số tự nhiên 1, 2, 3, v.v.",
    usage: "Việc \\mathbb{N} có chứa 0 hay không tùy quy ước: logic và khoa học máy tính thường bắt đầu từ 0, còn lý thuyết số thường bắt đầu từ 1, nên hãy nêu rõ quy ước hoặc viết \\mathbb{N}_0, hay \\mathbb{Z}_{\\ge 0} và \\mathbb{Z}_{>0}. Lệnh \\mathbb trong phông blackboard bold chuẩn chỉ hỗ trợ chữ in hoa, nên \\mathbb{1} hoặc chữ thường sẽ không hiển thị như mong đợi nếu không có gói phông khác. Nhiều tác giả định nghĩa \\newcommand{\\N}{\\mathbb{N}} cho gọn. Dãy số thường được viết (a_n)_{n \\in \\mathbb{N}}. Chứng minh quy nạp thường bắt đầu bằng “với mọi n \\in \\mathbb{N}”.",
  },
  "integers": {
    name: "Tập số nguyên",
    meaning: "Chữ Z kiểu blackboard bold, tập hợp mọi số nguyên dương, âm và số không.",
    usage: "Chữ Z bắt nguồn từ tiếng Đức Zahlen. Các cấu trúc thường gặp gồm nhóm cyclic \\mathbb{Z}/n\\mathbb{Z}, số nguyên p-adic \\mathbb{Z}_p (lưu ý: một số tác giả lại dùng \\mathbb{Z}_n cho nhóm cyclic), lưới \\mathbb{Z}^n và \\mathbb{Z}[i] cho số nguyên Gauss. Các tập con được viết bằng chỉ số dưới như \\mathbb{Z}_{\\ge 0}. Trong các phông chuẩn, \\mathbb chỉ hoạt động với chữ in hoa. Tránh mô phỏng nó bằng chữ đậm \\mathbf{Z}, vốn là quy ước in ấn cũ. Trong lý thuyết vành, \\mathbb{Z} là vành khởi đầu, và mọi nhóm abel đều là một \\mathbb{Z}-môđun.",
  },
  "rational-numbers": {
    name: "Tập số hữu tỉ",
    meaning: "Chữ Q kiểu blackboard bold, trường số hữu tỉ (các phân số của số nguyên).",
    usage: "Q là viết tắt của quotient (thương). Nó xuất hiện trong các mở rộng trường như \\mathbb{Q}(\\sqrt{2}), trong các khẳng định về tính trù mật như \\mathbb{Q} trù mật trong \\mathbb{R}, và trong lý thuyết số đại số với \\overline{\\mathbb{Q}} cho các số đại số. Số p-adic được viết là \\mathbb{Q}_p. Số hữu tỉ dương là \\mathbb{Q}_{>0} hoặc \\mathbb{Q}^+. Vì \\mathbb chỉ hỗ trợ chữ in hoa, ở đây không có vấn đề gì. Định nghĩa \\newcommand{\\Q}{\\mathbb{Q}} giúp gõ nhanh hơn trong tài liệu nặng về đại số. Bao đóng đại số của nó là đếm được, còn bổ sung đủ của nó theo giá trị tuyệt đối thông thường cho ra \\mathbb{R}. Các điểm hữu tỉ trên đường cong được viết là C(\\mathbb{Q}).",
  },
  "real-numbers": {
    name: "Tập số thực",
    meaning: "Chữ R kiểu blackboard bold, tập hợp các số thực tạo nên trục số liên tục.",
    usage: "\\mathbb{R}^n là không gian Euclid, f : \\mathbb{R} \\to \\mathbb{R} là một hàm số thực, và \\mathbb{R}_{\\ge 0} hoặc \\mathbb{R}_+ là các số thực không âm (các quy ước khác nhau về việc \\mathbb{R}^+ có chứa 0 hay không). Không gian ma trận được viết \\mathbb{R}^{m \\times n}. Tập số thực mở rộng là \\overline{\\mathbb{R}} hoặc [-\\infty, \\infty]. Tránh dùng \\Re, lệnh này in chữ R kiểu fraktur dùng cho phần thực của số phức, không phải tập số thực. Nhiều tác giả định nghĩa một macro ngắn \\R. Tính đầy đủ của nó, mọi tập bị chặn đều có cận trên đúng, là điều phân biệt nó với \\mathbb{Q}.",
  },
  "complex-numbers": {
    name: "Tập số phức",
    meaning: "Chữ C kiểu blackboard bold, trường số phức có dạng a + bi với a và b là số thực.",
    usage: "Giải tích phức làm việc với các hàm f : \\mathbb{C} \\to \\mathbb{C}, đại số tuyến tính với \\mathbb{C}^n và ma trận Hermite trong \\mathbb{C}^{n \\times n}, còn hình học đại số với vành đa thức \\mathbb{C}[x]. Mặt phẳng thủng là \\mathbb{C} \\setminus \\{0\\} hoặc \\mathbb{C}^\\times, và mặt cầu Riemann là \\hat{\\mathbb{C}} hoặc \\mathbb{C} \\cup \\{\\infty\\}. Định lý cơ bản của đại số nói rằng \\mathbb{C} đóng đại số. Đừng dùng \\mathcal{C}, ký hiệu này thường chỉ một phạm trù hoặc một lớp hàm như C^\\infty. Không gian xạ ảnh phức được viết \\mathbb{CP}^n hoặc \\mathbb{P}^n_\\mathbb{C}.",
  },
  "power-set": {
    name: "Tập lũy thừa",
    meaning: "Chữ P kiểu calligraphic, ký hiệu thông dụng cho tập lũy thừa (tập hợp mọi tập con) của một tập hợp.",
    usage: "\\mathcal{P}(A) là tập lũy thừa, với |\\mathcal{P}(A)| = 2^{|A|} khi A hữu hạn, và định lý Cantor nói không có toàn ánh A \\to \\mathcal{P}(A). Một số tác giả dùng \\wp, chữ p Weierstrass, hoặc 2^A thay thế. \\mathcal{P} cũng được dùng cho độ đo xác suất, phân hoạch hay lớp P trong lý thuyết độ phức tạp, nên ngữ cảnh rất quan trọng. Bảng chữ calligraphic chỉ có chữ in hoa. Để có chữ P mang dáng viết tay hơn, một lệnh phông script như \\mathscr từ gói bổ sung là một lựa chọn thay thế.",
  },
  "cardinality": {
    name: "Lực lượng của tập hợp",
    meaning: "Hai gạch đứng bao quanh một tập hợp, cho lực lượng của nó: số phần tử mà nó chứa.",
    usage: "Với tập hữu hạn, |A| đếm số phần tử, như trong công thức bao hàm - loại trừ |A \\cup B| = |A| + |B| - |A \\cap B|; với tập vô hạn, đó là bản số. Cùng cách viết này có nghĩa là giá trị tuyệt đối với số và định thức với ma trận, nên ngữ cảnh sẽ quyết định. Các cách viết thay thế gồm \\#A và \\operatorname{card}(A). Để khoảng cách phân biệt được bên trái và bên phải, hãy viết \\lvert A \\rvert, và dùng \\left| ... \\right| quanh nội dung cao như \\mathcal{P}(\\mathbb{N}). Trong tổ hợp, |A| = |B| với tập hữu hạn thường được chứng minh bằng cách chỉ ra một song ánh.",
  },
  "aleph": {
    name: "Aleph",
    meaning: "Chữ aleph của tiếng Hebrew, dùng cho các bản số vô hạn, bắt đầu từ vô hạn đếm được aleph-không.",
    usage: "\\aleph_0 là lực lượng của \\mathbb{N}, \\aleph_1 là bản số kế tiếp, và giả thuyết continuum phát biểu rằng 2^{\\aleph_0} = \\aleph_1. Viết chỉ số dưới là \\aleph_0 chứ không phải \\aleph0. Các chữ Hebrew khác có trong chế độ toán gồm \\beth, \\gimel và \\daleth, với các số \\beth như \\beth_1 = 2^{\\aleph_0} đo lực lượng continuum. \\aleph là ký hiệu thường. Đừng nhầm nó với \\alpha hay với N của số tự nhiên. Lập luận đường chéo của Cantor cho thấy tập số thực không đếm được, nên lực lượng của nó lớn hơn hẳn \\aleph_0.",
  },
};

export default text;
