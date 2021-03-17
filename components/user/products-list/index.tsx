import { filterProducts, IMachines } from "../../../context";
import ProductItem from "./ProductItem";

function ProductsList() {
  const machines = filterProducts("type", IMachines);

  return (
    <>
      {machines.map((product) => {
        return (
          <ProductItem key={`product-item-${product.label}`} {...product} />
        );
      })}
    </>
  );
}

export default ProductsList;
