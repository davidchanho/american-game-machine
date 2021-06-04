import React from "react";
import { products } from "../../../context";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <Section>
      <SectionTitle section="products" />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {products.map((product) => (
          <div className='col'>
            <ProductItem key={product.id} {...product} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Products;
