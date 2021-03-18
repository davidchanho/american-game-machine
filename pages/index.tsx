import React from "react";
import Layout from "../components/user/layout";
import Accessories from "../components/user/accessories";
import Hero from "../components/user/hero";
import ProductsList from "../components/user/products-list";
import Services from "../components/user/services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProductsList />
      <Accessories />
      <Services />
    </Layout>
  );
}
