import React from "react";
import OpacityContainer from "../../shared/opacity-container";
import { Props } from "./types";

function ServicesItem({ title, description }: Props) {
  return (
    <OpacityContainer> 
      <h1>{title}</h1>
      <p>{description}</p>
    </OpacityContainer>
  );
}

export default ServicesItem;
