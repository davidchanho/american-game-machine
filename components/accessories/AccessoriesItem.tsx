import React from "react";
import { IProduct } from "../../context";
import { Card } from "./styles";

function AccessoriesItem({ label, image }: IProduct) {
  return (
    <Card>
      <img src={image} alt={`image of ${label}`} />
    </Card>
  );
}

export default AccessoriesItem;
