import React, { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";
import firebase from 'firebase'

function AdminAuth() {
  const [form, setForm] = useState({ email: "", password: "" });
var provider = new firebase.auth.GoogleAuthProvider();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
}

export default AdminAuth;
