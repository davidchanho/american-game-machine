import Image from "next/image";
import React from "react";
import AppearContainer from "../../components/appear-container";
import GetAQuote from "../../components/get-a-quote";
import Section from "../../components/section";
import { ICategory } from "../../types";

interface Props {
  delay?: number;
  c: ICategory;
}

function CategoryListItem({ delay, c: { name, src, desc, features } }: Props) {
  return (
    <AppearContainer delay={delay}>
      <Section link={name}>
        <div className="row">
          <div className="col-8">
            <div className="card-body p-3">
              <h2 className="card-title h2">{name}</h2>
              <p className="card-text h5 mt-3">{desc}</p>
              <div className="row mt-3">
                {features.map((f) => {
                  return (
                    <div className="row" key={f.id}>
                      {f.name}
                      {f.list.map((f) => {
                        return (
                          <div className="col" key={f.id}>
                            <Image src={f.src} />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <GetAQuote />
            </div>
          </div>
          <div className="col">
            <div className="card">
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
