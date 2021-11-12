import React from "react";
import Navbar from "../navbar";
import HeroContent from "./HeroContent";
import ScrollDown from "./ScrollDown";

function Hero() {
  return (
    <section className="w-100 max-h-100 bg-dark flex align-items-end flex-column">
      <Navbar />

      <HeroContent />

      <ScrollDown />
    </section>
  );
}

export default Hero;
