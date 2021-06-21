import Image from "next/image";
import React, { useState } from "react";
import { IProduct } from "../../../types";

function ProductListItem({ name, src }: IProduct) {
  const [enter, setEnter] = useState(false);
  const handleEnter = () => setEnter(true);
  const handleLeave = () => setEnter(false);

  return (
    <div className="col">
      <article
        className="card shadow"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <Image className="card-img" src={src} alt={name} placeholder="blur" />

        {enter && (
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <button className="btn btn-light p-3 pointer">
              <h5 className="card-title mb-0 fw-bold">{name}</h5>
            </button>
          </div>
        )}

      </article>
    </div>
  );
}

export default ProductListItem;
