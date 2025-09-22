// PracticalDiscussion.jsx
import React from "react";
import "./PracticalDiscussion.css";

const analysisPoints = [
  {
    rule: "Nguyên nhân – Kết quả",
    content: "Nguyên nhân thất nghiệp không chỉ do thiếu bằng, mà còn do kỹ năng, thái độ, khả năng thích ứng."
  },
  {
    rule: "Tất nhiên – Ngẫu nhiên",
    content: "Có trường hợp ngẫu nhiên (may mắn cơ hội), nhưng về lâu dài, năng lực thực chất mới là tất yếu quyết định."
  },
  {
    rule: "Lượng – Chất",
    content: "Tích lũy kỹ năng, kinh nghiệm từng ngày sẽ tạo ra “bước nhảy” giúp bạn vượt trội, không chỉ bằng cấp."
  },
  {
    rule: "Khả năng – Hiện thực",
    content: "Tấm bằng chỉ là khả năng, còn biến nó thành hiện thực việc làm phụ thuộc vào năng lực và nỗ lực cá nhân."
  }
];

export default function PracticalDiscussion() {
  return (
    <div className="practical-discussion container py-5">
      <h2 className="fw-bold mb-4 text-center display-4">Liên hệ thực tiễn và thảo luận</h2>

      <div className="problem mb-3">
        <h5 className="text-primary fw-bold fs-3">Vấn đề xã hội đặt ra:</h5>
        <p className="fs-5">Nhiều sinh viên ngày nay học chỉ để “qua môn”, trọng bằng cấp hơn kiến thức.</p>
      </div>

      <div className="facts mb-4">
        <h5 className="text-success fw-bold fs-3">Thực tế cho thấy:</h5>
        <ul className="fs-5">
          <li>Có người chưa có bằng hoặc chưa tốt nghiệp vẫn thành công trong nghề nghiệp.</li>
          <li>Ngược lại, có người có bằng cấp nhưng vẫn thất nghiệp.</li>
        </ul>
      </div>

      <div className="analysis">
        {analysisPoints.map((a, i) => (
          <div key={i} className="analysis-point mb-3 p-4 border-start border-4 border-info">
            <h6 className="fw-bold fs-4">{a.rule}</h6>
            <p className="fs-5">{a.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
