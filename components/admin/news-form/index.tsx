import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppContext } from "../../../context";

interface INewsForm {
  title: string;
  body: string;
}

function NewsForm() {
  const [form, setForm] = useState<INewsForm>({
    title: "",
    body: "",
  });

  const { dispatch } = useAppContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CREATE_NEWS", payload: form });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={form.title}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Body</Form.Label>
        <Form.Control
          type="text"
          name="body"
          value={form.body}
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewsForm;
