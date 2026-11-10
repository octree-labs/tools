import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/latin/<slug>. */
const text: SymbolPageTranslations = {
  "o-with-umlaut-diaeresis": {
    name: "Chữ o có dấu tách âm (umlaut)",
    meaning: "Đặt hai dấu chấm lên chữ o, cho ra ö dưới dạng dấu trong chế độ toán; trong văn bản thường, cùng chữ cái này được viết \\\"o.",
    usage: "\\ddot là dấu dùng trong chế độ toán, nên \\ddot{o} cho chữ o nghiêng có hai chấm, phù hợp trong công thức nhưng không dùng cho từ ngữ. Với các từ tiếng Đức, Thụy Điển, Phần Lan, Thổ Nhĩ Kỳ hay Hungary như Köln hoặc Gödel, hãy dùng dấu văn bản \\\"{o} hoặc gõ trực tiếp ö trong mã nguồn UTF-8. Trong toán học và vật lý, \\ddot{x} là ký hiệu Newton cho đạo hàm cấp hai theo thời gian, và \\dddot{x} cho đạo hàm cấp ba. Phiên bản một chấm \\dot{x} chỉ đạo hàm cấp một. Viết \\ddot trong văn bản thường sẽ gây lỗi thiếu dấu đô la, một lỗi phổ biến của người mới khi sao chép tên có dấu.",
  },
  "o-with-grave-accent": {
    name: "Chữ o có dấu huyền",
    meaning: "Đặt dấu huyền lên chữ o, tạo ra ò dưới dạng dấu trong chế độ toán; với từ ngữ, dùng lệnh văn bản \\`o.",
    usage: "Dấu huyền đánh dấu trọng âm hoặc chất lượng nguyên âm trong tiếng Ý (però, città), tiếng Catalan và tiếng Việt, và xuất hiện trong các từ tiếng Pháp như où. Trong tài liệu, hãy viết những từ này bằng \\`{o} hoặc gõ trực tiếp chữ có dấu, vì \\grave chỉ hoạt động trong chế độ toán và đặt chữ cái ở kiểu nghiêng toán học. Việc dùng \\grave trong toán học rất hiếm; thỉnh thoảng một tác giả dùng nó để trang trí một biến khi \\hat, \\tilde và \\bar đã được dùng hết. Đừng nhầm dấu huyền với dấu sắc \\acute, vốn nghiêng theo chiều ngược lại.",
  },
  "o-with-acute-accent": {
    name: "Chữ o có dấu sắc",
    meaning: "Đặt dấu sắc lên chữ o, cho ra ó dưới dạng dấu trong chế độ toán; trong từ ngữ, dùng dạng văn bản \\'o.",
    usage: "Dấu sắc xuất hiện trong tiếng Tây Ban Nha (canción, José), tiếng Bồ Đào Nha, tiếng Ba Lan (ó trong Kraków), tiếng Iceland và tiếng Hungary. Với bất kỳ từ nào như vậy, hãy viết \\'{o} hoặc gõ trực tiếp ó, vì \\acute{o} chỉ hoạt động trong chế độ toán và cho ra chữ nghiêng. Trong toán học, \\acute là kiểu trang trí ít dùng, đôi khi để phân biệt một biến đã biến đổi. Lưu ý rằng dấu phẩy trên x' khác với dấu sắc. Chữ ő dài của tiếng Hungary dùng dấu sắc kép \\H{o}, không phải hai dấu sắc.",
  },
  "o-with-circumflex": {
    name: "Chữ o có dấu mũ",
    meaning: "Đặt dấu mũ lên chữ o, cho ra ô; trong toán học, cùng lệnh \\hat đánh dấu ước lượng và vectơ đơn vị.",
    usage: "Với các từ tiếng Pháp, Bồ Đào Nha hay tiếng Việt như hôtel hoặc côte, hãy dùng dấu văn bản \\^{o} hoặc gõ trực tiếp ô; \\hat chỉ hoạt động trong chế độ toán. Trong toán học, \\hat có mặt khắp nơi: \\hat{\\theta} cho ước lượng, \\hat{y} cho giá trị dự đoán, \\hat{\\mathbf{x}} cho vectơ đơn vị, \\hat{H} cho toán tử lượng tử, và \\hat{f} cho biến đổi Fourier. Với dấu phủ nhiều ký tự, hãy dùng \\widehat{AB}, lệnh có thể co giãn. Khi đặt dấu mũ lên i hoặc j, hãy dùng \\hat{\\imath} để bỏ dấu chấm.",
  },
  "o-with-tilde": {
    name: "Chữ o có dấu ngã",
    meaning: "Đặt dấu ngã lên chữ o, cho ra õ; là dấu trong chế độ toán, \\tilde cũng trang trí các biến như \\tilde{x}.",
    usage: "Trong tiếng Bồ Đào Nha (põe, Camões) và tiếng Estonia (õ là một chữ cái riêng), lệnh văn bản \\~{o} hoặc gõ trực tiếp õ là lựa chọn đúng trong văn xuôi. Trong chế độ toán, \\tilde đánh dấu một đại lượng đã biến đổi, xấp xỉ hoặc thay thế, như biến đã chuẩn hóa \\tilde{x} hay ký hiệu O mềm \\tilde{O}(n). Với đối số rộng, \\widetilde{AB} kéo giãn phủ toàn bộ biểu thức. Đừng nhầm dấu này với \\sim, quan hệ dấu ngã đứng riêng có nghĩa là “tuân theo phân phối” hoặc “tương đương tiệm cận với”. Dấu ngã trên chữ hoa có thể nằm cao, nên hãy kiểm tra khoảng cách dòng.",
  },
  "o-with-macron": {
    name: "Chữ o có dấu macron",
    meaning: "Đặt gạch macron lên chữ o, cho ra ō; cùng dấu \\bar này chỉ giá trị trung bình và số phức liên hợp trong toán học.",
    usage: "Dấu macron đánh dấu nguyên âm dài trong từ điển tiếng Latinh, cách phiên âm tiếng Nhật sang chữ Latinh (Tōkyō, Ōsaka), tiếng Māori và tiếng Hawaii; trong văn bản hãy dùng \\={o} hoặc gõ ō. Trong toán học, \\bar{x} là trung bình mẫu, \\bar{z} là số phức liên hợp, và \\bar{A} đôi khi là bao đóng hoặc phần bù. Gạch của \\bar có độ rộng ngắn cố định, nên với biểu thức dài hơn hãy dùng \\overline{A \\cup B}, lệnh phủ toàn bộ đối số. Một số tác giả ưu tiên \\overline ngay cả với một chữ cái để số phức liên hợp và bao đóng trông đồng nhất.",
  },
  "o-with-dot-above": {
    name: "Chữ o có dấu chấm trên",
    meaning: "Đặt một dấu chấm lên chữ o, cho ra ȯ; trong toán học, dấu \\dot là ký hiệu Newton cho đạo hàm theo thời gian.",
    usage: "Là một chữ cái, ȯ không phổ biến; nó xuất hiện trong một số hệ chuyển tự và trong tiếng Livonia. Trong văn bản hãy dùng dấu \\.{o} hoặc gõ trực tiếp ký tự, vì \\dot chỉ hoạt động trong chế độ toán. Trong vật lý và kỹ thuật, \\dot{x} chỉ dx/dt, nên vận tốc là \\dot{\\mathbf{r}} và một mô hình không gian trạng thái viết là \\dot{\\mathbf{x}} = A\\mathbf{x} + B\\mathbf{u}. Hai chấm, \\ddot{x}, cho đạo hàm cấp hai. Đừng nhầm dấu này với \\cdot, dấu chấm nhân nằm giữa trên trục toán, không phải phía trên chữ cái.",
  },
  "o-with-breve": {
    name: "Chữ o có dấu trăng",
    meaning: "Đặt dấu trăng, một hình chén nhỏ, lên chữ o, cho ra ŏ; với từ ngữ thì dùng dấu văn bản \\u{o}.",
    usage: "Dấu trăng đánh dấu nguyên âm ngắn trong thi luật tiếng Latinh và xuất hiện trong hệ chuyển tự McCune-Reischauer của tiếng Hàn, như trong Chŏng. Chữ ă của tiếng Rumani và tiếng Việt cùng chữ ğ của tiếng Thổ Nhĩ Kỳ dùng cùng dấu này trên các chữ cái khác. Trong văn xuôi, hãy viết \\u{o} hoặc gõ ŏ; \\breve chỉ hoạt động trong chế độ toán và đặt chữ cái ở kiểu nghiêng. Việc dùng trong toán học rất hiếm, thường chỉ như thêm một kiểu trang trí cho biến đã biến đổi sau dấu mũ và dấu ngã. Đừng nhầm dấu trăng với dấu háček \\check, vốn nhọn chứ không tròn.",
  },
  "o-with-caron-hacek": {
    name: "Chữ o có dấu móc ngược (háček)",
    meaning: "Đặt dấu caron hay háček lên chữ o, cho ra ǒ; trong văn xuôi, cùng dấu này được viết bằng \\v{o}.",
    usage: "Trong bính âm Hán ngữ, ǒ đánh dấu thanh ba, như trong wǒ, và dấu háček là trung tâm của chính tả tiếng Séc, tiếng Slovak và các ngôn ngữ Slav khác trên các chữ như č và š. Hãy dùng \\v{o} hoặc gõ ǒ trong văn bản; \\check là dấu cho chế độ toán. Các nhà toán học dùng \\check cho đối đồng điều Čech \\check{H}, biến đổi Fourier ngược \\check{f} và các đối tượng đối ngẫu. Nó có đầu nhọn, khác với dấu trăng tròn \\breve, và chĩa xuống, khác với dấu mũ \\hat. Với đối số rộng, \\widecheck không phải lệnh chuẩn, nên hãy chỉ dùng \\check cho một chữ cái.",
  },
  "o-with-double-acute": {
    name: "Chữ o có dấu sắc kép",
    meaning: "Viết chữ ő dài của tiếng Hungary với dấu sắc kép, một lệnh chế độ văn bản dùng cho tên như Erdős.",
    usage: "\\H là dấu văn bản, không phải dấu toán, nên hãy dùng trong văn xuôi hoặc bên trong \\text{...}; trong chế độ toán trơn, nó gây lỗi. Tiếng Hungary phân biệt ö với ő và ü với ű, nên tên nhà toán học là Erdős, không phải Erdös, và viết đúng trong danh mục tài liệu tham khảo là một phép lịch sự đáng thêm một lệnh. Trong BibTeX, hãy bọc dấu trong ngoặc nhọn, {\\H{o}}, để việc sắp xếp và đổi chữ hoa thường không làm hỏng nó. Đừng cố giả lập bằng hai dấu sắc.",
  },
  "o-with-cedilla": {
    name: "Chữ o có dấu cedilla",
    meaning: "Viết chữ o có móc cedilla bên dưới, một chữ cái hiếm mà LaTeX thường tạo bằng dấu văn bản \\c{o}.",
    usage: "Dấu cedilla quen thuộc qua chữ ç trong tiếng Pháp và tiếng Bồ Đào Nha, nhưng trên chữ o thì không phổ biến; nó xuất hiện trong chính tả tiếng Marshall và một vài hệ phiên âm. Gõ ký tự dựng sẵn bên trong \\text hoạt động trong nhiều trình hiển thị web, nhưng một bản dựng LaTeX cổ điển có thể không nhận ra dấu cedilla tổ hợp, nên \\c{o} trong văn bản là dạng mã nguồn đáng tin cậy. Đừng nhầm cedilla với ogonek, móc trên chữ ą và ę của tiếng Ba Lan, vốn quay theo chiều ngược lại và được viết bằng \\k. Cả hai đều không hoạt động trong chế độ toán nếu không có \\text.",
  },
  "o-with-dot-below": {
    name: "Chữ o có dấu chấm dưới (dấu nặng)",
    meaning: "Viết chữ o có dấu chấm bên dưới, ọ, dùng trong tiếng Yoruba và tiếng Việt, và được viết \\d{o} trong văn bản LaTeX.",
    usage: "Tiếng Yoruba dùng ọ như một nguyên âm riêng (như trong các từ Yorùbá như ọjọ́), còn tiếng Việt dùng dấu chấm dưới làm dấu thanh nặng. Trong mã nguồn LaTeX, dấu văn bản \\d{o} cho ra chữ cái này, và gõ trực tiếp ọ cũng hoạt động với phông có glyph đó. Giống các dấu văn bản khác, \\d không hợp lệ trong chế độ toán trơn; hãy bọc từ ngữ trong \\text. Đừng dùng \\dot, lệnh đặt dấu chấm phía trên và là dấu toán cho đạo hàm. Kết hợp các dấu thanh với dấu chấm dưới có thể cần một phông có glyph dựng sẵn.",
  },
  "o-with-underline": {
    name: "Chữ o gạch dưới",
    meaning: "Gạch dưới chữ o; trong toán học, \\underline đánh dấu vectơ, cận dưới hoặc ký hiệu được nhấn mạnh.",
    usage: "\\underline hoạt động trong cả chế độ văn bản và chế độ toán, và vẽ một đường kẻ dưới toàn bộ đối số, nên \\underline{o} cho chữ o được gạch dưới. Một số giáo trình kỹ thuật và cơ học dùng \\underline{u} cho vectơ thay vì chữ đậm, và các bài báo tối ưu hóa viết \\underline{x} cho cận dưới đi cặp với \\overline{x} cho cận trên. Trong chuyển tự, macron dưới là một dấu văn bản riêng, \\b{o}, ngắn hơn và nằm giữa bên dưới chữ cái. Để nhấn mạnh trong văn xuôi, hãy ưu tiên \\emph thay vì gạch dưới, vì gạch dưới không ngắt qua các dòng.",
  },
  "linked-o-o-two-o-s-joined-by-a-dash": {
    name: "Hai chữ o nối bằng gạch ngang",
    meaning: "Nối hai chữ o bằng một dấu trừ được kéo sát bởi các khoảng âm, mô phỏng một glyph o-o nối liền.",
    usage: "Cấu trúc này không phải là lệnh chuẩn: mỗi \\! chèn một khoảng hẹp âm, nên o\\!\\!-\\!\\!o kéo dấu trừ toán học sát vào cả hai chữ cái và kết quả trông như hai vòng tròn nối nhau. Vì được ghép trong chế độ toán, các chữ o là chữ nghiêng và khoảng cách phụ thuộc vào phông. Nếu bạn cần chữ ghép oo thời trung cổ hoặc một chữ cái lịch sử tương tự, một phông có ký tự đó sẽ gọn gàng hơn mẹo này. Để vẽ liên kết hay mối nối hình quả tạ, một công cụ vẽ sơ đồ thực thụ cho khả năng kiểm soát tốt hơn. Chỉ dùng nó cho hiệu ứng hình ảnh nhanh.",
  },
  "oe-ligature-lowercase": {
    name: "Chữ ghép oe (chữ thường)",
    meaning: "Viết chữ ghép œ thường dùng trong các từ tiếng Pháp như cœur và œuvre; trong LaTeX là \\oe.",
    usage: "Chính tả tiếng Pháp bắt buộc dùng chữ ghép trong các từ như sœur, cœur và œil, nên viết oe là lỗi chính tả chứ không chỉ là lựa chọn trình bày. Trong mã nguồn LaTeX, hãy dùng \\oe hoặc gõ trực tiếp œ; \\oe là lệnh văn bản, nên hãy dùng \\text bên trong công thức. Tiếng Anh dùng nó trong các cách viết cũ hoặc kiểu Anh như fœtus. Khác với chữ ghép ff hay fi mà TeX tự động tạo, œ là một chữ cái riêng và không bao giờ được tạo ra từ việc gõ oe. Hãy nhớ đặt một khoảng trắng sau \\oe, như trong c\\oe ur, hoặc dùng ngoặc nhọn như c{\\oe}ur.",
  },
  "oe-ligature-uppercase": {
    name: "Chữ ghép OE (chữ hoa)",
    meaning: "Viết chữ ghép hoa Œ dùng trong tiếng Pháp, như trong Œuvres complètes; trong LaTeX là \\OE.",
    usage: "Chữ Œ hoa xuất hiện ở đầu các từ tiếng Pháp và trong tiêu đề viết hoa toàn bộ, nên viết ŒUVRES chứ không phải OEUVRES. Hãy gõ trực tiếp ký tự hoặc dùng \\OE trong chế độ văn bản; trong công thức, nó phải nằm trong \\text. Trong tiêu đề chữ hoa nhỏ hoặc viết hoa, hãy kiểm tra rằng \\MakeUppercase chuyển \\oe thành \\OE, điều LaTeX làm đúng. Tránh nhầm với Æ, chữ ash, vốn dùng a thay vì o. Các cách viết tiếng Anh cũ như Œdipus cũng dùng chữ này.",
  },
  "ae-ligature-lowercase-ash": {
    name: "Chữ ghép ae (chữ thường)",
    meaning: "Viết chữ æ thường, gọi là ash, một chữ cái của tiếng Đan Mạch, Na Uy, Iceland và tiếng Anh cổ; trong LaTeX là \\ae.",
    usage: "Trong tiếng Đan Mạch và Na Uy, æ là một chữ cái đầy đủ trong bảng chữ cái, xếp sau z, nên không bao giờ được thay bằng ae trong tên riêng. Tiếng Anh dùng nó trong các cách viết cách điệu như encyclopædia và Cæsar, và ký hiệu IPA æ chỉ nguyên âm trong từ cat. Trong LaTeX hãy dùng \\ae hoặc gõ trực tiếp æ; đây là lệnh văn bản, nên hãy bọc nó trong \\text bên trong công thức. Tách chữ cái theo sau bằng ngoặc nhọn hoặc khoảng trắng, như trong \\ae{}ble. Nó khác với œ, chữ ghép o và e.",
  },
  "ae-ligature-uppercase": {
    name: "Chữ ghép AE (chữ hoa)",
    meaning: "Viết chữ Æ hoa, dạng hoa của ash dùng trong tiếng Đan Mạch, Na Uy, Iceland và tiếng Anh cổ.",
    usage: "Chữ Æ hoa mở đầu các từ tiếng Đan Mạch và Na Uy và xuất hiện trong các tên tiếng Anh cổ như Ælfred. LaTeX cung cấp \\AE trong chế độ văn bản, hoặc bạn có thể gõ trực tiếp Æ. Trong tiêu đề viết hoa toàn bộ, cơ chế chuyển chữ hoa của LaTeX tự động đổi \\ae thành \\AE. Danh mục tài liệu tham khảo có tên người Scandinavia nên giữ nguyên chữ cái này, vì quy tắc sắp xếp đặt nó gần cuối bảng chữ cái. Đừng nhầm với Œ, chữ ghép O và E thuộc chính tả tiếng Pháp. Gõ trực tiếp trong tệp UTF-8 là cách đơn giản nhất hiện nay.",
  },
  "a-with-ring-above": {
    name: "Chữ a có vòng tròn trên",
    meaning: "Viết å, chữ a có vòng tròn, một chữ cái của tiếng Thụy Điển, Đan Mạch, Na Uy và Phần Lan; trong văn bản LaTeX là \\aa.",
    usage: "Trong các ngôn ngữ Scandinavia, å là một nguyên âm riêng xếp ở cuối bảng chữ cái, như trong på hoặc Århus. LaTeX viết nó bằng \\aa hoặc dấu vòng tròn tổng quát \\r{a}, hoặc bạn có thể gõ trực tiếp å. Đây là các lệnh văn bản, nên hãy bọc chúng trong \\text khi ở trong công thức. Đừng dùng dấu toán \\mathring{a}, lệnh đặt vòng tròn lên chữ nghiêng toán học và dành cho những thứ như phần trong của một tập hợp. Phần mềm quản lý tài liệu tham khảo nên coi {\\aa} là một chữ cái duy nhất khi sắp xếp.",
  },
  "a-with-ring-above-angstrom": {
    name: "Chữ A hoa có vòng tròn trên (ångström)",
    meaning: "Viết chữ Å hoa, dùng trong các từ Scandinavia và làm ký hiệu của đơn vị ångström (10^{-10} m).",
    usage: "Các nhà vật lý và hóa học ghi độ dài liên kết và bước sóng theo ångström, như 1.54 Å, và lệnh \\AA của LaTeX cho đúng glyph trong chế độ văn bản. Trong công thức, hãy viết \\text{\\AA} hoặc một macro đơn vị chuyên dụng, vì \\AA một mình là lệnh văn bản. Là một chữ cái, nó mở đầu các địa danh Thụy Điển và Đan Mạch như Åland. Ký hiệu ångström riêng trong Unicode được chuẩn hóa về chính chữ cái này, nên dùng Å là đúng. Đặt một khoảng hẹp giữa số và đơn vị, như 1.54\\,\\text{Å}.",
  },
  "o-with-stroke-lowercase": {
    name: "Chữ o có gạch chéo (chữ thường)",
    meaning: "Viết ø, chữ o có gạch chéo của tiếng Đan Mạch, Na Uy và Faroe; trong LaTeX là lệnh văn bản \\o.",
    usage: "ø là một nguyên âm đầy đủ trong tiếng Đan Mạch và Na Uy, như trong København hay Søren Kierkegaard, và không được thay bằng o hoặc oe trong tên riêng. Hãy dùng \\o hoặc gõ trực tiếp ø; đây là lệnh văn bản, nên hãy dùng \\text trong công thức. Nó trông giống các ký hiệu tập rỗng \\emptyset và \\varnothing, và giống ký hiệu đường kính, nhưng đó là các ký tự khác với ý nghĩa khác, nên đừng mượn ø cho tập rỗng. Phiên âm ngữ âm cũng dùng ø cho một nguyên âm trước tròn môi.",
  },
  "o-with-stroke-uppercase": {
    name: "Chữ O có gạch chéo (chữ hoa)",
    meaning: "Viết chữ Ø hoa, như trong Øresund, chữ O gạch chéo hoa được viết \\O trong văn bản LaTeX.",
    usage: "Chữ Ø hoa mở đầu các từ tiếng Đan Mạch và Na Uy như Øresund và Østergaard. Trong LaTeX, hãy dùng \\O trong chế độ văn bản hoặc gõ trực tiếp Ø; \\O không được định nghĩa trong chế độ toán nếu không có \\text. Vì nó giống ký hiệu tập rỗng \\emptyset và ký hiệu đường kính, người ta dễ muốn dùng lại nó, nhưng đó là các ký tự riêng biệt và trình đọc màn hình cũng như công cụ tìm kiếm xử lý chúng khác nhau. Trong bảng chữ cái Na Uy và Đan Mạch, Ø được xếp sau Æ và trước Å.",
  },
  "l-with-stroke-lowercase": {
    name: "Chữ l có gạch chéo (chữ thường)",
    meaning: "Viết ł, chữ l có gạch của tiếng Ba Lan, phát âm như w trong tiếng Anh; trong văn bản LaTeX là \\l.",
    usage: "Tiếng Ba Lan dùng ł trong nhiều từ và tên thông dụng, như złoty, Wrocław và Łukasiewicz, nhà logic học đứng sau ký pháp Ba Lan. Trong mã nguồn LaTeX, hãy viết \\l hoặc gõ trực tiếp ł; đây là lệnh văn bản, nên hãy dùng \\text trong công thức. Khi một chữ cái theo ngay sau, hãy tách bằng ngoặc nhọn, như trong z\\l{}oty. Một số phông thiếu ł, điều có thể gây thiếu glyph mà không có cảnh báo, nên hãy kiểm tra tệp PDF. Nó khác với chữ lambda thường có gạch ƛ.",
  },
  "l-with-stroke-uppercase": {
    name: "Chữ L có gạch chéo (chữ hoa)",
    meaning: "Viết chữ Ł hoa, như trong Łódź, chữ L có gạch hoa của tiếng Ba Lan được viết \\L trong LaTeX.",
    usage: "Chữ Ł hoa mở đầu các tên như Łódź và Łukasiewicz, nên danh mục tài liệu tham khảo trích dẫn tác giả Ba Lan cần nó để viết đúng tên. Hãy dùng \\L trong chế độ văn bản, hoặc gõ trực tiếp Ł; bọc nó trong \\text khi ở trong công thức. Trong BibTeX hãy giữ nó trong ngoặc nhọn, {\\L}ukasiewicz, để việc đổi chữ hoa thường và sắp xếp hoạt động đúng. Đừng nhầm \\L với \\pounds, ký hiệu bảng Anh, một ký hiệu khác dù cả hai đều có gạch ngang trên hình dạng giống chữ L. Gõ trực tiếp Ł trong mã nguồn UTF-8 là cách đơn giản nhất với các cấu hình hiện đại.",
  },
  "dotless-i-math": {
    name: "Chữ i không chấm (chế độ toán)",
    meaning: "Cho chữ i nghiêng toán học không có dấu chấm, để các dấu như \\hat hoặc \\vec nằm trên nó mà không đụng dấu chấm.",
    usage: "Lý do chính để dùng \\imath là vị trí dấu: \\hat{\\imath} cho vectơ đơn vị i mũ trong vật lý mà không có dấu chấm dưới dấu mũ, còn \\hat{i} giữ nguyên dấu chấm. Nó cũng xuất hiện dưới dạng \\vec{\\imath} trong giải tích vectơ và đôi khi làm đơn vị ảo được trình bày riêng. Trong văn bản, chữ i không chấm là \\i, lệnh bạn dùng cho các từ tiếng Thổ Nhĩ Kỳ như ılık hoặc cho chữ i có dấu trong các bảng mã cũ. Đừng nhầm \\imath với \\iota, chữ cái Hy Lạp có hình dạng khác.",
  },
  "dotless-j-math": {
    name: "Chữ j không chấm (chế độ toán)",
    meaning: "Cho chữ j nghiêng toán học không có dấu chấm, dùng dưới các dấu như vectơ đơn vị j mũ.",
    usage: "Vật lý và kỹ thuật viết các vectơ đơn vị Descartes là \\hat{\\imath}, \\hat{\\jmath}, \\hat{k}, và \\jmath bỏ dấu chấm để dấu mũ nằm gọn gàng. Các kỹ sư điện dùng j cho đơn vị ảo đôi khi cũng đặt dấu lên nó. Trong chế độ văn bản, lệnh tương ứng là \\j. Không có lý do chuẩn nào để dùng \\jmath ở nơi khác khi không có dấu, nên hãy chỉ dùng nó cho các dạng có dấu. Lưu ý rằng \\vec{\\jmath} và \\hat{\\jmath} đặt dấu hơi khác nhau, nên hãy kiểm tra khoảng cách.",
  },
  "inverted-question-mark": {
    name: "Dấu chấm hỏi ngược",
    meaning: "Viết ¿, dấu chấm hỏi ngược mở đầu câu hỏi trong tiếng Tây Ban Nha; LaTeX cũng chấp nhận ?` cho ký tự này.",
    usage: "Tiếng Tây Ban Nha đặt ¿ ở đầu câu hỏi và ? ở cuối, như trong ¿Dónde está? Trong LaTeX, chữ ghép ?` (dấu chấm hỏi theo sau là dấu backtick) tạo ra dấu ngược với các phông chuẩn, và \\textquestiondown là lệnh có tên. Gõ trực tiếp ¿ cũng hoạt động với đầu vào UTF-8. Đây là ký tự văn bản, nên hãy đặt nó bên trong \\text khi ở trong công thức. Tiếng Galicia và tiếng Asturias cũng dùng nó, còn tiếng Catalan nhìn chung thì không. Vì ?` là chữ ghép, một dấu backtick lạc sau dấu chấm hỏi có thể vô tình tạo ra glyph ngược, nên hãy kiểm tra các câu kết thúc bằng câu hỏi mà theo sau là dấu trích dẫn.",
  },
  "inverted-exclamation-mark": {
    name: "Dấu chấm than ngược",
    meaning: "Viết ¡, dấu chấm than ngược mở đầu câu cảm thán trong tiếng Tây Ban Nha; LaTeX cũng chấp nhận !` cho ký tự này.",
    usage: "Tiếng Tây Ban Nha đặt câu cảm thán giữa ¡ và !, như trong ¡Hola!, và cách ghép cặp này áp dụng cả khi ở giữa câu. LaTeX tạo ra nó từ chữ ghép !` (dấu chấm than theo sau là dấu backtick) hoặc lệnh có tên \\textexclamdown, và gõ ¡ trong tệp UTF-8 cũng được. Trong công thức, nó phải nằm bên trong \\text. Đừng nhầm nó với chữ i thường hoặc với thanh dọc |, có thể trông giống nhau ở một số phông không chân. Giống như chữ ghép của dấu chấm hỏi, một chuỗi !` nguyên văn trong mã nguồn sẽ biến thành ¡, điều đôi khi khiến các tác giả trích dẫn mã bất ngờ.",
  },
};

export default text;
