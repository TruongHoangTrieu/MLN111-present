import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer text-light py-5 ${isVisible ? "show" : ""}`}
    >
      <div className="container">
        <div className="row">
          {/* Cột 1 */}
          <div className="col-md-4 mb-4">
            <p>
              Trang web do nhóm 4 lớp SE1708 thực hiện cho
              học phần Triết học Mác – Lênin (MLN11)
            </p>
            <p>
              <strong>Giảng viên hướng dẫn:</strong> Hà Thị Việt Thúy
            </p>
          </div>

          {/* Cột 2 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Phụ lục các mục</h6>
            <p>
              <strong>Trang chủ:</strong> Tổng quan và sơ lược.
            </p>
            <p>
              <strong>Nội dung:</strong> Lịch sử, Vai trò trong đời sống xã hội
              và đổi mới đất nước, Vai trò trong nhiệm vụ chuyển đổi số quốc gia.
            </p>
            <p>
              <strong>Quiz:</strong> Bài trắc nghiệm củng cố kiến thức.
            </p>
          </div>

          {/* Cột 3 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Phụ lục AI</h6>
            <p>
              Trang web này được xây dựng với sự hỗ trợ của AI để tổng hợp, cấu
              trúc nội dung và tạo mã nguồn.
            </p>
            <p>
              <a href="#" className="text-light text-decoration-none fw-bold">
                Chính sách bảo mật
              </a>
            </p>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="text-center mt-4 small">
          © 2025. Nội dung tổng hợp từ tài liệu học tập.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
