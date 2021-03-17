import React, { useState } from "react";
import { Card, CardColumns, Form, ListGroup } from "react-bootstrap";
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
    min-width: 25%;
    max-width: 25%;
  }
  body {
    max-width: 75%;
  }
`;

function Catalog() {
  const {
    state: { products },
  } = useAppContext();

  const [filter, setFilter] = useState("");

  const [productsState, setProductsState] = useState([]);

  const onClick = (filter) => {
    setFilter(filter);
  };

  return (
    <Container>
      <ListGroup as="aside">
        <ListGroup.Item>
          <Form>
            <Form.Label>Types</Form.Label>
            <Form.Group>
              <Form.Check
                custom
                inline
                label="machines"
                type="checkbox"
                id="types-1"
                onClick={() => onClick("machines")}
              />
              <Form.Check
                custom
                inline
                label="accessories"
                type="checkbox"
                id="types-2"
                onClick={() => onClick("accessories")}
              />
            </Form.Group>
          </Form>
        </ListGroup.Item>
        <ListGroup.Item>
          <Form>
            <Form.Label>Categories</Form.Label>
            <Form.Group>
              <Form.Check
                custom
                inline
                label="stand ups"
                type="checkbox"
                id="category-1"
                onClick={() => onClick("standups")}
              />
              <Form.Check
                custom
                inline
                label="fish tables"
                type="checkbox"
                id="category-2"
                onClick={() => onClick("fishtables")}
              />
              <Form.Check
                custom
                inline
                label="chairs"
                type="checkbox"
                id="category-3"
                onClick={() => onClick("chairs")}
              />
              <Form.Check
                custom
                inline
                label="desks"
                type="checkbox"
                id="category-4"
                onClick={() => onClick("desks")}
              />
            </Form.Group>
          </Form>
        </ListGroup.Item>
        <ListGroup.Item>asd</ListGroup.Item>
        <ListGroup.Item>asd</ListGroup.Item>
      </ListGroup>
      <CardColumns>
        {products
          .filter((product) => {
            if (filter !== product.category && filter !== product.type) {
              return false;
            }
       
            return true;
          })
          .map((product) => (
            <Card>{product.label}</Card>
          ))}
      </CardColumns>
    </Container>
  );
}

export default Catalog;
