import React, { useEffect, useRef } from "react";
import "./Co-1.css";
import Co1IMG from "/Co1IMG.webp"; 

function Co1() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.2 }; 
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, options);

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="modern-section">
      <div className="container d-flex align-items-center">
        {/* Left - Image */}
        <div ref={leftRef} className="modern-image fade-in-left">
          <img src={Co1IMG} alt="Modern Design" />
        </div>

        {/* Right - Text */}
        <div ref={rightRef} className="modern-text ms-5 fade-in-right">
          <h2 className="section-title">
            I.Khái niệm phép biện chứng duy vật:
          </h2>
          <p className="section-desc">
            Là khoa học về mối liên hệ phổ biến và sự phát triển của sự vật, hiện tượng trong tự nhiên, xã hội và tư duy.
            <br />
            Khác với biện chứng duy tâm, phép biện chứng duy vật khẳng định sự tồn tại khách quan của thế giới vật chất, không phụ thuộc vào ý thức.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Co1;
