import React from "react";
import ContactForm from "../../components/contact-form";
import Layout from "../../components/_shared/layout";
import { Container } from "./styles";

function Contact() {
  return (
    <Layout>
      <Container>
        <ContactForm />
        <img
          src="/svg/contact.svg"
          alt="contact us to get a quote"
          aria-hidden="true"
        />
      </Container>
    </Layout>
  );
}

export default Contact;
