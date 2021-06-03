import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar from "../../shared/navbar";

function Hero() {
  return (
    <section className="w-100 position-relative h-auto text-white bg-dark">
      <Navbar />
      <Row className="d-flex align-items-center">
        <Col>
          <header className="px-3 text-left">
            <h1 className="mb-3">
              Skill games and business solutions that meet your needs.
            </h1>
            <a
              href="/#contact"
              className="btn btn-light bg-lg mobile-full"
              role="button"
            >
              Contact Us
            </a>
          </header>
        </Col>
        <Col className="me-0">
          <img
            src="/img/machines/hero-banner.png"
            alt="hero banner"
            width={480}
            height={720}
          />
        </Col>
      </Row>
    </section>
  );
}

export default Hero;
