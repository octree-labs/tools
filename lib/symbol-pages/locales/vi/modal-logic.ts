import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/modal-logic/<slug>. */
const text: SymbolPageTranslations = {
  "possibly": {
    name: "Toán tử khả năng",
    meaning: "Toán tử khả năng: \\Diamond p đọc là \"có thể p\", đúng tại một thế giới nếu p đúng ở một thế giới khả truy nào đó.",
    usage: "Nó là đối ngẫu của tính tất yếu, \\Diamond p \\leftrightarrow \\neg\\Box\\neg p, và trong hệ T ta có p \\to \\Diamond p. Logic thời gian đọc nó là \"cuối cùng\", còn logic động viết \\langle a \\rangle p cho cùng ý tưởng. \\Diamond là một ký hiệu thông thường cỡ lớn; \\diamond là một toán tử hai ngôi nhỏ và \\lozenge là một hình thoi hẹp, nên đừng đổi lẫn chúng. TeX coi \\Diamond là ký hiệu thông thường, nên \\Diamond p được viết liền không có khoảng hở; chỉ thêm \\, nếu quy cách trình bày của bạn muốn có khoảng trắng.",
  },
  "not-necessary": {
    name: "Phủ định tính tất yếu",
    meaning: "Phủ định của tính tất yếu: \\neg\\Box p nói rằng p không tất yếu, tương đương với \\Diamond\\neg p.",
    usage: "Tính đối ngẫu \\neg\\Box p \\leftrightarrow \\Diamond\\neg p cho phép đẩy phép phủ định vào trong, tương tự trong logic tình thái của các luật De Morgan cho lượng từ. Về ngữ nghĩa, nó đúng tại một thế giới khi có một thế giới khả truy nào đó làm p sai. \\neg là một ký hiệu thông thường, nên \\neg\\Box p được viết sát nhau; bạn có thể viết \\lnot nếu thích, đó là một bí danh. Không có lệnh đơn chuẩn nào cho hình vuông bị gạch, và một ký tự ghép sẽ gây khó hiểu cho người đọc, nên hãy giữ dạng hai ký hiệu. Theo cách đọc tri thức, \\neg K_a p nói rằng tác tử không biết p, điều này yếu hơn việc biết \\neg p.",
  },
  "not-possible": {
    name: "Phủ định tính khả năng",
    meaning: "Phủ định của tính khả năng: \\neg\\Diamond p nói rằng p là bất khả, tương đương với \\Box\\neg p.",
    usage: "Tính bất khả là tính tất yếu của phủ định, \\neg\\Diamond p \\leftrightarrow \\Box\\neg p, và nó đúng tại một thế giới khi không có thế giới khả truy nào thỏa mãn p. Một mâu thuẫn là bất khả trong mọi logic tình thái chuẩn tắc, \\neg\\Diamond\\bot. Theo cách đọc tri thức, nó nói rằng tác tử coi p là đã bị loại trừ. Lệnh \\neg có thể thay bằng \\lnot với kết quả giống hệt. Tránh tự chế một hình thoi gạch chéo bằng \\not\\Diamond, vốn được thiết kế cho quan hệ và đặt dấu gạch không đẹp. Đưa phép phủ định vào trong, \\Diamond\\neg p, mang nghĩa khác: p có thể không xảy ra.",
  },
  "necessary-implication": {
    name: "Phép kéo theo tất yếu",
    meaning: "Phép kéo theo được tất yếu hóa: \\Box(p \\to q) nói rằng trong mọi thế giới khả truy, p kéo theo q (phép kéo theo chặt).",
    usage: "Đây là tiền đề của tiên đề phân phối K, \\Box(p \\to q) \\to (\\Box p \\to \\Box q), có mặt trong mọi logic tình thái chuẩn tắc. C. I. Lewis đưa ra phép kéo theo chặt chính là công thức này, nên \\Box(p \\to q) thường được đọc là p kéo theo chặt q. \\to và \\rightarrow cho cùng một mũi tên; \\implies là mũi tên dài với khoảng trắng rộng hơn, phù hợp cho suy luận ở tầng siêu ngôn ngữ hơn là cho các liên từ của ngôn ngữ đối tượng. Dấu ngoặc đơn là bắt buộc, vì \\Box liên kết chặt hơn \\to. Quy tắc tất yếu hóa cho phép suy ra \\Box(p \\to q) từ bất kỳ định lý p \\to q nào.",
  },
  "possible-conjunction": {
    name: "Phép hội khả năng",
    meaning: "Phép hội khả năng: \\Diamond(p \\land q) nói rằng có một thế giới khả truy trong đó p và q cùng đúng.",
    usage: "Nó kéo theo \\Diamond p \\land \\Diamond q, nhưng chiều ngược lại không đúng, vì p và q có thể khả năng ở những thế giới khác nhau; sự bất đối xứng này là một điểm thi cử kinh điển. Đối ngẫu của nó là \\Box(\\neg p \\lor \\neg q). \\land và \\wedge cho cùng một ký hiệu; \\land dễ đọc hơn trong các bài báo logic. Hãy giữ dấu ngoặc đơn, vì \\Diamond p \\land q được phân tích thành (\\Diamond p) \\land q. Theo ngữ nghĩa Kripke, một thế giới chứng kiến duy nhất phải thỏa mãn cả hai vế hội cùng lúc. Ví dụ, có thể trời mưa và có thể trời không mưa, nhưng trời vừa mưa vừa không mưa thì không thể.",
  },
  "knows": {
    name: "Toán tử tri thức",
    meaning: "Toán tử tri thức nhận thức: K_a p đọc là \"tác tử a biết rằng p\".",
    usage: "Logic tri thức thường mô hình hóa tri thức bằng S5: tiên đề chân lý K_a p \\to p, nội quan dương K_a p \\to K_a K_a p, và nội quan âm. Về ngữ nghĩa, K_a p đúng khi p đúng ở mọi thế giới mà tác tử a không phân biệt được với thế giới thực. Đối ngẫu \\hat{K}_a p hoặc M_a p nghĩa là a coi p là có thể. Dùng chữ K đứng, \\mathsf{K}_a hoặc \\mathrm{K}_a, nếu chữ K nghiêng xung đột với logic mang tên K, và viết tên tác tử nhiều chữ cái như \\text{Alice} ở chỉ số dưới.",
  },
  "believes": {
    name: "Toán tử niềm tin",
    meaning: "Toán tử niềm tin: B_a p đọc là \"tác tử a tin rằng p\", và khác với tri thức, niềm tin có thể sai.",
    usage: "Logic niềm tin thường dùng KD45: tính nhất quán B_a p \\to \\neg B_a\\neg p và cả hai tiên đề nội quan, nhưng không có tiên đề chân lý, nên B_a p \\to p không đúng. Mối liên hệ tri thức - niềm tin K_a p \\to B_a p là một nguyên lý bắc cầu phổ biến. Các bài báo về xét lại niềm tin viết B_a(p \\mid q) cho niềm tin có điều kiện. Cũng như với K_a, hãy cân nhắc dùng chữ đứng \\mathsf{B} nếu chữ B nghiêng đã được dùng cho việc khác, và đừng nhầm nó với hình vuông \\Box, toán tử tất yếu tổng quát.",
  },
  "common-knowledge": {
    name: "Tri thức chung",
    meaning: "Tri thức chung trong nhóm G: mọi người đều biết p, mọi người đều biết rằng mọi người biết p, và cứ thế mãi không dừng.",
    usage: "Với E_G p nghĩa là mọi thành viên của G đều biết p, tri thức chung là phép hội vô hạn E_G p \\land E_G E_G p \\land \\cdots, và nó thỏa mãn tiên đề điểm bất động C_G p \\leftrightarrow E_G(p \\land C_G p). Các câu đố những đứa trẻ lấm bùn và cuộc tấn công phối hợp đều xoay quanh khoảng cách giữa E_G và C_G. Tri thức phân tán được viết là D_G p. G là một tập các tác tử, nên hãy viết nó bằng chữ hoa in nghiêng và định nghĩa rõ ràng.",
  },
  "always-temporal-box": {
    name: "Toán tử luôn luôn (hình vuông thời gian)",
    meaning: "\"Luôn luôn\" theo nghĩa thời gian: \\Box p nói rằng p đúng ở hiện tại và ở mọi thời điểm tương lai của lần chạy.",
    usage: "Trong logic thời gian tuyến tính, \\Box thường được viết là G (toàn cục), và các tính chất an toàn có dạng \\Box\\neg\\mathit{bad}. Nó là đối ngẫu của toán tử cuối cùng, \\Box p \\leftrightarrow \\neg\\Diamond\\neg p, và \\Box\\Diamond p biểu thị rằng p xảy ra vô hạn lần. Cùng hình vuông này là tính tất yếu trong logic tình thái chân lý, nên hãy nói rõ cách đọc nào được áp dụng. \\Box và \\square cho hai hình vuông gần như giống hệt; \\Box là toán tử tình thái theo quy ước và khoảng trắng trước p không được tự động thêm vào. CTL đặt trước nó một lượng từ đường đi, như trong AG p.",
  },
  "eventually-temporal-diamond": {
    name: "Toán tử cuối cùng (hình thoi thời gian)",
    meaning: "\"Cuối cùng\" theo nghĩa thời gian: \\Diamond p nói rằng p đúng tại một thời điểm hiện tại hoặc tương lai nào đó.",
    usage: "Logic thời gian tuyến tính cũng viết nó là F p (tương lai), và nó có thể được định nghĩa từ toán tử cho đến khi bằng \\Diamond p \\equiv \\top\\,\\mathcal{U}\\,p. Các tính chất sống thường có dạng này, chẳng hạn \\Box(\\mathit{req} \\to \\Diamond\\mathit{grant}). \\Diamond\\Box p nghĩa là cuối cùng p sẽ đúng mãi mãi. Trong logic tình thái chân lý, cùng hình thoi này nghĩa là \"có thể\", nên hãy nói rõ cách đọc theo thời gian. Dùng \\Diamond, không phải \\diamond, vốn là một toán tử hai ngôi nhỏ hơn. Trong logic cây tính toán, nó được đặt sau một lượng từ đường đi, như trong AF p hoặc EF p.",
  },
  "until": {
    name: "Toán tử cho đến khi",
    meaning: "Toán tử cho đến khi của logic thời gian: p \\mathcal{U} q đúng nếu cuối cùng q đúng và p đúng ở mọi thời điểm trước đó.",
    usage: "Dạng mạnh đòi hỏi q phải xảy ra; dạng yếu p \\mathcal{W} q cũng cho phép p đúng mãi mãi. Toán tử cuối cùng được suy ra dưới dạng \\Diamond q \\equiv \\top \\mathcal{U} q. Viết đơn giản, \\mathcal{U} là một ký hiệu thông thường, nên p\\mathcal{U}q được viết liền không có khoảng trắng quanh U; hãy bọc nó thành p \\mathbin{\\mathcal{U}} q để có khoảng cách toán tử hai ngôi, hoặc định nghĩa \\newcommand{\\until}{\\mathbin{\\mathcal{U}}}. Nhiều bài báo LTL dùng chữ U đứng, \\mathbin{\\mathsf{U}}, thay cho chữ viết tay. Các logic thời gian quá khứ bổ sung toán tử kể từ khi, ảnh phản chiếu của nó nhìn ngược về quá khứ.",
  },
  "next": {
    name: "Toán tử kế tiếp",
    meaning: "Toán tử thời điểm kế tiếp của logic thời gian: \\bigcirc p nói rằng p đúng ở trạng thái ngay sau đó.",
    usage: "Đây là toán tử LTL duy nhất gắn với các bước thời gian rời rạc, và cũng được viết là X p. Luật khai triển p \\mathcal{U} q \\leftrightarrow q \\lor (p \\land \\bigcirc(p \\mathcal{U} q)) dùng nó để mở toán tử cho đến khi từng bước một. \\bigcirc là một vòng tròn lớn có kích thước như \\Box và \\Diamond, nên khớp với chúng về mặt thị giác; \\circ là toán tử hợp thành nhỏ và không đúng ở đây. Một số bài báo ưa dùng \\mathsf{X} cho rõ ràng trong các đặc tả nặng về văn bản thuần.",
  },
  "accessibility": {
    name: "Quan hệ khả truy",
    meaning: "Quan hệ khả truy trong ngữ nghĩa Kripke: w R v nghĩa là thế giới v khả truy (được coi là có thể) từ thế giới w.",
    usage: "Các tính chất của R tương ứng với các tiên đề tình thái: phản xạ cho T (\\Box p \\to p), bắc cầu cho 4 (\\Box p \\to \\Box\\Box p), và một quan hệ tương đương cho S5. Để \\Box p đúng tại w, p phải đúng ở mọi v với wRv. Gõ w R v, TeX coi R là một chữ cái thông thường và các khoảng trắng biến mất, cho ra wRv; hãy dùng w \\mathrel{R} v để có khoảng cách quan hệ, hoặc định nghĩa một macro. Một số tác giả viết R(w, v) hoặc w \\to v thay thế.",
  },
  "kripke-model": {
    name: "Mô hình Kripke",
    meaning: "Quan hệ thỏa trong một mô hình Kripke: công thức p đúng tại thế giới w của mô hình \\mathcal{M}.",
    usage: "Một mô hình Kripke \\mathcal{M} = (W, R, V) gồm các thế giới, một quan hệ khả truy và một hàm định trị, và chân lý được định nghĩa theo từng thế giới, chẳng hạn \\mathcal{M}, w \\models \\Box p khi và chỉ khi p đúng tại mọi thế giới kế tiếp theo R. \\models là một quan hệ với khoảng cách phù hợp; \\vDash cho một ký hiệu cửa xoay kép tương tự, và phủ định của chúng là \\not\\models hoặc \\nvDash. Đừng dùng \\vdash, ký hiệu tính khả chứng chứ không phải chân lý. Khi mô hình đã cố định, các tác giả viết tắt thành w \\models p hoặc w \\Vdash p.",
  },
  "possible-world": {
    name: "Thế giới khả hữu",
    meaning: "Một thế giới khả hữu: một điểm trong khung Kripke, tại đó các công thức được đánh giá là đúng hay sai.",
    usage: "Các thế giới được lấy từ một tập W, và một khung là cặp (W, R) với một quan hệ khả truy. Tùy theo logic, một thế giới có thể đại diện cho một trạng thái của chương trình, một thời điểm, hoặc một khả năng nhận thức. Theo quy ước, dùng các chữ thường w, v, u cho thế giới và w_0 cho thế giới thực. Vì một chữ w nghiêng trần rất phổ biến, hãy giới thiệu nó một cách tường minh, và ưu tiên viết w \\in W trong công thức đầu tiên để định hướng cách đọc.",
  },
  "deontic-ought": {
    name: "Toán tử bắt buộc (nghĩa vụ)",
    meaning: "Nghĩa vụ trong logic nghĩa vụ: O p đọc là \"lẽ ra phải p\" hoặc \"p là bắt buộc\".",
    usage: "Logic nghĩa vụ chuẩn là logic tình thái chuẩn tắc KD, với tiên đề D, O p \\to P p, nói rằng các nghĩa vụ là nhất quán, trong khi tiên đề chân lý O p \\to p cố ý không đúng. Các câu đố nghĩa vụ trái bổn phận như nghịch lý Chisholm cho thấy giới hạn của nó và dẫn đến nghĩa vụ hai ngôi O(p \\mid q). Trong chế độ toán, O p được viết thành Op không có khoảng trắng, nên hãy viết O\\,p hoặc dùng chữ đứng \\mathbf{O} hay \\mathsf{O} để tránh bị đọc thành ký hiệu O lớn.",
  },
  "deontic-permitted": {
    name: "Toán tử cho phép (nghĩa vụ)",
    meaning: "Sự cho phép trong logic nghĩa vụ: P p đọc là \"p được phép\", đối ngẫu của nghĩa vụ.",
    usage: "Sự cho phép được định nghĩa là P p \\leftrightarrow \\neg O\\neg p, và sự cấm đoán là F p \\leftrightarrow O\\neg p. Trong logic nghĩa vụ chuẩn, mọi nghĩa vụ đều được phép, O p \\to P p. Sự cho phép lựa chọn tự do, trong đó P(p \\lor q) lẽ ra phải kéo theo P p, là một câu đố nổi tiếng mà hệ chuẩn không công nhận. Chữ P nghiêng xung đột với ký hiệu xác suất, nên nhiều tác giả dùng \\mathsf{P} hoặc \\mathbf{P}; hãy thêm \\, sau nó để tách toán tử khỏi công thức.",
  },
};

export default text;
