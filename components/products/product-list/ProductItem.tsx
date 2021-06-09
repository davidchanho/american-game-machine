import Image from "next/image";
import React from "react";
import { IProduct } from "../../../types";

function ProductListItem({ name, src }: IProduct) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-alternating g-0">
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
    </div>
  );
}

export default ProductListItem;
