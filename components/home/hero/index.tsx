import Image from "next/image";
import React from "react";
import { Button, Col, Jumbotron, Row } from "react-bootstrap";
import Navbar from "../../shared/navbar";

function Hero() {
  return (
    <Jumbotron className="p-0 rounded-0 text-white bg-dark">
      <Navbar />
      <Row noGutters className="w-100 d-flex align-items-center">
        <Col lg={{ span: 4, offset: 1 }} xs={12}>
          <h1 className="title">Great Machines.</h1>
          <h1 className="title">Great Times.</h1>
          <h5 className="my-5">
            Amusement machines sales and business solutions that meet your
            needs.
          </h5>
          <a href="/#contact">
            <Button variant="light" className="rounded-0 font-weight-bold">
              Contact Us
            </Button>
          </a>
        </Col>
        <Col lg={7} xs={12}>
          <Image
            src="/img/machines/hero-banner.png"
            alt="hero banner"
            layout="responsive"
            width={620}
            height={820}
          />
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default Hero;
