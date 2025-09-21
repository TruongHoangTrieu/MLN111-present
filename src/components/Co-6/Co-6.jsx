import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Co-6.css";

const roles = [
  {
    id: 1,
    title: "1. Quy luật là gì ?",
    text: "Quy luật là mối liên hệ phổ biến, khách quan, bản chất, bền vững, tất yếu giữa các đối tượng. Nó hoạt động độc lập và không phụ thuộc vào ý chí con người.",
    color: "red",
  },
  {
    id: 2,
    title: "2. Quy luật khách quan là gì",
    text: "Quy luật khách quan là quy luật của thế giới tự nhiên và xã hội, tồn tại độc lập với ý thức con người.",
    color: "gold",
  },
  {
    id: 3,
    title: "3. Quy luật khoa học là gì ?",
    text: "Quy luật khoa học là sự khái quát các quy luật khách quan, được con người nhận thức và diễn đạt lại dưới dạng lý thuyết.",
    color: "green",
  },
];

const extraRole = {
  id: 4,
  title: "Kết luận",
  text: "=> Nhận thức và vận dụng quy luật khách quan giúp con người làm chủ tự nhiên, xã hội và cải tạo thế giới; ngược lại, nếu không hiểu quy luật thì con người sẽ bị chi phối bởi nó một cách mù quáng.",
  color: "blue",
};

export default function Co6() {
  return (
    <section className="role-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold main-title">
            II A.Khái niệm và bản chất của quy luật
          </h2>
          <p className="subtitle">Tóm tắt ngắn gọn - dễ hiểu - trực quan</p>
        </div>

        {/* 3 ô trên */}
        <Row className="justify-content-center mb-4">
          {roles.map((role) => (
            <Col md={4} sm={12} key={role.id} className="mb-4">
              <Card className={`role-card border-top-${role.color}`}>
                <Card.Body>
                  <Card.Title className="fw-bold role-title">
                    {role.title}
                  </Card.Title>
                  <Card.Text className="role-text">{role.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 1 ô full width dưới */}
        <Row>
          <Col>
            <Card className={`role-card border-top-${extraRole.color}`}>
              <Card.Body>
                <Card.Title className="fw-bold role-title">
                  {extraRole.title}
                </Card.Title>
                <Card.Text className="role-text">{extraRole.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
