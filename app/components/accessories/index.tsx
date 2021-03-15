import React from "react";
import { CardDeck } from "react-bootstrap";
import { useAppContext } from "../../context";
import AccessoriesItem from "../accessories-item";
import SectionTitle from "../section-title";

function Accessories() {
  const { accessories } = useAppContext();

  return (
    <section>
      <SectionTitle title="Accessories" />

      <CardDeck>
        {accessories.map((a) => {
          return <AccessoriesItem key={`accessories-${a}`} label={a} />;
        })}
      </CardDeck>
    </section>
  );
}

export default Accessories;
