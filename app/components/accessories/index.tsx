import React from "react";
import { CardDeck } from "react-bootstrap";
import { useAppContext } from "../../context";
import Item from "./Item";
import SectionTitle from "../section-title";

function Accessories() {
  const { accessories } = useAppContext();

  return (
    <section>
      <SectionTitle title="Accessories" />

      <CardDeck>
        {accessories.map((a) => {
          return <Item key={`accessories-${a}`} label={a} />;
        })}
      </CardDeck>
    </section>
  );
}

export default Accessories;
