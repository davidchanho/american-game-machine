import React from "react";
import OpacityContainer from "../../shared/opacity-container";
import { companyName } from "../../../context";

function Hero() {
  return (
    <OpacityContainer>
      <h1>{companyName}</h1>
    </OpacityContainer>
  );
}

export default Hero;
  