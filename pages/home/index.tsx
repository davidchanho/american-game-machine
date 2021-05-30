import React from "react";
import ContactForm from "../../components/home/contact-form";
import Products from "../../components/home/products";
import Services from "../../components/home/services";

export default function HomePage() {
  return (
    <>
      <Products />
      <Services />
      <h3 id='contact'>Contact Us</h3>
      <ContactForm />
    </>
  );
}
