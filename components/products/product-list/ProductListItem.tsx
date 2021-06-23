import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "../../../types";
import AppearContainer from "../../shared/appear-container";

function ProductListItem({ name, src, link }: IProduct) {
  const [enter, setEnter] = useState(false);

  const handleEnter = () => setEnter(true);
  const handleLeave = () => setEnter(false);

  return (
    <div className="col-5">
      <AppearContainer>
        <div
          className="card shadow"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <Image className="card-img" src={src} alt={name} placeholder="blur" />

          <p className="card-title">{name}</p>

          {enter && (
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <a className="btn btn-light p-3 pointer" href={link}>
                <h5 className="card-title mb-0 fw-bold">View Details</h5>
              </a>
            </div>
          )}
        </div>
      </AppearContainer>
    </div>
  );
}

export default ProductListItem;
