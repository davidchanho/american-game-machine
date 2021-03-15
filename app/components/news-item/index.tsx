import React from "react";
import { Card } from "react-bootstrap";
import { INews } from "../../types";

function NewsItem({ title, date, body }: INews) {
  return (
    <Card>
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

export default NewsItem;
