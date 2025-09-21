import React from "react";
import "./Hero-Section.css";
import heroImg from "/HeroSection.png";

function HeroSection() {
  return (
    <section className="hero-split d-flex">
      {/* Left */}
      <div className="hero-left d-flex flex-column justify-content-center align-items-center text-white p-5">
        <div className="text">
          <h1 className="display-3 ms-5 fw-bold">
            Quy luật cơ bản của phép biện chứng duy vật.
          </h1>
        </div>
      </div>

      {/* Right */}
      <div
        className="hero-right"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
    </section>
  );
}

export default HeroSection;
