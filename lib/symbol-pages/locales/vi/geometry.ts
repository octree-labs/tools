import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/geometry/<slug>. */
const text: SymbolPageTranslations = {
  "angle": {
    name: "Ký hiệu góc",
    meaning: "Ký hiệu góc đặt trước tên các đỉnh, như góc ABC tại đỉnh B.",
    usage: "Các chứng minh hình học viết \\angle ABC cho góc tại đỉnh B, và \\angle ABC \\cong \\angle DEF cho hai góc bằng nhau. Đây là ký hiệu toán thông thường, nên không có khoảng trắng thêm vào phía sau, phù hợp với tên như \\angle A. Sách giáo khoa Mỹ thường ghi số đo dạng m\\angle A = 60^{\\circ}, tách góc khỏi số đo của nó. Các ký hiệu liên quan gồm \\measuredangle, có thêm cung để chỉ góc được đo hoặc góc định hướng, và \\sphericalangle cho góc trên mặt cầu. Tránh dùng nó như chữ viết tắt của từ góc trong văn xuôi.",
  },
  "measured-angle": {
    name: "Ký hiệu số đo góc",
    meaning: "Ký hiệu góc có cung, thường dùng cho góc được đo hoặc góc định hướng.",
    usage: "Một số giáo trình hình học dành \\angle cho góc như một hình và \\measuredangle cho số đo của nó, viết \\measuredangle ABC = 30^{\\circ}. Trong hình học thi olympic, \\measuredangle thường chỉ góc định hướng theo modulo 180^{\\circ}, giúp các lập luận về tứ giác nội tiếp không phụ thuộc vào cách vẽ hình: A, B, C, D cùng nằm trên một đường tròn khi và chỉ khi \\measuredangle ABC = \\measuredangle ADC. Vì quy ước khác nhau, hãy định nghĩa ý bạn muốn trong một ghi chú về ký hiệu. Nó hoạt động như một ký hiệu thông thường, nên khoảng cách với các chữ cái bên cạnh khá sát.",
  },
  "spherical-angle": {
    name: "Ký hiệu góc cầu",
    meaning: "Ký hiệu góc cầu, dùng cho góc giữa các cung tròn lớn trên mặt cầu.",
    usage: "Hình học cầu, hàng hải và thiên văn học dùng nó cho các góc tạo bởi các cung trên mặt cầu, nơi tổng các góc của một tam giác lớn hơn 180^{\\circ}. Định lý Girard cho diện tích tam giác cầu là R^2(A + B + C - \\pi), tức là phần dôi cầu. Hình dạng của nó khác cả \\measuredangle lẫn \\angle thông thường, nên đừng tùy tiện hoán đổi chúng. Một số tác giả dùng nó cho góc khối hoặc góc định hướng, nên một dòng định nghĩa sẽ giúp người đọc. Đây là ký hiệu thông thường, nên hãy thêm \\, nếu nó đứng quá sát nhãn phía sau.",
  },
  "not-congruent": {
    name: "Ký hiệu không bằng nhau",
    meaning: "Dấu bằng nhau (đồng dạng hoàn toàn) bị gạch chéo: hai hình hoặc hai đối tượng không bằng nhau hoặc không đẳng cấu.",
    usage: "Trong hình học, \\triangle ABC \\ncong \\triangle DEF nói rằng hai tam giác không bằng nhau; trong đại số, \\cong thường có nghĩa là đẳng cấu, nên G \\ncong H nói rằng hai nhóm không đẳng cấu. Đây là một quan hệ, nên khoảng cách được đặt tự động. Hãy ưu tiên glyph dựng sẵn này hơn \\not\\cong, vốn chồng một gạch chéo chung lên và có thể lệch khỏi tâm ký hiệu. Các quan hệ phủ định liên quan gồm \\neq và \\nsim. Khi dùng \\cong cho đẳng cấu, hãy nêu phạm trù hoặc cấu trúc nếu không hiển nhiên, vì các không gian có thể đồng phôi mà không đẳng cấu như các nhóm.",
  },
  "similar-or-equal": {
    name: "Ký hiệu đồng dạng hoặc bằng",
    meaning: "Dấu ngã trên một gạch ngang, đọc là tương đương đồng luân, xấp xỉ tiệm cận hoặc đẳng cấu.",
    usage: "Ý nghĩa của nó phụ thuộc vào lĩnh vực: các nhà tô pô viết X \\simeq Y cho tương đương đồng luân, các nhà lý thuyết phạm trù dùng cho tương đương phạm trù, còn các nhà vật lý dùng cho xấp xỉ bằng. Hãy so sánh với \\cong (dấu ngã trên hai gạch), thường dành cho đẳng cấu hoặc bằng nhau, \\approx (hai dấu ngã) cho xấp xỉ số, và \\sim cho tương đương tiệm cận hoặc quan hệ tương đương. Vì các quy ước chồng chéo nhau, hãy nói rõ bạn dùng quy ước nào. Là ký hiệu quan hệ, nó tự động có khoảng cách rộng ở hai bên, nên không cần thêm khoảng trắng thủ công.",
  },
  "arc": {
    name: "Cung tròn",
    meaning: "Cung hình mặt cau, đôi khi đặt trên các chữ cái để chỉ một cung của đường tròn.",
    usage: "Khi đứng riêng, \\frown là một cung thuộc lớp quan hệ, và các nhà lý thuyết tập hợp dùng nó cho phép nối dãy, s^\\frown t. Với cung hình học giữa hai điểm A và B, ký hiệu phải nằm trên các chữ cái; \\overset{\\frown}{AB} làm được điều này, dù cung không co giãn, và các dấu cung rộng chuyên dụng từ phông bổ sung trông đẹp hơn với nhãn dài. Ảnh gương của nó là \\smile, và hai ký hiệu kết hợp trong một số cách viết cho quan hệ tương thích. Vì ký hiệu trơn có khoảng cách của quan hệ, hãy kiểm tra kết quả khi nó nằm giữa các chữ cái.",
  },
  "prime-feet-minutes": {
    name: "Dấu phẩy trên (feet, phút)",
    meaning: "Một dấu phẩy trên, chỉ feet, phút cung hoặc phút thời gian sau một con số.",
    usage: "Trong chế độ toán, dấu nháy đơn trở thành dấu phẩy trên ở chỉ số trên, nên 5'\\,9'' đọc là năm feet chín inch, và 12^{\\circ}\\,30' cho mười hai độ ba mươi phút cung. Ngoài chế độ toán, dấu nháy đơn chỉ là dấu đóng ngoặc kép thông thường và trông không giống dấu phẩy trên, nên hãy đặt số đo trong chế độ toán. Cùng ký tự này tạo dấu phẩy trên của đạo hàm, f'(x), và đánh dấu điểm hoặc biến đã biến đổi, A' và x'. Với tọa độ địa lý như 40^{\\circ}\\,26'\\,46'', hãy chèn khoảng hẹp giữa các thành phần để chúng không dính vào nhau.",
  },
  "double-prime-inches-seconds": {
    name: "Dấu phẩy trên kép (inch, giây)",
    meaning: "Hai dấu phẩy trên, chỉ inch, giây cung hoặc giây sau một con số.",
    usage: "Trong chế độ toán, '' trở thành một chỉ số trên gồm hai dấu phẩy, nên 6'' chỉ sáu inch hoặc sáu giây cung, và 2^{\\circ}\\,15'\\,30'' viết một góc theo độ, phút và giây. Gõ ký tự ngoặc kép thay vào sẽ cho một glyph khác và nên tránh. Trong chế độ văn bản, hai dấu nháy đơn tạo dấu đóng ngoặc kép, không phải dấu phẩy trên, nên số đo cần nằm trong chế độ toán. Cùng cấu trúc này viết đạo hàm cấp hai, f''(x), và các điểm biến đổi hai lần như A''. Các nhà thiên văn dùng nó cho giây cung, như độ phân giải 0.1''.",
  },
  "line-segment": {
    name: "Đoạn thẳng",
    meaning: "Gạch ngang trên AB, ký hiệu chuẩn cho đoạn thẳng nối hai điểm A và B.",
    usage: "Các giáo trình hình học viết \\overline{AB} cho đoạn thẳng và AB trơn cho độ dài của nó, nên \\overline{AB} \\cong \\overline{CD} đi cùng với AB = CD. Gạch ngang kéo dài phủ toàn bộ đối số, khác với \\bar{x}, một dấu có độ rộng cố định cho một chữ cái. Các nghĩa khác của \\overline gồm số phức liên hợp \\overline{z}, bao đóng của tập hợp \\overline{A}, và phép phủ định trong đại số Boole, \\overline{A \\cdot B}. Tia và đường thẳng dùng \\overrightarrow{AB} và \\overleftrightarrow{AB}, thể hiện hướng hoặc độ dài vô hạn.",
  },
};

export default text;
