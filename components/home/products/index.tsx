import React from "react";
import { Row } from "react-bootstrap";
import { products } from "../../../context";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import Product from "./Product";

function Products() {
  return (
    <Section>
      <SectionTitle section="products" />
      <Row>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </Section>
  );
}

export default Products;
