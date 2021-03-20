import React from "react";
import { Container } from "./styles";
import InnerImageZoom from "react-inner-image-zoom";

function ImgCard({ src, alt }) {
  return (
    <Container>
      <InnerImageZoom
        src={src}
        zoomSrc={src}
        alt={alt}
        width={300}
        height={300}
        zoomScale={1}
      />
    </Container>
  );
}

export default ImgCard;
