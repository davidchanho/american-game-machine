import React from "react";
import { Col, Row } from "react-bootstrap";
import OpacityContainer from "../../shared/opacity-container";

function Products() {
  return (
    <Row className="w-100">
      <Col md={4} sm={12}>
        <OpacityContainer>
          <h2>Stand Ups</h2>
          <p>43" flat screen</p>
          <p>Metal Cabinet</p>
        </OpacityContainer>
      </Col>
      <Col md={4} sm={12}>
        <OpacityContainer>
          <h2>Fish Tables</h2>
          <p>Skill Games</p>
          <p>63" & 85" screens</p>
        </OpacityContainer>
      </Col>
      <Col md={4} sm={12}>
        <OpacityContainer>
          <h2>Accessories</h2>
          <p>Chairs</p>
          <p>Desks</p>
        </OpacityContainer>
      </Col>
    </Row>
  );
}

export default Products;
