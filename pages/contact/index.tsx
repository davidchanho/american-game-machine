import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components//layout";
import ContactForm from "../../components/contact-form";

function Contact() {
  return (
    <Layout>
      <Row>
        <Col md={6} sm={12}>
          <ContactForm />
        </Col>
        <Col md={6} sm={12}>
          <img
            src="/svg/contact.svg"
            alt="contact us to get a quote"
            aria-hidden="true"
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default Contact;
