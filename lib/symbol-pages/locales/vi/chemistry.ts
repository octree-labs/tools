import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/chemistry/<slug>. */
const text: SymbolPageTranslations = {
  "equilibrium-arrow": {
    name: "Mũi tên cân bằng",
    meaning: "Cặp nửa mũi tên (harpoon) ngược chiều nhau, biểu thị một phản ứng hóa học ở trạng thái cân bằng động.",
    usage: "IUPAC khuyến nghị dùng nửa mũi tên cho cân bằng, như trong N_2 + 3H_2 \\rightleftharpoons 2NH_3, còn hai mũi tên đầy đủ chỉ một quá trình thuận nghịch nói chung. Nửa mũi tên phía trên chỉ sang phải, ứng với phản ứng thuận. Ảnh gương của nó là \\leftrightharpoons, với nửa mũi tên hướng trái ở trên. Đây là một quan hệ, nên TeX đặt khoảng cách cho nó như dấu =. Để in điều kiện phía trên mũi tên, chẳng hạn chất xúc tác, bạn có thể dùng \\overset{\\text{Fe}}{\\rightleftharpoons}, dù các công cụ hóa học chuyên dụng cho mũi tên dài hơn. Trong vật lý, cùng ký hiệu này đôi khi chỉ một tương ứng hai chiều.",
  },
  "reversible-reaction": {
    name: "Phản ứng thuận nghịch",
    meaning: "Hai mũi tên đầy đủ xếp chồng, mũi tên hướng trái ở trên và hướng phải ở dưới, dùng cho phản ứng thuận nghịch hoặc ánh xạ hai chiều.",
    usage: "Một số sách hóa học dùng mũi tên kép đầy đủ cho phản ứng có thể diễn ra theo cả hai chiều, và dành nửa mũi tên (\\rightleftharpoons) cho cân bằng thực sự; phần lớn tài liệu hiện đại dùng nửa mũi tên cho cả hai. Lưu ý thứ tự xếp chồng: \\leftrightarrows đặt mũi tên trái ở trên, còn \\rightleftarrows đặt mũi tên phải ở trên, thường là điều bạn muốn khi phản ứng thuận diễn ra từ trái sang phải. Đừng nhầm chúng với \\leftrightarrow, một mũi tên đơn có hai đầu. Trong lý thuyết phạm trù, cặp mũi tên này thường chỉ một phép liên hợp hoặc một cặp ánh xạ song song.",
  },
  "isotope": {
    name: "Đồng vị",
    meaning: "Ký hiệu hạt nhân với số khối là chỉ số trên bên trái và số hiệu nguyên tử là chỉ số dưới bên trái, ở đây là cacbon-14.",
    usage: "Nhóm rỗng {} cho các chỉ số một chỗ để bám vào, đặt chúng bên trái ký hiệu nguyên tố. Có một nhược điểm: TeX căn trái chỉ số dưới theo chỉ số trên, nên số 6 một chữ số nằm cách xa chữ C. Hãy đệm bằng \\phantom{1}6 để căn phải các con số sát ký hiệu. Các phương trình hạt nhân kết hợp những ký hiệu này, như trong phân rã beta của cacbon-14 thành nitơ-14. Dùng \\text hoặc \\mathrm cho nguyên tố để nó luôn đứng; số hiệu nguyên tử thường được lược bỏ khi nguyên tố đã ngụ ý nó, cho {}^{14}\\text{C}.",
  },
  "superscript-charge": {
    name: "Điện tích ở chỉ số trên",
    meaning: "Ký hiệu ion với điện tích là chỉ số trên, ở đây là cation natri mang một điện tích dương.",
    usage: "Viết ion đa điện tích với con số đứng trước dấu, \\text{Ca}^{2+} và \\text{SO}_4^{2-}, theo thứ tự của IUPAC. Dấu ngoặc nhọn là quan trọng: ^{2+} giữ cả hai ký tự trong chỉ số trên. Dấu trừ đứng cuối trong chỉ số trên được xử lý như dấu một ngôi, nên ^{-} hiển thị gọn gàng. Hãy dùng \\mathrm{Na} thay vì \\text{Na} nếu công thức có thể xuất hiện trong một định lý hay chú thích in nghiêng, vì \\text sao chép phông xung quanh còn \\mathrm luôn đứng. Khi chỉ số dưới và điện tích trùng vị trí, điện tích nằm phía trên con số đếm, như trong ion sunfat.",
  },
  "subscript-count": {
    name: "Chỉ số dưới đếm nguyên tử",
    meaning: "Công thức phân tử của nước, với chỉ số dưới 2 đếm số nguyên tử hiđro trong mỗi phân tử.",
    usage: "Ký hiệu nguyên tố phải in đứng, vì thế mỗi nhóm chữ được bọc trong \\text; H_2O in nghiêng sẽ trông như các biến. Một cách viết ngắn hơn tương đương là \\mathrm{H_2O}, giữ mọi thứ đứng kể cả chỉ số dưới và không bị ảnh hưởng bởi chữ nghiêng xung quanh. Chỉ số dưới chỉ đếm nguyên tử và không bao giờ được nhầm với điện tích ở chỉ số trên. Các công thức có dấu ngoặc theo cùng một mẫu, \\mathrm{Ca(OH)_2}. Với nhiều nội dung hóa học, một gói hóa học chuyên dụng giúp tiết kiệm công sức, nhưng cho vài công thức thì cách làm thủ công này hoàn toàn đủ dùng.",
  },
  "degrees-celsius": {
    name: "Độ C (độ Celsius)",
    meaning: "Đơn vị độ Celsius, tạo bởi một vòng tròn nâng lên và chữ C đứng; nước đóng băng ở 0 °C.",
    usage: "Dấu độ là \\circ ở chỉ số trên; chữ o hay số 0 là sai. Quy cách SI đặt một khoảng trắng giữa số và đơn vị, nên hãy viết 25\\,^{\\circ}\\text{C} với một khoảng trắng hẹp, và không bao giờ đặt khoảng trắng giữa dấu độ và chữ C. Hiệu nhiệt độ theo độ Celsius bằng hiệu theo kelvin, điều quan trọng trong tính toán nhiệt dung. \\text chuyển sang nghiêng trong định lý; \\mathrm{C} tránh được điều đó. Các gói đơn vị cung cấp lệnh ngữ nghĩa, nhưng cấu trúc này là cách thủ công phổ biến và chạy ở mọi nơi, kể cả KaTeX.",
  },
  "bond": {
    name: "Liên kết đơn",
    meaning: "Liên kết cộng hóa trị đơn giữa hai nguyên tử cacbon, vẽ bằng một gạch ngắn giữa các ký hiệu nguyên tố.",
    usage: "Trong chế độ toán, dấu gạch nối trở thành dấu trừ với khoảng cách của toán tử hai ngôi, nên liên kết hiện ra với các khoảng hở hai bên, trông giống phép trừ hơn. Viết thành \\text{C}{-}\\text{C} loại bỏ khoảng cách đó và cho một liên kết khít. Độ dài và năng lượng liên kết thường được nêu kèm, chẳng hạn liên kết C-C dài khoảng 154 pm. Với công thức cấu tạo thu gọn như \\mathrm{CH_3{-}CH_3}, cùng mẹo dấu ngoặc nhọn đó vẫn áp dụng. Với bất cứ thứ gì nhiều hơn vài liên kết, các công cụ vẽ hay một gói cấu trúc sẽ tạo ra công thức khung thực sự.",
  },
  "double-bond": {
    name: "Liên kết đôi",
    meaning: "Liên kết đôi cacbon-cacbon, gồm một liên kết sigma và một liên kết pi, đặc trưng cho các anken như eten.",
    usage: "Vì = là một quan hệ trong chế độ toán, TeX chèn khoảng trắng rộng ở cả hai bên, trông như một phương trình hơn là một liên kết. Bọc nó trong dấu ngoặc nhọn, \\text{C}{=}\\text{C}, biến nó thành ký hiệu thường và kéo các nguyên tử lại gần nhau. Anken được viết như \\mathrm{H_2C{=}CH_2}. Liên kết đôi ngắn hơn và bền hơn liên kết đơn và cản trở sự quay, sinh ra các đồng phân cis-trans. Hãy đảm bảo người đọc không thể nhầm liên kết với dấu bằng trong một dòng phương trình phản ứng bằng cách giữ nó sát các nguyên tử.",
  },
  "triple-bond": {
    name: "Liên kết ba",
    meaning: "Liên kết ba cacbon-cacbon, đặc trưng cho các ankin như etin (axetilen), vẽ bằng ba gạch ngang.",
    usage: "\\equiv là một quan hệ, cùng ký hiệu dùng cho đồng dư (a \\equiv b \\pmod n) và đồng nhất thức, nên mặc định nó có khoảng cách rộng; {\\equiv} tạo liên kết khít hơn giữa các nguyên tử. Liên kết ba gồm một thành phần sigma và hai thành phần pi và là liên kết cacbon-cacbon ngắn nhất. Khí nitơ được viết \\mathrm{N{\\equiv}N}. Một số phông vẽ \\equiv hơi rộng, điều này rất hợp cho hóa học. Tránh dùng \\cong hay \\approx, trông khá giống nhưng có nghĩa là đẳng cấu và xấp xỉ.",
  },
  "partial-charge": {
    name: "Điện tích riêng phần",
    meaning: "Điện tích dương riêng phần trên một nguyên tử trong liên kết phân cực, viết bằng chữ delta thường kèm dấu cộng.",
    usage: "Trong phân tử nước, các nguyên tử hiđro mang \\delta^{+} và nguyên tử oxi mang \\delta^{-}, sự phân tách điện tích này dẫn đến liên kết hiđro. Delta ở đây có nghĩa là “một phần của”, không phải độ biến thiên, nên đừng nhầm nó với \\Delta. Để đặt nhãn phía trên một nguyên tử, hãy dùng \\overset{\\delta^{+}}{\\text{H}}, cách này giữ công thức dễ đọc. Một số sách viết \\delta+ trên dòng mà không dùng chỉ số trên; dạng chỉ số trên phổ biến hơn trong văn bản dàn trang. Hãy ghép nó với \\delta^{-} trên nguyên tử có độ âm điện lớn hơn, và \\delta\\delta^{+} chỉ một điện tích riêng phần còn nhỏ hơn nữa.",
  },
  "electron": {
    name: "Electron",
    meaning: "Ký hiệu của electron, chữ e thường với điện tích âm ở chỉ số trên, dùng trong các bán phản ứng oxi hóa-khử.",
    usage: "Các bán phương trình cân bằng điện tích bằng electron, như \\text{Cu}^{2+} + 2e^{-} \\to \\text{Cu}. Positron là e^{+}. Các quy chuẩn trình bày vật lý thường đặt ký hiệu hạt ở dạng đứng, \\mathrm{e}^{-}, điều này cũng tránh nhầm với số Euler khi có hàm mũ ở gần. Vì e^- với chỉ số trên một token vẫn hoạt động, dấu ngoặc nhọn là tùy chọn, nhưng chúng giữ sự nhất quán với điện tích nhiều ký tự. Trong ký hiệu hạt nhân, electron cũng có thể được viết {}^{\\phantom{-}0}_{-1}e hoặc \\beta^{-} khi được phát ra trong phân rã. Phản neutrino trong phân rã beta được viết \\bar{\\nu}_e đi kèm.",
  },
  "aqueous": {
    name: "Dung dịch nước (aq)",
    meaning: "Ký hiệu trạng thái cho dung dịch nước: chất được hòa tan trong nước, như các ion trong dung dịch.",
    usage: "Ký hiệu trạng thái đứng sau công thức, hoặc trên dòng như \\text{NaCl(aq)} hoặc ở chỉ số dưới, \\text{NaCl}_{\\text{(aq)}}; cả hai đều được chấp nhận, nên hãy chọn một. Gõ (aq) trong chế độ toán mà không có \\text sẽ cho a và q in nghiêng với khoảng cách toán học, nên lớp bọc là cần thiết. Phương trình ion thu gọn dựa vào nhãn này để cho thấy chất nào phân li. Khi viết nhiều phương trình, hãy định nghĩa một macro như \\newcommand{\\aq}{\\text{(aq)}}. \\mathrm{(aq)} là một lựa chọn khác vẫn đứng trong ngữ cảnh nghiêng. Nó cũng đánh dấu proton hiđrat hóa, viết là \\text{H}^{+}\\text{(aq)}.",
  },
  "solid": {
    name: "Chất rắn (s)",
    meaning: "Ký hiệu trạng thái đánh dấu một chất ở thể rắn, thường là kết tủa hoặc điện cực kim loại.",
    usage: "Các phản ứng kết tủa kết thúc bằng một chất rắn, như \\text{AgCl(s)}, và nhiệt hóa học phụ thuộc vào nó: enthalpy tạo thành của cacbon tính cho than chì ở thể rắn. Một số sách cũ dùng mũi tên hướng xuống cho kết tủa; ký hiệu trong ngoặc là dạng được IUPAC ưu tiên. Hãy viết nó ngay sau công thức, không có khoảng trắng. Bọc nó trong \\text giữ chữ s đứng; trong chế độ toán, chữ s không được bọc sẽ in nghiêng và có thể bị nhầm với đơn vị giây hay một biến.",
  },
  "liquid": {
    name: "Chất lỏng (l)",
    meaning: "Ký hiệu trạng thái cho chất lỏng nguyên chất, như nước hay thủy ngân, viết sau công thức hóa học.",
    usage: "Các phương trình đốt cháy phân biệt \\text{H}_2\\text{O(l)} với \\text{H}_2\\text{O(g)} vì biến thiên enthalpy chênh nhau đúng bằng nhiệt hóa hơi. Lưu ý sự khác biệt giữa (l), chất lỏng nguyên chất, và (aq), dung dịch trong nước. Chữ đứng đặc biệt quan trọng ở đây: trong một số phông, chữ l nghiêng trông giống số 1 hoặc một thanh dọc, có thể gây nhầm lẫn cho người đọc. Dùng \\text hoặc \\mathrm đảm bảo một chữ cái đứng rõ ràng. Giữ ký hiệu gắn liền với công thức, không thêm khoảng trắng.",
  },
  "gas-state-symbol-g": {
    name: "Ký hiệu trạng thái khí (g)",
    meaning: "Ký hiệu trạng thái cho pha khí, gắn vào công thức của các chất khí và hơi trong phương trình.",
    usage: "Các chất ở pha khí quan trọng đối với hằng số cân bằng theo áp suất, K_p, và cho các tính toán khí lý tưởng; đánh dấu chúng bằng (g) làm cho các phụ thuộc đó trở nên tường minh. Các sách cũ đôi khi dùng mũi tên hướng lên để chỉ khí thoát ra, nhưng ngày nay ký hiệu trạng thái được ưu tiên. Một thói quen hữu ích là gắn nhãn cho mọi chất trong phương trình nhiệt hóa học để các giá trị enthalpy không mơ hồ. Nếu tài liệu của bạn có nhiều công thức, một macro như \\newcommand{\\gas}{\\text{(g)}} giúp tránh lỗi gõ. \\mathrm{(g)} cho cùng kết quả đứng bên trong văn bản nghiêng.",
  },
};

export default text;
