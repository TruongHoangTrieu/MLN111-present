// src/components/RelatedArticles.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function RelatedArticles({ currentId, articles, limit = 2, random = false }) {
  const others = articles.filter((a) => a.id !== currentId);

  const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);
  const related = random ? shuffle(others).slice(0, limit) : others.slice(0, limit);

  if (related.length === 0) return null; // không hiển thị nếu không có bài liên quan

  return (
    <div className="related-articles mt-5 light-bg">
      <h3 className="fw-bold mb-4 text-center">Bài viết liên quan</h3>
      <div className="row">
        {related.map((item) => (
          <div key={item.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="row g-0 h-100">
                <div className="col-4">
                  <img
                    src={item.examples?.[0]?.image || ""}
                    alt={item.title}
                    className="img-fluid rounded-start related-thumb"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{item.title}</h5>
                    <p className="card-text text-muted small mb-2">
                      {(item.concept || "").slice(0, 90)}...
                    </p>
                    <Link to={`/detaild/${item.id}`} className="btn btn-sm btn-outline-primary mt-auto align-self-start">
                      Xem chi tiết →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
