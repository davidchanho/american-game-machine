import React from "react";

function ContactForm({ form, onChange, onSubmit }) {
  return (
    <form className="form" id="contact-form" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="name"
          type="text"
          onChange={onChange}
          value={form.name}
          name="name"
          placeholder="Name"
          required
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="email"
          id="email"
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="Email"
          required
          min={6}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-3">
        <input
          className="form-control"
          type="tel"
          id="phoneNumber"
          onChange={onChange}
          value={form.phone}
          name="phone"
          placeholder="Phone Number"
          required
          min={6}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
      </div>

      <div className="mb-3">
        <label className="mb-3" htmlFor="subject">
          Subject
        </label>
        <select
          id="subject"
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
        <label className="mb-3" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
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

      <button className="btn btn-dark" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
