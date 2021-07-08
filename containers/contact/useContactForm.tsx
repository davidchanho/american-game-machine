import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = "idle" | "success" | "error";

const initialForm = {
  email: "",
  name: "",
  phone: "",
  subject: "Purchasing Machine",
  message: "",
};

function useContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Props>("idle");

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
          setStatus("success");
        },
        (error) => {
          console.log(error);
          setStatus("error");
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

  return { form, onChange, onSubmit, status };
}

export default useContactForm;
