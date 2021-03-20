import React from "react";
import ContactForm from "../../components/contact-form";
import Container from "./styles";
import Image from "next/image";

function Contact() {
  return (
    <>
      <Container>
        <h1>Contact Us</h1>
        <section>
          <ContactForm />
          <Image
            src="/svg/contact.svg"
            alt="contact us to get a quote"
            aria-hidden="true"
            width={400}
            height={400}
          />
        </section>
      </Container>
    </>
  );
}

export default Contact;
