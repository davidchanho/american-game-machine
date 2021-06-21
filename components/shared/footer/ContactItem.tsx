import React from "react";
import { IContact } from "../../../types";

function ContactItem({ contact, info, href, btnLabel, children }: IContact) {
  return (
    <div className="center-mobile card h-100 mb-3">
      <div className="card-header d-flex align-items-center mb-3">
        {children}
        <h3 className="text-capitalize">{contact}</h3>
      </div>
      <div className="card-body mb-3">
        {info.map((i, index) => (
          <div className="card-text" key={`${info}-${index}`}>
            {i}
          </div>
        ))}
      </div>
      <div className="card-footer mb-3">
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
