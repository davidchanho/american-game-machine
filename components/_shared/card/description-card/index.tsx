import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "./styles";
import { Props } from "./types";

function DescriptionCard({ src, alt, title, description }: Props) {
  return (
    <Container>
      <Card.Img src={src} alt={alt} title={title} aria-hidden={true} />
      <Card.Title>{title}</Card.Title>
      <Card.Body>{description}</Card.Body>
    </Container>
  );
}

export default DescriptionCard;
