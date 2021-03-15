import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";
import { serviceId, templateId, userId } from "../../../secrets.json";

const initialForm = {
  email: "",
  name: "",
  phone: "",
  subject: "Purchasing Machine",
  message: "",
};

function useContactForm() {
  const [form, setForm] = useState(initialForm);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, "#contact-form", userId).then(
      (result) => {
      },
      (error) => {
      }
    );
    setForm(initialForm);
  };

  return { form, onChange, onSubmit };
}

export default useContactForm;
