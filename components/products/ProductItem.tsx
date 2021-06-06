import Image from "next/image";
import React from "react";
import { IProduct } from "../../types";

function ProductItem({
  name,
  src,
  details: { screen, cabinet, dimensions, players, weight, voltage },
}: IProduct) {
  return (
    <>
      <div className="col p-3">
        <h3 className='mb-3'>{name} Specs</h3>
        <p>Screen: {screen}</p>
        <p>Cabinet: {cabinet}</p>
        <p>Dimensions: {dimensions}</p>
        <p>Players: {players}</p>
        <p>Weight: {weight}</p>
        <p>Voltage: {voltage}</p>
      </div>
      <div className="col bg-dark">
        <Image
          src={src}
          alt={name}
          layout="responsive"
          width={420}
          height={360}
        />
      </div>
    </>
  );
}

export default ProductItem;
