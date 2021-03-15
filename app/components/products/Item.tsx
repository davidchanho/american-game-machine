import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { IProduct } from "./types";
import SectionTitle from "../section-title";
import Games from "./Games";
import Container from "./Containter";
import QuoteBtn from "./QuoteBtn";
import Variants from "./Variants";

function ProductItem({ label, variants, games, description, image }: IProduct) {
  return (
    <Container>
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
    </Container>
  );
}

export default ProductItem;
