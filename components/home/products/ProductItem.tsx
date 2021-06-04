import React from "react";
import { IProduct } from "../../../types";
import Image from "next/image";

function ProductItem({ name, src }: IProduct) {
  return (
    <div className="card w-100 h-100 mb-5">
      <Image
        className="w-100 h-100"
        src={src}
        alt={name}
        width={360}
        height={360}
      />
      <div className='card-body'>
        <div className='card-title'>{name}</div>
      </div>
    </div>
  );
}

export default ProductItem;
