import Image from "next/image";
import React from "react";
import { IProduct } from "../../../types";
import AppearText from "../../shared/appear-text";

function ProductListItem({ name, src }: IProduct) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-alternating g-0">
      <AppearText>
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
      </AppearText>
    </div>
  );
}

export default ProductListItem;
