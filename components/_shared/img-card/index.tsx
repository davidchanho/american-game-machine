import React from "react";
import { Container } from "./styles";

function ImgCard({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} width={600} height={600} />
    </Container>
  );
}

export default ImgCard;
