import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/Hero-Section/Hero-Section";
import Co1 from "../components/Co-1/Co-1";
import Co2 from "../components/Co-2/Co-2";
import Co5 from "../components/Co-5/Co-5";
import Co6 from "../components/Co-6/Co-6";
import FallingLeavesFlowers from "../components/FallingLeaves/FallingLeavesFlowers";
import PracticalDiscussion from "../components/PracticalDiscussion/PracticalDiscussion";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#services-list") {
      const section = document.getElementById("services-list");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <FallingLeavesFlowers  />
      <HeroSection />
      <Co1 />
      <Co6 />
      <Co5 />
      <Co2 />
      <PracticalDiscussion />
    </>
  );
}

export default HomePage;
