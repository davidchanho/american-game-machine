import { CardDeck } from "react-bootstrap";
import { useAppContext } from "../../context/context";
import NewsItem from "./NewsItem";

function News() {
  const {
    state: { news },
  } = useAppContext();
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
