import { Cmd, IntroLink } from "@/lib/symbol-intros/ui";
import { GuideCode, GuidePre, GuideTable } from "@/lib/template-guides/ui";
import type { ToolSeoLocale } from "..";

const translations: ToolSeoLocale = {
  "latex-preview": {
    heading: "Trình soạn thảo LaTeX online: trình biên dịch LaTeX miễn phí và xem PDF",
    intro: (
      <>
        <p>
          Trang này gộp trình soạn thảo, trình biên dịch và trình xem LaTeX online vào một chỗ.
          Bạn viết tài liệu ở bên trái, bản PDF đã biên dịch hiện ở bên phải. Việc biên dịch chạy
          trên bản phân phối TeX Live đầy đủ của dịch vụ biên dịch Octree: amsmath, TikZ,
          pgfplots, beamer, geometry, hyperref và mọi gói khác trong TeX Live đều dùng được mà
          không cần cài đặt gì.
        </p>
        <p>
          pdfLaTeX là engine mặc định; dịch vụ tự chuyển sang XeLaTeX khi bạn dùng fontspec và
          font hệ thống, và sang LuaLaTeX khi có mã Lua. Không cần tài khoản. Trình soạn thảo chỉ
          chứa một tệp: hình ảnh, tệp .bib và dự án nhiều tệp được xử lý trong trình soạn thảo
          Octree, nơi một tài khoản miễn phí cũng lưu lại công việc của bạn. Shell escape bị tắt
          nên không dùng được minted.
        </p>
      </>
    ),
    stepsHeading: "Cách dùng trình soạn thảo LaTeX online",
    steps: [
      {
        title: "Viết hoặc dán một tài liệu hoàn chỉnh",
        body: (
          <>
            Thay ví dụ bằng mã LaTeX của bạn, từ <Cmd>\documentclass</Cmd> đến{" "}
            <Cmd>\end{"{document}"}</Cmd>. Trình soạn thảo tô màu cú pháp LaTeX và tự hoàn thành
            các lệnh thông dụng.
          </>
        ),
      },
      {
        title: "Xem PDF tự cập nhật",
        body: "Bản xem trước được biên dịch lại khoảng một giây sau lần gõ phím cuối cùng. Nếu biên dịch thất bại, một hộp thoại sẽ hiện thông báo lỗi và log.",
      },
      {
        title: "Giữ lại kết quả",
        body: "Nhấn “Mở trong Octree” để lưu tài liệu thành dự án, thêm hình ảnh và tệp .bib, hoặc nhờ AI chỉnh sửa.",
      },
    ],
    tipsHeading: "Các lỗi LaTeX thường gặp và cách sửa",
    tips: [
      {
        title: "File `name.sty' not found",
        body: (
          <>
            Một gói được nạp bằng <Cmd>\usepackage</Cmd> bị viết sai tên hoặc không có trong TeX
            Live. Hãy kiểm tra lại tên; mọi gói CTAN đi kèm TeX Live đều đã được cài sẵn.
          </>
        ),
      },
      {
        title: "Missing $ inserted",
        body: (
          <>
            Một lệnh chỉ dùng trong chế độ toán, như <Cmd>^</Cmd>, <Cmd>_</Cmd> hoặc{" "}
            <Cmd>\alpha</Cmd>, xuất hiện bên ngoài chế độ toán. Hãy đặt nó trong <Cmd>$...$</Cmd>,
            hoặc thoát dấu gạch dưới bằng <Cmd>\_</Cmd>.
          </>
        ),
      },
      {
        title: "Undefined control sequence",
        body: (
          <>
            Một lệnh bị viết sai hoặc gói chứa nó chưa được nạp, ví dụ <Cmd>\mathbb</Cmd> mà không
            có <Cmd>amssymb</Cmd>. Log sẽ chỉ ra dòng bị lỗi.
          </>
        ),
      },
      {
        title: "Không tìm ra lỗi",
        body: "Nhấn “Fix this error with AI in Octree” trong hộp thoại lỗi. Octree mở tài liệu kèm log lỗi, nên AI biết chính xác cần sửa gì.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về trình soạn thảo LaTeX online",
    faq: [
      {
        question: "Có thể soạn LaTeX online mà không cần cài đặt gì không?",
        answer:
          "Có. Gõ hoặc dán LaTeX vào trình soạn thảo trên trang này và bản PDF sẽ hiện bên cạnh. Việc biên dịch chạy trên bản cài đặt TeX Live đầy đủ trên máy chủ của Octree, nên bạn không cần bản phân phối TeX trên máy.",
      },
      {
        question: "Trình xem LaTeX này có miễn phí không, có cần tài khoản không?",
        answer:
          "Miễn phí và không cần tài khoản. Trang này không lưu gì cả: hãy sao chép mã trước khi rời đi, hoặc mở nó trong Octree bằng tài khoản miễn phí để giữ lại dưới dạng dự án.",
      },
      {
        question: "Bản xem trước online dùng trình biên dịch LaTeX nào?",
        answer:
          "Mặc định là pdfLaTeX. Dịch vụ biên dịch chuyển sang XeLaTeX khi tài liệu nạp fontspec, polyglossia, unicode-math hoặc xeCJK, và sang LuaLaTeX khi tài liệu dùng \\directlua hoặc luacode.",
      },
      {
        question: "Có thể tải lên hình ảnh hoặc danh mục tài liệu tham khảo .bib không?",
        answer:
          "Không phải trên trang này: trang chỉ biên dịch một tệp main.tex. Môi trường thebibliography vẫn dùng được, nhưng tệp hình ảnh và tệp .bib cần đến trình soạn thảo Octree, nơi hỗ trợ dự án nhiều tệp.",
      },
      {
        question: "Vì sao một gói như minted không biên dịch được?",
        answer:
          "minted và các gói khác cần shell escape (\\write18) bị tắt vì lý do bảo mật. Hãy dùng gói listings hoặc verbatim để trình bày mã.",
      },
    ],
    related: (
      <>
        Mới làm quen với LaTeX? Hãy bắt đầu với{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          phần giới thiệu LaTeX
        </IntroLink>
        , xem các <IntroLink href="/templates">mẫu LaTeX</IntroLink> dùng ngay được, hoặc mô tả
        một tài liệu và để{" "}
        <IntroLink href="/tools/ai-latex-generator">trình tạo LaTeX bằng AI</IntroLink> viết nó.
      </>
    ),
  },

  "math-to-latex": {
    heading: "Chuyển công thức toán viết tay sang LaTeX online",
    intro: (
      <>
        <p>
          Công cụ chuyển toán sang LaTeX này biến ảnh chụp công thức toán viết tay hoặc in sẵn
          thành mã LaTeX. Tải lên ảnh chụp, bản scan hoặc ảnh chụp màn hình của một phương trình:
          một mô hình AI thị giác sẽ chép lại phân số, căn, tổng, tích phân, ma trận và chữ cái Hy
          Lạp theo ký hiệu amsmath chuẩn.
        </p>
        <p>
          Kết quả là một tài liệu LaTeX hoàn chỉnh, được bản xem trước biên dịch bằng pdfLaTeX
          trên bản phân phối TeX Live đầy đủ của dịch vụ biên dịch Octree. Không cần tài khoản.
          Công cụ cho kết quả tốt nhất với một phương trình hoặc vài dòng mỗi lần; trang tính toán
          dài nên được chia thành nhiều ảnh.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển toán sang LaTeX",
    steps: [
      {
        title: "Chụp một ảnh rõ nét",
        body: "Chụp ảnh hoặc chụp màn hình phần toán: một dòng trong vở, bảng trắng, ghi chú trên máy tính bảng hay công thức trong sách. Cắt ảnh chỉ giữ phần cần thiết.",
      },
      {
        title: "Tải ảnh lên",
        body: "Thả tệp JPEG hoặc PNG vào vùng tải lên. Mã LaTeX hiện dần trong khung mã trong lúc AI đọc ảnh.",
      },
      {
        title: "Kiểm tra bản xem trước rồi sao chép",
        body: "Mở tab xem trước để so sánh kết quả đã biên dịch với bản gốc, sau đó sao chép mã, tải xuống hoặc mở trong Octree để tiếp tục chỉnh sửa.",
      },
    ],
    tipsHeading: "Mẹo để chuyển đổi chính xác",
    tips: [
      {
        title: "Mỗi ảnh một biểu thức hoặc một đoạn ngắn",
        body: "Công cụ được thiết kế cho phương trình và các bước biến đổi ngắn; hãy chia một trang tính toán dài thành nhiều lần tải lên.",
      },
      {
        title: "Viết rõ ràng, độ tương phản tốt",
        body: "Mực đậm trên giấy trơn, ánh sáng đều và chụp thẳng góc giúp giảm nhầm lẫn giữa các ký hiệu như 1 và l, hay x và ×.",
      },
      {
        title: "Luôn kiểm tra lại ký hiệu",
        body: "Nhận dạng chữ viết tay vẫn có thể sai. Hãy kiểm tra chỉ số dưới, số mũ và chữ cái Hy Lạp trong bản xem trước trước khi dùng mã.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển toán sang LaTeX",
    faq: [
      {
        question: "Làm sao chuyển công thức toán viết tay sang LaTeX?",
        answer:
          "Tải lên ảnh chụp hoặc bản scan phần toán viết tay ở định dạng JPEG hoặc PNG. AI đọc ảnh và trả về LaTeX trong một tài liệu hoàn chỉnh có nạp amsmath và amssymb, rồi bản xem trước biên dịch để bạn kiểm tra từng ký hiệu.",
      },
      {
        question: "Công cụ chuyển đổi LaTeX online này có miễn phí không?",
        answer:
          "Có. Chuyển đổi, xem trước, sao chép và tải xuống đều miễn phí, không cần tài khoản. Bạn chỉ cần tài khoản Octree miễn phí nếu muốn lưu kết quả thành dự án.",
      },
      {
        question: "Có dùng được với chữ viết tay trên iPad hoặc máy tính bảng không?",
        answer:
          "Có. Xuất trang hoặc ảnh chụp màn hình từ GoodNotes, Notability, OneNote hay ứng dụng tương tự thành ảnh, cắt lấy phương trình rồi tải lên.",
      },
      {
        question: "Tôi có thể gõ công thức thay vì tải ảnh lên không?",
        answer:
          "Trang này chuyển đổi hình ảnh. Để chuyển công thức đã gõ hoặc một mô tả bằng lời như “tích phân của x bình phương từ 0 đến 1”, hãy dùng công cụ chuyển phương trình sang LaTeX.",
      },
      {
        question: "LaTeX tạo ra có biên dịch được trong Overleaf không?",
        answer:
          "Có. Kết quả dùng ký hiệu amsmath chuẩn và biên dịch bằng pdfLaTeX trên mọi bản phân phối TeX, kể cả Overleaf và Octree. Bản xem trước trên trang này biên dịch nó bằng TeX Live đầy đủ.",
      },
    ],
    related: (
      <>
        Tìm hiểu cách viết toán trong LaTeX qua{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          hướng dẫn biểu thức toán học
        </IntroLink>
        , chuyển công thức đã gõ bằng{" "}
        <IntroLink href="/tools/equation-to-latex">công cụ chuyển phương trình sang LaTeX</IntroLink>
        , hoặc tra cứu lệnh trong{" "}
        <IntroLink href="/symbols">bảng tra ký hiệu LaTeX</IntroLink>.
      </>
    ),
  },

  "pdf-to-latex": {
    heading: "Chuyển PDF sang LaTeX online",
    intro: (
      <>
        <p>
          Tệp PDF chứa các trang đã dàn xong, không chứa mã LaTeX tạo ra chúng; vì vậy chuyển PDF
          sang LaTeX nghĩa là dựng lại văn bản và công thức thành mã nguồn có thể chỉnh sửa. Cách
          làm phụ thuộc vào nguồn gốc của PDF: bài báo trên arXiv thường có sẵn mã nguồn gốc, còn
          với mọi trường hợp khác, công cụ trên trang này dựng lại LaTeX bằng AI.
        </p>
        <p>
          Tải lên tệp PDF tối đa 3 MB và 20 trang để nhận một tài liệu LaTeX hoàn chỉnh, được
          biên dịch bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên dịch Octree để bạn kiểm
          tra. Không cần tài khoản. Kết quả không giữ font, bố cục hay hình ảnh gốc, và tài liệu
          dài nên được chuyển từng phần một.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển PDF sang LaTeX",
    steps: [
      {
        title: "Kiểm tra arXiv trước",
        body: "Nếu PDF là một bài báo trên arXiv, mã nguồn LaTeX gốc của tác giả thường có sẵn. Hãy tải nó qua liên kết “TeX Source” trên trang arXiv của bài báo thay vì chuyển đổi PDF.",
      },
      {
        title: "Tải PDF lên",
        body: "Thả một tệp PDF tối đa 3 MB và 20 trang vào công cụ ở trên. AI đọc văn bản và công thức rồi trả về một tài liệu LaTeX hoàn chỉnh có nạp amsmath; bản xem trước biên dịch nó để bạn so sánh với bản gốc.",
      },
      {
        title: "Chuyển tệp dài theo từng phần",
        body: "Với PDF dài, hãy tách riêng những trang bạn cần, hoặc chụp màn hình một khối phương trình và dùng công cụ chuyển toán sang LaTeX.",
      },
      {
        title: "Ghép lại và chỉnh sửa",
        body: "Dán các phần vào trình soạn thảo LaTeX online để sửa với bản xem trước PDF trực tiếp, hoặc mở trong Octree để lưu tài liệu thành dự án.",
      },
    ],
    tipsHeading: "Lưu ý trước khi chuyển đổi",
    tips: [
      {
        title: "Hình vẽ không được trích xuất",
        body: "Hình ảnh và biểu đồ trong PDF không được dựng lại bằng LaTeX. Hãy chèn lại chúng bằng \\includegraphics, hoặc vẽ lại sơ đồ bằng công cụ chuyển ảnh sang TikZ.",
      },
      {
        title: "Soát lại công thức",
        body: "Việc nhận dạng có thể sai ở các công thức và bảng dày đặc. Hãy so sánh chỉ số dưới, dấu và căn chỉnh với bản gốc.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển PDF sang LaTeX",
    faq: [
      {
        question: "Làm sao chuyển PDF sang LaTeX?",
        answer:
          "PDF không chứa mã nguồn LaTeX, nên văn bản và công thức phải được dựng lại. Với bài báo arXiv, hãy tải mã nguồn gốc qua liên kết “TeX Source” trên trang arXiv của bài báo. Với các PDF khác, tải tệp lên (tối đa 3 MB và 20 trang) công cụ trên trang này, rồi so sánh bản xem trước đã biên dịch với bản gốc.",
      },
      {
        question: "Chuyển PDF sang LaTeX có miễn phí không?",
        answer:
          "Có. Công cụ chuyển PDF, công cụ chuyển toán sang LaTeX và trình soạn thảo LaTeX online đều không cần tài khoản. Bạn chỉ cần tài khoản Octree miễn phí để lưu kết quả thành dự án.",
      },
      {
        question: "Có thể chuyển cả một bài báo hay luận văn không?",
        answer:
          "Công cụ nhận PDF tối đa 3 MB và 20 trang, và độ dài kết quả mỗi lần chuyển đổi có giới hạn, nên hãy chuyển luận văn theo từng chương. Với bài báo đã đăng trên arXiv, hãy tải mã nguồn gốc của chúng.",
      },
      {
        question: "Kết quả có giữ nguyên bố cục của PDF không?",
        answer:
          "Không. Văn bản, tiêu đề và công thức được dựng lại thành LaTeX gọn gàng, chỉnh sửa được; font, khoảng cách, bố cục và hình ảnh không được sao chép.",
      },
      {
        question: "Có thể chuyển PDF dạng scan không?",
        answer:
          "Bản scan rõ nét của trang in hoặc chữ viết tay gọn gàng có thể dùng được. Bản scan độ phân giải thấp, bị nghiêng hoặc độ tương phản kém sẽ gây lỗi ký hiệu, nên hãy kiểm tra kết quả cẩn thận.",
      },
    ],
    related: (
      <>
        Chuyển ảnh chụp màn hình phương trình bằng{" "}
        <IntroLink href="/tools/math-to-latex">công cụ chuyển toán sang LaTeX</IntroLink>, chỉnh
        sửa kết quả trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>, hoặc đọc{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          hướng dẫn viết toán trong LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "image-to-tikz": {
    heading: "Chuyển ảnh sang TikZ: biến sơ đồ thành LaTeX chỉnh sửa được",
    intro: (
      <>
        <p>
          Công cụ chuyển ảnh sang TikZ này biến hình ảnh của một sơ đồ thành mã TikZ mà bạn có thể
          chỉnh sửa và biên dịch. Tải lên lưu đồ, sơ đồ khối, cây, đồ thị hoặc bản phác thảo: một
          mô hình AI thị giác dựng lại nó thành các node và path trong một tài liệu LaTeX độc lập,
          giữ nhãn và màu sắc ở mức gần nhất có thể.
        </p>
        <p>
          Bản xem trước biên dịch kết quả bằng pdfLaTeX trên bản phân phối TeX Live đầy đủ của
          dịch vụ biên dịch Octree. Không cần tài khoản. Kết quả là một bản dựng lại trung thực,
          không phải bản đồ lại chính xác từng pixel: hãy dự tính chỉnh tay đôi chút với những
          hình cần khớp hoàn toàn.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển ảnh sang TikZ",
    steps: [
      {
        title: "Tải sơ đồ lên",
        body: "Thả ảnh chụp màn hình, ảnh xuất hoặc ảnh chụp sơ đồ ở định dạng JPEG, PNG, GIF hoặc WebP, tối đa 20 MB.",
      },
      {
        title: "Để AI vẽ lại bằng TikZ",
        body: (
          <>
            Mô hình đọc hình khối, mũi tên, nhãn và màu sắc, rồi viết một tài liệu LaTeX độc lập
            chứa <Cmd>tikzpicture</Cmd>, dùng các thư viện như positioning, arrows và
            shapes.geometric.
          </>
        ),
      },
      {
        title: "So sánh rồi tinh chỉnh",
        body: "Mở tab xem trước để so sánh sơ đồ đã biên dịch với ảnh của bạn. Sao chép hoặc tải mã xuống, hoặc mở trong Octree để chỉnh với AI.",
      },
    ],
    tipsHeading: "Mẹo để chuyển đổi tốt hơn",
    tips: [
      {
        title: "Cắt ảnh chỉ giữ sơ đồ",
        body: "Bỏ chú thích, chữ trên trang và các hình khác; mỗi ảnh một sơ đồ cho kết quả tốt nhất.",
      },
      {
        title: "Ưu tiên nguồn ảnh sạch",
        body: "Ảnh xuất và ảnh chụp màn hình cho kết quả tốt hơn ảnh chụp bằng máy. Với bản phác thảo tay, hãy dùng mực đậm trên giấy trơn và chụp thẳng góc.",
      },
      {
        title: "Biểu đồ dữ liệu thì dùng pgfplots",
        body: "Công cụ vẽ lại hình khối; nó không khôi phục các điểm dữ liệu. Với biểu đồ dựng từ số liệu, hãy dùng trình tạo pgfplots.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển ảnh sang TikZ",
    faq: [
      {
        question: "Làm sao chuyển ảnh sang TikZ?",
        answer:
          "Tải sơ đồ lên ở định dạng JPEG, PNG, GIF hoặc WebP. AI trả về một tài liệu LaTeX hoàn chỉnh chứa tikzpicture vẽ lại sơ đồ, và bản xem trước biên dịch mã đó để bạn so sánh với bản gốc.",
      },
      {
        question: "Mã TikZ có giống hệt ảnh của tôi không?",
        answer:
          "Không. Đây là bản dựng lại với các node và path chỉnh sửa được, không phải bản đồ lại. Bố cục, nhãn và mũi tên thường được giữ, nhưng khoảng cách, đường cong và màu sắc có thể khác; với hình dùng để xuất bản, hãy dự tính chỉnh lại tọa độ.",
      },
      {
        question: "Những loại sơ đồ nào chuyển đổi tốt nhất?",
        answer:
          "Lưu đồ, sơ đồ khối, cây, đồ thị, máy trạng thái và hình hình học đơn giản. Hình dày đặc với nhiều phần chồng lên nhau, ảnh chụp thực tế và biểu đồ dữ liệu chuyển đổi kém.",
      },
      {
        question: "Có thể chuyển bản phác thảo tay hoặc ảnh chụp bảng trắng không?",
        answer:
          "Có, miễn là nét vẽ và nhãn đọc được. Cắt ảnh chỉ giữ sơ đồ và chú ý ánh sáng; nét bút chì mờ hoặc góc chụp nghiêng làm giảm độ chính xác.",
      },
      {
        question: "Công cụ chuyển ảnh sang TikZ có miễn phí không?",
        answer:
          "Có, và không cần tài khoản. Mã tạo ra biên dịch được bằng pdfLaTeX và TeX Live, nên dùng được trong Overleaf, Octree hoặc bản cài đặt LaTeX trên máy.",
      },
    ],
    related: (
      <>
        Tìm hiểu các lệnh trong kết quả qua{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          hướng dẫn TikZ
        </IntroLink>
        . Chưa có ảnh để bắt đầu? Hãy mô tả sơ đồ cho{" "}
        <IntroLink href="/tools/tikz-generator">trình tạo TikZ</IntroLink>, hoặc vẽ dữ liệu bằng{" "}
        <IntroLink href="/tools/pgfplots-generator">trình tạo pgfplots</IntroLink>.
      </>
    ),
  },

  "tikz-generator": {
    heading: "Trình tạo TikZ online: tạo sơ đồ TikZ từ mô tả bằng lời",
    intro: (
      <>
        <p>
          Trình tạo TikZ này viết mã TikZ từ mô tả sơ đồ bằng ngôn ngữ thông thường. Nó tạo ra một
          tài liệu LaTeX hoàn chỉnh với một tikzpicture có chú thích và các thư viện cần thiết như
          positioning, arrows.meta và shapes, để bạn bắt đầu từ một bản chạy được thay vì trang
          trắng.
        </p>
        <p>
          Bản xem trước biên dịch mã bằng pdfLaTeX trên bản phân phối TeX Live đầy đủ của dịch vụ
          biên dịch Octree. Không cần tài khoản. Mã tạo ra ở đây chỉ để đọc; nếu cần trình soạn
          thảo TikZ online có xem trước trực tiếp, hãy dán nó vào trình soạn thảo LaTeX hoặc mở
          trong Octree, nơi tài khoản miễn phí sẽ lưu lại.
        </p>
      </>
    ),
    stepsHeading: "Cách tạo sơ đồ TikZ online",
    steps: [
      {
        title: "Mô tả sơ đồ",
        body: "Nêu tên các node, cách chúng nối với nhau và bố cục, ví dụ “một lưu đồ với Bắt đầu, Xử lý và Kết thúc nối từ trái sang phải”.",
      },
      {
        title: "Tạo mã TikZ",
        body: "AI viết một tài liệu LaTeX hoàn chỉnh với một tikzpicture có chú thích và các thư viện TikZ cần dùng.",
      },
      {
        title: "Xem trước và chỉnh sửa",
        body: "Kiểm tra sơ đồ đã biên dịch trong tab xem trước. Để sửa mã bằng tay, hãy dán nó vào trình soạn thảo LaTeX online hoặc mở trong Octree.",
      },
    ],
    tipsHeading: "Mẹo để có sơ đồ TikZ tốt hơn",
    tips: [
      {
        title: "Mô tả cụ thể",
        body: "Nêu nhãn của node, hình dạng, hướng mũi tên và màu sắc. Nói rõ “từ trái sang phải” hoặc “từ trên xuống dưới” giải quyết được phần lớn vấn đề bố cục.",
      },
      {
        title: "Đi từng bước nhỏ",
        body: "Tạo trước một bản đơn giản, sau đó yêu cầu từng thay đổi một trong Octree thay vì viết lại yêu cầu từ đầu.",
      },
      {
        title: "Dùng pgfplots cho đồ thị hàm số",
        body: "Với trục tọa độ, đường cong hàm số và biểu đồ dữ liệu, trình tạo pgfplots cho mã gọn hơn TikZ thuần.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về trình tạo TikZ",
    faq: [
      {
        question: "Có thể dùng TikZ online mà không cần cài LaTeX không?",
        answer:
          "Có. Trình tạo TikZ viết mã và biên dịch nó trên máy chủ của Octree bằng bản phân phối TeX Live đầy đủ, nên bản xem trước sơ đồ chạy ngay trong trình duyệt mà không cần cài đặt gì.",
      },
      {
        question: "Có trình soạn thảo TikZ online với xem trước trực tiếp không?",
        answer:
          "Mã tạo ra chỉ để đọc trên trang này. Hãy dán nó vào trình soạn thảo LaTeX online miễn phí tại tools.useoctree.com/tools/latex-preview, nơi biên dịch lại trong lúc bạn gõ, hoặc mở trong Octree để chỉnh với AI và lưu thành dự án.",
      },
      {
        question: "Nó tạo được những loại sơ đồ TikZ nào?",
        answer:
          "Lưu đồ, cây, đồ thị và mạng, sơ đồ khối, máy trạng thái, phác thảo mạng nơ-ron, biểu đồ Venn, biểu đồ giao hoán và hình hình học. Bản vẽ kỹ thuật rất chi tiết thường cần chỉnh tay thêm sau đó.",
      },
      {
        question: "Trình tạo TikZ có miễn phí không?",
        answer:
          "Có. Tạo, xem trước, sao chép và tải mã xuống đều không cần tài khoản. Bạn chỉ cần tài khoản Octree miễn phí để lưu sơ đồ thành dự án.",
      },
      {
        question: "Mã có chạy trong Overleaf không?",
        answer:
          "Có. Kết quả là một tài liệu LaTeX chuẩn nạp tikz và các thư viện TikZ chuẩn, biên dịch bằng pdfLaTeX, nên chạy được trong Overleaf, Octree và các bản phân phối TeX trên máy.",
      },
    ],
    related: (
      <>
        Học cú pháp trong{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          hướng dẫn TikZ
        </IntroLink>
        , chỉnh mã TikZ trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>, hoặc biến
        một ảnh có sẵn thành mã với{" "}
        <IntroLink href="/tools/image-to-tikz">chuyển ảnh sang TikZ</IntroLink>.
      </>
    ),
  },

  "ai-latex-generator": {
    heading: "Trình tạo LaTeX bằng AI: biến mô tả thành mã LaTeX",
    intro: (
      <>
        <p>
          Trình tạo LaTeX bằng AI này viết mã LaTeX từ mô tả bằng ngôn ngữ thông thường. Hãy yêu
          cầu một bài trình chiếu beamer, một báo cáo thí nghiệm, một bài báo hai cột hay một
          bảng: nó trả về một tài liệu hoàn chỉnh với document class phù hợp, các gói như amsmath,
          amssymb và graphicx, cùng khung các mục để bạn điền nội dung.
        </p>
        <p>
          Bản xem trước biên dịch mã bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên dịch
          Octree: mặc định là pdfLaTeX, chuyển sang XeLaTeX hoặc LuaLaTeX khi mã yêu cầu. Không
          cần tài khoản; chỉ đăng ký miễn phí nếu bạn muốn lưu kết quả thành dự án.
        </p>
      </>
    ),
    stepsHeading: "Cách tạo LaTeX bằng AI",
    steps: [
      {
        title: "Mô tả thứ bạn cần",
        body: "Viết một hai câu: loại tài liệu, các mục và mọi thành phần đặc biệt như bảng, phương trình hay bố cục hai cột.",
      },
      {
        title: "Tạo mã LaTeX",
        body: "Nhấn “Tạo LaTeX”. Mã hiện dần dưới dạng một tài liệu hoàn chỉnh, với document class, các gói và cấu trúc đã sẵn sàng.",
      },
      {
        title: "Xem trước, rồi sao chép hoặc tiếp tục chỉnh sửa",
        body: "Chuyển sang tab xem trước để thấy bản PDF đã biên dịch. Sao chép mã, tải xuống dạng .tex hoặc PDF, hoặc mở trong Octree để tiếp tục làm việc.",
      },
    ],
    tipsHeading: "Mẹo để có kết quả LaTeX tốt hơn",
    tips: [
      {
        title: "Nêu rõ document class",
        body: "Chỉ định article, report, slide beamer hay letter, và liệt kê các mục bạn muốn; yêu cầu mơ hồ sẽ cho ra tài liệu chung chung.",
      },
      {
        title: "Mỗi lần yêu cầu một việc",
        body: "Một bảng, một bố cục hình hay một bộ slide sẽ ra gọn gàng hơn cả một luận văn trong một yêu cầu. Yêu cầu dài có thể bị cắt ngắn.",
      },
      {
        title: "Thay nội dung mẫu",
        body: "Trình tạo viết cấu trúc và nội dung mẫu, không phải nghiên cứu của bạn. Hãy kiểm tra từng phương trình và đừng bao giờ giữ một trích dẫn bạn chưa xác minh.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về trình tạo LaTeX bằng AI",
    faq: [
      {
        question: "Trình tạo LaTeX bằng AI là gì?",
        answer:
          "Nó biến mô tả bằng ngôn ngữ thông thường thành mã LaTeX. Bạn mô tả tài liệu, và trình tạo viết một tệp .tex hoàn chỉnh với document class, các gói cần thiết, các mục và nội dung mẫu để bạn chỉnh sửa.",
      },
      {
        question: "Trình tạo mã LaTeX có miễn phí không?",
        answer:
          "Có. Bạn có thể tạo, xem trước, sao chép và tải LaTeX xuống mà không cần tài khoản. Bạn chỉ cần tài khoản Octree miễn phí nếu muốn lưu tài liệu thành dự án và tiếp tục chỉnh sửa.",
      },
      {
        question: "LaTeX tạo ra có biên dịch được không?",
        answer:
          "Bản xem trước biên dịch nó bằng TeX Live đầy đủ trên dịch vụ biên dịch Octree (mặc định là pdfLaTeX, XeLaTeX hoặc LuaLaTeX khi mã cần). Nếu thất bại, hộp thoại lỗi đề nghị mở tài liệu trong Octree để AI sửa lỗi dựa trên log.",
      },
      {
        question: "Nó có viết hộ tôi cả bài báo không?",
        answer:
          "Nó viết bộ khung của bài báo: document class, các gói, các mục và nội dung mẫu như một phương trình hay một bảng điển hình. Nội dung đó chỉ là văn bản giữ chỗ, và tài liệu rất dài có thể bị cắt ngắn; hãy coi kết quả là điểm khởi đầu.",
      },
      {
        question: "Nó tạo được những loại tài liệu nào?",
        answer:
          "Bài báo, báo cáo, bài trình chiếu beamer, thư, CV, bài tập, bảng và phương trình riêng lẻ là những yêu cầu phổ biến. Nếu tài liệu cần một gói cụ thể, hãy nêu tên gói đó trong mô tả.",
      },
    ],
    related: (
      <>
        Muốn hiểu mã mà nó viết? Hãy đọc{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          phần giới thiệu LaTeX
        </IntroLink>
        , hoặc dán bất kỳ mã LaTeX nào vào{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink> để chỉnh
        sửa với bản xem trước PDF trực tiếp.
      </>
    ),
  },

  "table-to-latex": {
    heading: "Chuyển bảng sang LaTeX: trình tạo bảng LaTeX từ tệp CSV",
    intro: (
      <>
        <p>
          Trình tạo bảng LaTeX này biến tệp CSV thành một bảng LaTeX đã định dạng. Tải lên tệp
          .csv xuất từ Excel, Google Sheets hay bất kỳ bảng tính nào: một mô hình AI (OpenAI
          gpt-4o-mini) viết tài liệu LaTeX hoàn chỉnh quanh môi trường <Cmd>tabular</Cmd>, nạp
          booktabs để có các đường kẻ ngang gọn gàng, và thiết lập hàng tiêu đề cùng căn chỉnh cột.
          Đây là cách nhanh nhất để chuyển Excel sang LaTeX: hãy lưu trang tính thành CSV trước,
          vì tệp .xlsx không được đọc trực tiếp.
        </p>
        <p>
          Tab “Xem trước” biên dịch bảng bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên dịch
          Octree, để bạn thấy kết quả trước khi xuất tệp .tex, PDF hoặc ảnh JPG. Tệp được đọc
          trong trình duyệt và gửi đi dưới dạng văn bản, mỗi lần chuyển đổi trả về khoảng 2.000
          token LaTeX, đủ cho một bảng kết quả vài chục hàng. Công cụ miễn phí và không cần tài
          khoản.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển tệp CSV thành bảng LaTeX",
    steps: [
      {
        title: "Lưu bảng thành CSV",
        body: "Trong Excel, chọn File > Save As > CSV UTF-8 (Comma delimited); trong Google Sheets, chọn File > Download > Comma-separated values. Giữ hàng tiêu đề ở dòng đầu tiên.",
      },
      {
        title: "Tải tệp .csv lên",
        body: "Thả tệp vào vùng tải lên hoặc nhấn để chọn tệp. Bảng LaTeX hiện dần trong tab “Mã” dưới dạng một tài liệu hoàn chỉnh.",
      },
      {
        title: "Xem trước và xuất",
        body: "Mở tab “Xem trước” để biên dịch bảng thành PDF, rồi xuất tệp .tex, PDF hoặc ảnh JPG, hoặc mở trong Octree để đặt bảng vào bài báo của bạn.",
      },
    ],
    tipsHeading: "Các vấn đề thường gặp với bảng và cách sửa",
    tips: [
      {
        title: "Ký tự đặc biệt làm hỏng bảng",
        body: (
          <>
            <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>, <Cmd>$</Cmd>, <Cmd>#</Cmd> và <Cmd>_</Cmd> trong ô phải
            được thoát thành <Cmd>\&amp;</Cmd>, <Cmd>\%</Cmd>, <Cmd>\$</Cmd>, <Cmd>\#</Cmd> và{" "}
            <Cmd>\_</Cmd>. Nếu bản xem trước thất bại, log sẽ chỉ ra dòng cần sửa.
          </>
        ),
      },
      {
        title: "Bảng tràn ra ngoài trang",
        body: (
          <>
            Bảng rộng sẽ vượt quá bề rộng văn bản. Hãy dùng trang ngang, cỡ chữ nhỏ hơn như{" "}
            <Cmd>\small</Cmd>, hoặc đặt tabular trong{" "}
            <Cmd>\resizebox{"{\\textwidth}{!}{...}"}</Cmd> của graphicx.
          </>
        ),
      },
      {
        title: "Bảng tính lớn bị cắt ngắn",
        body: "Mỗi lần chuyển đổi trả về khoảng 2.000 token LaTeX, tương đương một bảng vài chục hàng. Hãy chia trang tính lớn thành nhiều tệp CSV, hoặc chỉ giữ những hàng đưa vào bài báo.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về trình tạo bảng LaTeX",
    faq: [
      {
        question: "Làm sao chuyển bảng Excel sang LaTeX?",
        answer:
          "Lưu trang tính thành tệp CSV trong Excel (File > Save As > CSV), rồi tải tệp .csv lên đây. Công cụ không đọc trực tiếp tệp .xlsx, nhưng bản xuất CSV của trang tính chứa cùng các giá trị ô. Bạn nhận được một bảng booktabs trong tài liệu LaTeX hoàn chỉnh, có thể xem trước, tải xuống và dán vào bài báo.",
      },
      {
        question: "Trình tạo bảng LaTeX nhận những định dạng tệp nào?",
        answer:
          "Chỉ tệp .csv. Excel, Google Sheets, LibreOffice Calc và Numbers đều xuất được trang tính thành CSV. JSON, tệp .xlsx và bảng dán trực tiếp không được nhận trên trang này.",
      },
      {
        question: "Kết quả có dùng booktabs không?",
        answer:
          "Có. Tài liệu tạo ra nạp booktabs, và bảng thường dùng các đường \\toprule, \\midrule và \\bottomrule của nó. Hãy sao chép môi trường tabular hoặc table vào tài liệu của bạn và thêm \\usepackage{booktabs} vào phần preamble.",
      },
      {
        question: "Công cụ chuyển CSV sang LaTeX có miễn phí không?",
        answer:
          "Có, miễn phí và không cần tài khoản. Bảng được viết bởi một mô hình AI (OpenAI gpt-4o-mini), nên hãy kiểm tra số liệu và căn chỉnh cột trong bản xem trước trước khi dùng.",
      },
    ],
    related: (
      <>
        Tìm hiểu tabular, multirow và các kiểu cột trong{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          hướng dẫn bảng LaTeX
        </IntroLink>
        , vẽ cùng dữ liệu bằng{" "}
        <IntroLink href="/tools/pgfplots-generator">trình tạo PGFPlots</IntroLink>, hoặc xem tất cả{" "}
        <IntroLink href="/tools/latex-converter">công cụ chuyển đổi LaTeX</IntroLink>.
      </>
    ),
  },

  "equation-to-latex": {
    heading: "Chuyển phương trình sang LaTeX: công cụ hoạt động thế nào",
    intro: (
      <p>
        Chuyển bất kỳ phương trình toán học nào sang LaTeX trong ba bước. Công cụ nhận phương
        trình đã gõ, ảnh chụp màn hình và phương trình viết tay, rồi tạo ra LaTeX để dán thẳng vào
        bài báo, bài tập hoặc ghi chép bài giảng.
      </p>
    ),
    stepsHeading: "Chuyển phương trình sang LaTeX trong ba bước",
    steps: [
      {
        title: "Gõ hoặc tải phương trình lên",
        body: "Gõ phương trình bằng lời (“tích phân của x bình phương từ 0 đến 1”), dán nó ở bất kỳ ký hiệu nào, hoặc thả một ảnh: ảnh chụp công thức trong sách, ảnh bảng trắng hay phương trình viết tay trên iPad hoặc điện thoại.",
      },
      {
        title: "Chuyển sang LaTeX",
        body: "Nhấn “Chuyển đổi sang LaTeX”. AI đọc phương trình, nhận ra phân số, căn, tổng, tích phân, ma trận và chữ cái Hy Lạp, rồi viết LaTeX chuẩn dùng amsmath, biên dịch được trong Overleaf, Octree hoặc bất kỳ bản phân phối TeX nào.",
      },
      {
        title: "Kiểm tra bản xem trước và sao chép mã",
        body: "Phương trình đã hiển thị nằm cạnh mã để bạn kiểm tra từng ký hiệu. Sao chép LaTeX, tải xuống dạng tệp .tex hoặc PDF, hoặc mở trong Octree để tiếp tục chỉnh sửa.",
      },
    ],
    tipsHeading: "Dùng vào việc gì?",
    tips: [
      {
        title: "Bài tập về nhà",
        body: "Biến lời giải viết tay thành bài nộp đánh máy mà không cần học hết các lệnh LaTeX trước.",
      },
      {
        title: "Bài báo nghiên cứu và luận văn",
        body: "Chuyển phương trình từ ghi chép, slide hoặc các PDF cũ vào bản thảo dưới dạng LaTeX gọn gàng, chỉnh sửa được.",
      },
      {
        title: "Ghi chép bài giảng",
        body: "Chụp bảng hoặc vở sau buổi học và chuyển từng công thức sang LaTeX cho bộ ghi chép của bạn.",
      },
      {
        title: "Ảnh chụp công thức trong sách",
        body: "Tải lên một đoạn cắt từ trang sách hoặc tạp chí và nhận LaTeX của công thức thay vì gõ lại.",
      },
      {
        title: "Chữ viết tay trên iPad hoặc máy tính bảng",
        body: "Xuất phương trình viết tay từ GoodNotes, Notability hoặc OneNote thành ảnh và chuyển đổi chỉ trong một bước.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển phương trình sang LaTeX",
    faq: [
      {
        question: "Làm sao chuyển một phương trình sang LaTeX?",
        answer:
          "Gõ phương trình dưới dạng văn bản thường hoặc ký hiệu toán, hoặc tải lên ảnh của nó, rồi nhấn “Chuyển đổi sang LaTeX”. Công cụ trả về mã LaTeX dùng amsmath và hiển thị bản xem trước để bạn kiểm tra trước khi sao chép vào tài liệu.",
      },
      {
        question: "Có thể chuyển phương trình viết tay sang LaTeX không?",
        answer:
          "Có. Tải lên ảnh chụp hoặc bản scan của phương trình viết tay ở định dạng JPEG, PNG, GIF hoặc WebP, kể cả chữ viết xuất từ ứng dụng trên iPad hoặc máy tính bảng. Ảnh rõ nét, độ tương phản tốt, mỗi ảnh một phương trình sẽ cho LaTeX chính xác nhất.",
      },
      {
        question: "Công cụ chuyển phương trình sang LaTeX có miễn phí không?",
        answer:
          "Có. Công cụ miễn phí và không cần tài khoản. Bạn có thể sao chép LaTeX, tải xuống tệp .tex hoặc PDF đã biên dịch, hoặc mở kết quả trong trình soạn thảo Octree.",
      },
      {
        question: "Kết quả cần những gói LaTeX nào?",
        answer:
          "Mã tạo ra dùng ký hiệu toán chuẩn, biên dịch được với các gói amsmath, amssymb và amsfonts. Nếu bạn tải tệp .tex xuống, phần preamble đã có sẵn các gói này, và kết quả chạy được trong Overleaf cũng như mọi bản phân phối TeX phổ biến.",
      },
    ],
    related: (
      <>
        Muốn biết các lệnh đằng sau kết quả? Hãy xem{" "}
        <IntroLink href="/symbols">bảng tra ký hiệu LaTeX</IntroLink>. Toán dạng văn bản thường có
        thể gõ thẳng vào ô ở trên; để tiếp tục chỉnh sửa kết quả như một tài liệu hoàn chỉnh, hãy
        dùng <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>.
      </>
    ),
  },

  "arxiv-to-latex": {
    heading: "arXiv sang LaTeX: tải mã nguồn LaTeX của bất kỳ bài báo nào",
    intro: (
      <>
        <p>
          Phần lớn bài báo trên arXiv được viết bằng LaTeX, và arXiv lưu giữ mã nguồn mà tác giả
          đã nộp: các tệp .tex, danh mục tài liệu tham khảo, tệp style và hình vẽ. Công cụ này lấy
          mã nguồn LaTeX đó từ arXiv cho bạn. Dán một mã định danh hoặc liên kết để duyệt các tệp,
          đọc tệp .tex chính và tải mã nguồn arXiv xuống dạng .zip, không phải tự giải nén tệp
          .tar.gz.
        </p>
        <p>
          Tệp tải xuống đến thẳng từ dịch vụ e-print của arXiv và không có gì được lưu lại. Hỗ
          trợ mã nguồn tối đa 30 MB và 200 tệp. Bài báo chỉ nộp dưới dạng PDF thì không có TeX để
          tải; công cụ sẽ báo cho bạn và gợi ý một công cụ chuyển đổi thay thế.
        </p>
      </>
    ),
    stepsHeading: "Cách tải mã nguồn TeX của một bài báo arXiv",
    steps: [
      {
        title: "Dán mã định danh hoặc liên kết arXiv",
        body: "Nhập mã định danh như 2401.12345, mã định danh kiểu cũ như hep-th/9711200, hoặc bất kỳ liên kết arxiv.org/abs hay arxiv.org/pdf nào. Thêm phiên bản (2401.12345v2) để lấy đúng bản sửa đổi đó; không ghi phiên bản thì bạn nhận bản mới nhất.",
      },
      {
        title: "Duyệt mã nguồn LaTeX",
        body: "Công cụ tải e-print của bài báo từ arXiv, giải nén và liệt kê mọi tệp. Tệp .tex chính, tức tệp chứa \\documentclass và \\begin{document}, được mở trong trình xem; nhấn vào bất kỳ tệp .tex, .bib hay .sty nào khác để đọc.",
      },
      {
        title: "Tải xuống hoặc chỉnh sửa",
        body: "Tải mã nguồn arXiv xuống dạng .zip, hoặc mở tệp chính trong Octree với các tệp \\input và \\include đã được gộp vào. Sau đó tải các hình vẽ trong .zip lên để biên dịch kèm hình ảnh.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về mã nguồn LaTeX của bài báo arXiv",
    faq: [
      {
        question: "Làm sao tải mã nguồn LaTeX của một bài báo arXiv?",
        answer:
          "Dán mã định danh hoặc URL arXiv của bài báo vào công cụ trên trang này. Công cụ lấy mã nguồn tác giả đã nộp từ arXiv, liệt kê mọi tệp, hiển thị tệp .tex chính và cho phép tải tất cả xuống dạng .zip. Trên arxiv.org, các tệp này nằm sau liên kết “TeX Source” trên trang tóm tắt của bài báo, dưới dạng tệp .tar.gz.",
      },
      {
        question: "Vì sao một số bài báo không có mã nguồn LaTeX?",
        answer:
          "Một số tác giả chỉ nộp PDF lên arXiv, nên không có tệp .tex nào để tải. Với những bài báo này, công cụ chuyển PDF sang LaTeX có thể dựng lại văn bản và công thức thành LaTeX chỉnh sửa được, nhưng không khôi phục được mã nguồn gốc.",
      },
      {
        question: "Tệp .tex chính là tệp nào?",
        answer:
          "Mã nguồn arXiv thường có nhiều tệp .tex. Công cụ chọn tệp mà tệp 00README của arXiv chỉ định là tệp cấp cao nhất, nếu có; nếu không, nó chọn tệp chứa \\documentclass và \\begin{document} mà không tệp nào khác gọi qua \\input. Các phần được nạp bằng \\input hoặc \\include hiện thành các tệp riêng trong cây thư mục.",
      },
      {
        question: "Tôi có được dùng lại mã nguồn LaTeX của một bài báo arXiv không?",
        answer:
          "Mã nguồn hữu ích để xem bài báo được dàn trang ra sao, kiểm tra một phương trình hoặc tham khảo một macro. Việc dùng lại văn bản, hình vẽ hoặc toàn bộ bài báo phụ thuộc vào giấy phép tác giả chọn trên arXiv, ghi trên trang tóm tắt; trong mọi trường hợp, hãy trích dẫn tác giả.",
      },
    ],
    related: (
      <>
        Không có mã nguồn trên arXiv? Hãy thử{" "}
        <IntroLink href="/tools/pdf-to-latex">công cụ chuyển PDF sang LaTeX</IntroLink>. Chỉnh sửa
        và biên dịch mã nguồn trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>, hoặc đếm
        số từ bằng <IntroLink href="/tools/latex-word-counter">công cụ đếm từ LaTeX</IntroLink>.
      </>
    ),
  },

  "citation-generator": {
    heading: "Trình tạo trích dẫn BibTeX cho LaTeX",
    intro: (
      <>
        <p>
          Trình tạo trích dẫn BibTeX này biến thông tin của một cuốn sách, bài báo tạp chí, bài
          hội nghị hoặc trang web thành một mục BibTeX để dán vào tệp .bib và trích dẫn từ LaTeX.
          Dán các trường có cấu trúc hoặc một tài liệu tham khảo dạng văn bản tự do: trình tạo
          viết một mục với loại mục, khóa trích dẫn và những trường nó xác định được (author,
          title, year, journal hoặc booktitle, volume, pages, publisher và DOI).
        </p>
        <p>
          Một mô hình AI (OpenAI gpt-4o-mini) viết các mục dựa trên văn bản bạn dán. Nó không tra
          cứu Crossref, PubMed hay danh mục thư viện, nên chỉ một DOI hoặc URL thì không đủ để có
          kết quả đáng tin cậy. Hãy cung cấp tiêu đề và tác giả, rồi đối chiếu kết quả với nguồn.
          Công cụ miễn phí, không cần tài khoản và xuất tệp references.bib tương thích với BibTeX,
          natbib và biblatex.
        </p>
      </>
    ),
    stepsHeading: "Cách tạo trích dẫn BibTeX",
    steps: [
      {
        title: "Mô tả nguồn",
        body: "Dán tiêu đề, tác giả, năm và nơi xuất bản (tạp chí, hội nghị hoặc nhà xuất bản) của một cuốn sách, bài báo hay bài hội nghị, theo bất kỳ thứ tự nào hoặc dưới dạng tài liệu tham khảo tự do. Bạn cũng có thể thêm DOI hoặc URL, nhưng hãy ghi đủ mọi thông tin bạn có: trình tạo không tự tra cứu.",
      },
      {
        title: "Tạo mục BibTeX",
        body: (
          <>
            Nhấn “Tạo BibTeX”. AI chọn loại mục (<Cmd>@article</Cmd>, <Cmd>@book</Cmd>,{" "}
            <Cmd>@inproceedings</Cmd>, v.v.), viết khóa trích dẫn như{" "}
            <Cmd>goodfellow2016deep</Cmd> và điền những trường nó xác định được.
          </>
        ),
      },
      {
        title: "Kiểm tra và lưu",
        body: (
          <>
            Đối chiếu các trường với trang của nhà xuất bản, rồi sao chép mục hoặc nhấn “Xuất
            dưới dạng .bib” để tải <Cmd>references.bib</Cmd>. Tab “Xem trước” mở trong Octree một
            tài liệu thử nghiệm dùng natbib trích dẫn mọi khóa.
          </>
        ),
      },
    ],
    tipsHeading: "Các lỗi BibTeX thường gặp và cách sửa",
    tips: [
      {
        title: "Citation undefined",
        body: (
          <>
            Khóa dùng trong <Cmd>\cite{"{...}"}</Cmd> phải khớp chính xác với khóa sau{" "}
            <Cmd>@article{"{"}</Cmd>, và tài liệu phải có{" "}
            <Cmd>\bibliography{"{references}"}</Cmd> cùng một style như{" "}
            <Cmd>\bibliographystyle{"{plain}"}</Cmd>. Chạy BibTeX, rồi chạy LaTeX hai lần.
          </>
        ),
      },
      {
        title: "Tên bị sai thứ tự",
        body: (
          <>
            Ngăn cách các tác giả bằng <Cmd>and</Cmd>, không dùng dấu phẩy:{" "}
            <Cmd>author = {"{Smith, John and Doe, Jane}"}</Cmd>. Dấu phẩy bên trong một tên biểu
            thị thứ tự Họ, Tên.
          </>
        ),
      },
      {
        title: "Chữ hoa bị mất",
        body: (
          <>
            Nhiều style chuyển tiêu đề thành chữ thường. Hãy bao từ viết tắt và danh từ riêng
            trong dấu ngoặc nhọn, ví dụ <Cmd>{"{BERT}"}</Cmd> hoặc <Cmd>{"{Bayesian}"}</Cmd>, để
            giữ chữ hoa.
          </>
        ),
      },
    ],
    faqHeading: "Câu hỏi thường gặp về trình tạo trích dẫn BibTeX",
    faq: [
      {
        question: "Làm sao tạo một trích dẫn BibTeX?",
        answer:
          "Dán thông tin nguồn (tiêu đề, tác giả, năm, tạp chí hoặc nhà xuất bản) vào ô nhập và nhấn “Tạo BibTeX”. Công cụ trả về một mục BibTeX hoàn chỉnh với loại mục, khóa trích dẫn và các trường tương ứng, bạn có thể sao chép hoặc tải xuống dạng tệp references.bib.",
      },
      {
        question: "Nó có tạo mục BibTeX từ DOI hoặc URL được không?",
        answer:
          "Bạn có thể dán DOI hoặc URL, nhưng trình tạo không tra cứu chúng trên Crossref hay trên web: một mô hình AI viết mục dựa trên văn bản bạn cung cấp. Với bài báo nổi tiếng, nó thường điền đúng các trường, nhưng vẫn có thể sai; hãy kiểm tra từng trường, hoặc dán tiêu đề, tác giả và nơi xuất bản kèm DOI.",
      },
      {
        question: "Nó có định dạng trích dẫn theo APA, MLA hay IEEE không?",
        answer:
          "Nó chỉ tạo BibTeX. Kiểu trích dẫn được chọn trong tài liệu LaTeX, chẳng hạn với \\bibliographystyle{IEEEtran} hoặc \\bibliographystyle{apalike}, hay với biblatex và style=apa, nên cùng một mục .bib có thể in ra theo bất kỳ kiểu nào.",
      },
      {
        question: "Trình tạo BibTeX có miễn phí không?",
        answer:
          "Có. Công cụ miễn phí và không cần tài khoản. Trang này không lưu gì cả, nên hãy sao chép mục hoặc xuất tệp .bib trước khi rời đi.",
      },
    ],
    related: (
      <>
        Xem các ví dụ có giải thích trong{" "}
        <IntroLink href="https://www.useoctree.com/learn/bibliography-examples" external>
          hướng dẫn tài liệu tham khảo LaTeX
        </IntroLink>
        , bắt đầu một bài báo từ các <IntroLink href="/templates">mẫu LaTeX</IntroLink>, hoặc biên
        dịch tài liệu trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>.
      </>
    ),
  },

  "html-to-latex": {
    heading: "Chuyển HTML sang LaTeX online",
    intro: (
      <>
        <p>
          Công cụ chuyển HTML sang LaTeX này biến mã đánh dấu web thành một tài liệu LaTeX hoàn
          chỉnh, biên dịch được. Dán HTML vào trình soạn thảo: một mô hình AI (OpenAI gpt-4o-mini)
          ánh xạ từng phần tử sang phần tương đương trong LaTeX. Các tiêu đề <Cmd>{"<h1>"}</Cmd>{" "}
          đến <Cmd>{"<h3>"}</Cmd> thành các mục, <Cmd>{"<ul>"}</Cmd> và <Cmd>{"<ol>"}</Cmd> thành
          itemize và enumerate, <Cmd>{"<table>"}</Cmd> thành tabular, còn{" "}
          <Cmd>{"<strong>"}</Cmd>, <Cmd>{"<em>"}</Cmd>, <Cmd>{"<code>"}</Cmd> và liên kết thành các
          lệnh LaTeX tương ứng, với amsmath, amssymb và hyperref trong phần preamble.
        </p>
        <p>
          Tab “Xem trước” biên dịch kết quả bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên
          dịch Octree, để bạn xem PDF trước khi tải tệp .tex. Công cụ nhận mã đánh dấu được dán
          vào, không nhận URL, và mỗi lần chuyển đổi trả về khoảng 2.000 token LaTeX, nên trang dài
          nên được chuyển thành nhiều phần. Công cụ miễn phí và không cần tài khoản.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển HTML sang LaTeX",
    steps: [
      {
        title: "Dán HTML của bạn",
        body: "Thay ví dụ bằng mã đánh dấu của bạn: một trang hoàn chỉnh, một đoạn bài viết hoặc mã nguồn của một bảng sao chép từ website hay bản xuất từ CMS.",
      },
      {
        title: "Chuyển sang LaTeX",
        body: (
          <>
            Nhấn “Chuyển đổi sang LaTeX”. LaTeX hiện dần trong tab “Mã” dưới dạng tài liệu hoàn
            chỉnh, từ <Cmd>\documentclass{"{article}"}</Cmd> đến <Cmd>\end{"{document}"}</Cmd>.
          </>
        ),
      },
      {
        title: "Xem trước và xuất",
        body: "Mở tab “Xem trước” để biên dịch tài liệu thành PDF, rồi xuất dưới dạng tệp .tex hoặc PDF, hoặc mở trong Octree để tiếp tục chỉnh sửa.",
      },
    ],
    tipsHeading: "Mẹo để chuyển đổi gọn gàng",
    tips: [
      {
        title: "Bỏ những gì LaTeX không dùng được",
        body: "Xóa script, style inline, thanh điều hướng và quảng cáo trước khi chuyển đổi. CSS áp cho đoạn văn, như màu sắc và font, không có tương đương trực tiếp trong LaTeX, và đầu vào ngắn hơn để lại nhiều chỗ hơn cho nội dung.",
      },
      {
        title: "Hình ảnh thành chỗ giữ chỗ",
        body: (
          <>
            Thẻ <Cmd>{"<img>"}</Cmd> chỉ có thể thành một dòng <Cmd>\includegraphics</Cmd>; bản
            thân tệp ảnh không được tải về, nên bản xem trước không hiển thị được. Hãy thêm các tệp
            trong Octree hoặc chú thích (comment) những dòng đó.
          </>
        ),
      },
      {
        title: "Ký tự đặc biệt",
        body: (
          <>
            Nếu biên dịch thất bại ở một ký hiệu, hãy kiểm tra xem <Cmd>&amp;</Cmd>, <Cmd>%</Cmd>,{" "}
            <Cmd>#</Cmd> và <Cmd>_</Cmd> trong văn bản đã được thoát thành <Cmd>\&amp;</Cmd>,{" "}
            <Cmd>\%</Cmd>, <Cmd>\#</Cmd> và <Cmd>\_</Cmd> chưa.
          </>
        ),
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển HTML sang LaTeX",
    faq: [
      {
        question: "Làm sao chuyển HTML sang LaTeX?",
        answer:
          "Dán HTML vào trình soạn thảo trên trang này và nhấn “Chuyển đổi sang LaTeX”. Tiêu đề thành lệnh \\section, danh sách thành itemize hoặc enumerate, bảng thành tabular, còn chữ đậm, chữ nghiêng và liên kết thành \\textbf, \\emph và \\href. Kiểm tra kết quả trong tab “Xem trước” rồi tải tệp .tex hoặc PDF.",
      },
      {
        question: "Công cụ này có chuyển LaTeX sang HTML được không?",
        answer:
          "Không, nó chỉ chuyển HTML sang LaTeX. Để đi từ LaTeX sang HTML, cách thông dụng là một công cụ TeX trên máy như make4ht hoặc htlatex của TeX4ht, hoặc Pandoc (pandoc paper.tex -o paper.html). Để đăng lên web, công cụ chuyển LaTeX sang Markdown trên trang này cũng là một lựa chọn.",
      },
      {
        question: "Có thể chuyển bao nhiêu HTML?",
        answer:
          "Không có giới hạn đầu vào cố định, nhưng mỗi lần chuyển đổi trả về khoảng 2.000 token LaTeX, tức vài trang. Hãy chuyển trang dài theo từng mục, hoặc bỏ trước script, style và thanh điều hướng để chỉ gửi nội dung.",
      },
      {
        question: "Công cụ chuyển HTML sang LaTeX có miễn phí không?",
        answer:
          "Có, miễn phí và không cần tài khoản. Việc chuyển đổi dùng một mô hình AI (OpenAI gpt-4o-mini), nên hãy soát lại kết quả, nhất là bảng có ô gộp.",
      },
    ],
    related: (
      <>
        Cần định dạng khác? Xem tất cả{" "}
        <IntroLink href="/tools/latex-converter">công cụ chuyển đổi LaTeX</IntroLink>, chuyển{" "}
        <IntroLink href="/tools/markdown-to-latex">Markdown sang LaTeX</IntroLink>, hoặc học kiến
        thức cơ bản qua{" "}
        <IntroLink href="https://www.useoctree.com/learn/tables" external>
          hướng dẫn bảng LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-to-word": {
    heading: "Chuyển LaTeX sang Word (DOCX) online",
    intro: (
      <>
        <p>
          Công cụ chuyển LaTeX sang Word này biến tài liệu .tex thành tệp Microsoft Word .docx
          chỉnh sửa được. Nó làm việc qua hai lượt. Trước tiên, một mô hình AI (OpenAI
          gpt-4o-mini) đọc LaTeX của bạn và viết lại thành HTML ngữ nghĩa gọn gàng: giữ các tiêu
          đề <GuideCode>\section</GuideCode>, danh sách, bảng <GuideCode>tabular</GuideCode>, chữ
          đậm và chữ nghiêng, liên kết và chú thích cuối trang, đồng thời bỏ phần preamble và các
          lệnh bố cục vốn vô nghĩa trong Word. Sau đó, HTML này được chuyển một cách tất định
          thành các thành phần gốc của Word: kiểu Heading 1 đến Heading 6, danh sách gạch đầu dòng
          và đánh số, bảng có hàng tiêu đề và các đoạn chữ đã định dạng.
        </p>
        <p>
          Kết quả là một tệp .docx thực thụ: theo dõi thay đổi, nhận xét và mục lục hoạt động như
          với bất kỳ tệp Word nào. Công thức toán được viết thành văn bản Unicode dễ đọc thay vì
          phương trình Word, hình vẽ được thay bằng chú thích của chúng, và đầu vào giới hạn ở
          60.000 ký tự. Công cụ miễn phí, không cần tài khoản và không lưu gì sau khi trả tệp về.
        </p>
        <GuideTable
          headers={["LaTeX", "Kết quả trong Word"]}
          rows={[
            [<GuideCode key="1">\title, \section, \subsection</GuideCode>, "Kiểu Title, Heading 1, Heading 2"],
            [<GuideCode key="2">itemize, enumerate, description</GuideCode>, "Danh sách gạch đầu dòng và đánh số, giữ nguyên các cấp lồng nhau"],
            [<GuideCode key="3">tabular, booktabs, longtable</GuideCode>, "Bảng Word với hàng tiêu đề in đậm; chú thích ở phía trên"],
            [<GuideCode key="4">\textbf, \emph, \underline, \texttt</GuideCode>, "Chữ đậm, nghiêng, gạch chân, font đơn cách"],
            [<GuideCode key="5">$inline math$</GuideCode>, "Văn bản dễ đọc với ký hiệu Unicode, chỉ số trên và chỉ số dưới"],
            [<GuideCode key="6">equation, align, \[ \]</GuideCode>, "Mỗi dòng phương trình là một đoạn căn giữa, kèm số thứ tự"],
            [<GuideCode key="7">\href, \url, \footnote</GuideCode>, "Liên kết bấm được; nội dung chú thích đặt trong ngoặc đơn"],
            [<GuideCode key="8">\cite, thebibliography</GuideCode>, "Dấu [key] và một mục “References” được đánh số"],
            [<GuideCode key="9">figure, \includegraphics</GuideCode>, "Chỉ còn chú thích (tệp ảnh không được gửi lên)"],
          ]}
        />
      </>
    ),
    stepsHeading: "Cách chuyển LaTeX sang Word",
    steps: [
      {
        title: "Dán LaTeX của bạn",
        body: "Dán nội dung tệp .tex, một tài liệu hoàn chỉnh hoặc một đoạn trích, tối đa 60.000 ký tự.",
      },
      {
        title: "Chuyển sang Word",
        body: "Nhấn “Convert to Word”. Khi chuyển đổi xong, document.docx tự động được tải xuống; nút tải xuống vẫn hiển thị nếu bạn cần thêm một bản.",
      },
      {
        title: "Mở tệp trong Word",
        body: "Mở tệp trong Microsoft Word, Google Docs, LibreOffice hoặc Pages. Các tiêu đề dùng kiểu heading gốc của Word (Heading 1, Heading 2, v.v.), nên ngăn điều hướng và mục lục hoạt động ngay.",
      },
    ],
    tipsHeading: "Giới hạn và cách khắc phục",
    tips: [
      {
        title: "Phương trình là văn bản thường",
        body: (
          <>
            Công thức toán thành văn bản Unicode dễ đọc như x² + y² = r², không phải phương trình
            Word chỉnh sửa được. Để có phương trình Word gốc (OMML), hãy chạy Pandoc trên máy:{" "}
            <Cmd>pandoc paper.tex -o paper.docx --citeproc --bibliography=refs.bib</Cmd>, hoặc xuất
            một công thức quan trọng thành ảnh bằng{" "}
            <IntroLink href="/tools/latex-to-png">công cụ chuyển LaTeX sang PNG</IntroLink>.
          </>
        ),
      },
      {
        title: "Hình vẽ chỉ còn chú thích",
        body: "Tệp ảnh không được gửi kèm văn bản, nên mỗi hình được thay bằng chú thích của nó. Hãy chèn ảnh vào Word sau.",
      },
      {
        title: "Văn bản quá dài",
        body: "Giới hạn là 60.000 ký tự. Hãy chuyển luận văn theo từng chương và dán các phần vào cùng một tệp Word.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển LaTeX sang Word",
    faq: [
      {
        question: "Làm sao chuyển tệp LaTeX sang Word?",
        answer:
          "Dán nội dung tệp .tex vào trình soạn thảo và nhấn “Convert to Word”. Công cụ đọc cấu trúc LaTeX, dựng lại thành tài liệu Word với tiêu đề, danh sách, bảng và định dạng chữ thực thụ, rồi tải document.docx về máy bạn. Mở nó trong Microsoft Word, Google Docs, LibreOffice hoặc Pages.",
      },
      {
        question: "Phương trình sẽ ra sao khi chuyển LaTeX sang Word?",
        answer:
          "Công thức inline và công thức hiển thị riêng dòng được chuyển thành văn bản thường dễ đọc với ký hiệu Unicode (ví dụ x² + y² = r² hoặc ∫ f(x) dx), công thức hiển thị riêng được căn giữa trên dòng của nó. Chúng không phải đối tượng phương trình gốc của Word. Nếu bạn cần phương trình Word chỉnh sửa được (OMML), hãy chạy Pandoc trên máy: pandoc paper.tex -o paper.docx. Để có một công thức hiển thị hoàn hảo, hãy xuất nó thành ảnh bằng công cụ LaTeX sang PNG rồi dán ảnh vào.",
      },
      {
        question: "Bảng, danh sách và tài liệu tham khảo có được giữ lại không?",
        answer:
          "Bảng (tabular, booktabs, longtable) thành bảng Word thực thụ có hàng tiêu đề; itemize và enumerate thành danh sách gạch đầu dòng và đánh số; chữ đậm, nghiêng, gạch chân, đơn cách, liên kết và chú thích cuối trang được giữ lại. Trích dẫn hiện dưới dạng [key] hoặc văn bản tác giả-năm, và môi trường thebibliography thành một mục “References” được đánh số. Hình vẽ được thay bằng chú thích, vì công cụ không truy cập được tệp ảnh.",
      },
      {
        question: "Chuyển LaTeX sang Word có miễn phí không, tài liệu của tôi có bị lưu lại không?",
        answer:
          "Công cụ miễn phí, không cần đăng ký. LaTeX của bạn được gửi lên máy chủ của chúng tôi để chuyển đổi; tệp Word được tạo trong bộ nhớ rồi truyền ngược về trình duyệt, và không có gì được lưu lại sau khi phản hồi được gửi đi. Hỗ trợ tài liệu tối đa 60.000 ký tự, đủ cho một bài báo hoặc một chương luận văn thông thường.",
      },
    ],
    related: (
      <>
        Cần Markdown cho Notion hoặc GitHub? Hãy dùng{" "}
        <IntroLink href="/tools/latex-to-markdown">công cụ chuyển LaTeX sang Markdown</IntroLink>,
        biên dịch PDF trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>, hoặc xem
        tất cả <IntroLink href="/tools/latex-converter">công cụ chuyển đổi LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-png": {
    heading: "Chuyển LaTeX sang PNG: xuất phương trình thành ảnh",
    intro: (
      <>
        <p>
          Công cụ chuyển LaTeX sang PNG này kết xuất một phương trình, một hình TikZ hoặc trang
          đầu của một tài liệu thành ảnh PNG. Mã của bạn được biên dịch bằng bản cài đặt TeX Live
          đầy đủ trên dịch vụ biên dịch Octree, cũng là dịch vụ mà{" "}
          <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink> sử dụng,
          nên mọi gói bạn dùng trên máy đều có sẵn. Tệp PDF được trả về trình duyệt, nơi pdf.js
          raster hóa trang đầu ở độ phân giải (DPI) bạn chọn và tạo ra ảnh PNG nền trong suốt hoặc
          nền trắng. Không có AI tham gia, và không có gì được lưu lại sau khi biên dịch xong.
        </p>
        <p>
          Với một công thức đơn lẻ, class <GuideCode>standalone</GuideCode> với tùy chọn{" "}
          <GuideCode>preview</GuideCode> cắt trang vừa khít phương trình, còn{" "}
          <GuideCode>border=4pt</GuideCode> thêm một lề nhỏ xung quanh. Dùng ảnh này trong slide,
          Word và Google Docs, tệp README, Notion, Slack hay email: bất cứ nơi nào không dàn được
          công thức toán. Công cụ miễn phí và không cần tài khoản.
        </p>
        <GuidePre>{`\\documentclass[preview,border=4pt]{standalone}
\\usepackage{amsmath,amssymb}
\\begin{document}
$\\displaystyle \\hat{H}\\psi = E\\psi$
\\end{document}`}</GuidePre>
      </>
    ),
    stepsHeading: "Cách chuyển LaTeX sang PNG",
    steps: [
      {
        title: "Viết phương trình hoặc tài liệu",
        body: (
          <>
            Sửa ví dụ, vốn dùng <Cmd>\documentclass[preview,border=4pt]{"{standalone}"}</Cmd> để
            ảnh được cắt vừa khít công thức, hoặc dán bất kỳ tài liệu hoàn chỉnh nào.
          </>
        ),
      },
      {
        title: "Chọn độ phân giải và nền",
        body: "Chọn 1× (96 DPI), 2× (192 DPI) hoặc 4× (384 DPI), và để nguyên ô “Transparent background” được đánh dấu cho slide và giao diện tối, hoặc bỏ đánh dấu để có nền trắng.",
      },
      {
        title: "Chuyển đổi và lưu",
        body: "Nhấn “Convert to PNG”. Tải latex.png xuống hoặc sao chép ảnh vào bộ nhớ tạm để dán vào PowerPoint, Google Docs, Notion hoặc Slack.",
      },
    ],
    tipsHeading: "Mẹo để có ảnh đẹp hơn",
    tips: [
      {
        title: "Công thức chạm sát mép",
        body: (
          <>
            Tăng <Cmd>border=4pt</Cmd> trong tùy chọn của document class. Dùng{" "}
            <Cmd>$\displaystyle ...$</Cmd> inline thay vì <Cmd>\[ ... \]</Cmd>, vốn chiếm hết bề
            rộng dòng.
          </>
        ),
      },
      {
        title: "Ảnh cho slide nền tối",
        body: (
          <>
            Nạp <Cmd>xcolor</Cmd> và viết <Cmd>\color{"{white}"}</Cmd> trước công thức; với nền
            trong suốt, chữ trắng sẽ nổi bật trên mọi giao diện tối.
          </>
        ),
      },
      {
        title: "Chỉ hiện một trang",
        body: "Chỉ trang đầu tiên của PDF được kết xuất. Hãy chuyển đổi mỗi phương trình một lần, hoặc biên dịch tài liệu nhiều trang thành PDF trong trình soạn thảo LaTeX online.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển LaTeX sang PNG",
    faq: [
      {
        question: "Làm sao chuyển một phương trình LaTeX thành ảnh PNG?",
        answer:
          "Đặt phương trình trong một tài liệu standalone (ví dụ mặc định dùng \\documentclass[preview,border=4pt]{standalone}), chọn độ phân giải và nhấn “Convert to PNG”. LaTeX được biên dịch thành PDF trên máy chủ của chúng tôi, trang đầu được kết xuất trong trình duyệt của bạn, và bạn có thể tải PNG xuống hoặc sao chép thẳng vào bộ nhớ tạm.",
      },
      {
        question: "Có tạo được ảnh PNG LaTeX nền trong suốt không?",
        answer:
          "Có. Để nguyên tùy chọn “Transparent background” được đánh dấu. Vì class standalone không tô màu trang, mọi điểm ảnh bên ngoài công thức đều trong suốt, nên ảnh hòa hợp với slide nền tối, nền màu và trang web. Bỏ đánh dấu để có nền trắng đặc.",
      },
      {
        question: "Nên chọn độ phân giải nào cho slide hoặc bản in?",
        answer:
          "1× (96 DPI) đủ cho xem nhanh hoặc tin nhắn chat. Chọn 2× (192 DPI) cho Google Slides, PowerPoint, Word, Google Docs và Notion, nơi ảnh hiển thị gần đúng kích thước tự nhiên trên màn hình mật độ cao. Chọn 4× (384 DPI) nếu ảnh sẽ được in hoặc phóng to.",
      },
      {
        question: "Có dùng được với tài liệu LaTeX hoàn chỉnh, không chỉ phương trình không?",
        answer:
          "Có. Bất kỳ tài liệu nào biên dịch được bằng pdflatex đều dùng được, kể cả bài báo, bài trình chiếu beamer hay hình TikZ. Chỉ trang đầu tiên được kết xuất thành PNG; với tài liệu nhiều trang, hãy dùng công cụ xem trước LaTeX để biên dịch và tải xuống toàn bộ PDF.",
      },
    ],
    related: (
      <>
        Cần cả tài liệu? Biên dịch nó trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>, chuyển nó
        thành <IntroLink href="/tools/latex-to-word">tệp Word</IntroLink>, hoặc tra cứu lệnh trong{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          hướng dẫn viết toán trong LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "markdown-to-latex": {
    heading: "Chuyển Markdown sang LaTeX online",
    intro: (
      <>
        <p>
          Công cụ chuyển Markdown sang LaTeX này biến văn bản .md thành một tài liệu LaTeX hoàn
          chỉnh, biên dịch được. Một mô hình AI (OpenAI gpt-4o-mini) viết lại tiêu đề thành các
          mục, chữ đậm và chữ nghiêng thành <Cmd>\textbf</Cmd> và <Cmd>\textit</Cmd>, danh sách
          gạch đầu dòng và đánh số thành itemize và enumerate, bảng thành tabular, khối mã có rào
          thành listing mã và liên kết thành hyperlink. Nó nạp các gói như booktabs, listings và
          hyperref, và giữ công thức inline và công thức hiển thị riêng dưới dạng toán LaTeX.
        </p>
        <p>
          Tab “Xem trước” biên dịch kết quả bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên
          dịch Octree, để bạn xem PDF trước khi tải tệp .tex. Đầu vào là văn bản dán vào, mỗi lần
          chuyển đổi trả về khoảng 2.000 token LaTeX, đủ cho vài trang; hãy chia nhỏ tệp dài hơn.
          Công cụ miễn phí, không cần tài khoản, phù hợp với tệp README, ghi chép bài giảng và bản
          nháp viết trong Obsidian, Notion hoặc Typora cần trở thành bài báo hay một chương luận
          văn.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển Markdown sang LaTeX",
    steps: [
      {
        title: "Dán Markdown của bạn",
        body: "Thay ví dụ bằng nội dung .md của bạn: ghi chú Obsidian hoặc Notion, một README, hay một bản nháp có tiêu đề, danh sách, bảng, khối mã và công thức toán.",
      },
      {
        title: "Chuyển sang LaTeX",
        body: (
          <>
            Nhấn “Chuyển đổi sang LaTeX”. Một tài liệu hoàn chỉnh hiện dần trong tab “Mã”, với
            tiêu đề <Cmd>#</Cmd> thành <Cmd>\section</Cmd>, danh sách thành itemize và enumerate, và
            công thức <Cmd>$...$</Cmd> cùng <Cmd>$$...$$</Cmd> được giữ dưới dạng toán LaTeX.
          </>
        ),
      },
      {
        title: "Xem trước và xuất",
        body: "Mở tab “Xem trước” để biên dịch tài liệu thành PDF, rồi xuất tệp .tex hoặc PDF, hoặc mở trong Octree để viết tiếp.",
      },
    ],
    tipsHeading: "Các vấn đề thường gặp và cách sửa",
    tips: [
      {
        title: "Undefined control sequence trong công thức",
        body: (
          <>
            Công thức trong Markdown được giữ nguyên, nên các lệnh chỉ có trong KaTeX hoặc{" "}
            <Cmd>\mathbb</Cmd> không có amssymb có thể gây lỗi. Log chỉ ra dòng bị lỗi; hãy sửa
            lệnh hoặc thêm gói.
          </>
        ),
      },
      {
        title: "Hình ảnh không hiện",
        body: (
          <>
            <Cmd>![alt](image.png)</Cmd> thành một dòng <Cmd>\includegraphics</Cmd>, nhưng tệp ảnh
            không được tải lên. Hãy tải nó lên trong Octree hoặc chú thích (comment) dòng đó để
            biên dịch.
          </>
        ),
      },
      {
        title: "Tài liệu dài dừng giữa chừng",
        body: "Mỗi lần chuyển đổi trả về khoảng 2.000 token LaTeX. Hãy chuyển tệp dài theo từng chương hoặc từng mục, rồi ghép các phần lại.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển Markdown sang LaTeX",
    faq: [
      {
        question: "Làm sao chuyển Markdown sang LaTeX online?",
        answer:
          "Dán Markdown vào trình soạn thảo trên trang này và nhấn “Chuyển đổi sang LaTeX”. Công cụ trả về một tài liệu LaTeX hoàn chỉnh với các gói cần thiết, bạn có thể xem trước dạng PDF và tải xuống dạng tệp .tex. Không cần cài đặt hay tài khoản.",
      },
      {
        question: "Phương trình toán có được giữ lại không?",
        answer:
          "Có. Công thức inline giữa $...$ và công thức hiển thị riêng giữa $$...$$ được giữ dưới dạng toán LaTeX, và amsmath cùng amssymb được nạp trong phần preamble, nên phương trình viết cho MathJax hoặc KaTeX thường biên dịch được mà không cần sửa.",
      },
      {
        question: "Khác gì so với Pandoc?",
        answer:
          "Pandoc (pandoc notes.md -o notes.tex) là công cụ dòng lệnh chuyển đổi tất định, phải cài trên máy. Công cụ này chạy trong trình duyệt, dùng một mô hình AI (OpenAI gpt-4o-mini) để viết LaTeX và biên dịch ngay bản xem trước PDF. Hãy soát lại kết quả, vì AI có thể diễn đạt lại hoặc sắp xếp lại nội dung.",
      },
      {
        question: "Có thể chuyển tệp .md thành .tex không?",
        answer:
          "Mở tệp .md bằng bất kỳ trình soạn thảo văn bản nào, sao chép nội dung vào công cụ và nhấn “Chuyển đổi sang LaTeX”, rồi dùng “Xuất” để tải document.tex. Trang nhận văn bản dán vào, không nhận tải tệp lên.",
      },
    ],
    related: (
      <>
        Muốn làm theo chiều ngược lại? Hãy dùng{" "}
        <IntroLink href="/tools/latex-to-markdown">công cụ chuyển LaTeX sang Markdown</IntroLink>,
        xem tất cả <IntroLink href="/tools/latex-converter">công cụ chuyển đổi LaTeX</IntroLink>,
        hoặc đọc{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          phần giới thiệu LaTeX
        </IntroLink>
        .
      </>
    ),
  },

  "latex-converter": {
    heading: "Công cụ chuyển đổi LaTeX: chuyển sang và từ LaTeX online",
    intro: (
      <>
        <p>
          Các công cụ chuyển đổi LaTeX của Octree bao quát những định dạng người ta thường cần
          đưa vào hoặc lấy ra khỏi LaTeX nhất. Sang LaTeX: Markdown, HTML, MathML và sơ đồ
          Mermaid, bảng CSV từ Excel hoặc Google Sheets, PDF, ảnh chụp phương trình, ảnh sơ đồ và
          bài báo arXiv. Từ LaTeX: Markdown cho GitHub và Notion, Word .docx cho người phản biện và
          hệ thống nộp bài, ảnh PNG cho slide, và PDF qua trình soạn thảo LaTeX online.
        </p>
        <p>
          Mọi công cụ đều miễn phí, chạy trong trình duyệt và không cần tài khoản. Phần lớn dùng
          một mô hình AI, vì chuyển giữa các định dạng cần đến sự phán đoán; kết quả LaTeX được
          biên dịch bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên dịch Octree để bạn kiểm
          tra PDF trước khi tải xuống. arXiv sang LaTeX, LaTeX sang PNG và LaTeX sang PDF không
          dùng AI. Bảng ở trên liệt kê từng công cụ cùng đầu vào, đầu ra và mục đích phù hợp nhất.
        </p>
      </>
    ),
    stepsHeading: "Cách dùng các công cụ chuyển đổi LaTeX",
    steps: [
      {
        title: "Bắt đầu từ thứ bạn đang có",
        body: "Chọn thẻ khớp với đầu vào của bạn: Markdown, HTML, MathML, Mermaid, tệp CSV, PDF, ảnh hoặc mã định danh arXiv để có LaTeX, hoặc một tài liệu LaTeX để có Markdown, tệp Word, ảnh PNG hay PDF.",
      },
      {
        title: "Dán hoặc tải lên, rồi chuyển đổi",
        body: "Mỗi công cụ mở trên trang riêng. Dán nội dung hoặc tải tệp lên rồi bắt đầu chuyển đổi; các công cụ dùng AI hiển thị kết quả ngay trong lúc viết.",
      },
      {
        title: "Kiểm tra kết quả và xuất",
        body: "Kết quả LaTeX đi kèm bản xem trước PDF đã biên dịch, để bạn kiểm tra trước khi tải tệp .tex. Mở kết quả LaTeX trong Octree để tiếp tục chỉnh sửa.",
      },
    ],
    tipsHeading: "Mẹo để chuyển đổi tốt hơn",
    tips: [
      {
        title: "Soát lại kết quả của AI",
        body: "Các công cụ dùng AI xử lý được đầu vào lộn xộn và các gói ít gặp, nhưng có thể diễn đạt lại hoặc bỏ sót nội dung. Hãy so sánh bản xem trước với nguồn trước khi nộp bất cứ thứ gì.",
      },
      {
        title: "Chia tài liệu dài thành nhiều phần",
        body: "Các công cụ Markdown, HTML, Mermaid, CSV và LaTeX sang Markdown trả về khoảng 2.000 token mỗi lần, tức vài trang, còn LaTeX sang Word nhận tối đa 60.000 ký tự. Hãy chia luận văn theo chương.",
      },
      {
        title: "Hình vẽ đi riêng",
        body: "Không công cụ nào gửi tệp ảnh kèm văn bản. Hình vẽ thành dòng \\includegraphics, liên kết ảnh hoặc chú thích; hãy thêm tệp sau.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về các công cụ chuyển đổi LaTeX",
    faq: [
      {
        question: "Công cụ chuyển đổi LaTeX là gì?",
        answer:
          "Công cụ chuyển đổi LaTeX chuyển giữa mã nguồn LaTeX và một định dạng khác. Công cụ chuyển sang LaTeX nhận Markdown, HTML, MathML, Mermaid, bảng CSV, PDF hoặc ảnh và tạo ra mã .tex; công cụ chuyển từ LaTeX nhận mã .tex và tạo ra Markdown, ảnh PNG, tài liệu Word hoặc PDF. Trang này tập hợp mọi công cụ chuyển đổi miễn phí của Octree theo cả hai chiều.",
      },
      {
        question: "Công cụ nào dùng AI, công cụ nào tất định?",
        answer:
          "Markdown, HTML, MathML, Mermaid, bảng (CSV), PDF, ảnh và phương trình sang LaTeX, cùng LaTeX sang Markdown, dùng một mô hình AI. LaTeX sang Word dùng AI ở lượt đầu rồi dựng tệp .docx một cách tất định. arXiv sang LaTeX, LaTeX sang PNG và LaTeX sang PDF không dùng AI: chúng tải xuống hoặc biên dịch đầu vào của bạn nguyên trạng.",
      },
      {
        question: "Làm sao chuyển LaTeX sang Word hoặc PDF miễn phí?",
        answer:
          "Với Word, mở công cụ chuyển LaTeX sang Word, dán tài liệu và tải document.docx xuống. Với PDF, mở trình soạn thảo LaTeX online, dán tài liệu và tải PDF đã biên dịch. Cả hai đều miễn phí và không cần tài khoản.",
      },
      {
        question: "Kích thước tài liệu có bị giới hạn không?",
        answer:
          "LaTeX sang Word nhận tối đa 60.000 ký tự, và PDF sang LaTeX nhận PDF tối đa 3 MB và 20 trang. Các công cụ Markdown, HTML, Mermaid, CSV và LaTeX sang Markdown trả về khoảng 2.000 token mỗi lần, tức vài trang, nên hãy chuyển tài liệu dài thành nhiều phần. Các công cụ dựa trên biên dịch nhận mọi tài liệu biên dịch xong trong giới hạn thời gian của máy chủ.",
      },
    ],
    related: (
      <>
        Mới làm quen với LaTeX? Hãy đọc{" "}
        <IntroLink href="https://www.useoctree.com/learn/latex" external>
          phần giới thiệu LaTeX
        </IntroLink>
        , chỉnh sửa tài liệu trong{" "}
        <IntroLink href="/tools/latex-preview">trình soạn thảo LaTeX online</IntroLink>, hoặc xem{" "}
        <IntroLink href="/">danh sách đầy đủ các công cụ LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-to-markdown": {
    heading: "Chuyển LaTeX sang Markdown online",
    intro: (
      <>
        <p>
          Công cụ chuyển LaTeX sang Markdown này biến một tài liệu hoặc đoạn .tex thành Markdown
          chuẩn, gọn gàng. Một mô hình AI (OpenAI gpt-4o-mini) viết lại các mục thành tiêu đề{" "}
          <Cmd>#</Cmd>, itemize và enumerate thành danh sách, bảng tabular và booktabs thành bảng
          Markdown, <Cmd>\textbf</Cmd> và <Cmd>\emph</Cmd> thành chữ đậm và chữ nghiêng, môi trường
          mã thành khối mã có rào và <Cmd>\href</Cmd> thành liên kết. Công thức toán vẫn ở dạng
          LaTeX giữa <Cmd>$...$</Cmd> và <Cmd>$$...$$</Cmd>, được GitHub, Obsidian và các trình
          hiển thị KaTeX hoặc MathJax khác hiển thị.
        </p>
        <p>
          Công cụ miễn phí, không cần tài khoản và nhận văn bản dán vào. Mỗi lần chuyển đổi trả về
          khoảng 2.000 token Markdown, nên hãy chuyển bài báo dài thành nhiều phần. Hình vẽ thành
          liên kết ảnh khi có thể, còn trích dẫn không được phân giải từ tệp .bib, nên hãy dự tính
          sửa chúng bằng tay. Dùng nó để đăng bài báo lên blog, biến ghi chép bài giảng thành
          README hoặc chuyển ghi chú LaTeX sang Notion hay Obsidian.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển LaTeX sang Markdown",
    steps: [
      {
        title: "Dán LaTeX của bạn",
        body: "Dán một tài liệu .tex hoàn chỉnh hoặc chỉ một đoạn, như một mục, một bảng hay một danh sách. Không cần phần preamble.",
      },
      {
        title: "Chuyển sang Markdown",
        body: "Nhấn “Chuyển đổi sang Markdown”. Markdown hiện dần trong khung soạn thảo kết quả ngay khi được viết.",
      },
      {
        title: "Sao chép hoặc tải xuống",
        body: "Sao chép Markdown từ khung kết quả, hoặc dùng “Xuất dưới dạng Markdown” để tải document.md cho GitHub, Obsidian, Notion hoặc một website tĩnh.",
      },
    ],
    tipsHeading: "Mẹo để chuyển đổi gọn gàng",
    tips: [
      {
        title: "Công thức cần trình hiển thị",
        body: (
          <>
            Phương trình được giữ ở dạng <Cmd>$...$</Cmd> và <Cmd>$$...$$</Cmd>. GitHub, Obsidian,
            Jupyter và phần lớn trình tạo website tĩnh có KaTeX hoặc MathJax đều hiển thị được;
            các trình xem Markdown cơ bản sẽ hiện nguyên mã LaTeX.
          </>
        ),
      },
      {
        title: "Macro tự định nghĩa",
        body: (
          <>
            Các lệnh định nghĩa bằng <Cmd>\newcommand</Cmd> không có tương đương trong Markdown.
            Hãy đưa định nghĩa của chúng vào đầu vào để công cụ có thể khai triển, và kiểm tra lại
            kết quả.
          </>
        ),
      },
      {
        title: "Hình vẽ và trích dẫn",
        body: (
          <>
            Khi có thể, hình vẽ thành liên kết ảnh Markdown trỏ tới tên tệp gốc, còn các khóa{" "}
            <Cmd>\cite</Cmd> không được phân giải từ tệp .bib. Hãy đặt ảnh cạnh tệp .md và sửa tài
            liệu tham khảo bằng tay.
          </>
        ),
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển LaTeX sang Markdown",
    faq: [
      {
        question: "Làm sao chuyển LaTeX sang Markdown?",
        answer:
          "Dán LaTeX vào khung soạn thảo bên trái và nhấn “Chuyển đổi sang Markdown”. Các mục thành tiêu đề #, itemize và enumerate thành danh sách, tabular thành bảng Markdown, \\textbf và \\emph thành chữ đậm và chữ nghiêng, môi trường mã thành khối mã có rào. Sao chép kết quả hoặc xuất document.md.",
      },
      {
        question: "Phương trình có được giữ lại không?",
        answer:
          "Có. Công thức inline được giữ giữa $...$ và công thức hiển thị riêng giữa $$...$$, viết bằng LaTeX, nên chúng hiển thị ở mọi nơi Markdown được kết xuất với MathJax hoặc KaTeX, kể cả GitHub, Obsidian và notebook Jupyter.",
      },
      {
        question: "Có thể chuyển bao nhiêu LaTeX?",
        answer:
          "Không có giới hạn đầu vào cố định, nhưng mỗi lần chuyển đổi trả về khoảng 2.000 token Markdown, tức vài trang. Hãy chuyển luận văn hoặc bài báo dài theo từng chương hoặc từng mục.",
      },
      {
        question: "Có miễn phí không, và có tốt hơn Pandoc không?",
        answer:
          "Miễn phí và không cần tài khoản. Công cụ dùng một mô hình AI (OpenAI gpt-4o-mini), xử lý tốt các gói ít gặp và mã nguồn lộn xộn, nhưng kết quả cần được soát lại. Pandoc (pandoc paper.tex -o paper.md) là công cụ tất định, phù hợp hơn với tài liệu rất dài, nhưng phải cài trên máy.",
      },
    ],
    related: (
      <>
        Muốn làm theo chiều ngược lại? Hãy dùng{" "}
        <IntroLink href="/tools/markdown-to-latex">công cụ chuyển Markdown sang LaTeX</IntroLink>,
        xuất sang <IntroLink href="/tools/latex-to-word">Word</IntroLink>, hoặc xem tất cả{" "}
        <IntroLink href="/tools/latex-converter">công cụ chuyển đổi LaTeX</IntroLink>.
      </>
    ),
  },

  "latex-word-counter": {
    heading: "Đếm số từ của tài liệu LaTeX online",
    intro: (
      <p>
        Đếm từ trong LaTeX khó hơn trong trình soạn thảo văn bản: đếm đơn giản các từ trong một
        tệp .tex sẽ tính cả những lệnh như <Cmd>\begin{"{itemize}"}</Cmd>, nhãn và phương trình.
        Công cụ đếm từ LaTeX miễn phí này đọc mã nguồn như một công cụ hiểu TeX, bỏ qua mã đánh
        dấu và công thức toán, rồi cho bạn số từ của phần văn bản mà người đọc thực sự nhìn thấy.
      </p>
    ),
    stepsHeading: "Cách đếm từ trong LaTeX",
    steps: [
      {
        title: "Dán mã nguồn LaTeX của bạn",
        body: "Dán vào trình soạn thảo toàn bộ tệp .tex, kể cả phần preamble, hoặc chỉ phần bạn muốn đếm.",
      },
      {
        title: "Để công cụ tự đếm",
        body: "Số từ tự cập nhật trong lúc bạn gõ. Mã nguồn được chạy qua texcount, công cụ đếm từ đi kèm TeX Live và được Overleaf sử dụng, nên lệnh và mã đánh dấu được loại bỏ chính xác.",
      },
      {
        title: "Đọc phần phân tách",
        body: "Xem tổng số từ cùng các con số riêng cho phần thân văn bản, tiêu đề và chú thích hình, rồi dùng con số mà tạp chí, môn học hoặc chương trình sau đại học của bạn yêu cầu.",
      },
    ],
    tipsHeading: "Những gì được đếm",
    tips: [
      {
        title: "Thân văn bản",
        body: "Các từ trong đoạn văn, danh sách và chú thích cuối trang, kể cả chữ bên trong lệnh định dạng như \\textbf{...} và \\emph{...}. Đây là con số chính mà phần lớn giới hạn số từ nhắc tới.",
      },
      {
        title: "Tiêu đề",
        body: "Các từ trong tiêu đề \\section, \\subsection, \\chapter và tương tự, được đếm riêng để bạn có thể tính hoặc không tính chúng.",
      },
      {
        title: "Chú thích hình và bảng",
        body: "Các từ trong chú thích hình và bảng viết bằng \\caption{...}, cũng được đếm riêng.",
      },
      {
        title: "Những gì không được đếm",
        body: "Lệnh và tùy chọn của chúng, nhãn, tham chiếu chéo và khóa trích dẫn (\\label, \\ref, \\cite), chú thích sau dấu %, và công thức toán: công thức inline $...$ và phương trình hiển thị riêng không phải là từ, nên một phương trình không bao giờ làm tăng tổng số.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về đếm từ trong LaTeX",
    faq: [
      {
        question: "Làm sao biết số từ của một tài liệu LaTeX?",
        answer:
          "Dán mã nguồn .tex vào công cụ đếm từ LaTeX ở trên: số từ hiện ngay lập tức, với tổng riêng cho thân văn bản, tiêu đề và chú thích. Khi không có mạng, hãy chạy texcount trên tệp bằng dòng lệnh: texcount -inc -total main.tex.",
      },
      {
        question: "Số từ LaTeX có tính cả phương trình không?",
        answer:
          "Không. Công thức inline như $E = mc^2$ và phương trình hiển thị riêng được coi là công thức chứ không phải từ, nên không được cộng vào số từ.",
      },
      {
        question: "So với texcount và tính năng đếm từ của Overleaf thì sao?",
        answer:
          "Công cụ chạy texcount, script Perl đi kèm TeX Live và MiKTeX, nên các con số khớp với texcount -total trên máy bạn. Tính năng đếm từ của Overleaf cũng dựa trên texcount, nên tổng số sẽ rất gần nhau. Điểm khác là bạn không cần bản cài đặt TeX trên máy hay tài khoản.",
      },
      {
        question: "Tài liệu tham khảo và chú thích mã nguồn có được tính vào số từ không?",
        answer:
          "Không. Chú thích sau dấu % bị bỏ qua, và texcount mặc định bỏ qua phần tài liệu tham khảo, nên các mục từ \\bibliography hay môi trường thebibliography không được đếm. Khóa trích dẫn trong \\cite{...} cũng không được tính là từ.",
      },
    ],
    related: (
      <>
        Cần tài liệu ở định dạng khác? Hãy thử{" "}
        <IntroLink href="/tools/latex-to-word">công cụ chuyển LaTeX sang Word</IntroLink> nếu nơi
        nộp bài yêu cầu tệp .docx, hoặc xem{" "}
        <IntroLink href="/symbols">bảng tra ký hiệu LaTeX</IntroLink>.
      </>
    ),
  },

  "mathml-to-latex": {
    heading: "Chuyển MathML sang LaTeX online",
    intro: (
      <>
        <p>
          Công cụ chuyển MathML sang LaTeX này biến mã MathML thành công thức LaTeX để dán vào bài
          báo. Dán một phần tử <Cmd>{"<math>"}</Cmd>: một mô hình AI (OpenAI gpt-4o-mini) viết lại
          cây phần tử thành mã amsmath. <Cmd>{"<mfrac>"}</Cmd> thành <Cmd>\frac</Cmd>,{" "}
          <Cmd>{"<msqrt>"}</Cmd> thành <Cmd>\sqrt</Cmd>, <Cmd>{"<msup>"}</Cmd> và{" "}
          <Cmd>{"<msub>"}</Cmd> thành chỉ số trên và chỉ số dưới, còn <Cmd>{"<mtable>"}</Cmd>{" "}
          thành ma trận hoặc khối căn hàng. Chữ cái Hy Lạp và toán tử viết bằng ký tự Unicode
          thường được trả về dưới dạng lệnh LaTeX.
        </p>
        <p>
          Kết quả là một tài liệu LaTeX hoàn chỉnh, và tab “Xem trước” biên dịch nó bằng bản phân
          phối TeX Live đầy đủ trên dịch vụ biên dịch Octree, để bạn kiểm tra từng ký hiệu. Trình
          soạn thảo tô màu cú pháp XML, nên cũng dùng được như một trình soạn thảo MathML online
          đơn giản. Mỗi lần chuyển đổi trả về tối đa khoảng 1.500 token LaTeX, đủ cho vài phương
          trình. Công cụ miễn phí và không cần tài khoản.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển MathML sang LaTeX",
    steps: [
      {
        title: "Dán MathML",
        body: (
          <>
            Dán một phần tử <Cmd>{"<math>"}</Cmd> sao chép từ trang web, từ bản xuất của Word hoặc
            MathType, hoặc MathML lấy từ tệp EPUB hay JATS XML.
          </>
        ),
      },
      {
        title: "Chuyển sang LaTeX",
        body: "Nhấn “Chuyển đổi sang LaTeX”. Phương trình được trả về trong một tài liệu LaTeX hoàn chỉnh có nạp amsmath và amssymb.",
      },
      {
        title: "Kiểm tra bản xem trước",
        body: "Mở tab “Xem trước” để biên dịch tài liệu và so sánh phương trình đã dàn trang với bản gốc, rồi sao chép công thức, xuất tệp .tex hoặc PDF, hoặc mở trong Octree.",
      },
    ],
    tipsHeading: "Mẹo khi chuyển MathML",
    tips: [
      {
        title: "Sao chép trọn phần tử math",
        body: (
          <>
            Lấy đủ từ <Cmd>{"<math>"}</Cmd> đến <Cmd>{"</math>"}</Cmd>. Một đoạn bắt đầu giữa chừng
            trong <Cmd>{"<mrow>"}</Cmd> có thể làm mất dấu ngoặc hoặc số hạng.
          </>
        ),
      },
      {
        title: "Lấy MathML từ Word",
        body: "Word lưu phương trình ở dạng OMML, không phải MathML. Trong Word cho Windows, bật Equation Options > “Copy MathML to the clipboard as plain text”, rồi sao chép phương trình và dán vào đây.",
      },
      {
        title: "Chỉ cần phương trình",
        body: (
          <>
            Sao chép các dòng nằm giữa <Cmd>\begin{"{document}"}</Cmd> và{" "}
            <Cmd>\end{"{document}"}</Cmd> vào tệp của bạn; phần preamble chỉ cần{" "}
            <Cmd>\usepackage{"{amsmath,amssymb}"}</Cmd>.
          </>
        ),
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển MathML sang LaTeX",
    faq: [
      {
        question: "Làm sao chuyển MathML sang LaTeX?",
        answer:
          "Dán mã MathML vào trình soạn thảo và nhấn “Chuyển đổi sang LaTeX”. Các phần tử như mfrac, msqrt, msup, msub, mover và mtable được viết lại thành \\frac, \\sqrt, chỉ số trên, chỉ số dưới, dấu phụ và ma trận, và kết quả hiện dưới dạng tài liệu LaTeX hoàn chỉnh mà bạn có thể biên dịch trong tab “Xem trước”.",
      },
      {
        question: "Có hỗ trợ Content MathML không?",
        answer:
          "Công cụ được thiết kế cho Presentation MathML, loại mà trình duyệt, Word và MathType xuất ra. Content MathML (apply, ci, cn) thường cũng chuyển được, vì một mô hình AI đọc mã, nhưng hãy kiểm tra kết quả trong bản xem trước.",
      },
      {
        question: "Có thể chuyển nhiều phương trình cùng lúc không?",
        answer:
          "Có. Dán nhiều phần tử math liên tiếp và chúng sẽ được chuyển vào cùng một tài liệu. Mỗi lần chuyển đổi trả về tối đa khoảng 1.500 token LaTeX, nên hãy chia nhỏ các tệp rất dài.",
      },
      {
        question: "Công cụ chuyển MathML sang LaTeX có miễn phí không?",
        answer:
          "Có, miễn phí và không cần tài khoản. Việc chuyển đổi dùng OpenAI gpt-4o-mini, và bản xem trước biên dịch bằng bản phân phối TeX Live đầy đủ, nên bạn có thể kiểm tra phương trình trước khi dùng.",
      },
    ],
    related: (
      <>
        Tự viết phương trình với{" "}
        <IntroLink href="https://www.useoctree.com/learn/mathematical-expressions" external>
          hướng dẫn viết toán trong LaTeX
        </IntroLink>
        , chuyển ảnh chụp phương trình bằng công cụ{" "}
        <IntroLink href="/tools/math-to-latex">chuyển toán sang LaTeX</IntroLink>, hoặc xem tất cả{" "}
        <IntroLink href="/tools/latex-converter">công cụ chuyển đổi LaTeX</IntroLink>.
      </>
    ),
  },

  "mermaid-to-latex": {
    heading: "Chuyển sơ đồ Mermaid sang TikZ cho LaTeX",
    intro: (
      <>
        <p>
          Công cụ này chuyển mã sơ đồ Mermaid sang TikZ, để một lưu đồ phác trong tệp Markdown,
          README trên GitHub hay Notion có thể đưa vào bài báo LaTeX dưới dạng đồ họa vector gốc.
          Dán định nghĩa Mermaid: một mô hình AI (OpenAI gpt-4o-mini) viết lại từng node, nhãn và
          mũi tên thành một <Cmd>tikzpicture</Cmd>, với vị trí tường minh để các node không chồng
          lên nhau, trong một tài liệu standalone hoặc article hoàn chỉnh có nạp tikz và các thư
          viện cần thiết.
        </p>
        <p>
          Tab “Xem trước” biên dịch sơ đồ bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên
          dịch Octree, để bạn kiểm tra bố cục trước khi xuất tệp .tex hoặc PDF. Mermaid tự động
          bố trí sơ đồ, còn TikZ thì không, nên sơ đồ lớn có thể cần chỉnh khoảng cách. Lưu đồ cho
          kết quả tốt nhất; mỗi lần chuyển đổi trả về tối đa khoảng 2.000 token LaTeX. Công cụ
          miễn phí và không cần tài khoản.
        </p>
      </>
    ),
    stepsHeading: "Cách chuyển Mermaid sang TikZ",
    steps: [
      {
        title: "Dán mã Mermaid",
        body: (
          <>
            Dán định nghĩa sơ đồ, bắt đầu bằng loại sơ đồ như <Cmd>graph TD</Cmd>,{" "}
            <Cmd>flowchart LR</Cmd> hoặc <Cmd>sequenceDiagram</Cmd>, không kèm khối{" "}
            <Cmd>```mermaid</Cmd> bao quanh.
          </>
        ),
      },
      {
        title: "Chuyển sang TikZ",
        body: "Nhấn “Chuyển đổi sang LaTeX”. AI viết lại các node, nhãn và mũi tên thành một tikzpicture trong tài liệu LaTeX hoàn chỉnh.",
      },
      {
        title: "Xem trước, chỉnh và xuất",
        body: "Mở tab “Xem trước” để biên dịch sơ đồ thành PDF. Nếu có phần chồng lên nhau, hãy sửa khoảng cách hoặc vị trí node trong mã, rồi xuất diagram.tex hoặc diagram.pdf, hoặc mở trong Octree.",
      },
    ],
    tipsHeading: "Các vấn đề thường gặp và cách sửa",
    tips: [
      {
        title: "Các node chồng lên nhau",
        body: (
          <>
            Tăng <Cmd>node distance</Cmd> trong tùy chọn của tikzpicture, hoặc đổi vị trí của một
            node, ví dụ từ <Cmd>below of=</Cmd> sang <Cmd>right of=</Cmd>. TikZ không tự bố trí đồ
            thị như Mermaid.
          </>
        ),
      },
      {
        title: "Thư viện chưa được nạp",
        body: (
          <>
            Lỗi về đầu mũi tên hoặc hình dạng không xác định thường có nghĩa là thiếu một{" "}
            <Cmd>\usetikzlibrary</Cmd>, ví dụ <Cmd>arrows.meta</Cmd>, <Cmd>shapes</Cmd> hoặc{" "}
            <Cmd>positioning</Cmd>. Hãy thêm nó vào phần preamble.
          </>
        ),
      },
      {
        title: "Bắt đầu từ cái nhỏ",
        body: "Lưu đồ là loại chuyển đổi ổn định nhất. Với sơ đồ lớn hoặc phức tạp, hãy chuyển từng phần rồi ghép các tikzpicture lại.",
      },
    ],
    faqHeading: "Câu hỏi thường gặp về chuyển Mermaid sang LaTeX",
    faq: [
      {
        question: "Làm sao dùng sơ đồ Mermaid trong LaTeX?",
        answer:
          "LaTeX không hiển thị Mermaid trực tiếp. Hãy dán mã Mermaid vào công cụ này để viết lại sơ đồ bằng TikZ, gói vẽ hình gốc của LaTeX. Sao chép tikzpicture vào tài liệu và nạp gói tikz, hoặc xuất toàn bộ tệp .tex.",
      },
      {
        question: "Hỗ trợ những loại sơ đồ Mermaid nào?",
        answer:
          "Lưu đồ và đồ thị (graph và flowchart) chuyển đổi ổn định nhất. Sơ đồ tuần tự, sơ đồ trạng thái và sơ đồ lớp cũng có thể chuyển được, vì một mô hình AI đọc mã, nhưng hãy dự tính chỉnh lại vị trí trong mã TikZ tạo ra.",
      },
      {
        question: "Vì sao nên chuyển Mermaid sang TikZ thay vì dùng ảnh?",
        answer:
          "Sơ đồ TikZ là đồ họa vector do chính LaTeX vẽ: dùng cùng font với văn bản, sắc nét ở mọi mức phóng to và chỉnh sửa được trong mã nguồn. Ảnh PNG hoặc SVG xuất ra thì không sửa được nếu không quay lại Mermaid.",
      },
      {
        question: "Công cụ chuyển Mermaid sang LaTeX có miễn phí không?",
        answer:
          "Có, miễn phí và không cần tài khoản. Việc chuyển đổi dùng OpenAI gpt-4o-mini và trả về tối đa khoảng 2.000 token LaTeX, còn bản xem trước biên dịch bằng bản phân phối TeX Live đầy đủ.",
      },
    ],
    related: (
      <>
        Học các lệnh vẽ với{" "}
        <IntroLink href="https://www.useoctree.com/learn/tikz" external>
          hướng dẫn TikZ
        </IntroLink>
        , mô tả sơ đồ bằng lời với{" "}
        <IntroLink href="/tools/tikz-generator">trình tạo TikZ</IntroLink>, hoặc vẽ lại một bản
        phác thảo bằng công cụ <IntroLink href="/tools/image-to-tikz">chuyển ảnh sang TikZ</IntroLink>.
      </>
    ),
  },

  "pgfplots-generator": {
    heading: "Trình tạo PGFPlots: tạo biểu đồ pgfplots trong LaTeX",
    intro: (
      <>
        <p>
          Trình tạo PGFPlots này biến mô tả biểu đồ bằng ngôn ngữ thông thường thành mã pgfplots.
          Mô tả một hàm số, một tập điểm dữ liệu hoặc một loại biểu đồ: một mô hình AI (OpenAI
          GPT-5) viết tài liệu LaTeX hoàn chỉnh với môi trường <Cmd>tikzpicture</Cmd> và{" "}
          <Cmd>axis</Cmd> có chú thích. Đồ thị hàm số và biểu đồ đường, biểu đồ cột, biểu đồ phân
          tán, histogram và mặt 3D, với nhãn trục, khoảng giá trị, chú giải và màu sắc theo yêu
          cầu của bạn.
        </p>
        <p>
          Tab “Xem trước” biên dịch biểu đồ bằng bản phân phối TeX Live đầy đủ trên dịch vụ biên
          dịch Octree, để bạn xem PDF trước khi xuất tệp .tex. Vì biểu đồ do LaTeX vẽ, nó dùng
          font của tài liệu và sắc nét ở mọi kích thước, khác với ảnh dán từ bảng tính. Trình tạo
          miễn phí và không cần tài khoản; mã tạo ra thuộc về bạn và có thể chỉnh sửa tự do, từ
          nhãn vạch chia đến kiểu đường vẽ.
        </p>
      </>
    ),
    stepsHeading: "Cách tạo biểu đồ pgfplots",
    steps: [
      {
        title: "Mô tả biểu đồ",
        body: "Nêu thứ cần vẽ: hàm số hoặc điểm dữ liệu, loại biểu đồ (đường, cột, phân tán, miền, histogram hoặc mặt 3D), khoảng giá trị của trục, nhãn, chú giải và màu sắc. Bạn cũng có thể dán một bảng giá trị nhỏ.",
      },
      {
        title: "Tạo mã",
        body: (
          <>
            Nhấn “Tạo biểu đồ”. AI viết một tài liệu hoàn chỉnh với{" "}
            <Cmd>\pgfplotsset{"{compat=1.18}"}</Cmd> và môi trường <Cmd>axis</Cmd> có chú thích.
          </>
        ),
      },
      {
        title: "Xem trước và xuất",
        body: "Mở tab “Xem trước” để biên dịch biểu đồ thành PDF. Sửa mã để tinh chỉnh, rồi xuất pgfplot.tex hoặc pgfplot.pdf, hoặc mở trong Octree.",
      },
    ],
    tipsHeading: "Các lỗi pgfplots thường gặp và cách sửa",
    tips: [
      {
        title: "Dimension too large",
        body: (
          <>
            Một hàm tăng rất nhanh, như <Cmd>exp(x)</Cmd> trên miền rộng, vượt quá khả năng số học
            của TeX. Hãy thu hẹp <Cmd>domain</Cmd>, thêm <Cmd>restrict y to domain</Cmd> hoặc dùng
            trục logarit.
          </>
        ),
      },
      {
        title: "Đường cong bị gãy khúc",
        body: (
          <>
            Tăng <Cmd>samples</Cmd>, ví dụ <Cmd>samples=200</Cmd>, để đường cong mượt hơn. Giữ giá
            trị thấp hơn cho biểu đồ 3D, vốn biên dịch chậm hơn nhiều.
          </>
        ),
      },
      {
        title: "Vẽ dữ liệu của riêng bạn",
        body: (
          <>
            Thay tọa độ được tạo bằng giá trị của bạn với <Cmd>\addplot table</Cmd> hoặc{" "}
            <Cmd>\addplot coordinates</Cmd>; kiểu dáng của trục vẫn giữ nguyên.
          </>
        ),
      },
    ],
    faqHeading: "Câu hỏi thường gặp về trình tạo PGFPlots",
    faq: [
      {
        question: "Trình tạo PGFPlots là gì?",
        answer:
          "Nó viết mã pgfplots thay bạn. pgfplots là gói LaTeX vẽ biểu đồ bằng TikZ; thay vì học các tùy chọn trục của nó, bạn mô tả biểu đồ bằng ngôn ngữ thông thường và nhận một tài liệu hoàn chỉnh để biên dịch, chỉnh sửa và dán vào bài báo.",
      },
      {
        question: "Nó tạo được những loại biểu đồ nào?",
        answer:
          "Mọi thứ pgfplots vẽ được: đồ thị hàm số, biểu đồ đường, biểu đồ cột, biểu đồ phân tán, histogram, thanh sai số, biểu đồ miền và mặt hoặc lưới 3D. Hãy mô tả dữ liệu, trục và kiểu dáng bạn muốn, và mã sẽ làm theo.",
      },
      {
        question: "Làm sao đưa biểu đồ vào tài liệu LaTeX của tôi?",
        answer:
          "Thêm \\usepackage{pgfplots} và \\pgfplotsset{compat=1.18} vào phần preamble, rồi sao chép môi trường tikzpicture từ mã tạo ra vào tài liệu, thường đặt trong môi trường figure có chú thích.",
      },
      {
        question: "Trình tạo PGFPlots có miễn phí không?",
        answer:
          "Có, miễn phí và không cần tài khoản. Mã được viết bởi một mô hình AI (OpenAI GPT-5) và biên dịch bằng bản phân phối TeX Live đầy đủ, nên hãy kiểm tra trong bản xem trước xem nó có đúng với yêu cầu của bạn không.",
      },
    ],
    related: (
      <>
        Học các tùy chọn trục với{" "}
        <IntroLink href="https://www.useoctree.com/learn/pgfplots" external>
          hướng dẫn pgfplots
        </IntroLink>
        , vẽ sơ đồ bằng <IntroLink href="/tools/tikz-generator">trình tạo TikZ</IntroLink>, hoặc
        biến tệp CSV thành bảng với{" "}
        <IntroLink href="/tools/table-to-latex">trình tạo bảng LaTeX</IntroLink>.
      </>
    ),
  },
};

export default translations;
