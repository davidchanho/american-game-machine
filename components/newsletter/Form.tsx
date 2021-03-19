import { Button, Form as BsForm } from "react-bootstrap";
import useNewsLetterForm from "./hooks";

function Form() {
  const { email, onChange, onSubmit } = useNewsLetterForm();

  return (
    <BsForm onSubmit={onSubmit}>
      <BsForm.Group controlId="email">
        <BsForm.Control
          type="email"
          placeholder="john@email.com"
          onChange={onChange}
          value={email}
          name="email"
        />
      </BsForm.Group>

      <Button variant="danger" type="submit">
        Subscribe
      </Button>
    </BsForm>
  );
}

export default Form;
