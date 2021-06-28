import Image from "next/image";
import React, { useState } from "react";
import { ICategory } from "../../../types";
import AppearContainer from "../../shared/appear-container";
import CategoryButton from "./CategoryButton";

interface Props extends ICategory {
  delay?: number;
}

function CategoryListItem({ name, src, link, delay }: Props) {
  const [enter, setEnter] = useState(false);

  const handleEnter = () => setEnter(true);
  const handleLeave = () => setEnter(false);

  return (
    <div className="col">
      <AppearContainer delay={delay}>
        <article
          className="card shadow mb-5"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <p className="card-title text-center pt-3">{name}</p>

          <Image
            className="card-img category-img"
            src={src}
            alt={name}
            placeholder="blur"
          />

          {enter && <CategoryButton link={link} />}
        </article>
      </AppearContainer>
    </div>
  );
}

export default CategoryListItem;
