import Image from "next/image";
import React from "react";
import AppearContainer from "../../components/appear-container";
import GetAQuote from "../../components/get-a-quote";
import home from "../../public/img/machines/hero-banner.webp";

function HeroContent() {
  return (
    <div className="w-100 row g-0 d-flex align-items-center">
      <div className="col offset-1">
        <AppearContainer className="text-white ">
          <h1 className="display-4">American Game Machine</h1>
          <p className="h3 mt-2">
            Skill Games & Fish Tables that meet your needs.
          </p>
          <GetAQuote />
        </AppearContainer>
      </div>
      <div className="col">
        <Image src={home} alt="hero banner" placeholder="blur" />
      </div>
    </div>
  );
}

export default HeroContent;
