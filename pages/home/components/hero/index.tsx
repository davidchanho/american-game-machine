import Image from "next/image";
import React from "react";
import { companyName } from "../../../../context";
import { HeroContainer } from "./styles";

function Hero() {
  return (
    <HeroContainer>
      <h1>
        <span>{companyName}</span> helps businesses get started, stay well
        maintained, and grow.
      </h1>
      <Image
        src="/svg/growth.svg"
        alt="grow your business with American Game Machine"
        width={350}
        height={350}
      />
    </HeroContainer>
  );
}

export default Hero;
