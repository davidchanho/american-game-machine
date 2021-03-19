import React from "react";
import { filterProducts, IMachines } from "../../context";
import ImgCard from "../_shared/card/img-card";

function Products() {
  const machines = filterProducts("type", IMachines);

  return (
    <div>
      {machines.map((product) => {
        return <ImgCard key={`product-item-${product.label}`} {...product} />;
      })}
    </div>
  );
}

export default Products;
