import { useAppContext } from "../../context/context";
import ProductItem from "./ProductItem";

function Products() {

    const {
      state: {products},
    } = useAppContext();

  return (
    <>
      {products.map((product) => (
        <ProductItem key={`product-item-${product.label}`} {...product} />
      ))}
    </>
  );
}

export default Products;
