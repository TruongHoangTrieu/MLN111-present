import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DetailPage.css";
import RelatedArticles from "../../components/RelatedArticles/RelatedArticles";

const articles = [
  {
    id: 1,
    title: "Quy luật riêng",
    concept:
      "Là những quy luật chỉ tác động trong một lĩnh vực, phạm vi hẹp hoặc một nhóm sự vật, hiện tượng nhất định. Nó không có giá trị ngoài phạm vi đó.",
    examples: [
      {
        text: "Ví dụ: Quy luật cung – cầu trong kinh tế thị trường (chỉ đúng trong hoạt động kinh tế, không áp dụng cho tự nhiên).",
        image:
          "https://dautu.vndirect.com.vn/wp-content/uploads/2021/12/can-1024x444.png",
      },
      {
        text: "Quy luật di truyền Menđen (chỉ trong lĩnh vực sinh học).",
        image:
          "https://viethungpham.com/wp-content/uploads/2015/08/mendel-refuted-darwinism-1.jpg?w=600",
      },
      {
        text: "Quy luật phản ứng hóa học (chỉ trong hóa học, không áp dụng sang vật lý xã hội).",
        image:
          "https://toplist.vn/images/800px/sach-on-thi-hoa-hoc-cho-ky-thi-thpt-quoc-gia-ban-phai-co-794872.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Quy luật chung",
    concept:
      "Là những quy luật tồn tại trong một số lĩnh vực của tự nhiên, xã hội và tư duy, có phạm vi rộng hơn quy luật riêng, nhưng chưa bao trùm tất cả.",
    examples: [
      {
        text: "Ví dụ: Quy luật bảo toàn và chuyển hóa năng lượng (đúng cho vật lý, hóa học, sinh học).",
        image:
          "https://hoc247.net/fckeditorimg/upload/2022/202208/images/mo-hinh-thuy-dien.jpg",
      },
      {
        text: "Ví dụ: Quy luật lượng – chất (áp dụng trong cả tự nhiên và xã hội, nhưng chưa phải ở tất cả mọi hiện tượng).",
        image:
          "https://file1.hutech.edu.vn/file/editor/homepage1/898285-a7400001.jpg",
      },
      {
        text: "Ví dụ: Quy luật đấu tranh giai cấp (đúng trong xã hội có giai cấp, nhưng không tồn tại trong xã hội nguyên thủy).",
        image:
          "https://tulieuvankien.dangcongsan.vn/Uploads/2021/11/6/29/chan-ly.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Quy luật phổ biến",
    concept:
      "Là những quy luật của phép biện chứng duy vật, phản ánh các mối liên hệ phổ biến nhất của tất cả các sự vật, hiện tượng trong thế giới hiện thực.",
    examples: [],
  },
];

export default function DetailPage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  const colors = ["red", "yellow", "green", "purple"];

  if (!article) {
    return <p className="text-center mt-5">⚠️ Không tìm thấy bài viết</p>;
  }

  return (
    <>
      <div className="container py-5 mt-5 fade-in">
        <Link to="/" className="btn btn-outline-secondary mb-4">
          ← Quay lại
        </Link>

        {/* Title */}
        <h1 className="fw-bold mb-5 text-center text-primary">
          {article.title}
        </h1>

        {/* Concept Box */}
        <div
          className={`concept-box mb-5 p-4 border rounded shadow-sm colored-box ${
            colors[article.id % colors.length]
          } slide-in-up`}
        >
          <h4 className="fw-bold mb-3">📖 Khái niệm</h4>
          <p className="lead fw-semibold">{article.concept}</p>
        </div>

        {/* Examples */}
        {article.examples.map((ex, index) => {
          const isEven = index % 2 === 1;
          const colorClass = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`example-box row align-items-center p-4 mb-5 border rounded shadow-sm colored-box ${colorClass} slide-in-up`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              {!isEven ? (
                <>
                  <div className="col-md-6 text-center mb-3 mb-md-0">
                    <img
                      src={ex.image}
                      alt={`example-${index}`}
                      className="img-fluid rounded shadow-sm example-img"
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="fw-bold mb-3">Ví dụ {index + 1}</h4>
                    <p className="fw-semibold">{ex.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <h4 className="fw-bold mb-3">Ví dụ {index + 1}</h4>
                    <p className="fw-semibold">{ex.text}</p>
                  </div>
                  <div className="col-md-6 text-center mb-3 mb-md-0">
                    <img
                      src={ex.image}
                      alt={`example-${index}`}
                      className="img-fluid rounded shadow-sm example-img"
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Đưa RelatedArticles ra ngoài container để full màn hình */}
      <RelatedArticles currentId={article.id} articles={articles} />
    </>
  );
}
