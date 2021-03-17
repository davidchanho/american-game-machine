import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { IProduct } from "../../context/products";
import SectionTitle from "../section-title";
import Games from "./Games";
import Overview from "./Overview";
import QuoteBtn from "./QuoteBtn";
import { Material, MaterialItem } from "./styles";

function Item({
  label,
  material,
  overview,
  screenSize,
  games,
  description,
  image,
}: IProduct) {
  return (
    <section>
      <SectionTitle>{label} </SectionTitle>
      <Row>
        <Col md={6} sm={12}>
          <Image src={image} alt={label} aria-hidden={true} layout="fill" />
        </Col>
        <Col md={6} sm={12}>
          <p>{description}</p>
          <Games games={games} />
          <Material>
            <MaterialItem>
              {screenSize.map((s) => {
                return (
                  <MaterialItem key={s}>
                    <Image src={`/svg/${s}screen.svg`} layout="fill" />
                  </MaterialItem>
                );
              })}
            </MaterialItem>
          </Material>
          <Material>
            {material.map((m) => {
              return (
                <MaterialItem key={m}>
                  <Image src={`/img/${m}.jpg`} layout="fill" />
                </MaterialItem>
              );
            })}
          </Material>
          <Overview />
          <QuoteBtn />
        </Col>
      </Row>
    </section>
  );
}

export default Item;
