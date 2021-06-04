import React from "react";
import { Col, Row } from "react-bootstrap";
import { contact } from "../../../context";
import ContactItem from "./ContactItem";

function ContactInfo() {
  return (
    <address>
      <Row className="my-4">
        {contact.map((item) => (
          <Col md={4}>
            <ContactItem key={item.id} {...item} />
          </Col>
        ))}
      </Row>
    </address>
  );
}

export default ContactInfo;
