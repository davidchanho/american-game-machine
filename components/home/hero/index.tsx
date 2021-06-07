import React from "react";
import Navbar from "../../shared/navbar";
import Header from "./Header";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <section className="w-100 mh-100 text-white bg-dark z-index-10">
      <Navbar className="position-relative" />

      <div>
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center h-100">
          <div className="col">
            <Header />
          </div>
          <div className="col">
            <HeroImg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
