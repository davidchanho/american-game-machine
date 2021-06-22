import React from "react";
import { IService } from "../../../types";
import AppearText from "../../shared/appear-text";

function ServicesItem({ title, description, children }: IService) {
  return (
    <div className="col">
      <AppearText className="card h-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm">
        <div className="card-header">
          {children}
          <h2 className="my-3">{title}</h2>
        </div>
        <div className="card-body px-4">
          <p>{description}</p>
        </div>
      </AppearText>
    </div>
  );
}

export default ServicesItem;
