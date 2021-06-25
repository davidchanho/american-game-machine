import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";

const initialForm = {
  email: "",
  name: "",
  phone: "",
  subject: "Purchasing Machine",
  message: "",
};

function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        "#contact-form",
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          console.log(result);
          setSuccess(true);
        },
        (error) => {
          console.log(error);
          setError(true);
        }
      );
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
    setForm(initialForm);
  };

  return { form, onChange, onSubmit, error, success };
}

export default useContactForm;
