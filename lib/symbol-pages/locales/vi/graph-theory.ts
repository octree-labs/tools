import type { SymbolPageTranslations } from "../types";

/** Vietnamese copy for /vi/symbols/graph-theory/<slug>. */
const text: SymbolPageTranslations = {
  "vertex": {
    name: "Đỉnh",
    meaning: "Chữ v thường in nghiêng, chữ cái quy ước cho một đỉnh của đồ thị.",
    usage: "Các đỉnh được viết bằng chữ thường như u, v, w, và quan hệ thuộc là v \\in V(G). Bậc của một đỉnh là \\deg(v), tập láng giềng là N(v), và cạnh nối hai đỉnh thường được viết uv hoặc \\{u, v\\}. Vì đây là một chữ cái thông thường, điều cần lưu ý chính là tính nhất quán: đừng dùng lại v cho vectơ hay vận tốc trong cùng văn bản. Đánh chỉ số dưới, v_1, \\dots, v_n, cho một thứ tự hữu ích khi lập ma trận kề. Khi đỉnh mang nhãn hoặc trọng số, các hàm như w(v) giữ cho ký hiệu gọn gàng.",
  },
  "edge": {
    name: "Cạnh",
    meaning: "Chữ e thường in nghiêng, chữ cái thông dụng cho một cạnh của đồ thị.",
    usage: "Một cạnh e = uv hoặc e = \\{u, v\\} nối hai đỉnh; trong đồ thị có hướng, một cung được viết e = (u, v) và thứ tự có ý nghĩa. Quan hệ thuộc là e \\in E(G), và trọng số cạnh là w(e). Vì e cũng chỉ số Euler, một số tác giả viết hằng số này ở dạng đứng \\mathrm{e} để tránh nhầm lẫn khi đồ thị và hàm mũ cùng xuất hiện, chẳng hạn trong các lập luận xác suất. Các cạnh có chỉ số e_1, \\dots, e_m đánh số các cột của ma trận liên thuộc. Hai đầu mút của e đôi khi được viết e^- và e^+ cho đỉnh đầu và đỉnh cuối.",
  },
  "graph": {
    name: "Đồ thị",
    meaning: "Định nghĩa đồ thị G như một cặp có thứ tự gồm tập đỉnh V và tập cạnh E.",
    usage: "Đây là câu mở đầu của hầu hết các lập luận trong lý thuyết đồ thị; nó cố định V là tập đỉnh và E \\subseteq \\binom{V}{2} là tập cạnh của một đồ thị đơn, hoặc E \\subseteq V \\times V cho đồ thị có hướng. Cách viết tắt thông dụng: n = |V| và m = |E|. Đồ thị có trọng số mở rộng thành G = (V, E, w). Hãy dùng ngoặc tròn, không dùng ngoặc nhọn góc, cho cặp có thứ tự. Trong các công trình dài, viết V(G) và E(G) khi có nhiều đồ thị cùng xuất hiện. Chữ thư pháp \\mathcal{G} đôi khi được dành cho một họ đồ thị hoặc một mô hình đồ thị xác suất.",
  },
  "vertex-set": {
    name: "Tập đỉnh",
    meaning: "Tập đỉnh của đồ thị G, viết như một hàm của G khi bàn đến nhiều đồ thị.",
    usage: "V(G) cho biết rõ tập đỉnh thuộc đồ thị nào, điều quan trọng khi so sánh một đồ thị với đồ thị con H, trong đó V(H) \\subseteq V(G). Cấp của đồ thị là |V(G)|, thường viết tắt là n hoặc |G|. Với đồ thị bù và đồ thị đường, V(\\overline{G}) = V(G) trong khi V(L(G)) = E(G). Chữ V nghiêng thông thường là chuẩn; không cần lệnh đặc biệt. Viết định nghĩa tập hợp bằng ngoặc nhọn \\{ \\} và dùng \\mid hoặc dấu hai chấm cho điều kiện. Tổng theo các đỉnh được viết \\sum_{v \\in V(G)}.",
  },
  "edge-set": {
    name: "Tập cạnh",
    meaning: "Tập cạnh của đồ thị G, tập tất cả các cặp đỉnh được nối bởi một cạnh.",
    usage: "E(G) được viết tường minh khi có nhiều hơn một đồ thị trong phạm vi xét; lực lượng |E(G)| của nó, trong một số giáo trình còn viết e(G) hoặc \\|G\\|, là kích thước của đồ thị. Bổ đề bắt tay liên hệ nó với bậc: \\sum_v \\deg(v) = 2|E(G)|. Một đồ thị đơn thỏa mãn |E(G)| \\leq \\binom{n}{2}, và một cây có đúng n - 1 cạnh. Lưu ý rằng E bị dùng cho rất nhiều nghĩa, đáng kể là kỳ vọng trong tổ hợp xác suất, nên dùng chữ bảng đen \\mathbb{E} cho kỳ vọng giúp phân biệt hai nghĩa.",
  },
  "adjacency": {
    name: "Quan hệ kề",
    meaning: "Quan hệ kề: u và v được nối bởi một cạnh trong đồ thị.",
    usage: "\\sim là một quan hệ hai ngôi, nên TeX đặt các khoảng trắng dày cân đối quanh nó, giúp u \\sim v đọc đúng. Để chỉ rõ đồ thị, viết u \\sim_G v. Một số tác giả dùng u \\leftrightarrow v hoặc uv \\in E(G) thay thế. Quan hệ không kề được viết u \\nsim v. Đừng nhầm \\sim với \\simeq (tương đương tiệm cận hoặc đồng luân), \\approx (xấp xỉ bằng), hay \\backsim (dấu ngã ngược). Trong xác suất, x \\sim p có nghĩa là được lấy mẫu từ, nên hãy định nghĩa rõ quan hệ kề trong các bài báo liên ngành. Tập láng giềng theo đó được viết tự nhiên: N(v) = \\{u : u \\sim v\\}.",
  },
  "degree": {
    name: "Bậc của đỉnh",
    meaning: "Bậc của đỉnh v: số cạnh liên thuộc với nó, trong đó khuyên được tính hai lần.",
    usage: "\\deg là một trong các tên toán tử định nghĩa sẵn của LaTeX, nên in chữ đứng với khoảng cách đúng, khác với gõ deg cho ra ba chữ nghiêng. Bổ đề bắt tay phát biểu \\sum_v \\deg(v) = 2|E|, và nhiều tác giả viết tắt thành d(v) hoặc d_G(v). Bậc nhỏ nhất và lớn nhất được viết \\delta(G) và \\Delta(G). Với đồ thị ghi ở chỉ số dưới, \\deg_G(v) hoạt động tự nhiên. Cùng lệnh này cũng dùng để viết bậc của đa thức, \\deg(p), trong đại số. Một đồ thị chính quy có \\deg(v) = k với mọi đỉnh.",
  },
  "in-degree": {
    name: "Bán bậc vào",
    meaning: "Bán bậc vào của đỉnh v trong đồ thị có hướng: số cung kết thúc tại v.",
    usage: "Trong đồ thị có hướng, mỗi cung đóng góp một vào bán bậc ra của đỉnh đầu và một vào bán bậc vào của đỉnh cuối, nên \\sum_v \\deg^-(v) = \\sum_v \\deg^+(v) = |E|. Một đỉnh nguồn có \\deg^-(v) = 0. Dấu trừ ở chỉ số trên là quy ước phổ biến nhất, dù một số giáo trình viết d^-(v), \\deg_{\\text{in}}(v) hoặc \\mathrm{indeg}(v). Đặt chỉ số trên trong ngoặc nhọn ^{-} để nó gắn rõ ràng. Trong ngữ cảnh PageRank và xích Markov, bán bậc vào liên quan đến số trang liên kết tới một nút. Sắp xếp tô pô bằng thuật toán Kahn lặp lại việc loại bỏ các đỉnh có bán bậc vào bằng không.",
  },
  "out-degree": {
    name: "Bán bậc ra",
    meaning: "Bán bậc ra của đỉnh v trong đồ thị có hướng: số cung đi ra khỏi v.",
    usage: "Bán bậc ra đếm các cung có đỉnh đầu là v; một đỉnh đích có \\deg^+(v) = 0. Tổng trên mọi đỉnh bằng |E|, khớp với tổng bán bậc vào. Dấu cộng ở chỉ số trên là phổ biến, với d^+(v) và \\deg_{\\text{out}}(v) là các cách viết khác, nên hãy định nghĩa ký hiệu của bạn. Một đồ thị có hướng có chu trình Euler khi và chỉ khi nó liên thông (bỏ qua các đỉnh cô lập) và \\deg^+(v) = \\deg^-(v) tại mọi đỉnh. Theo ma trận kề, bán bậc ra là tổng hàng và bán bậc vào là tổng cột. Hãy đặt chỉ số trên trong ngoặc nhọn, ^{+}, để mã nguồn rõ ràng.",
  },
  "path": {
    name: "Đồ thị đường đi",
    meaning: "Đồ thị đường đi trên n đỉnh: n đỉnh nối thành một hàng bởi n - 1 cạnh.",
    usage: "P_n là một họ cơ bản trong lý thuyết đồ thị, cùng với C_n và K_n. Quy ước khác nhau, và đây là nguồn gây nhầm lẫn thực sự: nhiều giáo trình để n đếm số đỉnh, trong khi số khác, kể cả Diestel, viết P^k cho đường đi có k cạnh. Hãy nêu rõ quy ước của bạn. Đường đi có sắc số 2 khi n \\geq 2 và là cây. Khi đếm hành trình, số đường đi khác với số hành trình vì các đỉnh không được lặp lại. Chỉ số dưới là chỉ số thông thường; với chỉ số dài hơn, dùng ngoặc nhọn, P_{n+1}. Đừng nhầm với P(n, k), số chỉnh hợp.",
  },
  "cycle": {
    name: "Đồ thị chu trình",
    meaning: "Đồ thị chu trình trên n đỉnh (n ít nhất là 3), tạo thành một vòng khép kín duy nhất; trong tổ hợp cũng là số Catalan thứ n.",
    usage: "Trong lý thuyết đồ thị, C_n là chu trình có n đỉnh và n cạnh; nó là đồ thị hai phía khi và chỉ khi n chẵn, nên \\chi(C_n) = 2 với n chẵn và bằng 3 với n lẻ. Trong tổ hợp, cùng ký hiệu này thường chỉ số Catalan C_n = \\frac{1}{n+1}\\binom{2n}{n}, đếm số cách đặt dấu ngoặc cân bằng, số cây nhị phân và số đường Dyck: 1, 1, 2, 5, 14, 42. Vì trang này dùng chung cho hai lĩnh vực, hãy nói sớm bạn muốn dùng nghĩa nào. Cần ngoặc nhọn cho chỉ số phức hợp, C_{2k+1}.",
  },
  "complete-graph": {
    name: "Đồ thị đầy đủ",
    meaning: "Đồ thị đầy đủ trên n đỉnh, trong đó mọi cặp đỉnh phân biệt đều được nối bởi một cạnh.",
    usage: "K_n có \\binom{n}{2} = n(n-1)/2 cạnh và sắc số n. Chữ cái này tôn vinh Kuratowski, người có định lý nói rằng một đồ thị là phẳng khi và chỉ khi nó không chứa phép chia nhỏ nào của K_5 hoặc K_{3,3}. Các số Ramsey được phát biểu bằng đồ thị đầy đủ, R(3,3) = 6 nghĩa là mọi cách tô 2 màu các cạnh của K_6 đều chứa một tam giác đơn sắc. Công thức Cayley đếm được n^{n-2} cây khung của K_n. Dùng ngoặc nhọn cho chỉ số dưới nhiều ký tự như K_{n+1}. Một clique kích thước k trong G là một đồ thị con đẳng cấu với K_k.",
  },
  "bipartite": {
    name: "Đồ thị hai phía đầy đủ",
    meaning: "Đồ thị hai phía đầy đủ: hai phần có kích thước m và n, mỗi đỉnh ở phần này được nối với mọi đỉnh ở phần kia.",
    usage: "K_{m,n} có m + n đỉnh và mn cạnh, và K_{1,n} là đồ thị hình sao. K_{3,3}, đồ thị ba nhà ba giếng, là một trong hai đồ thị con bị cấm của Kuratowski cho tính phẳng. Lưu ý dấu phẩy nằm bên trong ngoặc nhọn: K_{m,n}; viết K_m,n sẽ đặt n trên đường cơ sở. TeX thêm một chút khoảng trắng sau dấu phẩy trong chỉ số dưới, trông vẫn ổn; để gọn hơn, một số người viết K_{m\\,n} không có dấu phẩy, nhưng cách này hiếm gặp. Bài toán Zarankiewicz hỏi một đồ thị có thể có bao nhiêu cạnh mà không chứa bản sao nào của K_{s,t}.",
  },
  "adjacency-matrix": {
    name: "Ma trận kề",
    meaning: "Phần tử ở hàng i, cột j của ma trận kề: bằng 1 nếu đỉnh i và j kề nhau, bằng 0 nếu ngược lại.",
    usage: "Với đồ thị vô hướng đơn, ma trận kề đối xứng và có các số không trên đường chéo; trong đồ thị có trọng số, A_{ij} chứa trọng số cạnh. Một sự kiện kinh điển: (A^k)_{ij} đếm số hành trình độ dài k từ i đến j, nên \\operatorname{tr}(A^3)/6 là số tam giác. Bậc là tổng hàng, \\deg(i) = \\sum_j A_{ij}, và ma trận Laplace là L = D - A. Viết A_{ij} có ngoặc nhọn; A_ij chỉ đưa i xuống chỉ số dưới. Với chỉ số có dấu phẩy, A_{i,j} rõ ràng hơn khi chỉ số là biểu thức như A_{i+1,j}.",
  },
  "incidence-matrix": {
    name: "Ma trận liên thuộc",
    meaning: "Chữ B hoa, theo quy ước là ma trận liên thuộc của đồ thị, với các hàng ứng với đỉnh và các cột ứng với cạnh.",
    usage: "Với đồ thị vô hướng, B_{ve} = 1 khi đỉnh v là một đầu mút của cạnh e. Với đồ thị có hướng hoặc được định hướng tùy ý, các phần tử bằng -1 tại đỉnh đầu và +1 tại đỉnh cuối (hoặc ngược lại, tùy tác giả), và khi đó BB^\\top = L = D - A, ma trận Laplace của đồ thị. Một số sách gọi ma trận này là M hoặc N thay vì B. Đây là ma trận n \\times m, nên hãy nêu rõ kích thước. Với ma trận liên thuộc không định hướng, BB^\\top bằng D + A, ma trận Laplace không dấu, một nguồn thường gặp của lỗi về dấu.",
  },
  "connected": {
    name: "Quan hệ liên thông",
    meaning: "Quan hệ liên thông: có một đường đi giữa hai đỉnh u và v, nên chúng nằm trong cùng một thành phần liên thông.",
    usage: "\\leftrightarrow là mũi tên thuộc lớp quan hệ, nên có khoảng cách đối xứng. Trong lý thuyết đồ thị, u \\leftrightarrow v thường có nghĩa là u và v liên thông, còn trong xích Markov nó có nghĩa là hai trạng thái liên lạc với nhau. Đồ thị có hướng cần cẩn thận: khả năng đi tới lẫn nhau là quan hệ liên thông mạnh, đôi khi viết u \\rightleftarrows v. Đừng nhầm \\leftrightarrow với mũi tên dài hơn \\longleftrightarrow hay mũi tên kép \\Leftrightarrow, vốn có nghĩa là tương đương logic. Một số tác giả viết u \\sim v cho quan hệ kề và dành \\leftrightarrow cho liên thông, cách này gọn gàng nếu được nêu rõ. Đây là một quan hệ tương đương mà các lớp của nó là các thành phần liên thông.",
  },
  "tree": {
    name: "Cây",
    meaning: "Chữ T hoa, chữ cái thông dụng cho một cây: đồ thị liên thông không có chu trình.",
    usage: "Một cây trên n đỉnh có đúng n - 1 cạnh, một đường đi duy nhất giữa hai đỉnh bất kỳ, và ít nhất hai lá khi n \\geq 2. Cây khung được viết T \\subseteq G, và công thức Cayley nói rằng K_n có n^{n-2} cây khung có gán nhãn. Các thuật toán cây khung nhỏ nhất như Kruskal và Prim cực tiểu hóa w(T) = \\sum_{e \\in T} w(e). Chữ T nghiêng thông thường là đủ; hãy để ý xung đột với chỉ số trên chuyển vị hoặc thời gian, và ưu tiên ^\\top cho phép chuyển vị trong tài liệu có bàn về cây. Cây có gốc thường được viết (T, r).",
  },
  "forest": {
    name: "Rừng",
    meaning: "Chữ F hoa, theo quy ước chỉ một rừng: đồ thị không có chu trình mà các thành phần liên thông là cây.",
    usage: "Một rừng có n đỉnh và k thành phần liên thông có n - k cạnh, tổng quát hóa công thức của cây. Rừng khung xuất hiện trong thuật toán Kruskal, thuật toán phát triển một rừng bằng cách thêm cạnh rẻ nhất không tạo chu trình, và trong cách nhìn matroid về đồ thị, nơi các rừng là các tập độc lập của matroid đồ thị. Là một chữ cái thông thường, F không cần lệnh nào, nhưng nó trùng với số mặt trong đồ thị phẳng (công thức Euler V - E + F = 2) và số Fibonacci, nên hãy đổi chữ nếu cả hai cùng xuất hiện. Số rừng (arboricity) của một đồ thị đếm số rừng cần để phủ các cạnh của nó.",
  },
  "chromatic-number": {
    name: "Sắc số",
    meaning: "Sắc số của G: số màu ít nhất cần để tô các đỉnh sao cho hai đỉnh kề nhau có màu khác nhau.",
    usage: "Được viết bằng chữ Hy Lạp \\chi, sắc số thỏa mãn \\omega(G) \\leq \\chi(G) \\leq \\Delta(G) + 1, và định lý Brooks hạ cận trên xuống \\Delta(G) trừ đồ thị đầy đủ và chu trình lẻ. Định lý bốn màu nói rằng \\chi(G) \\leq 4 với đồ thị phẳng. Phiên bản cho cạnh là sắc số cạnh \\chi'(G). Đừng nhầm \\chi với chữ x Latinh, trông giống nhau ở một số phông, hay với đặc trưng Euler, cũng dùng \\chi. Tính \\chi(G) là bài toán NP-khó, nên nhiều bài báo đưa ra các cận thay vì giá trị chính xác.",
  },
  "clique": {
    name: "Số clique",
    meaning: "Số clique của G: kích thước của đồ thị con đầy đủ lớn nhất chứa trong đồ thị.",
    usage: "Số clique là cận dưới của sắc số, \\omega(G) \\leq \\chi(G), và các đồ thị mà đẳng thức đúng với mọi đồ thị con cảm sinh được gọi là đồ thị hoàn hảo. Nó bổ sung cho số độc lập: \\omega(G) = \\alpha(\\overline{G}), với \\overline{G} là đồ thị bù. Tìm nó là bài toán NP-khó. Hãy dùng chữ Hy Lạp thường \\omega, không phải w. Ký hiệu này bị dùng cho nhiều nghĩa khác: ký hiệu tiệm cận omega nhỏ và \\omega(n), số ước nguyên tố phân biệt, nên một định nghĩa ngắn sẽ giúp ích trong ngữ cảnh hỗn hợp. Định lý Turán chặn số cạnh của một đồ thị có \\omega(G) \\leq r.",
  },
  "independent-set": {
    name: "Số độc lập",
    meaning: "Số độc lập của G: kích thước của tập lớn nhất gồm các đỉnh đôi một không kề nhau.",
    usage: "Số độc lập thỏa mãn \\alpha(G) \\cdot \\chi(G) \\geq |V(G)|, vì mỗi lớp màu là một tập độc lập, và \\alpha(G) = \\omega(\\overline{G}). Đẳng thức Gallai liên hệ nó với số phủ đỉnh: \\alpha(G) + \\tau(G) = |V(G)|. Nói chung tính nó là bài toán NP-khó nhưng lại dễ trên đồ thị hai phía nhờ định lý Kőnig. Hãy dùng \\alpha, chữ Hy Lạp, trông khác hẳn chữ a ở hầu hết các phông. Phiên bản cho cạnh là \\alpha'(G) hoặc \\nu(G), số cặp ghép. Cận Caro-Wei cho \\alpha(G) \\geq \\sum_v 1/(\\deg(v)+1).",
  },
  "matching": {
    name: "Cặp ghép",
    meaning: "Chữ M hoa, chữ cái chuẩn cho một cặp ghép: một tập cạnh trong đó không có hai cạnh nào chung đỉnh.",
    usage: "Một cặp ghép M \\subseteq E(G) là hoàn hảo khi nó phủ mọi đỉnh, nên |M| = |V(G)|/2, và là cực đại khi không tồn tại cặp ghép nào lớn hơn; kích thước của nó là số cặp ghép \\nu(G). Định lý Hall cho điều kiện để có cặp ghép hoàn hảo trong đồ thị hai phía: |N(S)| \\geq |S| với mọi tập con S của một phía. Các thuật toán gồm Hopcroft-Karp cho đồ thị hai phía và thuật toán bông hoa của Edmonds cho trường hợp tổng quát. Đường tăng thường được viết theo M, và hiệu đối xứng M \\triangle M' xuất hiện trong nhiều chứng minh. Tránh dùng M nếu một ma trận cũng cần tên.",
  },
  "planar-graph": {
    name: "Đồ thị phẳng",
    meaning: "Phép nhúng đồ thị G vào mặt phẳng, trong đó các cạnh chỉ gặp nhau tại đầu mút chung; khi đó G là đồ thị phẳng.",
    usage: "Mũi tên có móc \\hookrightarrow theo quy ước chỉ một đơn ánh hoặc phép nhúng, nên G \\hookrightarrow \\mathbb{R}^2 nói rằng G có thể vẽ trên mặt phẳng mà không có cạnh cắt nhau. Đồ thị phẳng liên thông thỏa mãn công thức Euler V - E + F = 2, và đồ thị phẳng đơn có ít nhất ba đỉnh có nhiều nhất 3V - 6 cạnh. Các định lý Kuratowski và Wagner đặc trưng chúng bằng cách cấm K_5 và K_{3,3}. \\hookrightarrow là mũi tên có khoảng cách của quan hệ; chiều ngược lại là \\hookleftarrow. Nhúng vào mặt cầu là tương đương, còn với các mặt khác thì viết G \\hookrightarrow S_g.",
  },
};

export default text;
