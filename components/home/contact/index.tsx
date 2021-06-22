import React from "react";
import Section from "../../shared/section";
import ContactForm from "./ContactForm";
import useContactForm from "./useContactForm";

function Contact() {
  const { form, onChange, onSubmit, error, success } = useContactForm();

  return (
    <Section title="contact">
      <div className="d-flex flex-column mx-3">
        <ContactForm form={form} onChange={onChange} onSubmit={onSubmit} />

        {success && (
          <div className="alert alert-success mt-3">
            Email successfully sent. We will response as soon as we can.
          </div>
        )}

        {error && (
          <div className="alert alert-danger mt-3">
            An error has occurred. Please try again later.
          </div>
        )}
      </div>
    </Section>
  );
}

export default Contact;
