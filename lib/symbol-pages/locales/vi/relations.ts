import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/relations/<slug>. */
const text: SymbolPageTranslations = {
  "less-than": {
    name: "Dấu nhỏ hơn",
    meaning: "Quan hệ nhỏ hơn, khẳng định đại lượng bên trái nhỏ hơn hẳn đại lượng bên phải.",
    usage: "Gõ trực tiếp trong chế độ toán, < trở thành một quan hệ có khoảng trắng xung quanh đúng chuẩn, như trong 0 < x < 1 hoặc một bất đẳng thức chặt trong chứng minh epsilon-delta. Đừng dùng nó làm ngoặc nhọn cho tích vô hướng; đó là \\langle. Trong chế độ văn bản với bảng mã phông mặc định cũ, < có thể in ra dấu chấm than ngược, nên hãy viết \\textless hoặc dùng chế độ toán. Dạng không chặt của nó là \\leq (hoặc \\le), và phủ định là \\not< hoặc \\nless. Các trình hiển thị web như MathJax cũng chấp nhận \\lt, hữu ích trong HTML.",
  },
  "greater-than": {
    name: "Dấu lớn hơn",
    meaning: "Quan hệ lớn hơn, phát biểu rằng đại lượng bên trái lớn hơn hẳn đại lượng bên phải.",
    usage: "Trong chế độ toán, > là ký hiệu quan hệ và tự động có khoảng cách quan hệ, nên x > 0 không cần thêm khoảng trắng thủ công. Nó dùng trong các bất đẳng thức chặt như \\lambda_{\\max} > 0 hay điều kiện n > N trong định nghĩa giới hạn. Không nên dùng nó làm ngoặc nhọn đóng; đó là \\rangle. Trong chế độ văn bản với bảng mã phông cũ, ký tự này có thể in ra dấu hỏi ngược, nên hãy dùng \\textgreater hoặc chế độ toán. Các lệnh liên quan là \\geq (hoặc \\ge), \\gg cho lớn hơn rất nhiều, và \\ngtr cho phủ định của nó.",
  },
  "equivalent": {
    name: "Dấu tương đương",
    meaning: "Quan hệ ba gạch, nghĩa là đồng nhất bằng, đồng dư theo môđun n hoặc tương đương logic.",
    usage: "Lý thuyết số viết a \\equiv b \\pmod{n} cho quan hệ đồng dư, giải tích viết f \\equiv 0 để nói một hàm triệt tiêu ở mọi nơi, và logic dùng nó cho sự tương đương logic giữa các công thức. Hãy ghép nó với \\pmod{n} cho môđun trong ngoặc đơn hoặc \\bmod cho dạng hai ngôi a \\bmod n. Nó khác với \\cong (đẳng cấu hoặc bằng nhau trong hình học) và với \\triangleq hay := (định nghĩa), dù một số tác giả cũng dùng nó cho định nghĩa. Phủ định bằng \\not\\equiv. Trong vật lý, \\equiv thường giới thiệu một cách viết tắt: \\omega \\equiv 2\\pi f.",
  },
  "proportional-to": {
    name: "Dấu tỉ lệ thuận",
    meaning: "Cho biết một đại lượng tỉ lệ thuận với đại lượng khác, tức là bằng nhau sai khác một hằng số nhân.",
    usage: "Vật lý viết F \\propto 1/r^2 cho các định luật nghịch đảo bình phương, và thống kê Bayes dựa vào nó liên tục: p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\, p(\\theta), bỏ đi hằng số chuẩn hóa. Đây là một quan hệ nên khoảng cách được đặt tự động. Đừng nhầm nó với chữ Hy Lạp \\alpha, trông giống trong một số phông nhưng không có khoảng cách quan hệ. Biến thể \\varpropto có hình dạng hơi khác. Với bậc tăng trưởng trong phân tích thuật toán, \\sim hoặc \\Theta thường rõ ràng hơn. Chỉ viết kèm hằng số khi hằng số đó quan trọng; nếu không, mục đích của \\propto chính là ẩn nó đi.",
  },
  "similar-to": {
    name: "Dấu đồng dạng",
    meaning: "Quan hệ dấu ngã cho “có phân phối”, tương đương tiệm cận, đồng dạng hoặc tương đương theo một quan hệ.",
    usage: "Trong xác suất, X \\sim \\mathcal{N}(0, 1) đọc là X có phân phối chuẩn tắc. Trong tiệm cận, f \\sim g nghĩa là f/g \\to 1, như trong công thức Stirling. Đại số dùng x \\sim y cho một quan hệ tương đương, và hình học dùng nó cho tam giác đồng dạng. Là một quan hệ, nó có khoảng trắng ở hai bên; với dấu ngã đặt trên chữ cái, hãy dùng \\tilde{x}. Các ký hiệu gần gũi là \\simeq (bằng nhau tiệm cận hoặc tương đương đồng luân), \\approx (xấp xỉ), và \\thicksim, phiên bản đậm hơn. Khi dùng làm tiền tố nghĩa là “khoảng”, như trong \\sim 10^3, khoảng cách có thể trông lạ; hãy viết {\\sim}10^3.",
  },
  "congruent": {
    name: "Dấu đẳng cấu",
    meaning: "Dấu ngã trên dấu bằng, chỉ sự đẳng cấu giữa các cấu trúc hoặc sự bằng nhau của các hình hình học.",
    usage: "Các nhà đại số viết G \\cong H cho hai nhóm đẳng cấu và V \\cong V^{**} cho các không gian hữu hạn chiều, còn hình học dùng \\triangle ABC \\cong \\triangle DEF cho hai tam giác bằng nhau. Một số sách vật lý và kỹ thuật dùng nó với nghĩa xấp xỉ bằng, nhưng \\approx rõ ràng hơn cho việc đó. Nó khác với \\simeq (một vạch, dùng cho tương đương đồng luân hoặc bằng nhau tiệm cận) và với \\equiv (ba vạch). Để ghi tên ánh xạ, hãy đặt nó lên trên ký hiệu bằng \\overset{\\phi}{\\cong} hoặc dùng một mũi tên như \\xrightarrow{\\sim}.",
  },
  "subset-or-equal": {
    name: "Tập con hoặc bằng",
    meaning: "Phát biểu rằng mọi phần tử của tập bên trái cũng thuộc tập bên phải; hai tập có thể bằng nhau.",
    usage: "Dùng \\subseteq cho quan hệ bao hàm cho phép bằng nhau, như A \\subseteq A, và trong các định nghĩa như một tô pô đóng với phép hợp các họ con \\mathcal{U} \\subseteq \\tau. Nhiều tác giả dùng \\subset trơn với cùng nghĩa, trong khi số khác dành \\subset cho bao hàm thực sự, nên nên nêu rõ quy ước của bạn. Để chỉ bao hàm thực sự không mơ hồ, hãy dùng \\subsetneq. Phủ định là \\nsubseteq hoặc \\not\\subseteq. Để chứng minh hai tập bằng nhau, một chứng minh chuẩn chỉ ra A \\subseteq B và B \\subseteq A.",
  },
  "proper-subset": {
    name: "Tập con thực sự",
    meaning: "Ký hiệu tập con có vạch bị gạch: tập bên trái chứa trong tập bên phải nhưng không bằng nó.",
    usage: "\\subsetneq phát biểu tường minh bao hàm thực sự, loại bỏ sự mơ hồ của \\subset, vốn được một số sách hiểu là không chặt. Nó xuất hiện trong các chuỗi như \\mathbb{N} \\subsetneq \\mathbb{Z} \\subsetneq \\mathbb{Q} và trong các lập luận về tính tối đại của iđêan. Các biến thể gồm \\subsetneqq (hai vạch có gạch chéo) và \\varsubsetneq, có nét gạch chỉ cắt qua vạch. Đừng nhầm nó với \\nsubseteq, nghĩa là hoàn toàn không phải tập con. Đối ứng cho tập cha là \\supsetneq. Đây là một quan hệ nên khoảng cách xung quanh được xử lý tự động. Khi chứng minh bao hàm là thực sự, hãy chỉ ra A \\subseteq B và nêu một phần tử của B nằm ngoài A.",
  },
  "superset": {
    name: "Tập cha",
    meaning: "Quan hệ tập cha: tập bên trái chứa tập bên phải (thường hiểu là chứa thực sự, tùy quy ước).",
    usage: "\\supset là ảnh gương của \\subset, nên A \\supset B nói rằng B nằm trong A. Giống \\subset, các tác giả không thống nhất việc nó có cho phép bằng nhau hay không; hãy nêu quy ước hoặc dùng \\supseteq và \\supsetneq để loại bỏ nghi ngờ. Các sách logic theo truyền thống cũ, kể cả Principia Mathematica, dùng \\supset cho phép kéo theo vật chất, nên bạn có thể gặp p \\supset q trong các bài triết học. Với bài viết mới, \\to hoặc \\implies rõ ràng hơn cho phép kéo theo. Phủ định là \\not\\supset, còn \\nsupseteq dành cho phiên bản không chặt.",
  },
  "superset-or-equal": {
    name: "Tập cha hoặc bằng",
    meaning: "Quan hệ tập cha hoặc bằng: tập bên trái chứa mọi phần tử của tập bên phải.",
    usage: "Đọc A \\supseteq B là A chứa B, có thể bằng nhau. Nó tự nhiên khi tập lớn hơn là chủ ngữ, như \\overline{A} \\supseteq A cho bao đóng hoặc \\ker f \\supseteq \\operatorname{im} g trong các lập luận về dãy khớp. Nó đơn giản là \\subseteq đọc theo chiều ngược lại, nên hãy chọn cách nào đặt tập quan trọng lên trước. Phiên bản chặt là \\supsetneq, và phủ định là \\nsupseteq. Trong lý thuyết dàn và thứ tự, nó cũng biểu thị thứ tự bao hàm ngược trên các họ tập hợp.",
  },
  "perpendicular": {
    name: "Dấu vuông góc",
    meaning: "Quan hệ vuông góc, chỉ các đường thẳng, vectơ hoặc không gian con trực giao, và sự độc lập của các biến.",
    usage: "Hình học viết AB \\perp CD, đại số tuyến tính viết u \\perp v khi \\langle u, v \\rangle = 0 và W^\\perp cho phần bù trực giao, còn lý thuyết số đôi khi dùng a \\perp b cho hai số nguyên nguyên tố cùng nhau. Các nhà xác suất viết X \\perp Y cho sự độc lập, thường lặp đôi thành X \\perp\\!\\!\\!\\perp Y để mô phỏng ký hiệu độc lập riêng. \\perp là quan hệ có khoảng trắng ở hai bên, còn \\bot có cùng hình dạng nhưng khoảng cách thường, phù hợp cho mệnh đề sai luôn trong logic hoặc phần tử nhỏ nhất. Ở chỉ số trên như W^\\perp, cả hai đều dùng được vì khoảng cách bị triệt tiêu ở đó.",
  },
  "parallel": {
    name: "Dấu song song",
    meaning: "Quan hệ “song song với”, cho đường thẳng, mặt phẳng hoặc vectơ; cũng là toán tử ghép song song.",
    usage: "Hình học viết \\ell_1 \\parallel \\ell_2, vật lý viết các thành phần như F_\\parallel (thường qua \\|), và kỹ thuật điện dùng R_1 \\parallel R_2 cho các điện trở mắc song song. Các phép tính tiến trình dùng nó cho phép ghép song song, P \\parallel Q. Glyph giống \\|, nhưng \\parallel có khoảng cách quan hệ, nên hãy dùng nó giữa các đối tượng và dùng \\| (hoặc \\lVert, \\rVert) làm dấu phân cách chuẩn. Phủ định của nó là \\nparallel. Với độ phân kỳ KL D(P \\parallel Q), khoảng cách quan hệ là chuẩn, dù một số người thích \\| hơn.",
  },
  "not-parallel": {
    name: "Dấu không song song",
    meaning: "Quan hệ song song bị phủ định, phát biểu rằng hai đường thẳng hoặc vectơ không song song.",
    usage: "\\nparallel vẽ một gạch chéo xuyên qua hai vạch và được dùng trong các bài hình học như \\ell_1 \\nparallel \\ell_2, ngụ ý các đường thẳng cắt nhau (trong mặt phẳng) hoặc chéo nhau (trong không gian). Đây là quan hệ có cùng khoảng cách như \\parallel. Viết \\not\\parallel có thể dùng được, nhưng gạch chéo chồng lên thường không chính giữa, nên glyph riêng trông đẹp hơn. Còn có \\nshortparallel, một biến thể ngắn hơn. Trong vật lý, thành phần không song song thường được viết bằng \\perp.",
  },
  "much-less-than": {
    name: "Dấu nhỏ hơn rất nhiều",
    meaning: "Quan hệ nhỏ hơn rất nhiều, nói rằng đại lượng bên trái nhỏ hơn đại lượng bên phải nhiều bậc độ lớn.",
    usage: "Vật lý và kỹ thuật dùng \\ll cho các chế độ xấp xỉ: v \\ll c cho chuyển động phi tương đối tính, hoặc x \\ll 1 để biện minh cho \\sin x \\approx x. Lý thuyết số giải tích dùng ký hiệu Vinogradov f \\ll g, nghĩa là f = O(g), và lý thuyết độ đo viết \\mu \\ll \\nu cho tính liên tục tuyệt đối. Đây là một glyph duy nhất, nên đừng gõ << hay < <, sẽ cho hai ký hiệu quan hệ rời nhau với khoảng cách sai. Phiên bản ba \\lll tồn tại cho bất đẳng thức còn mạnh hơn.",
  },
  "much-greater-than": {
    name: "Dấu lớn hơn rất nhiều",
    meaning: "Quan hệ lớn hơn rất nhiều, cho biết một đại lượng vượt xa đại lượng khác.",
    usage: "Dùng \\gg trong lập luận tiệm cận hoặc vật lý, như n \\gg 1 cho các xấp xỉ mẫu lớn, kT \\gg \\hbar\\omega cho giới hạn cổ điển, hoặc ký hiệu Vinogradov f \\gg g nghĩa là g = O(f). Đây là một ký hiệu với khoảng cách quan hệ; gõ >> tạo ra hai quan hệ rời nhau. Phiên bản mạnh hơn \\ggg cũng tồn tại. Vì \\gg không mang tính định lượng, các bài báo thường kèm theo một phát biểu chính xác, chẳng hạn n \\gg \\log(1/\\delta) cùng với hằng số liên quan. Các lập luận tiệm cận trong vật lý thường nêu chế độ một lần, ví dụ L \\gg \\lambda, rồi bỏ các số hạng nhỏ.",
  },
  "precedes": {
    name: "Quan hệ đứng trước",
    meaning: "Quan hệ đứng trước cho các thứ tự chặt không phải phép so sánh nhỏ hơn thông thường của số.",
    usage: "\\prec biểu diễn các thứ tự chặt trừu tượng: sự ưu tiên trong kinh tế học (x \\prec y nghĩa là y được ưu tiên hẳn), quan hệ trội hóa trong giải tích ma trận, thứ tự trội trên các phân hoạch, và quan hệ “xảy ra trước” trong hệ phân tán. Hình dạng cong của nó báo hiệu rằng thứ tự không phải dấu < của số. Phiên bản không chặt là \\preceq, và \\preccurlyeq cho biến thể vạch cong được một số sách ưa dùng. Đại số tuyến tính viết A \\prec B cho thứ tự Loewner, nghĩa là B - A xác định dương. Phủ định gồm \\nprec.",
  },
  "succeeds": {
    name: "Quan hệ đứng sau",
    meaning: "Quan hệ đứng sau, ngược với \\prec, cho các thứ tự chặt trừu tượng.",
    usage: "\\succ đọc là “đứng sau” hoặc “được ưu tiên hơn”: trong kinh tế học vi mô, x \\succ y nghĩa là x được ưu tiên hẳn so với y, và trong giải tích ma trận A \\succ 0 phát biểu rằng A xác định dương (thứ tự Loewner). Các bài báo tối ưu hóa dùng nó trong ràng buộc nửa xác định. Đây là ký hiệu quan hệ nên khoảng cách được đặt tự động. Dạng không chặt là \\succeq, dạng vạch cong \\succcurlyeq, và phủ định \\nsucc. Tránh dùng > cho các thứ tự này, vì người đọc sẽ hiểu đó là so sánh số.",
  },
  "precedes-or-equal": {
    name: "Quan hệ đứng trước hoặc bằng",
    meaning: "Quan hệ đứng trước hoặc bằng, phiên bản không chặt của \\prec cho thứ tự bộ phận và thứ tự ưu tiên.",
    usage: "Lý thuyết thứ tự viết x \\preceq y cho một thứ tự bộ phận tổng quát, giữ \\le cho các số. Các nhà kinh tế dùng nó cho sự ưu tiên yếu, và các nhà giải tích ma trận viết A \\preceq B khi B - A nửa xác định dương. Trong tối ưu lồi, bất đẳng thức suy rộng x \\preceq_K y dùng chỉ số dưới cho nón. \\preccurlyeq trông tương tự, với vạch dưới cong, và một số tác giả chọn nó để tránh nhầm với \\leq. Chiều ngược lại là \\succeq, và \\npreceq là phủ định của nó.",
  },
  "succeeds-or-equal": {
    name: "Quan hệ đứng sau hoặc bằng",
    meaning: "Quan hệ đứng sau hoặc bằng, thường gặp nhất trong A \\succeq 0 cho ma trận nửa xác định dương.",
    usage: "Ràng buộc của quy hoạch nửa xác định được viết X \\succeq 0, nghĩa là X là ma trận đối xứng nửa xác định dương, và thứ tự Loewner so sánh các ma trận theo A \\succeq B. Các nhà kinh tế dùng \\succeq cho sự ưu tiên yếu, đọc là “ít nhất cũng tốt bằng”. Đây là quan hệ với khoảng cách chuẩn. Phiên bản chặt là \\succ, biến thể cong \\succcurlyeq, và phủ định \\nsucceq. Với so sánh số, hãy giữ \\geq để người đọc không tìm kiếm một thứ tự phi chuẩn. Trong một bài toán quy hoạch nửa xác định, ràng buộc thường được liệt kê trên một dòng riêng sau s.t.",
  },
  "asymptotic": {
    name: "Dấu tương đương tiệm cận",
    meaning: "Quan hệ tương đương tiệm cận: hai hàm tăng cùng tốc độ, sai khác các hằng số nhân.",
    usage: "Trong giải tích và lý thuyết số, f \\asymp g nghĩa là tồn tại các hằng số c, C > 0 sao cho c g \\le f \\le C g với đối số đủ lớn, tương đương với f = \\Theta(g) trong khoa học máy tính. Nó yếu hơn f \\sim g, vốn đòi hỏi tỉ số tiến tới 1. Glyph này, một cặp cung đối nhau, không nên nhầm với \\approx hay với \\smile và \\frown. Đây là một quan hệ nên khoảng cách được đặt tự động. Một số sách vật lý cũng dùng nó lỏng lẻo với nghĩa bằng nhau tiệm cận, nên hãy định nghĩa nó nếu cần chính xác.",
  },
  "defined-as": {
    name: "Dấu định nghĩa hai chấm bằng",
    meaning: "Dấu hai chấm bằng, phép gán định nghĩa: vế trái được định nghĩa bằng vế phải.",
    usage: "Viết f(x) := x^2 + 1 đánh dấu một định nghĩa thay vì một khẳng định về đẳng thức, và dấu hai chấm nằm về phía đối tượng đang được định nghĩa (=: đảo ngược chiều). Khi gõ trực tiếp, dấu hai chấm và dấu bằng đều là quan hệ, nên TeX đặt chúng sát nhau không có khoảng trắng, nhưng dấu hai chấm không được căn giữa theo chiều dọc với dấu bằng, điều làm phiền một số nhà in ấn. Lệnh \\coloneqq từ một gói công cụ toán học khắc phục việc căn chỉnh đó. Trong mã giả, nó cũng chỉ phép gán, x := x + 1. Các lựa chọn khác gồm \\triangleq và \\stackrel{\\text{def}}{=}.",
  },
  "triangle-equal": {
    name: "Dấu bằng có tam giác",
    meaning: "Dấu bằng có một tam giác nhỏ phía trên, đọc là “được định nghĩa là”.",
    usage: "Các bài báo xử lý tín hiệu, lý thuyết điều khiển và lý thuyết thông tin thường ưa dùng \\triangleq cho định nghĩa, như trong H(X) \\triangleq -\\sum p(x) \\log p(x). Nó đóng vai trò giống := nhưng đối xứng, nên không cho biết vế nào là mới. Một số người đọc thấy nó lạ, nên hãy nêu quy ước một lần trong phần ký hiệu. Các lựa chọn khác gồm \\stackrel{\\text{def}}{=} hoặc \\overset{\\mathrm{def}}{=}, và \\equiv trong vật lý. Đây là một quan hệ nên khoảng cách được đặt tự động. Hãy giải thích rõ quy ước cho bất kỳ người đọc nào ngoài lĩnh vực của bạn.",
  },
};

export default text;
