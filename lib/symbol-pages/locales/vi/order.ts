import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/order/<slug>. */
const text: SymbolPageTranslations = {
  "curly-precedes": {
    name: "Quan hệ đứng trước cong",
    meaning: "Quan hệ “đứng trước hoặc bằng” dạng cong, dùng cho các thứ tự không chặt và quan hệ ưu tiên không phải ≤ thông thường của số.",
    usage: "Các nhà lý thuyết thứ tự và kinh tế học dùng \\preccurlyeq khi một tiền thứ tự trừu tượng cần ký hiệu khác hẳn \\leq, chẳng hạn sự ưu tiên yếu của người tiêu dùng x \\preccurlyeq y hoặc thứ tự trội trên các phân hoạch. Quan hệ chặt tương ứng là \\prec, và ký hiệu đối xứng là \\succcurlyeq. Đừng nhầm nó với \\preceq, có vạch thẳng bên dưới thay cho vạch cong; một số tác giả dùng cả hai trong một bài để chỉ hai thứ tự khác nhau. Vì đây là quan hệ, TeX tự động bao quanh nó bằng khoảng trắng rộng, nên đừng bao giờ đệm thêm bằng tay bằng \\, hay \\;.",
  },
  "curly-succeeds": {
    name: "Quan hệ đứng sau cong",
    meaning: "Quan hệ “đứng sau hoặc bằng” dạng cong, ngược với \\preccurlyeq, cho thứ tự yếu, quan hệ ưu tiên và quan hệ trội hóa.",
    usage: "Trong kinh tế học vi mô, x \\succcurlyeq y đọc là “x được ưu tiên yếu hơn y”, và trong đại số tuyến tính nó đôi khi chỉ quan hệ trội hóa hoặc một bất đẳng thức suy rộng. Ký hiệu vạch thẳng \\succeq trông tương tự và là lựa chọn phổ biến hơn cho ma trận nửa xác định dương (A \\succeq 0), nên hãy chọn một quy ước và giữ nhất quán trong cả bài. Phiên bản chặt là \\succ. Vì phủ định một ký hiệu quan hệ bằng \\not có thể trông vụng, hãy kiểm tra kết quả: các phủ định riêng như \\nsucceq tồn tại cho dạng vạch thẳng và thường đẹp hơn \\not\\succcurlyeq.",
  },
  "not-less-than": {
    name: "Dấu không nhỏ hơn",
    meaning: "Dấu nhỏ hơn bị phủ định: khẳng định một đại lượng không nhỏ hơn hẳn một đại lượng khác.",
    usage: "Viết a \\nless b về logic giống a \\geq b trong một thứ tự toàn phần, nhưng trong thứ tự bộ phận hai cách viết nói điều khác nhau, và đó chính là lúc \\nless phát huy tác dụng: hai phần tử không so sánh được thỏa mãn cả a \\nless b lẫn b \\nless a. Glyph là một ký hiệu ghép sẵn có gạch chéo, nên gọn gàng hơn \\not< vốn có gạch chéo có thể lệch tâm. Ký hiệu đi kèm cho chiều ngược lại là \\ngtr. Với các phiên bản không chặt bị phủ định, hãy dùng \\nleq hoặc \\nleqslant thay vì chồng \\not.",
  },
  "not-greater-than": {
    name: "Dấu không lớn hơn",
    meaning: "Dấu lớn hơn bị phủ định, khẳng định vế trái không lớn hơn hẳn vế phải.",
    usage: "Tên lệnh bỏ các nguyên âm của từ tiếng Anh nghĩa là “lớn hơn” (\\ngtr, không phải \\ngt hay \\ngreater), điều dễ gây lỗi khi gõ theo trí nhớ. Trong một thứ tự tuyến tính, x \\ngtr y đơn giản nghĩa là x \\leq y, nên phần lớn người viết chọn dạng khẳng định; \\ngtr tự nhiên hơn trong thứ tự bộ phận, dàn, hoặc khi nêu việc một giả thiết không thỏa mãn, chẳng hạn một dãy không lớn hơn một cận kể từ một chỉ số nào đó. Hãy ghép nó với \\nless cho chiều ngược lại và \\ngeq cho phiên bản không chặt bị phủ định. Nó có khoảng cách quan hệ giống như chính dấu >.",
  },
  "not-less-or-equal": {
    name: "Dấu không nhỏ hơn hoặc bằng",
    meaning: "Không nhỏ hơn hoặc bằng: phủ định của ≤ với gạch chéo xuyên qua dạng vạch ngang.",
    usage: "Dùng \\nleq khi phát biểu rằng một bất đẳng thức không đúng, ví dụ trong phản ví dụ hoặc trong tập sắp thứ tự bộ phận, nơi x \\nleq y không kéo theo y \\leq x. Có ba glyph liên quan: \\nleq phủ định \\leq một vạch, \\nleqslant phủ định \\leqslant vạch nghiêng, và \\nleqq phủ định \\leqq hai vạch. Hãy chọn phủ định khớp với kiểu không phủ định mà phần còn lại của tài liệu dùng để các ký hiệu trông cùng một họ. \\nleq ghép sẵn nên được ưu tiên hơn \\not\\leq, vốn đặt một gạch chéo chung có thể không thẳng hàng với vạch.",
  },
  "not-greater-or-equal": {
    name: "Dấu không lớn hơn hoặc bằng",
    meaning: "Không lớn hơn hoặc bằng: dạng có gạch chéo của ≥, báo hiệu bất đẳng thức không đúng.",
    usage: "Trong giải tích thực, x \\ngeq 0 chỉ là x < 0, nhưng với thứ tự trên vectơ hay ma trận thì nó yếu hơn: một vectơ có thể không không âm theo từng thành phần nhưng cũng không phải là vectơ âm, nên \\ngeq là ký hiệu trung thực ở đó. Nó thuộc cùng nhóm với \\nleq, \\ngeqslant và \\ngeqq, và bạn nên chọn phiên bản có bản không phủ định tương ứng xuất hiện trong văn bản. Tránh \\not\\geq nếu bạn quan tâm đến hình thức, vì gạch chéo chung được căn vị trí cho dấu = và có thể trông lệch. Giống mọi quan hệ, nó tự động có khoảng trắng rộng.",
  },
  "minimum": {
    name: "Giá trị nhỏ nhất",
    meaning: "Toán tử min, cho giá trị nhỏ nhất của một tập hữu hạn hoặc giá trị bé nhất mà một hàm đạt được.",
    usage: "\\min là tên toán tử định nghĩa sẵn: nó in chữ “min” đứng thẳng với khoảng cách đúng, và trong công thức hiển thị chỉ số dưới nằm bên dưới, như trong \\min_{x \\in S} f(x). Trong dòng, chỉ số dưới chuyển sang bên cạnh để tiết kiệm chiều cao dòng; hãy buộc nó xuống dưới bằng \\min\\limits_{x} nếu thực sự cần. Gõ min trơn trong chế độ toán cho ra ba biến nghiêng nhân với nhau, một lỗi thường gặp. Với đối số làm cực tiểu không có lệnh dựng sẵn, nên hãy định nghĩa \\DeclareMathOperator*{\\argmin}{arg\\,min} trong phần preamble. Hãy phân biệt \\min với \\inf, vốn không nhất thiết đạt được.",
  },
  "maximum": {
    name: "Giá trị lớn nhất",
    meaning: "Toán tử max: phần tử lớn nhất của một tập hợp hoặc giá trị lớn nhất mà một hàm đạt được trên miền xác định.",
    usage: "Các bài toán tối ưu, chuẩn max \\|x\\|_\\infty = \\max_i |x_i| và hàm kích hoạt ReLU \\max(0, x) đều dựa vào \\max. Nó ứng xử như \\sum về cận: bên dưới toán tử ở kiểu hiển thị, bên cạnh trong văn bản nội dòng. Dấu ngoặc theo sau không tự động co giãn, nên hãy viết \\max\\left( a, b \\right) hoặc \\max\\bigl( \\dots \\bigr) khi đối số chứa phân số. Khi giá trị lớn nhất có thể không tồn tại, hãy dùng \\sup. Với toán tử argmax, hãy khai báo bằng \\DeclareMathOperator* có dấu sao để chỉ số dưới cũng nằm bên dưới trong công thức hiển thị.",
  },
  "infimum": {
    name: "Cận dưới đúng",
    meaning: "Cận dưới đúng (infimum), cận dưới lớn nhất của một tập số thực, tồn tại ngay cả khi không có giá trị nhỏ nhất.",
    usage: "Tập \\{1/n : n \\in \\mathbb{N}\\} có \\inf bằng 0 nhưng không có giá trị nhỏ nhất, ví dụ kinh điển cho thấy vì sao giải tích cần \\inf thay vì \\min. Lệnh này in chữ “inf” đứng thẳng với khoảng cách toán tử và cận nằm bên dưới ở kiểu hiển thị, nên \\inf_{n \\ge 1} a_n trông đúng trong môi trường equation. Một lỗi thường gặp là nhầm \\inf với \\infty, ký hiệu vô cùng. Các toán tử liên quan gồm \\liminf, đã có sẵn dưới dạng lệnh, và cận dưới đúng cốt yếu, bạn phải tự định nghĩa, chẳng hạn bằng \\operatorname*{ess\\,inf}.",
  },
  "supremum": {
    name: "Cận trên đúng",
    meaning: "Cận trên đúng (supremum): cận trên nhỏ nhất của một tập hợp, trọng tâm của tính đầy đủ của tập số thực và của định nghĩa chuẩn.",
    usage: "Chuẩn toán tử được viết \\|A\\| = \\sup_{\\|x\\| = 1} \\|Ax\\|, và chuẩn đều của một hàm là \\sup_x |f(x)|. Lệnh này đặt chỉ số dưới bên dưới ở chế độ hiển thị và bên phải trong dòng, giống như \\lim. Hãy dùng \\limsup cho giới hạn trên thay vì tự ghép \\lim và \\sup, và nhớ rằng \\sup tồn tại với mọi tập con khác rỗng bị chặn của tập số thực, còn \\max thì có thể không. Khi điều kiện ở chỉ số dưới dài, hãy xếp nhiều dòng bằng \\substack{...} dưới toán tử thay vì nhồi một chỉ số dưới rộng.",
  },
  "least-upper-bound": {
    name: "Cận trên nhỏ nhất",
    meaning: "Chữ viết tắt “lub” của cận trên nhỏ nhất, một từ đồng nghĩa cũ hơn của cận trên đúng, phổ biến trong lý thuyết thứ tự và dàn.",
    usage: "Các giáo trình về tập sắp thứ tự bộ phận và dàn đôi khi viết \\text{lub}\\, S thay cho \\sup S, và phép hợp a \\vee b là lub của một cặp. Trình bày nó bằng \\text vẫn được, nhưng có hai nhược điểm: \\text sao chép phông chữ xung quanh, nên bên trong một định lý in nghiêng nó cũng nghiêng, và nó không tạo khoảng cách toán tử trước đối số. Cách gọn hơn là \\operatorname{lub} hoặc một dòng trong preamble \\DeclareMathOperator{\\lub}{lub}, giữ nó đứng thẳng và có khoảng cách như \\sup. Hãy dùng khai báo có dấu sao nếu muốn chỉ số dưới nằm bên dưới trong công thức hiển thị.",
  },
  "greatest-lower-bound": {
    name: "Cận dưới lớn nhất",
    meaning: "Chữ viết tắt “glb” của cận dưới lớn nhất, tên gọi trong lý thuyết thứ tự cho cận dưới đúng của một tập hợp.",
    usage: "Trong lý thuyết dàn, phép giao a \\wedge b được định nghĩa là glb của a và b, và dàn đầy đủ là dàn trong đó mọi tập con đều có glb và lub. Vì LaTeX không có lệnh \\glb dựng sẵn, người ta viết \\text{glb}, hiển thị đứng thẳng trong văn bản thường nhưng thừa hưởng chữ nghiêng bên trong môi trường định lý và thiếu khoảng trắng hẹp mà một toán tử cần có. Hãy ưu tiên \\operatorname{glb} hoặc \\DeclareMathOperator{\\glb}{glb} để có kết quả nhất quán. Nếu người đọc đến từ giải tích hơn là lý thuyết thứ tự, \\inf có thể là ký hiệu quen thuộc hơn cho cùng khái niệm.",
  },
};

export default text;
