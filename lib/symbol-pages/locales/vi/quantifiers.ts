import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/quantifiers/<slug>. */
const text: SymbolPageTranslations = {
  "unique-exists": {
    name: "Lượng từ tồn tại duy nhất",
    meaning: "Tồn tại đúng một: lượng từ tồn tại kèm dấu chấm than để đòi hỏi tính duy nhất.",
    usage: "Các khẳng định về tính duy nhất, như sự tồn tại nghiệm duy nhất của bài toán giá trị ban đầu hay phần tử đơn vị duy nhất trong một nhóm, được viết là \\exists! x. Trong chế độ toán của TeX, dấu chấm than là ký hiệu đóng, nên \\exists! x có khoảng cách hợp lý, dù một số tác giả thêm \\, trước biến cho rõ. Về hình thức, \\exists! x\\, P(x) là viết tắt của \\exists x\\,(P(x) \\wedge \\forall y\\,(P(y) \\to y = x)). Tránh viết \\exists_1, vì một số người đọc sẽ hiểu đó là biến có chỉ số dưới. Trong văn xuôi, cụm “tồn tại duy nhất” thường dễ đọc hơn ký hiệu.",
  },
  "for-all-x": {
    name: "Lượng từ với mọi x",
    meaning: "Lượng từ với mọi áp dụng cho x, khẳng định mệnh đề theo sau đúng với mọi giá trị của x.",
    usage: "Định nghĩa tính liên tục, các tiên đề nhóm và nguyên lý quy nạp đều mở đầu bằng \\forall x. Ký hiệu \\forall là một nguyên tử toán học thông thường, nên TeX không chèn khoảng trắng sau biến; thêm \\, hoặc dấu hai chấm, như trong \\forall x\\, P(x) hay \\forall x : P(x), giúp các công thức dài dễ đọc hơn nhiều. Một số tác giả đặt lượng từ sau mệnh đề bằng lời (“với mọi x”), cách này nhẹ nhàng hơn trong văn xuôi. Đừng dùng \\forall trong câu văn như chữ viết tắt của “với mọi” trừ khi độc giả đã quen với cách viết tắt đó.",
  },
  "exists-x": {
    name: "Lượng từ tồn tại x",
    meaning: "Lượng từ tồn tại ràng buộc x, khẳng định có ít nhất một giá trị của x làm mệnh đề đúng.",
    usage: "Các ứng dụng điển hình gồm định nghĩa giới hạn (\\exists \\delta > 0), tính toàn ánh (\\forall y\\, \\exists x : f(x) = y) và các phần tử chứng kiến trong logic. Thứ tự rất quan trọng: \\forall y \\exists x khác với \\exists x \\forall y, vì vậy hãy viết chuỗi lượng từ cẩn thận. Dạng phủ định \\nexists là một ký hiệu riêng, nghĩa là “không tồn tại”. Giống \\forall, \\exists không tự có khoảng trắng sau biến bị ràng buộc, nên hãy thêm một khoảng hẹp hoặc dấu hai chấm trước vị từ. Để diễn đạt tính duy nhất, thêm dấu chấm than để được \\exists!.",
  },
  "for-all-in-set": {
    name: "Lượng từ với mọi trên tập hợp",
    meaning: "Lượng từ với mọi bị chặn: mệnh đề phải đúng với mọi phần tử x của tập hợp A.",
    usage: "Giới hạn lượng từ trên một tập hợp, như \\forall x \\in A, là cách viết tắt của \\forall x\\,(x \\in A \\to P(x)) và là cách hầu hết các nhà toán học thực sự viết. \\in có khoảng cách của quan hệ, nên cụm này tự căn khoảng; chỉ cần tách nó khỏi vị từ bằng dấu phẩy, dấu hai chấm hoặc \\; cho dễ đọc. Với nhiều biến, bạn có thể viết \\forall x, y \\in A thay vì lặp lại lượng từ. Đừng nhầm \\in với \\epsilon hay \\varepsilon: trong một số phông chữ chúng trông giống nhau, nhưng đó là chữ cái, không phải quan hệ thuộc.",
  },
  "exists-in-set": {
    name: "Lượng từ tồn tại trên tập hợp",
    meaning: "Lượng từ tồn tại bị chặn: có một phần tử x thuộc A thỏa mãn điều kiện theo sau.",
    usage: "Dạng gọn này thay cho \\exists x\\,(x \\in A \\wedge P(x)) và xuất hiện thường xuyên trong giải tích, chẳng hạn tính trù mật của số hữu tỉ: giữa hai số thực bất kỳ \\exists q \\in \\mathbb{Q}. Phủ định của \\exists x \\in A\\, P(x) là \\forall x \\in A\\, \\neg P(x), một quy tắc đáng nhớ khi phủ định các định nghĩa. Dùng \\nexists x \\in A cho “không có phần tử nào của A”. Đặt dấu hai chấm, cụm “sao cho” hoặc \\; trước vị từ để người đọc thấy lượng từ kết thúc ở đâu.",
  },
  "such-that-colon": {
    name: "Dấu hai chấm “sao cho”",
    meaning: "Dấu hai chấm đọc là “sao cho” trong các mệnh đề có lượng từ và trong cách viết tập hợp theo tính chất, tách biến khỏi điều kiện của nó.",
    usage: "Trong chế độ toán, dấu hai chấm thường được xem là quan hệ và nhận khoảng trắng dày bằng nhau ở hai bên, phù hợp với \\{x : x > 0\\} và \\forall x : P(x). Với khai báo hàm, hãy dùng \\colon, vì nó có khoảng cách của dấu câu: f\\colon A \\to B trông đúng, còn f : A \\to B để lại khoảng hở trước dấu hai chấm. Với định nghĩa, := ghép từ hai ký tự có thể lệch theo chiều dọc; một ký hiệu định nghĩa riêng từ gói mở rộng sẽ khắc phục điều đó. Một số tác giả thích \\mid hoặc gạch đứng trong cách viết tập hợp; hãy chọn một cách và dùng nhất quán.",
  },
  "set-builder": {
    name: "Ký hiệu tập hợp theo tính chất",
    meaning: "Cách viết tập hợp theo tính chất: tập hợp mọi x sao cho tính chất P(x) đúng, viết bằng dấu ngoặc nhọn và một dấu phân cách.",
    usage: "Trong chế độ toán, dấu ngoặc nhọn phải được thoát thành \\{ và \\}, nếu không chúng chỉ dùng để nhóm và biến mất khỏi kết quả. \\mid là quan hệ nên có khoảng trắng thích hợp ở hai bên, khác với | trần là ký hiệu thường và làm các chữ bị chen chúc. Khi điều kiện chứa phân số hoặc nội dung cao, hãy điều chỉnh kích thước đồng bộ: \\left\\{ x \\;\\middle|\\; \\frac{x}{2} \\in \\mathbb{Z} \\right\\}. Dấu hai chấm cũng làm dấu phân cách tốt không kém và tránh nhầm lẫn khi chính điều kiện chứa giá trị tuyệt đối.",
  },
  "quantified-statement": {
    name: "Mệnh đề có lượng từ lồng nhau",
    meaning: "Một câu có lượng từ lồng nhau: với mọi x tồn tại y làm P(x, y) đúng, trong đó y được phép phụ thuộc vào x.",
    usage: "Mẫu này là nền tảng của các định nghĩa epsilon-delta và của những khẳng định như “mọi số nguyên đều có số liền sau”. Đổi thứ tự thành \\exists y \\forall x cho ra một khẳng định mạnh hơn nhiều, một y duy nhất dùng được cho mọi x, và nhầm lẫn hai dạng này là lỗi kinh điển trong chứng minh. Dấu hai chấm tách phần tiền tố lượng từ khỏi công thức chính; nếu quy ước dấu hai chấm xung đột với ký hiệu hàm ở chỗ khác, hãy dùng dấu chấm hoặc dấu ngoặc. Để dễ đọc với tiền tố dài, thêm \\, giữa các khối lượng từ, hoặc viết từng khối thành cụm từ: với mọi x tồn tại y.",
  },
};

export default text;
