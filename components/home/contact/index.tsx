import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../../shared/section-title";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section>
      <Container>
        <SectionTitle section="contact" />
        <ContactForm />
      </Container>
    </section>
  );
}

export default Contact;
