import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const Body = styled(Card.Body)`
  text-align: center;
`;

const Title = styled(Card.Title)`
  text-align: center;
  text-transform: capitalize;
  text-decoration: underline;
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
      <Title>{title}</Title>
      <Body>{description}</Body>
    </Card>
  );
}

export default Item;
