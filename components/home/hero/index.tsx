import React from "react";
import Navbar from "../../shared/navbar";
import Header from "./Header";
import HeroImg from "./HeroImg";

function Hero() {
  return (
    <section className="w-100 mh-100 text-white bg-dark">
      <Navbar className="position-relative" />

      <div className="container me-0 mh-100 ">
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex align-items-center h-100">
          <div className="col mh-100">
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
