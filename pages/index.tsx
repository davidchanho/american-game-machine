import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components//hero";
import Services from "../components//services";
import Products from "../components/products";

export default function Home() {
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
