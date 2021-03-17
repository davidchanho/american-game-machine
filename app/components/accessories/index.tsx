import React from "react";
import { useAppContext } from "../../context";
import Section from "../_shared/section";
import Item from "./Item";

function Accessories() {
  const { accessories } = useAppContext();

  return (
    <Section label="Accessories">
      {accessories.map((a) => {
        return <Item key={`accessories-${a.id}`} {...a} />;
      })}
    </Section>
  );
}

export default Accessories;
