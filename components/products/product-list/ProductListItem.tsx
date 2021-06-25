import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "../../../types";
import AppearContainer from "../../shared/appear-container";

interface Props extends IProduct {
  delay?: number;
}

function ProductListItem({ name, src, link, delay }: Props) {
  const [enter, setEnter] = useState(false);

  const handleEnter = () => setEnter(true);
  const handleLeave = () => setEnter(false);

  const ProductButton = () => {
    return (
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <a className="btn btn-light p-3 pointer" href={link}>
          <span className="card-title mb-0 fw-bold">View Details</span>
        </a>
      </div>
    );
  };

  return (
    <div className="col">
      <AppearContainer delay={delay}>
        <div
          className="card shadow mb-5"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <Image className="card-img" src={src} alt={name} placeholder="blur" />

          <p className="card-title">{name}</p>

          {enter && <ProductButton />}
        </div>
      </AppearContainer>
    </div>
  );
}

export default ProductListItem;
