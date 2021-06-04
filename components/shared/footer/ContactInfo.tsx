import React from "react";
import { contacts } from "../../../context";
import ContactItem from "./ContactItem";

function ContactInfo() {
  return (
    <address>
      <div className="row my-4">
        {contacts.map((item) => (
          <div className="col">
            <ContactItem key={item.id} {...item} />
          </div>
        ))}
      </div>
    </address>
  );
}

export default ContactInfo;
