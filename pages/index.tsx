import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components//hero";
import Services from "../components//services";
import Products from "../components/products";
import Layout from "../components/_shared/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Container>
        <Products />
        <Services />
      </Container>
    </Layout>
  );
}
