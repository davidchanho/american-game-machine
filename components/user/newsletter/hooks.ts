import { ChangeEvent, FormEvent, useState } from "react";

const useNewsLetterForm = () => {
  const [email, setEmail] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return { email, onChange, onSubmit };
};

export default useNewsLetterForm;
