import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactForm from "../../app/components/contact-form";
import MainLayout from "../../app/layouts/MainLayout";

function Contact() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default Contact;
