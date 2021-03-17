import { useAppContext } from "../../context/context";
import ProductItem from "./ProductItem";

function ProductsList() {
  const {
    state: { products },
  } = useAppContext();

  const machines = products.filter((product) => product.type === "machine");

  return (
    <>
      {machines.map((product) => (
        <ProductItem key={`product-item-${product.label}`} {...product} />
      ))}
    </>
  );
}

export default ProductsList;
