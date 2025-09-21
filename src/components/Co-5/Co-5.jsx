import React, { useEffect } from "react";
import "./Co-5.css";
import { Link } from "react-router-dom";
import { FaBook, FaBalanceScale, FaGlobe } from "react-icons/fa";

const articles = [
  { id: 1, title: "Quy luật riêng", icon: <FaBook /> },
  { id: 2, title: "Quy luật chung", icon: <FaBalanceScale /> },
  { id: 3, title: "Quy luật phổ biến", icon: <FaGlobe /> },
];

const Co5 = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".blog-card");
    const handleScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="blog-section container py-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="fw-bold mt-2">II B. Phân loại và vai trò của quy luật</h2>
      </div>

      {/* Titles with big icons */}
      <div className="row">
        {articles.map((article, idx) => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className={`blog-card text-center delay-${idx}`}>
              <Link to={`/detaild/${article.id}`} className="title-link">
                <div className="icon-big">{article.icon}</div>
                <h4 className="title-big">{article.title}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Co5;
