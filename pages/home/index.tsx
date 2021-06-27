import React from "react";
import Contact from "../../components/home/contact";
import Services from "../../components/home/solutions";
import ProductList from "../../components/products/product-list";
import BackToTop from "../../components/shared/back-to-top";

export default function HomePage() {
  return (
    <>
      {/* <BackToTop /> */}
      <ProductList />
      <Services />
      <Contact />
    </>
  );
}
