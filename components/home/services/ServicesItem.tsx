import React from "react";
import { Card } from "react-bootstrap";
import { Props } from "./types";

function ServicesItem({ title, description }: Props) {
  return (
    <Card className="p-3 text-center d-flex align-items-center justify-content-center">
      <Card.Header>
        <h2>{title}</h2>
      </Card.Header>
      <Card.Body>{description}</Card.Body>
    </Card>
  );
}

export default ServicesItem;
