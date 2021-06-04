import React from "react";
import { Card } from "react-bootstrap";
import { IProduct } from "../../../types";

function Product({ name, src }: IProduct) {
  return (
    <Card>
      <Card.Img
        className="w-100 h-100"
        src={src}
        alt={name}
        width={420}
        height={420}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Product;
