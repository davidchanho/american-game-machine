import Image from "next/image";
import React from "react";
import { IProduct } from "../../../types";

function ProductFeatureItem({ name, src }: IProduct) {
  return (
    <>
      <div className="col p-3 d-flex align-items-center justify-content-center">
        <h2>{name}</h2>
      </div>
      <div className="col bg-dark">
        <Image
          src={src}
          alt={name}
          layout="responsive"
          width={420}
          height={240}
        />
      </div>
    </>
  );
}

export default ProductFeatureItem;
