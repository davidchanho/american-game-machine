import React from "react";
import Hero from "../components//hero";
import Layout from "../components//layout";
import Services from "../components//services";
import Accessories from "../components/accessories";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Accessories />
      <Services />
    </Layout>
  );
}
