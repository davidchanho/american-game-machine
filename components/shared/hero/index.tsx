import React from "react";
import Navbar from "../navbar";
import HeroContent from "./HeroContent";
import ScrollDown from "./ScrollDown";

function Hero() {
  return (
    <section className="hero text-white bg-dark">
      <Navbar />

      <HeroContent />

      <ScrollDown />
    </section>
  );
}

export default Hero;
