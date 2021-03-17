import React from "react";
import Layout from "../components/shared/layout";
import Accessories from "../components/user/accessories";
import Hero from "../components/user/hero";
import Services from "../components/user/services";
import Products from "./products";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Products />
      <Accessories />
      <Services />
    </Layout>
  );
}
