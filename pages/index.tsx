import Accessories from "../components/user/accessories";
import Hero from "../components/user/hero";
import Products from "../components/products-list";
import Services from "../components/services";
import Layout from "../components/layout";

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
