import React from "react";
import Section from "../../shared/section";
import ContactAlert from "./ContactAlert";
import ContactForm from "./ContactForm";
import useContactForm from "./useContactForm";

function Contact() {
  const { form, onChange, onSubmit, status } = useContactForm();

  return (
    <Section title="contact">
      <div className="d-flex flex-column mx-3">
        <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />
        <ContactAlert status={status} />
      </div>
    </Section>
  );
}

export default Contact;
