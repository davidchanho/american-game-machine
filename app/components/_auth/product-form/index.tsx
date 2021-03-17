import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppContext } from "../../../context";

interface IProductForm {
  label: string;
  description: string;
  screens: string[];
  materials: string[];
  numberOfPlayers: string;
  games: string[];
  image: string;
}

function ProductForm() {
  const [form, setForm] = useState<IProductForm>({
    label: "",
    description: "",
    screens: [],
    materials: [],
    numberOfPlayers: "",
    games: [],
    image: "",
  });

  const { dispatch } = useAppContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CREATE_PRODUCT", payload: form });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Label</Form.Label>
        <Form.Control
          type="text"
          name="label"
          value={form.label}
          onChange={onChange}
          placeholder="label"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="description"
          value={form.description}
          onChange={onChange}
          rows={6}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Screen Size</Form.Label>
        <Form.Control
          type="number"
          name="screens"
          value={form.screens}
          onChange={onChange}
          placeholder="screen size"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Materials</Form.Label>
        <Form.Control
          name="materials"
          value={form.materials}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Number of Players</Form.Label>
        <Form.Control
          type="number"
          name="numberOfPlayers"
          value={form.numberOfPlayers}
          onChange={onChange}
          min="1"
          defaultValue="1"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Games</Form.Label>
        <Form.Control
          type="text"
          name="games"
          value={form.games}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Photo</Form.Label>
        <Form.File
          name="image"
          value={form.image}
          onChange={onChange}
          id="photo-form-file"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ProductForm;
