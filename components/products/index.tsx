import React from "react";
import { products } from "../../context";
import Section from "../shared/section";
import SectionTitle from "../shared/section-title";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <Section>
      <SectionTitle section="products" />
      {products.map((product) => (
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-alternating g-0"
          key={product.id}
        >
          <ProductItem {...product} />
        </div>
      ))}
    </Section>
  );
}

export default Products;
