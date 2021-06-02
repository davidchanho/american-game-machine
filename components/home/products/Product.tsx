import React from "react";
import { Card } from "react-bootstrap";
import SectionTitle from "../../shared/section-title";
import { ProductContainer } from "./styles";
import { ProductProps } from "./types";

function Product({ name, details }: ProductProps) {
  return (
    <ProductContainer>
      <Card.Img src={`/img/machines/${name}.png`} />
      <Card.Body>
        <SectionTitle section={name} />
        {details.map((detail, index) => (
          <Card.Text key={`${name}-${index}`}>{detail}</Card.Text>
        ))}
      </Card.Body>
    </ProductContainer>
  );
}

export default Product;
