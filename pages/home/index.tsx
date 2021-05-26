import React from "react";
import Hero from "../../components/home/hero";
import HeroImage from "../../components/home/hero-image";
import Products from "../../components/home/products";
import Services from "../../components/home/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroImage />
      <Products />
      <Services />
    </>
  );
}
