import RSlider from "react-slick";
import styled from "styled-components";

interface Props {
  width: number;
}

export const Slider = styled(RSlider)<Props>`
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
      max-width: ${({ width }) => `${width}px`};
      max-height: ${({ width }) => `${width * 1.5}px`};
      display: block;
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
