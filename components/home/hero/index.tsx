import Image from "next/image";
import React from "react";
import Navbar from "../../shared/navbar";

function Hero() {
  return (
    <section className="w-100 text-white bg-dark">
      <Navbar />
      <div className="container me-0">
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex align-items-center">
          <div className="col">
            <header className="text-left w-75">
              <h1 className="mb-3">
                Machines and business solutions that meet your needs.
              </h1>
              <a
                href="/#contact"
                className="btn btn-light bg-lg mobile-full"
                role="button"
              >
                Contact Us
              </a>
            </header>
          </div>
          <div className="col">
            <Image
              className="w-100"
              src="/img/machines/hero-banner.png"
              alt="hero banner"
              layout="responsive"
              sizes="(max-width: 600px) 180px,
            360px"
              width={180}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
