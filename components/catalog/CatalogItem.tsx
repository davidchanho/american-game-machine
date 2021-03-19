import React from "react";
import { IProduct } from "../../context";
import { Item } from "./styles";

interface Props {
  product: IProduct;
}

function CatalogItem({ product }: Props) {
  if (!product) {
    return null;
  }

  const { label, image } = product;

  return (
    <Item key={`catalog-product-${label}`}>
      <Item.Img src={image} /> <Item.Title>{label}</Item.Title>
    </Item>
  );
}

export default CatalogItem;
