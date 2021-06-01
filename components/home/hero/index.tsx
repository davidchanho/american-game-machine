import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Navbar from "../../shared/navbar";
import Container from "./styles";

function Hero() {
  return (
    <Container className="vh-100 p-0 rounded-0 text-white bg-dark">
      <Navbar />
      <Row noGutters className="w-100 d-flex align-items-center">
        <Col lg={{ span: 4, offset: 1 }} xs={12}>
          <header className="header">
            <h1 className="title">Great Machines.</h1>
            <h1 className="title">Great Times.</h1>
            <h2 className="my-5">
              Amusement machines sales and business solutions that meet your
              needs.
            </h2>
            <a href="/#contact">
              <Button variant="light">Contact Us</Button>
            </a>
          </header>
        </Col>
        <Col lg={7} xs={12}>
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
    </Container>
  );
}

export default Hero;
