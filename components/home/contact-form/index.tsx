import React from "react";
import { Form } from "react-bootstrap";
import Button from "../../shared/button";
import useContactForm from "./useContactForm";

function ContactForm() {
  const { form, onChange, onSubmit } = useContactForm();

  return (
    <Form className='my-5' id="contact-form" onSubmit={onSubmit}>
      <Form.Group controlId="name">
        <Form.Control
          type="text"
          onChange={onChange}
          value={form.name}
          name="name"
          placeholder="Name"
          required
          min={3}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Control
          type="email"
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="Email"
          required
          min={6}
        />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Control
          type="tel"
          onChange={onChange}
          value={form.phone}
          name="phone"
          pattern="[0-9]{3}[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
          required
          min={6}
        />
      </Form.Group>

      <Form.Group controlId="department">
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
        <Form.Control
          as="textarea"
          onChange={onChange}
          value={form.message}
          name="message"
          placeholder="What can we help you with?"
          cols={80}
          rows={5}
          required
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
