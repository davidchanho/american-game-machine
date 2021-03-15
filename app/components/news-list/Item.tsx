import React from "react";
import { Card } from "react-bootstrap";
import { Props } from "./types";

function Item({ title, date, body }: Props) {
  return (
    <Card className='border'>
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
