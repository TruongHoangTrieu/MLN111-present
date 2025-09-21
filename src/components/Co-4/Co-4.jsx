import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Co-4.css";

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    quote: "They did an amazing work for our home",
    text: "I had the pleasure of working with on a project that required a perfect blend of creativity and functionality. From the initial concept to the final execution, they exceeded my expectations at every turn. Their attention to detail and passion for their work was truly inspiring.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marvin McKinney",
    job: "Businessman",
  },
  {
    id: 2,
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/triet_hoc_la_gi_thumb_e7a65afadb.jpg",
    quote: "Great collaboration and design",
    text: "Working with them was a joy! They understood my needs right away and delivered a design that truly represents my style. Their professionalism is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    job: "Interior Designer",
  },
  {
    id: 3,
    image:
      "https://cdn2.fptshop.com.vn/unsafe/triet_hoc_la_gi_1_10909d3bbb.jpg",
    quote: "Exceeded expectations",
    text: "From start to finish, the process was smooth. The team paid great attention to details and went beyond what I expected. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "James Anderson",
    job: "Architect",
  },
];

const Co4 = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section container py-5">
      <div className="text-center mb-5">
        <small className="text-uppercase text-muted">Testimonial</small>
        <h2 className="fw-bold mt-2">What our clients say about us</h2>
        <p className="text-muted">
          It is a long established fact that a reader will be content distracted
          by the readable content of a page.
        </p>
      </div>

      <div className="row align-items-center">
        {/* Ảnh bên trái */}
        <div className="col-md-6 mb-4 mb-md-0 position-relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonials[index].id}
              src={testimonials[index].image}
              alt="Client project"
              className="img-fluid rounded shadow testimonial-img"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Nội dung bên phải */}
        <div className="col-md-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <blockquote className="testimonial-quote">
                “{testimonials[index].quote}”
              </blockquote>
              <p className="text-muted">{testimonials[index].text}</p>

              <div className="d-flex align-items-center mt-4">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0 fw-bold">{testimonials[index].name}</h6>
                  <small className="text-muted">{testimonials[index].job}</small>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4">
            <button
              className="btn btn-outline-dark rounded-circle me-2"
              onClick={prevTestimonial}
            >
              ←
            </button>
            <button
              className="btn btn-outline-dark rounded-circle"
              onClick={nextTestimonial}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Co4;
