import React from "react";
import { Card as BsCard } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const Card = styled(BsCard)`
  text-align: center;

  &-title {
    text-transform: capitalize;
    text-decoration: underline;
  }
`;

function Item({ icon, title, description }: Props) {
  return (
    <Card>
      <Card.Img
        src={icon}
        alt={description}
        title="https://storyset.com/"
        aria-hidden={true}
      />
      <Card.Title>{title}</Card.Title>
      <Card.Body>{description}</Card.Body>
    </Card>
  );
}

export default Item;
