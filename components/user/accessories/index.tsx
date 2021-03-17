import React from "react";
import { filterProducts, IAccessories } from "../../../context";
import Section from "../../shared/section";
import AccessoriesItem from "./AccessoriesItem";

function Accessories() {
  const accessories = filterProducts("type", IAccessories);

  return (
    <Section label="Accessories">
      {accessories.map((a) => {
        return <AccessoriesItem key={`accessories-${a.id}`} {...a} />;
      })}
    </Section>
  );
}

export default Accessories;
