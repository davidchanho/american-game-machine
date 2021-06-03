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
      <Col>
        <img className="w-100" src={src} width={420} height={360} />
      </Col>
      <Col>
        <h2>{name}</h2>
        <ListGroup>
          <ListGroup.Item>
            <h3>Screen</h3>
            <p>{screen}"</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Cabinet</h3>
            <p>{cabinet}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Dimensions</h3>
            <p>{dimensions}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h3>Players</h3>
            <p>{players}</p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
}

export default Product;
