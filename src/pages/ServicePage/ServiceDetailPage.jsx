import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { services } from "../../Data/servicesData";

function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) return <p>Không tìm thấy dịch vụ!</p>;

  return (
    <div className="container" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
      {/* Tiêu đề */}
      <h2
        className="fw-bold mb-4 text-center text-primary"
        style={{ fontSize: "3rem", lineHeight: "1.3" }} // chữ lớn hơn
      >
        {service.title}
      </h2>

      {/* Ảnh minh họa */}
      <div className="text-center mb-4">
        <img
          src={service.image}
          alt={service.title}
          className="img-fluid rounded shadow"
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
        <p className="text-muted mt-2" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
          {service.imageCaption}
        </p>
      </div>

      {/* Mở đầu */}
      <Card className="shadow-sm p-4 border-0 mb-4">
        <p style={{ fontSize: "1.4rem", lineHeight: "2.2" }}>{service.intro}</p>
        <p style={{ fontSize: "1.2rem", lineHeight: "2" }}>
          <i>{service.introExample}</i>
        </p>
      </Card>

      {/* Sections */}
      {service.sections.map((sec, index) => (
        <section className="mb-5" key={index}>
          <h4
            className="fw-semibold text-secondary mb-3"
            style={{ fontSize: "2rem", lineHeight: "1.4" }}
          >
            {sec.heading}
          </h4>
          <ul style={{ lineHeight: "2", fontSize: "1.3rem" }}>
            {sec.content.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "1rem" }}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Nút quay lại */}
      <div className="text-center mt-5">
  <Link to="/#services-list" className="btn btn-outline-primary btn-lg">
    ← Quay lại danh sách
  </Link>
</div>
    </div>
  );
}

export default ServiceDetailPage;
