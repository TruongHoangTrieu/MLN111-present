import React from "react";
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Co-2.css";

const services = [
  {
    title: "Exterior design",
    desc: "Established fact that a reader will be content distracted by the readable.",
    image: "/Hero-Section.png",
  },
  {
    title: "Lighting design",
    desc: "Established fact that a reader will be content distracted by the readable.",
    image: "/Hero-Section.png",
  },
  {
    title: "Interior design",
    desc: "Established fact that a reader will be content distracted by the readable.",
    image: "/Hero-Section.png",
  },
  {
    title: "Landscape design",
    desc: "Established fact that a reader will be content distracted by the readable.",
    image: "/Hero-Section.png",
  },
  {
    title: "Architectural design",
    desc: "Established fact that a reader will be content distracted by the readable.",
    image: "/Hero-Section.png",
  },
  {
    title: "Furniture design",
    desc: "Established fact that a reader will be content distracted by the readable.",
    image: "/Hero-Section.png",
  },
];

export default function ServicesCarousel() {
  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < services.length; i += chunkSize) {
    slides.push(services.slice(i, i + chunkSize));
  }

  return (
    <motion.section
      className="services-section py-5 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          className="d-flex justify-content-between align-items-end mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-uppercase text-secondary small mb-1">Services</p>
            <h2 className="fw-bold">Our best services</h2>
            <p className=" fs-4 text-white ">
              Discover the excellence of our craftsmanship: Tailored services
              for every space and vision
            </p>
          </div>
        </motion.div>

        <Carousel indicators={false} interval={null}>
          {slides.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row>
                {group.map((s, i) => (
                  <Col md={4} key={i}>
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <Card className="service-card text-white bg-dark h-100">
                        <Card.Img
                          variant="top"
                          src={s.image}
                          alt={s.title}
                          className="service-img"
                        />
                        <Card.Body>
                          <Card.Title>{s.title}</Card.Title>
                          <Card.Text className="text-muted">{s.desc}</Card.Text>
                          <Button variant="link" className="text-white p-0">
                            View Services ↗
                          </Button>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </motion.section>
  );
}
