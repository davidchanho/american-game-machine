import React from "react";
import { Card } from "react-bootstrap";
import { AccessoriesItemProps } from "./types";

function AccessoriesItem({ label }: AccessoriesItemProps) {
  return (
    <Card>
      <Card.Img
        src="https://via.placeholder.com/150"
        alt={`image of ${label}`}
      />
    </Card>
  );
}

export default AccessoriesItem;
