import { CardDeck } from "react-bootstrap";
import {news} from "../../context";
import NewsItem from "./NewsItem";

function News() {
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
