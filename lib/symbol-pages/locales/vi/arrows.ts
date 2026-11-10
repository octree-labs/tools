import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/arrows/<slug>. */
const text: SymbolPageTranslations = {
  "left-arrow": {
    name: "Mũi tên trái",
    meaning: "Vẽ mũi tên đơn ngắn hướng sang trái, dùng cho phép gán trong thuật toán và ánh xạ viết ngược.",
    usage: "Mã giả viết phép gán là x \\leftarrow x + 1, và \\gets là bí danh có sẵn cho đúng mũi tên này, đọc tự nhiên hơn trong các đoạn thuật toán. Trong toán học, đôi khi nó biểu thị một ánh xạ viết từ phải sang trái, B \\leftarrow A, hoặc trong các sách cũ là giới hạn tiến tới từ bên phải. Các bài báo học máy dùng nó cho bước cập nhật tham số, \\theta \\leftarrow \\theta - \\eta g. Đây là quan hệ, nên TeX thêm khoảng trắng dày xung quanh. Với mũi tên dài hơn, dùng \\longleftarrow, còn mũi tên có nhãn thì dùng lệnh co giãn \\xleftarrow{text}.",
  },
  "right-arrow": {
    name: "Mũi tên phải",
    meaning: "Vẽ mũi tên đơn ngắn hướng sang phải, dùng cho khai báo hàm số, giới hạn và mũi tên phản ứng.",
    usage: "\\rightarrow có bí danh ngắn hơn là \\to, lựa chọn thường dùng trong f : A \\to B và trong giới hạn x \\to 0. Hãy dùng \\mapsto khi mô tả điều xảy ra với một phần tử, như x \\mapsto x^2. Trong logic, p \\rightarrow q là phép kéo theo vật chất, khác với mũi tên kép \\Rightarrow dùng giữa các mệnh đề. Các nhà hóa học viết phản ứng đơn giản bằng nó, và các nhà lý thuyết đồ thị dùng nó cho cạnh có hướng u \\rightarrow v. Khi cần nhãn phía trên mũi tên, lệnh co giãn \\xrightarrow{\\text{label}} sẽ dài ra cho vừa.",
  },
  "up-arrow": {
    name: "Mũi tên lên",
    meaning: "Vẽ mũi tên hướng lên, dùng cho giới hạn tăng, spin lên, khí thoát ra và ký hiệu Knuth.",
    usage: "Giải tích viết x_n \\uparrow x cho một dãy tăng dần tới giới hạn, như trong định lý hội tụ đơn điệu. Vật lý dùng nó cho spin lên, |\\uparrow\\rangle, còn hóa học đánh dấu khí thoát ra khỏi phản ứng bằng mũi tên lên sau sản phẩm. Ký hiệu mũi tên lên của Knuth cho các số khổng lồ viết 3 \\uparrow\\uparrow 3 cho lũy thừa lặp. \\uparrow cũng hoạt động như một dấu phân cách, nên \\big\\uparrow hoặc \\left\\uparrow ... \\right. tạo ra phiên bản cao hơn. Mũi tên thân kép \\Uparrow là một ký hiệu riêng.",
  },
  "long-left-arrow": {
    name: "Mũi tên trái dài",
    meaning: "Vẽ mũi tên đơn dài hướng sang trái, phiên bản kéo dài của \\leftarrow cho các ánh xạ rộng hoặc cần nhấn mạnh.",
    usage: "\\longleftarrow là mũi tên dài có độ dài cố định, khoảng gấp đôi \\leftarrow, ghép từ dấu trừ và đầu mũi tên. Nó hữu ích khi mũi tên nối giữa các biểu thức dài hoặc trong sơ đồ dãy khớp viết trong dòng từ phải sang trái. Với chữ phía trên mũi tên, lệnh co giãn \\xleftarrow{f} tốt hơn vì nó dài ra theo nhãn. Phép gán trong thuật toán thường dùng \\gets ngắn hơn. Đối tác thân kép của nó là \\Longleftarrow, nền tảng của ký hiệu “được kéo theo bởi” \\impliedby.",
  },
  "long-right-arrow": {
    name: "Mũi tên phải dài",
    meaning: "Vẽ mũi tên đơn dài hướng sang phải, thường dùng cho khẳng định hội tụ và mũi tên giữa các biểu thức dài.",
    usage: "Người viết dùng \\longrightarrow khi \\to ngắn trông chật chội, chẳng hạn trong a_n \\longrightarrow L hoặc giữa hai số hạng dài trong một phép rút gọn. Có thể thêm điều kiện dưới mũi tên bằng \\xrightarrow[n \\to \\infty]{}, lệnh kéo dài theo nhãn, hoặc bằng \\underset{n\\to\\infty}{\\longrightarrow}. Hóa học dùng mũi tên dài cho các phản ứng có điều kiện ghi phía trên. Đây là ký hiệu có độ dài cố định, khác với các mũi tên co giãn. Phiên bản kép là \\Longrightarrow, chính là thứ \\implies in ra kèm khoảng trắng bổ sung.",
  },
  "down-arrow": {
    name: "Mũi tên xuống",
    meaning: "Vẽ mũi tên hướng xuống, dùng cho giới hạn giảm, spin xuống, kết tủa và phép rút gọn bước lớn.",
    usage: "Một dãy giảm dần tới giới hạn được viết x_n \\downarrow x, và giới hạn một phía xuất hiện dưới dạng t \\downarrow 0. Các nhà vật lý viết spin xuống là |\\downarrow\\rangle, còn các nhà hóa học đặt mũi tên sau chất rắn kết tủa. Trong lý thuyết miền và ngữ nghĩa ngôn ngữ lập trình, e\\downarrow nghĩa là một phép tính hội tụ. Giống \\uparrow, nó là dấu phân cách, nên \\Big\\downarrow cho mũi tên cao hơn, tiện cho các phác thảo sơ đồ dọc. Phiên bản thân kép là \\Downarrow. Một số sách tô pô và lý thuyết thứ tự cũng viết {\\downarrow}x cho tập dưới của một phần tử.",
  },
  "left-arrow-double": {
    name: "Mũi tên kép trái",
    meaning: "Vẽ mũi tên thân kép ngắn hướng sang trái, đọc là “được kéo theo bởi” hoặc đánh dấu chiều đảo trong chứng minh.",
    usage: "Khi chứng minh một tương đương, tác giả đánh dấu hai chiều là (\\Rightarrow) và (\\Leftarrow), chiều sau chứng minh mệnh đề đảo. Giữa các công thức, A \\Leftarrow B nghĩa là B kéo theo A. Với phiên bản dài có khoảng cách giữa các mệnh đề hoàn chỉnh, \\impliedby cho \\Longleftarrow kèm khoảng trắng bổ sung, đối xứng với \\implies. Cẩn thận đừng để \\Leftarrow bị nhầm với \\leq khi đọc lướt, vì một số người đọc nhầm hình dạng. Sách logic thường sắp xếp lại để dùng mũi tên phải, nên hãy dành \\Leftarrow cho chiều đảo.",
  },
  "right-arrow-double": {
    name: "Mũi tên kép phải",
    meaning: "Vẽ mũi tên thân kép ngắn hướng sang phải, dấu kéo theo chuẩn giữa các công thức.",
    usage: "\\Rightarrow khẳng định một công thức kéo theo công thức khác, như p \\Rightarrow q, và đánh dấu chiều thuận (\\Rightarrow) khi chứng minh tương đương. \\implies in ra \\Longrightarrow dài hơn kèm khoảng trắng dày bổ sung, phù hợp cho phép kéo theo giữa các mệnh đề hoàn chỉnh. Xác suất viết hội tụ yếu của phân phối là X_n \\Rightarrow X, và hệ viết lại số hạng dùng nó cho một bước rút gọn. Đại số Boole dùng nó cho phép kéo theo. Nên dùng nó thay cho mũi tên đơn \\to khi các đối tượng là mệnh đề chứ không phải tập hợp hay hàm số.",
  },
  "up-arrow-double": {
    name: "Mũi tên kép lên",
    meaning: "Vẽ mũi tên thân kép hướng lên, một ký hiệu hiếm gặp cũng dùng được như dấu phân cách co giãn.",
    usage: "\\Uparrow không có một nghĩa chuẩn duy nhất trong toán học. Thỉnh thoảng nó xuất hiện trong sơ đồ, trong một số sách logic và lý thuyết chứng minh, và trong vật lý cho một trạng thái phân cực mạnh. Vì là dấu phân cách, \\Big\\Uparrow và \\left\\Uparrow ... \\right. co giãn nó theo chiều dọc. Nếu chỉ cần hướng lên, \\uparrow là lựa chọn thông thường. Nếu dùng \\Uparrow cho một quan hệ tự định nghĩa, hãy định nghĩa nó trong văn bản ngay lần xuất hiện đầu tiên để người đọc không phải đoán.",
  },
  "long-left-arrow-double": {
    name: "Mũi tên kép trái dài",
    meaning: "Vẽ mũi tên thân kép dài hướng sang trái; khi thêm khoảng trắng, nó là dấu “được kéo theo bởi”.",
    usage: "\\Longleftarrow là glyph đứng sau \\impliedby, lệnh thêm khoảng trắng dày ở mỗi bên để dùng giữa các mệnh đề hoàn chỉnh. Hãy dùng \\Longleftarrow trực tiếp khi muốn mũi tên dài mà không có phần đệm đó, chẳng hạn trong một chuỗi chật trong bảng. Trong chứng minh, nó có thể mở đầu chiều đảo, (\\Longleftarrow). Người anh em hướng phải \\Longrightarrow là nền tảng của \\implies, và mũi tên hai đầu \\Longleftrightarrow là nền tảng của \\iff. Tránh trộn dạng ngắn và dạng dài trong cùng một chứng minh. Mũi tên chiều đảo dễ đọc nhất khi giả thiết mạnh hơn nằm bên phải.",
  },
  "long-right-arrow-double": {
    name: "Mũi tên kép phải dài",
    meaning: "Vẽ mũi tên thân kép dài hướng sang phải; khi đệm thêm khoảng trắng, nó trở thành dấu \\implies.",
    usage: "\\Longrightarrow là glyph gốc mà \\implies sử dụng, không có khoảng trắng dày bổ sung. Chọn \\Longrightarrow khi cần phép kéo theo trong không gian chật, như chỉ số dưới, ô ma trận hay bảng hẹp, và \\implies giữa các mệnh đề hoàn chỉnh trong công thức hiển thị. Nó cũng dùng cho phép rút gọn nhiều bước trong hệ viết lại và cho sự hội tụ trong một số sách xác suất. Phiên bản ngắn \\Rightarrow tốt hơn giữa các công thức ngắn. Viết chiều đảo bằng \\Longleftarrow. Trong chuỗi các bước hiển thị, hãy căn các mũi tên bằng môi trường align để mỗi bước bắt đầu ở cùng một cột.",
  },
  "down-arrow-double": {
    name: "Mũi tên kép xuống",
    meaning: "Vẽ mũi tên thân kép hướng xuống, dùng cho phép đánh giá bước lớn trong ngữ nghĩa ngôn ngữ lập trình.",
    usage: "Ngữ nghĩa vận hành viết e \\Downarrow v nghĩa là biểu thức e được đánh giá thành giá trị v theo kiểu bước lớn, đây là ứng dụng kỹ thuật chính của ký hiệu này. Trong sơ đồ và chứng minh logic, nó có thể đánh dấu một bước suy luận theo chiều dọc. Giống các mũi tên dọc khác, \\Downarrow là dấu phân cách, nên \\Big\\Downarrow tạo phiên bản cao hơn. Đừng nhầm nó với \\downarrow, trong cùng ngữ nghĩa đó có thể nghĩa là sự dừng. Hãy nêu quy ước khi giới thiệu phán đoán. Ngược lại, ngữ nghĩa bước nhỏ dùng \\to hoặc \\longrightarrow cho từng bước rút gọn, và \\to^* cho bao đóng phản xạ bắc cầu của chúng.",
  },
  "left-right-arrow": {
    name: "Mũi tên hai chiều",
    meaning: "Vẽ mũi tên hai đầu ngắn, dùng cho phép tương ứng, phép tương đương logic và cấu trúc cộng hưởng.",
    usage: "Logic dùng p \\leftrightarrow q cho liên từ tương đương bên trong công thức, còn \\Leftrightarrow và \\iff phổ biến hơn giữa các mệnh đề hoàn chỉnh. Trong tổ hợp, nó mô tả một tương ứng song ánh giữa các đối tượng, và hóa học dùng nó giữa các cấu trúc cộng hưởng, không dùng cho cân bằng, vốn dùng \\rightleftharpoons. Lý thuyết đồ thị có thể dùng nó cho cạnh vô hướng hoặc hai chiều. Đây là quan hệ và có khoảng trắng dày. Với phiên bản dài hơn, dùng \\longleftrightarrow. Khi bàn về bảng chân trị, nó tương đương với XNOR, đúng khi và chỉ khi hai vế cùng giá trị.",
  },
  "long-left-right-arrow": {
    name: "Mũi tên hai chiều dài",
    meaning: "Vẽ mũi tên đơn hai đầu dài, phiên bản kéo dài của \\leftrightarrow cho tương ứng giữa các biểu thức dài.",
    usage: "\\longleftrightarrow phù hợp cho tương ứng giữa hai đối tượng dài, ví dụ song ánh giữa các tập con và các xâu nhị phân, nơi mũi tên ngắn trông lạc lõng. Đây là ký hiệu có độ dài cố định, nên nhãn cần \\overset hoặc một cấu trúc xếp chồng. Lưu ý \\iff được xây dựng từ \\Longleftrightarrow thân kép, không phải phiên bản thân đơn này, nên đừng dùng \\longleftrightarrow cho tương đương logic trong chứng minh. Vật lý dùng nó cho đối ngẫu giữa hai lý thuyết. Độ dài thêm cũng hữu ích khi mũi tên mang chữ xếp chồng phía trên.",
  },
  "up-down-arrow": {
    name: "Mũi tên lên xuống",
    meaning: "Vẽ mũi tên hai đầu theo chiều dọc, chủ yếu dùng như dấu phân cách co giãn hoặc trong sơ đồ.",
    usage: "\\updownarrow chỉ cả lên lẫn xuống, tiện cho sơ đồ dọc để thể hiện quan hệ hai chiều giữa các hàng. Là dấu phân cách, nó có thể phóng to bằng \\big, \\Big, hoặc \\left và \\right. Trong vật lý, thỉnh thoảng nó chỉ một chồng chập các trạng thái spin hoặc một dao động theo phương thẳng đứng. Biến thể thân kép của nó là \\Updownarrow. Nếu bạn vẽ một sơ đồ giao hoán đầy đủ, một môi trường sơ đồ chuyên dụng sẽ căn các mũi tên dọc tốt hơn việc tự đặt \\updownarrow. Nó hiếm khi cần trong các bài báo hiện đại nhưng hữu ích trong bài giảng.",
  },
  "left-right-arrow-double": {
    name: "Mũi tên kép hai chiều",
    meaning: "Vẽ mũi tên thân kép hai đầu ngắn cho tương đương logic giữa các công thức.",
    usage: "\\Leftrightarrow khẳng định hai công thức kéo theo lẫn nhau, như A \\Leftrightarrow B. Với tương đương giữa các mệnh đề hoàn chỉnh trong công thức hiển thị, \\iff cho \\Longleftrightarrow dài hơn kèm khoảng trắng bổ sung. Đại số Boole dùng nó cho XNOR hoặc phép tương đương. Trong chuỗi các phương trình tương đương, căn một cột \\Leftrightarrow bằng align là cách trình bày phổ biến trong sách lời giải. Đừng nhầm nó với \\equiv, vốn biểu thị đồng nhất hoặc đồng dư chứ không phải tương đương logic. Chỉ viết nó khi mọi bước thực sự đảo ngược được; chẳng hạn bình phương hai vế sẽ phá vỡ tính tương đương.",
  },
  "long-left-right-arrow-double": {
    name: "Mũi tên kép hai chiều dài",
    meaning: "Vẽ mũi tên thân kép hai đầu dài, cùng glyph mà \\iff sử dụng.",
    usage: "\\Longleftrightarrow in cùng mũi tên với \\iff nhưng không có khoảng trắng dày bổ sung mà \\iff thêm vào. Điều đó khiến nó là lựa chọn tốt hơn trong chỉ số dưới, bảng hay văn bản trong dòng chật, còn \\iff dễ đọc hơn trong các định lý hiển thị. Nó cũng xuất hiện trong chứng minh khi cả hai chiều được lập luận cùng lúc. \\Leftrightarrow ngắn được ưa dùng giữa các công thức ngắn. Hãy giữ lựa chọn nhất quán trong toàn tài liệu, nhất là trong phát biểu định lý. Nó cũng dùng trong chuỗi các bước đại số khả nghịch căn bằng môi trường align, nơi độ dài thêm giúp tách các phương trình dài về mặt thị giác. Giống các mũi tên khác, đây là quan hệ, nên TeX đặt khoảng trắng dày ở hai bên.",
  },
  "up-down-arrow-double": {
    name: "Mũi tên kép lên xuống",
    meaning: "Vẽ mũi tên thân kép hai đầu theo chiều dọc, ký hiệu có thể dùng làm dấu phân cách cho tương đương theo chiều dọc.",
    usage: "\\Updownarrow chủ yếu dùng trong bố cục dọc, như hai mệnh đề tương đương xếp chồng trong một array, nơi nó đóng vai trò \\Leftrightarrow xoay đứng. Là dấu phân cách, các phiên bản \\Big\\Updownarrow và \\left ... \\right giãn theo chiều dọc. Ngoài các sơ đồ như vậy, nó không có nghĩa nào được thừa nhận rộng rãi. Nếu cần phiên bản thân đơn, dùng \\updownarrow. Một array đơn giản với cột căn giữa giữ cho các mệnh đề và mũi tên thẳng hàng. Trong slide bài giảng, nó cũng có thể cho thấy hai định nghĩa xếp chồng là thay thế được cho nhau. Hãy ghép nó với \\Leftrightarrow khi cùng phép tương đương đó cũng xuất hiện theo chiều ngang ở chỗ khác.",
  },
  "maps-to": {
    name: "Ánh xạ phần tử (maps to)",
    meaning: "Vẽ mũi tên có gạch ở đuôi, chỉ nơi một hàm số đưa một phần tử riêng lẻ tới, như x ↦ x².",
    usage: "Dùng \\mapsto cho phần tử và \\to cho tập hợp: f : \\mathbb{R} \\to \\mathbb{R},\\ x \\mapsto x^2 nêu cùng lúc tập xác định, tập đích và quy tắc. Các bài báo về phép tính lambda và lập trình hàm dùng nó cho hàm vô danh, còn ngữ nghĩa học viết phép thế hoặc cập nhật môi trường là [x \\mapsto v]. Nó chỉ khác \\to ở gạch nhỏ nơi đuôi, nên hãy chắc chắn nó hiển thị rõ ở cỡ chữ nhỏ. Với biểu thức dài, dùng \\longmapsto. Trong sơ đồ giao hoán, các mũi tên ở cấp phần tử cũng được vẽ với đuôi kiểu mapsto.",
  },
  "long-maps-to": {
    name: "Ánh xạ phần tử dài",
    meaning: "Vẽ mũi tên dài có gạch ở đuôi, đưa một phần tử tới ảnh của nó, cho các biểu thức rộng hơn \\mapsto.",
    usage: "\\longmapsto cho nhiều chỗ hơn khi đầu vào hoặc đầu ra dài, như (x, y) \\longmapsto x^2 + y^2, hoặc khi bạn muốn quy tắc phần tử thẳng hàng với một \\longrightarrow ở dòng trên. Nó đọc giống \\mapsto và nên đi cùng \\to hoặc \\longrightarrow ở dòng nêu tập xác định và tập đích. Độ dài cố định nghĩa là nhãn phía trên vẫn cần \\overset. Dùng nó nhất quán trong các định nghĩa hàm số hiển thị sẽ cho bố cục hai dòng gọn gàng.",
  },
  "northeast-arrow": {
    name: "Mũi tên chéo lên phải",
    meaning: "Vẽ mũi tên chéo hướng lên và sang phải, dùng cho xu hướng tăng và cạnh trong sơ đồ.",
    usage: "\\nearrow thường được dùng không chính thức với nghĩa “tăng tới”, như a_n \\nearrow a, đối tác theo đường chéo của \\uparrow. Nó cũng nối các mục trong sơ đồ tự dựng, minh họa ma trận và phác thảo kiểu biểu đồ Hasse. Cùng với \\searrow, \\swarrow và \\nwarrow, nó tạo thành bộ đầy đủ các mũi tên chéo. Các mũi tên này không co giãn, nên với mũi tên chéo dài, công cụ vẽ sơ đồ phù hợp hơn. Trong ghi chú kinh tế và phân tích dữ liệu, nó có thể tóm tắt xu hướng tăng trong một ô bảng. Hãy định nghĩa ý nghĩa một lần, vì đây là cách ký hiệu chứ không phải ký hiệu hình thức.",
  },
  "hook-left-arrow": {
    name: "Mũi tên móc trái",
    meaning: "Vẽ mũi tên trái có móc ở đuôi, dạng đảo ngược của mũi tên bao hàm.",
    usage: "\\hookleftarrow là ảnh gương của \\hookrightarrow và được dùng khi một phép nhúng hay đơn ánh được vẽ từ phải sang trái, ví dụ trong một dãy khớp viết ngược hoặc trong sơ đồ có đích nằm bên trái. Ngoài ra nó hiếm gặp. Trong tài liệu về bàn phím, một glyph tương tự biểu thị phím Enter, nhưng đó là nghĩa khác. Nếu các mũi tên của bạn chủ yếu hướng phải, viết lại khẳng định bằng \\hookrightarrow thường rõ ràng hơn. Nó có khoảng cách quan hệ như các mũi tên khác. Độ dài của nó bằng \\hookrightarrow, nên các sơ đồ đối xứng vẫn cân đối. Khi cần nhiều mũi tên như vậy, một môi trường sơ đồ chuyên dụng sẽ tự xử lý móc.",
  },
  "hook-right-arrow": {
    name: "Mũi tên móc phải",
    meaning: "Vẽ mũi tên phải có đuôi móc, ký hiệu chuẩn cho đơn ánh, phép bao hàm hoặc phép nhúng.",
    usage: "Viết \\iota : A \\hookrightarrow X cho người đọc biết ánh xạ là một phép bao hàm hoặc đơn ánh mà không cần nói bằng lời. Giải tích dùng nó cho phép nhúng liên tục giữa các không gian hàm, như H^1(\\Omega) \\hookrightarrow L^2(\\Omega), và phép nhúng compact đôi khi được đánh dấu bằng một trang trí thêm. Lý thuyết phạm trù dùng nó cho đơn cấu xạ. Đối tác toàn ánh là \\twoheadrightarrow. Cái móc làm mũi tên dài hơn \\to, nên hãy kiểm tra căn chỉnh trong sơ đồ. Đây là quan hệ, nên TeX bao quanh nó bằng khoảng trắng dày.",
  },
  "southeast-arrow": {
    name: "Mũi tên chéo xuống phải",
    meaning: "Vẽ mũi tên chéo hướng xuống và sang phải, dùng cho xu hướng giảm và cạnh trong sơ đồ.",
    usage: "\\searrow thường viết tắt cho “giảm tới”, như \\varepsilon_n \\searrow 0 cho một dãy giảm đơn điệu. Nó bổ sung cho \\nearrow, \\swarrow và \\nwarrow trong các sơ đồ không chính thức, như lưới 2 nhân 2 các đối tượng. Các nhà vật lý dùng nó trong phác thảo mức năng lượng hoặc chuỗi phân rã. Các mũi tên có kích thước cố định, nên hợp với việc dùng nhanh trong dòng hơn là sơ đồ hoàn chỉnh. Tên lệnh là viết tắt của southeast (đông nam), không phải search. Người mới gặp có thể nghĩ đến biểu tượng tìm kiếm, nên một định nghĩa ngắn sẽ có ích. Trong bảng tóm tắt tính đơn điệu, \\nearrow và \\searrow cho hình ảnh trực quan gọn gàng.",
  },
  "left-harpoon-up": {
    name: "Mũi lao trái ngạnh trên",
    meaning: "Vẽ mũi lao hướng sang trái với ngạnh ở phía trên, tức một nửa đầu mũi tên hướng trái.",
    usage: "\\leftharpoonup chủ yếu được dùng như khối xây dựng hoặc trong ký hiệu chuyên biệt. Một số sách vật lý đặt mũi lao trên vectơ, và xếp chồng \\rightharpoonup lên \\leftharpoondown tái tạo mũi tên cân bằng, dù \\rightleftharpoons đã có sẵn. Nó cũng có thể xuất hiện trong sơ đồ phản ứng. Vì các mũi lao trông giống nhau ở cỡ nhỏ, hãy chọn hướng ngạnh có chủ đích và giữ nhất quán. Trong hầu hết tài liệu, nó xuất hiện bên trong các cấu trúc khác hơn là đứng một mình. Các ký hiệu họ hàng là \\rightharpoonup, \\leftharpoondown và \\rightharpoondown, chỉ khác về hướng và phía ngạnh. Giống các mũi tên khác, nó có khoảng cách quan hệ.",
  },
  "right-harpoon-up": {
    name: "Mũi lao phải ngạnh trên",
    meaning: "Vẽ mũi lao hướng sang phải với ngạnh ở trên, ký hiệu thông dụng cho hội tụ yếu.",
    usage: "Giải tích hàm viết u_n \\rightharpoonup u cho hội tụ yếu, phân biệt với hội tụ mạnh u_n \\to u. Hội tụ yếu-sao thường được viết \\overset{*}{\\rightharpoonup}. Vật lý thỉnh thoảng dùng mũi lao phải làm dấu vectơ. Nó cũng tạo thành nửa trên của ký hiệu cân bằng \\rightleftharpoons trong hóa học. Hãy giữ \\rightharpoonup tách biệt với \\rightharpoondown, có ngạnh ở dưới, vì người đọc có thể coi chúng là hai ký hiệu khác nhau. Trong KaTeX và LaTeX, glyph này có khoảng cách quan hệ, nên u_n \\rightharpoonup u được giãn cách như dấu bằng. Khi viết, hãy nêu không gian mà sự hội tụ là yếu, như trong ví dụ.",
  },
  "southwest-arrow": {
    name: "Mũi tên chéo xuống trái",
    meaning: "Vẽ mũi tên chéo hướng xuống và sang trái, chủ yếu cho sơ đồ và phác thảo luồng.",
    usage: "\\swarrow biểu thị một bước xuống và sang trái, như trong lưới đối tượng vẽ tay hoặc khi minh họa cách các số hạng kết hợp trong định thức ma trận. Cùng với \\nearrow, \\searrow và \\nwarrow, nó phủ cả bốn hướng chéo. Nó không co giãn, nên mũi tên chéo dài cần công cụ vẽ sơ đồ. Đôi khi nó đánh dấu xu hướng trong bảng, nhưng \\searrow phổ biến hơn cho giá trị giảm. Kết hợp nó với khoảng trắng \\quad trong array để đặt đúng vị trí.",
  },
  "left-harpoon-down": {
    name: "Mũi lao trái ngạnh dưới",
    meaning: "Vẽ mũi lao hướng sang trái với ngạnh ở dưới, nửa dưới của một đầu mũi tên tách đôi.",
    usage: "\\leftharpoondown là nửa dưới của ký hiệu cân bằng \\rightleftharpoons, nằm dưới \\rightharpoonup. Đứng một mình nó hiếm khi xuất hiện, trong một số sơ đồ phản ứng hoặc như dấu hội tụ yếu theo chiều ngược. Nếu muốn mũi tên cân bằng, hãy dùng trực tiếp \\rightleftharpoons thay vì tự xếp chồng các mũi lao. Lưu ý mũi lao khác với \\leftarrow và không nên tùy tiện thay thế cho nhau. Nó có khoảng cách quan hệ như các mũi tên thông thường. Các ký hiệu anh em của nó là \\leftharpoonup, \\rightharpoonup và \\rightharpoondown. Trong hầu hết bài báo bạn sẽ không cần đến nó, vì một mũi tên thường diễn đạt cùng ý rõ ràng hơn.",
  },
  "right-harpoon-down": {
    name: "Mũi lao phải ngạnh dưới",
    meaning: "Vẽ mũi lao hướng sang phải với ngạnh ở dưới, biến thể ngạnh dưới của nửa mũi tên.",
    usage: "\\rightharpoondown là ảnh gương của \\rightharpoonup về vị trí ngạnh, và xuất hiện trong một số ký hiệu cân bằng và dấu vectơ. Vì \\rightharpoonup là ký hiệu đã được thừa nhận cho hội tụ yếu, dùng \\rightharpoondown cho nghĩa đó sẽ gây nhầm lẫn cho người đọc. Đôi khi nó đi cặp với \\leftharpoonup trong \\leftrightharpoons, cách sắp xếp cân bằng ngược. Như với mọi mũi lao, hãy kiểm tra ngạnh có hiển thị rõ trong PDF cuối cùng ở cỡ chữ bạn chọn. Các ký hiệu anh em \\leftharpoonup và \\leftharpoondown hoàn thiện bộ bốn mũi lao. Giống các mũi tên khác, nó có khoảng cách quan hệ.",
  },
  "northwest-arrow": {
    name: "Mũi tên chéo lên trái",
    meaning: "Vẽ mũi tên chéo hướng lên và sang trái, chủ yếu dùng trong sơ đồ và hình minh họa.",
    usage: "\\nwarrow là mũi tên ít gặp nhất trong bốn mũi tên chéo. Nó xuất hiện trong các array tự dựng để chỉ quan hệ giữa các mục, như sự phụ thuộc trong bảng quy hoạch động khi một ô phụ thuộc vào ô láng giềng phía trên bên trái. Kết hợp với \\nearrow, \\searrow và \\swarrow, nó có thể phác thảo sơ đồ nhỏ mà không cần gói vẽ. Với sơ đồ giao hoán hoàn chỉnh, một môi trường sơ đồ chuyên dụng cho độ dài mũi tên và nhãn đúng chuẩn. Kích thước cố định và khoảng cách quan hệ khiến nó tiện dùng trong array và bảng. Đọc bốn mũi tên chéo như các hướng la bàn (northeast, southeast, southwest, northwest, tức đông bắc, đông nam, tây nam, tây bắc) giúp nhớ tên lệnh.",
  },
};

export default text;
