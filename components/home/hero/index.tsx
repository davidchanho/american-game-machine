import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar from "../../shared/navbar";
import HeroHeader from "./HeroHeader";
import Container from "./styles";

function Hero() {
  return (
    <Container className="h-100 p-0 rounded-0 text-white bg-dark">
      <Navbar />
      <div className="backdrop bg-dark w-100 h-100 hide-mobile" />
      <div className="w-100 h-100">
        <Row noGutters className="d-flex align-items-center">
          <Col sm={{ span: 4, offset: 1 }} xs={11}>
            <HeroHeader />
          </Col>
          <Col sm={7} xs={11}>
            <Image
              className="img"
              src="/img/machines/hero-banner.png"
              alt="hero banner"
              layout="responsive"
              width={745}
              height={655}
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Hero;
