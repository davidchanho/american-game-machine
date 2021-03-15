import React from "react";
import { Card } from "react-bootstrap";

interface Props {
  label: string;
}

function Item({ label }: Props) {
  return (
    <Card>
      <Card.Img
        src="https://via.placeholder.com/150"
        alt={`image of ${label}`}
      />
    </Card>
  );
}

export default Item;
