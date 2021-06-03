import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ContactItem from "./ContactItem";
import { IContact } from "./types";

const items: IContact[] = [
  {
    id: "contact-1",
    contact: "address",
    Icon: FaMapMarkerAlt,
    info: ["101 E Carteret Street, Unit 107", "Greensboro, NC 27406"],
    btnLabel: "get directions",
    href: "https://www.google.com/maps/place/101+E+Carteret+St+UNIT+107,+Greensboro,+NC+27406/@36.0373818,-79.7924992,17z/data=!3m1!4b1!4m5!3m4!1s0x885319ac1d05bfdd:0x6be5d01592cda5c9!8m2!3d36.0373775!4d-79.7903105",
    rel: "",
  },
  {
    id: "contact-2",
    contact: "phone",
    Icon: FaPhone,
    info: ["919-971-0827"],
    btnLabel: "get a quote",
    href: "tel:+01-919-306-0509",
    rel: "nofollow",
  },
  {
    id: "contact-3",
    contact: "email",
    Icon: FaEnvelope,
    info: ["contact@empire-amusement.com"],
    btnLabel: "email us",
    href: "mailto: contact@empire-amusement.com",
    rel: "",
  },
];

function ContactInfo() {
  return (
    <address>
      <div className="g-4 my-4">
        {items.map((item) => (
          <ContactItem key={item.id} {...item} />
        ))}
      </div>
    </address>
  );
}

export default ContactInfo;
