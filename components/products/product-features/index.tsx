import React from "react";
import { products } from "../../../context";
import Section from "../../shared/section";
import ProductFeatureItem from "./ProductFeatureItem";

function ProductFeatures() {
  return (
    <Section title="products">
      {products.map((product) => (
        <div
          key={product.id}
        >
          <ProductFeatureItem {...product} />
        </div>
      ))}
    </Section>
  );
}

export default ProductFeatures;
