import React from "react";
import useContactForm from "./useContactForm";

function ContactForm() {
  const { form, onChange, onSubmit } = useContactForm();

  return (
    <form className="form" id="contact-form" onSubmit={onSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          onChange={onChange}
          value={form.name}
          name="name"
          placeholder="Name"
          required
          min={3}
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="Email"
          required
          min={6}
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="tel"
          onChange={onChange}
          value={form.phone}
          name="phone"
          pattern="[0-9]{3}[0-9]{3}-[0-9]{4}"
          placeholder="Phone Number"
          required
          min={6}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          onChange={onChange}
          value={form.subject}
          name="subject"
          required
        >
          <option>Purchasing Machine</option>
          <option>Leasing Machine</option>
          <option>Consulting Services</option>
          <option>Store Setup Services</option>
          <option>Repair Services</option>
        </select>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={onChange}
          value={form.message}
          name="message"
          placeholder="What can we help you with?"
          cols={80}
          rows={5}
          required
        />
      </div>

      <button className="btn btn-dark mobile-full" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
