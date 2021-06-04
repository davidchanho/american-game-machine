import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";

const initialForm = {
  email: "",
  name: "",
  phone: "",
  subject: "Purchasing Machine",
  message: "",
};

const sendEmail = () => {
  emailjs
    .sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      "#contact-form",
      process.env.USER_ID
    )
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
};

function useContactForm() {
  const [form, setForm] = useState(initialForm);

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

  return { form, onChange, onSubmit };
}

export default useContactForm;
