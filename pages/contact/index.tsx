import React from "react";
import ContactForm from "../../components/contact-form";
import Container from "./styles";

function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <Container>
        <ContactForm />
        <img
          src="/svg/contact.svg"
          alt="contact us to get a quote"
          aria-hidden="true"
          width={400}
          height={400}
        />
      </Container>
    </>
  );
}

export default Contact;
