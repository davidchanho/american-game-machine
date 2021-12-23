import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import AppearContainer from "../../components/appear-container";
import GetAQuote from "../../components/get-a-quote";
import heroBannerImage from "../../public/img/machines/hero-banner.webp";
import Navbar from "../navbar";

function Hero() {
  return (
    <section className="w-100 max-h-100 bg-dark flex align-items-end flex-column text-center">
      <Navbar />

      <Row className="g-0 d-flex align-items-center">
        <Col xs={12} md={{ span: 5, offset: 1 }}>
          <AppearContainer className="text-white">
            <h1 className="display-4">American Game Machine</h1>
            <p className="h3 mt-2">
              Skill Games & Fish Tables that meet your needs.
            </p>
            <GetAQuote />
          </AppearContainer>
        </Col>
        <Col className="d-none d-md-block">
          <Image src={heroBannerImage} alt="hero banner" placeholder="blur" />
        </Col>
      </Row>

      <div className="d-none d-md-block bottom-0 start-50 translate-middle-x mb-3 bounce pointer">
        <a href="/#category" aria-label="scroll down">
          <Image
            src="/svg/arrow-down.svg"
            alt="arrow-down"
            width={30}
            height={30}
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
