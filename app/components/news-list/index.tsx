import React from "react";
import { CardDeck } from "react-bootstrap";
import { useAppContext } from "../../context";
import NewsItem from "../news-item";

function News() {
  const { news } = useAppContext();

  return (
    <section>
      <CardDeck>
        {news?.map((n) => {
          return <NewsItem key={`news-item-${n.id}`} {...n} />;
        })}
      </CardDeck>
    </section>
  );
}

export default News;
