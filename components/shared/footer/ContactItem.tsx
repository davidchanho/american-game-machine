import React from "react";
import { IContact } from "../../../types";
import AppearContainer from "../appear-container";

function ContactItem({ contact, info, href, btnLabel }: IContact) {
  return (
    <AppearContainer className="center-mobile card h-100 mb-3">
      <div className="card-header d-flex align-items-center mb-3">
        <h3 className="text-capitalize ml-3">{contact}</h3>
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
    </AppearContainer>
  );
}

export default ContactItem;
