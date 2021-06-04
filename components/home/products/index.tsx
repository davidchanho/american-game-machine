import React from "react";
import { Col, Row } from "react-bootstrap";
import { products } from "../../../context";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import Product from "./Product";

function Products() {
  return (
    <Section>
      <SectionTitle section="products" />
      <Row xs={1} md={3}>
        {products.map((product) => (
          <Col>
            <Product key={product.id} {...product} />
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default Products;
