import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useAppContext } from "../../../../context";

function AuthNewsList() {
  const {
    state: { news },
    dispatch,
  } = useAppContext();

  const onDelete = (n) => {
    dispatch({ type: "DELETE_NEWS", payload: n });
  };

  const onUpdate = (n) => {
    dispatch({ type: "UPDATE_NEWS", payload: n });
  };

  return (
    <ListGroup>
      {news.map((n) => {
        return (
          <ListGroup.Item>
            <h3>{n.title}</h3>
            <p>{n.body}</p>
            <Button
              className="mr-2"
              variant="danger"
              onClick={() => onDelete(n)}
            >
              Delete
            </Button>
            <Button variant="info" onClick={() => onUpdate(n)}>
              Update
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default AuthNewsList;
