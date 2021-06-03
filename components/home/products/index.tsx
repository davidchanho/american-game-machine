import React from "react";
import { Row } from "react-bootstrap";
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
  {
    id: "product-2",
    name: "fishtables",
    src: "/img/machines/standups.png",
    details: {
      screen: "43",
      cabinet: "Metal",
      dimensions: 'W23" D20" H82"',
      players: "1",
    },
  },
];

function Products() {
  return (
    <section>
      <SectionTitle section="products" />
      <Row xs={1} md={2} lg={3}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </section>
  );
}

export default Products;
