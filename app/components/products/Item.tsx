import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../section-title";
import Games from "./Games";
import QuoteBtn from "./QuoteBtn";
import Variants from "./Variants";

interface Props {
  label: string;
  variants: string[];
  description: string;
  games: string[];
  image: string;
}

function Item({ label, variants, games, description, image }: Props) {
  return (
    <article>
      <SectionTitle title={label} />
      <Row>
        <Col md={6} sm={12}>
          <Image src={image} alt={label} aria-hidden={true} layout="fill" />
        </Col>
        <Col md={6} sm={12}>
          <header>
            <Variants variants={variants} />
            <p>{description}</p>
            <Games games={games} />
          </header>
          <QuoteBtn />
        </Col>
      </Row>
    </article>
  );
}

export default Item;
