import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../../components/shared/layout";
import ContactForm from "../../components/user/contact-form";

function Contact() {
  return (
    <Layout>
      <Row>
        <Col md={6} sm={12}>
          <ContactForm />
        </Col>
        <Col md={6} sm={12}>
          <Image
            src="/svg/contact.svg"
            alt="contact us to get a quote"
            aria-hidden="true"
            layout="fill"
          />
        </Col>
      </Row>
    </Layout>
  );
}

export default Contact;
