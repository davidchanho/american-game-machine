import React from "react";
import { Button, Card } from "react-bootstrap";
import { IContact } from "../../types";
import AppearContainer from "../appear-container";

interface Props extends IContact {
  delay?: number;
}

function ContactItem({ contact, info, href, btnLabel, delay }: Props) {
  return (
    <AppearContainer className="center-mobile h-100 mb-3" delay={delay}>
      <Card>
        <Card.Header className="d-flex align-items-center mb-3">
          <h3 className="text-capitalize ml-3">{contact}</h3>
        </Card.Header>
        <Card.Body className="mb-3">
          {info.map((i, index) => (
            <Card.Text key={`${i}-${index}`}>{i}</Card.Text>
          ))}
        </Card.Body>
        <Card.Footer className="mb-3">
          <Button
            variant="light"
            size="lg"
            href={href}
            className="text-capitalize"
            role="button"
          >
            {btnLabel}
          </Button>
        </Card.Footer>
      </Card>
    </AppearContainer>
  );
}

export default ContactItem;
