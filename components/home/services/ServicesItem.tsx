import React from "react";
import { Card } from "react-bootstrap";
import { IService } from "./types";

function ServicesItem({ Icon, title, description }: IService) {
  return (
    <Card className="p-4 text-center d-flex align-items-center justify-content-center shadow-sm">
      <Card.Header>
        <Icon className="mb-3" size={48} />
        <h2 className="mb-3">{title}</h2>
      </Card.Header>
      <Card.Body className="px-4">{description}</Card.Body>
    </Card>
  );
}

export default ServicesItem;
