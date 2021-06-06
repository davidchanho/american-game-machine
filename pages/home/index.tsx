import React from "react";
import Contact from "../../components/home/contact";
import Hero from "../../components/home/hero";
import Services from "../../components/home/services";
import Products from "../../components/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container px-5">
        <Products />
        <Services />
        <Contact />
      </div>
    </>
  );
}
