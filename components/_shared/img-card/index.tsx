import Image from "next/image";
import React from "react";
import { Container } from "./styles";

function ImgCard({ src, alt }) {
  return (
    <Container>
      <Image src={src} alt={alt} width={300} height={300} />
    </Container>
  );
}

export default ImgCard;
