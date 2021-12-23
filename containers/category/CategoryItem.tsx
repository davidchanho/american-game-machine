import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
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
        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 2 }}>
            <Card>
              <Card.Body className="p-3">
                <Card.Title className="card-title">{name}</Card.Title>
                <p className="card-text mt-3">{desc}</p>
                {features.map((f) => {
                  return (
                    <div className="mt-3" key={f.id}>
                      <p className="mb-2">{f.name}</p>
                      <Row>
                        {f.list.map((l) => {
                          return l.map((e) => {
                            return (
                              <Col key={e.id}>
                                <Image src={e.src} />
                                <p className="text-center">{e.desc}</p>
                              </Col>
                            );
                          });
                        })}
                      </Row>
                    </div>
                  );
                })}
                <GetAQuote />
              </Card.Body>
            </Card>
          </Col>
          <div className="col-12 col-md-4">
            <div className="card">
              <Image
                className="card-img"
                src={src}
                alt={name}
                placeholder="blur"
              />
            </div>
          </div>
        </Row>
      </Section>
    </AppearContainer>
  );
}

export default CategoryListItem;
