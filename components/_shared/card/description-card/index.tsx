import React from "react";
import { Card, CardProps, ImageProps } from "react-bootstrap";
import styled from "styled-components";

interface Props extends CardProps, ImageProps {
  description: string;
}

const Container = styled(Card)`
  text-align: center;
  padding: 15px;

  .card-title {
    text-transform: capitalize;
    text-decoration: underline;
    margin-top: 5px;
  }

  .card-body {
    padding: 0;
    height: 120px;
  }
`;

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
