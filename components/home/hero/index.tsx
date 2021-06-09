import React from "react";
import Navbar from "../../shared/navbar";
import Header from "./Header";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <section className="hero w-100 text-white bg-dark">
      <Navbar />
      <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center h-100">
        <div className="col">
          <Header />
        </div>
        <div className="col">
          <HeroImg />
        </div>
      </div>
    </section>
  );
}

export default Hero;
