import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/units/<slug>. */
const text: SymbolPageTranslations = {
  "angstrom-a": {
    name: "Ångström (Å)",
    meaning: "Đơn vị ångström, bằng 10⁻¹⁰ mét (0,1 nm), dùng cho bán kính nguyên tử, độ dài liên kết và bước sóng tia X.",
    usage: "\\AA là lệnh của chế độ văn bản, nên trong chế độ toán phải bọc nó trong \\text như minh họa; dùng trực tiếp trong chế độ toán sẽ gây cảnh báo và cho kết quả sai. Các nhà tinh thể học và sinh học cấu trúc vẫn ghi khoảng cách như 1.54\\,\\text{\\AA} cho bước sóng K-alpha của đồng, dù SI ưu tiên nanômét hoặc picômét. Lệnh trông tương tự \\mathring{A} hoạt động trong chế độ toán nhưng là một biến có dấu, không phải ký hiệu đơn vị. Đặt một khoảng trắng mảnh giữa số và đơn vị. Chữ thường \\aa cho chữ cái Bắc Âu, không phải đơn vị.",
  },
  "degrees-fahrenheit": {
    name: "Độ Fahrenheit",
    meaning: "Đơn vị nhiệt độ độ Fahrenheit; nước đóng băng ở 32 °F và sôi ở 212 °F ở áp suất tiêu chuẩn.",
    usage: "Công thức chuyển đổi là T_F = \\frac{9}{5} T_C + 32, và hiệu nhiệt độ một độ Fahrenheit bằng 5/9 kelvin. Cách dựng giống như với độ Celsius: một \\circ ở chỉ số trên theo sau là chữ F đứng, với một khoảng trắng mảnh giữa số và dấu độ. Dữ liệu thời tiết của Mỹ, ngành điều hòa không khí và một số tiêu chuẩn kỹ thuật vẫn dùng nó, nhưng các tạp chí khoa học hầu như luôn yêu cầu SI. Tránh viết dấu độ bằng chữ o thường hoặc bằng \\degree trừ khi lệnh đó đã được định nghĩa trong cấu hình của bạn.",
  },
  "kelvin": {
    name: "Kelvin",
    meaning: "Kelvin, đơn vị cơ bản SI của nhiệt độ nhiệt động học, có điểm không tại độ không tuyệt đối.",
    usage: "Từ năm 1967, đơn vị được viết là K không có dấu độ: 300 K, không phải 300 °K. Độ không tuyệt đối là 0 K, điểm ba của nước là 273,16 K, và T(\\text{K}) = T(^{\\circ}\\text{C}) + 273.15. Ký hiệu đơn vị phải in đứng, điều mà \\text bảo đảm; chữ K nghiêng là một biến, chẳng hạn hằng số cân bằng hoặc độ cứng. Để một khoảng trắng mảnh giữa số và đơn vị, 4.2\\,\\text{K}. Trong văn bản định lý in nghiêng, \\mathrm{K} an toàn hơn vì \\text sẽ theo phông nghiêng.",
  },
  "meter": {
    name: "Mét",
    meaning: "Mét, đơn vị cơ bản SI của độ dài, được định nghĩa thông qua tốc độ ánh sáng trong chân không.",
    usage: "Chữ m đứng là đơn vị, còn chữ m nghiêng thường chỉ khối lượng, nên \\text{m} hoặc \\mathrm{m} là thiết yếu: so sánh m = 2\\,\\text{kg} với h = 2\\,\\text{m}. Quy tắc SI đặt một khoảng trắng giữa giá trị và đơn vị và không bao giờ thêm dạng số nhiều cho ký hiệu. Đơn vị dẫn xuất kết hợp với lũy thừa, \\text{m}^2 và \\text{m}^3, và tiền tố gắn trực tiếp, \\text{km}, \\text{mm}. Vận tốc được viết \\text{m/s} hoặc \\text{m}\\,\\text{s}^{-1}; các tạp chí khác nhau, nên hãy kiểm tra quy cách của nơi đăng. Đừng nhầm ký hiệu này với tiền tố mili, cũng dùng chữ m.",
  },
  "kilogram": {
    name: "Kilôgam",
    meaning: "Kilôgam, đơn vị cơ bản SI của khối lượng, nay được xác định qua hằng số Planck thay vì một mẫu chuẩn vật lý.",
    usage: "Đây là đơn vị cơ bản SI duy nhất có sẵn tiền tố, nên các bội và ước được tạo từ gam: viết \\text{mg}, không viết \\mu\\text{kg}. Khối lượng riêng được ghi bằng \\text{kg}/\\text{m}^3 hoặc \\text{kg}\\,\\text{m}^{-3}; của nước vào khoảng 1000\\,\\text{kg}\\,\\text{m}^{-3}. Giữ ký hiệu ở dạng chữ thường, vì Kg hay KG đều sai. Đơn vị in đứng, nên hãy bọc trong \\text hoặc \\mathrm, và thêm \\, giữa số và kg. Trong các đơn vị dẫn xuất như niutơn, kg đứng đầu theo quy ước, \\text{kg}\\,\\text{m}\\,\\text{s}^{-2}. Ký hiệu và tên đơn vị đều viết thường, kể cả ở đầu câu.",
  },
  "second": {
    name: "Giây",
    meaning: "Giây, đơn vị cơ bản SI của thời gian, được định nghĩa bằng tần số chuyển tiếp siêu tinh tế của nguyên tử xesi-133.",
    usage: "Chữ s đứng là đơn vị; chữ s nghiêng thường chỉ độ dịch chuyển hoặc độ dài cung, nên cách định dạng mang ý nghĩa trong s = 5\\,\\text{m} so với t = 5\\,\\text{s}. Tránh các cách viết tắt như sec trong văn bản kỹ thuật. Giây mũ trừ một, \\text{s}^{-1}, đo tốc độ và trùng với héc khi mô tả tần số. Các dạng có tiền tố gồm \\text{ms}, \\mu\\text{s} và \\text{ns}; với tiền tố micrô, quy tắc SI ưu tiên chữ mu đứng, điều mà \\mu thông thường không cung cấp trong các phông mặc định.",
  },
  "ampere": {
    name: "Ampe",
    meaning: "Ampe, đơn vị cơ bản SI của cường độ dòng điện, được định nghĩa qua điện tích nguyên tố.",
    usage: "Mạch điện đầy những chữ A: I = 2\\,\\text{A}, mật độ dòng điện tính bằng \\text{A}/\\text{m}^2, và điện tích vì một culông bằng một ampe giây. Chữ A nghiêng thường chỉ diện tích hoặc thế vectơ, nên định dạng chữ đứng giúp phân biệt đơn vị. Các dạng có tiền tố như \\text{mA} và \\mu\\text{A} rất phổ biến trong điện tử. Viết số, một khoảng trắng mảnh, rồi ký hiệu. Trong văn xuôi, tên đơn vị viết thường, ampe, dù ký hiệu viết hoa để vinh danh André-Marie Ampère. Một miliampe là một phần nghìn ampe, viết 5\\,\\text{mA}.",
  },
  "volt": {
    name: "Vôn",
    meaning: "Vôn, đơn vị SI của hiệu điện thế: một jun năng lượng trên một culông điện tích.",
    usage: "Định luật Ohm V = IR dùng chữ V nghiêng cho đại lượng điện áp, còn bản thân đơn vị in đứng, như trong 230\\,\\text{V}; lẫn lộn hai thứ là lỗi dàn trang thường gặp. Chữ V nghiêng còn chỉ thể tích trong nhiệt động học, thêm một lý do để giữ đơn vị in đứng. Các biểu thức tương đương gồm \\text{J}/\\text{C} và \\text{W}/\\text{A}. Cường độ điện trường được đo bằng \\text{V}/\\text{m}. Các dạng có tiền tố \\text{mV} và \\text{kV} gắn trực tiếp không có khoảng trắng, còn số và đơn vị được tách bằng \\,. Chẳng hạn, pin được định mức 1.5\\,\\text{V} hoặc 9\\,\\text{V}.",
  },
  "watt": {
    name: "Oát",
    meaning: "Oát, đơn vị SI của công suất: một jun được truyền trong một giây.",
    usage: "Công suất xuất hiện trong P = VI, P = I^2 R, và thông lượng bức xạ tính bằng \\text{W}/\\text{m}^2, như hằng số mặt trời khoảng 1361\\,\\text{W}\\,\\text{m}^{-2}. Chữ W nghiêng thường chỉ công, nên đơn vị chữ đứng và đại lượng chữ nghiêng có thể đứng cạnh nhau: W = 10\\,\\text{J} trong 2\\,\\text{s} cho 5\\,\\text{W}. Hóa đơn điện dùng kilôoát giờ, viết \\text{kW}\\,\\text{h} hoặc \\text{kWh}. Đừng viết W/s cho năng lượng; oát vốn đã là một tốc độ. Các nhà máy lớn được định mức bằng mêgaoát, \\text{MW}, và tổn hao truyền tải được tính bằng I^2 R.",
  },
  "joule": {
    name: "Jun",
    meaning: "Jun, đơn vị SI của năng lượng, công và nhiệt lượng, bằng một niutơn mét hay kg·m²/s².",
    usage: "Động năng \\frac{1}{2}mv^2 ra đơn vị jun khi dùng đơn vị SI, và các đại lượng mol dùng \\text{kJ}/\\text{mol}. Mômen lực cũng có thứ nguyên N m, nhưng theo quy ước được viết \\text{N}\\,\\text{m} thay vì J để cho biết đó không phải năng lượng. Định dạng chữ đứng giúp đơn vị khác với chữ J nghiêng, có thể là mật độ dòng điện, mômen quán tính hoặc ma trận Jacobi. Viết phép nhân các đơn vị bằng khoảng trắng mảnh hoặc \\cdot, chẳng hạn \\text{kg}\\cdot\\text{m}^2\\,\\text{s}^{-2}. Năng lượng thực phẩm tính bằng kilôcalo được quy đổi theo 1\\,\\text{kcal} = 4184\\,\\text{J}.",
  },
  "newton": {
    name: "Niutơn",
    meaning: "Niutơn, đơn vị SI của lực: lực truyền cho vật một kilôgam gia tốc một mét trên giây bình phương.",
    usage: "Trọng lượng và lực được ghi bằng niutơn, nên vật một kilôgam nặng khoảng 9.81\\,\\text{N} trên mặt đất. Ứng suất và áp suất là lực chia cho diện tích, \\text{N}/\\text{m}^2, tức là paxcan. Chữ N đứng là đơn vị; chữ N nghiêng thường là phản lực pháp tuyến, một số đếm hoặc các đại lượng liên quan đến số Avogadro, còn chữ kép \\mathbb{N} là tập số tự nhiên. Giữ một khoảng trắng mảnh giữa số và đơn vị. Độ cứng lò xo được đo bằng \\text{N}/\\text{m}. Đơn vị này vinh danh Isaac Newton, nên ký hiệu viết hoa nhưng tên đơn vị thì không.",
  },
  "pascal": {
    name: "Paxcan",
    meaning: "Paxcan, đơn vị SI của áp suất và ứng suất, bằng một niutơn trên mét vuông.",
    usage: "Vì một paxcan rất nhỏ, các giá trị thực tế dùng tiền tố: áp suất khí quyển khoảng 101.325\\,\\text{kPa}, bản đồ thời tiết dùng héctôpaxcan (hPa), và độ bền vật liệu được ghi bằng MPa hoặc GPa. Môđun Young của thép vào khoảng 200\\,\\text{GPa}. Ký hiệu gồm chữ P hoa và chữ a thường, phải in đứng; \\text{Pa} bảo đảm điều đó. Bản thân áp suất là chữ nghiêng p hoặc P. Viết đơn vị dưới dạng \\text{N}/\\text{m}^2 là tương đương nhưng ít phổ biến hơn trong các văn bản hiện đại. Áp suất dư và áp suất tuyệt đối chênh nhau khoảng một atmotphe, nên hãy nói rõ bạn dùng loại nào.",
  },
  "hertz": {
    name: "Héc",
    meaning: "Héc, đơn vị SI của tần số: một chu kỳ mỗi giây, có thứ nguyên bằng giây mũ trừ một.",
    usage: "Xử lý tín hiệu và âm học ghi tần số như 440\\,\\text{Hz} cho nốt La chuẩn và tốc độ lấy mẫu như 44.1\\,\\text{kHz}; bộ xử lý chạy ở GHz. Tần số góc \\omega = 2\\pi f theo thông lệ được ghi bằng \\text{rad}/\\text{s}, không phải héc, để tránh nhầm lẫn một thừa số 2\\pi. Giữ chữ H hoa và chữ z thường. Tiền tố gắn trực tiếp, \\text{MHz}, và số cần một khoảng trắng mảnh trước đơn vị. Với độ phóng xạ, cùng thứ nguyên này được gọi là becơren. Chu kỳ là nghịch đảo, T = 1/f.",
  },
  "per-slash-in-units": {
    name: "Dấu gạch chéo trong đơn vị",
    meaning: "Dấu gạch chéo mang nghĩa “trên” trong các đơn vị ghép như m/s, chia một đơn vị cho một đơn vị khác.",
    usage: "Trong chế độ toán, / là ký hiệu thông thường không có khoảng cách thêm, cho dáng gọn \\text{m}/\\text{s} mà đơn vị cần. Quy tắc SI chỉ cho phép một dấu gạch chéo trong một đơn vị, nên gia tốc là \\text{m}/\\text{s}^2 và không bao giờ là m/s/s; với các đơn vị phức tạp, số mũ âm như \\text{J}\\,\\text{kg}^{-1}\\,\\text{K}^{-1} rõ ràng hơn. Dùng ngoặc tròn khi mẫu số có nhiều thừa số: \\text{W}/(\\text{m}^2\\,\\text{K}). Với phân số tổng quát trong phương trình hiển thị, \\frac thường tốt hơn dấu gạch chéo, nhưng trong dòng thì dấu gạch chéo tránh được tử số và mẫu số bị xếp chồng chật chội.",
  },
  "squared": {
    name: "Bình phương",
    meaning: "Chỉ số trên 2, nâng một đại lượng hoặc đơn vị lên lũy thừa bậc hai, như x² hay mét vuông.",
    usage: "Gõ ^2 gắn ký hiệu đơn tiếp theo làm chỉ số trên; với số mũ dài hơn, cần ngoặc nhọn, x^{12}, vì x^12 sẽ cho x^1 theo sau là chữ số 2. Đơn vị bình phương như \\text{m}^2 mô tả diện tích, và \\text{s}^2 xuất hiện trong gia tốc. Khi áp dụng cho hàm số, \\sin^2 x nghĩa là (\\sin x)^2, một quy ước không mở rộng sang \\sin^{-1}, vốn biểu thị hàm ngược. Chỉ số trên kép như x^2^3 gây lỗi; hãy viết x^{2^3} hoặc (x^2)^3 tùy theo ý bạn. Dùng \\text{m}^2 thay vì các cách viết tắt bằng chữ trong văn bản khoa học.",
  },
  "cubed": {
    name: "Lập phương",
    meaning: "Chỉ số trên 3 để lấy lập phương: lũy thừa bậc ba của số hoặc biến, và các đơn vị khối của thể tích.",
    usage: "Thể tích được biểu diễn bằng \\text{m}^3, \\text{cm}^3 hoặc lít (1\\,\\text{L} = 10^{-3}\\,\\text{m}^3), và khối lượng riêng dùng các đơn vị trên mét khối, \\text{kg}/\\text{m}^3. Trong đại số, lập phương xuất hiện trong các hằng đẳng thức như a^3 - b^3 = (a - b)(a^2 + ab + b^2). Chỉ số trên chỉ áp dụng cho ký hiệu đứng ngay trước nó, nên đơn vị có tiền tố được lập phương nguyên khối, \\text{cm}^3, nghĩa là (cm) lập phương chứ không phải c nhân m lập phương. Đặt số mũ nhiều ký hiệu trong ngoặc nhọn: x^{3n}. Căn bậc ba được viết \\sqrt[3]{x}. Trong văn bản khoa học, hãy viết \\text{m}^3 thay vì các cách viết tắt bằng chữ.",
  },
};

export default text;
