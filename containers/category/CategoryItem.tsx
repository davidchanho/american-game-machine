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
              <p className="card-text mt-3">{desc}</p>
              {features.map((f) => {
                return (
                  <div className="mt-3" key={f.id}>
                    <p className="mb-2">{f.name}</p>
                    <div className="row">
                      {f.list.map((l) => {
                        return l.map((e) => {
                          return (
                            <div className="col" key={e.id}>
                              <Image src={e.src} />
                              <p className="text-center">{e.desc}</p>
                            </div>
                          );
                        });
                      })}
                    </div>
                  </div>
                );
              })}
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
