import _ from "lodash";
import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { IProduct, useAppContext } from "../../../context";
import CatalogItem from "./CatalogItem";

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

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

function Catalog() {
  const {
    state: { products },
  } = useAppContext();

  const [filter, setFilter] = useState("");

  const onClick = (filter) => {
    setFilter(filter);
  };

  const types: IProduct[] = _.uniq(products.map((product) => product["type"]));
  const categories: IProduct[] = _.uniq(
    products.map((product) => product["category"])
  );

  return (
    <Container>
      <ListGroup as="aside">
        <ListGroup.Item>
          <Form>
            <Form.Label>Types</Form.Label>
            <Form.Group>
              {types.map((type) => (
                <Form.Check
                  custom
                  inline
                  label={type}
                  type="checkbox"
                  id={`types-${type}`}
                  key={`types-${type}`}
                  onClick={() => onClick(type)}
                />
              ))}
            </Form.Group>
          </Form>
        </ListGroup.Item>
        <ListGroup.Item>
          <Form>
            <Form.Label>Categories</Form.Label>
            <Form.Group>
              {categories.map((category) => (
                <Form.Check
                  custom
                  inline
                  label={category}
                  type="checkbox"
                  id={`category-${category}`}
                  key={`category-${category}`}
                  onClick={() => onClick(category)}
                />
              ))}
            </Form.Group>
          </Form>
        </ListGroup.Item>
      </ListGroup>
      <Grid>
        {products
          .filter((product) => {
            if (!filter) {
              return true;
            }
            if (filter !== product.category && filter !== product.type) {
              return false;
            }
            return true;
          })
          .map((product) => (
            <CatalogItem {...product} />
          ))}
      </Grid>
    </Container>
  );
}

export default Catalog;
