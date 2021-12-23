import React from "react";
import { Button, Form } from "react-bootstrap";

function ContactForm({ form, onChange, onSubmit }) {
  return (
    <Form className="d-grid gap-4" id="contact-form" onSubmit={onSubmit}>
      <Form.Group className="form-floating">
        <Form.Control
          id="name"
          type="text"
          onChange={onChange}
          value={form.name}
          name="name"
          placeholder="Name"
          required
        />
        <Form.Label htmlFor="name">Name</Form.Label>
      </Form.Group>

      <Form.Group className="form-floating">
        <Form.Control
          type="email"
          id="email"
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="Email"
          required
          min={6}
        />
        <Form.Label htmlFor="email">Email</Form.Label>
      </Form.Group>

      <Form.Group className="form-floating">
        <Form.Control
          type="tel"
          id="phoneNumber"
          onChange={onChange}
          value={form.phone}
          name="phone"
          placeholder="Phone Number"
          required
          min={6}
        />
        <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
      </Form.Group>

      <Form.Group className="form-floating">
        <Form.Select
          id="subject"
          className="form-select"
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
        </Form.Select>
        <Form.Label htmlFor="subject">Subject</Form.Label>
      </Form.Group>

      <Form.Group className="form-floating">
        <Form.Control
          id="message"
          as="textarea"
          className="h-100"
          onChange={onChange}
          value={form.message}
          name="message"
          placeholder="What can we help you with?"
          cols={80}
          rows={10}
          required
        />
        <Form.Label htmlFor="message">Message</Form.Label>
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
