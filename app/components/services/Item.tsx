import React from "react";
import { Card } from "react-bootstrap";
import { IService } from "./types";
import { Body, ItemContainer, Title } from "./styles";

function Item({ icon, title, description }: IService) {
  return (
    <ItemContainer>
      <Card.Img
        src={icon}
        alt={description}
        title="https://storyset.com/"
        aria-hidden={true}
      />
      <Title>{title}</Title>
      <Body>{description}</Body>
    </ItemContainer>
  );
}

export default Item;
