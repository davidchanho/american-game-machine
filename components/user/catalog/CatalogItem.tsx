import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { IProduct } from "../../../context";

const Item = styled(Card)`
  width: 300px;
  height: 450px;
  border: 1px solid #ccc;

  .card-img {
    width: 100%;
    height: auto;
    max-height: 400px;
  }
`;

function CatalogItem({ label, image }: IProduct) {
  return (
    <Item key={`catalog-product-${label}`}>
      <Item.Img src={image} /> <Item.Title>{label}</Item.Title>
    </Item>
  );
}

export default CatalogItem;
