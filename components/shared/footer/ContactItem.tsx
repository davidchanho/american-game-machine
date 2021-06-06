import React from "react";
import { IContact } from "../../../types";

function ContactItem({ Icon, contact, info, href, btnLabel }: IContact) {
  return (
    <div className="card h-100 mb-3">
      <div className="card-header d-flex align-items-center mb-3">
        <Icon className="me-2" color="white" size={18} />
        <h3 className="text-capitalize">{contact}</h3>
      </div>
      <div className="card-body mb-3">
        {info.map((i, index) => (
          <div className='card-text' key={`${info}-${index}`}>{i}</div>
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
