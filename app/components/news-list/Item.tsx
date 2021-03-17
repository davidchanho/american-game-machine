import { Card } from "react-bootstrap";
import { INews } from "../../context/news";

function Item({ title, date, body }: INews) {
  return (
    <Card className="border">
      <Card.Header>
        <h3>{title}</h3>
      </Card.Header>
      <Card.Body>{body}</Card.Body>
      <Card.Footer>
        <small>{date}</small>
      </Card.Footer>
    </Card>
  );
}

export default Item;
