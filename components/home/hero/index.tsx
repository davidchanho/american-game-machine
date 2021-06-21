import React from "react";
import Navbar from "../../shared/navbar";
import Header from "./Header";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <section className="hero text-white bg-dark">
      <Navbar />

      <div className="w-100 row row-cols-1 row-cols-md-2 g-0 d-flex align-items-center">
        <div className="col">
          <Header />
        </div>
        <div className="col d-flex justify-content-end">
          <HeroImg />
        </div>
      </div>
    </section>
  );
}

export default Hero;
