import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Co-3.css";

const projects = [
  "/HeroSection.png", // ảnh lớn bên trái
  "/HeroSection.png",
  "/HeroSection.png",
  "/HeroSection.png",
  "/HeroSection.png",
];

export default function Co3() {
  return (
    <motion.section
      className="recent-projects py-5"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Container>
        {/* heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Take a look at our recent projects</h2>
          <p className="text-muted">
            Long established fact that a reader will be content distracted by
            the readable content of a page.
          </p>
        </motion.div>

        <Row>
          {/* ảnh lớn bên trái */}
          <Col md={6} className="mb-3">
            <motion.img
              src={projects[0]}
              alt="project"
              className="img-fluid rounded shadow recent-project-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </Col>

          {/* 4 ảnh nhỏ bên phải */}
          <Col md={6}>
            <Row>
              {projects.slice(1).map((img, idx) => (
                <Col md={6} xs={6} className="mb-3" key={idx}>
                  <motion.img
                    src={img}
                    alt={`project-${idx}`}
                    className="img-fluid rounded shadow recent-project-img"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + idx * 0.2, // lần lượt từng ảnh
                    }}
                    viewport={{ once: true }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}
