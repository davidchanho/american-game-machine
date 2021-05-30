import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

function Products() {
  return (
    <Row className="w-100">
      <Col md={6} sm={12}>
        <Image
          src="/img/machines/standups.png"
          alt="standups"
          layout="responsive"
          width={620}
          height={820}
        />
      </Col>
      <Col md={6} sm={12}>
        <div>
          <h2>Stand Ups</h2>
          <p>43" Flat Screen</p>
          <p>Metal Cabinet</p>
          <p>Vibrant LED Lights</p>
        </div>
      </Col>
    </Row>
  );
}

export default Products;
