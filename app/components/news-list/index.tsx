import React from "react";
import { CardDeck } from "react-bootstrap";
import { useAppContext } from "../../context";
import Item from "./Item";

function News() {
  const { news } = useAppContext();

  return (
    <section>
      <CardDeck>
        {news?.map((n) => {
          return <Item key={`news-item-${n.id}`} {...n} />;
        })}
      </CardDeck>
    </section>
  );
}

export default News;
