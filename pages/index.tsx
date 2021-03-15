import Accessories from "../app/components/accessories";
import Product from "../app/components/products";
import Services from "../app/components/services";
import MainLayout from "../app/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Product />
      <Accessories />
      <Services />
    </MainLayout>
  );
}
