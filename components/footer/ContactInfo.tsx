import React from "react";
import { contacts } from "../../context";
import ContactItem from "./ContactItem";

function ContactInfo() {
  return (
    <div className="row row-cols-1 row-cols-md-3 my-4 mx-1">
      {contacts.map((contact, index) => (
        <div key={contact.id} className="col p-0">
          <ContactItem {...contact} delay={index * 0.2 + 0.2} />
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
