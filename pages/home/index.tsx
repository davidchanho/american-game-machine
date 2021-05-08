import React from "react";
import { Container } from "react-bootstrap";
import Hero from "./components/hero";
import Products from "./components/products";
import Services from "./components/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <Products />
        <Services />
      </Container>
    </>
  );
}
