import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../shared/navbar";

function Hero() {
  return (
    <section className="w-100 text-white bg-dark">
      <Navbar />
      <Container className="me-0">
        <Row className="d-flex align-items-center">
          <Col md={7} sm={12}>
            <header className="text-left w-75">
              <h1 className="mb-3">
                Machines and business solutions that meet your needs.
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
          <Col md={{ span: 4, offset: 1 }} sm={12}>
            <img
              className="w-100"
              src="/img/machines/hero-banner.png"
              alt="hero banner"
              sizes="(max-width: 600px) 180px,
            360px"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
