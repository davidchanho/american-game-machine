import { useRouter } from "next/router";
import React from "react";
import AppearContainer from "../appear-container";
import GetAQuote from "../get-a-quote";
import { ArrowDownIcon } from "../icons";
import Navbar from "../navbar";
import HeroImg from "./HeroImg";

function Hero() {
  const router = useRouter();

  const renderHome = () => {
    return (
      <div className="w-100 row row-cols-1 row-cols-md-2 g-0 d-flex align-items-center">
        <div className="col">
          <AppearContainer className="header w-75 center-mobile">
            <h1 className="hero-title">
              Machines and business solutions that meet your needs.
            </h1>
            <GetAQuote />
          </AppearContainer>
        </div>
        <div className="col d-flex justify-content-end">
          <HeroImg />
        </div>
      </div>
    );
  };

  const renderProduct = () => {
    return (
      <div className="w-100 row row-cols-1 row-cols-md-2 g-0 d-flex align-items-center">
        <div className="col">
          <AppearContainer className="header w-75 center-mobile">
            <h1 className="hero-title">
              Stand ups
            </h1>
            <GetAQuote />
          </AppearContainer>
        </div>
        <div className="col d-flex justify-content-end">
          <HeroImg />
        </div>
      </div>
    );
  };

  return (
    <section className="hero text-white bg-dark">
      <Navbar />

      {router.pathname === "/" ? renderHome() : renderProduct()}

      <a
        className="position-absolute bottom-0 start-50 translate-middle-x mb-3 pointer text-white"
        href="/#products"
        aria-label="scroll down"
      >
        <ArrowDownIcon />
      </a>
    </section>
  );
}

export default Hero;
