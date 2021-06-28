import React from "react";
import About from "../../components/home/about";
import ProductList from "../../components/home/category";
import Contact from "../../components/home/contact";
import Services from "../../components/home/solutions";

export default function HomePage() {
  return (
    <>
      {/* <BackToTop /> */}
      <About />
      <ProductList />
      <Services />
      <Contact />
    </>
  );
}
