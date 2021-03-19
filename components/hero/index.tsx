import React from "react";
import { companyName } from "../../context";
import { HeroContainer } from "./styles";

function Hero() {
  return (
    <HeroContainer>
      <h3>
        <span>{companyName}</span> helps businesses get started, stay well
        maintained, and <mark>grow</mark>.
      </h3>
      <img src="/svg/growth.svg" />
    </HeroContainer>
  );
}

export default Hero;
