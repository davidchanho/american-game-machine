import React from "react";
import { contacts } from "../../../context";
import ContactItem from "./ContactItem";

function ContactInfo() {
  return (
    <div className="row row-cols-1 row-cols-md-3 my-4 mx-1">
      {contacts.map((contact) => (
        <div key={contact.id} className="col p-0">
          <ContactItem {...contact} />
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
