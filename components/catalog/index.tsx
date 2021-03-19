import React from "react";
import { ListGroup } from "react-bootstrap";
import CatalogFilter from "./CatalogFilter";
import CatalogItem from "./CatalogItem";
import { Container, Grid } from "./styles";
import useCatalog from "./useCatalog";

function Catalog() {
  const { onClick, filteredProducts } = useCatalog();
  
  return (
    <Container>
      <ListGroup as="aside">
        <CatalogFilter catalogKey="type" handleClick={onClick} />
        <CatalogFilter catalogKey="category" handleClick={onClick} />
      </ListGroup>
      <Grid>
        {filteredProducts.map((product) => (
          <CatalogItem key={`catalog-items-${product.id}`} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default Catalog;
