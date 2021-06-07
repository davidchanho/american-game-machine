import React from "react";
import Contact from "../../components/home/contact";
import Hero from "../../components/home/hero";
import Services from "../../components/home/services";
import ProductList from "../../components/products/product-list";
import BackToTop from "../../components/shared/back-to-top";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container px-1">
        <BackToTop />
        <ProductList />
        <Services />
        <Contact />
      </div>
    </>
  );
}
