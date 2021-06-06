import React from "react";
import { contacts } from "../../../context";
import ContactItem from "./ContactItem";

function ContactInfo() {
  return (
    <div className="row row-cols-1 row-cols-md-3 my-4 mx-1">
      {contacts.map((item) => (
        <div className="col">
          <ContactItem key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
