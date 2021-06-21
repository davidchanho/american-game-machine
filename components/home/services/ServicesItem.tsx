import React from "react";
import { IService } from "../../../types";

function ServicesItem({ title, description, children }: IService) {
  return (
    <div className="col">
      <div className="card h-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm">
        <div className="card-header">
          {children}
          <h2 className="mb-3">{title}</h2>
        </div>
        <div className="card-body px-4">{description}</div>
      </div>
    </div>
  );
}

export default ServicesItem;
