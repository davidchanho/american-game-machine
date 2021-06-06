import Image from "next/image";
import React from "react";
import { IProduct } from "../../types";

function ProductItem({ name, src }: IProduct) {
  return (
    <>
      <div className="col">{name}</div>
      <div className="col">
        <Image
          className="w-100"
          src={src}
          alt={name}
          width={420}
          height={360}
        />
      </div>
    </>
  );
}

export default ProductItem;
