import React from "react";
import Section from "../../shared/section";
import SectionTitle from "../../shared/section-title";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Section>
      <SectionTitle section="contact" />
      <ContactForm />
    </Section>
  );
}

export default Contact;
