import React from "react";
import { filterProducts, IAccessories } from "../../context";
import Section from "../_shared/section";
import ImgCard from "../_shared/card/img-card";

function Accessories() {
  const accessories = filterProducts("type", IAccessories);

  return (
    <Section label="Accessories">
      {accessories.map((a) => {
        return <ImgCard key={`accessories-${a.id}`} src={a.image} />;
      })}
    </Section>
  );
}

export default Accessories;
