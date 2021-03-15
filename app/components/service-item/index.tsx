import React from "react";
import { Card } from "react-bootstrap";
import { IService } from "../../types";
import Body from "./Body";
import Container from "./Container";
import Title from "./Title";

function ServiceItem({ icon, title, description }: IService) {
  return (
    <Container>
      <Card.Img
        src={icon}
        alt={description}
        title="https://storyset.com/"
        aria-hidden={true}
      />
      <Title>{title}</Title>
      <Body>{description}</Body>
    </Container>
  );
}

export default ServiceItem;
