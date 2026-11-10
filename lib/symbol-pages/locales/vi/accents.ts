import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/accents/<slug>. */
const text: SymbolPageTranslations = {
  "hat": {
    name: "Dấu mũ",
    meaning: "Đặt một dấu mũ nhỏ lên trên một ký tự, dùng để ký hiệu ước lượng, vectơ đơn vị hoặc biến đổi Fourier.",
    usage: "Trong thống kê, \\hat{\\theta} là ước lượng của \\theta và \\hat{y} là giá trị dự báo trong hồi quy; nhà vật lý dùng \\hat{x} hoặc \\hat{\\mathbf{n}} cho vectơ đơn vị và toán tử lượng tử; trong giải tích, \\hat{f} là biến đổi Fourier của f. Dấu này có độ rộng cố định nên chỉ đẹp khi đặt trên một ký hiệu; với nhiều chữ cái hãy chuyển sang \\widehat{xy}. Trên chữ i hoặc j, hãy dùng dạng không chấm \\imath và \\jmath để dấu mũ không chồng lên dấu chấm. Trong văn bản thường ngoài chế độ toán, dấu mũ tương ứng là \\^{o}, không phải \\hat.",
  },
  "wide-hat": {
    name: "Dấu mũ rộng",
    meaning: "Kéo giãn dấu mũ phủ lên một biểu thức gồm nhiều chữ, chẳng hạn biến đổi Fourier của một tích.",
    usage: "Dùng \\widehat khi dấu phải phủ nhiều hơn một ký tự, ví dụ \\widehat{f * g} = \\hat{f}\\,\\hat{g} cho tích chập, \\widehat{ABC} để chỉ góc trong một số truyền thống hình học, hoặc \\widehat{G} cho nhóm đối ngẫu hay bao đủ của một nhóm. Trong phông Computer Modern chuẩn, dấu mũ chỉ giãn đến một độ rộng giới hạn, nên trên biểu thức dài nó ngừng giãn và trông quá nhỏ; khi đó một chỉ số trên như (f g)^\\wedge hoặc toán tử \\mathcal{F}\\{\\cdot\\} sẽ dễ đọc hơn. Với một chữ cái duy nhất, nên dùng \\hat{x}, vốn được căn vị trí chính xác hơn trên chữ nghiêng.",
  },
  "tilde": {
    name: "Dấu ngã",
    meaning: "Đặt một dấu ngã nhỏ lượn sóng lên trên một ký hiệu, thường để chỉ giá trị xấp xỉ, phép biến đổi hoặc biến đã được điều chỉnh.",
    usage: "Dấu ngã trên một chữ cái thường báo hiệu một đối tượng liên quan nhưng đã bị thay đổi: \\tilde{x} cho nghiệm nhiễu hoặc nghiệm xấp xỉ, \\tilde{f} cho biến đổi Laplace hay một phép biến đổi khác, \\tilde{O}(n) cho độ phức tạp O mềm bỏ qua các thừa số logarit, hoặc \\tilde{X} cho phủ phổ dụng trong tô pô. Giống \\hat, dấu này có độ rộng cố định, nên trên hai chữ cái trở lên hãy dùng \\widetilde. Đừng nhầm với \\sim, một ký hiệu quan hệ đặt giữa các số hạng (X \\sim N(0,1)), cũng như với dấu ngã của chế độ văn bản \\~{n} dùng cho các từ như señor. Với chữ không chấm, hãy viết \\tilde{\\imath}.",
  },
  "wide-tilde": {
    name: "Dấu ngã rộng",
    meaning: "Vẽ một dấu ngã co giãn trên một nhóm ký hiệu, dùng cho không gian phủ, bao đóng và các biểu thức đã điều chỉnh.",
    usage: "Chọn \\widetilde khi dấu ngã phải trải qua nhiều ký tự, như \\widetilde{GL}_n cho nhóm phủ, \\widetilde{AB} cho cung tròn trong một số sách hình học, hoặc \\widetilde{f(x)} cho hàm đã được làm trơn. Độ rộng của nó tăng theo nội dung nhưng chỉ đến một giới hạn tùy phông, sau đó dấu đứng yên ở giữa và trông ngắn; với đối số dài, ký hiệu hậu tố hoặc một toán tử có tên sẽ rõ hơn. Trên một chữ cái, \\tilde{x} cho vị trí tốt hơn và dấu nhỏ gọn hơn. Khi cần dấu ngã như một ký tự độc lập trong văn bản, lệnh nên dùng là \\textasciitilde.",
  },
  "dot": {
    name: "Dấu chấm trên",
    meaning: "Thêm một dấu chấm trên một biến, ký hiệu Newton cho đạo hàm cấp một theo thời gian.",
    usage: "Trong cơ học và hệ động lực, \\dot{x} nghĩa là dx/dt, nhờ đó các phương trình như \\dot{x} = Ax hay hàm Lagrange L(q, \\dot{q}, t) được viết gọn. Nhà vật lý cũng dùng nó cho các tốc độ biến thiên, như \\dot{m} cho lưu lượng khối lượng. Dấu chấm là một dấu thanh toán học và dùng được cả trên chữ Hy Lạp: \\dot{\\theta}. Đừng nhầm với \\cdot (dấu chấm nhân ở giữa dòng) hay với dấu chế độ văn bản \\.{z} trong các từ tiếng Ba Lan. Với đạo hàm cấp hai, hãy dùng \\ddot{x} thay vì chồng hai lệnh \\dot, vốn làm lệch các dấu chấm.",
  },
  "double-dot": {
    name: "Dấu hai chấm trên",
    meaning: "Đặt hai dấu chấm trên một biến để ký hiệu đạo hàm cấp hai theo thời gian, như gia tốc.",
    usage: "Định luật II Newton thường được viết m\\ddot{x} = F, và dao động tử điều hòa là \\ddot{x} + \\omega^2 x = 0. Trong cơ học Lagrange, các phương trình Euler-Lagrange sinh ra các số hạng \\ddot{q}. Dù trông giống dấu umlaut, \\ddot là một dấu thanh toán học; với các từ tiếng Đức hay tiếng Thổ Nhĩ Kỳ trong văn bản, hãy dùng \\\"{o}. Các dấu chấm được căn giữa theo trục nghiêng của ký hiệu, nên trên chữ nghiêng chúng lệch nhẹ sang phải, và đó là chủ ý. Với đạo hàm cấp ba có \\dddot{x}, nhưng cao hơn nữa thì ký hiệu Leibniz hoặc x^{(n)} rõ ràng hơn.",
  },
  "triple-dot": {
    name: "Dấu ba chấm trên",
    meaning: "Đặt ba dấu chấm trên một biến, ký hiệu kiểu Newton cho đạo hàm cấp ba theo thời gian, tức độ giật.",
    usage: "Đạo hàm cấp ba xuất hiện trong hoạch định chuyển động và điều khiển, nơi \\dddot{x} là độ giật, và trong lực phản lực bức xạ Abraham-Lorentz tỉ lệ với \\dddot{\\mathbf{x}}. Lệnh này đi kèm \\ddddot cho bốn chấm, và cả hai đều không thuộc nhân LaTeX tối thiểu. Các dấu chấm của nó được xếp sát hơn so với ba lệnh \\dot gõ tay, và nằm cùng độ cao với \\ddot. Vì ba dấu chấm khó đọc ở cỡ chữ nhỏ hoặc trong chỉ số dưới, nhiều tác giả chuyển sang x^{(3)} hoặc d^3x/dt^3 cho các cấp cao hơn.",
  },
  "bar": {
    name: "Dấu gạch ngang ngắn phía trên",
    meaning: "Đặt một vạch ngang ngắn trên một ký hiệu, thường cho trung bình mẫu hoặc số phức liên hợp.",
    usage: "Thống kê dùng \\bar{x} cho trung bình mẫu, (1/n)\\sum x_i; giải tích phức viết \\bar{z} cho số liên hợp; và \\bar{A} có thể ký hiệu bao đóng của một tập hợp. Vạch này có độ rộng cố định cỡ một chữ cái, nên \\bar{xy} trông sai: hãy dùng \\overline{xy} để phủ nhiều ký hiệu, đây cũng là lựa chọn thông dụng khi lấy liên hợp một biểu thức như \\overline{z + w}. Trong văn bản, dấu macron là \\={a}, không phải \\bar. Vectơ in đậm cũng nhận dấu này bình thường: \\bar{\\mathbf{v}}.",
  },
  "overline": {
    name: "Đường kẻ trên",
    meaning: "Vẽ một đường kẻ phía trên toàn bộ biểu thức, dùng cho số liên hợp, bao đóng, số thập phân tuần hoàn hoặc tên đoạn thẳng.",
    usage: "Khác với \\bar, đường kẻ \\overline giãn ra hết chiều rộng của đối số, nên phù hợp cho \\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2, bao đóng \\overline{A \\cup B}, phép phủ định Boole \\overline{A + B}, đoạn thẳng \\overline{AB}, và số thập phân tuần hoàn như 0.\\overline{3}. Các đường kẻ lồng nhau xếp ở độ cao tăng dần, có thể trông không đều khi đứng cạnh nhau; thêm \\vphantom của nội dung cao nhất vào mỗi biểu thức giúp căn thẳng chúng. Trong chế độ văn bản không có sẵn đường kẻ trên; hãy bọc nó trong chế độ toán. Lệnh tương ứng để gạch dưới là \\underline.",
  },
  "underline": {
    name: "Gạch chân",
    meaning: "Vẽ một đường kẻ bên dưới biểu thức, dùng để nhấn mạnh, chỉ cận dưới hoặc tích phân dưới.",
    usage: "Trong toán học, \\underline được dùng cho tích phân Darboux dưới, giới hạn dưới \\underline{\\lim}, cận dưới, và để đánh dấu các phần tử đặc biệt; một số ngành gạch chân vectơ thay vì in đậm. Lệnh hoạt động ở cả chế độ văn bản lẫn chế độ toán, nhưng trong văn bản nó tắt việc ngắt âm tiết và ngắt dòng, nên không phù hợp để nhấn mạnh từ ngữ, khi đó nên dùng \\emph. Độ sâu của đường kẻ phụ thuộc vào phần chân chữ, nên \\underline{a} và \\underline{y} nằm ở độ cao khác nhau; thêm \\vphantom{y} vào mỗi biểu thức sẽ căn thẳng chúng. Lệnh song sinh phía trên là \\overline.",
  },
  "vector-arrow": {
    name: "Mũi tên vectơ",
    meaning: "Đặt một mũi tên nhỏ hướng sang phải lên trên một chữ cái để đánh dấu nó là vectơ.",
    usage: "Vật lý phổ thông và nhiều sách kỹ thuật viết vectơ là \\vec{F}, \\vec{v} hoặc \\vec{r}, trong khi toán học thuần túy thường dùng chữ đậm \\mathbf{v} hoặc chữ thường. Mũi tên có kích thước cố định dành cho một ký tự; trên hai điểm như AB nó trông chật chội, nên hãy dùng \\overrightarrow{AB}. Trên chữ nghiêng, mũi tên hơi lệch phải so với tâm để theo độ nghiêng của chữ. Kết hợp với dấu mũ cho vectơ đơn vị (\\hat{\\vec{x}}) vẫn được nhưng chồng khá cao, nên nhiều người viết \\hat{\\mathbf{x}}.",
  },
  "wide-vector": {
    name: "Mũi tên vectơ rộng",
    meaning: "Kéo giãn một mũi tên hướng phải trên đối số, ký hiệu chuẩn cho vectơ đi từ A đến B.",
    usage: "Hình học và đại số vectơ dùng \\overrightarrow{AB} cho vectơ từ điểm A đến điểm B, cho các đẳng thức như \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}. Mũi tên giãn rộng theo nội dung, khác với \\vec chỉ vừa một chữ cái. Trong lý thuyết phạm trù và giải tích hàm, đôi khi nó chỉ hướng của một giới hạn hoặc một tập định hướng. Mũi tên được vẽ ở chiều cao đầy đủ nên chiếm thêm khá nhiều khoảng dọc; trong văn bản cùng dòng có khoảng cách dòng hẹp, hãy cân nhắc \\vec{v} hoặc chữ đậm. Dùng \\overleftarrow cho chiều ngược lại.",
  },
  "left-vector": {
    name: "Mũi tên vectơ hướng trái",
    meaning: "Vẽ một mũi tên hướng trái phủ trên đối số, chỉ chiều ngược lại hoặc một dãy đọc theo chiều ngược.",
    usage: "Ít gặp hơn mũi tên hướng phải, \\overleftarrow{AB} xuất hiện khi vectơ hay đường đi được đọc từ B về A, cho từ hoặc chuỗi đảo ngược trong lý thuyết ngôn ngữ hình thức, và cho các đại lượng ngược thời gian hoặc liên hợp trong vật lý. Mũi tên giãn hết chiều rộng của đối số giống như \\overrightarrow. Nếu cần mũi tên nằm dưới biểu thức, gói amsmath cung cấp \\underleftarrow và \\underrightarrow. Với vectơ ngược một chữ cái không có dạng ngắn dựng sẵn như \\vec, nên lệnh rộng này là lựa chọn thông dụng.",
  },
  "line-arrow-over-ab": {
    name: "Mũi tên hai chiều phía trên",
    meaning: "Vẽ một mũi tên hai đầu trên đối số, ký hiệu thông dụng cho đường thẳng đi qua hai điểm A và B.",
    usage: "Hình học phổ thông phân biệt ba đối tượng dựng từ hai điểm: \\overline{AB} cho đoạn thẳng, \\overrightarrow{AB} cho tia, và \\overleftrightarrow{AB} cho đường thẳng vô hạn. Mũi tên giãn theo nội dung và có đầu nhọn ở cả hai phía. Đôi khi nó cũng được dùng cho quan hệ hai chiều hoặc giới hạn hai phía. Vì khá cao, nó có thể chạm vào dòng phía trên trong đoạn văn dày đặc; công thức hiển thị riêng dòng sẽ tránh được điều này. Phiên bản mũi tên phía dưới tương ứng là \\underleftrightarrow. Hãy nhớ phân biệt với \\overline{AB}, vốn chỉ đoạn thẳng hữu hạn.",
  },
  "acute": {
    name: "Dấu sắc",
    meaning: "Đặt một dấu sắc (nét đi lên) trên một ký hiệu toán học, đôi khi dùng như một dấu đánh dấu tương tự dấu phẩy trên.",
    usage: "Các dấu thanh của chế độ toán như \\acute chủ yếu tồn tại cho đầy đủ; trong thực tế chúng xuất hiện như trang trí cho biến, ví dụ \\acute{x} cho tọa độ đã biến đổi trong một số sách vật lý. Với chữ có dấu trong từ ngữ, hãy dùng dấu văn bản \\'{e}, như trong café; \\acute không hoạt động ngoài chế độ toán. Phiên bản toán dùng phông nghiêng toán học, nên \\acute{e} trong phương trình không khớp với chữ đứng có dấu trong đoạn văn xung quanh. Nếu chỉ cần một dấu kiểu đạo hàm, x' (dấu phẩy trên) chuẩn mực hơn nhiều.",
  },
  "grave": {
    name: "Dấu huyền",
    meaning: "Đặt một dấu huyền (nét đi xuống) trên một ký hiệu trong chế độ toán như một trang trí cho biến.",
    usage: "\\grave là bản chế độ toán của dấu văn bản \\`{a} gặp trong các từ tiếng Pháp như voilà. Trong phương trình nó hiếm khi được dùng và chỉ là một cách nữa để phân biệt các biến liên quan, bên cạnh dấu phẩy trên, dấu mũ và dấu ngã. Vì là dấu thanh toán học, nó in đối số bằng chữ nghiêng toán học; với một từ có dấu trong phương trình, hãy viết \\text{\\`{a}}. Nếu đang chọn trang trí cho một biến mới, người đọc thường quen thuộc hơn với \\tilde, \\hat hoặc dấu phẩy trên.",
  },
  "breve": {
    name: "Dấu trăng",
    meaning: "Thêm một dấu trăng (đường cong nhỏ hình chén) trên một ký hiệu, một kiểu trang trí biến ít gặp.",
    usage: "Trong toán học, \\breve{x} xuất hiện như một dấu thay thế khi dấu mũ, gạch ngang và dấu ngã đã được dùng hết, ví dụ trong một số bài báo xử lý tín hiệu và thống kê cho một ước lượng đã điều chỉnh, và trong ký hiệu của lý thuyết Lie. Dấu trăng tròn ở đáy, khác với \\check có đáy nhọn. Với văn bản tiếng Romania hay tiếng Thổ Nhĩ Kỳ (ă, ğ), hãy dùng dấu văn bản \\u{a} thay cho lệnh toán học. Dấu có độ rộng cố định nên chỉ vừa với một chữ cái.",
  },
  "check": {
    name: "Dấu caron",
    meaning: "Đặt một dấu caron (háček), dấu nhỏ hình chữ v, trên một ký hiệu; đáng chú ý là dùng cho đối đồng điều Čech.",
    usage: "Tô pô đại số viết \\check{H}^n(X) cho đối đồng điều Čech, và một số sách dùng \\check{x} cho đối tượng đối ngẫu hoặc biến đổi ngược, trái với dấu mũ. Hình chữ v phân biệt nó với \\breve có đáy tròn và với \\hat vốn là chữ v lộn ngược. Trong văn bản, dấu háček của tiếng Séc như č được tạo bằng \\v{c}, không phải \\check. Dấu có độ rộng cố định; LaTeX lõi không có lệnh \\widecheck chuẩn, nên trên biểu thức dài các tác giả dùng chỉ số trên thay thế.",
  },
  "ring": {
    name: "Dấu vòng tròn phía trên",
    meaning: "Đặt một vòng tròn nhỏ trên một ký hiệu, dùng cho phần trong của tập hợp và một số ký hiệu đơn vị.",
    usage: "Tô pô đôi khi viết \\mathring{A} cho phần trong của A (thay cho A^\\circ hoặc \\operatorname{int} A), và hình học vi phân dùng nó cho các đại lượng có vết bằng không hoặc đại lượng tham chiếu. Với ký hiệu ångström trong văn bản hãy dùng \\AA, và với chữ å của các ngôn ngữ Bắc Âu hãy dùng \\aa; \\mathring chỉ dành cho chế độ toán. Nó khác với chỉ số trên \\circ, vốn nằm ở góc trên bên phải chứ không ở chính giữa phía trên. Vòng tròn có kích thước cho một chữ cái. Trên chữ i và j, hãy dùng \\imath hoặc \\jmath để vòng tròn thay thế dấu chấm.",
  },
  "overbrace": {
    name: "Ngoặc nhọn nằm ngang phía trên",
    meaning: "Vẽ một dấu ngoặc nhọn nằm ngang phía trên biểu thức, kèm nhãn tùy chọn đặt bằng chỉ số trên.",
    usage: "Ngoặc nhọn phía trên dùng để chú thích các phần của công thức, chẳng hạn ghi n bản sao trong \\overbrace{1 + 1 + \\cdots + 1}^{n}, hoặc đặt tên cho một số hạng trong quá trình suy luận. Chỉ số trên sau lệnh được đặt trên đỉnh của ngoặc, và bọc nhãn trong \\text giúp chữ đứng thẳng và có cỡ dễ đọc. Ngoặc chiếm nhiều chiều cao, nên thích hợp với công thức hiển thị riêng dòng; trong dòng văn bản nó sẽ đẩy các dòng xa nhau. Kết hợp với \\underbrace trên cùng biểu thức để chú thích cả trên lẫn dưới. Với ngoặc có nhãn ở bên cạnh, hãy dùng \\left\\{ ... \\right. thay thế.",
  },
  "underbrace": {
    name: "Ngoặc nhọn nằm ngang phía dưới",
    meaning: "Đặt một dấu ngoặc nhọn bên dưới biểu thức, kèm nhãn đặt bằng chỉ số dưới ngay bên dưới nó.",
    usage: "Sách giáo khoa dùng \\underbrace để giải thích các phần của một phương trình, như đánh dấu \\underbrace{\\frac{1}{2}mv^2}_{\\text{động năng}} trong cân bằng năng lượng hoặc đếm số thừa số trong một tích. Nhãn được viết dưới dạng chỉ số dưới ngay sau lệnh; dùng \\text cho chữ và nội dung \\scriptstyle cho biểu thức toán ngắn. Ngoặc giãn đúng bằng chiều rộng của đối số. Ngoặc lồng nhau hoặc chồng lấn cần cẩn thận: có thể đặt ngoặc dưới cho một phần của biểu thức đã có ngoặc trên, nhưng các ngoặc không được cắt nhau. Giống \\overbrace, nó phù hợp nhất với công thức hiển thị riêng dòng.",
  },
  "cancel": {
    name: "Gạch chéo triệt tiêu",
    meaning: "Gạch chéo qua một biểu thức để thể hiện các số hạng bị triệt tiêu trong quá trình biến đổi.",
    usage: "Giáo viên và bài giảng dùng \\cancel để minh họa việc rút gọn, ví dụ một thừa số bị giản ước trong phân số hoặc các số hạng đối nhau triệt tiêu trong một tổng. Cùng gói này còn có \\bcancel (gạch theo chiều ngược), \\xcancel (gạch chữ X qua số hạng) và \\cancelto{0}{x}, vẽ một mũi tên tới giá trị mà số hạng tiến đến. Màu nét gạch có thể đổi riêng với màu chữ, rất tiện cho trang chiếu. \\cancel cũng hoạt động trong chế độ văn bản, nhưng chủ yếu được dùng trong toán. Các bài báo khoa học hiếm khi trình bày sự triệt tiêu theo cách này; đây là một công cụ giảng dạy.",
  },
  "boxed-formula": {
    name: "Công thức đóng khung",
    meaning: "Vẽ một khung chữ nhật quanh biểu thức toán học, thường để làm nổi bật kết quả cuối cùng.",
    usage: "Học sinh đóng khung đáp số và tác giả làm nổi bật các đẳng thức quan trọng bằng \\boxed{E = mc^2}. Lệnh hoạt động bên trong chế độ toán, giữ nội dung ở kiểu hiển thị hoặc kiểu dòng tương ứng, khác với \\fbox chuyển sang chế độ văn bản và cần $...$ bên trong. Trong môi trường align, hãy đặt \\boxed quanh một vế hoặc toàn bộ nội dung một dòng, nhưng không vắt qua điểm căn chỉnh &. Khoảng đệm và độ dày nét khung tuân theo \\fboxsep và \\fboxrule, nên có thể điều chỉnh cục bộ. Với khung có màu, bước tiếp theo thường là \\fcolorbox bọc quanh công thức trong dòng.",
  },
};

export default text;
