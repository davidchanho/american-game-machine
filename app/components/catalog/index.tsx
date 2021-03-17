import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { useAppContext } from "../../context";

const Container = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;
  aside,
  body {
    height: 90vh;
    padding: 10px 20px;
    border: 1px solid black;
  }

  aside {
    width: 25%;
  }
  body {
    width: 75%;
  }
`;

function Catalog() {
  const {
    state: { products },
  } = useAppContext();

  return (
    <Container>
      <aside>
        <ListGroup>
          <ListGroup.Item>asd</ListGroup.Item>
          <ListGroup.Item>asd</ListGroup.Item>
          <ListGroup.Item>asd</ListGroup.Item>
          <ListGroup.Item>asd</ListGroup.Item>
        </ListGroup>
      </aside>
      <body>
        {products.map((product) => (
          <Card>{product.label}</Card>
        ))}
      </body>
    </Container>
  );
}

export default Catalog;
