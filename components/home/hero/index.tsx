import React from "react";
import { Col, Row } from "react-bootstrap";
import { RiArrowDownSLine } from "react-icons/ri";
import Navbar from "../../shared/navbar";
import HeroHeader from "./HeroHeader";
import { Container } from "./styles";

function Hero() {
  return (
    <Container className="position-relative w-100 h-100 p-0 rounded-0 text-white bg-dark text-center">
      <Navbar />
      <Row className="h-100 d-flex align-items-center">
        <Col sm={{ span: 4, offset: 1 }} xs={12}>
          <HeroHeader />
        </Col>
        <Col className="w-100 h-100" md={{ span: 6, offset: 1 }} sm={7} xs={12}>
          <img
            className="w-100 h-100"
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
    </Container>
  );
}

export default Hero;
