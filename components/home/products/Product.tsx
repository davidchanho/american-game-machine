import React from "react";
import { Col, ListGroup } from "react-bootstrap";
import { IProduct } from "./types";

function Product({
  name,
  src,
  details: { screen, cabinet, dimensions, players },
}: IProduct) {
  return (
    <>
      <Col md={6} sm={12}>
        <img className="w-100" src={src} width={420} height={360} />
      </Col>
      <Col md={6} sm={12}>
        <h2>{name}</h2>
        <ListGroup>
          <ListGroup.Item>
            <h5>Screen</h5>
            <p>{screen}"</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Cabinet</h5>
            <p>{cabinet}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Dimensions</h5>
            <p>{dimensions}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Players</h5>
            <p>{players}</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
}

export default Product;
