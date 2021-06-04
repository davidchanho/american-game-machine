import React from "react";
import { IService } from "../../../types";

function ServicesItem({ Icon, title, description }: IService) {
  return (
    <div className="card w-100 h-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm">
      <div className="card-header">
        <Icon className="mb-3" size={48} />
        <h2 className="mb-3">{title}</h2>
      </div>
      <div className="card-body px-4">{description}</div>
    </div>
  );
}

export default ServicesItem;
