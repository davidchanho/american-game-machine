import React from "react";
import RSlider from "react-slick";
import styled from "styled-components";

interface Props {
  width: number;
}

const Slider = styled(RSlider)<Props>`
  width: 75%;
  margin: 0 auto;
  background-color: lightgrey;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: auto;
      width: auto;
      max-width: ${(props) => `${props.width}px`};
      max-height: ${(props) => `${props.width * 1.5}px`};
    }
  }

  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
`;

function PhotoSlider() {
  return (
    <Slider
      width={360}
    >
      <img src="/img/fullMachineLiteUp.jpg" alt="First slide" />
      <img src="/img/bottomMachineLiteUp.jpg" alt="Second slide" />
      <img src="/img/logoOnMachines.jpg" alt="Third slide" />
      <img src="/img/machinesAssembly.jpg" alt="Fourth slide" />
    </Slider>
  );
}

export default PhotoSlider;
