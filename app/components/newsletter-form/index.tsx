import React from "react";
import { Button, Form } from "react-bootstrap";
import useNewsLetterForm from "./useNewsLetterForm";

function NewsLetterForm() {
  const { email, onChange, onSubmit } = useNewsLetterForm();

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="email">
        <Form.Control
          type="email"
          placeholder="john@email.com"
          onChange={onChange}
          value={email}
          name="email"
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Subscribe
      </Button>
    </Form>
  );
}

export default NewsLetterForm;
