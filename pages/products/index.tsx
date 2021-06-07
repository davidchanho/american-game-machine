import React from "react";
import ProductList from "../../components/products/product-list";
import Navbar from "../../components/shared/navbar";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
}

export default ProductPage;
