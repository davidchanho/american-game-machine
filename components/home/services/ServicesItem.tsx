import React from "react";
import { IService } from "../../../types";
import AppearContainer from "../../shared/appear-container";

interface Props extends IService {
  delay?: number;
}

function ServicesItem({ title, description, Icon, delay }: Props) {
  return (
    <div className="col">
      <AppearContainer delay={delay}>
        <div className="card h-100 w-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm mb-5">
          <div className="card-header">
            {Icon}
            <h2 className="card-title my-3">{title}</h2>
          </div>
          <div className="card-body px-4">
            <p>{description}</p>
          </div>
        </div>
      </AppearContainer>
    </div>
  );
}

export default ServicesItem;
