import React from "react";
import { ImageProps } from "react-bootstrap";
import Card from "..";
import { Container } from "./styles";

function ImgCard({ ...props }: ImageProps) {
  return (
    <Container>
      <Card.Img {...props} />
    </Container>
  );
}

export default ImgCard;
