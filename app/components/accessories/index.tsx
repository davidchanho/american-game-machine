import { CardDeck } from "react-bootstrap";
import { useAppContext } from "../../context";
import SectionTitle from "../section-title";
import Item from "./Item";

function Accessories() {
  const { accessories } = useAppContext();

  return (
    <section>
      <SectionTitle>Accessories</SectionTitle>
      <CardDeck>
        {accessories.map((a) => {
          return <Item key={`accessories-${a.id}`} {...a} />;
        })}
      </CardDeck>
    </section>
  );
}

export default Accessories;
