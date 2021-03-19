import React from "react";
import { IProduct } from "../../context";

function ProductItem({ image }: IProduct) {
  return (
    <div>
      <img src={image} />
    </div>
  );
}

export default ProductItem;
