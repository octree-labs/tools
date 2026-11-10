import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/boolean/<slug>. */
const text: SymbolPageTranslations = {
  "nand": {
    name: "Phép NAND",
    meaning: "Dấu hội có vạch ngang phía trên, dùng làm phép toán NAND (vạch Sheffer): đúng trừ khi cả hai đầu vào đều đúng.",
    usage: "NAND là một hệ đầy đủ chức năng, nên mọi hàm Boole đều có thể dựng chỉ từ p \\barwedge q, và các nhà thiết kế mạch số dùng nó chính vì lý do này. Các nhà logic học cũng viết vạch Sheffer bằng một gạch đứng, p \\mid q hoặc p \\uparrow q, vì vậy hãy nêu rõ ký hiệu của bạn một lần. \\barwedge là một toán tử hai ngôi, có khoảng cách vừa ở mỗi bên. Đừng nhầm với \\veebar, có vạch nằm dưới dấu tuyển và thường chỉ phép tuyển loại trừ, hay với \\doublebarwedge, có hai vạch. Bảng chân trị của nó là phần bù của bảng chân trị \\wedge.",
  },
  "nor-operator-bar-over-vee": {
    name: "Phép NOR dạng vạch trên dấu tuyển",
    meaning: "Dấu tuyển có vạch ngang phía trên, được ghép thủ công để biểu diễn NOR (mũi tên Peirce): chỉ đúng khi cả hai đầu vào đều sai.",
    usage: "Các phông toán thông dụng không có lệnh đơn chuẩn cho ký hiệu NOR, nên \\bar{\\vee} tạo ra nó bằng cách đặt một dấu thanh lên ký hiệu tuyển. Hệ quả phụ: ký hiệu có dấu thanh trở thành một nguyên tố thường và mất khoảng cách toán tử hai ngôi vốn có của \\vee, vì vậy hãy viết \\mathbin{\\bar{\\vee}} để khôi phục, tốt nhất là đặt trong một \\newcommand. Ký hiệu thay thế p \\downarrow q (mũi tên Peirce) được hiểu rộng rãi và tránh được vấn đề này. Đừng nhầm với \\veebar, có vạch nằm dưới dấu tuyển và thường nghĩa là XOR.",
  },
  "boolean-and": {
    name: "Phép hội Boole",
    meaning: "Dấu chấm giữa dòng đặt giữa hai biến, ký hiệu kỹ thuật cho phép AND Boole (phép hội logic).",
    usage: "Đại số mạch chuyển mạch và điện tử số viết phép hội theo kiểu phép nhân: A \\cdot B, hoặc đơn giản là AB, phản ánh việc AND hoạt động như phép nhân trên 0 và 1. Trong logic hình thức, cùng phép toán đó được viết A \\wedge B hoặc A \\land B. \\cdot là toán tử hai ngôi nên đã có sẵn khoảng cách vừa; đừng dùng dấu chấm câu, vốn trong chế độ toán được xem như dấu câu và nằm trên đường chân chữ. Nhiều sách giáo khoa bỏ hẳn dấu chấm trong các biểu thức tổng các tích như AB + \\overline{A}C, chỉ giữ \\cdot ở nơi việc viết liền có thể gây nhầm lẫn, chẳng hạn giữa các tên tín hiệu nhiều chữ cái.",
  },
  "boolean-or": {
    name: "Phép tuyển Boole",
    meaning: "Dấu cộng dùng làm phép OR Boole trong đại số mạch chuyển mạch: đầu ra bằng 1 khi có ít nhất một đầu vào bằng 1.",
    usage: "Người thiết kế mạch viết phép tuyển là A + B, nên các dạng tổng các tích như AB + \\overline{A}C đọc rất tự nhiên. Hãy cẩn thận với nghĩa số học: trong đại số Boole 1 + 1 = 1, còn trong trường hai phần tử dấu cộng nghĩa là XOR và 1 + 1 = 0, đó là lý do XOR thường có ký hiệu riêng \\oplus. Các nhà logic học viết cùng phép OR này là A \\vee B hoặc A \\lor B. Không cần lệnh đặc biệt nào; dấu + đã mang khoảng cách toán tử hai ngôi, và trong biểu thức dài có thể ngắt dòng trước dấu + bên trong môi trường multline.",
  },
  "boolean-not": {
    name: "Phép phủ định Boole",
    meaning: "Vạch ngang kéo hết chiều rộng của đối số; ký hiệu phép NOT Boole trong mạch logic và bao đóng của tập hợp trong tô pô.",
    usage: "Trong logic số, \\overline{A} là tín hiệu đảo, và \\overline{A \\cdot B} vẽ một vạch liền trên cả biểu thức, đó là lý do trực quan khiến các kỹ sư ưa dùng nó hơn tiền tố \\neg. Các nhà tô pô dùng cùng cấu trúc này cho bao đóng của một tập hợp. So với \\bar{A}, một dấu thanh có độ rộng cố định dành cho một chữ cái, \\overline giãn ra phủ mọi thứ bên trong dấu ngoặc nhọn. Các phép phủ định lồng nhau như \\overline{\\overline{A}} xếp chồng gọn gàng. Để có vạch ngắn hơn một chút trên chữ cái đơn, một số tác giả chọn \\bar; cách nào cũng được miễn là bạn dùng nhất quán.",
  },
  "complement": {
    name: "Phần bù",
    meaning: "Dấu phẩy trên đặt sau một biến hoặc tập hợp, ký hiệu gọn cho phần bù hoặc phép phủ định Boole của A.",
    usage: "Các giáo trình lý thuyết tập hợp thường viết A' cho phần bù U \\setminus A, và một số sách thiết kế logic viết A' thay cho \\overline{A} vì nó nằm gọn trên một dòng và dễ gõ. Trong chế độ toán, dấu nháy đơn tự động trở thành chỉ số trên \\prime, nên A'' cho dấu hai phẩy với khoảng cách đúng. Nguy cơ là sự mơ hồ: A' còn ký hiệu đạo hàm, tập dẫn xuất trong tô pô và không gian đối ngẫu. Các cách thay thế gồm A^c và A^{\\complement}. Dù chọn cách nào, hãy định nghĩa nó một lần ở gần đầu tài liệu.",
  },
  "de-morgan": {
    name: "Định luật De Morgan",
    meaning: "Định luật De Morgan viết theo ký hiệu Boole: phần bù của một phép AND bằng phép OR của các phần bù.",
    usage: "Đẳng thức này cho phép người thiết kế chuyển mạch dựa trên AND thành mạch dựa trên OR, và là lý do một cổng NAND tương đương với một cổng OR có các đầu vào bị đảo. Dạng đối ngẫu của nó là \\overline{A + B} = \\overline{A} \\cdot \\overline{B}. Ví dụ cho thấy tại sao \\overline quan trọng: một vạch dài trên A \\cdot B khác hẳn về hình thức so với các vạch riêng trên từng chữ cái, và sự khác biệt đó chính là toàn bộ nội dung của định luật. Trong ký hiệu tập hợp, định luật này là (A \\cap B)^c = A^c \\cup B^c, còn trong logic là \\neg(p \\wedge q) \\equiv \\neg p \\vee \\neg q.",
  },
};

export default text;
