import React from "react";
import SectionTitle from "../../shared/section-title";
import Product from "./Product";
import { IProduct } from "./types";

const products: IProduct[] = [
  {
    id: "product-1",
    name: "Skill Games",
    src: "/img/machines/standups.png",
    details: {
      screen: "43",
      cabinet: "Metal",
      dimensions: 'W23" D20" H82"',
      players: "1",
    },
  },
  // {
  //   id: "product-2",
  //   name: "fishtables",
  //   details: ["68 inch Flat Screen", "Metal Cabinet", "Vibrant LED Lights"],
  // },
];

function Products() {
  return (
    <section className='w-100'>
      <SectionTitle section="products" />
      <div>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
