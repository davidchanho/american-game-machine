import React from "react";
import { companyName } from "../../context";
import { HeroContainer } from "./styles";
import Image from "next/image";

function Hero() {
  return (
    <HeroContainer>
      <h1>
        {companyName} helps businesses get started, stay well maintained, and{" "}
        <mark>grow</mark>.
      </h1>
      <Image src="/svg/growth.svg" alt='grow your business with American Game Machine' width={350} height={350} />
    </HeroContainer>
  );
}

export default Hero;
