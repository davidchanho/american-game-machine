import React from "react";
import { products } from "../../../context";
import Section from "../../shared/section";
import ProductListItem from "../product-list/ProductListItem";

function ProductFeatures() {
  return (
    <Section title="products">
      {products.map((product) => (
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-alternating g-0"
          key={product.id}
        >
          <ProductListItem {...product} />
        </div>
      ))}
    </Section>
  );
}

export default ProductFeatures;
