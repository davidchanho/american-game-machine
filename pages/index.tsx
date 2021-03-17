import Accessories from "../app/components/accessories";
import Hero from "../app/components/hero";
import Products from "../app/components/products-list";
import Services from "../app/components/services";
import Layout from "../app/layout";

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
