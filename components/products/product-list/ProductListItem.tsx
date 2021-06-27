import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "../../../types";
import AppearContainer from "../../shared/appear-container";
import ProductButton from "./ProductButton";

interface Props extends IProduct {
  delay?: number;
}

function ProductListItem({ name, src, link, delay }: Props) {
  const [enter, setEnter] = useState(false);

  const handleEnter = () => setEnter(true);
  const handleLeave = () => setEnter(false);

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

          {enter && <ProductButton link={link} />}
        </div>
      </AppearContainer>
    </div>
  );
}

export default ProductListItem;
