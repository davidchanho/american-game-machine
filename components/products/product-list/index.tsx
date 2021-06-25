import React from "react";
import { products } from "../../../context";
import Section from "../../shared/section";
import ProductListItem from "./ProductListItem";

function ProductList() {
  return (
    <Section title="products">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => (
          <ProductListItem
            key={product.id}
            {...product}
            delay={index * 0.2 + 0.2}
          />
        ))}
      </div>
    </Section>
  );
}

export default ProductList;
