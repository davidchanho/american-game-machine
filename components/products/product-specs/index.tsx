import React from "react";
import { IProduct } from "../../../types";

function ProductSpecs({
  details: { screen, cabinet, dimensions, players, weight, voltage },
}: IProduct) {
  return (
    <div>
      <p>
        <b>Screen:</b> {screen}
      </p>
      <p>
        <b>Cabinet:</b> {cabinet}
      </p>
      <p>
        <b>Dimensions:</b> {dimensions}
      </p>
      <p>
        <b>Players:</b> {players}
      </p>
      <p>
        <b>Weight:</b> {weight}
      </p>
      <p>
        <b>Voltage:</b> {voltage}
      </p>
    </div>
  );
}

export default ProductSpecs;
