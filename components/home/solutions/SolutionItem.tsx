import React from "react";
import { ISolution } from "../../../types";
import AppearContainer from "../../shared/appear-container";

interface Props extends ISolution {
  delay?: number;
}

function SolutionItem({ title, description, Icon, delay }: Props) {
  return (
    <div className="col">
      <AppearContainer delay={delay}>
        <div className="card w-100 p-4 text-center d-flex align-items-center justify-content-center shadow-sm mb-5">
          <div className="card-header">
            {Icon}
            <h2 className="card-title my-3">{title}</h2>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </AppearContainer>
    </div>
  );
}

export default SolutionItem;
