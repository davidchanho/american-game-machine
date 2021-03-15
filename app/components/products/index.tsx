import React from "react";
import { useAppContext } from "../../context";
import ProductItem from "./Item";

function Product() {
  const { products } = useAppContext();

  return (
    <section>
      {products.map((product) => (
        <ProductItem key={`product-item-${product.label}`} {...product} />
      ))}
    </section>
  );
}

export default Product;
