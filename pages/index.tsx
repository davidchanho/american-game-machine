import Accessories from "../app/components/accessories";
import Hero from "../app/components/hero";
import Product from "../app/components/products";
import Services from "../app/components/services";
import Layout from "../app/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Product />
      <Accessories />
      <Services />
    </Layout>
  );
}
