import React from "react";
import { IService } from "../../../types";
import AppearText from "../../shared/appear-text";

function ServicesItem({ Icon, title, description }: IService) {
  return (
    <div className="col">
      <div className="card h-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm">
        <div className="card-header">
          <Icon className="mb-3" size={48} />
          <AppearText>
            <h2 className="mb-3">{title}</h2>
          </AppearText>
        </div>
        <div className="card-body px-4">
          <AppearText>{description} </AppearText>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
