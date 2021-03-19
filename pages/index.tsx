import React from "react";
import Hero from "../components//hero";
import Layout from "../components//layout";
import Services from "../components//services";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
}
