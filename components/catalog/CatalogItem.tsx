import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { IProduct } from "../../context";

const Item = styled(Card)`
  width: auto;
  height: 300px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .card-img {
    width: 100%;
    height: auto;
    max-height: 250px;
  }
  .card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface Props {
  product: IProduct;
}

function CatalogItem({ product }: Props) {
  return (
    <Item key={`catalog-product-${product?.label}`}>
      <Item.Img src={product?.image} />{" "}
      <Item.Title>{product?.label}</Item.Title>
    </Item>
  );
}

export default CatalogItem;
