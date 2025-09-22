import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBalanceScale, FaRecycle, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom"; // thêm cái này
import "./Co-2.css";

const services = [
  {
    id: 1,
    title: "Quy luật những thay đổi về lượng dẫn đến thay đổi về chất",
    icon: <FaChartLine size={40} />,
    path: "/services/1",
  },
  {
    id: 2,
    title: "Quy luật thống nhất và đấu tranh của các mặt đối lập",
    icon: <FaBalanceScale size={40} />,
    path: "/services/2",
  },
  {
    id: 3,
    title: "Quy luật phủ định của phủ định",
    icon: <FaRecycle size={40} />,
    path: "/services/3",
  },
];

export default function ServicesList() {
  return (
    <motion.section
    id="services-list"
      className="services-section py-5 text-dark"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          III. Ba Quy Luật Phổ Biến Cơ Bản
        </motion.h2>

        <Row className="g-4">
          {services.map((s, i) => (
            <Col md={4} key={s.id}>
              <Link to={s.path} className="text-decoration-none">
                <motion.div
                  className="service-item p-4 rounded-3 h-100 d-flex flex-column align-items-center justify-content-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="icon mb-3">{s.icon}</div>
                  <h5 className="text-dark">{s.title}</h5>
                </motion.div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  );
}
