import Image from "next/image";
import React from "react";
import AppearContainer from "../../components/appear-container";
import GetAQuote from "../../components/get-a-quote";
import Section from "../../components/section";
import { ICategory } from "../../types";

interface Props extends ICategory {
  delay?: number;
}

function CategoryListItem({ name, src, desc, delay }: Props) {
  return (
    <AppearContainer delay={delay}>
      <Section link={name}>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <div className="card-body p-3">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{desc}</p>
              <GetAQuote />
            </div>
          </div>
          <div className="col">
            <div className="w-75">
              <Image
                className="card-img"
                src={src}
                alt={name}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Section>
    </AppearContainer>
  );
}

export default CategoryListItem;
