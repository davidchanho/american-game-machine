import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";
import Navbar from "../../shared/navbar";
import HeroHeader from "./HeroHeader";

function Hero() {
  return (
    <section className="w-100 position-relative h-auto text-white bg-dark">
      <Navbar />
      <Row className="w-100 d-flex align-items-center">
        <Col sm={{ span: 4, offset: 1 }} xs={12}>
          <HeroHeader />
        </Col>
        <Col sm={{ span: 2, offset: 4 }} xs={12}>
          <img
            className="h-100"
            src="/img/machines/hero-banner.png"
            alt="hero banner"
            width={360}
            height={490}
          />
        </Col>
      </Row>
      <RiArrowDownSLine
        size={48}
        className="position-absolute bottom-0 start-50 translate-middle-x"
      />
    </section>
  );
}

export default Hero;
