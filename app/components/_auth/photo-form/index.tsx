import React from "react";
import { Form } from "react-bootstrap";

function PhotoForm() {
  return (
    <Form>
      <Form.Group>
        <Form.File id="photo-form-file" label="upload" />
      </Form.Group>
    </Form>
  );
}

export default PhotoForm;
