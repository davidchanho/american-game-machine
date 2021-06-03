import React from "react";
import { Card } from "react-bootstrap";
import { IContact } from "./types";

function ContactItem({ Icon, contact, info, href, btnLabel }: IContact) {
  return (
    <Card className="mx-0">
      <Card.Header className="d-flex align-items-center mb-3">
        <Icon className="me-2" color="white" size={18} />
        <h3 className="text-capitalize">{contact}</h3>
      </Card.Header>
      <Card.Body className="mb-3">
        {info.map((i, index) => (
          <Card.Text className={`${info}-${index}`}>{i}</Card.Text>
        ))}
      </Card.Body>
      <Card.Footer>
        <a
          href={href}
          className="btn btn-light bg-lg text-capitalize"
          role="button"
        >
          {btnLabel}
        </a>
      </Card.Footer>
    </Card>
  );
}

export default ContactItem;
