import React from "react";
import {  Form } from "react-bootstrap";
import Button from "../../shared/button";
import Recaptcha from "./Recaptcha";
import useContactForm from "./useContactForm";

function ContactForm() {
  const { form, onChange, onSubmit } = useContactForm();

  return (
    <Form id="contact-form" onSubmit={onSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          onChange={onChange}
          value={form.name}
          name="name"
          required
          min={3}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          onChange={onChange}
          value={form.email}
          name="email"
          required
          min={6}
        />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          onChange={onChange}
          value={form.phone}
          name="phone"
          pattern="[0-9]{3}[0-9]{3}-[0-9]{4}"
          required
          min={6}
        />
      </Form.Group>

      <Form.Group controlId="department">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          as="select"
          custom
          onChange={onChange}
          value={form.subject}
          name="subject"
          required
        >
          <option>Purchasing Machine</option>
          <option>Leasing Machine</option>
          <option>Consulting Services</option>
          <option>Store Setup Services</option>
          <option>Repair Services</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          onChange={onChange}
          value={form.message}
          name="message"
          cols={80}
          rows={5}
          required
        />
      </Form.Group>

      <Recaptcha />
      
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
