import React from "react";
import Product from "./Product";

const products = [
  {
    id: "product-1",
    name: "standups",
    details: ["43 inch Flat Screen", "Metal Cabinet", "Vibrant LED Lights"],
  },
  {
    id: "product-2",
    name: "fishtables",
    details: ["68 inch Flat Screen", "Metal Cabinet", "Vibrant LED Lights"],
  },
];

function Products() {
  return (
    <>
      {products.map(({ id, name, details }) => (
        <Product key={id} name={name} details={details} />
      ))}
    </>
  );
}

export default Products;
