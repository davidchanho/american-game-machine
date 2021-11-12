import React from "react";
import Section from "../../components/section";
import ContactAlert from "./ContactAlert";
import ContactForm from "./ContactForm";
import useContactForm from "./useContactForm";

function Contact() {
  const { form, onChange, onSubmit, status } = useContactForm();

  return (
    <Section link="contact">
      <div className="d-flex flex-column mx-3">
        <p className="mb-3 display-6">Contact Us</p>
        <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />
        <ContactAlert status={status} />
      </div>
    </Section>
  );
}

export default Contact;
