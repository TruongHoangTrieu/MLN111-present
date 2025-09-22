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
        <div className="row text-center text-md-start">
          {/* Cột 1 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Giới thiệu</h6>
            <p>
              Trang web do <strong>nhóm 4 lớp SE1708</strong> thực hiện cho học
              phần <strong>Triết học Mác – Lênin (MLN11)</strong>.
            </p>
            <p>
              <strong>Giảng viên hướng dẫn:</strong> Hà Thị Việt Thúy
            </p>
          </div>

          {/* Cột 2 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Liên hệ</h6>
            <p>Email: trieuthse182579@fpt.edu.vn</p>
            <p>Điện thoại: 096 4488 767</p>
            <p>Địa chỉ: Lô E2a-7, Đường D1, Khu Công nghệ cao, Phường Tăng Nhơn Phú, TPHCM</p>
          </div>

          {/* Cột 3 */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Phụ lục AI</h6>
            <p>
              Trang web này được xây dựng với sự hỗ trợ của AI để tổng hợp, cấu
              trúc nội dung và tạo mã nguồn.
            </p>
            <p></p>
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
