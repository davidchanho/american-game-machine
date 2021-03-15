import React from "react";
import { Card } from "react-bootstrap";
import { Props } from "./types";

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
