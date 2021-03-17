import React from "react";
import { useAppContext } from "../../context/context";
import Section from "../_shared/section";
import AccessoriesItem from "./AccessoriesItem";

function Accessories() {
  const { state: {accessories} } = useAppContext();

  return (
    <Section label="Accessories">
      {accessories.map((a) => {
        return <AccessoriesItem key={`accessories-${a.id}`} {...a} />;
      })}
    </Section>
  );
}

export default Accessories;
