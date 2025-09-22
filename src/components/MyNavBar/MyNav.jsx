import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyNav.css";

function MyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector(".hero-split"); // nếu bạn đổi class của hero, sửa selector ở đây
    if (!heroEl) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === true  -> hero đang hiển thị (một phần hoặc toàn phần)
        // khi hero **không** intersect => đã scroll qua hết -> set scrolled = true
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 } // threshold 0 => khi chưa còn phần tử trong viewport sẽ báo false
    );

    io.observe(heroEl);
    return () => io.disconnect();
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled-navbar" : "transparent-navbar"}`}>
      <div className="container" style={{ maxWidth: "1140px" }}>
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/fptu.png" alt="Logo" style={{ height: 40, marginRight: 8 }} />
          <span className="brand-text">MLN111</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5 fs-5">
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
