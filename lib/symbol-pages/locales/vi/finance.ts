import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/finance/<slug>. */
const text: SymbolPageTranslations = {
  "dollar-sign": {
    name: "Ký hiệu đô la",
    meaning: "Dấu đô la đã được thoát: in ra ký tự $ thay vì mở hoặc đóng chế độ toán.",
    usage: "Dấu $ không thoát sẽ bật/tắt chế độ toán trong LaTeX, nên giá tiền cần viết \\$, như \\$19.99. Lệnh này hoạt động cả trong chế độ văn bản lẫn chế độ toán, nhờ vậy các công thức như \\$100 \\times 1.05 = \\$105 rất dễ viết. Trong các công cụ dựa trên Markdown và trình hiển thị KaTeX, cách thoát này cũng áp dụng tương tự. Với bảng chứa nhiều số tiền, gói siunitx có thể căn số theo dấu thập phân trong khi ký hiệu nằm ở tiêu đề cột. Viết USD giúp tránh nhầm lẫn khi một tài liệu có nhiều loại đô la, chẳng hạn đô la Canada hay đô la Úc.",
  },
  "euro-sign": {
    name: "Ký hiệu euro",
    meaning: "Ký hiệu tiền tệ euro được nhập dưới dạng ký tự trực tiếp bên trong \\text, dùng cho giá cả và số tiền tính bằng euro.",
    usage: "Dán ký tự € vào bên trong \\text sẽ hoạt động khi tài liệu dùng UTF-8 và phông chữ có glyph này, điều mà hầu hết cấu hình hiện đại đều đáp ứng. Với pdfLaTeX, \\texteuro là dạng lệnh, còn \\euro cho thiết kế chính thức với hình dạng hình học cố định. Vị trí ký hiệu euro khác nhau tùy quốc gia: Đức và Pháp viết 10 €, trong khi Ireland và Hà Lan thường đặt ký hiệu lên trước. Trong bảng, bạn nên ghi ký hiệu ở tiêu đề cột thay vì lặp lại trong từng ô. Trong XeLaTeX và LuaLaTeX, ký tự được lấy trực tiếp từ phông chữ đã chọn.",
  },
  "pound-sterling-sign": {
    name: "Ký hiệu bảng Anh",
    meaning: "Ký hiệu bảng Anh dưới dạng ký tự trực tiếp trong \\text, dùng cho số tiền tính bằng bảng Anh.",
    usage: "Gõ trực tiếp ký tự £ bên trong \\text hoạt động tốt trong tài liệu UTF-8. LaTeX cũng có sẵn lệnh \\pounds dùng được trong văn bản và công thức, nhưng với phông Computer Modern mặc định, nó lấy từ phông nghiêng nên trông bị xiên, điều khiến nhiều người bất ngờ; đổi bảng mã phông sẽ cho glyph đứng. Theo quy ước của Anh, ký hiệu đứng trước số tiền và không có khoảng trắng, như £1,500. Cùng một glyph được dùng cho nhiều loại tiền bảng khác. Trong bảng tài chính, hãy căn theo dấu thập phân và đặt ký hiệu ở tiêu đề để bớt rối mắt.",
  },
  "yen-sign": {
    name: "Ký hiệu yên",
    meaning: "Ký hiệu yên hoặc nhân dân tệ được nhập dưới dạng ký tự trực tiếp bên trong \\text, dùng cho số tiền yên Nhật và nhân dân tệ Trung Quốc.",
    usage: "Cùng một glyph được dùng cho cả yên Nhật lẫn nhân dân tệ Trung Quốc, vì vậy các bài báo thường thêm JPY hoặc CNY để tránh mơ hồ. Gõ ¥ bên trong \\text hoạt động trong tài liệu UTF-8 với phông chữ có ký tự này; \\textyen là lệnh thay thế khi dùng pdfLaTeX. Số tiền yên hiếm khi có phần thập phân vì đơn vị này không có đơn vị con trong sử dụng hằng ngày, nên \\text{¥}1{,}200 là cách viết điển hình. Một số phông vẽ ký hiệu với một gạch ngang, số khác với hai gạch; cả hai đều được chấp nhận, nhưng hãy giữ phông nhất quán trong toàn tài liệu.",
  },
  "indian-rupee-sign": {
    name: "Ký hiệu rupee Ấn Độ",
    meaning: "Ký hiệu rupee Ấn Độ dưới dạng ký tự trực tiếp trong \\text, dùng cho số tiền tính bằng rupee Ấn Độ.",
    usage: "Ký hiệu rupee được Ấn Độ chính thức áp dụng năm 2010, nên nhiều phông cũ không có nó, kể cả Computer Modern mặc định; với pdfLaTeX nó thường không in ra gì. Biên dịch bằng XeLaTeX hoặc LuaLaTeX cùng một phông như Noto Sans hay một phông hệ thống mới có glyph này là cách đáng tin cậy nhất. Nếu không có glyph, Rs. hoặc INR là các dạng chữ thay thế được chấp nhận. Cách đếm số của Ấn Độ nhóm chữ số theo lakh và crore, ví dụ 1,00,000; hãy dùng {,} trong chế độ toán để dấu phẩy không thêm khoảng trắng thừa phía sau.",
  },
  "bitcoin-sign": {
    name: "Ký hiệu bitcoin",
    meaning: "Ký hiệu bitcoin được nhập dưới dạng ký tự trực tiếp bên trong \\text, dùng cho số tiền tính bằng bitcoin.",
    usage: "Glyph bitcoin mới hơn hầu hết các phông chữ, nên pdfLaTeX với phông chuẩn thường không in được; XeLaTeX hoặc LuaLaTeX với một phông có glyph này, hoặc một phông biểu tượng, là cách làm thực tế. Nhiều bài báo tài chính và kinh tế chỉ đơn giản viết BTC, không bao giờ gặp vấn đề phông, và dùng sat cho đơn vị nhỏ nhất, trong đó 1 BTC bằng 100,000,000 satoshi. Số tiền bitcoin thường có tới tám chữ số thập phân, nên việc căn theo dấu thập phân trong bảng quan trọng hơn bình thường. Hãy kiểm tra kỹ tệp PDF đầu ra, vì glyph bị thiếu thường hỏng một cách lặng lẽ, chỉ để lại một cảnh báo trong tệp log.",
  },
  "percent-sign": {
    name: "Ký hiệu phần trăm",
    meaning: "Dấu phần trăm đã được thoát: in ra % thay vì bắt đầu một chú thích LaTeX.",
    usage: "Trong LaTeX, dấu % đứng trơn sẽ biến phần còn lại của dòng thành chú thích, một nguyên nhân kinh điển khiến chữ biến mất, nên mọi tỉ lệ phần trăm đều cần \\%. Lệnh này hoạt động trong cả chế độ văn bản và chế độ toán, như lãi suất 5\\% hoặc r = 3.5\\%. Quy ước về khoảng cách khác nhau: tiếng Anh thường viết 5% không có khoảng trắng, còn một số quy ước châu Âu và SI chèn một khoảng hẹp, 5\\,\\%. siunitx xử lý việc này nhất quán nếu bạn trình bày nhiều đại lượng. Khi bàn về điểm phần trăm, hãy viết pp hoặc điểm phần trăm để phân biệt mức tăng từ 4% lên 5% với một thay đổi tương đối 1%.",
  },
  "per-mille-sign": {
    name: "Ký hiệu phần nghìn",
    meaning: "Ký hiệu phần nghìn, nghĩa là số phần trên một nghìn, được nhập dưới dạng ký tự trực tiếp bên trong \\text.",
    usage: "Phần nghìn biểu thị tỉ lệ trên một nghìn, nên 5‰ bằng 0.5%. Nó xuất hiện trong bảng bảo hiểm và bảng tử vong, độ mặn và tỉ lệ đồng vị như \\delta^{13}C trong địa hóa học, và giới hạn nồng độ cồn trong máu ở một số quốc gia. Dạng lệnh khi dùng pdfLaTeX là \\textperthousand; trong công thức, hãy bọc nó trong \\text như ở đây. Đừng nhầm với điểm cơ bản, là phần trên mười nghìn và có glyph riêng ít được hỗ trợ. Nếu phông của người đọc có thể thiếu ký hiệu này, viết phần nghìn hoặc số phần trên một nghìn là phương án dự phòng rõ ràng.",
  },
  "basis-point": {
    name: "Điểm cơ bản",
    meaning: "Viết tắt của điểm cơ bản: một phần trăm của một điểm phần trăm, dùng cho lãi suất và chênh lệch lợi suất.",
    usage: "Một điểm cơ bản bằng 0.01%, nên lãi suất tăng từ 4.25% lên 4.50% là đã thay đổi 25 bp. Chênh lệch lợi suất trái phiếu, quyết định của ngân hàng trung ương và phí quỹ được báo theo cách này vì thay đổi phần trăm trên lãi suất dễ gây mơ hồ. Bọc bp trong \\text giữ cho chữ đứng và ngăn TeX hiểu b và p là hai biến nghiêng nhân với nhau. Hãy tách số khỏi đơn vị bằng một khoảng hẹp hoặc \\, như 25\\,\\text{bp}. Một số người viết bps hoặc bips. Thú vị là bp cũng là đơn vị riêng của TeX cho big point của PostScript, bằng 1/72 inch, dù ngữ cảnh luôn giúp phân biệt hai nghĩa.",
  },
  "npv": {
    name: "Giá trị hiện tại ròng (NPV)",
    meaning: "Giá trị hiện tại ròng: tổng các dòng tiền tương lai đã chiết khấu trừ đi khoản đầu tư ban đầu.",
    usage: "NPV được tính bằng \\text{NPV} = \\sum_{t=0}^{n} \\frac{C_t}{(1+r)^t}, trong đó C_0 thường là khoản chi ban đầu mang giá trị âm và r là lãi suất chiết khấu. Dự án được chấp nhận khi NPV > 0. Bọc từ viết tắt trong \\text giữ cho chữ đứng và ngăn TeX coi nó là N nhân P nhân V với khoảng cách chữ nghiêng. \\mathrm{NPV} cho hình thức giống vậy nhưng bỏ qua kiểu chữ của văn bản xung quanh, nên an toàn hơn bên trong định lý. Nếu bạn dùng nó như một hàm, chẳng hạn \\text{NPV}(r), thì \\operatorname{NPV} thêm khoảng cách đúng trước dấu ngoặc.",
  },
  "irr": {
    name: "Tỷ suất hoàn vốn nội bộ (IRR)",
    meaning: "Tỷ suất hoàn vốn nội bộ: lãi suất chiết khấu tại đó giá trị hiện tại ròng của dự án bằng không.",
    usage: "IRR được định nghĩa ngầm bởi 0 = \\sum_{t=0}^{n} C_t / (1 + \\text{IRR})^t, nên nhìn chung không có công thức dạng đóng và phải giải bằng phương pháp số. Dự án hấp dẫn khi IRR vượt chi phí sử dụng vốn. Các dòng tiền đổi dấu nhiều hơn một lần có thể cho nhiều giá trị IRR, một điểm yếu đã biết so với NPV. Hãy dùng \\text hoặc \\mathrm để từ viết tắt luôn đứng; gõ IRR trơn trong chế độ toán sẽ cho ba biến nghiêng với khoảng cách của phép nhân. Khi nó xuất hiện trong mẫu số, dùng \\left( \\right) để dấu ngoặc co giãn gọn gàng quanh phân số.",
  },
  "roi": {
    name: "Tỷ suất hoàn vốn (ROI)",
    meaning: "Tỷ suất hoàn vốn: khoản lãi từ một khoản đầu tư so với chi phí của nó, thường biểu thị bằng phần trăm.",
    usage: "ROI được tính bằng \\text{ROI} = (\\text{gain} - \\text{cost}) / \\text{cost}, thường nhân với 100\\% khi trình bày. Khác với IRR, nó bỏ qua thời điểm của các dòng tiền, nên các biến thể quy đổi theo năm được dùng để so sánh nhiều năm. Trình bày bằng \\text giữ các chữ cái đứng và cách nhau như một từ; nếu gõ trơn trong công thức, R, O và I trở thành biến nghiêng, và chữ O có thể bị nhầm với số không. Trong phân số, hãy dùng \\frac với các phần \\text ở tử và mẫu, hoặc \\dfrac trong đoạn văn để giữ dễ đọc.",
  },
  "summation": {
    name: "Tổng theo các kỳ",
    meaning: "Tổng theo các kỳ thời gian t từ 1 đến n, cách chuẩn để cộng gộp dòng tiền qua các kỳ.",
    usage: "Các công thức tài chính lấy tổng theo kỳ: giá trị hiện tại của niên kim, \\sum_{t=1}^{n} \\frac{C}{(1+r)^t}, định giá trái phiếu gồm các khoản coupon cộng mệnh giá, và NPV, bắt đầu từ t = 0 để tính cả khoản chi ban đầu. Trong công thức hiển thị, các cận nằm trên và dưới chữ sigma; trong dòng, chúng dịch sang bên phải với cỡ chữ nhỏ hơn. Dùng \\sum\\limits để buộc cận xếp chồng trong đoạn văn. Hãy chọn chỉ số bắt đầu một cách có chủ ý, vì bắt đầu từ 0 hay 1 sẽ làm thay đổi kết quả. Với thời gian liên tục, dạng tương tự là một tích phân với hệ số chiết khấu e^{-rt}.",
  },
  "present-value": {
    name: "Giá trị hiện tại",
    meaning: "Giá trị hiện tại của một dòng tiền đơn C nhận được tại thời điểm t, chiết khấu với lãi suất r mỗi kỳ.",
    usage: "Chiết khấu là chia một khoản tiền tương lai cho hệ số tăng trưởng (1+r)^t, nên 1,000 nhận được sau 3 năm với lãi suất 5% có giá trị khoảng 863.84 hôm nay. Cộng số hạng này qua các kỳ cho ra NPV và giá trái phiếu. Trong công thức hiển thị, \\frac vẽ phân số cỡ đầy đủ; trong văn bản, nó bị thu nhỏ, nên \\tfrac hoặc dạng gạch chéo C/(1+r)^t có thể dễ đọc hơn. Nếu mẫu số trở nên phức tạp, ví dụ với lãi suất thay đổi (1 + r_t), hãy dùng \\prod hoặc giữ số mũ trong ngoặc nhọn: ^{t} quan trọng khi t dài hơn một ký tự, như ^{t-1}.",
  },
  "compound-interest": {
    name: "Lãi kép",
    meaning: "Công thức lãi kép: số tiền A sau t năm khi vốn gốc P sinh lãi với lãi suất r, ghép lãi n lần mỗi năm.",
    usage: "Ở đây P là vốn gốc, r là lãi suất danh nghĩa hằng năm, n là số kỳ ghép lãi mỗi năm và t là số năm; ghép lãi hằng tháng dùng n = 12. Khi n tăng, số tiền tiến tới công thức liên tục Pe^{rt}. Số mũ phải đặt trong ngoặc nhọn, ^{nt}, nếu không chỉ có n được nâng lên. Dạng gạch chéo trong dòng r/n giữ dòng gọn; trong phương trình hiển thị, \\left(1 + \\frac{r}{n}\\right)^{nt} phổ biến hơn và cặp \\left( \\right) phóng to dấu ngoặc cho vừa phân số. Đừng viết \\frac bên trong dấu ngoặc không co giãn, vì dấu ngoặc sẽ trông ngắn hẳn.",
  },
  "continuous-compounding": {
    name: "Lãi kép liên tục",
    meaning: "Công thức lãi kép liên tục: vốn gốc P tăng thành Pe^{rt} sau thời gian t với lãi suất ghép liên tục r.",
    usage: "Đây là giới hạn của lãi kép khi tần suất ghép lãi trở nên vô hạn, vì (1 + r/n)^{nt} \\to e^{rt}. Nó được dùng xuyên suốt trong định giá phái sinh, như hệ số chiết khấu e^{-rT} trong công thức Black-Scholes. Hãy đặt số mũ trong ngoặc nhọn, e^{rt}, để cả hai chữ đều được nâng lên. Một số quy cách viết số Euler ở dạng đứng, \\mathrm{e}^{rt}, để phân biệt với một biến tên là e; cách nào cũng được chấp nhận nếu nhất quán. Với số mũ dài, \\exp(rt) dễ đọc hơn một chỉ số trên nhỏ xíu, nhất là khi số mũ có phân số.",
  },
};

export default text;
