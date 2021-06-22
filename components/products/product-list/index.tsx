import React from "react";
import { products } from "../../../context";
import Section from "../../shared/section";
import ProductListItem from "./ProductListItem";

function ProductList() {
  return (
    <Section title="products">
      <div className="container">
        <div className="mx-5 row row-cols-1 row-cols-md-3">
          {products.map((product) => (
            <ProductListItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProductList;
