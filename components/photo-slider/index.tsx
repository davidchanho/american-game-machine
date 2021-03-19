import React from "react";
import { Slider } from "./styles";

function PhotoSlider() {
  return (
    <Slider width={360}>
      <img src="/img/fullMachineLiteUp.jpg" alt="First slide" />
      <img src="/img/bottomMachineLiteUp.jpg" alt="Second slide" />
      <img src="/img/logoOnMachines.jpg" alt="Third slide" />
      <img src="/img/machinesAssembly.jpg" alt="Fourth slide" />
    </Slider>
  );
}

export default PhotoSlider;
