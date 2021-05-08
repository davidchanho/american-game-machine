import React from "react";
import ContactForm from "./components/contact-form";
import Container from "./styles";
import Image from "next/image";

function ContactPage() {
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
            width={800}
            height={800}
          />
        </section>
      </Container>
    </>
  );
}

export default ContactPage;
