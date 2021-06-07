import React from "react";
import { products } from "../../../context";
import Section from "../../shared/section";
import ProductListItem from "./ProductItem";

function ProductList() {
  return (
    <Section title="products">
      <div className="w-100">
        {products.map((product) => (
          <ProductListItem key={product.id} {...product} />
        ))}
      </div>
    </Section>
  );
}

export default ProductList;
