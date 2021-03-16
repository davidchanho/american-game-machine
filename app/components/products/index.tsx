import { useAppContext } from "../../context";
import ProductItem from "./Item";

function Products() {
  const { products } = useAppContext();

  return (
    <>
      {products.map((product) => (
        <ProductItem key={`product-item-${product.label}`} {...product} />
      ))}
    </>
  );
}

export default Products;
