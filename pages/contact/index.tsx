import Image from "next/image";
import React from "react";
import ContactForm from "../../components/contact-form";
import Layout from "../../components/_shared/layout";
import { Container } from "./styles";

function Contact() {
  return (
    <Layout>
      <Container>
        <ContactForm />
        <Image
          src="/svg/contact.svg"
          alt="contact us to get a quote"
          aria-hidden="true"
          width={400}
          height={400}
        />
      </Container>
    </Layout>
  );
}

export default Contact;
