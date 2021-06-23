import React from "react";
import { IService } from "../../../types";
import AppearContainer from "../../shared/appear-container";

function ServicesItem({ title, description, Icon }: IService) {
  return (
    <div className="col">
      <AppearContainer className="card h-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm">
        <div className="card-header">
          {Icon}
          <h2 className="card-title my-3">{title}</h2>
        </div>
        <div className="card-body px-4">
          <p>{description}</p>
        </div>
      </AppearContainer>
    </div>
  );
}

export default ServicesItem;
