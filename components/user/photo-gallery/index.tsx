import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  lazyLoad: true,
};

interface Props {
  width: number;
}

const Gallery = styled(Slider)<Props>`
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

function PhotoGallery() {
  return (
    <Gallery
      width={360}
    >
      <img src="/img/fullMachineLiteUp.jpg" alt="First slide" />
      <img src="/img/bottomMachineLiteUp.jpg" alt="Second slide" />
      <img src="/img/logoOnMachines.jpg" alt="Third slide" />
      <img src="/img/machinesAssembly.jpg" alt="Fourth slide" />
    </Gallery>
  );
}

export default PhotoGallery;
