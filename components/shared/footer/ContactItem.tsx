import React from "react";
import { IContact } from "../../../types";
import AppearText from "../appear-text";

function ContactItem({ Icon, contact, info, href, btnLabel }: IContact) {
  return (
    <div className="card h-100 mb-3">
      <div className="card-header d-flex align-items-center mb-3">
        <AppearText>
          <Icon className="me-2" color="white" size={18} />
          <h3 className="text-capitalize">{contact}</h3>
        </AppearText>
      </div>
      <div className="card-body mb-3">
        {info.map((i, index) => (
          <AppearText className="card-text" key={`${info}-${index}`}>
            {i}
          </AppearText>
        ))}
      </div>
      <div className="card-footer">
        <a
          href={href}
          className="btn btn-light bg-lg text-capitalize"
          role="button"
        >
          {btnLabel}
        </a>
      </div>
    </div>
  );
}

export default ContactItem;
